import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";
import * as Helper from '../../utils/helper';
import slugify from 'slugify';
import { NewsType } from "../../types/NewsType";

const SliderCard = (news : NewsType) => {
  return <div key={news.id} className="ratio">
    <Link
      href="[category]/[slug]/[id]"
      as={Helper.getCategoryToByKey(news.category) + '/' + slugify(news.caption) + '/' + news.id}
      key={news.id}
    >
      <a>
        <img className="imgRatio" src={news.imgPath} alt={news.imgAlt} />

        <div className="header-text">
          <div className="col-md-12 col-sm-8 col-xs-8 noPadding text-center">
            <BrowserView>
              <h4>
                <span className="beyaz-manset">{news.caption}</span>
              </h4>
            </BrowserView>
            <MobileView>
              <h6>
                <span className="beyaz-manset">{news.caption}</span>
              </h6>
            </MobileView>
          </div>
        </div>
      </a>
    </Link>
  </div>;
}

export default SliderCard