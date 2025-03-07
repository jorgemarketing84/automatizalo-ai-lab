
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
  index?: number;
}

const FeatureCard = ({ icon, title, description, link, className, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-automatizalo-blue/20 to-automatizalo-purple/20 flex items-center justify-center text-automatizalo-purple mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-automatizalo-dark mb-3">{title}</h3>
      <p className="text-automatizalo-gray mb-6">{description}</p>
      <Button 
        asChild
        variant="ghost" 
        size="sm"
        className="group p-0 hover:bg-transparent text-automatizalo-purple"
      >
        <Link to={link}>
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default FeatureCard;
