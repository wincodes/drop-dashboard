/* This example requires Tailwind CSS v2.0+ */
import * as React from "react";
// import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

export default function SearchHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-11 gap-4 my-6 items-center">
      <div className="col-span-1 flex justify-center content-center py-2 px-4 bg-core-yellow rounded-md font-semibold h-10">
        <div className="px-1">
          <svg
            className="mt-1"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7249 0.620007C17.5849 0.360007 17.3049 0.200012 17.0249 0.200012H1.00492C0.704915 0.200012 0.444915 0.360007 0.304915 0.620007C0.164915 0.880007 0.22492 1.2 0.38492 1.44L6.62491 10.6V16.66C6.62491 17.28 7.04492 17.8 7.68492 17.8H10.3649C10.9849 17.8 11.4249 17.3 11.4249 16.66V10.6L17.6649 1.44C17.8049 1.2 17.8649 0.880007 17.7249 0.620007ZM9.98492 9.92001C9.90492 10.06 9.80492 10.2 9.80492 10.36V16.2H8.20492V10.36C8.20492 10.2 8.12491 10.04 8.02491 9.92001L6.12491 7.14C6.52491 7.02 7.00491 6.90001 7.52491 6.92001C8.14491 6.92001 8.56491 7.04002 9.02491 7.16002C9.50491 7.28002 9.98492 7.40001 10.6649 7.42001C11.0649 7.42001 11.4249 7.40002 11.7449 7.36002L9.98492 9.92001ZM12.9049 5.64C12.8849 5.64 12.0449 6.02001 10.6649 6.00001C10.1649 6.00001 9.78492 5.90002 9.36492 5.78002C8.88492 5.66002 8.32491 5.52001 7.52491 5.50001C6.62491 5.50001 5.82492 5.72001 5.28492 5.92001L2.48492 1.78002H15.5049L12.9049 5.64ZM11.2649 4.32001C11.1249 4.18001 11.0249 3.96002 11.0249 3.76002C11.0249 3.54002 11.1049 3.34001 11.2649 3.20001C11.4049 3.06001 11.6249 2.96002 11.8249 2.96002C12.0449 2.96002 12.2449 3.04001 12.3849 3.20001C12.5249 3.36001 12.6249 3.56002 12.6249 3.76002C12.6249 3.98002 12.5449 4.18001 12.3849 4.32001C12.2249 4.46001 12.0249 4.56002 11.8249 4.56002C11.6249 4.56002 11.4049 4.46001 11.2649 4.32001Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="px-1">Filter</div>
      </div>

      <div className="bg-white rounded-md h-10 ml-4 col-span-4 border-stuff">
        <div className="flex justify-start items-center content-center py-2 px-2">
          <div className="flex justify-between items-center content-center text-gray-400 font-medium">
            <div className="px-2">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.80547"
                  cy="8.8055"
                  r="7.49047"
                  stroke="#8F92A1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0153 14.4043L16.9519 17.3333"
                  stroke="#8F92A1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>Columns</div>
            <div className="px-2">
              <svg
                width="1"
                height="24"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.25"
                  y1="1.09278e-08"
                  x2="0.249999"
                  y2="24"
                  stroke="#8F92A1"
                  stroke-width="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md h-10 col-span-4 border-stuff">
        <div className="flex justify-start items-center content-center py-2 px-2">
          <div className="flex justify-between items-center content-center text-gray-400 font-medium">
            <div className="px-2">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.80547"
                  cy="8.8055"
                  r="7.49047"
                  stroke="#8F92A1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0153 14.4043L16.9519 17.3333"
                  stroke="#8F92A1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>Rows</div>
            <div className="px-2">
              <svg
                width="1"
                height="24"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.25"
                  y1="1.09278e-08"
                  x2="0.249999"
                  y2="24"
                  stroke="#8F92A1"
                  stroke-width="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between col-span-2">
        <div className="bg-red-cl px-4 py-2 mx-4 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>

        <div className="bg-red-cl font-medium py-2 px-12 rounded-md">Export</div>
      </div>
    </div>
  );
}
