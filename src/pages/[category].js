import CategoryNews from "../components/CategoryNews"
import Layout from "../components/Layout"

const Category = (props) => {

  return (
    <Layout>
      <CategoryNews newsList={props.newsList} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const newsList = await API.getNewsList()
  return {
    revalidate: 150,
    props: {
      newsList
    }
  }
}

export default Category