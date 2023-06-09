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
      aria-selected={selected === `plan-${monthlyPrice}`}
      className={`relative flex cursor-pointer items-center justify-between rounded border-2 px-4 py-3.5 ${
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
          <Icon type="checkmark" style="h-8 w-8" />
        ) : (
          <div
            aria-hidden="true"
            className={`relative h-[30px] w-[30px] shrink-0 rounded-full border-2 border-surface-200 ${
              expired &&
              'after:absolute after:left-1/2 after:top-1/2 after:h-3.5 after:w-3.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-surface-200'
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
          <span className="text-[10px] text-surface-200" aria-label="per month">
            /mo
          </span>
        </p>
      </div>
      {expired && (
        <span className="absolute left-14 top-0 rounded-b bg-danger-light px-7 py-0.5 text-xs text-white">
          offer expired
        </span>
      )}
      {recommended && (
        <span className="absolute left-14 top-0 rounded-b bg-success-dark px-6 py-0.5 text-xs text-white">
          Recommended
        </span>
      )}
    </label>
  )
}

export default PlanInput
