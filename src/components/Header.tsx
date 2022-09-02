import Link from 'next/link';
import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { signOut, useSession } from 'next-auth/react';

import Container from './Container';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky inset-x-0 top-0 z-30 h-12 bg-white shadow-md">
      <Container className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="mr-2 flex-shrink-0 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl lg:text-3xl"
        >
          Music Events
        </Link>

        <nav className="ml-2 flex items-center space-x-4">
          <Link
            href="/events"
            className="hidden font-medium transition-colors hover:text-gray-600 md:text-xl lg:inline"
          >
            Events
          </Link>
          {session ? (
            <>
              <Link
                href="/events/submit"
                className="hidden font-medium transition-colors hover:text-gray-600 md:text-xl lg:inline"
              >
                Add Event
              </Link>
              <Link
                href="/dashboard"
                className="hidden font-medium transition-colors hover:text-gray-600 md:text-xl lg:inline"
              >
                Dashboard
              </Link>
              <Button
                variant="secondary"
                className="hidden items-center justify-center lg:inline-flex"
                onClick={() => signOut()}
              >
                Sign Out <ArrowLeftOnRectangleIcon className="ml-2 h-6 w-6" />
              </Button>
            </>
          ) : (
            <Link href="/auth/signin">
              <Button
                variant="secondary"
                className="hidden items-center justify-center lg:inline-flex"
              >
                Sign In <ArrowRightOnRectangleIcon className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          )}
        </nav>
        <DropdownMenu />
      </Container>
    </header>
  );
}

export default Header;
