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
          imageURL={props.news.imgPath}
          hashtag={"#" + props.news.caption}
          media={props.news.imgPath}
        >
          <FacebookIcon size="2.5rem" logoFillColor="white" />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          title={props.news.caption}
          media={props.news.imgPath}
        >
          <TwitterIcon size="2.5rem" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          title={props.news.caption}
          media={props.news.imgPath}
        >
          <WhatsappIcon size="2.5rem" />
        </WhatsappShareButton>
        <TelegramShareButton
          url={"https://haberibul.web.app/detay/" + props.news.id}
          title={props.news.caption}
          media={props.news.imgPath}
        >
          <TelegramIcon size="2.5rem" />
        </TelegramShareButton>
      </div>
    )
  } else return <div />
}

export default Share
