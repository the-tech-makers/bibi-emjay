/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */ 

if (typeof BtCurrency === 'undefined') {
  var BtCurrency = {};
}
BtCurrency.loadedData = false;
BtCurrency.cookie = {
  configuration: {
    expires: 365,
    path: '/',
    domain: window.location.hostname
  },
  name: 'currency',
  nativeName: 'native_currency',
  write: function(currency) {
    jQuery.cookie(this.name, currency, this.configuration);
  },
  read: function() {
    return jQuery.cookie(this.name);
  },
  destroy: function() {
    jQuery.cookie(this.name, null, this.configuration);
  },
  writeNative: function(currency) {
    jQuery.cookie(this.nativeName, currency, this.configuration);
  },
  readNative: function() {
    return jQuery.cookie(this.nativeName);
  },
  destroyNative: function() {
    jQuery.cookie(this.nativeName, null, this.configuration);
  }
};

BtCurrency.moneyFormats = {
  "USD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} USD"
  },
  "EUR":{
    "money_format":"&euro;{{amount}}",
    "money_with_currency_format":"&euro;{{amount}} EUR"
  },
  "GBP":{
    "money_format":"&pound;{{amount}}",
    "money_with_currency_format":"&pound;{{amount}} GBP"
  },
  "CAD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} CAD"
  },
  "ALL":{
    "money_format":"Lek {{amount}}",
    "money_with_currency_format":"Lek {{amount}} ALL"
  },
  "DZD":{
    "money_format":"DA {{amount}}",
    "money_with_currency_format":"DA {{amount}} DZD"
  },
  "AOA":{
    "money_format":"Kz{{amount}}",
    "money_with_currency_format":"Kz{{amount}} AOA"
  },
  "ARS":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} ARS"
  },
  "AMD":{
    "money_format":"{{amount}} AMD",
    "money_with_currency_format":"{{amount}} AMD"
  },
  "AWG":{
    "money_format":"Afl{{amount}}",
    "money_with_currency_format":"Afl{{amount}} AWG"
  },
  "AUD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} AUD"
  },
  "BBD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} Bds"
  },
  "AZN":{
    "money_format":"m.{{amount}}",
    "money_with_currency_format":"m.{{amount}} AZN"
  },
  "BDT":{
    "money_format":"Tk {{amount}}",
    "money_with_currency_format":"Tk {{amount}} BDT"
  },
  "BSD":{
    "money_format":"BS${{amount}}",
    "money_with_currency_format":"BS${{amount}} BSD"
  },
  "BHD":{
    "money_format":"{{amount}}0 BD",
    "money_with_currency_format":"{{amount}}0 BHD"
  },
  "BYR":{
    "money_format":"Br {{amount}}",
    "money_with_currency_format":"Br {{amount}} BYR"
  },
  "BZD":{
    "money_format":"BZ${{amount}}",
    "money_with_currency_format":"BZ${{amount}} BZD"
  },
  "BTN":{
    "money_format":"Nu {{amount}}",
    "money_with_currency_format":"Nu {{amount}} BTN"
  },
  "BAM":{
    "money_format":"KM {{amount_with_comma_separator}}",
    "money_with_currency_format":"KM {{amount_with_comma_separator}} BAM"
  },
  "BRL":{
    "money_format":"R$ {{amount_with_comma_separator}}",
    "money_with_currency_format":"R$ {{amount_with_comma_separator}} BRL"
  },
  "BOB":{
    "money_format":"Bs{{amount_with_comma_separator}}",
    "money_with_currency_format":"Bs{{amount_with_comma_separator}} BOB"
  },
  "BWP":{
    "money_format":"P{{amount}}",
    "money_with_currency_format":"P{{amount}} BWP"
  },
  "BND":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} BND"
  },
  "BGN":{
    "money_format":"{{amount}} лв",
    "money_with_currency_format":"{{amount}} лв BGN"
  },
  "MMK":{
    "money_format":"K{{amount}}",
    "money_with_currency_format":"K{{amount}} MMK"
  },
  "KHR":{
    "money_format":"KHR{{amount}}",
    "money_with_currency_format":"KHR{{amount}}"
  },
  "KYD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} KYD"
  },
  "XAF":{
    "money_format":"FCFA{{amount}}",
    "money_with_currency_format":"FCFA{{amount}} XAF"
  },
  "CLP":{
    "money_format":"${{amount_no_decimals}}",
    "money_with_currency_format":"${{amount_no_decimals}} CLP"
  },
  "CNY":{
    "money_format":"&#165;{{amount}}",
    "money_with_currency_format":"&#165;{{amount}} CNY"
  },
  "COP":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} COP"
  },
  "CRC":{
    "money_format":"&#8353; {{amount_with_comma_separator}}",
    "money_with_currency_format":"&#8353; {{amount_with_comma_separator}} CRC"
  },
  "HRK":{
    "money_format":"{{amount_with_comma_separator}} kn",
    "money_with_currency_format":"{{amount_with_comma_separator}} kn HRK"
  },
  "CZK":{
    "money_format":"{{amount_with_comma_separator}} K&#269;",
    "money_with_currency_format":"{{amount_with_comma_separator}} K&#269;"
  },
  "DKK":{
    "money_format":"{{amount_with_comma_separator}}",
    "money_with_currency_format":"kr.{{amount_with_comma_separator}}"
  },
  "DOP":{
    "money_format":"RD$ {{amount}}",
    "money_with_currency_format":"RD$ {{amount}}"
  },
  "XCD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"EC${{amount}}"
  },
  "EGP":{
    "money_format":"LE {{amount}}",
    "money_with_currency_format":"LE {{amount}} EGP"
  },
  "ETB":{
    "money_format":"Br{{amount}}",
    "money_with_currency_format":"Br{{amount}} ETB"
  },
  "XPF":{
    "money_format":"{{amount_no_decimals_with_comma_separator}} XPF",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} XPF"
  },
  "FJD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"FJ${{amount}}"
  },
  "GMD":{
    "money_format":"D {{amount}}",
    "money_with_currency_format":"D {{amount}} GMD"
  },
  "GHS":{
    "money_format":"GH&#8373;{{amount}}",
    "money_with_currency_format":"GH&#8373;{{amount}}"
  },
  "GTQ":{
    "money_format":"Q{{amount}}",
    "money_with_currency_format":"{{amount}} GTQ"
  },
  "GYD":{
    "money_format":"G${{amount}}",
    "money_with_currency_format":"${{amount}} GYD"
  },
  "GEL":{
    "money_format":"{{amount}} GEL",
    "money_with_currency_format":"{{amount}} GEL"
  },
  "HNL":{
    "money_format":"L {{amount}}",
    "money_with_currency_format":"L {{amount}} HNL"
  },
  "HKD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"HK${{amount}}"
  },
  "HUF":{
    "money_format":"{{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} Ft"
  },
  "ISK":{
    "money_format":"{{amount_no_decimals}} kr",
    "money_with_currency_format":"{{amount_no_decimals}} kr ISK"
  },
  "INR":{
    "money_format":"Rs. {{amount}}",
    "money_with_currency_format":"Rs. {{amount}}"
  },
  "IDR":{
    "money_format":"{{amount_with_comma_separator}}",
    "money_with_currency_format":"Rp {{amount_with_comma_separator}}"
  },
  "ILS":{
    "money_format":"{{amount}} NIS",
    "money_with_currency_format":"{{amount}} NIS"
  },
  "JMD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} JMD"
  },
  "JPY":{
    "money_format":"&#165;{{amount_no_decimals}}",
    "money_with_currency_format":"&#165;{{amount_no_decimals}} JPY"
  },
  "JEP":{
    "money_format":"&pound;{{amount}}",
    "money_with_currency_format":"&pound;{{amount}} JEP"
  },
  "JOD":{
    "money_format":"{{amount}}0 JD",
    "money_with_currency_format":"{{amount}}0 JOD"
  },
  "KZT":{
    "money_format":"{{amount}} KZT",
    "money_with_currency_format":"{{amount}} KZT"
  },
  "KES":{
    "money_format":"KSh{{amount}}",
    "money_with_currency_format":"KSh{{amount}}"
  },
  "KWD":{
    "money_format":"{{amount}}0 KD",
    "money_with_currency_format":"{{amount}}0 KWD"
  },
  "KGS":{
    "money_format":"лв{{amount}}",
    "money_with_currency_format":"лв{{amount}}"
  },
  "LVL":{
    "money_format":"Ls {{amount}}",
    "money_with_currency_format":"Ls {{amount}} LVL"
  },
  "LBP":{
    "money_format":"L&pound;{{amount}}",
    "money_with_currency_format":"L&pound;{{amount}} LBP"
  },
  "LTL":{
    "money_format":"{{amount}} Lt",
    "money_with_currency_format":"{{amount}} Lt"
  },
  "MGA":{
    "money_format":"Ar {{amount}}",
    "money_with_currency_format":"Ar {{amount}} MGA"
  },
  "MKD":{
    "money_format":"ден {{amount}}",
    "money_with_currency_format":"ден {{amount}} MKD"
  },
  "MOP":{
    "money_format":"MOP${{amount}}",
    "money_with_currency_format":"MOP${{amount}}"
  },
  "MVR":{
    "money_format":"Rf{{amount}}",
    "money_with_currency_format":"Rf{{amount}} MRf"
  },
  "MXN":{
    "money_format":"$ {{amount}}",
    "money_with_currency_format":"$ {{amount}} MXN"
  },
  "MYR":{
    "money_format":"RM{{amount}} MYR",
    "money_with_currency_format":"RM{{amount}} MYR"
  },
  "MUR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} MUR"
  },
  "MDL":{
    "money_format":"{{amount}} MDL",
    "money_with_currency_format":"{{amount}} MDL"
  },
  "MAD":{
    "money_format":"{{amount}} dh",
    "money_with_currency_format":"Dh {{amount}} MAD"
  },
  "MNT":{
    "money_format":"{{amount_no_decimals}} &#8366",
    "money_with_currency_format":"{{amount_no_decimals}} MNT"
  },
  "MZN":{
    "money_format":"{{amount}} Mt",
    "money_with_currency_format":"Mt {{amount}} MZN"
  },
  "NAD":{
    "money_format":"N${{amount}}",
    "money_with_currency_format":"N${{amount}} NAD"
  },
  "NPR":{
    "money_format":"Rs{{amount}}",
    "money_with_currency_format":"Rs{{amount}} NPR"
  },
  "ANG":{
    "money_format":"&fnof;{{amount}}",
    "money_with_currency_format":"{{amount}} NA&fnof;"
  },
  "NZD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} NZD"
  },
  "NIO":{
    "money_format":"C${{amount}}",
    "money_with_currency_format":"C${{amount}} NIO"
  },
  "NGN":{
    "money_format":"&#8358;{{amount}}",
    "money_with_currency_format":"&#8358;{{amount}} NGN"
  },
  "NOK":{
    "money_format":"kr {{amount_with_comma_separator}}",
    "money_with_currency_format":"kr {{amount_with_comma_separator}} NOK"
  },
  "OMR":{
    "money_format":"{{amount_with_comma_separator}} OMR",
    "money_with_currency_format":"{{amount_with_comma_separator}} OMR"
  },
  "PKR":{
    "money_format":"Rs.{{amount}}",
    "money_with_currency_format":"Rs.{{amount}} PKR"
  },
  "PGK":{
    "money_format":"K {{amount}}",
    "money_with_currency_format":"K {{amount}} PGK"
  },
  "PYG":{
    "money_format":"Gs. {{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"Gs. {{amount_no_decimals_with_comma_separator}} PYG"
  },
  "PEN":{
    "money_format":"S/. {{amount}}",
    "money_with_currency_format":"S/. {{amount}} PEN"
  },
  "PHP":{
    "money_format":"&#8369;{{amount}}",
    "money_with_currency_format":"&#8369;{{amount}} PHP"
  },
  "PLN":{
    "money_format":"{{amount_with_comma_separator}} zl",
    "money_with_currency_format":"{{amount_with_comma_separator}} zl PLN"
  },
  "QAR":{
    "money_format":"QAR {{amount_with_comma_separator}}",
    "money_with_currency_format":"QAR {{amount_with_comma_separator}}"
  },
  "RON":{
    "money_format":"{{amount_with_comma_separator}} lei",
    "money_with_currency_format":"{{amount_with_comma_separator}} lei RON"
  },
  "RUB":{
    "money_format":"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
    "money_with_currency_format":"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
  },
  "RWF":{
    "money_format":"{{amount_no_decimals}} RF",
    "money_with_currency_format":"{{amount_no_decimals}} RWF"
  },
  "WST":{
    "money_format":"WS$ {{amount}}",
    "money_with_currency_format":"WS$ {{amount}} WST"
  },
  "SAR":{
    "money_format":"{{amount}} SR",
    "money_with_currency_format":"{{amount}} SAR"
  },
  "STD":{
    "money_format":"Db {{amount}}",
    "money_with_currency_format":"Db {{amount}} STD"
  },
  "RSD":{
    "money_format":"{{amount}} RSD",
    "money_with_currency_format":"{{amount}} RSD"
  },
  "SCR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} SCR"
  },
  "SGD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} SGD"
  },
  "SYP":{
    "money_format":"S&pound;{{amount}}",
    "money_with_currency_format":"S&pound;{{amount}} SYP"
  },
  "ZAR":{
    "money_format":"R {{amount}}",
    "money_with_currency_format":"R {{amount}} ZAR"
  },
  "KRW":{
    "money_format":"&#8361;{{amount_no_decimals}}",
    "money_with_currency_format":"&#8361;{{amount_no_decimals}} KRW"
  },
  "LKR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} LKR"
  },
  "SEK":{
    "money_format":"{{amount_no_decimals}} kr",
    "money_with_currency_format":"{{amount_no_decimals}} kr SEK"
  },
  "CHF":{
    "money_format":"SFr. {{amount}}",
    "money_with_currency_format":"SFr. {{amount}} CHF"
  },
  "TWD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} TWD"
  },
  "THB":{
    "money_format":"{{amount}} &#xe3f;",
    "money_with_currency_format":"{{amount}} &#xe3f; THB"
  },
  "TZS":{
    "money_format":"{{amount}} TZS",
    "money_with_currency_format":"{{amount}} TZS"
  },
  "TTD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} TTD"
  },
  "TND":{
    "money_format":"{{amount}}",
    "money_with_currency_format":"{{amount}} DT"
  },
  "TRY":{
    "money_format":"{{amount}}TL",
    "money_with_currency_format":"{{amount}}TL"
  },
  "UGX":{
    "money_format":"Ush {{amount_no_decimals}}",
    "money_with_currency_format":"Ush {{amount_no_decimals}} UGX"
  },
  "UAH":{
    "money_format":"₴{{amount}}",
    "money_with_currency_format":"₴{{amount}} UAH"
  },
  "AED":{
    "money_format":"Dhs. {{amount}}",
    "money_with_currency_format":"Dhs. {{amount}} AED"
  },
  "UYU":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} UYU"
  },
  "VUV":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}}VT"
  },
  "VEF":{
    "money_format":"Bs. {{amount_with_comma_separator}}",
    "money_with_currency_format":"Bs. {{amount_with_comma_separator}} VEF"
  },
  "VND":{
    "money_format":"{{amount_no_decimals_with_comma_separator}}&#8363;",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} VND"
  },
  "XBT":{
    "money_format":"{{amount_no_decimals}} BTC",
    "money_with_currency_format":"{{amount_no_decimals}} BTC"
  },
  "XOF":{
    "money_format":"CFA{{amount}}",
    "money_with_currency_format":"CFA{{amount}} XOF"
  },
  "ZMW":{
    "money_format":"K{{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"ZMW{{amount_no_decimals_with_comma_separator}}"
  }
};

