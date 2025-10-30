import { PublicShell } from '@/shared/ui/layouts'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PublicShell>{children}</PublicShell>
}
