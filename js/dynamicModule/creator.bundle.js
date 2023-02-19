"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[594],{37:(e,t,a)=>{a.d(t,{$:()=>d});var i=a(69055),n=a(47874),l=a(33385),r=a(67294),o=a(60677);const c=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],s=o["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,m=o["default"].h4`
  position: sticky;
  top: -10px;
  display: flex;
  margin: 0 -10px;
  padding: 4px 0 4px 10px;
  color: #3B3B3B;
  background-color: #f4f4f4;
  z-index: 2;

  b {
    margin: 0 4px;
    color: var(--bilibili-pink);
  }

  .more-btn {
    margin-left: auto;
    cursor: pointer;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;
    background-color: #1f1f1f;
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class d extends r.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:a,columns:l,rowGap:o,columnsGap:d,footer:p,sectionRef:h}=e,g=(0,n.Z)(e,c);return r.createElement(s,(0,i.Z)({className:"section",rowGap:o,columnsGap:d,ref:h},g),a?r.createElement(m,{className:"section-title"},a):null,r.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${l}, 1fr)`,gridColumnEnd:"span "+l}},t),p)}}(0,l.Z)(d,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},48505:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var i=a(33385),n=a(73473),l=a.n(n),r=a(26243),o=a.n(r),c=a(62680),s=a.n(c),m=a(95366),d=a.n(m),p=a(6919),h=a.n(p),g=a(93364),b=a.n(g),u=a(26771),k=a.n(u),N=a(67294),f=a(55168),y=a(60677),C=a(37),v=a(42650),x=a(48903);function _(e,t){var a=o()(e);if(s()){var i=s()(e);t&&(i=i.filter((function(t){return d()(e,t).enumerable}))),a.push.apply(a,i)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):h()?b()(e,h()(a)):_(Object(a)).forEach((function(t){k()(e,t,d()(a,t))}))}return e}const w=[{key:"total_click",secondKey:"incr_click",title:"\u64ad\u653e\u91cf",linkCallback:"handleOnClickDataCenter",secondTitle:"\u6628\u65e5"},{key:"total_reply",secondKey:"incr_reply",title:"\u8bc4\u8bba\u6570",secondTitle:"\u6628\u65e5"},{key:"total_dm",secondKey:"incr_dm",title:"\u5f39\u5e55\u6570",secondTitle:"\u6628\u65e5"},{key:"total_like",secondKey:"inc_like",title:"\u70b9\u8d5e\u6570",secondTitle:"\u6628\u65e5"},{key:"total_coin",secondKey:"inc_coin",title:"\u6295\u5e01\u6570",secondTitle:"\u6628\u65e5"},{key:"total_fav",secondKey:"inc_fav",title:"\u6536\u85cf\u6570",secondTitle:"\u6628\u65e5"},{key:"total_share",secondKey:"inc_share",title:"\u5206\u4eab\u6570",secondTitle:"\u6628\u65e5"},{key:"total_elec",secondKey:"inc_elec",title:"\u5145\u7535\u6570",secondTitle:"\u6628\u65e5",linkCallback:"handleOnClickCommentManager"}],O=[{key:"articleView",secondKey:"articleIncrView",title:"\u9605\u8bfb\u91cf",secondTitle:"\u6628\u65e5"},{key:"articleReply",secondKey:"articleIncrReply",title:"\u8bc4\u8bba\u6570",secondTitle:"\u6628\u65e5"},{key:"articleLike",secondKey:"articleIncrLike",title:"\u70b9\u8d5e\u6570",secondTitle:"\u6628\u65e5"},{key:"articleCoin",secondKey:"articleIncrCoin",title:"\u6295\u5e01\u6570",secondTitle:"\u6628\u65e5"},{key:"articleFav",secondKey:"articleIncrFav",title:"\u6536\u85cf\u6570",secondTitle:"\u6628\u65e5"},{key:"articleShare",secondKey:"articleIncrShare",title:"\u5206\u4eab\u6570",secondTitle:"\u6628\u65e5"}],G=[{title:"\u89c6\u9891",list:w},{title:"\u4e13\u680f",list:O}],M=y["default"].div.attrs({className:"popup-main-creator"})`
  .section {
    margin-bottom: 6px;

    :last-child {
      margin-bottom: 0;
      padding-bottom: 40px;
    }

    .type-header {
      //grid-column-end: span 2;
      margin: 2px 0 0;
      padding-left: 4px;
      font-weight: bold;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,T=y["default"].section`
  position: relative;
  padding: 6px;
  //border-radius: 2px;
  //border: 1px solid transparent;
  box-sizing: border-box;
  transition: background-color .2s, border-color .2s;
  background-color: hsl(0deg 0% 99%);

  &:hover {
  }

  &:active {
    background-color: hsl(0deg 0% 82% / 50%);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 30%);
    }

    &:active {
      background-color: rgb(0 0 0 / 50%);
    }
  }
