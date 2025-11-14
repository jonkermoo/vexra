import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl">📚</div>
            <h1 className="text-xl font-bold text-white">Lexra</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-blue-400 font-medium hover:text-blue-300 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Learn Smarter with AI-Powered Textbooks
          </h2>
          <p className="text-xl text-gray-300">
            Upload your textbooks and ask questions. Get instant, accurate
            answers with page references.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6 hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">📤</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Upload PDFs</h3>
            <p className="text-gray-400">
              Upload your textbook PDFs and let our AI process them into
              searchable content.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6 hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Ask Questions</h3>
            <p className="text-gray-400">
              Ask any question about your textbook and get detailed answers
              powered by GPT-4.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg p-6 hover:border-blue-500/50 transition">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Page References</h3>
            <p className="text-gray-400">
              Every answer includes exact page numbers and excerpts from your
              textbook.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
          >
            Get Started Free
          </button>
        </div>
      </main>
    </div>
  );
}
