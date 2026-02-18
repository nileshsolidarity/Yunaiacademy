import { Helmet } from 'react-helmet-async';
import { Target, Users, Brain, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Yunai Academy</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Yunai Academy</h1>
        <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          We're on a mission to revolutionize CA exam preparation through AI-powered adaptive learning.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Target, title: 'Our Mission', description: 'To make quality CA education accessible to every aspiring Chartered Accountant through technology and expert instruction.' },
            { icon: Brain, title: 'AI-First Approach', description: 'We leverage Google AI to personalize learning paths, provide instant tutoring, and create adaptive assessments.' },
            { icon: Users, title: 'Expert Faculty', description: 'Our instructors are practicing CAs with decades of teaching experience across all CA levels.' },
            { icon: Award, title: 'Proven Results', description: 'Our students consistently achieve above-average pass rates across CA Foundation, Intermediate, and Final exams.' },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6">
                <item.icon className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to know more?</h2>
          <p className="text-gray-500">
            Reach out to us at{' '}
            <a href="mailto:info@yunaiacademy.com" className="text-primary-600 hover:text-primary-700">
              info@yunaiacademy.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
