"use client"

import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
 
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  })
})


function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

export function SigninForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  return (
    <div className="mx-auto max-w-md w-[300px]">
      <CardHeader>
        <CardTitle className="text-6xl text-white text-center">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="mt-10">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid-gap-2">
              <FormControl>
                <Input placeholder="Email" className="text-white placeholder:text-white bg-input py-5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" className="text-white placeholder:text-white bg-input py-5" id="password" type="password" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit" className="w-full py-5">
            Login
          </Button>
      </form>
    </Form>
      </CardContent>
    </div>
  )
}
