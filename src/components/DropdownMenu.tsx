import { Fragment } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';
import cn from 'classnames';

function DropdownMenu() {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="block p-1 focus:outline-none lg:hidden">
        <Bars3Icon className="h-8 w-8" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/events"
                  className={cn(
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    {
                      'bg-blue-500 text-white': active,
                      'text-gray-900': !active,
                    },
                  )}
                >
                  Events
                </Link>
              )}
            </Menu.Item>
            {session && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/events/submit"
                    className={cn(
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      {
                        'bg-blue-500 text-white': active,
                        'text-gray-900': !active,
                      },
                    )}
                  >
                    Add Event
                  </Link>
                )}
              </Menu.Item>
            )}
          </div>
          <div className="px-1 py-1">
            {session && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/dashboard"
                    className={cn(
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      {
                        'bg-blue-500 text-white': active,
                        'text-gray-900': !active,
                      },
                    )}
                  >
                    Dashboard
                  </Link>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
              {({ active }) =>
                session ? (
                  <button
                    className={cn(
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      {
                        'bg-blue-500 text-white': active,
                        'text-gray-900': !active,
                      },
                    )}
                    onClick={() => signOut()}
                  >
                    Sign Out{' '}
                    <ArrowLeftOnRectangleIcon className="ml-2 h-6 w-6" />
                  </button>
                ) : (
                  <Link
                    href="/auth/signin"
                    className={cn(
                      'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      {
                        'bg-blue-500 text-white': active,
                        'text-gray-900': !active,
                      },
                    )}
                  >
                    Sign In{' '}
                    <ArrowRightOnRectangleIcon className="ml-2 h-6 w-6" />
                  </Link>
                )
              }
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownMenu;
