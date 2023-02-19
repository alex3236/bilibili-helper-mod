"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[891],{1753:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var s=i(69055),n=i(33385),o=i(90487),r=i.n(o),a=i(73473),c=i.n(a),l=i(76873),d=i(67294),p=i(55168),h=i(60677),m=i(42650);const u=h["default"].div.attrs({className:"popup-main-recently-posted"})`
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
`;class g extends d.Component{constructor(e){super(e),(0,n.Z)(this,"currentDidList",new(r())),(0,n.Z)(this,"handleOnClickVideoCover",(e,t,i)=>{e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)}),(0,n.Z)(this,"handleOnClickUserName",(e,t)=>{e.persist(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)}),(0,n.Z)(this,"getDynamic",e=>new(c())(t=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},e=>{if(e){const{cards:i,specialAttentionList:s}=this.state,{hasMore:n,offsetDynamicId:o}=e;e.cards=e.cards.filter(e=>{if(!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0}),i.push(...e.cards),this.setState({hasMore:n,cards:i,offsetDynamicId:o},()=>{t()})}else t()})})),(0,n.Z)(this,"handleOnClickSpecialAttentionBtn",(e,t)=>{e.stopPropagation();const{specialAttentionList:i,cards:s}=this.state;new(c())((e,s)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},n=>{if(n){const n=i.indexOf(t);n>=0?(i.splice(n,1),e(i)):s()}else s()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},n=>{n?(i.push(t),e(i)):s()}))}).then(e=>{let t=s.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t));this.setState({specialAttentionList:e,cards:t})})}),this.state={hasMore:!1,cards:[],offsetDynamicId:0,specialAttentionList:[]},this.listRef=d.createRef(),this.bottomObserverRef=d.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"}),chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},e=>{this.setState({specialAttentionList:e},()=>{this.getDynamic(0).then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore?e.length&&e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})})})}shouldComponentUpdate(e,t,i){return 0!==this.state.cards.length&&this.state.cards.length===t.cards.length}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{cards:e,hasMore:t}=this.state,{columns:i,videoCardType:n}=this.context,o="new"===n?l.VideoClassMap["new"]:l.VideoClassMap.old;return d.createElement(u,{ref:this.listRef},d.createElement("div",{className:"list",style:{gridTemplateColumns:`repeat(${i}, 1fr)`}},e.length>0?e.map((e,t)=>{const{desc:i,card:n}=e;return d.createElement(o,(0,s.Z)({key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention},n,{owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid)}))}):null),d.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?d.createElement(l.Button,{className:"border",onClick:()=>this.getDynamic(this.state.offsetDynamicId)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null))}}(0,n.Z)(g,"contextType",m.Z);const b=(0,p.EN)(g)}}]);