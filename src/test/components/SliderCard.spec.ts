import SliderCard from '../../components/cards/SliderCard'
import { render } from '@testing-library/react'
import { NewsType } from '../../types/NewsType';
import { TEST_NEWS } from '../../utils/constant';

describe('SliderCard', () => {
  let expectedProps: { news: NewsType };

  const testNews: NewsType = TEST_NEWS

  beforeEach(() => {
    expectedProps = {
      news: testNews
    }
  })

  test('should render dummy news', () => {
    const { getByText, getByAltText } = render(SliderCard({ ...expectedProps.news }))
    const caption = getByText(expectedProps.news.caption)
    const image = getByAltText(expectedProps.news.imgAlt)

    expect(caption).toBeVisible();
    expect(image)
  })
})