`,Z=(0,y["default"])(T).attrs(({hasCallback:e})=>({className:e?"has-callback":""}))`
  &.has-callback {
    cursor: pointer;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      border: 3px solid transparent;
      border-top: 3px solid hsl(0deg 0% 80%);
      border-right: 3px solid hsl(0deg 0% 80%);
      pointer-events: none;

    }
  }

  main {
    position: relative;
    padding: 0 6px 0 4px;
    //width: fit-content;
    //background-color: rgb(255 255 255 / 16%);
    transition: background-color .2s;

    &:last-of-type {
      margin-right: 0;
    }

    &.zero {
      filter: grayscale(1) brightness(0.38);
    }

    //&:hover {
    //  background-color: rgb(0 0 0 / 25%);
    //}
    i {
      font-style: normal;
    }

    .second-value {
      margin-left: 8px;
      font-style: normal;
      color: var(--bilibili-blue);
    }

  }

  &.header {
    text-align: center;
    cursor: pointer;

    .bilibili-helper-2-icon-right-arrow {
      float: right;
      line-height: 16px;
      color: var(--paper-grey-600);
    }
  }

  &.data-section {
    margin-bottom: 0;

    .main-data {
      .title {
        margin-right: 6px;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: .5px;
      }

      .main-value {
        //display: block;
        font-size: 14px;
        color: var(--bilibili-blue);

        .yesterday {
          color: var(--bilibili-pink);
        }
      }
    }
  }

  &.rating {
    .level {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 16px;
      font-weight: bold;
      font-family: system-ui;
      font-style: italic;
      filter: opacity(0.1);
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0 / 16%);
    &.has-callback {
      ::after {
        opacity: .25;
        border-top: 3px solid hsl(0deg 0% 50%);
        border-right: 3px solid hsl(0deg 0% 50%);
      }
    }

    &.data-section {
      .main-value {
        opacity: 0.95;
      }
    }

    &.rating {
      .level {
        filter: opacity(0.2);
      }
    }
  }
