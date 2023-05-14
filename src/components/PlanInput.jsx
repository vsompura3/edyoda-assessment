import { useId } from 'react'
import Icon from './Icon'

const PlanInput = ({
  subscriptionTimeSpan,
  monthlyPrice,
  calculatedPrice,
  expired,
  recommended,
  setSelected,
  selected,
}) => {
  const labelId = useId()
  return (
    <label
      htmlFor={labelId}
      className={`relative flex cursor-pointer items-center justify-between rounded border-2  p-4 ${
        selected === `plan-${monthlyPrice}`
          ? 'border-success-dark bg-success-light'
          : 'border-surface-200  bg-white'
      }`}
    >
      <div className="flex items-center gap-3 font-semibold">
        <input
          type="radio"
          name="expired"
          data-plan={`plan-${monthlyPrice}`}
          id={labelId}
          checked={selected === `plan-${monthlyPrice}`}
          className="sr-only"
          disabled={expired}
          onChange={e => setSelected(e.target.dataset.plan)}
        />
        {selected === `plan-${monthlyPrice}` ? (
          <Icon type="checkmark" />
        ) : (
          <div
            aria-hidden="true"
            className={`relative h-[33px] w-[32px] shrink-0 rounded-full border-2 border-surface-200 ${
              expired &&
              'after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-surface-200'
            }`}
          ></div>
        )}
        <span
          className={`${expired ? 'text-surface-200' : 'text-surface-300'}`}
        >
          {subscriptionTimeSpan} Months Subscription
        </span>
      </div>
      <div className="flex flex-col items-end">
        <p
          className={`${
            expired ? 'text-surface-200' : 'text-surface-300'
          } font-semibold`}
        >
          <span className="mr-2 text-xs font-normal">Total</span> ₹
          {calculatedPrice}
        </p>
        <p
          className={`${
            expired ? 'text-surface-200' : 'text-surface-300'
          } text-xs`}
        >
          ₹{monthlyPrice}{' '}
          <span className="text-[10px] text-surface-200">/mo</span>
        </p>
      </div>
      {expired && (
        <span className="absolute left-9 top-0 rounded-b bg-danger-light px-7 py-0.5 text-xs text-white">
          offer expired
        </span>
      )}
      {recommended && (
        <span className="absolute left-9 top-0 rounded-b bg-success-dark px-6 py-0.5 text-xs text-white">
          Recommended
        </span>
      )}
    </label>
  )
}

export default PlanInput
