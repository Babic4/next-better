'use client'

import { FormEvent } from 'react'
import Link from 'next/link'
import { cn } from '@/shared/lib/css'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/shared/ui/field'
import { Input } from '@/shared/ui/input'
// better-auth
import { authClient } from '@/shared/lib/auth-client'

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const fetchSighUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(
      e.target.email.value,
      e.target.name.value,
      e.target.password.value
    )
    // const { data, error } = await authClient.signUp.email(
    //   {
    //     email, // user email address
    //     password, // user password -> min 8 characters by default
    //     name, // user display name
    //     image, // User image URL (optional)
    //     callbackURL: '/dashboard', // A URL to redirect to after the user verifies their email (optional)
    //   },
    //   {
    //     onRequest: (ctx) => {
    //       //show loading
    //     },
    //     onSuccess: (ctx) => {
    //       //redirect to the dashboard or sign in page
    //     },
    //     onError: (ctx) => {
    //       // display the error message
    //       alert(ctx.error.message)
    //     },
    //   }
    // )
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={fetchSighUp}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='name'>Full Name</FieldLabel>
                <Input id='name' type='text' placeholder='John Doe' required />
              </Field>
              <Field>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </Field>
              <Field>
                <Field className='grid grid-cols-2 gap-4'>
                  <Field>
                    <FieldLabel htmlFor='password'>Password</FieldLabel>
                    <Input id='password' type='password' required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='confirm-password'>
                      Confirm Password
                    </FieldLabel>
                    <Input id='confirm-password' type='password' required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type='submit'>Create Account</Button>
                <FieldDescription className='text-center'>
                  Already have an account? <Link href='/login'>Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className='px-6 text-center'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{' '}
        and <a href='#'>Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
