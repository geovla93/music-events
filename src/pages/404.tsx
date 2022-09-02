import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import Layout from '@/components/Layout';
import Container from '@/components/Container';

function Custom404() {
  return (
    <Layout title="Page Not Found">
      <Container className="pt-16 text-center">
        <ExclamationTriangleIcon className="mx-auto h-12 w-12" />
        <h1 className="mb-10 flex items-center justify-center text-5xl">
          404 - Page Not Found
        </h1>
        <h4 className="font-bold">Sorry, there is nothing here</h4>
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-400 hover:underline"
        >
          Go Back Home
        </Link>
      </Container>
    </Layout>
  );
}

export default Custom404;
