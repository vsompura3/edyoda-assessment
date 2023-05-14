const PlanInput = () => {
  return (
    <div className="bg-teal-100 flex items-center justify-between p-4 rounded border-surface-200 border-2">
      <label
        htmlFor="offer-expired"
        className="flex items-center gap-3 font-semibold"
      >
        <input type="radio" name="expired" id="offer-expired" />
        <span>12 Months Subscription</span>
      </label>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          <span className="text-xs mr-2 font-normal">Total</span> ₹179
        </p>
        <p className="text-xs">
          ₹15 <span className="text-surface-200 text-[10px]">/mo</span>
        </p>
      </div>
    </div>
  )
}

export default PlanInput
