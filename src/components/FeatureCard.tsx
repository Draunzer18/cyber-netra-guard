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
    <Card className="p-10 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full">
      {/* Icon */}
      <div className="mb-8 flex justify-center">
        <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-base flex-grow">
          {description}
        </p>

        {/* CTA Button */}
        <Button 
          onClick={handleTryItOut}
          variant="outline"
          className="mt-8 rounded-xl border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 self-center"
        >
          Try it out
        </Button>
      </div>
    </Card>
  );
};