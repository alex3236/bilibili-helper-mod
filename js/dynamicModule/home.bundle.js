"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[497],{37:(e,t,i)=>{i.d(t,{$:()=>p});var o=i(69055),n=i(47874),s=i(33385),r=i(67294),a=i(60677);const c=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],l=a["default"].div`
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
`;class p extends r.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:s,rowGap:a,columnsGap:p,footer:h,sectionRef:m}=e,u=(0,n.Z)(e,c);return r.createElement(l,(0,o.Z)({className:"section",rowGap:a,columnsGap:p,ref:m},u),i?r.createElement(d,{className:"section-title"},i):null,r.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${s}, 1fr)`,gridColumnEnd:"span "+s}},t),h)}}(0,s.Z)(p,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},37545:(e,t,i)=>{i.r(t),i.d(t,{default:()=>G});var o=i(69055),n=i(33385),s=i(90487),r=i.n(s),a=i(73473),c=i.n(a),l=i(26243),d=i.n(l),p=i(62680),h=i.n(p),m=i(95366),u=i.n(m),g=i(6919),b=i.n(g),v=i(93364),f=i.n(v),x=i(26771),y=i.n(x),L=i(67294),w=i(76873),k=i(49967),V=i(60677),A=i(55168),M=i(58971),C=i.n(M),E=i(37),D=i(42650);function S(e,t){var i=d()(e);if(h()){var o=h()(e);t&&(o=o.filter((function(t){return u()(e,t).enumerable}))),i.push.apply(i,o)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):b()?f()(e,b()(i)):S(Object(i)).forEach((function(t){y()(e,t,u()(i,t))}))}return e}const T=V["default"].div`
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
`,Z=V["default"].div.attrs({className:"popup-main-home"})`
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

  .recommend-video-list {
    .section-content {
      padding-top: 6px;
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
`,O=V["default"].div`
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
`,B=V["default"].a`
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
`,N=(V["default"].div`
  display: flex;
  align-items: center;

  .button {
    height: 22px;
  }
`,V["default"].section`
`);class R extends L.Component{constructor(e){super(e),(0,n.Z)(this,"state",{liveList:[],livingCount:0,carousel:[],offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[]}),(0,n.Z)(this,"contentType","recentVideo"),(0,n.Z)(this,"videoListRef",L.createRef()),(0,n.Z)(this,"bottomObserverRef",L.createRef()),(0,n.Z)(this,"currentDidList",new(r())),(0,n.Z)(this,"getHomeData",(e=!0)=>new(c())(t=>{chrome.runtime.sendMessage({target:"mainHome",event:"getHomeData",getCache:e},e=>{if(e){const{data:t}=e,{carousel:i,recommendList:o}=t;o.forEach(e=>{e.isSpecialAttention=this.state.specialAttentionList.includes(e.owner.mid)})}else t()})})),(0,n.Z)(this,"getDynamic",(e=this.state.offsetDynamicId)=>{const{bhAccount:t,specialAttentionList:i}=this.context;return new(c())(o=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},e=>{if(e){const{recentVideoList:n,adMap:s}=this.state,{hasMore:r,offsetDynamicId:a}=e;if(e.cards=e.cards.filter(e=>{if(e.isSpecialAttention=i.includes(e.card.owner.mid),!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0}),(!t||!t.isVIP)&&s.length>0){const t=1,i=s.filter(e=>!e.hasShow),o=Math.floor(Math.random()*(i.length+t));n[0]&&n[0].isAD&&n.shift();const r=i[o];r&&(r.hasShow=!0,e.cards.unshift(_(_({},r),{},{isAD:!0,link:r.link,cover:r.cover,title:r.title})))}n.push(...e.cards),this.setState({hasMoreVideos:r,recentVideoList:n,offsetDynamicId:a},()=>{o()})}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0},()=>{o()})})})}),(0,n.Z)(this,"getHotVideos",()=>new(c())(e=>{const{hotVideoList:t,hotVideoListPageNumber:i}=this.state;this.state.hasMoreVideos?chrome.runtime.sendMessage({target:"mainHome",event:"getHotVideos",pn:i},o=>{if(o){const{list:n,hasMore:s}=o;n.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)}),t.push(...n),this.setState({hotVideoList:t,hasMoreVideos:s,hotVideoListPageNumber:i+1},()=>e())}}):e()})),(0,n.Z)(this,"getLiveList",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users?size=20",options:{contentType:"json"}},({data:e})=>{e&&e.data&&e.data.items&&e.data.items.length>0&&this.setState({liveList:e.data.items,livingCount:e.data.count})})}),(0,n.Z)(this,"handleOnClickVideoCover",(e,t,i)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:i}),e.preventDefault(),this.createTab("https://www.bilibili.com/video/"+t,"direct"===this.context.videoOpenMethod()&&1!==e.button)}),(0,n.Z)(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation();const{specialAttentionList:i}=this.context,{videoList:o,recentVideoList:n,hotVideoList:s}=this.state;new(c())((e,o)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):o()}else o()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},n=>{n?(i.push(t),e(i)):o()}))}).then(e=>{"hot"===this.contentType||"default"===this.contentType?this.setState({specialAttentionList:e,videoList:o.map(t=>(t.isSpecialAttention=e.includes(t.owner.mid),t)),hotVideoList:s.map(t=>(t.isSpecialAttention=e.includes(t.owner.mid),t))}):"recentVideo"===this.contentType&&this.setState({recentVideoList:n.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t))})})}),(0,n.Z)(this,"handleOnClickMoreLiving",()=>{this.props.history.push("/live")}),(0,n.Z)(this,"handleOnClickOpenLive",(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.createTab(t,"direct"===this.context.videoOpenMethod()&&1!==e.button)}),(0,n.Z)(this,"refreshSpecialAttention",()=>{const{specialAttentionList:e}=this.context,{recentVideoList:t}=this.state;this.setState({recentVideoList:t.map(t=>(t.isSpecialAttention=e.includes(t.card.owner.mid),t))})})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"ad",event:"getAds",position:"popupMainHome"},e=>{e&&e.length>0&&this.setState({adMap:e})});const e=C().get("mainHome-config")||{},t=!e||!!e.showLiveBar;this.setState({showLiveBar:t}),t&&this.getLiveList(),this.getHomeData(!1),this.getDynamic(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMoreVideos?e.length&&0!==e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()},{root:this.videoListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:o}=this.context;return i&&t>0?L.createElement(O,{style:{gridColumnEnd:"span "+o}},L.createElement("h4",{className:"topic"},"\u6b63\u5728\u76f4\u64ad",L.createElement("b",null,t),"\u4eba",L.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"\u67e5\u770b\u5168\u90e8")),L.createElement("div",{className:"list"},e.map((e,t)=>L.createElement(B,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.link,t)},L.createElement(w.Image,{className:"user-avatar",url:e.face}),L.createElement("span",{className:"user-name"},e.uname))))):null}renderVideoListTitle(){let e=this.contentType;return L.createElement("div",null,L.createElement(N,{className:"home"===e?"active":null},"\u6700\u8fd1\u6295\u7a3f"),L.createElement(N,{className:"recentVideo"===e?"active":null},"\u9996\u9875\u63a8\u8350"))}renderRecentVideo(e,t){const{columns:i,bilibiliAccount:n}=this.context;if(!e)return"\u6ca1\u6709\u89c6\u9891\u6570\u636e";const s=k.I[this.context.videoCardType];return e.length>0?e.map((e,t)=>{const{desc:i,card:n}=e;return e.isAD?null:L.createElement(s,(0,o.Z)({key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention},n,{owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid),showTag:this.context.showTag}))}):n&&!n.hasLogin?L.createElement("div",{style:{gridColumnEnd:"span "+i}},L.createElement(w.Button,{onClick:()=>this.createTab("https://passport.bilibili.com/login?from=bilibili-helper",!0)},"\u672a\u53d1\u73b0\u5df2\u767b\u5f55\u7684B\u7ad9\u8d26\u53f7\uff0c\u70b9\u51fb\u767b\u5f55")):void 0}renderVideoList(){const{columns:e,hasLogin:t,bhAccount:i}=this.context,{hotVideoList:o,hasMoreVideos:n,recentVideoList:s}=this.state;return L.createElement(E.$,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:L.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},n&&s&&s.length>0?L.createElement(w.Button,{className:"border",onClick:()=>this.getDynamic()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},this.renderRecentVideo(s,n))}render(){return L.createElement(T,{id:"homePage",ref:this.videoListRef},L.createElement(Z,null,this.renderLiveList(),this.renderVideoList()))}}(0,n.Z)(R,"contextType",D.Z);const G=(0,A.EN)(R)}}]);