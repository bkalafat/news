import React from "react"
import { SocialIcon } from "react-social-icons"

const size = 33
const Footer = () => {
  return (
    <article>
      <h1>Haberibul.com</h1>
      <h3>"Doğru" haberi bulmanın en kolay yolu</h3>
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
              href="https://twitter.com/haberibulcom"
              rel="noopener noreferrer nofollow"
              target="_blank"
              style={{ height: size, width: size }}
              network="twitter"
            />
          </div>
          <div className="spaceAround">
            <SocialIcon
              href="https://www.instagram.com/haberibulcom"
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
