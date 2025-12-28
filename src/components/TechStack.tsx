
import React from 'react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Tech Stack</h3>
        <span className="text-xs text-gray-500 uppercase tracking-widest">Skills</span>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {SKILLS.map((skill, index) => {
          const IconComponent = (Icons as any)[skill.icon];
          return (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all hover:bg-violet-500/5"
              title={skill.name}
            >
              <div className="text-gray-400 group-hover:text-violet-400 transition-colors mb-1">
                {IconComponent && <IconComponent size={24} />}
              </div>
              <span className="text-[10px] text-gray-500 group-hover:text-white font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
