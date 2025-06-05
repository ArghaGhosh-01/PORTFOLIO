import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            My Experience
          </h1>

          <div className="mb-16">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" />
              Work Experience
            </h2>
            
            <div className="space-y-12">
              <TimelineItem 
                date="2021 - Present"
                title="Senior Frontend Developer"
                company="Tech Innovations Inc."
                description="Lead developer for the company's flagship SaaS product. Responsible for architecture decisions, mentoring junior developers, and implementing new features."
                technologies={["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"]}
              />
              
              <TimelineItem 
                date="2019 - 2021"
                title="UI/UX Developer"
                company="Digital Solutions Lab"
                description="Worked in a cross-functional team to design and develop user interfaces for various client projects. Improved conversion rates by 30% through UX enhancements."
                technologies={["React", "JavaScript", "SCSS", "Figma", "Redux"]}
              />
              
              <TimelineItem 
                date="2017 - 2019"
                title="Frontend Developer"
                company="WebCraft Studio"
                description="Developed responsive websites and web applications for clients across different industries. Collaborated with designers to implement pixel-perfect interfaces."
                technologies={["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap"]}
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
              Education
            </h2>
            
            <div className="space-y-8">
              <EducationItem 
                date="2013 - 2017"
                degree="Bachelor of Science in Computer Science"
                institution="University of Technology"
                description="Focused on web development and user interface design. Graduated with honors."
              />
              
              <EducationItem 
                date="2020"
                degree="UI/UX Design Certification"
                institution="Design Academy"
                description="Intensive 6-month program covering all aspects of user interface and experience design."
              />
            </div>
          </div>

          <div>
            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <Award className="mr-2 text-blue-600 dark:text-blue-400" />
              Certifications & Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AchievementCard 
                title="Google UX Design Professional Certificate"
                date="2021"
                description="Completed the comprehensive UX design program covering all aspects of the UX design process."
              />
              
              <AchievementCard 
                title="Frontend Development Hackathon Winner"
                date="2020"
                description="First place in a regional hackathon for developing an innovative accessibility solution."
              />
              
              <AchievementCard 
                title="AWS Certified Developer"
                date="2022"
                description="Certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS."
              />
              
              <AchievementCard 
                title="Open Source Contributor"
                date="2019 - Present"
                description="Regular contributor to several popular open-source projects in the React ecosystem."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TimelineItem = ({ 
  date, 
  title, 
  company, 
  description, 
  technologies 
}: { 
  date: string; 
  title: string; 
  company: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      <span className="inline-block py-1 px-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">
        {date}
      </span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-400">{company}</p>
      <p className="mt-2 mb-3 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const EducationItem = ({ 
  date, 
  degree, 
  institution, 
  description 
}: { 
  date: string; 
  degree: string; 
  institution: string;
  description: string;
}) => {
  return (
    <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
      <span className="inline-block py-1 px-2 rounded bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium mb-2">
        {date}
      </span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{degree}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-400">{institution}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const AchievementCard = ({ 
  title, 
  date, 
  description 
}: { 
  title: string; 
  date: string; 
  description: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Experience;