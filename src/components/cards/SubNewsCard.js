import React from "react";
import Link from "next/link";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as Helper from '../../utils/helper';
import slugify from 'slugify';

const SubNewsCard = news => {
  return <div
    className="col-xs-12 col-sm-12 col-md-3 subNews-child relativeDiv"
    key={news.id}
  >
    <Link
      href="[category]/[slug]/[id]"
      as={Helper.getCategoryToByKey(news.category) + '/' + slugify(news.caption) + '/' + news.id}
    >
      <a>
        <LazyLoadImage
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