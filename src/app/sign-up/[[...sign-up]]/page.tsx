'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
  return (
    <MaxWidthWrapper className="grid w-full flex-grow items-center px-4 sm:justify-center">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="w-full space-y-6 rounded-2xl shadow-none px-4 py-10ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="mt-4 text-6xl font-bold text-white tracking-tight ">
                Sign Up
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-4">
            <Clerk.Field name="emailAddress" className="space-y-2">
              <Clerk.Input
                type="email"
                placeholder='Email'
                required
                className="w-full rounded-md text-white bg-input px-3.5 py-3.5 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Input
                type="password"
                placeholder='Password'
                required
                className="w-full rounded-md text-white bg-input px-3.5 py-3.5 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignUp.Action
            submit
            className="w-full rounded-md px-3.5 py-3.5 text-center bg-primary text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-green-500 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            Sign Up
          </SignUp.Action>

          <p className="text-center text-sm text-white">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="text-gray-200 font-bold decoration-zinc-950/20 underline-offset-4 outline-none hover:text-gray-400 hover:underline focus-visible:underline"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
        <SignUp.Step
          name="verifications"
          className="w-full space-y-6 rounded-2xl shadow-none px-4 py-10 ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
              Verify email code
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <SignUp.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-2">
              <Clerk.Label className="text-sm font-semibold text-white">Email code</Clerk.Label>
              <Clerk.Input
                type="otp"
                required
                className="w-full rounded-md bg-white px-3.5 py-3.5 bg-input text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <SignUp.Action
              submit
              className="w-full rounded-md bg-primary px-3.5 py-3.5 text-center text-sm font-bold text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-green-500 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
            >
              Verify
            </SignUp.Action>
          </SignUp.Strategy>
          <p className="text-center text-sm text-white">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold text-gray-200 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-gray-400 hover:underline focus-visible:underline"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
        <SignUp.Step
          name="continue"
          className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
              Continue registration
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <Clerk.Field name="username" className="space-y-2">
            <Clerk.Label className="text-sm font-medium text-zinc-950">Username</Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
            />
            <Clerk.FieldError className="block text-sm text-red-400" />
          </Clerk.Field>
          <SignUp.Action
            submit
            className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            Continue
          </SignUp.Action>
          <p className="text-center text-sm text-zinc-500">
            Already have an account?{' '}
            <Clerk.Link
              navigate="sign-in"
              className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    </MaxWidthWrapper>
  )
}