import { CSSProperties } from "react"
import Pagination from "react-bootstrap/Pagination"

export const Arrow = ({ className, style, onClick, direction }: {
  className?: string,
  style?: CSSProperties,
  onClick?: any,
  direction: string
}) => {
  return (
    <button
      className={className}
      style={{ 
        ...style, 
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer'
      }}
      onClick={onClick}
      aria-label={`${direction} arrow`}
    >
      <img
        alt={`${direction} arrow`}
        src={`/${direction}Arrow.png`}
        style={{ display: 'block' }}
      />
    </button>
  )
}

export const Dots = () => {
  return (dots: any) => {
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
