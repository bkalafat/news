import { NewsType } from "../types/NewsType"
import News from "./News"

export interface IContentProps {
  newsList: NewsType[]
}

const Content = (props: IContentProps) => {
  const newsList = props.newsList

  if (!newsList) {
    return <div>Loading</div>
  } else {
    return <News newsList={newsList} />
  }
}

export default Content
