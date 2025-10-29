'use server'

import { headers } from 'next/headers'
import { auth } from '@/shared/lib/auth'

type SuccessResponse = {
  status: 'success'
  message: string
  redirectUrl: string
}

type ErrorResponse = {
  status: 'error'
  message: string
}

type Response = SuccessResponse | ErrorResponse

export async function signUpAction({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}): Promise<Response> {
  try {
    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: '/login',
      },
    })
    return {
      status: 'success',
      message: 'Successfully!',
      redirectUrl: '/login',
    }
  } catch (error) {
    const e = error as Error
    return {
      status: 'error',
      message: e.message || 'Unknown message received.',
    }
  }
}

export async function signInAction({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<Response> {
  try {
    const data = await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
        callbackURL: '/dashboard',
      },
      headers: await headers(),
    })
    return {
      status: 'success',
      message: 'Successfully!',
      redirectUrl: '/dashboard',
    }
  } catch (error) {
    const e = error as Error
    return {
      status: 'error',
      message: e.message || 'Unknown message received.',
    }
  }
}

export async function signOutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })
  } catch (error) {
    const e = error as Error
    return {
      status: 'error',
      message: e.message || 'Unknown message received.',
    }
  }
}
