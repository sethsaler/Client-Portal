import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to the Legal Services Client Portal
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl">
          Securely access your case information, communicate with attorneys, manage documents, 
          schedule meetings, and receive updates on your legal matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/auth/login" 
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
          >
            Login to Your Account
          </Link>
          <Link 
            href="/auth/register" 
            className="px-6 py-3 bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 rounded-md font-medium transition-colors"
          >
            Register New Account
          </Link>
        </div>
        
        {/* Testing link - remove in production */}
        <div className="mt-8">
          <Link 
            href="/dashboard" 
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium transition-colors"
          >
            Skip Authentication (Testing Only)
          </Link>
        </div>
      </div>
    </main>
  )
}
