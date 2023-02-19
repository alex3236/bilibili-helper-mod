"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[372],{37:(e,t,i)=>{i.d(t,{$:()=>p});var o=i(69055),n=i(47874),r=i(33385),a=i(67294),l=i(60677);const s=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=l["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,d=l["default"].h4`
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
`;class p extends a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:r,rowGap:l,columnsGap:p,footer:h,sectionRef:m}=e,u=(0,n.Z)(e,s);return a.createElement(c,(0,o.Z)({className:"section",rowGap:l,columnsGap:p,ref:m},u),i?a.createElement(d,{className:"section-title"},i):null,a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${r}, 1fr)`,gridColumnEnd:"span "+r}},t),h)}}(0,r.Z)(p,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},51948:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var o=i(69055),n=i(33385),r=i(76873),a=i(67294),l=i(1216),s=i(60677),c=i(55168),d=i(49967),p=i(42650),h=i(37);const m=s["default"].div.attrs({className:"special-account-block"})`
  padding-top: 10px;
  padding-bottom: 20px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`,u=s["default"].div`
  display: flex;
  padding: 0 0 4px;
  width: 100%;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  .avatar {
    flex-shrink: 0;
    margin-left: 2px;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    max-width: 540px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;
      line-height: 14px;

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

      .living {
        margin-left: 14px;
        vertical-align: bottom;
        color: var(--bilibili-pink);
        zoom: 0.7;
      }
    }

    p {
      margin: 0 0 4px 0;
      overflow: hidden;
      //white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;

      span, a {
        margin-right: 12px
      }
    }

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    i {
      font-style: normal;
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #bbb;
      }
    }
  }
