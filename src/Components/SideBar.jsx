import React, { forwardRef } from "react";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const SideBar = forwardRef(({ showSideBar }, ref) => {
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14 ">
        <picture>
          <img
            className="w-40 h-40 rounded-full"
            src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg?size=626&ext=jpg"
            alt="profile photo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? " text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex flex-row items-center transition-colors `}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            ` ${
              isActive
                ? " text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/billing"
          className={({ isActive }) =>
            ` ${
              isActive
                ? " text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors `}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
});

export default SideBar;
