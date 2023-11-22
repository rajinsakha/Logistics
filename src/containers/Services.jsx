import { CircularIcon } from "../components"
import { FaTruckFast } from "react-icons/fa6";
import { services } from "../constants/data";
import {ServiceItem, Button} from "../components";

const Services = () => {
  return (
    <section className="bg-[#F4F6F9] padding min-h-screen">
      <div className="flex justify-between items-center pb-12">
        <h1 className="leading-normal text-black max-[500px]:text-2xl text-4xl font-normal"><span className="font-bold border-b-4 border-b-sim-orange pb-2">Services</span> We Offer</h1>
    
        <CircularIcon Icon={FaTruckFast} iconStyle="text-sim-orange sm:h-[60px] sm:w-[60px] h-[30px] w-[30px]" className="sm:h-[150px] sm:w-[150px] h-20 w-20 "/>
      </div>

      <div className="flex flex-wrap justify-between gap-4 items-start py-12 max-md:flex-col">
        {services.map((service)=>{
            return(
                <ServiceItem key={service.title} Icon={service.Icon} title={service.title} description={service.description} />
            )
        })}
      </div>

      <div className="flex md:justify-center  items-center gap-8 ">
        <Button text="Request Quote" className="max-sm:flex-1 px-10 hover max-[500px]:px-2 max-[500px]:text-sm" />
        <Button text="Join Now" className="secondary max-sm:flex-1 px-10 secondary-hover max-[500px]:px-2 max-[500px]:text-sm" />
      </div>

    </section>
  )
}

export default Services
