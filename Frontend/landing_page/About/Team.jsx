function Team() {
  return (
    <div className="container">
      <div className="row text-center text-muted">
        <h3>People</h3>
      </div>
      <div className="row p-5 text-muted " style={{ lineHeight: "1.5" }}>
        <div className="col-6 leftside p-5">
          <img
            src="media/images/aadarshGadhavi.jpg"
            alt=""
            style={{
              height: "18rem",
              borderRadius: "100%",
              marginLeft: "8rem",
            }}
          />
          <h4 className="mt-3 text-center">Adarsh Gadhavi</h4>
          <p className="m-0 text-center">Founder, CEO</p>
        </div>
        <div
          className="col-6 rightside mt-5">
          <p>
            Adarsh bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            <b>Connect on</b> <a href="">Homepage</a> /
            <a href=""> TradingQnA</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
