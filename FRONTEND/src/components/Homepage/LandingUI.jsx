import NavigationBar from "./NavigationBar";
import bgImg from "./BackGround2.jpg";
import { useState } from "react";

export default function LandingUI() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    customButton: {
      color: isHovered ? "white" : "black",
      width: "200px",
      height: "40px",
      fontSize: "18px",
      fontWeight: "bolder",
      backgroundColor: "#FCD844",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: isHovered
        ? "0 0 10px #FCD844, 0 0 20px #FCD844, 0 0 20px #FCD844 inset"
        : "0 0 5px #FCD844",
    },
    backgroundImageDiv: {
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px",
    },
    contentContainer: {
      maxWidth: "1000px",
    },
    heading: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "40px",
      marginBottom: "20px",
    },
    subheading: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "20px",
    },
    paragraph: {
      color: "white",
      fontSize: "16px",
    },
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <NavigationBar />
      <div style={styles.backgroundImageDiv}>
        <div style={styles.contentContainer}>
          <div className="row">
            <div className="col-md-6 col-sm-12" data-aos="fade-right">
              <h1 style={styles.heading}>
                QUALITY, SAFETY
                <br />
                AND PERFORMANCE
              </h1>
            </div>
            <div className="col-md-6 col-sm-12" data-aos="fade-left">
              <p style={styles.subheading}>
                Welcome to <span style={{ color: "yellow" }}>Dayul Motors</span>
              </p>
              <p style={styles.paragraph}>
                We're here to help with all your motorcycle repair and parts
                needs. Explore our products, from spare parts to accessories.
                Our easy-to-use website makes shopping a breeze. Let's make your
                next ride amazing!
              </p>
              <button
                className="custom-btn"
                style={styles.customButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
