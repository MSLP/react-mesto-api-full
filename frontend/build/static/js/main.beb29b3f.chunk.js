(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=n(8),r=(n(29),n(22)),l=n(2),u=n(3),p=n(23),h=n(24),d=n(0);var j=function(e){var t=e.component,n=e.loggedIn,a=Object(h.a)(e,["component","loggedIn"]);return Object(d.jsx)(u.b,{children:n?Object(d.jsx)(t,Object(p.a)({},a)):Object(d.jsx)(u.a,{to:"/sign-in"})})},b=n.p+"static/media/Vector.abb64ac9.svg";var m=function(e){var t=e.onSignOut,n=e.email,a=e.loggedIn,c=Object(u.g)(),s=Object(u.h)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"header__logo",src:b,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(d.jsxs)("div",{className:"header__user-info",children:[a&&Object(d.jsx)("p",{className:"header__email",children:n}),Object(d.jsx)("button",{onClick:function(){"/sign-up"===s.pathname?c.push("/sign-in"):"/sign-in"===s.pathname?c.push("/sign-up"):"/main"===s.pathname&&(c.push("/sign-in"),t())},className:"button header__button",children:"/sign-up"===s.pathname?"\u0412\u043e\u0439\u0442\u0438":"/sign-in"===s.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"/main"===s.pathname?"\u0412\u044b\u0439\u0442\u0438":""})]})]})},f=n.p+"static/media/Pencil.a086f758.svg",O=c.a.createContext();var _=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(O),i=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id}));return Object(d.jsxs)("div",{className:"element",children:[Object(d.jsx)("button",{onClick:function(){n(t)},className:"element__show-img button",children:Object(d.jsx)("img",{className:"element__img",src:t.link,alt:t.name})}),Object(d.jsxs)("div",{className:"element__text",children:[Object(d.jsx)("h2",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",onClick:function(){a(t)},className:"element__like button ".concat(r?"element__like_active":"")}),Object(d.jsx)("p",{className:"element__counter",children:t.likes.length})]})]}),i?Object(d.jsx)("button",{onClick:function(){s(t)},type:"button",className:"element__bin button"}):""]})};var x=Object(u.i)((function(e){var t=e.cards,n=e.onEditAvatar,a=e.onAddPlace,s=e.onEditProfile,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(O);return Object(d.jsxs)("main",{children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("button",{onClick:n,className:"button profile__edit-avatar",children:Object(d.jsxs)("div",{className:"profile__picture",children:[Object(d.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(d.jsx)("img",{className:"profile__overlay",src:f,alt:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__content",children:[Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("button",{onClick:s,type:"button",className:"profile__edit-button button"})]}),Object(d.jsx)("p",{className:"profile__description",children:l.about})]}),Object(d.jsx)("button",{onClick:a,type:"button",className:"profile__add-button button"})]}),Object(d.jsx)("section",{className:"elements",children:t.map((function(e){return Object(d.jsx)(_,{card:e,onCardLike:i,onCardClick:o,onCardDelete:r},e._id)}))})]})}));var g=function(e){var t=e.title,n=e.buttonText,a=e.onSubmit,s=c.a.useState(""),o=Object(l.a)(s,2),r=o[0],u=o[1],p=c.a.useState(""),h=Object(l.a)(p,2),j=h[0],b=h[1];return Object(d.jsxs)("div",{className:"auth-page",children:[Object(d.jsx)("h2",{className:"auth-page__title",children:t}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({password:j,email:r})},noValidate:!0,children:[Object(d.jsx)("input",{type:"email",className:"auth-page__input",onChange:function(e){u(e.target.value)},value:r||"",placeholder:"Email",required:!0}),Object(d.jsx)("input",{type:"password",className:"auth-page__input",onChange:function(e){b(e.target.value)},value:j||"",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("button",{type:"submit",className:"auth-page__save button",children:n}),"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"===t?Object(d.jsx)(i.b,{className:"auth-page__link",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"}):""]})]})};var v=Object(u.i)((function(e){var t=e.handleLogin;return Object(d.jsx)(g,{title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:t})}));var k=Object(u.i)((function(e){var t=e.onSubmit;return Object(d.jsx)(g,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:t})}));var C=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var N=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("section",{className:"popup popup_show-picture ".concat(t.isSelected?"popup_opened":""),children:Object(d.jsxs)("figure",{className:"popup__show-content",children:[Object(d.jsx)("button",{onClick:n,type:"button",className:"popup__close button"}),Object(d.jsx)("img",{className:"popup__picture",src:t.link,alt:t.name}),Object(d.jsx)("figcaption",{className:"popup__pic-title",children:t.name})]})})};var S=function(e){var t=e.title,n=e.name,a=e.isOpen,c=e.onClose,s=e.children,o=e.onSubmit,i=e.buttonText;return Object(d.jsx)("section",{className:"popup popup_".concat(n," ").concat(a?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:c,type:"button",className:"popup__close button"}),Object(d.jsx)("h2",{className:"popup__title",children:t}),Object(d.jsxs)("form",{onSubmit:o,className:"popup__form",noValidate:!0,children:[s,Object(d.jsx)("button",{type:"submit",className:"popup__save button",children:i})]})]})})};var y=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=c.a.useContext(O),o=c.a.useState(""),i=Object(l.a)(o,2),r=i[0],u=i[1],p=c.a.useState(""),h=Object(l.a)(p,2),j=h[0],b=h[1];return c.a.useEffect((function(){u(s.name),b(s.about)}),[s]),Object(d.jsxs)(S,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,about:j})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_profile-name",name:"profile-name",onChange:function(e){u(e.target.value)},value:r||"",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("span",{id:"profile-name-error",className:"error"}),Object(d.jsx)("input",{type:"text",className:"popup__input popup__input_profile-description",name:"profile-description",onChange:function(e){b(e.target.value)},value:j||"",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("span",{id:"profile-description-error",className:"error"})]})};var U=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=c.a.useRef();return Object(d.jsxs)(S,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value},s)},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsx)("input",{type:"url",className:"popup__input",name:"avatar-link",ref:s,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",required:!0}),Object(d.jsx)("span",{id:"avatar-link-error",className:"error"})]})};var T=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,s=c.a.useState(""),o=Object(l.a)(s,2),i=o[0],r=o[1],u=c.a.useState(""),p=Object(l.a)(u,2),h=p[0],j=p[1];return Object(d.jsxs)(S,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-picture",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,link:h},r,j)},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(d.jsx)("input",{type:"text",className:"popup__input",name:"photo-name",onChange:function(e){r(e.target.value)},value:i||"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(d.jsx)("span",{id:"photo-name-error",className:"error"}),Object(d.jsx)("input",{type:"url",className:"popup__input",name:"photo-link",onChange:function(e){j(e.target.value)},value:h||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(d.jsx)("span",{id:"photo-link-error",className:"error"})]})};var E=function(e){var t=e.isOpen,n=e.onClose,a=e.onDelete;return Object(d.jsx)(S,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-picture",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()},buttonText:"\u0414\u0430"})},P=n.p+"static/media/success-icon.1b6082f8.svg",R=n.p+"static/media/decline-icon.7c6a020b.svg";var L=function(e){var t=e.isOpen,n=e.onClose,a=e.isRegistered;return Object(d.jsx)("section",{className:"popup popup_info ".concat(t?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:n,type:"button",className:"popup__close popup__close_register button"}),Object(d.jsx)("img",{className:"popup__icon",src:a?P:R,alt:"\u0437\u043d\u0430\u0447\u043e\u043a \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(d.jsx)("p",{className:"popup__text",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},I=n(13),D=n(14),w=new(function(){function e(t){Object(I.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(D.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"f6f9ecaf-e6cf-427c-9bec-74dcbb4a47a1","Content-Type":"application/json"}}),A=new(function(){function e(t){Object(I.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(D.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"register",value:function(e){return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"login",value:function(e){return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"checkToken",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co",headers:{"Content-Type":"application/json"}});var q=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(l.a)(s,2),i=o[0],p=o[1],h=c.a.useState(!1),b=Object(l.a)(h,2),f=b[0],_=b[1],g=c.a.useState(!1),S=Object(l.a)(g,2),P=S[0],R=S[1],I=c.a.useState(!1),D=Object(l.a)(I,2),q=D[0],J=D[1],G=c.a.useState({isSelected:!1}),V=Object(l.a)(G,2),z=V[0],B=V[1],H=c.a.useState({}),M=Object(l.a)(H,2),F=M[0],Y=M[1],K=c.a.useState([]),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Z=c.a.useState({}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=c.a.useState(!1),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],oe=c.a.useState(!1),ie=Object(l.a)(oe,2),re=ie[0],le=ie[1],ue=c.a.useState(""),pe=Object(l.a)(ue,2),he=pe[0],de=pe[1],je=Object(u.g)();function be(){_(!1),a(!1),p(!1),R(!1),J(!1),B({isSelected:!1})}return c.a.useEffect((function(){var e=localStorage.getItem("token");e&&A.checkToken(e).then((function(e){se(!0),de(e.data.email),je.push("/main")})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){ce&&Promise.all([w.getUserInfo(),w.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];Y(n),X(a)})).catch((function(e){console.log(e)}))}),[ce]),Object(d.jsxs)(O.Provider,{value:F,children:[Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(m,{onSignOut:function(){se(!1),de(""),localStorage.removeItem("token")},email:he,loggedIn:ce}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(k,{onSubmit:function(e){A.register(e).then((function(e){le(!0),J(!0),je.push("./sign-in")})).catch((function(e){le(!1),J(!0),console.log(e)}))}})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(v,{handleLogin:function(e){A.login(e).then((function(t){de(e.email),se(!0),localStorage.setItem("token",t.token),je.push("/main")})).catch((function(e){console.log(e)}))}})}),Object(d.jsx)(j,{path:"/main",loggedIn:ce,component:x,cards:W,onEditProfile:function(){a(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){_(!0)},onCardClick:function(e){B({name:e.name,link:e.link,isSelected:!0})},onCardDelete:function(e){R(!0),te(e)},onCardLike:function(e){e.likes.some((function(e){return e._id===F._id}))?w.dislikeCard(e._id).then((function(t){X((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)})):w.likeCard(e._id).then((function(t){X((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(u.b,{path:"/",children:ce?Object(d.jsx)(u.a,{to:"/main"}):Object(d.jsx)(u.a,{to:"/sign-in"})})]}),Object(d.jsx)(C,{})]}),Object(d.jsx)(y,{isOpen:n,onClose:be,onUpdateUser:function(e){w.changeUserInfo(e).then((function(e){Y(e),be()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(U,{isOpen:f,onClose:be,onUpdateUser:function(e,t){w.changeAvatar(e).then((function(e){Y(e),be(),t.current.value=""})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(T,{isOpen:i,onClose:be,onAddPlace:function(e,t,n){w.addCard(e).then((function(e){X([e].concat(Object(r.a)(W))),be(),t(""),n("")})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(E,{isOpen:P,onClose:be,onDelete:function(){w.deleteCard(ee._id).then((function(){X((function(e){return e.filter((function(e){return e._id!==ee._id}))})),be()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(N,{card:z,onClose:be}),Object(d.jsx)(L,{isRegistered:re,isOpen:q,onClose:be})]})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("page"))}},[[36,1,2]]]);
//# sourceMappingURL=main.beb29b3f.chunk.js.map