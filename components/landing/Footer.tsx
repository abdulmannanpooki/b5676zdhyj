import { Github, Twitter, Linkedin } from 'lucide-react';

    export default function Footer() {
      return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
              &copy; {new Date().getFullYear()} Next.js Landing. All rights reserved.
            </div>
            <nav className="flex space-x-6">
              <a
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/nextjs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/vercel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </nav>
          </div>
        </footer>
      );
    }
