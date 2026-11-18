import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#080B16] border-t border-white/10 px-8 md:px-16 pt-16 pb-8">

      <div className="grid md:grid-cols-3 gap-12 mb-12">

        <div>
          <h2 className="text-3xl font-bold">
            cynbit<span className="text-purple-500">.</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7 max-w-sm">
            Building innovative digital experiences and creating
            opportunities for the next generation of technology talent.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5">Quick Links</h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <a href="#home" className="hover:text-purple-400">Home</a>
            <a href="#careers" className="hover:text-purple-400">About Careers</a>
            <a href="#jobs" className="hover:text-purple-400">Open Positions</a>
            <a href="#apply" className="hover:text-purple-400">Apply Now</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5">Connect With Us</h3>

          <div className="flex gap-5 text-gray-400">
            <span className="font-bold text-xl border border-current rounded px-1 hover:text-purple-400">
  in
</span>
            {/* <a href="https://www.linkedin.com/company/cynbit/"
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn">
              <Linkedin className="hover:text-purple-400" />
            </a> */}

            {/* <a href="https://github.com"
              target="_blank" rel="noreferrer"
              aria-label="GitHub">
              <Github className="hover:text-purple-400" />
            </a> */}

            <a href="mailto:opportunities@cynbit.in"
              aria-label="Email">
              <Mail className="hover:text-purple-400" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

        <p>© 2026 Cynbit Technologies. All rights reserved.</p>

        <a href="#home" className="flex items-center gap-2 hover:text-purple-400">
          Back to Top <ArrowUp size={16} />
        </a>

      </div>

    </footer>
  );
}

export default Footer;