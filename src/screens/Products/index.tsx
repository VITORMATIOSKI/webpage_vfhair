import { CardProducts } from '../../components/CardServices/CardProducts'
import { ContentCard } from './styles'
import BackgroundProducts from '../../assets/background_products.png'
import { PrincipalImage } from '../../components/PrinpalImagePages'
import { Footer } from '../../components/Footer'

export function ProductsArea() {
  const products = [
    {
      key: 1,
      title: 'Shampoo',
      text: 'Vivamus id nisi et lorem pulvinar bibendum in a justo. Pellentesque volutpat interdum porta. Morbi fermentum ante nunc, nec tristique urna lobortis interdum. In sed blandit ligula. Vivamus pulvinar massa libero. Mauris porttitor, turpis vitae fringilla ultricies, felis felis varius leo, sed ultrices purus quam non ipsum. Vivamus sodales tempor urna. Proin est odio, consequat mollis nulla id, hendrerit aliquet sem. Nullam sed enim sed dolor euismod sodales vel sit amet magna. Nunc condimentum dolor condimentum justo aliquet tristique.',
      image: 'https://i.ibb.co/c3dDzQ2/Card-Products.png',
    },
    {
      key: 2,
      title: 'Shampoo',
      text: 'Vivamus id nisi et lorem pulvinar bibendum in a justo. Pellentesque volutpat interdum porta. Morbi fermentum ante nunc, nec tristique urna lobortis interdum. In sed blandit ligula. Vivamus pulvinar massa libero. Mauris porttitor, turpis vitae fringilla ultricies, felis felis varius leo, sed ultrices purus quam non ipsum. Vivamus sodales tempor urna. Proin est odio, consequat mollis nulla id, hendrerit aliquet sem. Nullam sed enim sed dolor euismod sodales vel sit amet magna. Nunc condimentum dolor condimentum justo aliquet tristique.',
      image: 'https://i.ibb.co/c3dDzQ2/Card-Products.png',
    },
  ]
  return (
    <div>
      <PrincipalImage image={BackgroundProducts} title="produtos" />
      <ContentCard>
        {products.map((products) => (
          <CardProducts
            key={1}
            title={products.title}
            text={products.text}
            image={products.image}
          />
        ))}
      </ContentCard>
      <Footer />
    </div>
  )
}
