import { CircularIcon, OperationItem } from "../components";
import { FaTruckFast } from "react-icons/fa6";
import { operations } from "../constants/data";

const Operations = () => {
  return (
    <section className="padding">
      <div className="flex padding-b gap-x-96 items-end">
        <CircularIcon
          Icon={FaTruckFast}
          iconStyle="text-sim-orange sm:h-[60px] sm:w-[60px] h-[30px] w-[30px]"
          className="sm:h-[150px] sm:w-[150px] h-20 w-20 "
        />
        <h1 className="leading-normal text-black max-[500px]:text-2xl text-4xl font-normal">
          <span className="font-bold border-b-4 border-b-sim-orange pb-2">
            Operation 
          </span> Mode
        </h1>
      </div>

      <div className="sm:padding-x flex flex-col gap-12 justify-between">
        {operations.map((operation, index) => {
          return (
            <OperationItem
              key={operation}
              number={operation.number}
              title={operation.title}
              description={operation.description}
              imgURL={operation.imgURL}
              index={index + 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Operations;
