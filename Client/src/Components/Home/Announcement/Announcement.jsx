import React from 'react'
import './Announcement.scss'
import { FiMapPin } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import image1 from '../../../Image/shop1.png'
import image2 from '../../../Image/shop2.png'

const ANNOUNCEMENTS = [
  {
    id: 1,
    image: image1,
    name: 'Aura Salon & Spa',
    desc: 'Saç kəsimi, rəngləmə, spa',
    location: 'Bakı, Nəsimi',
    rating: 5.0,
    reviews: 245,
    href: '/salon/1',
  },
  {
    id: 2,
    image: image2,
    name: 'Glam Beauty Studio',
    desc: 'Makiyaj, qaş dizaynı, kirpik',
    location: 'Bakı, Nərimanov',
    rating: 4.9,
    reviews: 156,
    href: '/salon/2',
  },
  {
    id: 3,
    image: image1,
    name: 'Elegance Nails Studio',
    desc: 'Manikür, pedikür, nail art',
    location: 'Bakı, Yasamal',
    rating: 4.8,
    reviews: 189,
    href: '/salon/3',
  },
]

function AnnouncementCard({ image, name, desc, location, rating, reviews, href }) {
  return (
    <div className="ann-card">

      {/* Image */}
      <div className="ann-card__image-wrap">
        <img src={image} alt={name} className="ann-card__image" />
      </div>

      {/* Body */}
      <div className="ann-card__body">
        <h3 className="ann-card__name">{name}</h3>
        <p className="ann-card__desc">{desc}</p>

        <div className="ann-card__meta">
          <span className="ann-card__location">
            <FiMapPin />
            {location}
          </span>
          <span className="ann-card__rating">
            <FaStar />
            {rating.toFixed(1)}
            <span className="ann-card__reviews">({reviews} rəy)</span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="ann-card__footer">
        <a href={href} className="ann-card__btn">
          Ətraflı bax
        </a>
      </div>

    </div>
  )
}

function Announcement() {
  return (
    <section className="announcement">
      <div className="announcement__container">

        {/* Header */}
        <div className="announcement__header">
          <h2 className="announcement__title">Son elanlar</h2>
          <p className="announcement__subtitle">
            Ən son əlavə olunan salon, məhsul və vakansiyalar
          </p>
        </div>

        {/* Grid */}
        <div className="announcement__grid">
          {ANNOUNCEMENTS.map((item) => (
            <AnnouncementCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Announcement
