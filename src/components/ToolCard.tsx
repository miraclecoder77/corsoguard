import React from 'react';
import Link from 'next/link';
import { Calculator, CheckSquare, Clock, Scaling, DollarSign, ArrowRight } from 'lucide-react';

interface ToolCardProps {
  toolId: 'age' | 'checklist' | 'growth' | 'harness' | 'cost';
}

const tools: Record<string, any> = {
  age: {
    title: "Human Age Converter",
    text: "See exactly how old your Corso is in human years.",
    icon: <Clock className="w-5 h-5 text-primary" />,
    href: "/age-converter"
  },
  "age-converter": {
    title: "Human Age Converter",
    text: "See exactly how old your Corso is in human years.",
    icon: <Clock className="w-5 h-5 text-primary" />,
    href: "/age-converter"
  },
  checklist: {
    title: "100-Item Checklist",
    text: "The ultimate socialization protocol for giant breeds.",
    icon: <CheckSquare className="w-5 h-5 text-primary" />,
    href: "/checklist"
  },
  growth: {
    title: "Growth Predictor",
    text: "Predict adult weight and track development milestones.",
    icon: <Calculator className="w-5 h-5 text-primary" />,
    href: "/growth"
  },
  harness: {
    title: "Harness Sizing",
    text: "Find the perfect tactical gear based on weight.",
    icon: <Scaling className="w-5 h-5 text-primary" />,
    href: "/harness"
  },
  cost: {
    title: "Lifetime Cost Calculator",
    text: "Plan your long-term financial commitment.",
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    href: "/lifetime-cost"
  },
  "lifetime-cost": {
    title: "Lifetime Cost Calculator",
    text: "Plan your long-term financial commitment.",
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    href: "/lifetime-cost"
  }
};

const ToolCard: React.FC<ToolCardProps> = ({ toolId }) => {
  const tool = tools[toolId];

  if (!tool) {
    console.error(`ToolCard: Invalid toolId "${toolId}"`);
    return null;
  }
  
  return (
    <Link href={tool.href} className="block my-8 no-underline group">
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-xl group-hover:bg-white/[0.05]">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              {tool.icon}
            </div>
            <h4 className="text-white font-bold text-lg m-0">{tool.title}</h4>
          </div>
          <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
        </div>
        <p className="text-neutral-400 text-sm m-0 mt-2">{tool.text}</p>
        <div className="mt-4 text-xs font-bold text-primary uppercase tracking-widest flex items-center">
            Open Tool <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
