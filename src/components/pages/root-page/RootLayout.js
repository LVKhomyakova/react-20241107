'use client';
import { Provider } from "react-redux";
import { store } from "../../../redux/store.js";
import { AuthContextProvider } from "../../../contexts/auth-context/auth-context-provider.jsx";
import { ThemeContextProvider } from "../../../contexts/theme-context/theme-context-provider.jsx";
import { Layout } from "../../layout/Layout.jsx";
import '../../../app.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
        <title>React + next</title>
      </head>
      <body>
        <div id="root">
          <Provider store={store}>
            <AuthContextProvider>
              <ThemeContextProvider>
                <Layout>{ children }</Layout>
              </ThemeContextProvider>
            </AuthContextProvider>
          </Provider>
        </div>
      </body>
    </html>
  );
}