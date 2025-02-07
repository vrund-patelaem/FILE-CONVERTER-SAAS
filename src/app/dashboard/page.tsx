import Dashboard from '@/components/Dashboard'
import PricingSection from '@/components/PricingSection'
import ThankYouPopup from '@/components/ThankyouPopUp'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
	const { userId } = auth()

	if (!userId) {
		redirect('/sign-in')
	}

	const isInactive = false

	return (
		<div>
			{isInactive ? (
				<PricingSection />
			) : (
				<div className='flex w-full bg-white dark:bg-[#010814] min-h-screen flex-col gap-4'>
					<Dashboard />
					<ThankYouPopup />
				</div>
			)}
		</div>
	)
}
