import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@maxbey.com' },
    update: {},
    create: {
      email: 'admin@maxbey.com',
      passwordHash: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'spor-bahisleri' },
      update: {},
      create: {
        name: 'Spor Bahisleri',
        slug: 'spor-bahisleri',
        description: 'Futbol, basketbol ve daha fazla spor dalında bahis imkanı sunan güvenilir siteler.',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'casino' },
      update: {},
      create: {
        name: 'Casino',
        slug: 'casino',
        description: 'Slot, rulet, blackjack ve daha fazla casino oyunu sunan lisanslı siteler.',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'canli-casino' },
      update: {},
      create: {
        name: 'Canlı Casino',
        slug: 'canli-casino',
        description: 'Gerçek krupiyelerle canlı casino deneyimi sunan platformlar.',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'slot-oyunlari' },
      update: {},
      create: {
        name: 'Slot Oyunları',
        slug: 'slot-oyunlari',
        description: 'Binlerce farklı slot oyunu seçeneği ile eğlence dolu platformlar.',
      },
    }),
  ]);
  console.log('✅ Categories created:', categories.length);

  // Create tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'hizli-odeme' },
      update: {},
      create: { name: 'Hızlı Ödeme', slug: 'hizli-odeme' },
    }),
    prisma.tag.upsert({
      where: { slug: 'yuksek-oran' },
      update: {},
      create: { name: 'Yüksek Oran', slug: 'yuksek-oran' },
    }),
    prisma.tag.upsert({
      where: { slug: 'mobil-uyumlu' },
      update: {},
      create: { name: 'Mobil Uyumlu', slug: 'mobil-uyumlu' },
    }),
    prisma.tag.upsert({
      where: { slug: 'canli-destek' },
      update: {},
      create: { name: '24/7 Canlı Destek', slug: 'canli-destek' },
    }),
    prisma.tag.upsert({
      where: { slug: 'guvenli-lisans' },
      update: {},
      create: { name: 'Güvenli Lisans', slug: 'guvenli-lisans' },
    }),
    prisma.tag.upsert({
      where: { slug: 'bonus-secenekleri' },
      update: {},
      create: { name: 'Çeşitli Bonus Seçenekleri', slug: 'bonus-secenekleri' },
    }),
  ]);
  console.log('✅ Tags created:', tags.length);

  // Create sites with reviews
  const site1 = await prisma.site.upsert({
    where: { slug: 'betpuan' },
    update: {},
    create: {
      name: 'BetPuan',
      slug: 'betpuan',
      url: 'https://example.com/betpuan',
      logoUrl: '/logos/betpuan.png',
      rating: 9.2,
      shortDescription: 'Türkiye\'nin en güvenilir spor bahis sitelerinden biri. Yüksek oranlar ve hızlı ödeme.',
      longDescription: `BetPuan, 2015 yılından beri Türk kullanıcılara hizmet veren güvenilir bir bahis platformudur.
Curacao lisansı ile yasal olarak faaliyet gösteren site, özellikle futbol bahisleri konusunda yüksek oranlar sunmaktadır.

Platform, kullanıcı dostu arayüzü ve mobil uyumlu yapısı ile her yerden bahis yapma imkanı sağlar.
Papara, Havale, Kripto para gibi çeşitli ödeme yöntemleri mevcuttur.`,
      welcomeBonusText: 'Hoş geldin bonusu %100, 5000₺\'ye kadar',
      minDeposit: 100,
      isRecommended: true,
      isActive: true,
      categoryId: categories[0].id, // Spor Bahisleri
    },
  });

  await prisma.siteReview.upsert({
    where: { siteId: site1.id },
    update: {},
    create: {
      siteId: site1.id,
      pros: `• Yüksek bahis oranları
• Hızlı para çekme işlemleri (genellikle 24 saat içinde)
• Geniş spor dalları seçeneği
• Mobil uygulama mevcuttur
• 7/24 Türkçe canlı destek`,
      cons: `• Bonus çevrim şartları biraz yüksek
• Casino oyun seçenekleri sınırlı
• Bazı ödeme yöntemlerinde komisyon alınabilir`,
      summary: 'BetPuan, özellikle spor bahisleri seven kullanıcılar için ideal bir platform. Güvenilir, hızlı ve yüksek oranlı.',
    },
  });

  const site2 = await prisma.site.upsert({
    where: { slug: 'casinomaxbet' },
    update: {},
    create: {
      name: 'CasinoMaxBet',
      slug: 'casinomaxbet',
      url: 'https://example.com/casinomaxbet',
      logoUrl: '/logos/casinomaxbet.png',
      rating: 8.8,
      shortDescription: 'Binlerce slot oyunu ve canlı casino seçeneği ile dolu zengin casino platformu.',
      longDescription: `CasinoMaxBet, casino oyunları tutkunları için tasarlanmış özel bir platformdur.
Evolution Gaming, Pragmatic Play, NetEnt gibi önde gelen sağlayıcıların oyunlarına ev sahipliği yapar.

Canlı casino bölümünde gerçek krupiyelerle rulet, blackjack, baccarat ve poker oynayabilirsiniz.
Slot seçenekleri ise 2000'den fazla farklı oyun içermektedir.`,
      welcomeBonusText: 'İlk yatırıma %150 bonus + 100 free spin',
      minDeposit: 50,
      isRecommended: true,
      isActive: true,
      categoryId: categories[1].id, // Casino
    },
  });

  await prisma.siteReview.upsert({
    where: { siteId: site2.id },
    update: {},
    create: {
      siteId: site2.id,
      pros: `• 2000+ slot oyunu
• Canlı krupiyelerle casino deneyimi
• Düşük minimum yatırım tutarı
• Çeşitli bonus kampanyaları
• Mobil uyumlu tasarım`,
      cons: `• Spor bahisleri bölümü zayıf
• Bazı oyunlar Türkiye'den erişime kapalı olabiliyor
• Müşteri hizmetleri bazen yavaş yanıt verebiliyor`,
      summary: 'Casino oyunları için harika bir seçenek. Geniş oyun yelpazesi ve kaliteli canlı casino deneyimi sunuyor.',
    },
  });

  const site3 = await prisma.site.upsert({
    where: { slug: 'goldenbahis' },
    update: {},
    create: {
      name: 'GoldenBahis',
      slug: 'goldenbahis',
      url: 'https://example.com/goldenbahis',
      logoUrl: '/logos/goldenbahis.png',
      rating: 9.0,
      shortDescription: 'Spor bahisleri ve canlı casino bir arada. Yüksek güvenlik standartları.',
      longDescription: `GoldenBahis, hem spor bahisleri hem de casino oyunları konusunda dengeli bir deneyim sunar.
Malta Gaming Authority lisansına sahip olan platform, uluslararası güvenlik standartlarına uygun çalışır.

Özellikle canlı bahis bölümü çok gelişmiştir. Maç içi istatistikler ve anlık oran değişimleri ile
bahis deneyiminizi üst seviyeye taşır. Ayrıca sanal sporlar ve e-spor bahisleri de mevcuttur.`,
      welcomeBonusText: '%100 hoş geldin bonusu, 3000₺\'ye kadar + %10 casino cashback',
      minDeposit: 100,
      isRecommended: true,
      isActive: true,
      categoryId: categories[0].id, // Spor Bahisleri
    },
  });

  await prisma.siteReview.upsert({
    where: { siteId: site3.id },
    update: {},
    create: {
      siteId: site3.id,
      pros: `• Malta Gaming Authority lisansı
• Hem spor hem casino güçlü
• E-spor bahisleri mevcut
• Haftalık cashback kampanyaları
• SSL şifreleme ile güvenli işlemler`,
      cons: `• Minimum yatırım tutarı biraz yüksek
• Bonus çevrim şartları detaylı okunmalı
• Bazı ödeme yöntemlerinde limit var`,
      summary: 'Güvenlik ve çeşitlilik arayan kullanıcılar için mükemmel bir seçim. Lisanslı ve güvenilir.',
    },
  });

  const site4 = await prisma.site.upsert({
    where: { slug: 'slotturk' },
    update: {},
    create: {
      name: 'SlotTürk',
      slug: 'slotturk',
      url: 'https://example.com/slotturk',
      logoUrl: '/logos/slotturk.png',
      rating: 8.5,
      shortDescription: 'Slot oyunları odaklı platform. Her gün yeni oyunlar ekleniyor.',
      longDescription: `SlotTürk, adından da anlaşılacağı gibi slot oyunlarına odaklanmış bir casino platformudur.
Pragmatic Play, Play'n GO, Microgaming gibi dev yazılım sağlayıcılarının en popüler oyunlarını barındırır.

Megaways slotları, jackpot oyunları ve klasik slot seçenekleri ile her zevke uygun oyunlar mevcut.
Demo mod özelliği sayesinde para yatırmadan oyunları deneyebilirsiniz.`,
      welcomeBonusText: '%200 ilk yatırım bonusu + 200 free spin',
      minDeposit: 50,
      isRecommended: false,
      isActive: true,
      categoryId: categories[3].id, // Slot Oyunları
    },
  });

  await prisma.siteReview.upsert({
    where: { siteId: site4.id },
    update: {},
    create: {
      siteId: site4.id,
      pros: `• Çok geniş slot oyunu seçeneği
• Demo modda ücretsiz deneme
• Yüksek bonuslar
• Düşük minimum yatırım
• Günlük free spin kampanyaları`,
      cons: `• Spor bahisleri yok
• Canlı destek sadece belli saatlerde
• Bazı oyunlar yükleme konusunda yavaş olabiliyor`,
      summary: 'Slot tutkunları için cennet gibi bir platform. Çeşitlilik ve bonuslar açısından çok iyi.',
    },
  });

  const site5 = await prisma.site.upsert({
    where: { slug: 'livecasino-plus' },
    update: {},
    create: {
      name: 'LiveCasino Plus',
      slug: 'livecasino-plus',
      url: 'https://example.com/livecasino-plus',
      logoUrl: '/logos/livecasinoplus.png',
      rating: 8.9,
      shortDescription: 'Türkçe krupiyelerle canlı casino deneyimi. VIP masalar mevcut.',
      longDescription: `LiveCasino Plus, canlı casino konusunda uzmanlaşmış bir platformdur.
Evolution Gaming altyapısı ile Türkçe konuşan krupiyeler eşliğinde oyun oynama imkanı sunar.

VIP seviye kullanıcılar için özel masalar, yüksek limitli oyunlar ve kişisel hesap yöneticisi hizmeti mevcuttur.
Immersive Roulette, Lightning Dice, Crazy Time gibi popüler oyunlar portföyde yer alır.`,
      welcomeBonusText: '%100 canlı casino bonusu, 4000₺\'ye kadar',
      minDeposit: 100,
      isRecommended: true,
      isActive: true,
      categoryId: categories[2].id, // Canlı Casino
    },
  });

  await prisma.siteReview.upsert({
    where: { siteId: site5.id },
    update: {},
    create: {
      siteId: site5.id,
      pros: `• Türkçe krupiyeler
• Evolution Gaming kalitesi
• VIP program ve özel masalar
• 7/24 canlı casino oyunları
• Hızlı ve güvenli ödeme`,
      cons: `• Sadece canlı casino odaklı, slot seçeneği az
• Minimum yatırım tutarı ortalama
• Bonus çevrim şartları sadece canlı casino oyunlarında geçerli`,
      summary: 'Canlı casino severler için ideal bir platform. Türkçe krupiyeler ve yüksek kalite dikkat çekiyor.',
    },
  });

  // Connect sites to tags
  const [hizliOdeme, yuksekOran, mobilUyumlu, canliDestek, guvenliLisans, bonusSecenekleri] = tags;

  await prisma.siteTag.createMany({
    data: [
      // BetPuan tags
      { siteId: site1.id, tagId: hizliOdeme.id },
      { siteId: site1.id, tagId: yuksekOran.id },
      { siteId: site1.id, tagId: mobilUyumlu.id },
      { siteId: site1.id, tagId: canliDestek.id },

      // CasinoMaxBet tags
      { siteId: site2.id, tagId: mobilUyumlu.id },
      { siteId: site2.id, tagId: bonusSecenekleri.id },

      // GoldenBahis tags
      { siteId: site3.id, tagId: hizliOdeme.id },
      { siteId: site3.id, tagId: yuksekOran.id },
      { siteId: site3.id, tagId: mobilUyumlu.id },
      { siteId: site3.id, tagId: guvenliLisans.id },
      { siteId: site3.id, tagId: canliDestek.id },

      // SlotTürk tags
      { siteId: site4.id, tagId: mobilUyumlu.id },
      { siteId: site4.id, tagId: bonusSecenekleri.id },

      // LiveCasino Plus tags
      { siteId: site5.id, tagId: hizliOdeme.id },
      { siteId: site5.id, tagId: canliDestek.id },
      { siteId: site5.id, tagId: guvenliLisans.id },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Sites and tags connected');
  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
