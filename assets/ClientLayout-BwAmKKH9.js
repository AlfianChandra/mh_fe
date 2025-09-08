import{a as j,r as I,c as _,F as O,h as r,f as e,s as k,n as f,j as g,e as L,y as P,g as u,b as o,z as B,p as M,o as v,i as G,q as V,A as ne,B as q,l as Y,x as $,v as E,C as Z,D as Q,E as J,G as oe,H as ie,I as S,J as z,Y as re,K as le,L as F,M as ae,W as se,N as H,k as ce,T as pe,w as ue,O as K,P as de,Q as W}from"./index-CGPLAC_K.js";import{t as p}from"./themeStore-DJ6xiZ8M.js";import{s as U,a as C,r as X,O as fe,C as me,b as ge}from"./index-DVsPu8aV.js";import{l as i,u as T,e as N,m as D}from"./userStore-CKrNGZ3M.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";const he={class:"theme-op"},ve={class:"theme-color"},be={class:"colpreset-gr",style:{"margin-top":"0.4rem","justify-content":"space-evenly",gap:"0.3rem"}},_e=["onClick"],ye={class:"theme-preset"},Le={class:"preset-gr",style:{"margin-top":"0.4rem"}},we={class:"theme-preset"},xe=j({__name:"ThemeSwitcher",props:{title:{type:String,required:!1,default:""},icon:{type:String,required:!0}},setup(n){const t=n,a=M.customPresets,d=M.presets,s=I(null),l=x=>{s.value.toggle(x)};return(x,w)=>{const h=P("fasicon");return v(),_(O,null,[r(e(k),{onClick:l,style:f([{height:`${t.title?"inherit":"39px"}`,border:`1px solid ${e(p).isDark?e(p).activeDarkColor:e(p).activeLightColor}`},{display:"flex","align-items":"center",gap:"0.3rem"}]),class:"p-button-outlined"},{default:g(()=>[r(h,{icon:t.icon},null,8,["icon"]),L(u(t.title),1)]),_:1},8,["style"]),r(e(U),{ref_key:"themePopover",ref:s,style:f([{background:`${e(p).isDark?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)"}`},{"backdrop-filter":"blur(7px)","-webkit-backdrop-filter":"blur(7px)"}])},{default:g(()=>[o("div",he,[o("div",ve,[o("h5",{style:f({color:`${e(p).activePrimaryColor}`})},u(e(i).getText("THEME_COLOR")),5),o("div",be,[(v(!0),_(O,null,B(Object.keys(e(a)),(c,m)=>(v(),_("span",{key:m,style:f([{boxShadow:`${c===e(p).mThemeColor?"2px 2px 5px rgba(0,0,0,0.6)":"none"}`,backgroundColor:`${e(p).isDark?e(a)[c].semantic.colorScheme.dark.primary.color:e(a)[c].semantic.colorScheme.light.primary.color}`},{width:"35px",height:"35px","border-radius":"100px",cursor:"pointer",transition:"ease-in-out .2s"}]),onClick:y=>e(p).switchColor(c)},null,12,_e))),128))])]),o("div",ye,[o("h5",{style:f({color:`${e(p).activePrimaryColor}`})},u(e(i).getText("THEME_PRESET")),5),o("div",Le,[(v(!0),_(O,null,B(Object.keys(e(d)),(c,m)=>(v(),_("div",{key:m},[r(e(k),{style:{"font-size":"12px",width:"145px","text-transform":"capitalize",border:"none",height:"30px"},onClick:y=>e(p).switchPreset(c)},{default:g(()=>[e(p).mThemePreset===c?(v(),G(h,{key:0,icon:"check"})):V("",!0),L(" "+u(c),1)]),_:2},1032,["onClick"])]))),128))])]),o("div",we,[o("h5",{style:f({color:`${e(p).activePrimaryColor}`})},u(e(i).getText("THEME_MODE")),5),r(e(k),{style:{width:"fit-content","margin-top":"0.4rem","font-size":"12px",height:"30px"},onClick:w[0]||(w[0]=c=>e(p).toggleMode())},{default:g(()=>[r(h,{icon:e(p).isDark?"fas fa-sun":"fas fa-moon"},null,8,["icon"]),L(" "+u(e(p).isDark?`${e(i).getText("THEME_SCHEME_LIGHT")}`:e(i).getText("THEME_SCHEME_DARK")),1)]),_:1})])])]),_:1},8,["style"])],64)}}}),Ee=ee(xe,[["__scopeId","data-v-ff484ece"]]),Ie="/assets/favicon-CLQHdoDG.png",ke={class:"app-nav"},Ae={style:{display:"flex","flex-flow":"row wrap","justify-content":"space-between",position:"relative","z-index":"1",gap:"1rem"}},Te={style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"1rem"}},Ce={style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:".5rem"}},Re={href:"/",style:{display:"flex","align-items":"center","flex-flow":"row nowrap","text-decoration":"none"}},Oe=["src"],Pe={style:{display:"flex","flex-flow":"row wrap","align-items":"center","justify-content":"flex-start",gap:"1rem"}},Ne={style:{display:"flex","flex-flow":"row wrap","align-items":"center",gap:"1.5rem"}},Se={key:0,style:{display:"flex","flex-flow":"row nowrap",gap:".3rem"}},De={key:1,style:{display:"flex","flex-flow":"row nowrap",gap:".3rem"}},$e={style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem"}},Ge={style:{width:"15vw",display:"flex","flex-flow":"column",gap:"0.7rem"}},je={style:{margin:"0",padding:"0"}},ze={style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem"}},Ve=["src"],He={style:{width:"300px",display:"flex","flex-flow":"column",padding:"10px",gap:"1rem"}},Ue={style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem"}},Be={style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem"}},Me=j({__name:"ClientTopNavigation",setup(n){const t=ne(),a="Meeting Hint",d=I(null),s=I(null),l=h=>{d.value.toggle(h)},x=h=>{s.value.toggle(h)},w=h=>{t.require({target:h.currentTarget,message:i.getText("NAV_PROFILE_SIGNOUT_CONFIRM"),icon:"pi pi-exclamation-triangle",acceptLabel:i.getText("NAV_PROFILE_SIGNOUT_CONFIRM_ACCEPT"),rejectLabel:i.getText("NAV_PROFILE_SIGNOUT_CONFIRM_REJECT"),acceptClass:"p-button-outlined",accept:()=>{T.removeToken(),N.emit("signout")}})};return(h,c)=>{const m=P("fasicon");return v(),_("nav",ke,[o("div",Ae,[o("div",Te,[o("div",Ce,[o("a",Re,[o("img",{src:e(Ie),style:{width:"40px",height:"40px"}},null,8,Oe)]),o("b",{style:f({color:`${e(p).isDark?e(p).activeDarkColor:e(p).activeLightColor}`})},u(e(a)),5)]),o("span",{style:f([{background:`${e(p).activePrimaryColor}`},{height:"35px",width:"1px"}])},null,4),o("div",Pe,[o("a",{href:"/",class:"topnav-navitem",style:f({color:`${e(p).activePrimaryColor}`})},"Beranda",4),e(T).userToken?(v(),_("a",{key:0,href:"/app",class:"topnav-navitem",style:f({color:`${e(p).activePrimaryColor}`})},u(e(i).getText("NAV_ITEM_OPEN_APP")),5)):V("",!0)])]),o("div",Ne,[e(T).userToken?(v(),_("div",De,[o("div",$e,[o("img",{src:"https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",style:f([{border:`2px solid ${e(p).activePrimaryColor}`},{width:"35px",height:"35px","border-radius":"50px"}])},null,4),o("a",{onClick:x,style:f([{color:`${e(p).activePrimaryColor}`},{"text-decoration":"none"}]),href:"javascript:;"},u(e(T).userData.name),5),r(e(U),{ref_key:"profileOp",ref:s,style:f([{background:`${e(p).isDark?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)"}`},{"backdrop-filter":"blur(7px)","-webkit-backdrop-filter":"blur(7px)"}])},{default:g(()=>[o("div",Ge,[o("h5",je,[r(m,{icon:"user"}),L("   "+u(e(T).userData.name),1)]),r(e(k),{onClick:c[1]||(c[1]=y=>w(y)),style:{height:"40px"},class:"p-button-outlined"},{default:g(()=>[L(u(e(i).getText("NAV_PROFILE_SIGNOUT")),1)]),_:1})])]),_:1},8,["style"])])])):(v(),_("div",Se,[r(e(k),{onClick:c[0]||(c[0]=y=>e(N).emit("showLogin")),class:"p-button-outlined"},{default:g(()=>[L(u(e(i).getText("NAV_LOGIN_BTN")),1)]),_:1})])),o("span",{style:f([{background:`${e(p).activePrimaryColor}`},{height:"35px",width:"1px"}])},null,4),o("div",ze,[r(Ee,{title:"",icon:"palette"}),o("img",{src:e(D).activeLang==="id"?"https://cdn-icons-png.flaticon.com/512/11654/11654463.png":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png",style:{width:"30px",height:"30px",cursor:"pointer"},onClick:l},null,8,Ve),r(e(U),{ref_key:"langOp",ref:d,style:f([{background:`${e(p).isDark?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)"}`},{"backdrop-filter":"blur(7px)","-webkit-backdrop-filter":"blur(7px)"}])},{default:g(()=>[o("div",He,[o("label",{style:f([{color:`${e(p).activePrimaryColor}`},{"font-size":"12px","font-weight":"bold"}])},[r(m,{icon:"globe"}),L("  "+u(e(i).getText("LANG_HEADER")),1)],4),o("div",{style:{cursor:"pointer",display:"flex","flex-flow":"row nowrap","align-items":"center","justify-content":"space-between"},onClick:c[2]||(c[2]=y=>e(D).switchLang("id"))},[o("div",Ue,[c[4]||(c[4]=o("img",{src:"https://cdn-icons-png.flaticon.com/512/11654/11654463.png",style:{width:"25px",height:"25px"}},null,-1)),o("span",{style:f({fontWeight:`${e(D).activeLang==="id"?"bold":"normal"}`})},u(e(i).getText("LANG_OPT_INDONESIA")),5)])]),o("div",{style:{cursor:"pointer",display:"flex","flex-flow":"row nowrap","align-items":"center","justify-content":"space-between"},onClick:c[3]||(c[3]=y=>e(D).switchLang("en"))},[o("div",Be,[c[5]||(c[5]=o("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png",style:{width:"25px",height:"25px"}},null,-1)),o("span",{style:f({fontWeight:`${e(D).activeLang==="en"?"bold":"normal"}`})},u(e(i).getText("LANG_OPT_ENGLISH")),5)])])])]),_:1},8,["style"])])])]),o("div",{class:"glasseffect",style:f({background:`${e(p).isDark?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.4)"}`})},null,4)])}}}),Fe=ee(Me,[["__scopeId","data-v-16ac84f7"]]);var Ke=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,We={root:"p-iftalabel"},qe=q.extend({name:"iftalabel",style:Ke,classes:We}),Ye={name:"BaseIftaLabel",extends:Y,style:qe,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},A={name:"IftaLabel",extends:Ye,inheritAttrs:!1};function Ze(n,t,a,d,s,l){return v(),_("span",E({class:n.cx("root")},n.ptmi("root")),[$(n.$slots,"default")],16)}A.render=Ze;const Qe=()=>({validateEmail:s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)&&s.length>8&&s.length<40,validatePassword:s=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/.test(s),validatePhone:s=>/^62\d{8,14}$/.test(s),validateName:s=>/^[A-Za-z\s]{3,20}$/.test(s)}),R=Qe(),Je={style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},Xe={style:{padding:"0",margin:"0"}},et=j({__name:"LoginDialog",setup(n){const t=Z(),a=I({email:"",password:""}),d=I(!1),s=()=>{N.on("showLogin",()=>{d.value=!0})},l=()=>{if(!R.validateEmail(a.value.email)){t.add({severity:"error",...i.getAlert("FE_INVALID_EMAIL",!1).alert,life:3e3});return}if(!R.validatePassword(a.value.password)){t.add({severity:"error",...i.getAlert("FE_INVALID_PASSWORD").alert,life:3e3});return}X.authPost("login",a.value).then(w=>{d.value=!1,T.setToken(w.data.payload.token),t.add({severity:"success",...i.getAlert(w.successCode).alert,life:3e3})}).catch(w=>{t.add({severity:"error",...i.getAlert(w).alert,life:3e3})})},x=()=>{d.value=!1,N.emit("showRegister")};return Q(()=>{s()}),(w,h)=>(v(),G(e(J),{visible:d.value,"onUpdate:visible":h[2]||(h[2]=c=>d.value=c),header:e(i).getText("LOGIN_DIALOG_MODAL_HEADER"),draggable:!0,style:f([{background:`${e(p).isDark?"rgba(0,0,0,0.7)":"rgba(255,255,255,0.7)"}`},{"backdrop-filter":"blur(4px)","-webkit-backdrop-filter":"blur(4px)",width:"30vw"}])},{default:g(()=>[o("div",Je,[r(e(A),null,{default:g(()=>[o("label",null,u(e(i).getText("LOGIN_DIALOG_INPUT_LABEL_EMAIL")),1),r(e(C),{modelValue:a.value.email,"onUpdate:modelValue":h[0]||(h[0]=c=>a.value.email=c),style:{width:"100%"},placeholder:e(i).getText("LOGIN_DIALOG_INPUT_PLC_EMAIL")},null,8,["modelValue","placeholder"])]),_:1}),r(e(A),null,{default:g(()=>[o("label",null,u(e(i).getText("LOGIN_DIALOG_INPUT_LABEL_PASSWORD")),1),r(e(C),{modelValue:a.value.password,"onUpdate:modelValue":h[1]||(h[1]=c=>a.value.password=c),style:{width:"100%"},type:"password",placeholder:e(i).getText("LOGIN_DIALOG_INPUT_PLC_PASSWORD")},null,8,["modelValue","placeholder"])]),_:1}),r(e(k),{onClick:l,style:{"margin-bottom":"1rem"}},{default:g(()=>[L(u(e(i).getText("LOGIN_DIALOG_SUBMIT_BTN")),1)]),_:1}),o("p",Xe,[L(u(e(i).getText("LOGIN_DIALOG_DOESN_T_HAVE_ACCOUNT"))+" ",1),o("a",{onClick:x,href:"javascript:;",style:f([{"text-decoration":"none","font-weight":"bold"},{color:`${e(p).activePrimaryColor}`}])},u(e(i).getText("LOGIN_DIALOG_REGISTER")),5)])])]),_:1},8,["visible","header","style"]))}});var tt=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`,nt={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},ot=q.extend({name:"confirmpopup",style:tt,classes:nt}),it={name:"BaseConfirmPopup",extends:Y,props:{group:String},style:ot,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},te={name:"ConfirmPopup",extends:it,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var t=this;this.confirmListener=function(a){a&&a.group===t.group&&(t.confirmation=a,t.target=a.target,t.confirmation.onShow&&t.confirmation.onShow(),t.visible=!0)},this.closeListener=function(){t.visible=!1,t.confirmation=null},S.on("confirm",this.confirmListener),S.on("close",this.closeListener)},beforeUnmount:function(){S.off("confirm",this.confirmListener),S.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(H.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(t){(t.code==="Space"||t.code==="Enter"||t.code==="NumpadEnter")&&(this.accept(),z(this.target),t.preventDefault())},onRejectKeydown:function(t){(t.code==="Space"||t.code==="Enter"||t.code==="NumpadEnter")&&(this.reject(),z(this.target),t.preventDefault())},onEnter:function(t){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),H.set("overlay",t,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,z(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(t){H.clear(t)},alignOverlay:function(){le(this.container,this.target,!1);var t=F(this.container),a=F(this.target),d=0;t.left<a.left&&(d=a.left-t.left),this.container.style.setProperty(ae("confirmpopup.arrow.left").name,"".concat(d,"px")),t.top<a.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&se(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(a){t.visible&&t.container&&!t.container.contains(a.target)&&!t.isTargetClicked(a)?(t.confirmation.onHide&&t.confirmation.onHide(),t.visible=!1):t.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new me(this.target,function(){t.visible&&(t.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.visible&&!re()&&(t.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var t=this.container.querySelector("[autofocus]");t&&t.focus({preventScroll:!0})},isTargetClicked:function(t){return this.target&&(this.target===t.target||this.target.contains(t.target))},containerRef:function(t){this.container=t},onOverlayClick:function(t){fe.emit("overlay-click",{originalEvent:t,target:this.target})},onOverlayKeydown:function(t){t.code==="Escape"&&(S.emit("close",this.closeListener),z(this.target))}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var t,a=this.confirmation;return a.acceptLabel||((t=a.acceptProps)===null||t===void 0?void 0:t.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var t,a=this.confirmation;return a.rejectLabel||((t=a.rejectProps)===null||t===void 0?void 0:t.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var t;return this.confirmation?this.confirmation.acceptIcon:(t=this.confirmation)!==null&&t!==void 0&&t.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var t;return this.confirmation?this.confirmation.rejectIcon:(t=this.confirmation)!==null&&t!==void 0&&t.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:k,Portal:ie},directives:{focustrap:oe}},rt=["aria-modal"];function lt(n,t,a,d,s,l){var x=P("Button"),w=P("Portal"),h=ce("focustrap");return v(),G(w,null,{default:g(function(){return[r(pe,E({name:"p-confirmpopup",onEnter:l.onEnter,onAfterEnter:l.onAfterEnter,onLeave:l.onLeave,onAfterLeave:l.onAfterLeave},n.ptm("transition")),{default:g(function(){var c,m,y;return[s.visible?ue((v(),_("div",E({key:0,ref:l.containerRef,role:"alertdialog",class:n.cx("root"),"aria-modal":s.visible,onClick:t[2]||(t[2]=function(){return l.onOverlayClick&&l.onOverlayClick.apply(l,arguments)}),onKeydown:t[3]||(t[3]=function(){return l.onOverlayKeydown&&l.onOverlayKeydown.apply(l,arguments)})},n.ptmi("root")),[n.$slots.container?$(n.$slots,"container",{key:0,message:s.confirmation,acceptCallback:l.accept,rejectCallback:l.reject}):(v(),_(O,{key:1},[n.$slots.message?(v(),G(K(n.$slots.message),{key:1,message:s.confirmation},null,8,["message"])):(v(),_("div",E({key:0,class:n.cx("content")},n.ptm("content")),[$(n.$slots,"icon",{},function(){return[n.$slots.icon?(v(),G(K(n.$slots.icon),{key:0,class:de(n.cx("icon"))},null,8,["class"])):s.confirmation.icon?(v(),_("span",E({key:1,class:[s.confirmation.icon,n.cx("icon")]},n.ptm("icon")),null,16)):V("",!0)]}),o("span",E({class:n.cx("message")},n.ptm("message")),u(s.confirmation.message),17)],16)),o("div",E({class:n.cx("footer")},n.ptm("footer")),[r(x,E({class:[n.cx("pcRejectButton"),s.confirmation.rejectClass],autofocus:s.autoFocusReject,unstyled:n.unstyled,size:((c=s.confirmation.rejectProps)===null||c===void 0?void 0:c.size)||"small",text:((m=s.confirmation.rejectProps)===null||m===void 0?void 0:m.text)||!1,onClick:t[0]||(t[0]=function(b){return l.reject()}),onKeydown:l.onRejectKeydown},s.confirmation.rejectProps,{label:l.rejectLabel,pt:n.ptm("pcRejectButton")}),W({_:2},[l.rejectIcon||n.$slots.rejecticon?{name:"icon",fn:g(function(b){return[$(n.$slots,"rejecticon",{},function(){return[o("span",E({class:[l.rejectIcon,b.class]},n.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),r(x,E({class:[n.cx("pcAcceptButton"),s.confirmation.acceptClass],autofocus:s.autoFocusAccept,unstyled:n.unstyled,size:((y=s.confirmation.acceptProps)===null||y===void 0?void 0:y.size)||"small",onClick:t[1]||(t[1]=function(b){return l.accept()}),onKeydown:l.onAcceptKeydown},s.confirmation.acceptProps,{label:l.acceptLabel,pt:n.ptm("pcAcceptButton")}),W({_:2},[l.acceptIcon||n.$slots.accepticon?{name:"icon",fn:g(function(b){return[$(n.$slots,"accepticon",{},function(){return[o("span",E({class:[l.acceptIcon,b.class]},n.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,rt)),[[h]]):V("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}te.render=lt;const at={style:{display:"flex","flex-flow":"column",gap:"1rem"}},st={style:{margin:"0",padding:"0"}},ct={style:{"font-size":"12px",width:"380px"}},pt={style:{padding:"0",margin:"0"}},ut=j({__name:"RegisterDialog",setup(n){const t=Z(),a=I(!1),d=I({name:"",email:"",password:"",phone:""}),s=I(null),l=I(!1),x=()=>{N.on("showRegister",()=>{l.value=!0})},w=()=>{if(R.validateName(d.value.name)===!1){t.add({severity:"error",...i.getAlert("FE_INVALID_NAME").alert,life:3e3});return}if(!R.validateEmail(d.value.email)){t.add({severity:"error",...i.getAlert("FE_INVALID_EMAIL",!1).alert,life:3e3});return}if(!R.validatePassword(d.value.password)){t.add({severity:"error",...i.getAlert("FE_INVALID_PASSWORD",!1).alert,life:3e3});return}if(!R.validatePhone(d.value.phone)){t.add({severity:"error",...i.getAlert("FE_INVALID_PHONE",!1).alert,life:3e3});return}if(!a.value){t.add({severity:"error",...i.getAlert("FE_PRIVACY_AGREEMENT_REQUIRED").alert,life:3e3});return}X.authPost("register",d.value).then(c=>{d.value={name:"",email:"",password:"",phone:""},t.add({severity:"success",...i.getAlert(c.data.success_code).alert,life:3e3}),l.value=!1}).catch(c=>{t.add({severity:"error",...i.getAlert(c).alert,life:3e3})})},h=()=>{l.value=!1,N.emit("showLogin")};return Q(()=>{x()}),(c,m)=>{const y=P("fasicon");return v(),_(O,null,[r(e(J),{visible:l.value,"onUpdate:visible":m[6]||(m[6]=b=>l.value=b),draggable:!0,header:e(i).getText("REGISTER_DIALOG_HEADER"),style:f([{background:`${e(p).isDark?"rgba(0,0,0,0.7)":"rgba(255,255,255,0.7)"}`},{"backdrop-filter":"blur(4px)","-webkit-backdrop-filter":"blur(4px)",width:"30vw"}])},{default:g(()=>[o("div",at,[o("p",st,u(e(i).getText("REGISTER_DIALOG_SUBHEADER")),1),r(e(A),null,{default:g(()=>[o("label",null,u(e(i).getText("REGISTER_DIALOG_INPUT_NAME_LABEL")),1),r(e(C),{modelValue:d.value.name,"onUpdate:modelValue":m[0]||(m[0]=b=>d.value.name=b),style:{width:"100%"},placeholder:e(i).getText("REGISTER_DIALOG_INPUT_NAME_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:f([{color:`${e(p).activePrimaryColor}`},{"font-size":"12px"}])},[r(y,{icon:"info-circle"}),L(" "+u(e(i).getText("REGISTER_DIALOG_NAME_HINT")),1)],4)]),_:1}),r(e(A),null,{default:g(()=>[o("label",null,u(e(i).getText("REGISTER_DIALOG_INPUT_EMAIL_LABEL")),1),r(e(C),{modelValue:d.value.email,"onUpdate:modelValue":m[1]||(m[1]=b=>d.value.email=b),style:{width:"100%"},placeholder:e(i).getText("REGISTER_DIALOG_INPUT_EMAIL_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:f([{color:`${e(p).activePrimaryColor}`},{"font-size":"12px"}])},[r(y,{icon:"info-circle"}),L(" "+u(e(i).getText("REGISTER_DIALOG_EMAIL_HINT")),1)],4)]),_:1}),r(e(A),null,{default:g(()=>[o("label",null,u(e(i).getText("REGISTER_DIALOG_INPUT_PASSWORD_LABEL")),1),r(e(C),{modelValue:d.value.password,"onUpdate:modelValue":m[2]||(m[2]=b=>d.value.password=b),style:{width:"100%"},type:"password",placeholder:e(i).getText("REGISTER_DIALOG_INPUT_PASSWORD_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:f([{color:`${e(p).activePrimaryColor}`},{"font-size":"12px"}])},[r(y,{icon:"info-circle"}),L(" "+u(e(i).getText("REGISTER_DIALOG_PASSWORD_HINT")),1)],4)]),_:1}),r(e(A),null,{default:g(()=>[o("label",null,u(e(i).getText("REGISTER_DIALOG_INPUT_PHONE_LABEL")),1),r(e(C),{modelValue:d.value.phone,"onUpdate:modelValue":m[3]||(m[3]=b=>d.value.phone=b),style:{width:"100%"},placeholder:e(i).getText("REGISTER_DIALOG_INPUT_PHONE_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:f([{color:`${e(p).activePrimaryColor}`},{"font-size":"12px"}])},[r(y,{icon:"info-circle"}),L(" "+u(e(i).getText("REGISTER_DIALOG_PHONE_HINT")),1)],4)]),_:1}),o("div",{style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem"},ref_key:"tosBox",ref:s},[r(e(ge),{modelValue:a.value,"onUpdate:modelValue":m[4]||(m[4]=b=>a.value=b)},null,8,["modelValue"]),o("span",ct,u(e(i).getText("REGISTER_DIALOG_PRIVACY_AGREEMENT")),1)],512),r(e(k),{onClick:m[5]||(m[5]=b=>w())},{default:g(()=>[L(u(e(i).getText("REGISTER_DIALOG_BUTTON_REGISTER")),1)]),_:1}),o("p",pt,[L(u(e(i).getText("REGISTER_DIALOG_HAVE_ACCOUNT"))+" ",1),o("a",{onClick:h,href:"javascript:;",style:f([{"text-decoration":"none","font-weight":"bold"},{color:`${e(p).activePrimaryColor}`}])},u(e(i).getText("REGISTER_DIALOG_TO_LOGIN")),5)])])]),_:1},8,["visible","header","style"]),r(e(te))],64)}}}),dt={style:{width:"100%","box-sizing":"border-box","padding-top":"3.5rem"}},bt=j({__name:"ClientLayout",setup(n){return(t,a)=>{const d=P("RouterView");return v(),_(O,null,[r(Fe),o("div",dt,[r(d)]),r(et),r(ut)],64)}}});export{bt as default};
