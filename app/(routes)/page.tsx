import getbillboard from "@/actions/get-billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"
export const revalidate=0
import 'react-loading-skeleton/dist/skeleton.css'

const HomePage = async() => {
  const products=await getProducts({isFeatures:true})
  const billboard=await getbillboard('f6f4582f-89bf-4516-b6cc-3d91e2234e3e')
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
       
        <div className="flex flex-col gap-y-8  sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
        </div>
        
      </Container>
    </div>
  )
}

export default HomePage