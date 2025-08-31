

function Brokerage() {
    return ( <div className="container border-top">
          <div className="row mt-5">
        <div className="col-8">
          <h4 className="text-center mb-5" style={{ color: "#0d6efd" }}>Brokerage calculator</h4>
          <ul style={{fontSize:"12px"}}>
            <li>
              <p className="f">
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </p>
            </li>
            <li>
              <p>Digital contract notes will be sent via e-mail.</p>
            </li>
            <li>
              <p>
                Physical copies of contract notes, if required, shall be charged
                20 per contract note. Courier charges apply.
              </p>
            </li>
            <li>
              <p>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                For NRI account (PIS), 0.5% or 2200 per executed order for
                equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                If the account is in debit balance, any order placed will be
                charged 240 per executed order instead of 220
                per executed order.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-4">
             <h4 className="text-center" style={{ color: "#0d6efd" }}>List of charges</h4>
        </div>
      </div>
    </div> );
}

export default Brokerage;