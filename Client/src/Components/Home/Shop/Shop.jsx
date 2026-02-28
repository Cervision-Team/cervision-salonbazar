import React from 'react'
import './Shop.scss'
import { FiMapPin, FiShield } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const BADGE_STYLES = {
  'Təsdiqlənmiş Satıcı': { bg: '#a855f7', color: '#fff' },
  'Top Brend':           { bg: '#d63384', color: '#fff' },
  'Topdan Satış':        { bg: '#0ea5e9', color: '#fff' },
  'Endirim':             { bg: '#f97316', color: '#fff' },
}

const SHOPS = [
  {
    id: 1,
    badge: 'Təsdiqlənmiş Satıcı',
    image: 'https://placehold.co/400x220/2d2d2d/fff?text=Shop',
    name: 'Dermacare Official',
    type: 'Rəsmi mağaza',
    desc: 'Kosmetoloji prosedur və dəri baxımı məhsulları.',
    location: 'Bakı, Nəsimi',
    rating: 5.0,
    reviews: 1282,
    href: '/shop/1',
  },
  {
    id: 2,
    badge: 'Top Brend',
    image: 'https://placehold.co/400x220/2d2d2d/fff?text=Shop',
    name: 'Loreal Professional',
    type: 'Rəsmi mağaza',
    desc: 'Professional saç baxımı və boyama sistemləri.',
    location: 'Bakı, Xətai',
    rating: 4.9,
    reviews: 1043,
    href: '/shop/2',
  },
  {
    id: 3,
    badge: 'Topdan Satış',
    image: 'https://placehold.co/400x220/2d2d2d/fff?text=Shop',
    name: 'HairLab Official',
    type: 'Rəsmi mağaza',
    desc: 'Orijinal saç boyaları və saç baxım vasitələri.',
    location: 'Bakı, Yasamal',
    rating: 5.0,
    reviews: 1572,
    href: '/shop/3',
  },
  {
    id: 4,
    badge: 'Endirim',
    image: 'https://placehold.co/400x220/2d2d2d/fff?text=Shop',
    name: 'Ela De Pure',
    type: 'Rəsmi mağaza',
    desc: 'Saf tərkibli və premium üz baxım məhsulları.',
    location: 'Bakı, Nizam',
    rating: 4.8,
    reviews: 1422,
    href: '/shop/4',
  },
]

function ShopCard({ badge, image, name, type, desc, location, rating, reviews, href }) {
  const badgeStyle = BADGE_STYLES[badge] || { bg: '#888', color: '#fff' }

  return (
    <div className="shop-card">

      {/* Image */}
      <div className="shop-card__image-wrap">
        <img src={image} alt={name} className="shop-card__image" />
        <div className="shop-card__overlay" />

        {/* Badge */}
        <span
          className="shop-card__badge"
          style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.color }}
        >
          {badge}
        </span>

        {/* Verified icon */}
        <span className="shop-card__verified">
          <FiShield />
        </span>

        {/* Name over image */}
        <div className="shop-card__image-info">
          <h3 className="shop-card__name">{name}</h3>
          <span className="shop-card__type">{type}</span>
        </div>
      </div>

      {/* Body */}
      <div className="shop-card__body">
        <p className="shop-card__desc">{desc}</p>

        <div className="shop-card__meta">
          <span className="shop-card__location">
            <FiMapPin />
            {location}
          </span>
          <span className="shop-card__rating">
            <FaStar />
            {rating.toFixed(1)}
            <span className="shop-card__reviews">({reviews} rəy)</span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="shop-card__footer">
        <a href={href} className="shop-card__btn">
          Ətraflı bax
        </a>
      </div>

    </div>
  )
}

function Shop() {
  return (
    <section className="shop">
      <div className="shop__container">

        {/* Header */}
        <div className="shop__header">
          <h2 className="shop__title">Rəsmi mağazalar və Distribütorlar</h2>
          <p className="shop__subtitle">Seçilmiş professional gözəllik məhsulları</p>
        </div>

        {/* Grid */}
        <div className="shop__grid">
          {SHOPS.map((item) => (
            <ShopCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Shop
