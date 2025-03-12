import "./App.css";
import backSrc from "./assets/imgs/background.png";
import Router from "./routes/Router";

function App() {
  return (
    <div className="h-full">
      <Router />
      <div className="fixed top-0 left-0 -z-50 flex size-full scale-120">
        <img src={backSrc} />
      </div>
    </div>
  );
}

export default App;
