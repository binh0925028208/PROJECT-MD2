import { BarAnimation } from "../barChart/bar";
import "./adminDashboard.css";
import BasicLineChart from "../lineChart/line";
import PieActiveArc from "../pieChart/pieChart";

const AdminDashboard = () => {
  return (
    <div className="admin_dashboard_body">
      <BarAnimation />
      <BasicLineChart />
      <PieActiveArc />
    </div>
  );
};

export default AdminDashboard;
