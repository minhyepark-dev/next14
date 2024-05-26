export interface ProductProps {
  id: number
  name: string
  price: number
  image: string
  date: string
}
export interface ProductsProps {
  id: number
  name: string
  price: number
  description: string
  images: string[]
}

export interface ProductDetailProps {
  id: number
  name: string
  price: {
    totalProductPrice: number
    totalDeliveryPrice: number
    totalPrice: number
  }
  date: string
  products: {
    id: number
    name: string
    price: number
    image: string
    quantity: number
  }[]
}

export interface Service {
  id: number
  image: string
  name: string
  price: number
  like: boolean
}

export interface ServiceListProps {
  data: Service[]
}
