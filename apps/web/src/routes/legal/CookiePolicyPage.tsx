import { Helmet } from 'react-helmet-async';

export default function CookiePolicyPage() {
  return (
    <>
      <Helmet><title>Cookie Policy - Yunai Academy</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-400">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">Essential Cookies</h2>
            <p>These cookies are necessary for the Platform to function and cannot be switched off. They include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Authentication tokens to keep you logged in</li>
              <li>Session identifiers for security</li>
              <li>Cookie consent preference</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">Analytics Cookies</h2>
            <p>With your consent, we use analytics cookies to understand how visitors interact with the Platform. These help us improve the learning experience. You can opt out of analytics cookies at any time through the cookie banner or your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">Managing Cookies</h2>
            <p>You can manage cookies through your browser settings. Note that disabling essential cookies may affect the functionality of the Platform. To change your cookie preferences, clear your browser data and revisit the site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">Contact</h2>
            <p>For questions about our cookie policy, contact us at <a href="mailto:privacy@yunaiacademy.com" className="text-primary-600 hover:text-primary-700">privacy@yunaiacademy.com</a>.</p>
          </section>
        </div>
      </div>
    </>
  );
}
