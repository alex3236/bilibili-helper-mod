"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[317],{37:(e,t,o)=>{o.d(t,{$:()=>d});var n=o(69055),i=o(47874),r=o(33385),a=o(67294),s=o(60677);const l=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=s["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,p=s["default"].h4`
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
`;class d extends a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:o,columns:r,rowGap:s,columnsGap:d,footer:m,sectionRef:u}=e,g=(0,i.Z)(e,l);return a.createElement(c,(0,n.Z)({className:"section",rowGap:s,columnsGap:d,ref:u},g),o?a.createElement(p,{className:"section-title"},o):null,a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${r}, 1fr)`,gridColumnEnd:"span "+r}},t),m)}}(0,r.Z)(d,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},84281:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(33385),i=o(49967),r=o(67294),a=o(55168),s=o(60677),l=o(37),c=o(42650);const p=s["default"].div.attrs({className:"popup-main-recently-posted"})`
  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;

    .LazyLoad {
      min-height: 149px;
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
`;class d extends r.Component{constructor(e){super(e),(0,n.Z)(this,"getWatchLaterList",()=>{chrome.runtime.sendMessage({target:"watchLater",event:"getList"},e=>{e&&(e.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.userInfo.uid)}),this.setState({cards:e}))})}),(0,n.Z)(this,"handleOnClickVideoCover",(e,t,o)=>{e.stopPropagation(),e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:o}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)}),(0,n.Z)(this,"handleOnClickUserName",(e,t)=>{e.preventDefault(),e.stopPropagation(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)}),this.state={cards:[]}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/watchLater"}),this.getWatchLaterList()}render(){const{cards:e}=this.state,{columns:t,videoCardType:o}=this.context,n=i.I[o];return r.createElement(p,null,r.createElement(l.$,{columns:t,style:{gridColumnEnd:"span "+t,marginBottom:"40px"}},e.length>0?e.map((e,t)=>{const{videoInfo:o,userInfo:i}=e;return r.createElement(n,{key:o.bvid,showWatcherLaterButton:!1,showRemoveWatcherLaterButton:!0,isSpecialAttention:e.isSpecialAttention,userInfo:i,videoInfo:o,onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,o.bvid,t)})}):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"))}}(0,n.Z)(d,"contextType",c.Z);const m=(0,a.EN)(d)}}]);