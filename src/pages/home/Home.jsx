import { Rightbar } from "../../components/rightbar/Rightbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </div>
  );
};
