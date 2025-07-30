import React from 'react';
import { FeatureCard } from './FeatureCard';
import { 
  Shield, 
  Brain, 
  Network, 
  Eye, 
  Lock, 
  Zap 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI Decoy Network",
      description: "Deploy intelligent honeypots that learn and adapt to sophisticated attack patterns in real-time.",
      icon: Network,
      link: "/decoy-network" // TODO: Add your feature link here
    },
    {
      title: "Behavioral Pattern Engine",
      description: "Advanced AI analyzes attacker behavior to predict and prevent future honeytrap attempts.",
      icon: Brain,
      link: "/behavior-analysis" // TODO: Add your feature link here
    },
    {
      title: "Real-time Threat Detection",
      description: "Continuous monitoring with instant alerts when suspicious activities are detected.",
      icon: Eye,
      link: "/threat-detection" // TODO: Add your feature link here
    },
    {
      title: "Privacy Shield",
      description: "Zero-knowledge architecture ensures your data remains private while providing maximum protection.",
      icon: Lock,
      link: "/privacy-shield" // TODO: Add your feature link here
    },
    {
      title: "Community Intelligence",
      description: "Crowdsourced threat intelligence that grows stronger with every community contribution.",
      icon: Shield,
      link: "/community-intel" // TODO: Add your feature link here
    },
    {
      title: "Rapid Response System",
      description: "Automated countermeasures that deploy instantly when threats are identified.",
      icon: Zap,
      link: "/rapid-response" // TODO: Add your feature link here
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advanced Security Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI technology designed to outsmart the most sophisticated cyber threats
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="transform">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};