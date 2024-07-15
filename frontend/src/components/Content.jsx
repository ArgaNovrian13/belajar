function Content() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Master Programming with Fun and Interactive Quizzes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our quiz app helps you improve your programming skills with a
            variety of challenging and fun quizzes.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg shadow-lg"
            src="https://via.placeholder.com/600x400"
            alt="Programming Quiz"
          />
        </div>
      </div>
    </section>
  );
}

export default Content;
