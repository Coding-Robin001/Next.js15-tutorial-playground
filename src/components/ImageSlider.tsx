"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv6U5LHW0pvmRpiONl-ywM14Avruw-HyxemXV0CpuIHDO1G8xzL-QUj691W9_bV0pHfgHzTPfOphhWDkkio2mYX-b_H3b64e8OL7TkJg" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv6U5LHW0pvmRpiONl-ywM14Avruw-HyxemXV0CpuIHDO1G8xzL-QUj691W9_bV0pHfgHzTPfOphhWDkkio2mYX-b_H3b64e8OL7TkJg" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv6U5LHW0pvmRpiONl-ywM14Avruw-HyxemXV0CpuIHDO1G8xzL-QUj691W9_bV0pHfgHzTPfOphhWDkkio2mYX-b_H3b64e8OL7TkJg" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv6U5LHW0pvmRpiONl-ywM14Avruw-HyxemXV0CpuIHDO1G8xzL-QUj691W9_bV0pHfgHzTPfOphhWDkkio2mYX-b_H3b64e8OL7TkJg" />
        </div>
      </Slider>
    </div>
  );
}