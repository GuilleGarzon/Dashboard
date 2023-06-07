import { useEffect, useState } from "react";
import { getDetailsServer } from "../../services/dashboard";

import Card from "react-bootstrap/Card";
import { Line } from "react-chartjs-2";

import "../../styles/DetailsServer.css";


export const DetailsServer = () => {

  const [details, setDetails] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await getDetailsServer();
      if (response) {
        setDetails(response);
        setChartData(dataChart(response));
      }
    };
    fetch();
  }, []);

  const dataChart = (data) => {
    return {
      labels: data?.time.map((m) => m.time),
      datasets: [
        {
          label: "Week",
          fill: Line,
          data: data?.time.map((m) => m.value),
          tension: 0.5,
        },
      ],
    };
  };

  return (
    <section className="report-container container">
      <Card className="commits-card">
        <Card.Body>
          <Card.Title><h1>Detalles del Servidor</h1></Card.Title>
          <p className="description">
            Información sobre el consumo y uso del servidor principal para
            desarrollo
          </p>
          {details?.time && <Line data={ chartData } />}
        </Card.Body>
      </Card>
    </section>
  );
};
