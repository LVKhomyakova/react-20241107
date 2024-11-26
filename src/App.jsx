import { Layout } from "./components/layout/Layout.jsx";
import { Content } from "./components/layout/content/Content.jsx";
import { AuthContextProvider } from "./contexts/auth-context/auth-context.jsx";
import { ThemeContextProvide } from "./contexts/theme-context/theme-context.jsx";

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvide>
        <Layout>
          <Content/>
        </Layout>
      </ThemeContextProvide>
    </AuthContextProvider>
  );
}