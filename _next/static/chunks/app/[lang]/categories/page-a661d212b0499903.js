(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5125,9455],{3759:function(e,t,n){var a={"./menu.ar.json":[1510,1510],"./menu.da.json":[6781,6781],"./menu.de.json":[8607,8607],"./menu.en.json":[9053,9053],"./menu.es.json":[1107,1107],"./menu.fi.json":[936,936],"./menu.fr.json":[4902,4902],"./menu.he.json":[4403,4403],"./menu.it.json":[9766,9766],"./menu.ja.json":[7634,7634],"./menu.ko.json":[2040,2040],"./menu.nl.json":[5389,5389],"./menu.no.json":[1662,1662],"./menu.pt.json":[2562,2562],"./menu.ru.json":[7364,7364],"./menu.sv.json":[7569,7569],"./menu.th.json":[7793,7793],"./menu.tr.json":[4608,4608],"./menu.vi.json":[545,545],"./menu.zh-hant.json":[7752,7752],"./menu.zh.json":[5427,5427]};function o(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,19)})}o.keys=function(){return Object.keys(a)},o.id=3759,e.exports=o},8621:function(e,t,n){var a={"./ar.json":[1861,1861],"./da.json":[5130,5130],"./de.json":[3650,3650],"./en.json":[7890,7890],"./es.json":[8559,8559],"./fi.json":[7549,7549],"./fr.json":[5345,5345],"./he.json":[9659,9659],"./it.json":[5177,5177],"./ja.json":[3302,3302],"./ko.json":[1594,1594],"./nl.json":[8757,8757],"./no.json":[3524,3524],"./pt.json":[2140,2140],"./ru.json":[8827,8827],"./sv.json":[1794,1794],"./th.json":[6843,6843],"./tr.json":[6720,6720],"./vi.json":[8068,8068],"./zh-hant.json":[8359,8359],"./zh.json":[4355,4355]};function o(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,19)})}o.keys=function(){return Object.keys(a)},o.id=8621,e.exports=o},1885:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,6284)),Promise.resolve().then(n.bind(n,5806))},6284:function(e,t,n){"use strict";var a=n(7437),o=n(803),i=n(8755),r=n(6463),s=n(7417),l=n(4410),u=n(2265);t.default=e=>{let{className:t="mt-6",lang:n}=e;(0,u.useMemo)(s.Mb,[]);let c=(0,r.usePathname)(),g=c.replace("/".concat(n),"").split("/").filter(e=>e),[m,d]=(0,u.useState)([{label:"Home",href:(0,l.b)(n,""),"aria-label":"/"===c?"page":void 0}]),h=(e,t)=>{let n=(e,t)=>{for(let a of e){if(a.url.includes(t))return a.name;if(a.hasChildren&&a.children){let e=n(a.children,t);if(e)return e}}return null};for(let a of e.main){if(a.url.includes(t))return a.name;if(a.hasChildren&&a.children){let e=n(a.children,t);if(e)return e}}return null};return(0,u.useEffect)(()=>{(async()=>{let e=await (0,s.FC)(n),t="home";e&&(t=e.main.find(e=>"/"===e.url).name);let a=g.map((t,a)=>{if("page"===t)return null;let i=(0,l.b)(n,"/".concat(g.slice(0,a+1).join("/"))),r=t.replace(/[-_]/g," ");return e&&(r=h(e,r)||r),{label:(0,o.OI)(r)||"",href:i,"aria-label":c===i?"page":void 0}}).filter(e=>null!==e);d([{label:t,href:(0,l.b)(n,""),"aria-label":"/"===c?"page":void 0},...a])})()},[n,c]),(0,a.jsx)("nav",{"aria-label":"Breadcrumb",className:t,children:(0,a.jsx)("ol",{className:"inline-flex",role:"list",children:m.map((e,t)=>{let{label:n,...o}=e;return(0,a.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[t>0&&(0,a.jsx)("span",{className:"inline-block mr-1",children:"/"}),t!==m.length-1?(0,a.jsx)(i.Z,{className:"text-primary dark:text-darkmode-primary",...o,children:n}):(0,a.jsx)("span",{className:"text-light dark:text-darkmode-light",children:n})]},t)})})})}},8755:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7437),o=n(231),i=n.n(o),r=n(145),s=e=>{let{href:t,passHref:n,...o}=e;return r.site.static?(0,a.jsx)("a",{href:t,...o}):(0,a.jsx)(i(),{href:t,passHref:n,...o})}},5806:function(e,t,n){"use strict";var a=n(7437),o=n(145),i=n(803),r=n(6463),s=n(7417);t.default=e=>{var t,n,l;let{lang:u,title:c,meta_title:g,image:m,description:d,canonical:h,noindex:p}=e,{meta_image:f,meta_author:j,meta_description:P}=o.metadata,{base_url:_}=o.site,b=(0,r.usePathname)(),C=(0,s.qz)(),v=RegExp("(".concat(C.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g"),w=b.replace(v,"").replace(/^\/|\/$/g,"");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,i.ab)("".concat(g||c?"".concat(g||c," - "):"").concat((null===(t=C.find(e=>e.languageCode===u))||void 0===t?void 0:t.title)||o.site.title))}),h&&(0,a.jsx)("link",{rel:"canonical",href:h,itemProp:"url"}),C.filter(e=>!(b.includes("/tags/")||b.includes("/categories/")||b.includes("/authors/"))||e.languageCode===u).map(e=>(0,a.jsx)("link",{rel:"alternate",hrefLang:e.languageCode,href:"".concat(_,"/").concat(e.languageCode).concat(w?"/"+w:"")},e.languageCode)),p&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,i.ab)(d||P)}),(0,a.jsx)("meta",{name:"author",content:j}),(0,a.jsx)("meta",{property:"og:title",content:(0,i.ab)("".concat(g||c?"".concat(g||c," - "):"").concat((null===(n=C.find(e=>e.languageCode===u))||void 0===n?void 0:n.title)||o.site.title))}),(0,a.jsx)("meta",{property:"og:description",content:(0,i.ab)(d||P)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(_,"/").concat(b.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,i.ab)("".concat(g||c?"".concat(g||c," - "):"").concat((null===(l=C.find(e=>e.languageCode===u))||void 0===l?void 0:l.title)||o.site.title))}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,i.ab)(d||P)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(_).concat(m||f)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(_).concat(m||f)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},7417:function(e,t,n){"use strict";n.d(t,{qz:function(){return s},Mb:function(){return l},FC:function(){return r}});var a=n(145),o=JSON.parse('[{"languageName":"English","languageCode":"en","contentDir":"english","title":"GPT API Resources","weight":1},{"languageName":"简体中文","languageCode":"zh","contentDir":"chinese","title":"GPT API 资源","weight":1},{"languageName":"繁體中文","languageCode":"zh-hant","contentDir":"traditional_chinese","title":"GPT API 資源","weight":1},{"languageName":"Espa\xf1ol","languageCode":"es","contentDir":"spanish","title":"Recursos de la API de GPT","weight":1},{"languageName":"日本語","languageCode":"ja","contentDir":"japanese","title":"GPT API リソース","weight":1},{"languageName":"한국어","languageCode":"ko","contentDir":"korean","title":"GPT API 리소스","weight":1},{"languageName":"Deutsch","languageCode":"de","contentDir":"german","title":"GPT-API-Ressourcen","weight":1},{"languageName":"Fran\xe7ais","languageCode":"fr","contentDir":"french","title":"Ressources API GPT","weight":1},{"languageName":"Русский","languageCode":"ru","contentDir":"russian","title":"GPT API Ресурсы","weight":1},{"languageName":"Portugu\xeas","languageCode":"pt","contentDir":"portuguese","title":"Recursos da API GPT","weight":1},{"languageName":"عربي","languageCode":"ar","contentDir":"arabic","title":"موارد واجهة برمجة التطبيقات الخاصة بـ GPT","weight":1},{"languageName":"Nederlands","languageCode":"nl","contentDir":"dutch","title":"GPT API-bronnen","weight":1},{"languageName":"Italiano","languageCode":"it","contentDir":"italian","title":"Risorse API GPT","weight":1},{"languageName":"Tiếng Việt","languageCode":"vi","contentDir":"vietnamese","title":"T\xe0i nguy\xean API GPT","weight":1},{"languageName":"T\xfcrk\xe7e","languageCode":"tr","contentDir":"turkish","title":"GPT API Kaynakları","weight":1},{"languageName":"ภาษาไทย","languageCode":"th","contentDir":"thai","title":"ทรัพยากร GPT API","weight":1},{"languageName":"עברית","languageCode":"he","contentDir":"hebrew","title":"משאבי GPT API","weight":1},{"languageName":"Svenska","languageCode":"sv","contentDir":"swedish","title":"GPT API-resurser","weight":1},{"languageName":"Norsk","languageCode":"no","contentDir":"norwegian","title":"GPT API Resources","weight":1},{"languageName":"Dansk","languageCode":"da","contentDir":"danish","title":"GPT API Ressourcer","weight":1},{"languageName":"Suomi","languageCode":"fi","contentDir":"finnish","title":"GPT API Resurssit","weight":1}]');let i=a.settings.disable_languages,r=async e=>{let t=await n(3759)("./menu.".concat(e,".json")),a=await n(8621)("./".concat(e,".json"));return{...t,...a}},s=()=>o.filter(e=>!i.includes(e.languageCode)),l=()=>a.settings.default_language},4410:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var a=n(145),o=n(7417);function i(e,t){if(/(^http|^https)/.test(t))return t;let n=(0,o.Mb)(),i=(0,o.qz)();e=e!==n||a.settings.default_language_in_subdir?e.replace(/^\/|\/$/g,""):"",function(e){let t=e.some(e=>"zh"===e.languageCode),n=e.some(e=>"zh-hant"===e.languageCode);return t&&n}(i)&&(i=function(e){let t=[],n=[];return e.forEach(e=>{"zh"===e.languageCode?n.push(e):"zh-hant"===e.languageCode?(t.push(e,...n),n=[]):t.push(e)}),t.push(...n),t}(i));let r=RegExp("(".concat(i.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g");return t=t.replace(r,"").replace(/^\/|\/$/g,""),a.site.static&&(t=encodeURI(encodeURI(t)))&&!/\/$/.test(t)&&(t+="/"),""!==e&&(e="/".concat(e)),"".concat(a.site.static&&a.site.base_path?a.site.base_path:"").concat(e,"/").concat(t)}},803:function(e,t,n){"use strict";n.d(t,{OI:function(){return i},ab:function(){return s},gI:function(){return o},nR:function(){return r}}),n(7727);var a=n(2266);let o=(e,t)=>({__html:t?a.TU.parse(e):a.TU.parseInline(e)}),i=e=>{let t;try{t=decodeURI(decodeURI(e))}catch(n){console.error("Failed to decode URI component",n),t=e}return t.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()})},r=e=>i(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),s=e=>l(a.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),l=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"GPT API Resources","name":"GPT API","base_url":"https://gpt-api.net","base_path":"","trailing_slash":false,"static":true,"favicon":"/images/favicon.png","logo":"","logo_darkmode":"","logo_width":"150","logo_height":"27","logo_text":"GPT API","logo_image":""},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog","default_language":"en","disable_languages":[],"default_language_in_subdir":false},"params":{"contact_form_action":"https://formspree.io/f/mqazqjqp","form_button_action":"https://formspree.io/f/mgvwylzl","recaptcha":{"key":"6LcbliUqAAAAADtNdU3wChCQ3OSaaLgCR2gjrV8-"},"since":"2024","copyright":"GPT API","icpbeian":""},"navigation_button":{"enable":false,"label":"Get Started","link":"https://gpt-api.net"},"disqus":{"enable":false,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"GPT API","meta_image":"/images/og-image.png","meta_description":"GPT API (gpt-api)"},"newsletter":{"provider":"convertkit"},"gtm":{"gtmId":"GTM-P5J7DB7P"},"version_info":{"version":true,"commit_id":true,"build_time":true}}')}},function(e){e.O(0,[8056,4673,2971,7023,1744],function(){return e(e.s=1885)}),_N_E=e.O()}]);