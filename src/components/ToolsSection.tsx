
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, Database, Figma, Palette, LineChart, Globe, 
  PanelLeft, Calculator, Server, Cloud 
} from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  delay: number;
}

const ToolCard = ({ name, description, icon, bgColor, delay }: ToolCardProps) => (
  <Card className="border border-primary-100 hover:shadow-lg transition-all duration-300 animate-on-scroll " 
        style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-5 flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${bgColor}`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </CardContent>
  </Card>
);

const ToolsSection = () => {
  const tools = [
    {
      name: "Power BI",
      description: "Create interactive data visualizations and dashboards",
      icon: <LineChart className="h-8 w-8 text-white" />,
      bgColor: "bg-blue-600",
      delay: 100
    },
    {
      name: "SQL",
      description: "Query and manage databases with structured query language",
      icon: <Database className="h-8 w-8 text-white" />,
      bgColor: "bg-orange-600",
      delay: 200
    },
    {
      name: "DAX",
      description: "Build formulas and expressions for data analysis",
      icon: <Calculator className="h-8 w-8 text-white" />,
      bgColor: "bg-green-600",
      delay: 300
    },
    {
      name: "M Language",
      description: "Transform and clean data with Power Query formulas",
      icon: <Code className="h-8 w-8 text-white" />,
      bgColor: "bg-purple-600",
      delay: 400
    },
    {
      name: "Excel",
      description: "Advanced spreadsheet analysis and integration",
      icon: <PanelLeft className="h-8 w-8 text-white" />,
      bgColor: "bg-emerald-600",
      delay: 500
    },
    {
      name: "Data Modeling",
      description: "Design efficient data models for analysis",
      icon: <Server className="h-8 w-8 text-white" />,
      bgColor: "bg-pink-600",
      delay: 600
    },
    {
      name: "Azure",
      description: "Cloud services integration for BI solutions",
      icon: <Cloud className="h-8 w-8 text-white" />,
      bgColor: "bg-cyan-600",
      delay: 700
    },
    {
      name: "Data Visualization",
      description: "Create impactful visualizations using best practices",
      icon: <Palette className="h-8 w-8 text-white" />,
      bgColor: "bg-yellow-600",
      delay: 800
    },
    {
      name: "Figma",
      description: "Design professional dashboards before implementation",
      icon: <Figma className="h-8 w-8 text-white" />,
      bgColor: "bg-red-600",
      delay: 900
    },
    {
      name: "Web Integration",
      description: "Embed reports and dashboards in websites and apps",
      icon: <Globe className="h-8 w-8 text-white" />,
      bgColor: "bg-indigo-600",
      delay: 1000
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll ">
          <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200 px-3 py-1 text-sm mb-4">
            Industry Tools
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Tools You Will <span className="text-primary-600">Master</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
              bgColor={tool.bgColor}
              delay={tool.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
