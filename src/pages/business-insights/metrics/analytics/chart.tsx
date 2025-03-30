import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const token = localStorage.getItem("token");

  const { data: res } = useQuery({
    queryKey: ["business", "forecast"],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/ai_service/forecast`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return res.json();
    },
  });

  const data = [
    {
      name: moment(res?.data.date[0]).format("MMM"),
      uv: res?.data.predicted_revenue[0],
    },
    {
      name: moment(res?.data.date[1]).format("MMM"),
      uv: res?.data.predicted_revenue[1],
    },
    {
      name: moment(res?.data.date[2]).format("MMM"),
      uv: res?.data.predicted_revenue[2],
    },
    {       name: moment(res?.data.date[3]).format("MMM"),
    },
    {
      name: moment(res?.data.date[4]).format("MMM"),
      uv: res?.data.predicted_revenue[3],
    },
    {
      name: moment(res?.data.date[5]).format("MMM"),
      uv: res?.data.predicted_revenue[4],
    },
    {
      name: moment(res?.data.date[6]).format("MMM"),
      uv: res?.data.predicted_revenue[5],
    },  ];

  console.log(data);

  return (
    <div style={{ width: "100%", paddingInline: "24px" }}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
