"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { loginSchema, LoginType } from "../schemas/login-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "@aws-amplify/auth";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: LoginType) => {
    startTransition(async () => {
      try {
        const signinmethod = await signIn({
          username: data.email,
          password: data.password,
        });
        console.log(signinmethod);
        router.push("/");
      } catch (err: any) {
        toast.error(err.message);
      }
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="Insert a email to Login yuor account"
                  required
                />
                <p className="text-sm text-destructive">
                  {form.formState.errors.email?.message}
                </p>
              </div>
              <div className="grid gap-3">
                {/* <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div> */}
                <Input
                  id="password"
                  type="password"
                  required
                  {...form.register("password")}
                  placeholder="Enter you password"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isPending ? "Logging in..." : "Login"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Dont have an account?{" "}
              <a href="/auth/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
