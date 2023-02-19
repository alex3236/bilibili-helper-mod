(()=>{"use strict";var e={63334:(e,t,a)=>{a.d(t,{Ik:()=>v});var i=a(26243),r=a.n(i),n=a(62680),o=a.n(n),l=a(95366),p=a.n(l),s=a(6919),c=a.n(s),d=a(93364),h=a.n(d),b=a(26771),g=a.n(b),u=a(33385);function f(e,t){var a=r()(e);if(o()){var i=o()(e);t&&(i=i.filter((function(t){return p()(e,t).enumerable}))),a.push.apply(a,i)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,u.Z)(e,t,a[t])})):c()?h()(e,c()(a)):f(Object(a)).forEach((function(t){g()(e,t,p()(a,t))}))}return e}const y={ALL:268435455,REPOST:1,PIC:2,WORD:4,VIDEO:8,DRAMA:32,ARTICLE:64,MUSIC:256,BANGUMI:512,NONE:1024,H5_SHARE:2048,COMIC_SHARE:2049,PGC_BANGUMI:4097,FILM:4098,TV:4099,GUOCHUANG:4100,DOCUMENTARY:4101,LIVE_ROOM:4200,LIVE:4201,MEDIA_LIST:4300,CHEESE_SERIES:4302,CHEESE_UPDATE:4303,HOT:1e3,LIVE_PUSH:4308,COLLECTION:4310,SUBSCRIPTION:4311,QUICK:1001},v={[y.REPOST]:"\u8f6c\u53d1",[y.PIC]:"\u56fe\u7247",[y.WORD]:"\u6587\u5b57",[y.VIDEO]:"\u89c6\u9891",[y.DRAMA]:"\u620f\u5267",[y.ARTICLE]:"\u6587\u7ae0",[y.MUSIC]:"\u97f3\u4e50",[y.BANGUMI]:"\u756a\u5267",[y.H5_SHARE]:"\u8bdd\u9898",[y.COMIC_SHARE]:"\u6f2b\u753b",[y.PGC_BANGUMI]:"\u756a\u5267",[y.FILM]:"\u7535\u5f71",[y.TV]:"\u7535\u89c6/\u7efc\u827a",[y.GUOCHUANG]:"\u56fd\u521b",[y.DOCUMENTARY]:"\u7eaa\u5f55\u7247",[y.LIVE_ROOM]:"\u76f4\u64ad\u95f4",[y.LIVE]:"\u76f4\u64ad",[y.MEDIA_LIST]:"\u6536\u85cf\u5939",[y.CHEESE_SERIES]:"\u8bfe\u7a0b",[y.CHEESE_UPDATE]:"\u8bfe\u7a0b\u66f4\u65b0",[y.HOT]:"\u70ed\u95e8",[y.LIVE_PUSH]:"\u76f4\u64ad\uff08\u63a8\u9001\uff09",[y.COLLECTION]:"\u5408\u96c6",[y.SUBSCRIPTION]:"\u76f4\u64ad\uff08\u8ba2\u9605\uff09"};y.ALL,y.PIC,y.WORD,y.VIDEO,y.MEDIA_LIST,y.COLLECTION,y.ARTICLE,y.LIVE_ROOM,y.LIVE,y.LIVE_PUSH,y.SUBSCRIPTION,y.MUSIC,y.BANGUMI,y.PGC_BANGUMI,y.GUOCHUANG,y.COMIC_SHARE,y.CHEESE_SERIES,y.CHEESE_UPDATE,y.FILM,y.TV,y.DOCUMENTARY,y.H5_SHARE,y.COMIC_SHARE,y.DRAMA,y.NONE,m({ALL:268435455,PIC:2,VIDEO:8,ARTICLE:64,BANGUMI:512},y)},15364:(e,t,a)=>{a.d(t,{SUPER_VIP_USER_IDENTITIES_KEY_LIST:()=>n,USER_IDENTITIES_NAME_MAP:()=>i,VIP_USER_IDENTITIES_KEY_LIST:()=>r});const i={superAdmin:"\u732b\u56fd\u8bbe\u8ba1\u5e08",admin:"\u732b\u56fd\u57ce\u7ba1",catForever:"\u732b\u56fd\u5927\u62a4\u6cd5",catVIPSuper:"\u52a9\u624b\u732b\u57f9\u80b2\u5e08",catVIP:"\u52a9\u624b\u732b\u89c2\u5bdf\u5458",catWatcher:"\u52a9\u624b\u732b\u77ad\u671b\u8005",catVIPHonor:"\u732b\u56fd\u8363\u8a89\u5e02\u6c11",catAirborneCommander:"\u7a7a\u964d\u6307\u6325\u5b98",catAirbornePilot:"\u55b5\u8425\u98de\u884c\u5458"},r=["superAdmin","admin","catForever","catVIP"],n=["superAdmin","admin","catForever"];a(72912);a(37873)},29887:(e,t,a)=>{a.r(t),a.d(t,{Position:()=>l});var i=a(33385),r=a(25733),n=a.n(r);class o{constructor(...e){(0,i.Z)(this,"x",void 0),(0,i.Z)(this,"y",void 0),(0,i.Z)(this,"__valid",!1),(0,i.Z)(this,"__needUpdate",!0),(0,i.Z)(this,"set",(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof o){const{x:t,y:a}=e[0];this.set(t,a)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this}),(0,i.Z)(this,"setX",e=>(this.x=e,this.__needUpdate=!0,this)),(0,i.Z)(this,"setY",e=>(this.y=e,this.__needUpdate=!0,this)),(0,i.Z)(this,"add",e=>(this.x+=e.x,this.y+=e.y,this)),(0,i.Z)(this,"addX",e=>(this.x+=e,this)),(0,i.Z)(this,"addY",e=>(this.y+=e,this)),(0,i.Z)(this,"sub",e=>(this.x-=e.x,this.y-=e.y,this)),(0,i.Z)(this,"subX",e=>this.addX(-e)),(0,i.Z)(this,"subY",e=>this.addY(-e)),(0,i.Z)(this,"multiply",e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this)),(0,i.Z)(this,"multiplyX",e=>(0===e?this.x=1/0:this.x*=e,this)),(0,i.Z)(this,"multiplyY",e=>(0===e?this.y=1/0:this.y*=e,this)),(0,i.Z)(this,"divide",e=>0===e?this.set(1/0,1/0):this.multiply(1/e)),(0,i.Z)(this,"divideX",e=>this.multiplyX(1/e)),(0,i.Z)(this,"divideY",e=>this.multiplyY(1/e)),(0,i.Z)(this,"dot",e=>this.x*e.x+this.y+e.y),(0,i.Z)(this,"equal",(...e)=>{if("number"===typeof e[0]&&"number"===typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof o){const{x:t,y:a}=e[0];return this.equal(t,a)}return!1}),(0,i.Z)(this,"normalize",()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)}),(0,i.Z)(this,"negtiveX",()=>(this.x*=-1,this)),(0,i.Z)(this,"negtiveY",()=>(this.y*=-1,this)),(0,i.Z)(this,"negtive",()=>this.negtiveX().negtiveY()),(0,i.Z)(this,"round",()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this)),(0,i.Z)(this,"roundX",()=>(this.x=Math.round(this.x),this)),(0,i.Z)(this,"roundY",()=>(this.y=Math.round(this.y),this)),(0,i.Z)(this,"floor",()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this)),(0,i.Z)(this,"floorX",()=>(this.x=Math.floor(this.x),this)),(0,i.Z)(this,"floorY",()=>(this.y=Math.floor(this.y),this)),(0,i.Z)(this,"ceil",()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this)),(0,i.Z)(this,"ceilX",()=>(this.x=Math.ceil(this.x),this)),(0,i.Z)(this,"ceilY",()=>(this.y=Math.ceil(this.y),this)),(0,i.Z)(this,"trunc",()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this)),(0,i.Z)(this,"truncX",()=>(this.x=Math.trunc(this.x),this)),(0,i.Z)(this,"truncY",()=>(this.y=Math.trunc(this.y),this)),(0,i.Z)(this,"clone",()=>new this.constructor(this.x,this.y)),(0,i.Z)(this,"toArray",()=>[this.x,this.y]),(0,i.Z)(this,"toObject",()=>({x:this.x,y:this.y})),(0,i.Z)(this,"toString",(e="x",t="y")=>`${e}${this.x}${t}${this.y}`),this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=n()(this.x)&&n()(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}class l extends o{constructor(...e){super(...e)}}},42650:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(67294);const r=i.createContext({})},20904:(e,t,a)=>{var i=a(73473),r=a.n(i),n=a(67294),o=a(73935),l=a(60677);const p=l.css`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`;var s=a(11925),c=a(71338);const d=l.createGlobalStyle`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${(0,s.I8)()};
    ${c.$};
    ${p};
    //background-color: var(--paper-grey-400)!important;
  }
  
  * {
    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    
    &::-webkit-scrollbar-corner {
      display: none;
    }
  
    &::-webkit-scrollbar-thumb {
      visibility: hidden;
      background-color: #b3b3b3;
    }
  
    &:hover {
      &::-webkit-scrollbar-thumb {
        visibility: visible;
      }
    }
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content!important;
    vertical-align: baseline!important;
    //color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content!important;
    //color: var(--bilibili-pink);
  }
  
  .button {
    .primary {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-bilibilihelper {
        color: var(--bilibili-gray);
      }
    }
    .border {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-bilibilihelper {
        color: var(--bilibili-pink);
      }
    }
    
  }
  
  @media (prefers-color-scheme: dark) {
    * {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }
  }
`;var h=a(48903),b=a(26243),g=a.n(b),u=a(62680),f=a.n(u),m=a(95366),y=a.n(m),v=a(6919),x=a.n(v),w=a(93364),k=a.n(w),E=a(26771),C=a.n(E),M=a(47874),A=a(33385),O=a(88686),S=a(58971),B=a.n(S),L=a(43562),_=a.n(L),I=a(59158),T=a(24678),N=a(44943),Z=a(42650);const D=l["default"].div.attrs({className:"popup-menu"})`
  //display: inline-block;
  flex-shrink: 0;
  //padding-right: 1px;
  width: 80px;
  max-width: 80px;
  height: calc(100% - 30px);
  min-height: 1000px;
  max-height: calc(100% - 30px);
  //vertical-align: top;
  //padding-top: 4px;
  box-sizing: border-box;
  box-shadow: -0.5px 0 6px 0 #ddd;
  background-color: hsl(0deg 0% 93%);
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &.empty {
    width: 0;
    .add-btn, .more-link {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .inner-menu {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 34px;
    padding-top: 4px;
    width: 80px;
    max-width: 80px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .menu-item {
    display: block;
    margin: 0 auto 4px;
    width: calc(100% - 7px);
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    //border-radius: 3px;
    //border: 1px solid transparent;
    border: 1px solid rgb(245, 245, 245);
    background: #f9f9f9;
    text-align: center;
    cursor: pointer;
    transition: background-color 300ms, color 30ms, border-color 300ms;
    user-select: none;

    &:hover {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      border-color: rgb(0, 156, 214);
    }

    .button-view {
      transition: color 300ms;
    }

    //&:active {
    //  background-color: rgb(0 0 0 / 20%);
    //transform: scale(0.85);
    //}

    &.disabled {
      cursor: not-allowed;
      color: var(--google-grey-400);
    }
  }
  .add-btn {
    height: 24px;
  }
  .more-link {
    height: 24px;
    font-weight: bold;
  }
  
  @media (prefers-color-scheme: dark) {
    box-shadow: -0.5px 0 0 0.1px #111;
    background-color: hsl(0deg 0% 6%);
    color: hsl(0deg 0% 54%);

    .menu-item {
      border-color: transparent;
      background-color: hsl(0deg 0% 9%);

      &:hover {
        background-color: hsl(196deg 79% 42%);
        border-color: hsl(196deg 100% 26%);
      }

      &.disabled {
        color: #3c3c3c;
      }
    }
  }
`,P=B().get("popupMenu-config")||{},F=B().get("popupMenu-data_customMenu")||{};class R extends n.Component{constructor(e){super(e),(0,A.Z)(this,"handleOnClickDefaultMenu",(e,t,i)=>{const{bilibiliAccount:r}=this.context;i&&r||!i?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_menu",action:"click_menu_item",label:t}),chrome.runtime.sendMessage({target:"popupMenu",event:"openNewTab",key:t,active:"silent"!==this.context.videoOpenMethod()&&0===e.button,activeIfExist:this.context.activeIfExist})):Promise.all([a.e(196),a.e(632)]).then(a.bind(a,16168)).then(({notifyNeedLogin:e})=>{e&&e()})}),(0,A.Z)(this,"handleOnClickCustomMenu",(e,t,a)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_menu",action:"click_custom_menu_item",label:a}),chrome.runtime.sendMessage({target:"popupMenu",event:"openNewTab",url:t,active:"silent"!==this.context.videoOpenMethod()&&0===e.button,activeIfExist:this.context.activeIfExist})}),(0,A.Z)(this,"handleOnClickAddMore",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",queryURL:chrome.runtime.getURL("/html/config.html"),url:chrome.runtime.getURL("/html/config.html#/popup"),strict:!1,activeIfExist:this.context.activeIfExist})}),this.state={options:P.menuOptions?P.menuOptions.filter(({on:e})=>e):[],custom:void 0!==F?F:[]}}render(){const{options:e,custom:t}=this.state,{hasLogin:a,bilibiliAccount:i,setTriggerWebsiteMap:r}=this.context;return n.createElement(D,{className:0===e.length&&0===t.length?"empty":""},n.createElement("div",{className:"inner-menu"},n.createElement(I.Button,{className:"more-link menu-item",onClick:r},"\xb7 \xb7 \xb7"),e.map(({key:e,on:t,needLogin:a})=>t?n.createElement(I.Button,{key:e,className:"menu-item",disabled:a&&!i,onClick:t=>this.handleOnClickDefaultMenu(t,e,a),onAuxClick:t=>this.handleOnClickDefaultMenu(t,e,a)},(0,N.__)("popupMenu_kinds_"+e)):null),_()(t).map(([e,t])=>n.createElement(I.Button,{key:e,className:"menu-item",onClick:e=>this.handleOnClickCustomMenu(e,t.url),onAuxClick:e=>this.handleOnClickCustomMenu(e,t.url)},t.title)),n.createElement(I.Button,{className:"menu-item add-btn",onClick:this.handleOnClickAddMore,onAuxClick:this.handleOnClickAddMore},n.createElement(T.Icon,{icon:"add",size:16}))))}}(0,A.Z)(R,"contextType",Z.Z);var z=a(47622);const G=l.createGlobalStyle`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }
`,U=l["default"].div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgb(255 255 255 / 92%);
  opacity: 0;
  transition: opacity 0s .3s, z-index 0s .3s;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 30;
    overflow: hidden;
  }

  .welcome {
    text-align: left;
    color: black;
    margin: 0 -1px 8px;
  }

  .logo {
    width: fit-content;
    color: var(--bilibili-pink);
  }

  .version {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 0;
    text-align: right;
    color: var(--google-grey-500);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 12px;
    left: 12px;

    .description {
      font-size: 12px;
      color: var(--bilibili-pink);
      text-align: center;

      a {
        color: var(--bilibili-blue);
        cursor: pointer;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(33 33 33 / 10%);
    background-image: linear-gradient(0deg, #0e0e0e 0%, transparent);
    backdrop-filter: blur(20px);
    .welcome {
      color: #eee;
    }
  }
`,j=l["default"].div`
  margin: 30% auto 0;
  width: min-content;
  text-align: center;
`,H=l["default"].div`
  margin: 140px auto 0;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .bilibili-helper-2-icon-bilibili {
    width: 42px;
    line-height: 10px;
  }
`;class V extends n.Component{constructor(e){super(e),(0,A.Z)(this,"state",{loginModalShow:!1}),(0,A.Z)(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),(0,A.Z)(this,"handleOnClickGoToOverview",()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))}),(0,A.Z)(this,"handleOnClickGoToWebsite",()=>{this.openPage("https://d.bilibilihelper.com/")})}render(){return n.createElement(U,{className:"show"},n.createElement(d,null),n.createElement(G,null),n.createElement(j,null,n.createElement("p",{className:"welcome"},"\u611f\u8c22\u4f7f\u7528"),n.createElement(T.Icon,{className:"logo",icon:"bilibilihelper",size:42}),n.createElement("p",{className:"version"},n.createElement("span",null,"\u5f53\u524d\u7248\u672c: ",z.i8))),n.createElement(H,null,n.createElement(I.Button,{className:"primary",onClick:this.handleOnClickGoToWebsite},n.createElement("div",null,"\u7acb\u5373\u66f4\u65b0"))))}}(0,A.Z)(V,"contextType",Z.Z);var Y=a(69055),$=a(76873);function W(e,t){var a=g()(e);if(f()){var i=f()(e);t&&(i=i.filter((function(t){return y()(e,t).enumerable}))),a.push.apply(a,i)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){(0,A.Z)(e,t,a[t])})):x()?k()(e,x()(a)):W(Object(a)).forEach((function(t){C()(e,t,y()(a,t))}))}return e}const q=l["default"].div`
  position: relative;
  width: 24px;
  margin-right: 4px;

  &:hover {
    .message-content {
      opacity: 1;
      visibility: visible;
    }
  }

  .bilibili-helper-2-icon-email {
    &.has-unread {
      color: var(--bilibili-pink);
    }
  }
`,K=l["default"].div.attrs(({show:e})=>({className:["bilibili-message-content",e?"show":null].join(" ")}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  min-width: 80px;
  min-height: 100px;
  background-color: rgb(236 236 236);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 0 8px rgb(0 0 0 / 10%);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 2px;
      display: flex;
      justify-content: space-between;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
      }

      .unread {
        color: var(--bilibili-pink);
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    ul {
      li {
        &:hover {
          background-color: var(--paper-grey-900);
        }
      }
    }
  }
`,J={reply:"https://message.bilibili.com/#/reply",at:"https://message.bilibili.com/#/at",like:"https://message.bilibili.com/#/love",system:"https://message.bilibili.com/#/system",whisper:"https://message.bilibili.com/#/whisper"};class Q extends n.Component{constructor(e){super(e),(0,A.Z)(this,"hideBoxT",null),(0,A.Z)(this,"state",{active:!1,latestList:{},newList:{},hasUnread:!1}),(0,A.Z)(this,"ref",n.createRef(null)),(0,A.Z)(this,"handleOnMouseEnterIcon",()=>{clearTimeout(this.hideBoxT),this.setState({active:!0})}),(0,A.Z)(this,"handleOnMouseLeaveIcon",e=>{this.handleOnHideBox(e)}),(0,A.Z)(this,"handleOnMouseEnterBox",e=>{clearTimeout(this.hideBoxT),this.setState({active:!0})}),(0,A.Z)(this,"handleOnHideBox",e=>{this.hideBoxT=setTimeout(()=>{this.setState({active:!1})},300)}),(0,A.Z)(this,"handleOnClickHideBox",e=>{this.ref.current&&!this.ref.current.contains(e.target)&&this.handleOnHideBox()}),(0,A.Z)(this,"handleOnClickMessage",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/reply"},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_message"})})}),(0,A.Z)(this,"handleOnClickMessageTypeLink",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:J[e]},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_message",label:e})})})}componentDidMount(){document.addEventListener("click",this.handleOnClickHideBox),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getUnreadInfo"},e=>{if(e){const{at:t=0,like:a=0,reply:i=0,sys_msg:r=0,follow_unread:n=0,unfollow_unread:o=0}=e.latestList,l=t+a+i+r+n+o>0;e.latestList={at:t,like:a,reply:i,sys_msg:r,follow_unread:n,unfollow_unread:o},this.setState(X(X({},e),{},{hasUnread:l}))}})}render(){const{bilibiliAccount:e}=this.context,{active:t,latestList:a,hasUnread:i}=this.state,r=void 0===e||!(!e||!e.hasLogin);return r?n.createElement(q,(0,Y.Z)({id:"bilibiliMessage",ref:this.ref,className:"message-app"},this.props),n.createElement($.Icon,{icon:"email",className:[t?"active":null,i?"has-unread":null].filter(Boolean).join(" "),size:16,onClick:this.handleOnClickMessage,onMouseEnter:this.handleOnMouseEnterIcon,onMouseLeave:this.handleOnMouseLeaveIcon}),n.createElement(K,{show:t,onMouseEnter:this.handleOnMouseEnterBox,onMouseLeave:this.handleOnMouseLeaveIcon},void 0!==a.follow_unread?n.createElement("ul",null,n.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("reply")},"\u56de\u590d\u6211\u7684 ",n.createElement("span",{className:a.reply>0?"unread":""},a.reply)),n.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("at")},"@\u6211\u7684 ",n.createElement("span",{className:a.at>0?"unread":""},a.at)),n.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("like")},"\u6536\u5230\u7684\u8d5e ",n.createElement("span",{className:a.like>0?"unread":""},a.like)),n.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("system")},"\u7cfb\u7edf\u901a\u77e5 ",n.createElement("span",{className:a.sys_msg>0?"unread":""},a.sys_msg)),n.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("whisper")},"\u6211\u7684\u6d88\u606f",n.createElement("span",{className:a.follow_unread+a.unfollow_unread>0?"unread":""},a.follow_unread+a.unfollow_unread))):null)):null}}(0,A.Z)(Q,"contextType",Z.Z);var ee=a(85025);const te=l["default"].div`
  position: relative;
  width: 24px;
  margin-right: 4px;
`,ae=l["default"].div.attrs(({show:e})=>({className:e?"show":null}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  background-color: rgb(236 236 236);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 0 8px rgb(0 0 0 / 10%);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  .history-list {
    margin: 0 0 6px;
    padding: 0;
    list-style: none;

    .history-list-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      min-width: 250px;
      white-space: nowrap;
      font-size: 16px;
      zoom: 0.6;

      .clear-all {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: dodgerblue;
        }
      }
    }

    .keyword-line {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 3px 0 3px 4px;
      max-width: 250px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
        border-radius: 2px;
      }

      .keyword {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .clear-btn {
        flex-shrink: 0;
        margin-left: 8px;
        color: var(--paper-grey-800);
        zoom: 0.6;

        &:hover {
          color: var(--paper-grey-600);
        }
      }
    }
  }

  input {
    padding: 2px 4px;
    width: calc(100% - 10px);
    min-width: 150px;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    .history-list .keyword-line {
      color: var(--bilibili-gray);

      &:hover {
        background-color: var(--paper-grey-900);
      }
    }

    input {
      background-color: var(--paper-grey-300);
      border-color: var(--paper-grey-900);
    }
  }
`;let ie=!0;const re=function(e){const[t,a]=n.useState(!1),[i,r]=n.useState([]),o=n.useRef(null),l=n.useRef(null),[p,s]=n.useState(!1),c=n.useCallback(()=>{t||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_searcher"}),a(!t)},[t,l,p]),d=n.useCallback(()=>{clearTimeout(ie),a(!0)},[]),h=n.useCallback(e=>{ie=setTimeout(()=>{!o.current||o.current.contains(e.target)||p||a(!1)},300)},[p]),b=n.useCallback(e=>{e&&chrome.runtime.sendMessage({target:"popupSearcher",event:"go2Search",keyword:e},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"search",label:e})})},[]),g=n.useCallback(e=>{e.persist(),"Enter"===e.key&&e.target.value.trim()&&b(e.target.value.trim())},[]),u=n.useCallback(()=>{chrome.runtime.sendMessage({target:"popupSearcher",event:"clearAll"},e=>{e&&r([])})},[]),f=n.useCallback(e=>{void 0!==e&&chrome.runtime.sendMessage({target:"popupSearcher",event:"clearKeywordByIndex",index:e},e=>{e&&r(e)})},[]),m=n.useCallback(()=>{s(!0)},[]),y=n.useCallback(()=>{s(!1)},[]);return n.useEffect(()=>{t&&setTimeout(()=>{l.current.focus()},250)},[t]),n.useEffect(()=>(document.addEventListener("click",h),chrome.runtime.sendMessage({target:"popupSearcher",event:"getSearchHistory"},e=>{e&&r(e)}),()=>{document.removeEventListener("click",h)}),[]),n.createElement(te,(0,Y.Z)({ref:o,className:"searcher"},e),n.createElement($.Icon,{icon:"search",className:t?"active":null,size:16,onClick:c}),n.createElement(ae,{show:t,onMouseEnter:d},i.length>0&&n.createElement("ul",{className:"history-list"},n.createElement("li",{className:"history-list-header"},"\u6700\u8fd1",i.length,"\u6761\u8bb0\u5f55 ",n.createElement("span",{className:"clear-all",onClick:u},"\u6e05\u7a7a\u8bb0\u5f55")),i.map((e,t)=>n.createElement("li",{className:"keyword-line",key:e},n.createElement("span",{className:"keyword",onClick:()=>b(e)},e),n.createElement($.Icon,{className:"clear-btn",size:16,icon:"close",onClick:()=>f(t)})))),n.createElement(ee.I,{ref:l,placeholder:"\u8f93\u5165\u5173\u952e\u8bcd\u6309\u56de\u8f66\u641c\u7d22",onKeyPress:g,onCompositionStart:m,onCompositionEnd:y})))};function ne(e,t){var a=g()(e);if(f()){var i=f()(e);t&&(i=i.filter((function(t){return y()(e,t).enumerable}))),a.push.apply(a,i)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){(0,A.Z)(e,t,a[t])})):x()?k()(e,x()(a)):ne(Object(a)).forEach((function(t){C()(e,t,y()(a,t))}))}return e}const le=n.lazy(()=>a.e(30).then(a.bind(a,63100))),pe=l["default"].div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;

  .bilibili-helper-2-icon-bell {
    &.has-new {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    //background-color: rgb(27 27 27);
  }
`;class se extends n.Component{constructor(e){super(e),(0,A.Z)(this,"state",{active:!1,list:[],latestUpdateDateTime:null,hasNew:!1}),(0,A.Z)(this,"handleOnClickIcon",()=>{const{active:e}=this.state;e||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_announcement"}),this.setState({active:!e})}),(0,A.Z)(this,"handleOnCloseButton",()=>{const{hasNew:e}=this.state;e&&chrome.runtime.sendMessage({target:"message",event:"setAnnouncementRead"},()=>{this.setState({hasNew:!1})}),this.setState({active:!1})})}componentDidMount(){chrome.runtime.sendMessage({target:"message",event:"getLatestAnnouncement"},e=>{if(e){const{announcement:t}=e;t.hasNew&&this.setState({active:!0}),this.setState(oe({},t))}})}render(){const{active:e,list:t,content:a,hasNew:i}=this.state;return n.createElement(pe,null,n.createElement(T.Icon,{icon:"bell",size:16,className:[e?"active":null,i?"has-new":null].filter(Boolean).join(" "),onClick:this.handleOnClickIcon}),n.createElement(n.Suspense,{fallback:null},n.createElement(le,{active:e,list:t,handleOnCloseButton:this.handleOnCloseButton})))}}(0,A.Z)(se,"contextType",Z.Z);const ce=n.lazy(()=>a.e(867).then(a.bind(a,35663))),de=l["default"].div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;

  .bilibili-helper-2-icon-bell {
    &.has-new {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    //background-color: rgb(27 27 27);
  }
`;class he extends n.Component{constructor(e){super(e),(0,A.Z)(this,"wrapperRef",n.createRef()),(0,A.Z)(this,"state",{active:!1,list:[]}),(0,A.Z)(this,"updateList",()=>{chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},e=>{e&&this.setState({list:e})})}),(0,A.Z)(this,"handleOnHideSearchBox",e=>{this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.setState({active:!1})}),(0,A.Z)(this,"handleOnClickIcon",()=>{const{active:e}=this.state;e||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_account_list"}),this.setState({active:!e})}),(0,A.Z)(this,"handleOnMouseEnterIcon",()=>{clearTimeout(this.hideBoxT),this.setState({active:!0})}),(0,A.Z)(this,"handleOnMouseLeaveIcon",e=>{this.hideBoxT=setTimeout(()=>{this.setState({active:!1})},300)}),(0,A.Z)(this,"handleOnMouseEnterBox",e=>{clearTimeout(this.hideBoxT),this.setState({active:!0})}),(0,A.Z)(this,"handleOnHideBox",e=>{this.hideBoxT=setTimeout(()=>{this.setState({active:!1})},300)})}componentDidMount(){chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},e=>{e&&this.setState({list:e})}),document.addEventListener("click",this.handleOnHideSearchBox)}render(){const{active:e,list:t}=this.state;return n.createElement(de,{ref:this.wrapperRef},n.createElement(T.Icon,{icon:"account",size:16,className:[e?"active":null].filter(Boolean).join(" "),onClick:this.handleOnClickIcon,onMouseEnter:this.handleOnMouseEnterIcon,onMouseLeave:this.handleOnMouseLeaveIcon}),n.createElement(n.Suspense,{fallback:null},n.createElement(ce,{active:e,list:t,handleOnCloseButton:this.handleOnCloseButton,updateList:this.updateList,onMouseEnter:this.handleOnMouseEnterBox,onMouseLeave:this.handleOnHideBox})))}}(0,A.Z)(he,"contextType",Z.Z);var be=a(72457);const ge=n.lazy(()=>a.e(671).then(a.bind(a,97689))),ue=l["default"].div`
  position: relative;
  bottom: 10px;
  margin-bottom: -26px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`,fe=l["default"].div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--paper-grey-100);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  transition: border-color .3s;

  &:hover {
    border: 3px solid var(--paper-grey-50);
  }

  .img {
    position: relative;
    top: 0;
    right: 0;
    border-radius: 50%;
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--paper-grey-800);
    &:hover {
      border-color: var(--paper-grey-700);
    }
  }
`;class me extends n.Component{constructor(e){super(e),(0,A.Z)(this,"state",{active:!1}),(0,A.Z)(this,"handleOnClickIcon",()=>{this.state.active||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_owner_area"}),this.setState({active:!this.state.active})}),(0,A.Z)(this,"handleOnCloseModal",()=>{this.setState({active:!1})})}render(){const{bilibiliAccount:e}=this.context,{active:t}=this.state,a=void 0!==e&&!(!e||!e.hasLogin);return a?n.createElement(ue,null,n.createElement(fe,{onClick:this.handleOnClickIcon},n.createElement(be.E,{url:e&&e.face})),n.createElement(n.Suspense,{fallback:null},n.createElement(ge,{active:t,onClose:this.handleOnCloseModal}))):null}}(0,A.Z)(me,"contextType",Z.Z);const ye=l["default"].div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;
`;class ve extends n.Component{constructor(e){super(e),(0,A.Z)(this,"state",{active:!1}),(0,A.Z)(this,"handleOnClickIcon",()=>{const{active:e}=this.state;e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_sniffer"}),chrome.runtime.sendMessage({target:"sniffer",event:"startGetCurrentTabSnifferData"}))})}componentDidMount(){chrome.runtime.sendMessage({target:"sniffer",event:"checkPermission"},e=>{this.setState({active:e})})}render(){const{active:e}=this.state;return e?n.createElement(ye,null,n.createElement(O.Icon,{icon:"bigData",size:16,onClick:this.handleOnClickIcon})):null}}const xe=l["default"].div.attrs({className:"popup-toolbar"})`
  position: absolute;
  bottom: 0;
  right: 0;
  //left: 0;
  //display: flex;
  //align-items: center;
  height: 30px;
  padding: 0 10px 0 4px;
  border-radius: 4px 0 0 0;
  background-color: rgb(230 230 230);
  //background-color: rgb(230 230 230 / 70%);
  //backdrop-filter: blur(10px);
  //pointer-events: none;
  z-index: 6;

  .extra-tools {
    display: flex;
    margin-top: 3px;
    margin-right: -10px;
    margin-left: auto;
    line-height: 16px;
    pointer-events: auto;

    .action-btn {
      margin-right: 4px;

      &:last-of-type {
        //margin-right: 0;
      }
    }

    .bilibili-helper-2-iconfont {
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
      background-color: transparent;
      transition: background-color .2s;

      &:hover, &.active {
        background-color: #ccc;
      }

      &:active {
        background-color: #bbb;
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(20 20 20);
    color: #999999;
    .extra-tools {
      .bilibili-helper-2-iconfont {
        &:hover, &.active {
          background-color: #222;
        }

        &:active {
          background-color: #1a1a1a;
        }
      }
    }
  }
`,we={option:()=>chrome.runtime.getURL("html/config.html"),message:()=>"https://message.bilibili.com/#/reply"};class ke extends n.Component{constructor(e){super(e),(0,A.Z)(this,"handleOnClickOption",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_option"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:we.option()})})}render(){return n.createElement(xe,null,n.createElement("div",{className:"extra-tools"},n.createElement(ve,{className:"action-btn"}),n.createElement(re,{className:"action-btn"}),n.createElement(Q,null),n.createElement(se,{className:"action-btn"}),n.createElement(he,null),n.createElement(T.Icon,{className:"action-btn",icon:"option",size:16,onClick:this.handleOnClickOption}),n.createElement(me,null)))}}var Ee=a(73727),Ce=a(66130),Me=a.n(Ce);const Ae={\u756a\u5267:"https://www.bilibili.com/anime/",\u56fd\u521b:"https://www.bilibili.com/guochuang/",\u7535\u5f71:"https://www.bilibili.com/movie/",\u7535\u89c6\u5267:"https://www.bilibili.com/tv/",\u7eaa\u5f55\u7247:"https://www.bilibili.com/documentary/",\u8bfe\u5802:"https://www.bilibili.com/cheese/",\u516c\u5f00\u8bfe:"https://www.bilibili.com/mooc",\u52a8\u753b:"https://www.bilibili.com/v/douga/",\u97f3\u4e50:"https://www.bilibili.com/v/music/",\u821e\u8e48:"https://www.bilibili.com/v/dance/",\u6e38\u620f:"https://www.bilibili.com/v/game/",\u77e5\u8bc6:"https://www.bilibili.com/v/knowledge/",\u79d1\u6280:"https://www.bilibili.com/v/tech/",\u8fd0\u52a8:"https://www.bilibili.com/v/sports",\u6c7d\u8f66:"https://www.bilibili.com/v/car",\u751f\u6d3b:"https://www.bilibili.com/v/life",\u7f8e\u98df:"https://www.bilibili.com/v/food",\u52a8\u7269\u5708:"https://www.bilibili.com/v/animal",VLOG:"https://www.bilibili.com/v/life/daily/",\u9b3c\u755c:"https://www.bilibili.com/v/kichiku/",\u65f6\u5c1a:"https://www.bilibili.com/v/fashion",\u5a31\u4e50:"https://www.bilibili.com/v/ent/",\u5f71\u89c6:"https://www.bilibili.com/v/cinephile",\u65b0\u6b4c\u70ed\u699c:"https://www.bilibili.com/v/musicplus/",\u5168\u533a\u6392\u884c\u699c:"https://www.bilibili.com/v/popular/rank/all",\u6d3b\u52a8\u4e2d\u5fc3:"https://www.bilibili.com/blackboard/activity-list.html",\u793e\u533a\u4e2d\u5fc3:"https://www.bilibili.com/blackboard/activity-5zJxM3spoS.html",\u5c0f\u9ed1\u5c4b:"https://www.bilibili.com/blackroom/ban",\u98ce\u7eaa\u59d4\u5458\u4f1a:"https://www.bilibili.com/judgement/index",\u7efc\u827a:"https://www.bilibili.com/variety/",\u6e38\u620f\u4e2d\u5fc3:"https://game.bilibili.com/platform",\u8d5b\u4e8b:"https://www.bilibili.com/v/game/match/",\u996d\u76d2:"https://workshop.bilibili.com/homepage"},Oe=l["default"].div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 3px 3px 3px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255 / 75%);
  backdrop-filter: blur(20px);
  z-index: 5;
  visibility: hidden;
  overflow: auto;
  transform: translate(10px, 0px);
  transition: transform 0.1s ease 0s, opacity 0.2s ease 0s, visibility 0s ease 0.3s;
  opacity: 0;

  &.show {
    visibility: visible;
    transform: translate(0px, 0px);
    transition: transform 0.2s ease 0s, visibility 0.3s ease 0s, opacity 0.1s ease 0s;
    opacity: 1;
  }

  .topic {
    margin: 18px 22px 12px;
    font-size: 24px;
    font-weight: 300;
  }

  .link-grid {
    padding-bottom: 30px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 4fr));
    grid-template-rows: repeat(auto-fill, minmax(40px, 1fr));
    overflow: auto;

    .website-link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border: 1px solid transparent;
      border-radius: 2px;
      text-decoration: none;
      background-color: transparent;
      color: #000;
      cursor: pointer;

      :hover {
        background-color: var(--bilibili-blue);
        border-color: rgb(0, 156, 214);
        color: var(--bilibili-gray);
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0 / 75%);
    .link-grid {
      .website-link {
        color: #fff;

        :hover {
          background-color: rgb(22, 147, 192);
          border-color: rgb(0, 97, 133);
        }
      }
    }
  }
`,Se=({name:e,link:t})=>{const{createTab:a}=(0,n.useContext)(Z.Z),i=(0,n.useCallback)(i=>{a(i,t),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_website_link",label:e})},[t]);return n.createElement("a",{key:e,className:"website-link",onAuxClick:i,onClick:i},e)},Be=({show:e=!1})=>{const[t,a]=(0,n.useState)(!1),{setHideWebsiteMap:i}=(0,n.useContext)(Z.Z),r=(0,n.useCallback)(()=>{a(!1),i()},[]);return(0,n.useEffect)(()=>{a(e)},[e]),n.createElement(Oe,{className:t?"show":null,onMouseLeave:r},n.createElement("h3",{className:"topic"},"\u7ad9\u70b9\u5730\u56fe"),n.createElement("div",{className:"link-grid"},_()(Ae).map(([e,t],a)=>n.createElement(Se,{key:a,name:e,link:t}))))};var Le=a(55168);const _e=[{key:"home",path:"/",component:n.lazy(()=>a.e(68).then(a.bind(a,45075))),exact:!0,needLogin:!1,show:!0},{key:"specialAttention",path:"/specialAttention",component:n.lazy(()=>Promise.all([a.e(196),a.e(372)]).then(a.bind(a,51948))),exact:!0,needLogin:!1,show:!1},{key:"recentlyPosted",path:"/recentlyPosted",component:n.lazy(()=>Promise.all([a.e(196),a.e(891)]).then(a.bind(a,1753))),exact:!0,needLogin:!0,show:!1},{key:"animeTimeTable",path:"/animeTimeTable",component:n.lazy(()=>a.e(266).then(a.bind(a,60060))),show:!1},{key:"anime",path:"/anime",component:n.lazy(()=>a.e(266).then(a.bind(a,85437))),needLogin:!0,show:!1},{key:"live",path:"/live",component:n.lazy(()=>Promise.all([a.e(196),a.e(191)]).then(a.bind(a,26436))),exact:!0,needLogin:!0,show:!1},{key:"recommend",path:"/recommend",component:n.lazy(()=>Promise.all([a.e(196),a.e(27)]).then(a.bind(a,21151))),exact:!0,needLogin:!0,show:!1},{key:"favlist",path:"/favlist",component:n.lazy(()=>Promise.all([a.e(196),a.e(663)]).then(a.bind(a,9710))),exact:!0,needLogin:!0,show:!1},{key:"history",path:"/history",component:n.lazy(()=>a.e(654).then(a.bind(a,57171))),exact:!0,needLogin:!0,show:!1},{key:"watchLater",path:"/watchLater",component:n.lazy(()=>a.e(317).then(a.bind(a,84281))),exact:!0,needLogin:!0,show:!1},{key:"manga",path:"/manga",component:n.lazy(()=>a.e(491).then(a.bind(a,73154))),exact:!0,needLogin:!0,show:!1},{key:"realHome",path:"/home",component:n.lazy(()=>Promise.all([a.e(196),a.e(497)]).then(a.bind(a,37545))),exact:!0,needLogin:!0,show:!1},{key:"creator",path:"/creator",component:n.lazy(()=>a.e(594).then(a.bind(a,48505))),exact:!0,needLogin:!0,show:!1}];var Ie;const Te={1:5,2:5},Ne=l["default"].div.attrs({className:"popup-main"})`
  position: relative;
  //display: inline-block;
  flex-shrink: 0;
  flex-grow: 1;
  width: calc(100% - 80px);
  height: 100%;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
  overflow-x: hidden;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .tab-bar {
    position: relative;
    //margin: 10px 0px 0px;
    //padding: 0 10px 6px;
    //box-shadow: 0 1px 0 0px #ddd;
    width: 100%;
    background-color: #e7e7e7;
    z-index: 4;
    white-space: nowrap;
    overflow: visible;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    .inner {
      //width: fit-content;
      //will-change: transform;
      .tab-bar-box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .extra-tools {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          .current-extra-section {
            width: fit-content;
            //position: absolute;
            //top: 100%;
            //background-color: #e7e7e7;
            //pointer-events: none;
          }
        }

        .show-more-tab-btn {
          padding: 8px;
          cursor: pointer;
        }
      }
    }

    .more-tab-bar {
      display: grid;
      //grid-auto-flow: column;
      grid-template-columns: repeat(${({columns:e})=>Te[e]}, 1fr);
      //grid-template-rows: repeat(2, 1fr);
      justify-items: center;
      align-items: center;
      position: absolute;
      padding-bottom: 0;
      padding-right: 28px;
      width: calc(100% - 28px);
      max-height: 0px;
      background-color: #e7e7e7;
      opacity: 0;
      overflow: hidden;
      transition: max-height .2s, opacity .15s;
      box-shadow: inset 0px 0.5px 1px rgb(0 0 0 / 10%);
      direction: rtl;

      &.show {
        max-height: fit-content;
        padding-bottom: 18px;
        opacity: 1;
      }

      &.is-vip {
        padding-bottom: 0;
      }

      .vip-btn {
        position: absolute;
        bottom: 6px;
        right: 6px;
        left: 6px;
        text-align: center;
        color: var(--bilibili-pink);
        cursor: pointer;
      }
    }

    a {
      box-sizing: border-box;
      display: inline-block;
      padding: 6px;
      width: 100%;
      font-size: 14px;
      text-decoration: none;
      color: #666;
      text-align: center;
      transition: color 150ms;
      cursor: pointer;
      user-select: none;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover:not(.active) {
        color: hsl(0deg 0% 0%);
      }

      &.active {
        position: relative;
        font-weight: bold;
        color: #333333;
        background-color: #F4F4F4;
      }

      &[disabled] {
        cursor: not-allowed;
        color: #3c3c3c;
      }
    }

    .translate-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      pointer-events: none;
    }

    .translate-box {
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: #F4F4F4;
      transition: width .15s .05s, transform .2s ease-in-out;
      //will-change: width, transform;
      z-index: -1;

      //&::before, &::after {
      //  content: '';
      //  position: absolute;
      //  bottom: 0;
      //  display: block;
      //  width: 6px;
      //  height: 6px;
      //  background-image: radial-gradient(closest-side, #e7e7e7 50%, #f4f4f4 50%);
      //  background-position: 200% 200%;
      //  background-size: 400% 400%;
      //}
      //
      //&::before {
      //  left: -6px;
      //}
      //
      //&::after {
      //  right: -6px;
      //  transform: rotate(90deg);
      //}
    }
  }

  .content {
    position: relative;
    height: calc(100% - 32px);
    font-size: 12px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }

    &.show-top-bar {
      padding-top: 30px;
      height: calc(100% - 64px);

      & > div {
        height: calc(100% - 30px);
      }
    }

    .login-wrapper {
      display: flex;
      align-items: center;
      margin-top: -30px;
      padding: 0 6px;
      height: 30px !important;
      font-weight: bold;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      z-index: 30;

      .skip-btn {
        margin-left: auto;
        margin-right: 12px;
        cursor: pointer;
      }

      .login-btn {
        padding: 0 8px;
        height: 20px;
        line-height: 20px;
        border-radius: 6px;
        background-color: var(--bilibili-gray);
        color: var(--bilibili-blue);
        text-decoration: none;
      }
    }

    .need-update-wrapper {
      display: flex;
      align-items: center;
      margin-top: -30px;
      padding: 0 6px;
      height: 30px !important;
      font-weight: bold;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      //z-index: 30;

      .skip-btn {
        margin-left: auto;
        margin-right: 12px;
        cursor: pointer;
      }

      .need-update-btn {
        padding: 0 8px;
        height: 20px;
        line-height: 20px;
        border-radius: 6px;
        background-color: var(--bilibili-gray);
        color: var(--bilibili-blue);
        text-decoration: none;
      }
    }

    & > div {
      position: absolute;
      box-sizing: border-box;
      padding: 10px 10px 0 10px;
      width: 100%;
      height: 100%;
      overflow: auto;
      contain: size;
      scrollbar-width: thin;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    color: #999999;

    .tab-bar {
      background-color: #151515;
      //box-shadow: 0 1px 0 0px #191919;

      a {
        color: #999;

        &:hover:not(.active) {
          color: hsl(0deg 0% 90%);
        }

        &.active {
          color: #CCCCCC;
          background-color: #1f1f1f;
        }
      }

      //.translate-box {
      //  background-color: #1f1f1f;
      //
      //  &::before, &::after {
      //    background-image: radial-gradient(closest-side, #151515 50%, #1f1f1f 50%);
      //  }
      //}

      /*.inner .tab-bar-box .extra-tools {
        .current-extra-section {
          background-color: #151515;
        }
      }*/

      .more-tab-bar {
        background-color: #151515;
        box-shadow: inset 0px 0.5px 1px rgb(255 255 255 / 5%);

        .vip-btn {
          color: var(--google-yellow-300);
        }
      }
    }
  }
`,Ze=B().get("showLoginBar"),De=(B().get("showUpdateBar"),B().get("popupMain-config")),Pe=De.sectionShow.filter(({key:e,on:t})=>{const a=_e.find(t=>t.key===e);return a&&t}),Fe=De.temporaryShowLatestSection,Re=Pe.length>0?Pe[0]:null,ze=_e.find(e=>e.key===Re.key)||_e[0],Ge=B().get("popupMain-temp-path"),Ue=(0,Le.EN)((Ie=class extends n.Component{constructor(e){super(e),(0,A.Z)(this,"currentTabElement",null),(0,A.Z)(this,"state",{translateBoxStyle:null,showLoginBar:void 0===Ze||Ze,showUpdateBar:!1,temporaryShowLatestSection:void 0!==Fe&&Fe,showMoreTabBar:!1,currentRoute:null}),(0,A.Z)(this,"handleOnClickLink",(e,t,i,r)=>{e.persist(),this.currentTabElement=e.target,chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"tab_bar",label:i});const{history:n,location:o}=this.props,{bilibiliAccount:l,columns:p}=this.context;if(o.pathname!==i){const e=_e.find(e=>e.path===i);if(e){const t=Pe.slice(Te[p]).find(({key:t})=>t===e.key);e.isExtraRoute=!!t,this.setState({currentRoute:e})}!r||r&&r===!!l?(B().set("popupMain-temp-path",{path:i,t:Me()()}),this.setState({showMoreTabBar:!1}),n.push(i)):Promise.all([a.e(196),a.e(632)]).then(a.bind(a,16168)).then(({notifyNeedLogin:e})=>{e&&e()})}}),(0,A.Z)(this,"handleOnClickSkipLogin",()=>{this.setState({showLoginBar:!1},()=>{B().set("showLoginBar",!1)}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_skip_login"})}),(0,A.Z)(this,"handleOnClickSkipUpdate",()=>{const{states:e}=this.context;B().set("showUpdateBar:"+e.latestVersion,!1),this.setState({showUpdateBar:!1}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_skip_update"})}),(0,A.Z)(this,"handleOnClickLogin",()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_login"})}),(0,A.Z)(this,"handleOnClickShowMoreTabBar",()=>{this.setState({showMoreTabBar:!this.state.showMoreTabBar})}),(0,A.Z)(this,"showMoreTabBar",()=>{this.setState({showMoreTabBar:!0})}),(0,A.Z)(this,"hideMoreTabBar",()=>{this.setState({showMoreTabBar:!1})}),this.tabRef=n.createRef(),this.tabInnerRef=n.createRef()}componentDidMount(){const{columns:e}=this.context,{history:t}=this.props;Fe&&Ge&&Me()()-Ge.t<3e5?t.push(Ge.path):t.push(ze.path);const a=document.querySelector(".tab-bar-box .active");a&&(a.clientWidth,this.currentTabElement=a);const i=_e.find(e=>e.path===location.hash.slice(1));if(i){const t=Pe.slice(Te[e]).find(({key:e})=>e===i.key);i.isExtraRoute=!!t,this.setState({currentRoute:i})}}render(){const{location:e}=this.props,{translateBoxStyle:t,showLoginBar:a,showUpdateBar:i,showMoreTabBar:r,currentRoute:o}=this.state,{hasLogin:l,bilibiliAccount:p,states:s,isVIP:c,isSuperVIP:d,handleOnClickPayment:b,columns:g,showWebsiteMap:u}=this.context,f=c||d,m=!(null===s||void 0===s||!s.needUpdate||null===s||void 0===s||!s.latestVersion)&&B().get("showUpdateBar:"+(null===s||void 0===s?void 0:s.latestVersion)),y=void 0===m||(i||m);return n.createElement(Ne,{columns:g},n.createElement("div",{className:"tab-bar",ref:this.tabRef,onMouseLeave:this.hideMoreTabBar},n.createElement("div",{className:"inner",ref:this.tabInnerRef},n.createElement("div",{className:"tab-bar-box"},Pe.slice(0,Te[g]).map(({key:t,on:a})=>{const i=_e.find(e=>e.key===t);if(i){const{path:r,needLogin:o=!1,show:l}=i;return l||a?n.createElement("a",{key:t,disabled:!p&&!0===o,className:e.pathname===r?"active":null,onClick:e=>this.handleOnClickLink(e,t,r,o)},(0,h.__)("popupMain_"+t)):null}return null}),Pe.length>Te[g]?n.createElement("div",{className:"extra-tools"},g>1&&o&&o.isExtraRoute?n.createElement("a",{className:"current-extra-section active"},(0,h.__)("popupMain_"+o.key)):null,n.createElement(O.Icon,{className:"show-more-tab-btn",icon:r?"top-arrow":"bottom-arrow",size:12,onClick:this.handleOnClickShowMoreTabBar,onMouseEnter:this.showMoreTabBar})):null)),Pe.length>Te[g]-1?n.createElement("div",{className:["more-tab-bar",r?"show":"",f?"is-vip":""].join(" ")},Pe.slice(Te[g]).map(({key:t,on:a})=>{const i=_e.find(e=>e.key===t);if(i){const{path:r,needLogin:o=!1,show:l}=i;return l||a?n.createElement("a",{key:t,disabled:!p&&!0===o,className:e.pathname===r?"active":null,onClick:e=>this.handleOnClickLink(e,t,r,o)},(0,h.__)("popupMain_"+t)):null}return null}),f?null:n.createElement("span",{className:"vip-btn",onClick:b},"\u81ea\u5b9a\u4e49\u6392\u5e8f\u548c\u663e\u793a\u6570\u91cf ~ \u70b9\u51fb\u5f00\u901a\u4f1a\u5458")):null),n.createElement("div",{className:["content",!l&&a||y?"show-top-bar":""].join(" ")},!l&&a?n.createElement("div",{className:"login-wrapper"},"\u65b0\u589e\u5341\u591a\u9879\u7279\u6027\uff0c\u5f00\u59cb\u4e2a\u6027\u5316\u5b9a\u5236~",n.createElement("a",{className:"skip-btn",onClick:this.handleOnClickSkipLogin},"\u5173\u95ed"),n.createElement("a",{className:"login-btn",onClick:this.handleOnClickLogin,href:chrome.runtime.getURL("html/config.html"),target:"_blank",rel:"noreferrer"},"\u70b9\u51fb\u767b\u5f55")):null,s&&s.needUpdate&&y?n.createElement("div",{className:"need-update-wrapper"},"\u65b0\u7248\u672c\u300c",s.latestVersion,"\u300d\u73b0\u5df2\u53d1\u5e03 ~",n.createElement("a",{className:"skip-btn",onClick:this.handleOnClickSkipUpdate},"\u5173\u95ed"),n.createElement("a",{className:"need-update-btn",href:"https://d.bilibilihelper.com",target:"_blank",rel:"noreferrer"},"\u7acb\u5373\u66f4\u65b0")):null,n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading...")},n.createElement(Le.rs,{location:e},_e.map(({title:e,path:t,exact:a,component:i})=>n.createElement(Le.AW,{key:t,title:e,path:t,exact:a,component:i}))))),n.createElement(Be,{show:u}))}},(0,A.Z)(Ie,"contextType",Z.Z),Ie)),je=["active","activeIfExist"];function He(e,t){var a=g()(e);if(f()){var i=f()(e);t&&(i=i.filter((function(t){return y()(e,t).enumerable}))),a.push.apply(a,i)}return a}function Ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?He(Object(a),!0).forEach((function(t){(0,A.Z)(e,t,a[t])})):x()?k()(e,x()(a)):He(Object(a)).forEach((function(t){C()(e,t,y()(a,t))}))}return e}const Ye=l.createGlobalStyle`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin-left: auto;
    //-webkit-font-smoothing: subpixel-antialiased;
    width: ${({columns:e})=>2===e?500:400}px;
    max-width: 800px;
    min-width: 400px;

    // 修复chrome96的bug，在绝对定位或固定定位仍旧会显示出滚动条
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }

  .fade-enter {
    opacity: 0;
    //transition: opacity 300ms cubic-bezier(0.42, 0, 0, 0.84);
    z-index: 2;
    visibility: visible;
    z-index: 1;
  }

  .fade-enter-active {
    opacity: 1;
  }

  .fade-appear-done {
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
    //transition: opacity 150ms cubic-bezier(0.42, 0, 0, 0.84);
    z-index: 0;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .fade-exit-done {
    opacity: 0;
    visibility: hidden;
  }

  .extension-reload-btn {
    margin-left: 8px;
    padding: 0 8px;
    height: 20px;
    line-height: 20px;
    border-radius: 6px;
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
    text-decoration: none;
  }
`,$e=l["default"].div.attrs(()=>({className:"app-wrapper"}))`
  position: relative;
  //display: flex;
  //flex-direction: column;
  //width: 400px;
  min-width: 200px;
  max-width: 800px;
  min-height: 200px;
  //max-height: 600px;
  overflow: hidden;

  & > .content-wrapper {
    display: flex;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }
`,We=B().get("popupMain-config")||{},Xe=B().get("popup-config")||{},qe=Xe?Xe.resizeRate:1;class Ke extends n.Component{constructor(e){super(e),(0,A.Z)(this,"state",{states:null,currentVersionInfo:null,needRefreshPage:!1,specialAttentionList:[],recentVideoList:[],isVIP:!1,isSuperVIP:!1,showWebsiteMap:!1,videoOpenMethod:()=>this.state.isVIP&&We?We.videoOpenMethod:"direct",activeIfExist:(null===We||void 0===We?void 0:We.activeIfExist)||!1,hasLogin:!0,hasRegister:!1,bilibiliAccount:void 0,bhAccount:null,columns:(null===We||void 0===We?void 0:We.columns)||1,videoCardType:(null===We||void 0===We?void 0:We.videoCardType)||"old",showTag:null===We||void 0===We?void 0:We.showTag,loading:!1,handleOnClickRefresh:()=>{history.go()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickPayment:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("html/config.html?showPaymentModal=1")})},getSpecialAccountList:()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},(e=[])=>{this.setState({specialAttentionList:e})})},setVIPState:()=>this.state.states&&(0,h.isVIP)(this.state.bhAccount),setSuperVIPState:()=>this.state.states&&(0,h.isSuperVIP)(this.state.bhAccount),createTab:(e,t,a={})=>{const{active:i,activeIfExist:r}=a,n=(0,M.Z)(a,je);chrome.runtime.sendMessage(Ve({target:"tabController",event:"create",queryURL:t,strict:!1,url:t,active:!i&&"silent"!==this.state.videoOpenMethod()&&(void 0!==a.active?a.active:0===e.button),activeIfExist:r||this.state.activeIfExist},n))},setShowWebsiteMap:()=>{this.setState({showWebsiteMap:!0})},setHideWebsiteMap:()=>{this.setState({showWebsiteMap:!1})},setTriggerWebsiteMap:()=>{this.setState({showWebsiteMap:!this.state.showWebsiteMap})}}),(0,A.Z)(this,"initAccountData",async e=>new(r())(t=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},a=>{if(a){const{hasLogin:i,bilibiliAccount:r=null,hasRegister:n}=a;this.setState({hasLogin:i,hasRegister:n,bilibiliAccount:r}),t(),e&&e()}else setTimeout(()=>{this.initAccountData(t)},500)})})),(0,A.Z)(this,"handleOnReloadExtension",()=>{chrome.runtime.reload()})}componentDidMount(){document.body.onmousedown=e=>{if(1===e.button)return!1},this.props.initialized||(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"init_failed"}),O.Message.error(n.createElement(n.Fragment,null,"\u52a9\u624b\u521d\u59cb\u5316\u5f02\u5e38",n.createElement("a",{className:"extension-reload-btn",onClick:this.handleOnReloadExtension},"\u70b9\u51fb\u91cd\u542f")),0)),document.body.style.width=Math.floor(window.innerWidth/qe)+"px",setTimeout(()=>{document.querySelector(".app-wrapper").style.height=Math.floor(window.innerHeight/qe)+"px"}),document.body.style.zoom=qe,chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e},()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})})}),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:Ve({},e)})}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup"}),this.state.getSpecialAccountList(),this.initAccountData().then(()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e},()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})})})})}render(){const{columns:e,states:t}=this.state;return n.createElement(Ee.UT,null,n.createElement(Ye,{columns:e}),n.createElement($e,{style:{maxWidth:(2===e?800:400)+"px"}},n.createElement(Z.Z.Provider,{value:this.state},n.createElement("div",{className:"content-wrapper"},n.createElement(Ue,null),n.createElement(R,null)),n.createElement(ke,null),t&&t.shouldUpdate?n.createElement(V,null):null)))}}const Je=l.createGlobalStyle`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }
`,Qe=l["default"].div`
  width: 400px;
  height: 500px;
  backdrop-filter: blur(4px);
  background-color: rgb(255 255 255 / 92%);
  opacity: 0;
  transition: opacity 0s .3s, z-index 0s .3s;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 10;
    overflow: hidden;
  }

  .welcome {
    text-align: left;
    color: black;
    margin: 0 -1px 8px;
  }

  .logo {
    width: fit-content;
    color: var(--bilibili-pink);
  }

  .version {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 0;
    text-align: right;
    color: var(--google-grey-500);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 12px;
    left: 12px;

    .description {
      font-size: 12px;
      color: var(--bilibili-pink);
      text-align: center;

      a {
        color: var(--bilibili-blue);
        cursor: pointer;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(33 33 33 / 10%);
    background-image: linear-gradient(0deg, #0e0e0e 0%, transparent);
    backdrop-filter: blur(20px);
    .welcome {
      color: #eee;
    }
  }
`,et=l["default"].div`
  margin: 30% auto 0;
  width: min-content;
  text-align: center;
`,tt=l["default"].div`
  margin: 140px auto 0;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .bilibili-helper-2-icon-bilibili {
    width: 42px;
    line-height: 10px;
  }
`;class at extends n.Component{constructor(e){super(e),(0,A.Z)(this,"state",{loginModalShow:!1}),(0,A.Z)(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),(0,A.Z)(this,"handleOnClickGoToOverview",()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))}),(0,A.Z)(this,"handleOnClickGoToWebsite",()=>{this.openPage("https://bilibilihelper.com/")})}render(){return n.createElement(Qe,{className:"show"},n.createElement(d,null),n.createElement(Je,null),n.createElement(et,null,n.createElement("p",{className:"welcome"},"\u611f\u8c22\u4f7f\u7528"),n.createElement(T.Icon,{className:"logo",icon:"bilibilihelper",size:42}),n.createElement("p",{className:"version"},n.createElement("span",null,"\u5f53\u524d\u7248\u672c: ",z.i8))),n.createElement(tt,null,n.createElement(I.Button,{className:"primary"},n.createElement("div",null,"\u6b63\u5728\u542f\u52a8\u4e2d\uff0c\u8bf7\u7a0d\u5019"))))}}(0,A.Z)(at,"contextType",Z.Z);const it=document.getElementById("root"),rt=(e,t)=>new(r())(a=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},i=>{a(e<t?!!i&&!!i.initializedAll:!!i&&!!i.bilibiliHelperAccount)})}),nt=6;let ot=0,lt=!1;const pt=()=>new(r())(e=>{rt(ot,nt).then(t=>{t?((0,h.initI18n)().then(()=>{(0,o.render)(n.createElement(n.Fragment,null,n.createElement(d,null),n.createElement(Ke,{initialized:!0})),it)}),e(!0)):ot<nt?(lt||(lt=!0,(0,o.render)(n.createElement(at,null),it)),++ot,setTimeout(pt,1e3)):((0,h.initI18n)().then(()=>{(0,o.render)(n.createElement(n.Fragment,null,n.createElement(d,null),n.createElement(Ke,{initialized:!1})),it)}),e(!1))})});pt()},55928:(e,t,a)=>{a.d(t,{I:()=>i});const i={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"}},71338:(e,t,a)=>{a.d(t,{$:()=>r});var i=a(60677);i.css`
  --Ga0: #0D0D0E;
  --Ga0_s: #1E2022;
  --Ga0_t: #1E2022;
  --Ga1: #000000;
  --Ga1_s: #232527;
  --Ga1_t: #232527;
  --Ga1_e: #232527;
  --Ga2: #2F3134;
  --Ga2_t: #2F3134;
  --Ga3: #46494D;
  --Ga3_t: #46494D;
  --Ga4: #5E6267;
  --Ga4_t: #5E6267;
  --Ga5: #757A81;
  --Ga5_t: #757A81;
  --Ga6: #8B9097;
  --Ga6_t: #8B9097;
  --Ga7: #A2A7AE;
  --Ga7_t: #A2A7AE;
  --Ga8: #B9BDC2;
  --Ga8_t: #B9BDC2;
  --Ga9: #D0D3D7;
  --Ga9_t: #D0D3D7;
  --Ga10: #E7E9EB;
  --Ga10_t: #E7E9EB;
  --Ga11: #242628;
  --Ga12: #1F2022;
  --Wh0: #17181A;
  --Wh0_t: #17181A;
  --Ba0: #000000;
  --Ba0_s: #FFFFFF;
  --Ba0_t: #000000;
  --Pi0: #26161C;
  --Pi1: #2F1A22;
  --Pi2: #472030;
  --Pi3: #76304B;
  --Pi4: #A73E65;
  --Pi5: #D44E7D;
  --Pi5_t: #D44E7D;
  --Pi6: #DC6D94;
  --Pi7: #E38CAA;
  --Pi8: #EBABC1;
  --Pi9: #F2CAD8;
  --Pi10: #FAE9EF;
  --Ma0: #261525;
  --Ma1: #2E182D;
  --Ma2: #461C43;
  --Ma3: #72296C;
  --Ma4: #A13396;
  --Ma5: #CB41BB;
  --Ma6: #D462C7;
  --Ma7: #DD83D3;
  --Ma8: #E6A4DE;
  --Ma9: #EFC5EA;
  --Ma10: #F8E6F6;
  --Re0: #261314;
  --Re1: #2E1617;
  --Re2: #471A1C;
  --Re3: #742728;
  --Re4: #A63131;
  --Re5: #D1403E;
  --Re6: #D9615F;
  --Re7: #E18281;
  --Re8: #E9A3A2;
  --Re9: #F1C5C4;
  --Re10: #F9E5E5;
  --Or0: #28180F;
  --Or1: #301B10;
  --Or2: #4A230E;
  --Or3: #783610;
  --Or4: #A9490D;
  --Or5: #D66011;
  --Or6: #DD7C3A;
  --Or7: #E49764;
  --Or8: #EBB38D;
  --Or9: #F2CEB6;
  --Or10: #FAEADF;
  --Ye0: #2A1E0F;
  --Ye1: #342410;
  --Ye2: #4D300B;
  --Ye3: #7C4C08;
  --Ye4: #AD6800;
  --Ye5: #DB8700;
  --Ye6: #E19C2C;
  --Ye7: #E7B158;
  --Ye8: #EEC584;
  --Ye9: #F4DAB1;
  --Ye10: #FAEFDD;
  --Ly0: #2A2310;
  --Ly1: #332A11;
  --Ly2: #49390C;
  --Ly3: #745909;
  --Ly4: #A27C00;
  --Ly5: #CCA000;
  --Ly6: #D5B02C;
  --Ly7: #DEC158;
  --Ly8: #E7D184;
  --Ly9: #EFE2B1;
  --Ly10: #F8F2DD;
  --Lg0: #19220F;
  --Lg1: #1E2911;
  --Lg2: #273C0E;
  --Lg3: #3C600F;
  --Lg4: #50840B;
  --Lg5: #67A70E;
  --Lg6: #81B638;
  --Lg7: #9CC562;
  --Lg8: #B6D58B;
  --Lg9: #D0E4B5;
  --Lg10: #EBF3DF;
  --Gr0: #102017;
  --Gr1: #11271B;
  --Gr2: #123923;
  --Gr3: #175C34;
  --Gr4: #198042;
  --Gr5: #1FA251;
  --Gr6: #46B26F;
  --Gr7: #6DC28D;
  --Gr8: #93D2AB;
  --Gr9: #BAE2C9;
  --Gr10: #E1F3E8;
  --Cy0: #0C1F20;
  --Cy1: #0D2627;
  --Cy2: #093739;
  --Cy3: #085B5C;
  --Cy4: #028080;
  --Cy5: #03A29F;
  --Cy6: #2FB2B0;
  --Cy7: #5AC2C0;
  --Cy8: #86D2D1;
  --Cy9: #B2E2E1;
  --Cy10: #DDF3F3;
  --Lb0: #0A1B23;
  --Lb1: #0B202A;
  --Lb2: #082D40;
  --Lb3: #064A69;
  --Lb4: #006996;
  --Lb5: #0087BD;
  --Lb6: #2C9CC8;
  --Lb7: #58B1D4;
  --Lb8: #84C5DF;
  --Lb9: #B1DBEB;
  --Lb10: #DDEFF6;
  --Bl0: #151826;
  --Bl1: #181C2F;
  --Bl2: #1F2748;
  --Bl3: #2E3C76;
  --Bl4: #3B53A8;
  --Bl5: #4B6BD4;
  --Bl6: #6A85DB;
  --Bl7: #899EE3;
  --Bl8: #A9B8EA;
  --Bl9: #C8D2F2;
  --Bl10: #E7EBF9;
  --Pu0: #1D1628;
  --Pu1: #221A31;
  --Pu2: #31214C;
  --Pu3: #4E317D;
  --Pu4: #6D3FB1;
  --Pu5: #8C50E0;
  --Pu6: #A06EE5;
  --Pu7: #B48DEB;
  --Pu8: #C8ABF0;
  --Pu9: #DBC9F5;
  --Pu10: #F0E8FB;
  --Br0: #211D1B;
  --Br1: #282320;
  --Br2: #382F2A;
  --Br3: #59483F;
  --Br4: #7A6154;
  --Br5: #9A7C6A;
  --Br6: #AC9384;
  --Br7: #BDA99E;
  --Br8: #CEBFB7;
  --Br9: #E0D7D1;
  --Br10: #F2EEEB;
  --Si0: #212325;
  --Si1: #27292C;
  --Si2: #36393F;
  --Si3: #535962;
  --Si4: #6F7987;
  --Si5: #8C99AA;
  --Si6: #A0ABB9;
  --Si7: #B4BCC7;
  --Si8: #C8CED6;
  --Si9: #DCE0E5;
  --Si10: #F0F2F4
`;const r=i.css`
  --bilibili-pink: #FB7299;
  --bilibili-blue: #23ADE5;
  --bilibili-green: #6dc781;
  --bilibili-gray: #F4F4F4;
  --google-red-100: #f4c7c3;
  --google-red-300: #e67c73;
  --google-red-500: #db4437;
  --google-red-700: #c53929;
  --google-blue-100: #c6dafc;
  --google-blue-300: #7baaf7;
  --google-blue-500: #4285f4;
  --google-blue-600: #1a73e8;
  --google-blue-700: #3367d6;
  --google-green-100: #b7e1cd;
  --google-green-300: #57bb8a;
  --google-green-500: #0f9d58;
  --google-green-700: #0b8043;
  --google-yellow-100: #fce8b2;
  --google-yellow-300: #f7cb4d;
  --google-yellow-500: #f4b400;
  --google-yellow-700: #f09300;
  --google-grey-50: #f8f9fa;
  --google-grey-100: #f5f5f5;
  --google-grey-300: #e0e0e0;
  --google-grey-400: #bdc1c6;
  --google-grey-500: #9e9e9e;
  --google-grey-700: #616161;
  --paper-red-50: #ffebee;
  --paper-red-100: #ffcdd2;
  --paper-red-200: #ef9a9a;
  --paper-red-300: #e57373;
  --paper-red-400: #ef5350;
  --paper-red-500: #f44336;
  --paper-red-600: #e53935;
  --paper-red-700: #d32f2f;
  --paper-red-800: #c62828;
  --paper-red-900: #b71c1c;
  --paper-red-a100: #ff8a80;
  --paper-red-a200: #ff5252;
  --paper-red-a400: #ff1744;
  --paper-red-a700: #d50000;
  --paper-pink-50: #fce4ec;
  --paper-pink-100: #f8bbd0;
  --paper-pink-200: #f48fb1;
  --paper-pink-300: #f06292;
  --paper-pink-400: #ec407a;
  --paper-pink-500: #e91e63;
  --paper-pink-600: #d81b60;
  --paper-pink-700: #c2185b;
  --paper-pink-800: #ad1457;
  --paper-pink-900: #880e4f;
  --paper-pink-a100: #ff80ab;
  --paper-pink-a200: #ff4081;
  --paper-pink-a400: #f50057;
  --paper-pink-a700: #c51162;
  --paper-purple-50: #f3e5f5;
  --paper-purple-100: #e1bee7;
  --paper-purple-200: #ce93d8;
  --paper-purple-300: #ba68c8;
  --paper-purple-400: #ab47bc;
  --paper-purple-500: #9c27b0;
  --paper-purple-600: #8e24aa;
  --paper-purple-700: #7b1fa2;
  --paper-purple-800: #6a1b9a;
  --paper-purple-900: #4a148c;
  --paper-purple-a100: #ea80fc;
  --paper-purple-a200: #e040fb;
  --paper-purple-a400: #d500f9;
  --paper-purple-a700: #aa00ff;
  --paper-deep-purple-50: #ede7f6;
  --paper-deep-purple-100: #d1c4e9;
  --paper-deep-purple-200: #b39ddb;
  --paper-deep-purple-300: #9575cd;
  --paper-deep-purple-400: #7e57c2;
  --paper-deep-purple-500: #673ab7;
  --paper-deep-purple-600: #5e35b1;
  --paper-deep-purple-700: #512da8;
  --paper-deep-purple-800: #4527a0;
  --paper-deep-purple-900: #311b92;
  --paper-deep-purple-a100: #b388ff;
  --paper-deep-purple-a200: #7c4dff;
  --paper-deep-purple-a400: #651fff;
  --paper-deep-purple-a700: #6200ea;
  --paper-indigo-50: #e8eaf6;
  --paper-indigo-100: #c5cae9;
  --paper-indigo-200: #9fa8da;
  --paper-indigo-300: #7986cb;
  --paper-indigo-400: #5c6bc0;
  --paper-indigo-500: #3f51b5;
  --paper-indigo-600: #3949ab;
  --paper-indigo-700: #303f9f;
  --paper-indigo-800: #283593;
  --paper-indigo-900: #1a237e;
  --paper-indigo-a100: #8c9eff;
  --paper-indigo-a200: #536dfe;
  --paper-indigo-a400: #3d5afe;
  --paper-indigo-a700: #304ffe;
  --paper-blue-50: #e3f2fd;
  --paper-blue-100: #bbdefb;
  --paper-blue-200: #90caf9;
  --paper-blue-300: #64b5f6;
  --paper-blue-400: #42a5f5;
  --paper-blue-500: #2196f3;
  --paper-blue-600: #1e88e5;
  --paper-blue-700: #1976d2;
  --paper-blue-800: #1565c0;
  --paper-blue-900: #0d47a1;
  --paper-blue-a100: #82b1ff;
  --paper-blue-a200: #448aff;
  --paper-blue-a400: #2979ff;
  --paper-blue-a700: #2962ff;
  --paper-light-blue-50: #e1f5fe;
  --paper-light-blue-100: #b3e5fc;
  --paper-light-blue-200: #81d4fa;
  --paper-light-blue-300: #4fc3f7;
  --paper-light-blue-400: #29b6f6;
  --paper-light-blue-500: #03a9f4;
  --paper-light-blue-600: #039be5;
  --paper-light-blue-700: #0288d1;
  --paper-light-blue-800: #0277bd;
  --paper-light-blue-900: #01579b;
  --paper-light-blue-a100: #80d8ff;
  --paper-light-blue-a200: #40c4ff;
  --paper-light-blue-a400: #00b0ff;
  --paper-light-blue-a700: #0091ea;
  --paper-cyan-50: #e0f7fa;
  --paper-cyan-100: #b2ebf2;
  --paper-cyan-200: #80deea;
  --paper-cyan-300: #4dd0e1;
  --paper-cyan-400: #26c6da;
  --paper-cyan-500: #00bcd4;
  --paper-cyan-600: #00acc1;
  --paper-cyan-700: #0097a7;
  --paper-cyan-800: #00838f;
  --paper-cyan-900: #006064;
  --paper-cyan-a100: #84ffff;
  --paper-cyan-a200: #18ffff;
  --paper-cyan-a400: #00e5ff;
  --paper-cyan-a700: #00b8d4;
  --paper-teal-50: #e0f2f1;
  --paper-teal-100: #b2dfdb;
  --paper-teal-200: #80cbc4;
  --paper-teal-300: #4db6ac;
  --paper-teal-400: #26a69a;
  --paper-teal-500: #009688;
  --paper-teal-600: #00897b;
  --paper-teal-700: #00796b;
  --paper-teal-800: #00695c;
  --paper-teal-900: #004d40;
  --paper-teal-a100: #a7ffeb;
  --paper-teal-a200: #64ffda;
  --paper-teal-a400: #1de9b6;
  --paper-teal-a700: #00bfa5;
  --paper-green-50: #e8f5e9;
  --paper-green-100: #c8e6c9;
  --paper-green-200: #a5d6a7;
  --paper-green-300: #81c784;
  --paper-green-400: #66bb6a;
  --paper-green-500: #4caf50;
  --paper-green-600: #43a047;
  --paper-green-700: #388e3c;
  --paper-green-800: #2e7d32;
  --paper-green-900: #1b5e20;
  --paper-green-a100: #b9f6ca;
  --paper-green-a200: #69f0ae;
  --paper-green-a400: #00e676;
  --paper-green-a700: #00c853;
  --paper-light-green-50: #f1f8e9;
  --paper-light-green-100: #dcedc8;
  --paper-light-green-200: #c5e1a5;
  --paper-light-green-300: #aed581;
  --paper-light-green-400: #9ccc65;
  --paper-light-green-500: #8bc34a;
  --paper-light-green-600: #7cb342;
  --paper-light-green-700: #689f38;
  --paper-light-green-800: #558b2f;
  --paper-light-green-900: #33691e;
  --paper-light-green-a100: #ccff90;
  --paper-light-green-a200: #b2ff59;
  --paper-light-green-a400: #76ff03;
  --paper-light-green-a700: #64dd17;
  --paper-lime-50: #f9fbe7;
  --paper-lime-100: #f0f4c3;
  --paper-lime-200: #e6ee9c;
  --paper-lime-300: #dce775;
  --paper-lime-400: #d4e157;
  --paper-lime-500: #cddc39;
  --paper-lime-600: #c0ca33;
  --paper-lime-700: #afb42b;
  --paper-lime-800: #9e9d24;
  --paper-lime-900: #827717;
  --paper-lime-a100: #f4ff81;
  --paper-lime-a200: #eeff41;
  --paper-lime-a400: #c6ff00;
  --paper-lime-a700: #aeea00;
  --paper-yellow-50: #fffde7;
  --paper-yellow-100: #fff9c4;
  --paper-yellow-200: #fff59d;
  --paper-yellow-300: #fff176;
  --paper-yellow-400: #ffee58;
  --paper-yellow-500: #ffeb3b;
  --paper-yellow-600: #fdd835;
  --paper-yellow-700: #fbc02d;
  --paper-yellow-800: #f9a825;
  --paper-yellow-900: #f57f17;
  --paper-yellow-a100: #ffff8d;
  --paper-yellow-a200: #ffff00;
  --paper-yellow-a400: #ffea00;
  --paper-yellow-a700: #ffd600;
  --paper-amber-50: #fff8e1;
  --paper-amber-100: #ffecb3;
  --paper-amber-200: #ffe082;
  --paper-amber-300: #ffd54f;
  --paper-amber-400: #ffca28;
  --paper-amber-500: #ffc107;
  --paper-amber-600: #ffb300;
  --paper-amber-700: #ffa000;
  --paper-amber-800: #ff8f00;
  --paper-amber-900: #ff6f00;
  --paper-amber-a100: #ffe57f;
  --paper-amber-a200: #ffd740;
  --paper-amber-a400: #ffc400;
  --paper-amber-a700: #ffab00;
  --paper-orange-50: #fff3e0;
  --paper-orange-100: #ffe0b2;
  --paper-orange-200: #ffcc80;
  --paper-orange-300: #ffb74d;
  --paper-orange-400: #ffa726;
  --paper-orange-500: #ff9800;
  --paper-orange-600: #fb8c00;
  --paper-orange-700: #f57c00;
  --paper-orange-800: #ef6c00;
  --paper-orange-900: #e65100;
  --paper-orange-a100: #ffd180;
  --paper-orange-a200: #ffab40;
  --paper-orange-a400: #ff9100;
  --paper-orange-a700: #ff6500;
  --paper-deep-orange-50: #fbe9e7;
  --paper-deep-orange-100: #ffccbc;
  --paper-deep-orange-200: #ffab91;
  --paper-deep-orange-300: #ff8a65;
  --paper-deep-orange-400: #ff7043;
  --paper-deep-orange-500: #ff5722;
  --paper-deep-orange-600: #f4511e;
  --paper-deep-orange-700: #e64a19;
  --paper-deep-orange-800: #d84315;
  --paper-deep-orange-900: #bf360c;
  --paper-deep-orange-a100: #ff9e80;
  --paper-deep-orange-a200: #ff6e40;
  --paper-deep-orange-a400: #ff3d00;
  --paper-deep-orange-a700: #dd2c00;
  --paper-brown-50: #efebe9;
  --paper-brown-100: #d7ccc8;
  --paper-brown-200: #bcaaa4;
  --paper-brown-300: #a1887f;
  --paper-brown-400: #8d6e63;
  --paper-brown-500: #795548;
  --paper-brown-600: #6d4c41;
  --paper-brown-700: #5d4037;
  --paper-brown-800: #4e342e;
  --paper-brown-900: #3e2723;
  --paper-grey-50: #fafafa;
  --paper-grey-100: #f5f5f5;
  --paper-grey-200: #eeeeee;
  --paper-grey-300: #e0e0e0;
  --paper-grey-400: #bdbdbd;
  --paper-grey-500: #9e9e9e;
  --paper-grey-600: #757575;
  --paper-grey-700: #616161;
  --paper-grey-800: #424242;
  --paper-grey-900: #212121;
  --paper-grey-1000: #141414;
  --paper-blue-grey-50: #eceff1;
  --paper-blue-grey-100: #cfd8dc;
  --paper-blue-grey-200: #b0bec5;
  --paper-blue-grey-300: #90a4ae;
  --paper-blue-grey-400: #78909c;
  --paper-blue-grey-500: #607d8b;
  --paper-blue-grey-600: #546e7a;
  --paper-blue-grey-700: #455a64;
  --paper-blue-grey-800: #37474f;
`},73226:(e,t,a)=>{a.d(t,{rS:()=>i.theme});a(11925);var i=a(32699)},38595:(e,t,a)=>{a.d(t,{O:()=>i});const i={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"}},32699:(e,t,a)=>{a.r(t),a.d(t,{baseFontSize:()=>o,theme:()=>l});var i=a(11925);const r=1e3,n=204,o=12,l={color:i.$_,logoHeight:50,bodyMinWidth:r,headerHeight:0,sidebarWidth:n,mainWidth:r-n,baseFontSize:o,fontFamily:i.I8,fontSize:i.JB,rem:i.hO,textOverflow:i._X,transition:i.eR,boxShadow:i.Wn,marginTrim:i.O3,hideScrollbar:i.Yh,opacity:i.Oh}},11925:(e,t,a)=>{a.d(t,{$_:()=>g,I8:()=>d,JB:()=>h,O3:()=>m,Oh:()=>s.O,Wn:()=>u,Yh:()=>y,_X:()=>b,eR:()=>f,hO:()=>c});var i=a(41609),r=a.n(i),n=a(60677),o=a(6767),l=a.n(o),p=a(55928),s=a(38595);const c=(e,t=16)=>e/t+"rem",d=(e="")=>n.css`
    font-family: ${r()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,h=(e=16)=>n.css`
    font-size: ${c(e)};
`,b=(e=1)=>1===e?n.css`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:n.css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,g=(e,t=1)=>p.I[e]?l()(p.I[e]).alpha(t).rgb().string():void 0,u=([...e])=>{const t=1,a="#000000",i=.5;let r="";for(let n in e){const{h:o,v:p,blur:s,spread:c,color:d=l()(a).alpha(i).rgb().string(),inset:h=""}=e[n];r+=`${o*t}px ${p*t}px ${5*s}px ${5*c}px ${d} ${h},`}return n.css`
        box-shadow: ${r};
    `},f=({target:e="all",duration:t=.3})=>n.css`transition: ${e} ${t}s;`,m=({direction:e="h",value:t=0})=>n.css`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`,y=n.css`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},16814:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},13429:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},10804:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},37873:function(e,t,a){var i=this&&this.__createBinding||(Object.create?function(e,t,a,i){void 0===i&&(i=a);var r=Object.getOwnPropertyDescriptor(t,a);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,i,r)}:function(e,t,a,i){void 0===i&&(i=a),e[i]=t[a]}),r=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||i(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),r(a(10804),t),r(a(16814),t),r(a(13429),t)},72912:(e,t)=>{}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=e,(()=>{var e=[];a.O=(t,i,r,n)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,r,n]=e[c],l=!0,p=0;p<i.length;p++)(!1&n||o>=n)&&Object.keys(a.O).every(e=>a.O[e](i[p]))?i.splice(p--,1):(l=!1,n<o&&(o=n));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,r,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((t,i)=>(a.f[i](e,t),t),[]))})(),(()=>{a.u=e=>({27:"js/dynamicModule/recommend",30:"js/dynamicModule/AnnouncementContent",68:"js/dynamicModule/comprehensive",191:"js/dynamicModule/live",266:"js/dynamicModule/animeTimeTable",317:"js/dynamicModule/watchLater",372:"js/dynamicModule/specialAttention",491:"js/dynamicModule/manga",497:"js/dynamicModule/home",594:"js/dynamicModule/creator",632:"js/dynamicModule/notifyNeedLogin",654:"js/dynamicModule/history",663:"js/dynamicModule/favlist",671:"js/dynamicModule/OwnerArea",867:"js/dynamicModule/AccountListContent",891:"js/dynamicModule/recentlyPosted"}[e]+".bundle.js")})(),(()=>{a.miniCssF=e=>{}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="bilibilihelper2:";a.l=(i,r,n,o)=>{if(e[i])e[i].push(r);else{var l,p;if(void 0!==n)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+n){l=d;break}}l||(p=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=i),e[i]=[r];var h=(t,a)=>{l.onerror=l.onload=null,clearTimeout(b);var r=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach(e=>e(a)),t)return t(a)},b=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),p&&document.head.appendChild(l)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.j=174})(),(()=>{a.p="../"})(),(()=>{var e={174:0};a.f.j=(t,i)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise((a,i)=>r=e[t]=[a,i]);i.push(r[2]=n);var o=a.p+a.u(t),l=new Error,p=i=>{if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}};a.l(o,p,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,[o,l,p]=i,s=0;if(o.some(t=>0!==e[t])){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(p)var c=p(a)}for(t&&t(i);s<o.length;s++)n=o[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},i=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),(()=>{a.nc=void 0})();var i=a.O(void 0,[196,133,468],()=>a(20904));i=a.O(i)})();