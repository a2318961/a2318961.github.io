const r="http://bus.wuhancloud.cn:9087/website//web/420100",i=t=>axios.get(`${r}/line/${t}.do?Type=LineDetail`),a=t=>axios.get(`${r}/search.do?keyword=${t}&type=line`),g=t=>axios.get(`${r}/stop/group/${t}.do?stopId=${t}`),c=t=>axios.get(`${r}/search.do?type=stop&keyword=${t} `),l=(t,o)=>{let e;return function(){let n=arguments;e&&clearTimeout(e),e=setTimeout(()=>{t.apply(this,n)},o)}},u=(t,o="YYYY-mm-dd HH:MM:SS")=>{let e;const n={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};for(let s in n)e=new RegExp("("+s+")").exec(o),e&&(o=o.replace(e[1],e[1].length==1?n[s]:n[s].padStart(e[1].length,"0")));return o};export{c as a,a as b,l as d,u as f,i as g,g as s};
