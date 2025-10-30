import { AppWrapper } from '@/shared/ui/layouts'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppWrapper>{children}</AppWrapper>
}
