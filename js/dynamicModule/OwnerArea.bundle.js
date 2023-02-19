"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[671],{97689:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var i=a(33385),r=a(24678),n=a(59158),l=a(72457),o=a(30381),s=a.n(o),c=a(67294),p=a(73935),m=a(60677),d=a(42650),g=a(15364);const b=m["default"].div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s;
  backdrop-filter: blur(80px);
  z-index: 33;

  .mask {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: rgb(255 255 255 / 80%);
    z-index: -1;
  }

  @supports not (backdrop-filter: blur(80px)) {
    .mask {
      background-color: rgb(255 255 255);
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: inherit;
  }

  &.columns-1 {
    //width: 400px;
    height: 500px;
  }

  &.columns-2 {
    //width: 800px;
    height: 500px;
  }

  .close-button {
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 50%;
  }

  & > main {
    padding: 12px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--bilibili-gray);

    .mask {
      background-color: rgb(0 0 0 / 88%);
    }

    @supports not (backdrop-filter: blur(80px)) {
      .mask {
        background-color: rgb(31 31 31);
      }
    }
  }
`,u=m["default"].section`
  position: relative;
  padding: 6px;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: background-color .2s, border-color .2s;

  .topic {
    margin: 0 0 4px 0;
    padding: 4px 4px 4px 8px;
    background-color: rgb(255 255 255 / 16%);
    border-radius: 2px;
  }

  &:hover {
    background-color: rgb(255 255 255 / 5%);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(255 255 255 / 2%);
    }

    .topic {
      background-color: rgb(255 255 255 / 8%);
    }
  }
