import logo from './logo.svg';
import './index.css';
import data from './data'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
function App() {
  return (
    <div className="grid-container">
        <header className="header">
            <div className="home">
                Amazon
            </div>
            <div className="sign">
                Sign in
                Cart
            </div>
        </header>
        <main className="main2">
                <div className="content">
                    <ul className="products">
                      {
                        data.products.map(product =>
                          <li>
                            <div className="product" key={product._id}>
                                <img src={product.image} alt="image1"/>
                                <x-star-rating>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star">  </div>
                                </x-star-rating>
                                <div className="product-name">{product.name}</div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">${product.price}</div>
                            </div>
                        </li>)
                      }
                        <li>
                            <div className="product">
                                <img src="1.jpeg" alt="image1"/>
                                <x-star-rating>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star">  </div>
                                </x-star-rating>
                                <div className="product-name">Shirt</div>
                                <div className="product-brand">Levi</div>
                                <div className="product-price">$60</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="1.jpeg" alt="image1"/>
                                <x-star-rating>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star">  </div>
                                </x-star-rating>
                                <div className="product-name">Shirt</div>
                                <div className="product-brand">Levi</div>
                                <div className="product-price">$60</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="1.jpeg" alt="image1"/>
                                <x-star-rating>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star">  </div>
                                </x-star-rating>
                                <div className="product-name">Shirt</div>
                                <div className="product-brand">Levi</div>
                                <div className="product-price">$60</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img src="1.jpeg" alt="image1"/>
                                <x-star-rating>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star checked">  </div>
                                    <div className="fa fa-star">  </div>
                                </x-star-rating>
                                <div className="product-name">Shirt</div>
                                <div className="product-brand">Levi</div>
                                <div className="product-price">$60</div>
                            </div>
                        </li>
                    </ul>
                </div>
        </main>
        <main className="main1">Hello</main>
        <footer className="footer">
            <div>
            All rights reserved
            </div>
        </footer>
    </div>
  );
}

export default App;
