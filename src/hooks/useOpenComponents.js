import { useState } from "react";

export const useOpenComponents = () => {
  const [openComponents, setOpenComponents] = useState([]);
  return {
    openComponents,
    setOpenComponents
  };
};