import { PublicWrapper } from '@/shared/ui/layouts'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PublicWrapper>{children}</PublicWrapper>
}
