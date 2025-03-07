
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, PenTool, Brain, Target, Cpu, MessagesSquare, BarChart, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Solutions = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      id: "chatbots",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chatbots & AI Assistants",
      description: "Personalized chatbots to handle customer service, scheduling, lead engagement, and more.",
      features: [
        "AI chatbots tailored for businesses",
        "WhatsApp, email & social media integration",
        "24/7 automated responses",
        "Multi-language support",
        "Custom conversation flows",
        "Integration with your existing systems"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "lead-generation",
      icon: <Target className="w-8 h-8" />,
      title: "Lead Generation & Smart Follow-Up",
      description: "We find leads, engage them, and keep the conversation going until you get the information you need.",
      features: [
        "Automated prospecting & qualification",
        "Personalized email follow-ups",
        "AI-driven conversation handling",
        "Database enrichment",
        "CRM integration",
        "Performance analytics & reporting"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "content-creation",
      icon: <PenTool className="w-8 h-8" />,
      title: "Social Media & Content Creation",
      description: "Let AI generate posts, blogs, Instagram stories, and social content for you.",
      features: [
        "AI-generated Instagram stories & posts",
        "Blog & article creation",
        "Multi-platform content scheduling",
        "Content calendar management",
        "Brand voice consistency",
        "Performance tracking & optimization"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "ai-agents",
      icon: <Brain className="w-8 h-8" />,
      title: "Personal AI Agents for Businesses & Individuals",
      description: "Your own AI-powered virtual assistant to streamline daily tasks, manage emails, organize meetings, and automate reminders.",
      features: [
        "Connects to emails, calendar, WhatsApp, and CRM",
        "For solo entrepreneurs, business managers, and individuals",
        "Works autonomously, continuously learning & optimizing",
        "Automates repetitive tasks & processes",
        "Personalized to your workflow",
        "Secure data handling & privacy"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const integrations = [
    { icon: <MessagesSquare className="w-6 h-6" />, name: "WhatsApp Business" },
    { icon: <Cpu className="w-6 h-6" />, name: "Make.com" },
    { icon: <Cpu className="w-6 h-6" />, name: "N8N" },
    { icon: <BarChart className="w-6 h-6" />, name: "CRM Systems" },
    { icon: <Zap className="w-6 h-6" />, name: "Zapier" },
    { icon: <Target className="w-6 h-6" />, name: "Google Suite" }
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
                AI-Powered Solutions
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-automatizalo-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Cutting-edge automation <span className="text-gradient">for your business</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-automatizalo-gray mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover how our AI-powered solutions can revolutionize your workflows, boost efficiency, and drive growth.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  id={solution.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-automatizalo-blue/20 to-automatizalo-purple/20 mix-blend-overlay"></div>
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-auto object-cover aspect-[4/3]"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-automatizalo-blue/20 to-automatizalo-purple/20 flex items-center justify-center text-automatizalo-purple mb-6">
                      {solution.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-automatizalo-dark mb-4">{solution.title}</h2>
                    <p className="text-lg text-automatizalo-gray mb-6">{solution.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-medium text-automatizalo-dark mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-automatizalo-purple/10 p-1 mr-3 mt-0.5">
                              <svg className="w-3 h-3 text-automatizalo-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-automatizalo-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-automatizalo-blue to-automatizalo-purple text-white hover:shadow-lg transition-all duration-300"
                    >
                      <Link to="/contact">
                        Get Started
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
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
                Seamless Connections
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-automatizalo-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We integrate with your <span className="text-gradient">favorite tools</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-automatizalo-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our solutions connect seamlessly with the tools and platforms you already use.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {integrations.map((integration, index) => (
                <div key={index} className="glass-card rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-automatizalo-purple/10 flex items-center justify-center mx-auto mb-4">
                    {integration.icon}
                  </div>
                  <h3 className="font-medium text-automatizalo-dark">{integration.name}</h3>
                </div>
              ))}
            </motion.div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your workflow?</h2>
                <p className="text-lg text-white/90 mb-8">
                  Contact us today to discuss your automation needs and how we can help transform your business with AI.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-automatizalo-purple hover:bg-white/90 transition-all duration-300"
                >
                  <Link to="/contact">
                    Talk to Our Experts
                    <ArrowUpRight className="ml-2 h-4 w-4" />
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

export default Solutions;
