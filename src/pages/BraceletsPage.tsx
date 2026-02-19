import { useRef } from 'react';
import { products } from '../data/products';

export default function BraceletsPage() {
  const collectionRef = useRef<HTMLDivElement>(null);

  const bracelets = products.filter((p) => p.collection === 'bracelets');

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      title: 'أناقة خالدة',
      titleEn: 'Timeless Elegance',
      desc: 'تصاميم لا تخضع لقواعد الموضة، بل تتجاوزها',
    },
    {
      title: 'خامات فاخرة',
      titleEn: 'Premium Materials',
      desc: 'نحاس مطلي بعناية، مقاوم لتغير اللون مع الزمن',
    },
    {
      title: 'حضور واثق',
      titleEn: 'Confident Presence',
      desc: 'قطعة تُضاف إلى أسلوبك دون ضجيج، بثقة كاملة',
    },
    {
      title: 'مصممة للجنسين',
      titleEn: 'For Him & Her',
      desc: 'تناسب كل معصم بفضل تصميمها القابل للتعديل',
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Amiri', serif" }}
      dir="rtl"
    >
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #e7ddcc 40%, #f0ebe0 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #243247 1px, transparent 1px), radial-gradient(circle at 80% 20%, #243247 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col gap-8">
            <div>
              <p
                className="text-xs tracking-widest uppercase text-[#243247] mb-4 opacity-60"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
              >
                التشكيلة الأساسية
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#243247] leading-tight mb-6"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ORZI
                <br />
                <span className="text-3xl md:text-4xl font-normal opacity-80">Heritage Bracelets</span>
              </h1>
              <p className="text-xl text-[#243247] opacity-75 leading-relaxed mb-3">
                من أصالة الماضي إلى معصمك
              </p>
              <p className="text-base text-[#243247] opacity-55 leading-loose max-w-md">
                ثلاثة تصاميم. فلسفة واحدة. حضور لا يُنسى.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToCollection}
                className="px-10 py-4 bg-[#243247] text-[#e7ddcc] font-semibold rounded-none transition-all duration-400 hover:bg-[#1a2b3c] hover:shadow-xl hover:-translate-y-0.5"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', fontSize: '0.85rem' }}
              >
                اكتشف التشكيلة
              </button>
              <button
                onClick={() => window.close()}
                className="px-10 py-4 border border-[#243247] text-[#243247] font-semibold rounded-none transition-all duration-400 hover:bg-[#243247] hover:text-[#e7ddcc]"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', fontSize: '0.85rem' }}
              >
                ORZI 1998
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-sm overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/curved1.jpg"
                  alt="ORZI Heritage Bracelets"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-sm overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src="/straight1.jpg"
                  alt="AURA Bracelet"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-sm overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src="/curvedgold1.jpg"
                  alt="SOPHIA Bracelet"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-[#243247] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* COLLECTION SHOWCASE */}
      <section ref={collectionRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p
              className="text-xs tracking-widest uppercase text-[#243247] mb-4 opacity-50"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
            >
              Collection
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#243247]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              التشكيلة الكاملة
            </h2>
            <div className="w-16 h-px bg-[#243247] opacity-30 mx-auto mt-6" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {bracelets.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  index % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''
                }`}
                style={index % 2 === 1 ? { display: 'grid', direction: 'ltr' } : {}}
              >
                <div className="group relative overflow-hidden rounded-sm" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#243247] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                </div>

                <div className={`flex flex-col gap-6 ${index % 2 === 1 ? 'text-right' : ''}`} dir="rtl">
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase text-[#243247] mb-3 opacity-50"
                      style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
                    >
                      ORZI 1998
                    </p>
                    <h3
                      className="text-4xl md:text-5xl font-bold text-[#243247] mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {product.name}
                    </h3>
                    <div className="w-10 h-px bg-[#243247] opacity-30 mb-6" />
                  </div>

                  <p className="text-lg text-[#243247] opacity-70 leading-relaxed">
                    {product.descriptionAr}
                  </p>

                  <div className="space-y-3 py-6 border-t border-b border-[#243247] border-opacity-10">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#243247] opacity-50">الخامة</span>
                      <span className="text-[#243247] opacity-80">{product.specs.materialAr}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#243247] opacity-50">اللون</span>
                      <span className="text-[#243247] opacity-80">{product.specs.colorAr}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#243247] opacity-50">المقاس</span>
                      <span className="text-[#243247] opacity-80">{product.specs.sizeAr}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#243247]" style={{ fontFamily: "'Cinzel', serif" }}>
                      {product.price} جنيه
                    </span>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {product.images.map((img, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 rounded-sm overflow-hidden border border-[#243247] border-opacity-10 cursor-pointer hover:border-opacity-40 transition-all duration-300"
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA AFTER COLLECTION */}
      <section className="py-16 bg-[#e7ddcc]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[#243247] opacity-60 mb-6 text-lg">
            اختر قطعتك من التشكيلة الأساسية
          </p>
          <a
            href="/"
            className="inline-block px-12 py-4 bg-[#243247] text-[#e7ddcc] font-semibold transition-all duration-400 hover:bg-[#1a2b3c] hover:shadow-xl hover:-translate-y-0.5"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', fontSize: '0.85rem' }}
          >
            أُطلب الآن
          </a>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-3"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(36,50,71,0.04) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#243247] mb-6 opacity-50"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
          >
            Craftsmanship
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-12" style={{ lineHeight: '1.7' }}>
            وُلِدت من التِراث،<br />صُنِعت للهوية
          </h2>
          <div className="w-16 h-px bg-[#243247] opacity-20 mx-auto mb-12" />
          <div className="space-y-8 text-lg text-[#243247] opacity-65 leading-loose font-light">
            <p>
              كل إسورة من تشكيلة ORZI تحمل فلسفة واحدة — أن الأناقة الحقيقية لا تُصرَخ، بل تُشعر.
            </p>
            <p>
              نستلهم من حقبة كان فيها الحضور هادئاً لكنه لا يُنسى، والتفاصيل بسيطة لكنها تترك أثراً دائماً.
            </p>
            <p>
              نحاس مصقول، طلاء مدروس، ومقاس قابل للتعديل — لأن كل معصم يستحق ما يناسبه تماماً.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32" style={{ background: 'rgba(36, 50, 71, 0.04)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-[#243247] mb-4 opacity-50"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
            >
              Why ORZI
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#243247]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              ما يجعل ORZI مختلفة
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-8 text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-8 h-px bg-[#243247] opacity-20 mx-auto mb-6 group-hover:opacity-40 transition-opacity" />
                <p
                  className="text-xs tracking-widest uppercase text-[#243247] opacity-40 mb-3"
                  style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.2em' }}
                >
                  {b.titleEn}
                </p>
                <h3 className="text-lg font-bold text-[#243247] mb-4">{b.title}</h3>
                <p className="text-sm text-[#243247] opacity-55 leading-loose">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: '#243247' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(45deg, #e7ddcc 25%, transparent 25%), linear-gradient(-45deg, #e7ddcc 25%, transparent 25%)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#e7ddcc] mb-6 opacity-50"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
          >
            ORZI 1998
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#e7ddcc] mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            .خالد. راقٍ. أصيل
          </h2>
          <p className="text-[#e7ddcc] opacity-55 mb-12 text-lg leading-loose">
            قطعة تُورَّث، لا تُستبدل
          </p>
          <a
            href="/"
            className="inline-block px-14 py-5 bg-[#e7ddcc] text-[#243247] font-semibold transition-all duration-400 hover:bg-white hover:shadow-2xl hover:-translate-y-0.5"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.12em', fontSize: '0.875rem' }}
          >
            أُطلب قطعتك الآن
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#243247] border-t border-[#e7ddcc] border-opacity-10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#e7ddcc] opacity-40 text-sm"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            © {new Date().getFullYear()} Orzi-1998
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/orzi.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e7ddcc] opacity-40 hover:opacity-80 transition-opacity text-sm"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@orzi.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e7ddcc] opacity-40 hover:opacity-80 transition-opacity text-sm"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
