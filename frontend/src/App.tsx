import "./App.css";
import backSrc from "./assets/imgs/background.png";
import LiquidCursor from "./components/effects/LiquidCursor";
import Router from "./routes/Router";

function App() {
  return (
    <div className="h-full">
      <LiquidCursor />
      <Router />
      <div className="fixed top-0 left-0 -z-50 flex size-full scale-120 overflow-hidden">
        <img
          src={backSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-90 dark:opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(122,209,84,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.25),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(122,209,84,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.07),transparent_28%)]" />
      </div>
    </div>
  );
}

export default App;
