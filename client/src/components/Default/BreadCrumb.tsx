import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconHome, IconChevronRight } from "@tabler/icons-react";

export const BreadCrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path] = useState(() => pathname.split("/"));

  return (
    <div className="flex items-center">
      <div
        className="cursor-pointer text-zinc-500 flex items-center justify-center hover:text-blue-600 hover:underline"
        onClick={() => navigate("/")}
      >
        <IconHome size={16} strokeWidth={1.5} />
      </div>
      {path.map((item, index) => (
        // Todo --> Make the bread crumb navigation work
        <div key={index} className="font-medium uppercase flex items-center text-zinc-500 text-xs">
          <p className="cursor-pointer hover:text-blue-600 hover:underline">{item}</p>
          {index < path.length - 1 ? <IconChevronRight size={16} /> : null}
        </div>
      ))}
    </div>
  );
};
