import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const ClassDiagram: React.FC = () => {
  const initialNodes: Node[] = [
    {
      id: 'customer',
      position: { x: 100, y: 50 },
      data: { 
        label: (
          <div className="p-3">
            <div className="font-bold border-b pb-2">Customer</div>
            <div className="py-2 text-sm">
              - id: string<br/>
              - name: string<br/>
              - email: string<br/>
              - address: Address
            </div>
            <div className="pt-2 border-t text-sm">
              + placeOrder()<br/>
              + updateProfile()<br/>
              + getOrderHistory()
            </div>
          </div>
        )
      },
      style: {
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        minWidth: '200px'
      }
    },
    {
      id: 'order',
      position: { x: 400, y: 50 },
      data: { 
        label: (
          <div className="p-3">
            <div className="font-bold border-b pb-2">Order</div>
            <div className="py-2 text-sm">
              - orderId: string<br/>
              - customerId: string<br/>
              - items: OrderItem[]<br/>
              - total: number
            </div>
            <div className="pt-2 border-t text-sm">
              + addItem()<br/>
              + removeItem()<br/>
              + calculateTotal()
            </div>
          </div>
        )
      },
      style: {
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        minWidth: '200px'
      }
    },
    {
      id: 'orderItem',
      position: { x: 400, y: 300 },
      data: { 
        label: (
          <div className="p-3">
            <div className="font-bold border-b pb-2">OrderItem</div>
            <div className="py-2 text-sm">
              - productId: string<br/>
              - quantity: number<br/>
              - price: number
            </div>
            <div className="pt-2 border-t text-sm">
              + updateQuantity()<br/>
              + getSubtotal()
            </div>
          </div>
        )
      },
      style: {
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        minWidth: '200px'
      }
    },
    {
      id: 'address',
      position: { x: 100, y: 300 },
      data: { 
        label: (
          <div className="p-3">
            <div className="font-bold border-b pb-2">Address</div>
            <div className="py-2 text-sm">
              - street: string<br/>
              - city: string<br/>
              - state: string<br/>
              - zipCode: string
            </div>
            <div className="pt-2 border-t text-sm">
              + toString()<br/>
              + validate()
            </div>
          </div>
        )
      },
      style: {
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        minWidth: '200px'
      }
    }
  ];

  const initialEdges: Edge[] = [
    {
      id: 'customer-order',
      source: 'customer',
      target: 'order',
      label: '1 : *',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'order-orderItem',
      source: 'order',
      target: 'orderItem',
      label: '1 : *',
      type: 'smoothstep',
      style: { stroke: '#3b82f6' }
    },
    {
      id: 'customer-address',
      source: 'customer',
      target: 'address',
      label: '1 : 1',
      type: 'smoothstep',
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
          <Box size={48} className="text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Class Diagrams</h1>
        <p className="text-xl text-gray-600">Model object-oriented structures and relationships</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">E-commerce Domain Model</h2>
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
            <li>Classes define object properties and behaviors</li>
            <li>Relationships show how classes interact</li>
            <li>Multiplicity indicates relationship cardinality (1:1, 1:*, *:*)</li>
            <li>Methods describe class behaviors and operations</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Interactive Class Designer</h2>
        <p className="mb-6">Create your own class diagram by adding classes, attributes, and relationships.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Open Designer
        </button>
      </div>
    </motion.div>
  );
};

export default ClassDiagram;