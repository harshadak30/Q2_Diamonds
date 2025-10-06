import { useState } from "react";

export const usePopup = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (popupId: string) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const isPopupOpen = (popupId: string) => {
    return activePopup === popupId;
  };

  return {
    activePopup,
    openPopup,
    closePopup,
    isPopupOpen
  };
};

export default usePopup;
