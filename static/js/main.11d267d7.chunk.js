(this["webpackJsonpjson-to-react-proptypes"]=this["webpackJsonpjson-to-react-proptypes"]||[]).push([[0],{111:function(e,t,r){e.exports=r(195)},116:function(e,t,r){},195:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),p=r.n(o),c=(r(116),r(27)),l=(r(117),r(199)),s=r(197),i=r(198),u=r(200),y=r(201),f=r(75),m=r(48),g=r(55),b={formatPropTypes:function(e){return JSON.stringify(e,null,4).replace(/"/gi,"").replace(/\[/gi,"PropTypes.arrayOf(").replace(/PropTypes.arrayOf\(\n {7} {/gi,"PropTypes.arrayOf(\n       PropTypes.shape({").replace(/\]/gi,")").replace(/: {/gi,": PropTypes.shape({").replace(/}\n/gi,"},").replace(/},/gi,"}),").replace(/}\),\n {4}\),/gi,"}),\n").replace(/}\), {12}}\),/gi,"}),\n            }),").replace(/}\), {4}\),/gi,"}),\n    ),")},formatDefaultPropTypes:function(e){return JSON.stringify(e,null,4).replace(/"/gi,"")},convertJsonToPropTypes:function(e){if(!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(e))return null;var t=JSON.parse(e);return t&&"object"===typeof t&&Object.keys(t)&&Object.keys(t).length?function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||!Object.keys(n)||!Object.keys(n).length)return[t,r];var a=Object(g.a)({},t),o=Object(g.a)({},r),p=Object.keys(n)[0],l=n[p];if("string"===typeof l&&(o[p]=null,a[p]="PropTypes.string"),"number"===typeof l&&(o[p]=0,a[p]="PropTypes.number"),"boolean"===typeof l&&(o[p]=!1,a[p]="PropTypes.bool"),"object"===typeof l){var s=e({},{},l),i=Object(c.a)(s,2),u=i[0],y=i[1];o[p]=y,a[p]=u}if(l&&Array.isArray(l)){var f=Object(c.a)(l,1),b=f[0];if(o[p]=[],"string"===typeof b&&(a[p]=["PropTypes.string"]),"number"===typeof b&&(a[p]=["PropTypes.number"]),"boolean"===typeof b&&(a[p]=["PropTypes.bool"]),"object"===typeof b){var v=e({},{},b),T=Object(c.a)(v,1),O=T[0];a[p]=[O]}}var j=Object.keys(n).reduce((function(e,t){return t!==p?Object(g.a)({},e,Object(m.a)({},t,n[t])):e}),{});return e(a,o,j)}({},{},t):null}},v=b.formatPropTypes,T=b.formatDefaultPropTypes,O=b.convertJsonToPropTypes,j=l.a.TextArea,d=s.a.Title,h=i.a.Header,P=i.a.Content,E=i.a.Footer,k=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2),r=t[0],o=t[1],p=Object(n.useState)(),l=Object(c.a)(p,2),s=l[0],m=l[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(h,{style:{backgroundColor:"white"}},a.a.createElement(u.a,null,a.a.createElement(y.a,{span:24},a.a.createElement(d,null,"Json to PropTypes")))),a.a.createElement(P,{style:{marginTop:"1rem",marginRight:"1rem",marginLeft:"1rem"}},a.a.createElement(u.a,{gutter:16,justify:"center",align:"middle"},a.a.createElement(y.a,{span:10},a.a.createElement(j,{rows:25,value:r,onChange:function(e){var t=e.target.value;return o(t)}})),a.a.createElement(y.a,{span:2},a.a.createElement(f.a,{type:"danger",shape:"round",onClick:function(){var e=O(r),t="\nimport PropTypes from 'prop-types'\n\n// propsType (validation)\nMyComponent.propTypes = ".concat(v(e[0]),"\n\n// default props\nMyComponent.defaultProps = ").concat(T(e[1]),"\n                  ");m(t)}},"Convert")),a.a.createElement(y.a,{span:10},a.a.createElement(j,{rows:25,value:s})))),a.a.createElement(E,null)))};k.defaultProps={};var w=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.11d267d7.chunk.js.map