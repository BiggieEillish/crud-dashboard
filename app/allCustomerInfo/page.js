'use client';

import { useState } from 'react';
import Modal from '@/components/Modal'; // Import the reusable modal component
import EditCustomerForm from '@/components/EditCustomerForm';
import { customersData } from '@/utils/data'; // Update the import path based on your structure

export default function AllCustomerInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">List of Contracts</h2>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Search by Company Name"
            className="border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-1/3"
          />
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Filter by
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Sort by
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Registration ID</th>
                <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Company Name</th>
                <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Vendor Name</th>
                <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Contact Person</th>
                <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">SSM Registration Number</th>
                <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {(customersData || []).map((customer, index) => (
                <tr
                  key={customer.id}
                  className={`hover:bg-indigo-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-900">{customer.registrationId}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{customer.companyName}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{customer.vendorName}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{customer.contactPersonPrimary}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{customer.ssmRegistrationNumber}</td>
                  <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">
                    <button className="mr-2 px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Edit
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditCustomerForm customer={selectedCustomer} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
