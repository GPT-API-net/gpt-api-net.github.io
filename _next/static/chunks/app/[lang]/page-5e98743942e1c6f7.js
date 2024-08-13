(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6495],{47:function(e,t,a){Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.bind(a,1277)),Promise.resolve().then(a.bind(a,9199)),Promise.resolve().then(a.bind(a,5806))},1277:function(e,t,a){"use strict";var n=a(7437),i=a(2265);t.default=e=>{let{apiUrl:t="/api/newsletter",i18n:a,lang:r}=e,o=(0,i.useRef)(null),[l,s]=(0,i.useState)(!1),[g,c]=(0,i.useState)(""),[u,d]=(0,i.useState)(!1),m=e=>a[e],h=async e=>{var a;e.preventDefault();let n=null===(a=o.current)||void 0===a?void 0:a.value;if(!n){s(!0),c(m("messageError"));return}let i=await fetch(t,{body:JSON.stringify({email:n}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:r}=await i.json();r?(s(!0),c(m("messageError"))):(o.current.value="",s(!1),d(!0))};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:m("title")}),(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:h,children:[(0,n.jsx)("div",{children:(0,n.jsxs)("label",{htmlFor:"email-input",children:[(0,n.jsx)("span",{className:"sr-only",children:m("mail")}),(0,n.jsx)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:"".concat(u?m("placeholderSuccess"):m("placeholderDefault")),ref:o,required:!0,type:"email",disabled:u})]})}),(0,n.jsx)("div",{className:"mt-2 flex w-full rounded-md sm:ml-3 sm:mt-0",children:(0,n.jsxs)("button",{className:"group relative inline-flex shadow-sm items-center justify-center overflow-hidden rounded-md bg-primary-500 px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 dark:bg-primary-500 dark:hover:shadow-purple-500/30 ".concat(u?"cursor-default":""),type:"submit",disabled:u,children:[(0,n.jsx)("span",{className:"relative z-50 text-lg text-white",children:u?m("buttonSuccess"):m("buttonDefault")}),(0,n.jsx)("div",{className:"absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]",children:(0,n.jsx)("div",{className:"relative h-full w-8 bg-white/20"})})]})})]}),l&&(0,n.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:g})]})}},9199:function(e,t,a){"use strict";a.r(t);var n=a(7437),i=a(6648),r=a(2265);t.default=e=>{let{src:t,priority:a,fallback:o,...l}=e,[s,g]=(0,r.useState)(t);return(0,r.useEffect)(()=>{g(t)},[t]),(0,n.jsx)(i.default,{...l,src:s,priority:a,onError:()=>{g(o)}})}},5806:function(e,t,a){"use strict";var n=a(7437),i=a(145),r=a(803),o=a(6463),l=a(7812);t.default=e=>{var t,a,s;let{lang:g,title:c,meta_title:u,image:d,description:m,canonical:h,noindex:p}=e,{meta_image:f,meta_author:P,meta_description:w}=i.metadata,{base_url:b}=i.site,x=(0,o.usePathname)(),v=RegExp("(".concat(l.map(e=>"^/".concat(e.languageCode)).join("|"),")"),"g"),_=x.replace(v,"").replace(/^\/|\/$/g,"");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:(0,r.ab)("".concat(u||c?"".concat(u||c," - "):"").concat((null===(t=l.find(e=>e.languageCode===g))||void 0===t?void 0:t.title)||i.site.title))}),h&&(0,n.jsx)("link",{rel:"canonical",href:h,itemProp:"url"}),l.filter(e=>!(x.includes("/tags/")||x.includes("/categories/")||x.includes("/authors/"))||e.languageCode===g).map(e=>(0,n.jsx)("link",{rel:"alternate",hrefLang:e.languageCode,href:"".concat(b,"/").concat(e.languageCode).concat(_?"/"+_:"")},e.languageCode)),p&&(0,n.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,n.jsx)("meta",{name:"description",content:(0,r.ab)(m||w)}),(0,n.jsx)("meta",{name:"author",content:P}),(0,n.jsx)("meta",{property:"og:title",content:(0,r.ab)("".concat(u||c?"".concat(u||c," - "):"").concat((null===(a=l.find(e=>e.languageCode===g))||void 0===a?void 0:a.title)||i.site.title))}),(0,n.jsx)("meta",{property:"og:description",content:(0,r.ab)(m||w)}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(b,"/").concat(x.replace("/",""))}),(0,n.jsx)("meta",{name:"twitter:title",content:(0,r.ab)("".concat(u||c?"".concat(u||c," - "):"").concat((null===(s=l.find(e=>e.languageCode===g))||void 0===s?void 0:s.title)||i.site.title))}),(0,n.jsx)("meta",{name:"twitter:description",content:(0,r.ab)(m||w)}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(b).concat(d||f)}),(0,n.jsx)("meta",{name:"twitter:image",content:"".concat(b).concat(d||f)}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},803:function(e,t,a){"use strict";a.d(t,{OI:function(){return r},ab:function(){return l},gI:function(){return i},nR:function(){return o}}),a(7727);var n=a(2266);let i=(e,t)=>({__html:t?n.TU.parse(e):n.TU.parseInline(e)}),r=e=>{let t;try{t=decodeURI(decodeURI(e))}catch(a){console.error("Failed to decode URI component",a),t=e}return t.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()})},o=e=>r(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),l=e=>s(n.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),s=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"GPT API Resources","name":"GPT API","base_url":"https://gpt-api.net","base_path":"","trailing_slash":false,"static":true,"favicon":"/images/favicon.png","logo":"","logo_darkmode":"","logo_width":"150","logo_height":"27","logo_text":"GPT API","logo_image":""},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog","default_language":"en","disable_languages":[],"default_language_in_subdir":false},"params":{"contact_form_action":"https://formspree.io/f/mrbzkgwz","form_button_action":"https://formspree.io/f/mrbzkgwz","recaptcha":{"key":"6LcbliUqAAAAADtNdU3wChCQ3OSaaLgCR2gjrV8-"},"since":"2024","copyright":"GPT API","icpbeian":""},"navigation_button":{"enable":false,"label":"Get Started","link":"https://gpt-api.net"},"disqus":{"enable":false,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"GPT API","meta_image":"/images/og-image.png","meta_description":"GPT API (gpt-api)"},"newsletter":{"provider":"convertkit"},"gtm":{"gtmId":"GTM-P5J7DB7P"},"version_info":{"version":true,"commit_id":true,"build_time":true}}')},7812:function(e){"use strict";e.exports=JSON.parse('[{"languageName":"English","languageCode":"en","contentDir":"english","title":"GPT API Resources","weight":1},{"languageName":"简体中文","languageCode":"zh","contentDir":"chinese","title":"GPT API 资源","weight":1},{"languageName":"繁體中文","languageCode":"zh-hant","contentDir":"traditional_chinese","title":"GPT API 資源","weight":1},{"languageName":"Espa\xf1ol","languageCode":"es","contentDir":"spanish","title":"Recursos de la API de GPT","weight":1},{"languageName":"日本語","languageCode":"ja","contentDir":"japanese","title":"GPT API リソース","weight":1},{"languageName":"한국어","languageCode":"ko","contentDir":"korean","title":"GPT API 리소스","weight":1},{"languageName":"Deutsch","languageCode":"de","contentDir":"german","title":"GPT-API-Ressourcen","weight":1},{"languageName":"Fran\xe7ais","languageCode":"fr","contentDir":"french","title":"Ressources API GPT","weight":1},{"languageName":"Русский","languageCode":"ru","contentDir":"russian","title":"GPT API Ресурсы","weight":1},{"languageName":"Portugu\xeas","languageCode":"pt","contentDir":"portuguese","title":"Recursos da API GPT","weight":1},{"languageName":"عربي","languageCode":"ar","contentDir":"arabic","title":"موارد واجهة برمجة التطبيقات الخاصة بـ GPT","weight":1},{"languageName":"Nederlands","languageCode":"nl","contentDir":"dutch","title":"GPT API-bronnen","weight":1},{"languageName":"Italiano","languageCode":"it","contentDir":"italian","title":"Risorse API GPT","weight":1},{"languageName":"Tiếng Việt","languageCode":"vi","contentDir":"vietnamese","title":"T\xe0i nguy\xean API GPT","weight":1},{"languageName":"T\xfcrk\xe7e","languageCode":"tr","contentDir":"turkish","title":"GPT API Kaynakları","weight":1},{"languageName":"ภาษาไทย","languageCode":"th","contentDir":"thai","title":"ทรัพยากร GPT API","weight":1},{"languageName":"עברית","languageCode":"he","contentDir":"hebrew","title":"משאבי GPT API","weight":1},{"languageName":"Svenska","languageCode":"sv","contentDir":"swedish","title":"GPT API-resurser","weight":1},{"languageName":"Norsk","languageCode":"no","contentDir":"norwegian","title":"GPT API Resources","weight":1},{"languageName":"Dansk","languageCode":"da","contentDir":"danish","title":"GPT API Ressourcer","weight":1},{"languageName":"Suomi","languageCode":"fi","contentDir":"finnish","title":"GPT API Resurssit","weight":1}]')}},function(e){e.O(0,[8056,4673,6648,2971,7023,1744],function(){return e(e.s=47)}),_N_E=e.O()}]);