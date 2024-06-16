'use client'

import { PersonStanding } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"


const formSchema = z.object({
  email: z.string().email(),
  password: z.string()
})


const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleSubmit = () => {
    console.log("Login validation passed");

  }

  return (
    <>
      <PersonStanding size={50} />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Form */}
          <Form {...form} >
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>

              {/* Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the email address you signed up
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      {/* <Input placeholder="Your password" type="password" {...field} /> */}
                      <PasswordInput placeholder="Your password" {...field}/>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Login</Button>
            </form>
          </Form>

        </CardContent>
        <CardFooter className="items-center gap-2 justify-between">
          <small>Don't have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up" >Sing Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default LoginPage