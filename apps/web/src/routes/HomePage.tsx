import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  GraduationCap,
  Brain,
  BarChart3,
  Trophy,
  Users,
  BookOpen,
  Bot,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const features = [
  {
    icon: BookOpen,
    title: 'Expert-Led Courses',
    description: 'Learn from experienced CAs and professors covering Foundation, Intermediate, and Final levels.',
  },
  {
    icon: Bot,
    title: 'AI Tutor',
    description: 'Get instant doubt resolution with our AI-powered tutor available 24/7 for personalized help.',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Smart algorithms adjust difficulty and recommend content based on your performance.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Track your learning journey with detailed charts, quiz scores, and completion metrics.',
  },
  {
    icon: Trophy,
    title: 'Certificates',
    description: 'Earn verifiable certificates upon course completion to showcase your achievements.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with fellow CA aspirants, share knowledge, and learn together.',
  },
];

const stats = [
  { value: '500+', label: 'Video Lessons' },
  { value: '50+', label: 'Expert Instructors' },
  { value: '10,000+', label: 'Active Students' },
  { value: '95%', label: 'Pass Rate' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CA Final Student',
    text: 'The AI tutor feature helped me understand complex auditing standards. Cleared my doubts instantly!',
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'CA Intermediate Student',
    text: 'Best platform for CA preparation. The adaptive quizzes really helped me identify my weak areas.',
    rating: 5,
  },
  {
    name: 'Sneha Gupta',
    role: 'CA Foundation Student',
    text: 'Clean interface, amazing content, and the progress tracking keeps me motivated every day.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Yunai Academy - CA Adaptive Pro | Master Your CA Exams with AI</title>
        <meta name="description" content="AI-powered adaptive learning platform for Chartered Accountancy exams. Expert courses, smart assessments, and personalized tutoring." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
              <Brain className="h-4 w-4" />
              AI-Powered Adaptive Learning
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Master Your CA Exams with <span className="text-yellow-300">Intelligent Learning</span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-100 mb-8 max-w-2xl">
              Prepare smarter with AI-driven courses, adaptive assessments, and a personal tutor that understands your learning style. Join thousands of successful CA aspirants.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                  Start Learning Free <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Crack CA
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A complete learning ecosystem designed specifically for CA aspirants, powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} hover>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Courses for Every CA Level
            </h2>
            <p className="text-lg text-gray-500">Structured courses aligned with the latest ICAI syllabus</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { level: 'CA Foundation', description: 'Build your base with Accounting, Law, Maths & Economics', color: 'from-blue-500 to-blue-700' },
              { level: 'CA Intermediate', description: 'Deep dive into Tax, Audit, Cost Accounting & more', color: 'from-purple-500 to-purple-700' },
              { level: 'CA Final', description: 'Master advanced topics for the ultimate CA challenge', color: 'from-orange-500 to-orange-700' },
            ].map((cat) => (
              <Link
                key={cat.level}
                to={`/courses?category=${encodeURIComponent(cat.level)}`}
                className="group"
              >
                <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-8 text-white group-hover:scale-105 transition-transform`}>
                  <GraduationCap className="h-10 w-10 mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">{cat.level}</h3>
                  <p className="text-white/80">{cat.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium">
                    Explore courses <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Loved by CA Students</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your CA Journey?</h2>
          <p className="text-primary-100 text-lg mb-8">
            Join Yunai Academy today and get access to AI-powered learning tools, expert courses, and a supportive community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View All Courses
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-primary-200">
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Free to start</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> AI tutor included</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  );
}
