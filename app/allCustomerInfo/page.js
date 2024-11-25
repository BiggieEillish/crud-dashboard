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
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">All Customer Info</h2>
      
      <div className="bg-white shadow rounded-lg p-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Domain</th>
              <th className="py-3 px-6 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="py-3 px-6 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {(customersData || []).map((customer, index) => (
              <tr
                key={customer.id}
                onClick={() => openModal(customer)}
                className={`cursor-pointer hover:bg-indigo-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{customer.name}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{customer.companyWebsite}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{customer.mobileNumber}</td>
                <td className={`py-4 px-6 text-sm font-medium ${customer.status === 'Live' ? 'text-green-600' : 'text-red-600'}`}>{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditCustomerForm customer={selectedCustomer} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
