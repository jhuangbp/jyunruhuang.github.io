import React from 'react'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'SAS Certified Specialist: Base Programming Using SAS 9.4',
      issued: 'Dec 2025',
      credentialId: '522568756'
    }
  ]

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-icon">✓</div>
            <div className="certificate-details">
              <h3 className="certificate-name">{cert.name}</h3>
              <div className="certificate-meta">
                <span>Issued: {cert.issued}</span>
                <span>Credential ID: {cert.credentialId}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
