'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function SignInPage() {
  return (
    <MaxWidthWrapper>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full space-y-6 rounded-2xl shadow-none px-4 py-10 ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="mt-4 text-6xl font-bold tracking-tight text-white">
              Sign in
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Input
                type="text"
                placeholder='Email'
                required
                className="w-full rounded-md bg-input text-white px-3.5 py-3.5 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Input
                type="password"
                placeholder='Password'
                required
                className="w-full rounded-md bg-input text-white px-3.5 py-3.5 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className="w-full rounded-md bg-primary px-3.5 py-3 text-center font-bold text-lg text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            Login
          </SignIn.Action>
          <p className="text-center text-sm text-white">
            No account?{' '}
            <Clerk.Link
              navigate="sign-up"
              className="font-medium text-gray-200 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-gray-400 hover:underline focus-visible:underline"
            >
              Create
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </MaxWidthWrapper>
  )
}