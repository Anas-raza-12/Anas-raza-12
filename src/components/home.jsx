import React from "react";

const home = () => {
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage: "url(/src/assets/image/banner_img.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "top",
        backgroundPositionX: "center",
      }}
      className="container Home"
    >
      <div style={{ backgroundColor: "transparent" }}>
        <div className=" first-div">
          <div className="d-flex justify-content-between">
            {" "}
            <h6>
              Hello, I’m David Petrix, UX/UI designer
              <br /> and front-end developer based in san
              <br /> francisco.
            </h6>
            <div className="d-flex third-div ">
              <div className="d-flex justify-content-center align-items-center rounded-circle border">
                <i className="fa-solid fa-play"></i>
              </div>
              <h4>
                Work <br />
                Process
              </h4>
            </div>
          </div>

          <h1>
            I Love <span> Word</span> press
          </h1>
          <div className="d-flex justify-content-between align-items-center my-5 forth-dev">
            <div className="icon d-flex">
              <div
                style={{ border: "1px solid black " }}
                className="d-flex justify-content-center align-items-center py-4 px-3 rounded-pill  "
              >
                <i class="fa-solid fa-arrow-down"></i>
              </div>
              <h4 className="fw-normal fs-5">
                Scroll
                <br /> Down
              </h4>
            </div>
            <h5>
              Feel Free to send me a message if you
              <br /> want to enhance your recruitment.
              <br />
              Facebook. Twitter. Linkedin. Dribbble.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
