// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))\  // await delay(2000)
import ProductList from '@/components/shared/product/product-list'
import { getLatestProduct } from '@/lib/actions/product.actions'

// export const metadata = {

//   title: 'Home',
// }

const Homepage = async () => {
  const latestProducts = await getLatestProduct()

  return (
    <section className="p-9">
      <ProductList
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      ></ProductList>
    </section>
  )
}

export default Homepage