`,h=(0,m["default"])(u)`
  display: flex;

  .avatar {
    position: relative;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border: 3px solid var(--paper-grey-100);
    border-radius: 50%;
    overflow: hidden;


    &:hover {
      .space-anchor {
        opacity: 1;
      }
    }

    .space-anchor {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0 0 0 / 60%);
      color: var(--bilibili-gray);
      opacity: 0;
      transition: opacity .2s;
      cursor: pointer;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 12px;
    font-size: 18px;

    .username-box {
      display: flex;
      flex-wrap: nowrap;
      margin: 0;
      white-space: nowrap;
    }

    .identity-tags {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 0;
      width: fit-content;

      i {
        display: inline-block;
        padding: 0 4px;
        line-height: 20px;
        vertical-align: bottom;
        border-radius: 4px;
        font-style: normal;
        font-size: 12px;
        background-color: rgb(0 0 0 / 10%);
        color: var(--bilibili-gray);
        white-space: nowrap;
        box-sizing: border-box;
        transform: scale(0.9);
        transform-origin: top right;

        &.bilibili-vip {
          background-color: rgb(251 114 153 / 60%);
        }

        &.bilibili-helper-vip {
          background-color: rgb(251 114 153 / 80%);

          .bilibili-helper-2-icon-cat-paw {
            zoom: .8;
            transform: rotate(-35deg);
            margin-right: 6px;
          }
        }
      }
    }

    .level-box {
      width: 40%;

      .level-value {
        display: flex;
        justify-content: space-between;
        font-size: 12px;

        .exp {
          margin-left: auto;
        }
      }

      .level-bar {
        width: 100%;
        height: 2px;
        background-color: rgb(121 121 121 / 50%);

        .current-level-bar {
          height: 100%;
          background-color: var(--bilibili-pink);
        }
      }
    }

    .wallet {
      margin-top: 4px;
      font-size: 12px;

      & > span {
        margin-left: -4px;
        margin-right: 12px;
        padding: 0 4px;
        background-color: transparent;
        transition: background-color .2s;
        cursor: pointer;

        &:last-of-type {
          margin-right: 0;
        }

        &:hover {
          background-color: rgb(255 255 255 / 40%);
        }

        &:active {
          background-color: rgb(255 255 255 / 20%);
        }

        i {
          font-style: normal;
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .avatar {
      border-color: var(--paper-grey-800);
    }

    .info {
      .tags {
        i {
          background-color: rgb(255 255 255 / 10%);
        }
      }

      .wallet {
        & > span {
          &:hover {
            background-color: rgb(255 255 255 / 20%);
          }

          &:active {
            background-color: rgb(255 255 255 / 10%);
          }
        }
      }

      .identity-tags {
        i {
          cursor: pointer;

          &.bilibili-helper-vip {
            background-color: rgb(251 114 153 / 60%);
          }

          &.bilibili-vip {
            background-color: rgb(251 114 153 / 40%);
          }
        }
      }
    }
  }
`,v=(0,m["default"])(u)`
  main {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .task {
      position: relative;
      display: flex;
      flex-grow: 1;
      margin-right: 4px;
      padding: 4px 22px 4px 6px;
      background-color: hsl(0deg 0% 88% / 16%);
      white-space: nowrap;

      &:last-of-type {
        margin-right: 0;
      }

      ::after {
        content: '';
        position: absolute;
        right: 10px;
        bottom: 8px;
        display: block;
        width: 4px;
        height: 4px;
        background-color: var(--paper-grey-400);
        box-shadow: 4px 0 0 0 var(--paper-grey-400), 8px 0 0 0 var(--paper-grey-400),0px -4px 0 0 var(--paper-grey-400);
        transform: rotate(-45deg) scale(0.7);
      }

      &.done {
        ::after {
          background-color: var(--google-green-500);
          box-shadow: 4px 0 0 0 var(--google-green-500), 8px 0 0 0 var(--google-green-500),0px -4px 0 0 var(--google-green-500);
        }
      }

      .sup {
        zoom: 0.75;
        font-style: normal;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      .task {
        background-color: rgb(255 255 255 / 3%);

        ::after {
          background-color: var(--paper-grey-700);
          box-shadow: 4px 0 0 0 var(--paper-grey-700), 8px 0 0 0 var(--paper-grey-700),0px -4px 0 0 var(--paper-grey-700);
        }
      }
    }
  }
`,x=(0,m["default"])(u)`
  main {
    display: flex;
    //justify-content: space-between;

    .section {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-right: 4px;
      padding: 4px 10px 4px 6px;
      width: fit-content;
      background-color: hsl(0deg 0% 88% / 16%);
      cursor: pointer;
      transition: background-color .2s;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        background-color: rgb(255 255 255 / 25%);
      }

      i {
        margin-left: 22px;
        font-style: normal;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      .section {
        background-color: rgb(255 255 255 / 8%);
      }
    }
  }
`;class f extends c.Component{constructor(e){super(e),(0,i.Z)(this,"state",{navData:null,memberData:null,dailyTaskData:null,statisticalData:null,liveSignData:null,privilegeData:null}),(0,i.Z)(this,"hasInitData",!1),(0,i.Z)(this,"getVIPInfo",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({navData:e.data})})}),(0,i.Z)(this,"getMemberInfo",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/account",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({memberData:e.data})})}),(0,i.Z)(this,"getDailyTaskState",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/exp/reward",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({dailyTaskData:e.data})})}),(0,i.Z)(this,"getStatisticalData",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav/stat",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({statisticalData:e.data})})}),(0,i.Z)(this,"getLiveSignStatus",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({liveSignData:e.data})})}),(0,i.Z)(this,"getPrivilegeStatus",()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/vip/privilege/my",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({privilegeData:e.data})})}),(0,i.Z)(this,"openPage",e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}),(0,i.Z)(this,"renderCatIdentities",()=>{const{bhAccount:e}=this.context;return e?e.identities.map(e=>{const t=g.USER_IDENTITIES_NAME_MAP[e.name];return t?c.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:s()(e.to).format("YYYY-MM-DD")+" \u5230\u671f"},c.createElement(r.Icon,{icon:"cat-paw",size:12}),t):null}).filter(Boolean):null}),(0,i.Z)(this,"renderBasicArea",()=>{const{navData:e}=this.state;return e?c.createElement(h,null,(()=>{const{face:t,uname:a,level_info:i,wallet:r,money:n,vipStatus:o,vip_label:s}=e,{current_level:p,next_exp:m,current_exp:d}=i,{text:g}=s,{bcoin_balance:b}=r;return c.createElement(c.Fragment,null,c.createElement("div",{className:"avatar"},c.createElement(l.E,{url:t}),c.createElement("div",{className:"space-anchor",onClick:()=>this.openPage("https://space.bilibili.com/")},"\u4e2a\u4eba\u7a7a\u95f4")),c.createElement("div",{className:"info"},c.createElement("h5",{className:"username-box"},a),c.createElement("span",{className:"identity-tags"},this.renderCatIdentities(),o?c.createElement("i",{className:"bilibili-vip",onClick:()=>this.openPage("https://account.bilibili.com/account/big")},g):null),c.createElement("div",{className:"level-box"},c.createElement("div",{className:"level-value"},"LV",p," ",c.createElement("span",{className:"exp"},d,"/",m)),c.createElement("div",{className:"level-bar"},c.createElement("div",{className:"current-level-bar",style:{width:d/m*100+"%"}}))),c.createElement("div",{className:"wallet"},c.createElement("span",{onClick:()=>this.openPage("https://account.bilibili.com/account/coin")},"\u786c\u5e01: ",c.createElement("i",null,n)),c.createElement("span",{onClick:()=>this.openPage("https://pay.bilibili.com/paywallet-fe/bb_balance.html")},"B\u5e01: ",c.createElement("i",null,b)))))})()):null}),(0,i.Z)(this,"renderStatisticalData",()=>{const{bilibiliAccount:e}=this.context,{statisticalData:t}=this.state,a="https://space.bilibili.com/"+e.uid;return t?c.createElement(x,null,c.createElement("main",null,c.createElement("div",{className:"section",onClick:()=>this.openPage(a+"/fans/follow")},"\u5173\u6ce8",c.createElement("i",null,t.following)),c.createElement("div",{className:"section",onClick:()=>this.openPage(a+"/fans/fans")},"\u7c89\u4e1d",c.createElement("i",null,t.follower)),c.createElement("div",{className:"section",onClick:()=>this.openPage(a+"/dynamic")},"\u52a8\u6001",c.createElement("i",null,t.dynamic_count)))):null}),(0,i.Z)(this,"renderDailyTask",()=>{const{dailyTaskData:e,liveSignData:t,privilegeData:a}=this.state;return c.createElement(c.Fragment,null,c.createElement(v,null,c.createElement("main",null,e?c.createElement(c.Fragment,null,c.createElement("div",{className:["task",e.login?"done":null].join(" ")},"\u6bcf\u65e5\u767b\u5f55"),c.createElement("div",{className:["task",e.watch?"done":null].join(" ")},"\u6bcf\u65e5\u89c2\u770b\u89c6\u9891"),c.createElement("div",{className:["task",50===e.coins?"done":null].join(" ")},"\u6bcf\u65e5\u6295\u5e01\uff08",e.coins,"/50\uff09")):null),c.createElement("main",null,e?c.createElement(c.Fragment,null,c.createElement("div",{className:["task",e.share?"done":null].join(" ")},"\u6bcf\u65e5\u5206\u4eab\u89c6\u9891",c.createElement("i",{className:"sup"},"(\u5ba2\u6237\u7aef)"))):null),c.createElement("main",null,t?c.createElement(c.Fragment,null,c.createElement("div",{className:["task",t.status?"done":null].join(" ")},"\u6bcf\u65e5\u76f4\u64ad\u7b7e\u5230")):null)),c.createElement(v,null,c.createElement("main",null,a&&a.list&&a.list.length>0?c.createElement(c.Fragment,null,c.createElement("div",{className:["task",a.list[0].state?"done":null].join(" ")},"\u5e74\u5ea6\u4e13\u4eabB\u5e01\u5238\u8d60\u9001"),c.createElement("div",{className:["task",a.list[1].state?"done":null].join(" ")},"\u5e74\u5ea6\u4e13\u4eab\u4f1a\u5458\u8d2d\u4f18\u60e0\u5238")):null)))}),this.modalElement=document.createElement("div"),this.modalElement.id="ownerArea",document.getElementById("root").querySelector(".content-wrapper").appendChild(this.modalElement)}componentDidUpdate(e,t,a){e.active||!this.props.active||this.hasInitData||(this.hasInitData=!0,this.getVIPInfo(),this.getMemberInfo(),this.getDailyTaskState(),this.getStatisticalData(),this.getLiveSignStatus(),this.getPrivilegeStatus())}render(){const{columns:e,bilibiliAccount:t}=this.context,{active:a,onClose:i}=this.props;return p.createPortal(c.createElement(b,{className:["owner-modal",a?"show":"hide",1===e?"columns-1":"columns-2"].join(" ")},c.createElement("div",{className:"mask"}),c.createElement("main",null,this.renderBasicArea(),this.renderStatisticalData(),this.renderDailyTask()),c.createElement(n.Button,{className:"close-button",icon:"close",iconSize:20,onClick:i})),this.modalElement)}}(0,i.Z)(f,"contextType",d.Z)}}]);