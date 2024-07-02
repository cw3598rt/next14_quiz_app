import { token } from "@/styled-system/tokens";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  conditions: {
    something: "&:is([data-something])",
  },

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        bar1: {
          "0%": { backgroundColor: "red" },
          "100%": { backgroundColor: "yellow" },
        },
        bar2: {
          "0%": { backgroundColor: "yellow" },
          "100%": { backgroundColor: "red" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
  syntax: "template-literal",
});
