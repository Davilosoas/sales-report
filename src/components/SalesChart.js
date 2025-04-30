import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function SalesChart({ data }) {
  const options = {
    title: { text: "Vendas por mês" },
    xAxis: { categories: ["Janeiro", "Fevereiro", "Março", "Abril"] },

    yAxis: { title: { text: "Vendas" } },
    series: [{ name: "Vendas", data }],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
