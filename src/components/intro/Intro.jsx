import React from "react";
import "./intro.css";
import Me from '../../img/me.png'

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is </h2>
          <h1 className="i-name">Mojtaba Sedighi</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front-end</div>
              <div className="i-title-item">React JS</div>
              <div className="i-title-item">Back-end</div>
              <div className="i-title-item">C#, .NET</div>
            </div>
          </div>
          <p className="i-desc">
            Im developing front end of web application using react js with industrial view.<br />
            I love learning new technologies and improving my knowledge,
            also I`m studying Software engineering :)
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          className="i-scroll">
          <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="black">
            <path d="M175 481 c-81 -37 -105 -90 -105 -234 0 -87 3 -110 23 -147 66 -132
248 -132 315 0 19 38 22 60 22 150 -1 146 -26 198 -113 235 -48 20 -93 19
-142 -4z m163 -28 c47 -35 65 -69 70 -133 l4 -60 -161 0 -161 0 0 44 c0 77 33
134 95 162 40 19 119 12 153 -13z m70 -273 c-7 -101 -63 -155 -158 -155 -95 0
-151 54 -158 155 l-4 60 162 0 162 0 -4 -60z"/>
            <path d="M220 425 c-25 -26 -21 -47 5 -25 13 11 15 7 15 -30 0 -37 -2 -41 -15
-30 -28 23 -29 0 -2 -28 l27 -27 27 27 c27 28 26 51 -2 28 -13 -11 -15 -7 -15
30 0 37 2 41 15 30 26 -22 30 -1 5 25 -13 14 -26 25 -30 25 -4 0 -17 -11 -30
-25z"/>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Mojtaba Sedighi Avatar" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;
