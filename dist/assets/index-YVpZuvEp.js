(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Za="180",Pc=0,So=1,Lc=2,Il=1,Dc=2,wn=3,Bn=0,Ue=1,Qe=2,Tn=0,Ii=1,xe=2,yo=3,Eo=4,Ic=5,ti=100,Uc=101,Nc=102,Fc=103,Oc=104,Bc=200,zc=201,kc=202,Hc=203,sa=204,ra=205,Gc=206,Vc=207,Wc=208,Xc=209,qc=210,Yc=211,$c=212,Kc=213,jc=214,aa=0,oa=1,la=2,Ni=3,ca=4,ha=5,ua=6,da=7,Ul=0,Zc=1,Jc=2,Fn=0,Nl=1,Fl=2,Ol=3,Ja=4,Bl=5,zl=6,kl=7,Hl=300,Fi=301,Oi=302,ir=303,fa=304,ur=306,os=1e3,ni=1001,pa=1002,Ye=1003,Qc=1004,_s=1005,hn=1006,xr=1007,ii=1008,pn=1009,Gl=1010,Vl=1011,ls=1012,Qa=1013,si=1014,un=1015,bn=1016,to=1017,eo=1018,cs=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,rn=1023,hs=1026,us=1027,no=1028,io=1029,$l=1030,so=1031,ro=1033,$s=33776,Ks=33777,js=33778,Zs=33779,ma=35840,ga=35841,_a=35842,xa=35843,va=36196,Ma=37492,Sa=37496,ya=37808,Ea=37809,wa=37810,Ta=37811,ba=37812,Aa=37813,Ca=37814,Ra=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Ua=37820,Na=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Ha=36285,Ga=36286,th=3200,eh=3201,Kl=0,nh=1,Un="",Fe="srgb",Bi="srgb-linear",sr="linear",Zt="srgb",ci=7680,wo=519,ih=512,sh=513,rh=514,jl=515,ah=516,oh=517,lh=518,ch=519,Va=35044,To="300 es",dn=2e3,rr=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,Wa=180/Math.PI;function On(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function hh(s,t){return(s%t+t)%t}function Mr(s,t,e){return(1-e)*s+e*t}function cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ps{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const m=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=m,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==m||c!==d||h!==_){let p=1-o;const f=l*m+c*d+h*_+u*g,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const T=Math.sqrt(E),A=Math.atan2(T,f*w);p=Math.sin(p*A)/T,o=Math.sin(o*A)/T}const v=o*w;if(l=l*p+m*v,c=c*p+d*v,h=h*p+_*v,u=u*p+g*v,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],m=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*d-c*m,t[e+1]=l*_+h*m+c*u-o*d,t[e+2]=c*_+h*d+o*m-l*u,t[e+3]=h*_-o*u-l*m-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),m=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=m*h*u+c*d*_,this._y=c*d*u-m*h*_,this._z=c*h*_+m*d*u,this._w=c*h*u-m*d*_;break;case"YXZ":this._x=m*h*u+c*d*_,this._y=c*d*u-m*h*_,this._z=c*h*_-m*d*u,this._w=c*h*u+m*d*_;break;case"ZXY":this._x=m*h*u-c*d*_,this._y=c*d*u+m*h*_,this._z=c*h*_+m*d*u,this._w=c*h*u-m*d*_;break;case"ZYX":this._x=m*h*u-c*d*_,this._y=c*d*u+m*h*_,this._z=c*h*_-m*d*u,this._w=c*h*u+m*d*_;break;case"YZX":this._x=m*h*u+c*d*_,this._y=c*d*u+m*h*_,this._z=c*h*_-m*d*u,this._w=c*h*u-m*d*_;break;case"XZY":this._x=m*h*u-c*d*_,this._y=c*d*u-m*h*_,this._z=c*h*_+m*d*u,this._w=c*h*u+m*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],m=n+o+u;if(m>0){const d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=a*u+this._w*m,this._x=n*u+this._x*m,this._y=i*u+this._y*m,this._z=r*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new D,bo=new ps;class zt{constructor(t,e,n,i,r,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],m=n[2],d=n[5],_=n[8],g=i[0],p=i[3],f=i[6],w=i[1],E=i[4],v=i[7],T=i[2],A=i[5],C=i[8];return r[0]=a*g+o*w+l*T,r[3]=a*p+o*E+l*A,r[6]=a*f+o*v+l*C,r[1]=c*g+h*w+u*T,r[4]=c*p+h*E+u*A,r[7]=c*f+h*v+u*C,r[2]=m*g+d*w+_*T,r[5]=m*p+d*E+_*A,r[8]=m*f+d*v+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,m=o*l-h*r,d=c*r-a*l,_=e*u+n*m+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=m*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new zt;function Zl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uh(){const s=ar("canvas");return s.style.display="block",s}const Ao={};function ds(s){s in Ao||(Ao[s]=!0,console.warn(s))}function dh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Co=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fh(){const s={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?sr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bi]:{primaries:t,whitePoint:n,transfer:sr,toXYZ:Co,fromXYZ:Ro,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:Co,fromXYZ:Ro,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),s}const Yt=fh();function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ui(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hi;class ph{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hi===void 0&&(hi=ar("canvas")),hi.width=t.width,hi.height=t.height;const i=hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mh=0;class ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Er(i[a].image)):r.push(Er(i[a]))}else r=Er(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Er(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ph.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;const wr=new D;class Re extends Hi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=ni,i=ni,r=hn,a=ii,o=rn,l=pn,c=Re.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=On(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Hl;Re.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],m=l[1],d=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(d+1)/2,T=(f+1)/2,A=(h+m)/4,C=(u+g)/4,R=(_+p)/4;return E>v&&E>T?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=C/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=C/r,i=R/r),this.set(n,i,r,e),this}let w=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(u-g)/w,this.z=(m-h)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Re(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ao(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends _h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),vs.subVectors(this.max,Xi),ui.subVectors(t.a,Xi),di.subVectors(t.b,Xi),fi.subVectors(t.c,Xi),Cn.subVectors(di,ui),Rn.subVectors(fi,di),Vn.subVectors(ui,fi);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Vn.y,Vn.x,0];return!Tr(e,ui,di,fi,vs)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,ui,di,fi,vs))?!1:(Ms.crossVectors(Cn,Rn),e=[Ms.x,Ms.y,Ms.z],Tr(e,ui,di,fi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xn=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,xs=new ai,ui=new D,di=new D,fi=new D,Cn=new D,Rn=new D,Vn=new D,Xi=new D,vs=new D,Ms=new D,Wn=new D;function Tr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);const o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=t.dot(Wn),c=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vh=new ai,qi=new D,br=new D;class oi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(br)),this.expandByPoint(qi.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vn=new D,Ar=new D,Ss=new D,Pn=new D,Cr=new D,ys=new D,Rr=new D;class oo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ar.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Ar);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ss),o=Pn.dot(this.direction),l=-Pn.dot(Ss),c=Pn.lengthSq(),h=Math.abs(1-a*a);let u,m,d,_;if(h>0)if(u=a*l-o,m=a*o-l,_=r*h,u>=0)if(m>=-_)if(m<=_){const g=1/h;u*=g,m*=g,d=u*(u+a*m+2*o)+m*(a*u+m+2*l)+c}else m=r,u=Math.max(0,-(a*m+o)),d=-u*u+m*(m+2*l)+c;else m=-r,u=Math.max(0,-(a*m+o)),d=-u*u+m*(m+2*l)+c;else m<=-_?(u=Math.max(0,-(-a*r+o)),m=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+m*(m+2*l)+c):m<=_?(u=0,m=Math.min(Math.max(-r,-l),r),d=m*(m+2*l)+c):(u=Math.max(0,-(a*r+o)),m=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+m*(m+2*l)+c);else m=a>0?-r:r,u=Math.max(0,-(a*m+o)),d=-u*u+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ar).addScaledVector(Ss,m),d}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,i=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,i=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,a=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,a=(t.min.y-m.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-m.z)*u,l=(t.max.z-m.z)*u):(o=(t.max.z-m.z)*u,l=(t.min.z-m.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){Cr.subVectors(e,t),ys.subVectors(n,t),Rr.crossVectors(Cr,ys);let a=this.direction.dot(Rr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(ys.crossVectors(Pn,ys));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(Pn));if(c<0||l+c>a)return null;const h=-o*Pn.dot(Rr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,a,o,l,c,h,u,m,d,_,g,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,m,d,_,g,p)}set(t,e,n,i,r,a,o,l,c,h,u,m,d,_,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=m,f[3]=d,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),a=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const m=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=m-g*c,e[9]=-o*l,e[2]=g-m*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const m=l*h,d=l*u,_=c*h,g=c*u;e[0]=m+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+m*o,e[10]=a*l}else if(t.order==="ZXY"){const m=l*h,d=l*u,_=c*h,g=c*u;e[0]=m-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-m*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const m=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-d,e[8]=m*c+g,e[1]=l*u,e[5]=g*c+m,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-m*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+_,e[10]=m-g*u}else if(t.order==="XZY"){const m=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=m*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mh,t,Sh)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Ln.crossVectors(n,He),Ln.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Ln.crossVectors(n,He)),Ln.normalize(),Es.crossVectors(He,Ln),i[0]=Ln.x,i[4]=Es.x,i[8]=He.x,i[1]=Ln.y,i[5]=Es.y,i[9]=He.y,i[2]=Ln.z,i[6]=Es.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],m=n[9],d=n[13],_=n[2],g=n[6],p=n[10],f=n[14],w=n[3],E=n[7],v=n[11],T=n[15],A=i[0],C=i[4],R=i[8],M=i[12],y=i[1],L=i[5],F=i[9],k=i[13],W=i[2],X=i[6],Y=i[10],Z=i[14],H=i[3],ot=i[7],dt=i[11],At=i[15];return r[0]=a*A+o*y+l*W+c*H,r[4]=a*C+o*L+l*X+c*ot,r[8]=a*R+o*F+l*Y+c*dt,r[12]=a*M+o*k+l*Z+c*At,r[1]=h*A+u*y+m*W+d*H,r[5]=h*C+u*L+m*X+d*ot,r[9]=h*R+u*F+m*Y+d*dt,r[13]=h*M+u*k+m*Z+d*At,r[2]=_*A+g*y+p*W+f*H,r[6]=_*C+g*L+p*X+f*ot,r[10]=_*R+g*F+p*Y+f*dt,r[14]=_*M+g*k+p*Z+f*At,r[3]=w*A+E*y+v*W+T*H,r[7]=w*C+E*L+v*X+T*ot,r[11]=w*R+E*F+v*Y+T*dt,r[15]=w*M+E*k+v*Z+T*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],m=t[10],d=t[14],_=t[3],g=t[7],p=t[11],f=t[15];return _*(+r*l*u-i*c*u-r*o*m+n*c*m+i*o*d-n*l*d)+g*(+e*l*d-e*c*m+r*a*m-i*a*d+i*c*h-r*l*h)+p*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*m+i*a*u-n*a*m+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],m=t[10],d=t[11],_=t[12],g=t[13],p=t[14],f=t[15],w=u*p*c-g*m*c+g*l*d-o*p*d-u*l*f+o*m*f,E=_*m*c-h*p*c-_*l*d+a*p*d+h*l*f-a*m*f,v=h*g*c-_*u*c+_*o*d-a*g*d-h*o*f+a*u*f,T=_*u*l-h*g*l-_*o*m+a*g*m+h*o*p-a*u*p,A=e*w+n*E+i*v+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=w*C,t[1]=(g*m*r-u*p*r-g*i*d+n*p*d+u*i*f-n*m*f)*C,t[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*f+n*l*f)*C,t[3]=(u*l*r-o*m*r-u*i*c+n*m*c+o*i*d-n*l*d)*C,t[4]=E*C,t[5]=(h*p*r-_*m*r+_*i*d-e*p*d-h*i*f+e*m*f)*C,t[6]=(_*l*r-a*p*r-_*i*c+e*p*c+a*i*f-e*l*f)*C,t[7]=(a*m*r-h*l*r+h*i*c-e*m*c-a*i*d+e*l*d)*C,t[8]=v*C,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*f-e*u*f)*C,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*C,t[12]=T*C,t[13]=(h*g*i-_*u*i+_*n*m-e*g*m-h*n*p+e*u*p)*C,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*m+e*o*m)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,m=r*c,d=r*h,_=r*u,g=a*h,p=a*u,f=o*u,w=l*c,E=l*h,v=l*u,T=n.x,A=n.y,C=n.z;return i[0]=(1-(g+f))*T,i[1]=(d+v)*T,i[2]=(_-E)*T,i[3]=0,i[4]=(d-v)*A,i[5]=(1-(m+f))*A,i[6]=(p+w)*A,i[7]=0,i[8]=(_+E)*C,i[9]=(p-w)*C,i[10]=(1-(m+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=pi.set(i[0],i[1],i[2]).length();const a=pi.set(i[4],i[5],i[6]).length(),o=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=dn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),m=(e+t)/(e-t),d=(n+i)/(n-i);let _,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===dn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===rr)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=dn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),m=-(e+t)/(e-t),d=-(n+i)/(n-i);let _,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===dn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===rr)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new D,nn=new ee,Mh=new D(0,0,0),Sh=new D(1,1,1),Ln=new D,Es=new D,He=new D,Po=new ee,Lo=new ps;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],m=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yh=0;const Do=new D,mi=new ps,Mn=new ee,ws=new D,Yi=new D,Eh=new D,wh=new ps,Io=new D(1,0,0),Uo=new D(0,1,0),No=new D(0,0,1),Fo={type:"added"},Th={type:"removed"},gi={type:"childadded",child:null},Pr={type:"childremoved",child:null};class he extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new D,e=new mn,n=new ps,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(Io,t)}rotateY(t){return this.rotateOnAxis(Uo,t)}rotateZ(t){return this.rotateOnAxis(No,t)}translateOnAxis(t,e){return Do.copy(t).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Io,t)}translateY(t){return this.translateOnAxis(Uo,t)}translateZ(t){return this.translateOnAxis(No,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Yi,ws,this.up):Mn.lookAt(ws,Yi,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(Mn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fo),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Th),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fo),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,Eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),m=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new D(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new D,Sn=new D,Lr=new D,yn=new D,_i=new D,xi=new D,Oo=new D,Dr=new D,Ir=new D,Ur=new D,Nr=new te,Fr=new te,Or=new te;class tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),Sn.subVectors(n,e),Lr.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(Sn),l=sn.dot(Lr),c=Sn.dot(Sn),h=Sn.dot(Lr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const m=1/u,d=(c*l-o*h)*m,_=(a*h-o*l)*m;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Nr.setScalar(0),Fr.setScalar(0),Or.setScalar(0),Nr.fromBufferAttribute(t,e),Fr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Nr,r.x),a.addScaledVector(Fr,r.y),a.addScaledVector(Or,r.z),a}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;_i.subVectors(i,n),xi.subVectors(r,n),Dr.subVectors(t,n);const l=_i.dot(Dr),c=xi.dot(Dr);if(l<=0&&c<=0)return e.copy(n);Ir.subVectors(t,i);const h=_i.dot(Ir),u=xi.dot(Ir);if(h>=0&&u<=h)return e.copy(i);const m=l*u-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(_i,a);Ur.subVectors(t,r);const d=_i.dot(Ur),_=xi.dot(Ur);if(_>=0&&d<=_)return e.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(xi,o);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return Oo.subVectors(r,i),o=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(Oo,o);const f=1/(p+g+m);return a=g*f,o=m*f,e.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Br(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=hh(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Br(a,r,t+1/3),this.g=Br(a,r,t),this.b=Br(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Yt.workingToColorSpace(be.copy(this),t),Math.round(Wt(be.r*255,0,255))*65536+Math.round(Wt(be.g*255,0,255))*256+Math.round(Wt(be.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Fe){Yt.workingToColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ts);const n=Mr(Dn.h,Ts.h,e),i=Mr(Dn.s,Ts.s,e),r=Mr(Dn.l,Ts.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Pt;Pt.NAMES=tc;let bh=0;class kn extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ii,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qt extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new D,bs=new bt;let Ah=0;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ah++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class ec extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nc extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ch=0;const je=new ee,zr=new he,vi=new D,Ge=new ai,$i=new ai,Ee=new D;class _e extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zl(t)?nc:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ge.min,$i.min),Ge.expandByPoint(Ee),Ee.addVectors(Ge.max,$i.max),Ge.expandByPoint(Ee)):(Ge.expandByPoint($i.min),Ge.expandByPoint($i.max))}Ge.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(t,c),Ee.add(vi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,u=new D,m=new bt,d=new bt,_=new bt,g=new D,p=new D;function f(R,M,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),m.fromBufferAttribute(r,R),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(m),_.sub(m);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(L),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(L),o[R].add(g),o[M].add(g),o[y].add(g),l[R].add(p),l[M].add(p),l[y].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,M=w.length;R<M;++R){const y=w[R],L=y.start,F=y.count;for(let k=L,W=L+F;k<W;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new D,v=new D,T=new D,A=new D;function C(R){T.fromBufferAttribute(i,R),A.copy(T);const M=o[R];E.copy(M),E.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(A,M);const L=v.dot(l[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,L)}for(let R=0,M=w.length;R<M;++R){const y=w[R],L=y.start,F=y.count;for(let k=L,W=L+F;k<W;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let m=0,d=t.count;m<d;m+=3){const _=t.getX(m+0),g=t.getX(m+1),p=t.getX(m+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,d=e.count;m<d;m+=3)i.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,m=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let f=0;f<h;f++)m[_++]=c[d++]}return new Oe(m,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const m=c[h],d=t(m,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,m=c.length;u<m;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let m=0,d=u.length;m<d;m++)h.push(u[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new ee,Xn=new oo,As=new oi,zo=new D,Cs=new D,Rs=new D,Ps=new D,kr=new D,Ls=new D,ko=new D,Ds=new D;class G extends he{constructor(t=new _e,e=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(kr.fromBufferAttribute(u,t),a?Ls.addScaledVector(kr,h):Ls.addScaledVector(kr.sub(e),h))}e.add(Ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(As.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(As,zo)===null||Xn.origin.distanceToSquared(zo)>(t.far-t.near)**2))&&(Bo.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Bo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,m=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=m.length;_<g;_++){const p=m[_],f=a[p.materialIndex],w=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=w,T=E;v<T;v+=3){const A=o.getX(v),C=o.getX(v+1),R=o.getX(v+2);i=Is(this,f,t,n,c,h,u,A,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,f=g;p<f;p+=3){const w=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);i=Is(this,a,t,n,c,h,u,w,E,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=m.length;_<g;_++){const p=m[_],f=a[p.materialIndex],w=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=w,T=E;v<T;v+=3){const A=v,C=v+1,R=v+2;i=Is(this,f,t,n,c,h,u,A,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,f=g;p<f;p+=3){const w=p,E=p+1,v=p+2;i=Is(this,a,t,n,c,h,u,w,E,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Rh(s,t,e,n,i,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Bn,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:s}}function Is(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Cs),s.getVertexPosition(l,Rs),s.getVertexPosition(c,Ps);const h=Rh(s,t,e,n,Cs,Rs,Ps,ko);if(h){const u=new D;tn.getBarycoord(ko,Cs,Rs,Ps,u),i&&(h.uv=tn.getInterpolatedAttribute(i,o,l,c,u,new bt)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,l,c,u,new bt)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new D,materialIndex:0};tn.getNormal(Cs,Rs,Ps,m.normal),h.face=m,h.barycoord=u}return h}class ut extends _e{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let m=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function _(g,p,f,w,E,v,T,A,C,R,M){const y=v/C,L=T/R,F=v/2,k=T/2,W=A/2,X=C+1,Y=R+1;let Z=0,H=0;const ot=new D;for(let dt=0;dt<Y;dt++){const At=dt*L-k;for(let Gt=0;Gt<X;Gt++){const ie=Gt*y-F;ot[g]=ie*w,ot[p]=At*E,ot[f]=W,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[p]=0,ot[f]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Gt/C),u.push(1-dt/R),Z+=1}}for(let dt=0;dt<R;dt++)for(let At=0;At<C;At++){const Gt=m+At+X*dt,ie=m+At+X*(dt+1),oe=m+(At+1)+X*(dt+1),Kt=m+(At+1)+X*dt;l.push(Gt,ie,Kt),l.push(ie,oe,Kt),H+=6}o.addGroup(d,H,M),d+=H,m+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ut(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=zi(s[e]);for(const i in n)t[i]=n[i]}return t}function Ph(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ic(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const fs={clone:zi,merge:De};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sc extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new D,Ho=new bt,Go=new bt;class Xe extends sc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Ho,Go),e.subVectors(Go,Ho)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class Ih extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(Mi,Si,t,e);i.layers=this.layers,this.add(i);const r=new Xe(Mi,Si,t,e);r.layers=this.layers,this.add(r);const a=new Xe(Mi,Si,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Mi,Si,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Mi,Si,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Mi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),m=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,m,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class rc extends Re{constructor(t=[],e=Fi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uh extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Tn});r.uniforms.tEquirect.value=e;const a=new G(i,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=hn),new Ih(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class ve extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nh={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],m=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&m>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class lo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(t),this.density=e}clone(){return new lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fh extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new D;class or{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ri extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yi;const Ki=new D,Ei=new D,wi=new D,Ti=new bt,ji=new bt,ac=new ee,Us=new D,Zi=new D,Ns=new D,Vo=new bt,Gr=new bt,Wo=new bt;class ss extends he{constructor(t=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oh(e,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new or(n,3,0,!1)),yi.setAttribute("uv",new or(n,2,3,!1))}this.geometry=yi,this.material=t,this.center=new bt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),ac.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-wi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Fs(Us.set(-.5,-.5,0),wi,a,Ei,i,r),Fs(Zi.set(.5,-.5,0),wi,a,Ei,i,r),Fs(Ns.set(.5,.5,0),wi,a,Ei,i,r),Vo.set(0,0),Gr.set(1,0),Wo.set(1,1);let o=t.ray.intersectTriangle(Us,Zi,Ns,!1,Ki);if(o===null&&(Fs(Zi.set(-.5,.5,0),wi,a,Ei,i,r),Gr.set(0,1),o=t.ray.intersectTriangle(Us,Ns,Zi,!1,Ki),o===null))return;const l=t.ray.origin.distanceTo(Ki);l<t.near||l>t.far||e.push({distance:l,point:Ki.clone(),uv:tn.getInterpolation(Ki,Us,Zi,Ns,Vo,Gr,Wo,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fs(s,t,e,n,i,r){Ti.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ji.x=r*Ti.x-i*Ti.y,ji.y=i*Ti.x+r*Ti.y):ji.copy(Ti),s.copy(t),s.x+=ji.x,s.y+=ji.y,s.applyMatrix4(ac)}class Bh extends Re{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ye,h=Ye,u,m){super(null,a,o,l,c,h,i,r,u,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends Oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new ee,qo=new ee,Os=[],Yo=new ai,zh=new ee,Ji=new G,Qi=new oi;class Ai extends G{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Yo.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Qi.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(Qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),t.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bi),qo.multiplyMatrices(n,bi),Ji.matrixWorld=qo,Ji.raycast(t,Os);for(let a=0,o=Os.length;a<o;a++){const l=Os[a];l.instanceId=r,l.object=this,e.push(l)}Os.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(i*this.count),i,this.count,no,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vr=new D,kh=new D,Hh=new zt;class jn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vr.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hh.getNormalMatrix(t),i=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new oi,Gh=new bt(.5,.5),Bs=new D;class co{constructor(t=new jn,e=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],m=r[6],d=r[7],_=r[8],g=r[9],p=r[10],f=r[11],w=r[12],E=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-a,d-h,f-_,T-w).normalize(),i[1].setComponents(c+a,d+h,f+_,T+w).normalize(),i[2].setComponents(c+o,d+u,f+g,T+E).normalize(),i[3].setComponents(c-o,d-u,f-g,T-E).normalize(),n)i[4].setComponents(l,m,p,v).normalize(),i[5].setComponents(c-l,d-m,f-p,T-v).normalize();else if(i[4].setComponents(c-l,d-m,f-p,T-v).normalize(),e===dn)i[5].setComponents(c+l,d+m,f+p,T+v).normalize();else if(e===rr)i[5].setComponents(l,m,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){qn.center.set(0,0,0);const e=Gh.distanceTo(t.center);return qn.radius=.7071067811865476+e,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Bs.x=i.normal.x>0?t.max.x:t.min.x,Bs.y=i.normal.y>0?t.max.y:t.min.y,Bs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oc extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lr=new D,cr=new D,$o=new ee,ts=new oo,zs=new oi,Wr=new D,Ko=new D;class Vh extends he{constructor(t=new _e,e=new oc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)lr.fromBufferAttribute(e,i-1),cr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=lr.distanceTo(cr);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;$o.copy(i).invert(),ts.copy(t.ray).applyMatrix4($o);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const f=h.getX(g),w=h.getX(g+1),E=ks(this,t,ts,l,f,w,g);E&&e.push(E)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(d),f=ks(this,t,ts,l,g,p,_-1);f&&e.push(f)}}else{const d=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const f=ks(this,t,ts,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){const g=ks(this,t,ts,l,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ks(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(lr.fromBufferAttribute(o,i),cr.fromBufferAttribute(o,r),e.distanceSqToSegment(lr,cr,Wr,Ko)>n)return;Wr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Wr);if(!(c<t.near||c>t.far))return{distance:c,point:Ko.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class Js extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jo=new ee,Xa=new oo,Hs=new oi,Gs=new D;class Xr extends he{constructor(t=new _e,e=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=r,t.ray.intersectsSphere(Hs)===!1)return;jo.copy(i).invert(),Xa.copy(t.ray).applyMatrix4(jo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const m=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=m,g=d;_<g;_++){const p=c.getX(_);Gs.fromBufferAttribute(u,p),Zo(Gs,p,l,i,t,e,this)}}else{const m=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=m,g=d;_<g;_++)Gs.fromBufferAttribute(u,_),Zo(Gs,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zo(s,t,e,n,i,r,a){const o=Xa.distanceSqToPoint(s);if(o<e){const l=new D;Xa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wh extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lc extends Re{constructor(t,e,n=si,i,r,a,o=Ye,l=Ye,c,h=hs,u=1){if(h!==hs&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:u};super(m,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cc extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Nn extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,h=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,m=3;u<=e;u++,m+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[m]/t+1)/2,h.y=(a[m+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ge extends _e{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],m=[],d=[];let _=0;const g=[],p=n/2;let f=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(m,3)),this.setAttribute("uv",new re(d,2));function w(){const v=new D,T=new D;let A=0;const C=(e-t)/n;for(let R=0;R<=r;R++){const M=[],y=R/r,L=y*(e-t)+t;for(let F=0;F<=i;F++){const k=F/i,W=k*l+o,X=Math.sin(W),Y=Math.cos(W);T.x=L*X,T.y=-y*n+p,T.z=L*Y,u.push(T.x,T.y,T.z),v.set(X,C,Y).normalize(),m.push(v.x,v.y,v.z),d.push(k,1-y),M.push(_++)}g.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){const y=g[M][R],L=g[M+1][R],F=g[M+1][R+1],k=g[M][R+1];(t>0||M!==0)&&(h.push(y,L,k),A+=3),(e>0||M!==r-1)&&(h.push(L,F,k),A+=3)}c.addGroup(f,A,0),f+=A}function E(v){const T=_,A=new bt,C=new D;let R=0;const M=v===!0?t:e,y=v===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,p*y,0),m.push(0,y,0),d.push(.5,.5),_++;const L=_;for(let F=0;F<=i;F++){const W=F/i*l+o,X=Math.cos(W),Y=Math.sin(W);C.x=M*Y,C.y=p*y,C.z=M*X,u.push(C.x,C.y,C.z),m.push(0,y,0),A.x=X*.5+.5,A.y=Y*.5*y+.5,d.push(A.x,A.y),_++}for(let F=0;F<i;F++){const k=T+F,W=L+F;v===!0?h.push(W,W+1,k):h.push(W+1,W,k),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dr extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const E=new D,v=new D,T=new D;for(let A=0;A<e.length;A+=3)d(e[A+0],E),d(e[A+1],v),d(e[A+2],T),l(E,v,T,w)}function l(w,E,v,T){const A=T+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const M=w.clone().lerp(v,R/A),y=E.clone().lerp(v,R/A),L=A-R;for(let F=0;F<=L;F++)F===0&&R===A?C[R][F]=M:C[R][F]=M.clone().lerp(y,F/L)}for(let R=0;R<A;R++)for(let M=0;M<2*(A-R)-1;M++){const y=Math.floor(M/2);M%2===0?(m(C[R][y+1]),m(C[R+1][y]),m(C[R][y])):(m(C[R][y+1]),m(C[R+1][y+1]),m(C[R+1][y]))}}function c(w){const E=new D;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(w),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){const w=new D;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];const v=p(w)/2/Math.PI+.5,T=f(w)/Math.PI+.5;a.push(v,1-T)}_(),u()}function u(){for(let w=0;w<a.length;w+=6){const E=a[w+0],v=a[w+2],T=a[w+4],A=Math.max(E,v,T),C=Math.min(E,v,T);A>.9&&C<.1&&(E<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),T<.2&&(a[w+4]+=1))}}function m(w){r.push(w.x,w.y,w.z)}function d(w,E){const v=w*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function _(){const w=new D,E=new D,v=new D,T=new D,A=new bt,C=new bt,R=new bt;for(let M=0,y=0;M<r.length;M+=9,y+=6){w.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),A.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),T.copy(w).add(E).add(v).divideScalar(3);const L=p(T);g(A,y+0,w,L),g(C,y+2,E,L),g(R,y+4,v,L)}}function g(w,E,v,T){T<0&&w.x===1&&(a[E]=w.x-1),v.x===0&&v.z===0&&(a[E]=T/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.vertices,t.indices,t.radius,t.details)}}class ho extends dr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ho(t.radius,t.detail)}}class fr extends dr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fr(t.radius,t.detail)}}class Ie extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,m=e/l,d=[],_=[],g=[],p=[];for(let f=0;f<h;f++){const w=f*m-a;for(let E=0;E<c;E++){const v=E*u-r;_.push(v,-w,0),g.push(0,0,1),p.push(E/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const E=w+c*f,v=w+c*(f+1),T=w+1+c*(f+1),A=w+1+c*f;d.push(E,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.widthSegments,t.heightSegments)}}class We extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,m=new D,d=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const w=[],E=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+E*o),_.push(u.x,u.y,u.z),m.copy(u).normalize(),g.push(m.x,m.y,m.z),p.push(A+v,1-E),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const E=h[f][w+1],v=h[f][w],T=h[f+1][w],A=h[f+1][w+1];(f!==0||a>0)&&d.push(E,v,A),(f!==n-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hr extends _e{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,u=new D,m=new D;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(g),u.y=(t+e*Math.cos(p))*Math.sin(g),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),m.subVectors(u,h).normalize(),l.push(m.x,m.y,m.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,p=(i+1)*(d-1)+_-1,f=(i+1)*(d-1)+_,w=(i+1)*d+_;a.push(g,p,w),a.push(p,f,w)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Xh extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qh extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yh extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pr extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $h extends pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new ee,Jo=new D,Qo=new D;class hc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jo),Qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qo),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tl=new ee,es=new D,Yr=new D;class Kh extends hc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),Yr.copy(n.position),Yr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yr),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,n.coordinateSystem,n.reversedDepth)}}class Zn extends pr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class uo extends sc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jh extends hc{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class el extends pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zh extends pr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jh extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class uc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nl(s,t,e,n){const i=Qh(n);switch(e){case ql:return s*t;case no:return s*t/i.components*i.byteLength;case io:return s*t/i.components*i.byteLength;case $l:return s*t*2/i.components*i.byteLength;case so:return s*t*2/i.components*i.byteLength;case Yl:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case ro:return s*t*4/i.components*i.byteLength;case $s:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case js:case Zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:case xa:return Math.max(s,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(s,8)*Math.max(t,8)/2;case va:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ha:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qh(s){switch(s){case pn:case Gl:return{byteLength:1,components:1};case ls:case Vl:case bn:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case si:case Qa:case un:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function dc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,m=s.createBuffer();s.bindBuffer(l,m),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let m=0;for(let d=1;d<u.length;d++){const _=u[m],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++m,u[m]=g)}u.length=m+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
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
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
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
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pu=`#ifdef USE_IRIDESCENCE
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
#endif`,mu=`#ifdef USE_BUMPMAP
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
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wu=`#define PI 3.141592653589793
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
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
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
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
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
#endif`,Qu=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
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
#endif`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,lf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cf=`#define DISTANCE
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
}`,hf=`#define DISTANCE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 diffuse;
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
}`,_f=`#define LAMBERT
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
}`,xf=`#define LAMBERT
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
}`,vf=`#define MATCAP
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
}`,Mf=`#define MATCAP
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
}`,Sf=`#define NORMAL
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
}`,yf=`#define NORMAL
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
}`,Ef=`#define PHONG
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
}`,wf=`#define PHONG
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
}`,Tf=`#define STANDARD
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
}`,bf=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,Cf=`#define TOON
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
}`,Rf=`uniform float size;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Df=`uniform vec3 color;
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
}`,If=`uniform float rotation;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:eu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:xu,clipping_planes_vertex:vu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:yu,color_vertex:Eu,common:wu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:bu,displacementmap_pars_vertex:Au,displacementmap_vertex:Cu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Nu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Yu,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:ku,fog_pars_fragment:Hu,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:$u,lights_toon_pars_fragment:Ku,lights_phong_fragment:ju,lights_phong_pars_fragment:Zu,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:xd,normal_fragment_maps:vd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:yd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Ad,opaque_fragment:Cd,packing:Rd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Dd,dithering_pars_fragment:Id,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Hd,skinning_vertex:Gd,skinnormal_vertex:Vd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:$d,transmission_pars_fragment:Kd,uv_pars_fragment:jd,uv_pars_vertex:Zd,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:lf,distanceRGBA_vert:cf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:xf,meshmatcap_vert:vf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:yf,meshphong_vert:Ef,meshphong_frag:wf,meshphysical_vert:Tf,meshphysical_frag:bf,meshtoon_vert:Af,meshtoon_frag:Cf,points_vert:Rf,points_frag:Pf,shadow_vert:Lf,shadow_frag:Df,sprite_vert:If,sprite_frag:Uf},at={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ln={basic:{uniforms:De([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:De([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:De([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:De([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:De([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:De([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:De([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:De([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:De([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:De([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:De([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:De([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:De([at.lights,at.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ln.physical={uniforms:De([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Vs={r:0,b:0,g:0},Yn=new mn,Nf=new ee;function Ff(s,t,e,n,i,r,a){const o=new Pt(0);let l=r===!0?0:1,c,h,u=null,m=0,d=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function g(E){let v=!1;const T=_(E);T===null?f(o,l):T&&T.isColor&&(f(T,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(E,v){const T=_(v);T&&(T.isCubeTexture||T.mapping===ur)?(h===void 0&&(h=new G(new ut(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:zi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Yn.copy(v.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(Yn)),h.material.toneMapped=Yt.getTransfer(T.colorSpace)!==Zt,(u!==T||m!==T.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,m=T.version,d=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new G(new Ie(2,2),new Ce({name:"BackgroundMaterial",uniforms:zi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(T.colorSpace)!==Zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||m!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,m=T.version,d=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,v){E.getRGB(Vs,ic(s)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,v,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:g,addToRenderList:p,dispose:w}}function Of(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=m(null);let r=i,a=!1;function o(y,L,F,k,W){let X=!1;const Y=u(k,F,L);r!==Y&&(r=Y,c(r.object)),X=d(y,k,F,W),X&&_(y,k,F,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(y,L,F,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,L,F){const k=F.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let X=W[L.id];X===void 0&&(X={},W[L.id]=X);let Y=X[k];return Y===void 0&&(Y=m(l()),X[k]=Y),Y}function m(y){const L=[],F=[],k=[];for(let W=0;W<e;W++)L[W]=0,F[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,L,F,k){const W=r.attributes,X=L.attributes;let Y=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const dt=W[H];let At=X[H];if(At===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),dt===void 0||dt.attribute!==At||At&&dt.data!==At.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function _(y,L,F,k){const W={},X=L.attributes;let Y=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let dt=X[H];dt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const At={};At.attribute=dt,dt&&dt.data&&(At.data=dt.data),W[H]=At,Y++}r.attributes=W,r.attributesNum=Y,r.index=k}function g(){const y=r.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function p(y){f(y,0)}function f(y,L){const F=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;F[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),W[y]!==L&&(s.vertexAttribDivisor(y,L),W[y]=L)}function w(){const y=r.newAttributes,L=r.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==y[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function E(y,L,F,k,W,X,Y){Y===!0?s.vertexAttribIPointer(y,L,F,W,X):s.vertexAttribPointer(y,L,F,k,W,X)}function v(y,L,F,k){g();const W=k.attributes,X=F.getAttributes(),Y=L.defaultAttributeValues;for(const Z in X){const H=X[Z];if(H.location>=0){let ot=W[Z];if(ot===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const dt=ot.normalized,At=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;const ie=Gt.buffer,oe=Gt.type,Kt=Gt.bytesPerElement,$=oe===s.INT||oe===s.UNSIGNED_INT||ot.gpuType===Qa;if(ot.isInterleavedBufferAttribute){const J=ot.data,mt=J.stride,Nt=ot.offset;if(J.isInstancedInterleavedBuffer){for(let Tt=0;Tt<H.locationSize;Tt++)f(H.location+Tt,J.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<H.locationSize;Tt++)p(H.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Tt=0;Tt<H.locationSize;Tt++)E(H.location+Tt,At/H.locationSize,oe,dt,mt*Kt,(Nt+At/H.locationSize*Tt)*Kt,$)}else{if(ot.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)f(H.location+J,ot.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<H.locationSize;J++)p(H.location+J);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let J=0;J<H.locationSize;J++)E(H.location+J,At/H.locationSize,oe,dt,At*Kt,At/H.locationSize*J*Kt,$)}}else if(Y!==void 0){const dt=Y[Z];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(H.location,dt);break;case 3:s.vertexAttrib3fv(H.location,dt);break;case 4:s.vertexAttrib4fv(H.location,dt);break;default:s.vertexAttrib1fv(H.location,dt)}}}}w()}function T(){R();for(const y in n){const L=n[y];for(const F in L){const k=L[F];for(const W in k)h(k[W].object),delete k[W];delete L[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const F in L){const k=L[F];for(const W in k)h(k[W].object),delete k[W];delete L[F]}delete n[y.id]}function C(y){for(const L in n){const F=n[L];if(F[y.id]===void 0)continue;const k=F[y.id];for(const W in k)h(k[W].object),delete k[W];delete F[y.id]}}function R(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:w}}function Bf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,m){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],h[_],m[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*m[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==rn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==pn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==un&&!R)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function kf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new jn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){const d=u.length!==0||m||n!==0||i;return i=m,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,m){e=h(u,m,0)},this.setState=function(u,m,d){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{const w=r?0:n,E=w*4;let v=f.clippingState||null;l.value=v,v=h(_,m,E,d);for(let T=0;T!==E;++T)v[T]=e[T];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,m,d,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=d+g*4,w=m.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,v=d;E!==g;++E,v+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Hf(s){let t=new WeakMap;function e(a,o){return o===ir?a.mapping=Fi:o===fa&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ir||o===fa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Uh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Pi=4,il=[.125,.215,.35,.446,.526,.582],ei=20,$r=new uo,sl=new Pt;let Kr=null,jr=0,Zr=0,Jr=!1;const Jn=(1+Math.sqrt(5))/2,Ci=1/Jn,rl=[new D(-Jn,Ci,0),new D(Jn,Ci,0),new D(-Ci,0,Jn),new D(Ci,0,Jn),new D(0,Jn,-Ci),new D(0,Jn,Ci),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Gf=new D;class qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Gf}=r;Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr,jr,Zr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:bn,format:rn,colorSpace:Bi,depthBuffer:!1},i=al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vf(r)),this._blurMaterial=Wf(r,t,e)}return i}_compileMaterial(t){const e=new G(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,n,i,r){const l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,d=u.toneMapping;u.getClearColor(sl),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const g=new qt({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),p=new G(new ut,g);let f=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,f=!0):(g.color.copy(sl),f=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const T=this._cubeSize;Ws(i,v*T,E>2?T:0,T,T),u.setRenderTarget(i),f&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=m,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fi||t.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new G(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rl[(i-r-1)%rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new G(this._lodPlanes[i],c),m=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ei-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):ei;p>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const f=[];let w=0;for(let C=0;C<ei;++C){const R=C/g,M=Math.exp(-R*R/2);f.push(M),C===0?w+=M:C<p&&(w+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:E}=this;m.dTheta.value=_,m.mipInt.value=E-n;const v=this._sizeLods[i],T=3*v*(i>E-Pi?i-E+Pi:0),A=4*(this._cubeSize-v);Ws(e,T,A,3*v,2*v),l.setRenderTarget(e),l.render(u,$r)}}function Vf(s){const t=[],e=[],n=[];let i=s;const r=s-Pi+1+il.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Pi?l=il[a-s+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,m=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,p=2,f=1,w=new Float32Array(g*_*d),E=new Float32Array(p*_*d),v=new Float32Array(f*_*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,R=A>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];w.set(M,g*_*A),E.set(m,p*_*A);const y=[A,A,A,A,A,A];v.set(y,f*_*A)}const T=new _e;T.setAttribute("position",new Oe(w,g)),T.setAttribute("uv",new Oe(E,p)),T.setAttribute("faceIndex",new Oe(v,f)),t.push(T),i>Pi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function al(s,t,e){const n=new an(s,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wf(s,t,e){const n=new Float32Array(ei),i=new D(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ol(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ll(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}function Xf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ir||l===fa,h=l===Fi||l===Oi;if(c||h){let u=t.get(o);const m=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new qa(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new qa(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yf(s,t,e,n){const i={},r=new WeakMap;function a(u){const m=u.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",a),delete i[m.id];const d=r.get(m);d&&(t.remove(d),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(u,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,e.memory.geometries++),m}function l(u){const m=u.attributes;for(const d in m)t.update(m[d],s.ARRAY_BUFFER)}function c(u){const m=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const w=d.array;g=d.version;for(let E=0,v=w.length;E<v;E+=3){const T=w[E+0],A=w[E+1],C=w[E+2];m.push(T,A,A,C,C,T)}}else if(_!==void 0){const w=_.array;g=_.version;for(let E=0,v=w.length/3-1;E<v;E+=3){const T=E+0,A=E+1,C=E+2;m.push(T,A,A,C,C,T)}}else return;const p=new(Zl(m)?nc:ec)(m,1);p.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function h(u){const m=r.get(u);if(m){const d=u.index;d!==null&&m.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function $f(s,t,e){let n;function i(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){s.drawElements(n,d,r,m*a),e.update(d,n,1)}function c(m,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,m*a,_),e.update(d,n,_))}function h(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,_);let p=0;for(let f=0;f<_;f++)p+=d[f];e.update(p,n,1)}function u(m,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)c(m[f]/a,d[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,m,0,g,0,_);let f=0;for(let w=0;w<_;w++)f+=d[w]*g[w];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jf(s,t,e){const n=new WeakMap,i=new te;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let m=n.get(o);if(m===void 0||m.count!==u){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;m!==void 0&&m.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*A*4*u),R=new Jl(C,T,A,u);R.type=un,R.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const F=f[L],k=w[L],W=E[L],X=T*A*4*L;for(let Y=0;Y<F.count;Y++){const Z=Y*M;_===!0&&(i.fromBufferAttribute(F,Y),C[X+Z+0]=i.x,C[X+Z+1]=i.y,C[X+Z+2]=i.z,C[X+Z+3]=0),g===!0&&(i.fromBufferAttribute(k,Y),C[X+Z+4]=i.x,C[X+Z+5]=i.y,C[X+Z+6]=i.z,C[X+Z+7]=0),p===!0&&(i.fromBufferAttribute(W,Y),C[X+Z+8]=i.x,C[X+Z+9]=i.y,C[X+Z+10]=i.z,C[X+Z+11]=W.itemSize===4?i.w:1)}}m={count:u,texture:R,size:new bt(T,A)},n.set(o,m),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:r}}function Zf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;i.get(m)!==c&&(m.update(),i.set(m,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const fc=new Re,cl=new lc(1,1),pc=new Jl,mc=new xh,gc=new rc,hl=[],ul=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function Gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=hl[i];if(r===void 0&&(r=new Float32Array(i),hl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function mr(s,t){let e=ul[t];e===void 0&&(e=new Int32Array(t),ul[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;pl.set(n),s.uniformMatrix2fv(this.addr,!1,pl),Se(e,n)}}function ip(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;fl.set(n),s.uniformMatrix3fv(this.addr,!1,fl),Se(e,n)}}function sp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;dl.set(n),s.uniformMatrix4fv(this.addr,!1,dl),Se(e,n)}}function rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function cp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cl.compareFunction=jl,r=cl):r=fc,e.setTexture2D(t||r,i)}function pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mc,i)}function mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gc,i)}function gp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pc,i)}function _p(s){switch(s){case 5126:return Jf;case 35664:return Qf;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}function xp(s,t){s.uniform1fv(this.addr,t)}function vp(s,t){const e=Gi(t,this.size,2);s.uniform2fv(this.addr,e)}function Mp(s,t){const e=Gi(t,this.size,3);s.uniform3fv(this.addr,e)}function Sp(s,t){const e=Gi(t,this.size,4);s.uniform4fv(this.addr,e)}function yp(s,t){const e=Gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ep(s,t){const e=Gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wp(s,t){const e=Gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tp(s,t){s.uniform1iv(this.addr,t)}function bp(s,t){s.uniform2iv(this.addr,t)}function Ap(s,t){s.uniform3iv(this.addr,t)}function Cp(s,t){s.uniform4iv(this.addr,t)}function Rp(s,t){s.uniform1uiv(this.addr,t)}function Pp(s,t){s.uniform2uiv(this.addr,t)}function Lp(s,t){s.uniform3uiv(this.addr,t)}function Dp(s,t){s.uniform4uiv(this.addr,t)}function Ip(s,t,e){const n=this.cache,i=t.length,r=mr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fc,r[a])}function Up(s,t,e){const n=this.cache,i=t.length,r=mr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mc,r[a])}function Np(s,t,e){const n=this.cache,i=t.length,r=mr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gc,r[a])}function Fp(s,t,e){const n=this.cache,i=t.length,r=mr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pc,r[a])}function Op(s){switch(s){case 5126:return xp;case 35664:return vp;case 35665:return Mp;case 35666:return Sp;case 35674:return yp;case 35675:return Ep;case 35676:return wp;case 5124:case 35670:return Tp;case 35667:case 35671:return bp;case 35668:case 35672:return Ap;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Fp}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_p(e.type)}}class zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Op(e.type)}}class kp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function ml(s,t){s.seq.push(t),s.map[t.id]=t}function Hp(s,t,e){const n=s.name,i=n.length;for(Qr.lastIndex=0;;){const r=Qr.exec(n),a=Qr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ml(e,c===void 0?new Bp(o,s,t):new zp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new kp(o),ml(e,u)),e=u}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Hp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function gl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Gp=37297;let Vp=0;function Wp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const _l=new zt;function Xp(s){Yt._getMatrix(_l,Yt.workingColorSpace,s);const t=`mat3( ${_l.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case sr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function xl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wp(s.getShaderSource(t),o)}else return r}function qp(s,t){const e=Xp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yp(s,t){let e;switch(t){case Nl:e="Linear";break;case Fl:e="Reinhard";break;case Ol:e="Cineon";break;case Ja:e="ACESFilmic";break;case zl:e="AgX";break;case kl:e="Neutral";break;case Bl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new D;function $p(){Yt.getLuminanceCoefficients(Xs);const s=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function jp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function rs(s){return s!==""}function vl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(Jp,tm)}const Qp=new Map;function tm(s,t){let e=Ht[t];if(e===void 0){const n=Qp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(s){return s.replace(em,nm)}function nm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function im(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function sm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rm(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Oi&&(t="ENVMAP_MODE_REFRACTION"),t}function am(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Zc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function om(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=im(e),c=sm(e),h=rm(e),u=am(e),m=om(e),d=Kp(e),_=jp(r),g=i.createProgram();let p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(rs).join(`
`),f.length>0&&(f+=`
`)):(p=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),f=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,qp("linearToOutputTexel",e.outputColorSpace),$p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),a=Ya(a),a=vl(a,e),a=Ml(a,e),o=Ya(o),o=vl(o,e),o=Ml(o,e),a=Sl(a),o=Sl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=w+p+a,v=w+f+o,T=gl(i,i.VERTEX_SHADER,E),A=gl(i,i.FRAGMENT_SHADER,v);i.attachShader(g,T),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(A)||"",X=F.trim(),Y=k.trim(),Z=W.trim();let H=!0,ot=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,A);else{const dt=xl(i,T,"vertex"),At=xl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+dt+`
`+At)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||Z==="")&&(ot=!1);ot&&(L.diagnostics={runnable:H,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:Z,prefix:f}})}i.deleteShader(T),i.deleteShader(A),R=new Qs(i,g),M=Zp(i,g)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Gp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let cm=0;class hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new um(t),e.set(t,n)),n}}class um{constructor(t){this.id=cm++,this.code=t,this.usedTimes=0}}function dm(s,t,e,n,i,r,a){const o=new Ql,l=new hm,c=new Set,h=[],u=i.logarithmicDepthBuffer,m=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,L,F,k){const W=F.fog,X=k.geometry,Y=M.isMeshStandardMaterial?F.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),H=Z&&Z.mapping===ur?Z.image.height:null,ot=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=dt!==void 0?dt.length:0;let Gt=0;X.morphAttributes.position!==void 0&&(Gt=1),X.morphAttributes.normal!==void 0&&(Gt=2),X.morphAttributes.color!==void 0&&(Gt=3);let ie,oe,Kt,$;if(ot){const jt=ln[ot];ie=jt.vertexShader,oe=jt.fragmentShader}else ie=M.vertexShader,oe=M.fragmentShader,l.update(M),Kt=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);const J=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Nt=k.isInstancedMesh===!0,Tt=k.isBatchedMesh===!0,Xt=!!M.map,we=!!M.matcap,P=!!Z,le=!!M.aoMap,Ot=!!M.lightMap,It=!!M.bumpMap,xt=!!M.normalMap,ce=!!M.displacementMap,vt=!!M.emissiveMap,kt=!!M.metalnessMap,ye=!!M.roughnessMap,pe=M.anisotropy>0,b=M.clearcoat>0,x=M.dispersion>0,O=M.iridescence>0,q=M.sheen>0,j=M.transmission>0,V=pe&&!!M.anisotropyMap,Et=b&&!!M.clearcoatMap,it=b&&!!M.clearcoatNormalMap,Mt=b&&!!M.clearcoatRoughnessMap,St=O&&!!M.iridescenceMap,et=O&&!!M.iridescenceThicknessMap,ht=q&&!!M.sheenColorMap,Dt=q&&!!M.sheenRoughnessMap,yt=!!M.specularMap,lt=!!M.specularColorMap,Bt=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,nt=j&&!!M.thicknessMap,rt=!!M.gradientMap,pt=!!M.alphaMap,Q=M.alphaTest>0,K=!!M.alphaHash,_t=!!M.extensions;let Ft=Fn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const se={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:oe,defines:M.defines,customVertexShaderID:Kt,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bi,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:we,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:H,aoMap:le,lightMap:Ot,bumpMap:It,normalMap:xt,displacementMap:m&&ce,emissiveMap:vt,normalMapObjectSpace:xt&&M.normalMapType===nh,normalMapTangentSpace:xt&&M.normalMapType===Kl,metalnessMap:kt,roughnessMap:ye,anisotropy:pe,anisotropyMap:V,clearcoat:b,clearcoatMap:Et,clearcoatNormalMap:it,clearcoatRoughnessMap:Mt,dispersion:x,iridescence:O,iridescenceMap:St,iridescenceThicknessMap:et,sheen:q,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:yt,specularColorMap:lt,specularIntensityMap:Bt,transmission:j,transmissionMap:I,thicknessMap:nt,gradientMap:rt,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:K,combine:M.combine,mapUv:Xt&&g(M.map.channel),aoMapUv:le&&g(M.aoMap.channel),lightMapUv:Ot&&g(M.lightMap.channel),bumpMapUv:It&&g(M.bumpMap.channel),normalMapUv:xt&&g(M.normalMap.channel),displacementMapUv:ce&&g(M.displacementMap.channel),emissiveMapUv:vt&&g(M.emissiveMap.channel),metalnessMapUv:kt&&g(M.metalnessMap.channel),roughnessMapUv:ye&&g(M.roughnessMap.channel),anisotropyMapUv:V&&g(M.anisotropyMap.channel),clearcoatMapUv:Et&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(M.sheenRoughnessMap.channel),specularMapUv:yt&&g(M.specularMap.channel),specularColorMapUv:lt&&g(M.specularColorMap.channel),specularIntensityMapUv:Bt&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:nt&&g(M.thicknessMap.channel),alphaMapUv:pt&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Xt||pt),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:vt&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qe,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(w(y,M),E(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const y=_[M.type];let L;if(y){const F=ln[y];L=fs.clone(F.uniforms)}else L=M.uniforms;return L}function T(M,y){let L;for(let F=0,k=h.length;F<k;F++){const W=h[F];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new lm(s,y,M,r),h.push(L)),L}function A(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:R}}function fm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function pm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function El(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,m,d,_,g,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:m,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=m,f.material=d,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,m,d,_,g,p){const f=a(u,m,d,_,g,p);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):e.push(f)}function l(u,m,d,_,g,p){const f=a(u,m,d,_,g,p);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,m){e.length>1&&e.sort(u||pm),n.length>1&&n.sort(m||El),i.length>1&&i.sort(m||El)}function h(){for(let u=t,m=s.length;u<m;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function mm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new wl,s.set(n,[a])):i>=r.length?(a=new wl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Pt};break;case"SpotLight":e={position:new D,direction:new D,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function _m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xm=0;function vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mm(s){const t=new gm,e=_m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ee,a=new ee;function o(c){let h=0,u=0,m=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,p=0,f=0,w=0,E=0,v=0,T=0,A=0,C=0;c.sort(vm);for(let M=0,y=c.length;M<y;M++){const L=c[M],F=L.color,k=L.intensity,W=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*k,u+=F.g*k,m+=F.b*k;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],k);C++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=L.shadow.matrix,w++}n.directional[d]=Y,d++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(k),Y.distance=W,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[g]=Y;const Z=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[g]=Z.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=X,v++}g++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(F).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=Y,p++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const Z=L.shadow,H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=Y,_++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k),Y.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[f]=Y,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=m;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==f||R.numDirectionalShadows!==w||R.numPointShadows!==E||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=f,R.numDirectionalShadows=w,R.numPointShadows=E,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=C,n.version=xm++)}function l(c,h){let u=0,m=0,d=0,_=0,g=0;const p=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const E=c[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),u++}else if(E.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(E.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const v=n.point[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Tl(s){const t=new Mm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Sm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Tl(s),t.set(i,[o])):r>=a.length?(o=new Tl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
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
}`;function wm(s,t,e){let n=new co;const i=new bt,r=new bt,a=new te,o=new qh({depthPacking:eh}),l=new Yh,c={},h=e.maxTextureSize,u={[Bn]:Ue,[Ue]:Bn,[Qe]:Qe},m=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:ym,fragmentShader:Em}),d=m.clone();d.defines.HORIZONTAL_PASS=1;const _=new _e;_.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new G(_,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let f=this.type;this.render=function(A,C,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Tn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=f!==wn&&this.type===wn,W=f===wn&&this.type!==wn;for(let X=0,Y=A.length;X<Y;X++){const Z=A[X],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ot=H.getFrameExtents();if(i.multiply(ot),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||k===!0||W===!0){const At=this.type!==wn?{minFilter:Ye,magFilter:Ye}:{};H.map!==null&&H.map.dispose(),H.map=new an(i.x,i.y,At),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const dt=H.getViewportCount();for(let At=0;At<dt;At++){const Gt=H.getViewport(At);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),F.viewport(a),H.updateMatrices(Z,At),n=H.getFrustum(),v(C,R,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===wn&&w(H,R),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(M,y,L)};function w(A,C){const R=t.update(g);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new an(i.x,i.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,R,m,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,R,d,g,null)}function E(A,C,R,M){let y=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=R.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=y.uuid,k=C.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let X=W[k];X===void 0&&(X=y.clone(),W[k]=X,C.addEventListener("dispose",T)),y=X}if(y.visible=C.visible,y.wireframe=C.wireframe,M===wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=R}return y}function v(A,C,R,M,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=t.update(A),W=A.material;if(Array.isArray(W)){const X=k.groups;for(let Y=0,Z=X.length;Y<Z;Y++){const H=X[Y],ot=W[H.materialIndex];if(ot&&ot.visible){const dt=E(A,ot,M,y);A.onBeforeShadow(s,A,C,R,k,dt,H),s.renderBufferDirect(R,null,k,dt,A,H),A.onAfterShadow(s,A,C,R,k,dt,H)}}}else if(W.visible){const X=E(A,W,M,y);A.onBeforeShadow(s,A,C,R,k,X,null),s.renderBufferDirect(R,null,k,X,A,null),A.onAfterShadow(s,A,C,R,k,X,null)}}const F=A.children;for(let k=0,W=F.length;k<W;k++)v(F[k],C,R,M,y)}function T(A){A.target.removeEventListener("dispose",T);for(const R in c){const M=c[R],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Tm={[aa]:oa,[la]:ua,[ca]:da,[Ni]:ha,[oa]:aa,[ua]:la,[da]:ca,[ha]:Ni};function bm(s,t){function e(){let I=!1;const nt=new te;let rt=null;const pt=new te(0,0,0,0);return{setMask:function(Q){rt!==Q&&!I&&(s.colorMask(Q,Q,Q,Q),rt=Q)},setLocked:function(Q){I=Q},setClear:function(Q,K,_t,Ft,se){se===!0&&(Q*=Ft,K*=Ft,_t*=Ft),nt.set(Q,K,_t,Ft),pt.equals(nt)===!1&&(s.clearColor(Q,K,_t,Ft),pt.copy(nt))},reset:function(){I=!1,rt=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,nt=!1,rt=null,pt=null,Q=null;return{setReversed:function(K){if(nt!==K){const _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),nt=K;const Ft=Q;Q=null,this.setClear(Ft)}},getReversed:function(){return nt},setTest:function(K){K?J(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(K){rt!==K&&!I&&(s.depthMask(K),rt=K)},setFunc:function(K){if(nt&&(K=Tm[K]),pt!==K){switch(K){case aa:s.depthFunc(s.NEVER);break;case oa:s.depthFunc(s.ALWAYS);break;case la:s.depthFunc(s.LESS);break;case Ni:s.depthFunc(s.LEQUAL);break;case ca:s.depthFunc(s.EQUAL);break;case ha:s.depthFunc(s.GEQUAL);break;case ua:s.depthFunc(s.GREATER);break;case da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=K}},setLocked:function(K){I=K},setClear:function(K){Q!==K&&(nt&&(K=1-K),s.clearDepth(K),Q=K)},reset:function(){I=!1,rt=null,pt=null,Q=null,nt=!1}}}function i(){let I=!1,nt=null,rt=null,pt=null,Q=null,K=null,_t=null,Ft=null,se=null;return{setTest:function(jt){I||(jt?J(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(jt){nt!==jt&&!I&&(s.stencilMask(jt),nt=jt)},setFunc:function(jt,_n,on){(rt!==jt||pt!==_n||Q!==on)&&(s.stencilFunc(jt,_n,on),rt=jt,pt=_n,Q=on)},setOp:function(jt,_n,on){(K!==jt||_t!==_n||Ft!==on)&&(s.stencilOp(jt,_n,on),K=jt,_t=_n,Ft=on)},setLocked:function(jt){I=jt},setClear:function(jt){se!==jt&&(s.clearStencil(jt),se=jt)},reset:function(){I=!1,nt=null,rt=null,pt=null,Q=null,K=null,_t=null,Ft=null,se=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},m=new WeakMap,d=[],_=null,g=!1,p=null,f=null,w=null,E=null,v=null,T=null,A=null,C=new Pt(0,0,0),R=0,M=!1,y=null,L=null,F=null,k=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=Z>=2);let ot=null,dt={};const At=s.getParameter(s.SCISSOR_BOX),Gt=s.getParameter(s.VIEWPORT),ie=new te().fromArray(At),oe=new te().fromArray(Gt);function Kt(I,nt,rt,pt){const Q=new Uint8Array(4),K=s.createTexture();s.bindTexture(I,K),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<rt;_t++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(nt+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return K}const $={};$[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(Ni),It(!1),xt(So),J(s.CULL_FACE),le(Tn);function J(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function mt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Nt(I,nt){return u[I]!==nt?(s.bindFramebuffer(I,nt),u[I]=nt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Tt(I,nt){let rt=d,pt=!1;if(I){rt=m.get(nt),rt===void 0&&(rt=[],m.set(nt,rt));const Q=I.textures;if(rt.length!==Q.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,_t=Q.length;K<_t;K++)rt[K]=s.COLOR_ATTACHMENT0+K;rt.length=Q.length,pt=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(rt)}function Xt(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const we={[ti]:s.FUNC_ADD,[Uc]:s.FUNC_SUBTRACT,[Nc]:s.FUNC_REVERSE_SUBTRACT};we[Fc]=s.MIN,we[Oc]=s.MAX;const P={[Bc]:s.ZERO,[zc]:s.ONE,[kc]:s.SRC_COLOR,[sa]:s.SRC_ALPHA,[qc]:s.SRC_ALPHA_SATURATE,[Wc]:s.DST_COLOR,[Gc]:s.DST_ALPHA,[Hc]:s.ONE_MINUS_SRC_COLOR,[ra]:s.ONE_MINUS_SRC_ALPHA,[Xc]:s.ONE_MINUS_DST_COLOR,[Vc]:s.ONE_MINUS_DST_ALPHA,[Yc]:s.CONSTANT_COLOR,[$c]:s.ONE_MINUS_CONSTANT_COLOR,[Kc]:s.CONSTANT_ALPHA,[jc]:s.ONE_MINUS_CONSTANT_ALPHA};function le(I,nt,rt,pt,Q,K,_t,Ft,se,jt){if(I===Tn){g===!0&&(mt(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),I!==Ic){if(I!==p||jt!==M){if((f!==ti||v!==ti)&&(s.blendEquation(s.FUNC_ADD),f=ti,v=ti),jt)switch(I){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xe:s.blendFunc(s.ONE,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xe:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,T=null,A=null,C.set(0,0,0),R=0,p=I,M=jt}return}Q=Q||nt,K=K||rt,_t=_t||pt,(nt!==f||Q!==v)&&(s.blendEquationSeparate(we[nt],we[Q]),f=nt,v=Q),(rt!==w||pt!==E||K!==T||_t!==A)&&(s.blendFuncSeparate(P[rt],P[pt],P[K],P[_t]),w=rt,E=pt,T=K,A=_t),(Ft.equals(C)===!1||se!==R)&&(s.blendColor(Ft.r,Ft.g,Ft.b,se),C.copy(Ft),R=se),p=I,M=!1}function Ot(I,nt){I.side===Qe?mt(s.CULL_FACE):J(s.CULL_FACE);let rt=I.side===Ue;nt&&(rt=!rt),It(rt),I.blending===Ii&&I.transparent===!1?le(Tn):le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const pt=I.stencilWrite;o.setTest(pt),pt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function xt(I){I!==Pc?(J(s.CULL_FACE),I!==L&&(I===So?s.cullFace(s.BACK):I===Lc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),L=I}function ce(I){I!==F&&(Y&&s.lineWidth(I),F=I)}function vt(I,nt,rt){I?(J(s.POLYGON_OFFSET_FILL),(k!==nt||W!==rt)&&(s.polygonOffset(nt,rt),k=nt,W=rt)):mt(s.POLYGON_OFFSET_FILL)}function kt(I){I?J(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function ye(I){I===void 0&&(I=s.TEXTURE0+X-1),ot!==I&&(s.activeTexture(I),ot=I)}function pe(I,nt,rt){rt===void 0&&(ot===null?rt=s.TEXTURE0+X-1:rt=ot);let pt=dt[rt];pt===void 0&&(pt={type:void 0,texture:void 0},dt[rt]=pt),(pt.type!==I||pt.texture!==nt)&&(ot!==rt&&(s.activeTexture(rt),ot=rt),s.bindTexture(I,nt||$[I]),pt.type=I,pt.texture=nt)}function b(){const I=dt[ot];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){ie.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function Dt(I){oe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),oe.copy(I))}function yt(I,nt){let rt=c.get(nt);rt===void 0&&(rt=new WeakMap,c.set(nt,rt));let pt=rt.get(I);pt===void 0&&(pt=s.getUniformBlockIndex(nt,I.name),rt.set(I,pt))}function lt(I,nt){const pt=c.get(nt).get(I);l.get(nt)!==pt&&(s.uniformBlockBinding(nt,pt,I.__bindingPointIndex),l.set(nt,pt))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,dt={},u={},m=new WeakMap,d=[],_=null,g=!1,p=null,f=null,w=null,E=null,v=null,T=null,A=null,C=new Pt(0,0,0),R=0,M=!1,y=null,L=null,F=null,k=null,W=null,ie.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:mt,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Xt,setBlending:le,setMaterial:Ot,setFlipSided:It,setCullFace:xt,setLineWidth:ce,setPolygonOffset:vt,setScissorTest:kt,activeTexture:ye,bindTexture:pe,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:St,texImage3D:et,updateUBOMapping:yt,uniformBlockBinding:lt,texStorage2D:it,texStorage3D:Mt,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:Et,scissor:ht,viewport:Dt,reset:Bt}}function Am(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap;let u;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return d?new OffscreenCanvas(b,x):ar("canvas")}function g(b,x,O){let q=1;const j=pe(b);if((j.width>O||j.height>O)&&(q=O/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(q*j.width),Et=Math.floor(q*j.height);u===void 0&&(u=_(V,Et));const it=x?_(V,Et):u;return it.width=V,it.height=Et,it.getContext("2d").drawImage(b,0,0,V,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+Et+")."),it}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps}function f(b){s.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,x,O,q,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=x;if(x===s.RED&&(O===s.FLOAT&&(V=s.R32F),O===s.HALF_FLOAT&&(V=s.R16F),O===s.UNSIGNED_BYTE&&(V=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.R8UI),O===s.UNSIGNED_SHORT&&(V=s.R16UI),O===s.UNSIGNED_INT&&(V=s.R32UI),O===s.BYTE&&(V=s.R8I),O===s.SHORT&&(V=s.R16I),O===s.INT&&(V=s.R32I)),x===s.RG&&(O===s.FLOAT&&(V=s.RG32F),O===s.HALF_FLOAT&&(V=s.RG16F),O===s.UNSIGNED_BYTE&&(V=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RG8UI),O===s.UNSIGNED_SHORT&&(V=s.RG16UI),O===s.UNSIGNED_INT&&(V=s.RG32UI),O===s.BYTE&&(V=s.RG8I),O===s.SHORT&&(V=s.RG16I),O===s.INT&&(V=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RGB8UI),O===s.UNSIGNED_SHORT&&(V=s.RGB16UI),O===s.UNSIGNED_INT&&(V=s.RGB32UI),O===s.BYTE&&(V=s.RGB8I),O===s.SHORT&&(V=s.RGB16I),O===s.INT&&(V=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),O===s.UNSIGNED_INT&&(V=s.RGBA32UI),O===s.BYTE&&(V=s.RGBA8I),O===s.SHORT&&(V=s.RGBA16I),O===s.INT&&(V=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),x===s.RGBA){const Et=j?sr:Yt.getTransfer(q);O===s.FLOAT&&(V=s.RGBA32F),O===s.HALF_FLOAT&&(V=s.RGBA16F),O===s.UNSIGNED_BYTE&&(V=Et===Zt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(b,x){let O;return b?x===null||x===si||x===cs?O=s.DEPTH24_STENCIL8:x===un?O=s.DEPTH32F_STENCIL8:x===ls&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===si||x===cs?O=s.DEPTH_COMPONENT24:x===un?O=s.DEPTH_COMPONENT32F:x===ls&&(O=s.DEPTH_COMPONENT16),O}function T(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ye&&b.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){const x=b.target;x.removeEventListener("dispose",A),R(x),x.isVideoTexture&&h.delete(x)}function C(b){const x=b.target;x.removeEventListener("dispose",C),y(x)}function R(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,q=m.get(O);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(b),Object.keys(q).length===0&&m.delete(O)}n.remove(b)}function M(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const O=b.source,q=m.get(O);delete q[x.__cacheKey],a.memory.textures--}function y(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)s.deleteFramebuffer(x.__webglFramebuffer[q][j]);else s.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)s.deleteFramebuffer(x.__webglFramebuffer[q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,j=O.length;q<j;q++){const V=n.get(O[q]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(b)}let L=0;function F(){L=0}function k(){const b=L;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),L+=1,b}function W(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){const O=n.get(b);if(b.isVideoTexture&&kt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function Y(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){$(O,b,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Z(b,x){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){$(O,b,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function H(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){J(O,b,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const ot={[os]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[pa]:s.MIRRORED_REPEAT},dt={[Ye]:s.NEAREST,[Qc]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[xr]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},At={[ih]:s.NEVER,[ch]:s.ALWAYS,[sh]:s.LESS,[jl]:s.LEQUAL,[rh]:s.EQUAL,[lh]:s.GEQUAL,[ah]:s.GREATER,[oh]:s.NOTEQUAL};function Gt(b,x){if(x.type===un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===xr||x.magFilter===_s||x.magFilter===ii||x.minFilter===hn||x.minFilter===xr||x.minFilter===_s||x.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ot[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ot[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ot[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,dt[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,dt[x.minFilter]),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==_s&&x.minFilter!==ii||x.type===un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const q=x.source;let j=m.get(q);j===void 0&&(j={},m.set(q,j));const V=W(x);if(V!==b.__cacheKey){j[V]===void 0&&(j[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[V].usedTimes++;const Et=j[b.__cacheKey];Et!==void 0&&(j[b.__cacheKey].usedTimes--,Et.usedTimes===0&&M(x)),b.__cacheKey=V,b.__webglTexture=j[V].texture}return O}function oe(b,x,O){return Math.floor(Math.floor(b/O)/x)}function Kt(b,x,O,q){const V=b.updateRanges;if(V.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,q,x.data);else{V.sort((et,ht)=>et.start-ht.start);let Et=0;for(let et=1;et<V.length;et++){const ht=V[Et],Dt=V[et],yt=ht.start+ht.count,lt=oe(Dt.start,x.width,4),Bt=oe(ht.start,x.width,4);Dt.start<=yt+1&&lt===Bt&&oe(Dt.start+Dt.count-1,x.width,4)===lt?ht.count=Math.max(ht.count,Dt.start+Dt.count-ht.start):(++Et,V[Et]=Dt)}V.length=Et+1;const it=s.getParameter(s.UNPACK_ROW_LENGTH),Mt=s.getParameter(s.UNPACK_SKIP_PIXELS),St=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let et=0,ht=V.length;et<ht;et++){const Dt=V[et],yt=Math.floor(Dt.start/4),lt=Math.ceil(Dt.count/4),Bt=yt%x.width,I=Math.floor(yt/x.width),nt=lt,rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Bt,I,nt,rt,O,q,x.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,it),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function $(b,x,O){let q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=s.TEXTURE_3D);const j=ie(b,x),V=x.source;e.bindTexture(q,b.__webglTexture,s.TEXTURE0+O);const Et=n.get(V);if(V.version!==Et.__version||j===!0){e.activeTexture(s.TEXTURE0+O);const it=Yt.getPrimaries(Yt.workingColorSpace),Mt=x.colorSpace===Un?null:Yt.getPrimaries(x.colorSpace),St=x.colorSpace===Un||it===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let et=g(x.image,!1,i.maxTextureSize);et=ye(x,et);const ht=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type);let yt=E(x.internalFormat,ht,Dt,x.colorSpace,x.isVideoTexture);Gt(q,x);let lt;const Bt=x.mipmaps,I=x.isVideoTexture!==!0,nt=Et.__version===void 0||j===!0,rt=V.dataReady,pt=T(x,et);if(x.isDepthTexture)yt=v(x.format===us,x.type),nt&&(I?e.texStorage2D(s.TEXTURE_2D,1,yt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,yt,et.width,et.height,0,ht,Dt,null));else if(x.isDataTexture)if(Bt.length>0){I&&nt&&e.texStorage2D(s.TEXTURE_2D,pt,yt,Bt[0].width,Bt[0].height);for(let Q=0,K=Bt.length;Q<K;Q++)lt=Bt[Q],I?rt&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,lt.width,lt.height,ht,Dt,lt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,lt.width,lt.height,0,ht,Dt,lt.data);x.generateMipmaps=!1}else I?(nt&&e.texStorage2D(s.TEXTURE_2D,pt,yt,et.width,et.height),rt&&Kt(x,et,ht,Dt)):e.texImage2D(s.TEXTURE_2D,0,yt,et.width,et.height,0,ht,Dt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,yt,Bt[0].width,Bt[0].height,et.depth);for(let Q=0,K=Bt.length;Q<K;Q++)if(lt=Bt[Q],x.format!==rn)if(ht!==null)if(I){if(rt)if(x.layerUpdates.size>0){const _t=nl(lt.width,lt.height,x.format,x.type);for(const Ft of x.layerUpdates){const se=lt.data.subarray(Ft*_t/lt.data.BYTES_PER_ELEMENT,(Ft+1)*_t/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Ft,lt.width,lt.height,1,ht,se)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,ht,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,yt,lt.width,lt.height,et.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,et.depth,ht,Dt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,yt,lt.width,lt.height,et.depth,0,ht,Dt,lt.data)}else{I&&nt&&e.texStorage2D(s.TEXTURE_2D,pt,yt,Bt[0].width,Bt[0].height);for(let Q=0,K=Bt.length;Q<K;Q++)lt=Bt[Q],x.format!==rn?ht!==null?I?rt&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,lt.width,lt.height,ht,Dt,lt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,lt.width,lt.height,0,ht,Dt,lt.data)}else if(x.isDataArrayTexture)if(I){if(nt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,yt,et.width,et.height,et.depth),rt)if(x.layerUpdates.size>0){const Q=nl(et.width,et.height,x.format,x.type);for(const K of x.layerUpdates){const _t=et.data.subarray(K*Q/et.data.BYTES_PER_ELEMENT,(K+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ht,Dt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,et.width,et.height,et.depth,0,ht,Dt,et.data);else if(x.isData3DTexture)I?(nt&&e.texStorage3D(s.TEXTURE_3D,pt,yt,et.width,et.height,et.depth),rt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,yt,et.width,et.height,et.depth,0,ht,Dt,et.data);else if(x.isFramebufferTexture){if(nt)if(I)e.texStorage2D(s.TEXTURE_2D,pt,yt,et.width,et.height);else{let Q=et.width,K=et.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,yt,Q,K,0,ht,Dt,null),Q>>=1,K>>=1}}else if(Bt.length>0){if(I&&nt){const Q=pe(Bt[0]);e.texStorage2D(s.TEXTURE_2D,pt,yt,Q.width,Q.height)}for(let Q=0,K=Bt.length;Q<K;Q++)lt=Bt[Q],I?rt&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,ht,Dt,lt):e.texImage2D(s.TEXTURE_2D,Q,yt,ht,Dt,lt);x.generateMipmaps=!1}else if(I){if(nt){const Q=pe(et);e.texStorage2D(s.TEXTURE_2D,pt,yt,Q.width,Q.height)}rt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,yt,ht,Dt,et);p(x)&&f(q),Et.__version=V.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function J(b,x,O){if(x.image.length!==6)return;const q=ie(b,x),j=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const V=n.get(j);if(j.version!==V.__version||q===!0){e.activeTexture(s.TEXTURE0+O);const Et=Yt.getPrimaries(Yt.workingColorSpace),it=x.colorSpace===Un?null:Yt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Un||Et===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const St=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!St&&!et?ht[K]=g(x.image[K],!0,i.maxCubemapSize):ht[K]=et?x.image[K].image:x.image[K],ht[K]=ye(x,ht[K]);const Dt=ht[0],yt=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),Bt=E(x.internalFormat,yt,lt,x.colorSpace),I=x.isVideoTexture!==!0,nt=V.__version===void 0||q===!0,rt=j.dataReady;let pt=T(x,Dt);Gt(s.TEXTURE_CUBE_MAP,x);let Q;if(St){I&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Bt,Dt.width,Dt.height);for(let K=0;K<6;K++){Q=ht[K].mipmaps;for(let _t=0;_t<Q.length;_t++){const Ft=Q[_t];x.format!==rn?yt!==null?I?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Ft.width,Ft.height,yt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Bt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Ft.width,Ft.height,yt,lt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Bt,Ft.width,Ft.height,0,yt,lt,Ft.data)}}}else{if(Q=x.mipmaps,I&&nt){Q.length>0&&pt++;const K=pe(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(et){I?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,yt,lt,ht[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,ht[K].width,ht[K].height,0,yt,lt,ht[K].data);for(let _t=0;_t<Q.length;_t++){const se=Q[_t].image[K].image;I?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,se.width,se.height,yt,lt,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Bt,se.width,se.height,0,yt,lt,se.data)}}else{I?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,lt,ht[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,yt,lt,ht[K]);for(let _t=0;_t<Q.length;_t++){const Ft=Q[_t];I?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,yt,lt,Ft.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Bt,yt,lt,Ft.image[K])}}}p(x)&&f(s.TEXTURE_CUBE_MAP),V.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function mt(b,x,O,q,j,V){const Et=r.convert(O.format,O.colorSpace),it=r.convert(O.type),Mt=E(O.internalFormat,Et,it,O.colorSpace),St=n.get(x),et=n.get(O);if(et.__renderTarget=x,!St.__hasExternalTextures){const ht=Math.max(1,x.width>>V),Dt=Math.max(1,x.height>>V);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,V,Mt,ht,Dt,x.depth,0,Et,it,null):e.texImage2D(j,V,Mt,ht,Dt,0,Et,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),vt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,j,et.__webglTexture,0,ce(x)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,j,et.__webglTexture,V),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(b,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,V=v(x.stencilBuffer,j),Et=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=ce(x);vt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,V,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,V,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,V,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,b)}else{const q=x.textures;for(let j=0;j<q.length;j++){const V=q[j],Et=r.convert(V.format,V.colorSpace),it=r.convert(V.type),Mt=E(V.internalFormat,Et,it,V.colorSpace),St=ce(x);O&&vt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,Mt,x.width,x.height):vt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,Mt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const j=q.__webglTexture,V=ce(x);if(x.depthTexture.format===hs)vt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(x.depthTexture.format===us)vt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Xt(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?Tt(x.__webglFramebuffer[0],b):Tt(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=s.createRenderbuffer(),Nt(x.__webglDepthbuffer[q],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,V)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Nt(x.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,V)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function we(b,x,O){const q=n.get(b);x!==void 0&&mt(q.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Xt(b)}function P(b){const x=b.texture,O=n.get(b),q=n.get(x);b.addEventListener("dispose",C);const j=b.textures,V=b.isWebGLCubeRenderTarget===!0,Et=j.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=x.version,a.memory.textures++),V){O.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[it]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)O.__webglFramebuffer[it][Mt]=s.createFramebuffer()}else O.__webglFramebuffer[it]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)O.__webglFramebuffer[it]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Et)for(let it=0,Mt=j.length;it<Mt;it++){const St=n.get(j[it]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&vt(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const Mt=j[it];O.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[it]);const St=r.convert(Mt.format,Mt.colorSpace),et=r.convert(Mt.type),ht=E(Mt.internalFormat,St,et,Mt.colorSpace,b.isXRRenderTarget===!0),Dt=ce(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ht,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,O.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)mt(O.__webglFramebuffer[it][Mt],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt);else mt(O.__webglFramebuffer[it],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(x)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let it=0,Mt=j.length;it<Mt;it++){const St=j[it],et=n.get(St);let ht=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),Gt(ht,St),mt(O.__webglFramebuffer,b,St,s.COLOR_ATTACHMENT0+it,ht,0),p(St)&&f(ht)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(it=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Gt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)mt(O.__webglFramebuffer[Mt],b,x,s.COLOR_ATTACHMENT0,it,Mt);else mt(O.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,it,0);p(x)&&f(it),e.unbindTexture()}b.depthBuffer&&Xt(b)}function le(b){const x=b.textures;for(let O=0,q=x.length;O<q;O++){const j=x[O];if(p(j)){const V=w(b),Et=n.get(j).__webglTexture;e.bindTexture(V,Et),f(V),e.unbindTexture()}}}const Ot=[],It=[];function xt(b){if(b.samples>0){if(vt(b)===!1){const x=b.textures,O=b.width,q=b.height;let j=s.COLOR_BUFFER_BIT;const V=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(b),it=x.length>1;if(it)for(let St=0;St<x.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Mt=b.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let St=0;St<x.length;St++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const et=n.get(x[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,O,q,0,0,O,q,j,s.NEAREST),l===!0&&(Ot.length=0,It.length=0,Ot.push(s.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ot.push(V),It.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,It)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<x.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const et=n.get(x[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ce(b){return Math.min(i.maxSamples,b.samples)}function vt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function kt(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function ye(b,x){const O=b.colorSpace,q=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Bi&&O!==Un&&(Yt.getTransfer(O)===Zt?(q!==rn||j!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=we,this.setupRenderTarget=P,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=vt}function Cm(s,t){function e(n,i=Un){let r;const a=Yt.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===to)return s.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return s.BYTE;if(n===Vl)return s.SHORT;if(n===ls)return s.UNSIGNED_SHORT;if(n===Qa)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===bn)return s.HALF_FLOAT;if(n===ql)return s.ALPHA;if(n===Yl)return s.RGB;if(n===rn)return s.RGBA;if(n===hs)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===no)return s.RED;if(n===io)return s.RED_INTEGER;if(n===$l)return s.RG;if(n===so)return s.RG_INTEGER;if(n===ro)return s.RGBA_INTEGER;if(n===$s||n===Ks||n===js||n===Zs)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===Ma)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ea||n===wa||n===Ta||n===ba||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Ha||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new cc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ce({vertexShader:Rm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new G(new Ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dm extends Hi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,m=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",p=new Lm,f={},w=e.getContextAttributes();let E=null,v=null;const T=[],A=[],C=new bt;let R=null;const M=new Xe;M.viewport=new te;const y=new Xe;y.viewport=new te;const L=[M,y],F=new Jh;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=T[$];return J===void 0&&(J=new Hr,T[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=T[$];return J===void 0&&(J=new Hr,T[$]=J),J.getGripSpace()},this.getHand=function($){let J=T[$];return J===void 0&&(J=new Hr,T[$]=J),J.getHandSpace()};function X($){const J=A.indexOf($.inputSource);if(J===-1)return;const mt=T[J];mt!==void 0&&(mt.update($.inputSource,$.frame,c||a),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<T.length;$++){const J=A[$];J!==null&&(A[$]=null,T[$].disconnect(J))}k=null,W=null,p.reset();for(const $ in f)delete f[$];t.setRenderTarget(E),d=null,m=null,u=null,i=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,Tt=null;w.depth&&(Tt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=w.stencil?us:hs,Nt=w.stencil?cs:si);const Xt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),m=u.createProjectionLayer(Xt),i.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),v=new an(m.textureWidth,m.textureHeight,{format:rn,type:pn,depthTexture:new lc(m.textureWidth,m.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new an(d.framebufferWidth,d.framebufferHeight,{format:rn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Z($){for(let J=0;J<$.removed.length;J++){const mt=$.removed[J],Nt=A.indexOf(mt);Nt>=0&&(A[Nt]=null,T[Nt].disconnect(mt))}for(let J=0;J<$.added.length;J++){const mt=$.added[J];let Nt=A.indexOf(mt);if(Nt===-1){for(let Xt=0;Xt<T.length;Xt++)if(Xt>=A.length){A.push(mt),Nt=Xt;break}else if(A[Xt]===null){A[Xt]=mt,Nt=Xt;break}if(Nt===-1)break}const Tt=T[Nt];Tt&&Tt.connect(mt)}}const H=new D,ot=new D;function dt($,J,mt){H.setFromMatrixPosition(J.matrixWorld),ot.setFromMatrixPosition(mt.matrixWorld);const Nt=H.distanceTo(ot),Tt=J.projectionMatrix.elements,Xt=mt.projectionMatrix.elements,we=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),le=(Tt[9]+1)/Tt[5],Ot=(Tt[9]-1)/Tt[5],It=(Tt[8]-1)/Tt[0],xt=(Xt[8]+1)/Xt[0],ce=we*It,vt=we*xt,kt=Nt/(-It+xt),ye=kt*-It;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ye),$.translateZ(kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const pe=we+kt,b=P+kt,x=ce-ye,O=vt+(Nt-ye),q=le*P/b*pe,j=Ot*P/b*pe;$.projectionMatrix.makePerspective(x,O,q,j,pe,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function At($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,mt=$.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(mt=p.depthFar)),F.near=y.near=M.near=J,F.far=y.far=M.far=mt,(k!==F.near||W!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,W=F.far),F.layers.mask=$.layers.mask|6,M.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Nt=$.parent,Tt=F.cameras;At(F,Nt);for(let Xt=0;Xt<Tt.length;Xt++)At(Tt[Xt],Nt);Tt.length===2?dt(F,M,y):F.projectionMatrix.copy(M.projectionMatrix),Gt($,F,Nt)};function Gt($,J,mt){mt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(m===null&&d===null))return l},this.setFoveation=function($){l=$,m!==null&&(m.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function($){return f[$]};let ie=null;function oe($,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Nt=!1;mt.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let P=0;P<mt.length;P++){const le=mt[P];let Ot=null;if(d!==null)Ot=d.getViewport(le);else{const xt=u.getViewSubImage(m,le);Ot=xt.viewport,P===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let It=L[P];It===void 0&&(It=new Xe,It.layers.enable(P),It.viewport=new te,L[P]=It),It.matrix.fromArray(le.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(le.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),P===0&&(F.matrix.copy(It.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(It)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const P=u.getDepthInformation(mt[0]);P&&P.isValid&&P.texture&&p.init(P,i.renderState)}if(Tt&&Tt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<mt.length;P++){const le=mt[P].camera;if(le){let Ot=f[le];Ot||(Ot=new cc,f[le]=Ot);const It=u.getCameraImage(le);Ot.sourceTexture=It}}}}for(let mt=0;mt<T.length;mt++){const Nt=A[mt],Tt=T[mt];Nt!==null&&Tt!==void 0&&Tt.update(Nt,J,c||a)}ie&&ie($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Kt=new dc;Kt.setAnimationLoop(oe),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}}const $n=new mn,Im=new ee;function Um(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ic(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,w,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),m(p,f),f.isMeshPhysicalMaterial&&d(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,w,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ue&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ue&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=t.get(f),E=w.envMap,v=w.envMapRotation;E&&(p.envMap.value=E,$n.copy(v),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),p.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler($n)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=E*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const v=E.program;n.uniformBlockBinding(w,v)}function c(w,E){let v=i[w.id];v===void 0&&(_(w),v=h(w),i[w.id]=v,w.addEventListener("dispose",p));const T=E.program;n.updateUBOMapping(w,T);const A=t.render.frame;r[w.id]!==A&&(m(w),r[w.id]=A)}function h(w){const E=u();w.__bindingPointIndex=E;const v=s.createBuffer(),T=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const E=i[w.id],v=w.uniforms,T=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,C=v.length;A<C;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,y=R.length;M<y;M++){const L=R[M];if(d(L,A,M,T)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let X=0;X<k.length;X++){const Y=k[X],Z=g(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,F+W,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,E,v,T){const A=w.value,C=E+"_"+v;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const R=T[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return T[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(w){const E=w.uniforms;let v=0;const T=16;for(let C=0,R=E.length;C<R;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,L=M.length;y<L;y++){const F=M[y],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=k.length;W<X;W++){const Y=k[W],Z=g(Y),H=v%T,ot=H%Z.boundary,dt=H+ot;v+=ot,dt!==0&&T-dt<Z.storage&&(v+=T-dt),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Z.storage}}}const A=v%T;return A>0&&(v+=T-A),w.__size=v,w.__cache={},this}function g(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){const E=w.target;E.removeEventListener("dispose",p);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Fm{constructor(t={}){const{canvas:e=uh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Fe;let A=0,C=0,R=null,M=-1,y=null;const L=new te,F=new te;let k=null;const W=new Pt(0);let X=0,Y=e.width,Z=e.height,H=1,ot=null,dt=null;const At=new te(0,0,Y,Z),Gt=new te(0,0,Y,Z);let ie=!1;const oe=new co;let Kt=!1,$=!1;const J=new ee,mt=new D,Nt=new te,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function we(){return R===null?H:1}let P=n;function le(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",Q,!1),P===null){const U="webgl2";if(P=le(U,S),P===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ot,It,xt,ce,vt,kt,ye,pe,b,x,O,q,j,V,Et,it,Mt,St,et,ht,Dt,yt,lt,Bt;function I(){Ot=new qf(P),Ot.init(),yt=new Cm(P,Ot),It=new zf(P,Ot,t,yt),xt=new bm(P,Ot),It.reversedDepthBuffer&&m&&xt.buffers.depth.setReversed(!0),ce=new Kf(P),vt=new fm,kt=new Am(P,Ot,xt,vt,It,yt,ce),ye=new Hf(v),pe=new Xf(v),b=new tu(P),lt=new Of(P,b),x=new Yf(P,b,ce,lt),O=new Zf(P,x,b,ce),et=new jf(P,It,kt),it=new kf(vt),q=new dm(v,ye,pe,Ot,It,lt,it),j=new Um(v,vt),V=new mm,Et=new Sm(Ot),St=new Ff(v,ye,pe,xt,O,d,l),Mt=new wm(v,O,It),Bt=new Nm(P,ce,It,xt),ht=new Bf(P,Ot,ce),Dt=new $f(P,Ot,ce),ce.programs=q.programs,v.capabilities=It,v.extensions=Ot,v.properties=vt,v.renderLists=V,v.shadowMap=Mt,v.state=xt,v.info=ce}I();const nt=new Dm(v,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(Y,Z,!1))},this.getSize=function(S){return S.set(Y,Z)},this.setSize=function(S,U,B=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,Z=U,e.width=Math.floor(S*H),e.height=Math.floor(U*H),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*H,Z*H).floor()},this.setDrawingBufferSize=function(S,U,B){Y=S,Z=U,H=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,U,B,z){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,U,B,z),xt.viewport(L.copy(At).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,U,B,z){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,U,B,z),xt.scissor(F.copy(Gt).multiplyScalar(H).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){xt.setScissorTest(ie=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){dt=S},this.getClearColor=function(S){return S.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,B=!0){let z=0;if(S){let N=!1;if(R!==null){const tt=R.texture.format;N=tt===ro||tt===so||tt===io}if(N){const tt=R.texture.type,ct=tt===pn||tt===si||tt===ls||tt===cs||tt===to||tt===eo,gt=St.getClearColor(),ft=St.getClearAlpha(),Lt=gt.r,Ut=gt.g,Ct=gt.b;ct?(_[0]=Lt,_[1]=Ut,_[2]=Ct,_[3]=ft,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Lt,g[1]=Ut,g[2]=Ct,g[3]=ft,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),St.dispose(),V.dispose(),Et.dispose(),vt.dispose(),ye.dispose(),pe.dispose(),O.dispose(),lt.dispose(),Bt.dispose(),q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",on),nt.removeEventListener("sessionend",mo),Hn.stop()};function rt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ce.autoReset,U=Mt.enabled,B=Mt.autoUpdate,z=Mt.needsUpdate,N=Mt.type;I(),ce.autoReset=S,Mt.enabled=U,Mt.autoUpdate=B,Mt.needsUpdate=z,Mt.type=N}function Q(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function K(S){const U=S.target;U.removeEventListener("dispose",K),_t(U)}function _t(S){Ft(S),vt.remove(S)}function Ft(S){const U=vt.get(S).programs;U!==void 0&&(U.forEach(function(B){q.releaseProgram(B)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,z,N,tt){U===null&&(U=Tt);const ct=N.isMesh&&N.matrixWorld.determinant()<0,gt=wc(S,U,B,z,N);xt.setMaterial(z,ct);let ft=B.index,Lt=1;if(z.wireframe===!0){if(ft=x.getWireframeAttribute(B),ft===void 0)return;Lt=2}const Ut=B.drawRange,Ct=B.attributes.position;let Vt=Ut.start*Lt,Jt=(Ut.start+Ut.count)*Lt;tt!==null&&(Vt=Math.max(Vt,tt.start*Lt),Jt=Math.min(Jt,(tt.start+tt.count)*Lt)),ft!==null?(Vt=Math.max(Vt,0),Jt=Math.min(Jt,ft.count)):Ct!=null&&(Vt=Math.max(Vt,0),Jt=Math.min(Jt,Ct.count));const fe=Jt-Vt;if(fe<0||fe===1/0)return;lt.setup(N,z,gt,B,ft);let ae,ne=ht;if(ft!==null&&(ae=b.get(ft),ne=Dt,ne.setIndex(ae)),N.isMesh)z.wireframe===!0?(xt.setLineWidth(z.wireframeLinewidth*we()),ne.setMode(P.LINES)):ne.setMode(P.TRIANGLES);else if(N.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*we()),N.isLineSegments?ne.setMode(P.LINES):N.isLineLoop?ne.setMode(P.LINE_LOOP):ne.setMode(P.LINE_STRIP)}else N.isPoints?ne.setMode(P.POINTS):N.isSprite&&ne.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,ue=N._multiDrawCounts,$t=N._multiDrawCount,ze=ft?b.get(ft).bytesPerElement:1,li=vt.get(z).currentProgram.getUniforms();for(let ke=0;ke<$t;ke++)li.setValue(P,"_gl_DrawID",ke),ne.render(Rt[ke]/ze,ue[ke])}else if(N.isInstancedMesh)ne.renderInstances(Vt,fe,N.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ue=Math.min(B.instanceCount,Rt);ne.renderInstances(Vt,fe,ue)}else ne.render(Vt,fe)};function se(S,U,B){S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,gs(S,U,B),S.side=Bn,S.needsUpdate=!0,gs(S,U,B),S.side=Qe):gs(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),f=Et.get(B),f.init(U),E.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const gt=tt[ct];se(gt,B,N),z.add(gt)}else se(tt,B,N),z.add(tt)}),f=E.pop(),z},this.compileAsync=function(S,U,B=null){const z=this.compile(S,U,B);return new Promise(N=>{function tt(){if(z.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){N(S);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let jt=null;function _n(S){jt&&jt(S)}function on(){Hn.stop()}function mo(){Hn.start()}const Hn=new dc;Hn.setAnimationLoop(_n),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(S){jt=S,nt.setAnimationLoop(S),S===null?Hn.stop():Hn.start()},nt.addEventListener("sessionstart",on),nt.addEventListener("sessionend",mo),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,R),f=Et.get(S,E.length),f.init(U),E.push(f),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),oe.setFromProjectionMatrix(J,dn,U.reversedDepth),$=this.localClippingEnabled,Kt=it.init(this.clippingPlanes,$),p=V.get(S,w.length),p.init(),w.push(p),nt.enabled===!0&&nt.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&gr(tt,U,-1/0,v.sortObjects)}gr(S,U,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ot,dt),Xt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Xt&&St.addToRenderList(p,S),this.info.render.frame++,Kt===!0&&it.beginShadows();const B=f.state.shadowsArray;Mt.render(B,S,U),Kt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,N=p.transmissive;if(f.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let ct=0,gt=tt.length;ct<gt;ct++){const ft=tt[ct];_o(z,N,S,ft)}Xt&&St.render(S);for(let ct=0,gt=tt.length;ct<gt;ct++){const ft=tt[ct];go(p,S,ft,ft.viewport)}}else N.length>0&&_o(z,N,S,U),Xt&&St.render(S),go(p,S,U);R!==null&&C===0&&(kt.updateMultisampleRenderTarget(R),kt.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(v,S,U),lt.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(f=E[E.length-1],Kt===!0&&it.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function gr(S,U,B,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||oe.intersectsSprite(S)){z&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const ct=O.update(S),gt=S.material;gt.visible&&p.push(S,ct,gt,B,Nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||oe.intersectsObject(S))){const ct=O.update(S),gt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Nt.copy(ct.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(J)),Array.isArray(gt)){const ft=ct.groups;for(let Lt=0,Ut=ft.length;Lt<Ut;Lt++){const Ct=ft[Lt],Vt=gt[Ct.materialIndex];Vt&&Vt.visible&&p.push(S,ct,Vt,B,Nt.z,Ct)}}else gt.visible&&p.push(S,ct,gt,B,Nt.z,null)}}const tt=S.children;for(let ct=0,gt=tt.length;ct<gt;ct++)gr(tt[ct],U,B,z)}function go(S,U,B,z){const N=S.opaque,tt=S.transmissive,ct=S.transparent;f.setupLightsView(B),Kt===!0&&it.setGlobalState(v.clippingPlanes,B),z&&xt.viewport(L.copy(z)),N.length>0&&ms(N,U,B),tt.length>0&&ms(tt,U,B),ct.length>0&&ms(ct,U,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function _o(S,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new an(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?bn:pn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[z.id],ct=z.viewport||L;tt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const gt=v.getRenderTarget(),ft=v.getActiveCubeFace(),Lt=v.getActiveMipmapLevel();v.setRenderTarget(tt),v.getClearColor(W),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&St.render(B);const Ut=v.toneMapping;v.toneMapping=Fn;const Ct=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Kt===!0&&it.setGlobalState(v.clippingPlanes,z),ms(S,B,z),kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Jt=0,fe=U.length;Jt<fe;Jt++){const ae=U[Jt],ne=ae.object,Rt=ae.geometry,ue=ae.material,$t=ae.group;if(ue.side===Qe&&ne.layers.test(z.layers)){const ze=ue.side;ue.side=Ue,ue.needsUpdate=!0,xo(ne,B,z,Rt,ue,$t),ue.side=ze,ue.needsUpdate=!0,Vt=!0}}Vt===!0&&(kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt))}v.setRenderTarget(gt,ft,Lt),v.setClearColor(W,X),Ct!==void 0&&(z.viewport=Ct),v.toneMapping=Ut}function ms(S,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=S.length;N<tt;N++){const ct=S[N],gt=ct.object,ft=ct.geometry,Lt=ct.group;let Ut=ct.material;Ut.allowOverride===!0&&z!==null&&(Ut=z),gt.layers.test(B.layers)&&xo(gt,U,B,ft,Ut,Lt)}}function xo(S,U,B,z,N,tt){S.onBeforeRender(v,U,B,z,N,tt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,B,z,S,tt),N.transparent===!0&&N.side===Qe&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,S,tt),N.side=Bn,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,S,tt),N.side=Qe):v.renderBufferDirect(B,U,z,N,S,tt),S.onAfterRender(v,U,B,z,N,tt)}function gs(S,U,B){U.isScene!==!0&&(U=Tt);const z=vt.get(S),N=f.state.lights,tt=f.state.shadowsArray,ct=N.state.version,gt=q.getParameters(S,N.state,tt,U,B),ft=q.getProgramCacheKey(gt);let Lt=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?pe:ye).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",K),Lt=new Map,z.programs=Lt);let Ut=Lt.get(ft);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===ct)return Mo(S,gt),Ut}else gt.uniforms=q.getUniforms(S),S.onBeforeCompile(gt,v),Ut=q.acquireProgram(gt,ft),Lt.set(ft,Ut),z.uniforms=gt.uniforms;const Ct=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=it.uniform),Mo(S,gt),z.needsLights=bc(S),z.lightsStateVersion=ct,z.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function vo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Qs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Mo(S,U){const B=vt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function wc(S,U,B,z,N){U.isScene!==!0&&(U=Tt),kt.resetTextureUnits();const tt=U.fog,ct=z.isMeshStandardMaterial?U.environment:null,gt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bi,ft=(z.isMeshStandardMaterial?pe:ye).get(z.envMap||ct),Lt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ct=!!B.morphAttributes.position,Vt=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color;let fe=Fn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=ae!==void 0?ae.length:0,Rt=vt.get(z),ue=f.state.lights;if(Kt===!0&&($===!0||S!==y)){const Pe=S===y&&z.id===M;it.setState(z,S,Pe)}let $t=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ue.state.version||Rt.outputColorSpace!==gt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==ft||z.fog===!0&&Rt.fog!==tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Lt||Rt.vertexTangents!==Ut||Rt.morphTargets!==Ct||Rt.morphNormals!==Vt||Rt.morphColors!==Jt||Rt.toneMapping!==fe||Rt.morphTargetsCount!==ne)&&($t=!0):($t=!0,Rt.__version=z.version);let ze=Rt.currentProgram;$t===!0&&(ze=gs(z,U,N));let li=!1,ke=!1,Wi=!1;const de=ze.getUniforms(),$e=Rt.uniforms;if(xt.useProgram(ze.program)&&(li=!0,ke=!0,Wi=!0),z.id!==M&&(M=z.id,ke=!0),li||y!==S){xt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),de.setValue(P,"projectionMatrix",S.projectionMatrix),de.setValue(P,"viewMatrix",S.matrixWorldInverse);const Ne=de.map.cameraPosition;Ne!==void 0&&Ne.setValue(P,mt.setFromMatrixPosition(S.matrixWorld)),It.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&de.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,ke=!0,Wi=!0)}if(N.isSkinnedMesh){de.setOptional(P,N,"bindMatrix"),de.setOptional(P,N,"bindMatrixInverse");const Pe=N.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),de.setValue(P,"boneTexture",Pe.boneTexture,kt))}N.isBatchedMesh&&(de.setOptional(P,N,"batchingTexture"),de.setValue(P,"batchingTexture",N._matricesTexture,kt),de.setOptional(P,N,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",N._indirectTexture,kt),de.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",N._colorsTexture,kt));const Ke=B.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)&&et.update(N,B,ze),(ke||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,de.setValue(P,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($e.envMap.value=ft,$e.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&($e.envMapIntensity.value=U.environmentIntensity),ke&&(de.setValue(P,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&Tc($e,Wi),tt&&z.fog===!0&&j.refreshFogUniforms($e,tt),j.refreshMaterialUniforms($e,z,H,Z,f.state.transmissionRenderTarget[S.id]),Qs.upload(P,vo(Rt),$e,kt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Qs.upload(P,vo(Rt),$e,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&de.setValue(P,"center",N.center),de.setValue(P,"modelViewMatrix",N.modelViewMatrix),de.setValue(P,"normalMatrix",N.normalMatrix),de.setValue(P,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Pe=z.uniformsGroups;for(let Ne=0,_r=Pe.length;Ne<_r;Ne++){const Gn=Pe[Ne];Bt.update(Gn,ze),Bt.bind(Gn,ze)}}return ze}function Tc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function bc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,B){const z=vt.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),vt.get(S.texture).__webglTexture=U,vt.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const B=vt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Ac=P.createFramebuffer();this.setRenderTarget=function(S,U=0,B=0){R=S,A=U,C=B;let z=!0,N=null,tt=!1,ct=!1;if(S){const ft=vt.get(S);if(ft.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(ft.__webglFramebuffer===void 0)kt.setupRenderTarget(S);else if(ft.__hasExternalTextures)kt.rebindTextures(S,vt.get(S.texture).__webglTexture,vt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ct=S.depthTexture;if(ft.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(S.width!==Ct.image.width||S.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(S)}}const Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ct=!0);const Ut=vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][B]:N=Ut[U],tt=!0):S.samples>0&&kt.useMultisampledRTT(S)===!1?N=vt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[B]:N=Ut,L.copy(S.viewport),F.copy(S.scissor),k=S.scissorTest}else L.copy(At).multiplyScalar(H).floor(),F.copy(Gt).multiplyScalar(H).floor(),k=ie;if(B!==0&&(N=Ac),xt.bindFramebuffer(P.FRAMEBUFFER,N)&&z&&xt.drawBuffers(S,N),xt.viewport(L),xt.scissor(F),xt.setScissorTest(k),tt){const ft=vt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,B)}else if(ct){const ft=U;for(let Lt=0;Lt<S.textures.length;Lt++){const Ut=vt.get(S.textures[Lt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Lt,Ut.__webglTexture,B,ft)}}else if(S!==null&&B!==0){const ft=vt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ft.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(S,U,B,z,N,tt,ct,gt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft){xt.bindFramebuffer(P.FRAMEBUFFER,ft);try{const Lt=S.textures[gt],Ut=Lt.format,Ct=Lt.type;if(!It.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&B>=0&&B<=S.height-N&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+gt),P.readPixels(U,B,z,N,yt.convert(Ut),yt.convert(Ct),tt))}finally{const Lt=R!==null?vt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,z,N,tt,ct,gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft)if(U>=0&&U<=S.width-z&&B>=0&&B<=S.height-N){xt.bindFramebuffer(P.FRAMEBUFFER,ft);const Lt=S.textures[gt],Ut=Lt.format,Ct=Lt.type;if(!It.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Vt),P.bufferData(P.PIXEL_PACK_BUFFER,tt.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+gt),P.readPixels(U,B,z,N,yt.convert(Ut),yt.convert(Ct),0);const Jt=R!==null?vt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,Jt);const fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dh(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Vt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,tt),P.deleteBuffer(Vt),P.deleteSync(fe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(S.image.width*z),tt=Math.floor(S.image.height*z),ct=U!==null?U.x:0,gt=U!==null?U.y:0;kt.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ct,gt,N,tt),xt.unbindTexture()};const Cc=P.createFramebuffer(),Rc=P.createFramebuffer();this.copyTextureToTexture=function(S,U,B=null,z=null,N=0,tt=null){tt===null&&(N!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ct,gt,ft,Lt,Ut,Ct,Vt,Jt,fe;const ae=S.isCompressedTexture?S.mipmaps[tt]:S.image;if(B!==null)ct=B.max.x-B.min.x,gt=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,Lt=B.min.x,Ut=B.min.y,Ct=B.isBox3?B.min.z:0;else{const Ke=Math.pow(2,-N);ct=Math.floor(ae.width*Ke),gt=Math.floor(ae.height*Ke),S.isDataArrayTexture?ft=ae.depth:S.isData3DTexture?ft=Math.floor(ae.depth*Ke):ft=1,Lt=0,Ut=0,Ct=0}z!==null?(Vt=z.x,Jt=z.y,fe=z.z):(Vt=0,Jt=0,fe=0);const ne=yt.convert(U.format),Rt=yt.convert(U.type);let ue;U.isData3DTexture?(kt.setTexture3D(U,0),ue=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),ue=P.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),ue=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=P.getParameter(P.UNPACK_ROW_LENGTH),ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),li=P.getParameter(P.UNPACK_SKIP_PIXELS),ke=P.getParameter(P.UNPACK_SKIP_ROWS),Wi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct);const de=S.isDataArrayTexture||S.isData3DTexture,$e=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Ke=vt.get(S),Pe=vt.get(U),Ne=vt.get(Ke.__renderTarget),_r=vt.get(Pe.__renderTarget);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Ne.__webglFramebuffer),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Gn=0;Gn<ft;Gn++)de&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(S).__webglTexture,N,Ct+Gn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,tt,fe+Gn)),P.blitFramebuffer(Lt,Ut,ct,gt,Vt,Jt,ct,gt,P.DEPTH_BUFFER_BIT,P.NEAREST);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||vt.has(S)){const Ke=vt.get(S),Pe=vt.get(U);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Cc),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Rc);for(let Ne=0;Ne<ft;Ne++)de?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ke.__webglTexture,N,Ct+Ne):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ke.__webglTexture,N),$e?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.__webglTexture,tt,fe+Ne):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,tt),N!==0?P.blitFramebuffer(Lt,Ut,ct,gt,Vt,Jt,ct,gt,P.COLOR_BUFFER_BIT,P.NEAREST):$e?P.copyTexSubImage3D(ue,tt,Vt,Jt,fe+Ne,Lt,Ut,ct,gt):P.copyTexSubImage2D(ue,tt,Vt,Jt,Lt,Ut,ct,gt);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else $e?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(ue,tt,Vt,Jt,fe,ct,gt,ft,ne,Rt,ae.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(ue,tt,Vt,Jt,fe,ct,gt,ft,ne,ae.data):P.texSubImage3D(ue,tt,Vt,Jt,fe,ct,gt,ft,ne,Rt,ae):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,tt,Vt,Jt,ct,gt,ne,Rt,ae.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,tt,Vt,Jt,ae.width,ae.height,ne,ae.data):P.texSubImage2D(P.TEXTURE_2D,tt,Vt,Jt,ct,gt,ne,Rt,ae);P.pixelStorei(P.UNPACK_ROW_LENGTH,$t),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,li),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Wi),tt===0&&U.generateMipmaps&&P.generateMipmap(ue),xt.unbindTexture()},this.initRenderTarget=function(S){vt.get(S).__webglFramebuffer===void 0&&kt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?kt.setTextureCube(S,0):S.isData3DTexture?kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?kt.setTexture2DArray(S,0):kt.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,xt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const tr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Om=new uo(-1,1,1,-1,0,1);class Bm extends _e{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const zm=new Bm;class po{constructor(t){this._mesh=new G(zm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Om)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class km extends Vi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fs.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new po(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class bl extends Vi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Hm extends Vi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Gm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new km(tr),this.copyPass.material.blending=Tn,this.clock=new uc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(a instanceof bl?n=!0:a instanceof Hm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vm extends Vi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Wm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ki extends Vi{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,a,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new an(r,a,{type:bn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const m=new an(r,a,{type:bn});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=Wm;this.highPassUniforms=fs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fs.clone(tr.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader,blending:xe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new qt,this._fsQuad=new po(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ki.BlurDirectionX=new bt(1,0);ki.BlurDirectionY=new bt(0,1);const qs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xm extends Vi{constructor(){super(),this.uniforms=fs.clone(qs.uniforms),this.material=new Xh({name:qs.name,uniforms:this.uniforms,vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader}),this._fsQuad=new po(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===Zt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Al={blockStep:100},fn=[{id:"little-italy",name:"Little Italy",short:"LITTLE ITALY",color:"#d6b168",rival:"The Vanzetti",center:[22,-132],blurb:"The old neighborhood. Loyalty is the only currency that never inflates."},{id:"crown-heights",name:"Crown Heights",short:"CROWN HEIGHTS",color:"#b8a7ff",rival:"The Falcone",center:[-48,-200],blurb:"Old money, new blood. The penthouses watch every move you make."},{id:"neon-row",name:"Neon Row",short:"NEON ROW",color:"#ff5d9e",rival:"The Okada",center:[-166,-34],blurb:"Sin sells by the hour. The neon never quite goes out."},{id:"docks",name:"The Docks",short:"THE DOCKS",color:"#55d6d0",rival:"The Marchetti",center:[196,-46],blurb:"Everything enters the city here. Everything has a price."},{id:"old-quarter",name:"Old Quarter",short:"OLD QUARTER",color:"#e08a5b",rival:"The Greco",center:[-48,200],blurb:"Cobblestones and confessionals. Old sins leave deep roots."}],qm={north:[0,-35],south:[0,35],west:[-35,0],east:[35,0]};function Ze(s){const[t,e]=s.block,[n,i]=qm[s.side];return{...s,marker:[t+n,e+i],shop:[t+n*.78,e+i*.78],blockCenter:[t,e]}}const $a=[Ze({id:"bellas",name:"Bella's Diner",kind:"DINER",district:"little-italy",block:[0,-100],side:"west",sign:"BELLA’S",color:"#ffbe63",base:22}),Ze({id:"romano",name:"Romano Tailors",kind:"TAILOR",district:"little-italy",block:[100,-100],side:"west",sign:"ROMANO",color:"#f6d18b",base:18}),Ze({id:"stmarco",name:"St. Marco Social Club",kind:"SOCIAL CLUB",district:"little-italy",block:[0,-200],side:"south",sign:"ST. MARCO",color:"#e2a95b",base:28}),Ze({id:"crownhotel",name:"The Crown Hotel",kind:"HOTEL",district:"crown-heights",block:[0,-200],side:"north",sign:"CROWN",color:"#c2b1ff",base:34}),Ze({id:"highline",name:"Highline Garage",kind:"GARAGE",district:"crown-heights",block:[-100,-200],side:"south",sign:"HIGHLINE",color:"#9b8cff",base:24}),Ze({id:"pulse",name:"Pulse Nightclub",kind:"NIGHTCLUB",district:"neon-row",block:[-200,-100],side:"east",sign:"PULSE",color:"#ff5d9e",base:38}),Ze({id:"velvet",name:"The Velvet Room",kind:"LOUNGE",district:"neon-row",block:[-200,0],side:"east",sign:"VELVET",color:"#ff78c8",base:30}),Ze({id:"lucky",name:"Lucky Dragon Casino",kind:"CASINO",district:"neon-row",block:[-100,0],side:"west",sign:"LUCKY DRAGON",color:"#ffcb5e",base:42}),Ze({id:"pier9",name:"Pier 9 Warehouse",kind:"WAREHOUSE",district:"docks",block:[200,-100],side:"west",sign:"PIER 9",color:"#55d6d0",base:32}),Ze({id:"rusty",name:"The Rusty Anchor",kind:"TAVERN",district:"docks",block:[200,0],side:"west",sign:"RUSTY ANCHOR",color:"#7ce8e0",base:22}),Ze({id:"moretti",name:"Moretti Bakery",kind:"BAKERY",district:"old-quarter",block:[-100,200],side:"east",sign:"MORETTI",color:"#f0a168",base:20}),Ze({id:"crypt",name:"The Crypt",kind:"BAR",district:"old-quarter",block:[0,200],side:"west",sign:"THE CRYPT",color:"#df8254",base:26})],qe={marker:[-65,-100],shop:[-72.5,-100],spawn:[-42,-100]},Li=[{id:1,label:"CHAPTER I",title:"A Seat at the Table",desc:"Take over your first racket. Follow the gold light.",reward:1e3,respect:25,goal:1,progress:s=>s.ownedCount},{id:2,label:"CHAPTER II",title:"Blood & Concrete",desc:"Control Little Italy. Three rackets, one neighborhood.",reward:2500,respect:60,goal:3,progress:s=>s.districtOwned("little-italy")},{id:3,label:"CHAPTER III",title:"The Long Game",desc:"Hold three boroughs at once. Make the families kneel.",reward:6e3,respect:150,goal:3,progress:s=>s.controlledDistricts},{id:4,label:"CHAPTER IV",title:"Crown of Ashes",desc:"Take every racket in the city. Leave nothing for the vultures.",reward:15e3,respect:400,goal:5,progress:s=>s.controlledDistricts}],Ka=[{name:"ASSOCIATE",min:0},{name:"SOLDIER",min:150},{name:"CAPO",min:400},{name:"UNDERBOSS",min:800},{name:"DON",min:1400}];function Cl(s){let t=Ka[0];for(const e of Ka)s>=e.min&&(t=e);return t}function Ym(s){return Ka.find(t=>t.min>s)||null}const Rl=Object.fromEntries(fn.map(s=>[s.id,s])),Je=Object.fromEntries(fn.map(s=>[s.id,$a.filter(t=>t.district===s.id)])),$m=["HOTEL","BAR","LIQUOR","PAWN","24 HRS","CINEMA","NOODLES","JAZZ","MOTEL","TAXI","DINER","CLUB","GOLD","VICE","ROOMS","CAFÉ"],ns=Math.PI*2;function _c(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function ta(s,t,e){return Math.max(t,Math.min(e,s))}function zn(s,t=!1){const e=new Wh(s);return e.colorSpace=Fe,e.anisotropy=4,t&&(e.wrapS=os,e.wrapT=os),e}function Km(s){const t=document.createElement("canvas");t.width=256,t.height=128;const e=t.getContext("2d"),n=new Pt(s),i=n.clone().multiplyScalar(.5).getStyle(),r=n.clone().multiplyScalar(.16).getStyle();e.fillStyle="#08070a",e.fillRect(0,0,256,128);const a=e.createLinearGradient(0,8,0,120);a.addColorStop(0,i),a.addColorStop(.55,n.clone().multiplyScalar(.3).getStyle()),a.addColorStop(1,r),e.fillStyle=a,e.fillRect(5,5,246,118),e.fillStyle="rgba(8,6,7,.35)";for(let o=18;o<246;o+=34)e.fillRect(o,6,2,78);e.fillStyle="rgba(6,5,6,.72)",e.fillRect(5,84,246,39),e.fillStyle="rgba(255,226,180,.12)",e.fillRect(5,82,246,2);for(let o=26;o<240;o+=38)e.fillStyle="rgba(10,8,8,.8)",e.fillRect(o,96,4,26),e.beginPath(),e.arc(o+2,94,7,0,Math.PI*2),e.fill();for(const o of[58,150,210])e.fillStyle="rgba(255,222,168,.85)",e.beginPath(),e.arc(o,24,4,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,196,120,.12)",e.beginPath(),e.arc(o,24,14,0,Math.PI*2),e.fill(),e.fillStyle="rgba(6,5,6,.8)",e.fillRect(o-.7,4,1.4,17);for(const[o,l]of[[96,.9],[182,.78]])e.fillStyle="rgba(6,5,6,.82)",e.beginPath(),e.arc(o,62,8*l,0,Math.PI*2),e.fill(),e.fillRect(o-8*l,70,16*l,22);return e.fillStyle="#050508",e.fillRect(0,0,256,5),e.fillRect(0,123,256,5),e.fillRect(0,0,5,128),e.fillRect(251,0,5,128),e.fillRect(125,0,6,128),e.fillRect(62,0,2,128),e.fillRect(189,0,2,128),zn(t)}function jm(s,t,e,n=!1){const i=_c(s),r=256,a=512,o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d"),c=document.createElement("canvas");c.width=r,c.height=a;const h=c.getContext("2d");h.fillStyle="#000000",h.fillRect(0,0,r,a),l.fillStyle=t,l.fillRect(0,0,r,a);const u=l.createLinearGradient(0,0,0,a);u.addColorStop(0,"rgba(112,136,178,.09)"),u.addColorStop(.42,"rgba(0,0,0,0)"),u.addColorStop(.78,"rgba(0,0,0,.16)"),u.addColorStop(1,"rgba(0,0,0,.36)"),l.fillStyle=u,l.fillRect(0,0,r,a);const m=10,d=26,_=9,g=7,p=(r-_*2)/m,f=(a-g*2)/d;l.fillStyle="rgba(0,0,0,.2)",l.fillRect(0,0,r,3),l.fillRect(0,a-4,r,4);for(let v=0;v<=m;v+=2){const T=_+v*p-2;l.fillStyle="rgba(255,255,255,.025)",l.fillRect(T,0,1.5,a),l.fillStyle="rgba(0,0,0,.18)",l.fillRect(T+1.5,0,1.5,a)}for(let v=0;v<d;v++){const T=g+v*f;l.fillStyle="rgba(0,0,0,.34)",l.fillRect(0,T+f-2,r,2),l.fillStyle="rgba(255,255,255,.035)",l.fillRect(0,T+f-3,r,1);const A=v>=d-4;for(let C=0;C<m;C++){const R=_+C*p+p*.15,M=T+f*.2,y=p*.7,L=f*.56;l.fillStyle="rgba(4,7,12,.88)",l.fillRect(R-1.5,M-1.5,y+3,L+3);const F=l.createLinearGradient(0,M,0,M+L);F.addColorStop(0,n?"rgba(52,76,102,.9)":"rgba(38,46,60,.92)"),F.addColorStop(.55,"rgba(16,22,32,.94)"),F.addColorStop(1,"rgba(6,10,16,.96)"),l.fillStyle=F,l.fillRect(R,M,y,L);const k=A?.38:.14;if(i()<k){const W=i()>.24,X=W?e:n?"#7fb0d4":"#93a9bd";h.globalAlpha=.28+i()*.42,h.fillStyle=X,h.fillRect(R,M,y,L),h.globalAlpha=1,h.fillStyle="rgba(0,0,0,.34)";const Y=i();Y>.62?h.fillRect(R,M,y,L*(.18+i()*.35)):Y>.3&&h.fillRect(R+y*(.5+i()*.24),M,y*.12,L),l.fillStyle=W?"rgba(126,88,52,.4)":"rgba(56,78,98,.42)",l.fillRect(R,M,y,L)}l.fillStyle="rgba(2,4,8,.62)",l.fillRect(R+y*.5-.6,M,1.2,L),l.fillStyle="rgba(255,255,255,.055)",l.fillRect(R-2,M+L+1,y+4,1)}}for(let v=0;v<22;v++)l.fillStyle=`rgba(0,0,0,${.025+i()*.075})`,l.fillRect(i()*r,0,1+i()*2.5,a);for(let v=0;v<5;v++){const T=i()*r;l.fillStyle="rgba(10,12,16,.22)",l.fillRect(T,a*(.55+i()*.3),2+i()*4,a*.4)}const w=zn(o,!0),E=zn(c,!0);return{map:w,emissiveMap:E}}function En(s,t,e,n,i=13,r=42){const a=s.attributes.uv,o=Math.max(.55,t/i),l=Math.max(.55,n/i),c=Math.max(.55,e/r),h=[[l,c],[l,c],[o,l],[o,l],[o,c],[o,c]];for(let u=0;u<6;u++){const[m,d]=h[u];for(let _=0;_<4;_++){const g=u*4+_;a.setXY(g,a.getX(g)*m,a.getY(g)*d)}}return a.needsUpdate=!0,s}function Zm(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d");t.fillStyle="#292a2e",t.fillRect(0,0,128,128),t.strokeStyle="rgba(0,0,0,.35)",t.lineWidth=2;for(let e=0;e<=128;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e,128),t.stroke(),t.beginPath(),t.moveTo(0,e),t.lineTo(128,e),t.stroke();for(let e=0;e<80;e++)t.fillStyle=`rgba(255,255,255,${Math.random()*.022})`,t.fillRect(Math.random()*128,Math.random()*128,2,2);return zn(s,!0)}function Jm(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.16,"rgba(255,255,255,.88)"),e.addColorStop(.42,"rgba(255,255,255,.22)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),zn(s)}function Pl(s,t="",e="#ffffff"){const n=document.createElement("canvas");n.width=512,n.height=160;const i=n.getContext("2d");return i.clearRect(0,0,512,160),i.textAlign="center",i.textBaseline="middle",i.shadowColor=e,i.shadowBlur=26,i.fillStyle=e,i.font='700 56px "Arial Narrow", Arial, sans-serif',i.fillText(s,256,t?66:80),t&&(i.shadowBlur=12,i.globalAlpha=.7,i.font="400 20px Arial, sans-serif",i.fillText(t,256,120)),zn(n)}function ea(s,t){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d");return n.fillStyle="#07080c",n.fillRect(0,0,512,256),n.strokeStyle=t,n.globalAlpha=.55,n.lineWidth=5,n.strokeRect(10,10,492,236),n.globalAlpha=1,n.textAlign="center",n.textBaseline="middle",n.shadowColor=t,n.shadowBlur=24,n.fillStyle=t,n.font='700 78px "Arial Narrow", Arial, sans-serif',n.fillText(s,256,120),n.shadowBlur=8,n.font="400 22px Arial, sans-serif",n.fillStyle="rgba(255,255,255,.6)",n.fillText("THE CITY NEVER SLEEPS",256,194),zn(e)}class Qm{constructor(t,e){this.scene=t,this.renderer=e,this.rng=_c(1987),this.colliders=[],this.rackets=[],this.racketById=new Map,this.vehicles=[],this.peds=[],this.ambientEffects=[],this.panic=0,this.time=0,this.quality=!0,this.glowTexture=Jm(),this.sidewalkTexture=Zm(),this.facadeTextures=[],this.facadeMaterials=[],this.distantMaterials=[],this.buildMaterials(),this.buildEnvironment(),this.buildSky(),this.buildGround(),this.buildCity(),this.buildSafehouse(),this.buildRackets(),this.buildWaterfront(),this.buildTraffic(),this.buildPedestrians(),this.buildRain(),this.buildDistantSkyline()}buildMaterials(){[["#20222a","#ffc27c"],["#25201f","#ffd39a"],["#181e29","#8ec6e9"],["#282528","#ffb86d"],["#1b2022","#f4c883"],["#24202a","#9ebce7"],["#2a231d","#ffce8e"],["#171a21","#a7c5df"]].forEach(([e,n],i)=>{const{map:r,emissiveMap:a}=jm(1987+i*53,e,n,i===2||i===5||i===7),o=new wt({map:r,emissiveMap:a,emissive:16777215,emissiveIntensity:.62,roughness:.76,metalness:.18,envMapIntensity:.4});this.facadeTextures.push(r),this.facadeMaterials.push(o);const l=new wt({map:r,emissiveMap:a,emissive:16777215,emissiveIntensity:.2,roughness:.92,metalness:.08,color:4870236});this.distantMaterials.push(l)}),this.roofMat=new wt({color:1316122,roughness:.94,metalness:.12}),this.roofMatDistant=new wt({color:1645346,roughness:.96,metalness:.05}),this.asphaltMat=new wt({color:855828,roughness:.4,metalness:.55,envMapIntensity:.75}),this.sidewalkMat=new wt({map:this.sidewalkTexture,color:7828331,roughness:.88,metalness:.05,envMapIntensity:.22}),this.curbMat=new wt({color:4013376,roughness:.82}),this.darkMetal=new wt({color:1579808,roughness:.46,metalness:.8}),this.windowDark=new wt({color:527637,roughness:.16,metalness:.85,envMapIntensity:1.2}),this.lampMat=new wt({color:16763278,emissive:16754770,emissiveIntensity:2.4,toneMapped:!1}),this.whiteLine=new qt({color:11118748,transparent:!0,opacity:.55}),this.yellowLine=new qt({color:12096329,transparent:!0,opacity:.5}),this.grassMat=new wt({color:1451805,roughness:.95}),this.waterMat=new wt({color:397595,roughness:.15,metalness:.92,envMapIntensity:1.3})}buildEnvironment(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#050714"),n.addColorStop(.38,"#14172c"),n.addColorStop(.53,"#633b4b"),n.addColorStop(.61,"#d2754e"),n.addColorStop(.7,"#2b1d25"),n.addColorStop(1,"#05070b"),e.fillStyle=n,e.fillRect(0,0,512,256);const i=e.createRadialGradient(360,152,0,360,152,90);i.addColorStop(0,"rgba(255,197,128,.9)"),i.addColorStop(.3,"rgba(255,135,80,.4)"),i.addColorStop(1,"rgba(255,90,60,0)"),e.fillStyle=i,e.fillRect(0,0,512,256);const r=zn(t);r.mapping=ir;const a=new qa(this.renderer);this.envMap=a.fromEquirectangular(r).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.5,a.dispose(),this.scene.fog=new lo(658969,.0021);const o=new $h(9676758,2760988,.95);this.scene.add(o);const l=new Zh(4608878,.55);this.scene.add(l);const c=new el(16757370,1.5);c.position.set(-180,190,-240),this.scene.add(c);const h=new el(7309055,1.15);h.position.set(220,90,160),this.scene.add(h);const u=new Zn(16731793,55,80,2);u.position.set(-175,12,-95),this.scene.add(u);const m=new Zn(4643295,48,70,2);m.position.set(190,10,-90),this.scene.add(m);const d=new Zn(16757086,30,55,2);d.position.set(0,9,-105),this.scene.add(d);const _=new Zn(16747352,36,65,2);_.position.set(-52,8,200),this.scene.add(_);const g=new Zn(10194175,40,70,2);g.position.set(-48,9,-200),this.scene.add(g),this.neonLights=[u,m,d,_,g]}buildSky(){const t={topColor:{value:new Pt(329491)},midColor:{value:new Pt(2760505)},horizonColor:{value:new Pt(12873552)},lowColor:{value:new Pt(1183512)},sunDir:{value:new D(-.52,.11,-.84).normalize()}},e=new Ce({side:Ue,depthWrite:!1,uniforms:t,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vDir;
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 lowColor;
        uniform vec3 sunDir;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + 0.1);
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        void main() {
          vec3 dir = normalize(vDir);
          float h = dir.y;
          vec3 col = mix(lowColor, horizonColor, smoothstep(-0.12, 0.06, h));
          col = mix(col, midColor, smoothstep(0.02, 0.34, h));
          col = mix(col, topColor, smoothstep(0.28, 0.92, h));

          float sun = max(dot(dir, normalize(sunDir)), 0.0);
          col += vec3(1.0, 0.47, 0.22) * pow(sun, 260.0) * 1.6;
          col += vec3(1.0, 0.30, 0.12) * pow(sun, 9.0) * 0.16;

          float stars = step(0.99955, hash(floor(dir * 760.0)));
          stars *= smoothstep(0.1, 0.38, h);
          col += vec3(0.8, 0.85, 1.0) * stars * 0.85;

          float haze = smoothstep(0.0, 0.12, h) * smoothstep(0.28, 0.05, h);
          col += vec3(0.18, 0.09, 0.07) * haze * 0.4;

          gl_FragColor = vec4(col, 1.0);
        }
      `}),n=new G(new We(900,40,24),e);n.frustumCulled=!1,this.scene.add(n),this.sky=n}buildGround(){const t=new G(new Ie(1200,1200),this.asphaltMat);t.rotation.x=-Math.PI/2,t.position.y=-.02,this.scene.add(t),this.sidewalkTexture.repeat.set(3,3);const e=[-250,-150,-50,50,150,250],n=new ut(.16,.018,3.1),i=e.length*2*65,r=new Ai(n,this.yellowLine,i),a=new he;let o=0;for(const d of e)for(let _=-31;_<=31;_++)a.position.set(d,.025,_*9.4),a.rotation.set(0,0,0),a.updateMatrix(),r.setMatrixAt(o++,a.matrix),a.position.set(_*9.4,.025,d),a.rotation.set(0,Math.PI/2,0),a.updateMatrix(),r.setMatrixAt(o++,a.matrix);r.count=o,this.scene.add(r);const l=new ut(.34,.02,2.7),c=new Ai(l,this.whiteLine,288);let h=0;for(const d of e)for(const _ of e)if(!(Math.abs(d)>250||Math.abs(_)>250))for(let g=0;g<4;g++)a.position.set(d-7.5+g*2.2,.03,_+11.6),a.rotation.set(0,Math.PI/2,0),a.updateMatrix(),c.setMatrixAt(h++,a.matrix),a.position.set(d+7.5-g*2.2,.03,_-11.6),a.updateMatrix(),c.setMatrixAt(h++,a.matrix);c.count=h,this.scene.add(c);const u=[];for(let d=-2;d<=2;d++)for(let _=-2;_<=2;_++)u.push([d*Al.blockStep,_*Al.blockStep]);this.blockPositions=u;for(const[d,_]of u){const g=new G(new ut(80,.34,80),this.sidewalkMat);g.position.set(d,.17,_),this.scene.add(g);const p=new G(new ut(81.4,.19,81.4),this.curbMat);p.position.set(d,.07,_),this.scene.add(p)}const m=new wt({color:726304,roughness:.08,metalness:.95,transparent:!0,opacity:.52,envMapIntensity:1.6,depthWrite:!1});for(let d=0;d<34;d++){const _=e[Math.floor(this.rng()*e.length)],g=this.rng()>.5,p=new G(new Nn(1,12),m);p.rotation.x=-Math.PI/2,p.scale.set(1.5+this.rng()*5,1+this.rng()*2.2,1),p.position.set(g?-280+this.rng()*560:_+(this.rng()-.5)*13,.04,g?_+(this.rng()-.5)*13:-280+this.rng()*560),this.scene.add(p)}this.addStreetLamps()}addStreetLamps(){const t=[];for(const[h,u]of this.blockPositions)t.push([h-35,u-35],[h+35,u-35],[h-35,u+35],[h+35,u+35]);const e=new ge(.055,.085,5.3,5),n=new We(.16,7,7),i=new Ai(e,this.darkMetal,t.length),r=new Ai(n,this.lampMat,t.length),a=new he,o=[];t.forEach(([h,u],m)=>{a.position.set(h,2.65,u),a.rotation.set(0,0,0),a.updateMatrix(),i.setMatrixAt(m,a.matrix),a.position.set(h,5.32,u),a.updateMatrix(),r.setMatrixAt(m,a.matrix),o.push(h,5.32,u)}),this.scene.add(i),this.scene.add(r);const l=new _e;l.setAttribute("position",new re(o,3));const c=new Js({map:this.glowTexture,color:16758893,size:4.8,transparent:!0,opacity:.44,depthWrite:!1,blending:xe,sizeAttenuation:!0});this.scene.add(new Xr(l,c))}isReserved(t,e){for(const r of $a){const a=t-r.shop[0],o=e-r.shop[1];if(Math.abs(a)<12&&Math.abs(o)<12)return!0}const n=t-qe.shop[0],i=e-qe.shop[1];return Math.abs(n)<13&&Math.abs(i)<13}buildCity(){const t=new Set(["100,100","-200,-200"]),e=new Set(["0,0","-100,-100"]);for(const[n,i]of this.blockPositions){const r=`${n},${i}`;if(!e.has(r)){if(t.has(r)){this.buildPark(n,i);continue}this.buildBlock(n,i)}}this.buildCrownTower(),this.buildParkingLot(-100,100),this.addRooftopBillboards()}buildBlock(t,e){const n=this.rng,i=Math.hypot(t,e),r=ta(1-i/280,0,1),o=Math.abs(t)<160&&Math.abs(e)<160?n()>.35?[2,2]:[2,3]:n()>.45?[3,3]:[2,2],[l,c]=o,h=68/l,u=68/c;for(let m=0;m<l;m++)for(let d=0;d<c;d++){if(n()<.06)continue;const _=t-34+h*(m+.5)+(n()-.5)*3,g=e-34+u*(d+.5)+(n()-.5)*3;if(this.isReserved(_,g))continue;const p=h-4.5-n()*5,f=u-4.5-n()*5;if(p<10||f<10)continue;let w=11+n()*18+r*(24+n()*40);n()>.88&&(w+=12+n()*22),n()>.96&&(w+=28);const E=this.facadeMaterials[Math.floor(n()*this.facadeMaterials.length)];this.addBuilding(_,g,p,f,w,E)}}addBuilding(t,e,n,i,r,a,o={}){const l=new ve;l.position.set(t,0,e);const c=[a,a,this.roofMat,this.roofMat,a,a],h=En(new ut(1,1,1),n,r,i),u=new G(h,c);u.scale.set(n,r,i),u.position.y=r/2+.32,l.add(u);const m=this.curbMat,d=new G(new ut(n+.55,.65,i+.55),m);if(d.position.y=r+.62,l.add(d),r>42&&this.rng()>.25){const g=n*(.58+this.rng()*.18),p=i*(.58+this.rng()*.18),f=r*(.12+this.rng()*.2),w=En(new ut(1,1,1),g,f,p),E=new G(w,[a,a,this.roofMat,this.roofMat,a,a]);if(E.scale.set(g,f,p),E.position.y=r+f/2+.4,l.add(E),r>72&&this.rng()>.3){const v=g*.55,T=f*.55,A=p*.55,C=En(new ut(1,1,1),v,T,A),R=new G(C,[a,a,this.roofMat,this.roofMat,a,a]);R.scale.set(v,T,A),R.position.y=r+f+f*.275+.4,l.add(R)}}const _=r+1;if(this.rng()>.55){const g=new G(new ge(1.6,1.6,3.4,8),new wt({color:3813416,roughness:.9}));g.position.set((this.rng()-.5)*n*.45,_+1.7,(this.rng()-.5)*i*.45),l.add(g)}if(this.rng()>.68){const g=new G(new ge(.06,.06,7+this.rng()*9,4),this.darkMetal);g.position.set((this.rng()-.5)*n*.4,_+5,(this.rng()-.5)*i*.4),l.add(g);const p=new G(new We(.16,6,6),new qt({color:16735311,toneMapped:!1}));p.position.copy(g.position),p.position.y+=5,l.add(p)}if(this.rng()>.72){const g=new G(new ut(2.2,1,2.2),this.darkMetal);g.position.set((this.rng()-.5)*n*.5,_+.5,(this.rng()-.5)*i*.5),l.add(g)}if(r>32&&this.rng()>.7){const g=$m,p=["#ff5d9e","#55d6d0","#ffcb5e","#b18cff","#ff8b58"],f=g[Math.floor(this.rng()*g.length)],w=p[Math.floor(this.rng()*p.length)],E=Math.min(n*.72,13),v=ea(f,w),T=new G(new Ie(E,E*.48),new qt({map:v,transparent:!0,toneMapped:!1,side:Qe}));T.position.set(0,r+3.2,i/2+.15),l.add(T);const A=new G(new ut(E+1,E*.48+1,.3),this.darkMetal);A.position.set(0,r+3.2,i/2-.1),l.add(A);const C=new ss(new Ri({map:this.glowTexture,color:w,transparent:!0,opacity:.18,blending:xe,depthWrite:!1}));C.scale.set(E*1.8,E*.9,1),C.position.set(0,r+3.2,i/2+.5),l.add(C)}if(this.rng()>.55){const g=new G(new Ie(n*.7,2.4),new qt({color:16756325,transparent:!0,opacity:.06,depthWrite:!1,blending:xe}));g.rotation.x=-Math.PI/2,g.position.set(0,.36,i/2+1.3),l.add(g)}return this.scene.add(l),this.colliders.push({x:t,z:e,hw:n/2+.3,hd:i/2+.3}),l}buildCrownTower(){const n=new ve;n.position.set(0,0,0);const i=this.facadeMaterials[2],r=[i,i,this.roofMat,this.roofMat,i,i],a=new G(En(new ut(44,44,44),44,44,44),r);a.position.y=22.3,n.add(a);const o=new G(En(new ut(34,72,34),34,72,34),r);o.position.y=80.3,n.add(o);const l=new G(En(new ut(24,28,24),24,28,24),r);l.position.y=130.3,n.add(l);const c=new wt({color:9333293,emissive:16761692,emissiveIntensity:1.4,metalness:.85,roughness:.26}),h=new G(new ge(3.2,9.2,12,8),c);h.position.y=150.4,n.add(h);const u=new G(new ge(.12,.5,26,6),c);u.position.y=169.4,n.add(u);const m=new G(new We(.5,8,8),new qt({color:16738906,toneMapped:!1}));m.position.y=182.5,n.add(m),this.scene.add(n),this.colliders.push({x:0,z:0,hw:22.5,hd:22.5});const d=this.makeBillboard("CROWN","#e6c26f"),_=new G(new Ie(18,9),d);_.position.set(0,106,17.3),this.scene.add(_);const g=_.clone();g.position.set(0,106,-17.3),g.rotation.y=Math.PI,this.scene.add(g);for(let p=0;p<8;p++){const f=p/8*ns,w=new G(new We(.18,6,6),new qt({color:16766346,toneMapped:!1}));w.position.set(Math.cos(f)*29,4.8,Math.sin(f)*29),this.scene.add(w)}}buildPark(t,e){const n=this.rng,i=new G(new ut(70,.1,70),this.grassMat);i.position.set(t,.4,e),this.scene.add(i);const r=new wt({color:3420719,roughness:.9}),a=new G(new ut(7,.05,70),r);a.position.set(t,.47,e),this.scene.add(a);const o=new G(new ut(70,.05,7),r);o.position.set(t,.47,e),this.scene.add(o);const l=new G(new ge(5.2,5.6,.8,20),new wt({color:4145992,roughness:.7,metalness:.3}));l.position.set(t,.6,e),this.scene.add(l);const c=new G(new ge(4.4,4.4,.2,20),new wt({color:1520708,roughness:.1,metalness:.8,emissive:727588,emissiveIntensity:.7}));c.position.set(t,1.02,e),this.scene.add(c);const h=new G(new ge(.1,.25,5,6),new qt({color:9421784,transparent:!0,opacity:.16,depthWrite:!1}));h.position.set(t,3.4,e),this.scene.add(h),this.colliders.push({x:t,z:e,hw:6,hd:6});const u=new ge(.3,.46,3.8,5),m=new ho(2.5,0),d=new wt({color:2826521,roughness:1}),_=new wt({color:1849894,roughness:.95}),g=[];for(let E=0;E<18;E++){const v=n()*ns,T=10+n()*25,A=t+Math.cos(v)*T,C=e+Math.sin(v)*T;Math.abs(A-t)<5||Math.abs(C-e)<5||g.push([A,C])}const p=new Ai(u,d,g.length),f=new Ai(m,_,g.length),w=new he;g.forEach(([E,v],T)=>{w.position.set(E,2.2,v),w.rotation.set(0,n()*ns,0),w.scale.setScalar(.9+n()*.5),w.updateMatrix(),p.setMatrixAt(T,w.matrix),w.position.set(E,5.1,v),w.updateMatrix(),f.setMatrixAt(T,w.matrix)}),this.scene.add(p),this.scene.add(f)}buildParkingLot(t,e){const n=new G(new ut(68,.08,68),this.asphaltMat);n.position.set(t,.42,e),this.scene.add(n);const i=new qt({color:9078653,transparent:!0,opacity:.28});for(let r=-3;r<=3;r++){const a=new G(new ut(.16,.02,8),i);a.position.set(t+r*9,.48,e-20),this.scene.add(a)}for(let r=0;r<3;r++){const a=this.makeCar([1844523,3154986,2237483][r],{name:"PARKED COUPE"});a.position.set(t-13+r*12,0,e-19),a.rotation.y=Math.PI,this.scene.add(a),this.registerVehicle(a,{name:"COUPE",ai:!1,kind:"parked"})}}addRooftopBillboards(){const t=[[-148,-47,35,"VICE","#ff5d9e"],[156,-155,42,"LUCKY","#ffcb5e"],[-55,156,38,"DINER","#e59a58"],[200,54,34,"PIER 9","#55d6d0"]];for(const[e,n,i,r,a]of t){const o=ea(r,a),l=new G(new Ie(14,7),new qt({map:o,transparent:!0,toneMapped:!1}));l.position.set(e,i,n),l.rotation.y=Math.PI/2,this.scene.add(l);const c=new G(new ut(15,8,.4),this.darkMetal);c.position.set(e-.3,i,n),c.rotation.y=Math.PI/2,this.scene.add(c)}}makeBillboard(t,e){return new qt({map:ea(t,e),transparent:!0,toneMapped:!1,side:Qe})}buildSafehouse(){const[t,e]=qe.shop,n=new ve;n.position.set(t,0,e),n.rotation.y=Math.PI/2;const i=new G(En(new ut(16,13,12),16,13,12),[this.facadeMaterials[0],this.facadeMaterials[0],this.roofMat,this.roofMat,this.facadeMaterials[0],this.facadeMaterials[0]]);i.position.y=6.82,n.add(i);const r=new G(new ut(16.5,4.6,12.5),new wt({color:3944490,roughness:.88}));r.position.y=2.6,n.add(r);const a=new G(new ut(2.8,3.6,.18),new wt({color:1773579,roughness:.5,metalness:.2}));a.position.set(0,2.15,6.36),n.add(a);const o=new G(new Ie(4.4,.45),new qt({color:16758372,transparent:!0,opacity:.8,toneMapped:!1}));o.position.set(0,4.15,6.4),n.add(o);const l=Pl("SAFEHOUSE","FAMILY ONLY","#e7c16d"),c=new G(new Ie(7.6,2.4),new qt({map:l,transparent:!0,blending:xe,depthWrite:!1,toneMapped:!1}));c.position.set(0,8.6,6.15),n.add(c);const h=new G(new ut(10,.22,2.2),new wt({color:3936018,roughness:.65}));h.position.set(0,4.9,7),n.add(h);const u=new ss(new Ri({map:this.glowTexture,color:16756828,transparent:!0,opacity:.45,blending:xe,depthWrite:!1}));u.scale.set(5,5,1),u.position.set(0,3,7),n.add(u),this.scene.add(n),this.colliders.push({x:t,z:e,hw:6.6,hd:8.6}),this.safehouseGroup=n;const m=new G(new hr(2.4,.08,8,32),new qt({color:15188333,transparent:!0,opacity:.5,blending:xe,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(qe.marker[0],.5,qe.marker[1]),this.scene.add(m),this.safehouseRing=m}buildRackets(){for(const t of $a){const e=new ve,[n,i]=t.shop,r=t.side==="west"?-Math.PI/2:t.side==="east"?Math.PI/2:t.side==="north"?Math.PI:0;e.position.set(n,0,i),e.rotation.y=r;const a=this.facadeMaterials[Math.floor(this.rng()*this.facadeMaterials.length)],o=new G(En(new ut(15,10,10),15,10,10),[a,a,this.roofMat,this.roofMat,a,a]);o.position.y=5.3,e.add(o);const l=new G(new ut(15.4,3.6,10.4),new wt({color:2103832,roughness:.82}));l.position.y=2.1,e.add(l);const c=new G(new ut(2.6,3.2,.2),new wt({color:789776,roughness:.4,metalness:.4}));c.position.set(-3.4,1.9,5.32),e.add(c);const h=new G(new Ie(7.8,2.4),new qt({map:Km(t.color)}));h.position.set(1.9,2.05,5.33),e.add(h);const u=new G(new ut(10.6,.18,2),new wt({color:1839888,emissive:t.color,emissiveIntensity:.035,roughness:.6}));u.position.set(1.5,4.3,6),e.add(u);const m=new qt({map:Pl(t.sign,t.kind,"#ffffff"),transparent:!0,blending:xe,depthWrite:!1,toneMapped:!1,color:new Pt(t.color)}),d=new G(new Ie(10.8,3.4),m);d.position.set(1.4,7.2,5.16),e.add(d);const _=new G(new Ie(13,7),new qt({map:this.glowTexture,color:t.color,transparent:!0,opacity:.22,blending:xe,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.set(0,.43,6.8),e.add(_),this.scene.add(e),this.colliders.push({x:n,z:i,hw:t.side==="east"||t.side==="west"?5.6:8.2,hd:t.side==="east"||t.side==="west"?8.2:5.6});const g=new ve;g.position.set(t.marker[0],0,t.marker[1]);const p=new Pt(12795197),f=new qt({color:p,transparent:!0,opacity:.035,side:Qe,depthWrite:!1,blending:xe}),w=new G(new ge(.28,.42,7,10,1,!0),f);w.position.y=3.5,g.add(w);const E=new qt({color:p,transparent:!0,opacity:.5,blending:xe,depthWrite:!1}),v=new G(new hr(1.45,.045,8,40),E);v.rotation.x=-Math.PI/2,v.position.y=.55,g.add(v);const T=new G(new Nn(1.85,24),new qt({color:p,transparent:!0,opacity:.055,blending:xe,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=.46,g.add(T);const A=new qt({color:p,toneMapped:!1}),C=new G(new fr(.34,0),A);C.position.y=2.6,g.add(C);const R=new ss(new Ri({map:this.glowTexture,color:p,transparent:!0,opacity:.3,blending:xe,depthWrite:!1}));R.scale.set(2.3,2.3,1),R.position.y=2.6,g.add(R),this.scene.add(g);const M={...t,def:t,group:e,marker:g,pos:g.position,beam:w,beamMat:f,ring:v,ringMat:E,diamond:C,diamondMat:A,sprite:R,signMat:m,underGlow:_,owned:!1,state:"rival",guards:[],underAttack:!1};this.rackets.push(M),this.racketById.set(t.id,M)}}setRacketState(t,e){const n={rival:12795197,cleared:14078146,owned:14727261},i=new Pt(n[e]||n.rival);t.beamMat.color.copy(i),t.ringMat.color.copy(i),t.diamondMat.color.copy(i),t.sprite.material.color.copy(i),t.signMat.color.copy(e==="owned"?new Pt(15847302):new Pt(t.color)),t.underGlow.material.color.copy(i),t.state=e,t.owned=e==="owned"}buildWaterfront(){const t=new G(new Ie(720,1600),this.waterMat);t.rotation.x=-Math.PI/2,t.position.set(640,-.55,0),this.scene.add(t);const e=new G(new ut(3,2.2,900),this.curbMat);e.position.set(280,.55,0),this.scene.add(e);const n=new G(new ut(32,.3,900),this.sidewalkMat);n.position.set(264,.18,0),this.scene.add(n);const i=new wt({color:2760985,roughness:.92});for(const c of[-180,-60,60,180]){const h=new G(new ut(58,1.1,11),i);h.position.set(310,.3,c),this.scene.add(h);for(let u=0;u<5;u++){const m=new G(new ge(.28,.34,4,5),this.darkMetal);m.position.set(288+u*12,-1.4,c+5.3),this.scene.add(m)}}for(const c of[-180,30,170]){const h=new ve;h.position.set(294,0,c);const u=new wt({color:3877406,roughness:.7,metalness:.5}),m=new G(new ut(1.6,24,1.6),u);m.position.y=12,h.add(m);const d=new G(new ut(1.2,1.2,30),u);d.position.set(0,24,8),d.rotation.x=-.12,h.add(d);const _=new G(new We(.25,6,6),new qt({color:16735565,toneMapped:!1}));_.position.set(0,25.5,-6),h.add(_),this.scene.add(h)}const r=new ve;r.position.set(455,-.4,-120);const a=new G(new ut(86,9,20),new wt({color:1251360,roughness:.8,metalness:.4}));a.position.y=4,r.add(a);const o=new G(new ut(15,16,16),new wt({color:2239026,roughness:.7}));o.position.set(-28,14,0),r.add(o);for(let c=0;c<8;c++){const h=new G(new ut(7,3.2,7),new wt({color:[5382687,2047050,3946786,3090995][c%4],roughness:.85}));h.position.set(-2+c%4*8,10+Math.floor(c/4)*3.4,-4+c%2*8),r.add(h)}this.scene.add(r);const l=new Zn(16761468,30,50,2);l.position.set(430,14,-115),this.scene.add(l)}makeCar(t=2825504,e={}){const n=new ve,i=new wt({color:t,metalness:.78,roughness:.24,envMapIntensity:1.5}),r=new wt({color:1118742,metalness:.7,roughness:.42}),a=new wt({color:12105390,metalness:.95,roughness:.18}),o=new G(new ut(1.9,.56,4.25),i);o.position.y=.66,n.add(o);const l=new G(new ut(2,.3,4.32),r);l.position.y=.38,n.add(l);const c=new G(new ut(1.78,.18,1.1),i);c.position.set(0,.98,1.42),n.add(c);const h=new G(new ut(1.78,.16,.9),i);h.position.set(0,.97,-1.55),n.add(h);const u=new G(new ut(1.62,.58,2),this.windowDark);u.position.set(0,1.17,-.2),n.add(u);const m=new G(new ut(1.5,.1,1.55),i);m.position.set(0,1.48,-.25),n.add(m);const d=new G(new ut(.07,.03,3.4),new wt({color:e.trim||9333299,metalness:.8,roughness:.3}));d.position.set(.91,.76,0),n.add(d);const _=d.clone();_.position.x=-.91,n.add(_);const g=new G(new ut(2.03,.18,.18),a);g.position.set(0,.45,2.16),n.add(g);const p=g.clone();p.position.z=-2.16,n.add(p);const f=new ge(.37,.37,.24,12),w=new wt({color:592396,roughness:.85});for(const A of[-.98,.98])for(const C of[-1.35,1.35]){const R=new G(f,w);R.rotation.z=Math.PI/2,R.position.set(A,.4,C),n.add(R);const M=new G(new ge(.17,.17,.26,8),a);M.rotation.z=Math.PI/2,M.position.set(A,.4,C),n.add(M)}const E=new qt({color:16769456,toneMapped:!1}),v=new qt({color:16727349,toneMapped:!1});for(const A of[-.61,.61]){const C=new G(new ut(.38,.15,.06),E);C.position.set(A,.73,2.15),n.add(C);const R=new G(new ut(.38,.12,.05),v);R.position.set(A,.7,-2.15),n.add(R);const M=new ss(new Ri({map:this.glowTexture,color:16767392,transparent:!0,opacity:.38,blending:xe,depthWrite:!1}));M.scale.set(1.2,1.2,1),M.position.set(A,.73,2.25),n.add(M)}const T=new G(new Nn(1.45,16),new qt({color:0,transparent:!0,opacity:.45,depthWrite:!1}));if(T.rotation.x=-Math.PI/2,T.scale.set(1.1,1.9,1),T.position.y=.06,n.add(T),e.police){const A=new G(new ut(1.25,.12,.35),r);A.position.set(0,1.58,-.25),n.add(A);const C=new G(new ut(.5,.18,.25),new qt({color:16722731,toneMapped:!1}));C.position.set(-.35,1.68,-.25),n.add(C);const R=new G(new ut(.5,.18,.25),new qt({color:3902975,toneMapped:!1}));R.position.set(.35,1.68,-.25),n.add(R),n.userData.policeLights=[C,R]}return n.userData.bodyMat=i,n}registerVehicle(t,e={}){const n={group:t,heading:t.rotation.y,speed:0,ai:e.ai??!1,axis:e.axis||"z",dir:e.dir||1,lane:e.lane||0,kind:e.kind||"traffic",name:e.name||"CITY SEDAN",color:e.color||2825504};return this.vehicles.push(n),n}buildTraffic(){const t=[-250,-150,-50,50,150,250],e=[2040876,2759965,2829092,1911597,3156010,2237741,3878434,1710624];new he;for(let i=0;i<18;i++){const r=this.rng()>.5?"x":"z",a=this.rng()>.5?1:-1,o=t[Math.floor(this.rng()*t.length)]+a*4.2,l=-300+this.rng()*600,h=this.makeCar(e[i%e.length],{name:"CITY SEDAN"});r==="x"?(h.position.set(l,0,o),h.rotation.y=a>0?Math.PI/2:-Math.PI/2):(h.position.set(o,0,l),h.rotation.y=a>0?0:Math.PI),this.scene.add(h),this.registerVehicle(h,{ai:!0,axis:r,dir:a,lane:o,speed:6+this.rng()*6,name:"CITY SEDAN",kind:"traffic",color:e[i%e.length]})}const n=[[-45,-170,Math.PI],[45,170,0],[-145,45,-Math.PI/2],[185,45,Math.PI/2],[-45,45,Math.PI/2]];for(const[i,r,a]of n){const o=this.makeCar(e[Math.floor(this.rng()*e.length)],{name:"PARKED SEDAN"});o.position.set(i,0,r),o.rotation.y=a,this.scene.add(o),this.registerVehicle(o,{ai:!1,kind:"parked",name:"PARKED SEDAN"})}}makePedestrian(){const t=new ve,e=[1776674,2761248,1909801,3351839,2367528,3092009],n=[12948853,9396809,14725772,7031095,11959645],i=new G(new ut(.5,.9,.3),new wt({color:e[Math.floor(this.rng()*e.length)],roughness:.9}));i.position.y=.92,t.add(i);const r=new G(new We(.18,8,8),new wt({color:n[Math.floor(this.rng()*n.length)],roughness:.8}));r.position.y=1.52,t.add(r);const a=new G(new ge(.24,.24,.05,8),new wt({color:1315864,roughness:.8}));a.position.y=1.64,t.add(a);const o=new G(new ut(.36,.48,.24),new wt({color:1316121,roughness:.9}));o.position.y=.36,t.add(o);const l=new G(new Nn(.42,10),new qt({color:0,transparent:!0,opacity:.28,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.y=.02,t.add(l),t}buildPedestrians(){const t=this.blockPositions.filter(([e,n])=>!(e===0&&n===0));for(let e=0;e<30;e++){const[n,i]=t[Math.floor(this.rng()*t.length)],r=this.makePedestrian();r.scale.setScalar(.92+this.rng()*.16),this.scene.add(r),this.peds.push({group:r,bx:n,bz:i,t:this.rng(),speed:.012+this.rng()*.012,dir:this.rng()>.5?1:-1,phase:this.rng()*ns})}}perimeterPoint(t,e,n){const r=Math.floor(n*4)%4,a=n*4%1;let o,l;return r===0?(o=t-34.5+a*34.5*2,l=e-34.5):r===1?(o=t+34.5,l=e-34.5+a*34.5*2):r===2?(o=t+34.5-a*34.5*2,l=e+34.5):(o=t-34.5,l=e+34.5-a*34.5*2),[o,l,r]}updatePedestrians(t){const e=this.panic>0;this.panic>0&&(this.panic-=t);for(const n of this.peds){n.t=(n.t+n.speed*t*n.dir*(e?2.6:1)+1)%1;const[i,r,a]=this.perimeterPoint(n.bx,n.bz,n.t);n.group.position.set(i,.25+Math.sin(this.time*8+n.phase)*.025,r);const o=a===0?Math.PI/2:a===1?Math.PI:a===2?-Math.PI/2:0;n.group.rotation.y=o+(n.dir<0?Math.PI:0)}}updateTraffic(t){for(const e of this.vehicles)e.ai&&(e.group.position[e.axis]+=e.speed*e.dir*t,e.group.position[e.axis]>310&&(e.group.position[e.axis]=-310),e.group.position[e.axis]<-310&&(e.group.position[e.axis]=310),e.axis==="x"?e.group.rotation.y=e.dir>0?Math.PI/2:-Math.PI/2:e.group.rotation.y=e.dir>0?0:Math.PI)}updatePoliceLights(t){for(const e of this.vehicles){const n=e.group.userData.policeLights;if(!n)continue;const i=Math.sin(t*10)>0;n[0].material.color.setHex(i?16722731:4852491),n[1].material.color.setHex(i?990034:3902975)}}buildRain(){const e=new Float32Array(2700);for(let a=0;a<900;a++)e[a*3]=(this.rng()-.5)*150,e[a*3+1]=this.rng()*38,e[a*3+2]=(this.rng()-.5)*150;const n=new _e;n.setAttribute("position",new Oe(e,3));const i=new Js({color:10467284,size:.09,transparent:!0,opacity:.38,depthWrite:!1,sizeAttenuation:!0}),r=new Xr(n,i);r.frustumCulled=!1,this.scene.add(r),this.rain=r}updateRain(t,e){if(!this.rain)return;const n=this.rain.geometry.attributes.position;for(let i=0;i<n.count;i++){let r=n.getY(i)-t*30;r<0&&(r=36+Math.random()*6),n.setY(i,r),n.setX(i,n.getX(i)+t*2.2),n.getX(i)>75&&n.setX(i,-75)}n.needsUpdate=!0,this.rain.position.set(e.x,0,e.z)}buildDistantSkyline(){for(let t=0;t<54;t++){const e=t/54*ns+this.rng()*.08,n=330+this.rng()*170,i=Math.cos(e)*n,r=Math.sin(e)*n,a=18+this.rng()*28,o=18+this.rng()*28,l=24+this.rng()*95,c=this.distantMaterials[Math.floor(this.rng()*this.distantMaterials.length)],h=new G(En(new ut(a,l,o),a,l,o,16,48),[c,c,this.roofMatDistant,this.roofMatDistant,c,c]);h.position.set(i,l/2,r),this.scene.add(h)}}update(t,e,n){this.time+=t,this.updateTraffic(t),this.updatePedestrians(t),this.updateRain(t,e),this.updatePoliceLights(this.time);for(const i of this.rackets){const r=1+Math.sin(this.time*2.4+i.marker.position.x*.08)*.08,a=Math.hypot(e.x-i.pos.x,e.z-i.pos.z);i.beamMat.opacity=a<16?.015:.05,i.ring.scale.setScalar(r),i.diamond.rotation.y+=t*1.2,i.diamond.position.y=2.6+Math.sin(this.time*2+i.marker.position.z)*.12,i.sprite.material.opacity=.22+Math.sin(this.time*2.2+i.marker.position.x)*.08}this.safehouseRing&&(this.safehouseRing.rotation.z+=t*.35,this.safehouseRing.scale.setScalar(1+Math.sin(this.time*2.5)*.05)),this.neonLights.forEach((i,r)=>{i.intensity=(r===0?90:r===1?70:45)*(.86+Math.sin(this.time*(1.8+r*.7)+r)*.14)})}collideCircle(t,e,n=.5){if(t<-292||t>292||e<-292||e>292)return!0;for(const i of this.colliders){const r=ta(t,i.x-i.hw,i.x+i.hw),a=ta(e,i.z-i.hd,i.z+i.hd),o=t-r,l=e-a;if(o*o+l*l<n*n)return!0}return!1}collideAABB(t,e,n,i){for(const r of this.colliders)if(Math.abs(t-r.x)<n+r.hw&&Math.abs(e-r.z)<i+r.hd)return r;return null}getDistrictAt(t,e){let n=fn[0],i=1/0;for(const r of fn){const a=t-r.center[0],o=e-r.center[1],l=a*a+o*o;l<i&&(i=l,n=r)}return n}spawnImpact(t,e=16761468,n=8){const i=new _e,r=new Float32Array(n*3),a=[];for(let c=0;c<n;c++)r[c*3]=t.x,r[c*3+1]=t.y,r[c*3+2]=t.z,a.push(new D((Math.random()-.5)*6,Math.random()*4+1,(Math.random()-.5)*6));i.setAttribute("position",new Oe(r,3));const o=new Js({color:e,size:.12,transparent:!0,opacity:1,depthWrite:!1,blending:xe}),l=new Xr(i,o);this.scene.add(l),this.ambientEffects.push({points:l,velocities:a,life:.55,max:.55})}updateEffects(t){for(let e=this.ambientEffects.length-1;e>=0;e--){const n=this.ambientEffects[e];n.life-=t;const i=n.points.geometry.attributes.position;for(let r=0;r<i.count;r++){const a=n.velocities[r];i.setXYZ(r,i.getX(r)+a.x*t,i.getY(r)+a.y*t,i.getZ(r)+a.z*t),a.y-=9*t}i.needsUpdate=!0,n.points.material.opacity=Math.max(0,n.life/n.max),n.life<=0&&(this.scene.remove(n.points),n.points.geometry.dispose(),n.points.material.dispose(),this.ambientEffects.splice(e,1))}}}const as=Math.PI*2,Ae=Math.PI;function Ys(s,t,e){return Math.max(t,Math.min(e,s))}function Ve(s,t,e,n){return s+(t-s)*(1-Math.exp(-e*n))}function na(s,t,e){let n=((t-s+Ae)%as+as)%as-Ae;return s+n*e}function Kn(s,t,e,n){const i=s-e,r=t-n;return Math.sqrt(i*i+r*r)}function is(s){return new Intl.NumberFormat("en-US").format(Math.floor(s))}class t0{constructor({scene:t,camera:e,renderer:n,world:i,ui:r,audio:a,qualityHandler:o}){this.scene=t,this.camera=e,this.renderer=n,this.world=i,this.ui=r,this.audio=a,this.qualityHandler=o,this.state={money:2500,respect:0,heat:0,health:100,crew:0,chapterIndex:0,mode:"intro",inCar:!1,wanted:!1},this.player=null,this.playerHeading=Ae/2,this.playerCar=null,this.currentCar=null,this.cars=i.vehicles,this.enemies=[],this.attackers=[],this.cops=[],this.effects=[],this.claimProgress=0,this.actionLabel="ACTION",this.actionAvailable=!1,this.actionReady=!1,this.interaction=null,this.driveSpeed=0,this.lastCrime=0,this.timeSinceDamage=10,this.shootCooldown=0,this.copSpawnTimer=4,this.incomeTimer=0,this.incomeNotify=0,this.tutorialTimer=16,this.attackTimer=130,this.rivalAttack=null,this.victoryTimer=-1,this.elapsed=0,this.cameraShake=0,this.camYaw=-Ae/2,this.camPitch=.34,this.camDist=11.4,this.camOrbit=0,this.dragging=!1,this.dragStart={x:0,y:0},this.lastDragAt=0,this.tiltEnabled=!1,this.tiltSteer=0,this.tiltBaseline=null,this.tiltRaw=0,this.qualityHigh=!0,this.hornCooldown=0,this.ambientTicker=0,this.input={x:0,y:0,action:!1,actionPressed:!1,fire:!1,sprint:!1,keys:new Set},this.createPlayer(),this.createPlayerCar(),this.spawnGuards(),this.bindControls(),this.bindUI(),this.setIntroCamera(0),this.ui.setTilt(!1),this.ui.setSound(!0),this.ui.setQuality(!0),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.mode==="playing"&&this.pause()})}createPlayer(){const t=new ve,e=new wt({color:1052950,roughness:.62,metalness:.15}),n=new wt({color:15262161,roughness:.78}),i=new wt({color:8000793,roughness:.55}),r=new wt({color:12158308,roughness:.8}),a=new wt({color:789778,roughness:.68}),o=new wt({color:592397,roughness:.45,metalness:.25}),l=new G(new ut(.62,.78,.34),e);l.position.y=1.08,t.add(l);const c=new G(new ut(.18,.55,.02),n);c.position.set(0,1.1,.18),t.add(c);const h=new G(new ut(.07,.4,.02),i);h.position.set(0,1.08,.195),t.add(h);const u=new G(new We(.21,10,10),r);u.position.y=1.66,t.add(u);const m=new G(new ge(.36,.36,.035,12),a);m.position.y=1.82,t.add(m);const d=new G(new ge(.22,.25,.24,10),a);d.position.y=1.92,t.add(d);const _=new G(new ge(.252,.252,.04,10),new wt({color:3810592,roughness:.7}));_.position.y=1.85,t.add(_);const g=new ut(.17,.62,.2),p=new ve;p.position.set(-.39,1.4,0);const f=new G(g,e);f.position.y=-.28,p.add(f);const w=new G(new We(.09,7,7),r);w.position.y=-.61,p.add(w),t.add(p);const E=new ve;E.position.set(.39,1.4,0);const v=new G(g,e);v.position.y=-.28,E.add(v);const T=new G(new We(.09,7,7),r);T.position.y=-.61,E.add(T);const A=new G(new ut(.09,.1,.34),new wt({color:1579293,metalness:.85,roughness:.26}));A.position.set(.02,-.62,.2),E.add(A),t.add(E);const C=new ut(.2,.68,.24),R=new ve;R.position.set(-.16,.7,0);const M=new G(C,e);M.position.y=-.33,R.add(M);const y=new G(new ut(.23,.14,.38),o);y.position.set(0,-.68,.06),R.add(y),t.add(R);const L=new ve;L.position.set(.16,.7,0);const F=new G(C,e);F.position.y=-.33,L.add(F);const k=new G(new ut(.23,.14,.38),o);k.position.set(0,-.68,.06),L.add(k),t.add(L);const W=new G(new Nn(.6,16),new qt({color:0,transparent:!0,opacity:.38,depthWrite:!1}));W.rotation.x=-Ae/2,W.position.y=.02,W.scale.set(1,.8,1),t.add(W),t.position.set(qe.spawn[0],.28,qe.spawn[1]),t.rotation.y=Ae/2,t.userData={leftArm:p,rightArm:E,leftLeg:R,rightLeg:L,body:l,gun:A},this.scene.add(t),this.player=t,this.playerLight=new Zn(16766904,6,7.5,2),this.playerLight.position.set(t.position.x,2.6,t.position.z),this.scene.add(this.playerLight)}createPlayerCar(){const t=this.world.makeCar(2757914,{name:"EMPEROR",trim:11700803});t.position.set(-50,0,-108),t.rotation.y=0,this.scene.add(t),this.playerCar=this.world.registerVehicle(t,{name:"EMPEROR",ai:!1,kind:"player",color:2757914}),this.playerCar.isPlayerCar=!0}spawnGuards(){let t=0;for(const e of fn){for(const n of Je[e.id]){const i=this.world.racketById.get(n.id),r=1+t%2,a=n.marker[0]-n.shop[0],o=n.marker[1]-n.shop[1],l=Math.max(.001,Math.hypot(a,o)),c=a/l,h=o/l,u=-h,m=c;for(let d=0;d<r;d++){const _=r===1?0:d===0?-1.4:1.4,g=n.marker[0]+c*(1.4+d*1.5)+u*_,p=n.marker[1]+h*(1.4+d*1.5)+m*_,f=this.spawnEnemy(g,p,i,!1);i.guards.push(f)}}t++}}createEnemyMesh(t="guard"){const e=new ve,n=t==="cop"?1846085:t==="attacker"?3215638:2757142,i=new G(new ut(.58,.8,.32),new wt({color:n,roughness:.8,metalness:.1}));i.position.y=1.06,e.add(i);const r=new G(new ut(.2,.52,.02),new wt({color:t==="cop"?12568788:13221806,roughness:.8}));r.position.set(0,1.08,.17),e.add(r);const a=new G(new ut(.06,.36,.02),new wt({color:7147797,roughness:.6}));a.position.set(0,1.05,.185),e.add(a);const o=new G(new We(.2,8,8),new wt({color:10974292,roughness:.8}));o.position.y=1.62,e.add(o);const l=new G(new ge(.25,.25,.05,8),new wt({color:855570,roughness:.7}));l.position.y=1.79,e.add(l);const c=new G(new ut(.4,.65,.26),new wt({color:855570,roughness:.8}));c.position.y=.36,e.add(c);const h=new G(new ut(.16,.62,.19),new wt({color:n,roughness:.8}));h.position.set(-.38,1.18,.02),h.rotation.z=.1,e.add(h);const u=h.clone();u.position.x=.38,u.rotation.z=-.1,e.add(u);const m=new G(new ut(.08,.1,.36),new wt({color:1447706,metalness:.8,roughness:.25}));m.position.set(.36,1,.26),e.add(m);const d=new G(new fr(.15,0),new qt({color:t==="attacker"?16742989:16731726,toneMapped:!1}));d.position.y=2.2,e.add(d),e.userData.mark=d;const _=new G(new Nn(.48,12),new qt({color:0,transparent:!0,opacity:.34,depthWrite:!1}));return _.rotation.x=-Ae/2,_.position.y=.02,e.add(_),e}spawnEnemy(t,e,n,i=!1){const r=this.createEnemyMesh(i?"attacker":"guard");r.position.set(t,.28,e),this.scene.add(r);const a={group:r,hp:62,maxHp:62,racket:n,home:new D(t,.28,e),mode:"idle",fireTimer:.8+Math.random()*1.5,dead:!1,deadTimer:0,attacker:i,phase:Math.random()*as,alerted:!1};return this.enemies.push(a),i&&this.attackers.push(a),a}bindUI(){this.ui.bind({start:()=>this.start(),tilt:()=>this.toggleTilt(),pause:()=>this.pause(),resume:()=>this.resume(),empire:()=>this.openEmpire(),closeEmpire:()=>this.closeEmpire(),sound:()=>this.toggleSound(),quality:()=>this.toggleQuality(),restart:()=>window.location.reload(),hire:()=>this.hireCrew(),respawn:()=>this.respawn(),keepPlaying:()=>this.keepPlaying()})}bindControls(){const t=this.renderer.domElement,e=this.ui.el.stick;this.ui.el.stickKnob;const n=this.ui.el.actionBtn,i=this.ui.el.fireBtn,r=this.ui.el.sprintBtn,a=g=>{const p=e.getBoundingClientRect(),f=p.left+p.width/2,w=p.top+p.height/2;let E=g.clientX-f,v=g.clientY-w;const T=p.width*.37,A=Math.hypot(E,v);A>T&&(E=E/A*T,v=v/A*T),this.input.x=E/T,this.input.y=-v/T,this.ui.setStick(this.input.x,this.input.y,!0)};e.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),e.setPointerCapture(g.pointerId),this.stickPointer=g.pointerId,a(g),this.ui.hideTutorial()}),e.addEventListener("pointermove",g=>{this.stickPointer===g.pointerId&&(g.preventDefault(),a(g))});const o=g=>{this.stickPointer===g.pointerId&&(this.stickPointer=null,this.input.x=0,this.input.y=0,this.ui.setStick(0,0,!1))};e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o),e.addEventListener("lostpointercapture",o);const l=g=>{g.preventDefault(),g.stopPropagation(),this.input.action=!0,this.input.actionPressed=!0,n.classList.add("pressed"),this.ui.hideTutorial()},c=()=>{this.input.action=!1,n.classList.remove("pressed")};n.addEventListener("pointerdown",l),n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c),n.addEventListener("lostpointercapture",c);const h=g=>{g.preventDefault(),g.stopPropagation(),this.input.fire=!0,this.state.inCar&&this.horn(),this.ui.hideTutorial()},u=()=>{this.input.fire=!1};i.addEventListener("pointerdown",h),i.addEventListener("pointerup",u),i.addEventListener("pointercancel",u),i.addEventListener("lostpointercapture",u);const m=g=>{g.preventDefault(),g.stopPropagation(),this.input.sprint=!0,r.classList.add("active")},d=()=>{this.input.sprint=!1,r.classList.remove("active")};r.addEventListener("pointerdown",m),r.addEventListener("pointerup",d),r.addEventListener("pointercancel",d),r.addEventListener("lostpointercapture",d),t.addEventListener("pointerdown",g=>{g.target===t&&(this.dragging=!0,this.dragPointer=g.pointerId,this.dragStart.x=g.clientX,this.dragStart.y=g.clientY,this.lastDragAt=this.elapsed,t.setPointerCapture(g.pointerId))}),t.addEventListener("pointermove",g=>{if(!this.dragging||this.dragPointer!==g.pointerId)return;const p=g.clientX-this.dragStart.x,f=g.clientY-this.dragStart.y;this.dragStart.x=g.clientX,this.dragStart.y=g.clientY,this.lastDragAt=this.elapsed,this.state.inCar?(this.camOrbit-=p*.005,this.camOrbit=Ys(this.camOrbit,-1.5,1.5)):(this.camYaw-=p*.0055,this.camPitch=Ys(this.camPitch+f*.0035,.08,.82))});const _=g=>{this.dragPointer===g.pointerId&&(this.dragging=!1,this.dragPointer=null)};t.addEventListener("pointerup",_),t.addEventListener("pointercancel",_),t.addEventListener("lostpointercapture",_),t.addEventListener("contextmenu",g=>g.preventDefault()),window.addEventListener("keydown",g=>{const p=g.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(p)&&g.preventDefault(),!g.repeat&&(this.input.keys.add(p),p==="e"&&(this.input.action=!0,this.input.actionPressed=!0,this.ui.hideTutorial()),(p==="f"||p===" ")&&(this.input.fire=!0,this.state.inCar&&this.horn()),p==="shift"&&(this.input.sprint=!0),p==="escape"&&(this.state.mode==="playing"?this.pause():this.state.mode==="paused"?this.resume():this.state.mode==="empire"&&this.closeEmpire()),(p==="m"||p==="tab")&&(g.preventDefault(),this.state.mode==="playing"||this.state.mode==="paused"?this.openEmpire():this.state.mode==="empire"&&this.closeEmpire()))}),window.addEventListener("keyup",g=>{const p=g.key.toLowerCase();this.input.keys.delete(p),p==="e"&&(this.input.action=!1),(p==="f"||p===" ")&&(this.input.fire=!1),p==="shift"&&(this.input.sprint=!1)}),window.addEventListener("blur",()=>{this.input.keys.clear(),this.input.action=!1,this.input.fire=!1,this.input.sprint=!1,this.input.x=0,this.input.y=0,this.ui.setStick(0,0,!1)})}onResize(){}get ownedCount(){return this.world.rackets.filter(t=>t.owned).length}get controlledDistricts(){return fn.filter(t=>this.districtOwned(t.id)===Je[t.id].length).length}get incomePerMinute(){const t=this.world.rackets.reduce((e,n)=>e+(n.owned?n.base*15:0),0);return Math.floor(t*(1+this.state.crew*.12))}get crewCost(){return 2e3+this.state.crew*750}isOwned(t){return!!this.world.racketById.get(t)?.owned}districtOwned(t){return Je[t].filter(e=>this.isOwned(e.id)).length}setIntroCamera(t){const e=.45+t*.035,n=205;this.camera.position.set(Math.cos(e)*n,58+Math.sin(t*.24)*5,Math.sin(e)*n),this.camera.lookAt(0,24,0)}start(){if(this.state.mode!=="intro")return;this.state.mode="playing",this.ui.enterGame(),this.audio.start(),this.cameraShake=0;const t=this.camPitch,e=this.camDist*Math.cos(t),n=this.player.position.x,i=this.player.position.z;this.camera.position.set(n+Math.sin(this.camYaw)*e,this.player.position.y+2.7+Math.sin(t)*7.4,i+Math.cos(this.camYaw)*e),this.camera.lookAt(n-Math.sin(this.camYaw)*3.2,this.player.position.y+1.7,i-Math.cos(this.camYaw)*3.2),this.ui.toast("THE CITY IS YOURS TO TAKE"),this.ui.event("1987 · The Vanzetti hold Little Italy.","info"),window.setTimeout(()=>this.ui.event("Objective: take Bella's Diner across the street.","good"),1300),window.setTimeout(()=>this.ui.toast("FOLLOW THE GOLD LIGHT"),2400),window.setTimeout(()=>this.ui.hideTutorial(),18e3),this.ui.update(this,!0)}pause(){this.state.mode==="playing"&&(this.state.mode="paused",this.resetInput(),this.audio.setEngine(0,!1),this.ui.renderEmpire(this),this.ui.openModal("pause"))}resume(){this.state.mode!=="paused"&&this.state.mode!=="empire"||(this.ui.closeModals(),this.state.mode="playing",this.audio.start())}openEmpire(){this.state.mode!=="playing"&&this.state.mode!=="paused"||(this.state.mode="empire",this.resetInput(),this.audio.setEngine(0,!1),this.ui.renderEmpire(this),this.ui.openModal("empire"))}closeEmpire(){this.state.mode==="empire"&&(this.ui.closeModals(),this.state.mode="playing")}resetInput(){this.input.x=0,this.input.y=0,this.input.action=!1,this.input.actionPressed=!1,this.input.fire=!1,this.input.sprint=!1,this.input.keys.clear(),this.ui.setStick(0,0,!1)}toggleSound(){this.audio.start(),this.audio.setEnabled(!this.audio.enabled),this.ui.setSound(this.audio.enabled)}toggleQuality(){this.qualityHigh=!this.qualityHigh,this.ui.setQuality(this.qualityHigh),this.qualityHandler?.(this.qualityHigh),this.ui.toast(this.qualityHigh?"CINEMATIC LIGHTING ON":"PERFORMANCE MODE ON","",1800)}async toggleTilt(){if(this.tiltEnabled){this.tiltEnabled=!1,this.tiltSteer=0,this.ui.setTilt(!1),this.ui.toast("TILT STEERING OFF","",1800);return}if(!window.DeviceOrientationEvent){this.ui.toast("MOTION SENSORS NOT AVAILABLE","bad");return}try{if(typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted")throw new Error("denied");this.tiltHandler||(this.tiltHandler=t=>{const e=screen.orientation&&screen.orientation.angle||window.orientation||0,n=Math.abs(e)%180===90?t.beta:t.gamma;n!=null&&(this.tiltRaw=n,this.tiltBaseline===null&&(this.tiltBaseline=n),this.tiltSteer=Ys((n-this.tiltBaseline)/17,-1,1))},window.addEventListener("deviceorientation",this.tiltHandler)),this.tiltEnabled=!0,this.tiltBaseline=null,this.ui.setTilt(!0),this.ui.toast("TILT STEERING ENABLED","good",2200)}catch{this.ui.toast("MOTION ACCESS DENIED — USE THE STICK","bad",2800),this.ui.setTilt(!1)}}hireCrew(){const t=this.crewCost;if(this.state.crew>=8){this.ui.toast("THE FAMILY IS AT FULL STRENGTH","bad");return}if(this.state.money<t){this.ui.toast("NOT ENOUGH LIQUID CAPITAL","bad");return}this.state.money-=t,this.state.crew+=1,this.audio.cash(),this.ui.toast(`ASSOCIATE #${this.state.crew} JOINED THE FAMILY`,"good",2600),this.ui.event("A new associate is on the payroll. Income +12%.","good"),this.ui.renderEmpire(this),this.ui.update(this,!0)}aliveGuards(t){return t.guards.filter(e=>!e.dead)}findInteraction(){if(this.state.inCar)return{type:"drive"};const t=this.player.position;let e=null,n=1/0;for(const r of this.world.rackets){if(r.owned)continue;const a=Kn(t.x,t.z,r.pos.x,r.pos.z);a<7.2&&a<n&&(e={type:"racket",racket:r,dist:a},n=a)}if(e)return e;for(const r of this.cars){if(r.kind==="police"||r.group===this.currentCar?.group)continue;const a=Kn(t.x,t.z,r.group.position.x,r.group.position.z);a<7.5&&a<n&&(e={type:"car",vehicle:r,dist:a},n=a)}if(e)return e;const i=Kn(t.x,t.z,qe.marker[0],qe.marker[1]);return i<7.5?{type:"safehouse",dist:i}:null}updateInteraction(){if(this.interaction=this.findInteraction(),this.state.inCar){this.actionLabel="EXIT",this.actionAvailable=!0,this.actionReady=!0,this.ui.setInteraction(null);return}if(!this.interaction){this.actionLabel="ACTION",this.actionAvailable=!1,this.actionReady=!1,this.ui.setInteraction(null);return}if(this.interaction.type==="racket"){const{racket:t}=this.interaction,e=this.aliveGuards(t).length;e>0?(this.actionLabel="ENGAGE",this.actionAvailable=!0,this.actionReady=!1,this.ui.setInteraction({kicker:`RIVAL RACKET · ${e} ENFORCER${e>1?"S":""}`,title:t.name,sub:"Tap action or fire to take out the guards"})):(this.actionLabel="TAKE OVER",this.actionAvailable=!0,this.actionReady=!0,this.ui.setInteraction({kicker:"RACKET CLEARED",title:t.name,sub:"Hold the action button to take over"}))}else if(this.interaction.type==="car"){const t=this.interaction.vehicle;this.actionLabel="DRIVE",this.actionAvailable=!0,this.actionReady=!0,this.ui.setInteraction({kicker:t.kind==="player"?"YOUR VEHICLE":"VEHICLE",title:t.name,sub:"Tap to get behind the wheel"})}else if(this.interaction.type==="safehouse"){const t=this.state.heat>.2||this.state.health<99;this.actionLabel=t?"LAY LOW":"EMPIRE",this.actionAvailable=!0,this.actionReady=!0,this.ui.setInteraction({kicker:"SAFEHOUSE · CASA NOSTRA",title:"The Family",sub:t?"Tap to heal & clear heat · $500":"Tap to open the family ledger"})}}handleAction(t){const e=this.interaction;if(!e){this.claimProgress=Math.max(0,this.claimProgress-t*2.5);return}if(this.input.actionPressed){if(this.input.actionPressed=!1,e.type==="drive"){this.exitCar();return}if(e.type==="car"){this.enterCar(e.vehicle);return}if(e.type==="safehouse"){this.useSafehouse();return}if(e.type==="racket"&&this.aliveGuards(e.racket).length>0){this.shoot();return}}e.type==="racket"?this.aliveGuards(e.racket).length===0&&this.input.action?(this.claimProgress=Math.min(1,this.claimProgress+t/1.35),this.claimProgress>=1&&(this.claimRacket(e.racket),this.claimProgress=0)):this.claimProgress=Math.max(0,this.claimProgress-t*2.5):this.claimProgress=Math.max(0,this.claimProgress-t*2.5)}useSafehouse(){if(!(this.state.heat>.2||this.state.health<99)){this.openEmpire();return}if(this.state.money<500){this.ui.toast("YOU CANNOT AFFORD TO LAY LOW","bad");return}this.state.money-=500,this.state.heat=0,this.state.health=100,this.timeSinceDamage=10,this.removeCops(),this.audio.cash(),this.ui.toast("YOU LAID LOW · HEAT CLEARED","good"),this.ui.event("Bribes paid. Wounds patched. The heat is off.","good"),this.ui.update(this,!0)}claimRacket(t){if(t.owned)return;t.owned=!0,this.world.setRacketState(t,"owned");const e=this.districtOwned(t.district)===Je[t.district].length,n=700+t.base*20;if(this.state.money+=n,this.state.respect+=30,this.state.heat=Math.min(5,this.state.heat+.35),this.lastCrime=0,this.audio.claim(),this.ui.toast(`${t.name.toUpperCase()} IS YOURS · +$${is(n)}`,"good",3400),this.ui.event(`${t.name} is paying tribute. +$${is(n)}`,"cash"),this.ui.update(this,!0),this.world.spawnImpact(new D(t.pos.x,2,t.pos.z),15320175,20),this.cameraShake=.28,!e&&this.districtOwned(t.district)===Je[t.district].length){const i=Rl[t.district],r=1500+Je[t.district].length*300;this.state.money+=r,this.state.respect+=55,this.ui.toast(`${i.name.toUpperCase()} IS FAMILY TERRITORY · +$${is(r)}`,"good",3800),this.ui.event(`The ${i.rival} surrender ${i.name}.`,"good"),this.audio.chapter()}this.ui.hideTutorial()}enterCar(t){!t||this.state.inCar||(this.currentCar=t,this.state.inCar=!0,t.ai=!1,t.speed=0,this.driveSpeed=0,this.player.visible=!1,this.player.position.set(t.group.position.x,.28,t.group.position.z),this.playerHeading=t.group.rotation.y,this.camOrbit=0,this.ui.driveHud.classList.remove("hidden"),this.ui.toast(t.kind==="player"?"THE EMPEROR IS YOURS":`YOU TOOK THE ${t.name}`,"",1800),this.ui.hideTutorial(),this.audio.start())}exitCar(){if(!this.state.inCar||!this.currentCar)return;const t=this.currentCar,e=t.group.rotation.y,n=Math.cos(e)*3,i=-Math.sin(e)*3,r=[[t.group.position.x+n,t.group.position.z+i],[t.group.position.x-n,t.group.position.z-i],[t.group.position.x-Math.sin(e)*4,t.group.position.z-Math.cos(e)*4]];let a=!1;for(const[o,l]of r)if(!this.world.collideCircle(o,l,.55)){this.player.position.set(o,.28,l),a=!0;break}a||this.player.position.set(t.group.position.x+3,.28,t.group.position.z),this.player.visible=!0,this.playerHeading=e,this.camYaw=e+Ae,this.state.inCar=!1,this.currentCar=null,this.driveSpeed=0,t.speed=0,this.ui.driveHud.classList.add("hidden"),this.audio.setEngine(0,!1),this.ui.setInteraction(null)}updateDriving(t){const e=this.currentCar;if(!e)return;let n=this.input.y;const i=this.input.keys;(i.has("w")||i.has("arrowup"))&&(n=1),(i.has("s")||i.has("arrowdown"))&&(n=-1),e.speed,n>.06?e.speed+=n*19*t:n<-.06?e.speed+=n*12*t:e.speed*=1-1.35*t,e.speed=Ys(e.speed,-11,37),Math.abs(e.speed)<.04&&(e.speed=0);let r=this.input.x;this.tiltEnabled&&Math.abs(this.input.x)<.06?r=this.tiltSteer:this.tiltEnabled&&(r=this.input.x*.45+this.tiltSteer*.55),(i.has("a")||i.has("arrowleft"))&&(r=-1),(i.has("d")||i.has("arrowright"))&&(r=1);const a=Math.min(1,Math.abs(e.speed)/4);e.heading=e.group.rotation.y,e.heading+=r*(1.35+.7*Math.min(Math.abs(e.speed)/18,1))*t*a*(e.speed>=0?1:-1),e.group.rotation.y=e.heading;const o=Math.sin(e.heading),l=Math.cos(e.heading),c=e.speed*t,h=e.group.position.x+o*c,u=e.group.position.z+l*c;if(this.world.collideCircle(h,u,1.65)?(Math.abs(e.speed)>16&&(this.cameraShake=Math.min(.7,Math.abs(e.speed)*.016),this.damagePlayer(Math.min(9,Math.abs(e.speed)*.18),!0)),e.speed*=-.14,this.audio.hit()):(e.group.position.x=h,e.group.position.z=u),this.driveSpeed=e.speed,this.player.position.set(e.group.position.x,.28,e.group.position.z),this.playerHeading=e.heading,this.audio.setEngine(e.speed,!0),this.input.fire&&this.horn(),this.hornCooldown=Math.max(0,this.hornCooldown-t),Math.abs(e.speed)>4)for(const d of this.world.peds)Kn(e.group.position.x,e.group.position.z,d.group.position.x,d.group.position.z)<3.2&&(d.dir*=-1,this.world.panic=Math.max(this.world.panic,3))}horn(){this.hornCooldown>0||(this.hornCooldown=.45,this.audio.tone(220,.22,"square",.08,60),window.setTimeout(()=>this.audio.tone(180,.18,"square",.06,-30),80))}movePlayer(t){const e=this.input.keys;let n=this.input.x,i=this.input.y;(e.has("a")||e.has("arrowleft"))&&(n-=1),(e.has("d")||e.has("arrowright"))&&(n+=1),(e.has("w")||e.has("arrowup"))&&(i+=1),(e.has("s")||e.has("arrowdown"))&&(i-=1);const r=Math.hypot(n,i);r>1&&(n/=r,i/=r);const a=Math.hypot(n,i)>.12,o=this.input.sprint||e.has("shift"),l=o?12.2:7.2;let c=this.player.userData.walkPhase||0;if(a){const h=-Math.sin(this.camYaw),u=-Math.cos(this.camYaw),m=Math.cos(this.camYaw),d=-Math.sin(this.camYaw);let _=h*i+m*n,g=u*i+d*n;const p=Math.hypot(_,g);_/=p,g/=p;const f=l*t,w=this.player.position.x,E=this.player.position.z;this.world.collideCircle(w+_*f,E,.5)||(this.player.position.x+=_*f),this.world.collideCircle(this.player.position.x,E+g*f,.5)||(this.player.position.z+=g*f);const v=Math.atan2(_,g);this.playerHeading=na(this.playerHeading,v,1-Math.exp(-14*t)),this.player.rotation.y=this.playerHeading,c+=t*(o?13:9);const T=Math.sin(c)*(o?.8:.55);this.player.userData.leftLeg.rotation.x=T,this.player.userData.rightLeg.rotation.x=-T,this.player.userData.leftArm.rotation.x=-T*.7,this.player.userData.rightArm.rotation.x=T*.45,this.player.position.y=.28+Math.abs(Math.sin(c))*.035,this.elapsed-this.lastDragAt>2.4&&Math.abs(n)<.25&&(this.camYaw=na(this.camYaw,this.playerHeading+Ae,1-Math.exp(-.55*t)))}else c=0,this.player.userData.leftLeg.rotation.x=Ve(this.player.userData.leftLeg.rotation.x,0,10,t),this.player.userData.rightLeg.rotation.x=Ve(this.player.userData.rightLeg.rotation.x,0,10,t),this.player.userData.leftArm.rotation.x=Ve(this.player.userData.leftArm.rotation.x,0,10,t),this.player.userData.rightArm.rotation.x=Ve(this.player.userData.rightArm.rotation.x,0,10,t),this.player.position.y=Ve(this.player.position.y,.28,12,t);this.player.userData.walkPhase=c,this.playerHeading=this.player.rotation.y}nearestTarget(t=30){let e=null,n=t;const i=this.player.position.x,r=this.player.position.z;for(const a of this.enemies){if(a.dead)continue;const o=Kn(i,r,a.group.position.x,a.group.position.z);o<n&&(n=o,e=a)}return e}shoot(){if(this.state.inCar||this.state.mode!=="playing"||this.shootCooldown>0)return;this.shootCooldown=.23,this.audio.gunshot(),this.cameraShake=Math.max(this.cameraShake,.08),this.world.panic=4,this.state.heat=Math.min(5,this.state.heat+.2),this.lastCrime=0;const t=new D(this.player.position.x,1.35,this.player.position.z),e=new D(Math.sin(this.playerHeading),0,Math.cos(this.playerHeading));t.add(e.clone().multiplyScalar(.45)),t.x+=Math.cos(this.playerHeading)*.25;const n=this.nearestTarget(31);let i;if(n){const a=n.group.position;i=new D(a.x,1.1,a.z);const o=i.clone().sub(t).normalize();this.playerHeading=Math.atan2(o.x,o.z),this.player.rotation.y=this.playerHeading,this.spawnTracer(t,i,16766362),Math.random()<.88?(n.hp-=40,n.alerted=!0,n.mode="chase",this.world.spawnImpact(i,16756828,6),this.audio.hit(),n.hp<=0&&this.killEnemy(n)):this.world.spawnImpact(i.clone().add(new D(0,.4,0)),10128502,4)}else i=t.clone().add(e.clone().multiplyScalar(24)),this.spawnTracer(t,i,16766362);const r=new ss(new Ri({map:this.world.glowTexture,color:16767136,transparent:!0,opacity:.95,blending:xe,depthWrite:!1}));r.scale.set(1.1,1.1,1),r.position.copy(t),this.scene.add(r),this.effects.push({object:r,life:.09,max:.09,fade:!0,type:"flash"}),this.ui.hideTutorial()}spawnTracer(t,e,n){const i=new _e().setFromPoints([t,e]),r=new oc({color:n,transparent:!0,opacity:.9,blending:xe,depthWrite:!1}),a=new Vh(i,r);this.scene.add(a),this.effects.push({object:a,life:.11,max:.11,fade:!0,type:"tracer"})}killEnemy(t){if(t.dead)return;t.dead=!0,t.deadTimer=0,t.mode="dead",t.group.userData.mark.visible=!1;const e=45+Math.floor(Math.random()*40);this.state.money+=e,this.state.respect+=8,this.state.heat=Math.min(5,this.state.heat+.55),this.lastCrime=0,this.audio.cash(),this.world.spawnImpact(new D(t.group.position.x,1.2,t.group.position.z),16747370,12),this.ui.event(`Enforcer down. +$${e}`,"bad"),t.racket&&!t.racket.owned&&!t.attacker&&this.aliveGuards(t.racket).length===0&&(this.world.setRacketState(t.racket,"cleared"),this.ui.toast("THE GUARDS ARE DOWN · MOVE IN","good",3e3),this.ui.event(`${t.racket.name} is unprotected.`,"info")),t.attacker&&this.attackers.filter(i=>!i.dead).length===0&&this.rivalAttack&&this.resolveRivalAttack()}damagePlayer(t,e=!1){this.state.mode==="playing"&&(this.state.health-=t,this.timeSinceDamage=0,this.cameraShake=Math.max(this.cameraShake,.16),this.ui.damageFlash(),this.audio.hit(),this.state.health<=0&&(this.state.health=0,this.die()))}die(){this.state.mode="dead",this.resetInput(),this.audio.setEngine(0,!1),this.state.inCar&&this.exitCar();const t=Math.min(Math.floor(this.state.money*.18),4500);this.state.money=Math.max(0,this.state.money-t),this.deathCost=t,this.ui.setDeathCost(t),this.ui.openModal("death"),this.ui.update(this,!0)}respawn(){this.ui.closeModals(),this.state.mode="playing",this.state.health=100,this.state.heat=0,this.timeSinceDamage=10,this.removeCops(),this.player.visible=!0,this.player.position.set(qe.spawn[0],.28,qe.spawn[1]),this.playerHeading=Ae/2,this.camYaw=-Ae/2,this.camPitch=.34,this.player.rotation.y=Ae/2,this.resetInput(),this.ui.update(this,!0),this.ui.toast("BACK ON YOUR FEET","good")}updateEnemies(t){const e=this.player.position;for(const n of this.enemies){if(n.dead){n.deadTimer+=t,n.group.rotation.z=Math.min(Ae/2,n.deadTimer*4),n.group.position.y=Math.max(.12,.28-n.deadTimer*.2),n.deadTimer>1.6&&n.group.parent&&(this.scene.remove(n.group),n.group.parent=null);continue}const i=n.group.position,r=Kn(i.x,i.z,e.x,e.z),a=n.racket?Kn(i.x,i.z,n.racket.pos.x,n.racket.pos.z):0;if(!n.alerted&&r<22&&(n.alerted=!0),!n.alerted&&n.attacker&&r<60&&(n.alerted=!0),n.alerted&&r<44){n.mode="chase";const o=e.x-i.x,l=e.z-i.z,c=Math.max(.001,Math.hypot(o,l));if(r>2.5){const u=i.x+o/c*3.4*t,m=i.z+l/c*3.4*t;this.world.collideCircle(u,i.z,.38)||(i.x=u),this.world.collideCircle(i.x,m,.38)||(i.z=m)}if(n.group.rotation.y=Math.atan2(o,l),n.fireTimer-=t,r<19&&n.fireTimer<=0){n.fireTimer=1.3+Math.random()*1.2;const h=new D(i.x,1.35,i.z),u=new D(e.x+(Math.random()-.5)*.6,1.1,e.z+(Math.random()-.5)*.6);this.spawnTracer(h,u,16738906),this.audio.enemyShot(),Math.random()<.55&&this.damagePlayer(this.state.inCar?4:7+Math.random()*3),this.world.spawnImpact(u,16738906,3)}}else{n.mode="idle";const o=this.elapsed*.45+n.phase,l=n.home.x+Math.cos(o)*1.1,c=n.home.z+Math.sin(o)*1.1;this.world.collideCircle(l,c,.35)||(i.x=Ve(i.x,l,1.4,t),i.z=Ve(i.z,c,1.4,t)),n.group.rotation.y=o+Ae/2,r>55&&a>50&&(n.alerted=!1)}n.group.userData.mark&&(n.group.userData.mark.rotation.y+=t*2.5,n.group.userData.mark.position.y=2.2+Math.sin(this.elapsed*3+n.phase)*.08)}}updateHeat(t){this.lastCrime+=t,this.lastCrime>10&&this.state.heat>0&&(this.state.heat=Math.max(0,this.state.heat-t*.085));const e=Math.floor(this.state.heat),n=e>=2;if(n&&!this.state.wanted&&(this.state.wanted=!0,this.ui.event("POLICE ALERT · cruisers are moving in.","bad")),!n&&this.state.wanted&&(this.state.wanted=!1,this.removeCops(),this.ui.event("The heat died down. The cops backed off.","good"),this.ui.toast("HEAT CLEARED","good",2200)),n){this.copSpawnTimer-=t;const i=Math.min(3,e-1);this.cops.length<i&&this.copSpawnTimer<=0&&(this.spawnCop(),this.copSpawnTimer=6)}}spawnCop(){const t=Math.random()*as;let e=this.player.position.x+Math.cos(t)*70,n=this.player.position.z+Math.sin(t)*70;for(let a=0;a<12&&this.world.collideCircle(e,n,2.4);a++)e=this.player.position.x+Math.cos(t+a)*(60+a*4),n=this.player.position.z+Math.sin(t+a)*(60+a*4);const i=this.world.makeCar(1053723,{police:!0,name:"POLICE CRUISER"});i.position.set(e,0,n),i.rotation.y=Math.atan2(this.player.position.x-e,this.player.position.z-n),this.scene.add(i);const r={group:i,heading:i.rotation.y,speed:0,cooldown:0,siren:0,lightPhase:0};this.cops.push(r),this.audio.siren()}removeCops(){for(const t of this.cops)this.scene.remove(t.group);this.cops=[]}updateCops(t){for(let e=this.cops.length-1;e>=0;e--){const n=this.cops[e],i=n.group.position,r=this.player.position,a=r.x-i.x,o=r.z-i.z,l=Math.hypot(a,o);if(l>190){this.scene.remove(n.group),this.cops.splice(e,1);continue}const c=Math.atan2(a,o);n.heading=na(n.heading,c,1-Math.exp(-2.2*t)),n.group.rotation.y=n.heading;const h=l>10?23:11;n.speed=Ve(n.speed,h,1.8,t);const u=i.x+Math.sin(n.heading)*n.speed*t,m=i.z+Math.cos(n.heading)*n.speed*t;if(!this.world.collideCircle(u,m,1.7))i.x=u,i.z=m;else{const _=i.x+Math.sin(n.heading+1.2)*n.speed*t,g=i.z+Math.cos(n.heading+1.2)*n.speed*t;this.world.collideCircle(_,g,1.7)||(i.x=_,i.z=g),n.speed*=.6}n.cooldown-=t,l<5.4&&n.cooldown<=0&&(n.cooldown=1.3,this.damagePlayer(this.state.inCar?5:9),this.cameraShake=.22,this.state.inCar&&this.currentCar&&(this.currentCar.speed*=.72)),n.siren-=t,n.siren<=0&&l<80&&(n.siren=5.2,this.audio.siren());const d=n.group.userData.policeLights;if(d){const _=Math.sin(this.elapsed*12)>0;d[0].material.color.setHex(_?16722731:4852491),d[1].material.color.setHex(_?990034:3902975)}}}updateIncome(t){if(this.incomeTimer+=t,this.incomeNotify+=t,this.incomeTimer>=4){this.incomeTimer-=4;const n=this.world.rackets.reduce((i,r)=>i+(r.owned?r.base:0),0)*(1+this.state.crew*.12);n>0&&(this.state.money+=n,this.incomeNotify>18&&(this.incomeNotify=0,this.ui.event(`Tribute collected: +$${is(n*4)}/min.`,"cash")))}}updateChapters(t){if(this.victoryTimer>=0){this.victoryTimer-=t,this.victoryTimer<=0&&(this.victoryTimer=-1,this.showVictory());return}if(this.state.chapterIndex>=Li.length)return;const e=Li[this.state.chapterIndex];e.progress(this)>=e.goal&&this.completeChapter(e)}completeChapter(t){this.state.money+=t.reward,this.state.respect+=t.respect,this.state.chapterIndex+=1,this.audio.chapter(),this.ui.showChapter(t),this.ui.toast(`CHAPTER COMPLETE · +$${is(t.reward)}`,"good",3600),this.ui.event(`${t.title} complete. The family grows stronger.`,"good"),this.cameraShake=.2,this.state.chapterIndex>=Li.length&&(this.victoryTimer=4.2),this.ui.update(this,!0)}showVictory(){this.state.mode==="playing"&&(this.state.mode="victory",this.resetInput(),this.audio.setEngine(0,!1),this.ui.setVictory(this),this.ui.openModal("victory"),this.audio.chapter())}keepPlaying(){this.ui.closeModals(),this.state.mode="playing",this.state.chapterIndex=Li.length}updateRivalAttack(t){if(!this.state.wanted&&this.ownedCount>0&&(this.attackTimer-=t),!this.rivalAttack&&this.attackTimer<=0&&this.ownedCount>0){const e=this.world.rackets.filter(r=>r.owned),n=e[Math.floor(Math.random()*e.length)];this.rivalAttack={racket:n,timeLeft:65},n.underAttack=!0,this.attackers=[];const i=Rl[n.district];for(let r=0;r<2;r++){const a=r*2.4+Math.random(),o=this.spawnEnemy(n.pos.x+Math.cos(a)*7,n.pos.z+Math.sin(a)*7,n,!0);o.alerted=!0,o.home.set(n.pos.x+Math.cos(a)*5,.28,n.pos.z+Math.sin(a)*5)}this.ui.toast(`${n.name.toUpperCase()} IS UNDER ATTACK`,"bad",4200),this.ui.event(`${i.rival} enforcers are hitting ${n.name}. Defend it.`,"bad"),this.audio.siren()}if(this.rivalAttack){if(this.rivalAttack.timeLeft-=t,this.attackers.filter(n=>!n.dead).length===0)this.resolveRivalAttack();else if(this.rivalAttack.timeLeft<=0){const n=this.rivalAttack.racket;n.owned=!1,n.underAttack=!1,this.world.setRacketState(n,"rival"),this.ui.toast(`${n.name.toUpperCase()} HAS FALLEN`,"bad",4e3),this.ui.event(`You lost ${n.name}. The rival family moved back in.`,"bad"),this.rivalAttack=null,this.attackTimer=150,this.state.respect=Math.max(0,this.state.respect-30),this.audio.chapter()}}}resolveRivalAttack(){if(!this.rivalAttack)return;const t=this.rivalAttack.racket;t.underAttack=!1;const e=900;this.state.money+=e,this.state.respect+=35,this.ui.toast("RACKET DEFENDED · +$900","good",3200),this.ui.event(`You held ${t.name}. The family remembers.`,"good"),this.audio.cash(),this.attackers=[],this.rivalAttack=null,this.attackTimer=170}update(t){if(t=Math.min(t,.05),this.elapsed+=t,this.state.mode==="intro"){this.setIntroCamera(this.elapsed),this.world.update(t,this.player.position,this.camera),this.world.updateEffects(t),this.updateEffects(t);return}if(this.state.mode!=="playing"){this.world.update(t*.15,this.player.position,this.camera),this.world.updateEffects(t),this.updateEffects(t);return}this.shootCooldown=Math.max(0,this.shootCooldown-t),this.timeSinceDamage+=t,this.timeSinceDamage>6&&this.state.health<100&&(this.state.health=Math.min(100,this.state.health+t*2.6)),this.updateInteraction(),this.handleAction(t),this.state.inCar?this.updateDriving(t):(this.movePlayer(t),this.input.fire&&this.shoot()),this.updateEnemies(t),this.updateHeat(t),this.updateCops(t),this.updateIncome(t),this.updateRivalAttack(t),this.updateChapters(t),this.playerLight&&(this.playerLight.position.set(this.player.position.x,2.6,this.player.position.z),this.playerLight.intensity=this.state.inCar?4:6),this.updateCamera(t),this.world.update(t,this.player.position,this.camera),this.world.updateEffects(t),this.updateEffects(t),this.tutorialTimer>0&&(this.tutorialTimer-=t,this.tutorialTimer<=0&&this.ui.hideTutorial()),this.ui.update(this),this.ui.actionProgress=this.claimProgress}updateEffects(t){for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e];n.life-=t,n.fade&&(n.object.material.opacity=Math.max(0,n.life/n.max)),n.life<=0&&(this.scene.remove(n.object),n.object.geometry&&n.object.geometry.dispose(),n.object.material&&n.object.material.dispose(),this.effects.splice(e,1))}}updateCamera(t){const e=this.player.position;let n,i,r,a,o,l;if(this.state.inCar&&this.currentCar){const g=this.currentCar,p=g.heading,f=p+Ae+this.camOrbit,w=10.6,E=Math.sin(p),v=Math.cos(p);n=g.group.position.x+Math.sin(f)*w,i=4.6+Math.abs(g.speed)*.014,r=g.group.position.z+Math.cos(f)*w,a=g.group.position.x+E*4.5,o=1.35,l=g.group.position.z+v*4.5,this.camOrbit=Ve(this.camOrbit,0,1.1,t),this.camYaw=p+Ae}else{const g=this.camPitch,p=this.camDist*Math.cos(g);n=e.x+Math.sin(this.camYaw)*p,i=e.y+2.7+Math.sin(g)*7.4,r=e.z+Math.cos(this.camYaw)*p,a=e.x-Math.sin(this.camYaw)*3.2,o=e.y+1.7,l=e.z-Math.cos(this.camYaw)*3.2}const c=e.x,h=e.z,u=n-c,m=r-h,d=Math.hypot(u,m);if(d>.1){let g=d;for(let p=1.8;p<=d;p+=.45)if(this.world.collideCircle(c+u/d*p,h+m/d*p,.35)){g=Math.max(1.6,p-.65);break}g<d&&(n=c+u/d*g,r=h+m/d*g,i=Math.max(i-(d-g)*.18,2.2))}const _=this.state.mode==="playing"&&this.elapsed<4?2.2:5.8;this.camera.position.x=Ve(this.camera.position.x,n,_,t),this.camera.position.y=Ve(this.camera.position.y,i,_,t),this.camera.position.z=Ve(this.camera.position.z,r,_,t),this.cameraShake>.001&&(this.camera.position.x+=(Math.random()-.5)*this.cameraShake,this.camera.position.y+=(Math.random()-.5)*this.cameraShake*.6,this.camera.position.z+=(Math.random()-.5)*this.cameraShake,this.cameraShake=Ve(this.cameraShake,0,9,t)),this.camera.lookAt(a,o,l)}}const st=s=>document.getElementById(s),er=new Intl.NumberFormat("en-US");function Qn(s){return"$"+er.format(Math.max(0,Math.floor(s)))}function Ll(s){return s>=1e6?"$"+(s/1e6).toFixed(1)+"M":s>=1e4?"$"+(s/1e3).toFixed(1)+"K":Qn(s)}class e0{constructor(){this.el={boot:st("boot"),intro:st("intro"),hud:st("hud"),startBtn:st("startBtn"),introTiltBtn:st("introTiltBtn"),introTiltState:st("introTiltState"),rankName:st("rankName"),respectValue:st("respectValue"),moneyValue:st("moneyValue"),heatStars:st("heatStars"),districtName:st("districtName"),districtFill:st("districtFill"),districtCount:st("districtCount"),districtStatus:st("districtStatus"),minimap:st("minimap"),minimapLabel:st("minimapLabel"),chapterLabel:st("chapterLabel"),objectiveTitle:st("objectiveTitle"),objectiveDesc:st("objectiveDesc"),objectiveReward:st("objectiveReward"),objectiveFill:st("objectiveFill"),objectiveCount:st("objectiveCount"),eventFeed:st("eventFeed"),healthValue:st("healthValue"),healthFill:st("healthFill"),contextPrompt:st("contextPrompt"),contextKicker:st("contextKicker"),contextTitle:st("contextTitle"),contextSub:st("contextSub"),actionBtn:st("actionBtn"),actionLabel:st("actionLabel"),actionProgress:st("actionProgress"),fireBtn:st("fireBtn"),sprintBtn:st("sprintBtn"),stick:st("stick"),stickKnob:st("stickKnob"),driveHud:st("driveHud"),speedValue:st("speedValue"),gearValue:st("gearValue"),carName:st("carName"),driveTilt:st("driveTilt"),tutorial:st("tutorial"),toasts:st("toasts"),chapterFlash:st("chapterFlash"),chapterFlashTitle:st("chapterFlashTitle"),chapterFlashReward:st("chapterFlashReward"),wantedBanner:st("wantedBanner"),pauseModal:st("pauseModal"),empireModal:st("empireModal"),deathModal:st("deathModal"),victoryModal:st("victoryModal"),pauseDistrict:st("pauseDistrict"),pauseTiltBtn:st("pauseTiltBtn"),soundBtn:st("soundBtn"),qualityBtn:st("qualityBtn"),empireMoney:st("empireMoney"),empireIncome:st("empireIncome"),empireCrew:st("empireCrew"),districtList:st("districtList"),territoryCanvas:st("territoryCanvas"),territoryCopy:st("territoryCopy"),empireRank:st("empireRank"),rankFill:st("rankFill"),rankNext:st("rankNext"),hireBtn:st("hireBtn"),hireCost:st("hireCost"),deathCost:st("deathCost"),victoryMoney:st("victoryMoney"),victoryRespect:st("victoryRespect"),damage:null},this.minimapCtx=this.el.minimap.getContext("2d"),this.territoryCtx=this.el.territoryCanvas.getContext("2d"),this.lastHud=0,this.lastMap=0,this.toastTimers=[],this.interaction=null;const t=document.createElement("div");t.className="damage-vignette",document.getElementById("game").appendChild(t),this.el.damage=t}bind(t){this.el.startBtn.addEventListener("click",()=>t.start?.()),this.el.introTiltBtn.addEventListener("click",()=>t.tilt?.()),this.el.pauseTiltBtn.addEventListener("click",()=>t.tilt?.()),st("pauseBtn").addEventListener("click",()=>t.pause?.()),st("resumeBtn").addEventListener("click",()=>t.resume?.()),st("pauseEmpireBtn").addEventListener("click",()=>t.empire?.()),st("empireBtn").addEventListener("click",()=>t.empire?.()),st("empireClose").addEventListener("click",()=>t.closeEmpire?.()),st("soundBtn").addEventListener("click",()=>t.sound?.()),st("qualityBtn").addEventListener("click",()=>t.quality?.()),st("restartBtn").addEventListener("click",()=>t.restart?.()),st("hireBtn").addEventListener("click",()=>t.hire?.()),st("respawnBtn").addEventListener("click",()=>t.respawn?.()),st("keepPlayingBtn").addEventListener("click",()=>t.keepPlaying?.())}hideBoot(){this.el.boot.classList.add("out"),window.setTimeout(()=>this.el.boot.classList.add("hidden"),800)}enterGame(){this.el.intro.classList.add("leaving"),window.setTimeout(()=>this.el.intro.classList.add("hidden"),950),this.el.hud.classList.remove("hidden"),requestAnimationFrame(()=>this.el.hud.classList.add("visible"))}showHud(){this.el.hud.classList.remove("hidden"),this.el.hud.classList.add("visible")}setTilt(t,e=!0){this.el.introTiltBtn.classList.toggle("on",t),this.el.introTiltState.textContent=t?"ON":"OFF",this.el.pauseTiltBtn.classList.toggle("on",t),this.el.pauseTiltBtn.querySelector("span").textContent=t?"ON":"OFF",this.el.driveTilt.textContent=e?t?"TILT STEERING ON":"TILT STEERING OFF":"TILT UNAVAILABLE"}setSound(t){this.el.soundBtn.classList.toggle("on",t),this.el.soundBtn.querySelector("span").textContent=t?"ON":"OFF"}setQuality(t){this.el.qualityBtn.classList.toggle("on",t),this.el.qualityBtn.querySelector("span").textContent=t?"HIGH":"LOW"}update(t,e=!1){const n=performance.now();if(!e&&n-this.lastHud<80)return;this.lastHud=n;const i=t.state;this.el.moneyValue.textContent=er.format(Math.floor(i.money)),this.el.respectValue.textContent=er.format(Math.floor(i.respect)),this.el.rankName.textContent=Cl(i.respect).name;const r=Math.min(5,Math.floor(i.heat));[...this.el.heatStars.children].forEach((m,d)=>{m.classList.toggle("on",d<r),m.classList.toggle("hot",d<r&&r>=3)}),this.el.wantedBanner.classList.toggle("hidden",r<2),this.el.healthValue.textContent=Math.max(0,Math.ceil(i.health)),this.el.healthFill.style.width=Math.max(0,i.health)+"%",this.el.healthFill.classList.toggle("low",i.health<30);const a=t.world.getDistrictAt(t.player.position.x,t.player.position.z),o=Je[a.id].length,l=t.districtOwned(a.id),c=o?l/o:0;this.el.districtName.textContent=a.short,this.el.minimapLabel.textContent=a.short,this.el.districtFill.style.width=Math.round(c*100)+"%",this.el.districtCount.textContent=`${l} / ${o} RACKETS`,this.el.districtStatus.textContent=c>=1?"FAMILY CONTROL":`${a.rival.toUpperCase()} ${Math.round((1-c)*100)}%`,this.el.pauseDistrict.textContent=`${a.short} · ${Math.round(c*100)}%`;const h=Li[Math.min(i.chapterIndex,Li.length-1)];this.el.chapterLabel.textContent=h.label,this.el.objectiveTitle.textContent=h.title,this.el.objectiveDesc.textContent=h.desc,this.el.objectiveReward.textContent=Qn(h.reward);const u=Math.min(h.goal,h.progress(t));this.el.objectiveFill.style.width=Math.round(u/h.goal*100)+"%",this.el.objectiveCount.textContent=`${u} / ${h.goal}`,this.el.speedValue.textContent=Math.round(Math.abs(t.driveSpeed)*2.1),this.el.gearValue.textContent=t.driveSpeed<-.5?"R":"D",this.el.driveHud.classList.toggle("hidden",!i.inCar),this.el.fireBtn.querySelector("span").textContent=i.inCar?"HORN":"FIRE",this.el.fireBtn.classList.toggle("dim",i.inCar),this.el.sprintBtn.classList.toggle("hidden",i.inCar),this.el.actionLabel.textContent=t.actionLabel||"ENTER",this.el.actionBtn.classList.toggle("dim",!t.actionAvailable),this.el.actionBtn.classList.toggle("ready",!!t.actionReady),this.el.actionBtn.style.setProperty("--p",t.claimProgress.toFixed(3)),t.actionProgress!==void 0&&this.el.actionBtn.style.setProperty("--p",t.claimProgress.toFixed(3)),n-this.lastMap>130&&(this.lastMap=n,this.drawMinimap(t))}setInteraction(t){if(!t){this.el.contextPrompt.classList.add("hidden");return}this.el.contextPrompt.classList.remove("hidden"),this.el.contextKicker.textContent=t.kicker||"",this.el.contextTitle.textContent=t.title||"",this.el.contextSub.textContent=t.sub||""}toast(t,e="",n=2600){const i=document.createElement("div");for(i.className="toast "+e,i.innerHTML=`<i></i><b>${t}</b>`,this.el.toasts.appendChild(i);this.el.toasts.children.length>3;)this.el.toasts.firstElementChild.remove();const r=window.setTimeout(()=>{i.classList.add("out"),window.setTimeout(()=>i.remove(),500)},n);this.toastTimers.push(r)}event(t,e=""){const n=document.createElement("div");for(n.className="event-line "+e,n.innerHTML=`<i></i><span>${t}</span>`,this.el.eventFeed.prepend(n);this.el.eventFeed.children.length>4;)this.el.eventFeed.lastElementChild.remove();window.setTimeout(()=>{n.classList.add("fade"),window.setTimeout(()=>n.remove(),900)},5200)}hideTutorial(){this.el.tutorial.classList.add("out")}showChapter(t){this.el.chapterFlashTitle.textContent=t.title,this.el.chapterFlashReward.textContent=`${Qn(t.reward)} · RESPECT +${t.respect}`,this.el.chapterFlash.classList.remove("hidden","out"),window.setTimeout(()=>this.el.chapterFlash.classList.add("out"),2500),window.setTimeout(()=>this.el.chapterFlash.classList.add("hidden"),3300)}damageFlash(){this.el.damage.classList.remove("active"),this.el.damage.offsetWidth,this.el.damage.classList.add("active")}openModal(t){this.closeModals(!1),{pause:this.el.pauseModal,empire:this.el.empireModal,death:this.el.deathModal,victory:this.el.victoryModal}[t]?.classList.remove("hidden")}closeModals(t=!0){for(const e of[this.el.pauseModal,this.el.empireModal,this.el.deathModal,this.el.victoryModal])e&&e.classList.add("hidden")}renderEmpire(t){const e=t.state;this.el.empireMoney.textContent=Ll(e.money),this.el.empireIncome.textContent=Qn(t.incomePerMinute),this.el.empireIncome.innerHTML=Qn(t.incomePerMinute)+"<small>/MIN</small>",this.el.empireCrew.innerHTML=`${e.crew}<small>/8</small>`;const n=Cl(e.respect),i=Ym(e.respect);if(this.el.empireRank.textContent=n.name,i){const o=Math.max(0,Math.min(1,(e.respect-n.min)/(i.min-n.min)));this.el.rankFill.style.width=Math.round(o*100)+"%",this.el.rankNext.textContent=`${i.min-e.respect} RESPECT TO ${i.name}`}else this.el.rankFill.style.width="100%",this.el.rankNext.textContent="THE CITY ANSWERS TO YOU";const r=t.crewCost;this.el.hireCost.textContent=Qn(r),this.el.hireBtn.disabled=e.crew>=8||e.money<r;const a=t.world.getDistrictAt(t.player.position.x,t.player.position.z);this.el.districtList.innerHTML=fn.map(o=>{const l=Je[o.id].length,c=t.districtOwned(o.id),h=c===l,u=Je[o.id].map(m=>`<span class="dc-racket ${t.isOwned(m.id)?"owned":""}"><i></i>${m.name}</span>`).join("");return`
        <article class="district-card ${o.id===a.id?"current":""} ${h?"controlled":""}">
          <div class="dc-head">
            <b>${o.name}</b>
            <span class="${h?"held":""}">${h?"FAMILY CONTROL":`${c} / ${l}`}</span>
          </div>
          <div class="dc-bar"><i style="width:${Math.round(c/l*100)}%"></i></div>
          <div class="dc-rackets">${u}</div>
          <div class="dc-rival">${h?"TRIBUTE FLOWING":`${o.rival.toUpperCase()} HOLDS ${l-c} RACKET${l-c===1?"":"S"}`}</div>
        </article>`}).join(""),this.el.territoryCopy.textContent=`${t.controlledDistricts} of 5 boroughs under family control. ${t.ownedCount} rackets paying tribute.`,this.drawTerritory(t)}drawMinimap(t){const e=this.minimapCtx,n=320,i=n/2,r=140/300;e.clearRect(0,0,n,n),e.save(),e.beginPath(),e.arc(i,i,i-2,0,Math.PI*2),e.clip(),e.fillStyle="#07090f",e.fillRect(0,0,n,n),e.fillStyle="#07141d",e.fillRect(i+280*r,0,n,n);for(const h of fn){const u=t.districtOwned(h.id)/Je[h.id].length;e.beginPath(),e.arc(i+h.center[0]*r,i+h.center[1]*r,50,0,Math.PI*2),e.fillStyle=h.color+Math.round(8+u*26).toString(16).padStart(2,"0"),e.fill()}e.strokeStyle="rgba(150,148,136,.12)",e.lineWidth=5;for(const h of[-250,-150,-50,50,150,250])e.beginPath(),e.moveTo(i+h*r,0),e.lineTo(i+h*r,n),e.stroke(),e.beginPath(),e.moveTo(0,i+h*r),e.lineTo(n,i+h*r),e.stroke();e.fillStyle="rgba(35,39,48,.8)";for(let h=-2;h<=2;h++)for(let u=-2;u<=2;u++){const m=i+h*100*r,d=i+u*100*r;e.fillRect(m-40*r,d-40*r,80*r,80*r)}for(const h of t.world.rackets){const u=i+h.pos.x*r,m=i+h.pos.z*r;e.save(),e.translate(u,m),e.rotate(Math.PI/4),e.fillStyle=h.owned?"#e8c36f":h.underAttack?"#ff7a5c":"#c44545",e.strokeStyle="rgba(255,242,214,.55)",e.lineWidth=1,e.shadowColor=e.fillStyle,e.shadowBlur=9;const d=h.owned?6.5:5;e.fillRect(-d,-d,d*2,d*2),e.shadowBlur=0,e.strokeRect(-d,-d,d*2,d*2),e.restore()}const a=i+qe.marker[0]*r,o=i+qe.marker[1]*r;e.save(),e.translate(a,o),e.fillStyle="#fff2cf",e.shadowColor="#e8c36f",e.shadowBlur=12,e.beginPath(),e.arc(0,0,6,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#0a0b10",e.font="700 8px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("H",0,.5),e.restore(),e.shadowBlur=0;for(const h of t.cops||[])e.beginPath(),e.arc(i+h.group.position.x*r,i+h.group.position.z*r,3,0,Math.PI*2),e.fillStyle="#65d6ff",e.fill();const l=i+t.player.position.x*r,c=i+t.player.position.z*r;e.save(),e.translate(l,c),e.rotate(Math.PI-t.playerHeading),e.beginPath(),e.moveTo(0,-8),e.lineTo(5.5,6),e.lineTo(0,3),e.lineTo(-5.5,6),e.closePath(),e.fillStyle="#fff2cf",e.shadowColor="#e8c36f",e.shadowBlur=10,e.fill(),e.restore(),e.restore(),e.strokeStyle="rgba(216,179,107,.25)",e.lineWidth=1,e.beginPath(),e.arc(i,i,i-6,0,Math.PI*2),e.stroke()}drawTerritory(t){const e=this.territoryCtx,n=this.el.territoryCanvas.width,i=this.el.territoryCanvas.height,r=n/640,a=n/2,o=i/2,l=d=>a+d*r,c=d=>o+d*r;e.clearRect(0,0,n,i),e.fillStyle="#06070b",e.fillRect(0,0,n,i);const h=e.createLinearGradient(l(280),0,n,0);h.addColorStop(0,"#0a1a25"),h.addColorStop(1,"#040a10"),e.fillStyle=h,e.fillRect(l(280),0,n-l(280),i),e.strokeStyle="rgba(85,214,208,.16)",e.lineWidth=1;for(let d=-300;d<=300;d+=40)e.beginPath(),e.moveTo(l(290),c(d)),e.lineTo(n,c(d+10)),e.stroke();for(const d of fn){const _=Je[d.id].length,p=t.districtOwned(d.id)/_;e.beginPath(),e.arc(l(d.center[0]),c(d.center[1]),175*r,0,Math.PI*2),e.fillStyle=d.color+Math.round(10+p*28).toString(16).padStart(2,"0"),e.fill(),e.strokeStyle=d.color+"35",e.lineWidth=1.5,e.stroke()}e.strokeStyle="rgba(115,118,124,.28)",e.lineWidth=22*r;for(const d of[-250,-150,-50,50,150,250])e.beginPath(),e.moveTo(l(d),0),e.lineTo(l(d),i),e.stroke(),e.beginPath(),e.moveTo(0,c(d)),e.lineTo(n,c(d)),e.stroke();e.fillStyle="rgba(23,26,33,.92)";for(let d=-2;d<=2;d++)for(let _=-2;_<=2;_++)e.fillRect(l(d*100)-40*r,c(_*100)-40*r,80*r,80*r);e.textAlign="center",e.textBaseline="middle";for(const d of fn){const _=Je[d.id].length,g=t.districtOwned(d.id);e.font='600 16px "Arial Narrow", Arial, sans-serif',e.fillStyle="rgba(240,232,216,.82)",e.fillText(d.short,l(d.center[0]),c(d.center[1])-10),e.font="500 11px Arial, sans-serif",e.fillStyle=d.color,e.fillText(`${g}/${_} RACKETS`,l(d.center[0]),c(d.center[1])+10)}for(const d of t.world.rackets){const _=l(d.pos.x),g=c(d.pos.z);e.save(),e.translate(_,g),e.rotate(Math.PI/4),e.fillStyle=d.owned?"#e8c36f":"#c44545",e.shadowColor=e.fillStyle,e.shadowBlur=9,e.fillRect(-4,-4,8,8),e.restore()}e.shadowBlur=0;const u=l(t.player.position.x),m=c(t.player.position.z);e.beginPath(),e.arc(u,m,5,0,Math.PI*2),e.fillStyle="#fff6df",e.shadowColor="#e8c36f",e.shadowBlur=12,e.fill(),e.shadowBlur=0,e.strokeStyle="rgba(216,179,107,.18)",e.strokeRect(.5,.5,n-1,i-1)}setDeathCost(t){this.el.deathCost.textContent=Qn(t)}setVictory(t){this.el.victoryMoney.textContent=Ll(t.state.money),this.el.victoryRespect.textContent=er.format(Math.floor(t.state.respect))}setStick(t,e,n){this.el.stick.classList.toggle("active",n),this.el.stickKnob.style.transform=`translate(${t*33}px, ${e*33}px)`}}class n0{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.engine=null,this.engineGain=null,this.enabled=!0,this.started=!1}async start(){if(this.started){await this.ctx?.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.started=!0,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.55:0,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.16,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.7,this.sfxGain.connect(this.master),this.startMusic(),this.startEngine(),await this.ctx.resume())}startMusic(){const t=this.ctx,e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=520,e.Q.value=.8,e.connect(this.musicGain);const n=[[55,65.41,82.41,110],[49,58.27,73.42,98],[43.65,55,65.41,87.31],[41.2,49,61.74,82.41]],i=[];n[0].forEach((p,f)=>{const w=t.createOscillator(),E=t.createGain();w.type=f===0?"triangle":"sine",w.frequency.value=p,w.detune.value=(f-1.5)*5,E.gain.value=f===0?.22:.08,w.connect(E),E.connect(e),w.start(),i.push({osc:w,gain:E})});let r=0;const a=()=>{if(!this.started)return;r=(r+1)%n.length;const p=n[r];i.forEach((f,w)=>{const E=t.currentTime;f.osc.frequency.cancelScheduledValues(E),f.osc.frequency.linearRampToValueAtTime(p[w],E+2.8)}),window.setTimeout(a,7600)};window.setTimeout(a,7600);const o=t.createGain();o.gain.value=1e-4,o.connect(this.musicGain);const l=t.createOscillator();l.type="sine",l.frequency.value=46,l.connect(o),l.start();const c=()=>{if(!this.started)return;const p=t.currentTime;o.gain.cancelScheduledValues(p),o.gain.setValueAtTime(1e-4,p),o.gain.exponentialRampToValueAtTime(.22,p+.04),o.gain.exponentialRampToValueAtTime(1e-4,p+.55),window.setTimeout(c,1600)};c();const h=t.sampleRate*2,u=t.createBuffer(1,h,t.sampleRate),m=u.getChannelData(0);for(let p=0;p<h;p++)m[p]=Math.random()*2-1;const d=t.createBufferSource();d.buffer=u,d.loop=!0;const _=t.createBiquadFilter();_.type="highpass",_.frequency.value=1800;const g=t.createGain();g.gain.value=.026,d.connect(_),_.connect(g),g.connect(this.master),d.start()}startEngine(){const t=this.ctx,e=t.createOscillator(),n=t.createOscillator(),i=t.createBiquadFilter(),r=t.createGain();e.type="sawtooth",n.type="square",e.frequency.value=55,n.frequency.value=28,i.type="lowpass",i.frequency.value=210,i.Q.value=2.5,r.gain.value=1e-4,e.connect(i),n.connect(i),i.connect(r),r.connect(this.sfxGain),e.start(),n.start(),this.engine={osc:e,osc2:n,filter:i},this.engineGain=r}setEngine(t,e){if(!this.engine||!this.ctx)return;const n=this.ctx.currentTime,i=Math.min(Math.abs(t)/34,1);this.engine.osc.frequency.setTargetAtTime(45+i*130,n,.08),this.engine.osc2.frequency.setTargetAtTime(23+i*62,n,.08),this.engine.filter.frequency.setTargetAtTime(180+i*520,n,.08),this.engineGain.gain.setTargetAtTime(e?.06+i*.07:1e-4,n,.14)}setEnabled(t){this.enabled=t,!(!this.master||!this.ctx)&&this.master.gain.setTargetAtTime(t?.55:0,this.ctx.currentTime,.12)}noiseBurst(t=.12,e=.5,n=1200){if(!this.ctx||!this.enabled)return;const i=this.ctx,r=Math.max(1,Math.floor(i.sampleRate*t)),a=i.createBuffer(1,r,i.sampleRate),o=a.getChannelData(0);for(let u=0;u<r;u++)o[u]=(Math.random()*2-1)*(1-u/r);const l=i.createBufferSource();l.buffer=a;const c=i.createBiquadFilter();c.type="bandpass",c.frequency.value=n,c.Q.value=.7;const h=i.createGain();h.gain.value=e,h.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+t),l.connect(c),c.connect(h),h.connect(this.sfxGain),l.start()}tone(t,e=.18,n="sine",i=.14,r=0){if(!this.ctx||!this.enabled)return;const a=this.ctx,o=a.currentTime,l=a.createOscillator(),c=a.createGain();l.type=n,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),o+e),c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(this.sfxGain),l.start(),l.stop(o+e+.02)}gunshot(){!this.ctx||!this.enabled||(this.noiseBurst(.09,.55,900),this.tone(95,.12,"sine",.2,-50))}enemyShot(){!this.ctx||!this.enabled||(this.noiseBurst(.06,.18,1400),this.tone(160,.08,"square",.05,-60))}cash(){!this.ctx||!this.enabled||(this.tone(880,.08,"sine",.09),window.setTimeout(()=>this.tone(1320,.12,"sine",.07),55))}claim(){!this.ctx||!this.enabled||(this.tone(220,.5,"triangle",.08,110),window.setTimeout(()=>this.tone(330,.5,"sine",.06,165),70),window.setTimeout(()=>this.tone(440,.7,"sine",.04,220),150),this.noiseBurst(.35,.12,400))}chapter(){!this.ctx||!this.enabled||[261.6,329.6,392,523.2].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.9,"sine",.055),e*110)})}hit(){!this.ctx||!this.enabled||this.noiseBurst(.07,.18,260)}ui(){this.tone(420,.06,"sine",.035)}siren(){if(!this.ctx||!this.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(640,t),e.frequency.linearRampToValueAtTime(880,t+.6),e.frequency.linearRampToValueAtTime(640,t+1.2),n.gain.setValueAtTime(.03,t),n.gain.exponentialRampToValueAtTime(1e-4,t+1.2),e.connect(n),n.connect(this.sfxGain),e.start(),e.stop(t+1.22)}}const i0=document.getElementById("scene"),xc=document.getElementById("boot"),vc=document.getElementById("webglError");let Be;try{Be=new Fm({canvas:i0,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1})}catch(s){throw xc?.classList.add("hidden"),vc?.classList.remove("hidden"),s}const Di=Math.min(window.devicePixelRatio||1,1.6);Be.setPixelRatio(Di);Be.setSize(window.innerWidth,window.innerHeight,!1);Be.outputColorSpace=Fe;Be.toneMapping=Ja;Be.toneMappingExposure=1.02;Be.shadowMap.enabled=!1;const nr=new Fh,ri=new Xe(52,window.innerWidth/window.innerHeight,.1,2e3);ri.position.set(150,58,150);ri.lookAt(0,24,0);const gn=new Gm(Be);gn.setPixelRatio(Math.min(Di,1.4));gn.setSize(window.innerWidth,window.innerHeight);gn.addPass(new Vm(nr,ri));const Mc=new ki(new bt(window.innerWidth,window.innerHeight),.42,.55,.86);gn.addPass(Mc);gn.addPass(new Xm);function s0(s){Mc.enabled=s;const t=s?Math.min(Di,1.4):Math.min(Di,1);gn.setPixelRatio(t),Be.setPixelRatio(s?Di:Math.min(Di,1)),gn.setSize(window.innerWidth,window.innerHeight),Be.setSize(window.innerWidth,window.innerHeight,!1)}const Sc=new e0,r0=new n0;let ia,ja;try{ia=new Qm(nr,Be),ja=new t0({scene:nr,camera:ri,renderer:Be,world:ia,ui:Sc,audio:r0,qualityHandler:s0}),window.__OMERTA__={game:ja,world:ia,scene:nr,camera:ri,renderer:Be,composer:gn}}catch(s){throw console.error(s),xc?.classList.add("hidden"),vc?.classList.remove("hidden"),s}function yc(){const s=window.innerWidth,t=window.innerHeight;ri.aspect=s/t,ri.updateProjectionMatrix(),Be.setSize(s,t,!1),gn.setSize(s,t)}window.addEventListener("resize",yc);window.addEventListener("orientationchange",()=>window.setTimeout(yc,180));const a0=new uc;let Dl=!1;function Ec(){requestAnimationFrame(Ec);const s=Math.min(a0.getDelta(),.05);ja.update(s),gn.render(),Dl||(Dl=!0,window.setTimeout(()=>{Sc.hideBoot()},420))}Ec();
