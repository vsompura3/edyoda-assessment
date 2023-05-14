import CheckoutForm from './CheckoutForm'
import PlanBenefit from './PlanBenefit'

const Checkout = () => {
  return (
    <main className="mt-16 pb-8 text-white">
      <div className="xl:max-w-9xl container mx-auto px-12">
        <div className="grid items-start gap-20 xl:grid-cols-12 xl:gap-4">
          <section className="xl:col-span-8">
            <h1 className="max-w-[24ch] font-raleway text-4xl font-semibold leading-snug lg:text-5xl lg:leading-snug">
              Access curated courses worth ₹
              <span className="font-roboto text-alert-dark line-through">
                <span className="text-4xl text-white lg:text-[3.25rem]">
                  18,500
                </span>
              </span>{' '}
              at just{' '}
              <span className="font-roboto text-4xl text-primary-light lg:text-[3.25rem]">
                ₹99
              </span>{' '}
              per year!
            </h1>
            <ul className="mt-11 space-y-8 2xl:mt-20 2xl:space-y-16">
              <PlanBenefit iconType="book">
                <span className="font-semibold text-primary-light">100+</span>{' '}
                Job relevant courses
              </PlanBenefit>
              <PlanBenefit iconType="clock">
                <span className="font-semibold text-primary-light">
                  20,000+
                </span>{' '}
                Hours of content
              </PlanBenefit>
              <PlanBenefit iconType="live">
                <span className="font-semibold text-primary-light">
                  Exclusive
                </span>{' '}
                webinar access
              </PlanBenefit>
              <PlanBenefit iconType="scholar">
                Scholarship worth{' '}
                <span className="font-semibold text-primary-light">
                  ₹94,500
                </span>
              </PlanBenefit>
              <PlanBenefit iconType="no-ads">
                <span className="font-semibold text-primary-light">
                  Ad Free
                </span>{' '}
                learning experience
              </PlanBenefit>
            </ul>
          </section>
          <section className="xl:col-span-full xl:col-start-9">
            <CheckoutForm />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Checkout
