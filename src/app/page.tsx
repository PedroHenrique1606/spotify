import {Home as HomeIcon , Search, Library, ChevronLeft, ChevronRight} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return(
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
              </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
              </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
              </a>
          </nav>
          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3 text-sm text-zinc-400'>
            <a href="" className='hover:text-zinc-100'>Playlist do Rock</a>
            <a href="" className='hover:text-zinc-100'>Taylor Swift</a>
            <a href="" className='hover:text-zinc-100'>Calcinha Preta</a>
            <a href="" className='hover:text-zinc-100'>Zezo Potiguar</a>
            <a href="" className='hover:text-zinc-100'>Selena Gomes</a>
            <a href="" className='hover:text-zinc-100'>STAYC</a>
            <a href="" className='hover:text-zinc-100'>Mamonas Assassinas</a>
            <a href="" className='hover:text-zinc-100'>Beatles</a>
            <a href="" className='hover:text-zinc-100'>&#60;3</a>
            <a href="" className='hover:text-zinc-100'>borboletsa</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Night</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
            </a>
            <a href='' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
            </a>
            <a href='' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
            </a>
            <a href='' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
            </a>
            <a href='' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
            </a>
            <a href='' className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
            </a>

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
