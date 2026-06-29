export interface Certificate {
  id: string
  title: string
  imageUrl: string
  issuedBy?: string
}

interface MasterCertificatesProps {
  certificates: Certificate[]
}

export function MasterCertificates({
  certificates,
}: MasterCertificatesProps) {
  return (
    <section aria-labelledby="master-certificates-title">
      <h2 id="master-certificates-title">Сертификаты</h2>
      <ul className="master-certificates">
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            <img
              src={certificate.imageUrl}
              alt={`Сертификат «${certificate.title}»`}
              loading="lazy"
            />
            <p>{certificate.title}</p>
            {certificate.issuedBy && <small>{certificate.issuedBy}</small>}
          </li>
        ))}
      </ul>
    </section>
  )
}
