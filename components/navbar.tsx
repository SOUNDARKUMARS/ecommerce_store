import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbar-actions"
import ChooseCategory from "./dropdon-mobile"


const NavBar =async() => {
    const categories=await getCategories()

  return (
    <div className='border-b' >
        
        <Container>
        
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
               

                <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">STORE</p>
                </Link>

                <div className='2xl:block lg:block md:block sm:block hidden'>
                    <MainNav  data={categories}/>
                   
                </div>
                    <div className="hidden font-semibold bg-green-100 py-1 px-2 rounded-md hover:bg-green-50 transition-colors text-green-500 lg:block sm:block xl:block md:block">
                        <Link href={'/contact'}>Contact Us</Link>
                    </div>
                    <div className="hidden font-semibold bg-blue-100 py-1 px-2 ml-3 rounded-md hover:bg-blue-50 transition-colors text-blue-500 lg:block sm:block xl:block md:block">
                        <Link href={'/terms'}>Terms of service</Link>
                    </div>
                    
                <NavbarActions/>
       
                <div className='lg:hidden  md:hidden sm:hidden visible ml-6'><ChooseCategory data={categories}/></div>
            </div>
        </Container>      
    </div>
  )
}

export default NavBar
