import { useForm } from "react-hook-form"
import { validationsSchema } from "./validations"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function App() {


  const {register, handleSubmit, formState: {errors,isSubmitting}}= useForm<z.infer<typeof validationsSchema>>({
    resolver: zodResolver(validationsSchema),
    defaultValues: {
      vorname: "",
      nachname: "",
      email: "",
      password: "",
    },
  })

  const onsubmit =async (data: z.infer<typeof validationsSchema>) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label htmlFor="vorname" className="block text-sm font-medium leading-6 text-gray-900">
                vorname
              </label>
              <div className="mt-2">
                <input
                 {...register("vorname")}
                 placeholder="vorname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.email && (
        <p className="text-red-500">{`${errors.vorname?.message}`}</p>
      )}
              </div>
            </div>
            <div>
              <label htmlFor="nachname" className="block text-sm font-medium leading-6 text-gray-900">
                nachname
              </label>
              <div className="mt-2">
                <input
                 {...register("nachname")}
                 placeholder="nachname"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.email && (
        <p className="text-red-500">{`${errors.nachname?.message}`}</p>
      )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                 {...register("email")}
                 placeholder="Email address"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.email && (
        <p className="text-red-500">{`${errors.email?.message}`}</p>
      )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                 {...register("password")}
                 placeholder="Password"
                 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.email && (
        <p className="text-red-500">{`${errors.password?.message}`}</p>
      )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
