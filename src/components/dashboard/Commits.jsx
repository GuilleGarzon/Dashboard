import { useEffect, useState } from 'react';
import { getCommitsReportData } from '../../services/dashboard';

import Card from 'react-bootstrap/Card';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

import '../../styles/Commits.css';

ChartJS.register();

export const Commits = () => {
  const [commits, setCommits] = useState(null);
  const [chart, setChart] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await getCommitsReportData();
      if (response) {
        setCommits(response);
        setChart(dataChart(response));
      }
    };
    fetch();
  }, []);

  const dataChart = (data) => {
    return {
      labels: data?.map((m) => m.month),

      datasets: [
        {
          label: "Features",
          fill: false,
          data: data?.map((m) => m.feat),
          tension: 0.5,
        }        
      ],
    };
  };

  return (
    <section className="report-container container">
      <Card bg="gray-300" text="white" className="commits-card">
        <Card.Body>
          <Card.Title><h2 className='h2'>Reporte de commits por mes</h2></Card.Title>
          <p className="resume">Total commits últimos 12 meses: </p>
          <p className="commit-count">
            {commits &&
              commits
                .map((m) => m.feat + m.fix)
                .reduce((acc, val) => acc + val, 0)}
          </p>
          {commits && <Line data={chart} />}
        </Card.Body>
      </Card>
    </section>
  );
};
