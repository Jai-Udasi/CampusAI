import { Mail, Cloud, Bot } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" 
            className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              CampusAI
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              One intelligent cloud platform that simplifies campus life using
              Artificial Intelligence, Cloud Computing and modern web
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Institutions
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Powered By
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Cloud className="text-blue-400" size={20} />
                <span>AWS Cloud</span>
              </div>

              <div className="flex items-center gap-3">
                <Bot className="text-cyan-400" size={20} />
                <span>OpenAI</span>
              </div>

              <div>React.js</div>
              <div>Node.js</div>
              <div>Firebase</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 transition hover:text-white">
                <Mail size={20} />
                <span>contact@campusai.com</span>
              </div>

              <p className="text-slate-400 leading-7">
                CampusAI is designed to help institutions, students and faculty
                collaborate through one unified AI-powered platform.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2026 CampusAI. Built with ❤️ using React, AWS, Firebase and AI.
        </div>
      </div>
    </footer>
  );
}

export default Footer;