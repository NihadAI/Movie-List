import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='space-y-8 flex flex-col items-center justify-center'>
        <div className='text-white text-6xl font-semibold'>
            Your movie list is empty
        </div>
        <div>
            <Button className='text-white text-xl font-semibold w-[202px] h-[56px]'><Link href={"/new-movie"}>Add a new Movie</Link></Button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}