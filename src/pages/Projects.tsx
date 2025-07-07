import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Brain, Database, Zap, Heart, Activity } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'HealthEase - Hospital Management System',
      category: 'Healthcare AI',
      description: 'An optimized hospital workflow system featuring real-time queue management, AI-powered telemedicine, and live bed availability tracking. It enhances city-wide emergency response through integrated hospital discovery and inventory systems.',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'React', 'Firebase'],
      features: [
        'Real-time queue management system',
        'AI-powered telemedicine consultations',
        'Live bed availability tracking with computer vision validation',
        'Predictive analytics for demand forecasting',
        'Integrated hospital discovery and inventory systems'
      ],
      github: 'https://github.com/Shoryamishra61/healthease',
      live: null,
      stats: { accuracy: '95%', hospitals: '10+', patients: '1000+' }
    },
    {
      title: 'AI Lung Cancer Detector',
      category: 'Computer Vision',
      description: 'An image-based lung cancer detection system that identifies not only the presence of cancer but also its stage using deep learning on cellular images. I designed a highly accurate CNN model to classify images as benign, malignant (with stage), or normal.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Scikit-learn'],
      features: [
        'CNN-based image classification for lung cancer detection',
        'Multi-stage classification (benign, malignant, normal)',
        'High accuracy in cancer stage identification',
        'Real-time image processing capabilities',
        'Comprehensive medical image analysis pipeline'
      ],
      github: 'https://github.com/Shoryamishra61/Ai-Lung-Cancer-detector',
      live: null,
      stats: { accuracy: '92%', images: '5000+', stages: '4' }
    },
    {
      title: 'AI Medical Analysis',
      category: 'Natural Language Processing',
      description: 'An interactive AI tool that answers user health queries by leveraging real-time medical data through Retrieval-Augmented Generation (RAG) pipelines. It provides context-aware, evidence-backed medical responses.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'Gradio', 'LangChain', 'TensorFlow', 'Hugging Face', 'ChromaDB', 'Groq LLM'],
      features: [
        'Retrieval-Augmented Generation (RAG) pipelines',
        'Real-time medical data integration',
        'Context-aware health query responses',
        'Evidence-backed medical information',
        'Interactive AI consultation interface'
      ],
      github: 'https://github.com/Shoryamishra61/ai-medical-analysis',
      live: null,
      stats: { accuracy: '89%', queries: '500+', sources: '100+' }
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Healthcare AI': return Heart;
      case 'Computer Vision': return Eye;
      case 'Natural Language Processing': return Brain;
      case 'Deep Learning': return Database;
      case 'Machine Learning': return Brain;
      default: return Brain;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Healthcare AI': return 'from-green-400 to-teal-500';
      case 'Computer Vision': return 'from-cyan-400 to-blue-500';
      case 'Natural Language Processing': return 'from-purple-400 to-pink-500';
      case 'Deep Learning': return 'from-green-400 to-teal-500';
      case 'Machine Learning': return 'from-indigo-400 to-purple-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

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
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing AI/ML projects that demonstrate my expertise in building intelligent, real-world solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-medium`}>
                      <CategoryIcon className="w-4 h-4 mr-1" />
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400 border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-lg text-gray-300 mb-6">
            I'm always excited to work on challenging AI/ML projects. Let's build something amazing together!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
          >
            Let's Connect
            <ExternalLink className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;