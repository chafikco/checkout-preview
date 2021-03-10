import React from 'react';

class Nav extends React.Component {
  render() {
    return (<div className="section">
      <div className="container">
        <div className="row"><img src="css/images/logo-white.svg" loading="lazy" height="25" alt=""/>
        <a href="https://developer.paddle.com/" target="_blank" class="link">More Paddle docs →</a>
      </div>
        <div className="row">
          <h1 className="h1">Checkout Preview</h1>
        </div>
        <div className="options-grid">
          <div id="w-node-f3d0cb05-8dec-61a2-dc7b-ce4c5b7158e6-2ca5c3ea" className="checkout-type">
            <div className="type-inline"><img src="css/images/mdi_iframe-braces-outline.svg" loading="lazy" width="20" alt="" className="image"/></div>
            <div className="seperator"></div>
            <div className="type-overlay"><img src="css/images/carbon_popup.svg" loading="lazy" width="20" alt=""/></div>
          </div>
          <div className="checkout-theme">
            <div className="theme-light"><img src="css/images/cil_sun.svg" loading="lazy" width="20" alt=""/></div>
            <div className="seperator"></div>
            <div className="theme-dark"><img src="css/images/bi_moon-stars.svg" loading="lazy" width="20" alt=""/></div>
          </div>
          <div className="checkout-product">
            <div className="product-one-time"><img src="css/images/ic_round-looks-one.svg" loading="lazy" width="20" alt=""/></div>
            <div className="seperator"></div>
            <div className="product-subscription"><img src="css/images/wpf_recurring-appointment.svg" loading="lazy" width="17" alt=""/></div>
          </div>
          <div className="checkout-language">
            <div data-hover="" data-delay="0" className="w-dropdown">
              <div className="btn-dropdown w-dropdown-toggle">
                <div className="icon w-icon-dropdown-toggle"></div>
                <div className="txt-dropdown">Language</div>
              </div>
              <nav className="btn-dropdown-list w-dropdown-list">
                <a href="#" className="w-dropdown-link">Link 1</a>
                <a href="#" className="w-dropdown-link">Link 2</a>
                <a href="#" className="w-dropdown-link">Link 3</a>
              </nav>
            </div>
          </div>
          <div className="checkout-currency">
            <div data-hover="" data-delay="0" className="w-dropdown">
              <div className="btn-dropdown w-dropdown-toggle">
                <div className="icon w-icon-dropdown-toggle"></div>
                <div className="txt-dropdown">Currency</div>
              </div>
              <nav className="btn-dropdown-list w-dropdown-list">
                <a href="#" className="w-dropdown-link">Link 1</a>
                <a href="#" className="w-dropdown-link">Link 2</a>
                <a href="#" className="w-dropdown-link">Link 3</a>
              </nav>
            </div>
          </div>
          <div className="checkout-code"><img src="css/images/eva_code-outline.svg" loading="lazy" width="20" alt=""/></div>
          <a href="#" className="btn-inverse w-button">Preview</a>
        </div>
      </div>
    </div>)
  }
}

export default Nav;
