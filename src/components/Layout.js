import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <>
      <header className="sticky-top py-1">
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
