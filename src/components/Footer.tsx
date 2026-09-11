import logo from "../assets/logo-text.png";

const Footer = () => {
  return (


    // <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 border-4 border-red-700 container mx-auto">
    //   <aside className="border-4 border-green-700">
    //     <img src={logo} alt="" />

    //     <p>
    //       Curated tools, technologies, and resources for developers building
    //       <br />
    //       modern software.
    //     </p>

    //     <div>
    //       <ul className="flex gap-6 font-bold text-black mt-6">
    //         <li>
    //           <a>GitHub</a>
    //         </li>
    //         <li>
    //           <a>Twitter</a>
    //         </li>
    //         <li>
    //           <a>LinkedIn</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>

    //   <nav>
    //     <h6 className="footer-title font-bold text-black">Product</h6>
    //     <a className="link link-hover text-gray-400">Home</a>
    //     <a className="link link-hover text-gray-400">Technologies</a>
    //     <a className="link link-hover text-gray-400">Projects</a>
    //   </nav>
    //   <nav>
    //     <h6 className="footer-title font-bold text-black">Company</h6>
    //     <a className="link link-hover text-gray-400">About </a>
    //     <a className="link link-hover text-gray-400">Contact</a>
    //     <a className="link link-hover text-gray-400">Career</a>
    //   </nav>
    //   <nav>
    //     <h6 className="footer-title font-bold text-black">Legal</h6>
    //     <a className="link link-hover text-gray-400">Privacy policy</a>
    //     <a className="link link-hover text-gray-400">Terms of use</a>
    //   </nav>

    //   {/* Bottom Section */}

      
    //     <div>
    //         <hr className="horizontal-line"></hr>
    //     </div>

    //     <div className="justify-evenly gap-4">
    //       <p>© 2026 Dev Stack. All rights reserved.</p>

    //       <div className="flex gap-6">
    //         <p>Privacy</p>
    //         <p>Terms</p>
    //       </div>
    //     </div>
      
    // </footer>

    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-20 container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            {/* Brand Block */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-xs">
                  DS
                </div>
                <span className="text-lg font-bold  text-slate-900">
                  <img src={logo} alt="" />
                  {/* Dev<span className="brand-text-gradient">Stack</span> */}
                </span>
              </div>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-500">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">LinkedIn</a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><a href="#home" className="hover:text-slate-800">Home</a></li>
                <li><a href="#technologies" className="hover:text-slate-800">Technologies</a></li>
                <li><a href="#projects" className="hover:text-slate-800">Projects</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><a href="#about" className="hover:text-slate-800">About</a></li>
                <li><a href="#contact" className="hover:text-slate-800">Contact</a></li>
                <li><a href="#careers" className="hover:text-slate-800">Careers</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-500">
                <li><a href="#privacy" className="hover:text-slate-800">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-slate-800">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6 font-medium">
              <a href="#privacy" className="hover:text-slate-600">Privacy</a>
              <a href="#terms" className="hover:text-slate-600">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    
  );
}
  


{
  /* <div>
  <div className="divider"></div>

  <div className="flex justify-between">
    <p>Copyright © 2026 Dev Stack. All rights reserved.</p>

    <div className="flex gap-6">
      <p>Privacy</p>
      <p>Terms</p>
    </div>
  </div>
</div>; */
}

export default Footer;
