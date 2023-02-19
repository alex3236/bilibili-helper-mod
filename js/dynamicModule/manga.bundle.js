"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[491],{37:(e,t,o)=>{o.d(t,{$:()=>d});var r=o(69055),n=o(47874),i=o(33385),s=o(67294),a=o(60677);const l=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=a["default"].div`
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
`;class d extends s.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:o,columns:i,rowGap:a,columnsGap:d,footer:m,sectionRef:h}=e,b=(0,n.Z)(e,l);return s.createElement(c,(0,r.Z)({className:"section",rowGap:a,columnsGap:d,ref:h},b),o?s.createElement(p,{className:"section-title"},o):null,s.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${i}, 1fr)`,gridColumnEnd:"span "+i}},t),m)}}(0,i.Z)(d,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},73154:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(33385),n=o(73473),i=o.n(n),s=o(8450),a=o.n(s),l=o(76873),c=o(67294),p=o(55168),d=o(60677),m=o(37),h=o(42650);const b=d["default"].div.attrs({className:"popup-main-recently-posted"})`
  .section {
    .section-content {
      padding-bottom: 40px;
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
`,g=d["default"].div`
  cursor: pointer;
  perspective: 1000px;
  transition: transform ease .3s;
  transform: perspective(100px) translateZ(0px);

  :hover {
    transform: perspective(100px) translateZ(5px);

    .cover-image {
      box-shadow: 0 3px 10px rgb(0 0 0 / 60%);
      filter: brightness(1);
    }
  }

  .cover {
    position: relative;
    display: block;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      //background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }
  }

  .cover-image {
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    transition: box-shadow .3s, filter .3s;

    img {
      display: block;
    }
  }

  @media (prefers-color-scheme: dark) {
    .cover-image {
      filter: brightness(0.8);
    }
  }
`;class u extends c.Component{constructor(e){super(e),(0,r.Z)(this,"getList",(e=1)=>{const{ps:t,list:o}=this.state;return new(i())((r,n)=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://manga.bilibili.com/twirp/bookshelf.v1.Bookshelf/ListFavorite?device=pc&platform=web",options:{method:"POST",body:a()({page_num:e,page_size:t,order:1,wait_free:0}),headers:{"content-type":"application/json;charset=UTF-8","bilibili-helper-header-action-set-origin":"https://www.bilibili.com"},contentType:"json"}},({data:i})=>{i&&i.data?(o.push(...i.data),this.setState({pn:e+1,list:o,hasMore:i.data.length===t}),r()):n()})})}),(0,r.Z)(this,"handleOnClickCover",(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_manga",action:"click_video"}),this.context.createTab(e,"https://manga.bilibili.com/detail/mc"+t)}),this.state={list:[],pn:1,ps:9,hasMore:!0},this.listRef=c.createRef(),this.bottomObserverRef=c.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/manga"}),this.getList().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{pn:o,hasMore:r}=this.state;r?e.length&&e[0].intersectionRatio&&this.getList(o):t.disconnect()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{hasMore:e,list:t,pn:o}=this.state,{columns:r,videoCardType:n}=this.context;return c.createElement(b,{ref:this.listRef},c.createElement(m.$,{columns:3,style:{gridColumnEnd:"span 3"},columnsGap:16,rowGap:16,footer:c.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e?c.createElement(l.Button,{className:"border",onClick:()=>this.getList(o)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},t.length>0?t.map(e=>c.createElement(g,{key:e.id},c.createElement("div",{className:"cover",onClick:t=>this.handleOnClickCover(t,e.comic_id),onAuxClick:t=>this.handleOnClickCover(t,e.comic_id)},c.createElement("div",{className:"cover-image"},c.createElement(l.Image,{url:e.vcover+"@242w_252h.webp"}))))):"\u6ca1\u6709\u6570\u636e"))}}(0,r.Z)(u,"contextType",h.Z);const v=(0,p.EN)(u)}}]);