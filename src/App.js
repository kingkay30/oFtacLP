// import { useEffect } from "react";
import { Navbar, Hero, Features, About, CTA, Foot } from "./components";
import Goals from "./components/Goals";
import styles from "./style";
// import axios from "axios";

// const userRequest = axios.create({
//   baseURL: "http://192.168.0.151:5000/api/v1/oftacComments",
// });

function App() {
  // useEffect(() => {
  //   userRequest.patch("/oftac");
  // }, []);

  return (
    <div className="bg-primary w-full ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
          <About />
          <Goals />
          <CTA />
          <Foot />
        </div>
      </div>
    </div>
  );
}

export default App;
