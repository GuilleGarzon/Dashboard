import { useEffect, useState } from "react";
import { getProjects } from "../../services/dashboard";
import "../../styles/Information.css";

export const Information = () => {
  const [information, setInformation] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await getProjects();
      if (response) {
        setInformation(response);
      }
    };
    fetch();
  }, []);

  return (
    <section className="information container">
      <div>
        <h4>Proyectos</h4>
        <p>{information?.projects}</p>
      </div>
      <div>
        <h4>Incidentes registradas</h4>
        <p>{information?.pedingNc}</p>
      </div>
      <div>
        <h4>Error de despliegue</h4>
        <p>{information?.errorsDeploy}</p>
      </div>
    </section>
  );
}
