(()=>{"use strict";var e={63334:(e,t,n)=>{n.d(t,{xk:()=>v,yT:()=>C});var a=n(26243),i=n.n(a),o=n(62680),s=n.n(o),l=n(95366),r=n.n(l),c=n(6919),h=n.n(c),p=n(93364),d=n.n(p),g=n(26771),u=n.n(g),m=n(33385);function b(e,t){var n=i()(e);if(s()){var a=s()(e);t&&(a=a.filter((function(t){return r()(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):h()?d()(e,h()(n)):b(Object(n)).forEach((function(t){u()(e,t,r()(n,t))}))}return e}const v={ALL:268435455,REPOST:1,PIC:2,WORD:4,VIDEO:8,DRAMA:32,ARTICLE:64,MUSIC:256,BANGUMI:512,NONE:1024,H5_SHARE:2048,COMIC_SHARE:2049,PGC_BANGUMI:4097,FILM:4098,TV:4099,GUOCHUANG:4100,DOCUMENTARY:4101,LIVE_ROOM:4200,LIVE:4201,MEDIA_LIST:4300,CHEESE_SERIES:4302,CHEESE_UPDATE:4303,HOT:1e3,LIVE_PUSH:4308,COLLECTION:4310,SUBSCRIPTION:4311,QUICK:1001},C=(v.REPOST,v.PIC,v.WORD,v.VIDEO,v.DRAMA,v.ARTICLE,v.MUSIC,v.BANGUMI,v.H5_SHARE,v.COMIC_SHARE,v.PGC_BANGUMI,v.FILM,v.TV,v.GUOCHUANG,v.DOCUMENTARY,v.LIVE_ROOM,v.LIVE,v.MEDIA_LIST,v.CHEESE_SERIES,v.CHEESE_UPDATE,v.HOT,v.LIVE_PUSH,v.COLLECTION,v.SUBSCRIPTION,[{title:"\u5168\u90e8\uff08\u5305\u542b\u8f6c\u53d1\uff09",types:[v.ALL]},{title:"\u56fe\u6587",types:[v.PIC,v.WORD]},{title:"UP\u6295\u7a3f\u89c6\u9891",types:[v.VIDEO]},{title:"\u6536\u85cf\u5939\uff0c\u5408\u96c6",types:[v.MEDIA_LIST,v.COLLECTION]},{title:"\u4e13\u680f",types:[v.ARTICLE]},{title:"\u76f4\u64ad",types:[v.LIVE_ROOM,v.LIVE,v.LIVE_PUSH,v.SUBSCRIPTION]},{title:"\u97f3\u4e50",types:[v.MUSIC]},{title:"\u65e5\u756a\uff0c\u56fd\u521b",types:[v.BANGUMI,v.PGC_BANGUMI,v.GUOCHUANG]},{title:"\u6f2b\u753b",types:[v.COMIC_SHARE]},{title:"\u8bfe\u7a0b",types:[v.CHEESE_SERIES,v.CHEESE_UPDATE]},{title:"\u7535\u5f71",types:[v.FILM]},{title:"\u7535\u89c6\u7efc\u827a",types:[v.TV]},{title:"\u7eaa\u5f55\u7247",types:[v.DOCUMENTARY]},{title:"\u5176\u4ed6\uff08\u8bdd\u9898\uff0c\u620f\u5267\uff0c\u5df2\u88ab\u5220\u9664\u5185\u5bb9\uff09",types:[v.H5_SHARE,v.COMIC_SHARE,v.DRAMA,v.NONE]}]);f({ALL:268435455,PIC:2,VIDEO:8,ARTICLE:64,BANGUMI:512},v)},15364:(e,t,n)=>{n.d(t,{CUSTOM_WHISPER_MESSAGE:()=>l,QUALITY_NAME_LIST:()=>s.QUALITY_NAME_LIST,SUPER_VIP_USER_IDENTITIES_KEY_LIST:()=>o,USER_IDENTITIES_NAME_MAP:()=>a,VIP_USER_IDENTITIES_KEY_LIST:()=>i});const a={superAdmin:"\u732b\u56fd\u8bbe\u8ba1\u5e08",admin:"\u732b\u56fd\u57ce\u7ba1",catForever:"\u732b\u56fd\u5927\u62a4\u6cd5",catVIPSuper:"\u52a9\u624b\u732b\u57f9\u80b2\u5e08",catVIP:"\u52a9\u624b\u732b\u89c2\u5bdf\u5458",catWatcher:"\u52a9\u624b\u732b\u77ad\u671b\u8005",catVIPHonor:"\u732b\u56fd\u8363\u8a89\u5e02\u6c11",catAirborneCommander:"\u7a7a\u964d\u6307\u6325\u5b98",catAirbornePilot:"\u55b5\u8425\u98de\u884c\u5458"},i=["superAdmin","admin","catForever","catVIP"],o=["superAdmin","admin","catForever"];var s=n(72912);const l={FREE_NUMBER:3,MAX_NUMBER:15,FREE_MAX_LENGTH:30,VIP_MAX_LENGTH:500};n(37873)},29887:(e,t,n)=>{n.r(t),n.d(t,{Position:()=>l});var a=n(33385),i=n(25733),o=n.n(i);class s{constructor(...e){(0,a.Z)(this,"x",void 0),(0,a.Z)(this,"y",void 0),(0,a.Z)(this,"__valid",!1),(0,a.Z)(this,"__needUpdate",!0),(0,a.Z)(this,"set",(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof s){const{x:t,y:n}=e[0];this.set(t,n)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this}),(0,a.Z)(this,"setX",e=>(this.x=e,this.__needUpdate=!0,this)),(0,a.Z)(this,"setY",e=>(this.y=e,this.__needUpdate=!0,this)),(0,a.Z)(this,"add",e=>(this.x+=e.x,this.y+=e.y,this)),(0,a.Z)(this,"addX",e=>(this.x+=e,this)),(0,a.Z)(this,"addY",e=>(this.y+=e,this)),(0,a.Z)(this,"sub",e=>(this.x-=e.x,this.y-=e.y,this)),(0,a.Z)(this,"subX",e=>this.addX(-e)),(0,a.Z)(this,"subY",e=>this.addY(-e)),(0,a.Z)(this,"multiply",e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this)),(0,a.Z)(this,"multiplyX",e=>(0===e?this.x=1/0:this.x*=e,this)),(0,a.Z)(this,"multiplyY",e=>(0===e?this.y=1/0:this.y*=e,this)),(0,a.Z)(this,"divide",e=>0===e?this.set(1/0,1/0):this.multiply(1/e)),(0,a.Z)(this,"divideX",e=>this.multiplyX(1/e)),(0,a.Z)(this,"divideY",e=>this.multiplyY(1/e)),(0,a.Z)(this,"dot",e=>this.x*e.x+this.y+e.y),(0,a.Z)(this,"equal",(...e)=>{if("number"===typeof e[0]&&"number"===typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof s){const{x:t,y:n}=e[0];return this.equal(t,n)}return!1}),(0,a.Z)(this,"normalize",()=>{const e=Math.sqrt(this.x**2+this.y**2);return this.divide(e)}),(0,a.Z)(this,"negtiveX",()=>(this.x*=-1,this)),(0,a.Z)(this,"negtiveY",()=>(this.y*=-1,this)),(0,a.Z)(this,"negtive",()=>this.negtiveX().negtiveY()),(0,a.Z)(this,"round",()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this)),(0,a.Z)(this,"roundX",()=>(this.x=Math.round(this.x),this)),(0,a.Z)(this,"roundY",()=>(this.y=Math.round(this.y),this)),(0,a.Z)(this,"floor",()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this)),(0,a.Z)(this,"floorX",()=>(this.x=Math.floor(this.x),this)),(0,a.Z)(this,"floorY",()=>(this.y=Math.floor(this.y),this)),(0,a.Z)(this,"ceil",()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this)),(0,a.Z)(this,"ceilX",()=>(this.x=Math.ceil(this.x),this)),(0,a.Z)(this,"ceilY",()=>(this.y=Math.ceil(this.y),this)),(0,a.Z)(this,"trunc",()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this)),(0,a.Z)(this,"truncX",()=>(this.x=Math.trunc(this.x),this)),(0,a.Z)(this,"truncY",()=>(this.y=Math.trunc(this.y),this)),(0,a.Z)(this,"clone",()=>new this.constructor(this.x,this.y)),(0,a.Z)(this,"toArray",()=>[this.x,this.y]),(0,a.Z)(this,"toObject",()=>({x:this.x,y:this.y})),(0,a.Z)(this,"toString",(e="x",t="y")=>`${e}${this.x}${t}${this.y}`),this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=o()(this.x)&&o()(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}class l extends s{constructor(...e){super(...e)}}},55872:(e,t,n)=>{var a=n(73473),i=n.n(a),o=n(67294),s=n(73935),l=n(44943),r=n(47622),c=n(33385),h=n(88686),p=n(60677);const d=p.css`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`;var g=n(11925),u=n(71338);const m=p.createGlobalStyle`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${(0,g.I8)()};
    ${u.$};
    ${d};
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
`;var b=n(73727),f=n(26243),v=n.n(f),C=n(62680),E=n.n(C),S=n(95366),y=n.n(S),w=n(6919),x=n.n(w),k=n(93364),M=n.n(k),O=n(26771),A=n.n(O),I=n(76873);function L(e,t){var n=v()(e);if(E()){var a=E()(e);t&&(a=a.filter((function(t){return y()(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):x()?M()(e,x()(n)):L(Object(n)).forEach((function(t){A()(e,t,y()(n,t))}))}return e}const B=p["default"].div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  flex-shrink: 0;
  padding: 10px 0;
  background-color: var(--bilibili-pink);
  color: #fff;
  overflow: hidden;

  .inner {
    display: flex;
    align-items: center;
    //max-width: 800px;
    margin: 0 auto;
    padding: 0 12px;

    .bilibili-helper-2-icon-cat {
      float: left;
      color: #fff;
    }

    header {
      margin-left: 8px;

      h1 {
        margin: -6px 0 0;
        text-indent: -1px;

        .bilibili-helper-2-icon-bilibilihelper {
          line-height: 46px;
          font-weight: normal;
        }
      }

      p {
        display: flex;
        margin: 0;

        a {
          margin-left: 2px;
        }

        .version {
          //margin-left: auto;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;class D extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{currentVersionInfo:null})}componentDidMount(){chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:P({},e)})})}render(){const{currentVersionInfo:e}=this.state;return o.createElement(B,null,o.createElement("div",{className:"inner"},o.createElement(I.Icon,{icon:"cat-tm",size:55}),o.createElement("header",null,o.createElement("h1",null,o.createElement(I.Icon,{icon:"bilibilihelper",size:32})),o.createElement("p",null,o.createElement("span",{className:"version"},"version "+r.i8)))))}}var F=n(48903),N=n(55168),R=n(87927);const T=p["default"].h2`
  margin: 0 0 12px;

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    color: #333;
  }

  p {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: normal;
    color: #333;
  }
`;class _ extends o.Component{constructor(e){super(e)}render(){const{title:e,description:t}=this.props;return o.createElement(T,null,e?o.createElement("div",{className:"title"},e):null,t?o.createElement("p",null,t):null)}}const Z=p["default"].div`
  margin-bottom: 32px;

  & > .header {
    position: sticky;
    top: 0;
    display: flex;
    margin-bottom: 16px;
    padding: 0 0 0 8px;
    width: 666px;
    //border-bottom: 1px solid #bbb;
    border-radius: 3px;
    background-color: #f3f3f3;
    z-index: 2;

    .title {
      font-size: 16px;

      h2 {
        margin: 0;
        padding: 4px 0 4px;
        font-size: 16px;
        color: #333;
      }

      p {
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: normal;
        color: #333;
      }
    }

    .toolbar {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: 12px;
      padding: 4px 0;
    }
  }

  .content {
    &::after {
      transition: visibility 0s, z-index 0s, opacity .3s;
    }

    &.toggle-off {
      filter: grayscale(1);
      pointer-events: none;
      user-select: none;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        opacity: 0.5;
        visibility: visible;
        z-index: 1;
        cursor: not-allowed;
      }
    }
  }

`;class V extends o.Component{constructor(e){super(e)}render(){const{active:e,toolbar:t}=this.props;return o.createElement(Z,null,o.createElement("div",{className:"header"},o.createElement("div",{className:"title"},o.createElement("h2",null,this.props.title),this.props.description?o.createElement("p",null,this.props.description):null),o.createElement("div",{className:"toolbar"},t)),o.createElement("div",{className:["content",void 0===e||e?null:"toggle-off"].join(" ")},this.props.children))}}var U=n(47874);const z=o.createContext({}),W=p["default"].div`
  margin-left: 12px;
  padding-left: 12px;
  min-width: 200px;
  border-left: 1px dashed var(--bilibili-pink);

  .description {
    margin-top: 0;
    font-size: 14px;
  }

  b {
    display: inline-block;
    padding: 0 4px;
    color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content;
    vertical-align: baseline;
    color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-bilibilihelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class H extends o.Component{constructor(e){super(e)}render(){const{title:e,description:t,children:n}=this.props;return o.createElement(W,null,e&&o.createElement("h3",null,e),t||n?o.createElement("div",{className:"description"},t||n):null)}}const j=["active","title","description","children","toolbar","rows","columns","helperArea","hasLogin","isVIP","needVIP"],G=(0,F.isFireFox)(),Y=p["default"].section`
  position: relative;
  display: flex;
  margin-left: 16px;
  margin-bottom: 16px;

  .header {
    display: flex;
    margin: 0 0 12px 0;
    padding: 0 0 6px;
    border-bottom: 1px solid #eee;

    &:empty {
      padding: 0;
      border-bottom: none;
    }

    &.no-border {
      margin-bottom: 0;
      border-bottom: none;
    }

    p {
      margin: 0;
    }

    .title {
      flex-grow: 1;
      font-size: 16px;
    }

    .description {
      font-size: 12px;
      color: var(--paper-grey-500);
    }

    .toolbar {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: 4px;
    }
  }

  & > .content {
    flex-shrink: 0;
    position: relative;
    width: 650px;

    & > .body {
      position: relative;
      display: grid;
      transition: filter .3s;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        cursor: not-allowed;
        visibility: hidden;
        z-index: -1;
        transition: visibility 0s .3s, z-index 0s .3s, opacity .3s;
      }

      & > .list-item {
        margin-left: 16px;
        border-top: none;
      }
    }
  }

  & > .content > .body.toggle-off {
    filter: grayscale(1);
    pointer-events: none;
    user-select: none;

    &::after {
      opacity: 0.5;
      visibility: visible;
      transition: visibility 0s, z-index 0s, opacity .3s;
      z-index: 1;
    }
  }
`,K=p["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
  padding: 0 20px;
  width: calc(100% - 24px);
  height: calc(100% + 10px);
  border-radius: 3px;
  background-color: rgb(244 244 244 / 70%);
  z-index: 1;

  .button {
    color: var(--bilibili-gray);

    .button-view {
      padding: 0 32px;
      background-color: var(--bilibili-blue);
    }
  }
`;class Q extends o.Component{constructor(e){super(e)}renderButton(){const{hasLogin:e,isVIP:t,needVIP:n}=this.props;if("boolean"===typeof e){if(!e){const e=G?this.context.handleOnClickShowFirefoxModal:this.context.handleOnClickShowLoginModal;return o.createElement(K,null,o.createElement(h.Button,{onClick:e},n?"\u4f1a\u5458\u529f\u80fd\uff0c":"","\u70b9\u51fb\u767b\u5f55\u540e\u4f7f\u7528"))}if("boolean"===typeof t&&n&&!t)return G?o.createElement(K,null,o.createElement(h.Button,null,"\u706b\u72d0\u6d4f\u89c8\u5668\u6682\u4e0d\u63d0\u4f9b\u4ed8\u8d39\u529f\u80fd")):o.createElement(K,null,o.createElement(h.Button,{onClick:this.context.handleOnClickShowPaymentModal},"\u70b9\u51fb\u5f00\u901a\u52a9\u624b\u4f1a\u5458\u540e\u4f7f\u7528"))}return null}render(){const e=this.props,{active:t,title:n,description:a,children:i,toolbar:s,rows:l,columns:r,helperArea:c,hasLogin:h,isVIP:p,needVIP:d}=e,g=(0,U.Z)(e,j);return o.createElement(Y,g,o.createElement("div",{className:"content"},o.createElement("div",{className:["header",i?null:"no-border"].filter(Boolean).join(" ")},n||a?o.createElement("div",{className:"title"},n?o.createElement("p",{className:"title"},n):null,a?o.createElement("p",{className:"description"},a):null):null,s?o.createElement("div",{className:"toolbar"},s):null),i&&o.createElement("div",{className:["body",void 0===t||t?null:"toggle-off"].join(" "),style:{gridTemplateRows:l?`repeat(${l}, 1fr)`:"auto",gridTemplateColumns:`repeat(${r}, 1fr)`}},i),this.renderButton()),c?o.createElement(H,{className:"helper-area",style:{marginTop:(a?10:0)+"px"}},c):null)}}(0,c.Z)(Q,"contextType",z),(0,c.Z)(Q,"defaultProps",{rows:0,columns:1,needVIP:!1});const $=p["default"].section`
  //max-width: 700px;
  min-width: 500px;
  section {
    .radio-button-wrapper {
      margin-bottom: 8px;
      width: fit-content;
    }
    .link {
      margin: 0 2px;
      padding: 0 2px;
      color: var(--bilibili-blue);
    }
  }
`,q=(0,p["default"])(h.Modal)`
  .introduction {
    text-align: center;

    .bilibili-helper-2-icon-bilibili {
      padding: 0 4px;
      width: fit-content;
      vertical-align: baseline;
      color: var(--bilibili-pink);
    }

    .bilibili-helper-2-icon-bilibilihelper {
      padding: 0 4px;
      width: fit-content;
      color: var(--bilibili-pink);
    }
  }

  .description {
    font-size: 12px;
    color: var(--bilibili-pink);
    text-align: center;

    a {
      color: var(--bilibili-blue);
      cursor: pointer;
    }
  }
`,X=p["default"].div`
  margin: 30px auto;
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

    //.bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-bilibilihelper {
    //  color: var(--bilibili-gray);
    //}
  }
`;class J extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{loading:!1,loginModalShow:!0,hasBilibiliAccountLogin:!1}),(0,c.Z)(this,"handleOnClickLogin",()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickLogin(e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})}))}),(0,c.Z)(this,"handleOnClickRegister",()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickRegister(e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})}))}),(0,c.Z)(this,"handleOnClickMask",()=>{this.setState({loginModalShow:!1})}),(0,c.Z)(this,"handleOnLoginOtherBilibiliAccount",()=>{this.context.handleOnLoginOtherBilibiliAccount().then(()=>{this.setState({hasBilibiliAccountLogin:!0})})}),(0,c.Z)(this,"handleOnClickGoToOverview",()=>{location.href=chrome.runtime.getURL("/html/config.html#/"),this.context.handleOnClickShowLoginModal()})}render(){const{hasLogin:e}=this.context,{children:t}=this.props,{loginModalShow:n}=this.state;return o.createElement(q,{open:this.props.show&&n&&!e,onClickMask:this.handleOnClickMask,className:"need-login-mask"},t&&o.createElement("p",{className:"introduction"},t),o.createElement(X,null,o.createElement(h.Button,{className:"primary",onClick:this.handleOnClickGoToOverview},o.createElement("div",null,"\u524d\u5f80\u767b\u5f55"))),o.createElement("footer",{className:"description"},o.createElement("span",null,o.createElement("b",{style:{marginRight:4}},"\u203b"),"\u70b9\u51fb\u767b\u5f55\u5373\u8868\u793a\u60a8\u5df2\u540c\u610f",o.createElement("a",{href:"https://bilibilihelper.com/licence.html",target:"_blank",rel:"noreferrer"},"\u300a\u4f7f\u7528\u6761\u6b3e\u300b"),"\u548c",o.createElement("a",{href:"https://bilibilihelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"\u300a\u9690\u79c1\u534f\u8bae\u300b"))))}}(0,c.Z)(J,"contextType",z);const ee=p["default"].div`

`;class te extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{removeSelectionLimit:!1}),(0,c.Z)(this,"handleOnToggleRemoveSelectionLimit",()=>{chrome.runtime.sendMessage({target:"removeSelectionLimit",event:"setSetting",on:!this.state.removeSelectionLimit},()=>{this.context.uploadSettings("removeSelectionLimit"),this.setState({removeSelectionLimit:!this.state.removeSelectionLimit})})}),(0,c.Z)(this,"handleOnToggleCvImageDownload",()=>{chrome.runtime.sendMessage({target:"cvImageDownload",event:"setSetting",on:!this.state.cvImageDownload},()=>{this.context.uploadSettings("cvImageDownload"),this.setState({cvImageDownload:!this.state.cvImageDownload})})})}componentDidMount(){chrome.runtime.sendMessage({target:"removeSelectionLimit",event:"getSetting"},({on:e})=>{this.setState({removeSelectionLimit:e})}),chrome.runtime.sendMessage({target:"cvImageDownload",event:"getSetting"},({on:e})=>{this.setState({cvImageDownload:e})})}render(){return o.createElement(ee,null,o.createElement(_,{title:"\u4e13\u680f\u9875\u9762\u8bbe\u7f6e"}),o.createElement(Q,{title:"\u89e3\u9664\u5185\u5bb9\u9009\u62e9\u9650\u5236",toolbar:o.createElement(R.tc,{onClick:this.handleOnToggleRemoveSelectionLimit,on:this.state.removeSelectionLimit}),active:this.state.removeSelectionLimit}),o.createElement(Q,{title:"\u56fe\u7247\u4e0b\u8f7d",toolbar:o.createElement(R.tc,{onClick:this.handleOnToggleCvImageDownload,on:this.state.cvImageDownload}),active:this.state.cvImageDownload}))}}(0,c.Z)(te,"contextType",z);const ne=(0,N.EN)(te);var ae=n(15364),ie=n(30381),oe=n.n(ie),se=n(58971),le=n.n(se),re=n(96326);const ce=(0,F.isFireFox)(),he=(0,p["default"])($)`
  .modal {
    overflow: hidden;
  }

  .show-announcement-btn {
    margin-left: 20px;
    vertical-align: bottom;
    font-size: 14px;

    .button-view {
      padding: 0 10px;
    }
  }

  .reset-list {
    display: flex;
    flex-direction: column;

    .button {
      margin: 12px;
      padding: 0 12px;
      max-width: 200px;
      min-width: fit-content;
    }
  }
`,pe=(p["default"].div`
  margin-top: 24px;

  .report-btn {
    margin: 0 4px;
  }
`,p["default"].div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: var(--google-grey-50);
  border-radius: 4px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11);

  .avatar-wrapper {
    position: relative;

    .avatar {
      margin-right: 12px;
      width: 52px;
      height: 52px;
      border-radius: 50px;
    }
  }

  .info {
    h4, p {
      margin: 0;
    }

    h4 {
      margin-bottom: 4px;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .expire-date {
      margin-left: 12px;
      border: 1px solid var(--bilibili-pink);
      border-radius: 50px;
      background-color: #fff;

      .bilibili-helper-2-icon-cat-paw {
        width: 20px;
        text-align: center;
        transform: rotate(15deg) scale(0.8) translate(5px, -6px);
        margin: 0 9px 0 1px;
      }

      .bilibili-helper-vip {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        vertical-align: 2px;
        margin-right: 10px;
      }
    }
  }

  .action-btn-group {
    margin: 0 8px 0 auto;

    .button {
      margin-left: 8px;
      font-size: 12px;

      &:first-of-type {
        margin-left: 0;
      }
    }

    .login-btn {
      width: 70px;
    }
  }
`),de=(0,p["default"])(Q)`
  .account {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .face {
      margin-right: 12px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    }

    .info {
      .username {
        font-size: 14px;
      }

      .sign {
        margin: 0;
      }
    }

    .unbind-button {
      margin-left: auto;
      padding: 0 10px;
    }
  }

  .empty-list {
    font-size: 16px;
  }
`,ge=p["default"].div`
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 8px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: var(--google-grey-50);
  cursor: pointer;
  transition: border-color .2s;

  &.selected {
    border-color: var(--bilibili-blue);

    &::after {
      content: '';
      position: absolute;
      right: 6px;
      bottom: 2px;
      display: block;
      width: 4px;
      height: 4px;
      background-color: var(--bilibili-blue);
      box-shadow: 4px 0 0 0 var(--bilibili-blue), 8px 0 0 0 var(--bilibili-blue),0px -4px 0 0 var(--bilibili-blue);
      transform: rotate(-45deg) scale(0.7);
    }
  }

  .cat-type {
    margin: 6px 0 0;
  }
`,ue=(0,p["default"])(re.w)`
`,me=le().get("autoSync2Cloud");class be extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{loading:!1,isLoginBilibiliAccount:!1,catType:"default",catTypeList:[],autoClose:!1,showWhenFullWiden:!1,showInInjectPlayer:!1,autoSync2Cloud:void 0===me||me,accountList:[]}),(0,c.Z)(this,"handleOnClickUploadSettings",()=>{this.state.loading||this.setState({loading:!0},()=>{this.context.uploadSettings().then(e=>{e&&I.Message.info("\u914d\u7f6e\u4e0a\u4f20\u6210\u529f"),setTimeout(()=>this.setState({loading:!1}),3e3)})})}),(0,c.Z)(this,"handleOnClickSyncSettings",()=>{this.state.loading||this.setState({loading:!0},()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"downloadSettings"},e=>{e&&I.Message.info("\u914d\u7f6e\u540c\u6b65\u6210\u529f"),setTimeout(()=>this.setState({loading:!1}),3e3)})})}),(0,c.Z)(this,"handleOnSelectCatType",e=>{e!==this.state.catType&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",catType:e},()=>{this.context.uploadSettings("cat"),this.setState({catType:e})})}),(0,c.Z)(this,"handleOnToggleHideCatWhenFullWiden",e=>{e!==this.state.showWhenFullWiden&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showWhenFullWiden:e},()=>{this.context.uploadSettings("cat"),this.setState({showWhenFullWiden:e})})}),(0,c.Z)(this,"handleOnToggleShowInInjectPlayer",e=>{e!==this.state.showInInjectPlayer&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showInInjectPlayer:e},()=>{this.context.uploadSettings("cat"),this.setState({showInInjectPlayer:e})})}),(0,c.Z)(this,"handleOnCatAutoClose",()=>{chrome.runtime.sendMessage({target:"cat",event:"setSetting",autoClose:!this.state.autoClose},()=>{this.context.uploadSettings("cat"),this.setState({autoClose:!this.state.autoClose})})}),(0,c.Z)(this,"handleOnToggleSyncMode",()=>{le().set("autoSync2Cloud",!this.state.autoSync2Cloud),this.setState({autoSync2Cloud:!this.state.autoSync2Cloud},()=>{location.reload()})}),(0,c.Z)(this,"handleOnGotoReport",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})}),(0,c.Z)(this,"handleOnClickAddAccount",()=>{const{bilibiliMessageOn:e}=this.state,{bhAccount:t,hasLogin:n,handleOnClickShowLoginModal:a,sendPaymentMessage:i}=this.context;return n?e||t&&t.isVIP?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bind_button"}),void chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"bind"})):i():a()}),(0,c.Z)(this,"handleOnUnbind",(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_unbind_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"unbind",uid:t},()=>{this.updateList()})}),(0,c.Z)(this,"handleOnResetCatPosition",e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_reset_cat_position"}),chrome.runtime.sendMessage({target:"cat",event:"resetPosition",type:e},e=>{I.Message.info("\u91cd\u7f6e"+(e?"\u6210\u529f":"\u5931\u8d25"))})}),(0,c.Z)(this,"updateList",()=>{chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},e=>{e&&this.setState({accountList:e})})})}componentDidMount(){chrome.runtime.onMessage.addListener((e,t,n)=>{const{action:a}=e;return"boundAccount"===a&&this.updateList(),!0}),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},e=>{this.setState({catType:e.catType,showWhenFullWiden:e.showWhenFullWiden,showInInjectPlayer:e.showInInjectPlayer,autoClose:e.autoClose})}),chrome.runtime.sendMessage({target:"cat",event:"getTypeList"},e=>{this.setState({catTypeList:e||[]})}),this.updateList()}render(){const{loading:e,catType:t,catTypeList:n,showWhenFullWiden:a,showInInjectPlayer:i,autoClose:s,autoSync2Cloud:l,accountList:r}=this.state,{hasLogin:c,bilibiliAccount:p,bhAccount:d,downloadingSettings:g,handleOnClickChangePassword:u,handleOnClickShowSignOutModal:m,handleOnClickShowLoginModal:b,handleOnClickShowAnnouncementModal:f,handleOnClickShowPaymentModal:v,handleOnClickShowBindEmailModal:C,handleOnClickShowFirefoxModal:E,isVIP:S,isSuperVIP:y}=this.context,w=p&&c?p.face:chrome.runtime.getURL("statics/images/bilibili-helper-cat-u-avatar-256.png");return o.createElement(he,null,o.createElement(_,{title:o.createElement(o.Fragment,null,"\u6b22\u8fce\u4f7f\u7528\u300c\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u300d\u8bbe\u7f6e\u9875\u9762",o.createElement(I.Button,{className:"show-announcement-btn primary",onClick:f},"\u5f00\u653e\u6d4b\u8bd5\u516c\u544a")),description:"\u4e00\u6b3e\u975e\u5b98\u65b9\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f"}),o.createElement(V,{title:"\u8d26\u53f7\u8bbe\u7f6e"},o.createElement(Q,{helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u52a9\u624b\u8d26\u53f7\u4f1a\u968f\u7740B\u7ad9\u8d26\u53f7\u767b\u51fa\u800c\u9000\u51fa"),o.createElement("br",null),o.createElement("br",null),o.createElement("b",null,"\u9f20\u6807\u79fb\u52a8\u81f3\u4f1a\u5458\u79f0\u53f7\u4e0a\u505c\u7559\u6570\u79d2\u53ef\u67e5\u770b\u4f1a\u5458\u5230\u671f\u65f6\u95f4"),o.createElement("br",null),o.createElement("br",null),"\u8bbe\u7f6e\u529f\u80fd\u65f6\uff0c\u52a9\u624b\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5e76\u4e0a\u4f20\u60a8\u7684\u8bbe\u7f6e\u7ed3\u679c",o.createElement("br",null),"\u6240\u4ee5\u8bbe\u7f6e\u5b8c\u540e\u5c31\u53ef\u4ee5\u7acb\u523b\u5173\u95ed\u8bbe\u7f6e\u9875\u9762")},o.createElement(pe,null,o.createElement("div",{className:"avatar-wrapper"},o.createElement(I.Image,{className:"avatar",url:w,duration:0})),o.createElement("div",{className:"info"},o.createElement("h4",{className:"username"},p&&c?p.username:"\u5c1a\u672a\u767b\u5f55",d&&c&&(d.isVIP||d.isSuperVIP)&&d.identities.length>0?o.createElement("span",{className:"expire-date"},o.createElement(h.Icon,{icon:"cat-paw",size:16}),d.identities.map(e=>{const t=ae.USER_IDENTITIES_NAME_MAP[e.name];return t?o.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:oe()(e.to).format("YYYY-MM-DD")+" \u5230\u671f"},t):null}).filter(Boolean)):null),o.createElement("p",null,p&&c?g?"\u6b63\u5728\u540c\u6b65\u914d\u7f6e":l?"\u5df2\u542f\u7528\u8bbe\u7f6e\u540c\u6b65\u4e0e\u4e2a\u6027\u5316\u670d\u52a1":"":"\u767b\u5f55\u89e3\u9501\u66f4\u591a\u529f\u80fd\uff0c\u5e76\u5141\u8bb8\u8de8\u8bbe\u5907\u540c\u6b65\u60a8\u7684\u6570\u636e")),o.createElement("div",{className:"action-btn-group"},c?o.createElement(o.Fragment,null):null,c?o.createElement(o.Fragment,null,ce?null:null,d&&!d.email?o.createElement(I.Button,{className:"change-password-btn border",onClick:C},"\u7ed1\u5b9a\u90ae\u7bb1"):null,o.createElement(I.Button,{className:"change-password-btn border",onClick:u},"\u4fee\u6539\u5bc6\u7801"),o.createElement(I.Button,{className:"login-btn border",onClick:m},"\u9000\u51fa")):o.createElement(I.Button,{className:"login-btn primary",onClick:ce?E:b},"\u767b\u5f55")))),o.createElement(Q,{title:"\u542f\u7528\u81ea\u52a8\u540c\u6b65\u529f\u80fd",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnToggleSyncMode,on:l})})),o.createElement(V,{title:o.createElement(o.Fragment,null,o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u591a\u8d26\u53f7\u7cfb\u7edf"),description:"\u4f7f\u4f60\u80fd\u591f\u540c\u65f6\u4ee5\u4e0d\u540cb\u7ad9\u8d26\u53f7\u6d4f\u89c8\u5927\u90e8\u5206b\u7ad9\u9875\u9762",toolbar:r.length<5?o.createElement(I.Button,{className:"primary",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):null},o.createElement(de,{isVIP:S,hasLogin:c,needVIP:!0,helperArea:o.createElement(o.Fragment,null,"\u672c\u529f\u80fd\u6570\u636e\u4ec5\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u672c\u5730\uff0c\u66f4\u6362\u6d4f\u89c8\u5668\u3001\u91cd\u65b0\u5b89\u88c5\u52a9\u624b\u6216\u6e05\u7406\u6d4f\u89c8\u5668\u90fd\u9700\u8981\u91cd\u65b0\u7ed1\u5b9a",o.createElement("br",null),o.createElement("br",null),"\u76ee\u524d\u7ed1\u5b9a\u4e0a\u9650\u4e3a ",o.createElement("b",null,"5"),"\uff0c\u5982\u9700\u66f4\u591a\u8bf7 ",o.createElement("a",{className:"report-btn",href:"#",onClick:this.handleOnGotoReport},"\u8054\u7cfb\u300c\u52a9\u624b\u732b\u300d"))},r.length>0?r.map(e=>o.createElement("div",{key:e.uid,className:"account"},o.createElement(I.Image,{className:"face",url:e.face}),o.createElement("div",{className:"info"},o.createElement("span",{className:"username"},e.username),o.createElement("p",{className:"sign"},e.sign)),o.createElement(I.Button,{className:"unbind-button primary",onClick:t=>this.handleOnUnbind(t,e.uid)},"\u53d6\u6d88\u7ed1\u5b9a"))):o.createElement("div",{className:"empty-list"},"\u6682\u65e0\u7ed1\u5b9a\u8d26\u53f7"))),o.createElement(V,{title:"\u52a9\u624b\u732b\u8bbe\u7f6e"},o.createElement(Q,{title:"\u663e\u793a\u6837\u5f0f",columns:9,helperArea:o.createElement(o.Fragment,null,"\u52a9\u624b\u732b\u4f1a\u5728\u4e3b\u7ad9\u89c6\u9891\u9875\u9762\u548c\u76f4\u64ad\u95f4\u9875\u9762",o.createElement("b",null,"\u7f51\u9875\u5168\u5c4f"),"\u65f6\u4f1a\u81ea\u52a8\u534a\u900f\u660e\u5316",o.createElement("div",{className:"reset-list"},n.map(e=>o.createElement(I.Button,{key:e,className:"primary",onClick:()=>this.handleOnResetCatPosition(e)},"\u91cd\u7f6e\u52a9\u624b\u732b\u5728\u300c",e,"\u300d\u7684\u4f4d\u7f6e"))))},o.createElement(ge,{className:"default"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("default")},o.createElement(ue,{icon:"cat",size:24,className:["handle-button","initialized","default"].filter(Boolean).join(" ")}),o.createElement("p",{className:"cat-type"},"\u9ed8\u8ba4")),o.createElement(ge,{className:"pinkCat"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("pinkCat")},o.createElement(ue,{icon:"cat",size:24,className:["handle-button","initialized","pinkCat"].filter(Boolean).join(" ")}),o.createElement("p",{className:"cat-type"},"\u7c89\u732b")),o.createElement(ge,{className:"blackCat"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("blackCat")},o.createElement(ue,{icon:"cat",size:24,className:["handle-button","initialized","blackCat"].filter(Boolean).join(" ")}),o.createElement("p",{className:"cat-type"},"\u9ed1\u732b")),o.createElement(ge,{className:"translucentPink"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentPink")},o.createElement(ue,{icon:"cat",size:24,className:["handle-button","initialized","translucentPink"].filter(Boolean).join(" ")}),o.createElement("p",{className:"cat-type"},"\u900f\u660e\u7c89")),o.createElement(ge,{className:"translucentWhite"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentWhite")},o.createElement(ue,{icon:"cat",size:24,className:["handle-button","initialized","translucentWhite"].filter(Boolean).join(" ")}),o.createElement("p",{className:"cat-type"},"\u900f\u660e\u7c89\u767d"))),o.createElement(Q,{title:"\u4e3b\u7ad9\u89c6\u9891\u7f51\u9875\u5168\u5c4f\u65f6\u663e\u793a",active:a,toolbar:o.createElement(h.CheckBoxButton,{onClick:()=>this.handleOnToggleHideCatWhenFullWiden(!a),on:a})}),o.createElement(Q,{title:"\u81ea\u52a8\u5173\u95ed\u52a9\u624b\u732b\u7a97\u53e3",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnCatAutoClose,on:s})})))}}(0,c.Z)(be,"contextType",z);const fe=(0,N.EN)(be);var ve=n(25498),Ce=n(48950),Ee=n(39417);const Se={ArrowUp:"\u2191",ArrowRight:"\u2192",ArrowDown:"\u2193",ArrowLeft:"\u2190"},ye={Control:"\u2303",Shift:"\u21e7",Alt:"\u2325",Command:"\u2318"},we=e=>{if(""===e)return"\u7a7a";const t=e.split("+").map(e=>e.trim());return t.map(e=>Ce.eE?Se[e]||ye[e]||e:Se[e]||e).join(" + ")},xe=(0,p["default"])($)`
  .range-section {
    .body {
      .current-speed-change-range, .current-jump-change-range {
        display: inline-block;
        width: 100px;
        font-size: 14px;
      }

      .range {
        width: 210px;
        vertical-align: sub;
      }
    }
  }

  .shortcut-item {
    margin-bottom: 12px;

    .checkbox-rect {
      margin-right: 12px;
      display: inline-block;
      vertical-align: text-bottom;
    }
  }

  .shortcut-name {
    font-size: 14px;
    display: inline-block;
    width: 120px;
  }

  .shortcut-value {
    input {
      padding: 2px 4px;
      width: 200px;
      font-family: system-ui;
      text-indent: 2px;

      &.setting {
        color: #999;
      }
    }
  }
`;class ke extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{shortcutOn:!1,shortcuts:[],playSpeedChangeRange:.25,useDefaultSpeedChangeRange:!0,playJumpChangeRange:5,autoWidthType:"default",autoHideDanmu:!1,videoWidenOn:!1,autoQualityOn:!1,autoQuality:112,autoSpeedOn:!1,autoSpeed:1,autoPlayMode:!1,redirectSSR:!1}),(0,c.Z)(this,"setting",!1),(0,c.Z)(this,"settingKey",""),(0,c.Z)(this,"previousSettingKey",""),(0,c.Z)(this,"settingValue",""),(0,c.Z)(this,"previousSettingValue",""),(0,c.Z)(this,"settingDefaultValue",""),(0,c.Z)(this,"previousSettingDefaultValue",""),(0,c.Z)(this,"handleOnClickAutoHideDanmu",()=>{chrome.runtime.sendMessage({target:"videoHideDanmu",event:"setSetting",on:!this.state.autoHideDanmu},()=>{this.context.uploadSettings("videoHideDanmu"),this.setState({autoHideDanmu:!this.state.autoHideDanmu})})}),(0,c.Z)(this,"handleOnClickAutoPlayMode",()=>{chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",on:!this.state.autoPlayMode},()=>{this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayMode:!this.state.autoPlayMode})})}),(0,c.Z)(this,"handleOnClickVideoWiden",()=>{const{videoWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",on:!e},()=>{this.context.uploadSettings("videoWiden"),this.setState({videoWidenOn:!e})})}),(0,c.Z)(this,"handleOnClickWidenType",e=>{const{autoWidthType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",widenType:e},()=>{this.context.uploadSettings("videoWiden"),this.setState({autoWidthType:e})})}),(0,c.Z)(this,"handleOnToggleShortcuts",()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",on:!this.state.shortcutOn},e=>{e&&(this.context.uploadSettings("videoShortcuts"),this.setState({shortcutOn:!this.state.shortcutOn}))})}),(0,c.Z)(this,"handleOnRedirectSSR",()=>{chrome.runtime.sendMessage({target:"redirectSSR",event:"setSetting",on:!this.state.redirectSSR},e=>{e&&(this.context.uploadSettings("redirectSSR"),this.setState({redirectSSR:!this.state.redirectSSR}))})}),(0,c.Z)(this,"handleOnMouseDownShortcutInput",e=>{e.persist();const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.sendPaymentMessage();e.target.classList.add("setting"),this.settingKey&&(this.previousSettingKey=this.settingKey,this.previousSettingValue=this.settingValue,this.previousSettingDefaultValue=this.settingDefaultValue),this.settingKey=e.target.dataset.key,this.settingValue=e.target.value,this.settingDefaultValue=e.target.value}),(0,c.Z)(this,"handleOnBlurShortcutInput",e=>{e.persist(),e.target.classList.remove("setting");let t,n,a=!1;this.previousSettingDefaultValue!==this.previousSettingValue&&this.previousSettingKey?(t=this.previousSettingKey,n=this.previousSettingValue,a=!0):this.settingDefaultValue!==this.settingValue&&this.settingKey&&(t=this.settingKey,n=this.settingValue),void 0!==t&&void 0!==n&&chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:t,value:n},()=>{this.previousSettingKey="",this.previousSettingValue="",this.previousSettingDefaultValue="",a||(this.settingKey="",this.settingValue="",this.settingDefaultValue=""),this.context.uploadSettings("videoShortcuts")})}),(0,c.Z)(this,"handleOnKeyDownShortcutInput",e=>{e.persist();const t=(0,Ee.S)(e.nativeEvent.code,e.key,e.ctrlKey,e.shiftKey,e.metaKey,e.altKey);if(t){const{shortcuts:e}=this.state,n=e.find(([e])=>this.settingKey===e);this.settingDefaultValue=n[1][1],n&&("backspace"===t?(this.settingValue="",n[1][1]=""):n[1][1]!==t&&(this.settingValue=t,n[1][1]=t),this.setState({shortcuts:e}))}}),(0,c.Z)(this,"handleOnClickShortcutCheckbox",(e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:e,on:!t},()=>{const{shortcuts:n}=this.state,a=n.find(([t])=>e===t);a[1][2]=!t,this.setState({shortcuts:n}),this.context.uploadSettings("videoShortcuts")})}),(0,c.Z)(this,"handleOnSetPlaySpeedRange",e=>{e.persist();const t=+e.target.value;this.setState({playSpeedChangeRange:t})}),(0,c.Z)(this,"handleOnMouseUpPlaySpeedRange",e=>{e.persist();const{bhAccount:t={}}=this.context;if(!t||!t.isVIP)return this.context.sendPaymentMessage();const n=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playSpeedChangeRange:n},()=>{this.context.uploadSettings("videoShortcuts")})}),(0,c.Z)(this,"handleOnClickUseDefaultPlaySpeedChangeRange",()=>{const e=this.state.useDefaultSpeedChangeRange,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",useDefaultSpeedChangeRange:!e},()=>{this.context.uploadSettings("videoShortcuts"),this.setState({useDefaultSpeedChangeRange:!e})})}),(0,c.Z)(this,"handleOnSetPlayJumpChangeRange",e=>{e.persist();const t=+e.target.value;this.setState({playJumpChangeRange:t})}),(0,c.Z)(this,"handleOnMouseUpPlayJumpChangeRange",e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playJumpChangeRange:t},()=>{this.context.uploadSettings("videoShortcuts")})}),(0,c.Z)(this,"handleOnClickAutoQuality",()=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",on:!this.state.autoQualityOn},()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQualityOn:!this.state.autoQualityOn})})}),(0,c.Z)(this,"handleOnClickChangeAutoQuality",e=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",quality:e},()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQuality:e})})}),(0,c.Z)(this,"handleOnClickAutoPlaySpeed",()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",on:!this.state.autoSpeedOn},()=>{this.context.uploadSettings("videoAutoPlaySpeed"),this.setState({autoSpeedOn:!this.state.autoSpeedOn})})}),(0,c.Z)(this,"handleOnSetAutoPlaySpeedRange",e=>{e.persist();const t=+e.target.value;this.setState({autoSpeed:t})}),(0,c.Z)(this,"handleOnMouseUpAutoPlaySpeedRange",e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",speed:t},()=>{this.context.uploadSettings("videoAutoPlaySpeed")})}),(0,c.Z)(this,"handleOnClickResetShortcuts",()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"reset"},()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},e=>{this.setState({shortcuts:e},()=>{this.context.uploadSettings("videoShortcuts")})})})})}componentDidMount(){chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:n})=>{this.setState({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:n})}),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},e=>{this.setState({shortcuts:e})}),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},e=>{this.setState({shortcutOn:e.on})}),chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},e=>{this.setState({videoWidenOn:e.on,autoWidthType:e.widenType})}),chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},e=>{this.setState({autoHideDanmu:e.on})}),chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},e=>{this.setState({autoQualityOn:e.on,autoQuality:e.quality})}),chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},e=>{this.setState({autoSpeedOn:e.on,autoSpeed:e.speed})}),chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"getSetting"},e=>{this.setState({autoPlayMode:e.on})}),chrome.runtime.sendMessage({target:"redirectSSR",event:"getSetting"},({on:e})=>{this.setState({redirectSSR:e})})}render(){const{autoPlayMode:e,redirectSSR:t,shortcuts:n,shortcutOn:a,playSpeedChangeRange:i,useDefaultSpeedChangeRange:s,playJumpChangeRange:l,autoWidthType:r,autoHideDanmu:c,videoWidenOn:p,autoQualityOn:d,autoQuality:g,autoSpeedOn:u,autoSpeed:m}=this.state,{hasLogin:b,bilibiliAccount:f}=this.context,{bhAccount:v={}}=this.context,C=!!v&&v["isVIP"];return o.createElement(xe,null,o.createElement(_,{title:"\u4e3b\u7ad9\u529f\u80fd"}),o.createElement(V,{title:"\u89c6\u9891\u64ad\u653e\u9875\u9762"},o.createElement(Q,{title:"\u9ed8\u8ba4\u5173\u95ed\u5f39\u5e55",active:c,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickAutoHideDanmu,on:c})}),o.createElement(Q,{title:"\u667a\u80fd\u8fde\u64ad",description:"\u5408\u96c6\u4e0e\u5206P\u9875\u9762\u81ea\u52a8\u5f00\u542f\u8fde\u64ad\uff0c\u5176\u4ed6\u9875\u9762\u80fd\u81ea\u52a8\u5173\u95ed\u8fde\u64ad",active:e,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickAutoPlayMode,on:e})}),o.createElement(Q,{title:"\u81ea\u52a8\u91cd\u5b9a\u5411SSR\u9875\u9762",description:"\u5c06\u5f62\u5982\u300c/s/video/*\u300d\u7684\u94fe\u63a5\u91cd\u5b9a\u5411\u5230\u300c/video/* \u300d",active:t,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnRedirectSSR,on:t})}),o.createElement(Q,{className:"range-section",title:"\u9ed8\u8ba4\u64ad\u653e\u901f\u5ea6",description:"\u9ed8\u8ba41.0\uff0c\u8303\u56f4\uff1a0.5 ~ 4.0",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickAutoPlaySpeed,on:u})},o.createElement("div",null,o.createElement("span",{className:"current-speed-change-range"},m),o.createElement(h.Range,{value:m,max:4,min:.5,step:.05,onChange:this.handleOnSetAutoPlaySpeedRange,onMouseUp:this.handleOnMouseUpAutoPlaySpeedRange}))),o.createElement(Q,{title:"\u9ed8\u8ba4\u663e\u793a\u65b9\u5f0f - \u81ea\u52a8\u5bbd\u5c4f",active:p,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickVideoWiden,on:p})},o.createElement(h.RadioButtonGroup,{value:p?r:"",data:[{key:"wide",title:"\u5bbd\u5c4f"},{key:"web",title:"\u7f51\u9875\u5168\u5c4f"},{key:"full",title:"\u5168\u5c4f"}],onClick:this.handleOnClickWidenType})),o.createElement(Q,{title:"\u9ed8\u8ba4\u753b\u8d28",active:d,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickAutoQuality,on:d}),helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u5982\u679c\u89c6\u9891\u4e0d\u5b58\u5728\u6240\u9009\u753b\u8d28\uff0c\u5219\u4f1a\u9010\u4e2a\u964d\u7ea7\u9002\u914d"),o.createElement("br",null),o.createElement("br",null),o.createElement("b",null,"\u5982\u679c\u9002\u914d\u5230\u5927\u4f1a\u5458\u753b\u8d28\u4f46\u7528\u6237\u4e0d\u662f\u5927\u4f1a\u5458\u5219\u4f1a\u7ec8\u6b62\u9002\u914d"))},o.createElement(h.RadioButtonGroup,{value:d?g:112,data:ve.VIDEO_QUALITY_NUMBER_LIST.map(e=>({key:e,title:ve.VIDEO_QUALITY_MAP[e]+(e>80?" (\u5927\u4f1a\u5458)":"")})),onClick:this.handleOnClickChangeAutoQuality}))),o.createElement(V,{title:"\u5feb\u6377\u952e"},o.createElement(Q,{className:"range-section",title:o.createElement(o.Fragment,null,o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u64ad\u653e\u901f\u5ea6\u8c03\u6574\u5e45\u5ea6 (0.05-0.5x)"),description:"\u9ed8\u8ba40.25x",hasLogin:b,isVIP:C,needVIP:!0,active:!s&&C,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickUseDefaultPlaySpeedChangeRange,on:!!C&&!s}),helperArea:o.createElement(o.Fragment,null,"\u901a\u8fc7\u5feb\u6377\u952e\u8c03\u6574\u64ad\u653e\u901f\u5ea6\u4e0a\u9650\u6700\u5927\u4e3a",o.createElement("b",null,"4"))},o.createElement("div",null,o.createElement("span",{className:"current-speed-change-range"},b&&C?i:.25),o.createElement(h.Range,{value:b&&C?i:.25,max:.5,min:.05,step:.05,onChange:this.handleOnSetPlaySpeedRange,onMouseUp:this.handleOnMouseUpPlaySpeedRange}))),o.createElement(Q,{className:"range-section",title:o.createElement(o.Fragment,null,o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u5feb\u8fdb\u5feb\u9000\u5e45\u5ea6 (1-120\u79d2)"),description:"\u9ed8\u8ba45\u79d2",hasLogin:b,isVIP:C,needVIP:!0,active:C,helperArea:o.createElement(o.Fragment,null,"\u8be5\u529f\u80fd\u4e0d\u9700\u8981\u60a8\u70b9\u51fb\u89c6\u9891\u64ad\u653e\u5668\u5c31\u80fd\u5728\u6574\u4e2a\u89c6\u9891\u64ad\u653e\u9875\u9762\u751f\u6548",o.createElement("br",null),"\u4f46\u4e0d\u4f1a\u5f71\u54cd\u4f60\u7f16\u8f91\u548c\u53d1\u9001\u6587\u5b57\u6d88\u606f")},o.createElement("div",null,o.createElement("span",{className:"current-jump-change-range"},b?l:5),o.createElement(h.Range,{value:b?l:5,max:120,min:1,step:1,onChange:this.handleOnSetPlayJumpChangeRange,onMouseUp:this.handleOnMouseUpPlayJumpChangeRange}))),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u5feb\u6377\u952e\u5217\u8868"),hasLogin:b,active:a,toolbar:o.createElement(h.CheckBoxButton,{disable:!b,onClick:this.handleOnToggleShortcuts,on:!!b&&a}),helperArea:o.createElement(o.Fragment,null,"\u4ec5\u300c\u4fee\u6539\u5feb\u6377\u952e\u300d\u4e3a\u4ed8\u8d39\u529f\u80fd\uff0c\u300c\u5feb\u6377\u952e\u300d\u7684\u4f7f\u7528\u4e3a\u514d\u8d39\u529f\u80fd",o.createElement("br",null),o.createElement("br",null),"\u90e8\u5206\u5feb\u6377\u952e\u4e0e\u5b98\u65b9\u64ad\u653e\u5668\u4e2d\u7684\u91cd\u5408",o.createElement("br",null),o.createElement("br",null),o.createElement("b",null,"\u6309\u9000\u683c\u952e\u6e05\u9664\u8bbe\u5b9a"),o.createElement("br",null),o.createElement("br",null),"\u70b9\u51fb\u7f16\u8f91\u6846\u540e\u6309\u4e0b\u76f8\u5173\u5feb\u6377\u952e\u8fdb\u884c\u8bbe\u7f6e\uff0c\u652f\u6301\u7ec4\u5408\u952e",o.createElement("br",null),"\uff08\u5373\u7f16\u8f91\u6846\u5185\u5bb9\u4f1a\u53d8\u6210\u7070\u8272\uff09",o.createElement("br",null),o.createElement("br",null),"\u8bbe\u7f6e\u5b8c\u540e\u9f20\u6807\u70b9\u51fb\u9875\u9762\u7a7a\u767d\u5904\u540e\u8bbe\u7f6e\u751f\u6548",o.createElement("br",null),"\uff08\u5373\u7f16\u8f91\u6846\u5185\u5bb9\u4f1a\u53d8\u56de\u9ed1\u8272\uff09",o.createElement("br",null),o.createElement("br",null),o.createElement(h.Button,{className:"primary",onClick:this.handleOnClickResetShortcuts},"\u91cd\u7f6e\u5feb\u6377\u952e\u9ed8\u8ba4\u6309\u952e"))},o.createElement("div",{className:"list"},n&&n.map(([e,[t,n,a]])=>o.createElement("div",{key:e,className:"shortcut-item"},o.createElement(h.CheckboxRect,{active:a,onClick:()=>this.handleOnClickShortcutCheckbox(e,a)}),o.createElement("span",{className:"shortcut-name"},t),o.createElement("span",{className:"shortcut-value"},o.createElement(h.Input,{readOnly:!0,"data-key":e,className:"shortcut",onKeyDown:this.handleOnKeyDownShortcutInput,onBlur:this.handleOnBlurShortcutInput,onMouseDown:this.handleOnMouseDownShortcutInput,value:we(n)}))))))))}}(0,c.Z)(ke,"contextType",z);const Me=(0,N.EN)(ke),Oe=p["default"].div`

`;class Ae extends o.Component{constructor(e){super(e),(0,c.Z)(this,"handleOnToggleIncognito",()=>{chrome.runtime.sendMessage({target:"incognito",event:"setSetting",on:!this.state.incognito},()=>{this.context.uploadSettings("incognito"),this.setState({incognito:!this.state.incognito})})}),(0,c.Z)(this,"handleOnToggleAutoSignIn",()=>{chrome.runtime.sendMessage({target:"autoSignIn",event:"setSetting",on:!this.state.autoSignIn},()=>{this.context.uploadSettings("autoSignIn"),this.setState({autoSignIn:!this.state.autoSignIn})})}),(0,c.Z)(this,"handleOnToggleAutoMedal",()=>{chrome.runtime.sendMessage({target:"autoMedal",event:"setSetting",on:!this.state.autoMedal},()=>{this.context.uploadSettings("autoMedal"),this.setState({autoMedal:!this.state.autoMedal})})}),(0,c.Z)(this,"handleOnToggleAutoSignInNotification",()=>{chrome.runtime.sendMessage({target:"autoSignIn",event:"setSetting",pushNotification:!this.state.pushAutoSignInNotification},()=>{this.context.uploadSettings("autoSignIn"),this.setState({pushAutoSignInNotification:!this.state.pushAutoSignInNotification})})}),(0,c.Z)(this,"handleOnToggleSilver2Coin",()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",on:!this.state.silver2coin},()=>{this.context.uploadSettings("silver2coin"),this.setState({silver2coin:!this.state.silver2coin})})}),(0,c.Z)(this,"handleOnToggleLiveDefaultOpen",()=>{chrome.runtime.sendMessage({target:"liveChatMode",event:"setSetting",defaultOpen:!this.state.liveChatModeDefaultOpen},()=>{this.context.uploadSettings("liveChatMode"),this.setState({liveChatModeDefaultOpen:!this.state.liveChatModeDefaultOpen})})}),(0,c.Z)(this,"handleOnToggleSilver2CoinNotification",()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",pushNotification:!this.state.pushSilver2CoinNotification},()=>{this.context.uploadSettings("silver2coin"),this.setState({pushSilver2CoinNotification:!this.state.pushSilver2CoinNotification})})}),(0,c.Z)(this,"handleOnToggleChatFilterItem",(e,t)=>{const n=this.state.chatFilterOptions;n[e]=t,chrome.runtime.sendMessage({target:"chatFilter",event:"setSetting",options:n},()=>{this.context.uploadSettings("chatFilter"),this.setState({chatFilterOptions:n})})}),(0,c.Z)(this,"handleOnClickLiveAutoWiden",()=>{const{liveAutoSetWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoWiden",event:"setSetting",on:!e},()=>{this.context.uploadSettings("liveAutoWiden"),this.setState({liveAutoSetWidenOn:!e})})}),(0,c.Z)(this,"handleOnClickWidenType",e=>{const{liveAutoSetWidenType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"liveAutoWiden",event:"setSetting",widenType:e},()=>{this.context.uploadSettings("liveAutoWiden"),this.setState({liveAutoSetWidenType:e})})}),(0,c.Z)(this,"handleOnClickLiveAutoQuality",()=>{const{liveAutoQualityOn:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",on:!e},()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQualityOn:!e})})}),(0,c.Z)(this,"handleOnClickLiveAutoQualitySkipHVC",()=>{const{liveAutoQualitySkipHVC:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",skipHVC:!e},()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQualitySkipHVC:!e})})}),(0,c.Z)(this,"handleOnClickQualityType",e=>{const{liveAutoQuality:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",quality:e},()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQuality:e})})}),this.state={autoSignIn:!0,autoMedal:!1,pushAutoSignInNotification:!0,silver2coin:!0,pushSilver2CoinNotification:!0,chatFilter:!0,chatFilterOptions:{},liveChatModeDefaultOpen:!1,liveAutoSetWidenOn:!1,liveAutoSetWidenType:"default",liveAutoQualityOn:!1,liveAutoQuality:"\u84dd\u5149",liveAutoQualitySkipHVC:!1,incognito:!1}}componentDidMount(){chrome.runtime.sendMessage({target:"autoSignIn",event:"getSetting"},({on:e,pushNotification:t})=>{this.setState({autoSignIn:e,pushAutoSignInNotification:t})}),chrome.runtime.sendMessage({target:"autoMedal",event:"getSetting"},({on:e})=>{this.setState({autoMedal:e})}),chrome.runtime.sendMessage({target:"silver2coin",event:"getSetting"},({on:e,pushNotification:t})=>{this.setState({silver2coin:e,pushSilver2CoinNotification:t})}),chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},({on:e,options:t})=>{this.setState({chatFilter:e,chatFilterOptions:t})}),chrome.runtime.sendMessage({target:"liveChatMode",event:"getSetting"},({defaultOpen:e})=>{this.setState({liveChatModeDefaultOpen:e})}),chrome.runtime.sendMessage({target:"liveAutoWiden",event:"getSetting"},({on:e,widenType:t})=>{this.setState({liveAutoSetWidenOn:e,liveAutoSetWidenType:t})}),chrome.runtime.sendMessage({target:"liveAutoQuality",event:"getSetting"},({on:e,quality:t,skipHVC:n})=>{this.setState({liveAutoQualityOn:e,liveAutoQuality:t,liveAutoQualitySkipHVC:n})}),chrome.runtime.sendMessage({target:"incognito",event:"getSetting"},({on:e,quality:t})=>{this.setState({incognito:e})})}render(){const{hasLogin:e,bhAccount:t,bilibiliAccount:n}=this.context,{autoSignIn:a,autoMedal:i,liveAutoSetWidenOn:s,liveAutoSetWidenType:l,liveAutoQualityOn:r,liveAutoQuality:c,liveAutoQualitySkipHVC:p,incognito:d}=this.state,g=!!t&&t["isVIP"];return o.createElement(Oe,null,o.createElement(_,{title:"\u76f4\u64ad\u533a\u529f\u80fd\u8bbe\u7f6e"}),o.createElement(Q,{title:"\u9ed8\u8ba4\u5f00\u542f\u7248\u804a\u6a21\u5f0f",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnToggleLiveDefaultOpen,on:this.state.liveChatModeDefaultOpen})}),o.createElement(Q,{title:"\u81ea\u52a8\u66f4\u6362\u7c89\u4e1d\u52cb\u7ae0",toolbar:o.createElement(h.CheckBoxButton,{disable:!n,onClick:this.handleOnToggleAutoMedal,on:i}),active:i&&!!n,helperArea:o.createElement(o.Fragment,null,"\u767b\u5f55\u540e\u53ef\u7528\u3002",o.createElement("br",null),"\u5982\u679c\u672a\u5339\u914d\u5230\u7c89\u4e1d\u52cb\u7ae0\u5219\u81ea\u52a8\u8131\u5378\u6389")}),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u76f4\u64ad\u95f4\u9690\u8eab\u8fdb\u573a"),description:"\u8bf7\u6ce8\u610f\u542f\u7528\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u623f\u7ba1\u7b49\u6743\u9650\u4e22\u5931",isVIP:g,needVIP:!0,hasLogin:e,toolbar:o.createElement(h.CheckBoxButton,{disable:!n&&!g,onClick:this.handleOnToggleIncognito,on:d&&!!g}),active:d&&!!n&&!!g,helperArea:o.createElement(o.Fragment,null,"\u7531\u4e8e\u9690\u85cf\u4e86\u8eab\u4efd\uff0c\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528\u76f4\u64ad\u95f4\u5f39\u5e55\u3001\u9001\u793c\u7b49\u529f\u80fd\uff0c\u4e5f\u5305\u542b\u623f\u7ba1\u7ba1\u7406\u529f\u80fd\u7b49\u3002")}),o.createElement(Q,{title:"\u9ed8\u8ba4\u663e\u793a\u65b9\u5f0f - \u81ea\u52a8\u5bbd\u5c4f",active:s,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickLiveAutoWiden,on:s})},o.createElement(h.RadioButtonGroup,{value:s?l:"",data:[{key:"web",title:"\u7f51\u9875\u5168\u5c4f"}],onClick:this.handleOnClickWidenType})),o.createElement(Q,{title:"\u9ed8\u8ba4\u753b\u8d28",active:r,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickLiveAutoQuality,on:r}),helperArea:"\u8bf7\u6ce8\u610f\uff0cPRO\u6e05\u6670\u5ea6\u4e0b\u65e0\u6cd5\u4f7f\u7528\u76f4\u64ad\u622a\u5c4f\u7b49\u529f\u80fd"},o.createElement(h.RadioButtonGroup,{value:r?c:"\u84dd\u5149",data:ae.QUALITY_NAME_LIST.map(e=>({key:e,title:e})),onClick:this.handleOnClickQualityType})),o.createElement(Q,{title:"\u9ed8\u8ba4\u753b\u8d28-\u8df3\u8fc7PRO(\u8f6f\u4ef6\u89e3\u7801)\u9009\u9879",active:p,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnClickLiveAutoQualitySkipHVC,on:p}),helperArea:o.createElement(o.Fragment,null,"PRO\u753b\u8d28\u4e13\u4e3a\u65e0\u6cd5\u786c\u4ef6\u52a0\u901f\u7684\u7528\u6237\u63d0\u4f9b\u3002",o.createElement("br",null),"\u5982\u679c\u60a8\u53ef\u4ee5\u76f4\u63a5\u786c\u4ef6\u89e3\u7801\uff0c\u8bf7\u6253\u5f00\u6b64\u9009\u9879\uff0c\u4ee5\u8282\u7701\u6027\u80fd\u83b7\u5f97\u6700\u4f73\u4f53\u9a8c")}),o.createElement(Q,{title:"\u81ea\u52a8\u7b7e\u5230",toolbar:o.createElement(h.CheckBoxButton,{disable:!n,onClick:this.handleOnToggleAutoSignIn,on:a}),active:a&&!!n,helperArea:"\u8be5\u529f\u80fd\u6bcf\u5929\u90fd\u4f1a\u68c0\u67e5\uff0c\u6bcf\u5929\u7b7e\u5230\u4e00\u6b21~"},o.createElement(h.ListItem,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleAutoSignInNotification,operation:o.createElement(h.CheckBoxButton,{on:this.state.pushAutoSignInNotification})})),o.createElement(Q,{title:"\u81ea\u52a8\u94f6\u74dc\u5b50\u5151\u6362\u786c\u5e01",toolbar:o.createElement(h.CheckBoxButton,{disable:!n,onClick:this.handleOnToggleSilver2Coin,on:this.state.silver2coin}),active:this.state.silver2coin&&!!n},o.createElement(h.ListItem,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleSilver2CoinNotification,operation:o.createElement(h.CheckBoxButton,{on:this.state.pushSilver2CoinNotification})})),o.createElement(Q,{title:"\u53bb\u6c61\u7c89 - \u804a\u5929\u4fe1\u606f\u5c4f\u853d\u8bbe\u7f6e",description:"\u5168\u5c40\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8bbe\u7f6e\u3002\u8fdb\u5165\u6bcf\u4e2a\u76f4\u64ad\u95f4\u540e\u53ef\u4ee5\u518d\u5355\u72ec\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5355\u72ec\u8bbe\u7f6e\u4f1a\u8986\u76d6\u9ed8\u8ba4\u8bbe\u7f6e",helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u7528\u6237\u7b49\u7ea7"),"\u8fc7\u6ee4\u9879\u4ec5\u5728",o.createElement("b",null,"\u76f4\u64ad\u56de\u770b"),"\u9875\u9762\u6709\u6548",o.createElement("br",null))},o.createElement(h.CheckBoxGroup,{data:v()(this.state.chatFilterOptions).map(e=>({key:e,title:(0,F.__)("chatFilter_options_"+e),on:this.state.chatFilterOptions[e]})),onClick:this.handleOnToggleChatFilterItem})))}}(0,c.Z)(Ae,"contextType",z);const Ie=(0,N.EN)(Ae);var Le=n(69055),Pe=n(90487),Be=n.n(Pe),De=n(18281),Fe=n.n(De),Ne=n(27921),Re=n.n(Ne),Te=n(23279),_e=n.n(Te),Ze=n(66130),Ve=n.n(Ze),Ue=n(85025),ze=n(42151);const We=p["default"].div.attrs({className:"account-block"})`
  display: flex;
  margin-bottom: 8px;
  padding: 1px 1px 8px;
  width: 100%;
  border-bottom: 1px solid #f7f7f7;
  box-sizing: border-box;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 2px #b9b9b9;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    padding: 2px 0;
    max-width: 350px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }

      .add-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--bilibili-blue);
        color: var(--google-grey-50);
      }

      .cancel-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--google-grey-400);
        color: var(--google-grey-50);
      }
    }

    p {
      margin: 0 0 4px 0;
      color: #585858;
      overflow: hidden;
      white-space: break-spaces;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      span, a {
        margin-right: 12px
      }
    }

    i {
      font-style: normal;
    }
  }

  .action-box {
    flex-shrink: 0;

    .button {
      margin-top: 15.5px;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }
`,He=e=>{const{added:t,mid:n,uname:a,face:i,level:s,videos:l,fans:r,sign:c,onOpenUserSpace:h,onClickAttentionBtn:p}=e,d=i.match("noface.gif$")?i:i+"@140w_140h.webp";return o.createElement(We,null,o.createElement("div",{className:"avatar",onClick:()=>h(n)},o.createElement(I.Image,{url:d.replace(/^(http:\/\/|\/\/)/,"https://"),sign:a})),o.createElement("div",{className:"info"},o.createElement("h6",null,o.createElement("a",{onClick:()=>h(n)},a),s?o.createElement("span",{className:"level lv"+s},"Lv.",s):null,o.createElement(I.Button,{className:t?"cancel-btn":"add-btn",onClick:()=>p(n)},t?"\u53d6\u6d88":"\u6dfb\u52a0")),(l||r)&&o.createElement("p",null,l&&o.createElement("span",null,"\u7a3f\u4ef6\u6570\uff1a",o.createElement("i",null,l)),r&&o.createElement("span",null,"\u7c89\u4e1d\u6570\uff1a",o.createElement("i",null,r))),c?o.createElement("p",{className:"sign",title:c},c):null))},je=(0,p["default"])(I.Modal)`
  width: 500px;
`,Ge=p["default"].div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }

    .has-more-block {
      height: 50px;
    }
  }
`;class Ye extends o.Component{constructor(e){super(e),(0,c.Z)(this,"handleOnCreateUserSpaceTab",e=>{this.createTab("https://space.bilibili.com/"+e)}),(0,c.Z)(this,"handleOnClickOpenModal",()=>{this.setState({modalOn:!0})}),(0,c.Z)(this,"handleOnClickCloseModal",()=>{this.setState({modalOn:!1})}),(0,c.Z)(this,"handleOnUserInputChange",e=>{e.persist(),this._onChange||(this._onChange=_e()(e=>{const t=e.target.value.trim();t&&this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},()=>{this.handleOnSearchUser(t,this.state.pn)})},700)),this._onChange(e)}),(0,c.Z)(this,"handleOnSearchUser",(e,t=1)=>{e&&new(i())(e=>{this.searching?this.cancelSearchRequest().then(t=>e(!t)):e(!1)}).then(n=>{n||(this.searching=!0,this.sendSearchRequest(e,t).then(()=>{this.searchResultListRef.current.scrollTo(0,0)}))})}),(0,c.Z)(this,"sendSearchRequest",async(e,t=1)=>{if(!e)return;const n="https://api.bilibili.com/x/web-interface/search/type",a={search_type:"bili_user",page:t,order:0,order_sort:0,user_type:0,keyword:e},o=(0,ze.generateURLByParams)(n,a);return this.fetchPassword=Ve()(),new(i())(e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:o,options:{contentType:"json",controlPassword:this.fetchPassword}},({data:n})=>{if(this.searching=!1,n&&n.data&&n.data.result&&n.data.result.length>0){const{searchResult:a}=this.state;a.push(...n.data.result),this.setState({searchResult:a,resultCount:n.data.numResults,hasMore:t<n.data.numPages,pn:t+1}),e()}else e()})})}),(0,c.Z)(this,"cancelSearchRequest",()=>new(i())(e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},t=>{e(t)})})),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1},this.searchResultListRef=o.createRef(),this.bottomObserverRef=o.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.keyword,this.state.pn)},{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{modalOn:e=!1,title:t,addedUidList:n,onClickAccountBtn:a,onClickClose:i}=this.props,{searchResult:s,resultCount:l}=this.state;return o.createElement(je,{open:e,title:t,buttons:o.createElement(o.Fragment,null,o.createElement(I.Button,{onClick:i},"\u5173\u95ed")),onClickMask:i},o.createElement(Ge,null,o.createElement("div",{className:"search-bar"},o.createElement(Ue.I,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d\u8fdb\u884c\u641c\u7d22"}),o.createElement(I.Button,null,"\u641c\u7d22")),o.createElement("div",{className:"result-box"},o.createElement("p",null,"\u641c\u7d22\u7ed3\u679c",l?o.createElement("span",null," ~ \u5171\u627e\u5230 ",1e3===l?"1000+":l," \u4e2a\u7528\u6237"):null),o.createElement("div",{className:"list",ref:this.searchResultListRef},s.length>0?s.map(e=>o.createElement(He,(0,Le.Z)({key:e.mid},e,{face:e.upic,sign:e.usign,added:n.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:a}))):"\u6ca1\u6709\u6570\u636e\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u5f00\u59cb\u641c\u7d22",o.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}const Ke=(0,p["default"])(I.Modal)`
  width: 500px;
`,Qe=p["default"].div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    position: relative;
    min-height: 20px;

    .list {
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
      transform: scale(1);
    }

    .has-more-block {
      height: 50px;
    }
  }
`;class $e extends o.Component{constructor(e){super(e),(0,c.Z)(this,"initialized",!1),(0,c.Z)(this,"handleOnCreateUserSpaceTab",e=>{this.createTab("https://space.bilibili.com/"+e)}),(0,c.Z)(this,"handleOnClickOpenModal",()=>{this.setState({modalOn:!0})}),(0,c.Z)(this,"handleOnClickCloseModal",()=>{this.setState({modalOn:!1})}),(0,c.Z)(this,"handleOnUserInputChange",e=>{e.persist(),this._onChange||(this._onChange=_e()(e=>{const t=e.target.value.trim();t?this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},()=>{this.handleOnSearchUser(this.state.pn)}):this.setState({keyword:"",pn:1,hasMore:!1},()=>{this.handleOnSearchUser(this.state.pn)})},700)),this._onChange(e)}),(0,c.Z)(this,"handleOnSearchUser",(e=1)=>{new(i())(e=>{this.searching?this.cancelSearchRequest().then(t=>e(!t)):e(!1)}).then(t=>{t||(this.searching=!0,this.sendSearchRequest(e).then(()=>{this.searchResultListRef.current.scrollTo(0,0)}))})}),(0,c.Z)(this,"sendSearchRequest",async(e=1,t=20)=>{let n="https://api.bilibili.com/x/relation/followings";const a={vmid:this.props.bilibiliAccount.uid,pn:e,ps:t,order:"desc",order_type:"attention"};this.state.keyword&&(n="https://api.bilibili.com/x/relation/followings/search",a.name=this.state.keyword);const o=(0,ze.generateURLByParams)(n,a);return this.fetchPassword=Ve()(),new(i())(n=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:o,options:{contentType:"json",controlPassword:this.fetchPassword}},({data:a})=>{if(this.searching=!1,a&&a.data&&a.data.list){if(a.data.list.length>0){let{searchResult:n}=this.state;1===e?n=a.data.list:n.push(...a.data.list),this.setState({searchResult:n,resultCount:a.data.total,hasMore:a.data.list.length===t,pn:e+1})}else this.setState({hasMore:!1});n()}else n()})})}),(0,c.Z)(this,"cancelSearchRequest",()=>new(i())(e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},t=>{e(t)})})),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1,listType:"all"},this.searchResultListRef=o.createRef(),this.bottomObserverRef=o.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore&&this.props.modalOn&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.pn)},{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(){!this.initialized&&this.props.bilibiliAccount&&this.props.modalOn&&(this.initialized=!0,this.sendSearchRequest(1))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{modalOn:e=!1,title:t,addedUidList:n,onClickAccountBtn:a,onClickClose:i}=this.props,{searchResult:s,resultCount:l,keyword:r}=this.state;return o.createElement(Ke,{open:e,title:t,buttons:o.createElement(o.Fragment,null,o.createElement(I.Button,{onClick:i},"\u5173\u95ed")),onClickMask:i},o.createElement(Qe,null,o.createElement("div",{className:"search-bar"},o.createElement(Ue.I,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d\u8fdb\u884c\u641c\u7d22"}),o.createElement(I.Button,{onClick:()=>this.handleOnSearchUser(this.state.pn)},"\u641c\u7d22")),o.createElement("div",{className:"result-box"},o.createElement("p",null,"\u641c\u7d22\u7ed3\u679c",r&&l?o.createElement("span",null," ~ \u5171\u627e\u5230 ",1e3===l?"1000+":l," \u4e2a\u7528\u6237"):null),o.createElement("div",{className:"list",ref:this.searchResultListRef},e&&s.length>0?s.map(e=>o.createElement(He,(0,Le.Z)({key:e.mid},e,{added:n.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:a}))):"\u6ca1\u6709\u6570\u636e\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u5f00\u59cb\u641c\u7d22",o.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}var qe=n(32918),Xe=n(84903),Je=n(89862),et=n(93557);const tt=(0,p["default"])($)`
  overflow: auto;

  .add-btn {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  .follow {
    margin-right: 8px;
  }
`,nt=((0,p["default"])(I.Modal)`
  width: 500px;
`,p["default"].div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }
  }
`,p["default"].div`
  display: flex;
  margin-bottom: 4px;
  padding: 8px 4px 8px 8px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex: 1;

    h6 {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;
      margin: 0;

      a {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }
    }

    /*p {
      margin-top: 2px;
      margin-bottom: 0;
      color: #999;
      display: -webkit-box;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }*/

    .button {
      margin-left: auto;
      height: 20px;
      font-size: 12px;
      background-color: var(--google-grey-400);
      color: var(--google-grey-50);
    }
  }

  .auto-like-coin-collect-box {
    display: flex;
    margin-top: 6px;

    .config-item {
      display: flex;
      align-items: center;
      margin-right: 30px;
      line-height: 12px;
    }

    input[type="checkbox"] {
      vertical-align: middle;
      margin: 0 4px 0 0;
    }

    label {
      vertical-align: middle;
    }

    .coin-number {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      width: 30px;
      border: 0;
    }

    .collection-id {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      border: 0;
      font-size: 12px;
    }
  }
`),at=function({index:e,username:t,uid:n,level:a,face:i,sign:s,onClickUserName:l,onClickAttentionBtn:r,onDragMove:c,onDrop:h,autoLikeCoinCollectConfig:p,handleOnClickAutoLikeCoinCollect:d,collectionList:g}){const u=o.useRef(null),[,m]=(0,qe.L)({accept:"account-block",hover(t,n){if(!u.current)return;const a=t.index,i=e;if(a===i)return;const o=u.current.getBoundingClientRect(),s=(o.bottom-o.top)/2,l=n.getClientOffset(),r=l.y-o.top;a<i&&r<s||a>i&&r>s||(c(a,i),t.index=i)}}),[{isDragging:b},f]=(0,Xe.c)({item:{type:"account-block",id:n,index:e},collect:e=>({isDragging:e.isDragging()}),end(){h()}}),v=o.useCallback(()=>{l(n)},[n]),C=o.useCallback(()=>{r(n)},[n]),E=o.useCallback(e=>{e.stopPropagation();const t=+e.target.value;t>=1&&t<=2&&d(n,"coinNumber",t)},[d,p]),S=o.useCallback(e=>{let t;e.stopPropagation(),p&&p.collectionId?t=p.collectionId:g&&(t=g[0].id),d(n,"collect",e.target.checked,t)},[d,p,g]),y=o.useCallback(e=>{e.stopPropagation();const t=e.target.value;d(n,"collectionId",t)},[d,p,g]);return f(m(u)),o.createElement(nt,{key:n,ref:u,className:"user",style:{opacity:b?0:1}},o.createElement("div",{className:"avatar",onClick:v},o.createElement(I.Image,{url:i})),o.createElement("div",{className:"info"},o.createElement("h6",null,o.createElement("a",{onClick:v},t),o.createElement("span",{className:"level lv"+a},"Lv.",a),o.createElement(I.Button,{onClick:C},"\u53d6\u6d88\u7279\u5173")),o.createElement("div",{className:"auto-like-coin-collect-box"},o.createElement("div",{className:["config-item","like",p&&p.like?"active":""].join(" ")},o.createElement("input",{id:n+"like",type:"checkbox",checked:!!p&&!!p.like,onChange:()=>d(n,"like",!(p&&p.like))}),o.createElement("label",{htmlFor:n+"like"},"\u70b9\u8d5e")),o.createElement("div",{className:["config-item","coin",p&&p.coin?"active":""].join(" ")},o.createElement("div",null,o.createElement("input",{id:n+"coin",type:"checkbox",checked:!!p&&!!p.coin,onChange:()=>d(n,"coin",!(p&&p.coin),p&&p.coinNumber||2)}),o.createElement("label",{htmlFor:n+"coin"},"\u6295\u5e01")),o.createElement("input",{className:"coin-number",type:"number",max:2,min:1,step:1,value:p&&p.coinNumber||2,onChange:E}),"\u679a"),o.createElement("div",{className:["config-item","collect",p&&p.collect?"active":""].join(" ")},o.createElement("input",{id:n+"collect",type:"checkbox",checked:!!p&&!!p.collect,onChange:S}),o.createElement("label",{htmlFor:n+"collect"},"\u6536\u85cf")," \u81f3",o.createElement("select",{className:"collection-id",onChange:y,value:p?p.collectionId:g?g[0]:null},g.length>0?g.map(e=>o.createElement("option",{key:e.id,value:e.id},e.title)):o.createElement("option",null,"\u6ca1\u6709\u6570\u636e"))))))};class it extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{uidList:new(Be()),attentionList:[],searchModalOn:!1,followModalOn:!1,searching:!1,searchResult:{},collectionList:[],autoLikeCoinCollectConfigMap:new(Fe())}),(0,c.Z)(this,"searchResultListRef",o.createRef()),(0,c.Z)(this,"fetchPassword",void 0),(0,c.Z)(this,"searching",!1),(0,c.Z)(this,"updateAccountList",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},e=>{e&&this.setState({attentionList:e,uidList:new(Be())(e.map(({uid:e})=>e))})}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},e=>{e&&this.setState({collectionList:e})})}),(0,c.Z)(this,"handleOnClickOpenSearchModal",()=>{const{uidList:e}=this.state;if(20===e.size)return I.Message.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");this.setState({searchModalOn:!0})}),(0,c.Z)(this,"handleOnClickCloseSearchModal",()=>{this.setState({searchModalOn:!1})}),(0,c.Z)(this,"handleOnClickOpenFollowModal",()=>{const{uidList:e}=this.state;if(20===e.size)return I.Message.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");this.setState({followModalOn:!0})}),(0,c.Z)(this,"handleOnClickCloseFollowModal",()=>{this.setState({followModalOn:!1})}),(0,c.Z)(this,"handleOnCreateUserSpaceTab",e=>{this.createTab("https://space.bilibili.com/"+e)}),(0,c.Z)(this,"handleOnAddSpecialAttention",e=>{const{uidList:t}=this.state;if(20===t.size)return I.Message.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:e},t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:n}=this.state;n.add(e),this.setState({uidList:n},()=>{const{attentionList:e}=this.state;e.push(t),this.setState({attentionList:e})})}})}),(0,c.Z)(this,"handleOnRemoveSpecialAttention",e=>{chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:+e},t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:t}=this.state;t.delete(+e),this.setState({uidList:t},()=>{const{attentionList:t}=this.state,n=t.findIndex(t=>+t.uid===+e);n>=0&&(t.splice(n,1),this.setState({attentionList:t}))})}}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"removeUserConfig",uid:e},t=>{if(t){this.context.uploadSettings("autoLikeCoinCollect");const{autoLikeCoinCollectConfigMap:t}=this.state;t.has(+e)&&(t.delete(+e),this.setState({autoLikeCoinCollectConfigMap:t}))}})}),(0,c.Z)(this,"handleOnClickAttentionBtn",e=>{const t=this.state.uidList.has(e);t?this.handleOnRemoveSpecialAttention(e):this.handleOnAddSpecialAttention(e)}),(0,c.Z)(this,"handleOnMoveAccount",(e,t)=>{const{uidList:n,attentionList:a}=this.state,i=Re()(n),o=i[e];i.splice(e,1),i.splice(t,0,o);const s=a[e];a.splice(e,1),a.splice(t,0,s),this.setState({uidList:new(Be())(i),attentionList:a})}),(0,c.Z)(this,"handleOnDropAccount",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"setSpecialAttentionList",uidList:this.state.uidList},()=>{this.context.uploadSettings("specialAttention")})}),(0,c.Z)(this,"updateAutoLikeCoinCollectConfigMap",(e,t)=>{const{autoLikeCoinCollectConfigMap:n}=this.state;n.set(e,t),this.setState({autoLikeCoinCollectConfigMap:n},()=>{this.context.uploadSettings("autoLikeCoinCollect")})}),(0,c.Z)(this,"handleOnClickAutoLikeCoinCollect",(e,t,n,a)=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"setFeatureConfig",uid:e,type:t,value:n,extraValue:a},a=>{if(a){const{autoLikeCoinCollectConfigMap:a}=this.state;let i=a.get(e);i?n?i[t]=n:(delete i[t],"coin"===t?delete i.coinNumber:"collect"===t&&delete i.collectionId):i={[t]:n},this.updateAutoLikeCoinCollectConfigMap(e,i)}})})}componentDidMount(){this.updateAccountList(),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},e=>(e&&this.setState({autoLikeCoinCollectConfigMap:new(Fe())(e)}),!0))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{uidList:e,searchModalOn:t,followModalOn:n,attentionList:a,autoLikeCoinCollectConfigMap:i,collectionList:s}=this.state,{hasLogin:l,bilibiliAccount:r}=this.context;return o.createElement(tt,null,o.createElement(_,{title:"\u7279\u522b\u5173\u6ce8\u8bbe\u7f6e",description:"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u4f1a\u4e3b\u52a8\u63a8\u9001\u5728\u7279\u522b\u5173\u6ce8\u5217\u8868\u4e2d\u7528\u6237\u7684\u52a8\u6001\u5185\u5bb9\uff0c\u4e5f\u7528\u4e8e\u5728\u6269\u5c55\u7a97\u53e3\u4e2d\u5feb\u6377\u6d4f\u89c8"}),o.createElement(V,{title:"\u7279\u522b\u5173\u6ce8\u5217\u8868\u7ba1\u7406",description:"\u7279\u522b\u5173\u6ce8\u7684UP\u4e3b\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},o.createElement(Q,{title:o.createElement(o.Fragment,null,"\u5df2\u6dfb\u52a0\u5217\u8868",a&&a.length>0?o.createElement("span",null,"(",a.length+"/20",")"):null),description:"\u62d6\u52a8\u5217\u8868\u9879\u76ee\u53ef\u4ee5\u6392\u5e8f",hasLogin:l,active:l,toolbar:o.createElement(o.Fragment,null,o.createElement(I.Button,{disabled:a.length>=20||!l,disableEvent:!1,className:"add-btn follow",onClick:this.handleOnClickOpenFollowModal},"\u4ece\u5173\u6ce8\u5217\u8868\u6dfb\u52a0"),o.createElement(I.Button,{disabled:a.length>=20||!l,disableEvent:!1,className:"add-btn search",onClick:this.handleOnClickOpenSearchModal},"\u641c\u7d22\u6dfb\u52a0")),helperArea:o.createElement(o.Fragment,null,"\u9700\u767b\u5f55",o.createElement(I.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u548c",o.createElement(I.Icon,{size:16,icon:"bilibilihelper"}),"\u8d26\u53f7",o.createElement("br",null),o.createElement("br",null),"\u6dfb\u52a0\u4e3a\u7279\u522b\u5173\u6ce8\u540e\u53ef\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e00\u952e\u4e09\u8fde\u529f\u80fd\uff0c\u80fd\u591f\u5206\u522b\u6307\u5b9a\u70b9\u8d5e\u3001\u6295\u5e01\u6570\u91cf\u548c\uff08\u6216\uff09\u6536\u85cf\u7684\u6536\u85cf\u5939")},o.createElement(Je.W,{backend:et.PD},o.createElement("div",{className:"added-list"},a.map((e,t)=>o.createElement(at,(0,Le.Z)({key:e.uid},e,{index:t,onClickUserName:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:this.handleOnClickAttentionBtn,onDragMove:this.handleOnMoveAccount,onDrop:this.handleOnDropAccount,autoLikeCoinCollectConfig:i.get(e.uid),handleOnClickAutoLikeCoinCollect:this.handleOnClickAutoLikeCoinCollect,collectionList:s}))),0===a.length?"\u6ca1\u6709\u5185\u5bb9":null)))),o.createElement(Ye,{modalOn:t,title:"\u641c\u7d22\u6dfb\u52a0\u300c\u52a9\u624b\u7684\u7279\u522b\u5173\u6ce8\u300d",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseSearchModal}),o.createElement($e,{modalOn:n,title:"\u4ece\u300c\u5df2\u5173\u6ce8\u5217\u8868\u300d\u6dfb\u52a0\u300c\u52a9\u624b\u7684\u7279\u522b\u5173\u6ce8\u300d",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseFollowModal,bilibiliAccount:this.context.bilibiliAccount}),o.createElement(J,{show:!l||!r},"\u8be5\u9875\u9762\u529f\u80fd\u9700\u8981\u60a8\u540c\u65f6\u767b\u5f55",o.createElement(I.Icon,{icon:"bilibili",size:16}),"\u8d26\u53f7\u548c",o.createElement(I.Icon,{icon:"bilibilihelper",size:16}),"\u8d26\u53f7"))}}(0,c.Z)(it,"contextType",z);const ot=(0,N.EN)(it);var st=n(18433),lt=n.n(st);const rt=["index","children","onDragMove","onDrop"],ct=["needLogin","description"];function ht(e,t){var n=v()(e);if(E()){var a=E()(e);t&&(a=a.filter((function(t){return y()(e,t).enumerable}))),n.push.apply(n,a)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ht(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):x()?M()(e,x()(n)):ht(Object(n)).forEach((function(t){A()(e,t,y()(n,t))}))}return e}const dt=p["default"].div`
  .list-wrapper {
    //max-width: 700px;
    margin-bottom: 22px;

    .add-btn {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    .list {
      .list-item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 28px;

        & > span {

          &:first-of-type {
            width: 80px;
            flex-shrink: 0;
          }

          &:nth-child(2) {
            width: 70px;
          }
        }

        .url {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex-grow: 1;
        }

        .action-box {
          display: flex;
          margin-left: 12px;

          .button {
            margin-right: 12px;

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  .menu-editing-modal {
    width: 500px;

    .modal-body {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 16px;

        &:last-of-type {
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
          margin-bottom: 2px;
        }

        input {
          width: calc(100% - 22px);
          padding: 6px 10px;
          outline: none;
        }
      }
    }

    .btn-group {
      .button {
        margin-left: 12px;

        &:first-of-type {
          margin-left: 0;
        }
      }

      .confirm {
        background-color: var(--bilibili-blue);
        color: var(--bilibili-gray);
      }
    }
  }

  .range-section {
    .body {
      .resize-change-range {
        display: inline-block;
        width: 100px;
        font-size: 14px;
      }

      .range {
        width: 210px;
        vertical-align: sub;
      }
    }
  }
`,gt=function(e){let{index:t,children:n,onDragMove:a,onDrop:i}=e,s=(0,U.Z)(e,rt);const l=o.useRef(null),[,r]=(0,qe.L)({accept:"sortable-list-item",hover(e,n){if(!l.current)return;const i=e.index,o=t;if(i===o)return;const s=l.current.getBoundingClientRect(),r=(s.bottom-s.top)/2,c=n.getClientOffset(),h=c.y-s.top;i<o&&h<r||i>o&&h>r||(a(i,o),e.index=o)}}),[{isDragging:c},h]=(0,Xe.c)({item:{type:"sortable-list-item",index:t},collect:e=>({isDragging:e.isDragging()}),end(){i()}});return h(r(l)),o.createElement("div",(0,Le.Z)({className:"sortable-list-item",ref:l,style:{opacity:c?0:1}},s),n)},ut=function({index:e,info:t,onEditMenu:n,onDeleteMenu:a,onDragMove:i,onDrop:s}){const l=o.useCallback(()=>{n(pt({index:e},t))},[t]),r=o.useCallback(()=>{a(e)},[e]);return o.createElement(gt,{className:"list-item",index:e,onDragMove:i,onDrop:s},o.createElement("span",null,t.title),o.createElement("span",{className:"url"},t.url),o.createElement("span",{className:"action-box"},o.createElement(I.Button,{onClick:l},"\u7f16\u8f91"),o.createElement(I.Button,{onClick:r},"\u5220\u9664")))};class mt extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{sectionShow:[],showTag:!0,resizeRate:1,videoOpenMethod:"direct",activeIfExist:!1,temporaryShowLatestSection:!1,homeContentType:"default",homeShowCarousel:!0,homeOpenMethod:"recentVideo",homeShowLiveBar:!0,homeVideoType:"recentVideo",liveOpenMethod:"direct",options:[],custom:[],openEditModal:!1,modalState:"add",editingInfo:{index:"",title:"",url:""},columns:1,videoCardType:"simple"}),(0,c.Z)(this,"sectionOrderChanged",!1),(0,c.Z)(this,"systemMenuOrderChanged",!1),(0,c.Z)(this,"customMenuOrderChanged",!1),(0,c.Z)(this,"menuInputCompositionStart",!1),(0,c.Z)(this,"menuTitleInputRef",o.createRef()),(0,c.Z)(this,"menuUrlInputRef",o.createRef()),(0,c.Z)(this,"handleOnSetResizeRate",e=>{e.persist();const t=+e.target.value;this.setState({resizeRate:t},()=>{chrome.runtime.sendMessage({target:"popup",event:"setSetting",resizeRate:t},()=>{this.context.uploadSettings("popup")})})}),(0,c.Z)(this,"handleOnClickSectionShow",(e,t)=>{const{sectionShow:n}=this.state,a=[...n],i=n.find(({key:t})=>t===e);i.on=t,chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:a},e=>{e&&(this.context.uploadSettings("popupMain"),this.setState({sectionShow:a}))})}),(0,c.Z)(this,"handleOnClickTagShow",()=>{const{showTag:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",showTag:!e},t=>{t&&(this.context.uploadSettings("popupMain"),this.setState({showTag:!e}))})}),(0,c.Z)(this,"handleOnClickTemporaryShowLatestSection",()=>{const{temporaryShowLatestSection:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",temporaryShowLatestSection:!e},t=>{t&&(this.context.uploadSettings("popupMain"),this.setState({temporaryShowLatestSection:!e}))})}),(0,c.Z)(this,"handleOnMouseUpResizeRate",e=>{e.persist()}),(0,c.Z)(this,"handleOnSetColumns",e=>{const{columns:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",columns:+e},()=>{this.context.uploadSettings("popupMain"),this.setState({columns:+e})})}),(0,c.Z)(this,"handleOnSetVideoCardType",e=>{const{videoCardType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoCardType:e},()=>{this.context.uploadSettings("popupMain"),this.setState({videoCardType:e})})}),(0,c.Z)(this,"handleOnSetActiveIfExist",()=>{const{activeIfExist:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",activeIfExist:!e},()=>{this.context.uploadSettings("popupMain"),this.setState({activeIfExist:!e})})}),(0,c.Z)(this,"handleOnSetVideoOpenMethod",e=>{this.state.videoOpenMethod!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoOpenMethod:e},()=>{this.context.uploadSettings("popupMain"),this.setState({videoOpenMethod:e})})}),(0,c.Z)(this,"handleOnSetHomeVideoType",e=>{this.state.homeVideoType!==e&&chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",videoType:e},()=>{this.context.uploadSettings("mainHome"),chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.setState({homeVideoType:e})})}),(0,c.Z)(this,"handleOnSetHomeShowLiveBar",()=>{chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",showLiveBar:!this.state.homeShowLiveBar},()=>{this.context.uploadSettings("mainHome"),this.setState({homeShowLiveBar:!this.state.homeShowLiveBar})})}),(0,c.Z)(this,"updateMenuList",()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"getMenuList"},e=>{e&&this.setState(e)})}),(0,c.Z)(this,"handleOnClickSystemMenu",(e,t)=>{chrome.runtime.sendMessage({target:"popupMenu",event:"setSystemMenuState",key:e,on:t},e=>{this.context.uploadSettings("popupMenu"),e&&this.updateMenuList()})}),(0,c.Z)(this,"handleOnCreateNewMenu",()=>{const{custom:e}=this.state,{bhAccount:t}=this.context;return!(lt()(e).length>=10&&lt()(e).length<=10)||t&&t.isVIP?lt()(e).length>=10?I.Message.info("\u81ea\u5b9a\u4e49\u5bfc\u822a\u6700\u591a\u53ea\u80fd\u52a010\u6761\uff0c\u672a\u6765\u4f1a\u5f00\u653e\u66f4\u9ad8\u4e0a\u9650"):void this.setState({openEditModal:!0,modalState:"add",editingInfo:{index:e.length,title:"",url:""}}):this.context.handleOnClickShowPaymentModal()}),(0,c.Z)(this,"handleOnEditMenu",({index:e,title:t,url:n})=>{this.setState({openEditModal:!0,modalState:"edit",editingInfo:{index:e,title:t,url:n}})}),(0,c.Z)(this,"handleOnCloseModal",()=>{this.setState({openEditModal:!1})}),(0,c.Z)(this,"handOnConfirmUpdateMenu",()=>{const{editingInfo:e,modalState:t,custom:n}=this.state;e.title&&e.url&&new(i())((a,i)=>{if("add"===t){const t=n.find(({title:t})=>t===e.title);t&&0!==t.length?i():a()}else a()}).then(()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"updateCustomMenu",index:e.index,title:e.title,url:e.url},e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList(),this.setState({openEditModal:!1}))})})}),(0,c.Z)(this,"handleOnDeleteCustomMenu",e=>{chrome.runtime.sendMessage({target:"popupMenu",event:"deleteCustomMenu",index:e},e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList())})}),(0,c.Z)(this,"onChangeTitle",e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.title=e.target.value:t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})}),(0,c.Z)(this,"onTitleCompositionStart",()=>{this.menuInputCompositionStart=!0}),(0,c.Z)(this,"onTitleCompositionEnd",e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})}),(0,c.Z)(this,"onChangeURL",e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.url=e.target.value:t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})}),(0,c.Z)(this,"onURLCompositionStart",()=>{this.menuInputCompositionStart=!0}),(0,c.Z)(this,"onURLCompositionEnd",e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})}),(0,c.Z)(this,"onDragMoveSection",(e,t)=>{if(e!==t){this.sectionOrderChanged=!0;const{sectionShow:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({sectionShow:n})}}),(0,c.Z)(this,"onDropSection",()=>{this.sectionOrderChanged&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:this.state.sectionShow},()=>{this.sectionOrderChanged=!1,this.context.uploadSettings("popupMain")})}),(0,c.Z)(this,"onDragMoveSystemMenu",(e,t)=>{if(e!==t){this.systemMenuOrderChanged=!0;const{options:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({options:n})}}),(0,c.Z)(this,"onDropSystemMenu",()=>{this.systemMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setOptionsMenuList",list:this.state.options},()=>{this.systemMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")})}),(0,c.Z)(this,"onDragMoveCustomMenu",(e,t)=>{if(e!==t){this.customMenuOrderChanged=!0;const{custom:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({custom:n})}}),(0,c.Z)(this,"onDropCustomMenu",()=>{this.customMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setCustomMenuList",list:this.state.custom},()=>{this.customMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")})})}componentDidMount(){chrome.runtime.sendMessage({target:"popup",event:"getSetting"},({resizeRate:e})=>{this.setState({resizeRate:e})}),chrome.runtime.sendMessage({target:"mainHome",event:"getSetting"},({contentType:e,openMethod:t,showCarousel:n,showLiveBar:a,videoType:i})=>{this.setState({homeContentType:e,homeOpenMethod:t,homeShowCarousel:n,homeShowLiveBar:a,homeVideoType:i})}),chrome.runtime.sendMessage({target:"mainLive",event:"getSetting"},({openMethod:e})=>{this.setState({liveOpenMethod:e})}),chrome.runtime.sendMessage({target:"popupMain",event:"getSetting"},({columns:e,videoCardType:t,sectionShow:n,showTag:a,videoOpenMethod:i,activeIfExist:o,temporaryShowLatestSection:s})=>{this.setState({columns:e,videoCardType:t,sectionShow:n,showTag:a,videoOpenMethod:i,activeIfExist:o,temporaryShowLatestSection:s})}),this.updateMenuList()}render(){const{resizeRate:e,sectionShow:t,videoOpenMethod:n,activeIfExist:a,showTag:i,homeOpenMethod:s,homeVideoType:l,homeShowLiveBar:r,homeShowCarousel:c,liveOpenMethod:h,options:p,custom:d,openEditModal:g,modalState:u,editingInfo:m,columns:b,videoCardType:f,temporaryShowLatestSection:v}=this.state,{hasLogin:C,bhAccount:E={}}=this.context,S=!!E&&E["isVIP"],y=t.reduce((e,{on:t})=>(e+=t?1:0,e),0);return o.createElement(dt,null,o.createElement(_,{title:"\u5e94\u7528\u7a0b\u5e8f\u5f39\u7a97\u8bbe\u7f6e"}),o.createElement(V,{title:"\u6269\u5c55\u5f39\u7a97\u901a\u7528\u8bbe\u7f6e"},o.createElement(Q,{className:"range-section",title:"\u7a97\u53e3\u7f29\u653e\u6bd4\u4f8b\u8c03\u8282",description:"\u70b9\u51fb\u540e\u53ef\u4ee5\u5de6\u53f3\u65b9\u5411\u952e\u8c03\u8282\uff0c\u9ed8\u8ba41x",helperArea:"\u5c06\u6269\u5c55\u5f39\u7a97\u8c03\u6574\u5230\u559c\u6b22\u7684\u5927\u5c0f"},o.createElement("div",null,o.createElement("span",{className:"resize-change-range"},e,"x"),o.createElement(I.Range,{value:e,max:3,min:.1,step:.02,onChange:this.handleOnSetResizeRate}))),o.createElement(Q,{title:"5\u5206\u949f\u5185\u5c55\u793a\u4e0a\u4e00\u6b21\u67e5\u770b\u7684\u677f\u5757",toolbar:o.createElement(R.tc,{onClick:this.handleOnClickTemporaryShowLatestSection,on:v})})),o.createElement(V,{title:"\u677f\u5757\u901a\u7528\u8bbe\u7f6e"},o.createElement(Q,{title:"\u76f4\u63a5\u8df3\u8f6c\u5230\u5df2\u5b58\u5728\u7684\u9875\u9762",toolbar:o.createElement(R.tc,{onClick:this.handleOnSetActiveIfExist,on:a}),helperArea:"\u6682\u65f6\u65e0\u6cd5\u5904\u7406\u76f4\u64ad\u95f4\u77ed\u53f7\u81ea\u52a8\u91cd\u5b9a\u5411\u5bfc\u81f4\u7684\u91cd\u590d\u6253\u5f00\u95ee\u9898"}),o.createElement(Q,{title:"\u89c6\u9891\u5361\u7247\u663e\u793a\u4e3b\u9898\u6807\u7b7e",toolbar:o.createElement(R.tc,{onClick:this.handleOnClickTagShow,on:i})}),o.createElement(Q,{title:"\u5185\u5bb9\u5c55\u793a\u5217\u6570"},o.createElement(R.SY,{value:b,data:[{key:1,title:"\u4e00\u5217\u5e03\u5c40"},{key:2,title:"\u4e24\u5217\u5e03\u5c40"}],onClick:this.handleOnSetColumns})),o.createElement(Q,{title:"\u89c6\u9891\u5361\u7247\u98ce\u683c"},o.createElement(R.SY,{value:f,data:[{key:"simple",title:"\u7cbe\u7b80\u7684\u89c6\u9891\u5217\u8868\uff0c\u53ea\u6709\u6807\u9898\u3001UP\u4e3b\u548c\u8f83\u5c0f\u7684\u5c01\u9762"},{key:"old",title:"\u7b80\u7ea6\u89c6\u9891\u5361\u7247\uff0c\u6807\u9898\u548c\u5c01\u9762\u4e00\u4f53\u5f0f\u5c55\u793a"},{key:"new",title:"\u8be6\u7ec6\u89c6\u9891\u5361\u7247\uff0c\u6807\u9898\u4e0e\u5c01\u9762\u5206\u79bb"}],onClick:this.handleOnSetVideoCardType})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u6253\u5f00\u65b9\u5f0f"),isVIP:S,active:S,needVIP:!0,hasLogin:C,helperArea:o.createElement("b",null,"\u8be5\u9009\u9879\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e2d\u53ea\u80fd\u56fa\u5b9a\u4e3a\u300c\u9759\u9ed8\u6253\u5f00\u300d\u65b9\u5f0f")},o.createElement(R.SY,{value:S?n:"direct",data:[{key:"direct",title:"\u76f4\u63a5\u6253\u5f00"},{key:"silent",title:"\u9759\u9ed8\u6253\u5f00",description:"\u5728\u6269\u5c55\u5f39\u7a97\u6253\u5f00\u7f51\u9875\u65f6\u7a97\u53e3\u4ecd\u4fdd\u6301\u6253\u5f00"}],onClick:this.handleOnSetVideoOpenMethod})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u53ef\u9009\u677f\u5757"),description:"\u81f3\u5c11\u9009\u62e9\u4e24\u4e2a\u677f\u5757",columns:1,isVIP:S,needVIP:!0,active:S,hasLogin:C,helperArea:o.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f")},o.createElement(Je.W,{backend:et.PD},t.map(({key:e,on:t,toggle:n=!0},a)=>o.createElement(gt,{key:e,index:a,onDragMove:this.onDragMoveSection,onDrop:this.onDropSection},o.createElement(R.HC,{key:e,title:(0,F.__)("popupMain_"+e),onClick:()=>y<=2&&t?null:this.handleOnClickSectionShow(e,!t),frontOperation:o.createElement(R.Np,{active:t,disabled:y<=2&&t})})))))),o.createElement(V,{title:"\u7efc\u5408\u677f\u5757\u8bbe\u7f6e"},o.createElement(Q,{title:"\u9ed8\u8ba4\u663e\u793a\u5206\u7c7b"},o.createElement(R.SY,{value:l||"recentVideo",data:[{key:"home",title:"\u9996\u9875\u70ed\u95e8",description:"\u9996\u9875\u7f6e\u9876\u548c\u7efc\u5408\u70ed\u95e8\u89c6\u9891"},{key:"recentVideo",title:"\u6700\u8fd1\u6295\u7a3f"}],onClick:this.handleOnSetHomeVideoType})),o.createElement(Q,{title:"\u5c55\u793a\u76f4\u64ad\u680f",toolbar:o.createElement(R.tc,{onClick:this.handleOnSetHomeShowLiveBar,on:r})})),o.createElement(V,{title:"\u5bfc\u822a\u680f\u8bbe\u7f6e"},o.createElement("div",{className:"list-wrapper system"},o.createElement(Q,{title:"\u7cfb\u7edf\u9884\u8bbe",columns:1,helperArea:o.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f")},o.createElement(Je.W,{backend:et.PD},p.map(e=>{let{needLogin:t,description:n=""}=e,a=(0,U.Z)(e,ct);return pt(pt({},a),{},{description:n+(t?" \u9700\u8981\u767b\u5f55":"")})}).map((e,t)=>{const{key:n,title:a=null,description:i=null,on:s=!1,toggle:l=!0}=e,r={};return r.frontOperation=o.createElement(R.Np,{disabled:!l,active:s?1:0}),o.createElement(gt,{key:n,index:t,onDragMove:this.onDragMoveSystemMenu,onDrop:this.onDropSystemMenu},o.createElement(R.HC,(0,Le.Z)({title:a,description:i,onClick:!!l&&(()=>this.handleOnClickSystemMenu(n,!s))},r)))})))),o.createElement("div",{className:"list-wrapper custom"},o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u81ea\u5b9a\u4e49\u5bfc\u822a (",lt()(d).length,"/",S?10:5,")"),toolbar:o.createElement(I.Button,{className:"add-btn",onClick:this.handleOnCreateNewMenu},"\u6dfb\u52a0"),helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f"),o.createElement("br",null),o.createElement("br",null))},o.createElement("div",{className:"list"},o.createElement(Je.W,{backend:et.PD},lt()(d).map((e,t)=>o.createElement(ut,{index:t,key:e.title,info:e,onEditMenu:this.handleOnEditMenu,onDeleteMenu:this.handleOnDeleteCustomMenu,onDragMove:this.onDragMoveCustomMenu,onDrop:this.onDropCustomMenu}))))))),o.createElement(I.Modal,{open:g,className:"menu-editing-modal",title:"add"===u?"\u65b0\u589e\u5feb\u6377\u5bfc\u822a":"\u7f16\u8f91\u5feb\u6377\u5bfc\u822a",onClickMask:this.handleOnCloseModal,buttons:o.createElement("div",{className:"btn-group"},o.createElement(I.Button,{onClick:this.handleOnCloseModal},"\u53d6\u6d88"),o.createElement(I.Button,{className:"confirm",onClick:this.handOnConfirmUpdateMenu},"\u786e\u8ba4"))},o.createElement("label",{from:"title"},o.createElement("p",null,"\u5bfc\u822a\u6807\u9898 (\u4e0d\u957f\u4e8e10\u4e2a\u5b57\u7b26)"),o.createElement(Ue.I,{id:"title",ref:this.menuTitleInputRef,onChange:this.onChangeTitle,onCompositionStart:this.onTitleCompositionStart,onCompositionEnd:this.onTitleCompositionEnd,placeholder:"\u4e0d\u80fd\u91cd\u590d, \u4e0d\u5927\u4e8e4\u4e2a\u4e2d\u6587\u6c49\u5b57\u5bbd\u5ea6",value:m.title})),o.createElement("label",{from:"url"},o.createElement("p",null,"\u8df3\u8f6c\u5730\u5740 (\u4e0d\u957f\u4e8e256\u4e2a\u5b57\u7b26)"),o.createElement(Ue.I,{id:"url",ref:this.menuUrlInputRef,onChange:this.onChangeURL,onCompositionStart:this.onURLCompositionStart,onCompositionEnd:this.onURLCompositionEnd,placeholder:"\u8f93\u5165\u5bfc\u822a\u680f\u8df3\u8f6c\u7684\u76ee\u6807\u94fe\u63a5",value:m.url}))))}}(0,c.Z)(mt,"contextType",z);const bt=(0,N.EN)(mt);var ft=n(11700),vt=n.n(ft);const Ct=p["default"].div`
  .input-section {
    .body {
      .rename-wrapper, .aria2c-wrapper {
        display: flex;
        margin-bottom: 12px;

        label {
          margin-right: 12px;
          display: inline-block;
          flex-shrink: 0;
          width: fit-content;
          line-height: 32px;
          font-size: 14px;
        }

        .rename-input, .aria3c-input {
          flex-grow: 1;
          padding: 6px 10px;
        }

        .button {
          margin-left: 8px;
          flex-shrink: 0;
        }
      }
    }
  }
`;class Et extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{renameOn:!1,videoFilename:"",newVideoFilename:"",videoCoverFilename:"",newVideoCoverFilename:"",videoScreenshotFilename:"",newVideoScreenshotFilename:"",videoDanmuFilename:"",newVideoDanmuFilename:"",audioFilename:"",newAudioFilename:"",subtitleFilename:"",newSubtitleFilename:"",liveScreenshotFilename:"",newLiveScreenshotFilename:"",aria2cOn:!1,aria2cProtocol:"http",aria2cHost:"localhost",newAria2cHost:"localhost",aria2cPort:6800,newAria2cPort:6800,aria2cPath:"jsonrpc",newAria2cPath:"jsonrpc",aria2cSecret:"",newAria2cSecret:""}),(0,c.Z)(this,"handleOnChangeRenameInput",(e,t)=>{this.setState({[`new${vt()(e)}Filename`]:t.target.value})}),(0,c.Z)(this,"handleOnClickChangeRenameButton",e=>{const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.handleOnClickShowPaymentModal();const n=this.state[`new${vt()(e)}Filename`];chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",[e+"Filename"]:n},()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({[e+"Filename"]:n})})}),(0,c.Z)(this,"handleOnClickRenameOn",()=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",on:!this.state.renameOn},()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({renameOn:!this.state.renameOn})})}),(0,c.Z)(this,"handleOnChangeAria2cInput",(e,t)=>{this.setState({["newAria2c"+vt()(e)]:t.target.value})}),(0,c.Z)(this,"handleOnClickChangeAria2cButton",e=>{const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.handleOnClickShowPaymentModal();const n=this.state["newAria2c"+vt()(e)];chrome.runtime.sendMessage({target:"aria2c",event:"setSetting",[e]:n},()=>{this.context.uploadSettings("aria2c"),this.setState({["aria2c"+vt()(e)]:n})})}),(0,c.Z)(this,"handleOnSelectProtocol",e=>{chrome.runtime.sendMessage({target:"aria2c",event:"setSetting",protocol:e},()=>{this.context.uploadSettings("aria2c"),this.setState({["aria2cProtocol"]:e},()=>{})})}),(0,c.Z)(this,"handleOnClickAria2cOn",()=>{const{bhAccount:e,hasLogin:t}=this.context;if(!t||!e||!e.isVIP)return this.context.handleOnClickShowPaymentModal();chrome.runtime.sendMessage({target:"aria2c",event:"setSetting",on:!this.state.aria2cOn},()=>{this.context.uploadSettings("aria2c"),this.setState({aria2cOn:!this.state.aria2cOn})})})}componentDidMount(){chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},e=>{this.setState({renameOn:e.on,videoFilename:e.videoFilename,newVideoFilename:e.videoFilename,videoCoverFilename:e.videoCoverFilename,newVideoCoverFilename:e.videoCoverFilename,videoScreenshotFilename:e.videoScreenshotFilename,newVideoScreenshotFilename:e.videoScreenshotFilename,videoDanmuFilename:e.videoDanmuFilename,newVideoDanmuFilename:e.videoDanmuFilename,subtitleFilename:e.subtitleFilename,newSubtitleFilename:e.subtitleFilename,audioFilename:e.audioFilename,newAudioFilename:e.audioFilename,liveScreenshotFilename:e.liveScreenshotFilename,newLiveScreenshotFilename:e.liveScreenshotFilename})}),chrome.runtime.sendMessage({target:"aria2c",event:"getSetting"},e=>{this.setState({aria2cOn:e.on,aria2cProtocol:e.protocol,aria2cHost:e.host,newAria2cHost:e.host,aria2cPort:e.port,newAria2cPort:e.port,aria2cPath:e.path,newAria2cPath:e.path,aria2cSecret:e.secret,newAria2cSecret:e.secret})})}render(){const{renameOn:e,videoFilename:t,newVideoFilename:n,videoCoverFilename:a,newVideoCoverFilename:i,videoScreenshotFilename:s,newVideoScreenshotFilename:l,videoDanmuFilename:r,newVideoDanmuFilename:c,subtitleFilename:h,newSubtitleFilename:p,audioFilename:d,newAudioFilename:g,liveScreenshotFilename:u,newLiveScreenshotFilename:m,aria2cOn:b,aria2cProtocol:f,aria2cHost:v,newAria2cHost:C,aria2cPort:E,newAria2cPort:S,aria2cPath:y,newAria2cPath:w,aria2cSecret:x,newAria2cSecret:k}=this.state,{hasLogin:M,bhAccount:O}=this.context,A=!!O&&O.isVIP;return o.createElement(Ct,null,o.createElement(_,{title:"\u4e0b\u8f7d\u8bbe\u7f6e"}),o.createElement(V,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u81ea\u5b9a\u4e49\u4e0b\u8f7d\u6587\u4ef6\u540d"),active:e},o.createElement(Q,{className:"input-section",hasLogin:M,isVIP:A,needVIP:!0,helperArea:o.createElement(o.Fragment,null,"\u53ef\u4f7f\u7528\u5173\u952e\u8bcd\uff1a",o.createElement("br",null),"\u89c6\u9891/\u76f4\u64ad\u95f4\u6807\u9898\uff1a ",o.createElement("b",null,"__TITLE__"),o.createElement("br",null),"\u89c6\u9891\u9009\u96c6\u6807\u9898\uff1a",o.createElement("b",null,"__SUBTITLE__"),o.createElement("br",null),"\u89c6\u9891\u524d\u7f6e\u6807\u9898\uff1a",o.createElement("b",null,"__PRE_TITLE__"),"\uff08\u5982\uff1aP2\uff0c\u7b2c\u51e0\u96c6\uff09",o.createElement("br",null),"\u89c6\u9891\u9009\u96c6\u5e8f\u53f7\uff1a",o.createElement("b",null,"__PN__"),o.createElement("br",null),"\u89c6\u9891aid\uff1a ",o.createElement("b",null,"__AID__"),o.createElement("br",null),"\u89c6\u9891cid\uff1a ",o.createElement("b",null,"__CID__"),o.createElement("br",null),"\u89c6\u9891bvid\uff1a ",o.createElement("b",null,"__BVID__"),o.createElement("br",null),"\u89c6\u9891\u53d1\u5e03\u65f6\u95f4\uff1a ",o.createElement("b",null,"__TIME__"),o.createElement("br",null),"\u89c6\u9891\u53d1\u5e03\u65e5\u671f\uff1a ",o.createElement("b",null,"__DATE__"),o.createElement("br",null),"\u89c6\u9891\u753b\u8d28\u4ee3\u53f7\uff1a ",o.createElement("b",null,"__QUALITY__"),o.createElement("br",null),"\u89c6\u9891\u4e0a\u4f20\u8005\u6635\u79f0\uff1a ",o.createElement("b",null,"__UPPER__"),o.createElement("br",null),"\u89c6\u9891\u4e0a\u4f20\u8005UID\uff1a ",o.createElement("b",null,"__UID__"),o.createElement("br",null),"\u5b57\u5e55\u8bed\u8a00\uff1a ",o.createElement("b",null,"__LANG__"),o.createElement("br",null),o.createElement("br",null),"\u76f4\u64ad\u95f4ID\uff1a ",o.createElement("b",null,"__ROOM_ID__"),o.createElement("br",null),o.createElement("br",null),"\u5f53\u524d\u65e5\u671f\uff1a ",o.createElement("b",null,"__NOW_DATE__"),o.createElement("br",null),"\u5f53\u524d\u65f6\u95f4\uff1a ",o.createElement("b",null,"__NOW_TIME__"),o.createElement("br",null),o.createElement("br",null),"\u6269\u5c55\u540d\uff1a ",o.createElement("b",null,"__FORMAT__"),o.createElement("br",null),o.createElement("br",null),"\u9ed8\u8ba4\u4e3a\uff1a__TITLE__.__CID__.__FORMAT__",o.createElement("br",null),"\u6ce8\u610f\uff1a\u5173\u952e\u8bcd\u5fc5\u987b\u4e3a\u5927\u5199\u548c\u4e0b\u5212\u7ebf\u7ec4\u6210\u7684\u5b8c\u6574\u9884\u8bbe\u540d\u79f0",o.createElement("br",null),o.createElement("br",null),"\u547d\u540d\u4e2d\u53ef\u4f7f\u7528\u5173\u952e\u8bcd\u81ea\u7531\u7ec4\u5408\uff0c\u5982\uff1a",o.createElement("br",null),"video-__AID__.__TITLE__-\u5c0f\u5f20\u7684\u89c6\u9891.__FORMAT__",o.createElement("br",null),o.createElement("br",null),"\u4e0a\u8ff0\u4f8b\u5b50\u4f1a\u5f97\u5230\u5982\u300c",o.createElement("b",null,"video-123456.\u793a\u4f8b\u6807\u9898-\u5c0f\u5f20\u7684\u89c6\u9891.flv"),"\u300d\u8fd9\u6837\u7684\u547d\u540d",o.createElement("br",null),"\u5176\u4e2d __AID__ \u2192 123456\uff0c__TITLE__ \u2192 \u793a\u4f8b\u6807\u9898\uff0c__FORMAT__ \u2192 flv")},o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"videoRenameInput"},"\u89c6\u9891\u6587\u4ef6"),o.createElement(I.Input,{id:"videoRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("video",e),value:n}),o.createElement(I.Button,{className:n!==t?"primary":"border",disabled:n===t,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("video")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"videoCoverRenameInput"},"\u89c6\u9891\u5c01\u9762"),o.createElement(I.Input,{id:"videoCoverRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoCover",e),value:i}),o.createElement(I.Button,{className:i!==a?"primary":"border",disabled:i===a,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoCover")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"videoScreenshotRenameInput"},"\u89c6\u9891\u622a\u56fe"),o.createElement(I.Input,{id:"videoScreenshotRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoScreenshot",e),value:l}),o.createElement(I.Button,{className:l!==s?"primary":"border",disabled:l===s,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoScreenshot")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"videoDanmuRenameInput"},"\u5f39\u5e55\u6587\u4ef6"),o.createElement(I.Input,{id:"videoDanmuRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoDanmu",e),value:c}),o.createElement(I.Button,{className:c!==r?"primary":"border",disabled:c===r,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoDanmu")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"videoSubtitleRenameInput"},"\u5b57\u5e55\u6587\u4ef6"),o.createElement(I.Input,{id:"videoSubtitleRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("subtitle",e),value:p}),o.createElement(I.Button,{className:p!==h?"primary":"border",disabled:p===h,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("subtitle")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"audioRenameInput"},"\u97f3\u9891\u6587\u4ef6"),o.createElement(I.Input,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("audio",e),value:g}),o.createElement(I.Button,{className:g!==d?"primary":"border",disabled:g===d,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("audio")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"rename-wrapper"},o.createElement("label",{htmlFor:"audioRenameInput"},"\u76f4\u64ad\u622a\u5c4f"),o.createElement(I.Input,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("liveScreenshot",e),value:m}),o.createElement(I.Button,{className:m!==u?"primary":"border",disabled:m===u,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("liveScreenshot")},"\u786e\u8ba4\u4fee\u6539")))),o.createElement(V,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"Aria2c RPC\u8fde\u63a5\u8bbe\u7f6e"),toolbar:o.createElement(R.tc,{onClick:()=>this.handleOnClickAria2cOn(!(!A||!M)&&b),on:!(!A||!M)&&b}),active:!(!A||!M)&&b},o.createElement(Q,{title:"\u534f\u8bae"},o.createElement(R.SY,{value:f||"http",data:["http","https","ws","wss"].map(e=>({key:e,title:e})),onClick:this.handleOnSelectProtocol})),o.createElement(Q,{className:"input-section"},o.createElement("div",{className:"aria2c-wrapper"},o.createElement("label",{htmlFor:"hostInput"},"RPC Host"),o.createElement(I.Input,{id:"hostInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("host",e),value:C}),o.createElement(I.Button,{className:C!==v?"primary":"border",disabled:C===v,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("host")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"aria2c-wrapper"},o.createElement("label",{htmlFor:"portInput"},"RPC \u7aef\u53e3"),o.createElement(I.Input,{id:"portInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("port",e),value:S}),o.createElement(I.Button,{className:S!==E?"primary":"border",disabled:S===E,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("port")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"aria2c-wrapper"},o.createElement("label",{htmlFor:"pathInput"},"RPC \u7aef\u53e3"),o.createElement(I.Input,{id:"pathInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("path",e),value:w}),o.createElement(I.Button,{className:w!==y?"primary":"border",disabled:w===y,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("path")},"\u786e\u8ba4\u4fee\u6539")),o.createElement("div",{className:"aria2c-wrapper"},o.createElement("label",{htmlFor:"secretInput"},"RPC \u79d8\u94a5"),o.createElement(I.Input,{id:"secretInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("secret",e),value:k}),o.createElement(I.Button,{className:k!==x?"primary":"border",disabled:k===x,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("secret")},"\u786e\u8ba4\u4fee\u6539")))))}}(0,c.Z)(Et,"contextType",z);const St=(0,N.EN)(Et);var yt=n(63334);const wt=(0,F.isFireFox)(),xt=p["default"].div`
  .toggle-off {
    position: relative;
    filter: grayscale(1);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  section {
    .radio-button-wrapper {
      margin-bottom: 8px;
      width: fit-content;
    }

    .link {
      margin: 0 2px;
      padding: 0 2px;
      color: var(--bilibili-blue);
    }
  }
`,kt=p["default"].div`
  .check-box-button {
    display: inline-block;
    margin-left: 16px;
  }
`,Mt=p["default"].textarea`
  width: calc(100% - 18px);
  min-height: 50px;
  padding: 8px;
  border: 1px solid #ccc;
`;class Ot extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{globalNotificationState:!1,notificationJumpType:"button",notificationAutoClose:!1,notificationAPIType:"native",announcementNotification:!1,bilibiliMessageOn:!1,bilibiliMessageRangeType:{at:!0,like:!0,reply:!0,sys_msg:!0,unread:!0},bilibiliMessageDuration:5,bilibiliMessageSpeech:!1,videoOn:!1,videoRangeType:"all",videoNumberType:"theLatestThree",videoUseWhiteList:!1,videoUseBlackList:!1,videoDuration:10,videoShowCover:!1,videoNotPushNotification:!1,videoOnlyShowBadge:!1,videoNotifyTypes:["8"],liveOn:!1,liveRangeType:"all",liveUseWhiteList:!1,liveUseBlackList:!1,liveDuration:3,liveShowCover:!1,originDynamicWhiteListString:"",dynamicWhiteListString:"",originDynamicBlackListString:"",dynamicBlackListString:"",originLiveWhiteListString:"",liveWhiteListString:"",originLiveBlackListString:"",liveBlackListString:"",modalType:"dynamic",useBackground:!1}),(0,c.Z)(this,"handleOnClickGlobalToggleBtn",()=>{const{globalNotificationState:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",on:!e},()=>{this.setState({globalNotificationState:!e})})}),(0,c.Z)(this,"handleOnRequestBackground",()=>{const e=this.state.useBackground?"remove":"request";chrome.runtime.sendMessage({target:"permissionController",event:e,permissions:["background"]},e=>{e&&this.setState({useBackground:!1})})}),(0,c.Z)(this,"handleOnClickJumpType",e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",useActions:"button"===e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationJumpType:e})})}),(0,c.Z)(this,"handleOnClickAutoClose",()=>{const{notificationAutoClose:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",autoClose:!e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAutoClose:!e})})}),(0,c.Z)(this,"handleOnToggleNotificationAPIType",e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",apiType:e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAPIType:e})})}),(0,c.Z)(this,"handleOnSetVideoDuration",e=>{if(this.state.videoDuration!==e){const{bhAccount:t}=this.context;if(5===e&&(!t||!t.isVIP))return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",duration:e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoDuration:e})})}}),(0,c.Z)(this,"handleOnSetVideoShowCover",()=>{const{videoShowCover:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showCover:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowCover:!e})})}),(0,c.Z)(this,"handleOnSetVideoShowBadge",()=>{const{videoShowBadge:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showBadge:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowBadge:!e})})}),(0,c.Z)(this,"handleOnSetVideoNoNotification",()=>{const{videoNoNotification:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",noNotification:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNoNotification:!e})})}),(0,c.Z)(this,"handleOnToggleAnnouncementMessage",()=>{const{announcementNotification:e}=this.state;chrome.runtime.sendMessage({target:"message",event:"setSetting",announcementNotification:!e},()=>{this.context.uploadSettings("message"),this.setState({announcementNotification:!e})})}),(0,c.Z)(this,"handleOnSetBilibiliMessageOn",()=>{const{bilibiliMessageOn:e}=this.state,{bhAccount:t,hasLogin:n,handleOnClickShowLoginModal:a,sendPaymentMessage:i}=this.context;return n?e||t&&t.isVIP?void chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",on:!e},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageOn:!e})}):i():a()}),(0,c.Z)(this,"handleOnSetBilibiliMessageSpeech",()=>{const{bilibiliMessageOn:e,bilibiliMessageSpeech:t}=this.state,{bhAccount:n,hasLogin:a,handleOnClickShowLoginModal:i,sendPaymentMessage:o}=this.context;return a?e||n&&n.isVIP?void chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",speech:!t},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageSpeech:!t})}):o():i()}),(0,c.Z)(this,"handleOnToggleBilibiliMessageRangeType",(e,t)=>{const n=this.state.bilibiliMessageRangeType;n[e]=t,chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",rangeType:n},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageRangeType:n})})}),(0,c.Z)(this,"handleOnToggleSubscriptionDynamicType",(e,t)=>{const n=this.state.videoNotifyTypes;if(t&&!n.includes(e))n.push(e);else if(!t&&n.includes(e)){const t=n.findIndex(t=>t===e);n.splice(t,1)}chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",notifyTypes:n},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNotifyTypes:n})})}),(0,c.Z)(this,"handleOnToggleBilibiliMessageDuration",e=>{chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",duration:e},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageDuration:e})})}),(0,c.Z)(this,"handleOnSetVideoOn",()=>{const{videoOn:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",on:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoOn:!e})})}),(0,c.Z)(this,"handleOnSetVideoRangeType",e=>{this.state.videoRangeType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoRangeType:e,videoUseWhiteList:"whiteList"===e})})}),(0,c.Z)(this,"handleOnSetVideoNumberType",e=>{this.state.videoNumberType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",numberType:e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNumberType:e})})}),(0,c.Z)(this,"handleOnToggleUseVideoBlackList",()=>{const{videoUseBlackList:e}=this.state,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",useBlackList:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoUseBlackList:!e})})}),(0,c.Z)(this,"handleOnSetLiveOn",()=>{const{liveOn:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",on:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveOn:!e})})}),(0,c.Z)(this,"handleOnSetLiveDuration",e=>{if(this.state.liveDuration!==e){const{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",duration:e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveDuration:e})})}}),(0,c.Z)(this,"handleOnSetLiveShowCover",()=>{const{liveShowCover:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",showCover:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveShowCover:!e})})}),(0,c.Z)(this,"handleOnSetLiveRangeType",e=>{this.state.liveRangeType!==e&&chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveRangeType:e,liveUseWhiteList:"whiteList"===e})})}),(0,c.Z)(this,"handleOnToggleUseLiveBlackList",()=>{const{liveUseBlackList:e}=this.state,{bhAccount:t={}}=this.context,n=!!t&&t["isVIP"];if(!e&&!n)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",useBlackList:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveUseBlackList:!e})})}),(0,c.Z)(this,"handleOnOpenVideoDynamicPage",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://t.bilibili.com/?tab=8"})}),(0,c.Z)(this,"handleOnChangeDynamicBlackListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({dynamicBlackListString:t})}),(0,c.Z)(this,"handleOnChangeDynamicWhiteListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({dynamicWhiteListString:t})}),(0,c.Z)(this,"handleOnBlurDynamicBlackListTextArea",()=>{const{dynamicBlackListString:e,originDynamicBlackListString:t}=this.state;if(t!==e.trim()){const t=new(Be())(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),n=Re()(t),a=n.join(", ");chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setBlackList",blackList:Re()(t)},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({originDynamicBlackListString:a,dynamicBlackListString:a})})}}),(0,c.Z)(this,"handleOnBlurDynamicWhiteListTextArea",()=>{const{dynamicWhiteListString:e,originDynamicWhiteListString:t}=this.state;if(t!==e.trim()){const t=new(Be())(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),n=Re()(t),a=n.join(", ");chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setWhiteList",whiteList:Re()(t)},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({originDynamicWhiteListString:a,dynamicWhiteListString:a})})}}),(0,c.Z)(this,"handleOnChangeLiveBlackListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({liveBlackListString:t})}),(0,c.Z)(this,"handleOnChangeLiveWhiteListTextArea",e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({liveWhiteListString:t})}),(0,c.Z)(this,"handleOnBlurLiveBlackListTextArea",()=>{const{liveBlackListString:e,originLiveBlackListString:t}=this.state;if(t!==e.trim()){const t=new(Be())(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),n=Re()(t),a=n.join(", ");chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setBlackList",blackList:Re()(t)},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({originLiveBlackListString:a,liveBlackListString:a})})}}),(0,c.Z)(this,"handleOnBlurLiveWhiteListTextArea",()=>{const{liveWhiteListString:e,originLiveWhiteListString:t}=this.state;if(t!==e.trim()){const t=new(Be())(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),n=Re()(t),a=n.join(", ");chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setWhiteList",whiteList:Re()(t)},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({originLiveWhiteListString:a,liveWhiteListString:a})})}})}componentDidMount(){chrome.runtime.sendMessage({target:"notificationController",event:"getSetting"},e=>{this.setState({globalNotificationState:e.on,notificationJumpType:e.useActions?"button":"card",notificationAutoClose:e.autoClose,notificationAPIType:e.apiType})}),chrome.runtime.sendMessage({target:"message",event:"getSetting"},e=>{const{announcementNotification:t}=e;this.setState({announcementNotification:t})}),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getSetting"},e=>{const{on:t,rangeType:n,duration:a,speech:i}=e;this.setState({bilibiliMessageOn:t,bilibiliMessageRangeType:n,bilibiliMessageDuration:a,bilibiliMessageSpeech:i})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getSetting"},e=>{const{on:t,rangeType:n,numberType:a,useWhiteList:i,useBlackList:o,duration:s,showCover:l,showBadge:r,noNotification:c,notifyTypes:h}=e;this.setState({videoOn:t,videoRangeType:n,videoNumberType:a,videoUseWhiteList:i,videoUseBlackList:o,videoDuration:s,videoShowCover:l,videoShowBadge:r,videoNoNotification:c,videoNotifyTypes:h.map(e=>String(e))})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getBlackList"},(e=[])=>{this.setState({originDynamicBlackListString:e.join(", "),dynamicBlackListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getWhiteList"},(e=[])=>{this.setState({originDynamicWhiteListString:e.join(", "),dynamicWhiteListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getSetting"},e=>{const{on:t,rangeType:n,useWhiteList:a,useBlackList:i,duration:o,showCover:s}=e;this.setState({liveOn:t,liveRangeType:n,liveUseWhiteList:a,liveUseBlackList:i,liveDuration:o,liveShowCover:s})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getBlackList"},(e=[])=>{this.setState({originLiveBlackListString:e.join(", "),liveBlackListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getWhiteList"},(e=[])=>{this.setState({originLiveWhiteListString:e.join(", "),liveWhiteListString:e.join(", ")})}),(0,F.isFireFox)()||chrome.permissions.contains({permissions:["background"]},e=>{this.setState({useBackground:!!e})})}render(){const{globalNotificationState:e,notificationJumpType:t,notificationAutoClose:n,notificationAPIType:a,announcementNotification:i,bilibiliMessageOn:s,bilibiliMessageRangeType:l,bilibiliMessageDuration:r,bilibiliMessageSpeech:c,videoOn:h,videoRangeType:p,videoNumberType:d,videoUseWhiteList:g,videoUseBlackList:u,videoDuration:m,videoShowCover:b,videoShowBadge:f,videoNoNotification:C,videoNotifyTypes:E,liveOn:S,liveRangeType:y,liveUseWhiteList:w,liveUseBlackList:x,liveDuration:k,liveShowCover:M,dynamicWhiteListString:O,dynamicBlackListString:A,liveWhiteListString:L,liveBlackListString:P,useBackground:B}=this.state,{hasLogin:D,bilibiliAccount:N,bhAccount:T={}}=this.context,Z=!!T&&T["isVIP"];return o.createElement(xt,null,o.createElement(_,{title:o.createElement(kt,null,o.createElement("span",null,"\u6d88\u606f\u63a8\u9001\u8bbe\u7f6e")),description:"\u6d88\u606f\u63a8\u9001\u662f\u4e00\u79cd\u6839\u636e\u4e00\u5b9a\u9891\u7387\u8fdb\u884c\u5b9a\u671f\u68c0\u67e5\u7684\u529f\u80fd\uff0c\u5f53\u6709\u65b0\u5185\u5bb9\u65f6\u5c31\u4f1a\u63a8\u9001\u7ed9\u4f60\u5566~"}),o.createElement("div",{className:e?null:"toggle-off"},o.createElement(V,{title:"\u4e00\u822c\u63a8\u9001\u8bbe\u7f6e"},o.createElement(Q,{title:"\u6536\u5230\u63a8\u9001\u4e00\u6bb5\u65f6\u95f4\u540e\u81ea\u52a8\u5173\u95ed\u6d88\u606f",description:"\u81ea\u52a8\u5173\u95ed\u7b49\u5f85\u65f6\u95f4\u5404\u529f\u80fd\u53ef\u80fd\u4e0d\u4e00\u6837",toolbar:o.createElement(R.tc,{onClick:this.handleOnClickAutoClose,on:n})}),o.createElement(Q,{title:"\u63a8\u9001\u6a21\u5f0f"},o.createElement(R.SY,{value:a,data:[{key:"native",title:"\u64cd\u4f5c\u7cfb\u7edf"},{key:"chrome",title:"\u6d4f\u89c8\u5668"}],onClick:this.handleOnToggleNotificationAPIType})),!(0,F.isFireFox)()&&o.createElement(Q,{title:"\u542f\u7528\u63a8\u9001\u589e\u5f3a",description:"\u89e3\u51b3\u540e\u53f0\u63a8\u9001\u5931\u8d25\u7684\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u542f\u7528\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u5f00\u673a\u81ea\u52a8\u542f\u52a8",toolbar:o.createElement(R.tc,{onClick:this.handleOnRequestBackground,on:B}),helperArea:o.createElement(o.Fragment,null,"\u542f\u7528\u540e",o.createElement("b",null,"\u91cd\u542f\u6269\u5c55"),"\u751f\u6548")})),o.createElement(V,{title:"\u65b0\u516c\u544a\u63a8\u9001",toolbar:o.createElement(R.tc,{onClick:this.handleOnToggleAnnouncementMessage,on:i})}),o.createElement(V,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"B\u7ad9\u7ad9\u5185\u6d88\u606f\u63a8\u9001"),active:!wt&&s,toolbar:o.createElement(R.tc,{disable:!N||!D,onClick:this.handleOnSetBilibiliMessageOn,on:!!(Z&&D&&N)&&s})},o.createElement(Q,{title:"\u8bed\u97f3\u64ad\u62a5",description:"\u64ad\u62a5\u5185\u5bb9\u300c\u60a8\u6709\u65b0\u7684\u6d88\u606f\u300d",active:!!N,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetBilibiliMessageSpeech,on:c})}),o.createElement(Q,{title:"\u9700\u8981\u63a8\u9001\u7684\u6d88\u606f\u7c7b\u522b",hasLogin:D,isVIP:Z,needVIP:!0},o.createElement(R.CS,{data:v()(l).map(e=>({key:e,title:(0,F.__)("bilibiliMessage_"+e),on:l[e]})),onClick:this.handleOnToggleBilibiliMessageRangeType})),o.createElement(Q,{title:"\u63a8\u9001\u95f4\u9694",hasLogin:D,isVIP:Z,needVIP:!0},o.createElement(R.SY,{value:r,data:[{key:1,title:"1\u5206\u949f"},{key:3,title:"3\u5206\u949f"},{key:5,title:"5\u5206\u949f"},{key:10,title:"10\u5206\u949f"}],onClick:this.handleOnToggleBilibiliMessageDuration}))),o.createElement(V,{title:"B\u7ad9\u52a8\u6001\u66f4\u65b0\u68c0\u6d4b",active:h,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetVideoOn,on:!!N&&h})},o.createElement(Q,{title:"\u663e\u793a\u5c01\u9762",active:!!N,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetVideoShowCover,on:b})}),o.createElement(Q,{title:"\u5728\u6269\u5c55\u56fe\u6807\u4e0a\u663e\u793a\u65b0\u6295\u7a3f\u89d2\u6807",active:!!N,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetVideoShowBadge,on:f})}),o.createElement(Q,{title:"\u4e0d\u5f39\u51fa\u6d88\u606f\u901a\u77e5",active:!!N,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetVideoNoNotification,on:C})}),o.createElement(Q,{title:"\u63a8\u9001\u6d88\u606f\u7c7b\u522b",hasLogin:D},o.createElement(R.CS,{data:yt.yT.map(({title:e,types:t},n)=>{const a=t.toString();return{key:a,title:e,on:E.includes(a)||E.includes(String(yt.xk.ALL)),toggle:0===n||0!==n&&!E.includes(String(yt.xk.ALL))}}),onClick:this.handleOnToggleSubscriptionDynamicType})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u8303\u56f4"),hasLogin:D,isVIP:Z,needVIP:!0,active:Z&&!!N},o.createElement(R.SY,{value:p,data:[{key:"all",title:"\u63a8\u9001\u6240\u6709\u5df2\u5173\u6ce8\u4e3b\u64ad\u7684\u89c6\u9891\u6295\u7a3f\u6d88\u606f"},{key:"specialAttention",title:"\u53ea\u63a8\u9001\u88ab\u7279\u522b\u5173\u6ce8\u4e86\u7684UP\u4e3b\u89c6\u9891\u6d88\u606f",description:"\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},{key:"whiteList",title:o.createElement(o.Fragment,null,"\u53ea\u63a8\u9001\u767d\u540d\u5355\u4e2d\u7684UP\u4e3b\u89c6\u9891\u6d88\u606f\uff0c\u5f53\u524d\u767d\u540d\u5355\u6709 ",o.createElement("b",null,O.split(",").filter(Boolean).length)," \u9879"),description:"\u53ea\u8981\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5df2\u7ecf\u88ab\u52a0\u5230\u9ed1\u540d\u5355\u4e2d\u7684\u4e5f\u4f1a\u88ab\u63a8\u9001"}],onClick:this.handleOnSetVideoRangeType})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u95f4\u9694"),description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4\uff0c\u9ed8\u8ba410\u5206\u949f",hasLogin:D,isVIP:Z,needVIP:!0,active:Z&&!!N},o.createElement(R.SY,{value:D&&Z?m:10,data:[{key:1,title:"1\u5206\u949f"},{key:5,title:"5\u5206\u949f"},{key:10,title:"10\u5206\u949f"},{key:20,title:"20\u5206\u949f"},{key:30,title:"30\u5206\u949f"}],onClick:this.handleOnSetVideoDuration})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u663e\u793a\u6570\u91cf"),description:"\u9ed8\u8ba4\u63a8\u9001\u6bcf\u4e00\u6761",hasLogin:D,isVIP:Z,needVIP:!0,active:Z&&!!N},o.createElement(R.SY,{value:D&&Z?d:"everyone",data:[{key:"everyone",title:"\u63a8\u9001\u6bcf\u4e00\u6761"},{key:"theLatestThree",title:"\u53ea\u63a8\u9001\u6700\u65b0\u7684\u4e09\u6761\u89c6\u9891\u6295\u7a3f\u6d88\u606f",description:"\u5982\u679c\u591a\u4e8e\u4e09\u6761\u5219\u9009\u62e9\u6700\u8fd1\u53d1\u5e03\u7684\u4e09\u6761"},{key:"merge",title:o.createElement(o.Fragment,null,"\u53ea\u63a8\u9001\u4e00\u6761\u663e\u793a\u6570\u91cf\u7684\u901a\u77e5\uff0c\u70b9\u51fb\u524d\u5f80",o.createElement("a",{className:"link",onClick:this.handleOnOpenVideoDynamicPage},"\u6295\u7a3f\u52a8\u6001"),"\u9875\u9762")}],onClick:this.handleOnSetVideoNumberType})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u767d\u540d\u5355 (",O.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",isVIP:Z,needVIP:!0,active:"whiteList"===p&&!!N&&Z,hasLogin:D,helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u767d\u540d\u5355\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9ed1\u540d\u5355\u548c\u52a9\u624b\u7279\u5173"),o.createElement("br",null),o.createElement("br",null),"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",o.createElement("br",null),o.createElement("br",null),"\u4f7f\u7528",o.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",o.createElement("br",null),o.createElement("br",null))},o.createElement(Mt,{placeholder:"\u8f93\u5165\u5e0c\u671b\u59cb\u7ec8\u63a8\u9001\u7684\u7528\u6237UID",value:O,onChange:this.handleOnChangeDynamicWhiteListTextArea,onBlur:this.handleOnBlurDynamicWhiteListTextArea})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u9ed1\u540d\u5355 (",A.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",isVIP:Z,needVIP:!0,active:u&&!!N&&Z,hasLogin:D,toolbar:o.createElement(R.tc,{disable:!D||!N,onClick:this.handleOnToggleUseVideoBlackList,on:!!D&&u}),helperArea:o.createElement(o.Fragment,null,"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",o.createElement("br",null),o.createElement("br",null),"\u4f7f\u7528",o.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",o.createElement("br",null),o.createElement("br",null))},o.createElement(Mt,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u7528\u6237UID",value:A,onChange:this.handleOnChangeDynamicBlackListTextArea,onBlur:this.handleOnBlurDynamicBlackListTextArea}))),o.createElement(V,{title:"\u76f4\u64ad\u5f00\u64ad\u63a8\u9001 - \u9700\u767b\u5f55\u52a9\u624b\u8d26\u53f7",active:S,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetLiveOn,on:!!N&&S})},o.createElement(Q,{title:"\u663e\u793a\u5c01\u9762",active:!!N,toolbar:o.createElement(R.tc,{disable:!N,onClick:this.handleOnSetLiveShowCover,on:M})}),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u8303\u56f4"),hasLogin:D,isVIP:Z,needVIP:!0,active:Z&&!!N},o.createElement(R.SY,{value:Z&&D?y:"all",data:[{key:"all",title:"\u63a8\u9001\u6240\u6709\u5df2\u5173\u6ce8\u4e3b\u64ad\u7684\u5f00\u64ad\u6d88\u606f"},{key:"specialAttention",title:"\u53ea\u63a8\u9001\u88ab\u7279\u522b\u5173\u6ce8\u4e86\u7684UP\u4e3b\u7684\u5f00\u64ad\u6d88\u606f",description:"\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},{key:"whiteList",title:o.createElement(o.Fragment,null,"\u53ea\u63a8\u9001\u767d\u540d\u5355\u4e2d\u7684UP\u4e3b\u7684\u5f00\u64ad\u6d88\u606f\uff0c\u5f53\u524d\u767d\u540d\u5355\u6709 ",o.createElement("b",null,L.split(",").filter(Boolean).length)," \u9879"),description:"\u53ea\u8981\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5df2\u7ecf\u88ab\u52a0\u5230\u9ed1\u540d\u5355\u4e2d\u7684\u4e5f\u4f1a\u88ab\u63a8\u9001"}],onClick:this.handleOnSetLiveRangeType})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u95f4\u9694"),description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4",hasLogin:D,isVIP:Z,needVIP:!0,active:Z&&!!N},o.createElement(R.SY,{value:D&&Z?k:10,data:[{key:1,title:"1\u5206\u949f"},{key:5,title:"5\u5206\u949f"},{key:10,title:"10\u5206\u949f"}],onClick:this.handleOnSetLiveDuration})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u767d\u540d\u5355 (",L.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",hasLogin:D,isVIP:Z,needVIP:!0,active:"whiteList"===y&&!!N&&Z,helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u767d\u540d\u5355\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9ed1\u540d\u5355\u548c\u52a9\u624b\u7279\u5173"),o.createElement("br",null),o.createElement("br",null),"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",o.createElement("br",null),o.createElement("br",null),"\u4f7f\u7528",o.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",o.createElement("br",null),o.createElement("br",null))},o.createElement(Mt,{placeholder:"\u8f93\u5165\u5e0c\u671b\u59cb\u7ec8\u63a8\u9001\u7684\u7528\u6237UID",value:L,onChange:this.handleOnChangeLiveWhiteListTextArea,onBlur:this.handleOnBlurLiveWhiteListTextArea})),o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(I.Icon,{icon:"cat-paw",size:16}),"\u9ed1\u540d\u5355 (",P.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",hasLogin:D,isVIP:Z,needVIP:!0,active:x&&!!N&&Z,toolbar:o.createElement(R.tc,{disable:!D||!N,onClick:this.handleOnToggleUseLiveBlackList,on:!!D&&x}),helperArea:o.createElement(o.Fragment,null,"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",o.createElement("br",null),o.createElement("br",null),"\u4f7f\u7528",o.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",o.createElement("br",null),o.createElement("br",null))},o.createElement(Mt,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u7528\u6237UID",value:P,onChange:this.handleOnChangeLiveBlackListTextArea,onBlur:this.handleOnBlurLiveBlackListTextArea})))))}}(0,c.Z)(Ot,"contextType",z);const At=(0,N.EN)(Ot),It=p["default"].div`

`;class Lt extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{autoTakeVipPrivilege:!1,autoTakeVipPrivilegePushNotification:!1,quickSearch:!1,darkMode:!1,darkModeFollowSystem:!0,sniffer:!0}),(0,c.Z)(this,"handleOnToggleAutoTakeVipPrivilege",()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",on:!this.state.autoTakeVipPrivilege},()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({autoTakeVipPrivilege:!this.state.autoTakeVipPrivilege})})}),(0,c.Z)(this,"handleOnToggleAutoTakeVipPrivilegeNotification",()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",pushNotification:!this.state.pushAutoTakeVipPrivilegeNotification},()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({pushAutoTakeVipPrivilegeNotification:!this.state.pushAutoTakeVipPrivilegeNotification})})}),(0,c.Z)(this,"handleOnToggleQuickSearch",()=>{chrome.runtime.sendMessage({target:"quickSearch",event:"setSetting",on:!this.state.quickSearch},()=>{this.context.uploadSettings("quickSearch"),this.setState({quickSearch:!this.state.quickSearch})})}),(0,c.Z)(this,"handleOnToggleDarkMode",()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",on:!this.state.darkMode},()=>{this.context.uploadSettings("darkMode"),this.setState({darkMode:!this.state.darkMode})})}),(0,c.Z)(this,"handleOnToggleSniffer",()=>{chrome.runtime.sendMessage({target:"sniffer",event:"setSetting",on:!this.state.sniffer},()=>{this.context.uploadSettings("sniffer"),this.setState({sniffer:!this.state.sniffer})})}),(0,c.Z)(this,"handleOnToggleDarkModeFollowSystem",()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",followSystem:!this.state.darkModeFollowSystem},()=>{this.context.uploadSettings("darkMode"),this.setState({darkModeFollowSystem:!this.state.darkModeFollowSystem})})})}componentDidMount(){chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"getSetting"},e=>{this.setState({autoTakeVipPrivilege:e.on,pushAutoTakeVipPrivilegeNotification:e.pushNotification})}),chrome.runtime.sendMessage({target:"quickSearch",event:"getSetting"},e=>{this.setState({quickSearch:e.on})}),chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{e&&this.setState({darkMode:e.on,darkModeFollowSystem:e.followSystem})}),chrome.runtime.sendMessage({target:"sniffer",event:"getSetting"},e=>{e&&this.setState({sniffer:e.on})})}render(){const{hasLogin:e,bilibiliAccount:t}=this.context;return o.createElement(It,null,o.createElement(_,{title:"\u5168\u5c40\u529f\u80fd"}),o.createElement(Q,{title:"\u81ea\u52a8\u9886\u53d6\u5927\u4f1a\u5458\u798f\u5229",hasLogin:e,toolbar:o.createElement(h.CheckBoxButton,{disable:!t,onClick:this.handleOnToggleAutoTakeVipPrivilege,on:this.state.autoTakeVipPrivilege}),active:this.state.autoTakeVipPrivilege&&!!t&&e,helperArea:"\u8be5\u529f\u80fd\u6bcf\u5929\u90fd\u4f1a\u5e2e\u4f60\u68c0\u67e5\uff0c\u6bcf\u4e2a\u6708\u9886\u53d6\u4e00\u6b21"},o.createElement(h.ListItem,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleAutoTakeVipPrivilegeNotification,operation:o.createElement(h.CheckBoxButton,{on:this.state.pushAutoTakeVipPrivilegeNotification})})),o.createElement(Q,{title:"\u6df1\u8272\u6a21\u5f0f",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnToggleDarkMode,on:this.state.darkMode}),active:this.state.darkMode,helperArea:"\u76ee\u524d\u505a\u4e86\u9996\u9875\uff0c\u52a8\u6001\uff0c\u4e13\u680f\uff0c\u641c\u7d22\uff0c\u6d88\u606f\u4e2d\u5fc3\uff0c\u4e2a\u4eba\u4e3b\u9875\uff0c\u7a0d\u540e\u518d\u770b\uff0c\u5386\u53f2\u8bb0\u5f55\u76f4\u64ad\u89c2\u770b"},o.createElement(h.ListItem,{title:"\u8ddf\u968f\u7cfb\u7edf",onClick:this.handleOnToggleDarkModeFollowSystem,operation:o.createElement(h.CheckBoxButton,{on:this.state.darkModeFollowSystem})})),o.createElement(Q,{title:"\u9f20\u6807\u53f3\u952e\u5feb\u901f\u641c\u7d22",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnToggleQuickSearch,on:this.state.quickSearch}),active:this.state.quickSearch,helperArea:o.createElement(o.Fragment,null,"\u5982\u679c\u9009\u62e9\u7684\u662f",o.createElement("b",null,"avid"),"\u6216",o.createElement("b",null,"bvid"),"\uff0c\u5219\u4f1a\u76f4\u63a5\u6253\u5f00\u76f8\u5e94\u89c6\u9891\u64ad\u653e\u9875\u9762")}),o.createElement(Q,{title:"\u8d44\u6e90\u7ba1\u7406\u5668",toolbar:o.createElement(h.CheckBoxButton,{onClick:this.handleOnToggleSniffer,on:this.state.sniffer}),active:this.state.sniffer,helperArea:"\u8be5\u529f\u80fd\u5f00\u53d1\u5468\u671f\u8f83\u957f\uff0c\u4f1a\u9010\u6b65\u5206\u9636\u6bb5\u5b8c\u5584\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85"}))}}(0,c.Z)(Lt,"contextType",z);const Pt=(0,N.EN)(Lt);n(22188);function Bt(e,t){var n=v()(e);if(E()){var a=E()(e);t&&(a=a.filter((function(t){return y()(e,t).enumerable}))),n.push.apply(n,a)}return n}function Dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Bt(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):x()?M()(e,x()(n)):Bt(Object(n)).forEach((function(t){A()(e,t,y()(n,t))}))}return e}const Ft=p["default"].div`
  .load-order-list-btn {
    margin-left: 20px;
    vertical-align: bottom;
    font-size: 14px;

    .button-view {
      padding: 0 10px;
    }
  }
`;class Nt extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{orderList:[],redeemList:[],loaded:!1}),(0,c.Z)(this,"handleOnClickLoadOrder",()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryOrderAndRedeemList"},e=>{"string"!==typeof e?this.setState(Dt(Dt({},e),{},{loaded:!0})):h.Message.error(e)})})}componentDidMount(){}render(){const{orderList:e,redeemList:t,loaded:n}=this.state;return o.createElement(Ft,null,o.createElement(_,{title:o.createElement(o.Fragment,null,"\u7528\u6237\u8ba2\u5355",true?null:o.createElement(h.Button,{className:"load-order-list-btn primary",onClick:this.handleOnClickLoadOrder},"\u70b9\u51fb\u52a0\u8f7d\u8ba2\u5355"))}),o.createElement(Q,{title:"\u4ed8\u8d39\u8ba2\u5355\u5217\u8868"},"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u4f1a\u5458 Infinity \u5929 芜湖"))}}(0,c.Z)(Nt,"contextType",z);const Rt=(0,N.EN)(Nt),Tt=["index","children","onDragMove","onDrop"];function _t(e,t){var n=v()(e);if(E()){var a=E()(e);t&&(a=a.filter((function(t){return y()(e,t).enumerable}))),n.push.apply(n,a)}return n}function Zt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):x()?M()(e,x()(n)):_t(Object(n)).forEach((function(t){A()(e,t,y()(n,t))}))}return e}const{FREE_NUMBER:Vt,MAX_NUMBER:Ut,FREE_MAX_LENGTH:zt,VIP_MAX_LENGTH:Wt}=ae.CUSTOM_WHISPER_MESSAGE,Ht=p["default"].div`
  .list {
    .list-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 28px;

      & > span {

        &:first-of-type {
          width: 20px;
          flex-shrink: 0;
        }

        &:nth-child(2) {
          width: 70px;
        }
      }

      .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-grow: 1;

        &.off {
          text-decoration: line-through;
        }
      }

      .action-box {
        display: flex;
        margin-left: 12px;

        .button {
          margin-right: 12px;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }

  .whisper-message-editing-modal {
    width: 500px;

    .modal-body {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      label {
        margin-bottom: 16px;

        &:last-of-type {
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
          margin-bottom: 2px;
        }

        input {
          width: calc(100% - 22px);
          padding: 6px 10px;
          outline: none;
        }
      }

      section {
        margin: 0;

        & > .content {
          width: 100%;

          .title {
            font-size: 14px;
          }
        }
      }
    }
  }
`,jt=p["default"].textarea`
  width: calc(100% - 18px);
  min-height: 50px;
  padding: 8px;
  border: 1px solid #ccc;
`,Gt=function({index:e,info:t,onEditMessage:n,onDeleteMessage:a,onDragMove:i,onDrop:s}){const l=o.useCallback(()=>{n(Zt({index:e},t))},[t]),r=o.useCallback(()=>{a(e)},[e]);return o.createElement(Yt,{className:"list-item",index:e,onDragMove:i,onDrop:s},o.createElement("span",null,e+1,"."),o.createElement("span",{className:["text",t.on?"on":"off"].join(" ")},t.autoEnter?"[\u70b9\u51fb\u53d1\u9001] ":"",t.text),o.createElement("span",{className:"action-box"},o.createElement(h.Button,{onClick:l},"\u7f16\u8f91"),o.createElement(h.Button,{onClick:r},"\u5220\u9664")))},Yt=function(e){let{index:t,children:n,onDragMove:a,onDrop:i}=e,s=(0,U.Z)(e,Tt);const l=o.useRef(null),[,r]=(0,qe.L)({accept:"sortable-list-item",hover(e,n){if(!l.current)return;const i=e.index,o=t;if(i===o)return;const s=l.current.getBoundingClientRect(),r=(s.bottom-s.top)/2,c=n.getClientOffset(),h=c.y-s.top;i<o&&h<r||i>o&&h>r||(a(i,o),e.index=o)}}),[{isDragging:c},h]=(0,Xe.c)({item:{type:"sortable-list-item",index:t},collect:e=>({isDragging:e.isDragging()}),end(){i()}});return h(r(l)),o.createElement("div",(0,Le.Z)({ref:l,className:"sortable-list-item",style:{opacity:c?0:1}},s),n)};class Kt extends o.Component{constructor(e){super(e),(0,c.Z)(this,"state",{customWhisperMessages:[],modalState:"add",showEditModal:!1,editingInfo:{index:"",on:!0,text:""}}),(0,c.Z)(this,"menuInputCompositionStart",!1),(0,c.Z)(this,"customOrderChanged",!1),(0,c.Z)(this,"menuTextInputRef",o.createRef()),(0,c.Z)(this,"updateMenuList",()=>{chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getMessages"},e=>{e&&this.setState({customWhisperMessages:e})})}),(0,c.Z)(this,"handleOnCloseModal",()=>{this.setState({showEditModal:!1})}),(0,c.Z)(this,"handleOnCreateNewMessage",()=>{const{customWhisperMessages:e}=this.state,{bhAccount:t}=this.context;return!(lt()(e).length>=Vt&&lt()(e).length<=Ut)||t&&t.isVIP?lt()(e).length>=Ut?h.Message.info(`\u81ea\u5b9a\u4e49\u6d88\u606f\u6700\u591a\u53ea\u80fd\u52a0${Ut}\u6761\uff0c\u672a\u6765\u4f1a\u5f00\u653e\u66f4\u9ad8\u4e0a\u9650`):void this.setState({showEditModal:!0,modalState:"add",editingInfo:{index:e.length,text:"",on:!0,autoEnter:!1}}):this.context.handleOnClickShowPaymentModal()}),(0,c.Z)(this,"onTextCompositionStart",()=>{this.menuInputCompositionStart=!0}),(0,c.Z)(this,"onTextCompositionEnd",e=>{var t;this.menuInputCompositionStart=!1;const{editingInfo:n}=this.state,{hasLogin:a,bhAccount:i={}}=this.context,o=!!i&&i["isVIP"],s=o?Wt:zt;return a?(null===(t=e.target)||void 0===t?void 0:t.value.length)>s?h.Message.error(`\u5b57\u6570${null===(l=e.target)||void 0===l?void 0:l.value.length}\uff0c\u5df2\u8d85\u8fc7\u4e0a\u9650${s}`):(n.text=e.target.value.slice(0,s),void this.setState({editingInfo:n})):h.Message.error("\u767b\u5f55\u52a9\u624b\u8d26\u53f7\u540e\u4f7f\u7528\u8be5\u529f\u80fd");var l}),(0,c.Z)(this,"handOnConfirmUpdateMessage",()=>{const{editingInfo:e,modalState:t,customWhisperMessages:n}=this.state;e.text?chrome.runtime.sendMessage({target:"customWhisperMessage",event:"setMessage",index:e.index,on:e.on,text:e.text,autoEnter:e.autoEnter},e=>{e?(this.context.uploadSettings("customWhisperMessage"),this.updateMenuList(),this.setState({showEditModal:!1})):h.Message.error("\u63d2\u5165/\u66f4\u65b0\u81ea\u5b9a\u4e49\u6d88\u606f\u5931\u8d25")}):h.Message.error("\u8bf7\u8f93\u5165\u5185\u5bb9")}),(0,c.Z)(this,"handleOnEditMessage",({index:e,text:t,on:n,autoEnter:a})=>{this.setState({showEditModal:!0,modalState:"edit",editingInfo:{index:e,text:t,on:n,autoEnter:a}})}),(0,c.Z)(this,"handleOnDeleteCustomMessage",e=>{chrome.runtime.sendMessage({target:"customWhisperMessage",event:"deleteMessage",index:e},e=>{e&&(this.context.uploadSettings("customWhisperMessage"),this.updateMenuList())})}),(0,c.Z)(this,"onChangeText",e=>{var t;const{editingInfo:n}=this.state,{hasLogin:a,bhAccount:i={}}=this.context;if(!a)return h.Message.error("\u767b\u5f55\u52a9\u624b\u8d26\u53f7\u540e\u4f7f\u7528\u8be5\u529f\u80fd");const o=!!i&&i["isVIP"],s=o?Wt:zt;var l;if((null===(t=e.target)||void 0===t?void 0:t.value.length)>s)return h.Message.error(`\u5b57\u6570${null===(l=e.target)||void 0===l?void 0:l.value.length}\uff0c\u5df2\u8d85\u8fc7\u4e0a\u9650${s}`);this.menuInputCompositionStart?n.text=e.target.value:n.text=e.target.value.slice(0,s),this.setState({editingInfo:n})}),(0,c.Z)(this,"onChangeOn",()=>{const{editingInfo:e}=this.state;e.on=!e.on,this.setState({editingInfo:e})}),(0,c.Z)(this,"onChangeAutoEnter",()=>{const{editingInfo:e}=this.state;e.autoEnter=!e.autoEnter,this.setState({editingInfo:e})}),(0,c.Z)(this,"onDragMoveCustomMessage",(e,t)=>{if(e!==t){this.customOrderChanged=!0;const{customWhisperMessages:n}=this.state,a=n[e];n.splice(e,1),n.splice(t,0,a),this.setState({customWhisperMessages:n})}}),(0,c.Z)(this,"onDropCustomMessage",()=>{this.customOrderChanged&&chrome.runtime.sendMessage({target:"customWhisperMessage",event:"setMessageList",list:this.state.customWhisperMessages},()=>{this.customOrderChanged=!1,this.context.uploadSettings("customWhisperMessage")})})}componentDidMount(){chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getSetting"},({on:e,resizeRate:t})=>{this.setState({resizeRate:t})}),this.updateMenuList()}render(){const{customWhisperMessages:e,showEditModal:t,editingInfo:n,modalState:a}=this.state,{hasLogin:i,bhAccount:s={}}=this.context,l=!!s&&s["isVIP"];return o.createElement(Ht,null,o.createElement(V,{title:"\u6d88\u606f\u4e2d\u5fc3\u8bbe\u7f6e"},o.createElement("div",{className:"list-wrapper custom"},o.createElement(Q,{title:o.createElement(o.Fragment,null,o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u81ea\u5b9a\u4e49\u5feb\u6377\u6d88\u606f (",lt()(e).length,"/",l?Ut:Vt,")"),hasLogin:i,toolbar:o.createElement(h.Button,{className:"add-btn",onClick:this.handleOnCreateNewMessage},"\u6dfb\u52a0"),helperArea:o.createElement(o.Fragment,null,o.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f"),o.createElement("br",null),o.createElement("br",null),"\u9ed8\u8ba4\u6d88\u606f\u6570\u91cf\u4e0a\u9650\uff1a3",o.createElement("br",null),o.createElement("b",null,"\u4f1a\u5458\u6d88\u606f\u6570\u91cf\u4e0a\u9650\uff1a15"),o.createElement("br",null),o.createElement("br",null),"\u9ed8\u8ba4\u6d88\u606f\u5b57\u7b26\u4e0a\u9650\uff1a30",o.createElement("br",null),o.createElement("b",null,"\u4f1a\u5458\u6d88\u606f\u5b57\u7b26\u4e0a\u9650\uff1a500"))},o.createElement("div",{className:"list"},o.createElement(Je.W,{backend:et.PD},lt()(e).map((e,t)=>o.createElement(Gt,{index:t,key:e.text,info:e,onEditMessage:this.handleOnEditMessage,onDeleteMessage:this.handleOnDeleteCustomMessage,onDragMove:this.onDragMoveCustomMessage,onDrop:this.onDropCustomMessage}))))))),o.createElement(h.Modal,{open:t,className:"whisper-message-editing-modal",title:"add"===a?"\u65b0\u589e\u5feb\u6377\u6d88\u606f":"\u7f16\u8f91\u5feb\u6377\u6d88\u606f",onClickMask:this.handleOnCloseModal,buttons:o.createElement("div",{className:"btn-group"},o.createElement(h.Button,{onClick:this.handleOnCloseModal},"\u53d6\u6d88"),o.createElement(h.Button,{className:"confirm primary",onClick:this.handOnConfirmUpdateMessage},"\u786e\u8ba4"))},o.createElement("label",{from:"text"},o.createElement("p",null,"\u6d88\u606f\u5185\u5bb9 (\u4e0d\u957f\u4e8e",l?Wt:zt,"\u4e2a\u5b57\u7b26)"),o.createElement(jt,{id:"text",ref:this.menuTextInputRef,onChange:this.onChangeText,onCompositionStart:this.onTextCompositionStart,onCompositionEnd:this.onTextCompositionEnd,placeholder:`\u4e0d\u5927\u4e8e${l?Wt:zt}\u4e2a\u4e2d\u6587\u6c49\u5b57\u5bbd\u5ea6`,value:n.text})),o.createElement(Q,{title:"\u70b9\u51fb\u76f4\u63a5\u53d1\u9001",active:n.autoEnter,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.onChangeAutoEnter,on:n.autoEnter})}),o.createElement(Q,{title:"\u542f\u7528",active:n.on,toolbar:o.createElement(h.CheckBoxButton,{onClick:this.onChangeOn,on:n.on})})))}}(0,c.Z)(Kt,"contextType",z);const Qt=(0,N.EN)(Kt),$t=((0,F.isFireFox)(),[{key:"overview",component:fe,path:"/"},{key:"popup",component:bt,path:"/popup"},{key:"video",component:Me,path:"/video"},{key:"live",component:Ie,path:"/live"},{key:"specialAttention",component:ot,path:"/specialAttention"},{key:"download",component:St,path:"/download"},{key:"notification",component:At,path:"/notification"},{key:"article",component:ne,path:"/article"},{key:"global",component:Pt,path:"/global"},{key:"order",component:Rt,path:"/order"},{key:"other",component:Qt,path:"/other"}]),qt=p["default"].div`
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  //min-height: calc(100% - 75px);
  overflow: auto;
`,Xt=p["default"].aside`
  position: fixed;
  top: 75px;
  bottom: 0;
  //background-color: var(--paper-grey-100);
  backdrop-filter: blur(10px);
  background-color: rgb(245 245 245 / 0.8);
  pointer-events: none;
  z-index: 999;

  ul {
    //position: sticky;
    //top: 0;
    margin: 0;
    padding: 12px 0;
    min-width: 240px;
    font-size: 14px;
    overflow: auto;
    pointer-events: initial;
  }

  li {
    margin: 0 12px 2px 12px;
    padding: 8px 24px 8px 12px;
    list-style: none;
    //border-bottom: 1px solid #eee;
    border-radius: 0;
    cursor: pointer;
    user-select: none;

    &:last-of-type {
      //  border-bottom: none;
      margin-bottom: 0;
    }

    &:hover {
      background-color: var(--paper-grey-200);
    }

    &:active, &.active {
      background-color: var(--paper-grey-300);
    }
  }
`,Jt=p["default"].main`
  flex-grow: 1;
  margin-left: 240px;
  padding: 12px 12px 12px 24px;
  width: fit-content;
  height: fit-content;
`,en=p["default"].div`
  .login-modal {
    margin: 0;

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        margin-top: 20px;
      }

      .captcha-wrapper, .email-wrapper {
        display: flex;
        align-items: center;
        margin-top: 4px;
        margin-bottom: 4px;

        .input {
          padding: 4px 12px;
          width: 100%;
          height: 32px;
          box-sizing: border-box;
        }

        .captcha-input {
          flex-grow: 1;
        }

        .button {
          flex-shrink: 0;
          margin: 0 0 0 4px;
          width: auto;
          height: 32px;

          button {
            line-height: 32px;
          }
        }
      }

      .button {
        margin: 12px 0;
        width: 100%;
        height: 40px;
        line-height: 40px;

        button {
          line-height: 38px;
          font-size: 14px;
        }
      }

      .step-wrapper {
        width: 100%;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.15s, opacity .3s;
        overflow: hidden;

        &.active {
          max-height: 500px;
          opacity: 1;
          transition: max-height 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95), opacity .3s;
        }

        &.step0 {
          .button {
            display: block;
          }
        }
      }

      .avatar {
        width: 14px;
        height: 14px;
        vertical-align: sub;
        border-radius: 50px;
        margin: 0px 4px 0;
        border: 1px solid #fff;
      }

      .welcome-topic {
        line-height: 20px;
        text-align: left;
        width: 100%;
        font-size: 14px;

        .important {
          color: var(--bilibili-pink);
          font-weight: normal;
        }
      }

      .password-box {
        width: 100%;
      }

      .confirm-password-box {
        width: 100%;
      }

      .password-input {
        margin: 0 0 4px;
        padding: 4px 12px;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
        //text-align: center;
      }

      .login-btn {
        margin: 0;
      }

      .extra-box {
        display: flex;
        justify-content: space-between;

        .forget-password-btn {
          margin-left: auto;
          cursor: pointer;

          &:hover {
            color: var(--bilibili-blue);
            text-decoration: underline;
          }
        }

        .description {
          margin: 0;
          color: var(--bilibili-pink);
        }
      }

      .show-password-box {
        margin-bottom: 12px;
        width: fit-content;
        user-select: none;
        cursor: pointer;

        .checkbox-rect {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }

      .description {
        font-size: 12px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
          cursor: pointer;
        }
      }
    }
  }

  .sign-out-modal {
    p {
      font-size: 14px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button {
        margin-left: 12px;
      }
    }
  }

  .bind-email-modal {
    .input {
      padding: 4px 12px;
      width: 100%;
      height: 32px;
      box-sizing: border-box;
    }

    .captcha-wrapper {
      display: flex;
      align-items: center;
      margin-top: 4px;

      .captcha-input {
        flex-grow: 1;
      }

      .button {
        flex-shrink: 0;
        margin-left: 4px;
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }

      .description {
        font-size: 12px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
          cursor: pointer;
        }
      }
    }
  }

  .change-password-modal {
    .modal-body {
      display: flex;
      flex-direction: column;

      .input {
        margin-bottom: 8px;
        padding: 4px 12px;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
      }

      .no-email-prompt {
        margin: -4px 0 8px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
        }
      }

      .extra-box {
        display: flex;
        justify-content: space-between;

        .forget-password-btn {
          margin-left: auto;
          cursor: pointer;

          &:hover {
            color: var(--bilibili-blue);
            text-decoration: underline;
          }
        }

        .description {
          margin: 0;
          color: var(--bilibili-pink);
        }
      }

      .show-password-box {
        margin-bottom: 12px;
        width: fit-content;
        user-select: none;
        cursor: pointer;

        .checkbox-rect {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }

      .captcha-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .input {
          margin: 0;
        }

        .captcha-input {
          flex-grow: 1;
        }

        .button {
          flex-shrink: 0;
          margin-left: 8px;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }
    }
  }

  .public-beta-announcement {
    .modal-body {
      font-size: 14px;
    }

    .hide-announcement-btn {
      .button-view {
        padding: 0 20px;
      }
    }
  }

  .reset-password-modal {
    p {
      margin: 12px 0;
      white-space: break-spaces;
      line-height: 20px;

      a {
        margin: 0 4px;
        color: var(--bilibili-blue);
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }
    }
  }

  .payment-iframe-modal {
    width: 1000px;
    max-width: max-content;
    box-sizing: border-box;
    overflow: hidden;

    .modal-body {
      padding: 0;
      width: 1000px;
      max-height: 800px;
      box-sizing: border-box;
    }

    .close-payment-modal-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      color: var(--bilibili-gray);
      cursor: pointer;
    }

    iframe {
      display: block;
      width: 100%;
      height: 800px;
      max-height: 800px;
      border: none;
    }
  }

  .firefox-announcement-modal, .edge-announcement-modal {
    .modal-body {
      p {
        white-space: break-spaces;
        font-size: 14px;
      }
    }
  }

  @media screen and (max-height: 800px) {
    .payment-iframe-modal {
      .modal-body {
        max-height: 700px;
      }

      iframe {
        max-height: 700px;
        height: 700px;
      }
    }
  }
