import { extendTheme } from "@chakra-ui/react";

// https://chakra-ui.com/docs/styled-system/theme
const theme = extendTheme({
  style: {
    global: {
      body: {
        backgroudColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});
export default theme;
