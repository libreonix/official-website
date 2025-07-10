import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    mermaid: { 
      initialize: (config: object) => void;
      contentLoaded: () => void;
      mermaidAPI: { 
        render: (id: string, graph: string, cb?: (svgCode: string) => void) => void; 
      };
    };
  }
}

const AIAgents = () => {
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);

  const aiAgents = [
    {
      id: 'farmer-helper',
      title: "AgriTech AI Agent: Precision Farming",
      shortDescription: "An AI-powered co-pilot for farmers, driving operational efficiency, sustainability, and increased crop yield through data-driven insights.",
      highlights: [
        "Targets the $2.4T global agriculture market.",
        "Reduces resource waste (water, fertilizer) by up to 30%.",
        "Provides early disease detection to prevent crop loss.",
        "SaaS-based subscription model for recurring revenue."
      ],
      sections: [
        {
          title: "Executive Summary",
          content: `The AgriTech AI Agent addresses critical inefficiencies in modern agriculture. By integrating real-time data from IoT sensors, satellite imagery, and weather APIs, our platform provides farmers with actionable intelligence. This empowers them to optimize irrigation, manage pests, and improve soil health, leading to significant cost savings and a more predictable, profitable harvest. Our vision is to build a scalable platform that supports global food security through sustainable technology.`,
        },
        {
          title: "Technical Approach",
          content: `Our technical core is a proprietary machine learning model trained on vast agricultural datasets. The architecture is built on a scalable cloud infrastructure, featuring a robust data ingestion pipeline for real-time sensor data, a processing engine for complex analytics, and a recommendation system that delivers insights via a cross-platform mobile application. The system is designed for modularity, allowing for the future integration of new data sources and predictive models.`,
        },
        {
          title: "Architecture",
          content: `graph TD
    subgraph "Data Ingestion & Sources"
        A[IoT Sensors] --> C{API Gateway};
        B[Satellite Imagery] --> C;
        D[Weather APIs] --> C;
    end
    subgraph "Core Platform (Cloud-Native)"
        C --> E[Data Lake];
        E --> F{Data Processing & Analytics Engine};
        F --> G[Machine Learning Models];
        G --> H{Recommendation Engine};
    end
    subgraph "Presentation Layer"
        H --> I[Farmer's Dashboard];
        I --> J[Mobile App Alerts];
    end
    style E fill:#264653,stroke:#fff,stroke-width:2px
    style G fill:#2a9d8f,stroke:#fff,stroke-width:2px`,
        },
      ],
    },
    {
      id: 'women-health',
      title: "FemTech AI Agent: Personalized Wellness",
      shortDescription: "A privacy-first wellness platform for women, offering personalized insights for cycle tracking, fertility, and holistic health management.",
      highlights: [
          "Taps into the rapidly growing $50B FemTech market.",
          "Prioritizes user privacy with on-device processing and data encryption.",
          "Integrates with popular wearables for seamless data collection.",
          "Freemium model with premium features for advanced analytics."
      ],
      sections: [
        {
          title: "Executive Summary",
          content: "The FemTech AI Agent is a confidential digital health companion that empowers women to take control of their wellness journey. By analyzing patterns in user-provided data and wearable device metrics, our agent offers highly accurate predictions for menstrual cycles and fertility windows. We differentiate ourselves with a steadfast commitment to data privacy, building trust in a sensitive market. Our goal is to be the leading platform for personalized women's health.",
        },
        {
          title: "Technical Approach",
          content: "Our system employs federated learning where possible to train our predictive models without centralizing raw user data. The architecture is centered around a secure API that communicates with our mobile application. All personally identifiable information (PII) is encrypted at rest and in transit. The personalization engine uses a combination of deep learning models to adapt to each user's unique biological patterns over time, improving accuracy with continued use.",
        },
        {
          title: "Architecture",
          content: `graph TD
    subgraph "User & Data Layer"
        A[User Input & Wearables] --> B{Secure API Gateway};
    end
    subgraph "Backend Core (Privacy-First)"
        B --> C[Anonymized Data Processing];
        C --> D[Encrypted Health Database];
        D --> E{Federated Learning Coordinator};
        E --> F[Personalization AI Models];
    end
    subgraph "User-Facing Application"
        F --> G{Wellness Recommendation Engine};
        G --> H[Personalized Dashboard & Insights];
        H --> A;
    end
    style D fill:#e76f51,stroke:#fff,stroke-width:2px
    style F fill:#f4a261,stroke:#fff,stroke-width:2px`,
        },
      ],
    },
    {
      id: 'mental-health',
      title: "Mental Wellness AI Agent",
      shortDescription: "A confidential AI companion for mental well-being, providing empathetic conversations, mood tracking, and evidence-based coping strategies.",
      highlights: [
        "Addresses the global mental health crisis by providing accessible, 24/7 support.",
        "B2B and B2C models, including corporate wellness partnerships.",
        "Utilizes advanced NLP for empathetic and context-aware conversations.",
        "Maintains user anonymity and data security as a core principle."
      ],
      sections: [
        {
          title: "Executive Summary",
          content: "The Mental Wellness AI Agent is a scalable solution designed to make mental health support more accessible and less stigmatized. Our AI acts as a first line of support, offering users a safe space to track their mood, engage in guided exercises, and develop coping skills. The platform is not a replacement for therapy but serves as a powerful tool for self-management and early intervention, with clear pathways to professional help when necessary.",
        },
        {
          title: "Technical Approach",
          content: "The agent is built upon a sophisticated Natural Language Processing (NLP) model trained on therapeutic conversation datasets. The core engine performs sentiment analysis and intent recognition to guide the user through evidence-based cognitive behavioral therapy (CBT) and mindfulness exercises. All conversations are anonymized to protect user privacy. A recommendation engine suggests relevant resources based on the user's needs.",
        },
        {
          title: "Architecture",
          content: `graph TD
    subgraph "User Interaction"
        A[Mobile/Web App] --> B{Chat Interface};
    end
    subgraph "AI Conversation Core"
        B --> C[Secure API Gateway];
        C --> D[Natural Language Processing Engine];
        C --> E[Sentiment & Intent Analysis];
        E --> F[Conversation Logic & State Machine];
    end
    subgraph "Support & Resources"
        F --> G[Coping Strategies Database];
        F --> H[Guided Exercise Modules];
        G & H --> B;
    end
    style D fill:#8338ec,stroke:#fff,stroke-width:2px
    style F fill:#3a86ff,stroke:#fff,stroke-width:2px`,
        },
      ],
    },
  ];

  useEffect(() => {
    // Load Mermaid.js script once
    const scriptId = 'mermaid-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://unpkg.com/mermaid@10.8.0/dist/mermaid.min.js';
      script.async = true;
      script.onload = () => {
        if (window.mermaid) {
          window.mermaid.initialize({
            startOnLoad: false, // We will manually trigger rendering
            theme: 'dark',
            securityLevel: 'loose',
          });
          setIsMermaidLoaded(true);
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  // Component to render individual Mermaid diagrams
  const MermaidDiagramRenderer = ({ diagramId, content }: { diagramId: string; content: string }) => {
    const diagramRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const renderDiagram = () => {
        if (diagramRef.current && isMermaidLoaded && window.mermaid) {
          // Clear previous content to prevent duplicates
          diagramRef.current.innerHTML = '';
          window.mermaid.mermaidAPI.render(diagramId, content, (svgCode) => {
            if (diagramRef.current) {
              diagramRef.current.innerHTML = svgCode;
            }
          });
        }
      };

      renderDiagram();

    }, [diagramId, content, isMermaidLoaded]); // Re-render if diagramId or content changes

    return (
      <div 
        id={diagramId} 
        ref={diagramRef} 
        className="flex justify-center items-center h-full mermaid-container"
      >
        {/* Diagram will be rendered here */}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>AI Agent White Papers - Libreonix Private Limited</title>
        <meta name="description" content="Explore detailed white papers on specialized AI agents developed by Libreonix Private Limited." />
        <link rel="canonical" href="https://libreonix.in/ai-agents" />
        <meta property="og:title" content="AI Agent White Papers - Libreonix Private Limited" />
        <meta property="og:description" content="Explore detailed white papers on specialized AI agents developed by Libreonix Private Limited." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-black animate-pulse-slow"></div>
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-4 sm:px-8 py-40 sm:py-48 text-white flex flex-col items-center">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-100 tracking-tight">AI Agent White Papers</h1>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300">In-depth analysis of our proprietary AI solutions, detailing the market, approach, and technology.</p>
            </div>
            
            <div className="w-full max-w-6xl grid grid-cols-1 gap-16">
              {aiAgents.map((agent) => (
                <div key={agent.id} className="bg-slate-900/50 rounded-2xl shadow-2xl border border-blue-700/30 backdrop-blur-xl overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-3">{agent.title}</h2>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">{agent.shortDescription}</p>

                    <div className="border-t border-blue-700/20 pt-6">
                      <h3 className="text-xl font-semibold text-slate-100 mb-4">Key Highlights</h3>
                      <ul className="space-y-2 mb-8">
                        {agent.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-slate-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Tabs defaultValue={agent.sections[0].title} className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-slate-800 border border-slate-700/50 rounded-lg p-1">
                        {agent.sections.map(section => (
                          <TabsTrigger 
                            key={section.title} 
                            value={section.title} 
                            className="data-[state=active]:bg-blue-600/60 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-md transition-all duration-200 py-2"
                          >
                            {section.title}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {agent.sections.map(section => {
                        const isArchitectureTab = section.title === "Architecture";
                        const diagramId = `mermaid-${agent.id}`;

                        return (
                          <TabsContent 
                            key={section.title} 
                            value={section.title} 
                            className="mt-4 text-slate-300"
                          >
                            <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700/50 min-h-[200px]">
                              {isArchitectureTab ? (
                                <MermaidDiagramRenderer diagramId={diagramId} content={section.content} />
                              ) : (
                                <p className="text-base leading-relaxed">{section.content}</p>
                              )}
                            </div>
                          </TabsContent>
                        );
                      })}
                    </Tabs>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AIAgents; 