'use client'
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";

interface MainNavProps {
  data: Category[];
}

const ChooseCategory: React.FC<MainNavProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <MenuIcon onClick={handleMenuToggle} />
        </DropdownMenuTrigger>
        {isOpen && ( 
          <DropdownMenuContent className="w-56 text-lg  bg-white">
            <DropdownMenuLabel >Categories</DropdownMenuLabel>
            <hr className='mt-3'  />
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className='bg-white rounded-md '>
              <header>
</header>
                
                {
                  <div>
                      
                      <div className="hamburger-icon" id="icon">
                        <div className="icon-1" id="a"></div>
                        <div className="icon-2" id="b"></div>
                        <div className="icon-3" id="c"></div>
                        <div className="clear"></div>
                      </div>
                  <nav id="nav" className=" flex flex-col items-center  space-y-4">
                    {routes.map((route) => (
                      
                          <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                              "text-sm font-medium transition-colors hover:text-black",
                              route.active ? "text-black" : "text-neutral-500"
                            )}
                          >
                            {route.label}
                          </Link>
                    ))}
                   
                      <div className='grid gap-2'>
                        <hr className="w-full"/>
                        <div className='font-semibold text-center bg-green-200 py-3 px-4 rounded-md hover:bg-green-100 transition-colors text-green-700'>
                            <Link href={'/contact'}>Contact Me</Link>
                        </div>
                        <div className='font-semibold text-center bg-blue-200 w-full py-3 px-4 rounded-md hover:bg-blue-100 transition-colors text-blue-700'>
                            <Link href={'/terms'}>Terms of Services</Link>
                        </div>
                        
                      </div>
                  </nav>
                  <div className="dark-blue" id="blue"></div>
                  
                  </div> 
                }
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default ChooseCategory;
