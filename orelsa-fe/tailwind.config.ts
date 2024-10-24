import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/Shop/pageImage.svg')",
        contact: "url('/Contact/Rectangle.svg')",
      },
    },
    backgroundImage: {
      dot: "url('/Shop/dot.svg')",
    },
  },
  plugins: [nextui()],
};
export default config;
