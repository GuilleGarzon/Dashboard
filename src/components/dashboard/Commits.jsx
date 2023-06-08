import { useEffect, useState } from 'react';
import { getCommitsReportData } from '../../services/dashboard';

import Card from 'react-bootstrap/Card';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from "react-chartjs-2";

import '../../styles/Commits.css';

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
          backgroundColor: '#00BFFF',
          borderColor: '#00BFFF',
          pointBorderColor: '#00BFFF',
          data: data?.map((item) => item.feat),
          tension: 0.4,
        },
        {
          label: "Fixes",
          backgroundColor: '#094293',
          borderColor: '#094293',
          pointBorderColor: '#094293',
          data: data?.map((item) => item.fix),
          tension: 0.4,
        },       
      ],
    };
  };

  return (
    <section className="report__container container">
      <Card className="commits__card">
        <Card.Body className='commits__body'>
          <Card.Title><h1>Reporte de commits por mes</h1></Card.Title>
          <p className="resume">Total commits últimos 12 meses: </p>
          <p className="commit__count">
            {commits &&
              commits
                .map((item) => item.feat + item.fix)
                .reduce((acc, val) => acc + val, 0)}
          </p>
          {commits && <Line data={chart} />}
        </Card.Body>
      </Card>
    </section>
  );
};
