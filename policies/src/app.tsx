import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/Global.styled";
import { MainContainer } from "./assets/styles/MainContainer.styled";
import theme from "./assets/styles/theme";
import CreatePolicy from "./components/CreatePolicy/CreatePolicy";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <CreatePolicy />
        </MainContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
