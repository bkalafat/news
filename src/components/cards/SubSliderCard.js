import React from "react";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";
import * as Helper from '../../utils/helper';
import slugify from 'slugify';

const SubSliderCard = news => {
  return <div key={news.id} className="ratio">
    <Link
      href="[category]/[slug]/[id]"
      as={Helper.getCategoryToByKey(news.category) + '/' + slugify(news.caption) + '/' + news.id}
      key={news.id}
    >
      <a>
        <img
          className="imgRatio spaceAround"
          src={news.imgPath}
          alt={news.imgAlt} />
        <div className="header-text">
          <div className="col-md-12 col-sm-8 col-xs-8 text-center">
            <BrowserView>
              <h5>
                <span className="beyaz-manset">{news.caption}</span>
              </h5>
            </BrowserView>
            <MobileView>
              <h10>
                <span className="beyaz-manset">{news.caption}</span>
              </h10>
            </MobileView>
          </div>
        </div>
      </a>
    </Link>
  </div>;
}

export default SubSliderCard