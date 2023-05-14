import CheckoutForm from './CheckoutForm'
import Icon from './Icon'

const Checkout = () => {
  return (
    <main className="text-white mt-16 pb-8">
      <div className="container mx-auto md:max-w-7xl px-12">
        <div className="grid md:grid-cols-12">
          <section className="col-span-6">
            <h1 className="text-[2.5rem] font-semibold font-raleway leading-snug">
              Access curated courses worth{' '}
              <span className="font-roboto text-alert-dark line-through">
                <span className="text-white">₹ 18,500</span>
              </span>{' '}
              at just{' '}
              <span className="text-primary-light font-roboto">₹ 99</span> per
              year!
            </h1>
            <ul className="mt-11 space-y-6">
              <li className="flex items-center gap-16">
                <Icon type="book" />
                <p className="text-2xl">
                  <span className="text-primary-light font-semibold">100+</span>{' '}
                  Jobs relevant courses
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="clock" />
                <p className="text-2xl">
                  <span className="text-primary-light font-semibold">
                    20,000+
                  </span>{' '}
                  Hours of content
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="live" />
                <p className="text-2xl">
                  <span className="text-primary-light font-semibold">
                    Exclusive
                  </span>{' '}
                  webinar access
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="scholar" />
                <p className="text-2xl">
                  Scholarship worth{' '}
                  <span className="text-primary-light font-semibold">
                    ₹94,500
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="no-ads" />
                <p className="text-2xl">
                  <span className="text-primary-light font-semibold">
                    Ad Free
                  </span>{' '}
                  learning experience
                </p>
              </li>
            </ul>
          </section>
          <aside className="col-start-8 col-span-full">
            <CheckoutForm />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Checkout
