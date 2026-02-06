import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Locations from './components/Locations.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CartBar from './components/CartBar.jsx';
import Checkout from './components/Checkout.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
const products = [
  {
    id: 'espresso',
    name: 'Classic Espresso',
    desc: 'Rich, intense shot pulled from freshly ground beans.',
    price: 3.0,
    category: 'coffee',
  },
  {
    id: 'latte',
    name: 'Vanilla Latte',
    desc: 'Smooth espresso with steamed milk and vanilla syrup.',
    price: 4.75,
    category: 'coffee',
  },
  {
    id: 'iced-latte',
    name: 'Iced Caramel Latte',
    desc: 'Chilled espresso, milk, and caramel over ice.',
    price: 5.0,
    category: 'coffee',
  },
  {
    id: 'mocha',
    name: 'Mocha',
    desc: 'Espresso, dark chocolate, and steamed milk.',
    price: 5.25,
    category: 'coffee',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    desc: 'Slow-steeped, smooth, and naturally sweet.',
    price: 4.25,
    category: 'coffee',
  },
  {
    id: 'chai',
    name: 'Spiced Chai Latte',
    desc: 'Black tea, warming spices, and steamed milk.',
    price: 4.5,
    category: 'coffee',
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    desc: 'Buttery and flaky, baked every morning.',
    price: 3.5,
    category: 'bakery',
  },
  {
    id: 'muffin',
    name: 'Blueberry Muffin',
    desc: 'Packed with juicy blueberries and a crumb topping.',
    price: 3.25,
    category: 'bakery',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    desc: 'Soft swirl with vanilla icing on top.',
    price: 3.75,
    category: 'bakery',
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState('browse'); // 'browse' | 'checkout' | 'confirmation'
  const [lastOrder, setLastOrder] = useState(null);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      ),
    [cart],
  );

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    setCart((current) => {
      const existing = current.find((item) => item.id === productId);
      if (existing) {
        return current.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCart((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== productId);
      }
      return current.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      );
    });
  };

  const handleRemoveItem = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId));
  };

  const handleGoToCheckout = () => {
    if (!cart.length) return;
    setStep('checkout');
    // scroll to checkout section
    const el = document.getElementById('checkout');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToMenu = () => {
    setStep('browse');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlaceOrder = (details) => {
    setLastOrder({
      ...details,
      items: cart,
      total: cartTotal,
      placedAt: new Date().toISOString(),
    });
    setCart([]);
    setStep('confirmation');
    const el = document.getElementById('order-confirmation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewOrder = () => {
    setStep('browse');
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const coffeeProducts = products.filter((p) => p.category === 'coffee');
  const bakeryProducts = products.filter((p) => p.category === 'bakery');

  return (
    <div className="app">
      <Navbar />
      <CartBar
        count={cartCount}
        total={cartTotal}
        onCheckout={handleGoToCheckout}
        disabled={!cartCount}
      />
      <main>
        <Hero />
        <About />
        <Menu
          coffeeItems={coffeeProducts}
          pastryItems={bakeryProducts}
          onAddToCart={handleAddToCart}
        />
        <Checkout
          step={step}
          cart={cart}
          total={cartTotal}
          onBackToMenu={handleBackToMenu}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onPlaceOrder={handlePlaceOrder}
        />
        <OrderConfirmation
          step={step}
          order={lastOrder}
          onNewOrder={handleNewOrder}
        />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
