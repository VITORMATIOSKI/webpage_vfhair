import { Link } from 'react-router-dom'
import { ButtonInfoContent } from './Style'

interface ButtonProps {
  text: string
  page: string
}
export function ButtonInfo({ text, page }: ButtonProps) {
  return (
    <ButtonInfoContent>
      <button>
        <Link to={page}>{text}</Link>
      </button>
    </ButtonInfoContent>
  )
}
