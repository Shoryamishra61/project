import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Database, Zap, Award, BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuralNetwork from '../components/NeuralNetwork';
import MatrixRain from '../components/MatrixRain';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <MatrixRain />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6"
              >
                <Brain className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">AI/ML Engineer</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Shoryakumar Mishra
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl"
              >
                Crafting intelligent solutions for healthcare and beyond through cutting-edge 
                machine learning algorithms and deep neural networks. Transforming data into insights, 
                insights into innovation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-6"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8">
                  <NeuralNetwork />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, label: 'Cutting-Edge AI Projects', value: '3', description: 'Developed and deployed systems in healthcare, diagnostics, and medical analysis' },
              { icon: Trophy, label: 'Certified & Recognized', value: 'Multiple', description: 'Holding certifications from Google, Oracle, and Infosys, and a participant in the Smart India Hackathon' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                My Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build intelligent and scalable systems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Programming & Scripting', techs: ['Python', 'Java', 'C++', 'SQL'] },
              { category: 'AI/ML Frameworks', techs: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas'] },
              { category: 'Tools & Platforms', techs: ['Git', 'MySQL', 'Power BI', 'Jupyter Notebook', 'Google Colab'] },
              { category: 'Specialized AI', techs: ['LangChain', 'Hugging Face', 'ChromaDB', 'Groq LLM'] },
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
              >
                <h3 className="text-cyan-400 font-semibold mb-4 text-center">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="text-gray-300 text-sm text-center font-mono">
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;