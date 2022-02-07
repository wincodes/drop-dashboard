import * as React from "react";
import { useState } from "react";
import * as moment from "moment";
import SearchHeader from "../layout/SearchHeader";
import Samples from "./Samples";
import SvgList from "../../SvgList";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Charts from "./Charts";

interface _dt {
  svg: string;
  chart: string;
  backgroundColor1: string;
  backgroundColor2: string;
  data: object;
  options: object;
}

export default () => {
  return (
    <div className="dashboard h-max py-6 px-6">
      <div className="text-left lead-text py-4">
        New Dashboard (1) {moment().format("DD/MM/YYYY HH:MM A")}
      </div>

      <SearchHeader />

      <DndProvider backend={HTML5Backend as any}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-">
          <div className="bg-white overflow-hidden rounded-default col-span-3">
            <Charts />
          </div>
          <div>
            <div className="bg-white overflow-hidden rounded-default mx-10 my-4">
              <div className="flex items-center justify-center">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="font-bold text-left">Visualization</h4>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    {SvgList.map((svgL: _dt, i) => (
                      <Samples key={i} svgL={svgL} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-4">
              <button className="bg-red-cl font-bold py-2 px-8 rounded-md">
                Finish and Save
              </button>
            </div>
          </div>
        </div>
      </DndProvider>
    </div>
  );
};
