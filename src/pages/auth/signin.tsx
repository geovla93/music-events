import Link from 'next/link';
import { useRouter } from 'next/router';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { signInSchema, TSignIn } from '@/utils/schemas';

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });
  const router = useRouter();
  const redirect = router.query.redirect as string | undefined;

  const onSubmit: SubmitHandler<TSignIn> = async (data) => {
    const result = await signIn<'credentials'>('credentials', {
      redirect: false,
      ...data,
    });

    if (result?.error) {
      console.log(result.error);

      // toast.error(result.error);
      return;
    }

    if (redirect) {
      router.push(redirect);
    } else {
      router.push('/dashboard');
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
          <h2 className="mb-8 text-center text-2xl">Sign In</h2>
          <div className="px-12 pb-10">
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
              Sign In
            </Button>
            <small>
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/signup"
                className="text-blue-500 transition-colors hover:text-blue-400"
              >
                Sign Up
              </Link>
            </small>
          </div>
        </form>
      </Container>
    </Layout>
  );
}

export default SignInPage;
