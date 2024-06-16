'use client'

import { CalendarIcon, PersonStanding } from "lucide-react"
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { PasswordInput } from "@/components/ui/password-input"



const formSchema = z.object({
  email: z.string().email(),
  accountType: z.enum(['personal', 'company']),
  companyName: z.string().optional(),
  employees: z.coerce.number().optional(),
  dob: z.date().refine((date) => {
    const today = new Date()
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDay(),
    )
    return date <= eighteenYearsAgo
  }, "You must at least 18 years old"),
  password: z.string().min(8, "Password must contain at least 8 characters").refine((password) => {
    return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password)
  }, "Must contain at least 1 special character and 1 uppercase letter"),
  passwordConfirm: z.string()
}).superRefine((data, ctx) => {
  if(data.password !== data.passwordConfirm){
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["passwordConfirm"],
      message: "Password does not match"
    })
  }
  if (data.accountType === 'company' && !data.companyName) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["companyName"],
      message: "Company name is required"
    })
  }

  if (data.accountType === 'company' && (!data.employees || data.employees < 1)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["employees"],
      message: "Employees number is required"
    })
  }
})


const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  })

  const handleSubmit = () => {
    console.log("Login validation passed");
  }

  const accountType = form.watch('accountType')

  const dobFromDate = new Date()
  dobFromDate.setFullYear(dobFromDate.getFullYear() - 120)



  return (
    <>
      <PersonStanding size={50} />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign Up for a new account</CardDescription>
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Field */}
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (

                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-fll">
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {accountType === 'company'
                &&
                <>
                  {/* Field */}
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Field */}
                  <FormField
                    control={form.control}
                    name="employees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employees</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} placeholder="Employess" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              }


              {/* Field */}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth </FormLabel>
                    <FormControl>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="flex justify-between">
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}

                            <CalendarIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto p-0">
                          <Calendar
                            mode="single"
                            defaultMonth={field.value}
                            selected={field.value}
                            onSelect={field.onChange}
                            fixedWeeks
                            weekStartsOn={1}
                            fromYear={1980}
                            fromDate={dobFromDate}
                            toDate={new Date()}
                            captionLayout="dropdown-buttons"
                          />
                        </PopoverContent>
                      </Popover>

                    </FormControl>
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
                      {/* <Input placeholder="******" type="password" {...field} /> */}
                      <PasswordInput placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Field */}
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      {/* <Input placeholder="******" type="password" {...field} /> */}
                      <PasswordInput placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Sign Up</Button>
            </form>
          </Form>

        </CardContent>
        <CardFooter className="items-center gap-2 justify-between">
          <small>Already have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/login" >Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SignUpPage