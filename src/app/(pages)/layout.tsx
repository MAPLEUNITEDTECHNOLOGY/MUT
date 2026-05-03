import InnerHeader from '@/components/InnerHeader'
import InnerFooter from '@/components/InnerFooter'

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InnerHeader />
      <main className="flex-grow">{children}</main>
      <InnerFooter />
    </>
  )
}
