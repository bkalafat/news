import { NewsType } from "../types/NewsType"
import News from "./News"

const Content = props => {
  const newsList: NewsType[] = props.newsList

  if (!newsList) {
    return <div>Loading</div>
  } else {
    return <News newsList={newsList} />
  }
}

export default Content
