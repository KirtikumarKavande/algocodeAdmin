import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  
} from "@/components/ui/dialog";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { 
  BookOpen
    } from "lucide-react";
export function ArticleModal({ article, setArticle }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
          <button className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>

              <div className="text-left">
                <h3 className="font-medium text-lg text-white">Add Article</h3>
                <p className="text-sm text-white/50">
                  Provide additional context
                </p>
              </div>
            </div>
          </button>
      </DialogTrigger>
      <DialogContent className=" bg-gray-400 ">
        <DialogHeader>
          <DialogTitle className="">Add Article</DialogTitle>
          <DialogDescription className="text-black">
            Make changes to your Article here.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-96 max-h-[400px] overflow-y-scroll no-scrollbar">
          <ReactQuill
            className="text-black "
            theme="snow"
            value={article}
            onChange={setArticle}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
