import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";
import { getResume } from "../../services/dashboard";

export const ResumeProjects = () => {
  const [resume, setResume] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await getResume();
      if (response) {
        setResume(response);
        setChartData(dataChart(response));
      }
    };
    fetch();
  }, []);

  const dataChart = (data) => {
    return {
      labels: data?.topProjects.map((m) => m.name),
      datasets: [
        {
          label: "Projects",
          fill: false,
          data: data?.topProjects.map((m) => m.porcentaje),
          tension: 0.5,
        },
      ],
    };
  };

  return (
    <section className="report-container container">
      <Card bg="gray-300" text="white" className="commits-card">
        <Card.Body>
          <Card.Title><h1>Avance de proyectos</h1></Card.Title>
          <p className="description">Reportes de entrega</p>
          {resume?.topProjects && <Bar data={chartData} />}
        </Card.Body>
      </Card>
    </section>
  );
};

