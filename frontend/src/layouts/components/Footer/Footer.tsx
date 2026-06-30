import { PageContainer } from '../PageContainer/PageContainer'

import './Footer.scss'

export function Footer() {
  return (
    <footer className="site-footer">
      <PageContainer className="site-footer__inner">
        <span className="site-footer__brand">Beauty Salon</span>
        <small className="site-footer__copyright">© {new Date().getFullYear()}</small>
      </PageContainer>
    </footer>
  )
}
