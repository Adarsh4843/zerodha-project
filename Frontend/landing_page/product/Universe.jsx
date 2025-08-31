function Universe() {
  return (
    <div className="container">
      <div className="row text-center text-muted p-5 mt-5">
        <h2 className="mb-3">The Zerodha Universe</h2>
        <p className="mb-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-4">
        <div className="col-4 p-5 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "12rem", marginBottom: "1rem" }}
          />
          <p className=" text-muted" style={{ marginBottom: "3rem" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>

          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "12rem", marginBottom: "1rem" }}
          />
          <p className=" text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "12rem", marginTop: "2rem", marginBottom: "2rem" }}
          />
          <p className=" text-muted" style={{ marginBottom: "5rem" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "12rem", marginBottom: "2rem" }}
          />
          <p className=" text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "12rem", marginTop: "1rem", marginBottom: "2rem" }}
          />
          <p className=" text-muted" style={{ marginBottom: "4rem" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "10rem", marginBottom: "2rem" }}
          />
          <p className=" text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <a href="/signup">
        <button
          className="btn btn-primary fs-5 mt-3 mb-5"
          style={{ width: "20%", marginLeft: "40%" }}
        >
          Signup now
        </button>
        </a>
      </div>
    </div>
  );
}

export default Universe;
