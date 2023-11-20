/* eslint-disable react/prop-types */
import CircularIcon from "./CircularIcon"


const ServiceItem = ({Icon, title, description  }) => {
  return (
    <div className="flex flex-col justify-between items-start gap-4 mb-12">
      <CircularIcon Icon={Icon} className="h-[60px] w-[60px]" />
      <h2 className="text-sim-blue max-[450px]:text-xl text-2xl font-semibold leading-normal">{title}</h2>
      <p className="mt-1 text-sm leading-5 font-normal text-sim-grey md:max-w-xs text-justify">{description}</p>
    </div>
  )
}

export default ServiceItem
