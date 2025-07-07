import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap, Eye, MessageSquare, BarChart3, GitBranch, Cpu, Cloud, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Python', level: 95, description: 'Advanced Python, OOP, Functional Programming' },
        { name: 'Java', level: 85, description: 'Object-Oriented Programming, Data Structures' },
        { name: 'C++', level: 80, description: 'System Programming, Algorithm Implementation' },
        { name: 'SQL', level: 88, description: 'Database Design, Query Optimization' },
      ]
    },
    {
      title: 'AI/ML Frameworks',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Scikit-learn', level: 92, description: 'Machine Learning Algorithms, Model Building' },
        { name: 'TensorFlow', level: 88, description: 'Deep Learning, Neural Networks' },
        { name: 'Keras', level: 85, description: 'High-level Neural Networks API' },
        { name: 'NumPy', level: 90, description: 'Numerical Computing, Array Operations' },
        { name: 'Pandas', level: 92, description: 'Data Manipulation, Analysis' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Cloud,
      color: 'from-green-400 to-teal-500',
      skills: [
        { name: 'Jupyter Notebook', level: 90, description: 'Interactive Development, Data Analysis' },
        { name: 'Google Colab', level: 88, description: 'Cloud-based ML Development' },
        { name: 'MySQL', level: 85, description: 'Database Management, Query Optimization' },
        { name: 'Power BI', level: 82, description: 'Business Intelligence, Data Visualization' },
        { name: 'Git', level: 90, description: 'Version Control, Collaboration' },
        { name: 'Firebase', level: 80, description: 'Backend Services, Real-time Database' },
      ]
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      color: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'Data Preprocessing', level: 92, description: 'Data Cleaning, Feature Engineering' },
        { name: 'Model Building', level: 88, description: 'Algorithm Selection, Training' },
        { name: 'Feature Engineering', level: 85, description: 'Feature Selection, Dimensionality Reduction' },
        { name: 'Data Visualization', level: 90, description: 'Matplotlib, Seaborn, Plotly' },
      ]
    },
    {
      title: 'Specialized AI Technologies',
      icon: Layers,
      color: 'from-indigo-400 to-purple-500',
      skills: [
        { name: 'LangChain', level: 85, description: 'LLM Application Development' },
        { name: 'Groq LLM', level: 80, description: 'Large Language Model Integration' },
        { name: 'RAG Pipelines', level: 82, description: 'Retrieval-Augmented Generation' },
        { name: 'Hugging Face', level: 88, description: 'Transformers, Model Hub' },
        { name: 'ChromaDB', level: 78, description: 'Vector Database, Embeddings' },
        { name: 'OpenCV', level: 85, description: 'Computer Vision, Image Processing' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Cpu,
      color: 'from-red-400 to-pink-500',
      skills: [
        { name: 'Team Leadership', level: 88, description: 'Leading and coordinating team efforts' },
        { name: 'Problem-Solving', level: 92, description: 'Analytical thinking, Creative solutions' },
        { name: 'Effective Communication', level: 85, description: 'Technical and non-technical communication' },
        { name: 'Time Management', level: 90, description: 'Project planning, Deadline management' },
      ]
    },
  ];

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
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive expertise across the AI/ML technology stack, from foundational programming to cutting-edge AI frameworks.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">{skill.name}</span>
                      <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 1 }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-lg text-gray-300 mb-6">
            Staying ahead in the rapidly evolving AI landscape through continuous education and hands-on experimentation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-cyan-400 font-semibold">Current Focus</div>
              <div className="text-gray-300">Healthcare AI & Medical Diagnostics</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-cyan-400 font-semibold">Learning</div>
              <div className="text-gray-300">LLMs & RAG Pipelines</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="text-cyan-400 font-semibold">Exploring</div>
              <div className="text-gray-300">Computer Vision & Image Analysis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;