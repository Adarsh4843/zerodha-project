import "./Support.css";

function Hero() {
  return (
    <section className="container-fluid mb-5" id="supportHero">
      <div className="p-4" id="supportWrapped">
        <h6 className="ls-2 mt-3">Support Portal</h6>
        <a href="" className="mt-3">Track Tickets</a>
      </div>

      <div className="row">
        <div className="col-5 p-3 mb-3" id="supportItemLeft">
          <h4 style={{ lineHeight: "1.5" }}>
            Search for an answer or browese help topics to create a ticket
          </h4>
          <div class="mb-3 mt-4">
            <input
              type="Text"
              class="form-control fs-6"
              id="exampleFormControlInput1"
              placeholder="Eg; how do i activate F&Q, why is my order getting rejected."
              style={{ width: "100%", height: "3rem" }}
            />
          </div>
          <a href="">Track account opening</a> &nbsp;&nbsp;
          <a href="">Track segment activation</a> &nbsp;&nbsp;
          <a href="">Intrady</a> &nbsp;&nbsp;
          <a href="">margins</a> &nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col col-4 p-3 mb-3" style={{color:"white"}}>
          <h4 style={{ lineHeight: "1.5" }}>Featured</h4>
          <ol>
            <li><a href="">Current Takeovers and Delisting - January 2024</a></li><br />
            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
