import DetailContacts from '@/components/pages/contacts-page/detail-contacts'
import FooterContacts from '@/components/pages/contacts-page/footer-contacts'
import HeroContacts from '@/components/pages/contacts-page/hero-contatcs'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <HeroContacts/>
      <DetailContacts/>
      <FooterContacts/>
    </div>
  )
}

export default ContactPage
