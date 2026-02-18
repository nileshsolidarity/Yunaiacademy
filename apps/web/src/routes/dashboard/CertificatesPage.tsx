import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Download, ExternalLink } from 'lucide-react';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';

export default function CertificatesPage() {
  const { user } = useAuth();
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const { data } = await api.get('/certificates');
        setCertificates(data.data || []);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchCerts();
  }, []);

  const handleDownload = async (cert: any) => {
    // Create a printable certificate
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head><title>Certificate - ${cert.course?.title}</title>
      <style>
        body { font-family: Georgia, serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #f9fafb; }
        .cert { width: 800px; padding: 60px; background: white; border: 3px solid #1e40af; position: relative; text-align: center; }
        .cert::before { content: ''; position: absolute; top: 10px; left: 10px; right: 10px; bottom: 10px; border: 1px solid #93c5fd; }
        h1 { color: #1e40af; font-size: 36px; margin-bottom: 10px; }
        .subtitle { color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; }
        .name { font-size: 28px; color: #111; margin: 30px 0; border-bottom: 2px solid #1e40af; display: inline-block; padding-bottom: 5px; }
        .course { font-size: 18px; color: #374151; margin: 20px 0; }
        .details { font-size: 12px; color: #9ca3af; margin-top: 40px; }
        @media print { body { background: white; } .cert { border: 3px solid #1e40af; } }
      </style></head>
      <body>
        <div class="cert">
          <div class="subtitle">Certificate of Completion</div>
          <h1>Yunai Academy</h1>
          <p style="color: #6b7280;">This certifies that</p>
          <div class="name">${user?.name}</div>
          <div class="course">has successfully completed the course<br/><strong>${cert.course?.title}</strong></div>
          <div class="details">
            Certificate No: ${cert.certificateNumber}<br/>
            Date: ${new Date(cert.issuedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </body></html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  if (loading) return <div className="flex justify-center py-20"><Spinner size="lg" /></div>;

  return (
    <>
      <Helmet><title>My Certificates - Yunai Academy</title></Helmet>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">My Certificates</h1>
      <p className="text-gray-500 mb-8">Certificates earned upon course completion</p>

      {certificates.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Award className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h3>
            <p className="text-gray-500">Complete a course to earn your first certificate!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert: any) => (
            <Card key={cert.id} hover>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-7 w-7 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{cert.course?.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Issued: {new Date(cert.issuedAt).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 font-mono">#{cert.certificateNumber}</p>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" onClick={() => handleDownload(cert)}>
                        <Download className="h-3 w-3" /> Download
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-3 w-3" /> Verify
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
