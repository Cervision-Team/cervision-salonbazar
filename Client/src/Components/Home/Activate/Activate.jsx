import React, { useEffect, useRef, useState } from 'react'
import './Activate.scss'
import { FiUsers, FiTarget, FiGlobe, FiAward } from 'react-icons/fi'

const STATS = [
  {
    id: 1,
    icon: <FiUsers />,
    value: 15000,
    suffix: '+',
    display: '15.000+',
    label: 'Aktiv istifadəçi',
  },
  {
    id: 2,
    icon: <FiTarget />,
    value: 2500,
    suffix: '',
    display: '2500',
    label: 'Məhsul çeşidi',
  },
  {
    id: 3,
    icon: <FiGlobe />,
    value: 150,
    suffix: '+',
    display: '150+',
    label: 'Beynəlxalq brend',
  },
  {
    id: 4,
    icon: <FiAward />,
    value: 98,
    suffix: '%',
    display: '98%',
    label: 'Müsbət rəy',
  },
]

// Count-up hook
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatItem({ icon, display, label, value, suffix, animate }) {
  const count = useCountUp(value, 1800, animate)

  const formatted = animate
    ? value >= 1000
      ? count.toLocaleString('az-AZ').replace(',', '.') + suffix
      : count + suffix
    : display

  return (
    <div className="activate__item">
      <div className="activate__icon">{icon}</div>
      <span className="activate__value">{formatted}</span>
      <span className="activate__label">{label}</span>
    </div>
  )
}

function Activate() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="activate" ref={ref}>
      <div className="activate__container">
        {STATS.map((stat) => (
          <StatItem key={stat.id} {...stat} animate={animate} />
        ))}
      </div>
    </section>
  )
}

export default Activate
