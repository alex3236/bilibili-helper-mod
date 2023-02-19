"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[27],{37:(e,t,i)=>{i.d(t,{$:()=>p});var o=i(69055),n=i(47874),s=i(33385),r=i(67294),a=i(60677);const c=["children","title","columns","rowGap","columnsGap","footer","sectionRef"],l=a["default"].div`
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
`;class p extends r.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:s,rowGap:a,columnsGap:p,footer:m,sectionRef:u}=e,g=(0,n.Z)(e,c);return r.createElement(l,(0,o.Z)({className:"section",rowGap:a,columnsGap:p,ref:u},g),i?r.createElement(d,{className:"section-title"},i):null,r.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${s}, 1fr)`,gridColumnEnd:"span "+s}},t),m)}}(0,s.Z)(p,"defaultProps",{columns:1,rowGap:2,columnsGap:2})},21151:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var o=i(33385),n=i(90487),s=i.n(n),r=i(73473),a=i.n(r),c=i(76873),l=i(67294),d=i(55168),p=i(60677),m=i(15558),u=i(25498),g=i(42650),h=i(37),b=i(84564),v=i.n(b),f=i(58971),y=i.n(f);const x=p["default"].div.attrs({className:"popup-main-recommend"})`
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
`,w=y().get("accessKeyForGetRecommendVideo");class k extends l.Component{constructor(e){super(e),(0,o.Z)(this,"currentCidList",new(s())),(0,o.Z)(this,"getAccessConfirmUrl",()=>new(a())(e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://passport.bilibili.com/login/app/third?appkey=27eb53fc9058f8c3&api=https://www.mcbbs.net/template/mcbbs/image/special_photo_bg.png&sign=04224646d1fea004e79606d3b038c84a",options:{contentType:"json"}},({data:t})=>{e(t?t.data.confirm_uri:null)})})),(0,o.Z)(this,"getAccessKey",e=>new(a())(t=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:e},(e={})=>{const{data:i}=e;if(i){const e=new(v())(i.url,!0);e.query&&e.query.access_key&&(y().set("accessKeyForGetRecommendVideo",e.query.access_key),t(e.query.access_key))}t()})})),(0,o.Z)(this,"handleOnClickVideoCover",(e,t,i)=>{e.stopPropagation(),e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recommed",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/av"+t)}),(0,o.Z)(this,"getVideoList",()=>new(a())(e=>{this.state.loading?e(!1):this.setState({loading:!0}),chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://app.bilibili.com/x/feed/index?build=1&access_key="+this.state.accessKey,options:{contentType:"json"}},({data:t})=>{if(setTimeout(()=>{this.state.loading&&this.setState({loading:!1})},1e3),t&&t.data&&t.data.length>0){const{videoList:i,specialAttentionList:o}=this.state;t.data=t.data.map(e=>!this.currentCidList.has(e.cid)&&(this.currentCidList.add(e.cid),{isSpecialAttention:o.includes(e.mid),videoInfo:{aid:+e.param,cid:+e.cid,bvid:(0,u.av2bv)(+e.cid),cover:e.cover,duration:(0,m.TD)(1e3*e.duration),title:e.title,publishDate:(0,m.S1)(1e3*e.ctime),tagName:e.tname},userInfo:{uid:+e.mid,name:e.name,face:e.face}})).filter(Boolean),i.push(...t.data),this.setState({videoList:i,loading:!1},()=>e())}else e()})})),(0,o.Z)(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation(),e.preventDefault();const{specialAttentionList:i,videoList:o}=this.state;new(a())((e,o)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recommend",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):o()}else o()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recommend",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},n=>{n?(i.push(t),e(i)):o()}))}).then(e=>{let t=o.map(t=>(t.isSpecialAttention=e.includes(t.userInfo.uid),t));this.setState({specialAttentionList:e,videoList:t})}).catch(e=>{})}),this.state={videoList:[],specialAttentionList:[],loading:!1,accessKey:w||""},this.listRef=l.createRef(),this.bottomObserverRef=l.createRef()}componentDidMount(){new(a())(e=>{this.state.accessKey?e():this.getAccessConfirmUrl().then(this.getAccessKey).then(e)}).then(()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},e=>{this.setState({specialAttentionList:e},()=>{this.getVideoList().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{!this.state.loading&&e.length&&e[0].intersectionRatio&&this.getVideoList()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})})})})}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{videoList:e}=this.state,{columns:t,videoCardType:i}=this.context,o=c.VideoClassMap[i];return l.createElement(x,{ref:this.listRef},l.createElement(h.$,{columns:t,rowGap:6,columnsGap:6,footer:l.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},l.createElement(c.Button,{className:"border",onClick:()=>this.getVideoList()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"))},e.map((e,t)=>l.createElement(o,{key:e.videoInfo.cid,isSpecialAttention:e.isSpecialAttention,videoInfo:e.videoInfo,userInfo:e.userInfo,onClickCover:i=>this.handleOnClickVideoCover(i,e.videoInfo.aid,t),onClickFollowBtn:t=>this.handleOnClickSpecialAttentionBtn(t,e.userInfo.uid),showTag:this.context.showTag}))))}}(0,o.Z)(k,"contextType",g.Z);const A=(0,d.EN)(k)}}]);