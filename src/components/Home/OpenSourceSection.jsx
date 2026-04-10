import { Star, GitFork, Download } from 'lucide-react';

const repos = [
  {
    name: "https://project2-5a96.vercel.app",
    url: "https://project2-5a96.vercel.app",
    desc: "Provides helper classes and methods to manage FTP files in an OOP way.",
    stars: 88,
    forks: 17,
    downloads: "107K",
    tags: ["Rect", "Shell", "Dockerfile"]

  },
  {
    name: "AmraniCh/github-code-font-changer",
    url: "https://project2-5a96.vercel.app",
    desc: "Change and customize the boring GitHub code viewer font.",
    stars: 65,
    forks: 10,
    downloads: "303",
    tags: ["JavaScript", "CSS", "HTML"]
  },
    {
    name: "lazzard/php-ftp-client",
    url: "https://github.com/lazzard/php-ftp-client",
    desc: "Provides helper classes and methods to manage FTP files in an OOP way.",
    stars: 88,
    forks: 17,
    downloads: "107K",
    tags: ["PHP", "Shell", "Dockerfile"]
  },
  {
    name: "AmraniCh/github-code-font-changer",
    url: "https://github.com/AmraniCh/github-code-font-changer",
    desc: "Change and customize the boring GitHub code viewer font.",
    stars: 65,
    forks: 10,
    downloads: "303",
    tags: ["JavaScript", "CSS", "HTML"]
  },
];

export const OpenSourceSection = () => (
  <section id="open-source" className="bg-[#fdfbf7] py-10 px-10">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="w-12 h-1 bg-[#d4af37] mb-4"></div>
        <h2 className="text-2xl font-bold text-[#5c4b37]">
          Open Source.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {repos.map((repo, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                
                {/* CLICKABLE TITLE - UI SAME */}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#a68b5b] hover:underline"
                >
                  {repo.name}
                </a>

                <div className="flex items-center gap-1 text-xs text-gray-400 font-bold">
                  <Download size={14} /> {repo.downloads}
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-6">
                {repo.desc}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-xs font-bold text-gray-400">
                <span className="flex items-center gap-1">
                  <Star size={14} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} /> {repo.forks}
                </span>
              </div>

              <div className="flex gap-2">
                {repo.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[#5c4b37] text-white text-[10px] rounded font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border border-gray-200 rounded p-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-4 italic text-[#5c4b37] font-medium">
          <span className="text-3xl">🤝</span>
          Let's Build Something Great Together !
        </div>

        <button className="bg-[#8c7444] text-white px-8 py-3 rounded uppercase font-bold text-sm tracking-widest hover:bg-[#705d37] transition-colors">
          Get In Touch
        </button>
      </div>
    </div>
  </section>
);