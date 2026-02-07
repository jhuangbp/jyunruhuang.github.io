import React from 'react'
import './Certificates.css'

const certificates = [
  {
    id: 1,
    name: 'SAS Certified Specialist: Base Programming Using SAS 9.4',
    issued: 'Dec 2025',
    credentialId: '522568756',
    provider: 'SAS'
  }
]

const Certificates = () => {
  return (
    <section id="certificates" className="certificates" data-reveal>
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate) => (
          <article key={certificate.id} className="certificate-card card" data-reveal>
            <span className="certificate-badge">Certified</span>
            <h3>{certificate.name}</h3>
            <p>{certificate.provider}</p>
            <div className="certificate-meta">
              <span>Issued: {certificate.issued}</span>
              <span>Credential ID: {certificate.credentialId}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