`,b=s["default"].div.attrs({className:"video-area"})`

  .topic {
    margin: 0 0 6px;
    font-weight: bold;
    color: #989898;
    zoom: 0.8;
  }

  .video-list {
    display: flex;
    flex-direction: column;
    width: calc(100% - 6px);
    //height: 147px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .section-title {
      margin: 0 0 4px;
      padding: 0;
    }

    .video-card {
      //margin-right: 6px;
      height: auto;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .more-video-btn {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      line-height: 30px;
      flex-shrink: 0;
      text-align: center;
      //line-height: 75px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;class g extends a.Component{constructor(e){super(e),(0,n.Z)(this,"state",{recentlyVideos:[],pn:1,ps:30,hasMoreVideo:!0}),(0,n.Z)(this,"videoListRef",a.createRef()),(0,n.Z)(this,"bottomObserverRef",a.createRef()),(0,n.Z)(this,"getVideoInfo",e=>{(this.state.hasMoreVideo||e)&&chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountVideoData",uid:this.props.uid,pn:this.state.pn,ps:this.state.ps},e=>{const{recentlyVideos:t,ps:i,pn:o}=this.state;e.page&&(t.push(...e.list),this.setState({recentlyVideos:t,pn:o+1,ps:i,hasMoreVideo:e.page.count/e.page.ps>e.page.pn}))})}),(0,n.Z)(this,"getLiveInfo",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountLiveData",uid:this.props.uid},e=>{this.setState({liveRoomInfo:e})})}),(0,n.Z)(this,"handleOnCreateUserSpaceTab",e=>{this.context.createTab(e,"https://space.bilibili.com/"+this.props.uid,{strict:!1})}),(0,n.Z)(this,"handleOnClickViewMoreVideo",e=>{this.context.createTab(e,`https://space.bilibili.com/${this.props.uid}/video`,{strict:!1})}),(0,n.Z)(this,"handleOnClickLiveRoom",e=>{const{livingData:t}=this.props;this.context.createTab(e,"https://live.bilibili.com/"+t.roomId,{strict:!1})}),(0,n.Z)(this,"handleOnClickVideoCover",(e,t)=>{e.preventDefault(),this.context.createTab(e,"https://www.bilibili.com/video/"+t,{strict:!1})})}componentDidMount(){this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMoreVideo&&e.length&&0!==e[0].intersectionRatio&&this.getVideoInfo()},{root:this.videoListRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}renderRecommendVideoList(){const{recentlyVideos:e}=this.state,t=d.I[this.context.videoCardType];return e&&e.length>0?e.map(({videoInfo:e,userInfo:i})=>a.createElement(t,{key:e.bvid,userInfo:i,videoInfo:e,hideAuthor:!0,showNewTag:!0,onClickCover:t=>this.handleOnClickVideoCover(t,e.bvid),showPublishTime:!0})):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"}render(){const{face:e,username:t,sign:i,level:o,id:n,livingData:l}=this.props,{hasMoreVideo:s}=this.state,{columns:c}=this.context;return a.createElement(m,{id:n,ref:this.videoListRef},a.createElement(u,null,a.createElement("div",{className:"avatar",onClick:this.handleOnCreateUserSpaceTab,onAuxClick:this.handleOnCreateUserSpaceTab},a.createElement(r.Image,{url:e})),a.createElement("div",{className:"info"},a.createElement("h6",null,a.createElement("a",{className:"username",onClick:this.handleOnCreateUserSpaceTab,onAuxClick:this.handleOnCreateUserSpaceTab},t),a.createElement("span",{className:"level lv"+o},"Lv.",o),l&&!!l.living&&a.createElement("a",{className:"living",onClick:this.handleOnClickLiveRoom,onAuxClick:this.handleOnClickLiveRoom},"\u76f4\u64ad\u4e2d...")),a.createElement("p",{title:i},i))),a.createElement(b,null,a.createElement(h.$,{title:"\u6700\u8fd1\u6295\u7a3f",columns:c,rowGap:4,columnsGap:6,className:"video-list",footer:s&&a.createElement("div",{ref:this.bottomObserverRef,className:"more-video-btn",onClick:this.getVideoInfo},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a")},this.renderRecommendVideoList())))}}(0,n.Z)(g,"contextType",p.Z);const x=s["default"].div.attrs({id:"specialAttentionPage",className:"popup-main-special-attention"})`
  display: flex;
  padding: 0 !important;

  .quick-btn-area {
    flex-shrink: 0;
    padding: 4px 0 0 6px;
    width: calc(100% - 8px);
    height: 100%;
    //background-color: #f4f4f4;
    z-index: 3;
    overflow: visible auto;
    box-sizing: border-box;
    pointer-events: none;

    :hover {
      .quick-btn {
        opacity: 1;
      }
    }

    .quick-btn-list {
      display: grid;
      grid-row-gap: 4px;
      justify-content: flex-start;
      margin: -4px;
      padding: 10px 4px 0 2px;
      width: fit-content;
      //height: fit-content;
      max-height: 100%;
      box-sizing: border-box;
      overflow: auto;
      pointer-events: auto;
      scrollbar-width: none;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 100%;
        background-color: rgb(244, 244, 244);
        box-shadow: 0.5px 0 6px 0 #ddd;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .quick-btn {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;

      width: fit-content;
      border-radius: 50px;
      //background-color: #f4f4f4;
      box-sizing: border-box;
      cursor: pointer;
      pointer-events: none;
      width: fit-content;

      opacity: 0.4;
      transition: opacity .2s ease;

      &:hover {
        //background-color: #d0cfcf;

        .cover {
          border-color: #d0cfcf;
        }

        .name {
          display: block;
        }
      }

      &:last-of-type {

      }

      &.active {
        opacity: 1;
      }

      .cover {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        line-height: 25px;
        border: 2px solid transparent;;
        border-radius: 50%;
        overflow: hidden;
        z-index: 1;
        pointer-events: initial;

        &.living {
          border: 2px solid var(--bilibili-pink);

          ::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            box-shadow: inset 0 0px 2px rgb(0 0 0 / 90%);
          }
        }

        .img {
          pointer-events: none;
        }

        .living-tag {
          position: absolute;
          bottom: -12px;
          left: 5px;
          font-weight: bolder;
          color: var(--bilibili-pink);
          text-shadow: 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white;
          zoom: 0.7;
        }

        .bilibili-helper-2-icon-option {
          margin: 6px;
        }
      }

      .name {
        //position: absolute;
        //top: 0;
        //left: calc(100% - 12px);
        display: none;
        margin-left: -14px;
        padding: 2px 8px 2px 18px;
        width: max-content;
        height: 20px;
        line-height: 16px;
        box-sizing: border-box;
        border-radius: 0 15px 15px 0;
        background-color: #e6e6e6;
        word-break: keep-all;
        pointer-events: none;
      }
    }
  }

  .account-block-list {
    flex-grow: 1;
    margin-left: calc(-100% + 46px);
    padding-left: 6px;
    //width: calc(100% - 36px);
    height: 100%;
    overflow: auto;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .quick-btn-area {
      .quick-btn-list {
        &::before {
          background-color: rgb(21 21 21);
          box-shadow: none;
        }
      }

      .quick-btn {
        color: #bbb;

        &:hover {
          .cover {
            border-color: #545454;
          }

        }

        .name {
          background-color: #1d1c1c;
          color: #bbb;
        }
      }
    }
  }
`,f=s["default"].div.attrs({className:"empty-page"})`
  margin: auto;
  padding: 60px 40px;
  height: calc(100% - 120px);
  color: #999999;
  text-align: center;
  overflow: hidden;

  h1 {
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
    margin-bottom: -10px;
    font-size: 16px;
    z-index: 1;

    a {
      font-weight: bold;
      color: #999999;
      cursor: pointer;
    }
  }

  .bilibili-helper-2-iconfont {
    display: block;
    margin: 0 auto 0 50%;
    transform: translate(-50%, 0px);
    color: #E5E5E5;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .bilibili-helper-2-iconfont {
      color: #171717;
    }
  }
