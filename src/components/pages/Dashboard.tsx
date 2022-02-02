import * as React from "react";
import * as moment from "moment";
import SearchHeader from "../layout/SearchHeader";

function Dashboard() {
  return (
    <div className="dashboard h-max py-6 px-6">
      <div className="text-left lead-text py-4">
        New Dashboard (1) {moment().format("DD/MM/YYYY HH:MM A")}
      </div>

      <SearchHeader />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-">
        <div className="bg-white overflow-hidden rounded-lg col-span-3">
          <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
        </div>
        <div className="bg-white overflow-hidden rounded-lg mx-10 my-4">
          <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
