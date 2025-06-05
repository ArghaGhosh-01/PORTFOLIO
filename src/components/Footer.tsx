import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-16 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<Github size={18} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
            <SocialLink href="mailto:hello@example.com" icon={<Mail size={18} />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;