import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import ThankYouPopup from '@/components/ThankyouPopUp';
import { getSubscriptionByUserId } from '../api/actions';
import PricingSection from '@/components/PricingSection';
import StripePortalButton from '@/components/StripePortalButton';
import {Button} from "@/components/ui/button";

export default async function Dashboard() {
  const { userId } = auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

const sub = await getSubscriptionByUserId(userId)
const isInactive = sub ? sub?.sub_status !== 'active' : true

if (isInactive) {
  redirect('/processing-page');
}

  return (
    <div>
          {userId} 
          <br />
          {sub?.sub_status}
          <br />
          {isInactive}
          <br />

          {isInactive ? <PricingSection /> : <div>
            <StripePortalButton />
            <ThankYouPopup />
          
            </div>}
    </div>
    
  );
  
}