import{d as N,a as x}from"./utils.9c2aab6f.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const B={class:"setting-wrap"},w={key:0,class:"search-list"},I={setup(S){const s=Vue.ref(!1),r=Vue.ref(""),p=VueRouter.useRouter(),u=Vue.ref([]),l=Vue.ref([]);let e=null;const c=()=>{e=localStorage.getItem("stationList"),e=JSON.parse(e),e?u.value=e:(localStorage.setItem("stationList",JSON.stringify([])),e=[]),console.log("list",e)};c();const d=N(o=>{if(console.log("handleChange",o),!o||o.length<2){l.value=[];return}x(o).then(t=>{const{stops:a=[]}=t.data.data;l.value=a})},300),v=o=>{if(e.length>=8){vant.Toast(`\u6DFB\u52A0\u5931\u8D25\uFF0C\u7AD9\u53F0\u6700\u591A\u53EA\u80FD\u6DFB\u52A0${8}\u4E2A`);return}if(e.some(a=>a.stopId==o.stopId)){vant.Toast("\u7AD9\u53F0\u5DF2\u5B58\u5728");return}e.push({name:o.stopName,stopId:o.stopId}),i(),vant.Toast("\u6DFB\u52A0\u6210\u529F")},m=o=>{e=e.filter(t=>o.stopId!=t.stopId),vant.Toast("\u5220\u9664\u6210\u529F"),i()},i=()=>{localStorage.setItem("stationList",JSON.stringify(e)),c()},_=()=>{p.back()};return(o,t)=>{const a=Vue.resolveComponent("van-nav-bar"),V=Vue.resolveComponent("van-button"),h=Vue.resolveComponent("van-search"),f=Vue.resolveComponent("van-tag"),k=Vue.resolveComponent("van-overlay"),g=Vue.resolveComponent("van-cell"),C=Vue.resolveComponent("van-swipe-cell");return Vue.openBlock(),Vue.createElementBlock("div",B,[Vue.createVNode(a,{title:"\u7AD9\u53F0\u7BA1\u7406","left-arrow":"",onClickLeft:_}),Vue.createVNode(V,{type:"primary",block:"",text:"\u6DFB\u52A0\u7AD9\u53F0",onClick:t[0]||(t[0]=n=>s.value=!0)}),Vue.createVNode(k,{show:s.value,onClick:t[3]||(t[3]=n=>s.value=!1)},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",{class:"search-box",onClick:t[2]||(t[2]=Vue.withModifiers(()=>{},["stop"]))},[Vue.createVNode(h,{modelValue:r.value,"onUpdate:modelValue":[t[1]||(t[1]=n=>r.value=n),Vue.unref(d)],placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"},null,8,["modelValue","onUpdate:modelValue"]),l.value.length>0?(Vue.openBlock(),Vue.createElementBlock("div",w,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(l.value,n=>(Vue.openBlock(),Vue.createBlock(f,{key:n.stopName,plain:"",size:"medium",type:"primary",onClick:L=>v(n)},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(n.stopName),1)]),_:2},1032,["onClick"]))),128))])):Vue.createCommentVNode("",!0)])]),_:1},8,["show"]),Vue.createElementVNode("div",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u.value,n=>(Vue.openBlock(),Vue.createBlock(C,{key:n.name},{right:Vue.withCtx(()=>[Vue.createVNode(V,{square:"",type:"danger",text:"\u5220\u9664",onClick:L=>m(n)},null,8,["onClick"])]),default:Vue.withCtx(()=>[Vue.createVNode(g,{border:!0,title:n.name},null,8,["title"])]),_:2},1024))),128))])])}}};var T=y(I,[["__scopeId","data-v-40e2f0c6"]]);export{T as default};
