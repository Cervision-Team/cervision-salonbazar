import React from 'react'
import './Selling.scss'
import { FiCheck } from 'react-icons/fi'
import image1 from '../../../Image/product1.png'
import image2 from '../../../Image/product2.png'

const PRODUCTS = [
  {
    id: 1,
    image: image1,
    shopLogo: 'https://placehold.co/32x32/f0f0f0/999?text=S',
    shopName: 'Equipment Store',
    price: '4500 AZN',
    name: 'Kasho - Gold master Series',
    brand: 'Kasho Japan',
    inStock: true,
    href: '/product/1',
  },
  {
    id: 2,
    image: image2,
    shopLogo: 'https://placehold.co/32x32/f0f0f0/999?text=S',
    shopName: 'Equipment Store',
    price: '4500 AZN',
    name: 'Essentials-pink rainbow hair scis...',
    brand: 'Scissorstech',
    inStock: true,
    href: '/product/2',
  },
  {
    id: 3,
    image: image1,
    shopLogo: 'https://placehold.co/32x32/f0f0f0/999?text=S',
    shopName: 'Equipment Store',
    price: '4500 AZN',
    name: 'Loreal proffesional hair serum',
    brand: 'Loreal',
    inStock: true,
    href: '/product/3',
  },
]

function SellingCard({ image, shopLogo, shopName, price, name, brand, inStock, href }) {
  return (
    <div className="selling-card">

      {/* Image */}
      <div className="selling-card__image-wrap">
        <img src={image} alt={name} className="selling-card__image" />
      </div>

      {/* Body */}
      <div className="selling-card__body">

        {/* Shop row */}
        <div className="selling-card__shop-row">
          <div className="selling-card__shop">
            <img src={shopLogo} alt={shopName} className="selling-card__shop-logo" />
            <span className="selling-card__shop-name">{shopName}</span>
          </div>
          <span className="selling-card__price">{price}</span>
        </div>

        {/* Name */}
        <h3 className="selling-card__name">{name}</h3>

        {/* Brand + Stock */}
        <div className="selling-card__meta">
          <span className="selling-card__brand">Brend: {brand}</span>
          {inStock && (
            <span className="selling-card__stock">
              <FiCheck />
              Stokda var
            </span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="selling-card__divider" />

      {/* Footer */}
      <div className="selling-card__footer">
        <a href={href} className="selling-card__btn">
          Ətraflı bax
        </a>
      </div>

    </div>
  )
}

function Selling() {
  return (
    <section className="selling">
      <div className="selling__container">

        {/* Header */}
        <div className="selling__header">
          <h2 className="selling__title">Ən çox satılan peşəkar məhsullar</h2>
          <p className="selling__subtitle">
            Yeni açılan salonlar və mütəxəssislər üçün seçilmiş top təkliflər
          </p>
        </div>

        {/* Grid */}
        <div className="selling__grid">
          {PRODUCTS.map((item) => (
            <SellingCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Selling
