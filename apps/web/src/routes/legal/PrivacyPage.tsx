import { Helmet } from 'react-helmet-async';

export default function PrivacyPage() {
  return (
    <>
      <Helmet><title>Privacy Policy - Yunai Academy</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide during registration (name, email), learning activity data (course progress, quiz scores), and technical data (IP address, browser type) to improve our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. How We Use Your Data</h2>
            <p>We use your data to provide and personalize educational services, track learning progress, power AI recommendations, send important notifications, and improve the Platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. AI and Data Processing</h2>
            <p>When you use the AI Tutor, your messages are processed by Google's Gemini AI to generate responses. We store chat history to improve your learning experience. You can delete your chat history at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with service providers (hosting, AI, analytics) who are bound by confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures including encryption, secure authentication, and access controls to protect your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, delete your personal data, and export your learning records. Contact us to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Cookies</h2>
            <p>We use essential cookies for authentication and optional analytics cookies. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Contact</h2>
            <p>For privacy inquiries, contact us at <a href="mailto:privacy@yunaiacademy.com" className="text-primary-600 hover:text-primary-700">privacy@yunaiacademy.com</a>.</p>
          </section>
        </div>
      </div>
    </>
  );
}
