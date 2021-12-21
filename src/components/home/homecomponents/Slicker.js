import React from 'react'
// import "../assets/css/plugins/slick-theme.css";
// import "../assets/css/plugins/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Slicker() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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

                        <Link to="/category" className="btn stretched-link borders" >Shop Now<i className="lni lni-arrow-right ml-2"></i></Link>
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

                        <Link to="/category" className="btn stretched-link borders">Shop Now<i className="lni lni-arrow-right ml-2"></i></Link>
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

                            <Link to="/category" className="btn stretched-link borders">Shop Now<i className="lni lni-arrow-right ml-2"></i></Link>
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

const CarosalWrapper = styled(Slider)`
`

const SliderWrapper = styled.div`
  background-size:cover !important;
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
    height:100vh;
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

`
