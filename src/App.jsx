import styles from "./style";

import { Navbar } from "./components";

import {
  Start,
  Help,
  Business,
  About,
  Impressum,
  Contact,
  AgbLegal,
  Formular,
} from "./pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/stomysmy" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/pomoc" element={<Help />} />

          <Route path="/pomoc/formular" element={<Formular />} />

          <Route path="/impresum" element={<Impressum />} />
          <Route path="/impresum/kontakt" element={<Contact />} />
          <Route path="/impresum/skitdatow" element={<AgbLegal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
