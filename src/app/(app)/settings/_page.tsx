import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'

export default function SettingsPage() {
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
          <TabsList>
            <TabsTrigger value='account'>Account</TabsTrigger>
            <TabsTrigger value='organization'>Organization</TabsTrigger>
            <TabsTrigger value='billing'>Billing</TabsTrigger>
            <TabsTrigger value='notification'> Notification</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            Make changes to your account here.
          </TabsContent>
          <TabsContent value='organization'>
            Create and setting your organization.
          </TabsContent>
          <TabsContent value='billing'>
            Connecting additional services.
          </TabsContent>
          <TabsContent value='notification'>
            Setting notifications for app.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
