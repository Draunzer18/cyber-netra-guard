import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

interface NavigationProps {
  onLoginClick: () => void;
  onFeaturesClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLoginClick, onFeaturesClick }) => {
  const { user, signOut } = useAuth();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold text-foreground">Netra</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleHomeClick}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={onFeaturesClick}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Welcome, {user.email?.split('@')[0]}
                </span>
              </div>
              <Button
                onClick={signOut}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <Button onClick={onLoginClick} variant="default">
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};