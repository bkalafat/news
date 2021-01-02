import React from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import * as Helper from '../../utils/helper';
import slugify from 'slugify';
import { NewsType } from "../../types/NewsType";

const SubSliderCard = (news : NewsType) => {
  return <div key={news.id} >
    <Link
      href="[category]/[slug]/[id]"
      as={Helper.getCategoryToByKey(news.category) + '/' + slugify(news.caption) + '/' + news.id}
      key={news.id}
    >

      <a>
        <div className="spaceAround">
          <img
            className={isMobile ? "sameSizeImgMobile" : "sameSizeImgBrowser"}
            src={news.imgPath}
            alt={news.imgAlt} />
          <div className="text ellipsis text-center">
            <span style= {{fontSize: isMobile ? "large" : "xx-large" }} className="text-concat">{news.caption}</span>
          </div>
        </div>
      </a>

    </Link>
  </div>;
}

export default SubSliderCard