function Hero() {
  return (
    <div className="container ">
      <div className="row text-center text-muted p-5 mt-3 border-bottom">
        <h2 className="mb-3">Pricing</h2>
        <p>Free equity investment and flat &#8377; 20 trady and F&Q trades</p>
      </div>
      <div className="row p-5 text-center text-muted">
        <div className="col-4">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ height: "10rem" }}
            className="mb-4"
          />
          <h3 className="mb-4">Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ height: "10rem" }}
            className="mb-4"
          />
          <h3 className="mb-4">Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ height: "10rem" }}
            className="mb-4"
          />
          <h3 className="mb-4">Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
