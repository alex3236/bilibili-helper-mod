"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[191],{37:(e,t,o)=>{o.d(t,{$:()=>d});var r=o(69055),n=o(47874),i=o(33385),s=o(67294),a=o(60677);const l=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=a["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,p=a["default"].h4`
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
`;class d extends s.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:o,columns:i,rowGap:a,columnsGap:d,footer:m,sectionRef:u}=e,g=(0,n.Z)(e,l);return s.createElement(c,(0,r.Z)({className:"section",rowGap:a,columnsGap:d,ref:u},g),o?s.createElement(p,{className:"section-title"},o):null,s.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:"span "+i}},t),m)}}(0,i.Z)(d,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},26436:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var r=o(69055),n=o(33385),i=o(90487),s=o.n(i),a=o(76873),l=o(67294),c=o(55168),p=o(60677),d=o(37),m=o(42650);const u=p["default"].div.attrs({className:"popup-main-live"})`
  .topic {
    margin: 0 -10px 6px;
    padding: 4px 0 4px 10px;
    font-size: 12px;
    color: #3B3B3B;
    position: sticky;
    top: -10px;
    z-index: 2;
    background-color: #f4f4f4;
  }

  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 12px;
    grid-row-gap: 8px;
    margin-bottom: 30px;
    padding-bottom: 12px;

    .LazyLoad {
      min-height: 121px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    color: #171717;
    user-select: none;
    //grid-column-end: span 2;
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
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class g extends l.Component{constructor(e){super(e),(0,n.Z)(this,"getFeedList",(e=1,t=10)=>{chrome.runtime.sendMessage({target:"mainLive",event:"getLiveFeedList",pn:e,ps:t},o=>{const{rooms:r,count:n}=o;let{rooms:i,hasMore:s,roomIdList:a}=this.state;r.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)});const l=r.filter(e=>{if(!a.has(e.roomId))return a.add(e.roomId),!0});i.push(...l),i.length>=n&&(s=!1),this.setState({rooms:i,count:n,hasMore:s,pn:e,ps:t})})}),(0,n.Z)(this,"handleOnClickCover",(e,t,o,r)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_live",action:"click_live_card",label:r}),this.context.createTab(e,o)}),(0,n.Z)(this,"handleOnClickUserName",(e,t)=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_live",action:"click_live_card",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)}),this.state={rooms:[],roomIdList:new(s()),count:0,pn:1,ps:10,hasMore:!0},this.listRef=l.createRef(),this.bottomObserverRef=l.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/live"}),this.getFeedList(),this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{if(this.state.hasMore){const{count:t,rooms:o,pn:r,ps:n}=this.state;e.length&&e[0].intersectionRatio&&this.getFeedList(r+1,n)}else t.disconnect()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{rooms:e,count:t,hasMore:o,pn:n,ps:i}=this.state,{columns:s}=this.context;return l.createElement(u,{ref:this.listRef},l.createElement("h6",{className:"topic"},"\u6b63\u5728\u76f4\u64ad (",t,")"),l.createElement(d.$,{columns:s,rowGap:8,columnsGap:12,footer:l.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},o&&e&&e.length>=0?l.createElement(a.Button,{className:"border",onClick:()=>this.getFeedList(n+1,i)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e&&e.length>0?e.map((e,t)=>l.createElement(a.LiveCard,(0,r.Z)({key:e.roomId,onClickUserName:t=>this.handleOnClickUserName(t,e.owner.mid),onClickCover:o=>this.handleOnClickCover(o,e.roomId,e.link,t)},e))):"\u6ca1\u6709\u76f4\u64ad\u4fe1\u606f"))}}(0,n.Z)(g,"contextType",m.Z);const h=(0,c.EN)(g)}}]);