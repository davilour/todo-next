"use client"

import { signUp } from 'aws-amplify/auth'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { signupSchema, SignupType } from '../schemas/signup-schema'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const form = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const onSubmit = (data: SignupType) => {
    startTransition(async () => {
      try {
        await signUp({ username: data.email, password: data.password })
        toast.success('Account created successfully!')
        router.push('/auth/login')
      } catch (error: any) {
        console.error('Signup error:', error)
        toast.error('Failed to create account')
      }
    })
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create new account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email">Email</Label>
                    <FormControl>
                      <Input id="email" type="email" {...field} />
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
                    <Label htmlFor="password">Password</Label>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <FormControl>
                      <Input
                        id="confirmPassword"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? 'Creating account…' : 'Sign Up'}
              </Button>

              <div className="mt-2 text-center text-sm">
                Already have an account?{' '}
                <a href="/auth/login" className="underline underline-offset-4">
                  Login
                </a>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}