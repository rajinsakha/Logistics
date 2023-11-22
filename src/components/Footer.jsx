import CircularIcon from "./CircularIcon";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="padding-x py-12 bg-sim-blue w-full">
      <div className="flex flex-col min-[850px]:flex-row flex-wrap justify-between items-start gap-12 lg:gap-40">
        <div className="flex-1 flex flex-col gap-5">
          <h4 className="text-[18px] sm:text-2xl font-light leading-normal text-sim-orange">
            Ship<span className="text-white font-black">Up</span>
          </h4>
          <p className="text-[12px] sm:text-sm leading-5 font-normal text-white  xl:max-w-[220px]">
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint
          </p>
        </div>

    
          <div className="flex-1 flex flex-col justify-between items-start gap-5">
            <h4 className="footerLinks-title">Explore</h4>
            <div className="flex flex-col gap-3">
            <p className="footerLinks">About Us</p>
            <p className="footerLinks">Our Warehouses</p>
            <p className="footerLinks">Blog</p>
            <p className="footerLinks">News</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between items-start gap-5">
            <h4 className="footerLinks-title ">Legal</h4>
            <div className="flex flex-col gap-3">
            <p className="footerLinks">Terms & Conditions</p>
            <p className="footerLinks">Privacy</p>
            </div>
          
          </div>
     

        <div className="flex-1 flex flex-col gap-5 justify-between items-start">
          <h4 className="footerLinks-title">Social Media</h4>
          <div className="flex gap-5">
            <CircularIcon Icon={FaFacebookF} className="w-[45px] h-[45px] rounded-full" iconStyle="w-[24px] h-[24px]" />
            <CircularIcon Icon={FaInstagram} className="w-[45px] h-[45px] rounded-full" iconStyle="w-[24px] h-[24px]" />
            <CircularIcon Icon={FaXTwitter} className="w-[45px] h-[45px] rounded-full" iconStyle="w-[24px] h-[24px]" />
            <CircularIcon Icon={FaWhatsapp} className="w-[45px] h-[45px] rounded-full" iconStyle="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>

    <div className="line h-[1.5px] mt-16"></div>

    <h4 className="text-xl font-light leading-normal text-white mt-5 text-center">
            Ship<span className="text-sim-orange font-black">Up</span><span className="font-black">.ng</span>
          </h4>


    </footer>
  );
};

export default Footer;
