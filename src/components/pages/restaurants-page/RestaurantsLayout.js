import { ContainerWrapper } from "../../ui/container-wrapper/ContainerWrapper.jsx";
import { RestaurantsNav } from "../../restaurant/restaurants-nav/RestaurantsNav.jsx";

export default function RestaurantsLayout({children}) {
  return (
    <main>
      <ContainerWrapper>
        <RestaurantsNav/>
      </ContainerWrapper>
      { children }
    </main>
  );
}