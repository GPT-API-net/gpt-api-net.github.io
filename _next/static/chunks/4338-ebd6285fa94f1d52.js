(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4338],{4264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o=a(n(2265)),r=a(n(1448)),i=n(4879),c=n(6348);function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(a);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),e&&("object"===u(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function a(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a),r.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(c.COMMENT_COUNT_SCRIPT_ID)?d():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),c.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(c.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,r=e.className,i=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["shortname","config","children","className"]);return o.default.createElement("span",s({},i,{className:"".concat(c.COMMENT_COUNT_CLASS).concat(r?" ".concat(r):""),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}],function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(a.prototype,n),a}(o.default.Component);t.CommentCount=p,p.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string}).isRequired,className:r.default.string,children:r.default.node}},6793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o=c(n(2265)),r=c(n(1448)),i=n(6348);function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=l(i);return e=t?Reflect.construct(n,arguments,l(this).constructor):n.apply(this,arguments),e&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function i(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),r.apply(this,arguments)}return n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,r=(e.commentId,e.showMedia,e.showParentComment,function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["width","height","commentId","showMedia","showParentComment"]));return o.default.createElement("iframe",u({},r,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(i.prototype,n),i}(o.default.Component);t.CommentEmbed=f,f.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},f.propTypes={commentId:r.default.string.isRequired,showMedia:r.default.bool,showParentComment:r.default.bool,width:r.default.number,height:r.default.number,className:r.default.string}},9134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o=a(n(2265)),r=a(n(1448)),i=n(4879),c=n(6348);function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(a);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),e&&("object"===u(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function a(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a),r.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(c.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),c.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(c.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById(c.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.sso&&(this.sso=e.sso),e.language&&(this.language=e.language),c.CALLBACKS.forEach(function(n){t.callbacks[n]=[e[n]]})}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["shortname","config"]));return o.default.createElement("div",s({},t,{id:c.THREAD_ID}))}}],function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(a.prototype,n),a}(o.default.Component);t.DiscussionEmbed=d,d.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string,categoryID:r.default.string,remoteAuthS3:r.default.string,apiKey:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func,sso:r.default.shape({name:r.default.string,button:r.default.string,icon:r.default.string,url:r.default.string,logout:r.default.string,profile_url:r.default.string,width:r.default.string,height:r.default.string})}).isRequired}},2698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var o=a(n(2265)),r=a(n(1448)),i=n(4879),c=n(6348);function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(a);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),e&&("object"===u(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function a(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a),r.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(c.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),c.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(c.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(e){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(c.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["shortname","config"]));return o.default.createElement("div",s({},t,{id:c.RECOMMENDATIONS_ID}))}}],function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(a.prototype,n),a}(o.default.Component);t.Recommendations=d,d.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string})}},6348:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0,t.THREAD_ID="disqus_thread",t.EMBED_SCRIPT_ID="dsq-embed-scr",t.COMMENT_COUNT_CLASS="disqus-comment-count",t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",t.COMMENT_EMBED_WIDTH=420,t.COMMENT_EMBED_HEIGHT=320,t.RECOMMENDATIONS_ID="disqus_recommendations",t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},5798:function(e,t,n){"use strict";Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var o=n(4264),r=n(6793),i=n(9134),c=n(2698);o.CommentCount,r.CommentEmbed,i.DiscussionEmbed,c.Recommendations},4879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(e){return e.remove()})},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,c=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,i)},t),c&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var o,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return c(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,void 0)}}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(r.s();!(o=r.n()).done;){var u=o.value;if("object"===i(t[u])){if(e(t[u],n[u]))return!0}else if(t[u]!==n[u]&&!a(t[u]))return!0}}catch(e){r.e(e)}finally{r.f()}return!1};var o,r=(o=n(2265))&&o.__esModule?o:{default:o};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function a(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return r.default.isValidElement(e)})}},9949:function(e,t,n){"use strict";var o=n(8877);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,c){if(c!==o){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},1448:function(e,t,n){e.exports=n(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2281:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(2265),r=function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=o.forwardRef(function(e,t){var n=o.useState(!1),i=n[0],c=n[1],a=o.useState(!1),u=a[0],s=a[1],l=encodeURIComponent(e.id),f="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,p=e.poster||"hqdefault",m="&".concat(e.params)||0,y=e.muted?"&mute=1":"",h=e.announce||"Watch",b=e.webp?"webp":"jpg",g=e.webp?"vi_webp":"vi",v=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(g,"/").concat(f,"/").concat(p,".").concat(b):"https://i.ytimg.com/".concat(g,"/").concat(l,"/").concat(p,".").concat(b)),w=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var O=e.playlist?"".concat(w,"/embed/videoseries?autoplay=1").concat(y,"&list=").concat(l).concat(m):"".concat(w,"/embed/").concat(l,"?autoplay=1&state=1").concat(y).concat(m),S=e.activatedClass||"lyt-activated",_=e.adNetwork||!1,E=e.aspectHeight||9,C=e.aspectWidth||16,I=e.iframeClass||"",T=e.playerClass||"lty-playbtn",D=e.wrapperClass||"yt-lite",M=e.onIframeAdded||function(){},R=e.rel?"prefetch":"preload",j=e.containerElement||"article";return o.useEffect(function(){u&&M()},[u]),o.createElement(o.Fragment,null,o.createElement("link",{rel:R,href:v,as:"image"}),o.createElement(o.Fragment,null,i&&o.createElement(o.Fragment,null,o.createElement("link",{rel:"preconnect",href:w}),o.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),_&&o.createElement(o.Fragment,null,o.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),o.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),o.createElement(j,{onPointerOver:function(){i||c(!0)},onClick:function(){u||s(!0)},className:"".concat(D," ").concat(u?S:""),"data-title":d,style:r({backgroundImage:"url(".concat(v,")")},{"--aspect-ratio":"".concat(E/C*100,"%")})},o.createElement("button",{type:"button",className:T,"aria-label":"".concat(h," ").concat(d)}),u&&o.createElement("iframe",{ref:t,className:I,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:O})))})},5997:function(){},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return l}});var o=n(2265),r=["light","dark"],i="(prefers-color-scheme: dark)",c="undefined"==typeof window,a=o.createContext(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=o.useContext(a))?e:u},l=e=>o.useContext(a)?e.children:o.createElement(d,{...e}),f=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:u=!0,storageKey:s="theme",themes:l=f,defaultTheme:d=c?"system":"light",attribute:b="data-theme",value:g,children:v,nonce:w}=e,[O,S]=o.useState(()=>m(s,d)),[_,E]=o.useState(()=>m(s)),C=g?Object.values(g):l,I=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=h());let o=g?g[t]:t,i=n?y():null,a=document.documentElement;if("class"===b?(a.classList.remove(...C),o&&a.classList.add(o)):o?a.setAttribute(b,o):a.removeAttribute(b),u){let e=r.includes(d)?d:null,n=r.includes(t)?t:e;a.style.colorScheme=n}null==i||i()},[]),T=o.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),D=o.useCallback(e=>{E(h(e)),"system"===O&&c&&!t&&I("system")},[O,t]);o.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(D),D(e),()=>e.removeListener(D)},[D]),o.useEffect(()=>{let e=e=>{e.key===s&&T(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),o.useEffect(()=>{I(null!=t?t:O)},[t,O]);let M=o.useMemo(()=>({theme:O,setTheme:T,forcedTheme:t,resolvedTheme:"system"===O?_:O,themes:c?[...l,"system"]:l,systemTheme:c?_:void 0}),[O,T,t,_,c,l]);return o.createElement(a.Provider,{value:M},o.createElement(p,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:u,storageKey:s,themes:l,defaultTheme:d,attribute:b,value:g,children:v,attrs:C,nonce:w}),v)},p=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:a,enableColorScheme:u,defaultTheme:s,value:l,attrs:f,nonce:d}=e,p="system"===s,m="class"===c?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(f.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),y=u?(r.includes(s)?s:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=l?l[e]:e,i=t?e+"|| ''":"'".concat(o,"'"),a="";return u&&n&&!t&&r.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===c?t||o?a+="c.add(".concat(i,")"):a+="null":o&&(a+="d[s](n,".concat(i,")")),a},b=t?"!function(){".concat(m).concat(h(t),"}()"):a?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(h("dark"),"}else{").concat(h("light"),"}}else if(e){").concat(l?"var x=".concat(JSON.stringify(l),";"):"").concat(h(l?"x[e]":"e",!0),"}").concat(p?"":"else{"+h(s,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(l?"var x=".concat(JSON.stringify(l),";"):"").concat(h(l?"x[e]":"e",!0),"}else{").concat(h(s,!1,!1),";}").concat(y,"}catch(t){}}();");return o.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:b}})}),m=(e,t)=>{let n;if(!c){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);