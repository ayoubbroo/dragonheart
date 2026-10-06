import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WatchSection from "./sections/WatchSection";
import StorySection from "./sections/StorySection";
import CharactersSection from "./sections/CharactersSection";
import FeaturesSection from "./sections/FeaturesSection";
import TrailerSection from "./sections/TrailerSection";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";
export default function App() {
  return (<><Navbar /><main><Hero /><WatchSection /><StorySection /><CharactersSection /><FeaturesSection /><TrailerSection /><FinalCTA /></main><Footer /></>);
}
