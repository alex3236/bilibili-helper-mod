"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[266],{37:(e,t,i)=>{i.d(t,{$:()=>d});var o=i(69055),n=i(47874),r=i(33385),a=i(67294),l=i(60677);const s=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],c=l["default"].div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,p=l["default"].h4`
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
`;class d extends a.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:r,rowGap:l,columnsGap:d,footer:m,sectionRef:g}=e,b=(0,n.Z)(e,s);return a.createElement(c,(0,o.Z)({className:"section",rowGap:l,columnsGap:d,ref:g},b),i?a.createElement(p,{className:"section-title"},i):null,a.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${r}, 1fr)`,gridColumnEnd:"span "+r}},t),m)}}(0,r.Z)(d,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},60060:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(69055),n=i(33385),r=i(88686),a=i(72457),l=i(67294),s=i(60677),c=i(55168),p=i(37),d=i(42650);const m=e=>["","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"][e],g=s["default"].div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    scrollbar-width: thin;

    .section-content {
      .each-day {
        position: relative;
        margin-left: 2px;
        margin-right: 2px;
        padding-left: 0;
        box-sizing: border-box;
        //width: 190px;
        flex-shrink: 0;
        scroll-snap-align: start;
        //cursor: pointer;

        .topic {
          //position: sticky;
          //left: 0px;
          //display: inline-block;
          //margin-left: -10px;
          //padding-left: 10px;
          position: sticky;
          top: 0;
          height: 28px;
          z-index: 2;
          background-color: #f4f4f4;

          h5 {
            margin: 0 0 0 2px;
            font-size: 16px;
            color: #545454;
            line-height: 30px;
          }
        }

        .seasons {
          display: grid;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          //height: calc(100% - 30px);
          //margin-bottom: 30px;

          &::-webkit-scrollbar-thumb {
            visibility: visible;
          }

          .empty-day {
            margin-bottom: 8px;
            margin-left: 1px;
            font-size: 12px;
            font-weight: bold;
            opacity: 0.6;
          }
        }

        &.is-today {
          padding: 2px 0 6px;
          //border-top: 1px dashed var(--bilibili-pink);
          //border-bottom: 1px dashed var(--bilibili-pink);
          .topic h5 {
            color: var(--bilibili-pink);
          }

          .seasons {
            box-shadow: inset -2px 0 0px 0px var(--bilibili-pink);
            //background-color: rgb(251 114 153 / 0.1);
            //border-radius: 2px;
          }
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .section .section-content .each-day .topic {
      background-color: #1f1f1f;
    }
  }
`,b=s["default"].div`
  display: flex;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .avatar {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    object-fit: cover;
    //cursor: pointer;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      //transition: filter .2s;
    }

    .publish-time {
      position: absolute;
      bottom: 0;
      padding: 2px 3px;
      line-height: 12px;
      border-radius: 0 3px 0 0;
      background-color: rgb(0 0 0 / 60%);
      color: #fff;
      transform-origin: bottom left;
      transform: scale(0.8);
      z-index: 1;
    }
  }

  .info {
    display: inline-block;
    padding-left: 6px;
    width: calc(100% - 60px);
    vertical-align: top;

    h6, p {
      margin: 0;
      line-height: 14px;
      font-size: 12px;
      //cursor: pointer;
    }

    h6 {
      display: -webkit-box;
      max-height: 28px;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      margin-top: 8px;
      color: #666;
    }
  }

  &.follow {
    .avatar img {
      border: 2px solid var(--bilibili-pink);
    }
  }

  &.is-published {
    .info p {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .avatar {
        .img {
          //filter: brightness(1);
        }
      }
    }

    .avatar {
      .img {
        //filter: brightness(.8);
      }
    }

    .info {
      h6 {
        color: #aaa;
      }
    }
  }
`,h=function({square_cover:e,pub_index:t,ep_id:i,pub_time:o,title:n,url:r,follow:s,is_published:c,delay:p,delay_reason:m}){const{createTab:g}=(0,l.useContext)(d.Z),h=l.useCallback(e=>{if(i&&c){const t=`https://www.bilibili.com/bangumi/play/ep${i}/`;g(e,t)}else g(e,r);chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_time_table",action:"click_category_item",label:n})},[r,i]);return l.createElement(b,{className:[s?"follow":"",c?"is-published":null].filter(Boolean).join(" "),onClick:h,onAuxClick:h},l.createElement("div",{className:"avatar"},l.createElement(a.E,{url:e+"@100w_100h.webp",sign:n}),l.createElement("div",{className:"publish-time"},o)),l.createElement("div",{className:"info"},l.createElement("h6",null,n),l.createElement("p",null,p?m:t)))};class u extends l.Component{constructor(e){super(e),(0,n.Z)(this,"getTimelineData",()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimeline"},e=>{e&&this.setState({timeline:e||[]},()=>{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)})})}),(0,n.Z)(this,"getTimelineCNData",()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimelineCN"},e=>{e&&this.setState({timelineCN:e||[]},()=>{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)})})}),(0,n.Z)(this,"handleOnClickTypeButton",e=>{const{type:t,timelineCN:i}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_time_table",action:"click_category",label:e}),this.setState({type:e},()=>{if(0===i.length)this.getTimelineCNData();else{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)}}))}),this.state={type:"global",timeline:[],timelineCN:[]}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/animeTable"}),this.getTimelineData()}render(){const{timeline:e,timelineCN:t,type:i}=this.state,{columns:n}=this.context,a="global"===i?e:t;return l.createElement(g,null,l.createElement("div",{className:"section-btn-group"},l.createElement(r.Button,{className:"global"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("global")},"\u65e5\u756a"),l.createElement(r.Button,{className:"cn"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("cn")},"\u56fd\u521b")),l.createElement(p.$,null,a.map(e=>{const{date:t,day_of_week:i,is_today:r,is_yesterday:a=!1,seasons:s}=e,c=m(i);return l.createElement("div",{key:t,id:r?"todayAnime":"",className:["each-day",r?"is-today":null,a?"is-yesterday":null].filter(Boolean).join(" ")},l.createElement("div",{className:"topic"},l.createElement("h5",null,"\u5468"+c," ",t.split("-").join("\u6708"),"\u65e5")),l.createElement("div",{className:"seasons",style:{gridTemplateColumns:`repeat(${n}, 1fr)`}},s.map(e=>l.createElement(h,(0,o.Z)({key:e.ep_id||e.season_id},e))),0===s.length?l.createElement("div",{className:"empty-day"},"\u5f53\u5929\u6ca1\u6709\u756a\u5267\u653e\u9001"):null))})))}}(0,n.Z)(u,"contextType",d.Z);const f=(0,c.EN)(u)},85437:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var o=i(33385),n=i(73473),r=i.n(n),a=i(88686),l=i(67294),s=i(55168),c=i(60677),p=i(37),d=i(42650);const m=c["default"].div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 40px;
    overflow: auto;

    .section-title {
      top: 28px;
      display: flex;
      width: 100%;

      .more-btn {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .section-content {
      min-height: 200px;
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
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,g=c["default"].div`
  display: flex;
  padding: 4px;
  //height: 58px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //content-visibility: auto;
  //contain-intrinsic-size: 0 58px;

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .cover {
    position: relative;
    flex-shrink: 0;
    border-radius: 2px;

    .img {
      display: block;
      width: 80px;
      //height: 62.5px;
      border-radius: 2px;
      //transition: filter .2s;
    }

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px;
      border-radius: 2px;
      background-color: var(--bilibili-pink);
      color: var(--bilibili-gray);
      zoom: .8;
      //opacity: 0;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 6px;
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      color: var(--paper-grey-900);
      line-height: 14px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .progress {
      margin: 0;
      color: var(--paper-grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;

      &.unwatch {
        color: var(--bilibili-pink);
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .img {
        filter: brightness(1);
      }
    }

    .img {
      filter: brightness(.8);
    }

    .info {
      .title {
        color: var(--bilibili-gray);
      }
    }
  }
`;class b extends l.Component{constructor(e){super(e),(0,o.Z)(this,"state",{type:1,dataList:[{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0}]}),(0,o.Z)(this,"listRef",l.createRef()),(0,o.Z)(this,"bottomObserverRef",l.createRef()),(0,o.Z)(this,"loadDataByType",(e=20)=>new(r())(t=>{const{dataList:i,type:o}=this.state;i[o-1].hasMore&&chrome.runtime.sendMessage({target:"mainAnime",event:"getFeedData",type:o,pn:i[o-1].pn,ps:e},n=>{n?(i[o-1].list.push(...n),i[o-1].pn+=1,n.length<e&&(i[o-1].hasMore=!1),this.setState({dataList:i},()=>t())):t()})})),(0,o.Z)(this,"handleOnClickGoToAnimePage",(e,t,i)=>{const{type:o}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_followed",action:"click_category_item",label:`${o}_${i}`}),this.context.createTab(e,"https://www.bilibili.com/bangumi/play/ss"+t)}),(0,o.Z)(this,"handleOnClickTypeButton",e=>{const{type:t}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_followed",action:"click_category",label:e}),this.setState({type:e}))})}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/subscribed"}),this.loadDataByType().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{dataList:i,type:o}=this.state;i[o-1].hasMore&&e.length&&e[0].intersectionRatio&&this.loadDataByType()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})}render(){const{dataList:e,type:t}=this.state,{columns:i}=this.context;return l.createElement(m,{ref:this.listRef},l.createElement("div",{className:"section-btn-group"},l.createElement(a.Button,{className:1===t?"active":"",onClick:()=>this.handleOnClickTypeButton(1)},"\u65e5\u756a"),l.createElement(a.Button,{className:4===t?"active":"",onClick:()=>this.handleOnClickTypeButton(4)},"\u56fd\u521b"),l.createElement(a.Button,{className:2===t?"active":"",onClick:()=>this.handleOnClickTypeButton(2)},"\u5f71\u89c6"),l.createElement(a.Button,{className:3===t?"active":"",onClick:()=>this.handleOnClickTypeButton(3)},"\u7eaa\u5f55\u7247")),l.createElement(p.$,{columns:i,rowGap:0,columnsGap:4,footer:l.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e[t-1].hasMore&&e[t-1].list.length>0?l.createElement(a.Button,{className:"border",onClick:()=>this.loadDataByType()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e[t-1].list.length>0?e[t-1].list.map((e,t)=>{const{badge:i,title:o,season_id:n,cover:r,new_ep:s,progress:c}=e;return l.createElement(g,{key:t,onClick:e=>this.handleOnClickGoToAnimePage(e,n,t),onAuxClick:e=>this.handleOnClickGoToAnimePage(e,n,t)},l.createElement("div",{className:"cover"},l.createElement(a.Image,{url:s.cover||r}),i?l.createElement("span",{className:"badge"},i):null),l.createElement("div",{className:"info"},l.createElement("p",{className:"title"},o),s?l.createElement("p",{className:["progress",s.is_new>0?"unwatch":""].filter(Boolean).join(" ")},s.index_show):null,c?l.createElement("p",{className:"progress"},c.index_show):null))}):l.createElement("div",{style:{padding:"0 8px"}},"\u6ca1\u6709\u8ba2\u9605\u4fe1\u606f")))}}(0,o.Z)(b,"contextType",d.Z);const h=(0,s.EN)(b)}}]);