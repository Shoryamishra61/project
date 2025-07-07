import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Download, Trophy, Users } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  level: string;
  description: string;
  skills: string[];
  verificationUrl: string;
  image: string; // Path to the local image
  downloadUrl: string; // URL for downloading the certificate
  status: string;
  rating: number;
  category: 'Internships & Hackathons' | 'Professional Certifications';
}

const Certificates: React.FC = () => {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);
  const certificates: Certificate[] = [
    {
      title: 'AI/ML Virtual AICTE Internship',
      issuer: 'Google',
      date: '2024',
      credentialId: 'GOOGLE-AICTE-2024',
      level: 'Internship',
      description: 'Virtual internship focused on AI/ML concepts and applications through Google\'s AICTE program.',
      skills: ['AI', 'Machine Learning', 'Google Technologies', 'Virtual Internship'],
      verificationUrl: '',
      image: '/certificates/Ai-ml Virtual AICTE Internship (GOOGLE).jpeg',
      downloadUrl: '/certificates/Ai-ml Virtual AICTE Internship (GOOGLE).jpeg',
      status: 'Completed',
      rating: 5,
      category: 'Internships & Hackathons'
    },
    {
      title: 'Google Hackathon',
      issuer: 'Google',
      date: '2024',
      credentialId: 'GOOGLE-HACKATHON-2024',
      level: 'Hackathon',
      description: 'Participated and excelled in Google Hackathon, solving real-world problems with innovative AI/ML solutions.',
      skills: ['Hackathon', 'AI', 'Teamwork', 'Problem Solving'],
      verificationUrl: '',
      image: '/certificates/Google Hackathon.jpeg',
      downloadUrl: '/certificates/Google Hackathon.jpeg',
      status: 'Completed',
      rating: 5,
      category: 'Internships & Hackathons'
    },
    {
      title: 'IIT Indore Hackathon (Team)',
      issuer: 'IIT Indore',
      date: '2023',
      credentialId: 'IIT-INDORE-HACKATHON-TEAM-2023',
      level: 'Hackathon',
      description: 'Team participation in IIT Indore Hackathon, focusing on AI-driven solutions.',
      skills: ['Hackathon', 'Teamwork', 'AI'],
      verificationUrl: '',
      image: '/certificates/IIT indore Hackathon (1).jpeg',
      downloadUrl: '/certificates/IIT indore Hackathon (1).jpeg',
      status: 'Participated',
      rating: 5,
      category: 'Internships & Hackathons'
    },
    {
      title: 'RedBull Basement Festival',
      issuer: 'RedBull',
      date: '2023',
      credentialId: 'REDBULL-BASEMENT-2023',
      level: 'Festival',
      description: 'Participated in RedBull Basement Festival, showcasing innovative tech ideas.',
      skills: ['Innovation', 'Tech Festival', 'Presentation'],
      verificationUrl: '',
      image: '/certificates/RedBull Basement Festival.jpeg',
      downloadUrl: '/certificates/RedBull Basement Festival.jpeg',
      status: 'Participated',
      rating: 5,
      category: 'Internships & Hackathons'
    },
    {
      title: 'SIH (SMART INDIA HACKATHON)',
      issuer: 'Government of India',
      date: '2024',
      credentialId: 'SIH-2024',
      level: 'Participation',
      description: 'Participated in the prestigious Smart India Hackathon, showcasing problem-solving skills and innovation.',
      skills: ['Problem Solving', 'Innovation', 'Team Collaboration', 'National Level Competition'],
      verificationUrl: '',
      image: '/certificates/SIH SMART INDIA HACKATHON.jpeg',
      downloadUrl: '/certificates/SIH SMART INDIA HACKATHON.jpeg',
      status: 'Participated',
      rating: 5,
      category: 'Internships & Hackathons'
    },
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle',
      date: '2024',
      credentialId: 'ORACLE-FOUNDATIONS-2024',
      level: 'Professional',
      description: 'Oracle certification covering foundational technologies and concepts in Oracle ecosystem.',
      skills: ['Oracle Technologies', 'Database Management', 'Enterprise Solutions'],
      verificationUrl: '',
      image: '/certificates/ORACLE Cerifications.jpeg',
      downloadUrl: '/certificates/ORACLE Cerifications.jpeg',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    },
    {
      title: 'Artificial Intelligence Primer Certification',
      issuer: 'Infosys Springboard',
      date: '2024',
      credentialId: 'INFOSYS-AI-PRIMER-2024',
      level: 'Foundational',
      description: 'Certification covering fundamental concepts of Artificial Intelligence through Infosys Springboard platform.',
      skills: ['AI Fundamentals', 'Machine Learning Basics', 'Infosys Technologies'],
      verificationUrl: '',
      image: '/certificates/Artificial Intelligence Primer Certification.png',
      downloadUrl: '/certificates/Artificial Intelligence Primer Certification.png',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: '2024',
      credentialId: 'COURSERA-DEEP-LEARNING-2024',
      level: 'Specialization',
      description: 'Comprehensive deep learning specialization covering neural networks, CNNs, and more.',
      skills: ['Deep Learning', 'Neural Networks', 'CNNs'],
      verificationUrl: '',
      image: '/certificates/deep learning.png',
      downloadUrl: '/certificates/deep learning.png',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    },
    {
      title: 'Generative Models for Developers',
      issuer: 'OpenAI',
      date: '2024',
      credentialId: 'OPENAI-GEN-MODELS-2024',
      level: 'Professional',
      description: 'Certification on generative models and their applications for developers.',
      skills: ['Generative Models', 'OpenAI', 'AI'],
      verificationUrl: '',
      image: '/certificates/Generative models for developers.png',
      downloadUrl: '/certificates/Generative models for developers.png',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    },
    {
      title: 'Introduction to OpenAI Models',
      issuer: 'OpenAI',
      date: '2024',
      credentialId: 'OPENAI-INTRO-MODELS-2024',
      level: 'Introductory',
      description: 'Introductory course on OpenAI models and their use cases.',
      skills: ['OpenAI', 'AI', 'Model Usage'],
      verificationUrl: '',
      image: '/certificates/Introduction to OpenAI Models.png',
      downloadUrl: '/certificates/Introduction to OpenAI Models.png',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    },
    {
      title: 'OpenAI Generative Pre-trained (GPT-3) for Developers',
      issuer: 'OpenAI',
      date: '2024',
      credentialId: 'OPENAI-GPT3-2024',
      level: 'Professional',
      description: 'Certification on using GPT-3 for building intelligent applications.',
      skills: ['GPT-3', 'OpenAI', 'AI Applications'],
      verificationUrl: '',
      image: '/certificates/OpenAI Generative Pre-trained (GPT-3)  for developers.png',
      downloadUrl: '/certificates/OpenAI Generative Pre-trained (GPT-3)  for developers.png',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    },
    {
      title: 'Principles of Generative AI Certification',
      issuer: 'Google',
      date: '2024',
      credentialId: 'GOOGLE-GEN-AI-2024',
      level: 'Professional',
      description: 'Certification on the principles and applications of generative AI.',
      skills: ['Generative AI', 'Google', 'AI Principles'],
      verificationUrl: '',
      image: '/certificates/Principles of Generative Ai Certification.png',
      downloadUrl: '/certificates/Principles of Generative Ai Certification.png',
      status: 'Completed',
      rating: 5,
      category: 'Professional Certifications'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional': return 'from-cyan-400 to-blue-500';
      case 'Internship': return 'from-emerald-400 to-lime-500';
      case 'Foundational': return 'from-yellow-400 to-orange-500';
      case 'Introductory': return 'from-rose-400 to-fuchsia-500';
      case 'Participation': return 'from-purple-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  // Group certificates by category
  const categorizedCertificates = certificates.reduce((acc, cert) => {
    (acc[cert.category] = acc[cert.category] || []).push(cert);
    return acc;
  }, {} as Record<Certificate['category'], Certificate[]>);

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
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A commitment to continuous learning and professional development in AI and computer science.
          </p>
        </motion.div>

        {/* Categorized Certificates Grid */}
        {Object.entries(categorizedCertificates).map(([category, certsInCategory]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">{category}</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certsInCategory.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateY: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateY: 10, scale: 1.05 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => setPreview({ src: cert.image, title: cert.title })}
                >
                  {/* Certificate Header */}
                  <div className="relative h-32 bg-gradient-to-r from-gray-700 to-gray-800 p-6 flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getLevelColor(cert.level)} text-white text-sm font-medium mb-2`}>
                          {cert.level}
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400 font-medium">{cert.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                        <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < cert.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.date}</span>
                      <span className="mx-2">•</span>
                      <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-cyan-400">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verification and Download Links */}
                    <div className="flex flex-wrap gap-4">
                      {cert.verificationUrl && (
                        <motion.a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </motion.a>
                      )}
                      {cert.downloadUrl && (
                        <motion.a
                          href={cert.downloadUrl}
                          download
                          whileHover={{ scale: 1.02 }}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium hover:from-green-500/30 hover:to-teal-500/30 transition-all duration-200"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Certificate
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal for certificate preview */}
        {preview && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <div
              className="bg-gray-900 rounded-2xl shadow-2xl p-4 max-w-3xl w-full relative flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-2xl font-bold"
                onClick={() => setPreview(null)}
                aria-label="Close preview"
              >
                ×
              </button>
              <img
                src={preview.src}
                alt={preview.title}
                className="max-h-[70vh] w-auto rounded-lg border border-cyan-500/30 shadow-lg mb-4"
              />
              <div className="text-lg font-semibold text-white text-center">{preview.title}</div>
            </div>
          </div>
        )}

        {/* Learning Path Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Learning Paths</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Dedicated to continuous growth and mastering new domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">CodeChef Learning Paths</h3>
              <ul className="text-gray-300 text-left space-y-2">
                <li className="flex items-center"><span className="mr-2 text-cyan-400">•</span> Learn Python Programming: 2%</li>
                <li className="flex items-center"><span className="mr-2 text-cyan-400">•</span> Learn Java: 12%</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">CodeChef Practice Paths</h3>
              <ul className="text-gray-300 text-left space-y-2">
                <li className="flex items-center"><span className="mr-2 text-purple-400">•</span> Practice Arrays: 4%</li>
                <li className="flex items-center"><span className="mr-2 text-purple-400">•</span> Practice Strings: 23%</li>
                <li className="flex items-center"><span className="mr-2 text-purple-400">•</span> Practice Python: 19%</li>
                <li className="flex items-center"><span className="mr-2 text-purple-400">•</span> Practice Java: 31%</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">CodeChef Skill Tests</h3>
              <ul className="text-gray-300 text-left space-y-2">
                <li className="flex items-center"><span className="mr-2 text-green-400">•</span> Java Skill test: 87%</li>
                <li className="flex items-center"><span className="mr-2 text-green-400">•</span> C language skill test: 100%</li>
                <li className="flex items-center"><span className="mr-2 text-green-400">•</span> Data structures and Algorithms in C test: 57%</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;