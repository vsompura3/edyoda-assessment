import { useState } from 'react'
import RazorPayBadge from '../assets/images/razorpay-badge.png'
import Icon from './Icon'
import PlanInput from './PlanInput'

const CheckoutForm = () => {
  const [selected, setSelected] = useState('plan-15')

  return (
    <div className="rounded-lg bg-white px-6 py-8 text-surface-300">
      {/* heading */}
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center gap-1">
          <span className="flex aspect-square w-9 items-center justify-center rounded-full bg-primary-light text-2xl  tabular-nums text-white">
            1
          </span>
          <p>Sign Up</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="flex aspect-square w-9 items-center justify-center rounded-full bg-primary-light text-2xl  tabular-nums text-white">
            2
          </span>
          <p>Subscribe</p>
        </div>
      </div>
      {/* middle */}
      <h2 className="mt-7 text-center text-2xl font-semibold">
        Select your subscription plan
      </h2>
      {/* subscription plans */}
      <div className="mt-7 space-y-4">
        <PlanInput
          setSelected={setSelected}
          subscriptionTimeSpan={12}
          monthlyPrice={8}
          calculatedPrice={99}
          expired={true}
          selected={selected}
        />
        <PlanInput
          setSelected={setSelected}
          subscriptionTimeSpan={12}
          monthlyPrice={15}
          calculatedPrice={179}
          recommended={true}
          selected={selected}
        />
        <PlanInput
          setSelected={setSelected}
          subscriptionTimeSpan={6}
          monthlyPrice={25}
          calculatedPrice={149}
          selected={selected}
        />
        <PlanInput
          setSelected={setSelected}
          subscriptionTimeSpan={3}
          monthlyPrice={33}
          calculatedPrice={99}
          selected={selected}
        />
      </div>
      <div
        aria-hidden="true"
        className="mt-7 h-[2px] w-full bg-surface-200"
      ></div>
      {/* subscription calculations */}
      <div className="mt-7">
        <div className="flex items-center justify-between gap-2 px-6">
          <span>Subscription Fee</span>
          <span className="font-medium tracking-wide">₹18,500</span>
        </div>
        <div className="mt-3 rounded-lg bg-gradient-to-br from-alert-dark to-alert-light p-0.5">
          <div className="flex justify-between gap-2 rounded-md bg-white bg-gradient-to-br from-alert-dark/20 to-alert-light/20 px-6 py-4">
            <div className="">
              <p className="text-alert-dark">Limited time offer</p>
              <p className="-ml-0.5 flex items-center gap-2">
                <Icon
                  type="clock-inverted"
                  style="shrink-0 w-6 h-6 text-alert-dark"
                />
                <span className="text-sm text-alert-dark">
                  Offer valid till 25th March 2023
                </span>
              </p>
            </div>
            <span className="font-semibold tracking-wide">- ₹18,401</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between px-6">
          <p className="font-light">
            <span className="font-medium">Total</span> (Incl. of 18% GST)
          </p>
          <span className="text-2xl font-bold">₹149</span>
        </div>
      </div>
      <div className="mt-7 flex items-center gap-4">
        <button className="flex-1 rounded border-2 border-danger-light px-3.5 py-4 font-bold uppercase text-danger-light hover:bg-danger-light hover:text-white">
          Cancel
        </button>
        <button className="flex-1 rounded border-2 border-success-dark bg-success-dark px-3.5 py-4 font-bold uppercase text-white hover:bg-white hover:text-success-dark">
          Proceed to pay
        </button>
      </div>
      <img src={RazorPayBadge} alt="razor pay tag" className="mt-7" />
    </div>
  )
}

export default CheckoutForm
