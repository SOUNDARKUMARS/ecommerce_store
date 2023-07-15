import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import Filter from "./components/filter"
import { NoResult } from "@/components/ui/no-result"
import ProductCard from "@/components/ui/product-card"
import MobileFilters from "./components/mobile-filters"

export const revalidate=0

interface categoryPageProps{
    params:{
        categoryId:string
    },
    searchParams:{
        colorId:string
        sizeId:string
    }
}

const CategoryPage:React.FC<categoryPageProps> = async({params,searchParams}) => {
    const products=getProducts({
        categoryId:params.categoryId,
        colorId:searchParams.colorId,
        sizeId:searchParams.sizeId
    })
    const sizes=await getSizes()
    const colors=await getColors()
    const category=await getCategory(params.categoryId)
  return (
    <div>
        <Container>
            <Billboard data={category.billboard}/>
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                    <MobileFilters sizes={sizes} colors={colors} />
                <div className="hidden lg:block">
                    <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
                    <Filter valueKey="colorId" name="Colors" data={colors}/>
                </div>
                
                <div className='mt-6 lg:col-span-4 lg:mt-0'>
                        {(await products).length===0 && <NoResult/>}
                    <div className="grid gap-2 sm:gap-4 lg:gap-4 md:gap-4 grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4">
                        {(await products).map((item)=>(
                            <ProductCard data={item} key={item.id}/>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage