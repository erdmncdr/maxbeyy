import Link from 'next/link';

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">MAX BEY</h3>
            <p className="text-muted text-sm leading-relaxed">
              Max Bey, çevrim içi siteler hakkında genel bilgilendirme sunar.
              Oyun oynamadan önce riskleri göz önünde bulundurun.
            </p>
            <div className="flex items-center space-x-2 text-accent font-semibold">
              <span className="text-2xl">18+</span>
              <span className="text-sm">Sorumlu oyun oynayın</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-accent transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/sites" className="text-muted hover:text-accent transition-colors">
                  Güvenilir Siteler
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-accent transition-colors">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-accent transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Yasal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted hover:text-accent transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted hover:text-accent transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="text-muted hover:text-accent transition-colors">
                  KVKK
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-muted hover:text-accent transition-colors">
                  Sorumlu Oyun
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-muted text-xs leading-relaxed mb-4">
            <strong>Uyarı:</strong> Bu sitede yer alan bilgiler yalnızca genel bilgilendirme amaçlıdır.
            Online bahis ve casino oyunları 18 yaşından büyük kişiler için uygundur.
            Kumar bağımlılığı ciddi bir sorundur. Sorumlu bir şekilde oynayın ve
            kaybetmeyi göze alamayacağınız parayla asla oynamayın.
          </p>
          <p className="text-center text-muted text-sm">
            © {currentYear} Max Bey. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
