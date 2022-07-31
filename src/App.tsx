import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// 外部インポートと自分からのインポートは改行して見やすくする
import theme from "./theme/theme";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};
