import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function TopNavBar() {
    return (
        <div className='w-full h-20 text-zinc-50 bg-zinc-950/10 flex items-center px-10 absolute z-50 border-b border-zinc-500'>
            <div className="flex items-center justify-between gap-8 w-full">
                <h1 className='text-2xl font-bold'>MyApp</h1>
                <div className="flex gap-3 font-semibold">
                    <div className="flex">
                        Home
                    </div>
                    <div className="flex">
                        Catalog
                    </div>
                    <div className="flex">
                        News
                    </div>
                    <div className="flex">
                        Collections
                    </div>
                </div>
                <div className="flex flex-1 w-auto h-auto relative items-center">
                    <button className='w-auto h-auto absolute left-3 cursor-pointer'>
                        <MagnifyingGlassIcon className="size-5" />
                    </button>
                    <input type="text" placeholder='Search...' className='flex flex-1 pr-3 pl-12 h-10 rounded-md border border-zinc-500 bg-zinc-200/20 focus:outline-none' />
                </div>
                <div className="flex gap-2">
                    <button className='flex items-center bg-zinc-800 rounded-md h-10 px-5'>
                        <span className=' font-semibold'>Login</span>
                    </button>
                    <button className='flex items-center bg-zinc-100 rounded-md h-10 px-5'>
                        <span className='text-zinc-900 font-semibold'>Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
