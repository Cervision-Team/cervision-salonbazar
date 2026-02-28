import React from 'react'
import './Career.scss'
import { FiMapPin, FiDollarSign } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { PiScissors } from 'react-icons/pi'

const JOBS = [
  {
    id: 1,
    badge: 'Təcili',
    icon: <PiScissors />,
    title: 'Kosmetoloq-Estetist',
    salary: '740 AZN',
    salon: 'Shams beauty salon',
    rating: 4.8,
    href: '/career/1',
  },
  {
    id: 2,
    badge: 'Təcili',
    icon: <PiScissors />,
    title: 'Kosmetoloq-Estetist',
    salary: '740 AZN',
    salon: 'Shams beauty salon',
    rating: 4.8,
    href: '/career/2',
  },
  {
    id: 3,
    badge: 'Təcili',
    icon: <PiScissors />,
    title: 'Kosmetoloq-Estetist',
    salary: '740 AZN',
    salon: 'Shams beauty salon',
    rating: 4.8,
    href: '/career/3',
  },
]

function CareerCard({ badge, icon, title, salary, salon, rating, href }) {
  return (
    <div className="career-card">

      {/* Top row */}
      <div className="career-card__top">
        <div className="career-card__icon">{icon}</div>
        {badge && (
          <span className="career-card__badge">{badge}</span>
        )}
      </div>

      {/* Body */}
      <div className="career-card__body">
        <h3 className="career-card__title">{title}</h3>

        <div className="career-card__salary">
          <FiDollarSign className="career-card__salary-icon" />
          <span>{salary}</span>
        </div>

        <div className="career-card__meta">
          <span className="career-card__salon">
            <FiMapPin />
            {salon}
          </span>
          <span className="career-card__rating">
            <FaStar />
            {rating}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="career-card__footer">
        <a href={href} className="career-card__btn">
          Ətraflı bax
        </a>
      </div>

    </div>
  )
}

function Career() {
  return (
    <section className="career">
      <div className="career__container">

        {/* Header */}
        <div className="career__header">
          <h2 className="career__title">Karyera imkanları</h2>
          <p className="career__subtitle">
            Peşəkar komandalara qoşulun və karyeranızı bizimlə qurun.
          </p>
        </div>

        {/* Grid */}
        <div className="career__grid">
          {JOBS.map((job) => (
            <CareerCard key={job.id} {...job} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Career
