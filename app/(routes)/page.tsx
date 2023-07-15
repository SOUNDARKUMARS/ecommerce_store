import getbillboard from "@/actions/get-billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"
export const revalidate=0
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const HomePage = async() => {
  const products=await getProducts({isFeatures:true})
  const billboard=await getbillboard('9a135e63-1fde-40b7-a4b0-b58c3b27bcb3')
  return (
    <div>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
       
        <div className="flex flex-col gap-y-8  sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
        </div>
        
      </Container>
      </SkeletonTheme>
    </div>
  )
}

export default HomePage