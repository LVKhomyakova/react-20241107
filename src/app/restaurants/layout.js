import { ContainerWrapper } from "../../components/ui/container-wrapper/ContainerWrapper.jsx";
import { RestaurantsNav } from "../../components/restaurant/restaurants-nav/RestaurantsNav.jsx";

export default function RestaurantLayout({ children }) {
  return (
    <main>
      <ContainerWrapper>
        <RestaurantsNav/>
      </ContainerWrapper>
      { children }
    </main>
  );
}