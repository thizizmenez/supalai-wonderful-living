import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Project {
  name: string;
  link: string;
}

const projectsByLocation: Record<string, Project[]> = {
  'กรุงเทพและปริมณฑล': [
    { name: 'Supalai Premier สี่พระยา-สามย่าน', link: 'https://www.supalai.com' },
    { name: 'Supalai Elite สุรวงศ์', link: 'https://www.supalai.com' },
    { name: 'Supalai Premier อโศก', link: 'https://www.supalai.com' },
    { name: 'Supalai Veranda สุขุมวิท 117', link: 'https://www.supalai.com' },
    { name: 'Supalai City Resort พระราม 8', link: 'https://www.supalai.com' },
    { name: 'Supalai Park ราชพฤกษ์-เพชรเกษม', link: 'https://www.supalai.com' },
    { name: 'Supalai Lite รัชดาฯ-นราธิวาส', link: 'https://www.supalai.com' },
    { name: 'Supalai Loft แจ้งวัฒนะ', link: 'https://www.supalai.com' },
    { name: 'Supalai Premier สามเสน-ราชวัตร', link: 'https://www.supalai.com' },
  ],
  'เชียงใหม่': [
    { name: 'Supalai Monte เชียงใหม่', link: 'https://www.supalai.com' },
    { name: 'Supalai City Resort เชียงใหม่', link: 'https://www.supalai.com' },
  ],
  'ชลบุรี': [
    { name: 'Supalai Vista ศรีราชา', link: 'https://www.supalai.com' },
    { name: 'Supalai City Resort ศรีราชา-แหลมฉบัง', link: 'https://www.supalai.com' },
  ],
  'ระยอง': [
    { name: 'Supalai Vista ระยอง', link: 'https://www.supalai.com' },
  ],
  'ภูเก็ต': [
    { name: 'Supalai Park ภูเก็ต', link: 'https://www.supalai.com' },
    { name: 'Supalai City Resort ภูเก็ต', link: 'https://www.supalai.com' },
  ],
  'ประจวบคีรีขันธ์': [
    { name: 'Supalai Vista หัวหิน', link: 'https://www.supalai.com' },
  ],
};

const locations = Object.keys(projectsByLocation);

const ProjectListing = () => {
  const [activeTab, setActiveTab] = useState(locations[0]);
  const { ref: titleRef, visible: titleVisible } = useScrollReveal(0.2);
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-12`}>
          <p className="font-body text-lg text-muted-foreground mb-3 tracking-widest uppercase">
            Our Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            โครงการคอนโด<span className="gold-text">ศุภาลัย</span>
          </h2>
        </div>

        {/* Location tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveTab(loc)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 border ${
                activeTab === loc
                  ? 'bg-gold text-primary-foreground border-gold'
                  : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div ref={gridRef} className={`reveal ${gridVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsByLocation[activeTab].map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-border hover:border-gold/50 transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-surface-elevated overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <span className="font-display text-lg text-muted-foreground/50">SUPALAI</span>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-body text-sm md:text-base text-card-foreground group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    ดูรายละเอียด
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListing;