BtCurrency.formatMoney = function(cents, format, notUseShopifyfunction) {
  if (typeof Shopify.formatMoney === 'function' && notUseShopifyfunction == undefined) {
    return Shopify.formatMoney(cents, format);
  }
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || '${{amount}}';
  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');
    if (isNaN(number) || number == null) { return 0; }
    number = (number/100.0).toFixed(precision);
    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';
    return dollars + cents;
  }
  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
    case 'amount_with_decimals_no_comma_separator':
      value = formatWithDelimiters(cents, 2, '', '.');
      break;   
  }
  return formatString.replace(placeholderRegex, value);
};

BtCurrency.convert = function(o, m, t) {
    return o * this.rates[m] / this.rates[t];
}
BtCurrency.rates = {"USD":1.0,"EUR":1.16926,"GBP":1.3222,"CAD":0.761119,"ARS":0.0356352,"AUD":0.738651,"BRL":0.254338,"CLP":0.00152325,"CNY":0.150659,"CYP":0.397899,"CZK":0.0451043,"DKK":0.156894,"EEK":0.0706676,"HKD":0.127433,"HUF":0.00361256,"ISK":0.00936811,"INR":0.0145123,"JMD":0.0077186,"JPY":0.00904407,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0519375,"NZD":0.679459,"NOK":0.124031,"PLN":0.268687,"SGD":0.732704,"SKK":21.5517,"SIT":175.439,"ZAR":0.0738248,"KRW":0.00089404,"SEK":0.114038,"CHF":1.00682,"TWD":0.0327553,"UYU":0.0316395,"MYR":0.247258,"BSD":1.0,"CRC":0.00176387,"RON":0.250871,"PHP":0.0187052,"AED":0.272294,"VEB":0.000100125,"IDR":6.95175e-05,"TRY":0.217034,"THB":0.030106,"TTD":0.148555,"ILS":0.274856,"SYP":0.00194171,"XCD":0.370032,"COP":0.000347453,"RUB":0.0158237,"HRK":0.15807,"KZT":0.00291045,"TZS":0.000439667,"XPT":842.45,"SAR":0.266667,"NIO":0.03165,"LAK":0.000118584,"OMR":2.60078,"AMD":0.00207065,"CDF":0.000618062,"KPW":0.0011111,"SPL":6.0,"KES":0.00992762,"ZWD":0.00276319,"KHR":0.000246637,"MVR":0.0649462,"GTQ":0.133497,"BZD":0.497885,"BYR":5.0351e-05,"LYD":0.729901,"DZD":0.00849263,"BIF":0.000560288,"GIP":1.3222,"BOB":0.144812,"XOF":0.00178252,"STD":4.75536e-05,"NGN":0.00277025,"PGK":0.30758,"ERN":0.0666667,"MWK":0.00137719,"CUP":0.0377358,"GMD":0.0211902,"CVE":0.0106036,"BTN":0.0145123,"XAF":0.00178252,"UGX":0.000260565,"MAD":0.105694,"MNT":0.000405757,"LSL":0.0738248,"XAG":16.0535,"TOP":0.438338,"SHP":1.3222,"RSD":0.00991164,"HTG":0.0150217,"MGA":0.000302168,"MZN":0.0168891,"FKP":1.3222,"BWP":0.0964214,"HNL":0.0416059,"PYG":0.000175657,"JEP":1.3222,"EGP":0.0558945,"LBP":0.00066335,"ANG":0.558145,"WST":0.385845,"TVD":0.738651,"GYD":0.00477651,"GGP":1.3222,"NPR":0.00902785,"KMF":0.00237669,"IRR":2.33048e-05,"XPD":951.531,"SRD":0.133929,"TMM":5.71317e-05,"SZL":0.0738248,"MOP":0.123721,"BMD":1.0,"XPF":0.00979836,"ETB":0.0362643,"JOD":1.41044,"MDL":0.0594929,"MRO":0.00280885,"YER":0.00398709,"BAM":0.597831,"AWG":0.558659,"PEN":0.304184,"VEF":0.100125,"SLL":0.000125571,"KYD":1.21951,"AOA":0.00399351,"TND":0.381838,"TJS":0.108976,"SCR":0.074035,"LKR":0.00629133,"DJF":0.00561816,"GNF":0.000110564,"VUV":0.00892424,"SDG":0.0555179,"IMP":1.3222,"GEL":0.408996,"FJD":0.476295,"DOP":0.0202121,"XDR":1.40866,"MUR":0.0289651,"MMK":0.000711224,"LRD":0.0066019,"BBD":0.5,"ZMK":0.000102063,"XAU":1257.35,"VND":4.33333e-05,"UAH":0.0379603,"TMT":0.285659,"IQD":0.000839791,"BGN":0.597831,"KGS":0.0146654,"RWF":0.00116347,"BHD":2.65957,"UZS":0.00012739,"PKR":0.00821577,"MKD":0.0189717,"AFN":0.0135873,"NAD":0.0738248,"BDT":0.0118927,"AZN":0.587691,"SOS":0.00172891,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.12612,"ALL":0.00925979,"BND":0.732704,"KWD":3.30428,"GHS":0.208309,"ZMW":0.102063,"XBT":6523.0,"NTD":0.0337206,"BYN":0.50351,"CNH":0.150114,"MRU":0.0280885,"STN":0.0475536};
BtCurrency.convertNumber = function(number, oldCurrency, newCurrency) {
  var cents = BtCurrency.convert(number, oldCurrency, newCurrency);
  return BtCurrency.formatMoney(cents, "{{amount_with_decimals_no_comma_separator}}", true);
};
BtCurrency.convertSilence = function(oldCurrency, newCurrency, selector, format) {
  if(enableCurrencyConverter == false || this.loadedData == false) {
    return;
  }
  jQuery(selector || 'span.money').each(function() {
    // If the amount has already been converted, we leave it alone.
    if (jQuery(this).attr('data-currency') === newCurrency) return;
    // If we are converting to a currency that we have saved, we will use the saved amount.
    if (jQuery(this).attr('data-currency-'+newCurrency)) {
      jQuery(this).html(jQuery(this).attr('data-currency-'+newCurrency));
    }
    else {
      // Converting to Y for the first time? Let's get to it!
      var cents = 0.0;
      var oldFormat = BtCurrency.moneyFormats[oldCurrency][format || BtCurrency.format] || '{{amount}}';
      var newFormat = BtCurrency.moneyFormats[newCurrency][format || BtCurrency.format] || '{{amount}}';
      if (oldFormat.indexOf('amount_no_decimals') !== -1) {
        cents = BtCurrency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)*100, oldCurrency, newCurrency);
      }
      else if (oldCurrency === 'JOD' || oldCurrency == 'KWD' || oldCurrency == 'BHD') {
        cents = BtCurrency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)/10, oldCurrency, newCurrency);
      }
      else { 
        cents = BtCurrency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10), oldCurrency, newCurrency);
      }
      var newFormattedAmount = BtCurrency.formatMoney(cents, newFormat);
      jQuery(this).html(newFormattedAmount);
      jQuery(this).attr('data-currency-'+newCurrency, newFormattedAmount);
    }
    // We record the new currency locally.
    jQuery(this).attr('data-currency', newCurrency);
  });
};
BtCurrency.convertAll = function(oldCurrency, newCurrency, selector, format) {
  if(enableCurrencyConverter == false) {
    return;
  }
  this.convertSilence(oldCurrency, newCurrency, selector, format);
  this.currentCurrency = newCurrency;
  this.cookie.write(newCurrency);
};
BtCurrency.switcherClass = {
  wrap: '.currency-switcher',
  code: '.cs__code',
  current: '.cs__current-code',
  active: '.active'/*,
  explainWrap: '.currency-explain',
  explainCurrent: '.currency-explain__current'*/
}
BtCurrency.addNativeCurrencyToSwitcher = function() {
  if(enableCurrencyAuto) {
    var nativeCookie = this.cookie.readNative();
    if(nativeCookie != null && nativeCookie != undefined && nativeCookie != 'undefined') {
      if($(this.switcherClass.wrap + ' ul').length > 0 && $(this.switcherClass.code + '[data-code="' + nativeCookie + '"]').length == 0) {
        if($('.csi__code--last').length > 0) {
          $('.csi__code--last').removeClass('csi__code--last');
        }
        $(this.switcherClass.wrap + ' ul').append('<li><a href="#" class="cs__code csi__code csi__code--last" data-code="' + nativeCookie + '">' + nativeCookie + '</a></li>');
      }
    }
  }
}
var currencySubmitting = false;
BtCurrency.initSwitcher = function() {
  var selector = this.switcherClass;
  this.addNativeCurrencyToSwitcher();
  $(document).on('click', selector.code, function(e) {
    e.preventDefault();
    if(enableCurrencyConverter) {
      if(!BtCurrency.loadedData) {
        return;
      }
      var newCurrency = $(this).attr('data-code');
      if(newCurrency == BtCurrency.currentCurrency) {
        return;
      }
      var oldCurrency = BtCurrency.currentCurrency;
      BtCurrency.convertAll(oldCurrency, newCurrency);
      BtCurrency.updateSwitcher();
    } else {
      // Use Shopify plus
      if(currencySubmitting) {
        return;
      }
      if($('#currency_form').length > 0) {
        currencySubmitting = true;
        $('#currency_form select').val($(this).attr('data-code'));
        $('#currency_form').submit();
      }
    }
  });
}
BtCurrency.updateSwitcher = function() {
  var selector = this.switcherClass, newCurrency = this.currentCurrency;
  if($(selector.wrap).length > 0) {
    if($(selector.code + '[data-code="' + newCurrency + '"]').length > 0 || enableCurrencyAuto) {
      $(selector.current).text(newCurrency);
    }
    $(selector.code + selector.active).removeClass(selector.active.replace('.',''));
    $(selector.code + '[data-code="' + newCurrency + '"]').addClass(selector.active.replace('.',''));  
  }
  /*if($(selector.explainWrap).length > 0) {
    if(newCurrency == defaultCurrency) {
      $(selector.explainWrap).fadeOut();
    } else {
      $(selector.explainCurrent).text(newCurrency);
      $(selector.explainWrap).fadeIn();
    }
  }*/
}
BtCurrency.initSwitcher();
BtCurrency.format = currencyFormat;

