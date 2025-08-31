function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appSrote,
}) {
  return (
    <div className="container">
      <div className="row p-4 mt-5">
        <div className="col-8">
          <img src={imageUrl} alt="" style={{marginLeft:"5rem"}}/>
        </div>
        <div className="col-4 mt-5 p-3">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div className="mt-4">
            <a href={tryDemo}> Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "5rem" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appSrote}>
              <img src="media/images/appstoreBadge.svg" alt="" style={{ marginLeft: "50px" }}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
