import { LucideIcon } from 'lucide-react';

    interface FeatureCardProps {
      icon: LucideIcon;
      title: string;
      description: string;
    }

    export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
      return (
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="p-4 bg-indigo-600 rounded-full text-white mb-4">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      );
    }
