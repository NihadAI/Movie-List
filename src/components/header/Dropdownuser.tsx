/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown, LogOut, Notebook, Settings2, User2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';


const DropdownUser = ({ user }: { user: any }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >

        <span className="h-12 w-12 rounded-full">
          <img
            src={user?.profileImageUrl || "https://i.imgur.com/WxNkK7J.png"}
            alt="User Avatar"
            className="rounded-full"
          />
        </span>
        <ChevronDown className='hidden sm:block text-white' />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <SignOutButton>
            <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
              <LogOut/>
              Log Out
            </button>
        </SignOutButton>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
