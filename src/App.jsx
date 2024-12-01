import { Layout } from "./components/layout/Layout.jsx";
import { Content } from "./components/layout/content/Content.jsx";
import { AuthContextProvider } from "./contexts/auth-context/auth-context-provider.jsx";
import { ThemeContextProvide } from "./contexts/theme-context/theme-context-provider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvide>
          <Layout>
            <Content/>
          </Layout>
        </ThemeContextProvide>
      </AuthContextProvider>
    </Provider>
  );
}