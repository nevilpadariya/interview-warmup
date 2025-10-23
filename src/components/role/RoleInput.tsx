import { useState, useEffect } from 'react';
import { ChevronRight, Lightbulb, Sparkles } from 'lucide-react';

interface RoleInputProps {
  onNext: (role: string) => void;
}

export const RoleInput: React.FC<RoleInputProps> = ({ onNext }) => {
  const [currentRole, setCurrentRole] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample roles that will rotate
  const sampleRoles = [
    'Software Engineer',
    'Product Manager', 
    'Data Scientist',
    'UX Designer',
    'Marketing Manager',
    'Sales Representative',
    'Project Manager',
    'Business Analyst',
    'DevOps Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Mobile Developer',
    'UI/UX Designer',
    'Content Writer',
    'Digital Marketer',
    'Customer Success Manager',
    'Operations Manager',
    'Financial Analyst',
    'HR Specialist',
    'Graphic Designer',
    'Video Editor',
    'Social Media Manager',
    'Account Manager',
    'Quality Assurance Engineer',
    'System Administrator',
    'Network Engineer',
    'Cybersecurity Analyst',
    'Machine Learning Engineer',
    'Cloud Architect',
    'Student',
    'Intern',
    'Freelancer',
    'Consultant',
    'Entrepreneur',
    'Researcher',
    'Teacher',
    'Nurse',
    'Doctor',
    'Lawyer',
    'Architect',
    'Chef',
    'Photographer',
    'Musician',
    'Artist'
  ];

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-typing effect for role suggestions
  useEffect(() => {
    const currentRoleText = sampleRoles[roleIndex];
    let charIndex = 0;
    let timeoutId: number;

    const typeRole = () => {
      if (charIndex <= currentRoleText.length) {
        setCurrentRole(currentRoleText.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeRole, 60); // Type each character every 60ms
      } else {
        // Wait 2 seconds before starting to delete
        setTimeout(() => {
          setIsTyping(true);
          const deleteRole = () => {
            if (charIndex >= 0) {
              setCurrentRole(currentRoleText.slice(0, charIndex));
              charIndex--;
              timeoutId = setTimeout(deleteRole, 30); // Delete each character every 30ms
            } else {
              setIsTyping(false);
              // Move to next role with animation
              setIsAnimating(true);
              setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % sampleRoles.length);
                setIsAnimating(false);
              }, 200);
            }
          };
          deleteRole();
        }, 2000);
      }
    };

    typeRole();

    return () => clearTimeout(timeoutId);
  }, [roleIndex]);

  const handleNext = () => {
    if (currentRole.trim()) {
      onNext(currentRole.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen bg-surface-1 flex items-center justify-center px-google-md">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-google-3xl">
          <div className="text-6xl mb-google-lg animate-bounce">👋</div>
          <h1 className="text-google-headline-1 font-google-display text-text-primary mb-google-md">
            To start, share a current or previous role:
          </h1>
        </div>

        {/* Role Input */}
        <div className="google-card-elevated p-google-xl mb-google-xl">
          <div className="relative">
            <div className="relative">
              <input
                type="text"
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your role..."
                className={`google-input text-center text-google-title-1 font-medium text-text-primary placeholder-text-disabled w-full transition-all duration-300 ${isAnimating ? 'transform scale-105' : ''}`}
                autoFocus
              />
              
              {/* Animated cursor */}
              <div className="absolute right-google-md top-1/2 transform -translate-y-1/2">
                <div className={`w-0.5 h-6 bg-google-blue-500 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {/* Typing indicator dots */}
              {isTyping && (
                <div className="absolute right-google-lg top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-google-xs">
                    <div className="w-1 h-1 bg-google-blue-500 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-google-blue-500 rounded-full animate-pulse delay-75" />
                    <div className="w-1 h-1 bg-google-blue-500 rounded-full animate-pulse delay-150" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sample roles indicator */}
          <div className="mt-google-md text-center">
            <div className="flex items-center justify-center space-x-google-sm mb-google-sm">
              <Sparkles className="text-google-yellow-500" size={16} />
              <span className="text-google-body-2 text-text-secondary font-medium">
                Watch roles appear automatically
              </span>
            </div>
            <p className="text-google-body-2 text-text-secondary">
              Try roles like: <span className="font-medium text-google-blue-500">Software Engineer</span>, <span className="font-medium text-google-green-500">Product Manager</span>, <span className="font-medium text-google-yellow-500">UX Designer</span>
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!currentRole.trim()}
          className="w-full google-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>

        {/* Military Code Helper */}
        <div className="mt-google-xl text-center">
          <div className="flex items-center justify-center space-x-google-sm text-google-body-2 text-text-secondary">
            <Lightbulb size={16} />
            <span>Have a military occupation code (MOS, AFSC, NEC)? Enter it here (e.g., "MOS 09L").</span>
          </div>
        </div>

        {/* Role counter */}
        <div className="mt-google-lg text-center">
          <p className="text-google-caption text-text-disabled">
            Showing role {roleIndex + 1} of {sampleRoles.length}
          </p>
        </div>
      </div>
    </div>
  );
};