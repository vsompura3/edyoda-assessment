import CheckoutForm from './CheckoutForm'
import Icon from './Icon'

const Checkout = () => {
  return (
    <main className="mt-16 pb-8 text-white">
      <div className="xl:max-w-9xl container mx-auto px-12">
        <div className="grid items-start gap-20 xl:grid-cols-12 xl:gap-4">
          <section className="xl:col-span-8">
            <h1 className="max-w-[24ch] font-raleway text-4xl font-semibold leading-snug lg:text-5xl lg:leading-snug">
              Access curated courses worth ₹
              <span className="font-roboto text-alert-dark line-through">
                <span className="text-white lg:text-[3.25rem]"> 18,500</span>
              </span>{' '}
              at just{' '}
              <span className="font-roboto text-[3.25rem] text-primary-light">
                ₹ 99
              </span>{' '}
              per year!
            </h1>
            <ul className="mt-11 space-y-8 2xl:mt-20 2xl:space-y-16">
              <li className="flex items-center gap-16">
                <Icon type="book" style="w-12 h-12" />
                <p className="text-2xl 2xl:text-[4rem]">
                  <span className="font-semibold text-primary-light">100+</span>{' '}
                  Job relevant courses
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="clock" style="w-12 h-12" />
                <p className="text-2xl 2xl:text-[4rem]">
                  <span className="font-semibold text-primary-light">
                    20,000+
                  </span>{' '}
                  Hours of content
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="live" style="w-12 h-12" />
                <p className="text-2xl 2xl:text-[4rem]">
                  <span className="font-semibold text-primary-light">
                    Exclusive
                  </span>{' '}
                  webinar access
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="scholar" style="w-12 h-12" />
                <p className="text-2xl 2xl:text-[4rem]">
                  Scholarship worth{' '}
                  <span className="font-semibold text-primary-light">
                    ₹94,500
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-16">
                <Icon type="no-ads" style="w-12 h-12" />
                <p className="text-2xl 2xl:text-[4rem]">
                  <span className="font-semibold text-primary-light">
                    Ad Free
                  </span>{' '}
                  learning experience
                </p>
              </li>
            </ul>
          </section>
          <aside className="xl:col-span-full xl:col-start-9">
            <CheckoutForm />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Checkout
