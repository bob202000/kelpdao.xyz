"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4370],{53891:function(e,n,t){t.d(n,{H:function(){return b}});var r=t(952),o=t(9804),i=t(16554),l=t(7174),a=t(52094),u=t(25432),s=t(51526),c=t(36074),d=t(67294),p=t(85893),f=e=>null!=e&&parseInt(e.toString(),10)>0,m={exit:{height:{duration:.2,ease:a.Lj.ease},opacity:{duration:.3,ease:a.Lj.ease}},enter:{height:{duration:.3,ease:a.Lj.ease},opacity:{duration:.4,ease:a.Lj.ease}}},v={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:r,delay:o})=>{var i;return{...e&&{opacity:f(n)?1:0},height:n,transitionEnd:null==r?void 0:r.exit,transition:null!=(i=null==t?void 0:t.exit)?i:a.p$.exit(m.exit,o)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:r,delay:o})=>{var i;return{...e&&{opacity:1},height:n,transitionEnd:null==r?void 0:r.enter,transition:null!=(i=null==t?void 0:t.enter)?i:a.p$.enter(m.enter,o)}}},h=(0,d.forwardRef)((e,n)=>{let{in:t,unmountOnExit:r,animateOpacity:o=!0,startingHeight:i=0,endingHeight:l="auto",style:a,className:f,transition:m,transitionEnd:h,...b}=e,[x,y]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=setTimeout(()=>{y(!0)});return()=>clearTimeout(e)},[]),(0,u.ZK)({condition:Number(i)>0&&!!r,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let g=parseFloat(i.toString())>0,w={startingHeight:i,endingHeight:l,animateOpacity:o,transition:x?m:{enter:{duration:0}},transitionEnd:{enter:null==h?void 0:h.enter,exit:r?null==h?void 0:h.exit:{...null==h?void 0:h.exit,display:g?"block":"none"}}},k=!r||t,_=t||r?"enter":"exit";return(0,p.jsx)(s.M,{initial:!1,custom:w,children:k&&(0,p.jsx)(c.E.div,{ref:n,...b,className:(0,u.cx)("chakra-collapse",f),style:{overflow:"hidden",display:"block",...a},custom:w,variants:v,initial:!!r&&"exit",animate:_,exit:"exit"})})});h.displayName="Collapse";var b=(0,i.G)(function(e,n){let{className:t,motionProps:i,...a}=e,{reduceMotion:s}=(0,r.EF)(),{getPanelProps:c,isOpen:d}=(0,o.bB)(),f=c(a,n),m=(0,u.cx)("chakra-accordion__panel",t),v=(0,o.YO)();s||delete f.hidden;let b=(0,p.jsx)(l.m.div,{...f,__css:v.panel,className:m});return s?b:(0,p.jsx)(h,{in:d,...i,children:b})});b.displayName="AccordionPanel"},952:function(e,n,t){t.d(n,{As:function(){return s},EF:function(){return d},Zl:function(){return p},a2:function(){return c}});var r=t(9804),o=t(55227),i=t(61942),l=t(81103),a=t(25432),u=t(67294);function s(e){let{onChange:n,defaultIndex:t,index:o,allowMultiple:l,allowToggle:s,...c}=e;(function(e){let n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,a.ZK)({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})})(e),(0,a.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let d=(0,r._v)(),[p,f]=(0,u.useState)(-1);(0,u.useEffect)(()=>()=>{f(-1)},[]);let[m,v]=(0,i.T)({value:o,defaultValue:()=>l?null!=t?t:[]:null!=t?t:-1,onChange:n});return{index:m,setIndex:v,htmlProps:c,getAccordionItemProps:e=>{let n=!1;return null!==e&&(n=Array.isArray(m)?m.includes(e):m===e),{isOpen:n,onChange:n=>{null!==e&&(l&&Array.isArray(m)?v(n?m.concat(e):m.filter(n=>n!==e)):n?v(e):s&&v(-1))}}},focusedIndex:p,setFocusedIndex:f,descendants:d}}var[c,d]=(0,o.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function p(e){var n;let{isDisabled:t,isFocusable:o,id:i,...s}=e,{getAccordionItemProps:c,setFocusedIndex:p}=d(),f=(0,u.useRef)(null),m=(0,u.useId)(),v=null!=i?i:m,h=`accordion-button-${v}`,b=`accordion-panel-${v}`;(0,a.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:x,index:y,descendants:g}=(0,r.mc)({disabled:t&&!o}),{isOpen:w,onChange:k}=c(-1===y?null:y);n={isOpen:w,isDisabled:t},(0,a.ZK)({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"});let _=(0,u.useCallback)(()=>{null==k||k(!w),p(y)},[y,p,w,k]),C=(0,u.useCallback)(e=>{let n={ArrowDown:()=>{let e=g.nextEnabled(y);null==e||e.node.focus()},ArrowUp:()=>{let e=g.prevEnabled(y);null==e||e.node.focus()},Home:()=>{let e=g.firstEnabled();null==e||e.node.focus()},End:()=>{let e=g.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))},[g,y]),j=(0,u.useCallback)(()=>{p(y)},[p,y]),E=(0,u.useCallback)(function(e={},n=null){return{...e,type:"button",ref:(0,l.lq)(x,f,n),id:h,disabled:!!t,"aria-expanded":!!w,"aria-controls":b,onClick:(0,a.v0)(e.onClick,_),onFocus:(0,a.v0)(e.onFocus,j),onKeyDown:(0,a.v0)(e.onKeyDown,C)}},[h,t,w,_,j,C,b,x]),N=(0,u.useCallback)(function(e={},n=null){return{...e,ref:n,role:"region",id:b,"aria-labelledby":h,hidden:!w}},[h,w,b]);return{isOpen:w,isDisabled:t,isFocusable:o,onOpen:()=>{null==k||k(!0)},onClose:()=>{null==k||k(!1)},getButtonProps:E,getPanelProps:N,htmlProps:s}}},82215:function(e,n,t){t.d(n,{U:function(){return p}});var r=t(952),o=t(9804),i=t(16554),l=t(77030),a=t(33179),u=t(7174),s=t(25432),c=t(67294),d=t(85893),p=(0,i.G)(function({children:e,reduceMotion:n,...t},i){let p=(0,l.jC)("Accordion",t),f=(0,a.Lr)(t),{htmlProps:m,descendants:v,...h}=(0,r.As)(f),b=(0,c.useMemo)(()=>({...h,reduceMotion:!!n}),[h,n]);return(0,d.jsx)(o.di,{value:v,children:(0,d.jsx)(r.a2,{value:b,children:(0,d.jsx)(o.lh,{value:p,children:(0,d.jsx)(u.m.div,{ref:i,...m,className:(0,s.cx)("chakra-accordion",t.className),__css:p.root,children:e})})})})});p.displayName="Accordion"},88087:function(e,n,t){t.d(n,{Q:function(){return c}});var r=t(952),o=t(9804),i=t(16554),l=t(7174),a=t(25432),u=t(67294),s=t(85893),c=(0,i.G)(function(e,n){let{children:t,className:i}=e,{htmlProps:c,...d}=(0,r.Zl)(e),p={...(0,o.YO)().container,overflowAnchor:"none"},f=(0,u.useMemo)(()=>d,[d]);return(0,s.jsx)(o.ec,{value:f,children:(0,s.jsx)(l.m.div,{ref:n,...c,className:(0,a.cx)("chakra-accordion__item",i),__css:p,children:"function"==typeof t?t({isExpanded:!!d.isOpen,isDisabled:!!d.isDisabled}):t})})});c.displayName="AccordionItem"},64071:function(e,n,t){t.d(n,{K:function(){return u}});var r=t(9804),o=t(16554),i=t(7174),l=t(25432),a=t(85893),u=(0,o.G)(function(e,n){let{getButtonProps:t}=(0,r.bB)(),o=t(e,n),u={display:"flex",alignItems:"center",width:"100%",outline:0,...(0,r.YO)().button};return(0,a.jsx)(i.m.button,{...o,className:(0,l.cx)("chakra-accordion__button",e.className),__css:u})});u.displayName="AccordionButton"},9804:function(e,n,t){t.d(n,{YO:function(){return l},_v:function(){return d},bB:function(){return u},di:function(){return s},ec:function(){return a},lh:function(){return i},mc:function(){return p}});var r=t(65225),o=t(55227),[i,l]=(0,o.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[a,u]=(0,o.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[s,c,d,p]=(0,r.n)()},79078:function(e,n,t){t.d(n,{r:function(){return l}});var r=t(16554),o=t(7174),i=t(85893),l=(0,r.G)(function(e,n){let{templateAreas:t,gap:r,rowGap:l,columnGap:a,column:u,row:s,autoFlow:c,autoRows:d,templateRows:p,autoColumns:f,templateColumns:m,...v}=e;return(0,i.jsx)(o.m.div,{ref:n,__css:{display:"grid",gridTemplateAreas:t,gridGap:r,gridRowGap:l,gridColumnGap:a,gridAutoColumns:f,gridColumn:u,gridRow:s,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:p,gridTemplateColumns:m},...v})});l.displayName="Grid"},49289:function(e,n,t){t.d(n,{i:function(){return s}});var r=t(16554),o=t(77030),i=t(33179),l=t(7174),a=t(25432),u=t(85893),s=(0,r.G)(function(e,n){let{borderLeftWidth:t,borderBottomWidth:r,borderTopWidth:s,borderRightWidth:c,borderWidth:d,borderStyle:p,borderColor:f,...m}=(0,o.mq)("Divider",e),{className:v,orientation:h="horizontal",__css:b,...x}=(0,i.Lr)(e);return(0,u.jsx)(l.m.hr,{ref:n,"aria-orientation":h,...x,__css:{...m,border:"0",borderColor:f,borderStyle:p,...{vertical:{borderLeftWidth:t||c||d||"1px",height:"100%"},horizontal:{borderBottomWidth:r||s||d||"1px",width:"100%"}}[h],...b},className:(0,a.cx)("chakra-divider",v)})});s.displayName="Divider"},61942:function(e,n,t){t.d(n,{T:function(){return i}});var r=t(67294),o=t(35155);function i(e){let{value:n,defaultValue:t,onChange:i,shouldUpdate:l=(e,n)=>e!==n}=e,a=(0,o.W)(i),u=(0,o.W)(l),[s,c]=(0,r.useState)(t),d=void 0!==n,p=d?n:s,f=(0,o.W)(e=>{let n="function"==typeof e?e(p):e;u(p,n)&&(d||c(n),a(n))},[d,a,p,u]);return[p,f]}},99840:function(e,n,t){t.d(n,{h:function(){return a}});var r=t(10991),o=t(16554),i=t(7174),l=t(85893),a=(0,o.G)((e,n)=>{let t=(0,r.p)();return(0,l.jsx)(i.m.thead,{...e,ref:n,__css:t.thead})})},10991:function(e,n,t){t.d(n,{i:function(){return p},p:function(){return d}});var r=t(16554),o=t(77030),i=t(33179),l=t(7174),a=t(25432),u=t(55227),s=t(85893),[c,d]=(0,u.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),p=(0,r.G)((e,n)=>{let t=(0,o.jC)("Table",e),{className:r,layout:u,...d}=(0,i.Lr)(e);return(0,s.jsx)(c,{value:t,children:(0,s.jsx)(l.m.table,{ref:n,__css:{tableLayout:u,...t.table},className:(0,a.cx)("chakra-table",r),...d})})});p.displayName="Table"},80510:function(e,n,t){t.d(n,{Tr:function(){return a}});var r=t(10991),o=t(16554),i=t(7174),l=t(85893),a=(0,o.G)((e,n)=>{let t=(0,r.p)();return(0,l.jsx)(i.m.tr,{...e,ref:n,__css:t.tr})})},15115:function(e,n,t){t.d(n,{p:function(){return a}});var r=t(10991),o=t(16554),i=t(7174),l=t(85893),a=(0,o.G)((e,n)=>{let t=(0,r.p)();return(0,l.jsx)(i.m.tbody,{...e,ref:n,__css:t.tbody})})},4693:function(e,n,t){t.d(n,{Th:function(){return a}});var r=t(10991),o=t(16554),i=t(7174),l=t(85893),a=(0,o.G)(({isNumeric:e,...n},t)=>{let o=(0,r.p)();return(0,l.jsx)(i.m.th,{...n,ref:t,__css:o.th,"data-is-numeric":e})})},64698:function(e,n,t){t.d(n,{Td:function(){return a}});var r=t(10991),o=t(16554),i=t(7174),l=t(85893),a=(0,o.G)(({isNumeric:e,...n},t)=>{let o=(0,r.p)();return(0,l.jsx)(i.m.td,{...n,ref:t,__css:o.td,"data-is-numeric":e})})},32568:function(e,n,t){t.d(n,{u:function(){return j}});var r={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},o=t(61735),i=t(66919),l=t(76766),a=t(85075),u=t(57134),s=t(81103),c=t(25432),d=t(67294),p=e=>{var n;return(null==(n=e.current)?void 0:n.ownerDocument)||document},f=e=>{var n,t;return(null==(t=null==(n=e.current)?void 0:n.ownerDocument)?void 0:t.defaultView)||window},m="chakra-ui:close-tooltip",v=t(1702),h=t(7174),b=t(16554),x=t(77030),y=t(33179),g=t(48940),w=t(36074),k=t(51526),_=t(85893),C=(0,h.m)(w.E.div),j=(0,b.G)((e,n)=>{var t,b;let w;let j=(0,x.mq)("Tooltip",e),E=(0,y.Lr)(e),N=(0,g.F)(),{children:A,label:T,shouldWrapChildren:D,"aria-label":O,hasArrow:I,bg:G,portalProps:S,background:F,backgroundColor:L,bgColor:P,motionProps:M,...R}=E,q=null!=(b=null!=(t=null!=F?F:L)?t:G)?b:P;if(q){j.bg=q;let e=(0,y.K1)(N,"colors",q);j[l.Dq.arrowBg.var]=e}let K=function(e={}){let{openDelay:n=0,closeDelay:t=0,closeOnClick:r=!0,closeOnMouseDown:v,closeOnScroll:h,closeOnPointerDown:b=v,closeOnEsc:x=!0,onOpen:y,onClose:g,placement:w,id:k,isOpen:_,defaultIsOpen:C,arrowSize:j=10,arrowShadowColor:E,arrowPadding:N,modifiers:A,isDisabled:T,gutter:D,offset:O,direction:I,...G}=e,{isOpen:S,onOpen:F,onClose:L}=(0,a.q)({isOpen:_,defaultIsOpen:C,onOpen:y,onClose:g}),{referenceRef:P,getPopperProps:M,getArrowInnerProps:R,getArrowProps:q}=(0,i.D)({enabled:S,placement:w,arrowPadding:N,modifiers:A,gutter:D,offset:O,direction:I}),K=(0,d.useId)(),B=`tooltip-${null!=k?k:K}`,Z=(0,d.useRef)(null),$=(0,d.useRef)(),Y=(0,d.useCallback)(()=>{$.current&&(clearTimeout($.current),$.current=void 0)},[]),z=(0,d.useRef)(),W=(0,d.useCallback)(()=>{z.current&&(clearTimeout(z.current),z.current=void 0)},[]),H=(0,d.useCallback)(()=>{W(),L()},[L,W]),U=((0,d.useEffect)(()=>{let e=p(Z);return e.addEventListener(m,H),()=>e.removeEventListener(m,H)},[H,Z]),()=>{let e=p(Z),n=f(Z);e.dispatchEvent(new n.CustomEvent(m))}),V=(0,d.useCallback)(()=>{if(!T&&!$.current){S&&U();let e=f(Z);$.current=e.setTimeout(F,n)}},[U,T,S,F,n]),Q=(0,d.useCallback)(()=>{Y();let e=f(Z);z.current=e.setTimeout(H,t)},[t,H,Y]),J=(0,d.useCallback)(()=>{S&&r&&Q()},[r,Q,S]),X=(0,d.useCallback)(()=>{S&&b&&Q()},[b,Q,S]),ee=(0,d.useCallback)(e=>{S&&"Escape"===e.key&&Q()},[S,Q]);(0,u.O)(()=>p(Z),"keydown",x?ee:void 0),(0,u.O)(()=>{if(!h)return null;let e=Z.current;if(!e)return null;let n=function e(n){return["html","body","#document"].includes(n.localName)?n.ownerDocument.body:(0,o.Re)(n)&&function(e){let{overflow:n,overflowX:t,overflowY:r}=(e.ownerDocument.defaultView||window).getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(n+r+t)}(n)?n:e("html"===n.localName?n:n.assignedSlot||n.parentElement||n.ownerDocument.documentElement)}(e);return"body"===n.localName?f(Z):n},"scroll",()=>{S&&h&&H()},{passive:!0,capture:!0}),(0,d.useEffect)(()=>{T&&(Y(),S&&L())},[T,S,L,Y]),(0,d.useEffect)(()=>()=>{Y(),W()},[Y,W]),(0,u.O)(()=>Z.current,"pointerleave",Q);let en=(0,d.useCallback)((e={},n=null)=>({...e,ref:(0,s.lq)(Z,n,P),onPointerEnter:(0,c.v0)(e.onPointerEnter,e=>{"touch"!==e.pointerType&&V()}),onClick:(0,c.v0)(e.onClick,J),onPointerDown:(0,c.v0)(e.onPointerDown,X),onFocus:(0,c.v0)(e.onFocus,V),onBlur:(0,c.v0)(e.onBlur,Q),"aria-describedby":S?B:void 0}),[V,Q,X,S,B,J,P]),et=(0,d.useCallback)((e={},n=null)=>M({...e,style:{...e.style,[l.Dq.arrowSize.var]:j?`${j}px`:void 0,[l.Dq.arrowShadowColor.var]:E}},n),[M,j,E]);return{isOpen:S,show:V,hide:Q,getTriggerProps:en,getTooltipProps:(0,d.useCallback)((e={},n=null)=>{let t={...e.style,position:"relative",transformOrigin:l.Dq.transformOrigin.varRef};return{ref:n,...G,...e,id:B,role:"tooltip",style:t}},[G,B]),getTooltipPositionerProps:et,getArrowProps:q,getArrowInnerProps:R}}({...R,direction:N.direction});if("string"==typeof A||D)w=(0,_.jsx)(h.m.span,{display:"inline-block",tabIndex:0,...K.getTriggerProps(),children:A});else{let e=d.Children.only(A);w=(0,d.cloneElement)(e,K.getTriggerProps(e.props,e.ref))}let B=!!O,Z=K.getTooltipProps({},n),$=B?function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(Z,["role","id"]):Z,Y=function(e,n){let t={};for(let r of n)r in e&&(t[r]=e[r]);return t}(Z,["role","id"]);return T?(0,_.jsxs)(_.Fragment,{children:[w,(0,_.jsx)(k.M,{children:K.isOpen&&(0,_.jsx)(v.h,{...S,children:(0,_.jsx)(h.m.div,{...K.getTooltipPositionerProps(),__css:{zIndex:j.zIndex,pointerEvents:"none"},children:(0,_.jsxs)(C,{variants:r,initial:"exit",animate:"enter",exit:"exit",...M,...$,__css:j,children:[T,B&&(0,_.jsx)(h.m.span,{srOnly:!0,...Y,children:O}),I&&(0,_.jsx)(h.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,_.jsx)(h.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:j.bg}})})]})})})})]}):(0,_.jsx)(_.Fragment,{children:A})});j.displayName="Tooltip"}}]);
//# sourceMappingURL=4370-42adec0385a6e5c3.js.map