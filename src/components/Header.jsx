import React from "react";
import ThemeController from "./ThemeController";

export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 px-10 h-16">
        <div className="navbar-start">
          <img src="/logo.png" alt="" width={40} height={40} />
        </div>
        <div className="flex gap-5">
          <img src="/chevrolet.png" alt="" width={50} height={50} />
          <img src="/gmc.png" alt="" width={50} height={50} />
          <img src="/cadillac.png" alt="" width={50} height={50} />
          <img src="/buick.png" alt="" width={30} height={30} />
        </div>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>
    </div>
  );
}
