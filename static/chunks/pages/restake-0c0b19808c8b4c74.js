(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6845],{75111:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restake",function(){return n(42309)}])},30734:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893),r=n(82140),s=n(48948),a=n(32735),l=e=>{let{inputRightElement:t,value:n,onChange:l,error:o,disabled:c=!1}=e;return(0,i.jsxs)(r.B,{size:"lg",mt:"12px",children:[(0,i.jsx)(s.I,{type:"text",variant:"unstyled",placeholder:"0.0",borderRadius:"1rem",bg:"backgroundField",border:"1px solid",p:"24px",h:"96px",color:"textPrimary",fontWeight:"700",fontSize:"32px",lineHeight:"38px",value:n,isInvalid:!!o,onChange:e=>null==l?void 0:l(e.target.value),borderColor:o?"error":"backgroundDivider",_placeholder:{color:"textTertiary"},disabled:c}),t&&(0,i.jsx)(a.x,{my:"auto",h:"100%",mr:"1.5rem",w:"auto",children:t})]})}},14035:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893),r=n(32568),s=n(67294),a=n(8193),l=e=>{let{label:t}=e,[n,l]=(0,s.useState)(!1);return(0,i.jsx)(r.u,{label:t,isOpen:n,closeDelay:2e3,onClose:()=>l(!1),pointerEvents:"all",color:"textSecondary",fontSize:"12px",bg:"backgroundCard",p:"8px",borderRadius:"8px",children:(0,i.jsx)("span",{children:(0,i.jsx)(a.ocf,{onMouseEnter:()=>l(!0),onClick:()=>l(!0)})})})}},83e3:function(e,t,n){"use strict";n.d(t,{P:function(){return s}});var i=n(19011),r=n(10777);function s(){return(0,r.a)({queryKey:["el-merkle-root"],queryFn:async()=>(await (0,i.J9)()).data})}},53209:function(e,t,n){"use strict";var i=n(28273),r=n(67294);t.Z=()=>{let{pageData:e}=(0,r.useContext)(i.z);return e}},42309:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return eV},default:function(){return eq}});var i=n(85893),r=n(9008),s=n.n(r),a=n(67294),l=n(28273),o=n(4627),c=n(30508),d=n(46697),x=n(18618),u=n(27239),p=n(71293),h=n(93717),m=n(70959),g=n(44461),f=n(24124),j=n(84028),b=n(90889),k=n(25675),v=n.n(k),y=n(57747),w=n(49289),S=n(83230),E=n(32883),C=n(58089),T=n(32871),R=n(78001),D=e=>{let{isOpen:t,closeModal:n}=e;return(0,i.jsx)(T.Z,{isOpen:t,closeAlert:()=>n(),contentProps:{p:{base:"0rem 1rem 2.5rem",md:"2.5rem 2rem"}},children:(0,i.jsxs)(h.k,{flexDir:"column",gap:{base:"32px",md:"40px"},w:"100%",children:[(0,i.jsxs)(h.k,{justifyContent:"space-between",h:{md:"24px"},flexDir:{base:"column-reverse",md:"row"},children:[(0,i.jsx)(p.x,{w:"100%",color:"textPrimary",fontSize:{base:"20px",md:"24px"},fontWeight:"600",mt:{base:"-22px",md:"auto"},children:"Safe and Secure"}),(0,i.jsx)(C.Z,{onClose:n})]}),(0,i.jsx)(h.k,{justifyContent:{base:"center",md:"space-between"},flexDir:{base:"column",md:"row"},gap:"32px",alignItems:{base:"flex-start"},children:R.Ke.map(e=>(0,i.jsxs)(h.k,{flexDir:{base:"row",md:"column"},gap:"6px",w:{base:"100%",md:"224px"},justifyContent:"space-between",alignItems:{base:"center",md:"flex-start"},children:[(0,i.jsx)(y.xu,{width:"114px",height:"32px",pos:"relative",children:(0,i.jsx)(v(),{src:e.imgLink,alt:e.key,layout:"fill",objectFit:"contain"})}),(0,i.jsx)(E.r,{href:"".concat(e.link),target:"_blank",rel:"noreferrer",borderBottom:"1px dotted",_hover:{textDecor:"none"},w:"fit-content",children:(0,i.jsx)(p.x,{p:"4px 0",fontSize:"12px",fontWeight:"500",lineHeight:"130%",children:"Get full report ↗"})})]},e.key))})]})})},L=n(14035),z=e=>{var t,n;let{tvl:r,restakeApy:s}=e,[l,o]=(0,a.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(h.k,{direction:"column",align:"stretch",justifyContent:"space-between",p:{base:"16px 0",md:0},width:"100%",gap:"16px",children:[(0,i.jsxs)(h.k,{flexDir:"row",gap:"12px",alignItems:"center",children:[(0,i.jsx)(p.x,{fontSize:{base:"18px",md:"32px"},lineHeight:{base:"20px",md:"38px"},fontWeight:"600",color:"textPrimary",children:"Restake"}),(0,i.jsxs)(h.k,{p:{base:"2px 4px",md:"4px 6px"},gap:"4px",alignItems:"center",borderRadius:"8px",cursor:"pointer",border:"1px solid",borderColor:"backgroundDivider",height:"32px",onClick:()=>o(!0),w:"fit-content",children:[(0,i.jsx)(v(),{height:16,width:16,src:"/assets/verified_user.svg",alt:"verified"}),(0,i.jsx)(p.x,{color:"textPrimary",fontWeight:"400",fontSize:"12px",lineHeight:"20px",children:"Audited"})]})]}),(0,i.jsxs)(h.k,{direction:"column",gap:"8px",fontSize:{base:"12px",md:"14px"},fontWeight:"600",children:[(0,i.jsxs)(h.k,{justifyContent:"space-between",children:[(0,i.jsxs)(h.k,{alignItems:"center",gap:"4px",children:[(0,i.jsx)(p.x,{children:"APY"}),(0,i.jsx)(L.Z,{label:(0,i.jsx)(y.xu,{children:"30-day moving average"})})]}),(0,i.jsx)(p.x,{children:s.data?"".concat(s.data.value,"%"):"-"})]}),(0,i.jsxs)(h.k,{justifyContent:"space-between",children:[(0,i.jsx)(h.k,{alignItems:"center",gap:"4px",children:(0,i.jsx)(p.x,{children:"Total Value Locked"})}),(0,i.jsx)(p.x,{children:(0,i.jsxs)(h.k,{gap:"6px",alignItems:"center",justifyContent:"center",children:[(0,i.jsxs)(h.k,{gap:"4px",alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(p.x,{children:(null===(t=r.tvl)||void 0===t?void 0:t.value)?(0,S.uf)(r.tvl.value,!1,2):"-"}),(0,i.jsx)(p.x,{children:"ETH"})]}),(0,i.jsx)(w.i,{orientation:"vertical",borderColor:"textTertiary",borderWidth:"1px",height:"8px"}),(0,i.jsx)(p.x,{fontWeight:"500",children:(null===(n=r.tvl)||void 0===n?void 0:n.value)?"$".concat((0,S.uf)(r.tvl.usdTvl)):"-"})]})})]})]})]}),(0,i.jsx)(D,{isOpen:l,closeModal:()=>o(!1)})]})},P=n(19011),W=n(20244),Z=n(43337),I=n(9473),H=()=>{let e=(0,W.Z)(15e4),{selectedERC20:t}=(0,I.v9)(e=>e.user),[n,i]=(0,a.useState)({exchangeRate:void 0,isLoading:!0}),r=(0,a.useCallback)(async()=>{var e;let n=await (0,P.fc)(t);i({exchangeRate:null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.value,isLoading:!1})},[t]);return(0,a.useEffect)(()=>{r()},[r]),(0,Z.Z)(()=>{e||r()},1e4),n},M=()=>{let e=(0,W.Z)(15e4),[t,n]=(0,a.useState)({tvl:void 0,isLoading:!0}),i=(0,a.useCallback)(async()=>{n({tvl:(await (0,P.QD)()).data,isLoading:!1})},[]);return(0,a.useEffect)(()=>{i()},[i]),(0,Z.Z)(()=>{e||i()},1e4),t},N=n(14225),A=n(92321),F=n(17679),_=n(89469),O=n(52314),K=e=>{let{error:t,isOpen:n,token:r,isTxnProcessing:s=!1,onCancel:a}=e;return(0,i.jsx)(T.Z,{isOpen:n,closeAlert:a,children:(0,i.jsxs)(u.M,{padding:{base:"0 1rem 2.5rem",md:"2.5rem 3rem"},fontWeight:"600",flexDirection:"column",children:[(0,i.jsx)(C.Z,{onClose:a}),s?(0,i.jsx)(O.Z,{isSpinnerRequired:!0,modalTitle:"Please check your wallet"}):t?(0,i.jsx)(O.Z,{transactionType:R.iU.ERROR,modalTitle:t||"Failed adding ".concat(r," to your wallet")}):(0,i.jsx)(O.Z,{transactionType:R.iU.SUCCESS,modalTitle:"Confirmed",modalSubTitle:"".concat(r," successfully added to your wallet")})]})})},B=n(36227),V=n(37241),q=()=>{let[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),{config:o}=(0,V.Z)(),{data:c}=(0,_.p)(),d=async()=>{if(c){l(!0),r(!0),(0,S.L9)(B.hE);try{await c.watchAsset({type:"ERC20",options:{address:o.xtoken.address,symbol:o.xtoken.symbol,decimals:o.xtoken.decimals}})}catch(e){e instanceof Error||(null==e?void 0:e.message)?t(e.message):t("Error Adding rsETH")}finally{l(!1)}}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(N.z,{variant:"outline",size:"sm",border:"1px",borderRadius:"6px",borderColor:"textPrimary",fontSize:"10px",fontWeight:"500",ml:"8px",h:"24px",p:"4px 16px",onClick:d,color:"textPrimary",children:["Add ",o.xtoken.symbol]}),n&&(0,i.jsx)(K,{isOpen:n,onCancel:()=>{r(!1),t("")},error:e,isTxnProcessing:s,token:o.xtoken.symbol})]})},G=n(66712),U=n(91170),J=n(4040),Q=n(62658),Y=n(78230),X=n(8371),$=n(70231),ee=n(8074),et=n(13821),en=n(53209),ei=e=>{var t,n;let{token:r,...s}=e,{isEthereumChain:a}=(0,et.Z)(),{config:l}=(0,V.Z)(),{availableTags:o,tokenTagMapping:c}=(0,en.Z)(),d=null===(n=c[1].find(e=>e.Token===r))||void 0===n?void 0:null===(t=n.Tags)||void 0===t?void 0:t.split(",").map(e=>e.trim());if(!d)return null;if(!a){let e=r===ee.hB?l.nativeToken:l.tokens[r];if(!e)return;e.tags.filter(e=>!d.includes(ee.p3[e].title)).forEach(e=>{d.push(ee.p3[e].title)})}let x=d.map(e=>{let t=o[1].find(t=>t.Tag===e);return t?(0,i.jsx)(X.Vp,{bg:t.Color,color:"white",fontSize:"12px",fontWeight:"400",letterSpacing:"normal",children:e},e):null});return(0,i.jsx)(h.k,{gap:2,justifyContent:"flex-end",flexWrap:"wrap",...s,children:x})},er=n(5139);let es={p:"6px 8px",borderRadius:"6px",fontSize:"14px",fontWeight:"400"},ea={...es,bg:"#F5F5F7",color:"#142528",fontWeight:"600",lineHeight:"20px",letterSpacing:"-0.70px"};var el=()=>{let{selectedERC20:e}=(0,I.v9)(e=>e.user),{chain:t}=(0,et.Z)(),n=(0,I.I0)();return(0,i.jsxs)(y.xu,{w:"100%",mb:"2.5rem",children:[(0,i.jsx)(p.x,{mb:"12px",children:"Select the asset"}),(0,i.jsxs)(G.v,{children:[(0,i.jsx)(U.j,{as:N.z,rightIcon:(0,i.jsx)($.RiI,{}),w:"100%",textAlign:"left",className:"menuButtonStake",p:{base:"16px",md:"16px 16px 16px 24px"},h:"auto",borderRadius:"16px",bg:"#E4F8F8",color:"textPrimary",_hover:{bg:"#E4F8F8"},_active:{bg:"#E4F8F8"},fontWeight:"500",fontSize:{base:"14px",md:"18px"},letterSpacing:"-0.70px",children:(0,i.jsxs)(h.k,{alignItems:"center",gap:"8px",children:[R.KR[e]&&(0,i.jsx)(v(),{width:24,height:24,alt:"lst",src:R.KR[e]}),(0,i.jsxs)(h.k,{alignItems:"center",justify:"space-between",flex:1,gap:2,children:[(0,i.jsx)(y.xu,{flex:1,children:e}),(0,i.jsx)(ei,{token:e})]})]})}),(0,i.jsx)(J.q,{transformOrigin:"top !important",w:{base:"340px",sm:"100%"},p:"8px",border:"1px solid #AEDFCA",bg:"backgroundCard",fontSize:"14px",fontWeight:"400",children:(0,R.Ab)(t.id).map((t,r)=>{if("divider"===t.key)return(0,i.jsx)(Q.R,{my:"12px"},r);{let s=t.key===e?{...ea}:{...es};return(0,a.createElement)(Y.s,{...s,isDisabled:t.isDisabled,_disabled:{cursor:"not-allowed",color:"textTertiary"},padding:2,marginBottom:1,key:r,onClick:()=>{n((0,er.Al)({selectedERC20:t.key}))}},(0,i.jsxs)(h.k,{justifyContent:"space-between",w:"100%",alignItems:"center",children:[(0,i.jsxs)(h.k,{alignItems:"center",gap:"8px",flex:1,children:[R.KR[t.key]&&(0,i.jsx)(v(),{width:24,height:24,alt:"lst",src:R.KR[t.key]}),(0,i.jsxs)(h.k,{justify:"space-between",flex:1,alignItems:"center",gap:2,children:[(0,i.jsx)(y.xu,{flex:1,fontSize:18,children:t.title}),(0,i.jsx)(ei,{token:t.key,maxW:"100%"})]})]}),t.tag&&(0,i.jsx)(X.Vp,{bg:"backgroundCanvas",color:"textTertiary",fontWeight:"600",fontSize:"10px",p:"2px 4px",borderRadius:"4px",lineHeight:"12px",letterSpacing:"0.4px",children:t.tag})]}))}})})]})]})},eo=n(65040),ec=e=>{let{poolData:t}=e,n=(0,a.useMemo)(()=>t.usedValue?100*t.usedValue/t.poolLimit:0,[t]),{selectedERC20:r}=(0,I.v9)(e=>e.user);return(0,i.jsx)(i.Fragment,{children:t.poolLimit?(0,i.jsxs)(h.k,{flexDir:"column",gap:"8px",py:{base:"8px",md:"24px"},alignItems:"flex-start",width:"100%",mt:{base:"32px",md:"24px"},children:[(0,i.jsxs)(h.k,{justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,i.jsx)(h.k,{gap:"8px",children:(0,i.jsx)(p.x,{color:"textPrimary",fontWeight:"500",fontSize:"14px",lineHeight:"24px",children:"Restaking limit"})}),(0,i.jsxs)(p.x,{color:"textSecondary",fontWeight:"400",fontSize:"12px",lineHeight:"18px",children:[(0,i.jsxs)("span",{children:[(0,S.uf)(t.usedValue,!1,2)," / "]}),(0,i.jsxs)("span",{children:[(0,S.fe)(t.poolLimit.toString())," ",r]})]})]}),(0,i.jsx)(eo.E,{bg:"backgroundCanvas",value:n,size:"xs",color:"accent1",borderRadius:"8px",width:"100%",opacity:"0.4",height:"8px"})]}):null})},ed=n(30734),ex=e=>{let{tokenAmount:t,isConnected:n,onClick:r}=e,{selectedERC20:s}=(0,I.v9)(e=>e.user);return(0,i.jsxs)(h.k,{flexDir:"column",alignItems:"flex-end",children:[(0,i.jsx)(N.z,{bg:"backgroundDivider",h:"1.5rem",size:"sm",p:"4px 8px",_hover:{bg:"backgroundDivider"},onClick:()=>r(),w:"41px",fontWeight:"700",fontSize:"10px",borderRadius:"8px",children:"MAX"}),n&&void 0!==t&&null!=t?(0,i.jsxs)(p.x,{fontWeight:"700",fontSize:"12px",mt:"6px",color:"textPrimary",children:["Balance: ",(0,S.uf)(Number(t),!1,4,!0)," ",s]}):null]})},eu=n(46318),ep=e=>{let{isOpen:t,onPrimaryClick:n,onClose:r}=e;return(0,i.jsx)(T.Z,{isOpen:t,closeAlert:r,children:(0,i.jsxs)(u.M,{padding:{base:"0 1rem 2.5rem",md:"2.5rem 3rem"},fontWeight:"600",flexDirection:"column",width:"100%",children:[(0,i.jsx)(C.Z,{onClose:r}),(0,i.jsx)(O.Z,{transactionType:eu.i.INFO,modalTitle:"EL Points Optimisation",modalSubTitle:"EigenLayer has a low capacity of stETH available. You hereby authorize KelpDAO to convert stETH into ETHx or sfrxETH to restake based on EigenLayer caps for earning EL points",modalExtraText:"This is an automatic conversion, and you will not incur any losses.",primaryBtnTxt:"Deposit stETH",onSubmitPrimary:()=>n()})]})})},eh=n(89810),em=n(15229);let eg={poolLimit:0,usedValue:0};var ef=e=>{let{enabled:t,conversionRate:n}=e,i=(0,W.Z)(15e4),{config:r}=(0,V.Z)(),{isEthereumChain:s}=(0,et.Z)(),{selectedERC20:l}=(0,I.v9)(e=>e.user),[o,c]=(0,a.useState)({...eg,isLoading:!0}),{data:d,isFetching:x}=(0,eh.u)({...r.xtoken,functionName:"balanceOf",args:[r.interactionPools.lrtDepositPool.address],query:{enabled:!s,refetchInterval:1e4}}),u=(0,a.useCallback)(async()=>{let[e,t]=await Promise.all([(0,P.ZG)(l),(0,P.T1)(l)]);c({poolLimit:e.data.value,usedValue:t.data.totalStaked,isLoading:!1})},[l]);(0,a.useEffect)(()=>{t?u():c({...eg,isLoading:!1})},[u,t]),(0,Z.Z)(()=>{!i&&t&&u()},1e4);let p=d?(0,R.Md)((parseFloat((0,em.b)(d,r.xtoken.decimals))*n).toString(),8):0,h=!s&&d?{poolLimit:Number(p)||0,usedValue:0,isLoading:x}:{...eg,isLoading:!s&&x};return s?o:h},ej=n(84507),eb=n(2452),ek=n(4794),ev=n(50676),ey=()=>{let{selectedERC20:e}=(0,I.v9)(e=>e.user),{address:t}=(0,A.m)(),{config:n}=(0,V.Z)(),{data:i}=(0,eh.u)({...n.tokens[e],functionName:"allowance",args:[t,n.interactionPools.lrtDepositPool.address],query:{enabled:!!t&&e!==ee.hB,refetchInterval:1e4,initialData:0n}});return{erc20Allowance:e!==ee.hB?+(0,R.Md)(i?(0,em.b)(i,n.tokens[e].decimals):"0",8):+(0,R.Md)((0,em.b)(ev.zL,n.nativeToken.decimals),8)}},ew=e=>{let{conversionData:t}=e,[n,r]=(0,a.useState)(""),[s,l]=(0,a.useState)(""),[o,c]=(0,a.useState)(!1),{selectedERC20:d}=(0,I.v9)(e=>e.user),x=(0,a.useMemo)(()=>{let e=null==t?void 0:t.exchangeRate;return{toERC20:e||0,fromERC20:e?1/e:0}},[null==t?void 0:t.exchangeRate]),{chain:u,isEthereumChain:m}=(0,et.Z)(),g=ef({enabled:m&&d!==ee.hB||!m,conversionRate:x.toERC20}),f=(0,a.useMemo)(()=>[""].includes(d),[d]),{erc20Allowance:j}=ey(),{isConnected:b,address:k}=(0,A.m)(),{nativeTokenBalance:w,tokensBalances:E,xTokenTokenBalance:C}=(0,ek.Z)(),T=d===ee.hB?w:E[d]||0,D=(0,ej.Px)(),{openConnectModal:L}=(0,eb.We)(),{config:z,isRestakeSupported:P}=(0,V.Z)(),W=(0,a.useMemo)(()=>d!==ee.hB&&null!=g&&!!g.poolLimit&&null!=g&&!!g.usedValue&&g.usedValue>=g.poolLimit,[null==g?void 0:g.poolLimit,null==g?void 0:g.usedValue,d]),Z=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.trim();if(!b)return"";let t="";return!+e||Number.isNaN(+e)?t="This field can't be blank or zero. Please provide valid input.":Number(e)>T?t="You can't stake more than available balance in your wallet.":g&&g.poolLimit&&(Number(e)>g.poolLimit||g.usedValue&&g.usedValue+Number(e)>g.poolLimit)&&(t="You can't stake more than pool size."),t},[b,w,g,d,n,E]);(0,a.useEffect)(()=>{""!==n&&l(Z(n))},[T,w,k,n,Z]);let H=(0,I.I0)();(0,a.useEffect)(()=>{!d||d in z.tokens||H((0,er.Al)({selectedERC20:ee.hB}))},[u.id]);let M=(0,a.useMemo)(()=>{let e=n||"";return j&&Number(j)&&Number(j)>=Number(e)},[j,n]),_=e=>{let t=e.trim().replace(/,/g,"");((0,R.hj)(t)||""===t)&&(-1===t.indexOf(".")?r(t):t.length-(t.indexOf(".")+1)<=4&&r("."===t?"0.":t))},O=(0,a.useCallback)(()=>{if(b){if(P){if(M){if(!n){l("This field can't be blank or zero. Please provide valid input.");return}(0,S.L9)(B.jz,{amount:n}),f?c(!0):((0,S.Jc)(F.F.HANDLE_STAKE,{amount:n,referralId:D}),r(""))}else(0,S.Jc)(F.F.HANDLE_ERC20_APPROVE),(0,S.L9)(B.tk)}else(0,S.Jc)(F.F.SWITCH_NETWORK)}else null==L||L(),(0,S.L9)(B.vL,{type:"center_wiget"})},[b,P,M,n,f,D,L]),K=(0,a.useCallback)(()=>{r((0,R.Md)(T.toString(),4))},[T]),G=(0,a.useMemo)(()=>{if(!(n&&(0,R.hj)(n)))return"0";{let e=Number(n)*Number(x.fromERC20),t=e&&(0,S.Q7)(e)?(0,R.Md)((0,S.LU)(e),4):(0,S.LU)(e);return Number.isNaN(+t)?"0":t}},[n,x]);return(0,i.jsxs)(y.xu,{children:[(0,i.jsxs)(y.xu,{fontSize:"14px",lineHeight:"20px",fontWeight:"400",color:"textSecondary",children:[(0,i.jsx)(el,{}),(0,i.jsx)(h.k,{w:"100%",alignItems:"center",children:(0,i.jsxs)(h.k,{justifyContent:"space-between",flexGrow:1,flexDir:{base:"column",xl:"row"},children:[(0,i.jsx)(y.xu,{display:{base:b?"none":"inherit",xl:"block"},h:"20px",children:(0,i.jsx)(p.x,{children:"Enter amount"})}),b&&(0,i.jsxs)(h.k,{alignItems:"center",justifyContent:{base:"space-between",xl:"center"},children:[(0,i.jsxs)(y.xu,{fontWeight:{base:"700",md:"600"},fontSize:{base:"12px",md:"14px"},children:[(0,i.jsxs)(p.x,{as:"span",children:["My ",z.xtoken.symbol," : "]}),(0,i.jsx)(p.x,{as:"span",children:(0,S.uf)(Number(C),!1,4,!0)||"-"})]}),(0,i.jsx)(q,{})]})]})}),(0,i.jsx)(ed.Z,{inputRightElement:(0,i.jsx)(ex,{isConnected:b,tokenAmount:T,onClick:K}),value:n,onChange:e=>_(e),error:s}),s&&(0,i.jsxs)(h.k,{alignItems:"center",mt:"8px",children:[(0,i.jsx)(v(),{src:"/assets/transactions/error.svg",width:20,height:20,alt:"error-icon"}),(0,i.jsx)(p.x,{ml:"0.5rem",color:"error",fontSize:"12px",fontWeight:"400",children:s||"error"})]}),(0,i.jsxs)(y.xu,{mt:{base:"2rem",md:"1.5rem"},children:[(0,i.jsxs)(h.k,{justifyContent:"space-between",children:[(0,i.jsx)(p.x,{children:"You will get"}),(0,i.jsxs)(p.x,{children:[" ",(0,S.uf)(Number(G),!1,4,!0)||0," ",z.xtoken.symbol]})]}),x.toERC20?(0,i.jsxs)(h.k,{justifyContent:"space-between",mt:"1rem",children:[(0,i.jsx)(p.x,{children:"Exchange rate"}),(0,i.jsxs)(p.x,{children:["1 ",z.xtoken.symbol," ="," ",(0,R.Md)(x.toERC20.toString(),4)," ",d]})]}):null,!m&&g.poolLimit?(0,i.jsxs)(h.k,{justifyContent:"space-between",mt:"1rem",children:[(0,i.jsx)(p.x,{children:"Maximum Deposit"}),(0,i.jsxs)(p.x,{children:[(0,S.fe)(g.poolLimit.toString())," ",d]})]}):null]})]}),(0,i.jsx)(N.z,{borderRadius:"12px",bg:"textPrimary",p:"16px 64px",h:"56px",mt:"12px",width:"100%",_hover:{bg:"textPrimary"},onClick:O,isDisabled:!!s||W&&b,children:(0,i.jsx)(p.x,{fontSize:"16px",lineHeight:"24px",fontWeight:"600",color:"backgroundCard",children:b?P?M?R.Wt:R.Qf:"Switch network":R.WB})}),m&&d!==ee.hB&&(0,i.jsx)(ec,{poolData:g}),f&&(0,i.jsx)(ep,{isOpen:o,onClose:()=>c(!1),onPrimaryClick:()=>{c(!1),(0,S.Jc)(F.F.HANDLE_STAKE,{amount:n,referralId:D}),r("")}})]})},eS=n(10777),eE=n(21815),eC=n(10615);n(2952);var eT=()=>{let e=M(),t=(0,eS.a)({queryKey:["restake-apy"],queryFn:async()=>(await (0,P.c3)()).data}),n=H(),[r,s]=(0,a.useState)(0),[l]=(0,x.a)("(min-width: 768px)"),o=(0,a.useCallback)(e=>(0,i.jsx)(u.M,{height:"inherit",children:(0,i.jsx)(p.x,{fontWeight:"600",fontSize:{base:"16px",md:"24px"},lineHeight:"28px",color:"#142528",children:e})}),[]);return(0,i.jsx)(h.k,{justifyContent:"center",p:{base:"0 16px",md:0},children:(0,i.jsxs)(h.k,{flexDir:"column",gap:"16px",mt:{base:"16px",xl:"0px"},w:"100%",align:"center",children:[(0,i.jsx)(h.k,{overflow:"hidden",w:l?"648px":"100%",borderRadius:"24px",position:"relative",children:(0,i.jsx)(eC.lr,{autoPlay:!0,infiniteLoop:!0,interval:4e3,showThumbs:!1,stopOnHover:!1,showStatus:!1,children:eE.R.map(e=>(0,i.jsx)(v(),{src:e,alt:"image banner",width:1620,height:600,layout:"responsive"},e))})}),(0,i.jsxs)(h.k,{borderRadius:"24px",bg:"backgroundCard",p:{base:"0 16px 24px",md:"40px"},flexDir:"column",gap:{base:"24px",md:"40px"},w:{base:"100%",md:"648px"},children:[(0,i.jsx)(z,{tvl:e,restakeApy:t}),(0,i.jsxs)(m.m,{p:"0",onChange:e=>{s(e)},index:r,isFitted:!l,children:[(0,i.jsxs)(g.t,{fontWeight:"600",lineHeight:"24px",children:[(0,i.jsx)(f.O,{fontSize:{base:"14px",md:"16px"},children:"Stake"}),(0,i.jsx)(f.O,{fontSize:{base:"14px",md:"16px"},children:"Unstake"}),(0,i.jsx)(f.O,{fontSize:{base:"14px",md:"16px"},children:"Withdraw"})]}),(0,i.jsxs)(j.n,{mt:{base:"24px",md:"40px"},children:[(0,i.jsx)(b.x,{p:"0",children:(0,i.jsx)(ew,{conversionData:n})}),(0,i.jsx)(b.x,{p:"0",h:"inherit",children:o("Unstake is coming soon")}),(0,i.jsx)(b.x,{p:"0",h:"inherit",children:o("Withdraw is coming soon")})]})]})]})]})})},eR=e=>{let{title:t,children:n}=e;return(0,i.jsxs)(y.xu,{bg:"#E4F8F8",p:6,fontSize:12,borderRadius:16,children:[(0,i.jsx)(p.x,{fontWeight:600,fontSize:14,color:"#3F6870",mb:8,children:t}),n]})},eD=n(56371),eL=n(54023),ez=e=>{let{tvl:t,elMerkleRoot:n}=e,r=(0,a.useMemo)(()=>{var e,i,r;return[{label:"TVL",value:(null===(e=t.data)||void 0===e?void 0:e.usdTvl)?"$".concat((0,S.fe)("".concat(t.data.usdTvl),0)):"-",icon:"tvl.svg"},{label:"Total EL Points",value:(null===(i=n.data)||void 0===i?void 0:i.data.totalElPoints)?"".concat((0,S.fe)((0,eD.formatEther)(BigInt(Number(null===(r=n.data)||void 0===r?void 0:r.data.totalElPoints)).toString()),0)):"-",icon:"eigen.svg"},{label:"Total Kelp Grand Miles",value:"".concat((0,S.fe)(((function(){let e=Date.parse("Thu Mar 28 2024 16:40:16 GMT+0530 (India Standard Time)");return 234e9+(Date.now()-e)/36e5*145833333.33333334})()/1e3).toString(),0)),icon:"kelp-miles.svg"}]},[t.data,n.data]);return(0,i.jsx)(eR,{title:"Kelp Stats",children:(0,i.jsx)(h.k,{direction:"column",gap:4,children:r.map((e,t)=>(0,i.jsx)("div",{children:e.value?(0,i.jsxs)(h.k,{gap:4,alignItems:"center",children:[(0,i.jsx)(eL.q,{w:9,h:9,src:"/assets/right-sidebar/".concat(e.icon)}),(0,i.jsxs)(h.k,{lineHeight:1.3,direction:{base:"row-reverse",xl:"column"},justify:"space-between",flex:1,children:[(0,i.jsx)(p.x,{fontWeight:700,fontSize:14,color:"#075A5A",children:e.value}),(0,i.jsx)(p.x,{fontSize:12,color:"#3F6870",whiteSpace:"nowrap",children:e.label})]})]},e.label):null},t))})})},eP=n(66338),eW=n(2593),eZ=n(17191),eI=n(50151),eH=n(64325),eM=n(72303),eN=n(82509),eA=n(8193);let eF=["getTotalAssetDeposits","getAssetDistributionData"];var e_=()=>{let{config:e}=(0,V.Z)(),t=e.tokens,n=Object.keys(t).map(n=>eF.map(i=>({...e.interactionPools.lrtDepositPool,functionName:i,args:[t[n].address]}))),r=eF.map(t=>({...e.interactionPools.lrtDepositPool,functionName:t,args:[e.nativeToken.address]})),s=[...n.flat(),...r],{data:l}=(0,eP.N)({contracts:s}),o=(0,a.useMemo)(()=>{if(!l)return;let n=e=>e?(0,S.fe)((0,R.xr)(e.toString(),2).toString()):"-",i=e=>{if(!e||!e.length)return;let[t,n,i]=e.map(e=>eW.O$.from(e)),r=t.add(n).add(i),s=t.add(n);return{received:(0,R.xr)(r.toString(),2).toLocaleString(),toBeStaked:(0,R.xr)(s.toString(),2).toLocaleString(),stakedInEigenLayer:(0,R.xr)(i.toString(),2).toLocaleString()}},r=l.map(e=>e.result);return[...Object.keys(t),e.nativeToken.symbol].map((e,t)=>{let s=2*t;return{title:e,value:n(r[s]),icon:R.KR[e],assetDistribution:i(r[s+1])}})},[e.nativeToken.symbol,l,t]);return(0,i.jsx)(eR,{title:"Assets Restaked",children:(0,i.jsx)(h.k,{flexWrap:"wrap",gap:4,children:null==o?void 0:o.map(e=>(0,i.jsxs)(h.k,{direction:{base:"row-reverse",xl:"column"},w:{base:"100%",xl:"45%"},gap:1,justifyContent:"space-between",children:[(0,i.jsxs)(h.k,{alignItems:"center",gap:2,children:[(0,i.jsx)(p.x,{fontWeight:700,fontSize:14,children:e.value}),e.assetDistribution&&(0,i.jsxs)(eZ.J,{trigger:"hover",placement:"top",children:[(0,i.jsx)(eI.x,{children:(0,i.jsx)(y.xu,{cursor:"pointer",children:(0,i.jsx)(eA.ocf,{})})}),(0,i.jsxs)(eH.y,{w:160,children:[(0,i.jsx)(eM.Q,{}),(0,i.jsx)(eN.b,{children:(0,i.jsxs)(h.k,{direction:"column",gap:4,children:[(0,i.jsxs)(y.xu,{children:[(0,i.jsx)(p.x,{fontSize:10,children:"Deposited on Kelp"}),(0,i.jsx)(p.x,{children:e.assetDistribution.received})]}),(0,i.jsxs)(y.xu,{children:[(0,i.jsx)(p.x,{fontSize:10,children:"Restaked on EigenLayer"}),(0,i.jsx)(p.x,{children:e.assetDistribution.stakedInEigenLayer})]}),(0,i.jsxs)(y.xu,{children:[(0,i.jsx)(p.x,{fontSize:10,children:"To be Restaked"}),(0,i.jsx)(p.x,{children:e.assetDistribution.toBeStaked})]})]})})]})]})]}),(0,i.jsxs)(h.k,{gap:1,children:[(0,i.jsx)(eL.q,{w:4,h:4,src:e.icon}),(0,i.jsx)(p.x,{children:e.title})]})]},e.title))})})},eO=n(83e3),eK=()=>{let{isEthereumChain:e}=(0,et.Z)(),t=(0,eS.a)({queryKey:["tvlStats"],queryFn:async()=>(await (0,P.QD)()).data}),n=(0,eS.a)({queryKey:["kelpStats"],queryFn:async()=>(await (0,P.tx)()).data}),r=(0,eO.P)();return(0,i.jsxs)(h.k,{pos:{base:"initial",xl:"fixed"},right:{base:"initial",xl:10},top:{base:"initial",xl:140},w:"100%",p:4,pt:{base:4,lg:0},gap:4,direction:"column",margin:"auto",maxW:{base:"100%",md:680,xl:280},children:[(0,i.jsx)(ez,{tvl:t,kelp:n,elMerkleRoot:r}),e&&(0,i.jsx)(e_,{})]})},eB=n(70853),eV=!0,eq=e=>{let{availableTags:t,tokenTagMapping:n}=e,r=(0,a.useMemo)(()=>(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Liquid restaking | Restake ETH or LSTs, mint rsETH and earn Kelp Miles!"}),(0,i.jsx)("meta",{name:"description",content:"Unlock higher rewards and DeFi utility for restaked assets through liquid restaking with rsETH. Get dual rewards with EigenLayer Restaked Points and Kelp Miles."}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{property:"og:image",content:"/restake_preview_image.png"}),(0,i.jsx)("meta",{property:"og:title",content:" Liquid restaking | Restake ETH or LSTs, mint rsETH and earn Kelp Miles!"}),(0,i.jsx)("meta",{property:"og:description",content:"Unlock higher rewards and DeFi utility for restaked assets through liquid restaking with rsETH. Get dual rewards with EigenLayer Restaked Points and Kelp Miles."})]}),[]);return(0,eB.Z)(),(0,i.jsxs)(l.T,{value:{pageData:{availableTags:t,tokenTagMapping:n}},children:[r,(0,i.jsx)(c.Z,{Sidebar:(0,i.jsx)(d.Z,{display:{base:"none",xl:"block"},minH:"100vh"}),MobileSideBar:(0,i.jsx)(d.Z,{}),Header:(0,i.jsx)(o.Z,{}),RightSidebar:(0,i.jsx)(eK,{}),children:(0,i.jsx)(eT,{})})]})}},28273:function(e,t,n){"use strict";n.d(t,{T:function(){return s},z:function(){return r}});var i=n(85893);let r=(0,n(67294).createContext)({pageData:{}}),s=e=>{let{children:t,...n}=e;return(0,i.jsx)(r.Provider,{...n,children:t})}},19011:function(e,t,n){"use strict";n.d(t,{J9:function(){return g},QD:function(){return d},T1:function(){return u},Vr:function(){return m},XE:function(){return l},ZG:function(){return x},c3:function(){return f},fc:function(){return c},jS:function(){return p},tx:function(){return h},uE:function(){return a}});var i=n(9669),r=n.n(i);let s="https://common.kelpdao.xyz",a=async e=>r().post("https://script.google.com/macros/s/AKfycbxBOMrpVjekduyQdbzxbwbRV9eBQHeAl3k9Er1iy5ztWggoKKKRDalD-w_CVMfsdJP-EA/exec",e),l=e=>r().get("".concat(s,"/km-el-points/user/").concat(e)),o="https://universe.kelpdao.xyz",c=e=>r().get("".concat(o,"/rseth/exchangeRate/?lrtToken=").concat(e)),d=()=>r().get("".concat(o,"/rseth/tvl/?lrtToken")),x=e=>r().get("".concat(o,"/rseth/maxDepositLimit/?lrtToken=").concat(e)),u=e=>r().get("".concat(o,"/rseth/totalStaked/?lrtToken=").concat(e)),p=e=>r().get("".concat(s,"/km-el-points/user/").concat(e)),h=()=>r().get("".concat(s,"/km-el-points-debug/total")),m=(e,t)=>r().get("".concat(s,"/el-merkle/proofs/index/").concat(t.toString(),"/").concat(e)),g=()=>r().get("".concat(s,"/el-merkle/root")),f=()=>r().get("".concat(o,"/rseth/apy"))}},function(e){e.O(0,[1778,4617,1664,6407,9669,6510,1149,3344,2888,9774,179],function(){return e(e.s=75111)}),_N_E=e.O()}]);
//# sourceMappingURL=restake-0c0b19808c8b4c74.js.map