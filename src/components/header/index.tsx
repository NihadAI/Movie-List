"use client"
import { SignInButton, useUser } from '@clerk/nextjs';
import DropdownUser from './Dropdownuser';


const Header = () => {
    const { user, isSignedIn } = useUser();


  return (
    <header className="sticky top-0 z-999 flex w-full bg-background drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-3 2xsm:gap-7">
          {isSignedIn ? (
            <DropdownUser user={user} /> // Pass user info to DropdownUser
          ) : (
            <SignInButton forceRedirectUrl="/sign-in">
              <button className="bg-input text-white px-4 py-2 rounded">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
