import './Navigation.css'
import { useState } from 'react'

function Navigation() {
  const [active, setActive] = useState('Inicio')

  const options = [
    { label: 'Inicio', href: '#' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Estudios', href: '#estudios' },
    { label: 'Contactame', href: '#contacto' }
  ]

  return (
    <>
      <nav className='nav-container'>
        <div className='logo-container'>
            <div className='logoItem'>{"{Y3TDEV}"}</div>
        </div>
        <div className='options-container'>
            <div className="options">
                {options.map(opt => (
                  <li key={opt.label}>
                    <a
                      className={`item-option${active === opt.label ? ' item-option-active' : ''}`}
                      href={opt.href}
                      onClick={() => setActive(opt.label)}
                    >
                      {opt.label}
                    </a>
                  </li>
                ))}
            </div>
        </div> 
      </nav>
    </>
  )
}

export default Navigation