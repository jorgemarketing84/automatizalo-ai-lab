
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  className?: string;
  index?: number;
}

const BlogCard = ({ image, title, excerpt, date, slug, className, index = 0 }: BlogCardProps) => {
  return (
    <motion.article 
      className={cn(
        "group overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-automatizalo-gray mb-3">
          <Calendar className="w-3 h-3 mr-1" />
          <time dateTime={date}>{date}</time>
        </div>
        <h3 className="text-lg font-bold text-automatizalo-dark mb-2 line-clamp-2">
          <Link to={`/blog/${slug}`} className="hover:text-automatizalo-purple transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-automatizalo-gray mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-automatizalo-purple hover:text-automatizalo-blue transition-colors"
        >
          Read more
          <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
