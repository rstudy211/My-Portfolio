import { useState } from "react";
// import springIcon from "../assets/spring-boot.svg";
// import ansibleIcon from "../assets/icons8-ansible.svg";
import skills from "../assets/data/skills_data";

// console.log('first', skills);
// const skills =[
//   {name:"Spring Boot", src : springIcon},
//   {name:"Ansible", src:ansibleIcon}
// ]
const SkillList = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <div id="skills" className="container  mx-auto py-20 px-6">
      <h3 className="text-2xl xl:text-4xl font-bold text-gray-900 my-8">
        My Skills
      </h3>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {visibleSkills.map((skill, index) => (
          // <div
          //   key={index}
          //   className="flex flex-col items-center bg-gray-100 rounded-lg p-4"
          //   data-aos="fade-up"
          //   data-aos-delay={100 * index}
          // >
          //   {typeof skill.icon === "string" ? (
          //     <i className={skill.icon + " mb-2"}></i>
          //   ) : (
          //     <img
          //       src={skill.icon}
          //       alt={skill.name}
          //       className={skill.className + " mb-2"}
          //     />
          //   )}
          //   <p className="text-lg font-bold">{skill.name}</p>
          // </div>

          <div
            className="flex flex-col items-center bg-gray-100 rounded-lg p-4"
            data-aos="fade-up"
            data-aos-delay={visibleSkills.length * 100}
          >
            <img
              src={skill.src}
              alt="Spring Boot"
              className="w-16 h-16 spring mb-2"
            />
            <p className="text-lg font-bold">{skill.name}</p>
          </div>
        ))}
        {/* <div
          className="flex flex-col items-center bg-gray-100 rounded-lg p-4"
          data-aos="fade-up"
          data-aos-delay={visibleSkills.length * 100}
        >
          <img
            src={springIcon}
            alt="Spring Boot"
            className="w-16 h-16 spring mb-2"
          />
          <p className="text-lg font-bold">Spring Boot</p>
        </div> */}
        {/* <div
          className="flex flex-col items-center bg-gray-100 rounded-lg p-4"
          data-aos="fade-up"
          data-aos-delay={visibleSkills.length * 100}
        >
          <img
            src={ansibleIcon}
            alt="ansible"
            className="w-16 h-16 spring mb-2"
          />
          <p className="text-lg font-bold">Ansible</p>
        </div> */}
      </div>

      {skills.length > 6 && (
        <div className="flex justify-center mt-16">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-4 flex items-center cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Show Less{" "}
                <i className="fas animate-pulse fa-chevron-up ml-2"></i>
              </>
            ) : (
              <>
                Show More{" "}
                <i className="fas animate-pulse fa-chevron-down ml-2"></i>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillList;
