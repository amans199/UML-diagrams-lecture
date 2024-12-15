import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const UseCaseDiagram: React.FC = () => {
  const initialNodes: Node[] = [
    // Actors
    {
      id: 'customer',
      position: { x: 50, y: 200 },
      data: { 
        label: (
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <Users size={24} className="text-blue-600" />
            </div>
            <div>Customer</div>
          </div>
        )
      },
      style: {
        background: 'transparent',
        border: 'none',
        width: 100
      }
    },
    {
      id: 'admin',
      position: { x: 650, y: 200 },
      data: { 
        label: (
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <Users size={24} className="text-blue-600" />
            </div>
            <div>Admin</div>
          </div>
        )
      },
      style: {
        background: 'transparent',
        border: 'none',
        width: 100
      }
    },
    // Use Cases
    {
      id: 'browse',
      position: { x: 250, y: 50 },
      data: { label: 'Browse Products' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '30px',
        padding: '10px',
        width: 150,
        textAlign: 'center'
      }
    },
    {
      id: 'cart',
      position: { x: 250, y: 150 },
      data: { label: 'Manage Cart' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '30px',
        padding: '10px',
        width: 150,
        textAlign: 'center'
      }
    },
    {
      id: 'checkout',
      position: { x: 250, y: 250 },
      data: { label: 'Checkout' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '30px',
        padding: '10px',
        width: 150,
        textAlign: 'center'
      }
    },
    {
      id: 'manage',
      position: { x: 450, y: 50 },
      data: { label: 'Manage Products' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '30px',
        padding: '10px',
        width: 150,
        textAlign: 'center'
      }
    },
    {
      id: 'orders',
      position: { x: 450, y: 150 },
      data: { label: 'View Orders' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '30px',
        padding: '10px',
        width: 150,
        textAlign: 'center'
      }
    },
    {
      id: 'users',
      position: { x: 450, y: 250 },
      data: { label: 'Manage Users' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '30px',
        padding: '10px',
        width: 150,
        textAlign: 'center'
      }
    }
  ];

  const initialEdges: Edge[] = [
    // Customer connections
    { id: 'customer-browse', source: 'customer', target: 'browse', animated: true },
    { id: 'customer-cart', source: 'customer', target: 'cart' },
    { id: 'customer-checkout', source: 'customer', target: 'checkout' },
    // Admin connections
    { id: 'admin-manage', source: 'admin', target: 'manage', animated: true },
    { id: 'admin-orders', source: 'admin', target: 'orders' },
    { id: 'admin-users', source: 'admin', target: 'users' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto py-12"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-block p-4 bg-blue-100 rounded-full mb-6"
        >
          <Users size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Use Case Diagrams</h1>
        <p className="text-xl text-gray-600">Model system functionality from a user's perspective</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">E-commerce System Use Cases</h2>
        <div className="h-[500px] bg-gray-50 rounded-lg">
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
            <li>Actors represent different user roles</li>
            <li>Use cases show system functionality</li>
            <li>Lines indicate actor-use case relationships</li>
            <li>System boundary defines scope</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Create Your Use Cases</h2>
        <p className="mb-6">Design a use case diagram for your own system requirements.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Designing
        </button>
      </div>
    </motion.div>
  );
};

export default UseCaseDiagram;