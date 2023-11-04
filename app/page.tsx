/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wLwLwDg94te
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">DiscoveryGPT</h1>
          <nav>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mx-3" href="#">
              Features
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mx-3" href="#">
              Pricing
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mx-3" href="#">
              About
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mx-3" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="text-center py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            Revolutionize Your Sales Process
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Our AI assistant listens to your Zoom calls, generates discovery questions, and takes notes for you in real
            time.
          </p>
          <div className="mt-8">
            <Link href="/home" className={buttonVariants({ variant: "default" })}>Get Started!</Link>
          </div>
        </section>
        <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">Features</h2>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  alt="Placeholder"
                  className="h-80 w-full object-cover"
                  height="400"
                  src="https://www.shutterstock.com/image-vector/customer-service-icon-user-laptop-260nw-520867126.jpg"
                  style={{
                    aspectRatio: "350/200",
                    objectFit: "cover",
                  }}
                  width="350"
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Real-Time Assistance</p>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Our AI listens to your calls and provides assistance in real time, ensuring you never miss an
                    opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  alt="Placeholder"
                  className="h-80 w-full object-cover"
                  height="400"
                  src="https://illustoon.com/photo/9660.png"
                  style={{
                    aspectRatio: "350/200",
                    objectFit: "cover",
                  }}
                  width="350"
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Discovery Questions</p>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Our AI generates discovery questions based on the conversation, helping you dive deeper into your
                    client's needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  alt="Placeholder"
                  className="h-80 w-full object-cover"
                  height="200"
                  src="https://c8.alamy.com/comp/2JA809N/open-notebook-with-a-spiral-and-a-simple-pencil-close-up-from-above-quick-hand-sketch-2JA809N.jpg"
                  style={{
                    aspectRatio: "350/200",
                    objectFit: "cover",
                  }}
                  width="350"
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Note Taking</p>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Forget about manual note-taking. Our AI takes comprehensive notes for you so you can focus on the
                    conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 DiscoveryGPT. All rights reserved.</p>
          <nav>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mx-3" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mx-3" href="#">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
