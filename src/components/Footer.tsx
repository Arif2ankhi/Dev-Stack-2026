import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-red-500 pt-16 pb-12 mt-20 bg-gradient-to-r from-fuchsia-100 to-cyan-100 container mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className=" flex justify-center sm:justify-start text-lg font-bold  text-slate-900">
                <img  src={logo} alt="logo" />
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="hidden sm:block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-500">
              <li>
                <a href="#home" className="hover:text-slate-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-slate-800">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-800">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div className="hidden sm:block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-500">
              <li>
                <a href="#about" className="hover:text-slate-800">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-slate-800">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal section */}
          <div className="hidden sm:block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 ">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-slate-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-800">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar/Copywrite */}
        <hr />
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#privacy" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
