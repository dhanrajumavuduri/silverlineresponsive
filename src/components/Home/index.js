// Write your JS code here
import './index.css'

const Home = () => (
  <div className="wcu-section pt-5 pb-5" id="wcuSection">
    <div className="container fluid">
      <div className="row">
        <div className="col-12 col-md-7">
          <h1 className="wcu-section-heading">Get in Line for Silverline?</h1>
          <p className="wcu-section-description">
            At the launch of the presale silverline token will be landed on the
            binance smart chain planet to get to milkway purchase the silverline
            token at the just$0.0013
          </p>
          <button type="button" className="button">
            Join our Community
          </button>
        </div>

        <div className="col-12 col-md-5">
          <h1 className="paragraph">PRE SALE</h1>
          <div className="wcu-card p-3 mb-3">
            <input
              className="input"
              type="text"
              placeholder="Enter USDT BEP-20 _"
            />
            <input
              className="input"
              type="text"
              placeholder="SilverLine Amount"
            />
            <p>min amount=10USDT</p>
            <div>
              <button type="button" className="buybutton">
                BUY SLN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
