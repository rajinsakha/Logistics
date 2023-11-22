/* eslint-disable react/prop-types */
const OperationItem = ({ number, description, title, imgURL, index }) => {
    const isEvenIndex = index % 2 === 0;

  return (
    <section className={`flex max-md:flex-col justify-between items-center max-xl:gap-16 ${isEvenIndex ? "flex-row-reverse" : "flex-row"  }`}>
      <div className={`flex flex-col gap-10 ${isEvenIndex ? "mr-20" : "mr-0"}`}>
        <div className="flex gap-3 justify-start items-center ">
          <div className="rounded-full bg-sim-blue px-5 py-3">
            <h4 className="text-white text-2xl font-bold text-center">
              {number}
            </h4>
          </div>
          <h2 className="text-sim-orange text-2xl sm:text-[40px] leading-normal font-black">
            {title}
          </h2>
        </div>

        <p className="text-sm text-sim-grey md:max-w-xs">{description}</p>
      </div>

      <div className="w-4/5 sm:w-[500px]">
        <img src={imgURL} alt={imgURL} className="w-full" />
      </div>
    </section>
  );
};

export default OperationItem;
