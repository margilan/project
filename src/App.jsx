import "./App.css";
import Logo from "../src/assets/Logo.svg";

function App() {
  return (
    <>
      <div className="project-all-container">
        <div className="header-all">
          <div className="logo">
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <div className="uls">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>How it works</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="first-button">
            <a href="#">
              <button>Login</button>
            </a>
          </div>
        </div>
        <div className="sections-all">
          <div className="texts">
            <div className="first-text">
              <h1>Manage faster and sell more with big data</h1>
            </div>
            <div className="three-text">
              <h3>Quickly integrate our solution and start processing more sales with <span>Kreed</span>.</h3>
            </div>
             <div className="buton">
              <a href="#"><button>Get Started</button></a>
            </div>
            <div className="button-three">
              <a href="#"><button>👇</button></a>
            </div>
            <div className="all-buton">
            <div className="first-item">
              <a href="#"><button>👈</button></a>
            </div>
            <div className="thre-item">
              <a href="#"><button>👉</button></a>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
