"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{9715:function(n,t,o){o.r(t),o.d(t,{default:function(){return V}});var e,r,i,a,s,l,p,x,d,c,g,u,f,h=o(9434),m=o(2791),b=function(n){return n.tweets.isLoading},A=function(n){return n.tweets.error},w=o(5988),v=o(5218),Z=o(9439),j=o(168),k=o(5706),E=k.Z.div(e||(e=(0,j.Z)(["\n  // position: relative;\n  height: 460px;\n  width: 380px;\n  // justify-content: center;\n  border: none;\n  border-radius: 20px;\n  background: var(--card-bg);\n  box-shadow: var(--card-shadow);\n"]))),S=k.Z.div(r||(r=(0,j.Z)(["\n  height: 218px;\n  position: relative;\n  top: 0;\n  ::after {\n    content: '';\n    width: 100%;\n    height: 8px;\n    position: absolute;\n    bottom: 28px;\n    left: 0;\n    background: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),Y=k.Z.img(i||(i=(0,j.Z)(["\n  position: absolute;\n  top: -10px;\n  left: 20px;\n"]))),F=k.Z.img(a||(a=(0,j.Z)(["\n  margin: 28px 36px 16px;\n"]))),Q=k.Z.div(s||(s=(0,j.Z)(["\n  position: absolute;\n  bottom: 28px;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  z-index: 5;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n"]))),y=k.Z.img(l||(l=(0,j.Z)(["\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n"]))),B=k.Z.div(p||(p=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 36px 16px 36px;\n  align-items: center;\n"]))),C=k.Z.p(x||(x=(0,j.Z)(["\n  color: var(--light-text-color);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  margin-bottom: 16px;\n"]))),T=k.Z.p(d||(d=(0,j.Z)(["\n  color: var(--light-text-color);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  margin-bottom: 26px;\n"]))),q=k.Z.button(c||(c=(0,j.Z)(["\n  padding-top: 14px;\n  padding-bottom: 14px;\n  width: 196px;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n  font-family: Montserrat;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1, 2;\n  color: var(--dark-text-color);\n  text-transform: uppercase;\n  box-shadow: var(--btn-shadow);\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),D=o.p+"static/media/picture.032662a2a907475127d7.png",N=o(184),I=function(n){var t=n.item,o=(0,h.I0)(),e=t.id,r={followers:t.followers+(t.isFollowing?-1:1),isFollowing:!t.isFollowing};return(0,N.jsxs)(E,{children:[(0,N.jsxs)(S,{children:[(0,N.jsx)(Y,{src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg=="),alt:"logo"}),(0,N.jsx)(F,{src:"".concat(D),alt:"picture"}),(0,N.jsx)(Q,{children:(0,N.jsx)(y,{src:t.avatar,alt:t.user})})]}),(0,N.jsxs)(B,{children:[(0,N.jsxs)(C,{children:["tweets: ",t.tweets]}),(0,N.jsxs)(T,{children:["followers: ",t.followers.toLocaleString("en-US")]}),(0,N.jsx)(q,{onClick:function(){return o((0,w.iF)({id:e,newData:r}))},style:{backgroundColor:t.isFollowing?"#5CD3A8":"#EBD8FF"},children:t.isFollowing?"Following":"Follow"})]})]})},L=k.Z.ul(g||(g=(0,j.Z)(["\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 0;\n\n  margin-bottom: 40px;\n"]))),R=k.Z.li(u||(u=(0,j.Z)(["\n  // padding-left: 8px;\n  // padding-right: 8px;\n  // gap: 40px;\n  align-items: center;\n  justify-content: space-between;\n"]))),z=k.Z.button(f||(f=(0,j.Z)(["\ndisplay: block;\nmargin: 0 auto;\npadding-top: 14px;\npadding-bottom: 14px;\nwidth: 196px;\nborder: none;\ncursor: pointer;\nborder-radius: 10px;\nfont-family: Montserrat;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 1,2;\ntext-transform: uppercase;\ncolor: var(--dark-text-color);\nbackground-color: var(--btn-tweets-bg-color);\nbox-shadow: var(--btn-shadow);\n\ntransition: color 300ms ease-in-out, background-color 300ms ease-in-out;\n&:hover {\n    // transform: scale(1.05);\n    color: var(--light-text-color);\n    background-color: #5736a3;\n"]))),O=function(){var n,t=(0,h.v9)((function(n){return n.tweets})).items,o=(0,h.v9)((function(n){return n.tweets})).page;console.log(typeof t),console.log(t),console.log(o);var e=(0,m.useState)(3),r=(0,Z.Z)(e,2),i=r[0],a=r[1];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L,{children:null===t||void 0===t||null===(n=t.slice(0,i))||void 0===n?void 0:n.map((function(n){return(0,N.jsx)(R,{children:(0,N.jsx)(I,{item:n})},n.id)}))}),i<(null===t||void 0===t?void 0:t.length)&&(0,N.jsx)(z,{onClick:function(){a(i+3)},children:"Load more"})]})},U=o(8924),V=function(){var n=(0,h.I0)(),t=(0,h.v9)(b),o=(0,h.v9)(A);return(0,m.useEffect)((function(){n((0,w.dv)())}),[n]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(O,{}),t&&!o&&(0,N.jsx)(U.Z,{}),(0,N.jsx)(v.x7,{toastOptions:{style:{border:"2px solid #72b372",padding:"15px",marginTop:"30px"}}})]})}}}]);
//# sourceMappingURL=518.4ee83da8.chunk.js.map