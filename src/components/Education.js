import React from 'react';
import { GraduationCap, Calendar, Building2, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech. Computer Science",
      institution: "Government Engineering College Ajmer",
      duration: "August 2018 - May 2022",
      affiliation: "Affiliated to BTU Bikaner",
      details: [
        "Computer Science & Engineering",
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management"
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-violet-600/20 via-purple-600/20 to-blue-600/20"
    },
    {
      degree: "12th Math Science",
      institution: "Government Sr Sec School Bargaow, KOTA",
      duration: "Graduated May 2018",
      details: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ],
      icon: <Award className="w-8 h-8" />,
      gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20"
    }
  ];

  return (
    <section id="education" className="relative bg-gray-900 overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#3B82F6,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_100%,#6366F1,transparent)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div> */}

      <div className="container mx-auto py-24 px-6 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-block p-1.5 px-3 mb-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400 border border-purple-500/20">
              Education Details
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Educational Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic background and qualifications that have shaped my professional journey
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="group"
                data-aos="fade-up"
                data-aos-delay={500 + index * 100}
              >
                <div className={`
                  h-full p-8 rounded-2xl
                  bg-gradient-to-br ${item.gradient}
                  border border-white/10
                  transition-all duration-300
                  hover:border-white/20
                  hover:shadow-lg
                  relative
                  before:absolute before:inset-0
                  before:bg-gray-800/90 before:rounded-2xl
                  before:-z-10
                `}>
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Icon Header */}
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-700/50">
                      <div className="p-3 rounded-xl bg-gray-700/50 text-purple-400 
                                    transition-transform duration-300 group-hover:scale-105">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                                   from-purple-400 to-blue-400">
                        {item.degree}
                      </h3>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Building2 className="w-5 h-5 text-blue-400" />
                        <p className="text-lg font-medium">{item.institution}</p>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Calendar className="w-5 h-5 text-teal-400" />
                        <p className="text-lg">{item.duration}</p>
                      </div>
                      {item.affiliation && (
                        <p className="text-gray-400 text-base pl-8 border-l-2 border-gray-700/50">
                          {item.affiliation}
                        </p>
                      )}
                      
                      {/* Course Details */}
                      <div className="pt-4 mt-4 border-t border-gray-700/50">
                        <div className="flex flex-wrap gap-2">
                          {item.details.map((detail, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm rounded-full
                                       bg-gray-700/50 text-gray-300
                                       transition-colors duration-300"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;