/* Sometimes merchants change their shop currency, let's tell our JavaScript file */
BtCurrency.moneyFormats[shopCurrency].money_with_currency_format = currencyFormat1;
BtCurrency.moneyFormats[shopCurrency].money_format = currencyFormat2;
  
/* Default currency */
BtCurrency.currentCurrency = defaultCurrency;

if(enableCurrencyConverter) {
  $.ajaxSetup({
    cache: true
  });
  $.getScript("//cdn.shopify.com/s/javascripts/currencies.js", function( data, textStatus, jqxhr ) {
    BtCurrency.rates = Currency.rates;
   
    /* Cookie currency */
    try {cookieCurrency = BtCurrency.cookie.read();} catch (err) {} // ignore errors reading cookies

    /* Fix for customer account pages */
    jQuery('span.money span.money').each(function() {
      jQuery(this).parents('span.money').removeClass('money');
    });

    /* Saving the current price */
    jQuery('span.money').each(function() {
      jQuery(this).attr('data-currency-' + shopCurrency, jQuery(this).html());
    });

    // If there's no cookie.
    if (cookieCurrency == null || cookieCurrency == undefined || cookieCurrency == 'undefined') {
      new Promise(function(resolve1, reject1) {
        if(enableCurrencyAuto) {
          try {
            // var services = ['https://ipinfo.io/json'/*, 'https://extreme-ip-lookup.com/json/'*/];
            var indexService = Math.floor(Math.random() * Math.floor(theme.currencyServices.length));
            //var indexService = 0;
            $.getJSON(theme.currencyServices[indexService])
            .then(
              function success(response) {
                var countryCode;
                if(response.countryCode != undefined) {
                  countryCode = response.countryCode;
                } else {
                  countryCode = response.country;
                }
                new Promise(function(resolve2, reject2) {
                  $.getJSON('/?view=currencies', function(response) {
                    if(response[countryCode] != undefined) {
                      defaultCurrency = response[countryCode].code.split(",")[0];
                      BtCurrency.cookie.writeNative(defaultCurrency);
                      BtCurrency.addNativeCurrencyToSwitcher();
                    }
                    resolve1();
                  });  
                });
              },
              function fail(data, status) {
                console.log('Request failed.  Returned status of', status);
              }
            );
          } catch(e) {
            reject1(e);
          }
        } else {
          resolve1();
        }
      }).then(function() {
        BtCurrency.loadedData = true;
        if (shopCurrency !== defaultCurrency) {
          BtCurrency.convertAll(shopCurrency, defaultCurrency);
        }
        else {
          BtCurrency.currentCurrency = defaultCurrency;
          try {BtCurrency.cookie.write(defaultCurrency);} catch (err) {} // ignore errors reading cookies
        }
        BtCurrency.updateSwitcher();
      }, function(err) {
        console.log(err);
      });
    }
    // If the cookie value does not correspond to any value in the currency dropdown.
    else if (jQuery('.currency-switcher').length && jQuery('.cs__code[data-code="' + cookieCurrency + '"]').length === 0) {
      /*BtCurrency.currentCurrency = shopCurrency;
      try {BtCurrency.cookie.write(shopCurrency);} catch (err) {}*/ // ignore errors reading cookies
      BtCurrency.loadedData = true;
      if(!enableCurrencyAuto) {
        if (shopCurrency !== defaultCurrency) {
          BtCurrency.convertAll(shopCurrency, defaultCurrency);
        }
        else {
          BtCurrency.currentCurrency = defaultCurrency;
          try {BtCurrency.cookie.write(defaultCurrency);} catch (err) {} // ignore errors reading cookies
        }
      } else if (cookieCurrency === shopCurrency) {
        BtCurrency.loadedData = true;
        BtCurrency.currentCurrency = shopCurrency;
      } else {
        BtCurrency.loadedData = true;
        BtCurrency.convertAll(shopCurrency, cookieCurrency);
      }
      BtCurrency.updateSwitcher();
    }
    else if (cookieCurrency === shopCurrency) {
      BtCurrency.loadedData = true;
      BtCurrency.currentCurrency = shopCurrency;
      BtCurrency.updateSwitcher();
    }
    else {
      BtCurrency.loadedData = true;
      BtCurrency.convertAll(shopCurrency, cookieCurrency);
      BtCurrency.updateSwitcher();
    }
  });
}
