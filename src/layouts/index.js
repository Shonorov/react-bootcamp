import React, {PureComponent} from 'react';
import Navigation from '../components/navigation';
import Loading from "../components/loading";

class BaseLayout extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
        <main className="main">
          {this.props.children}
        </main>
        <footer className="footer">
          <div className="container">
            <div className="copyright">© ОАО «Рога и Копыта», 2019</div>
            <br/>
            <div className="links">
              <a className="link-item" href="/terms/privacy_policy/">Политика конфиденциальности</a>
              <br/>
              <a className="link-item" target="_blank"
                 href="https://app.appsflyer.com/id1089560311?pid=tsum_footer&amp;c=Organic%20Search&amp;af_channel=google&amp;af_adset=(none)&amp;af_sub1=organic&amp;af_sub2=(not%20provided)&amp;af_dp=tsumapp%3A%2F%2Fwww.tsum.ru%252Fbrand%252F&amp;af_sub3=undefined.&amp;af_sub4=(none)&amp;af_ad=(not%20set)">
                Наше приложение <span className="ios-app-link"></span>
              </a>
            </div>
          </div>
        </footer>
        <Loading/>
      </div>
    );
  }
}

export default BaseLayout;
