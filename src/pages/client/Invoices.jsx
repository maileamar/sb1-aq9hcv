import React from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaDownload } from 'react-icons/fa';
import DashboardHeader from '../../components/dashboard/DashboardHeader';

const invoices = [
  {
    id: 'INV-2024-001',
    date: '2024-01-31',
    amount: 12500,
    status: 'Paid',
    items: [
      { description: 'Sarah Chen - Senior Frontend Developer', amount: 4500 },
      { description: 'Michael Nguyen - Backend Engineer', amount: 4000 },
      { description: 'EOR Service Fee', amount: 4000 }
    ]
  },
  {
    id: 'INV-2024-002',
    date: '2024-02-29',
    amount: 13000,
    status: 'Pending',
    items: [
      { description: 'Sarah Chen - Senior Frontend Developer', amount: 4500 },
      { description: 'Michael Nguyen - Backend Engineer', amount: 4000 },
      { description: 'Performance Bonus - Sarah Chen', amount: 500 },
      { description: 'EOR Service Fee', amount: 4000 }
    ]
  }
];

const Invoices = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <FaFileInvoiceDollar className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Outstanding</p>
                  <p className="text-2xl font-semibold text-gray-900">$13,000</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Invoices List */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Invoices</h2>
              
              <div className="space-y-6">
                {invoices.map((invoice, index) => (
                  <motion.div
                    key={invoice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border rounded-lg"
                  >
                    <div className="px-6 py-4 flex items-center justify-between bg-gray-50">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{invoice.id}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(invoice.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium
                          ${invoice.status === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {invoice.status}
                        </span>
                        <button className="text-red-600 hover:text-red-900">
                          <FaDownload className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <table className="min-w-full">
                        <tbody className="divide-y divide-gray-200">
                          {invoice.items.map((item, i) => (
                            <tr key={i}>
                              <td className="py-2 text-sm text-gray-900">{item.description}</td>
                              <td className="py-2 text-sm text-gray-900 text-right">
                                ${item.amount.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                          <tr className="font-medium">
                            <td className="py-2 text-sm text-gray-900">Total</td>
                            <td className="py-2 text-sm text-gray-900 text-right">
                              ${invoice.amount.toLocaleString()}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invoices;