import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Globe, 
  Monitor, 
  Lightbulb, 
  Users,
  Zap,
  Clock
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p>
              I'm a passionate frontend developer and designer with over 5 years of experience creating beautiful, 
              functional, and accessible web experiences. My journey in web development started with a curiosity 
              about how things work on the internet, which quickly turned into a deep passion for creating digital 
              experiences that people love to use.
            </p>
            <p>
              I specialize in building modern web applications using React and TypeScript, with a strong focus on 
              user experience, accessibility, and performance. I believe that great design and solid engineering 
              principles go hand in hand, and I strive to create solutions that are both beautiful and technically 
              sound.
            </p>
            <p>
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through writing and speaking at local meetups.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ValueCard 
                icon={<Users />}
                title="User-Centered" 
                description="I believe in putting users first and creating experiences that solve real problems."
              />
              <ValueCard 
                icon={<Globe />}
                title="Accessibility" 
                description="I'm committed to building inclusive products that work for everyone, regardless of ability."
              />
              <ValueCard 
                icon={<Lightbulb />}
                title="Continuous Learning" 
                description="I'm always exploring new technologies and refining my skills to stay at the cutting edge."
              />
              <ValueCard 
                icon={<Zap />}
                title="Performance" 
                description="I optimize for speed and efficiency to create smooth, responsive experiences."
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Expertise</h2>
            <div className="space-y-6">
              <ExpertiseItem
                icon={<Code />} 
                title="Frontend Development"
                skills={["React", "TypeScript", "Next.js", "Vue.js", "JavaScript", "HTML5/CSS3"]}
              />
              <ExpertiseItem
                icon={<Palette />} 
                title="Design"
                skills={["UI/UX Design", "Figma", "Adobe XD", "Design Systems", "Wireframing", "Prototyping"]}
              />
              <ExpertiseItem
                icon={<Monitor />} 
                title="Tools & Technologies"
                skills={["Git", "Webpack", "Vite", "Jest", "Storybook", "Tailwind CSS", "Styled Components"]}
              />
              <ExpertiseItem
                icon={<Clock />} 
                title="Soft Skills"
                skills={["Team Collaboration", "Project Management", "Technical Writing", "Mentoring", "Problem Solving"]}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ValueCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="mr-4 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const ExpertiseItem = ({ 
  icon, 
  title, 
  skills 
}: { 
  icon: React.ReactNode; 
  title: string; 
  skills: string[];
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;