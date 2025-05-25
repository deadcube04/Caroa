import { useEffect } from "react";

export function useCartRealtime(refreshCart: () => void) {
  useEffect(() => {
    const handler = () => refreshCart();
    window.addEventListener('cart-updated', handler);
    return () => window.removeEventListener('cart-updated', handler);
  }, [refreshCart]);
}
