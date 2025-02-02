import { Toaster } from "@/components/ui/toaster"
import DashboardImplementation from "./DashboardImplementation"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        <DashboardImplementation>{children}</DashboardImplementation>
        <Toaster />
    </>
  )
}
