(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1089],{3759:function(e,t,n){var a={"./menu.ar.json":[1510,1510],"./menu.da.json":[6781,6781],"./menu.de.json":[8607,8607],"./menu.en.json":[9053,9053],"./menu.es.json":[1107,1107],"./menu.fi.json":[936,936],"./menu.fr.json":[4902,4902],"./menu.he.json":[4403,4403],"./menu.it.json":[9766,9766],"./menu.ja.json":[7634,7634],"./menu.ko.json":[2040,2040],"./menu.nl.json":[5389,5389],"./menu.no.json":[1662,1662],"./menu.pt.json":[2562,2562],"./menu.ru.json":[7364,7364],"./menu.sv.json":[7569,7569],"./menu.th.json":[7793,7793],"./menu.tr.json":[4608,4608],"./menu.vi.json":[545,545],"./menu.zh-hant.json":[7752,7752],"./menu.zh.json":[5427,5427]};function o(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,19)})}o.keys=function(){return Object.keys(a)},o.id=3759,e.exports=o},8621:function(e,t,n){var a={"./ar.json":[1861,1861],"./da.json":[5130,5130],"./de.json":[3650,3650],"./en.json":[7890,7890],"./es.json":[8559,8559],"./fi.json":[7549,7549],"./fr.json":[5345,5345],"./he.json":[9659,9659],"./it.json":[5177,5177],"./ja.json":[3302,3302],"./ko.json":[1594,1594],"./nl.json":[8757,8757],"./no.json":[3524,3524],"./pt.json":[2140,2140],"./ru.json":[8827,8827],"./sv.json":[1794,1794],"./th.json":[6843,6843],"./tr.json":[6720,6720],"./vi.json":[8068,8068],"./zh-hant.json":[8359,8359],"./zh.json":[4355,4355]};function o(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,19)})}o.keys=function(){return Object.keys(a)},o.id=8621,e.exports=o},8541:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,9199)),Promise.resolve().then(n.bind(n,5806)),Promise.resolve().then(n.bind(n,6323)),Promise.resolve().then(n.bind(n,4854)),Promise.resolve().then(n.bind(n,7906)),Promise.resolve().then(n.bind(n,3419))},2281:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(2265),o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=a.forwardRef(function(e,t){var n=a.useState(!1),r=n[0],i=n[1],c=a.useState(!1),s=c[0],l=c[1],u=encodeURIComponent(e.id),g="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,d=e.poster||"hqdefault",p="&".concat(e.params)||0,h=e.muted?"&mute=1":"",f=e.announce||"Watch",j=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",v=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(w,"/").concat(g,"/").concat(d,".").concat(j):"https://i.ytimg.com/".concat(w,"/").concat(u,"/").concat(d,".").concat(j)),b=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var P=e.playlist?"".concat(b,"/embed/videoseries?autoplay=1").concat(h,"&list=").concat(u).concat(p):"".concat(b,"/embed/").concat(u,"?autoplay=1&state=1").concat(h).concat(p),y=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,_=e.aspectHeight||9,k=e.aspectWidth||16,N=e.iframeClass||"",I=e.playerClass||"lty-playbtn",x=e.wrapperClass||"yt-lite",T=e.onIframeAdded||function(){},A=e.rel?"prefetch":"preload",D=e.containerElement||"article";return a.useEffect(function(){s&&T()},[s]),a.createElement(a.Fragment,null,a.createElement("link",{rel:A,href:v,as:"image"}),a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:b}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(D,{onPointerOver:function(){r||i(!0)},onClick:function(){s||l(!0)},className:"".concat(x," ").concat(s?y:""),"data-title":m,style:o({backgroundImage:"url(".concat(v,")")},{"--aspect-ratio":"".concat(_/k*100,"%")})},a.createElement("button",{type:"button",className:I,"aria-label":"".concat(f," ").concat(m)}),s&&a.createElement("iframe",{ref:t,className:N,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:P})))})},9199:function(e,t,n){"use strict";n.r(t);var a=n(7437),o=n(6648),r=n(2265);t.default=e=>{let{src:t,priority:n,fallback:i,...c}=e,[s,l]=(0,r.useState)(t);return(0,r.useEffect)(()=>{l(t)},[t]),(0,a.jsx)(o.default,{...c,src:s,priority:n,onError:()=>{l(i)}})}},5806:function(e,t,n){"use strict";var a=n(7437),o=n(145),r=n(803),i=n(6463),c=n(7417);t.default=e=>{var t,n,s;let{lang:l,title:u,meta_title:g,image:m,description:d,canonical:p,noindex:h}=e,{meta_image:f,meta_author:j,meta_description:w}=o.metadata,{base_url:v}=o.site,b=(0,i.usePathname)(),P=(0,c.qz)(),y=RegExp("(".concat(P.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g"),C=b.replace(y,"").replace(/^\/|\/$/g,"");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,r.ab)("".concat(g||u?"".concat(g||u," - "):"").concat((null===(t=P.find(e=>e.languageCode===l))||void 0===t?void 0:t.title)||o.site.title))}),p&&(0,a.jsx)("link",{rel:"canonical",href:p,itemProp:"url"}),P.filter(e=>!(b.includes("/tags/")||b.includes("/categories/")||b.includes("/authors/"))||e.languageCode===l).map(e=>(0,a.jsx)("link",{rel:"alternate",hrefLang:e.languageCode,href:"".concat(v,"/").concat(e.languageCode).concat(C?"/"+C:"")},e.languageCode)),h&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,r.ab)(d||w)}),(0,a.jsx)("meta",{name:"author",content:j}),(0,a.jsx)("meta",{property:"og:title",content:(0,r.ab)("".concat(g||u?"".concat(g||u," - "):"").concat((null===(n=P.find(e=>e.languageCode===l))||void 0===n?void 0:n.title)||o.site.title))}),(0,a.jsx)("meta",{property:"og:description",content:(0,r.ab)(d||w)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(v,"/").concat(b.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,r.ab)("".concat(g||u?"".concat(g||u," - "):"").concat((null===(s=P.find(e=>e.languageCode===l))||void 0===s?void 0:s.title)||o.site.title))}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,r.ab)(d||w)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(v).concat(m||f)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(v).concat(m||f)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},6323:function(e,t,n){"use strict";var a=n(7437),o=n(2265);t.default=e=>{let{title:t,children:n,className:r}=e,[i,c]=(0,o.useState)(!1);return(0,a.jsxs)("div",{className:"accordion ".concat(i&&"active"," ").concat(r),children:[(0,a.jsxs)("button",{className:"accordion-header",onClick:()=>c(!i),children:[t,(0,a.jsx)("svg",{className:"accordion-icon",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:(0,a.jsx)("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,a.jsx)("div",{className:"accordion-content",children:n})]})}},4854:function(e,t,n){"use strict";var a=n(7437);t.default=function(e){let{children:t}=e;return(0,a.jsx)("div",{className:"tab-content-panel",children:t})}},7906:function(e,t,n){"use strict";var a=n(7437),o=n(2265);t.default=function(e){let{children:t}=e,[n,r]=(0,o.useState)(0),i=(0,o.useRef)([]),[c,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{c?i.current[n].focus():s(!0)},[n]);let l=(e,a)=>{"Enter"===e.key||" "===e.key?r(a):"ArrowRight"===e.key?r((n+1)%t.length):"ArrowLeft"===e.key&&r((n-1+t.length)%t.length)};return(0,a.jsxs)("div",{className:"tab",children:[(0,a.jsx)("ul",{className:"tab-nav",role:"tablist",children:t.map((e,t)=>(0,a.jsx)("li",{className:"tab-nav-item ".concat(t===n&&"active"),role:"tab",tabIndex:t===n?0:-1,onClick:()=>r(t),onKeyDown:e=>l(e,t),ref:e=>i.current[t]=e,children:e.props.name},t))}),t.map((e,t)=>(0,a.jsx)("div",{className:"tab-content ".concat(t===n?"block":"hidden"),children:e.props.children},t))]})}},3419:function(e,t,n){"use strict";var a=n(7437),o=n(2281);n(5997),t.default=e=>{let{id:t,title:n,...r}=e;return(0,a.jsx)(o.Z,{wrapperClass:"yt-lite rounded-lg",id:t,title:n,...r})}},7417:function(e,t,n){"use strict";n.d(t,{qz:function(){return c},Mb:function(){return s},FC:function(){return i}});var a=n(145),o=JSON.parse('[{"languageName":"English","languageCode":"en","contentDir":"english","title":"GPT API Resources","weight":1},{"languageName":"简体中文","languageCode":"zh","contentDir":"chinese","title":"GPT API 资源","weight":1},{"languageName":"繁體中文","languageCode":"zh-hant","contentDir":"traditional_chinese","title":"GPT API 資源","weight":1},{"languageName":"Espa\xf1ol","languageCode":"es","contentDir":"spanish","title":"Recursos de la API de GPT","weight":1},{"languageName":"日本語","languageCode":"ja","contentDir":"japanese","title":"GPT API リソース","weight":1},{"languageName":"한국어","languageCode":"ko","contentDir":"korean","title":"GPT API 리소스","weight":1},{"languageName":"Deutsch","languageCode":"de","contentDir":"german","title":"GPT-API-Ressourcen","weight":1},{"languageName":"Fran\xe7ais","languageCode":"fr","contentDir":"french","title":"Ressources API GPT","weight":1},{"languageName":"Русский","languageCode":"ru","contentDir":"russian","title":"GPT API Ресурсы","weight":1},{"languageName":"Portugu\xeas","languageCode":"pt","contentDir":"portuguese","title":"Recursos da API GPT","weight":1},{"languageName":"عربي","languageCode":"ar","contentDir":"arabic","title":"موارد واجهة برمجة التطبيقات الخاصة بـ GPT","weight":1},{"languageName":"Nederlands","languageCode":"nl","contentDir":"dutch","title":"GPT API-bronnen","weight":1},{"languageName":"Italiano","languageCode":"it","contentDir":"italian","title":"Risorse API GPT","weight":1},{"languageName":"Tiếng Việt","languageCode":"vi","contentDir":"vietnamese","title":"T\xe0i nguy\xean API GPT","weight":1},{"languageName":"T\xfcrk\xe7e","languageCode":"tr","contentDir":"turkish","title":"GPT API Kaynakları","weight":1},{"languageName":"ภาษาไทย","languageCode":"th","contentDir":"thai","title":"ทรัพยากร GPT API","weight":1},{"languageName":"עברית","languageCode":"he","contentDir":"hebrew","title":"משאבי GPT API","weight":1},{"languageName":"Svenska","languageCode":"sv","contentDir":"swedish","title":"GPT API-resurser","weight":1},{"languageName":"Norsk","languageCode":"no","contentDir":"norwegian","title":"GPT API Resources","weight":1},{"languageName":"Dansk","languageCode":"da","contentDir":"danish","title":"GPT API Ressourcer","weight":1},{"languageName":"Suomi","languageCode":"fi","contentDir":"finnish","title":"GPT API Resurssit","weight":1}]');let r=a.settings.disable_languages,i=async e=>{let t=await n(3759)("./menu.".concat(e,".json")),a=await n(8621)("./".concat(e,".json"));return{...t,...a}},c=()=>o.filter(e=>!r.includes(e.languageCode)),s=()=>a.settings.default_language},803:function(e,t,n){"use strict";n.d(t,{OI:function(){return r},ab:function(){return c},gI:function(){return o},nR:function(){return i}}),n(7727);var a=n(2266);let o=(e,t)=>({__html:t?a.TU.parse(e):a.TU.parseInline(e)}),r=e=>{let t;try{t=decodeURI(decodeURI(e))}catch(n){console.error("Failed to decode URI component",n),t=e}return t.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()})},i=e=>r(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),c=e=>s(a.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),s=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},5997:function(){},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"GPT API Resources","name":"GPT API","base_url":"https://gpt-api.net","base_path":"","trailing_slash":false,"static":true,"favicon":"/images/favicon.png","logo":"","logo_darkmode":"","logo_width":"150","logo_height":"27","logo_text":"GPT API","logo_image":""},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog","default_language":"en","disable_languages":[],"default_language_in_subdir":false},"params":{"contact_form_action":"https://formspree.io/f/mqazqjqp","form_button_action":"https://formspree.io/f/mgvwylzl","recaptcha":{"key":"6LcbliUqAAAAADtNdU3wChCQ3OSaaLgCR2gjrV8-"},"since":"2024","copyright":"GPT API","icpbeian":""},"navigation_button":{"enable":false,"label":"Get Started","link":"https://gpt-api.net"},"disqus":{"enable":false,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"GPT API","meta_image":"/images/og-image.png","meta_description":"GPT API (gpt-api)"},"newsletter":{"provider":"convertkit"},"gtm":{"gtmId":"GTM-P5J7DB7P"},"version_info":{"version":true,"commit_id":true,"build_time":true}}')}},function(e){e.O(0,[1987,8056,4673,6648,2971,7023,1744],function(){return e(e.s=8541)}),_N_E=e.O()}]);