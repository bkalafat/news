import React from "react"
import { SocialIcon } from "react-social-icons"

const size = 33
const Footer = () => {
  return (
    <article>
      <h4>"Doğru" haberi bulmanın en kolay yolu</h4>
      <footer>
        <div className="centerFlex ">
          <div className="spaceAround">
            <a
              href="https://www.facebook.com/haberibul"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon
                style={{ height: size, width: size }}
                network="facebook"
              />
            </a>
          </div>
          <div className="spaceAround">
            <a
              href="https://twitter.com/haberibulcom"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon
                style={{ height: size, width: size }}
                network="twitter"
              />
            </a>
          </div>
          <div className="spaceAround">
            <a
              href="https://www.instagram.com/haberibulcom"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon
                style={{ height: size, width: size }}
                network="instagram"
              />
            </a>
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
