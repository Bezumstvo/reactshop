import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {categoriesActions} from '../../_actions';

class DeliveryPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
    <div className="row">
    <p style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
        <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>
        На сегодняшний день мы осуществляем доставку фермерских продуктов по четвергам&nbsp;и субботам. В&nbsp;вечернее время среды и пятницы доставка осуществляется по предварительной договоренности.&nbsp;При этом заказ следует сделать за два дня до доставки&nbsp;(по птице и яйцам -&nbsp;за три дня), чтобы наши фермеры&nbsp;успели подготовить заказ для Вас. Стоимость доставки по Москве&nbsp;– 280 рублей, при заказе на сумму более 1700 рублей доставка бесплатно. Так что закажите продукты для себя, друзей, коллег и сэкономьте на доставке:)
        </span>
      </p>
      <p style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
        <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>Также открыта возможность самовывоза из нашего офиса по адресу Москва,&nbsp;5-й Донской проезд, 19. Время самовывоза уточняйте по телефону
          <a href="tel:+7%C2%A0495%2099%2088%20280" x-apple-data-detectors-result="2" x-apple-data-detectors-type="telephone" x-apple-data-detectors="true">
            <strong>
              <font color="#0066cc">+7&nbsp;495 99 88 280</font>
            </strong>
          </a> , 8 999 983 05 71
        </span>
      </p>
      <p style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
        <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>
          Доставка за МКАД осуществляется по следующим условиям:
        </span>
      </p>
      <ul>
        <li>
          <div style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
            <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>
            до 5 км&nbsp;от МКАД - 450 руб., при сумме заказа более 3000 руб. - бесплатно;
            </span>
          </div>
        </li>
        <li>
          <p style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
            <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>
              от 5 до 20 км от МКАД - 900 руб., при сумме заказа более 4000 руб. - бесплатно;
            </span>
          </p>
        </li>
        <li>
          <p style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
            <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>
            от&nbsp;20 до 40 км от МКАД - 1500 руб., при сумме заказа более 6000 руб. - бесплатно;
            </span>
          </p>
        </li>
        <li>
          <div style={{"margin": "0cm 0cm 0pt", "verticalAlign": "baseline", "punctuationWrap":"simple", "msoLineBreakOverride": "restrictions"}}>
            <span style={{"color": "rgb(54, 54, 54)", "fontFamily": "Segoe Print", "fontSize": "8pt", "msoBidiFontSize": "9.0pt", "msoFareastFontFamily": "Calibri", "msoThemecolor": "accent2", "msoThemeshade": "128", "msoFontKerning": "12.0pt"}}>
            более 40 км от МКАД - оговаривается индивидуально.&nbsp;&nbsp;
            </span>
          </div>
        </li>
      </ul>
    </div>
    )}
}

const mapStateToProps = store => {
  const { datatable, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datatable
  }
}
const mapDispatchToProps = dispatch => ({
  getAll: c => dispatch(categoriesActions.getAll(c)),
})
const connectedDeliveryPage = connect(mapStateToProps,mapDispatchToProps)(DeliveryPage);
export { connectedDeliveryPage as DeliveryPage };
