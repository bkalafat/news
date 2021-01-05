import React from "react";
import Link from "next/link";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Image from "next/image";
import * as Helper from '../../utils/helper';
import { NewsType } from "../../types/NewsType";

const SubNewsCard = (news : NewsType) => {
  return <div
    className="col-xs-12 col-sm-12 col-md-4 subNews-child relativeDiv"
    key={news.id}
  >
    <Link
      href={Helper.getHrefModel(news.url.length)}
      as={Helper.getFullSlug(news)}
    >
      <a>
      <Image
      layout="intrinsic"
       width="1500" height="1000"
          className="stretchImg shadow"
          alt={news.imgAlt}
          src={news.imgPath} />
        <div className="sub-header-text">
          <div className={isMobile ? "text-center" : "col-md-12 text-center"}>
            <BrowserView>
              <h2 className="h4">
                <span>{news.caption}</span>
              </h2>
            </BrowserView>
            <MobileView>
              <h5>
                <span>{news.caption}</span>
              </h5>
            </MobileView>
          </div>
        </div>
      </a>
    </Link>
  </div>;
}

export default SubNewsCard