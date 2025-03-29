// import Onboarding from "@/components/onboarding/onboarding";
import { Button } from "@/components/ui/button";

import Cards from "./cards";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { useEffect, useState } from "react";
import Onboarding from "@/components/onboarding/onboarding";

import Addtransaction from "./add-transaction";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
import BarChatComponent from "@/components/charts/bar-chat";

const OverviewPage = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("user");

    const user = userString ? JSON.parse(userString) : null;

    if (!user?.has_been_fully_onboarded) {
      setShowOnboarding(true);
    } else {
      setShowOnboarding(false);
    }
  }, []);

  async function getTransactions() {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const res = await fetch(`${apiUrl}/transactions/`, { headers });
    const response = await res.json();
    return response;
  }

  async function getOveriew() {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const res = await fetch(`${apiUrl}/dashboard/overview`, { headers });
    const response = await res.json();
    return response;
  }

  const { isLoading, data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  const { data: overview } = useQuery({
    queryKey: ["overview"],
    queryFn: getOveriew,
  });

  if (isLoading) {
    return (
      <div className="mx-auto mt-20 flex min-h-screen justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      {showOnboarding && <Onboarding />}
      <div className="w-full">
        {/* component header */}
        <div className="flex items-center justify-between border-b border-[#D4D4D4] px-6 pt-4 pb-2">
          <div>
            <h2 className="text-[20px] font-bold text-[#001213]">Overview</h2>
            <p className="text-sm text-[#4D595A]">
              Overview of your business performance and metrics.
            </p>
          </div>

          <div className="flex gap-2">
            <Button className="rounded-full bg-[#F7F7F7] px-4 py-2.5 text-[#0A0A0A] hover:bg-[#F7F7F7]/90">
              Upload business data
            </Button>

            <Addtransaction />
          </div>
        </div>
        <Cards overviewData={overview?.data} />

        <div className="grid grid-cols-3 gap-3 px-6">
          <div className="col-span-2">
            <BarChatComponent />
          </div>
          <div></div>
        </div>
        <div className="px-6">
          <DataTable
            columns={columns}
            showRecent={true}
            data={data.data.transactions}
            showFilter={false}
          />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
