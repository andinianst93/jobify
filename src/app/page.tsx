import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
          <div className='text-2xl font-bold text-slate-900'>Jobify Dev</div>
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
          <div>
            <h1 className='font-bold text-4xl md:text-7xl capitalize'>
              job <span className='text-slate-600'>tracking</span> app
            </h1>
            <p className='leading-loose max-w-md mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolores praesentium ducimus pariatur? Repellendus, eligendi.
            </p>
            <Button asChild className='mt-4'>
              <Link href={"/add-job"}>Get Started</Link>
            </Button>
          </div>
      </section>
    </main>
  )
}
