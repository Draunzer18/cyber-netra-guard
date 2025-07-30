import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  link = "#" 
}) => {
  const handleTryItOut = () => {
    // TODO: Add your feature link here
    console.log(`Navigating to ${title} feature: ${link}`);
  };

  return (
    <Card className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <Button 
          onClick={handleTryItOut}
          variant="outline"
          className="mt-6 rounded-xl border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Try it out
        </Button>
      </div>
    </Card>
  );
};