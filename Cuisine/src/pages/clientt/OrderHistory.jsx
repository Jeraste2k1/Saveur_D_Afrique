import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useOrderHistory } from "@/context/OrderHistoryContext"; // Importez le hook

const OrderHistory = () => {
  const { orders } = useOrderHistory(); // Utilisez le hook pour obtenir les commandes

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Historique des commandes</h2>
      <div className="space-y-4">
        {orders.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>Aucune commande passée pour le moment.</p>
            <Link to="/plats">
              <Button className="mt-4">Commencer une commande</Button>
            </Link>
          </div>
        ) : (
          orders.map(order => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">
                  Commande #{order.id}
                </CardTitle>
                <span className={`text-sm font-semibold p-1 px-2 rounded-full ${
                  order.status === 'Livrée' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {order.status}
                </span>
              </CardHeader>
              <CardContent className="space-y-2 ">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">{order.restaurant}</span> • {order.date}
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {order.items.map((item, index) => (
                    <li key={index}>
                       {item.quantity} x {item.name}
                       {/* pour afficher l'image sur l'historique de commande */}
                        <img src={item.image} alt={item.name} className="inline-block w-24 h-24 rounded-md object-cover ml-2 mb-3" /> 
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-lg text-orange-600">
                    Total : {order.total.toLocaleString()} F CFA
                  </span>
                  <Button variant="outline" size="sm">
                    Recommander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;