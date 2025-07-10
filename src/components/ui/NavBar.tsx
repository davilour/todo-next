
"use server"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import { SignoutButton } from '@/app/auth/components/signout-button';

export async function Navbar () {
    return(
        <NavigationMenu className='flex justify-center p-4 w-5xl'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/">
                    <Button>Todo List</Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/posts">
                    <Button>Posts</Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/blog">
                    <Button>Blog</Button>
                    </Link>
                </NavigationMenuItem>
                  <NavigationMenuItem>
                   <SignoutButton/>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}