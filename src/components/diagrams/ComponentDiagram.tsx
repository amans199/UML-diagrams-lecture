import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const ComponentDiagram: React.FC = () => {
  const initialNodes: Node[] = [
    // Frontend Group
    {
      id: 'ui',
      position: { x: 100, y: 50 },
      data: { label: 'User Interface' },
      style: { background: '#dbeafe', borderRadius: '8px' }
    },
    {
      id: 'router',
      position: { x: 100, y: 150 },
      data: { label: 'Router' },
      style: { background: '#dbeafe', borderRadius: '8px' }
    },
    {
      id: 'state',
      position: { x: 100, y: 250 },
      data: { label: 'State Management' },
      style: { background: '#dbeafe', borderRadius: '8px' }
    },
    // Backend Group
    {
      id: 'api',
      position: { x: 300, y: 150 },
      data: { label: 'API Gateway' },
      style: { background: '#f0fdf4', borderRadius: '8px' }
    },
    {
      id: 'auth',
      position: { x: 500, y: 50 },
      data: { label: 'Auth Service' },
      style: { background: '#f0fdf4', borderRadius: '8px' }
    },
    {
      id: 'users',
      position: { x: 500, y: 150 },
      data: { label: 'User Service' },
      style: { background: '#f0fdf4', borderRadius: '8px' }
    },
    // Database Group
    {
      id: 'db',
      position: { x: 500, y: 250 },
      data: { label: 'Database' },
      style: { background: '#fef3c7', borderRadius: '8px' }
    }
  ];

  const initialEdges: Edge[] = [
    { id: 'ui-router', source: 'ui', target: 'router' },
    { id: 'router-state', source: 'router', target: 'state' },
    { id: 'state-api', source: 'state', target: 'api', animated: true },
    { id: 'api-auth', source: 'api', target: 'auth' },
    { id: 'api-users', source: 'api', target: 'users' },
    { id: 'auth-db', source: 'auth', target: 'db' },
    { id: 'users-db', source: 'users', target: 'db' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-block p-4 bg-blue-100 rounded-full mb-6"
        >
          <Network size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Component Diagrams</h1>
        <p className="text-xl text-gray-600">Understand system architecture and component relationships</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">E-commerce System Architecture</h2>
        <div className="h-[400px] bg-gray-50 rounded-lg">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold">Key Elements:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Components represent system modules</li>
            <li>Interfaces show how components interact</li>
            <li>Subsystems group related components</li>
            <li>Dependencies indicate component relationships</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Design Your Architecture</h2>
        <p className="mb-6">Create a component diagram for your own system architecture.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Open Designer
        </button>
      </div>
    </motion.div>
  );
};

export default ComponentDiagram;