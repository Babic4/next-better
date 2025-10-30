import { Fingerprint, LockKeyhole } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/shared/ui/button'
import { DotPattern } from '@/shared/ui/dot-pattern'

import { cn } from '@/shared/lib/css'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center font-sans dark:bg-black relative'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 dark:bg-black z-2'>
        <div className='flex flex-col items-center justify-center gap-6 text-center sm:text-left'>
          <h1 className='max-w-md text-3xl font-semibold leading-13 tracking-tight text-black text-center dark:text-zinc-50'>
            <span className='relative text-4xl'>
              <span
                className='absolute -inset-y-1 -inset-x-2 block bg-yellow-200 rounded-sm'
                aria-hidden='true'
              ></span>
              <span className='relative font-bold text-black'>
                The best App
              </span>
            </span>
            <br /> with{' '}
            <span className='relative'>
              <span
                className='absolute -inset-0.5 block bg-gray-900/15 rounded-sm'
                aria-hidden='true'
              ></span>
              <span className='relative font-bold text-black'>Next</span>
            </span>{' '}
            and{' '}
            <span className='relative'>
              <span
                className='absolute -inset-0.5 block bg-gray-900/15 rounded-sm'
                aria-hidden='true'
              ></span>
              <span className='relative font-bold text-black'>Better-Auth</span>
            </span>
            .
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
      <DotPattern
        width={8}
        height={8}
        cr={1.6}
        glow={true}
        className='text-yellow-400 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]'
      />
      <DotPattern
        width={16}
        height={16}
        cr={1.2}
        glow={true}
        className='text-gray-950 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]'
      />
    </div>
  )
}
