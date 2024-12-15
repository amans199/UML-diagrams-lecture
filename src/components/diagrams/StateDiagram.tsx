import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const StateDiagram: React.FC = () => {
  const initialNodes: Node[] = [
    {
      id: 'idle',
      position: { x: 250, y: 50 },
      data: { label: 'Idle' },
      style: { background: '#dbeafe', borderRadius: '8px' }
    },
    {
      id: 'waitingCard',
      position: { x: 250, y: 150 },
      data: { label: 'Waiting for Card' }
    },
    {
      id: 'validating',
      position: { x: 250, y: 250 },
      data: { label: 'Validating Card' },
      style: { background: '#fde68a' }
    },
    {
      id: 'pinEntry',
      position: { x: 250, y: 350 },
      data: { label: 'PIN Entry' }
    },
    {
      id: 'error',
      position: { x: 450, y: 250 },
      data: { label: 'Error State' },
      style: { background: '#fca5a5' }
    }
  ];

  const initialEdges: Edge[] = [
    { 
      id: 'idle-waiting',
      source: 'idle',
      target: 'waitingCard',
      label: 'Insert Card',
      animated: true
    },
    {
      id: 'waiting-validating',
      source: 'waitingCard',
      target: 'validating'
    },
    {
      id: 'validating-pin',
      source: 'validating',
      target: 'pinEntry',
      label: 'Valid Card'
    },
    {
      id: 'validating-error',
      source: 'validating',
      target: 'error',
      label: 'Invalid Card'
    },
    {
      id: 'error-idle',
      source: 'error',
      target: 'idle',
      type: 'smoothstep'
    }
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
          <GitBranch size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">State Diagrams</h1>
        <p className="text-xl text-gray-600">Visualize object states and their transitions</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">ATM State Machine</h2>
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
          <h3 className="text-lg font-semibold">Key Concepts:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>States represent different conditions of the system</li>
            <li>Transitions show how states change</li>
            <li>Guards control state transitions</li>
            <li>Initial and final states mark boundaries</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Design Your State Machine</h2>
        <p className="mb-6">Create a state diagram for a simple game character or device.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Designing
        </button>
      </div>
    </motion.div>
  );
};

export default StateDiagram;