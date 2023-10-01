const defaultImgUrl = 'https://fakeimg.pl/300x400?text=no+image';

export const getImage = url =>
  url ? `https://image.tmdb.org/t/p/w500/${url}` : defaultImgUrl;
