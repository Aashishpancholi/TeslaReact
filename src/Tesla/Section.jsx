// import React from "react";

function Section(props) {
  return (
    <section
      style={{ backgroundImage: "url(teslaImages/" + props.background + ")" }}
    >
      <div className="modalName">
        <h1>{props.name}</h1>
        <p>{props.tagLine}</p>
      </div>
      <div className="cta">
        <div className="buttons">
          <a className="left" href="">
            {props.leftBtn}
          </a>

          {props.rightBtn && (
            <a className="right" href="">
              {props.rightBtn}
            </a>
          )}
        </div>
        {props.arrow && (
          <img src="teslaImages/down-arrow.svg" alt="down arrow" />
        )}
      </div>
    </section>
  );
}

export default Section;
