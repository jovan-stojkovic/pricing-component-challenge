import "./Styles.scss";

const App = () => {
  return (
    <main>
      <div className="app">
        <h1>Our Pricing</h1>

        <div className="toggle-cont">
          <p>Annually</p>
          <input type="checkbox" />
          <p>Monthly</p>
        </div>
      </div>

      <div className="info-container">
        <div className="side">
          <h2>Basic</h2>
          <p className="price">
            <span>$</span>19.99
          </p>
          <p>500 GB Storage</p>
          <p>2 Users Allowed</p>
          <p>Send up to 3 GB</p>
          <button className="side">LEARN MORE</button>
        </div>
        <div className="center">
          <h2>Professional</h2>
          <p className="price">
            <span>$</span>24.99
          </p>
          <p>1 TB Storage</p>
          <p>5 Users Allowed</p>
          <p>Send up to 10 GB</p>
          <button className="center">LEARN MORE</button>
        </div>
        <div className="side">
          <h2>Master</h2>
          <p className="price">
            <span>$</span>39.99
          </p>
          <p>2 TB Storage</p>
          <p>10 Users Allowed</p>
          <p>Send up to 20 GB</p>
          <button className="side">LEARN MORE</button>
        </div>
      </div>
    </main>
  );
};

export default App;
