import { warehouseImg } from "../assets"
import { Button } from "../components"

const Warehouse = () => {
  return (
    <section className="padding bg-[#EEF1FA]">
    <div className=" flex flex-col gap-24">
       <h1 className="leading-normal text-black max-[500px]:text-2xl text-4xl font-normal text-center"><span className="font-bold border-b-4 border-b-sim-orange pb-2">Warehouse</span> Onsite</h1>
       <img src={warehouseImg} alt="warehouse-image" />
    </div>

    <div className="flex justify-center  items-center gap-8 ">
        <Button text="Request Quote" className="max-sm:flex-1 max-[500px]:px-2 px-10 hover max-[500px]:text-sm" />
        <Button text="Join Now" className="secondary max-sm:flex-1 px-10 secondary-hover max-[500px]:px-2 max-[500px]:text-sm" />
      </div>
    
    </section>
  )
}

export default Warehouse
