import React from "react"
import { SocialIcon } from "react-social-icons"
import Link from "next/link"

const size = 33
const Footer = () => {
  return (
    <article>
      <div className="center">
        <Link href="/">
          <a><img className="logo" src="/haberibul.png" alt="image" /></a>
        </Link>
      </div>
      <footer>
        <div className="centerFlex ">
          <div className="spaceAround">
            <SocialIcon
              rel="noopener noreferrer nofollow"
              url="https://www.facebook.com/haberibul"
              target="_blank"
              style={{ height: size, width: size }}
              network="facebook"
            />
          </div>
          <div className="spaceAround">
            <SocialIcon
              url="https://twitter.com/haberibulcom"
              rel="noopener noreferrer nofollow"
              target="_blank"
              style={{ height: size, width: size }}
              network="twitter"
            />
          </div>
          <div className="spaceAround">
            <SocialIcon
              url="https://www.instagram.com/haberibulcom"
              rel="noopener noreferrer nofollow"
              target="_blank"
              style={{ height: size, width: size }}
              network="instagram"
            />
          </div>
        </div>
        <p>
          © 2020 <a href="https://haberibul.com">Haberibul.com</a>
        </p>
      </footer>
    </article>
  )
}

export default Footer
