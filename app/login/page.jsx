import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>

        <LoginForm />

        <span className="text-center text-xs text-gray-500">
          Don&appos;t have an account?{" "}
          <a className="underline hover:text-indigo-600" href="/register">
            Register
          </a>
        </span>
      </div>
    </section>
  );
}
