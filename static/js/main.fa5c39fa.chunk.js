(window["webpackJsonpfrozen-mikan-lyrics"]=window["webpackJsonpfrozen-mikan-lyrics"]||[]).push([[0],{105:function(e,a,t){e.exports=t(178)},110:function(e,a,t){},117:function(e,a,t){},178:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(7),c=t.n(o),i=(t(110),t(14)),s=t(179),l=t(34),u=(t(117),t(180)),m=t(39),p={Aqours:{"Deep Resonance":{composer:"Kuwabara Satoru (Arte Refact)",arranger:"Sakai Takuya (Arte Refact)",writer:"Hata Aki"}},"Saito Shuka":{"Kotoba no Mahou":{kanjiName:"\u3053\u3068\u3070\u306e\u9b54\u6cd5",englishName:"The Magic of Words",composer:"Hayashi Kei (LIVE LAB.)",arranger:"Murata Yuichi (LIVE LAB.)",writer:"Hayashi Kei (LIVE LAB.)"},"Ato Ichi Meetoru":{kanjiName:"\u3042\u3068\u4e00\u30e1\u30fc\u30c8\u30eb",englishName:"One More Metre",composer:"Hayashi Kei (LIVE LAB.)",arranger:"Horie Shouta",writer:"Hayashi Kei (LIVE LAB.)"},Kutsuhimo:{kanjiName:"\u304f\u3064\u3072\u3082",englishName:"Shoelaces",composer:"Nio",arranger:"sugarbeans",writer:"Hayashi Kei (LIVE LAB.)"}},"Kusunoki Tomori":{"Nagame no Sora":{kanjiName:"\u773a\u3081\u306e\u7a7a",englishName:"The Sky that I Look Up To",composer:"Kusunoki Tomori",arranger:"Tada Sanyou",writer:"Kusunoki Tomori"},Clover:{kanjiName:"\u30af\u30ed\u30fc\u30d0\u30fc",composer:"Kusunoki Tomori",arranger:"Tada Sanyou",writer:"Kusunoki Tomori"}}},h=t(102),E=t.n(h),f=["no","wa","de","o","ni"],g=function(e){return e.split("_").map(function(e){return function(e){return f.includes(e)||0===e.length?e:e[0].toUpperCase()+e.substring(1,e.length)}(e)}).join(" ")},k=function(e){var a=e.onSelect;return r.a.createElement(u.a,{theme:"dark",mode:"inline",onSelect:a},Object.entries(p).map(function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.createElement(E.a,{key:t,title:r.a.createElement("span",null,r.a.createElement(m.a,{type:"user"}),r.a.createElement("span",null,t))},Object.keys(n).map(function(e){return r.a.createElement(u.a.Item,{key:e},r.a.createElement(l.a,{to:"songs/".concat((a=e,a.split(" ").map(function(e){return e.toLowerCase()}).join("_")))},r.a.createElement(m.a,{type:"audio"}),r.a.createElement("span",null,e)));var a}))}))},y=t(46),b=t.n(y),j=t(73),d=t(182),v=t(181),w=t(183),O={kanjiName:"",englishName:"",composer:"Composed by: ",arranger:"Arranged by: ",writer:"Written by: "},N=function(e){for(var a=e.songName,t={},n=0,o=Object.values(p);n<o.length;n++)for(var c=o[n],s=0,l=Object.entries(c);s<l.length;s++){var u=l[s],m=Object(i.a)(u,2),h=m[0],E=m[1];t[h]=E}return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("h1",{className:"romajiTitle"},g(a)),Object.entries(t[g(a)]).map(function(e,a){var t=Object(i.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{key:a,className:n},"".concat(O[n]).concat(o))}))},S=function(e){var a=e.songName,t=e.style,o=Object(n.useState)([]),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(n.useState)([]),m=Object(i.a)(u,2),p=m[0],h=m[1],E="".concat("/frozen-mikan-lyrics","/songs/english/").concat(a,".txt"),f="".concat("/frozen-mikan-lyrics","/songs/kanji/").concat(a,".txt"),g=["Kanji","English"],k=Object(n.useState)(g),y=Object(i.a)(k,2),O=y[0],S=y[1];return Object(n.useEffect)(function(){Object(j.a)(b.a.mark(function e(){var a,t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E);case 2:return a=e.sent,e.next=5,a.text();case 5:t=e.sent,l(t.split(/ *\r?\n/));case 7:case"end":return e.stop()}},e)}))()},[a,E]),Object(n.useEffect)(function(){Object(j.a)(b.a.mark(function e(){var a,t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return a=e.sent,e.next=5,a.text();case 5:t=e.sent,h(t.split(/ *\r?\n/));case 7:case"end":return e.stop()}},e)}))()},[a,f]),r.a.createElement("div",null,r.a.createElement(d.a,{style:t},r.a.createElement(N,{songName:a})),r.a.createElement(d.a,{style:t},r.a.createElement(v.a.Group,{options:g,value:O,onChange:function(e){S(e)}})),r.a.createElement(d.a,null,O.includes("Kanji")&&r.a.createElement(w.a,{span:24/O.length,style:t},p.map(function(e,a){return r.a.createElement("div",{key:a},""===e?r.a.createElement("br",null):e)})),O.includes("English")&&r.a.createElement(w.a,{span:24/O.length,style:t},s.map(function(e,a){return r.a.createElement("div",{key:a},""===e?r.a.createElement("br",null):e)}))))},K=function(){var e=s.a.Sider,a=s.a.Content,t=s.a.Footer,o=Object(n.useState)(!1),c=Object(i.a)(o,2),u=c[0],m=c[1];return r.a.createElement(s.a,{style:{minHeight:"100vh"}},r.a.createElement(e,{collapsible:!0,onCollapse:function(){m(!u)}},r.a.createElement(k,{collapsed:u})),r.a.createElement(s.a,null,r.a.createElement(a,{style:{margin:"0 16px"}},r.a.createElement(l.b,null,r.a.createElement(S,{path:"songs/:songName",style:{textAlign:"center"}}))),r.a.createElement(t,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.b,null,r.a.createElement(K,{path:"frozen-mikan-lyrics/*"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,1,2]]]);
//# sourceMappingURL=main.fa5c39fa.chunk.js.map