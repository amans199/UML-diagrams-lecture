import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const SequenceDiagram: React.FC = () => {
  const initialNodes: Node[] = [
    // Lifeline headers
    {
      id: 'browser',
      position: { x: 100, y: 0 },
      data: { 
        label: (
          <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
            <div className="font-semibold">Browser</div>
          </div>
        )
      },
      style: { width: 120 }
    },
    {
      id: 'server',
      position: { x: 400, y: 0 },
      data: { 
        label: (
          <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
            <div className="font-semibold">Server</div>
          </div>
        )
      },
      style: { width: 120 }
    },
    {
      id: 'database',
      position: { x: 700, y: 0 },
      data: { 
        label: (
          <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
            <div className="font-semibold">Database</div>
          </div>
        )
      },
      style: { width: 120 }
    },
    // Lifelines
    {
      id: 'browser-line',
      position: { x: 155, y: 80 },
      data: { label: '' },
      style: { 
        width: 2, 
        height: 500,
        backgroundColor: '#94a3b8',
        border: 'none'
      }
    },
    {
      id: 'server-line',
      position: { x: 455, y: 80 },
      data: { label: '' },
      style: { 
        width: 2, 
        height: 500,
        backgroundColor: '#94a3b8',
        border: 'none'
      }
    },
    {
      id: 'database-line',
      position: { x: 755, y: 80 },
      data: { label: '' },
      style: { 
        width: 2, 
        height: 500,
        backgroundColor: '#94a3b8',
        border: 'none'
      }
    },
    // Activation boxes
    {
      id: 'browser-active1',
      position: { x: 151, y: 100 },
      data: { label: '' },
      style: { 
        width: 10, 
        height: 50,
        backgroundColor: '#3b82f6',
        border: 'none'
      }
    },
    {
      id: 'server-active1',
      position: { x: 451, y: 150 },
      data: { label: '' },
      style: { 
        width: 10, 
        height: 100,
        backgroundColor: '#3b82f6',
        border: 'none'
      }
    },
    {
      id: 'database-active1',
      position: { x: 751, y: 200 },
      data: { label: '' },
      style: { 
        width: 10, 
        height: 50,
        backgroundColor: '#3b82f6',
        border: 'none'
      }
    },
    // Return activation boxes
    {
      id: 'server-active2',
      position: { x: 451, y: 300 },
      data: { label: '' },
      style: { 
        width: 10, 
        height: 100,
        backgroundColor: '#3b82f6',
        border: 'none'
      }
    },
    {
      id: 'browser-active2',
      position: { x: 151, y: 400 },
      data: { label: '' },
      style: { 
        width: 10, 
        height: 50,
        backgroundColor: '#3b82f6',
        border: 'none'
      }
    }
  ];

  const initialEdges: Edge[] = [
    // Request flow
    {
      id: 'e1',
      source: 'browser-active1',
      target: 'server-active1',
      label: 'GET /api/products',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'e2',
      source: 'server-active1',
      target: 'database-active1',
      label: 'SELECT * FROM products',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#3b82f6' }
    },
    // Response flow
    {
      id: 'e3',
      source: 'database-active1',
      target: 'server-active2',
      label: 'Product Results',
      type: 'smoothstep',
      style: { stroke: '#10b981' },
      markerEnd: { type: 'arrow', color: '#10b981' }
    },
    {
      id: 'e4',
      source: 'server-active2',
      target: 'browser-active2',
      label: 'JSON Response',
      type: 'smoothstep',
      style: { stroke: '#10b981' },
      markerEnd: { type: 'arrow', color: '#10b981' }
    }
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
          <MessageSquare size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sequence Diagrams</h1>
        <p className="text-xl text-gray-600">Visualize interactions between system components over time</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Product Listing Flow</h2>
        <div className="h-[600px] bg-gray-50 rounded-lg">
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
            <li>Vertical lines (lifelines) represent system components</li>
            <li>Blue boxes show when components are active</li>
            <li>Blue arrows represent requests/calls</li>
            <li>Green arrows show responses/returns</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Design Your Sequence</h2>
        <p className="mb-6">Create a sequence diagram for your own system interactions.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Designing
        </button>
      </div>
    </motion.div>
  );
};

export default SequenceDiagram;