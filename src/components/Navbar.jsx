/** @format */

import { Menus } from "../Data/utils";
import DesktopMenu from "./Header/DesktopMenu";
import MobMenu from "./Header/MobMenu";

const Navbar = () => {
  return (
    <header className="h-16 text-[15px] fixed inset-0 flex-center bg-white/95 border-b border-white/20 z-50 shadow-lg">
      <nav className="px-3.5 flex-center-between w-full max-w-9xl mx-auto">
        <div className="flex-center gap-x-3 z-[999] relative">
          <h1 className="flex items-center text-xl font-extrabold tracking-wide text-white drop-shadow">
            <img
              src="https://i.ibb.co/xSnVq4zQ/softtechlogo.png"
              alt="SoftTech Logo"
              className="w-8 h-8 object-contain rounded-md mr-3"
            />
            <a href="/home" className="text-[#1E5470] hover:text-[#031A09] transition-colors">
              SoftTech
            </a>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="gap-x-1 lg:flex-center hidden">
          {Menus.map((menu, index) => (
            <DesktopMenu menu={menu} key={index} />
          ))}
        </ul>

        <div className="flex-center gap-x-5 ">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Contact Us
          </a>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
