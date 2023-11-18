import { FaVideo } from "react-icons/fa";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <>
    <div className="sm:px-24 px-8 py-8 flex justify-between items-center max-lg:flex-col">
        <div className="max-w-[596px] flex-1 flex flex-col justify-between items-start gap-5">
            <h2 className=" text-sim-black text-[40px] font-semibold leading-[60px] max-lg:text-center">Quick & Reliable <span className="text-sim-orange text-[48px] font-bold leading-[60px]">Warehousing and Logistics </span>Solution.</h2>
            <p className="text-light-black text-sm leading-5 font-normal">
            ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
            </p>

            <div className="flex mt-7 gap-7 items-center">
                <button className="custom-btn secondary">Join Now</button>
                <div className="flex items-center justify-center w-14 h-14 rounded-[100px] bg-white box-shadow">
                    <FaVideo fontSize={28} className="text-sim-blue" />
                </div>
                <p className="text-sim-blue text-center text-sm font-extrabold">Play Demo</p>
            </div>
        </div>

        <div className="flex-1 flex ml-4 max-lg:mt-8">
          <img src={heroImg} alt="Hero Image of Logistics Website" className="bg-no-repeat" />
        </div>
    </div>

    <div className="mx-24 my-8 p-9 flex bg-slate-50 rounded-[30px]">
      Hello


      
    </div>


    </>
  )
}

export default Hero
