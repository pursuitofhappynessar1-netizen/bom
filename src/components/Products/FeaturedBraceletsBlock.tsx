export default function FeaturedBraceletsBlock() {
  const handleClick = () => {
    window.open('/bracelets.html', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
      style={{
        background: '#f9f6f1',
        boxShadow: '0 4px 32px rgba(36, 50, 71, 0.08)',
      }}
      onClick={handleClick}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
        {/* Image Side */}
        <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
          <img
            src="/curved1.jpg"
            alt="ORZI Heritage Bracelets"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ position: 'absolute', inset: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#f9f6f1] via-transparent to-transparent opacity-40" />
          <div
            className="absolute top-6 right-6 text-xs tracking-widest uppercase text-white bg-[#243247] px-4 py-2"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.2em', fontSize: '0.7rem' }}
          >
            التشكيلة الأساسية
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center p-10 md:p-14 gap-8" dir="rtl">
          <div>
            <p
              className="text-xs tracking-widest uppercase text-[#243247] opacity-40 mb-4"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
            >
              ORZI 1998
            </p>
            <h3
              className="text-4xl md:text-5xl font-bold text-[#243247] leading-tight mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Heritage
              <br />
              Bracelets
            </h3>
            <div className="w-10 h-px bg-[#243247] opacity-25 mb-6" />
            <p className="text-lg text-[#243247] opacity-65 leading-relaxed mb-2">
              ثلاثة تصاميم. فلسفة واحدة.
            </p>
            <p className="text-sm text-[#243247] opacity-45 leading-loose max-w-xs">
              Harmonia · Aura · Sophia — كل قطعة تحكي قصة من الأصالة والرقي.
            </p>
          </div>

          <div className="space-y-3 py-6 border-t border-b border-[#243247] border-opacity-10">
            <div className="flex items-center gap-3 text-sm text-[#243247] opacity-60">
              <span className="w-1 h-1 rounded-full bg-[#243247] opacity-40 flex-shrink-0" />
              نحاس مطلي مقاوم لتغير اللون
            </div>
            <div className="flex items-center gap-3 text-sm text-[#243247] opacity-60">
              <span className="w-1 h-1 rounded-full bg-[#243247] opacity-40 flex-shrink-0" />
              مقاس قابل للتعديل لجميع الأحجام
            </div>
            <div className="flex items-center gap-3 text-sm text-[#243247] opacity-60">
              <span className="w-1 h-1 rounded-full bg-[#243247] opacity-40 flex-shrink-0" />
              360 جنيه للقطعة
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-sm text-[#243247] opacity-60 group-hover:opacity-90 transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em' }}
            >
              اكتشف التشكيلة
            </span>
            <svg
              className="w-5 h-5 text-[#243247] opacity-40 group-hover:opacity-80 group-hover:-translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="border-t border-[#243247] border-opacity-5 bg-white px-6 md:px-14 py-5 flex gap-4 items-center" dir="rtl">
        <span className="text-xs text-[#243247] opacity-35 ml-4" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.15em' }}>
          THE COLLECTION
        </span>
        {[
          { src: '/straight.jpg', name: 'AURA' },
          { src: '/curved.jpg', name: 'HARMONIA' },
          { src: '/curvedgold.jpg', name: 'SOPHIA' },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3 group/thumb">
            <div className="w-10 h-10 overflow-hidden flex-shrink-0" style={{ borderRadius: '2px' }}>
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
              />
            </div>
            <span
              className="text-xs text-[#243247] opacity-35 hidden sm:block"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.15em' }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
