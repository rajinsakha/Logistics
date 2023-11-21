import { warehouseImg } from "../assets"

const Warehouse = () => {
  return (
    <div className="padding bg-[#EEF1FA] flex flex-col gap-24">
       <h1 className="leading-normal text-black max-[500px]:text-2xl text-4xl font-normal text-center"><span className="font-bold border-b-4 border-b-sim-orange pb-2">Warehouse</span> Onsite</h1>
       <img src={warehouseImg} alt="warehouse-image" />
    </div>
  )
}

export default Warehouse
