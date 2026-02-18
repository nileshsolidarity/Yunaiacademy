import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Yunai Academy?',
    answer: 'Yunai Academy is an AI-powered adaptive learning platform designed specifically for Chartered Accountancy exam preparation. We offer courses for CA Foundation, Intermediate, and Final levels with personalized learning paths, quizzes, and AI tutoring.',
  },
  {
    question: 'Is Yunai Academy free to use?',
    answer: 'Currently, all courses on Yunai Academy are free of charge. We plan to introduce premium paid courses in the future, but many free resources will always remain available.',
  },
  {
    question: 'How does the AI Tutor work?',
    answer: 'Our AI Tutor is powered by advanced AI technology and is specifically trained to assist with CA exam topics. You can ask questions, request explanations, get practice problems, and receive personalized study recommendations. The AI Tutor is available on every lesson page.',
  },
  {
    question: 'Can I get a certificate after completing a course?',
    answer: 'Yes! Once you complete 100% of a course (all lessons and quizzes), you can generate a certificate of completion. Each certificate has a unique verification number that can be publicly verified.',
  },
  {
    question: 'What subjects are covered?',
    answer: 'We cover the entire CA syllabus including Accounting, Taxation, Auditing, Corporate Law, Financial Management, Strategic Management, Cost Accounting, and more. Courses are organized by CA Foundation, Intermediate, and Final levels.',
  },
  {
    question: 'How do quizzes work?',
    answer: 'Each lesson may include quizzes to test your understanding. Quizzes feature multiple-choice questions with optional time limits. After submission, you can see your score, correct answers, and detailed explanations for each question.',
  },
  {
    question: 'Can I track my learning progress?',
    answer: 'Yes! Your student dashboard shows enrolled courses with progress bars, study activity charts, quiz score trends, and completion statistics. You can also see which lessons you have completed within each course.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We take data security seriously. We use industry-standard encryption, secure authentication (JWT tokens), and follow best practices for data protection. Your personal information is never sold to third parties. See our Privacy Policy for full details.',
  },
  {
    question: 'How can I become an instructor?',
    answer: 'If you are a qualified CA professional interested in creating courses on Yunai Academy, please contact us at support@yunaiacademy.com. We review applications and provide instructor access to qualified educators.',
  },
  {
    question: 'What devices can I use?',
    answer: 'Yunai Academy works on any modern web browser across desktops, laptops, tablets, and mobile phones. The platform is fully responsive and optimized for all screen sizes.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet><title>FAQ - Yunai Academy</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Find answers to common questions about Yunai Academy.</p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 bg-white dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Still have questions?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            We're here to help. Reach out to our support team.
          </p>
          <a
            href="mailto:support@yunaiacademy.com"
            className="inline-block px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </>
  );
}
