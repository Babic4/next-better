import { Fingerprint, LockKeyhole } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black'>
        <div className='flex flex-col items-center justify-center gap-6 text-center sm:text-left'>
          <h1 className='max-w-md text-3xl font-semibold leading-10 tracking-tight text-black text-center dark:text-zinc-50'>
            The best App
            <br /> with Next and Better-Auth.
          </h1>
          <div className='flex gap-3'>
            <Button asChild>
              <Link href='/login'>
                <Fingerprint />
                Login
              </Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='/signup'>
                <LockKeyhole />
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
