import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageCircle } from "lucide-react";

const Reviews = () => {
  // Données fictives d'avis à laisser
  const itemsToReview = [
    { id: 1, name: "Attiéké au Poisson Braisé", restaurant: "Chez Maman Béatrice" },
    { id: 2, name: "Poulet Yassa revisité", restaurant: "Le Palais du Goût" },
  ];

  // États pour stocker les notes et les textes
  const [reviews, setReviews] = useState(
    itemsToReview.reduce((acc, item) => {
      acc[item.id] = { rating: 0, comment: "" };
      return acc;
    }, {})
  );

  // Changer la note (rating)
  const handleRatingChange = (itemId, rating) => {
    setReviews((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], rating }
    }));
  };

  // Changer le texte de l’avis
  const handleCommentChange = (itemId, value) => {
    setReviews((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], comment: value }
    }));
  };

  // Soumission
  const handleReviewSubmit = (e, itemId) => {
    e.preventDefault();
    const { rating, comment } = reviews[itemId];
    if (rating === 0 || comment.trim() === "") {
      alert("Merci de donner une note et un avis.");
      return;
    }
    alert(`Avis soumis pour ${itemId} : ${rating} étoiles, "${comment}"`);

    // Réinitialiser
    setReviews((prev) => ({
      ...prev,
      [itemId]: { rating: 0, comment: "" }
    }));
  };

  // Rendu des étoiles
  const renderStars = (itemId, rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-6 h-6 cursor-pointer transition 
            ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
          onClick={() => handleRatingChange(itemId, i)}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Avis & Notations</h2>
      <div className="space-y-6">
        {itemsToReview.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <MessageCircle className="w-16 h-16 mx-auto text-gray-300 mb-6" />
            <p>Vous n'avez pas de commandes récentes à noter.</p>
          </div>
        ) : (
          itemsToReview.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Noter "{item.name}"
                </CardTitle>
                <p className="text-sm text-gray-500">de {item.restaurant}</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleReviewSubmit(e, item.id)} className="space-y-4">
                  <div className="flex items-center gap-1">
                    {renderStars(item.id, reviews[item.id].rating)}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Écrivez votre avis ici..."
                      rows={4}
                      value={reviews[item.id].comment}
                      onChange={(e) => handleCommentChange(item.id, e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit">Soumettre l'avis</Button>
                </form>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
