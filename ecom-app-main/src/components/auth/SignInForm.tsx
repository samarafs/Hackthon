"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};
function SignInForm() {
  const { data: session } = useSession();
  const params = useSearchParams();
  let callbackUrl = params.get("callbackUrl") || "/";
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, session, router, params]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (form) => {
    const { email, password } = form;
    try {
      signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-48">
      <div className="max-w-sm mx-auto card bg-base-100 my-4">
        <div className="card-body">
          <h1 className="card-title">Sign In</h1>
          {params.get("error") && (
            <div className="alert alert-error shadow-lg">
              {params.get("error") === "CredentialsSignin"
                ? "Invalid email or password"
                : params.get("error")}
            </div>
          )}
          {params.get("success") && (
            <div className="alert alert-success shadow-lg">
              {params.get("success")}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
          <div className="flex items-center mt-2">
            <p>Need an account?{" "}</p>
            <Link  className="text-blue-500 hover:text-blue-700" href={`/register?callbackUrl=${callbackUrl}`}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
