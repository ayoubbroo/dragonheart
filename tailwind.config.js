/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { void: "#06070b", navy: "#0b1220", crimson: "#b3122a", ember: "#f08a24", gold: "#e8b04a", arcane: "#5fd3e6" },
    fontFamily: { display: ["Cinzel", "serif"], body: ["Inter", "system-ui", "sans-serif"] },
    keyframes: {
      rise: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } },
      float: { "0%": { transform: "translateY(0)", opacity: "0" }, "15%": { opacity: ".8" }, "100%": { transform: "translateY(-110vh)", opacity: "0" } },
      drift: { from: { transform: "translateX(-4%)" }, to: { transform: "translateX(4%)" } },
    },
    animation: { rise: "rise .9s cubic-bezier(.2,.7,.2,1) both", drift: "drift 18s ease-in-out infinite alternate" },
  } },
  plugins: [],
};
