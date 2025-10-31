import { AppShell } from '@/shared/ui/layouts'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>
}
