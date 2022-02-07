import * as React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const resources: Array<any> = [
  {
    name: "Help Center",
  },
  {
    name: "Guides",
  },
  {
    name: "Events",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default () => {
  return (
    <Popover className="relative bg-white header-style">
      <div className="flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-md red-logo">
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.754 16.264C5.62467 16.264 4.62733 16.0733 3.762 15.692C2.89667 15.296 2.21467 14.7387 1.716 14.02C1.21733 13.2867 0.960667 12.3993 0.946 11.358H3.916C3.94533 12.0767 4.202 12.6853 4.686 13.184C5.18467 13.668 5.86667 13.91 6.732 13.91C7.48 13.91 8.074 13.734 8.514 13.382C8.954 13.0153 9.174 12.5313 9.174 11.93C9.174 11.2993 8.976 10.808 8.58 10.456C8.19867 10.104 7.68533 9.818 7.04 9.598C6.39467 9.378 5.70533 9.14333 4.972 8.894C3.784 8.48333 2.87467 7.95533 2.244 7.31C1.628 6.66467 1.32 5.80667 1.32 4.736C1.30533 3.82667 1.518 3.04933 1.958 2.404C2.41267 1.744 3.02867 1.238 3.806 0.885999C4.58333 0.519333 5.478 0.336 6.49 0.336C7.51667 0.336 8.41867 0.519333 9.196 0.885999C9.988 1.25267 10.604 1.766 11.044 2.426C11.4987 3.086 11.7407 3.87067 11.77 4.78H8.756C8.74133 4.23733 8.52867 3.76067 8.118 3.35C7.722 2.92467 7.16467 2.712 6.446 2.712C5.83 2.69733 5.30933 2.85133 4.884 3.174C4.47333 3.482 4.268 3.93667 4.268 4.538C4.268 5.05133 4.42933 5.462 4.752 5.77C5.07467 6.06333 5.51467 6.31267 6.072 6.518C6.62933 6.72333 7.26733 6.94333 7.986 7.178C8.74867 7.442 9.44533 7.75 10.076 8.102C10.7067 8.454 11.2127 8.92333 11.594 9.51C11.9753 10.082 12.166 10.8227 12.166 11.732C12.166 12.5387 11.9607 13.2867 11.55 13.976C11.1393 14.6653 10.5307 15.2227 9.724 15.648C8.91733 16.0587 7.92733 16.264 6.754 16.264Z"
                  fill="white"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group className="flex space-x-10">
            <a href="#" className="text-base font-medium text-white">
              Summary
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-200" : "text-white",
                      "group rounded-md inline-flex items-center text-base font-medium "
                    )}
                  >
                    <span>Amazon Tools</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 "
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <p
                              key={item.name}
                              className="text-base font-medium text-gray-900"
                            >
                              {item.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-200" : "text-white",
                      "group rounded-md inline-flex items-center text-base font-medium "
                    )}
                  >
                    <span>Warehoust Inventory</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 "
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <p
                              key={item.name}
                              className="text-base font-medium text-gray-900"
                            >
                              {item.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="flex items-center md:ml-12 justify-between">
            <a className="text-base font-medium text-white px-2">
              <span className="inline-block relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1 translate-x-1 rounded-full bg-red-500 text-xs">
                  5{" "}
                </span>
              </span>
            </a>

            <a className="text-base font-medium text-white px-2">
              Monica Simons
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-200" : "text-white",
                      "group rounded-md inline-flex items-center text-base font-medium px-2"
                    )}
                  >
                    <span>
                      <img
                        className="inline-block h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 "
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-2 py-2 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <p
                              key={item.name}
                              className="text-base font-medium text-gray-900"
                            >
                              {item.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </Popover>
  );
};
