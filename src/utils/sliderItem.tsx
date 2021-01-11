import { CSSProperties } from "react"
import Pagination from "react-bootstrap/Pagination"

export interface IArrowProps {
  className?: string,
  style?: CSSProperties,
  onClick?: any,
  direction: string
}

export const Arrow = (props: IArrowProps) => {
  const { className, style, onClick, direction } = props
  return (
    <img
      className={className}
      style={{ ...style }}
      alt={`${direction} arrow`}
      src={`/${direction}Arrow.png`}
      onClick={onClick}
    />
  )
}

export const Dots = () => {
  return dots => {
    return (
      <Pagination className="centerFlex" size="sm">
        {dots}
      </Pagination>
    )
  }
}

export const Paging = (index: number, currentSlide: number) => {
  return (
    <ul style={{ listStyle: "none" }} >
      <Pagination.Item key={index} active={index === currentSlide}>
        {index + 1}
      </Pagination.Item>
    </ul>
  )
}
