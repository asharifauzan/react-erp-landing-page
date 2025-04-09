import { BarChart2 } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="navbar-brand flex items-center gap-1">
            <BarChart2 className="h-6 w-6" />
            <h1 className="font-bold text-2xl">AbcERP</h1>
          </div>
          <div className="navbar-menu">
            <ul className="flex items-center gap-x-5">
              <li className="font-bold uppercase text-2xl">
                <a href="#about">About</a>
              </li>
              <li className="font-bold uppercase text-2xl">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="font-bold uppercase text-2xl">
                <a href="#contact">Contact</a>
              </li>
              <li>
                <button className="font-semibold uppercase text-lg border-2 border-cyan-600 rounded-lg px-8 py-2">
                  <Link to="/login">Login</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
