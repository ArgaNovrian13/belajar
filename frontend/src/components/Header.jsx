import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Programming Quiz App
        </h1>
        <div>
          <Link to="/login">
            <button className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 mr-2">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="inline-block rounded-md bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-700">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
