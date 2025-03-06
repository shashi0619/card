import { DarkThemeToggle } from "flowbite-react";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-2xl w-full">
        {/* Image Section */}
        <img
          className="object-cover w-full md:w-1/2 h-96 md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg"
          src="./public/image-product-desktop.jpg"
          alt="Perfume"
        />

        {/* Text Section */}
        <div className="flex flex-col justify-between p-6 md:w-1/2">
          <h6 className="text-sm tracking-widest text-gray-500">P E R F U M E</h6>
          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            Gabrielle Essence Eau De Parfum
          </h5>
          <p className="mb-3 text-gray-700 text-sm">
            A floral, solar, and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-green-400 font-bold">$149.99</span>
            <span className="text-gray-500 line-through">$169.99</span>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
