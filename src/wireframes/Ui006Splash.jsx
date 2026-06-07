import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Ui006Splash() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-primary-500 relative">
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-24 h-24 bg-white rounded-3xl flex justify-center items-center text-primary-500 text-5xl font-bold mb-6 shadow-2xl">
          A
        </div>
        <h1 className="text-2xl font-bold text-white tracking-widest">
          UNTITLED
        </h1>
      </div>
      
      <div className="absolute bottom-16 flex flex-col items-center">
        <Loader2 size={24} className="text-white/60 animate-spin mb-4" />
        <p className="text-white/60 text-xs font-mono">Verifying secure token...</p>
      </div>
    </div>
  );
}
