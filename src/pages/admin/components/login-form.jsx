import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { loginRequest } from "../../../utils/requests";
import { useAuthContext } from "../../../contexts/auth-context";

import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast";


export function AdminLoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const {register, handleSubmit} = useForm()
  const { login } = useAuthContext()

  const {mutateAsync, isPending} = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      const {access_token} = data;

      if (access_token) {
        login(access_token);
        navigate("/admin")
    } else {
      return;
    }
    },
    onError: () => {
      toast.error("Could not log in, try again!")
    }
  })

  const onSubmit = async (data) => {
    mutateAsync(data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="min-w-[300px] sm:min-w-[400px] md:min-w-[500px]">
        <CardHeader>
          <CardTitle className="font-poppins text-2xl mb-2">
            Login to Barsmiko Admin
          </CardTitle>
          <CardDescription className="text-sm">
            Enter your credentials to get access to the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label className="form-label" htmlFor="username">
                  Username
                </Label>
                <Input
                  className="form-input"
                  id="username"
                  type="text"
                  placeholder=""
                  {...register("username")}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label className="form-label" htmlFor="password">
                    Password
                  </Label>
                  <button
                    type="button"
                    className="text-xs text-blue-600 hover:underline focus:outline-none"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    <span className="text-sm font-semibold">{showPassword ? "Hide Password" : "Show Password"}</span>
                  </button>
                </div>
                <Input
                  className="form-input"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <button disabled={isPending} type="submit" className="w-full btn">
                  {isPending ? "Loading ... " : "Login"}
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
