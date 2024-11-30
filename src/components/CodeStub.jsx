import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { languageSupported } from "@/utilities/constant";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const CodeStub = ({takeInitialCodeStub}) => {
  const handleInputChange = (language, value) => {
    setInitialCodeSTub((prev) => ({ ...prev, [language]: value }));
  };
  const [initialCodeStub, setInitialCodeSTub] = useState({
    cpp: "",
    java: "",
    python: "",
    javascript: "",
  });
  function handleSubmit() {
    toast.success("saved")
    takeInitialCodeStub(initialCodeStub)
  }
  return (
    <div className="">
      <div className=" mx-auto p-2 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-2 text-center">
          Add Initial Code Stub
        </h1>
        <Tabs defaultValue="cpp" className="space-y-6">
          <TabsList className="flex justify-center">
            {languageSupported.map((lang) => (
              <TabsTrigger value={lang} className="w-24 text-center">
                {lang}
              </TabsTrigger>
            ))}
          </TabsList>
          {languageSupported.map((language) => (
            <TabsContent value={language} key={language}>
              <div>
                <div className="bg-slate-800 p-3 border-b border-white/10 flex items-center gap-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <Textarea
                  id={`initialCodeStub-${language}`}
                  rows={10}
                  value={initialCodeStub[language]}
                  style={{ outline: "none", boxShadow: "none" }}
                  onChange={(e) => handleInputChange(language, e.target.value)}
                  placeholder={`Enter the ${language.toUpperCase()} Initial CodeStub...`}
                  className="h-[300px] bg-slate-900 border-0 text-white font-mono placeholder:text-white/30 rounded-t-none overflow-y-scroll no-scrollbar "
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <Button
          onClick={() => handleSubmit()}
          className="mt-4 bg-indigo-600 flex justify-center  mx-auto   width-full text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Submit 
        </Button>
      </div>
    </div>
  );
};

export default CodeStub;
