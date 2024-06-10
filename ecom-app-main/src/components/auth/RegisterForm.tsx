"use client";
import passage from "next-auth/providers/passage";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgPassword } from "react-icons/cg";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const { data: session } = useSession();
  const params = useSearchParams();
  let callbackUrl = params.get("callbackUrl") || "/";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password, confirmPassword } = form;
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.ok) {
        return router.push(
          `/signin?callbackUrl=${callbackUrl}&success=Account created successfully`
        );
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error: any) {
      const err =
        error.message &&
        error.message.indexOf("E11000 duplicate key error collection") > -1
          ? "Email already exists"
          : error.message;
      toast.error(err);
    }
  };
  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [session, callbackUrl, router, params]);

  return (
    <div className="pt-36">
      <div className="card max-w-sm p-4 mx-auto my-4 bg-base-100 shadow-xl p-10">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Register</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2 ">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full max-w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="my-2 ">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full max-w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full max-w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input input-bordered w-full max-w-full"
              {...register("confirmPassword", {
                required: "Confirm Password is required",

                validate: (value) => {
                  const { password } = getValues();
                  return value === password || "Passwords do not match";
                },
              })}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="btn btn-primary w-full max-w-full"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Register
            </button>
          </div>
        </form>
        <div className="divider"></div>
        <div className="my-2">
          <p className="text-center">
            Already have an account?{" "}
            <Link href={`/signin?callbackUrl=${callbackUrl}`} className="text-blue-500 hover:text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
