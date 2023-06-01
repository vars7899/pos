import React from "react";

export type NavigationOption = {
  name: string;
  path: string;
  icon: React.JSX.Element;
};

export type NavigationOptionList = NavigationOption[];
