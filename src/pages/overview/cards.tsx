const Cards = ({
  // @ts-expect-error "hello"
  overviewData,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-6">
      <div className="flex h-[160px] min-w-[200px] flex-1 flex-col rounded-[8px] border px-4 py-3">
        <span className="mb-10 inline-block text-[#1A1A1A]">Income</span>

        <div className="flex items-center text-[#1A1A1A]">
          <span className="-mt-2 gap-2 font-semibold">GHS</span>
          <h3 className="ml-1 text-[2rem] font-bold">{overviewData?.income}</h3>
        </div>
      </div>

      <div className="flex h-[160px] min-w-[200px] flex-1 flex-col rounded-[8px] border px-4 py-3">
        <span className="mb-10 inline-block text-[#1A1A1A]">Expenses</span>

        <div className="flex items-center text-[#1A1A1A]">
          <span className="-mt-2 gap-2 font-semibold">GHS</span>
          <h3 className="ml-1 text-[2rem] font-bold">
            {overviewData?.expenses}
          </h3>
        </div>
      </div>

      <div className="flex h-[160px] min-w-[200px] flex-1 flex-col rounded-[8px] border px-4 py-3">
        <span className="mb-[22px] inline-block text-[#1A1A1A]">
          Smart Safe Index
        </span>

        <div className="flex items-center text-[#1A1A1A]">
          <h3 className="mx-auto w-fit">
            <span className="text-[21px] font-semibold">1000</span>{" "}
            <span className="font-medium">/</span>
            <span>850</span>
          </h3>
        </div>

        <div>
          <div className="relative h-[4px] w-full bg-[#FDE9E9B2]">
            <div
              style={{ transform: "scaleX(100%)" }}
              className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[#FC6060] via-[#FB923C] to-[#6EE7B7]"
            ></div>
          </div>
          <div className="mt-1 mb-2 flex justify-between text-[10px] text-[#1A1A1A]">
            <span>Poor</span>
            <span>Fair</span>
            <span>Good</span>
            <span>Excellent</span>
          </div>
        </div>

        <div className="from-medium mx-auto w-fit rounded-[10px] bg-[#F0FDF4] px-2 py-1 text-center text-[12px]">
          Good Safe Index Score
        </div>
      </div>
    </div>
  );
};

export default Cards;
