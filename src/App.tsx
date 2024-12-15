import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ClassDiagram from './components/diagrams/ClassDiagram';
import UseCaseDiagram from './components/diagrams/UseCaseDiagram';
import SequenceDiagram from './components/diagrams/SequenceDiagram';
import ActivityDiagram from './components/diagrams/ActivityDiagram';
import StateDiagram from './components/diagrams/StateDiagram';
import ComponentDiagram from './components/diagrams/ComponentDiagram';

function App() {
  const [currentSection, setCurrentSection] = useState('intro');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <Header />
      
      <main className="ml-64 pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8"
          >
            {currentSection === 'intro' && <IntroSection />}
            {currentSection === 'class' && <ClassDiagram />}
            {currentSection === 'usecase' && <UseCaseDiagram />}
            {currentSection === 'sequence' && <SequenceDiagram />}
            {currentSection === 'activity' && <ActivityDiagram />}
            {currentSection === 'state' && <StateDiagram />}
            {currentSection === 'component' && <ComponentDiagram />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="ml-64 bg-white border-t border-gray-200 py-4 px-8">
        <p className="text-center text-gray-600">© Ahmed Mansour</p>
      </footer>
    </div>
  );
}

export default App;