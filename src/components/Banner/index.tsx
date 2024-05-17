import React from 'react'
import "./style.scss"
import banner from '../../assets/banner.png'
import message_slider from '../../assets/message_slider.png'
import plan from '../../assets/plan-img.png'
import clound from '../../assets/clouds.png'
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material'
import classNames from "classnames";


const Banner = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(767));
  const isTabnet = useMediaQuery(theme.breakpoints.down(1024));

  return (
    <div className={classNames("banner", isMobile ? "banner-mobile" : "", isTabnet ? "banner-tabnet" : "")}>
      <div className='banner-left'>
        <div className='triangle-top-right'></div>
        <div className='small-box small-box-left-top'></div>
        <div className='small-box small-box-right-top'></div>
        <div className='small-box small-box-right-bottom'></div>
        <div className={classNames("slogan-container", isMobile ? "slogan-container-mobile" : "", isTabnet ? "slogan-container-tabnet" : "")}>
          <div>
            <img src={plan} className="slider-plane-img" />
          </div>
          <h1> Chào mừng</h1>
          <h1> đến với môi trường </h1>
          <h1>V<span>learning</span> </h1>
          <button className='btn-start-now'> Bắt đầu nào</button>
        </div>
      </div>
      <div className='banner-right'>
        <div>
          <img src={banner} className='img-banner' />
          <img src={message_slider} className='slider-sub-img slider-mes-img' />
          <img src={clound} className='slider-sub-img slider-clound-1-img' />
          <img src={clound} className='slider-sub-img slider-clound-2-img' />
          <img src={clound} className='slider-sub-img slider-clound-3-img' />
        </div>
      </div>
    </div>
  )
}

export default Banner