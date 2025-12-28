
import React from 'react';
import { Download, MapPin, Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-full flex flex-col md:flex-row items-center justify-between gap-8 py-4 overflow-hidden">
      
      {/* Left Content */}
      <div className="flex flex-col justify-center z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium w-fit mb-6 backdrop-blur-sm">
          <MapPin size={12} className="text-violet-400" />
          <span>Ho Chi Minh City, Vietnam</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Thieu Viet Hoang</span>
        </h1>
        
        <p className="text-gray-400 text-lg font-medium max-w-lg mb-8 leading-relaxed">
          Software Engineering Student at <span className="text-white font-semibold">Saigon University</span>. 
          Passionate about building modern web experiences with clean code.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="group relative px-6 py-3 bg-white text-black rounded-xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <Download size={18} />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* Right Decorative Element (Abstract Code Block) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 md:translate-x-0 opacity-20 md:opacity-100 pointer-events-none">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <div className="relative z-10 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2 font-mono text-xs text-gray-400">
                    <p><span className="text-violet-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{`{`}</span></p>
                    <p className="pl-4">name: <span className="text-green-400">'Viet Hoang'</span>,</p>
                    <p className="pl-4">role: <span className="text-green-400">'Frontend Dev'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'TypeScript'</span>]</p>
                    <p><span className="text-yellow-400">{`}`}</span>;</p>
                </div>
            </div>
             <div className="absolute -bottom-4 -right-4 z-0 p-6 bg-violet-600/10 backdrop-blur-md border border-white/5 rounded-2xl rotate-[12deg]">
                <Code size={32} className="text-violet-400/50" />
            </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
