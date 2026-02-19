import { useState, useRef } from 'react';
import Hero from './components/Hero/Hero';
import CollectionGrid from './components/Collections/CollectionGrid';
import ProductGrid from './components/Products/ProductGrid';
import ProductDetailModal from './components/Products/ProductDetailModal';
import StorySection from './components/Story/StorySection';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer/Footer';
import SuccessModal from './components/SuccessModal';
import { OrderFormData } from './types/form';
import { products } from './data/products';
import { X } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const shopRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: 'home' | 'shop' | 'story' | 'contact') => {
    if (section === 'shop' && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'story' && storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHeroShop = () => {
    handleNavigate('shop');
  };

  const handleHeroStory = () => {
    handleNavigate('story');
  };

  const selectedProductData = selectedProduct
    ? products.find((p) => p.id === selectedProduct)
    : null;

  const handleSubmit = async (data: OrderFormData) => {
    const now = Date.now();
    if (now - lastSubmitTime < 1000) {
      return;
    }
    setLastSubmitTime(now);
    setIsSubmitting(true);

    try {
      const totalQuantity = data.straightQuantity + data.curvedQuantity + data.curvedGoldQuantity;
      const totalPrice = totalQuantity * 360;

      const formDataToSend = {
        name: data.name,
        phone: data.phone,
        governorate: data.governorate,
        area: data.area,
        address: data.address,
        straightQty: data.straightQuantity,
        curvedQty: data.curvedQuantity,
        curvedGoldQty: data.curvedGoldQuantity,
        totalPrice: totalPrice,
        timestamp: new Date().toISOString(),
      };

      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8uj_Mc166lFj9mVHIrVHUHm00SYGbjNT-7_0xzPGnEF12IYU0CiD5QZOA3771r6mW/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="ltr">
      <main>
        <Hero onShopClick={handleHeroShop} onStoryClick={handleHeroStory} />

        <CollectionGrid onCollectionSelect={handleNavigate} />

        <div ref={shopRef}>
          <ProductGrid
            onProductSelect={(productId) => setSelectedProduct(productId)}
            onAddToCart={(productId) => setSelectedProduct(productId)}
            onOrderFormOpen={() => setShowOrderForm(true)}
          />
        </div>

        <div ref={storyRef}>
          <StorySection />
        </div>
      </main>

      <Footer />

      {selectedProductData && (
        <ProductDetailModal
          product={selectedProductData}
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
          onOrderNow={() => setShowOrderForm(true)}
        />
      )}

      {showOrderForm && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowOrderForm(false)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8" dir="rtl">
              <button
                onClick={() => setShowOrderForm(false)}
                className="absolute top-4 right-4 z-10 bg-[#243247] text-white p-2 rounded-full hover:bg-[#e7ddcc] hover:text-[#243247] transition-all duration-300"
              >
                <X size={24} />
              </button>
              <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-12 text-center">
                تقديم طلب
              </h2>
              <OrderForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
      )}

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
