'use client'
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MenuIcon, Code, BookOpen, Lightbulb, Save, 
  CheckCircle, Star, Coffee, Sparkles,
  ChevronRight, Layout, Settings, FileCode
} from "lucide-react";
import Markdown from 'react-markdown'
import { ArticleModal } from '@/components/ui/custom/ArticleModal';
const ProblemCreator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [difficulty, setDifficulty] = useState('');
  const [isShowPreview, setIsShowPreview] = useState(false);
  const [problemDescription,setProblemDescription] = useState('');
  const [problemInfo,setProblemInfo] = useState({title:"",codeStub:""});
  console.log(problemInfo)
  const steps = [
    { number: 1, title: 'Basic Info', icon: Layout },
    { number: 2, title: 'Description', icon: FileCode },
    { number: 3, title: 'Code Stub', icon: Code },
    { number: 4, title: 'Extras', icon: Settings }
  ];

  const difficultyOptions = [
    { level: 'easy', color: 'emerald', icon: Coffee },
    { level: 'medium', color: 'amber', icon: Star },
    { level: 'hard', color: 'rose', icon: Sparkles }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-white/10 p-2 rounded-lg backdrop-blur-sm"
      >
        <MenuIcon className="w-6 h-6 text-white" />
      </button>

      {/* Side Navigation */}
      <div className={`
        fixed md:relative inset-y-0 left-0 bg-slate-900/95 backdrop-blur-lg w-72 
        transform transition-transform duration-300 ease-in-out z-40
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:block flex-shrink-0
      `}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h1 className="text-xl font-semibold text-white">Problem Creator</h1>
          </div>

          <div className="space-y-2">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => {
                  setActiveStep(step.number);
                  setIsMenuOpen(false); // Close menu on mobile after selection
                }}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-xl transition-all group
                  ${activeStep === step.number 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'hover:bg-white/5 text-white/70'}
                `}
              >
                <step.icon className={`w-5 h-5 ${
                  activeStep === step.number ? 'text-blue-400' : 'text-white/50'
                }`} />
                <span className="font-medium">{step.title}</span>
                {activeStep === step.number && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Save className="w-4 h-4" />
              Save Problem
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 md:py-8 md:px-8 lg:px-12 transition-all duration-300">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
          <div className="p-6 md:p-8">
            {/* Step 1: Basic Info */}
            {activeStep === 1 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-6">
                  <Label className="text-lg text-white/90">Problem Title</Label>
                  <Input 
                  onChange={(e) => setProblemInfo({ ...problemInfo, title: e.target.value })}
                  value={problemInfo.title || ''}
                    placeholder="Enter an engaging title..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 h-14 text-lg"
                  />
                </div>

                <div className="space-y-6">
                  <Label className="text-lg text-white/90">Difficulty Level</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {difficultyOptions.map(({ level, color, icon: Icon }) => (
                      <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`
                          relative p-4 rounded-xl border-2 transition-all
                          ${difficulty === level 
                            ? `border-${color}-500 bg-${color}-500/10` 
                            : 'border-white/10 hover:border-white/20'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${
                            difficulty === level ? `text-${color}-400` : 'text-white/70'
                          }`} />
                          <span className="capitalize font-medium">{level}</span>
                        </div>
                        {difficulty === level && (
                          <CheckCircle className={`
                            absolute top-2 right-2 w-4 h-4 text-${color}-400
                          `} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Label className="text-lg text-white/90">Tags</Label>
                  <Input 
                    placeholder="Add tags separated by commas..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Description */}
            {activeStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                  <Label className="text-lg text-white/90">Problem Description</Label>
                  <button onClick={() => setIsShowPreview(!isShowPreview)} className="text-sm text-white/50">{!isShowPreview ? 'Preview' : 'Edit'}</button>
                  <span className="text-sm text-white/50">Markdown Supported</span>
                </div>
                {
                  !isShowPreview? (
                    <Textarea 
                    value={problemDescription|| ""}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    placeholder="Describe your problem here..."
                    className="min-h-[400px] bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                  ):(<Markdown>{problemDescription}</Markdown>)
                }
             
              </div>
            )}

            {/* Step 3: Code Stub */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <Label className="text-lg text-white/90">Initial Code Stub</Label>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <div className="bg-slate-800 p-3 border-b border-white/10 flex items-center gap-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                  <Textarea 
                    onChange={(e) => setProblemInfo({ ...problemInfo, codeStub: e.target.value })}
                    value={problemInfo.codeStub || ''}
                    className="min-h-[400px] bg-slate-900 border-0 text-white font-mono placeholder:text-white/30"
                    placeholder="// Write your starter code here..."
                  />
                </div>
              </div>
            )}

            {/* Step 4: Extras */}
            {activeStep === 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-500">
                <button className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-left">
                      <ArticleModal/>
                      {/* <h3 className="font-medium text-lg text-white">Add Article</h3> */}
                      <p className="text-sm text-white/50">Provide additional context</p>
                    </div>
                  </div>
                </button>

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
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ProblemCreator;