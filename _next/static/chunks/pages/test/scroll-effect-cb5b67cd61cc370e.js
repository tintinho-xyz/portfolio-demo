(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{597:function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/scroll-effect",function(){return e(5327)}])},4690:function(i,t){"use strict";t.Z={src:"/_next/static/media/arrow_left.59ecea74.svg",height:60,width:60,blurWidth:0,blurHeight:0}},5222:function(i,t){"use strict";t.Z={src:"/_next/static/media/arrow_right.c73cae1d.svg",height:60,width:60,blurWidth:0,blurHeight:0}},9754:function(i,t){"use strict";t.Z={src:"/_next/static/media/luxal.b4f36120.png",height:2160,width:3840,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgElEQVR42gXAQAqCsP3/M2WSYDFZg7WZw3BiVOJomdSUNpsr6hYgQQQiEkOcbLY8L6W698brpwNrRAnLD6dGDzYIwsdg5a0Xxwas0K6oannpWJqKYm+sq2VbnRWAOKOZYFwswkip1thpfHnnPmAWwXmULGNMeXnttB395L/+/fsDKApkQoyufUEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},2931:function(i,t){"use strict";t.Z={src:"/_next/static/media/walnut.5d81ecf5.png",height:2160,width:3840,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhElEQVR42mPQNzLR0TdS09RQUDZg5FOSlJETFZMVFpFm0DEw0tTVUde21DeLTopP01DT4hOSEhWVYdDUMVRVV9A2DPTyicqMT5CSdREW4RYRlWNQ1dBR09AUkdGLDI83MvFnF9QRFRUTAepQUtVQVNGQU1CUklWSllUUERUTFpUREZUGANIXEs8UbNLtAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},3014:function(i,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(4811);function o(i){let{className:t}=i;return(0,n.tZ)("div",{css:{display:"inline-block",verticalAlign:"super"},className:t,children:(0,n.tZ)("div",{css:{borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"inherit",width:8,height:0,marginRight:8}})})}},7024:function(i,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(4811),o=e(2236),r=e(6486),s=e.n(r),d=e(7294),c=e(3047),l=e(6362),a=l.jU?window:null,h=function(i){return!!i.addEventListener},f=function(i){return!!i.on},u=function(i,t,e,n){void 0===e&&(e=a),(0,d.useEffect)(function(){if(t&&e)return h(e)?(0,l.on)(e,i,t,n):f(e)&&e.on(i,t,n),function(){h(e)?(0,l.S1)(e,i,t,n):f(e)&&e.off(i,t,n)}},[i,t,e,JSON.stringify(n)])};function g(i){var t,e,r,l;let{children:a,config:h={}}=i,f=null!==(t=h.speed)&&void 0!==t?t:1,[g,{height:p}]=(0,c.Z)(),[m,v]=(0,d.useState)(900);u("resize",()=>{v(window.innerHeight)});let Z=(0,d.useMemo)(()=>s().throttle(function(i){let t=i.target.scrollTop;w.start({top:-(t*f)})},10),[f]),[b,w]=(0,o.q_)(()=>({top:0,config:{mass:null!==(e=h.mass)&&void 0!==e?e:1,tension:null!==(r=h.tension)&&void 0!==r?r:170,friction:null!==(l=h.friction)&&void 0!==l?l:26,clamp:!0}}));return(0,n.tZ)("div",{className:"WeightedScrollContainer",css:{width:"100vw",height:"100vh",position:"relative",overflowX:"hidden",overflowY:"auto"},onScroll:Z,children:(0,n.tZ)("div",{css:{width:"100vw",height:Math.max(0,p-m)/f+m,position:"relative"},children:(0,n.tZ)("div",{css:{width:"100vw",height:"100vh",top:0,position:"sticky",overflow:"hidden"},children:(0,n.tZ)(o.a.div,{ref:g,style:b,css:{position:"relative"},children:a})})})})}function p(i){return i.disabled?(0,n.tZ)("div",{css:{width:"100vw",minHeight:"100vh",position:"relative"},children:i.children}):(0,n.tZ)(g,{...i})}},5327:function(i,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var n=e(4811),o=e(2497),r=e.n(o),s=e(3014),d=e(2931),c=e(5675),l=e.n(c);e(9754),e(4690);var a=e(5222),h=e(7024),f=e(7294),u=e(2236);function g(i){let{value:t,onChange:e}=i;return(0,n.tZ)("div",{css:{position:"fixed",left:0,top:0,fontSize:12},className:r().className,children:(0,n.BX)("div",{css:{marginTop:20,marginLeft:20,padding:10,color:"white",backgroundColor:"#272e29",display:"flex",flexDirection:"column",gap:4,boxShadow:"box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"},children:[(0,n.BX)("div",{css:{display:"flex",alignItems:"baseline"},children:[(0,n.tZ)("div",{children:"Scroll Effect Control Panel"}),(0,n.tZ)("div",{css:{flex:"1 1 0"}}),(0,n.BX)("label",{children:["Enable",(0,n.tZ)("input",{type:"checkbox",checked:t.enabled,onChange:i=>e({...t,enabled:i.target.checked})})]})]}),(0,n.tZ)("div",{}),(0,n.BX)("div",{children:["Mass",(0,n.tZ)("input",{type:"number",min:"0.1",max:"10.0",step:"0.1",css:{width:40,fontSize:12},value:t.mass,onChange:i=>e({...t,mass:Number(i.target.value)||1})}),"Tension",(0,n.tZ)("input",{type:"number",min:"1",max:"1000",step:"1",css:{width:50,fontSize:12},value:t.tension,onChange:i=>e({...t,tension:Number(i.target.value)||1})}),"Friction",(0,n.tZ)("input",{type:"number",min:"1",max:"1000",step:"1",css:{width:50,fontSize:12},value:t.friction,onChange:i=>e({...t,friction:Number(i.target.value)||1})})]}),(0,n.BX)("div",{children:[(0,n.tZ)("button",{css:{fontSize:12},onClick:()=>e({...t,...u.vc.default}),children:"default"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12},onClick:()=>e({...t,...u.vc.gentle}),children:"gentle"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12},onClick:()=>e({...t,...u.vc.wobbly}),children:"wobbly"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12},onClick:()=>e({...t,...u.vc.stiff}),children:"stiff"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12},onClick:()=>e({...t,...u.vc.slow}),children:"slow"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12},onClick:()=>e({...t,...u.vc.molasses}),children:"molasses"})]}),(0,n.BX)("div",{children:["Speed",(0,n.tZ)("input",{type:"number",css:{width:60,fontSize:12},min:"0.1",max:"5.0",step:"0.1",value:t.speed,onChange:i=>e({...t,speed:Number(i.target.value)||1})})]}),(0,n.BX)("div",{children:[(0,n.tZ)("button",{css:{fontSize:12,width:30},onClick:i=>e({...t,speed:.25}),children:".25x"}),(0,n.tZ)("button",{css:{fontSize:12,width:30},onClick:i=>e({...t,speed:.5}),children:".5x"}),(0,n.tZ)("button",{css:{fontSize:12,width:30},onClick:i=>e({...t,speed:1}),children:"1x"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12,width:30},onClick:i=>e({...t,speed:2}),children:"2x"}),(0,n.tZ)("button",{css:{marginLeft:2,fontSize:12,width:30},onClick:i=>e({...t,speed:3}),children:"3x"})]}),(0,n.tZ)("div",{children:(0,n.tZ)("button",{css:{fontSize:12,width:60},onClick:i=>e({...t,mass:1,tension:170,friction:26,speed:1}),children:"reset"})})]})})}function p(i){let[t,e]=(0,f.useState)({mass:1,tension:170,friction:26,speed:1,enabled:!0});return(0,n.BX)(h.Z,{config:t,disabled:!t.enabled,children:[(0,n.tZ)(g,{value:t,onChange:e}),(0,n.BX)("div",{className:r().className,css:{display:"flow-root",backgroundColor:"#F5F5F5",minHeight:"100%",color:"#151718"},children:[(0,n.BX)("div",{css:{display:"flow-root",maxWidth:1920,outline:"1px solid red",margin:"0 auto"},children:[(0,n.tZ)("div",{css:{fontSize:68,lineHeight:1,fontWeight:800,letterSpacing:"0.16em",marginTop:300,marginLeft:"16.6%",marginRight:"16.6%"},children:"SCROLL TEST"}),(0,n.BX)("div",{css:{display:"flex",marginTop:100,marginLeft:"16.6%",marginRight:"16.6%"},children:[(0,n.BX)("div",{css:{width:"25%"},children:[(0,n.BX)("div",{css:{fontWeight:500,fontSize:14,lineHeight:1},children:[(0,n.tZ)(s.Z,{}),"Platform"]}),(0,n.tZ)("div",{css:{fontWeight:700,fontSize:18,lineHeight:1,marginLeft:16,marginTop:10},children:"SCROLL TEST"})]}),(0,n.BX)("div",{css:{width:"25%"},children:[(0,n.BX)("div",{css:{fontWeight:500,fontSize:14,lineHeight:1},children:[(0,n.tZ)(s.Z,{}),"Type"]}),(0,n.tZ)("div",{css:{fontWeight:700,fontSize:18,lineHeight:1,marginLeft:16,marginTop:10},children:"SCROLL TEST"})]}),(0,n.BX)("div",{css:{width:"25%"},children:[(0,n.BX)("div",{css:{fontWeight:500,fontSize:14,lineHeight:1},children:[(0,n.tZ)(s.Z,{}),"Year"]}),(0,n.tZ)("div",{css:{fontWeight:700,fontSize:18,lineHeight:1,marginLeft:16,marginTop:10},children:"SCROLL TEST"})]}),(0,n.tZ)("div",{css:{width:"25%"}})]}),(0,n.tZ)("div",{css:{marginTop:100,marginBottom:160,marginLeft:"16.6%",marginRight:"16.6%",fontSize:24,lineHeight:1.5},children:"Walnut is an e-wallet mobile application, a popular application suitable for personal or family use. Users can use it to pay, obtain and use coupons in stores. Through Walnut's account binding function, parents can manage their children's wallet balance, browse their spending records, and stored value."})]}),(0,n.tZ)(l(),{src:d.Z,css:{width:"100%",height:"auto"}}),(0,n.BX)("div",{css:{display:"flow-root",maxWidth:1920,margin:"0 auto"},children:[(0,n.tZ)("div",{css:{height:100}}),(0,n.tZ)("div",{css:{display:"grid",gridTemplateColumns:"1fr 2fr 2fr 1fr"},children:(0,n.BX)("div",{css:{gridColumn:3},children:[(0,n.BX)(m,{children:["Main ",(0,n.tZ)("br",{})," Function"]}),(0,n.tZ)(v,{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"})]})}),(0,n.tZ)("div",{css:{height:140}}),(0,n.tZ)("div",{css:{display:"flex"},children:(0,n.tZ)(b,{})}),(0,n.tZ)("div",{css:{height:220}}),(0,n.tZ)("div",{css:{display:"grid",gridTemplateColumns:"1fr 2fr 2fr 1fr"},children:(0,n.BX)("div",{css:{gridColumn:2},children:[(0,n.BX)(m,{children:["Transaction ",(0,n.tZ)("br",{})," Record"]}),(0,n.tZ)(v,{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"})]})}),(0,n.tZ)(Z,{}),(0,n.BX)("div",{css:{display:"flex",justifyContent:"flex-end"},children:[(0,n.tZ)(w,{}),(0,n.tZ)(x,{})]}),(0,n.tZ)("div",{css:{height:220}}),(0,n.tZ)("div",{css:{display:"grid",gridTemplateColumns:"1fr 2fr 2fr 1fr"},children:(0,n.BX)("div",{css:{gridColumn:3},children:[(0,n.tZ)(m,{children:"Payment"}),(0,n.tZ)(v,{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"})]})}),(0,n.tZ)("div",{css:{height:80}}),(0,n.tZ)("div",{css:{display:"flex",justifyContent:"center"},children:(0,n.tZ)(b,{})}),(0,n.tZ)("div",{css:{height:220}}),(0,n.tZ)("div",{css:{display:"flex"},children:(0,n.tZ)(b,{})}),(0,n.tZ)("div",{css:{height:160}}),(0,n.BX)("div",{css:{maxWidth:700,margin:"0 auto",textAlign:"center"},children:[(0,n.tZ)(m,{children:"Coupons"}),(0,n.tZ)(v,{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"})]}),(0,n.tZ)("div",{css:{height:160}}),(0,n.tZ)("div",{css:{display:"flex",justifyContent:"flex-end"},children:(0,n.tZ)(b,{})}),(0,n.tZ)("div",{css:{height:220}}),(0,n.tZ)("div",{css:{display:"grid",gridTemplateColumns:"1fr 2fr 2fr 1fr"},children:(0,n.BX)("div",{css:{gridColumn:3},children:[(0,n.BX)(m,{children:["Request ",(0,n.tZ)("br",{})," Top-Up"]}),(0,n.tZ)(v,{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"})]})}),(0,n.tZ)(Z,{}),(0,n.BX)("div",{css:{display:"flex"},children:[(0,n.tZ)(x,{}),(0,n.tZ)(w,{})]}),(0,n.tZ)("div",{css:{height:220}})]}),(0,n.tZ)("div",{css:{backgroundColor:"#1D1F27",color:"white",display:"grid",gridTemplateColumns:"1fr 4fr 1fr"},children:(0,n.BX)("div",{css:{gridColumn:2,padding:"220px 0"},children:[(0,n.BX)("div",{css:{fontSize:80,fontWeight:800,lineHeight:1.56},children:["APP ICON",(0,n.tZ)("br",{}),"DESIGN"]}),(0,n.BX)("div",{css:{display:"flex",marginTop:160},children:[(0,n.BX)("div",{css:{flex:"none",width:"50%",display:"flex",flexDirection:"column",alignItems:"center",gap:170},children:[(0,n.tZ)("div",{css:{backgroundColor:"#ba8fff",flex:"none",width:210,height:210}}),(0,n.tZ)("div",{css:{backgroundColor:"#ba8fff",flex:"none",width:210,height:210}})]}),(0,n.BX)("div",{css:{flex:"none",width:"50%"},children:[(0,n.tZ)("div",{css:{height:60}}),(0,n.tZ)("div",{css:{fontSize:56,fontWeight:800},children:"Concept"}),(0,n.tZ)("div",{css:{height:57}}),(0,n.tZ)("div",{css:{fontSize:15,fontWeight:400,maxWidth:570},children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"}),(0,n.tZ)("div",{css:{height:20}}),(0,n.tZ)("div",{css:{fontSize:15,fontWeight:400,maxWidth:570},children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetu"})]})]})]})}),(0,n.BX)("div",{css:{display:"flex"},children:[(0,n.tZ)("div",{css:{width:"50%"}}),(0,n.BX)("div",{css:{width:"50%",position:"relative",height:250,color:"white"},children:[(0,n.BX)("div",{css:{position:"absolute",inset:0},children:[(0,n.tZ)(l(),{src:d.Z,fill:!0,css:{objectFit:"cover"}}),(0,n.tZ)("div",{css:{position:"absolute",inset:0,backgroundColor:"#202225E5"}})]}),(0,n.BX)("div",{css:{maxWidth:960,height:"100%",marginRight:"auto",paddingRight:153,position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[(0,n.BX)("div",{css:{textAlign:"right"},children:[(0,n.tZ)("div",{css:{fontSize:14,lineHeight:1},children:"Next"}),(0,n.tZ)("div",{css:{marginTop:8,fontSize:40,lineHeight:1,fontWeight:800,letterSpacing:"0.16em"},children:"RARECRAFT"})]}),(0,n.tZ)(l(),{src:a.Z,width:60,height:60})]})]})]})]})]})}function m(i){let{children:t}=i;return(0,n.tZ)("div",{css:{fontSize:56,"@media (max-width: 480px)":{fontSize:38},fontWeight:800,marginBottom:32,lineHeight:1.2},children:t})}function v(i){let{children:t}=i;return(0,n.tZ)("div",{css:{fontSize:15,fontWeight:400,lineHeight:1.75},children:t})}function Z(i){return(0,n.tZ)("div",{css:{height:0,marginTop:-60,"@media (max-width: 1080px)":{height:80,marginTop:0}}})}function b(i){return(0,n.tZ)("div",{css:{backgroundColor:"#ba8fff",flex:"none",width:860,height:570,"@media (max-width: 1080px)":{width:630,height:417},"@media (max-width: 768px)":{width:513,height:340},"@media (max-width: 480px)":{width:340,height:255}}})}function w(i){return(0,n.tZ)("div",{css:{backgroundColor:"#ba8fff",flex:"none",width:530,height:800,"@media (max-width: 1080px)":{width:470,height:710},"@media (max-width: 768px)":{width:420,height:635},"@media (max-width: 480px)":{width:438,height:290}}})}function x(i){return(0,n.tZ)("div",{css:{width:"calc(max(0px, min(200px, (100vw - 1080px) * 0.238)))"}})}},2497:function(i){i.exports={style:{fontFamily:"'__visby_5c0b95', '__visby_Fallback_5c0b95'"},className:"__className_5c0b95"}},6362:function(i,t,e){"use strict";e.d(t,{S1:function(){return r},ZT:function(){return n},jU:function(){return s},on:function(){return o}});var n=function(){};function o(i){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];i&&i.addEventListener&&i.addEventListener.apply(i,t)}function r(i){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];i&&i.removeEventListener&&i.removeEventListener.apply(i,t)}var s="undefined"!=typeof window},3047:function(i,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(7294),o=e(6362),r=o.jU?n.useLayoutEffect:n.useEffect,s={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},d=o.jU&&void 0!==window.ResizeObserver?function(){var i=(0,n.useState)(null),t=i[0],e=i[1],o=(0,n.useState)(s),d=o[0],c=o[1],l=(0,n.useMemo)(function(){return new window.ResizeObserver(function(i){if(i[0]){var t=i[0].contentRect;c({x:t.x,y:t.y,width:t.width,height:t.height,top:t.top,left:t.left,bottom:t.bottom,right:t.right})}})},[]);return r(function(){if(t)return l.observe(t),function(){l.disconnect()}},[t]),[e,d]}:function(){return[o.ZT,s]}}},function(i){i.O(0,[662,811,675,236,774,888,179],function(){return i(i.s=597)}),_N_E=i.O()}]);