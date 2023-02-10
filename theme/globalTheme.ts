import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

type GlobalStylesProps = {
  colorMode: "light" | "dark";
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    styles: {
      global: (props: GlobalStylesProps) => ({
        "html, body": {
          fontFamily: "Montserrat, sans-serif",
          backgroundColor:
            props.colorMode === "dark"
              ? "rgb(32, 32, 35)"
              : "rgb(244, 248, 247)",
          fontSize: "md",
          fontWeight: 500,
          color: props.colorMode === "dark" ? "white" : "black",
          lineHeight: "tall",
        },
        a: {},
        main: { padding: "20px" },
      }),
    },
    components: {},
    colors: {
      accentColor: {
        100: "rgba(144, 144, 194, 0.59)",
      },
    },
  },
  config
);

export default theme;
