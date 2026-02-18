import { Helmet } from 'react-helmet-async';

export default function RefundPolicyPage() {
  return (
    <>
      <Helmet><title>Refund Policy - Yunai Academy</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Free Courses</h2>
            <p>All courses currently offered on Yunai Academy are free of charge. No refund policy applies to free content.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Future Paid Courses</h2>
            <p>When paid courses are introduced, the following refund policy will apply:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Full refund within 7 days of purchase if less than 30% of course content has been accessed</li>
              <li>No refund after 7 days or after accessing more than 30% of course content</li>
              <li>Refund requests can be submitted via email to support@yunaiacademy.com</li>
              <li>Refunds will be processed within 7-10 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact</h2>
            <p>For refund inquiries, contact us at <a href="mailto:support@yunaiacademy.com" className="text-primary-600 hover:text-primary-700">support@yunaiacademy.com</a>.</p>
          </section>
        </div>
      </div>
    </>
  );
}
