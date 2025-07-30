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
      description: "Deploy intelligent honeypots that learn and adapt to sophisticated attack patterns in real-time. Our AI-powered decoys mimic legitimate systems while gathering crucial intelligence about attacker methodologies, helping build stronger defenses against emerging threats.",
      icon: Network,
      link: "/decoy-network" // TODO: Add your feature link here
    },
    {
      title: "Behavioral Pattern Engine",
      description: "Advanced machine learning algorithms analyze attacker behavior to predict and prevent future honeytrap attempts. By understanding attack patterns, timing, and techniques, Netra can proactively defend against threats before they fully materialize.",
      icon: Brain,
      link: "/behavior-analysis" // TODO: Add your feature link here
    },
    {
      title: "Real-time Threat Detection",
      description: "Continuous monitoring with instant alerts when suspicious activities are detected across your network. Our sophisticated detection systems operate 24/7, providing immediate notifications and detailed threat intelligence to keep your organization secure.",
      icon: Eye,
      link: "/threat-detection" // TODO: Add your feature link here
    },
    {
      title: "Privacy Shield",
      description: "Zero-knowledge architecture ensures your sensitive data remains completely private while providing maximum protection. All threat analysis happens locally with encrypted communication, ensuring your business intelligence never leaves your control.",
      icon: Lock,
      link: "/privacy-shield" // TODO: Add your feature link here
    },
    {
      title: "Community Intelligence",
      description: "Crowdsourced threat intelligence network that grows stronger with every community contribution. Share anonymized threat data to help the entire cybersecurity community stay ahead of evolving attack vectors and emerging threat landscapes.",
      icon: Shield,
      link: "/community-intel" // TODO: Add your feature link here
    },
    {
      title: "Rapid Response System",
      description: "Automated countermeasures that deploy instantly when threats are identified, minimizing potential damage. Smart response protocols adapt to threat severity and type, ensuring proportional and effective defensive measures are activated without human intervention.",
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