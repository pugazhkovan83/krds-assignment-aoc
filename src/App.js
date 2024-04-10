import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.scss";
import FeatureItem from "./FeatureItem";
import MainLogoMob from "./img/main-logo-mob.png";

const App = () => {
  const [features, setFeatures] = useState([]);
  const [mainLogo, setMainLogo] = useState("");

  useEffect(() => {
    fetch("https://krds-assignment.github.io/aoc/api-assets/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMainLogo(data.logo);
        setFeatures(data.features);
      });
  }, []);

  // Background colors for each feature
  const backgroundColors = [
    "#41CA6E",
    "#FAB153",
    "#7277D5",
    "#F87D51",
    "#ED5466",
    "#4EC2E7",
  ];

  // Check if the screen size is small (mobile or tablet)
  const isSmallScreen = window.innerWidth <= 768;

  // If it's a small screen, display the carousel view
  if (isSmallScreen) {
    return (
      <div className="container">
        <img
          src={MainLogoMob}
          alt="Main Logo Mob"
          width={100}
          style={{ margin: "20px" }}
        />
        <Carousel showArrows={true}>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              desc={feature.desc}
              logo={feature.logo}
              image={feature.image}
              backgroundColor={
                backgroundColors[index % backgroundColors.length]
              }
            />
          ))}
        </Carousel>
      </div>
    );
  }

  // Otherwise, display the row and column view
  return (
    <div className="container">
      <div className="mainLogo">
        <img src={mainLogo} alt="Logo" height={30} />
      </div>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          desc={feature.desc}
          logo={feature.logo}
          image={feature.image}
          backgroundColor={backgroundColors[index % backgroundColors.length]}
        />
      ))}
    </div>
  );
};

export default App;
