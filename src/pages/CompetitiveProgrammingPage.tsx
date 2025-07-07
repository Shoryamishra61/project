import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CompetitiveProgrammingPage: React.FC = () => {
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
            My Competitive <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Programming Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A snapshot of my problem-solving skills and coding achievements across various platforms.
          </p>
        </motion.div>

        {/* Overall Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Overall Stats - Card 1</h3>
            <img src="/certificates/profileCard.png" alt="Profile Card 1" className="w-full max-w-sm object-contain rounded-lg shadow-lg mb-6" />
            <p className="text-gray-300 text-lg">This card visually represents an overview of my competitive programming journey.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Overall Stats - Card 2</h3>
            <img src="/certificates/devCard (2).png" alt="Profile Card 2" className="w-full max-w-sm object-contain rounded-lg shadow-lg mb-6" />
            <p className="text-gray-300 text-lg">This card offers another perspective on my development and coding achievements.</p>
          </motion.div>
        </div>

        {/* Individual Competitive Programming Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-16">
            Platform <span className="bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Detailed statistics from my active competitive programming platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* CodeChef Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4">CodeChef</h3>
              <p className="text-gray-300 text-lg mb-2">Username: <span className="text-purple-400">holy_wombat_06</span></p>
              <p className="text-gray-300 text-lg mb-2">Country: <span className="text-purple-400">India</span></p>
              <p className="text-gray-300 text-lg mb-4">Total Problems Solved: <span className="text-purple-400">219</span></p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-700/50 rounded-full text-sm text-purple-200">Problem Solver - Bronze</span>
                <span className="px-3 py-1 bg-purple-700/50 rounded-full text-sm text-purple-200">Daily Streak - Silver (25 days)</span>
              </div>
              <a
                href="https://www.codechef.com/users/holy_wombat_06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                View CodeChef Profile
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            {/* HackerRank Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-green-500/20 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4">HackerRank</h3>
              <p className="text-gray-300 text-lg mb-2">Username: <span className="text-green-400">sm7078</span></p>
              <p className="text-gray-300 text-lg mb-4">Country: <span className="text-green-400">India</span></p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-700/50 rounded-full text-sm text-green-200">Problem Solving Badge</span>
                <span className="px-3 py-1 bg-green-700/50 rounded-full text-sm text-green-200">CPP Badge</span>
                <span className="px-3 py-1 bg-green-700/50 rounded-full text-sm text-green-200">Java Badge</span>
                <span className="px-3 py-1 bg-green-700/50 rounded-full text-sm text-green-200">Python Badge</span>
                <span className="px-3 py-1 bg-green-700/50 rounded-full text-sm text-green-200">SQL Badge</span>
                <span className="px-3 py-1 bg-green-700/50 rounded-full text-sm text-green-200">React Badge</span>
              </div>
              <a
                href="https://www.hackerrank.com/profile/sm7078"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg text-white font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-300"
              >
                View HackerRank Profile
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
            
            {/* LeetCode Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-yellow-500/20 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4">LeetCode</h3>
              <p className="text-gray-300 text-lg mb-2">Total Solved: <span className="text-yellow-400">55</span></p>
              <ul className="text-gray-300 text-left space-y-1 mb-4">
                <li><span className="mr-2 text-yellow-400"> • </span> Easy: 22/885</li>
                <li><span className="mr-2 text-yellow-400"> • </span> Medium: 21/1876</li>
                <li><span className="mr-2 text-yellow-400"> • </span> Hard: 12/848</li>
              </ul>
              <a
                href="https://leetcode.com/u/mishrashorya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg text-white font-medium hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
              >
                View LeetCode Profile
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            {/* Codeforces Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-red-500/20 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Codeforces</h3>
              <p className="text-gray-300 text-lg mb-2">Total Problems Solved: <span className="text-red-400">45</span></p>
              <p className="text-gray-300 text-lg mb-2">Problems Solved (Last Year): <span className="text-red-400">45</span></p>
              <p className="text-gray-300 text-lg mb-2">Problems Solved (Last Month): <span className="text-red-400">36</span></p>
              <p className="text-gray-300 text-lg mb-4">Max Streak: <span className="text-red-400">37 days</span></p>
              <a
                href="https://codeforces.com/profile/mishrashorya61"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg text-white font-medium hover:from-red-600 hover:to-rose-700 transition-all duration-300"
              >
                View Codeforces Profile
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CompetitiveProgrammingPage; 