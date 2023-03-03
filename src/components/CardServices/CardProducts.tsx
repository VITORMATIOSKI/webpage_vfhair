import { BsBookmark } from 'react-icons/Bs'
import { ContentCardServices, ContentImg, ContentTitle } from './styles'

interface cardProductsProps {
  title: string
  text: string
  image: string
}

export function CardProducts({ title, text, image }: cardProductsProps) {
  return (
    <ContentCardServices>
      <ContentTitle>
        <div className="PrincipalContent">
          <h1>{title}</h1>
          <div>
            <BsBookmark size={25} color="#111827" />
          </div>
        </div>
        <div className="SecondContent">
          <p>{text}</p>
        </div>
      </ContentTitle>
      <ContentImg>
        <img src={image} alt="" />
      </ContentImg>
    </ContentCardServices>
  )
}
