import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { signUpSchema, TSignUp } from '@/utils/schemas';
import { useRouter } from 'next/router';

function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { firstName: '', lastName: '', email: '', password: '' },
  });

  const onSubmit: SubmitHandler<TSignUp> = async (data) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        router.push('/auth/signin');
      } else {
        // toast.error(json.message)
      }
    } catch (error: any) {
      // toast.error(error.message)
    }
  };

  return (
    <Layout title="Sign In" className="flex">
      <Container className="m-auto">
        <form
          className="mx-auto w-full max-w-xl rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center font-bold">
            <LockClosedIcon className="h-10 w-10" />
          </div>
          <h2 className="mb-8 text-center text-2xl">Sign Up</h2>
          <div className="px-12 pb-10">
            <div className="mb-2 w-full">
              <div className="relative">
                <input
                  {...register('firstName')}
                  type="text"
                  id="firstName"
                  placeholder=""
                  className="peer block w-full appearance-none rounded-lg border border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="firstName"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-red-600"
                >
                  First Name
                </label>
              </div>
            </div>
            <div className="mb-2 w-full">
              <div className="relative">
                <input
                  {...register('lastName')}
                  type="text"
                  id="lastName"
                  placeholder=""
                  className="peer block w-full appearance-none rounded-lg border border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="lastName"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-red-600"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="mb-2 w-full">
              <div className="relative">
                <input
                  {...register('email')}
                  type="text"
                  id="email"
                  placeholder=""
                  className="peer block w-full appearance-none rounded-lg border border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="email"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-red-600"
                >
                  Email Address
                </label>
              </div>
            </div>
            <div className="mb-2 w-full">
              <div className="relative">
                <input
                  {...register('password')}
                  type="password"
                  placeholder=""
                  className="peer block w-full appearance-none rounded-lg border border-gray-700 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-red-600"
                >
                  Password
                </label>
              </div>
            </div>
            <Button type="submit" className="mt-8 mb-2 w-full">
              Sign Up
            </Button>
            <small>
              Already have an account?{' '}
              <Link
                href="/auth/signup"
                className="text-blue-500 transition-colors hover:text-blue-400"
              >
                Sign In
              </Link>
            </small>
          </div>
        </form>
      </Container>
    </Layout>
  );
}

export default SignUpPage;
