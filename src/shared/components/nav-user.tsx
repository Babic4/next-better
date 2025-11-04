'use client'

import { useRouter } from 'next/navigation'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/shared/ui/sidebar'
import { Skeleton } from '@/shared/ui/skeleton'
// server action
import { signOutAction } from '@/shared/api/auth'
import { authClient } from '@/shared/lib/auth-client'

export function NavUser() {
  const router = useRouter()
  const { isMobile } = useSidebar()

  const { data: authData, isPending } = authClient.useSession()

  const fetchLogout = () => {
    signOutAction()
    router.push('/login')
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              {isPending || !authData ? (
                <>
                  <Skeleton className='h-8 w-8 rounded-lg' />
                  <div className='flex flex-1 flex-col gap-1'>
                    <Skeleton className='w-full h-[14px]' />
                    <Skeleton className='w-full h-[12px]' />
                  </div>
                </>
              ) : (
                <>
                  <Avatar className='h-8 w-8 rounded-lg'>
                    <AvatarImage
                      src={authData.user.image || ''}
                      alt={authData.user.name}
                    />
                    <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                  </Avatar>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-medium'>
                      {authData.user.name}
                    </span>
                    <span className='truncate text-xs'>
                      {authData.user.email}
                    </span>
                  </div>
                </>
              )}
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                {isPending || !authData ? (
                  <>
                    <Skeleton className='h-8 w-8 rounded-lg' />
                    <div className='flex flex-1 flex-col gap-1'>
                      <Skeleton className='w-full h-[14px]' />
                      <Skeleton className='w-full h-[12px]' />
                    </div>
                  </>
                ) : (
                  <>
                    <Avatar className='h-8 w-8 rounded-lg'>
                      <AvatarImage
                        src={authData.user?.image || ''}
                        alt={authData.user.name}
                      />
                      <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                    </Avatar>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                      <span className='truncate font-medium'>
                        {authData.user.name}
                      </span>
                      <span className='truncate text-xs'>
                        {authData.user.email}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={fetchLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
