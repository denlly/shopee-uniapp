type Banner = {
  hrefUrl: string
  imgUrl: string
  type: string
  id: string
}
type Category = {
  id: string
  name: string
  icon: string
}

type Hot = {
  alt: string
  pictures: string[]
  target: string
  type: string
  title: string
  id: string
}

type Guess = Product

export type { Banner, Category, Hot, Guess }
