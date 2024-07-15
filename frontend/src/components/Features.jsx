function Features() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Why Use Our Quiz App?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Enhance your coding knowledge with our interactive and educational
            quizzes.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Wide Range of Topics
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Covering various programming languages and concepts to help you
              learn and master them.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Real-time Feedback
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Get instant feedback on your answers to help you understand and
              learn from your mistakes.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Progress Tracking
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Track your progress over time and see how much you’ve improved.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Interactive Learning
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Engaging quizzes make learning to code fun and interactive.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Community Support
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Join our community of learners and get help from fellow coders.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                Free to Use
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Access all quizzes and features for free.
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
