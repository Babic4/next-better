'use client'

import { useRouter } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs'

// constant
import { TABS } from './tabs'

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const openTab = (url: string) => {
    router.push(`/settings/${url}`)
  }

  return (
    <div className='flex flex-col gap-6'>
      <div>
        <h1 className='text-2xl font-bold'>Settings</h1>
        <p className='text-sm text-sidebar-foreground/70'>
          Manage your account settings and preferences.
        </p>
      </div>
      <div>
        <Tabs defaultValue='account' className='w-[400px]'>
          <TabsList
            className='h-auto'
            style={{ paddingBlock: '6px', paddingInline: '10px' }}
          >
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => openTab(tab.href)}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div>{children}</div>
    </div>
  )
}
