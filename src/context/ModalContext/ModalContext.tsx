import React, { createContext, useState, useContext } from "react";
import { Dish } from "../../types/types";
const defaultDish = {
  name: "Pad Ki Mao",
  pictureUrl: "/src/assets/images/dishes/padKiMao.png",
  description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
  price: 88,
  signatureDish: true,
  foodIcon: "/src/assets/images/spicyIcon.svg",
  mealType: "dinner",
  keyId: "9",
};
// Create a context with a default empty object
const ModalContext = createContext({
  isModalActive: false,
  setIsModalActive: (active: boolean) => {},
  updateDish: (dish: Dish) => {},
  dish: defaultDish,
});

export const useModalContext = () => useContext(ModalContext);

// This component will be used to wrap your application
export const ModalProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [dish, setDish] = useState<Dish>(defaultDish);
  const updateDish = (dish: Dish) => {
    setDish(dish);
  }; // The value that will be supplied to any descendants of this provider
  const value = { isModalActive, setIsModalActive, updateDish, dish };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
