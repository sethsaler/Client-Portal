'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(0);

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      contact: 'Jane Attorney',
      avatar: 'JA',
      lastMessage: 'I've reviewed the settlement offer and have some thoughts to share.',
      timestamp: '10:45 AM',
      unread: true,
      case: 'Smith v. Corporation',
      messages: [
        {
          id: 1,
          sender: 'Jane Attorney',
          content: 'Good morning. I've reviewed the settlement offer from the opposing counsel.',
          timestamp: 'Yesterday, 9:30 AM',
          isUser: false,
        },
        {
          id: 2,
          sender: 'You',
          content: 'Thank you for looking into this. What are your thoughts?',
          timestamp: 'Yesterday, 10:15 AM',
          isUser: true,
        },
        {
          id: 3,
          sender: 'Jane Attorney',
          content: 'I've reviewed the settlement offer and have some thoughts to share. The initial amount is lower than we anticipated, but there are some favorable terms regarding future medical expenses.',
          timestamp: 'Today, 10:45 AM',
          isUser: false,
        },
      ],
    },
    {
      id: 2,
      contact: 'John Lawyer',
      avatar: 'JL',
      lastMessage: 'We need to schedule a meeting to discuss the estate planning documents.',
      timestamp: 'Yesterday',
      unread: false,
      case: 'Estate of Johnson',
      messages: [
        {
          id: 1,
          sender: 'John Lawyer',
          content: 'Hello, I've prepared the initial draft of your will and trust documents.',
          timestamp: 'Feb 20, 2:15 PM',
          isUser: false,
        },
        {
          id: 2,
          sender: 'You',
          content: 'Thank you. When can we review these together?',
          timestamp: 'Feb 20, 3:30 PM',
          isUser: true,
        },
        {
          id: 3,
          sender: 'John Lawyer',
          content: 'We need to schedule a meeting to discuss the estate planning documents. Are you available next Tuesday at 10 AM?',
          timestamp: 'Yesterday, 11:20 AM',
          isUser: false,
        },
      ],
    },
    {
      id: 3,
      contact: 'Sarah Counsel',
      avatar: 'SC',
      lastMessage: 'The court date for the divorce hearing has been set for March 15.',
      timestamp: 'Feb 20',
      unread: false,
      case: 'Davis Divorce Settlement',
      messages: [
        {
          id: 1,
          sender: 'Sarah Counsel',
          content: 'I wanted to let you know that we've received a response from your spouse's attorney regarding the division of assets.',
          timestamp: 'Feb 18, 1:45 PM',
          isUser: false,
        },
        {
          id: 2,
          sender: 'You',
          content: 'What did they say about the house?',
          timestamp: 'Feb 18, 2:30 PM',
          isUser: true,
        },
        {
          id: 3,
          sender: 'Sarah Counsel',
          content: 'They're proposing a buyout option. Also, the court date for the divorce hearing has been set for March 15.',
          timestamp: 'Feb 20, 9:15 AM',
          isUser: false,
        },
      ],
    },
    {
      id: 4,
      contact: 'Michael Attorney',
      avatar: 'MA',
      lastMessage: 'The property dispute case has been closed. All documents are finalized.',
      timestamp: 'Jan 15',
      unread: false,
      case: 'Williams Property Dispute',
      messages: [
        {
          id: 1,
          sender: 'Michael Attorney',
          content: 'Good news! The opposing party has agreed to our settlement terms.',
          timestamp: 'Jan 10, 11:30 AM',
          isUser: false,
        },
        {
          id: 2,
          sender: 'You',
          content: 'That's excellent news. What are the next steps?',
          timestamp: 'Jan 10, 12:45 PM',
          isUser: true,
        },
        {
          id: 3,
          sender: 'Michael Attorney',
          content: 'We'll need to finalize the paperwork. I'll prepare everything and send it over for your signature.',
          timestamp: 'Jan 12, 10:20 AM',
          isUser: false,
        },
        {
          id: 4,
          sender: 'Michael Attorney',
          content: 'The property dispute case has been closed. All documents are finalized.',
          timestamp: 'Jan 15, 3:15 PM',
          isUser: false,
        },
      ],
    },
  ];

  const activeMessages = conversations[activeConversation]?.messages || [];

  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-10rem)] overflow-hidden rounded-lg bg-white shadow">
        {/* Conversation List */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                  activeConversation === index ? 'bg-gray-50' : ''
                }`}
                onClick={() => setActiveConversation(index)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      {conversation.avatar}
                    </span>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${conversation.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                        {conversation.contact}
                      </p>
                      <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{conversation.case}</p>
                    <p className={`text-sm mt-1 line-clamp-1 ${conversation.unread ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="ml-2 flex-shrink-0">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary-600"></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Content */}
        <div className="w-2/3 flex flex-col">
          {/* Conversation Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                {conversations[activeConversation]?.avatar}
              </span>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{conversations[activeConversation]?.contact}</p>
                <p className="text-xs text-gray-500">{conversations[activeConversation]?.case}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {activeMessages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-md rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-100' : 'text-gray-500'}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ml-2"
              />
              <button
                type="button"
                className="ml-2 inline-flex items-center justify-center rounded-full p-2 text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
