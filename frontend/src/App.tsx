import "./App.css";
import { AnimatedGridPattern } from "./components/magicui/animated-grid-pattern";
import Router from "./routes/Router";

function App() {
  return (
    <div className="h-full">
      <Router />
      <div className="fixed top-0 left-0 -z-50 flex size-full opacity-40 dark:opacity-80 blur-sm skew-y-12 dark:text-white/30">
        <AnimatedGridPattern duration={2} />
      </div>
    </div>
  );
}

export default App;
