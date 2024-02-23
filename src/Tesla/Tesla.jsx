// import React from "react";
import Header from "./Header";
import Section from "./Section";
import "./Section.css";
import "./Header.css";

function Tesla() {
  return (
    <>
      <Header />
      <Section
        name="Modal 3"
        tagLine="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background="model-3.jpg"
        arrow={true}
      />
      <Section
        name="Modal Y"
        tagLine="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background="model-y.jpg"
      />
      <Section
        name="Modal S"
        tagLine="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background="model-s.jpg"
      />
      <Section
        name="Modal X"
        tagLine="Order Online for touchless delivery"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background="model-x.jpg"
      />
      <Section
        name="Solar Panel"
        tagLine="Lower cost solar panels in india"
        leftBtn="Order Now"
        rightBtn="Learn More"
        background="solar-panel.jpg"
      />
      <Section
        name="Solar Roof"
        tagLine="Produce clean energy from your roof"
        leftBtn="Order Now"
        rightBtn="Existing Inventory"
        background="solar-roof.jpg"
      />
      <Section
        name="Accessories"
        leftBtn="Order Now"
        background="accessories.jpg"
        arrow={true}
      />
    </>
  );
}

export default Tesla;
