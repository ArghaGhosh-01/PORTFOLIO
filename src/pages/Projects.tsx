import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce store owners with sales analytics, inventory management, and customer insights.",
    image: "https://images.pexels.com/photos/6956783/pexels-photo-6956783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Travel Companion App",
    description: "A mobile-first web app that helps travelers plan their trips, discover local attractions, and keep track of their itineraries.",
    image: "https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Expo", "Firebase", "Google Maps API"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Design System",
    description: "A comprehensive design system with reusable components, design tokens, and documentation for consistent product development.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Figma", "Storybook", "React", "Styled Components"],
    category: "design",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information with a custom 3D background.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A beautifully designed weather application with detailed forecasts, interactive maps, and personalized notifications.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Weather API", "Styled Components", "PWA"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Brand Identity",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Branding", "Logo Design", "Adobe Illustrator", "Brand Guidelines"],
    category: "design",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "design", name: "Design" },
  ];

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            Here's a selection of my recent work, showcasing my skills in frontend development and design.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-6 mt-auto flex gap-3">
        <a 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
        >
          <Github size={16} /> Source Code
        </a>
      </div>
    </div>
  );
};

export default Projects;