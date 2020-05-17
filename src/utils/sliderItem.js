import React from "react"
import { BrowserView, MobileView } from "react-device-detect"

export const Arrow = props => {
  const { className, style, onClick, direction } = props
  return (
    <img
      className={className}
      style={{ ...style }}
      alt={`${direction} arrow`}
      src={`${process.env.PUBLIC_URL}/${direction}Arrow.png`}
      onClick={onClick}
    />
  )
}

export const Dots = dots => {
  return (
    <div>
      <ul>
        {dots.map((item, index) => {
          return <li key={index}>{item.props.children}</li>
        })}
      </ul>
    </div>
  )
}
export const Paging = (index, currentSlide) => {
  return (
    <button style={index === currentSlide ? testSettings : null}>
      {index + 1}
    </button>
  )
}

const testSettings = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  outline: "0"
}