`,tn=p["default"].div`
  a {
    margin: 0 4px;
    color: var(--bilibili-blue);
  }
`,nn=le().get("hideAnnouncement")||!0,an=le().get("hideEdgeModal")||!1,on=le().get("hidePayment")||!1,sn=le().get("autoSync2Cloud"),ln=(0,N.EN)(class extends o.Component{constructor(e){super(e),(0,c.Z)(this,"passwordInputRef",o.createRef()),(0,c.Z)(this,"confirmPasswordInputRef",o.createRef()),(0,c.Z)(this,"signUpEmailInputRef",o.createRef()),(0,c.Z)(this,"signUpEmailCaptchaInputRef",o.createRef()),(0,c.Z)(this,"bindEmailInputRef",o.createRef()),(0,c.Z)(this,"bindEmailCaptchaInputRef",o.createRef()),(0,c.Z)(this,"changePasswordEmailInputRef",o.createRef()),(0,c.Z)(this,"changePasswordCaptchaInputRef",o.createRef()),(0,c.Z)(this,"passwordForChangeInputRef",o.createRef()),(0,c.Z)(this,"confirmPasswordForChangeInputRef",o.createRef()),(0,c.Z)(this,"autoSync2Cloud",void 0===sn||sn),(0,c.Z)(this,"state",{states:null,step:0,openPaymentModalAfterAction:!1,openChangePasswordModalAfterAction:!1,paymentIframeKey:0,emailForSignUp:"",captchaForSignUp:"",getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:60,password:"",confirmPassword:"",showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:"",getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:60,emailForBind:"",bindEmailCaptcha:"",email:"",getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:60,isResettingPassword:!1,logging:!1,loggingOut:!1,resettingPassword:!1,bhName:null,bhid:null,blidList:[],identities:[],hasLogin:!1,hasRegister:!1,bilibiliAccount:null,bhAccount:null,downloadSettings:!1,needFillPassword:!1,needRefreshPage:!1,hasLocalBilibiliAccountLogin:!1,hasLocalBilibiliHelperAccountLogin:!1,hasLocalBilibiliHelperAccountRegister:!1,loginModalShow:!1,resetModalShow:!1,signOutModalShow:!1,announcementModalShow:!nn,showBindEmailModal:!1,showChangePasswordModal:!1,showPaymentModal:!on,showFirefoxModal:!1,showEdgeModal:!an,uploadSettings:e=>new(i())(t=>{if(!this.state.hasLogin||!this.autoSync2Cloud)return t(!1);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:e},e=>{t(e)})}),resetPassword:()=>{const{bilibiliAccount:e,password:t}=this.state;return e&&e.hasLogin&&e.uid?(this.setState({resettingPassword:!0}),new(i())(n=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"resetPassword",uid:e.uid,password:t},e=>{n(e)})})):i().resolve(!1)},handleOnClickLogin:()=>(this.setState({logging:!0}),new(i())(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login",password:this.state.password,uid:this.state.bilibiliAccount.uid},t=>{if(setTimeout(()=>{this.setState({logging:!1})},1e3),t&&!0===t.hasLogin){const{hasLogin:n,bilibiliAccount:a,bhAccount:i}=t;h.Message.info("\u767b\u5f55\u6210\u529f"),this.setState({hasLogin:n,bhAccount:i,bilibiliAccount:a}),e(!0)}else"WRONG_PASSWORD"===(null===t||void 0===t?void 0:t.type)?(h.Message.error(o.createElement(o.Fragment,null,"\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u6ce8\u610f\u533a\u5206 \u52a9\u624b\u8d26\u53f7 \u4e0e B\u7ad9\u8d26\u53f7")),e(!1)):null!==t&&void 0!==t&&t.message?(h.Message.error(o.createElement(o.Fragment,null,t.message)),e(!1)):(h.Message.error(o.createElement(o.Fragment,null,t.message,"\uff0c\u4e00\u76f4\u5931\u8d25\u7684\u8bdd\u5c31",o.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"),"\u5427")),e(!1))})})),handleOnClickRegister:()=>{this.handleOnClickValidateCaptchaForSignUp()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickSignOut:()=>(this.setState({loggingOut:!0}),new(i())(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"signOut"},t=>{this.setState({loggingOut:!1}),t?(h.Message.info("\u767b\u51fa\u6210\u529f"),this.setState({hasLogin:!1}),e(!0)):(h.Message.info("\u767b\u51fa\u5931\u8d25"),e(!1))})})),handleOnClickRefresh:()=>{history.go()},handleOnClickShowLoginModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"login"}),this.setState({loginModalShow:!0,password:"",confirmPassword:"",logging:!1,showPassword:!1,showFirefoxModal:!1,showEdgeModal:!1})},handleOnClickHideLoginModal:()=>{this.setState({loginModalShow:!1,logging:!1},()=>{setTimeout(()=>{this.setState({step:0,password:"",confirmPassword:"",hasRegister:!1})},300)})},handleOnClickShowPaymentModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"payment"}),this.refreshPaymentIframe(),this.setState({showPaymentModal:!0,openPaymentModalAfterAction:!1})},handleOnClickHidePaymentModal:()=>{this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!1,loginModalShow:!1}),le().set("hidePayment",!0)},handleOnClickShowSignOutModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"sign_out"}),this.setState({signOutModalShow:!0,loggingOut:!1})},handleOnClickHideSignOutModal:()=>{this.setState({signOutModalShow:!1,loggingOut:!1})},handleOnClickShowAnnouncementModal:()=>{this.setState({announcementModalShow:!0})},handleOnClickHideAnnouncementModal:()=>{this.setState({announcementModalShow:!1}),le().set("hideAnnouncement",!0)},handleOnClickShowBindEmailModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"bind_email"}),this.setState({showBindEmailModal:!0},()=>{this.bindEmailInputRef.current.focus()})},handleOnClickHideBindEmailModal:()=>{this.setState({showBindEmailModal:!1})},handleOnClickShowChangePasswordModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"change_password"}),this.setState({showChangePasswordModal:!0})},handleOnClickHideChangePasswordModal:()=>{this.setState({showChangePasswordModal:!1})},handleOnClickChangePassword:()=>{this.state.bhAccount?this.state.bhAccount.email?this.state.handleOnClickShowChangePasswordModal():(this.setState({openChangePasswordModalAfterAction:!0}),this.state.handleOnClickShowBindEmailModal()):h.Message.info("\u8bf7\u5148\u767b\u5f55\u52a9\u624b\u8d26\u53f7")},sendPaymentMessage:()=>{this.state.states&&this.state.states.paymentIframe?this.state.handleOnClickShowPaymentModal():h.Message.info(o.createElement(tn,null,"\u7cfb\u7edf\u72b6\u6001\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u6216",o.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b")))},sendPublicBetaMessage:()=>{},openPage:e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")},handleOnClickShowFirefoxModal:()=>{this.setState({showFirefoxModal:!0})},handleOnClickHideFirefoxModal:()=>{this.setState({showFirefoxModal:!1}),this.state.handleOnClickShowLoginModal()},handleOnClickShowEdgeModal:()=>{this.setState({showEdgeModal:!0})},handleOnClickHideEdgeModal:()=>{this.setState({showEdgeModal:!1}),le().set("hideEdgeModal",!0)}}),(0,c.Z)(this,"urlParamHasUsedForShowPaymentModal",!1),(0,c.Z)(this,"handleOnClickNavigation",e=>{const{history:t,location:n}=this.props;n.pathname!==e&&t.push(e)}),(0,c.Z)(this,"handleOnClickLogin",()=>{const{password:e}=this.state;!e||e.length<6?h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):this.state.handleOnClickLogin().then(e=>{e&&(this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({loginModalShow:!1}))})}),(0,c.Z)(this,"handleOnClickRegister",()=>{this.state.handleOnClickRegister()}),(0,c.Z)(this,"handleOnClickReset",()=>{const{password:e,confirmPassword:t}=this.state;!e||e.length<6?h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?h.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):this.state.resetPassword().then(e=>{"NO_ACCESS_TO_RESET_PASSWORD"===e?h.Message.error(o.createElement(tn,null,"\u65e0\u6cd5\u91cd\u7f6e\u5bc6\u7801\uff0c\u8bf7\u4f7f\u7528\u6ce8\u518c\u65f6\u4f7f\u7528\u7684b\u7ad9\u8d26\u53f7",o.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"),"\u4ee5\u83b7\u5f97\u91cd\u7f6e\u6743\u9650"),0):e?(this.state.handleOnClickShowLoginModal(),this.setState({resettingPassword:!1,isResettingPassword:!1,password:""},()=>{h.Message.info("\u5bc6\u7801\u91cd\u7f6e\u6210\u529f\uff0c\u8bf7\u524d\u5f80\u767b\u5f55"),this.passwordInputRef.current.focus()})):h.Message.info(o.createElement(tn,null,"\u5bc6\u7801\u91cd\u7f6e\u5931\u8d25\uff0c\u8bf7",o.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b")))})}),(0,c.Z)(this,"handleOnClickSignOut",()=>{this.state.handleOnClickSignOut().then(e=>{e&&this.state.handleOnClickHideSignOutModal()})}),(0,c.Z)(this,"handleOnChangeSignUpEmail",e=>{this.setState({emailForSignUp:e.target.value.replace(/\s/g,"").slice(0,128)})}),(0,c.Z)(this,"handleOnKeyDownEmailForSignUp",e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForSignUp(),this.signUpEmailCaptchaInputRef.current.focus())}),(0,c.Z)(this,"handleOnChangeSignUpCaptcha",e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForSignUp:t.slice(0,6)})}),(0,c.Z)(this,"handleOnChangeBindEmail",e=>{this.setState({emailForBind:e.target.value.replace(/\s/g,"").slice(0,128)})}),(0,c.Z)(this,"handleOnChangeBindEmailCaptcha",e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({bindEmailCaptcha:t.slice(0,6)})}),(0,c.Z)(this,"handleOnChangePasswordChangeCaptcha",e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForChangePassword:t.slice(0,6)})}),(0,c.Z)(this,"handleOnChangeChangePasswordEmail",e=>{this.setState({emailForChangePassword:e.target.value.replace(/\s/g,"").slice(0,128)})}),(0,c.Z)(this,"handleOnChangePasswordForChange",e=>{this.setState({passwordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})}),(0,c.Z)(this,"handleOnChangeConfirmPasswordForChange",e=>{this.setState({confirmPasswordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})}),(0,c.Z)(this,"handleOnChangePassword",e=>{this.setState({password:e.target.value.replace(/\s/g,"").slice(0,64)})}),(0,c.Z)(this,"handleOnChangeConfirmPassword",e=>{this.setState({confirmPassword:e.target.value.replace(/\s/g,"").slice(0,64)})}),(0,c.Z)(this,"handleOnKeyDownBindEmailInput",e=>{e.persist(),"Enter"===e.key&&(this.bindEmailCaptchaInputRef.current.focus(),this.handleOnClickGetCaptchaForBindEmail())}),(0,c.Z)(this,"handleOnKeyDownBindEmailCaptchaInput",e=>{e.persist(),"Enter"===e.key&&this.handleOnClickValidateCaptchaForBindEmail()}),(0,c.Z)(this,"handleOnClickGetCaptchaForSignUp",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"sign_up"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?h.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u540e"):this.state.emailForSignUp&&(0,F.isValidEmail)(this.state.emailForSignUp)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForSignUp",blid:this.state.bilibiliAccount.uid,email:this.state.emailForSignUp},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getSignUpCaptchaCooling:!0,signUpCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.signUpCaptchaCountDown>1?this.setState({signUpCaptchaCountDown:this.state.signUpCaptchaCountDown-1}):(clearInterval(e),this.setState({getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:0}))},1e3)}),h.Message.info(e)}):h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"):h.Message.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5"))),(0,c.Z)(this,"handleOnClickValidateCaptchaForSignUp",()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"sign_up"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return h.Message.info("\u8bf7\u5148\u767b\u5f55B\u7ad9\u8d26\u53f7\uff0c\u7136\u540e\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5");if(!this.state.emailForSignUp||!(0,F.isValidEmail)(this.state.emailForSignUp))return h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForSignUp)return h.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForSignUp).length||isNaN(this.state.captchaForSignUp))return h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{password:e,confirmPassword:t}=this.state;return!e||e.length<6?h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):t!==t?h.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):(this.setState({logging:!0}),void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForSignUp",email:this.state.emailForSignUp,blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForSignUp,password:e},e=>{this.setState({logging:!1}),"\u6ce8\u518c\u6210\u529f"===e&&(chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"initBHAccount"},e=>{const{hasLogin:t,bhAccount:n}=e;this.setState({hasLogin:t,bhAccount:n})}),this.setState({loginModalShow:!1,showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForSignUp:""})),h.Message.info(e)}))}),(0,c.Z)(this,"handleOnClickGetCaptchaForResetPassword",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"reset_password"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?h.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019"):this.state.emailForChangePassword&&(0,F.isValidEmail)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,email:this.state.emailForChangePassword},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))},1e3)}),h.Message.info(e)}):h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"):h.Message.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5"))),(0,c.Z)(this,"handleOnClickValidateCaptchaForResetPassword",()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"reset_password"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return h.Message.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5");if(!this.state.emailForChangePassword||!(0,F.isValidEmail)(this.state.emailForChangePassword))return h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForChangePassword)return h.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?h.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},e=>{"\u4fee\u6539\u6210\u529f"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),h.Message.info(e)})}),(0,c.Z)(this,"handleOnClickGetCaptchaForChangePassword",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"change_password"}),this.state.getChangePasswordCaptchaCooling?h.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019"):this.state.emailForChangePassword&&(0,F.isValidEmail)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForChangePassword",email:this.state.emailForChangePassword},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))},1e3)}),h.Message.info(e)}):h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"))),(0,c.Z)(this,"handleOnClickValidateCaptchaForChangePassword",()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"change_password"}),!this.state.emailForChangePassword||!(0,F.isValidEmail)(this.state.emailForChangePassword))return h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForChangePassword)return h.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?h.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForChangePassword",captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},e=>{"\u4fee\u6539\u6210\u529f"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),h.Message.info(e)})}),(0,c.Z)(this,"handleOnClickGetCaptchaForBindEmail",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"bind_email"}),this.state.getBindEmailCaptchaCooling?(this.bindEmailCaptchaInputRef.current.focus(),h.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019")):this.state.emailForBind&&(0,F.isValidEmail)(this.state.emailForBind)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForBindEmail",email:this.state.emailForBind},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getBindEmailCaptchaCooling:!0,bindEmailCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.bindEmailCaptchaCountDown>1?this.setState({bindEmailCaptchaCountDown:this.state.bindEmailCaptchaCountDown-1}):(clearInterval(e),this.setState({getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:0}))},1e3)}),h.Message.info(e)}):h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"))),(0,c.Z)(this,"handleOnClickValidateCaptchaForBindEmail",()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"bind_email"}),this.state.emailForBind&&(0,F.isValidEmail)(this.state.emailForBind)?this.state.bindEmailCaptcha?6!==String(this.state.bindEmailCaptcha).length||isNaN(this.state.bindEmailCaptcha)?h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForEmailBind",captcha:this.state.bindEmailCaptcha},e=>{if("\u7ed1\u5b9a\u6210\u529f"===e){const{bhAccount:e}=this.state;e.email=this.state.emailForBind.split("@").map((e,t)=>0===t?(e=e.slice(0,3)+e.slice(4).replace(/./g,"*"),e):e).join("@"),this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({openChangePasswordModalAfterAction:!1,showBindEmailModal:!1,bhAccount:e,email:this.state.emailForBind}),this.state.openChangePasswordModalAfterAction&&this.state.handleOnClickShowChangePasswordModal()}h.Message.info(e)}):h.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"):h.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"))),(0,c.Z)(this,"handleOnKeyDownPasswordInput",e=>{e.persist(),"Enter"===e.key&&(this.state.hasRegister?this.handleOnClickLogin():this.confirmPasswordInputRef.current.focus())}),(0,c.Z)(this,"handleOnKeyDownSignUpCaptchaInput",e=>{e.persist(),"Enter"===e.key&&this.passwordInputRef.current.focus()}),(0,c.Z)(this,"handleOnKeyDownEmailForChangePasswordInput",e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForChangePassword(),this.changePasswordCaptchaInputRef.current.focus())}),(0,c.Z)(this,"handleOnKeyDownChangePasswordCaptchaInput",e=>{e.persist(),"Enter"===e.key&&this.passwordForChangeInputRef.current.focus()}),(0,c.Z)(this,"handleOnKeyDownConfirmPasswordInput",e=>{const{isResettingPassword:t}=this.state;"Enter"===e.key&&(t?this.handleOnClickReset():this.handleOnClickLogin())}),(0,c.Z)(this,"handleOnKeyDownPasswordForChangeInput",e=>{e.persist(),"Enter"===e.key&&this.confirmPasswordForChangeInputRef.current.focus()}),(0,c.Z)(this,"handleOnKeyDownConfirmPasswordForChangeInput",e=>{"Enter"===e.key&&this.handleOnClickValidateCaptchaForChangePassword()}),(0,c.Z)(this,"handleOnClickShowPassword",()=>{this.setState({showPassword:!this.state.showPassword})}),(0,c.Z)(this,"onLoadPaymentPage",(function(e){e.persist()})),(0,c.Z)(this,"refreshPaymentIframe",()=>{this.setState({paymentIframeKey:this.state.paymentIframeKey+1})}),(0,c.Z)(this,"handleOnGotoReport",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})}),(0,c.Z)(this,"renderLoginUI",()=>{const{step:e,password:t,showPassword:n,logging:a,hasLogin:i,bilibiliAccount:s,handleOnClickShowChangePasswordModal:l}=this.state;return o.createElement(o.Fragment,null,o.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},o.createElement(h.Button,{disabled:i,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1,hasRegister:!0})}},"\u4ee5",o.createElement(h.Image,{url:s.face,className:"avatar"}),"\u767b\u5f55",o.createElement(h.Icon,{size:16,icon:"bilibilihelper"}),"\u8d26\u53f7")),o.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},o.createElement("div",{className:"welcome-topic"},"\u6b63\u5728\u4ee5 ",o.createElement("b",null,s.name)," \u8eab\u4efd\u767b\u5f55(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",o.createElement("br",null),o.createElement("b",{className:"important"},"\u6b63\u5728\u767b\u5f55\u52a9\u624b\u8d26\u53f7\uff0c\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801")),o.createElement("div",{className:"password-box"},o.createElement(h.Input,{ref:this.passwordInputRef,name:"password",type:n?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\u8fdb\u884c\u767b\u5f55",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t}),o.createElement("div",{className:"extra-box"},o.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},o.createElement(h.CheckboxRect,{active:n})," \u663e\u793a\u5bc6\u7801"),o.createElement("p",{className:"description"}))),o.createElement(h.Button,{disableEvent:!1,disabled:!t||t.length<6||a,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickLogin},"\u767b\u5f55"),o.createElement("div",{className:"extra-box"},o.createElement("a",{className:"forget-password-btn",onClick:l},"\u5fd8\u8bb0\u5bc6\u7801"))))}),(0,c.Z)(this,"renderRegisterUI",()=>{const{step:e,password:t,confirmPassword:n,showPassword:a,logging:i,resettingPassword:s,emailForSignUp:l,hasLogin:r,hasRegister:c,bilibiliAccount:p}=this.state;return o.createElement(o.Fragment,null,o.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},o.createElement(h.Button,{disabled:r,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1,hasRegister:!0})}},"\u4ee5",o.createElement(h.Image,{url:p.face,className:"avatar"}),"\u767b\u5f55",o.createElement(h.Icon,{size:16,icon:"bilibilihelper"}),"\u8d26\u53f7"),o.createElement(h.Button,{disabled:c,className:"primary",onClick:()=>{this.signUpEmailInputRef.current.focus(),this.setState({step:1,hasRegister:!1})}},"\u4ee5",o.createElement(h.Image,{url:p.face,className:"avatar"}),"\u6ce8\u518c",o.createElement(h.Icon,{size:16,icon:"bilibilihelper"}),"\u8d26\u53f7")),o.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},o.createElement("div",{className:"welcome-topic"},"\u6b63\u5728\u4ee5 ",o.createElement("b",null,p.name)," \u8eab\u4efd\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"),o.createElement("div",{className:"email-wrapper"},o.createElement(h.Input,{ref:this.signUpEmailInputRef,name:"emailForSignup",type:"email",className:["email-input","input"].join(" "),placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u7ed1\u5b9a\u7684\u90ae\u7bb1",onChange:this.handleOnChangeSignUpEmail,onKeyDown:this.handleOnKeyDownEmailForSignUp,value:l,minlength:6})),o.createElement("div",{className:"captcha-wrapper"},o.createElement(h.Input,{ref:this.signUpEmailCaptchaInputRef,name:"signUpEmailCaptcha",type:"text",className:["sign-up-email-captcha-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangeSignUpCaptcha,onKeyDown:this.handleOnKeyDownSignUpCaptchaInput,value:this.state.captchaForSignUp,size:6}),o.createElement(h.Button,{className:"primary",onClick:this.handleOnClickGetCaptchaForSignUp,disabled:!this.state.emailForSignUp||this.state.getSignUpCaptchaCooling,disableEvent:!1},this.state.getSignUpCaptchaCooling?`\u8bf7\u7b49\u5f85${this.state.signUpCaptchaCountDown}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),o.createElement("div",{className:"password-box"},o.createElement(h.Input,{ref:this.passwordInputRef,type:a?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u957f\u5ea6\u4e0d\u5c0f\u4e8e6\u4f4d",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t})),o.createElement("div",{className:"confirm-password-box"},o.createElement(h.Input,{ref:this.confirmPasswordInputRef,type:a?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u91cd\u590d\u8f93\u5165\u4e00\u904d\u5bc6\u7801",onChange:this.handleOnChangeConfirmPassword,onKeyDown:this.handleOnKeyDownConfirmPasswordInput,value:n}),o.createElement("div",{className:"extra-box"},o.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},o.createElement(h.CheckboxRect,{active:a})," \u663e\u793a\u5bc6\u7801"),o.createElement("p",{className:"description"},"\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801"))),o.createElement(h.Button,{disableEvent:!1,disabled:!t||t.length<6||!n||n.length<6||i||s,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickRegister},"\u6ce8\u518c")))}),(0,c.Z)(this,"renderTitle",()=>{const{step:e,hasRegister:t}=this.state;let n="\u767b\u5f55";return t||(n="\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"),0===e&&(n="\u8bf7\u9009\u62e9\u767b\u5f55\u65b9\u5f0f"),n})}componentDidMount(){chrome.runtime.onMessage.addListener((e,t,n)=>{const{action:a}=e;return"openLoginModal"===a?(h.Message.info("\u8bf7\u5148\u767b\u5f55\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u54e6"),this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowLoginModal)):"openBindEmailModal"===a?(h.Message.info("\u60a8\u8fd8\u6ca1\u6709\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u5148\u7ed1\u5b9a\u90ae\u7bb1\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u54e6"),this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowBindEmailModal)):"payComplete"===a?(h.Message.info("\u6536\u5230\u6765\u81ea\u652f\u4ed8\u9875\u7684\u8ba2\u5355\u786e\u8ba4\u8bf7\u6c42\uff0c\u6b63\u5728\u786e\u8ba4\u8bf7\u7a0d\u5019"),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryTradeNoComplete",outTradeNo:e.outTradeNo},e=>{if(e&&"10000"===e.code){h.Message.info("\u8ba2\u5355\u786e\u8ba4\u5b8c\u6210\uff0c\u6b63\u5728\u66f4\u65b0\u7528\u6237\u6570\u636e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),this.state.handleOnClickHidePaymentModal(),h.Message.info("\u7528\u6237\u6570\u636e\u66f4\u65b0\u5b8c\u6210\uff0c\u611f\u8c22\u60e0\u987e~");const{hasLogin:t,bhAccount:n}=e;this.setState({hasLogin:t,bhAccount:n})}else h.Message.error(`\u8ba2\u5355\u5f02\u5e38 (${e.code}): ${e.sub_msg}\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d`)})):"useRedeem"===a&&chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"useRedeem",code:e.code},e=>{if("\u5151\u6362\u6210\u529f"===e.message){h.Message.info("\u5151\u6362\u7801\u6fc0\u6d3b\u6210\u529f\uff0c\u6b63\u5728\u66f4\u65b0\u7528\u6237\u6570\u636e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),this.state.handleOnClickHidePaymentModal(),h.Message.info("\u7528\u6237\u6570\u636e\u66f4\u65b0\u5b8c\u6210\uff0c\u611f\u8c22\u60e0\u987e~");const{hasLogin:t,bhAccount:n}=e;this.setState({hasLogin:t,bhAccount:n})}else h.Message.error("\u5151\u6362\u7801\u6fc0\u6d3b\u5931\u8d25: "+e)}),!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{const{hasLogin:t,bilibiliAccount:n,downloadingSettings:a,hasRegister:i}=e;this.setState({hasLogin:t,bilibiliAccount:n,downloadingSettings:a,hasRegister:i})}),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e})}),location.href.match(/[?&]?showPaymentModal=1&?/)&&!this.urlParamHasUsedForShowPaymentModal&&(this.urlParamHasUsedForShowPaymentModal=!0,this.state.handleOnClickShowPaymentModal())}render(){const{location:e}=this.props,{states:t,step:n,password:a,confirmPassword:i,showPassword:s,logging:r,paymentIframeKey:c,emailForChangePassword:p,email:d,emailForBind:g,bindEmailCaptcha:u,getBindEmailCaptchaCooling:m,bindEmailCaptchaCountDown:b,hasLogin:f,hasRegister:v,bilibiliAccount:C,needRefreshPage:E,showPaymentModal:S,showFirefoxModal:y,showEdgeModal:w,loginModalShow:x,resetModalShow:k,signOutModalShow:M,announcementModalShow:O,showChangePasswordModal:A,handleOnClickHideChangePasswordModal:I,showBindEmailModal:L,handleOnClickHideBindEmailModal:P,handleOnClickHideSignOutModal:B,handleOnClickHideAnnouncementModal:D}=this.state;return o.createElement(z.Provider,{value:this.state},o.createElement(qt,null,o.createElement(Xt,null,o.createElement("ul",null,$t.map(({key:t,path:n})=>o.createElement("li",{key:n,className:e.pathname===n?"active":null,onClick:()=>this.handleOnClickNavigation(n)},(0,l.__)("config_main_navigation_"+t))))),o.createElement(Jt,null,o.createElement(N.rs,{location:e},$t.map(({key:e,path:t,component:n})=>o.createElement(N.AW,{key:e,path:t,exact:!0,render:()=>o.createElement(n,null)}))))),o.createElement(en,null,o.createElement(h.Modal,{open:x,className:"login-modal",title:this.renderTitle(),buttons:o.createElement("div",{className:"footer"},o.createElement("p",{className:"description"},o.createElement("span",null,o.createElement("b",{style:{marginRight:4}},"\u203b"),"\u70b9\u51fb\u767b\u5f55\u5373\u8868\u793a\u60a8\u5df2\u540c\u610f",o.createElement("a",{href:"https://bilibilihelper.com/licence.html",target:"_blank",rel:"noreferrer"},"\u300a\u4f7f\u7528\u6761\u6b3e\u300b"),"\u548c",o.createElement("a",{href:"https://bilibilihelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"\u300a\u9690\u79c1\u534f\u8bae\u300b"))),o.createElement(h.Button,{onClick:this.state.handleOnClickHideLoginModal},"\u53d6\u6d88"))},C?v?this.renderLoginUI():this.renderRegisterUI():E?o.createElement(h.Button,{onClick:this.state.handleOnClickRefresh},"\u8bf7\u767b\u5f55",o.createElement(h.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u540e\u5237\u65b0\u672c\u9875\u9762"):v?o.createElement(h.Button,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},o.createElement("div",null,"\u8bf7\u5148\u767b\u5f55",o.createElement(h.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u518d\u767b\u5f55\u52a9\u624b\u8d26\u53f7")):o.createElement(h.Button,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},o.createElement("div",null,"\u8bf7\u5148\u767b\u5f55",o.createElement(h.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u518d\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"))),o.createElement(h.Modal,{open:M,className:"sign-out-modal",onClickMask:B,title:"\u8981\u5173\u95ed\u540c\u6b65\u548c\u4e2a\u6027\u5316\u529f\u80fd\u5417\uff1f",buttons:o.createElement("div",{className:"footer"},o.createElement(h.Button,{className:"border",onClick:B},"\u53d6\u6d88"),o.createElement(h.Button,{className:"primary",onClick:this.handleOnClickSignOut},"\u9000\u51fa"))},o.createElement("p",null,"\u6267\u884c\u6b64\u64cd\u4f5c\u4f1a\u4f7f\u60a8\u9000\u51fa ",o.createElement(h.Icon,{icon:"bilibilihelper",size:16})," \u5e10\u53f7\u3002"),o.createElement("p",null,"\u60a8\u7684\u7279\u522b\u5173\u6ce8\u4ee5\u53ca\u5176\u4ed6\u8bbe\u7f6e\u5c06\u4e0d\u518d\u4fdd\u6301\u540c\u6b65\u3002")),o.createElement(h.Modal,{open:O,className:"public-beta-announcement",onClickMask:D,title:"\u611f\u8c22\u4f7f\u7528 2.0+ \u65b0\u7248\u54d4\u54e9\u54d4\u54e9\u52a9\u624b",buttons:o.createElement("div",{className:"footer"},o.createElement(h.Button,{className:"primary hide-announcement-btn",onClick:D},"\u77e5\u9053\u5566~"))},o.createElement("p",null,"\u76ee\u524d\u6211\u4eec\u5df2\u7ecf\u7ed3\u675f\u4e8e\u5f00\u653e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u8fd9\u4e2a\u9636\u6bb5\u4ece2\u6708\u4efd\u5f00\u59cb\u6301\u7eed\u4e86\u597d\u51e0\u4e2a\u6708\u3002"),o.createElement("p",null,"\u671f\u95f4\u6211\u4eec\u9010\u6b65\u589e\u52a0\u4e86\u4e00\u4e9b\u529f\u80fd\uff0c\u505a\u4e86\u5404\u79cd\u4f18\u5316\uff0c\u5e76\u4e14\u4fdd\u6301\u6240\u6709\u529f\u80fd\u7684\u514d\u8d39\u4f7f\u7528\u3002"),o.createElement("p",null,"\u73b0\u5728\u90e8\u5206\u529f\u80fd\u9700\u8981\u4ed8\u8d39\u89e3\u9501\u540e\u624d\u80fd\u4f7f\u7528"),o.createElement("p",null,"\u5e76\u4e141.0+\u7248\u672c\u4e2d\u7684\u6240\u6709\u529f\u80fd\u6c38\u8fdc\u4e0d\u4f1a\u8fdb\u884c\u6536\u8d39"),o.createElement("p",null,"\u5e26\u6709",o.createElement(h.Icon,{icon:"cat-paw",size:16}),"\u6807\u5fd7\u7684\u529f\u80fd\u4e3a\u6536\u8d39\u6216\u8005\u53ef\u89e3\u9501\u9ad8\u7ea7\u7279\u6027\u7684\u529f\u80fd"),o.createElement("br",null),o.createElement("p",null,"\u203b \u5df2\u7ecf\u901a\u8fc7\u7231\u53d1\u7535\u652f\u6301\u8d5e\u52a9\u7684\u5c0f\u4f19\u4f34\u8bf7\u67e5\u9605b\u7ad9\u79c1\u4fe1\uff0c\u52a9\u624b\u732b\u5df2\u7ecf\u53d1\u653e\u4e86\u5151\u6362\u7801\u54e6",o.createElement("br",null),"\u70b9\u51fb\u7eed\u8ba2\u4f1a\u5458\u754c\u9762\u53f3\u4e0a\u89d2\u8fdb\u884c\u5151\u6362\u3002")),o.createElement(h.Modal,{open:L,className:"bind-email-modal",title:"\u7ed1\u5b9a\u90ae\u7bb1",buttons:o.createElement("div",{className:"footer"},o.createElement(h.Button,{className:"border",onClick:P},"\u5173\u95ed"),o.createElement(h.Button,{className:"primary",onClick:this.handleOnClickValidateCaptchaForBindEmail,disabled:!this.state.bindEmailCaptcha||!g,disableEvent:!1},"\u786e\u8ba4\u7ed1\u5b9a"))},o.createElement(h.Input,{ref:this.bindEmailInputRef,name:"bindEmail",type:"email",className:["bind-email-input","input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u7ed1\u5b9a\u90ae\u7bb1",onChange:this.handleOnChangeBindEmail,onKeyDown:this.handleOnKeyDownBindEmailInput,value:g,minlength:6}),o.createElement("div",{className:"captcha-wrapper"},o.createElement(h.Input,{ref:this.bindEmailCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["captcha-input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangeBindEmailCaptcha,onKeyDown:this.handleOnKeyDownBindEmailCaptchaInput,value:u,size:6}),o.createElement(h.Button,{className:"primary",onClick:this.handleOnClickGetCaptchaForBindEmail,disabled:!this.state.emailForBind||m,disableEvent:!1},m?`\u8bf7\u7b49\u5f85${b}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),o.createElement(h.Modal,{open:A,className:"change-password-modal",title:f?"\u4fee\u6539\u5bc6\u7801":"\u91cd\u7f6e\u5bc6\u7801",buttons:o.createElement("div",{className:"footer"},o.createElement(h.Button,{className:"border",onClick:I},"\u5173\u95ed"),o.createElement(h.Button,{className:"primary",onClick:f?this.handleOnClickValidateCaptchaForChangePassword:this.handleOnClickValidateCaptchaForResetPassword,disabled:!this.state.captchaForChangePassword||!this.state.passwordForChange||!this.state.confirmPasswordForChange||!this.state.emailForChangePassword,disableEvent:!1},f?"\u786e\u8ba4\u4fee\u6539":"\u786e\u8ba4\u91cd\u7f6e"))},o.createElement("div",{className:"email-wrapper"},o.createElement(h.Input,{ref:this.changePasswordEmailInputRef,name:"emailForChangePassword",type:"email",className:["email-input","input"].join(" "),placeholder:f&&this.state.bhAccount?this.state.bhAccount.email:"\u8bf7\u8f93\u5165\u7ed1\u5b9a\u90ae\u7bb1",onChange:this.handleOnChangeChangePasswordEmail,onKeyDown:this.handleOnKeyDownEmailForChangePasswordInput,value:p,minlength:6}),f&&this.state.bhAccount&&this.state.bhAccount.email?null:o.createElement("div",{className:"no-email-prompt"},"\u5982\u6ca1\u6709\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u53d1\u7ed9 ",o.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u52a9\u624b\u732b")," \u5e2e\u4f60\u7ed1\u5b9a")),o.createElement("div",{className:"captcha-wrapper"},o.createElement(h.Input,{ref:this.changePasswordCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["bind-email-captcha-input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangePasswordChangeCaptcha,onKeyDown:this.handleOnKeyDownChangePasswordCaptchaInput,value:this.state.captchaForChangePassword,size:6}),o.createElement(h.Button,{className:"primary",onClick:f?this.handleOnClickGetCaptchaForChangePassword:this.handleOnClickGetCaptchaForResetPassword,disabled:!this.state.emailForChangePassword||this.state.getChangePasswordCaptchaCooling,disableEvent:!1},this.state.getChangePasswordCaptchaCooling?`\u8bf7\u7b49\u5f85${this.state.changePasswordCaptchaCountDown}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),o.createElement("div",{className:"password-box"},o.createElement(h.Input,{ref:this.passwordForChangeInputRef,type:s?"text":"password",className:["password-input",1===n?"active":"",n>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u957f\u5ea6\u4e0d\u5c0f\u4e8e6\u4f4d",onChange:this.handleOnChangePasswordForChange,onKeyDown:this.handleOnKeyDownPasswordForChangeInput,value:this.state.passwordForChange})),o.createElement("div",{className:"confirm-password-box"},o.createElement(h.Input,{ref:this.confirmPasswordForChangeInputRef,type:s?"text":"password",className:["password-input"].join(" "),placeholder:"\u8bf7\u91cd\u590d\u8f93\u5165\u4e00\u904d\u5bc6\u7801",onChange:this.handleOnChangeConfirmPasswordForChange,onKeyDown:this.handleOnKeyDownConfirmPasswordForChangeInput,value:this.state.confirmPasswordForChange}),o.createElement("div",{className:"extra-box"},o.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},o.createElement(h.CheckboxRect,{active:s})," \u663e\u793a\u5bc6\u7801"),o.createElement("p",{className:"description"},"\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801")))),o.createElement(h.Modal,{open:S,className:"payment-iframe-modal"},o.createElement("iframe",{key:c,src:S?t&&t.paymentIframe:null}),o.createElement(h.Icon,{className:"close-payment-modal-btn",icon:"close",size:16,onClick:this.state.handleOnClickHidePaymentModal})),o.createElement(h.Modal,{open:y,className:"firefox-announcement-modal",title:"\u706b\u72d0\u7528\u6237\u987b\u77e5",buttons:o.createElement("div",{className:"footer"},o.createElement(h.Button,{className:"primary",onClick:this.state.handleOnClickShowLoginModal},"\u6211\u5df2\u77e5\u6089"))},o.createElement("p",null,"\u4e3a\u4e86\u66f4\u52a0\u7a33\u5b9a\u7684\u63d0\u4f9b\u670d\u52a1\u4e0e\u907f\u514d\u610f\u5916\u53d1\u751f\uff0c\u5728\u706b\u72d0\u7248\u52a9\u624b\u6682\u4e0d\u63d0\u4f9b\u300c\u4f1a\u5458\u5f00\u901a\u300d\u529f\u80fd\u3002",o.createElement("br",null),o.createElement("br",null),"\u5982\u679c\u60a8\u5df2\u7ecf\u662f\u4ed8\u8d39\u7528\u6237\uff0c\u8bf7\u6ce8\u610f\u52a9\u624b\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e0a\u90e8\u5206\u529f\u80fd\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\uff0c\u4f8b\u5982",o.createElement("b",null,"\u300c\u5f39\u5e55\u67e5\u8be2\u300d"),"\u3001",o.createElement("b",null,"\u300c\u4ec5\u97f3\u89c6\u9891\u4e0b\u8f7d\u300d"),"\u548c",o.createElement("b",null,"\u300c\u4e0b\u8f7d\u6587\u4ef6\u91cd\u547d\u540d\u300d"),"\u529f\u80fd\u7b49\u3002",o.createElement("br",null),o.createElement("br",null),"\u5982\u679c\u4e4b\u540e\u5904\u4e8e\u4e0b\u67b6\u6216\u8fdb\u884c\u76f8\u5173\u8c03\u6574\u72b6\u6001\uff0c\u4ed8\u8d39\u529f\u80fd\u53ef\u80fd\u4f1a\u5f02\u5e38\u6216\u65e0\u6cd5\u4f7f\u7528\u3002")),o.createElement(h.Modal,{open:w,className:"edge-announcement-modal",title:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e\u5462",buttons:o.createElement("div",{className:"footer"},o.createElement(h.Button,{className:"primary",onClick:this.state.handleOnClickHideEdgeModal},"\u6211\u5df2\u77e5\u6089"))},o.createElement("p",null,"\u4eb2\u7231\u7684\u7528\u6237\u60a8\u597d\uff0c\u5f53\u60a8\u9047\u5230\u95ee\u9898\u65f6\u8bf7\u8054\u7cfb \xa0",o.createElement("a",{href:"#",onClick:this.handleOnGotoReport},"b\u7ad9\u4eba\u5de5\u5ba2\u670d\u300c\u52a9\u624b\u732b\u300d"),"\u3002",o.createElement("br",null),o.createElement("br",null),"\u52a9\u624b\u732b\u6536\u5230\u6d88\u606f\u540e\u4f1a\u5c3d\u5feb\u7ed9\u60a8\u56de\u590d\u3002",o.createElement("br",null),o.createElement("br",null),"\u5982\u679c\u60a8\u89c9\u5f97\u52a9\u624b\u4e0d\u9519\u8bb0\u5f97\u4e94\u661f\u597d\u8bc4\u54e6\u3002"))))}}),rn=p.createGlobalStyle`
  .bilibili-helper-2-icon-cat-paw {
    margin: 0 8px 0 4px;
    color: var(--bilibili-pink);
    transform: rotate(-35deg);
    zoom: .74;
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
`;class cn extends o.Component{constructor(e){super(e),(0,c.Z)(this,"handleOnReloadExtension",()=>{chrome.runtime.reload()})}componentDidMount(){this.props.initialized||h.Message.error(o.createElement(o.Fragment,null,"\u52a9\u624b\u521d\u59cb\u5316\u5f02\u5e38",o.createElement("a",{className:"extension-reload-btn",onClick:this.handleOnReloadExtension},"\u70b9\u51fb\u91cd\u542f")),0),chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/config/home"})}render(){return o.createElement(b.UT,null,o.createElement(m,null),o.createElement(rn,null),o.createElement(D,null),o.createElement(ln,null))}}const hn=()=>new(i())(e=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},t=>{e(!!t.bilibiliHelperAccount)})}),pn=3;let dn=0,gn=!1;const un=document.getElementById("root"),mn=()=>new(i())(e=>{hn().then(t=>{t?((0,l.L)().then(()=>{(0,s.render)(o.createElement(cn,{initialized:!0}),un,r.ng)}),e(!0)):dn<pn?(gn||(gn=!0,(0,s.render)("\u521d\u59cb\u5316\u4e2d\uff0c\u8bf7\u7a0d\u5019",un)),++dn,setTimeout(mn,1e3)):((0,l.L)().then(()=>{(0,s.render)(o.createElement(cn,{initialized:!1}),un,r.ng)}),e(!1))})});mn()},55928:(e,t,n)=>{n.d(t,{I:()=>a});const a={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"}},71338:(e,t,n)=>{n.d(t,{$:()=>i});var a=n(60677);a.css`
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
`;const i=a.css`
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
`},73226:(e,t,n)=>{n.d(t,{rS:()=>a.theme});n(11925);var a=n(32699)},38595:(e,t,n)=>{n.d(t,{O:()=>a});const a={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"}},32699:(e,t,n)=>{n.r(t),n.d(t,{baseFontSize:()=>s,theme:()=>l});var a=n(11925);const i=1e3,o=204,s=12,l={color:a.$_,logoHeight:50,bodyMinWidth:i,headerHeight:0,sidebarWidth:o,mainWidth:i-o,baseFontSize:s,fontFamily:a.I8,fontSize:a.JB,rem:a.hO,textOverflow:a._X,transition:a.eR,boxShadow:a.Wn,marginTrim:a.O3,hideScrollbar:a.Yh,opacity:a.Oh}},11925:(e,t,n)=>{n.d(t,{$_:()=>u,I8:()=>p,JB:()=>d,O3:()=>f,Oh:()=>c.O,Wn:()=>m,Yh:()=>v,_X:()=>g,eR:()=>b,hO:()=>h});var a=n(41609),i=n.n(a),o=n(60677),s=n(6767),l=n.n(s),r=n(55928),c=n(38595);const h=(e,t=16)=>e/t+"rem",p=(e="")=>o.css`
    font-family: ${i()(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`,d=(e=16)=>o.css`
    font-size: ${h(e)};
`,g=(e=1)=>1===e?o.css`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:o.css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`,u=(e,t=1)=>r.I[e]?l()(r.I[e]).alpha(t).rgb().string():void 0,m=([...e])=>{const t=1,n="#000000",a=.5;let i="";for(let o in e){const{h:s,v:r,blur:c,spread:h,color:p=l()(n).alpha(a).rgb().string(),inset:d=""}=e[o];i+=`${s*t}px ${r*t}px ${5*c}px ${5*h}px ${p} ${d},`}return o.css`
        box-shadow: ${i};
    `},b=({target:e="all",duration:t=.3})=>o.css`transition: ${e} ${t}s;`,f=({direction:e="h",value:t=0})=>o.css`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`,v=o.css`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},16814:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},13429:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},10804:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},37873:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,i)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||a(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(10804),t),i(n(16814),t),i(n(13429),t)},72912:(e,t)=>{t.QUALITY_NAME_LIST=void 0,t.QUALITY_NAME_LIST=["4K","\u539f\u753bPRO","\u539f\u753b","\u84dd\u5149PRO","\u84dd\u5149","\u8d85\u6e05PRO","\u8d85\u6e05","\u9ad8\u6e05","\u6d41\u7545"]}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,(()=>{var e=[];n.O=(t,a,i,o)=>{if(!a){var s=1/0;for(h=0;h<e.length;h++){for(var[a,i,o]=e[h],l=!0,r=0;r<a.length;r++)(!1&o||s>=o)&&Object.keys(n.O).every(e=>n.O[e](a[r]))?a.splice(r--,1):(l=!1,o<s&&(s=o));if(l){e.splice(h--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[a,i,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.j=571})(),(()=>{var e={571:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,o,[s,l,r]=a,c=0;if(s.some(t=>0!==e[t])){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var h=r(n)}for(t&&t(a);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(h)},a=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{n.nc=void 0})();var a=n.O(void 0,[196,133,468],()=>n(55872));a=n.O(a)})();