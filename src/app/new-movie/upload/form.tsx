import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createMovie } from '@/lib/actions/movie'

const formSchema = z.object({
    title: z.string().min(1),
    year: z.string().min(4).max(4, {
      message: "Year must be at least 4 digits.",
    }),
    url: z.string().min(1)
  })

  

const MovieForm = ({ imageUrl }: { imageUrl: string | undefined }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  console.log(imageUrl);
  

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "test",
          year: "2004",
          url: imageUrl || ' '
        },
      })
    console.log(form.formState.isValid);
    
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setIsSubmitting(true);
      try {
        await createMovie(values);
        console.log('Movie created:', values);
        form.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name={"title"} render={({field}) => (
                    <FormItem className="grid-gap-2">
                    <FormControl>
                      <Input placeholder="Title" className="text-white placeholder:text-white bg-input py-5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <FormField control={form.control} name={"year"} render={({field}) => (
                    <FormItem className="grid-gap-2">
                    <FormControl>
                      <Input placeholder="Publishing Year" className="text-white placeholder:text-white bg-input py-5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
            <div className='flex flex-row justify-between w-full'>
                <div>
                    <Button className='border w-full border-white text-white font-semibold' variant={"ghost"}><Link href="/">Cancel</Link></Button>
                </div>
                <div>
                    <Button type='submit' className='w-full font-semibold' disabled={isSubmitting || !form.formState.isValid}>
                      <Link href={"/"}>Submit</Link>
                    </Button>
                </div>
            </div>
            </form>
        </Form>
  )
}

export default MovieForm