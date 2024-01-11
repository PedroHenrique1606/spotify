import {Home as HomeIcon , Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'

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
          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3 text-sm text-zinc-400 overflow-auto h-96 custom-scrollbar'>
            <a href="" className='hover:text-zinc-100'>Playlist do Rock</a>
            <a href="" className='hover:text-zinc-100'>Taylor Swift</a>
            <a href="" className='hover:text-zinc-100'>Calcinha Preta</a>
            <a href="" className='hover:text-zinc-100'>Zezo Potiguar</a>
            <a href="" className='hover:text-zinc-100'>Selena Gomes</a>
            <a href="" className='hover:text-zinc-100'>STAYC</a>
            <a href="" className='hover:text-zinc-100'>Mamonas Assassinas</a>
            <a href="" className='hover:text-zinc-100'>Beatles</a>
            <a href="" className='hover:text-zinc-100'>&#60;3</a>
            <a href="" className='hover:text-zinc-100'>borboletas</a>
            <a href="" className='hover:text-zinc-100'>Jogatina</a>
            <a href="" className='hover:text-zinc-100'>Michael Jackson</a>
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
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/images/cd-cover-zezo.png" width={80} height={80} alt="" />
              <strong>Zezo dos Teclados</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/images/cd-cover-stayc.jpeg" width={80} height={80} alt="" />
              <strong>STAYC</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/images/cd-cover-paramore.jpg" width={80} height={80} alt="" />
              <strong>Paramore</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/images/cd-cover-mj.jpg" width={80} height={80} alt="" />
              <strong>Michael Jackson</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/images/cd-cover-cp.webp" width={80} height={80} alt="" />
              <strong>Calcinha Preta</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/images/cd-cover-beatles.webp" width={80} height={80} alt="" />
              <strong>Beatles</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made For You</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 fixed bottom-0 w-full">
        footer
      </footer>
    </div>
  )
}
