import styles from "./style";

import { Navbar } from "./components";

import {
  Start,
  About,
  AboutKostrjanc,
  Help,
  Impressum,
  Contact,
  AgbLegal,
  Formular,
  Drawing,
  Error
} from "./pages";

import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";

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
          <Route path="/stojekostrjanc" element={<AboutKostrjanc />} />
          {/* <Route path="/business" element={<Business />} /> */}
          <Route path="/pomoc" element={<Help />} />

          <Route path="/pomoc/formular" element={<Formular />} />

          <Route path="/impresum" element={<Impressum />} />
          <Route path="/impresum/kontakt" element={<Contact />} />
          <Route path="/impresum/skitdatow" element={<AgbLegal />} />

          <Route path="/wobraz" element={<Drawing />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
