'use client'

import { useFiles } from '@/context/FileContext'
import { Plus, Trash2, Minimize2 } from 'lucide-react'

export default function Terminal() {
  const { showTerminal, setShowTerminal } = useFiles()

  if (!showTerminal) {
    return null
  }

  return (
    <div className='h-48 border-t border-border-dark bg-background-dark flex flex-col shrink-0'>
      <div className='flex items-center px-4 gap-6 border-b border-border-dark h-9'>
        <button className='text-xs font-bold text-white border-b-2 border-primary h-full pt-1'>
          TERMINAL
        </button>
        <button className='text-xs font-bold text-gray-500 hover:text-gray-300 h-full pt-1'>
          OUTPUT
        </button>
        <button className='text-xs font-bold text-gray-500 hover:text-gray-300 h-full pt-1'>
          DEBUG CONSOLE
        </button>
        <div className='ml-auto flex gap-2'>
          <Plus className='text-gray-500 text-[16px] cursor-pointer hover:text-white h-5 w-5' />
          <Trash2
            className='text-gray-500 text-[16px] cursor-pointer hover:text-white h-5 w-5'
            onClick={() => setShowTerminal(false)}
          />
          <Minimize2 className='text-gray-500 text-[16px] cursor-pointer hover:text-white h-5 w-5' />
        </div>
      </div>
      <div className='flex-1 p-4 font-mono text-sm overflow-y-auto'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center text-gray-400'>
            <span className='text-primary font-bold mr-2'>➜</span>
            <span className='text-blue-400 mr-2'>~/projects/portfolio</span>
            <span className='text-gray-500'>git:(</span>
            <span className='text-red-400'>main</span>
            <span className='text-gray-500'>)</span>
            <span className='ml-2 text-white'>npm run deploy</span>
          </div>
          <div className='text-gray-500 ml-4'>
            &gt; building production bundle...
          </div>
          <div className='text-green-400 ml-4'>
            ✔ Optimized build complete in 1.4s
          </div>
          <div className='text-gray-400 ml-4'>Serving from localhost:5173</div>
          <div className='flex items-center text-gray-400 mt-2'>
            <span className='text-primary font-bold mr-2'>➜</span>
            <span className='text-blue-400 mr-2'>~/projects/portfolio</span>
            <span className='text-white animate-pulse'>_</span>
          </div>
        </div>
      </div>
    </div>
  )
}
