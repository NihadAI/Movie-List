import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    title: z.string().min(1),
    year: z.string().min(4).max(4, {
      message: "Year must be at least 4 digits.",
    })
  })

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

const MovieForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          year: "",
        },
      })
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
                    <Button type='submit' className='w-full font-semibold'><Link href={"#"}>Submit</Link></Button>
                </div>
            </div>
            </form>
        </Form>
  )
}

export default MovieForm