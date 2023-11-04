/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DSpbuwWlJ7f
 */
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-lg font-semibold text-center">discoveryGPT</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Opportunities
          </Link>
        </nav>
      </header>
      <main className="flex-grow" >{children}</main>
      <footer className="h-20 flex items-center justify-center border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© DiscoveryGPT Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}