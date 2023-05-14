import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Icon from './Icon'

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container md:max-w-9xl mx-auto px-4">
        <nav className="flex items-center justify-between gap-4 py-4 font-raleway font-medium">
          <div className="flex items-center gap-4 md:gap-16">
            <a href="/" aria-label="edyoda home">
              <Icon />
            </a>
            <ul className="flex items-center gap-4 md:gap-16">
              <li className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-2 md:gap-[18px]">
                  Courses
                  <ChevronDownIcon className="w-6 h-6" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-2 md:gap-[18px]">
                  Programs
                  <ChevronDownIcon className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:gap-16">
            <button>
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <a href="#">Login</a>
            <a
              href="#"
              className="uppercase font-bold bg-gradient-to-r from-primary-light to-primary-dark text-white px-10 rounded-full py-3"
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