`,v=(0,c.EN)(class extends a.Component{constructor(e){super(e),(0,n.Z)(this,"quickButtonMoveoutHandle",null),(0,n.Z)(this,"updateAccountList",()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},(e=[])=>{this.setState({attentionList:e})})}),(0,n.Z)(this,"getLivingList",()=>{chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getFullSimpleLiveList"},(e=[])=>{this.setState({livingList:e})})}),(0,n.Z)(this,"handleOnClickAddAttention",()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",redirect:chrome.runtime.getURL("/html/config.html#/specialAttention"),url:chrome.runtime.getURL("/html/config.html#/specialAttention")})}),(0,n.Z)(this,"handleOnClickQuickBtn",(e,t)=>{const i=document.getElementById("user"+e);this.setState({currentIndex:t}),i&&(i.scrollTop=0)}),(0,n.Z)(this,"handleOnMouseEnterQuickBtnArea",e=>{e.persist(),clearTimeout(this.quickButtonMoveoutHandle)}),(0,n.Z)(this,"handleOnMouseLeaveQuickBtnArea",e=>{e.persist(),clearTimeout(this.quickButtonMoveoutHandle),this.quickButtonMoveoutHandle=setTimeout(()=>{const t=e.target.querySelector(".active");t&&t.scrollIntoView({block:"nearest",behavior:"smooth"})},1e3)}),this.state={attentionList:[],livingList:[],currentIndex:0}}componentDidMount(){this.getLivingList(),this.updateAccountList()}renderEmpty(){return a.createElement(f,null,a.createElement("h1",null,"\u6ca1\u6709\u7279\u522b\u5173\u6ce8\u7684\u4e3b\u64ad\u54e6"),a.createElement("p",null,"\u70b9\u51fb ",a.createElement("a",{onClick:this.handleOnClickAddAttention},"\u8fd9\u91cc")," \u5f00\u59cb\u6dfb\u52a0"),a.createElement(r.Icon,{icon:"cat-tm",size:268}))}renderList(){const{attentionList:e,currentIndex:t,livingList:i}=this.state;return a.createElement(a.Fragment,null,a.createElement("div",{className:"quick-btn-area",onMouseLeave:this.handleOnMouseLeaveQuickBtnArea,onMouseEnter:this.handleOnMouseEnterQuickBtnArea},a.createElement("div",{className:"quick-btn-list"},e&&e.map((e,o)=>{const n=i.find(({owner:t})=>t.mid===e.uid);return a.createElement("div",{key:e.uid,className:["quick-btn",o===t?"active":null].filter(Boolean).join(" "),onClick:()=>this.handleOnClickQuickBtn(e.uid,o)},a.createElement("div",{className:["cover",n&&n.living?"living":""].filter(Boolean).join(" ")},a.createElement(r.Image,{url:e.face})),a.createElement("div",{className:"name"},e.username))}),a.createElement("div",{className:"quick-btn",onClick:this.handleOnClickAddAttention},a.createElement("div",{className:"cover"},a.createElement(r.Icon,{size:16,icon:"option"})),a.createElement("div",{className:"name"},"\u7ba1\u7406\u7279\u5173")))),a.createElement("div",{className:"account-block-list"},e.length>0?a.createElement(a.Fragment,null,a.createElement(l.ZP,{key:e[t].uid,overflow:!0,scrollContainer:"#specialAttentionPage"},a.createElement(g,(0,o.Z)({id:"user"+e[t].uid},e[t],{livingData:i.find(({owner:i})=>i.mid===e[t].uid)})))):"\u6ca1\u6709\u6570\u636e"))}render(){const{attentionList:e}=this.state;return a.createElement(x,null,0===e.length?this.renderEmpty():this.renderList())}})}}]);