'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState('February 2025');
  const [view, setView] = useState('month'); // 'month', 'week', or 'day'

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Settlement Conference',
      case: 'Smith v. Corporation',
      date: 'Feb 26, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Law Office - Conference Room A',
      attendees: ['Jane Attorney', 'Client', 'Opposing Counsel'],
      color: 'bg-blue-100 text-blue-800',
      day: 26,
    },
    {
      id: 2,
      title: 'Document Review',
      case: 'Smith v. Corporation',
      date: 'Feb 27, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Meeting',
      attendees: ['Jane Attorney', 'Client'],
      color: 'bg-green-100 text-green-800',
      day: 27,
    },
    {
      id: 3,
      title: 'Estate Planning Meeting',
      case: 'Estate of Johnson',
      date: 'Feb 28, 2025',
      time: '10:00 AM - 11:30 AM',
      location: 'Law Office - Conference Room B',
      attendees: ['John Lawyer', 'Client', 'Financial Advisor'],
      color: 'bg-purple-100 text-purple-800',
      day: 28,
    },
    {
      id: 4,
      title: 'Court Hearing',
      case: 'Davis Divorce Settlement',
      date: 'Mar 15, 2025',
      time: '9:00 AM - 11:00 AM',
      location: 'County Courthouse - Room 302',
      attendees: ['Sarah Counsel', 'Client', 'Judge Smith'],
      color: 'bg-red-100 text-red-800',
      day: 15,
    },
    {
      id: 5,
      title: 'Client Intake',
      case: 'New Client Consultation',
      date: 'Feb 25, 2025',
      time: '3:00 PM - 4:00 PM',
      location: 'Law Office - Meeting Room 1',
      attendees: ['Michael Attorney', 'Potential Client'],
      color: 'bg-yellow-100 text-yellow-800',
      day: 25,
    },
  ];

  // Generate calendar days for February 2025
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const startDay = 5; // February 2025 starts on a Saturday (5 if Sunday is 0)
  const emptyDays = Array.from({ length: startDay }, (_, i) => i);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1 rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setView('month')}
                className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ${
                  view === 'month'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                }`}
              >
                Month
              </button>
              <button
                type="button"
                onClick={() => setView('week')}
                className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ${
                  view === 'week'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                }`}
              >
                Week
              </button>
              <button
                type="button"
                onClick={() => setView('day')}
                className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ${
                  view === 'day'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                }`}
              >
                Day
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Add Event
            </button>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h2 className="mx-4 text-lg font-semibold text-gray-900">{currentMonth}</h2>
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Today
          </button>
        </div>

        {/* Month View */}
        {view === 'month' && (
          <div className="bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-200 text-center text-xs font-semibold text-gray-700">
              <div className="bg-white py-2">Sun</div>
              <div className="bg-white py-2">Mon</div>
              <div className="bg-white py-2">Tue</div>
              <div className="bg-white py-2">Wed</div>
              <div className="bg-white py-2">Thu</div>
              <div className="bg-white py-2">Fri</div>
              <div className="bg-white py-2">Sat</div>
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {emptyDays.map((day) => (
                <div key={`empty-${day}`} className="bg-white min-h-[120px] py-2 px-3"></div>
              ))}
              {days.map((day) => {
                const dayEvents = events.filter((event) => event.day === day);
                return (
                  <div key={day} className="bg-white min-h-[120px] py-2 px-3">
                    <div className={`text-sm ${day === 25 ? 'font-bold text-primary-600' : ''}`}>{day}</div>
                    <div className="mt-1 space-y-1 max-h-[100px] overflow-y-auto">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`px-2 py-1 rounded-md text-xs truncate cursor-pointer ${event.color}`}
                        >
                          {event.time.split(' - ')[0]} {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Week View */}
        {view === 'week' && (
          <div className="bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <div key={day} className="bg-white py-2">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-700">{day}</div>
                    <div className={`text-sm mt-1 ${index === 3 ? 'font-bold text-primary-600' : ''}`}>
                      {23 + index > 28 ? index - 5 : 23 + index}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {[0, 1, 2, 3, 4, 5, 6].map((dayOffset) => {
                const day = 23 + dayOffset > 28 ? dayOffset - 5 : 23 + dayOffset;
                const dayEvents = events.filter((event) => event.day === day);
                return (
                  <div key={`day-${day}`} className="bg-white min-h-[500px] relative">
                    {dayEvents.map((event, index) => {
                      const startHour = parseInt(event.time.split(':')[0]);
                      const topPosition = (startHour - 8) * 60 + parseInt(event.time.split(':')[1]);
                      const duration = 90; // minutes
                      return (
                        <div
                          key={event.id}
                          className={`absolute left-1 right-1 px-2 py-1 rounded-md text-xs ${event.color}`}
                          style={{
                            top: `${topPosition}px`,
                            height: `${duration}px`,
                          }}
                        >
                          <div className="font-medium">{event.title}</div>
                          <div>{event.time}</div>
                        </div>
                      );
                    })}
                    {/* Time indicators */}
                    {[9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
                      <div
                        key={`hour-${hour}`}
                        className="absolute left-0 right-0 border-t border-gray-100 text-xs text-gray-500 -ml-1"
                        style={{ top: `${(hour - 8) * 60}px` }}
                      >
                        {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Day View */}
        {view === 'day' && (
          <div className="bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="text-center">
                <div className="text-lg font-semibold">Tuesday, February 25, 2025</div>
              </div>
            </div>
            <div className="grid grid-cols-1 min-h-[600px] relative p-4">
              {/* Time slots */}
              {[9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
                <div
                  key={`hour-${hour}`}
                  className="border-t border-gray-200 py-4 relative"
                >
                  <div className="absolute -mt-2.5 -ml-4 text-xs text-gray-500">
                    {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}
                  </div>
                </div>
              ))}

              {/* Events for Feb 25 */}
              {events
                .filter((event) => event.day === 25)
                .map((event) => {
                  const startHour = parseInt(event.time.split(':')[0]);
                  const topPosition = (startHour - 8) * 60 + parseInt(event.time.split(':')[1]);
                  const duration = 60; // minutes
                  return (
                    <div
                      key={event.id}
                      className={`absolute left-16 right-4 px-4 py-2 rounded-md ${event.color}`}
                      style={{
                        top: `${topPosition}px`,
                        height: `${duration}px`,
                      }}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm">{event.time}</div>
                      <div className="text-sm mt-1">{event.location}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {events
                .filter((event) => new Date(event.date) >= new Date('2025-02-25'))
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(0, 3)
                .map((event) => (
                  <li key={event.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 ${event.color.split(' ')[0]}`}></div>
                          <p className="text-sm font-medium text-primary-600 truncate">{event.title}</p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${event.color}`}>
                            {event.date}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                            {event.case}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {event.time}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {event.location}
                        </div>
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
