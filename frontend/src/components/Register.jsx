function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm leading-5 font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0-4.418-3.582-8-8-8S2 5.582 2 10c0 3.93 2.8 7.184 6.5 7.879v-5.578H6V10h2.5V8c0-1.08.865-1.956 1.928-1.996L10.5 6c1.024 0 1.5.017 1.5.017V8H11c-.356 0-.64.262-.678.601L10.5 9V10h2.5l-.357 2.301H10.5V18c3.7-.695 6.5-3.949 6.5-7.879z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm leading-5 font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.026 15c6.04 0 9.34-5.002 9.34-9.34 0-.141 0-.283-.007-.423A6.693 6.693 0 0016 3.542a6.548 6.548 0 01-1.887.517 3.281 3.281 0 001.444-1.816 6.56 6.56 0 01-2.084.797A3.266 3.266 0 009.027 5.03a9.28 9.28 0 01-6.745-3.417 3.266 3.266 0 001.011 4.361A3.252 3.252 0 012.8 5.872v.041a3.267 3.267 0 002.621 3.2 3.298 3.298 0 01-1.485.056 3.268 3.268 0 003.055 2.273A6.56 6.56 0 011 13.557a9.28 9.28 0 005.026 1.472"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm leading-5 font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .667C4.756.667.666 4.756.666 10c0 4.07 2.644 7.519 6.306 8.734.46.084.63-.199.63-.443 0-.218-.008-.798-.012-1.566-2.566.558-3.106-1.204-3.106-1.204-.418-1.061-1.022-1.343-1.022-1.343-.836-.571.063-.559.063-.559.926.065 1.414.95 1.414.95.822 1.41 2.156 1.003 2.68.766.083-.596.321-1.002.584-1.234-2.05-.233-4.205-1.025-4.205-4.564 0-1.008.364-1.834.96-2.48-.097-.233-.417-1.17.092-2.438 0 0 .788-.252 2.581.96.748-.208 1.55-.313 2.347-.317.796.004 1.598.109 2.347.317 1.793-1.212 2.58-.96 2.58-.96.51 1.268.19 2.205.093 2.438.598.646.96 1.472.96 2.48 0 3.548-2.158 4.328-4.213 4.555.33.286.626.846.626 1.704 0 1.23-.011 2.221-.011 2.526 0 .245.167.531.637.442C17.356 17.516 20 14.068 20 10c0-5.243-4.09-9.333-9.333-9.333"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center text-sm leading-5">
            <span className="mr-2">Already have an account?</span>
            <button className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
