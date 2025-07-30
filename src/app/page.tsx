import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/Hero';
import { ProjectsSection } from '@/components/sections/Projects';
import { SkillsSection } from '@/components/sections/Skills';
import { ContactSection } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-32">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}