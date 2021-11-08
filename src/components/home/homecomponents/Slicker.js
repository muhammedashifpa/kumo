import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

function Slicker() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
      };
    return (
        <Slider {...settings} className="home-slider">
          {/* <!-- Slide --> */}
            <SliderWrapper DataBackGround="assets/img/banner-2.png" >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="home-slider-container">

                      {/* <!-- Slide Title --> */}
                      <div className="home-slider-desc">
                        <div className="home-slider-title mb-4">
                          <h5 className="theme-cl fs-sm ft-ragular mb-0">Winter Collection</h5>
                          <h1 className="mb-1 ft-bold lg-heading">New Winter<br/>Collections 2021</h1>
                          <span className="trending">There's nothing like trend</span>
                        </div>

                        <a href="#" className="btn stretched-link borders" >Shop Now<i className="lni lni-arrow-right ml-2"></i></a>
                      </div>
                      {/* <!-- Slide Title / End --> */}

                    </div>
                  </div>
                </div>
              </div>
            </SliderWrapper>


          {/* <!-- Slide --> */}
            <SliderWrapper DataBackGround="assets/img/banner-5.png" className="item">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="home-slider-container">

                      {/* <!-- Slide Title --> */}
                      <div className="home-slider-desc">
                        <div className="home-slider-title mb-4">
                          <h5 className="theme-cl fs-sm ft-ragular mb-0">Winter Collection</h5>
                          <h1 className="mb-1 ft-bold lg-heading">New Winter<br/>Collections 2021</h1>
                          <span className="trending">There's nothing like trend</span>
                        </div>

                        <a href="#" className="btn stretched-link borders">Shop Now<i className="lni lni-arrow-right ml-2"></i></a>
                      </div>
                      {/* <!-- Slide Title / End --> */}

                    </div>
                  </div>
                </div>
              </div>
            </SliderWrapper>

              {/* <!-- Slide --> */}
                <SliderWrapper DataBackGround="assets/img/banner-3.png" className="item ">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="home-slider-container">

                          {/* <!-- Slide Title --> */}
                          <div className="home-slider-desc">
                            <div className="home-slider-title mb-4">
                              <h5 className="theme-cl fs-sm ft-ragular mb-0">Winter Collection</h5>
                              <h1 className="mb-1 ft-bold lg-heading">New Winter<br/>Collections 2021</h1>
                              <span className="trending">There's nothing like trend</span>
                            </div>

                            <a href="#" className="btn stretched-link borders">Shop Now<i className="lni lni-arrow-right ml-2"></i></a>
                          </div>
                          {/* <!-- Slide Title / End --> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </SliderWrapper>

        </Slider>
    );
}

export default Slicker

const SliderWrapper = styled.div`
  background-size:cover;
  background-position:center;
  background-repeate:no-repeat;
  min-height: 520px;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-image:${props=>`url('${props.DataBackGround}')`};
  @media (min-width:1200px){
    height:85vh;
  }
  .slick-list{
    position:relative !important;
  }
  .slick-arrow{
    display:none !important;
  }
  @media (max-width: 767px){
    min-height: 350px;
  }
  .slick-next{
    &:before{
      content: "\e628" !important !important;
    }
  }
  .slick-prev{
    &:before{
      content: "\e628" !important;
    }
  }
`
