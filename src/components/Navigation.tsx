import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard,
  Box,
  Users,
  MessageSquare,
  Activity,
  GitBranch,
  Network
} from 'lucide-react';

interface NavProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavProps> = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'intro', icon: LayoutDashboard, label: 'Introduction' },
    { id: 'class', icon: Box, label: 'Class Diagrams' },
    { id: 'usecase', icon: Users, label: 'Use Case Diagrams' },
    { id: 'sequence', icon: MessageSquare, label: 'Sequence Diagrams' },
    { id: 'activity', icon: Activity, label: 'Activity Diagrams' },
    { id: 'state', icon: GitBranch, label: 'State Diagrams' },
    { id: 'component', icon: Network, label: 'Component Diagrams' }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full bg-white shadow-lg w-64 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Software Diagrams</h1>
        <p className="text-sm text-gray-600 mt-2">Interactive Learning Platform</p>
      </div>
      
      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          
          return (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-0 w-1 h-8 bg-blue-600 rounded-l"
                  />
                )}
              </button>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;