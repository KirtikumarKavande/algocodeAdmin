import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ArticleModal() {
  return (
    <Dialog >
      <DialogTrigger asChild>
      <h3 className="font-medium text-lg text-white">Add Article</h3>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white">Add Article</DialogTitle>
          <DialogDescription className="text-white">
            Make changes to your Article here. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
