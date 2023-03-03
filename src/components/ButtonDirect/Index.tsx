import { FaWhatsappSquare } from 'react-icons/fa'

import { ButtonDirectContent } from './style'

interface ButtonDirectProps {
  link: string
  title: string
}

export function ButtonDirect({ link, title }: ButtonDirectProps) {
  return (
    <ButtonDirectContent>
      <button>
        <FaWhatsappSquare color="#34af23" size={30} />
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </button>
    </ButtonDirectContent>
  )
}
