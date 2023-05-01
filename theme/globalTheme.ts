import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

type GlobalStylesProps = {
  colorMode: "light" | "dark";
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
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
          transition: "background-color 0ms linear, color 200ms linear",
        },
        a: {},
        main: { padding: "20px" },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          backgroundColor: "accentColor.100",
        },
      },
    },
    colors: {
      accentColor: {
        100: "rgba(144, 144, 194, 0.59)",
      },
    },
  },
  {
    config,
  }
);

export default theme;
