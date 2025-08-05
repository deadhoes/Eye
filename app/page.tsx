import { Button } from "@/components/ui/button"
import { Github, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-10 text-center drop-shadow-lg">
        Obscura
      </h1>
      
      <div className="flex gap-5">
        <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="w-15 h-15 rounded-full bg-white hover:bg-gray-200 text-black shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="sr-only">Discord</span>
          </Button>
        </Link>
        
        <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="w-15 h-15 rounded-full bg-white hover:bg-gray-200 text-black shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-7 h-7" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
