import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { sectionConfig } from './data/config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { ProjectShowcase } from './components/Projects/ProjectShowcase';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { CodingSection } from './components/CodingSection';
import { GitHubSection } from './components/GitHubSection';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        
        <main>
          <Hero />
          {sectionConfig.showAbout && <About />}
          {sectionConfig.showSkills && <Skills />}
          {sectionConfig.showCurrentlyLearning && <CurrentlyLearning />}
          {sectionConfig.showProjects && <ProjectShowcase />}
          {sectionConfig.showAchievements && <Achievements />}
          {sectionConfig.showExperience && <Experience />}
          {sectionConfig.showEducation && <Education />}
          {sectionConfig.showCoding && <CodingSection />}
          {sectionConfig.showGitHub && <GitHubSection />}
          {sectionConfig.showCertifications && <Certifications />}
          {sectionConfig.showResume && <ResumeSection />}
          {sectionConfig.showContact && <Contact />}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
