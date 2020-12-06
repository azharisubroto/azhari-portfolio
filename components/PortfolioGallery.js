const portfolio = [
  {
    id: 1,
    name: 'Your Life Choices',
    site: 'yourlifechoices.com.au'
  },
  {
    id: 2,
    name: 'Compare Club',
    site: null,
    image: '/static/img/portfolio/cc-big.png'
  }
]

export default function PortfolioGallery(props) {
  const PortfolioItem = (props) => {
    const item = props.item
    const image = item.site ? 'https://cdn.statically.io/screenshot/' + item.site + '?w=345' : item.image
    return (
      <div className="portfolio-item">
        <div className="portfolio-card">
          <div className="bar">
            <div className="bar-action"></div>
          </div>
          <img src={image} alt={item.name} loading="lazy" />
        </div>
        <style jsx>{`
          .portfolio-item {
            width: calc(100% / 2);
            padding: 20px;
            padding-top: 0;
          }

          .portfolio-card {
            background: #f3f8fe;
            box-shadow: 0 20px 25px -5px #dbe2ea, 0 10px 10px -5px #dbe2ea;
            height: 285px;
            cursor: pointer;
            overflow: hidden;
            border-radius: 14px;

            .bar {
              background: #e8e8e8;
              padding: 8px 12px;

              .bar-action {
                height: 12px;
                width: 12px;
                background: #ff5f56;
                box-shadow: 20px 0 0 #ffbd2e, 40px 0 0 #27c93f;
                border-radius: 50%;
              }
            }

            img {
              max-width: 100%;
              object-fit: cover !important;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <>
      <div {...props}>
        <div className="main-gallery">
          {portfolio.map((item) => (
            <PortfolioItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .main-gallery {
          min-height: 100vh;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}
