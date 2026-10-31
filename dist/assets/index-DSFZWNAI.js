(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="169",Oc=0,So=1,Bc=2,Xl=1,ql=2,Pn=3,Yn=0,je=1,Ze=2,In=0,Bi=1,_n=2,wo=3,bo=4,zc=5,oi=100,kc=101,Hc=102,Gc=103,Vc=104,Wc=200,Xc=201,qc=202,Yc=203,ha=204,ua=205,jc=206,Kc=207,$c=208,Zc=209,Jc=210,Qc=211,th=212,eh=213,nh=214,da=0,fa=1,pa=2,Gi=3,ma=4,ga=5,_a=6,xa=7,Yl=0,ih=1,sh=2,Xn=0,jl=1,Kl=2,$l=3,to=4,rh=5,Zl=6,Jl=7,Ql=300,Vi=301,Wi=302,va=303,Ma=304,_r=306,_s=1e3,ci=1001,ya=1002,Je=1003,ah=1004,ws=1005,pn=1006,Ar=1007,hi=1008,Un=1009,tc=1010,ec=1011,xs=1012,eo=1013,ui=1014,wn=1015,Dn=1016,no=1017,io=1018,Xi=1020,nc=35902,ic=1021,sc=1022,gn=1023,rc=1024,ac=1025,zi=1026,qi=1027,so=1028,ro=1029,oc=1030,ao=1031,oo=1033,er=33776,nr=33777,ir=33778,sr=33779,Sa=35840,wa=35841,ba=35842,Ea=35843,Ta=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,La=37810,Ia=37811,Da=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Ga=37821,rr=36492,Va=36494,Wa=36495,lc=36283,Xa=36284,qa=36285,Ya=36286,oh=3200,lh=3201,cc=0,ch=1,Wn="",Ye="srgb",jn="srgb-linear",lo="display-p3",xr="display-p3-linear",cr="linear",ye="srgb",hr="rec709",ur="p3",mi=7680,Eo=519,hh=512,uh=513,dh=514,hc=515,fh=516,ph=517,mh=518,gh=519,ja=35044,To="300 es",Ln=2e3,dr=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,Ka=180/Math.PI;function qn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function $e(s,t,e){return Math.max(t,Math.min(e,s))}function _h(s,t){return(s%t+t)%t}function Rr(s,t,e){return(1-e)*s+e*t}function Sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],x=i[0],f=i[3],p=i[6],y=i[1],M=i[4],b=i[7],I=i[2],P=i[5],C=i[8];return r[0]=a*x+o*y+l*I,r[3]=a*f+o*M+l*P,r[6]=a*p+o*b+l*C,r[1]=c*x+h*y+d*I,r[4]=c*f+h*M+d*P,r[7]=c*p+h*b+d*C,r[2]=u*x+m*y+g*I,r[5]=u*f+m*M+g*P,r[8]=u*p+m*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Jt;function uc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xh(){const s=fr("canvas");return s.style.display="block",s}const Ao={};function ar(s){s in Ao||(Ao[s]=!0,console.warn(s))}function vh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Co=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ro=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[jn]:{transfer:cr,primaries:hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ye]:{transfer:ye,primaries:hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xr]:{transfer:cr,primaries:ur,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ro),fromReference:s=>s.applyMatrix3(Co)},[lo]:{transfer:ye,primaries:ur,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ro),fromReference:s=>s.applyMatrix3(Co).convertLinearToSRGB()}},Sh=new Set([jn,xr]),he={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Sh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ns[t].toReference,i=ns[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ns[s].primaries},getTransfer:function(s){return s===Wn?cr:ns[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(ns[t].luminanceCoefficients)}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gi;class wh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gi===void 0&&(gi=fr("canvas")),gi.width=t.width,gi.height=t.height;const n=gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bh=0;class dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ir(i[a].image)):r.push(Ir(i[a]))}else r=Ir(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ir(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Ve extends Ki{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=ci,i=ci,r=pn,a=hi,o=gn,l=Un,c=Ve.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=qn(),this.name="",this.source=new dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Ql;Ve.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],x=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,b=(m+1)/2,I=(p+1)/2,P=(h+u)/4,C=(d+x)/4,D=(g+f)/4;return M>b&&M>I?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=P/n,r=C/n):b>I?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=P/i,r=D/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=D/r),this.set(n,i,r,e),this}let y=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fc extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==m||h!==g){let f=1-o;const p=l*u+c*m+h*g+d*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const I=Math.sqrt(M),P=Math.atan2(I,p*y);f=Math.sin(f*P)/I,o=Math.sin(o*P)/I}const b=o*y;if(l=l*f+u*b,c=c*f+m*b,h=h*f+g*b,d=d*f+x*b,f===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new T,Po=new $i;class di{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Es.subVectors(this.max,is),_i.subVectors(t.a,is),xi.subVectors(t.b,is),vi.subVectors(t.c,is),On.subVectors(xi,_i),Bn.subVectors(vi,xi),$n.subVectors(_i,vi);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-$n.z,$n.y,On.z,0,-On.x,Bn.z,0,-Bn.x,$n.z,0,-$n.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-$n.y,$n.x,0];return!Ur(e,_i,xi,vi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,_i,xi,vi,Es))?!1:(Ts.crossVectors(On,Bn),e=[Ts.x,Ts.y,Ts.z],Ur(e,_i,xi,vi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new T,new T,new T,new T,new T,new T,new T,new T],un=new T,bs=new di,_i=new T,xi=new T,vi=new T,On=new T,Bn=new T,$n=new T,is=new T,Es=new T,Ts=new T,Zn=new T;function Ur(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zn.fromArray(s,r);const o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ch=new di,ss=new T,Nr=new T;class fi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ch.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Nr)),this.expandByPoint(ss.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new T,Fr=new T,As=new T,zn=new T,Or=new T,Cs=new T,Br=new T;class co{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Fr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=zn.dot(this.direction),l=-zn.dot(As),c=zn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Fr).addScaledVector(As,u),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){Or.subVectors(e,t),Cs.subVectors(n,t),Br.crossVectors(Or,Cs);let a=this.direction.dot(Br),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const l=o*this.direction.dot(Cs.crossVectors(zn,Cs));if(l<0)return null;const c=o*this.direction.dot(Or.cross(zn));if(c<0||l+c>a)return null;const h=-o*zn.dot(Br);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,r,a,o,l,c,h,d,u,m,g,x,f){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,m,g,x,f)}set(t,e,n,i,r,a,o,l,c,h,d,u,m,g,x,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,m=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,m=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ph)}lookAt(t,e,n){const i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),kn.crossVectors(n,nn),kn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),kn.crossVectors(n,nn)),kn.normalize(),Rs.crossVectors(nn,kn),i[0]=kn.x,i[4]=Rs.x,i[8]=nn.x,i[1]=kn.y,i[5]=Rs.y,i[9]=nn.y,i[2]=kn.z,i[6]=Rs.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],x=n[6],f=n[10],p=n[14],y=n[3],M=n[7],b=n[11],I=n[15],P=i[0],C=i[4],D=i[8],$=i[12],_=i[1],w=i[5],G=i[9],W=i[13],K=i[2],nt=i[6],X=i[10],it=i[14],j=i[3],vt=i[7],St=i[11],Pt=i[15];return r[0]=a*P+o*_+l*K+c*j,r[4]=a*C+o*w+l*nt+c*vt,r[8]=a*D+o*G+l*X+c*St,r[12]=a*$+o*W+l*it+c*Pt,r[1]=h*P+d*_+u*K+m*j,r[5]=h*C+d*w+u*nt+m*vt,r[9]=h*D+d*G+u*X+m*St,r[13]=h*$+d*W+u*it+m*Pt,r[2]=g*P+x*_+f*K+p*j,r[6]=g*C+x*w+f*nt+p*vt,r[10]=g*D+x*G+f*X+p*St,r[14]=g*$+x*W+f*it+p*Pt,r[3]=y*P+M*_+b*K+I*j,r[7]=y*C+M*w+b*nt+I*vt,r[11]=y*D+M*G+b*X+I*St,r[15]=y*$+M*W+b*it+I*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],x=t[7],f=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*m-n*l*m)+x*(+e*l*m-e*c*u+r*a*u-i*a*m+i*c*h-r*l*h)+f*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],x=t[13],f=t[14],p=t[15],y=d*f*c-x*u*c+x*l*m-o*f*m-d*l*p+o*u*p,M=g*u*c-h*f*c-g*l*m+a*f*m+h*l*p-a*u*p,b=h*x*c-g*d*c+g*o*m-a*x*m-h*o*p+a*d*p,I=g*d*l-h*x*l-g*o*u+a*x*u+h*o*f-a*d*f,P=e*y+n*M+i*b+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=y*C,t[1]=(x*u*r-d*f*r-x*i*m+n*f*m+d*i*p-n*u*p)*C,t[2]=(o*f*r-x*l*r+x*i*c-n*f*c-o*i*p+n*l*p)*C,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*m-n*l*m)*C,t[4]=M*C,t[5]=(h*f*r-g*u*r+g*i*m-e*f*m-h*i*p+e*u*p)*C,t[6]=(g*l*r-a*f*r-g*i*c+e*f*c+a*i*p-e*l*p)*C,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*m+e*l*m)*C,t[8]=b*C,t[9]=(g*d*r-h*x*r-g*n*m+e*x*m+h*n*p-e*d*p)*C,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*m-e*o*m)*C,t[12]=I*C,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*f+e*d*f)*C,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*f-e*o*f)*C,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,g=r*d,x=a*h,f=a*d,p=o*d,y=l*c,M=l*h,b=l*d,I=n.x,P=n.y,C=n.z;return i[0]=(1-(x+p))*I,i[1]=(m+b)*I,i[2]=(g-M)*I,i[3]=0,i[4]=(m-b)*P,i[5]=(1-(u+p))*P,i[6]=(f+y)*P,i[7]=0,i[8]=(g+M)*C,i[9]=(f-y)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Mi.set(i[0],i[1],i[2]).length();const a=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const c=1/r,h=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Ln){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,g;if(o===Ln)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===dr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Ln){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,m=(n+i)*h;let g,x;if(o===Ln)g=(a+r)*d,x=-2*d;else if(o===dr)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new T,dn=new me,Rh=new T(0,0,0),Ph=new T(1,1,1),kn=new T,Rs=new T,nn=new T,Lo=new me,Io=new $i;class bn{constructor(t=0,e=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lh=0;const Do=new T,yi=new $i,An=new me,Ps=new T,rs=new T,Ih=new T,Dh=new $i,Uo=new T(1,0,0),No=new T(0,1,0),Fo=new T(0,0,1),Oo={type:"added"},Uh={type:"removed"},Si={type:"childadded",child:null},zr={type:"childremoved",child:null};class Le extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new T,e=new bn,n=new $i,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Do.copy(t).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(rs,Ps,this.up):An.lookAt(Ps,rs,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(An),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oo),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oo),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new T(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new T,Cn=new T,kr=new T,Rn=new T,wi=new T,bi=new T,Bo=new T,Hr=new T,Gr=new T,Vr=new T,Wr=new ve,Xr=new ve,qr=new ve;class cn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fn.subVectors(t,e),i.cross(fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){fn.subVectors(i,e),Cn.subVectors(n,e),kr.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Cn),l=fn.dot(kr),c=Cn.dot(Cn),h=Cn.dot(kr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Wr.setScalar(0),Xr.setScalar(0),qr.setScalar(0),Wr.fromBufferAttribute(t,e),Xr.fromBufferAttribute(t,n),qr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Wr,r.x),a.addScaledVector(Xr,r.y),a.addScaledVector(qr,r.z),a}static isFrontFacing(t,e,n,i){return fn.subVectors(n,e),Cn.subVectors(t,e),fn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),fn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;wi.subVectors(i,n),bi.subVectors(r,n),Hr.subVectors(t,n);const l=wi.dot(Hr),c=bi.dot(Hr);if(l<=0&&c<=0)return e.copy(n);Gr.subVectors(t,i);const h=wi.dot(Gr),d=bi.dot(Gr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(wi,a);Vr.subVectors(t,r);const m=wi.dot(Vr),g=bi.dot(Vr);if(g>=0&&m<=g)return e.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(bi,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Bo.subVectors(r,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Bo,o);const p=1/(f+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(wi,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=_h(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yr(a,r,t+1/3),this.g=Yr(a,r,t),this.b=Yr(a,r,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return he.fromWorkingColorSpace(He.copy(this),t),Math.round($e(He.r*255,0,255))*65536+Math.round($e(He.g*255,0,255))*256+Math.round($e(He.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(He.copy(this),e);const n=He.r,i=He.g,r=He.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ye){he.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Ls);const n=Rr(Hn.h,Ls.h,e),i=Rr(Hn.s,Ls.s,e),r=Rr(Hn.l,Ls.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new jt;jt.NAMES=mc;let Nh=0;class Kn extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Bi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new T,Is=new Ot;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class gc extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _c extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fh=0;const on=new me,jr=new Le,Ei=new T,sn=new di,as=new di,Ne=new T;class Ee extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uc(t)?_c:gc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(sn.min,as.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,as.max),sn.expandByPoint(Ne)):(sn.expandByPoint(as.min),sn.expandByPoint(as.max))}sn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ne.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Ne.add(Ei)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new T,l[D]=new T;const c=new T,h=new T,d=new T,u=new Ot,m=new Ot,g=new Ot,x=new T,f=new T;function p(D,$,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,$),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,D),m.fromBufferAttribute(r,$),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),m.sub(u),g.sub(u);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),o[D].add(x),o[$].add(x),o[_].add(x),l[D].add(f),l[$].add(f),l[_].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,$=y.length;D<$;++D){const _=y[D],w=_.start,G=_.count;for(let W=w,K=w+G;W<K;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const M=new T,b=new T,I=new T,P=new T;function C(D){I.fromBufferAttribute(i,D),P.copy(I);const $=o[D];M.copy($),M.sub(I.multiplyScalar(I.dot($))).normalize(),b.crossVectors(P,$);const w=b.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,w)}for(let D=0,$=y.length;D<$;++D){const _=y[D],w=_.start,G=_.count;for(let W=w,K=w+G;W<K;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),x=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[m++]}return new Qe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new me,Jn=new co,Ds=new fi,ko=new T,Us=new T,Ns=new T,Fs=new T,Kr=new T,Os=new T,Ho=new T,Bs=new T;class B extends Le{constructor(t=new Ee,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Kr.fromBufferAttribute(d,t),a?Os.addScaledVector(Kr,h):Os.addScaledVector(Kr.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ds.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ds,ko)===null||Jn.origin.distanceToSquared(ko)>(t.far-t.near)**2))&&(zo.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(zo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],p=a[f.materialIndex],y=Math.max(f.start,m.start),M=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,I=M;b<I;b+=3){const P=o.getX(b),C=o.getX(b+1),D=o.getX(b+2);i=zs(this,p,t,n,c,h,d,P,C,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){const y=o.getX(f),M=o.getX(f+1),b=o.getX(f+2);i=zs(this,a,t,n,c,h,d,y,M,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],p=a[f.materialIndex],y=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,I=M;b<I;b+=3){const P=b,C=b+1,D=b+2;i=zs(this,p,t,n,c,h,d,P,C,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){const y=f,M=f+1,b=f+2;i=zs(this,a,t,n,c,h,d,y,M,b),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Oh(s,t,e,n,i,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Yn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:s}}function zs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Us),s.getVertexPosition(l,Ns),s.getVertexPosition(c,Fs);const h=Oh(s,t,e,n,Us,Ns,Fs,Ho);if(h){const d=new T;cn.getBarycoord(Ho,Us,Ns,Fs,d),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,d,new Ot)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,d,new Ot)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new T,materialIndex:0};cn.getNormal(Us,Ns,Fs,u.normal),h.face=u,h.barycoord=d}return h}class pt extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(x,f,p,y,M,b,I,P,C,D,$){const _=b/C,w=I/D,G=b/2,W=I/2,K=P/2,nt=C+1,X=D+1;let it=0,j=0;const vt=new T;for(let St=0;St<X;St++){const Pt=St*w-W;for(let re=0;re<nt;re++){const Qt=re*_-G;vt[x]=Qt*y,vt[f]=Pt*M,vt[p]=K,c.push(vt.x,vt.y,vt.z),vt[x]=0,vt[f]=0,vt[p]=P>0?1:-1,h.push(vt.x,vt.y,vt.z),d.push(re/C),d.push(1-St/D),it+=1}}for(let St=0;St<D;St++)for(let Pt=0;Pt<C;Pt++){const re=u+Pt+nt*St,Qt=u+Pt+nt*(St+1),J=u+(Pt+1)+nt*(St+1),ot=u+(Pt+1)+nt*St;l.push(re,Qt,ot),l.push(Qt,J,ot),j+=6}o.addGroup(m,j,$),m+=j,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(s){const t={};for(let e=0;e<s.length;e++){const n=Yi(s[e]);for(const i in n)t[i]=n[i]}return t}function Bh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const vs={clone:Yi,merge:qe};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vc extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new T,Go=new Ot,Vo=new Ot;class rn extends vc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Go,Vo),e.subVectors(Vo,Go)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class Hh extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(Ti,Ai,t,e);i.layers=this.layers,this.add(i);const r=new rn(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const a=new rn(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const o=new rn(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const l=new rn(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new rn(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ho extends Ve{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gh extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ho(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pt(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:In});r.uniforms.tEquirect.value=e;const a=new B(i,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=pn),new Hh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const $r=new T,Vh=new T,Wh=new Jt;class si{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$r.subVectors(n,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wh.getNormalMatrix(t),i=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new fi,ks=new T;class uo{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,a=new si){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],x=i[10],f=i[11],p=i[12],y=i[13],M=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,f-m,b-p).normalize(),n[1].setComponents(l+r,u+c,f+m,b+p).normalize(),n[2].setComponents(l+a,u+h,f+g,b+y).normalize(),n[3].setComponents(l-a,u-h,f-g,b-y).normalize(),n[4].setComponents(l-o,u-d,f-x,b-M).normalize(),e===Ln)n[5].setComponents(l+o,u+d,f+x,b+M).normalize();else if(e===dr)n[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ks.x=i.normal.x>0?t.max.x:t.min.x,ks.y=i.normal.y>0?t.max.y:t.min.y,ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){const g=d[u],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Fe extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],x=[],f=[];for(let p=0;p<h;p++){const y=p*u-a;for(let M=0;M<c;M++){const b=M*d-r;g.push(b,-y,0),x.push(0,0,1),f.push(M/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,b=y+c*(p+1),I=y+1+c*(p+1),P=y+1+c*p;m.push(M,b,P),m.push(b,I,P)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.widthSegments,t.heightSegments)}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,su=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ru=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,au=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_u=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",wu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,od=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_f=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:qh,alphahash_pars_fragment:Yh,alphamap_fragment:jh,alphamap_pars_fragment:Kh,alphatest_fragment:$h,alphatest_pars_fragment:Zh,aomap_fragment:Jh,aomap_pars_fragment:Qh,batching_pars_vertex:tu,batching_vertex:eu,begin_vertex:nu,beginnormal_vertex:iu,bsdfs:su,iridescence_fragment:ru,bumpmap_pars_fragment:au,clipping_planes_fragment:ou,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:cu,clipping_planes_vertex:hu,color_fragment:uu,color_pars_fragment:du,color_pars_vertex:fu,color_vertex:pu,common:mu,cube_uv_reflection_fragment:gu,defaultnormal_vertex:_u,displacementmap_pars_vertex:xu,displacementmap_vertex:vu,emissivemap_fragment:Mu,emissivemap_pars_fragment:yu,colorspace_fragment:Su,colorspace_pars_fragment:wu,envmap_fragment:bu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Bu,envmap_vertex:Cu,fog_vertex:Ru,fog_pars_vertex:Pu,fog_fragment:Lu,fog_pars_fragment:Iu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:zu,lights_toon_pars_fragment:ku,lights_phong_fragment:Hu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Vu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:Zu,map_fragment:Ju,map_pars_fragment:Qu,map_particle_fragment:td,map_particle_pars_fragment:ed,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:sd,morphcolor_vertex:rd,morphnormal_vertex:ad,morphtarget_pars_vertex:od,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:hd,normal_pars_fragment:ud,normal_pars_vertex:dd,normal_vertex:fd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:xd,opaque_fragment:vd,packing:Md,premultiplied_alpha_fragment:yd,project_vertex:Sd,dithering_fragment:wd,dithering_pars_fragment:bd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Cd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Ld,skinning_pars_vertex:Id,skinning_vertex:Dd,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:Bd,transmission_fragment:zd,transmission_pars_fragment:kd,uv_pars_fragment:Hd,uv_pars_vertex:Gd,uv_vertex:Vd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:jd,cube_vert:Kd,cube_frag:$d,depth_vert:Zd,depth_frag:Jd,distanceRGBA_vert:Qd,distanceRGBA_frag:tf,equirect_vert:ef,equirect_frag:nf,linedashed_vert:sf,linedashed_frag:rf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:lf,meshlambert_frag:cf,meshmatcap_vert:hf,meshmatcap_frag:uf,meshnormal_vert:df,meshnormal_frag:ff,meshphong_vert:pf,meshphong_frag:mf,meshphysical_vert:gf,meshphysical_frag:_f,meshtoon_vert:xf,meshtoon_frag:vf,points_vert:Mf,points_frag:yf,shadow_vert:Sf,shadow_frag:wf,sprite_vert:bf,sprite_frag:Ef},mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Mn={basic:{uniforms:qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:qe([mt.common,mt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:qe([mt.lights,mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Mn.physical={uniforms:qe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Hs={r:0,b:0,g:0},ti=new bn,Tf=new me;function Af(s,t,e,n,i,r,a){const o=new jt(0);let l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1;const b=g(y);b===null?p(o,l):b&&b.isColor&&(p(b,1),M=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(y,M){const b=g(M);b&&(b.isCubeTexture||b.mapping===_r)?(h===void 0&&(h=new B(new pt(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Yi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ti.copy(M.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tf.makeRotationFromEuler(ti)),h.material.toneMapped=he.getTransfer(b.colorSpace)!==ye,(d!==b||u!==b.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,m=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new B(new Fe(2,2),new Ge({name:"BackgroundMaterial",uniforms:Yi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=he.getTransfer(b.colorSpace)!==ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,m=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Hs,xc(s)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:f}}function Cf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(_,w,G,W,K){let nt=!1;const X=d(W,G,w);r!==X&&(r=X,c(r.object)),nt=m(_,W,G,K),nt&&g(_,W,G,K),K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,b(_,w,G,W),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,w,G){const W=G.wireframe===!0;let K=n[_.id];K===void 0&&(K={},n[_.id]=K);let nt=K[w.id];nt===void 0&&(nt={},K[w.id]=nt);let X=nt[W];return X===void 0&&(X=u(l()),nt[W]=X),X}function u(_){const w=[],G=[],W=[];for(let K=0;K<e;K++)w[K]=0,G[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:G,attributeDivisors:W,object:_,attributes:{},index:null}}function m(_,w,G,W){const K=r.attributes,nt=w.attributes;let X=0;const it=G.getAttributes();for(const j in it)if(it[j].location>=0){const St=K[j];let Pt=nt[j];if(Pt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Pt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Pt=_.instanceColor)),St===void 0||St.attribute!==Pt||Pt&&St.data!==Pt.data)return!0;X++}return r.attributesNum!==X||r.index!==W}function g(_,w,G,W){const K={},nt=w.attributes;let X=0;const it=G.getAttributes();for(const j in it)if(it[j].location>=0){let St=nt[j];St===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(St=_.instanceColor));const Pt={};Pt.attribute=St,St&&St.data&&(Pt.data=St.data),K[j]=Pt,X++}r.attributes=K,r.attributesNum=X,r.index=W}function x(){const _=r.newAttributes;for(let w=0,G=_.length;w<G;w++)_[w]=0}function f(_){p(_,0)}function p(_,w){const G=r.newAttributes,W=r.enabledAttributes,K=r.attributeDivisors;G[_]=1,W[_]===0&&(s.enableVertexAttribArray(_),W[_]=1),K[_]!==w&&(s.vertexAttribDivisor(_,w),K[_]=w)}function y(){const _=r.newAttributes,w=r.enabledAttributes;for(let G=0,W=w.length;G<W;G++)w[G]!==_[G]&&(s.disableVertexAttribArray(G),w[G]=0)}function M(_,w,G,W,K,nt,X){X===!0?s.vertexAttribIPointer(_,w,G,K,nt):s.vertexAttribPointer(_,w,G,W,K,nt)}function b(_,w,G,W){x();const K=W.attributes,nt=G.getAttributes(),X=w.defaultAttributeValues;for(const it in nt){const j=nt[it];if(j.location>=0){let vt=K[it];if(vt===void 0&&(it==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),it==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),vt!==void 0){const St=vt.normalized,Pt=vt.itemSize,re=t.get(vt);if(re===void 0)continue;const Qt=re.buffer,J=re.type,ot=re.bytesPerElement,Tt=J===s.INT||J===s.UNSIGNED_INT||vt.gpuType===eo;if(vt.isInterleavedBufferAttribute){const Mt=vt.data,Ht=Mt.stride,Gt=vt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)p(j.location+ae,Mt.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ae=0;ae<j.locationSize;ae++)f(j.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let ae=0;ae<j.locationSize;ae++)M(j.location+ae,Pt/j.locationSize,J,St,Ht*ot,(Gt+Pt/j.locationSize*ae)*ot,Tt)}else{if(vt.isInstancedBufferAttribute){for(let Mt=0;Mt<j.locationSize;Mt++)p(j.location+Mt,vt.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Mt=0;Mt<j.locationSize;Mt++)f(j.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Mt=0;Mt<j.locationSize;Mt++)M(j.location+Mt,Pt/j.locationSize,J,St,Pt*ot,Pt/j.locationSize*Mt*ot,Tt)}}else if(X!==void 0){const St=X[it];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(j.location,St);break;case 3:s.vertexAttrib3fv(j.location,St);break;case 4:s.vertexAttrib4fv(j.location,St);break;default:s.vertexAttrib1fv(j.location,St)}}}}y()}function I(){D();for(const _ in n){const w=n[_];for(const G in w){const W=w[G];for(const K in W)h(W[K].object),delete W[K];delete w[G]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const G in w){const W=w[G];for(const K in W)h(W[K].object),delete W[K];delete w[G]}delete n[_.id]}function C(_){for(const w in n){const G=n[w];if(G[_.id]===void 0)continue;const W=G[_.id];for(const K in W)h(W[K].object),delete W[K];delete G[_.id]}}function D(){$(),a=!0,r!==i&&(r=i,c(r.object))}function $(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:$,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:f,disableUnusedAttributes:y}}function Rf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function l(c,h,d,u){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==gn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==wn&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:I,maxSamples:P}}function Lf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new si,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!f)r?h(null):c();else{const y=r?0:n,M=y*4;let b=p.clippingState||null;l.value=b,b=h(g,u,M,m);for(let I=0;I!==M;++I)b[I]=e[I];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const p=m+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,b=m;M!==x;++M,b+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function If(s){let t=new WeakMap;function e(a,o){return o===va?a.mapping=Vi:o===Ma&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===Ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fo extends vc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,Wo=[.125,.215,.35,.446,.526,.582],li=20,Zr=new fo,Xo=new jt;let Jr=null,Qr=0,ta=0,ea=!1;const ri=(1+Math.sqrt(5))/2,Ci=1/ri,qo=[new T(-ri,Ci,0),new T(ri,Ci,0),new T(-Ci,0,ri),new T(Ci,0,ri),new T(0,ri,-Ci),new T(0,ri,Ci),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,Qr,ta),this._renderer.xr.enabled=ea,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Dn,format:gn,colorSpace:jn,depthBuffer:!1},i=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Df(r)),this._blurMaterial=Uf(r,t,e)}return i}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,i){const o=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Xo),h.toneMapping=Xn,h.autoClear=!1;const m=new be({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new B(new pt,m);let x=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(Xo),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Gs(i,y*M,p>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vi||t.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qo[(i-r-1)%qo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new B(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):li;f>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${li}`);const p=[];let y=0;for(let C=0;C<li;++C){const D=C/x,$=Math.exp(-D*D/2);p.push($),C===0?y+=$:C<f&&(y+=2*$)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const b=this._sizeLods[i],I=3*b*(i>M-Ui?i-M+Ui:0),P=4*(this._cubeSize-b);Gs(e,I,P,3*b,2*b),l.setRenderTarget(e),l.render(d,Zr)}}function Df(s){const t=[],e=[],n=[];let i=s;const r=s-Ui+1+Wo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ui?l=Wo[a-s+Ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,x=3,f=2,p=1,y=new Float32Array(x*g*m),M=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,D=P>2?0:-1,$=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];y.set($,x*g*P),M.set(u,f*g*P);const _=[P,P,P,P,P,P];b.set(_,p*g*P)}const I=new Ee;I.setAttribute("position",new Qe(y,x)),I.setAttribute("uv",new Qe(M,f)),I.setAttribute("faceIndex",new Qe(b,p)),t.push(I),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yo(s,t,e){const n=new xn(s,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Uf(s,t,e){const n=new Float32Array(li),i=new T(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function jo(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ko(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===Ma,h=l===Vi||l===Wi;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new $a(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new $a(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ff(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Of(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let f=0,p=x.length;f<p;f++)t.remove(x[f])}u.removeEventListener("dispose",a),delete i[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let f=0,p=x.length;f<p;f++)t.update(x[f],s.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let M=0,b=y.length;M<b;M+=3){const I=y[M+0],P=y[M+1],C=y[M+2];u.push(I,P,P,C,C,I)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const I=M+0,P=M+1,C=M+2;u.push(I,P,P,C,C,I)}}else return;const f=new(uc(u)?_c:gc)(u,1);f.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,f)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Bf(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,m){s.drawElements(n,m,r,u*a),e.update(m,n,1)}function c(u,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,u*a,g),e.update(m,n,g))}function h(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function d(u,m,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)c(u[p]/a,m[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<x.length;y++)e.update(p,n,x[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kf(s,t,e){const n=new WeakMap,i=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let _=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),f===!0&&(b=3);let I=o.attributes.position.count*b,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const C=new Float32Array(I*P*4*d),D=new fc(C,I,P,d);D.type=wn,D.needsUpdate=!0;const $=b*4;for(let w=0;w<d;w++){const G=p[w],W=y[w],K=M[w],nt=I*P*4*w;for(let X=0;X<G.count;X++){const it=X*$;g===!0&&(i.fromBufferAttribute(G,X),C[nt+it+0]=i.x,C[nt+it+1]=i.y,C[nt+it+2]=i.z,C[nt+it+3]=0),x===!0&&(i.fromBufferAttribute(W,X),C[nt+it+4]=i.x,C[nt+it+5]=i.y,C[nt+it+6]=i.z,C[nt+it+7]=0),f===!0&&(i.fromBufferAttribute(K,X),C[nt+it+8]=i.x,C[nt+it+9]=i.y,C[nt+it+10]=i.z,C[nt+it+11]=K.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new Ot(I,P)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Hf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class yc extends Ve{constructor(t,e,n,i,r,a,o,l,c,h=zi){if(h!==zi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=ui),n===void 0&&h===qi&&(n=Xi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sc=new Ve,$o=new yc(1,1),wc=new fc,bc=new Ah,Ec=new ho,Zo=[],Jo=[],Qo=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function Zi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Zo[i];if(r===void 0&&(r=new Float32Array(i),Zo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vr(s,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function qf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;el.set(n),s.uniformMatrix2fv(this.addr,!1,el),Ue(e,n)}}function Yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;tl.set(n),s.uniformMatrix3fv(this.addr,!1,tl),Ue(e,n)}}function jf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Qo.set(n),s.uniformMatrix4fv(this.addr,!1,Qo),Ue(e,n)}}function Kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function Qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function ip(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($o.compareFunction=hc,r=$o):r=Sc,e.setTexture2D(t||r,i)}function sp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||bc,i)}function rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ec,i)}function ap(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wc,i)}function op(s){switch(s){case 5126:return Gf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return jf;case 5124:case 35670:return Kf;case 35667:case 35671:return $f;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(s,t){s.uniform1fv(this.addr,t)}function cp(s,t){const e=Zi(t,this.size,2);s.uniform2fv(this.addr,e)}function hp(s,t){const e=Zi(t,this.size,3);s.uniform3fv(this.addr,e)}function up(s,t){const e=Zi(t,this.size,4);s.uniform4fv(this.addr,e)}function dp(s,t){const e=Zi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fp(s,t){const e=Zi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function pp(s,t){const e=Zi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function mp(s,t){s.uniform1iv(this.addr,t)}function gp(s,t){s.uniform2iv(this.addr,t)}function _p(s,t){s.uniform3iv(this.addr,t)}function xp(s,t){s.uniform4iv(this.addr,t)}function vp(s,t){s.uniform1uiv(this.addr,t)}function Mp(s,t){s.uniform2uiv(this.addr,t)}function yp(s,t){s.uniform3uiv(this.addr,t)}function Sp(s,t){s.uniform4uiv(this.addr,t)}function wp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Sc,r[a])}function bp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||bc,r[a])}function Ep(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ec,r[a])}function Tp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||wc,r[a])}function Ap(s){switch(s){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return Mp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}class Cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=op(e.type)}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}}class Pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function nl(s,t){s.seq.push(t),s.map[t.id]=t}function Lp(s,t,e){const n=s.name,i=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nl(e,c===void 0?new Cp(o,s,t):new Rp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Pp(o),nl(e,d)),e=d}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Lp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function il(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Ip=37297;let Dp=0;function Up(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Np(s){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(s);let n;switch(t===e?n="":t===ur&&e===hr?n="LinearDisplayP3ToLinearSRGB":t===hr&&e===ur&&(n="LinearSRGBToLinearDisplayP3"),s){case jn:case xr:return[n,"LinearTransferOETF"];case Ye:case lo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function sl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Up(s.getShaderSource(t),a)}else return i}function Fp(s,t){const e=Np(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Op(s,t){let e;switch(t){case jl:e="Linear";break;case Kl:e="Reinhard";break;case $l:e="Cineon";break;case to:e="ACESFilmic";break;case Zl:e="AgX";break;case Jl:e="Neutral";break;case rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new T;function Bp(){he.getLuminanceCoefficients(Vs);const s=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function kp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function gs(s){return s!==""}function rl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(s){return s.replace(Gp,Wp)}const Vp=new Map;function Wp(s,t){let e=Zt[t];if(e===void 0){const n=Vp.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(s){return s.replace(Xp,qp)}function qp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ll(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function jp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function $p(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yl:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case sh:t="ENVMAP_BLENDING_ADD";break}return t}function Zp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Jp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Yp(e),c=jp(e),h=Kp(e),d=$p(e),u=Zp(e),m=zp(e),g=kp(r),x=i.createProgram();let f,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(f=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Fp("linearToOutputTexel",e.outputColorSpace),Bp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Za(a),a=rl(a,e),a=al(a,e),o=Za(o),o=rl(o,e),o=al(o,e),a=ol(a),o=ol(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+f+a,b=y+p+o,I=il(i,i.VERTEX_SHADER,M),P=il(i,i.FRAGMENT_SHADER,b);i.attachShader(x,I),i.attachShader(x,P),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(w){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),W=i.getShaderInfoLog(I).trim(),K=i.getShaderInfoLog(P).trim();let nt=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,I,P);else{const it=sl(i,I,"vertex"),j=sl(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+it+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||K==="")&&(X=!1);X&&(w.diagnostics={runnable:nt,programLog:G,vertexShader:{log:W,prefix:f},fragmentShader:{log:K,prefix:p}})}i.deleteShader(I),i.deleteShader(P),D=new or(i,x),$=Hp(i,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let $;this.getAttributes=function(){return $===void 0&&C(this),$};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,Ip)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=P,this}let Qp=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new em(t),e.set(t,n)),n}}class em{constructor(t){this.id=Qp++,this.code=t,this.usedTimes=0}}function nm(s,t,e,n,i,r,a){const o=new pc,l=new tm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,m=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,w,G,W,K){const nt=W.fog,X=K.geometry,it=_.isMeshStandardMaterial?W.environment:null,j=(_.isMeshStandardMaterial?e:t).get(_.envMap||it),vt=j&&j.mapping===_r?j.image.height:null,St=x[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=Pt!==void 0?Pt.length:0;let Qt=0;X.morphAttributes.position!==void 0&&(Qt=1),X.morphAttributes.normal!==void 0&&(Qt=2),X.morphAttributes.color!==void 0&&(Qt=3);let J,ot,Tt,Mt;if(St){const lt=Mn[St];J=lt.vertexShader,ot=lt.fragmentShader}else J=_.vertexShader,ot=_.fragmentShader,l.update(_),Tt=l.getVertexShaderID(_),Mt=l.getFragmentShaderID(_);const Ht=s.getRenderTarget(),Gt=K.isInstancedMesh===!0,ae=K.isBatchedMesh===!0,ue=!!_.map,ee=!!_.matcap,L=!!j,We=!!_.aoMap,ne=!!_.lightMap,oe=!!_.bumpMap,Vt=!!_.normalMap,de=!!_.displacementMap,zt=!!_.emissiveMap,E=!!_.metalnessMap,v=!!_.roughnessMap,z=_.anisotropy>0,tt=_.clearcoat>0,st=_.dispersion>0,Z=_.iridescence>0,It=_.sheen>0,ft=_.transmission>0,wt=z&&!!_.anisotropyMap,le=tt&&!!_.clearcoatMap,ht=tt&&!!_.clearcoatNormalMap,bt=tt&&!!_.clearcoatRoughnessMap,Wt=Z&&!!_.iridescenceMap,Xt=Z&&!!_.iridescenceThicknessMap,Et=It&&!!_.sheenColorMap,ie=It&&!!_.sheenRoughnessMap,Kt=!!_.specularMap,_e=!!_.specularColorMap,U=!!_.specularIntensityMap,_t=ft&&!!_.transmissionMap,q=ft&&!!_.thicknessMap,et=!!_.gradientMap,R=!!_.alphaMap,A=_.alphaTest>0,O=!!_.alphaHash,V=!!_.extensions;let Q=Xn;_.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(Q=s.toneMapping);const Y={shaderID:St,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:ot,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:ae,batchingColor:ae&&K._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&K.instanceColor!==null,instancingMorph:Gt&&K.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ht===null?s.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:jn,alphaToCoverage:!!_.alphaToCoverage,map:ue,matcap:ee,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:vt,aoMap:We,lightMap:ne,bumpMap:oe,normalMap:Vt,displacementMap:m&&de,emissiveMap:zt,normalMapObjectSpace:Vt&&_.normalMapType===ch,normalMapTangentSpace:Vt&&_.normalMapType===cc,metalnessMap:E,roughnessMap:v,anisotropy:z,anisotropyMap:wt,clearcoat:tt,clearcoatMap:le,clearcoatNormalMap:ht,clearcoatRoughnessMap:bt,dispersion:st,iridescence:Z,iridescenceMap:Wt,iridescenceThicknessMap:Xt,sheen:It,sheenColorMap:Et,sheenRoughnessMap:ie,specularMap:Kt,specularColorMap:_e,specularIntensityMap:U,transmission:ft,transmissionMap:_t,thicknessMap:q,gradientMap:et,opaque:_.transparent===!1&&_.blending===Bi&&_.alphaToCoverage===!1,alphaMap:R,alphaTest:A,alphaHash:O,combine:_.combine,mapUv:ue&&f(_.map.channel),aoMapUv:We&&f(_.aoMap.channel),lightMapUv:ne&&f(_.lightMap.channel),bumpMapUv:oe&&f(_.bumpMap.channel),normalMapUv:Vt&&f(_.normalMap.channel),displacementMapUv:de&&f(_.displacementMap.channel),emissiveMapUv:zt&&f(_.emissiveMap.channel),metalnessMapUv:E&&f(_.metalnessMap.channel),roughnessMapUv:v&&f(_.roughnessMap.channel),anisotropyMapUv:wt&&f(_.anisotropyMap.channel),clearcoatMapUv:le&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ie&&f(_.sheenRoughnessMap.channel),specularMapUv:Kt&&f(_.specularMap.channel),specularColorMapUv:_e&&f(_.specularColorMap.channel),specularIntensityMapUv:U&&f(_.specularIntensityMap.channel),transmissionMapUv:_t&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:R&&f(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Vt||z),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(ue||R),fog:!!nt,useFog:_.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Qt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Q,decodeVideoTexture:ue&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:V&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(V&&_.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Y.vertexUv1s=c.has(1),Y.vertexUv2s=c.has(2),Y.vertexUv3s=c.has(3),c.clear(),Y}function y(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)w.push(G),w.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(M(w,_),b(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function M(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function b(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function I(_){const w=x[_.type];let G;if(w){const W=Mn[w];G=vs.clone(W.uniforms)}else G=_.uniforms;return G}function P(_,w){let G;for(let W=0,K=h.length;W<K;W++){const nt=h[W];if(nt.cacheKey===w){G=nt,++G.usedTimes;break}}return G===void 0&&(G=new Jp(s,w,_,r),h.push(G)),G}function C(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function D(_){l.remove(_)}function $(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:I,acquireProgram:P,releaseProgram:C,releaseShaderCache:D,programs:h,dispose:$}}function im(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function cl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,m,g,x,f){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:f},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=f),t++,p}function o(d,u,m,g,x,f){const p=a(d,u,m,g,x,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(d,u,m,g,x,f){const p=a(d,u,m,g,x,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||sm),n.length>1&&n.sort(u||cl),i.length>1&&i.sort(u||cl)}function h(){for(let d=t,u=s.length;d<u;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function rm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new hl,s.set(n,[a])):i>=r.length?(a=new hl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function am(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new jt};break;case"SpotLight":e={position:new T,direction:new T,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function om(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let lm=0;function cm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hm(s){const t=new am,e=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new me,a=new me;function o(c){let h=0,d=0,u=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let m=0,g=0,x=0,f=0,p=0,y=0,M=0,b=0,I=0,P=0,C=0;c.sort(cm);for(let $=0,_=c.length;$<_;$++){const w=c[$],G=w.color,W=w.intensity,K=w.distance,nt=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=G.r*W,d+=G.g*W,u+=G.b*W;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],W);C++}else if(w.isDirectionalLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const it=w.shadow,j=e.get(w);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=X,m++}else if(w.isSpotLight){const X=t.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(G).multiplyScalar(W),X.distance=K,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[x]=X;const it=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,it.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[x]=it.matrix,w.castShadow){const j=e.get(w);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=nt,b++}x++}else if(w.isRectAreaLight){const X=t.get(w);X.color.copy(G).multiplyScalar(W),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=X,f++}else if(w.isPointLight){const X=t.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const it=w.shadow,j=e.get(w);j.shadowIntensity=it.intensity,j.shadowBias=it.bias,j.shadowNormalBias=it.normalBias,j.shadowRadius=it.radius,j.shadowMapSize=it.mapSize,j.shadowCameraNear=it.camera.near,j.shadowCameraFar=it.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=w.shadow.matrix,M++}n.point[g]=X,g++}else if(w.isHemisphereLight){const X=t.get(w);X.skyColor.copy(w.color).multiplyScalar(W),X.groundColor.copy(w.groundColor).multiplyScalar(W),n.hemi[p]=X,p++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==f||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==b||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,D.directionalLength=m,D.pointLength=g,D.spotLength=x,D.rectAreaLength=f,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=b,D.numSpotMaps=I,D.numLightProbes=C,n.version=lm++)}function l(c,h){let d=0,u=0,m=0,g=0,x=0;const f=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),d++}else if(M.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function ul(s){const t=new hm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function um(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ul(s),t.set(i,[o])):r>=a.length?(o=new ul(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class dm extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gm(s,t,e){let n=new uo;const i=new Ot,r=new Ot,a=new ve,o=new dm({depthPacking:lh}),l=new fm,c={},h=e.maxTextureSize,d={[Yn]:je,[je]:Yn,[Ze]:Ze},u=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new B(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let p=this.type;this.render=function(P,C,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const $=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),G=s.state;G.setBlending(In),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=p!==Pn&&this.type===Pn,K=p===Pn&&this.type!==Pn;for(let nt=0,X=P.length;nt<X;nt++){const it=P[nt],j=it.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const vt=j.getFrameExtents();if(i.multiply(vt),r.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/vt.x),i.x=r.x*vt.x,j.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/vt.y),i.y=r.y*vt.y,j.mapSize.y=r.y)),j.map===null||W===!0||K===!0){const Pt=this.type!==Pn?{minFilter:Je,magFilter:Je}:{};j.map!==null&&j.map.dispose(),j.map=new xn(i.x,i.y,Pt),j.map.texture.name=it.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const St=j.getViewportCount();for(let Pt=0;Pt<St;Pt++){const re=j.getViewport(Pt);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),G.viewport(a),j.updateMatrices(it,Pt),n=j.getFrustum(),b(C,D,j.camera,it,this.type)}j.isPointLightShadow!==!0&&this.type===Pn&&y(j,D),j.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget($,_,w)};function y(P,C){const D=t.update(x);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xn(i.x,i.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(C,null,D,u,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(C,null,D,m,x,null)}function M(P,C,D,$){let _=null;const w=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)_=w;else if(_=D.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=_.uuid,W=C.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let nt=K[W];nt===void 0&&(nt=_.clone(),K[W]=nt,C.addEventListener("dispose",I)),_=nt}if(_.visible=C.visible,_.wireframe=C.wireframe,$===Pn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=s.properties.get(_);G.light=D}return _}function b(P,C,D,$,_){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Pn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const W=t.update(P),K=P.material;if(Array.isArray(K)){const nt=W.groups;for(let X=0,it=nt.length;X<it;X++){const j=nt[X],vt=K[j.materialIndex];if(vt&&vt.visible){const St=M(P,vt,$,_);P.onBeforeShadow(s,P,C,D,W,St,j),s.renderBufferDirect(D,null,W,St,P,j),P.onAfterShadow(s,P,C,D,W,St,j)}}}else if(K.visible){const nt=M(P,K,$,_);P.onBeforeShadow(s,P,C,D,W,nt,null),s.renderBufferDirect(D,null,W,nt,P,null),P.onAfterShadow(s,P,C,D,W,nt,null)}}const G=P.children;for(let W=0,K=G.length;W<K;W++)b(G[W],C,D,$,_)}function I(P){P.target.removeEventListener("dispose",I);for(const D in c){const $=c[D],_=P.target.uuid;_ in $&&($[_].dispose(),delete $[_])}}}const _m={[da]:fa,[pa]:_a,[ma]:xa,[Gi]:ga,[fa]:da,[_a]:pa,[xa]:ma,[ga]:Gi};function xm(s){function t(){let U=!1;const _t=new ve;let q=null;const et=new ve(0,0,0,0);return{setMask:function(R){q!==R&&!U&&(s.colorMask(R,R,R,R),q=R)},setLocked:function(R){U=R},setClear:function(R,A,O,V,Q){Q===!0&&(R*=V,A*=V,O*=V),_t.set(R,A,O,V),et.equals(_t)===!1&&(s.clearColor(R,A,O,V),et.copy(_t))},reset:function(){U=!1,q=null,et.set(-1,0,0,0)}}}function e(){let U=!1,_t=!1,q=null,et=null,R=null;return{setReversed:function(A){_t=A},setTest:function(A){A?Tt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(A){q!==A&&!U&&(s.depthMask(A),q=A)},setFunc:function(A){if(_t&&(A=_m[A]),et!==A){switch(A){case da:s.depthFunc(s.NEVER);break;case fa:s.depthFunc(s.ALWAYS);break;case pa:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case ma:s.depthFunc(s.EQUAL);break;case ga:s.depthFunc(s.GEQUAL);break;case _a:s.depthFunc(s.GREATER);break;case xa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=A}},setLocked:function(A){U=A},setClear:function(A){R!==A&&(s.clearDepth(A),R=A)},reset:function(){U=!1,q=null,et=null,R=null}}}function n(){let U=!1,_t=null,q=null,et=null,R=null,A=null,O=null,V=null,Q=null;return{setTest:function(Y){U||(Y?Tt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(Y){_t!==Y&&!U&&(s.stencilMask(Y),_t=Y)},setFunc:function(Y,lt,ct){(q!==Y||et!==lt||R!==ct)&&(s.stencilFunc(Y,lt,ct),q=Y,et=lt,R=ct)},setOp:function(Y,lt,ct){(A!==Y||O!==lt||V!==ct)&&(s.stencilOp(Y,lt,ct),A=Y,O=lt,V=ct)},setLocked:function(Y){U=Y},setClear:function(Y){Q!==Y&&(s.clearStencil(Y),Q=Y)},reset:function(){U=!1,_t=null,q=null,et=null,R=null,A=null,O=null,V=null,Q=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],m=null,g=!1,x=null,f=null,p=null,y=null,M=null,b=null,I=null,P=new jt(0,0,0),C=0,D=!1,$=null,_=null,w=null,G=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,X=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(it)[1]),nt=X>=1):it.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),nt=X>=2);let j=null,vt={};const St=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),re=new ve().fromArray(St),Qt=new ve().fromArray(Pt);function J(U,_t,q,et){const R=new Uint8Array(4),A=s.createTexture();s.bindTexture(U,A),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let O=0;O<q;O++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,R):s.texImage2D(_t+O,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,R);return A}const ot={};ot[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Tt(s.DEPTH_TEST),r.setFunc(Gi),ne(!1),oe(So),Tt(s.CULL_FACE),L(In);function Tt(U){c[U]!==!0&&(s.enable(U),c[U]=!0)}function Mt(U){c[U]!==!1&&(s.disable(U),c[U]=!1)}function Ht(U,_t){return h[U]!==_t?(s.bindFramebuffer(U,_t),h[U]=_t,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=_t),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function Gt(U,_t){let q=u,et=!1;if(U){q=d.get(_t),q===void 0&&(q=[],d.set(_t,q));const R=U.textures;if(q.length!==R.length||q[0]!==s.COLOR_ATTACHMENT0){for(let A=0,O=R.length;A<O;A++)q[A]=s.COLOR_ATTACHMENT0+A;q.length=R.length,et=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,et=!0);et&&s.drawBuffers(q)}function ae(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const ue={[oi]:s.FUNC_ADD,[kc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};ue[Gc]=s.MIN,ue[Vc]=s.MAX;const ee={[Wc]:s.ZERO,[Xc]:s.ONE,[qc]:s.SRC_COLOR,[ha]:s.SRC_ALPHA,[Jc]:s.SRC_ALPHA_SATURATE,[$c]:s.DST_COLOR,[jc]:s.DST_ALPHA,[Yc]:s.ONE_MINUS_SRC_COLOR,[ua]:s.ONE_MINUS_SRC_ALPHA,[Zc]:s.ONE_MINUS_DST_COLOR,[Kc]:s.ONE_MINUS_DST_ALPHA,[Qc]:s.CONSTANT_COLOR,[th]:s.ONE_MINUS_CONSTANT_COLOR,[eh]:s.CONSTANT_ALPHA,[nh]:s.ONE_MINUS_CONSTANT_ALPHA};function L(U,_t,q,et,R,A,O,V,Q,Y){if(U===In){g===!0&&(Mt(s.BLEND),g=!1);return}if(g===!1&&(Tt(s.BLEND),g=!0),U!==zc){if(U!==x||Y!==D){if((f!==oi||M!==oi)&&(s.blendEquation(s.FUNC_ADD),f=oi,M=oi),Y)switch(U){case Bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _n:s.blendFunc(s.ONE,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _n:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,y=null,b=null,I=null,P.set(0,0,0),C=0,x=U,D=Y}return}R=R||_t,A=A||q,O=O||et,(_t!==f||R!==M)&&(s.blendEquationSeparate(ue[_t],ue[R]),f=_t,M=R),(q!==p||et!==y||A!==b||O!==I)&&(s.blendFuncSeparate(ee[q],ee[et],ee[A],ee[O]),p=q,y=et,b=A,I=O),(V.equals(P)===!1||Q!==C)&&(s.blendColor(V.r,V.g,V.b,Q),P.copy(V),C=Q),x=U,D=!1}function We(U,_t){U.side===Ze?Mt(s.CULL_FACE):Tt(s.CULL_FACE);let q=U.side===je;_t&&(q=!q),ne(q),U.blending===Bi&&U.transparent===!1?L(In):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const et=U.stencilWrite;a.setTest(et),et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),de(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){$!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),$=U)}function oe(U){U!==Oc?(Tt(s.CULL_FACE),U!==_&&(U===So?s.cullFace(s.BACK):U===Bc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),_=U}function Vt(U){U!==w&&(nt&&s.lineWidth(U),w=U)}function de(U,_t,q){U?(Tt(s.POLYGON_OFFSET_FILL),(G!==_t||W!==q)&&(s.polygonOffset(_t,q),G=_t,W=q)):Mt(s.POLYGON_OFFSET_FILL)}function zt(U){U?Tt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function E(U){U===void 0&&(U=s.TEXTURE0+K-1),j!==U&&(s.activeTexture(U),j=U)}function v(U,_t,q){q===void 0&&(j===null?q=s.TEXTURE0+K-1:q=j);let et=vt[q];et===void 0&&(et={type:void 0,texture:void 0},vt[q]=et),(et.type!==U||et.texture!==_t)&&(j!==q&&(s.activeTexture(q),j=q),s.bindTexture(U,_t||ot[U]),et.type=U,et.texture=_t)}function z(){const U=vt[j];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(U){re.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Et(U){Qt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Qt.copy(U))}function ie(U,_t){let q=l.get(_t);q===void 0&&(q=new WeakMap,l.set(_t,q));let et=q.get(U);et===void 0&&(et=s.getUniformBlockIndex(_t,U.name),q.set(U,et))}function Kt(U,_t){const et=l.get(_t).get(U);o.get(_t)!==et&&(s.uniformBlockBinding(_t,et,U.__bindingPointIndex),o.set(_t,et))}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},j=null,vt={},h={},d=new WeakMap,u=[],m=null,g=!1,x=null,f=null,p=null,y=null,M=null,b=null,I=null,P=new jt(0,0,0),C=0,D=!1,$=null,_=null,w=null,G=null,W=null,re.set(0,0,s.canvas.width,s.canvas.height),Qt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:Tt,disable:Mt,bindFramebuffer:Ht,drawBuffers:Gt,useProgram:ae,setBlending:L,setMaterial:We,setFlipSided:ne,setCullFace:oe,setLineWidth:Vt,setPolygonOffset:de,setScissorTest:zt,activeTexture:E,bindTexture:v,unbindTexture:z,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:bt,texImage3D:Wt,updateUBOMapping:ie,uniformBlockBinding:Kt,texStorage2D:le,texStorage3D:ht,texSubImage2D:Z,texSubImage3D:It,compressedTexSubImage2D:ft,compressedTexSubImage3D:wt,scissor:Xt,viewport:Et,reset:_e}}function dl(s,t,e,n){const i=vm(n);switch(e){case ic:return s*t;case rc:return s*t;case ac:return s*t*2;case so:return s*t/i.components*i.byteLength;case ro:return s*t/i.components*i.byteLength;case oc:return s*t*2/i.components*i.byteLength;case ao:return s*t*2/i.components*i.byteLength;case sc:return s*t*3/i.components*i.byteLength;case gn:return s*t*4/i.components*i.byteLength;case oo:return s*t*4/i.components*i.byteLength;case er:case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ea:return Math.max(s,16)*Math.max(t,8)/4;case Sa:case ba:return Math.max(s,8)*Math.max(t,8)/2;case Ta:case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case rr:case Va:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lc:case Xa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qa:case Ya:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vm(s){switch(s){case Un:case tc:return{byteLength:1,components:1};case xs:case ec:case Dn:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case ui:case eo:case wn:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Mm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):fr("canvas")}function x(E,v,z){let tt=1;const st=zt(E);if((st.width>z||st.height>z)&&(tt=z/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(tt*st.width),It=Math.floor(tt*st.height);d===void 0&&(d=g(Z,It));const ft=v?g(Z,It):d;return ft.width=Z,ft.height=It,ft.getContext("2d").drawImage(E,0,0,Z,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Z+"x"+It+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),E;return E}function f(E){return E.generateMipmaps&&E.minFilter!==Je&&E.minFilter!==pn}function p(E){s.generateMipmap(E)}function y(E,v,z,tt,st=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=v;if(v===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),v===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),v===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),v===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),v===s.RGBA){const It=st?cr:he.getTransfer(tt);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=It===ye?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(E,v){let z;return E?v===null||v===ui||v===Xi?z=s.DEPTH24_STENCIL8:v===wn?z=s.DEPTH32F_STENCIL8:v===xs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ui||v===Xi?z=s.DEPTH_COMPONENT24:v===wn?z=s.DEPTH_COMPONENT32F:v===xs&&(z=s.DEPTH_COMPONENT16),z}function b(E,v){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Je&&E.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function I(E){const v=E.target;v.removeEventListener("dispose",I),C(v),v.isVideoTexture&&h.delete(v)}function P(E){const v=E.target;v.removeEventListener("dispose",P),$(v)}function C(E){const v=n.get(E);if(v.__webglInit===void 0)return;const z=E.source,tt=u.get(z);if(tt){const st=tt[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(E),Object.keys(tt).length===0&&u.delete(z)}n.remove(E)}function D(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const z=E.source,tt=u.get(z);delete tt[v.__cacheKey],a.memory.textures--}function $(E){const v=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let st=0;st<v.__webglFramebuffer[tt].length;st++)s.deleteFramebuffer(v.__webglFramebuffer[tt][st]);else s.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)s.deleteFramebuffer(v.__webglFramebuffer[tt]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=E.textures;for(let tt=0,st=z.length;tt<st;tt++){const Z=n.get(z[tt]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[tt])}n.remove(E)}let _=0;function w(){_=0}function G(){const E=_;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),_+=1,E}function W(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function K(E,v){const z=n.get(E);if(E.isVideoTexture&&Vt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(z,E,v);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+v)}function nt(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){Qt(z,E,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+v)}function X(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){Qt(z,E,v);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+v)}function it(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){J(z,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+v)}const j={[_s]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[ya]:s.MIRRORED_REPEAT},vt={[Je]:s.NEAREST,[ah]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},St={[hh]:s.NEVER,[gh]:s.ALWAYS,[uh]:s.LESS,[hc]:s.LEQUAL,[dh]:s.EQUAL,[mh]:s.GEQUAL,[fh]:s.GREATER,[ph]:s.NOTEQUAL};function Pt(E,v){if(v.type===wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===Ar||v.magFilter===ws||v.magFilter===hi||v.minFilter===pn||v.minFilter===Ar||v.minFilter===ws||v.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,j[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,j[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,j[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,vt[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==ws&&v.minFilter!==hi||v.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function re(E,v){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",I));const tt=v.source;let st=u.get(tt);st===void 0&&(st={},u.set(tt,st));const Z=W(v);if(Z!==E.__cacheKey){st[Z]===void 0&&(st[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),st[Z].usedTimes++;const It=st[E.__cacheKey];It!==void 0&&(st[E.__cacheKey].usedTimes--,It.usedTimes===0&&D(v)),E.__cacheKey=Z,E.__webglTexture=st[Z].texture}return z}function Qt(E,v,z){let tt=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=s.TEXTURE_3D);const st=re(E,v),Z=v.source;e.bindTexture(tt,E.__webglTexture,s.TEXTURE0+z);const It=n.get(Z);if(Z.version!==It.__version||st===!0){e.activeTexture(s.TEXTURE0+z);const ft=he.getPrimaries(he.workingColorSpace),wt=v.colorSpace===Wn?null:he.getPrimaries(v.colorSpace),le=v.colorSpace===Wn||ft===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ht=x(v.image,!1,i.maxTextureSize);ht=de(v,ht);const bt=r.convert(v.format,v.colorSpace),Wt=r.convert(v.type);let Xt=y(v.internalFormat,bt,Wt,v.colorSpace,v.isVideoTexture);Pt(tt,v);let Et;const ie=v.mipmaps,Kt=v.isVideoTexture!==!0,_e=It.__version===void 0||st===!0,U=Z.dataReady,_t=b(v,ht);if(v.isDepthTexture)Xt=M(v.format===qi,v.type),_e&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,Xt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Xt,ht.width,ht.height,0,bt,Wt,null));else if(v.isDataTexture)if(ie.length>0){Kt&&_e&&e.texStorage2D(s.TEXTURE_2D,_t,Xt,ie[0].width,ie[0].height);for(let q=0,et=ie.length;q<et;q++)Et=ie[q],Kt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Wt,Et.data):e.texImage2D(s.TEXTURE_2D,q,Xt,Et.width,Et.height,0,bt,Wt,Et.data);v.generateMipmaps=!1}else Kt?(_e&&e.texStorage2D(s.TEXTURE_2D,_t,Xt,ht.width,ht.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,bt,Wt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Xt,ht.width,ht.height,0,bt,Wt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Kt&&_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Xt,ie[0].width,ie[0].height,ht.depth);for(let q=0,et=ie.length;q<et;q++)if(Et=ie[q],v.format!==gn)if(bt!==null)if(Kt){if(U)if(v.layerUpdates.size>0){const R=dl(Et.width,Et.height,v.format,v.type);for(const A of v.layerUpdates){const O=Et.data.subarray(A*R/Et.data.BYTES_PER_ELEMENT,(A+1)*R/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,A,Et.width,Et.height,1,bt,O,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,ht.depth,bt,Et.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Xt,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,ht.depth,bt,Wt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Xt,Et.width,Et.height,ht.depth,0,bt,Wt,Et.data)}else{Kt&&_e&&e.texStorage2D(s.TEXTURE_2D,_t,Xt,ie[0].width,ie[0].height);for(let q=0,et=ie.length;q<et;q++)Et=ie[q],v.format!==gn?bt!==null?Kt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Xt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,bt,Wt,Et.data):e.texImage2D(s.TEXTURE_2D,q,Xt,Et.width,Et.height,0,bt,Wt,Et.data)}else if(v.isDataArrayTexture)if(Kt){if(_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Xt,ht.width,ht.height,ht.depth),U)if(v.layerUpdates.size>0){const q=dl(ht.width,ht.height,v.format,v.type);for(const et of v.layerUpdates){const R=ht.data.subarray(et*q/ht.data.BYTES_PER_ELEMENT,(et+1)*q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ht.width,ht.height,1,bt,Wt,R)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,bt,Wt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,ht.width,ht.height,ht.depth,0,bt,Wt,ht.data);else if(v.isData3DTexture)Kt?(_e&&e.texStorage3D(s.TEXTURE_3D,_t,Xt,ht.width,ht.height,ht.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,bt,Wt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Xt,ht.width,ht.height,ht.depth,0,bt,Wt,ht.data);else if(v.isFramebufferTexture){if(_e)if(Kt)e.texStorage2D(s.TEXTURE_2D,_t,Xt,ht.width,ht.height);else{let q=ht.width,et=ht.height;for(let R=0;R<_t;R++)e.texImage2D(s.TEXTURE_2D,R,Xt,q,et,0,bt,Wt,null),q>>=1,et>>=1}}else if(ie.length>0){if(Kt&&_e){const q=zt(ie[0]);e.texStorage2D(s.TEXTURE_2D,_t,Xt,q.width,q.height)}for(let q=0,et=ie.length;q<et;q++)Et=ie[q],Kt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,bt,Wt,Et):e.texImage2D(s.TEXTURE_2D,q,Xt,bt,Wt,Et);v.generateMipmaps=!1}else if(Kt){if(_e){const q=zt(ht);e.texStorage2D(s.TEXTURE_2D,_t,Xt,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Wt,ht)}else e.texImage2D(s.TEXTURE_2D,0,Xt,bt,Wt,ht);f(v)&&p(tt),It.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function J(E,v,z){if(v.image.length!==6)return;const tt=re(E,v),st=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const Z=n.get(st);if(st.version!==Z.__version||tt===!0){e.activeTexture(s.TEXTURE0+z);const It=he.getPrimaries(he.workingColorSpace),ft=v.colorSpace===Wn?null:he.getPrimaries(v.colorSpace),wt=v.colorSpace===Wn||It===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const le=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let et=0;et<6;et++)!le&&!ht?bt[et]=x(v.image[et],!0,i.maxCubemapSize):bt[et]=ht?v.image[et].image:v.image[et],bt[et]=de(v,bt[et]);const Wt=bt[0],Xt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),ie=y(v.internalFormat,Xt,Et,v.colorSpace),Kt=v.isVideoTexture!==!0,_e=Z.__version===void 0||tt===!0,U=st.dataReady;let _t=b(v,Wt);Pt(s.TEXTURE_CUBE_MAP,v);let q;if(le){Kt&&_e&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,ie,Wt.width,Wt.height);for(let et=0;et<6;et++){q=bt[et].mipmaps;for(let R=0;R<q.length;R++){const A=q[R];v.format!==gn?Xt!==null?Kt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,0,0,A.width,A.height,Xt,A.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,ie,A.width,A.height,0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,0,0,A.width,A.height,Xt,Et,A.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R,ie,A.width,A.height,0,Xt,Et,A.data)}}}else{if(q=v.mipmaps,Kt&&_e){q.length>0&&_t++;const et=zt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,ie,et.width,et.height)}for(let et=0;et<6;et++)if(ht){Kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt[et].width,bt[et].height,Xt,Et,bt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,bt[et].width,bt[et].height,0,Xt,Et,bt[et].data);for(let R=0;R<q.length;R++){const O=q[R].image[et].image;Kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,0,0,O.width,O.height,Xt,Et,O.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,ie,O.width,O.height,0,Xt,Et,O.data)}}else{Kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Xt,Et,bt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Xt,Et,bt[et]);for(let R=0;R<q.length;R++){const A=q[R];Kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,0,0,Xt,Et,A.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,R+1,ie,Xt,Et,A.image[et])}}}f(v)&&p(s.TEXTURE_CUBE_MAP),Z.__version=st.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ot(E,v,z,tt,st,Z){const It=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),wt=y(z.internalFormat,It,ft,z.colorSpace);if(!n.get(v).__hasExternalTextures){const ht=Math.max(1,v.width>>Z),bt=Math.max(1,v.height>>Z);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,Z,wt,ht,bt,v.depth,0,It,ft,null):e.texImage2D(st,Z,wt,ht,bt,0,It,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),oe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,st,n.get(z).__webglTexture,0,ne(v)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,st,n.get(z).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(E,v,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const tt=v.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,Z=M(v.stencilBuffer,st),It=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=ne(v);oe(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Z,v.width,v.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,E)}else{const tt=v.textures;for(let st=0;st<tt.length;st++){const Z=tt[st],It=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),wt=y(Z.internalFormat,It,ft,Z.colorSpace),le=ne(v);z&&oe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,wt,v.width,v.height):oe(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,wt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,wt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const tt=n.get(v.depthTexture).__webglTexture,st=ne(v);if(v.depthTexture.format===zi)oe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(v.depthTexture.format===qi)oe(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ht(E){const v=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const tt=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){const st=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),v.__depthDisposeCallback=st}v.__boundDepthTexture=tt}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(v.__webglFramebuffer,E)}else if(z){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=s.createRenderbuffer(),Tt(v.__webglDepthbuffer[tt],E,!1);else{const st=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Tt(v.__webglDepthbuffer,E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(E,v,z){const tt=n.get(E);v!==void 0&&ot(tt.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ht(E)}function ae(E){const v=E.texture,z=n.get(E),tt=n.get(v);E.addEventListener("dispose",P);const st=E.textures,Z=E.isWebGLCubeRenderTarget===!0,It=st.length>1;if(It||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=v.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let wt=0;wt<v.mipmaps.length;wt++)z.__webglFramebuffer[ft][wt]=s.createFramebuffer()}else z.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)z.__webglFramebuffer[ft]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(It)for(let ft=0,wt=st.length;ft<wt;ft++){const le=n.get(st[ft]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&oe(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const wt=st[ft];z.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const le=r.convert(wt.format,wt.colorSpace),ht=r.convert(wt.type),bt=y(wt.internalFormat,le,ht,wt.colorSpace,E.isXRRenderTarget===!0),Wt=ne(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,bt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),Pt(s.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)ot(z.__webglFramebuffer[ft][wt],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt);else ot(z.__webglFramebuffer[ft],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);f(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ft=0,wt=st.length;ft<wt;ft++){const le=st[ft],ht=n.get(le);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),Pt(s.TEXTURE_2D,le),ot(z.__webglFramebuffer,E,le,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),f(le)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),Pt(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)ot(z.__webglFramebuffer[wt],E,v,s.COLOR_ATTACHMENT0,ft,wt);else ot(z.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ft,0);f(v)&&p(ft),e.unbindTexture()}E.depthBuffer&&Ht(E)}function ue(E){const v=E.textures;for(let z=0,tt=v.length;z<tt;z++){const st=v[z];if(f(st)){const Z=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,It=n.get(st).__webglTexture;e.bindTexture(Z,It),p(Z),e.unbindTexture()}}}const ee=[],L=[];function We(E){if(E.samples>0){if(oe(E)===!1){const v=E.textures,z=E.width,tt=E.height;let st=s.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=n.get(E),ft=v.length>1;if(ft)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[wt]);const le=n.get(v[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,z,tt,0,0,z,tt,st,s.NEAREST),l===!0&&(ee.length=0,L.length=0,ee.push(s.COLOR_ATTACHMENT0+wt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ee.push(Z),L.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,It.__webglColorRenderbuffer[wt]);const le=n.get(v[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,le,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ne(E){return Math.min(i.maxSamples,E.samples)}function oe(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Vt(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function de(E,v){const z=E.colorSpace,tt=E.format,st=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==jn&&z!==Wn&&(he.getTransfer(z)===ye?(tt!==gn||st!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function zt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=w,this.setTexture2D=K,this.setTexture2DArray=nt,this.setTexture3D=X,this.setTextureCube=it,this.rebindTextures=Gt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=oe}function ym(s,t){function e(n,i=Wn){let r;const a=he.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===no)return s.UNSIGNED_SHORT_4_4_4_4;if(n===io)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return s.BYTE;if(n===ec)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===eo)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===Dn)return s.HALF_FLOAT;if(n===ic)return s.ALPHA;if(n===sc)return s.RGB;if(n===gn)return s.RGBA;if(n===rc)return s.LUMINANCE;if(n===ac)return s.LUMINANCE_ALPHA;if(n===zi)return s.DEPTH_COMPONENT;if(n===qi)return s.DEPTH_STENCIL;if(n===so)return s.RED;if(n===ro)return s.RED_INTEGER;if(n===oc)return s.RG;if(n===ao)return s.RG_INTEGER;if(n===oo)return s.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===wa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Aa)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rr||n===Va||n===Wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rr)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Sm extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ie extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),p=this._getHandJoint(c,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ge({vertexShader:bm,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends Ki{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const x=new Tm,f=e.getContextAttributes();let p=null,y=null;const M=[],b=[],I=new Ot;let P=null;const C=new rn;C.layers.enable(1),C.viewport=new ve;const D=new rn;D.layers.enable(2),D.viewport=new ve;const $=[C,D],_=new Sm;_.layers.enable(1),_.layers.enable(2);let w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=M[J];return ot===void 0&&(ot=new ia,M[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=M[J];return ot===void 0&&(ot=new ia,M[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=M[J];return ot===void 0&&(ot=new ia,M[J]=ot),ot.getHandSpace()};function W(J){const ot=b.indexOf(J.inputSource);if(ot===-1)return;const Tt=M[ot];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,c||a),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",nt);for(let J=0;J<M.length;J++){const ot=b[J];ot!==null&&(b[J]=null,M[J].disconnect(ot))}w=null,G=null,x.reset(),t.setRenderTarget(p),m=null,u=null,d=null,i=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",K),i.addEventListener("inputsourceschange",nt),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const ot={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new xn(m.framebufferWidth,m.framebufferHeight,{format:gn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let ot=null,Tt=null,Mt=null;f.depth&&(Mt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=f.stencil?qi:zi,Tt=f.stencil?Xi:ui);const Ht={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new xn(u.textureWidth,u.textureHeight,{format:gn,type:Un,depthTexture:new yc(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function nt(J){for(let ot=0;ot<J.removed.length;ot++){const Tt=J.removed[ot],Mt=b.indexOf(Tt);Mt>=0&&(b[Mt]=null,M[Mt].disconnect(Tt))}for(let ot=0;ot<J.added.length;ot++){const Tt=J.added[ot];let Mt=b.indexOf(Tt);if(Mt===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=b.length){b.push(Tt),Mt=Gt;break}else if(b[Gt]===null){b[Gt]=Tt,Mt=Gt;break}if(Mt===-1)break}const Ht=M[Mt];Ht&&Ht.connect(Tt)}}const X=new T,it=new T;function j(J,ot,Tt){X.setFromMatrixPosition(ot.matrixWorld),it.setFromMatrixPosition(Tt.matrixWorld);const Mt=X.distanceTo(it),Ht=ot.projectionMatrix.elements,Gt=Tt.projectionMatrix.elements,ae=Ht[14]/(Ht[10]-1),ue=Ht[14]/(Ht[10]+1),ee=(Ht[9]+1)/Ht[5],L=(Ht[9]-1)/Ht[5],We=(Ht[8]-1)/Ht[0],ne=(Gt[8]+1)/Gt[0],oe=ae*We,Vt=ae*ne,de=Mt/(-We+ne),zt=de*-We;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(de),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ht[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const E=ae+de,v=ue+de,z=oe-zt,tt=Vt+(Mt-zt),st=ee*ue/v*E,Z=L*ue/v*E;J.projectionMatrix.makePerspective(z,tt,st,Z,E,v),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function vt(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ot=J.near,Tt=J.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),_.near=D.near=C.near=ot,_.far=D.far=C.far=Tt,(w!==_.near||G!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,G=_.far);const Mt=J.parent,Ht=_.cameras;vt(_,Mt);for(let Gt=0;Gt<Ht.length;Gt++)vt(Ht[Gt],Mt);Ht.length===2?j(_,C,D):_.projectionMatrix.copy(C.projectionMatrix),St(J,_,Mt)};function St(J,ot,Tt){Tt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ka*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Pt=null;function re(J,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){const Tt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Mt=!1;Tt.length!==_.cameras.length&&(_.cameras.length=0,Mt=!0);for(let Gt=0;Gt<Tt.length;Gt++){const ae=Tt[Gt];let ue=null;if(m!==null)ue=m.getViewport(ae);else{const L=d.getViewSubImage(u,ae);ue=L.viewport,Gt===0&&(t.setRenderTargetTextures(y,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let ee=$[Gt];ee===void 0&&(ee=new rn,ee.layers.enable(Gt),ee.viewport=new ve,$[Gt]=ee),ee.matrix.fromArray(ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ue.x,ue.y,ue.width,ue.height),Gt===0&&(_.matrix.copy(ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Mt===!0&&_.cameras.push(ee)}const Ht=i.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Gt=d.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,i.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const Mt=b[Tt],Ht=M[Tt];Mt!==null&&Ht!==void 0&&Ht.update(Mt,ot,c||a)}Pt&&Pt(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Qt=new Mc;Qt.setAnimationLoop(re),this.setAnimationLoop=function(J){Pt=J},this.dispose=function(){}}}const ei=new bn,Cm=new me;function Rm(s,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,xc(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,y,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,y,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===je&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===je&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,b=y.envMapRotation;M&&(f.envMap.value=M,ei.copy(b),ei.x*=-1,ei.y*=-1,ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),f.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(ei)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,y,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){const y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const b=M.program;n.uniformBlockBinding(y,b)}function c(y,M){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",f));const I=M.program;n.updateUBOMapping(y,I);const P=t.render.frame;r[y.id]!==P&&(u(y),r[y.id]=P)}function h(y){const M=d();y.__bindingPointIndex=M;const b=s.createBuffer(),I=y.__size,P=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,I,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=i[y.id],b=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let P=0,C=b.length;P<C;P++){const D=Array.isArray(b[P])?b[P]:[b[P]];for(let $=0,_=D.length;$<_;$++){const w=D[$];if(m(w,P,$,I)===!0){const G=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let K=0;for(let nt=0;nt<W.length;nt++){const X=W[nt],it=x(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,G+K,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,K),K+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,M,b,I){const P=y.value,C=M+"_"+b;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const D=I[C];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return I[C]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(y){const M=y.uniforms;let b=0;const I=16;for(let C=0,D=M.length;C<D;C++){const $=Array.isArray(M[C])?M[C]:[M[C]];for(let _=0,w=$.length;_<w;_++){const G=$[_],W=Array.isArray(G.value)?G.value:[G.value];for(let K=0,nt=W.length;K<nt;K++){const X=W[K],it=x(X),j=b%I,vt=j%it.boundary,St=j+vt;b+=vt,St!==0&&I-St<it.storage&&(b+=I-St),G.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=it.storage}}}const P=b%I;return P>0&&(b+=I-P),y.__size=b,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function f(y){const M=y.target;M.removeEventListener("dispose",f);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Lm{constructor(t={}){const{canvas:e=xh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Xn,this.toneMappingExposure=1;const M=this;let b=!1,I=0,P=0,C=null,D=-1,$=null;const _=new ve,w=new ve;let G=null;const W=new jt(0);let K=0,nt=e.width,X=e.height,it=1,j=null,vt=null;const St=new ve(0,0,nt,X),Pt=new ve(0,0,nt,X);let re=!1;const Qt=new uo;let J=!1,ot=!1;const Tt=new me,Mt=new me,Ht=new T,Gt=new ve,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ee(){return C===null?it:1}let L=n;function We(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",A,!1),L===null){const N="webgl2";if(L=We(N,S),L===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ne,oe,Vt,de,zt,E,v,z,tt,st,Z,It,ft,wt,le,ht,bt,Wt,Xt,Et,ie,Kt,_e,U;function _t(){ne=new Ff(L),ne.init(),Kt=new ym(L,ne),oe=new Pf(L,ne,t,Kt),Vt=new xm(L),oe.reverseDepthBuffer&&Vt.buffers.depth.setReversed(!0),de=new zf(L),zt=new im,E=new Mm(L,ne,Vt,zt,oe,Kt,de),v=new If(M),z=new Nf(M),tt=new Xh(L),_e=new Cf(L,tt),st=new Of(L,tt,de,_e),Z=new Hf(L,st,tt,de),Xt=new kf(L,oe,E),ht=new Lf(zt),It=new nm(M,v,z,ne,oe,_e,ht),ft=new Rm(M,zt),wt=new rm,le=new um(ne),Wt=new Af(M,v,z,Vt,Z,u,l),bt=new gm(M,Z,oe),U=new Pm(L,de,oe,Vt),Et=new Rf(L,ne,de),ie=new Bf(L,ne,de),de.programs=It.programs,M.capabilities=oe,M.extensions=ne,M.properties=zt,M.renderLists=wt,M.shadowMap=bt,M.state=Vt,M.info=de}_t();const q=new Am(M,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(nt,X,!1))},this.getSize=function(S){return S.set(nt,X)},this.setSize=function(S,N,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=S,X=N,e.width=Math.floor(S*it),e.height=Math.floor(N*it),k===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(nt*it,X*it).floor()},this.setDrawingBufferSize=function(S,N,k){nt=S,X=N,it=k,e.width=Math.floor(S*k),e.height=Math.floor(N*k),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,N,k,H){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,N,k,H),Vt.viewport(_.copy(St).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,N,k,H){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,N,k,H),Vt.scissor(w.copy(Pt).multiplyScalar(it).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){Vt.setScissorTest(re=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){vt=S},this.getClearColor=function(S){return S.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(S=!0,N=!0,k=!0){let H=0;if(S){let F=!1;if(C!==null){const ut=C.texture.format;F=ut===oo||ut===ao||ut===ro}if(F){const ut=C.texture.type,xt=ut===Un||ut===ui||ut===xs||ut===Xi||ut===no||ut===io,Rt=Wt.getClearColor(),Dt=Wt.getClearAlpha(),qt=Rt.r,Yt=Rt.g,Nt=Rt.b;xt?(m[0]=qt,m[1]=Yt,m[2]=Nt,m[3]=Dt,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=qt,g[1]=Yt,g[2]=Nt,g[3]=Dt,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",A,!1),wt.dispose(),le.dispose(),zt.dispose(),v.dispose(),z.dispose(),Z.dispose(),_e.dispose(),U.dispose(),It.dispose(),q.dispose(),q.removeEventListener("sessionstart",rt),q.removeEventListener("sessionend",gt),At.stop()};function et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=de.autoReset,N=bt.enabled,k=bt.autoUpdate,H=bt.needsUpdate,F=bt.type;_t(),de.autoReset=S,bt.enabled=N,bt.autoUpdate=k,bt.needsUpdate=H,bt.type=F}function A(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function O(S){const N=S.target;N.removeEventListener("dispose",O),V(N)}function V(S){Q(S),zt.remove(S)}function Q(S){const N=zt.get(S).programs;N!==void 0&&(N.forEach(function(k){It.releaseProgram(k)}),S.isShaderMaterial&&It.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,k,H,F,ut){N===null&&(N=ae);const xt=F.isMesh&&F.matrixWorld.determinant()<0,Rt=Re(S,N,k,H,F);Vt.setMaterial(H,xt);let Dt=k.index,qt=1;if(H.wireframe===!0){if(Dt=st.getWireframeAttribute(k),Dt===void 0)return;qt=2}const Yt=k.drawRange,Nt=k.attributes.position;let ge=Yt.start*qt,we=(Yt.start+Yt.count)*qt;ut!==null&&(ge=Math.max(ge,ut.start*qt),we=Math.min(we,(ut.start+ut.count)*qt)),Dt!==null?(ge=Math.max(ge,0),we=Math.min(we,Dt.count)):Nt!=null&&(ge=Math.max(ge,0),we=Math.min(we,Nt.count));const Ae=we-ge;if(Ae<0||Ae===1/0)return;_e.setup(F,H,Rt,k,Dt);let tn,fe=Et;if(Dt!==null&&(tn=tt.get(Dt),fe=ie,fe.setIndex(tn)),F.isMesh)H.wireframe===!0?(Vt.setLineWidth(H.wireframeLinewidth*ee()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(F.isLine){let Ft=H.linewidth;Ft===void 0&&(Ft=1),Vt.setLineWidth(Ft*ee()),F.isLineSegments?fe.setMode(L.LINES):F.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else F.isPoints?fe.setMode(L.POINTS):F.isSprite&&fe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ft=F._multiDrawStarts,Be=F._multiDrawCounts,pe=F._multiDrawCount,hn=Dt?tt.get(Dt).bytesPerElement:1,pi=zt.get(H).currentProgram.getUniforms();for(let en=0;en<pe;en++)pi.setValue(L,"_gl_DrawID",en),fe.render(Ft[en]/hn,Be[en])}else if(F.isInstancedMesh)fe.renderInstances(ge,Ae,F.count);else if(k.isInstancedBufferGeometry){const Ft=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Be=Math.min(k.instanceCount,Ft);fe.renderInstances(ge,Ae,Be)}else fe.render(ge,Ae)};function Y(S,N,k){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,Me(S,N,k),S.side=Yn,S.needsUpdate=!0,Me(S,N,k),S.side=Ze):Me(S,N,k)}this.compile=function(S,N,k=null){k===null&&(k=S),f=le.get(k),f.init(N),y.push(f),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const H=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ut=F.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Rt=ut[xt];Y(Rt,k,F),H.add(Rt)}else Y(ut,k,F),H.add(ut)}),y.pop(),f=null,H},this.compileAsync=function(S,N,k=null){const H=this.compile(S,N,k);return new Promise(F=>{function ut(){if(H.forEach(function(xt){zt.get(xt).currentProgram.isReady()&&H.delete(xt)}),H.size===0){F(S);return}setTimeout(ut,10)}ne.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let lt=null;function ct(S){lt&&lt(S)}function rt(){At.stop()}function gt(){At.start()}const At=new Mc;At.setAnimationLoop(ct),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(S){lt=S,q.setAnimationLoop(S),S===null?At.stop():At.start()},q.addEventListener("sessionstart",rt),q.addEventListener("sessionend",gt),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,N,C),f=le.get(S,y.length),f.init(N),y.push(f),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qt.setFromProjectionMatrix(Mt),ot=this.localClippingEnabled,J=ht.init(this.clippingPlanes,ot),x=wt.get(S,p.length),x.init(),p.push(x),q.enabled===!0&&q.isPresenting===!0){const ut=M.xr.getDepthSensingMesh();ut!==null&&yt(ut,N,-1/0,M.sortObjects)}yt(S,N,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(j,vt),ue=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ue&&Wt.addToRenderList(x,S),this.info.render.frame++,J===!0&&ht.beginShadows();const k=f.state.shadowsArray;bt.render(k,S,N),J===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,F=x.transmissive;if(f.setupLights(),N.isArrayCamera){const ut=N.cameras;if(F.length>0)for(let xt=0,Rt=ut.length;xt<Rt;xt++){const Dt=ut[xt];Bt(H,F,S,Dt)}ue&&Wt.render(S);for(let xt=0,Rt=ut.length;xt<Rt;xt++){const Dt=ut[xt];Ct(x,S,Dt,Dt.viewport)}}else F.length>0&&Bt(H,F,S,N),ue&&Wt.render(S),Ct(x,S,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(M,S,N),_e.resetDefaultState(),D=-1,$=null,y.pop(),y.length>0?(f=y[y.length-1],J===!0&&ht.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function yt(S,N,k,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Qt.intersectsSprite(S)){H&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Mt);const xt=Z.update(S),Rt=S.material;Rt.visible&&x.push(S,xt,Rt,k,Gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Qt.intersectsObject(S))){const xt=Z.update(S),Rt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Gt.copy(xt.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(Mt)),Array.isArray(Rt)){const Dt=xt.groups;for(let qt=0,Yt=Dt.length;qt<Yt;qt++){const Nt=Dt[qt],ge=Rt[Nt.materialIndex];ge&&ge.visible&&x.push(S,xt,ge,k,Gt.z,Nt)}}else Rt.visible&&x.push(S,xt,Rt,k,Gt.z,null)}}const ut=S.children;for(let xt=0,Rt=ut.length;xt<Rt;xt++)yt(ut[xt],N,k,H)}function Ct(S,N,k,H){const F=S.opaque,ut=S.transmissive,xt=S.transparent;f.setupLightsView(k),J===!0&&ht.setGlobalState(M.clippingPlanes,k),H&&Vt.viewport(_.copy(H)),F.length>0&&Ut(F,N,k),ut.length>0&&Ut(ut,N,k),xt.length>0&&Ut(xt,N,k),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Bt(S,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new xn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Dn:Un,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ut=f.state.transmissionRenderTarget[H.id],xt=H.viewport||_;ut.setSize(xt.z,xt.w);const Rt=M.getRenderTarget();M.setRenderTarget(ut),M.getClearColor(W),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),ue&&Wt.render(k);const Dt=M.toneMapping;M.toneMapping=Xn;const qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),J===!0&&ht.setGlobalState(M.clippingPlanes,H),Ut(S,k,H),E.updateMultisampleRenderTarget(ut),E.updateRenderTargetMipmap(ut),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Nt=0,ge=N.length;Nt<ge;Nt++){const we=N[Nt],Ae=we.object,tn=we.geometry,fe=we.material,Ft=we.group;if(fe.side===Ze&&Ae.layers.test(H.layers)){const Be=fe.side;fe.side=je,fe.needsUpdate=!0,se(Ae,k,H,tn,fe,Ft),fe.side=Be,fe.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(ut),E.updateRenderTargetMipmap(ut))}M.setRenderTarget(Rt),M.setClearColor(W,K),qt!==void 0&&(H.viewport=qt),M.toneMapping=Dt}function Ut(S,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ut=S.length;F<ut;F++){const xt=S[F],Rt=xt.object,Dt=xt.geometry,qt=H===null?xt.material:H,Yt=xt.group;Rt.layers.test(k.layers)&&se(Rt,N,k,Dt,qt,Yt)}}function se(S,N,k,H,F,ut){S.onBeforeRender(M,N,k,H,F,ut),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,N,k,H,S,ut),F.transparent===!0&&F.side===Ze&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,M.renderBufferDirect(k,N,H,F,S,ut),F.side=Yn,F.needsUpdate=!0,M.renderBufferDirect(k,N,H,F,S,ut),F.side=Ze):M.renderBufferDirect(k,N,H,F,S,ut),S.onAfterRender(M,N,k,H,F,ut)}function Me(S,N,k){N.isScene!==!0&&(N=ae);const H=zt.get(S),F=f.state.lights,ut=f.state.shadowsArray,xt=F.state.version,Rt=It.getParameters(S,F.state,ut,N,k),Dt=It.getProgramCacheKey(Rt);let qt=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?z:v).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,qt===void 0&&(S.addEventListener("dispose",O),qt=new Map,H.programs=qt);let Yt=qt.get(Dt);if(Yt!==void 0){if(H.currentProgram===Yt&&H.lightsStateVersion===xt)return Te(S,Rt),Yt}else Rt.uniforms=It.getUniforms(S),S.onBeforeCompile(Rt,M),Yt=It.acquireProgram(Rt,Dt),qt.set(Dt,Yt),H.uniforms=Rt.uniforms;const Nt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=ht.uniform),Te(S,Rt),H.needsLights=ze(S),H.lightsStateVersion=xt,H.needsLights&&(Nt.ambientLightColor.value=F.state.ambient,Nt.lightProbe.value=F.state.probe,Nt.directionalLights.value=F.state.directional,Nt.directionalLightShadows.value=F.state.directionalShadow,Nt.spotLights.value=F.state.spot,Nt.spotLightShadows.value=F.state.spotShadow,Nt.rectAreaLights.value=F.state.rectArea,Nt.ltc_1.value=F.state.rectAreaLTC1,Nt.ltc_2.value=F.state.rectAreaLTC2,Nt.pointLights.value=F.state.point,Nt.pointLightShadows.value=F.state.pointShadow,Nt.hemisphereLights.value=F.state.hemi,Nt.directionalShadowMap.value=F.state.directionalShadowMap,Nt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Nt.spotShadowMap.value=F.state.spotShadowMap,Nt.spotLightMatrix.value=F.state.spotLightMatrix,Nt.spotLightMap.value=F.state.spotLightMap,Nt.pointShadowMap.value=F.state.pointShadowMap,Nt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Yt,H.uniformsList=null,Yt}function Se(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=or.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Te(S,N){const k=zt.get(S);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Re(S,N,k,H,F){N.isScene!==!0&&(N=ae),E.resetTextureUnits();const ut=N.fog,xt=H.isMeshStandardMaterial?N.environment:null,Rt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:jn,Dt=(H.isMeshStandardMaterial?z:v).get(H.envMap||xt),qt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Yt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!k.morphAttributes.position,ge=!!k.morphAttributes.normal,we=!!k.morphAttributes.color;let Ae=Xn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ae=M.toneMapping);const tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=tn!==void 0?tn.length:0,Ft=zt.get(H),Be=f.state.lights;if(J===!0&&(ot===!0||S!==$)){const an=S===$&&H.id===D;ht.setState(H,S,an)}let pe=!1;H.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Be.state.version||Ft.outputColorSpace!==Rt||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==Dt||H.fog===!0&&Ft.fog!==ut||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ht.numPlanes||Ft.numIntersection!==ht.numIntersection)||Ft.vertexAlphas!==qt||Ft.vertexTangents!==Yt||Ft.morphTargets!==Nt||Ft.morphNormals!==ge||Ft.morphColors!==we||Ft.toneMapping!==Ae||Ft.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Ft.__version=H.version);let hn=Ft.currentProgram;pe===!0&&(hn=Me(H,N,F));let pi=!1,en=!1,br=!1;const Ce=hn.getUniforms(),Fn=Ft.uniforms;if(Vt.useProgram(hn.program)&&(pi=!0,en=!0,br=!0),H.id!==D&&(D=H.id,en=!0),pi||$!==S){oe.reverseDepthBuffer?(Tt.copy(S.projectionMatrix),Mh(Tt),yh(Tt),Ce.setValue(L,"projectionMatrix",Tt)):Ce.setValue(L,"projectionMatrix",S.projectionMatrix),Ce.setValue(L,"viewMatrix",S.matrixWorldInverse);const an=Ce.map.cameraPosition;an!==void 0&&an.setValue(L,Ht.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,en=!0,br=!0)}if(F.isSkinnedMesh){Ce.setOptional(L,F,"bindMatrix"),Ce.setOptional(L,F,"bindMatrixInverse");const an=F.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ce.setValue(L,"boneTexture",an.boneTexture,E))}F.isBatchedMesh&&(Ce.setOptional(L,F,"batchingTexture"),Ce.setValue(L,"batchingTexture",F._matricesTexture,E),Ce.setOptional(L,F,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",F._indirectTexture,E),Ce.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",F._colorsTexture,E));const Er=k.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Xt.update(F,k,hn),(en||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,Ce.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fn.envMap.value=Dt,Fn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Fn.envMapIntensity.value=N.environmentIntensity),en&&(Ce.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&vn(Fn,br),ut&&H.fog===!0&&ft.refreshFogUniforms(Fn,ut),ft.refreshMaterialUniforms(Fn,H,it,X,f.state.transmissionRenderTarget[S.id]),or.upload(L,Se(Ft),Fn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(or.upload(L,Se(Ft),Fn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ce.setValue(L,"center",F.center),Ce.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(L,"normalMatrix",F.normalMatrix),Ce.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const an=H.uniformsGroups;for(let Tr=0,Fc=an.length;Tr<Fc;Tr++){const yo=an[Tr];U.update(yo,hn),U.bind(yo,hn)}}return hn}function vn(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ze(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,N,k){zt.get(S.texture).__webglTexture=N,zt.get(S.depthTexture).__webglTexture=k;const H=zt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const k=zt.get(S);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,k=0){C=S,I=N,P=k;let H=!0,F=null,ut=!1,xt=!1;if(S){const Dt=zt.get(S);if(Dt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Dt.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Dt.__hasExternalTextures)E.rebindTextures(S,zt.get(S.texture).__webglTexture,zt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Nt=S.depthTexture;if(Dt.__boundDepthTexture!==Nt){if(Nt!==null&&zt.has(Nt)&&(S.width!==Nt.image.width||S.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const qt=S.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(xt=!0);const Yt=zt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Yt[N])?F=Yt[N][k]:F=Yt[N],ut=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?F=zt.get(S).__webglMultisampledFramebuffer:Array.isArray(Yt)?F=Yt[k]:F=Yt,_.copy(S.viewport),w.copy(S.scissor),G=S.scissorTest}else _.copy(St).multiplyScalar(it).floor(),w.copy(Pt).multiplyScalar(it).floor(),G=re;if(Vt.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&Vt.drawBuffers(S,F),Vt.viewport(_),Vt.scissor(w),Vt.setScissorTest(G),ut){const Dt=zt.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,k)}else if(xt){const Dt=zt.get(S.texture),qt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dt.__webglTexture,k||0,qt)}D=-1},this.readRenderTargetPixels=function(S,N,k,H,F,ut,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=zt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){Vt.bindFramebuffer(L.FRAMEBUFFER,Rt);try{const Dt=S.texture,qt=Dt.format,Yt=Dt.type;if(!oe.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&k>=0&&k<=S.height-F&&L.readPixels(N,k,H,F,Kt.convert(qt),Kt.convert(Yt),ut)}finally{const Dt=C!==null?zt.get(C).__webglFramebuffer:null;Vt.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,N,k,H,F,ut,xt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=zt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){const Dt=S.texture,qt=Dt.format,Yt=Dt.type;if(!oe.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-H&&k>=0&&k<=S.height-F){Vt.bindFramebuffer(L.FRAMEBUFFER,Rt);const Nt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Nt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),L.readPixels(N,k,H,F,Kt.convert(qt),Kt.convert(Yt),0);const ge=C!==null?zt.get(C).__webglFramebuffer:null;Vt.bindFramebuffer(L.FRAMEBUFFER,ge);const we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vh(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Nt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(Nt),L.deleteSync(we),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,k=0){S.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(S.image.width*H),ut=Math.floor(S.image.height*H),xt=N!==null?N.x:0,Rt=N!==null?N.y:0;E.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xt,Rt,F,ut),Vt.unbindTexture()},this.copyTextureToTexture=function(S,N,k=null,H=null,F=0){S.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let ut,xt,Rt,Dt,qt,Yt;k!==null?(ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,Rt=k.min.x,Dt=k.min.y):(ut=S.image.width,xt=S.image.height,Rt=0,Dt=0),H!==null?(qt=H.x,Yt=H.y):(qt=0,Yt=0);const Nt=Kt.convert(N.format),ge=Kt.convert(N.type);E.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const we=L.getParameter(L.UNPACK_ROW_LENGTH),Ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),tn=L.getParameter(L.UNPACK_SKIP_PIXELS),fe=L.getParameter(L.UNPACK_SKIP_ROWS),Ft=L.getParameter(L.UNPACK_SKIP_IMAGES),Be=S.isCompressedTexture?S.mipmaps[F]:S.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Be.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Be.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,qt,Yt,ut,xt,Nt,ge,Be.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,qt,Yt,Be.width,Be.height,Nt,Be.data):L.texSubImage2D(L.TEXTURE_2D,F,qt,Yt,ut,xt,Nt,ge,Be),L.pixelStorei(L.UNPACK_ROW_LENGTH,we),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft),F===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,k=null,H=null,F=0){S.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0);let ut,xt,Rt,Dt,qt,Yt,Nt,ge,we;const Ae=S.isCompressedTexture?S.mipmaps[F]:S.image;k!==null?(ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,Rt=k.max.z-k.min.z,Dt=k.min.x,qt=k.min.y,Yt=k.min.z):(ut=Ae.width,xt=Ae.height,Rt=Ae.depth,Dt=0,qt=0,Yt=0),H!==null?(Nt=H.x,ge=H.y,we=H.z):(Nt=0,ge=0,we=0);const tn=Kt.convert(N.format),fe=Kt.convert(N.type);let Ft;if(N.isData3DTexture)E.setTexture3D(N,0),Ft=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)E.setTexture2DArray(N,0),Ft=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Be=L.getParameter(L.UNPACK_ROW_LENGTH),pe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),pi=L.getParameter(L.UNPACK_SKIP_ROWS),en=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yt),S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ft,F,Nt,ge,we,ut,xt,Rt,tn,fe,Ae.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ft,F,Nt,ge,we,ut,xt,Rt,tn,Ae.data):L.texSubImage3D(Ft,F,Nt,ge,we,ut,xt,Rt,tn,fe,Ae),L.pixelStorei(L.UNPACK_ROW_LENGTH,Be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,pi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,en),F===0&&N.generateMipmaps&&L.generateMipmap(Ft),Vt.unbindTexture()},this.initRenderTarget=function(S){zt.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Vt.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,Vt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===lo?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===xr?"display-p3":"srgb"}}class mo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new mo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Im extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new T;class pr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ji extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const os=new T,Pi=new T,Li=new T,Ii=new Ot,ls=new Ot,Tc=new me,Ws=new T,cs=new T,Xs=new T,fl=new Ot,sa=new Ot,pl=new Ot;class Ss extends Le{constructor(t=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dm(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new pr(n,3,0,!1)),Ri.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Tc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;qs(Ws.set(-.5,-.5,0),Li,a,Pi,i,r),qs(cs.set(.5,-.5,0),Li,a,Pi,i,r),qs(Xs.set(.5,.5,0),Li,a,Pi,i,r),fl.set(0,0),sa.set(1,0),pl.set(1,1);let o=t.ray.intersectTriangle(Ws,cs,Xs,!1,os);if(o===null&&(qs(cs.set(-.5,.5,0),Li,a,Pi,i,r),sa.set(0,1),o=t.ray.intersectTriangle(Ws,Xs,cs,!1,os),o===null))return;const l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:cn.getInterpolation(os,Ws,cs,Xs,fl,sa,pl,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qs(s,t,e,n,i,r){Ii.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ls.x=r*Ii.x-i*Ii.y,ls.y=i*Ii.x+r*Ii.y):ls.copy(Ii),s.copy(t),s.x+=ls.x,s.y+=ls.y,s.applyMatrix4(Tc)}class Um extends Ve{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Je,h=Je,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml extends Qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new me,gl=new me,Ys=[],_l=new di,Nm=new me,hs=new B,us=new fi;class js extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),_l.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(_l)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),us.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),gl.multiplyMatrices(n,Di),hs.matrixWorld=gl,hs.raycast(t,Ys);for(let a=0,o=Ys.length;a<o;a++){const l=Ys[a];l.instanceId=r,l.object=this,e.push(l)}Ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Um(new Float32Array(i*this.count),i,this.count,so,wn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ms extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mr=new T,gr=new T,xl=new me,ds=new co,Ks=new fi,ra=new T,vl=new T;class Mr extends Le{constructor(t=new Ee,e=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)mr.fromBufferAttribute(e,i-1),gr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=mr.distanceTo(gr);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;xl.copy(i).invert(),ds.copy(t.ray).applyMatrix4(xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,f=g-1;x<f;x+=c){const p=h.getX(x),y=h.getX(x+1),M=$s(this,t,ds,l,p,y);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(g-1),f=h.getX(m),p=$s(this,t,ds,l,x,f);p&&e.push(p)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=m,f=g-1;x<f;x+=c){const p=$s(this,t,ds,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=$s(this,t,ds,l,g-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $s(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(mr.fromBufferAttribute(a,i),gr.fromBufferAttribute(a,r),e.distanceSqToSegment(mr,gr,ra,vl)>n)return;ra.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ra);if(!(l<t.near||l>t.far))return{distance:l,point:vl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ml=new T,yl=new T;class Fm extends Mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ml.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ml.distanceTo(yl);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lr extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sl=new me,Ja=new co,Zs=new fi,Js=new T;class aa extends Le{constructor(t=new Ee,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=r,t.ray.intersectsSphere(Zs)===!1)return;Sl.copy(i).invert(),Ja.copy(t.ray).applyMatrix4(Sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,x=m;g<x;g++){const f=c.getX(g);Js.fromBufferAttribute(d,f),wl(Js,f,l,i,t,e,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,x=m;g<x;g++)Js.fromBufferAttribute(d,g),wl(Js,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wl(s,t,e,n,i,r,a){const o=Ja.distanceSqToPoint(s);if(o<e){const l=new T;Ja.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class yr extends Ve{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new Ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const m=n+d/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],m=[];let g=0;const x=[],f=n/2;let p=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(m,2));function y(){const b=new T,I=new T;let P=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const $=[],_=D/r,w=_*(e-t)+t;for(let G=0;G<=i;G++){const W=G/i,K=W*l+o,nt=Math.sin(K),X=Math.cos(K);I.x=w*nt,I.y=-_*n+f,I.z=w*X,d.push(I.x,I.y,I.z),b.set(nt,C,X).normalize(),u.push(b.x,b.y,b.z),m.push(W,1-_),$.push(g++)}x.push($)}for(let D=0;D<i;D++)for(let $=0;$<r;$++){const _=x[$][D],w=x[$+1][D],G=x[$+1][D+1],W=x[$][D+1];t>0&&(h.push(_,w,W),P+=3),e>0&&(h.push(w,G,W),P+=3)}c.addGroup(p,P,0),p+=P}function M(b){const I=g,P=new Ot,C=new T;let D=0;const $=b===!0?t:e,_=b===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,f*_,0),u.push(0,_,0),m.push(.5,.5),g++;const w=g;for(let G=0;G<=i;G++){const K=G/i*l+o,nt=Math.cos(K),X=Math.sin(K);C.x=$*X,C.y=f*_,C.z=$*nt,d.push(C.x,C.y,C.z),u.push(0,_,0),P.x=nt*.5+.5,P.y=X*.5*_+.5,m.push(P.x,P.y),g++}for(let G=0;G<i;G++){const W=I+G,K=w+G;b===!0?h.push(K,K+1,W):h.push(K+1,K,W),D+=3}c.addGroup(p,D,b===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hi extends te{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Hi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sr extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new T,b=new T,I=new T;for(let P=0;P<e.length;P+=3)m(e[P+0],M),m(e[P+1],b),m(e[P+2],I),l(M,b,I,y)}function l(y,M,b,I){const P=I+1,C=[];for(let D=0;D<=P;D++){C[D]=[];const $=y.clone().lerp(b,D/P),_=M.clone().lerp(b,D/P),w=P-D;for(let G=0;G<=w;G++)G===0&&D===P?C[D][G]=$:C[D][G]=$.clone().lerp(_,G/w)}for(let D=0;D<P;D++)for(let $=0;$<2*(P-D)-1;$++){const _=Math.floor($/2);$%2===0?(u(C[D][_+1]),u(C[D+1][_]),u(C[D][_])):(u(C[D][_+1]),u(C[D+1][_+1]),u(C[D+1][_]))}}function c(y){const M=new T;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(y),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){const y=new T;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const b=f(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;a.push(b,1-I)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const M=a[y+0],b=a[y+2],I=a[y+4],P=Math.max(M,b,I),C=Math.min(M,b,I);P>.9&&C<.1&&(M<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function m(y,M){const b=y*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function g(){const y=new T,M=new T,b=new T,I=new T,P=new Ot,C=new Ot,D=new Ot;for(let $=0,_=0;$<r.length;$+=9,_+=6){y.set(r[$+0],r[$+1],r[$+2]),M.set(r[$+3],r[$+4],r[$+5]),b.set(r[$+6],r[$+7],r[$+8]),P.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),D.set(a[_+4],a[_+5]),I.copy(y).add(M).add(b).divideScalar(3);const w=f(I);x(P,_+0,y,w),x(C,_+2,M,w),x(D,_+4,b,w)}}function x(y,M,b,I){I<0&&y.x===1&&(a[M]=y.x-1),b.x===0&&b.z===0&&(a[M]=I/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.vertices,t.indices,t.radius,t.details)}}class go extends Sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new go(t.radius,t.detail)}}class _o extends Sr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _o(t.radius,t.detail)}}class xo extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,m=new T,g=new Ot;for(let x=0;x<=i;x++){for(let f=0;f<=n;f++){const p=r+f/n*a;m.x=d*Math.cos(p),m.y=d*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){const f=x*(n+1);for(let p=0;p<n;p++){const y=p+f,M=y,b=y+n+1,I=y+n+2,P=y+1;o.push(M,b,P),o.push(b,I,P)}}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Oe extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,u=new T,m=[],g=[],x=[],f=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const P=I/e;d.x=-t*Math.cos(i+P*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(i+P*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(P+b,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=h[p][y+1],b=h[p][y],I=h[p+1][y],P=h[p+1][y+1];(p!==0||a>0)&&m.push(M,b,P),(p!==n-1||l<Math.PI)&&m.push(b,I,P)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wr extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new T,d=new T,u=new T;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const x=g/i*r,f=m/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(x),d.y=(t+e*Math.cos(f))*Math.sin(x),d.z=e*Math.sin(f),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const x=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,p=(i+1)*(m-1)+g,y=(i+1)*m+g;a.push(x,f,y),a.push(f,p,y)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Om extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dt extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vo extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bm extends vo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oa=new me,bl=new T,El=new T;class Ac{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(bl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tl=new me,fs=new T,la=new T;class zm extends Ac{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(fs),la.copy(n.position),la.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(la),n.updateMatrixWorld(),i.makeTranslation(-fs.x,-fs.y,-fs.z),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class Fi extends vo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class km extends Ac{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Al extends vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new km}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hm=new fo(-1,1,1,-1,0,1);class Gm extends Ee{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const Vm=new Gm;class Mo{constructor(t){this._mesh=new B(Vm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Hm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Pc extends Qi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vs.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rl extends Qi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Wm extends Qi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Xm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ot);this._width=n.width,this._height=n.height,e=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pc(Rc),this.copyPass.material.blending=In,this.clock=new Cc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Rl!==void 0&&(a instanceof Rl?n=!0:a instanceof Wm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qm extends Qi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new jt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Ym={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new jt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ji extends Qi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ot(t.x,t.y):new Ot(256,256),this.clearColor=new jt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,a,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new xn(r,a,{type:Dn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const m=new xn(r,a,{type:Dn});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=Ym;this.highPassUniforms=vs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ot(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Rc;this.copyUniforms=vs.clone(h.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new jt,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new Mo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ot(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ot(.5,.5)},direction:{value:new Ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ji.BlurDirectionX=new Ot(1,0);ji.BlurDirectionY=new Ot(0,1);const jm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Km extends Qi{constructor(){super();const t=jm;this.uniforms=vs.clone(t.uniforms),this.material=new Om({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Mo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===to?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ps=new T;function ln(s,t,e,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ps.copy(t),ps[n]=0,ps.normalize();const c=.5*a/(a+o),h=1-ps.angleTo(s)/l;return Math.sign(ps[e])===1?h*c:o/(a+o)+c+c*(1-h)}class ai extends pt{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new T,l=new T,c=new T(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,m=h.length/6,g=new T,x=.5/i;for(let f=0,p=0;f<h.length;f+=3,p+=2)switch(o.fromArray(h,f),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[f+0]=c.x*Math.sign(o.x)+l.x*r,h[f+1]=c.y*Math.sign(o.y)+l.y*r,h[f+2]=c.z*Math.sign(o.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/m)){case 0:g.set(1,0,0),u[p+0]=ln(g,l,"z","y",r,n),u[p+1]=1-ln(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[p+0]=1-ln(g,l,"z","y",r,n),u[p+1]=1-ln(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[p+0]=1-ln(g,l,"x","z",r,t),u[p+1]=ln(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-ln(g,l,"x","z",r,t),u[p+1]=1-ln(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-ln(g,l,"x","y",r,t),u[p+1]=1-ln(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[p+0]=ln(g,l,"x","y",r,t),u[p+1]=1-ln(g,l,"y","x",r,e);break}}}function Vn(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const m=s[u].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Pl(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const m=[];for(let x=0;x<a[h].length;++x)m.push(a[h][x][u]);const g=Pl(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Pl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Qe(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,m=h.count;u<m;u++)for(let g=0;g<e;g++){const x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Ke=Math.PI*2,$t=(s,t,e)=>Math.max(t,Math.min(e,s)),$m=(s,t,e)=>s+(t-s)*e,Oi=(s,t,e,n)=>$m(s,t,1-Math.exp(-e*n)),at=(s=0,t=1)=>s+Math.random()*(t-s),mn=(s,t)=>Math.floor(at(s,t+1)),ni=s=>s[Math.floor(Math.random()*s.length)],yn=(s,t,e,n)=>Math.hypot(s-e,t-n),Ll=(s,t,e)=>{let n=((t-s+Math.PI)%Ke+Ke)%Ke-Math.PI;return s+n*e};function Nn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,{c:e,ctx:e.getContext("2d")}}function ts(s,t=1,e=1){const n=new yr(s);return n.wrapS=n.wrapT=_s,n.repeat.set(t,e),n.anisotropy=4,n.colorSpace=Ye,n}function ys(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)",e=128){const{c:n,ctx:i}=Nn(e,e),r=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,s),r.addColorStop(.35,s),r.addColorStop(1,t),i.fillStyle=r,i.fillRect(0,0,e,e);const a=new yr(n);return a.colorSpace=Ye,a}function Zm(){const{c:s,ctx:t}=Nn(256,256);t.fillStyle="#15161b",t.fillRect(0,0,256,256);for(let n=0;n<6e3;n++){const i=Math.random();t.fillStyle=i>.5?`rgba(255,255,255,${at(.01,.05)})`:`rgba(0,0,0,${at(.05,.2)})`,t.fillRect(Math.random()*256,Math.random()*256,at(1,2.2),at(1,2.2))}for(let n=0;n<9;n++){t.strokeStyle=`rgba(0,0,0,${at(.1,.3)})`,t.lineWidth=at(.5,1.5),t.beginPath();let i=Math.random()*256,r=Math.random()*256;t.moveTo(i,r);for(let a=0;a<4;a++)i+=at(-30,30),r+=at(10,40),t.lineTo(i,r);t.stroke()}return ts(s,5,5)}function Jm(){const{c:s,ctx:t}=Nn(256,256);t.fillStyle="#23242b",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.45)",t.lineWidth=2;for(let e=0;e<=256;e+=64)t.beginPath(),t.moveTo(e,0),t.lineTo(e,256),t.stroke(),t.beginPath(),t.moveTo(0,e),t.lineTo(256,e),t.stroke();for(let e=0;e<1600;e++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,.025)":"rgba(0,0,0,.08)",t.fillRect(Math.random()*256,Math.random()*256,at(1,3),at(1,3));return ts(s,4,4)}function Lc(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Il=[["#3a2b25","#241a18"],["#33323a","#1d1c23"],["#4a3528","#2a1d16"],["#2d3438","#191f22"],["#463b2f","#28211a"],["#3b2c33","#22181d"],["#4a4238","#2a241d"],["#29303c","#171b22"]];function Qm(s=0){const t=Lc(9173+s*733),{c:e,ctx:n}=Nn(256,384),[i,r]=Il[s%Il.length],a=n.createLinearGradient(0,0,0,384);a.addColorStop(0,i),a.addColorStop(1,r),n.fillStyle=a,n.fillRect(0,0,256,384);for(let d=0;d<2600;d++)n.fillStyle=t()>.5?`rgba(255,255,255,${t()*.035})`:`rgba(0,0,0,${t()*.13})`,n.fillRect(t()*256,t()*384,t()*3+1,t()*2+1);n.fillStyle="rgba(0,0,0,.28)",n.fillRect(0,0,8,384),n.fillRect(248,0,8,384),n.fillStyle="rgba(255,255,255,.045)",n.fillRect(8,0,3,384),n.fillRect(245,0,3,384);const o=6,l=4,c=256/l,h=384/o;for(let d=0;d<o;d++){n.fillStyle="rgba(0,0,0,.22)",n.fillRect(0,d*h+h-5,256,5);for(let u=0;u<l;u++){const m=u*c+20,g=d*h+20,x=c-40,f=h-46;if(n.fillStyle="rgba(10,8,7,.9)",n.fillRect(m-4,g-4,x+8,f+8),t()<.34){const y=t()<.78,M=n.createLinearGradient(m,g,m,g+f);y?(M.addColorStop(0,"rgba(255,214,140,.95)"),M.addColorStop(1,"rgba(190,120,55,.55)")):(M.addColorStop(0,"rgba(150,190,210,.7)"),M.addColorStop(1,"rgba(60,95,120,.4)")),n.fillStyle=M,n.fillRect(m,g,x,f),t()<.45&&(n.fillStyle="rgba(20,12,8,.5)",n.fillRect(m,g,x,f*at(.15,.45)),n.fillRect(m+x*at(.1,.7),g,x*at(.12,.3),f)),t()<.22&&(n.fillStyle="rgba(12,8,6,.7)",n.beginPath(),n.arc(m+x*.55,g+f*.5,5,0,Ke),n.fill(),n.fillRect(m+x*.55-6,g+f*.58,12,f*.4))}else{const y=n.createLinearGradient(m,g,m,g+f);y.addColorStop(0,"rgba(18,26,34,.95)"),y.addColorStop(1,"rgba(8,12,18,.95)"),n.fillStyle=y,n.fillRect(m,g,x,f),n.fillStyle="rgba(120,150,170,.07)",n.fillRect(m+x*.1,g,x*.16,f)}n.fillStyle="rgba(8,6,5,.75)",n.fillRect(m+x/2-1.5,g,3,f),n.fillRect(m,g+f*.5-1.5,x,3),n.fillStyle="rgba(255,255,255,.07)",n.fillRect(m-5,g+f+4,x+10,3)}}return ts(e,1,1)}function tg(s=0){const t=Lc(5521+s*191),{c:e,ctx:n}=Nn(512,128);n.fillStyle="#191419",n.fillRect(0,0,512,128),n.fillStyle="#0b0a0e",n.fillRect(0,0,512,14);for(let i=0;i<5;i++){if(i===2)continue;const r=10+i*100,a=22,o=84,l=82,c=t()<.85,h=n.createLinearGradient(0,a,0,a+l);h.addColorStop(0,c?"rgba(255,206,130,.9)":"rgba(30,40,50,.9)"),h.addColorStop(1,c?"rgba(160,92,40,.55)":"rgba(8,12,18,.95)"),n.fillStyle=h,n.fillRect(r,a,o,l),n.strokeStyle="rgba(6,5,4,.9)",n.lineWidth=4,n.strokeRect(r,a,o,l),n.fillStyle="rgba(20,10,6,.55)",n.fillRect(r,a+l*.55,o,l*.45),n.fillStyle="rgba(255,230,180,.25)",n.fillRect(r+6,a+6,o*.3,l*.5)}return n.fillStyle="#2b1d14",n.fillRect(222,26,68,86),n.fillStyle="rgba(255,210,140,.6)",n.fillRect(234,34,44,38),n.fillStyle="#c9a35a",n.beginPath(),n.arc(276,78,3,0,Ke),n.fill(),ts(e,1,1)}function eg(s,t="#ffcf87",e="rgba(10,7,6,.9)",n=!1,i="bold"){const r=n?128:512,a=n?512:128,{c:o,ctx:l}=Nn(r,a);if(l.fillStyle=e,l.fillRect(0,0,r,a),l.strokeStyle="rgba(214,178,106,.5)",l.lineWidth=5,l.strokeRect(4,4,r-8,a-8),l.textAlign="center",l.textBaseline="middle",l.shadowColor=t,l.shadowBlur=26,l.fillStyle=t,n){const h=s.split(""),d=(a-60)/h.length;l.font=`${i} 64px Georgia, serif`,h.forEach((u,m)=>l.fillText(u,r/2,42+d*(m+.5)))}else{let h=64;for(l.font=`${i} ${h}px Georgia, serif`;l.measureText(s).width>r-50&&h>22;)h-=4,l.font=`${i} ${h}px Georgia, serif`;l.fillText(s,r/2,a/2+4)}l.shadowBlur=0;const c=new yr(o);return c.colorSpace=Ye,c}function Dl(s="#7d2b26"){const{c:t,ctx:e}=Nn(256,64);e.fillStyle=s,e.fillRect(0,0,256,64);for(let n=0;n<256;n+=32)e.fillStyle="rgba(235,220,190,.82)",e.fillRect(n,0,16,64);return e.fillStyle="rgba(0,0,0,.18)",e.fillRect(0,52,256,12),ts(t,2,1)}function Ic(s,t=!0,e=!1){return s.traverse(n=>{n.isMesh&&(n.castShadow=t,n.receiveShadow=e)}),s}const Lt={N:5,ROAD:16,BLOCK:52,HALF:170,roads:[-170,-102,-34,34,102,170],centers:[-136,-68,0,68,136]},Ul={"2,1":"club","1,3":"church","3,3":"park","0,2":"butcher","2,4":"warehouseA","3,4":"warehouseB","1,4":"yard","4,0":"parking"},ng=["HOTEL","BAR","LIQUOR","CAFE","PAWN","JAZZ","CLUB","DINER","MOTEL","CIGARS","BANK","ROXY"],ig=["#7d2b26","#28503a","#7a5a24","#3b2c50","#62331f"];let ca=new Map;function Nl(s,t,e){const n=s+t+e;return ca.has(n)||ca.set(n,eg(s,t,"rgba(9,7,6,.94)",e)),ca.get(n)}function sg(s,t){const e=new Ie;e.name="city",s.add(e);const n=[],i={},r=[],a=[],o=[],l=[];for(let R=0;R<8;R++){const A=Qm(R);l.push(new dt({map:A,emissiveMap:A,emissive:16756842,emissiveIntensity:.62,roughness:.9,metalness:.04,color:16777215}))}const c=new dt({color:1645087,roughness:.95,metalness:.05}),h=new dt({color:1776930,roughness:.7,metalness:.55}),d=new dt({color:10123837,roughness:.35,metalness:.8}),u=new dt({color:5985611,roughness:.9}),m=new dt({color:3749423,roughness:.95}),g=new dt({map:Jm(),color:10132132,roughness:.92,metalness:.02}),x=new dt({map:Zm(),color:8290184,roughness:.42,metalness:.22}),f=new be({color:11770460,toneMapped:!1}),p=ys("rgba(255,214,150,.9)","rgba(255,180,90,0)",128),y=new Oe(700,32,20),M=new Ge({side:je,depthWrite:!1,fog:!1,uniforms:{top:{value:new jt(263693)},mid:{value:new jt(1316903)},horizon:{value:new jt(5976614)},low:{value:new jt(723728)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform vec3 top, mid, horizon, low;
      void main(){ float h = normalize(vP).y;
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.28, h));
        c = mix(c, top, smoothstep(0.2, 0.85, h));
        c = mix(low, c, smoothstep(-0.22, -0.01, h));
        float glow = pow(max(0.0, 1.0 - abs(h - 0.015) * 5.0), 3.0);
        c += vec3(0.12, 0.055, 0.02) * glow;
        gl_FragColor = vec4(c, 1.0); }`}),b=new B(y,M);b.renderOrder=-10,e.add(b);const I=[];for(let R=0;R<900;R++){const A=at(0,Ke),O=at(.12,.96),V=Math.sqrt(1-O*O);I.push(Math.cos(A)*V*660,O*660,Math.sin(A)*V*660)}const P=new Ee;P.setAttribute("position",new ce(I,3));const C=new aa(P,new lr({color:12372189,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.55,fog:!1,depthWrite:!1}));e.add(C);const D=ys("rgba(255,244,214,1)","rgba(255,220,160,0)",128),$=new Ss(new Ji({map:D,transparent:!0,opacity:.5,blending:_n,depthWrite:!1,fog:!1}));$.scale.set(180,180,1),$.position.set(-210,190,-420),e.add($);const _=new B(new Ni(17,48),new be({color:15984324,fog:!1}));_.position.set(-210,190,-421),_.lookAt(0,0,0),e.add(_);const w=new B(new Fe(760,760),new dt({color:658190,roughness:.9,metalness:.1}));w.rotation.x=-Math.PI/2,w.position.y=-.08,w.receiveShadow=!0,e.add(w);const G=new Fe(1,1),W=[],K=Lt.HALF*2+20;for(const R of Lt.roads){const A=G.clone();A.scale(K,Lt.ROAD,1),A.rotateX(-Math.PI/2),A.translate(0,.015,R),W.push(A);const O=G.clone();O.scale(Lt.ROAD,K,1),O.rotateX(-Math.PI/2),O.translate(R,.016,0),W.push(O)}const nt=new B(Vn(W),x);nt.receiveShadow=!0,e.add(nt);const X=[],it=new Fe(.22,2.6);it.rotateX(-Math.PI/2);for(const R of Lt.roads)for(let A=-170;A<Lt.HALF;A+=7){let O=it.clone();O.translate(A,.03,R),X.push(O),O=it.clone(),O.rotateY(Math.PI/2),O.translate(R,.03,A),X.push(O)}const j=new B(Vn(X),f);e.add(j);const vt=[];for(const R of Lt.roads)for(const A of Lt.roads)for(let O=-2;O<=2;O++){let V=new Fe(1.1,5.2);V.rotateX(-Math.PI/2),V.translate(R+O*2.1,.028,A-Lt.ROAD/2-3.2),vt.push(V),V=new Fe(1.1,5.2),V.rotateX(-Math.PI/2),V.translate(R+O*2.1,.028,A+Lt.ROAD/2+3.2),vt.push(V)}const St=new B(Vn(vt),new be({color:11117201,transparent:!0,opacity:.5}));e.add(St);for(let R=0;R<Lt.N;R++)for(let A=0;A<Lt.N;A++){const O=Lt.centers[R],V=Lt.centers[A],Q=`${R},${A}`,Y=Ul[Q]||"block";if(r.push({i:R,j:A,x:O,z:V,type:Y}),Y==="park"){Wt(O,V);continue}if(Y==="church"){bt(O,V);continue}if(Y==="club"){le(O,V);continue}if(Y==="warehouseA"||Y==="warehouseB"||Y==="yard"){Xt(O,V,Y);continue}if(Y==="parking"){Et(O,V);continue}if(Y==="butcher"){ht(O,V);continue}tt(O,V,R,A)}const Pt=new pt(Lt.BLOCK,.3,Lt.BLOCK),re=new js(Pt,g,Lt.N*Lt.N),Qt=new me;let J=0;for(let R=0;R<Lt.N;R++)for(let A=0;A<Lt.N;A++)Qt.makeTranslation(Lt.centers[R],.06,Lt.centers[A]),re.setMatrixAt(J++,Qt);re.receiveShadow=!0,e.add(re);const ot=[];for(let R=0;R<Lt.N;R++)for(let A=0;A<Lt.N;A++){const O=Lt.centers[R],V=Lt.centers[A],Q=Lt.BLOCK/2;let Y=new pt(Lt.BLOCK+.4,.34,.5);Y.translate(O,.1,V-Q),ot.push(Y),Y=new pt(Lt.BLOCK+.4,.34,.5),Y.translate(O,.1,V+Q),ot.push(Y),Y=new pt(.5,.34,Lt.BLOCK+.4),Y.translate(O-Q,.1,V),ot.push(Y),Y=new pt(.5,.34,Lt.BLOCK+.4),Y.translate(O+Q,.1,V),ot.push(Y)}const Tt=new B(Vn(ot),new dt({color:2895156,roughness:.85}));Tt.receiveShadow=!0,e.add(Tt);const Mt=[],Ht=[];for(const R of Lt.roads)for(const A of Lt.roads)for(const[O,V]of[[-1,-1],[1,1]]){const Q=R+O*(Lt.ROAD/2+1.4),Y=A+V*(Lt.ROAD/2+1.4);let lt=new te(.09,.14,6.6,6);lt.translate(Q,3.3,Y),Mt.push(lt);let ct=new pt(.1,.1,1.9);ct.rotateY(O>0?-Math.PI/4:Math.PI/4),ct.translate(Q+O*.65,6.55,Y+V*.65),Mt.push(ct),Ht.push(Q+O*1.25,6.42,Y+V*1.25)}const Gt=new B(Vn(Mt),h);Gt.castShadow=!0,e.add(Gt);const ae=new Oe(.2,8,6),ue=new be({color:16767392,toneMapped:!1}),ee=new js(ae,ue,Ht.length/3);for(let R=0;R<Ht.length/3;R++)Qt.makeTranslation(Ht[R*3],Ht[R*3+1],Ht[R*3+2]),ee.setMatrixAt(R,Qt);e.add(ee);const L=new Ee;L.setAttribute("position",new ce(Ht,3));const We=new aa(L,new lr({map:p,color:16763015,size:5.5,transparent:!0,opacity:.65,blending:_n,depthWrite:!1,sizeAttenuation:!0}));e.add(We);const ne=[[0,-50,16757096,42],[-68,50,16754784,34],[0,132,16758903,40],[68,68,16755302,26],[102,34,16760954,24]];for(const[R,A,O,V]of ne){const Q=new Fi(O,22,V,2);Q.position.set(R,7,A),e.add(Q)}const oe=new dt({color:659480,roughness:.06,metalness:1,transparent:!0,opacity:.72,envMapIntensity:2});for(let R=0;R<42;R++){const A=Math.random()<.5,O=ni(Lt.roads)+at(-5.5,5.5),V=at(-164,Lt.HALF-6),Q=new B(new Ni(at(.8,2.6),14),oe);Q.rotation.x=-Math.PI/2,Q.scale.z=at(.5,1),Q.position.set(A?V:O,.035,A?O:V),e.add(Q)}Kt(),_e();const Vt=1300,de=new Ee,zt=new Float32Array(Vt*6),E=[];for(let R=0;R<Vt;R++){const A=at(-200,200),O=at(0,55),V=at(-200,220);E.push({x:A,y:O,z:V,v:at(24,38)}),zt[R*6]=A,zt[R*6+1]=O,zt[R*6+2]=V,zt[R*6+3]=A+.12,zt[R*6+4]=O-at(.7,1.5),zt[R*6+5]=V+.05}de.setAttribute("position",new Qe(zt,3));const v=new Fm(de,new Ms({color:10466508,transparent:!0,opacity:.16,depthWrite:!1}));e.add(v),o.push(R=>{const A=de.attributes.position.array;for(let O=0;O<Vt;O++){const V=E[O];V.y-=V.v*R,V.y<-1&&(V.y=at(38,60),V.x=at(-200,200),V.z=at(-200,220)),A[O*6]=V.x,A[O*6+1]=V.y,A[O*6+2]=V.z,A[O*6+3]=V.x+.18,A[O*6+4]=V.y-1.3,A[O*6+5]=V.z+.08}de.attributes.position.needsUpdate=!0}),o.push((R,A)=>{for(const O of a){const V=.82+Math.sin(A*O.speed+O.phase)*.1+(Math.sin(A*17+O.phase)>.96?-.35:0);O.mat.opacity=$t(V,.4,1)}});function z(R,A,O,V,Q=20){n.push({minX:R-O/2,maxX:R+O/2,minZ:A-V/2,maxZ:A+V/2,h:Q})}function tt(R,A,O,V){const Q=Fl(1337+O*71+V*977),Y=Q(),lt=[];if(Y<.16)lt.push({w:at(30,38),d:at(30,38),h:at(30,46),x:0,z:0});else if(Y<.46){const rt=Q()<.5,gt=at(18,22),At=at(18,22);rt?lt.push({w:gt,d:40,h:at(16,34),x:-11,z:0},{w:At,d:40,h:at(14,30),x:11,z:0}):lt.push({w:40,d:gt,h:at(16,34),x:0,z:-11},{w:40,d:At,h:at(14,30),x:0,z:11})}else{const rt=[at(12,26),at(14,32),at(11,24),at(16,36)];lt.push({w:19,d:19,h:rt[0],x:-11,z:-11},{w:19,d:19,h:rt[1],x:11,z:-11},{w:19,d:19,h:rt[2],x:-11,z:11},{w:19,d:19,h:rt[3],x:11,z:11})}let ct=0;for(const rt of lt){const gt=R+rt.x,At=A+rt.z;st(gt,At,rt.w,rt.d,rt.h,Q);const yt=Math.abs(rt.x)>2?Math.sign(rt.x):Q()<.5?-1:1,Ct=Math.abs(rt.z)>2?Math.sign(rt.z):Q()<.5?-1:1,Bt=Math.abs(rt.x)>Math.abs(rt.z)||Math.abs(rt.x)===Math.abs(rt.z)&&Q()<.5,Ut=Bt?{axis:"x",sign:yt,width:rt.d}:{axis:"z",sign:Ct,width:rt.w};ct<2&&Q()<.72&&(It(gt,At,rt.w,rt.d,Ut),ct++),ct<2&&Q()<.55&&It(gt,At,rt.w,rt.d,{axis:Bt?"z":"x",sign:Bt?Ct:yt,width:Bt?rt.w:rt.d}),ct<2&&ct++}if(Q()<.5){const rt=lt.reduce((gt,At)=>gt.h>At.h?gt:At);wt(R+rt.x,A+rt.z,rt)}}function st(R,A,O,V,Q,Y){const lt=Math.floor(Y()*8),ct=new pt(O,Q,V);Z(ct,O,Q,V);const rt=l[lt],gt=new B(ct,[rt,rt,c,c,rt,rt]);gt.position.set(R,Q/2+.2,A),gt.castShadow=!0,gt.receiveShadow=!0,e.add(gt),z(R,A,O,V,Q);const At=new B(new pt(O+.7,.55,V+.7),c);if(At.position.set(R,Q+.25,A),At.castShadow=!0,e.add(At),Q>18){const yt=new Ie,Ct=new B(new te(1.9,2.1,2.6,12),new dt({color:3878436,roughness:.9}));Ct.position.y=3.2,yt.add(Ct);const Bt=new B(new Hi(2.2,.9,12),h);Bt.position.y=4.95,yt.add(Bt);for(let Ut=0;Ut<4;Ut++){const se=new B(new te(.08,.08,2.1,5),h);se.position.set(Math.cos(Ut/4*Ke)*1.4,1.05,Math.sin(Ut/4*Ke)*1.4),yt.add(se)}yt.position.set(R+at(-O/4,O/4),Q+.5,A+at(-V/4,V/4)),e.add(yt)}if(Q>26){const yt=new B(new te(.06,.06,6,4),h);yt.position.set(R,Q+3.2,A),e.add(yt);const Ct=new B(new Oe(.14,6,4),new be({color:13716287,toneMapped:!1}));Ct.position.set(R,Q+6.2,A),e.add(Ct)}}function Z(R,A,O,V){const Q=R.attributes.uv,Y=[[V,O],[V,O],[A,V],[A,V],[A,O],[A,O]];for(let lt=0;lt<Q.count;lt++){const ct=Math.floor(lt/4);Q.setXY(lt,Q.getX(lt)*Math.max(1,Math.round(Y[ct][0]/9)),Q.getY(lt)*Math.max(1,Math.round(Y[ct][1]/13)))}Q.needsUpdate=!0}function It(R,A,O,V,Q){const Y=Q.axis==="z",ct=Math.min((Y?O:V)*.72,11),rt=2.25,gt=(Y?V:O)/2+.04,At=R+(Y?0:Q.sign*gt),yt=A+(Y?Q.sign*gt:0),Ct=Y?Q.sign>0?0:Math.PI:Q.sign>0?Math.PI/2:-Math.PI/2,Bt=tg(mn(0,3)),Ut=new dt({map:Bt,emissiveMap:Bt,emissive:16757350,emissiveIntensity:1.1,roughness:.6,metalness:.1}),se=new B(new Fe(ct,3.6),Ut);se.position.set(At,rt,yt),se.rotation.y=Ct,e.add(se);const Me=new B(new pt(ct+.6,.14,1.7),new dt({map:Dl(ni(ig)),roughness:.85}));if(Me.position.set(At+(Y?0:Q.sign*.85),4.35,yt+(Y?Q.sign*.85:0)),Me.rotation.y=Ct,Me.rotation.x=Y?Q.sign*.12:0,Me.rotation.z=Y?0:-Q.sign*.12,Me.castShadow=!0,e.add(Me),Math.random()<.72){const Se=ni(ng),Te=Math.random()<.22;ft(Se,At+(Y?0:Q.sign*.25),Te?8.2:5.3,yt+(Y?Q.sign*.25:0),Ct,Te,ni(["#ffcf87","#ff8d6a","#8fd3c7","#f3e0b0"]))}}function ft(R,A,O,V,Q,Y,lt="#ffcf87",ct=1){const rt=Nl(R,lt,Y),gt=new be({map:rt,transparent:!0,toneMapped:!1,side:Ze,opacity:.95}),At=Y?1.25:5.2,yt=Y?5.2:1.3,Ct=new B(new Fe(At*ct,yt*ct),gt);return Ct.position.set(A,O,V),Ct.rotation.y=Q,e.add(Ct),a.push({mat:gt,phase:at(0,Ke),speed:at(1.5,5)}),Ct}function wt(R,A,O){const V=ni(["MORETTI","LAROSSA","HOTEL","ROXY","JAZZ"]),Q=Nl(V,"#ffd18f",!1),Y=new be({map:Q,transparent:!0,toneMapped:!1,side:Ze}),lt=new B(new Fe(10,2.5),Y);lt.position.set(R,O.h+4.2,A),lt.rotation.y=ni([0,Math.PI,Math.PI/2,-Math.PI/2]),e.add(lt);const ct=new B(new pt(10.4,.12,.12),h);ct.position.copy(lt.position),ct.position.y-=1.4,ct.rotation.y=lt.rotation.y,e.add(ct);for(const rt of[-1,1]){const gt=new B(new pt(.12,3,.12),h);gt.position.copy(lt.position),gt.position.y-=1.6,gt.position.x+=Math.cos(lt.rotation.y)*4*rt,gt.position.z-=Math.sin(lt.rotation.y)*4*rt,e.add(gt)}a.push({mat:Y,phase:at(0,Ke),speed:at(2,4)})}function le(R,A){st(R,A-2,36,28,13,()=>.2);const Y=R,lt=A+28/2-1,ct=new B(new ai(14,2.4,1.2,3,.2),new dt({color:2167318,roughness:.5,metalness:.3}));ct.position.set(Y,6.2,lt),ct.castShadow=!0,e.add(ct),ft("MORETTI’S",Y,6.25,lt+.66,0,!1,"#ffd28a",1.35),ft("CLUB",R-36/2-.4,9.5,A-2,-Math.PI/2,!0,"#ff9d72",1);const rt=new B(new pt(12,.25,4.4),new dt({color:2758170,roughness:.6}));rt.position.set(R,4.6,A+28/2+1.6),rt.castShadow=!0,e.add(rt);const gt=[];for(let Ct=0;Ct<14;Ct++){const Bt=new Oe(.09,6,5);Bt.translate(R-5.6+Ct*.86,4.45,A+28/2+3.7),gt.push(Bt)}e.add(new B(Vn(gt),new be({color:16769192,toneMapped:!1})));const At=new B(new Fe(3.2,9),new dt({color:6035996,roughness:1}));At.rotation.x=-Math.PI/2,At.position.set(R,.235,A+28/2+5),e.add(At);for(const Ct of[-1,1]){const Bt=new B(new te(.05,.07,1.1,6),d);Bt.position.set(R+Ct*2.3,.75,A+28/2+7),e.add(Bt);const Ut=new B(new Oe(.12,8,6),d);Ut.position.set(R+Ct*2.3,1.35,A+28/2+7),e.add(Ut)}const yt=new Fi(16756839,26,26,2);yt.position.set(R,5,A+28/2+2),e.add(yt),i.club={x:R,z:A,door:{x:R,z:A+28/2+5.5},name:"Moretti’s Social Club"}}function ht(R,A){st(R,A,38,30,14,()=>.6),ft("SAL’S MEATS",R+38/2+.5,5.6,A,Math.PI/2,!1,"#ff9b7a",1.1);const Y=new B(new pt(1.8,.14,9),new dt({map:Dl("#6f2a22"),roughness:.9}));Y.position.set(R+38/2+.9,4.1,A),Y.rotation.z=.12,Y.castShadow=!0,e.add(Y);const lt=new B(new pt(.15,2.8,2),new dt({color:2364686,roughness:.8}));lt.position.set(R+38/2+.02,1.55,A),e.add(lt),i.butcher={x:R,z:A,door:{x:R+38/2+2.2,z:A},name:"Sal’s Butcher Shop"}}function bt(R,A){const O=new B(new pt(Lt.BLOCK-2,.12,Lt.BLOCK-2),new dt({color:2499626,roughness:.9}));O.position.set(R,.19,A),O.receiveShadow=!0,e.add(O);const V=20,Q=30,Y=12,lt=new B(new pt(V,Y,Q),l[6]);Z(lt.geometry,V,Y,Q),lt.position.set(R,Y/2+.25,A+2),lt.castShadow=!0,e.add(lt),z(R,A+2,V,Q,Y);const ct=new B(new pt(12.4,.5,Q+1),m);ct.position.set(R-5.2,Y+2.1,A+2),ct.rotation.z=.58,e.add(ct);const rt=ct.clone();rt.position.x=R+5.2,rt.rotation.z=-.58,e.add(rt);const gt=7.5,At=26,yt=new B(new pt(gt,At,gt),u);yt.position.set(R,At/2+.25,A-17),yt.castShadow=!0,e.add(yt),z(R,A-17,gt,gt,At);const Ct=new B(new Hi(5.6,9,4),new dt({color:2894638,roughness:.8}));Ct.position.set(R,At+4.6,A-17),Ct.rotation.y=Math.PI/4,e.add(Ct);const Bt=new be({color:16767392,toneMapped:!1}),Ut=new B(new pt(.16,2.2,.16),Bt);Ut.position.set(R,At+10,A-17),e.add(Ut);const se=new B(new pt(1.2,.16,.16),Bt);se.position.set(R,At+10.4,A-17),e.add(se);const Me=new B(new Ni(1.35,24),new dt({color:14207913,emissive:16764807,emissiveIntensity:.7}));Me.position.set(R,At-3,A-17-gt/2-.03),Me.rotation.y=Math.PI,e.add(Me);const Se=new be({color:16758899,toneMapped:!1});for(let ze=-2;ze<=2;ze++)for(const S of[-1,1]){const N=new B(new Fe(1.5,6),Se);N.position.set(R+S*(V/2+.03),6,A+2+ze*4.5),N.rotation.y=S*Math.PI/2,e.add(N)}const Te=new B(new pt(3.4,5,.3),new dt({color:2759185,roughness:.75}));Te.position.set(R,2.75,A-17-gt/2-.1),Te.rotation.y=Math.PI,e.add(Te);const Re=new B(new Ni(1.7,20,0,Math.PI),new dt({color:2759185}));Re.position.set(R,5.25,A-17-gt/2-.12),Re.rotation.y=Math.PI,e.add(Re);const vn=new Fi(16754534,30,30,2);vn.position.set(R,6,A-10),e.add(vn);for(let ze=0;ze<9;ze++){const S=new B(new pt(at(.5,.9),at(.7,1.4),.22),u);S.position.set(R-19+ze*4.4,.7,A+18+at(-1,1)),S.rotation.y=at(-.2,.2),S.castShadow=!0,e.add(S)}i.church={x:R,z:A,door:{x:R,z:A-17-gt/2-.6},name:"San Michele Church"}}function Wt(R,A){const O=new B(new pt(Lt.BLOCK-2,.18,Lt.BLOCK-2),new dt({color:2042397,roughness:1}));O.position.set(R,.2,A),O.receiveShadow=!0,e.add(O);const V=new dt({color:3814962,roughness:.95});let Q=new B(new pt(Lt.BLOCK-2,.04,4),V);Q.position.set(R,.31,A),e.add(Q),Q=new B(new pt(4,.04,Lt.BLOCK-2),V),Q.position.set(R,.31,A),e.add(Q);const Y=new B(new te(4.2,4.5,.8,24),u);Y.position.set(R,.6,A),e.add(Y);const lt=new B(new te(3.8,3.8,.2,24),new dt({color:1454138,roughness:.1,metalness:.8,emissive:662050}));lt.position.set(R,1,A),e.add(lt);const ct=new B(new te(.35,.5,2.4,10),u);ct.position.set(R,1.8,A),e.add(ct);const rt=new B(new te(1.4,.5,.4,14),u);rt.position.set(R,3.1,A),e.add(rt);const gt=new te(.18,.3,3.4,6),At=new go(2.3,1),yt=new dt({color:2826521,roughness:1}),Ct=new dt({color:1846816,roughness:1}),Bt=[];for(let Se=0;Se<26;Se++){const Te=R+at(-22,22),Re=A+at(-22,22);Math.abs(Te-R)<6||Math.abs(Re-A)<6||Bt.push([Te,Re])}const Ut=new js(gt,yt,Bt.length),se=new js(At,Ct,Bt.length);Bt.forEach(([Se,Te],Re)=>{Qt.makeTranslation(Se,1.9,Te),Ut.setMatrixAt(Re,Qt);const vn=at(.75,1.25);Qt.compose(new T(Se,4.1,Te),new $i,new T(vn,vn*at(.9,1.2),vn)),se.setMatrixAt(Re,Qt)}),Ut.castShadow=!0,se.castShadow=!0,e.add(Ut,se);for(let Se=0;Se<6;Se++){const Te=Se/6*Ke,Re=R+Math.cos(Te)*9,vn=A+Math.sin(Te)*9,ze=new Ie,S=new B(new pt(2.2,.14,.6),new dt({color:4863267,roughness:.9}));S.position.y=.65,ze.add(S);const N=new B(new pt(2.2,.6,.12),new dt({color:4863267,roughness:.9}));N.position.set(0,.95,-.26),ze.add(N);for(const k of[-1,1]){const H=new B(new pt(.12,.65,.55),h);H.position.set(k*.9,.33,0),ze.add(H)}ze.position.set(Re,.25,vn),ze.rotation.y=-Te,e.add(ze)}const Me=new Fi(16758131,18,24,2);Me.position.set(R,5,A),e.add(Me)}function Xt(R,A,O){if(O==="yard"){const yt=new B(new pt(Lt.BLOCK-2,.1,Lt.BLOCK-2),new dt({color:2763566,roughness:.95}));yt.position.set(R,.2,A),e.add(yt);const Ct=[5909282,2441546,4867107,3812422];for(let Bt=0;Bt<9;Bt++){const Ut=at(6,10),se=at(2.5,3),Me=at(2.4,3),Se=R+at(-18,18),Te=A+at(-18,18),Re=new B(new pt(Ut,Me,se),new dt({color:ni(Ct),roughness:.8,metalness:.3}));Re.position.set(Se,Me/2+.25,Te),Re.rotation.y=Math.random()<.5?0:Math.PI/2,Re.castShadow=!0,e.add(Re),z(Se,Te,Re.rotation.y?se:Ut,Re.rotation.y?Ut:se,Me)}return}const V=O==="warehouseA",Q=40,Y=30,lt=V?12:10,ct=ie(),rt=new dt({map:ct,color:V?7038300:5594978,roughness:.8,metalness:.25}),gt=new B(new pt(Q,lt,Y),rt);gt.position.set(R,lt/2+.2,A),gt.castShadow=!0,gt.receiveShadow=!0,e.add(gt),z(R,A,Q,Y,lt);const At=new B(new pt(Q+1,.4,Y+1),new dt({color:3159098,roughness:.8,metalness:.4}));At.position.set(R,lt+.4,A),e.add(At);for(let yt=-1;yt<=1;yt++){const Ct=new B(new Fe(6,6.5),new dt({color:2829875,roughness:.7,metalness:.5}));Ct.position.set(R+yt*9,3.4,A-Y/2-.03),Ct.rotation.y=Math.PI,e.add(Ct);const Bt=new B(new Fe(6,.18),new be({color:14070378,toneMapped:!1}));Bt.position.set(R+yt*9,6.8,A-Y/2-.05),Bt.rotation.y=Math.PI,e.add(Bt)}ft(V?"MORETTI FREIGHT":"PIER 9",R,lt-1.6,A-Y/2-.1,Math.PI,!1,"#e8c37f",.9);for(let yt=0;yt<8;yt++){const Ct=at(1.4,2.2),Bt=new B(new pt(Ct,Ct,Ct),new dt({color:4864038,roughness:.95}));Bt.position.set(R+at(-Q/2+2,Q/2-2),Ct/2+.3,A-Y/2-at(2,7)),Bt.castShadow=!0,e.add(Bt)}V&&(i.docks={x:R,z:A,door:{x:R,z:A-Y/2-3},name:"Moretti Freight Pier"})}function Et(R,A){const O=new B(new pt(Lt.BLOCK-2,.1,Lt.BLOCK-2),new dt({color:1908259,roughness:.95}));O.position.set(R,.2,A),e.add(O);const V=[];for(let Q=-2;Q<=2;Q++){const Y=new Fe(.12,8);Y.rotateX(-Math.PI/2),Y.translate(R+Q*5,.27,A+8),V.push(Y)}e.add(new B(Vn(V),new be({color:9340006,transparent:!0,opacity:.4})))}function ie(){const{c:R,ctx:A}=Nn(128,128);A.fillStyle="#8a857c",A.fillRect(0,0,128,128);for(let O=0;O<128;O+=8)A.fillStyle="rgba(255,255,255,.08)",A.fillRect(O,0,2,128),A.fillStyle="rgba(0,0,0,.18)",A.fillRect(O+4,0,2,128);for(let O=0;O<300;O++)A.fillStyle=`rgba(40,25,15,${at(.02,.12)})`,A.fillRect(at(0,128),at(0,128),at(1,6),at(1,8));return ts(R,4,2)}function Kt(){const R=new B(new pt(360,.5,18),new dt({color:2894637,roughness:.9}));R.position.set(0,.05,179),R.receiveShadow=!0,e.add(R);const A=new B(new pt(380,2.6,2),new dt({color:3486252,roughness:.95}));A.position.set(0,-.9,188),e.add(A);const O=[],V=[];for(let ct=-175;ct<=175;ct+=6){const rt=new te(.05,.05,1.1,5);rt.translate(ct,.8,186.6),O.push(rt)}for(const ct of[.65,1.2]){const rt=new pt(352,.06,.06);rt.translate(0,ct,186.6),V.push(rt)}e.add(new B(Vn([...O,...V]),h));const Q=rg(),Y=new dt({color:463644,roughness:.16,metalness:.9,envMapIntensity:1.6,bumpMap:Q,bumpScale:.35}),lt=new B(new Fe(760,300,40,40),Y);lt.rotation.x=-Math.PI/2,lt.position.set(0,-.55,338),e.add(lt),o.push(ct=>{Q.offset.x+=ct*.012,Q.offset.y+=ct*.006});for(const ct of[-46,44]){const rt=new B(new pt(10,.5,46),new dt({color:3878176,roughness:.95}));rt.position.set(ct,.1,208),rt.receiveShadow=!0,e.add(rt);for(let gt=190;gt<230;gt+=4){const At=new B(new pt(10.2,.16,.3),new dt({color:2365970,roughness:1}));At.position.set(ct,.37,gt),e.add(At)}for(const gt of[192,204,216,228])for(const At of[-1,1]){const yt=new B(new te(.22,.28,.8,8),h);yt.position.set(ct+At*4.6,.55,gt),e.add(yt)}}for(const[ct,rt,gt,At]of[[-46,236,0,3941404],[44,240,0,2044985],[12,220,Math.PI/2,2830138]]){const yt=new Ie,Ct=new B(new pt(3.4,1.5,9),new dt({color:At,roughness:.6,metalness:.2}));Ct.position.y=.2,yt.add(Ct);const Bt=new B(new Hi(2.2,3,4),new dt({color:At,roughness:.6}));Bt.rotation.x=Math.PI/2,Bt.rotation.y=Math.PI/4,Bt.position.set(0,.2,-5.8),yt.add(Bt);const Ut=new B(new pt(2.4,1.6,2.6),new dt({color:4078131,roughness:.8}));Ut.position.set(0,1.6,1.6),yt.add(Ut);const se=new B(new Oe(.16,6,4),new be({color:16767392,toneMapped:!1}));se.position.set(0,2.5,.4),yt.add(se),yt.position.set(ct,.3,rt),yt.rotation.y=gt,e.add(yt)}for(const[ct,rt]of[[-92,202],[96,206]]){const gt=new Ie,At=new B(new pt(3,1.4,3),h);At.position.y=.8,gt.add(At);const yt=new B(new pt(1.2,24,1.2),new dt({color:7031842,roughness:.8,metalness:.5}));yt.position.y=12,gt.add(yt);const Ct=new B(new pt(22,.7,.7),new dt({color:7031842,roughness:.8,metalness:.5}));Ct.position.set(7,24,0),gt.add(Ct);const Bt=new B(new te(.03,.03,8,4),h);Bt.position.set(16,20,0),gt.add(Bt);const Ut=new B(new pt(1.4,1,1.4),h);Ut.position.set(16,15.8,0),gt.add(Ut);const se=new B(new Oe(.22,6,4),new be({color:13977660,toneMapped:!1}));se.position.set(0,24.8,0),gt.add(se),gt.position.set(ct,0,rt),e.add(gt)}for(let ct=-150;ct<=150;ct+=25){const rt=new B(new te(.07,.1,4.4,5),h);rt.position.set(ct,2.3,181),e.add(rt);const gt=new B(new Oe(.17,6,4),new be({color:16767392,toneMapped:!1}));gt.position.set(ct,4.55,181),e.add(gt)}}function _e(){const R=l;for(let lt=0;lt<48;lt++){const ct=lt/48*Ke,rt=at(235,320),gt=Math.cos(ct)*rt,At=Math.sin(ct)*rt*.9;if(At>190)continue;const yt=at(14,34),Ct=at(14,34),Bt=at(18,64),Ut=new pt(yt,Bt,Ct);Z(Ut,yt,Bt,Ct);const se=new B(Ut,R[Math.floor(at(0,8))]);se.position.set(gt,Bt/2,At),se.rotation.y=at(0,Ke),e.add(se)}const A=new Ie,O=new B(new pt(360,2,7),h);O.position.set(0,12,0),A.add(O);for(const lt of[-64,64]){const ct=new B(new pt(3,58,3),new dt({color:3813415,roughness:.9}));ct.position.set(lt,29,0),A.add(ct);const rt=new B(new pt(3,2,8),h);rt.position.set(lt,46,0),A.add(rt)}const V=new Ms({color:9071164,transparent:!0,opacity:.5});for(let lt=-6;lt<=6;lt++){const ct=lt*26,rt=[new T(ct,13,0),new T(ct*.55,44-Math.abs(lt)*2.6,0)];A.add(new Mr(new Ee().setFromPoints(rt),V))}A.position.set(0,0,300),e.add(A);const Q=[];for(let lt=-170;lt<=170;lt+=12)Q.push(lt,14,300);const Y=new Ee;Y.setAttribute("position",new ce(Q,3)),e.add(new aa(Y,new lr({map:p,color:16762746,size:2.4,transparent:!0,opacity:.8,blending:_n,depthWrite:!1})))}function U(){const R=new dt({color:8202786,roughness:.7,metalness:.2}),A=new dt({color:2764588,roughness:.9,metalness:.3}),O=new dt({color:4864038,roughness:.95}),V=Fl(4242);for(let Q=0;Q<44;Q++){const Y=mn(0,4),lt=mn(0,4);if(Ul[`${Y},${lt}`])continue;const ct=Lt.centers[Y],rt=Lt.centers[lt],gt=mn(0,3),At=at(-22,22);let yt,Ct;gt===0?(yt=ct+At,Ct=rt-24):gt===1?(yt=ct+At,Ct=rt+24):gt===2?(yt=ct-24,Ct=rt+At):(yt=ct+24,Ct=rt+At);const Bt=V();if(Bt<.3){const Ut=new Ie,se=new B(new te(.28,.34,.8,8),R);se.position.y=.55,Ut.add(se);const Me=new B(new Oe(.28,8,6),R);Me.position.y=1,Ut.add(Me);const Se=new B(new pt(.8,.16,.16),R);Se.position.y=.7,Ut.add(Se),Ut.position.set(yt,0,Ct),e.add(Ut)}else if(Bt<.6){const Ut=new B(new te(.32,.28,.9,8),A);Ut.position.set(yt,.7,Ct),Ut.castShadow=!0,e.add(Ut)}else if(Bt<.82){const Ut=new B(new pt(.7,.7,.7),O);Ut.position.set(yt,.55,Ct),Ut.rotation.y=at(0,1),Ut.castShadow=!0,e.add(Ut)}else{const Ut=new Ie,se=new B(new pt(2,.12,.55),O);se.position.y=.62,Ut.add(se);for(const Me of[-1,1]){const Se=new B(new pt(.1,.6,.5),h);Se.position.set(Me*.8,.3,0),Ut.add(Se)}Ut.position.set(yt,0,Ct),Ut.rotation.y=at(0,Ke),e.add(Ut)}}}U(),i.club||(i.club={x:0,z:-68,door:{x:0,z:-52}}),i.butcher||(i.butcher={x:-136,z:0,door:{x:-114,z:0}}),i.church||(i.church={x:-68,z:68,door:{x:-68,z:46.5}}),i.docks||(i.docks={x:0,z:136,door:{x:0,z:118}}),i.tailStart={x:100,z:0},i.tailEnd={x:-100,z:100},i.parking={x:136,z:-136};function _t(R,A,O){for(const V of n)if(R+O>V.minX&&R-O<V.maxX&&A+O>V.minZ&&A-O<V.maxZ)return V;return null}function q(R,A){let O=null;for(const V of n)if(R.x+A>V.minX&&R.x-A<V.maxX&&R.z+A>V.minZ&&R.z-A<V.maxZ){const Q=R.x+A-V.minX,Y=V.maxX-(R.x-A),lt=R.z+A-V.minZ,ct=V.maxZ-(R.z-A),rt=Math.min(Q,Y,lt,ct);rt===Q?R.x=V.minX-A:rt===Y?R.x=V.maxX+A:rt===lt?R.z=V.minZ-A:R.z=V.maxZ+A,O=V}return O}function et(R,A,O=0){for(const V of Lt.roads)if(Math.abs(R-V)<Lt.ROAD/2+O||Math.abs(A-V)<Lt.ROAD/2+O)return!0;return!1}return{group:e,colliders:n,landmarks:i,mapBlocks:r,roads:Lt.roads,centers:Lt.centers,sky:b,moonGlow:$,stars:C,water,neon:a,update(R,A){for(const O of o)O(R,A)},collideCircle:_t,resolveCircle:q,isOnRoad:et,bounds:{min:-168,max:Lt.HALF-2}}}function rg(){const{c:s,ctx:t}=Nn(256,256);t.fillStyle="#8080ff",t.fillRect(0,0,256,256);for(let n=0;n<500;n++){const i=Math.random()*256,r=Math.random()*256,a=at(10,60),o=at(1,4),l=t.createLinearGradient(i,r,i+a,r);l.addColorStop(0,"rgba(128,128,255,1)"),l.addColorStop(.5,`rgba(${mn(90,170)},${mn(90,170)},255,1)`),l.addColorStop(1,"rgba(128,128,255,1)"),t.fillStyle=l,t.fillRect(i,r,a,o)}const e=new yr(s);return e.wrapS=e.wrapT=_s,e.repeat.set(8,4),e}function Fl(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const Qs=new dt({color:2369068,roughness:.88,metalness:.05}),ag=new dt({color:1645344,roughness:.92}),Ol=new dt({color:10187605,roughness:.75}),Bl=new dt({color:1776157,roughness:.8}),og=new dt({color:13615780,roughness:.85}),lg=new dt({color:2763824,roughness:.35,metalness:.85}),cg=ys("rgba(255,230,160,1)","rgba(255,120,40,0)",64);class hg{constructor(t,e,n,i){this.scene=t,this.world=e,this.pos=new T(n,0,i),this.vel=new T,this.heading=Math.PI,this.health=100,this.maxHealth=100,this.lastDamage=-20,this.radius=.42,this.inCar=!1,this.aiming=!1,this.walkPhase=0,this.fireCooldown=0,this.dead=!1,this.tracers=[],this.shake=0,this.build()}build(){const t=new Ie;this.group=t,this.legs=[];for(const g of[-1,1]){const x=new B(new pt(.17,.74,.2),ag);x.geometry.translate(0,-.37,0),x.position.set(g*.12,.8,0),t.add(x),this.legs.push(x);const f=new B(new pt(.19,.12,.34),new dt({color:789260,roughness:.6}));f.position.set(0,-.72,.06),x.add(f)}const e=new B(new te(.24,.33,.82,8),Qs);e.position.y=1.2,t.add(e);const n=new B(new pt(.38,.5,.24),og);n.position.set(0,1.36,.15),t.add(n);const i=new B(new pt(.13,.5,.05),Qs);i.position.set(-.13,1.34,.27),i.rotation.z=.25,t.add(i);const r=i.clone();r.position.x=.13,r.rotation.z=-.25,t.add(r);const a=new B(new pt(.06,.34,.03),new dt({color:6102560,roughness:.7}));a.position.set(0,1.3,.3),t.add(a);const o=new B(new pt(.56,.58,.16),Qs);o.position.set(0,.84,-.16),o.rotation.x=.12,t.add(o),this.head=new B(new Oe(.18,12,10),Ol),this.head.position.y=1.78,t.add(this.head);const l=new B(new te(.3,.3,.04,14),Bl);l.position.y=1.9,t.add(l);const c=new B(new te(.19,.22,.22,12),Bl);c.position.y=2.01,t.add(c);const h=new B(new te(.222,.222,.05,12),new dt({color:6113834,roughness:.5,metalness:.3}));h.position.y=1.94,t.add(h);const d=new B(new wr(.2,.06,6,14),new dt({color:7021350,roughness:.9}));d.rotation.x=Math.PI/2,d.position.y=1.6,t.add(d),this.arms=[];for(const g of[-1,1]){const x=new Ie;x.position.set(g*.31,1.5,0);const f=new B(new te(.075,.09,.55,7),Qs);f.geometry.translate(0,-.275,0),x.add(f);const p=new B(new Oe(.075,8,6),Ol);p.position.y=-.58,x.add(p),t.add(x),this.arms.push(x)}this.gun=new Ie;const u=new B(new pt(.07,.1,.36),lg);u.position.set(0,0,.16),this.gun.add(u);const m=new B(new pt(.065,.2,.1),new dt({color:3810327,roughness:.8}));m.position.set(0,-.12,.04),m.rotation.x=.2,this.gun.add(m),this.gun.position.set(0,-.58,.06),this.gun.visible=!1,this.arms[1].add(this.gun),this.flash=new Ss(new Ji({map:cg,color:16765066,transparent:!0,blending:_n,depthWrite:!1})),this.flash.scale.set(1.1,1.1,1),this.flash.position.set(0,-.58,.4),this.flash.visible=!1,this.arms[1].add(this.flash),this.muzzleLight=new Fi(16756832,0,8,2),this.muzzleLight.position.set(0,1.3,.5),t.add(this.muzzleLight),Ic(t,!0,!1),t.position.copy(this.pos),this.scene.add(t)}get forward(){return new T(Math.sin(this.heading),0,Math.cos(this.heading))}get speed(){return Math.hypot(this.vel.x,this.vel.z)}update(t,e,n,i,r){if(this.inCar){this.group.visible=!1;return}this.group.visible=!0,this.aiming=i,this.fireCooldown=Math.max(0,this.fireCooldown-t);const a=new T(-Math.sin(n),0,-Math.cos(n)),o=new T(-a.z,0,a.x);let l=e.move.x,c=e.move.y;const h=Math.min(1,Math.hypot(l,c)),d=new T;h>.08&&d.copy(a).multiplyScalar(c).addScaledVector(o,l).normalize();const u=e.sprint&&!this.aiming&&c>.2,m=h>.08?this.aiming?2.1:u?6.4:3.5:0,g=h>.08?16:12;this.vel.x=Oi(this.vel.x,d.x*m,g,t),this.vel.z=Oi(this.vel.z,d.z*m,g,t);const x=new T(this.pos.x+this.vel.x*t,0,this.pos.z+this.vel.z*t);this.world.resolveCircle(x,this.radius),x.x=$t(x.x,-174,174),x.z=$t(x.z,-174,181),this.pos.copy(x);const f=this.speed;if(f>.15){const y=Math.atan2(this.vel.x,this.vel.z);this.heading=Ll(this.heading,y,Math.min(1,t*(this.aiming?16:10)))}if(this.aiming){const y=Math.atan2(-Math.sin(n),-Math.cos(n));this.heading=Ll(this.heading,y,Math.min(1,t*14))}this.walkPhase+=t*(f>.2?f*2.1:2);const p=f>.15?Math.sin(this.walkPhase)*$t(f/4,.3,1.15):Math.sin(r*1.6)*.035;this.legs[0].rotation.x=p*.85,this.legs[1].rotation.x=-p*.85,this.arms[0].rotation.x=-p*.6,this.arms[1].rotation.x=this.aiming?-1.45:p*.6,this.arms[1].rotation.z=this.aiming?-.08:0,this.arms[0].rotation.z=this.aiming?-.25:0,this.gun.visible=this.aiming,this.group.rotation.z=$t(-this.vel.x*.012,-.08,.08),this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.heading,r-this.lastDamage>7&&this.health<this.maxHealth&&!this.dead&&(this.health=Math.min(this.maxHealth,this.health+9*t)),this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*180),this.muzzleLight.intensity<=0&&(this.flash.visible=!1);for(let y=this.tracers.length-1;y>=0;y--){const M=this.tracers[y];M.life-=t,M.mat.opacity=$t(M.life/.09,0,1)*.85,M.life<=0&&(this.scene.remove(M.line),M.line.geometry.dispose(),M.mat.dispose(),this.tracers.splice(y,1))}}muzzleWorld(){const t=new T(0,-.58,.45);return this.arms[1].localToWorld(t),t}shoot(t){if(this.fireCooldown>0)return!1;this.fireCooldown=.3;const e=this.muzzleWorld(),n=t.clone().sub(e).normalize(),i=e.clone().addScaledVector(n,30),r=new Ee().setFromPoints([e,i]),a=new Ms({color:16765066,transparent:!0,opacity:.85}),o=new Mr(r,a);return this.scene.add(o),this.tracers.push({line:o,mat:a,life:.09}),this.flash.visible=!0,this.flash.material.rotation=at(0,Math.PI*2),this.muzzleLight.intensity=26,this.shake=.12,!0}damage(t){this.dead||(this.health=$t(this.health-t,0,this.maxHealth),this.lastDamage=performance.now()/1e3,this.health<=0&&(this.dead=!0))}}const ug=new dt({color:461842,roughness:.12,metalness:.9,envMapIntensity:1.4}),zl=new dt({color:657931,roughness:.95}),ii=new dt({color:10261636,roughness:.22,metalness:.95}),Dc=new dt({color:4853517,emissive:14168618,emissiveIntensity:.8,roughness:.4}),dg=new be({color:16769712,toneMapped:!1}),fg=new be({color:16767392,transparent:!0,opacity:.055,blending:_n,depthWrite:!1,side:Ze}),pg=ys("rgba(150,150,150,.6)","rgba(80,80,80,0)",64);function es(s=4988700,t=!1,e={}){const n=new Ie,i=new dt({color:s,roughness:.34,metalness:.55,envMapIntensity:1.1}),r=new B(new ai(1.9,.58,4.35,3,.13),i);r.position.y=.62,r.castShadow=!0,n.add(r);const a=new B(new ai(1.78,.28,4.5,2,.08),i);a.position.y=.38,a.castShadow=!0,n.add(a);const o=new B(new ai(1.58,.5,1.95,3,.12),i);o.position.set(0,1.06,-.2),o.castShadow=!0,n.add(o);const l=new B(new ai(1.6,.34,1.72,2,.06),ug);l.position.set(0,1.16,-.18),n.add(l);const c=new B(new ai(1.62,.12,1.86,2,.05),i);c.position.set(0,1.36,-.2),n.add(c);const h=new B(new Oe(.055,8,6),ii);h.position.set(0,.95,1.78),n.add(h);for(const I of[2.28,-2.28]){const P=new B(new pt(1.92,.12,.14),ii);P.position.set(0,.47,I),n.add(P)}const d=new B(new pt(.85,.34,.06),ii);d.position.set(0,.67,2.2),n.add(d);for(let I=-3;I<=3;I++){const P=new B(new pt(.035,.3,.07),new dt({color:1709843,roughness:.5,metalness:.6}));P.position.set(I*.11,.67,2.24),n.add(P)}for(const I of[-1,1]){const P=new B(new pt(.16,.09,1.7),ii);P.position.set(I*1,.4,-.05),n.add(P);for(const C of[1.42,-1.42]){const D=new B(new ai(.34,.26,1.05,2,.08),i);D.position.set(I*.94,.62,C),n.add(D)}}const u=[],m=new te(.37,.37,.24,14);m.rotateZ(Math.PI/2);const g=new te(.17,.17,.26,10);g.rotateZ(Math.PI/2);for(const I of[-1,1])for(const P of[1.42,-1.42]){const C=new B(m,zl);C.position.set(I*.94,.37,P),C.castShadow=!0,n.add(C);const D=new B(g,ii);D.position.set(I*.955,.37,P),n.add(D),u.push(C)}const x=[];for(const I of[-1,1]){const P=new B(new Oe(.14,10,8),dg);P.scale.z=.55,P.position.set(I*.63,.74,2.19),n.add(P),x.push(P);const C=new B(new wr(.16,.025,6,14),ii);C.position.set(I*.63,.74,2.21),n.add(C);const D=new B(new Oe(.09,8,6),Dc);D.scale.z=.5,D.position.set(I*.66,.7,-2.2),n.add(D)}const f=new B(new te(.36,.36,.2,12),zl);f.rotation.x=Math.PI/2,f.position.set(0,.7,-2.38),n.add(f);const p=new B(new te(.15,.15,.22,8),ii);p.rotation.x=Math.PI/2,p.position.set(0,.7,-2.4),n.add(p);const y=[];for(const I of[-1,1]){const P=new B(new Hi(2.1,13,12,1,!0),fg);P.rotation.x=Math.PI/2,P.position.set(I*.63,.7,8.4),P.visible=e.beams!==!1,n.add(P),y.push(P)}let M=null,b=null;if(t){const I=new B(new pt(1.05,.12,.3),new dt({color:1118740,roughness:.6}));I.position.set(0,1.46,-.15),n.add(I),M=new B(new pt(.46,.14,.24),new be({color:16722462,toneMapped:!1})),M.position.set(-.27,1.56,-.15),n.add(M),b=new B(new pt(.46,.14,.24),new be({color:2976767,toneMapped:!1})),b.position.set(.27,1.56,-.15),n.add(b);const P=new B(new pt(1.92,.2,1.7),new dt({color:1118740,roughness:.4,metalness:.4}));P.position.set(0,.74,-.1),n.add(P)}return Ic(n,!0,!1),{group:n,wheels:u,heads:x,beams:y,barRed:M,barBlue:b,bodyMat:i}}class kl{constructor(t,e,n,i,r=0,a=4988700){this.scene=t,this.world=e,this.pos=new T(n,0,i),this.heading=r,this.speed=0,this.steer=0,this.health=100,this.maxHealth=100,this.radius=1.35,this.color=a,this.mesh=es(a),this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=r,t.add(this.mesh.group),this.isPlayer=!0,this.wheelSpin=0,this.hitCooldown=0,this.smoke=new Ss(new Ji({map:pg,transparent:!0,opacity:0,depthWrite:!1,color:2763306})),this.smoke.scale.set(3.5,3.5,1),this.smoke.position.set(0,1.6,1.5),this.smoke.visible=!1,this.mesh.group.add(this.smoke)}get forward(){return new T(Math.sin(this.heading),0,Math.cos(this.heading))}get speedKmh(){return Math.abs(this.speed)*3.6}update(t,e,n,i){const r=e.move.y;let a=e.move.x;n&&(a=i),this.steer=a;const o=12.5,l=22,c=30,h=-9;e.brake?this.speed=Math.abs(this.speed)<1.2?0:this.speed-Math.sign(this.speed)*l*t:r>.08?this.speed+=o*r*t:r<-.08?this.speed+=o*.75*r*t:(this.speed*=Math.exp(-1.1*t),Math.abs(this.speed)<.12&&(this.speed=0)),this.speed=$t(this.speed,h,c);const d=$t(Math.abs(this.speed)/4.5,0,1)*(1-$t(Math.abs(this.speed)/95,0,.55));this.heading+=a*1.75*d*t*Math.sign(this.speed||1);const u=this.forward,m=this.pos.x+u.x*this.speed*t,g=this.pos.z+u.z*this.speed*t,x=new T(m,0,g);let f=null;for(const y of this.world.colliders)if(x.x+1.15>y.minX&&x.x-1.15<y.maxX&&x.z+1.15>y.minZ&&x.z-1.15<y.maxZ){f=y;break}if(f){const y=Math.abs(this.speed);this.world.resolveCircle(x,1.15),this.pos.x=x.x,this.pos.z=x.z,this.speed*=-.22,y>7&&(this.health-=y*.9,this.hitCooldown=.5),this.onImpact&&this.onImpact(y)}else this.pos.x=m,this.pos.z=g;this.pos.x=$t(this.pos.x,-178,178),this.pos.z>181&&(this.pos.z=181,this.speed*=-.2),this.pos.z<-178&&(this.pos.z=-178,this.speed*=-.2),this.pos.y=0,this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=this.heading,this.wheelSpin+=this.speed*t/.37;for(const y of this.mesh.wheels)y.rotation.x=this.wheelSpin;const p=-a*$t(this.speed/30,0,1)*.06;this.mesh.group.rotation.z+=(p-this.mesh.group.rotation.z)*Math.min(1,t*7),Dc.emissiveIntensity=e.brake||r<0?2.6:.8,this.health<55?(this.smoke.visible=!0,this.smoke.material.opacity=$t((55-this.health)/60,0,.7),this.smoke.scale.setScalar(3.2+Math.sin(performance.now()*.004)*.3)):this.smoke.visible=!1,this.hitCooldown=Math.max(0,this.hitCooldown-t),this.health<0&&(this.health=0)}damage(t){this.health=$t(this.health-t,0,this.maxHealth)}get destroyed(){return this.health<=0}}class mg{constructor(t,e,n,i,r,a){this.world=e,this.mesh=es(a),this.mesh.group.position.set(n,0,i),t.add(this.mesh.group),this.pos=new T(n,0,i),this.dir=r,this.speed=at(7,11),this.baseSpeed=this.speed,this.heading=this.dirHeading(r),this.target=null,this.radius=1.25,this.wheelSpin=0,this.pickNext(),this.stuck=0}dirHeading(t){return t==="x+"?Math.PI/2:t==="x-"?-Math.PI/2:t==="z+"?0:Math.PI}pickNext(){const t=this.world.roads,e=this.pos;let n,i;if(this.dir[0]==="x"){const h=t.reduce((d,u)=>Math.abs(u-e.z)<Math.abs(d-e.z)?u:d,t[0]);n=ms(t,e.x)+(this.dir[1]==="+"?1:-1),n=$t(n,0,t.length-1),i=t.indexOf(h)}else{const h=t.reduce((d,u)=>Math.abs(u-e.x)<Math.abs(d-e.x)?u:d,t[0]);i=ms(t,e.z)+(this.dir[1]==="+"?1:-1),i=$t(i,0,t.length-1),n=t.indexOf(h)}n===ms(t,e.x)&&i===ms(t,e.z)&&(n=$t(ms(t,e.x)+(Math.random()<.5?1:-1),0,t.length-1));const r=t[n],a=t[i],o=Math.sign(r-e.x),c={x:-Math.sign(a-e.z),z:o};this.target=new T(r+c.x*3.4,0,a+c.z*3.4)}update(t,e,n){if(!this.target)return;const i=new T(this.target.x-this.pos.x,0,this.target.z-this.pos.z);if(i.length()<3){this.world.roads;const h=this.dir,d=["x+","x-","z+","z-"].filter(u=>u!==gg(h));this.dir=d[Math.floor(Math.random()*d.length)],this.pickNext(),(!this.target||this.target.distanceTo(this.pos)<4)&&(this.dir=h,this.pickNext())}let o=(Math.atan2(i.x,i.z)-this.heading+Math.PI*3)%(Math.PI*2)-Math.PI;this.heading+=$t(o,-.9*t*4,.9*t*4);let l=this.baseSpeed;const c=n?n.pos:e;if(c){const h=new T(Math.sin(this.heading),0,Math.cos(this.heading)),d=new T(c.x-this.pos.x,0,c.z-this.pos.z),u=d.dot(h);u>0&&u<9&&Math.abs(d.x*h.z-d.z*h.x)<2.4&&(l=Math.max(0,(u-3)*2.4))}this.speed+=(l-this.speed)*Math.min(1,t*2.2),this.pos.x+=Math.sin(this.heading)*this.speed*t,this.pos.z+=Math.cos(this.heading)*this.speed*t,this.pos.x=$t(this.pos.x,-175,175),this.pos.z=$t(this.pos.z,-175,179),this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=this.heading,this.wheelSpin+=this.speed*t/.37;for(const h of this.mesh.wheels)h.rotation.x=this.wheelSpin}}function gg(s){return s==="x+"?"x-":s==="x-"?"x+":s==="z+"?"z-":"z+"}function ms(s,t){let e=0;for(let n=1;n<s.length;n++)Math.abs(s[n]-t)<Math.abs(s[e]-t)&&(e=n);return e}const Hl=[2763825,3351839,2042416,3813413,2499115,4405290],Gl=[9136719,7229241,10779741,5980208],Vl=[1841690,2892314,3420202,1909808];class _g{constructor(t,e,n,i,r,a=0){this.scene=t,this.world=e,this.group=new Ie;const o=new dt({color:Hl[Math.floor(Math.random()*Hl.length)],roughness:.9}),l=new dt({color:Gl[Math.floor(Math.random()*Gl.length)],roughness:.8}),c=new dt({color:Vl[Math.floor(Math.random()*Vl.length)],roughness:.85}),h=new dt({color:1645086,roughness:.95}),d=new B(new te(.22,.3,.8,8),o);d.position.y=1.12,d.castShadow=!0,this.group.add(d);const u=new B(new te(.26,.24,.25,8),h);u.position.y=.72,this.group.add(u),this.head=new B(new Oe(.17,10,8),l),this.head.position.y=1.66,this.group.add(this.head);const m=new B(new te(.28,.28,.035,12),c);m.position.y=1.77,this.group.add(m);const g=new B(new te(.18,.2,.18,10),c);g.position.y=1.86,this.group.add(g),this.legs=[];for(const x of[-1,1]){const f=new B(new pt(.15,.62,.17),h);f.geometry.translate(0,-.31,0),f.position.set(x*.11,.62,0),this.group.add(f),this.legs.push(f)}this.arms=[];for(const x of[-1,1]){const f=new B(new te(.065,.075,.58,6),o);f.geometry.translate(0,-.29,0),f.position.set(x*.3,1.42,0),this.group.add(f),this.arms.push(f)}this.group.position.set(n,0,i),t.add(this.group),this.center=r,this.t=a,this.dir=Math.random()<.5?1:-1,this.speed=at(.9,1.6),this.baseSpeed=this.speed,this.radius=.4,this.phase=at(0,10),this.flee=0,this.down=0,this.removed=!1,this.setPerimeter()}setPerimeter(){let n=this.t%192;const i=Math.floor(n/(24*2)),r=n%(24*2)/(24*2);i===0?this.pos=new T(this.center.x-24+r*24*2,0,this.center.z-24):i===1?this.pos=new T(this.center.x+24,0,this.center.z-24+r*24*2):i===2?this.pos=new T(this.center.x+24-r*24*2,0,this.center.z+24):this.pos=new T(this.center.x-24,0,this.center.z+24-r*24*2),this.heading=i===0?Math.PI/2:i===1?0:i===2?-Math.PI/2:Math.PI}update(t,e,n,i){if(this.removed)return;if(this.down>0){this.down-=t,this.group.rotation.z=Math.min(Math.PI/2,this.group.rotation.z+t*4),this.group.position.y=Math.max(-.2,this.group.position.y-t*1.2),this.down<=0&&(this.removed=!0,this.group.visible=!1);return}if(n&&this.pos.distanceTo(e)<26&&(this.flee=5),this.flee>0){this.flee-=t,this.speed=4.4;const a=new T(this.pos.x-e.x,0,this.pos.z-e.z).normalize();this.pos.x+=a.x*this.speed*t,this.pos.z+=a.z*this.speed*t,this.heading=Math.atan2(a.x,a.z),this.world.resolveCircle(this.pos,.4),this.pos.x=$t(this.pos.x,-174,174),this.pos.z=$t(this.pos.z,-174,180)}else{this.speed+=(this.baseSpeed-this.speed)*Math.min(1,t*2);const a=24*8;this.t+=this.dir*this.speed*t,this.t>a&&(this.t-=a),this.t<0&&(this.t+=a),this.setPerimeter()}i&&Math.abs(i.speed)>5&&Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<2.1&&(this.knock(),this.onHit&&this.onHit()),this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.heading;const r=this.speed>.2?Math.sin(performance.now()*.008+this.phase)*(this.speed>3?.8:.45):0;this.legs[0].rotation.x=r,this.legs[1].rotation.x=-r,this.arms[0].rotation.x=-r*.7,this.arms[1].rotation.x=r*.7}knock(){this.down>0||(this.down=6,this.flee=0)}}class xg{constructor(t,e,n,i,r=1119e3){this.world=e,this.mesh=es(r,!0),this.mesh.group.position.set(n,0,i),t.add(this.mesh.group),this.pos=new T(n,0,i),this.heading=0,this.speed=0,this.health=90,this.radius=1.3,this.wheelSpin=0,this.flash=0,this.dead=!1}update(t,e,n){if(this.dead){this.speed*=.9,this.mesh.group.position.copy(this.pos);return}const i=new T(e.x-this.pos.x,0,e.z-this.pos.z),r=i.length();let o=(Math.atan2(i.x,i.z)-this.heading+Math.PI*3)%(Math.PI*2)-Math.PI;this.heading+=$t(o,-2.2*t,2.2*t);const l=r<8?6:20;this.speed+=(l-this.speed)*Math.min(1,t*1.8),this.pos.x+=Math.sin(this.heading)*this.speed*t,this.pos.z+=Math.cos(this.heading)*this.speed*t,this.pos.x=$t(this.pos.x,-175,175),this.pos.z=$t(this.pos.z,-175,179),this.world.resolveCircle(this.pos,1.15),this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=this.heading,this.wheelSpin+=this.speed*t/.37;for(const c of this.mesh.wheels)c.rotation.x=this.wheelSpin;this.flash=Math.floor(n*8)%2,this.mesh.barRed&&this.mesh.barRed.material.color.setHex(this.flash?16722462:3804426),this.mesh.barBlue&&this.mesh.barBlue.material.color.setHex(this.flash?924757:2976767)}}class vg{constructor(t,e,n={}){this.scene=t,this.world=e,this.callbacks=n,this.traffic=[],this.peds=[],this.parked=[],this.police=[],this.gunshotTimer=0,this.wanted=0,this.spawnTimer=0,this.spawnTraffic(),this.spawnPeds(),this.spawnParked()}spawnTraffic(){const t=this.world.roads;for(let e=0;e<18;e++){const n=Math.random()<.5,i=t[mn(0,t.length-1)],r=at(-156,Lt.HALF-14),a=n?Math.random()<.5?"x+":"x-":Math.random()<.5?"z+":"z-",o=3.4;let l,c;n?(l=r,c=i+(a==="x+"?-o:o)):(l=i+(a==="z+"?o:-o),c=r);const h=new mg(this.scene,this.world,l,c,a,[3812390,2304818,3947056,2761258][e%4]);this.traffic.push(h)}}spawnPeds(){for(let t=0;t<62;t++){const e=mn(0,4),n=mn(0,4),i=Lt.centers[e],r=Lt.centers[n],a=new _g(this.scene,this.world,i+24,r+at(-22,22),{x:i,z:r},at(0,192));a.onHit=()=>this.callbacks.onCrime?.("hit"),this.peds.push(a)}}spawnParked(){const t=this.world.roads;let e=0;for(;this.parked.length<12&&e++<200;){const n=Math.random()<.5,i=t[mn(0,t.length-1)],r=at(-158,Lt.HALF-12);if(t.some(m=>Math.abs(m-r)<11))continue;const o=Math.random()<.5?1:-1;let l,c,h;if(n?(l=r,c=i+o*6.1,h=o>0?-Math.PI/2:Math.PI/2):(l=i+o*6.1,c=r,h=o>0?Math.PI:0),this.world.colliders.some(m=>l>m.minX-2&&l<m.maxX+2&&c>m.minZ-2&&c<m.maxZ+2))continue;const d=[4988700,2042420,3814182,2894896,5323812,2439730][this.parked.length%6],u=es(d,!1,{beams:!1});u.group.position.set(l,0,c),u.group.rotation.y=h,this.scene.add(u.group),this.parked.push({mesh:u,pos:new T(l,0,c),heading:h,color:d,taken:!1})}}nearestParked(t,e=4.2){let n=null,i=e;for(const r of this.parked){if(r.taken)continue;const a=Math.hypot(r.pos.x-t.x,r.pos.z-t.z);a<i&&(i=a,n=r)}return n}update(t,e,n,i,r){this.gunshotTimer=Math.max(0,this.gunshotTimer-t);const a=this.gunshotTimer>0;for(const l of this.traffic)l.update(t,e,n);for(const l of this.peds)l.update(t,e,a,n);const o=n?n.pos:e;for(const l of this.police)l.update(t,o,r),Math.hypot(l.pos.x-o.x,l.pos.z-o.z)<3.2&&(n&&Math.abs(n.speed)>3?(n.damage(t*14),this.callbacks.onPoliceHit&&this.callbacks.onPoliceHit()):i||this.callbacks.onPoliceShoot&&this.callbacks.onPoliceShoot(t));this.spawnTimer-=t,this.wanted>0&&this.police.filter(l=>!l.dead).length<this.wanted&&this.spawnTimer<=0&&(this.spawnPolice(o),this.spawnTimer=3.5)}spawnPolice(t){const e=this.world.roads;for(let n=0;n<30;n++){const i=Math.random()<.5,r=e[mn(0,e.length-1)],a=at(-160,Lt.HALF-10),o=i?a:r+3.4,l=i?r-3.4:a,c=Math.hypot(o-t.x,l-t.z);if(c<55||c>140)continue;const h=new xg(this.scene,this.world,o,l);return h.heading=Math.atan2(t.x-o,t.z-l),this.police.push(h),h}return null}setWanted(t,e){if(t=$t(t,0,5),this.wanted=t,t===0){for(const n of this.police)this.scene.remove(n.mesh.group);this.police=[]}else{for(;this.police.filter(n=>!n.dead).length<t&&this.spawnPolice(e););for(;this.police.filter(n=>!n.dead).length>t;){const n=this.police.find(i=>!i.dead);if(!n)break;this.scene.remove(n.mesh.group),this.police.splice(this.police.indexOf(n),1)}}}alertGunshot(){this.gunshotTimer=4}shootableHit(t,e,n){let i=null,r=n;const a=(o,l,c,h)=>{const d=new T(l.x-t.x,0,l.z-t.z),u=d.dot(e);if(u<0||u>n)return;Math.abs(d.x*e.z-d.z*e.x)<c&&u<r&&(r=u,i={obj:o,kind:h,point:new T(t.x+e.x*u,1.1,t.z+e.z*u)})};for(const o of this.police)o.dead||a(o,o.pos,1.5,"police");for(const o of this.traffic)a(o,o.pos,1.4,"traffic");for(const o of this.peds)!o.removed&&o.down<=0&&a(o,o.pos,.55,"ped");return i}policeAt(t,e=3){return this.police.find(n=>!n.dead&&Math.hypot(n.pos.x-t.x,n.pos.z-t.z)<e)}}class Mg{constructor(){this.move={x:0,y:0},this.look={x:0,y:0},this.aiming=!1,this.fire=!1,this.sprint=!1,this.brake=!1,this.touchFire=!1,this.touchSprint=!1,this.touchBrake=!1,this.horn=!1,this.actQueued=!1,this.hornQueued=!1,this.tilt=0,this.tiltEnabled=!1,this.tiltNeutral=null,this.lefty=!1,this.enabled=!0,this.isTouch=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,this.keys=new Set,this.joyPointer=null,this.lookPointer=null,this.joyOrigin={x:0,y:0},this.joyRadius=58,this.lastLook={x:0,y:0},this.onTiltChange=null,this.onAimChange=null,this.motionState="off",this.canvas=document.getElementById("game"),this.joyEl=document.getElementById("joystick"),this.knob=document.getElementById("stickKnob"),this.base=document.getElementById("stickBase"),this.btnAim=document.getElementById("btnAim"),this.btnFire=document.getElementById("btnFire"),this.btnRun=document.getElementById("btnRun"),this.btnAct=document.getElementById("btnAct"),this.btnBrake=document.getElementById("btnBrake"),this.btnHorn=document.getElementById("btnHorn"),this.hud=document.getElementById("hud"),this.bindButtons(),this.bindCanvas(),this.bindKeys(),window.addEventListener("blur",()=>this.releaseAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()})}releaseAll(){this.move.x=this.move.y=0,this.fire=this.sprint=this.brake=!1,this.touchFire=this.touchSprint=this.touchBrake=!1,this.joyPointer=null,this.joyEl.classList.add("hidden")}setLefty(t){this.lefty=t,document.body.classList.toggle("lefty",t)}bindButtons(){const t=(e,n,i)=>{e.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),e.setPointerCapture?.(a.pointerId),e.classList.add("pressed"),n()});const r=a=>{a.preventDefault(),e.classList.remove("pressed"),i?.()};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("lostpointercapture",()=>{e.classList.remove("pressed"),i?.()}),e.addEventListener("contextmenu",a=>a.preventDefault())};t(this.btnFire,()=>{this.touchFire=!0,this.fire=!0},()=>{this.touchFire=!1,this.fire=!1}),t(this.btnRun,()=>{this.touchSprint=!0,this.sprint=!0},()=>{this.touchSprint=!1,this.sprint=!1}),t(this.btnBrake,()=>{this.touchBrake=!0,this.brake=!0},()=>{this.touchBrake=!1,this.brake=!1}),this.btnAct.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),this.actQueued=!0,this.btnAct.classList.add("pressed")}),this.btnAct.addEventListener("pointerup",()=>this.btnAct.classList.remove("pressed")),this.btnAct.addEventListener("pointercancel",()=>this.btnAct.classList.remove("pressed")),this.btnHorn.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),this.hornQueued=!0,this.btnHorn.classList.add("pressed")}),this.btnHorn.addEventListener("pointerup",()=>this.btnHorn.classList.remove("pressed")),this.btnAim.addEventListener("pointerdown",e=>{e.preventDefault(),e.stopPropagation(),this.aiming=!this.aiming,this.btnAim.classList.toggle("pressed",this.aiming),this.onAimChange?.(this.aiming)})}bindCanvas(){const t=this.canvas;t.addEventListener("pointerdown",n=>{if(!this.enabled)return;if(n.pointerType==="mouse"){this.lookPointer=n.pointerId,this.lastLook={x:n.clientX,y:n.clientY},t.setPointerCapture?.(n.pointerId);return}(this.lefty?n.clientX>innerWidth*.54:n.clientX<innerWidth*.54)&&n.clientY>innerHeight*.28?this.startJoystick(n):(this.lookPointer=n.pointerId,this.lastLook={x:n.clientX,y:n.clientY})}),t.addEventListener("pointermove",n=>{if(n.pointerId===this.joyPointer)this.moveJoystick(n);else if(n.pointerId===this.lookPointer){const i=n.clientX-this.lastLook.x,r=n.clientY-this.lastLook.y;this.look.x+=i,this.look.y+=r,this.lastLook={x:n.clientX,y:n.clientY}}});const e=n=>{n.pointerId===this.joyPointer&&this.endJoystick(),n.pointerId===this.lookPointer&&(this.lookPointer=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointerleave",e),t.addEventListener("contextmenu",n=>n.preventDefault())}startJoystick(t){this.joyPointer=t.pointerId,this.joyOrigin={x:t.clientX,y:t.clientY},this.joyRadius=Math.min(64,innerWidth*.075),this.joyEl.style.left=t.clientX+"px",this.joyEl.style.top=t.clientY+"px",this.joyEl.style.width=this.joyEl.style.height=this.joyRadius*2.3+"px",this.joyEl.style.margin=`${-this.joyRadius*1.15}px 0 0 ${-this.joyRadius*1.15}px`,this.joyEl.classList.remove("hidden"),this.move.x=this.move.y=0,this.canvas.setPointerCapture?.(t.pointerId)}moveJoystick(t){const e=t.clientX-this.joyOrigin.x,n=t.clientY-this.joyOrigin.y,i=this.joyRadius,r=Math.hypot(e,n),a=r>i?i/r:1,o=e*a,l=n*a;this.move.x=$t(o/i,-1,1),this.move.y=$t(-l/i,-1,1),this.joyEl.clientWidth/2.3,this.knob.style.transform=`translate(${o}px,${l}px)`}endJoystick(){this.joyPointer=null,this.move.x=this.move.y=0,this.joyEl.classList.add("hidden"),this.knob.style.transform="translate(0,0)"}bindKeys(){window.addEventListener("keydown",t=>{["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)||(this.keys.add(t.code),t.code==="KeyE"&&(this.actQueued=!0),t.code==="KeyF"&&(this.aiming=!this.aiming,this.btnAim.classList.toggle("pressed",this.aiming),this.onAimChange?.(this.aiming)),t.code==="KeyH"&&(this.hornQueued=!0),t.code==="Space"&&t.preventDefault())}),window.addEventListener("keyup",t=>this.keys.delete(t.code))}update(){if(this.enabled&&this.joyPointer===null){let t=0,e=0;if((this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),t||e){const n=Math.hypot(t,e);this.move.x=t/n,this.move.y=e/n}else this.move.x=this.move.y=0;this.fire=this.touchFire||this.keys.has("Space"),this.sprint=this.touchSprint||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.brake=this.touchBrake||this.keys.has("Space")&&!this.aiming}this.tiltEnabled&&this.updateTilt()}consumeLook(){const t={x:this.look.x,y:this.look.y};return this.look.x=this.look.y=0,t}consumeAct(){const t=this.actQueued;return this.actQueued=!1,t}consumeHorn(){const t=this.hornQueued;return this.hornQueued=!1,t}async enableTilt(){if(typeof DeviceOrientationEvent>"u")return this.motionState="unsupported",!1;try{return typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"?(this.motionState="denied",!1):(this._motionHandler||(this._motionHandler=t=>{if(t.gamma==null&&t.beta==null)return;const e=screen.orientation?.angle??window.orientation??0;let n;Math.abs(e)===90?n=t.beta??0:n=t.gamma??0,this.tiltNeutral==null&&(this.tiltNeutral=n);let i=n-this.tiltNeutral;Math.abs(e)===90&&(i=-i*Math.sign(e)),this.tilt=$t(i/26,-1,1),this.motionState="active",this.onTiltChange?.(this.tilt,this.motionState)},window.addEventListener("deviceorientation",this._motionHandler,!0)),this.tiltEnabled=!0,this.motionState="active",this.tiltNeutral=null,!0)}catch{return this.motionState="denied",!1}}disableTilt(){this.tiltEnabled=!1,this.tilt=0,this.motionState="off",this._motionHandler&&window.removeEventListener("deviceorientation",this._motionHandler,!0),this._motionHandler=null,this.onTiltChange?.(0,"off")}updateTilt(){this._motionHandler&&this.tiltNeutral==null&&(this.tiltNeutral=0)}calibrateTilt(){this.tiltNeutral=null,this.tilt=0}}const kt=s=>document.getElementById(s);class yg{constructor(t,e){this.world=t,this.input=e,this.el={loading:kt("loading"),loadFill:kt("loadFill"),loadStatus:kt("loadStatus"),title:kt("title"),hud:kt("hud"),money:kt("money"),wanted:kt("wanted"),objective:kt("objective"),objSub:kt("objSub"),district:kt("district"),minimap:kt("minimap"),healthFill:kt("healthFill"),speedo:kt("speedo"),speedoCanvas:kt("speedoCanvas"),speedNum:kt("speedNum"),carHealth:kt("carHealth"),dialogue:kt("dialogue"),dlgWho:kt("dlgWho"),dlgText:kt("dlgText"),dlgInitial:kt("dlgInitial"),interact:kt("interactPrompt"),interactText:kt("interactText"),toast:kt("toast"),chip:kt("objectiveChip"),chipDist:kt("chipDist"),missionCard:kt("missionCard"),mcKicker:kt("mcKicker"),mcTitle:kt("mcTitle"),mcText:kt("mcText"),mcGo:kt("mcGo"),pause:kt("pause"),settings:kt("settings"),phone:kt("phone"),jobList:kt("jobList"),phoneFoot:kt("phoneFoot"),phoneTime:kt("phoneTime"),clock:kt("clock"),fail:kt("fail"),failTitle:kt("failTitle"),failText:kt("failText"),ending:kt("ending"),endCash:kt("endCash"),endTime:kt("endTime"),damageFlash:kt("damageFlash"),tiltBadge:kt("tiltBadge"),cine:kt("cine-bars"),rotate:kt("rotateHint")},this.money=0,this.dialogueQueue=[],this.dialogueDone=null,this.typing=null,this.fullText="",this.charIndex=0,this.minimapCtx=this.el.minimap.getContext("2d"),this.speedCtx=this.el.speedoCanvas.getContext("2d"),this.mapBase=this.buildMapBase(),this.mapScale=2,this.buildWanted(),this.bindDialogue(),this.clockMinutes=23*60+40,this.clockAcc=0,this.tiltNote=kt("motionNote")}buildWanted(){this.stars=[...this.el.wanted.querySelectorAll("i")]}bindDialogue(){this.el.dialogue.addEventListener("pointerdown",e=>{if(e.preventDefault(),e.stopPropagation(),this.typing){this.finishTyping();return}this.advanceDialogue()}),kt("motionNote").addEventListener("click",()=>{this.input.calibrateTilt(),this.motionNote("Level the device, then release. Tilt is recalibrated.",!1)})}buildMapBase(){const{c:n,ctx:i}=(()=>{const a=document.createElement("canvas");return a.width=680,a.height=680,{c:a,ctx:a.getContext("2d")}})();i.fillStyle="#0a0b0f",i.fillRect(0,0,680,680);for(const a of this.world.mapBlocks){const o=(a.x+170)*2,l=(a.z+170)*2,c=52*2;let h="#191a20";a.type==="park"?h="#1c2b1c":a.type==="church"?h="#2a241d":a.type==="club"?h="#301a1e":(a.type.includes("warehouse")||a.type==="yard")&&(h="#24241f"),i.fillStyle=h,i.fillRect(o-c/2,l-c/2,c,c),i.strokeStyle="rgba(214,178,106,.12)",i.lineWidth=1,i.strokeRect(o-c/2,l-c/2,c,c)}i.strokeStyle="#35363d",i.lineWidth=16*2,i.lineCap="butt";for(const a of this.world.roads){const o=(a+170)*2;i.beginPath(),i.moveTo(0,o),i.lineTo(680,o),i.stroke(),i.beginPath(),i.moveTo(o,0),i.lineTo(o,680),i.stroke()}i.strokeStyle="rgba(214,178,106,.28)",i.lineWidth=1;for(const a of this.world.roads){const o=(a+170)*2;i.setLineDash([5,9]),i.beginPath(),i.moveTo(0,o),i.lineTo(680,o),i.stroke(),i.beginPath(),i.moveTo(o,0),i.lineTo(o,680),i.stroke()}i.setLineDash([]);const r=[[this.world.landmarks.club,"#d6b26a"],[this.world.landmarks.butcher,"#d6b26a"],[this.world.landmarks.church,"#d6b26a"],[this.world.landmarks.docks,"#d6b26a"]];for(const[a,o]of r){if(!a)continue;const l=(a.x+170)*2,c=(a.z+170)*2;i.fillStyle=o,i.beginPath(),i.arc(l,c,2.4,0,Math.PI*2),i.fill()}return i.strokeStyle="rgba(214,178,106,.35)",i.lineWidth=2,i.strokeRect(1,1,678,678),n}setMoney(t){this.money=t,this.el.money.textContent=Math.round(t).toLocaleString("en-US")}setObjective(t,e=""){this.el.objective.textContent=t,this.el.objSub.textContent=e,this.el.objSub.style.display=e?"":"none"}setHealth(t){this.el.healthFill.style.width=$t(t,0,100)+"%",this.el.healthFill.style.background=t<30?"linear-gradient(90deg,#a51f17,#d45a40)":"linear-gradient(90deg,#8e2f28,#d6b26a)"}setCarHealth(t){this.el.carHealth.firstElementChild.style.width=$t(t,0,100)+"%",this.el.carHealth.firstElementChild.style.background=t<30?"#c0392f":"#d6b26a"}setWanted(t){this.stars.forEach((e,n)=>{e.classList.toggle("on",n<t),e.classList.toggle("hot",n<t&&t>=4)})}setDistrict(t){this.el.district.textContent=t}setClock(t){const e=Math.floor(t/60)%24,n=Math.floor(t%60),i=`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`;this.el.clock.textContent=i,this.el.phoneTime.textContent=i}tickClock(t){this.clockAcc+=t,this.clockAcc>12&&(this.clockAcc=0,this.clockMinutes=(this.clockMinutes+1)%1440,this.setClock(this.clockMinutes))}showToast(t,e=2.4){this.el.toast.textContent=t,this.el.toast.classList.remove("hidden"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this.el.toast.classList.add("hidden"),e*1e3)}setInteract(t){if(!t){this.el.interact.classList.add("hidden");return}this.el.interactText.textContent=t,this.el.interact.classList.remove("hidden")}setActLabel(t){const e=document.getElementById("btnAct");e.textContent!==t&&(e.textContent=t)}setReticle(t){document.getElementById("reticle").classList.toggle("hidden",!t)}say(t,e){this.dialogueQueue=Array.isArray(t)?[...t]:[t],this.dialogueDone=e||null,this.el.dialogue.classList.remove("hidden"),this.showLine()}showLine(){const t=this.dialogueQueue.shift();if(!t){this.endDialogue();return}this.el.dlgWho.textContent=t.who||"LAROSSA",this.el.dlgInitial.textContent=(t.who||"L")[0],this.fullText=t.text,this.charIndex=0,this.el.dlgText.textContent="",clearInterval(this.typing),this.typing=setInterval(()=>{this.charIndex++,this.el.dlgText.textContent=this.fullText.slice(0,this.charIndex),this.charIndex>=this.fullText.length&&this.finishTyping()},16)}finishTyping(){clearInterval(this.typing),this.typing=null,this.charIndex=this.fullText.length,this.el.dlgText.textContent=this.fullText}advanceDialogue(){this.dialogueQueue.length?this.showLine():this.endDialogue()}endDialogue(){clearInterval(this.typing),this.typing=null,this.el.dialogue.classList.add("hidden");const t=this.dialogueDone;this.dialogueDone=null,t&&t()}clearDialogue(){clearInterval(this.typing),this.typing=null,this.dialogueQueue=[],this.dialogueDone=null,this.el.dialogue.classList.add("hidden")}showMissionCard(t,e,n,i,r="START"){this.el.mcKicker.textContent=t,this.el.mcTitle.textContent=e,this.el.mcText.innerHTML=n,this.el.mcGo.textContent=r,this.el.missionCard.classList.remove("hidden"),this.el.mcGo.onclick=()=>{this.el.missionCard.classList.add("hidden"),i?.()}}hideMissionCard(){this.el.missionCard.classList.add("hidden")}showFail(t,e,n){this.el.failTitle.textContent=t,this.el.failText.textContent=e,this.el.fail.classList.remove("hidden"),kt("btnRetry").onclick=()=>{this.el.fail.classList.add("hidden"),n?.()}}showEnding(t,e){this.el.endCash.textContent="$"+Math.round(t.cash).toLocaleString("en-US"),this.el.endTime.textContent=t.time,this.el.ending.classList.remove("hidden"),kt("btnFreeRoam").onclick=()=>{this.el.ending.classList.add("hidden"),e?.()}}setCarMode(t){document.querySelectorAll(".car-only").forEach(e=>e.classList.toggle("hidden",!t)),["btnAim","btnFire","btnRun"].forEach(e=>kt(e).classList.toggle("hidden",t)),this.el.speedo.classList.toggle("hidden",!t),t||(this.input.aiming=!1)}damageFlash(){this.el.damageFlash.style.opacity=".85",setTimeout(()=>{this.el.damageFlash.style.opacity="0"},160)}setCinematic(t){this.el.cine.classList.toggle("on",t)}updateChip(t){this.el.chipDist.textContent=Math.round(t)+" m"}openPhone(t,e){if(this.el.jobList.innerHTML="",!t.length)this.el.jobList.innerHTML='<div class="job locked">No work yet.<small>Finish the story to open the city.</small></div>',this.el.phoneFoot.textContent="NO SIGNAL";else{this.el.phoneFoot.textContent="THE DON SEES EVERYTHING";for(const n of t){const i=document.createElement("button");i.className="job"+(n.locked?" locked":""),i.innerHTML=`<div>${n.title}<small>${n.desc}</small></div><em>${n.reward}</em>`,n.locked||(i.onclick=()=>{this.el.phone.classList.add("hidden"),e?.(n)}),this.el.jobList.appendChild(i)}}this.el.phone.classList.remove("hidden")}closePhone(){this.el.phone.classList.add("hidden")}motionNote(t,e=!0){this.el.motionNote.textContent=t,this.el.motionNote.classList.remove("hidden"),this.el.motionNote.style.color=e?"var(--gold)":"rgba(239,227,200,.55)"}setTiltBadge(t){this.el.tiltBadge.classList.toggle("hidden",!t)}updateMinimap(t,e,n,i,r=[]){const a=this.minimapCtx,o=180,l=180,c=90,h=e?e.pos:t.pos,d=e?e.heading:t.heading;a.save(),a.clearRect(0,0,o,l),a.beginPath(),a.arc(c,c,c-1,0,Math.PI*2),a.clip(),a.fillStyle="#08090d",a.fillRect(0,0,o,l);const u=118,m=u*this.mapScale,g=(h.x+170)*this.mapScale-m/2,x=(h.z+170)*this.mapScale-m/2;a.drawImage(this.mapBase,g,x,m,m,0,0,o,l);const f=(p,y)=>{const M=((p-h.x)/u+.5)*o,b=((y-h.z)/u+.5)*l;return[M,b]};a.fillStyle="rgba(180,180,190,.55)";for(const p of n.traffic){const[y,M]=f(p.pos.x,p.pos.z);a.fillRect(y-1,M-1,2,2)}a.fillStyle="rgba(214,178,106,.35)";for(const p of n.parked){if(p.taken)continue;const[y,M]=f(p.pos.x,p.pos.z);a.fillRect(y-1,M-1,2,2)}for(const p of r){if(!p)continue;const[y,M]=f(p.pos.x,p.pos.z);a.fillStyle="#f0d493",a.beginPath(),a.arc(y,M,2.6,0,Math.PI*2),a.fill()}for(const p of n.police){if(p.dead)continue;const[y,M]=f(p.pos.x,p.pos.z);a.fillStyle="#d94a3f",a.beginPath(),a.arc(y,M,2.2,0,Math.PI*2),a.fill()}if(i){const[p,y]=f(i.x,i.z),M=p-c,b=y-c,I=Math.hypot(M,b);let P=p,C=y;I>c-9&&(P=c+M/I*(c-9),C=c+b/I*(c-9)),a.save(),a.translate(P,C),a.rotate(Math.PI/4),a.fillStyle="#f0d493",a.fillRect(-3.4,-3.4,6.8,6.8),a.strokeStyle="rgba(0,0,0,.6)",a.lineWidth=1,a.strokeRect(-3.4,-3.4,6.8,6.8),a.restore()}a.save(),a.translate(c,c),a.rotate(-d+Math.PI),a.fillStyle="#f7ecd2",a.beginPath(),a.moveTo(0,-6.5),a.lineTo(4.4,5),a.lineTo(0,2.6),a.lineTo(-4.4,5),a.closePath(),a.fill(),a.restore(),a.strokeStyle="rgba(214,178,106,.18)",a.lineWidth=1,a.beginPath(),a.arc(c,c,c-4,0,Math.PI*2),a.stroke(),a.restore()}drawSpeedo(t,e=120){const n=this.speedCtx,i=190;n.clearRect(0,0,i,110);const a=i/2,o=88,l=64;n.lineCap="round",n.strokeStyle="rgba(239,227,200,.12)",n.lineWidth=3,n.beginPath(),n.arc(a,o,l,Math.PI*.86,Math.PI*.14,!1),n.stroke();const c=$t(t/e,0,1);n.strokeStyle=c>.8?"#c0392f":"#d6b26a",n.lineWidth=3,n.beginPath(),n.arc(a,o,l,Math.PI*.86,Math.PI*.86+Math.PI*1.28*c,!1),n.stroke();for(let d=0;d<=12;d++){const u=Math.PI*.86+Math.PI*1.28*(d/12),m=a+Math.cos(u)*(l-8),g=o+Math.sin(u)*(l-8),x=a+Math.cos(u)*(l-2),f=o+Math.sin(u)*(l-2);n.strokeStyle=d%3===0?"rgba(214,178,106,.7)":"rgba(239,227,200,.25)",n.lineWidth=d%3===0?1.6:.8,n.beginPath(),n.moveTo(m,g),n.lineTo(x,f),n.stroke()}const h=Math.PI*.86+Math.PI*1.28*c;n.strokeStyle="#f0d493",n.lineWidth=1.6,n.beginPath(),n.moveTo(a+Math.cos(h)*12,o+Math.sin(h)*12),n.lineTo(a+Math.cos(h)*(l-14),o+Math.sin(h)*(l-14)),n.stroke(),n.fillStyle="#d6b26a",n.beginPath(),n.arc(a,o,2.6,0,Math.PI*2),n.fill()}districtFor(t){return t<-100?"NORTH QUARTER":t>100?"HARBOR DISTRICT":t>30?"LITTLE ITALY":t<-30?"GRAND AVENUE":"OLD QUARTER"}}class Sg{constructor(){this.ctx=null,this.enabled=!0,this.started=!1,this.musicOn=!0,this.engineNodes=null,this.siren=null,this.nextBar=0,this.barIndex=0,this.timer=null}async unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.55:0,this.master.connect(this.ctx.destination),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=.7,this.sfxBus.connect(this.master),this.ambBus=this.ctx.createGain(),this.ambBus.gain.value=.2,this.ambBus.connect(this.master),this.makeNoise(),this.startAmbience(),this.startMusic(),this.started=!0}this.ctx.state==="suspended"&&await this.ctx.resume()}makeNoise(){const t=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);let n=0;for(let i=0;i<t;i++){const r=Math.random()*2-1;n=(n+.02*r)/1.02,e[i]=n*3.2}}startAmbience(){const t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=700;const n=this.ctx.createGain();n.gain.value=.22,t.connect(e),e.connect(n),n.connect(this.ambBus),t.start();const i=this.ctx.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=2400;const a=this.ctx.createGain();a.gain.value=.075,i.connect(r),r.connect(a),a.connect(this.ambBus),i.start();const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=44;const l=this.ctx.createGain();l.gain.value=.055,o.connect(l),l.connect(this.ambBus),o.start()}startMusic(){this.nextBar=this.ctx.currentTime+.5,this.timer=setInterval(()=>this.schedule(),220)}schedule(){if(!this.ctx||!this.musicOn)return;const t=this.ctx.currentTime,e=3.6;for(;this.nextBar<t+.8;)this.playBar(this.nextBar,this.barIndex),this.nextBar+=e,this.barIndex++}playBar(t,e){const i=[[50,53,57,62],[46,50,53,58],[43,46,50,55],[45,49,52,57]][e%4];for(const h of i.slice(0,3)){const d=440*Math.pow(2,(h-69)/12),u=this.ctx.createOscillator();u.type="triangle",u.frequency.value=d;const m=this.ctx.createGain();m.gain.setValueAtTime(0,t),m.gain.linearRampToValueAtTime(.045,t+.5),m.gain.linearRampToValueAtTime(.028,t+2.7),m.gain.linearRampToValueAtTime(0,t+3.5);const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.value=900,u.connect(m),m.connect(g),g.connect(this.musicBus),u.start(t),u.stop(t+3.6)}const r=440*Math.pow(2,(i[0]-24-69)/12);for(const h of[0,1.8]){const d=this.ctx.createOscillator();d.type="sine",d.frequency.value=r;const u=this.ctx.createGain();u.gain.setValueAtTime(0,t+h),u.gain.linearRampToValueAtTime(.16,t+h+.02),u.gain.exponentialRampToValueAtTime(.001,t+h+.9),d.connect(u),u.connect(this.musicBus),d.start(t+h),d.stop(t+h+1)}const a=[69,72,74,72,69,67,65,67];if(e%2===0){const h=a[e/2%a.length],d=440*Math.pow(2,(h-69)/12),u=this.ctx.createOscillator();u.type="triangle",u.frequency.value=d;const m=this.ctx.createGain();m.gain.setValueAtTime(0,t+1.2),m.gain.linearRampToValueAtTime(.055,t+1.22),m.gain.exponentialRampToValueAtTime(.001,t+2.9),u.connect(m),m.connect(this.musicBus),u.start(t+1.2),u.stop(t+3)}const o=this.ctx.createBufferSource();o.buffer=this.noiseBuf;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=5e3,l.Q.value=.8;const c=this.ctx.createGain();c.gain.setValueAtTime(.012,t),c.gain.exponentialRampToValueAtTime(.001,t+.25),o.connect(l),l.connect(c),c.connect(this.musicBus),o.start(t),o.stop(t+.3)}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.05)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.16:0,this.ctx.currentTime,.1)}startEngine(){if(!this.ctx||this.engineNodes)return;const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.value=48;const e=this.ctx.createOscillator();e.type="square",e.frequency.value=24;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=240,n.Q.value=2;const i=this.ctx.createGain();i.gain.value=0;const r=this.ctx.createGain();r.gain.value=.25,t.connect(n),e.connect(r),r.connect(n),n.connect(i),i.connect(this.sfxBus),t.start(),e.start(),this.engineNodes={o:t,o2:e,g:i,lp:n}}updateEngine(t,e,n){if(!this.ctx||!this.engineNodes)return;const i=this.engineNodes,r=this.ctx.currentTime,a=Math.abs(t);i.o.frequency.setTargetAtTime(42+a*2.4,r,.08),i.o2.frequency.setTargetAtTime(21+a*1.2,r,.08),i.lp.frequency.setTargetAtTime(180+a*9,r,.1),i.g.gain.setTargetAtTime(n?.055+Math.min(.09,a*.004):0,r,.12)}stopEngine(){if(!this.engineNodes)return;const{o:t,o2:e,g:n}=this.engineNodes;n.gain.setTargetAtTime(0,this.ctx.currentTime,.1),setTimeout(()=>{try{t.stop(),e.stop()}catch{}},500),this.engineNodes=null}blip(t=300,e=.05,n="square",i=.1){if(!this.ctx)return;const r=this.ctx.currentTime,a=this.ctx.createOscillator();a.type=n,a.frequency.value=t;const o=this.ctx.createGain();o.gain.setValueAtTime(i,r),o.gain.exponentialRampToValueAtTime(.001,r+e),a.connect(o),o.connect(this.sfxBus),a.start(r),a.stop(r+e)}click(){this.blip(620,.04,"sine",.05)}gunshot(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.6;const i=this.ctx.createGain();i.gain.setValueAtTime(.6,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(i),i.connect(this.sfxBus),e.start(t),e.stop(t+.25);const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(120,t),r.frequency.exponentialRampToValueAtTime(40,t+.15);const a=this.ctx.createGain();a.gain.setValueAtTime(.35,t),a.gain.exponentialRampToValueAtTime(.001,t+.18),r.connect(a),a.connect(this.sfxBus),r.start(t),r.stop(t+.2)}horn(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const e of[330,415]){const n=this.ctx.createOscillator();n.type="square",n.frequency.value=e;const i=this.ctx.createGain();i.gain.setValueAtTime(.09,t),i.gain.setValueAtTime(.09,t+.3),i.gain.exponentialRampToValueAtTime(.001,t+.42),n.connect(i),i.connect(this.sfxBus),n.start(t),n.stop(t+.45)}}cash(){if(!this.ctx)return;const t=this.ctx.currentTime;[1046,1318,1568].forEach((e,n)=>{const i=this.ctx.createOscillator();i.type="triangle",i.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t+n*.07),r.gain.linearRampToValueAtTime(.08,t+n*.07+.01),r.gain.exponentialRampToValueAtTime(.001,t+n*.07+.3),i.connect(r),r.connect(this.sfxBus),i.start(t+n*.07),i.stop(t+n*.07+.32)})}sting(t=!0){if(!this.ctx)return;const e=this.ctx.currentTime;(t?[62,65,69,74]:[62,58,55,50]).forEach((i,r)=>{const a=440*Math.pow(2,(i-69)/12),o=this.ctx.createOscillator();o.type="triangle",o.frequency.value=a;const l=this.ctx.createGain();l.gain.setValueAtTime(0,e+r*.12),l.gain.linearRampToValueAtTime(.1,e+r*.12+.03),l.gain.exponentialRampToValueAtTime(.001,e+r*.12+1.2),o.connect(l),l.connect(this.sfxBus),o.start(e+r*.12),o.stop(e+r*.12+1.3)})}impact(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(90,t),e.frequency.exponentialRampToValueAtTime(30,t+.25);const n=this.ctx.createGain();n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n),n.connect(this.sfxBus),e.start(t),e.stop(t+.32),this.blip(160,.12,"square",.08)}siren(t){if(this.ctx){if(t&&!this.siren){const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=700;const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=.5;const i=this.ctx.createGain();i.gain.value=180,n.connect(i),i.connect(e.frequency);const r=this.ctx.createGain();r.gain.value=.028,e.connect(r),r.connect(this.sfxBus),e.start(),n.start(),this.siren={o:e,lfo:n,g:r}}else if(!t&&this.siren){const e=this.siren;this.siren=null,e.g.gain.setTargetAtTime(0,this.ctx.currentTime,.2),setTimeout(()=>{try{e.o.stop(),e.lfo.stop()}catch{}},600)}}}}const Uc=ys("rgba(255,220,150,.9)","rgba(255,170,60,0)",96);class wg{constructor(t,e,n,i){this.scene=t,this.world=e,this.pos=new T(n,0,i),this.health=100,this.dead=!1,this.downTimer=0,this.cooldown=at(1,2.5),this.radius=.55,this.heading=0,this.hitFlash=0,this.group=new Ie;const r=new dt({color:1974052,roughness:.9}),a=new dt({color:9135696,roughness:.8}),o=new dt({color:1315862,roughness:.8}),l=new B(new te(.26,.32,.95,8),r);l.position.y=1.15,l.castShadow=!0,this.group.add(l);const c=new B(new Oe(.18,10,8),a);c.position.y=1.76,this.group.add(c);const h=new B(new te(.3,.3,.04,12),o);h.position.y=1.9,this.group.add(h);const d=new B(new te(.19,.21,.2,10),o);d.position.y=2,this.group.add(d),this.legs=[];for(const m of[-1,1]){const g=new B(new pt(.17,.7,.2),new dt({color:1118742,roughness:.9}));g.geometry.translate(0,-.35,0),g.position.set(m*.12,.7,0),this.group.add(g),this.legs.push(g)}this.arms=[];for(const m of[-1,1]){const g=new B(new te(.07,.08,.55,6),r);g.geometry.translate(0,-.27,0),g.position.set(m*.31,1.5,0),this.group.add(g),this.arms.push(g)}const u=new B(new pt(.07,.1,.4),new dt({color:2500652,metalness:.8,roughness:.3}));u.position.set(0,-.55,.25),this.arms[1].add(u),this.flash=new Ss(new Ji({map:Uc,color:16760944,transparent:!0,blending:_n,depthWrite:!1})),this.flash.scale.set(.8,.8,1),this.flash.position.set(0,-.55,.55),this.flash.visible=!1,this.arms[1].add(this.flash),this.group.position.copy(this.pos),t.add(this.group),this.walk=at(0,6)}update(t,e,n,i,r){if(this.flash.visible=!1,this.dead){this.downTimer-=t,this.group.rotation.z=Math.min(Math.PI/2,this.group.rotation.z+t*5),this.group.position.y=Math.max(-.35,this.group.position.y-t*1.5),this.downTimer<=0&&(this.group.visible=!1);return}this.hitFlash=Math.max(0,this.hitFlash-t);const a=new T(n.x-this.pos.x,0,n.z-this.pos.z),o=a.length();o>.01&&(this.heading=Math.atan2(a.x,a.z)),o>16?(this.pos.x+=a.x/o*2.2*t,this.pos.z+=a.z/o*2.2*t,this.walk+=t*7):o<7&&(this.pos.x-=a.x/o*1.6*t,this.pos.z-=a.z/o*1.6*t,this.walk+=t*6),this.world.resolveCircle(this.pos,.45),this.pos.x=$t(this.pos.x,-170,170),this.pos.z=$t(this.pos.z,-170,180),this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.heading;const l=Math.sin(this.walk)*.45;if(this.legs[0].rotation.x=l,this.legs[1].rotation.x=-l,this.arms[0].rotation.x=-l*.5,this.arms[1].rotation.x=-1.35,this.cooldown-=t,this.cooldown<=0&&o<34&&!e.dead){this.cooldown=at(1.6,2.9),this.flash.visible=!0,this.arms[1].rotation.x=-1.5;const c=new T(this.pos.x,1.35,this.pos.z);r?.(c,n)}}hit(t){return this.dead?!1:(this.health-=t,this.hitFlash=.15,this.health<=0?(this.dead=!0,this.downTimer=5,!0):!1)}}class bg{constructor(t,e,n,i,r,a){this.scene=t,this.world=e,this.pos=new T(n,0,i),this.heading=r,this.speed=0,this.route=a,this.index=0,this.stopped=!1,this.mesh=es(2109480),this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=r,t.add(this.mesh.group),this.wheelSpin=0}update(t){if(this.stopped)return;const e=this.route[this.index];if(!e){this.stopped=!0,this.speed=0;return}const n=new T(e.x-this.pos.x,0,e.z-this.pos.z);if(n.length()<4){this.index++,this.index>=this.route.length&&(this.stopped=!0,this.speed=0);return}let a=(Math.atan2(n.x,n.z)-this.heading+Math.PI*3)%(Math.PI*2)-Math.PI;this.heading+=$t(a,-1.6*t,1.6*t);const o=this.index===this.route.length-1?8:11.5;this.speed+=(o-this.speed)*Math.min(1,t*2),this.pos.x+=Math.sin(this.heading)*this.speed*t,this.pos.z+=Math.cos(this.heading)*this.speed*t,this.world.resolveCircle(this.pos,1.1),this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=this.heading,this.wheelSpin+=this.speed*t/.37;for(const l of this.mesh.wheels)l.rotation.x=this.wheelSpin}remove(){this.scene.remove(this.mesh.group)}}class Eg{constructor(t,e,n,i){this.scene=t,this.world=e,this.pos=new T(n,0,i),this.heading=0,this.speed=0,this.health=80,this.dead=!1,this.cooldown=1.2,this.radius=1.4,this.mesh=es(1315863),this.mesh.group.position.copy(this.pos),t.add(this.mesh.group),this.wheelSpin=0}update(t,e,n,i){if(this.dead){this.speed*=.9;return}const r=new T(e.x-this.pos.x,0,e.z-this.pos.z),a=r.length();let l=(Math.atan2(r.x,r.z)-this.heading+Math.PI*3)%(Math.PI*2)-Math.PI;this.heading+=$t(l,-2.4*t,2.4*t);const c=a<7?5:22;this.speed+=(c-this.speed)*Math.min(1,t*1.6),this.pos.x+=Math.sin(this.heading)*this.speed*t,this.pos.z+=Math.cos(this.heading)*this.speed*t,this.pos.x=$t(this.pos.x,-174,174),this.pos.z=$t(this.pos.z,-174,179),this.world.resolveCircle(this.pos,1.2),this.mesh.group.position.copy(this.pos),this.mesh.group.rotation.y=this.heading,this.wheelSpin+=this.speed*t/.37;for(const h of this.mesh.wheels)h.rotation.x=this.wheelSpin;this.cooldown-=t,this.cooldown<=0&&a<38&&(this.cooldown=at(1.8,2.8),i?.(new T(this.pos.x,1.2,this.pos.z),e))}hit(t){return this.dead?!1:(this.health-=t,this.health<=0?(this.dead=!0,this.mesh.group.rotation.z=.12,!0):!1)}remove(){this.scene.remove(this.mesh.group)}}class Tg{constructor({scene:t,world:e,player:n,ui:i,population:r,audio:a,callbacks:o}){this.scene=t,this.world=e,this.player=n,this.ui=i,this.population=r,this.audio=a,this.callbacks=o,this.mode="story",this.storyStep=0,this.active=!1,this.step="",this.waypoint=null,this.objective="",this.timer=0,this.failTimer=0,this.progress=0,this.suspicion=0,this.missionCars=[],this.enemies=[],this.chaseCars=[],this.targetCar=null,this.job=null,this.marker=this.makeMarker(),this.tracers=[],this.lastPrompt=null,this.shotCount=0,this.storyComplete=!1,this.timeInCity=0,this.damageCooldown=0}makeMarker(){const t=new Ie,e=new be({color:15781772,transparent:!0,opacity:.13,blending:_n,depthWrite:!1,side:Ze}),n=new B(new te(1.1,1.1,55,16,1,!0),e);n.position.y=27.5,t.add(n);const i=new B(new xo(1.2,2.2,32),new be({color:15781772,transparent:!0,opacity:.55,side:Ze,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.12,t.add(i);const r=new B(new _o(.65),new be({color:16770214,toneMapped:!1}));r.position.y=3.4,t.add(r);const a=new Ss(new Ji({map:Uc,color:16765578,transparent:!0,opacity:.8,blending:_n,depthWrite:!1}));return a.scale.set(4,4,1),a.position.y=3.4,t.add(a),t.visible=!1,this.scene.add(t),this.markerGem=r,this.markerSprite=a,t}setWaypoint(t,e,n=""){this.waypoint=t==null?null:{x:t,z:e,label:n},this.waypoint?(this.marker.position.set(t,0,e),this.marker.visible=!0):this.marker.visible=!1}addMoney(t){this.callbacks.addMoney?.(t)}startStory(){this.mode="story",this.storyComplete=!1,this.storyStep=0,this.startMission1()}showChapter(t,e,n,i){this.ui.showMissionCard(t,e,n,i,"START")}startMission1(){this.cleanup(),this.active=!0,this.storyStep=1,this.step="toButcher",this.objective="Collect the envelope from Sal",this.ui.setObjective(this.objective,"Sal’s Butcher · Little Italy"),this.ui.showToast("CHAPTER I — THE RUNNER"),this.setWaypoint(this.world.landmarks.butcher.door.x,this.world.landmarks.butcher.door.z),this.player.health=100,this.callbacks.onMissionStart?.(1)}startMission2(){this.cleanup(),this.active=!0,this.storyStep=2,this.step="toTarget",this.objective="Find the Bianchi car",this.ui.setObjective(this.objective,"East side · Grand Avenue");const t=this.world.landmarks.tailStart;this.setWaypoint(t.x,t.z);const e=new bg(this.scene,this.world,t.x,t.z,Math.PI/2,[{x:102,z:34},{x:102,z:102},{x:34,z:102},{x:34,z:34},{x:-34,z:34},{x:-34,z:102},{x:-102,z:102}]);this.targetCar=e,this.missionCars.push(e),this.ui.showToast("CHAPTER II — THE TAIL"),this.callbacks.onMissionStart?.(2)}startMission3(){this.cleanup(),this.active=!0,this.storyStep=3,this.step="pickup",this.objective="Pick up the shipment",this.ui.setObjective(this.objective,"Moretti Freight · Harbor District");const t=this.world.landmarks.docks.door;this.setWaypoint(t.x,t.z),this.timer=0,this.ui.showToast("CHAPTER III — THE SHIPMENT"),this.callbacks.onMissionStart?.(3)}cleanup(){this.active=!1,this.waypoint=null,this.marker.visible=!1;for(const t of this.missionCars)t.remove?.();for(const t of this.chaseCars)t.remove?.();for(const t of this.enemies)this.scene.remove(t.group);this.missionCars=[],this.chaseCars=[],this.enemies=[],this.targetCar=null,this.timer=0,this.failTimer=0,this.progress=0,this.suspicion=0;for(const t of this.tracers)this.scene.remove(t.line),t.line.geometry.dispose(),t.mat.dispose();this.tracers=[],this.ui.clearDialogue(),this.ui.setInteract(null)}getInteractPrompt(t){if(!this.active)return null;const e=this.player.inCar?this.player.pos:t,n=(i,r,a=5)=>yn(e.x,e.z,i,r)<a;return this.step==="toButcher"&&n(this.world.landmarks.butcher.door.x,this.world.landmarks.butcher.door.z,5.5)?{text:"Collect envelope",action:()=>this.butcherTalk()}:this.step==="toClub"&&n(this.world.landmarks.club.door.x,this.world.landmarks.club.door.z,6)?{text:"Deliver envelope",action:()=>this.donTalk()}:this.step==="confront"&&this.targetCar&&n(this.targetCar.pos.x,this.targetCar.pos.z,6)?{text:"Confront driver",action:()=>this.confrontTalk()}:this.step==="pickup"&&n(this.world.landmarks.docks.door.x,this.world.landmarks.docks.door.z,6)?{text:"Load the crate",action:()=>this.pickupCrate()}:this.job&&this.job.step==="pickup"&&this.waypoint&&n(this.waypoint.x,this.waypoint.z,5)?{text:"Pick up package",action:()=>this.jobPickup()}:this.job&&this.job.step==="dropoff"&&this.waypoint&&n(this.waypoint.x,this.waypoint.z,5)?{text:"Drop the package",action:()=>this.jobDropoff()}:this.job&&this.job.step==="shake"&&this.waypoint&&n(this.waypoint.x,this.waypoint.z,5)?{text:"Make a scene",action:()=>this.jobShake()}:null}interact(){const t=this.getInteractPrompt(this.player.pos);return t?(t.action(),!0):!1}butcherTalk(){this.ui.setInteract(null),this.ui.say([{who:"SAL",text:"You’re late. The Don’s money doesn’t like waiting."},{who:"NICO",text:"The traffic on Grand is a nightmare, Sal."},{who:"SAL",text:"Envelope. Don’t open it. Don’t even look at it."}],()=>{this.step="toClub",this.objective="Return the envelope to Moretti’s",this.ui.setObjective(this.objective,"Old Quarter · Moretti’s Social Club"),this.setWaypoint(this.world.landmarks.club.door.x,this.world.landmarks.club.door.z),this.ui.showToast("ENVELOPE COLLECTED"),this.audio?.blip(500,.08,"triangle",.08)})}donTalk(){this.ui.setInteract(null),this.ui.say([{who:"DON MORETTI",text:"Two hundred. On time. Maybe there’s hope for you yet, Nico."},{who:"DON MORETTI",text:"The Bianchi family is moving product through the east side. I want to know where."},{who:"NICO",text:"And if they don’t feel like sharing?"},{who:"DON MORETTI",text:"Then make them feel like it. Take the car."}],()=>{this.completeMission(250,"CHAPTER II","The Tail","A Bianchi car has been seen idling near the east pier. Follow it. Do not get made.")})}confrontTalk(){this.ui.setInteract(null),this.ui.say([{who:"BIANCHI DRIVER",text:"You’ve got nerve, following me through half the city."},{who:"NICO",text:"The Don wants to know where the shipment lands."},{who:"BIANCHI DRIVER",text:"The pier. Midnight. And tell Moretti his time is running out."}],()=>{this.completeMission(400,"CHAPTER III","The Shipment","Midnight at Moretti Freight. One crate. The Bianchi will not let it leave the docks quietly.")})}pickupCrate(){this.ui.setInteract(null),this.ui.say([{who:"NICO",text:"One crate. Heavy as a coffin."},{who:"DON MORETTI",text:"Get it to San Michele. The priest owes me a favor."},{who:"DON MORETTI",text:"And Nico — the Bianchi know. Drive fast."}],()=>{this.step="deliver",this.timer=100,this.objective="Deliver the crate to San Michele",this.ui.setObjective(this.objective,"Time: 1:40");const t=this.world.landmarks.church.door;this.setWaypoint(t.x,t.z),this.spawnChasers(),this.callbacks.onMissionStage?.(3,"deliver")})}spawnChasers(){const t=this.player.pos;for(let e=0;e<2;e++){const n=new Eg(this.scene,this.world,t.x+(e?18:-18),t.z+16);n.heading=Math.atan2(t.x-n.pos.x,t.z-n.pos.z),this.chaseCars.push(n)}}completeMission(t,e,n,i){if(this.active=!1,this.setWaypoint(null),this.ui.setInteract(null),this.addMoney(t),this.audio?.cash(),this.audio?.sting(!0),this.ui.showToast("MISSION COMPLETE  +$"+t),this.cleanup(),this.callbacks.onMissionComplete?.(this.storyStep,t),this.storyStep>=3)return;const r=this.storyStep+1;setTimeout(()=>{this.mode==="story"&&this.showChapter(e,n,i,()=>{r===2?this.startMission2():this.startMission3()})},1600)}finishStory(){this.active=!1,this.storyComplete=!0,this.mode="free",this.cleanup(),this.callbacks.onStoryComplete?.()}getJobs(){return this.storyComplete?[{id:"courier",title:"Courier Run",desc:"Move a package across the city. No questions.",reward:"$180"},{id:"shake",title:"Shakedown",desc:"Remind a business owner who runs this city.",reward:"$240"}]:[]}startJob(t){this.cleanup(),this.mode="free",this.active=!0,this.job={type:t.id,step:"pickup"};const e=[{x:-136,z:-68},{x:102,z:-68},{x:-34,z:102},{x:136,z:34},{x:-102,z:136},{x:34,z:-102}],n=e[Math.floor(Math.random()*e.length)];this.job.pickup=n,this.setWaypoint(n.x,n.z),this.objective=t.id==="courier"?"Pick up the package":"Find the shop",this.ui.setObjective(this.objective,t.id==="courier"?"Courier Run":"Shakedown"),this.ui.showToast("JOB ACCEPTED — "+t.title.toUpperCase())}jobPickup(){if(!this.job)return;this.ui.setInteract(null),this.job.step="dropoff";const t=[{x:0,z:-68},{x:-68,z:68},{x:136,z:136},{x:-136,z:34},{x:68,z:-136}],e=t[Math.floor(Math.random()*t.length)];this.job.drop=e,this.setWaypoint(e.x,e.z),this.objective="Deliver the package",this.ui.setObjective(this.objective,"Courier Run · $180"),this.ui.showToast("PACKAGE SECURED")}jobDropoff(){this.ui.setInteract(null),this.addMoney(180),this.audio?.cash(),this.ui.showToast("DELIVERY COMPLETE  +$180"),this.endJob()}jobShake(){this.ui.setInteract(null),this.addMoney(240),this.audio?.cash(),this.callbacks.addWanted?.(1),this.ui.showToast("THE MESSAGE LANDED  +$240"),this.ui.say([{who:"SHOPKEEPER",text:"Alright! Alright. Tell the Don he’ll have his envelope by Friday."}]),this.endJob()}endJob(){this.job=null,this.active=!1,this.setWaypoint(null),this.ui.setObjective("The city is yours","Call the phone for work")}getAimTargets(){const t=[];for(const e of this.enemies)e.dead||t.push({pos:e.pos,radius:.7,kind:"enemy"});for(const e of this.chaseCars)e.dead||t.push({pos:e.pos,radius:1.6,kind:"chase"});return t}shootableHit(t,e,n){let i=null,r=n;const a=(o,l,c,h)=>{const d=new T(l.x-t.x,0,l.z-t.z),u=d.dot(e);if(u<0||u>n)return;Math.abs(d.x*e.z-d.z*e.x)<c&&u<r&&(r=u,i={obj:o,kind:h,point:new T(t.x+e.x*u,1.15,t.z+e.z*u)})};for(const o of this.enemies)o.dead||a(o,o.pos,.65,"enemy");for(const o of this.chaseCars)o.dead||a(o,o.pos,1.55,"chase");return i}applyHit(t,e){if(!t)return!1;if(t.kind==="enemy"){if(t.obj.hit(e)){this.audio?.blip(180,.18,"sawtooth",.1);const i=this.enemies.filter(r=>!r.dead).length;this.step==="shootout"&&(this.objective=`Take out the Bianchi crew (${4-i}/4)`,this.ui.setObjective(this.objective,"San Michele Church"),i===0&&this.finale())}return!0}return t.kind==="chase"?(t.obj.hit(e),!0):!1}spawnShootout(){this.step="shootout",this.objective="Take out the Bianchi crew (0/4)",this.ui.setObjective(this.objective,"San Michele Church");const t=this.world.landmarks.church.door,e=[[-11,-1],[11,-1],[-5,4],[5,4]];for(const[n,i]of e){const r=new wg(this.scene,this.world,t.x+n,t.z+i);this.enemies.push(r)}this.ui.say([{who:"BIANCHI SOLDIER",text:"End of the line, Moretti dog."},{who:"NICO",text:"You first."}]),this.callbacks.onMissionStage?.(3,"shootout")}finale(){this.step="finale",this.ui.setObjective("The city is yours",""),this.audio?.sting(!0),setTimeout(()=>{this.ui.say([{who:"DON MORETTI",text:"The crate is safe. The Bianchi are finished. You did good, Nico."},{who:"DON MORETTI",text:"This city is a hungry thing. Feed it, and it will love you."},{who:"NICO",text:"And if I want more than the scraps?"},{who:"DON MORETTI",text:"Then come and take them. That’s the business."}],()=>{this.finishStory(),this.ui.showEnding({cash:this.callbacks.getMoney?.()??0,time:this.callbacks.getTime?.()??"0:00"},()=>{this.ui.setObjective("The city is yours","Call the phone for work"),this.ui.showToast("FREE ROAM UNLOCKED — CALL THE PHONE FOR WORK",4)})})},1200)}fail(t,e){this.ui.el.fail.classList.contains("hidden")!==!1&&(this.active=!1,this.ui.setInteract(null),this.callbacks.onFail?.(),this.ui.showFail(t,e,()=>this.callbacks.onRetry?.()))}update(t,e){this.timeInCity=e,this.damageCooldown=Math.max(0,this.damageCooldown-t),this.marker.visible&&(this.markerGem.rotation.y+=t*1.8,this.markerGem.position.y=3.4+Math.sin(e*2.4)*.25,this.markerSprite.material.opacity=.55+Math.sin(e*3)*.18);for(let a=this.tracers.length-1;a>=0;a--){const o=this.tracers[a];o.life-=t,o.mat.opacity=$t(o.life/.12,0,1)*.8,o.life<=0&&(this.scene.remove(o.line),o.line.geometry.dispose(),o.mat.dispose(),this.tracers.splice(a,1))}for(const a of this.enemies)a.update(t,this.player,this.player.pos,e,o=>this.enemyShoot(o));const n=this.player.inCar?this.player.pos:this.player.pos;for(const a of this.chaseCars)a.update(t,n,e,o=>this.enemyShoot(o)),!a.dead&&this.player.inCar&&this.player.car&&yn(a.pos.x,a.pos.z,this.player.pos.x,this.player.pos.z)<4&&this.damageCooldown<=0&&(this.player.car.damage(4),this.damageCooldown=.5,this.callbacks.onImpact?.(5));if(!this.active)return;const i=this.player.pos,r=(a,o,l=5)=>yn(i.x,i.z,a,o)<l;if(this.step==="toButcher")r(this.world.landmarks.butcher.door.x,this.world.landmarks.butcher.door.z,5.5)&&(this.ui.setObjective("Collect the envelope","Press ACT at the butcher shop"),this.setWaypoint(this.world.landmarks.butcher.door.x,this.world.landmarks.butcher.door.z));else if(this.step==="toClub")r(this.world.landmarks.club.door.x,this.world.landmarks.club.door.z,6)&&this.ui.setObjective("Deliver the envelope","Press ACT at Moretti’s");else if(this.step==="toTarget")this.targetCar&&r(this.targetCar.pos.x,this.targetCar.pos.z,7)&&(this.ui.setObjective("Get ready to follow","Stay close, but not too close"),this.ui.say([{who:"NICO",text:"There’s the Bianchi car. Let’s see where you’re going."}],()=>{this.step="tail",this.setWaypoint(null),this.ui.setObjective("Tail the Bianchi car","Distance 0 m")}));else if(this.step==="tail"){this.targetCar?.update(t);const a=this.targetCar?yn(i.x,i.z,this.targetCar.pos.x,this.targetCar.pos.z):0;if(this.targetCar&&(this.waypoint={x:this.targetCar.pos.x,z:this.targetCar.pos.z,label:"target"},this.marker.position.set(this.waypoint.x,0,this.waypoint.z),this.marker.visible=!0),a>58){if(this.failTimer+=t,this.ui.setObjective("Tail the Bianchi car",`They’re getting away — ${Math.ceil(5-this.failTimer)}s`),this.failTimer>5){this.fail("LOST THEM","The Bianchi car slipped into traffic.");return}}else this.failTimer=Math.max(0,this.failTimer-t*1.5),this.ui.setObjective("Tail the Bianchi car",`Distance ${Math.round(a)} m`);a<6.5?(this.suspicion+=t,this.suspicion>1.4&&this.ui.setObjective("Don’t get made","Back off — they can see you")):this.suspicion=Math.max(0,this.suspicion-t),this.targetCar?.stopped&&(this.step="confront",this.setWaypoint(this.targetCar.pos.x,this.targetCar.pos.z),this.ui.setObjective("Confront the driver","Press ACT near the car"))}else if(this.step==="pickup")r(this.world.landmarks.docks.door.x,this.world.landmarks.docks.door.z,6)&&this.ui.setObjective("Load the crate","Press ACT at the loading bay");else if(this.step==="deliver"){this.timer-=t;const a=Math.floor(Math.max(0,this.timer)/60),o=Math.floor(Math.max(0,this.timer)%60);if(this.ui.setObjective("Deliver the crate to San Michele",`Time: ${a}:${String(o).padStart(2,"0")}`),this.timer<=0){this.fail("TOO LATE","The Bianchi moved the shipment while you were sightseeing.");return}if(r(this.world.landmarks.church.door.x,this.world.landmarks.church.door.z,8)){this.setWaypoint(null);for(const l of this.chaseCars)l.remove();this.chaseCars=[],this.spawnShootout(),this.player.inCar&&this.callbacks.forceExitCar?.()}}else this.step==="shootout"&&this.enemies.filter(o=>!o.dead).length===0&&this.finale()}enemyShoot(t){const e=new T(this.player.pos.x,1.2,this.player.pos.z),n=new Ee().setFromPoints([t,e]),i=new Ms({color:16751458,transparent:!0,opacity:.8}),r=new Mr(n,i);this.scene.add(r),this.tracers.push({line:r,mat:i,life:.12}),this.audio?.gunshot();const o=t.distanceTo(e)<16?9:5;this.player.inCar&&this.player.car?this.player.car.damage(o*.7):this.callbacks.damagePlayer?.(o),this.callbacks.onImpact?.(2)}}const Wl="larossa.save.v1",tr=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Ag={uniforms:{tDiffuse:{value:null},time:{value:0},strength:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform sampler2D tDiffuse; uniform float time; uniform float strength;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(.299,.587,.114));
      c.rgb = mix(c.rgb, c.rgb * vec3(.9,.98,1.1), (1.0-l)*.32);
      c.rgb = mix(c.rgb, c.rgb * vec3(1.08,1.01,.9), l*.22);
      float d = distance(vUv, vec2(.5));
      c.rgb *= mix(.62, 1.0, smoothstep(.92,.28,d));
      float n = fract(sin(dot(vUv*vec2(1234.0,5678.0)+time,vec2(12.9898,78.233)))*43758.5453);
      c.rgb += (n-.5)*.016;
      gl_FragColor = c;
    }`};class Cg{constructor(){this.state="boot",this.quality=!0,this.money=0,this.heat=0,this.heatCooldown=0,this.sessionTime=0,this.paused=!1,this.shake=0,this.frame=0,this.lastDistrict="",this.carHitCooldown=0,this.cameraSnap=!0,this.camYaw=0,this.camPitch=.27,this.orbitYaw=0,this.orbitPitch=0,this.lastLookAt=new T,this.carOrbit=0,this.carOrbitPitch=0,this.lookIdle=0,this.storyComplete=!1,this.playerCar=null,this.save=this.loadSave(),this.money=this.save.money||0,this.storyComplete=!!this.save.storyComplete,this.quality=this.save.quality!==!1}async init(){const t=(e,n)=>{document.getElementById("loadFill").style.width=e+"%",n&&(document.getElementById("loadStatus").textContent=n)};if(t(12,"Waking the city…"),await new Promise(e=>setTimeout(e,60)),this.setupRenderer(),t(30,"Pouring the streets…"),await new Promise(e=>setTimeout(e,40)),this.setupScene(),t(48,"Lighting the neon…"),await new Promise(e=>setTimeout(e,40)),this.world=sg(this.scene,this.renderer),t(66,"Filling the harbor…"),await new Promise(e=>setTimeout(e,40)),this.player=new hg(this.scene,this.world,4,-40),this.player.heading=Math.PI,this.population=new vg(this.scene,this.world,{onCrime:()=>this.addWanted(1),onPoliceShoot:e=>{this.player.damage(e*12),this.shake=Math.max(this.shake,.18)},onPoliceHit:()=>{this.shake=Math.max(this.shake,.22)}}),t(80,"Hiring the band…"),await new Promise(e=>setTimeout(e,40)),this.input=new Mg,this.ui=new yg(this.world,this.input),this.audio=new Sg,this.setupMissions(),this.setupPost(),this.setupLights(),this.bindUI(),this.ui.setMoney(this.money),this.ui.setWanted(0),this.ui.setHealth(100),this.ui.setClock(23*60+40),this.ui.el.loading.classList.add("hidden"),this.ui.el.title.classList.remove("hidden"),this.storyComplete){const e=document.getElementById("btnFree");e.disabled=!1,e.innerHTML="FREE ROAM"}this.state="title",this.ui.setCinematic(!0),t(100,"Ready"),this.applySettings(),this.clock=new Cc,this.loop()}setupRenderer(){const t=document.getElementById("game");this.renderer=new Lm({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,tr?1.4:1.8)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.outputColorSpace=Ye,this.renderer.toneMapping=to,this.renderer.toneMappingExposure=1.06,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ql,this.camera=new rn(55,innerWidth/innerHeight,.1,1100),this.camera.position.set(0,40,120)}setupScene(){this.scene=new Im,this.scene.background=new jt(461330),this.scene.fog=new mo(658968,.0062)}setupLights(){const t=new Bm(5991567,1774352,.75);this.scene.add(t);const e=new Al(11123936,1.25);e.position.set(-90,150,-80),e.castShadow=!0,e.shadow.mapSize.set(tr?1024:2048,tr?1024:2048),e.shadow.camera.left=-190,e.shadow.camera.right=190,e.shadow.camera.top=190,e.shadow.camera.bottom=-190,e.shadow.camera.near=1,e.shadow.camera.far=420,e.shadow.bias=-6e-4,e.shadow.normalBias=.04,this.scene.add(e),this.moon=e;const n=new Al(16747594,.28);n.position.set(120,28,140),this.scene.add(n);const i=new Fi(16753756,20,160,2);i.position.set(0,22,0),this.scene.add(i),this.scene.environment=this.makeEnv(),this.scene.environmentIntensity=.45}makeEnv(){const t=[];for(let r=0;r<6;r++){const a=document.createElement("canvas");a.width=64,a.height=64;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,0,64);l.addColorStop(0,"#0a0f1a"),l.addColorStop(.48,"#2a2230"),l.addColorStop(.62,"#6b3a24"),l.addColorStop(.72,"#1a1214"),l.addColorStop(1,"#06070a"),o.fillStyle=l,o.fillRect(0,0,64,64),r===1&&(o.fillStyle="rgba(255,225,170,.7)",o.beginPath(),o.arc(20,22,5,0,Math.PI*2),o.fill()),t.push(a)}const e=new ho(t);e.needsUpdate=!0,e.colorSpace=Ye;const n=new $a(this.renderer),i=n.fromCubemap(e);return n.dispose(),i.texture}setupPost(){this.composer=new Xm(this.renderer),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(innerWidth,innerHeight),this.renderPass=new qm(this.scene,this.camera),this.bloom=new ji(new Ot(innerWidth,innerHeight),.72,.62,.78),this.outputPass=new Km,this.grade=new Pc(Ag),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.outputPass),this.composer.addPass(this.grade)}setupMissions(){this.missions=new Tg({scene:this.scene,world:this.world,player:this.player,ui:this.ui,population:this.population,audio:this.audio,callbacks:{addMoney:t=>{this.money+=t,this.ui.setMoney(this.money),this.saveGame()},getMoney:()=>this.money,getTime:()=>this.formatTime(this.sessionTime),onMissionStart:()=>{this.ui.setWanted(this.heat)},onMissionComplete:()=>this.saveGame(),onStoryComplete:()=>{this.storyComplete=!0,this.saveGame(),this.state="ending",this.input.enabled=!1;const t=document.getElementById("btnFree");t.disabled=!1,t.innerHTML="FREE ROAM"},onFreeRoam:()=>{this.state="playing",this.input.enabled=!0,this.paused=!1,this.ui.setObjective("The city is yours","Call the phone for work"),this.ui.showToast("FREE ROAM — THE CITY IS YOURS",3.5)},addWanted:t=>this.addWanted(t),damagePlayer:t=>{this.player.damage(t),t>4&&this.ui.damageFlash(),this.shake=Math.max(this.shake,.12)},onImpact:t=>{this.shake=Math.max(this.shake,t*.022),this.audio?.impact()},onRetry:()=>this.retry(),onFail:()=>{this.state="fail",this.input.enabled=!1},forceExitCar:()=>this.exitCar(!0)}})}bindUI(){const t=(e,n)=>document.getElementById(e).addEventListener("click",i=>{i.preventDefault(),this.audio?.unlock(),this.audio?.click(),n()});t("btnStory",()=>this.startStory()),t("btnFree",()=>this.startFreeRoam()),t("btnSettingsTitle",()=>this.openSettings("title")),t("btnSettingsPause",()=>this.openSettings("pause")),t("btnSettingsBack",()=>this.closeSettings()),t("btnPause",()=>this.openPause()),t("btnResume",()=>this.closePause()),t("btnRestart",()=>{this.closePause(),this.retry()}),t("btnQuit",()=>this.quitToTitle()),t("btnPhone",()=>this.openPhone()),t("btnPhoneClose",()=>this.closePhone()),t("btnFailQuit",()=>this.quitToTitle()),document.getElementById("btnTilt").addEventListener("click",async e=>{e.preventDefault();const n=document.getElementById("btnTilt");if(this.input.tiltEnabled)this.input.disableTilt(),n.classList.remove("on"),n.setAttribute("aria-pressed","false"),this.ui.setTiltBadge(!1),this.ui.motionNote("Tilt steering off. The joystick still steers.",!1),this.save.tilt=!1,this.saveGame();else if(await this.input.enableTilt())n.classList.add("on"),n.setAttribute("aria-pressed","true"),this.ui.setTiltBadge(!0),this.ui.motionNote("Tilt active. Hold the device level and tap this note to recalibrate.",!1),this.save.tilt=!0,this.saveGame();else{n.classList.remove("on"),n.setAttribute("aria-pressed","false");const r=this.input.motionState==="denied"?"Motion permission was denied. Enable it in browser settings, or keep using the joystick.":"Motion sensors are not available on this device. The joystick still steers.";this.ui.motionNote(r)}}),t("btnAudio",()=>{const e=document.getElementById("btnAudio"),n=!e.classList.contains("on");e.classList.toggle("on",n),e.setAttribute("aria-pressed",String(n)),this.audio.setEnabled(n),this.audio.setMusic(n),this.save.audio=n,this.saveGame()}),t("btnQuality",()=>{const e=document.getElementById("btnQuality");this.quality=!e.classList.contains("on"),e.classList.toggle("on",this.quality),e.setAttribute("aria-pressed",String(this.quality)),this.applyQuality(),this.save.quality=this.quality,this.saveGame()}),t("btnLefty",()=>{const e=document.getElementById("btnLefty"),n=!e.classList.contains("on");e.classList.toggle("on",n),e.setAttribute("aria-pressed",String(n)),this.input.setLefty(n),this.save.lefty=n,this.saveGame()}),window.addEventListener("pointerdown",()=>{this.audio.unlock()},{once:!0}),window.addEventListener("keydown",e=>{e.code==="Escape"&&(this.ui.el.pause.classList.contains("hidden")?this.ui.el.settings.classList.contains("hidden")?this.ui.el.phone.classList.contains("hidden")?this.state==="playing"&&this.openPause():this.closePhone():this.closeSettings():this.closePause()),e.code==="KeyP"&&this.state==="playing"&&this.openPause()}),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.openPause()})}applySettings(){this.input.setLefty(!!this.save.lefty);const t=document.getElementById("btnLefty");if(t.classList.toggle("on",!!this.save.lefty),t.setAttribute("aria-pressed",String(!!this.save.lefty)),this.save.audio===!1){const n=document.getElementById("btnAudio");n.classList.remove("on"),n.setAttribute("aria-pressed","false"),this.audio.setEnabled(!1),this.audio.setMusic(!1)}const e=document.getElementById("btnQuality");if(e.classList.toggle("on",this.quality),e.setAttribute("aria-pressed",String(this.quality)),this.applyQuality(),this.save.tilt){const n=document.getElementById("btnTilt");n.classList.add("on"),n.setAttribute("aria-pressed","true"),this.ui.setTiltBadge(!0),this.pendingTilt=!0}}tryEnableSavedTilt(){!this.save.tilt||this.input.tiltEnabled||this.input.enableTilt().then(t=>{const e=document.getElementById("btnTilt");t?(e.classList.add("on"),e.setAttribute("aria-pressed","true"),this.ui.setTiltBadge(!0)):(e.classList.remove("on"),e.setAttribute("aria-pressed","false"),this.ui.setTiltBadge(!1))})}applyQuality(){this.renderer.setPixelRatio(this.quality?Math.min(devicePixelRatio,tr?1.4:1.8):1),this.composer?.setPixelRatio(this.renderer.getPixelRatio()),this.composer?.setSize(innerWidth,innerHeight),this.renderer.setSize(innerWidth,innerHeight),this.bloom&&(this.bloom.enabled=this.quality)}loadSave(){try{return JSON.parse(localStorage.getItem(Wl))||{}}catch{return{}}}saveGame(){this.save={...this.save,money:this.money,storyComplete:this.storyComplete,quality:this.quality};try{localStorage.setItem(Wl,JSON.stringify(this.save))}catch{}}formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${String(n).padStart(2,"0")}`}startStory(){this.audio.unlock(),this.audio.sting(!0),this.tryEnableSavedTilt(),this.ui.el.title.classList.add("hidden"),this.ui.el.hud.classList.remove("hidden"),this.ui.setCinematic(!1),this.state="playing",this.paused=!1,this.input.enabled=!0,this.heat=0,this.ui.setWanted(0),this.population.setWanted(0,this.player.pos),this.clearPlayerCar(),this.player.health=100,this.player.dead=!1,this.player.pos.set(4,0,-40),this.player.vel.set(0,0,0),this.player.heading=Math.PI,this.player.inCar=!1,this.player.group.visible=!0,this.player.group.position.copy(this.player.pos),this.camYaw=0,this.camPitch=.27,this.ui.setHealth(100),this.ui.setCarMode(!1),this.ui.setMoney(this.money),this.missions.startStory(),this.ui.setObjective("Collect the envelope from Sal","Sal’s Butcher · Little Italy"),this.ui.showToast("CHAPTER I — THE RUNNER",3),this.cameraSnap=!0,this.saveGame(),setTimeout(()=>{this.state!=="playing"||this.missions.storyStep!==1||this.ui.say([{who:"DON MORETTI",text:"Nico. Sal has an envelope with my name on it. Bring it here before the rain gets worse."}])},1800)}startFreeRoam(){if(!this.storyComplete){this.ui.showToast("FINISH THE STORY FIRST");return}this.audio.unlock(),this.tryEnableSavedTilt(),this.ui.el.title.classList.add("hidden"),this.ui.el.hud.classList.remove("hidden"),this.ui.setCinematic(!1),this.state="playing",this.paused=!1,this.input.enabled=!0,this.heat=0,this.ui.setWanted(0),this.population.setWanted(0,this.player.pos),this.clearPlayerCar(),this.player.health=100,this.player.dead=!1,this.player.pos.set(4,0,-40),this.player.heading=Math.PI,this.player.inCar=!1,this.player.group.visible=!0,this.camYaw=0,this.camPitch=.27,this.ui.setHealth(100),this.ui.setCarMode(!1),this.ui.setMoney(this.money),this.missions.mode="free",this.missions.storyComplete=!0,this.missions.active=!1,this.ui.setObjective("The city is yours","Call the phone for work"),this.ui.showToast("FREE ROAM — CALL THE PHONE FOR WORK",3.5),this.cameraSnap=!0}quitToTitle(){this.paused=!1,this.state="title",this.input.enabled=!1,this.ui.el.pause.classList.add("hidden"),this.ui.el.settings.classList.add("hidden"),this.ui.el.phone.classList.add("hidden"),this.ui.el.fail.classList.add("hidden"),this.ui.el.ending.classList.add("hidden"),this.ui.el.missionCard.classList.add("hidden"),this.ui.el.hud.classList.add("hidden"),this.ui.el.title.classList.remove("hidden"),this.ui.setCinematic(!0),this.missions.cleanup(),this.heat=0,this.population.setWanted(0,this.player.pos),this.ui.setWanted(0),this.player.inCar&&this.exitCar(!0),this.ui.clearDialogue(),this.ui.setInteract(null),this.saveGame()}openPause(){this.state==="playing"&&(this.paused=!0,this.input.enabled=!1,this.ui.el.pause.classList.remove("hidden"))}closePause(){this.ui.el.pause.classList.add("hidden"),this.paused=!1,this.input.enabled=!0}openSettings(t){this.settingsFrom=t,this.ui.el.settings.classList.remove("hidden"),t==="title"&&this.ui.el.title.classList.add("hidden"),t==="pause"&&this.ui.el.pause.classList.add("hidden"),this.paused=!0,this.input.enabled=!1,this.ui.motionNote(this.input.tiltEnabled?"Tilt active. Hold the device level and tap this note to recalibrate.":"Tilt steering is off. Enable it here, then steer by tilting in a car.",!this.input.tiltEnabled)}closeSettings(){this.ui.el.settings.classList.add("hidden"),this.settingsFrom==="title"?(this.ui.el.title.classList.remove("hidden"),this.state="title"):this.settingsFrom==="pause"?this.ui.el.pause.classList.remove("hidden"):(this.paused=!1,this.input.enabled=!0)}openPhone(){this.state==="playing"&&(this.paused=!0,this.input.enabled=!1,this.ui.openPhone(this.missions.getJobs(),t=>{this.paused=!1,this.input.enabled=!0,this.missions.startJob(t)}))}closePhone(){this.ui.closePhone(),this.state==="playing"&&(this.paused=!1,this.input.enabled=!0)}clearPlayerCar(){this.playerCar&&(this.scene.remove(this.playerCar.mesh.group),this.playerCar=null),this.player.inCar=!1,this.player.car=null}findNearbyCar(){if(this.player.inCar)return null;if(this.playerCar&&this.playerCar.health>0&&yn(this.player.pos.x,this.player.pos.z,this.playerCar.pos.x,this.playerCar.pos.z)<4.5)return{current:!0,car:this.playerCar};const t=this.population.nearestParked(this.player.pos,4.5);return t?{current:!1,parked:t}:null}enterCar(t){if(!t)return;let e;if(t.current)e=t.car;else{const n=t.parked;if(n.taken)return;n.taken=!0,n.mesh.group.visible=!1,e=new kl(this.scene,this.world,n.pos.x,n.pos.z,n.heading,n.color)}if(e.health<=0){this.ui.showToast("THAT RIDE IS WRECKED");return}this.playerCar=e,this.player.inCar=!0,this.player.car=e,this.player.pos.copy(e.pos),this.player.heading=e.heading,this.player.group.visible=!1,this.carOrbit=0,this.carOrbitPitch=0,this.ui.setCarMode(!0),this.ui.setActLabel("EXIT"),this.ui.setInteract(null),this.audio.startEngine(),this.cameraSnap=!0,this.ui.showToast("ENGINE STARTED",1.2)}exitCar(t=!1){if(!this.player.inCar||!this.playerCar)return;const e=this.playerCar;e.speed=0;const n=new T(Math.cos(e.heading),0,-Math.sin(e.heading));let i=new T(e.pos.x+n.x*2.2,0,e.pos.z+n.z*2.2);this.world.resolveCircle(i,.5),this.world.collideCircle(i.x,i.z,.5)&&(i=new T(e.pos.x-n.x*2.2,0,e.pos.z-n.z*2.2)),this.player.pos.copy(i),this.player.vel.set(0,0,0),this.player.inCar=!1,this.player.car=null,this.player.group.visible=!0,this.player.group.position.copy(i),this.ui.setCarMode(!1),this.ui.setActLabel("ACT"),this.audio.stopEngine(),this.cameraSnap=!0,t||this.ui.showToast("ON FOOT",1)}forceExitCar(){this.exitCar(!0)}addWanted(t){if(this.state!=="playing")return;const e=this.heat;this.heat=$t(this.heat+t,0,5),this.heatCooldown=24,this.population.setWanted(this.heat,this.player.pos),this.ui.setWanted(this.heat),this.heat>e&&(this.ui.showToast(this.heat>=4?"THE WHOLE CITY IS LOOKING":"WANTED LEVEL "+this.heat,2),this.audio.sting(!1))}updateHeat(t){if(this.heat<=0){this.audio.siren(!1);return}this.heatCooldown-=t,this.heatCooldown<=0&&(this.population.police.some(i=>!i.dead&&yn(i.pos.x,i.pos.z,this.player.pos.x,this.player.pos.z)<45)?this.heatCooldown=4:(this.heat--,this.population.setWanted(this.heat,this.player.pos),this.ui.setWanted(this.heat),this.heatCooldown=15,this.heat===0&&this.ui.showToast("HEAT LOST — KEEP MOVING",2.5)));const e=this.population.police.some(n=>!n.dead&&yn(n.pos.x,n.pos.z,this.player.pos.x,this.player.pos.z)<80);this.audio.siren(this.heat>0&&e)}aimTarget(t,e){const n=[...this.missions.getAimTargets()];for(const a of this.population.police)a.dead||n.push({pos:a.pos,radius:1.5,kind:"police"});let i=null,r=-1;for(const a of n){const o=new T(a.pos.x-t.x,0,a.pos.z-t.z),l=o.length();if(l<.5||l>38)continue;o.normalize();const c=o.dot(e);if(c<.82)continue;const h=c-l*.004+(a.kind==="enemy"?.2:0);h>r&&(r=h,i={...a,point:new T(a.pos.x,1.1,a.pos.z)})}return i}handleShooting(t){const e=!this.player.inCar&&this.input.aiming;if(this.ui.setReticle(e),!e||!this.input.fire)return;const n=this.player.muzzleWorld(),i=new T(-Math.sin(this.camYaw),0,-Math.cos(this.camYaw)).normalize(),r=this.aimTarget(n,i);let a=i;r&&(a=new T(r.pos.x-n.x,0,r.pos.z-n.z).normalize());const o=this.missions.shootableHit(n,a,42),l=this.population.shootableHit(n,a,42);let c=null;o&&l?c=o.point.distanceTo(n)<l.point.distanceTo(n)?o:l:c=o||l;const h=c?c.point:n.clone().addScaledVector(a,38);this.player.shoot(h)&&(this.audio.gunshot(),this.population.alertGunshot(),this.shake=Math.max(this.shake,.16),c&&(c.kind==="enemy"||c.kind==="chase"?this.missions.applyHit(c,40):c.kind==="police"?(c.obj.health-=45,c.obj.health<=0?(c.obj.dead=!0,c.obj.mesh.group.rotation.z=.14,this.addWanted(1)):this.addWanted(1)):c.kind==="ped"?(c.obj.knock(),this.addWanted(1)):c.kind==="traffic"&&(c.obj.speed*=.2,this.audio.blip(200,.1,"square",.05))))}handleCarCollisions(t){if(!this.player.inCar||!this.playerCar)return;this.carHitCooldown=Math.max(0,this.carHitCooldown-t);const e=this.playerCar;for(const n of this.population.traffic)yn(e.pos.x,e.pos.z,n.pos.x,n.pos.z)<2.6&&this.carHitCooldown<=0&&(this.carHitCooldown=.8,e.damage(4),this.shake=Math.max(this.shake,.28),this.audio.impact(),n.speed*=.3);for(const n of this.population.parked){if(n.taken)continue;yn(e.pos.x,e.pos.z,n.pos.x,n.pos.z)<2.6&&this.carHitCooldown<=0&&(this.carHitCooldown=.8,e.damage(4),this.shake=Math.max(this.shake,.3),this.audio.impact())}e.health<=0&&!this.carDestroyed&&(this.carDestroyed=!0,this.ui.showToast("YOUR RIDE IS WRECKED",2.5),this.exitCar(!0),setTimeout(()=>{this.carDestroyed=!1},2e3))}updateInteract(){const t=this.missions.getInteractPrompt(this.player.pos),e=this.findNearbyCar();t?(this.ui.setInteract(t.text),this.ui.setActLabel(this.player.inCar?"USE":"ACT")):this.player.inCar?(this.ui.setInteract(null),this.ui.setActLabel("EXIT")):e?(this.ui.setInteract(e.current?"Drive your car":"Get in the car"),this.ui.setActLabel("DRIVE")):(this.ui.setInteract(null),this.ui.setActLabel("ACT")),this.input.consumeAct()&&(t?this.missions.interact():this.player.inCar?this.exitCar():e&&this.enterCar(e))}retry(){if(this.ui.el.fail.classList.add("hidden"),this.ui.el.pause.classList.add("hidden"),this.state="playing",this.paused=!1,this.input.enabled=!0,this.player.health=100,this.player.dead=!1,this.ui.setHealth(100),this.heat=0,this.population.setWanted(0,this.player.pos),this.ui.setWanted(0),this.audio.siren(!1),this.player.inCar&&this.exitCar(!0),this.missions.storyComplete||this.missions.mode==="free"&&!this.missions.storyStep){this.clearPlayerCar(),this.player.pos.set(4,0,-40),this.player.heading=Math.PI,this.player.vel.set(0,0,0),this.camYaw=0,this.camPitch=.27,this.ui.setObjective("The city is yours","Call the phone for work"),this.ui.showToast("THE CITY FORGIVES — FOR A PRICE",2.5),this.money=Math.max(0,this.money-50),this.ui.setMoney(this.money),this.saveGame();return}const t=this.missions.storyStep||1;this.missions.cleanup(),this.clearPlayerCar(),this.ui.clearDialogue(),t===1?(this.player.pos.set(4,0,-40),this.player.heading=Math.PI,this.camYaw=0,this.missions.startMission1()):t===2?(this.player.pos.set(84,0,-14),this.player.heading=Math.PI/2,this.camYaw=-Math.PI/2,this.missions.startMission2(),this.spawnAndEnterCar(78,-18,Math.PI/2)):(this.player.pos.set(0,0,120),this.player.heading=Math.PI,this.camYaw=0,this.missions.startMission3(),this.spawnAndEnterCar(8,120,Math.PI)),this.ui.showToast("BACK TO THE JOB",2)}spawnAndEnterCar(t,e,n){const i=new kl(this.scene,this.world,t,e,n,3812390);this.playerCar=i,this.player.pos.copy(i.pos),this.player.heading=n,this.player.inCar=!0,this.player.car=i,this.player.group.visible=!1,this.ui.setCarMode(!0),this.ui.setActLabel("EXIT"),this.audio.startEngine(),this.cameraSnap=!0}gameOver(){this.state==="playing"&&(this.state="fail",this.input.enabled=!1,this.audio.sting(!1),this.ui.showFail("WASTED","The city always wins. But it lets you try again.",()=>this.retry()))}update(t){this.sessionTime+=t,this.ui.tickClock(t);const e=this.player.pos,n=this.ui.districtFor(e.z);if(n!==this.lastDistrict&&(this.lastDistrict=n,this.ui.setDistrict(n)),this.world.update(t,this.sessionTime),this.population.update(t,e,this.playerCar,this.player.inCar,this.sessionTime),this.handleCarCollisions(t),this.handleShooting(t),this.updateHeat(t),this.updateInteract(),this.missions.update(t,this.sessionTime),this.player.health<=0&&!this.player.dead&&(this.player.dead=!0),this.player.dead&&this.gameOver(),this.audio.updateEngine(this.playerCar?.speed||0,this.input.move.y,this.player.inCar),this.ui.setHealth(this.player.health),this.player.inCar&&this.playerCar&&(this.ui.setCarHealth(this.playerCar.health),this.ui.drawSpeedo(this.playerCar.speedKmh),this.ui.el.speedNum.textContent=Math.round(this.playerCar.speedKmh)),this.missions.waypoint){const i=yn(e.x,e.z,this.missions.waypoint.x,this.missions.waypoint.z);this.ui.updateChip(i),this.ui.el.chip.classList.remove("hidden")}else this.ui.el.chip.classList.add("hidden");if(this.frame++,this.frame%2===0){const i=[this.missions.targetCar,...this.missions.chaseCars];this.ui.updateMinimap(this.player,this.playerCar,this.population,this.missions.waypoint,i)}}updatePlayer(t){this.player.inCar&&this.playerCar?(this.playerCar.update(t,this.input,this.input.tiltEnabled,this.input.tilt),this.player.pos.copy(this.playerCar.pos),this.player.heading=this.playerCar.heading,this.player.group.position.copy(this.playerCar.pos),this.player.health=Math.max(0,this.player.health-0)):this.player.update(t,this.input,this.camYaw,this.input.aiming,this.sessionTime)}updateCamera(t){const e=this.sessionTime;if(this.state==="title"){const c=e*.045,h=new T(Math.sin(c)*150,52+Math.sin(e*.12)*6,Math.cos(c)*150);this.camera.position.lerp(h,1-Math.exp(-1.5*t));const d=new T(0,5,0);this.lastLookAt.lerp(d,1-Math.exp(-2*t)),this.camera.lookAt(this.lastLookAt),this.camera.fov=Oi(this.camera.fov,48,2,t),this.camera.updateProjectionMatrix();return}let n,i,r;if(this.player.inCar&&this.playerCar){const c=this.playerCar,h=this.input.consumeLook();(h.x||h.y)&&(this.carOrbit-=h.x*.004,this.carOrbitPitch=$t(this.carOrbitPitch+h.y*.0025,-.15,.45),this.lookIdle=0),this.lookIdle+=t,this.lookIdle>1.6&&(this.carOrbit=Oi(this.carOrbit,0,2.2,t),this.carOrbitPitch=Oi(this.carOrbitPitch,0,2.2,t));const d=c.heading+Math.PI+this.carOrbit,u=$t(.24+this.carOrbitPitch,-.05,.6),m=Math.abs(c.speed),g=8.4+m*.07,x=Math.cos(u)*g,f=1.2+Math.sin(u)*g,p=new T(Math.sin(c.heading),0,Math.cos(c.heading));n=new T(c.pos.x+Math.sin(d)*x,f,c.pos.z+Math.cos(d)*x),i=new T(c.pos.x+p.x*4.5,1.3,c.pos.z+p.z*4.5),r=58+m*.28}else{const c=this.input.consumeLook();(c.x||c.y)&&(this.camYaw-=c.x*.0046,this.camPitch=$t(this.camPitch+c.y*.0035,-.12,.72));const h=this.input.aiming,d=this.camYaw,u=h?.12:this.camPitch,m=h?3.1:5.7,g=Math.cos(u)*m,x=1.35+Math.sin(u)*m,f=new T(-Math.sin(d),0,-Math.cos(d)),p=new T(-f.z,0,f.x),y=h?.55:0;n=new T(this.player.pos.x+Math.sin(d)*g+p.x*y,x,this.player.pos.z+Math.cos(d)*g+p.z*y),i=new T(this.player.pos.x+f.x*(h?10:2.4)+p.x*y,1.5,this.player.pos.z+f.z*(h?10:2.4)+p.z*y),r=h?42:55}const a=i.clone();for(let c=1;c>=.25;c-=.08){const h=a.x+(n.x-a.x)*c,d=a.z+(n.z-a.z)*c,u=a.y+(n.y-a.y)*c;let m=!1;for(const g of this.world.colliders)if(h>g.minX&&h<g.maxX&&d>g.minZ&&d<g.maxZ&&u<g.h+.3){m=!0;break}if(!m){n.set(h,u,d);break}}const o=this.cameraSnap?1:1-Math.exp(-9*t);this.camera.position.lerp(n,o),this.lastLookAt.lerp(i,this.cameraSnap?1:1-Math.exp(-12*t)),this.cameraSnap=!1,this.camera.fov=Oi(this.camera.fov,r,6,t),this.camera.updateProjectionMatrix(),this.shake=Math.max(0,this.shake-t*1.8);const l=this.shake*.4;this.camera.position.x+=at(-l,l),this.camera.position.y+=at(-l,l)*.5,this.camera.lookAt(this.lastLookAt)}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight),this.composer.setPixelRatio(this.renderer.getPixelRatio())}loop(){requestAnimationFrame(()=>this.loop());const t=Math.min(.05,this.clock.getDelta()),e=this.clock.elapsedTime;if(this.grade&&(this.grade.uniforms.time.value=e),this.state==="title"){this.world.update(t,e),this.population.update(t,this.player.pos,null,!1,e),this.updateCamera(t),this.render(t);return}if(this.state==="fail"){this.world.update(t,e),this.updateCamera(t),this.render(t);return}const n=!this.ui.el.pause.classList.contains("hidden")||!this.ui.el.settings.classList.contains("hidden")||!this.ui.el.phone.classList.contains("hidden")||!this.ui.el.ending.classList.contains("hidden")||!this.ui.el.missionCard.classList.contains("hidden");this.input.enabled=!n&&this.state==="playing",this.paused?(this.world.update(t,e),this.updateCamera(t)):(this.input.update(),this.updatePlayer(t),this.update(t),this.updateCamera(t),this.state==="playing"&&this.ui.setCinematic(!1)),this.render(t)}render(t){this.quality?this.composer.render(t):this.renderer.render(this.scene,this.camera)}}const Nc=new Cg;window.__larossa=Nc;Nc.init().catch(s=>{console.error(s);const t=document.getElementById("loadStatus");t&&(t.textContent="The city failed to load: "+s.message)});
