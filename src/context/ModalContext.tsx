import React, { createContext, useState, useContext } from "react";
import { Dish } from "../types/types";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";
import { defaultDish } from "../shared/defaults";

const ModalContext = createContext({
  isDishModalActive: false,
  updateDish: (dish: Dish) => {},
  dish: defaultDish,
  isGenericModalActive: false,
  closeDeleteOrderModal: () => {},
  openDeleteOrderModal: () => {},
  openDishModal: () => {},
  closeDishModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMobileOrTablet = isMobile || isTablet;

  const [isDishModalActive, setIsDishModalActive] = useState(false);
  const [dish, setDish] = useState<Dish>(defaultDish);
  const [isGenericModalActive, setIsGenericModalActive] = useState(false);
  const [isDeleteOrderModalOpen, setIsDeleteOrderModalOpen] = useState(false);

  const openDishModal = () => {
    setIsDishModalActive(true);
  };

  const closeDishModal = () => {
    setIsDishModalActive(false);
    if (isMobileOrTablet) window.scrollTo(0, 0);
  };

  const openDeleteOrderModal = () => {
    setIsDeleteOrderModalOpen(true);
  };

  const closeDeleteOrderModal = () => {
    setIsDeleteOrderModalOpen(false);
  };

  const updateDish = (dish: Dish) => {
    setDish(dish);
    if (isMobileOrTablet) window.scrollTo(0, 0);
  };

  const value = { isDishModalActive, openDishModal, closeDishModal, updateDish, dish, openDeleteOrderModal, closeDeleteOrderModal, isGenericModalActive, isDeleteOrderModalOpen };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
