import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className="mt-5">
        <Outlet />
      </main>
    </>
  );
}

