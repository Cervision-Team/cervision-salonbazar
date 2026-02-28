import React, { useEffect, useRef } from 'react'
import './HomeHeader.scss'
import HeroBg from '../../../Image/HomeHeader.png' // şəkil yolunu dəyiş

function HomeHeader() {
  const badgeRef  = useRef(null)
  const titleRef  = useRef(null)
  const descRef   = useRef(null)
  const btnRef    = useRef(null)

  useEffect(() => {
    const els = [badgeRef, titleRef, descRef, btnRef]

    // Başlanğıcda sağda gizli
    els.forEach(({ current }) => {
      if (current) {
        current.style.opacity   = '0'
        current.style.transform = 'translateX(120px)'
      }
    })

    // Növbəli animasiya — hər element 150ms gecikmə ilə soldan gəlir
    els.forEach(({ current }, i) => {
      if (!current) return
      setTimeout(() => {
        current.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        current.style.opacity    = '1'
        current.style.transform  = 'translateX(0)'
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section className="home-header">
      <div className="home-header__bg">
        <img src={HeroBg} alt="Hero background" />
        <div className="home-header__overlay" />
      </div>

      <div className="home-header__content">
        <span className="home-header__badge" ref={badgeRef}>
          Professional Alətlər
        </span>

        <h1 className="home-header__title" ref={titleRef}>
          Güc və Stilin 
          Mükəmməl 
          Uyğunluğu
        </h1>

        <p className="home-header__desc" ref={descRef}>
          Salonunuz üçün ən son texnologiyalı fenlər və stiling
          alətləri. İşinizi sürətləndirin, keyfiyyəti artırın.
        </p>

        <a href="/kolleksiya" className="home-header__btn" ref={btnRef}>
          Kolleksiyaya bax
        </a>
      </div>
    </section>
  )
}

export default HomeHeader
