import logo from "./logo.svg";

import Portfolio2 from "./components/Portfolio2";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({ duration: 1800, offset: 0 });
  return <Portfolio2 />;
}

export default App;
