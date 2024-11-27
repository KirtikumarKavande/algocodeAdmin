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
import { Lightbulb } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function SolutionModal() {
  const [solution, setSolution] = useState({
    cpp: "",
    java: "",
    python: "",
    javascript: "",
  });

  const handleInputChange = (language, value) => {
    setSolution((prev) => ({ ...prev, [language]: value }));
  };

  const handleSubmit = (language) => {
    console.log(`Submitting solution for ${language}:`, solution[language]);
    alert(`Solution for ${language} submitted successfully!`);
  };
  return (
    <Dialog className="w-[100vh]">
      <DialogTrigger asChild>
        <button className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lightbulb className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg text-white">Add Solution</h3>
              <p className="text-sm text-white/50">Include your solution</p>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className=" ">
   
        <div className="">
          <div className=" mx-auto p-2 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold mb-2 text-center">
              Add Problem Solution
            </h1>
            <Tabs defaultValue="cpp" className="space-y-6">
              <TabsList className="flex justify-center">
                <TabsTrigger value="cpp" className="w-24 text-center">
                  C++
                </TabsTrigger>
                <TabsTrigger value="java" className="w-24 text-center">
                  Java
                </TabsTrigger>
                <TabsTrigger value="python" className="w-24 text-center">
                  Python
                </TabsTrigger>
                <TabsTrigger value="javascript" className="w-24 text-center">
                  JavaScript
                </TabsTrigger>
              </TabsList>
              {["cpp", "java", "python", "javascript"].map((language) => (
                <TabsContent value={language} key={language}>
                  <div>
                    <label
                      htmlFor={`solution-${language}`}
                      className="block text-lg font-medium mb-2"
                    >
                      Write {language.toUpperCase()} Solution
                    </label>
                    <div className="bg-slate-800 p-3 border-b border-white/10 flex items-center gap-2">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>
                    </div>
                    <Textarea
                      id={`solution-${language}`}
                      rows={10}
                      value={solution[language]}
                      style={{ outline: "none", boxShadow: "none" }}
                      onChange={(e) =>
                        handleInputChange(language, e.target.value)
                      }
                      placeholder={`Enter the ${language.toUpperCase()} solution...`}
                      className="h-[200px] bg-slate-900 border-0 text-white font-mono placeholder:text-white/30 rounded-t-none overflow-y-scroll no-scrollbar "
                    />
                    <Button
                      onClick={() => handleSubmit(language)}
                      className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                    >
                      Submit Solution
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      
      </DialogContent>
    </Dialog>
  );
}
