import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'var(--grid-pattern)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Netra
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          Next-gen AI to intercept and disrupt advanced honeytrap attacks. 
          Proactive, privacy-first, and community-powered.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Privacy-First</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-accent" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>Community-Driven</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={onGetStarted}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ boxShadow: 'var(--tech-glow)' }}
        >
          Explore Features
        </Button>
      </div>
    </section>
  );
};