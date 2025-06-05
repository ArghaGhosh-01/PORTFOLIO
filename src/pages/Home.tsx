import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Layout as LayoutIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skills = skillsRef.current?.querySelectorAll('.skill-card');
    skills?.forEach((skill) => {
      observer.observe(skill);
    });

    return () => {
      skills?.forEach((skill) => {
        observer.unobserve(skill);
      });
    };
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">Frontend Developer</span> <br />& Digital Designer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Creating beautiful, functional, and accessible web experiences
            that connect with users and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg transition-colors duration-300 font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized in creating modern web experiences using the latest technologies and design principles.
            </p>
          </div>

          <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SkillCard
              icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
              title="Development"
              description="HTML5, CSS3, JavaScript, TypeScript, React, Next.js, and more"
            />
            <SkillCard
              icon={<Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
              title="Design"
              description="UI/UX, Responsive Design, Design Systems, Figma, and Adobe Creative Suite"
            />
            <SkillCard
              icon={<LayoutIcon className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
              title="Architecture"
              description="Component-based design, Accessibility, Performance optimization"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="skill-card opacity-0 translate-y-8 transition-all duration-700 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Home;