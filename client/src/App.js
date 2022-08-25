import { React } from "react";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Layouts from "./components/common/layouts/Layouts";
import Homepage from "./components/homepage/Homepage";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import TermsConditions from "./components/terms-condtions/TermsConditions";
// import Footer from './components/footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Layouts>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;
