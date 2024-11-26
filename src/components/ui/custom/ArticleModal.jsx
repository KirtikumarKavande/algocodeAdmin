import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function ArticleModal({article,setArticle}) {

  return (
    <Dialog >
      <DialogTrigger asChild>
      <div className="text-left">
      <h3 className="font-medium text-lg text-white">Add Article</h3>
      <p className="text-sm text-white/50">Provide additional context</p>
      </div>
      </DialogTrigger>
      <DialogContent className=" bg-gray-400 ">
        <DialogHeader>
          <DialogTitle className="">Add Article</DialogTitle>
          <DialogDescription className="text-black">
            Make changes to your Article here. 
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-96 max-h-[400px] overflow-y-scroll">
        <ReactQuill className="text-black "  theme="snow" value={article} onChange={setArticle} />
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button >Save changes</Button>
          </DialogClose >
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
