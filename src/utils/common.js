export const generateRandomDate = (start, end) => {
  let date = new Date(start + Math.random() * (end - start));
  return date;
};

export const getRandomElsFromArr = (array, randomMin, randomMax) => {
  let sortedEls = new Set();
  let elsQuantity = getRandomInteger(randomMin, randomMax);
  for (let i = 0; i < elsQuantity; i++) {
    let randomIndex = getRandomInteger(0, array.length - 1);
    sortedEls.add(array[randomIndex]);
  }
  return Array.from(sortedEls);
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const adaptOffer = (offer) => {
  const adaptedOffer = {
    id: offer.id,
    previewImage: offer.preview_image,
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    price: offer.price,
    title: offer.title,
    guests: offer.max_adults,
    bedrooms: offer.bedrooms,
    description: offer.description,
    facilities: offer.goods,
    images: offer.images > 6 ? offer.images.slice(0, 6) : offer.images,
    host: {
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
      avatar: offer.host.avatar_url,
    },
    locationCoordinates: [offer.location.latitude, offer.location.longitude],
    locationZoom: offer.location.zoom,
    cityName: offer.city.name,
    cityCoordinates: [
      offer.city.location.latitude,
      offer.city.location.longitude,
    ],
    cityZoom: offer.city.location.zoom,
    type: offer.type,
    rating: offer.rating,
  };

  return adaptedOffer;
};

export const adaptReview = (review) => {
  const adaptedReview = {
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      photo: review.user.avatar_url,
      id: review.user.id,
      isPro: review.is_pro,
      name: review.user.name,
    },
  };
  return adaptedReview;
};
