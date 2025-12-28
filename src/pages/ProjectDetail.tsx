
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { PROJECTS } from '../constants';
import BentoCard from '../components/BentoCard';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-violet-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-5xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} />
        <span>Back to Projects</span>
      </Link>

      <div className="grid grid-cols-1 gap-8">
        {/* Hero Image */}
        <BentoCard className="overflow-hidden p-0">
          <div className="aspect-video w-full relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <BentoCard>
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </BentoCard>

            {project.features && (
              <BentoCard>
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BentoCard>
              <h3 className="text-lg font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-gray-300 group-hover:text-white">
                      <Github size={18} />
                      <span>Source Code</span>
                    </span>
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-white" />
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-violet-300 group-hover:text-violet-200">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </span>
                    <ArrowUpRight size={16} className="text-violet-400 group-hover:text-violet-200" />
                  </a>
                )}
              </div>
            </BentoCard>

            <BentoCard>
              <h3 className="text-lg font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-gray-400 border border-white/10 px-2 py-1 rounded-md">
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
