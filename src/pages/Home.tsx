
import React from 'react';
import { Github, Linkedin, Facebook, Mail, ArrowUpRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BentoCard from '../components/BentoCard';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import { PROJECTS, SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
        
        {/* Row 1: Hero Section */}
        <BentoCard className="md:col-span-3 md:row-span-2 min-h-[350px]" delay={0.1}>
           <Hero />
           {/* Abstract Background Decoration */}
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        </BentoCard>

        {/* Row 1: Connect Card */}
        <BentoCard className="md:col-span-1" delay={0.2}>
          <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
          <div className="grid grid-cols-2 gap-3">
            {SOCIAL_LINKS.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-violet-500/10 border border-white/10 hover:border-violet-500/30 transition-all group"
              >
                <div className="group-hover:text-violet-400 transition-colors">
                  {link.icon}
                </div>
                <span className="text-[10px] mt-2 font-medium text-gray-500 group-hover:text-white uppercase tracking-tighter">{link.name}</span>
              </a>
            ))}
          </div>
        </BentoCard>

        {/* Row 2: About / Education */}
        <BentoCard className="md:col-span-1" delay={0.3}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          <div>
            <h4 className="font-semibold text-white">Saigon University</h4>
            <p className="text-sm text-gray-400">Software Engineering</p>
            <p className="text-xs text-violet-400 mt-2">Class of 2026</p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <p className="text-xs text-gray-500 italic">"Building the future, one semi-colon at a time."</p>
          </div>
        </BentoCard>

        {/* Row 3: Tech Stack */}
        <BentoCard className="md:col-span-4" delay={0.4}>
          <TechStack />
        </BentoCard>

        {/* Row 4: Projects (Full Width) */}
        <BentoCard className="md:col-span-4" delay={0.5}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Featured Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden cursor-pointer">
                  <Link to={`/project/${project.id}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
                    <div className="flex gap-2 pointer-events-auto">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors" title="View Code">
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors" title="Live Demo">
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <Link to={`/project/${project.id}`} className="block">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h4>
                  </Link>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-grow">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-blue-600 flex items-center justify-center font-bold text-xs">
            TH
          </div>
          <span className="text-gray-500 text-sm">@ 2025 Thiều Việt Hoàng</span>
        </div>
      </footer>
    </main>
  );
};

export default Home;
