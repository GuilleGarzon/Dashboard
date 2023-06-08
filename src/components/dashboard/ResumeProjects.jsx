import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";
import { getResume } from "../../services/dashboard";

import '../../styles/Commits.css';

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
          backgroundColor: '#2271b3',
          borderColor: '#2271b3',
          pointBorderColor: '#2271b3',
          data: data?.topProjects.map((m) => m.porcentaje),
        },
      ],
    };
  };

  return (
    <section className="report-container container">
      <Card className="commits-card">
        <Card.Body className='commits__body' >
          <Card.Title><h1>Avance de proyectos</h1></Card.Title>
          <p className="resume">Reportes de entrega</p>
          {resume?.topProjects && <Bar data={chartData} />}
        </Card.Body>
      </Card>
    </section>
  );
};

