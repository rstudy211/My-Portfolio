import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import skills from '../assets/data/skills_data'; // Assuming you have your skills data here

const SkillList = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <section id="skills" className="relative bg-slate-900 text-slate-100 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block p-1.5 px-3 mb-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-teal-500/10 to-teal-500/10 text-teal-400 border border-teal-500/20">
              Technical Expertise
            </span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-slate-300 text-lg">
              Tools and technologies I specialize in
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {visibleSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-slate-800 p-6 rounded-xl
                               shadow-sm
                               transition duration-300 ease-in-out
                               hover:shadow-lg hover:bg-slate-700
                               hover:scale-105 transform">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Icon Container */}
                    <div className="p-4 rounded-lg bg-white
                                  transition duration-300
                                  group-hover:bg-teal-500 group-hover:scale-110">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-12 h-12 object-contain
                                  filter brightness-125 saturate-200
                                  transition duration-300"
                      />
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-white text-lg font-medium text-center">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {skills.length > 8 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center space-x-2
                         px-6 py-3 rounded-lg
                         bg-blue-600 hover:bg-blue-700
                         text-white font-medium
                         transition duration-300"
              >
                <span>{showAll ? 'Show Less' : 'Show More'}</span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillList;
