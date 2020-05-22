import axios from "axios"
import { getEnvironmentUrl } from "../utils/helper"

export const FETCH_NEWS = "fetch_news"

export const fetchNews = () => async dispatch => {
  let url = getEnvironmentUrl() + "news/"

  const res = await axios.get(url)

  dispatch({
    type: FETCH_NEWS,
    payload: res.json
  })
}
