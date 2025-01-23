import '../Price.css'

export default function Price() {
    return (
      <div className="price-container">
        <h2>Pricing</h2>  
        <div className="price-card">  
          <div className="price-header">
            <h3>Basic</h3>  
            <span className="price-amount">R200 Once Off</span>
          </div>
          <div className="price-details">
            <h4>Covers:</h4>
            <ul> 
              <li>HTML5</li>
              <li>CSS</li>
              <li>Introduction to JavaScript</li>
            </ul>
          </div>
          <button className="price-button">Get Started</button> 
        </div>

        <h2>Pricing</h2>  
        <div className="price-card">  
          <div className="price-header">
            <h3>Full-Package</h3>  
            <span className="price-amount">R600 Once Off</span>
          </div>
          <div className="price-details">
            <h4>Covers:</h4>
            <ul> 
              <li>Advanced Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>Linux</li>
              
            </ul>
          </div>
          <h2 className="Coming-soon">Coming Soon!</h2>
        </div>
      </div>
    );
  }
