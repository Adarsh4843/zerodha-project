function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="mt-5 mb-3">Open a Zerodha account</h2>
        <p>
          Modern platform and apps, &#8377; 0 investment, and flat &#8377; 20
          intrady and F&Q trades.
        </p>

        <a href="/signup">
        <button
          className="btn btn-primary fs-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up now
        </button>
        </a>
      </div>
    </div>
  );
}

export default OpenAccount;
