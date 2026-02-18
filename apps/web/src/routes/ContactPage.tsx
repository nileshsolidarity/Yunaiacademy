import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you soon.');
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Yunai Academy</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-500 text-center mb-12">
          Have a question? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, title: 'Email', info: 'info@yunaiacademy.com' },
            { icon: Phone, title: 'Phone', info: '+91-XXX-XXX-XXXX' },
            { icon: MapPin, title: 'Location', info: 'Mumbai, India' },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-6 text-center">
                <item.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Name" placeholder="Your name" required />
                <Input label="Email" type="email" placeholder="you@example.com" required />
              </div>
              <Input label="Subject" placeholder="How can we help?" required />
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us more..."
                  required
                />
              </div>
              <Button type="submit" loading={loading} size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
