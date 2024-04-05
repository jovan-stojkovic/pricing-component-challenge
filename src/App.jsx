import { useState } from "react";
import "./Styles.scss";

const App = () => {
  const [basicPrice, setBasicPrice] = useState(199.99);
  const [proPrice, setProPrice] = useState(249.99);
  const [masterPrice, setMasterPrice] = useState(399.99);

  const handleCheck = () => {
    setBasicPrice(basicPrice === 19.99 ? 199.99 : 19.99);
    setProPrice(proPrice === 24.99 ? 249.99 : 24.99);
    setMasterPrice(masterPrice === 39.99 ? 399.99 : 39.99);
  };

  return (
    <main>
      <div className="background-cont-bottom"></div>
      <div className="background-cont-top"></div>
      <div className="app">
        <h1>Our Pricing</h1>

        <div className="toggle-cont">
          <p>Annually</p>

          <div className="checkbox-wrapper-7">
            <input
              className="tgl tgl-ios"
              id="cb2-7"
              type="checkbox"
              onClick={handleCheck}
            />
            <label className="tgl-btn" htmlFor="cb2-7" />
          </div>

          <p>Monthly</p>
        </div>

        <div className="info-container">
          <div className="side">
            <h2>Basic</h2>
            <h3 className="price">
              <span>$</span>
              {basicPrice}
            </h3>
            <div className="p-cont">
              <p>500 GB Storage</p>
            </div>
            <div className="p-cont">
              <p>2 Users Allowed</p>
            </div>
            <div className="p-cont last">
              <p>Send up to 3 GB</p>
            </div>
            <button className="side-btn">LEARN MORE</button>
          </div>

          <div className="side center">
            <h2>Professional</h2>
            <h3 className="price">
              <span>$</span>
              {proPrice}
            </h3>
            <div className="p-cont">
              <p>1 TB Storage</p>
            </div>
            <div className="p-cont">
              <p>5 Users Allowed</p>
            </div>
            <div className="p-cont lst">
              <p>Send up to 10 GB</p>
            </div>
            <button className="center-btn">LEARN MORE</button>
          </div>

          <div className="side">
            <h2>Master</h2>
            <h3 className="price">
              <span>$</span>
              {masterPrice}
            </h3>
            <div className="p-cont">
              <p>2 TB Storage</p>
            </div>
            <div className="p-cont">
              <p>10 Users Allowed</p>
            </div>
            <div className="p-cont last">
              <p>Send up to 20 GB</p>
            </div>
            <button className="side-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
