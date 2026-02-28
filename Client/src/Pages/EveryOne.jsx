import React, { useState, useEffect } from 'react'
import './EveryOne.scss'
import Logo from '../Image/logo-little.png' // ← öz logo yolunu yaz

const TARGET = new Date('March 3, 2026 00:00:00').getTime()
const pad = (n) => String(n).padStart(2, '0')

function EveryOne() {
  const [timeLeft, setTimeLeft] = useState({
    gün: 0,
    saat: 0,
    dəqiqə: 0,
    saniyə: 0,
  })
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    const tick = setInterval(() => {
      const d = TARGET - Date.now()
      if (d < 0) return clearInterval(tick)
      setTimeLeft({
        gün:    Math.floor(d / 86400000),
        saat:   Math.floor((d % 86400000) / 3600000),
        dəqiqə: Math.floor((d % 3600000)  / 60000),
        saniyə: Math.floor((d % 60000)    / 1000),
      })
    }, 1000)
    return () => clearInterval(tick)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (form.username === 'admin' && form.password === '12345') {
      localStorage.setItem('app_token', 'secret_key_2026')
      window.location.href = '/'
    } else {
      setError('İstifadəçi adı və ya şifrə yanlışdır!')
      setTimeout(() => setError(''), 3000)
    }
  }

  return (
    <div className="eo">

      {/* Arxa dairələr */}
      <span className="eo__blob eo__blob--1" />
      <span className="eo__blob eo__blob--2" />
      <span className="eo__blob eo__blob--3" />

      <div className="eo__card">

        {/* ---- TOP ---- */}
        <div className="eo__top">
          <img src={Logo} alt="SalonBazarı" className="eo__logo" />
          <p className="eo__tagline">
            Peşəkar gözəllik dünyasına xoş gəldiniz
          </p>
        </div>

        {/* ---- MIDDLE ---- */}
        <div className="eo__middle">
          <h1 className="eo__title">ÇOX YAXINDA</h1>
          <p className="eo__launch">🚀 Açılış: 3 Mart 2026</p>

          <div className="eo__timer">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="eo__timer-item">
                <span className="eo__timer-num">{pad(value)}</span>
                <span className="eo__timer-label">{label.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <div className="eo__progress">
            <div className="eo__progress-bar" style={{ width: '45%' }} />
          </div>
          <p className="eo__progress-text">45% hazırdır</p>
        </div>

        {/* ---- FORM ---- */}
        <form className="eo__form" onSubmit={handleLogin}>
          <p className="eo__form-title">Admin girişi</p>

          <input
            className="eo__input"
            type="text"
            placeholder="İstifadəçi adı"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            autoComplete="off"
          />
          <input
            className="eo__input"
            type="password"
            placeholder="Şifrə"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && <p className="eo__error">{error}</p>}

          <button className="eo__btn" type="submit">
            DAXİL OL
          </button>
        </form>

        {/* ---- FOOTER ---- */}
        <footer className="eo__footer">
          © 2026 SalonBazarı. Bütün hüquqlar qorunur.
        </footer>

      </div>
    </div>
  )
}

export default EveryOne
