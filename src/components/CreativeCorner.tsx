
import React from 'react';
import { Camera, Video, Mic, ArrowUpRight } from 'lucide-react';
import { CREATIVE_ITEMS } from '../constants';

const CreativeCorner: React.FC = () => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Creative Corner</h3>
        <div className="flex gap-2">
           <Camera size={16} className="text-gray-500" />
           <Video size={16} className="text-gray-500" />
           <Mic size={16} className="text-gray-500" />
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mb-6">Beyond coding, I enjoy capturing moments and creating digital content.</p>
      
      <div className="space-y-3">
        {CREATIVE_ITEMS.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium truncate">{item.title}</h4>
              <p className="text-[10px] text-gray-500 uppercase">{item.type}</p>
            </div>
            <ArrowUpRight size={16} className="text-gray-600 group-hover:text-violet-400 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeCorner;
