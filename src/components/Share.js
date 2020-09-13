import React from "react"
import * as Helper from '../utils/helper'
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
          url={Helper.getUrl(props.news)}
          quote={props.news.caption + ' ' + props.news.socialTags}
          imageurl={props.news.imgPath}
          hashtag={props.news.socialTags}
          media={props.news.imgPath}
        >
          <FacebookIcon size="2.5rem" />
        </FacebookShareButton>
        <TwitterShareButton
          imageurl={props.news.imgPath}
          url={Helper.getUrl(props.news)}
          title={props.news.caption + ' ' + props.news.socialTags}
          media={props.news.imgPath}
        >
          <TwitterIcon size="2.5rem" />
        </TwitterShareButton>
        <WhatsappShareButton
          imageurl={props.news.imgPath}
          url={Helper.getUrl(props.news)}
          title={props.news.caption}
          media={props.news.imgPath}
        >
          <WhatsappIcon size="2.5rem" />
        </WhatsappShareButton>
        <TelegramShareButton
          imageurl={props.news.imgPath}
          url={Helper.getUrl(props.news)}
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
