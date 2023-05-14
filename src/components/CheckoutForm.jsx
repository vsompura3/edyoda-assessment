const CheckoutForm = () => {
  return (
    <div className="bg-white px-6 py-8 rounded-lg text-surface-300">
      {/* top */}
      <div>
        <div>
          <span>1</span>
          <p>Sign Up</p>
        </div>
        <div>
          <span>2</span>
          <p>Subscribe</p>
        </div>
      </div>
      {/* middle */}
      <h2>Select your subscription plan</h2>
      <form>
        <div>
          <input type="radio" name="expired" id="offer-expired" />
          <label htmlFor="offer-expired">12 Months Subscription</label>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
