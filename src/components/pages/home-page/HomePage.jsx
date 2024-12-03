import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RestaurantsNav } from "../../restaurant/restaurants-nav/RestaurantsNav.jsx";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import { selectRestaurantsIds } from "../../../redux/entities/restaurants/restaurants-slice.js";

export const HomePage = () => {
  const navigate = useNavigate();
  const restaurantIds = useSelector(selectRestaurantsIds);

  useEffect(() => {
    if (restaurantIds && restaurantIds.length) {
      navigate(`/restaurant/${restaurantIds[0]}`, { replace: true });
    }
  }, [navigate, restaurantIds]);

  return (
    <main>
      <ContainerWrapper>
        <RestaurantsNav/>
      </ContainerWrapper>
      <Outlet/>
    </main>
  );
}