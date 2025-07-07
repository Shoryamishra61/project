import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, Trophy, Code, Users, Target } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Associate Head (Content)',
      company: "Placfv's",
      location: 'Chennai',
      duration: 'March 2024 - Present',
      type: 'Leadership',
      description: 'Leading and coordinating team efforts to streamline placement-related activities effectively. Engaging directly with higher officials and HR professionals to ensure seamless coordination and execution of placement processes.',
      achievements: [
        'Led and coordinated team efforts to streamline placement-related activities effectively',
        'Approved and enhanced official emails, event scripts, and HR communications to improve clarity and impact',
        'Engaged directly with higher officials and HR professionals to ensure seamless coordination and execution of placement processes',
        'Improved overall efficiency of placement processes through strategic planning and execution'
      ],
      technologies: ['Leadership', 'Communication', 'Project Management', 'HR Coordination']
    },
    {
      title: 'Committee Head',
      company: 'Aaruush',
      location: 'Chennai',
      duration: 'August 2023 - Present',
      type: 'Leadership',
      description: 'Coordinated key events at Aaruush, ensuring efficient planning and smooth execution from start to finish. Collaborated with multiple teams to align on shared goals and deliver a cohesive and successful event experience.',
      achievements: [
        'Coordinated key events at Aaruush, ensuring efficient planning and smooth execution from start to finish',
        'Improved event logistics by streamlining processes, which enhanced overall efficiency',
        'Collaborated with multiple teams to align on shared goals and deliver a cohesive and successful event experience',
        'Successfully managed complex event operations with multiple stakeholders'
      ],
      technologies: ['Event Management', 'Team Coordination', 'Logistics', 'Stakeholder Management']
    }
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
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of leadership and coordination in dynamic, team-oriented environments.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-gray-900 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'Leadership' ? 'bg-cyan-500/20 text-cyan-400' :
                        exp.type === 'Part-time' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {exp.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center mb-4 text-gray-300">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="mr-4">{exp.company}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="flex items-center text-lg font-semibold mb-3">
                        <Trophy className="w-5 h-5 mr-2 text-cyan-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center text-lg font-semibold mb-3">
                        <Code className="w-5 h-5 mr-2 text-cyan-400" />
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400 border border-cyan-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Leadership Experience Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-gray-300">Leadership Roles</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300">Events Coordinated</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Team Members Led</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;