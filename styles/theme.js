export const theme = {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#222",
    primary: "#222",
    secondary: "#fff",
    background: "#fff",
  },
  fonts: {
    body: '"Nunito", sans-serif',
    heading: '"Nunito", sans-serif',
  },
  space: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
  fontSize: [12, 14, 16, 20, 24, 32, 48, 64],
  text: {
    jumbotron: {
      heading: {
        color: "secondary",
        fontSize: 6,
      },
      subheading: {
        color: "secondary",
        fontSize: 3,
      },
    },
    favorites: {
      heading: {
        color: "priamry",
        fontSize: 5,
      },
    },
  },
  layout: {
    container: {
      width: "1200px",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "secondary",
    },
    h1: {
      fontWeight: 700,
      fontSize: 6,
    },
    p: {
      fontWeight: 300,
    },
    a: {
      color: "primary",
      fontSize: 4,
    },
    hr: {
      margin: "0px",
      color: "transparent",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "primary",
    },
  },
};
