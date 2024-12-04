"use client"

import { Progress } from '@/components/ui/progress'
import { useToast } from '@/hooks/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Download, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { useState } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'

export default function Page() {
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const {toast} = useToast()

    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) => {
          setUploadedImage(data.url); // Save the uploaded image URL
        },
        onUploadProgress(p) {
            setUploadProgress(p)
        },
      });
    

    const onDropRejected = (rejectedFile: FileRejection[]) => {
        const [file] = rejectedFile
        setIsDragOver(false)
        toast({
            title: `${file.file.type} type is not supported`,
            description: "Please try PNG, JPEG or JPG instead",
            variant: "destructive"
        })
    }
    const onDropAccepted = async (files: File[]) => {
          startUpload(files, {configId: undefined})
          setIsDragOver(false)
      };

  return (
    <div className={cn("relative h-[504] flex-1 my-16 w-full rounded-xl bg-white/20 p-2 ring-1 ring-inset border border-white border-dashed ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center", {"ring-blue-900/25 bg-blue-900/10":isDragOver,})}>
        <div className='relative flex flex-1 flex-col items-center justify-center w-full h-full'>
            {uploadedImage ? (
                <img src={uploadedImage} alt="uploaded" className='w-full h-full object-cover rounded-xl'/>
            ) : (
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
                            {isDragOver ? (<MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/>) : isUploading ? (<Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2'/>) : (<Download className='h-6 w-6 text-white mb-2' />)}
                            <div className='flex flex-col jjustify-center mb-2 text-sm text-white'>
                                {isUploading ? <div className='flex flex-col items-center'><p>Uploading...</p><Progress value={uploadProgress} className='mt-2 w-40 h-2 bg-white'/></div> : isDragOver ? <p><span className='font-semibold'>Drop file</span> to upload</p> : <p><span className='font-semibold'>Click to upload</span> or drag & drop</p>}
                            </div>

                            {isUploading ? null : <p className='text-xs text-white'>PNG, JPEG, JPG</p>}
                        </div>
                    )}
                </Dropzone>
            )}

        </div>
    </div>
  )
}