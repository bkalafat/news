import News from "./News"

const Content = props => {
  const { newsList } = props

  if (!newsList) {
    return <div>Loading</div>
  } else {
    return <News newsList={newsList} />
  }
}

export default Content
