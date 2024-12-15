import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 left-64 h-16 bg-white shadow-sm z-10 px-8 flex items-center justify-between"
    >
      <div className="flex items-center space-x-4">
        <BookOpen className="text-blue-500" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">Learn Software Diagrams</h2>
      </div>
      
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Start Learning
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;