export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col gap-8 lg:max-w-2xl w-[80%]">
        <h1 className="text-4xl text-center">Sign into your account</h1>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white p-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white p-4 border border-gray-300 rounded-md"
            />
          </div>
          <button className="bg-[#FF8C38] p-3 text-white font-semibold text-lg rounded-lg">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
