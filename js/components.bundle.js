"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[468],{96326:(e,t,i)=>{i.d(t,{H:()=>P,w:()=>A});var o=i(26243),n=i.n(o),a=i(62680),r=i.n(a),l=i(95366),s=i.n(l),c=i(6919),d=i.n(c),p=i(93364),h=i.n(p),u=i(26771),b=i.n(u),m=i(69055),g=i(47874),x=i(33385),f=i(24678),v=i(67294),w=i(49675),k=i(42151),y=i(60677),E=i(47622);const C=v.createContext({});function z(e,t){var i=n()(e);if(r()){var o=r()(e);t&&(o=o.filter((function(t){return s()(e,t).enumerable}))),i.push.apply(i,o)}return i}function N(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?z(Object(i),!0).forEach((function(t){(0,x.Z)(e,t,i[t])})):d()?h()(e,d()(i)):z(Object(i)).forEach((function(t){b()(e,t,s()(i,t))}))}return e}const M=y["default"].div.attrs(({show:e,position:t})=>({className:["handle-content-wrapper",e?"":"hide","left"===t?"right":"left"]}))`
  position: absolute;
  top: 0;
  padding: 10px;
  max-width: 500px;
  min-width: 100px;
  width: max-content;
  min-height: 40px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.14) 0 2px 4px 0;
  background-color: rgb(246 246 246);
  color: #222;
  opacity: 1;
  transition: transformX .15s, opacity .15s;
  overflow: auto;

  &.left {
    right: 36px;
    border-radius: 4px 0 4px 4px;
    transform: translateX(0px);
    transform-origin: top right;
  }

  &.right {
    left: 36px;
    border-radius: 0 4px 4px 4px;
    transform: translateX(0px);
    transform-origin: top left;
  }

  &.hide {
    transition: transform .2s, opacity .1s, visibility 0s .2s;
    opacity: 0;
    visibility: hidden;

    &.left {
      //transform: translateX(20px) !important;
    }

    &.right {
      //transform: translateX(-20px) !important;
    }
  }

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

  .need-update-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 6px;
    height: 30px !important;
    border-radius: 4px;
    font-size: 12px;
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
    //z-index: 30;

    //.skip-btn {
    //  margin-left: auto;
    //  margin-right: 12px;
    //  cursor: pointer;
    //}

    .need-update-btn {
      margin-left: auto;
      padding: 0 8px;
      height: 20px;
      line-height: 20px;
      border-radius: 6px;
      background-color: var(--bilibili-gray);
      color: var(--bilibili-blue);
      text-decoration: none;
    }
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    margin: 12px -10px -10px;
    padding: 4px 10px 4px;
    border-top: 1px solid var(--google-grey-100);
    font-size: 12px;
    color: var(--google-grey-700);

    .bilibili-helper-name, .report {
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .version {
      margin-left: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
`;class B extends v.Component{constructor(e){super(e),(0,x.Z)(this,"contentRef",v.createRef()),(0,x.Z)(this,"state",{states:null,currentVersionInfo:null,needRefreshPage:!1,hasLogin:!1,hasRegister:!1,bilibiliAccount:null,downloadingSettings:!1,loading:!1,loginLoginModalShow:!1,hasBilibiliAccountLogin:!1,handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickLogin:()=>{this.state.loading||(this.setState({loading:!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login"},e=>{e?this.setState({loading:!1,hasLogin:e.hasLogin,hasRegister:e.hasRegister,bilibiliAccount:e.bilibiliAccount}):this.setState({loading:!1,loginLoginModalShow:!0})}))},handleOnClickRefresh:()=>{history.go()},handleOnClickGoToOverview:()=>{this.setState({needRefreshPage:!0}),this.openPage(chrome.runtime.getURL("/html/config.html"))},handleOnClickGoToWebsite:()=>{this.openPage("https://bilibilihelper.com/")},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")}}),(0,x.Z)(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),(0,x.Z)(this,"openHelperWebsite",()=>{this.openPage("https://bilibilihelper.com/")}),(0,x.Z)(this,"goToSendMessageForDeveloper",()=>{this.openPage("https://message.bilibili.com/#/whisper/mid1344117169")})}componentDidMount(){chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{if(e){const{hasLogin:t,bilibiliAccount:i,downloadingSettings:o}=e;this.setState({hasLogin:t,bilibiliAccount:i,downloadingSettings:o})}}),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:N({},e)})})}render(){const{show:e=!1,position:t="left",children:i}=this.props,{states:o}=this.context;return v.createElement(C.Provider,{value:this.state},v.createElement(M,{ref:this.contentRef,id:"bilibiliHelper2ContentWrapper",show:e,position:t},o&&o.needUpdate?v.createElement("div",{className:"need-update-wrapper"},"\u65b0\u7248\u672c\u300c",o.latestVersion,"\u300d\u73b0\u5df2\u53d1\u5e03 ~",v.createElement("a",{className:"need-update-btn",href:"https://bilibilihelper.com",target:"_blank",rel:"noreferrer"},"\u7acb\u5373\u66f4\u65b0")):null,i,v.createElement("footer",null,v.createElement("span",{className:"bilibili-helper-name",onClick:this.openHelperWebsite},"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u5b98\u7f51"),v.createElement("span",{className:"report",onClick:this.goToSendMessageForDeveloper},"\u70b9\u51fb\u53cd\u9988"),v.createElement("span",{className:"version"},"\u5f53\u524d\u7248\u672c: ",E.i8))))}}(0,x.Z)(B,"contextType",C);const S=["lockMode","children","onBeforeClickHandle","onAfterClickHandle"];function I(e,t){var i=n()(e);if(r()){var o=r()(e);t&&(o=o.filter((function(t){return s()(e,t).enumerable}))),i.push.apply(i,o)}return i}function L(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?I(Object(i),!0).forEach((function(t){(0,x.Z)(e,t,i[t])})):d()?h()(e,d()(i)):I(Object(i)).forEach((function(t){b()(e,t,s()(i,t))}))}return e}(0,k.injectIconfont)();const F=y["default"].div.attrs(({showWhenFullWiden:e,showInInjectPlayer:t})=>({className:["handle-wrapper",e?"show-in-full-widen":""],id:"bilibiliHelper2HandleButtonWrapper"}))`
  position: fixed;
  top: 100px;
  right: 24px;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  //opacity: .8;
  transition: opacity .2s .1s;
  z-index: 99999;

  &:hover {
    opacity: 1 !important;
    transition: opacity .2s;
  }

  &.show-in-full-widen {
    z-index: 999999;
  }
`,A=(0,y["default"])(f.Icon).attrs(()=>({id:"bilibiliHelper2HandleButton"}))`
  position: relative;
  margin: 0;
  padding: 6px;
  border-radius: 50%;
  background-size: 24px;
  box-sizing: content-box;
  opacity: 1;
  cursor: pointer;
  user-select: none;
  transform: scale(1);
  transition: transform 300ms, border-radius 200ms, opacity .2s, opacity .3s;
  z-index: 1;
  opacity: 0;

  &.default {
    background-color: var(--bilibili-pink);
    color: #fff;
    box-shadow: 0 1px 4px 0 rgb(251 114 153 / 0.6);
  }

  &.initialized {
    opacity: 1;
  }

  &.translucentPink {
    background-color: var(--bilibili-pink);
    color: #fff;
    box-shadow: 0 0 1px 0 var(--bilibili-pink);
    opacity: .6;
  }

  &.pinkCat {
    background-color: #fff;
    color: var(--bilibili-pink);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  }

  &.blackCat {
    background-color: var(--bilibili-gray);
    color: var(--paper-grey-900);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  }

  &.translucentWhite {
    background-color: var(--bilibili-gray);
    color: var(--bilibili-pink);
    opacity: .6;
  }

  &::before {
    display: block;
    transition: transform 300ms;
  }

  &:hover {
    opacity: 1;

    .lock-btn, .dark-btn {
      visibility: visible;
    }
  }

  &:hover::before {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  .tool-buttons {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;

    .bilibili-helper-2-iconfont {
      transform: scale(.7);

      ::before {
        pointer-events: none;
      }
    }
  }

  &.right.showContent {
    border-radius: 0 50% 50% 0;
  }

  &.left.showContent {
    border-radius: 50% 0 0 50%;
  }
`,O=(0,y["default"])(f.Icon).attrs(({position:e})=>({className:["lock-btn",e]}))`
  position: absolute;
  bottom: -12px;
  padding: 3px;
  border-radius: 50%;
  background-color: var(--bilibili-gray);
  color: var(--paper-grey-900);
  //transform: scale(0.6);
  cursor: pointer;
  user-select: none;
  visibility: hidden;
  z-index: 1;

  &.right {
    right: 0;
    transform-origin: top right;
  }

  &.left {
    left: 0;
    transform-origin: top left;
  }

  .bilibili-helper-2-dark-mode & {
    background-color: var(--dark-4);
    color: var(--paper-pink-50);

    &::before {
      transform: scale(0.85);
      display: block;
    }
  }
`;class P extends v.Component{constructor(e){super(e),(0,x.Z)(this,"state",{isLocked:!0,toolBarPosition:"right",showContent:!1,catType:"default",hideWhenFullWiden:!0,showInInjectPlayer:!1,positionOption:{top:100,left:24},initialized:!1,states:{},isVIP:!1,isSuperVIP:!1,setVIPState:()=>this.state.states&&(0,w.isVIP)(this.state.bhAccount),setSuperVIPState:()=>this.state.states&&(0,w.isSuperVIP)(this.state.bhAccount)}),(0,x.Z)(this,"mouseDown",!1),(0,x.Z)(this,"handleMoved",!1),(0,x.Z)(this,"selfContentDOM",void 0),(0,x.Z)(this,"initPosition",()=>{const{isLocked:e,positionOption:t}=this.state,i=document.getElementById("bilibiliHelper2HandleButtonWrapper");let o,n=!1;if(i.style.position=e?"fixed":"absolute",t){let{top:e,left:a,right:r}=t;e<0&&(e=0,t.top=0,n=!0),i.style.top=e+"px",void 0!==a?(a<0&&(a=0,t.left=0,n=!0),o="left",i.style.left=a+"px"):void 0!==r&&(r<0&&(r=0,t.right=0,n=!0),o="right",i.style.right=r+"px"),n&&(this.setState({toolBarPosition:o,positionOption:t}),this.uploadHandleConfig())}const a=i.offsetWidth,r=i.offsetHeight,l=i.offsetTop,s=i.offsetLeft,c=document.body.clientWidth,d=window.innerHeight;l>d-r&&(i.style.top=d-r+"px"),s>c-a&&(i.style.left=c-a+"px"),this.setState({initialized:!0})}),(0,x.Z)(this,"initDragEvent",()=>{const e=document.getElementById("bilibiliHelper2HandleButtonWrapper"),t=document.getElementById("bilibiliHelper2ContentWrapper"),i=document.getElementById("bilibiliHelper2HandleButton"),o=i.clientWidth;let n,a,r;const l=()=>{n=t.offsetHeight,a=i.offsetHeight,r=window.innerHeight,t.style.maxHeight=r-50<=n?r-30+"px":""};if(window.addEventListener("resize",()=>{l()}),i.addEventListener("mousedown",t=>{t.stopPropagation(),this.mouseDown=!0,this.originOffectTop=e.offsetTop,this.originOffectLeft=e.offsetLeft,this.originX=t.clientX,this.originY=t.clientY,l()}),window.ResizeObserver){const e=new window.ResizeObserver(()=>{r=window.innerHeight,n=t.offsetHeight,r-50<n&&(t.style.maxHeight=r-30+"px")});e.observe(t)}document.addEventListener("mousemove",i=>{if(this.mouseDown){const l=this.originX-i.clientX,s=this.originY-i.clientY,c=Math.abs(2*l+2*s);if(c>10||this.handleMoved){let i=this.originOffectTop-s;if(i<=0?i=0:i>=r-a&&(i=r-a),t.style.transform=r-i<n?`translate(0px, ${-(n-(r-i))}px)`:"translate(0, 0)",e.style.top=i+"px",this.handleMoved=!0,this.originOffectLeft-l+o/2<document.body.clientWidth/2){"left"!==this.state.toolBarPosition&&this.setState({toolBarPosition:"left"});let t=this.originOffectLeft-l;t<=0&&(t=0),e.style.right="unset",e.style.left=t+"px"}else{"right"!==this.state.toolBarPosition&&this.setState({toolBarPosition:"right"});let t=document.body.clientWidth-(this.originOffectLeft-l)-o;t<0&&(t=0),e.style.left="unset",e.style.right=t+"px"}}}},!0),document.addEventListener("mouseup",()=>{const{toolBarPosition:t,positionOption:i}=this.state;if(this.mouseDown){this.mouseDown=!1;let o=!1,{left:n,top:a,right:r}=e.getBoundingClientRect();a<0&&(a=0,o=!0),n<-10&&(n=-10,o=!0),r<-10&&(r=-10,o=!0);const l=document.body.clientWidth;(i.top!==a||void 0!==i.left&&i.left!==n||void 0!==i.right&&i.right!==l-r)&&(o=!0),i.top=a,"left"===t?(i.left=n,delete i.right):"right"===t&&(i.right=l-r,delete i.left),o&&this.setState({positionOption:i},()=>{this.uploadHandleConfig()})}},!1)}),(0,x.Z)(this,"handleOnClickLockModeBtn",e=>{e.persist(),e.stopPropagation();const t=!this.state.isLocked;return chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"cat",action:"click_handle_lock_button",label:!this.state.isLocked}),this.setState({isLocked:!this.state.isLocked},()=>{const{toolBarPosition:e}=this.state,i=document.getElementById("bilibiliHelper2HandleButtonWrapper"),{top:o,left:n,right:a}=i.getBoundingClientRect(),r=window.scrollY,l=window.scrollX,s={};if(t){i.style.position="fixed",i.style.top=o+"px";let e=o-r;e<=12&&(e=12),s.top=e}else i.style.position="absolute",i.style.top=o+r+"px",s.top=o+r;"left"===e?(i.style.left=n-l+"px",i.style.right="unset",s.left=n-l,delete s.right):"right"===e&&(i.style.left="unset",i.style.right=""+(document.body.clientWidth-a),delete s.left,s.right=document.body.clientWidth-a),this.setState({positionOption:s},()=>{this.uploadHandleConfig()})}),!1}),(0,x.Z)(this,"handleOnClickHandleBtn",()=>{const{onBeforeClickHandle:e,onAfterClickHandle:t}=this.props;e instanceof Function&&e(this.state.showContent),this.handleMoved?(this.handleMoved=!1,t instanceof Function&&t(this.state.showContent)):(this.updateContentWrapperPosition(),this.setState({showContent:!this.state.showContent}),t instanceof Function&&t(!this.state.showContent))}),(0,x.Z)(this,"updateContentWrapperPosition",()=>{const e=document.getElementById("bilibiliHelper2ContentWrapper"),t=document.getElementById("bilibiliHelper2HandleButton"),i=e.offsetHeight,o=t.offsetHeight,n=window.innerHeight;let a=this.originOffectTop;a>=n-o&&(a=n-o),e.style.transform=n-a<i?`translate(0px, ${-(i-(n-a))}px)`:"translate(0, 0)"}),(0,x.Z)(this,"uploadHandleConfig",()=>{const{type:e}=this.props,{positionOption:t,isLocked:i,toolBarPosition:o}=this.state;chrome.runtime.sendMessage(L(L({target:"cat",event:"setHandleConfig",type:e},t),{},{locked:i,direction:o}),()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:"cat"})})})}get pageWidth(){return document.documentElement.offsetWidth+document.documentElement.scrollLeft}componentDidMount(){this.initDragEvent(),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e},()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})})}),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},({catType:e,showWhenFullWiden:t=!0,showInInjectPlayer:i=!1,autoClose:o=!1})=>{this.setState({catType:e,showWhenFullWiden:t,showInInjectPlayer:i}),(o||this.props.autoClose)&&document.addEventListener("click",e=>{this.selfContentDOM||(this.selfContentDOM=document.getElementById("bilibiliHelper2HandleButtonWrapper")),this.selfContentDOM&&!this.selfContentDOM.contains(e.target)&&e.target!==this.selfContentDOM&&this.setState({showContent:!1})})}),chrome.runtime.sendMessage({target:"cat",event:"getHandleConfig",type:this.props.type},e=>{if(!e)return;const{left:t,right:i,top:o,direction:n,locked:a}=e;this.setState({toolBarPosition:n,isLocked:a,positionOption:{top:o,left:t,right:i}},()=>{this.initPosition()})})}render(){const e=this.props,{lockMode:t=!0,children:i,onBeforeClickHandle:o,onAfterClickHandle:n}=e,a=(0,g.Z)(e,S),{isLocked:r,toolBarPosition:l,showContent:s,catType:c,showWhenFullWiden:d,showInInjectPlayer:p,initialized:h}=this.state;return v.createElement(F,(0,m.Z)({showWhenFullWiden:d,showInInjectPlayer:p},a),v.createElement(A,{className:["handle-button",h?"initialized":"",l,s?"showContent":"",c].filter(Boolean).join(" "),icon:"cat",size:24,onClick:this.handleOnClickHandleBtn},v.createElement("div",{className:"tool-buttons"},t&&v.createElement(O,{position:l,icon:r?"lock":"unlock",size:16,onClick:this.handleOnClickLockModeBtn}))),v.createElement(C.Provider,{value:this.state},v.createElement(B,{show:s,position:l},i)))}}(0,x.Z)(P,"defaultProps",{type:"common"})},42906:(e,t,i)=>{i.d(t,{d:()=>s});var o=i(67294),n=i(60677),a=i(96326),r=i(71338);const l=n.createGlobalStyle`
  body {
    ${r.$};
  }
`,s=function(e){return o.createElement(o.Fragment,null,o.createElement(l,null),o.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://at.alicdn.com/t/font_1690169_cumlkywihxk.css"}),o.createElement(a.H,e))}},24678:(e,t,i)=>{i.r(t),i.d(t,{Icon:()=>p});var o=i(69055),n=i(47874),a=i(67294),r=i(60677),l=i(48950);const s=["icon","size"],c={cat128:(0,l.Ax)("statics/images/icon-128.png"),catSvg:(0,l.Ax)("statics/images/cat.svg"),catSvgWhite:(0,l.Ax)("statics/images/cat-white.svg"),arrowRight:(0,l.Ax)("statics/images/arrow_right.svg"),arrowDown:(0,l.Ax)("statics/images/arrow_down.svg"),arrowUp:(0,l.Ax)("statics/images/arrow_up.svg"),arrowLeft:(0,l.Ax)("statics/images/arrow_left.svg")},d=r["default"].span.attrs(({icon:e})=>({className:e?"bilibili-helper-2-iconfont bilibili-helper-2-icon-"+e:"icon"}))`
  display: inline-block;
  width: ${e=>e.size||36}px;
  height: ${e=>e.size||36}px;
  line-height: ${e=>e.size||36}px;
  //vertical-align: middle;
  font-size: ${e=>e.size||36}px !important;
  ${({image:e})=>e?`background-image: url("${c[e]}")`:""});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${e=>e.image?"100%":"60%"};
  -webkit-font-smoothing: antialiased;
`,p=e=>{let{icon:t,size:i=36}=e,r=(0,n.Z)(e,s);return a.createElement(d,(0,o.Z)({icon:t,size:i,className:t?"bilibili-helper-2-iconfont bilibili-helper-2-icon-"+t:"icon"},r))}},72457:(e,t,i)=>{i.d(t,{E:()=>h});var o=i(69055),n=i(47874),a=i(67294),r=i(60677);const l=["sign","url","direct"],s=["sign","url","lazy","direct","offset","offsetVertical","duration","onContentVisible"],c=r.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,d=r["default"].img.attrs({className:"img"})`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:not([src]) {
    content: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    backdrop-filter: blur(14px);
    background-color: rgb(221 221 221 / 7%);
    box-sizing: border-box;
  }

  &[src] {
    animation: ${c} cubic-bezier(0.16, 0.6, 0.45, 0.93);
    animation-duration: ${({duration:e=500})=>e}ms;
  }
`,p=a.forwardRef((function(e,t){let{sign:i,url:r,direct:s}=e,c=(0,n.Z)(e,l);const[p,h]=(0,a.useState)(!1),[u,b]=(0,a.useState)(null),[m,g]=(0,a.useState)(null),x=(0,a.useCallback)(()=>{b(r),g(i||r),h(!0)},[i,r]);return(0,a.useEffect)(()=>{m!==(i||r)&&h(!1);const e=new window.Image;return s?(b(r),g(i||r),h(!0)):(e.addEventListener("load",x),e.src=r),()=>{e.removeEventListener("load",x)}},[r,i,m]),a.createElement(d,(0,o.Z)({ref:t,src:p?u:null,alt:i||null},c))})),h=a.forwardRef((function(e,t){let{sign:i,url:r,lazy:l=!1,direct:c=!1,offset:d=0,offsetVertical:h=0,duration:u,onContentVisible:b}=e,m=(0,n.Z)(e,s);return a.createElement(p,(0,o.Z)({key:i,url:r,direct:c,duration:u,ref:t},m))}))},85025:(e,t,i)=>{i.d(t,{I:()=>l});var o=i(69055),n=i(67294),a=i(60677);const r=a["default"].input.attrs({className:"input"})`
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
`,l=/^(20|589|815|937)$/.test(i.j)?null:n.forwardRef((function(e,t){return n.createElement(r,(0,o.Z)({},e,{ref:t}))}))},57563:(e,t,i)=>{i.r(t),i.d(t,{Message:()=>C});var o=i(33385),n=i(66130),a=i.n(n),r=i(73473),l=i.n(r),s=i(59158),c=i(67294),d=i(73935),p=i(60677);const h=p["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s, transform .2s;
  overflow: auto;
  white-space: nowrap;
  pointer-events: none;
  transform: translateY(-12px);
  z-index: -100000;

  //::after {
  //  content: " ";
  //  display: inline-block;
  //  vertical-align: middle;
  //  width: 0;
  //  height: 100%;
  //  overflow: hidden;
  //}

  &.on {
    transition: opacity .2s, transform .2s;
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    z-index: 1000000;
  }
`,u=p["default"].div.attrs(()=>({className:"message-container"}))`
  position: relative;
  top: 32px;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  max-width: 560px;
  min-width: 300px;
  vertical-align: top;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: transform 0.12s;

  @media (prefers-color-scheme: dark) {
    background-color: var(--paper-grey-900);
    color: #E5E5E5;
  }
`,b=p["default"].div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 0;
  border-bottom: 1px solid #eee;
  padding: 0 12px;
  font-size: 14px;
  pointer-events: initial;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s, height .3s, padding .2s;

  &:last-of-type {
    border-bottom: none;
  }

  .content {
    flex-grow: 1;
  }

  .action-box {
    display: flex;
    flex-shrink: 0;

    .button {
      margin: -10px -12px -10px 0px;
    }
  }

  &.on {
    visibility: visible;
    opacity: 1;
    height: 36px;
    padding: 8px 12px;
    transition: opacity 0.2s, height .2s, padding .2s;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #151515;
  }
`,m=3e3;class g extends c.Component{constructor(e){super(e),(0,o.Z)(this,"state",{show:!1,messageList:[]}),(0,o.Z)(this,"messageTimerKeyMap",{}),(0,o.Z)(this,"findSameMessage",e=>{const{messageList:t}=this.state;return t.find(t=>t.content===e)}),(0,o.Z)(this,"addMessage",(e,t,i=m)=>{const{messageList:o}=this.state,n=this.findSameMessage(t);if(n){const e=this.messageTimerKeyMap[n.key];clearTimeout(e),this.setMessageTimer(n)}else{const n=a()();o.push({key:n,type:e,content:t,duration:i,on:!1}),this.setState({messageList:o},()=>{setTimeout(()=>{this.showMessage(n)},200)})}}),(0,o.Z)(this,"showMessage",e=>{const{messageList:t}=this.state,i=t.find(({key:t})=>t===e);i.on=!0,this.setState({messageList:t,show:t.filter(({on:e})=>e).length>0},()=>{this.setMessageTimer(i)})}),(0,o.Z)(this,"setMessageTimer",e=>{"number"===typeof e.duration&&e.duration>0&&(this.messageTimerKeyMap[e.key]=setTimeout(async()=>{await this.hideMessage(e.key)},e.duration))}),(0,o.Z)(this,"hideMessage",async e=>new(l())(t=>{const{messageList:i}=this.state;1===i.length&&this.setState({show:!1}),setTimeout(()=>{const o=i.findIndex(({key:t})=>t===e);i[o].on=!1,this.setState({messageList:i},()=>{setTimeout(()=>this.deleteMessage(e),200),t(o)})},1===i.length?200:0)})),(0,o.Z)(this,"deleteMessage",async e=>new(l())(t=>{const{messageList:i}=this.state,o=i.findIndex(({key:t})=>t===e);i.splice(o,1),this.setState({messageList:i,show:i.filter(({on:e})=>e).length>0},t)})),(0,o.Z)(this,"closeMessage",e=>this.hideMessage(e)),(0,o.Z)(this,"clearAll",()=>{const{messageList:e}=this.state;e.forEach(({key:e})=>{this.hideMessage(e)})})}componentDidMount(){this.props.app.current=this}render(){const{show:e,messageList:t}=this.state;return c.createElement(h,{className:e?"message-model on":"message-model"},c.createElement(u,{classNames:"message-container"},t.map(({key:e,type:t,content:i,duration:o,on:n})=>c.createElement(b,{key:e,className:["message-row",t,n?"on":""].join(" ")},c.createElement("div",{className:"content"},i),o?null:c.createElement("div",{className:"action-box"},c.createElement(s.Button,{icon:"close",iconSize:12,onClick:()=>this.closeMessage(e)}))))))}}const x=c.createRef(),f=()=>new(l())(e=>{let t=document.getElementById("bhMessageWrapper");t?e(x):(t=document.createElement("div"),t.id="bhMessageWrapper",document.body.appendChild(t),d.render(c.createElement(g,{app:x}),t,()=>{e(x)}))}),v=(e,t,...i)=>{f().then(o=>{o.current.addMessage(e,t,...i)})},w=()=>{f().then(e=>{e.current.clearAll()})},k=(e,...t)=>v("info",e,...t),y=(e,...t)=>v("warn",e,...t),E=(e,...t)=>v("error",e,...t),C={info:k,warn:y,error:E,clearAll:w}},90631:(e,t,i)=>{i.d(t,{u:()=>b});var o=i(69055),n=i(47874),a=i(33385),r=i(67294),l=i(60677);const s=["open","title","buttons","children","onClickMask"],c=l["default"].div.attrs(({open:e})=>({className:e?"modal bilibili-helper-mask on":"modal bilibili-helper-mask"}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s;
  overflow: auto;
  z-index: -1000;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);

  ::after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    overflow: hidden;
  }

  &.on {
    transition: opacity 0.2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }
`,d=l["default"].div.attrs(()=>({className:"modal-container"}))`
  position: relative;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  max-width: 560px;
  min-width: 300px;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
  color: #222;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: transform 0.12s;
  transform: scale(1);
`,p=l["default"].div.attrs(()=>({className:"modal-title"}))`
  flex: 0;
  padding: 20px 20px 0;
  font-size: 15px;
  font-weight: bold;
`,h=l["default"].div.attrs(()=>({className:"modal-body"}))`
  flex: 1;
  padding: 16px 20px;
  min-height: 50px;
  max-height: 600px;
  overflow: auto;
`,u=l["default"].div.attrs(()=>({className:"modal-button-container"}))`
  display: flex;
  flex-direction: row-reverse;
  flex: 0;
  padding: 0 20px 20px 20px;
`;class b extends r.Component{constructor(e){super(e),(0,a.Z)(this,"handleMaskClick",e=>{e.target.classList.contains("bilibili-helper-mask")&&(this.container.style.transform="scale(1.02)",setTimeout(()=>this.container.style.transform="scale(1)",120))}),(0,a.Z)(this,"handleOnCustomMaskClick",e=>{if(e.target.classList.contains("bilibili-helper-mask")){const{onClickMask:t}=this.props;t(e)}})}componentDidUpdate(e,t,i){e.open&&!this.props.open&&this.props.onClosed&&this.props.onClosed instanceof Function&&this.props.onClosed()}render(){const e=this.props,{open:t,title:i,buttons:a,children:l,onClickMask:b}=e,m=(0,n.Z)(e,s);return r.createElement(c,{open:t,onMouseDown:b?this.handleOnCustomMaskClick:this.handleMaskClick},r.createElement(d,(0,o.Z)({ref:e=>this.container=e},m),i&&r.createElement(p,null,i),r.createElement(h,null,l),a&&r.createElement(u,null,a)))}}},49967:(e,t,i)=>{i.d(t,{I:()=>E});var o=i(69055),n=i(47874),a=i(33385),r=i(64723),l=i(24678),s=i(72457),c=i(67294),d=i(60677),p=i(25498);const h=["videoInfo","userInfo","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","onContentVisible","isNew","showWatcherLaterButton","showRemoveWatcherLaterButton","showNewTag","showFollowButton"],u=d["default"].section.attrs(()=>({className:"video-card"}))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  //height: 160px;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    //transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      //transition: filter 0.2s;
      //filter: brightness(0.95);
      border-radius: 2px;
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;

    .tag {
      margin-right: 4px;
      color: var(--bilibili-blue);
    }

    .position-adjust {
      margin-left: -6px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        //filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;class b extends c.Component{constructor(e){super(e),(0,a.Z)(this,"state",{isSetWatchLater:!1,watchLaterText:!1}),(0,a.Z)(this,"visible",!1),(0,a.Z)(this,"handleOnClickUsername",e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_card",action:"click_video",label:"upper_name"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+this.props.userInfo.uid,active:1!==e.button})}),(0,a.Z)(this,"handleOnClickSetWatchLater",e=>{e.stopPropagation();const{videoInfo:t}=this.props;if(!this.state.isSetWatchLater)return(t.aid||t.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid||(0,p.bv2av)(t.bvid)},e=>{switch(e){case!0:this.setState({isSetWatchLater:!0,watchLaterText:"\u5df2\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b"});break;case"notSupport":this.setState({isSetWatchLater:!0,watchLaterText:"\u7248\u6743\u5185\u5bb9\u6682\u65f6\u65e0\u6cd5\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b"});break;case!1:this.setState({isSetWatchLater:!1,watchLaterText:"\u6dfb\u52a0\u7a0d\u540e\u518d\u770b\u5931\u8d25"});break}}),!1}),(0,a.Z)(this,"handleOnClickRemoveWatchLater",e=>{e.stopPropagation();const{videoInfo:t}=this.props;if(!this.state.isSetWatchLater)return(t.aid||t.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid||(0,p.bv2av)(t.bvid)},e=>{switch(e){case!0:this.setState({isSetWatchLater:!0,watchLaterText:"\u5df2\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b"});break;case!1:this.setState({isSetWatchLater:!1,watchLaterText:"\u6dfb\u52a0\u7a0d\u540e\u518d\u770b\u5931\u8d25"});break}}),!1})}componentDidMount(){}render(){const e=this.props,{videoInfo:t,userInfo:i,onClickCover:a,onClickUserName:d,hideAuthor:p,isSpecialAttention:b,onClickFollowBtn:m,onContentVisible:g,isNew:x,showWatcherLaterButton:f,showRemoveWatcherLaterButton:v,showNewTag:w,showFollowButton:k=!1}=e,y=(0,n.Z)(e,h),{isSetWatchLater:E,watchLaterText:C}=this.state;return c.createElement(u,(0,o.Z)({className:b?"special-attention":null},y),c.createElement(r.ErrorBoundary,null,c.createElement("a",{className:"cover",onClick:a,onAuxClick:a},c.createElement(s.E,{className:"cover-image",url:t.cover+"@634w_400h.webp",height:86}),x?c.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,t.publishDate&&c.createElement("time",{className:"publish-date-desc"},t.publishDate),(t.aid||t.bvid)&&f?c.createElement("div",{className:["play-later-wrapper",E?"watched":null].filter(Boolean).join(" "),onClick:this.handleOnClickSetWatchLater,onAuxClick:this.handleOnClickSetWatchLater},E?null:c.createElement(l.Icon,{className:"play-later",icon:"play-later",size:18}),C?c.createElement("span",{className:"text"},C):null):null,(t.aid||t.bvid)&&v?c.createElement("div",{className:["play-later-wrapper",E?"watched":null].filter(Boolean).join(" "),onClick:this.handleOnClickRemoveWatchLater,onAuxClick:this.handleOnClickRemoveWatchLater},E?null:c.createElement(l.Icon,{className:"play-later",icon:"play-later",size:18}),C?c.createElement("span",{className:"text"},C):null):null,t.duration?c.createElement("time",{className:"duration"},t.duration):null),c.createElement("a",{className:"title",title:t.title,onClick:a,onAuxClick:a},y.tname&&y.showTag?c.createElement("span",{className:"tag"},y.tname):null,c.createElement("span",{className:t&&t.title&&"\u3010"===t.title[0]?"position-adjust":null},t.title)),c.createElement("div",{className:"info"},c.createElement("div",{className:"info-line name"},!p&&c.createElement("a",{className:"username",onClick:d||this.handleOnClickUsername,onAuxClick:d||this.handleOnClickUsername},"UP: ",i.name),!p&&k&&c.createElement("a",{className:"add-special-attention-btn",onClick:m,onAuxClick:m},b?c.createElement(c.Fragment,null,c.createElement(l.Icon,{icon:"love",size:14})):null,b?null:c.createElement(c.Fragment,null,c.createElement(l.Icon,{icon:"love-hollow",size:14})))))))}}(0,a.Z)(b,"defaultProps",{showWatcherLaterButton:!0});var m=i(66130),g=i.n(m);const x=["videoInfo","userInfo","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","publishTime","showWatcherLaterButton","showRemoveWatcherLaterButton","showNewTag","showFollowButton"],f=d["default"].section.attrs(()=>({className:"video-card"}))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  //height: 114px;
  z-index: 1;
  //contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    //:before {
    //  content: "";
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  height: 38px;
    //  width: 100%;
    //  //border-radius: 0 0 2px 2px;
    //  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
    //  z-index: 1;
    //  pointer-events: none;
    //}

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter .2s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform .3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      filter: grayscale(0.5) brightness(.4);
      border-radius: 4px;
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      left: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .2s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      line-height: 14px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .2s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px 6px 4px;
    width: 100%;
    line-height: 16px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;
      cursor: pointer;
      z-index: 1;

      &.position-adjust {
        text-indent: -6px;
      }

      .tag {
        margin-right: 4px;
        color: var(--bilibili-blue);
      }

      .position-adjust {
        text-indent: -6px;
      }
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    //
    //.bottom-info {
    //  background: rgb(0 0 0 / 40%);
    //}

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 4px;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;function v(e){let{videoInfo:t,userInfo:i,onClickCover:a,onClickUserName:d,hideAuthor:p,isSpecialAttention:h,onClickFollowBtn:u,publishTime:b,showWatcherLaterButton:m=!0,showRemoveWatcherLaterButton:v=!1,showNewTag:w=!1,showFollowButton:k=!1}=e,y=(0,n.Z)(e,x);const[E]=c.useState(g()()-b<864e5),[C,z]=c.useState(!1),[N,M]=c.useState(!1),B=c.useCallback(e=>{e.stopPropagation(),i&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+i.uid,active:1!==e.button})},[i]),S=c.useCallback(e=>(e.stopPropagation(),t.aid&&!C&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid},e=>{switch(e){case!0:z(!0),M("\u5df2\u7a0d\u540e\u518d\u770b");break;case"notSupport":z(!0),M("\u4e0d\u652f\u6301\u756a\u5267\u89c6\u9891");break;case!1:z(!1),M("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[t,C]),I=c.useCallback(e=>(e.stopPropagation(),t.aid&&!C&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid},e=>{switch(e){case!0:z(!0),M("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:z(!1),M("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[t,C]);return c.createElement(f,(0,o.Z)({className:h?"special-attention":null},y),c.createElement(r.ErrorBoundary,null,c.createElement("div",{className:"cover",onClick:a,onAuxClick:a},c.createElement(s.E,{className:"cover-image",url:t.cover+"@638w_220h.webp",height:86,lazy:!0,duration:0}),t.publishDate&&w&&E?c.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,m?c.createElement("div",{className:["play-later-wrapper",C?"watched":null].filter(Boolean).join(" "),onClick:S,onAuxClick:S},C?null:c.createElement(l.Icon,{className:"play-later",icon:"play-later",size:18}),N?c.createElement("span",{className:"text"},N):null):null,v?c.createElement("div",{className:["play-later-wrapper",C?"watched":null].filter(Boolean).join(" "),onClick:I,onAuxClick:I},C?null:c.createElement(l.Icon,{className:"play-later",icon:"play-later",size:18}),N?c.createElement("span",{className:"text"},N):null):null,c.createElement("div",{className:"top-info"},c.createElement("div",{className:"user-info"},!p&&i?c.createElement("a",{className:"username",onClick:d||B,onAuxClick:d||B},i.name):null,!p&&k&&c.createElement("a",{className:"add-special-attention-btn",onClick:u,onAuxClick:u},h?c.createElement(c.Fragment,null,c.createElement(l.Icon,{icon:"love",size:14})):null,h?null:c.createElement(c.Fragment,null,c.createElement(l.Icon,{icon:"love-hollow",size:14})))),t.duration||t.publishDate?c.createElement("div",{className:"time-box"},t.duration?c.createElement("time",{className:"duration"},t.duration):null,t.publishDate?c.createElement("time",{className:"publish-date"},t.publishDate):null):null),c.createElement("div",{className:"bottom-info"},c.createElement("a",{className:"title",title:t.title},y.tname&&y.showTag?c.createElement("span",{className:"tag"},y.tname):null,c.createElement("span",{className:t&&t.title&&"\u3010"===t.title[0]?"position-adjust":""},t.title))))))}const w=["userInfo","videoInfo","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","showWatcherLaterButton","showRemoveWatcherLaterButton","showPublishTime","showFollowButton"],k=d["default"].section.attrs(()=>({className:"video-card"}))`
  position: relative;
  display: flex;
  //margin-bottom: 6px;
  padding: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  //max-width: 200px;
  min-width: 148px;
  //height: 42px;
  border-radius: 2px;
  z-index: 1;
  //contain: paint;
  //content-visibility: paint;
  //contain-intrinsic-size: 0 56px;
  //will-change: scroll-position;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  .cover {
    position: relative;
    display: block;
    flex-shrink: 0;
    width: 64px;
    height: 48px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    //:before {
    //  content: "";
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  height: 38px;
    //  width: 100%;
    //  //border-radius: 0 0 2px 2px;
    //  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
    //  z-index: 1;
    //  pointer-events: none;
    //}

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
      //filter: brightness(.8);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;
  }

  .add-special-attention-btn {
    visibility: hidden;
    margin-left: 2px;
    line-height: 14px;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #aaa;
    }

    span {
      vertical-align: middle;
      font-size: 12px;
      font-weight: bold;
    }

    .text {
      padding: 0 2px;
      zoom: 0.8;
    }
  }

  .user-info {
    margin-top: 2px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    //transition: background-color .3s;

    a {
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .publish-time {
      opacity: 0.4;
      margin-left: 2px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    //position: absolute;
    //top: 0;
    //right: 0;
    //left: 62px;
    box-sizing: border-box;
    //display: flex;
    //align-items: center;
    padding: 0 0 0 4px;
    width: 100%;
    line-height: 16px;
    color: var(--paper-grey-900);

    .title {
      display: -webkit-box;
      flex-grow: 1;
      margin-top: -2px;
      font-size: 12px;
      overflow: hidden;
      text-align: justify;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;

      .tag {
        margin-right: 4px;
        color: var(--bilibili-blue);
      }

      .position-adjust {
        text-indent: -6px;
      }
    }
  }

  &:hover {
    //.cover .cover-image {
    //  filter: brightness(1);
    //}

    .top-info {
      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }

    .user-info {
      //background-color: rgb(0 0 0 / 50%);

      .add-special-attention-btn {
        visibility: visible;
      }
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #111;
    }

    .title {
      color: #ddd;
    }

    .user-info {
      a {
        color: #ddd;
      }

      .publish-time {
        color: #ddd;
      }
    }

    .bottom-info {
      //color: var()
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;function y(e){let{userInfo:t={},videoInfo:i={},onClickCover:a,onClickUserName:d,hideAuthor:p,isSpecialAttention:h,onClickFollowBtn:u,showWatcherLaterButton:b=!0,showRemoveWatcherLaterButton:m=!1,showPublishTime:g=!1,showFollowButton:x}=e,f=(0,n.Z)(e,w);const[v,y]=c.useState(!1),[E,C]=c.useState(!1),z=c.useCallback(e=>{e.stopPropagation(),t&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+t.uid,active:1!==e.button})},[t]),N=c.useCallback(e=>(e.stopPropagation(),i.aid&&!v&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:i.aid},e=>{switch(e){case!0:y(!0),C("\u5df2\u7a0d\u540e\u518d\u770b");break;case"notSupport":y(!0),C("\u4e0d\u652f\u6301\u756a\u5267\u89c6\u9891");break;case!1:y(!1),C("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[i,v]),M=c.useCallback(e=>(e.stopPropagation(),i.aid&&!v&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:i.aid},e=>{switch(e){case!0:y(!0),C("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:y(!1),C("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[i,v]);return c.createElement(k,(0,o.Z)({className:h?"special-attention":null},f,{onClick:a,onAuxClick:a}),c.createElement(r.ErrorBoundary,null,c.createElement("div",{className:"cover"},c.createElement(s.E,{className:"cover-image",url:i.cover+"@128w_96h.webp",height:86,lazy:!0,duration:0}),b?c.createElement("div",{className:["play-later-wrapper",v?"watched":null].filter(Boolean).join(" "),onClick:N,onAuxClick:N},v?null:c.createElement(l.Icon,{className:"play-later",icon:"play-later",size:18}),E?c.createElement("span",{className:"text"},E):null):null,m?c.createElement("div",{className:["play-later-wrapper",v?"watched":null].filter(Boolean).join(" "),onClick:M,onAuxClick:M},v?null:c.createElement(l.Icon,{className:"play-later",icon:"play-later",size:18}),E?c.createElement("span",{className:"text"},E):null):null),c.createElement("div",{className:"bottom-info"},c.createElement("a",{className:"title",title:i.title},i.tagName&&f.showTag?c.createElement("span",{className:"tag"},i.tagName):null,c.createElement("span",{className:i&&"\u3010"===i.title[0]?"position-adjust":""},i.title)),c.createElement("div",{className:"user-info"},!p&&t?c.createElement("a",{className:"username",onClick:d||z,onAuxClick:d||z},t.name):null,!p&&x?c.createElement("a",{className:"add-special-attention-btn",onClick:u,onAuxClick:u},h?c.createElement(c.Fragment,null,c.createElement(l.Icon,{icon:"love",size:14})):null,h?null:c.createElement(c.Fragment,null,c.createElement(l.Icon,{icon:"love-hollow",size:14}))):null,i.publishDate&&g?c.createElement("span",{className:"publish-time"},i.publishDate):null))))}const E={new:b,old:v,simple:y}},76873:(e,t,i)=>{i.r(t),i.d(t,{ADCard:()=>Y,BilibiliHelperButton:()=>P.d,BilibiliHelperButtonGuide:()=>R,Button:()=>o.Button,Carousel:()=>M,Icon:()=>a.Icon,Image:()=>f.E,Input:()=>v.I,LiveCard:()=>L,Message:()=>Z.Message,Modal:()=>x.u,OldADCard:()=>K,Radio:()=>g,Range:()=>O,RepostCard:()=>oe,Ripple:()=>n.Ripple,VideoClassMap:()=>$.I});var o=i(59158),n=i(52745),a=i(24678),r=i(33385),l=i(67294),s=i(60677),c=i(32699),d=i(6767),p=i.n(d);const{color:h}=c.theme,u=s["default"].div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  filter: grayscale(${({theme:e={}})=>!1!==e.toggle?0:1});
`,b=s["default"].span`
  width: 28px;
  height: 12px;
  position: absolute;
  left: 3px;
  top: 2px;
  border-radius: 8px;
  background-color: ${h("google-grey-400")};
  transition: background-color linear 80ms;
  //opacity: 0.5;
  .checked & {
    background-color: ${h("bilibili-pink")};
    opacity: 1;
  }
`,m=s["default"].span.attrs(()=>({className:"radio-knob"}))`
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  transition: transform linear 80ms, background-color linear 80ms;
  border-radius: 50%;
  z-index: 1;

  .ripple-item {
    //opacity: 0.125;
  }

  .checked & {
    transform: translate3d(18px, 0, 0);

    .ripple-item {
      background-color: ${p()(h("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`;class g extends l.Component{constructor(e){super(e),(0,r.Z)(this,"handleOnMouseDown",()=>{this.setState({mouseDown:!0})}),(0,r.Z)(this,"handleOnMouseUp",()=>{this.setState({mouseDown:!1})}),this.state={mouseDown:!1,rippleRadius:0}}render(){const{on:e,onClick:t,disable:i}=this.props,{mouseDown:o}=this.state;return l.createElement(u,{className:e?"checked":"",onClick:t},l.createElement(b,null),l.createElement(m,{ref:e=>this.btn=e,onMouseDown:i?null:this.handleOnMouseDown,onMouseUp:i?null:this.handleOnMouseUp,onMouseLeave:i?null:this.handleOnMouseUp},l.createElement(s.ThemeProvider,{theme:{radius:17,speed:.75,size:1.2}},l.createElement(n.Ripple,{active:o}))))}}var x=i(90631),f=i(72457),v=i(85025),w=i(69055),k=i(47874);const y=/^(166|365)$/.test(i.j)?["index","selected","src","onClick","alt","id","isAD","itemCount"]:null,E=/^(166|365)$/.test(i.j)?["data","interval","showDots","columns"]:null,C=s["default"].div.attrs({className:"carousel"})`
  position: relative;
  //border-radius: 2px;
  //box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  //overflow: hidden;

  .dot-btns {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 8px;
    right: 10px;
    width: fit-content;
    height: 6px;
    z-index: 2;

    span {
      display: inline-block;
      margin-right: 5px;
      width: 6px;
      height: 6px;
      vertical-align: top;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.5);
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        width: 8px;
        height: 8px;
        background-color: #FB7299;
      }
    }
  }

  .turn-btn {
    position: absolute;
    top: calc(50% - 18px);
    padding: 8px 4px;
    background-color: rgba(0, 0, 0, .7);
    //opacity: 0;
    visibility: hidden;
    color: #eee;
    z-index: 3;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .turn-left-btn {
    left: 0;
    border-radius: 0 4px 4px 0;
  }

  .turn-right-btn {
    right: 0;
    border-radius: 4px 0 0 4px;
  }

  &:hover {
    .turn-btn {
      //opacity: 1;
      visibility: visible;
    }
  }
`,z=s["default"].div.attrs({className:"carousel-item"})`
  position: absolute;
  top: 0;
  left: calc(50% - 155px);
  height: 100%;
  width: 310px;
  opacity: 0;
  cursor: pointer;
  transition: opacity .7s, transform .3s;
  transform: translate(0, 0);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  //will-change: transform, opcity;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 32px;
    width: 100%;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  &.active {
    opacity: 1;
    z-index: 2;
  }

  &.beforeBefore {
    z-index: 1;
    transform: translate(-202%, 0);
  }

  &.before {
    opacity: 1;
    z-index: 1;
    transform: translate(-102%, 0);
  }

  &.after {
    opacity: 1;
    z-index: 1;
    transform: translate(102%, 0);
  }

  &.afterAfter {
    z-index: 1;
    transform: translate(202%, 0);
  }

  .title {
    position: absolute;
    left: 8px;
    bottom: 6px;
    color: #fff;
    z-index: 1;
  }

  .ad-tag {
    margin-right: 2px;
    width: 38px;
    height: 22px;
    vertical-align: bottom;
    zoom: 0.74;
    z-index: 1;
  }
`,N=function(e){let{index:t,selected:i,src:o,onClick:n,alt:a,id:r,isAD:s,itemCount:c}=e,d=(0,k.Z)(e,y);return l.createElement(z,(0,w.Z)({className:[i===t?"active":null,(i<=1?c-(2-i)===t:i-2===t)?"beforeBefore":null,(0===i?c-1===t:i-1===t)?"before":null,(i===c-1?0===t:i+1===t)?"after":null,(i>=c-2?2+i-c===t:i+2===t)?"afterAfter":null].filter(Boolean).join(" "),onClick:()=>n()},d),l.createElement(f.E,{url:o,alt:a}),l.createElement("div",{className:"title"},s?l.createElement(f.E,{className:"ad-tag",url:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad-tag"}):null,a))},M=function(e){let{data:t=[],interval:i=2500,showDots:o=!1,columns:n}=e,r=(0,k.Z)(e,E);const[s,c]=(0,l.useState)(0),[d,p]=(0,l.useState)(!1),h=(0,l.useCallback)(e=>{c(e)},[]),u=(0,l.useCallback)(()=>{p(!0)},[]),b=(0,l.useCallback)(()=>{p(!1)},[]),m=(0,l.useCallback)(()=>{c(0===s?t.length-1:s-1)},[s,t]),g=(0,l.useCallback)(()=>{s===t.length-1?c(0):c(s+1)},[s,t]),x=(0,l.useCallback)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_carousel",label:s}),chrome.runtime.sendMessage({target:"tabController",event:"create",strict:!1,url:t?t[s]&&t[s].url:null})},[s,t]);return(0,l.useEffect)(()=>{let e;return d||(e=setTimeout(()=>{s===t.length-1?c(0):c(s+1)},i)),()=>{clearTimeout(e)}},[s,d,t]),l.createElement(C,(0,w.Z)({},r,{onMouseEnter:u,onMouseLeave:b,style:{gridColumnEnd:"span "+n}}),t.map((e,i)=>l.createElement(N,(0,w.Z)({key:e.alt,index:i,selected:s,itemCount:t.length,onClick:x},e))),t.length>1&&o&&l.createElement("div",{className:"dot-btns"},t.map((e,t)=>l.createElement("span",{key:e.alt,className:s===t?"active":null,onClick:()=>h(t)}))),t.length>1&&l.createElement(l.Fragment,null,l.createElement("div",{className:"turn-btn turn-left-btn",onClick:m},l.createElement(a.Icon,{icon:"left-arrow",size:20})),l.createElement("div",{className:"turn-btn turn-right-btn",onClick:g},l.createElement(a.Icon,{icon:"right-arrow",size:20}))))};var B=i(64723);const S=/^(166|174|365)$/.test(i.j)?["cover","duration","title","isSpecialAttention","owner","stat","onClickCover","onClickUserName","hideAuthor","onClickFollowBtn"]:null,I=s["default"].section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
  min-width: 148px;
  //height: 98px;
  z-index: 1;
  cursor: pointer;
  //content-visibility: paint;
  //contain-intrinsic-size: 48px 0;

  &:hover {
    background-color: #fff;
  }

  //content-visibility: auto;
  //contain-intrinsic-size: none 98px;

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 33%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 4px;
    transform-origin: 50% 30%;
    transition: transform .3s;

    .duration {
      position: absolute;
      right: 10px;
      bottom: 6px;
      padding: 0 3px;
      min-width: 34px;
      height: 15px;
      font-size: 12px;
      text-align: center;
      zoom: calc(4 / 6);
      color: #FFFFFF;
      background-color: rgb(0 0 0 / 80%);
      //border-radius: 2px;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 6px;
    width: 40px;
    height: 40px;
    cursor: pointer;

    .img {
      border-radius: 20px;
      border: 1px solid #fff;
      box-sizing: border-box;
    }
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    //height: 30px;
    line-height: 12px;
    word-break: break-all;
    z-index: 2;

    a {
      width: fit-content;
      height: 18px;
      line-height: 22px;
      font-size: 14px;
      color: #616161;
      cursor: pointer;
    }

    .title {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      //top: 74px;
      //display: -webkit-box;
      margin: 4px 0 0 0;
      box-sizing: border-box;
      //padding: 0 2px;
      //width: calc(100% - 46px);
      width: 100%;
      min-height: 22px;
      line-height: 16px;
      font-size: 12px;
      color: #828282;
      overflow: hidden;
      text-overflow: ellipsis;
      //white-space: nowrap;
      //text-indent: 2px;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      z-index: 1;
      pointer-events: none;
      //zoom: 0.9;
    }

    .username {
      margin-top: 2px;
      height: 12px;
      line-height: 12px;
      font-size: 12px;
      overflow: hidden;
      text-decoration: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      padding: 1px;
      height: 16px;
      line-height: 12px;
      //border-radius: 2px;
      text-decoration: none;
      transform: scale(0.8);
      color: #666;
      box-sizing: border-box;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        //filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }
  }

  &.special-attention {
    .info {
      .avatar {
        .img {
          border-color: var(--bilibili-pink);
        }
      }

      .username {
        color: var(--bilibili-pink);
      }
    }

    .cover {
      //box-sizing: border-box;
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        //border-radius: 4px;
        box-shadow: inset 0 0 0px 1px var(--bilibili-pink);
        z-index: 1;
      }
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #111;
    }

    .info {
      .username {
        color: #ddd;
      }
    }

    .cover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 4px;

      &:hover .cover-image {
        filter: brightness(0.85);
      }
    }
  }
`;function L(e){let{cover:t,duration:i,title:o="none title",isSpecialAttention:n,owner:a,stat:r,onClickCover:s,onClickUserName:c,hideAuthor:d,onClickFollowBtn:p}=e,h=(0,k.Z)(e,S);const u=l.useCallback(e=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+a.mid})},[a]);return l.createElement(B.ErrorBoundary,null,l.createElement(I,(0,w.Z)({className:["live-card",n?"special-attention":""].join(" "),onClick:s,onAuxClick:s},h),l.createElement("div",{className:"avatar"},l.createElement(f.E,{url:a.face,height:30})),l.createElement("div",{className:"info"},l.createElement("a",{className:"username",onClick:c||u,onAuxClick:c||u},a.name),l.createElement("p",{className:"title",title:o},h.areaName," | ",o))))}const F=/^(166|365|571)$/.test(i.j)?["value","max","min","step","onChange"]:null,A=s["default"].input`
`,O=function(e){const{value:t,max:i,min:o,step:n,onChange:a}=e,r=(0,k.Z)(e,F);return l.createElement(A,(0,w.Z)({className:"range",type:"range",max:i,min:o,step:n,value:t,onChange:a},r))};var P=i(42906),Z=i(57563),j=i(73935);const D=["children"],W=["show","sections","onClose"],_=(0,s["default"])(x.u)`
  flex-direction: column;
  margin: 32px;
  width: 800px;
  max-width: 1000px;
  min-width: 300px;
  height: 500px;
  vertical-align: middle;
  border-radius: 4px;
  color: #222;
  text-align: left;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  background-color: rgb(0 0 0 / 50%);
  transition: transform 0.12s;
  backdrop-filter: blur(50px);
  transform: scale(1);
  overflow: hidden;
  
  main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 36px;
    left: 0;
  }

  .toolbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 36px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    background-color: rgb(255 255 255 / 4%);

    .button {
      .button-view {
        padding: 0 16px;
      }
    }

    .prev-button {

    }

    .next-button {
      margin-left: auto;
    }

    .close-button {
      margin-left: auto;
    }
  }
`,T=s["default"].section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  z-index: -1;
  overflow: auto;

  &.show {
    transition: opacity .2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }

  .title {

  }

  .content {
    .topic-image {
      margin: 30px 30px 0;
      width: calc(100% - 60px);
      border-radius: 4px;
    }
  }
`;class H extends l.Component{constructor(e){super(e)}render(){const e=this.props,{children:t}=e,i=(0,k.Z)(e,D);return l.createElement(T,i,l.createElement("div",{className:"content"},t))}}class R extends l.Component{constructor(e){super(e),(0,r.Z)(this,"state",{current:0}),(0,r.Z)(this,"updateBodyOverflow",()=>{}),(0,r.Z)(this,"handleOnClickPrevButton",()=>{const{current:e}=this.state;this.state.current>0&&this.setState({current:e-1})}),(0,r.Z)(this,"handleOnClickNextButton",()=>{const{sections:e}=this.props,{current:t}=this.state;this.state.current<e.length-1&&this.setState({current:t+1})}),this.wrapper=document.createElement("div"),document.body.appendChild(this.wrapper)}componentDidMount(){this.updateBodyOverflow()}componentDidUpdate(e,t,i){this.updateBodyOverflow()}render(){const e=this.props,{show:t,sections:i,onClose:n}=e,a=(0,k.Z)(e,W),{current:r}=this.state;return j.createPortal(l.createElement(_,(0,w.Z)({},a,{open:t}),l.createElement("main",null,i.map((e,t)=>l.createElement(H,{className:r===t?"show":"hide",key:t},e))),l.createElement("footer",{className:"toolbar"},r>0?l.createElement(o.Button,{className:"prev-button primary",disabled:0===r,onClick:this.handleOnClickPrevButton},"\u4e0a\u4e00\u9875"):null,r<i.length-1?l.createElement(o.Button,{className:"next-button primary",onClick:this.handleOnClickNextButton},"\u4e0b\u4e00\u9875"):null,r===i.length-1?l.createElement(o.Button,{className:"close-button primary",onClick:n},"\u6211\u77e5\u9053\u5566_(:\u0437\u300d\u2220)_"):null)),this.wrapper)}}(0,r.Z)(R,"defaultProps",{show:!1,sections:[]});var $=i(49967);const U=["cover","title","link"],V=s["default"].section.attrs(()=>({className:"ad-card"}))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      transition: filter 0.2s;
      filter: brightness(0.95);
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.ad {
      //position: absolute;
      //top: 6px;
      //left: 6px;
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;class Y extends l.Component{constructor(e){super(e),(0,r.Z)(this,"state",{isSetWatchLater:!1,watchLaterText:!1}),(0,r.Z)(this,"visible",!1),(0,r.Z)(this,"handleOnClick",(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:t}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"click_ad",label:this.props.id})})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"show_ad",label:this.props.id})}render(){const e=this.props,{cover:t,title:i="none title",link:o}=e,n=(0,k.Z)(e,U);return l.createElement(V,(0,w.Z)({},n,{onMouseUp:e=>this.handleOnClick(e,o)}),l.createElement("a",{className:"cover"},l.createElement(f.E,{className:"cover-image",url:t+"@634w_400h.webp",height:86})),l.createElement("a",{className:"title",title:i},l.createElement("img",{className:"tag ad",src:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad"}),i))}}(0,r.Z)(Y,"defaultProps",{showWatcherLaterButton:!0});const X=/^(166|365)$/.test(i.j)?["cover","title","link","id"]:null,G=s["default"].section.attrs(()=>({className:"video-card"}))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  height: 114px;
  z-index: 1;
  contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      //filter: grayscale(0.5) brightness(0.24);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.ad {
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .3s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 6px 4px;
    width: 100%;
    line-height: 16px;

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`,K=function(e){let{cover:t,title:i="none title",link:o,id:n}=e,a=(0,k.Z)(e,X);(0,l.useEffect)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"show_ad",label:n})},[]);const r=l.useCallback(e=>{e.stopPropagation(),o&&(chrome.runtime.sendMessage({target:"tabController",event:"create",url:o}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"click_ad",label:o}))},[o]);return l.createElement(G,(0,w.Z)({},a,{onMouseUp:r}),l.createElement("div",{className:"cover"},l.createElement(f.E,{className:"cover-image",url:t+"@638w_220h.webp",height:86,lazy:!0,duration:0}),l.createElement("div",{className:"bottom-info"},l.createElement("a",{className:"title",title:i},l.createElement("img",{className:"tag ad",src:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad"}),i))))},q=s["default"].div`
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;

  .info {
    .images {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      max-height: 100px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 2px;
      filter: brightness(.75);
    }

    .title {
      display: -webkit-box;
      margin: 0 0 3px 0;
      max-height: 84px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;

      &.position-adjust {
        text-indent: -6px;
      }
    }

    .username {
      margin: 0 0 1px 0;
      color: var(--paper-grey-900);
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #ddd;
      }

      .title {
        color: #ddd;
      }
    }
  }
`,Q=({originInfo:e})=>{const t=(0,l.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+e.userInfo.uid})},[e]);return l.createElement(q,null,l.createElement("div",{className:"info"},l.createElement("p",{className:"username",onClick:t},"by ",e.userInfo.name),l.createElement("h4",{className:e.content&&"\u3010"===e.content[0]?"position-adjust title":"title",dangerouslySetInnerHTML:{__html:e.content}}),e.pictures?l.createElement("div",{className:"images"},l.createElement(f.E,{url:e.pictures[0].img_src})):null))};var J=i(63334);const ee=s["default"].div`
  display: flex;
  //flex-wrap: nowrap;
  cursor: pointer;

  .cover {
    flex-shrink: 0;
    width: 64px;
    height: 48px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 2px;
  }

  .info {
    margin-left: 6px;

    .title {
      margin: 0;
      line-height: 14px;
      font-weight: 400;

      &.position-adjust {
        text-indent: -6px;
      }
    }

    .username {
      margin: 0;
      color: var(--paper-grey-900);
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #ddd;
      }
      .title {
        color: #ddd;
      }
    }
  }
`,te=({originInfo:e,originVideoInfo:t})=>{const i=(0,l.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+e.userInfo.uid})},[e]),o=(0,l.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:t.url})},[t]);return l.createElement(ee,{onClick:o},l.createElement("div",{className:"cover"},l.createElement(f.E,{url:t.cover})),l.createElement("div",{className:"info"},l.createElement("h4",{className:t.title&&"\u3010"===t.title[0]?"position-adjust title":"title"},t.title),l.createElement("p",{className:"username",onClick:i},"by ",e.userInfo.name)))},ie=s["default"].section.attrs({className:"repost-card"})`
  margin-top: 1px;
  padding: 4px;
  border-radius: 4px;

  :hover {
    background-color: rgb(255 255 255 / 30%);
    outline: 1px solid #fff;
  }

  .card-head {
    display: flex;
    align-items: start;
    flex-wrap: nowrap;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-right: 8px;
    }

    .username {
      cursor: pointer;

      :hover {
        text-decoration: underline;

      }
    }

    .repost-type {
      //color: var(--bilibili-pink);
    }
  }

  .card-body {
    .content {
      display: -webkit-box;
      margin: -10px 0 6px 38px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;
    }

    .bilibili-emoji {
      width: 12px;
    }

    .bilibili-topic-link {
      color: var(--bilibili-blue);
    }

    .origin-card {
      //margin-left: 18px;
      padding: 4px;
      border-radius: 4px;
      //border: 1px solid hsl(0deg 0% 0% / 20%);
      background-color: hsl(0deg 0% 100% / 70%);
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: hsl(0deg 0% 0% / 10%);
    :hover {
      background-color: hsl(0deg 0% 17%);
      outline: none;
    }

    .card-body {
      .content, .username, .repost-type {
        color: #ddd;
      }

      .origin-card {
        background-color: hsl(0deg 0% 0% / 20%);
      }
    }
  }
`;class oe extends l.Component{constructor(e){super(e),(0,r.Z)(this,"handleOnClickUsername",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+this.props.userInfo.uid})})}renderBody(e){switch(e.originInfo.type){case 2:return l.createElement(Q,{originInfo:e.originInfo});case 8:return l.createElement(te,{originInfo:e.originInfo,originVideoInfo:e.originVideoInfo});case 1024:return"\u6e90\u52a8\u6001\u5df2\u88ab\u4f5c\u8005\u5220\u9664";default:return"\u672a\u517c\u5bb9\u7c7b\u578b: "+e.originInfo.type}}render(){const{dynamicInfo:e,originInfo:t,userInfo:i,originVideoInfo:o}=this.props;return l.createElement(ie,null,l.createElement("div",{className:"card-head"},l.createElement(f.E,{className:"avatar",url:i.face}),l.createElement("a",{className:"username",onClick:this.handleOnClickUsername},i.name),"\xa0\u8f6c\u53d1\u4e86\xa0",l.createElement("span",{className:"repost-type"},J.Ik[t.type])),l.createElement("div",{className:"card-body"},l.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.content}}),l.createElement("div",{className:"origin-card"},this.renderBody(this.props))))}}},87927:(e,t,i)=>{i.d(t,{tc:()=>W,CS:()=>F,Np:()=>L,HC:()=>k,SY:()=>I});var o=i(60677);o["default"].div.attrs(({extend:e})=>({className:e?"extend":""}))`
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: all 0.3s;
  &.extend {
    margin-bottom: 0;
  }
  &::-webkit-scrollbar {
    //display: none;
    //visibility: hidden;
  }
`;var n=i(67294),a=i(32699);const{color:r}=a.theme;o["default"].div.attrs(()=>({className:"list-wrapper"}))`
  flex-shrink: 0;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  min-height: 0;
  min-width: 350px;
  transition: min-height 0.3s;
  visibility: visible;
  opacity: 1;
  
  .list-wrapper & {
    margin-left: 16px;
  }
`,o["default"].div.attrs(()=>({className:"list-header"}))`
  margin: 21px 0 12px;
  padding: 8px 0 4px;
  max-height: 18px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .25px;
  color: ${r("paper-grey-900")};
  overflow: hidden;
  transition: all 0.2s;
  opacity: 1;
`,o["default"].div.attrs(()=>({className:"list-body"}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  opacity: 1;
  transition: all 0.2s;
  //border-radius: 4px;
  border-radius: 3px;
  //box-shadow: 0 0px 1px 0 rgba(0,0,0,0.1);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  //background-color: whitesmoke;
  overflow: hidden;
  //padding-left: 40px;
  //background-color: white;
  .extended & {
    display: none;
  }
`;n.Component;var l=i(69055),s=i(47874),c=i(27921),d=i.n(c),p=i(59158);const h=["icon","title","description","frontOperation","operation","subList","onClick","extend","separator","toggle","disable"],u=o["default"].div.attrs(()=>({className:"list-item"}))`
  background-color: #fff;
  border-top: 1px solid #f2f3f5;
  ${({disable:e})=>e?"cursor: not-allowed; opacity: .5;":""}
  
  &:nth-of-type(1) {
    border-top: none;
    margin-top: 0;
  }
  .list-item & {
    border-top: 1px solid #f2f3f5;
    margin-top: 0;
  }
`,b=o["default"].div.attrs(()=>({className:"list-item-main"}))`
  min-height: ${e=>e.twoLine?"56px":"40px"};
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  cursor: ${({onClick:e})=>e?"pointer":"default"};
  opacity: 1;
  //.icon {
  //  margin: 0 12px 0 -6px;
  //}
`,m=o["default"].div.attrs(()=>({className:"front-operation-wrapper"}))`
  margin: 12px 20px auto -20px;
`,g=o["default"].div.attrs(()=>({className:"two-line-container"}))`
  display: flex;
  flex-direction: column;
  flex: auto;
  h3 {
    margin: 0;
    height: 20px;
    font-size: 13px;
  }
`,x=o["default"].h3`
  margin: 0;
  height: 20px;
  font-size: 13px;
  font-weight: 400;
`,f=o["default"].div`
  margin-top: 2px;
  height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #757575;
`,v=o["default"].div.attrs(()=>({className:"list-item-end"}))`
  display: flex;
  align-items: center;
  margin: 0 4px 0 0;
  .separator + & {
    margin: 0 13px 0 -13px;
  }
  .button {
    margin-right: -12px;
  }
`,w=o["default"].div.attrs(({hide:e})=>({className:e?"sub-list hide":"sub-list"}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 0;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
  overflow: hidden;
  opacity: 1;
  .list-item {
    margin-left: ${({noIndent:e})=>e?"0px":"60px"};
    .list-item-start {
      margin: 0;
    }
    &:last-of-type {
      padding-bottom: 16px;
    }
  }
`,k=function(e){let{icon:t,title:i,description:o,frontOperation:a,operation:r,subList:c,onClick:k,extend:y,separator:E,toggle:C,disable:z}=e,N=(0,s.Z)(e,h);const[M,B]=(0,n.useState)(!1),[S,I]=(0,n.useState)(0),L=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(L.current){const e=d()(L.current.querySelectorAll(".list-item, *"));I(e.reduce((e,t)=>e+t.getBoundingClientRect().height,0))}},[L]),c&&c.children&&y&&(r=n.createElement(p.Button,{icon:!0===M?"arrowDown":"arrowUp",onClick:()=>this.setState({hideSubList:!M})}),k=()=>B(!M)),n.createElement(u,(0,l.Z)({disable:z},N),i&&n.createElement(b,{onClick:k||null,twoLine:!!i&&!!o},t||null,a&&n.createElement(m,null,a),n.createElement(g,null,n.createElement(x,null,i),o&&n.createElement(f,null,o)),r&&n.createElement(v,{separator:E},r)),c&&c.children&&c.children&&n.createElement(w,{ref:L,noIndent:!i,style:{maxHeight:!y&&c.hide||y&&!0===M?"0":S||""}},c.children))};k.defaultProps={subList:null,operation:null,toggle:!0,children:[],separator:!1,disable:!1};var y=i(33385),E=i(6767),C=i.n(E),z=(i(52745),i(73226));const{color:N}=z.rS;o["default"].div.attrs(()=>({className:"radio-button-wrapper"}))`
  display: flex;
  align-items: center;
  //margin-left: -16px;
  width: 100%;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  opacity: ${({theme:e={}})=>e.disable?.5:1};
`,o["default"].div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${N("google-grey-700")};
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: ${N("bilibili-pink")};
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: ${N("bilibili-pink")};
    &::after {
      transform: scale(0.5);
    }
    .ripple-item {
      background-color: ${C()(N("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`,o["default"].div.attrs(()=>({className:"radio-button-title"}))`
  margin-left: 20px;
  font-size: 14px;
`;n.Component;var M=i(76873);const B=o["default"].div.attrs(({active:e})=>({className:e?"radio-button-disc active":"radio-button-disc"}))`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid var(--google-grey-700);
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: var(--bilibili-pink);
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: var(--bilibili-pink);
    &::after {
      transform: scale(0.5);
    }
  }
`,S=({on:e,mouseDown:t})=>n.createElement(B,{className:e?"checked":""},n.createElement(o.ThemeProvider,{theme:{speed:.5,size:1.2}},n.createElement(M.Ripple,{active:t}))),I=({data:e,value:t,onClick:i})=>e instanceof Array?e.map((e,o)=>{const{key:a,title:r,description:l,disable:s=!1,hide:c=!1}=e;return c?null:n.createElement(k,{disable:s,key:o,noBorder:!1,title:r,description:l,onClick:s?null:()=>i(a),frontOperation:n.createElement(S,{on:a===t,mouseDown:!1})})}):null,L=o["default"].div.attrs(({active:e,disabled:t=!1})=>({className:e?"checkbox-rect on":"checkbox-rect",disabled:t}))`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 2px solid #848990;
  border-radius: 2px;
  transition: background-color 140ms, transform 140ms;
  cursor: pointer;
  
  &::after {
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    content: '';
    display: block;
    height: 73%;
    transform: scale(0) rotate(45deg);
    transform-origin: 100% 80%;
    width: 36%;
  }
  &.on {
    background-color: var(--bilibili-pink);
    border-color: var(--bilibili-pink);
    
    ::after {
      transform: scale(0.9) rotate(45deg) translate(0.5px, 0.5px);
      transition: transform 140ms ease-out;
    }
  }
  
  &[disabled] {
    cursor: not-allowed;
    filter: brightness(1.7) grayscale(1);
  }
`,F=function({data:e,direction:t="left",onClick:i}){return n.createElement(n.Fragment,null,e.map(e=>{const{key:o,title:a=null,description:r=null,on:s=!1,toggle:c=!0,hide:d=!1}=e;if(d)return null;const p={};return"left"===t?p.frontOperation=n.createElement(L,{disabled:!c,active:s?1:0}):p.operation=n.createElement(L,{disabled:!c,active:s?1:0}),n.createElement(k,(0,l.Z)({key:o,title:a,description:r,onClick:!!c&&!!i&&(()=>i(o,!s))},p))}))};F.defaultProps={data:[],direction:"left",onClick:null};i(35161);const{color:A}=z.rS;o["default"].div.attrs(()=>({className:"update-list-item"}))`
    margin-left: -20px;
    font-size: 13px;
    line-height: 26px;
    list-style: none;
    padding: 10px 0;
    &.serious {
      color: ${A("paper-red-500")};
      font-weight: bold;
    }
    i {
      margin: 4px;
      padding: 1px 6px;
      border-radius: 3px;
      font-size: 12px;
      font-style: normal;
      letter-spacing: 0.3px;
      background-color: ${A("paper-pink-50")};
      color: ${A("bilibili-pink")};
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: ${A("paper-pink-50")};
      }
    }
    a {
      color: ${A("bilibili-pink")};
    }
`;n.Component;o["default"].div.attrs(({on:e})=>({className:e?"sub-page-wrapper on":"sub-page-wrapper off"}))`
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 100%;
  transform: scaleY(0.9);
  opacity: 0;
  background-color: transparent;
  transition: z-index 300ms, background-color 200ms, opacity 150ms, transform 0ms 500ms, visibility 300ms;
  pointer-events: none;
  z-index: -100;
  visibility: hidden;
  
  &.on {
    transition: z-index 300ms, opacity 300ms, transform 200ms;
    opacity: 1;
    overflow: auto;
    background-color: #f2f3f5;
    transform: scaleY(1);
    pointer-events: auto;
    visibility: visible;
    z-index: 100;
  }
`,o["default"].div.attrs(()=>({className:"sub-page-container"}))`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translate(-50%, 0);
  max-width: 800px;
  width: 100%;
  opacity: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  pointer-events: auto;
`,o["default"].div.attrs(()=>({className:"sub-page-header"}))`
  display: flex;
  width: 100%;
  padding: 16px 6px;
  flex-grow: 0;
  flex-shrink: 0;
`,o["default"].h5.attrs(()=>({className:"sub-page-title"}))`
  margin: auto 0 auto 24px;
  font-size: 14px;
  font-weight: 500;
`,o["default"].div.attrs(()=>({className:"sub-page-body"}))`
  flex-grow: 1;
  max-height: 0;
  min-height: 0;
  overflow: auto;
  //transition: max-height 0.2s;
  .on & {
    max-height: 100%;
    min-height: 100%;
  }
  & .list-body {
    box-shadow: none;
  }
`;n.Component;const O=/^(166|571)$/.test(i.j)?["on","onClick","disable","className"]:null,{color:P}=a.theme,Z=o["default"].div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  ${({theme:e={}})=>!1!==e.toggle?"":"filter: grayscale(1)"};
  &[disabled] {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`,j=o["default"].div`
  width: 36px;
  height: 16px;
  border-radius: 2px;
  background-color: ${P("google-grey-400")};
  transition: background-color linear 80ms;
  box-shadow: inset 0px 0px 2px hsla(340, 0%, 40%, 1);
  //opacity: 0.5;
  .checked & {
    background-color: var(--bilibili-pink);
    box-shadow: inset 0px 0px 2px hsla(340, 60%, 40%, 1);
    //opacity: 1;
  }
`,D=o["default"].span.attrs(()=>({className:"checkbox-knob"}))`
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  border: 1px solid transparent;
  transition: transform linear 150ms, background-color linear 100ms, width linear 150ms;
  z-index: 1;
  .checked & {
    transform: translate3d(20px, 0, 0);
    right: 16px;
    left: unset;
  }
`;class W extends n.Component{constructor(e){super(e),(0,y.Z)(this,"handleOnMouseDown",()=>{this.setState({mouseDown:!0})}),(0,y.Z)(this,"handleOnMouseUp",()=>{this.setState({mouseDown:!1})}),this.state={mouseDown:!1,rippleRadius:0}}render(){const e=this.props,{on:t,onClick:i,disable:a,className:r}=e,c=(0,s.Z)(e,O),{mouseDown:d}=this.state;return n.createElement(o.ThemeProvider,{theme:{mouseDown:d}},n.createElement(Z,(0,l.Z)({className:[r,t?"checked":"","check-box-button"].join(" "),disabled:a,onClick:a?null:i},c),n.createElement(j,{onMouseDown:a?null:this.handleOnMouseDown,onMouseUp:a?null:this.handleOnMouseUp,onMouseLeave:a?null:this.handleOnMouseUp},n.createElement(D,null))))}}},88686:(e,t,i)=>{i.d(t,{BilibiliHelperButtonGuide:()=>n.BilibiliHelperButtonGuide,Button:()=>n.Button,CheckBoxButton:()=>o.tc,CheckBoxGroup:()=>o.CS,CheckboxRect:()=>o.Np,Icon:()=>n.Icon,Image:()=>n.Image,Input:()=>n.Input,ListItem:()=>o.HC,Message:()=>n.Message,Modal:()=>n.Modal,RadioButtonGroup:()=>o.SY,Range:()=>n.Range});var o=i(87927),n=i(76873)},59158:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},r=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const l=a(i(67294)),s=a(i(60677)),c=i(24678),d=i(52745),p=i(32699),{color:h}=p.theme,u=s.css`
  height: 36px;
  //margin-right: -12px;
  border-radius: 50%;
`,b=s.default.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 32px;
  line-height: inherit;
  border-radius: 3px;
  font-size: 12px;
  color: ${h("paper-grey-600")};
  ${({theme:e})=>e.icon&&u};
  overflow: hidden;
  user-select: none;

  &.disabled {
    cursor: not-allowed !important;
    filter: grayscale(1) !important;
  }

  &.primary {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  &.border {
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
`,m=s.default.button`
  display: block;
  width: 100%;
  height: 100%;
  min-width: ${({theme:e})=>e.icon?"36px":"50px"};
  ${({theme:e})=>e.icon?"padding: 0":""};
  ${({theme:e})=>e.normal?"min-height: 36px":""};
  font-size: inherit;
  font-weight: inherit;
  background-color: transparent;
  color: inherit;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":e.loading?"progress":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  transition: color .3s;
  border: none;
  outline: none;
  z-index: 1;

  &.disabled {
    cursor: not-allowed !important;;
    //pointer-events: none!important;
  }
`,g=function(e){var{disabled:t=!1,disableEvent:i=!0,loading:o,children:n,className:a,theme:p,icon:h,normal:u,onClick:g,disable:x,iconSize:f=16,onMouseDown:v,onMouseUp:w}=e,k=r(e,["disabled","disableEvent","loading","children","className","theme","icon","normal","onClick","disable","iconSize","onMouseDown","onMouseUp"]);const[y,E]=(0,l.useState)(!1),[C,z]=(0,l.useState)(null),[N,M]=(0,l.useState)(void 0),[B,S]=(0,l.useState)(void 0),I=(0,l.useRef)(null),L=(0,l.useCallback)(e=>{if(t&&i)return!1;if(!y){const t=I.current.clientWidth,i=I.current.clientHeight,o=I.current.getBoundingClientRect(),n=h?t/2:e.clientX-o.left,a=h?i/2:e.clientY-o.top,r=h?t/2:Math.abs(t/2-n)+t/2,l=h?i/2:Math.abs(i/2-a)+i/2;E(!0),z(Math.sqrt(r*r+l*l)),M(n),S(a)}},[y,t]),F=(0,l.useCallback)(()=>{if(t&&i)return!1;y&&E(!1)},[y,t]);return l.default.createElement(s.ThemeProvider,{theme:Object.assign(Object.assign({},p),{radius:C,icon:h,normal:u,disable:x,loading:o})},l.default.createElement(b,{className:["button",a,t?"disabled":""].filter(Boolean).join(" "),onMouseDown:x?null:L,onMouseUp:x?null:F,onMouseLeave:x?null:F},l.default.createElement(m,Object.assign({ref:I,onClick:t&&i?null:g,onAuxClick:t&&i?null:g,onMouseDown:v,onMouseUp:w,className:["button-view",t?"disabled":""].join(" ")},k),l.default.createElement(l.default.Fragment,null,h&&l.default.createElement(c.Icon,{icon:h,size:f}),n)),l.default.createElement(d.Ripple,{active:y,x:N,y:B})))};t.Button=g},64723:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorBoundary=void 0;const n=o(i(67294));class a extends n.default.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){}render(){return this.state.hasError?n.default.createElement("h1",null,"Something went wrong."):this.props.children}}t.ErrorBoundary=a},52745:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Ripple=void 0;const l=r(i(67294)),s=a(i(60677)),c=s.keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,d=s.default.div.attrs(()=>({className:"ripple-box"}))`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 1;

  .ripple-item {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: scale(0);
    background-color: rgb(0, 0, 0);
    opacity: 0.2;
    animation: ${e=>e.theme.speed?1.15*e.theme.speed:1.15}s ${c} cubic-bezier(0.1, 0.3, 0, 1) forwards;
  }

  .hiding {
    transition: opacity ${e=>e.theme.speed?1.2*e.theme.speed*.3:.3}s;
    opacity: 0;
  }
`;class p extends l.default.Component{constructor(e){super(e),this.state={currentRipple:null,box:null}}static getDerivedStateFromProps(e,t){const{active:i,x:o,y:n,theme:a}=e,{radius:r=15,size:l=1}=a;let s=`width:${2*r*l}px;height:${2*r*l}px;margin: -${r*l}px;`;if(void 0!==o&&void 0!==n&&(s+=`top:${n}px;left:${o}px;`),i){const e=document.createElement("div");return e.setAttribute("class","ripple-item"),e.setAttribute("style",s),t.box.prepend(e),{currentRipple:e}}return t.currentRipple&&(t.currentRipple.classList.add("hiding"),setTimeout(()=>t.currentRipple.remove(),300)),t}render(){return l.default.createElement(d,{ref:e=>!this.state.box&&this.setState({box:e})})}}t.Ripple=(0,s.withTheme)(p)}}]);