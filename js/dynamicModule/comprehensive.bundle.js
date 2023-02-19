"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[68],{37:(e,t,i)=>{i.d(t,{$:()=>h});var o=i(69055),n=i(47874),s=i(33385),r=i(67294),a=i(60677);const l=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=a["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,d=a["default"].h4`
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
`;class h extends r.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:s,rowGap:a,columnsGap:h,footer:p,sectionRef:m}=e,u=(0,n.Z)(e,l);return r.createElement(c,(0,o.Z)({className:"section",rowGap:a,columnsGap:h,ref:m},u),i?r.createElement(d,{className:"section-title"},i):null,r.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${s}, 1fr)`,gridColumnEnd:"span "+s}},t),p)}}(0,s.Z)(h,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},45075:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var o=i(69055),n=i(33385),s=i(73473),r=i.n(s),a=i(66130),l=i.n(a),c=i(67294),d=i(76873),h=i(60677),p=i(55168),m=i(58971),u=i.n(m),g=i(37),v=i(42650);const f=h["default"].div`
  //.topic {
  //  margin-top: 0;
  //  margin-bottom: 6px;
  //  margin-left: -10px;
  //  padding: 4px 0 4px 10px;
  //  font-size: 12px;
  //  color: #3B3B3B;
  //  position: sticky;
  //  top: -10px;
  //  z-index: 2;
  //  background-color: #f4f4f4;
  //}

  .topic {
    display: flex;
    margin: 0;
    color: #3B3B3B;

    b {
      margin: 0 4px;
      color: var(--bilibili-pink);
    }

    .more-btn {
      margin-left: auto;
      cursor: pointer;
    }
  }

  @media (prefers-color-scheme: dark) {
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }
  }
