import { ContentPrincipalImage } from './styles'

interface PrincipalImageProps {
  image: string
  title: string
}

export function PrincipalImage({ image, title }: PrincipalImageProps) {
  return (
    <ContentPrincipalImage>
      <div className="ImagePrincipal">
        <img src={image} alt="" />
      </div>
      <div className="TextTitle">
        <h1>{title}</h1>
      </div>
    </ContentPrincipalImage>
  )
}
