export default function Testimonial() {
      return (
        <section className="bg-indigo-50 dark:bg-indigo-900 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">
              What Our Users Say
            </h2>
            <blockquote className="text-lg italic text-gray-700 dark:text-indigo-200 max-w-3xl mx-auto">
              “Next.js has transformed the way we build web apps. The performance and developer experience are unmatched. Highly recommended!”
              <footer className="mt-4 font-semibold text-indigo-700 dark:text-indigo-300">— Jane Doe, CTO at TechCorp</footer>
            </blockquote>
          </div>
        </section>
      );
    }
