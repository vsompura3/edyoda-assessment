import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Icon from './Icon'

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <header className="bg-white">
      <div className="xl:max-w-9xl container mx-auto px-4">
        <nav className="flex flex-col items-center justify-between gap-8 py-4 font-raleway font-medium md:flex-row lg:gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <a href="/" aria-label="edyoda home">
              <Icon />
            </a>
            <ul className="flex items-center gap-4 md:gap-8">
              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-surface-300/75"
                >
                  Courses
                  <ChevronDownIcon className="h-6 w-6" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-surface-300/75"
                >
                  Programs
                  <ChevronDownIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <button className="flex items-center gap-2 rounded-md p-2">
              <span className="sr-only">Search</span>
              {show && (
                <input
                  type="text"
                  name="search"
                  id="Search"
                  className="rounded-md border border-surface-200 px-2 py-0.5"
                />
              )}
              <MagnifyingGlassIcon
                className="h-6 w-6 hover:bg-surface-100/50"
                onClick={handleClick}
              />
            </button>
            <a href="#" className="hover:text-surface-300/75">
              Login
            </a>
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-primary-light to-primary-dark px-10 py-3 font-bold uppercase text-white hover:opacity-70"
            >
              Join now
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
