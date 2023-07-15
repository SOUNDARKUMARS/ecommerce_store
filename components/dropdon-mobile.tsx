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
  DropdownMenuShortcut,
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
          <DropdownMenuContent className="w-56 bg-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className='bg-white rounded-md '>
                {
                  <nav className="mx-6 flex flex-col items-center  space-y-4">
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
                  </nav>
                }
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
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
