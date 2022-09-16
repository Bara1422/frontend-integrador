import { useState } from "react";

export const useOpenComponents = () => {
  const [openComponents, setOpenComponents] = useState(null);
  return {
    openComponents,
    setOpenComponents
  }
}