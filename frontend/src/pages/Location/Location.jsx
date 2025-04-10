import React from 'react'

const Location = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p
          className="section-subtitle text-center label-2"
          style={{ marginTop: "50px" }}
        >
          Special Selection
        </p>
        <h2 className="headline-1 section-title text-center">
          Kafe Xazar Menyu
        </h2>

        <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.5669340967315!2d47.02935129404068!3d40.766786996400306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4038c0199c88616d%3A0xcee27542e2a1431c!2zWMmZesmZciBLYWZlc2k!5e0!3m2!1str!2saz!4v1744280878056!5m2!1str!2saz" width="100%" height="650" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        

        {/* Kategori butonları */}
        

        

        {/* Yemek listesi */}
        

        {/* Diğer UI elemanları */}
        

        <img
          src="./MenuImages/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
        <img
          src="./MenuImages/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  )
}

export default Location