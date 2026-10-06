import { Swords, Crown, Compass, Gem, type LucideIcon } from "lucide-react";
export const navLinks = [
  { label: "Home", href: "#home" }, { label: "Story", href: "#story" },
  { label: "Characters", href: "#characters" }, { label: "Features", href: "#features" },
];
export const characters = [
  { name: "The Hero", text: "A fearless warrior destined to change the fate of the kingdom.", image: "/images/character-hero.jpg", glow: "#f08a24" },
  { name: "The Sorceress", text: "Keeper of ancient magic and secrets.", image: "/images/character-sorceress.jpg", glow: "#5fd3e6" },
  { name: "The Dragon", text: "An ancient creature whose power could destroy or save the world.", image: "/images/character-dragon.jpg", glow: "#b3122a" },
  { name: "The Guardian", text: "A mysterious warrior protecting an ancient secret.", image: "/images/character-guardian.jpg", glow: "#e8b04a" },
];
export const features: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Cinematic Adventure", text: "A story built on an epic cinematic scale.", icon: Compass },
  { title: "Powerful Battles", text: "Legendary warriors collide in spectacular battles.", icon: Swords },
  { title: "Mysterious World", text: "Discover forgotten kingdoms, ancient magic and dangerous creatures.", icon: Crown },
  { title: "Premium Experience", text: "Designed for a smooth and immersive viewing experience.", icon: Gem },
];
