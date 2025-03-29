const Cards = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-[50px] rounded-[8px] border border-[#D4D4D4] px-4 py-3 text-[#1A1A1A]">
        <span>Cash Balance</span>

        <div className="flex items-center">
          <span className="-mt-2 gap-2 font-semibold">GHS</span>
          <h3 className="text-[2rem] font-bold">4000</h3>
        </div>
      </div>

      <div className="grid gap-[50px] rounded-[8px] border border-[#D4D4D4] px-4 py-3 text-[#1A1A1A]">
        <span>Income</span>

        <div className="flex items-center">
          <span className="-mt-2 gap-2 font-semibold">GHS</span>
          <h3 className="text-[2rem] font-bold">4000</h3>
        </div>
      </div>

      <div className="grid gap-[50px] rounded-[8px] border border-[#D4D4D4] px-4 py-3 text-[#1A1A1A]">
        <span>Expense</span>

        <div className="flex items-center">
          <span className="-mt-2 gap-2 font-semibold">GHS</span>
          <h3 className="text-[2rem] font-bold">4000</h3>
        </div>
      </div>

      <div className="grid gap-[50px] rounded-[8px] border border-[#D4D4D4] px-4 py-3 text-[#1A1A1A]">
        <span>Net Profit/Loss</span>

        <div className="flex items-center">
          <span className="-mt-2 gap-2 font-semibold">GHS</span>
          <h3 className="text-[2rem] font-bold">4000</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
