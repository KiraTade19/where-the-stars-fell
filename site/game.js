var tp=Object.defineProperty;var np=(n,e)=>{for(var t in e)tp(n,t,{get:e[t],enumerable:!0})};var Qu=0,oh=1,ed=2;var La=1,td=2,Mr=3,rs=0,fn=1,ln=2,_i=0,wr=1,cn=2,lh=3,ch=4,nd=5;var Ts=100,id=101,sd=102,rd=103,ad=104,od=200,ld=201,cd=202,hd=203,hh=204,uh=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,yd=212,xd=213,_d=214,Do=0,No=1,Uo=2,lr=3,Fo=4,Oo=5,Bo=6,ko=7,dh=0,vd=1,Sd=2,ri=0,fh=1,ph=2,mh=3,Da=4,gh=5,yh=6,xh=7;var _h=300,as=301,As=302,ml=303,gl=304,Na=306,zo=1e3,di=1001,Ho=1002,rn=1003,Md=1004;var Ua=1005;var dn=1006,yl=1007;var os=1008;var Nn=1009,vh=1010,Sh=1011,br=1012,xl=1013,ai=1014,qn=1015,oi=1016,_l=1017,vl=1018,Er=1020,Mh=35902,wh=35899,bh=1021,Eh=1022,Yn=1023,mi=1026,ls=1027,Sl=1028,Ml=1029,cs=1030,wl=1031;var bl=1033,Fa=33776,Oa=33777,Ba=33778,ka=33779,El=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Il=37492,Pl=37496,Ll=37488,Dl=37489,za=37490,Nl=37491,Ul=37808,Fl=37809,Ol=37810,Bl=37811,kl=37812,zl=37813,Hl=37814,Gl=37815,Vl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Kl=36492,Zl=36494,Jl=36495,jl=36283,Ql=36284,Ha=36285,ec=36286;var ea=2300,Go=2301,Po=2302,$c=2303,Kc=2400,Zc=2401,Jc=2402;var wd=3200;var tc=0,bd=1,zi="",_n="srgb",ta="srgb-linear",na="linear",Nt="srgb";var Lo=7680;var Ed=519,Td=512,Ad=513,Rd=514,nc=515,Cd=516,Id=517,ic=518,Pd=519,Th=35044;var Ah="300 es",ni=2e3,cr=2001;function ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ld(){let n=ia("canvas");return n.style.display="block",n}var _u={},hr=null;function sa(...n){let e="THREE."+n.shift();hr?hr("log",e,...n):console.log(e,...n)}function Dd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=Dd(n);let e="THREE."+n.shift();if(hr)hr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=Dd(n);let e="THREE."+n.shift();if(hr)hr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ss(...n){let e=n.join(" ");e in _u||(_u[e]=!0,it(...n))}function Nd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ud={[Do]:No,[Uo]:Bo,[Fo]:ko,[lr]:Oo,[No]:Do,[Bo]:Uo,[ko]:Fo,[Oo]:lr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=1234567,Zr=Math.PI/180,ur=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Rh(n,e){return(n%e+e)%e}function rp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ap(n,e,t){return n!==e?(t-n)/(e-n):0}function Jr(n,e,t){return(1-t)*n+t*e}function op(n,e,t,i){return Jr(n,e,1-Math.exp(-t*i))}function lp(n,e=1){return e-Math.abs(Rh(n,e*2)-e)}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function up(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dp(n,e){return n+Math.random()*(e-n)}function fp(n){return n*(.5-Math.random())}function pp(n){n!==void 0&&(vu=n);let e=vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mp(n){return n*Zr}function gp(n){return n*ur}function yp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _p(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rs={DEG2RAD:Zr,RAD2DEG:ur,generateUUID:pi,clamp:yt,euclideanModulo:Rh,mapLinear:rp,inverseLerp:ap,lerp:Jr,damp:op,pingpong:lp,smoothstep:cp,smootherstep:hp,randInt:up,randFloat:dp,randFloatSpread:fp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:yp,ceilPowerOfTwo:xp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:Ot,denormalize:ti},Se=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*S;m<0&&(h=-h,f=-f,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+S*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+S*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wc=new C,Su=new Xn,ot=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],S=s[0],m=s[3],p=s[6],M=s[1],A=s[4],_=s[7],E=s[2],w=s[5],R=s[8];return r[0]=a*S+o*M+l*E,r[3]=a*m+o*A+l*w,r[6]=a*p+o*_+l*R,r[1]=c*S+u*M+d*E,r[4]=c*m+u*A+d*w,r[7]=c*p+u*_+d*R,r[2]=h*S+f*M+g*E,r[5]=h*m+f*A+g*w,r[8]=h*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*c-u*i)*S,e[2]=(o*i-s*a)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bc.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bc=new ot,Mu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){let n={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Nt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Nt&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ta]:{primaries:e,whitePoint:i,transfer:na,toXYZ:Mu,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:Mu,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}var Mt=Sp();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vs,Vo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=ia("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mp=0,dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ec(s[a].image)):r.push(Ec(s[a]))}else r=Ec(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var wp=0,Tc=new C,An=class n extends gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=dn,a=os,o=Yn,l=Nn,c=n.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=pi(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=_h;An.DEFAULT_ANISOTROPY=1;var Wt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,_=(f+1)/2,E=(p+1)/2,w=(u+h)/4,R=(d+S)/4,x=(g+m)/4;return A>_&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=w/i,r=R/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new An(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Wo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ra=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends An{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Dt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,S,m)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,g,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,S=c*d;t[0]=h+S*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,S=c*d;t[0]=h-S*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,S=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=S-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,Ep)}lookAt(e,t,i){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),qi.crossVectors(i,Bn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),qi.crossVectors(i,Bn)),qi.normalize(),io.crossVectors(Bn,qi),s[0]=qi.x,s[4]=io.x,s[8]=Bn.x,s[1]=qi.y,s[5]=io.y,s[9]=Bn.y,s[2]=qi.z,s[6]=io.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],S=i[6],m=i[10],p=i[14],M=i[3],A=i[7],_=i[11],E=i[15],w=s[0],R=s[4],x=s[8],b=s[12],I=s[1],L=s[5],B=s[9],V=s[13],N=s[2],z=s[6],Y=s[10],X=s[14],ie=s[3],K=s[7],ae=s[11],ue=s[15];return r[0]=a*w+o*I+l*N+c*ie,r[4]=a*R+o*L+l*z+c*K,r[8]=a*x+o*B+l*Y+c*ae,r[12]=a*b+o*V+l*X+c*ue,r[1]=u*w+d*I+h*N+f*ie,r[5]=u*R+d*L+h*z+f*K,r[9]=u*x+d*B+h*Y+f*ae,r[13]=u*b+d*V+h*X+f*ue,r[2]=g*w+S*I+m*N+p*ie,r[6]=g*R+S*L+m*z+p*K,r[10]=g*x+S*B+m*Y+p*ae,r[14]=g*b+S*V+m*X+p*ue,r[3]=M*w+A*I+_*N+E*ie,r[7]=M*R+A*L+_*z+E*K,r[11]=M*x+A*B+_*Y+E*ae,r[15]=M*b+A*V+_*X+E*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],M=l*f-c*h,A=o*f-c*d,_=o*h-l*d,E=a*f-c*u,w=a*h-l*u,R=a*d-o*u;return t*(S*M-m*A+p*_)-i*(g*M-m*E+p*w)+s*(g*A-S*E+p*R)-r*(g*_-S*w+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],M=t*o-i*a,A=t*l-s*a,_=t*c-r*a,E=i*l-s*o,w=i*c-r*o,R=s*c-r*l,x=u*S-d*g,b=u*m-h*g,I=u*p-f*g,L=d*m-h*S,B=d*p-f*S,V=h*p-f*m,N=M*V-A*B+_*L+E*I-w*b+R*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return e[0]=(o*V-l*B+c*L)*z,e[1]=(s*B-i*V-r*L)*z,e[2]=(S*R-m*w+p*E)*z,e[3]=(h*w-d*R-f*E)*z,e[4]=(l*I-a*V-c*b)*z,e[5]=(t*V-s*I+r*b)*z,e[6]=(m*_-g*R-p*A)*z,e[7]=(u*R-h*_+f*A)*z,e[8]=(a*B-o*I+c*x)*z,e[9]=(i*I-t*B-r*x)*z,e[10]=(g*w-S*_+p*M)*z,e[11]=(d*_-u*w-f*M)*z,e[12]=(o*b-a*L-l*x)*z,e[13]=(t*L-i*b+s*x)*z,e[14]=(S*A-g*E-m*M)*z,e[15]=(u*E-d*A+h*M)*z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,S=a*u,m=a*d,p=o*d,M=l*c,A=l*u,_=l*d,E=i.x,w=i.y,R=i.z;return s[0]=(1-(S+p))*E,s[1]=(f+_)*E,s[2]=(g-A)*E,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(h+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+A)*R,s[9]=(m-M)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let c=1/a,u=1/o,d=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ni,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===ni)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===cr)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ni,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===ni)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===cr)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ws=new C,Jn=new Dt,bp=new C(0,0,0),Ep=new C(1,1,1),qi=new C,io=new C,Bn=new C,bu=new Dt,Eu=new Xn,ii=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tp=0,Tu=new C,Xs=new Xn,Ci=new Dt,so=new C,zr=new C,Ap=new C,Rp=new Xn,Au=new C(1,0,0),Ru=new C(0,1,0),Cu=new C(0,0,1),Iu={type:"added"},Cp={type:"removed"},qs={type:"childadded",child:null},Ac={type:"childremoved",child:null},an=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new ii,i=new Xn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ot}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(zr,so,this.up):Ci.lookAt(so,zr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),qs.child=e,this.dispatchEvent(qs),qs.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new C(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ip={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=Rh(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Rc(a,r,e+1/3),this.g=Rc(a,r,e),this.b=Rc(a,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Mt.workingToColorSpace(xn.copy(this),e),Math.round(yt(xn.r*255,0,255))*65536+Math.round(yt(xn.g*255,0,255))*256+Math.round(yt(xn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=_n){Mt.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ro);let i=Jr(Yi.h,ro.h,t),s=Jr(Yi.s,ro.s,t),r=Jr(Yi.l,ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new et;et.NAMES=Fd;var oa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},la=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new C,Ii=new C,Cc=new C,Pi=new C,Ys=new C,$s=new C,Pu=new C,Ic=new C,Pc=new C,Lc=new C,Dc=new Wt,Nc=new Wt,Uc=new Wt,Ni=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Ii.subVectors(i,t),Cc.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Ii),l=jn.dot(Cc),c=Ii.dot(Ii),u=Ii.dot(Cc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,i),Uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Nc,r.y),a.addScaledVector(Uc,r.z),a}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Ii.subVectors(e,t),jn.cross(Ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),jn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,i),$s.subVectors(r,i),Ic.subVectors(e,i);let l=Ys.dot(Ic),c=$s.dot(Ic);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,s);let u=Ys.dot(Pc),d=$s.dot(Pc);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ys,a);Lc.subVectors(e,r);let f=Ys.dot(Lc),g=$s.dot(Lc);if(g>=0&&f<=g)return t.copy(r);let S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector($s,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Pu.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Pu,o);let p=1/(m+S+h);return a=S*p,o=h*p,t.copy(i).addScaledVector(Ys,a).addScaledVector($s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),oo.subVectors(this.max,Hr),Ks.subVectors(e.a,Hr),Zs.subVectors(e.b,Hr),Js.subVectors(e.c,Hr),$i.subVectors(Zs,Ks),Ki.subVectors(Js,Zs),ys.subVectors(Ks,Js);let t=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-ys.z,ys.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,ys.z,0,-ys.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-ys.y,ys.x,0];return!Fc(t,Ks,Zs,Js,oo)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Ks,Zs,Js,oo))?!1:(lo.crossVectors($i,Ki),t=[lo.x,lo.y,lo.z],Fc(t,Ks,Zs,Js,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new C,new C,new C,new C,new C,new C,new C,new C],Qn=new C,ao=new yi,Ks=new C,Zs=new C,Js=new C,$i=new C,Ki=new C,ys=new C,Hr=new C,oo=new C,lo=new C,xs=new C;function Fc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){xs.fromArray(n,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=i.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Jt=new C,co=new Se,Pp=0,un=class extends gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ca=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ha=class extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}},Lp=new yi,Gr=new C,Oc=new C,Fi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Oc)),this.expandByPoint(Gr.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dp=0,Wn=new Dt,Bc=new an,js=new C,kn=new yi,Vr=new yi,sn=new C,qt=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?ha:ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(kn.min,Vr.min),kn.expandByPoint(sn),sn.addVectors(kn.max,Vr.max),kn.expandByPoint(sn)):(kn.expandByPoint(Vr.min),kn.expandByPoint(Vr.max))}kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(js.fromBufferAttribute(e,c),sn.add(js)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new C,l[x]=new C;let c=new C,u=new C,d=new C,h=new Se,f=new Se,g=new Se,S=new C,m=new C;function p(x,b,I){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,I),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[x].add(S),o[b].add(S),o[I].add(S),l[x].add(m),l[b].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){let I=M[x],L=I.start,B=I.count;for(let V=L,N=L+B;V<N;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let A=new C,_=new C,E=new C,w=new C;function R(x){E.fromBufferAttribute(s,x),w.copy(E);let b=o[x];A.copy(b),A.sub(E.multiplyScalar(E.dot(b))).normalize(),_.crossVectors(w,b);let L=_.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,L)}for(let x=0,b=M.length;x<b;++x){let I=M[x],L=I.start,B=I.count;for(let V=L,N=L+B;V<N;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new un(h,u,d)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Tn=new C,ua=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kc=new C,Np=new C,Up=new ot,ei=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=kc.subVectors(i,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Up.getNormalMatrix(e),s=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fp=0,xi=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=wr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qt=class extends xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,Wr=new C,er=new C,tr=new C,nr=new Se,Xr=new Se,Od=new Dt,ho=new C,qr=new C,uo=new C,Lu=new Se,zc=new Se,Du=new Se,on=class extends an{constructor(e=new Qt){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qo(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new ua(i,3,0,!1)),Qs.setAttribute("uv",new ua(i,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Od.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;fo(ho.set(-.5,-.5,0),tr,a,er,s,r),fo(qr.set(.5,-.5,0),tr,a,er,s,r),fo(uo.set(.5,.5,0),tr,a,er,s,r),Lu.set(0,0),zc.set(1,0),Du.set(1,1);let o=e.ray.intersectTriangle(ho,qr,uo,!1,Wr);if(o===null&&(fo(qr.set(-.5,.5,0),tr,a,er,s,r),zc.set(0,1),o=e.ray.intersectTriangle(ho,uo,qr,!1,Wr),o===null))return;let l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:Ni.getInterpolation(Wr,ho,qr,uo,Lu,zc,Du,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fo(n,e,t,i,s,r){nr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Xr.x=r*nr.x-s*nr.y,Xr.y=s*nr.x+r*nr.y):Xr.copy(nr),n.copy(e),n.x+=Xr.x,n.y+=Xr.y,n.applyMatrix4(Od)}var Di=new C,Hc=new C,po=new C,mo=new C,da=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Hc.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(Hc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(po),o=mo.dot(this.direction),l=-mo.dot(po),c=mo.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hc).addScaledVector(po,h),f}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,M=i.y-a.y,A=i.z-a.z,_=Math.abs(l),E=Math.abs(c),w=Math.abs(u),R,x,b,I,L,B,V,N,z,Y,X,ie;if(_>=E&&_>=w?(b=l,B=d,z=g,ie=p,l>=0?(R=c,x=u,I=h,L=f,V=S,N=m,Y=M,X=A):(R=u,x=c,I=f,L=h,V=m,N=S,Y=A,X=M)):E>=w?(b=c,B=h,z=S,ie=M,c>=0?(R=u,x=l,I=f,L=d,V=m,N=g,Y=A,X=p):(R=l,x=u,I=d,L=f,V=g,N=m,Y=p,X=A)):(b=u,B=f,z=m,ie=A,u>=0?(R=l,x=c,I=d,L=h,V=g,N=S,Y=p,X=M):(R=c,x=l,I=h,L=d,V=S,N=g,Y=M,X=p)),b===0)return null;let K=R/b,ae=x/b,ue=1/b,Ge=I-K*B,ke=L-ae*B,_t=V-K*z,ut=N-ae*z,vt=Y-K*ie,J=X-ae*ie,oe=vt*ut-J*_t,Le=Ge*J-ke*vt,tt=_t*ke-ut*Ge;if(s){if(oe<0||Le<0||tt<0)return null}else if((oe<0||Le<0||tt<0)&&(oe>0||Le>0||tt>0))return null;let Oe=oe+Le+tt;if(Oe===0)return null;let nt=ue*(oe*B+Le*z+tt*ie);return(Oe>0?nt<0:nt>0)?null:this.at(nt/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nu=new Dt,_s=new da,go=new Fi,Uu=new C,yo=new C,xo=new C,_o=new C,Gc=new C,vo=new C,Fu=new C,So=new C,ge=class extends an{constructor(e=new qt,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Gc.fromBufferAttribute(d,e),a?vo.addScaledVector(Gc,u):vo.addScaledVector(Gc.sub(t),u))}t.add(vo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(go.containsPoint(_s.origin)===!1&&(_s.intersectSphere(go,Uu)===null||_s.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,E=A;_<E;_+=3){let w=o.getX(_),R=o.getX(_+1),x=o.getX(_+2);s=Mo(this,p,e,i,c,u,d,w,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let M=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);s=Mo(this,a,e,i,c,u,d,M,A,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,E=A;_<E;_+=3){let w=_,R=_+1,x=_+2;s=Mo(this,p,e,i,c,u,d,w,R,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let M=m,A=m+1,_=m+2;s=Mo(this,a,e,i,c,u,d,M,A,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Op(n,e,t,i,s,r,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===rs,o),l===null)return null;So.copy(o),So.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:n}}function Mo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,yo),n.getVertexPosition(l,xo),n.getVertexPosition(c,_o);let u=Op(n,e,t,i,yo,xo,_o,Fu);if(u){let d=new C;Ni.getBarycoord(Fu,yo,xo,_o,d),s&&(u.uv=Ni.getInterpolatedAttribute(s,o,l,c,d,new Se)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,o,l,c,d,new Se)),a&&(u.normal=Ni.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new C,materialIndex:0};Ni.getNormal(yo,xo,_o,h.normal),u.face=h,u.barycoord=d}return u}var fa=class extends An{constructor(e=null,t=1,i=1,s,r,a,o,l,c=rn,u=rn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Dt,Ou=new Dt,wo=[],Bu=new yi,Bp=new Dt,Yr=new ge,$r=new Fi,Oi=class extends ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Bu.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),$r.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),Ou.multiplyMatrices(i,ir),Yr.matrixWorld=Ou,Yr.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){let l=wo[a];l.instanceId=r,l.object=this,t.push(l)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fa(new Float32Array(s*this.count),s,this.count,Sl,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new Fi,kp=new Se(.5,.5),bo=new C,pr=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],A=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-g,E-M).normalize(),s[1].setComponents(c+a,f+u,p+g,E+M).normalize(),s[2].setComponents(c+o,f+d,p+S,E+A).normalize(),s[3].setComponents(c-o,f-d,p-S,E-A).normalize(),i)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,f-h,p-m,E-_).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-_).normalize(),t===ni)s[5].setComponents(c+l,f+h,p+m,E+_).normalize();else if(t===cr)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=kp.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ji=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ku=new Dt,jc=new da,Eo=new Fi,To=new C,Ms=class extends an{constructor(e=new qt,t=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;ku.copy(s).invert(),jc.copy(e.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,S=f;g<S;g++){let m=c.getX(g);To.fromBufferAttribute(d,m),zu(To,m,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,S=f;g<S;g++)To.fromBufferAttribute(d,g),zu(To,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zu(n,e,t,i,s,r,a){let o=jc.distanceSqToPoint(n);if(o<t){let l=new C;jc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ma=class extends An{constructor(e=[],t=as,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mr=class extends An{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends An{constructor(e,t,i=ai,s,r,a,o=rn,l=rn,c,u=mi,d=1){if(u!==mi&&u!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yo=class extends ji{constructor(e,t=ai,i=as,s,r,a=rn,o=rn,l,c=mi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rn=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function g(S,m,p,M,A,_,E,w,R,x,b){let I=_/R,L=E/x,B=_/2,V=E/2,N=w/2,z=R+1,Y=x+1,X=0,ie=0,K=new C;for(let ae=0;ae<Y;ae++){let ue=ae*L-V;for(let Ge=0;Ge<z;Ge++){let ke=Ge*I-B;K[S]=ke*M,K[m]=ue*A,K[p]=N,c.push(K.x,K.y,K.z),K[S]=0,K[m]=0,K[p]=w>0?1:-1,u.push(K.x,K.y,K.z),d.push(Ge/R),d.push(1-ae/x),X+=1}}for(let ae=0;ae<x;ae++)for(let ue=0;ue<R;ue++){let Ge=h+ue+z*ae,ke=h+ue+z*(ae+1),_t=h+(ue+1)+z*(ae+1),ut=h+(ue+1)+z*ae;l.push(Ge,ke,ut),l.push(ke,_t,ut),ie+=6}o.addGroup(f,ie,b),f+=ie,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Qi=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,u=new Se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,S=[],m=i/2,p=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(f,2));function M(){let _=new C,E=new C,w=0,R=(t-e)/i;for(let x=0;x<=r;x++){let b=[],I=x/r,L=I*(t-e)+e;for(let B=0;B<=s;B++){let V=B/s,N=V*l+o,z=Math.sin(N),Y=Math.cos(N);E.x=L*z,E.y=-I*i+m,E.z=L*Y,d.push(E.x,E.y,E.z),_.set(z,R,Y).normalize(),h.push(_.x,_.y,_.z),f.push(V,1-I),b.push(g++)}S.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let I=S[b][x],L=S[b+1][x],B=S[b+1][x+1],V=S[b][x+1];(e>0||b!==0)&&(u.push(I,L,V),w+=3),(t>0||b!==r-1)&&(u.push(L,B,V),w+=3)}c.addGroup(p,w,0),p+=w}function A(_){let E=g,w=new Se,R=new C,x=0,b=_===!0?e:t,I=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*I,0),h.push(0,I,0),f.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let N=B/s*l+o,z=Math.cos(N),Y=Math.sin(N);R.x=b*Y,R.y=m*I,R.z=b*z,d.push(R.x,R.y,R.z),h.push(0,I,0),w.x=z*.5+.5,w.y=Y*.5*I+.5,f.push(w.x,w.y),g++}for(let B=0;B<s;B++){let V=E+B,N=L+B;_===!0?u.push(N,N+1,V):u.push(N+1,N,V),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vn=class n extends Bt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ws=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new C,_=new C,E=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],A),f(t[w+1],_),f(t[w+2],E),l(A,_,E,M)}function l(M,A,_,E){let w=E+1,R=[];for(let x=0;x<=w;x++){R[x]=[];let b=M.clone().lerp(_,x/w),I=A.clone().lerp(_,x/w),L=w-x;for(let B=0;B<=L;B++)B===0&&x===w?R[x][B]=b:R[x][B]=b.clone().lerp(I,B/L)}for(let x=0;x<w;x++)for(let b=0;b<2*(w-x)-1;b++){let I=Math.floor(b/2);b%2===0?(h(R[x][I+1]),h(R[x+1][I]),h(R[x][I])):(h(R[x][I+1]),h(R[x+1][I+1]),h(R[x+1][I]))}}function c(M){let A=new C;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(M),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function u(){let M=new C;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let _=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(_,1-E)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let A=a[M+0],_=a[M+2],E=a[M+4],w=Math.max(A,_,E),R=Math.min(A,_,E);w>.9&&R<.1&&(A<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,A){let _=M*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function g(){let M=new C,A=new C,_=new C,E=new C,w=new Se,R=new Se,x=new Se;for(let b=0,I=0;b<r.length;b+=9,I+=6){M.set(r[b+0],r[b+1],r[b+2]),A.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),x.set(a[I+4],a[I+5]),E.copy(M).add(A).add(_).divideScalar(3);let L=m(E);S(w,I+0,M,L),S(R,I+2,A,L),S(x,I+4,_,L)}}function S(M,A,_,E){E<0&&M.x===1&&(a[A]=M.x-1),_.x===0&&_.z===0&&(a[A]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},gr=class n extends ws{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Se:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new Dt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(yt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yr=class extends zn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$o=class extends yr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Hu=new C,Gu=new C,Vc=new Ch,Wc=new Ch,Xc=new Ch,Ko=class extends zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Gu.subVectors(s[0],s[1]).add(s[0]),c=Gu);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Vc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,S,m),Wc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,S,m),Xc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Wc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Xc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Vc.calc(l),Wc.calc(l),Xc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function zp(n,e){let t=1-n;return t*t*e}function Hp(n,e){return 2*(1-n)*n*e}function Gp(n,e){return n*n*e}function jr(n,e,t,i){return zp(n,e)+Hp(n,t)+Gp(n,i)}function Vp(n,e){let t=1-n;return t*t*t*e}function Wp(n,e){let t=1-n;return 3*t*t*n*e}function Xp(n,e){return 3*(1-n)*n*n*e}function qp(n,e){return n*n*n*e}function Qr(n,e,t,i,s){return Vp(n,e)+Wp(n,t)+Xp(n,i)+qp(n,s)}var ya=class extends zn{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zo=class extends zn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y),Qr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends zn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends zn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends zn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends zn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y),jr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Vu(o,l.x,c.x,u.x,d.x),Vu(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Qc=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:Ko,CubicBezierCurve:ya,CubicBezierCurve3:Zo,EllipseCurve:yr,LineCurve:xa,LineCurve3:Jo,QuadraticBezierCurve:_a,QuadraticBezierCurve3:jo,SplineCurve:va}),Qo=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Qc[s.type]().fromJSON(s))}return this}},Sa=class extends Qo{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xa(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new _a(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ya(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new va(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new yr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bi=class extends Sa{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Sa().fromJSON(s))}return this}};function Yp(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Bd(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=jp(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<s;h+=t){let f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Ma(r,a,t,o,l,c,0),a}function Bd(n,e,t,i,s){let r;if(s===cm(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Wu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Wu(a/i|0,n[a],n[a+1],r);return r&&xr(r,r.next)&&(ba(r),r=r.next),r}function bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xr(t,t.next)||Xt(t.prev,t,t.next)===0)){if(ba(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ma(n,e,t,i,s,r,a){if(!n)return;!a&&r&&im(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Kp(n,i,s,r):$p(n)){e.push(l.i,n.i,c.i),ba(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Zp(bs(n),e),Ma(n,e,t,i,s,r,2)):a===2&&Jp(n,e,t,i,s,r):Ma(bs(n),e,t,i,s,r,1);break}}}function $p(n){let e=n.prev,t=n,i=n.next;if(Xt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Kr(s,o,r,l,a,c,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),S=Math.max(o,l,c),m=Math.max(u,d,h),p=eh(f,g,e,t,i),M=eh(S,m,e,t,i),A=n.prevZ,_=n.nextZ;for(;A&&A.z>=p&&_&&_.z<=M;){if(A.x>=f&&A.x<=S&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Kr(o,u,l,d,c,h,A.x,A.y)&&Xt(A.prev,A,A.next)>=0||(A=A.prevZ,_.x>=f&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Kr(o,u,l,d,c,h,_.x,_.y)&&Xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=S&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Kr(o,u,l,d,c,h,A.x,A.y)&&Xt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=S&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Kr(o,u,l,d,c,h,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Zp(n,e){let t=n;do{let i=t.prev,s=t.next.next;!xr(i,s)&&zd(i,t,t.next,s)&&wa(i,s)&&wa(s,i)&&(e.push(i.i,t.i,s.i),ba(t),ba(t.next),t=n=s),t=t.next}while(t!==n);return bs(t)}function Jp(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&am(a,o)){let l=Hd(a,o);a=bs(a,a.next),l=bs(l,l.next),Ma(a,e,t,i,s,r,0),Ma(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function jp(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Bd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(rm(c))}s.sort(Qp);for(let r=0;r<s.length;r++)t=em(s[r],t);return t}function Qp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function em(n,e){let t=tm(n,e);if(!t)return e;let i=Hd(t,n);return bs(i,i.next),bs(t,t.next)}function tm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(xr(n,t))return t;do{if(xr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&kd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);wa(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&nm(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function nm(n,e){return Xt(n.prev,n,e.prev)<0&&Xt(e.next,n,n.next)<0}function im(n,e,t,i){let s=n;do s.z===0&&(s.z=eh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sm(s)}function sm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function eh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function kd(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Kr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&kd(n,e,t,i,s,r,a,o)}function am(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!om(n,e)&&(wa(n,e)&&wa(e,n)&&lm(n,e)&&(Xt(n.prev,n,e.prev)||Xt(n,e.prev,e))||xr(n,e)&&Xt(n.prev,n,n.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xr(n,e){return n.x===e.x&&n.y===e.y}function zd(n,e,t,i){let s=Ro(Xt(n,e,t)),r=Ro(Xt(n,e,i)),a=Ro(Xt(t,i,n)),o=Ro(Xt(t,i,e));return!!(s!==r&&a!==o||s===0&&Ao(n,t,e)||r===0&&Ao(n,i,e)||a===0&&Ao(t,n,i)||o===0&&Ao(t,e,i))}function Ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ro(n){return n>0?1:n<0?-1:0}function om(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wa(n,e){return Xt(n.prev,n,n.next)<0?Xt(n,e,n.next)>=0&&Xt(n,n.prev,e)>=0:Xt(n,e,n.prev)<0||Xt(n,n.next,e)<0}function lm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Hd(n,e){let t=th(n.i,n.x,n.y),i=th(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wu(n,e,t,i){let s=th(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ba(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function th(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cm(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var nh=class{static triangulate(e,t,i=2){return Yp(e,t,i)}},fi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Xu(e),qu(i,e);let a=e.length;t.forEach(Xu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,qu(i,t[l]);let o=nh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ea=class n extends qt{constructor(e=new Bi([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:hm,A,_=!1,E,w,R,x;if(p){A=p.getSpacedPoints(u),_=!0,h=!1;let le=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,le),w=new C,R=new C,x=new C}h||(m=0,f=0,g=0,S=0);let b=o.extractPoints(c),I=b.shape,L=b.holes;if(!fi.isClockWise(I)){I=I.reverse();for(let le=0,me=L.length;le<me;le++){let ye=L[le];fi.isClockWise(ye)&&(L[le]=ye.reverse())}}function V(le){let ye=10000000000000001e-36,xe=le[0];for(let be=1;be<=le.length;be++){let je=be%le.length,Ke=le[je],st=Ke.x-xe.x,Qe=Ke.y-xe.y,D=st*st+Qe*Qe,Ct=Math.max(Math.abs(Ke.x),Math.abs(Ke.y),Math.abs(xe.x),Math.abs(xe.y)),dt=ye*Ct*Ct;if(D<=dt){le.splice(je,1),be--;continue}xe=Ke}}V(I),L.forEach(V);let N=L.length,z=I;for(let le=0;le<N;le++){let me=L[le];I=I.concat(me)}function Y(le,me,ye){return me||at("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(me,ye)}let X=I.length;function ie(le,me,ye){let xe,be,je,Ke=le.x-me.x,st=le.y-me.y,Qe=ye.x-le.x,D=ye.y-le.y,Ct=Ke*Ke+st*st,dt=Ke*D-st*Qe;if(Math.abs(dt)>Number.EPSILON){let T=Math.sqrt(Ct),y=Math.sqrt(Qe*Qe+D*D),k=me.x-st/T,W=me.y+Ke/T,$=ye.x-D/y,Me=ye.y+Qe/y,Ee=(($-k)*D-(Me-W)*Qe)/(Ke*D-st*Qe);xe=k+Ke*Ee-le.x,be=W+st*Ee-le.y;let Q=xe*xe+be*be;if(Q<=2)return new Se(xe,be);je=Math.sqrt(Q/2)}else{let T=!1;Ke>Number.EPSILON?Qe>Number.EPSILON&&(T=!0):Ke<-Number.EPSILON?Qe<-Number.EPSILON&&(T=!0):Math.sign(st)===Math.sign(D)&&(T=!0),T?(xe=-st,be=Ke,je=Math.sqrt(Ct)):(xe=Ke,be=st,je=Math.sqrt(Ct/2))}return new Se(xe/je,be/je)}let K=[];for(let le=0,me=z.length,ye=me-1,xe=le+1;le<me;le++,ye++,xe++)ye===me&&(ye=0),xe===me&&(xe=0),K[le]=ie(z[le],z[ye],z[xe]);let ae=[],ue,Ge=K.concat();for(let le=0,me=N;le<me;le++){let ye=L[le];ue=[];for(let xe=0,be=ye.length,je=be-1,Ke=xe+1;xe<be;xe++,je++,Ke++)je===be&&(je=0),Ke===be&&(Ke=0),ue[xe]=ie(ye[xe],ye[je],ye[Ke]);ae.push(ue),Ge=Ge.concat(ue)}let ke;if(m===0)ke=fi.triangulateShape(z,L);else{let le=[],me=[];for(let ye=0;ye<m;ye++){let xe=ye/m,be=f*Math.cos(xe*Math.PI/2),je=g*Math.sin(xe*Math.PI/2)+S;for(let Ke=0,st=z.length;Ke<st;Ke++){let Qe=Y(z[Ke],K[Ke],je);Le(Qe.x,Qe.y,-be),xe===0&&le.push(Qe)}for(let Ke=0,st=N;Ke<st;Ke++){let Qe=L[Ke];ue=ae[Ke];let D=[];for(let Ct=0,dt=Qe.length;Ct<dt;Ct++){let T=Y(Qe[Ct],ue[Ct],je);Le(T.x,T.y,-be),xe===0&&D.push(T)}xe===0&&me.push(D)}}ke=fi.triangulateShape(le,me)}let _t=ke.length,ut=g+S;for(let le=0;le<X;le++){let me=h?Y(I[le],Ge[le],ut):I[le];_?(R.copy(E.normals[0]).multiplyScalar(me.x),w.copy(E.binormals[0]).multiplyScalar(me.y),x.copy(A[0]).add(R).add(w),Le(x.x,x.y,x.z)):Le(me.x,me.y,0)}for(let le=1;le<=u;le++)for(let me=0;me<X;me++){let ye=h?Y(I[me],Ge[me],ut):I[me];_?(R.copy(E.normals[le]).multiplyScalar(ye.x),w.copy(E.binormals[le]).multiplyScalar(ye.y),x.copy(A[le]).add(R).add(w),Le(x.x,x.y,x.z)):Le(ye.x,ye.y,d/u*le)}for(let le=m-1;le>=0;le--){let me=le/m,ye=f*Math.cos(me*Math.PI/2),xe=g*Math.sin(me*Math.PI/2)+S;for(let be=0,je=z.length;be<je;be++){let Ke=Y(z[be],K[be],xe);Le(Ke.x,Ke.y,d+ye)}for(let be=0,je=L.length;be<je;be++){let Ke=L[be];ue=ae[be];for(let st=0,Qe=Ke.length;st<Qe;st++){let D=Y(Ke[st],ue[st],xe);_?Le(D.x,D.y+A[u-1].y,A[u-1].x+ye):Le(D.x,D.y,d+ye)}}}vt(),J();function vt(){let le=s.length/3;if(h){let me=0,ye=X*me;for(let xe=0;xe<_t;xe++){let be=ke[xe];tt(be[2]+ye,be[1]+ye,be[0]+ye)}me=u+m*2,ye=X*me;for(let xe=0;xe<_t;xe++){let be=ke[xe];tt(be[0]+ye,be[1]+ye,be[2]+ye)}}else{for(let me=0;me<_t;me++){let ye=ke[me];tt(ye[2],ye[1],ye[0])}for(let me=0;me<_t;me++){let ye=ke[me];tt(ye[0]+X*u,ye[1]+X*u,ye[2]+X*u)}}i.addGroup(le,s.length/3-le,0)}function J(){let le=s.length/3,me=0;oe(z,me),me+=z.length;for(let ye=0,xe=L.length;ye<xe;ye++){let be=L[ye];oe(be,me),me+=be.length}i.addGroup(le,s.length/3-le,1)}function oe(le,me){let ye=le.length;for(;--ye>=0;){let xe=ye,be=ye-1;be<0&&(be=le.length-1);for(let je=0,Ke=u+m*2;je<Ke;je++){let st=X*je,Qe=X*(je+1),D=me+xe+st,Ct=me+be+st,dt=me+be+Qe,T=me+xe+Qe;Oe(D,Ct,dt,T)}}}function Le(le,me,ye){l.push(le),l.push(me),l.push(ye)}function tt(le,me,ye){nt(le),nt(me),nt(ye);let xe=s.length/3,be=M.generateTopUV(i,s,xe-3,xe-2,xe-1);St(be[0]),St(be[1]),St(be[2])}function Oe(le,me,ye,xe){nt(le),nt(me),nt(xe),nt(me),nt(ye),nt(xe);let be=s.length/3,je=M.generateSideWallUV(i,s,be-6,be-3,be-2,be-1);St(je[0]),St(je[1]),St(je[3]),St(je[1]),St(je[2]),St(je[3])}function nt(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function St(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return um(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qc[s.type]().fromJSON(s)),new n(i,e.options)}},hm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,a),new Se(o,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],S=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Se(a,1-l),new Se(c,1-d),new Se(h,1-g),new Se(S,1-p)]:[new Se(o,1-l),new Se(u,1-d),new Se(f,1-g),new Se(m,1-p)]}};function um(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var si=class n extends ws{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Es=class n extends ws{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},es=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],S=[],m=[];for(let p=0;p<u;p++){let M=p*h-a;for(let A=0;A<c;A++){let _=A*d-r;g.push(_,-M,0),S.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let A=M+c*p,_=M+c*(p+1),E=M+1+c*(p+1),w=M+1+c*p;f.push(A,_,w),f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var _r=class n extends qt{constructor(e=new Bi([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(r,3)),this.setAttribute("uv",new Et(a,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,g=h.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];fi.isClockWise(M)===!0&&(g[m]=M.reverse())}let S=fi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=S.length;m<p;m++){let M=S[m],A=M[0]+d,_=M[1]+d,E=M[2]+d;i.push(A,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return dm(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function dm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Kt=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new C,h=new C,f=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){let M=[],A=p/i,_=a+A*o,E=e*Math.cos(_),w=Math.sqrt(e*e-E*E),R=0;p===0&&a===0?R=.5/t:p===i&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let b=x/t,I=s+b*r;d.x=-w*Math.cos(I),d.y=E,d.z=w*Math.sin(I),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(b+R,1-A),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let A=u[p][M+1],_=u[p][M],E=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&f.push(A,_,w),(p!==i-1||l<Math.PI)&&f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ta=class n extends ws{constructor(e=1,t=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ts=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,g=new C;for(let S=0;S<=i;S++){let m=a+S/i*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=s;m++){let p=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,_=(s+1)*S+m;l.push(p,M,_),l.push(M,A,_)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Yu(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Yu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=Cs(n[t]);for(let s in i)e[s]=i[s]}return e}function Yu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}var Gd={clone:Cs,merge:Mn},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(s.value);break;case"v2":this.uniforms[i].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},el=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Sn=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var tl=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nl=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ns=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends ns{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zc:r=e,o=2*t-i;break;case Jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:a=e,l=2*i-t;break;case Jc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),S=g*g,m=S*g,p=-h*m+2*h*S-h*g,M=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*g+1,A=(-1-f)*m+(1.5+f)*S+.5*g,_=f*m-f*S;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+M*a[c+E]+A*a[l+E]+_*a[d+E];return r}},sl=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},rl=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},al=class extends ns{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),S=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let S=a[c+g],m=a[l+g],p=f*h+g*2,M=d[p],A=d[p+1],_=e*h+g*2,E=u[_],w=u[_+1],R=ym(i,t,M,E,s);r[g]=Vd(R,S,A,w,m)}return r}};function Vd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function gm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function ym(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Vd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=gm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),qc(e.settings)&&(i.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new al(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;qc(this.settings)&&($u(this.settings.inTangents,e),$u(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){at("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){at("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&sp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){at("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Po,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,qc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $u(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Go;var is=class extends Hn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ea;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};ol.prototype.ValueTypeName="color";var ll=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};ll.prototype.ValueTypeName="number";var cl=class extends ns{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Aa=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Hn{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ea;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="vector";var ul=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new ul,dl=class{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ra=class extends vr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yc=new Dt,Ku=new C,Zu=new C,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Yc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Co=new C,Io=new Xn,ui=new C,Ia=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Co,Io,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Io,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Co,Io,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Io,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new C,Ju=new Se,ju=new Se,hn=class extends Ia{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,ju),t.subVectors(ju,Ju)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ih=class extends Ca{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},ki=class extends vr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Sr=class extends Ia{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sh=class extends Ca{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new sh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rr=-90,ar=1,fl=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(rr,ar,e,t);s.layers=this.layers,this.add(s);let r=new hn(rr,ar,e,t);r.layers=this.layers,this.add(r);let a=new hn(rr,ar,e,t);a.layers=this.layers,this.add(a);let o=new hn(rr,ar,e,t);o.layers=this.layers,this.add(o);let l=new hn(rr,ar,e,t);l.layers=this.layers,this.add(l);let c=new hn(rr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ph="\\[\\]\\.:\\/",xm=new RegExp("["+Ph+"]","g"),Lh="[^"+Ph+"]",_m="[^"+Ph.replace("\\.","")+"]",vm=/((?:WC+[\/:])*)/.source.replace("WC",Lh),Sm=/(WCOD+)?/.source.replace("WCOD",_m),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lh),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lh),bm=new RegExp("^"+vm+Sm+Mm+wm+"$"),Em=["material","materials","bones","map"],rh=class{constructor(e,t,i){let s=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Em.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;at("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=rh;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xv=new Float32Array(1);var ah=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function Dh(n,e,t,i){let s=Tm(i);switch(t){case bh:return n*e;case Sl:return n*e/s.components*s.byteLength;case Ml:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case wl:return n*e*2/s.components*s.byteLength;case Eh:return n*e*3/s.components*s.byteLength;case Yn:return n*e*4/s.components*s.byteLength;case bl:return n*e*4/s.components*s.byteLength;case Fa:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Rl:return Math.max(n,16)*Math.max(e,8)/4;case El:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Il:case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pl:case za:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ha:case ec:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tm(n){switch(n){case Nn:case vh:return{byteLength:1,components:1};case br:case Sh:case oi:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case ai:case xl:case qn:return{byteLength:4,components:1};case Mh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rm(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
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
#endif`,Vm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ag=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,p0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,B0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,Z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J0=`#define PHONG
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
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Q0=`#define STANDARD
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
}`,ey=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,ty=`#define TOON
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
}`,ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,ay=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,oy=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Cm,alphahash_pars_fragment:Im,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Dm,alphatest_pars_fragment:Nm,aomap_fragment:Um,aomap_pars_fragment:Fm,batching_pars_vertex:Om,batching_vertex:Bm,begin_vertex:km,beginnormal_vertex:zm,bsdfs:Hm,iridescence_fragment:Gm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:$m,color_pars_fragment:Km,color_pars_vertex:Zm,color_vertex:Jm,common:jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:ag,envmap_fragment:og,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Sg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:yg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:_g,lights_pars_begin:vg,lights_toon_fragment:Mg,lights_toon_pars_fragment:wg,lights_phong_fragment:bg,lights_phong_pars_fragment:Eg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Ig,lightprobes_pars_fragment:Pg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:kg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:Kg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:a0,dithering_fragment:o0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:f0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:y0,skinnormal_vertex:x0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:S0,tonemapping_pars_fragment:M0,transmission_fragment:w0,transmission_pars_fragment:b0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:I0,backgroundCube_vert:P0,backgroundCube_frag:L0,cube_vert:D0,cube_frag:N0,depth_vert:U0,depth_frag:F0,distance_vert:O0,distance_frag:B0,equirect_vert:k0,equirect_frag:z0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:q0,meshmatcap_vert:Y0,meshmatcap_frag:$0,meshnormal_vert:K0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:j0,meshphysical_vert:Q0,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},Fe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Si={basic:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Mn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Mn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Mn([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Mn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Mn([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Mn([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Mn([Fe.common,Fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Mn([Fe.lights,Fe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Si.physical={uniforms:Mn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var sc={r:0,b:0,g:0},cy=new Dt,pf=new ot;pf.set(-1,0,0,0,1,0,0,0,1);function hy(n,e,t,i,s,r){let a=new et(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let _=M.backgroundBlurriness>0;A=e.get(A,_)}return A}function g(M){let A=!1,_=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),A=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,A){let _=f(A);_&&(_.isCubeTexture||_.mapping===Na)?(c===void 0&&(c=new ge(new Rn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Cs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pf),c.material.toneMapped=Mt.getTransfer(_.colorSpace)!==Nt,(u!==_||d!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ge(new es(2,2),new Cn({name:"BackgroundMaterial",uniforms:Cs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(_.colorSpace)!==Nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(sc,Ih(n)),t.buffers.color.setClear(sc.r,sc.g,sc.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:S,dispose:p}}function uy(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(L,B,V,N,z){let Y=!1,X=d(L,N,V,B);r!==X&&(r=X,c(r.object)),Y=f(L,N,V,z),Y&&g(L,N,V,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(L,B,V,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,B,V,N){let z=N.wireframe===!0,Y=i[B.id];Y===void 0&&(Y={},i[B.id]=Y);let X=L.isInstancedMesh===!0?L.id:0,ie=Y[X];ie===void 0&&(ie={},Y[X]=ie);let K=ie[V.id];K===void 0&&(K={},ie[V.id]=K);let ae=K[z];return ae===void 0&&(ae=h(l()),K[z]=ae),ae}function h(L){let B=[],V=[],N=[];for(let z=0;z<t;z++)B[z]=0,V[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,B,V,N){let z=r.attributes,Y=B.attributes,X=0,ie=V.getAttributes();for(let K in ie)if(ie[K].location>=0){let ue=z[K],Ge=Y[K];if(Ge===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ge=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ge=L.instanceColor)),ue===void 0||ue.attribute!==Ge||Ge&&ue.data!==Ge.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(L,B,V,N){let z={},Y=B.attributes,X=0,ie=V.getAttributes();for(let K in ie)if(ie[K].location>=0){let ue=Y[K];ue===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor));let Ge={};Ge.attribute=ue,ue&&ue.data&&(Ge.data=ue.data),z[K]=Ge,X++}r.attributes=z,r.attributesNum=X,r.index=N}function S(){let L=r.newAttributes;for(let B=0,V=L.length;B<V;B++)L[B]=0}function m(L){p(L,0)}function p(L,B){let V=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;V[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),z[L]!==B&&(n.vertexAttribDivisor(L,B),z[L]=B)}function M(){let L=r.newAttributes,B=r.enabledAttributes;for(let V=0,N=B.length;V<N;V++)B[V]!==L[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function A(L,B,V,N,z,Y,X){X===!0?n.vertexAttribIPointer(L,B,V,z,Y):n.vertexAttribPointer(L,B,V,N,z,Y)}function _(L,B,V,N){S();let z=N.attributes,Y=V.getAttributes(),X=B.defaultAttributeValues;for(let ie in Y){let K=Y[ie];if(K.location>=0){let ae=z[ie];if(ae===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),ae!==void 0){let ue=ae.normalized,Ge=ae.itemSize,ke=e.get(ae);if(ke===void 0)continue;let _t=ke.buffer,ut=ke.type,vt=ke.bytesPerElement,J=ut===n.INT||ut===n.UNSIGNED_INT||ae.gpuType===xl;if(ae.isInterleavedBufferAttribute){let oe=ae.data,Le=oe.stride,tt=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<K.locationSize;Oe++)p(K.location+Oe,oe.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<K.locationSize;Oe++)m(K.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Oe=0;Oe<K.locationSize;Oe++)A(K.location+Oe,Ge/K.locationSize,ut,ue,Le*vt,(tt+Ge/K.locationSize*Oe)*vt,J)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)p(K.location+oe,ae.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<K.locationSize;oe++)m(K.location+oe);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let oe=0;oe<K.locationSize;oe++)A(K.location+oe,Ge/K.locationSize,ut,ue,Ge*vt,Ge/K.locationSize*oe*vt,J)}}else if(X!==void 0){let ue=X[ie];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(K.location,ue);break;case 3:n.vertexAttrib3fv(K.location,ue);break;case 4:n.vertexAttrib4fv(K.location,ue);break;default:n.vertexAttrib1fv(K.location,ue)}}}}M()}function E(){b();for(let L in i){let B=i[L];for(let V in B){let N=B[V];for(let z in N){let Y=N[z];for(let X in Y)u(Y[X].object),delete Y[X];delete N[z]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let V in B){let N=B[V];for(let z in N){let Y=N[z];for(let X in Y)u(Y[X].object),delete Y[X];delete N[z]}}delete i[L.id]}function R(L){for(let B in i){let V=i[B];for(let N in V){let z=V[N];if(z[L.id]===void 0)continue;let Y=z[L.id];for(let X in Y)u(Y[X].object),delete Y[X];delete z[L.id]}}}function x(L){for(let B in i){let V=i[B],N=L.isInstancedMesh===!0?L.id:0,z=V[N];if(z!==void 0){for(let Y in z){let X=z[Y];for(let ie in X)u(X[ie].object),delete X[ie];delete z[Y]}delete V[N],Object.keys(V).length===0&&delete i[B]}}}function b(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function dy(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Yn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Nn&&R!==qn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:_,maxSamples:E,samples:w}}function py(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ei,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:i,A=M*4,_=p.clippingState||null;l.value=_,_=u(g,h,A,f);for(let E=0;E!==A;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let p=f+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,_=f;A!==S;++A,_+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var Ar=4,my=6,gy=20,yy=256,Ga=new Sr,Xd=new et,Nh=null,Uh=0,Fh=0,Oh=!1,xy=new C,Is=new C,ac=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=xy}=r;Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Uh,Fh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:oi,format:Yn,colorSpace:ta,depthBuffer:!1},s=qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_y(r)),this._blurMaterial=Sy(r,e,t),this._ggxMaterial=vy(r,e,t)}return s}_compileMaterial(e){let t=new ge(new qt,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,i,s,r){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Xd),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new Rn,new Ut({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Xd),p=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):_===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let E=this._cubeSize;Tr(s,_*E,A>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(S,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===as||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ga)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Ar?i-g+Ar:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Tr(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Tr(e,m,p,3*S,2*S),s.setRenderTarget(e),s.render(o,Ga)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ar?s-this._lodMax+Ar:0),h=4*(this._cubeSize-u);Tr(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Ga)}};function _y(n){let e=[],t=[],i=n,s=n-Ar+1+my;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,A=p>2?0:-1,_=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(_,f*h*p);for(let E=0;E<h;E++){let w=u[E*2]*2-1,R=u[E*2+1]*2-1;p===0?Is.set(1,R,w):p===1?Is.set(-w,1,-R):p===2?Is.set(-w,R,1):p===3?Is.set(-1,R,-w):p===4?Is.set(-w,-1,R):Is.set(w,R,-1),Is.toArray(S,(p*h+E)*f)}}let m=new qt;m.setAttribute("position",new un(g,f)),m.setAttribute("outputDirection",new un(S,f)),t.push(new ge(m,null)),i>Ar&&i--}return{lodMeshes:t,sizeLods:e}}function qd(n,e,t){let i=new Dn(n,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vy(n,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Sy(n,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Yd(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function $d(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:_i});r.uniforms.tEquirect.value=t;let a=new ge(s,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=dn),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function My(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ml||f===gl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new oc(g.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===ml||f===gl,S=f===as||f===As;if(g||S){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ac(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new ac(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===ml?h.mapping=as:f===gl&&(h.mapping=As),h}function l(h){let f=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function wy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ss("WebGLRenderer: "+i+" extension not supported."),s}}}function by(n,e,t,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let M=f.array;S=f.version;for(let A=0,_=M.length;A<_;A+=3){let E=M[A+0],w=M[A+1],R=M[A+2];h.push(E,w,w,R,R,E)}}else{let M=g.array;S=g.version;for(let A=0,_=M.length/3-1;A<_;A+=3){let E=A+0,w=A+1,R=A+2;h.push(E,w,w,R,R,E)}}let m=new(g.count>=65535?ha:ca)(h,1);m.version=S;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Ey(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];t.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ty(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ay(n,e,t){let i=new WeakMap,s=new Wt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let b=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),S===!0&&(A=3);let _=o.attributes.position.count*A,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*E*4*d),R=new ra(w,_,E,d);R.type=qn,R.needsUpdate=!0;let x=A*4;for(let I=0;I<d;I++){let L=m[I],B=p[I],V=M[I],N=_*E*4*I;for(let z=0;z<L.count;z++){let Y=z*x;f===!0&&(s.fromBufferAttribute(L,z),w[N+Y+0]=s.x,w[N+Y+1]=s.y,w[N+Y+2]=s.z,w[N+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,z),w[N+Y+4]=s.x,w[N+Y+5]=s.y,w[N+Y+6]=s.z,w[N+Y+7]=0),S===!0&&(s.fromBufferAttribute(V,z),w[N+Y+8]=s.x,w[N+Y+9]=s.y,w[N+Y+10]=s.z,w[N+Y+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new Se(_,E)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ry(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Cy={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function Iy(n,e,t,i,s,r){let a=new Dn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new qt;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));let u=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ge(c,u),h=new Sr(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,M=[],A=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let w=0;w<M.length;w++){let R=M[w];R.setSize&&R.setSize(_,E)}},this.setEffects=function(_){M=_,A=M.length>0&&M[0].isRenderPass===!0;let E=a.width,w=a.height;M.length>0&&o===null&&(o=new Dn(E,w,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(E,w,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(E,w)}},this.begin=function(_,E){if(S||_.toneMapping===ri&&M.length===0)return!1;if(p=E,E!==null){let w=E.width,R=E.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return A===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=ri,!0},this.hasRenderPass=function(){return A},this.end=function(_,E){_.toneMapping=m,S=!0;let w=a,R=o;for(let x=0;x<M.length;x++){let b=M[x];b.enabled!==!1&&(b.render(_,R,w,E),b.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,u.defines={},Mt.getTransfer(f)===Nt&&(u.defines.SRGB_TRANSFER="");let x=Cy[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var mf=new An,zh=new ji(1,1),gf=new ra,yf=new Xo,xf=new ma,Kd=[],Zd=[],Jd=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function Cr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Kd[s];if(r===void 0&&(r=new Float32Array(s),Kd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hc(n,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function Dy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function Ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function Uy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Qd.set(i),n.uniformMatrix2fv(this.addr,!1,Qd),tn(t,i)}}function Fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jd.set(i),n.uniformMatrix3fv(this.addr,!1,jd),tn(t,i)}}function Oy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Jd.set(i),n.uniformMatrix4fv(this.addr,!1,Jd),tn(t,i)}}function By(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function Hy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function Gy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function Wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function Xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function qy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zh.compareFunction=t.isReversedDepthBuffer()?ic:nc,r=zh):r=mf,t.setTexture2D(e||r,s)}function Yy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yf,s)}function $y(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xf,s)}function Ky(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gf,s)}function Zy(n){switch(n){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return Uy;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Hy;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Ky}}function Jy(n,e){n.uniform1fv(this.addr,e)}function jy(n,e){let t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Qy(n,e){let t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function ex(n,e){let t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function tx(n,e){let t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nx(n,e){let t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ix(n,e){let t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sx(n,e){n.uniform1iv(this.addr,e)}function rx(n,e){n.uniform2iv(this.addr,e)}function ax(n,e){n.uniform3iv(this.addr,e)}function ox(n,e){n.uniform4iv(this.addr,e)}function lx(n,e){n.uniform1uiv(this.addr,e)}function cx(n,e){n.uniform2uiv(this.addr,e)}function hx(n,e){n.uniform3uiv(this.addr,e)}function ux(n,e){n.uniform4uiv(this.addr,e)}function dx(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zh:a=mf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function fx(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yf,r[a])}function px(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xf,r[a])}function mx(n,e,t){let i=this.cache,s=e.length,r=hc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gf,r[a])}function gx(n){switch(n){case 5126:return Jy;case 35664:return jy;case 35665:return Qy;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zy(t.type)}},Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gx(t.type)}},Vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Bh=/(\w+)(\])?(\[|\.)?/g;function ef(n,e){n.seq.push(e),n.map[e.id]=e}function yx(n,e,t){let i=n.name,s=i.length;for(Bh.lastIndex=0;;){let r=Bh.exec(i),a=Bh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ef(t,c===void 0?new Hh(o,n,e):new Gh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Vh(o),ef(t,d)),t=d}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);yx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function tf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xx=37297,_x=0;function vx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var nf=new ot;function Sx(n){Mt._getMatrix(nf,Mt.workingColorSpace,n);let e=`mat3( ${nf.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case na:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vx(n.getShaderSource(e),o)}else return r}function Mx(n,e){let t=Sx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var wx={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[Da]:"ACESFilmic",[yh]:"AgX",[xh]:"Neutral",[gh]:"Custom"};function bx(n,e){let t=wx[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rc=new C;function Ex(){Mt.getLuminanceCoefficients(rc);let n=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function Ax(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wa(n){return n!==""}function rf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(n){return n.replace(Cx,Px)}var Ix=new Map;function Px(n,e){let t=ft[e];if(t===void 0){let i=Ix.get(e);if(i!==void 0)t=ft[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wh(t)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(Lx,Dx)}function Dx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Nx={[La]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function Ux(n){return Nx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fx={[as]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function Ox(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Fx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bx={[As]:"ENVMAP_MODE_REFRACTION"};function kx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zx={[dh]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[Sd]:"ENVMAP_BLENDING_ADD"};function Hx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":zx[n.combine]||"ENVMAP_BLENDING_NONE"}function Gx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ux(t),c=Ox(t),u=kx(t),d=Hx(t),h=Gx(t),f=Tx(t),g=Ax(r),S=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wa).join(`
`),p.length>0&&(p+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),p=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?ft.tonemapping_pars_fragment:"",t.toneMapping!==ri?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Mx("linearToOutputTexel",t.outputColorSpace),Ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Wh(a),a=rf(a,t),a=af(a,t),o=Wh(o),o=rf(o,t),o=af(o,t),a=of(a),o=of(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=M+m+a,_=M+p+o,E=tf(s,s.VERTEX_SHADER,A),w=tf(s,s.FRAGMENT_SHADER,_);s.attachShader(S,E),s.attachShader(S,w),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(L){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(w)||"",z=B.trim(),Y=V.trim(),X=N.trim(),ie=!0,K=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,E,w);else{let ae=sf(s,E,"vertex"),ue=sf(s,w,"fragment");at("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+ae+`
`+ue)}else z!==""?it("WebGLProgram: Program Info Log:",z):(Y===""||X==="")&&(K=!1);K&&(L.diagnostics={runnable:ie,programLog:z,vertexShader:{log:Y,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(E),s.deleteShader(w),x=new Rr(s,S),b=Rx(s,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(S,xx)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}var Wx=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qh(e),t.set(e,i)),i}},qh=class{constructor(e){this.id=Wx++,this.code=e,this.usedTimes=0}};function Xx(n){return n===cs||n===za||n===Ha}function qx(n,e,t,i,s,r){let a=new aa,o=new Xh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,b,I,L,B,V){let N=L.fog,z=B.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||Y,X),K=ie&&ie.mapping===Na?ie.image.height:null,ae=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&it("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ge=ue!==void 0?ue.length:0,ke=0;z.morphAttributes.position!==void 0&&(ke=1),z.morphAttributes.normal!==void 0&&(ke=2),z.morphAttributes.color!==void 0&&(ke=3);let _t,ut,vt,J;if(ae){let Ft=Si[ae];_t=Ft.vertexShader,ut=Ft.fragmentShader}else{_t=x.vertexShader,ut=x.fragmentShader;let Ft=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,Ft,xt),vt=Ft.id,J=xt.id}let oe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),tt=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,nt=!!x.map,St=!!x.matcap,le=!!ie,me=!!x.aoMap,ye=!!x.lightMap,xe=!!x.bumpMap&&x.wireframe===!1,be=!!x.normalMap,je=!!x.displacementMap,Ke=!!x.emissiveMap,st=!!x.metalnessMap,Qe=!!x.roughnessMap,D=x.anisotropy>0,Ct=x.clearcoat>0,dt=x.dispersion>0,T=x.retroreflectivity>0,y=x.iridescence>0,k=x.sheen>0,W=x.transmission>0,$=D&&!!x.anisotropyMap,Me=Ct&&!!x.clearcoatMap,Ee=Ct&&!!x.clearcoatNormalMap,Q=Ct&&!!x.clearcoatRoughnessMap,se=y&&!!x.iridescenceMap,Te=y&&!!x.iridescenceThicknessMap,Ve=k&&!!x.sheenColorMap,De=k&&!!x.sheenRoughnessMap,Re=!!x.specularMap,We=!!x.specularColorMap,Je=!!x.specularIntensityMap,ct=W&&!!x.transmissionMap,O=W&&!!x.thicknessMap,Ce=!!x.gradientMap,ee=!!x.alphaMap,Ie=x.alphaTest>0,Ue=!!x.alphaHash,ce=!!x.extensions,Xe=ri;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Xe=n.toneMapping);let ze={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:_t,fragmentShader:ut,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:tt,instancingColor:tt&&B.instanceColor!==null,instancingMorph:tt&&B.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:St,envMap:le,envMapMode:le&&ie.mapping,envMapCubeUVHeight:K,aoMap:me,lightMap:ye,bumpMap:xe,normalMap:be,displacementMap:je,emissiveMap:Ke,normalMapObjectSpace:be&&x.normalMapType===bd,normalMapTangentSpace:be&&x.normalMapType===tc,packedNormalMap:be&&x.normalMapType===tc&&Xx(x.normalMap.format),metalnessMap:st,roughnessMap:Qe,anisotropy:D,anisotropyMap:$,clearcoat:Ct,clearcoatMap:Me,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Q,dispersion:dt,retroreflection:T,iridescence:y,iridescenceMap:se,iridescenceThicknessMap:Te,sheen:k,sheenColorMap:Ve,sheenRoughnessMap:De,specularMap:Re,specularColorMap:We,specularIntensityMap:Je,transmission:W,transmissionMap:ct,thicknessMap:O,gradientMap:Ce,opaque:x.transparent===!1&&x.blending===wr&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:Ie,alphaHash:Ue,combine:x.combine,mapUv:nt&&g(x.map.channel),aoMapUv:me&&g(x.aoMap.channel),lightMapUv:ye&&g(x.lightMap.channel),bumpMapUv:xe&&g(x.bumpMap.channel),normalMapUv:be&&g(x.normalMap.channel),displacementMapUv:je&&g(x.displacementMap.channel),emissiveMapUv:Ke&&g(x.emissiveMap.channel),metalnessMapUv:st&&g(x.metalnessMap.channel),roughnessMapUv:Qe&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:Me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(x.sheenRoughnessMap.channel),specularMapUv:Re&&g(x.specularMap.channel),specularColorMapUv:We&&g(x.specularColorMap.channel),specularIntensityMapUv:Je&&g(x.specularIntensityMap.channel),transmissionMapUv:ct&&g(x.transmissionMap.channel),thicknessMapUv:O&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(be||D),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(nt||ee),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:ke,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&Mt.getTransfer(x.map.colorSpace)===Nt,decodeVideoTextureEmissive:Ke&&x.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(x.emissiveMap.colorSpace)===Nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let b=f[x.type],I;if(b){let L=Si[b];I=Gd.clone(L.uniforms)}else I=x.uniforms;return I}function _(x,b){let I=u.get(b);return I!==void 0?++I.usedTimes:(I=new Vx(n,b,x,s),c.push(I),u.set(b,I)),I}function E(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:_,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:R}}function Yx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function $x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function cf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,S,m,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function l(h,f,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);let A=o(h,f,g,S,m,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(h,f,g,S,m,p){let M=o(h,f,g,S,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||$x),i.length>1&&i.sort(f||cf),s.length>1&&s.sort(f||cf)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Kx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new hf,n.set(i,[a])):s>=r.length?(a=new hf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new et};break;case"SpotLight":t={position:new C,direction:new C,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Jx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jx=0;function Qx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e_(n){let e=new Zx,t=Jx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new Dt,a=new Dt;function o(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,M=0,A=0,_=0,E=0,w=0,R=0,x=0,b=0,I=0;c.sort(Qx);for(let B=0,V=c.length;B<V;B++){let N=c[B],z=N.color,Y=N.intensity,X=N.distance,ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===cs?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=z.r*Y,d+=z.g*Y,h+=z.b*Y;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],Y);I++}else if(N.isSunLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,ue=t.get(N);ue.shadowIntensity=ae.intensity,ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[g]=ue,i.sunShadowMap[g]=ie;let Ge=ae.getViewportCount();for(let ke=0;ke<Ge;ke++)i.sunShadowMatrix[S+ke]=ae.getMatrix(ke),i.sunShadowCascade[S+ke]=ae._cascadeData[ke];S+=Ge,g++}i.sun[f]=K,f++}else if(N.isDirectionalLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,ue=t.get(N);ue.shadowIntensity=ae.intensity,ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,i.directionalShadow[m]=ue,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=N.shadow.matrix,E++}i.directional[m]=K,m++}else if(N.isSpotLight){let K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(z).multiplyScalar(Y),K.distance=X,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[M]=K;let ae=N.shadow;if(N.map&&(i.spotLightMap[x]=N.map,x++,ae.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[M]=ae.matrix,N.castShadow){let ue=t.get(N);ue.shadowIntensity=ae.intensity,ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,i.spotShadow[M]=ue,i.spotShadowMap[M]=ie,R++}M++}else if(N.isRectAreaLight){let K=e.get(N);K.color.copy(z).multiplyScalar(Y),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[A]=K,A++}else if(N.isPointLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let ae=N.shadow,ue=t.get(N);ue.shadowIntensity=ae.intensity,ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,ue.shadowCameraNear=ae.camera.near,ue.shadowCameraFar=ae.camera.far,i.pointShadow[p]=ue,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=K,p++}else if(N.isHemisphereLight){let K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(Y),K.groundColor.copy(N.groundColor).multiplyScalar(Y),i.hemi[_]=K,_++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-b,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=I,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=I,i.version=jx++)}function l(c,u){let d=0,h=0,f=0,g=0,S=0,m=0,p=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let _=c[M];if(_.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(_.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let E=i.rectArea[S];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(_.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function uf(n){let e=new e_(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function t_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new uf(n),e.set(s,[o])):r>=a.length?(o=new uf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],r_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],df=new Dt,Va=new C,kh=new C;function a_(n,e,t){let i=new pr,s=new Se,r=new Se,a=new Wt,o=new tl,l=new nl,c={},u=t.maxTextureSize,d={[rs]:fn,[fn]:rs,[ln]:ln},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ge(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let p=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===td&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);let b=n.getRenderTarget(),I=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(_i),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=p!==this.type;V&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=w.length;N<z;N++){let Y=w[N],X=Y.shadow;if(X===void 0){it("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ie=X.getFrameExtents();s.multiply(ie),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,X.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=K,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Mr){if(Y.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Dn(s.x,s.y,{format:cs,type:oi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new ji(s.x,s.y,qn),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=mi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=rn,X.map.depthTexture.magFilter=rn}else Y.isPointLight?(X.map=new oc(s.x),X.map.depthTexture=new Yo(s.x,ai)):(X.map=new Dn(s.x,s.y),X.map.depthTexture=new ji(s.x,s.y,ai)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=mi,this.type===La?(X.map.depthTexture.compareFunction=K?ic:nc,X.map.depthTexture.minFilter=dn,X.map.depthTexture.magFilter=dn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=rn,X.map.depthTexture.magFilter=rn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ae=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Y.isPointLight!==!0&&X.updateMatrices(Y,x);for(let ue=0;ue<ae;ue++){let Ge=X.getCamera(ue);if(Y.isPointLight){let ke=X.camera,_t=X.matrix,ut=Y.distance||ke.far;ut!==ke.far&&(ke.far=ut,ke.updateProjectionMatrix()),Va.setFromMatrixPosition(Y.matrixWorld),ke.position.copy(Va),kh.copy(ke.position),kh.add(s_[ue]),ke.up.copy(r_[ue]),ke.lookAt(kh),ke.updateMatrixWorld(),_t.makeTranslation(-Va.x,-Va.y,-Va.z),df.multiplyMatrices(ke.projectionMatrix,ke.matrixWorldInverse),X._frustum.setFromProjectionMatrix(df,ke.coordinateSystem,ke.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(X.map),n.clear());let ke=X.getViewport(ue);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),B.viewport(a)}i=X.getFrustum(ue),_(R,x,Ge,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Mr&&M(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,I,L)};function M(w,R){let x=e.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Dn(s.x,s.y,{format:cs,type:oi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,x,h,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,x,f,S,null)}function A(w,R,x,b){let I=null,L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)I=L;else if(I=x.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=I.uuid,V=R.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let z=N[V];z===void 0&&(z=I.clone(),N[V]=z,R.addEventListener("dispose",E)),I=z}if(I.visible=R.visible,I.wireframe=R.wireframe,b===Mr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=n.properties.get(I);B.light=x}return I}function _(w,R,x,b,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Mr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let V=e.update(w),N=w.material;if(Array.isArray(N)){let z=V.groups;for(let Y=0,X=z.length;Y<X;Y++){let ie=z[Y],K=N[ie.materialIndex];if(K&&K.visible){let ae=A(w,K,b,I);w.onBeforeShadow(n,w,R,x,V,ae,ie),n.renderBufferDirect(x,null,V,ae,w,ie),w.onAfterShadow(n,w,R,x,V,ae,ie)}}}else if(N.visible){let z=A(w,N,b,I);w.onBeforeShadow(n,w,R,x,V,z,null),n.renderBufferDirect(x,null,V,z,w,null),w.onAfterShadow(n,w,R,x,V,z,null)}}let B=w.children;for(let V=0,N=B.length;V<N;V++)_(B[V],R,x,b,I)}function E(w){w.target.removeEventListener("dispose",E);for(let x in c){let b=c[x],I=w.target.uuid;I in b&&(b[I].dispose(),delete b[I])}}}function o_(n,e){function t(){let O=!1,Ce=new Wt,ee=null,Ie=new Wt(0,0,0,0);return{setMask:function(Ue){ee!==Ue&&!O&&(n.colorMask(Ue,Ue,Ue,Ue),ee=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,ce,Xe,ze,Ft){Ft===!0&&(Ue*=ze,ce*=ze,Xe*=ze),Ce.set(Ue,ce,Xe,ze),Ie.equals(Ce)===!1&&(n.clearColor(Ue,ce,Xe,ze),Ie.copy(Ce))},reset:function(){O=!1,ee=null,Ie.set(-1,0,0,0)}}}function i(){let O=!1,Ce=!1,ee=null,Ie=null,Ue=null;return{setReversed:function(ce){if(Ce!==ce){let Xe=e.get("EXT_clip_control");ce?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ce=ce;let ze=Ue;Ue=null,this.setClear(ze)}},getReversed:function(){return Ce},setTest:function(ce){ce?oe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ce){ee!==ce&&!O&&(n.depthMask(ce),ee=ce)},setFunc:function(ce){if(Ce&&(ce=Ud[ce]),Ie!==ce){switch(ce){case Do:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ce}},setLocked:function(ce){O=ce},setClear:function(ce){Ue!==ce&&(Ue=ce,Ce&&(ce=1-ce),n.clearDepth(ce))},reset:function(){O=!1,ee=null,Ie=null,Ue=null,Ce=!1}}}function s(){let O=!1,Ce=null,ee=null,Ie=null,Ue=null,ce=null,Xe=null,ze=null,Ft=null;return{setTest:function(xt){O||(xt?oe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!O&&(n.stencilMask(xt),Ce=xt)},setFunc:function(xt,Ln,On){(ee!==xt||Ie!==Ln||Ue!==On)&&(n.stencilFunc(xt,Ln,On),ee=xt,Ie=Ln,Ue=On)},setOp:function(xt,Ln,On){(ce!==xt||Xe!==Ln||ze!==On)&&(n.stencilOp(xt,Ln,On),ce=xt,Xe=Ln,ze=On)},setLocked:function(xt){O=xt},setClear:function(xt){Ft!==xt&&(n.clearStencil(xt),Ft=xt)},reset:function(){O=!1,Ce=null,ee=null,Ie=null,Ue=null,ce=null,Xe=null,ze=null,Ft=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,A=null,_=null,E=null,w=null,R=null,x=new et(0,0,0),b=0,I=!1,L=null,B=null,V=null,N=null,z=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ie=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=ie>=1):K.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=ie>=2);let ae=null,ue={},Ge=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),_t=new Wt().fromArray(Ge),ut=new Wt().fromArray(ke);function vt(O,Ce,ee,Ie){let Ue=new Uint8Array(4),ce=n.createTexture();n.bindTexture(O,ce),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ee;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Ce+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ce}let J={};J[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(lr),xe(!1),be(oh),oe(n.CULL_FACE),me(_i);function oe(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Le(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function tt(O,Ce){return h[O]!==Ce?(n.bindFramebuffer(O,Ce),h[O]=Ce,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Oe(O,Ce){let ee=g,Ie=!1;if(O){ee=f.get(Ce),ee===void 0&&(ee=[],f.set(Ce,ee));let Ue=O.textures;if(ee.length!==Ue.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Xe=Ue.length;ce<Xe;ce++)ee[ce]=n.COLOR_ATTACHMENT0+ce;ee.length=Ue.length,Ie=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ee)}function nt(O){return S!==O?(n.useProgram(O),S=O,!0):!1}let St={[Ts]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};St[rd]=n.MIN,St[ad]=n.MAX;let le={[od]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[hd]:n.ONE_MINUS_SRC_COLOR,[uh]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[yd]:n.ONE_MINUS_CONSTANT_COLOR,[xd]:n.CONSTANT_ALPHA,[_d]:n.ONE_MINUS_CONSTANT_ALPHA};function me(O,Ce,ee,Ie,Ue,ce,Xe,ze,Ft,xt){if(O===_i){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),O!==nd){if(O!==p||xt!==I){if((M!==Ts||E!==Ts)&&(n.blendEquation(n.FUNC_ADD),M=Ts,E=Ts),xt)switch(O){case wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cn:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",O);break}else switch(O){case wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",O);break}A=null,_=null,w=null,R=null,x.set(0,0,0),b=0,p=O,I=xt}return}Ue=Ue||Ce,ce=ce||ee,Xe=Xe||Ie,(Ce!==M||Ue!==E)&&(n.blendEquationSeparate(St[Ce],St[Ue]),M=Ce,E=Ue),(ee!==A||Ie!==_||ce!==w||Xe!==R)&&(n.blendFuncSeparate(le[ee],le[Ie],le[ce],le[Xe]),A=ee,_=Ie,w=ce,R=Xe),(ze.equals(x)===!1||Ft!==b)&&(n.blendColor(ze.r,ze.g,ze.b,Ft),x.copy(ze),b=Ft),p=O,I=!1}function ye(O,Ce){O.side===ln?Le(n.CULL_FACE):oe(n.CULL_FACE);let ee=O.side===fn;Ce&&(ee=!ee),xe(ee),O.blending===wr&&O.transparent===!1?me(_i):me(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Ie=O.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function be(O){O!==Qu?(oe(n.CULL_FACE),O!==B&&(O===oh?n.cullFace(n.BACK):O===ed?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),B=O}function je(O){O!==V&&(X&&n.lineWidth(O),V=O)}function Ke(O,Ce,ee){O?(oe(n.POLYGON_OFFSET_FILL),(N!==Ce||z!==ee)&&(N=Ce,z=ee,a.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,ee))):Le(n.POLYGON_OFFSET_FILL)}function st(O){O?oe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=n.TEXTURE0+Y-1),ae!==O&&(n.activeTexture(O),ae=O)}function D(O,Ce,ee){ee===void 0&&(ae===null?ee=n.TEXTURE0+Y-1:ee=ae);let Ie=ue[ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},ue[ee]=Ie),(Ie.type!==O||Ie.texture!==Ce)&&(ae!==ee&&(n.activeTexture(ee),ae=ee),n.bindTexture(O,Ce||J[O]),Ie.type=O,Ie.texture=Ce)}function Ct(){let O=ue[ae];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function dt(){try{n.compressedTexImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function y(){try{n.texSubImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function k(){try{n.texSubImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function Me(){try{n.texStorage2D(...arguments)}catch(O){at("WebGLState:",O)}}function Ee(){try{n.texStorage3D(...arguments)}catch(O){at("WebGLState:",O)}}function Q(){try{n.texImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function se(){try{n.texImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function Te(O){return d[O]!==void 0?d[O]:n.getParameter(O)}function Ve(O,Ce){d[O]!==Ce&&(n.pixelStorei(O,Ce),d[O]=Ce)}function De(O){_t.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function Re(O){ut.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ut.copy(O))}function We(O,Ce){let ee=c.get(Ce);ee===void 0&&(ee=new WeakMap,c.set(Ce,ee));let Ie=ee.get(O);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ce,O.name),ee.set(O,Ie))}function Je(O,Ce){let Ie=c.get(Ce).get(O);l.get(Ce)!==Ie&&(n.uniformBlockBinding(Ce,Ie,O.__bindingPointIndex),l.set(Ce,Ie))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,ue={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,A=null,_=null,E=null,w=null,R=null,x=new et(0,0,0),b=0,I=!1,L=null,B=null,V=null,N=null,z=null,_t.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Le,bindFramebuffer:tt,drawBuffers:Oe,useProgram:nt,setBlending:me,setMaterial:ye,setFlipSided:xe,setCullFace:be,setLineWidth:je,setPolygonOffset:Ke,setScissorTest:st,activeTexture:Qe,bindTexture:D,unbindTexture:Ct,compressedTexImage2D:dt,compressedTexImage3D:T,texImage2D:Q,texImage3D:se,pixelStorei:Ve,getParameter:Te,updateUBOMapping:We,uniformBlockBinding:Je,texStorage2D:Me,texStorage3D:Ee,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:De,viewport:Re,reset:ct}}function l_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,y){return g?new OffscreenCanvas(T,y):ia("canvas")}function m(T,y,k){let W=1,$=dt(T);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Me=Math.floor(W*$.width),Ee=Math.floor(W*$.height);h===void 0&&(h=S(Me,Ee));let Q=y?S(Me,Ee):h;return Q.width=Me,Q.height=Ee,Q.getContext("2d").drawImage(T,0,0,Me,Ee),it("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Me+"x"+Ee+")."),Q}else return"data"in T&&it("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,y,k,W,$,Me=!1){if(T!==null){if(n[T]!==void 0)return n[T];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Ee;W&&(Ee=e.get("EXT_texture_norm16"),Ee||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===n.RED&&(k===n.FLOAT&&(Q=n.R32F),k===n.HALF_FLOAT&&(Q=n.R16F),k===n.UNSIGNED_BYTE&&(Q=n.R8),k===n.UNSIGNED_SHORT&&Ee&&(Q=Ee.R16_EXT),k===n.SHORT&&Ee&&(Q=Ee.R16_SNORM_EXT)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.R8UI),k===n.UNSIGNED_SHORT&&(Q=n.R16UI),k===n.UNSIGNED_INT&&(Q=n.R32UI),k===n.BYTE&&(Q=n.R8I),k===n.SHORT&&(Q=n.R16I),k===n.INT&&(Q=n.R32I)),y===n.RG&&(k===n.FLOAT&&(Q=n.RG32F),k===n.HALF_FLOAT&&(Q=n.RG16F),k===n.UNSIGNED_BYTE&&(Q=n.RG8),k===n.UNSIGNED_SHORT&&Ee&&(Q=Ee.RG16_EXT),k===n.SHORT&&Ee&&(Q=Ee.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RG8UI),k===n.UNSIGNED_SHORT&&(Q=n.RG16UI),k===n.UNSIGNED_INT&&(Q=n.RG32UI),k===n.BYTE&&(Q=n.RG8I),k===n.SHORT&&(Q=n.RG16I),k===n.INT&&(Q=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),k===n.UNSIGNED_INT&&(Q=n.RGB32UI),k===n.BYTE&&(Q=n.RGB8I),k===n.SHORT&&(Q=n.RGB16I),k===n.INT&&(Q=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),k===n.UNSIGNED_INT&&(Q=n.RGBA32UI),k===n.BYTE&&(Q=n.RGBA8I),k===n.SHORT&&(Q=n.RGBA16I),k===n.INT&&(Q=n.RGBA32I)),y===n.RGB&&(k===n.UNSIGNED_SHORT&&Ee&&(Q=Ee.RGB16_EXT),k===n.SHORT&&Ee&&(Q=Ee.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),y===n.RGBA){let se=Me?na:Mt.getTransfer($);k===n.FLOAT&&(Q=n.RGBA32F),k===n.HALF_FLOAT&&(Q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Q=se===Nt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&Ee&&(Q=Ee.RGBA16_EXT),k===n.SHORT&&Ee&&(Q=Ee.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(T,y){let k;return T?y===null||y===ai||y===Er?k=n.DEPTH24_STENCIL8:y===qn?k=n.DEPTH32F_STENCIL8:y===br&&(k=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===Er?k=n.DEPTH_COMPONENT24:y===qn?k=n.DEPTH_COMPONENT32F:y===br&&(k=n.DEPTH_COMPONENT16),k}function w(T,y){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){let y=T.target;y.removeEventListener("dispose",R),b(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(T){let y=T.target;y.removeEventListener("dispose",x),L(y)}function b(T){let y=i.get(T);if(y.__webglInit===void 0)return;let k=T.source,W=f.get(k);if(W){let $=W[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(T),Object.keys(W).length===0&&f.delete(k)}i.remove(T)}function I(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let k=T.source,W=f.get(k);delete W[y.__cacheKey],a.memory.textures--}function L(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let $=0;$<y.__webglFramebuffer[W].length;$++)n.deleteFramebuffer(y.__webglFramebuffer[W][$]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=T.textures;for(let W=0,$=k.length;W<$;W++){let Me=i.get(k[W]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(T)}let B=0;function V(){B=0}function N(){return B}function z(T){B=T}function Y(){let T=B;return T>=s.maxTextures&&it("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function X(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function ie(T,y){let k=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){let W=T.image;if(W===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,T,y);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function K(T,y){let k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Le(k,T,y);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function ae(T,y){let k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Le(k,T,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function ue(T,y){let k=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&k.__version!==T.version){tt(k,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let Ge={[zo]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},ke={[rn]:n.NEAREST,[Md]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},_t={[Td]:n.NEVER,[Pd]:n.ALWAYS,[Ad]:n.LESS,[nc]:n.LEQUAL,[Rd]:n.EQUAL,[ic]:n.GEQUAL,[Cd]:n.GREATER,[Id]:n.NOTEQUAL};function ut(T,y){if(y.type===qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===yl||y.magFilter===Ua||y.magFilter===os||y.minFilter===dn||y.minFilter===yl||y.minFilter===Ua||y.minFilter===os)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Ge[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Ge[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Ge[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ke[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ke[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_t[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===rn||y.minFilter!==Ua&&y.minFilter!==os||y.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function vt(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));let W=y.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let Me=X(y);if(Me!==T.__cacheKey){$[Me]===void 0&&($[Me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[Me].usedTimes++;let Ee=$[T.__cacheKey];Ee!==void 0&&($[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(y)),T.__cacheKey=Me,T.__webglTexture=$[Me].texture}return k}function J(T,y,k){return Math.floor(Math.floor(T/k)/y)}function oe(T,y,k,W){let Me=T.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,W,y.data);else{Me.sort((Ve,De)=>Ve.start-De.start);let Ee=0;for(let Ve=1;Ve<Me.length;Ve++){let De=Me[Ee],Re=Me[Ve],We=De.start+De.count,Je=J(Re.start,y.width,4),ct=J(De.start,y.width,4);Re.start<=We+1&&Je===ct&&J(Re.start+Re.count-1,y.width,4)===Je?De.count=Math.max(De.count,Re.start+Re.count-De.start):(++Ee,Me[Ee]=Re)}Me.length=Ee+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ve=0,De=Me.length;Ve<De;Ve++){let Re=Me[Ve],We=Math.floor(Re.start/4),Je=Math.ceil(Re.count/4),ct=We%y.width,O=Math.floor(We/y.width),Ce=Je,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,ct,O,Ce,ee,k,W,y.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function Le(T,y,k){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);let $=vt(T,y),Me=y.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+k);let Ee=i.get(Me);if(Me.version!==Ee.__version||$===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ee=Mt.getPrimaries(Mt.workingColorSpace),Ie=y.colorSpace===zi?null:Mt.getPrimaries(y.colorSpace),Ue=y.colorSpace===zi||ee===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let se=m(y.image,!1,s.maxTextureSize);se=Ct(y,se);let Te=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type),De=_(y.internalFormat,Te,Ve,y.normalized,y.colorSpace,y.isVideoTexture);ut(W,y);let Re,We=y.mipmaps,Je=y.isVideoTexture!==!0,ct=Ee.__version===void 0||$===!0,O=Me.dataReady,Ce=w(y,se);if(y.isDepthTexture)De=E(y.format===ls,y.type),ct&&(Je?t.texStorage2D(n.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,Te,Ve,null));else if(y.isDataTexture)if(We.length>0){Je&&ct&&t.texStorage2D(n.TEXTURE_2D,Ce,De,We[0].width,We[0].height);for(let ee=0,Ie=We.length;ee<Ie;ee++)Re=We[ee],Je?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Re.width,Re.height,Te,Ve,Re.data):t.texImage2D(n.TEXTURE_2D,ee,De,Re.width,Re.height,0,Te,Ve,Re.data);y.generateMipmaps=!1}else Je?(ct&&t.texStorage2D(n.TEXTURE_2D,Ce,De,se.width,se.height),O&&oe(y,se,Te,Ve)):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,Te,Ve,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Je&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,We[0].width,We[0].height,se.depth);for(let ee=0,Ie=We.length;ee<Ie;ee++)if(Re=We[ee],y.format!==Yn)if(Te!==null)if(Je){if(O)if(y.layerUpdates.size>0){let Ue=Dh(Re.width,Re.height,y.format,y.type);for(let ce of y.layerUpdates){let Xe=Re.data.subarray(ce*Ue/Re.data.BYTES_PER_ELEMENT,(ce+1)*Ue/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ce,Re.width,Re.height,1,Te,Xe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Re.width,Re.height,se.depth,Te,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,De,Re.width,Re.height,se.depth,0,Re.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Re.width,Re.height,se.depth,Te,Ve,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,De,Re.width,Re.height,se.depth,0,Te,Ve,Re.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Je&&ct&&t.texStorage2D(n.TEXTURE_2D,Ce,De,We[0].width,We[0].height);for(let ee=0,Ie=We.length;ee<Ie;ee++)Re=We[ee],y.format!==Yn?Te!==null?Je?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,De,Re.width,Re.height,0,Re.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Re.width,Re.height,Te,Ve,Re.data):t.texImage2D(n.TEXTURE_2D,ee,De,Re.width,Re.height,0,Te,Ve,Re.data)}else if(y.isDataArrayTexture)if(Je){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,De,se.width,se.height,se.depth),O)if(y.layerUpdates.size>0){let ee=Dh(se.width,se.height,y.format,y.type);for(let Ie of y.layerUpdates){let Ue=se.data.subarray(Ie*ee/se.data.BYTES_PER_ELEMENT,(Ie+1)*ee/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,se.width,se.height,1,Te,Ve,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,Ve,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,Te,Ve,se.data);else if(y.isData3DTexture)Je?(ct&&t.texStorage3D(n.TEXTURE_3D,Ce,De,se.width,se.height,se.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,Ve,se.data)):t.texImage3D(n.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,Te,Ve,se.data);else if(y.isFramebufferTexture){if(ct)if(Je)t.texStorage2D(n.TEXTURE_2D,Ce,De,se.width,se.height);else{let ee=se.width,Ie=se.height;for(let Ue=0;Ue<Ce;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,De,ee,Ie,0,Te,Ve,null),ee>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),se.parentNode!==ee){ee.appendChild(se),d.add(y),ee.onpaint=Ie=>{let Ue=Ie.changedElements;for(let ce of d)Ue.includes(ce.image)&&(ce.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Ue=n.RGBA,ce=n.RGBA,Xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ue,ce,Xe,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(Je&&ct){let ee=dt(We[0]);t.texStorage2D(n.TEXTURE_2D,Ce,De,ee.width,ee.height)}for(let ee=0,Ie=We.length;ee<Ie;ee++)Re=We[ee],Je?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Te,Ve,Re):t.texImage2D(n.TEXTURE_2D,ee,De,Te,Ve,Re);y.generateMipmaps=!1}else if(Je){if(ct){let ee=dt(se);t.texStorage2D(n.TEXTURE_2D,Ce,De,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ve,se)}else t.texImage2D(n.TEXTURE_2D,0,De,Te,Ve,se);p(y)&&M(W),Ee.__version=Me.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function tt(T,y,k){if(y.image.length!==6)return;let W=vt(T,y),$=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);let Me=i.get($);if($.version!==Me.__version||W===!0){t.activeTexture(n.TEXTURE0+k);let Ee=Mt.getPrimaries(Mt.workingColorSpace),Q=y.colorSpace===zi?null:Mt.getPrimaries(y.colorSpace),se=y.colorSpace===zi||Ee===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,De=[];for(let ce=0;ce<6;ce++)!Te&&!Ve?De[ce]=m(y.image[ce],!0,s.maxCubemapSize):De[ce]=Ve?y.image[ce].image:y.image[ce],De[ce]=Ct(y,De[ce]);let Re=De[0],We=r.convert(y.format,y.colorSpace),Je=r.convert(y.type),ct=_(y.internalFormat,We,Je,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,Ce=Me.__version===void 0||W===!0,ee=$.dataReady,Ie=w(y,Re);ut(n.TEXTURE_CUBE_MAP,y);let Ue;if(Te){O&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ct,Re.width,Re.height);for(let ce=0;ce<6;ce++){Ue=De[ce].mipmaps;for(let Xe=0;Xe<Ue.length;Xe++){let ze=Ue[Xe];y.format!==Yn?We!==null?O?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,0,0,ze.width,ze.height,We,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,ct,ze.width,ze.height,0,ze.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,0,0,ze.width,ze.height,We,Je,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe,ct,ze.width,ze.height,0,We,Je,ze.data)}}}else{if(Ue=y.mipmaps,O&&Ce){Ue.length>0&&Ie++;let ce=dt(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ct,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ve){O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De[ce].width,De[ce].height,We,Je,De[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,De[ce].width,De[ce].height,0,We,Je,De[ce].data);for(let Xe=0;Xe<Ue.length;Xe++){let Ft=Ue[Xe].image[ce].image;O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,0,0,Ft.width,Ft.height,We,Je,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,ct,Ft.width,Ft.height,0,We,Je,Ft.data)}}else{O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,We,Je,De[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ct,We,Je,De[ce]);for(let Xe=0;Xe<Ue.length;Xe++){let ze=Ue[Xe];O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,0,0,We,Je,ze.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Xe+1,ct,We,Je,ze.image[ce])}}}p(y)&&M(n.TEXTURE_CUBE_MAP),Me.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Oe(T,y,k,W,$,Me){let Ee=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),se=_(k.internalFormat,Ee,Q,k.normalized,k.colorSpace),Te=i.get(y),Ve=i.get(k);if(Ve.__renderTarget=y,!Te.__hasExternalTextures){let De=Math.max(1,y.width>>Me),Re=Math.max(1,y.height>>Me);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,Me,se,De,Re,y.depth,0,Ee,Q,null):t.texImage2D($,Me,se,De,Re,0,Ee,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Qe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,$,Ve.__webglTexture,0,st(y)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,$,Ve.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(T,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let W=y.depthTexture,$=W&&W.isDepthTexture?W.type:null,Me=E(y.stencilBuffer,$),Ee=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(y),Me,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(y),Me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Me,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,T)}else{let W=y.textures;for(let $=0;$<W.length;$++){let Me=W[$],Ee=r.convert(Me.format,Me.colorSpace),Q=r.convert(Me.type),se=_(Me.internalFormat,Ee,Q,Me.normalized,Me.colorSpace);Qe(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st(y),se,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,st(y),se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(T,y,k){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ut(n.TEXTURE_CUBE_MAP,y.depthTexture);let Te=r.convert(y.depthTexture.format),Ve=r.convert(y.depthTexture.type),De;y.depthTexture.format===mi?De=n.DEPTH_COMPONENT24:y.depthTexture.format===ls&&(De=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,De,y.width,y.height,0,Te,Ve,null)}}else ie(y.depthTexture,0);let Me=$.__webglTexture,Ee=st(y),Q=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,se=y.depthTexture.format===ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===mi)Qe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,Q,Me,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,se,Q,Me,0);else if(y.depthTexture.format===ls)Qe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,Q,Me,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,se,Q,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(T){let y=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=W}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)St(y.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?St(y.__webglFramebuffer[0],T,0):St(y.__webglFramebuffer,T,0)}else if(k){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),nt(y.__webglDepthbuffer[W],T,!1);else{let $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Me)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),nt(y.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(T,y,k){let W=i.get(T);y!==void 0&&Oe(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&le(T)}function ye(T){let y=T.texture,k=i.get(T),W=i.get(y);T.addEventListener("dispose",x);let $=T.textures,Me=T.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,a.memory.textures++),Me){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let se=0;se<y.mipmaps.length;se++)k.__webglFramebuffer[Q][se]=n.createFramebuffer()}else k.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)k.__webglFramebuffer[Q]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let Q=0,se=$.length;Q<se;Q++){let Te=i.get($[Q]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Qe(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let se=$[Q];k.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let Te=r.convert(se.format,se.colorSpace),Ve=r.convert(se.type),De=_(se.internalFormat,Te,Ve,se.normalized,se.colorSpace,T.isXRRenderTarget===!0),Re=st(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,De,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),nt(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ut(n.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)Oe(k.__webglFramebuffer[Q][se],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se);else Oe(k.__webglFramebuffer[Q],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let Q=0,se=$.length;Q<se;Q++){let Te=$[Q],Ve=i.get(Te),De=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(De=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ve.__webglTexture),ut(De,Te),Oe(k.__webglFramebuffer,T,Te,n.COLOR_ATTACHMENT0+Q,De,0),p(Te)&&M(De)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),ut(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)Oe(k.__webglFramebuffer[se],T,y,n.COLOR_ATTACHMENT0,Q,se);else Oe(k.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,Q,0);p(y)&&M(Q),t.unbindTexture()}T.depthBuffer&&le(T)}function xe(T){let y=T.textures;for(let k=0,W=y.length;k<W;k++){let $=y[k];if(p($)){let Me=A(T),Ee=i.get($).__webglTexture;t.bindTexture(Me,Ee),M(Me),t.unbindTexture()}}}let be=[],je=[];function Ke(T){if(T.samples>0){if(Qe(T)===!1){let y=T.textures,k=T.width,W=T.height,$=n.COLOR_BUFFER_BIT,Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(T),Q=y.length>1;if(Q)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let se=T.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);let Ve=i.get(y[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,$,n.NEAREST),l===!0&&(be.length=0,je.length=0,be.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(be.push(Me),je.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);let Ve=i.get(y[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function st(T){return Math.min(s.maxSamples,T.samples)}function Qe(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(T){let y=a.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Ct(T,y){let k=T.colorSpace,W=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==ta&&k!==zi&&(Mt.getTransfer(k)===Nt?(W!==Yn||$!==Nn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",k)),y}function dt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=ae,this.setTextureCube=ue,this.rebindTextures=me,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function c_(n,e){function t(i,s=zi){let r,a=Mt.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===br)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Yn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===Sl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===Fa||i===Oa||i===Ba||i===ka)if(a===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Tl||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Il||i===Pl||i===Ll||i===Dl||i===za||i===Nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Il)return a===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===za)return r.COMPRESSED_RG11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Zl||i===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return a===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===Ql||i===Ha||i===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Cn({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends gi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,S=typeof XRWebGLBinding<"u",m=new Yh,p={},M=t.getContextAttributes(),A=null,_=null,E=[],w=[],R=new Se,x=null,b=null,I=new hn;I.viewport=new Wt;let L=new hn;L.viewport=new Wt;let B=[I,L],V=new pl,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=E[J];return oe===void 0&&(oe=new fr,E[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=E[J];return oe===void 0&&(oe=new fr,E[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=E[J];return oe===void 0&&(oe=new fr,E[J]=oe),oe.getHandSpace()};function Y(J){let oe=w.indexOf(J.inputSource);if(oe===-1)return;let Le=E[oe];Le!==void 0&&(Le.update(J.inputSource,J.frame,c||a),Le.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<E.length;J++){let oe=w[J];oe!==null&&(w[J]=null,E[J].disconnect(oe))}N=null,z=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(A),f=null,h=null,d=null,s=null,_=null,vt.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),b!==null){let J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,tt=null,Oe=null;M.depth&&(Oe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=M.stencil?ls:mi,tt=M.stencil?Er:ai);let nt={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(nt),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Dn(h.textureWidth,h.textureHeight,{format:Yn,type:Nn,depthTexture:new ji(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let oe=0;oe<J.removed.length;oe++){let Le=J.removed[oe],tt=w.indexOf(Le);tt>=0&&(w[tt]=null,E[tt].disconnect(Le))}for(let oe=0;oe<J.added.length;oe++){let Le=J.added[oe],tt=w.indexOf(Le);if(tt===-1){for(let nt=0;nt<E.length;nt++)if(nt>=w.length){w.push(Le),tt=nt;break}else if(w[nt]===null){w[nt]=Le,tt=nt;break}if(tt===-1)break}let Oe=E[tt];Oe&&Oe.connect(Le)}}let K=new C,ae=new C;function ue(J,oe,Le){K.setFromMatrixPosition(oe.matrixWorld),ae.setFromMatrixPosition(Le.matrixWorld);let tt=K.distanceTo(ae),Oe=oe.projectionMatrix.elements,nt=Le.projectionMatrix.elements,St=Oe[14]/(Oe[10]-1),le=Oe[14]/(Oe[10]+1),me=(Oe[9]+1)/Oe[5],ye=(Oe[9]-1)/Oe[5],xe=(Oe[8]-1)/Oe[0],be=(nt[8]+1)/nt[0],je=St*xe,Ke=St*be,st=tt/(-xe+be),Qe=st*-xe;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(st),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let D=St+st,Ct=le+st,dt=je-Qe,T=Ke+(tt-Qe),y=me*le/Ct*D,k=ye*le/Ct*D;J.projectionMatrix.makePerspective(dt,T,y,k,D,Ct),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ge(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let oe=J.near,Le=J.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),V.near=L.near=I.near=oe,V.far=L.far=I.far=Le,(N!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,z=V.far),V.layers.mask=J.layers.mask|6,I.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let tt=J.parent,Oe=V.cameras;Ge(V,tt);for(let nt=0;nt<Oe.length;nt++)Ge(Oe[nt],tt);Oe.length===2?ue(V,I,L):V.projectionMatrix.copy(I.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),ke(J,V,tt)};function ke(J,oe,Le){Le===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(Le.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ur*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(J){return p[J]};let _t=null;function ut(J,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){let Le=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let tt=!1;Le.length!==V.cameras.length&&(V.cameras.length=0,tt=!0);for(let le=0;le<Le.length;le++){let me=Le[le],ye=null;if(f!==null)ye=f.getViewport(me);else{let be=d.getViewSubImage(h,me);ye=be.viewport,le===0&&(e.setRenderTargetTextures(_,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(_))}let xe=B[le];xe===void 0&&(xe=new hn,xe.layers.enable(le),xe.viewport=new Wt,B[le]=xe),xe.matrix.fromArray(me.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(me.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ye.x,ye.y,ye.width,ye.height),le===0&&(V.matrix.copy(xe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),tt===!0&&V.cameras.push(xe)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let le=d.getDepthInformation(Le[0]);le&&le.isValid&&le.texture&&m.init(le,s.renderState)}if(Oe&&Oe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let le=0;le<Le.length;le++){let me=Le[le].camera;if(me){let ye=p[me];ye||(ye=new ga,p[me]=ye);let xe=d.getCameraImage(me);ye.sourceTexture=xe}}}}for(let Le=0;Le<E.length;Le++){let tt=w[Le],Oe=E[Le];tt!==null&&Oe!==void 0&&Oe.update(tt,oe,c||a)}_t&&_t(J,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let vt=new ff;vt.setAnimationLoop(ut),this.setAnimationLoop=function(J){_t=J},this.dispose=function(){}}},d_=new Dt,_f=new ot;_f.set(-1,0,0,0,1,0,0,0,1);function f_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ih(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),A=M.envMap,_=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_f),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function p_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let w=E.program;i.uniformBlockBinding(_,w)}function c(_,E){let w=s[_.id];w===void 0&&(m(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",M));let R=E.program;i.updateUBOMapping(_,R);let x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){let E=d();_.__bindingPointIndex=E;let w=n.createBuffer(),R=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let E=s[_.id],w=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,b=w.length;x<b;x++){let I=w[x];if(Array.isArray(I))for(let L=0,B=I.length;L<B;L++)f(I[L],x,L,R);else f(I,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,E,w,R){if(S(_,E,w,R)===!0){let x=_.__offset,b=_.value;if(Array.isArray(b)){let I=0;for(let L=0;L<b.length;L++){let B=b[L],V=p(B);g(B,_.__data,I),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,E,w){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,w)}function S(_,E,w,R){let x=_.value,b=E+"_"+w;if(R[b]===void 0)return typeof x=="number"||typeof x=="boolean"?R[b]=x:ArrayBuffer.isView(x)?R[b]=x.slice():R[b]=x.clone(),!0;{let I=R[b];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return R[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(_){let E=_.uniforms,w=0,R=16;for(let b=0,I=E.length;b<I;b++){let L=Array.isArray(E[b])?E[b]:[E[b]];for(let B=0,V=L.length;B<V;B++){let N=L[B],z=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,X=z.length;Y<X;Y++){let ie=z[Y],K=p(ie),ae=w%R,ue=ae%K.boundary,Ge=ae+ue;w+=ue,Ge!==0&&R-Ge<K.storage&&(w+=R-Ge),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=K.storage}}}let x=w%R;return x>0&&(w+=R-x),_.__size=w,_.__cache={},this}function p(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):it("WebGLRenderer: Unsupported uniform value type.",_),E}function M(_){let E=_.target;E.removeEventListener("dispose",M);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function g_(){return vi===null&&(vi=new fa(m_,16,16,cs,oi),vi.name="DFG_LUT",vi.minFilter=dn,vi.magFilter=dn,vi.wrapS=di,vi.wrapT=di,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var lc=class{constructor(e={}){let{canvas:t=Ld(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let S=f,m=new Set([bl,wl,Ml]),p=new Set([Nn,ai,br,Er,_l,vl]),M=new Uint32Array(4),A=new Int32Array(4),_=new C,E=null,w=null,R=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,B=null,V=null,N=null,z=null;this._outputColorSpace=_n;let Y=0,X=0,ie=null,K=-1,ae=null,ue=new Wt,Ge=new Wt,ke=null,_t=new et(0),ut=0,vt=t.width,J=t.height,oe=1,Le=null,tt=null,Oe=new Wt(0,0,vt,J),nt=new Wt(0,0,vt,J),St=!1,le=new pr,me=!1,ye=!1,xe=new Dt,be=new C,je=new Wt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Qe(){return ie===null?oe:1}let D=i;function Ct(v,F){return t.getContext(v,F)}let dt,T,y,k,W,$,Me,Ee,Q,se,Te,Ve,De,Re,We,Je,ct,O,Ce,ee,Ie,Ue,ce;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Ln,!1),D===null){let F="webgl2";if(D=Ct(F,v),D===null)throw Ct(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(v){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),at("WebGLRenderer: "+v.message),v}function Xe(){dt=new wy(D),dt.init(),Ie=new c_(D,dt),T=new fy(D,dt,e,Ie),y=new o_(D,dt),T.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),V=D.createFramebuffer(),N=D.createFramebuffer(),z=D.createFramebuffer(),k=new Ty(D),W=new Yx,$=new l_(D,dt,y,W,T,Ie,k),Me=new My(I),Ee=new Rm(D),Ue=new uy(D,Ee),Q=new by(D,Ee,k,Ue),se=new Ry(D,Q,Ee,Ue,k),O=new Ay(D,T,$),We=new py(W),Te=new qx(I,Me,dt,T,Ue,We),Ve=new f_(I,W),De=new Kx,Re=new t_(dt),ct=new hy(I,Me,y,se,g,l),Je=new a_(I,se,T),ce=new p_(D,k,T,y),Ce=new dy(D,dt,k),ee=new Ey(D,dt,k),k.programs=Te.programs,I.capabilities=T,I.extensions=dt,I.properties=W,I.renderLists=De,I.shadowMap=Je,I.state=y,I.info=k}S!==Nn&&(b=new Iy(S,t.width,t.height,o,s,r));let ze=new $h(I,D);this.xr=ze,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=dt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=dt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(v){v!==void 0&&(oe=v,this.setSize(vt,J,!1))},this.getSize=function(v){return v.set(vt,J)},this.setSize=function(v,F,q=!0){if(ze.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=v,J=F,t.width=Math.floor(v*oe),t.height=Math.floor(F*oe),q===!0&&(t.style.width=v+"px",t.style.height=F+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(vt*oe,J*oe).floor()},this.setDrawingBufferSize=function(v,F,q){vt=v,J=F,oe=q,t.width=Math.floor(v*q),t.height=Math.floor(F*q),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(S===Nn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ue)},this.getViewport=function(v){return v.copy(Oe)},this.setViewport=function(v,F,q,H){v.isVector4?Oe.set(v.x,v.y,v.z,v.w):Oe.set(v,F,q,H),y.viewport(ue.copy(Oe).multiplyScalar(oe).round())},this.getScissor=function(v){return v.copy(nt)},this.setScissor=function(v,F,q,H){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,F,q,H),y.scissor(Ge.copy(nt).multiplyScalar(oe).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(v){y.setScissorTest(St=v)},this.setOpaqueSort=function(v){Le=v},this.setTransparentSort=function(v){tt=v},this.getClearColor=function(v){return v.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,q=!0){let H=0;if(v){let G=!1;if(ie!==null){let Pe=ie.texture.format;G=m.has(Pe)}if(G){let Pe=ie.texture.type,Be=p.has(Pe),Ne=ct.getClearColor(),He=ct.getClearAlpha(),U=Ne.r,te=Ne.g,fe=Ne.b;Be?(M[0]=U,M[1]=te,M[2]=fe,M[3]=He,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=U,A[1]=te,A[2]=fe,A[3]=He,D.clearBufferiv(D.COLOR,0,A))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Ln,!1),ct.dispose(),De.dispose(),Re.dispose(),W.dispose(),Me.dispose(),se.dispose(),Ue.dispose(),ce.dispose(),Te.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",ps),ze.removeEventListener("sessionend",ms),Gn.stop()};function Ft(v){v.preventDefault(),sa("WebGLRenderer: Context Lost."),L=!0}function xt(){sa("WebGLRenderer: Context Restored."),L=!1;let v=k.autoReset,F=Je.enabled,q=Je.autoUpdate,H=Je.needsUpdate,G=Je.type;Xe(),k.autoReset=v,Je.enabled=F,Je.autoUpdate=q,Je.needsUpdate=H,Je.type=G}function Ln(v){at("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function On(v){let F=v.target;F.removeEventListener("dispose",On),Os(F)}function Os(v){vc(v),W.remove(v)}function vc(v){let F=W.get(v).programs;F!==void 0&&(F.forEach(function(q){Te.releaseProgram(q)}),v.isShaderMaterial&&Te.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,q,H,G,Pe){F===null&&(F=Ke);let Be=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ne=Sc(v,F,q,H,G);y.setMaterial(H,Be);let He=q.index,U=1;if(H.wireframe===!0){if(He=Q.getWireframeAttribute(q),He===void 0)return;U=2}let te=q.drawRange,fe=q.attributes.position,ne=te.start*U,re=(te.start+te.count)*U;Pe!==null&&(ne=Math.max(ne,Pe.start*U),re=Math.min(re,(Pe.start+Pe.count)*U)),He!==null?(ne=Math.max(ne,0),re=Math.min(re,He.count)):fe!=null&&(ne=Math.max(ne,0),re=Math.min(re,fe.count));let _e=re-ne;if(_e<0||_e===1/0)return;Ue.setup(G,H,Ne,q,He);let Ye,At=Ce;if(He!==null&&(Ye=Ee.get(He),At=ee,At.setIndex(Ye)),G.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*Qe()),At.setMode(D.LINES)):At.setMode(D.TRIANGLES);else if(G.isLine){let ht=H.linewidth;ht===void 0&&(ht=1),y.setLineWidth(ht*Qe()),G.isLineSegments?At.setMode(D.LINES):G.isLineLoop?At.setMode(D.LINE_LOOP):At.setMode(D.LINE_STRIP)}else G.isPoints?At.setMode(D.POINTS):G.isSprite&&At.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ht=G._multiDrawStarts,pe=G._multiDrawCounts,gt=G._multiDrawCount,rt=He?Ee.get(He).bytesPerElement:1,Zt=W.get(H).currentProgram.getUniforms();for(let gn=0;gn<gt;gn++)Zt.setValue(D,"_gl_DrawID",gn),At.render(ht[gn]/rt,pe[gn])}else if(G.isInstancedMesh)At.renderInstances(ne,_e,G.count);else if(q.isInstancedBufferGeometry){let ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pe=Math.min(q.instanceCount,ht);At.renderInstances(ne,_e,pe)}else At.render(ne,_e)};function Bs(v,F,q,H){B!==null&&v.isNodeMaterial&&B.setObject(H,v),me===!0&&We.setState(v,q,!1),v.transparent===!0&&v.side===ln&&v.forceSinglePass===!1?(v.side=fn,v.needsUpdate=!0,gs(v,F,H),v.side=rs,v.needsUpdate=!0,gs(v,F,H),v.side=ln):gs(v,F,H)}this.compile=function(v,F,q=null){q===null&&(q=v),B!==null&&B.renderStart(v,F,q),w=Re.get(q),w.init(F),x.push(w),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),v!==q&&v.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),ye=this.localClippingEnabled,me=We.init(this.clippingPlanes,ye),me===!0&&We.setGlobalState(this.clippingPlanes,F),B!==null&&Je.render(w.state.shadowsArray,q,F);let H=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Pe=G.material;if(Pe)if(Array.isArray(Pe))for(let Be=0;Be<Pe.length;Be++){let Ne=Pe[Be];Bs(Ne,q,F,G),H.add(Ne)}else Bs(Pe,q,F,G),H.add(Pe)}),w=x.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(v,F,q=null){let H=this.compile(v,F,q);return new Promise(G=>{function Pe(){if(H.forEach(function(Be){let He=W.get(Be).currentProgram;(He===void 0||He.isReady())&&H.delete(Be)}),H.size===0){G(v);return}setTimeout(Pe,10)}dt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Vi=null;function Fr(v){Vi&&Vi(v)}function ps(){Gn.stop()}function ms(){Gn.start()}let Gn=new ff;Gn.setAnimationLoop(Fr),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(v){Vi=v,ze.setAnimationLoop(v),v===null?Gn.stop():Gn.start()},ze.addEventListener("sessionstart",ps),ze.addEventListener("sessionend",ms),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(v,F);let q=ze.enabled===!0&&ze.isPresenting===!0,H=b!==null&&(ie===null||q)&&b.begin(I,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(F),F=ze.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,F,ie),w=Re.get(v,x.length),w.init(F),w.state.textureUnits=$.getTextureUnits(),x.push(w),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),le.setFromProjectionMatrix(xe,ni,F.reversedDepth),ye=this.localClippingEnabled,me=We.init(this.clippingPlanes,ye),E=De.get(v,R.length),E.init(),R.push(E),ze.enabled===!0&&ze.isPresenting===!0){let Be=I.xr.getDepthSensingMesh();Be!==null&&ks(Be,F,-1/0,I.sortObjects)}ks(v,F,0,I.sortObjects),E.finish(),B!==null&&B.updateLights(w.state.lightsArray),I.sortObjects===!0&&E.sort(Le,tt),st=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,st&&ct.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&We.beginShadows();let G=w.state.shadowsArray;if(Je.render(G,v,F),me===!0&&We.endShadows(),(H&&b.hasRenderPass())===!1){let Be=E.opaque,Ne=E.transmissive;if(w.setupLights(),F.isArrayCamera){let He=F.cameras;if(Ne.length>0)for(let U=0,te=He.length;U<te;U++){let fe=He[U];Or(Be,Ne,v,fe)}st&&ct.render(v);for(let U=0,te=He.length;U<te;U++){let fe=He[U];hi(E,v,fe,fe.viewport)}}else Ne.length>0&&Or(Be,Ne,v,F),st&&ct.render(v),hi(E,v,F)}ie!==null&&X===0&&($.updateMultisampleRenderTarget(ie),$.updateRenderTargetMipmap(ie)),H&&b.end(I),v.isScene===!0&&v.onAfterRender(I,v,F),Ue.resetDefaultState(),K=-1,ae=null,x.pop(),x.length>0?(w=x[x.length-1],$.setTextureUnits(w.state.textureUnits),me===!0&&We.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,B!==null&&B.renderEnd()};function ks(v,F,q,H){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)w.pushLightProbeGrid(v);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(le)){H&&je.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xe);let Be=se.update(v),Ne=v.material;Ne.visible&&E.push(v,Be,Ne,q,je.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(le))){let Be=se.update(v),Ne=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),je.copy(v.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),je.copy(Be.boundingSphere.center)),je.applyMatrix4(v.matrixWorld).applyMatrix4(xe)),Array.isArray(Ne)){let He=Be.groups;for(let U=0,te=He.length;U<te;U++){let fe=He[U],ne=Ne[fe.materialIndex];ne&&ne.visible&&E.push(v,Be,ne,q,je.z,fe,F)}}else Ne.visible&&E.push(v,Be,Ne,q,je.z,null,F)}}let Pe=v.children;for(let Be=0,Ne=Pe.length;Be<Ne;Be++)ks(Pe[Be],F,q,H)}function hi(v,F,q,H){let{opaque:G,transmissive:Pe,transparent:Be}=v;w.setupLightsView(q),me===!0&&We.setGlobalState(I.clippingPlanes,q),H&&y.viewport(ue.copy(H)),G.length>0&&Vn(G,F,q),Pe.length>0&&Vn(Pe,F,q),Be.length>0&&Vn(Be,F,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Or(v,F,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let ne=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:ne?oi:Nn,minFilter:os,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}let Pe=w.state.transmissionRenderTarget[H.id],Be=H.viewport||ue;Pe.setSize(Be.z*I.transmissionResolutionScale,Be.w*I.transmissionResolutionScale);let Ne=I.getRenderTarget(),He=I.getActiveCubeFace(),U=I.getActiveMipmapLevel();I.setRenderTarget(Pe),I.getClearColor(_t),ut=I.getClearAlpha(),ut<1&&I.setClearColor(16777215,.5),I.clear(),st&&ct.render(q);let te=I.toneMapping;I.toneMapping=ri;let fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),me===!0&&We.setGlobalState(I.clippingPlanes,H),Vn(v,q,H),$.updateMultisampleRenderTarget(Pe),$.updateRenderTargetMipmap(Pe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let re=0,_e=F.length;re<_e;re++){let Ye=F[re],{object:At,geometry:ht,material:pe,group:gt}=Ye;if(pe.side===ln&&At.layers.test(H.layers)){let rt=pe.side;pe.side=fn,pe.needsUpdate=!0,eo(At,q,H,ht,pe,gt),pe.side=rt,pe.needsUpdate=!0,ne=!0}}ne===!0&&($.updateMultisampleRenderTarget(Pe),$.updateRenderTargetMipmap(Pe))}I.setRenderTarget(Ne,He,U),I.setClearColor(_t,ut),fe!==void 0&&(H.viewport=fe),I.toneMapping=te}function Vn(v,F,q){let H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Pe=v.length;G<Pe;G++){let Be=v[G],{object:Ne,geometry:He,group:U}=Be,te=Be.material;te.allowOverride===!0&&H!==null&&(te=H),Ne.layers.test(q.layers)&&eo(Ne,F,q,He,te,U)}}function eo(v,F,q,H,G,Pe){B!==null&&G.isNodeMaterial&&B.setObject(v,G),v.onBeforeRender(I,F,q,H,G,Pe),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(I,F,q,H,v,Pe),G.transparent===!0&&G.side===ln&&G.forceSinglePass===!1?(G.side=fn,G.needsUpdate=!0,I.renderBufferDirect(q,F,H,G,v,Pe),G.side=rs,G.needsUpdate=!0,I.renderBufferDirect(q,F,H,G,v,Pe),G.side=ln):I.renderBufferDirect(q,F,H,G,v,Pe),v.onAfterRender(I,F,q,H,G,Pe)}function gs(v,F,q){F.isScene!==!0&&(F=Ke);let H=W.get(v),G=w.state.lights,Pe=w.state.shadowsArray,Be=G.state.version,Ne=Te.getParameters(v,G.state,Pe,F,q,w.state.lightProbeGridArray),He=Te.getProgramCacheKey(Ne),U=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=Me.get(v.envMap||H.environment,te),H.envMapRotation=H.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,U===void 0&&(v.addEventListener("dispose",On),U=new Map,H.programs=U);let fe=U.get(He);if(fe!==void 0){if(H.currentProgram===fe&&H.lightsStateVersion===Be)return zs(v,Ne),fe}else Ne.uniforms=Te.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,q,Ne),v.onBeforeCompile(Ne,I),fe=Te.acquireProgram(Ne,He),U.set(He,fe),H.uniforms=Ne.uniforms;let ne=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ne.clippingPlanes=We.uniform),zs(v,Ne),H.needsLights=kr(v),H.lightsStateVersion=Be,H.needsLights&&(ne.ambientLightColor.value=G.state.ambient,ne.lightProbe.value=G.state.probe,ne.sunLights.value=G.state.sun,ne.sunLightShadows.value=G.state.sunShadow,ne.directionalLights.value=G.state.directional,ne.directionalLightShadows.value=G.state.directionalShadow,ne.spotLights.value=G.state.spot,ne.spotLightShadows.value=G.state.spotShadow,ne.rectAreaLights.value=G.state.rectArea,ne.ltc_1.value=G.state.rectAreaLTC1,ne.ltc_2.value=G.state.rectAreaLTC2,ne.pointLights.value=G.state.point,ne.pointLightShadows.value=G.state.pointShadow,ne.hemisphereLights.value=G.state.hemi,ne.sunShadowMatrix.value=G.state.sunShadowMatrix,ne.sunShadowCascade.value=G.state.sunShadowCascade,ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ne.spotLightMatrix.value=G.state.spotLightMatrix,ne.spotLightMap.value=G.state.spotLightMap,ne.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=fe,H.uniformsList=null,fe}function Br(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=Rr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function zs(v,F){let q=W.get(v);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function to(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let q=0,H=v.length;q<H;q++){let G=v[q];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function Sc(v,F,q,H,G){F.isScene!==!0&&(F=Ke),$.resetTextureUnits();let Pe=F.fog,Be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Ne=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Mt.workingColorSpace,He=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,U=Me.get(H.envMap||Be,He),te=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,fe=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ne=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,_e=!!q.morphAttributes.color,Ye=ri;H.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ye=I.toneMapping);let At=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=At!==void 0?At.length:0,pe=W.get(H),gt=w.state.lights;if(me===!0&&(ye===!0||v!==ae)){let Ht=v===ae&&H.id===K;We.setState(H,v,Ht)}let rt=!1;H.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==gt.state.version||pe.outputColorSpace!==Ne||G.isBatchedMesh&&pe.batching===!1||!G.isBatchedMesh&&pe.batching===!0||G.isBatchedMesh&&pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&pe.instancing===!1||!G.isInstancedMesh&&pe.instancing===!0||G.isSkinnedMesh&&pe.skinning===!1||!G.isSkinnedMesh&&pe.skinning===!0||G.isInstancedMesh&&pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&pe.instancingMorph===!1&&G.morphTexture!==null||pe.envMap!==U||H.fog===!0&&pe.fog!==Pe||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==We.numPlanes||pe.numIntersection!==We.numIntersection)||pe.vertexAlphas!==te||pe.vertexTangents!==fe||pe.morphTargets!==ne||pe.morphNormals!==re||pe.morphColors!==_e||pe.toneMapping!==Ye||pe.morphTargetsCount!==ht||!!pe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,pe.__version=H.version);let Zt=pe.currentProgram;rt===!0&&(Zt=gs(H,F,G),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Zt,pe));let gn=!1,En=!1,Hs=!1,zt=Zt.getUniforms(),$t=pe.uniforms;if(y.useProgram(Zt.program)&&(gn=!0,En=!0,Hs=!0),H.id!==K&&(K=H.id,En=!0),pe.needsLights){let Ht=to(w.state.lightProbeGridArray,G);pe.lightProbeGrid!==Ht&&(pe.lightProbeGrid=Ht,En=!0)}if(gn||ae!==v){y.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),zt.setValue(D,"projectionMatrix",v.projectionMatrix),zt.setValue(D,"viewMatrix",v.matrixWorldInverse);let Xi=zt.map.cameraPosition;Xi!==void 0&&Xi.setValue(D,be.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&zt.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&zt.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),ae!==v&&(ae=v,En=!0,Hs=!0)}if(pe.needsLights&&(gt.state.sunShadowMap.length>0&&zt.setValue(D,"sunShadowMap",gt.state.sunShadowMap,$),gt.state.directionalShadowMap.length>0&&zt.setValue(D,"directionalShadowMap",gt.state.directionalShadowMap,$),gt.state.spotShadowMap.length>0&&zt.setValue(D,"spotShadowMap",gt.state.spotShadowMap,$),gt.state.pointShadowMap.length>0&&zt.setValue(D,"pointShadowMap",gt.state.pointShadowMap,$)),G.isSkinnedMesh){zt.setOptional(D,G,"bindMatrix"),zt.setOptional(D,G,"bindMatrixInverse");let Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),zt.setValue(D,"boneTexture",Ht.boneTexture,$))}G.isBatchedMesh&&(zt.setOptional(D,G,"batchingTexture"),zt.setValue(D,"batchingTexture",G._matricesTexture,$),zt.setOptional(D,G,"batchingIdTexture"),zt.setValue(D,"batchingIdTexture",G._indirectTexture,$),zt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&zt.setValue(D,"batchingColorTexture",G._colorsTexture,$));let Wi=q.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&O.update(G,q,Zt),(En||pe.receiveShadow!==G.receiveShadow)&&(pe.receiveShadow=G.receiveShadow,zt.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&($t.envMapIntensity.value=F.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=g_()),En){if(zt.setValue(D,"toneMappingExposure",I.toneMappingExposure),pe.needsLights&&Mc($t,Hs),Pe&&H.fog===!0&&Ve.refreshFogUniforms($t,Pe),Ve.refreshMaterialUniforms($t,H,oe,J,w.state.transmissionRenderTarget[v.id]),pe.needsLights&&pe.lightProbeGrid){let Ht=pe.lightProbeGrid;$t.probesSH.value=Ht.texture,$t.probesMin.value.copy(Ht.boundingBox.min),$t.probesMax.value.copy(Ht.boundingBox.max),$t.probesResolution.value.copy(Ht.resolution)}Rr.upload(D,Br(pe),$t,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rr.upload(D,Br(pe),$t,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&zt.setValue(D,"center",G.center),zt.setValue(D,"modelViewMatrix",G.modelViewMatrix),zt.setValue(D,"normalMatrix",G.normalMatrix),zt.setValue(D,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Ht=H.uniformsGroups;for(let Xi=0,Gs=Ht.length;Xi<Gs;Xi++){let xu=Ht[Xi];ce.update(xu,Zt),ce.bind(xu,Zt)}}return Zt}function Mc(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function kr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,F,q){let H=W.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(v.texture).__webglTexture=F,W.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let q=W.get(v);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,q=0){ie=v,Y=F,X=q;let H=null,G=!1,Pe=!1;if(v){let Ne=W.get(v);if(Ne.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,Ne.__webglFramebuffer),ue.copy(v.viewport),Ge.copy(v.scissor),ke=v.scissorTest,y.viewport(ue),y.scissor(Ge),y.setScissorTest(ke),K=-1;return}else if(Ne.__webglFramebuffer===void 0)$.setupRenderTarget(v);else if(Ne.__hasExternalTextures)$.rebindTextures(v,W.get(v.texture).__webglTexture,W.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let te=v.depthTexture;if(Ne.__boundDepthTexture!==te){if(te!==null&&W.has(te)&&(v.width!==te.image.width||v.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(v)}}let He=v.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);let U=W.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(U[F])?H=U[F][q]:H=U[F],G=!0):v.samples>0&&$.useMultisampledRTT(v)===!1?H=W.get(v).__webglMultisampledFramebuffer:Array.isArray(U)?H=U[q]:H=U,ue.copy(v.viewport),Ge.copy(v.scissor),ke=v.scissorTest}else ue.copy(Oe).multiplyScalar(oe).floor(),Ge.copy(nt).multiplyScalar(oe).floor(),ke=St;if(q!==0&&(H=V),y.bindFramebuffer(D.FRAMEBUFFER,H)&&y.drawBuffers(v,H),y.viewport(ue),y.scissor(Ge),y.setScissorTest(ke),G){let Ne=W.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,q)}else if(Pe){let Ne=F;for(let He=0;He<v.textures.length;He++){let U=W.get(v.textures[He]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+He,U.__webglTexture,q,Ne)}}else if(v!==null&&q!==0){let Ne=W.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,q)}K=-1};function no(v){let F=W.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=T.textureFormatReadable(v.format),F.__typeReadable=T.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,q,H,G,Pe,Be,Ne=0){if(!(v&&v.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){y.bindFramebuffer(D.FRAMEBUFFER,He);try{let U=v.textures[Ne],te=U.format,fe=U.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne);let ne=no(U);if(ne.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ne.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-H&&q>=0&&q<=v.height-G&&D.readPixels(F,q,H,G,Ie.convert(te),Ie.convert(fe),Pe)}finally{let U=ie!==null?W.get(ie).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,U)}}},this.readRenderTargetPixelsAsync=async function(v,F,q,H,G,Pe,Be,Ne=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He)if(F>=0&&F<=v.width-H&&q>=0&&q<=v.height-G){y.bindFramebuffer(D.FRAMEBUFFER,He);let U=v.textures[Ne],te=U.format,fe=U.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ne);let ne=no(U);if(ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,re),D.bufferData(D.PIXEL_PACK_BUFFER,Pe.byteLength,D.STREAM_READ),D.readPixels(F,q,H,G,Ie.convert(te),Ie.convert(fe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let _e=ie!==null?W.get(ie).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,_e);let Ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nd(D,Ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Pe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(re),D.deleteSync(Ye),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,q=0){let H=Math.pow(2,-q),G=Math.floor(v.image.width*H),Pe=Math.floor(v.image.height*H),Be=F!==null?F.x:0,Ne=F!==null?F.y:0;$.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Be,Ne,G,Pe),y.unbindTexture()},this.copyTextureToTexture=function(v,F,q=null,H=null,G=0,Pe=0){let Be,Ne,He,U,te,fe,ne,re,_e,Ye=v.isCompressedTexture?v.mipmaps[Pe]:v.image;if(q!==null)Be=q.max.x-q.min.x,Ne=q.max.y-q.min.y,He=q.isBox3?q.max.z-q.min.z:1,U=q.min.x,te=q.min.y,fe=q.isBox3?q.min.z:0;else{let $t=Math.pow(2,-G);Be=Math.floor(Ye.width*$t),Ne=Math.floor(Ye.height*$t),v.isDataArrayTexture?He=Ye.depth:v.isData3DTexture?He=Math.floor(Ye.depth*$t):He=1,U=0,te=0,fe=0}H!==null?(ne=H.x,re=H.y,_e=H.z):(ne=0,re=0,_e=0);let At=Ie.convert(F.format),ht=Ie.convert(F.type),pe;F.isData3DTexture?($.setTexture3D(F,0),pe=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),pe=D.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),pe=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let gt=y.getParameter(D.UNPACK_ROW_LENGTH),rt=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=y.getParameter(D.UNPACK_SKIP_PIXELS),gn=y.getParameter(D.UNPACK_SKIP_ROWS),En=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,Ye.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,U),y.pixelStorei(D.UNPACK_SKIP_ROWS,te),y.pixelStorei(D.UNPACK_SKIP_IMAGES,fe);let Hs=v.isDataArrayTexture||v.isData3DTexture,zt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let $t=W.get(v),Wi=W.get(F),Ht=W.get($t.__renderTarget),Xi=W.get(Wi.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,Ht.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Gs=0;Gs<He;Gs++)Hs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(v).__webglTexture,G,fe+Gs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Pe,_e+Gs)),D.blitFramebuffer(U,te,Be,Ne,ne,re,Be,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||W.has(v)){let $t=W.get(v),Wi=W.get(F);y.bindFramebuffer(D.READ_FRAMEBUFFER,N),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let Ht=0;Ht<He;Ht++)Hs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,G,fe+Ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,G),zt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wi.__webglTexture,Pe,_e+Ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wi.__webglTexture,Pe),G!==0?D.blitFramebuffer(U,te,Be,Ne,ne,re,Be,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):zt?D.copyTexSubImage3D(pe,Pe,ne,re,_e+Ht,U,te,Be,Ne):D.copyTexSubImage2D(pe,Pe,ne,re,U,te,Be,Ne);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else zt?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(pe,Pe,ne,re,_e,Be,Ne,He,At,ht,Ye.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(pe,Pe,ne,re,_e,Be,Ne,He,At,Ye.data):D.texSubImage3D(pe,Pe,ne,re,_e,Be,Ne,He,At,ht,Ye):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Pe,ne,re,Be,Ne,At,ht,Ye.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Pe,ne,re,Ye.width,Ye.height,At,Ye.data):D.texSubImage2D(D.TEXTURE_2D,Pe,ne,re,Be,Ne,At,ht,Ye);y.pixelStorei(D.UNPACK_ROW_LENGTH,gt),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),y.pixelStorei(D.UNPACK_SKIP_ROWS,gn),y.pixelStorei(D.UNPACK_SKIP_IMAGES,En),Pe===0&&F.generateMipmaps&&D.generateMipmap(pe),y.unbindTexture()},this.initRenderTarget=function(v){W.get(v).__webglFramebuffer===void 0&&$.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$.setTextureCube(v,0):v.isData3DTexture?$.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$.setTexture2DArray(v,0):$.setTexture2D(v,0),y.unbindTexture()},this.resetState=function(){Y=0,X=0,ie=null,y.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}};function y_(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Z={home:new C(0,0,0),warka:new C(-15,0,13),sena:new C(3,0,3),crash:new C(40,0,-45),kirubel:new C(36.5,0,-41),prayer:new C(55,0,-45),leaves:[new C(29,0,-36),new C(53,0,-38),new C(45,0,-60)],parts:[new C(-36,0,-20),new C(14,0,-72)],sapling:new C(-32,0,30),petals:new C(55,0,22),posts:[new C(7,0,-9),new C(-11,0,-6),new C(9,0,11)],pillar:new C(-50,0,-55),pillar2:new C(60,0,45),ridge:new C(10,0,80),deadTree:new C(-60,0,35),meadow:new C(-62,0,-5),ring:new C(80,0,-10),bonfire:new C(13,0,5),council:new C(-8,0,20),village:[new C(6,0,12),new C(-9,0,-13),new C(16,0,-5)]},Ps=95,Kh=9,Zh=2.2,eu=[{id:"pillar",x:-50,z:-55,r:2.2,h:9},{id:"pillar2",x:60,z:45,r:2.4,h:11},{id:"ridge",x:10,z:80,r:3.2,h:8},{id:"deadTree",x:-60,z:35,r:1.6,h:13},{id:"warka",x:-15,z:13,r:5.2,h:10.2},{id:"dome",x:40,z:-45,r:1.4,h:2.3},{id:"roof",x:-1.5,z:-4.5,r:1.3,h:4.1}],x_=n=>pt(n.x,n.z)+n.h;function pt(n,e){let t=Math.sin(n*.05)*1.1+Math.cos(e*.045)*1+Math.sin((n+e)*.11)*.35;t-=((r,a)=>{let o=Math.hypot(n-r.x,e-r.z);return o<a?1-o/a:0})(Z.crash,9)*1.2;let s=Math.hypot(n,e);return s>Ps-6&&(t+=(s-(Ps-6))*.6),t}function Ls(n,e,t){let i=pt(n,e);for(let s of eu)if(Math.hypot(n-s.x,e-s.z)<s.r){let r=x_(s);t>=r-.6&&r>i&&(i=r)}return i}function Jh(n="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,n),s.addColorStop(.25,n.replace(/[\d.]+\)$/,"0.6)")),s.addColorStop(1,e),i.fillStyle=s,i.fillRect(0,0,128,128);let r=new mr(t);return r.colorSpace=_n,r}function __(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createRadialGradient(128,128,40,128,128,128);t.addColorStop(0,"rgba(255,248,225,0.55)"),t.addColorStop(1,"rgba(255,248,225,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),e.fillStyle="#fff6dc",e.beginPath(),e.arc(128,128,46,0,Math.PI*2),e.fill(),e.fillStyle="rgba(200,190,170,0.35)",[[112,118,9],[140,140,12],[130,105,6],[116,146,5]].forEach(([s,r,a])=>{e.beginPath(),e.arc(s,r,a,0,7),e.fill()});let i=new mr(n);return i.colorSpace=_n,i}var Gt={},wt=(n,e={})=>new Sn({color:n,flatShading:!0,roughness:.85,...e}),dc=[{t:0,top:263706,bot:1775429,fog:1382202,sun:9412584,si:.7,hs:5924024,hg:1714724,hi:1.25},{t:.19,top:461348,bot:2366026,fog:1841730,sun:9412584,si:.7,hs:5924024,hg:1714724,hi:1.25},{t:.26,top:3820178,bot:15967614,fog:12882060,sun:16757370,si:1,hs:9080784,hg:2763290,hi:.8},{t:.5,top:6066136,bot:15391922,fog:13029812,sun:16773327,si:1.7,hs:13623551,hg:4872746,hi:1},{t:.72,top:3947136,bot:16751204,fog:11565682,sun:16751194,si:1,hs:10125504,hg:2759194,hi:.75},{t:.8,top:724268,bot:3809360,fog:2301e3,sun:9412584,si:.7,hs:5924024,hg:1714724,hi:1.25},{t:1,top:263706,bot:1775429,fog:1382202,sun:9412584,si:.7,hs:5924024,hg:1714724,hi:1.25}],fc=new et,Qh=new et;function Ir(n,e,t,i){return fc.setHex(n),Qh.setHex(e),i.copy(fc).lerp(Qh,t)}function vf(n){let e=y_(1977),t=new la;Gt.glow=Jh(),Gt.warm=Jh("rgba(255,210,130,1)","rgba(255,180,90,0)"),Gt.cyan=Jh("rgba(120,240,255,1)","rgba(80,200,255,0)"),t.fog=new oa(1382202,18,95);let i=new Cn({uniforms:{top:{value:new et},bot:{value:new et}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 bot; varying vec3 vP; void main(){ float h = clamp(vP.y*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bot, top, smoothstep(0.48,0.85,h)),1.0); 
#include <colorspace_fragment>
 }`,side:fn,depthWrite:!1,fog:!1}),s=new ge(new Kt(450,24,16),i);t.add(s);let r=new qt,a=[];for(let U=0;U<1400;U++){let te=e()*Math.PI*2,fe=Math.acos(e()*.95);a.push(Math.sin(fe)*Math.cos(te)*420,Math.cos(fe)*420,Math.sin(fe)*Math.sin(te)*420)}r.setAttribute("position",new Et(a,3));let o=new Ji({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),l=new Ms(r,o);t.add(l);let c=new on(new Qt({map:__(),fog:!1,depthWrite:!1,transparent:!0}));c.position.set(-160,170,-260),t.add(c);let u=new on(new Qt({map:Gt.warm,fog:!1,depthWrite:!1,transparent:!0,blending:cn}));u.scale.set(90,90,1),t.add(u);let d=new Ra(3817354,727572,.6);t.add(d);let h=new Pa(7307216,.3);t.add(h),t.add(h.target);let f=240,g=90,S=new es(f,f,g,g);S.rotateX(-Math.PI/2);let m=S.attributes.position,p=[],M=new et(3103274),A=new et(1849890),_=new et(4864548),E=new et;for(let U=0;U<m.count;U++){let te=m.getX(U),fe=m.getZ(U);m.setY(U,pt(te,fe)),E.copy(M).lerp(A,(Math.sin(te*.3)*Math.cos(fe*.27)+1)*.35+e()*.2);let ne=Math.hypot(te-Z.crash.x,fe-Z.crash.z);ne<9&&E.lerp(_,1-ne/9),p.push(E.r,E.g,E.b)}S.setAttribute("color",new Et(p,3)),S.computeVertexNormals();let w=new ge(S,new Sn({vertexColors:!0,flatShading:!0,roughness:1}));t.add(w);let R=[],x=[Z.home,Z.warka,Z.crash,Z.prayer,Z.sapling,Z.petals,Z.pillar,Z.sena,Z.pillar2,Z.ridge,Z.deadTree,Z.meadow,Z.ring,Z.bonfire,Z.council,...Z.village,...Z.leaves,...Z.parts,...Z.posts],b=[],I=0;for(;b.length<300&&I++<5e3;){let U=e()*Math.PI*2,te=8+Math.sqrt(e())*(Ps+10),fe=Math.cos(U)*te,ne=Math.sin(U)*te;x.some(re=>Math.hypot(re.x-fe,re.z-ne)<(re===Z.crash?13:re===Z.prayer?10:6))||b.some(re=>Math.hypot(re.x-fe,re.z-ne)<3.2)||b.push({x:fe,z:ne,s:.8+e()*.8,k:e()})}let L=new Bt(.22,.38,3,6);L.translate(0,1.5,0);let B=new vn(2,3.4,7);B.translate(0,3.8,0);let V=new vn(1.5,2.8,7);V.translate(0,5.4,0);let N=new Oi(L,wt(4863014),b.length),z=new Oi(B,wt(16777215),b.length),Y=new Oi(V,wt(16777215),b.length),X=new Dt,ie=new Xn,K=new C,ae=new C,ue=[3042106,4029754,2776648,4880944,3107418];b.forEach((U,te)=>{ie.setFromAxisAngle(new C(0,1,0),U.k*6.28),K.set(U.s,U.s*(.9+U.k*.4),U.s),ae.set(U.x,pt(U.x,U.z)-.2,U.z),X.compose(ae,ie,K),N.setMatrixAt(te,X),z.setMatrixAt(te,X),Y.setMatrixAt(te,X);let fe=new et(ue[te%ue.length]);z.setColorAt(te,fe),Y.setColorAt(te,fe.clone().offsetHSL(0,0,.05)),R.push({x:U.x,z:U.z,r:.45*U.s+.35,h:5*U.s})}),t.add(N,z,Y);let Ge=new Pt,ke=new ge(new Bt(1.1,2,7,8),wt(5914672));ke.position.y=3.5,Ge.add(ke);for(let U=0;U<9;U++){let te=U/9*Math.PI*2,fe=U===0?0:4+e()*2,ne=new ge(new si(3.4+e()*1.2,0),wt(U%2?4028986:3501634));ne.position.set(Math.cos(te)*fe,8+e()*1.5,Math.sin(te)*fe),ne.scale.y=.55,Ge.add(ne)}Ge.position.copy(Z.warka).setY(pt(Z.warka.x,Z.warka.z)-.3),t.add(Ge),R.push({x:Z.warka.x,z:Z.warka.z,r:2.2,h:7});let _t=new Pt,ut=new ge(new Bt(1.8,2.3,2.6,9),wt(6965812));ut.position.y=1.3;let vt=new ge(new vn(2.4,1.6,9),wt(5208634));vt.position.y=3.3;let J=new Bi;J.moveTo(-.45,0),J.lineTo(-.45,.75),J.absarc(0,.75,.45,Math.PI,0,!0),J.lineTo(.45,0),J.lineTo(-.45,0);let oe=new ge(new _r(J),new Ut({color:16752714}));oe.position.set(0,.02,2.1);let Le=new ge(new Qi(.22,12),new Ut({color:16758880}));Le.position.set(1.1,1.7,1.75),Le.rotation.y=.5;let tt=new ki(16758880,3,9,1.6);tt.position.set(0,1.2,3),_t.add(ut,vt,oe,Le,tt),_t.position.set(-1.5,pt(-1.5,-4.5),-4.5),_t.rotation.y=.4,t.add(_t),R.push({x:-1.5,z:-4.5,r:2.3,h:4});let Oe=new vn(.28,.22,7);Oe.translate(0,.32,0);let nt=new Bt(.05,.07,.3,5);nt.translate(0,.15,0);let St=new Oi(Oe,new Sn({color:16777215,emissive:16777215,emissiveIntensity:.9,flatShading:!0}),160),le=new Oi(nt,wt(15261904),160),me=[16743129,7006463,12159999,16761962];for(let U=0;U<160;U++){let te=b[Math.floor(e()*b.length)],fe=te.x+(e()-.5)*3,ne=te.z+(e()-.5)*3,re=.7+e()*1.3;X.compose(ae.set(fe,pt(fe,ne),ne),ie.identity(),K.set(re,re,re)),St.setMatrixAt(U,X),le.setMatrixAt(U,X);let _e=new et(me[U%4]);St.setColorAt(U,_e)}St.material.emissive.set(0),St.material.onBeforeCompile=U=>{U.fragmentShader=U.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance = vColor.rgb * 0.85;`)},t.add(St,le);let ye=140,xe=new qt,be=new Float32Array(ye*3),je=[];for(let U=0;U<ye;U++){let te=e()*6.28,fe=e()*70;je.push({x:Math.cos(te)*fe,z:Math.sin(te)*fe,y:.6+e()*3,p:e()*6.28,s:.3+e()*.6})}xe.setAttribute("position",new un(be,3));let Ke=new Ji({map:Gt.warm,size:.55,color:16773280,transparent:!0,depthWrite:!1,blending:cn}),st=new Ms(xe,Ke);t.add(st);let Qe=new Pt,D=new Sn({color:11187912,metalness:.55,roughness:.35,flatShading:!0}),Ct=new ge(new Kt(3,14,8),D);Ct.scale.set(1,.35,1);let dt=new ge(new Kt(1.3,12,8,0,Math.PI*2,0,Math.PI/2),new Sn({color:9099519,transparent:!0,opacity:.45,emissive:2788016,emissiveIntensity:.6}));dt.position.y=.6;let T=new ge(new ts(2.95,.09,6,40),new Ut({color:6222079}));T.rotation.x=Math.PI/2,Qe.add(Ct,dt,T);for(let U=0;U<6;U++){let te=new ge(new Rn(.6+e(),.08,.4+e()*.5),D),fe=e()*6.28,ne=4.5+e()*3,re=Z.crash.x+Math.cos(fe)*ne,_e=Z.crash.z+Math.sin(fe)*ne;te.position.set(re,pt(re,_e)+.05,_e),te.rotation.set((e()-.5)*.3,e()*3,(e()-.5)*.3),t.add(te)}Qe.position.copy(Z.crash).setY(pt(Z.crash.x,Z.crash.z)+.4),Qe.rotation.set(.32,.6,.18),t.add(Qe),R.push({x:Z.crash.x,z:Z.crash.z,r:3.1,h:2.5});let y=new ki(6222079,6,16,1.6);y.position.copy(Z.crash).setY(pt(Z.crash.x,Z.crash.z)+2.2),t.add(y);let k=[],W=new Qt({map:Gt.glow,color:9079450,transparent:!0,opacity:.25,depthWrite:!1});for(let U=0;U<14;U++){let te=new on(W.clone());te.userData.t=U/14,t.add(te),k.push(te)}let $=new Pt,Me=wt(6965802),Ee=new ge(new Rn(.12,1.4,.12),Me);Ee.position.y=.7;let Q=new ge(new Rn(.7,.1,.1),Me);Q.position.y=1.05,$.add(Ee,Q);for(let U=0;U<7;U++){let te=new ge(new gr(.18,0),wt(9079434));te.position.set(Math.cos(U/7*6.28)*.6,.05,Math.sin(U/7*6.28)*.6),$.add(te)}$.position.set(Z.prayer.x+2.2,pt(Z.prayer.x+2.2,Z.prayer.z),Z.prayer.z),$.rotation.y=Math.PI/2,t.add($);let se=new ge(new Bt(Zh*.9,Zh*1.25,Kh,7),wt(6972528));se.position.set(Z.pillar.x,pt(Z.pillar.x,Z.pillar.z)+Kh/2,Z.pillar.z),t.add(se),R.push({x:Z.pillar.x,z:Z.pillar.z,r:Zh+.3,h:Kh-.6,pillar:!0});{let U=new ge(new Bt(2.2,2.9,11,7),wt(7235704));U.position.set(Z.pillar2.x,pt(Z.pillar2.x,Z.pillar2.z)+5.5,Z.pillar2.z),U.rotation.y=.5,t.add(U),R.push({x:Z.pillar2.x,z:Z.pillar2.z,r:2.7,h:10.4});let te=new ge(new gr(4.2,0),wt(6249062));te.scale.set(1,1.05,1),te.position.set(Z.ridge.x,pt(Z.ridge.x,Z.ridge.z)+3.8,Z.ridge.z),t.add(te),R.push({x:Z.ridge.x,z:Z.ridge.z,r:3.6,h:7.4});let fe=new Pt,ne=wt(3812906),re=new ge(new Bt(.9,1.5,13,7),ne);re.position.y=6.5,fe.add(re);for(let pe=0;pe<5;pe++){let gt=new ge(new Bt(.12,.25,3.5,5),ne);gt.position.set(Math.cos(pe*1.3)*1.2,7+pe*1.1,Math.sin(pe*1.3)*1.2),gt.rotation.set(Math.sin(pe)*.9,pe,Math.cos(pe*1.3)*.9),fe.add(gt)}let _e=new ge(new Bt(1.6,1,.4,8),ne);_e.position.y=12.9,fe.add(_e),fe.position.set(Z.deadTree.x,pt(Z.deadTree.x,Z.deadTree.z),Z.deadTree.z),t.add(fe),R.push({x:Z.deadTree.x,z:Z.deadTree.z,r:1.6,h:12.4});let Ye=new ge(new Bt(.8,.9,4,9,1,!0),new Sn({color:5914672,flatShading:!0,side:ln}));Ye.rotation.z=Math.PI/2,Ye.position.set(Z.meadow.x,pt(Z.meadow.x,Z.meadow.z)+.75,Z.meadow.z),t.add(Ye);let At=new Ut({color:16765498});for(let pe=0;pe<70;pe++){let gt=e()*6.28,rt=2+e()*9,Zt=Z.meadow.x+Math.cos(gt)*rt,gn=Z.meadow.z+Math.sin(gt)*rt,En=new ge(new Qi(.16,6),At);En.rotation.x=-Math.PI/2,En.position.set(Zt,pt(Zt,gn)+.12,gn),t.add(En)}for(let pe=0;pe<12;pe++){let gt=pe/12*6.28,rt=Z.ring.x+Math.cos(gt)*3.2,Zt=Z.ring.z+Math.sin(gt)*3.2,gn=new ge(new vn(.45,.4,7),new Ut({color:pe%2?12159999:7006463}));gn.position.set(rt,pt(rt,Zt)+.5,Zt),t.add(gn);let En=new ge(new Bt(.1,.12,.5,5),wt(15261904));En.position.set(rt,pt(rt,Zt)+.25,Zt),t.add(En)}let ht=new ge(new Bt(1.4,1.7,.8,8),wt(8025216));ht.position.set(Z.council.x,pt(Z.council.x,Z.council.z)+.3,Z.council.z),t.add(ht),R.push({x:Z.council.x,z:Z.council.z,r:1.6,h:.6})}let Te=new Pt,Ve=new Pt;for(let U=0;U<9;U++){let te=new ge(new Bt(.1,.14,3.2,5),wt(5913122)),fe=U/9*6.28;te.position.set(Math.cos(fe)*.5,1.4,Math.sin(fe)*.5),te.rotation.set(Math.sin(fe)*.3,0,-Math.cos(fe)*.3),Ve.add(te)}let De=new ge(new si(.35,0),new Ut({color:16765498}));De.position.y=3,Ve.add(De),Ve.visible=!1,Te.add(Ve);let Re=[];for(let U=0;U<7;U++){let te=new on(new Qt({map:Gt.warm,color:U%2?16742954:16760906,transparent:!0,depthWrite:!1,blending:cn}));te.visible=!1,Te.add(te),Re.push(te)}let We=new ki(16747066,0,22,1.4);We.position.y=2,Te.add(We),Te.position.copy(Z.bonfire).setY(pt(Z.bonfire.x,Z.bonfire.z)),t.add(Te);let Je=0;function ct(U){Je=U,Ve.visible=U>=1,Re.forEach(te=>te.visible=U>=2),We.intensity=U>=2?8:0}let O=1600,Ce=new qt,ee=new Float32Array(O*3);for(let U=0;U<O;U++)ee[U*3]=(e()-.5)*60,ee[U*3+1]=e()*30,ee[U*3+2]=(e()-.5)*60;Ce.setAttribute("position",new un(ee,3));let Ie=new Ji({color:11191551,size:.09,transparent:!0,opacity:0,depthWrite:!1}),Ue=new Ms(Ce,Ie);Ue.frustumCulled=!1,t.add(Ue);let ce=0,Xe=0,ze=new Ut({color:10155263,transparent:!0,opacity:0,depthWrite:!1,blending:cn,side:ln,fog:!1}),Ft=new ge(new Bt(2.2,3.4,220,20,1,!0),ze);Ft.position.set(Z.crash.x,110,Z.crash.z),t.add(Ft);let xt=new Pt,Ln=new ge(new Bt(.12,.22,1.6,6),wt(5916214));Ln.position.y=.8;let On=wt(8022608),Os=new ge(new si(.9,0),On);Os.position.y=1.9,Os.scale.y=.6,xt.add(Ln,Os),xt.position.copy(Z.sapling).setY(pt(Z.sapling.x,Z.sapling.z)),xt.userData.leafMat=On,xt.userData.leaf=Os,t.add(xt);let vc=Z.posts.map(U=>{let te=new Pt,fe=new ge(new Bt(.07,.09,2.4,5),wt(5914672));fe.position.y=1.2;let ne=new ge(new Rn(.6,.06,.06),wt(5914672));ne.position.set(.25,2.3,0);let re=new ge(new Es(.22,0),new Ut({color:16761962}));re.position.set(.5,2.05,0),re.visible=!1;let _e=new on(new Qt({map:Gt.warm,transparent:!0,depthWrite:!1,blending:cn}));return _e.scale.set(1.6,1.6,1),_e.position.copy(re.position),_e.visible=!1,te.add(fe,ne,re,_e),te.position.copy(U).setY(pt(U.x,U.z)),te.userData.lit=()=>{re.visible=!0,_e.visible=!0},t.add(te),te}),Bs=v_();t.add(Bs.group);let Vi=S_();t.add(Vi.group);let Fr=M_();t.add(Fr.group);let ps=w_();t.add(ps.group);let ms=jh({dress:6978154,hair:15658734,skin:8018496,glow:14217416,scale:.44,staff:!0,beard:!0});t.add(ms.group),ms.group.visible=!1;let Gn=jh({dress:9063120,hair:1708080,skin:9067066,glow:13146879,scale:.38});t.add(Gn.group),Gn.group.visible=!1;let ks=[[6992127,2759184],[16765034,3809296],[16053503,1708048]].map(([U,te],fe)=>{let ne=jh({dress:U,hair:te,skin:8014384,glow:U,scale:.34});t.add(ne.group),ne.group.visible=!1;let re=Z.village[fe];return ne.group.position.set(re.x,pt(re.x,re.z)+1.3,re.z),ne}),hi={open:0,cur:0,sprites:[]};[-.55,.55].forEach(U=>{let te=new on(new Qt({map:Gt.warm,color:16773296,transparent:!0,opacity:0,depthWrite:!1,blending:cn}));te.scale.set(.55,.35,1);let fe=new C(-Z.warka.x,0,-Z.warka.z).normalize();te.position.set(Z.warka.x+fe.x*1.85+fe.z*U,pt(Z.warka.x,Z.warka.z)+4.2,Z.warka.z+fe.z*1.85-fe.x*U),t.add(te),hi.sprites.push(te)});let Or=0;Vi.group.position.copy(Z.kirubel).setY(pt(Z.kirubel.x,Z.kirubel.z)),ps.group.position.copy(Z.sena).setY(pt(Z.sena.x,Z.sena.z)+1.4);let Vn=.02,eo=0,gs=1,Br={daylight:0};function zs(U){Vn=(U%1+1)%1;let te=0;for(;te<dc.length-2&&dc[te+1].t<=Vn;)te++;let fe=dc[te],ne=dc[te+1],re=(Vn-fe.t)/(ne.t-fe.t);Ir(fe.top,ne.top,re,i.uniforms.top.value),Ir(fe.bot,ne.bot,re,i.uniforms.bot.value),Ir(fe.fog,ne.fog,re,t.fog.color),Ir(fe.sun,ne.sun,re,h.color),h.intensity=fe.si+(ne.si-fe.si)*re,Ir(fe.hs,ne.hs,re,d.color),Ir(fe.hg,ne.hg,re,d.groundColor),d.intensity=fe.hi+(ne.hi-fe.hi)*re,gs=d.intensity;let _e=(Vn-.25)*Math.PI*2;u.position.set(Math.cos(_e)*300,Math.sin(_e)*300,-60),h.position.set(Math.cos(_e)*60,Math.max(25,Math.abs(Math.sin(_e))*60),20);let Ye=Rs.clamp(Math.sin(_e)*2.2+.3,0,1);Br.daylight=Ye,o.opacity=1-Ye,c.material.opacity=Math.max(.15,1-Ye*.9),u.material.opacity=Ye,Ke.opacity=1-Ye*.85,St.material.emissiveIntensity=1,t.fog.near=14+Ye*10,t.fog.far=80+Ye*40,ce>0&&(t.fog.color.lerp(fc.setHex(3817294),ce*.7),i.uniforms.top.value.lerp(fc.setHex(1974832),ce*.8),i.uniforms.bot.value.lerp(Qh.setHex(4870238),ce*.8),t.fog.far*=1-ce*.45,h.intensity*=1-ce*.6,u.material.opacity*=1-ce)}function to(U){eo=U;let te=34+U*6;c.scale.set(te,te,1)}function Sc(U){(U>0||ce>0)&&(d.intensity=gs*(1-ce*.45)+U*4)}zs(Vn),to(0);function Mc(U,te){let fe=new Pt,ne,re=Gt.cyan,_e=1.4;if(U==="leaf"){ne=new Pt;for(let ht=0;ht<3;ht++){let pe=new ge(new vn(.12,.5,4),new Ut({color:8055039}));pe.rotation.z=(ht-1)*.5,pe.position.y=.25,ne.add(pe)}}else if(U==="part")ne=new ge(new Ta(.4,0),new Sn({color:12109530,metalness:.7,roughness:.3,emissive:2788016,emissiveIntensity:.5,flatShading:!0}));else if(U==="petal")ne=new ge(new Es(.22,0),new Ut({color:16183807})),re=Gt.glow,_e=1.1;else if(U==="star"){let ht=new Bi;for(let pe=0;pe<10;pe++){let gt=pe%2?.18:.45,rt=pe/10*Math.PI*2+Math.PI/2;pe?ht.lineTo(Math.cos(rt)*gt,Math.sin(rt)*gt):ht.moveTo(Math.cos(rt)*gt,Math.sin(rt)*gt)}ne=new ge(new Ea(ht,{depth:.12,bevelEnabled:!1}),new Ut({color:16769162})),re=Gt.warm,_e=2.6}else if(U==="wood"){ne=new Pt;for(let ht=0;ht<3;ht++){let pe=new ge(new Bt(.06,.07,.8,5),wt(8016434));pe.rotation.z=Math.PI/2,pe.rotation.y=ht*.6,pe.position.y=ht*.1,ne.add(pe)}re=Gt.warm,_e=1.1}else if(U==="daisy"){ne=new Pt;let ht=new ge(new Kt(.08,6,5),new Ut({color:16751146}));ne.add(ht);for(let pe=0;pe<8;pe++){let gt=new ge(new Kt(.07,5,4),new Ut({color:16769354})),rt=pe/8*6.28;gt.position.set(Math.cos(rt)*.15,Math.sin(rt)*.15,0),gt.scale.set(1.4,.7,.5),gt.rotation.z=rt,ne.add(gt)}re=Gt.warm,_e=1}else if(U==="banner")ne=new ge(new es(.5,.7),new Ut({color:16747206,side:ln})),re=Gt.glow,_e=1.1;else if(U==="cake")ne=new ge(new Bt(.22,.24,.16,10),new Ut({color:16761962})),re=Gt.warm,_e=1;else if(U==="core")ne=new ge(new si(.3,1),new Ut({color:8319743})),re=Gt.cyan,_e=2.2;else if(U==="stack")ne=new ge(new Rn(.7,.4,.5),new Sn({color:12109530,metalness:.6,roughness:.4,flatShading:!0})),re=Gt.cyan,_e=1.4;else if(U==="lanterns"){ne=new Pt;for(let ht=0;ht<3;ht++){let pe=new ge(new Es(.16,0),new Ut({color:16761962}));pe.position.x=(ht-1)*.3,ne.add(pe)}re=Gt.warm}let Ye=new on(new Qt({map:re,transparent:!0,depthWrite:!1,blending:cn}));Ye.scale.set(_e,_e,1),fe.add(ne,Ye);let At=(U==="star"?Ls(te.x,te.z,99):pt(te.x,te.z))+.8;return fe.position.set(te.x,At,te.z),fe.userData={core:ne,baseY:At,kind:U},t.add(fe),kr.add(fe),fe}let kr=new Set;function no(U){t.remove(U),kr.delete(U)}let v=[];function F(U,te,fe){let ne=new on(new Qt({map:Gt.cyan,transparent:!0,depthWrite:!1,blending:cn,fog:!1}));ne.scale.set(6,6,1),t.add(ne);let re=[];for(let _e=0;_e<18;_e++){let Ye=new on(new Qt({map:Gt.glow,transparent:!0,depthWrite:!1,blending:cn,fog:!1,opacity:.6*(1-_e/18)}));Ye.scale.setScalar(4*(1-_e/18)),t.add(Ye),re.push(Ye)}return new Promise(_e=>v.push({head:ne,trail:re,from:U.clone(),to:te.clone(),t:0,dur:fe,res:_e,hist:[]}))}let q=new C,H=0,G=1,Pe=0,Be=0,Ne=new ii(.32,.6,.18);function He(U,te){if(H+=U,ce>.01&&te){for(let re=0;re<O;re++)ee[re*3+1]-=U*26,ee[re*3+1]<0&&(ee[re*3+1]+=30);Ce.attributes.position.needsUpdate=!0,Ue.position.set(te.position.x,te.position.y-12,te.position.z)}Ie.opacity=ce*.7,Xe>0&&(Xe=Math.max(0,Xe-U*3)),Sc(Xe),Je>=2&&Re.forEach((re,_e)=>{let Ye=H*(3+_e*.4)+_e;re.position.set(Math.sin(Ye)*.3,1+Ye%1.5*1.4,Math.cos(Ye*1.3)*.3),re.scale.setScalar(1.2+Math.sin(Ye*2)*.4+(1.5-Ye%1.5)*.6)}),Je>=2&&(We.intensity=7+Math.sin(H*13)*1.5),Qe.rotation.set(Ne.x*(1-Pe),Ne.y,Ne.z*(1-Pe)),Qe.position.y=pt(Z.crash.x,Z.crash.z)+.4+Pe*.5+Be;for(let re=0;re<ye;re++){let _e=je[re],Ye=H*_e.s+_e.p;be[re*3]=_e.x+Math.sin(Ye)*2,be[re*3+2]=_e.z+Math.cos(Ye*.8)*2,be[re*3+1]=pt(_e.x,_e.z)+_e.y+Math.sin(Ye*1.7)*.5}xe.attributes.position.needsUpdate=!0;let fe=Qe.position;k.forEach(re=>{re.userData.t=(re.userData.t+U*.08)%1;let _e=re.userData.t;re.position.set(fe.x+Math.sin(_e*9+re.id)*.6+_e*2,fe.y+.8+_e*9,fe.z+_e*1.5),re.scale.setScalar(1.2+_e*4),re.material.opacity=.28*(1-_e)*G}),T.material.color.setHSL(.52,1,.5+Math.sin(H*3)*.12),y.intensity=5+Math.sin(H*3)*1.2,kr.forEach(re=>{re.userData.core.rotation.y+=U*1.5,re.position.y=re.userData.baseY+Math.sin(H*2+re.position.x)*.15});for(let re=v.length-1;re>=0;re--){let _e=v[re];_e.t+=U/_e.dur;let Ye=Math.min(1,_e.t),At=Ye*Ye;q.lerpVectors(_e.from,_e.to,At),_e.head.position.copy(q),_e.hist.unshift(q.clone()),_e.hist.length>40&&_e.hist.pop(),_e.trail.forEach((ht,pe)=>{let gt=_e.hist[Math.min(_e.hist.length-1,pe*2)];gt&&ht.position.copy(gt)}),Ye>=1&&(t.remove(_e.head),_e.trail.forEach(ht=>t.remove(ht)),v.splice(re,1),_e.res())}Bs.update(U,H),Vi.update(U,H),Fr.update(U,H),ps.update(U,H),ms.update(U,H),Gn.update(U,H),ks.forEach(re=>re.update(U,H));let ne=hi.open-hi.cur;hi.cur+=Math.sign(ne)*Math.min(Math.abs(ne),U*2),hi.sprites.forEach(re=>{re.material.opacity=hi.cur*(.8+Math.sin(H*2)*.2)}),ze.opacity+=(Or-ze.opacity)*Math.min(1,U*1.5)}return{elder:ms,mira:Gn,villagers:ks,setBonfire:ct,warkaEyes(U){hi.open=U?1:0},setStorm(U){ce=U,zs(Vn)},lightning(){Xe=1},setRepair(U){Pe=Math.max(0,Math.min(1,U)),G=Math.max(.08,.6*(1-Pe))},setLift(U){Be=U},skyPath(U){Or=U},scene:t,setTime:zs,setMoonDay:to,get time(){return Vn},sky:Br,colliders:R,kristi:Bs,kirubel:Vi,lumi:Fr,sena:ps,wreck:Qe,sapling:xt,posts:vc,makeItem:Mc,removeItem:no,fallingStar:F,update:He,setSmoke:U=>{G=U}}}function hs(n,e,t){let i=new Pt,s=new ge(new Bt(e,e*.85,n,6),t);return s.position.y=-n/2,i.add(s),i}function v_(){let n=new Pt,e=new Pt;n.add(e);let t=wt(9067068,{roughness:.7}),i=wt(4160058,{emissive:1718800,emissiveIntensity:.4}),s=wt(14267482,{emissive:6965776,emissiveIntensity:.5}),r=wt(1839628),a=new ge(new vn(.44,.95,9,1,!0),i);a.position.y=.62,a.material.side=ln;let o=new ge(new Bt(.17,.22,.48,8),i);o.position.y=1.18;let l=new ge(new ts(.21,.035,5,12),s);l.rotation.x=Math.PI/2,l.position.y=.97;let c=new ge(new Bt(.06,.07,.1,6),t);c.position.y=1.46;let u=new ge(new Kt(.17,12,10),t);u.position.y=1.62;let d=new ge(new Kt(.19,10,8),r);d.position.set(0,1.66,-.04),d.scale.set(1.05,1,1.05);let h=new ge(new Kt(.12,8,6),r);h.position.set(0,1.78,-.15),e.add(a,o,l,c,u,d,h),[[.14,1.74,.02,16747206],[-.12,1.77,-.02,16765802],[.05,1.86,-.12,16777215],[-.16,1.68,-.1,10150010]].forEach(([R,x,b,I])=>{let L=new ge(new si(.045,0),new Ut({color:I}));L.position.set(R,x,b),e.add(L)}),[-.06,.06].forEach(R=>{let x=new ge(new Kt(.022,6,6),new Ut({color:1707528}));x.position.set(R,1.64,.15),e.add(x)});let f=hs(.62,.05,t),g=hs(.62,.05,t);f.position.set(-.09,.62,0),g.position.set(.09,.62,0),e.add(f,g);let S=hs(.5,.045,t),m=hs(.5,.045,t);S.position.set(-.22,1.38,0),m.position.set(.22,1.38,0),e.add(S,m);let p=new Bi;p.moveTo(0,0),p.quadraticCurveTo(.35,.35,.95,.55),p.quadraticCurveTo(.45,.05,0,0);let M=new Sn({color:12116090,emissive:8036394,emissiveIntensity:.7,transparent:!0,opacity:.7,side:ln,depthWrite:!1}),A=[];[[1,0,1],[-1,0,1],[1,-.25,.75],[-1,-.25,.75]].forEach(([R,x,b])=>{let I=new Pt;I.position.set(0,1.28+x,-.16);let L=new ge(new _r(p),M);L.scale.set(R*b,b*(x?-.8:1),1),I.add(L),e.add(I),A.push({piv:I,side:R})});let _=new ki(16764794,1.4,7,1.8);_.position.y=1.3,n.add(_);let E=new on(new Qt({map:Gt.warm,transparent:!0,opacity:.35,depthWrite:!1,blending:cn}));E.scale.set(2.6,2.6,1),E.position.y=1.2,n.add(E);let w={moving:0,air:!1,flap:0};return{group:n,st:w,update(R,x){let b=w.moving;w.flap+=R*(w.air?18:3+b*2),A.forEach(({piv:L,side:B})=>{L.rotation.y=B*(.5+Math.sin(w.flap)*(w.air?.55:.18))});let I=Math.sin(x*9)*.6*b*(w.air?.2:1);f.rotation.x=I,g.rotation.x=-I,S.rotation.x=-I*.8,m.rotation.x=I*.8,S.rotation.z=w.air?-.5:-.12,m.rotation.z=w.air?.5:.12,e.position.y=w.air?Math.sin(x*3)*.06:Math.abs(Math.sin(x*9))*.04*b,e.rotation.x=w.air?.25*b:0}}}function S_(){let n=new Pt,e=new Pt;n.add(e);let t=new Sn({color:10466516,emissive:1718874,emissiveIntensity:.5,flatShading:!0,roughness:.6}),i=wt(2831696),s=new Ut({color:6222079}),r=new ge(new Bt(.24,.3,.75,8),i);r.position.y=1.2;let a=new ge(new Bt(.27,.25,.25,8),i);a.position.y=.8;let o=new ge(new ts(.27,.025,4,14),s);o.rotation.x=Math.PI/2,o.position.y=.9;let l=new ge(new ts(.14,.025,4,12),s);l.rotation.x=Math.PI/2,l.position.y=1.58;let c=new ge(new Kt(.19,12,10),t);c.position.y=1.78,c.scale.set(.95,1.08,1);let u=new ge(new Kt(.195,10,8,0,Math.PI*2,0,Math.PI/2.2),wt(1053728));u.position.y=1.8,e.add(r,a,o,l,c,u),[-1,1].forEach(R=>{let x=new ge(new vn(.04,.16,4),t);x.position.set(.19*R,1.82,0),x.rotation.z=-R*1.1,e.add(x)}),[-.065,.065].forEach(R=>{let x=new ge(new Kt(.025,6,6),s);x.position.set(R,1.8,.17),e.add(x)}),[-1,1].forEach(R=>{let x=new ge(new Rn(.012,.09,.012),s);x.position.set(.12*R,1.72,.14),x.rotation.z=.3*R,e.add(x)});let d=hs(.72,.065,i),h=hs(.72,.065,i);d.position.set(-.12,.76,0),h.position.set(.12,.76,0),e.add(d,h);let f=hs(.62,.055,t),g=hs(.62,.055,t);f.position.set(-.3,1.52,0),g.position.set(.3,1.52,0),e.add(f,g);let S=new Pt,m=new Sn({color:15255146,metalness:.8,roughness:.3,emissive:6965776,emissiveIntensity:.4}),p=new ge(new Rn(.03,.2,.03),m),M=new ge(new Rn(.13,.03,.03),m);M.position.y=.04,S.add(p,M),S.position.y=-.66,S.visible=!1,g.add(S);let A=new on(new Qt({map:Gt.warm,transparent:!0,depthWrite:!1,blending:cn}));A.scale.set(.12,.12,1),A.position.set(.05,1.93,.16),A.visible=!1,e.add(A);let _=new ki(6222079,.9,5,2);_.position.y=1.4,n.add(_);let E={pose:"lying",t:0,moving:0},w=(R,x,b)=>R+(x-R)*b;return{group:n,st:E,cross:S,goldStar:A,setPose(R){E.pose=R,E.t=0,S.visible=R==="pray"||R==="prayKneel"},update(R,x){E.t+=R;let b=Math.min(1,R*4),I=0,L=0,B=0,V=0,N=0,z=0,Y=-.08,X=.08;switch(E.pose){case"lying":I=-1.45,L=.25,Y=-.6,X=.4,B=.1;break;case"sit":L=-.62,B=-1.5,V=-1.5,N=-.4,z=-.4,I=-.1;break;case"walk":{let ie=Math.sin(x*8)*.6*E.moving;B=ie,V=-ie,N=-ie,z=ie;break}case"work":z=-1.3+Math.sin(x*7)*.5,N=-.6,I=.25;break;case"pace":{let ie=Math.sin(x*6)*.5;B=ie,V=-ie,N=-.2,z=-.2;break}case"pray":{let ie=E.t%8;ie<2.4?(z=-1.9+Math.sin(ie*5.2)*.25,X=.3-Math.cos(ie*2.6)*.35):ie<5.5?(I=Math.sin((ie-2.4)/3.1*Math.PI)*1,z=-.6,N=-.6):(z=-1.2,N=-.2);break}case"sleep":I=-1.45,L=.25,Y=-.3,X=.3;break}e.rotation.x=w(e.rotation.x,I,b),e.position.y=w(e.position.y,L,b),d.rotation.x=w(d.rotation.x,B,b),h.rotation.x=w(h.rotation.x,V,b),f.rotation.x=w(f.rotation.x,N,b),g.rotation.x=w(g.rotation.x,z,b),f.rotation.z=w(f.rotation.z,Y,b),g.rotation.z=w(g.rotation.z,X,b),(E.pose==="sleep"||E.pose==="lying")&&(e.position.y+=Math.sin(x*1.2)*.004)}}}function M_(){let n=new Pt,e=new Sn({color:12580607,emissive:5953791,emissiveIntensity:1.1,flatShading:!0}),t=new ge(new si(.2,1),e);[-1,1].forEach(r=>{let a=new ge(new vn(.07,.2,4),e);a.position.set(.1*r,.2,0),a.rotation.z=-.4*r,t.add(a)}),[-1,1].forEach(r=>{let a=new ge(new Kt(.03,5,5),new Ut({color:666170}));a.position.set(.07*r,.04,.17),t.add(a)});let i=new on(new Qt({map:Gt.cyan,transparent:!0,depthWrite:!1,blending:cn}));i.scale.set(1.2,1.2,1),n.add(t,i);let s={target:new C,hop:0};return{group:n,st:s,update(r,a){n.position.lerp(s.target,Math.min(1,r*2)),t.position.y=.25+Math.abs(Math.sin(a*3))*.25,t.rotation.y=Math.sin(a)*.6,i.position.y=t.position.y}}}function jh(n){let e=new Pt,t=wt(n.dress,{emissive:n.dress,emissiveIntensity:.25}),i=new ge(new vn(.4,1,8),t);i.position.y=.5;let s=new ge(new Kt(.2,10,8),wt(n.skin));s.position.y=1.15;let r=new ge(new Kt(.22,8,6),wt(n.hair));if(r.position.set(0,1.2,-.05),e.add(i,s,r),n.beard){let u=new ge(new vn(.14,.4,6),wt(15790320));u.position.set(0,.92,.12),u.rotation.x=Math.PI,e.add(u)}if(n.staff){let u=new ge(new Bt(.03,.04,1.6,5),wt(6965802));u.position.set(.42,.8,.1),e.add(u);let d=new ge(new si(.1,0),new Ut({color:14221232}));d.position.set(.42,1.65,.1),e.add(d)}let a=new Ut({color:n.glow,transparent:!0,opacity:.55,side:ln,depthWrite:!1}),o=[-1,1].map(u=>{let d=new ge(new Qi(.45,8),a);return d.position.set(.3*u,.85,-.15),d.scale.x=.6,e.add(d),{w:d,sd:u}}),l=new on(new Qt({map:Gt.glow,color:n.glow,transparent:!0,opacity:.55,depthWrite:!1,blending:cn}));l.scale.set(2.2,2.2,1),l.position.y=.8,e.add(l),e.scale.setScalar(n.scale||.38);let c=null;return{group:e,update(u,d){e.visible&&(c===null&&(c=e.position.y),o.forEach(({w:h,sd:f})=>{h.rotation.y=f*(.6+Math.sin(d*20)*.5)}),e.position.y=c+Math.sin(d*2.2+e.position.x)*.15)},rebase(){c=null},at(u,d,h,f){e.position.set(u,pt(u,d)+1.3,d),c=null,e.visible=!0,h!==void 0&&(e.rotation.y=Math.atan2(h-u,f-d))}}}function w_(){let n=new Pt,e=.38,t=wt(16747206,{emissive:6953546,emissiveIntensity:.5}),i=new ge(new vn(.4,1,8),t);i.position.y=.5;let s=new ge(new Kt(.2,10,8),wt(6963248));s.position.y=1.15;let r=new ge(new Kt(.22,8,6),wt(2759184));r.position.set(0,1.2,-.05),n.add(i,s,r);let a=new Ut({color:16766704,transparent:!0,opacity:.6,side:ln,depthWrite:!1}),o=[-1,1].map(u=>{let d=new ge(new Qi(.45,8),a);return d.position.set(.3*u,.85,-.15),d.scale.x=.6,n.add(d),{w:d,sd:u}}),l=new on(new Qt({map:Gt.glow,color:16751318,transparent:!0,opacity:.6,depthWrite:!1,blending:cn}));l.scale.set(2.2,2.2,1),l.position.y=.8,n.add(l),n.scale.setScalar(e);let c=null;return{group:n,update(u,d){c===null&&(c=n.position.y),o.forEach(({w:h,sd:f})=>{h.rotation.y=f*(.6+Math.sin(d*22)*.5)}),n.position.y=c+Math.sin(d*2.4)*.15},rebase(){c=null},at(u,d,h,f){n.position.set(u,pt(u,d)+1.4,d),c=null,n.visible=!0,h!==void 0&&(n.rotation.y=Math.atan2(h-u,f-d))}}}var su={};np(su,{chime:()=>P_,crash:()=>D_,initAudio:()=>mc,isMuted:()=>b_,setAmbientDaylight:()=>iu,sparkle:()=>L_,startPrayerMusic:()=>T_,stopPrayerMusic:()=>A_,tick:()=>Lr,toggleMute:()=>nu,whoosh:()=>N_});var $e=null,us,pc,Mi,ds,Xa,qa,Pr=!1,Ya=null,tu=new Map;function mc(){if($e){$e.state==="suspended"&&$e.resume();return}try{$e=new(window.AudioContext||window.webkitAudioContext)}catch{return}us=$e.createGain(),us.gain.value=Pr?0:.9,us.connect($e.destination),pc=$e.createGain(),pc.gain.value=.55,pc.connect(us),Mi=$e.createGain(),Mi.gain.value=.6,Mi.connect(us),R_()}function nu(){return Pr=!Pr,us&&us.gain.setTargetAtTime(Pr?0:.9,$e.currentTime,.1),Pr}var b_=()=>Pr;function E_(n){let e=Math.round(n*10);if(tu.has(e))return tu.get(e);let t=$e.sampleRate,i=4.5,s=Math.floor(t*i),r=$e.createBuffer(1,s,t),a=r.getChannelData(0),o=Math.max(2,Math.round(t/n)),l=new Float32Array(o);for(let d=0;d<o;d++)l[d]=Math.random()*2-1;let c=0,u=0;for(let d=0;d<s;d++){let h=l[c],f=l[(c+1)%o],g=(h+f)*.5*.9985;l[c]=g,c=(c+1)%o;let S=Math.tanh(g*5)*.4,m=(g*.55+S)*Math.min(1,d/60);a[d]=m,Math.abs(m)>u&&(u=Math.abs(m))}for(let d=0;d<s;d++)a[d]/=u||1;return tu.set(e,r),r}function Sf(n,e=0,t=.35){if(!$e)return;let i=$e.createBufferSource();i.buffer=E_(n);let s=$e.createGain();s.gain.value=t;let r=$e.createBiquadFilter();r.type="lowpass",r.frequency.value=1800,i.connect(r),r.connect(s),s.connect(pc),i.start($e.currentTime+e)}var Mf=[73.42,82.41,92.5,110,123.47,146.83,164.81],wf=[[0,2,3,2],[3,4,3,1],[0,3,5,3],[2,1,0,0],[5,4,3,2],[3,3,1,0]];function T_(){if(!$e||Ya)return;let n=0,e=()=>{wf[n++%wf.length].forEach((i,s)=>Sf(Mf[i],s*.9,s===0?.42:.3)),Sf(Mf[0]/2,0,.25)};e(),Ya=setInterval(e,3600),ds&&ds.gain.setTargetAtTime(.012,$e.currentTime,1)}function A_(){Ya&&(clearInterval(Ya),Ya=null),ds&&$e&&ds.gain.setTargetAtTime(.035,$e.currentTime,2)}function R_(){ds=$e.createGain(),ds.gain.value=.035;let n=$e.createBiquadFilter();n.type="lowpass",n.frequency.value=600,[110,110.6,164.8].forEach(e=>{let t=$e.createOscillator();t.type="sawtooth",t.frequency.value=e,t.connect(n),t.start()}),n.connect(ds),ds.connect(us),Xa=$e.createGain(),Xa.gain.value=1,Xa.connect(Mi),qa=$e.createGain(),qa.gain.value=0,qa.connect(Mi),setInterval(()=>{Math.random()<.7&&C_()},650),setInterval(()=>{Math.random()<.45&&I_()},1900)}function C_(){let n=$e.currentTime,e=4200+Math.random()*900;for(let t=0;t<3;t++){let i=$e.createOscillator(),s=$e.createGain();i.frequency.value=e,s.gain.value=0,s.gain.setValueAtTime(0,n+t*.06),s.gain.linearRampToValueAtTime(.025,n+t*.06+.01),s.gain.linearRampToValueAtTime(0,n+t*.06+.04),i.connect(s),s.connect(Xa),i.start(n+t*.06),i.stop(n+t*.06+.05)}}function I_(){let n=$e.currentTime,e=$e.createOscillator(),t=$e.createGain(),i=1800+Math.random()*1400;e.frequency.setValueAtTime(i,n),e.frequency.exponentialRampToValueAtTime(i*1.5,n+.12),e.frequency.exponentialRampToValueAtTime(i*.9,n+.25),t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(.03,n+.03),t.gain.linearRampToValueAtTime(0,n+.28),e.connect(t),t.connect(qa),e.start(n),e.stop(n+.3)}function iu(n){$e&&(Xa.gain.setTargetAtTime(1-n,$e.currentTime,.5),qa.gain.setTargetAtTime(n,$e.currentTime,.5))}function P_(){$e&&[880,1108.7,1318.5].forEach((n,e)=>{let t=$e.currentTime+e*.08,i=$e.createOscillator(),s=$e.createGain();i.type="sine",i.frequency.value=n,s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.12,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.9),i.connect(s),s.connect(Mi),i.start(t),i.stop(t+1)})}function L_(){if($e)for(let n=0;n<6;n++){let e=$e.currentTime+n*.05,t=$e.createOscillator(),i=$e.createGain();t.frequency.value=1500+Math.random()*1500,i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(i),i.connect(Mi),t.start(e),t.stop(e+.35)}}function D_(){if(!$e)return;let n=$e.currentTime,e=$e.sampleRate*2.5,t=$e.createBuffer(1,e,$e.sampleRate),i=t.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.pow(1-o/e,2);let s=$e.createBufferSource();s.buffer=t;let r=$e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,n),r.frequency.exponentialRampToValueAtTime(60,n+2);let a=$e.createGain();a.gain.value=.9,s.connect(r),r.connect(a),a.connect(Mi),s.start(n)}function N_(){if(!$e)return;let n=$e.currentTime,e=$e.createOscillator(),t=$e.createGain();e.type="triangle",e.frequency.setValueAtTime(900,n),e.frequency.exponentialRampToValueAtTime(120,n+2.5),t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(.08,n+.4),t.gain.linearRampToValueAtTime(0,n+2.6),e.connect(t),t.connect(Mi),e.start(n),e.stop(n+2.7)}function Lr(){if(!$e)return;let n=$e.currentTime,e=$e.createOscillator(),t=$e.createGain();e.frequency.value=660,t.gain.setValueAtTime(.04,n),t.gain.exponentialRampToValueAtTime(.001,n+.08),e.connect(t),t.connect(Mi),e.start(n),e.stop(n+.1)}var kt=n=>document.querySelector(n),Ae={hud:kt("#hud"),controls:kt("#controls"),objective:kt("#objective"),objTitle:kt("#objective .obj-title"),objList:kt("#objective .obj-list"),compass:kt("#compass"),arrow:kt("#compass .arrow"),dist:kt("#compass .dist"),energy:kt("#energy"),energyFill:kt("#energy .fill"),act:kt("#btnAct"),actLbl:kt("#btnAct .lbl"),planner:kt("#btnPlanner"),tap:kt("#tapCatcher"),dialog:kt("#dialog"),dName:kt("#dialog .name"),dText:kt("#dialog .text"),dSub:kt("#dialog .sub"),choices:kt("#choices"),narr:kt("#narr"),prayer:kt("#prayer"),pGe:kt("#prayer .ge"),pEn:kt("#prayer .en"),toast:kt("#toast"),card:kt("#card"),cardInner:kt("#card .inner"),fade:kt("#fade"),hold:kt("#holdRing"),holdFg:kt("#holdRing .fg")},It=(n,e=!0)=>n.classList.toggle("hidden",!e),In=n=>new Promise(e=>setTimeout(e,n)),wi=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function ru(){return new Promise(n=>{It(Ae.tap,!0);let e=i=>{i&&i.preventDefault(),Ae.tap.removeEventListener("pointerdown",e),window.removeEventListener("keydown",t),It(Ae.tap,!1),n()},t=i=>{(i.key==="Enter"||i.key===" "||i.key==="e")&&e(i)};setTimeout(()=>{Ae.tap.addEventListener("pointerdown",e),window.addEventListener("keydown",t)},120)})}var wn={cutscene(n){It(Ae.controls,!n),It(Ae.hud,!n)},showHUD(n){It(Ae.hud,n),It(Ae.controls,n)},async say(n,e,t={}){It(Ae.dialog,!0),Ae.dialog.classList.remove("ready"),Ae.dName.textContent=n||"",Ae.dName.className="name "+(t.cls||(n||"").toLowerCase()),Ae.dSub.textContent=t.sub||"",Ae.dText.textContent="";let i=!1,s=!1,r=()=>{i=!0};It(Ae.tap,!0),Ae.tap.addEventListener("pointerdown",r);let a=o=>{(o.key==="Enter"||o.key===" ")&&(i=!0)};window.addEventListener("keydown",a);for(let o=0;o<e.length&&!i;o++)Ae.dText.textContent=e.slice(0,o+1),o%3===0&&Lr(),await In(/[.,!?…—]/.test(e[o])?70:22);return Ae.tap.removeEventListener("pointerdown",r),window.removeEventListener("keydown",a),Ae.dText.textContent=e,s=!0,Ae.dialog.classList.add("ready"),await ru(),t.keep||It(Ae.dialog,!1),s},choose(n){return new Promise(e=>{Ae.choices.innerHTML="",It(Ae.choices,!0),n.forEach((t,i)=>{let s=document.createElement("button");s.textContent=t,s.addEventListener("click",()=>{It(Ae.choices,!1),It(Ae.dialog,!1),e(i)},{once:!0}),Ae.choices.appendChild(s)})})},async narrate(n,e=0){Ae.narr.textContent=n,It(Ae.narr,!0),Ae.narr.style.animation="none",Ae.narr.offsetWidth,Ae.narr.style.animation="",e?await In(e):(await In(700),await ru()),It(Ae.narr,!1)},async prayerLine(n,e,t=0){Ae.pGe.textContent=n||"",Ae.pEn.textContent=e||"",It(Ae.prayer,!0),Ae.prayer.style.animation="none",Ae.prayer.offsetWidth,Ae.prayer.style.animation="",t?await In(t):(await In(1200),await ru()),It(Ae.prayer,!1)},toast(n,e=3200){Ae.toast.textContent=n,It(Ae.toast,!0),clearTimeout(wn._tt),wn._tt=setTimeout(()=>It(Ae.toast,!1),e)},objective(n,e){if(!n){Ae.objective.classList.add("empty"),Ae.objTitle.textContent="",Ae.objList.innerHTML="";return}Ae.objective.classList.remove("empty"),Ae.objTitle.textContent=n,Ae.objList.innerHTML=(e||[]).map(t=>`<li class="${t.done?"done":""}">${wi(t.text)}</li>`).join("")},compass(n,e){if(n===null){It(Ae.compass,!1);return}It(Ae.compass,!0),Ae.arrow.style.transform=`rotate(${n-90}deg)`,Ae.dist.textContent=Math.round(e)+" m"},energy(n,e){Ae.energyFill.style.width=Math.max(0,n*100)+"%",Ae.energy.classList.toggle("low",!!e)},actLabel(n){if(!n){It(Ae.act,!1);return}Ae.actLbl.textContent=n,It(Ae.act,!0)},holdRing(n){if(n===null){It(Ae.hold,!1);return}It(Ae.hold,!0),Ae.holdFg.style.strokeDashoffset=String(276.5*(1-n))},plannerButton(n){It(Ae.planner,n)},async fade(n,e=1e3){Ae.fade.style.transitionDuration=e+"ms",Ae.fade.style.opacity=n?"1":"0",await In(e)},card(n,e=["Continue"]){return new Promise(t=>{Ae.cardInner.innerHTML=n+`<div class="btns">${e.map((i,s)=>`<button class="big ${s?"ghost":""}" data-i="${s}">${wi(i)}</button>`).join("")}</div>`,It(Ae.card,!0),Ae.cardInner.querySelectorAll(".btns button").forEach(i=>i.addEventListener("click",()=>{It(Ae.card,!1),t(+i.dataset.i)},{once:!0}))})},async dayCard(n,e){Ae.cardInner.innerHTML=`<div style="text-align:center"><h2>${wi(n)}</h2><h3>${wi(e)}</h3></div>`,It(Ae.card,!0),await In(900),await new Promise(t=>{let i=()=>{Ae.card.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i),t()};Ae.card.addEventListener("pointerdown",i),window.addEventListener("keydown",i)}),It(Ae.card,!1)},fragmentCard(n,e){return wn.card(`<div class="fragment"><div class="glyph">\u2726</div><h3>Star fragment ${n} of 10</h3><blockquote>\u201C${wi(e)}\u201D</blockquote></div>`,["Keep it close"])},planner(n,e){return new Promise(t=>{let i=new Set(n.filter(r=>r.required).map(r=>r.id)),s=()=>{let r=i.size,a=Array.from({length:Math.max(e,r)},(l,c)=>`<span class="${c>=e?"over":""}">${c<r?"\u2600":"\u25CB"}</span>`).join("");Ae.cardInner.innerHTML=`<h2>Kristi's Day</h2><h3>The day holds ${e} things. Pick what matters.</h3>
          <div class="suns">${a}</div>
          <div class="tasks">${n.map(l=>`<div class="task ${i.has(l.id)?"on":""}" data-id="${l.id}"><div class="box">${i.has(l.id)?"\u2713":""}</div><div><b>${wi(l.title)}${l.required?' <em class="must">must do</em>':""}</b><span>${wi(l.desc)}</span></div></div>`).join("")}</div>
          <p class="warn">${r>e?"That is more than one day can hold. Kristi will run low on energy\u2026 but she can try.":""}</p>
          <div class="btns"><button class="big" id="planGo" ${r?"":"disabled"}>Start the day</button></div>`,Ae.cardInner.querySelectorAll(".task").forEach(l=>l.addEventListener("click",()=>{let c=l.dataset.id;n.find(u=>u.id===c).required||(i.has(c)?i.delete(c):i.add(c),Lr(),s())})),Ae.cardInner.querySelector("#planGo").addEventListener("click",()=>{i.size&&(It(Ae.card,!1),t([...i]))})};s(),It(Ae.card,!0)})},spell(){return new Promise(n=>{let e=Array.from({length:5},(c,u)=>{let d=-Math.PI/2+u*(Math.PI*4/5);return[50+Math.cos(d)*34,50+Math.sin(d)*34]}),t=0,i=0,s=0;Ae.cardInner.innerHTML=`<h2>Sleep Focus Spell</h2><h3>Touch the stars in order. Gently \u2014 one breath each.</h3>
        <div class="spell"><svg viewBox="0 0 100 100"><polyline class="trail" points=""/></svg>${e.map(([c,u],d)=>`<button class="sp" data-i="${d}" style="left:${c}%;top:${u}%">${d+1}</button>`).join("")}</div>
        <p class="warn" id="spellMsg"></p>`,It(Ae.card,!0);let r=Ae.cardInner.querySelector(".trail"),a=Ae.cardInner.querySelector("#spellMsg"),o=[...Ae.cardInner.querySelectorAll(".sp")],l=()=>{o.forEach((c,u)=>c.classList.toggle("lit",u<t)),o.forEach((c,u)=>c.classList.toggle("next",u===t)),r.setAttribute("points",e.slice(0,t).map(c=>c.join(",")).join(" "))};l(),o.forEach(c=>c.addEventListener("pointerdown",u=>{u.preventDefault();let d=+c.dataset.i,h=performance.now();if(d===t){if(t>0&&h-i<650){s++,t=0,a.textContent="Too fast \u2014 the spell slips. Gently\u2026",Lr(),l();return}i=h,t++,a.textContent="",Lr(),l(),t===5&&setTimeout(()=>{It(Ae.card,!1),n({slips:s})},700)}}))})},async constellation(n,e,t){let i=document.createElement("div");i.id="constellation";let s=10,r=Array.from({length:s},(d,h)=>{let f=h/s*Math.PI*2,g=16*Math.pow(Math.sin(f),3),S=13*Math.cos(f)-5*Math.cos(2*f)-2*Math.cos(3*f)-Math.cos(4*f);return[50+g*2.3,44-S*2.3]});i.innerHTML=`<div class="cbox"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline class="cl" points=""/></svg>
      ${r.map(([d,h],f)=>`<div class="cs ${n[f]?"":"dim"}" style="left:${d}%;top:${h}%"></div>`).join("")}</div>
      <div class="cline"></div><div class="cfinal"></div>`,document.body.appendChild(i),await In(50),i.classList.add("on");let a=[...i.querySelectorAll(".cs")],o=i.querySelector(".cl"),l=i.querySelector(".cline"),c=[];for(let d=0;d<s;d++)await In(450),a[d].classList.add("lit"),c.push(r[d]),o.setAttribute("points",c.map(h=>h.join(",")).join(" ")),n[d]&&(l.textContent="\u201C"+n[d]+"\u201D",l.classList.remove("show"),l.offsetWidth,l.classList.add("show"),await In(2600));o.setAttribute("points",[...r,r[0]].map(d=>d.join(",")).join(" ")),l.classList.remove("show"),await In(900),i.classList.add("end");let u=i.querySelector(".cfinal");u.innerHTML=`<p>${wi(e)}</p><span>${wi(t)}</span>`,u.classList.add("show"),await In(2500),await new Promise(d=>{let h=()=>{i.removeEventListener("pointerdown",h),d()};i.addEventListener("pointerdown",h)}),i.classList.remove("on"),await In(900),i.remove()},showPlan(n){return wn.card(`<h2>Today</h2><ul class="reflect">${n.map(e=>`<li><i>${e.done?"\u25CF":"\u25CB"}</i>${wi(e.text)}</li>`).join("")}</ul>`,["Back"])}};var au="wtsf.save.v1";function gc(){return{checkpoint:"prologue",day:0,steadiness:0,calm:0,restless:6,bond:0,waited:0,fragments:[],flags:{},snapshot:null}}function bf(){try{let n=localStorage.getItem(au);if(!n)return null;let e=JSON.parse(n);if(e&&e.checkpoint)return Object.assign(gc(),e)}catch{}return null}function yc(n){try{localStorage.setItem(au,JSON.stringify(n))}catch{}}function Ef(){try{localStorage.removeItem(au)}catch{}}var xc=["Some people show up exactly when you need them.","You don\u2019t have to do everything at once. I\u2019ll be here for all of it.","Your spell worked. I still don\u2019t know how. It must be the fairy thing.","Maybe our worlds aren\u2019t as far apart as the sky makes them look.","Have a little confidence in yourself. You\u2019ve got this.","Even when I get lazy praying for myself, I remember I pray for you.","You stayed calm for me. I noticed. I always notice.","\u1230\u120B\u121D \u1208\u12AA, Kristi. Peace be with you. Always.","I came for a short visit. I still can\u2019t find a reason to leave.","Every time someone doubts fairies, I\u2019ll believe in you twice."],Tf="Kristi, I built this whole forest to say what I\u2019m not always good at saying out loud: thank you. For the reminders to sleep, for the prayers, for being the calm one when I\u2019m not. You\u2019re the smartest, kindest fairy I know. I\u2019m not from around here, but with you, I feel at home.",Af="\u2014 Kirubel";var Tt=(n,e)=>new C(n,0,e),Ns=(n,e,t,i=0)=>Array.from({length:t},(s,r)=>{let a=i+r/t*Math.PI*2;return Tt(n.x+Math.cos(a)*e,n.z+Math.sin(a)*e)}),Lt="Kristi",Ze="Kirubel",nn="Sena",Ds="Lumi",Pn="Elder Thorne",Un="Mira",Hi="Grandmother Warka",bi=["\u1260\u1235\u1218 \u12A0\u1265 \u12C8\u12C8\u120D\u12F5 \u12C8\u1218\u1295\u1348\u1235 \u1245\u12F1\u1235","In the name of the Father, the Son and the Holy Spirit."],_c=["\u12A5\u130D\u12DA\u12A0\u1265\u1214\u122D \u12ED\u1218\u1235\u1308\u1295","Egziabher yimesgen \u2014 God be praised."];var Ti=12,Rf=Tt(Z.warka.x+3.5,Z.warka.z-2.5),Ei=(n,e,t)=>({id:"parts",title:"Look for ship parts",desc:"Pieces of his ship are still scattered through the forest.",ship:!0,cracked:t,steps:[{type:"collect",kind:"part",at:[n,e],label:"Pick up",text:(i,s)=>`Ship parts (${i}/${s})`}]}),ou=(n,e,t,i)=>({id:"leaves",title:t,desc:i,steps:[{type:"collect",kind:"leaf",at:Ns(n,e,3,.4),label:"Pick",text:(s,r)=>`${t} (${s}/${r})`}]}),Ai={1:{title:"Day 1",sub:"The full moon rises in ten days.",intro:"Kristi wakes to find him already standing, facing the sunrise.",morning:[bi,_c,["","For this morning. For this forest. And for the one who wasn\u2019t afraid."]],async afterPrayer(n){n.prayed?(await n.say(Ze,"You stayed."),await n.say(Lt,"You looked\u2026 peaceful. I\u2019ve never seen you peaceful."),await n.say(Ze,"You\u2019ve known me for one night."),await n.say(Lt,"Exactly. And that\u2019s the first time.")):(await n.say(Ze,"You left early."),await n.say(Lt,"I had things to do!"),await n.say(Ze,"Before the sun was even up?")),await n.say(Ze,"Every morning starts like this for me. Before anything else."),await n.say(Lt,"Before anything else? I have a hundred things to do today."),await n.say(Ze,"Then do one. Then the next one."),await n.say(Lt,"That is not how it works."),await n.say(Ze,"Where I come from, it\u2019s the only way it works."),await n.say(Ds,"*chirp chirp!*"),await n.say(Ze,"This is Lumi. She came with me. Or I came with her \u2014 I\u2019m never sure.")},hint:"Lumi keeps staring at that tall rock to the southwest. Something up there is glowing.",fragment:"pillar",tasks:[Ei(Z.parts[0],Z.parts[1],!0),{id:"heal",title:"Heal the fading sapling",desc:"A young Warka tree to the west is losing its colour. Grandmother Warka asked you to tend it.",steps:[{type:"hold",at:Z.sapling,secs:5,label:"Hold to heal",text:()=>"Heal the sapling",effect:"sapling"}]},{id:"petals",title:"Gather moonpetals",desc:"The Elder needs five moonpetals for the Moon Festival.",trust:1,steps:[{type:"collect",kind:"petal",at:Ns(Z.petals,4.5,5),label:"Pick",radius:2,text:(n,e)=>`Moonpetals (${n}/${e})`}]},{id:"lanterns",title:"Hang lanterns with Sena",desc:"Sena needs help with the festival lanterns. (And she wants gossip.)",steps:[{type:"talk",who:"sena",at:Z.sena,label:"Talk to Sena",text:()=>"Find Sena by your home",async scene(n){await n.say(nn,n.over?"You\u2019re helping? You\u2019re helping me AND hunting for metal AND healing a tree AND picking petals? Kristi.":"You came! I thought you forgot. You always forget."),await n.say(nn,"Everyone is whispering about the light that fell last night. You wouldn\u2019t know anything about that\u2026 would you?"),await n.choose(["No idea what you\u2019re talking about.","\u2026Maybe."])===0?await n.say(nn,"Mm-hm. Your face says otherwise."):(await n.say(nn,"KRISTI."),await n.say(nn,"\u2026Fine. Your secret is safe with me. But I want ALL the details later."),n.S.flags.senaKnows=!0),await n.say(nn,"Here. Three lanterns. Hang them on the posts around the hollow.")}},{type:"collect",at:Z.posts,noItem:!0,label:"Hang lantern",effect:"lantern",text:(n,e)=>`Hang lanterns (${n}/${e})`}]}],async evening(n){n.partsFound===2&&(await n.say(Ze,"You found both pieces? Kristi\u2026"),await n.narrate("He turns the second piece over. A crack runs straight through it.",3e3),await n.say(Ze,"This one\u2019s cracked. It won\u2019t hold."),await n.calmTest(["All that searching for nothing?!","Then that\u2019s one less place to look tomorrow."],()=>n.say(Ze,"It\u2019s not nothing. You brought it back. That\u2019s something."),()=>n.say(Ze,"\u2026You sound like me in the morning."),"the cracked part"))},night:[["","For the parts that were found, and the ones that weren\u2019t."],["","And keep her safe tonight."]]},2:{title:"Day 2",sub:"Nine nights until the full moon.",intro:"Mist hangs between the trees. He is already up, of course.",morning:[bi,["","For sleep that came, even a little."],["","Teach me to wait without pacing."]],async afterPrayer(n){await n.say(Ze,"Your grandmother tree \u2014 the big one by your home. Lumi says she hums at night."),await n.say(Lt,"Grandmother Warka doesn\u2019t hum. She\u2019s a tree."),await n.say(Ds,"*hums*"),await n.say(Lt,"\u2026Okay, maybe she hums.")},hint:"Lumi keeps circling the top of Grandmother Warka. She won\u2019t say why.",fragment:"warka",tasks:[Ei(Tt(-70,10),Tt(30,60)),{id:"roots",title:"Tend Grandmother Warka\u2019s roots",desc:"The oldest tree in the forest asked for you by name. That has never happened before.",steps:[{type:"talk",who:"warka",at:Z.warka,radius:5.5,label:"Speak to Warka",text:()=>"Visit Grandmother Warka",async scene(n){await n.narrate("Two warm lights open in the bark.",2600),await n.say(Hi,"Little one. Not so little anymore, are you."),await n.say(Lt,"Grandmother! You \u2014 you\u2019ve never spoken to me before."),await n.say(Hi,"You never stood still long enough to hear me."),await n.say(Hi,"My roots are tangled on the eastern side. Sit with them a while. Do not pull. Roots cannot be hurried.")}},{type:"hold",at:Rf,secs:6,label:"Hold to untangle",text:()=>"Untangle the roots, gently",effect:"calmIfSteady"}]},{id:"banners",title:"Air out the festival banners",desc:"Sena left the festival banners drying all over the hollow. The wind has other plans.",steps:[{type:"collect",kind:"banner",at:[Tt(10,-14),Tt(-14,2),Tt(4,16),Tt(18,4)],label:"Catch it",text:(n,e)=>`Banners (${n}/${e})`}]},ou(Tt(-25,-30),4,"Moonleaf for his tea","He drank the whole pot last night. He will not admit he liked it.")],async evening(n){await n.say(Ze,"Did your grandmother tree say anything?"),await n.say(Lt,n.done("roots")?"She said I never stood still long enough to hear her.":"I didn\u2019t visit her today. There wasn\u2019t time."),await n.say(Ze,n.done("roots")?"Ah. She sounds like someone I know.":"There\u2019s always time for the things that waited for you."),await n.narrate("Lumi bounces too close to the kettle. It tips. The last of the moonleaf tea soaks into the moss.",3600),await n.calmTest(["Lumi! That was the last of it!","*laughs* It\u2019s fine. There\u2019s more moonleaf in the forest."],()=>n.say(Ds,"*sad chirp*"),()=>n.say(Ds,"*happy chirp!*"),"the spilled tea")},question:0,night:[["","For the old tree, who has waited a long time."],["","And for Kristi, who is learning that she doesn\u2019t have to."]]},3:{title:"Day 3",sub:"Eight nights until the full moon.",intro:"He prays a little longer than yesterday. Something is on his mind.",morning:[bi,["","Give me patience with the hull, and with myself."],["","Keep the others from finding us too soon."]],async afterPrayer(n){await n.say(Ze,"I didn\u2019t sleep much. Every time I close my eyes I see the ship falling."),await n.say(Lt,"Then tonight I\u2019m making you a sleep tea. Doctor\u2019s orders."),await n.say(Ze,"I thought you were a nurse."),await n.say(Lt,"It changes depending on how stubborn the patient is.")},hint:"Lumi keeps landing on top of the ship\u2019s glass dome and refusing to come down.",fragment:"dome",tasks:[Ei(Tt(70,-40),Tt(-20,-80)),{id:"wood",title:"Gather firewood",desc:"Nights at the crash site are cold. He would never ask.",bond:1,steps:[{type:"collect",kind:"wood",at:Ns(Tt(25,25),5,4),label:"Gather",text:(n,e)=>`Firewood (${n}/${e})`}]},ou(Tt(-55,15),4,"Herbs for a sleep tea","Sleepy-moss and moonleaf. It\u2019s worth a try."),{id:"song",title:"Help Sena practise her lantern song",desc:"Sena is singing at the bonfire festival. She is very nervous. And very loud.",steps:[{type:"talk",who:"sena",at:Z.sena,label:"Listen to Sena",text:()=>"Find Sena",async scene(n){await n.say(nn,"Okay. Okay okay okay. Tell me honestly. Is this good?"),await n.narrate("Sena sings. Several birds leave the area.",2600),await n.choose(["It was beautiful. Truly.","Maybe\u2026 a little softer?"])===0?await n.say(nn,"You\u2019re lying, but I love you for it."):(await n.say(nn,"Softer. Softer! You\u2019re right."),await n.narrate("She sings again, softer. It really is lovely.",2600))}}]}],event:{at:.35,async run(n){n.W.mira.at(n.G.P.pos.x+2.2,n.G.P.pos.z+1.2,n.G.P.pos.x,n.G.P.pos.z),n.twoShot(n.W.mira.group.position),await n.say(Un,"Well, well. Kristi. The tall one. Out all alone again."),await n.say(Un,"You smell like smoke. And metal. And\u2026 sky."),await n.choose(["I don\u2019t know what you mean.","Mira, please. Can you keep a secret?"])===0?await n.say(Un,"Liar. Everyone saw you fly toward the light."):(n.S.miraKind+=1,await n.say(Un,"\u2026You\u2019re asking me? Nobody asks me anything.")),await n.say(Un,"Whatever fell out of the sky doesn\u2019t belong here. If I have to, I\u2019ll break that ship myself."),await n.calmTest(["Touch it and you\u2019ll be sorry, Mira!","He\u2019s not dangerous. He\u2019s just lost. Like anyone could be."],()=>n.say(Un,"Big words for a fairy who doesn\u2019t even fit in."),async()=>{n.S.miraKind+=1,await n.say(Un,"\u2026Hmph."),await n.narrate("Mira flies off. Slower than usual.",2400)},"Mira\u2019s threat"),n.W.mira.group.visible=!1}},async evening(n){await n.say(Ze,"Someone was watching the camp today. Small. Purple. Very angry."),await n.say(Lt,"Mira. She\u2019s\u2026 complicated."),await n.narrate("Night falls. He lies down. He gets up. He lies down again.",3e3),await n.say(Lt,"Alright. That\u2019s it. Close your eyes."),await n.say(Ze,"Why?"),await n.say(Lt,"Abra kadabra. SLEEP FOCUS SPELL. Guarantees five to eight uninterrupted hours of rest."),await n.say(Lt,"Side effects include actually waking up well-rested for once."),(await n.UI.spell()).slips===0?(n.S.calm+=1,n.S.restless-=3,n.D.reflect.spell="gentle",await n.narrate("The stars settle into place. So does his breathing.",3e3),await n.say(Ze,"\u2026That\u2019s\u2026 a real spell\u2026",{sub:"He is asleep before he finishes the sentence."})):(n.S.restless-=1,n.D.reflect.spell="rushed",await n.say(Ze,"I think it\u2026 almost worked."),await n.say(Lt,"Spells are like tea. Not a race."))},question:1,night:[["","For a spell I don\u2019t understand, from someone I am starting to."],["","Soften the angry ones. Mira too."]]},4:{title:"Day 4",sub:"Golden Daisy Night. Seven nights until the full moon.",intro:"The forest smells of daisies. Tonight the fairies light their great bonfire.",morning:[bi,_c,["","For the fire tonight, and for a world that lights fires too."]],async afterPrayer(n){await n.say(Lt,"Tonight is Golden Daisy Night. We build a bonfire as tall as Grandmother Warka and crown it with daisies."),await n.say(Ze,"A bonfire\u2026 with yellow daisies on top?"),await n.say(Ze,"Kristi. Where I come from, we do the same. We call it Demera. For the day the True Cross was found."),await n.say(Lt,"Your world has daisy fires too?"),await n.say(Ze,"Maybe our worlds aren\u2019t as far apart as the sky makes them look.")},hint:"Lumi keeps rolling around in the daisy meadow to the west, next to an old hollow log.",fragment:"meadow",tasks:[Ei(Tt(-45,60),Tt(45,-70)),{id:"daisies",title:"Pick golden daisies",desc:"Six of the brightest daisies for the bonfire crown, from the western meadow.",trust:1,steps:[{type:"collect",kind:"daisy",at:Ns(Z.meadow,7,6,.3),label:"Pick",text:(n,e)=>`Golden daisies (${n}/${e})`}]},{id:"stack",title:"Stack the bonfire",desc:"The logs have to lean just right, or the whole thing topples. Slowly does it.",trust:1,steps:[{type:"hold",at:Z.bonfire,secs:6,label:"Hold to stack",text:()=>"Stack the bonfire",effect:"bonfire"}]},{id:"torch",title:"Carry the Elder\u2019s torch-staff",desc:"Every year someone carries the flame from the council stone. This year the Elder asked for you.",trust:1,steps:[{type:"talk",who:"elder",at:Z.council,label:"Speak to the Elder",text:()=>"Go to the council stone",async scene(n){await n.say(Pn,"Kristi. You are tall enough to carry it without dragging it in the moss, at least."),await n.say(Lt,"Thank you, Elder. I think."),await n.say(Pn,"Strange lights fell from the sky four nights ago. You would tell me if you knew anything. Wouldn\u2019t you?"),await n.choose(["Of course, Elder.","(Say nothing.)"])===1&&await n.say(Pn,"Hm. Silence is also an answer, child.")}},{type:"visit",at:Z.bonfire,label:"Place the torch",text:()=>"Bring the torch to the bonfire"}]}],async evening(n){n.W.setTime(.83),n.W.setBonfire(2),n.S.flags.bonfire=2,n.W.villagers.forEach((t,i)=>{let s=i*2.1;t.at(n.SPOTS.bonfire.x+Math.cos(s)*4,n.SPOTS.bonfire.z+Math.sin(s)*4,n.SPOTS.bonfire.x,n.SPOTS.bonfire.z)}),n.W.sena.at(n.SPOTS.bonfire.x-3,n.SPOTS.bonfire.z+2,n.SPOTS.bonfire.x,n.SPOTS.bonfire.z),n.G.placePlayer(n.SPOTS.bonfire.x-5,n.SPOTS.bonfire.z+5),n.G.faceKristi(n.SPOTS.bonfire),n.G.shotNow(n.at(n.SPOTS.bonfire,-9,3,8),n.at(n.SPOTS.bonfire,0,2,0)),await n.UI.fade(!1,900),await n.narrate("The daisies catch. The whole hollow turns gold.",3e3),await n.say(nn,"Kristi! Where\u2019s your\u2026 friend? Is he coming?",{sub:"Sena whispers, very badly."}),await n.choose(["Bring him to the edge of the firelight","Watch it with him from the trees"])===0?(n.S.flags.miraSaw=!0,n.S.trust-=1,n.S.bond+=1,await n.narrate("For one moment he stands in the golden light, and every fairy turns to stare.",3400),await n.say(Ze,"Demera\u2026 just like home."),await n.narrate("Somewhere in the crowd, a small purple fairy slips away toward the council stone.",3200)):(n.S.bond+=1,await n.narrate("They sit on a fallen branch where the light only just reaches. He makes the sign of the cross toward the fire.",3800),await n.say(Ze,"Thank you for not making me choose between hiding and being seen.")),await n.narrate("Sena trips on her own wings. The daisy crown Kristi spent the morning on tumbles into the fire.",3400),await n.calmTest(["Sena! I spent all morning on that!","It\u2019s a bonfire. Everything ends up in the fire eventually."],()=>n.say(nn,"I\u2019m sorry, I\u2019m sorry\u2026"),()=>n.say(nn,"\u2026That\u2019s weirdly wise. Who taught you that?"),"the fallen crown"),n.W.villagers.forEach(t=>t.group.visible=!1)},eveningAtFire:!0,question:2,night:[["","For the fire that reminded me of home."],["","And for her, who made a place for me beside it."]]},5:{title:"Day 5",sub:"Six nights until the full moon.",intro:"Grey morning. Even the fireflies seem to know something is coming.",morning:[bi,["","If they come today, give me the right words."],["","And give her courage. She has already given me so much."]],async afterPrayer(n){await n.say(Ze,"Sena flew past before dawn. She said the Elder has been asking questions."),await n.say(Lt,"Then we keep working. One thing, then the next."),await n.say(Ze,"Did you just quote me?"),await n.say(Lt,"Don\u2019t let it go to your head.")},hint:"Lumi keeps staring at the tall stone pillar in the northeast.",fragment:"pillar2",tasks:[Ei(Tt(75,20),Tt(-80,-30)),{id:"petals5",title:"Moonpetals for the Elder",desc:"A peace offering. The Elder loves moonpetals more than he admits.",trust:1,steps:[{type:"collect",kind:"petal",at:Ns(Z.petals,4.5,5,.6),label:"Pick",radius:2,text:(n,e)=>`Moonpetals (${n}/${e})`}]},{id:"scorch",title:"Heal the scorched earth",desc:"The crash burned a scar into the moss. It hurts to look at.",steps:[{type:"hold",at:Tt(32,-52),secs:6,label:"Hold to heal",text:()=>"Heal the burned moss",effect:"calmIfSteady"}]},{id:"lantern5",title:"Fix Sena\u2019s broken lantern",desc:"She dropped it during the festival. She will not stop talking about it.",steps:[{type:"talk",who:"sena",at:Z.sena,label:"Talk to Sena",text:()=>"Find Sena",async scene(n){await n.say(nn,"My lantern! Look at it! It\u2019s RUINED. Can you hold it together while the glow-sap sets? It takes forever.")}},{type:"hold",at:Z.posts[0],secs:5,label:"Hold it steady",text:()=>"Hold the lantern while it sets"}]}],event:{at:.45,async run(n){await n.UI.fade(!0,600);let e=n.W.kirubel.group.position;n.G.placePlayer(e.x-1.6,e.z+1.6),n.G.faceKristi(e),n.W.kirubel.setPose("stand"),n.W.elder.at(e.x+2.5,e.z+2.2,e.x,e.z),n.W.mira.at(e.x+3.6,e.z+1.2,e.x,e.z),n.G.shotNow(n.at(e,-2,2.4,6.5),n.at(e,1,1.2,1)),await n.UI.fade(!1,600),await n.narrate("Sena\u2019s warning comes too late. The Elder is already at the crash site. Mira is with him.",3600),await n.say(Pn,"So it is true. An outsider. A sky-thing, in our forest."),await n.say(Un,"I told you. I TOLD you."),await n.say(Pn,"Kristi. You hid this from your own people."),await n.calmTest(["He\u2019s done NOTHING wrong! You\u2019re all just afraid!","Elder, please. Hear him before you judge him."],async()=>{n.S.trust-=1,await n.say(Pn,"Fear has kept this forest alive for a thousand years, child.")},async()=>{n.S.trust+=1,await n.say(Pn,"\u2026Speak, then. Sky-thing."),await n.say(Ze,"My name is Kirubel. I didn\u2019t mean to fall. I only want to go home."),await n.say(Pn,"Hm. At least it has manners.")},"the Elder"),await n.say(Pn,"When the moon is full, the sky opens a path for one night only. Be gone through it."),await n.say(Pn,"If you are still here when it closes, the forest will make you go."),n.W.elder.group.visible=!1,await n.narrate("In the commotion, nobody sees Mira dart behind the ship.",3e3),n.W.mira.group.visible=!1,n.S.flags.coreStolen=!0}},async evening(n){await n.say(Ze,"Kristi\u2026 the star-core. The heart of the engine. It\u2019s gone."),await n.say(Ze,"Without it the ship is just a very shiny rock."),await n.calmTest(["Mira! I\u2019ll find her and I\u2019ll\u2014","We\u2019ll get it back. Somehow. Not tonight, but we will."],()=>n.say(Ze,"Please don\u2019t. She\u2019s scared. Scared people do scared things."),()=>n.say(Ze,"\u2026You\u2019re calmer than I am. When did that happen?"),"the stolen core")},question:3,night:[["","For the Elder, who is only protecting what he loves."],["","And for Mira. Wherever she put it."]]},6:{title:"Day 6",sub:"Kidane Mihret. Five nights until the full moon.",intro:"He has made a small cross of flowers at the prayer stones.",morning:[bi,["","Today is a day of mercy where I come from. Of promises kept."],["","Have mercy on the Elder. On Mira. On me, for being afraid."]],async afterPrayer(n){await n.say(Ze,"Kidane Mihret. The Covenant of Mercy. At home, today, everyone would be in white, walking to church before the sun."),await n.say(Lt,"Mercy\u2026 even for Mira?"),await n.say(Ze,"Especially for Mira.")},hint:"Lumi keeps landing on the roof of your home. Your actual home. Rude.",fragment:"roof",tasks:[Ei(Tt(-30,70),Tt(20,-30)),{id:"cake",title:"A peace offering for Mira",desc:"Sena bakes the best honeycakes in the forest. Maybe mercy tastes like honey.",mira:1,steps:[{type:"talk",who:"sena",at:Z.sena,label:"Ask Sena",text:()=>"Ask Sena for a honeycake",async scene(n){await n.say(nn,"For MIRA? After what she did? \u2026You\u2019re a better fairy than me. It\u2019s on the stump by your door.")}},{type:"collect",kind:"cake",at:[Tt(-1,0)],label:"Take the cake",text:()=>"Take the honeycake"},{type:"talk",who:"mira",at:Tt(-30,-40),label:"Give it to Mira",text:()=>"Find Mira in the south woods",async scene(n){await n.say(Un,"What do you want."),await n.say(Lt,"Nothing. It\u2019s a honeycake. It\u2019s a day for mercy, apparently."),await n.narrate("Mira stares at the cake for a long time.",2600),await n.say(Un,"\u2026Nobody ever brings me anything.")}}]},{id:"petition",title:"Gather names for a petition",desc:"Ask three fairies to sign a plea to the Elder: let him leave in peace.",trust:1,steps:[0,1,2].map(n=>({type:"talk",who:"villager"+n,at:Z.village[n],label:"Ask to sign",text:()=>`Petition signatures (${n}/3)`,async scene(e){let t=[["Is he\u2026 nice? Sena says he\u2019s nice.","Fine. I\u2019ll sign."],["He watched our bonfire? From the trees? \u2026That\u2019s kind of sweet.","Give me the leaf."],["I don\u2019t trust sky-things. But I trust you, Kristi.","There. Signed."]][n];await e.say("Fairy",t[0],{cls:"sena"}),await e.say("Fairy",t[1],{cls:"sena"})}}))},{id:"candles",title:"Light candles at the prayer stones",desc:"Three glow-candles for his feast day. He doesn\u2019t know you\u2019re doing this.",bond:1,steps:[{type:"collect",kind:"petal",at:Ns(Z.prayer,1.6,3,.5),label:"Light",text:(n,e)=>`Candles (${n}/${e})`}]}],async evening(n){await n.narrate("Kirubel pats his pockets. Then pats them again. His face goes pale.",3e3),await n.say(Ze,"My hand cross. It was here. It was right here \u2014"),await n.calmTest(["Kirubel, calm down, it\u2019s just a\u2014","Breathe. Let\u2019s retrace your steps. Together."],async()=>{await n.say(Ze,"It\u2019s not just anything."),await n.narrate("They find it under his blanket. He doesn\u2019t say much for a while.",3e3)},async()=>{await n.narrate("Workbench. Wreck. Prayer stones. Blanket. There \u2014 under the moss blanket.",3200),await n.say(Ze,"You were calm for me. Thank you."),n.S.bond+=1},"his lost cross")},question:4,night:[["","For mercy given, and mercy received."],["","And thank You for her. I keep saying it. I keep meaning it."]]},7:{title:"Day 7",sub:"Four nights until the full moon.",intro:"Heavy clouds sit on the horizon. The air feels like a held breath.",morning:[bi,["","There is a storm coming. Let it pass gently."],["","And if it doesn\u2019t, let us be gentle with each other."]],async afterPrayer(n){await n.say(Ze,"The hull is almost sealed. Four more nights. I can feel it."),await n.say(Lt,"Don\u2019t rush it."),await n.say(Ze,"I\u2019m not rushing."),await n.say(Ds,"*doubtful chirp*")},hint:"Lumi keeps disappearing toward a ring of glowing mushrooms far to the east.",fragment:"ring",dayLength:460,tasks:[Ei(Tt(55,60),Tt(-60,-60)),{id:"tie",title:"Tie down the ship\u2019s hull",desc:"Vines and patience. If the wind comes, this could save days of work.",steps:[{type:"hold",at:Tt(43,-48),secs:6,label:"Hold to tie",text:()=>"Tie down the hull",effect:"tie"}]},{id:"moss",title:"Gather dry moss",desc:"For bedding, for tea, for anything. It will be a wet night.",steps:[{type:"collect",kind:"wood",at:Ns(Tt(-15,-45),4,3),label:"Gather",text:(n,e)=>`Dry moss (${n}/${e})`}]},{id:"warka7",title:"Check on Grandmother Warka",desc:"Old trees feel storms coming before anyone else.",steps:[{type:"talk",who:"warka",at:Z.warka,radius:5.5,label:"Speak to Warka",text:()=>"Visit Grandmother Warka",async scene(n){await n.say(Hi,"A storm is coming, little one. Not only in the sky."),await n.say(Hi,"When it breaks what you built, remember: the building was never the point. The builders were.")}}]}],event:{at:.45,async run(n){n.W.setStorm(1),n.W.lightning(),n.A.crash(),n.UI.toast("The storm breaks!",3e3),await n.narrate("The sky cracks open. Rain hammers the forest.",2400),n.done("tie")?n.D.reflect.storm="held":(n.S.ship=Math.max(0,n.S.ship-2),n.D.reflect.storm="hurt"),n.addTask({id:"shelter",title:"Shelter the ship parts",desc:"",urgent:!0,steps:[{type:"holds",at:[n.V(35,-50),n.V(47,-39),n.V(44,-53)],secs:2.5,label:"Hold to cover",text:(e,t)=>`Shelter the parts (${e}/${t})`}]})}},async evening(n){n.W.setStorm(.4),n.D.reflect.storm==="hurt"?(await n.narrate("A branch has come down across the hull. Days of work, crushed.",3200),n.S.restless+=3):(await n.narrate("The vines held. The hull is battered, but whole.",3e3),n.S.restless+=1),n.done("shelter")||(n.S.ship=Math.max(0,n.S.ship-1),await n.narrate("Some of the parts they stacked are lost in the mud.",2600)),await n.say(Ze,"Four nights. FOUR. And now this. I should have tied everything down myself, I should have \u2014"),await n.calmTest(["Why didn\u2019t you tie it down then?!","Breathe, Kirubel. We\u2019ll fix it together. One thing, then the next."],()=>n.say(Ze,"\u2026You\u2019re right. I should have. I\u2019m sorry."),async()=>{n.S.restless-=2,await n.say(Ze,"\u2026You sound like me. On a good day."),await n.say(Lt,"Today\u2019s not a good day. So I\u2019ll be you for both of us.")},"the storm damage")},question:5,night:[["","Even in the storm. Especially in the storm."],["","Thank You that she stayed dry. Thank You that she stayed."]]},8:{title:"Day 8",sub:"Three nights until the full moon.",intro:"The storm has washed everything clean. The forest is glittering.",morning:[bi,_c,["","For the morning after the storm. There is always one."]],async afterPrayer(n){await n.say(Ze,"You\u2019ve watched me pray for eight days now. Do you want to learn a word? Just one."),await n.say(Lt,"Only if you don\u2019t laugh at my accent."),await n.say(Ze,"I would never.",{sub:"He is clearly already trying not to laugh."})},hint:"Lumi keeps flying to the big round rock at the far north edge of the forest.",fragment:"ridge",tasks:[Ei(Tt(-75,45),Tt(25,-80)),{id:"word",title:"Learn a word from Kirubel",desc:"Just one word. In his language. Maybe two.",bond:1,steps:[{type:"talk",who:"kirubel",label:"Learn a word",text:()=>"Learn a word at his camp",async scene(n){let e=await n.choose(["\u1230\u120B\u121D \u2014 Selam (peace)","\u12A0\u1218\u1230\u130D\u1293\u1208\u1201 \u2014 Amesegnalehu (thank you)","\u12A5\u130D\u12DA\u12A0\u1265\u1214\u122D \u2014 Egziabher (God)"]),t=["Selam","Amesegnalehu","Egziabher"][e];n.S.flags.word=t,await n.say(Lt,t+"?"),await n.say(Ze,e===1?"Perfect. Almost perfect. Amesegnalehu.":"Perfect. That\u2019s exactly right."),await n.say(Lt,"You\u2019re smiling."),await n.say(Ze,"Because now you can say it back to me. Tonight. If you want.")}}]},{id:"bark",title:"Help Grandmother Warka shed old bark",desc:"After storms she sheds. It has to come away on its own, with a little help.",steps:[{type:"hold",at:Rf,secs:6,label:"Hold gently",text:()=>"Ease the old bark away",effect:"calmIfSteady"}]},{id:"speech",title:"Practise what to say to the Elder",desc:"Sena insists on playing the Elder. She has a fake beard. It\u2019s moss.",trust:1,steps:[{type:"talk",who:"sena",at:Z.sena,label:"Practise with Sena",text:()=>"Find Sena",async scene(n){await n.say(nn,"*deep voice* Kristi. Why should the sky-thing be shown mercy."),await n.choose(["Because he\u2019s done nothing wrong.","Because I trust him. And you trust me."])===1?(await n.say(nn,"*normal voice* Oh. Oh, that\u2019s good. That\u2019s really good."),n.S.trust+=1):await n.say(nn,"*deep voice* Hm. True, but the Elder will want more. *normal voice* Try again tomorrow.")}}]}],async evening(n){n.G.placePlayer(n.SPOTS.warka.x+4,n.SPOTS.warka.z-5),n.W.setTime(.8),n.G.place(n.W.kirubel,n.SPOTS.warka.x+5.2,n.SPOTS.warka.z-4,n.SPOTS.warka.x+4,n.SPOTS.warka.z-5),n.W.kirubel.setPose("stand"),n.G.faceKristi(n.W.kirubel.group.position),n.twoShot(),await n.UI.fade(!1,700),await n.narrate("That evening he asks to see Grandmother Warka. They sit beneath her branches as the stars come out.",3600),await n.say(Ze,"My turn to ask a question. Only one. And you can only answer yes, no, or\u2026"),await n.say(Lt,"You\u2019ll have to find out?"),await n.say(Ze,"Exactly."),await n.say(Ze,"If the ship flies\u2026 on the full moon\u2026 would you come with me?"),await n.choose(["Yes.","You\u2019ll have to find out."])===0?(n.S.flags.saidYes=!0,await n.narrate("He doesn\u2019t say anything. He doesn\u2019t have to.",2800)):(await n.say(Ze,"\u2026That\u2019s fair. That\u2019s very fair."),await n.narrate("He is smiling anyway.",2400)),n.S.bond+=1},eveningAway:!0,question:6,night:[["","For the question I asked, and the one she answered."],["",n=>n.S.flags.word?"She said "+n.S.flags.word+" back to me tonight. I will remember it.":"Whatever happens, I will remember this forest."]]},9:{title:"Day 9",sub:"Tomorrow is the full moon.",intro:"Neither of them says it out loud. Tomorrow.",morning:[bi,["","One more day. Let it be enough."],["","Whatever happens tomorrow, let us not waste today."]],async afterPrayer(n){n.S.miraKind>=2&&!n.S.flags.core?(n.W.mira.at(n.G.P.pos.x+2,n.G.P.pos.z+1.5,n.G.P.pos.x,n.G.P.pos.z),n.twoShot(n.W.mira.group.position),await n.say(Un,"Here. Take it before I change my mind."),await n.narrate("In her tiny arms: the star-core, glowing cyan.",2600),await n.say(Un,"I thought he\u2019d hurt you. Everyone said sky-things hurt people. But you\u2019ve been\u2026 happier. Since he fell."),await n.say(Un,"And you were kind to me. Even when I wasn\u2019t."),await n.say(Lt,"Thank you, Mira. Really."),await n.say(Un,"Don\u2019t make it weird."),n.S.flags.core=!0,n.D.reflect.mira="returned",n.W.mira.group.visible=!1,n.A.sparkle(),await n.say(Ze,"The core! Kristi, the core!")):n.S.flags.core||(await n.say(Ze,"Without the core, none of the rest matters. Mira must have hidden it somewhere."),await n.say(Ds,"*chirp!*",{sub:"Lumi keeps pointing west, toward the daisy meadow."}))},hint:"Lumi keeps circling the top of the old dead tree in the northwest.",fragment:"deadTree",tasks:[Ei(Tt(80,-35),Tt(-35,40)),{id:"core",title:"Find the stolen core",desc:"Mira hid it somewhere. Lumi keeps pointing toward the daisy meadow.",needsCore:!0,steps:[{type:"collect",kind:"core",at:[Tt(Z.meadow.x+2.4,Z.meadow.z+1)],label:"Take the core",text:()=>"Find the star-core",effect:"core"}]},{id:"ask",title:"Ask the Elder for mercy",desc:"He will go tomorrow either way. But how he goes \u2014 that the Elder can decide.",steps:[{type:"talk",who:"elder",at:Z.council,label:"Speak to the Elder",text:()=>"Go to the council stone",async scene(n){await n.say(Pn,"Kristi. You have come to ask me something.");let e=n.S.trust>=3?"Because I trust him. And you have always trusted me.":"Because he has done nothing wrong.";await n.say(Lt,"Let him leave in peace tomorrow. Or\u2026 let him stay, if he chooses. "+e),n.S.trust>=3?(n.S.flags.elderBlessing=!0,await n.say(Pn,"\u2026The petition. The petals. The way you spoke to me at the crash."),await n.say(Pn,"Very well. Tomorrow, the forest will not make him do anything. He may choose.")):(await n.say(Pn,"The forest has its ways, child. He goes through the path, or the forest decides for him."),await n.say(Pn,"I am sorry. I am old, and I am afraid. Both are slow to change."))}}]},ou(Tt(20,-55),4,"Pack moonleaf for his journey","Enough for the whole trip home. However long that is.")],async evening(n){await n.narrate("The ship is almost whole. It hums when the wind passes over it.",3e3),await n.say(Ze,"Kristi. What if it doesn\u2019t work tomorrow?"),await n.calmTest(["Then I\u2026 I don\u2019t know! Don\u2019t ask me that!","Then we\u2019ll be here. Together. That\u2019s not nothing."],()=>n.say(Ze,"You\u2019re right. I shouldn\u2019t have asked."),()=>n.say(Ze,"No. That\u2019s not nothing at all."),"his doubt"),await n.narrate("Grandmother Warka\u2019s voice drifts across the clearing, soft as wind:",2600),await n.say(Hi,"Tomorrow will ask three things of you, little one. Calm when it breaks. Hands that finished what they started. And a heart that knows how to kneel beside his.")},night:[["","Tomorrow is in Your hands. So is she."],["","Thank You for every one of these ten days."]]},10:{title:"Day 10",sub:"The full moon rises tonight.",intro:"The last morning. He prays for a very long time.",morning:[bi,_c,["","For the forest. For the fall. For her."],["","Whatever tonight brings, it has already been worth it."]],async afterPrayer(n){await n.say(Ze,"Tonight, then."),await n.say(Lt,"Tonight."),await n.say(Ds,"*very quiet chirp*")},hint:null,fragment:null,dayLength:360,tasks:[Ei(Tt(-10,-50),Tt(60,0)),{id:"core10",title:"Find the stolen core",desc:"There is still time. Lumi keeps pointing toward the daisy meadow.",needsCore:!0,steps:[{type:"collect",kind:"core",at:[Tt(Z.meadow.x+2.4,Z.meadow.z+1)],label:"Take the core",text:()=>"Find the star-core",effect:"core"}]},{id:"bye",title:"Say goodbye to Grandmother Warka",desc:"Just in case. You don\u2019t want to think about just in case.",steps:[{type:"talk",who:"warka",at:Z.warka,radius:5.5,label:"Speak to Warka",text:()=>"Visit Grandmother Warka",async scene(n){await n.say(Hi,"You came to say goodbye. To whom, I wonder."),await n.say(Hi,"Every time a child says she does not believe in fairies, somewhere a fairy fades. Did you know that?"),await n.say(Hi,"He believes in you, little one. I have watched. You will not fade.")}}]},{id:"sena10",title:"Sena wants to see you",desc:"She says it\u2019s urgent. With Sena, that could mean anything.",steps:[{type:"talk",who:"sena",at:Z.sena,label:"Talk to Sena",text:()=>"Find Sena",async scene(n){await n.say(nn,"Whatever happens tonight. Whatever you choose. I\u2019m your best friend. That\u2019s not changing."),await n.say(nn,"Also I\u2019m coming to watch. Obviously.")}}]}]}},Cf=[[{q:"What\u2019s something you\u2019re passionate about that most people don\u2019t know?",a:["You\u2019ll have to find out.","\u2026Fine. A hint. It has strings. It\u2019s older than both of us. And you\u2019ve already heard a little of it, every morning."]},{q:"Do you miss home?",a:["Yes.","\u2026Less than I thought I would."]},{q:"Are you scared of the Elder?",a:["No.","\u2026Should I be?"]}],[{q:"What\u2019s something you hope I don\u2019t ask you?",a:["Nothing.","You can ask me anything. That\u2019s the honest answer."]},{q:"Do you ever actually sleep?",a:["You\u2019ll have to find out."]},{q:"Is Lumi a girl?",a:["Yes.","And she\u2019s the boss of both of us."]}],[{q:"What\u2019s something you like that other people hate?",a:["\u2026That\u2019s not a yes or no question.","But: honesty. Most people only like it until it\u2019s about them."]},{q:"Do aliens dance?",a:["You\u2019ll have to find out."]},{q:"Was the bonfire really like home?",a:["Yes.","Better. Home didn\u2019t have you in it."]}],[{q:"Are you afraid of leaving?",a:["Yes."]},{q:"Did you mean it, about our worlds not being so far apart?",a:["Yes."]},{q:"Would you forgive Mira?",a:["Yes.","I already have."]}],[{q:"Do you think about me when you pray?",a:["Yes.","Every time. Even when I get lazy praying for myself, remembering I pray for you keeps me going."]},{q:"Is your home planet pretty?",a:["Yes.","Not as pretty as this forest. Don\u2019t tell it I said that."]},{q:"Do you like the gold stars?",a:["Yes.","I\u2019m building a whole constellation."]}],[{q:"If the ship works, will you go?",a:["You\u2019ll have to find out."]},{q:"Do you trust me?",a:["Yes."]},{q:"Were you scared, in the storm?",a:["Yes.","Less, once you were there."]}],[{q:"Would you stay, if you could?",a:["\u2026","You\u2019ll have to find out. But Kristi \u2014 I\u2019m thinking about it. More than I should."]},{q:"Are you happy here?",a:["Yes."]},{q:"Is this the last question?",a:["Yes.","Make it count. \u2026Oh. You just did."]}]];var P,qe,j,he,de=null,Rt="Kristi",lt="Kirubel",$a="Sena",Lf="Lumi",Df="Elder Thorne",If=3,U_=10,Pf=6,F_=6,mn=(n,e,t)=>new C(n,e,t),we=(n,e,t)=>qe.say(n,e,t),mt=(n,e)=>qe.narrate(n,e),bt=(n,e,t,i)=>mn(n.x+e,P.groundAt(n.x+e,n.z+i)+t,n.z+i),Nf=(n,e,t)=>Math.max(e,Math.min(t,n));function $n(n=j.kirubel.group.position,e=1.4,t=3.4){let i=P.P.pos,s=(i.x+n.x)/2,r=(i.z+n.z)/2,a=n.x-i.x,o=n.z-i.z,l=Math.hypot(a,o)||1;a/=l,o/=l;let c=[s-o*t,r+a*t],u=[s+o*t,r-a*t],d=g=>Math.hypot(g[0]-P.SPOTS.crash.x,g[1]-P.SPOTS.crash.z),h=d(c)>d(u)?c:u,f=Math.max(i.y,Math.min(n.y,i.y+1.5));P.shot(mn(h[0],Math.max(f,P.groundAt(h[0],h[1]))+1.5,h[1]),mn(s,f+1.05,r),e)}function fs(n={}){return Object.assign({get S(){return he},get D(){return de},G:P,W:j,UI:qe,A:P.A,SPOTS:P.SPOTS,V:(e,t)=>new C(e,0,t),at:bt,twoShot:$n,say:we,narrate:mt,choose:e=>qe.choose(e),calmTest:O_,addTask:e=>Bf(e),done:e=>!!(de&&de.done[e]),get over(){return!!(de&&de.over)},get partsFound(){return de?de.partsFound:0}},n)}async function O_(n,e,t,i){return await qe.choose(n)===0?(he.calm-=1,de&&(de.reflect.calmDown=de.reflect.calmDown||[]).push(i),e&&await e(),!1):(he.calm+=1,de&&(de.reflect.calmUp=de.reflect.calmUp||[]).push(i),t&&await t(),!0)}async function Uf(n,e){for(P=n,qe=n.UI,j=n.W,he=n.state,Object.assign(he,{joined:he.joined||0,ship:he.ship||0,trust:he.trust||0,miraKind:he.miraKind||0,questions:he.questions||[],snaps:he.snaps||{}}),e={day1_morning:"d1_morning",day1_day:"d1_day",day1_end:"d2_morning"}[e]||e,B_(),e==="prologue"&&(await k_(),e="d1_morning");;){let t=/^d(\d+)_(morning|day)$/.exec(e);if(t){let i=+t[1];if(t[2]==="morning"&&await V_(i),await X_(i),i===10){e="finale";continue}if(await ev(i),await nv(i),await iv(i)==="replay")return zf(i);e=`d${i+1}_morning`;continue}if(e==="finale"){await sv(),e="ending";continue}if(e==="ending"){await ov();return}return}}function B_(){j.setMoonDay(he.day||0),he.flags.healed&&Ff(!0),he.flags.lanterns&&j.posts.forEach(n=>n.userData.lit()),he.flags.goldStar&&(j.kirubel.goldStar.visible=!0),he.flags.bonfire&&j.setBonfire(he.flags.bonfire),j.setRepair(he.ship/Ti)}function Ff(n){let e=j.sapling,t=e.userData.leafMat,i=new et(5218378);if(n){t.color.copy(i),e.userData.leaf.scale.set(1.35,.85,1.35);return}let s=0,r=t.color.clone(),a=()=>{s+=.02,t.color.copy(r).lerp(i,Math.min(1,s));let o=1+.35*Math.min(1,s);e.userData.leaf.scale.set(o,.6+.25*Math.min(1,s),o),s<1&&requestAnimationFrame(a)};a()}function lu(){j.elder.group.visible=!1,j.mira.group.visible=!1,j.villagers.forEach(n=>n.group.visible=!1),j.sena.at(P.SPOTS.sena.x,P.SPOTS.sena.z)}async function k_(){P.freeze(!0),j.setTime(.02),j.setSmoke(0),j.wreck.visible=!1,j.kirubel.group.visible=!1,j.lumi.group.visible=!1,P.placePlayer(1.5,2.5,Math.PI*.8),P.shotNow(mn(6,4.5,14),mn(-2,2.5,-6)),await qe.fade(!1,2200),await mt("The Whispering Forest. A night like any other.",3200),P.shot(mn(-4,3.5,10),mn(40,16,-45),.8),await mt("Until it wasn\u2019t.",2400),P.A.whoosh();let n=bt(P.SPOTS.crash,0,1,0);await j.fallingStar(mn(-60,120,-230),n,3.2),P.A.crash(),P.shake(.5),j.wreck.visible=!0,j.setSmoke(1),await P.wait(1600),P.shot(mn(-1,2.6,6.5),mn(2,1.4,1.5),1.6),j.sena.group.position.set(3,P.groundAt(3,1.5)+1.5,1.5),j.sena.rebase(),await P.wait(900),await we($a,"Kristi! Did you SEE that?! The Elder says lights that fall from the sky bring ruin!"),await we(Rt,"It didn\u2019t look like ruin. It looked\u2026 lost."),await we($a,"You are not going out there. Kristi. KRISTI."),await we(Rt,"I\u2019ll be back before the fireflies sleep."),await we($a,"That\u2019s what you said last time, and you came back at noon!"),P.follow(),P.resetCam(),P.freeze(!1),P.targets=[P.SPOTS.crash],qe.objective("Follow the light to where it fell");let e=matchMedia("(pointer: coarse)").matches;qe.toast(e?"Left thumb to move \xB7 hold \u2726 to fly \xB7 drag on the right to look around":"WASD to move \xB7 hold Space to fly \xB7 drag to look \xB7 E to interact",6500),j.kirubel.group.visible=!0,j.kirubel.setPose("lying"),P.place(j.kirubel,P.SPOTS.kirubel.x,P.SPOTS.kirubel.z,P.SPOTS.crash.x,P.SPOTS.crash.z),j.lumi.group.visible=!0,j.lumi.group.position.copy(bt(P.SPOTS.kirubel,1,0,1)),await P.reach(P.SPOTS.crash,15),P.freeze(!0),P.targets=[],qe.objective(null);let t=j.kirubel.group.position;P.placePlayer(t.x-2.6,t.z+1.6),P.faceKristi(t),P.shot(bt(t,-4.5,2.4,4.5),bt(t,0,.6,0),1.2),await mt("Smoke. Silver metal. And beside it\u2026 someone."),await we(Rt,"Oh\u2026 you\u2019re hurt."),await qe.choose(["Kneel beside him","Call out softly first"])===1&&await we(Rt,"Hello\u2026? I won\u2019t hurt you. I promise."),P.placePlayer(t.x-1.3,t.z+.7),P.faceKristi(t),j.kirubel.group.rotation.y=Math.atan2(-1.3,.7),await we(Lf,"*chirp!*",{sub:"A small glowing creature peeks out from behind the wreck."}),await we(Rt,"And who are you, little light?"),$n(),j.kirubel.setPose("sit"),await we(lt,"\u1230\u120B\u121D\u2026",{sub:"Selam \u2014 peace."}),await we(lt,"Where\u2026 where am I?"),await we(Rt,"The Whispering Forest. You fell out of the sky. Very loudly."),await we(lt,"My ship \u2014 I have to fix it. Now. Tonight \u2014"),j.kirubel.setPose("lying"),await mt("He tries to stand. He doesn\u2019t get very far.",2600),j.kirubel.setPose("sit"),await we(Rt,"Not tonight. You can barely sit up."),await we(lt,"You don\u2019t understand, I can\u2019t just \u2014"),await we(Rt,"Rest first. Ship later. Those are the rules."),await we(lt,"\u2026Whose rules?"),await we(Rt,"Mine. I\u2019m the nurse now."),P.follow(),P.resetCam(),P.freeze(!1);let s=P.SPOTS.leaves.map((o,l)=>({p:o,item:j.makeItem("leaf",o),id:"leaf"+l,got:!1})),r=()=>{let o=s.filter(l=>l.got).length;qe.objective("Make him moonleaf tea",[{text:`Gather glowing moonleaves (${o}/3)`,done:o===3},{text:"Bring them back to him",done:!1}]),P.targets=s.filter(l=>!l.got).map(l=>l.p)};r(),await Promise.all(s.map(o=>(P.addInteract(o.id,o.p,"Pick"),P.waitInteract(o.id).then(()=>{o.got=!0,P.removeInteract(o.id),j.removeItem(o.item),P.A.chime(),r()})))),P.targets=[t],P.addInteract("tea",t,"Make tea"),await P.waitInteract("tea"),P.removeInteract("tea"),P.freeze(!0),P.targets=[],qe.objective(null),P.placePlayer(t.x-1.2,t.z+.8),P.faceKristi(t),j.kirubel.group.rotation.y=Math.atan2(-1.2,.8),$n(),await we(Rt,"Moonleaf tea. Drink it slowly. Slowly! It\u2019s not a race."),await we(lt,"Everything is a race when you\u2019re stranded."),await mt("She wraps a blanket of soft moss around his shoulders.",2800),await we(Rt,"There. Warm tea, the thickest blanket in the forest, and no getting up. Doctor\u2019s orders."),await we(lt,"I thought you said nurse."),await we(Rt,"I got promoted."),await we(lt,"\u2026You\u2019re not afraid of me?"),await we(Rt,"Should I be?"),await we(lt,"Your kind are. I saw them scatter into the trees. You came toward the smoke."),await we(Rt,"I\u2019ve never been very good at being like the others."),await mt("She is taller than every fairy she has ever known. She always has been.",3400),await we(lt,"I\u2019m Kirubel."),await we(Rt,"Kristi."),await we(lt,"I\u2019m\u2026 not from around here."),await we(Rt,"Yes. I noticed.");let a=await qe.choose(["Give him a gold star for following orders","Tell him to get some sleep"]);he.bond+=1,a===0?(j.kirubel.goldStar.visible=!0,he.flags.goldStar=!0,P.A.sparkle(),await we(Rt,"A gold star. For following orders. Don\u2019t let it go to your head."),await we(lt,"I\u2019ll wear it proudly.")):(await we(Rt,"Now sleep. Fairy\u2019s orders."),await we(lt,"Is that higher than nurse?"),await we(Rt,"Much higher.")),await we(lt,"Kristi\u2026 which way is east?"),await we(Rt,"East? That way, where the sun comes up. Why?"),await we(lt,"In the morning, you\u2019ll see."),j.kirubel.setPose("sleep"),await mt("The fireflies go to sleep. So, finally, does he.",3200),await qe.fade(!0,1600),he.day=1,j.setMoonDay(1)}var z_=["Wait quietly beside him","Slip away and start the day early","Kneel and pray with him"],H_=["Sit beside him until he\u2019s done","Go home and get some sleep","Kneel and pray with him"],G_=n=>n>=4&&he.waited>=4;async function Of(n,e){let t=G_(n)?[e[0],e[1],e[2]]:[e[0],e[1]],i=await qe.choose(t),s=P.SPOTS.prayer;return i===0?(he.calm+=1,he.waited+=1,he.restless-=2):i===1?he.restless-=1:(he.calm+=2,he.waited+=1,he.joined+=1,he.restless-=3,he.bond+=1),i!==1&&P.placePlayer(s.x-1.1,s.z+1.3,Math.PI/2),he.restless=Nf(he.restless,0,10),i}async function V_(n){let e=Ai[n];P.freeze(!0),he.day=n,j.setMoonDay(n);let t=JSON.parse(JSON.stringify(he));delete t.snaps,t.checkpoint=`d${n}_morning`,he.snaps[n]=t,n>1&&(he.restless=Nf(he.restless+3,0,10)),he.checkpoint=`d${n}_morning`,P.save(),j.setStorm(0),j.wreck.visible=!0,j.kirubel.group.visible=!0,j.lumi.group.visible=!0,lu(),he.flags.bonfire&&(he.flags.bonfire=1,j.setBonfire(1)),P.P.energyMax=100,P.P.drain=1,P.P.energy=100;let i=P.SPOTS.prayer;P.place(j.kirubel,i.x,i.z,i.x+10,i.z),j.kirubel.setPose("pray"),P.placePlayer(i.x-3.2,i.z+2.4),P.faceKristi(i),j.setTime(.245),P.shotNow(bt(i,-7,2.2,-3.5),bt(i,10,3,0)),await qe.fade(!1,1200),await qe.dayCard(e.title,e.sub),P.A.startPrayerMusic(),e.intro&&await mt(e.intro,3400),P.shot(bt(i,4.5,1.9,3.5),bt(i,0,1.3,0),.6);for(let[a,o]of e.morning)await qe.prayerLine(a,typeof o=="function"?o(fs()):o,a?5e3:4600);let s=await Of(n,z_);he.flags.leftEarly=s===1,s===0?(P.shot(bt(i,-6,2,2),bt(i,2,1.4,0),.5),await mt(he.waited<=1?"She doesn\u2019t know the words. She stays anyway.":"She stays beside him, quiet, while the sun comes up.",3400)):s===2?(P.shot(bt(i,-6,2,2),bt(i,2,1.4,0),.5),await mt(he.joined<=1?"She kneels beside him. She doesn\u2019t know the words, so he whispers them slowly, for her.":"She kneels beside him. She knows some of the words now.",3800)):await mt("She tiptoes away. There is so much to do.",3e3),P.A.stopPrayerMusic(),s===1&&(await qe.fade(!0,600),P.placePlayer(i.x-4,i.z+3)),j.kirubel.setPose("stand");let r=j.kirubel.group.position;j.kirubel.group.rotation.y=Math.atan2(P.P.pos.x-r.x,P.P.pos.z-r.z),P.faceKristi(r),$n(void 0,s===1?50:1.2),s===1&&await qe.fade(!1,600),await e.afterPrayer(fs({prayed:s!==1,knelt:s===2})),e.hint&&(await we(Lf,"*chirp!*"),await we(lt,e.hint)),n===2&&await we(lt,"Oh \u2014 and the ship parts I can\u2019t reach. If you see any glinting in the forest\u2026"),he.checkpoint=`d${n}_day`,P.save()}var W_=n=>{if(n==="meadow")return mn(P.SPOTS.meadow.x,0,P.SPOTS.meadow.z+1.9);if(n==="ring")return mn(P.SPOTS.ring.x,0,P.SPOTS.ring.z);let e=eu.find(t=>t.id===n);return mn(e.x,0,e.z)};async function X_(n){let e=Ai[n];P.freeze(!0),j.setTime(.29),j.setStorm(0),j.kirubel.group.visible=!0,j.lumi.group.visible=!0;let t=P.SPOTS.kirubel;P.place(j.kirubel,t.x,t.z,P.SPOTS.crash.x,P.SPOTS.crash.z),j.kirubel.setPose("work"),P.near(t,25)||P.placePlayer(t.x-3,t.z+3),P.shotNow(bt(t,-4,2.4,5),bt(t,0,1,0)),await qe.fade(!1,600);let i=e.tasks.filter(o=>!o.needsCore||he.flags.coreStolen&&!he.flags.core).map(o=>o.needsCore?Object.assign({},o,{required:!0}):o),s=await qe.planner(i,If);de={n,chosen:s,tasks:[],done:{},partsFound:0,over:s.length>If,sunset:!1,busy:!1,reflect:{},ids:new Set,items:[],lines:{},pend:{},kirubelSteps:[],ended:!1},de.over?(P.P.energyMax=55,P.P.drain=1.4,P.P.energy=55,await we(Rt,["Four things. Easy. Probably.","I can do it all. I always can. \u2026Mostly.","How hard can four things be?"][n%3])):await we(Rt,s.length===1?"One thing. Done properly.":"Okay. One thing, then the next."),j.kirubel.setPose("work"),i.filter(o=>s.includes(o.id)).forEach(o=>Bf(o)),e.fragment&&!he.fragments.includes(n)&&Z_(n,W_(e.fragment));let r=P.addInteract("kirubelDay",t,"Talk",{radius:3,onUse:()=>J_()});de.ids.add("kirubelDay"),de.kInt=r,pn(),qe.plannerButton(!0),document.getElementById("btnPlanner").onclick=()=>qe.showPlan(de.lineList||[]);let a=(e.dayLength||480)*(he.flags.leftEarly?1.2:1);if(P.dayClock={running:!0,elapsed:0,dur:a,from:.29,to:.74,onEnd:()=>{de.sunset=!0,qe.toast("The sun is setting. Head back to Kirubel.",4500),pn()}},P.follow(),P.resetCam(),P.freeze(!1),qe.toast(de.over?"Kristi took on too much. Her wings tire faster today.":"Tap \u2600 to see your plan. Talk to Kirubel when you\u2019re done.",4500),e.event){let o=()=>{if(de.ended)return;let l=P.dayClock.elapsed/P.dayClock.dur;!de.evFired&&l>=e.event.at&&!de.busy&&!P.P.frozen&&(de.evFired=!0,q_(e.event)),requestAnimationFrame(o)};o()}await new Promise(o=>{de.endDay=o}),de.ended=!0,P.dayClock.running=!1,de.ids.forEach(o=>P.removeInteract(o)),de.items.forEach(o=>j.removeItem(o)),de.frag&&(j.removeItem(de.frag),P.removeInteract("frag")),j.warkaEyes(!1),lu(),qe.plannerButton(!1),P.targets=[],qe.objective(null),qe.holdRing(null)}async function q_(n){de.busy=!0,P.freeze(!0),await n.run(fs()),P.follow(),P.resetCam(),P.freeze(!1),de.busy=!1,pn()}function pn(){if(!de||de.ended)return;let n=de.tasks.map(s=>({text:de.lines[s.id]||s.title,done:!!de.done[s.id]})),e=de.tasks.every(s=>de.done[s.id]);de.lineList=n,qe.objective(de.sunset?"The sun is setting \u2014 go back to Kirubel":e?"All done! Go tell Kirubel":"Today",n),de.kInt&&(de.kInt.label=de.kirubelSteps.length?de.kirubelSteps[0].step.label:"Talk");let t=j.kirubel.group.position,i=[];!de.sunset&&!e&&de.tasks.forEach(s=>{!de.done[s.id]&&de.pend[s.id]&&i.push(...de.pend[s.id])}),P.targets=i.length?i:[t]}function Bf(n){de.tasks.push(n),(async()=>{for(let e=0;e<n.steps.length;e++){if(de.ended)return;await $_(n,n.steps[e],e)}de.ended||(de.done[n.id]=!0,n.trust&&(he.trust+=n.trust),n.bond&&(he.bond+=n.bond),n.mira&&(he.miraKind+=n.mira),P.A.sparkle(),pn())})(),pn()}function Y_(n){return n==="sena"?j.sena:n==="elder"?j.elder:n==="mira"?j.mira:n&&n.startsWith("villager")?j.villagers[+n.slice(8)]:null}function $_(n,e,t){let i=s=>`${n.id}_${t}_${s}`;return new Promise(s=>{let r=a=>{de.lines[n.id]=a,pn()};if(e.type==="collect"||e.type==="holds"){let a=e.at.length,o=0,l=new Set(e.at.map((u,d)=>d)),c=()=>{de.pend[n.id]=[...l].map(u=>e.at[u]),r(e.text?e.text(o,a):`${n.title} (${o}/${a})`)};e.at.forEach((u,d)=>{let h=e.noItem||e.type==="holds"?null:j.makeItem(e.kind,u);if(h&&de.items.push(h),e.type==="holds"&&!h){let f=j.makeItem("stack",u);de.items.push(f),e._stacks=e._stacks||[],e._stacks[d]=f}de.ids.add(i(d)),P.addInteract(i(d),u,e.label,{radius:e.radius||2.6,hold:e.type==="holds"?e.secs:0,onUse:()=>{P.removeInteract(i(d)),h&&j.removeItem(h),P.A.chime(),o++,l.delete(d),n.ship&&(de.partsFound++,qe.toast(`Ship part ${o} of ${a}`)),e.effect==="lantern"&&j.posts[d].userData.lit(),e.effect==="core"&&(he.flags.core=!0,qe.toast("The star-core! Still glowing.")),e.type==="holds"&&e._stacks&&e._stacks[d].userData.core.material.color.setHex(6982234),c(),o===a&&(setTimeout(pn,0),e.effect==="lantern"&&(he.flags.lanterns=!0,qe.toast("The hollow glows. Sena is delighted.")),delete de.pend[n.id],s())}})}),c()}else if(e.type==="hold")de.pend[n.id]=[e.at],pn(),r(e.text?e.text():n.title),de.ids.add(i(0)),P.addInteract(i(0),e.at,e.label,{hold:e.secs,radius:3,onUse:a=>{P.A.sparkle(),e.effect==="sapling"&&(Ff(!1),he.flags.healed=!0),e.effect==="bonfire"&&(j.setBonfire(1),he.flags.bonfire=Math.max(he.flags.bonfire||0,1)),a.released?qe.toast("It can\u2019t be rushed\u2026 but it\u2019s done."):(he.calm+=1,(de.reflect.patient=de.reflect.patient||[]).push(n.title),qe.toast("She didn\u2019t rush it.")),delete de.pend[n.id],s(),setTimeout(pn,0)}});else if(e.type==="visit")de.pend[n.id]=[e.at],pn(),r(e.text?e.text():n.title),de.ids.add(i(0)),P.addInteract(i(0),e.at,e.label,{onUse:()=>{P.removeInteract(i(0)),P.A.chime(),delete de.pend[n.id],s(),setTimeout(pn,0)}});else if(e.type==="talk"){if(r(e.text?e.text():n.title),e.who==="kirubel"){de.kirubelSteps.push({step:e,resolve:s}),de.pend[n.id]=[j.kirubel.group.position],pn();return}let a=Y_(e.who),o=e.at;a&&a.at(o.x,o.z),de.pend[n.id]=[o],pn(),de.ids.add(i(0)),P.addInteract(i(0),o,e.label,{radius:e.radius||2.8,onUse:async()=>{if(!de.busy){if(de.busy=!0,P.removeInteract(i(0)),P.freeze(!0),e.who==="warka"){j.warkaEyes(!0);let l=P.SPOTS.warka,c=mn(-l.x,0,-l.z).normalize();P.shot(mn(P.P.pos.x+c.x*3+c.z*2,P.P.pos.y+2.2,P.P.pos.z+c.z*3-c.x*2),mn(l.x,P.groundAt(l.x,l.z)+3.8,l.z),1.2)}else a&&(a.group.rotation.y=Math.atan2(P.P.pos.x-a.group.position.x,P.P.pos.z-a.group.position.z),P.faceKristi(a.group.position),$n(a.group.position));await e.scene(fs()),j.warkaEyes(!1),P.follow(),P.freeze(!1),de.busy=!1,delete de.pend[n.id],s(),setTimeout(pn,0)}}})}})}var K_=0;function Z_(n,e){let t=j.makeItem("star",e);de.frag=t,P.addInteract("frag",e,"Take the star",{radius:2.4,y:Ls(e.x,e.z,99),onUse:async()=>{P.removeInteract("frag"),j.removeItem(t),de.frag=null,P.A.sparkle(),he.fragments.includes(n)||he.fragments.push(n),P.save(),P.freeze(!0),de.busy=!0,await qe.fragmentCard(n,xc[n-1]),P.freeze(!1),de.busy=!1,pn()}}),K_++}async function J_(){if(de.busy)return;de.busy=!0,P.freeze(!0);let n=j.kirubel.group.position;if(j.kirubel.setPose("stand"),j.kirubel.group.rotation.y=Math.atan2(P.P.pos.x-n.x,P.P.pos.z-n.z),P.faceKristi(n),$n(),de.kirubelSteps.length){let{step:r,resolve:a}=de.kirubelSteps.shift();await r.scene(fs()),a(),j.kirubel.setPose("work"),P.follow(),P.freeze(!1),de.busy=!1,pn();return}let e=Ai[de.n].event;if(e&&!de.evFired){de.evFired=!0,await e.run(fs()),j.kirubel.setPose("work"),P.follow(),P.resetCam(),P.freeze(!1),de.busy=!1,pn();return}let t=de.tasks.every(r=>de.done[r.id]);if(de.sunset||t){await we(lt,t?"You\u2019re back. And you look like someone who finished something.":"The sun\u2019s going down. Come sit."),de.busy=!1,de.endDay();return}let i=["Still working on it?","Lumi says you flew past three times.","You don\u2019t have to do everything before sunset, you know.","Did you eat? Fairies eat, right?","One thing, then the next."];if(await we(lt,i[Math.floor(Math.random()*i.length)]),await qe.choose(["Keep going","Call it a day"])===1){await we(lt,"Then sit. The rest will still be there tomorrow."),de.busy=!1,de.endDay();return}j.kirubel.setPose("work"),P.follow(),P.freeze(!1),de.busy=!1}var j_=["I tried to rush the hull today. Bent a bracket. Two hours of work, undone.","I couldn\u2019t sit still. I forced a panel and it cracked.","I worked too fast again. Something always breaks when I do."],Q_=["I worked slowly today. Everything I touched, held.","Slow and steady. The hull is starting to look like a hull.","Good day. Nothing broke. Not even me."];async function kf(){let n=j.kirubel.group.position;P.placePlayer(n.x-1.6,n.z+1.4),P.faceKristi(n),j.kirubel.setPose("sit"),j.kirubel.group.rotation.y=Math.atan2(-1.6,1.4),$n(void 0,30)}async function ev(n){let e=Ai[n];P.freeze(!0),j.setTime(.76);let t=P.SPOTS.kirubel;P.place(j.kirubel,t.x,t.z),await kf();let i=de.tasks.filter(c=>!c.urgent),s=i.filter(c=>de.done[c.id]).length,r=i.length-s;he.steadiness+=s-r,de.reflect.done=s,de.reflect.unfinished=r;let a=i.find(c=>c.ship),o=a&&a.cracked&&de.partsFound===2,l=de.partsFound-(o?1:0);he.ship+=l,de.reflect.parts=l,a&&de.partsFound>0&&!o?await we(lt,l>=2?"Two more pieces. It\u2019s starting to look like a ship again.":"One more piece. One step closer."):!a&&n<10&&await we(lt,["No ship parts today. That\u2019s alright. The ship isn\u2019t going anywhere. Neither am I, apparently.","No parts today. Lumi and I polished what we have. Very shiny.","No new parts. The moon won\u2019t wait forever, but tonight it can."][n%3]),he.restless>=6?(he.ship=Math.max(0,he.ship-1),de.reflect.rushed=!0,await we(lt,j_[n%3]),await mt("He doesn\u2019t sit still for long. He keeps getting up. He keeps pacing.",3e3)):await we(lt,Q_[n%3]),r?(await we(Rt,de.over?"I tried to do everything. I did half of it. Badly.":"I didn\u2019t finish everything I planned."),await qe.choose(["It\u2019s fine. I\u2019ll just do it all tomorrow.","Tomorrow I\u2019ll pick less. And finish it."])===0?(he.steadiness-=1,de.reflect.plan="all",await we(lt,"Isn\u2019t that what you said about today?"),await we(Rt,"\u2026Maybe.")):(he.steadiness+=1,de.reflect.plan="less",await we(lt,"One thing. Then the next."),await we(Rt,"Don\u2019t look so pleased with yourself."))):s&&(await we(Rt,["I did everything I planned. Everything!","Done. All of it. Without running on empty.","Every single thing. I\u2019m almost proud of myself."][n%3]),await we(lt,["Then tonight, you rest. Fairy\u2019s orders.","Gold star.","Almost? Be proud, Kristi."][n%3])),e.evening&&((e.eveningAtFire||e.eveningAway)&&await qe.fade(!0,700),await e.evening(fs())),e.question!==void 0&&await tv(e.question),j.setRepair(he.ship/Ti)}async function tv(n){let e=j.kirubel.group.position;if(Math.hypot(e.x-P.P.pos.x,e.z-P.P.pos.z)>6){await qe.fade(!0,600),j.setTime(.8);let s=P.SPOTS.kirubel;P.place(j.kirubel,s.x,s.z),await kf(),await qe.fade(!1,600)}he.questions.length===0?(await we(lt,"Let\u2019s play a game. Each night you can ask me one question. Anything."),await we(lt,"But I can only answer yes, no, or\u2026 \u201Cyou\u2019ll have to find out.\u201D"),await we(Rt,"That\u2019s a terrible game."),await we(lt,"Seven questions. One for every night we have left before the moon gets too full to think. Choose wisely.")):await we(Rt,`Question number ${he.questions.length+1}.`);let t=Cf[n],i=await qe.choose(t.map(s=>s.q));he.questions.push(n*10+i);for(let s of t[i].a)await we(lt,s);he.questions.length===7&&await we(Rt,"That was seven.",{sub:"She is already thinking of an eighth."})}async function nv(n){let e=Ai[n];await qe.fade(!0,900),j.setTime(.86),j.setStorm(n===7?.3:0),lu();let t=P.SPOTS.prayer;P.place(j.kirubel,t.x,t.z,t.x+10,t.z),j.kirubel.setPose("stand"),P.placePlayer(t.x-2.4,t.z+2.2),P.faceKristi(t),P.shotNow(bt(t,-4.5,1.8,4),bt(t,0,1.2,0)),await qe.fade(!1,900),j.kirubel.group.rotation.y=Math.atan2(-2.4,2.2),(n===1||n%3===0)&&await we(lt,"\u1230\u120B\u121D \u1208\u12AA, Kristi.",{sub:"Selam leki \u2014 peace be with you."}),he.flags.word&&n>=8&&await we(Rt,he.flags.word+", Kirubel.",{sub:"She says it carefully. He smiles like she gave him something."}),j.kirubel.group.rotation.y=Math.PI/2,j.kirubel.setPose("pray"),P.A.startPrayerMusic(),P.shot(bt(t,3.5,1.7,3),bt(t,0,1.2,0),.5),await qe.prayerLine(Ai[1].morning[0][0],Ai[1].morning[0][1],4600);for(let[s,r]of e.night||[])await qe.prayerLine(s,typeof r=="function"?r(fs()):r,4400);let i=await Of(n,H_);de.reflect.night=i,i===0?await mt(["She sits in the grass beside him. The stars come out one by one, as if they were listening too.","She sits beside him until the last word.","She stays. She is getting good at staying."][n%3],3800):i===2?await mt(["She kneels beside him. Two voices, one very quiet prayer.","Side by side, in the dark, facing east.","He says the words. She says the ones she knows."][n%3],3800):await mt("From her window, she can still see the glow of his little camp.",3200),P.A.stopPrayerMusic(),j.kirubel.setPose("sleep"),P.dayClock=null}async function iv(n){let e=de.reflect,t=[];return e.unfinished?de.over?t.push(["\u2600","Kristi tried to fit everything in, and ran herself thin."]):t.push(["\u2600","Kristi left a few things unfinished."]):t.push(["\u2600",de.over?"Kristi fit everything in. Barely. Her wings are exhausted.":e.done?"Kristi finished everything she planned.":"Kristi spent the day wandering."]),e.plan==="less"&&t.push(["\u2726","Tomorrow, she\u2019ll choose more carefully."]),e.plan==="all"&&t.push(["\u2726","Tomorrow is already looking crowded."]),(e.calmUp||[]).forEach(s=>t.push(["\u2741",`When things went wrong \u2014 ${s} \u2014 she stayed calm.`])),(e.calmDown||[]).forEach(s=>t.push(["\u2741",`${s[0].toUpperCase()+s.slice(1)} got to her. Patience is still a work in progress.`])),e.spell==="gentle"&&t.push(["\u2726","Her Sleep Focus Spell worked perfectly."]),t.push(["\u271D",e.night===1?"She went home before his prayer ended tonight.":e.night===2?"She knelt and prayed with him tonight.":"She stayed beside him for his prayer."]),t.push(["\u263E",he.restless<=3?"Kirubel is at peace tonight.":he.restless<=6?"Kirubel is restless, but holding on.":"Kirubel can barely sit still. The moon is getting closer."]),t.push(["\u2699",`Kirubel\u2019s ship: ${Math.min(he.ship,Ti)} of ${Ti} parts${e.rushed?" (he rushed, and broke one)":""}.`]),he.flags.coreStolen&&t.push(["\u25C8",he.flags.core?"The star-core is safe.":"The star-core is still missing."]),t.push(["\u2726",`Star fragments: ${he.fragments.length} of 10`]),t.push(["\u25CB",n===9?"Tomorrow, the moon is full.":`The moon grows. ${10-n} ${10-n===1?"night remains":"nights remain"}.`]),he.checkpoint=`d${n+1}_morning`,he.day=n,P.save(),await qe.card(`<h2>Day ${n} complete</h2><h3>How the day went</h3><ul class="reflect">${t.map(([s,r])=>`<li><i>${s}</i>${r}</li>`).join("")}</ul>`,[`Continue to Day ${n+1}`,`Replay Day ${n}`])===1?"replay":(await qe.fade(!0,900),"next")}function zf(n){let e=he.snaps[n];if(!e)return;let t=JSON.parse(JSON.stringify(e));t.snaps=he.snaps,t.checkpoint=`d${n}_morning`,yc(t),location.href=location.pathname+"?autostart=continue"}async function Ka(n,e){return new Promise(t=>{let i=performance.now(),s=()=>{let r=Math.min(1,(performance.now()-i)/n);e(r),r<1?requestAnimationFrame(s):t()};s()})}async function sv(){P.freeze(!0),he.checkpoint="finale",he.day=10,P.save(),await qe.fade(!0,800),j.setTime(.85),j.setMoonDay(12),j.setStorm(0),j.setRepair(Math.min(1,he.ship/Ti));let n=P.SPOTS.kirubel,e=P.SPOTS.crash;P.place(j.kirubel,e.x-3.4,e.z+2.6,e.x,e.z),j.kirubel.setPose("stand"),P.placePlayer(e.x-5.4,e.z+4.4),P.faceKristi(j.kirubel.group.position),j.sena.at(e.x-7,e.z+6.5,e.x,e.z);let t=he.trust>=3;t&&(j.villagers.forEach((c,u)=>c.at(e.x-9+u*1.6,e.z+8-u,e.x,e.z)),j.elder.at(e.x-4,e.z+8.5,e.x,e.z)),he.miraKind>=2&&j.mira.at(e.x-10.5,e.z+5,e.x,e.z),P.shotNow(bt(e,-16,6,14),bt(e,0,6,0)),await qe.fade(!1,1500),await qe.dayCard("The Full Moon","Night ten."),await mt("The full moon rises over the forest. It is enormous. It fills half the sky.",3600),j.skyPath(.55),P.A.whoosh(),P.shot(bt(e,-14,3,12),bt(e,0,14,0),.6),await mt("And above the crash site, exactly as the Elder said, the sky opens.",3600),t?await mt("Behind them, lanterns. The Elder, the whole village. Even the fairies who were afraid came to watch.",3800):await mt("Sena is there, hiding behind a fern, pretending she isn\u2019t crying already.",3400),$n(void 0,1),await we(lt,"Now or never."),P.shot(bt(e,-9,3.5,7),bt(e,0,1.5,0),.8),P.A.crash(),P.shake(.25),await Ka(2200,c=>j.setLift(Math.sin(c*Math.PI)*1.2)),j.setLift(0);let i=he.flags.core?he.ship<Ti?"hull":"spark":"core";await mt("The engine coughs. The light flickers. The ship drops back into the crater.",3400),$n(void 0,1.2),await we(lt,i==="core"?"The core. Without the star-core there\u2019s nothing to light. Kristi, there\u2019s nothing\u2014":i==="hull"?"The hull \u2014 there are too many gaps. It won\u2019t hold. Not enough parts, not enough time\u2014":"It won\u2019t catch. Something\u2019s missing. One spark. One piece. I don\u2019t know what!");let s=await qe.choose(["NO! Not now \u2014 not after everything!","\u2026Breathe. One thing, then the next."]),r=s===1&&he.calm>=U_;s===0?(he.calm-=1,await mt("She shouts at the ship, at the moon, at the whole sky. Nothing listens.",3400)):r?(await mt("She breathes. Once. Twice. And in the quiet, she hears Lumi chirp \u2014 pointing up.",3600),P.A.sparkle(),await j.fallingStar(bt(e,-30,60,-40),bt(P.P.pos,0,1.2,0),2.6),P.A.chime(),await mt("The last star fragment falls, slow as a feather, straight into her hands.",3400),he.fragments.includes(10)||he.fragments.push(10),await qe.fragmentCard(10,xc[9])):await mt("She tries to breathe. Her hands won\u2019t stop shaking. Ten days of patience, and it isn\u2019t quite enough.",3800),j.kirubel.group.rotation.y=Math.PI/2,j.kirubel.setPose("pray"),P.A.startPrayerMusic(),P.shot(bt(j.kirubel.group.position,3,1.8,3),bt(j.kirubel.group.position,0,1.2,0),.6),await mt("He does the only thing left to do. He turns east, and he prays.",3400);let a=he.waited>=F_,o=!1;a?(o=await qe.choose(["Kneel and pray with him","Watch from a step away"])===0,o?(P.placePlayer(j.kirubel.group.position.x-1,j.kirubel.group.position.z+1.1,Math.PI/2),await mt("She kneels beside him. She knows the words now. Two voices, one prayer.",3600),await qe.prayerLine(Ai[1].morning[0][0],Ai[1].morning[0][1],4200),await qe.prayerLine("","Amen.",2600)):await mt("She stays a step away and watches. It feels like the right thing. It isn\u2019t.",3400)):await mt("She wants to kneel beside him. But she doesn\u2019t know the words. She never stayed long enough to learn them.",4200),P.A.stopPrayerMusic();let l=r&&o&&he.ship>=Ti&&he.flags.core&&he.steadiness>=Pf;he.endingWhy={calm:r,prayed:o,ship:he.ship>=Ti,core:!!he.flags.core,steady:he.steadiness>=Pf},l?await rv(t):await av(t)}async function rv(n){let e=P.SPOTS.crash;j.kirubel.setPose("stand"),await mt("The star fragment in her hands begins to glow. Brighter. Brighter.",3200),P.A.sparkle(),P.shake(.2),j.skyPath(.95),await Ka(2500,r=>j.setLift(r*1.6)),P.shot(bt(e,-10,3,9),bt(e,0,2,0),.8),await mt("The ship lifts out of the crater \u2014 and this time, it holds.",3200),$n(void 0,1),await we(lt,"It\u2019s working. Kristi \u2014 it\u2019s working!"),await we(lt,"The path is open. I can go home.");let t=he.flags.elderBlessing?["Go with him","Ask him to stay"]:["Go with him"];he.flags.elderBlessing||await mt("The Elder\u2019s words echo: through the path, or the forest decides for him. Staying is not a choice the forest will allow.",4e3),await qe.choose(t)===0?(he.ending="happy_go",await we(lt,he.flags.saidYes?"You said yes, under the old tree. I didn\u2019t dare believe it.":"You told me I\u2019d have to find out."),await we(Rt,"Now you know."),await we($a,"You\u2019d BETTER bring her back to visit!",{sub:"Sena, sobbing openly."}),await we(lt,"Every full moon. I promise."),await mt("She takes his hand. Her wings catch the light of the sky-path.",3200),P.shot(bt(e,-26,8,22),bt(e,0,20,0),.5),P.P.frozenFly=!0,await Ka(6e3,r=>{let a=1.6+r*r*70,o=P.groundAt(e.x,e.z);j.setLift(a),P.P.pos.set(e.x-.8,o+a+1.4,e.z+.8),P.P.vel.set(0,0,0),j.kirubel.group.position.set(e.x+.8,o+a+1.4,e.z+.8)}),P.P.frozenFly=!1,await mt("Up the path of light they go, past the treetops, past the clouds, toward the moon.",3800)):(he.ending="happy_stay",await we(Rt,"Stay. Our forest needs you here."),await we(Rt,"We\u2019ll destroy your spaceship if necessary."),await we(lt,"Please don\u2019t. I just fixed it."),await mt("The engine hums. The path waits. He looks at the sky for a long time.",3400),await we(lt,"Some people show up exactly when you need them. I\u2019m not leaving mine."),await Ka(2500,r=>j.setLift(1.6*(1-r))),j.skyPath(0),await we(Df,"Then the forest has one more fairy. A very tall, very strange, very blue one."),await we($a,"I KNEW IT. I knew it from the first night!"),await mt("One by one, the lanterns rise into the sky where the path used to be.",3400)),P.A.startPrayerMusic();let s=xc.map((r,a)=>he.fragments.includes(a+1)?r:null);await qe.fade(!0,1200),await qe.constellation(s,Tf,Af),P.A.stopPrayerMusic(),he.checkpoint="ending",P.save()}async function av(n){let e=P.SPOTS.crash;j.kirubel.setPose("stand"),he.ending="sad",await mt("The path above them begins to flicker.",2800),n?await we(Df,"The path is closing! Sky-thing, it is now or never!"):await mt("Somewhere in the dark, the forest itself begins to stir. It has made its promise. It will keep it.",3600),$n(void 0,1),await we(lt,"Kristi. Look at me."),await we(lt,"If I don\u2019t go now, I never will. The forest won\u2019t let me stay."),await we(Rt,"But the ship \u2014"),await we(lt,"The path will carry me. Maybe not gently. But it will."),await we(lt,"It was worth it. All ten days. Every single one."),await we(lt,"\u1230\u120B\u121D \u1208\u12AA, Kristi.",{sub:"Peace be with you."}),P.shot(bt(e,-18,4,16),bt(e,0,10,0),.6),j.skyPath(.9),P.shake(.3),P.A.crash(),await Ka(2e3,t=>j.setLift(t*3)),P.A.whoosh(),j.wreck.visible=!1,j.kirubel.group.visible=!1,j.lumi.group.visible=!1,await j.fallingStar(bt(e,0,3,0),mn(-60,160,-260),3.4),j.skyPath(0),j.setLift(0),$n(P.SPOTS.prayer,.6),await mt("The light goes up, the way it came down. And then the sky is just the sky again.",4e3),await mt("Some stars only fall once.",3400),he.checkpoint="ending",P.save()}async function ov(){P.freeze(!0);let n=(he.ending||"").startsWith("happy"),e=he.endingWhy||{},t=[];e.calm||t.push("stay calm when everything breaks"),e.prayed||t.push("stay for more of his prayers \u2014 enough to kneel beside him at the end"),e.ship||t.push(`help him find more ship parts (${Ti} needed)`),e.core||t.push("find the stolen star-core (or be kind to Mira)"),e.steady||t.push("finish the tasks she picks each day (choosing fewer helps)");let i=n?`<div style="text-align:center"><h2>Where the Stars Fell</h2><h3>${he.ending==="happy_stay"?"He stayed.":"They went together."}</h3>
       <p>Star fragments found: ${he.fragments.length} of 10</p><p style="font-family:var(--serif);font-style:italic;font-size:20px;margin-top:14px">For Kristi.</p></div>`:`<div style="text-align:center"><h2>The End</h2><h3>\u2026but not the only one.</h3></div>
       <p>There is another ending. To reach it, Kristi might need to:</p><ul class="reflect">${t.map(a=>`<li><i>\u2726</i>${a}</li>`).join("")}</ul>
       <p>Star fragments found: ${he.fragments.length} of 10</p>`,s=n?["Play again","See the other choices (from Day 8)"]:["Try again from Day 8","Start over"],r=await qe.card(i,s);if(n&&r===1||!n&&r===0)return zf(8);try{localStorage.removeItem("wtsf.save.v1")}catch{}location.href=location.pathname}var Gi=new lc({antialias:window.devicePixelRatio<2,powerPreference:"high-performance"});Gi.setPixelRatio(Math.min(window.devicePixelRatio,1.6));Gi.setSize(window.innerWidth,window.innerHeight);Gi.toneMapping=Da;Gi.toneMappingExposure=1.2;document.getElementById("game").appendChild(Gi.domElement);var Zn=new hn(60,window.innerWidth/window.innerHeight,.1,900);addEventListener("resize",()=>{Gi.setSize(innerWidth,innerHeight),Zn.aspect=innerWidth/innerHeight,Zn.updateProjectionMatrix()});var li=vf(Gi),qf=li.scene,ve={pos:new C(1.5,0,1.5),vel:new C,yaw:Math.PI,ground:!0,energy:100,energyMax:100,drain:1,frozen:!0};ve.pos.y=pt(ve.pos.x,ve.pos.z);var Yt={jx:0,jy:0,fly:!1,act:!1,actPressed:!1},Kn=Math.PI*.85,Nr=.32,cu=6.5,Yf=0,ci=document.getElementById("joyBase"),gu=document.getElementById("joyKnob"),Hf={left:ci.style.left,bottom:ci.style.bottom},Za=null,Ja=null,hu=0,uu=0,du=0,fu=0,lv=Gi.domElement,pu=document.getElementById("controls");function $f(n){if(ve.frozen)return;let e=n.clientX<innerWidth*.45&&n.clientY>innerHeight*.3;if(n.pointerType!=="mouse"&&e&&Za===null){Za=n.pointerId,hu=n.clientX,uu=n.clientY;let t=ci.offsetWidth/2;ci.style.left=hu-t+"px",ci.style.bottom=innerHeight-uu-t+"px",ci.classList.add("active")}else Ja===null&&(Ja=n.pointerId,du=n.clientX,fu=n.clientY)}function cv(n){if(n.pointerId===Za){let e=ci.offsetWidth/2,t=n.clientX-hu,i=n.clientY-uu,s=Math.hypot(t,i),r=Math.min(1,s/e),a=s?t/s*r:0,o=s?i/s*r:0;Yt.jx=a,Yt.jy=-o,gu.style.transform=`translate(${a*e*.7}px, ${o*e*.7}px)`}else n.pointerId===Ja&&(Kn-=(n.clientX-du)*.006,Nr=Rs.clamp(Nr+(n.clientY-fu)*.004,.05,1.1),du=n.clientX,fu=n.clientY,Yf=performance.now())}function Kf(n){n.pointerId===Za&&(Za=null,Yt.jx=Yt.jy=0,gu.style.transform="",ci.style.left=Hf.left,ci.style.bottom=Hf.bottom,ci.classList.remove("active")),n.pointerId===Ja&&(Ja=null)}lv.addEventListener("pointerdown",$f);pu.addEventListener("pointerdown",n=>{(n.target===pu||n.target===ci||n.target===gu)&&$f(n)});addEventListener("pointermove",cv);addEventListener("pointerup",Kf);addEventListener("pointercancel",Kf);pu.style.pointerEvents="auto";var hv=document.getElementById("btnFly"),uv=document.getElementById("btnAct"),Zf=(n,e)=>{n.addEventListener("pointerdown",i=>{i.stopPropagation(),Yt[e]=!0,e==="act"&&(Yt.actPressed=!0),n.classList.add("pressed")});let t=()=>{Yt[e]=!1,n.classList.remove("pressed")};n.addEventListener("pointerup",t),n.addEventListener("pointerleave",t),n.addEventListener("pointercancel",t)};Zf(hv,"fly");Zf(uv,"act");var Ri=new Set;addEventListener("keydown",n=>{Ri.add(n.code),n.code==="Space"&&(Yt.fly=!0),n.code==="KeyE"&&!n.repeat&&(Yt.act=!0,Yt.actPressed=!0)});addEventListener("keyup",n=>{Ri.delete(n.code),n.code==="Space"&&(Yt.fly=!1),n.code==="KeyE"&&(Yt.act=!1)});document.getElementById("btnMute").addEventListener("click",n=>{mc(),n.currentTarget.classList.toggle("off",nu())});var Qa=new Map,jt=null;function dv(n,e,t,i={}){let s={id:n,pos:e,label:t,y:i.y,radius:i.radius||2.6,hold:i.hold||0,onUse:i.onUse||null,waiters:[],progress:0,released:!1,active:!0};return Qa.set(n,s),s}function Jf(n){Qa.delete(n)}function fv(n){return new Promise(e=>{let t=Qa.get(n);t&&t.waiters.push(e)})}var Fn={mode:"follow",pos:new C,look:new C,curLook:new C,speed:2};function jf(n,e,t=1.5){Fn.mode="shot",Fn.pos.copy(n),Fn.look.copy(e),Fn.speed=t}function pv(n,e){jf(n,e),Zn.position.copy(n),Fn.curLook.copy(e),Zn.lookAt(e)}function mv(){Fn.mode="follow"}var Dr=0,bn={W:li,P:ve,UI:wn,A:su,SPOTS:Z,camera:Zn,scene:qf,groundAt:pt,state:gc(),targets:[],dayClock:null,addInteract:dv,removeInteract:Jf,waitInteract:fv,hasInteract:n=>Qa.has(n),shot:jf,shotNow:pv,follow:mv,shake(n){Dr=n},save(n){n&&(bn.state.checkpoint=n),yc(bn.state)},freeze(n){ve.frozen=n,n&&(Yt.jx=Yt.jy=0,Yt.fly=!1),wn.cutscene(n)},placePlayer(n,e,t=null){ve.pos.set(n,pt(n,e),e),ve.vel.set(0,0,0),t!==null&&(ve.yaw=t,Kn=t)},faceKristi(n){ve.yaw=Math.atan2(n.x-ve.pos.x,n.z-ve.pos.z)},place(n,e,t,i=null,s=null,r=0){n.group.position.set(e,pt(e,t)+r,t),i!==null&&(n.group.rotation.y=Math.atan2(i-e,s-t))},near(n,e){return Math.hypot(ve.pos.x-n.x,ve.pos.z-n.z)<e},reach(n,e){return new Promise(t=>{let i=()=>bn.near(n,e)?t():requestAnimationFrame(i);i()})},lumiFollow:"kirubel",wait:In,resetCam(){Kn=ve.yaw+Math.PI,Nr=.32}},Gf=performance.now(),Vf=new C,Wf=new C,Us=new C,Fs=new C,Xf=!1;function gv(n){let e=Yt.jx,t=Yt.jy;(Ri.has("KeyW")||Ri.has("ArrowUp"))&&(t=1),(Ri.has("KeyS")||Ri.has("ArrowDown"))&&(t=-1),(Ri.has("KeyA")||Ri.has("ArrowLeft"))&&(e=-1),(Ri.has("KeyD")||Ri.has("ArrowRight"))&&(e=1),ve.frozen&&(e=t=0),Vf.set(-Math.sin(Kn),0,-Math.cos(Kn)),Wf.set(Math.cos(Kn),0,-Math.sin(Kn)),Us.set(0,0,0).addScaledVector(Vf,t).addScaledVector(Wf,e);let i=Math.min(1,Us.length());i>.01&&Us.normalize();let s=ve.ground?5.2:7.5;if(ve.vel.x=Rs.lerp(ve.vel.x,Us.x*s*i,Math.min(1,n*8)),ve.vel.z=Rs.lerp(ve.vel.z,Us.z*s*i,Math.min(1,n*8)),i>.05){let f=Math.atan2(Us.x,Us.z)-ve.yaw;if(f=Math.atan2(Math.sin(f),Math.cos(f)),ve.yaw+=f*Math.min(1,n*10),performance.now()-Yf>1800&&t>.3){let g=ve.yaw+Math.PI-Kn;g=Math.atan2(Math.sin(g),Math.cos(g)),Kn+=g*n*.9*t}}let r=Yt.fly&&!ve.frozen&&ve.energy>0,a=Ls(ve.pos.x,ve.pos.z,ve.pos.y);r?(ve.vel.y=Math.min(ve.vel.y+22*n,5.5),ve.energy-=20*ve.drain*n,ve.pos.y>a+14&&(ve.vel.y=Math.min(ve.vel.y,0))):(ve.vel.y-=16*n,ve.ground||(ve.vel.y=Math.max(ve.vel.y,-3.2))),ve.pos.addScaledVector(ve.vel,n);for(let h of li.colliders){let f=ve.pos.x-h.x,g=ve.pos.z-h.z,S=Math.hypot(f,g),m=pt(h.x,h.z);S<h.r&&ve.pos.y<m+h.h&&S>1e-4&&(ve.pos.x=h.x+f/S*h.r,ve.pos.z=h.z+g/S*h.r)}let o=Math.hypot(ve.pos.x,ve.pos.z);o>Ps&&(ve.pos.x*=Ps/o,ve.pos.z*=Ps/o);let l=Ls(ve.pos.x,ve.pos.z,ve.pos.y);ve.pos.y<=l?(ve.pos.y=l,ve.vel.y=Math.max(0,ve.vel.y),ve.ground=!0):ve.ground=ve.pos.y-l<.05,ve.ground&&!r&&(ve.energy=Math.min(ve.energyMax,ve.energy+16*n)),ve.energy=Math.max(0,ve.energy);let c=li.kristi;c.group.position.copy(ve.pos),c.group.rotation.y=ve.yaw,c.st.moving=Math.min(1,Math.hypot(ve.vel.x,ve.vel.z)/5),c.st.air=!ve.ground;let u=bn.lumiFollow==="kristi"?li.kristi.group.position:li.kirubel.group.position;if(li.lumi.st.target.set(u.x+.9,pt(u.x+.9,u.z+.6),u.z+.6),bn.dayClock&&bn.dayClock.running&&!ve.frozen){let h=bn.dayClock;h.elapsed+=n;let f=Math.min(1,h.elapsed/h.dur);li.setTime(h.from+(h.to-h.from)*f),f>=1&&!h.ended&&(h.ended=!0,h.onEnd&&h.onEnd())}iu(li.sky.daylight),jt=null;let d=1e9;if(!ve.frozen)for(let h of Qa.values()){if(!h.active)continue;let f=Math.hypot(ve.pos.x-h.pos.x,ve.pos.z-h.pos.z)+Math.max(0,Math.abs(ve.pos.y-(h.y!==void 0?h.y:Ls(h.pos.x,h.pos.z,ve.pos.y)))-2);f<h.radius&&f<d&&(d=f,jt=h)}if(wn.actLabel(jt?jt.label:null),jt&&jt.hold){if(Yt.act?jt.progress+=n/jt.hold:(Xf&&jt.progress>.05&&jt.progress<1&&(jt.released=!0),jt.progress=Math.max(0,jt.progress-n*.25)),wn.holdRing(jt.progress>0?Math.min(1,jt.progress):null),jt.progress>=1){let h=jt;wn.holdRing(null),Jf(h.id),h.waiters.forEach(f=>f(h)),h.onUse&&h.onUse(h)}}else wn.holdRing(null);if(Xf=Yt.act,Yt.actPressed&&(Yt.actPressed=!1,jt&&!jt.hold)){let h=jt,f=h.waiters;h.waiters=[],f.forEach(g=>g(h)),h.onUse&&h.onUse(h)}if(bn.targets.length&&!ve.frozen){let h=null,f=1e9;for(let m of bn.targets){let p=Math.hypot(m.x-ve.pos.x,m.z-ve.pos.z);p<f&&(f=p,h=m)}let S=Math.atan2(h.x-ve.pos.x,h.z-ve.pos.z)-(Kn+Math.PI);S=Math.atan2(Math.sin(S),Math.cos(S)),wn.compass(-S*180/Math.PI,f)}else wn.compass(null);wn.energy(ve.energy/100,ve.energyMax<100),li.update(n,Zn),Fn.mode==="follow"?(Fs.set(ve.pos.x+Math.sin(Kn)*Math.cos(Nr)*cu,ve.pos.y+1.4+Math.sin(Nr)*cu,ve.pos.z+Math.cos(Kn)*Math.cos(Nr)*cu),Fs.y=Math.max(Fs.y,pt(Fs.x,Fs.z)+.6),Zn.position.lerp(Fs,Math.min(1,n*6)),Fn.curLook.lerp(Fs.set(ve.pos.x,ve.pos.y+1.3,ve.pos.z),Math.min(1,n*10))):(Zn.position.lerp(Fn.pos,Math.min(1,n*Fn.speed)),Fn.curLook.lerp(Fn.look,Math.min(1,n*Fn.speed*1.4))),Zn.lookAt(Fn.curLook),Dr>0&&(Zn.position.x+=(Math.random()-.5)*Dr,Zn.position.y+=(Math.random()-.5)*Dr,Dr=Math.max(0,Dr-n*1.5))}function Qf(){let n=performance.now(),e=Math.min(.05,(n-Gf)/1e3);Gf=n,gv(e),Gi.render(qf,Zn),requestAnimationFrame(Qf)}var Ur=bf(),ep=document.getElementById("btnContinue"),mu=document.getElementById("btnNew"),ja=new URLSearchParams(location.search);Ur&&Ur.checkpoint!=="prologue"&&(ep.classList.remove("hidden"),mu.textContent="Start over",mu.classList.add("ghost"));async function yu(n){mc();try{document.documentElement.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&await document.documentElement.requestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}document.getElementById("title").classList.add("hidden"),n&&Ur?bn.state=Ur:(Ef(),bn.state=gc()),ja.get("cp")&&(bn.state.checkpoint=ja.get("cp")),Uf(bn,bn.state.checkpoint)}ep.addEventListener("click",()=>yu(!0));mu.addEventListener("click",async()=>{Ur&&Ur.checkpoint!=="prologue"&&await wn.card("<h2>Start over?</h2><p>Kristi and Kirubel will forget everything so far.</p>",["Start over","Keep my story"])!==0||yu(!1)});ja.get("debug")&&(window.__G=bn,window.__UI=wn);ja.get("autostart")&&yu(ja.get("autostart")==="continue");bn.shotNow(new C(14,12,22),new C(0,4,-10));li.kristi.group.position.copy(ve.pos);Qf();"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));export{bn as G};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
