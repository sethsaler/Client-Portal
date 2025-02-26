'use client';

import Link from 'next/link';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function BillingPage() {
  // Sample invoices data
  const invoices = [
    {
      id: 'INV-2025-001',
      date: 'Feb 15, 2025',
      dueDate: 'Mar 15, 2025',
      amount: 2500.00,
      status: 'Unpaid',
      case: 'Smith v. Corporation',
      description: 'Legal services for January 2025',
    },
    {
      id: 'INV-2025-002',
      date: 'Feb 01, 2025',
      dueDate: 'Mar 01, 2025',
      amount: 1800.00,
      status: 'Paid',
      case: 'Estate of Johnson',
      description: 'Estate planning services',
      paidDate: 'Feb 10, 2025',
    },
    {
      id: 'INV-2025-003',
      date: 'Jan 15, 2025',
      dueDate: 'Feb 15, 2025',
      amount: 3200.00,
      status: 'Overdue',
      case: 'Davis Divorce Settlement',
      description: 'Legal services for December 2024',
    },
    {
      id: 'INV-2024-012',
      date: 'Dec 15, 2024',
      dueDate: 'Jan 15, 2025',
      amount: 1500.00,
      status: 'Paid',
      case: 'Williams Property Dispute',
      description: 'Legal services for November 2024',
      paidDate: 'Jan 05, 2025',
    },
    {
      id: 'INV-2024-011',
      date: 'Dec 01, 2024',
      dueDate: 'Jan 01, 2025',
      amount: 2000.00,
      status: 'Paid',
      case: 'Brown LLC Formation',
      description: 'Business formation services',
      paidDate: 'Dec 20, 2024',
    },
  ];

  // Sample payment methods
  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      details: 'Visa ending in 4242',
      expiryDate: '05/27',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Bank Account',
      details: 'Chase Bank ending in 6789',
      expiryDate: null,
      isDefault: false,
    },
  ];

  // Sample billing summary
  const billingSummary = {
    currentBalance: 5700.00,
    overdue: 3200.00,
    upcoming: 2500.00,
    lastPayment: {
      amount: 1800.00,
      date: 'Feb 10, 2025',
      method: 'Credit Card',
    },
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Billing & Payments</h1>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Make a Payment
          </button>
        </div>

        {/* Billing Summary */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">Current Balance</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">${billingSummary.currentBalance.toFixed(2)}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">Overdue</dt>
                    <dd>
                      <div className="text-lg font-medium text-red-600">${billingSummary.overdue.toFixed(2)}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">Upcoming</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">${billingSummary.upcoming.toFixed(2)}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">Last Payment</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">${billingSummary.lastPayment.amount.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">{billingSummary.lastPayment.date}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Payment Methods</h2>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Add Payment Method
            </button>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {paymentMethods.map((method) => (
                <li key={method.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {method.type === 'Credit Card' ? (
                          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        ) : (
                          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>
                        )}
                        <div className="ml-4">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-gray-900">{method.details}</p>
                            {method.isDefault && (
                              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {method.type}
                            {method.expiryDate && ` • Expires ${method.expiryDate}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Invoices */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Invoices</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search invoices..."
                  className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <select className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-primary-500 focus:ring-primary-500">
                  <option value="all">All Invoices</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Invoice #
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Due Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Case
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primary-600 sm:pl-6">
                      {invoice.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.date}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.dueDate}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.case}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${invoice.amount.toFixed(2)}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          invoice.status === 'Paid'
                            ? 'bg-green-100 text-green-800'
                            : invoice.status === 'Unpaid'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div className="flex space-x-3 justify-end">
                        <Link href={`#`} className="text-primary-600 hover:text-primary-900">
                          View
                        </Link>
                        <Link href={`#`} className="text-primary-600 hover:text-primary-900">
                          Download
                        </Link>
                        {invoice.status !== 'Paid' && (
                          <Link href={`#`} className="text-primary-600 hover:text-primary-900">
                            Pay
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing History */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment History</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {invoices
                .filter((invoice) => invoice.status === 'Paid')
                .map((invoice) => (
                  <li key={`payment-${invoice.id}`}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <p className="text-sm font-medium text-gray-900">Payment for Invoice {invoice.id}</p>
                            </div>
                            <p className="text-sm text-gray-500">
                              {invoice.paidDate} • ${invoice.amount.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div>
                          <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Successful
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {invoice.description} • {invoice.case}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
