// import React, { useEffect, useRef } from 'react';
// import mermaid from 'mermaid';

// interface MermaidDiagramProps {
//   chart: string;
//   className?: string;
// }

// const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, className = '' }) => {
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const renderDiagram = async () => {
//       try {
//         // Initialize mermaid with specific configuration
//         await mermaid.initialize({
//           startOnLoad: false,
//           theme: 'neutral',
//           sequence: {
//             diagramMarginX: 50,
//             diagramMarginY: 10,
//             actorMargin: 50,
//             width: 150,
//             height: 65,
//             boxMargin: 10,
//             boxTextMargin: 5,
//             noteMargin: 10,
//             messageMargin: 35,
//             mirrorActors: true,
//           },
//           classDiagram: {
//             diagramPadding: 20,
//           },
//           securityLevel: 'loose',
//         });

//         if (elementRef.current) {
//           // Clear previous content
//           elementRef.current.innerHTML = '';
          
//           // Generate unique ID for this diagram
//           const uniqueId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          
//           // Render the diagram
//           const { svg } = await mermaid.render(uniqueId, chart);
//           elementRef.current.innerHTML = svg;
//         }
//       } catch (error) {
//         console.error('Failed to render Mermaid diagram:', error);
//       }
//     };

//     renderDiagram();
//   }, [chart]);

//   return (
//     <div 
//       ref={elementRef} 
//       className={className}
//       style={{ minHeight: '200px' }}
//     />
//   );
// };

// export default MermaidDiagram;
const TEST = ()=>{
  return <></>
}
export default TEST 