`;class L extends N.Component{constructor(e){super(e),(0,i.Z)(this,"getData",()=>new(l())(e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getData"},t=>{t&&this.setState(E({},t)),e()})})),(0,i.Z)(this,"getArticleData",()=>new(l())(e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getArticleData"},t=>{t&&this.setState(E({},t)),e()})})),(0,i.Z)(this,"getRatingData",()=>new(l())(e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getRatingData"},t=>{t&&this.setState(E({},t)),e()})})),(0,i.Z)(this,"handleOnClickLink",(e,t,a)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_creator",action:"_"+t}),this.context.createTab(e,a)}),(0,i.Z)(this,"handleOnClickCenter",e=>{this.handleOnClickLink(e,null,"https://member.bilibili.com/platform/home")}),(0,i.Z)(this,"handleOnClickRating",e=>{this.handleOnClickLink(e,"rating","https://member.bilibili.com/platform/railgun/index")}),(0,i.Z)(this,"handleOnClickVideoManager",e=>{this.handleOnClickLink(e,"video_manager","https://member.bilibili.com/platform/upload-manager/article")}),(0,i.Z)(this,"handleOnClickArticleManager",e=>{this.handleOnClickLink(e,"article_manager","https://member.bilibili.com/platform/upload-manager/text")}),(0,i.Z)(this,"handleOnClickDataCenter",e=>{this.handleOnClickLink(e,"data_center","https://member.bilibili.com/platform/data-up/video/dataCenter/video")}),(0,i.Z)(this,"handleOnClickFansManager",e=>{this.handleOnClickLink(e,"fans_manager","https://member.bilibili.com/platform/fans/medal")}),(0,i.Z)(this,"handleOnClickCommentManager",e=>{this.handleOnClickLink(e,"comment_manager","https://member.bilibili.com/platform/comment/article")}),(0,i.Z)(this,"handleOnClickCommentManager",e=>{this.handleOnClickLink(e,"allowance","https://member.bilibili.com/platform/allowance/charge")}),this.state={total_fans:NaN,total_click:NaN,total_reply:NaN,total_dm:NaN,total_like:NaN,total_share:NaN,total_coin:NaN,total_fav:NaN,total_elec:NaN,inc_coin:NaN,inc_elec:NaN,inc_fav:NaN,inc_like:NaN,inc_share:NaN,incr_click:NaN,incr_dm:NaN,incr_fans:NaN,incr_reply:NaN,follow:{},unfollow:{},articleView:NaN,articleReply:NaN,articleLike:NaN,articleCoin:NaN,articleFav:NaN,articleShare:NaN,articleIncrView:NaN,articleIncrReply:NaN,articleIncrLike:NaN,articleIncrCoin:NaN,articleIncrFav:NaN,articleIncrShare:NaN,ratingString:"",ratingCredit:NaN,ratingLevel:NaN}}componentDidMount(){this.getData(),this.getArticleData(),this.getRatingData()}render(){const e=(0,x.parseNumberByBase)(this.state.incr_fans);let t="";return isNaN(e)||(t=(e>0?" + ":" - ")+Math.abs(e)),N.createElement(M,{ref:this.listRef},N.createElement(C.$,{columns:4,columnsGap:6,rowGap:6},N.createElement(Z,{hasCallback:!0,className:"header",onClick:this.handleOnClickCenter,onAuxClick:this.handleOnClickCenter},"\u521b\u4f5c\u4e2d\u5fc3"),N.createElement(Z,{hasCallback:!0,className:"header",onClick:this.handleOnClickVideoManager,onAuxClick:this.handleOnClickVideoManager},"\u89c6\u9891\u7ba1\u7406"),N.createElement(Z,{hasCallback:!0,className:"header",onClick:this.handleOnClickArticleManager,onAuxClick:this.handleOnClickArticleManager},"\u4e13\u680f\u7ba1\u7406"),N.createElement(Z,{hasCallback:!0,className:"header",onClick:this.handleOnClickCommentManager,onAuxClick:this.handleOnClickCommentManager},"\u4e92\u52a8\u7ba1\u7406")),N.createElement(C.$,{columns:1,columnsGap:6,rowGap:1},N.createElement(C.$,{columns:1,columnsGap:6,rowGap:6},N.createElement(Z,{className:"data-section",onClick:this.handleOnClickFansManager,onAuxClick:this.handleOnClickFansManager,hasCallback:!0},N.createElement("main",{className:"main-data"},N.createElement("b",{className:"title"},"\u7c89\u4e1d\u6570"),N.createElement("i",{className:"main-value"},(0,x.parseNumberByBase)(this.state.total_fans||0),N.createElement("span",{className:"yesterday"},t))))),G.map(({title:e,list:t},a)=>N.createElement(C.$,{key:a,title:e,columns:1,columnsGap:6,rowGap:1},t.map(({title:e,secondTitle:t,key:a,secondKey:i,linkCallback:n,holdColumns:l})=>{const r=!!this[n],o=0===this.state[i];let c;if(!o&&this.state[i]){const e=(0,x.parseNumberByBase)(this.state[i]);c=e>0?" \uff0b"+(0,x.parseNumberByBase)(this.state[i]):""}else c="";return N.createElement(Z,{key:a,className:"data-section",onClick:r?this[n]:null,onAuxClick:r?this[n]:null,hasCallback:r},N.createElement("main",{className:"main-data"},N.createElement("b",{className:"title"},e),N.createElement("i",{className:"main-value"},(0,x.parseNumberByBase)(this.state[a]||0),N.createElement("span",{className:"yesterday"},c))))}))),N.createElement(C.$,{title:"\u5176\u4ed6",columns:1,columnsGap:6,rowGap:6},N.createElement(Z,{className:"data-section rating",onClick:this.handleOnClickRating,onAuxClick:this.handleOnClickRating,hasCallback:!0},N.createElement("main",{className:"main-data"},N.createElement("b",{className:"title"},"\u7535\u78c1\u529b"),N.createElement("i",{className:"main-value"},this.state.ratingString)),N.createElement("main",null,N.createElement("div",{className:"yesterday"},"\u4fe1\u7528\u503c",N.createElement("i",{className:"second-value"},this.state.ratingCredit||0)),N.createElement("span",{className:"level"},"Lv",this.state.ratingLevel))))))}}(0,i.Z)(L,"contextType",v.Z);const K=(0,f.EN)(L)}}]);