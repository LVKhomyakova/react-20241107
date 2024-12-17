import { ContainerWrapper } from "../../components/ui/container-wrapper/ContainerWrapper.jsx";
import { Container } from "../../components/ui/container/Container.jsx";
import { Text } from "../../components/ui/text/Text.jsx";

export default function RestaurantsPage() {
  return (
    <ContainerWrapper type="primary">
      <Container>
        <Text type="h3">Выберите ресторан</Text>
      </Container>
    </ContainerWrapper>
  );
}