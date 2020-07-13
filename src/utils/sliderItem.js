import Pagination from "react-bootstrap/Pagination"

export const Arrow = props => {
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

export function Dots() {
  return dots => {
    return (
      <Pagination className="centerFlex" size="sm">
        {dots}
      </Pagination>
    )
  }
}

export const Paging = (index, currentSlide) => {
  return (
    <Pagination.Item key={index} active={index === currentSlide}>
      {index + 1}
    </Pagination.Item>
  )
}
