import React from 'react'
import './FiveBox.scss'
import {
  FiScissors,
  FiCpu,
  FiBriefcase,
} from 'react-icons/fi'
import { LuSofa } from 'react-icons/lu'
import { PiFlask } from 'react-icons/pi'
import { TbPerfume } from "react-icons/tb";
const CATEGORIES = [
  {
    id: 1,
    icon: <FiScissors />,
    title: 'Peşəkar alətlər',
    desc: 'Qayçılar, fenlər, t...',
    href: '/pesəkar-aletler',
  },
  {
    id: 2,
    icon: <LuSofa />,
    title: 'Salon avadanlığı',
    desc: 'Kreslolar, yuma y...',
    href: '/salon-avadanligi',
  },
  {
    id: 3,
    icon: <TbPerfume />,
    title: 'İstifadə olunan məhsullar',
    desc: 'Boyalar, şampu...',
    href: '/mehsullar',
  },
  {
    id: 4,
    icon: <FiCpu />,
    title: 'Kosmetoloji cihazlar',
    desc: 'Lazer, lifting və b...',
    href: '/kosmetoloji',
  },
  {
    id: 5,
    icon: <FiBriefcase />,
    title: 'Vakansiyalar',
    desc: 'Usta və köməkçi...',
    href: '/vakansiyalar',
  },
]

function FiveBox() {
  return (
    <section className="five-box">
      <div className="five-box__container">

        {/* Header */}
        <div className="five-box__header">
          <h2 className="five-box__title">Gözəllik bazarı</h2>
          <p className="five-box__subtitle">
            Peşəkar alətlər, avadanlıqlar və kosmetik vasaitlər
          </p>
        </div>

        {/* Cards */}
        <div className="five-box__grid">
          {CATEGORIES.map((cat) => (
            <a href={cat.href} key={cat.id} className="five-box__card">
              <div className="five-box__card-icon">
                {cat.icon}
              </div>
              <h3 className="five-box__card-title">{cat.title}</h3>
              <p className="five-box__card-desc">{cat.desc}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FiveBox
