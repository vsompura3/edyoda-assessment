import Icon from './Icon'
import PlanInput from './PlanInput'

const CheckoutForm = () => {
  return (
    <div className="bg-white px-6 py-8 rounded-lg text-surface-300">
      {/* top */}
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center gap-1">
          <span className="bg-primary-light flex items-center justify-center text-white rounded-full tabular-nums w-9  aspect-square text-2xl">
            1
          </span>
          <p>Sign Up</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="bg-primary-light flex items-center justify-center text-white rounded-full tabular-nums w-9  aspect-square text-2xl">
            2
          </span>
          <p>Subscribe</p>
        </div>
      </div>
      {/* middle */}
      <h2 className="text-2xl font-semibold text-center mt-7">
        Select your subscription plan
      </h2>
      {/* Inputs */}
      <div className="mt-7 space-y-4">
        <PlanInput />
        <PlanInput />
        <PlanInput />
        <PlanInput />
      </div>
      <div
        aria-hidden="true"
        className="w-full h-[2px] mt-7 bg-surface-200"
      ></div>
      {/* another section */}
      <div className="mt-7">
        <div className="flex justify-between items-center gap-2 px-6">
          <span>Subscription Fee</span>
          <span className="font-medium tracking-wide">₹18,500</span>
        </div>
        <div className="bg-gradient-to-br p-0.5 mt-4 rounded-lg from-alert-dark to-alert-light">
          <div className="flex justify-between bg-white px-6 py-4 rounded-md bg-gradient-to-br from-alert-dark/20 to-alert-light/20">
            <div className="">
              <p className="text-alert-dark">Limited time offer</p>
              <p className="flex items-center gap-2 -ml-0.5">
                <Icon
                  type="clock-inverted"
                  style="shrink-0 w-6 h-6 text-alert-dark"
                />
                <span className="text-alert-dark text-sm">
                  Offer valid till 25th March 2023
                </span>
              </p>
            </div>
            <span className="tracking-wide">- ₹18,401</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
