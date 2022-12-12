import { Rightbar } from "../../components/rightbar/Rightbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";

export const Home = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Timeline />
      <Rightbar />
    </div>
  );
};
