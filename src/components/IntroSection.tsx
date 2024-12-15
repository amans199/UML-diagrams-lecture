import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Users, 
  MessageSquare, 
  Presentation,
  ArrowRight,
  Camera,
  Image,
  Share2
} from 'lucide-react';

const IntroSection: React.FC = () => {
  const examples = [
    {
      icon: Users,
      title: "Like a Classroom",
      description: "Just as a teacher uses a whiteboard to explain concepts to students, software diagrams help developers explain complex systems to team members."
    },
    {
      icon: MessageSquare,
      title: "Visual Communication",
      description: "Similar to how emojis make text messages clearer, diagrams make software architecture easier to understand at a glance."
    },
    {
      icon: Presentation,
      title: "Blueprint for Success",
      description: "Like architects use blueprints before building houses, developers use diagrams to plan software before coding."
    }
  ];

  const diagramTypes = [
    {
      title: "Class Diagrams",
      description: "Define the building blocks of your system",
      color: "bg-blue-500"
    },
    {
      title: "Use Case Diagrams",
      description: "Show who uses what in your system",
      color: "bg-green-500"
    },
    {
      title: "Sequence Diagrams",
      description: "Illustrate how components interact",
      color: "bg-purple-500"
    },
    {
      title: "Activity Diagrams",
      description: "Map out process workflows",
      color: "bg-orange-500"
    }
  ];

  const simpleExample = [
    {
      icon: Camera,
      label: "Open Camera",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Image,
      label: "Take Photo",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Share2,
      label: "Share Photo",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-block p-4 bg-blue-100 rounded-full mb-6"
        >
          <Lightbulb size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Software Diagrams Made Simple
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn how to visualize and communicate software architecture effectively through diagrams
        </p>
      </div>

      {/* Simple Visual Example */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Simple Example: Photo Sharing App</h2>
        <div className="flex justify-center items-center space-x-8">
          {simpleExample.map((step, index) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon size={32} />
                </div>
                <p className="font-medium">{step.label}</p>
              </motion.div>
              {index < simpleExample.length - 1 && (
                <ArrowRight className="text-gray-400" size={24} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Analogy Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {examples.map((example, index) => {
          const Icon = example.icon;
          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {example.title}
              </h3>
              <p className="text-gray-600">
                {example.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Diagram Types */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Types of Diagrams
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {diagramTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`w-2 h-12 rounded-full ${type.color}`} />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
              <ArrowRight className="text-gray-400 ml-auto" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-xl mb-6">
          Begin your journey into software visualization with our interactive lessons
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start with Class Diagrams
        </button>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;