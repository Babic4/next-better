'use server'

import { headers } from 'next/headers'
import { auth } from '@/shared/lib/auth'

export async function signUpAction({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      callbackURL: '/',
    },
  })

  console.log('success signUp', data)
}

export async function signInAction({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
      rememberMe: true,
      callbackURL: '/dashboard',
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  })

  console.log('success signIn', data)
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  })
}
