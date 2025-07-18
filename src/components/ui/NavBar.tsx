"use server"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { SignoutButton } from '@/app/auth/components/signout-button';

export async function Navbar() {
  return (
    <NavigationMenu className="flex justify-center p-4 w-5xl">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link href="/todo-list">
            <Button
              className="hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-pointer"
              
            >
              Todo List
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/posts">
            <Button
              className="hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-pointer"
            
            >
              Posts
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog">
            <Button
              className="hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Blog
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <SignoutButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
