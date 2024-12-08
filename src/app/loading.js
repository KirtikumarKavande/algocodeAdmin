// app/loading.tsx
import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/70">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 
          className="h-16 w-16 animate-spin text-primary" 
          strokeWidth={1.5} 
        />
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  )
}