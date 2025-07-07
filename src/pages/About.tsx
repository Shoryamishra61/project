import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap, Award, Target, Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate and dedicated AI/ML engineer with a deep fascination for artificial intelligence and its potential to transform our world.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-cyan-400" />
                My Journey
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Shoryakumar Mishra, currently pursuing a B.Tech in Computer Science at S.R.M Institute of Science and Technology. 
                My journey into technology began with a fascination for how machines can learn and adapt, leading me to dive deep into the 
                worlds of machine learning, deep learning, and artificial intelligence.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My experience is built on a foundation of diverse and impactful projects, from developing an AI Lung Cancer Detector 
                using CNNs to engineering HealthEase, a comprehensive hospital management system powered by AI-driven telemedicine 
                and predictive analytics. My work on an AI Medical Analysis tool has allowed me to explore Retrieval-Augmented 
                Generation (RAG) pipelines to provide evidence-backed medical responses. Each project has honed my ability to build 
                robust, scalable, and meaningful AI solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring the latest research papers or contributing to open-source projects. 
                I believe the future of technology lies in AI, and I am excited to be part of this revolutionary journey.
              </p>
            </div>
          </motion.div>

          {/* Skills & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-cyan-400" />
                Core Expertise
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Brain, label: 'Healthcare AI', description: 'Building systems for diagnostics, hospital management, and medical data analysis' },
                  { icon: Code, label: 'Computer Vision', description: 'Developing models for image classification and real-time status validation' },
                  { icon: Database, label: 'Natural Language Processing (NLP)', description: 'Implementing NLP for virtual consultations and building interactive AI tools' },
                  { icon: Zap, label: 'Data Science', description: 'Expertise in the full data lifecycle, including preprocessing, feature engineering, model building, and visualization' },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/10"
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-5 h-5 mr-2 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">{skill.label}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-cyan-400" />
                Connect with Me
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'shoryamishra65@gmail.com', link: 'mailto:shoryamishra65@gmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/shoryakumar-mishra', link: 'https://www.linkedin.com/in/shoryakumar-mishra' },
                  { icon: Github, label: 'GitHub', value: 'github.com/Shoryamishra61', link: 'https://github.com/Shoryamishra61' },
                  { icon: Phone, label: 'Phone', value: '+91-8460711154', link: 'tel:+918460711154' },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <contact.icon className="w-4 h-4 mr-3 text-cyan-400" />
                    <div className="flex-1">
                      <span className="text-gray-400 text-sm">{contact.label}: </span>
                      <a 
                        href={contact.link} 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        target={contact.label === 'Email' || contact.label === 'Phone' ? undefined : '_blank'}
                        rel={contact.label === 'Email' || contact.label === 'Phone' ? undefined : 'noopener noreferrer'}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">My Philosophy</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            "AI is not just about creating intelligent machines; it's about augmenting human capabilities and solving problems 
            that matter. Every model I build, every algorithm I optimize, is a step towards a future where technology serves 
            humanity's greatest needs."
          </p>
        </motion.div>

        {/* View My Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">View My Resume</h3>
          <p className="text-gray-300 mb-6">
            Interested in my full background, skills, and experience? Check out my resume for more details.
          </p>
          <a
            href="/resume_shoryakumar_Mishra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
          >
            <span className="mr-2">📄</span> View My Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;