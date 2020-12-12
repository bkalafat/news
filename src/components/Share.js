import React from "react"
import * as Helper from '../utils/helper'
import Link from 'next/link'
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
      <div className="share">
        <Link href="https://news.google.com/publications/CAAqBwgKMJy7mgswtsWyAw?hl=tr&gl=TR&ceid=TR%3Atr" >
          <div className="google-news">
            <span className="google-news-subscribe" >Abone Ol</span>
            <a className="google-news-button" rel="noopener noreferrer nofollow"
              target="_blank"><img src="/google-news.png" alt="image" /></a>
          </div>
        </Link>
        <FacebookShareButton
          url={Helper.getUrl(props.news)}
          quote={props.news.caption}
          imageurl={props.news.imgPath}
          media={props.news.imgPath}
        >
          <FacebookIcon size="2.5rem" />
        </FacebookShareButton>
        <TwitterShareButton
          imageurl={props.news.imgPath}
          url={Helper.getUrl(props.news)}
          title={props.news.caption}
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
