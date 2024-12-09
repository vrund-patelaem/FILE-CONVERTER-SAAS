/* eslint-disable @next/next/no-img-element */
"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import config from "@/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// A simple button to sign in with Clerk.
// It automatically redirects the user to callbackUrl (config.auth.callbackUrl) after login,
// which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const ButtonSignin = ({
  text = "Get started",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const { openSignIn, signOut } = useClerk();

  const handleClick = () => {
    if (isSignedIn) {
      router.push('/');
    } else {
      openSignIn({
        // Optionally, you can specify sign-in options here
        redirectUrl: '/dashboard',
      });
    }
  };

  if (isSignedIn && user) {
    return (
      <Link
        href={'/dashboard'}
        className={`btn ${extraStyle ? extraStyle : ""} flex items-center gap-2`}
      >
        {user.hasImage ? (
          <Image
            src={user.imageUrl}
            alt={user.firstName || "Account"}
            className="w-6 h-6 rounded-full shrink-0"
            referrerPolicy="no-referrer"
            width={24}
            height={24}
          />
        ) : (
          <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
            {user.firstName
              ? user.firstName.charAt(0)
              : user.primaryEmailAddress?.emailAddress || "A"}
          </span>
        )}
        {user.firstName || user.primaryEmailAddress?.emailAddress || "Account"}
      </Link>
    );
  }

  return (
    <Button
      className={`btn bg-[#006fee] border-none scale-1 hover:scale-[1.05] transition-all duration-300 rounded-full px-8 hover:bg-[#006fee] ${
        extraStyle ? extraStyle : ""
      }`}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonSignin;
