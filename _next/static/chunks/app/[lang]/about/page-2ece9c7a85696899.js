(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1844],{7168:function(e,t,a){Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.bind(a,9199)),Promise.resolve().then(a.bind(a,5806)),Promise.resolve().then(a.bind(a,6323)),Promise.resolve().then(a.bind(a,4854)),Promise.resolve().then(a.bind(a,7906)),Promise.resolve().then(a.bind(a,3419))},2281:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(2265),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=n.forwardRef(function(e,t){var a=n.useState(!1),c=a[0],r=a[1],i=n.useState(!1),l=i[0],s=i[1],u=encodeURIComponent(e.id),g="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,m=e.poster||"hqdefault",p="&".concat(e.params)||0,h=e.muted?"&mute=1":"",f=e.announce||"Watch",w=e.webp?"webp":"jpg",P=e.webp?"vi_webp":"vi",b=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(P,"/").concat(g,"/").concat(m,".").concat(w):"https://i.ytimg.com/".concat(P,"/").concat(u,"/").concat(m,".").concat(w)),v=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var C=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(h,"&list=").concat(u).concat(p):"".concat(v,"/embed/").concat(u,"?autoplay=1&state=1").concat(h).concat(p),y=e.activatedClass||"lyt-activated",N=e.adNetwork||!1,x=e.aspectHeight||9,k=e.aspectWidth||16,I=e.iframeClass||"",j=e.playerClass||"lty-playbtn",_=e.wrapperClass||"yt-lite",T=e.onIframeAdded||function(){},A=e.rel?"prefetch":"preload",G=e.containerElement||"article";return n.useEffect(function(){l&&T()},[l]),n.createElement(n.Fragment,null,n.createElement("link",{rel:A,href:b,as:"image"}),n.createElement(n.Fragment,null,c&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:v}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),N&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement(G,{onPointerOver:function(){c||r(!0)},onClick:function(){l||s(!0)},className:"".concat(_," ").concat(l?y:""),"data-title":d,style:o({backgroundImage:"url(".concat(b,")")},{"--aspect-ratio":"".concat(x/k*100,"%")})},n.createElement("button",{type:"button",className:j,"aria-label":"".concat(f," ").concat(d)}),l&&n.createElement("iframe",{ref:t,className:I,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:C})))})},9199:function(e,t,a){"use strict";a.r(t);var n=a(7437),o=a(6648),c=a(2265),r=a(145);t.default=e=>{let{src:t,priority:a,fallback:i,...l}=e,[s,u]=(0,c.useState)(t);return((0,c.useEffect)(()=>{u(t)},[t]),r.site.Yw)?(0,n.jsx)("img",{...l,src:s,onError:()=>{u(i)}}):(0,n.jsx)(o.default,{...l,src:s,priority:a,onError:()=>{u(i)}})}},5806:function(e,t,a){"use strict";var n=a(7437),o=a(145),c=a(803),r=a(6463),i=a(7812);t.default=e=>{var t,a,l;let{lang:s,title:u,meta_title:g,image:d,description:m,canonical:p,noindex:h}=e,{meta_image:f,meta_author:w,meta_description:P}=o.metadata,{base_url:b}=o.site,v=(0,r.usePathname)(),C=RegExp("(".concat(i.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g"),y=v.replace(C,"").replace(/^\/|\/$/g,"");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:(0,c.ab)("".concat(g||u?"".concat(g||u," - "):"").concat((null===(t=i.find(e=>e.languageCode===s))||void 0===t?void 0:t.title)||o.site.title))}),p&&(0,n.jsx)("link",{rel:"canonical",href:p,itemProp:"url"}),i.filter(e=>!(v.includes("/tags/")||v.includes("/categories/")||v.includes("/authors/"))||e.languageCode===s).map(e=>(0,n.jsx)("link",{rel:"alternate",hrefLang:e.languageCode,href:"".concat(b,"/").concat(e.languageCode).concat(y?"/"+y:"")},e.languageCode)),h&&(0,n.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,n.jsx)("meta",{name:"description",content:(0,c.ab)(m||P)}),(0,n.jsx)("meta",{name:"author",content:w}),(0,n.jsx)("meta",{property:"og:title",content:(0,c.ab)("".concat(g||u?"".concat(g||u," - "):"").concat((null===(a=i.find(e=>e.languageCode===s))||void 0===a?void 0:a.title)||o.site.title))}),(0,n.jsx)("meta",{property:"og:description",content:(0,c.ab)(m||P)}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(b,"/").concat(v.replace("/",""))}),(0,n.jsx)("meta",{name:"twitter:title",content:(0,c.ab)("".concat(g||u?"".concat(g||u," - "):"").concat((null===(l=i.find(e=>e.languageCode===s))||void 0===l?void 0:l.title)||o.site.title))}),(0,n.jsx)("meta",{name:"twitter:description",content:(0,c.ab)(m||P)}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(b).concat(d||f)}),(0,n.jsx)("meta",{name:"twitter:image",content:"".concat(b).concat(d||f)}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},6323:function(e,t,a){"use strict";var n=a(7437),o=a(2265);t.default=e=>{let{title:t,children:a,className:c}=e,[r,i]=(0,o.useState)(!1);return(0,n.jsxs)("div",{className:"accordion ".concat(r&&"active"," ").concat(c),children:[(0,n.jsxs)("button",{className:"accordion-header",onClick:()=>i(!r),children:[t,(0,n.jsx)("svg",{className:"accordion-icon",x:"0px",y:"0px",viewBox:"0 0 512 512",xmlSpace:"preserve",children:(0,n.jsx)("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,n.jsx)("div",{className:"accordion-content",children:a})]})}},4854:function(e,t,a){"use strict";var n=a(7437);t.default=function(e){let{children:t}=e;return(0,n.jsx)("div",{className:"tab-content-panel",children:t})}},7906:function(e,t,a){"use strict";var n=a(7437),o=a(2265);t.default=function(e){let{children:t}=e,[a,c]=(0,o.useState)(0),r=(0,o.useRef)([]),[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{i?r.current[a].focus():l(!0)},[a]);let s=(e,n)=>{"Enter"===e.key||" "===e.key?c(n):"ArrowRight"===e.key?c((a+1)%t.length):"ArrowLeft"===e.key&&c((a-1+t.length)%t.length)};return(0,n.jsxs)("div",{className:"tab",children:[(0,n.jsx)("ul",{className:"tab-nav",role:"tablist",children:t.map((e,t)=>(0,n.jsx)("li",{className:"tab-nav-item ".concat(t===a&&"active"),role:"tab",tabIndex:t===a?0:-1,onClick:()=>c(t),onKeyDown:e=>s(e,t),ref:e=>r.current[t]=e,children:e.props.name},t))}),t.map((e,t)=>(0,n.jsx)("div",{className:"tab-content ".concat(t===a?"block":"hidden"),children:e.props.children},t))]})}},3419:function(e,t,a){"use strict";var n=a(7437),o=a(2281);a(5997),t.default=e=>{let{id:t,title:a,...c}=e;return(0,n.jsx)(o.Z,{wrapperClass:"yt-lite rounded-lg",id:t,title:a,...c})}},803:function(e,t,a){"use strict";a.d(t,{OI:function(){return c},ab:function(){return i},gI:function(){return o},nR:function(){return r}}),a(7727);var n=a(2266);let o=(e,t)=>({__html:t?n.TU.parse(e):n.TU.parseInline(e)}),c=e=>{let t;try{t=decodeURI(decodeURI(e))}catch(a){console.error("Failed to decode URI component",a),t=e}return t.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()})},r=e=>c(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),i=e=>l(n.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),l=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},5997:function(){},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"GPT API Resources","base_url":"https://gpt-api.net","Km":"","Yw":true,"logo":"","logo_darkmode":"","logo_width":"150","logo_height":"27","logo_text":"GPT API"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"light","pagination":2,"summary_length":200,"blog_folder":"blog","default_language":"en","disable_languages":[],"default_language_in_subdir":false},"f":{"ly":"2024","iF":"GPT API","k1":""},"navigation_button":{"enable":false,"label":"Get Started","link":"https://gpt-api.net"},"disqus":{"enable":false,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"GPT API","meta_image":"/images/og-image.png","meta_description":"GPT API (gpt-api)"}}')},7812:function(e){"use strict";e.exports=JSON.parse('[{"languageName":"English","languageCode":"en","contentDir":"english","title":"GPT API Resources","weight":1},{"languageName":"繁體中文","languageCode":"zh-hant","contentDir":"traditional_chinese","title":"GPT API 資源","weight":1},{"languageName":"简体中文","languageCode":"zh","contentDir":"chinese","title":"GPT API 资源","weight":1},{"languageName":"日本語","languageCode":"ja","contentDir":"japanese","title":"GPT API リソース","weight":1},{"languageName":"Deutsch","languageCode":"de","contentDir":"german","title":"GPT-API-Ressourcen","weight":1},{"languageName":"Fran\xe7ais","languageCode":"fr","contentDir":"french","title":"Ressources API GPT","weight":1},{"languageName":"Русский","languageCode":"ru","contentDir":"russian","title":"GPT API Ресурсы","weight":1},{"languageName":"Espa\xf1ol","languageCode":"es","contentDir":"spanish","title":"Recursos de la API de GPT","weight":1},{"languageName":"한국어","languageCode":"ko","contentDir":"korean","title":"GPT API 리소스","weight":1},{"languageName":"ภาษาไทย","languageCode":"th","contentDir":"thai","title":"ทรัพยากร GPT API","weight":1},{"languageName":"Tiếng Việt","languageCode":"vi","contentDir":"vietnamese","title":"T\xe0i nguy\xean API GPT","weight":1},{"languageName":"عربي","languageCode":"ar","contentDir":"arabic","title":"موارد واجهة برمجة التطبيقات الخاصة بـ GPT","weight":1},{"languageName":"Portugu\xeas","languageCode":"pt","contentDir":"portuguese","title":"Recursos da API GPT","weight":1},{"languageName":"Italiano","languageCode":"it","contentDir":"italian","title":"Risorse API GPT","weight":1},{"languageName":"Nederlands","languageCode":"nl","contentDir":"dutch","title":"GPT API-bronnen","weight":1},{"languageName":"Svenska","languageCode":"sv","contentDir":"swedish","title":"GPT API-resurser","weight":1},{"languageName":"Norsk","languageCode":"no","contentDir":"norwegian","title":"GPT API Resources","weight":1},{"languageName":"Dansk","languageCode":"da","contentDir":"danish","title":"GPT API Ressourcer","weight":1},{"languageName":"Suomi","languageCode":"fi","contentDir":"finnish","title":"GPT API Resurssit","weight":1},{"languageName":"T\xfcrk\xe7e","languageCode":"tr","contentDir":"turkish","title":"GPT API Kaynakları","weight":1},{"languageName":"עברית","languageCode":"he","contentDir":"hebrew","title":"משאבי GPT API","weight":1}]')}},function(e){e.O(0,[1987,8056,4673,6648,2971,7023,1744],function(){return e(e.s=7168)}),_N_E=e.O()}]);