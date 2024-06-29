import { styled } from "../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export const Title = styled("h1", {
  base: {
    fontSize: 36,
    fontWeight: "bold",
    color: "green",
  },
});

export const Divider = styled("div", {
  base: {
    height: 1,
    width: "70vw",
    backgroundColor: "green",
  },
});

export const Subtitle = styled("h3", {
  base: {
    fontSize: 16,
    color: "green.700",
  },
});

export const Themes = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export const Theme = styled("div", {
  base: {
    width: "calc(100% /5)",
    height: 250,
    backgroundColor: "bisque",
    borderRadius: 10,
    margin: 5,
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
    transition: "all 350ms ease-in",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    textAlign: "center",
  },
});
