import { Outlet } from "react-router-dom";
import { RestaurantsNav } from "../../restaurant/restaurants-nav/RestaurantsNav.jsx";
import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";

export const RestaurantsPage = () => {
  return (
    <main>
      <ContainerWrapper>
        <RestaurantsNav/>
      </ContainerWrapper>
      <Outlet/>
    </main>
  );
}