(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["48d64264"],{"40632d0e":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a("d1751d7c")._(a("b5f7902b"),t);},"48d64264":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return A;}});var n=a("777fffbe"),l=a("852bbaa9"),r=a("3f74a371"),o=a("29285da3"),u=a("7620def2"),i=l._(a("78b3ac91")),c=a("a5af918e"),d=a("9f3178bf"),f=n._(a("31874daf")),s=a("427ceda8"),m=a("3cbdafc9"),p=a("40632d0e"),h=a("d590f600"),b=a("73066b62"),g=a("607cbc64"),y=a("324f3c32"),v=a("dfdaebf1"),x=n._(a("5e63d771")),E=a("25e35f21");function C(e,t){return function(e){if(Array.isArray(e))return e;}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r,o,u=[],i=!0,c=!1;try{if(r=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1;}else for(;!(i=(n=r.call(a)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,l=e;}finally{try{if(!i&&null!=a.return&&(o=a.return(),Object(o)!==o))return;}finally{if(c)throw l;}}return u;}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,t);}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}();}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n;}var _=r.Layout.Sider,S=r.Layout.Content,A=function(){var e=(0,c.useLocation)().hash,t=(0,c.useNavigate)(),a=(0,c.useParams)(),n=a.topic,l=a.example,T=(0,i.useContext)(s.ThemeAntVContext),A=(0,o.useLocale)(),M=(0,o.useSiteData)().themeConfig,I=T.meta.exampleTopics,k=(0,i.useMemo)(function(){var t=(0,u.get)(I,["0","examples"]),a=(0,u.find)(t,function(e){return e.id===l;});return e.slice(1)||(0,u.get)(a,["demos","0","id"]);},[e,I,l]),D=C((0,i.useState)(),2),j=D[0],w=D[1],L=(0,d.useSnapshot)(m.store),N=C((0,i.useState)({}),2),O=N[0],P=N[1];(0,i.useEffect)(function(){n&&l&&k&&(w((0,b.getDemoInfo)(I,n,l,k)),P((0,E.getCurrentTitle)(I,n,l)));},[n,l,e]);var z=(0,u.every)([(0,u.get)(M,"showAPIDoc"),n,l],Boolean);return i.default.createElement("div",{className:x.default.example},i.default.createElement(f.default,{title:O[A.id]}),i.default.createElement(y.Header,{isHomePage:!1}),i.default.createElement(r.Layout,{className:x.default.container},i.default.createElement(_,{collapsedWidth:0,width:250,trigger:null,collapsible:!0,collapsed:L.hideMenu,className:x.default.menuSider,theme:"light"},j&&i.default.createElement(g.ExampleSider,{showExampleDemoTitle:!0,currentDemo:j,onDemoClicked:function(e){var a=e.id,n=e.targetExample,l=e.targetTopic;t("/".concat(A.id,"/examples/").concat(null==l?void 0:l.id,"/").concat(null==n?void 0:n.id,"/#").concat(a));},exampleTopics:I}),i.default.createElement(v.CollapsedIcon,{isCollapsed:L.hideMenu,onClick:function(e){m.store.hideMenu=e;},style:{bottom:0,right:L.hideMenu?-24:0}})),i.default.createElement(S,{className:x.default.content},n&&l&&i.default.createElement(h.CodeRunner,{exampleTopics:I,topic:n,example:l,demo:k,size:(0,u.get)(M,"editor.size",.38)})),z&&i.default.createElement(p.API,{exampleTopics:I,topic:n,example:l,demo:k,language:A.id})));};},"607cbc64":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a("d1751d7c")._(a("07558f26"),t);}}]);
//# sourceMappingURL=48d64264-async.91a0e0a0.js.map