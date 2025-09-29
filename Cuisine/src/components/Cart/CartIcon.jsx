import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/context/CartContext';

const CartIcon = ({ onClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={onClick}
      className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
    >
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <Badge className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
          {totalItems > 99 ? '99+' : totalItems}
        </Badge>
      )}
    </button>
  );
};

export default CartIcon;