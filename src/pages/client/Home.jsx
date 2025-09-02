import React from 'react'
import example1 from '../../assets/example1.jpg'
import { PlusIcon } from '@heroicons/react/20/solid'
import { BookmarkIcon } from '@heroicons/react/24/outline'
export default function Home() {
    return (
        <div>
            <div className="flex w-full h-[600px] relative">
                <div className="flex w-full h-full items-center absolute bg-zinc-900/40 z-10  px-10">
                    <div className="flex w-md flex-col gap-y-2">
                        <h1 className='text-5xl font-bold'>Chainsow Man</h1>
                        <p className='font-semibold'>Chainsaw Man is a Japanese manga series written and illustrated by Tatsuki Fujimoto.</p>
                        <div className="flex gap-x-2">
                            <button className='flex items-center bg-zinc-100 rounded-md h-10 px-5'>
                                <span className='text-zinc-900 font-semibold'>Watch Now</span>
                            </button>
                            <button className='flex items-center bg-zinc-800 rounded-md h-10 px-5 gap-x-2'>
                                <BookmarkIcon className='size-5' />
                                <p>To Bookmark</p>
                            </button>
                        </div>
                    </div>
                </div>
                <img src={example1} alt="" className='w-full h-auto object-cover object-left-top' />
            </div>
        </div>
    )
}
