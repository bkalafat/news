import React from "react"
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share"

const Share = props => {
  if (props.news) {
    return (
      <div>
        <FacebookShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          quote={props.news.caption}
          hashtag={"#" + props.news.categories}
        >
          <FacebookIcon size="2.5rem" logoFillColor="white" />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          title={props.news.caption}
        >
          <TwitterIcon size="2.5rem" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          title={props.news.caption}
        >
          <WhatsappIcon size="2.5rem" />
        </WhatsappShareButton>
        <TelegramShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          title={props.news.caption}
        >
          <TelegramIcon size="2.5rem" />
        </TelegramShareButton>
      </div>
    )
  } else return <div />
}

export default Share
