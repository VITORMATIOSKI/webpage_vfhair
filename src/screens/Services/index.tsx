import { CardServices } from '../../components/CardServices/CardServices'
import { PrincipalImage } from '../../components/PrinpalImagePages'
import { ContentCard } from './styles'

import backgroundHome from '../../assets/background_home.png'
import { Footer } from '../../components/Footer'

export function Services() {
  const products = [
    {
      key: 1,
      title: 'Manicure',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra nunc ligula, at dictum turpis suscipit sed. Morbi congue mauris ante, sed pellentesque turpis pulvinar vitae. Integer blandit, ante vel sollicitudin lobortis, mi eros porta augue, a interdum libero tellus vel arcu. Proin fringilla ante ut turpis pretium viverra.',
      image: 'https://i.ibb.co/Gcj5cmj/Card-Servi-o.png',
    },
    {
      key: 2,
      title: 'Manicure',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra nunc ligula, at dictum turpis suscipit sed. Morbi congue mauris ante, sed pellentesque turpis pulvinar vitae. Integer blandit, ante vel sollicitudin lobortis, mi eros porta augue, a interdum libero tellus vel arcu. Proin fringilla ante ut turpis pretium viverra.',
      image: 'https://i.ibb.co/Gcj5cmj/Card-Servi-o.png',
    },
  ]
  return (
    <div>
      <PrincipalImage image={backgroundHome} title="Serviços" />
      <ContentCard>
        {products.map((products) => (
          <CardServices
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
