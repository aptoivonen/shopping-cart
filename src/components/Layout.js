import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className="sticky-top">
        <NavigationBar />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
