import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Icon from './Icon'

const Header = () => {
  return (
    <header className="bg-white">
      <div className="md:max-w-9xl container mx-auto px-4">
        <nav className="flex items-center justify-between gap-4 py-4 font-raleway font-medium">
          <div className="flex items-center gap-4 md:gap-16">
            <a href="/" aria-label="edyoda home">
              <Icon />
            </a>
            <ul className="flex items-center gap-4 md:gap-16">
              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-surface-300/75 md:gap-[18px]"
                >
                  Courses
                  <ChevronDownIcon className="h-6 w-6" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-surface-300/75 md:gap-[18px]"
                >
                  Programs
                  <ChevronDownIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:gap-16">
            <button className="rounded-md p-2 hover:bg-surface-100/50">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="h-6 w-6" />
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
