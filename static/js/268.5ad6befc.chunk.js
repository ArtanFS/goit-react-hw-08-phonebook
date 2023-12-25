"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[268],{268:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(2791),r=n(4420),o=n(4942),i=n(1413),s=n(9439),c=n(3553),d=function(e){return e.filter},l=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},p=(0,c.P1)([l,d],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).sort((function(e,t){return e.name.localeCompare(t.name)}))})),v=n(6788),h=n(697),x=n(890),f=n(1889),Z=n(7665),b=n(4294),g=n(3329),y=function(){var e=(0,a.useState)({name:"",number:""}),t=(0,s.Z)(e,2),n=t[0],c=t[1],d=(0,r.v9)(l),u=(0,r.I0)(),m=function(e){var t=e.target,n=t.value,a=t.name;c((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,o.Z)({},a,n))}))};return(0,g.jsxs)(h.Z,{sx:{marginTop:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(x.Z,{component:"h1",variant:"h4",fontWeight:500,sx:{mb:2},children:"Phonebook"}),(0,g.jsx)(x.Z,{component:"p",variant:"h6",children:"Add Your Contacts"}),(0,g.jsxs)(h.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),d.some((function(e){var t=e.name;return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(n.name," is already in contacts.")):(u((0,v.uK)(n)),c({name:"",number:""}))},sx:{mt:3},children:[(0,g.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(Z.Z,{autoComplete:"given-name",name:"name",fullWidth:!0,id:"inputName",label:"Name",autoFocus:!0,value:n.name,onChange:m,required:!0,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\u2019]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\u2019])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\u2019]*)*$"})}),(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,g.jsx)(Z.Z,{required:!0,fullWidth:!0,id:"inputNumber",label:"Number",name:"number",type:"tel",value:n.number,onChange:m,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",placeholder:"012-345-6789"})})]}),(0,g.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})},j=n(3366),C=n(7462),S=n(3733),I=n(4419),w=n(627),P=n(2065),L=n(6934),k=n(1402),A=n(3701),N=n(9103),M=n(162),R=n(2071),G=n(6199),W=n(5878),F=n(1217);function T(e){return(0,F.Z)("MuiListItem",e)}var z=(0,W.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var O=(0,W.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function V(e){return(0,F.Z)("MuiListItemSecondaryAction",e)}(0,W.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var _=["className"],q=(0,L.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,C.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),B=a.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,o=(0,j.Z)(n,_),i=a.useContext(G.Z),s=(0,C.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,I.Z)(a,V,n)}(s);return(0,g.jsx)(q,(0,C.Z)({className:(0,S.Z)(c.root,r),ownerState:s,ref:t},o))}));B.muiName="ListItemSecondaryAction";var D=B,H=["className"],Y=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],E=(0,L.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,C.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,C.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,o.Z)({},"& > .".concat(O.root),{paddingRight:48}),(t={},(0,o.Z)(t,"&.".concat(z.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,o.Z)(t,"&.".concat(z.selected),(0,o.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(z.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(z.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,o.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(z.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),K=(0,L.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),X=a.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,o=void 0===r?"center":r,i=n.autoFocus,s=void 0!==i&&i,c=n.button,d=void 0!==c&&c,l=n.children,u=n.className,m=n.component,p=n.components,v=void 0===p?{}:p,h=n.componentsProps,x=void 0===h?{}:h,f=n.ContainerComponent,Z=void 0===f?"li":f,b=n.ContainerProps,y=(b=void 0===b?{}:b).className,P=n.dense,L=void 0!==P&&P,W=n.disabled,F=void 0!==W&&W,O=n.disableGutters,V=void 0!==O&&O,_=n.disablePadding,q=void 0!==_&&_,B=n.divider,X=void 0!==B&&B,$=n.focusVisibleClassName,J=n.secondaryAction,U=n.selected,Q=void 0!==U&&U,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,j.Z)(n.ContainerProps,H),oe=(0,j.Z)(n,Y),ie=a.useContext(G.Z),se=a.useMemo((function(){return{dense:L||ie.dense||!1,alignItems:o,disableGutters:V}}),[o,ie.dense,L,V]),ce=a.useRef(null);(0,M.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var de=a.Children.toArray(l),le=de.length&&(0,N.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,C.Z)({},n,{alignItems:o,autoFocus:s,button:d,dense:se.dense,disabled:F,disableGutters:V,disablePadding:q,divider:X,hasSecondaryAction:le,selected:Q}),me=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,I.Z)(i,T,a)}(ue),pe=(0,R.Z)(ce,t),ve=ae.root||v.Root||E,he=te.root||x.root||{},xe=(0,C.Z)({className:(0,S.Z)(me.root,he.className,u),disabled:F},oe),fe=m||"li";return d&&(xe.component=m||"div",xe.focusVisibleClassName=(0,S.Z)(z.focusVisible,$),fe=A.Z),le?(fe=xe.component||m?fe:"div","li"===Z&&("li"===fe?fe="div":"li"===xe.component&&(xe.component="div")),(0,g.jsx)(G.Z.Provider,{value:se,children:(0,g.jsxs)(K,(0,C.Z)({as:Z,className:(0,S.Z)(me.container,y),ref:pe,ownerState:ue},re,{children:[(0,g.jsx)(ve,(0,C.Z)({},he,!(0,w.X)(ve)&&{as:fe,ownerState:(0,C.Z)({},ue,he.ownerState)},xe,{children:de})),de.pop()]}))})):(0,g.jsx)(G.Z.Provider,{value:se,children:(0,g.jsxs)(ve,(0,C.Z)({},he,{as:fe,ref:pe},!(0,w.X)(ve)&&{ownerState:(0,C.Z)({},ue,he.ownerState)},xe,{children:[de,J&&(0,g.jsx)(D,{children:J})]}))})}));function $(e){return(0,F.Z)("MuiListItemAvatar",e)}(0,W.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var J=["className"],U=(0,L.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,C.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),Q=a.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiListItemAvatar"}),r=n.className,o=(0,j.Z)(n,J),i=a.useContext(G.Z),s=(0,C.Z)({},n,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,I.Z)(a,$,n)}(s);return(0,g.jsx)(U,(0,C.Z)({className:(0,S.Z)(c.root,r),ownerState:s,ref:t},o))})),ee=n(3044),te=n(9849),ne=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ae=(0,L.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,o.Z)({},"& .".concat(te.Z.primary),t.primary),(0,o.Z)({},"& .".concat(te.Z.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,C.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),re=a.forwardRef((function(e,t){var n=(0,k.Z)({props:e,name:"MuiListItemText"}),r=n.children,o=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,d=void 0!==c&&c,l=n.primary,u=n.primaryTypographyProps,m=n.secondary,p=n.secondaryTypographyProps,v=(0,j.Z)(n,ne),h=a.useContext(G.Z).dense,f=null!=l?l:r,Z=m,b=(0,C.Z)({},n,{disableTypography:s,inset:d,primary:!!f,secondary:!!Z,dense:h}),y=function(e){var t=e.classes,n=e.inset,a=e.primary,r=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,I.Z)(o,te.L,t)}(b);return null==f||f.type===x.Z||s||(f=(0,g.jsx)(x.Z,(0,C.Z)({variant:h?"body2":"body1",className:y.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:f}))),null==Z||Z.type===x.Z||s||(Z=(0,g.jsx)(x.Z,(0,C.Z)({variant:"body2",className:y.secondary,color:"text.secondary",display:"block"},p,{children:Z}))),(0,g.jsxs)(ae,(0,C.Z)({className:(0,S.Z)(y.root,o),ownerState:b,ref:t},v,{children:[f,Z]}))})),oe=n(3400),ie=n(383),se=n(4586),ce=function(e){var t=e.contact,n=(0,r.I0)();return(0,g.jsx)(X,{sx:{mx:5,height:"44px"},children:(0,g.jsx)(f.ZP,{container:!0,children:(0,g.jsx)(f.ZP,{item:!0,xs:8,sm:10,children:(0,g.jsxs)(h.Z,{sx:{mt:1,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,g.jsx)(Q,{children:(0,g.jsx)(ee.Z,{sx:{bgcolor:"transparent"},children:(0,g.jsx)(se.Z,{color:"primary",sx:{width:28,height:28}})})}),(0,g.jsx)(re,{primary:"".concat(t.name,": ").concat(t.number),sx:{typography:"h6"}}),(0,g.jsx)(oe.Z,{edge:"end","aria-label":"delete",onClick:function(){return n((0,v.GK)(t.id))},children:(0,g.jsx)(ie.Z,{color:"primary",sx:{width:32,height:32}})})]})})})})},de=n(493),le=function(){var e=(0,r.v9)(p);return(0,g.jsx)(h.Z,{children:(0,g.jsx)(de.Z,{children:e.map((function(e){return(0,g.jsx)(ce,{contact:e},e.id)}))})})},ue=n(9644),me=function(){var e=(0,r.v9)(d),t=(0,r.I0)();return(0,g.jsxs)(h.Z,{sx:{marginTop:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(x.Z,{component:"p",variant:"h6",children:"Your Contacts"}),(0,g.jsx)(h.Z,{sx:{my:1},children:(0,g.jsx)(f.ZP,{container:!0,children:(0,g.jsx)(f.ZP,{item:!0,xs:12,sm:12,children:(0,g.jsx)(Z.Z,{fullWidth:!0,id:"inputFindName",label:"Find contacts by name",name:"filter",value:e,onChange:function(e){t((0,ue.U)(e.target.value))},type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\u2019]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\u2019])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404\u2019]*)*$"})})})})]})},pe=n(1666),ve="Error_wrapper__AOSzo",he="Error_text__FJVYL",xe=function(e){var t=e.err;return(0,g.jsx)("div",{className:ve,children:(0,g.jsxs)("p",{className:he,children:["An error occurred: ",t]})})},fe=n(4270),Ze=n(1122),be=n(7078),ge=(0,n(4046).ZP)(),ye=n(5080),je=["className","component","disableGutters","fixed","maxWidth","classes"],Ce=(0,ye.Z)(),Se=ge("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Ze.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),Ie=function(e){return(0,be.Z)({props:e,name:"MuiContainer",defaultTheme:Ce})},we=function(e,t){var n=e.classes,a=e.fixed,r=e.disableGutters,o=e.maxWidth,i={root:["root",o&&"maxWidth".concat((0,Ze.Z)(String(o))),a&&"fixed",r&&"disableGutters"]};return(0,I.Z)(i,(function(e){return(0,F.Z)(t,e)}),n)};var Pe=n(4036),Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?Se:t,r=e.useThemeProps,i=void 0===r?Ie:r,s=e.componentName,c=void 0===s?"MuiContainer":s,d=n((function(e){var t=e.theme,n=e.ownerState;return(0,C.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,r=t.breakpoints.values[a];return 0!==r&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,C.Z)({},"xs"===n.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,o.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),l=a.forwardRef((function(e,t){var n=i(e),a=n.className,r=n.component,o=void 0===r?"div":r,s=n.disableGutters,l=void 0!==s&&s,u=n.fixed,m=void 0!==u&&u,p=n.maxWidth,v=void 0===p?"lg":p,h=(0,j.Z)(n,je),x=(0,C.Z)({},n,{component:o,disableGutters:l,fixed:m,maxWidth:v}),f=we(x,c);return(0,g.jsx)(d,(0,C.Z)({as:o,ownerState:x,className:(0,S.Z)(f.root,a),ref:t},h))}));return l}({createStyledComponent:(0,L.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Pe.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),ke=Le,Ae=n(4708),Ne=function(){var e=(0,r.I0)(),t=(0,r.v9)(u),n=(0,r.v9)(m);return(0,a.useEffect)((function(){e((0,v.K2)())}),[e]),(0,g.jsxs)(ke,{component:"main",maxWidth:"sm",children:[(0,g.jsx)(Ae.ZP,{}),(0,g.jsx)(fe.q,{children:(0,g.jsx)("title",{children:"Phonebook"})}),(0,g.jsx)(y,{}),(0,g.jsx)(me,{}),t&&(0,g.jsx)(pe.Z,{}),n&&(0,g.jsx)(xe,{err:n}),(0,g.jsx)(le,{})]})}},4586:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),o=n(3329),i=(0,r.default)((0,o.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");t.Z=i},383:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),o=n(3329),i=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=i}}]);
//# sourceMappingURL=268.5ad6befc.chunk.js.map