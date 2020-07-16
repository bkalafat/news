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
  if (props.news && props.news.url) {
    const url = props.news.url.includes("/")
      ? props.news.url
      : "detay/" + props.news.url
    return (
      <div>
        <FacebookShareButton
          url={"https://haberibul.com/" + url}
          quote={props.news.caption}
          imageurl={props.news.imgPath}
          hashtag={"#" + props.news.caption}
          media={props.news.imgPath}
        >
          <FacebookIcon size="2.5rem" />
        </FacebookShareButton>
        <TwitterShareButton
          imageurl={props.news.imgPath}
          url={"https://haberibul.com/" + url}
          title={props.news.caption}
          media={props.news.imgPath}
        >
          <TwitterIcon size="2.5rem" />
        </TwitterShareButton>
        <WhatsappShareButton
          imageurl={props.news.imgPath}
          url={"https://haberibul.com/" + url}
          title={props.news.caption}
          media={props.news.imgPath}
        >
          <WhatsappIcon size="2.5rem" />
        </WhatsappShareButton>
        <TelegramShareButton
          imageurl={props.news.imgPath}
          url={"https://haberibul.com/" + url}
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
