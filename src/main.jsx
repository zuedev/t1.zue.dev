import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import t1Logo from "/t1_logo_tight.png";

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      <div className="p-8 space-y-8 max-w-2xl text-justify font-mono">
        <img src={t1Logo} alt="Termina One Logo" className="h-10" />
        <p className="font-bold text-2xl">
          Termina One creates, builds, and implements cutting-edge cloud
          infrastructure solutions.
        </p>
        <p className="text-lg">
          Our software and services deliver lightning-fast hosting to millions
          worldwide, ensuring platforms rely on Termina One for unmatched
          performance, reliability, and scalability.
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
