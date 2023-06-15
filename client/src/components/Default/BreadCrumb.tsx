import { useState } from "react";
import { useLocation } from "react-router-dom";

export const BreadCrumb = () => {
  const { pathname } = useLocation();
  const [path] = useState(() => pathname.split("/"));

  return (
    <div className="flex items-center">
      {path.map((item, index) => (
        <div key={index} className="font-medium capitalize flex items-center text-zinc-500 text-sm">
          <p>{item}</p>
          <p className="px-2">/</p>
        </div>
      ))}
    </div>
  );
};
