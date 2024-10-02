import { Bar } from "react-chartjs-2";

function BarChart({ employees }) {
  const companyCounts = employees.reduce((acc, employee) => {
    const companyName = employee.company.name;
    acc[companyName] = (acc[companyName] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(companyCounts),
    datasets: [
      {
        label: "Number of Employees",
        data: Object.values(companyCounts),
        backgroundColor: "rgba(147, 194, 61, 0.6)",
      },
    ],
  };

  return <Bar data={data} />;
}

export default BarChart;
