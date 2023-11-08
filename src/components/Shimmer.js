import './Shimmer.css'

const Shimmer = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <div className="card" key={i}>
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>
            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>
      );
    }
    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards}
    </div> ;
  };
  

export default Shimmer;
