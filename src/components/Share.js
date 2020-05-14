import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share"

const Share = props => {
  if (props.news) {
    return (
      <div>
        <FacebookShareButton
          url={"https://haberibul.web.app/"}
          quote={props.news.caption}
          hashtag={"#" + props.news.categories}
        >
          <FacebookIcon size="2.5rem" logoFillColor="white" />
        </FacebookShareButton>
        <TwitterShareButton title={props.news.caption}>
          <TwitterIcon size="2.5rem" />
        </TwitterShareButton>
        <WhatsappShareButton title={props.news.caption}>
          <WhatsappIcon size="2.5rem" />
        </WhatsappShareButton>
      </div>
    )
  } else return <div />
}

export default Share
