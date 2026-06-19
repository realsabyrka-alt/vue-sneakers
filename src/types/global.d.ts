interface Product {
  id: number
  isAdded: boolean
  imgSrc: string
  title: string
  price: number
  isFavorite: boolean
}

interface FavoriteProduct extends Product {
  productId: number
}

interface Card {
  id: number
  isAdded: boolean
  imgSrc: string
  title: string
  price: number
  isFavorite: boolean
}
