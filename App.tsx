
import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowUpRight, 
  Briefcase, 
  GraduationCap, 
  Target,
  Wrench,
  ExternalLink,
  Award,
  Download,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILL_GROUPS, IconMap } from './constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">D</div>
          <span className="font-extrabold text-slate-900 tracking-tight text-xl">Diksha Thakur</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Featured Products', 'Experience', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">{item}</a>
          ))}
          <a 
            href="#" 
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-100"
          >
            Resume <Download size={16} />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQEmV531p_m1Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722881180016?e=1746057600&v=beta&t=H-Yv4K9wRST8C8_8V3L2I8Xk0z1_f-P-N_8f6m-V-fU"
                  alt="Diksha"
                  className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white object-cover shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Diksha+Thakur&background=0D8ABC&color=fff"; }}
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100 mb-2">
                  <Sparkles size={14} /> Associate Product Manager
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-800">Building for the next billion users.</h2>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              Impact Driven <br/><span className="gradient-text italic">Scale Optimized.</span>
            </h1>

            <div className="max-w-3xl space-y-8">
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                I'm <span className="text-slate-900 font-bold underline decoration-blue-400 decoration-4 underline-offset-4">Diksha Thakur</span>. I manage high-traffic verticals at <span className="font-bold">The Times of India</span> and formerly <span className="font-bold">AajTak</span>. My core focus is scaling digital discovery, optimizing SEO growth, and integrating Generative AI into mainstream product ecosystems.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["SEO Growth", "B2C Product Strategy", "AI Integration", "Monetization", "Markets & FinTech", "Real-time Concurrency"].map(tag => (
                  <span key={tag} className="px-5 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 shadow-sm">{tag}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <a 
                  href="https://www.linkedin.com/in/diksha-thakur-980449241" 
                  target="_blank" 
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
                >
                  View My Resume <ArrowUpRight />
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/diksha-thakur-980449241" target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 transition-all shadow-sm">
                    <Linkedin className="text-slate-700" />
                  </a>
                  <a href="mailto:dikshathakur06072001@gmail.com" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 transition-all shadow-sm">
                    <Mail className="text-slate-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-6">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Career Snapshot</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Current</span>
                  <span className="text-slate-900 font-bold">TOI Markets PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Past</span>
                  <span className="text-slate-900 font-bold">AajTak PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Education</span>
                  <span className="text-slate-900 font-bold">NIT Hamirpur</span>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <div className="text-4xl font-black text-blue-600 mb-1">200M+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">MAU Scale Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectSection: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  return (
    <div className="group relative py-20 lg:py-32 border-b border-slate-100 last:border-0 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                {IconMap[project.icon]}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">{tag}</span>
                ))}
              </div>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">{project.title}</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">{project.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.impact.map((imp, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all">
                  <CheckCircle2 className="text-blue-500 mt-0.5 shrink-0" size={18} />
                  <span className="text-sm font-bold text-slate-700">{imp}</span>
                </div>
              ))}
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              className="inline-flex items-center gap-2 text-slate-900 font-black hover:text-blue-600 transition-colors pt-4 group/link"
            >
              Explore Live Product <ArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-slate-200 aspect-video lg:aspect-square">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="py-32 bg-slate-900 text-white scroll-mt-20 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mb-24">
        <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">Professional Journey.</h2>
        <p className="text-xl text-slate-400 font-medium">Over 4 years of shipping impactful products for the largest digital publishers in India.</p>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="group relative p-12 bg-slate-800/40 rounded-[3rem] border border-slate-700 hover:border-blue-500 transition-all">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-10 gap-6">
              <div>
                <div className="text-blue-400 font-black tracking-widest uppercase text-xs mb-3">{exp.period}</div>
                <h3 className="text-3xl lg:text-4xl font-black mb-2">{exp.company}</h3>
                <p className="text-xl font-bold text-slate-400">{exp.role}</p>
              </div>
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
                <Briefcase className="text-white" size={32} />
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {exp.points.map((pt, i) => (
                <li key={i} className="flex gap-4 text-slate-300 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />

      {/* Vertical Project Showcase */}
      <section id="featured-products" className="py-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
           <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight">The Portfolio.</h2>
        </div>
        {PROJECTS.map((p, idx) => <ProjectSection key={idx} project={p} index={idx} />)}
      </section>

      <ExperienceTimeline />

      {/* Skills & Tools Section */}
      <section id="skills" className="py-32 relative scroll-mt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight mb-6">Product Workbench.</h2>
            <p className="text-lg text-slate-600 font-medium">Leveraging a diverse stack of analytical, design, and management tools to drive product success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold border border-slate-100 hover:scale-105 hover:bg-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Highlight */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.15)_0%,_transparent_50%)]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                   <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl"><GraduationCap size={40} className="text-slate-900" /></div>
                   <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">Technical <br/>Foundation.</h2>
                   <p className="text-xl text-slate-400 font-medium">B.Tech. in Electrical Engineering from NIT Hamirpur, providing a strong analytical bedrock for complex problem-solving.</p>
                </div>
                <div className="space-y-10">
                   <div className="flex gap-6 items-start">
                      <div className="text-5xl font-black text-blue-500 opacity-50 italic">01</div>
                      <div>
                         <h4 className="text-2xl font-black text-white mb-1">NIT Hamirpur</h4>
                         <p className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-xs">Bachelor of Technology | 2018-2022</p>
                         <div className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-xl text-blue-400 font-bold border border-blue-500/20">GPA: 8.14</div>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start border-t border-white/10 pt-10">
                      <div className="text-5xl font-black text-blue-500 opacity-50 italic">02</div>
                      <div>
                         <h4 className="text-2xl font-black text-white mb-1">Jawahar Navodaya Vidyalaya</h4>
                         <p className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-xs">Secondary Education | 2017-2018</p>
                         <div className="inline-block px-4 py-1.5 bg-blue-500/10 rounded-xl text-blue-400 font-bold border border-blue-500/20">Aggregate: 91%</div>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-blue-600 font-black text-sm tracking-[0.4em] uppercase mb-12">Get in touch</div>
          <h2 className="text-6xl lg:text-9xl font-black text-slate-900 tracking-tighter mb-16 leading-[0.85]">Let's define <br/><span className="gradient-text italic">the future.</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:dikshathakur06072001@gmail.com" className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl">Email Diksha</a>
            <a href="https://www.linkedin.com/in/diksha-thakur-980449241" target="_blank" className="w-full sm:w-auto px-12 py-6 bg-white border border-slate-200 rounded-[2rem] font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              <Linkedin className="text-blue-600" /> LinkedIn
            </a>
          </div>
          <p className="mt-24 text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px]">&copy; {new Date().getFullYear()} Diksha Thakur • Product Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
