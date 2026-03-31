import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="page-title">contact</h1>
      </div>

      <div className="container section-block">
        <div className="row">
          <div className="col-md-6">
            <h5><strong>Get in touch</strong></h5>
            <p>
              I'm open to opportunities in data analytics, business analytics, and risk management. Feel free to reach out!
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:jhuangbp@bu.edu">jhuangbp@bu.edu</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/jyun-ru-huang-tw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jyun-ru-huang-tw
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/jhuangbp"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/jhuangbp
              </a>
            </p>
            <p>
              <strong>Location:</strong> Boston, Massachusetts
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
