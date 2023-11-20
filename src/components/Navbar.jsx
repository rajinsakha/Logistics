import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {Button} from './index';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-4 w-full ">
      <nav className="flex justify-between items-center">
        <div>
          <p className="text-sim-blue font-lato text-2xl font-light">
            Ship
            <span className="text-sim-orange font-lato text-2xl font-black">
              Up
            </span>
          </p>
        </div>

        <ul className="flex justify-center items-center gap-16 navlinks-hover max-xl:hidden">
          <li>
            <a href="http://">Company</a>
          </li>
          <li>
            <a href="http://">Services</a>
          </li>
          <li>
            <a href="http://">Solutions</a>
          </li>
          <li>
            <a href="http://">Industries</a>
          </li>
          <li>
            <a href="http://">Insights</a>
          </li>
          <li>
            <a href="http://">News</a>
          </li>
        </ul>

        <div className="flex gap-3 max-lg:hidden">
          <Button text="Request Quote" className="hover" />
        
          <Button text="Join Now" className="secondary secondary-hover" />
         
        </div>

        <div className="hidden max-xl:flex">
          <GiHamburgerMenu
            className="cursor-pointer"
            fontSize={24}
            onClick={() => {
              setToggleMenu(true);
            }}
          />

          {toggleMenu && (
            <div className="w-[300px] h-screen flex justify-between items-start px-6 py-6 fixed top-0 right-0 z-10 bg-sim-blue text-white overflow-x-hidden">
              <ul className="custom-hover flex-1 flex flex-col gap-12 px-8 py-4 font-semibold text-2xl cursor-pointer mt-16">
                <li>
                  <a href="http://">Company</a>
                </li>
                <li>
                  <a href="http://">Services</a>
                </li>
                <li>
                  <a href="http://">Solutions</a>
                </li>
                <li>
                  <a href="http://">Industries</a>
                </li>
                <li>
                  <a href="http://">Insights</a>
                </li>
                <li>
                  <a href="http://">News</a>
                </li>
              </ul>
              <MdClose
                className="cursor-pointer"
                fontSize={28}
                onClick={() => setToggleMenu(false)}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
