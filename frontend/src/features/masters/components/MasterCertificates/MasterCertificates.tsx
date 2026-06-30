import './MasterCertificates.scss'
import type { Certificate } from './types'

interface MasterCertificateProps {
  certificate: Certificate
}

export function MasterCertificate({ certificate }: MasterCertificateProps) {
  const { title, issuer, year, image } = certificate

  return (
    <article className="master-certificate">
      <div className="master-certificate__image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="master-certificate__placeholder">Сертификат</div>
        )}
      </div>

      <div className="master-certificate__content">
        <h3 className="master-certificate__title">{title}</h3>

        <p className="master-certificate__issuer">{issuer}</p>

        <p className="master-certificate__year">{year}</p>
      </div>
    </article>
  )
}
