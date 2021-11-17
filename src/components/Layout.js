import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header className="site-header sticky-top py-1">
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
