import { FaVideo } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="padding flex justify-between items-center">
        <div className="max-w-[596px] flex-1 flex flex-col justify-between items-start gap-5">
            <h2 className=" text-sim-black text-[40px] font-semibold leading-[60px]">Quick & Reliable <span className="text-sim-orange text-[48px] font-bold leading-[60px]">Warehousing and Logistics </span>Solution.</h2>
            <p className="text-light-black text-sm leading-5 font-normal">
            ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
            </p>

            <div className="flex mt-7 gap-7">
                <button className="custom-btn secondary">Join Now</button>
                <div className="flex items-center justify-center w-14 h-14 rounded-[100px] bg-white box ">
                    <FaVideo fontSize={28} className="text-sim-blue" />
                </div>
            </div>
        </div>

        <div className="flex-1 flex">

        </div>
      
    </div>
  )
}

export default Hero
