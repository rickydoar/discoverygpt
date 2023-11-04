/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f5WphTKtDMJ
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-4">Sales Opportunities</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Opportunity 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Details about opportunity 1...</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Opportunity 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Details about opportunity 2...</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Create New Opportunity</h2>
        <form className="space-y-4">
          <Input placeholder="Opportunity Name" type="text" />
          <textarea className="w-full h-24 p-2 rounded-md border border-gray-300" placeholder="Opportunity Details" />
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Create Opportunity
          </Button>
        </form>
      </div>
    </div>
  )
}

