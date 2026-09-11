import logo from "../assets/logo-text.png";


const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 border-4 border-red-700 container mx-auto">
      <aside >
        <img src={logo} alt="" />

        <p>
          Curated tools, technologies, and resources for developers building
          <br />
          modern software.
        </p>

        <div>
          <ul className="flex gap-6 font-bold text-black mt-6">
            <li>
              <a>GitHub</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
      </aside>
      

      <nav>
        <h6 className="footer-title font-bold text-black">Product</h6>
        <a className="link link-hover text-gray-400">Home</a>
        <a className="link link-hover text-gray-400">Technologies</a>
        <a className="link link-hover text-gray-400">Projects</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black">Company</h6>
        <a className="link link-hover text-gray-400">About </a>
        <a className="link link-hover text-gray-400">Contact</a>
        <a className="link link-hover text-gray-400">Career</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-black">Legal</h6>
        <a className="link link-hover text-gray-400">Privacy policy</a>
        <a className="link link-hover text-gray-400">Terms of use</a>
      </nav>
      {/* Divider Line */}
        <div className="border-t border-slate-100" />

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      

      
    </footer>
    
    
  );

  
  
};

{/* <div>
  <div className="divider"></div>

  <div className="flex justify-between">
    <p>Copyright © 2026 Dev Stack. All rights reserved.</p>

    <div className="flex gap-6">
      <p>Privacy</p>
      <p>Terms</p>
    </div>
  </div>
</div>; */}



export default Footer;
