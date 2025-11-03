'use client'

import { authClient } from '@/shared/lib/auth-client'

export default function Page() {
  const { data: authData } = authClient.useSession()

  return (
    <>
      <div className='flex items-center justify-center mx-auto my-35'>
        <h1 className='text-5xl font-bold'>
          🎉 Hello, {authData?.user.name || 'User'}! 🎉
        </h1>
      </div>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
      </div>
      <div className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min' />
    </>
  )
}
