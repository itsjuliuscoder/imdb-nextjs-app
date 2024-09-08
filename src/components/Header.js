import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs'
import MenuItem from './MenuItem';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
          <MenuItem title='home' address='/' Icon={AiFillHome} />
          <MenuItem title='home' address='/' Icon={BsFillInfoCircleFill} />
        </div>
        <Link href={'/'}>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
            <span className='text-2xl hidden sm:inline'>Clone</span>
        </Link>
    </div>
  )
}
