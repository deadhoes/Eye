import { Button } from "@/components/ui/button"
import { Github, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-8 text-center">Obscura</h1>

      <div className="flex gap-4">
        <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <Button size="icon" className="rounded-full bg-white text-black w-14 h-14">
            <MessageCircle className="w-6 h-6" />
            <span className="sr-only">Discord</span>
          </Button>
        </Link>

        <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Button size="icon" className="rounded-full bg-white text-black w-14 h-14">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
