// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))\
import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'
// export const metadata = {

//   title: 'Home',
// }

const Homepage = () => {
  // await delay(2000)

  return (
    <section className="p-9">
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      ></ProductList>
    </section>
  )
}

export default Homepage
