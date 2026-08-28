import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/profile';
import { sectionConfig } from '../data/config';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Sun, Moon, Menu, X, FileText, Code2 } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'learning', 'projects', 'achievements', 'experience', 'education', 'coding', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', show: true },
    { name: 'About', href: '#about', id: 'about', show: sectionConfig.showAbout },
    { name: 'Skills', href: '#skills', id: 'skills', show: sectionConfig.showSkills },
    { name: 'Learning', href: '#learning', id: 'learning', show: sectionConfig.showCurrentlyLearning },
    { name: 'Projects', href: '#projects', id: 'projects', show: sectionConfig.showProjects },
    { name: 'Achievements', href: '#achievements', id: 'achievements', show: sectionConfig.showAchievements },
    { name: 'Experience', href: '#experience', id: 'experience', show: sectionConfig.showExperience },
    { name: 'Education', href: '#education', id: 'education', show: sectionConfig.showEducation },
    { name: 'Coding', href: '#coding', id: 'coding', show: sectionConfig.showCoding },
    { name: 'Contact', href: '#contact', id: 'contact', show: sectionConfig.showContact }
  ].filter(link => link.show);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/80 backdrop-blur-md border-b border-slate-800/50 light:border-slate-200 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-xl font-bold tracking-tight transition-transform hover:scale-105"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 p-[1.5px]">
              <div className="w-full h-full bg-slate-900 dark:bg-slate-900 light:bg-white rounded-[7px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 light:text-blue-600" />
              </div>
            </div>
            <span className="text-slate-100 dark:text-slate-100 light:text-slate-900">
              Thanush<span className="text-cyan-400 light:text-blue-600">.KT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-800/80 light:border-slate-200/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/50'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 hover:bg-slate-800/50 light:hover:bg-slate-200/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-blue-600 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Social Links */}
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-blue-600 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-blue-600 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Resume CTA */}
            {sectionConfig.showResume && (
              <a
                href={profileData.socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-4 px-4 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-2xl backdrop-blur-xl shadow-2xl space-y-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-around gap-2">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 rounded-lg"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 rounded-lg"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              {sectionConfig.showResume && (
                <a
                  href={profileData.socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
                >
                  <FileText className="w-4 h-4" /> Resume
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
