'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('E-posta veya şifre hatalı');
      } else {
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-accent mb-2">MAX BEY</h1>
          <p className="text-muted">Admin Paneli</p>
        </div>

        <Card>
          <h2 className="text-2xl font-bold text-foreground mb-6">Admin Girişi</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-md">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="E-posta"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@maxbey.com"
              fullWidth
              required
            />

            <Input
              label="Şifre"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted text-center">
              Demo Kullanıcı: admin@maxbey.com / admin123
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <a href="/" className="text-muted hover:text-accent transition-colors text-sm">
            ← Anasayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}
