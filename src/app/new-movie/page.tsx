"use client"

import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Download, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { useState, useTransition } from 'react'
import Dropzone from 'react-dropzone'

export default function Page() {
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const onDropRejected = () => {}
    const onDropAccepted = () => {console.log("accepted");
    }

    const isUploading = false
    const [isPending, startTransition] = useTransition()

  return (
    <div className={cn("relative h-[504] flex-1 my-16 w-full rounded-xl bg-white/20 p-2 ring-1 ring-inset border border-white border-dashed ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {"ring-blue-900/25 bg-blue-900/10":isDragOver,})}>
        <div className='relative flex flex-1 flex-col items-center justify-center w-full h-full'>
            <Dropzone onDropRejected={onDropRejected} onDropAccepted={onDropAccepted}               
            accept={{
                'image/png': ['.png'],
                'image/jpeg': ['.jpeg'],
                'image/jpg': ['.jpg'],
            }} 
            onDragEnter={()=>setIsDragOver(true)} onDragLeave={()=>setIsDragOver(false)}>
                {({getRootProps, getInputProps}) => (
                    <div className='h-full w-full flex flex-1 flex-col justify-center items-center' {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragOver ? (<MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/>) : isUploading || isPending ? (<Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2'/>) : (<Download className='h-6 w-6 text-white mb-2' />)}
                        <div className='flex flex-col jjustify-center mb-2 text-sm text-white'>
                            {isUploading ? <div className='flex flex-col items-center'><p>Uploading...</p><Progress value={uploadProgress} className='mt-2 w-40 h-2 bg-white'/></div> : isPending ? <div className='flex flex-col items-center'>Redirecting, please wait</div> : isDragOver ? <p><span className='font-semibold'>Drop file</span> to upload</p> : <p><span className='font-semibold'>Click to upload</span> or drag & drop</p>}
                        </div>

                        {isPending ? null : <p className='text-xs text-white'>PNG, JPEG, JPG</p>}
                    </div>
                )}
            </Dropzone>
        </div>
    </div>
  )
}