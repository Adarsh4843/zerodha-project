

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
    return ( 
         <div className="container me-5">
      <div className="row p-4">
        <div className="col-4 " style={{marginTop:"10rem"}}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div className="mt-4">
            <a href={learnMore}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
         <div className="col-8">
          <img src={imageUrl} alt="" style={{marginLeft:"5rem"}}/>
        </div>
      </div>
    </div>
     );
}

export default RightSection;