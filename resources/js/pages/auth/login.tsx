import InputError from '@/components/input-error';
import { Spinner } from '@/components/spinner';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { Form, Head, Link } from '@inertiajs/react';

interface LoginProps {
  status?: string;
}

export default function Login({ status }: LoginProps) {
  return (
    <AuthLayout>
      <Head title={'Login'} />

      <Form
        {...store.form()}
        resetOnSuccess={['password']}
        resetOnError={['password']}
        className="w-full space-y-8 rounded-lg bg-white px-5 py-6 md:w-lg"
      >
        {({ processing, errors }) => (
          <>
            <h2 className="mb-8 text-[32px] font-bold text-grey-900">Login</h2>

            <div className="space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  tabIndex={1}
                  autoComplete="email"
                  required
                />
                <InputError message={errors.email} />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  tabIndex={2}
                  required
                />
                <InputError message={errors.password} />
              </div>
            </div>

            <Button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-grey-900 py-4 text-sm leading-normal font-bold tracking-normal text-white"
              disabled={processing}
              data-test="login-button"
            >
              {processing && <Spinner />}
              Login
            </Button>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-sm leading-normal tracking-normal text-grey-500">
                Need to create an account?
              </span>
              <Link
                href={register()}
                className="text-sm leading-normal font-bold tracking-normal text-grey-900 underline"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </Form>

      {status && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">
          {status}
        </div>
      )}
    </AuthLayout>
  );
}
