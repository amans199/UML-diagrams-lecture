import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const ActivityDiagram: React.FC = () => {
  const initialNodes: Node[] = [
    // Start node
    {
      id: 'start',
      position: { x: 350, y: 0 },
      data: { label: 'Start' },
      style: {
        background: '#22c55e',
        color: 'white',
        borderRadius: '50%',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none'
      }
    },
    // Activities
    {
      id: 'openCamera',
      position: { x: 300, y: 100 },
      data: { label: 'Open Camera' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '8px',
        padding: '10px',
        width: 160,
        textAlign: 'center'
      }
    },
    {
      id: 'takePicture',
      position: { x: 300, y: 200 },
      data: { label: 'Take Picture' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '8px',
        padding: '10px',
        width: 160,
        textAlign: 'center'
      }
    },
    // Decision
    {
      id: 'checkPicture',
      position: { x: 350, y: 300 },
      data: { label: 'Picture OK?' },
      style: {
        background: '#fef3c7',
        border: '1px solid #d97706',
        width: 60,
        height: 60,
        transform: 'rotate(45deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    {
      id: 'addFilters',
      position: { x: 300, y: 400 },
      data: { label: 'Apply Filters' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '8px',
        padding: '10px',
        width: 160,
        textAlign: 'center'
      }
    },
    {
      id: 'addCaption',
      position: { x: 300, y: 500 },
      data: { label: 'Add Caption' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '8px',
        padding: '10px',
        width: 160,
        textAlign: 'center'
      }
    },
    {
      id: 'share',
      position: { x: 300, y: 600 },
      data: { label: 'Share Photo' },
      style: {
        background: '#dbeafe',
        border: '1px solid #3b82f6',
        borderRadius: '8px',
        padding: '10px',
        width: 160,
        textAlign: 'center'
      }
    },
    // End node
    {
      id: 'end',
      position: { x: 350, y: 700 },
      data: { label: 'End' },
      style: {
        background: '#ef4444',
        color: 'white',
        borderRadius: '50%',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none'
      }
    }
  ];

  const initialEdges: Edge[] = [
    { 
      id: 'start-open',
      source: 'start',
      target: 'openCamera',
      animated: true,
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'open-take',
      source: 'openCamera',
      target: 'takePicture',
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'take-check',
      source: 'takePicture',
      target: 'checkPicture',
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'check-retake',
      source: 'checkPicture',
      target: 'takePicture',
      label: 'No',
      style: { stroke: '#3b82f6' },
      type: 'smoothstep'
    },
    {
      id: 'check-filter',
      source: 'checkPicture',
      target: 'addFilters',
      label: 'Yes',
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'filter-caption',
      source: 'addFilters',
      target: 'addCaption',
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'caption-share',
      source: 'addCaption',
      target: 'share',
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'share-end',
      source: 'share',
      target: 'end',
      style: { stroke: '#3b82f6' }
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
          <Activity size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Activity Diagrams</h1>
        <p className="text-xl text-gray-600">Model step-by-step workflows and processes</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Photo Sharing Process</h2>
        <div className="h-[800px] bg-gray-50 rounded-lg">
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
            <li>Start/End nodes mark process boundaries</li>
            <li>Activities show individual steps</li>
            <li>Decision diamonds handle conditions</li>
            <li>Arrows indicate flow direction</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Design Your Process</h2>
        <p className="mb-6">Create an activity diagram for your own workflow.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Designing
        </button>
      </div>
    </motion.div>
  );
};

export default ActivityDiagram;