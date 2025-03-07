
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "How AI is Revolutionizing Customer Service in 2023",
      excerpt: "Discover how businesses are using AI-powered chatbots to transform their customer service operations, reduce response times, and increase customer satisfaction.",
      date: "May 15, 2023",
      slug: "ai-revolutionizing-customer-service"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "The Ultimate Guide to Workflow Automation for Small Businesses",
      excerpt: "Learn how small businesses can leverage automation tools to streamline operations, reduce manual work, and compete with larger companies.",
      date: "April 28, 2023",
      slug: "workflow-automation-small-businesses"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "AI Content Creation: Best Practices for Authentic Results",
      excerpt: "Explore how to use AI content creation tools effectively while maintaining your brand's authentic voice and connecting with your audience.",
      date: "April 12, 2023",
      slug: "ai-content-creation-best-practices"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Integrating WhatsApp Business API with Your Automation Workflow",
      excerpt: "A step-by-step guide to connecting WhatsApp Business API with your existing automation tools to enhance customer communication.",
      date: "March 30, 2023",
      slug: "whatsapp-business-api-automation"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "The ROI of AI Automation: Measuring Success Beyond Cost Savings",
      excerpt: "How to properly measure the return on investment from your AI automation initiatives, focusing on both tangible and intangible benefits.",
      date: "March 15, 2023",
      slug: "roi-ai-automation-measuring-success"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Building Your First AI Agent: A Beginner's Guide",
      excerpt: "Learn the basics of creating your first AI agent to handle personal or business tasks, even if you have no technical background.",
      date: "February 28, 2023",
      slug: "building-first-ai-agent-beginners-guide"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-automatizalo-blue/5 to-automatizalo-purple/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span 
                className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-automatizalo-purple bg-automatizalo-purple/10 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Blog
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-automatizalo-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Insights on <span className="text-gradient">AI & Automation</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-automatizalo-gray mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Stay updated with the latest trends, tips, and strategies in the world of AI automation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard 
                  key={index}
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-automatizalo-purple bg-automatizalo-purple/10 rounded-full">
                Stay Updated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-automatizalo-dark mb-6">
                Subscribe to our newsletter
              </h2>
              <p className="text-lg text-automatizalo-gray mb-8">
                Get the latest articles, updates, and automation tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-automatizalo-purple/50 focus:border-automatizalo-purple"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-automatizalo-blue to-automatizalo-purple text-white rounded-lg hover:shadow-md transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-automatizalo-gray mt-4">
                By subscribing, you agree to our Privacy Policy. We'll never spam you.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
