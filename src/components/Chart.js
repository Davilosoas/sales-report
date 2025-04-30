import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ data }) => {
  const options = {
    title: { text: "Relatório de Vendas" },
    xAxis: { categories: ["Janeiro", "Fevereiro", "Março", "Abril"] },

    yAxis: { title: { text: "Vendas" } },
    series: [
      {
        name: "Vendas",
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
