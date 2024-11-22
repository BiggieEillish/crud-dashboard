// components/AddCustomerForm.js

export default function AddCustomerForm() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-blue-400">Add Customer</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Info Fields */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
            <input type="text" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Type <span className="text-red-500">*</span></label>
            <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black">
              <option>Select Type</option>
              <option>Type A</option>
              <option>Type B</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Status <span className="text-red-500">*</span></label>
            <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black">
              <option>Live</option>
              <option>Inactive</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Country of Registration</label>
            <input type="text" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Company Registration Number <span className="text-red-500">*</span></label>
            <input type="text" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Stock Symbol</label>
            <input type="text" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Company Website</label>
            <input type="url" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Deals With</label>
            <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black">
              <option>Select</option>
              <option>Option A</option>
              <option>Option B</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Internal Representative <span className="text-red-500">*</span></label>
            <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black">
              <option>Select Representative</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Relationship Since</label>
            <input type="date" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          {/* Contact Information */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-400">Contact Information</h3>
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Main Contact Person <span className="text-red-500">*</span></label>
            <input type="text" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Official Email <span className="text-red-500">*</span></label>
            <input type="email" required className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Secondary Email</label>
            <input type="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
            <input type="tel" required placeholder="+60" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black" />
          </div>
  
          {/* Submit and Reset Buttons */}
          <div className="md:col-span-2 mt-6 flex justify-end space-x-4">
            <button type="reset" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Reset
            </button>
            <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  