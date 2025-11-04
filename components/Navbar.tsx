'use client';

// lucide imports
import { LogOut, Moon, Settings, User, Sun } from 'lucide-react';

// next imports
import Link from 'next/link';

// shadcn imports
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

// next-themes imports
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <nav className='flex items-center justify-between p-4 '>
      {/* LEFT SECTION */}
      <SidebarTrigger />

      {/* RIGHT SECTION */}
      <div className='flex items-center gap-4'>
        <Link href={'/'}>Dashboard</Link>

        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='/infinity.png' />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuItem>
                <User className='w-[1.2rem] h-[1.2rem] mr-2' />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className='w-[1.2rem] h-[1.2rem] mr-2' />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant='destructive'>
                <LogOut className='w-[1.2rem] h-[1.2rem] mr-2' />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </nav>
  );
}
