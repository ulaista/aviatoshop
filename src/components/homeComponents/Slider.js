import React, { useEffect } from "react";
import slider1 from "../../images/slider/slider-1.jpg";
import slider2 from "../../images/slider/slider-2.jpg";
import slider3 from "../../images/slider/slider-3.jpg";

import "../../plugins/slick/slick.css";
import "../../plugins/animate/animate.css";
import "../../plugins/slick/slick-theme.css";
import "../../scss/templates/_slider.scss";

import $ from "../../plugins/jquery/dist/jquery.js";
import "../../plugins/slick/slick.min.js";

function Slider() {
  useEffect(() => {
    const slider = $(".hero-slider").slick({
      centerMode: true, // Center the slides
      centerPadding: "0",
      autoplay: true,
      infinite: true,
      arrows: true,
      prevArrow:
        "<button type='button' class='heroSliderArrow prevArrow tf-ion-chevron-left'></button>",
      nextArrow:
        "<button type='button' class='heroSliderArrow nextArrow tf-ion-chevron-right'></button>",
      dots: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: 300, // Animation speed
      cssEase: "linear", // Easing for the transition
      useTransform: true, // Use CSS transform
      adaptiveHeight: true, // Adjust slide height based on content
    });

    function animateSlide() {
      $(".hero-slider .slider-item")
        .find("p, h1, a")
        .removeClass("animated fadeInUp")
        .css("opacity", 0);

      setTimeout(() => {
        console.log($("[tabindex='0']"));
        // console.log($("[tabindex='0']").find("p, h1, a"));
        $("[tabindex='0']").find("p, h1, a").addClass("animated fadeInUp");
      }, 10);
    }

    slider.on("afterChange", (event, slick, currentSlide, nextSlide) => {
      // $(
      //   ".hero-slider .slider-item p, .hero-slider .slider-item h1, .hero-slider .slider-item a"
      // )
      animateSlide();
    });

    animateSlide();
  });

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div className="hero-slider">
        <div
          className="slider-item th-fullpage hero-area"
          srs={slider1}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center">
                <p>KNIT LOFT</p>
                <h1>
                СВЯЗАНО <br />   С ЛЮБОВЬЮ
                </h1>
                <a className="btn" href="shop.html">
                  МАГАЗИН
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          srs={slider2}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-left">
                <p>KNIT LOFT</p>
                <h1>
                  НОВАЯ КОЛЛЕКЦИЯ <br /> 01.09.2023
                </h1>
                <a className="btn" href="shop.html">
                МАГАЗИН
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          srs={slider3}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-right">
                <p>KNIT LOFT</p>
                <h1>
                Медленная красота в наших изделиях,  <br /> созданных мастерами вручную.
                </h1>
                <a className="btn" href="shop.html">
                  МАГАЗИН
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
