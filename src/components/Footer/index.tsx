import { ContentFooterPage, NameDev } from './style'
import { BsInstagram } from 'react-icons/Bs'
import { AiOutlineCopyrightCircle } from 'react-icons/Ai'
import { FaFacebookSquare } from 'react-icons/fa'

import Logo from '../../assets/Logo VFHAir.svg'

export function Footer() {
  return (
    <div>
      <ContentFooterPage>
        <div className="ContentIcon">
          <a
            href="https://www.facebook.com/vfhairbr"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare color="#3b5998" size={30} />
            vfhairbr
          </a>
          <a
            href="https://www.instagram.com/vf_hair_/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram color="#cd486b" size={30} />
            @vf_hair
          </a>
        </div>
        <div className="LogoFooter">
          <img src={Logo} alt="" />
        </div>
        <span id="ContentFooterMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1639957898337!2d-49.80701428497162!3d-26.1261953334726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dded38f1f87e7f%3A0xebbf995f30bf5f65!2sVf%20Hair!5e0!3m2!1sen!2sbr!4v1669829061639!5m2!1sen!2sbr"
            frameBorder="0"
            width="350"
            height="200"
          ></iframe>
        </span>
      </ContentFooterPage>
      <NameDev>
        <p>
          <AiOutlineCopyrightCircle /> Rafael L Fernandes | Vitor M Matioski{' '}
        </p>
      </NameDev>
    </div>
  )
}