`,b=h["default"].div.attrs({className:"popup-main-home"})`
  position: relative;
  display: grid;
  //grid-template-columns: repeat(auto-fill, 196px);
  //grid-template-rows: repeat(auto-fill, 135px);
  //grid-column-gap: 12px;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
  margin-bottom: 42px;

  &::-webkit-scrollbar {
    width: 3px;
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

  .carousel {
    margin-left: -10px;
    width: calc(100% + 20px);
    height: 92px;
    overflow: hidden;

    img:not([src]) {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0 0 0 / 10%);
    }
  }

  .LazyLoad {
    min-height: 149px;
  }

  .section-content {
    //padding-top: 6px;
    .recent-read-position {
      text-align: center;
      padding: 16px 0;
      pointer-events: none;
    }
  }

  .data-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    font-size: 12px;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: -280px auto 20px;
    padding-top: 300px;
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
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,y=h["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`,x=h["default"].div`
  position: sticky;
  bottom: 40px;
  right: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  float: right;
  text-align: center;
  z-index: 1;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  visibility: hidden;
  
  &.show {
    opacity: 0.4;
    visibility: visible;
    
    :hover {
      opacity: 1;
      visibility: visible;
    }
  }
`,L=(0,h["default"])(d.Button)`
  padding: 4px;
  width: 32px;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  & + & {
    margin-top: 8px;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-width: 30px;
    font-size: 12px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(20 20 20);
    border-color: var(--google-grey-700);
    color: var(--bilibili-gray);
  }
`,w=h["default"].div`
  margin-bottom: -12px;
  width: auto;
  overflow: auto;

  .list {
    display: flex;
    margin-top: 6px;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`,k=h["default"].a`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin: 0 2.5px;
  padding: 4px 1px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
  //content-visibility: print;
  //contain-intrinsic-size: 54px 0;
  //will-change: scroll-position;

  &:hover {
    background-color: rgba(255, 255, 255);
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }

  .user-name {
    overflow: hidden;
    //text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 114%;
    word-break: break-all;
    color: var(--paper-grey-900);
    text-align: center;
    zoom: 0.8;
  }

  @media (prefers-color-scheme: dark) {
    .user-name {
      color: var(--paper-grey-100);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`,V=(h["default"].div`
  display: flex;
  align-items: center;

  .button {
    height: 22px;
  }
`,h["default"].div`
  display: flex;
`),T=h["default"].section`
  margin-left: 8px;
  cursor: pointer;
  font-weight: normal;
  opacity: .8;

  :first-child {
    margin-left: 0;
  }

  &.active {
    font-weight: bold;
    opacity: 1;
  }
`,C=u().get("mainHome-config")||{};let R=u().get("popupScrollPosition")||{};const E=!!R.type;class S extends c.Component{constructor(e){super(e),(0,n.Z)(this,"initedScrollPosition",!1),(0,n.Z)(this,"state",{liveList:[],livingCount:0,carousel:[],videoType:(null===R||void 0===R?void 0:R.type)||(C?C.videoType:"recentVideo"),rememberRecentReadPosition:!C||C.rememberRecentReadPosition,offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[],loading:!1,showGoTopButton:!1,newListLength:0}),(0,n.Z)(this,"hotVideoIdMap",[]),(0,n.Z)(this,"contentType","recentVideo"),(0,n.Z)(this,"videoListRef",c.createRef()),(0,n.Z)(this,"firstPageRefRef",c.createRef()),(0,n.Z)(this,"bottomObserverRef",c.createRef()),(0,n.Z)(this,"dynamicInitLoaded",!1),(0,n.Z)(this,"hotInitLoaded",!1),(0,n.Z)(this,"handleOnToggleVideoType",e=>{this.setState({videoType:e},()=>{this.handleOnClickGoTopButton()})}),(0,n.Z)(this,"handleOnClickGetRefreshDynamicList",()=>{this.setState({newListLength:0,recentVideoList:[]},()=>{this.getDynamic(0,!0,!1),this.dynamicInitLoaded=!0})}),(0,n.Z)(this,"getNewHotVideos",(e=!1,t=!1)=>{const{hotVideoList:i}=this.state;return new(r())(o=>{chrome.runtime.sendMessage({target:"mainHome",event:"getNewHotVideos",clearCache:e,continuous:t},e=>{if(e){const t=e.map(e=>{if(!this.hotVideoIdMap.includes(e.aid))return e}).filter(Boolean);i.push(...t),this.setState({hotVideoList:i,loading:!1},()=>{o()})}else o()})}).then(()=>{let{scrollPosition:e=0}=u().get("popupScrollPosition")||{};e&&!this.initedScrollPosition&&(this.initedScrollPosition=!0,this.setState({videoType:"home"},()=>{this.hotInitLoaded||this.videoListRef.current.scrollTo(0,+e)}))})}),(0,n.Z)(this,"getDynamic",(e=this.state.offsetDynamicId,t=!1,i=!0)=>{const{recentVideoList:o,adMap:n}=this.state;return new(r())(n=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e,typeList:[8],clearCache:t,continuous:i},e=>{if(e){const{hasMore:t,offsetDynamicId:i}=e;o.push(...e.cards),this.setState({hasMoreVideos:t,recentVideoList:o,offsetDynamicId:i,loading:!1},()=>{n()})}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0,loading:!1},()=>{n()})})}).then(()=>{const{scrollPosition:e=0}=u().get("popupScrollPosition")||{};e&&!this.initedScrollPosition&&(this.initedScrollPosition=!0,this.setState({videoType:"recentVideo"},()=>{this.dynamicInitLoaded||this.videoListRef.current.scrollTo(0,+e)}))})}),(0,n.Z)(this,"getLiveList",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/polymer/web-dynamic/v1/portal",options:{contentType:"json"}},({data:e})=>{e&&e.data&&e.data.live_users&&e.data.live_users.items.length>0&&this.setState({liveList:e.data.live_users.items,livingCount:e.data.live_users.count})})}),(0,n.Z)(this,"handleOnClickVideoCover",(e,t,i)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:i}),e.preventDefault(),e.stopPropagation(),this.context.createTab(e,"https://www.bilibili.com/video/"+t)}),(0,n.Z)(this,"handleOnClickMoreLiving",()=>{this.props.history.push("/live")}),(0,n.Z)(this,"handleOnClickOpenLive",(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.context.createTab(e,t)}),(0,n.Z)(this,"handleOnClickGoTopButton",()=>{this.videoListRef.current&&(this.videoListRef.current.scrollTo(0,0),this.setState({showGoTopButton:!1})),chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.clearCache()}),(0,n.Z)(this,"clearCache",()=>{"recentVideo"===this.state.videoType?chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearCache"}):"home"===this.state.videoType&&chrome.runtime.sendMessage({target:"mainHome",event:"clearCache"})}),(0,n.Z)(this,"getContinuousHotVideos",()=>this.getNewHotVideos(!1,!0)),(0,n.Z)(this,"getContinuousDynamicVideos",()=>this.getDynamic(this.state.offsetDynamicId,!1,!0))}componentDidMount(){if(this.videoListRef.current){const e=this.videoListRef.current;let t=0,i=!1;e.addEventListener("wheel",o=>{clearTimeout(t),t=setTimeout(()=>{let t=Number(e.scrollTop);t<=150&&!i&&(chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),i=!0,this.clearCache()),t>76&&(t-=76,i=!1,u().set("popupScrollPosition",{type:this.state.videoType,scrollPosition:t,t:l()()}))},50)})}chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getNewList"},e=>{e&&e.length&&this.setState({newListLength:e.length}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"})});const e=u().get("mainHome-config")||{},t=!e||!!e.showLiveBar;this.setState({showLiveBar:t}),t&&this.getLiveList(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{loading:i}=this.state,o=setTimeout(()=>{this.setState({loading:!1})},1e4);e.length&&e[0].intersectionRatio>0&&!i?(this.setState({loading:!0}),this.state.hasMoreVideos&&"recentVideo"===this.state.videoType?this.getDynamic(this.state.offsetDynamicId,!this.dynamicInitLoaded&&!E,this.dynamicInitLoaded).then(()=>{this.dynamicInitLoaded=!0,clearTimeout(o)}):"home"===this.state.videoType&&this.getNewHotVideos(!this.hotInitLoaded&&!E,this.hotInitLoaded).then(()=>{this.hotInitLoaded=!0,clearTimeout(o)})):this.state.hasMoreVideos},{root:this.videoListRef.current,threshold:[0,.5,1]}),this.observer.observe(this.bottomObserverRef.current),this.firstPageRefRef.current&&new IntersectionObserver(e=>{const t=e[0],{hotVideoList:i,recentVideoList:o,videoType:n}=this.state;if(t.intersectionRatio<.3)this.setState({showGoTopButton:!0});else{const e="home"===n?i:o;e.length>0&&chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.setState({showGoTopButton:!1})}},{root:this.videoListRef.current,threshold:[.3]}).observe(this.firstPageRefRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:o}=this.context;return i&&t>0?c.createElement(w,{style:{gridColumnEnd:"span "+o}},c.createElement("h4",{className:"topic"},"\u6b63\u5728\u76f4\u64ad",c.createElement("b",null,t),"\u4eba",c.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"\u67e5\u770b\u5168\u90e8")),c.createElement("div",{className:"list"},e.map((e,t)=>c.createElement(k,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.jump_url,t),onAuxClick:i=>this.handleOnClickOpenLive(i,e.jump_url,t)},c.createElement(d.Image,{className:"user-avatar",url:e.face}),c.createElement("span",{className:"user-name"},e.uname))))):null}renderVideoListTitle(){const{videoType:e}=this.state;return c.createElement(V,null,c.createElement(T,{className:"recentVideo"===e?"active":null,onClick:()=>this.handleOnToggleVideoType("recentVideo")},"\u6700\u8fd1\u6295\u7a3f"),c.createElement(T,{className:"home"===e?"active":null,onClick:()=>this.handleOnToggleVideoType("home")},"\u9996\u9875\u63a8\u8350"))}renderVideoCard(e,t){const{videoCardType:i,columns:n}=this.context,{videoType:s}=this.state,{dynamicInfo:r,videoInfo:a,userInfo:l}=t,h=d.VideoClassMap[i];if(t.isAD)return null;switch("home"===s&&(t.type=8),t.type){case"recentReadPosition":return c.createElement("div",{className:"recent-read-position",style:{gridColumnEnd:"span "+n}},"\u4ee5\u4e0b\u662f\u66f4\u65e9\u524d\u7684\u5185\u5bb9");case 8:return c.createElement(h,{key:(null===r||void 0===r?void 0:r.dynamicIdStr)||a.aid,isSpecialAttention:t.isSpecialAttention,userInfo:l,videoInfo:a,onClickCover:t=>this.handleOnClickVideoCover(t,a.bvid,e),showTag:this.context.showTag});case 1:return c.createElement(d.RepostCard,(0,o.Z)({key:r.dynamicIdStr},t));default:return c.createElement("section",{key:r.dynamicIdStr},"\u672a\u517c\u5bb9\u7c7b\u578b:"+t.type)}}renderVideoList(){const{columns:e,bilibiliAccount:t,createTab:i}=this.context,{videoType:o,recentVideoList:n,hotVideoList:s,loading:r}=this.state,a="home"===o?s:n;return a?a.length>0?a.map((e,t)=>this.renderVideoCard(t,e)):t&&!t.hasLogin?c.createElement("div",{style:{gridColumnEnd:"span "+e}},c.createElement(d.Button,{onClick:e=>i(e,"https://passport.bilibili.com/login?from=bilibili-helper",{active:!0})},"\u672a\u53d1\u73b0\u5df2\u767b\u5f55\u7684B\u7ad9\u8d26\u53f7\uff0c\u70b9\u51fb\u767b\u5f55")):r?c.createElement("div",{className:"data-loading"},"\u6570\u636e\u83b7\u53d6\u4e2d\uff0c\u8bf7\u7a0d\u7b49..."):void 0:"\u6ca1\u6709\u89c6\u9891\u6570\u636e"}renderVideoSection(){const{columns:e}=this.context,{hasMoreVideos:t,recentVideoList:i,hotVideoList:o,videoType:n}=this.state;let s;return s="home"===n?this.getContinuousHotVideos:this.getContinuousDynamicVideos,c.createElement(g.$,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:c.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?c.createElement(d.Button,{className:"border",onClick:s},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},this.renderVideoList())}render(){const{showGoTopButton:e,newListLength:t,videoType:i}=this.state;return c.createElement(f,{id:"homePage",ref:this.videoListRef},c.createElement(b,null,this.renderLiveList(),this.renderVideoSection()),c.createElement(y,{ref:this.firstPageRefRef}),c.createElement(x,{className:e?"show":""},c.createElement(L,{onClick:this.handleOnClickGoTopButton},c.createElement(d.Icon,{icon:"top-arrow",size:12}))))}}(0,n.Z)(S,"contextType",v.Z);const I=(0,p.EN)(S)}}]);