/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uj7jFI93L4G
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full p-6 relative">
      <Button aria-label="Start recording" className="absolute top-4 right-4 bg-gray-800 text-white rounded-md">
        Start recording
      </Button>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Opportunity Name</h1>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">People Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-300">Company A</p>
            <p className="text-gray-500 dark:text-gray-400">Role: Sales Manager</p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Jane Smith</h3>
            <p className="text-gray-600 dark:text-gray-300">Company B</p>
            <p className="text-gray-500 dark:text-gray-400">Role: Product Owner</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Command of the Message</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Current State</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Negative Consequences</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">After State</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Positive Business Outcomes</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Advice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Questions to Ask</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Question 1</li>
              <li>Question 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Concerns</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Concern 1</li>
              <li>Concern 2</li>
            </ul>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold text-lg">Next Steps</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Step 1</li>
              <li>Step 2</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

