
import { Information } from "../../components/dashboard/Information";
import { DetailsServer } from "../../components/dashboard/DetailsServer";
import { Commits } from "../../components/dashboard/Commits";
import { ResumeProjects } from "../../components/dashboard/ResumeProjects";

export const Dashboard = () => {
  return (
    <>
      <Information />
      <DetailsServer />
      <Commits />
      <ResumeProjects />
    </>
  );
}
