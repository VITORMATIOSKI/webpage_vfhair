import { ContentCardServices, ContentImg, ContentTitle } from './styles'

interface cardProductsProps {
  title: string
  text: string
  image: string
}

export function CardServices({ title, text, image }: cardProductsProps) {
  return (
    <ContentCardServices>
      <ContentImg>
        <img src={image} alt="" />
      </ContentImg>
      <ContentTitle>
        <div className="PrincipalContent">
          <h1>{title}</h1>
        </div>
        <div className="SecondContent">
          <p>{text}</p>
        </div>
      </ContentTitle>
    </ContentCardServices>
  )
}
