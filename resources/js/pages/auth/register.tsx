import InputError from '@/components/input-error';
import { Spinner } from '@/components/spinner';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { AuthLayout } from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head, Link } from '@inertiajs/react';

export default function Register({}) {
  return (
    <AuthLayout>
      <Head title="Register" />

      <Form
        {...store.form()}
        resetOnSuccess={['password', 'password_confirmation']}
        resetOnError={['password', 'password_confirmation']}
        disableWhileProcessing
        className="w-full space-y-8 rounded-lg bg-white px-5 py-6 md:w-lg"
        data-test="register-form"
      >
        {({ processing, errors }) => (
          <>
            <h2 className="mb-8 text-[32px] font-bold text-grey-900">
              Sign Up
            </h2>

            <div className="space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  tabIndex={1}
                  autoComplete="name"
                  required
                />
                <InputError message={errors.name} />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  tabIndex={2}
                  autoComplete="email"
                  required
                />
                <span>{errors.email}</span>
              </div>

              <div className="flex flex-col">
                <Label htmlFor="password">Create Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  tabIndex={3}
                  required
                />
                <span className="self-end pt-2 text-xs leading-1.5 tracking-normal text-grey-500">
                  Passwords must be at least 8 characters
                </span>
                <InputError message={errors.password} />
              </div>
            </div>

            <div className="flex flex-col">
              <Label htmlFor="password">Password Confirmation</Label>
              <Input
                id="password"
                type="password"
                name="password_confirmation"
                tabIndex={4}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-md bg-grey-900 py-4 text-sm leading-normal font-bold tracking-normal text-white"
              disabled={processing}
            >
              {processing && <Spinner />}
              Create Account
            </Button>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-sm leading-normal tracking-normal text-grey-500">
                Already have an account?
              </span>
              <Link
                href={login()}
                className="text-sm leading-normal font-bold tracking-normal text-grey-900 underline"
              >
                Login
              </Link>
            </div>
          </>
        )}
      </Form>
    </AuthLayout>
  );
}
