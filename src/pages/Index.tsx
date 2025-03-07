
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, PenTool, Brain, ArrowRight, CheckCircle, Users, ArrowUpRight, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-automatizalo-purple bg-automatizalo-purple/10 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Solutions
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-automatizalo-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                AI-Powered Services for <span className="text-gradient">Every Business</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-automatizalo-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At Automatízalo, we connect and automate your workflows using cutting-edge AI and Make.com/N8N tools.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <FeatureCard 
                icon={<MessageSquare className="w-6 h-6" />}
                title="Chatbots & AI Assistants"
                description="Personalized chatbots to handle customer service, scheduling, lead engagement, and more."
                link="/solutions#chatbots"
                index={0}
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="Lead Generation"
                description="We find leads, engage them, and keep the conversation going until you get the information you need."
                link="/solutions#lead-generation"
                index={1}
              />
              <FeatureCard 
                icon={<PenTool className="w-6 h-6" />}
                title="Content Creation"
                description="Let AI generate posts, blogs, Instagram stories, and social content for you."
                link="/solutions#content-creation"
                index={2}
              />
              <FeatureCard 
                icon={<Brain className="w-6 h-6" />}
                title="Personal AI Agents"
                description="Your own AI-powered virtual assistant to streamline daily tasks, manage emails, and more."
                link="/solutions#ai-agents"
                index={3}
              />
            </div>

            <div className="mt-12 text-center">
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-automatizalo-gray/30 hover:bg-automatizalo-purple/5 transition-all duration-300"
              >
                <Link to="/solutions">
                  View All Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-automatizalo-purple bg-automatizalo-purple/10 rounded-full">
                  About us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-automatizalo-dark mb-6">
                  We're Building the Future of <span className="text-gradient">AI Automation</span>
                </h2>
                <p className="text-automatizalo-gray mb-6">
                  At Automatízalo, we're a team of young, passionate AI specialists and automation experts. We connect, fine-tune, and optimize automation tools like Make.com, N8N, AI chatbots, and custom workflows to help businesses and individuals become more efficient, scalable, and future-ready.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <p className="text-automatizalo-gray">Stay on top of AI trends through daily R&D</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <p className="text-automatizalo-gray">Continuously improve automations based on real user feedback</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mt-1 mr-3 w-5 h-5 flex-shrink-0" />
                    <p className="text-automatizalo-gray">Offer scalable solutions that evolve with your needs</p>
                  </li>
                </ul>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-automatizalo-blue to-automatizalo-purple text-white hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/contact">
                    Talk to Us
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-automatizalo-blue/20 to-automatizalo-purple/20 mix-blend-overlay"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                    alt="Automatizalo Team" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-automatizalo-blue/5 to-automatizalo-purple/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-automatizalo-purple bg-automatizalo-purple/10 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why work with us
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-automatizalo-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Future-Proof Your Business <span className="text-gradient">with AI</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-automatizalo-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We believe that AI should be accessible, powerful, and affordable.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="glass-card rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-automatizalo-blue/10 flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-8 h-8 text-automatizalo-blue" />
                </div>
                <h3 className="text-xl font-bold text-automatizalo-dark mb-3">Affordable & Scalable</h3>
                <p className="text-automatizalo-gray">
                  One-time setup with low-cost maintenance. Our solutions grow with your business.
                </p>
              </motion.div>

              <motion.div 
                className="glass-card rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-automatizalo-purple/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-automatizalo-purple" />
                </div>
                <h3 className="text-xl font-bold text-automatizalo-dark mb-3">Personalized AI Tools</h3>
                <p className="text-automatizalo-gray">
                  We tailor solutions for each client's specific needs and business requirements.
                </p>
              </motion.div>

              <motion.div 
                className="glass-card rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-automatizalo-blue/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-automatizalo-blue" />
                </div>
                <h3 className="text-xl font-bold text-automatizalo-dark mb-3">Always Improving</h3>
                <p className="text-automatizalo-gray">
                  New templates & fine-tuned automations every month to keep you ahead of the curve.
                </p>
              </motion.div>
            </div>

            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  asChild
                  className="bg-gradient-to-r from-automatizalo-blue to-automatizalo-purple text-white hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/contact">
                    Let's Build the AI-driven Future Together
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="rounded-2xl p-8 md:p-16 bg-gradient-to-br from-automatizalo-blue to-automatizalo-purple text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to integrate AI into your life or business?</h2>
                <p className="text-lg text-white/90 mb-8">
                  Talk to us about custom AI solutions tailored to your specific needs. Let's automate your workflow together.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-automatizalo-purple hover:bg-white/90 transition-all duration-300"
                >
                  <Link to="/contact">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
