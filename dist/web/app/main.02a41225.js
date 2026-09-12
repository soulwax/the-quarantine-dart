(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.Lr(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.B8(b)
return new s(c,this)}:function(){if(s===null)s=A.B8(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.B8(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
Be(a,b,c,d){return{i:a,p:b,e:c,x:d}},
z5(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Bc==null){A.L3()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.a(A.CD("Return interceptor for "+A.z(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.wI
if(o==null)o=$.wI=A.z4(n)
p=q[o]}if(p!=null)return p
p=A.La(a)
if(p!=null)return p
if(typeof a=="function")return B.kp
s=Object.getPrototypeOf(a)
if(s==null)return B.ec
if(s===Object.prototype)return B.ec
if(typeof q=="function"){o=$.wI
if(o==null)o=$.wI=A.z4(n)
Object.defineProperty(q,o,{value:B.cj,enumerable:false,writable:true,configurable:true})
return B.cj}return B.cj},
BV(a,b){if(a<0||a>4294967295)throw A.a(A.b2(a,0,4294967295,"length",null))
return J.A1(new Array(a),b)},
BW(a,b){if(a<0)throw A.a(A.p("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("x<0>"))},
ro(a,b){if(a<0)throw A.a(A.p("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("x<0>"))},
A1(a,b){var s=A.d(a,b.i("x<0>"))
s.$flags=1
return s},
Gt(a,b){var s=t.hO
return J.Fh(s.a(a),s.a(b))},
BY(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Gu(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.BY(r))break;++b}return b},
Gv(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.BY(q))break}return b},
f8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iL.prototype
return J.lF.prototype}if(typeof a=="string")return J.eG.prototype
if(a==null)return J.iM.prototype
if(typeof a=="boolean")return J.lE.prototype
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z5(a)},
aN(a){if(typeof a=="string")return J.eG.prototype
if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z5(a)},
d7(a){if(a==null)return a
if(Array.isArray(a))return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z5(a)},
L0(a){if(typeof a=="number")return J.fo.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eN.prototype
return a},
El(a){if(typeof a=="number")return J.fo.prototype
if(typeof a=="string")return J.eG.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eN.prototype
return a},
Em(a){if(typeof a=="string")return J.eG.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eN.prototype
return a},
En(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dV.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z5(a)},
Bs(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.El(a).S(a,b)},
aa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.f8(a).ab(a,b)},
b5(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.L8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aN(a).h(a,b)},
ba(a,b,c){return J.d7(a).k(a,b,c)},
el(a,b){return J.d7(a).l(a,b)},
Fd(a,b){return J.Em(a).i_(a,b)},
kz(a,b){return J.d7(a).P(a,b)},
Bt(a,b,c){return J.En(a).i1(a,b,c)},
Fe(a,b,c){return J.En(a).i2(a,b,c)},
Ff(a,b){return J.d7(a).dk(a,b)},
Fg(a,b,c){return J.L0(a).n(a,b,c)},
Fh(a,b){return J.El(a).H(a,b)},
Bu(a,b){return J.aN(a).q(a,b)},
oa(a,b){return J.d7(a).ad(a,b)},
Fi(a,b){return J.d7(a).a5(a,b)},
Bv(a){return J.d7(a).ga1(a)},
aO(a){return J.f8(a).gV(a)},
kA(a){return J.aN(a).gM(a)},
Fj(a){return J.aN(a).ga9(a)},
N(a){return J.d7(a).gA(a)},
cN(a){return J.aN(a).gu(a)},
fa(a){return J.f8(a).gag(a)},
Bw(a,b){return J.d7(a).a_(a,b)},
em(a,b,c){return J.d7(a).bz(a,b,c)},
Fk(a,b){return J.aN(a).su(a,b)},
Fl(a,b){return J.Em(a).aR(a,b)},
cb(a){return J.f8(a).t(a)},
Bx(a,b){return J.d7(a).fl(a,b)},
lB:function lB(){},
lE:function lE(){},
iM:function iM(){},
iO:function iO(){},
eH:function eH(){},
m3:function m3(){},
eN:function eN(){},
dV:function dV(){},
hs:function hs(){},
ht:function ht(){},
x:function x(a){this.$ti=a},
lD:function lD(){},
rq:function rq(a){this.$ti=a},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fo:function fo(){},
iL:function iL(){},
lF:function lF(){},
eG:function eG(){}},A={A2:function A2(){},
yZ(){return $},
FB(a,b,c){if(t.he.b(a))return new A.jG(a,b.i("@<0>").T(c).i("jG<1,2>"))
return new A.ff(a,b.i("@<0>").T(c).i("ff<1,2>"))},
C1(a){return new A.hu("Field '"+a+"' has been assigned during initialization.")},
a9(a){return new A.hu("Field '"+a+"' has not been initialized.")},
Gx(a){return new A.hu("Field '"+a+"' has already been initialized.")},
z6(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
b7(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ju(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ej(a,b,c){return a},
Bd(a){var s,r
for(s=$.cs.length,r=0;r<s;++r)if(a===$.cs[r])return!0
return!1},
hP(a,b,c,d){A.mf(b,"start")
if(c!=null){A.mf(c,"end")
if(b>c)A.h(A.b2(b,0,c,"start",null))}return new A.jt(a,b,c,d.i("jt<0>"))},
lO(a,b,c,d){if(t.he.b(a))return new A.dL(a,b,c.i("@<0>").T(d).i("dL<1,2>"))
return new A.cX(a,b,c.i("@<0>").T(d).i("cX<1,2>"))},
cV(){return new A.hN("No element")},
BU(){return new A.hN("Too many elements")},
eV:function eV(){},
iu:function iu(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b){this.a=a
this.$ti=b},
jG:function jG(a,b){this.a=a
this.$ti=b},
jE:function jE(){},
bd:function bd(a,b){this.a=a
this.$ti=b},
hu:function hu(a){this.a=a},
dJ:function dJ(a){this.a=a},
ur:function ur(){},
W:function W(){},
a1:function a1(){},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
iS:function iS(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iB:function iB(a){this.$ti=a},
e9:function e9(a,b){this.a=a
this.$ti=b},
jA:function jA(a,b){this.a=a
this.$ti=b},
aE:function aE(){},
eO:function eO(){},
hR:function hR(){},
bO:function bO(a,b){this.a=a
this.$ti=b},
ka:function ka(){},
aX(a,b,c){var s,r,q,p,o,n,m,l=A.aG(a.ga6(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aG(a.gan(),!0,c)
m=new A.a3(q,n,b.i("@<0>").T(c).i("a3<1,2>"))
m.$keys=l
return m}return new A.ix(A.b_(a,b,c),b.i("@<0>").T(c).i("ix<1,2>"))},
FH(){throw A.a(A.by("Cannot modify unmodifiable Map"))},
FI(){throw A.a(A.by("Cannot modify constant Set"))},
EE(a){var s=A.ED(a)
if(s!=null)return s
return"minified:"+a},
L8(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cb(a)
return s},
j9(a){var s,r=$.Cf
if(r==null)r=$.Cf=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dY(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fw(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aQ(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ma(a){var s,r,q,p
if(a instanceof A.L)return A.bT(A.ct(a),null)
s=J.f8(a)
if(s===B.kn||s===B.kq||t.qF.b(a)){r=B.cH(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bT(A.ct(a),null)},
Cg(a){var s,r,q
if(a==null||typeof a=="number"||A.bB(a))return J.cb(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ez)return a.t(0)
if(a instanceof A.bi)return a.hP(!0)
s=$.F8()
for(r=0;r<1;++r){q=s[r].pU(a)
if(q!=null)return q}return"Instance of '"+A.ma(a)+"'"},
GT(){return Date.now()},
H1(){var s,r
if($.tQ!==0)return
$.tQ=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.tQ=1e6
$.tR=new A.tP(r)},
GS(){if(!!self.location)return self.location.href
return null},
H2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aA(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.eq(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.b2(a,0,1114111,null,null))},
hE(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
H0(a){var s=A.hE(a).getUTCFullYear()+0
return s},
GZ(a){var s=A.hE(a).getUTCMonth()+1
return s},
GV(a){var s=A.hE(a).getUTCDate()+0
return s},
GW(a){var s=A.hE(a).getUTCHours()+0
return s},
GY(a){var s=A.hE(a).getUTCMinutes()+0
return s},
H_(a){var s=A.hE(a).getUTCSeconds()+0
return s},
GX(a){var s=A.hE(a).getUTCMilliseconds()+0
return s},
GU(a){var s=a.$thrownJsError
if(s==null)return null
return A.d8(s)},
Ch(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aV(a,s)
a.$thrownJsError=s
s.stack=b.t(0)}},
Bb(a){throw A.a(A.yV(a))},
e(a,b){if(a==null)J.cN(a)
throw A.a(A.z1(a,b))},
z1(a,b){var s,r="index"
if(!A.b4(b))return new A.cP(!0,b,r,null)
s=A.j(J.cN(a))
if(b<0||b>=s)return A.rf(b,s,a,r)
return A.Cm(b,r)},
KV(a,b,c){if(a>c)return A.b2(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b2(b,a,c,"end",null)
return new A.cP(!0,b,"end",null)},
yV(a){return new A.cP(!0,a,null,null)},
a(a){return A.aV(a,new Error())},
aV(a,b){var s
if(a==null)a=new A.e5()
b.dartException=a
s=A.Lu
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Lu(){return J.cb(this.dartException)},
h(a,b){throw A.aV(a,b==null?new Error():b)},
aW(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.J7(a,b,c),s)},
J7(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.jv("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.a(A.aD(a))},
e6(a){var s,r,q,p,o,n
a=A.Ey(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.vD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
vE(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
CC(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
A3(a,b){var s=b==null,r=s?null:b.method
return new A.lG(a,r,s?null:b.receiver)},
al(a){var s
if(a==null)return new A.tk(a)
if(a instanceof A.iC){s=a.a
return A.f9(a,s==null?A.fY(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.f9(a,a.dartException)
return A.Kr(a)},
f9(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Kr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.eq(r,16)&8191)===10)switch(q){case 438:return A.f9(a,A.A3(A.z(s)+" (Error "+q+")",null))
case 445:case 5007:A.z(s)
return A.f9(a,new A.j2())}}if(a instanceof TypeError){p=$.EL()
o=$.EM()
n=$.EN()
m=$.EO()
l=$.ER()
k=$.ES()
j=$.EQ()
$.EP()
i=$.EU()
h=$.ET()
g=p.b9(s)
if(g!=null)return A.f9(a,A.A3(A.v(s),g))
else{g=o.b9(s)
if(g!=null){g.method="call"
return A.f9(a,A.A3(A.v(s),g))}else if(n.b9(s)!=null||m.b9(s)!=null||l.b9(s)!=null||k.b9(s)!=null||j.b9(s)!=null||m.b9(s)!=null||i.b9(s)!=null||h.b9(s)!=null){A.v(s)
return A.f9(a,new A.j2())}}return A.f9(a,new A.mC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jq()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.f9(a,new A.cP(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jq()
return a},
d8(a){var s
if(a instanceof A.iC)return a.b
if(a==null)return new A.jY(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jY(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
o7(a){if(a==null)return J.aO(a)
if(typeof a=="object")return A.j9(a)
return J.aO(a)},
KN(a){if(typeof a=="number")return B.b.gV(a)
if(a instanceof A.nD)return A.j9(a)
if(a instanceof A.bi)return a.gV(a)
return A.o7(a)},
Ej(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
L_(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Jx(a,b,c,d,e,f){t.BO.a(a)
switch(A.j(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.wt("Unsupported number of arguments for wrapped closure"))},
ig(a,b){var s=a.$identity
if(!!s)return s
s=A.KP(a,b)
a.$identity=s
return s},
KP(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Jx)},
FG(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.mw().constructor.prototype):Object.create(new A.h8(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.BE(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.FC(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.BE(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
FC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Fx)}throw A.a("Error in functionType of tearoff")},
FD(a,b,c,d){var s=A.BC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
BE(a,b,c,d){if(c)return A.FF(a,b,d)
return A.FD(b.length,d,a,b)},
FE(a,b,c,d){var s=A.BC,r=A.Fy
switch(b?-1:a){case 0:throw A.a(new A.mj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
FF(a,b,c){var s,r
if($.BA==null)$.BA=A.Bz("interceptor")
if($.BB==null)$.BB=A.Bz("receiver")
s=b.length
r=A.FE(s,c,a,b)
return r},
B8(a){return A.FG(a)},
Fx(a,b){return A.k1(v.typeUniverse,A.ct(a.a),b)},
BC(a){return a.a},
Fy(a){return a.b},
Bz(a){var s,r,q,p=new A.h8("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.p("Field name "+a+" not found.",null))},
z4(a){return v.getIsolateTag(a)},
EC(){return v.G},
Mv(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
La(a){var s,r,q,p,o,n=A.v($.Eo.$1(a)),m=$.z2[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.za[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ac($.Ef.$2(a,n))
if(q!=null){m=$.z2[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.za[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.zF(s)
$.z2[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.za[n]=s
return s}if(p==="-"){o=A.zF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Ew(a,s)
if(p==="*")throw A.a(A.CD(n))
if(v.leafTags[n]===true){o=A.zF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Ew(a,s)},
Ew(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Be(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
zF(a){return J.Be(a,!1,null,!!a.$icf)},
Lc(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.zF(s)
else return J.Be(s,c,null,null)},
L3(){if(!0===$.Bc)return
$.Bc=!0
A.L4()},
L4(){var s,r,q,p,o,n,m,l
$.z2=Object.create(null)
$.za=Object.create(null)
A.L2()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ex.$1(o)
if(n!=null){m=A.Lc(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
L2(){var s,r,q,p,o,n,m=B.fC()
m=A.ie(B.fD,A.ie(B.fE,A.ie(B.cI,A.ie(B.cI,A.ie(B.fF,A.ie(B.fG,A.ie(B.fH(B.cH),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Eo=new A.z7(p)
$.Ef=new A.z8(o)
$.Ex=new A.z9(n)},
ie(a,b){return a(b)||b},
Ih(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.aa(r,b[s]))return!1}return!0},
KR(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
BZ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.M("Illegal RegExp pattern ("+String(o)+")",a,null))},
Lo(a,b,c){var s=a.indexOf(b,c)
return s>=0},
KY(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ey(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zP(a,b,c){var s=A.Lp(a,b,c)
return s},
Lp(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ey(b),"g"),A.KY(c))},
a5:function a5(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a){this.a=a},
jW:function jW(a){this.a=a},
ix:function ix(a,b){this.a=a
this.$ti=b},
he:function he(){},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
eb:function eb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
de:function de(a,b){this.a=a
this.$ti=b},
hf:function hf(){},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
hp:function hp(a,b){this.a=a
this.$ti=b},
tP:function tP(a){this.a=a},
jl:function jl(){},
vD:function vD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j2:function j2(){},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
mC:function mC(a){this.a=a},
tk:function tk(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a
this.b=null},
ez:function ez(){},
kU:function kU(){},
kV:function kV(){},
my:function my(){},
mw:function mw(){},
h8:function h8(a,b){this.a=a
this.b=b},
mj:function mj(a){this.a=a},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rz:function rz(a){this.a=a},
rJ:function rJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
af:function af(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
am:function am(a,b){this.a=a
this.$ti=b},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
O:function O(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fp:function fp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
z7:function z7(a){this.a=a},
z8:function z8(a){this.a=a},
z9:function z9(a){this.a=a},
bi:function bi(){},
ec:function ec(){},
ed:function ed(){},
fT:function fT(){},
iN:function iN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ni:function ni(a){this.b=a},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
js:function js(a,b){this.a=a
this.c=b},
nz:function nz(a,b,c){this.a=a
this.b=b
this.c=c},
nA:function nA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Lr(a){throw A.aV(A.C1(a),new Error())},
u(){throw A.aV(A.a9(""),new Error())},
b9(){throw A.aV(A.Gx(""),new Error())},
o8(){throw A.aV(A.C1(""),new Error())},
ak(){var s=new A.ws()
return s.b=s},
ws:function ws(){this.b=null},
xu(a,b,c){},
S(a){return a},
GG(a,b,c){A.xu(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
ti(a){return new Float32Array(a)},
GH(a){return new Int8Array(a)},
GI(a){return new Uint8Array(a)},
m_(a){return new Uint8Array(A.S(a))},
Cc(a,b,c){A.xu(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
eh(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.z1(b,a))},
nQ(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.KV(a,b,c))
return b},
eI:function eI(){},
hB:function hB(){},
j0:function j0(){},
xg:function xg(a){this.a=a},
lT:function lT(){},
bu:function bu(){},
iZ:function iZ(){},
j_:function j_(){},
iY:function iY(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lX:function lX(){},
lY:function lY(){},
lZ:function lZ(){},
ft:function ft(){},
j1:function j1(){},
jN:function jN(){},
jO:function jO(){},
jP:function jP(){},
jQ:function jQ(){},
Ae(a,b){var s=b.c
return s==null?b.c=A.k_(a,"aY",[b.x]):s},
Cr(a){var s=a.w
if(s===6||s===7)return A.Cr(a.x)
return s===11||s===12},
Hd(a){return a.as},
Ev(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a2(a){return A.xf(v.typeUniverse,a,!1)},
h0(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.h0(a1,s,a3,a4)
if(r===s)return a2
return A.D8(a1,r,!0)
case 7:s=a2.x
r=A.h0(a1,s,a3,a4)
if(r===s)return a2
return A.D7(a1,r,!0)
case 8:q=a2.y
p=A.id(a1,q,a3,a4)
if(p===q)return a2
return A.k_(a1,a2.x,p)
case 9:o=a2.x
n=A.h0(a1,o,a3,a4)
m=a2.y
l=A.id(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Ap(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.id(a1,j,a3,a4)
if(i===j)return a2
return A.D9(a1,k,i)
case 11:h=a2.x
g=A.h0(a1,h,a3,a4)
f=a2.y
e=A.Kn(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.D6(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.id(a1,d,a3,a4)
o=a2.x
n=A.h0(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Aq(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.kH("Attempted to substitute unexpected RTI kind "+a0))}},
id(a,b,c,d){var s,r,q,p,o=b.length,n=A.xl(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.h0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Ko(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.xl(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.h0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Kn(a,b,c,d){var s,r=b.a,q=A.id(a,r,c,d),p=b.b,o=A.id(a,p,c,d),n=b.c,m=A.Ko(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.nc()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
B9(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.L1(s)
return a.$S()}return null},
L5(a,b){var s
if(A.Cr(b))if(a instanceof A.ez){s=A.B9(a)
if(s!=null)return s}return A.ct(a)},
ct(a){if(a instanceof A.L)return A.w(a)
if(Array.isArray(a))return A.C(a)
return A.AI(J.f8(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
w(a){var s=a.$ti
return s!=null?s:A.AI(a)},
AI(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Ju(a,s)},
Ju(a,b){var s=a instanceof A.ez?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Ir(v.typeUniverse,s.name)
b.$ccache=r
return r},
L1(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.xf(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
Ba(a){return A.dE(A.w(a))},
B3(a){var s
if(a instanceof A.bi)return a.hi()
s=a instanceof A.ez?A.B9(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fa(a).a
if(Array.isArray(a))return A.C(a)
return A.ct(a)},
dE(a){var s=a.r
return s==null?a.r=new A.nD(a):s},
KZ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.e(q,0)
s=A.k1(v.typeUniverse,A.B3(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.Db(v.typeUniverse,s,A.B3(q[r]))}return A.k1(v.typeUniverse,s,a)},
cK(a){return A.dE(A.xf(v.typeUniverse,a,!1))},
Jt(a){var s=this
s.b=A.Ki(s)
return s.b(a)},
Ki(a){var s,r,q,p,o
if(a===t.K)return A.JD
if(A.h1(a))return A.JJ
s=a.w
if(s===6)return A.Jl
if(s===1)return A.DN
if(s===7)return A.Jy
r=A.Kg(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.h1)){a.f="$i"+q
if(q==="K")return A.JB
if(a===t.m)return A.JA
return A.JI}}else if(s===10){p=A.KR(a.x,a.y)
o=p==null?A.DN:p
return o==null?A.fY(o):o}return A.Jj},
Kg(a){if(a.w===8){if(a===t.S)return A.b4
if(a===t.i||a===t.fY)return A.JC
if(a===t.N)return A.JH
if(a===t.y)return A.bB}return null},
Js(a){var s=this,r=A.Ji
if(A.h1(s))r=A.IN
else if(s===t.K)r=A.fY
else if(A.ii(s)){r=A.Jk
if(s===t.lo)r=A.xp
else if(s===t.dR)r=A.ac
else if(s===t.k7)r=A.Aw
else if(s===t.s7)r=A.ki
else if(s===t.u6)r=A.Dt
else if(s===t.gt)r=A.G}else if(s===t.S)r=A.j
else if(s===t.N)r=A.v
else if(s===t.y)r=A.U
else if(s===t.fY)r=A.a_
else if(s===t.i)r=A.ax
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
Jj(a){var s=this
if(a==null)return A.ii(s)
return A.Er(v.typeUniverse,A.L5(a,s),s)},
Jl(a){if(a==null)return!0
return this.x.b(a)},
JI(a){var s,r=this
if(a==null)return A.ii(r)
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.f8(a)[s]},
JB(a){var s,r=this
if(a==null)return A.ii(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.f8(a)[s]},
JA(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.L)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
DM(a){if(typeof a=="object"){if(a instanceof A.L)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ji(a){var s=this
if(a==null){if(A.ii(s))return a}else if(s.b(a))return a
throw A.aV(A.Dy(a,s),new Error())},
Jk(a){var s=this
if(a==null||s.b(a))return a
throw A.aV(A.Dy(a,s),new Error())},
Dy(a,b){return new A.hZ("TypeError: "+A.D0(a,A.bT(b,null)))},
Eh(a,b,c,d){if(A.Er(v.typeUniverse,a,b))return a
throw A.aV(A.Ij("The type argument '"+A.bT(a,null)+"' is not a subtype of the type variable bound '"+A.bT(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
D0(a,b){return A.ld(a)+": type '"+A.bT(A.B3(a),null)+"' is not a subtype of type '"+b+"'"},
Ij(a){return new A.hZ("TypeError: "+a)},
cI(a,b){return new A.hZ("TypeError: "+A.D0(a,b))},
Jy(a){var s=this
return s.x.b(a)||A.Ae(v.typeUniverse,s).b(a)},
JD(a){return a!=null},
fY(a){if(a!=null)return a
throw A.aV(A.cI(a,"Object"),new Error())},
JJ(a){return!0},
IN(a){return a},
DN(a){return!1},
bB(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aV(A.cI(a,"bool"),new Error())},
Aw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aV(A.cI(a,"bool?"),new Error())},
ax(a){if(typeof a=="number")return a
throw A.aV(A.cI(a,"double"),new Error())},
Dt(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aV(A.cI(a,"double?"),new Error())},
b4(a){return typeof a=="number"&&Math.floor(a)===a},
j(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aV(A.cI(a,"int"),new Error())},
xp(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aV(A.cI(a,"int?"),new Error())},
JC(a){return typeof a=="number"},
a_(a){if(typeof a=="number")return a
throw A.aV(A.cI(a,"num"),new Error())},
ki(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aV(A.cI(a,"num?"),new Error())},
JH(a){return typeof a=="string"},
v(a){if(typeof a=="string")return a
throw A.aV(A.cI(a,"String"),new Error())},
ac(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aV(A.cI(a,"String?"),new Error())},
b(a){if(A.DM(a))return a
throw A.aV(A.cI(a,"JSObject"),new Error())},
G(a){if(a==null)return a
if(A.DM(a))return a
throw A.aV(A.cI(a,"JSObject?"),new Error())},
E4(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bT(a[q],b)
return s},
K4(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.E4(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bT(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
DC(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.d([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.l(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.e(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bT(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bT(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bT(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bT(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bT(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bT(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bT(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bT(a.x,b)+">"
if(l===8){p=A.Kq(a.x)
o=a.y
return o.length>0?p+("<"+A.E4(o,b)+">"):p}if(l===10)return A.K4(a,b)
if(l===11)return A.DC(a,b,null)
if(l===12)return A.DC(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
Kq(a){var s=A.ED(a)
if(s!=null)return s
return"minified:"+a},
Is(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Ir(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.xf(a,b,!1)
else if(typeof m=="number"){s=m
r=A.k0(a,5,"#")
q=A.xl(s)
for(p=0;p<s;++p)q[p]=r
o=A.k_(a,b,q)
n[b]=o
return o}else return m},
Iq(a,b){return A.Dj(a.tR,b)},
Ip(a,b){return A.Dj(a.eT,b)},
xf(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Da(a,null,b,!1)
r.set(b,s)
return s},
k1(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Da(a,b,c,!0)
q.set(c,r)
return r},
Db(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Ap(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Da(a,b,c,d){return A.If(A.I9(a,b,c,d))},
f_(a,b){b.a=A.Js
b.b=A.Jt
return b},
k0(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.d0(null,null)
s.w=b
s.as=c
r=A.f_(a,s)
a.eC.set(c,r)
return r},
D8(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.In(a,b,r,c)
a.eC.set(r,s)
return s},
In(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.h1(b))if(!(b===t.c||b===t.E))if(s!==6)r=s===7&&A.ii(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.d0(null,null)
q.w=6
q.x=b
q.as=c
return A.f_(a,q)},
D7(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Il(a,b,r,c)
a.eC.set(r,s)
return s},
Il(a,b,c,d){var s,r
if(d){s=b.w
if(A.h1(b)||b===t.K)return b
else if(s===1)return A.k_(a,"aY",[b])
else if(b===t.c||b===t.E)return t.eZ}r=new A.d0(null,null)
r.w=7
r.x=b
r.as=c
return A.f_(a,r)},
Io(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.d0(null,null)
s.w=13
s.x=b
s.as=q
r=A.f_(a,s)
a.eC.set(q,r)
return r},
jZ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ik(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
k_(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jZ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.d0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.f_(a,r)
a.eC.set(p,q)
return q},
Ap(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jZ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.d0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.f_(a,o)
a.eC.set(q,n)
return n},
D9(a,b,c){var s,r,q="+"+(b+"("+A.jZ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.d0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.f_(a,s)
a.eC.set(q,r)
return r},
D6(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jZ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jZ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ik(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.d0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.f_(a,p)
a.eC.set(r,o)
return o},
Aq(a,b,c,d){var s,r=b.as+("<"+A.jZ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Im(a,b,c,r,d)
a.eC.set(r,s)
return s},
Im(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.xl(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.h0(a,b,r,0)
m=A.id(a,c,r,0)
return A.Aq(a,n,m,c!==m)}}l=new A.d0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.f_(a,l)},
I9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
If(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Ib(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.D3(a,r,l,k,!1)
else if(q===46)r=A.D3(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fS(a.u,a.e,k.pop()))
break
case 94:k.push(A.Io(a.u,k.pop()))
break
case 35:k.push(A.k0(a.u,5,"#"))
break
case 64:k.push(A.k0(a.u,2,"@"))
break
case 126:k.push(A.k0(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Id(a,k)
break
case 38:A.Ic(a,k)
break
case 63:p=a.u
k.push(A.D8(p,A.fS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.D7(p,A.fS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Ia(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.D4(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Ig(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.fS(a.u,a.e,m)},
Ib(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
D3(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Is(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.Hd(o)+'"')
d.push(A.k1(s,o,n))}else d.push(p)
return m},
Id(a,b){var s,r=a.u,q=A.D2(a,b),p=b.pop()
if(typeof p=="string")b.push(A.k_(r,p,q))
else{s=A.fS(r,a.e,p)
switch(s.w){case 11:b.push(A.Aq(r,s,q,a.n))
break
default:b.push(A.Ap(r,s,q))
break}}},
Ia(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.D2(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fS(p,a.e,o)
q=new A.nc()
q.a=s
q.b=n
q.c=m
b.push(A.D6(p,r,q))
return
case-4:b.push(A.D9(p,b.pop(),s))
return
default:throw A.a(A.kH("Unexpected state under `()`: "+A.z(o)))}},
Ic(a,b){var s=b.pop()
if(0===s){b.push(A.k0(a.u,1,"0&"))
return}if(1===s){b.push(A.k0(a.u,4,"1&"))
return}throw A.a(A.kH("Unexpected extended operation "+A.z(s)))},
D2(a,b){var s=b.splice(a.p)
A.D4(a.u,a.e,s)
a.p=b.pop()
return s},
fS(a,b,c){if(typeof c=="string")return A.k_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Ie(a,b,c)}else return c},
D4(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fS(a,b,c[s])},
Ig(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fS(a,b,c[s])},
Ie(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.kH("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.kH("Bad index "+c+" for "+b.t(0)))},
Er(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b8(a,b,null,c,null)
r.set(c,s)}return s},
b8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.h1(d))return!0
s=b.w
if(s===4)return!0
if(A.h1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b8(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.E){if(q===7)return A.b8(a,b,c,d.x,e)
return d===p||d===t.E||q===6}if(d===t.K){if(s===7)return A.b8(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b8(a,b.x,c,d,e))return!1
return A.b8(a,A.Ae(a,b),c,d,e)}if(s===6)return A.b8(a,p,c,d,e)&&A.b8(a,b.x,c,d,e)
if(q===7){if(A.b8(a,b,c,d.x,e))return!0
return A.b8(a,b,c,A.Ae(a,d),e)}if(q===6)return A.b8(a,b,c,p,e)||A.b8(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.BO)return!0
o=s===10
if(o&&d===t.iM)return!0
if(q===12){if(b===t.ud)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.b8(a,j,c,i,e)||!A.b8(a,i,e,j,c))return!1}return A.DK(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.DK(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Jz(a,b,c,d,e)}if(o&&q===10)return A.JE(a,b,c,d,e)
return!1},
DK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b8(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.b8(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b8(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b8(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.b8(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Jz(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.k1(a,b,r[o])
return A.Dr(a,p,null,c,d.y,e)}return A.Dr(a,b.y,null,c,d.y,e)},
Dr(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b8(a,b[s],d,e[s],f))return!1
return!0},
JE(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b8(a,r[s],c,q[s],e))return!1
return!0},
ii(a){var s=a.w,r=!0
if(!(a===t.c||a===t.E))if(!A.h1(a))if(s!==6)r=s===7&&A.ii(a.x)
return r},
h1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Dj(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
xl(a){return a>0?new Array(a):v.typeUniverse.sEA},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
nc:function nc(){this.c=this.b=this.a=null},
nD:function nD(a){this.a=a},
na:function na(){},
hZ:function hZ(a){this.a=a},
I1(){var s,r,q
if(self.scheduleImmediate!=null)return A.KG()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ig(new A.wo(s),1)).observe(r,{childList:true})
return new A.wn(s,r,q)}else if(self.setImmediate!=null)return A.KH()
return A.KI()},
I2(a){self.scheduleImmediate(A.ig(new A.wp(t.O.a(a)),0))},
I3(a){self.setImmediate(A.ig(new A.wq(t.O.a(a)),0))},
I4(a){A.Ai(B.hb,t.O.a(a))},
Ai(a,b){return A.Ii(a.a/1000|0,b)},
Ii(a,b){var s=new A.xc()
s.ku(a,b)
return s},
aL(a){return new A.n_(new A.as($.ar,a.i("as<0>")),a.i("n_<0>"))},
aK(a,b){a.$2(0,null)
b.b=!0
return b.a},
a6(a,b){A.IQ(a,b)},
aJ(a,b){b.ez(a)},
aI(a,b){b.eA(A.al(a),A.d8(a))},
IQ(a,b){var s,r,q=new A.xr(b),p=new A.xs(b)
if(a instanceof A.as)a.hN(q,p,t.z)
else{s=t.z
if(a instanceof A.as)a.ff(q,p,s)
else{r=new A.as($.ar,t.hR)
r.a=8
r.c=a
r.hN(q,p,s)}}},
aM(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ar.j5(new A.yU(s),t.H,t.S,t.z)},
D5(a,b,c){return 0},
oy(a){var s
if(t.yt.b(a)){s=a.gcg()
if(s!=null)return s}return B.aM},
BN(a){var s
a.a(null)
s=new A.as($.ar,a.i("as<0>"))
s.e7(null)
return s},
G9(a,b,c){var s=new A.as($.ar,c.i("as<0>"))
A.CB(a,new A.qe(b,s,c))
return s},
qf(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.as($.ar,b.i("as<K<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.qh(i,h,g,f)
try{for(n=J.N(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.ff(new A.qg(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.d4(A.d([],b.i("x<0>")))
return n}i.a=A.dj(n,null,!1,b.i("0?"))}catch(l){p=A.al(l)
o=A.d8(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.AJ(m,k)
m=new A.bq(m,k==null?A.oy(m):k)
n.d1(m)
return n}else{i.d=p
i.c=o}}return f},
AJ(a,b){if($.ar===B.B)return null
return null},
Jv(a,b){if($.ar!==B.B)A.AJ(a,b)
if(b==null)if(t.yt.b(a)){b=a.gcg()
if(b==null){A.Ch(a,B.aM)
b=B.aM}}else b=B.aM
else if(t.yt.b(a))A.Ch(a,b)
return new A.bq(a,b)},
I5(a,b){var s=new A.as($.ar,b.i("as<0>"))
b.a(a)
s.a=8
s.c=a
return s},
wy(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Hq()
b.d1(new A.bq(new A.cP(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.hv(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.co()
b.d3(o.a)
A.fO(b,p)
return}b.a^=2
A.nZ(null,null,b.b,t.O.a(new A.wz(o,b)))},
fO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.AW(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fO(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.AW(j.a,j.b)
return}g=$.ar
if(g!==h)$.ar=h
else g=null
c=c.c
if((c&15)===8)new A.wD(q,d,n).$0()
else if(o){if((c&1)!==0)new A.wC(q,j).$0()}else if((c&2)!==0)new A.wB(d,q).$0()
if(g!=null)$.ar=g
c=q.c
if(c instanceof A.as){p=q.a.$ti
p=p.i("aY<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dd(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.wy(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.dd(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
DZ(a,b){var s
if(t.nW.b(a))return b.j5(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.a(A.a7(a,"onError",u.c))},
JT(){var s,r
for(s=$.i9;s!=null;s=$.i9){$.kn=null
r=s.b
$.i9=r
if(r==null)$.km=null
s.a.$0()}},
Kl(){$.AK=!0
try{A.JT()}finally{$.kn=null
$.AK=!1
if($.i9!=null)$.Bm().$1(A.Eg())}},
E7(a){var s=new A.n0(a),r=$.km
if(r==null){$.i9=$.km=s
if(!$.AK)$.Bm().$1(A.Eg())}else $.km=r.b=s},
Ke(a){var s,r,q,p=$.i9
if(p==null){A.E7(a)
$.kn=$.km
return}s=new A.n0(a)
r=$.kn
if(r==null){s.b=p
$.i9=$.kn=s}else{q=r.b
s.b=q
$.kn=r.b=s
if(q==null)$.km=s}},
LP(a,b){A.ej(a,"stream",t.K)
return new A.ny(b.i("ny<0>"))},
CB(a,b){var s=$.ar
if(s===B.B)return A.Ai(a,t.O.a(b))
return A.Ai(a,t.O.a(s.i4(b)))},
AW(a,b){A.Ke(new A.yE(a,b))},
E3(a,b,c,d,e){var s,r=$.ar
if(r===c)return d.$0()
$.ar=c
s=r
try{r=d.$0()
return r}finally{$.ar=s}},
Kb(a,b,c,d,e,f,g){var s,r=$.ar
if(r===c)return d.$1(e)
$.ar=c
s=r
try{r=d.$1(e)
return r}finally{$.ar=s}},
Ka(a,b,c,d,e,f,g,h,i){var s,r=$.ar
if(r===c)return d.$2(e,f)
$.ar=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ar=s}},
nZ(a,b,c,d){t.O.a(d)
if(B.B!==c){d=c.i4(d)
d=d}A.E7(d)},
wo:function wo(a){this.a=a},
wn:function wn(a,b,c){this.a=a
this.b=b
this.c=c},
wp:function wp(a){this.a=a},
wq:function wq(a){this.a=a},
xc:function xc(){},
xd:function xd(a,b){this.a=a
this.b=b},
n_:function n_(a,b){this.a=a
this.b=!1
this.$ti=b},
xr:function xr(a){this.a=a},
xs:function xs(a){this.a=a},
yU:function yU(a){this.a=a},
d4:function d4(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
ca:function ca(a,b){this.a=a
this.$ti=b},
bq:function bq(a,b){this.a=a
this.b=b},
qe:function qe(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qg:function qg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
n3:function n3(){},
jC:function jC(a,b){this.a=a
this.$ti=b},
ea:function ea(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
wv:function wv(a,b){this.a=a
this.b=b},
wA:function wA(a,b){this.a=a
this.b=b},
wz:function wz(a,b){this.a=a
this.b=b},
wx:function wx(a,b){this.a=a
this.b=b},
ww:function ww(a,b){this.a=a
this.b=b},
wD:function wD(a,b,c){this.a=a
this.b=b
this.c=c},
wE:function wE(a,b){this.a=a
this.b=b},
wF:function wF(a){this.a=a},
wC:function wC(a,b){this.a=a
this.b=b},
wB:function wB(a,b){this.a=a
this.b=b},
n0:function n0(a){this.a=a
this.b=null},
ny:function ny(a){this.$ti=a},
k9:function k9(){},
nr:function nr(){},
xa:function xa(a,b){this.a=a
this.b=b},
yE:function yE(a,b){this.a=a
this.b=b},
D1(a,b){var s=a[b]
return s===a?null:s},
An(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Am(){var s=Object.create(null)
A.An(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
C3(a,b){return new A.cy(a.i("@<0>").T(b).i("cy<1,2>"))},
E(a,b,c){return b.i("@<0>").T(c).i("A4<1,2>").a(A.Ej(a,new A.cy(b.i("@<0>").T(c).i("cy<1,2>"))))},
m(a,b){return new A.cy(a.i("@<0>").T(b).i("cy<1,2>"))},
A5(a){return new A.cG(a.i("cG<0>"))},
a0(a){return new A.cG(a.i("cG<0>"))},
aQ(a,b){return b.i("C4<0>").a(A.L_(a,new A.cG(b.i("cG<0>"))))},
Ao(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eW(a,b,c){var s=new A.fR(a,b,c.i("fR<0>"))
s.c=a.e
return s},
bM(a,b){var s=J.N(a)
if(s.m())return s.gp()
return null},
b_(a,b,c){var s=A.C3(b,c)
a.aL(0,new A.rK(s,b,c))
return s},
hv(a,b,c){var s=A.C3(b,c)
s.L(0,a)
return s},
hw(a,b){var s,r=A.A5(b)
for(s=J.N(a);s.m();)r.l(0,b.a(s.gp()))
return r},
fq(a,b){var s=A.A5(b)
s.L(0,a)
return s},
A7(a){var s,r
if(A.Bd(a))return"{...}"
s=new A.bH("")
try{r={}
B.a.l($.cs,a)
s.a+="{"
r.a=!0
a.aL(0,new A.rN(r,s))
s.a+="}"}finally{if(0>=$.cs.length)return A.e($.cs,-1)
$.cs.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
It(){throw A.a(A.by("Cannot change an unmodifiable set"))},
jH:function jH(){},
wH:function wH(a){this.a=a},
jJ:function jJ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fP:function fP(a,b){this.a=a
this.$ti=b},
jI:function jI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cG:function cG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nh:function nh(a){this.a=a
this.c=this.b=null},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
rK:function rK(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(){},
ah:function ah(){},
rM:function rM(a){this.a=a},
rN:function rN(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.$ti=b},
jL:function jL(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
k2:function k2(){},
hx:function hx(){},
eP:function eP(a,b){this.a=a
this.$ti=b},
dt:function dt(){},
jX:function jX(){},
nE:function nE(){},
hS:function hS(a,b){this.a=a
this.$ti=b},
i_:function i_(){},
k3:function k3(){},
JY(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.al(r)
q=A.M(String(s),null,null)
throw A.a(q)}q=A.xV(p)
return q},
xV(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.nf(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.xV(a[s])
return a},
IK(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.EZ()
else s=new Uint8Array(o)
for(r=J.aN(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
IJ(a,b,c,d){var s=a?$.EY():$.EX()
if(s==null)return null
if(0===c&&d===b.length)return A.Di(s,b)
return A.Di(s,b.subarray(c,d))},
Di(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
By(a,b,c,d,e,f){if(B.d.O(f,4)!==0)throw A.a(A.M("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.M("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.M("Invalid base64 padding, more than two '=' characters",a,b))},
C0(a,b,c){return new A.iP(a,b)},
L9(a){return B.f.ai(a,null)},
J6(a){return a.D()},
I6(a,b){return new A.wK(a,[],A.KQ())},
I7(a,b,c){var s,r=new A.bH(""),q=A.I6(r,b)
q.dZ(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
IL(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nf:function nf(a,b){this.a=a
this.b=b
this.c=null},
wJ:function wJ(a){this.a=a},
ng:function ng(a){this.a=a},
xj:function xj(){},
xi:function xi(){},
kE:function kE(){},
xe:function xe(){},
kF:function kF(a,b){this.a=a
this.b=b},
kL:function kL(){},
pi:function pi(){},
eA:function eA(){},
l0:function l0(){},
lc:function lc(){},
iP:function iP(a,b){this.a=a
this.b=b},
lI:function lI(a,b){this.a=a
this.b=b},
lH:function lH(){},
rB:function rB(a){this.b=a},
rA:function rA(a){this.a=a},
wL:function wL(){},
wM:function wM(a,b){this.a=a
this.b=b},
wK:function wK(a,b,c){this.c=a
this.a=b
this.b=c},
mG:function mG(){},
vL:function vL(){},
xk:function xk(a){this.b=0
this.c=a},
vK:function vK(a){this.a=a},
xh:function xh(a){this.a=a
this.b=16
this.c=0},
Eq(a){var s=A.dY(a,null)
if(s!=null)return s
throw A.a(A.M(a,null,null))},
o2(a){var s=A.fw(a)
if(s!=null)return s
throw A.a(A.M("Invalid double",a,null))},
G5(a,b){a=A.aV(a,new Error())
if(a==null)a=A.fY(a)
a.stack=b.t(0)
throw a},
dj(a,b,c,d){var s,r=c?J.BW(a,d):J.BV(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aG(a,b,c){var s,r=A.d([],c.i("x<0>"))
for(s=J.N(a);s.m();)B.a.l(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.i("x<0>"))
s=A.d([],b.i("x<0>"))
for(r=J.N(a);r.m();)B.a.l(s,r.gp())
return s},
ab(a,b){var s=A.aG(a,!1,b)
s.$flags=3
return s},
Ah(a,b,c){var s,r
A.mf(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.a(A.b2(c,b,null,"end",null))
if(s===0)return""}r=A.Hu(a,b,c)
return r},
Hu(a,b,c){var s=a.length
if(b>=s)return""
return A.H2(a,b,c==null||c>s?s:c)},
je(a){return new A.iN(a,A.BZ(a,!1,!0,!1,!1,""))},
Ag(a,b,c){var s=J.N(b)
if(!s.m())return a
if(c.length===0){do a+=A.z(s.gp())
while(s.m())}else{a+=A.z(s.gp())
while(s.m())a=a+c+A.z(s.gp())}return a},
e7(){var s,r,q=A.GS()
if(q==null)throw A.a(A.by("'Uri.base' is not supported"))
s=$.CG
if(s!=null&&q===$.CF)return s
r=A.HA(q)
$.CG=r
$.CF=q
return r},
Hq(){return A.d8(new Error())},
FM(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
BG(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
l2(a){if(a>=10)return""+a
return"0"+a},
G4(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.a(A.a7(b,"name","No enum value with that name"))},
ld(a){if(typeof a=="number"||A.bB(a)||a==null)return J.cb(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Cg(a)},
G6(a,b){A.ej(a,"error",t.K)
A.ej(b,"stackTrace",t.l)
A.G5(a,b)},
kH(a){return new A.kG(a)},
p(a,b){return new A.cP(!1,null,b,a)},
a7(a,b,c){return new A.cP(!0,a,b,c)},
Cl(a){var s=null
return new A.hG(s,s,!1,s,s,a)},
Cm(a,b){return new A.hG(null,null,!0,a,b,"Value not in range")},
b2(a,b,c,d,e){return new A.hG(b,c,!0,a,d,"Invalid value")},
fy(a,b,c){if(0>a||a>c)throw A.a(A.b2(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.b2(b,a,c,"end",null))
return b}return c},
mf(a,b){if(a<0)throw A.a(A.b2(a,0,null,b,null))
return a},
rf(a,b,c,d){return new A.ly(b,!0,a,d,"Index out of range")},
by(a){return new A.jv(a)},
CD(a){return new A.mB(a)},
i(a){return new A.hN(a)},
aD(a){return new A.kW(a)},
M(a,b,c){return new A.A(a,b,c)},
Gs(a,b,c){var s,r
if(A.Bd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.l($.cs,a)
try{A.JK(a,s)}finally{if(0>=$.cs.length)return A.e($.cs,-1)
$.cs.pop()}r=A.Ag(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
A0(a,b,c){var s,r
if(A.Bd(a))return b+"..."+c
s=new A.bH(b)
B.a.l($.cs,a)
try{r=s
r.a=A.Ag(r.a,a,", ")}finally{if(0>=$.cs.length)return A.e($.cs,-1)
$.cs.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
JK(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.z(l.gp())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.l(b,A.z(p))
return}r=A.z(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.z(p)
r=A.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
A8(a,b,c){var s=A.m(b,c)
s.mq(a)
return s},
cY(a,b,c,d,e,f){var s
if(B.h===c){s=J.aO(a)
b=J.aO(b)
return A.ju(A.b7(A.b7($.ij(),s),b))}if(B.h===d){s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
return A.ju(A.b7(A.b7(A.b7($.ij(),s),b),c))}if(B.h===e){s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
d=J.aO(d)
return A.ju(A.b7(A.b7(A.b7(A.b7($.ij(),s),b),c),d))}if(B.h===f){s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
d=J.aO(d)
e=J.aO(e)
return A.ju(A.b7(A.b7(A.b7(A.b7(A.b7($.ij(),s),b),c),d),e))}s=J.aO(a)
b=J.aO(b)
c=J.aO(c)
d=J.aO(d)
e=J.aO(e)
f=J.aO(f)
f=A.ju(A.b7(A.b7(A.b7(A.b7(A.b7(A.b7($.ij(),s),b),c),d),e),f))
return f},
GJ(a){var s,r,q=$.ij()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.b7(q,J.aO(a[r]))
return A.ju(q)},
fD(a,b){return new A.hS(A.fq(a,b),b.i("hS<0>"))},
HA(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.CE(a4<a4?B.c.K(a5,0,a4):a5,5,a3).gje()
else if(s===32)return A.CE(B.c.K(a5,5,a4),0,a3).gje()}r=A.dj(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.E6(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.E6(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.c.aw(a5,"\\",n))if(p>0)h=B.c.aw(a5,"\\",p-1)||B.c.aw(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.aw(a5,"..",n)))h=m>n+2&&B.c.aw(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.aw(a5,"file",0)){if(p<=0){if(!B.c.aw(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.K(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.ca(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.aw(a5,"http",0)){if(i&&o+3===n&&B.c.aw(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.ca(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.aw(a5,"https",0)){if(i&&o+4===n&&B.c.aw(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.ca(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.nv(a4<a5.length?B.c.K(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.ID(a5,0,q)
else{if(q===0)A.i0(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.IE(a5,c,p-1):""
a=A.Iz(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dY(B.c.K(a5,i,n),a3)
d=A.IB(a0==null?A.h(A.M("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.IA(a5,n,m,a3,j,a!=null)
a2=m<l?A.IC(a5,m+1,l,a3):a3
return A.Iu(j,b,a,d,a1,a2,l<a4?A.Iy(a5,l+1,a4):a3)},
CI(a){var s=t.N
return B.a.b8(A.d(a.split("&"),t.s),A.m(s,s),new A.vJ(B.cK),t.G)},
mF(a,b,c){throw A.a(A.M("Illegal IPv4 address, "+a,b,c))},
Hx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.mF("each part must be in the range 0..255",a,r)}A.mF("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.mF(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aW(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.mF(j,a,q)
p=l}A.mF("IPv4 address should contain exactly 4 parts",a,q)},
Hy(a,b,c){var s
if(b===c)throw A.a(A.M("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.Hz(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.CH(a,b,c)
return!0},
Hz(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.A(n,a,q)
r=q
break}return new A.A("Unexpected character",a,q-1)}if(r-1===b)return new A.A(n,a,r)
return new A.A("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.A("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.A("Invalid IPvFuture address character",a,r)}},
CH(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.vI(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.e(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.e(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.e(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Hx(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.eq(l,8)
if(!(o<16))return A.e(s,o)
s[o]=e;++o
if(!(o<16))return A.e(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.a8.jG(s,a0,16,s,a)
B.a8.o9(s,a,a0,0)}}return s},
Iu(a,b,c,d,e,f,g){return new A.k4(a,b,c,d,e,f,g)},
Dc(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i0(a,b,c){throw A.a(A.M(c,a,b))},
IB(a,b){var s=A.Dc(b)
if(a===s)return null
return a},
Iz(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.i0(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Iw(a,q,r)
if(o<r){n=o+1
p=A.Dh(a,B.c.aw(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Hy(a,q,o)
l=B.c.K(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.c.dJ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Dh(a,B.c.aw(a,"25",n)?o+3:n,c,"%25")}else p=""
A.CH(a,b,o)
return"["+B.c.K(a,b,o)+p+"]"}}return A.IG(a,b,c)},
Iw(a,b,c){var s=B.c.dJ(a,"%",b)
return s>=b&&s<c?s:c},
Dh(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bH(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.As(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bH("")
l=h.a+=B.c.K(a,q,r)
if(m)n=B.c.K(a,r,r+3)
else if(n==="%")A.i0(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bH("")
if(q<r){h.a+=B.c.K(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.K(a,q,r)
if(h==null){h=new A.bH("")
m=h}else m=h
m.a+=i
l=A.Ar(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.K(a,b,c)
if(q<c){i=B.c.K(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
IG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.As(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bH("")
k=B.c.K(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.K(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bH("")
if(q<r){p.a+=B.c.K(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.i0(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.K(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bH("")
l=p}else l=p
l.a+=k
j=A.Ar(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.K(a,b,c)
if(q<c){k=B.c.K(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
ID(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.De(a.charCodeAt(b)))A.i0(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.i0(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.K(a,b,c)
return A.Iv(q?a.toLowerCase():a)},
Iv(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
IE(a,b,c){return A.k5(a,b,c,16,!1,!1)},
IA(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.k5(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.X(q,"/"))q="/"+q
return A.IF(q,e,f)},
IF(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.X(a,"/")&&!B.c.X(a,"\\"))return A.IH(a,!s||c)
return A.II(a)},
IC(a,b,c,d){return A.k5(a,b,c,256,!0,!1)},
Iy(a,b,c){return A.k5(a,b,c,256,!0,!1)},
As(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.z6(r)
o=A.z6(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aA(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.K(a,b,b+3).toUpperCase()
return null},
Ar(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.e(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.d.m5(a,6*p)&63|q
if(!(o<r))return A.e(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.e(k,l)
if(!(m<r))return A.e(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.e(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.Ah(s,0,null)},
k5(a,b,c,d,e,f){var s=A.Dg(a,b,c,d,e,f)
return s==null?B.c.K(a,b,c):s},
Dg(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.As(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.i0(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.Ar(n)}if(o==null){o=new A.bH("")
k=o}else k=o
k.a=(k.a+=B.c.K(a,p,q))+l
if(typeof m!=="number")return A.Bb(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.K(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
Df(a){if(B.c.X(a,"."))return!0
return B.c.bI(a,"/.")!==-1},
II(a){var s,r,q,p,o,n,m
if(!A.Df(a))return a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a_(s,"/")},
IH(a,b){var s,r,q,p,o,n
if(!A.Df(a))return!b?A.Dd(a):a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gaa(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.k(s,0,A.Dd(s[0]))}return B.a.a_(s,"/")},
Dd(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.De(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.K(a,0,s)+"%3A"+B.c.aR(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
Ix(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.a(A.p("Invalid URL encoding",null))}}return r},
At(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cK===d)return B.c.K(a,b,c)
else p=new A.dJ(B.c.K(a,b,c))
else{p=A.d([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.a(A.p("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.a(A.p("Truncated URI",null))
B.a.l(p,A.Ix(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.qQ.bG(p)},
De(a){var s=a|32
return 97<=s&&s<=122},
CE(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.M(k,a,r))}}if(q<0&&r>b)throw A.a(A.M(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gaa(j)
if(p!==44||r!==n+7||!B.c.aw(a,"base64",n+1))throw A.a(A.M("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.fA.oJ(a,m,s)
else{l=A.Dg(a,m,s,256,!0,!1)
if(l!=null)a=B.c.ca(a,m,s,l)}return new A.vH(a,j,c)},
E6(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.a.k(e,o>>>5,r)}return d},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a){this.a=a},
n9:function n9(){},
at:function at(){},
kG:function kG(a){this.a=a},
e5:function e5(){},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ly:function ly(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(a){this.a=a},
mB:function mB(a){this.a=a},
hN:function hN(a){this.a=a},
kW:function kW(a){this.a=a},
m0:function m0(){},
jq:function jq(){},
wt:function wt(a){this.a=a},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(){},
L:function L(){},
nB:function nB(){},
vm:function vm(){this.b=this.a=0},
bH:function bH(a){this.a=a},
vJ:function vJ(a){this.a=a},
vI:function vI(a){this.a=a},
k4:function k4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
vH:function vH(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function nv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
n4:function n4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
tj:function tj(a){this.a=a},
DD(a){var s
if(typeof a=="function")throw A.a(A.p("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.IU,a)
s[$.zT()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.a(A.p("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.IV,a)
s[$.zT()]=a
return s},
IU(a){return t.BO.a(a).$0()},
IV(a,b,c){t.BO.a(a)
if(A.j(c)>=1)return a.$1(b)
return a.$0()},
o4(a,b,c){return c.a(a[b])},
DE(a,b){return a[b]},
b0(a,b,c,d){return d.a(a[b].apply(a,c))},
av(a,b){var s=new A.as($.ar,b.i("as<0>")),r=new A.jC(s,b.i("jC<0>"))
a.then(A.ig(new A.zG(r,b),1),A.ig(new A.zH(r),1))
return s},
DQ(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
ih(a){if(A.DQ(a))return a
return new A.z_(new A.jJ(t.BT)).$1(a)},
zG:function zG(a,b){this.a=a
this.b=b},
zH:function zH(a){this.a=a},
z_:function z_(a){this.a=a},
H4(a){var s
if(a==null)s=B.bb
else{s=new A.eY()
s.ck(a)}return s},
ne:function ne(){},
eY:function eY(){this.b=this.a=0},
l7:function l7(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
Hl(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aG(b3,!0,b1)
B.a.l(b2,128)
while(B.d.O(b2.length,64)!==56)B.a.l(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.l(b2,B.d.jQ(s,r)&255)
for(q=1779033703,p=3144134277,o=1013904242,n=2773480762,m=1359893119,l=2600822924,k=528734635,j=1541459225,i=0;i<b2.length;i+=64){h=A.dj(64,0,!1,b1)
for(g=0;g<16;++g){f=i+g*4
e=b2.length
if(!(f<e))return A.e(b2,f)
d=b2[f]
c=f+1
if(!(c<e))return A.e(b2,c)
c=b2[c]
b=f+2
if(!(b<e))return A.e(b2,b)
b=b2[b]
a=f+3
if(!(a<e))return A.e(b2,a)
B.a.k(h,g,(d<<24|c<<16|b<<8|b2[a])>>>0)}for(g=16;g<64;++g){e=h[g-15]
d=h[g-2]
B.a.k(h,g,h[g-16]+(((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)>>>0)+h[g-7]+(((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)>>>0)>>>0)}for(a0=j,a1=k,a2=l,a3=m,a4=n,a5=o,a6=p,a7=q,g=0;g<64;++g,a0=a1,a1=a2,a2=a3,a3=a9,a4=a5,a5=a6,a6=a7,a7=b0){a8=a0+(((a3>>>6|a3<<26)^(a3>>>11|a3<<21)^(a3>>>25|a3<<7))>>>0)+((a3&a2^~a3&a1)>>>0)+B.kU[g]+h[g]>>>0
a9=a4+a8>>>0
b0=a8+((((a7>>>2|a7<<30)^(a7>>>13|a7<<19)^(a7>>>22|a7<<10))>>>0)+((a7&a6^a7&a5^a6&a5)>>>0)>>>0)>>>0}q=q+a7>>>0
p=p+a6>>>0
o=o+a5>>>0
n=n+a4>>>0
m=m+a3>>>0
l=l+a2>>>0
k=k+a1>>>0
j=j+a0>>>0}return new A.I(A.d([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.v2()),t.dH).oA(0)},
v2:function v2(){},
mH:function mH(a,b){this.a=a
this.b=b},
GC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.q(h.w,b))throw A.a(A.a7(b,"lod","package does not declare this LOD"))
s=A.d([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.r)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.i("part "+r.a+" has no "+b+" payload")
throw A.a(h)}k=q
j=m.h(0,k)
p=j==null?A.h(A.i("model package payload is missing: "+k)):j
J.el(s,a.nF(new Uint8Array(A.S(p))))}return new A.t1(a,s)}catch(i){for(h=s,n=A.C(h).i("bO<1>"),h=new A.bO(h,n),h=new A.an(h,h.gu(0),n.i("an<a1.E>")),n=n.i("a1.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aM(o)}throw i}},
t1:function t1(a,b){this.a=a
this.b=b
this.c=!1},
lR:function lR(a){this.e=a},
tc:function tc(a,b){this.a=a
this.b=b},
t3:function t3(){},
t4:function t4(){},
t5:function t5(){},
GD(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.aa(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.a(B.iz)
s=a.h(0,"parts")
if(!t.j.b(s)||J.kA(s))throw A.a(B.ii)
r=A.yC(a,"assetId")
q=A.yC(a,"packageHash")
p=A.yC(a,"sourceFormat")
o=A.d([],t.w4)
for(n=J.N(s),m=t.P;n.m();)o.push(A.GE(m.a(n.gp())))
n=A.B2(a.h(0,"materials"))
m=A.B2(a.h(0,"textures"))
l=A.B2(a.h(0,"lods"))
k=A.DR(a.h(0,"combinedBounds"))
j=A.Kh(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bl(0,new A.t7(),h,h)
i=h}return new A.t6(r,q,p,o,n,m,l,k,j,i==null?B.aV:i)},
GE(a){var s,r,q=A.yC(a,"id"),p=A.xp(a.h(0,"materialSlot"))
if(p==null)p=A.h(B.hA)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bl(0,new A.tb(),r,r)
s=r}return new A.fs(q,p,s==null?B.aV:s)},
yC(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.a(A.M(b+" is required",null,null))
return s},
JF(a){if(a.length===0||B.c.X(a,"/")||B.c.q(a,"\\"))return!1
return B.a.a5(A.d(a.split("/"),t.s),new A.yr())},
B2(a){var s,r
if(a==null)return B.o
if(!t.j.b(a)||J.kz(a,new A.yK()))throw A.a(B.hR)
s=A.d([],t.s)
for(r=J.N(a);r.m();)s.push(A.v(r.gp()))
return s},
DR(a){var s,r
if(a==null)return B.bA
if(!t.j.b(a)||J.kz(a,new A.yu()))throw A.a(B.j7)
s=A.d([],t.n)
for(r=J.N(a);r.m();)s.push(A.a_(r.gp()))
return s},
Kh(a){var s,r,q,p
if(a==null)return B.mv
if(!t.f.b(a))throw A.a(B.ic)
if(a.ga6().P(0,new A.yI()))throw A.a(B.iA)
s=A.m(t.N,t.dd)
for(r=a.gN(),r=r.gA(r);r.m();){q=r.gp()
p=q.a
if(typeof p=="string")s.k(0,p,A.DR(q.b))}return s},
t6:function t6(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
t7:function t7(){},
t9:function t9(){},
ta:function ta(){},
t8:function t8(){},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(){},
yr:function yr(){},
yK:function yK(){},
yu:function yu(){},
yI:function yI(){},
EF(a){var s,r,q,p,o,n,m=A.d([],t.t9),l=new A.zR(m)
for(s=a.B(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.a0(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){o=s[q]
n=o.a
if(!p.l(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.J("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
Lv(a,b){var s,r,q,p,o,n=A.d([],t.t9),m=new A.zS(n),l=A.a0(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)l.L(0,s[q].c.gan())
for(s=A.eW(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.J(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.bZ(b,b.r,b.e,A.w(b).i("bZ<1>"));s.m();){r=s.d
if(!l.q(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bi(o,".fbx")||B.c.bi(o,".obj")||B.c.bi(o,".mtl")||B.c.bi(o,".gltf")||B.c.bi(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
zR:function zR(a){this.a=a},
zS:function zS(a){this.a=a},
u0:function u0(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n},
u1:function u1(){},
fx:function fx(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=!1},
hd:function hd(a,b){this.a=a
this.b=b},
pw:function pw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
px:function px(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kY:function kY(){var _=this
_.c=_.b=_.a=null
_.d=0
_.e=!1},
mA:function mA(a,b){this.a=a
this.b=b},
m6:function m6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3},
BD(a,b,c,d,e,f,g,h){return new A.it(g,f,h,b,d,e,c,a)},
it:function it(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=$},
vg:function vg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.z=f
_.Q=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.CW=m
_.cx=n
_.cy=o
_.db=p},
ll:function ll(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6
_.go=a7
_.id=a8
_.k1=a9
_.k2=b0
_.k3=b1
_.k4=b2},
lm:function lm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eF(a,b){return new A.lw(a,b)},
e0:function e0(){},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
m1:function m1(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b){this.a=a
this.b=b},
lw:function lw(a,b){this.a=a
this.b=b},
Lj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.d([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.jS(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Y(f,new A.zI())
s=A.d([],t.cv)
for(r=A.hP(f,0,A.ej(b,"count",t.S),t.mn),q=r.$ti,r=new A.an(r,r.gu(0),q.i("an<a1.E>")),q=q.i("a1.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function m5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bQ:function bQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
zI:function zI(){},
iT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.c_(h,a,p,o,n,g,k,j,m,i,e,d,q,r,c,b,f,l)},
lP(a,b){if(!isFinite(b)||b<0||b>1)throw A.a(A.p("MaterialDefinition."+a+" must be in [0, 1]: "+A.z(b),null))},
h5:function h5(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.w=f
_.x=g
_.z=h
_.at=i
_.ax=j
_.ch=k
_.CW=l
_.db=m
_.dx=n
_.fx=o
_.fy=p
_.go=q
_.id=r},
GA(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.tu.b(a)){s=a
break A}s=A.h(A.p("MeshData.indices must be Uint16List or Uint32List, got "+J.fa(a).t(0),null))}return s},
d1:function d1(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
vM:function vM(){},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rV:function rV(){},
rW:function rW(){},
rX:function rX(){},
l3:function l3(){},
j3(a){var s,r,q="volumetric",p=t.N,o=A.aQ(["sceneColor","present"],p),n=a.a.b
if(n.q(0,"shadows"))o.L(0,A.aQ(["shadowMap","sceneDepth"],p))
if(n.q(0,q)){o.l(0,"volumetricLight")
o.l(0,"sceneColor#"+(a.d>1?2:1))}if(n.q(0,"ssao"))o.L(0,A.aQ(["ssaoRaw","ssaoBlurred"],p))
if(n.q(0,"bloom")){if(a.d>1)s=n.q(0,q)?3:2
else s=n.q(0,q)?2:1
o.L(0,A.aQ(["bloomBlurH","bloomBlurV","sceneColor#"+s],p))}if(a.d>1)o.l(0,"sceneColor#1")
if(n.q(0,"dof"))o.L(0,A.aQ(["dofBlurH","dofBlurV","dofOutput"],p))
if(n.q(0,"grade"))o.l(0,"gradeOutput")
if(n.q(0,"ps1"))o.l(0,"ps1Output")
r=n.q(0,"vhs")
if(r)o.l(0,"vhsOutput")
return new A.tl(A.fD(o,p),r)},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
m8:function m8(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
hk:function hk(a,b){this.a=a
this.b=b},
kP:function kP(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
mx:function mx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
fA:function fA(a,b){this.a=a
this.b=b},
b1:function b1(a,b,c){this.a=a
this.b=b
this.d=c},
qb:function qb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Gy(a){var s,r,q
for(s=a.a,s=new A.ad(s,s.r,s.e,a.$ti.i("ad<1>")),r=B.bR;s.m();){switch(s.d.a){case 0:q=B.bR
break
case 1:q=B.dX
break
case 2:q=B.dY
break
case 3:q=B.dZ
break
default:q=null}if(A.C7(q)>A.C7(r))r=q}return r},
C7(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
Ec(a){return new A.ca(A.Kp(a),t.EF)},
Kp(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$Ec(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.a5("albedo",o),1
case 4:case 3:o=s.x
r=o!=null?5:6
break
case 5:r=7
return b.b=new A.a5("normal",o),1
case 7:case 6:return 0
case 1:return b.c=p.at(-1),3}}}},
fr:function fr(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a,b){this.a=a
this.b=b},
rS:function rS(a){this.a=a},
rT:function rT(a){this.a=a},
rQ:function rQ(a){this.a=a},
rR:function rR(){},
Gz(){return new A.lQ(new A.dq(new A.rU(),A.d([],t.Fy),A.d([],t.t),t.ja))},
lQ:function lQ(a){this.a=a},
rU:function rU(){},
E9(a){var s=4
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 4:s=3
break
case 5:break
case 6:s=5
break
case 7:s=6
break
case 8:break
case 3:s=A.h(A.by("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
J0(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.E9(o.a)===b)q+=o.c}return q},
GB(a){return new A.rY(a,new A.dq(new A.rZ(),A.d([],t.EM),A.d([],t.t),t.wm),A.m(t.S,t.qt))},
C8(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.tu.b(a)){s=a.byteLength
break A}s=A.h(A.p("MeshStore indices must be Uint16List or Uint32List",null))}return s},
mD:function mD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rY:function rY(a,b,c){this.a=a
this.b=b
this.c=c},
rZ:function rZ(){},
t_:function t_(){},
KO(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bJ(B.d.fh(r,16),8,"0")+B.c.bJ(B.d.fh(q,16),8,"0")},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
t0:function t0(a,b){this.b=a
this.c=b},
t2:function t2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hz:function hz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null
_.y=h
_.z=i
_.Q=!1},
dZ(a,b){return new A.md(a,b)},
Ei(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.a(A.dZ(B.oD,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.kE[q])throw A.a(A.dZ(B.oE,'expected "QMSH", got '+B.fy.nE(B.a8.ae(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.fy(0,null,B.d.bd(a.byteLength,p))
n=J.Bt(B.a8.gey(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.a(A.dZ(B.oF,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.pN.q(0,k)))throw A.a(A.dZ(B.ed,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.a(A.dZ(B.oG,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.O(j,3)!==0)throw A.a(A.dZ(B.oI,"vertexCount "+j+" is not a multiple of 3"))
h=J.ro(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.P(h,new A.z0()))throw A.a(A.dZ(B.oH,"bounds contain a non-finite value: "+A.z(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.a(A.dZ(B.ee,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.e(g,q)
g[q]=f}A:{if(14===k){d=B.am
break A}if(18===k){d=B.rc
break A}if(20===k){d=B.rb
break A}d=A.h(A.dZ(B.ed,"no vertex layout for stride "+k))}s=new A.c0(d,g,null,new A.h4(new A.B(h[0],h[1],h[2]),new A.B(h[3],h[4],h[5])))
try{s.B()}catch(e){r=A.al(e)
d=A.dZ(B.ee,"mesh validation failed: "+A.z(r))
throw A.a(d)}return s},
d_:function d_(a,b){this.a=a
this.b=b},
md:function md(a,b){this.a=a
this.b=b},
z0:function z0(){},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
vx:function vx(a,b){this.a=a
this.b=b},
vy:function vy(a){this.a=a},
vv:function vv(a,b){this.a=a
this.b=b},
vw:function vw(){},
Hv(a){var s=new A.mz(a,new A.dq(new A.vz(),A.d([],t.f2),A.d([],t.t),t.qq),A.m(t.S,t._))
s.d=s.b2($.Bk())
s.e=s.b2($.Bh())
s.f=s.b2($.Bi())
s.r=s.b2($.Bg())
s.w=s.b2($.Bj())
return s},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
vz:function vz(){},
vA:function vA(){},
vC:function vC(){},
vB:function vB(){},
Ho(a,b,c,d,e){var s,r,q
if(c)return B.qm
if(d)return B.qg
s=A.Cx(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.qq
r=s<0
if(a>=0.2617993877991494)return r?B.eB:B.qr
if(a>=0.10471975511965977)return r?B.eB:B.qs
if(a>=-0.014538592669112763)return r?B.qp:B.qt
q=a*180/3.141592653589793
if(q>=-6)return r?B.qo:B.qi
if(q>=-12)return r?B.qn:B.qj
if(q>=-18)return r?B.qh:B.qk
return B.ql},
Cy(a,b,c){var s
if(b<=a)return c<a?0:1
s=B.b.n((c-a)/(b-a),0,1)
return s*s*(3-2*s)},
Cx(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
bn:function bn(a,b){this.a=a
this.b=b},
vk:function vk(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Lk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.gU(0)
if(!g)throw A.a(A.p("invalid volumetric source selection inputs",null))
s=A.a0(t.N)
r=A.d([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.r)(c),++n){m=c[n]
m.B()
l=m.a
if(!s.l(0,l))throw A.a(A.p("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.CL(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.l(r,new A.jT(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.Y(r,new A.zJ())
g=A.d([],t.xL)
for(q=A.hP(r,0,A.ej(a,"count",t.S),t.bG),p=q.$ti,q=new A.an(q,q.gu(0),p.i("an<a1.E>")),p=p.i("a1.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
CL(a,b,c){var s,r,q,p
for(s=[new A.a5("distance",b),new A.a5("referenceDistance",c),new A.a5("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.h(A.p(q.a+" must be finite: "+A.z(p),null))}if(b<0||c<=0||a<=0)throw A.a(A.p("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.n(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
HF(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gU(0))A.h(A.p(c1+c5.t(0),c0))
if(!c3.gU(0))A.h(A.p(c2+c3.t(0),c0))
if(!isFinite(c4))A.h(A.p("rayLength must be finite: "+A.z(c4),c0))
if(!isFinite(c6))A.h(A.p("scatteringCoeff must be finite: "+A.z(c6),c0))
if(!isFinite(0.7))A.h(A.p("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.h(A.p("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbj()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.a(A.p("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.v,e=B.v,d=0,c=0;c<c7.length;c7.length===s||(0,A.r)(c7),++c){b=c7[c]
b.B()
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.CL(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.h(A.p(c1+c5.t(0),c0))
if(!(n&&m&&l))A.h(A.p(c2+c3.t(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.h(A.p("lightPos must be finite: "+a.t(0),c0))
if(!isFinite(a8))A.h(A.p("lightIntensity must be finite: "+A.z(a8),c0))
if(k)A.h(A.p("rayDirection must be nonzero",c0))
if(o)A.h(A.p("rayLength must be >= 0",c0))
if(a8<0||g)A.h(A.p("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.ga2()
a=a9.a
b0=a9.b
b1=a9.c
b2=a1*a+a3*b0+a5*b1
b3=B.b.n(b2,0,c4)
b4=a0-(r+a*b3)
b5=a2-(q+b0*b3)
b6=a4-(p+b1*b3)
b7=Math.sqrt(Math.max(0.0001,b4*b4+b5*b5+b6*b6))
b8=Math.atan(-b3/b7)
b9=Math.max(0,a8*c6/(12.566370614359172*b7)*(Math.atan((c4-b3)/b7)-b8)*(0.51/(12.566370614359172*Math.pow(1.49-1.4*(b2/Math.max(0.0001,Math.sqrt(a6))),1.5))))*a7
if(b9<=0)continue
a=b.c
f=new A.B(f.a+a.a*b9,f.b+a.b*b9,f.c+a.c*b9)
a6=b9/Math.max(1e-8,Math.sqrt(a6))
e=new A.B(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.w_(f,e.gbj()<1e-8?B.v:e.ga2(),d)},
cp:function cp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
zJ:function zJ(){},
w_:function w_(a,b,c){this.a=a
this.b=b
this.c=c},
KK(a){var s,r,q,p,o,n,m,l,k,j=A.d([],t.hr),i=A.m(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
o=p.gG().y
if(o==null){B.a.l(j,new A.dU(p,A.d([p],r)))
continue}n=""+p.gG().a.a+":"+p.gG().b.a+":"+A.z(o)
m=i.h(0,n)
if(m==null){i.k(0,n,j.length)
B.a.l(j,new A.dU(p,A.d([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.e(j,m)
k=j[m].b
if(k.length>=16){i.k(0,n,l)
B.a.l(j,new A.dU(p,A.d([p],r)))}else B.a.l(k,p)}}return j},
dU:function dU(a,b){this.a=a
this.b=b},
lh:function lh(a){this.a=a},
q4:function q4(){},
q5:function q5(a){this.a=a},
q2:function q2(a){this.a=a},
q3:function q3(a){this.a=a},
li:function li(a,b){this.a=a
this.b=b},
fj:function fj(a,b){this.a=a
this.b=b},
ln:function ln(a,b){this.a=a
this.b=b
this.c=0},
I8(){return new A.hV()},
qa:function qa(a){this.a=a
this.b=null},
hV:function hV(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
Ab(){return!0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
tp:function tp(){},
tq:function tq(){},
cx:function cx(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
aR:function aR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
iw:function iw(a){this.b=a},
mb:function mb(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bl:function bl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
u2:function u2(){},
bf:function bf(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
u4:function u4(a,b){this.a=a
this.b=b},
u9:function u9(){},
u8:function u8(){},
u7:function u7(){},
u6:function u6(a){this.a=a},
u5:function u5(a,b,c){this.a=a
this.b=b
this.c=c},
u3:function u3(a,b){this.a=a
this.b=b},
Ha(a){return new A.jf(a,new A.dq(new A.ua(),A.d([],t.w_),A.d([],t.t),t.tc),A.m(t.iO,t.gE))},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
ua:function ua(){},
ye(a,b){return A.Jb(a,b)},
Jb(a,b){var s=0,r=A.aL(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$ye=A.aM(function(c,d){if(c===1)return A.aI(d,r)
for(;;)switch(s){case 0:a.cm()
if(a.at!=null)throw A.a(A.i("renderer.configure cannot overlap an active frame"))
p=a.b.cr(b)
i=p.a.d
if(!(i.a.gu(0)!==0||i.b.gu(0)!==0||i.c.gu(0)!==0||i.d.gu(0)!==0||i.e||i.f)&&!i.r){a.b.cs(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.dR(b)
n=new A.mb(a.a,A.m(t.N,t.CH))
l=A.Dz(a,n,b,o.a.b.a)
m=l.a
a.b.cs(p)
i=a.x
h=o
if(i.e)A.h(A.i("GPU resource adapter is disposed"))
i.fW(h)
g=i.c
i.b.cs(h.a)
i.c=h
i.d=null
if(g!=null)i.ef(g.b)
h.c=B.jx
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
i=k
if(i!=null)i.bY()
i=j
if(i!=null)i.bY()}catch(e){if(p.c===B.be){i=a.b
h=t.AB.a(p)
if(i.d)A.h(A.i("configuration coordinator is disposed"))
i.h5(h)
i.a.hX(h.a)
i.b.fc(h.b)
h.c=B.h5
i.c=null}i=o
if((i==null?null:i.c)===B.aw){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.h(A.i("GPU resource adapter is disposed"))
i.fW(h)
i.ef(h.b)
i.b.fc(h.a)
h.c=B.jy
i.d=null}i=m
if(i!=null)i.bY()
i=n
if(i!=null)i.bY()
throw e}case 1:return A.aJ(q,r)}})
return A.aK($async$ye,r)},
DA(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.Dz(a,q,s,a.x.gp().a.b.a)
a.z=r.a
a.Q=r.b},
Dz(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.yc(a),j=new A.yd(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.KM(b,h,d,i,s.gpA(),new A.xY(j),new A.xZ(j),new A.y_(a),new A.y4(a),new A.y5(a),new A.y6(j),new A.y7(j),s.gpC(),new A.y8(a),s.gpH(),r.gpE(),k,s.gpJ(),s.gpL(),new A.y9(j,c),new A.ya(j),new A.yb(j),new A.y0(j),new A.y1(j),new A.y2(a),new A.y3(j),e,f,g,c.r)}else{p=new A.aR(l,B.r,g,f,e,0)
o=new A.aR(l,B.r,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.iX(h,p,o):null
k=A.d([new A.mV(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity*uAmbientLightScale+\n    vec3(ndotl)*uDirectLightScale,0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.j6(b,u.l,u.E,h,i,d))
q=new A.lh(k)}a.r.toString
m=q.mL(B.ah,new A.u2(),!1,new A.no())
k=m.a.b
if(k.length!==0)throw A.a(A.i("safe renderer graph is invalid: "+A.z(k)))
return new A.xb(q,m)},
Jc(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.a(A.i("renderer graph is not initialized"))
s=b7.c
s=A.J(new A.am(s,A.w(s).i("am<2>")),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a8(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.e(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.ak()
p=p.gaA()
n=A.C(p)
B.a.l(s,new A.nC(new A.cT((r|1073741824)>>>0,0,"transient"),q,A.bb(new A.I(p,n.i("B(1)").a(o.gaF()),n.i("I<1,B>")))))}p=b8.a
m=A.KS(A.BM(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.eF(B.aS,n))
j=j.b
g=j.$ti
j.a8(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.e(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.af(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gG().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.eF(B.aS,n))
j=j.b
g=j.$ti
j.a8(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.e(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.af(n>0?n:h.e,3)}o=t.N
n=A.m(o,t.rL)
e=new A.qa(n)
e.mH("cull")
j=l-f
d=e.b
if(d==null)A.h(A.i("cull recorded outside an active frame"))
if(j<0)A.h(A.p("cull totals must be non-negative",null))
c=n.h(0,d)
c.c+=j
c.e+=m.b.b
b=A.d([],t.fs)
a=A.d([],t.AM)
for(i=s.length,g=t.E0,a0=p.a,a1=t.EH,k=0;k<s.length;s.length===i||(0,A.r)(s),++k){a2=s[k]
if(a2.gG().e===B.as)B.a.l(a,new A.b6(new A.bX(a0.jc(a2.gG().c.a).c,a2.gaj().a),a2,a1))
else B.a.l(b,new A.b6(new A.c1(B.or,a2.gG().b,a2.gG().a,a2.gaj().a),a2,g))}a3=new A.nb(A.KK(A.Lm(b)),A.Ll(a),p,b8.b,b8.c)
a4=new A.l6(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gG().a
if(g.length===0)A.h(A.a7(g,"passId",null))
e.b=g
n.c6(g,A.Ek())
a6=A.m(o,i)
for(g=a5.gG().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.h(A.i("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.h(A.i("resource is not in candidate: "+b1))
b3=new A.h9(b2)
a6.k(0,b0+"#"+a1,b3)
a6.c6(b0,new A.yf(b3))}a5.ar(new A.kR(a6,a4,new A.yg(b8,b6).$0(),a3))}return new A.wu(e,m,j)},
Ct(a){return new A.ul(a,new A.kX(new A.kY(),new A.jj()),new A.ln(A.d([],t.h1),B.jg),A.d([],t.Ft),B.c2,A.d([],t.ow),null)},
mi:function mi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
wu:function wu(a,b,c){this.a=a
this.b=b
this.c=c},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
yc:function yc(a){this.a=a},
yd:function yd(a,b){this.a=a
this.b=b},
yb:function yb(a){this.a=a},
y4:function y4(a){this.a=a},
y5:function y5(a){this.a=a},
ya:function ya(a){this.a=a},
y_:function y_(a){this.a=a},
y1:function y1(a){this.a=a},
y0:function y0(a){this.a=a},
y9:function y9(a,b){this.a=a
this.b=b},
xY:function xY(a){this.a=a},
xZ:function xZ(a){this.a=a},
y6:function y6(a){this.a=a},
y7:function y7(a){this.a=a},
y8:function y8(a){this.a=a},
y3:function y3(a){this.a=a},
y2:function y2(a){this.a=a},
yf:function yf(a){this.a=a},
yg:function yg(a,b){this.a=a
this.b=b},
xb:function xb(a,b){this.a=a
this.b=b},
no:function no(){},
nb:function nb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
ul:function ul(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
um:function um(){},
un:function un(){},
uo:function uo(){},
nl:function nl(a){this.b=a},
wG:function wG(){},
ns:function ns(){},
jp:function jp(a,b){this.a=a
this.b=b},
Lm(a){var s,r,q=A.J(a,t.E0)
B.a.Y(q,new A.zN())
s=A.C(q)
r=s.i("I<1,cB>")
s=A.J(new A.I(q,s.i("cB(1)").a(new A.zO()),r),r.i("a1.E"))
s.$flags=1
return s},
Ll(a){var s,r,q=A.J(a,t.EH)
B.a.Y(q,new A.zL())
s=A.C(q)
r=s.i("I<1,cB>")
s=A.J(new A.I(q,s.i("cB(1)").a(new A.zM()),r),r.i("a1.E"))
s.$flags=1
return s},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
zN:function zN(){},
zO:function zO(){},
zL:function zL(){},
zM:function zM(){},
KS(a,b,c){var s,r,q,p,o,n,m,l=A.d([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gG().d&c)>>>0===0){++q
continue}n=o.gfn()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.a(A.p("cullItems: non-finite world bounds for instance "+o.gaj().t(0),null))
if(a.ja(o.gfn())===B.bf){++q
continue}B.a.l(l,o)}return new A.pM(l,new A.pN(q))},
pN:function pN(a){this.b=a},
pM:function pM(a,b){this.a=a
this.b=b},
bb(a){var s,r,q,p,o,n,m,l,k
for(s=J.N(a),r=B.qX,q=B.r1,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.B(m,k,Math.min(r.c,o))
q=new A.B(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.a(A.p("Aabb.fromPoints requires at least one point",null))
return new A.h4(r,q)},
h4:function h4(a,b){this.a=a
this.b=b},
BM(a){var s,r,q,p,o,n,m=a.a,l=new A.qd(),k=m.length
if(3>=k)return A.e(m,3)
s=m[3]
r=m[0]
if(7>=k)return A.e(m,7)
q=m[7]
p=m[4]
if(11>=k)return A.e(m,11)
o=m[11]
n=m[8]
if(15>=k)return A.e(m,15)
return new A.qc(A.d([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
fv:function fv(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
qc:function qc(a){this.a=a},
qd:function qd(){},
C5(a){if(a.length!==16)throw A.a(A.p("Mat4.fromColumnMajor requires 16 values",null))
return new A.dk(new Float32Array(A.S(a)))},
A9(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dk(q)},
C6(a,b,c){var s=b.ga2(),r=c.b6(s).ga2(),q=s.b6(r),p=new Float32Array(16)
p[0]=r.a
p[1]=q.a
p[2]=-s.a
p[3]=0
p[4]=r.b
p[5]=q.b
p[6]=-s.b
p[7]=0
p[8]=r.c
p[9]=q.c
p[10]=-s.c
p[11]=0
p[12]=-r.bh(a)
p[13]=-q.bh(a)
p[14]=s.bh(a)
p[15]=1
return new A.dk(p)},
dk:function dk(a){this.a=a},
rO:function rO(){},
hF(a,b){var s=a.ga2(),r=b/2,q=Math.sin(r)
return new A.me(s.a*q,s.b*q,s.c*q,Math.cos(r))},
me:function me(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
Fs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return new A.h6(j,i,c,k,e,f,a,o,d,h,l,n,m,b,g)},
ip:function ip(a,b){this.a=a
this.b=b},
oz:function oz(a,b){this.a=a
this.b=b},
oC:function oC(a,b,c){this.a=a
this.b=b
this.c=c},
oA:function oA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.cy=o},
oB:function oB(){},
lk:function lk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q8:function q8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jD:function jD(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
n1:function n1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kQ:function kQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
n2:function n2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
l5:function l5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
n6:function n6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jF:function jF(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
n7:function n7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
la:function la(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.z=i
_.Q=j
_.as=k
_.at=l},
n8:function n8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lu:function lu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
nd:function nd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function nj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.b=a},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aR(a.a,a.b,b,c,s,r)},
Ac:function Ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.c=a
_.d=b
_.r=c
_.w=d
_.y=e
_.z=f
_.Q=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.CW=m
_.cx=n
_.cy=o
_.db=p
_.dx=q
_.dy=r
_.fr=s},
GP(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2.5
break
case 3:s=3.5
break
default:s=null}return s},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
np:function np(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mc:function mc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nq:function nq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Cw(a){var s=a.c,r=Math.abs(s.a)<0.99?B.b0:B.G,q=A.C6(a.b,s,r)
return new A.fF(A.A9(1,a.f,B.b.n(a.w*2,0.1,3),0.05).a3(0,q))},
fF:function fF(a){this.a=a},
mq:function mq(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
nt:function nt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
KM(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[7]=float[7](\n  0.167465,0.153582,0.118331,0.076665,0.041582,0.018907,0.007203\n);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<7;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.q(0,"shadows"))throw A.a(A.a7(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c0.q(0,"ssao")
r=c0.q(0,"bloom")
q=c0.q(0,"dof")
p=c0.q(0,"grade")
o=c0.q(0,"ps1")
n=c0.q(0,"vhs")
m=c0.q(0,"volumetric")
c0=B.d.af(e9+1,2)
l=B.d.af(e8+1,2)
k=A.bv(B.c5,e9,e8,e7,b2)
j=A.bv(B.c5.iT(),e9,e8,b2,b2)
i=e7>1
h=A.bv(B.pj,e9,e8,b2,i?2:1)
g=A.bv(B.pi,c0,l,b2,b2)
A.bv(B.pr,e9,e8,b2,b2)
f=A.bv(B.po,e9,e8,b2,b2)
e=A.bv(B.ph,f0,f0,b2,b2)
d=A.bv(B.pk,c0,l,b2,b2)
c=A.bv(B.pl,c0,l,b2,b2)
b=A.bv(B.pp,c0,l,b2,b2)
a=A.bv(B.pq,c0,l,b2,b2)
a0=$.EH()
a1=i?1:0
a2=A.bv(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.bv(B.pe,c0,l,b2,b2)
a1=A.bv(B.pf,c0,l,b2,b2)
a3=A.bv(B.pg,e9,e8,b2,b2)
a4=A.bv(B.pm,e9,e8,b2,b2)
a5=A.bv(B.ps,e9,e8,b2,b2)
a6=A.bv(B.pn,e9,e8,b2,b2)
a7=i?new A.iX(c2,k,j):b2
b9.a=null
a8=A.Cw(B.qu)
if(m){a9=i?j:k
b0=new A.mR(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform mat4 uView;\nuniform mat4 uInverseProjection;\nuniform vec3 uVolumetricAlbedo;\nuniform float uVolumetricHeightFalloff;\nuniform float uVolumetricDustDensity;\nuniform float uVolumetricJitter;\nuniform float uVolumetricIntensity;\nuniform float uVolumetricSampleCount;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay,\n  float rayLength\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec3 sourceView = (uView * vec4(position, 1.0)).xyz;\n  float sourceDistance = length(sourceView);\n  float tClosest = clamp(dot(sourceView, viewRay), 0.0, rayLength);\n  vec3 sampleToSource = sourceView - viewRay * tClosest;\n  float distanceToSource = max(length(sampleToSource), 1e-3);\n  float cutoff = 1.0 - smoothstep(\n    cutoffDistance * 0.65, cutoffDistance, sourceDistance);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(distanceToSource * distanceToSource,\n          referenceDistance * referenceDistance);\n  // The incoming direction is source -> sample and the outgoing direction is\n  // sample -> camera. This is the same phase convention as the directional\n  // medium path, but now evaluated against the located source.\n  float phase = phaseHenyeyGreenstein(\n    dot(normalize(sampleToSource), viewRay), uAnisotropy);\n  // Located practicals and lightning must also acquire visible body in a\n  // dust-filled room. Use the same broad haze plus particulate density as the\n  // directional march; otherwise a clear-air fog toggle would accidentally\n  // erase dust-lit source rays while the directional shafts still showed it.\n  float mediumDensity = max(uFogDensity + uVolumetricDustDensity, 0.0);\n  float mediumWeight = 1.0 - exp(-max(\n    mediumDensity * min(rayLength, cutoffDistance), 0.0));\n  float pathWeight = clamp(\n    rayLength / max(sourceDistance, referenceDistance), 0.0, 1.0);\n  return color * inverseSquare * phase * cutoff * mediumWeight * pathWeight *\n    uVolumetricIntensity * 0.35;\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  vec4 viewPoint = uInverseProjection * vec4(vUv * 2.0 - 1.0, -1.0, 1.0);\n  viewPoint /= max(abs(viewPoint.w), 1e-5);\n  vec3 viewRay = normalize(viewPoint.xyz);\n  // linearDepth is camera-space Z; convert it to distance along the actual\n  // reconstructed ray so wide and tall projections integrate equally.\n  float cameraDepth = linearDepth(depth);\n  float rayLength = min(cameraDepth / max(-viewRay.z, 1e-3), uFar);\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int maxSampleCount = 24;\n  int sampleCount = int(clamp(uVolumetricSampleCount, 4.0, 24.0));\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  float jitterSeed = fract(sin(dot(vUv, vec2(127.1, 311.7))) * 43758.5453);\n  float jitter = (jitterSeed - 0.5) * clamp(uVolumetricJitter, 0.0, 0.5);\n  for (int i = 0; i < maxSampleCount; i++) {\n    if (i >= sampleCount) break;\n    float distanceAlongRay = clamp(\n      (float(i) + 0.5 + jitter) * stepLength, 0.0, rayLength);\n    float heightWeight = exp(-max(distanceAlongRay * uVolumetricHeightFalloff, 0.0));\n    // Dust is a separate, host-resolved particulate phase. It is denser near\n    // the occupied room volume than the broad atmospheric haze, so shafts gain\n    // visible body without turning the far horizon opaque. At zero density the\n    // extra term is exactly zero and the established fog path is unchanged.\n    float dustWeight = exp(-max(distanceAlongRay *\n      uVolumetricHeightFalloff * 0.45, 0.0));\n    float opticalDensity = density +\n      max(uVolumetricDustDensity, 0.0) * dustWeight;\n    float opticalDepth = opticalDensity * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uVolumetricAlbedo *\n      uShaftIntensity * uVolumetricIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay, rayLength);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.d([],t.C1))}else b0=b2
g=t.e_
b1=A.d([],g)
if(!m)h=i?j:k
if(r){B.a.L(b1,A.d([new A.ir(c1,b3,b4,c2,b5,b5,B.eZ,!0,h,b,e0,c0,l),new A.ir(c1,b3,b4,c2,b6,b6,B.rO,!1,b,a,c6,c0,l),new A.kQ(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.L(b1,A.d([new A.iz(c1,b3,b4,c2,b7,b7,B.f_,h,a0,e0,c0,l),new A.iz(c1,b3,b4,c2,b8,b8,B.rP,a0,a1,d1,c0,l),new A.la(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvoid main(){\n  if(uStrength<=0.0001){\n    oColor=vec4(texture(uSharp,vUv).rgb,1.0);\n    return;\n  }\n\n  vec2 texelSize=1.0/vec2(textureSize(uSharp,0));\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n\n  // Signed disparity relative to physical focal plane:\n  // Foreground (signedDisparity < 0) exhibits optical hyper-focal expansion,\n  // blurring at a steeper rate than background (signedDisparity > 0).\n  float signedDisparity=depth-uFocusDistance;\n  float normRange=max(uFocusRange,0.0001);\n  float signedCoc=(signedDisparity<0.0)\n    ?(signedDisparity/(normRange*0.75))\n    :(signedDisparity/(normRange*1.25));\n  float rawCoc=clamp(abs(signedCoc),0.0,1.0)*clamp(uStrength,0.0,1.0);\n\n  // Depth-aware disparity weighting to prevent out-of-focus foreground halos\n  // from bleeding over sharp in-focus background edges.\n  float depthN=linearDepth(texture(uSceneDepth,vUv+vec2(0.0,texelSize.y*2.0)).r);\n  float depthS=linearDepth(texture(uSceneDepth,vUv-vec2(0.0,texelSize.y*2.0)).r);\n  float depthE=linearDepth(texture(uSceneDepth,vUv+vec2(texelSize.x*2.0,0.0)).r);\n  float depthW=linearDepth(texture(uSceneDepth,vUv-vec2(texelSize.x*2.0,0.0)).r);\n  float minNeighborDepth=min(min(depthN,depthS),min(depthE,depthW));\n\n  // If this pixel is in-focus background but neighbors are close foreground,\n  // suppress foreground halo bleeding onto this sharp pixel.\n  float coc=rawCoc;\n  if(depth>uFocusDistance && minNeighborDepth<uFocusDistance){\n    float bleedProtection=clamp((depth-minNeighborDepth)/(normRange*2.0),0.0,1.0);\n    coc=mix(rawCoc,rawCoc*0.25,bleedProtection);\n  }\n\n  // Smooth cubic hermite curve for cinematic optical circle of confusion\n  float smoothCoc=coc*coc*(3.0-2.0*coc);\n\n  // Longitudinal (axial) chromatic aberration inside the optical bokeh circle:\n  // Out-of-focus highlights separate into subtle complementary chromatic fringes.\n  vec2 radialDir=vUv-vec2(0.5);\n  float radialDist=length(radialDir);\n  vec2 chromaDir=(radialDist>0.001)?(radialDir/radialDist):vec2(0.0,1.0);\n  vec2 chromaOffset=chromaDir*(smoothCoc*texelSize*2.8*sign(signedDisparity));\n\n  vec3 blurred=vec3(\n    texture(uBlurred,vUv-chromaOffset).r,\n    texture(uBlurred,vUv).g,\n    texture(uBlurred,vUv+chromaOffset).b\n  );\n\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,smoothCoc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.l(b1,new A.lu(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.l(b1,new A.mc(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.l(b1,new A.mI(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.d([new A.l5(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.mu(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=16;\nconst vec3 KERNEL[16]=vec3[16](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48),\n  vec3( 0.22, 0.14, 0.72),\n  vec3(-0.18,-0.25, 0.65),\n  vec3( 0.42,-0.28, 0.35),\n  vec3(-0.36, 0.32, 0.52),\n  vec3( 0.15, 0.58, 0.25),\n  vec3(-0.48, 0.12, 0.39),\n  vec3( 0.28,-0.52, 0.22),\n  vec3(-0.24,-0.42, 0.58)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  float rawDepth=texture(uSceneDepth,vUv).r;\n  if(rawDepth>=0.9999){\n    oColor=vec4(1.0);\n    return;\n  }\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    vec3 toOccluder=occluderView-originView;\n    float angleWeight=max(dot(normalView,normalize(toOccluder)),0.0);\n    float bias=max(0.015,abs(originView.z)*0.001);\n    occlusion+=(occluderView.z>=samplePos.z+bias?1.0:0.0)*rangeCheck*(0.35+0.65*angleWeight);\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.mt(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float rawCenter=texture(uSceneDepth,vUv).r;\n  if(rawCenter>=0.9999){\n    oColor=vec4(1.0);\n    return;\n  }\n  float centerDepth=linearDepth(rawCenter);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleRaw=texture(uSceneDepth,sampleUv).r;\n      if(sampleRaw>=0.9999) continue;\n      float sampleDepth=linearDepth(sampleRaw);\n      float spatialDistSq=float(x*x+y*y);\n      float spatialWeight=exp(-spatialDistSq*0.22);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*6.0);\n      float totalWeight=spatialWeight*depthWeight;\n      sum+=texture(uSsaoRaw,sampleUv).r*totalWeight;\n      weightSum+=totalWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.mq(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.yX(b9),e))
j.push(new A.mr(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nuniform vec3 uReflectionColor;\nuniform float uReflectionIntensity;\nuniform float uReflectionConfidence;\nuniform vec2 uShadowMapTexelSize;\nuniform float uShadowFilterRadius;\nuniform float uShadowBias;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uSpecularScale;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nfloat directSpotAttenuation(vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,float lightRange,float innerCos,float outerCos,float enabled){\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return coneFalloff*distanceFalloff*enabled;\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  float atten=directSpotAttenuation(worldPos,lightPosition,lightDirection,\n    lightRange,innerCos,outerCos,enabled);\n  return lightColor*lightIntensity*ndotl*atten;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\n// Disney/Burley energy-conserving diffuse retro-reflection model\nfloat diffuseBurley(float ndotl,float ndotv,float lndoth,float roughness){\n  float fd90=0.5+2.0*roughness*lndoth*lndoth;\n  float lightScatter=1.0+(fd90-1.0)*pow(clamp(1.0-ndotl,0.0,1.0),5.0);\n  float viewScatter=1.0+(fd90-1.0)*pow(clamp(1.0-ndotv,0.0,1.0),5.0);\n  return lightScatter*viewScatter;\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 fresnelSchlickRoughness(float cosTheta,vec3 f0,float roughness){\n  return f0+(max(vec3(1.0-roughness),f0)-f0)*pow(clamp(1.0-cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlickRoughness(hdotv,f0,roughness);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=(uFogEnd>uFogStart&&uFogEnd>1.0)?smoothstep(uFogStart,uFogEnd,viewDepth):0.0;\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nconst vec2 VOGEL_16[16]=vec2[16](\n  vec2( 0.1768,  0.0000),\n  vec2(-0.2263,  0.2064),\n  vec2( 0.0346, -0.3938),\n  vec2( 0.2809,  0.3739),\n  vec2(-0.5186, -0.1111),\n  vec2( 0.4907, -0.3224),\n  vec2(-0.1724,  0.6137),\n  vec2(-0.2642, -0.6316),\n  vec2( 0.6186,  0.3860),\n  vec2(-0.6698,  0.3824),\n  vec2( 0.3479, -0.7314),\n  vec2( 0.1770,  0.8291),\n  vec2(-0.6558, -0.5927),\n  vec2( 0.8719,  0.2891),\n  vec2(-0.7099,  0.6348),\n  vec2( 0.1983, -0.9641)\n);\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(uShadowBias*(1.-ndotl),uShadowBias*0.2666667);\n  // 16-tap Vogel spiral with golden ratio rotation produces silky smooth\n  // penumbras free of regular lattice banding or directional noise.\n  vec2 t=uShadowMapTexelSize*clamp(uShadowFilterRadius,0.,3.);\n  // Adaptive contact-hardening: estimate blocker proximity to sharpen contact shadows\n  float blockerSum=0.0;\n  float blockerCount=0.0;\n  for(int b=0;b<4;b++){\n    float depthSample=texture(uShadowMap,projCoord.xy+VOGEL_16[b*4]*t*1.5).r;\n    if(depthSample<projCoord.z-bias){\n      blockerSum+=depthSample;\n      blockerCount+=1.0;\n    }\n  }\n  float penumbraScale=1.0;\n  if(blockerCount>0.0){\n    float avgBlockerDepth=blockerSum/blockerCount;\n    float penumbraRatio=clamp((projCoord.z-avgBlockerDepth)/max(projCoord.z,0.0001),0.0,1.0);\n    penumbraScale=mix(0.38,1.0,smoothstep(0.0002,0.012,penumbraRatio));\n  }\n  vec2 filterRadius=t*penumbraScale;\n  float sum=0.;\n  for(int i=0;i<16;i++){\n    sum+=sampleShadow(projCoord+vec3(VOGEL_16[i]*filterRadius,0.),bias);\n  }\n  return sum/16.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  direct*=uDirectLightScale;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  vec3 ambient=uAmbientColor*uAmbientIntensity*uAmbientLightScale*ao*mix(0.85,1.15,upward);\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  // A steady spherical conductive field decays approximately as 1/r. The\n  // host keeps the slow latent material memory in uSurfaceDissolution; this\n  // local term therefore models the spatial heat field without making warm\n  // surfaces snap back or disappear at an arbitrary exponential radius.\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*clamp(uThermalSourceRadius0/\n      max(distance(vWorldPos,uThermalSourcePosition0),uThermalSourceRadius0),0.,1.));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*clamp(uThermalSourceRadius1/\n      max(distance(vWorldPos,uThermalSourcePosition1),uThermalSourceRadius1),0.,1.));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*clamp(uThermalSourceRadius2/\n      max(distance(vWorldPos,uThermalSourcePosition2),uThermalSourceRadius2),0.,1.));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*clamp(uThermalSourceRadius3/\n      max(distance(vWorldPos,uThermalSourcePosition3),uThermalSourceRadius3),0.,1.));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  // A continuous water film forms a second dielectric lobe. It smooths the\n  // authored surface only as coverage rises, so damp cloth stays diffuse\n  // while puddled stone gains a tight grazing reflection.\n  float waterCoverage=smoothstep(0.20,0.88,wetness)*(1.0-0.35*rough);\n  specRough=mix(specRough,max(0.035,specRough*0.18),waterCoverage);\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  float spotAtten0=directSpotAttenuation(vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  if(spotAtten0>0.001){\n    specular+=specularContribution(n,viewDir,normalize(uDirectSpotPosition0-vWorldPos),\n      uDirectSpotColor0,uDirectSpotIntensity0,spotAtten0,baseColor,specRough,metal);\n  }\n  float spotAtten1=directSpotAttenuation(vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  if(spotAtten1>0.001){\n    specular+=specularContribution(n,viewDir,normalize(uDirectSpotPosition1-vWorldPos),\n      uDirectSpotColor1,uDirectSpotIntensity1,spotAtten1,baseColor,specRough,metal);\n  }\n  float spotAtten2=directSpotAttenuation(vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  if(spotAtten2>0.001){\n    specular+=specularContribution(n,viewDir,normalize(uDirectSpotPosition2-vWorldPos),\n      uDirectSpotColor2,uDirectSpotIntensity2,spotAtten2,baseColor,specRough,metal);\n  }\n  specular*=uDirectLightScale*uSpecularScale;\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coatStrength=max(clamp(uClearcoatStrength,0.0,1.0),waterCoverage*0.82);\n  float coat=coatStrength*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity*\n    uDirectLightScale*uSpecularScale;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  // Environment fallback reflections are deliberately bounded and weighted\n  // by wetness/grazing angle. A real probe/history hit can raise confidence;\n  // the current host fallback remains visible but never masquerades as SSR.\n  float reflectionNdotV=max(dot(n,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metal);\n  vec3 envFresnel=f0+(max(vec3(1.0-specRough),f0)-f0)*pow(clamp(1.0-reflectionNdotV,0.0,1.0),5.0);\n  float envGloss=(1.0-specRough)*(1.0-specRough);\n  float reflectionSurface=clamp(metal*0.85+(1.0-metal)*(wetness+0.18*dissolution+envGloss*0.25),0.0,1.0);\n  float reflectionConfidence=0.20+0.80*clamp(uReflectionConfidence,0.0,1.0);\n  float reflectionWeight=clamp(\n    uReflectionIntensity*reflectionSurface*\n      (1.0-0.72*rough)*reflectionConfidence,\n    0.0,1.0);\n  vec3 reflectDir=reflect(-viewDir,n);\n  float refUp=clamp(reflectDir.y*0.5+0.5,0.0,1.0);\n  vec3 envRadiance=mix(uAmbientColor*0.35,mix(uAmbientColor,uReflectionColor,refUp),refUp);\n  vec3 sunReflectDir=normalize(uDirectionalDirection);\n  float sunRdotL=max(dot(reflectDir,sunReflectDir),0.0);\n  envRadiance+=uDirectionalColor*pow(sunRdotL,mix(32.0,4.0,specRough))*(1.0-specRough)*0.4;\n  lit+=envRadiance*envFresnel*reflectionWeight*ao;\n  float backScatter=max(dot(-viewDir,normalize(uDirectionalDirection)),0.0);\n  vec3 subsurface=baseColor*uDirectionalColor*(pow(backScatter,4.0)*(1.0-metal)*0.12*uDirectionalIntensity);\n  lit+=subsurface;\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.yY(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.L(j,b1)
j.push(new A.j6(c1,b3,u.E,c2,h,c3))
return new A.lh(j)},
yX:function yX(a){this.a=a},
yY:function yY(a,b){this.a=a
this.b=b},
mr:function mr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3},
nu:function nu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r},
mu:function mu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
nx:function nx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mt:function mt(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
nw:function nw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mI:function mI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
nF:function nF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mR:function mR(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
nH:function nH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nG:function nG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mV:function mV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nK:function nK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pu:function pu(){},
mp(a,b){return new A.jn(a,b)},
ls:function ls(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
lt:function lt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fl:function fl(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iF:function iF(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
qz:function qz(){},
qA:function qA(){},
hX:function hX(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){var _=this
_.a=0
_.b=a
_.f=_.c=null
_.$ti=b},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0
_.$ti=d},
BJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.hl(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kO:function kO(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
l1:function l1(a,b){this.a=a
this.b=b},
l4:function l4(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
bw:function bw(a,b){this.a=a
this.b=b},
wi:function wi(){this.a=null},
HM(a){var s=new A.mT(a,B.j,new A.wi(),A.HW(a))
s.kt(a)
return s},
HW(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a0(t.N)
s=A.a0(t.N)
r=J.N(t.a.b(q)?q:new A.bd(q,A.C(q).i("bd<1,f>")))
while(r.m())s.l(0,r.gp())
return s},
bJ(a,b){var s,r
if(a.b!==B.j)A.h(A.i(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.j(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.j(s.drawingBufferWidth),A.j(s.drawingBufferHeight))
return}r=t.V.a(b.a)
s=a.a
s.bindFramebuffer(A.j(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
CT(a,b){var s
if(a.b!==B.j)A.h(A.i(u.k))
switch(b){case 1:a.a.drawBuffers(A.d([A.j(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.d([A.j(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.a(A.p("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
HR(a,b,c){var s,r,q,p
if(a.b!==B.j)A.h(A.i(u.k))
s=t.V.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.j(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.j(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.a(A.i("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
HQ(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.j(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
HP(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
CS(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.ZERO)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.ONE)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.SRC_ALPHA)
break
case 3:s=A.j(v.G.WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA)
break
case 4:s=A.j(v.G.WebGL2RenderingContext.DST_ALPHA)
break
case 5:s=A.j(v.G.WebGL2RenderingContext.ONE_MINUS_DST_ALPHA)
break
default:s=null}return s},
HN(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bh(a,b){var s,r,q,p
if(a.b!==B.j)A.h(A.i(u.k))
s=a.f
r=s.nM(b)
if(r.a===0)return
if(r.q(0,B.ca)){q=v.G
p=a.a
if(b.a)p.enable(A.j(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.j(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.cb))a.a.depthFunc(A.HQ(a,b.b))
if(r.q(0,B.cc))a.a.depthMask(b.c)
if(r.q(0,B.cg)){q=v.G
p=a.a
if(b.w)p.enable(A.j(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.j(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.ch))a.a.cullFace(A.HP(a,b.x))
if(r.q(0,B.eE)){q=v.G.WebGL2RenderingContext
q=A.j(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.cd)){q=v.G
p=a.a
if(b.d)p.enable(A.j(q.WebGL2RenderingContext.BLEND))
else p.disable(A.j(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.ce))a.a.blendFunc(A.CS(a,b.e),A.CS(a,b.f))
if(r.q(0,B.cf))a.a.blendEquation(A.HN(a,b.r))
if(r.q(0,B.eC))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.eD)){q=v.G.WebGL2RenderingContext
a.a.disable(A.j(q.SCISSOR_TEST))}s.a=b},
HO(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.COLOR_BUFFER_BIT)
break
case 1:s=v.G
s=(A.j(s.WebGL2RenderingContext.COLOR_BUFFER_BIT)|A.j(s.WebGL2RenderingContext.DEPTH_BUFFER_BIT))>>>0
break
case 2:s=A.j(v.G.WebGL2RenderingContext.DEPTH_BUFFER_BIT)
break
default:s=null}return s},
d2(a,b,c,d,e,f){var s
if(a.b!==B.j)A.h(A.i(u.k))
s=a.a
s.clearColor(f,e,d,c)
s.clear(A.HO(a,b))},
bR(a,b){var s
if(a.b!==B.j)A.h(A.i(u.k))
s=A.b(b.a)
a.a.useProgram(s)
a.e=s},
n(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.j)A.h(A.i(u.k))
s=a.e
if(s==null)throw A.a(A.i("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.G(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.ax(c.b))
break
case 1:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
r.uniform2f(q,n,p[1])
break
case 2:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
m=p[1]
if(2>=o)return A.e(p,2)
r.uniform3f(q,n,m,p[2])
break
case 3:p=t.B.a(c.b)
o=p.length
if(0>=o)return A.e(p,0)
n=p[0]
if(1>=o)return A.e(p,1)
m=p[1]
if(2>=o)return A.e(p,2)
l=p[2]
if(3>=o)return A.e(p,3)
A.b0(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.j(c.b))
break}},
bo(a,b){if(a.b!==B.j)A.h(A.i(u.k))
a.a.bindVertexArray(A.b(b.a))},
aB(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.h(A.i(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.j(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.k8){p=s.d>1?A.j(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.k7){o=s.b
if(o!=null){r.bindTexture(A.j(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.j(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.a(A.i("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.a(A.i("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
HS(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.h(A.i(u.k))
s=A.b(b.a)
r=a.a
q=v.G
r.bindBuffer(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.j(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.Bt(B.a8.gey(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.aW(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.j(q.WebGL2RenderingContext.STATIC_DRAW))}},
HT(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
CW(a,b){var s,r,q,p
if(a.b!==B.j)A.h(A.i(u.k))
s=a.a
r=A.G(s.createBuffer())
if(r==null)throw A.a(A.i("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.dl?A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.j(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.HT(a,b.b))
return new A.ee(r)},
CU(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
CV(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
HU(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
Aj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.j)A.h(A.i(u.k))
s=a.a
r=A.G(s.createTexture())
if(r==null)throw A.a(A.i("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.j(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.HU(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.b0(s,"texStorage3D",[n,l,A.j(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.b0(s,"texStorage2D",[n,l,A.j(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.CU(a,b.e))
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.CU(a,b.f))
p=b.r
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.CV(a,p))
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.CV(a,p))
h=a.bS("EXT_texture_filter_anisotropic")
g=h?a.ht(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.h(A.a7(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.ee(new A.k8(r,j,i,q,m))},
Ak(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.h(A.i(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.a(A.p("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.a(A.p("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.j(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.b0(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.j(n.WebGL2RenderingContext.RGBA),A.j(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.b0(l,"texSubImage2D",[m,0,0,0,q,p,A.j(n.WebGL2RenderingContext.RGBA),A.j(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
CX(a,b){var s,r,q
if(a.b!==B.j)A.h(A.i(u.k))
s=t.jm.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.j(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
mU(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
CZ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.h(A.i(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.a(A.p("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.G(r.createFramebuffer())
if(q==null)throw A.a(A.i("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.bi
if(n&&!a1.e)throw A.a(A.p("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.dn||o===B.jA
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.d([A.j(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.j(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.j(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.b0(r,c,[A.j(p.WebGL2RenderingContext.RENDERBUFFER),o,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.j(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.b0(r,c,[A.j(p.WebGL2RenderingContext.RENDERBUFFER),o,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.j(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.d([A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.G(r.createTexture())
r.bindTexture(A.j(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.b0(r,b,[A.j(p.WebGL2RenderingContext.TEXTURE_2D),1,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
A.b0(r,a,[A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.G(r.createTexture())
r.bindTexture(A.j(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.b0(r,b,[A.j(p.WebGL2RenderingContext.TEXTURE_2D),1,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
A.b0(r,a,[A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.j(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.d([A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.G(r.createRenderbuffer())
r.bindRenderbuffer(A.j(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.b0(r,c,[A.j(p.WebGL2RenderingContext.RENDERBUFFER),o,A.j(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.j(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.G(r.createTexture())
r.bindTexture(A.j(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.b0(r,b,[A.j(p.WebGL2RenderingContext.TEXTURE_2D),1,A.j(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.j(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.j(p.WebGL2RenderingContext.NEAREST))
A.b0(r,a,[A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.j(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.j(r.checkFramebufferStatus(A.j(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.j(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.Al(a0,q,l,k,f,e,j,i)
throw A.a(A.i("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.ee(new A.k7(q,l,k,f,e,j,i,s,a1.b,a1.c))},
Al(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cF(a){var s
if(a.b!==B.j)A.h(A.i(u.k))
s=A.G(a.a.createVertexArray())
if(s==null)throw A.a(A.i("WebGl2Device: gl.createVertexArray() returned null"))
return new A.ee(s)},
CY(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.G(p.createShader(b))
if(o==null)throw A.a(A.mp(b===A.o4(A.DE(A.EC(),r),q,t.S)?B.ev:B.ew,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.aa(A.ih(p.getShaderParameter(o,A.j(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.ac(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.a(A.mp(b===A.o4(A.DE(A.EC(),r),q,t.S)?B.ev:B.ew,s))}return o},
HV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.h(A.i(u.k))
q=v.G
s=A.CY(a,A.j(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.CY(a,A.j(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.G(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.a(B.q2)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.aa(A.ih(o.getProgramParameter(n,A.j(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.ac(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.mp(B.ex,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.j(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.mp(B.ey,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.G(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.a(A.mp(B.ey,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.ee(n)},
ee:function ee(a){this.a=a},
k8:function k8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k7:function k7(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
nJ:function nJ(a){this.a=a
this.b=!1},
mT:function mT(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
wf:function wf(a){this.a=a},
wg:function wg(a){this.a=a},
xm:function xm(){},
nI:function nI(){},
we:function we(a){this.a=a},
wh:function wh(){},
l8:function l8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oT(a0,a1){var s=0,r=A.aL(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$oT=A.aM(function(a2,a3){if(a2===1)return A.aI(a3,r)
for(;;)switch(s){case 0:p=A.b(new v.G.AudioContext())
o=t.N
n=t.m
m=A.m(o,n)
l=A.b(p.createGain())
k=A.b(p.createGain())
j=A.b(p.createGain())
i=A.b(p.createGain())
h=A.b(p.createGain())
g=A.b(p.createGain())
f=A.b(p.createGain())
e=A.b(p.createGain())
d=A.b(p.createGain())
c=A.b(p.createGain())
b=A.b(p.createConvolver())
a=new A.kI(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.m(o,t.a_),B.bb,A.m(n,t.rK))
a.kc(p,a1)
p=A.w(a0).i("O<1,2>")
s=3
return A.a6(A.qf(A.lO(new A.O(a0,p),p.i("aY<az>(t.E)").a(new A.oU(a)),p.i("t.E"),t.ls),t.c),$async$oT)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.lf():m
b.buffer=p
q=a
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$oT,r)},
kI:function kI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.CW=_.ch=null
_.cx=q
_.cy=!1
_.dy=_.db=null
_.k1=_.id=_.go=_.fy=_.fx=1
_.k2=!1
_.p2=_.p1=_.ok=_.k4=_.k3=$
_.p3=!1
_.R8=_.p4=1},
oV:function oV(){},
oU:function oU(a){this.a=a},
oY:function oY(a,b){this.a=a
this.b=b},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
oW:function oW(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
k6:function k6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Fu(a,b,c,d,e,f,g){var s=new A.oK(c,f,b,g,new A.c(d.a,d.b,d.c),e,a)
s.ke(a,b,c,d,0,e,f,g)
return s},
Fn(a,b){var s=new A.oe(b)
s.kb(a,b)
return s},
Ft(a){var s,r,q,p,o,n=t.z
n=A.m(n,n)
for(s=new A.O(a,A.w(a).i("O<1,2>")).gA(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aG(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.oG(A.aX(n,r,t.a))
n.kd(a)
return n},
Kk(a,b){var s,r,q,p=b>>>0
for(s=new A.dJ(a),r=t.sU,s=new A.an(s,s.gu(0),r.i("an<a4.E>")),r=r.i("a4.E");s.m();){q=s.d
p=A.Ep(p,q==null?r.a(q):q)}return p&2147483647},
kJ:function kJ(a,b){this.a=a
this.b=b},
oK:function oK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oL:function oL(){},
oe:function oe(a){this.a=a},
of:function of(){},
il:function il(){},
og:function og(){},
oh:function oh(){},
oG:function oG(a){this.a=a},
oI:function oI(){},
oJ:function oJ(){},
oH:function oH(){},
zY:function zY(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
oS:function oS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a){this.a=a},
oO:function oO(){},
jB:function jB(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
pr:function pr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
q9:function q9(a){this.a=a},
lz:function lz(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=0
_.z=null
_.as=_.Q=0
_.at=!1
_.ay=!0
_.ch=i
_.CW=j},
rh:function rh(a){this.a=a},
Gl(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.O(a,A.w(a).i("O<1,2>")).gA(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.rg(n)},
rg:function rg(a){this.a=a},
rk:function rk(){var _=this
_.c=_.b=_.a=!1
_.d=0},
bc:function bc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rF:function rF(a,b,c){this.a=a
this.c=b
this.e=c},
rC:function rC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
rD:function rD(a,b,c){this.a=a
this.b=b
this.c=c},
rE:function rE(){},
pO:function pO(){this.b=this.a=0},
rL:function rL(a){this.a=a
this.b=0
this.e=!1},
dl:function dl(a,b){this.a=a
this.b=b},
be:function be(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=i},
rP:function rP(a){this.a=a},
jr(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aW(a)
s=a.length
if(!(b<s))return A.e(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.e(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.e(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.e(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.e(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.e(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.e(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.e(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.e(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.e(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.e(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.e(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.e(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.e(a,r)
a[r]=l
return b+14},
e3:function e3(a){this.a=a
this.b=0},
jw(a,b,c){return new A.c(a,b,c)},
CJ(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.c(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
c:function c(a,b,c){this.a=a
this.b=b
this.c=c},
w5:function w5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s},
w6:function w6(){},
cE:function cE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
w7:function w7(){},
eS:function eS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w2:function w2(){},
w3:function w3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w4:function w4(){},
w1:function w1(){this.b=this.a=-1},
HZ(a,b,c,d){return new A.mW(d,b,c,a)},
I0(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.EV()
s=a.d
r=A.wm(s,0)
q=A.wm(s,1)
p=A.wm(s,2)
o=A.wm(s,3)
s=t.N
n=A.a0(s)
m=a.e
if(A.bS(m,0))n.l(0,"GamepadA")
if(A.bS(m,1))n.l(0,"GamepadB")
if(A.bS(m,2))n.l(0,"GamepadX")
if(A.bS(m,3))n.l(0,"GamepadY")
if(A.bS(m,4))n.l(0,"GamepadLB")
if(A.bS(m,5))n.l(0,"GamepadRB")
if(A.bS(m,6))n.l(0,"GamepadLT")
if(A.bS(m,7))n.l(0,"GamepadRT")
if(A.bS(m,8))n.l(0,"GamepadView")
if(A.bS(m,9))n.l(0,"GamepadMenu")
if(A.bS(m,10))n.l(0,"GamepadLStick")
if(A.bS(m,11))n.l(0,"GamepadRStick")
if(A.bS(m,12))n.l(0,h)
if(A.bS(m,13))n.l(0,g)
if(A.bS(m,14))n.l(0,f)
if(A.bS(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.c(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.ga2():i
return new A.mW(m,p,o,A.fD(n,s))},
wm(a,b){return A.I_(b<a.length?a[b]:0)},
bS(a,b){return b<a.length&&a[b]>=0.5},
I_(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.n((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gc3(a)?-s:s},
mv:function mv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mW:function mW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pk:function pk(a){this.a=a},
FQ(a,b,c){var s=new A.lb(a,c,null,b)
s.ki(a,null,null,b,c)
return s},
lb:function lb(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
G2(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bM(new A.F(B.m6,t.e2.a(new A.q_(a)),t.vL),t.yW)
return s==null?null:new A.hm(s)},
Ca(a,b){var s=A.d([],t.s)
switch(b.a){case 0:A.Aa(s,a,B.lk)
break
case 1:A.Aa(s,a,B.ll)
break
case 2:A.Aa(s,a,B.mb)
break}return s},
Aa(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.J(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
G1(a){if(a.a!==21)return null
if(a.e)return B.hf
if(!a.d&&a.b>=0.6&&a.c>=3)return B.hg
return B.he},
cv:function cv(a,b){this.a=a
this.b=b},
pX:function pX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a){this.a=a},
q_:function q_(a){this.a=a},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
GO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
if(!e.b(a))return g
s=a.h(0,"roomId")
r=a.h(0,"eye")
q=a.h(0,"yaw")
p=a.h(0,"pitch")
if(typeof s!="string"||!e.b(r)||typeof q!="number"||typeof p!="number")return g
o=r.h(0,"x")
n=r.h(0,"y")
m=r.h(0,"z")
if(typeof o!="number"||typeof n!="number"||typeof m!="number")return g
l=typeof a.h(0,f)=="string"?A.v(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.m4(s,new A.c(o,n,m),q,p,l,j)
i=!1
if(isFinite(o))if(isFinite(n))if(isFinite(m))if(isFinite(q))if(isFinite(p))if(Math.abs(p)<=1.5707963267948966)if(e)e=isFinite(j)&&j>=0&&j<=1
else e=!0
else e=i
else e=i
else e=i
else e=i
else e=i
else e=i
return e?h:g},
m4:function m4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Km(a){var s,r,q,p=A.m(t.N,t.z)
for(s=a.gN(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.a(B.hw)
p.k(0,q,r.b)}return p},
xt(a){var s,r,q,p,o,n=a.ga6().bL(0)
B.a.a4(n)
s=t.z
r=A.m(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.Dw(a.h(0,o)))}return A.aX(r,t.N,s)},
Dw(a){var s
if(t.f.b(a))return A.xt(A.Km(a))
if(t.j.b(a)){s=t.z
return A.ab(J.em(a,A.Le(),s),s)}if(a==null||A.bB(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.iC)
return a}throw A.a(A.M("presentation snapshot contains unsupported value "+J.fa(a).t(0),null,null))},
tO:function tO(a){this.a=a},
Cs(a,b,c){var s=A.AA(b),r=A.AA(a)
if(c!==2)A.h(A.a7(c,"version","unsupported save version"))
return new A.hK(c,s,r)},
AA(a){var s,r,q,p,o=A.w(a).i("af<1>"),n=A.J(new A.af(a,o),o.i("t.E"))
B.a.a4(n)
o=t.z
s=A.m(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.Dv(a.h(0,p)))}return A.aX(s,t.N,o)},
Dv(a){var s,r,q,p
if(t.f.b(a)){s=A.m(t.N,t.z)
for(r=a.gN(),r=r.gA(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.a(B.il)
s.k(0,p,q.b)}return A.AA(s)}if(t.j.b(a)){r=t.z
return A.ab(J.em(a,A.Li(),r),r)}if(a==null||A.bB(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.a(B.iH)
return a}throw A.a(A.M("save contains unsupported value "+J.fa(a).t(0),null,null))},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
uk:function uk(){},
fC:function fC(a,b){this.a=a
this.b=b},
BO(a,b,c,d,e,f,g,h){var s=A.d([],t.pC),r=A.d([],t.ns)
return new A.ql(a,b,c,d,e,f,g,s,r,h)},
BP(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.b4(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.a(B.ik)
r=d.h(0,"runSeed")
q=A.b4(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.b4(p)||p<1||typeof o!="number")throw A.a(B.iZ)
if(!isFinite(5760))throw A.a(A.a7(5760,"daySeconds","must be finite and > 0"))
n=new A.lq(p,7,5760)
n.j8(o)
s=t.N
m=t.z
l=A.Gw(a5,A.b_(a0,s,m))
k=A.FN(l,A.b_(a,s,m),n)
j=A.B7(a3,c)
A.Gk(A.b_(a1,s,m)).mA(j)
s=A.b_(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bB(f))A.h(B.hL)
e=A.GF(d.h(0,"narrative"))
if(e==null)e=A.te(null,null,null)
return A.BO(c,q,j,n,l,k,new A.l8(i,h,g,f),e)},
Ja(a){var s
switch(a.a){case 0:s="time.advanced"
break
case 1:s="day.end-reached"
break
case 2:s="journal.written"
break
case 3:s="journal.rejected"
break
case 4:s="sleep.completed"
break
case 5:s="compliance.floor-tripped"
break
default:s=null}return s},
dN:function dN(a,b){this.a=a
this.b=b},
lp:function lp(){},
qm:function qm(a,b,c){this.a=a
this.b=b
this.r=c},
ql:function ql(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=1
_.z=j},
qn:function qn(a){this.a=a},
qo:function qo(){},
qp:function qp(){},
qq:function qq(a){this.a=a},
qr:function qr(){},
Fr(b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8={}
b8.a=null
s=A.Fq(c3,c4,c1).a
r=s[0]
q=s[1]
b8.a=s[2]
p=s[3]
o=c4.b
s=A.C(b9)
n=s.i("F<1>")
m=A.J(new A.F(b9,s.i("l(1)").a(new A.os(b8)),n),n.i("t.E"))
B.a.Y(m,new A.ot())
for(s=m.length,n=r.a,l=q.a-n,k=r.b,j=r.c,i=q.c-j,h=p.a*-0.28,g=p.c*-0.28,f=k+p.b*-0.28,e=0.28/c5,d=o-0.001,c=0,b=0;b<m.length;m.length===s||(0,A.r)(m),++b,c=a2){a=m[b]
a0=a.b
a1=B.b.n(a0,0,b8.a)
a2=B.b.n(a0+a.d,0,b8.a)
a0=a.c
a3=B.b.n(a0,0,o)
a4=B.b.n(a0+a.e,0,o)
if(a1>c+0.001)A.or(c0,q,b8.a,p,c6,r,c5,c,a1,0,o)
a0=a3>0.001
if(a0)A.or(c0,q,b8.a,p,c6,r,c5,a1,a2,0,a3)
if(a4<d)A.or(c0,q,b8.a,p,c6,r,c5,a1,a2,a4,o)
a5=b8.a
a6=a1/a5
a5=a2/a5
a7=n+l*a6
a6=j+i*a6
a8=n+l*a5
a5=j+i*a5
a9=a7+h
b0=a6+g
b1=a8+h
b2=a5+g
b3=k+a3
b4=f+a3
b5=f+a4
b6=k+a4
b7=(a4-a3)/c5
c0.c7(new A.c(a7,b3,a6),new A.c(a9,b4,b0),new A.c(a9,b5,b0),new A.c(a7,b6,a6),c2,e,b7)
c0.c7(new A.c(b1,b4,b2),new A.c(a8,b3,a5),new A.c(a8,b6,a5),new A.c(b1,b5,b2),c2,e,b7)
b7=(a2-a1)/c5
c0.j3(new A.c(a7,b6,a6),new A.c(a8,b6,a5),new A.c(b1,b5,b2),new A.c(a9,b5,b0),c2,new A.c(0,-1,0),b7,e)
if(!a.r&&a0)c0.j3(new A.c(a9,b4,b0),new A.c(b1,b4,b2),new A.c(a8,b3,a5),new A.c(a7,b3,a6),c2,new A.c(0,1,0),b7,e)}s=b8.a
if(c<s-0.001)A.or(c0,q,s,p,c6,r,c5,c,s,0,o)},
or(a,b,c,d,e,f,g,h,i,j,a0){var s=h/c,r=i/c,q=f.a,p=b.a-q,o=q+p*s,n=f.b,m=n+j,l=f.c,k=b.c-l
s=l+k*s
p=q+p*r
r=l+k*r
n+=a0
a.po(new A.c(o,m,s),new A.c(p,m,r),new A.c(p,n,r),new A.c(o,n,s),e,d,h/g,(i-h)/g,j/g,(a0-j)/g)},
Fq(a,b,c){var s,r,q,p,o=a.d
switch(c.a){case 0:s=o.a
r=o.b
q=o.c
p=b.a
p=new A.cH([new A.c(s,r,q),new A.c(s+p,r,q),p,new A.c(0,0,1)])
s=p
break
case 1:s=o.a+b.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.c(s,r,q),new A.c(s,r,q+p),p,new A.c(-1,0,0)])
s=p
break
case 2:s=o.a
r=b.a
q=o.b
p=o.c+b.c
r=new A.cH([new A.c(s+r,q,p),new A.c(s,q,p),r,new A.c(0,0,-1)])
s=r
break
case 3:s=o.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.c(s,r,q+p),new A.c(s,r,q),p,new A.c(1,0,0)])
s=p
break
default:s=null}return s},
bV:function bV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.r=e},
os:function os(a){this.a=a},
ot:function ot(){},
io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.w=f},
ox:function ox(){},
bt:function bt(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n},
dr:function dr(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ug:function ug(){},
uh:function uh(){},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ou:function ou(a,b){this.a=a
this.b=b},
ov:function ov(){},
ow:function ow(){},
qQ:function qQ(a){this.a=a},
qR:function qR(){},
iW:function iW(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
au:function au(a,b,c,d,e){var _=this
_.a=a
_.f=b
_.r=c
_.w=d
_.Q=e},
im(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aW(a)
s=a.length
if(!(b<s))return A.e(a,b)
a[b]=c.a
r=b+1
if(!(r<s))return A.e(a,r)
a[r]=c.b
r=b+2
if(!(r<s))return A.e(a,r)
a[r]=c.c
r=b+3
if(!(r<s))return A.e(a,r)
a[r]=d.a
r=b+4
if(!(r<s))return A.e(a,r)
a[r]=d.b
r=b+5
if(!(r<s))return A.e(a,r)
a[r]=d.c
r=b+6
if(!(r<s))return A.e(a,r)
a[r]=e
r=b+7
if(!(r<s))return A.e(a,r)
a[r]=f
r=b+8
if(!(r<s))return A.e(a,r)
a[r]=g
r=b+9
if(!(r<s))return A.e(a,r)
a[r]=h
r=b+10
if(!(r<s))return A.e(a,r)
a[r]=i
r=b+11
if(!(r<s))return A.e(a,r)
a[r]=j
r=b+12
if(!(r<s))return A.e(a,r)
a[r]=k
r=b+13
if(!(r<s))return A.e(a,r)
a[r]=l
return b+14},
bW:function bW(a){this.a=a
this.b=0},
Cd(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=t.jS,a4=a3.a(a5.h(0,"position"))
if(a4==null)a4=[0,0,0]
s=a3.a(a5.h(0,"scale"))
if(s==null)s=[1,1,1]
r=t.nV.a(a5.h(0,"collision"))
if(r==null)r=B.bK
q=A.ac(a5.h(0,"zone"))
if(q==null)q="circulation"
A:{if("circulation"===q){a3=B.I
break A}if("focal"===q){a3=B.d2
break A}if("conversational"===q||"seating"===q){a3=B.d3
break A}if("media"===q){a3=B.d4
break A}if("culinary"===q||"cooking"===q||"dining"===q){a3=B.d5
break A}if("sanitary"===q||"hygiene"===q){a3=B.d6
break A}if("sleeping"===q||"sleep"===q){a3=B.d7
break A}if("work"===q){a3=B.d8
break A}if("storage"===q){a3=B.O
break A}if("utility"===q){a3=B.aQ
break A}a3=B.I
break A}p=A.v(a5.h(0,"instanceId"))
o=A.v(a5.h(0,"roomId"))
n=A.ac(a5.h(0,"source"))
if(n==null)n="catalog"
m=A.ac(a5.h(0,"modelId"))
l=A.ac(a5.h(0,"propKind"))
k=A.ac(a5.h(0,"materialFamily"))
j=J.aN(a4)
i=A.a_(j.h(a4,0))
h=A.a_(j.h(a4,1))
j=A.a_(j.h(a4,2))
g=A.ki(a5.h(0,"rotationY"))
if(g==null)g=null
if(g==null)g=0
f=J.aN(s)
e=A.a_(f.h(s,0))
d=A.a_(f.h(s,1))
f=A.a_(f.h(s,2))
c=A.ki(r.h(0,"radius"))
if(c==null)c=null
if(c==null)c=0.25
b=A.ki(r.h(0,"height"))
if(b==null)b=null
if(b==null)b=1
a=A.ac(a5.h(0,"visibilityLayer"))
if(a==null)a="furniture"
a0=A.ac(a5.h(0,"interactiveTag"))
a1=A.ac(a5.h(0,"canonicalPropId"))
a2=A.Aw(a5.h(0,"pickable"))
return new A.fu(p,o,n,m,l,k,new A.c(i,h,j),g,new A.c(e,d,f),a3,c,b,a,a0,a1,a2===!0)},
Gh(a){var s,r,q,p,o,n,m,l=t.jS.a(a.h(0,"placements"))
if(l==null)l=B.aU
s=A.d([],t.eq)
for(r=J.N(l),q=t.f,p=t.P,o=t.N,n=t.z;r.m();){m=r.gp()
if(p.b(m))B.a.l(s,A.Cd(m))
else if(q.b(m))B.a.l(s,A.Cd(A.b_(m,o,n)))}A.xp(a.h(0,"schemaVersion"))
A.ac(a.h(0,"sourceRef"))
return new A.r3(A.ab(s,t.zV))},
fu:function fu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
r3:function r3(a){this.c=a},
r4:function r4(a){this.a=a},
ja(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=A.Cj(d,e,c).a,k=l[0],j=l[1],i=l[2],h=l[3]
if(f.e){l=A.C(a)
s=l.i("F<1>")
r=A.J(new A.F(a,l.i("l(1)").a(new A.tU()),s),s.i("t.E"))}else r=A.d([],t.n1)
B.a.Y(r,new A.tV())
for(l=r.length,q=0,p=0;p<r.length;r.length===l||(0,A.r)(r),++p,q=m){o=r[p]
s=o.b
n=B.b.n(s,0,i)
m=B.b.n(s+o.d,0,i)
if(n>q+0.01)A.Ci(b,j,i,h,f,k,q,n)}if(q<i-0.01)A.Ci(b,j,i,h,f,k,q,i)},
Ck(a,b,c,d,e,f){var s,r,q,p,o,n=A.Cj(e,f,d).a,m=n[0],l=n[1],k=n[2],j=n[3],i=l.Z(0,m).ga2(),h=c.b
n=c.d
s=h+n
r=c.c+c.e
q=h-0.04
if(q>=-0.08&&q<=k)A.tS(0.08,A.tT(m,i,q),a,r+0.08,j,0.02,b,i)
p=s+0.04
if(p>=0&&p<=k+0.08)A.tS(0.08,A.tT(m,i,p),a,r+0.08,j,0.02,b,i)
o=A.tT(m,i,(h+s)*0.5)
A.tS(n+0.16,new A.c(o.a,e.d.b+r+0.04,o.c),a,0.08,j,0.02,b,i)},
Ci(a,b,c,d,e,f,g,h){var s=b.Z(0,f).ga2(),r=A.tT(f,s,(g+h)*0.5),q=e.b
A.tS(h-g,new A.c(r.a,f.b+e.a+q*0.5,r.c),a,q,d,e.c,e.d,s)},
tS(a,b,c,d,e,f,g,a0){var s=d*0.5,r=a0.a3(0,a*0.5),q=e.a3(0,f),p=-s,o=b.Z(0,r).S(0,q).S(0,new A.c(0,p,0)),n=b.S(0,r).S(0,q).S(0,new A.c(0,p,0)),m=b.S(0,r).S(0,q).S(0,new A.c(0,s,0)),l=b.Z(0,r).S(0,q).S(0,new A.c(0,s,0)),k=b.Z(0,r).S(0,new A.c(0,p,0)),j=b.S(0,r).S(0,new A.c(0,p,0)),i=b.S(0,r).S(0,new A.c(0,s,0)),h=b.Z(0,r).S(0,new A.c(0,s,0))
c.cN(o,n,m,l,g,e)
c.cN(l,m,i,h,g,new A.c(0,1,0))
c.cN(k,j,n,o,g,new A.c(0,-1,0))
c.cN(h,l,o,k,g,new A.c(-a0.a,-a0.b,-a0.c))
c.cN(m,i,j,n,g,a0)},
tT(a,b,c){return new A.c(a.a+b.a*c,a.b,a.c+b.c*c)},
Cj(a,b,c){var s,r,q,p,o=a.d
switch(c.a){case 0:s=o.a
r=o.b
q=o.c
p=b.a
p=new A.cH([new A.c(s,r,q),new A.c(s+p,r,q),p,new A.c(0,0,1)])
s=p
break
case 1:s=o.a+b.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.c(s,r,q),new A.c(s,r,q+p),p,new A.c(-1,0,0)])
s=p
break
case 2:s=o.a
r=b.a
q=o.b
p=o.c+b.c
r=new A.cH([new A.c(s+r,q,p),new A.c(s,q,p),r,new A.c(0,0,-1)])
s=r
break
case 3:s=o.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.c(s,r,q+p),new A.c(s,r,q),p,new A.c(1,0,0)])
s=p
break
default:s=null}return s},
hA:function hA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tU:function tU(){},
tV:function tV(){},
ue:function ue(){},
uf:function uf(){},
HY(a,b){var s,r,q,p=new A.bW(new Float32Array(10752)),o=a.ac(b)
for(s=b.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.HX(p,b,o,s[q])
return B.n.ae(p.a,0,p.b)},
HX(a,b,a0,a1){var s,r,q,p,o,n,m,l=14209221,k=4073251,j=a1.c,i=a1.e,h=j+i,g=a1.d,f=g+a1.f,e=(g+f)*0.5,d=(j+h)*0.5,c=new A.wj(new A.wk(a1.b,b,a0),a)
c.$7(j-0.05,g-0.045,-0.03,h+0.05,g,0.08,6045747)
s=j-0.045
r=f+0.04
c.$7(s,g,0,j,r,0.035,l)
q=h+0.045
c.$7(h,g,0,q,r,0.035,l)
c.$7(s,f,0,q,f+0.045,0.035,l)
c.$7(j,e-0.022,0.015,h,e+0.022,0.04,l)
c.$7(d-0.025,e+0.015,0.035,d+0.025,e+0.035,0.055,12951641)
c.$7(d-0.01,g,0.018,d+0.01,f,0.032,l)
p=(e+f)*0.5
c.$7(j,p-0.008,0.018,h,p+0.008,0.032,l)
o=(g+e)*0.5
c.$7(j,o-0.008,0.018,h,o+0.008,0.032,l)
s=a1.r
n=s?13689059:9479342
m=s?0.88:0.65
s=g+0.005
r=f-0.005
c.$8$alpha(j+0.005,s,0.024,h-0.005,r,0.026,n,m)
if(a1.w){s=g+0.01
r=f-0.01
i=0.02+Math.min(0.22,i*0.45)
c.$7(j-0.025,s,0.02,j-0.005,r,i,k)
c.$7(h+0.005,s,0.02,h+0.025,r,i,k)}else{c.$7(j,s,0.038,d-0.002,r,0.06,k)
c.$7(d+0.002,s,0.038,h,r,0.06,k)
c.$7(d-0.035,e-0.02,0.06,d+0.035,e+0.02,0.08,12951641)}},
wk:function wk(a,b,c){this.a=a
this.b=b
this.c=c},
wj:function wj(a,b){this.a=a
this.b=b},
p_(a){var s,r,q,p,o,n,m,l,k,j,i,h="modelScale",g="residence",f="restAnchor",e="returnPortalId",d=A.ia(a,"house manifest"),c=typeof d.h(0,h)=="number"?A.a_(d.h(0,h)):1
if(!isFinite(c)||c<=0)throw A.a(B.i4)
s=A.bL(d,"houseId")
r=A.bL(d,"sourceRef")
q=A.bL(d,"presentationScope")
p=A.bL(d,"storyAuthority")
if(d.h(0,g)==null)o=null
else{n=A.ia(d.h(0,g),g)
o=A.bL(n,"roomId")
m=A.AY(n.h(0,"spawn"),"residence.spawn",c)
l=typeof n.h(0,f)=="string"?A.v(n.h(0,f)):null
o=new A.pe(o,m,l,typeof n.h(0,e)=="string"?A.v(n.h(0,e)):null)}m=J.em(A.i6(d,"levels"),new A.p0(),t.mD)
m=A.J(m,m.$ti.i("a1.E"))
m.$flags=1
l=J.em(A.i6(d,"rooms"),new A.p1(c),t.bJ)
l=A.J(l,l.$ti.i("a1.E"))
l.$flags=1
k=J.em(A.i6(d,"portals"),new A.p2(c),t.lT)
k=A.J(k,k.$ti.i("a1.E"))
k.$flags=1
j=J.em(A.i6(d,"stairs"),new A.p3(),t.gI)
j=A.J(j,j.$ti.i("a1.E"))
j.$flags=1
i=J.em(A.i6(d,"exteriorCells"),new A.p4(),t.N)
i=A.J(i,i.$ti.i("a1.E"))
i.$flags=1
s=new A.kK(s,r,q,p,o,m,l,k,j)
s.fk()
return s},
B7(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
a9.fk()
s=A.d([],t.eY)
r=A.d([],t.qP)
q=A.d([],t.DZ)
p=t.N
o=new A.qP(s,r,q,A.m(p,t.J),A.m(p,t.h),new A.qU())
n=new A.yW()
for(m=a9.w,l=m.length,k=t.nm,j=0;j<m.length;m.length===l||(0,A.r)(m),++j){i=m[j]
h=i.a
g=n.$1(i.b)
f=i.c
e=f.length
if(0>=e)return A.e(f,0)
d=f[0]
if(1>=e)return A.e(f,1)
c=f[1]
if(2>=e)return A.e(f,2)
f=f[2]
e=i.d
b=e.length
if(0>=b)return A.e(e,0)
a=e[0]
if(1>=b)return A.e(e,1)
a0=e[1]
if(2>=b)return A.e(e,2)
e=e[2]
b=A.d([],k)
for(a1=i.e,a2=a1.length,a3=0;a3<a1.length;a1.length===a2||(0,A.r)(a1),++a3){a4=a1[a3]
b.push(new A.fL(a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r))}a5=A.aG(i.f,!1,p)
a5.$flags=3
B.a.l(s,new A.fB(h,g,new A.c(a,a0,e),new A.c(d,c,f),b,A.IP(h),i.r,i.w,i.x))}for(s=a9.x,p=s.length,j=0;j<s.length;s.length===p||(0,A.r)(s),++j){a6=s[j]
B.a.l(r,new A.cj(a6.a,a6.b,a6.c,a6.d,a6.e,a6.f,a6.r,a6.w,a6.x,a6.at,a6.Q,a6.z,a6.y,a6.as))}for(s=a9.y,r=s.length,p=t.i,j=0;j<s.length;s.length===r||(0,A.r)(s),++j){a7=s[j]
a5=A.aG(a7.c,!1,p)
a5.$flags=3
m=a7.d
l=m.length
if(0>=l)return A.e(m,0)
if(1>=l)return A.e(m,1)
if(2>=l)return A.e(m,2)
m=a7.e
l=m.length
if(0>=l)return A.e(m,0)
if(1>=l)return A.e(m,1)
if(2>=l)return A.e(m,2)
m=a7.f
l=m.length
if(0>=l)return A.e(m,0)
k=m[0]
if(1>=l)return A.e(m,1)
h=m[1]
if(2>=l)return A.e(m,2)
m=m[2]
l=a7.r
g=l.length
if(0>=g)return A.e(l,0)
f=l[0]
if(1>=g)return A.e(l,1)
e=l[1]
if(2>=g)return A.e(l,2)
B.a.l(q,new A.fG(a7.a,a7.b,new A.c(k,h,m),new A.c(f,e,l[2])))}a8=a9.f
if(a8!=null){o.r=a8.a
o.x=a8.c
s=a8.b
r=s.length
if(0>=r)return A.e(s,0)
q=s[0]
if(1>=r)return A.e(s,1)
p=s[1]
if(2>=r)return A.e(s,2)
o.w=new A.c(q,p,s[2])}o.on()
return o},
IP(a){var s
A:{if("living-room"===a){s=A.d([A.A6("mantle-living",!0,new A.c(3.7,1.45,0.8),"living-room gas mantle"),A.A6("mantle-living-second",!1,new A.c(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.d([A.A6("mantle-hall",!1,new A.c(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.lt
break A}return s},
Fw(a,b){var s,r=A.ia(a,"room"),q=A.bL(r,"id"),p=A.bL(r,"floor"),o=A.AY(r.h(0,"origin"),"origin",b),n=A.AY(r.h(0,"size"),"size",b),m=J.em(A.i6(r,"windows"),new A.pf(b),t.ya)
m=A.J(m,m.$ti.i("a1.E"))
m.$flags=1
s=J.em(A.i6(r,"portalIds"),new A.pg(),t.N)
s=A.J(s,s.$ti.i("a1.E"))
s.$flags=1
return new A.es(q,p,o,n,m,s,A.B4(r,"wall"),A.B4(r,"floor"),A.B4(r,"ceiling"))},
ia(a,b){return t.P.b(a)?a:A.eg(b+" is not an object")},
i6(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.eg(b+" is not a list")},
bL(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eg(b+" is not a string")},
B4(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.eg("surface is not an object")
return A.bL(s,b)},
AE(a,b){var s,r=A.bL(a,b)
A:{if("north"===r){s=B.D
break A}if("east"===r){s=B.at
break A}if("south"===r){s=B.H
break A}if("west"===r){s=B.au
break A}s=A.eg(b+" has unknown facing "+r)}return s},
JW(a,b){var s,r
if(t.j.b(a)){s=J.aN(a)
s=s.gM(a)||s.P(a,new A.yv())}else s=!0
if(s)return A.eg(b+" is not a non-empty finite number list")
s=A.d([],t.n)
for(r=J.N(a);r.m();)s.push(A.a_(r.gp()))
return s},
f4(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.eg(b+" is not finite")},
o0(a,b){var s,r
if(t.j.b(a)){s=J.aN(a)
s=s.gu(a)!==3||s.P(a,new A.yR())}else s=!0
if(s)return A.eg(b+" is not a finite vec3")
s=A.d([],t.n)
for(r=J.N(a);r.m();)s.push(A.a_(r.gp()))
return s},
AY(a,b,c){var s,r,q,p=A.d([],t.n)
for(s=A.o0(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
ku(a,b){var s,r,q=A.a0(t.N)
for(s=J.N(a);s.m();){r=s.gp()
if(!q.l(0,r))throw A.a(A.M("duplicate "+b+" id "+r,null,null))}},
eg(a){return A.h(A.M(a,null,null))},
kK:function kK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
p0:function p0(){},
p1:function p1(a){this.a=a},
p2:function p2(a){this.a=a},
p3:function p3(){},
p4:function p4(){},
p7:function p7(){},
p8:function p8(){},
p9:function p9(){},
pa:function pa(){},
pb:function pb(){},
pc:function pc(){},
pd:function pd(){},
p6:function p6(a){this.a=a},
pe:function pe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yW:function yW(){},
eq:function eq(a){this.a=a},
es:function es(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
pf:function pf(a){this.a=a},
pg:function pg(){},
eu:function eu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n},
et:function et(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yv:function yv(){},
yR:function yR(){},
oD:function oD(){},
oE:function oE(){},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kT:function kT(a){this.a=a},
lv:function lv(a){this.a=a},
lJ:function lJ(a){this.a=a},
lK:function lK(a){this.a=a},
lM:function lM(a){this.a=a},
ms:function ms(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b
this.d=null},
pv:function pv(a){this.a=a},
lS:function lS(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
mX:function mX(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qU:function qU(){this.b=0},
a8:function a8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
le:function le(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q1:function q1(){},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(){},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
Lt(a){var s,r,q,p,o,n,m,l
a.B()
s=a.a
r=s.length
q=r*14
p=new Float32Array(q)
for(o=0;o<r;++o){n=s[o]
m=o*14
if(!(m<q))return A.e(p,m)
p[m]=n.a
l=m+1
if(!(l<q))return A.e(p,l)
p[l]=n.b
l=m+2
if(!(l<q))return A.e(p,l)
p[l]=n.c
l=m+3
if(!(l<q))return A.e(p,l)
p[l]=n.d
l=m+4
if(!(l<q))return A.e(p,l)
p[l]=n.e
l=m+5
if(!(l<q))return A.e(p,l)
p[l]=n.f
l=m+6
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+7
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+8
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+9
if(!(l<q))return A.e(p,l)
p[l]=0
l=m+10
if(!(l<q))return A.e(p,l)
p[l]=1
l=m+11
if(!(l<q))return A.e(p,l)
p[l]=n.r
l=m+12
if(!(l<q))return A.e(p,l)
p[l]=n.w
l=m+13
if(!(l<q))return A.e(p,l)
p[l]=n.x}s=a.c
return new A.c0(B.am,p,new Uint16Array(A.S(a.b)),new A.h4(new A.B(s.a,s.b,s.c),new A.B(s.d,s.e,s.f)))},
Ls(a){var s,r,q,p,o,n=A.d([],t.uH)
for(s=A.Kj(a,new A.zQ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.lf(o,p.c,p.e))}return n},
Kj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.B()
s=A.m(t.N,t.Ez)
for(r=a.b,q=r.length,p=t.t,o=a.a,n=0;n<q;n+=3){m=r[n]
l=n+1
if(!(l<q))return A.e(r,l)
k=r[l]
l=n+2
if(!(l<q))return A.e(r,l)
j=r[l]
l=o.length
if(!(m<l))return A.e(o,m)
i=o[m]
h=i.x
if(!(k<l))return A.e(o,k)
g=o[k]
f=g.x
if(f===h){if(!(j<l))return A.e(o,j)
e=o[j].x!==h}else e=!0
if(e){if(!(j<l))return A.e(o,j)
throw A.a(A.p("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.e(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.q(d,":")?B.c.K(d,0,B.c.bI(d,":")):null
l=new A.dz(d,l,h,A.d([],p))
s.k(0,d,l)}B.a.L(l.d,A.d([m,k,j],p))}r=A.d([],t.wf)
q=s.$ti.i("am<2>")
q=A.J(new A.am(s,q),q.i("t.E"))
B.a.Y(q,new A.yJ())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].q5(a))
return r},
IS(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.le(r,q,p,o,n,m)},
lf:function lf(a,b,c){this.a=a
this.b=b
this.c=c},
zQ:function zQ(a){this.a=a},
yJ:function yJ(){},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jM:function jM(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fi:function fi(a,b){this.a=a
this.b=b},
lg:function lg(){},
KL(a){var s,r,q,p=new A.qV(A.d([],t.Dl),A.d([],t.t),A.m(t.N,t.S))
for(s=0;s<4;++s)A.Jd(p,a,B.Z[s],15.75,15.75,12.044999999999998,0.63)
p.E(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.E(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.E(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.E(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.E(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.E(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.E(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.E(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a8(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a8(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.az(r,new A.a8(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.az(r,q,new A.a8(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a8(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a8(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.az(q,new A.a8(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.az(q,r,new A.a8(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.E(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.az(new A.a8(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a8(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a8(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.az(new A.a8(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a8(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a8(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a8(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a8(7.875,16.32,16.383,-1,0,0,1,1,0)
p.az(r,new A.a8(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.az(r,q,new A.a8(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a8(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a8(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.az(q,new A.a8(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.az(q,r,new A.a8(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.K8(p,15.75,15.75,12.044999999999998,16.32)
A.IW(p,15.75,15.75,16.32)
A.J9(p,15.75,15.75,12.044999999999998)
A.Jh(p,a,15.75)
A.Kf(p,15.75,15.75)
A.IR(p,15.75)
return p.mJ()},
Jd(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.d([],t.il)
for(s=b6.b,r=s.length,q=B.at!==b7,p=B.D!==b7,o=B.H===b7,n=B.au===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.ac(k)
switch(m){case 0:i=k.d.c===0
break
case 2:i=Math.abs(k.d.c+j.c-b9)<0.001
break
case 3:i=k.d.a===0
break
case 1:i=Math.abs(k.d.a+j.a-b8)<0.001
break
default:i=null}if(!i)continue
for(i=k.e,h=i.length,g=k.d,f=g.b,e=g.c,g=g.a,d=0;d<i.length;i.length===h||(0,A.r)(i),++d){c=i[d]
if(c.b!==b7)continue
A:{if(!p||o){b=g+c.c
break A}if(!q||n){b=e+c.c
break A}b=null}a=f+c.d
B.a.l(b4,new A.eX(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aP(i),b=J.N(h.a),h=new A.R(b,h.b,h.$ti.i("R<1>"));h.m();){a=b.gp()
if(!a.Q||a.aW(i)!==b7)continue
B:{if(!p||o){a0=g+a.aO(i)
break B}if(!q||n){a0=e+a.aO(i)
break B}a0=null}B.a.l(b4,new A.eX(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.D||b7===B.H?b8:b9
r=t.i
a1=A.aQ([0,s],r)
a2=A.aQ([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.J(a1,a1.$ti.c)
B.a.a4(a4)
a5=A.J(a2,a2.$ti.c)
B.a.a4(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.P(b4,new A.yi(b0,b1,b2,b3)))continue
switch(m){case 0:b5.E(0,b1,b3,0,b0,b2,r)
break
case 2:b5.E(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.E(0,0,b3,b1,r,b2,b0)
break
case 1:b5.E(0,s,b3,b1,b8,b2,b0)
break}}A.Jg(b5,b4,b7,b8,b9,c1)
A.Je(b5,b4,b7,b8,b9,c1)
A.Jf(b5,b4,b7,b8,b9,c0,c1)},
Jf(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aQ([0,a4===B.D||a4===B.H?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.a4(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.e(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.P(a3,new A.yh(a,a0,g)))continue
switch(s){case 0:a2.E(1,a0,e,m,a,f,l)
break
case 2:a2.E(1,a0,e,k,a,f,j)
break
case 3:a2.E(1,m,e,a0,l,f,a)
break
case 1:a2.E(1,o,e,a0,n,f,a)
break}}}},
Je(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
for(s=a4.length,r=a5.a,q=a6+a8,p=q+0.08,o=-a8,n=o-0.08,m=a7+a8,l=m+0.08,k=o-0.25,j=o-0.17,i=o-0.2,h=o-0.05,g=0;g<a4.length;a4.length===s||(0,A.r)(a4),++g){f=a4[g]
if(f.e)continue
switch(r){case 0:e=f.a
d=f.c
c=f.b
a3.E(2,c+0.08,d-0.02,o,e-0.08,d-0.08,n)
if(d<3){a3.E(3,c+0.1,d-0.14,h,e-0.1,d-0.24,i)
for(e=[e-0.04,c+0.04],c=d-0.16,d-=0.04,b=0;b<2;++b){a=e[b]
a3.E(6,a+0.025,d,j,a-0.025,c,k)}}break
case 2:e=f.c
a3.E(2,f.b+0.08,e-0.02,l,f.a-0.08,e-0.08,m)
break
case 3:e=f.c
a3.E(2,o,e-0.02,f.b+0.08,n,e-0.08,f.a-0.08)
break
case 1:e=f.c
a3.E(2,p,e-0.02,f.b+0.08,q,e-0.08,f.a-0.08)
break}}if(a5!==B.D)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.E(2,a+0.18,n,r,a,a1,p)}}},
Jg(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=a3.length,r=a4.a,q=a7+0.06,p=a5+a7,o=a5+q,n=a5-0.65,m=-q,l=-a7,k=a6+a7,j=a6+q,i=a6-0.65,h=0;h<a3.length;a3.length===s||(0,A.r)(a3),++h){g=a3[h]
f=g.e
e=f?3:2
switch(r){case 0:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.E(e,d,a,l,c,b,m)
a0=g.b
a1=a0+0.06
a2.E(e,a1,a,l,a0,b,m)
a2.E(e,a1,b,l,c,b-0.06,m)
a2.E(e,a1,a+0.06,l,c,a,m)
if(f)a2.E(3,d+0.07,a,0.65,d,b,l)
break
case 2:d=g.a
c=d-0.06
b=g.c
a=g.d
a2.E(e,d,a,j,c,b,k)
a0=g.b
a1=a0+0.06
a2.E(e,a1,a,j,a0,b,k)
a2.E(e,a1,b,j,c,b-0.06,k)
a2.E(e,a1,a+0.06,j,c,a,k)
if(f)a2.E(3,d+0.07,a,k,d,b,i)
break
case 3:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.E(e,l,a,c,m,d,b)
a0=g.b
a1=a0+0.06
a2.E(e,l,a,a1,m,d,a0)
a2.E(e,l,d,a1,m,d-0.06,b)
a2.E(e,l,a+0.06,a1,m,a,b)
if(f)a2.E(3,0.65,a,c+0.07,l,d,c)
break
case 1:d=g.c
c=g.a
b=c-0.06
a=g.d
a2.E(e,o,a,c,p,d,b)
a0=g.b
a1=a0+0.06
a2.E(e,o,a,a1,p,d,a0)
a2.E(e,o,d,a1,p,d-0.06,b)
a2.E(e,o,a+0.06,a1,p,a,b)
if(f)a2.E(3,p,a,c+0.07,n,d,c)
break}if(!f)A.Kd(a2,g,a4,a5,a6,a7,q)}},
Kd(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
switch(c.a){case 0:s=-g
r=-f
a.E(3,o+0.025,m,r,o-0.025,n,s)
a.E(3,p,l+0.025,r,q,l-0.025,s)
break
case 2:s=e+f
r=e+g
a.E(3,o+0.025,m,r,o-0.025,n,s)
a.E(3,p,l+0.025,r,q,l-0.025,s)
break
case 3:s=-g
r=-f
a.E(3,r,m,o+0.025,s,n,o-0.025)
a.E(3,r,l+0.025,p,s,l-0.025,q)
break
case 1:s=d+f
r=d+g
a.E(3,r,m,o+0.025,s,n,o-0.025)
a.E(3,r,l+0.025,p,s,l-0.025,q)
break}},
K8(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.E(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.E(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.E(4,i,p,-0.38,j,q,-0.44)
a.E(4,i,p,s,j,q,o)}A.K9(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.E(5,h+0.5,p,o,h-0.5,r,q)}},
K9(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a8(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a8(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.az(n,new A.a8(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.az(n,m,new A.a8(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a8(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a8(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.az(m,new A.a8(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.az(m,n,new A.a8(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
IW(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.E(0,g+0.35,k,n,g-0.35,l,q)
a.E(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.E(5,d+0.1,o,m,d-0.1,r,p)}}},
J9(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.E(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.E(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.E(6,j,b+0.06,d,k,b,e)}a.E(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Jh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aO("hall")
q=r+s.w
for(i=r-0.28,p=q+0.28,o=0;o<3;++o){n=o*0.1
m=o*0.12
l=o*0.25
a.E(2,p+n,0.02-m,-0.42-l,i-n,-0.08-m,-0.7-l)}a.E(6,r-0.27,1.15,-0.98,r-0.38,0,-1.12)
a.E(6,q+0.38,1.15,-0.98,q+0.27,0,-1.12)
a.E(6,p,1.95,-0.58,q+0.16,1.55,-0.63)
a.E(3,q+0.32,1.5,-0.55,q+0.12,1.42,-0.69)
k=r-0.18
a.E(6,k+0.46,0.1,-1.24,k,0.04,-1.34)
for(i=k+0.06,o=0;o<3;++o){j=i+o*0.16
a.E(6,j+0.035,0.24,-1.25,j,0.1,-1.34)}},
Kf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
a.E(2,h,0.18,3.35,b+0.02,-0.03,2.25)
s=b+0.14
a.E(6,s,0.13,3.26,h,0.02,2.34)
for(h=b+0.18,r=0;r<5;++r){q=2.42+r*0.18
a.E(6,h,0.12,q+0.07,s,0.03,q)}p=b+0.58
o=c-1.15
a.E(3,p+0.34,1.05,o+0.34,p-0.34,0,o-0.34)
for(h=[0.26,0.76],s=p-0.37,n=o-0.37,m=p+0.37,l=o+0.37,k=0;k<2;++k){j=h[k]
a.E(6,m,j+0.06,l,s,j,n)}a.E(6,p+0.36,1.12,o+0.36,p-0.36,1.05,o-0.36)
for(h=c+0.02,s=c+0.08,r=0;r<6;++r){i=0.65+r*1.55
a.E(6,i+0.34,0.22,s,i,0.1,h)}},
IR(a,b){var s,r
a.E(0,6.7,1,-4.05,-2.5,0,-4.4)
a.E(0,b+2.5,1,-4.05,9.4,0,-4.4)
for(s=0;s<7;++s){r=6.7+s*0.45
a.E(6,r+0.07,1.25,-4.12,r,0,-4.35)}a.E(7,b+3,0,-4.55,-3,-0.08,-5.2)},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yi:function yi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yh:function yh(a,b,c){this.a=a
this.b=b
this.c=c},
Lg(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.Bf(b,d,c)
if(k!=null){s=k.b
return new A.eD(B.hn,k.a,s)}r=A.EA(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.eD(B.ho,r.a,s)}if(A.EB(b,d,c)!=null)return B.hs
q=A.Lf(a,b,c,d)
if(q!=null)return new A.eD(B.cY,q.a,"inspect the "+q.b)
p=A.Ez(b,c,d,e)
if(p!=null){o=e.bU(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eD(B.hq,l,m?"inspect the "+o.b:"inspect "+n)}return B.ht},
Ez(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.o3(a5,s,4.5)
for(q=a6.c5(a4),p=J.N(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gp()
if(!i.x)continue
h=a6.bU(i.c)
g=i.f.a
f=i.fe(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.c(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.ga2()
a0=a3.b
a1=Math.acos(B.b.n(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.o5(a5,a4,a3.a,new A.c(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
Lf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.jo(c)
if(s.length===0)return f
r=d.ac(e)
q=A.o3(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.r)(s),++l){k=s[l]
j=b.a
i=new A.c(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.ga2()
j=b.b
if(Math.acos(B.b.n(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.o5(d,c,b.a,new A.c(n,m,o)))return k}return f},
dM:function dM(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
Hc(a,b,c,d){return new A.jk(c,a,d,b)},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qP:function qP(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.x=_.w=_.r=null
_.y=f},
rd:function rd(a){this.a=a},
qS:function qS(a){this.a=a},
n5:function n5(a){this.a=a},
o3(a,b,c){var s=a.ac(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
o5(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.JG(a,s,c,d)},
JG(a,b,c,d){var s,r,q,p,o=a.ac(b),n=d.Z(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.xv(a,b,o,B.D,r,q,p,c,n,m))return!0
if(A.xv(a,b,o,B.H,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.xv(a,b,o,B.au,s,r,q,c,n,m))return!0
if(A.xv(a,b,o,B.at,s+o.a,r,q,c,n,m))return!0
return!1},
xv(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.S(0,a6.a3(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.D||a1===B.H
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aP(m),k=J.N(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gp()
if(q.aW(m)===a1){g=q.aO(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
Bf(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.o3(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.r)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.c(h-f.a,g-f.b,i-f.c)
d=e.gu(0)
if(d<0.01||d>s)continue
c=e.ga2()
f=a.b
if(Math.acos(B.b.n(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.o5(a0,a1,a.a,new A.c(h,g,i)))continue
m=d
l=j}}return l},
EA(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.o3(b,j,4.5):4.5
for(s=b.aP(c),r=J.N(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>")),q=i,p=null;s.m();){o=r.gp()
n=b.pm(c,o)
m=a.a
l=new A.c(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.DJ(l,k,a,i,0.5236)||k>=q)continue
if(!A.o5(b,c,a.a,n))continue
q=k
p=o}return p},
EB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.o3(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
l=A.KD(b,h,m)
k=a.a
j=new A.c(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.DJ(j,i,a,s,0.5236)||i>=p)continue
if(!A.o5(b,c,a.a,l))continue
p=i
o=m}return o},
DJ(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.n(a.ga2().bh(c.b),-1,1))<=e},
KD(a,b,c){var s=a.ac(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.c(q.a+r,p,q.c)
break
case 2:q=new A.c(q.a+r,p,q.c+s.c)
break
case 1:q=new A.c(q.a+s.a,p,q.c+r)
break
case 3:q=new A.c(q.a,p,q.c+r)
break
default:q=null}return q},
q0:function q0(){this.a=null
this.b=0},
ve:function ve(){},
vf:function vf(){},
Gp(a){var s,r,q=A.kp(a,"inventory asset"),p=A.d6(q,"id"),o=A.d6(q,"kind")
A.d6(q,"source")
A.d6(q,"proxy")
A.d6(q,"pivot")
s=q.h(0,"status")
r=A.d6(q,"id")
if(s==null)s="proxy"
if(typeof s!="string"||!A.aQ(["production","proxy","invisible-anchor"],t.N).q(0,s))A.h(A.M("invalid inventory asset status "+r+": "+A.z(s),null,null))
q=A.kp(q.h(0,"bounds"),"inventory bounds")
return new A.di(p,o,s,new A.rl(A.o_(q.h(0,"min"),"bounds.min"),A.o_(q.h(0,"max"),"bounds.max")))},
Gr(a6){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.kp(a6,"inventory placement"),g=A.kp(h.h(0,"visibility"),"placement visibility"),f=A.kp(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.bK,a=h.h(0,"physics"),a0=c.b(a)?a:B.bK,a1=A.d6(h,"id"),a2=A.d6(h,"roomId"),a3=A.d6(h,"assetId"),a4=A.d6(h,"role"),a5=typeof h.h(0,"socket")=="string"?A.v(h.h(0,"socket")):null
h=A.kp(h.h(0,"transform"),"inventory transform")
s=A.o_(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.h(B.ir)
r=A.o_(h.h(0,"position"),"transform.position")
q=A.o_(h.h(0,"rotation"),"transform.rotation")
p=A.d6(g,"layer")
if(typeof g.h(0,i)=="string")A.v(g.h(0,i))
o=J.aa(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.v(f.h(0,"focusId")):null
c=c.b(e)?A.f3(e,"radius"):0
m=b.gM(b)?0:A.f3(b,"heatOutputWatts")
l=b.gM(b)?0:A.f3(b,"surfaceTemperatureCelsius")
k=b.gM(b)?0:A.f3(b,"radiusM")
if(b.gM(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a_(b.h(0,"offsetY")):0
return new A.cU(a1,a2,a3,a4,a5,new A.rn(r,q,s),p,o,n,c,m,l,k,j,A.Gq(a0))},
Gq(a){if(a.gM(a))return B.ko
return new A.lC(A.d6(a,"bodyType"),A.f3(a,"massKg"),A.f3(a,"volumeM3"),A.f3(a,"densityKgM3"),A.f3(a,"friction"),A.f3(a,"restitution"),J.aa(a.h(0,"collision"),!0))},
kp(a,b){return t.P.b(a)?a:A.ef(b+" is not an object")},
d6(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.ef(b+" is not a string")},
f3(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.ef(b+" is not finite")},
o_(a,b){var s
if(t.j.b(a)){s=J.aN(a)
s=s.gu(a)!==3||s.P(a,new A.yQ())}else s=!0
if(s)return A.ef(b+" is not a finite vec3")
s=J.aN(a)
return new A.c(A.a_(s.h(a,0)),A.a_(s.h(a,1)),A.a_(s.h(a,2)))},
ef(a){return A.h(A.M(a,null,null))},
qX:function qX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r0:function r0(a){this.a=a},
r_:function r_(){},
qY:function qY(a){this.a=a},
qZ:function qZ(a){this.a=a},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
cU:function cU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o},
lC:function lC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
rl:function rl(a,b){this.a=a
this.b=b},
yQ:function yQ(){},
rm:function rm(a){this.a=a},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
r1:function r1(a){this.a=a},
r2:function r2(a){this.a=a},
GL(a){var s
if(B.bL.J(a)){s=B.bL.h(0,a)
s.toString
return s}A:{if("living-room"===a){s="livingRoom"
break A}if("spare-room"===a){s="spareRoom"
break A}if("rear-service"===a){s="cellar"
break A}s=a
break A}s=B.bL.h(0,s)
return s==null?A.d([],t.W):s},
GK(a,b){var s,r,q,p,o,n,m,l,k=A.GL(a),j=k.length
if(j===0)return b
for(s=0,r=0,q=0,p=0;p<j;++p){o=k[p].e
s+=o.c
r+=o.b
q+=o.a}n=B.b.n(0.35,0,0.8)
m=1-n
o=B.b.n(b.c*m+s/j*n,0,1)
l=B.b.n(b.b*m+r/j*n,0,1)
return new A.aT(B.b.n(b.a*m+q/j*n,0,1),l,o)},
cA:function cA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
A6(a,b,c,d){return new A.lN(a,d,c,b)},
eC:function eC(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=!0},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=!1},
lN:function lN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=!1},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.f=c
_.r=d},
fB:function fB(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
c3:function c3(){},
Gj(a){return A.Gi(a)},
Gi(a){var s,r,q,p,o,n,m=A.DS(a,"sound emitter"),l=t.N,k=A.m(l,l)
for(s=A.DS(m.h(0,"cues"),"sound emitter cues").gN(),s=s.gA(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.a(B.ij)
k.k(0,r.a,q)}s=A.B1(m,"id")
r=A.B1(m,"roomId")
p=A.B1(m,"placementId")
o=A.KA(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.i4("gain is not a number")
return new A.dh(s,r,p,o,n,A.aX(k,l,l))},
DS(a,b){return t.P.b(a)?a:A.i4(b+" is not an object")},
B1(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.i4(b+" is not a string")},
KA(a,b){var s
if(t.j.b(a)){s=J.aN(a)
s=s.gu(a)!==3||s.P(a,new A.yP())}else s=!0
if(s)throw A.a(A.M(b+" must be a numeric vec3",null,null))
s=J.aN(a)
return new A.c(A.a_(s.h(a,0)),A.a_(s.h(a,1)),A.a_(s.h(a,2)))},
i4(a){return A.h(A.M(a,null,null))},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
r7:function r7(a){this.a=a},
r8:function r8(a){this.a=a},
r9:function r9(){},
ra:function ra(){},
dh:function dh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qT:function qT(){this.b=this.a=null},
fn:function fn(a){this.a=a},
r5:function r5(){this.b=this.a=null},
dg:function dg(a,b){this.a=a
this.b=b},
yP:function yP(){},
BS(a,b,c,d,e,f){var s=t.N
return new A.rb(e,f,c,a,A.aX(A.b_(d,s,s),s,s),A.ab(b,s))},
BT(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.m(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.j5(p.ax,p.ay))}s=A.m(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.m(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.iR(j.d,j.r))}return A.BS(a.y.b,B.o,i,B.aV,h,s)},
Gk(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.mw
r=a3.h(0,"mantleHistory")
if(r==null)r=B.aU
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.b4(a2)||!q.b(s)||!t.j.b(r))throw A.a(B.ig)
p=t.N
o=A.m(p,t.DL)
for(n=a.gN(),n=n.gA(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.d0)
l=A.b_(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bB(j)||!A.bB(i))A.h(B.d0)
o.k(0,k,new A.j5(j,i))}h=A.m(p,t.y)
for(n=a0.gN(),n=n.gA(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bB(l.b))throw A.a(B.ib)
h.k(0,k,A.U(l.b))}g=A.m(p,t.m2)
for(n=a1.gN(),n=n.gA(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.a(B.cZ)
l=A.b_(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bB(f)||!A.bB(e))A.h(B.cZ)
g.k(0,k,new A.iR(f,e))}d=A.m(p,p)
for(q=s.gN(),q=q.gA(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.a(B.je)
d.k(0,n,A.v(p.b))}c=A.d([],t.s)
for(q=J.N(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.a(B.hu)
B.a.l(c,b)}return A.BS(a2,c,g,d,o,h)},
AX(a,b){return a.a.a===b.a&&a.a5(0,b.gaH(b))},
rb:function rb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5:function j5(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
rc(a){var s=B.bH.h(0,a)
if(s==null)throw A.a(A.i("Unknown house surface material: "+a))
return s},
aF:function aF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
G_(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hw(e,A.C(e).c)
q=new A.eY()
q.ck((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.iA(a,q,2,r,1+s,A.aQ(["time"],t.N))
break
case 3:A.iA(a,q,3,r,1+s,A.aQ(["place"],t.N))
break
case 4:A.iA(a,q,4,r,2+s,p)
A.FW(a,q,4)
break
case 5:A.iA(a,q,5,r,s,p)
A.FU(a,q,5)
break
case 6:A.iA(a,q,6,r,s,p)
A.FV(a,q)
A.FZ(a,q,6)
break
case 7:A.FX(a,q,7)
break
default:if(s>0)A.iA(a,q,b,r,s,p)}},
FT(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.FY(a,b,c))return!1
return!0},
iA(a,b,c,d,e,f){var s,r,q,p,o=A.d([],t.U)
for(s=a.b,s=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>"));s.m();){r=s.d
if(A.FT(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.e1(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.BK(a,b,o[p],f)}},
BK(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.b_(B.a.gaa(o).a,n,n)
if(d==null)s=A.d(B.E.slice(0),t.s)
else{n=t.vY
s=A.J(new A.F(B.E,t.Ag.a(new A.pW(d)),n),n.i("t.E"))}n=s.length
if(n===0)return
n=b.aZ(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fD(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.aZ(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.k(0,r,p[n])}a.eD(c.a,m,B.a.gaa(o).b)},
FW(a,b,c){var s=A.BL(a,b,c)
if(!a.ct(s))return
a.fQ(c,t.G.a(s),0,B.bp,null)},
BL(a,b,c){var s,r,q,p,o,n=t.N,m=A.m(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.E[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.aZ(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.k(0,r,q[o])}}return m},
FU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.U)
for(s=a.b,s=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.e1(i,b)
s=i.length
if(0>=s)return A.e(i,0)
q=i[0]
if(1>=s)return A.e(i,1)
p=i[1]
i=q.c
s=t.N
o=A.b_(B.a.gaa(i).a,s,s)
r=p.c
n=A.b_(B.a.gaa(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.E[m]
k=o.h(0,l)
j=s.fD(l,k==null?"":k)
k=j.length
if(k!==0){k=b.aZ(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.k(0,l,j[k])}}a.eD(q.a,o,B.a.gaa(i).b)
a.eD(p.a,n,B.a.gaa(r).b)},
FV(a,b){var s,r,q=A.d([],t.U)
for(s=a.b,r=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.aZ(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.a7(0,q[r].a)},
FZ(a,b,c){var s,r,q=A.d([],t.U)
for(s=a.b,s=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.aZ(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.BK(a,b,q[s],null)},
FX(a,b,c){var s=c+1,r=A.BL(a,b,s)
if(!a.ct(r))return
a.fQ(s,t.G.a(r),0,B.bp,null)},
FY(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gaa(b.c).c===B.aR}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gaa(b.c).c===B.aR}if(c===21)return b.e
return!1},
pW:function pW(a){this.a=a},
HE(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=0;s<5;++s){r=B.E[s]
q=a.h(0,r)
p=A.aG(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.vZ(n)},
rG(a,b,c){var s,r,q,p=t.z
p=A.m(p,p)
for(s=0;s<5;++s){r=B.E[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.lL(A.aX(p,q,q),b,c)},
C2(a){var s=t.N
return A.rG(t.P.a(a.h(0,"fields")).bl(0,new A.rH(),s,s),A.a_(a.h(0,"shakiness")),A.G4(B.li,A.v(a.h(0,"hand")),t.qX))},
G3(a){var s,r,q,p,o=a.h(0,"margin"),n=A.j(a.h(0,"ordinal")),m=A.j(a.h(0,"day")),l=A.d([],t.Bv)
for(s=J.N(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.C2(r.a(s.gp())))
s=A.ac(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.xp(a.h(0,"lastReadDay"))
return new A.ce(n,m,l,s,q,p,o==null?null:A.C2(r.a(o)))},
eE:function eE(a,b){this.a=a
this.b=b},
vZ:function vZ(a){this.a=a},
lL:function lL(a,b,c){this.a=a
this.b=b
this.c=c},
rH:function rH(){},
rI:function rI(a){this.a=a},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
C_(a){return new A.rr(a,A.m(t.S,t.g),A.a0(t.N),A.d([],t.t))},
Gw(a,b){var s,r,q,p,o=A.C_(a)
o.e=A.j(b.h(0,"nextOrdinal"))
o.f=A.j(b.h(0,"locksRemaining"))
s=t.j
o.c.L(0,J.Ff(s.a(b.h(0,"tags")),t.N))
for(s=J.N(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.G3(r.a(s.gp()))
q.k(0,p.a,p)}return o},
rr:function rr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
ry:function ry(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
ph:function ph(){},
GQ(a){var s,r,q,p,o,n,m,l,k=B.f.ai(a,null),j=t.f
if(!j.b(k)||!J.aa(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.a(B.hz)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.a(B.iT)
r=A.d([],t.d8)
for(q=J.N(s);q.m();){p=q.gp()
if(j.b(p)){o=A.ac(p.h(0,"assetId"))
if(o==null)o=""
n=A.ac(p.h(0,"licenseId"))
if(n==null)n=""
m=A.ac(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.ac(p.h(0,"sourceFormat"))
r.push(new A.j7(o,n,m,l==null?"":l))}else r.push(A.h(B.iw))}return new A.tH(A.GR(r))},
GR(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.m(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.je("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.M("promoted model index ID is invalid: "+o,n,n))
if(k.J(o))throw A.a(A.M("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aQ(p).length===0||p==="unknown"||p==="unlicensed")throw A.a(A.M("promoted model index rights are unknown: "+o,n,n))
if(!A.aQ(["obj","gltf","glb","fbx"],m).q(0,q.d))throw A.a(A.M("promoted model index source format is invalid: "+o,n,n))
if(!A.Kc(q.c))throw A.a(A.M("promoted model index manifest path is unsafe: "+o,n,n))
k.k(0,o,q)}return A.aX(k,m,l)},
Kc(a){if(a.length===0||B.c.X(a,"/")||B.c.q(a,"://"))return!1
if(B.c.bi(a.toLowerCase(),".obj")||B.c.bi(a.toLowerCase(),".mtl")||B.c.bi(a.toLowerCase(),".fbx"))return!1
return B.a.a5(A.d(a.split("/"),t.s),new A.yF())},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tH:function tH(a){this.a=a},
yF:function yF(){},
Ce(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.m(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.je("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.a(A.M("asset ID is not stable kebab-case: "+o,j,j))
if(g.J(o))throw A.a(A.M("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.a(A.M("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aQ(m).length===0||m==="unknown"||m==="unlicensed")throw A.a(A.M("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.a(A.M("package is not approved: "+o,j,j))
l=A.EF(n)
if(l.length!==0)throw A.a(A.M("package manifest is invalid for "+o+": "+B.a.bz(l,new A.tJ(),i).a_(0,"; "),j,j))
p=p.b
k=A.Lv(n,p)
if(k.length!==0)throw A.a(A.M("package payloads are invalid for "+o+": "+B.a.bz(k,new A.tK(),i).a_(0,"; "),j,j))
if(A.C9(n,p)!==n.c)throw A.a(A.M("package hash mismatch: "+o,j,j))
g.k(0,o,q)}return A.aX(g,i,h)},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function m9(a){this.a=a},
tJ:function tJ(){},
tK:function tK(){},
tB:function tB(){},
tA:function tA(a,b,c){this.b=a
this.c=b
this.d=c},
tC:function tC(){},
GN(a,b,c){return B.os},
m2:function m2(a,b){this.a=a
this.b=b},
tD:function tD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tE:function tE(){},
tF:function tF(a){this.d=a},
hD:function hD(){},
tG:function tG(a){this.a=a},
tI:function tI(){},
tL:function tL(a,b){this.a=a
this.b=b},
tM:function tM(){},
tN:function tN(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
u_:function u_(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
Cp(a){if(!isFinite(0))A.h(A.a7(0,"interpolation",null))
return new A.uc(a)},
mg:function mg(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
uc:function uc(a){this.a=a},
mh:function mh(a,b,c){this.a=a
this.b=b
this.c=c},
Cn(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hw(c,A.C(c).c)
r=A.J(r,A.w(r).c)
B.a.a4(r)
s=t.N
r=A.ab(r,s)
r=new A.ub(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aX(l,s,t.X))
r.ko(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Co(a,b,c,d){var s=A.nT("RENDERER_SHA"),r=A.nT("GAME_SHA"),q=A.nT("DART_SDK_VERSION")
return A.Cn(a,"f6eec28aa2f7-a3a444afab94-dirty",b,!1,null,r,A.nT("LOCKFILE_SHA256"),d,A.nT("PROJECT_VERSION"),s,q,null)},
nT(a){var s=B.mm.h(0,a)
return s.length===0?null:s},
ub:function ub(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
ud:function ud(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
v3:function v3(a){this.a=a},
v4:function v4(){},
Y(a,b,c,d,e,f,g,h,i,j){return new A.cD(e,g,a,f,i,h,j,c,c,b,B.ez)},
Cv(){var s=new A.v5(B.aD)
s.w=t.yu.a(A.d([A.Y(B.a2,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.Y(B.a2,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.Y(B.a2,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.Y(B.a2,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.Y(B.a2,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.Y(B.aj,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.Y(B.aj,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.Y(B.aj,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.Y(B.aj,!0,1,"Weather-aware shadow filter hardness (higher is sharper)","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.Y(B.aj,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.Y(B.aE,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.Y(B.aE,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.Y(B.aE,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.Y(B.aE,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.Y(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.Y(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.Y(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.Y(B.l,!0,1,"Scale for the start/end distance of atmospheric extinction","fog_distance_scale",!1,"Fog Distance Reach",2,0.25,0.05),A.Y(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.Y(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.Y(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.Y(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.Y(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.Y(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.Y(B.l,!0,12,"Raymarch samples per pixel (4=preview, 24=clean)","volumetric_precision",!1,"Volumetric Sample Rate",24,4,1),A.Y(B.l,!0,0.02,"Near-field particulate density that gives light shafts visible body","volumetric_dust_density",!1,"Suspended Dust Density",0.25,0,0.005),A.Y(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.Y(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.Y(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.Y(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.Y(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.Y(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.Y(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.Y(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.Y(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.Y(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.Y(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.Y(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.Y(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.Y(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.Y(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.Y(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.Y(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.Y(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.Y(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.Y(B.a2,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.Y(B.t,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.Y(B.t,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.Y(B.t,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.Y(B.t,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.Y(B.t,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.Y(B.t,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.Y(B.t,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05),A.Y(B.t,!0,1,"Ray-marched cloud layer on clear skybox pixels","cloud_enable",!0,"Volumetric Cloud Shell",1,0,0.05),A.Y(B.t,!0,-0.1,"Override weather cloud coverage (-0.1 = schedule driven)","cloud_coverage_override",!1,"Cloud Coverage Lock",1,-0.1,0.05),A.Y(B.t,!0,0.72,"Extinction through the finite volumetric cloud shell","cloud_density",!1,"Cloud Optical Density",1,0,0.05),A.Y(B.t,!0,0.55,"High-frequency erosion mixed into the cloud body noise","cloud_detail",!1,"Cloud Detail",1,0,0.05),A.Y(B.t,!0,1,"Scale for authored wind transport through the cloud shell","cloud_speed",!1,"Cloud Advection Speed",2,0,0.05),A.Y(B.t,!0,0.25,"Bounded forward-scattered edge response around cloud forms","cloud_silver_lining",!1,"Cloud Silver Lining",1,0,0.05),A.Y(B.t,!0,12,"Sky cloud samples per pixel (4=preview, 24=clean)","cloud_samples",!1,"Cloud Raymarch Samples",24,4,1)],t.hT))
return s},
c5:function c5(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ax=_.at=_.as=null},
v5:function v5(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
vc:function vc(a){this.a=a},
v6:function v6(){},
v7:function v7(){},
vd:function vd(){},
va:function va(a){this.a=a},
vb:function vb(a){this.a=a},
v9:function v9(a){this.a=a},
v8:function v8(a){this.a=a},
Hp(a){var s,r,q,p,o,n=B.b.n(a,7,17),m=new A.vl()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.cU()
if(o<n)s=p
else r=p}return(s+r)*0.5},
Cz(a){var s
if(!isFinite(a))throw A.a(A.a7(a,"horizonVisibility01",null))
s=B.b.n(a,0,1)
return s*s*(3-2*s)},
vl:function vl(){},
BH(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.h(A.M("saved day-loop resources must not be negative",null,null))
return new A.pP(c,g,b,a,e,d===!0,s)},
FN(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.a(B.hW)
s=A.d([],t.El)
for(r=J.N(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.a(B.ih)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.b4(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.a(B.hP)
f=A.bM(new A.F(B.dC,q.a(new A.pQ(h)),p),o)
e=A.bM(new A.F(B.dA,n.a(new A.pR(g)),m),l)
if(f==null||e==null)throw A.a(B.j3)
B.a.l(s,new A.hM(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.b4(d)||!A.b4(c)||!A.b4(b)||!A.bB(a))throw A.a(B.it)
return A.BH(c,d,a1,a,b,s,a3)},
c6:function c6(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
pP:function pP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pQ:function pQ(a){this.a=a},
pR:function pR(a){this.a=a},
lj:function lj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
lA:function lA(a,b){this.a=a
this.b=b},
fN:function fN(a,b){this.a=a
this.b=b},
wl:function wl(a,b){this.b=a
this.c=b},
fM:function fM(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
re:function re(a){this.c=a},
ri:function ri(a,b,c){this.a=a
this.b=b
this.d=c},
rj:function rj(){},
H3(a,b){var s,r,q,p=A.ab(b,t.Dp),o=A.m(t.N,t.cw)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
o.k(0,q.a,q)}p=new A.tX(p,o)
p.kn(a,b)
return p},
jc:function jc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tY:function tY(a){this.a=a},
tZ:function tZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
tX:function tX(a,b){this.a=a
this.b=b},
AH(a){var s,r,q,p=A.d([],t.s),o=A.a0(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.a(B.j0)
B.a.l(p,q)}return p},
cC:function cC(a,b){this.a=a
this.b=b},
ui:function ui(){},
ds:function ds(){},
uj:function uj(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
Jm(a){var s,r=A.d([],t.yo)
for(s=1;s<=21;++s)r.push(new A.yj(s,a).$0())
return r},
nX(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
eL:function eL(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wb:function wb(a){this.b=a},
yj:function yj(a,b){this.a=a
this.b=b},
kk(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
CP(a){var s
switch(a.a){case 0:s=B.rG
break
case 1:s=B.rF
break
case 2:s=B.rI
break
case 3:s=B.rE
break
case 4:s=B.rH
break
default:s=null}return s},
CO(a,b){return new A.mS(!1,0,0)},
HH(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.kk(f)||!A.kk(a)||!A.kk(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.a(A.p("weather impact inputs must be finite and valid",j))
if(b===B.w)return A.CO(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.B()
m=A.HG(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.CO(a,g)
f.S(0,a.Z(0,f).a3(0,p))
l=g.bh(g)
A:{if(B.az===b||B.ad===b){s=B.rC
break A}if(B.ae===b){s=q.d>0.5?B.rD:B.cq
break A}if(B.a_===b){s=l>1?B.eX:B.cq
break A}if(B.w===b){s=B.rB
break A}s=j}if(s===B.eX){k=q.e
g.Z(0,r.a3(0,2*g.bh(r))).a3(0,k)}s=s===B.cq?d:0
return new A.mS(!0,0.5*d*l,s)},
HG(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.Z(0,new A.c(a2,a2,a2)),d=a1.c.S(0,new A.c(a2,a2,a2)),c=a0.Z(0,a),b=new A.c(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.w8(a,o)
m=A.w8(c,o)
l=A.w8(e,o)
k=A.w8(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.CM(o,m>0)
if(j>i){h=A.CM(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.CN(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.CN(c)}if(r>1)return f
return new A.a5(r,b)},
w8(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
CM(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.c(r,0,0)
break A}if(1===a){s=new A.c(0,r,0)
break A}s=new A.c(0,0,r)
break A}return s},
CN(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.c(0,q>0?-1:1,0)
if(r>=n)return new A.c(s>0?-1:1,0,0)
return new A.c(0,0,o>0?-1:1)},
CQ(a,b,c){var s=new A.hU(b,c,a)
s.hT()
return s},
CR(a,b,c){return A.CQ(a,b,c)},
HL(a){var s,r,q
if(!t.f.b(a))throw A.a(B.iU)
s=new A.wc(a)
r=s.$1("snowDepthM")
q=s.$1("waterFilmDepthM")
return A.CQ(s.$1("materialDissolution01"),r,q)},
wa(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
if(!isFinite(b0))A.h(A.a7(b0,"roomTemperatureCelsius",a2))
s=b1.c
if(!isFinite(s))A.h(A.a7(s,a3,a2))
r=b1.d
if(!isFinite(r))A.h(A.a7(r,a4,a2))
q=b1.e
if(!isFinite(q))A.h(A.a7(q,a5,a2))
p=b1.f
if(!isFinite(p))A.h(A.a7(p,"internalHeatWatts",a2))
o=b1.r
if(!isFinite(o))A.h(A.a7(o,a6,a2))
n=b1.w
if(!isFinite(n))A.h(A.a7(n,a7,a2))
m=b1.x
if(!isFinite(m))A.h(A.a7(m,"dtSeconds",a2))
if(s<0||s>1)A.h(A.a7(s,a3,a8))
if(r<0||r>1)A.h(A.a7(r,a4,a8))
if(q<=0)A.h(A.a7(q,a5,a9))
if(o<=0)A.h(A.a7(o,a6,a9))
if(n<=0)A.h(A.a7(n,a7,a9))
l=b1.a
k=1-r*0.85
j=l.e*(1-r*0.9)
r=l.f
i=Math.cos(r)
r=Math.sin(r)
h=l.w
if(h===B.w&&l.b)h=B.az
g=A.HI(h,B.b.n(l.c,0,1))*k
f=A.HJ(h)
e=h===B.ae?g/120:0
d=h===B.w?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.n(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.w9(h,new A.c(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
HK(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.kk(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.a(A.p("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.h(A.p("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.h(A.p("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.c(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.n((e-b)/Math.max(1,s),0,1)
return new A.w0(m,e,l,d,e>b)},
HI(a,b){var s
if(a===B.w)return 0
s=0.00005+b*0.00045
return a===B.a_?s*0.75:s},
HJ(a){var s
switch(a.a){case 0:s=0
break
case 1:s=8.8
break
case 2:s=5.5
break
case 3:s=0.9
break
case 4:s=18
break
default:s=null}return s},
hT:function hT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w0:function w0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w9:function w9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
fK:function fK(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eU:function eU(a,b){this.a=a
this.b=b},
mS:function mS(a,b,c){this.a=a
this.f=b
this.r=c},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
wc:function wc(a){this.a=a},
wd:function wd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
KJ(a){var s
A:{if("broadcast"===a){s=B.fa
break A}if("visitor"===a){s=B.fb
break A}if("aftermath"===a){s=B.fc
break A}if("ending"===a){s=B.fd
break A}s=A.h(A.M("screenplay event has no consumer: "+a,null,null))}return s},
Gb(a){var s=t.Dm,r=A.J(a.c,s)
B.a.Y(r,new A.qk())
s=new A.qj(A.ab(r,s))
s.q1()
return s},
Ga(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.lo(a,c,A.fq(B.o,t.N))
s=t.N
r=J.Bx(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.lo(a,c,A.fq(new A.F(r,q.i("l(t.E)").a(new A.qi(a)),q.i("F<t.E>")),s))},
fc:function fc(a,b){this.a=a
this.b=b},
qj:function qj(a){this.a=a},
qk:function qk(){},
lo:function lo(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a){this.a=a},
te(a,b,c){var s,r=t.N,q=A.m(r,r)
if(a!=null)q.L(0,a)
s=A.m(r,r)
if(b!=null)s.L(0,b)
r=A.m(r,t.Fr)
if(c!=null)r.L(0,c)
return new A.td(q,s,r)},
GF(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.b4(s)||s!==1)return l
r=A.Cb(a.h(0,"choices"))
q=A.Cb(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.m(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gN(),k=k.gA(k);k.m();){n=k.gp()
m=A.G8(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.te(r,q,p)},
Cb(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.m(s,s)
for(s=a.gN(),s=s.gA(s);s.m();){q=s.gp()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.v(q.b))}return r},
G8(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.b4(r)||r<1||!A.b4(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.db(s,r,q,p)},
td:function td(a,b,c){this.a=a
this.b=b
this.c=c},
tf:function tf(){},
tg:function tg(){},
th:function th(){},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
GM(a,b){var s,r,q,p=A.d([],t.xz)
for(s=J.N(a);s.m();){r=s.gp()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bF("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.ty(b,p)},
bF:function bF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ty:function ty(a,b){this.a=a
this.b=b},
tz:function tz(a){this.a=a},
hO(a){var s,r,q=A.m(t.N,t.z)
for(s=a.gN(),s=s.gA(s);s.m();){r=s.gp()
q.k(0,B.d.t(r.a),r.b)}return q},
vp:function vp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p},
vq:function vq(){},
vr:function vr(){},
fI:function fI(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hs(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.ai(a,g)
if(!t.f.b(f))throw A.a(B.iP)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.aU
if(J.aa(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.a(B.iM)
p=A.d([],t.wM)
for(o=J.N(r);o.m();)p.push(A.Hh(o.gp()))
o=A.d([],t.D)
for(n=J.N(q);n.m();)o.push(A.Hg(n.gp()))
n=t.N
m=A.a0(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.r)(p),++k){j=p[k].a
if(!m.l(0,j))throw A.a(A.M("duplicate screenplay scene: "+j,g,g))}i=A.a0(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.r)(o),++k){n=o[k].a
if(!i.l(0,n))throw A.a(A.M("duplicate screenplay event: "+n,g,g))}p=A.d([],t.s)
for(n=J.N(s);n.m();){h=n.gp()
if(typeof h!="string"||h.length===0)A.h(A.M("source must be a non-empty string",g,g))
p.push(h)}return new A.vn(o)},
Hg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.v(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.v(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.v(a.h(0,f)).length===0)throw A.a(B.i8)
s=a.h(0,"effects")
if(s==null)s=B.aU
if(!t.j.b(s)||J.kz(s,new A.up()))throw A.a(B.iS)
r=B.b.ah(A.a_(a.h(0,"day")))
q=A.a_(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.a(B.iF)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.a(B.hD)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.a(B.jc)
l=new A.uq(a)
m=A.v(a.h(0,"id"))
k=A.v(a.h(0,g))
j=A.v(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.d([],t.s)
for(h=J.N(s);h.m();)i.push(A.v(h.gp()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.ck(m,k,r,q,j,A.ab(i,t.N),n,h)},
Hh(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.a(B.hU)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.ah(r)!==r)throw A.a(B.ip)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.a(A.M("screenplay scene "+s+" has invalid arrays",null,null))
B.b.ah(r)
m=A.d([],t.s)
for(l=J.N(p);l.m();){k=l.gp()
if(typeof k!="string"||k.length===0)A.h(B.iD)
m.push(k)}m=A.d([],t.rn)
for(l=J.N(o);l.m();){k=l.gp()
if(!j.b(k)||typeof k.h(0,"kind")!="string"||typeof k.h(0,"text")!="string")A.h(B.j8)
A.v(k.h(0,"kind"))
A.v(k.h(0,"text"))
A.ac(k.h(0,"speaker"))
m.push(new A.mk())}j=A.d([],t.gg)
for(m=J.N(n);m.m();)j.push(A.Hf(m.gp()))
return new A.mn(s)},
Hf(a){var s,r,q,p="id",o=t.f
if(!o.b(a)||typeof a.h(0,p)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.a(B.i1)
A.v(a.h(0,p))
A.v(a.h(0,"prompt"))
s=A.d([],t.yv)
for(r=J.N(t.tY.a(a.h(0,"options")));r.m();){q=r.gp()
if(!o.b(q)||typeof q.h(0,p)!="string"||typeof q.h(0,"label")!="string"||typeof q.h(0,"next")!="string")A.h(B.iJ)
A.v(q.h(0,p))
A.v(q.h(0,"label"))
A.v(q.h(0,"next"))
s.push(new A.mm())}return new A.ml()},
vn:function vn(a){this.c=a},
vo:function vo(){},
ck:function ck(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
up:function up(){},
uq:function uq(a){this.a=a},
mn:function mn(a){this.a=a},
mk:function mk(){},
ml:function ml(){},
mm:function mm(){},
vs:function vs(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
vt:function vt(){},
vu:function vu(){},
kB:function kB(a){this.a=a},
zX:function zX(a,b,c){this.b=a
this.e=b
this.f=c},
Fm(a){var s,r,q,p
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.hy)
s=new A.od()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.ki(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.en(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.b7(B.bE,new A.ob(a),new A.oc()))},
d9:function d9(a,b){this.a=a
this.b=b},
en:function en(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
od:function od(){},
ob:function ob(a){this.a=a},
oc:function oc(){},
oo:function oo(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
oq:function oq(a){this.a=a},
op:function op(a,b){this.a=a
this.b=b},
oF:function oF(a,b){this.a=a
this.b=b},
Fv(a){var s
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.iq)
s=new A.oP()
return new A.ep(s.$1$2(B.bC,a.h(0,"output"),t.xs),s.$1$2(B.bx,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bw,a.h(0,"reverb"),t.gc),s.$1$2(B.bu,a.h(0,"ducking"),t.ul))},
cQ:function cQ(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
oP:function oP(){},
oQ:function oQ(a,b){this.a=a
this.b=b},
oR:function oR(a){this.a=a},
pj:function pj(a){this.a=a
this.b=null},
pn(a,b,c){var s
b.B()
if(c<1||c>6)throw A.a(A.a7(c,"level","must be between 1 and 6"))
s=A.H(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.pl(s,b)
return s},
ey(a,b,c,d){var s,r,q
b.B()
s=b.e
r=d==null?b.c:d
q=A.H(a,"button","brush-button brush-state-"+s.b,r)
A.pl(q,b)
q.type="button"
q.disabled=s===B.aL
q.addEventListener("click",A.Z(new A.pm(c)))
return q},
FA(a,b,c,d){var s,r
b.B()
s=A.b(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aL
A.pl(s,b)
s.addEventListener("change",A.Z(new A.pq(d,s)))
return s},
Fz(a,b,c,d,e,f){var s,r
b.B()
s=A.b(a.createElement("input"))
s.type="range"
s.min=A.z(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aL
A.pl(s,b)
s.addEventListener("input",A.Z(new A.pp(s,e)))
return s},
zZ(a,b){var s=B.c.k_(A.v(a.className),A.je("\\s+")),r=A.C(s),q=r.i("F<1>"),p=A.J(new A.F(s,r.i("l(1)").a(new A.po()),q),q.i("t.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a_(p," ")
a.setAttribute("data-brush-state",s)},
pl(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gmp())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aL)a.setAttribute("aria-disabled","true")},
pm:function pm(a){this.a=a},
pq:function pq(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
po:function po(){},
ew:function ew(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
br:function br(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ps:function ps(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
pt:function pt(a){this.a=a},
BF(a){var s=!1
if(a.length!==0)if(!B.eu.q(0,a))s=B.pQ.q(0,a)||B.pG.q(0,a)||B.pP.q(0,a)||!B.c.X(a,"Mouse")
return s},
J5(a){var s,r,q,p,o=t.N,n=A.m(o,t.a)
for(s=new A.O(a,A.w(a).i("O<1,2>")).gA(0);s.m();){r=s.d
q=r.a
p=A.aG(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
JM(a){var s,r,q=A.m(t.N,t.a),p=a==null?null:new A.O(a,A.w(a).i("O<1,2>"))
p=J.N(p==null?A.d([],t.Bq):p)
s=t.s
while(p.m()){r=p.gp()
q.k(0,r.a,A.d([r.b],s))}return q},
hh(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.hv(B.mj,s,r)
if(b!=null)q.L(0,b)
q.L(0,A.JM(a))
s=new A.hg(g,d,h,e,f,c,A.aX(A.J5(q),s,r))
s.B()
return s},
FK(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.a(B.d_)
s=a.h(0,"version")
r=J.f8(s)
if(!r.ab(s,1)&&!r.ab(s,2))throw A.a(B.d_)
q=A.m(t.N,t.a)
for(j=j.a(a.h(0,k)).gN(),j=j.gA(j),r=t.s,p=t.j;j.m();){o=j.gp()
n=o.a
m=o.b
if(typeof n!="string")throw A.a(B.i9)
if(typeof m=="string")q.k(0,n,A.d([m],r))
else if(p.b(m)&&J.Fi(m,new A.pE())){o=A.d([],r)
for(l=J.N(m);l.m();)o.push(A.v(l.gp()))
q.k(0,n,o)}else throw A.a(B.hG)}j=A.a_(a.h(0,"horizontalSensitivity"))
r=A.a_(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.hh(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
Ay(a){var s,r,q,p=t.N,o=A.m(p,t.a)
for(s=a.gN(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
AS(a,b){var s,r,q,p=A.d([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
B6(a,b){var s,r,q,p=A.d([],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
hg:function hg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pG:function pG(){},
pF:function pF(a){this.a=a},
pH:function pH(){},
pI:function pI(){},
pJ:function pJ(){},
pE:function pE(){},
ev:function ev(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.c=b},
l_:function l_(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
FJ(a){var s=t.N,r=t.m
r=new A.iy(A.hh(null,null,!1,1,!1,!1,2,1),A.m(s,r),A.m(s,r),A.m(s,r),a,A.b(a.createElement("div")))
r.b0(a)
r.kg(a)
return r},
iy:function iy(a,b,c,d,e,f){var _=this
_.r=_.f=null
_.w=a
_.x=$
_.y=b
_.z=c
_.Q=d
_.ax=_.at=_.as=null
_.a=e
_.b=f
_.e=_.d=_.c=null},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a){this.a=a},
pB:function pB(a,b){this.a=a
this.b=b},
pz:function pz(a,b){this.a=a
this.b=b},
pA:function pA(a,b){this.a=a
this.b=b},
FL(a){var s=new A.pK(a,A.b(a.createElement("div")))
s.b0(a)
s.kh(a)
return s},
pK:function pK(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
pL:function pL(a){this.a=a},
FR(a){var s=new A.pS(A.H(a,"div","door",null))
s.kj(a)
return s},
BI(a){var s,r,q
if(a.length===0)return""
s=A.d([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.a_(s,"; ")+"."},
pS:function pS(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
pT:function pT(a){this.a=a},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
G0(a){var s=new A.pY(a,A.b(a.createElement("div")))
s.b0(a)
s.kk(a)
return s},
pY:function pY(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pZ:function pZ(a){this.a=a},
qs:function qs(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
qt:function qt(){},
Gc(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.qu(a.b===B.dd,a.c===B.dh,s,a.e===B.de,a.f===B.db,a.r===B.dj,a.w,a.x)},
qu:function qu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
A_(a,b,c,d,e,f,g,h,i,j,k){return new A.ho(e,g,k,f,b,h,d,c,a,i,j)},
Gd(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.iG)
s=new A.qv(a)
r=a.h(0,"contextualReminders")
if(!A.bB(r))throw A.a(B.j1)
q=!A.bB(a.h(0,i))||A.U(a.h(0,i))
p=s.$1$2("interactionMode",B.bD,t.bK)
o=s.$1$2("promptDensity",B.bG,t.dn)
n=s.$1$2("textPacing",B.bF,t.j_)
m=s.$1$2("journalLayout",B.by,t.gm)
l=s.$1$2("confirmations",B.bs,t.aJ)
k=s.$1$2("saveFeedback",B.bz,t.mx)
j=s.$1$2("focusLossBehavior",B.aT,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.bv,t.vS):B.bg
return A.A_(s,l,r,j,p,m,o,k,q,A.bB(a.h(0,g))&&A.U(a.h(0,g)),n)},
dQ:function dQ(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k},
qv:function qv(a){this.a=a},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(a){this.a=a},
BQ(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.im)
s=B.a.b7(B.dE,new A.qJ(a),new A.qK())
r=A.v(a.h(0,"renderScale"))
q=A.U(a.h(0,"dynamicResolution"))
p=A.v(a.h(0,"frameTarget"))
o=A.v(a.h(0,"antialiasing"))
n=A.v(a.h(0,"textureQuality"))
m=A.ac(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.ac(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.ac(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.Aw(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dT(1,s,r,q,p,o,n,m,l,k,j===!0)
i.B()
return i},
hr(a,b){var s=b==null?B.bo:b
return new A.qL(s,a==null?B.bo:a)},
Eu(a,b){var s,r,q
a.B()
s=A.d([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.eB(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.eB("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.ia(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.bm&&b.a<2){q=q.ib(B.bn)
B.a.l(s,"High preset was reduced to Standard")}return new A.qC(q,A.ab(s,t.N))},
cS:function cS(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
qJ:function qJ(a){this.a=a},
qK:function qK(){},
qL:function qL(a,b){this.a=a
this.b=b},
qB:function qB(a,b){this.a=a
this.b=b},
qC:function qC(a,b){this.a=a
this.b=b},
Gf(a){var s=new A.iJ(A.m(t.N,t.m),B.bo,a,A.b(a.createElement("div")))
s.b0(a)
s.kl(a)
return s},
iJ:function iJ(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.Q=_.z=_.y=null
_.as=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qD:function qD(a){this.a=a},
kC:function kC(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(){this.c=0},
Gg(a){var s=new A.qN(a,A.b(a.createElement("div")))
s.b0(a)
s.km(a)
return s},
qN:function qN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
qO:function qO(a){this.a=a},
rs:function rs(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
rt:function rt(a){this.a=a},
ru:function ru(a){this.a=a},
rv:function rv(a,b,c){this.a=a
this.b=b
this.c=c},
rw:function rw(){},
rx:function rx(){},
Lq(a,b,c){if(!isFinite(c)||!isFinite(b)||b<=c)throw A.a(A.p("temperature gauge range must be finite and ordered",null))
if(!isFinite(a))return 0.5
return B.b.n((a-c)/(b-c),0,1)},
dn:function dn(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
tn:function tn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
H(a,b,c,d){var s=A.b(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
DB(a){var s,r,q,p=A.b(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.d([],t.e)
for(s=t.m,r=0;r<A.j(p.length);++r){q=A.G(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
j4:function j4(){},
bE:function bE(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(){},
tu:function tu(){},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
ts:function ts(a){this.a=a},
tv:function tv(a){this.a=a},
cZ:function cZ(a,b){this.a=a
this.b=b},
tw:function tw(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tx:function tx(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
tW:function tW(a){this.a=a
this.b=null},
Hi(a){var s=new A.us(a,A.b(a.createElement("div")))
s.b0(a)
s.kp(a)
return s},
us:function us(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ut:function ut(a,b){this.a=a
this.b=b},
uu:function uu(a){this.a=a},
mo(a,b){var s=t.N,r=t.m
r=new A.hL(b,A.m(s,r),A.m(s,r),A.m(s,t.rf),A.m(s,r),$.zU(),B.aI,A.m(s,r),A.m(s,r),B.b8,A.m(s,r),a,A.b(a.createElement("div")))
r.b0(a)
r.kq(a,b)
return r},
hL:function hL(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.f=a
_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.cy=b
_.db=c
_.dx=d
_.fy=_.fx=_.fr=_.dy=null
_.go=e
_.k2=_.k1=_.id=null
_.k3=f
_.k4=g
_.ok=h
_.p1=i
_.p2=j
_.p3=k
_.a=l
_.b=m
_.e=_.d=_.c=null},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
uV:function uV(a,b){this.a=a
this.b=b},
uW:function uW(a){this.a=a},
uX:function uX(a){this.a=a},
uL:function uL(a,b){this.a=a
this.b=b},
uM:function uM(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uN:function uN(a){this.a=a},
uv:function uv(a,b,c){this.a=a
this.b=b
this.c=c},
uO:function uO(a,b){this.a=a
this.b=b},
uP:function uP(a,b){this.a=a
this.b=b},
uQ:function uQ(a,b){this.a=a
this.b=b},
uJ:function uJ(a,b,c){this.a=a
this.b=b
this.c=c},
uB:function uB(a){this.a=a},
uC:function uC(a){this.a=a},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
uF:function uF(a){this.a=a},
uG:function uG(a){this.a=a},
uH:function uH(a){this.a=a},
uI:function uI(a){this.a=a},
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
uw:function uw(a){this.a=a},
ux:function ux(a){this.a=a},
uy:function uy(a){this.a=a},
uz:function uz(a){this.a=a},
uS:function uS(a,b,c){this.a=a
this.b=b
this.c=c},
uR:function uR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uZ(a){return B.a.b7(B.J,new A.v_(a),new A.v0(a))},
Hj(){var s,r,q=A.m(t.N,t.K)
for(s=0;s<10;++s){r=B.J[s]
q.k(0,r.a,r.e)}return q},
e2(a,b){var s=t.z
s=A.hv(A.Hj(),s,s)
if(a!=null)s.L(0,a)
s=new A.uY(b,A.aX(s,t.N,t.K))
s.kr(a,b)
return s},
Cu(a){var s,r=t.f
if(!r.b(a)||!J.aa(a.h(0,"version"),1))throw A.a(B.iY)
s=a.h(0,"values")
if(!r.b(s))throw A.a(B.hV)
return A.e2(A.b_(s,t.N,t.K),A.j(a.h(0,"version")))},
bP:function bP(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
v_:function v_(a){this.a=a},
v0:function v0(a){this.a=a},
uY:function uY(a,b){this.a=a
this.b=b},
Af(a,b){var s=b==null?A.e2(null,1):b
return new A.v1(s,a==null?A.e2(null,1):a)},
Hk(a,b){var s,r,q,p,o,n,m,l=A.m(t.N,t.K)
for(q=0;q<10;++q){s=B.J[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fw(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.cc(r)
J.ba(l,s.a,r)}catch(n){if(!(A.al(n) instanceof A.A))throw n}}m=A.e2(l,1)
return A.Af(m,m)},
v1:function v1(a,b){this.a=a
this.b=b},
Hn(a){var s=new A.vh(A.m(t.u5,t.nx),a,A.b(a.createElement("div")))
s.b0(a)
s.ks(a)
return s},
vh:function vh(a,b,c){var _=this
_.f=null
_.r=a
_.w=$
_.a=b
_.b=c
_.e=_.d=_.c=null},
vi:function vi(){},
vj:function vj(a,b,c){this.a=a
this.b=b
this.c=c},
Fp(a){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.Fg)
for(s=a.d,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gN(),n=n.gA(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cO(p+m+":"+k,m,l.a,l.b,j))}}B.a.Y(i,new A.om())
return new A.ol(A.ab(i,t.bC),A.a0(t.N))},
cO:function cO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ol:function ol(a,b){this.a=a
this.b=b},
on:function on(){},
om:function om(){},
HD(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.rA
s=t.T
r=A.m(s,t.q1)
q=A.w(a).i("af<1>")
p=A.J(new A.af(a,q),q.i("t.E"))
B.a.a4(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gN(),j=j.gA(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bz(new A.bI(B.ri,k+" has an out-of-range authored day "+h+"."))
g=A.HC(k,h,i.b,m)
if(g instanceof A.bz)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.c9(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.m(a,q)
for(o=a0.ax,o=new A.ad(o,o.r,o.e,A.w(o).i("ad<2>"));o.m();){n=o.d
J.el(e.c6(n.b,new A.vT()),n)}o=A.aX(a0.at,a,t.sy)
q=A.m(a,q)
for(n=new A.O(e,e.$ti.i("O<1,2>")).gA(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aG(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.mO(new A.mN(r,A.a0(a),A.a0(s),o,q,A.d([],t.Dc),B.ah,A.te(b,b,b)))},
HC(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.m(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.dz[p]
n=o.b
m=n+"."
l=A.d([],q)
for(k=a0.gN(),k=k.gA(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.c.X(h,m))continue
g=A.dY(B.c.aR(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bz(new A.bI(B.rj,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dH
B.a.l(l,new A.co(g,i.b,f))}if(l.length===0)continue
B.a.Y(l,new A.vQ())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bz(new A.bI(B.eV,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bz(new A.bI(B.eV,a+" day "+s+" has no authored tiers."))
return new A.nk(c)},
mN:function mN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=null
_.w=!1
_.x=g
_.y=h},
vW:function vW(a){this.a=a},
vV:function vV(a){this.a=a},
vX:function vX(a){this.a=a},
vR:function vR(a){this.a=a},
vS:function vS(){},
vU:function vU(a){this.a=a},
vT:function vT(){},
vP:function vP(a){this.a=a},
vO:function vO(a){this.a=a},
vQ:function vQ(){},
mO:function mO(a){this.a=a},
nk:function nk(a){this.a=a},
KX(a){var s,r,q,p=A.a0(t.N)
for(s=new A.O(a,A.w(a).i("O<1,2>")).gA(0);s.m();){r=s.d
for(q=r.b.gan(),q=q.gA(q);q.m();)if(q.gp().ga6().P(0,new A.z3())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.a4(s)
return s},
KW(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.aG(b,!0,s)
B.a.a4(r)
q=new A.eY()
q.ck((a^913741)>>>0)
p=q.aZ(4)
if(!(p>=0&&p<4))return A.e(B.dv,p)
o=B.dv[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.aG(r,!0,s)
B.a.e1(m,q)
s=A.hP(m,0,A.ej(n,"count",t.S),A.C(m).c).bL(0)
B.a.a4(s)
return s},
z3:function z3(){},
CK(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.b4(r)||!A.b4(q)||!A.b4(p)||r<1||q<0||q>23||p<0)return null
return new A.c9(s,r,q,p)},
HB(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a0(t.N)
for(s=t.j,q=J.N(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.l(0,p)}o=A.a0(t.T)
for(s=J.N(s.a(a.h(0,j)));s.m();){n=A.CK(s.gp())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Fo(m)
if(!s&&l==null)return i
return new A.mP(r,o,l)},
Fo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.CK(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.b4(p))if(!(p<0))if(A.bB(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bM(new A.F(B.dz,t.u_.a(new A.oi(r)),t.ni),t.hF)
j=A.bM(new A.F(B.mc,t.da.a(new A.oj(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bM(new A.F(B.kQ,t.kr.a(new A.ok(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.kD(s,k,j,p,i,n,A.ac(m))},
bY:function bY(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dx:function dx(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mP:function mP(a,b,c){this.a=a
this.b=b
this.c=c},
vN:function vN(){},
kD:function kD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oi:function oi(a){this.a=a},
oj:function oj(a){this.a=a},
ok:function ok(a){this.a=a},
mM:function mM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
vY:function vY(){},
bz:function bz(a){this.a=a},
mL:function mL(a){this.a=a},
mJ:function mJ(a){this.a=a},
jy:function jy(a,b){this.a=a
this.b=b},
mK:function mK(a,b,c){this.a=a
this.b=b
this.c=c},
xW(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l
var $async$xW=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.b(A.b(A.b(A.b(v.G.window).navigator).clipboard).writeText(B.f.a0($.bU().fg(),null))),t.X),$async$xW)
case 6:$.o.j().setAttribute("data-renderer-shader-lab-clipboard","copied")
$.o.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
l=p.pop()
o=A.al(l)
m=$.o.j()
m.setAttribute("data-renderer-shader-lab-clipboard","copy-failed")
$.o.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.z(o))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$xW,r)},
yk(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j
var $async$yk=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.b(A.b(A.b(A.b(v.G.window).navigator).clipboard).readText()),t.N),$async$yk)
case 6:o=b
n=o
$.bU().ol(n)
$.o.j().setAttribute("data-renderer-shader-lab-clipboard","imported")
$.o.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
j=p.pop()
m=A.al(j)
k=$.o.j()
k.setAttribute("data-renderer-shader-lab-clipboard","import-failed")
$.o.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.z(m))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$yk,r)},
K1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.kw())return f
n=A.e7().gb_()
m=n.h(0,"captureSeed")
l=A.dY(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dY(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fw(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.ai(s,f)
if(t.f.b(q)){m=t.N
p=A.m(m,m)
for(m=q.gN(),m=m.gA(m);m.m();){o=m.gp()
if(typeof o.a!="string"||typeof o.b!="string"||!B.pH.q(0,o.b))return f
J.ba(p,A.v(o.a),A.v(o.b))}r=p}else return f}catch(g){if(A.al(g) instanceof A.A)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.pO.q(0,i))return f
if(h!=null&&!B.pL.q(0,h))return f
return new A.wr(l,k,j,h,r)},
K2(){var s,r,q,p=A.e7().gb_().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fT
break A}if("intimate"===p){s=B.fV
break A}s=B.fU
break A}r=A.e7().gb_().h(0,"cameraFov")
q=A.fw(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.ha(B.b.n(q,35,100)*3.141592653589793/180,s.b,s.c)},
ib(a){var s=$.bk
if(s===a&&B.c.q(A.v(a.b.className),"open"))return
if(s!=null)s.am()
$.bk=a
if(a===$.fX.j())$.fX.j().jw($.ag===$.T.j().r)
if(a===$.cJ.j())$.ik().iW("gameplay.viewport")
else $.ik().pd(A.DT(a))
s=$.ao.j()
s.ay=!1
s.b1()
$.f2=0
a.c4()},
AN(a,b,c){var s,r,q
$.kq=!0
s=$.bk
if(s!=null)s.am()
$.bk=a
s=$.ik()
if(s.a.a.length===0)s.iW(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dW(b,B.a9,c))
q=s.a
s.a=new A.eJ(r,q.b,q.c)
s.l_(b)
s=$.ao.j()
s.ay=!1
s.b1()
$.f2=0
a.c4()
$.kq=!1},
ei(a){var s,r,q,p,o,n,m,l=null
if($.kq)return
$.kq=!0
a.am()
$.bk=null
s=$.ik().mD()
$.kq=!1
r=s.a
if(r===B.eb){$.f2=0
r=$.ao.j()
r.b1()
r.ay=!0
q=A.G(A.b(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.ea)return
r=s.c.a
r=r.length===0?l:B.a.gaa(r)
p=r==null?l:r.a
A:{if(B.bU===p){r=$.cJ.j()
break A}if(B.e0===p){r=$.i3.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bk=r
n=$.ao.j()
n.ay=!1
n.b1()
$.f2=0
r.c4()
m=o==null?l:A.G(A.b(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
kt(a){if($.bk===a&&B.c.q(A.v(a.b.className),"open"))a.am()
else A.ib(a)},
ic(a){var s
if($.kq)return
if($.bk===a)$.bk=null
if(a===$.cJ.j())$.ik().cQ()
else $.ik().nN(A.DT(a))
$.f2=0
s=$.ao.j()
s.b1()
s.ay=!0},
DT(a){if(a===$.cJ.j())return B.e1
if(a===$.i3.j())return B.a9
if(a instanceof A.hL)return B.a9
if(a instanceof A.iJ)return B.a9
if(a instanceof A.iy)return B.a9
if(a===$.kf.j())return B.oc
if(a===$.fX.j())return B.od
if(a===$.ke.j())return B.oe
if(a===$.nM.j())return B.a9
if(a===$.kc.j())return B.og
return B.of},
nS(a,b){var s
a.soY(new A.xF())
a.sp0(new A.xG())
a.sp_(new A.xH())
a.soU(new A.xN())
a.soX(new A.xO())
a.spc(new A.xP())
a.sp7(new A.xQ())
a.sp6(new A.xR())
a.sbm(b?new A.xS(a):new A.xT(a))
a.sba(b?new A.xU(a):new A.xI(a))
s=a.f
if(s===B.R)a.soL(new A.xJ())
if(s===B.ab)a.soV(new A.xK())
if(s===B.S){a.soK(new A.xL())
a.sp5(new A.xM())}},
J2(){var s=new A.xB(),r=$.f0.j()
r.sf4(s)
r.soZ(new A.xC(s))
r.sbm(new A.xD())
r.sba(new A.xE())},
nR(a,b,c){return A.J_(a,b,c)},
J_(a,b,c){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nR=A.aM(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.xx()
k=c.$ti
j=$.ar
i=new A.as(j,k)
if(j!==B.B)l=A.DZ(l,j)
c.d0(new A.ea(i,2,null,l,k.i("ea<1,1>")))
s=4
return A.a6(i,$async$nR)
case 4:case 3:o=$.kx().b
n=$.ay
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a6(n.dj(b.a),$async$nR)
case 11:case 10:k=b.a
$.kl=A.hr(k,a)
$.f0.j().cY(a,k,b.b)
A.AP()
A.kr()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.al(g)
$.kl=A.hr(o,o)
k=$.f0.j()
k.cY(o,o,A.d(["renderer transaction rejected: "+A.z(m)],t.s))
A.AP()
s=8
break
case 5:s=1
break
case 8:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$nR,r)},
JR(){var s,r,q,p,o,n=null
try{n=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.ai(n,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.h(B.iI)
q=A.BQ(r.h(0,"requested"))
$.kl=A.hr(A.BQ(r.h(0,"effective")),q)}catch(s){$.kl=A.hr(null,null)}p=$.kx().a
o=A.Eu(p,A.DF())
r=o.a
$.kl=A.hr(r,p)
$.f0.j().cY(p,r,o.b)
A.AP()
A.kr()},
DF(){var s,r,q,p,o=$.fW.j().gig().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.X(p,"max-samples-"))continue
r=A.dY(B.c.aR(p,12),null)
if(r==null)r=1}return new A.qB(r,B.a.q(o,"disjoint-timer-query"))},
AP(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a0($.kx().D(),null))}catch(s){}},
J1(){var s=$.kb.j()
s.sf4(new A.xy())
s.sbm(new A.xz())
s.sba(new A.xA())},
JP(){var s,r,q,p,o,n=null
try{n=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.AC=A.FK(B.f.ai(n,null))}catch(s){$.AC=A.hh(null,null,!1,1,!1,!1,2,1)}r=$.kb.j()
q=r.w=$.h2()
r.x=new A.l_(q)
p=r.y
o=p.h(0,"horizontalSensitivity")
if(o!=null)o.value=B.b.t(q.b)
p=p.h(0,"verticalSensitivity")
if(p!=null)p.value=B.b.t(q.c)
p=r.z
o=p.h(0,"invertX")
if(o!=null)o.checked=q.d
o=p.h(0,"invertY")
if(o!=null)o.checked=q.e
p=p.h(0,"holdToInteract")
if(p!=null)p.checked=q.f
r.ep()
$.ao.j().fu($.h2().r)
r=$.ao.j()
q=$.h2()
p=r.ch
p.a=q.f
p.f9()
r.b1()
A.DV()},
DV(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a0($.h2().D(),null))}catch(s){}},
JO(){var s,r=null
try{r=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.kj=A.Fv(B.f.ai(r,null))}catch(s){$.kj=B.b8}$.i1.j().ju($.kj)
A.DU()
A.Av()},
DU(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a0($.kj.D(),null))}catch(s){}},
Av(){var s=$.bp
if(s==null)return
s.jE($.kj)},
JQ(){var s,r=null
try{r=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.AG=A.Gd(B.f.ai(r,null))}catch(s){$.AG=$.zU()}$.kd.j().jv($.cM())
A.DW()
A.Dp()},
DW(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a0($.cM().D(),null))}catch(s){}},
Dp(){var s,r="detailed",q=A.Gc($.cM()),p=A.G(A.b(v.G.document).documentElement)
if(p==null)return
s=q.a?"hold":"press"
p.setAttribute("data-gameplay-interaction",s)
s=q.b?r:"standard"
p.setAttribute("data-gameplay-prompts",s)
s=q.c
if(s===0)s="instant"
else s=s>1?"slow":"readable"
p.setAttribute("data-gameplay-text-pacing",s)
s=q.d?"compact":"spacious"
p.setAttribute("data-gameplay-journal",s)
s=q.e?"always":"important"
p.setAttribute("data-gameplay-confirmations",s)
s=q.f?r:"toast"
p.setAttribute("data-gameplay-save-feedback",s)
p.setAttribute("data-gameplay-focus-loss",q.r.b)
s=q.w?"1":"0"
p.setAttribute("data-gameplay-reminders",s)
s=$.cM().Q?"1":"0"
p.setAttribute("data-story-mode",s)
s=$.cM().Q?"1x":"20x"
p.setAttribute("data-simulation-speed",s)},
JN(){var s,r=null
try{r=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dC=A.Fm(B.f.ai(r,null))}catch(s){$.dC=B.aI}$.fV.j().ft($.dC)
A.AO()
A.nO()},
AO(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a0($.dC.D(),null))}catch(s){}},
nO(){var s,r,q,p,o,n,m=$.dC,l=$.yL,k=$.B5,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.h(B.hQ)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.ap
$.AU=l
$.d5.j()
r=A.G(A.b(v.G.document).documentElement)
q=r==null
p=q?null:A.U(A.b(r.classList).contains("high-contrast"))
o=q?null:A.U(A.b(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.U(A.b(r.classList).toggle("reduced-motion",l))
if(!q)A.U(A.b(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.U(A.b(r.classList).toggle("captions-enabled",s))
if(!q)A.U(A.b(r.classList).toggle("reduced-effects",o))
if(!q)A.U(A.b(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.b(r.style).setProperty("font-size",A.z(j*100)+"%")
q=$.o.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.z(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Dn){m=$.bj.j()
l=$.dC.f
m.e=new A.kB(l==null?B.ap:l)
m=$.bj.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
DY(a){var s,r,q
A.f6("renderer-unavailable")
s=$.o.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.m(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.dB.j().b)
$.dB.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.dB.j().d)
q.k(0,"aliasUsed",$.dB.j().f)
if($.dB.j().e!=null)q.k(0,"rejectionReason",$.dB.j().e)
if($.dB.j().r!=null)q.k(0,"aliasReason",$.dB.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a0(A.E(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.o,"selection",q],r,t.K),null))},
Jq(){var s=v.G,r=A.b(A.b(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.b(A.b(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.yo(r,q)
r.addEventListener("change",A.Z(new A.ym(s)))
q.addEventListener("change",A.Z(new A.yn(s)))},
o6(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9
var $async$o6=A.aM(function(f1,f2){if(f1===1){o.push(f2)
s=p}for(;;)switch(s){case 0:e7=v.G
e8=A.G(A.b(e7.document).getElementById("game"))
if(e8==null){s=1
break}$.o.b=e8
$.AF=A.G(A.b(e7.document).getElementById("fps"))
$.dB.b=$.F_().cV(A.e7().gb_().h(0,"renderer"))
A.Jr()
c1=$.o.j()
c2=A.j(A.b(e7.window).innerWidth)>0?A.j(A.b(e7.window).innerWidth):800
c1.width=c2
c2=$.o.j()
c1=A.j(A.b(e7.window).innerHeight)>0?A.j(A.b(e7.window).innerHeight):600
c2.height=c1
c3=A.G(A.b(e7.document).getElementById("ui-canvas"))
if(c3!=null){$.Dm.b=c3
c3.width=A.j($.o.j().width)
c3.height=A.j($.o.j().height)
c1=new A.ps(c3,A.d([],t.km))
c4=A.G(c3.getContext("2d"))
if(!t.m.b(c4))A.h(A.i("Failed to get 2D context for CanvasP5GuiEngine"))
c1.b=c4
c1=new A.ud(c1)
$.f5=c1
c1.dW(A.j($.o.j().width),A.j($.o.j().height))}n=B.fS.nC(e8)
if(n==null){A.DY("webgl2 unavailable")
s=1
break}try{c1=A.j($.o.j().width)
c2=A.j($.o.j().height)
c5=t.d
c6=A.d([],c5)
c7=t.N
c8=A.d([],t.s3)
c9=t.iO
d0=t.m3
c5=A.d([],c5)
d1=t.S
d2=t.pw
d3=A.d([],t.j5)
m=new A.nn(n,c1,c2,c6,A.m(c7,t.qr),c8,A.m(c7,c9),A.m(c7,d0),A.m(c7,t.xp),A.m(c7,t.bE),A.m(c7,c9),A.m(c7,d0),c5,A.m(c7,c9),A.m(c7,d0),A.m(c7,c7),A.m(d1,d2),A.m(c7,t.qS),d3,B.lm,A.m(c7,t.Aj),A.m(c7,c7),A.m(c7,d2),A.m(c7,t.vD),A.m(c7,d2),A.m(c7,d2),new A.t0(A.m(c7,t.ml),A.m(c7,d1)),A.m(c7,t.mL),A.m(c7,t.w1),B.jf,B.ou,B.dG,B.ln,B.dI,B.lA)
$.ay=m
c1=$.dB.j()
c2=t.dM.a(m)
if(c1.a!==B.aY)A.h(A.i("legacy renderer backend is retired; production requires Pixeldart"))
c1=new A.tA(c2,c1.D(),B.p9)
c2.oo()
c1.d=B.a0
$.fW.b=c1}catch(f0){l=A.al(f0)
k=A.d8(f0)
g=$.o.j()
g.setAttribute("data-renderer-initialization-error",A.z(l))
g.setAttribute("data-renderer-error",A.z(l))
if($.kw())$.o.j().setAttribute("data-renderer-error-stack",A.z(k))
A.DY("pixeldart initialization failed")
s=1
break}A.kr()
p=4
A.f6("initializing")
$.d5.b=new A.pr(new A.c(0,0,0),new A.c(0,0,1),new A.c(0,1,0),new A.c(1,0,0),$.Bq())
$.yL=A.U(A.b(A.b(e7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.B5=A.U(A.b(A.b(e7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.AU=$.yL
$.d5.j()
c1=A.b(e7.window)
c2=t.N
c5=t.s
c6=t.a
c5=A.Gl(A.E(["moveForward",A.d(["KeyW"],c5),"moveBack",A.d(["KeyS"],c5),"moveLeft",A.d(["KeyA"],c5),"moveRight",A.d(["KeyD"],c5),"interact",A.d(["KeyE"],c5),"secondary",A.d(["KeyQ"],c5),"run",A.d(["ShiftLeft"],c5),"crouch",A.d(["ControlLeft"],c5),"rotate",A.d(["KeyR"],c5),"reach",A.d(["KeyF"],c5),"journal",A.d(["KeyJ"],c5),"sleep",A.d(["KeyL"],c5),"pause",A.d(["Escape"],c5)],c2,c6))
c7=A.b(c1.document)
c5=new A.lz(c1,c7,A.a0(c2),A.a0(c2),A.a0(c2),A.a0(c2),A.a0(c2),new A.c(0,0,0),new A.rk(),c5)
c1.addEventListener("keydown",A.Z(c5.gls()))
c1.addEventListener("keyup",A.Z(c5.glu()))
c1.addEventListener("mousemove",A.Z(c5.glA()))
c1.addEventListener("mousedown",A.Z(c5.gly()))
c1.addEventListener("mouseup",A.Z(c5.glC()))
c1.addEventListener("wheel",A.Z(c5.glE()))
c1.addEventListener("blur",A.Z(c5.glG()))
c7.addEventListener("pointerlockchange",A.Z(c5.glw()))
$.ao.b=c5
c5=$.o.j()
c1=A.j(A.b(e7.window).innerWidth)>0?A.j(A.b(e7.window).innerWidth):800
c5.width=c1
c1=$.o.j()
c5=A.j(A.b(e7.window).innerHeight)>0?A.j(A.b(e7.window).innerHeight):600
c1.height=c5
A.f6("renderer")
A.f6("text")
c5=$.h3()
s=7
return A.a6(c5.bk(),$async$o6)
case 7:j=c5.q4()
i=A.HD(j)
if(!(i instanceof A.mO)){h=t.bB.a(i).a
g=h.b
throw A.a("Failed to build visitors: "+g)}$.aU.b=i.a
$.nL.b=A.Fp(j)
g=A.m(c2,c6)
for(c1=t.j,d5=0;d5<5;++d5){f=B.E[d5]
c6=A.v(f)
c7=c5.c
c7===$&&A.u()
d6=c7.h(0,c6)
c6=c1.b(d6)?A.aG(d6,!0,c2):B.o
J.ba(g,f,c6)}e=A.HE(g)
s=8
return A.a6(A.nW(),$async$o6)
case 8:d=f2
$.Au.b=new A.pk(B.fR)
c=$.Au.j().pq(new A.zb(e,d))
d7=$.zV()
b=d7
if(c.a==null){g=d
c2=b
c2=c2==null?null:c2.a
if(c2==null)c2=1+B.bb.aZ(2147483647)
c6=b
c6=c6==null?null:c6.b
if(c6==null)c6=1
c7=b
c7=c7==null?null:B.b.aX(c7.c)
if(c7==null)c7=7
if(c6<1)A.h(A.a7(c6,"startDay","must be at least 1"))
if(c7<0||c7>=24)A.h(A.a7(c7,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.h(A.a7(5760,"daySeconds","must be finite and > 0"))
d8=new A.lq(c6,7,5760)
d8.fE(c7)
d9=A.C_(e)
if(g==null){g=$.p5
e0=A.B7(g==null?$.p5=A.p_(B.f.ai(u.F,null)):g,42)}else e0=A.B7(g,42)
g=A.BO(42,c2,e0,d8,d9,A.BH(6,16,d9,null,6,B.lB,d8),new A.l8(0,0,0,!1),A.te(null,null,null))}else{g=c.a
g.toString
g=A.BP(d,g,e)}$.X.b=g
a=c5.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.Ga(a,g,$.X.j().b)}$.xq=g
$.aU.j().y=$.X.j().z
g=A.ab(A.Jm($.X.j().b),t.fu)
$.xn.b=new A.wb(g)
g=$.zW()
c2=c.a
g.fb(c2==null?null:c2.c.h(0,"inventoryInspections"))
$.fW.j().ci(A.Cp($.X.j().gj1()))
if(c.b!=null){g=c.b
g.toString
A.h_(g)}g=$.aU.j()
c2=A.KW($.X.j().b,A.KX(j.b))
g.sk0(A.hw(c2,A.C(c2).c))
A.f6("house")
$.T.b=$.X.j().c
$.o1.R(0)
c2=c.a
$.o1.L(0,A.K7(c2==null?null:c2.c.h(0,"weatherSurfaces")))
g=d7==null
a0=g?null:d7.e
a1=g?null:d7.f
if(a1!=null)for(g=$.T.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.r)(g),++d5){a2=g[d5]
for(c5=a2.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.r)(c5),++e1){a3=c5[e1]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.aa(a0,"open")||J.aa(a0,"closed")){a5=J.aa(a0,"open")
for(g=$.T.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.r)(g),++d5){a6=g[d5]
for(c5=a6.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.r)(c5),++e1){a7=c5[e1]
a7.sjR(a5)}}}a8=$.Bo()
if(a8!=null&&a8.length!==0)for(g=$.T.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.r)(g),++d5){a9=g[d5]
for(c5=a9.r,c6=c5.length,e1=0;e1<c6;++e1){b0=c5[e1]
if(b0.a===a8)b0.d=$.Bp()}}g=$.ay
if(g!=null)g.mC($.T.j())
$.bA.b=$.X.j().d
g=$.T.j().r
$.ag=g==null?"hall":g
g=$.T.j().fa(1.65)
if(g==null){$.T.j()
g=new A.c(12.9375,1.65,0.825)}$.yH=g
$.cr=$.ag===$.T.j().r?3.141592653589793:0
$.f7=0
g=$.ek()
$.yS=$.yz=g
b1=g.Z(0,new A.c(0,1.3499999999999999,0))
$.f1.b=new A.kS(b1,J.Bs(b1,new A.c(0,1.2000000000000002,0)))
$.i2.b=new A.q0()
g=A.AH(B.o)
c2=A.AH(B.o)
c5=new A.uj(B.L,g,c2)
if(!isFinite(0))A.h(B.hv)
if(!B.a.a5(c2,B.a.gaH(g)))A.h(B.iu)
if(c5.a===B.L&&c5.b!==0&&!c5.e)A.h(B.hE)
$.cq.b=c5
g=c.a
b2=A.GO(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.ou($.T.j())){g=b2.b
$.yS=$.yz=$.yH=g
$.cr=b2.c
$.f7=b2.d
$.ag=b2.a
b3=g.Z(0,new A.c(0,1.3499999999999999,0))
g=$.f1.j()
g.smE(b3)
g.b=J.Bs(b3,new A.c(0,1.2000000000000002,0))
g=$.f1.j()
c2=$.T.j()
c5=b2.e
c6=b2.f
g.j7($.ag,$.ek(),c2,c6,c5)
A.h_("restored position")}b4=$.T.j().fa(1.65)
g=$.o.j()
c2=$.T.j().r
if(c2==null)c2=""
g.setAttribute("data-house-residence-room",c2)
c2=b4==null?"":B.b.F(b4.a,3)+","+B.b.F(b4.b,3)+","+B.b.F(b4.c,3)
g.setAttribute("data-house-residence-spawn",c2)
c2=A.Hi(A.b(e7.document))
c2.soM(new A.zc())
c2.sbm(new A.zd())
c2.sba(new A.zo())
$.i3.b=c2
c2=A.b(e7.document)
g=A.b(c2.createElement("div"))
c5=new A.tw(c2,g)
c5.b0(c2)
g.className=A.v(g.className)+" brush-page-frame"
g.setAttribute("aria-label","Pause menu")
g.setAttribute("data-brush-kind","frame")
g.setAttribute("data-brush-state","normal")
A.b(g.appendChild(A.pn(c2,B.fs,1)))
A.b(g.appendChild(A.H(c2,"p","settings-copy","The house waits. Choose what to do next.")))
e2=A.H(c2,"nav","pause-actions",null)
e2.setAttribute("aria-label","Pause actions")
c5.bC(c2,e2,B.e2,"resume")
c5.bC(c2,e2,B.e3,"settings")
c5.bC(c2,e2,B.e4,"controls")
c5.bC(c2,e2,B.e5,"save now")
c5.bC(c2,e2,B.e6,"help")
c5.bC(c2,e2,B.e7,"credits")
c5.bC(c2,e2,B.e8,"back")
A.b(g.appendChild(e2))
c5.sp8(new A.zy())
c5.sbm(new A.zz())
c5.spa(new A.zA())
c5.soQ(new A.zB())
c5.sp9(new A.zC())
c5.soW(new A.zD())
c5.soR(new A.zE())
c5.sba(new A.ze())
$.cJ.b=c5
c5=$.X.j().e
g=$.bA.j()
$.X.j()
$.nN.b=new A.ri(c5,g,new A.zf())
g=A.b(e7.document)
c5=$.X.j().e
c2=$.bA.j()
c6=$.nN.j()
c7=A.b(g.createElement("div"))
c6=new A.rs(c5,c2,c6,g,c7)
c6.b0(g)
c7.setAttribute("aria-label","The Journal")
A.b(c7.appendChild(A.H(g,"div","journal-title","The Journal")))
e3=A.H(g,"div","journal-pages",null)
c2=A.H(g,"div","page page-left",null)
c6.y!==$&&A.b9()
c6.y=c2
c5=A.H(g,"div","page page-right",null)
c6.z!==$&&A.b9()
c6.z=c5
A.b(e3.appendChild(c2))
A.b(e3.appendChild(c5))
A.b(c7.appendChild(e3))
A.b(c7.appendChild(c6.kE()))
e4=A.H(g,"div","tape-roll",null)
A.b(e4.style).setProperty("width","8rem")
c5=A.H(g,"div","tape-fill",null)
c6.as!==$&&A.b9()
c6.as=c5
A.b(e4.appendChild(c5))
A.b(c7.appendChild(e4))
e5=A.H(g,"div","consult",null)
A.b(e5.appendChild(A.H(g,"div","consult-label","Cite an entry")))
c5=A.H(g,"div","entry-picker",null)
c6.at!==$&&A.b9()
c6.at=c5
c2=A.H(g,"div","consult-result",null)
c6.ax!==$&&A.b9()
c6.ax=c2
A.b(e5.appendChild(c5))
A.b(e5.appendChild(c2))
A.b(c7.appendChild(e5))
e6=A.G(g.documentElement)
if(t.m.b(e6)){A.b(e6.style).setProperty("--shake-max-deg","3deg")
A.b(e6.style).setProperty("--shake-max-px","2px")}$.kf.b=c6
$.kf.j().sba(new A.zg())
g=A.b(e7.document)
c2=A.H(g,"div","prompt",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
A.b(c2.style).setProperty("transition-duration","0.3s")
A.b(A.G(g.body).appendChild(c2))
$.Dl.b=new A.tW(c2)
c2=A.b(e7.document)
g=A.H(c2,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.b(A.G(c2.body).appendChild(g))
$.Dk.b=new A.pj(g)
g=A.b(e7.document)
c2=A.H(g,"div","ambient-notice",null)
c5=A.H(g,"div","caption-cue",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
c5.setAttribute("aria-hidden","true")
c5.setAttribute("data-caption-kind","non-speech")
A.b(A.G(g.body).appendChild(c2))
A.b(A.G(g.body).appendChild(c5))
$.bj.b=new A.oo(c2,c5,B.V)
$.Dn=!0
c5=A.FR(A.b(e7.document))
c5.soP(A.Es())
c5.soO(A.Lb())
$.aC.b=c5
c5=$.cL()
c5.soN(new A.zh())
c5.soS(A.Es())
c5=c.a
b5=A.HB(c5==null?null:c5.c.h(0,"visitors"))
if($.cM().Q&&b5!=null&&$.aU.j().fb(b5))A.K6()
g=$.nL.j()
c2=c.a
g.pN(c2==null?null:c2.c.h(0,"ambient"))
g=c.a
b6=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b6))for(g=J.N(b6);g.m();){b7=g.gp()
if(A.b4(b7))$.yM.l(0,b7)}g=A.Hn(A.b(e7.document))
g.spb(new A.zi())
g.sba(new A.zj())
$.fX.b=g
g=A.Gg(A.b(e7.document))
g.sba(new A.zk())
$.ke.b=g
g=A.FL(A.b(e7.document))
g.sba(new A.zl())
$.nM.b=g
$.kg.b=A.mo(A.b(e7.document),null)
$.kh.b=A.mo(A.b(e7.document),B.aa)
$.fV.b=A.mo(A.b(e7.document),B.S)
A.nS($.kg.j(),!1)
A.nS($.kh.j(),!0)
A.nS($.fV.j(),!0)
A.JN()
A.Jq()
$.f0.b=A.Gf(A.b(e7.document))
A.J2()
A.JR()
$.i1.b=A.mo(A.b(e7.document),B.R)
A.nS($.i1.j(),!0)
A.JO()
$.kd.b=A.mo(A.b(e7.document),B.ab)
A.nS($.kd.j(),!0)
A.JQ()
$.kb.b=A.FJ(A.b(e7.document))
A.J1()
A.JP()
g=A.G0(A.b(e7.document))
g.sba(new A.zm())
g.soT(new A.zn())
$.kc.b=g
g=c.a
b8=A.G2(g==null?null:g.c.h(0,"ending"))
if(b8!=null)A.DX(b8)
A.f6("world")
A.E_()
A.b(e7.window).addEventListener("resize",A.Z(new A.zp()))
A.b(e7.document).addEventListener("visibilitychange",A.Z(new A.zq()))
A.b(e7.window).addEventListener("keydown",A.Z(new A.zr()))
A.b(e7.window).addEventListener("keyup",A.Z(new A.zs()))
A.b(e7.window).addEventListener("keydown",A.Z(new A.zt()))
A.b(e7.window).addEventListener("click",A.Z(new A.zu()))
$.o.j().addEventListener("mousemove",A.Z(new A.zv()))
$.o.j().addEventListener("click",A.Z(new A.zw()))
$.o.j().addEventListener("wheel",A.Z(new A.zx()))
A.i8()
A.f6("raf")
A.j(A.b(e7.window).requestAnimationFrame(A.Z(A.Et())))
p=2
s=6
break
case 4:p=3
e9=o.pop()
b9=A.al(e9)
c0=A.d8(e9)
A.yB(b9,c0)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$o6,r)},
Jp(a){var s,r,q,p=$.f5
if(!$.aC.j().y||p==null)return
s=A.Dx(a)
if(s==null)return
r=$.cL()
q=p.iN(s.a,s.b)
r.r=q==null?null:q.b},
Jo(a){var s,r=$.f5
if(!$.aC.j().y||r==null)return!1
s=A.Dx(a)
if(s==null)return!1
return $.cL().oh(r.iN(s.a,s.b))},
Dx(a){var s=A.b($.o.j().getBoundingClientRect()),r=A.a_(s.width),q=A.a_(s.height)
if(r<=0||q<=0)return null
return new A.a5(A.j(a.clientX)-A.a_(s.left),A.j(a.clientY)-A.a_(s.top))},
Jr(){var s=v.G
A.b(s.window).addEventListener("error",A.Z(new A.yp()))
A.b(s.window).addEventListener("unhandledrejection",A.Z(new A.yq()))},
f6(a){if($.Az===a)return
$.Az=a
$.o.j().setAttribute("data-boot-phase",a)},
kr(){var s,r,q,p,o,n=null,m=$.fW.j().gig(),l=$.o.j(),k=A.e7().gb_().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a0(m.D(),n))
k=$.dB.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.bU().goH().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.ay
if(k==null)k="{}"
else{k=k.e
k===$&&A.u()
k=k.as
if(k==null)k=A.h(A.i("renderer is not initialized"))
s=k.a
s.B()
r=s.b
q=A.J(r,A.w(r).c)
B.a.a4(q)
r=t.N
p=t.K
p=B.f.a0(A.E(["profile",A.E(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(B.mh,n))
l=$.ay
o=l==null?n:l.x
if(o!=null)$.o.j().setAttribute("data-renderer-profile-fallback",o)},
JZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(!$.kw())return
s=$.Bo()
if(s!=null&&s.length!==0){r=$.o.j()
q=$.Bp()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.xn.j().eY($.X.j().gal().a)
r=$.o.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.zV()
o=q==null?a1:q.e
if(o!=null)$.o.j().setAttribute("data-automation-capture-shutters",o)
$.o.j().setAttribute("data-automation-rain-window-visibility",B.b.F(A.AT($.ag),3))
r=$.o.j()
q=$.Az
n=$.ag
m=$.T.j().r
l=$.T.j().x
k=$.ag
j=$.T.j().r
i=$.ek()
h=t.N
i=A.E(["x",i.a,"y",i.b,"z",i.c],h,t.i)
g=$.f1.j().ghY()
f=$.f1.j().d
f=f==null?a1:f.b
e=t.X
r.setAttribute("data-automation-player",B.f.a0(A.E(["schemaVersion",1,"phase",q,"roomId",n,"residenceRoomId",m,"residenceRestAnchor",l,"atResidence",k===j,"eye",i,"activeStairId",g,"activeStairProgress",f,"yaw",$.cr,"pitch",$.f7,"modal",$.bk!=null,"dialogueOverlay",$.aC.j().y,"inputEnabled",$.ao.j().ay,"day",$.X.j().gal().a,"hour",$.X.j().gal().b],h,e),a1))
$.o.j().setAttribute("data-story-journal-entry-count",""+$.X.j().gal().r)
d=A.m(h,e)
for(r=$.T.j().c,q=r.length,n=t.K,c=0;c<r.length;r.length===q||(0,A.r)(r),++c){b=r[c]
m=b.ax
l=b.ay
k=b.z
j=m&&!l&&!k
d.k(0,b.a,A.E(["a",b.b,"b",b.c,"open",m,"locked",l,"sticks",k,"passable",j],h,n))}$.o.j().setAttribute("data-automation-portals",B.f.a0(d,a1))
a=$.nP
r=!1
if(a!=null)if($.T.j().e.h(0,"cellar")!=null){r=$.T.j()
q=$.ag
q=r.e.h(0,q)!=null
r=q}if(r){a0=a.cR("cellar",$.ag)
$.o.j().setAttribute("data-audio-transmission-cellar",B.f.a0(A.E(["sourceRoom","cellar","listenerRoom",$.ag,"portalPath",a0.a,"gainDb",a0.c,"lowPassHz",a0.d,"muffle01",a0.e,"barrierIds",a0.b,"reasonTrace",a0.r,"reachable",a0.f],h,n),a1))}else $.o.j().setAttribute("data-audio-transmission-cellar","unavailable")},
ks(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if($.cq.j().a!==B.L){A.h_("save unavailable during rupture")
return}try{p=$.Au.j()
o=$.X.j()
n=t.N
m=t.z
s=A.m(n,m)
l=$.ag
k=$.ek()
j=$.cr
i=$.f7
h=$.f1.j().ghY()
g=$.f1.j().d
J.ba(s,"player",new A.m4(l,k,j,i,h,g==null?null:g.b).D())
l=$.aU.j()
k=A.fD(l.b,n)
j=A.fD(l.c,t.T)
l=l.r
J.ba(s,"visitors",new A.mP(k,j,l==null?null:new A.kD(l.a,l.b,l.d,l.f,l.e,l.r,l.w)).D())
l=$.nL.j().b
l=A.J(l,A.w(l).c)
B.a.a4(l)
J.ba(s,"ambient",l)
l=$.xq
if(l!=null)J.ba(s,"authoredEvents",A.E(["delivered",l.gnJ()],n,m))
l=A.J($.yM,A.w($.yM).c)
B.a.a4(l)
J.ba(s,"unverifiables",l)
J.ba(s,"inventoryInspections",$.zW().D())
r=A.m(n,t.gG)
for(l=new A.O($.o1,A.w($.o1).i("O<1,2>")).gA(0),k=t.i;l.m();){j=l.d
j.toString
q=j
j=q.a
i=q.b
J.ba(r,j,A.E(["snowDepthM",i.a,"waterFilmDepthM",i.b,"materialDissolution01",i.c],n,k))}J.ba(s,"weatherSurfaces",r)
r=$.AD
if(r!=null)J.ba(s,"ending",A.E(["kind",r.a.b],n,n))
s=t.P.a(s)
r=o.a
l=o.b
k=A.BT(o.c).D()
j=o.d
p.q6(A.Cs(s,A.E(["houseSeed",r,"runSeed",l,"house",k,"time",A.E(["day",j.a,"hour",j.b],n,t.fY),"dayLoop",o.f.D(),"journal",o.e.D(),"difficulty",o.r.D(),"narrative",o.z.D()],n,m),2))
A.h_(a)}catch(f){A.h_("save failed")}},
JU(){var s,r,q=$.T.j().fa(1.65),p=$.T.j().r
if(q==null||p==null||$.T.j().e.h(0,p)==null)return
$.ky().a=new A.c(0,0,0)
$.ag=p
$.yS=$.yz=$.yH=q
s=q.Z(0,new A.c(0,1.3499999999999999,0))
r=$.f1.j()
r.a=s
r.b=s.S(0,new A.c(0,1.2000000000000002,0))
r.j7(p,q,$.T.j(),null,null)},
K7(a){var s,r,q,p
if(a==null)return A.m(t.N,t.xe)
if(!t.f.b(a))throw A.a(B.hM)
s=A.m(t.N,t.xe)
for(r=a.gN(),r=r.gA(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.a(B.j_)
s.k(0,p,A.HL(q.b))}return s},
JX(){var s=A.G(A.b(v.G.document).documentElement),r=s==null?null:A.ac(s.getAttribute("data-gameplay-focus-loss")),q=A.bM(new A.F(B.aT,t.rg.a(new A.yw(r)),t.vK),t.x)
switch((q==null?B.bh:q).a){case 0:$.fZ=!0
s=$.bp
if(s!=null)s.fz(!0)
break
case 1:$.fZ=!0
break
case 2:break}},
h_(a){var s=v.G,r=A.G(A.b(s.document).getElementById("save-status"))
if(r==null)return
s=A.G(A.b(s.document).documentElement)
s=s==null?null:A.ac(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.G9(B.hd,new A.yG(r),t.H)},
yB(a,b){var s,r,q,p
A.f6("error")
s=A.z(a)
r=A.zP(s,"\n"," ")
s=$.AF
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.G(A.b(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.z(a):A.z(a)+"\n"+b.t(0)
$.o.j().setAttribute("data-boot-error",p)
if($.kw()&&!q)$.o.j().setAttribute("data-boot-stack",b.t(0))
A.b(s.console).error(p)},
Ds(){var s,r
if($.Ax)return
$.Ax=!0
s=$.bp
r=s==null
if(!r)s.cQ()
if(!r)s.fH("music")
B.a.l($.dD,"arm")},
i8(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$i8=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a6(A.i7(),$async$i8)
case 2:o=null
q=4
s=7
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/manifest.json")),t.m),$async$i8)
case 7:n=b
i=A
s=8
return A.a6(A.av(A.b(n.json()),t.X),$async$i8)
case 8:o=i.b(b)
q=1
s=6
break
case 4:q=3
j=p.pop()
s=6
break
case 3:s=1
break
case 6:l=o
k=l==null?null:l.credits
if(k!=null&&typeof k==="string"){A.v(k)
l=A.G(A.b(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.nM.j().f
l===$&&A.u()
l.textContent=k}s=9
return A.a6(A.qf(A.d([A.ys(o),A.yl(o),A.ko()],t.iJ),t.H),$async$i8)
case 9:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$i8,r)},
ko(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$ko=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/models/index.json")),t.m),$async$ko)
case 6:o=b
if(!A.U(o.ok)){k=A.i("HTTP "+A.z(A.o4(o,"status",t.S)))
throw A.a(k)}s=7
return A.a6(A.av(A.b(o.text()),t.N),$async$ko)
case 7:n=b
m=A.GQ(n)
$.o.j().setAttribute("data-renderer-model-packages","validated")
$.o.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.ay
k=k==null?null:k.dO(m)
s=8
return A.a6(k instanceof A.as?k:A.I5(k,t.H),$async$ko)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.al(i)
k=$.o.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.o.j().setAttribute("data-renderer-model-package-error",A.z(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$ko,r)},
i7(){var s=0,r=A.aL(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$i7=A.aM(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.dD[g]
q=6
s=9
return A.a6(A.av(A.b(A.b(j.window).fetch(o)),i),$async$i7)
case 9:n=a0
s=10
return A.a6(A.av(A.b(n.text()),h),$async$i7)
case 10:m=a0
l=A.p_(B.f.ai(m,null))
f=$.T.b
if(f===$.T)A.h(A.a9(""))
l.fj(f)
f=$.o.b
if(f===$.o)A.h(A.a9(""))
f.setAttribute("data-house-manifest","validated")
f=$.o.b
if(f===$.o)A.h(A.a9(""))
f.setAttribute("data-house-manifest-source",o)
f=$.o.b
if(f===$.o)A.h(A.a9(""))
f.setAttribute("data-house-role",l.c)
f=$.o.b
if(f===$.o)A.h(A.a9(""))
f.setAttribute("data-house-story-authority",l.d)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.al(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.o.j().setAttribute("data-house-manifest","unavailable")
A.b(j.console).warn("authored house manifest unavailable: "+A.z(d))}s=11
return A.a6(A.nU(),$async$i7)
case 11:s=12
return A.a6(A.nV(),$async$i7)
case 12:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$i7,r)},
nW(){var s=0,r=A.aL(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d
var $async$nW=A.aM(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=v.G,i=t.m,h=t.N,g=0
case 3:if(!(g<2)){s=5
break}n=B.dD[g]
p=7
s=10
return A.a6(A.av(A.b(A.b(j.window).fetch(n)),i),$async$nW)
case 10:m=b
s=11
return A.a6(A.av(A.b(m.text()),h),$async$nW)
case 11:l=b
k=A.p_(B.f.ai(l,null))
k.fk()
f=$.o.b
if(f===$.o)A.h(A.a9(""))
f.setAttribute("data-house-blueprint","validated")
f=$.o.b
if(f===$.o)A.h(A.a9(""))
f.setAttribute("data-house-blueprint-source",n)
f=k
q=f
s=1
break
p=2
s=9
break
case 7:p=6
d=o.pop()
s=9
break
case 6:s=2
break
case 9:case 4:++g
s=3
break
case 5:k=$.p5
if(k==null)k=$.p5=A.p_(B.f.ai(u.F,null))
$.o.j().setAttribute("data-house-blueprint","validated")
$.o.j().setAttribute("data-house-blueprint-source","embedded-canonical")
q=k
s=1
break
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nW,r)},
nU(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$nU=A.aM(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.kW[c]
p=7
s=10
return A.a6(A.av(A.b(A.b(g.window).fetch(n)),f),$async$nU)
case 10:m=b1
s=11
return A.a6(A.av(A.b(m.text()),e),$async$nU)
case 11:l=b1
b=B.f.ai(l,null)
b=h.b(b)?b:A.ef("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.ef("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.b4(a)?a:A.ef("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.ef("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aG(a,!0,d):A.ef("assets is not a list")
a4=A.C(a3)
a5=a4.i("I<1,di>")
a3=A.J(new A.I(a3,a4.i("di(1)").a(A.L6()),a5),a5.i("a1.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aG(a,!0,d):A.ef("placements is not a list")
a5=A.C(a4)
a6=a5.i("I<1,cU>")
a4=A.J(new A.I(a4,a5.i("cU(1)").a(A.L7()),a6),a6.i("a1.E"))
a4.$flags=1
k=new A.qX(a1,a2,a0,a3,a4)
a1=$.T.b
if(a1===$.T)A.h(A.a9(""))
k.fj(a1)
$.i5=k
a1=$.ay
if(a1!=null)a1.fv(k)
a1=$.o.b
if(a1===$.o)A.h(A.a9(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.o.b
if(a1===$.o)A.h(A.a9(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.o.b
if(a1===$.o)A.h(A.a9(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
a1=$.o.b
if(a1===$.o)A.h(A.a9(""))
a1.setAttribute("data-house-inventory-status-counts",B.f.a0(k.gk6(),null))
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.al(a9)
a8=j
s=9
break
case 6:s=2
break
case 9:case 4:++c
s=3
break
case 5:$.o.j().setAttribute("data-house-inventory","unavailable")
$.o.j().setAttribute("data-house-inventory-error",A.z(a8))
A.b(g.console).warn("authored house inventory unavailable: "+A.z(a8))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nU,r)},
nV(){var s=0,r=A.aL(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$nV=A.aM(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.i5
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.lF[a4]
p=7
s=10
return A.a6(A.av(A.b(A.b(a1.window).fetch(m)),a2),$async$nV)
case 10:l=b5
s=11
return A.a6(A.av(A.b(l.text()),e),$async$nV)
case 11:k=b5
a5=B.f.ai(k,null)
a5=a0.b(a5)?a5:A.i4("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aG(a6,!0,a3):A.i4("emitters is not a list")
a8=A.C(a7)
a9=a8.i("I<1,dh>")
a7=A.J(new A.I(a7,a8.i("dh(1)").a(A.Ln()),a9),a9.i("a1.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.b4(a6)?a6:A.i4("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.i4("sourceRef is not a string")
j=new A.r6(a8,a9,a7)
a7=$.T.b
if(a7===$.T)A.h(A.a9(""))
j.q_(a7,b2)
$.DI=j
i=A.m(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gN(),a9=a9.gA(a9);a9.m();){g=a9.gp()
J.ba(i,h.a+":"+g.a,A.d([g.b],c))}}a7=$.T.b
if(a7===$.T)A.h(A.a9(""))
a8=A.Ft(i)
a9=new A.oM(a7,A.aX(B.dV,e,d),a8)
a9.kf(a8,a7,B.dV)
$.nP=a9
a7=$.bp
if(a7!=null){a7.CW=a9
a7.bT()}a7=$.o.b
if(a7===$.o)A.h(A.a9(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.o.b
if(a7===$.o)A.h(A.a9(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.o.b
if(a7===$.o)A.h(A.a9(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.o.b
if(a7===$.o)A.h(A.a9(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.al(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.nP=null
$.o.j().setAttribute("data-audio-planner","unavailable")
$.o.j().setAttribute("data-house-soundscape","unavailable")
$.o.j().setAttribute("data-house-soundscape-error",A.z(n))
A.b(a1.console).warn("authored house soundscape unavailable: "+A.z(n))
case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$nV,r)},
xw(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.N(t.a.b(s)?s:new A.bd(s,A.C(s).i("bd<1,f>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.v(q))}},
yl(a){var s=0,r=A.aL(t.H),q,p,o,n,m,l
var $async$yl=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.m(n,n)
n=a==null
A.xw(A.G(n?null:a.sfx),m,"")
A.xw(A.G(n?null:a.ir),m,"ir-")
q=A.G(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.v(p))
l=$
s=2
return A.a6(A.oT(m,$.T.j()),$async$yl)
case 2:o=l.bp=c
o.CW=$.nP
o.bT()
A.JS()
A.E1(o)
A.Av()
A.E2()
if($.Ax){o.cQ()
o.fH("music")}return A.aJ(null,r)}})
return A.aK($async$yl,r)},
B0(a,b){var s
A.Ed(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
K3(a){var s,r
try{s=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Do(a,b){var s
if(a!=="brightness")return
s=A.G(A.b(v.G.document).documentElement)
if(t.m.b(s))A.b(s.style).setProperty("filter","brightness("+A.z(B.b.n(b,0.6,1.4))+")")},
xo(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.G(A.b(v.G.document).documentElement)
if(r!=null)A.U(A.b(r.classList).toggle(s,b))
A.nO()},
E2(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a_($.dF().a.cS(o)),k=A.U($.dF().a.cS(n)),j=A.U($.dF().a.cS(m))
for(s=[$.kg.j(),$.kh.j(),$.fV.j(),$.i1.j(),$.kd.j()],r=0;r<5;++r)s[r].fw(o,l)
A.Do(o,l)
for(s=[$.kg.j(),$.kh.j(),$.fV.j(),$.i1.j(),$.kd.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.xo(n,k)
A.xo(m,j)},
B_(a,b){var s
A.Ed(a,b)
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
K0(a){var s,r
try{s=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
E1(a){var s,r,q,p,o,n,m,l,k,j=A.m(t.N,t.i)
for(s=0;s<5;++s){r=B.ld[s]
q=$.dF().a.b.h(0,r)
j.k(0,r,A.a_(q==null?A.h(A.i("setting missing from profile: "+r)):q))}p=A.U($.dF().a.cS("muted"))
o=A.U($.dF().a.cS("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bB(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.e0(o)
for(q=[$.kg.j(),$.kh.j(),$.fV.j(),$.i1.j()],n=j.$ti.i("cW<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cW(j,j.r,j.e,n);m.m();){k=m.d
l.fw(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
Dq(){var s=$.bp
if(s!=null)A.E1(s)
A.E2()},
JS(){var s,r,q,p,o,n,m,l,k=null
try{k=A.ac(A.b(A.b(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.ai(k,null)
if(!t.f.b(r)||!J.aa(r.h(0,"version"),1))A.h(B.hT)
q=A.Cu(r.h(0,"requested"))
$.E8=A.Af(A.Cu(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.m(r,p)
for(n=0;n<10;++n){m=B.J[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.K0(l))}}r=A.m(r,p)
for(n=0;n<10;++n){m=B.J[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.K3(p))}}$.E8=A.Hk(o,r)
A.yx()},
yx(){var s
try{A.b(A.b(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a0($.dF().D(),null))}catch(s){}},
Ed(a,b){var s,r,q,p,o,n,m
switch(A.uZ(a).d.a){case 0:r=A.fw(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dF()
q=s
A.uZ(a).cc(q)
p=t.N
o=t.K
n=A.hv(r.a.b,p,o)
n.k(0,a,q)
r.a=A.e2(n,1)
n=s
A.uZ(a).cc(n)
o=A.hv(r.b.b,p,o)
o.k(0,a,n)
r.b=A.e2(o,1)
A.yx()}catch(m){if(!(A.al(m) instanceof A.A))throw m}},
ys(a){var s=0,r=A.aL(t.H),q,p,o
var $async$ys=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.m(p,p)
p=a==null
A.xw(A.G(p?null:a.tex),o,"")
A.xw(A.G(p?null:a.skybox),o,"")
o.k(0,"skybox-main-atmosphere-v1","res/skybox/cannon_8k.jpg")
o.L(0,B.mx)
q=$.ay
p=q==null?null:q.dP(o)
s=2
return A.a6(A.qf(A.d([p==null?A.BN(t.H):p],t.iJ),t.H),$async$ys)
case 2:return A.aJ(null,r)}})
return A.aK($async$ys,r)},
E_(){var s,r,q=v.G,p=A.j(A.b(q.window).innerWidth),o=A.j(A.b(q.window).innerHeight),n=$.o.j(),m=p>0?p:800
n.width=m
m=$.o.j()
n=o>0?o:600
m.height=n
s=A.G(A.b(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.j($.o.j().width)
s.height=A.j($.o.j().height)}q=$.f5
if(q!=null)q.dW(A.j($.o.j().width),A.j($.o.j().height))
q=$.fW.j()
n=A.j($.o.j().width)
m=A.j($.o.j().height)
if(q.d!==B.a0)A.h(A.i("pixeldart backend is not ready"))
if(n<=0||m<=0)A.h(A.p("pixeldart surface size must be positive",null))
q.b.dW(n,m)
q=$.ay
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.o.j().setAttribute("data-renderer-surface",r)},
Jn(){var s,r,q=$.bk
if(q!=null){s=$.ao.j()
if(!s.CW.bu("pause",s.f)){s=$.ao.j()
s=s.CW.bu("secondary",s.f)}else s=!0
if(s){A.J4(q)
return}if($.ao.j().f.a7(0,"GamepadDpadUp")){A.DP(q,-1)
return}if($.ao.j().f.a7(0,"GamepadDpadDown")){A.DP(q,1)
return}s=$.ao.j()
if(s.CW.bu("interact",s.f)){r=A.G(A.b(v.G.document).activeElement)
if(t.m.b(r)&&A.U(q.b.contains(r)))A.rp(r,"click",t.X)}return}s=$.ao.j()
if(s.CW.bu("pause",s.f)){A.ib($.cJ.j())
return}if($.aC.j().y)return
s=$.ao.j()
if(s.CW.bu("journal",s.f))A.kt($.kf.j())
else{s=$.ao.j()
if(s.CW.bu("sleep",s.f))A.kt($.fX.j())}},
J4(a){if(a===$.cJ.j()){a.am()
return}if(a===$.i3.j()||a instanceof A.hL||a instanceof A.iJ||a instanceof A.iy){A.ei(a)
return}a.am()},
DP(a,b){var s,r,q,p,o,n,m=a.b,l=A.b(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.d([],t.e)
for(s=t.m,r=0;r<A.j(l.length);++r){q=A.G(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.G(A.b(v.G.document).activeElement)
o=B.a.bI(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.O(o+b+m,m)}if(!(n>=0&&n<k.length))return A.e(k,n)
k[n].focus()},
K_(g1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9=null,g0="exceeded"
A.a_(g1)
try{s=g1
if(!$.DH){$.AM=s
$.DH=!0}a2=s
a3=$.AM
if(typeof a2!=="number")return a2.Z()
r=(a2-a3)/1000
$.AM=s
a2=r
if(typeof a2!=="number")return a2.cU()
if(a2<0)r=0
a2=r
if(typeof a2!=="number")return a2.js()
if(a2>0.25)r=0.25
A.Kv(r)
$.ao.j().pl()
a2=$.o.j()
a3=$.ao.j().z!=null?"standard":"none"
a2.setAttribute("data-controller",a3)
q=$.ao.j().z
if(q!=null)$.o.j().setAttribute("data-controller-id",q)
else $.o.j().removeAttribute("data-controller-id")
A.Jn()
if(!$.fZ&&$.bk==null){a2=$.f2
a3=r
if(typeof a3!=="number")return A.Bb(a3)
a3=$.f2=a2+a3
p=0
a2=t.aA
for(;;){if(a3>=0.008333333333333333){a4=p
if(typeof a4!=="number")return a4.cU()
a4=a4<10}else a4=!1
if(!a4)break
$.yz=$.ek()
if(!$.Bn()){a3=$.X.b
if(a3===$.X)A.h(A.a9(""))
a3.ms(0.008333333333333333*($.cM().Q?1:20))
a3=$.F2()
a4=$.X.b
if(a4===$.X)A.h(A.a9(""))
a4=a4.gal()
a5=$.X.b
if(a5===$.X)A.h(A.a9(""))
a3=a3.cq(a4.a,a5.gal().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.r)(a3),++a6){o=a3[a6]
B.a.l($.dD,"clock:"+o.a)}a3=$.F3()
a4=$.X.b
if(a4===$.X)A.h(A.a9(""))
a4=a4.gal()
a5=$.X.b
if(a5===$.X)A.h(A.a9(""))
a3=a3.cq(a4.a,a5.gal().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.r)(a3),++a6){n=a3[a6]
B.a.l($.dD,"service:"+n.a+":"+n.b)}}A.Ky()
A.Ku()
a3=$.aU.b
if(a3===$.aU)A.h(A.a9(""))
a4=$.X.b
if(a4===$.X)A.h(A.a9(""))
a3.w=a4.r.c>=0.5
a3=a3.f
a7=A.aG(a3,!1,a2)
a7.$flags=3
a8=a7
B.a.R(a3)
if(a8.length!==0){a3=$.X.b
if(a3===$.X)A.h(A.a9(""))
a3.pr(a8)}A.Kt()
A.Kx()
A.Kw()
A.Ks(0.008333333333333333)
a3=$.i2.b
if(a3===$.i2)A.h(A.a9(""))
if(a3.a!=null)if((a3.b-=0.008333333333333333)<=0)a3.a=null
a3=$.cq.b
if(a3===$.cq)A.h(A.a9(""))
m=a3.a!==B.L
a4=$.T.b
if(a4===$.T)A.h(A.a9(""))
a3.ew(0.008333333333333333,a4)
if(m){a3=$.cq.b
if(a3===$.cq)A.h(A.a9(""))
a3=a3.e}else a3=!1
if(a3)A.E0(!0)
a3=$.f2-0.008333333333333333
$.f2=a3
a4=p
if(typeof a4!=="number")return a4.S()
p=a4+1}l=B.b.n(a3/0.008333333333333333,0,1)
a2=$.yS=A.CJ($.F5(),$.ek(),l)
k=$.bp
if(k!=null){a3=k
a4=Math.sin($.cr)
a5=Math.cos($.cr)
a9=A.b(a3.a.listener)
a9.setPosition(a2.a,a2.b,a2.c)
A.b0(a9,"setOrientation",[a4,0,a5,0,1,0],t.H)
a3.jy($.ag)
for(a2=$.dD.length,a6=0;a6<$.dD.length;$.dD.length===a2||(0,A.r)($.dD),++a6){j=$.dD[a6]
A.J8(k,j)}B.a.R($.dD)
$.o.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.o.j().setAttribute("data-audio-muffle01",B.b.F(k.goG(),3))
a2=$.o.j()
a3=k.cy?"true":"false"
a2.setAttribute("data-audio-music-started",a3)
a3=$.o.j()
a2=k.dy
if(a2==null)a2="ir-fallback"
a3.setAttribute("data-audio-room-ir",a2)
a2=$.o.j()
a2.setAttribute("data-audio-context-suspended",""+(A.v(k.a.state)==="suspended"))
a2.setAttribute("data-audio-muted",""+k.k2)
a2.setAttribute("data-audio-master-mix",B.b.F(k.fx,3))
a2.setAttribute("data-audio-voice-mix",B.b.F(k.fy,3))
a3=$.dC
a2.setAttribute("data-audio-captions",""+(a3.e===!0))
a2.setAttribute("data-audio-paused",""+$.fZ)}}$.d5.j().iS($.o9(),$.cr,$.f7)
a2=$.ay
if(a2!=null){a3=$.d5.j()
a4=a3.a
b0=new A.B(a4.a,a4.b,a4.c)
a4=a3.b
b1=new A.B(a4.a,a4.b,a4.c)
a4=a3.c
b2=a2.b/a2.c
b3=A.C6(b0,b1,new A.B(a4.a,a4.b,a4.c))
a3=a3.f
a4=a3.b
a5=a3.c
b4=A.A9(b2,a5,a3.a,a4)
a2.to=A.BD(b2,b0,a5,b1,a4,b4,b3,b4.a3(0,b3))}a2=$.ay
if(a2!=null)a2.jJ($.T.j(),$.ag)
i=$.xn.j().eY($.X.j().gal().a)
h=B.b.n(1-A.AT($.ag),0,1)
a2=$.ay
if(a2!=null)a2.jx($.T.j(),$.ag,$.o9(),$.bA.j().gfJ(),$.bA.j().gnD(),i,A.Lh($.ag),$.bA.j().b)
a2=$.ay
if(a2!=null){a3=A.KC($.T.j(),$.ag,i.r,$.i5)
a4=t.fu.a(i)
t.A1.a(a3)
a5=A.ax(h)
a2.dr=A.ab(a3,t.qR)
a3=a4.r
b5=A.wa(new A.hT(a4,a3,0.8,a5,1,0,1,1,0))
a2.y2=b5
a2.dq=A.HK(a3,b5.z,$.o9(),a2.cC)}g=A.wa(new A.hT(i,i.r,0.8,0,1,0,1,1,0))
a2=$.F6()
a3=$.F7()
f=null
e=g.a
A:{if(B.az===e||B.ad===e||B.a_===e){f=g.e
break A}if(B.ae===e||B.w===e){f=0
break A}}f=f
d=a2.k7(!$.fZ&&$.bk==null?J.Fg(r,0,0.5):0,f,a3)
f=$.ay
if(f!=null)f.jF(d.a,d.b,d.d,d.e)
f=A.KE($.ag)
a2=r
a3=$.ay
a3=a3==null?f9:a3.cC
if(a3==null)a3=B.dG
A.Kz(i,a2,a3,f)
if(!$.fZ&&$.bk==null){f=r
a2=$.cM().Q?1:20
if(typeof f!=="number")return f.a3()
a2=B.b.n(f*a2,0,0.5)
f=a2}else f=0
c=A.IM(i,f,h)
f=$.ay
if(f!=null)f.jK(c)
if($.DO!==$.cq.j().a){$.DO=$.cq.j().a
$.AV=$.AV+1}f=$.ay
if(f!=null){if($.Bn())a2=0
else{a2=s
if(typeof a2!=="number")return a2.qa()
a2/=1000}a3=$.AV
a4=A.j(Math.max(0,$.X.j().b))
if(!isFinite(a2)||a2<0)A.h(A.a7(a2,"timeSeconds",f9))
if(a4<0)A.h(A.p("frame clock seeds must be non-negative",f9))
f.c0=a2
f.eX=a3
f.c1=a4}f=$.ay
if(f!=null){a2=$.cq.j()
a3=$.AU
a4=A.AT($.ag)
b6=a2.a
b7=a2.gfF()
b8=b7>0?B.b.n(a2.b/b7,0,1):0
a2=b6.a
b9=a2>=3
c0=b6===B.c7
a5=$.bU()
c1=a5.I("post_exposure")
c2=a5.I("post_bloom")
c3=a5.I("post_vignette")
c4=a5.I("post_film_grain")
c5=a5.I("post_dither")
c6=a5.I("post_depth_of_field")
c7=a5.I("post_color_grade")
c8=a5.I("post_affine_warp")
c9=a5.I("post_vertex_snap")
d0=B.b.ap(a5.I("post_quantization_bits"))
d1=a5.I("post_vhs_chroma")
d2=a5.I("post_vhs_noise")
d3=a5.I("shadow_ao_intensity")
d4=b6===B.ag?0.45:c1
a5=a5.bM("shadow_ssdo_enable")?d3:0
d5=f.xr
d5=B.b.n(d5,0,1)
d6=f.cG
d6=B.b.n(d6,0,1)
d7=f.dF
d8=f.dG
if(a2>=1)d9=b6===B.aZ?b8:1
else d9=0
d9=Math.max(c7,d9)
if(a2>=2)a2=b6===B.c6?b8:1
else a2=0
a2=Math.max(c8,a2)
e0=b9?320:0
e0=Math.max(c9,e0)
e1=b9?5:d0
e2=c0?1:0
e2=Math.max(d1,e2)
e3=c0?b8:0
e4=c0?b8:0
e4=Math.max(d2,e4)
e5=c0?b8:0
e6=c0?b8:0
f.x2=new A.m6(d4,c2,a5,c6,c3,c4,d5,d6,d7,d8,a4,c5,d9,a2,e0,e1,e2,e3,e4,e5,e6,c0?b8:0,a3)
f.y1=B.b.n(a4,0,1)
f.lW()}$.fW.j().ci(A.Cp($.X.j().gj1()))
b=$.ay
if(b!=null){f=$.o.j()
a2=b
e7=a2.dH
a3=e7==null
a4=a3?f9:e7.b
if(a4==null)a4=0
a5=a3?f9:e7.c
if(a5==null)a5=0
d4=a3?f9:e7.e
if(d4==null)d4=0
d5=a2.dI
d6=a2.giF()?"ok":g0
d7=t.N
d8=t.K
d6=A.E(["drawCalls",a4,"triangles",a5,"instances",d4,"frameMs",d5,"budget",d6],d7,d8)
a3=a3?f9:e7.r
if(a3==null)a3=0
a4=a2.il
a4===$&&A.u()
a4=A.E(["gpuBytes",a3,"residentTextures",a4.d.a,"textureVramMb",0],d7,t.S)
a3=a2.dz
a5=a2.dw
d4=a2.dA
d5=a2.dB
d9=a2.dC
e0=a2.dD
e1=a2.dE
e2=a2.dv
e3=a2.du.length
e4=a2.eM
e5=a2.eN
e6=a2.eO
e8=a2.c_
e9=a2.cD
f0=a2.cE
f1=a2.cF
f2=a2.gjh()
f3=a2.io
f3=f3==null?f9:f3.c
if(f3==null)f3=0
a2=a2.x1
f4=a2.k4
f5=f4==null
f6=f5?f9:f4.z
if(f6==null)f6=0
f7=f5?f9:f4.Q
if(f7==null)f7=0
f4=f5?f9:f4.db
if(f4==null)f4=0
f.setAttribute("data-renderer-diagnostic-groups",B.f.a0(A.E(["frame",d6,"resources",a4,"atmosphere",A.E(["rainSubmitted",a3,"rainRequested",a5,"rainBudget",d4,"rainFrustumVisible",d5,"rainFrustumCulled",d9,"rainAverageSpeedMps",e0,"rainCapped",e1,"rainFlowParticles",e2,"rainFlowPaths",e3,"rainFlowCapturedMassKg",e4,"rainFlowDrainedMassKg",e5,"rainFlowOverflowMassKg",e6,"rainFlowWetness",e8,"fireFlameParticles",e9,"fireWhiteSmokeParticles",f0,"fireBlackSmokeParticles",f1,"weatherPhase",f2,"volumetricSources",f3,"volumetricSampleCount",a2.as,"volumetricIntensity",a2.Q,"volumetricDustDensity",a2.x,"volumetricAnisotropy",a2.y,"cloudCoverage",f6,"cloudDensity",f7,"cloudSampleCount",f4,"reflectionIntensity",a2.dy,"reflectionConfidence",a2.fr],d7,d8)],d7,t.X),f9))
a=b.god()
if(a!=null){$.o.j().setAttribute("data-renderer-frame-stats",a)
f=$.o.j()
a2=b.giF()?"ok":g0
f.setAttribute("data-renderer-budget",a2)}$.o.j().setAttribute("data-renderer-rain-particles",""+b.dz)
$.o.j().setAttribute("data-renderer-rain-particles-requested",""+b.dw)
$.o.j().setAttribute("data-renderer-rain-particles-budget",""+b.dA)
$.o.j().setAttribute("data-renderer-rain-particles-capped",""+b.dE)
$.o.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+b.dB)
$.o.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+b.dC)
$.o.j().setAttribute("data-renderer-rain-flow-particles",""+b.dv)
$.o.j().setAttribute("data-renderer-rain-flow-paths",""+b.du.length)
$.o.j().setAttribute("data-renderer-rain-flow-captured-mass-kg",B.b.F(b.eM,8))
$.o.j().setAttribute("data-renderer-rain-flow-drained-mass-kg",B.b.F(b.eN,8))
$.o.j().setAttribute("data-renderer-rain-flow-overflow-mass-kg",B.b.F(b.eO,8))
$.o.j().setAttribute("data-renderer-weather-rain-flow-wetness",B.b.F(b.c_,4))
$.o.j().setAttribute("data-renderer-fire-flame-particles",""+b.cD)
$.o.j().setAttribute("data-renderer-fire-white-smoke-particles",""+b.cE)
$.o.j().setAttribute("data-renderer-fire-black-smoke-particles",""+b.cF)
$.o.j().setAttribute("data-renderer-rain-particles-average-speed-mps",B.b.F(b.dD,4))
$.o.j().setAttribute("data-renderer-volumetric-sample-count",""+b.x1.as)
$.o.j().setAttribute("data-renderer-volumetric-intensity",B.b.F(b.x1.Q,4))
$.o.j().setAttribute("data-renderer-volumetric-dust-density",B.b.F(b.x1.x,4))
$.o.j().setAttribute("data-renderer-volumetric-anisotropy",B.b.F(b.x1.y,4))
f=$.o.j()
a2=$.bU()
f.setAttribute("data-renderer-debug-attachments","unavailable")
$.o.j().setAttribute("data-renderer-debug-attachments-reason",a2.r)
$.o.j().setAttribute("data-renderer-weather-phase",b.gjh())
f=$.o.j()
a2=b.y2
a2=a2==null?f9:a2.c
f.setAttribute("data-renderer-weather-wind-mps",B.b.F(a2==null?0:a2,3))
f=$.o.j()
a2=b.y2
a2=a2==null?f9:a2.r
f.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.F(a2==null?0:a2,8))
f=$.o.j()
a2=b.y2
a2=a2==null?f9:a2.w
f.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.F(a2==null?0:a2,6))
f=$.o.j()
a2=b.dq
a2=a2==null?f9:a2.c
f.setAttribute("data-renderer-weather-warm-clearance-m",B.b.F(a2==null?0:a2,4))
$.o.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.F(b.gdX(),3))
$.o.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.F(b.gjg(),4))
$.o.j().setAttribute("data-renderer-weather-impact-count",""+b.eL)
$.o.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.F(b.ds,8))
$.o.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.F(b.dt,8))
$.o.j().setAttribute("data-renderer-weather-obstacle-count",""+b.dr.length)}A.f6("running")
A.JZ()
f=$.ao.j()
f.as=f.Q=0
a2=f.c
a2.a7(0,"WheelUp")
a2.a7(0,"WheelDown")
f.d.R(0)
f.f.R(0)
A.j(A.b(v.G.window).requestAnimationFrame(A.Z(A.Et())))}catch(f8){a0=A.al(f8)
a1=A.d8(f8)
A.yB(a0,a1)}},
J8(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.j_("confirm")
$.bj.j().aN("interface confirmation")
break
case"ambient-winnow":a.dQ("winnow",0.28)
$.bj.j().aN("wind moving through the house")
break
case"ambient-gate":a.dQ("gate",0.22)
$.bj.j().aN("distant gate")
break
case"collapse":a.j_("collapse")
$.bj.j().aN("front door shudders and collapses")
break
case"clock:tick":A.nY(a,p,"tick")
break
case"clock:chime":A.nY(a,p,"chime")
break
case"clock:cuckoo":A.nY(a,p,"cuckoo")
break
case"clock:bell":A.nY(a,p,"bell")
break
default:if(B.c.X(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.nY(a,q,s[2])}}}},
nY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.DI,g=$.i5
if(h==null||g==null)return
s=h.o0(b)
r=b+":"+c
A:{if("hall-clock:tick"===r){q="clock ticking"
break A}if("hall-clock:cuckoo"===r){q="clock cuckoo call"
break A}if("hall-clock:bell"===r){q="clock bell"
break A}if("hall-clock:chime"===r){q="clock chime"
break A}if("front-door-knocker:knock"===r){q="knock at the front door"
break A}if("landing-window:wind"===r){q="wind at the landing window"
break A}if("bedroom-timber:creak"===r){q="timber settling upstairs"
break A}if("kitchen-pipe:tick"===r){q="kitchen pipe ticking"
break A}if("kitchen-range:settle"===r){q="kitchen range settling"
break A}if("cellar-drain:drip"===r){q="water dripping in the cellar"
break A}if("bathroom-cistern:settle"===r){q="bathroom cistern settling"
break A}q=null
break A}if(q!=null)$.bj.j().aN(q)
q=$.T.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.h(A.i("sound room missing: "+o))
m=n.d.S(0,s.d.a3(0,p))
l=$.nP
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.h(A.i("sound emitter "+s.a+" has no cue for "+c))
a.pj(q,m,s.e,o)
return}q=$.Du
$.Du=q+1
o=A.Fu(B.f3,r,r+":"+q,m,A.IO(b,c),q,o)
q=$.ag
q=A.Fn($.o9(),q)
t.gG.a(B.bJ)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.h(A.i("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.h(A.i("audio listener room missing: "+q))
j=l.jd(p,q,B.bJ)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.h(A.i("audio cue family missing: "+q))
k=J.aN(i)
k=k.h(i,B.d.O(A.Kk(q,o.f),k.gu(i)))
o=o.e
A.ab(j.a,t.N)
a.j0(k,new A.c(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
IO(a,b){var s,r,q,p=$.X.j().b
for(s=new A.dJ(a+":"+b),r=t.sU,s=new A.an(s,s.gu(0),r.i("an<a4.E>")),r=r.i("a4.E");s.m();){q=s.d
p=A.Ep(p,q==null?r.a(q):q)}return p},
Kv(a){var s=$.AF
if(s==null)return
s.textContent=""+B.b.ap(a>0?1/a:0)+" fps"},
Ks(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="interact"
if($.E5||$.bk!=null){$.ky().a=new A.c(0,0,0)
return}$.ao.j().e3(b4)
s=$.ao.j()
r=s.d7("moveLeft")?-1:0
if(s.d7("moveRight"))++r
q=s.d7("moveForward")?1:0
if(s.d7("moveBack"))--q
s=s.ay?s.w:new A.c(0,0,0)
p=new A.c(r,0,q).S(0,s)
o=p.gu(0)>1?p.ga2():p
n=$.ao.j().Q
m=$.ao.j().as
s=$.h2()
l=s.d?-1:1
k=s.e?-1:1
j=$.cr
i=$.ao.j()
i=i.ay?i.x:0
h=$.h2()
g=h.d?-1:1
$.cr=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b4)
g=$.f7
h=$.ao.j()
l=h.ay?h.y:0
j=$.h2()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b4)
$.f7=i
$.f7=B.b.n(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.c(i*Math.cos($.cr)+j*Math.sin($.cr),0,-i*Math.sin($.cr)+j*Math.cos($.cr)).ga2().a3(0,2)
j=$.ky()
if(!isFinite(b4)||b4<0)A.h(A.a7(b4,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.h(A.a7(e,"rate","must be finite and positive"))
s=Math.exp(-e*b4)
l=j.a
s=l.S(0,f.Z(0,l).a3(0,1-s))
j.a=s
d=$.f1.j().oI($.T.j(),$.ag,$.ek(),s.a3(0,b4))
$.yH=d.a
if($.cq.j().a!==B.c8&&$.cq.j().a!==B.ag)$.ag=d.b
c=B.b.n(j.a.gu(0)/2,0,1)
s=$.F4()
$.AZ=s.jW($.AZ,$.ek().b,b4)
b=s.mt(b4,c)
s=$.ek()
l=$.AZ
$.d5.j().iS(new A.c(s.a+b.a,l+b.b,s.c+b.c),$.cr,$.f7)
s=$.X.j().z
l=$.xq
l=l==null?b2:l.gii()
a=A.GM(l==null?B.lC:l,s)
s=$.d5.j()
l=$.T.j()
a0=A.Lg(a,s,$.ag,l,$.i5)
l=$.o.j()
s=a0.a
l.setAttribute("data-house-focus-kind",s.b)
k=a0.b
j=k==null?"":k
l.setAttribute("data-house-focus-id",j)
j=a0.c
i=j==null
h=i?"":j
l.setAttribute("data-house-focus-prompt",h)
k=k==="living-sofa"&&$.ag===$.T.j().r?"available":"not-focused"
l.setAttribute("data-house-rest-target",k)
$.Dl.j().jL(j)
a1=A.G(A.b(v.G.document).getElementById("crosshair"))
if(a1!=null){l=!i?"crosshair-active":"crosshair-dot"
a1.className=l}a2=b2
a3=b2
a4=b2
a5=b2
switch(s.a){case 0:a2=A.Bf($.d5.j(),$.T.j(),$.ag)
break
case 1:a3=A.EA($.d5.j(),$.T.j(),$.ag)
break
case 2:a4=A.EB($.d5.j(),$.T.j(),$.ag)
break
case 3:l=$.d5.j()
k=$.T.j()
j=$.i5
a5=A.Ez(l,$.ag,k,j)
break
case 4:case 5:break}$.Dk.j().pW($.h3().fp($.X.j().gal().a,"status"),$.ag==="living-room")
l=$.ao.j()
k=l.CW
if(k.bu(b3,l.d)||k.bu(b3,l.f)){l=$.X.j().gal()
k=a3==null
j=k?b2:a3.a
i=B.a.a5($.aU.j().i0(21),$.aU.j().gow())
if(l.a===21&&j==="front-door"&&i){s=$.cq.j()
$.T.j()
s.k5(B.fQ,A.ab(s.c,t.N))
B.a.l($.dD,"collapse")
A.h_("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bj.j().aN("mantle flame extinguished")}else if($.X.j().jZ(1,1)){a2.d=!0
s=$.i2.j()
s.a=a2
s.b=2
$.bj.j().aN("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bj.j()
s.aN(a3.ax?"door opens":"door closes")
s=$.ay
if(s!=null)s.dT($.T.j(),a3.b)
s=$.ay
if(s!=null)s.f7($.T.j(),a3.a)
s=$.bp
if(s!=null)s.bT()}else if(a4!=null)if(a4.w){s=$.X.j()
if(s.f.e2(1)){a4.w=!1
$.bj.j().aN("shutter closes")}}else{a4.w=!0
$.bj.j().aN("shutter opens")}else if(s===B.cY){a6=a.fo()
s=A.C(a6)
l=t.E4
a7=A.bM(new A.F(a6,s.i("l(1)").a(new A.yO(a0)),s.i("F<1>")),l)
if(a7==null)a7=A.bM(a6,l)
if(a7!=null)$.bj.j().cf("noticed",a7.d)}else if(a5!=null){a8=a5.a
if(a8===$.T.j().x){$.bj.j().aN("the living-room sofa is ready for rest")
A.ib($.fX.j())
return}s=$.zW()
if(!a5.x)A.h(A.i("inventory placement is not pickable: "+a8))
a9=a5.y
if(a9==null)a9=a8
s=s.a
l=s.h(0,a8)
s.k(0,a8,(l==null?0:l)+1)
l=$.o.j()
l.setAttribute("data-inventory-last-focus",a9)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a9)
s=A.aX(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
b0=A.JV(a9)
s=$.bj.j()
s.cf("noticed",b0==null?"you inspect "+a9:b0)}}s=$.i2.j()
if(s.a!=null&&s.b>0){b1=$.i2.j().a
if(b1!=null&&A.Bf($.d5.j(),$.T.j(),$.ag)!==b1){s=$.i2.j()
s.a=null
s.b=0}}A.K5(b4,a0)},
K5(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="rgba(12, 10, 14, 0.92)",c2=$.f5
if(c2==null)return
s=A.b($.Dm.j().getBoundingClientRect())
r=A.a_(s.width)
q=A.a_(s.height)
if(r<=0||q<=0)return
p=$.cL()
p.pV(c3)
o=$.F1()
n=o.c
if(n<1)o.c=Math.min(1,n+c3*6)
n=c4.c
m=n!=null
l=o.jm(n,m,$.aC.j().y)
o=$.bU()
k=o.a
j=o.d
i=c3*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.T.j()
j=$.ag
h=k.e.h(0,j)
g=$.xn.j().eY($.X.j().gal().a)
j=$.ay
f=j==null?null:j.gdX()
e=f!=null&&isFinite(f)?f:g.r
k=!$.aC.j().y&&$.bk==null
j=p.a
i=p.b
d=p.c
c=p.e
b=p.f
a=p.r
p=p.w
a0=$.X.j().gal()
a1=$.bA.j().b
a2=$.cM()
a3=a2.y===B.d9
a4=h==null?null:h.a
if(a4==null)a4=$.ag
a2=a2.z?$.h3().fp($.X.j().gal().a,"status"):null
c2.e=e
a5=c2.a
a5.c+=c3
a6=a5.d
B.a.R(a6)
a7=A.a_(A.b(v.G.window).devicePixelRatio)
a8=B.b.ah(r*a7)
a9=B.b.ah(q*a7)
b0=a5.a
if(A.j(b0.width)!==a8||A.j(b0.height)!==a9){b0.width=a8
b0.height=a9}b0=a5.b
b0===$&&A.u()
b0.save()
b0.scale(a7,a7)
b0.clearRect(0,0,r,q)
if(k){b0.save()
b0.translate(r*0.5,q*0.5)
k=t.H
if(m){m=Math.sin(a5.c*8)
b1=a5.c
b2=22*(1+m*0.08)
b0.strokeStyle="rgba(0, 0, 0, 0.85)"
b0.lineWidth=3.5
b0.save()
b1=b1*1.5+0.7853981633974483
b0.rotate(b1)
m=-b2*0.5
b0.strokeRect(m,m,b2,b2)
b0.restore()
b0.strokeStyle="#c49a45"
b0.lineWidth=2
b0.save()
b0.rotate(b1)
b0.strokeRect(m,m,b2,b2)
b0.restore()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.b0(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}else{b0.fillStyle="rgba(0, 0, 0, 0.85)"
b0.beginPath()
A.b0(b0,"arc",[1,1,3,0,6.283185307179586],k)
b0.fill()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.b0(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}b0.restore()
a5.nU(n,q,r)}a5.nT(q,r,new A.tn(j,i,d,c,b,a,p))
b3=r-80-24
a5.aV("#d32f2f",2,8,c1,44,-0.08,160,b3,42)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='bold 14px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b4=B.d.n(B.b.aX(a1*60),0,1439)
b5=B.d.af(b4,60)
b6=B.d.O(b4,60)
b7=a3?B.d.O(b5+11,12)+1:b5
if(a3)b8=b5<12?" AM":" PM"
else b8=""
b0.fillText("DAY "+a0.a+"  \u2022  "+B.c.bJ(B.d.t(b7),2,"0")+":"+B.c.bJ(B.d.t(b6),2,"0")+b8,b3,42)
b0.restore()
a5.aV("#c49a45",1.8,6,c1,34,0.08,170,109,37)
b0.save()
b0.fillStyle="#c49a45"
b0.font='bold 13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bF(a4.toUpperCase(),142),109,37)
b0.restore()
if(a2!=null&&a2.length!==0){b9=Math.min(r*0.6,420)
c0=r*0.5
a5.aV("#f5f0e6",1.5,6,c1,32,-0.04,b9,c0,68)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bF(a2,b9-28),c0,68)
b0.restore()}a5.nX(q,r,e)
a5.nS(l,q,r)
a5.nV(q,r,o)
b0.restore();++c2.b
p=$.o.j()
p.setAttribute("data-renderer-gui-frame",""+c2.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ab(a6,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-temperature-c",B.b.F(c2.e,2))
p.setAttribute("data-renderer-gui-surface",""+c2.c+"x"+c2.d)},
JV(a){var s,r,q,p,o=$.X.j().z.b,n=A.w(o).i("O<1,2>"),m=A.J(new A.O(o,n),n.i("t.E"))
B.a.Y(m,new A.yt())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.h3().at
n===$&&A.u()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Ky(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cM().Q)return
if($.aC.j().y||$.bk!=null||$.aU.j().r!=null)return
s=$.X.j().gal()
for(r=$.aU.j().i0(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aU.b
if(m===$.aU)A.h(A.a9(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aU.b
if(r===$.aU)A.h(A.a9(""))
l=r.cr(n)
if(!(l instanceof A.mL))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.BX(A.b(v.G.document),"exitPointerLock",j,j,j,j)
$.ky().a=new A.c(0,0,0)
r=$.aC.b
if(r===$.aC)A.h(A.a9(""))
q=n.a
r.fA(q,k)
$.cL().bN(!0,B.bt,q,k)
A.AQ()
A.Eb(n)
return}},
Ku(){var s,r,q,p,o,n,m=$.xq
if(m==null)return
s=$.X.j().gal()
for(r=m.cq(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=$.X.b
if(n===$.X)A.h(A.a9(""))
if(!n.mx(o))continue
n=$.o.b
if(n===$.o)A.h(A.a9(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
K6(){var s,r,q=$.aU.j().r,p=q==null,o=p?null:q.gbv()
if(p||o==null)return
p=$.aC.j()
s=q.a
r=s.a
p.fA(r,o)
$.cL().bN(!0,B.bt,r,o)
A.AQ()
A.Eb(s)
if(q.d!==B.an)A.AR()
A.h_("restored visitor")},
Eb(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.X.j().oe("stranger-17-eileen-case")
r=$.h3().x
r===$&&A.u()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aG(q,!0,t.N):B.o
p=A.bM(r,t.N)
if(s==null||p==null)return
$.bj.j().cf("inside the case",p+" \u201c"+s.d+"\u201d")},
Kt(){var s,r,q,p,o,n
if(!$.cM().Q)return
s=$.X.j().gal()
r=$.nL.j().nY(s.a,s.b)
if(r.length===0)return
q=B.a.ga1(r)
$.nL.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bj.j().cf(o,q.e)
n=A.KF(p)
if(n!=null)B.a.l($.dD,"ambient-"+n)},
Kx(){var s,r,q,p,o=$.X.j().gal()
if(o.b<20)return
s=o.a
if(!$.yM.l(0,s))return
r=$.h3().f
r===$&&A.u()
q=r.h(0,B.d.t(s))
r=t.j.b(q)?A.aG(q,!0,t.N):B.o
p=A.Ld(r,$.X.j().b,s)
if(p!=null)$.bj.j().cf("noticed",p)},
E0(a){var s,r,q,p,o
if($.AD!=null)return
s=$.X.j().gal()
r=$.X.j().r.c
q=$.X.j().e.b
p=A.w(q).i("am<2>")
o=A.G1(new A.pX(s.a,1-r,new A.F(new A.am(q,p),p.i("l(t.E)").a(new A.yD()),p.i("F<t.E>")).gu(0),$.X.j().r.d,a))
if(o==null)return
A.DX(o)
A.ks("ending recorded")},
DX(a){var s,r,q,p
$.AD=a
$.E5=!0
s=$.o.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.Ca($.X.j().z,r).length)
$.ky().a=new A.c(0,0,0)
A.ib($.kc.j())
s=$.h3().w
s===$&&A.u()
p=s.h(0,q)
s=t.j.b(p)?A.aG(p,!0,t.N):B.o
s=A.J(s,t.N)
B.a.L(s,A.Ca($.X.j().z,r))
$.kc.j().jO(a,s)},
IX(a){var s,r,q,p
A:{if("open"===a){s=B.aP
break A}if("chain"===a){s=B.cQ
break A}if("through-door"===a){s=B.cR
break A}if("letterbox"===a){s=B.cS
break A}s=B.ar
break A}r=$.aU.j().mZ(s)
if(s===B.aP){q=$.T.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.ay
if(p!=null)p.dT($.T.j(),q.b)
p=$.ay
if(p!=null)p.f7($.T.j(),q.a)
p=$.bp
if(p!=null)p.bT()}}if(!(r instanceof A.mJ)||s===B.ar){A.xX()
return}if(r.a.gbv()==null){A.AB()
A.xX()
return}A.AR()},
J3(){var s=$.aU.j().mu()
if(!(s instanceof A.jy)||s.b){A.AB()
A.xX()
return}if(s.a.gbv()==null){A.AB()
A.xX()
return}A.AR()},
AR(){var s,r,q,p,o,n,m,l,k,j=$.aU.j().r,i=j==null,h=i?null:j.gbv()
if(i||h==null)return
s=$.aU.j().gcv()
if(s==null){$.aC.j().jN(h)
$.cL().bN(!0,B.o,j.a.a,h)}else{r=j.w
i=r==null
$.aC.j().fB(h,i)
q=A.d([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aC.j()
l=A.d([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a5(k.a,k.b))}m.jP(l,r)
o=$.cL()
m=j.a.a
o.bN(!0,i?q:B.o,m,h)
if(!i){i=A.C(p)
k=A.bM(new A.F(p,i.i("l(1)").a(new A.yy(r)),i.i("F<1>")),t.Y)
if(k!=null){i=$.aC.j()
q=k.c
i.fC(h,q)
o.bN(!0,B.o,m,h+"\n\n"+q)}}}A.Ea()
A.AQ()},
AQ(){var s,r,q=$.aU.j().r,p=q==null,o=p?null:q.gbv(),n=$.bp
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bJ(B.d.t(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.AL===s)return
$.AL=s
r=n.dQ(s,1)
p=$.dC
if(new A.oF(s,o).pz(p.e===!0,r).length!==0)$.bj.j().aN(o)},
IY(a){var s,r,q,p,o,n=$.aU.j().n_(a)
if(!(n instanceof A.mK))return
s=n.c
if(!$.X.j().my(n.b,s))return
r=s.c
s=$.aC.j()
q=n.a
p=q.gbv()
s.fC(p==null?"":p,r)
o=q.gbv()
if(o==null)o=""
$.cL().bN(!0,B.o,q.a.a,o+"\n\n"+r)
A.Ea()
A.ks("saved after visitor answer")},
xX(){$.aC.j().iM()
$.cL().R(0)
$.AL=null
$.ao.j().dV($.o.j())},
Ea(){var s,r,q,p,o=$.aC.j(),n=A.b(v.G.document),m=A.d([],t.wt)
for(s=$.nN.j().fq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.a5(p.a,B.a.gaa(p.c).t(0)))}o.jM(n,m)},
IZ(a){var s,r,q,p=$.aU.j().n0(a,!0,$.nN.j())
if(p==null)return
s=$.nN.j().nB(p,B.km)
r=$.aC.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.u()
r.textContent=B.V.c2("",!0,q)
A.ks("saved after visitor citation")},
AB(){var s,r=$.T.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.ay
if(s!=null)s.dT($.T.j(),r.b)
s=$.ay
if(s!=null)s.f7($.T.j(),r.a)
s=$.bp
if(s!=null)s.bT()}},
Kw(){var s,r,q,p,o,n,m,l,k
for(s=$.T.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cq.b
if(k===$.cq)A.h(A.a9(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Lh(a){var s,r,q,p,o,n,m,l=$.T.j().e.h(0,a)
if(l==null||$.bA.j().gfJ()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.D){n=$.bA.b
if(n===$.bA)A.h(A.a9(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.H){n=$.bA.b
if(n===$.bA)A.h(A.a9(""))
n=n.b>12}else n=!1
if(!n){if(o===B.at){n=$.bA.b
if(n===$.bA)A.h(A.a9(""))
n=n.b<9}else n=!1
if(!n)if(o===B.au){o=$.bA.b
if(o===$.bA)A.h(A.a9(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
AT(a){var s,r=$.T.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dJ
if(q.length===0)return 0.12
s=A.C(q)
return B.b.n(new A.F(q,s.i("l(1)").a(new A.yA()),s.i("F<1>")).gu(0)/q.length,0.12,1)},
KE(a){var s,r=$.T.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dJ
if(q.length===0)return 0
s=A.C(q)
return B.b.n(new A.F(q,s.i("l(1)").a(new A.yT()),s.i("F<1>")).gu(0)/q.length,0,1)},
Kz(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.w&&a1.b)a0=B.az
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.wa(new A.hT(a1,s,B.b.n(q,0.35,0.98),B.b.n(p,0,1),2.5,0,18e3,1,0))
n=$.Br()
m=n.z
l=B.a.b8(a3,0,new A.yN(),t.i)
k=$.Fb()
q=B.b.n(q,0.35,0.98)
j=a0===B.w?0:r
n=n.y
i=B.b.n(l/900,0,1)
h=B.b.n(o.w/1000,0,1)
g=B.b.n(a2,0,0.5)
f=$.Ee
$.Ee=f+1
e=k.cP(new A.w5(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.X.j().b))
d=$.bp
s=d==null
if(!s){r=A.d([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jW([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.mB(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.pk(a.b,a.c,a.d,a.e,a.f)}s=$.o.j()
s.setAttribute("data-audio-weather-transmission",B.b.F(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.F(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.F(a4,3))},
IT(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.fH),f=A.d([],t.vN)
for(s=[-0.42,16.17],r=0,q=0;q<2;++q){p=s[q]
for(o=[0,15.75],n=p<0,m=0;m<2;++m){l=o[m]
k=""+r
j="roof-drain-"+k
i=new A.c(l,12.044999999999998,p)
B.a.l(g,new A.jb(j,i,new A.c(l,0.12,p),0.08))
h=n?0.42:-0.42
B.a.l(f,new A.jc("roof-catchment-"+k,new A.c(7.875,16.32,p+h),i,62.015625,0.96,0.16,j));++r}}return A.H3(g,f)},
IM(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.ay
if(a0!=null){s=$.T.j()
r=$.ag
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.wa(new A.hT(a1,q,B.b.n(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.o1.c6($.ag,A.Lw())
n=isFinite(a0.gdX())?a0.gdX():q
m=B.b.n(a0.gjg(),0,1)
l=B.b.n((n-q)*8,0,400)
s=B.b.n(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.h(A.p("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.ae&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
g=Math.min(Math.max(0,0.5-j),h)
r=o.a=j+Math.max(0,g)
k=Math.max(0,l)
f=n>0.5
e=f?Math.min(r,k*a2/4008e4):0
o.a=r-e
o.b=i+e
d=f?B.b.n((n-0.5)*(1-s)*2e-8,0,0.000002):0
s=o.b
c=Math.min(s,d*a2)
o.b=s-c
s=f?B.b.n((n-0.5)/12,0,1):0
b=Math.max(m*0.8,Math.max(s,B.b.n(l/250,0,1)))
s=Math.exp(-a2/900)
r=o.c
s=r+(b-r)*(1-s)
o.c=s
a=Math.max(0,h-g)
o.hT()
r=o.a
return new A.wd(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
DL(a,b,c){var s=B.er.q(0,b)
if(s)return!0
if(B.c.q(a.toLowerCase(),"stair"))return!1
if(c!=="story"&&c!=="architecture")return!1
return!0},
KC(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.dI
s=a3.ac(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=p+s.a
m=q+s.c
l=o+s.b
k=A.d([new A.eT("floor:"+r,new A.c(p,o,q),new A.c(n,o+0.05,m),a5,0.12),new A.eT("roof-interior:"+r,new A.c(p,l-0.06,q),new A.c(n,l+0.03,m),a5,0.05)],t.uI)
if(a6==null)return k
for(r=a6.c5(r),n=J.N(r.a),r=new A.R(n,r.b,r.$ti.i("R<1>")),m=a6.c;r.m();){l=n.gp()
if(!(l.d==="renderer-reference"&&!l.ay.r)){j=l.b
j=!A.DL(l.c,j,l.r)}else j=!0
if(j)continue
i=a6.bU(l.c)
j=l.f.a
h=l.j9(i,m)
g=l.fe(i,m)
f=g.a
e=g.b
d=p+j.a*m
c=o+(j.b*m+(f+e)*0.5)
j=q+j.c*m
b=h.a
f=Math.max(0.005,(e-f)*0.5)
e=h.c
a=l.Q>0?l.as:a5
a0=l.a
l=l.ay.f
if(!(l>0))l=i.b==="textile"?0.08:0.28
if(isFinite(d)&&isFinite(c)&&isFinite(j))a1=!(isFinite(b)&&isFinite(f)&&isFinite(e))||b<0||f<0||e<0
else a1=!0
if(a1)A.h(A.p("collision box centre/extents must be finite",null))
l=new A.eT("inventory:"+a0,new A.c(d-b,c-f,j-e),new A.c(d+b,c+f,j+e),a,l)
l.B()
B.a.l(k,l)}return A.ab(k,t.qR)},
hW:function hW(a,b){this.a=a
this.b=b},
nn:function nn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$
_.x=null
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=i
_.ay=j
_.ch=k
_.CW=l
_.cx=m
_.cy=null
_.db=n
_.dx=o
_.dy=p
_.fr=q
_.fx=r
_.fy=$
_.go=0
_.id=s
_.k1=a0
_.k2=a1
_.k3=a2
_.k4=a3
_.ok=a4
_.p1=a5
_.p2=a6
_.p3=a7
_.p4=a8
_.RG=_.R8=null
_.rx=a9
_.to=_.ry=null
_.x1=b0
_.x2=b1
_.xr=0
_.y1=1
_.dq=_.y2=null
_.cC=b2
_.eK=b3
_.cF=_.cE=_.cD=0
_.dr=b4
_.dt=_.ds=_.eL=0
_.du=b5
_.c_=_.eO=_.eN=_.eM=_.dv=0
_.io=null
_.ip=2.25
_.dD=_.dC=_.dB=_.dA=_.dz=_.dw=0
_.dE=!1
_.iz=_.iy=_.ix=_.iw=_.iv=_.iu=_.it=_.is=_.ir=_.iq=_.eQ=_.eP=null
_.iA=7
_.dG=_.dF=_.cG=_.iB=_.eR=0
_.dH=null
_.c0=_.dI=0
_.eU=_.eT=_.eS=0.04
_.eV=0.15
_.eW=null
_.ik=_.o7=_.c1=_.eX=0
_.aK=!1
_.dm=null
_.cz=_.cw=0
_.cB=_.cA=null
_.il=_.o8=$
_.dn=null
_.im=0},
x_:function x_(a){this.a=a},
x0:function x0(a){this.a=a},
x3:function x3(a,b,c){this.a=a
this.b=b
this.c=c},
x4:function x4(a){this.a=a},
wT:function wT(){},
x1:function x1(){},
x2:function x2(){},
x7:function x7(a){this.a=a},
x8:function x8(a){this.a=a},
x5:function x5(a,b,c){this.a=a
this.b=b
this.c=c},
wY:function wY(a,b,c){this.a=a
this.b=b
this.c=c},
x6:function x6(){},
wZ:function wZ(a,b,c){this.a=a
this.b=b
this.c=c},
wU:function wU(){},
wV:function wV(){},
wW:function wW(){},
wX:function wX(){},
wR:function wR(){},
wS:function wS(){},
wN:function wN(){},
wO:function wO(){},
wP:function wP(){},
wQ:function wQ(){},
nm:function nm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wr:function wr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
xF:function xF(){},
xG:function xG(){},
xH:function xH(){},
xN:function xN(){},
xO:function xO(){},
xP:function xP(){},
xQ:function xQ(){},
xR:function xR(){},
xS:function xS(a){this.a=a},
xT:function xT(a){this.a=a},
xU:function xU(a){this.a=a},
xI:function xI(a){this.a=a},
xJ:function xJ(){},
xK:function xK(){},
xL:function xL(){},
xM:function xM(){},
xB:function xB(){},
xC:function xC(a){this.a=a},
xD:function xD(){},
xE:function xE(){},
xx:function xx(){},
xy:function xy(){},
xz:function xz(){},
xA:function xA(){},
yo:function yo(a,b){this.a=a
this.b=b},
ym:function ym(a){this.a=a},
yn:function yn(a){this.a=a},
zb:function zb(a,b){this.a=a
this.b=b},
zc:function zc(){},
zd:function zd(){},
zo:function zo(){},
zy:function zy(){},
zz:function zz(){},
zA:function zA(){},
zB:function zB(){},
zC:function zC(){},
zD:function zD(){},
zE:function zE(){},
ze:function ze(){},
zf:function zf(){},
zg:function zg(){},
zh:function zh(){},
zi:function zi(){},
zj:function zj(){},
zk:function zk(){},
zl:function zl(){},
zm:function zm(){},
zn:function zn(){},
zp:function zp(){},
zq:function zq(){},
zr:function zr(){},
zs:function zs(){},
zt:function zt(){},
zu:function zu(){},
zv:function zv(){},
zw:function zw(){},
zx:function zx(){},
yp:function yp(){},
yq:function yq(){},
yw:function yw(a){this.a=a},
yG:function yG(a){this.a=a},
yO:function yO(a){this.a=a},
yt:function yt(){},
yD:function yD(){},
yy:function yy(a){this.a=a},
yA:function yA(){},
yT:function yT(){},
yN:function yN(){},
ED(a){return v.mangledGlobalNames[a]},
BX(a,b,c,d,e,f){var s=a[b]()
return s},
rp(a,b,c){var s=null
return c.a(A.BX(a,b,s,s,s,s))},
C9(a,b){var s,r,q,p=A.J(B.cL.bG(B.f.a0(a.jb(!1),null)),t.S),o=A.w(b).i("af<1>"),n=A.J(new A.af(b,o),o.i("t.E"))
B.a.a4(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.r)(n),++s){r=n[s]
B.a.L(p,B.cL.bG(r))
B.a.l(p,0)
q=b.h(0,r)
q.toString
B.a.L(p,q)}return A.Hl(p)},
KU(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b2.c!=null)return b2
s=b2.a
r=s.b
q=r*4
p=b2.b
o=J.Fe(B.n.gey(p),p.byteOffset,p.byteLength)
n=t.S
m=A.m(n,t.L)
l=t.t
k=A.d([],l)
j=A.d([],t.n)
i=p.length
h=B.d.bd(i,r)
g=A.dj(h,0,!1,n)
for(n=o.length,f=0;f<h;++f){e=f*r
d=f*q
c=A.KB(o,d,q)
b=m.h(0,c)
if(b==null){b=A.d([],l)
m.k(0,c,b)}a0=b.length
a1=k.length
a2=0
for(;;){if(!(a2<a0)){a=-1
break}a3=b[a2]
a4=a3*q
a6=0
for(;;){if(!(a6<q)){a5=!0
break}a7=d+a6
if(!(a7<n))return A.e(o,a7)
a7=o[a7]
a8=a4+a6
if(!(a8>=0&&a8<a1))return A.e(k,a8)
if(a7!==k[a8]){a5=!1
break}++a6}if(a5){a=a3
break}++a2}if(a>=0)B.a.k(g,f,a)
else{a9=B.d.bd(j.length,r)
B.a.l(b,a9)
B.a.k(g,f,a9)
B.a.L(k,new Uint8Array(o.subarray(d,A.nQ(d,d+q,n))))
for(b0=0;b0<r;++b0){a0=e+b0
if(!(a0<i))return A.e(p,a0)
B.a.l(j,p[a0])}}}b1=B.d.bd(j.length,r)>65536?new Uint32Array(A.S(g)):new Uint16Array(A.S(g))
return new A.c0(s,new Float32Array(A.S(j)),b1,b2.d)},
KB(a,b,c){var s,r,q,p
for(s=a.length,r=2166136261,q=0;q<c;++q){p=b+q
if(!(p<s))return A.e(a,p)
r=((r^a[p])>>>0)*16777619>>>0}return r},
Hm(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.n(a*57.29577951308232,90,105)-90)/15*62},
zK(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.a(A.a7(b.gop(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gG().c.ak()
o=q*16
n=o+16
B.n.cX(s,o,n,p.a)
if(l)B.n.cX(r,o,n,p.f3().a)}m=a.a
A.n(m,"uInstanceModels",new A.q(B.eJ,s))
if(l)A.n(m,"uInstanceNormalMatrices",new A.q(B.eJ,r))
A.n(m,"uUseInstances",B.eK)},
FP(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
FO(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
Ep(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
KF(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
Hr(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=4139548
if(a2.d.length===0)return
s=a3.d
r=s.a
q=a4.a
p=r+q*0.55
o=r+q-0.15
n=s.b
s=s.c
q=a4.c
m=s+q*0.35
l=s+q*0.85
k=n+a4.b-0.02
j=Math.max(0.5,k-n-0.9)
i=j/14
h=(l-m)/14
for(g=p+0.08,s=h*0.5,r=g-0.02,q=g+0.02,f=0;f<14;){e=n+f*i;++f
d=l-f*h
c=d+h
b=e+i
a1.v(new A.c(p,e,c-0.02),new A.c(o,b,c),14209734)
a1.v(new A.c(p,b-0.028,d-0.03),new A.c(o,b,c+0.01),6046257)
a=d+s
a1.v(new A.c(r,b,a-0.02),new A.c(q,Math.min(k,b+0.85),a+0.02),14209734)}a1.v(new A.c(p,n,m),new A.c(p+0.05,Math.min(k,n+j+0.15),l),4929320)
for(s=p+0.06,r=k-0.06,q=p+0.1,f=0;f<14;){e=n+f*i+0.85;++f
d=l-f*h
a1.v(new A.c(s,Math.min(r,e),d-0.02),new A.c(q,Math.min(k,e+0.06),d+h+0.02),a0)}s=p+0.03
r=p+0.15
a1.v(new A.c(s,n,l-0.12),new A.c(r,Math.min(k,n+1.15),l),a0)
a1.v(new A.c(s,Math.max(n,k-1.05),m),new A.c(r,k,m+0.12),a0)},
cu(a,b,c){var s=B.b.n(c,0,1),r=a.c,q=a.b,p=a.a
return new A.aT(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
KT(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.a(B.iO)
s=t.N
r=t.z
q=A.b_(l,s,r)
p=A.m(s,t.P)
for(o=0;o<14;++o){n=B.lH[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.m(s,r))
else if(k.b(m))p.k(0,n,A.b_(m,s,r))
else throw A.a(A.M('text.json section "'+n+'" must be an object',null,null))}return p},
Ld(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbn(a)
s=new A.eY()
s.ck((b^274953^c)>>>0)
r=s.aZ(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.A2.prototype={}
J.lB.prototype={
ab(a,b){return a===b},
gV(a){return A.j9(a)},
t(a){return"Instance of '"+A.ma(a)+"'"},
gag(a){return A.dE(A.AI(this))}}
J.lE.prototype={
t(a){return String(a)},
gV(a){return a?519018:218159},
gag(a){return A.dE(t.y)},
$iap:1,
$il:1}
J.iM.prototype={
ab(a,b){return null==b},
t(a){return"null"},
gV(a){return 0},
$iap:1,
$iaz:1}
J.iO.prototype={$iaj:1}
J.eH.prototype={
gV(a){return 0},
gag(a){return B.qF},
t(a){return String(a)}}
J.m3.prototype={}
J.eN.prototype={}
J.dV.prototype={
t(a){var s=a[$.EI()]
if(s==null)s=a[$.zT()]
if(s==null)return this.k9(a)
return"JavaScript function for "+J.cb(s)},
$ifk:1}
J.hs.prototype={
gV(a){return 0},
t(a){return String(a)}}
J.ht.prototype={
gV(a){return 0},
t(a){return String(a)}}
J.x.prototype={
dk(a,b){return new A.bd(a,A.C(a).i("@<1>").T(b).i("bd<1,2>"))},
l(a,b){A.C(a).c.a(b)
a.$flags&1&&A.aW(a,29)
a.push(b)},
pu(a,b){var s
a.$flags&1&&A.aW(a,"removeAt",1)
s=a.length
if(b>=s)throw A.a(A.Cm(b,null))
return a.splice(b,1)[0]},
a7(a,b){var s
a.$flags&1&&A.aW(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aa(a[s],b)){a.splice(s,1)
return!0}return!1},
L(a,b){var s
A.C(a).i("t<1>").a(b)
a.$flags&1&&A.aW(a,"addAll",2)
if(Array.isArray(b)){this.kw(a,b)
return}for(s=J.N(b);s.m();)a.push(s.gp())},
kw(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.a(A.aD(a))
for(r=0;r<s;++r)a.push(b[r])},
R(a){a.$flags&1&&A.aW(a,"clear","clear")
a.length=0},
bz(a,b,c){var s=A.C(a)
return new A.I(a,s.T(c).i("1(2)").a(b),s.i("@<1>").T(c).i("I<1,2>"))},
a_(a,b){var s,r=A.dj(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.z(a[s]))
return r.join(b)},
b8(a,b,c,d){var s,r,q
d.a(b)
A.C(a).T(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.a(A.aD(a))}return r},
b7(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.a(A.aD(a))}if(c!=null)return c.$0()
throw A.a(A.cV())},
au(a,b){return this.b7(a,b,null)},
ad(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
ae(a,b,c){var s=a.length
if(b>s)throw A.a(A.b2(b,0,s,"start",null))
if(c<b||c>s)throw A.a(A.b2(c,b,s,"end",null))
if(b===c)return A.d([],A.C(a))
return A.d(a.slice(b,c),A.C(a))},
ga1(a){if(a.length>0)return a[0]
throw A.a(A.cV())},
gaa(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.cV())},
gbn(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.a(A.cV())
throw A.a(A.BU())},
P(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.a(A.aD(a))}return!1},
a5(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.a(A.aD(a))}return!0},
Y(a,b){var s,r,q,p,o,n=A.C(a)
n.i("k(1,1)?").a(b)
a.$flags&2&&A.aW(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Jw()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.js()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ig(b,2))
if(p>0)this.lU(a,p)},
a4(a){return this.Y(a,null)},
lU(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
e1(a,b){var s,r,q,p
a.$flags&2&&A.aW(a,"shuffle")
s=a.length
while(s>1){r=b.aZ(s);--s
q=a.length
if(!(s<q))return A.e(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.e(a,r)
a[s]=a[r]
a[r]=p}},
bI(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.e(a,s)
if(J.aa(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.aa(a[s],b))return!0
return!1},
gM(a){return a.length===0},
ga9(a){return a.length!==0},
t(a){return A.A0(a,"[","]")},
gA(a){return new J.fb(a,a.length,A.C(a).i("fb<1>"))},
gV(a){return A.j9(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.aW(a,"set length","change the length of")
if(b<0)throw A.a(A.b2(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.a(A.z1(a,b))
return a[b]},
k(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.aW(a)
if(!(b>=0&&b<a.length))throw A.a(A.z1(a,b))
a[b]=c},
fl(a,b){return new A.e9(a,b.i("e9<0>"))},
f_(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gag(a){return A.dE(A.C(a))},
$iW:1,
$it:1,
$iK:1}
J.lD.prototype={
pU(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ma(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.rq.prototype={}
J.fb.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.a(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iai:1}
J.fo.prototype={
H(a,b){var s
A.a_(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc3(b)
if(this.gc3(a)===s)return 0
if(this.gc3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc3(a){return a===0?1/a<0:a<0},
ah(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.a(A.by(""+a+".toInt()"))},
i6(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.by(""+a+".ceil()"))},
aX(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.a(A.by(""+a+".floor()"))},
ap(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.a(A.by(""+a+".round()"))},
n(a,b,c){if(this.H(b,c)>0)throw A.a(A.yV(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.a(A.b2(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc3(a))return"-"+s
return s},
pS(a,b){var s
if(b>20)throw A.a(A.b2(b,0,20,"fractionDigits",null))
s=a.toExponential(b)
if(a===0&&this.gc3(a))return"-"+s
return s},
fh(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.a(A.b2(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.h(A.by("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.e(p,1)
s=p[1]
if(3>=r)return A.e(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.a3("0",o)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
O(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bd(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hK(a,b)},
af(a,b){return(a|0)===a?a/b|0:this.hK(a,b)},
hK(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.by("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
eq(a,b){var s
if(a>0)s=this.hJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m5(a,b){if(0>b)throw A.a(A.yV(b))
return this.hJ(a,b)},
hJ(a,b){return b>31?0:a>>>b},
jQ(a,b){if(b<0)throw A.a(A.yV(b))
return this.m6(a,b)},
m6(a,b){if(b>31)return 0
return a>>>b},
gag(a){return A.dE(t.fY)},
$ibs:1,
$iy:1,
$ibC:1}
J.iL.prototype={
gag(a){return A.dE(t.S)},
$iap:1,
$ik:1}
J.lF.prototype={
gag(a){return A.dE(t.i)},
$iap:1}
J.eG.prototype={
i_(a,b){return new A.nz(b,a,0)},
bi(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aR(a,r-s)},
k_(a,b){var s
if(typeof b=="string")return A.d(a.split(b),t.s)
else{if(b instanceof A.iN){s=b.e
s=!(s==null?b.e=b.kS():s)}else s=!1
if(s)return A.d(a.split(b.b),t.s)
else return this.l0(a,b)}},
ca(a,b,c,d){var s=A.fy(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
l0(a,b){var s,r,q,p,o,n,m=A.d([],t.s)
for(s=J.Fd(b,a),s=s.gA(s),r=0,q=1;s.m();){p=s.gp()
o=p.gfG()
n=p.geJ()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.K(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aR(a,r))
return m},
aw(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b2(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
X(a,b){return this.aw(a,b,0)},
K(a,b,c){return a.substring(b,A.fy(b,c,a.length))},
aR(a,b){return this.K(a,b,null)},
aQ(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.Gu(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.Gv(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a3(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.fJ)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bJ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a3(c,s)+a},
dJ(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.b2(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bI(a,b){return this.dJ(a,b,0)},
q(a,b){return A.Lo(a,b,0)},
H(a,b){var s
A.v(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
gV(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gag(a){return A.dE(t.N)},
gu(a){return a.length},
$iap:1,
$ibs:1,
$itr:1,
$if:1}
A.eV.prototype={
gA(a){return new A.iu(J.N(this.gbf()),A.w(this).i("iu<1,2>"))},
gu(a){return J.cN(this.gbf())},
gM(a){return J.kA(this.gbf())},
ga9(a){return J.Fj(this.gbf())},
ad(a,b){return A.w(this).y[1].a(J.oa(this.gbf(),b))},
ga1(a){return A.w(this).y[1].a(J.Bv(this.gbf()))},
q(a,b){return J.Bu(this.gbf(),b)},
t(a){return J.cb(this.gbf())}}
A.iu.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iai:1}
A.ff.prototype={
gbf(){return this.a}}
A.jG.prototype={$iW:1}
A.jE.prototype={
h(a,b){return this.$ti.y[1].a(J.b5(this.a,b))},
k(a,b,c){var s=this.$ti
J.ba(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.Fk(this.a,b)},
l(a,b){var s=this.$ti
J.el(this.a,s.c.a(s.y[1].a(b)))},
$iW:1,
$iK:1}
A.bd.prototype={
dk(a,b){return new A.bd(this.a,this.$ti.i("@<1>").T(b).i("bd<1,2>"))},
gbf(){return this.a}}
A.hu.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dJ.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.ur.prototype={}
A.W.prototype={}
A.a1.prototype={
gA(a){var s=this
return new A.an(s,s.gu(s),A.w(s).i("an<a1.E>"))},
gM(a){return this.gu(this)===0},
ga1(a){if(this.gu(this)===0)throw A.a(A.cV())
return this.ad(0,0)},
q(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.aa(r.ad(0,s),b))return!0
if(q!==r.gu(r))throw A.a(A.aD(r))}return!1},
a5(a,b){var s,r,q=this
A.w(q).i("l(a1.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.ad(0,r)))return!1
if(s!==q.gu(q))throw A.a(A.aD(q))}return!0},
P(a,b){var s,r,q=this
A.w(q).i("l(a1.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.ad(0,r)))return!0
if(s!==q.gu(q))throw A.a(A.aD(q))}return!1},
a_(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.z(p.ad(0,0))
if(o!==p.gu(p))throw A.a(A.aD(p))
for(r=s,q=1;q<o;++q){r=r+b+A.z(p.ad(0,q))
if(o!==p.gu(p))throw A.a(A.aD(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.z(p.ad(0,q))
if(o!==p.gu(p))throw A.a(A.aD(p))}return r.charCodeAt(0)==0?r:r}},
oA(a){return this.a_(0,"")},
dY(a,b){return this.k8(0,A.w(this).i("l(a1.E)").a(b))},
bz(a,b,c){var s=A.w(this)
return new A.I(this,s.T(c).i("1(a1.E)").a(b),s.i("@<a1.E>").T(c).i("I<1,2>"))},
cb(a,b){var s=A.w(this).i("a1.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bL(a){return this.cb(0,!0)},
bc(a){var s,r=this,q=A.A5(A.w(r).i("a1.E"))
for(s=0;s<r.gu(r);++s)q.l(0,r.ad(0,s))
return q}}
A.jt.prototype={
gl5(){var s=J.cN(this.a),r=this.c
if(r==null||r>s)return s
return r},
gm7(){var s=J.cN(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cN(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ad(a,b){var s=this,r=s.gm7()+b
if(b<0||r>=s.gl5())throw A.a(A.rf(b,s.gu(0),s,"index"))
return J.oa(s.a,r)},
cb(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aN(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.BW(0,n):J.BV(0,n)}r=A.dj(s,m.ad(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.ad(n,o+q))
if(m.gu(n)<l)throw A.a(A.aD(p))}return r},
bL(a){return this.cb(0,!0)}}
A.an.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aN(q),o=p.gu(q)
if(r.b!==o)throw A.a(A.aD(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ad(q,s);++r.c
return!0},
$iai:1}
A.cX.prototype={
gA(a){return new A.iS(J.N(this.a),this.b,A.w(this).i("iS<1,2>"))},
gu(a){return J.cN(this.a)},
gM(a){return J.kA(this.a)},
ga1(a){return this.b.$1(J.Bv(this.a))},
ad(a,b){return this.b.$1(J.oa(this.a,b))}}
A.dL.prototype={$iW:1}
A.iS.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.I.prototype={
gu(a){return J.cN(this.a)},
ad(a,b){return this.b.$1(J.oa(this.a,b))}}
A.F.prototype={
gA(a){return new A.R(J.N(this.a),this.b,this.$ti.i("R<1>"))}}
A.R.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iai:1}
A.fh.prototype={
gA(a){return new A.iD(J.N(this.a),this.b,B.fB,this.$ti.i("iD<1,2>"))}}
A.iD.prototype={
gp(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.N(r.$1(s.gp()))
q.c=p}else return!1}q.d=q.c.gp()
return!0},
$iai:1}
A.iB.prototype={
m(){return!1},
gp(){throw A.a(A.cV())},
$iai:1}
A.e9.prototype={
gA(a){return new A.jA(J.N(this.a),this.$ti.i("jA<1>"))}}
A.jA.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iai:1}
A.aE.prototype={
su(a,b){throw A.a(A.by("Cannot change the length of a fixed-length list"))},
l(a,b){A.ct(a).i("aE.E").a(b)
throw A.a(A.by("Cannot add to a fixed-length list"))}}
A.eO.prototype={
k(a,b,c){A.w(this).i("eO.E").a(c)
throw A.a(A.by("Cannot modify an unmodifiable list"))},
su(a,b){throw A.a(A.by("Cannot change the length of an unmodifiable list"))},
l(a,b){A.w(this).i("eO.E").a(b)
throw A.a(A.by("Cannot add to an unmodifiable list"))}}
A.hR.prototype={}
A.bO.prototype={
gu(a){return J.cN(this.a)},
ad(a,b){var s=this.a,r=J.aN(s)
return r.ad(s,r.gu(s)-1-b)}}
A.ka.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.fU.prototype={$r:"+height,width(1,2)",$s:2}
A.jS.prototype={$r:"+influence,light(1,2)",$s:3}
A.jT.prototype={$r:"+influence,source(1,2)",$s:4}
A.aH.prototype={$r:"+(1,2,3)",$s:5}
A.aT.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.jU.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.jV.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.cH.prototype={$r:"+(1,2,3,4)",$s:10}
A.jW.prototype={$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",$s:11}
A.ix.prototype={}
A.he.prototype={
gM(a){return this.gu(this)===0},
ga9(a){return this.gu(this)!==0},
t(a){return A.A7(this)},
k(a,b,c){var s=A.w(this)
s.c.a(b)
s.y[1].a(c)
A.FH()},
gN(){return new A.ca(this.o5(),A.w(this).i("ca<P<1,2>>"))},
o5(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga6(),o=o.gA(o),n=A.w(s),m=n.y[1],n=n.i("P<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.P(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bl(a,b,c,d){var s=A.m(c,d)
this.aL(0,new A.py(this,A.w(this).T(c).T(d).i("P<1,2>(3,4)").a(b),s))
return s},
$iV:1}
A.py.prototype={
$2(a,b){var s=A.w(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.w(this.a).i("~(1,2)")}}
A.a3.prototype={
gu(a){return this.b.length},
ghk(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
J(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.J(b))return null
return this.b[this.a[b]]},
aL(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.ghk()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga6(){return new A.fQ(this.ghk(),this.$ti.i("fQ<1>"))},
gan(){return new A.fQ(this.b,this.$ti.i("fQ<2>"))}}
A.fQ.prototype={
gu(a){return this.a.length},
gM(a){return 0===this.a.length},
ga9(a){return 0!==this.a.length},
gA(a){var s=this.a
return new A.eb(s,s.length,this.$ti.i("eb<1>"))}}
A.eb.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iai:1}
A.de.prototype={
bq(){var s=this,r=s.$map
if(r==null){r=new A.fp(s.$ti.i("fp<1,2>"))
A.Ej(s.a,r)
s.$map=r}return r},
J(a){return this.bq().J(a)},
h(a,b){return this.bq().h(0,b)},
aL(a,b){this.$ti.i("~(1,2)").a(b)
this.bq().aL(0,b)},
ga6(){var s=this.bq()
return new A.af(s,A.w(s).i("af<1>"))},
gan(){var s=this.bq()
return new A.am(s,A.w(s).i("am<2>"))},
gu(a){return this.bq().a}}
A.hf.prototype={
l(a,b){A.w(this).c.a(b)
A.FI()}}
A.aP.prototype={
gu(a){return this.b},
gM(a){return this.b===0},
ga9(a){return this.b!==0},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.eb(s,s.length,r.$ti.i("eb<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
bc(a){return A.fq(this,this.$ti.c)}}
A.hp.prototype={
gu(a){return this.a.length},
gM(a){return this.a.length===0},
ga9(a){return this.a.length!==0},
gA(a){var s=this.a
return new A.eb(s,s.length,this.$ti.i("eb<1>"))},
bq(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.fp(o.$ti.i("fp<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
n.k(0,p,p)}o.$map=n}return n},
q(a,b){return this.bq().J(b)},
bc(a){return A.fq(this,this.$ti.c)}}
A.tP.prototype={
$0(){return B.b.aX(1000*this.a.now())},
$S:40}
A.jl.prototype={}
A.vD.prototype={
b9(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.j2.prototype={
t(a){return"Null check operator used on a null value"}}
A.lG.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.mC.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.tk.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.iC.prototype={}
A.jY.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idv:1}
A.ez.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.EE(r==null?"unknown":r)+"'"},
gag(a){var s=A.B9(this)
return A.dE(s==null?A.ct(this):s)},
$ifk:1,
gq9(){return this},
$C:"$1",
$R:1,
$D:null}
A.kU.prototype={$C:"$0",$R:0}
A.kV.prototype={$C:"$2",$R:2}
A.my.prototype={}
A.mw.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.EE(s)+"'"}}
A.h8.prototype={
ab(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.h8))return!1
return this.$_target===b.$_target&&this.a===b.a},
gV(a){return(A.o7(this.a)^A.j9(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ma(this.a)+"'")}}
A.mj.prototype={
t(a){return"RuntimeError: "+this.a}}
A.cy.prototype={
gu(a){return this.a},
gM(a){return this.a===0},
ga9(a){return this.a!==0},
ga6(){return new A.af(this,A.w(this).i("af<1>"))},
gan(){return new A.am(this,A.w(this).i("am<2>"))},
gN(){return new A.O(this,A.w(this).i("O<1,2>"))},
J(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.oq(a)},
oq(a){var s=this.d
if(s==null)return!1
return this.cH(this.hh(s,a),a)>=0},
L(a,b){A.w(this).i("V<1,2>").a(b).aL(0,new A.rz(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.or(b)},
or(a){var s,r,q=this.d
if(q==null)return null
s=this.hh(q,a)
r=this.cH(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.w(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fO(s==null?q.b=q.em():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fO(r==null?q.c=q.em():r,b,c)}else q.ot(b,c)},
ot(a,b){var s,r,q,p,o=this,n=A.w(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.em()
r=o.dK(a)
q=s[r]
if(q==null)s[r]=[o.en(a,b)]
else{p=o.cH(q,a)
if(p>=0)q[p].b=b
else q.push(o.en(a,b))}},
c6(a,b){var s,r,q=this,p=A.w(q)
p.c.a(a)
p.i("2()").a(b)
if(q.J(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
a7(a,b){var s=this
if(typeof b=="string")return s.fK(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fK(s.c,b)
else return s.os(b)},
os(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dK(a)
r=n[s]
q=o.cH(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fL(p)
if(r.length===0)delete n[s]
return p.b},
R(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.e4()}},
aL(a,b){var s,r,q=this
A.w(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.a(A.aD(q))
s=s.c}},
fO(a,b,c){var s,r=A.w(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.en(b,c)
else s.b=c},
fK(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fL(s)
delete a[b]
return s.b},
e4(){this.r=this.r+1&1073741823},
en(a,b){var s=this,r=A.w(s),q=new A.rJ(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.e4()
return q},
fL(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.e4()},
dK(a){return J.aO(a)&1073741823},
hh(a,b){return a[this.dK(b)]},
cH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
t(a){return A.A7(this)},
em(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iA4:1}
A.rz.prototype={
$2(a,b){var s=this.a,r=A.w(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.w(this.a).i("~(1,2)")}}
A.rJ.prototype={}
A.af.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gA(a){var s=this.a
return new A.bZ(s,s.r,s.e,this.$ti.i("bZ<1>"))},
q(a,b){return this.a.J(b)}}
A.bZ.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iai:1}
A.am.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gA(a){var s=this.a
return new A.ad(s,s.r,s.e,this.$ti.i("ad<1>"))}}
A.ad.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iai:1}
A.O.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
gA(a){var s=this.a
return new A.cW(s,s.r,s.e,this.$ti.i("cW<1,2>"))}}
A.cW.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.P(s.a,s.b,r.$ti.i("P<1,2>"))
r.c=s.c
return!0}},
$iai:1}
A.fp.prototype={
dK(a){return A.KN(a)&1073741823},
cH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1}}
A.z7.prototype={
$1(a){return this.a(a)},
$S:16}
A.z8.prototype={
$2(a,b){return this.a(a,b)},
$S:83}
A.z9.prototype={
$1(a){return this.a(A.v(a))},
$S:39}
A.bi.prototype={
gag(a){return A.dE(this.hi())},
hi(){return A.KZ(this.$r,this.d6())},
t(a){return this.hP(!1)},
hP(a){var s,r,q,p,o,n=this.l9(),m=this.d6(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.Cg(o):l+A.z(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
l9(){var s,r=this.$s
while($.x9.length<=r)B.a.l($.x9,null)
s=$.x9[r]
if(s==null){s=this.kR()
B.a.k($.x9,r,s)}return s},
kR(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.ro(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ab(j,k)}}
A.ec.prototype={
d6(){return[this.a,this.b]},
ab(a,b){if(b==null)return!1
return b instanceof A.ec&&this.$s===b.$s&&J.aa(this.a,b.a)&&J.aa(this.b,b.b)},
gV(a){return A.cY(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.ed.prototype={
d6(){return[this.a,this.b,this.c]},
ab(a,b){var s=this
if(b==null)return!1
return b instanceof A.ed&&s.$s===b.$s&&J.aa(s.a,b.a)&&J.aa(s.b,b.b)&&J.aa(s.c,b.c)},
gV(a){var s=this
return A.cY(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.fT.prototype={
d6(){return this.a},
ab(a,b){if(b==null)return!1
return b instanceof A.fT&&this.$s===b.$s&&A.Ih(this.a,b.a)},
gV(a){return A.cY(this.$s,A.GJ(this.a),B.h,B.h,B.h,B.h)}}
A.iN.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
glr(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.BZ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kS(){var s,r=this.a
if(!B.c.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
i_(a,b){return new A.mY(this,b,0)},
l8(a,b){var s,r=this.glr()
if(r==null)r=A.fY(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.ni(s)},
$itr:1,
$iH5:1}
A.ni.prototype={
gfG(){return this.b.index},
geJ(){var s=this.b
return s.index+s[0].length},
$ihy:1,
$ijd:1}
A.mY.prototype={
gA(a){return new A.mZ(this.a,this.b,this.c)}}
A.mZ.prototype={
gp(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.l8(l,s)
if(p!=null){m.d=p
o=p.geJ()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.e(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.e(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iai:1}
A.js.prototype={
geJ(){return this.a+this.c.length},
$ihy:1,
gfG(){return this.a}}
A.nz.prototype={
gA(a){return new A.nA(this.a,this.b,this.c)},
ga1(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.js(r,s)
throw A.a(A.cV())}}
A.nA.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.js(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iai:1}
A.ws.prototype={
j(){var s=this.b
if(s===this)throw A.a(A.a9(""))
return s}}
A.eI.prototype={
gag(a){return B.qy},
i2(a,b,c){A.xu(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
i1(a,b,c){A.xu(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iap:1,
$ieI:1}
A.hB.prototype={$ihB:1}
A.j0.prototype={
gey(a){if(((a.$flags|0)&2)!==0)return new A.xg(a.buffer)
else return a.buffer},
ll(a,b,c,d){var s=A.b2(b,0,c,d,null)
throw A.a(s)},
fX(a,b,c,d){if(b>>>0!==b||b>c)this.ll(a,b,c,d)}}
A.xg.prototype={
i2(a,b,c){var s=A.Cc(this.a,b,c)
s.$flags=3
return s},
i1(a,b,c){var s=A.GG(this.a,b,c)
s.$flags=3
return s}}
A.lT.prototype={
gag(a){return B.qz},
$iap:1}
A.bu.prototype={
gu(a){return a.length},
hG(a,b,c,d,e){var s,r,q=a.length
this.fX(a,b,q,"start")
this.fX(a,c,q,"end")
if(b>c)throw A.a(A.b2(b,0,c,null,null))
s=c-b
if(e<0)throw A.a(A.p(e,null))
r=d.length
if(r-e<s)throw A.a(A.i("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$icf:1}
A.iZ.prototype={
h(a,b){A.eh(b,a,a.length)
return a[b]},
k(a,b,c){A.ax(c)
a.$flags&2&&A.aW(a)
A.eh(b,a,a.length)
a[b]=c},
cX(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.aW(a,5)
this.hG(a,b,c,d,0)
return},
$iW:1,
$it:1,
$iK:1}
A.j_.prototype={
k(a,b,c){A.j(c)
a.$flags&2&&A.aW(a)
A.eh(b,a,a.length)
a[b]=c},
jG(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.aW(a,5)
this.hG(a,b,c,d,e)
return},
$iW:1,
$it:1,
$iK:1}
A.iY.prototype={
gag(a){return B.qA},
ae(a,b,c){return new Float32Array(a.subarray(b,A.nQ(b,c,a.length)))},
$iap:1,
$iq6:1}
A.lU.prototype={
gag(a){return B.qB},
$iap:1,
$iq7:1}
A.lV.prototype={
gag(a){return B.qC},
h(a,b){A.eh(b,a,a.length)
return a[b]},
$iap:1}
A.lW.prototype={
gag(a){return B.qD},
h(a,b){A.eh(b,a,a.length)
return a[b]},
$iap:1}
A.lX.prototype={
gag(a){return B.qE},
h(a,b){A.eh(b,a,a.length)
return a[b]},
$iap:1}
A.lY.prototype={
gag(a){return B.qH},
h(a,b){A.eh(b,a,a.length)
return a[b]},
$iap:1,
$ivF:1}
A.lZ.prototype={
gag(a){return B.qI},
h(a,b){A.eh(b,a,a.length)
return a[b]},
$iap:1,
$ivG:1}
A.ft.prototype={
gag(a){return B.qJ},
gu(a){return a.length},
h(a,b){A.eh(b,a,a.length)
return a[b]},
$iap:1,
$ift:1}
A.j1.prototype={
gag(a){return B.qK},
gu(a){return a.length},
h(a,b){A.eh(b,a,a.length)
return a[b]},
ae(a,b,c){return new Uint8Array(a.subarray(b,A.nQ(b,c,a.length)))},
$iap:1,
$ic8:1}
A.jN.prototype={}
A.jO.prototype={}
A.jP.prototype={}
A.jQ.prototype={}
A.d0.prototype={
i(a){return A.k1(v.typeUniverse,this,a)},
T(a){return A.Db(v.typeUniverse,this,a)}}
A.nc.prototype={}
A.nD.prototype={
t(a){return A.bT(this.a,null)}}
A.na.prototype={
t(a){return this.a}}
A.hZ.prototype={$ie5:1}
A.wo.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:30}
A.wn.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:82}
A.wp.prototype={
$0(){this.a.$0()},
$S:17}
A.wq.prototype={
$0(){this.a.$0()},
$S:17}
A.xc.prototype={
ku(a,b){if(self.setTimeout!=null)self.setTimeout(A.ig(new A.xd(this,b),0),a)
else throw A.a(A.by("`setTimeout()` not found."))}}
A.xd.prototype={
$0(){this.b.$0()},
$S:0}
A.n_.prototype={
ez(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.e7(a)
else{s=r.a
if(q.i("aY<1>").b(a))s.fV(a)
else s.d4(a)}},
eA(a,b){var s=this.a
if(this.b)s.bD(new A.bq(a,b))
else s.d1(new A.bq(a,b))}}
A.xr.prototype={
$1(a){return this.a.$2(0,a)},
$S:20}
A.xs.prototype={
$2(a,b){this.a.$2(1,new A.iC(a,t.l.a(b)))},
$S:147}
A.yU.prototype={
$2(a,b){this.a(A.j(a),b)},
$S:68}
A.d4.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lY(a,b){var s,r,q
a=A.j(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.lY(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.D5
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.D5
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.a(A.i("sync*"))}return!1},
mo(a){var s,r,q=this
if(a instanceof A.ca){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.N(a)
return 2}},
$iai:1}
A.ca.prototype={
gA(a){return new A.d4(this.a(),this.$ti.i("d4<1>"))}}
A.bq.prototype={
t(a){return A.z(this.a)},
$iat:1,
gcg(){return this.b}}
A.qe.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.h1(null)}else{s=null
try{s=l.$0()}catch(p){r=A.al(p)
q=A.d8(p)
l=r
o=q
n=A.AJ(l,o)
l=new A.bq(l,o)
m.b.bD(l)
return}m.b.h1(s)}},
$S:0}
A.qh.prototype={
$2(a,b){var s,r,q=this
A.fY(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bD(new A.bq(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bD(new A.bq(r,s))}},
$S:71}
A.qg.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.ba(r,k.b,a)
if(J.aa(s,0)){q=A.d([],j.i("x<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.el(q,l)}k.c.d4(q)}}else if(J.aa(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bD(new A.bq(q,o))}},
$S(){return this.d.i("az(0)")}}
A.n3.prototype={
eA(a,b){var s=this.a
if((s.a&30)!==0)throw A.a(A.i("Future already completed"))
s.d1(A.Jv(a,b))},
i7(a){return this.eA(a,null)}}
A.jC.prototype={
ez(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.a(A.i("Future already completed"))
s.e7(r.i("1/").a(a))}}
A.ea.prototype={
oF(a){if((this.c&15)!==6)return!0
return this.b.b.fd(t.bl.a(this.d),a.a,t.y,t.K)},
of(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.pQ(q,m,a.b,o,n,t.l)
else p=l.fd(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.al(s))){if((r.c&1)!==0)throw A.a(A.p("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.p("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
ff(a,b,c){var s,r,q=this.$ti
q.T(c).i("1/(2)").a(a)
s=$.ar
if(s===B.B){if(!t.nW.b(b)&&!t.h_.b(b))throw A.a(A.a7(b,"onError",u.c))}else{c.i("@<0/>").T(q.c).i("1(2)").a(a)
b=A.DZ(b,s)}r=new A.as(s,c.i("as<0>"))
this.d0(new A.ea(r,3,a,b,q.i("@<1>").T(c).i("ea<1,2>")))
return r},
hN(a,b,c){var s,r=this.$ti
r.T(c).i("1/(2)").a(a)
s=new A.as($.ar,c.i("as<0>"))
this.d0(new A.ea(s,19,a,b,r.i("@<1>").T(c).i("ea<1,2>")))
return s},
m2(a){this.a=this.a&1|16
this.c=a},
d3(a){this.a=a.a&30|this.a&1
this.c=a.c},
d0(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.d0(a)
return}r.d3(s)}A.nZ(null,null,r.b,t.O.a(new A.wv(r,a)))}},
hv(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.hv(a)
return}m.d3(n)}l.a=m.dd(a)
A.nZ(null,null,m.b,t.O.a(new A.wA(l,m)))}},
co(){var s=t.F.a(this.c)
this.c=null
return this.dd(s)},
dd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
h1(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("aY<1>").b(a))A.wy(a,r,!0)
else{s=r.co()
q.c.a(a)
r.a=8
r.c=a
A.fO(r,s)}},
d4(a){var s,r=this
r.$ti.c.a(a)
s=r.co()
r.a=8
r.c=a
A.fO(r,s)},
kQ(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.co()
q.d3(a)
A.fO(q,r)},
bD(a){var s=this.co()
this.m2(a)
A.fO(this,s)},
e7(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("aY<1>").b(a)){this.fV(a)
return}this.ky(a)},
ky(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nZ(null,null,s.b,t.O.a(new A.wx(s,a)))},
fV(a){A.wy(this.$ti.i("aY<1>").a(a),this,!1)
return},
d1(a){this.a^=2
A.nZ(null,null,this.b,t.O.a(new A.ww(this,a)))},
$iaY:1}
A.wv.prototype={
$0(){A.fO(this.a,this.b)},
$S:0}
A.wA.prototype={
$0(){A.fO(this.b,this.a.a)},
$S:0}
A.wz.prototype={
$0(){A.wy(this.a.a,this.b,!0)},
$S:0}
A.wx.prototype={
$0(){this.a.d4(this.b)},
$S:0}
A.ww.prototype={
$0(){this.a.bD(this.b)},
$S:0}
A.wD.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pP(t.pF.a(q.d),t.z)}catch(p){s=A.al(p)
r=A.d8(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.oy(q)
n=k.a
n.c=new A.bq(q,o)
q=n}q.b=!0
return}if(j instanceof A.as&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.as){m=k.b.a
l=new A.as(m.b,m.$ti)
j.ff(new A.wE(l,m),new A.wF(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.wE.prototype={
$1(a){this.a.kQ(this.b)},
$S:30}
A.wF.prototype={
$2(a,b){A.fY(a)
t.l.a(b)
this.a.bD(new A.bq(a,b))},
$S:77}
A.wC.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fd(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.al(l)
r=A.d8(l)
q=s
p=r
if(p==null)p=A.oy(q)
o=this.a
o.c=new A.bq(q,p)
o.b=!0}},
$S:0}
A.wB.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.oF(s)&&p.a.e!=null){p.c=p.a.of(s)
p.b=!1}}catch(o){r=A.al(o)
q=A.d8(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.oy(p)
m=l.b
m.c=new A.bq(p,n)
p=m}p.b=!0}},
$S:0}
A.n0.prototype={}
A.ny.prototype={}
A.k9.prototype={$iD_:1}
A.nr.prototype={
pR(a){var s,r,q
t.O.a(a)
try{if(B.B===$.ar){a.$0()
return}A.E3(null,null,this,a,t.H)}catch(q){s=A.al(q)
r=A.d8(q)
A.AW(A.fY(s),t.l.a(r))}},
i4(a){return new A.xa(this,t.O.a(a))},
pP(a,b){b.i("0()").a(a)
if($.ar===B.B)return a.$0()
return A.E3(null,null,this,a,b)},
fd(a,b,c,d){c.i("@<0>").T(d).i("1(2)").a(a)
d.a(b)
if($.ar===B.B)return a.$1(b)
return A.Kb(null,null,this,a,b,c,d)},
pQ(a,b,c,d,e,f){d.i("@<0>").T(e).T(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ar===B.B)return a.$2(b,c)
return A.Ka(null,null,this,a,b,c,d,e,f)},
j5(a,b,c,d){return b.i("@<0>").T(c).T(d).i("1(2,3)").a(a)}}
A.xa.prototype={
$0(){return this.a.pR(this.b)},
$S:0}
A.yE.prototype={
$0(){A.G6(this.a,this.b)},
$S:0}
A.jH.prototype={
gu(a){return this.a},
gM(a){return this.a===0},
ga9(a){return this.a!==0},
ga6(){return new A.fP(this,this.$ti.i("fP<1>"))},
gan(){var s=this.$ti
return A.lO(new A.fP(this,s.i("fP<1>")),new A.wH(this),s.c,s.y[1])},
J(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kW(a)},
kW(a){var s=this.d
if(s==null)return!1
return this.bE(this.h0(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.D1(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.D1(q,b)
return r}else return this.ld(b)},
ld(a){var s,r,q=this.d
if(q==null)return null
s=this.h0(q,a)
r=this.bE(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.h_(s==null?m.b=A.Am():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.h_(r==null?m.c=A.Am():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.Am()
p=A.o7(b)&1073741823
o=q[p]
if(o==null){A.An(q,p,[b,c]);++m.a
m.e=null}else{n=m.bE(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aL(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.h2()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.a(A.aD(m))}},
h2(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.dj(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
h_(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.An(a,b,c)},
h0(a,b){return a[A.o7(b)&1073741823]}}
A.wH.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.jJ.prototype={
bE(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fP.prototype={
gu(a){return this.a.a},
gM(a){return this.a.a===0},
ga9(a){return this.a.a!==0},
gA(a){var s=this.a
return new A.jI(s,s.h2(),this.$ti.i("jI<1>"))},
q(a,b){return this.a.J(b)}}
A.jI.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.aD(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iai:1}
A.cG.prototype={
hr(){return new A.cG(A.w(this).i("cG<1>"))},
gA(a){var s=this,r=new A.fR(s,s.r,A.w(s).i("fR<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gM(a){return this.a===0},
ga9(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.kV(b)},
kV(a){var s=this.d
if(s==null)return!1
return this.bE(s[this.eb(a)],a)>=0},
ga1(a){var s=this.e
if(s==null)throw A.a(A.i("No elements"))
return A.w(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.w(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fZ(s==null?q.b=A.Ao():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fZ(r==null?q.c=A.Ao():r,b)}else return q.kv(b)},
kv(a){var s,r,q,p=this
A.w(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.Ao()
r=p.eb(a)
q=s[r]
if(q==null)s[r]=[p.ea(a)]
else{if(p.bE(q,a)>=0)return!1
q.push(p.ea(a))}return!0},
a7(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.hy(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.hy(s.c,b)
else return s.lT(b)},
lT(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.eb(a)
r=n[s]
q=o.bE(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hS(p)
return!0},
lb(a,b){var s,r,q,p,o,n=this,m=A.w(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.a(A.aD(n))
if(!0===o)n.a7(0,r)}},
R(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.el()}},
fZ(a,b){A.w(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.ea(b)
return!0},
hy(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hS(s)
delete a[b]
return!0},
el(){this.r=this.r+1&1073741823},
ea(a){var s,r=this,q=new A.nh(A.w(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.el()
return q},
hS(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.el()},
eb(a){return J.aO(a)&1073741823},
bE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aa(a[r].a,b))return r
return-1},
$iC4:1}
A.nh.prototype={}
A.fR.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.aD(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iai:1}
A.rK.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:81}
A.a4.prototype={
gA(a){return new A.an(a,this.gu(a),A.ct(a).i("an<a4.E>"))},
ad(a,b){return this.h(a,b)},
gM(a){return this.gu(a)===0},
ga9(a){return!this.gM(a)},
ga1(a){if(this.gu(a)===0)throw A.a(A.cV())
return this.h(a,0)},
q(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.aa(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.a(A.aD(a))}return!1},
a5(a,b){var s,r
A.ct(a).i("l(a4.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.a(A.aD(a))}return!0},
P(a,b){var s,r
A.ct(a).i("l(a4.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.a(A.aD(a))}return!1},
a_(a,b){var s
if(this.gu(a)===0)return""
s=A.Ag("",a,b)
return s.charCodeAt(0)==0?s:s},
fl(a,b){return new A.e9(a,b.i("e9<0>"))},
bz(a,b,c){var s=A.ct(a)
return new A.I(a,s.T(c).i("1(a4.E)").a(b),s.i("@<a4.E>").T(c).i("I<1,2>"))},
l(a,b){var s
A.ct(a).i("a4.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.k(a,s,b)},
dk(a,b){return new A.bd(a,A.ct(a).i("@<a4.E>").T(b).i("bd<1,2>"))},
o9(a,b,c,d){var s
A.ct(a).i("a4.E?").a(d)
A.fy(b,c,this.gu(a))
for(s=b;s<c;++s)this.k(a,s,d)},
t(a){return A.A0(a,"[","]")},
$iW:1,
$it:1,
$iK:1}
A.ah.prototype={
aL(a,b){var s,r,q,p=A.w(this)
p.i("~(ah.K,ah.V)").a(b)
for(s=this.ga6(),s=s.gA(s),p=p.i("ah.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gN(){return this.ga6().bz(0,new A.rM(this),A.w(this).i("P<ah.K,ah.V>"))},
bl(a,b,c,d){var s,r,q,p,o,n=A.w(this)
n.T(c).T(d).i("P<1,2>(ah.K,ah.V)").a(b)
s=A.m(c,d)
for(r=this.ga6(),r=r.gA(r),n=n.i("ah.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
mq(a){var s,r
for(s=J.N(A.w(this).i("t<P<ah.K,ah.V>>").a(a));s.m();){r=s.gp()
this.k(0,r.a,r.b)}},
J(a){return this.ga6().q(0,a)},
gu(a){var s=this.ga6()
return s.gu(s)},
gM(a){var s=this.ga6()
return s.gM(s)},
ga9(a){var s=this.ga6()
return s.ga9(s)},
gan(){return new A.jK(this,A.w(this).i("jK<ah.K,ah.V>"))},
t(a){return A.A7(this)},
$iV:1}
A.rM.prototype={
$1(a){var s=this.a,r=A.w(s)
r.i("ah.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("ah.V").a(s)
return new A.P(a,s,r.i("P<ah.K,ah.V>"))},
$S(){return A.w(this.a).i("P<ah.K,ah.V>(ah.K)")}}
A.rN.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.z(a)
r.a=(r.a+=s)+": "
s=A.z(b)
r.a+=s},
$S:52}
A.jK.prototype={
gu(a){var s=this.a
return s.gu(s)},
gM(a){var s=this.a
return s.gM(s)},
ga9(a){var s=this.a
return s.ga9(s)},
ga1(a){var s=this.a,r=s.ga6()
r=s.h(0,r.ga1(r))
return r==null?this.$ti.y[1].a(r):r},
gA(a){var s=this.a,r=s.ga6()
return new A.jL(r.gA(r),s,this.$ti.i("jL<1,2>"))}}
A.jL.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iai:1}
A.k2.prototype={
k(a,b,c){var s=A.w(this)
s.c.a(b)
s.y[1].a(c)
throw A.a(A.by("Cannot modify unmodifiable map"))}}
A.hx.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.w(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
J(a){return this.a.J(a)},
aL(a,b){this.a.aL(0,A.w(this).i("~(1,2)").a(b))},
gM(a){var s=this.a
return s.gM(s)},
ga9(a){var s=this.a
return s.ga9(s)},
gu(a){var s=this.a
return s.gu(s)},
ga6(){return this.a.ga6()},
t(a){return this.a.t(0)},
gan(){return this.a.gan()},
gN(){return this.a.gN()},
bl(a,b,c,d){return this.a.bl(0,A.w(this).T(c).T(d).i("P<1,2>(3,4)").a(b),c,d)},
$iV:1}
A.eP.prototype={}
A.dt.prototype={
gM(a){return this.gu(this)===0},
ga9(a){return this.gu(this)!==0},
L(a,b){var s
for(s=J.N(A.w(this).i("t<1>").a(b));s.m();)this.l(0,s.gp())},
bH(a){var s,r,q=this.bc(0)
for(s=this.gA(this);s.m();){r=s.gp()
if(a.q(0,r))q.a7(0,r)}return q},
t(a){return A.A0(this,"{","}")},
a5(a,b){var s
A.w(this).i("l(1)").a(b)
for(s=this.gA(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a_(a,b){var s,r,q=this.gA(this)
if(!q.m())return""
s=J.cb(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.z(q.gp())
while(q.m())}else{r=s
do r=r+b+A.z(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
P(a,b){var s
A.w(this).i("l(1)").a(b)
for(s=this.gA(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
ga1(a){var s=this.gA(this)
if(!s.m())throw A.a(A.cV())
return s.gp()},
ad(a,b){var s,r
A.mf(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.a(A.rf(b,b-r,this,"index"))},
$iW:1,
$it:1,
$ie1:1}
A.jX.prototype={
bH(a){var s,r,q,p=this,o=p.hr()
for(s=A.eW(p,p.r,A.w(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
bc(a){var s=this.hr()
s.L(0,this)
return s}}
A.nE.prototype={
l(a,b){this.$ti.c.a(b)
return A.It()}}
A.hS.prototype={
q(a,b){return this.a.q(0,b)},
gu(a){return this.a.a},
gA(a){var s=this.a
return A.eW(s,s.r,A.w(s).c)},
bc(a){return this.a.bc(0)}}
A.i_.prototype={}
A.k3.prototype={}
A.nf.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lL(b):s}},
gu(a){return this.b==null?this.c.a:this.bO().length},
gM(a){return this.gu(0)===0},
ga9(a){return this.gu(0)>0},
ga6(){if(this.b==null){var s=this.c
return new A.af(s,A.w(s).i("af<1>"))}return new A.ng(this)},
gan(){var s,r=this
if(r.b==null){s=r.c
return new A.am(s,A.w(s).i("am<2>"))}return A.lO(r.bO(),new A.wJ(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.v(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.J(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.mg().k(0,b,c)},
J(a){if(this.b==null)return this.c.J(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aL(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aL(0,b)
s=o.bO()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.xV(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.aD(o))}},
bO(){var s=t.jS.a(this.c)
if(s==null)s=this.c=A.d(Object.keys(this.a),t.s)
return s},
mg(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.m(t.N,t.z)
r=n.bO()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.R(r)
n.a=n.b=null
return n.c=s},
lL(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.xV(this.a[a])
return this.b[a]=s}}
A.wJ.prototype={
$1(a){return this.a.h(0,A.v(a))},
$S:39}
A.ng.prototype={
gu(a){return this.a.gu(0)},
ad(a,b){var s=this.a
if(s.b==null)s=s.ga6().ad(0,b)
else{s=s.bO()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gA(a){var s=this.a
if(s.b==null){s=s.ga6()
s=s.gA(s)}else{s=s.bO()
s=new J.fb(s,s.length,A.C(s).i("fb<1>"))}return s},
q(a,b){return this.a.J(b)}}
A.xj.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:56}
A.xi.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:56}
A.kE.prototype={
nE(a,b){t.L.a(a)
if(b===!0)return B.f1.bG(a)
else return B.f0.bG(a)}}
A.xe.prototype={
bG(a){var s,r,q,p,o
t.L.a(a)
s=a.length
r=A.fy(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.e(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.a(A.M("Invalid value in input: "+o,null,null))
return this.kY(a,0,r)}}return A.Ah(a,0,r)},
kY(a,b,c){var s,r,q,p,o
t.L.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.e(a,q)
o=a[q]
p+=A.aA((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.kF.prototype={}
A.kL.prototype={
oJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fy(a4,a5,a2)
s=$.EW()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.z6(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.z6(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.e(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.e(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bH("")
g=o}else g=o
g.a+=B.c.K(a3,p,q)
c=A.aA(j)
g.a+=c
p=k
continue}}throw A.a(A.M("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.K(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.By(a3,m,a5,n,l,r)
else{b=B.d.O(r-1,4)+1
if(b===1)throw A.a(A.M(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.ca(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.By(a3,m,a5,n,l,a)
else{b=B.d.O(a,4)
if(b===1)throw A.a(A.M(a1,a3,a5))
if(b>1)a3=B.c.ca(a3,a5,a5,b===2?"==":"=")}return a3}}
A.pi.prototype={}
A.eA.prototype={}
A.l0.prototype={}
A.lc.prototype={}
A.iP.prototype={
t(a){var s=A.ld(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lI.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.lH.prototype={
ai(a,b){var s=A.JY(a,this.gnH().a)
return s},
a0(a,b){var s=A.I7(a,this.go1().b,null)
return s},
go1(){return B.ks},
gnH(){return B.kr}}
A.rB.prototype={}
A.rA.prototype={}
A.wL.prototype={
jj(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.K(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
o=A.aA(117)
s.a+=o
o=A.aA(100)
s.a+=o
o=p>>>8&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aA(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.K(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
switch(p){case 8:o=A.aA(98)
s.a+=o
break
case 9:o=A.aA(116)
s.a+=o
break
case 10:o=A.aA(110)
s.a+=o
break
case 12:o=A.aA(102)
s.a+=o
break
case 13:o=A.aA(114)
s.a+=o
break
default:o=A.aA(117)
s.a+=o
o=A.aA(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aA(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.K(a,r,q)
r=q+1
o=A.aA(92)
s.a+=o
o=A.aA(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.K(a,r,m)},
e8(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.lI(a,null))}B.a.l(s,a)},
dZ(a){var s,r,q,p,o=this
if(o.ji(a))return
o.e8(a)
try{s=o.b.$1(a)
if(!o.ji(s)){q=A.C0(a,null,o.ghu())
throw A.a(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.al(p)
q=A.C0(a,r,o.ghu())
throw A.a(q)}},
ji(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.jj(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.e8(a)
q.q7(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.e8(a)
r=q.q8(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return r}else return!1},
q7(a){var s,r,q=this.c
q.a+="["
s=J.aN(a)
if(s.ga9(a)){this.dZ(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.dZ(s.h(a,r))}}q.a+="]"},
q8(a){var s,r,q,p,o,n,m=this,l={}
if(a.gM(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.dj(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aL(0,new A.wM(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.jj(A.v(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.e(r,n)
m.dZ(r[n])}p.a+="}"
return!0}}
A.wM.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:52}
A.wK.prototype={
ghu(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.mG.prototype={}
A.vL.prototype={
bG(a){var s,r,q,p=a.length,o=A.fy(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.xk(s)
if(r.la(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.e(a,q)
r.eu()}return B.a8.ae(s,0,r.b)}}
A.xk.prototype={
eu(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.aW(q)
s=q.length
if(!(p<s))return A.e(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.e(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.e(q,p)
q[p]=189},
mn(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.aW(r)
o=r.length
if(!(q<o))return A.e(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.e(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.e(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.e(r,p)
r[p]=s&63|128
return!0}else{n.eu()
return!1}},
la(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.e(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.e(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.aW(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.e(a,m)
if(k.mn(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.eu()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.aW(s)
if(!(m<q))return A.e(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.aW(s)
if(!(m<q))return A.e(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.e(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.e(s,m)
s[m]=n&63|128}}}return o}}
A.vK.prototype={
bG(a){return new A.xh(this.a).kX(t.L.a(a),0,null,!0)}}
A.xh.prototype={
kX(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.fy(b,c,J.cN(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.IK(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.IJ(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.ed(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.IL(o)
l.b=0
throw A.a(A.M(m,a,p+l.c))}return n},
ed(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.af(b+c,2)
r=q.ed(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ed(a,s,c,d)}return q.nG(a,b,c,d)},
nG(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bH(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aA(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aA(h)
e.a+=p
break
case 65:p=A.aA(h)
e.a+=p;--d
break
default:p=A.aA(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.e(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.e(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.e(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.e(a,l)
p=A.aA(a[l])
e.a+=p}else{p=A.Ah(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aA(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.fg.prototype={
ab(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.fg)if(this.a===b.a)s=this.b===b.b
return s},
gV(a){return A.cY(this.a,this.b,B.h,B.h,B.h,B.h)},
H(a,b){var s
t.f7.a(b)
s=B.d.H(this.a,b.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
t(a){var s=this,r=A.FM(A.H0(s)),q=A.l2(A.GZ(s)),p=A.l2(A.GV(s)),o=A.l2(A.GW(s)),n=A.l2(A.GY(s)),m=A.l2(A.H_(s)),l=A.BG(A.GX(s)),k=s.b,j=k===0?"":A.BG(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibs:1}
A.dK.prototype={
ab(a,b){if(b==null)return!1
return b instanceof A.dK&&this.a===b.a},
gV(a){return B.d.gV(this.a)},
H(a,b){return B.d.H(this.a,t.yb.a(b).a)},
t(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.af(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.af(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bJ(B.d.t(o%1e6),6,"0")},
$ibs:1}
A.n9.prototype={
t(a){return this.C()},
$iD:1}
A.at.prototype={
gcg(){return A.GU(this)}}
A.kG.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ld(s)
return"Assertion failed"}}
A.e5.prototype={}
A.cP.prototype={
geh(){return"Invalid argument"+(!this.a?"(s)":"")},
geg(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.z(p),n=s.geh()+q+o
if(!s.a)return n
return n+s.geg()+": "+A.ld(s.gf0())},
gf0(){return this.b}}
A.hG.prototype={
gf0(){return A.ki(this.b)},
geh(){return"RangeError"},
geg(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.ly.prototype={
gf0(){return A.j(this.b)},
geh(){return"RangeError"},
geg(){if(A.j(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.jv.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.mB.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.hN.prototype={
t(a){return"Bad state: "+this.a}}
A.kW.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ld(s)+"."}}
A.m0.prototype={
t(a){return"Out of Memory"},
gcg(){return null},
$iat:1}
A.jq.prototype={
t(a){return"Stack Overflow"},
gcg(){return null},
$iat:1}
A.wt.prototype={
t(a){return"Exception: "+this.a}}
A.A.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.K(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.e(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.e(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.c.K(e,i,j)+k+"\n"+B.c.a3(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.z(f)+")"):g}}
A.t.prototype={
dk(a,b){return A.FB(this,A.w(this).i("t.E"),b)},
bz(a,b,c){var s=A.w(this)
return A.lO(this,s.T(c).i("1(t.E)").a(b),s.i("t.E"),c)},
dY(a,b){var s=A.w(this)
return new A.F(this,s.i("l(t.E)").a(b),s.i("F<t.E>"))},
fl(a,b){return new A.e9(this,b.i("e9<0>"))},
q(a,b){var s
for(s=this.gA(this);s.m();)if(J.aa(s.gp(),b))return!0
return!1},
b8(a,b,c,d){var s,r
d.a(b)
A.w(this).T(d).i("1(1,t.E)").a(c)
for(s=this.gA(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a5(a,b){var s
A.w(this).i("l(t.E)").a(b)
for(s=this.gA(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a_(a,b){var s,r,q=this.gA(this)
if(!q.m())return""
s=J.cb(q.gp())
if(!q.m())return s
r=b.gM(b)
if(r){r=s
do r+=J.cb(q.gp())
while(q.m())}else{r=s
do r=r+A.z(b)+J.cb(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
P(a,b){var s
A.w(this).i("l(t.E)").a(b)
for(s=this.gA(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
cb(a,b){var s=A.w(this).i("t.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bL(a){return this.cb(0,!0)},
gu(a){var s,r=this.gA(this)
for(s=0;r.m();)++s
return s},
gM(a){return!this.gA(this).m()},
ga9(a){return!this.gM(this)},
ga1(a){var s=this.gA(this)
if(!s.m())throw A.a(A.cV())
return s.gp()},
gbn(a){var s,r=this.gA(this)
if(!r.m())throw A.a(A.cV())
s=r.gp()
if(r.m())throw A.a(A.BU())
return s},
b7(a,b,c){var s,r=A.w(this)
r.i("l(t.E)").a(b)
r.i("t.E()?").a(c)
for(r=this.gA(this);r.m();){s=r.gp()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.a(A.cV())},
au(a,b){return this.b7(0,b,null)},
ad(a,b){var s,r
A.mf(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.a(A.rf(b,b-r,this,"index"))},
t(a){return A.Gs(this,"(",")")}}
A.P.prototype={
t(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.az.prototype={
gV(a){return A.L.prototype.gV.call(this,0)},
t(a){return"null"}}
A.L.prototype={$iL:1,
ab(a,b){return this===b},
gV(a){return A.j9(this)},
t(a){return"Instance of '"+A.ma(this)+"'"},
gag(a){return A.Ba(this)},
toString(){return this.t(this)}}
A.nB.prototype={
t(a){return""},
$idv:1}
A.vm.prototype={
go_(){var s,r=this.b
if(r==null)r=$.tR.$0()
s=r-this.a
if($.Bl()===1e6)return s
return s*1000}}
A.bH.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iHt:1}
A.vJ.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.v(b)
s=B.c.bI(b,"=")
if(s===-1){if(b!=="")a.k(0,A.At(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.K(b,0,s)
q=B.c.aR(b,s+1)
p=this.a
a.k(0,A.At(r,0,r.length,p,!0),A.At(q,0,q.length,p,!0))}return a},
$S:85}
A.vI.prototype={
$2(a,b){throw A.a(A.M("Illegal IPv6 address, "+a,this.a,b))},
$S:120}
A.k4.prototype={
ghL(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.z(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gV(a){var s,r=this,q=r.y
if(q===$){s=B.c.gV(r.ghL())
r.y!==$&&A.o8()
r.y=s
q=s}return q},
gb_(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.CI(s==null?"":s)
r.z!==$&&A.o8()
q=r.z=new A.eP(s,t.hL)}return q},
gjf(){return this.b},
geZ(){var s=this.c
if(s==null)return""
if(B.c.X(s,"[")&&!B.c.aw(s,"v",1))return B.c.K(s,1,s.length-1)
return s},
gf5(){var s=this.d
return s==null?A.Dc(this.a):s},
gf6(){var s=this.f
return s==null?"":s},
giE(){var s=this.r
return s==null?"":s},
giI(){return this.c!=null},
giK(){return this.f!=null},
giJ(){return this.r!=null},
t(a){return this.ghL()},
ab(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gfs())if(p.c!=null===b.giI())if(p.b===b.gjf())if(p.geZ()===b.geZ())if(p.gf5()===b.gf5())if(p.e===b.giY()){r=p.f
q=r==null
if(!q===b.giK()){if(q)r=""
if(r===b.gf6()){r=p.r
q=r==null
if(!q===b.giJ()){s=q?"":r
s=s===b.giE()}}}}return s},
$imE:1,
gfs(){return this.a},
giY(){return this.e}}
A.vH.prototype={
gje(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.c.dJ(s,"?",m)
q=s.length
if(r>=0){p=A.k5(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.n4("data","",n,n,A.k5(s,m,q,128,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.nv.prototype={
giI(){return this.c>0},
giK(){return this.f<this.r},
giJ(){return this.r<this.a.length},
gfs(){var s=this.w
return s==null?this.w=this.kT():s},
kT(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.X(r.a,"http"))return"http"
if(q===5&&B.c.X(r.a,"https"))return"https"
if(s&&B.c.X(r.a,"file"))return"file"
if(q===7&&B.c.X(r.a,"package"))return"package"
return B.c.K(r.a,0,q)},
gjf(){var s=this.c,r=this.b+3
return s>r?B.c.K(this.a,r,s-1):""},
geZ(){var s=this.c
return s>0?B.c.K(this.a,s,this.d):""},
gf5(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Eq(B.c.K(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.X(r.a,"http"))return 80
if(s===5&&B.c.X(r.a,"https"))return 443
return 0},
giY(){return B.c.K(this.a,this.e,this.f)},
gf6(){var s=this.f,r=this.r
return s<r?B.c.K(this.a,s+1,r):""},
giE(){var s=this.r,r=this.a
return s<r.length?B.c.aR(r,s+1):""},
gb_(){if(this.f>=this.r)return B.aV
return new A.eP(A.CI(this.gf6()),t.hL)},
gV(a){var s=this.x
return s==null?this.x=B.c.gV(this.a):s},
ab(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.t(0)},
t(a){return this.a},
$imE:1}
A.n4.prototype={}
A.tj.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.zG.prototype={
$1(a){return this.a.ez(this.b.i("0/?").a(a))},
$S:20}
A.zH.prototype={
$1(a){if(a==null)return this.a.i7(new A.tj(a===undefined))
return this.a.i7(a)},
$S:20}
A.z_.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.DQ(a))return a
s=this.a
a.toString
if(s.J(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.h(A.b2(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.ej(!0,"isUtc",t.y)
return new A.fg(r,0,!0)}if(a instanceof RegExp)throw A.a(A.p("structured clone of RegExp",null))
if(a instanceof Promise)return A.av(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.m(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.d7(n),p=s.gA(n);p.m();)m.push(A.ih(p.gp()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.j(a.length)
for(s=J.aN(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:129}
A.ne.prototype={
aZ(a){if(a<=0||a>4294967296)throw A.a(A.Cl(u.w+a))
return Math.random()*a>>>0},
aD(){return Math.random()},
$iAd:1}
A.eY.prototype={
ck(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.af(a-s,k)
r=a>>>0
a=B.d.af(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.af(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.af(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.af(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.af(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.af(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.br()
l.br()
l.br()
l.br()},
br(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.af(o-n+(q-p)+(m-r),4294967296)>>>0},
aZ(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.a(A.Cl(u.w+a))
s=a-1
if((a&s)>>>0===0){p.br()
return(p.a&s)>>>0}do{p.br()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aD(){var s,r=this
r.br()
s=r.a
r.br()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iAd:1}
A.l7.prototype={
C(){return"DiagnosticSeverity."+this.b}}
A.eo.prototype={
D(){var s=this
return A.E(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.v2.prototype={
$1(a){return B.c.bJ(B.d.fh(A.j(a),16),8,"0")},
$S:146}
A.mH.prototype={}
A.t1.prototype={
ps(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.C(s).i("bO<1>"),s=new A.bO(s,r),s=new A.an(s,s.gu(0),r.i("an<a1.E>")),q=o.a,r=r.i("a1.E");s.m();){p=s.d
q.aM(p==null?r.a(p):p)}}}
A.lR.prototype={}
A.tc.prototype={}
A.t3.prototype={
dM(a0,a1){var s=0,r=A.aL(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dM=A.aM(function(a3,a4){if(a3===1)return A.aI(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.EF(b)
if(a.length!==0)throw A.a(A.M(B.a.bz(a,new A.t4(),t.N).a_(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.a(B.iv)
k=t.N
j=A.a0(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.r)(m),++i)j.L(0,m[i].c.gan())
if(j.a>16384)throw A.a(B.io)
p=A.m(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gan(),g=g.gA(g)
case 6:if(!g.m()){s=7
break}o=g.gp()
if(p.J(o)){s=6
break}s=8
return A.a6(j.$1(o),$async$dM)
case 8:f=a4
e=f.length
if(e>67108864)throw A.a(A.M("model package payload exceeds limit: "+A.z(o),null,null))
d=p
if(new A.am(d,A.w(d).i("am<2>")).b8(0,0,new A.t5(),k)+e>268435456)throw A.a(B.iy)
J.ba(p,o,new Uint8Array(A.S(f)))
if(l)try{e=J.b5(p,o)
e.toString
A.Ei(e)}catch(a2){b=A.al(a2)
if(b instanceof A.md){n=b
throw A.a(A.M("model package payload is not valid QMSH: "+A.z(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.r)(m),++i
s=3
break
case 5:if(A.C9(b,p)!==b.c)throw A.a(B.hx)
q=new A.mH(b,p)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dM,r)}}
A.t4.prototype={
$1(a){return t.zU.a(a).f},
$S:22}
A.t5.prototype={
$2(a,b){return A.j(a)+t.uo.a(b).length},
$S:171}
A.t6.prototype={
B(){var s,r,q,p,o,n,m=this,l=A.d([],t.s),k=A.je("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.l(l,"assetId must be kebab-case")
k=A.je("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.l(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.l(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.l(l,"parts must be non-empty")
s=m.w
if(A.hw(s,A.C(s).c).a!==s.length)B.a.l(l,"lods must be unique")
if(!B.a.q(s,"LOD0"))B.a.l(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.P(s,new A.t9())
else s=!1
if(s)B.a.l(l,"combinedBounds must contain six finite values")
for(s=m.y.gN(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
if(q.length!==0){r=r.b
p=J.aN(r)
r=p.gu(r)!==16||p.P(r,new A.ta())}else r=!0
if(r)B.a.l(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.r)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.l(l,"part material slot is outside materials")
q=n.c
if(q.gM(q))B.a.l(l,"part "+n.a+" must declare payload files")
for(q=q.gan(),q=q.gA(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.JF(q.gp()))B.a.l(l,p)}return l},
jb(a){var s,r,q,p=this,o=A.m(t.N,t.z)
o.k(0,"schema","pixeldart-model-package-v1")
o.k(0,"assetId",p.b)
if(a)o.k(0,"packageHash",p.c)
o.k(0,"sourceFormat",p.d)
s=p.e
r=A.C(s)
q=r.i("I<1,V<f,@>>")
s=A.J(new A.I(s,r.i("V<f,@>(1)").a(new A.t8()),q),q.i("a1.E"))
o.k(0,"parts",s)
o.k(0,"materials",p.f)
o.k(0,"textures",p.r)
o.k(0,"lods",p.w)
o.k(0,"combinedBounds",p.x)
o.k(0,"sockets",p.y)
o.k(0,"provenance",p.z)
return o},
D(){return this.jb(!0)}}
A.t7.prototype={
$2(a,b){return new A.P(J.cb(a),J.cb(b),t.q)},
$S:44}
A.t9.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.ta.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.t8.prototype={
$1(a){return t.aw.a(a).D()},
$S:73}
A.fs.prototype={
D(){return A.E(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)}}
A.tb.prototype={
$2(a,b){return new A.P(J.cb(a),J.cb(b),t.q)},
$S:44}
A.yr.prototype={
$1(a){A.v(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.yK.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yu.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.yI.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.zR.prototype={
$2(a,b){B.a.l(this.a,new A.eo(a,B.cP,"model-package",b,"rebuild the deterministic model package"))},
$S:53}
A.zS.prototype={
$2(a,b){B.a.l(this.a,new A.eo(a,B.cP,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:53}
A.u0.prototype={
B(){var s,r=this
if(B.a.P(A.d([r.d,r.e,r.f,r.r,r.w],t.t),new A.u1()))throw A.a(B.jd)
s=r.y
if(!isFinite(s)||s<1)throw A.a(B.hX)}}
A.u1.prototype={
$1(a){return A.j(a)<=0},
$S:21}
A.fx.prototype={
C(){return"QualityProfileKind."+this.b}}
A.e_.prototype={
B(){var s="installedFeatures",r=this.b,q=r.bH(B.pJ)
if(q.a!==0)throw A.a(A.a7(q,s,"contains unknown pipeline features"))
if(this.a===B.bX&&r.ga9(r))throw A.a(A.a7(r,s,"safe profiles cannot install optional features"))}}
A.hi.prototype={
C(){return"CoordinatedTransitionState."+this.b}}
A.m7.prototype={}
A.kX.prototype={
cr(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.d)A.h(A.i("configuration coordinator is disposed"))
if(a1.c!=null)throw A.a(A.i("coordinated transition is already open"))
p=a1.a
if(p.e)A.h(A.i("configuration state is disposed"))
o=p.a
if(o==null)A.h(A.i("configuration state is not initialized"))
if(p.c!=null)A.h(A.i("a configuration transition is already open"))
a2.B()
n=A.j3(a2)
m=p.d
l=p.b
if(l==null)A.h(A.i("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bH(h)
f=h.bH(j)
j=n.a
h=l.a
e=j.bH(h)
d=h.bH(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.px(m,a2,n,new A.pw(A.fD(g,k),A.fD(f,k),A.fD(e,k),A.fD(d,k),c,b,o.z!==a2.z),B.cN)
p.c=a
s=a
try{r=a1.b.dR(s.c)
q=new A.m7(s,r,B.be)
a1.c=q
return q}catch(a0){p.hX(s)
throw a0}},
cs(a){var s,r,q,p=this
if(p.d)A.h(A.i("configuration coordinator is disposed"))
p.h5(a)
s=p.a
r=a.a
if(s.e)A.h(A.i("configuration state is disposed"))
s.h6(r)
q=s.d
if(r.a!==q)A.h(A.i("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fX
s.c=null
p.b.cs(a.b)
a.c=B.h4
p.c=null},
W(){var s=this
if(s.d)return
if(s.c!=null)throw A.a(A.i("cannot dispose an open coordinated transition"))
s.a.W()
s.b.W()
s.d=!0},
h5(a){if(this.c!==a||a.c!==B.be)throw A.a(A.i("coordinated transition is not open"))}}
A.hd.prototype={
C(){return"ConfigurationTransactionState."+this.b}}
A.pw.prototype={}
A.px.prototype={}
A.kY.prototype={
hX(a){if(this.e)A.h(A.i("configuration state is disposed"))
this.h6(a)
a.e=B.fY
this.c=null},
W(){var s=this
if(s.e)return
if(s.c!=null)throw A.a(A.i("cannot dispose with an open configuration transition"))
s.e=!0
s.b=s.a=null},
h6(a){if(this.c!==a||a.e!==B.cN)throw A.a(A.i("configuration transition is not open"))}}
A.mA.prototype={
C(){return"ToneMappingMode."+this.b}}
A.m6.prototype={
B(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.E(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.O(n,A.w(n).i("O<1,2>")).gA(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.a(A.p("PostProcessState."+l+" must be >= 0: "+A.z(k),i))}n=j.ay
if(n<1||n>8)throw A.a(A.p("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.a(A.p("PostProcessState.rainIntensity must be in [0, 1]: "+A.z(s),i))
if(r>1)throw A.a(A.p("PostProcessState.surfaceWetness must be in [0, 1]: "+A.z(r),i))
if(q>1)throw A.a(A.p("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.z(q),i))
if(p>1)throw A.a(A.p("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.z(p),i))
if(o>1)throw A.a(A.p("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.z(o),i))}}
A.it.prototype={
giR(){var s,r=this,q=r.x
if(q===$){s=r.b.iQ()
r.x!==$&&A.o8()
r.x=s
q=s}return q},
B(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
if(!g.gU(0))throw A.a(A.p("CameraView.eye must be finite: "+g.t(0),h))
g=i.e
if(!g.gU(0)||g.gbj()<1e-12)throw A.a(A.p("CameraView.forward must be finite and nonzero: "+g.t(0),h))
g=i.f
if(isFinite(g)){s=i.r
s=!isFinite(s)||g<=0||s<=g}else s=!0
if(s)throw A.a(A.p("CameraView requires 0 < near < far, got "+A.z(g)+"/"+i.r,h))
g=i.w
if(!isFinite(g)||g<=0)throw A.a(A.p("CameraView.aspect must be finite and > 0: "+A.z(g),h))
g=i.a
if(!g.gU(0)||!i.b.gU(0)||!i.c.gU(0))throw A.a(A.p("CameraView matrices must be finite",h))
for(s=i.c.a,r=s.length,g=i.b.a3(0,g).a,q=g.length,p=0,o=-1,n=0;n<16;++n){if(!(n<r))return A.e(s,n)
m=s[n]
if(!(n<q))return A.e(g,n)
l=g[n]
k=Math.abs(m-l)/(1+Math.abs(l))
if(k>p){o=n
p=k}}if(p>0.0001){m=B.b.pS(p,2)
l=B.d.af(o,4)
j=B.d.O(o,4)
if(!(o>=0&&o<r))return A.e(s,o)
s=s[o]
if(!(o<q))return A.e(g,o)
throw A.a(A.p("CameraView.viewProjection must equal projection * view. Worst relative mismatch "+m+" at column "+l+" row "+j+" (got "+A.z(s)+", expected "+A.z(g[o])+"). Prefer CameraView.look/lookAt/fromMatrices, which derive it.",h))}}}
A.vg.prototype={}
A.ll.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.gU(0)||!h.b.gU(0)||!h.fx.gU(0)||!h.r.gU(0)||!h.dx.gU(0))throw A.a(A.p("FrameEnvironment colors must be finite",g))
s=h.k4
if(s!=null){r=!0
if(B.c.aQ(s.a).length!==0)if(s.c.gU(0))if(s.d.gU(0))if(s.e.gU(0))if(isFinite(0.08))if(isFinite(0.0025))if(isFinite(0))if(isFinite(1)){q=s.z
if(!(q<0))if(!(q>1))if(isFinite(q)){q=s.Q
if(!(q<0))if(!(q>1))if(isFinite(q)){q=s.as
if(q>0)if(q<=1e5)if(isFinite(q)){q=s.at
if(q>0)if(q<=1e5)if(isFinite(q)){q=s.ax
if(!(q<=0))if(!(q>1))if(isFinite(q)){q=s.ay
if(isFinite(q)){p=s.ch
if(isFinite(p))if(!(Math.abs(q)>1000))if(!(Math.abs(p)>1000))if(isFinite(s.CW)){q=s.cx
if(!(q<0))if(!(q>1))if(isFinite(q)){q=s.cy
if(!(q<0))if(!(q>1))if(isFinite(q)){s=s.db
s=s<4||s>24}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r
else s=r}else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r}else s=r
else s=r
else s=r
else s=r
else s=r
else s=r
else s=r
else s=r
if(s)A.h(A.p("SkyboxDeclaration contains invalid values",g))}s=h.c
if(isFinite(s)){r=h.d
r=!isFinite(r)||r<s}else r=!0
if(r)throw A.a(A.p("FrameEnvironment requires fogEnd >= fogStart, got "+A.z(s)+"/"+A.z(h.d),g))
s=h.fy
if(!isFinite(s)||s<0)throw A.a(A.p("FrameEnvironment.ambientIntensity must be >= 0: "+A.z(s),g))
s=h.go
if(s!=null)s.B()
for(s=h.id,r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
if(!(isFinite(q.a)&&isFinite(q.b)&&isFinite(q.c)))A.h(A.p("PointLight.position must be finite: "+q.t(0),g))
q=n.d
if(!isFinite(q)||q<0)A.h(A.p("PointLight.intensity must be >= 0: "+A.z(q),g))
q=n.e
if(!isFinite(q)||q<=0)A.h(A.p("PointLight.radius must be > 0: "+A.z(q),g))}for(s=h.k1,r=s.length,o=0;o<r;++o){n=s[o]
q=n.b
if(!(isFinite(q.a)&&isFinite(q.b)&&isFinite(q.c)))A.h(A.p("SpotLight.position must be finite: "+q.t(0),g))
q=n.c
p=q.a
if(isFinite(p)&&isFinite(q.b)&&isFinite(q.c)){m=q.b
l=q.c
l=p*p+m*m+l*l<1e-12
p=l}else p=!0
if(p)A.h(A.p("SpotLight.direction must be finite and nonzero: "+q.t(0),g))
if(n.w<=n.r)A.h(A.p("SpotLight.outerConeRadians must exceed innerConeRadians",g))}s=t.N
k=A.a0(s)
for(r=h.k2,q=r.length,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){j=r[o]
j.B()
p=j.a
if(!k.l(0,p))throw A.a(A.p("FrameEnvironment.volumetricSources contains duplicate id: "+p,g))}r=h.w
q=!0
if(!(r<0))if(isFinite(r)){r=h.x
if(!(r<0))if(!(r>0.5))if(isFinite(r)){r=h.y
if(!(r<=-0.999))if(!(r>=0.999))if(isFinite(r)){r=h.z
if(!(r<0))if(!(r>0.5))if(isFinite(r)){r=h.Q
if(!(r<0))if(!(r>8))if(isFinite(r)){r=h.as
if(r>=4)if(r<=24){r=h.at
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.ax
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.ay
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.ch
if(!(r<0))if(!(r>2))if(isFinite(r)){r=h.CW
if(!(r<0))if(!(r>2))if(isFinite(r)){r=h.cx
if(!(r<0))if(!(r>2))if(isFinite(r)){r=h.cy
if(!(r<0))if(!(r>3))if(isFinite(r)){r=h.db
if(!(r<0))if(!(r>0.01))if(isFinite(r)){r=h.dy
if(!(r<0))if(!(r>4))if(isFinite(r)){r=h.fr
r=r>1||!isFinite(r)}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
else r=q}else r=q
else r=q
if(r)throw A.a(A.p("invalid volumetric medium controls",g))
i=A.a0(s)
for(s=h.k3,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){j=s[o]
q=j.a
p=!0
if(B.c.aQ(q).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){p=j.d
p=!isFinite(p)||m<=0||p<0||p>1}}}if(p)A.h(A.p("thermal source is invalid",g))
if(!i.l(0,q))throw A.a(A.p("FrameEnvironment.thermalSources contains duplicate id: "+q,g))}}}
A.lm.prototype={}
A.e0.prototype={
ab(a,b){if(b==null)return!1
return J.fa(b)===A.Ba(this)&&b instanceof A.e0&&this.a===b.a&&this.b===b.b},
gV(a){return A.cY(A.Ba(this),this.a,this.b,B.h,B.h,B.h)}}
A.bN.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bx.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cg.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.m1.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cT.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.fm.prototype={
C(){return"HandleRejection."+this.b}}
A.lw.prototype={
t(a){return"HandleException("+this.a.b+", "+this.b.t(0)+")"}}
A.aZ.prototype={
gU(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ab(a,b){if(b==null)return!1
return b instanceof A.aZ&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gV(a){return A.cY(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"LinearColor("+A.z(this.a)+", "+A.z(this.b)+", "+A.z(this.c)+")"}}
A.l9.prototype={
B(){var s=this.a
if(!s.gU(0)||s.gbj()<1e-12)throw A.a(A.p("DirectionalLight.direction must be finite and nonzero: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.a(A.p("DirectionalLight.intensity must be >= 0: "+A.z(s),null))}}
A.m5.prototype={}
A.bQ.prototype={}
A.zI.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:84}
A.h5.prototype={
C(){return"AlphaMode."+this.b}}
A.iU.prototype={
C(){return"MaterialMapColorSpace."+this.b}}
A.c_.prototype={
B(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.a(A.p("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.a(A.p("MaterialDefinition.emissiveStrength must be >= 0: "+A.z(s),k))
s=l.z
if(!isFinite(s)||s<0)throw A.a(A.p("MaterialDefinition.normalStrength must be >= 0: "+A.z(s),k))
A.lP("roughness",l.at)
A.lP("metallic",l.ax)
A.lP("occlusionStrength",1)
A.lP("clearcoatStrength",l.ch)
A.lP("clearcoatRoughness",l.CW)
if(!isFinite(0))throw A.a(A.p("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a5("uvScaleU",s),new A.a5("uvScaleV",r),new A.a5("uvOffsetU",0),new A.a5("uvOffsetV",0),new A.a5("tintR",l.d),new A.a5("tintG",l.e),new A.a5("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.a(A.p("MaterialDefinition."+n+" must be finite: "+A.z(m),k))}if(s===0||r===0)throw A.a(A.p("MaterialDefinition uv scale must not be zero",k))
s=l.fy
if(!isFinite(s)||s<=0||s>1)throw A.a(A.p("MaterialDefinition.alphaCutoff must be in (0, 1]: "+A.z(s),k))}}
A.d1.prototype={
C(){return"VertexAttributeKind."+this.b}}
A.bg.prototype={}
A.jx.prototype={
B(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.a(A.p("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.a(A.p(k+m.a+'": attribute '+p.a.t(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.a(A.p(k+m.a+'": attribute '+p.a.t(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.C(s)
r=j.i("l(1)").a(new A.vM())
for(s=B.a.gA(s),j=new A.R(s,r,j.i("R<1>"));j.m();)if(s.gp().c!==4)throw A.a(A.p(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.vM.prototype={
$1(a){return t.qY.a(a).a===B.ck},
$S:23}
A.c0.prototype={
B(){var s,r,q,p,o,n=this,m=n.a
m.B()
s=n.b.length
m=m.b
if(B.d.O(s,m)!==0)throw A.a(A.p("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.mi()
r=n.c
if(r!=null){q=B.d.bd(s,m)
for(m=A.GA(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.a(A.p("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gU(0)&&m.b.gU(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.a(A.p("MeshData.localBounds must be a valid AABB",null))},
mi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.C(a4),a6=a5.i("l(1)")
a5=a5.i("F<1>")
s=new A.F(a4,a6.a(new A.rV()),a5)
if(!s.gA(0).m())return
r=new A.F(a4,a6.a(new A.rW()),a5)
if(r.gu(0)!==1)throw A.a(A.p("surface-v2 tangent data requires one normal slot",a2))
q=s.gbn(0)
p=r.gbn(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.bd(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
j=k+n
if(!(j<a5))return A.e(a4,j)
i=a4[j]
h=j+1
if(!(h<a5))return A.e(a4,h)
g=a4[h]
j+=2
if(!(j<a5))return A.e(a4,j)
f=a4[j]
j=k+m
if(!(j<a5))return A.e(a4,j)
e=a4[j]
h=j+1
if(!(h<a5))return A.e(a4,h)
d=a4[h]
h=j+2
if(!(h<a5))return A.e(a4,h)
c=a4[h]
j+=3
if(!(j<a5))return A.e(a4,j)
b=a4[j]
a=i*i+g*g+f*f
a0=e*e+d*d+c*c
if(!B.a.a5(A.d([i,g,f,e,d,c,b],o),new A.rX()))throw A.a(A.p("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.a(A.p("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.a(A.p("surface-v2 tangent must be orthogonal to its normal: "+A.z(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.a(A.p("surface-v2 tangent handedness must be -1 or +1: "+A.z(b),a2))}}}
A.rV.prototype={
$1(a){return t.qY.a(a).a===B.ck},
$S:23}
A.rW.prototype={
$1(a){return t.qY.a(a).a===B.eM},
$S:23}
A.rX.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.l3.prototype={$iHe:1}
A.tl.prototype={
B(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.a(A.p("resource plan must contain sceneColor and present",null))
if(s.P(0,new A.tm()))throw A.a(A.p("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.a(A.p("resource history does not match vhsOutput ownership",null))}}
A.tm.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.hJ.prototype={
C(){return"ResourceAssemblyState."+this.b}}
A.m8.prototype={}
A.jj.prototype={
iO(a){var s=this
if(s.d)A.h(A.i("resource assembler is disposed"))
if(s.a!=null)throw A.a(A.i("resource assembler is initialized"))
a.B()
s.a=a
s.c=1},
dR(a){var s=this
if(s.d)A.h(A.i("resource assembler is disposed"))
if(s.a==null)throw A.a(A.i("resource assembler is not initialized"))
if(s.b!=null)throw A.a(A.i("resource assembly is already open"))
a.B()
return s.b=new A.m8(s.c,a,B.c4)},
cs(a){var s,r=this
if(r.d)A.h(A.i("resource assembler is disposed"))
r.hC(a)
s=r.c
if(a.a!==s)throw A.a(A.i("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.pc
r.b=null},
fc(a){if(this.d)A.h(A.i("resource assembler is disposed"))
this.hC(a)
a.c=B.pd
this.b=null},
W(){var s=this
if(s.d)return
if(s.b!=null)throw A.a(A.i("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
hC(a){if(this.b!==a||a.c!==B.c4)throw A.a(A.i("resource assembly is not prepared"))}}
A.hk.prototype={
C(){return"DrawMode."+this.b}}
A.kP.prototype={
C(){return"BlendMode."+this.b}}
A.aS.prototype={}
A.mx.prototype={
t(a){var s=this
return"SurfaceMetrics(css "+s.a+"x"+s.b+", pixels "+s.c+"x"+s.d+", dpr 1, visible: true)"},
B(){var s=this
if(s.a<0||s.b<0)throw A.a(A.p("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.a(A.p("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.a(A.p("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.iv.prototype={
C(){return"ColorEncoding."+this.b}}
A.hj.prototype={
C(){return"DiagnosticLevel."+this.b}}
A.jg.prototype={
B(){var s,r=this,q=null
r.a.B()
s=r.b
if(s<=0||r.c<=0)throw A.a(A.p("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.a(A.p("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.a(A.p("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.a(A.p("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.fA.prototype={
C(){return"RendererState."+this.b}}
A.b1.prototype={}
A.qb.prototype={
iX(a){var s=this.z.h(0,a)
return s==null?B.d1:s},
t(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.fr.prototype={
C(){return"MaterialResidencyStatus."+this.b}}
A.dm.prototype={}
A.ch.prototype={}
A.rS.prototype={
d5(a){var s=this.a,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.rT(a)),r.i("F<1>")).gu(0)}}
A.rT.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:86}
A.rQ.prototype={
dS(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.m(s,t.jt)
q=A.d([],t.r8)
p=A.m(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.r)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.h(A.p("material residency key is empty",null))
k=m.b
k.B()
if(r.J(l))throw A.a(A.p("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.m(s,s)
for(k=A.Ec(k),i=k.$ti,k=new A.d4(k.a(),i.i("d4<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.c7(c,d,g))}p.k(0,l,j)}s=A.m(s,t.bp)
for(o=this.a.dS(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("am<2>")
a=A.J(new A.am(r,o),o.i("t.E"))
B.a.Y(a,new A.rR())
o=A.d([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.r)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.lX(m,k,s))}return new A.rS(A.ab(o,t.wl))},
lX(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.m(s,r)
for(p=new A.O(b,A.w(b).i("O<1,2>")).gA(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.Gy(new A.am(q,q.$ti.i("am<2>")))
A.aX(q,s,r)
return new A.ch(a,p)}}
A.rR.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.c.H(a.a,b.a):s},
$S:98}
A.lQ.prototype={
pF(a){return this.a.bx(a)}}
A.rU.prototype={
$3(a,b,c){return new A.cg(A.j(a),A.j(b),A.ac(c))},
$S:100}
A.mD.prototype={}
A.rY.prototype={
b3(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.CW(b,new A.lr(a.byteLength,B.dm,B.jw))
if(b.b!==B.j)A.h(A.i(c))
s=A.b(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.j(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.j(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.cF(b)
A.bo(b,p)
if(b.b!==B.j)A.h(A.i(c))
r.bindBuffer(A.j(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.a0(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.E9(h.a)
if(!l.l(0,g))continue
f=A.J0(o,g,h)
if(b.b!==B.j)A.h(A.i(c))
r.vertexAttribPointer.apply(r,[g,f,A.j(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.h(A.i(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.CW(b,new A.lr(A.C8(e),B.dm,B.dl))
if(b.b!==B.j)A.h(A.i(c))
r.bindBuffer(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.b(d.a))
A.HS(b,d,t.L.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.mD(a0,d,p,b,B.d.bd(a.length,n),t.tu.b(e))},
cP(a){var s=this.c.h(0,a.a)
if(s==null)throw A.a(A.eF(B.aS,a))
this.b.bx(a)
return s},
aM(a){var s,r,q=this.c.a7(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.b(q.c.a))
s.deleteBuffer(A.b(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.b(r.a))}this.b.aM(a)},
f8(){var s,r,q,p
for(s=this.b.cI(),r=s.$ti,s=new A.d4(s.a(),r.i("d4<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.b3(p.b))}},
gcJ(){return this.b.cI().b8(0,0,new A.t_(),t.S)}}
A.rZ.prototype={
$3(a,b,c){return new A.bN(A.j(a),A.j(b),A.ac(c))},
$S:104}
A.t_.prototype={
$2(a,b){var s,r
A.j(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.C8(s)
return a+r+s},
$S:110}
A.is.prototype={}
A.t0.prototype={
nF(a){var s,r,q,p,o=A.KO(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.h(A.i("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.k(0,s,q+1)
r.toString
return r}p=new A.is(o,1,A.KU(A.Ei(a)))
m.k(0,n,p)
this.c.k(0,n,1)
return p},
aM(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.a(A.i("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.a7(0,p)
q.a7(0,p)}else s.k(0,p,r-1)}}
A.t2.prototype={
D(){var s=this
return A.E(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hz.prototype={
jI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.Q)A.h(A.i("model package binding is disposed"))
if(c.x==null)throw A.a(A.i("model package is not attached"))
for(s=c.z,r=s.length,q=c.d,p=q.a,o=p.$ti,n=o.c,m=p.b,o=o.y[1],l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=q.oz(k).b
i=j.a
h=j.c
g=new A.aS(i,j.b,h,a,j.e,j.f,j.r,j.w,j.x,j.y)
h.B()
n.a(i)
p.a8(i)
i=i.a
if(!(i>=0&&i<m.length))return A.e(m,i)
f=m[i].c
i=(f==null?o.a(f):f).d
h=h.ak()
i=i.gaA()
e=A.C(i)
d=A.bb(new A.I(i,e.i("B(1)").a(h.gaF()),e.i("I<1,B>")))
e=q.b
h=e.$ti
h.c.a(k)
h.y[1].a(g)
e.a8(k)
e=e.b
h=k.a
if(!(h>=0&&h<e.length))return A.e(e,h)
e[h].sb5(g)
q.c.k(0,k,new A.b3(k,g,d))}},
W(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.ho(s,r,q.x)
B.a.R(s)
B.a.R(r)
q.x=null},
kz(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.a,a6=A.GC(a4.b,a9,a5),a7=A.d([],t.d),a8=A.d([],t.s3)
try{s=0
a5=a5.a
o=a5.e
n=a4.d
m=a4.f
l=a4.r
k=n.a
j=k.$ti
i=j.c
h=k.b
g=a4.c
a5=a5.b+":"
f=a4.e
j=j.y[1]
for(;;){e=s
d=o.length
if(typeof e!=="number")return e.cU()
if(!(e<d))break
r=B.a.h(o,s)
q=f.$1(r.b)
if(q.a<0){a5=A.i("invalid material for package slot "+r.b)
throw A.a(a5)}e=B.a.h(a6.b,s).c
d=r.a
if(g.x)A.h(A.i("resource library is disposed"))
c=g.a
e.B()
b=c.b.aI(e,a5+d+":"+a9)
c.c.k(0,b.a,c.b3(e))
g.f.l(0,b)
p=b
J.el(a7,p)
e=p
c=new A.aS(e,q,m,l,B.C,B.A,!0,!0,0,null)
m.B()
i.a(e)
k.a8(e)
e=e.a
if(!(e>=0&&e<h.length))return A.e(h,e)
a=h[e].c
e=(a==null?j.a(a):a).d
d=m.ak()
e=e.gaA()
a0=A.C(e)
a1=A.bb(new A.I(e,a0.i("B(1)").a(d.gaF()),a0.i("I<1,B>")))
a2=n.b.bw(c)
n.c.k(0,a2,new A.b3(a2,c,a1))
J.el(a8,a2)
e=s
if(typeof e!=="number")return e.S()
s=e+1}return new A.jV(a6,a8,a7)}catch(a3){a4.ho(a8,a7,a6)
throw a3}},
ho(a,b,c){var s,r,q,p,o
t.xp.a(a)
t.qr.a(b)
for(s=A.C(a).i("bO<1>"),r=new A.bO(a,s),r=new A.an(r,r.gu(0),s.i("an<a1.E>")),q=this.d,p=q.b,q=q.c,s=s.i("a1.E");r.m();){o=r.d
if(o==null)o=s.a(o)
p.aM(o)
q.a7(0,o)}for(s=A.C(b).i("bO<1>"),r=new A.bO(b,s),r=new A.an(r,r.gu(0),s.i("an<a1.E>")),q=this.c,s=s.i("a1.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.h(A.i("resource library is disposed"))
q.a.aM(p)
q.f.a7(0,p)}if(c!=null)c.ps()}}
A.d_.prototype={
C(){return"QmeshRejection."+this.b}}
A.md.prototype={
t(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.z0.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.c7.prototype={}
A.e4.prototype={
C(){return"TextureResidencyStatus."+this.b}}
A.cl.prototype={}
A.vx.prototype={
dg(a){var s=this.a,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.vy(a)),r.i("F<1>")).gu(0)}}
A.vy.prototype={
$1(a){return t.o.a(a).b===this.a},
$S:112}
A.vv.prototype={
dS(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.m(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.h(A.p("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.h(A.a7(n,"handle","must be valid"))
if(s.J(o))throw A.a(A.p("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("am<2>")
m=A.J(new A.am(s,r),r.i("t.E"))
B.a.Y(m,new A.vw())
r=t.Aj
l=A.a0(r)
k=A.m(r,t.bp)
j=A.d([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.lK(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.cl(p,i))}r=l.a
return new A.vx(A.ab(j,t.o),r)},
lK(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.u()
if(s.dh(a,r)===s.d)return B.eG
this.b.k(0,a,!0)
return B.eF}catch(q){if(A.al(q) instanceof A.lw){s=this.b.h(0,a)===!0?B.eI:B.eH
return s}else throw q}}}
A.vw.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.H(b.c,a.c)
return s===0?B.c.H(a.a,b.a):s},
$S:114}
A.dA.prototype={}
A.mz.prototype={
b2(a){var s=this.a,r=A.Aj(s,B.jB)
A.Ak(s,r,0,a)
return r},
pZ(a,b){var s,r,q,p=this,o=p.b,n=o.bx(a),m=A.J(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.fi(a,new A.dA(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.Aj(p.a,s)
o.k(0,r,q)}A.Ak(p.a,q,0,b)},
ob(a){var s,r=this.b,q=r.bx(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.a(A.i("TextureStore.finalizeMips: no pixels uploaded yet for "+a.t(0)))
A.CX(this.a,s)
r.fi(a,new A.dA(p,q.b,!0))},
ov(a){return B.a.a5(this.b.bx(a).b,new A.vA())},
dh(a,b){var s
this.b.bx(a)
s=this.c.h(0,a.a)
return s==null?b:s},
pB(a){var s
if(a==null){s=this.d
s===$&&A.u()
return s}s=this.d
s===$&&A.u()
return this.dh(a,s)},
pK(a){var s
if(a==null){s=this.e
s===$&&A.u()
return s}s=this.e
s===$&&A.u()
return this.dh(a,s)},
pM(a){var s=this.f
s===$&&A.u()
return s},
pD(a){var s=this.r
s===$&&A.u()
return s},
pI(a){var s=this.w
s===$&&A.u()
return s},
W(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.R(0)
s=n.d
s===$&&A.u()
A.mU(q,s)
s=n.e
s===$&&A.u()
A.mU(q,s)
s=n.f
s===$&&A.u()
A.mU(q,s)
s=n.r
s===$&&A.u()
A.mU(q,s)
s=n.w
s===$&&A.u()
A.mU(q,s)},
f8(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b2($.Bk())
i.e=i.b2($.Bh())
i.f=i.b2($.Bi())
i.r=i.b2($.Bg())
i.w=i.b2($.Bj())
for(s=i.b.cI(),r=s.$ti,s=new A.d4(s.a(),r.i("d4<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a5(o,new A.vC()))continue
l=A.Aj(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.Ak(p,l,k,j)}if(m.c)A.CX(p,l)
q.k(0,n.a,l)}},
gcJ(){return this.b.cI().b8(0,0,new A.vB(),t.S)}}
A.vz.prototype={
$3(a,b,c){return new A.bx(A.j(a),A.j(b),A.ac(c))},
$S:122}
A.vA.prototype={
$1(a){return t.Fx.a(a)!=null},
$S:42}
A.vC.prototype={
$1(a){return t.Fx.a(a)==null},
$S:42}
A.vB.prototype={
$2(a,b){var s
A.j(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:131}
A.bn.prototype={
C(){return"SolarPhase."+this.b}}
A.vk.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a5("timeHours",e.a),new A.a5("solarNoonHours",s),new A.a5("latitudeRadians",r),new A.a5("solarDeclinationRadians",q),new A.a5(d,p),new A.a5(c,o),new A.a5("aerosolTurbidity",n),new A.a5(b,m),new A.a5("solarIntensity",e.x),new A.a5("baseFogDensity",l),new A.a5("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.a(A.p(g+" must be finite",a))}if(s>=24)throw A.a(A.p("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.a(A.p("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.a(A.p("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a5(d,p),new A.a5(c,o),new A.a5(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.a(A.p(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.a(A.p("solar attenuation inputs are out of bounds",a))}}
A.hQ.prototype={}
A.cp.prototype={
B(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.gU(0)){s=p.c
if(s.gU(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.a(A.p("invalid volumetric source "+o,null))}}
A.zJ.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.H(b.a,a.a)
return s===0?B.c.H(a.b.a,b.b.a):s},
$S:135}
A.w_.prototype={}
A.dU.prototype={
gop(){return this.b.length}}
A.lh.prototype={
mL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.u4(A.d([],t.pq),A.a0(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].aC(s,b)
o=s.mK(a,!1)
if(o.b.length!==0)return new A.li(o,B.lr)
q=o.a
n=A.C(q)
m=new A.I(q,n.i("f(1)").a(new A.q4()),n.i("I<1,f>")).bc(0)
l=A.d([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.aB(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.r)(n),++i){h=n[i]
if(!m.q(0,h.gG().a))throw A.a(A.i('RenderFeature "'+k.gaj()+'" created a pass "'+h.gG().a+'" that it never declared into the graph'))
B.a.l(l,h)}}B.a.Y(l,new A.q5(o))
return new A.li(o,l)},
bY(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].W()}}
A.q4.prototype={
$1(a){return t.A.a(a).a},
$S:139}
A.q5.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.H(B.a.f_(s,new A.q2(a)),B.a.f_(s,new A.q3(b)))},
$S:143}
A.q2.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:12}
A.q3.prototype={
$1(a){return t.A.a(a).a===this.a.gG().a},
$S:12}
A.li.prototype={}
A.fj.prototype={
C(){return"FrameQueueState."+this.b}}
A.ln.prototype={
ci(a){var s,r,q=this
if(q.b!==B.av)throw A.a(A.i("FrameQueue.submit called outside an active frame"))
a.c.B()
s=q.c
r=q.a
if(s<r.length)B.a.k(r,s,a)
else B.a.l(r,a);++q.c},
$iH6:1}
A.qa.prototype={
mH(a){if(a.length===0)throw A.a(A.a7(a,"passId",null))
this.b=a
this.a.c6(a,A.Ek())},
jX(){var s,r,q,p,o=t.z
o=A.m(o,o)
for(s=this.a,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.b1(p.a,p.b,p.d))}return A.aX(o,t.N,t.pH)},
bR(a,b){var s,r=this.b
if(r==null)throw A.a(A.i("draw recorded outside an active render pass"))
if(b<1)throw A.a(A.p("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.af(a,3)*b}}
A.hV.prototype={}
A.aw.prototype={
gc9(){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.tp()),r.i("F<1>"))},
gcT(){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.tq()),r.i("F<1>"))},
t(a){return"PassDeclaration("+this.a+" @ "+this.b.t(0)+")"}}
A.tp.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.U},
$S:19}
A.tq.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:19}
A.cx.prototype={
C(){return"GraphValidationFailureKind."+this.b}}
A.bD.prototype={
t(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.ji.prototype={
C(){return"ResourceFormat."+this.b}}
A.df.prototype={
C(){return"GraphStage."+this.b}}
A.aR.prototype={
iT(){var s=this
return new A.aR(s.a,s.b,s.c,s.d,s.e,s.f+1)},
ab(a,b){var s=this
if(b==null)return!1
return b instanceof A.aR&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gV(a){var s=this
return A.cY(s.a,s.b,s.c,s.d,s.e,s.f)},
t(a){var s=this,r=s.b.t(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.hI.prototype={
C(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.iw.prototype={}
A.mb.prototype={
aE(a){var s,r,q,p,o,n,m=this
a.B()
s=null
try{r=t.a
s=A.HV(m.a,a.c,r.a(a.d.ga6().bL(0)),r.a(a.f),a.b)}catch(q){if(A.al(q) instanceof A.jn){++m.e
throw q}else throw q}p=new A.iw(s)
r=m.b
o=a.a
n=r.h(0,o)
r.k(0,o,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.b(n.b.a))
return p},
bY(){var s=this.b
this.l1(new A.am(s,A.w(s).i("am<2>")))
s.R(0)},
l1(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ad(s,s.r,s.e,a.$ti.i("ad<1>")),r=this.a.a;s.m();)r.deleteProgram(A.b(s.d.b.a))}}
A.bl.prototype={
B(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.a(A.p("ProgramSource.id must not be empty",m))
s=t.S
r=A.a0(s)
for(q=this.d.gN(),q=q.gA(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.a(A.p('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.a(A.p('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a0(s)
for(s=this.e.gN(),s=s.gA(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.a(A.p('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.a(A.p('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}}}
A.u2.prototype={}
A.bf.prototype={
aq(){var s=this
return A.BJ(B.fl,s.f,B.aJ,B.aq,!0,!0,!0,!0,s.r,B.aN,B.aO,s.d,s.e,!0,!1,!1)}}
A.u4.prototype={
mK(a,b){var s=this.mh(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.u3(A.ab(new A.F(r,q.i("l(1)").a(new A.u9()),q.i("F<1>")),t.A),s)},
mh(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.d([],t.ka)
r=m.a
q=A.C(r)
p=q.i("F<1>")
o=A.J(new A.F(r,q.i("l(1)").a(new A.u8()),p),p.i("t.E"))
m.kG(o,a,s)
m.kK(o,s)
m.kM(o,s)
m.kJ(o,!1,s)
n=m.kO(o,s)
m.kL(o,n,s)
m.kN(o,s)
m.kI(o,n,s)
m.kH(o,s)
return s},
kG(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.ah.bH(b)
if(p.a!==0)B.a.l(c,new A.bD(B.jN,q.a,"missing capabilities: "+p.a_(0,", ")))}},
kK(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gc9(),o=J.N(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.l(b,new A.bD(B.jI,n,"reads multisampled resource "+m.t(0)+" directly; resolve before sampling"))}}},
kM(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.u7()),q=B.a.gA(a),s=new A.R(q,r,s.i("R<1>"));s.m();){r=q.gp()
p=r.gc9()
o=A.J(p,p.$ti.i("t.E"))
p=r.gcT()
n=A.J(p,p.$ti.i("t.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bD(B.bl,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbn(o).a
l=B.a.gbn(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bD(B.bl,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bD(B.bl,r.a,"resolve source and destination must match format and extent"))}},
kJ(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.U)B.a.l(c,new A.bD(B.jL,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kO(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.m(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcT(),n=J.N(o.a),o=new A.R(n,o.b,o.$ti.i("R<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bD(B.jH,m,l.t(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kL(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gc9(),p=J.N(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.U)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bD(B.dr,o,"reads "+n.t(0)+" but no pass writes that version"))
continue}if(B.a.bI(a,m)>s)B.a.l(c,new A.bD(B.dr,o,"reads "+n.t(0)+" before writer "+m.a+" runs"))}}},
kN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gc9(),o=J.N(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.U)continue
for(l=q.gcT(),k=J.N(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bD(B.jK,n,"reads and writes "+m.t(0)+" at the same version; declare a ping-pong version bump"))}}}},
kI(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gc9(),o=J.N(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.U)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcT().au(0,new A.u6(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bD(B.jJ,n,"reads "+l.t(0)+" but writer "+k.a+" produced "+j.t(0)))}}},
kH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.m(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcT(),o=J.N(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>"));p.m();){n=o.gp().a
r.k(0,n.a+"#"+n.f,q)}m=J.ro(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a0(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gc9(),p=J.N(s.a),s=new A.R(p,s.b,s.$ti.i("R<1>"));s.m();){o=p.gp()
if(o.b===B.U)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].l(0,q)}}p=t.y
j=A.dj(s,!1,!1,p)
s=a.length
i=A.dj(s,!1,!1,p)
h=new A.u5(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.l(b,new A.bD(B.jM,a[q].a,"participates in a resource dependency cycle"))}}}}
A.u9.prototype={
$1(a){t.A.a(a)
return A.Ab()},
$S:12}
A.u8.prototype={
$1(a){t.A.a(a)
return A.Ab()},
$S:12}
A.u7.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.u6.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:19}
A.u5.prototype={
$1(a){var s,r,q,p,o=this,n=o.a
if(!(a>=0&&a<n.length))return A.e(n,a)
if(n[a])return!0
s=o.b
if(!(a<s.length))return A.e(s,a)
if(s[a])return!1
B.a.k(n,a,!0)
r=o.c
if(!(a<r.length))return A.e(r,a)
r=r[a]
r=A.eW(r,r.r,A.w(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:21}
A.u3.prototype={}
A.b3.prototype={$icB:1,
gaj(){return this.a},
gG(){return this.b},
gfn(){return this.c}}
A.jf.prototype={
es(a){var s,r,q,p=a.c
p.B()
s=this.a.bx(a.a)
p=p.ak()
r=s.d.gaA()
q=A.C(r)
return A.bb(new A.I(r,q.i("B(1)").a(p.gaF()),q.i("I<1,B>")))},
ev(a){var s=this.es(a),r=this.b.bw(a)
this.c.k(0,r,new A.b3(r,a,s))
return r},
pY(a,b){var s=this.es(b)
this.b.fi(a,b)
this.c.k(0,a,new A.b3(a,b,s))},
oz(a){var s,r=this.c.h(0,a)
if(r!=null)return r
s=this.b.bx(a)
return new A.b3(a,s,this.es(s))},
$iH9:1}
A.ua.prototype={
$3(a,b,c){return new A.cT(A.j(a),A.j(b),A.ac(c))},
$S:150}
A.mi.prototype={
ghM(){var s=this.d
return s===$?this.d=new A.vv(this.c,A.m(t.Aj,t.y)):s},
bb(a,b){var s,r
if(this.x)A.h(A.i("resource library is disposed"))
s=this.a
a.B()
r=s.b.aI(a,b)
s.c.k(0,r.a,s.b3(a))
this.f.l(0,r)
return r},
pt(a){if(this.x)A.h(A.i("resource library is disposed"))
this.a.aM(a)
this.f.a7(0,a)},
j6(a,b,c,d,e,f,g){var s,r
if(this.x)A.h(A.i("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.h(A.p("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.h(A.p("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.aI(new A.dA(new A.lt(f,d,1,!0,e,B.bj,g,a),A.dj(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
dU(a,b,c,d,e,f){return this.j6(a,b,c,d,e,f,B.dp)},
W(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.J(s,A.w(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.a7(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aM(k)}r=i.r
q=A.J(r,A.w(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.aM(q[l])
q=i.f
o=A.J(q,A.w(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.aM(o[l])
s.R(0)
r.R(0)
q.R(0)
p.W()
i.x=!0},
$iHb:1}
A.wu.prototype={}
A.nC.prototype={$icB:1,
gaj(){return this.a},
gG(){return this.b},
gfn(){return this.c}}
A.yc.prototype={
$1(a){var s=this.a.w.a.cP(a),r=s.b!=null,q=r?s.d:s.e
return new A.jh(s.c,r,q,s.f)},
$S:155}
A.yd.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gp().iU(a)
if(b!=null&&s.q(0,b))return this.b.x.gp().iU(b)
throw A.a(A.i("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:163}
A.yb.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.y4.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.k1
return r==null||r.length===0?null:B.a.ga1(r)},
$S:181}
A.y5.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bB
s=q.b.k1
r=s.length===0?null:B.a.ga1(s)
return A.Lj(s,3,q.a.d,r)},
$S:192}
A.ya.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.y_.prototype={
$0(){return this.a.at.a},
$S:196}
A.y1.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.y0.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.y9.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.xY.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.xZ.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.y6.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.y7.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.y8.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.u()
return s},
$S:5}
A.y3.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.y2.prototype={
$0(){return this.a.at.w},
$S:198}
A.yf.prototype={
$0(){return this.a},
$S:211}
A.yg.prototype={
$0(){var s,r,q=this.a.b.k4,p=q==null?null:q.b
if(p==null||!this.b.w.c.ov(p))return null
s=this.b.w.c
r=s.d
r===$&&A.u()
return s.dh(p,r)},
$S:58}
A.xb.prototype={}
A.no.prototype={$iH8:1}
A.nb.prototype={$iG7:1}
A.ul.prototype={
gao(){var s=this.w
return s==null?A.h(A.i("renderer is not initialized")):s},
iP(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.c2)throw A.a(A.i("renderer can only be initialized once"))
a.B()
b.B()
s=m.a
if(s.b===B.a6)throw A.a(A.i("renderer device is context lost"))
m.e=B.pb
try{m.r=s.j4()
r=m.b
if(r.d)A.h(A.i("configuration coordinator is disposed"))
q=A.j3(a)
p=r.a
if(p.e)A.h(A.i("configuration state is disposed"))
if(p.a!=null)A.h(A.i("configuration state is already initialized"))
a.B()
p.a=a
p.b=A.j3(a)
p.d=1
r.b.iO(q)
r=A.Gz()
m.w=new A.mi(A.GB(s),r,A.Hv(s),A.a0(t.kc),A.a0(t.pw),A.a0(t.Aj))
r=new A.jj()
p=new A.qy(s,r)
q=A.j3(a)
o=p.ec(q,a)
r.iO(q)
p.c=new A.hC(new A.m8(0,q,B.c4),o,B.aw)
m.x=p
m.y=new A.mb(s,A.m(t.N,t.CH))
m.as=a
A.DA(m)
m.e=B.c3}catch(n){s=m.y
if(s!=null)s.bY()
s=m.x
if(s!=null)s.W()
s=m.w
if(s!=null)s.W()
m.w=null
m.b.W()
m.b=new A.kX(new A.kY(),new A.jj())
m.e=B.c2
throw n}return A.BN(t.H)},
mF(a,b){var s,r,q,p,o=this
o.lR()
o.cm()
r=B.a.q(o.d,a)
if(!r)throw A.a(A.p("world was not created by this renderer",null))
if(o.at!=null)throw A.a(A.i("renderer.beginFrame called twice without end/abort"))
b.a.B()
b.b.B()
b.c.B()
r=b.w
if(!isFinite(r))A.h(A.p("FrameInput.timeSeconds must be finite: "+A.z(r),null))
o.at=b
o.ax=a
q=o.c
if(q.b===B.av)A.h(A.i("FrameQueue.beginFrame called twice without end/abort"))
q.b=B.av
q.c=0
B.a.R(q.a)
s=q
try{r=o.r
if((r==null?A.h(A.i("renderer is not initialized")):r).z)o.b$=o.a.mG()
return s}catch(p){if(q.b!==B.av)A.h(A.i("FrameQueue.abortFrame called without an active frame"))
q.c=0
q.b=B.ji
o.fM()
o.ax=o.at=null
throw p}},
o2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cm()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.a(A.i("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.av)A.h(A.i("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hP(l,0,A.ej(m.c,"count",t.S),A.C(l).c).cb(0,!1)
m.b=B.jh
q=k
try{p=A.Jc(a1,r,s,q)
o=p.a.jX()
m=o.gN().dY(0,new A.um())
l=m.$ti
n=new A.cX(m,l.i("b1(1)").a(new A.un()),l.i("cX<1,b1>")).b8(0,B.d1,new A.uo(),t.pH)
l=s.e
m=n.a
j=n.b
i=p.c
h=n.d
p.toString
g=a1.w
f=g.a.gcJ()
g=g.c.gcJ()
e=a1.w
e.a.gcJ()
e.c.gcJ()
e=a1.w
d=e.a.b
c=d.d
b=e.b.a
a=b.d
e=e.c.b
a0=e.d
d=d.e
b=b.e
e=e.e
return new A.qb(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.lc(s.e)
a1.ax=a1.at=null}},
lR(){var s,r,q,p=this
if(p.e!==B.eo)return
if(p.a.b===B.a6)throw A.a(A.i("renderer context remains lost"))
s=p.w
if(s.x)A.h(A.i("resource library is disposed"))
s.a.f8()
s.c.f8()
s=p.x
s.toString
r=p.as
r.toString
if(s.e)A.h(A.i("GPU resource adapter is disposed"))
q=s.c
if(q==null)A.h(A.i("GPU resource adapter is not initialized"))
s.c=new A.hC(q.a,s.ec(A.j3(r),r),B.aw)
s=p.y
s.c=null
s.b.R(0)
A.DA(p)
p.e=B.c3},
cm(){var s=this,r=s.e
if(r!==B.c3)throw A.a(A.i("renderer is not ready: "+r.b))
if(s.a.b===B.a6){s.l2()
s.e=B.eo
throw A.a(A.i("renderer context lost"))}}}
A.um.prototype={
$1(a){return B.c.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:59}
A.un.prototype={
$1(a){return t.h6.a(a).b},
$S:60}
A.uo.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.b1(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:61}
A.nl.prototype={}
A.wG.prototype={
lc(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.h(A.i(u.k))
r=s.hO(o)
if(r.b)A.h(A.i("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.nl(o))}catch(q){p.ee(o)}},
fM(){var s=this.b$
this.b$=null
if(s!=null)this.ee(s)},
l2(){var s,r,q
this.fM()
s=this.a$
r=J.A1(s.slice(0),A.C(s).c)
B.a.R(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.ee(r[q].b)},
ee(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hO(a).a)}catch(r){}}}
A.ns.prototype={}
A.jp.prototype={
C(){return"ShadowCasterLod."+this.b}}
A.c1.prototype={
H(a,b){var s,r=this
t.BB.a(b)
s=B.d.H(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.H(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.H(r.c.a,b.c.a)
if(s!==0)return s
return B.d.H(r.d,b.d)},
$ibs:1}
A.bX.prototype={
H(a,b){var s
t.z3.a(b)
s=B.b.H(b.a,this.a)
if(s!==0)return s
return B.d.H(this.b,b.b)},
$ibs:1}
A.b6.prototype={}
A.zN.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.H(0,s.a(b).a)},
$S:62}
A.zO.prototype={
$1(a){return t.E0.a(a).b},
$S:63}
A.zL.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.H(0,s.a(b).a)},
$S:64}
A.zM.prototype={
$1(a){return t.EH.a(a).b},
$S:65}
A.pN.prototype={}
A.pM.prototype={}
A.h4.prototype={
gaA(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.d([new A.B(o,n,p),new A.B(r,n,p),new A.B(o,q,p),new A.B(r,q,p),new A.B(o,n,s),new A.B(r,n,s),new A.B(o,q,s),new A.B(r,q,s)],t.k)},
t(a){return"Aabb("+this.a.t(0)+", "+this.b.t(0)+")"}}
A.fv.prototype={}
A.hn.prototype={
C(){return"FrustumTest."+this.b}}
A.qc.prototype={
ja(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a,r=a1.b,q=r.c,p=r.b,r=r.a,o=a1.a,n=o.c,m=o.b,o=o.a,l=!1,k=0;k<6;++k){j=s[k]
i=j.a
h=i.a
g=h>=0
f=g?r:o
e=i.b
d=e>=0
c=d?p:m
i=i.c
b=i>=0
a=b?q:n
a0=j.b
if(h*f+e*c+i*a+a0<0)return B.bf
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.jj:B.jk}}
A.qd.prototype={
$4(a,b,c,d){var s=new A.B(a,b,c),r=new A.fv(s,d),q=Math.sqrt(s.gbj())
return q<1e-9?r:new A.fv(s.a3(0,1/q),d/q)},
$S:66}
A.dk.prototype={
a3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.dk(h)},
jc(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.cV.a(a)
s=a.a
r=this.a
q=r.length
if(0>=q)return A.e(r,0)
p=r[0]
o=a.b
if(4>=q)return A.e(r,4)
n=r[4]
m=a.c
if(8>=q)return A.e(r,8)
l=r[8]
if(12>=q)return A.e(r,12)
k=s*p+o*n+m*l+r[12]
l=r[1]
n=r[5]
p=r[9]
if(13>=q)return A.e(r,13)
j=s*l+o*n+m*p+r[13]
p=r[2]
n=r[6]
l=r[10]
if(14>=q)return A.e(r,14)
i=s*p+o*n+m*l+r[14]
l=r[3]
n=r[7]
p=r[11]
if(15>=q)return A.e(r,15)
h=s*l+o*n+m*p+r[15]
return h===0||h===1?new A.B(k,j,i):new A.B(k/h,j/h,i/h)},
f3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this.a,d=e.length
if(0>=d)return A.e(e,0)
s=e[0]
if(5>=d)return A.e(e,5)
r=e[5]
if(10>=d)return A.e(e,10)
d=e[10]
q=e[9]
p=e[6]
o=r*d-q*p
n=e[4]
m=e[1]
l=e[2]
k=s*o-n*(m*d-q*l)+e[8]*(m*p-r*l)
if(!isFinite(k)||Math.abs(k)<1e-12)A.h(A.i("Mat4.inverse3x3: singular upper-left 3x3 (det="+A.z(k)+")"))
j=1/k
i=new Float32Array(16)
i[0]=o*j
i[1]=(e[8]*e[6]-e[4]*e[10])*j
i[2]=(e[4]*e[9]-e[8]*e[5])*j
i[4]=(e[9]*e[2]-e[1]*e[10])*j
i[5]=(e[0]*e[10]-e[8]*e[2])*j
i[6]=(e[8]*e[1]-e[0]*e[9])*j
i[8]=(e[1]*e[6]-e[5]*e[2])*j
i[9]=(e[4]*e[2]-e[0]*e[6])*j
i[10]=(e[0]*e[5]-e[4]*e[1])*j
i[15]=1
h=new Float32Array(16)
for(g=0;g<3;++g)for(e=g*4,f=0;f<3;++f){d=e+f
s=f*4+g
if(!(s<16))return A.e(i,s)
s=i[s]
if(!(d<16))return A.e(h,d)
h[d]=s}if(15>=16)return A.e(h,15)
h[15]=1
return new A.dk(h)},
iQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=J.ro(4,t.cE)
for(s=t.n,r=this.a,q=r.length,p=0;p<4;++p){if(!(p<q))return A.e(r,p)
o=r[p]
n=4+p
if(!(n<q))return A.e(r,n)
n=r[n]
m=8+p
if(!(m<q))return A.e(r,m)
m=r[m]
l=12+p
if(!(l<q))return A.e(r,l)
l=r[l]
k=p===0?1:0
j=p===1?1:0
i=p===2?1:0
a1[p]=new Float64Array(A.S(A.d([o,n,m,l,k,j,i,p===3?1:0],s)))}for(h=0;h<4;h=p){s=a1[h]
if(!(h<s.length))return A.e(s,h)
g=Math.abs(s[h])
for(p=h+1,f=p,e=h;f<4;++f){r=a1[f]
if(!(h<r.length))return A.e(r,h)
d=Math.abs(r[h])
if(d>g){g=d
e=f}}if(!isFinite(g)||g<1e-12)throw A.a(A.i("Mat4.inverse: singular matrix"))
if(e!==h){if(!(e>=0&&e<4))return A.e(a1,e)
a1[h]=a1[e]
a1[e]=s}s=a1[h]
if(!(h<s.length))return A.e(s,h)
c=s[h]
for(b=0;b<8;++b){if(!(b<s.length))return A.e(s,b)
r=s[b]
s.$flags&2&&A.aW(s)
s[b]=r/c}for(f=0;f<4;++f){if(f===h)continue
s=a1[f]
if(!(h<s.length))return A.e(s,h)
a=s[h]
if(a===0)continue
for(b=0;b<8;++b){if(!(b<s.length))return A.e(s,b)
r=s[b]
q=a1[h]
if(!(b<q.length))return A.e(q,b)
q=q[b]
s.$flags&2&&A.aW(s)
s[b]=r-a*q}}}a0=new Float32Array(16)
for(p=0;p<4;++p)for(h=0;h<4;++h){s=h*4+p
r=a1[p]
q=4+h
if(!(q<r.length))return A.e(r,q)
q=r[q]
if(!(s<16))return A.e(a0,s)
a0[s]=q}return new A.dk(a0)},
gU(a){return B.n.a5(this.a,new A.rO())},
t(a){return"Mat4("+A.z(this.a)+")"}}
A.rO.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.me.prototype={
t(a){var s=this
return"Quat("+A.z(s.a)+", "+A.z(s.b)+", "+A.z(s.c)+", "+A.z(s.d)+")"}}
A.eM.prototype={
B(){var s=this.a
if(!s.gU(0))throw A.a(A.p("Transform.translation must be finite: "+s.t(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.a(A.p("Transform.rotation must be finite: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.a(A.p("Transform.scale must be finite and positive: "+A.z(s),null))},
ak(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.C5(A.d([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
e=h.length
if(0>=e)return A.e(h,0)
g=h[0]
p=this.c
if(1>=e)return A.e(h,1)
o=h[1]
if(2>=e)return A.e(h,2)
n=h[2]
if(4>=e)return A.e(h,4)
m=h[4]
if(5>=e)return A.e(h,5)
l=h[5]
if(6>=e)return A.e(h,6)
k=h[6]
if(8>=e)return A.e(h,8)
j=h[8]
if(9>=e)return A.e(h,9)
i=h[9]
if(10>=e)return A.e(h,10)
e=this.a
return A.C5(A.d([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
t(a){return"Transform("+this.a.t(0)+", "+this.b.t(0)+", scale="+A.z(this.c)+")"}}
A.B.prototype={
S(a,b){return new A.B(this.a+b.a,this.b+b.b,this.c+b.c)},
Z(a,b){return new A.B(this.a-b.a,this.b-b.b,this.c-b.c)},
a3(a,b){return new A.B(this.a*b,this.b*b,this.c*b)},
bh(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b6(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.B(s*r-q*p,q*o-n*r,n*p-s*o)},
gbj(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbj())},
gU(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga2(){var s=this,r=Math.sqrt(s.gbj())
return r<1e-9?B.v:new A.B(s.a/r,s.b/r,s.c/r)},
ab(a,b){if(b==null)return!1
return b instanceof A.B&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gV(a){return A.cY(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"Vec3("+A.z(this.a)+", "+A.z(this.b)+", "+A.z(this.c)+")"}}
A.ip.prototype={
C(){return"AtmosphericParticleAnchor."+this.b}}
A.oz.prototype={
B(){if(this.a<0)throw A.a(A.p("atmospheric particle counts must be >= 0",null))},
gnZ(){return B.d.n(this.a,0,this.b)}}
A.oC.prototype={}
A.oA.prototype={}
A.h7.prototype={}
A.h6.prototype={
B(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.a(A.p("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.d([new A.a5("origin",l.d),new A.a5("halfExtents",s),new A.a5("initialVelocity",l.f),new A.a5("acceleration",l.r)],t.c2)
r.push(new A.a5("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.a(A.p("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.a(A.p("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.a(A.p("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.a(A.p("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.a(A.p("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.a(A.p("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.a(A.p("AtmosphericParticleField.particleScale must be finite and > 0",k))},
ce(a,b){var s,r,q,p,o,n=this,m=null
n.B()
s=n.z
if(b>=s)throw A.a(A.b2(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.O(a.w+n.d2(b,0)*r,r)
switch(n.c.a){case 0:s=B.v
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.S(0,n.d).S(0,new A.B((n.d2(b,1)*2-1)*p.a,(n.d2(b,2)*2-1)*p.b,(n.d2(b,3)*2-1)*p.c))
p=o.S(0,n.l3(q))
s=n.mk(q)
if(!isFinite(q)||q<0)A.h(A.p("atmospheric particle age must be finite and >= 0",m))
if(!o.gU(0)||!p.gU(0)||!s.gU(0))A.h(A.p("atmospheric particle kinematics must be finite",m))
return new A.h7(q,o,p,s)},
cj(a,b){return this.fI(a,b,new A.oB())},
fI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
t.C3.a(c)
i.B()
for(s=i.z,r=i.as,q=i.cy,p=i.at,o=i.a,n=i.b,m=0,l=0;l<s;++l){k=i.ce(b,l)
if(!c.$1(k))continue
j=p?i.fS(k.d):B.af
a.ci(new A.aS(o,n,new A.eM(k.c,j,r),-1,B.as,B.A,!1,!1,l,q));++m}return m},
iG(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.B()
s=A.BM(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.ce(a,n)
if(p)h.fS(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.ja(new A.h4(new A.B(k-q,j-q,i-q),new A.B(k+q,j+q,i+q)))!==B.bf)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.h(A.p("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.h(A.i("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.oC(r,o,q)},
nL(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.B()
b.B()
s=i.z
r=b.a
q=b.b
if(s!==B.d.n(r,0,q))throw A.a(A.i("atmospheric field count "+s+" does not match budget effective count "+b.gnZ()))
p=i.iG(a)
for(o=0,n=0;n<s;++n){m=i.ce(a,n).d
l=m.a
k=m.b
m=m.c
o+=Math.sqrt(l*l+k*k+m*m)}m=B.d.n(r,0,q)
q=B.d.n(r,0,q)!==r
l=p.b
k=p.c
j=s===0?0:o/s
if(r<0||m<0||m>r||s!==m||k<0||l+k!==s||!isFinite(j)||j<0)A.h(A.i("atmospheric diagnostics do not reconcile"))
if(q!==(m!==r))A.h(A.i("atmospheric budget cap state does not reconcile"))
return new A.oA(r,m,q,s,l,k,j)},
mk(a){var s=this.w,r=Math.exp(-this.x*a)
return s.S(0,this.f.Z(0,s).a3(0,r))},
l3(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a3(0,a).S(0,this.f.Z(0,s).a3(0,(1-q)/r))},
fS(a){var s,r=a.ga2()
if(r.ab(0,B.v))return B.af
s=B.b.n(B.a4.bh(r),-1,1)
if(s>0.999999)return B.af
if(s<-0.999999)return A.hF(B.b0,3.141592653589793)
return A.hF(B.a4.b6(r),Math.acos(s))},
d2(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.oB.prototype={
$1(a){return!0},
$S:50}
A.lk.prototype={}
A.q8.prototype={
B(){var s,r,q,p,o,n,m,l,k,j=this,i=!0
if(j.a.a>=0)if(j.b.a>=0){s=j.d
if(isFinite(s))if(!(s<=0)){i=j.e
i=!isFinite(i)||i<=0}}if(i)throw A.a(A.p("invalid flow particle field",null))
for(i=j.c,s=i.length,r=0;r<i.length;i.length===s||(0,A.r)(i),++r){q=i[r]
p=q.a
o=p.a
n=!0
if(isFinite(o)&&isFinite(p.b)&&isFinite(p.c)){m=q.b
l=m.a
if(isFinite(l)&&isFinite(m.b)&&isFinite(m.c)){k=q.c
if(isFinite(k))if(!(k<=0)){k=q.d
if(isFinite(k))if(!(k<=0))if(q.e>=0){o=l-o
n=m.b-p.b
p=m.c-p.c
p=Math.sqrt(o*o+n*n+p*p)<0.00001}else p=n
else p=n
else p=n}else p=n
else p=n}else p=n}else p=n
if(p)A.h(A.p("invalid flow path",null))}},
cj(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
b4.B()
for(s=b4.c,r=b6.w,q=b4.d,p=b4.a,o=b4.b,n=b4.e,m=0,l=0;l<s.length;++l){k=s[l]
j=k.b
i=k.a
h=i.a
g=j.a-h
f=i.b
e=j.b-f
i=i.c
j=j.c-i
d=new A.B(g,e,j).ga2()
c=d.b
b=d.b6(Math.abs(c)>0.9?B.b0:B.G).ga2()
a=Math.sqrt(g*g+e*e+j*j)
for(a0=k.e,a1=k.f,a2=k.c,a3=a1^1327217884,a4=k.d,a5=b.a,a6=b.b,a7=b.c,a8=d.a*a2,c*=a2,a9=d.c*a2,b0=l*1e4,b1=0;b1<a0;++b1){b2=B.b.O(B.b.O(r+b4.hR(a1,b1),q)*a2,a)/a
b3=(b4.hR(a3,b1)*2-1)*a4
b5.ci(new A.aS(p,o,new A.eM(new A.B(h+g*b2+a5*b3,f+e*b2+a6*b3,i+j*b2+a7*b3),b4.m_(new A.B(a8,c,a9)),n),-1,B.as,B.A,!1,!1,b0+b1,1718382455));++m}}return m},
hR(a,b){return(((a^b*73244475)&2147483647)*1103515245+12345&2147483647)/2147483647},
m_(a){var s,r=a.ga2()
if(r.ab(0,B.v))return B.af
s=B.b.n(B.a4.bh(r),-1,1)
if(s>0.999999)return B.af
if(s<-0.999999)return A.hF(B.b0,3.141592653589793)
return A.hF(B.a4.b6(r),Math.acos(s))}}
A.jD.prototype={
C(){return"_BloomBlurAxis."+this.b}}
A.ir.prototype={
gaj(){return this.f},
aC(a,b){B.a.l(a.a,new A.aw(this.f,B.P,A.d([new A.Q(this.x,B.i),new A.Q(this.y,B.k)],t.C),!1))},
aB(a){var s=this,r=s.a.aE(new A.bl(s.e,s.b,s.c,B.y,B.dR,B.dN)),q=A.cF(s.d),p=t.n,o=s.r===B.eZ?new Float32Array(A.S(A.d([1/s.Q,0],p))):new Float32Array(A.S(A.d([0,1/s.as],p)))
p=s.y
return A.d([new A.n1(new A.bf(s.f,A.d([new A.Q(s.x,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
W(){},
$iaq:1}
A.n1.prototype={
ar(a){var s,r,q,p,o=this
if(a.d.f.b<=0)return
s=a.b
r=s.a
A.bJ(r,a.av(o.r).b)
A.bh(r,o.a.aq())
A.d2(r,B.X,1,0,0,0)
A.bR(r,o.b.b)
q=t._
p=o.d
if(o.e)A.HR(r,0,q.a(p.$0()))
else A.aB(r,0,q.a(p.$0()))
A.n(r,"uSource",B.x)
A.n(r,"uTexelStep",new A.q(B.ak,o.f))
A.bo(r,o.c)
s.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.kQ.prototype={
gaj(){return"bloomComposite"},
aC(a,b){B.a.l(a.a,new A.aw("bloomComposite",B.P,A.d([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
aB(a){var s=this,r="bloomComposite",q=s.a.aE(new A.bl(r,s.b,s.c,B.y,B.mt,B.m3)),p=A.cF(s.d),o=s.w,n=A.d([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.k)],t.C)
return A.d([new A.n2(new A.bf(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
W(){},
$iaq:1}
A.n2.prototype={
ar(a){var s,r,q=this,p=a.d.f.b
if(p<=0)return
s=a.b
r=s.a
A.bJ(r,a.cd(q.f).b)
A.CT(r,1)
A.bh(r,B.cT)
A.bR(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.n(r,"uBloom",B.x)
A.n(r,"uBloomStrength",new A.q(B.e,p))
A.bo(r,q.c)
s.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.l5.prototype={
gaj(){return"depthPrepass"},
aC(a,b){B.a.l(a.a,new A.aw("depthPrepass",B.jE,A.d([new A.Q(this.w,B.k)],t.C),!1))},
aB(a){var s=this,r="depthPrepass",q=s.a.aE(new A.bl(r,s.b,s.c,B.dQ,B.dP,B.l8))
return A.d([new A.n6(new A.bf(r,A.d([new A.Q(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
W(){},
$iaq:1}
A.n6.prototype={
ar(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.d,a0=a.f,a1=b.a
A.bJ(a1,a2.av("sceneDepth").b)
A.bh(a1,d.a.aq())
A.d2(a1,B.bc,1,0,0,0)
A.bR(a1,d.b.b)
A.n(a1,"uVertexSnapGrid",new A.q(B.e,a0.ax))
A.n(a1,"uAlbedo",B.x)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gG()
A.n(a1,"uViewProjection",new A.q(B.p,new Float32Array(A.S(a))))
A.n(a1,"uModel",new A.q(B.p,new Float32Array(A.S(i.c.ak().a))))
A.zK(b,k,!1)
d.m3(b,j.gG().b,p)
h=q.$1(j.gG().a)
i=h.a
if(a1.b!==B.j)A.h(A.i(c))
m.bindVertexArray(A.b(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.j)A.h(A.i(c))
e=A.j(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.j(o.WebGL2RenderingContext.UNSIGNED_INT):A.j(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bR(g,f)}else{if(a1.b!==B.j)A.h(A.i(c))
m.drawArraysInstanced(A.j(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bR(g,f)}}},
m3(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.n(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b5?r.fy:0))
A.n(q,"uAffineWarpStrength",new A.q(B.e,0))
s=this.a.aq()
A.bh(q,r.go?s.fm(!1):s)},
$iae:1,
gG(){return this.a}}
A.jF.prototype={
C(){return"_DofBlurAxis."+this.b}}
A.iz.prototype={
gaj(){return this.f},
aC(a,b){B.a.l(a.a,new A.aw(this.f,B.P,A.d([new A.Q(this.w,B.i),new A.Q(this.x,B.k)],t.C),!1))},
aB(a){var s=this,r=s.a.aE(new A.bl(s.e,s.b,s.c,B.y,B.dR,B.dN)),q=A.cF(s.d),p=t.n,o=s.r===B.f_?new Float32Array(A.S(A.d([1/s.z,0],p))):new Float32Array(A.S(A.d([0,1/s.Q],p)))
p=s.x
return A.d([new A.n7(new A.bf(s.f,A.d([new A.Q(s.w,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
W(){},
$iaq:1}
A.n7.prototype={
ar(a){var s,r,q=this
if(a.d.f.d<=0)return
s=a.b
r=s.a
A.bJ(r,a.av(q.f).b)
A.bh(r,q.a.aq())
A.d2(r,B.X,1,0,0,0)
A.bR(r,q.b.b)
A.aB(r,0,t._.a(q.d.$0()))
A.n(r,"uSource",B.x)
A.n(r,"uTexelStep",new A.q(B.ak,q.e))
A.bo(r,q.c)
s.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.la.prototype={
gaj(){return"dofComposite"},
aC(a,b){var s=this
B.a.l(a.a,new A.aw("dofComposite",B.P,A.d([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1))},
aB(a){var s=this,r="dofComposite",q=s.a.aE(new A.bl(r,s.b,s.c,B.y,B.mq,B.kX)),p=A.cF(s.d)
return A.d([new A.n8(new A.bf(r,A.d([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
W(){},
$iaq:1}
A.n8.prototype={
ar(a){var s,r=this,q=a.av("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bJ(n,q.b)
A.bh(n,r.a.aq())
A.bR(n,r.b.b)
s=t._
A.aB(n,0,s.a(r.d.$0()))
A.n(n,"uSharp",B.x)
A.aB(n,1,s.a(r.e.$0()))
A.n(n,"uBlurred",B.al)
A.aB(n,2,s.a(r.f.$0()))
A.n(n,"uSceneDepth",B.eL)
A.n(n,"uNear",new A.q(B.e,o.f))
A.n(n,"uFar",new A.q(B.e,o.r))
A.n(n,"uFocusDistance",new A.q(B.e,r.w))
A.n(n,"uFocusRange",new A.q(B.e,r.x))
A.n(n,"uStrength",new A.q(B.e,a.d.f.d))
A.bo(n,r.c)
p.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.lu.prototype={
gaj(){return"grade"},
aC(a,b){B.a.l(a.a,new A.aw("grade",B.P,A.d([new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
aB(a){var s=this,r=s.a.aE(new A.bl("grade",s.b,s.c,B.y,B.mo,B.m4)),q=A.cF(s.d),p=s.r,o=s.w
return A.d([new A.nd(new A.bf("grade",A.d([new A.Q(p,B.i),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
W(){},
$iaq:1}
A.nd.prototype={
ar(a){var s=this,r=a.av(s.f.a),q=a.b,p=q.a
A.bJ(p,a.av(s.r.a).b)
A.bh(p,s.a.aq())
A.bR(p,s.b.b)
A.aB(p,0,r.b)
A.n(p,"uScene",B.x)
A.aB(p,1,t._.a(s.d.$0()))
A.n(p,"uLut",B.al)
A.n(p,"uLutSize",new A.q(B.e,s.e))
A.n(p,"uStrength",new A.q(B.e,a.d.f.as))
A.bo(p,s.c)
q.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.iX.prototype={
gaj(){return"msaaResolve"},
aC(a,b){B.a.l(a.a,new A.aw("msaaResolve",B.jF,A.d([new A.Q(this.b,B.i),new A.Q(this.c,B.k)],t.C),!0))},
aB(a){var s=this.b,r=this.c
return A.d([new A.nj(new A.bf("msaaResolve",A.d([new A.Q(s,B.i),new A.Q(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
W(){},
$iaq:1}
A.nj.prototype={
ar(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cd(this.c),j=a.cd(this.d),i=this.b
if(i.b!==B.j)A.h(A.i(u.k))
s=t.V
r=s.a(k.b.a)
q=s.a(j.b.a)
s=r.y
if(s<=1)A.h(A.p("WebGl2Device.resolveTarget: source must be multisampled (samples > 1), got "+s,null))
s=q.y
if(s>1)A.h(A.p("WebGl2Device.resolveTarget: destination must be single-sample, got samples="+s,null))
s=r.w
p=q.w
if(s!==p||r.x!==q.x)A.h(A.p("WebGl2Device.resolveTarget: source ("+s+"x"+r.x+") and destination ("+p+"x"+q.x+") must match",null))
o=r.r!=null||r.f!=null
n=q.r!=null||q.f!=null
i=i.a
m=v.G
i.bindFramebuffer(A.j(m.WebGL2RenderingContext.READ_FRAMEBUFFER),r.a)
i.bindFramebuffer(A.j(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),q.a)
if(r.c!=null||r.b!=null){if(o){i.readBuffer(A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT0))
i.drawBuffers(A.d([A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(m.WebGL2RenderingContext.NONE)],t.n))}A.b0(i,l,[0,0,s,r.x,0,0,p,q.x,A.j(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.j(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.d([A.j(m.WebGL2RenderingContext.NONE),A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.b0(i,l,[0,0,s,r.x,0,0,p,q.x,A.j(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.j(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.b0(i,l,[0,0,s,r.x,0,0,p,q.x,A.j(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.j(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.d([A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.j(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.j(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iae:1,
gG(){return this.a}}
A.h9.prototype={}
A.kR.prototype={
av(a){var s=this.a.h(0,a)
if(s==null)throw A.a(A.i('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cd(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.av(s)},
$iH7:1}
A.Ac.prototype={}
A.j6.prototype={
gaj(){return"present"},
aC(a,b){B.a.l(a.a,new A.aw("present",B.jG,A.d([new A.Q(this.f,B.i)],t.C),!1))},
aB(a){var s,r=this,q=r.a.aE(new A.bl("present",r.b,r.c,B.y,B.ms,B.lK)),p=A.cF(r.d)
r.w=p
s=r.f
return A.d([new A.np(new A.bf("present",A.d([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
W(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.b(s.a))
this.w=null}},
$iaq:1}
A.np.prototype={
ar(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a4.cd(a.d),a2=a4.b,a3=a2.a
A.bJ(a3,a0)
A.bh(a3,a.a.aq())
A.bR(a3,a.b.b)
A.bo(a3,a.c)
A.aB(a3,0,a1.b)
s=a4.c
r=s!=null
if(r)A.aB(a3,1,s)
q=a4.d
p=q.f
o=q.d
n=q.c
A.n(a3,"uExposure",new A.q(B.e,p.a))
A.n(a3,"uVignette",new A.q(B.e,p.e))
A.n(a3,"uGrain",new A.q(B.e,p.f))
A.n(a3,"uOutputEncoding",new A.q(B.e,a.e===B.bd?1:0))
A.n(a3,"uToneMap",new A.q(B.e,A.GP(B.qx)))
m=o.a
l=o.k4
q=l==null
k=q?a0:l.c
if(k==null)k=o.fx
j=q?a0:l.d.a
if(j==null)j=m.a*0.72+k.a*0.28
i=q?a0:l.d.b
if(i==null)i=m.b*0.72+k.b*0.28
h=q?a0:l.d.c
if(h==null)h=m.c*0.72+k.c*0.28
g=q?a0:l.e.a
if(g==null)g=m.a*0.9
f=q?a0:l.e.b
if(f==null)f=m.b*0.9
e=q?a0:l.e.c
if(e==null)e=m.c*0.9
d=t.n
A.n(a3,"uClearColor",new A.q(B.m,new Float32Array(A.S(A.d([m.a,m.b,m.c],d)))))
A.n(a3,"uSkyHorizon",new A.q(B.m,new Float32Array(A.S(A.d([k.a,k.b,k.c],d)))))
A.n(a3,"uSkyZenith",new A.q(B.m,new Float32Array(A.S(A.d([j,i,h],d)))))
A.n(a3,"uSkyGround",new A.q(B.m,new Float32Array(A.S(A.d([g,f,e],d)))))
A.n(a3,"uSkyEnabled",new A.q(B.e,q?0:1))
j=q?a0:0.08
A.n(a3,"uSkyHorizonGlow",new A.q(B.e,j==null?0:j))
j=q?a0:0.0025
A.n(a3,"uSkyStarDensity",new A.q(B.e,j==null?0:j))
A.n(a3,"uSkyTexture",B.al)
A.n(a3,"uSkyTextureEnabled",new A.q(B.e,!q&&r?1:0))
r=q?a0:0
A.n(a3,"uSkyRotation",new A.q(B.e,r==null?0:r))
r=q?a0:1
A.n(a3,"uSkyExposure",new A.q(B.e,r==null?1:r))
A.n(a3,"uSkyTextureSrgb",new A.q(B.e,(!q||a0)===!0?1:0))
A.n(a3,"uInverseProjection",new A.q(B.p,new Float32Array(A.S(n.giR().a))))
c=n.y
if(c===$){b=n.a.iQ()
n.y!==$&&A.o8()
n.y=b
c=b}A.n(a3,"uInverseView",new A.q(B.p,new Float32Array(A.S(c.a))))
r=n.d
A.n(a3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.d([r.a,r.b,r.c],d)))))
r=q?a0:l.z
A.n(a3,"uCloudCoverage",new A.q(B.e,r==null?0:r))
r=q?a0:l.Q
A.n(a3,"uCloudDensity",new A.q(B.e,r==null?0:r))
r=q?a0:l.as
A.n(a3,"uCloudBaseHeight",new A.q(B.e,r==null?650:r))
r=q?a0:l.at
A.n(a3,"uCloudThickness",new A.q(B.e,r==null?350:r))
r=q?a0:l.ax
A.n(a3,"uCloudScale",new A.q(B.e,r==null?0:r))
r=q?a0:l.ay
if(r==null)r=0
j=q?a0:l.ch
A.n(a3,"uCloudWind",new A.q(B.ak,new Float32Array(A.S(A.d([r,j==null?0:j],d)))))
r=q?a0:l.CW
A.n(a3,"uCloudPhase",new A.q(B.e,r==null?0:r))
r=q?a0:l.cx
A.n(a3,"uCloudDetail",new A.q(B.e,r==null?0:r))
r=q?a0:l.cy
A.n(a3,"uCloudSilverLining",new A.q(B.e,r==null?0:r))
r=q?a0:l.db
A.n(a3,"uCloudSampleCount",new A.q(B.e,r==null?4:r))
r=o.go
q=r==null
j=q?a0:r.a.a
if(j==null)j=0
i=q?a0:r.a.b
if(i==null)i=1
h=q?a0:r.a.c
A.n(a3,"uCloudLightDirection",new A.q(B.m,new Float32Array(A.S(A.d([j,i,h==null?0:h],d)))))
j=q?a0:r.b.a
if(j==null)j=1
i=q?a0:r.b.b
if(i==null)i=1
h=q?a0:r.b.c
A.n(a3,"uCloudLightColor",new A.q(B.m,new Float32Array(A.S(A.d([j,i,h==null?1:h],d)))))
r=q?a0:r.c
A.n(a3,"uCloudLightIntensity",new A.q(B.e,r==null?0:r))
a2.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.mc.prototype={
gaj(){return"ps1Quantize"},
aC(a,b){B.a.l(a.a,new A.aw("ps1Quantize",B.P,A.d([new A.Q(this.e,B.i),new A.Q(this.f,B.k)],t.C),!1))},
aB(a){var s=this,r="ps1Quantize",q=s.a.aE(new A.bl(r,s.b,s.c,B.y,B.mu,B.kM)),p=A.cF(s.d),o=s.e,n=s.f
return A.d([new A.nq(new A.bf(r,A.d([new A.Q(o,B.i),new A.Q(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
W(){},
$iaq:1}
A.nq.prototype={
ar(a){var s=this,r=a.av(s.d.a),q=a.b,p=a.d.f,o=q.a
A.bJ(o,a.av(s.e.a).b)
A.bh(o,s.a.aq())
A.bR(o,s.b.b)
A.aB(o,0,r.b)
A.n(o,"uScene",B.x)
A.n(o,"uQuantizationBits",new A.q(B.e,p.ay))
A.n(o,"uDitherStrength",new A.q(B.e,p.Q))
A.bo(o,s.c)
q.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.fF.prototype={}
A.mq.prototype={
gaj(){return"shadow"},
aC(a,b){B.a.l(a.a,new A.aw("shadowCaster",B.jD,A.d([new A.Q(this.z,B.k)],t.C),!1))},
aB(a){var s=this,r="shadowCaster",q=s.a.aE(new A.bl(r,s.b,s.c,B.dQ,B.dP,B.m2))
return A.d([new A.nt(new A.bf(r,A.d([new A.Q(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
W(){},
$iaq:1}
A.nt.prototype={
ar(a){var s,r,q,p,o=this,n=a.av("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bJ(s,n.b)
A.bh(s,o.a.aq())
A.d2(s,B.bc,1,0,0,0)
return}r=A.Cw(l)
o.x.$1(r)
s=m.a
A.bJ(s,n.b)
A.bh(s,o.a.aq())
A.d2(s,B.bc,1,0,0,0)
A.bR(s,o.b.b)
A.n(s,"uAlbedo",B.x)
for(s=a.d.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.l4(m,s[p],l,r)},
hH(a,b){var s,r=this.d.$1(b),q=a.a
A.aB(q,0,t._.a(this.e.$1(r.b)))
A.n(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b5?r.fy:0))
s=this.a.aq()
A.bh(q,r.go?s.fm(!1):s)},
l4(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gG().r)return
s=a.a
A.n(s,"uUseInstances",B.ci)
n.hE(a,b.gG().c,d)
n.hH(a,b.gG().b)
r=b.gG()
q=n.c.$1(r.a)
A.bo(s,q.a)
s=q.b
r=q.c
if(s)a.eF(r,q.d,0)
else a.aJ(r,0)}else if(b instanceof A.dU){p=b.a
if(!p.gG().r)return
if(n.me(b,c)===B.qb)return
n.hE(a,p.gG().c,d)
A.zK(a,b,!1)
n.hH(a,p.gG().b)
s=p.gG()
q=n.c.$1(s.a)
A.bo(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.eG(r,q.d,o,0)
else a.eE(r,0,o)}else throw A.a(A.p("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).t(0),null))},
me(a,b){return B.qa},
hE(a,b,c){var s=a.a
A.n(s,"uModel",new A.q(B.p,new Float32Array(A.S(b.ak().a))))
A.n(s,"uLightViewProjection",new A.q(B.p,new Float32Array(A.S(c.a.a))))},
$iae:1,
gG(){return this.a}}
A.yX.prototype={
$1(a){return this.a.a=a},
$S:69}
A.yY.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:70}
A.mr.prototype={
gaj(){return"shadowedWorld"},
aC(a,b){var s=this,r=A.d([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.k))
B.a.l(a.a,new A.aw("shadowedWorld",B.dq,r,!1))},
aB(a){var s=this,r="shadowedWorld",q=s.a.aE(new A.bl(r,s.b,s.c,B.my,B.mp,B.kL)),p=A.d([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.k))
return A.d([new A.nu(new A.bf(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
W(){},
$iaq:1}
A.nu.prototype={
ar(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.av("sceneColor"),a7=b4.b,a8=b4.d,a9=a8.c,b0=a8.d,b1=a8.f,b2=a4.z.$0(),b3=a7.a
A.bJ(b3,a6.b)
A.bh(b3,a4.a.aq())
s=b0.a
A.d2(b3,B.cM,1,s.c,s.b,s.a)
A.bR(b3,a4.b.b)
A.n(b3,"uAlbedo",B.x)
A.n(b3,"uNormalMap",B.qM)
A.n(b3,"uOrmMap",B.qN)
A.n(b3,"uEmissiveMap",B.qO)
A.n(b3,"uLightmap",B.qP)
s=t._
A.aB(b3,1,s.a(a4.y.$0()))
A.n(b3,"uShadowMap",B.al)
r=a9.d
q=t.n
A.n(b3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.d([r.a,r.b,r.c],q)))))
A.n(b3,"uShadowMapTexelSize",new A.q(B.ak,new Float32Array(A.S(A.d([1/a4.ch,1/a4.CW],q)))))
A.n(b3,"uShadowFilterRadius",new A.q(B.e,b0.at))
A.n(b3,"uShadowBias",new A.q(B.e,b0.db))
A.aB(b3,2,s.a(a4.at.$0()))
A.n(b3,"uSsao",B.eL)
A.n(b3,"uVertexSnapGrid",new A.q(B.e,b1.ax))
A.n(b3,"uSceneColorSize",new A.q(B.ak,new Float32Array(A.S(A.d([a4.ax,a4.ay],q)))))
A.n(b3,"uViewProjection",new A.q(B.p,new Float32Array(A.S(a9.c.a))))
A.n(b3,"uView",new A.q(B.p,new Float32Array(A.S(a9.a.a))))
A.n(b3,"uLightViewProjection",new A.q(B.p,new Float32Array(A.S(b2.a.a))))
s=b0.b
A.n(b3,"uFogColor",new A.q(B.m,new Float32Array(A.S(A.d([s.a,s.b,s.c],q)))))
A.n(b3,"uFogStart",new A.q(B.e,b0.c))
A.n(b3,"uFogEnd",new A.q(B.e,b0.d))
s=b0.e
A.n(b3,"uFogHeightFalloff",new A.q(B.e,s==null?0:s))
s=b0.f
A.n(b3,"uFogDensity",new A.q(B.e,s==null?0:s))
p=a4.Q.$0()
s=A.d([],t.cv)
r=a4.as.$0()
r=J.N(r==null?B.bB:r)
o=p==null
while(r.m()){n=r.gp()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.G
k=o?a5:p.c
if(k==null)k=B.a4
A.n(b3,"uLightPosition",new A.q(B.m,new Float32Array(A.S(A.d([l.a,l.b,l.c],q)))))
A.n(b3,"uLightDirection",new A.q(B.m,new Float32Array(A.S(A.d([k.a,k.b,k.c],q)))))
j=o?a5:p.d
if(j==null)j=B.Q
A.n(b3,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.d([j.a,j.b,j.c],q)))))
r=o?a5:p.e
A.n(b3,"uLightIntensity",new A.q(B.e,r==null?0:r))
A.n(b3,"uSpotEnabled",new A.q(B.e,!o?1:0))
i=b0.go
r=i==null
h=r?a5:i.a
if(h==null)h=B.G
g=r?a5:i.b
if(g==null)g=B.Q
A.n(b3,"uDirectionalDirection",new A.q(B.m,new Float32Array(A.S(A.d([h.a,h.b,h.c],q)))))
A.n(b3,"uDirectionalColor",new A.q(B.m,new Float32Array(A.S(A.d([g.a,g.b,g.c],q)))))
r=r?a5:i.c
A.n(b3,"uDirectionalIntensity",new A.q(B.e,r==null?0:r))
for(r=b0.id,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.e(r,f)
e=r[f]}else e=a5
n=e==null
d=n?a5:e.b
if(d==null)d=B.v
c=n?a5:e.c
if(c==null)c=B.Q
m=""+f
A.n(b3,"uPointPosition"+m,new A.q(B.m,new Float32Array(A.S(A.d([d.a,d.b,d.c],q)))))
A.n(b3,"uPointColor"+m,new A.q(B.m,new Float32Array(A.S(A.d([c.a,c.b,c.c],q)))))
b=n?a5:e.d
if(b==null)b=0
A.n(b3,"uPointIntensity"+m,new A.q(B.e,b))
n=n?a5:e.e
if(n==null)n=1
A.n(b3,"uPointRadius"+m,new A.q(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.e(s,f)
e=s[f]}else e=a5
r=e==null
d=r?a5:e.b
if(d==null)d=B.v
a=r?a5:e.c
if(a==null)a=B.a4
c=r?a5:e.d
if(c==null)c=B.Q
n=""+f
A.n(b3,"uDirectSpotPosition"+n,new A.q(B.m,new Float32Array(A.S(A.d([d.a,d.b,d.c],q)))))
A.n(b3,"uDirectSpotDirection"+n,new A.q(B.m,new Float32Array(A.S(A.d([a.a,a.b,a.c],q)))))
A.n(b3,"uDirectSpotColor"+n,new A.q(B.m,new Float32Array(A.S(A.d([c.a,c.b,c.c],q)))))
m=r?a5:e.e
if(m==null)m=0
A.n(b3,"uDirectSpotIntensity"+n,new A.q(B.e,m))
m=r?a5:e.f
if(m==null)m=1
A.n(b3,"uDirectSpotRange"+n,new A.q(B.e,m))
m=r?a5:e.r
if(m==null)m=0.3
A.n(b3,"uDirectSpotInnerCos"+n,new A.q(B.e,Math.cos(m)))
m=r?a5:e.w
if(m==null)m=0.5
A.n(b3,"uDirectSpotOuterCos"+n,new A.q(B.e,Math.cos(m)))
r=r?0:1
A.n(b3,"uDirectSpotEnabled"+n,new A.q(B.e,r))}s=o?a5:p.f
A.n(b3,"uLightRange",new A.q(B.e,s==null?1:s))
s=o?a5:p.r
if(s==null)s=0.3
A.n(b3,"uLightInnerCos",new A.q(B.e,Math.cos(s)))
s=o?a5:p.w
if(s==null)s=0.5
A.n(b3,"uLightOuterCos",new A.q(B.e,Math.cos(s)))
a0=b0.fx
A.n(b3,"uAmbientColor",new A.q(B.m,new Float32Array(A.S(A.d([a0.a,a0.b,a0.c],q)))))
A.n(b3,"uAmbientIntensity",new A.q(B.e,b0.fy))
A.n(b3,"uAmbientLightScale",new A.q(B.e,b0.ax))
A.n(b3,"uDirectLightScale",new A.q(B.e,b0.ay))
s=b0.dx
A.n(b3,"uReflectionColor",new A.q(B.m,new Float32Array(A.S(A.d([s.a,s.b,s.c],q)))))
A.n(b3,"uReflectionIntensity",new A.q(B.e,b0.dy))
A.n(b3,"uReflectionConfidence",new A.q(B.e,b0.fr))
A.n(b3,"uRainWetness",new A.q(B.e,b1.w))
A.n(b3,"uSurfaceSnowCoverage",new A.q(B.e,b1.x))
A.n(b3,"uSurfaceDissolution",new A.q(B.e,b1.y))
s=b0.k3
a1=A.hP(s,0,A.ej(4,"count",t.S),A.C(s).c).bL(0)
A.n(b3,"uThermalSourceCount",new A.q(B.e,a1.length))
for(f=0;f<4;++f){s=a1.length
if(f<s){if(!(f<s))return A.e(a1,f)
a2=a1[f]}else a2=a5
s=a2==null
d=s?a5:a2.b
if(d==null)d=B.v
r=""+f
A.n(b3,"uThermalSourcePosition"+r,new A.q(B.m,new Float32Array(A.S(A.d([d.a,d.b,d.c],q)))))
o=s?a5:a2.c
if(o==null)o=1
A.n(b3,"uThermalSourceRadius"+r,new A.q(B.e,o))
s=s?a5:a2.d
if(s==null)s=0
A.n(b3,"uThermalSourceDissolution"+r,new A.q(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.r)(b3),++a3)a4.hb(a7,b3[a3],r,b0)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.r)(a8),++a3)a4.hb(a7,a8[a3],r,b0)},
hb(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.n(s,"uUseInstances",B.ci)
n.hF(a,b.gG().c)
n.hI(a,b.gG().b,b.gG().e,b.gG().f,c,b.gG().w,d)
r=n.c.$1(b.gG().a)
A.bo(s,r.a)
s=r.b
q=r.c
if(s)a.eF(q,r.d,0)
else a.aJ(q,0)}else if(b instanceof A.dU){p=b.a
n.hF(a,p.gG().c)
A.zK(a,b,!0)
n.hI(a,p.gG().b,p.gG().e,p.gG().f,c,p.gG().w,d)
r=n.c.$1(p.gG().a)
A.bo(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.eG(q,r.d,o,0)
else a.eE(q,0,o)}else throw A.a(A.p("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).t(0),null))},
hI(a,b,c,d,e,f,g){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aB(o,0,p.a(s.e.$1(q.b)))
A.aB(o,3,p.a(s.f.$1(q.x)))
A.aB(o,4,p.a(s.r.$1(r)))
A.aB(o,5,p.a(s.w.$1(r)))
A.aB(o,6,p.a(s.x.$1(r)))
A.n(o,"uAlphaCutoff",new A.q(B.e,q.fx===B.b5?q.fy:0))
A.n(o,"uOpaqueCoverage",new A.q(B.e,c===B.as?0:1))
A.n(o,"uAffineWarpStrength",new A.q(B.e,0))
p=t.n
A.n(o,"uMaterialTint",new A.q(B.m,new Float32Array(A.S(A.d([q.d,q.e,q.f],p)))))
A.n(o,"uEmissiveStrength",new A.q(B.e,q.w))
A.n(o,"uUvScaleOffset",new A.q(B.qL,new Float32Array(A.S(A.d([q.db,q.dx,0,0],p)))))
A.n(o,"uNormalStrength",new A.q(B.e,q.z*g.ch))
A.n(o,"uRoughness",new A.q(B.e,q.at*g.CW))
A.n(o,"uMetallic",new A.q(B.e,q.ax*g.cx))
A.n(o,"uSpecularScale",new A.q(B.e,g.cy))
A.n(o,"uClearcoatStrength",new A.q(B.e,q.ch))
A.n(o,"uClearcoatRoughness",new A.q(B.e,q.CW))
A.n(o,"uOcclusionStrength",new A.q(B.e,1))
A.n(o,"uLightmapIntensity",new A.q(B.e,0))
A.n(o,"uReceivesShadow",new A.q(B.e,q.id&&f?1:0))
A:{p=r
if(B.as===c){switch(d.a){case 0:p=B.ha
break
case 1:p=B.h9
break}break A}if(B.C===c||B.h8===c){p=s.a.aq()
break A}}A.bh(o,q.go?p.fm(!1):p)},
hF(a,b){var s=b.ak(),r=a.a
A.n(r,"uModel",new A.q(B.p,new Float32Array(A.S(s.a))))
A.n(r,"uNormalMatrix",new A.q(B.p,new Float32Array(A.S(s.f3().a))))},
$iae:1,
gG(){return this.a}}
A.mu.prototype={
gaj(){return"ssaoOcclusion"},
aC(a,b){B.a.l(a.a,new A.aw("ssaoOcclusion",B.bk,A.d([new A.Q(this.w,B.k)],t.C),!1))},
aB(a){var s=this,r="ssaoOcclusion",q=s.a.aE(new A.bl(r,s.b,s.c,B.y,B.dU,B.kA)),p=A.cF(s.d)
return A.d([new A.nx(new A.bf(r,A.d([new A.Q(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
W(){},
$iaq:1}
A.nx.prototype={
ar(a){var s,r,q,p=this,o=a.b,n=a.d.f.c,m=o.a
A.bJ(m,a.av("ssaoRaw").b)
A.bh(m,p.a.aq())
if(n<=0){A.d2(m,B.X,1,1,1,1)
return}A.d2(m,B.X,1,0,0,0)
s=p.e.$0()
A.bR(m,p.b.b)
A.aB(m,0,t._.a(p.d.$0()))
A.n(m,"uSceneDepth",B.x)
A.n(m,"uNear",new A.q(B.e,s.f))
A.n(m,"uFar",new A.q(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.e(r,0)
A.n(m,"uProjScaleX",new A.q(B.e,r[0]))
if(5>=q)return A.e(r,5)
A.n(m,"uProjScaleY",new A.q(B.e,r[5]))
A.n(m,"uRadius",new A.q(B.e,p.f))
A.n(m,"uStrength",new A.q(B.e,n))
A.bo(m,p.c)
o.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.mt.prototype={
gaj(){return"ssaoBlur"},
aC(a,b){B.a.l(a.a,new A.aw("ssaoBlur",B.bk,A.d([new A.Q(this.y,B.i),new A.Q(this.z,B.k)],t.C),!1))},
aB(a){var s=this,r="ssaoBlur",q=s.a.aE(new A.bl(r,s.b,s.c,B.y,B.mi,B.m7)),p=A.cF(s.d)
return A.d([new A.nw(new A.bf(r,A.d([new A.Q(s.y,B.i),new A.Q(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
W(){},
$iaq:1}
A.nw.prototype={
ar(a){var s,r,q=this,p=a.b,o=p.a
A.bJ(o,a.av("ssaoBlurred").b)
A.bh(o,q.a.aq())
if(a.d.f.c<=0){A.d2(o,B.X,1,1,1,1)
return}A.d2(o,B.X,1,0,0,0)
s=q.f.$0()
A.bR(o,q.b.b)
r=t._
A.aB(o,0,r.a(q.d.$0()))
A.n(o,"uSsaoRaw",B.x)
A.aB(o,1,r.a(q.e.$0()))
A.n(o,"uSceneDepth",B.al)
A.n(o,"uTexelSize",new A.q(B.ak,new Float32Array(A.S(A.d([1/q.r,1/q.w],t.n)))))
A.n(o,"uNear",new A.q(B.e,s.f))
A.n(o,"uFar",new A.q(B.e,s.r))
A.bo(o,q.c)
p.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.mI.prototype={
gaj(){return"vhs"},
aC(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.aw("vhs",B.P,A.d([new A.Q(this.r,B.i),new A.Q(s,B.U),new A.Q(s,B.k)],t.C),!1))},
aB(a){var s=this,r=s.a.aE(new A.bl("vhs",s.b,s.c,B.y,B.ml,B.kO)),q=A.cF(s.d),p=s.r,o=s.w
return A.d([new A.nF(new A.bf("vhs",A.d([new A.Q(p,B.i),new A.Q(o,B.U),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
W(){},
$iaq:1}
A.nF.prototype={
ar(a){var s,r=this,q=a.av(r.f.a),p=a.av(r.r.a),o=a.b,n=a.d.f,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bJ(m,p.b)
A.bh(m,r.a.aq())
A.bR(m,r.b.b)
A.aB(m,0,q.b)
A.n(m,"uScene",B.x)
A.aB(m,1,t._.a(r.d.$0()))
A.n(m,"uHistory",B.al)
A.n(m,"uTime",new A.q(B.e,r.e.$0()))
A.n(m,"uChromaWeight",new A.q(B.e,n.ch))
A.n(m,"uTrackingWeight",new A.q(B.e,l))
A.n(m,"uNoiseWeight",new A.q(B.e,n.cx))
A.n(m,"uHeadSwitchWeight",new A.q(B.e,n.cy))
A.n(m,"uDropoutWeight",new A.q(B.e,n.db))
A.n(m,"uGhostWeight",new A.q(B.e,s))
A.bo(m,r.c)
o.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.mR.prototype={
gaj(){return"volumetricLight"},
aC(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.l(p,new A.aw("volumetricLight",B.bk,A.d([new A.Q(s.x,B.i),new A.Q(r,B.k)],q),!1))
B.a.l(p,new A.aw("volumetricComposite",B.P,A.d([new A.Q(r,B.i),new A.Q(s.y,B.i),new A.Q(s.z,B.k)],q),!1))},
aB(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aE(new A.bl(l,i,m.c,B.y,B.dU,B.kV)),g=m.e,f=A.cF(g),e=m.Q
B.a.l(e,f)
s=m.w
r=t.C
q=A.d([new A.nH(new A.bf(l,A.d([new A.Q(m.x,B.i),new A.Q(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aE(new A.bl(k,i,m.d,B.y,B.mA,B.m8))
n=A.cF(g)
B.a.l(e,n)
B.a.l(q,new A.nG(new A.bf(k,A.d([new A.Q(s,B.i),new A.Q(m.y,B.i),new A.Q(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
W(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p)q.deleteVertexArray(A.b(s[p].a))
B.a.R(s)},
$iaq:1}
A.nH.prototype={
ar(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=b1.av(a3.d),a6=b1.b,a7=a3.f.$0(),a8=b1.d.d,a9=a8.go,b0=a6.a
A.bJ(b0,a5.b)
A.bh(b0,a3.a.aq())
A.d2(b0,B.X,1,0,0,0)
A.bR(b0,a3.b.b)
A.aB(b0,0,t._.a(a3.e.$0()))
A.n(b0,"uSceneDepth",B.x)
A.n(b0,"uNear",new A.q(B.e,a7.f))
A.n(b0,"uFar",new A.q(B.e,a7.r))
A.n(b0,"uViewProjection",new A.q(B.p,new Float32Array(A.S(a7.c.a))))
s=a7.a.a
A.n(b0,"uView",new A.q(B.p,new Float32Array(A.S(s))))
A.n(b0,"uInverseProjection",new A.q(B.p,new Float32Array(A.S(a7.giR().a))))
r=a9==null
A.n(b0,"uShaftIntensity",new A.q(B.e,r?0:a9.c*0.15))
q=a8.f
A.n(b0,"uFogDensity",new A.q(B.e,q==null?0:q))
A.n(b0,"uAnisotropy",new A.q(B.e,a8.y))
q=a8.r
p=t.n
A.n(b0,"uVolumetricAlbedo",new A.q(B.m,new Float32Array(A.S(A.d([q.a,q.b,q.c],p)))))
A.n(b0,"uVolumetricHeightFalloff",new A.q(B.e,a8.w))
A.n(b0,"uVolumetricDustDensity",new A.q(B.e,a8.x))
A.n(b0,"uVolumetricJitter",new A.q(B.e,a8.z))
A.n(b0,"uVolumetricIntensity",new A.q(B.e,a8.Q))
A.n(b0,"uVolumetricSampleCount",new A.q(B.e,a8.as))
if(r)o=B.G
else{q=a9.a.ga2()
n=q.a
m=s.length
if(0>=m)return A.e(s,0)
l=s[0]
k=q.b
if(4>=m)return A.e(s,4)
j=s[4]
q=q.c
if(8>=m)return A.e(s,8)
i=s[8]
h=s[1]
g=s[5]
if(9>=m)return A.e(s,9)
f=s[9]
e=s[2]
d=s[6]
if(10>=m)return A.e(s,10)
o=new A.B(n*l+k*j+q*i,n*h+k*g+q*f,n*e+k*d+q*s[10]).ga2()}c=r?a4:a9.b
if(c==null)c=B.Q
A.n(b0,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.d([o.a,o.b,o.c],p)))))
A.n(b0,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.d([c.a,c.b,c.c],p)))))
b=A.Lk(4,a7.d,a8.k2)
A.n(b0,"uVolumetricSourceCount",new A.q(B.e,b.length))
for(a=0;a<4;++a){s=b.length
if(a<s){if(!(a<s))return A.e(b,a)
a0=b[a]}else a0=a4
s=a0==null
a1=s?a4:a0.b
if(a1==null)a1=B.v
a2=s?a4:a0.c
if(a2==null)a2=B.v
r=""+a
A.n(b0,"uSourcePosition"+r,new A.q(B.m,new Float32Array(A.S(A.d([a1.a,a1.b,a1.c],p)))))
A.n(b0,"uSourceColor"+r,new A.q(B.m,new Float32Array(A.S(A.d([a2.a,a2.b,a2.c],p)))))
q=s?a4:a0.d
if(q==null)q=0
A.n(b0,"uSourceIntensity"+r,new A.q(B.e,q))
q=s?a4:a0.e
if(q==null)q=1
A.n(b0,"uSourceReferenceDistance"+r,new A.q(B.e,q))
s=s?a4:a0.f
if(s==null)s=1
A.n(b0,"uSourceCutoffDistance"+r,new A.q(B.e,s))}A.bo(b0,a3.c)
a6.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.nG.prototype={
ar(a){var s=this,r=a.cd(s.e),q=a.cd(s.d),p=a.b,o=p.a
A.bJ(o,r.b)
A.CT(o,1)
A.bh(o,B.cT)
A.bR(o,s.b.b)
A.aB(o,0,q.b)
A.n(o,"uVolumetric",B.x)
A.n(o,"uVolumetricStrength",B.eK)
A.bo(o,s.c)
p.aJ(3,0)},
$iae:1,
gG(){return this.a}}
A.jh.prototype={}
A.mV.prototype={
gaj(){return"world"},
aC(a,b){B.a.l(a.a,new A.aw("worldOpaqueTransparent",B.dq,A.d([new A.Q(this.e,B.k)],t.C),!1))},
aB(a){var s=this,r=s.a.aE(new A.bl("safeWorld",s.b,s.c,B.mB,B.y,B.lh)),q=s.e
return A.d([new A.nK(new A.bf("worldOpaqueTransparent",A.d([new A.Q(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
W(){},
$iaq:1}
A.nK.prototype={
ar(a){var s,r,q,p,o,n=this,m=a.b,l=a.d,k=l.d,j=m.a
A.bJ(j,a.av(n.d).b)
A.bh(j,n.a.aq())
s=k.a
A.d2(j,B.cM,1,s.c,s.b,s.a)
A.bR(j,n.b.b)
A.n(j,"uViewProjection",new A.q(B.p,new Float32Array(A.S(l.c.c.a))))
r=k.go
q=r==null?null:r.a
if(q==null)q=B.G
s=t.n
A.n(j,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.d([q.a,q.b,q.c],s)))))
p=k.fx
A.n(j,"uAmbientColor",new A.q(B.m,new Float32Array(A.S(A.d([p.a,p.b,p.c],s)))))
A.n(j,"uAmbientIntensity",new A.q(B.e,k.fy))
A.n(j,"uAmbientLightScale",new A.q(B.e,k.ax))
A.n(j,"uDirectLightScale",new A.q(B.e,k.ay))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.hV(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.hV(m,l[o])},
hV(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dU){s=b.a
n.hW(a,s.gG().c)
A.zK(a,b,!0)
r=n.c.$1(s.gG().a)
A.bo(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.eG(p,r.d,o,0)
else a.eE(p,0,o)}else if(t.yz.b(b)){q=a.a
A.n(q,"uUseInstances",B.ci)
n.hW(a,b.gG().c)
r=n.c.$1(b.gG().a)
A.bo(q,r.a)
q=r.b
p=r.c
if(q)a.eF(p,r.d,0)
else a.aJ(p,0)}else throw A.a(A.p("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).t(0),null))},
hW(a,b){var s=b.ak(),r=a.a
A.n(r,"uModel",new A.q(B.p,new Float32Array(A.S(s.a))))
A.n(r,"uNormalMatrix",new A.q(B.p,new Float32Array(A.S(s.f3().a))))},
$iae:1,
gG(){return this.a}}
A.pu.prototype={
cV(a){var s,r,q
a.B()
s=A.a0(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.K
else q=r===0?B.bX:B.T
return new A.e_(q,s)},
jt(a){var s,r=this.cV(a).a
A:{if(B.K===r){s=B.oK
break A}if(B.T===r){s=B.ef
break A}s=B.aA
break A}return s}}
A.ls.prototype={
C(){return"GpuBufferUsage."+this.b}}
A.iE.prototype={
C(){return"GpuBufferKind."+this.b}}
A.iH.prototype={
C(){return"GpuTextureFilter."+this.b}}
A.iI.prototype={
C(){return"GpuTextureWrap."+this.b}}
A.lr.prototype={}
A.lt.prototype={}
A.fl.prototype={
C(){return"GpuTargetAttachment."+this.b}}
A.iG.prototype={}
A.iF.prototype={
C(){return"GpuDeviceStatus."+this.b}}
A.fE.prototype={
C(){return"ShaderCompileStage."+this.b}}
A.jn.prototype={
t(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dw.prototype={
C(){return"UniformType."+this.b}}
A.q.prototype={}
A.hc.prototype={
C(){return"ClearMask."+this.b}}
A.l6.prototype={
aJ(a,b){var s=this.a
if(s.b!==B.j)A.h(A.i(u.k))
s.a.drawArrays(A.j(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bR(a,1)},
eE(a,b,c){var s=this.a
if(s.b!==B.j)A.h(A.i(u.k))
s.a.drawArraysInstanced(A.j(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bR(a,c)},
eF(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.h(A.i(u.k))
s=v.G
r=A.j(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.j(s.WebGL2RenderingContext.UNSIGNED_INT):A.j(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bR(a,1)},
eG(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.h(A.i(u.k))
s=v.G
r=A.j(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.j(s.WebGL2RenderingContext.UNSIGNED_INT):A.j(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.b0(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bR(a,c)},
$iFS:1}
A.hq.prototype={
C(){return"GpuResourceCandidateState."+this.b}}
A.hC.prototype={
iU(a){var s=this.b.h(0,a)
if(s==null)throw A.a(A.i("resource is not in candidate: "+a))
return s}}
A.qy.prototype={
gp(){var s=this.c
if(s==null)throw A.a(A.i("GPU resource adapter is not initialized"))
return s},
dR(a){var s,r,q,p,o,n=this
if(n.e)A.h(A.i("GPU resource adapter is disposed"))
if(n.c==null)throw A.a(A.i("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.a(A.i("GPU resource candidate is already open"))
s=A.j3(a)
p=n.b
r=p.dR(s)
try{q=new A.hC(r,n.ec(s,a),B.aw)
n.d=q
return q}catch(o){p.fc(r)
throw o}},
W(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.a(A.i("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.ef(s.b)
r.b.W()
r.c=null
r.e=!0},
ec(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.m(a0,a1),a3=A.d([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("F<1>")
s=new A.F(k,i.a(new A.qz()),j)
for(h=s,g=J.N(h.a),h=new A.R(g,h.b,h.$ti.i("R<1>")),f=a.a;h.m();){r=g.gp()
q=A.CZ(f,a.h9(r,a5))
J.el(a3,q)
J.ba(a2,r,q)}e=A.J(new A.F(k,i.a(new A.qA()),j),j.i("t.E"))
B.a.a4(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.r)(k),++d){o=k[d]
n=A.Eq(J.Fl(o,11))
if(i){h=J.b5(a2,"sceneColor")
h.toString
J.ba(a2,o,h)}else{h=n
if(typeof h!=="number")return h.qb()
if(h>=2){h=J.b5(a2,"sceneColor#1")
h.toString
J.ba(a2,o,h)}else{m=A.CZ(f,a.h9(o,a5))
J.el(a3,m)
J.ba(a2,o,m)}}}a0=A.aX(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("bO<1>"),a0=new A.bO(a0,k),a0=new A.an(a0,a0.gu(0),k.i("an<a1.E>")),j=a.a,i=t.V,k=k.i("a1.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.Al(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
h9(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.iG(s,s,1,B.bi,!0)}if(a==="sceneDepth")return new A.iG(n,m,1,B.bi,!0)
r=B.c.X(a,"ssao")||B.c.X(a,"bloomBlur")||B.c.X(a,"dofBlur")||B.c.X(a,"volumetricLight")
q=r?B.d.af(n+1,2):n
p=r?B.d.af(m+1,2):m
s=a==="sceneColor"
o=s||B.c.X(a,"sceneColor#")
s=s?b.d:1
return new A.iG(q,p,s,o?B.dn:B.jz,o)},
ef(a){var s,r,q,p,o,n=A.fq(t.mf.a(a).gan(),t._)
for(n=A.eW(n,n.r,A.w(n).c),s=this.a,r=t.V,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.Al(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fW(a){if(this.d!==a||a.c!==B.aw)throw A.a(A.i("GPU resource candidate is not open"))}}
A.qz.prototype={
$1(a){return!B.c.X(A.v(a),"sceneColor#")},
$S:3}
A.qA.prototype={
$1(a){return B.c.X(A.v(a),"sceneColor#")},
$S:3}
A.hX.prototype={
C(){return"_SlotState."+this.b}}
A.eZ.prototype={
sb5(a){this.c=this.$ti.i("1?").a(a)}}
A.dq.prototype={
aI(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.eZ(B.b3,n.i("eZ<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.t2
p.sb5(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
bw(a){return this.aI(a,null)},
a8(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.a(A.eF(B.dt,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.eF(B.du,a))
s=q.b
if(s===B.b4||s===B.b3)throw A.a(A.eF(B.aS,a))},
bx(a){var s,r,q=this.$ti
q.c.a(a)
this.a8(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
fi(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a8(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].sb5(b)},
aM(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.a(A.eF(B.dt,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.a(A.eF(B.du,a))
r=q.b
if(r===B.b4||r===B.b3)throw A.a(A.eF(B.jR,a))
q.b=B.b4
q.sb5(null)
B.a.l(p.c,s);++p.e},
cI(){return new A.ca(this.oB(),this.$ti.i("ca<+(1,2)>"))},
oB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$cI(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.b4||j===B.b3){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.a5(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.kO.prototype={
C(){return"BlendEquation."+this.b}}
A.fe.prototype={
C(){return"BlendFactor."+this.b}}
A.l1.prototype={
C(){return"CullFace."+this.b}}
A.l4.prototype={
C(){return"DepthFunc."+this.b}}
A.hl.prototype={
fm(a){var s=this
return A.BJ(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bw.prototype={
C(){return"StateField."+this.b}}
A.wi.prototype={
nM(a){var s,r=this.a
if(r==null)return A.hw(B.lP,t.qL)
s=A.a0(t.qL)
if(r.a!==a.a)s.l(0,B.ca)
if(r.b!==a.b)s.l(0,B.cb)
if(r.c!==a.c)s.l(0,B.cc)
if(r.d!==a.d)s.l(0,B.cd)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.ce)
if(r.r!==a.r)s.l(0,B.cf)
if(r.w!==a.w)s.l(0,B.cg)
if(r.x!==a.x)s.l(0,B.ch)
return s}}
A.ee.prototype={$icR:1}
A.k8.prototype={}
A.k7.prototype={}
A.nJ.prototype={}
A.mT.prototype={
kt(a){var s=this,r=A.b(s.a.canvas)
s.c=A.Z(new A.wf(s))
s.d=A.Z(new A.wg(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
bS(a){if(!this.r.q(0,a))return!1
return A.G(this.a.getExtension(a))!=null},
j4(){var s,r,q,p,o,n,m,l,k=this,j=v.G,i=k.cn(A.j(j.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),h=k.cn(A.j(j.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),g=k.cn(A.j(j.WebGL2RenderingContext.MAX_SAMPLES)),f=k.cn(A.j(j.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),e=k.cn(A.j(j.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),d=k.bS("EXT_texture_filter_anisotropic")
if(d){s=k.ht(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=k.bS("EXT_disjoint_timer_query_webgl2")
k.w=s
q=k.bS("EXT_color_buffer_float")
p=k.bS("EXT_color_buffer_half_float")
o=k.bS("WEBGL_lose_context")
n=k.a
m=A.ih(n.getParameter(A.j(j.WebGL2RenderingContext.RENDERER)))
l=A.ih(n.getParameter(A.j(j.WebGL2RenderingContext.VENDOR)))
j=typeof m=="string"?m:null
return new A.u0("WebGL2",j,typeof l=="string"?l:null,i,h,g,f,e,d,r,s,q,p,o)},
cn(a){var s=A.ih(this.a.getParameter(a))
return typeof s=="number"?B.b.ah(s):0},
ht(a){var s=A.ih(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iGe:1}
A.wf.prototype={
$1(a){A.b(a).preventDefault()
this.a.b=B.a6},
$S:1}
A.wg.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.xm.prototype={
mG(){var s,r=this
if(r.b!==B.j)A.h(A.i(u.k))
s=r.w?A.G(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.ee(new A.nJ(s))},
hO(a){var s=a.a
if(!(s instanceof A.nJ))throw A.a(A.a7(a,"query","is not a GPU timer query"))
return s}}
A.nI.prototype={}
A.we.prototype={}
A.wh.prototype={
nC(a){var s=A.G(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.we(A.HM(s))}}
A.l8.prototype={
D(){var s=this
return A.E(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.kI.prototype={
goG(){var s=this.cx
return new A.am(s,A.w(s).i("am<2>")).b8(0,0,new A.oV(),t.i)},
kc(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.u()
s=j.a
A.G(i.connect(A.b(s.destination)))
r=j.d
r===$&&A.u()
A.b(r.gain).value=0.25
q=j.e
q===$&&A.u()
A.b(q.gain).value=0.12
p=j.f
p===$&&A.u()
A.b(p.gain).value=0.4
o=j.r
o===$&&A.u()
A.b(o.gain).value=0.2
n=j.w
n===$&&A.u()
A.b(n.gain).value=0.4
m=j.x
m===$&&A.u()
A.b(m.gain).value=0.1
l=j.y
l===$&&A.u()
A.b(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.G(r[k].connect(i))
r=j.z
r===$&&A.u()
A.b(r.gain).value=1
q=j.Q
q===$&&A.u()
A.b(q.gain).value=0.35
A.G(o.connect(r))
A.G(n.connect(r))
A.G(p.connect(r))
p=j.as
p===$&&A.u()
A.G(r.connect(p))
A.G(p.connect(q))
A.G(q.connect(i))
q=A.b(s.createBiquadFilter())
q.type="highpass"
A.b(q.frequency).value=80
j.k3!==$&&A.b9()
j.k3=q
p=A.b(s.createBiquadFilter())
p.type="lowpass"
A.b(p.frequency).value=11e3
j.k4!==$&&A.b9()
j.k4=p
A.G(q.connect(p))
A.G(p.connect(A.b(s.destination)))
i.disconnect(A.b(s.destination))
A.G(i.connect(q))
p.disconnect(A.b(s.destination))
q=A.b(s.createChannelSplitter(2))
j.ok!==$&&A.b9()
j.ok=q
i=A.b(s.createChannelMerger(2))
j.p1!==$&&A.b9()
j.p1=i
r=A.b(s.createGain())
A.b(r.gain).value=0.5
j.p2!==$&&A.b9()
j.p2=r
A.G(p.connect(q))
A.G(i.connect(A.b(s.destination)))
j.fR()},
fR(){var s,r=this,q=r.ok
q===$&&A.u()
q.disconnect()
s=r.p2
s===$&&A.u()
s.disconnect()
if(r.p3){A.G(q.connect(s,0))
A.G(q.connect(s,1))
q=r.p1
q===$&&A.u()
A.G(s.connect(q,0,0))
A.G(s.connect(q,0,1))}else{s=r.p1
s===$&&A.u()
A.G(q.connect(s,0,0))
A.G(q.connect(s,1,1))}},
cQ(){var s=this.a
if(A.v(s.state)==="suspended")A.b(s.resume())},
de(a){var s,r,q=this
if(B.c.X(a,"vo-")){s=q.y
s===$&&A.u()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.X(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.u()
return s}r=B.mn.h(0,a)
A:{if("sub"===r){s=q.d
s===$&&A.u()
break A}if("bed"===r){s=q.e
s===$&&A.u()
break A}if("mid"===r){s=q.r
s===$&&A.u()
break A}if("air"===r){s=q.x
s===$&&A.u()
break A}s=q.w
s===$&&A.u()
break A}return s},
lf(){var s,r,q,p,o,n,m,l=this.a,k=A.a_(l.sampleRate),j=B.b.ap(k*2),i=A.b(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aD()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.e(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dQ(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=0.94+p.ay.aD()*0.12
q=A.b(s.createGain())
A.b(q.gain).value=b
A.G(r.connect(q))
A.G(q.connect(p.de(a)))
r.onended=A.Z(new A.oY(r,q))
r.start()
return!0},
j_(a){return this.dQ(a,1)},
pk(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
if(o==null)return
s=this.a
r=A.b(s.createBufferSource())
r.buffer=o
A.b(r.playbackRate).value=d
q=A.b(s.createGain())
A.b(q.gain).value=c
p=A.b(s.createStereoPanner())
A.b(p.pan).value=B.b.n(e,-1,1)
A.G(r.connect(q))
A.G(q.connect(p))
A.G(p.connect(this.de(a)))
r.onended=A.Z(new A.oX(r,q,p))
r.start(A.a_(s.currentTime)+B.b.n(b,0,120))},
mB(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.m(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.r)(a5),++q){p=a5[q]
s.k(0,p.a[3],p)}r=a4.ax
o=A.w(r).i("af<1>")
o=A.J(new A.af(r,o),o.i("t.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.r)(o),++q){m=o[q]
if(!s.J(m))a4.er(m)}for(s=new A.ad(s,s.r,s.e,s.$ti.i("ad<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.J(k[3]))a4.er(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.er(k[3])
h=k[3]
g=r.h(0,h)
if(g==null){f=k[0]
e=k[6]
d=k[5]
c=A.b(o.createBufferSource())
c.buffer=j
c.loop=!0
b=A.b(o.createGain())
A.b(b.gain).value=0
a=A.b(o.createBiquadFilter())
a.type="highpass"
A.b(a.frequency).value=20
a0=A.b(o.createBiquadFilter())
a0.type="lowpass"
A.b(a0.frequency).value=2e4
A.G(c.connect(a))
A.G(a.connect(a0))
A.G(a0.connect(b))
a1=A.b(o.createStereoPanner())
A.b(a1.pan).value=e
a2=A.b(o.createGain())
A.b(a2.gain).value=d
A.G(b.connect(a1))
A.G(a1.connect(a4.de(f)))
A.G(b.connect(a2))
l===$&&A.u()
A.G(a2.connect(l))
c.start()
g=new A.k6(c,b,a,a0,a1,a2,f)
r.k(0,h,g)}a3=A.a_(o.currentTime)
h=g.b
A.b(A.b(h.gain).cancelScheduledValues(a3))
A.b(A.b(h.gain).setValueAtTime(A.a_(A.b(h.gain).value),a3))
f=a3+0.12
A.b(A.b(h.gain).linearRampToValueAtTime(B.b.n(k[1],0,1),f))
h=g.d
A.b(A.b(h.frequency).cancelScheduledValues(a3))
A.b(A.b(h.frequency).setValueAtTime(A.a_(A.b(h.frequency).value),a3))
A.b(A.b(h.frequency).linearRampToValueAtTime(B.b.n(k[4],80,2e4),f))
h=g.c
A.b(A.b(h.frequency).cancelScheduledValues(a3))
A.b(A.b(h.frequency).setValueAtTime(A.a_(A.b(h.frequency).value),a3))
A.b(A.b(h.frequency).linearRampToValueAtTime(B.b.n(k[2],20,16e3),f))
h=g.e
A.b(A.b(h.pan).cancelScheduledValues(a3))
A.b(A.b(h.pan).setValueAtTime(A.a_(A.b(h.pan).value),a3))
A.b(A.b(h.pan).linearRampToValueAtTime(B.b.n(k[6],-1,1),f))
h=g.f
A.b(A.b(h.gain).cancelScheduledValues(a3))
A.b(A.b(h.gain).setValueAtTime(A.a_(A.b(h.gain).value),a3))
A.b(A.b(h.gain).linearRampToValueAtTime(B.b.n(k[5],0,1),f))}},
er(a){var s,r,q=this.ax.a7(0,a)
if(q==null)return
s=A.a_(this.a.currentTime)
r=q.b
A.b(A.b(r.gain).cancelScheduledValues(s))
A.b(A.b(r.gain).setValueAtTime(A.a_(A.b(r.gain).value),s))
A.b(A.b(r.gain).linearRampToValueAtTime(0,s+0.18))
A.CB(B.hc,q.gnP())},
j0(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.b(s.createBufferSource())
r.buffer=i
A.b(r.playbackRate).value=d*(0.94+j.ay.aD()*0.12)
q=A.b(s.createGain())
A.b(q.gain).value=c
p=A.b(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.b(p.positionX).value=b.a
A.b(p.positionY).value=b.b
A.b(p.positionZ).value=b.c
o=A.b(s.createBiquadFilter())
o.type="lowpass"
A.b(o.frequency).value=2e4
n=A.b(s.createGain())
A.b(n.gain).value=1
m=h==null?0:h
if(g!=null&&f!=null){A.b(o.frequency).value=f
A.b(n.gain).value=Math.pow(10,g/20)}else{s=j.ch!=null
if(s){s=j.ch
s.toString
l=j.h3(j.b.iZ(e,s))
k=l.c
A.b(o.frequency).value=l.b
A.b(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.k(0,o,new A.hY(r,q,n,o,p,e,B.b.n(m,0,1)))
r.onended=A.Z(new A.oW(j,o))
A.G(r.connect(q))
A.G(q.connect(n))
A.G(n.connect(o))
A.G(o.connect(p))
A.G(p.connect(j.de(a)))
r.start()},
pj(a,b,c,d){return this.j0(a,b,c,1,d,null,null,null)},
h3(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aH(r,q,p)},
fH(a){var s,r,q,p,o=this
if(o.cy)return
s=o.at.h(0,a)
if(s==null)return
o.cy=!0
r=o.a
q=A.b(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.b(r.createGain())
A.b(p.gain).value=0.6
A.G(q.connect(p))
r=o.e
r===$&&A.u()
A.G(p.connect(r))
q.onended=A.Z(new A.oZ(o,q,p))
q.start()
o.db=q},
e0(a){if(this.p3===a)return
this.p3=a
this.fR()},
jE(a){var s,r,q=this
q.e0(a.b===B.cx)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.b7?1:0.55
r=q.c
r===$&&A.u()
r=A.b(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.u()
A.b(s.gain).value=0.35*q.R8},
bB(a,b,c,d,e,f){var s,r,q=this
q.fx=B.b.n(c==null?q.fx:c,0,1)
q.fy=B.b.n(f==null?q.fy:f,0,1)
q.go=B.b.n(b==null?q.go:b,0,1)
q.id=B.b.n(a==null?q.id:a,0,1)
q.k1=B.b.n(d==null?q.k1:d,0,1)
if(e!=null)q.k2=e
s=q.d
s===$&&A.u()
A.b(s.gain).value=0.25*q.go
s=q.r
s===$&&A.u()
A.b(s.gain).value=0.2*q.go
s=q.w
s===$&&A.u()
A.b(s.gain).value=0.4*q.go
s=q.x
s===$&&A.u()
A.b(s.gain).value=0.1*q.go
s=q.f
s===$&&A.u()
A.b(s.gain).value=0.4*q.id
s=q.e
s===$&&A.u()
A.b(s.gain).value=0.12*q.k1
s=q.y
s===$&&A.u()
A.b(s.gain).value=q.fy
s=q.c
s===$&&A.u()
s=A.b(s.gain)
r=q.k2?0:q.fx*q.p4
s.value=r},
fz(a){var s=null
return this.bB(s,s,s,s,a,s)},
jB(a){var s=null
return this.bB(s,s,a,s,s,s)},
jD(a){var s=null
return this.bB(s,s,s,s,s,a)},
jA(a){var s=null
return this.bB(s,a,s,s,s,s)},
jz(a){var s=null
return this.bB(a,s,s,s,s,s)},
jC(a){var s=null
return this.bB(s,s,s,a,s,s)},
jy(a){if(this.ch===a)return
this.ch=a
this.bT()},
bT(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cR(p,g)
m=n==null?i.h3(h.iZ(p,g)):new A.aH(n.c,n.d,n.e)
l=A.a_(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.b(A.b(o.frequency).cancelScheduledValues(l))
A.b(A.b(o.frequency).setValueAtTime(A.a_(A.b(o.frequency).value),l))
j=l+0.08
A.b(A.b(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.b(A.b(o.gain).cancelScheduledValues(l))
A.b(A.b(o.gain).setValueAtTime(A.a_(A.b(o.gain).value),l))
A.b(A.b(o.gain).linearRampToValueAtTime(k,j))
q.r=B.b.n(m.c,0,1)}}}
A.oV.prototype={
$2(a,b){return Math.max(A.ax(a),t.rK.a(b).r)},
$S:72}
A.oU.prototype={
$1(a){return this.jk(t.q.a(a))},
jk(a){var s=0,r=A.aL(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aM(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a6(A.av(A.b(A.b(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a6(A.av(A.b(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a6(A.av(A.b(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.al(h)
A.b(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.z(l))
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$$1,r)},
$S:57}
A.oY.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.oX.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.oW.prototype={
$1(a){var s=this.a.cx.a7(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.oZ.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hY.prototype={}
A.k6.prototype={
W(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.kJ.prototype={
C(){return"AudioCategory."+this.b}}
A.oK.prototype={
ke(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.a(B.jb)
if(!B.a.a5(A.d([d.a,d.b,d.c],t.n),new A.oL()))throw A.a(B.i_)}}
A.oL.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.oe.prototype={
kb(a,b){if(this.a.length===0)throw A.a(B.hJ)
if(!B.a.a5(A.d([a.a,a.b,a.c],t.n),new A.of()))throw A.a(B.i7)}}
A.of.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.il.prototype={
B(){var s=t.n
if(B.a.P(A.d([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.og()))throw A.a(B.ix)
s=B.a.P(A.d([0,0.55,1],s),new A.oh())
if(s)throw A.a(B.iX)},
cR(a,b){this.B()
if(a.ax&&!a.ay&&!a.z)return new A.aH(-1.5,2e4,0)
if(a.ay)return new A.aH(-28,320,1)
return new A.aH(-12,1100,0.55)},
pT(a){return this.cR(a,null)}}
A.og.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.oh.prototype={
$1(a){A.ax(a)
return a<0||a>1},
$S:4}
A.oG.prototype={
kd(a){var s=A.w(a)
if(new A.af(a,s.i("af<1>")).P(0,new A.oI())||new A.am(a,s.i("am<2>")).P(0,new A.oJ()))throw A.a(B.j6)}}
A.oI.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.oJ.prototype={
$1(a){var s
t.a.a(a)
s=J.aN(a)
return s.gM(a)||s.P(a,new A.oH())},
$S:74}
A.oH.prototype={
$1(a){return A.v(a).length===0},
$S:3}
A.zY.prototype={}
A.oS.prototype={}
A.oM.prototype={
kf(a,b,c){var s
for(s=this.b.gan(),s=s.gA(s);s.m();)s.gp().B()},
jd(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.a(A.i("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.a(A.i("audio listener room missing: "+a0))
r=this.m0(a,a0)
s=t.s
q=A.d([],s)
p=A.d([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.cF
e=f.cR(h,a1.h(0,g))
d=e.b
l+=e.a
if(d<k)k=d
j=1-(1-j)*(1-e.c)
if(!B.a.q(q,g))B.a.l(q,g)
B.a.l(p,"portal:"+g)}n=!r.b
if(n&&a!==a0){B.a.l(p,"unreachable")
l=-48
k=240
j=1}s=A.d([],s)
for(m=o.length,i=0;i<o.length;o.length===m||(0,A.r)(o),++i)s.push(o[i].a)
o=B.b.n(l,-60,0)
m=B.d.n(k,120,2e4)
g=B.b.n(j,0,1)
n=!n||a===a0
c=p.length===0?"unobstructed":B.a.a_(p,"; ")
b=t.N
s=A.ab(s,b)
b=A.ab(q,b)
if(!isFinite(g)||g<0||g>1)A.h(B.iW)
return new A.oS(s,b,o,m,g,n,c)},
cR(a,b){return this.jd(a,b,B.bJ)},
m0(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.rN
s=t.N
r=A.E([a0,0],s,t.i)
q=A.E([a0,B.a7],s,t.Es)
p=A.aQ([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.h,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.Y(k,new A.oN(r))
j=B.a.ga1(k)
p.a7(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.jB(s,!0)}i=o.aP(j)
h=A.J(i,i.$ti.i("t.E"))
B.a.Y(h,new A.oO())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.cL(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cF:d).pT(f)
b=r.h(0,j)
b.toString
a=b+-c.a
b=r.h(0,e)
if(a<(b==null?1/0:b)){r.k(0,e,a)
b=q.h(0,j)
b.toString
b=A.J(b,m)
b.push(f)
q.k(0,e,b)
p.l(0,e)}}}return B.rM}}
A.oN.prototype={
$2(a,b){var s,r,q
A.v(a)
A.v(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.H(r,s)
return q===0?B.c.H(a,b):q},
$S:75}
A.oO.prototype={
$2(a,b){var s=t.h
return B.c.H(s.a(a).a,s.a(b).a)},
$S:76}
A.jB.prototype={}
A.ha.prototype={}
A.pr.prototype={
iS(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.c(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Fc().b6(q).ga2()
p.d=q
p.c=p.b.b6(q).ga2()
p.a=a}}
A.q9.prototype={}
A.lz.prototype={
dV(a){if(this.at)return
A.rp(a,"requestPointerLock",t.X)},
fu(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.bZ(r,r.r,r.e,A.w(r).i("bZ<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a0(q)
for(m=J.N(o);m.m();){l=m.gp()
if(l.length!==0)n.l(0,l)}s.pv(p,n)}this.b1()},
e3(a){var s,r,q,p,o,n,m=this
if(m.ch.e3(a))for(s=m.CW.aT("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
pl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.b(f.a.navigator).getGamepads())
c=J.N(t.ik.b(c)?c:new A.bd(c,A.C(c).i("bd<1,aj?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gp()
if(r==null||!A.U(r.connected)||A.v(r.mapping)!=="standard")break A
c=A.v(r.id)
q=A.v(r.mapping)
p=t.n
o=A.d([],p)
n=d.a(r.axes)
n=J.N(t.dd.b(n)?n:new A.bd(n,A.C(n).i("bd<1,y>")))
while(n.m())o.push(n.gp())
p=A.d([],p)
d=d.a(r.buttons)
d=J.N(t.nx.b(d)?d:new A.bd(d,A.C(d).i("bd<1,aj>")))
while(d.m()){r=d.gp()
p.push(A.U(r.pressed)?1:A.a_(r.value))}s=new A.mv(!0,c,q,o,p)
break}}d=s==null
m=A.I0(d?B.qv:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.P(c.aT(e),q.gaH(q))
q=f.r
q.lb(A.w(q).i("l(1)").a(new A.rh(l)),!0)
for(p=l.gA(l),o=p.$ti.c,n=f.f,j=c.a,i=f.ch;p.m();){h=p.d
if(h==null)h=o.a(h)
if(!f.e.q(0,h)&&!q.q(0,h)){g=j.h(0,e)
if(B.a.q(g==null?B.o:g,h)){if(i.f1())n.l(0,h)}else n.l(0,h)}}f.e=A.hw(l,t.N)
f.w=m.a
f.x=m.b
f.y=m.c
f.z=d?null:s.b
d=!1
if(k){r.a(l)
if(!B.a.P(c.aT(e),l.gaH(l))){d=r.a(f.c)
d=!B.a.P(c.aT(e),d.gaH(d))}}if(d)i.f2()},
lt(a){var s=this
A.b(a)
if(A.U(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.v(a.code)))if(B.a.q(s.CW.aT("interact"),A.v(a.code))){if(s.ch.f1())s.d.l(0,A.v(a.code))}else s.d.l(0,A.v(a.code))},
lv(a){var s,r,q="interact"
A.b(a)
s=this.c
s.a7(0,A.v(a.code))
r=this.CW
if(B.a.q(r.aT(q),A.v(a.code))){t.Q.a(s)
s=!B.a.P(r.aT(q),s.gaH(s))}else s=!1
if(s)this.ch.f2()},
lz(a){var s,r=this
A.b(a)
if(!r.ay)return
s="Mouse"+A.j(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aT("interact"),s)){if(r.ch.f1())r.d.l(0,s)}else r.d.l(0,s)},
lD(a){var s,r="interact",q="Mouse"+A.j(A.b(a).button),p=this.c
p.a7(0,q)
s=this.CW
if(B.a.q(s.aT(r),q)){t.Q.a(p)
p=!B.a.P(s.aT(r),p.gaH(p))}else p=!1
if(p)this.ch.f2()},
lF(a){var s
A.b(a)
if(!this.ay)return
s=A.a_(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
lB(a){var s=this
A.b(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.hq(a,"movementX")
s.as=s.as+s.hq(a,"movementY")},
lx(a){var s=this,r=s.b.pointerLockElement==null
s.at=!r
s.as=s.Q=0
if(r)s.b1()},
lH(a){this.b1()},
hq(a,b){var s=A.Dt(a[b])
if(s==null)s=null
return s==null?0:s},
d7(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fq(n.c,t.N)
for(r=n.e,r=A.eW(r,r.r,A.w(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.P(n.CW.aT(a),s.gaH(s))},
b1(){var s=this
s.c.R(0)
s.d.R(0)
s.f.R(0)
s.r.L(0,s.e)
s.as=s.Q=0
s.ch.f9()}}
A.rh.prototype={
$1(a){return!this.a.q(0,A.v(a))},
$S:3}
A.rg.prototype={
aT(a){var s=this.a.h(0,a)
return s==null?B.o:s},
pv(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.J(a))return
r=t.N
q=A.a0(r)
for(p=A.eW(b,b.r,A.w(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ab(q,r))},
bu(a,b){var s,r,q
t.Q.a(b)
for(s=this.aT(a),r=s.length,q=0;q<r;++q)if(b.a7(0,s[q]))return!0
return!1}}
A.rk.prototype={
f1(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
f2(){this.c=this.b=!1
this.d=0},
e3(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.n(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
f9(){this.c=this.b=!1
this.d=0}}
A.bc.prototype={}
A.rF.prototype={}
A.rC.prototype={
pp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a0(h)
r=A.J(b,t.je)
B.a.L(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.a(A.p("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.d([],r)
m=A.d([],r)
l=A.d([],r)
k=A.d([],r)
j=A.m(h,t.N)
i.hf(n,i.d,a,b,i.a,j,m)
i.hf(l,i.e,a,c,i.b,j,k)
return new A.rF(n,l,j)},
hf(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("I<1,+effectiveScore,light,score(y,bc,y)>")
r=A.J(new A.I(d,k.i("+effectiveScore,light,score(y,bc,y)(1)").a(new A.rD(this,c,b)),s),s.i("a1.E"))
B.a.Y(r,new A.rE())
q=A.a0(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.R(0)
b.L(0,q)}}
A.rD.prototype={
$1(a){var s,r
t.je.a(a)
s=a.c.Z(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jU(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:78}
A.rE.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.H(b.a,a.a)
return s===0?B.d.H(a.b.a,b.b.a):s},
$S:79}
A.pO.prototype={
ew(a,b){var s,r,q,p,o,n,m,l=this
if(b<=0||!isFinite(b))return l.a
s=l.a
r=1+2*b*12.5
q=b*156.25
p=b*q
o=1/(r+p)
n=l.b
m=(r*s+b*n+p*a)*o
l.a=m
l.b=(n-q*(s-a))*o
return m}}
A.rL.prototype={
jW(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.ew(b,c)},
mt(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.c(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.O(s,6.283185307179586)
r=Math.sin(s)
return new A.c(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.dl.prototype={
C(){return"MaterialFamily."+this.b}}
A.be.prototype={
D(){var s=this
return A.E(["id",s.a,"family",s.b.b,"textureKey",s.c,"tint",A.d([s.d,s.e,s.f],t.n),"roughness",s.r,"metallic",s.w,"emissive",0,"alpha",s.y,"uvScale",1],t.N,t.z)}}
A.rP.prototype={
aG(a){var s,r=a.a,q=!1
if(r.length!==0)if(a.c.length!==0)if(isFinite(a.d))if(isFinite(a.e))if(isFinite(a.f)){s=a.r
if(isFinite(s))if(s>=0)if(s<=1){s=a.w
if(isFinite(s))if(s>=0)if(s<=1)if(isFinite(0)){s=a.y
if(isFinite(s))if(s>=0)if(s<=1)q=isFinite(1)}}}if(!q)throw A.a(A.i("Invalid material descriptor "+r))
q=this.a
if(q.J(r))throw A.a(A.i("Duplicate material descriptor "+r))
q.k(0,r,a)}}
A.e3.prototype={
cO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.n.cX(s,0,l,k)
m.a=s}r=b.Z(0,a).b6(d.Z(0,a)).ga2()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.jr(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
l=A.jr(m.a,l,b,r,q,p,o,n,f,1,0,0)
m.b=l
l=A.jr(m.a,l,c,r,q,p,o,n,f,1,1,0)
m.b=l
l=A.jr(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
l=A.jr(m.a,l,c,r,q,p,o,n,f,1,1,0)
m.b=l
m.b=A.jr(m.a,l,d,r,q,p,o,n,f,0,1,0)},
bK(a,b,c,d,e){return this.cO(a,b,c,d,e,1,!1)},
j2(a,b,c,d,e,f){return this.cO(a,b,c,d,e,f,!1)}}
A.c.prototype={
S(a,b){return new A.c(this.a+b.a,this.b+b.b,this.c+b.c)},
Z(a,b){return new A.c(this.a-b.a,this.b-b.b,this.c-b.c)},
a3(a,b){return new A.c(this.a*b,this.b*b,this.c*b)},
bh(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b6(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.c(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga2(){var s=this,r=s.gu(0)
return r<1e-9?new A.c(0,0,0):new A.c(s.a/r,s.b/r,s.c/r)}}
A.w5.prototype={
B(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.P(A.d([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.w6()))throw A.a(B.hB)
s=!0
if(!(q<0))if(!(q>1))if(!(p<0))if(!(p>1))if(!(o<0))if(!(o>1))if(!(n<0))if(!(n>1))if(!(m<0))if(!(m>1))if(!(l<0))if(!(k<0))if(!(k>1))if(j>0)if(!(i<0))if(!(i>1))if(!(h<0))if(!(h>1))q=g<0
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
else q=s
if(q)throw A.a(B.hI)}}
A.w6.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.cE.prototype={
B(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.a(B.iE)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a5(A.d([s,r,q,p,o],t.n),new A.w7()))throw A.a(B.i5)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.a(B.j4)}}
A.w7.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.eS.prototype={
B(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a5(A.d([o,s,r,q],t.n),new A.w2())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.a(B.hS)}}
A.w2.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.w3.prototype={
B(){var s,r,q,p,o,n,m,l=this,k=A.a0(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.B()
if(!k.l(0,p.a))throw A.a(B.iK)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.B()
if(!k.l(0,o.a))throw A.a(B.iL)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a5(A.d([s,r,n,m],t.n),new A.w4())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.a(B.hY)}}
A.w4.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.w1.prototype={
cP(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a5.B()
s=a5.f
r=a5.r
q=1/Math.pow(1+a5.w/18,0.72)
p=B.b.n((0.05+0.95*s)*(0.18+0.82*r)*q,0,1)
o=1-s
n=Math.exp(Math.log(320)*o+Math.log(2e4)*s)
m=B.b.n(0.18+0.62*(1-a5.as),0,1)
l=a5.b
k=B.b.n(a5.c/18,0,1)
j=A.d([],t.eQ)
if(l>0.001&&a5.a!==B.w){i=a5.a
h=i.a
g="weather-rain"
switch(h){case 1:break
case 2:g="weather-sleet"
break
case 3:g="weather-snow"
break
case 4:g="weather-hail"
break
case 0:break
default:g=null}switch(h){case 1:h=0.82
break
case 2:h=0.72
break
case 3:h=0.38
break
case 4:h=1
break
case 0:h=0
break
default:h=null}h=B.b.n(l*h*p,0,1)
i=i===B.ae?80:120
B.a.l(j,new A.cE("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.l(j,new A.cE("exterior-wind","weather-wind",B.b.n(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.n(a5.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.l(j,new A.cE("through-wall-thunder","weather-thunder-bed",B.b.n(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a5.a
e=i===B.a_||i===B.ad
d=B.b.n(a5.ay*l,0,1)
if(e&&d>0.001)B.a.l(j,new A.cE("structure-hail-impact","weather-hail-roof",B.b.n(d*(0.16+0.38*o)*(0.35+0.65*r),0,1),760+1500*p,48,0,m*0.92,!0))
c=B.b.n(k*f*(1-0.72*s)*(0.3+0.7*r),0,1)
if(c>0.01)B.a.l(j,new A.cE("window-frame-resonance","weather-window-rattle",c*0.22,1800+1600*c,45,0,m*0.65,!0))
if(s>0.03&&l>0.08)B.a.l(j,new A.cE("interior-window-drip","weather-interior-drip",B.b.n(l*s*(0.35+0.65*k),0,1)*0.34,7200,180,0,m,!0))
i=a5.ax
b=B.b.n(i*0.75+B.b.n((a5.d+5)/25,0,1)*0.25,0,1)
if(i>0.02){B.a.l(j,new A.cE("interior-warmth","weather-interior-warmth",0.08*i,900,35,0,0.12,!0))
B.a.l(j,new A.cE("interior-coffee-roomtone","weather-interior-coffee",0.018*i*(0.55+0.45*o),2600,110,0,0.24*m,!0))}a=A.d([],t.wb)
a0=B.d.af(a5.CW,30)
if(a0!==a4.b){a4.b=a0
o=a5.cx
a1=a4.df(o,a0,17)*2-1
h=a4.df(o,a0,23)
g=a0>0
if(g&&e&&d>0.12&&(a0&1)===0)B.a.l(a,new A.eS("hail-impact-"+a0,"weather-hail-tick",0,B.b.n(0.08+d*0.24,0,1),0.92+h*0.16,a1))
if(g&&c>0.2&&B.d.O(a0,3)===0)B.a.l(a,new A.eS("window-rattle-"+a0,"weather-window-tick",0,B.b.n(0.035+c*0.12,0,1),0.94+a4.df(o,a0,31)*0.12,a1*0.55))
if(g&&i>0.5&&B.d.O(a0,15)===0)B.a.l(a,new A.eS("coffee-clink-"+a0,"weather-coffee-clink",0,0.025+i*0.035,0.98+a4.df(o,a0,43)*0.08,a1*0.25))}if(a5.Q&&a5.z!==a4.a){o=a4.a=a5.z
a2=Math.max(1,a5.y)
i=Math.pow(1+a2/1200,0.8)
h=B.d.O((a5.cx^o)>>>0,200)
g=a2<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.l(a,new A.eS("lightning-thunder-"+o,g,a2/343,B.b.n((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.n(0.94+B.d.O(o,11)*0.012,0.88,1.08),B.b.n((h-100)/100,-1,1)))}a3=new A.w3(A.ab(j,t.uz),A.ab(a,t.EI),p,n,m,b)
a3.B()
return a3},
df(a,b,c){var s=a^b*73244475^c*668265261
s=((s^s>>>16)>>>0)*73244475
return((s^s>>>16)&2147483647)/2147483647}}
A.mv.prototype={}
A.mW.prototype={}
A.pk.prototype={
q6(a){var s,r,q,p,o,n=B.f.a0(a.D(),null)
this.a.ie(n)
s=A.b(A.b(v.G.window).localStorage)
r=A.ac(s.getItem("quarantine.save.active"))
q=A.ac(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
pq(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.b(A.b(v.G.window).localStorage)
r=A.ac(s.getItem("quarantine.save.active"))
q=A.ac(s.getItem("quarantine.save.previous"))
p=this.h8(r,a)
if(p!=null)return new A.fC(p,null)
o=this.h8(q,a)
if(o!=null)return new A.fC(o,"recovered previous save")
if(r==null)return B.pF
return B.pE}catch(n){return B.pD}},
h8(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.ie(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.al(q) instanceof A.A)return null
else throw q}}}
A.lb.prototype={
ki(a,b,c,d,e){if(this.a.length===0)throw A.a(B.iQ)
if(this.b<0)throw A.a(B.i0)},
D(){var s,r=this,q=r.d
q=q==null?null:A.ab(q,t.i)
s=t.z
return A.aX(A.E(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cv.prototype={
C(){return"EndingKind."+this.b}}
A.pX.prototype={}
A.hm.prototype={
D(){var s=t.N
return A.E(["kind",this.a.b],s,s)}}
A.q_.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:80}
A.bK.prototype={}
A.m4.prototype={
D(){var s,r=this,q=t.N,p=A.m(q,t.z)
p.k(0,"roomId",r.a)
s=r.b
p.k(0,"eye",A.E(["x",s.a,"y",s.b,"z",s.c],q,t.i))
p.k(0,"yaw",r.c)
p.k(0,"pitch",r.d)
q=r.e
if(q!=null)p.k(0,"activeStairId",q)
q=r.f
if(q!=null)p.k(0,"activeStairProgress",q)
return p},
ou(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.Z(0,new A.c(0,1.3499999999999999,0))
return!new A.kS(s,s.S(0,new A.c(0,1.2000000000000002,0))).dL(a,r)}}
A.tO.prototype={
D(){return A.xt(this.a)}}
A.hK.prototype={
D(){return A.E(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.uk.prototype={
ie(a){var s,r,q,p,o,n,m,l=B.f.ai(a,null),k=t.f
if(!k.b(l))throw A.a(B.j9)
s=t.N
r=t.z
q=A.b_(l,s,r)
p=q.h(0,"version")
if(A.b4(p))o=p!==1&&p!==2
else o=!0
if(o)A.h(A.M("unsupported save version "+A.z(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.h(B.ie)
k=A.b_(n,s,r)
return A.Cs(A.b_(m,s,r),k,2)}}
A.fC.prototype={}
A.dN.prototype={
C(){return"GameSessionEventType."+this.b}}
A.lp.prototype={}
A.qm.prototype={}
A.ql.prototype={
gal(){var s=this.d
return new A.qm(s.a,s.b,this.e.b.a)},
gj1(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.E(["day",l.a,"hour",l.b],k,t.fY)
s=m.f
r=t.K
s=A.E(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.E(["entryCount",m.e.b.a],k,t.S)
p=A.BT(m.c).D()
o=m.r
n=o.c
return new A.tO(A.xt(A.E(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.E(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.D()],k,t.z)))},
my(a,b){if(!B.a.P(a.f,new A.qn(b)))return!1
this.z.mw(a,b)
return!0},
mx(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.oi(n))return!1
m=m.b
m.k(0,n,"true")
s=a.b
m.k(0,n+".consumer",s)
m.k(0,"last-authored-event",o)
if(s==="aftermath")m.k(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bI(q,"=")
if(p<=0||p===q.length-1)continue
m.k(0,B.c.K(q,0,p),B.c.aR(q,p+1))}return!0},
oe(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.w(s).i("am<2>")
q=A.J(new A.am(s,r),r.i("t.E"))
B.a.Y(q,new A.qo())
if(q.length===0)return null
s=A.C(q)
r=s.i("F<1>")
p=A.J(new A.F(q,s.i("l(1)").a(new A.qp()),r),r.i("t.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dJ(a),r=t.sU,s=new A.an(s,s.gu(0),r.i("an<a4.E>")),r=r.i("a4.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.O(n,o.length)]
s=l.c
k=new A.db(a,l.a,s.length-1,B.a.gaa(s).t(0))
j.k(0,a,k)
return k},
ms(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.a(A.a7(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.dc(B.jl)}if(n<a)this.dc(B.jm)},
jZ(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.e2(a)&&s.jY(b)},
pr(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.eU){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
jV(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.FP(j,A.ab(i.d,h).length)
if(a===B.eA)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.FO(j,new A.F(r,q.i("l(1)").a(new A.qq(k)),q.i("F<1>")).gu(0))
r=k.f
q=r.b
if(B.a.q(B.kK,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.ap(j.a/1*3)
B.a.l(r.r,new A.hM(q.a,a,b))
m=r.a
A.G_(m,q.a,n,k.b,A.ab(m.d,h));++q.a
q.fE(7)
r.c=16
r.d=6
r.f=!1
m.jH(B.ls)
s.y.n2(o,c)
l=B.b.ap(j.b/1*6)
if(l>0)r.e2(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.am(i,A.w(i).i("am<2>")).P(0,new A.qr())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.dc(B.jq)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.dc(B.jp)},
hx(a,b){var s=this;++s.y
B.a.l(s.w,new A.lp())
B.a.l(s.x,A.FQ(A.Ja(a),s.b,s.y-1))},
dc(a){return this.hx(a,null)}}
A.qn.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:15}
A.qo.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:13}
A.qp.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:24}
A.qq.prototype={
$1(a){t.J.a(a)
return a.e.length!==0&&!new A.ve().jS(this.a.c,a.a)},
$S:18}
A.qr.prototype={
$1(a){return t.g.a(a).e},
$S:24}
A.bV.prototype={}
A.os.prototype={
$1(a){var s
t.Dd.a(a)
s=a.b
return s>=-0.01&&s+a.d<=this.a.a+0.01},
$S:36}
A.ot.prototype={
$2(a,b){var s=t.Dd
return B.b.H(s.a(a).b,s.a(b).b)},
$S:32}
A.io.prototype={}
A.ox.prototype={
jl(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
$.kv()
s=$.EJ().ph(a1)
r=A.d([],t.lE)
for(q=s.a.gan(),q=q.gA(q);q.m();){p=q.gp()
for(o=p.w,p=p.a,n="arch:"+p+":",m=0;m<o.length;++m){l=o[m]
if(l.e==="procedural"){k=l.d
if(k==null)k="mat-wood-oak"
j=$.EG().a.h(0,k)
if(j==null)j=B.mM
i=new A.bW(new Float32Array(10752))
h=Math.max(0.04,l.z)
g=-h
i.ex(new A.c(g,0,g),new A.c(h,Math.max(0.04,l.Q),h),(B.b.ah(B.b.n(j.d*255,0,255))<<16|B.b.ah(B.b.n(j.e*255,0,255))<<8|B.b.ah(B.b.n(j.f*255,0,255)))>>>0,j.y)
g=i.a
f=new Float32Array(g.subarray(0,A.nQ(0,i.b,g.length)))
B.a.l(r,new A.io(n+l.a,p,l.r,l.w,l.x,f))}else{g=l.b
e=g!=null?B.bI.h(0,g):null
if(e==null)continue
i=new A.bW(new Float32Array(10752))
d=e.f*0.5
c=e.r
b=e.w*0.5
a=this.kP(e.Q)
g=-d
a0=-b
i.v(new A.c(g,0,a0),new A.c(d,c,b),a)
i.v(new A.c(g*0.85,c*0.9,a0*0.85),new A.c(d*0.85,c,b*0.85),(B.b.ah(B.b.n((a>>>16&255)*1.2,0,255))<<16|B.b.ah(B.b.n((a>>>8&255)*1.2,0,255))<<8|B.b.ah(B.b.n((a&255)*1.2,0,255)))>>>0)
a0=i.a
f=new Float32Array(a0.subarray(0,A.nQ(0,i.b,a0.length)))
this.m1(e)
a0=e.a
B.a.l(r,new A.io(n+a0+":"+m,p,l.r,l.w,l.x,f))}}}return r},
kP(a){var s
A:{if("living"===a){s=6048314
break A}if("storage"===a){s=7231042
break A}if("lighting"===a){s=11045709
break A}if("kitchen"===a){s=8289144
break A}if("service"===a){s=4737870
break A}if("attic"===a){s=5785659
break A}if("cellar"===a){s=4930350
break A}if("utility"===a){s=7041141
break A}if("roof"===a){s=4080200
break A}s=5592405
break A}return s},
m1(a){var s,r=a.Q
A:{s="polyhaven-rough-wood"
if("roof"===r){s="polyhaven-roof-slates"
break A}if("cellar"===r){s="polyhaven-damp-brick"
break A}if("attic"===r)break A
break A}return s}}
A.bt.prototype={
C(){return"FunctionalZone."+this.b}}
A.cc.prototype={
geI(){return this.x},
D(){var s,r,q=this,p=A.m(t.N,t.z)
p.k(0,"instanceId",q.a)
p.k(0,"source",q.e)
s=q.b
if(s!=null)p.k(0,"modelId",s)
s=q.c
if(s!=null)p.k(0,"propKind",s)
s=q.d
if(s!=null)p.k(0,"materialFamily",s)
p.k(0,"roomId",q.f)
s=q.r
r=t.n
p.k(0,"worldPosition",A.d([s.a,s.b,s.c],r))
p.k(0,"rotationYDegrees",q.w)
p.k(0,"scale",A.d([q.geI().a,q.geI().b,q.geI().c],r))
p.k(0,"zone",q.y.b)
p.k(0,"collisionRadius",q.z)
p.k(0,"collisionHeight",q.Q)
s=q.as
if(s!=null)p.k(0,"interactiveTag",s)
s=q.at
if(s!=null)p.k(0,"canonicalPropId",s)
return p}}
A.dr.prototype={
D(){var s,r=this,q=r.r,p=A.C(q),o=p.i("I<1,f>")
q=A.J(new A.I(q,p.i("f(1)").a(new A.ug()),o),o.i("a1.E"))
p=r.w
o=A.C(p)
s=o.i("I<1,V<f,@>>")
p=A.J(new A.I(p,o.i("V<f,@>(1)").a(new A.uh()),s),s.i("a1.E"))
return A.E(["roomId",r.a,"displayName",r.b,"architecturalStyle",r.c,"pbrWall",r.d,"pbrFloor",r.e,"pbrCeiling",r.f,"zones",q,"modelInstances",p,"builtInFeatures",r.x],t.N,t.z)}}
A.ug.prototype={
$1(a){return t.jI.a(a).b},
$S:87}
A.uh.prototype={
$1(a){return t.oz.a(a).D()},
$S:88}
A.c4.prototype={}
A.ou.prototype={
gmv(){var s=this.a.gan(),r=A.w(s),q=r.i("fh<t.E,cc>")
s=A.J(new A.fh(s,r.i("t<cc>(t.E)").a(new A.ov()),q),q.i("t.E"))
s.$flags=1
return s},
D(){var s=this.b,r=t.N
return A.E(["isValid",s.length===0,"validationErrors",s,"rooms",this.a.bl(0,new A.ow(),r,t.P),"totalModelInstances",this.gmv().length],r,t.z)}}
A.ov.prototype={
$1(a){return t.lW.a(a).w},
$S:89}
A.ow.prototype={
$2(a,b){return new A.P(A.v(a),t.lW.a(b).D(),t.fq)},
$S:90}
A.qQ.prototype={
ph(a){var s,r,q,p,o,n=this,m=t.N,l=t.lW,k=A.m(m,l),j=A.d([],t.s)
for(s=a.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
k.k(0,p.a,n.kD(a,p))}k.k(0,"attic",n.pg(a))
k.k(0,"roof",n.pi(a))
B.a.L(j,n.a.cc(a))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=k.h(0,p.a)
if(o==null)continue
n.mj(a,p,o,j)}return new A.ou(A.aX(k,m,l),A.ab(j,m))},
kD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.a,c=B.mr.h(0,d)
if(c==null)c=new A.c4(d,"Generic Architectural Interior","polyhaven-decrepit-wallpaper","polyhaven-diagonal-parquet","polyhaven-ceiling-interior",B.dw,B.kH)
s=b.d
r=this.a.c5(d)
q=A.d([],t.nl)
for(p=J.N(r.a),o=new A.R(p,r.b,r.$ti.i("R<1>")),n=s.a,m=s.b,l=s.c;o.m();){k=p.gp()
j=k.a
i=k.c
h=k.d
g=k.e
f=k.f
e=k.r
q.push(new A.cc(j,h,g,f,i,d,new A.c(n+e.a,m+e.b,l+e.c),k.w,k.x,k.y,k.z,k.Q,k.at,k.ax))}return new A.dr(d,c.a,c.b,c.c,c.d,c.e,c.f,q,c.r)},
pg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="attic",f=a.b,e=A.C(f),d=e.i("l(1)").a(new A.qR())
for(f=B.a.gA(f),e=new A.R(f,d,e.i("R<1>")),s=0;e.m();){d=f.gp()
r=a.ac(d)
q=d.d.b+r.b
if(q>s)s=q}p=this.a.c5(g)
f=A.d([],t.nl)
for(e=J.N(p.a),d=new A.R(e,p.b,p.$ti.i("R<1>"));d.m();){o=e.gp()
n=o.a
m=o.c
l=o.d
k=o.e
j=o.f
i=o.r
h=i.b
if(h===0)h=s
f.push(new A.cc(n,l,k,j,m,g,new A.c(i.a,h,i.c),o.w,o.x,o.y,o.z,o.Q,o.at,o.ax))}return new A.dr(g,"Attic & Roof Loft",u.o,"polyhaven-damaged-plaster","floor-wood","polyhaven-roof-slates",B.dx,f,B.dO)},
pi(a){var s,r,q,p,o,n,m,l,k,j="roof",i="polyhaven-roof-slates",h=this.a.c5(j),g=A.d([],t.nl)
for(s=J.N(h.a),r=new A.R(s,h.b,h.$ti.i("R<1>"));r.m();){q=s.gp()
p=q.a
o=q.c
n=q.d
m=q.e
l=q.f
k=q.r
g.push(new A.cc(p,n,m,l,o,j,new A.c(k.a,k.b,k.c),q.w,q.x,q.y,q.z,q.Q,q.at,q.ax))}return new A.dr(j,"Exterior Slate Roof & Chimney Stacks",u.n,i,i,i,B.dy,g,B.dM)},
mj(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.a.a(a8)
s=a6.d
r=a5.ac(a6)
for(q=a6.a,p=a5.aP(q),o=J.N(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=a7.w,m="Portal collision hazard in ["+q+"]: Model [",l=s.a,k=l+r.a,j=s.b,i=s.c,h=i+r.c;p.m();){g=o.gp()
f=g.aW(q)
e=g.aO(q)
switch(f.a){case 0:d=new A.c(l+e,j,i)
break
case 2:d=new A.c(l+e,j,h)
break
case 3:d=new A.c(l,j,i+e)
break
case 1:d=new A.c(k,j,i+e)
break
default:d=null}for(c=n.length,b=d.a,d=d.c,g=g.a,a=0;a<n.length;n.length===c||(0,A.r)(n),++a){a0=n[a]
a1=a0.r
a2=a1.a-b
a3=a1.c-d
a4=Math.sqrt(a2*a2+a3*a3)
if(a4<0.7&&a0.z>0.2)B.a.l(a8,m+A.z(a0.b)+"] at "+a1.t(0)+" is within "+A.z(a4)+" m of portal "+g)}}for(p=n.length,o=j-0.05,q="Floor datum violation in ["+q+"]: Model [",j=A.z(j),a=0;a<n.length;n.length===p||(0,A.r)(n),++a){a0=n[a]
m=a0.r.b
if(m<o)B.a.l(a8,q+A.z(a0.b)+"] is below floor datum (y="+A.z(m)+" < "+j+")")}}}
A.qR.prototype={
$1(a){return t.J.a(a).b.b==="first"},
$S:18}
A.iW.prototype={
C(){return"ModelSource."+this.b}}
A.iV.prototype={
C(){return"ModelFormat."+this.b}}
A.au.prototype={}
A.bW.prototype={
o3(a){var s,r,q=this.b,p=q+a,o=this.a,n=o.length
if(p>n){s=n*2
while(s<p)s*=2
r=new Float32Array(s)
B.n.cX(r,0,q,o)
this.a=r}},
cM(a,b,c,d,e,f,g,h,i,j,k,a0){var s,r,q,p,o,n,m,l=this
l.o3(84)
s=h==null?b.Z(0,a).b6(d.Z(0,a)).ga2():h
r=(e>>>16&255)/255
q=(e>>>8&255)/255
p=(e&255)/255
o=A.im(l.a,l.b,a,s,r,q,p,0,f,i,k,g)
l.b=o
n=i+j
o=A.im(l.a,o,b,s,r,q,p,0,f,n,k,g)
l.b=o
m=k+a0
o=A.im(l.a,o,c,s,r,q,p,0,f,n,m,g)
l.b=o
o=A.im(l.a,o,a,s,r,q,p,0,f,i,k,g)
l.b=o
n=A.im(l.a,o,c,s,r,q,p,0,f,n,m,g)
l.b=n
l.b=A.im(l.a,n,d,s,r,q,p,0,f,i,m,g)},
c8(a,b,c,d,e,f,g,h,i){return this.cM(a,b,c,d,e,f,g,null,0,h,0,i)},
cN(a,b,c,d,e,f){return this.cM(a,b,c,d,e,1,0,f,0,1,0,1)},
c7(a,b,c,d,e,f,g){return this.cM(a,b,c,d,e,1,0,null,0,f,0,g)},
j3(a,b,c,d,e,f,g,h){return this.cM(a,b,c,d,e,1,0,f,0,g,0,h)},
po(a,b,c,d,e,f,g,h,i,j){return this.cM(a,b,c,d,e,1,0,f,g,h,i,j)},
ex(a,b,c,d){var s=this,r=a.a,q=a.b,p=a.c,o=b.a,n=b.b,m=b.c
s.c8(new A.c(r,n,p),new A.c(r,n,m),new A.c(o,n,m),new A.c(o,n,p),c,d,0,1,1)
s.c8(new A.c(r,q,m),new A.c(r,q,p),new A.c(o,q,p),new A.c(o,q,m),c,d,0,1,1)
s.c8(new A.c(o,q,p),new A.c(r,q,p),new A.c(r,n,p),new A.c(o,n,p),c,d,0,1,1)
s.c8(new A.c(r,q,m),new A.c(o,q,m),new A.c(o,n,m),new A.c(r,n,m),c,d,0,1,1)
s.c8(new A.c(r,q,p),new A.c(r,q,m),new A.c(r,n,m),new A.c(r,n,p),c,d,0,1,1)
s.c8(new A.c(o,q,m),new A.c(o,q,p),new A.c(o,n,p),new A.c(o,n,m),c,d,0,1,1)},
v(a,b,c){return this.ex(a,b,c,1)}}
A.fu.prototype={
D(){var s,r,q=this,p=t.N,o=A.m(p,t.z)
o.k(0,"instanceId",q.a)
o.k(0,"roomId",q.b)
o.k(0,"source",q.c)
s=q.d
if(s!=null)o.k(0,"modelId",s)
s=q.e
if(s!=null)o.k(0,"propKind",s)
s=q.f
if(s!=null)o.k(0,"materialFamily",s)
s=q.r
r=t.n
o.k(0,"position",A.d([s.a,s.b,s.c],r))
o.k(0,"rotationY",q.w)
s=q.x
o.k(0,"scale",A.d([s.a,s.b,s.c],r))
o.k(0,"zone",q.y.b)
o.k(0,"collision",A.E(["radius",q.z,"height",q.Q],p,t.i))
o.k(0,"visibilityLayer",q.as)
p=q.at
if(p!=null)o.k(0,"interactiveTag",p)
p=q.ax
if(p!=null)o.k(0,"canonicalPropId",p)
o.k(0,"pickable",q.ay)
return o}}
A.r3.prototype={
c5(a){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.r4(a)),r.i("F<1>"))},
cc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=" references uncataloged modelId: ",f=A.d([],t.s),e=A.a0(t.N)
for(s=this.c,r=s.length,q=a.e,p=0;p<r;++p){o=s[p]
n=o.a
if(!e.l(0,n))B.a.l(f,"Duplicate placement instanceId: "+n)
m=o.b
if(m==="attic"||m==="roof"){if(o.c==="catalog"){m=o.d
if(m==null||!B.bI.J(m))B.a.l(f,"Placement "+n+g+A.z(m))}continue}l=q.h(0,m)
if(l==null){B.a.l(f,"Placement "+n+" references unknown roomId: "+m)
continue}k=a.ac(l)
j=o.r
i=j.a
h=!0
if(!(i<-0.2))if(!(i>k.a+0.2)){j=j.c
j=j<-0.2||j>k.c+0.2}else j=h
else j=h
if(j)B.a.l(f,"Placement "+n+" exceeds room bounds for "+m)
m=o.c
if(m==="catalog"){j=o.d
if(j==null||!B.bI.J(j))B.a.l(f,"Placement "+n+g+A.z(j))}if(m==="procedural"){m=o.e
if(m==null||m.length===0)B.a.l(f,"Placement "+n+" missing propKind for procedural source")}}return f}}
A.r4.prototype={
$1(a){return t.zV.a(a).b===this.a},
$S:91}
A.hA.prototype={}
A.tU.prototype={
$1(a){t.Dd.a(a)
return a.r&&a.c<0.1},
$S:36}
A.tV.prototype={
$2(a,b){var s=t.Dd
return B.b.H(s.a(a).b,s.a(b).b)},
$S:32}
A.ue.prototype={
mQ(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=5782060,a5=2368550,a6=new A.bW(new Float32Array(10752)),a7=b0.b,a8=A.C(a7),a9=a8.i("l(1)").a(new A.uf())
if(!new A.F(a7,a9,a8.i("F<1>")).gA(0).m())return new Float32Array(0)
for(a7=B.a.gA(a7),a8=new A.R(a7,a9,a8.i("R<1>")),s=1/0,r=-1/0,q=1/0,p=-1/0,o=0;a8.m();){a9=a7.gp()
n=b0.ac(a9)
a9=a9.d
m=a9.a
if(m<s)s=m
l=m+n.a
if(l>r)r=l
k=a9.c
if(k<q)q=k
j=k+n.c
if(j>p)p=j
i=a9.b+n.b
if(i>o)o=i}h=o+(p-q)*0.4
g=s-0.45
f=r+0.45
e=q-0.45
d=p+0.45
c=(q+p)*0.5
b=A.rc("polyhaven-roof-slates")
a7=b.c
a8=b.e
a9=(r-s)/a8
a=h-o
a8=a/a8
a6.c7(new A.c(g,o,e),new A.c(f,o,e),new A.c(f,h,c),new A.c(g,h,c),a7,a9,a8)
a6.c7(new A.c(g,h,c),new A.c(f,h,c),new A.c(f,o,d),new A.c(g,o,d),a7,a9,a8)
a8=g-0.05
a9=f+0.05
a6.v(new A.c(a8,h-0.05,c-0.12),new A.c(a9,h+0.1,c+0.12),9062454)
a7=o-0.18
a0=e-0.04
a1=o+0.02
a6.v(new A.c(g,a7,a0),new A.c(f,a1,e),4074786)
a2=d+0.04
a6.v(new A.c(g,a7,d),new A.c(f,a1,a2),4074786)
a=o+a*0.5
a6.v(new A.c(s,o,q),new A.c(s+0.28,a,p),a4)
a6.v(new A.c(r-0.28,o,q),new A.c(r,a,p),a4)
a3=c-0.35
a=h+0.8
this.fU(a6,s+1.8,a,a3,a4,11031098)
this.fU(a6,r-2.4,a,a3,a4,11031098)
a=o-0.08
a6.v(new A.c(a8,a,e-0.12),new A.c(a9,a1,a0),a5)
a6.v(new A.c(a8,a,a2),new A.c(a9,a1,d+0.12),a5)
a1=o-0.05
a6.v(new A.c(g-0.02,0,e-0.1),new A.c(g+0.08,a1,e-0.02),a5)
a6.v(new A.c(f-0.08,0,d+0.02),new A.c(f+0.02,a1,d+0.1),a5)
return B.n.ae(a6.a,0,a6.b)},
fU(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=b+0.85,i=d+0.65
a.v(new A.c(b,c-1.4,d),new A.c(j,c,i),e)
a.v(new A.c(b-0.08,c-1.45,d-0.08),new A.c(j+0.08,c-1.35,i+0.08),5133660)
s=c+0.12
a.v(new A.c(b-0.06,c,d-0.06),new A.c(j+0.06,s,i+0.06),4074786)
for(j=[0.22,0.63],i=d+0.325,r=i-0.1,q=c+0.72,p=i+0.1,o=c+0.62,n=i-0.12,m=c+0.7,i+=0.12,l=0;l<2;++l){k=b+j[l]
a.v(new A.c(k-0.1,s,r),new A.c(k+0.1,q,p),f)
a.v(new A.c(k-0.12,o,n),new A.c(k+0.12,m,i),f)}}}
A.uf.prototype={
$1(a){return t.J.a(a).b.b==="first"},
$S:18}
A.wk.prototype={
$3(a,b,c){var s,r=this
switch(r.a.a){case 0:s=r.b.d
s=new A.c(s.a+a,s.b+b,s.c+c)
break
case 2:s=r.b.d
s=new A.c(s.a+a,s.b+b,s.c+r.c.c-c)
break
case 1:s=r.b.d
s=new A.c(s.a+r.c.a-c,s.b+b,s.c+a)
break
case 3:s=r.b.d
s=new A.c(s.a+c,s.b+b,s.c+a)
break
default:s=null}return s},
$S:92}
A.wj.prototype={
$8$alpha(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=this.a,k=l.$3(a,b,c),j=l.$3(d,e,f)
l=k.a
s=j.a
r=Math.min(l,s)
q=k.b
p=j.b
o=Math.min(q,p)
n=k.c
m=j.c
this.b.ex(new A.c(r,o,Math.min(n,m)),new A.c(Math.max(l,s),Math.max(q,p),Math.max(n,m)),g,h)},
$7(a,b,c,d,e,f,g){return this.$8$alpha(a,b,c,d,e,f,g,1)},
$S:93}
A.kK.prototype={
fk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.r,a=A.C(b),a0=a.i("f(1)")
a=a.i("I<1,f>")
A.ku(new A.I(b,a0.a(new A.p7()),a),"level")
s=d.w
r=A.C(s)
q=r.i("f(1)")
r=r.i("I<1,f>")
A.ku(new A.I(s,q.a(new A.p8()),r),"room")
p=d.x
o=A.C(p)
A.ku(new A.I(p,o.i("f(1)").a(new A.p9()),o.i("I<1,f>")),"portal")
o=d.y
n=A.C(o)
A.ku(new A.I(o,n.i("f(1)").a(new A.pa()),n.i("I<1,f>")),"stair")
m=new A.I(b,a0.a(new A.pb()),a).bc(0)
l=new A.I(s,q.a(new A.pc()),r).bc(0)
r=A.m(t.N,t.lT)
for(b=p.length,k=0;k<p.length;p.length===b||(0,A.r)(p),++k){j=p[k]
r.k(0,j.a,j)}i=d.f
if(i!=null){b=i.a
if(!l.q(0,b))throw A.a(A.M("residence.roomId references unknown room "+b,c,c))
b=i.d
if(b!=null&&!r.J(b))throw A.a(A.M("residence.returnPortalId references unknown portal "+b,c,c))
b=i.c
if(b!=null&&b.length===0)throw A.a(B.hN)}for(b=s.length,k=0;k<s.length;s.length===b||(0,A.r)(s),++k){h=s[k]
a=h.b
if(!m.q(0,a))throw A.a(A.M("rooms."+h.a+".floor references unknown level "+a,c,c))
a=h.e
a0=A.C(a)
q=h.a
A.ku(new A.I(a,a0.i("f(1)").a(new A.pd()),a0.i("I<1,f>")),"window in "+q)
a0=h.f
A.ku(a0,"portal reference in "+q)
for(a=a0.length,g=0;g<a0.length;a0.length===a||(0,A.r)(a0),++g){f=a0[g]
j=r.h(0,f)
if(j==null)throw A.a(A.M("rooms."+q+".portalIds references unknown portal "+f,c,c))
if(!(j.b===q||j.c===q))throw A.a(A.M("rooms."+q+".portalIds references "+f+", which does not touch the room",c,c))}}for(b=p.length,k=0;k<p.length;p.length===b||(0,A.r)(p),++k){j=p[k]
a=j.b
if(a!=="outside"&&!l.q(0,a))throw A.a(A.M("portals."+j.a+".a references "+a,c,c))
a0=j.c
if(a0!=="outside"&&!l.q(0,a0))throw A.a(A.M("portals."+j.a+".b references "+a0,c,c))
if(a===a0)throw A.a(A.M("portals."+j.a+" has identical endpoints",c,c))}for(b=o.length,k=0;k<o.length;o.length===b||(0,A.r)(o),++k){e=o[k]
a=e.b
j=r.h(0,a)
if(j==null)throw A.a(A.M("stairs."+e.a+".portalId references unknown portal "+a,c,c))
if(!j.z)throw A.a(A.M("stairs."+e.a+".portalId "+a+" is not marked stair",c,c))}},
fj(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.a(A.i("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.a(A.i("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.a(A.i("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.a(A.i("authored house story authority must remain external-story-data"))
a1=b.w
s=a1.length
if(s!==a2.b.length||b.x.length!==a2.c.length)throw A.a(A.i("authored/runtime room or portal count mismatch"))
for(r=t.fW,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.a(A.i("authored room missing at runtime: "+n))
l=o.c
k=m.d
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.e(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.h(A.i(n+" origin.x mismatch: "+A.z(g)+" != "+A.z(j)))
if(1>=h)return A.e(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.h(A.i(n+" origin.y mismatch: "+A.z(j)+" != "+A.z(i)))
if(2>=h)return A.e(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.h(A.i(n+" origin.z mismatch: "+A.z(l)+" != "+A.z(k)))
l=o.d
k=m.c
j=k.a
i=k.b
k=k.c
h=l.length
if(0>=h)return A.e(l,0)
g=l[0]
if(Math.abs(g-j)>0.0001)A.h(A.i(n+" size.x mismatch: "+A.z(g)+" != "+A.z(j)))
if(1>=h)return A.e(l,1)
j=l[1]
if(Math.abs(j-i)>0.0001)A.h(A.i(n+" size.y mismatch: "+A.z(j)+" != "+A.z(i)))
if(2>=h)return A.e(l,2)
l=l[2]
if(Math.abs(l-k)>0.0001)A.h(A.i(n+" size.z mismatch: "+A.z(l)+" != "+A.z(k)))
l=o.e
k=l.length
j=m.e
if(k!==j.length)throw A.a(A.i("window count mismatch for "+n))
for(n=A.C(j),i=n.i("l(1)"),n=n.i("F<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.bM(new A.F(j,i.a(new A.p6(e)),n),r)
if(d==null)throw A.a(A.i("authored window missing: "+e.a))
h=e.c
g=d.c
c=e.a
if(Math.abs(h-g)>0.0001)A.h(A.i(c+" offset mismatch: "+A.z(h)+" != "+A.z(g)))
h=e.e
g=d.e
if(Math.abs(h-g)>0.0001)A.h(A.i(c+a+A.z(h)+" != "+A.z(g)))
h=e.f
g=d.f
if(Math.abs(h-g)>0.0001)A.h(A.i(c+a0+A.z(h)+" != "+A.z(g)))}}for(a1=b.x,s=a1.length,r=a2.f,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
q=o.a
m=r.h(0,q)
if(m==null)throw A.a(A.i("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.a(A.i("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.h(A.i(q+a+A.z(n)+" != "+A.z(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.h(A.i(q+a0+A.z(n)+" != "+A.z(l)))
if(o.y!=m.at)throw A.a(A.i("door model mismatch for "+q))}a1=b.y
s=a2.d
if(a1.length!==s.length||B.a.gbn(a1).b!==B.a.gbn(s).b)throw A.a(A.i("stair manifest mismatch"))}}
A.p0.prototype={
$1(a){var s=A.ia(a,"level"),r=A.bL(s,"id")
A.bL(s,"kind")
A.f4(s,"floorY")
return new A.eq(r)},
$S:94}
A.p1.prototype={
$1(a){return A.Fw(a,this.a)},
$S:95}
A.p2.prototype={
$1(a){var s=this.a,r=A.ia(a,"portal"),q=A.bL(r,"id"),p=A.bL(r,"a"),o=A.bL(r,"b"),n=A.AE(r,"facingA"),m=A.AE(r,"facingB"),l=A.f4(r,"offsetA"),k=A.f4(r,"offsetB"),j=A.f4(r,"width"),i=A.f4(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.v(r.h(0,"doorKit")):null
return new A.er(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.aa(r.h(0,"stair"),!0),J.aa(r.h(0,"exterior"),!0),!J.aa(r.h(0,"open"),!1),J.aa(r.h(0,"sticks"),!0))},
$S:96}
A.p3.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.ia(a,"stair")
return new A.et(A.bL(p,"id"),A.bL(p,"portalId"),A.JW(p.h(0,s),s),A.o0(p.h(0,"min"),"min"),A.o0(p.h(0,"max"),"max"),A.o0(p.h(0,r),r),A.o0(p.h(0,q),q))},
$S:97}
A.p4.prototype={
$1(a){return typeof a=="string"?a:A.eg("exterior cell")},
$S:33}
A.p7.prototype={
$1(a){return t.mD.a(a).a},
$S:34}
A.p8.prototype={
$1(a){return t.bJ.a(a).a},
$S:35}
A.p9.prototype={
$1(a){return t.lT.a(a).a},
$S:101}
A.pa.prototype={
$1(a){return t.gI.a(a).a},
$S:102}
A.pb.prototype={
$1(a){return t.mD.a(a).a},
$S:34}
A.pc.prototype={
$1(a){return t.bJ.a(a).a},
$S:35}
A.pd.prototype={
$1(a){return t.ya.a(a).a},
$S:103}
A.p6.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:14}
A.pe.prototype={}
A.yW.prototype={
$1(a){var s
A:{if("ground"===a){s=B.hk
break A}if("first"===a){s=B.hl
break A}s=B.hm
break A}return s},
$S:105}
A.eq.prototype={}
A.es.prototype={}
A.pf.prototype={
$1(a){var s=this.a,r=A.ia(a,"window")
return new A.eu(A.bL(r,"id"),A.AE(r,"facing"),A.f4(r,"offset")*s,A.f4(r,"sill")*s,A.f4(r,"width")*s,A.f4(r,"height")*s,J.aa(r.h(0,"frosted"),!0))},
$S:106}
A.pg.prototype={
$1(a){return typeof a=="string"?a:A.eg("portal id")},
$S:33}
A.eu.prototype={}
A.er.prototype={}
A.et.prototype={}
A.yv.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.yR.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.oD.prototype={
mM(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=4731940,a8=new A.bW(new Float32Array(10752)),a9=b2.b,b0=A.C(a9),b1=b0.i("l(1)").a(new A.oE())
if(!new A.F(a9,b1,b0.i("F<1>")).gA(0).m())return new Float32Array(0)
for(a9=B.a.gA(a9),b0=new A.R(a9,b1,b0.i("R<1>")),s=1/0,r=-1/0,q=1/0,p=-1/0,o=0;b0.m();){b1=a9.gp()
n=b2.ac(b1)
b1=b1.d
m=b1.a
if(m<s)s=m
l=m+n.a
if(l>r)r=l
k=b1.c
if(k<q)q=k
j=k+n.c
if(j>p)p=j
i=b1.b+n.b
if(i>o)o=i}h=o+(p-q)*0.4
g=(q+p)*0.5
a9=s+0.5
b0=g-0.7
b1=r-0.5
f=g+0.7
a8.v(new A.c(a9,o,b0),new A.c(b1,o+0.03,f),7230010)
e=o+0.1
a8.v(new A.c(a9,o,q+0.4),new A.c(b1,e,b0-0.05),11444308)
a8.v(new A.c(a9,o,f+0.05),new A.c(b1,e,p-0.4),11444308)
for(d=s+0.6,a9=r-0.4,b0=q+0.2,b1=p-0.2,c=o+1.9,f=c-0.08,e=g-1.2,b=g+1.2;d<a9;d+=0.85){a=d-0.04
a0=d+0.04
a8.v(new A.c(a,o,b0),new A.c(a0,h,g),a7)
a8.v(new A.c(a,o,b1),new A.c(a0,h,g),a7)
if(c<h)a8.v(new A.c(a,f,e),new A.c(a0,c,b),a7)}a8.v(new A.c(s,h-0.15,g-0.05),new A.c(r,h,g+0.05),a7)
a1=b2.e.h(0,"landing")
if(a1!=null){a2=b2.ac(a1)
a9=a1.d
a3=a9.a+a2.a*0.4
a4=a9.c+a2.c*0.4
a8.v(new A.c(a3-0.05,o,a4-0.05),new A.c(a3+0.75,o+0.12,a4+0.75),a7)}a5=s+(r-s)*0.65
a6=g+0.35
a9=o+0.18
a8.v(new A.c(a5-0.1,o,a6-0.1),new A.c(a5+1.3,a9,a6+0.9),a7)
b0=a5+1.2
a8.v(new A.c(a5,a9,a6),new A.c(b0,o+0.95,a6+0.8),8291982)
a8.v(new A.c(b0,o+0.82,a6+0.4),new A.c(a5+1.5,o+0.86,a6+0.44),11827770)
return B.n.ae(a8.a,0,a8.b)}}
A.oE.prototype={
$1(a){return t.J.a(a).b.b==="first"},
$S:18}
A.kM.prototype={
bt(a,b,c,d){var s,r,q,p=4084313,o=c.d,n=o.a,m=o.b,l=o.c
o=m+1.2
s=n+d.a
r=m+1.25
a.v(new A.c(n,o,l),new A.c(s,r,l+0.02),p)
q=l+d.c
a.v(new A.c(n,o,q-0.02),new A.c(s,r,q),p)
a.v(new A.c(n,o,l),new A.c(n+0.02,r,q),p)
a.v(new A.c(s-0.02,o,l),new A.c(s,r,q),p)},
bg(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.d,e=f.a,d=f.b,c=f.c,b=e+0.3,a=e+2
f=c+a3.c
s=f-0.85
r=f-0.05
f=d+0.65
a0.v(new A.c(b,d+0.1,s),new A.c(a,f,r),15131868)
a0.v(new A.c(b+0.08,d+0.15,s+0.08),new A.c(a-0.08,d+0.66,r-0.08),12894390)
for(q=[b+0.12,a-0.12],p=s+0.1,o=r-0.1,n=d+0.12,m=0;m<2;++m){l=q[m]
for(k=[p,o],j=l-0.04,i=l+0.04,h=0;h<2;++h){g=k[h]
a0.v(new A.c(j,d,g-0.04),new A.c(i,n,g+0.04),11901256)}}q=(s+r)*0.5
a0.v(new A.c(b+0.1,f,q-0.08),new A.c(b+0.22,d+0.82,q+0.08),11901256)
q=d+a3.b
f=q-0.45
a0.v(new A.c(e,f,c+0.4),new A.c(e+0.35,q-0.1,c+0.95),2763310)
a0.v(new A.c(e+0.14,d+0.8,c+0.65),new A.c(e+0.19,f,c+0.7),10650682)
a0.v(new A.c(e,d,c),new A.c(e+0.24,q,c+0.24),13947078)}}
A.kN.prototype={
bt(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.Z[s]
A.ja(this.bV(b,c,r),a,r,c,d,B.bS)}},
bg(a,b,c,d){var s,r,q,p=c.d,o=p.a,n=p.b,m=p.c,l=m+1.6,k=m+2.8
p=d.a
s=o+p
r=s-0.25
q=n+1.15
a.v(new A.c(r,n,l),new A.c(s,q,k),13683392)
a.v(new A.c(r-0.02,n+0.1,l+0.3),new A.c(r+0.05,n+0.85,k-0.3),2894376)
a.v(new A.c(r-0.06,q,l-0.05),new A.c(s,n+1.22,k+0.05),13683392)
q=n+d.b
a.v(new A.c(o,n,m+0.6),new A.c(o+0.65,q-0.1,m+2.2),4731940)
a.v(new A.c(o+0.3,q-0.32,m+0.04),new A.c(s-0.3,q-0.18,m+0.22),5913640)
p=o+p*0.42
a.v(new A.c(p+1.15,n,m+1.4),new A.c(p+1.65,n+0.58,m+1.85),4731940)}}
A.kT.prototype={
bt(a,b,c,d){var s,r,q=4735550,p=c.d,o=p.a,n=p.b,m=p.c
p=o+d.a
s=n+0.25
a.v(new A.c(o,n,m),new A.c(p,s,m+0.08),q)
r=m+d.c
a.v(new A.c(o,n,r-0.08),new A.c(p,s,r),q)
a.v(new A.c(o,n,m),new A.c(o+0.08,s,r),q)
a.v(new A.c(p-0.08,n,m),new A.c(p,s,r),q)},
bg(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.d,c=d.a,b=d.b,a=d.c,a0=b+a4.b
for(s=a+0.3,d=a4.c,r=a+d,q=r-0.2,p=a0-0.16,o=a4.a,n=c+o;s<q;s+=0.65)a1.v(new A.c(c,p,s-0.05),new A.c(n,a0,s+0.05),4074786)
a1.v(new A.c(c+1.2,a0-0.22,a),new A.c(c+1.25,a0-0.17,r),2763308)
a1.v(new A.c(c+2.8,a0-0.2,a),new A.c(c+2.86,a0-0.14,r),2763308)
m=c+0.1
l=r-1.8
q=m+1.8
p=b+0.85
k=l+0.1
a1.v(new A.c(m,b,l),new A.c(q,p,k),4732971)
a1.v(new A.c(q,b,l),new A.c(m+1.9,p,r),4732971)
a1.v(new A.c(m+0.05,b,k),new A.c(m+1.75,b+0.7,r-0.05),1710620)
k=c+o*0.35
p=a+0.28
a1.v(new A.c(k,b,a),new A.c(k+0.35,a0,p),5782060)
k=c+o*0.7
a1.v(new A.c(k,b,a),new A.c(k+0.35,a0,p),5782060)
j=n-0.45
i=a+0.8
h=a+2.2
for(g=b+0.45,q=a0-0.5;g<q;g+=0.45)a1.v(new A.c(j,g,i),new A.c(n,g+0.05,h),9077884)
f=c+o*0.55
e=a+d*0.55
a1.v(new A.c(f-0.25,b,e-0.25),new A.c(f+0.25,b+0.015,e+0.25),2236964)
d=c+o*0.12
a1.v(new A.c(d,b+1.25,a+0.02),new A.c(d+0.65,b+1.85,a+0.18),2895924)
a1.v(new A.c(c+2.2,b,r-1.2),new A.c(c+3.2,b+0.14,r-0.4),4731426)}}
A.lv.prototype={
bt(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.Z[s]
A.ja(this.bV(b,c,r),a,r,c,d,B.np)}},
bg(a,b,c,d){var s,r,q,p,o,n,m,l=4336414,k=c.d,j=k.a,i=k.b,h=k.c
a.v(new A.c(j+0.05,i,h+0.8),new A.c(j+0.45,i+2.1,h+1.25),l)
a.v(new A.c(j+0.44,i+1.65,h+0.92),new A.c(j+0.46,i+1.95,h+1.13),11901256)
k=d.a
s=j+k
r=s-0.06
a.v(new A.c(r,i+1.55,h+1.5),new A.c(s-0.02,i+1.68,h+3.2),l)
for(q=h+1.7,s-=0.12,p=i+1.6,o=i+1.66,n=0;n<4;++n){m=q+n*0.4
a.v(new A.c(s,p,m-0.02),new A.c(r,o,m+0.02),11901256)}a.v(new A.c(j+(k-1)*0.5,i+0.005,h+0.6),new A.c(j+(k+1)*0.5,i+0.012,h+d.c-0.6),6824491)
k=j+0.04
a.v(new A.c(k,i,h+2.1),new A.c(j+0.42,i+0.72,h+2.9),l)
s=i+d.b
a.v(new A.c(k,s-0.55,h+0.5),new A.c(j+0.22,s-0.15,h+0.9),2764080)}}
A.lJ.prototype={
bg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=c.d,g=h.a,f=h.b,e=h.c
h=g+d.a
s=h-0.75
r=e+1.2
q=e+2.4
p=f+0.95
a.v(new A.c(s,f,r),new A.c(h,p,q),2236964)
o=s-0.04
n=f+0.15
m=f+0.85
a.v(new A.c(o,n,r+0.1),new A.c(s,m,r+0.6),4078908)
a.v(new A.c(o,n,r+0.65),new A.c(s,m,q-0.1),4078908)
m=f+d.b
a.v(new A.c(s+0.1,p,r+0.15),new A.c(h,m,q-0.15),4472892)
p=f+0.82
a.v(new A.c(g,f,e+0.8),new A.c(g+0.65,p,e+1.8),14539216)
a.v(new A.c(g+0.08,f+0.45,e+0.92),new A.c(g+0.58,f+0.83,e+1.68),9209982)
for(o=e+1.15,n=g+0.04,l=g+0.18,k=f+1.05,j=0;j<2;++j){i=o+j*0.35
a.v(new A.c(n,p,i-0.03),new A.c(l,k,i+0.03),11901256)}a.v(new A.c(g+0.1,f,e),new A.c(g+1.2,m-0.1,e+0.5),6046257)
p=e+d.c
o=f+0.88
a.v(new A.c(g+0.75,f,p-0.65),new A.c(h-0.6,o,p),7230528)
n=g+0.72
h-=0.58
m=f+0.92
a.v(new A.c(n,o,p-0.68),new A.c(h,m,p),12892322)
a.v(new A.c(n,m,p-0.03),new A.c(h,f+1.35,p),14736592)}}
A.lK.prototype={
bt(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.Z[s]
A.ja(this.bV(b,c,r),a,r,c,d,B.bS)}},
bg(a,b,c,d){var s,r,q,p,o,n,m=4139548,l=c.d,k=l.a,j=l.b,i=l.c,h=i+0.1,g=i+1.6,f=k+0.12
l=j+0.08
a.v(new A.c(f-0.04,j,h),new A.c(f+0.04,l,g),m)
for(s=h+0.05,r=g-0.05,q=f-0.02,p=f+0.02,o=j+0.9;s<r;s+=0.15)a.v(new A.c(q,l,s-0.02),new A.c(p,o,s+0.02),14209734)
a.v(new A.c(f-0.05,o,h-0.02),new A.c(f+0.05,j+0.96,g+0.02),m)
a.v(new A.c(k+0.02,j,i+2.1),new A.c(k+0.08,j+2,i+2.9),m)
n=j+d.b
l=d.a
r=d.c
a.v(new A.c(k+l*0.4,n-0.04,i+r*0.4),new A.c(k+l*0.7,n,i+r*0.7),13157046)}}
A.lM.prototype={
bt(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.Z[s]
A.ja(this.bV(b,c,r),a,r,c,d,B.bS)}},
bg(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=5519147,h=13157048,g=a1.d,f=g.a,e=g.b,d=g.c,c=f+1.4,b=f+3
g=a2.c
s=d+g
r=s-0.45
q=e+a2.b
a.v(new A.c(c,e,r),new A.c(b,q,s),7892064)
p=e+0.05
a.v(new A.c(c-0.2,e,r-0.5),new A.c(b+0.2,p,s),3550247)
o=c+0.35
n=b-0.35
m=p+0.95
a.v(new A.c(o,p,s-0.1),new A.c(n,m,s),i)
a.v(new A.c(o-0.08,p,r),new A.c(o,m,s),i)
a.v(new A.c(n,p,r),new A.c(n+0.08,m,s),i)
a.v(new A.c(o+0.15,p,r+0.05),new A.c(n-0.15,e+0.35,s-0.15),2368550)
p=r-0.04
m=e+1.15
l=r+0.02
a.v(new A.c(c+0.15,e,p),new A.c(c+0.32,m,l),h)
a.v(new A.c(b-0.32,e,p),new A.c(b-0.15,m,l),h)
a.v(new A.c(c+0.05,m,r-0.12),new A.c(b-0.05,e+1.25,r+0.04),h)
m=a2.a
k=f+m*0.5
j=d+g*0.5
a.v(new A.c(k-0.45,q-0.03,j-0.45),new A.c(k+0.45,q,j+0.45),13682877)
a.v(new A.c(f+0.55,e,s-0.95),new A.c(f+1.65,e+0.62,s-0.35),4073240)
a.v(new A.c(f+m*0.2,e,d+0.04),new A.c(f+m*0.45,e+0.65,d+0.22),13946558)}}
A.ms.prototype={
bg(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=5784114,f=a0.d,e=f.a,d=f.b,c=f.c
f=d+0.95
a.v(new A.c(e+1.2,d,c+0.8),new A.c(e+2.5,f,c+2),14012614)
a.v(new A.c(e+1.4,f,c+1),new A.c(e+2.2,d+1.45,c+1.8),14012614)
f=e+a1.a
s=f-0.75
r=f-0.05
q=c+1.2
p=c+2.2
f=d+0.55
a.v(new A.c(s,d,q),new A.c(r,f,p),4731426)
for(o=[s,r-0.03],n=p-0.03,m=0;m<2;++m){l=o[m]
for(k=[q,n],j=l+0.03,i=0;i<2;++i){h=k[i]
a.v(new A.c(l,d,h),new A.c(j,f,h+0.03),11901256)}}f=e+0.8
o=c+0.04
n=e+2.4
a.v(new A.c(f,d,o),new A.c(n,d+0.74,c+0.72),g)
k=c+0.35
a.v(new A.c(f,d+1.35,o),new A.c(n,d+1.38,k),g)
a.v(new A.c(f,d+1.7,o),new A.c(n,d+1.73,k),g)}}
A.kS.prototype={
ghY(){var s=this.d
return s==null?null:s.a.a},
j7(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null||!isFinite(d)){n.d=null
return}s=c.d
r=A.C(s)
q=new A.F(s,r.i("l(1)").a(new A.pv(e)),r.i("F<1>"))
p=!q.gA(0).m()?null:q.ga1(0)
if(p==null){n.d=null
return}if(!(n.d9(b,p.f)&&a==="hall"))o=n.d9(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mX(p,B.b.n(d,0,1))},
oI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.hp(g,c,d)
s=h.l6(a,b,c,d)
if(s!=null){h.d=s
return h.hp(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.i6(Math.sqrt(r*r+q*q)/0.08))
o=d.a3(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.md(a,n,m,o)
l=l||j.b
m=j.a
i=h.pn(a,n)
n=i==null?n:i}h.bs(m)
return new A.lS(m,n)},
l6(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.d9(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.d9(c,l)){l=j<0||o
h=l}if(i||h)return new A.mX(m,i?0:1)}return null},
hp(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.Z(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.n(a.b+o/p,0,1)
n=A.CJ(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bs(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.lS(n,k)},
d9(a,b){var s=a.Z(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
md(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.d3(c,!1)
s=h.di(a,b,c,new A.c(g,0,0))
r=s.a
q=d.c
p=h.di(a,b,r,new A.c(0,0,q))
o=!s.b
if(o&&!p.b)return new A.d3(p.a,!1)
n=c.S(0,new A.c(0,0.35,0))
h.bs(n)
if(!h.dL(a,b)){m=h.di(a,b,n,new A.c(g,0,0))
l=h.di(a,b,m.a,new A.c(0,0,q))
if(!m.b&&!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.c(g,r-j,q)
h.bs(i)
if(h.dL(a,b))break}h.bs(k)
return new A.d3(k,!1)}}if(o)return new A.d3(r,!0)
if(!p.b)return new A.d3(p.a,!0)
h.bs(c)
return new A.d3(c,!0)},
di(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.d3(c,!1)
s=c.S(0,d)
this.bs(s)
if(this.dL(a,b)){this.bs(c)
return new A.d3(c,!0)}return new A.d3(s,!1)},
bs(a){var s=a.Z(0,new A.c(0,1.3499999999999999,0))
this.a=s
this.b=s.S(0,new A.c(0,1.2000000000000002,0))},
dL(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.ac(m)
r=this.a
q=m.d
p=q.b
if(r.b-0.3<p||this.b.b+0.3>p+s.b)return!0
p=r.a
o=q.a
n=!1
if(p>=o+0.3)if(p<=o+s.a-0.3){r=r.c
q=q.c
r=r>=q+0.3&&r<=q+s.c-0.3}else r=n
else r=n
if(r)return!1
return!this.ma(a,m,s)},
pn(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.ac(k)
for(r=k.a,q=a.aP(r),p=J.N(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>"));q.m();){o=p.gp()
n=o.cL(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hU(k,o,s)&&this.kZ(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
ma(a,b,c){var s,r,q
for(s=a.aP(b.a),r=J.N(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.hU(b,q,c))return!0}return!1},
hU(a,b,c){var s,r,q,p=a.a,o=b.aW(p),n=b.aO(p)
p=o===B.D||o===B.H
s=this.a
r=a.d
q=p?s.a-r.a:s.c-r.c
if(q<n+0.3||q>n+b.w-0.3)return!1
p=r.b
if(s.b-0.3<p||this.b.b+0.3>p+b.x)return!1
switch(o.a){case 0:p=s.c<=r.c+0.3
break
case 2:p=s.c>=r.c+c.c-0.3
break
case 1:p=s.a>=r.a+c.a-0.3
break
case 3:p=s.a<=r.a+0.3
break
default:p=null}return p},
kZ(a,b,c){var s,r=this
switch(b.aW(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smE(a){this.a=t.a7.a(a)}}
A.pv.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:107}
A.lS.prototype={}
A.d3.prototype={}
A.mX.prototype={}
A.iK.prototype={}
A.qU.prototype={
n2(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.e(B.Y,r)
s=B.Y[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jT(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.Y,q)
p=B.Y[q]
if(p.b===a)r+=p.c}return r},
jU(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.Y,q)
p=B.Y[q]
if(p.b===a)r+=p.d}return r},
D(){return A.E(["landedCount",this.b],t.N,t.z)}}
A.a8.prototype={}
A.le.prototype={
goy(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a5(A.d([r,q,p,o,n,m],t.n),new A.q1())&&o>=r&&n>=q&&m>=p}}
A.q1.prototype={
$1(a){return isFinite(A.ax(a))},
$S:4}
A.lx.prototype={
B(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.O(s,3)!==0}else s=!0
if(s)throw A.a(A.p("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.a(A.p("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.goy())throw A.a(A.p("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.P(A.d([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.qW()))throw A.a(A.p("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.a(A.p("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.a(A.p("QHMX index "+o+" exceeds vertex count",m))}}}
A.qW.prototype={
$1(a){return!isFinite(A.ax(a))},
$S:4}
A.qV.prototype={
E(a,b,c,d,e,f,g){var s=this
s.bQ(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bQ(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bQ(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bQ(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bQ(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bQ(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a8(a,b,c,m,n,o,0,0,p),r=new A.a8(g,h,i,m,n,o,1,1,p)
this.az(s,new A.a8(d,e,f,m,n,o,1,0,p),r)
this.az(s,r,new A.a8(j,k,l,m,n,o,0,1,p))},
az(a,b,c){var s=this,r=s.b
B.a.l(r,s.ej(a))
B.a.l(r,s.ej(b))
B.a.l(r,s.ej(c))},
ej(a){var s,r,q=B.a.a_(A.d([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.a(A.i("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
mJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.a(A.i("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.lx(A.ab(g,t.hl),new Uint16Array(A.S(this.b)),new A.le(s,r,q,p,o,n))
h.B()
return h}}
A.lf.prototype={}
A.zQ.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.aB.q(0,s))A.h(A.i("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:108}
A.yJ.prototype={
$2(a,b){var s=t.Ez
return B.c.H(s.a(a).a,s.a(b).a)},
$S:109}
A.dz.prototype={
q5(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.m(k,k),i=A.d([],t.Dl)
k=t.t
s=A.d([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.e(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.jM(A.Lt(new A.lx(i,new Uint16Array(A.S(s)),A.IS(i))),l.a,l.b,l.c,A.d([],k))}}
A.jM.prototype={}
A.fi.prototype={
C(){return"ExteriorCameraBand."+this.b}}
A.lg.prototype={
mX(a){var s
switch(a.a){case 0:s=A.aQ(["front","street","opposite-house"],t.N)
break
case 1:s=A.aQ(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aQ(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aQ(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aQ(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
mY(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.cX
break A}if("kitchen"===a||"cellar"===a){s=B.hh
break A}if("bathroom"===a){s=B.hi
break A}if("spare-room"===a){s=B.hj
break A}s=B.cX
break A}return this.mX(s)},
iC(a,b,c,d){d.i("t<0>").a(b)
t.Q.a(c)
return new A.ca(this.oa(d.i("f(0)").a(a),b,c,d),d.i("ca<0>"))},
oa(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iC(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a5(0,B.aB.gaH(B.aB)))throw A.a(A.p("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.bZ(l,l.r,l.e,r.$ti.i("bZ<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.aB.q(0,j))throw A.a(A.i("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eX.prototype={
i9(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.yi.prototype={
$1(a){var s=this
return t.xT.a(a).i9(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:47}
A.yh.prototype={
$1(a){return t.xT.a(a).i9(0,(this.a+this.b)*0.5,this.c)},
$S:47}
A.dM.prototype={
C(){return"FocusKind."+this.b}}
A.eD.prototype={}
A.jk.prototype={}
A.qP.prototype={
on(){var s,r,q,p,o,n,m=this
m.le()
if(m.b.length===0)throw A.a(A.i("authored house must contain at least one room"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.a(A.i("authored portal endpoint missing: "+o.a))}for(s=m.d,r=s.length,q=m.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){n=s[p].b
if(q.h(0,n)==null)throw A.a(A.i("stair references unknown portal: "+n))}},
fa(a){var s=this.w
if(s==null)return null
return new A.c(s.a,a,s.c)},
le(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.J(n))throw A.a(A.i("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.J(n))throw A.a(A.i("duplicate portal "+n))
q.k(0,n,m)}},
ac(a){var s=a.c,r=this.y,q=a.a
return new A.c(s.a+r.jT(q),s.b+r.jU(q),s.c)},
aP(a){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.rd(a)),r.i("F<1>"))},
pm(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.a(A.a7(a,"roomId","not a portal endpoint"))
r=this.ac(o)
q=b.aO(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aW(a).a){case 0:s=new A.c(s.a+q,p,s.c)
break
case 2:s=new A.c(s.a+q,p,s.c+r.c)
break
case 1:s=new A.c(s.a+r.a,p,s.c+q)
break
case 3:s=new A.c(s.a,p,s.c+q)
break
default:s=null}return s},
iZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a7
s=A.d([new A.a5(a,B.a7)],t.nR)
r=A.aQ([a],t.N)
for(q=this.e,p=t.h;s.length!==0;){o=B.a.pu(s,0)
n=o.a
m=o.b
for(l=this.aP(n),k=J.N(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>"));l.m();){j=k.gp()
i=j.cL(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.a5(i,h))}}}return B.a7}}
A.rd.prototype={
$1(a){var s
t.h.a(a)
s=this.a
return a.b===s||a.c===s},
$S:111}
A.qS.prototype={
bA(a){this.a.k(0,a.a,a)},
mR(a,b){var s,r,q,p,o,n=b.a
if(B.et.q(0,n))return $.EK()
s=this.a.h(0,n)
if(s==null)return new A.n5(n).i5(a,a.y)
r=s.i5(a,a.y)
if(n==="hall"){q=a.ac(b)
p=new A.bW(new Float32Array(10752))
A.Hr(p,a,b,q)
o=B.n.ae(p.a,0,p.b)
if(!B.n.gM(o)){n=A.J(r.c,t.i)
B.a.L(n,o)
return new A.jk(r.a,r.b,new Float32Array(A.S(n)),r.d)}}return r},
mO(a,b){var s,r,q,p,o,n=new A.bW(new Float32Array(10752)),m=a.ac(b)
for(s=b.a,r=a.aP(s),q=J.N(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
if(p.at==null||p.as)continue
o=p.aW(s)
A.Ck(n,4734002,new A.bV(p.aO(s),0,p.w,p.x,!0),o,b,m)}return B.n.ae(n.a,0,n.b)},
mN(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=13938487,a5=4600357,a6=2368548,a7=b0.at
if(a7==null||b0.as)return new Float32Array(0)
s=new A.bW(new Float32Array(10752))
r=a8.ac(a9)
q=a7==="kit-front-door-recessed"
p=a7==="kit-cellar-door-grille"
if(q)o=4006937
else o=p?4867908:6047288
a7=a9.a
n=b0.aW(a7)
m=b0.aO(a7)
a7=a9.d
l=a7.b
k=Math.min(r.b,b0.x)
if(b0.ax)switch(n.a){case 0:j=a7.a+m
a7=a7.c
i=j+0.055
h=a7+b0.w
s.v(new A.c(j,l,a7),new A.c(i,l+k,h),o)
s.v(new A.c(i,l+0.95,h-0.12),new A.c(i+0.04,l+1.02,h-0.06),a4)
break
case 2:j=a7.a+m
a7=a7.c+r.c
i=a7-b0.w
h=j+0.055
s.v(new A.c(j,l,i),new A.c(h,l+k,a7),o)
s.v(new A.c(h,l+0.95,i+0.06),new A.c(h+0.04,l+1.02,i+0.12),a4)
break
case 1:j=a7.a+r.a
i=j-b0.w
a7=a7.c+m
h=a7+0.055
s.v(new A.c(i,l,a7),new A.c(j,l+k,h),o)
s.v(new A.c(i+0.06,l+0.95,h),new A.c(i+0.12,l+1.02,h+0.04),a4)
break
case 3:j=a7.a
a7=a7.c+m
i=j+b0.w
h=a7+0.055
s.v(new A.c(j,l,a7),new A.c(i,l+k,h),o)
s.v(new A.c(i-0.12,l+0.95,h),new A.c(i-0.06,l+1.02,h+0.04),a4)
break}else switch(n.a){case 0:j=a7.a+m
a7=a7.c
i=b0.w
h=j+i
g=l+k
f=a7+0.055
s.v(new A.c(j,l,a7),new A.c(h,g,f),o)
if(!p){e=(i-0.32)*0.5
d=j+0.11
c=l+0.16
b=a7+0.005
a=d+e
a0=l+0.82
a1=f-0.005
s.v(new A.c(d,c,b),new A.c(a,a0,a1),a5)
a2=h-0.11
a3=a2-e
s.v(new A.c(a3,c,b),new A.c(a2,a0,a1),a5)
a0=l+1.1
g-=0.16
s.v(new A.c(d,a0,b),new A.c(a,g,a1),a5)
s.v(new A.c(a3,a0,b),new A.c(a2,g,a1),a5)
a1=f+0.015
s.v(new A.c(h-0.18,l+0.94,a7-0.015),new A.c(h-0.04,l+1.06,a1),a6)
g=l+0.97
a2=l+1.03
s.v(new A.c(h-0.15,g,a1),new A.c(h-0.09,a2,f+0.05),a4)
if(q)s.v(new A.c(j+i*0.35,g,a7-0.01),new A.c(j+i*0.65,a2,a7+0.01),a4)}break
case 2:j=a7.a+m
a7=a7.c+r.c
i=a7-0.055
h=j+b0.w
s.v(new A.c(j,l,i),new A.c(h,l+k,a7),o)
if(!p){j=i-0.015
s.v(new A.c(h-0.18,l+0.94,j),new A.c(h-0.04,l+1.06,a7+0.015),a6)
s.v(new A.c(h-0.15,l+0.97,i-0.05),new A.c(h-0.09,l+1.03,j),a4)}break
case 1:j=a7.a+r.a
i=j-0.055
a7=a7.c+m
h=a7+b0.w
s.v(new A.c(i,l,a7),new A.c(j,l+k,h),o)
if(!p){a7=i-0.015
s.v(new A.c(a7,l+0.94,h-0.18),new A.c(j+0.015,l+1.06,h-0.04),a6)
s.v(new A.c(i-0.05,l+0.97,h-0.15),new A.c(a7,l+1.03,h-0.09),a4)}break
case 3:j=a7.a
a7=a7.c+m
i=j+0.055
h=a7+b0.w
s.v(new A.c(j,l,a7),new A.c(i,l+k,h),o)
if(!p){a7=i+0.015
s.v(new A.c(j-0.015,l+0.94,h-0.18),new A.c(a7,l+1.06,h-0.04),a6)
s.v(new A.c(a7,l+0.97,h-0.15),new A.c(i+0.05,l+1.03,h-0.09),a4)}break}return B.n.ae(s.a,0,s.b)}}
A.n5.prototype={}
A.q0.prototype={}
A.ve.prototype={
jS(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a5(s,new A.vf())}else s=!1
return s}}
A.vf.prototype={
$1(a){return t.fW.a(a).w},
$S:14}
A.qX.prototype={
c5(a){var s=this.e,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.r0(a)),r.i("F<1>"))},
gpf(){var s=this.e,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.r_()),r.i("F<1>"))},
gk6(){var s,r,q,p,o,n=t.N,m=t.S,l=A.E(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].f
o=l.h(0,p)
l.k(0,p,(o==null?0:o)+1)}return A.aX(l,n,m)},
pe(a){var s,r,q
for(s=this.gpf(),r=J.N(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>"));s.m();){q=r.gp()
if(q.y===a)return q}return null},
bU(a){return B.a.b7(this.d,new A.qY(a),new A.qZ(a))},
fj(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.a(A.i("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.a(A.i("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.a(A.i("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a0(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.a(A.i("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.a(A.i("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aQ(["production","proxy","invisible-anchor"],s).q(0,l))throw A.a(A.i("invalid inventory asset status "+m+": "+l))}j=A.a0(s)
i=A.a0(s)
h=A.a0(s)
for(q=a6.e,p=q.length,m=a9.e,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){g=q[o]
l=g.a
if(!j.l(0,l))throw A.a(A.i("duplicate inventory placement "+l))
k=g.b
f=m.h(0,k)
if(f==null)throw A.a(A.i(a7+l+" references "+k))
n=a6.bU(g.c)
if(g.x&&g.y!=null){e=g.y
e.toString
d=$.F9()
if(!d.b.test(e))throw A.a(A.i("invalid inventory focusId "+l+": "+e))
if(!h.l(0,e))throw A.a(A.i("duplicate inventory focusId "+e))}e=g.z
if(e<0||!isFinite(e))throw A.a(A.i("invalid clearance for "+l))
d=g.Q
c=!0
if(isFinite(d))if(!(d<0))if(isFinite(g.as)){b=g.at
if(isFinite(b))if(isFinite(g.ax))if(!(b<0))d=d>0&&b<=0
else d=c
else d=c
else d=c}else d=c
else d=c
else d=c
if(d)throw A.a(A.i("invalid thermal source for "+l))
d=g.ay
c=d.a
if(!A.aQ(["none","static","dynamic","kinematic"],s).q(0,c))A.h(A.i("invalid physics body type for "+l))
b=d.b
a=!0
if(isFinite(b)){a0=d.c
if(isFinite(a0)){a1=d.d
if(isFinite(a1)){a2=d.e
if(isFinite(a2)){a=d.f
a=!isFinite(a)||b<0||a0<0||a1<0||a2<0||a<0||a>1}}}}if(a)A.h(A.i("invalid physics values for "+l))
c=c==="none"
if(c)a=b!==0||d.c!==0||d.r
else a=!1
if(a)A.h(A.i("physics none body cannot carry mass or collision: "+l))
c=!c
if(c)a=b<=0||d.c<=0||d.d<=0
else a=!1
if(a)A.h(A.i("physical body needs positive mass and density: "+l))
if(c&&Math.abs(b-d.c*d.d)>Math.max(0.01,b*0.02))A.h(A.i("mass and density disagree for "+l))
d=g.e
if(d!=null&&!i.l(0,k+":"+d))throw A.a(A.i("duplicate inventory socket "+k+":"+d))
k=g.f.a
d=k.a*a8
c=k.b*a8
k=k.c*a8
a3=g.j9(n,a8)
a4=g.fe(n,a8)
a5=0.43+e
e=a3.a
b=-a5
a=!0
if(!(d-e<b)){a0=f.c
if(!(d+e>a0.a+a5)){e=a3.c
k=k-e<b||k+e>a0.c+a5||c+a4.b>a0.b+a5||c+a4.a<b}else k=a}else k=a
if(k)throw A.a(A.i(a7+l+" escapes "+f.a))}}}
A.r0.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:38}
A.r_.prototype={
$1(a){return t.fl.a(a).x},
$S:38}
A.qY.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:113}
A.qZ.prototype={
$0(){return A.h(A.i("inventory asset missing: "+this.a))},
$S:7}
A.di.prototype={}
A.cU.prototype={
j9(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.c(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
fe(a,b){var s=this.f.c.b*b,r=a.r
return new A.c(r.a.b*s,r.b.b*s,0)}}
A.lC.prototype={}
A.rn.prototype={}
A.rl.prototype={}
A.yQ.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.rm.prototype={
D(){var s,r,q,p=A.m(t.N,t.z),o=this.a,n=A.w(o).i("af<1>")
n=A.J(new A.af(o,n),n.i("t.E"))
B.a.a4(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
fb(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.a(B.hC)
s=t.X
r=A.b_(a,s,s)
s=this.a
s.R(0)
for(q=new A.O(r,A.w(r).i("O<1,2>")).gA(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.b4(o)||o<0)throw A.a(B.i2)
s.k(0,n,o)}}}
A.dX.prototype={}
A.r1.prototype={
q3(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.d([],t.ea)
for(r=A.eW(a5,a5.r,A.w(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.r)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.ac(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.c(a,a0,a1).gu(0)
if(a2>0.0001){a3=1/a2
a4=new A.c(a*a3,a0*a3,a1*a3)}else a4=new A.c(0,-1,0)
B.a.l(s,new A.dX(new A.c(d,c,e),a4,16760952,3.8,2.1*this.lZ(k),0.06,80,180,0.12))}}B.a.Y(s,new A.r2(a6))
return A.hP(s,0,A.ej(4,"count",t.S),t.A_).bL(0)},
lZ(a){var s
A:{if("kitchen"===a){s=1
break A}if("living-room"===a){s=0.85
break A}if("bathroom"===a){s=0.8
break A}if("bedroom"===a){s=0.55
break A}if("hall"===a){s=0.5
break A}if("landing"===a){s=0.35
break A}s=0.65
break A}return s}}
A.r2.prototype={
$2(a,b){var s=t.A_
s.a(a)
s.a(b)
s=this.a
return B.b.H(a.a.Z(0,s).gu(0),b.a.Z(0,s).gu(0))},
$S:115}
A.cA.prototype={
D(){var s=this,r=s.e
return A.E(["lightId",s.a,"roomId",s.b,"type",s.c,"colorTemperatureKelvin",s.d,"colorRGB",A.d([r.c,r.b,r.a],t.n),"intensityLux",s.f,"coneAngleDegrees",s.r,"castsShadow",!0,"hasInteractiveSwitch",s.x],t.N,t.z)}}
A.eC.prototype={
C(){return"Floor."+this.b}}
A.eB.prototype={
C(){return"Facing."+this.b}}
A.fL.prototype={
sjR(a){this.w=A.U(a)}}
A.cj.prototype={
cL(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aW(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.a(A.a7(a,"roomId","not an endpoint of "+s.a))},
aO(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.a(A.a7(a,"roomId","not an endpoint of "+s.a))}}
A.lN.prototype={}
A.fG.prototype={}
A.fB.prototype={}
A.c3.prototype={
i5(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=a.e.h(0,c)
if(b==null)throw A.a(A.i("RoomBuilder for ["+c+"] cannot find room in House graph"))
s=a.ac(b)
r=new A.bW(new Float32Array(10752))
q=new A.bW(new Float32Array(10752))
p=new A.bW(new Float32Array(10752))
o=new A.bW(new Float32Array(10752))
n=b.d
m=A.rc(b.y)
c=n.a
l=n.b
k=n.c
j=s.c
i=k+j
h=s.a
g=c+h
f=m.e
r.c7(new A.c(c,l,k),new A.c(c,l,i),new A.c(g,l,i),new A.c(g,l,k),m.c,h/f,j/f)
e=A.rc(b.z)
l+=s.b
f=e.e
q.c7(new A.c(c,l,k),new A.c(g,l,k),new A.c(g,l,i),new A.c(c,l,i),e.c,h/f,j/f)
d.mS(p,a,b,s)
d.mP(o,a,b,s)
d.bt(p,a,b,s)
d.bg(p,a,b,s)
return new A.jk(B.n.ae(r.a,0,r.b),B.n.ae(q.a,0,q.b),B.n.ae(p.a,0,p.b),B.n.ae(o.a,0,o.b))},
mS(a,b,c,d){var s,r,q,p,o=A.rc(c.x)
for(s=o.c,r=o.e,q=0;q<4;++q){p=B.Z[q]
A.Fr(this.bV(b,c,p),a,p,10655886,c,d,r,s)}},
bV(a,b,c){var s,r,q,p,o,n,m=A.d([],t.n1)
for(s=b.a,r=a.aP(s),q=J.N(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
if(p.aW(s)===c)B.a.l(m,new A.bV(p.aO(s),0,p.w,p.x,!0))}for(s=b.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===c)B.a.l(m,new A.bV(n.c,n.d,n.e,n.f,!1))}return m},
mP(a,b,c,d){var s,r,q,p,o
for(s=c.a,r=b.aP(s),q=J.N(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
if(p.at==null||p.as)continue
o=p.aW(s)
A.Ck(a,4734002,new A.bV(p.aO(s),0,p.w,p.x,!0),o,c,d)}},
bt(a,b,c,d){var s,r,q,p
for(s=d.b-0.08,r=0;r<4;++r){q=B.Z[r]
p=this.bV(b,c,q)
A.ja(p,a,q,c,d,B.nq)
A.ja(p,a,q,c,d,new A.hA(s,0.08,0.08,13024946,!1))}},
bg(a,b,c,d){}}
A.r6.prototype={
o0(a){return B.a.b7(this.c,new A.r7(a),new A.r8(a))},
q_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.a(A.i("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.a(A.i("soundscape source changed: "+f))
f=t.N
s=A.a0(f)
f=A.m(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.a(A.i("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.a(A.i("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.a(A.i("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.a(A.i("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gM(k)||k.ga6().P(0,new A.r9())||k.gan().P(0,new A.ra()))throw A.a(A.i("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.a(A.i("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.a(A.i("sound emitter "+l+" escapes "+j.a))}}}
A.r7.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:116}
A.r8.prototype={
$0(){return A.h(A.i("sound emitter missing: "+this.a))},
$S:7}
A.r9.prototype={
$1(a){return B.c.aQ(A.v(a)).length===0},
$S:3}
A.ra.prototype={
$1(a){return B.c.aQ(A.v(a)).length===0},
$S:3}
A.dh.prototype={}
A.qT.prototype={
cq(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.a7(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.lq}q=A.d([],t.Fm)
p=B.b.aX(r)+1
o=B.b.aX(b)
for(n=p;n<=o;++n){m=B.d.O(n,24)
B.a.l(q,new A.fn("tick"))
if(B.d.O(m,3)===0){B.a.l(q,new A.fn("cuckoo"))
B.a.l(q,new A.fn("bell"))}if(B.d.O(m,6)===0)B.a.l(q,new A.fn("chime"))}l.b=b
return q}}
A.fn.prototype={}
A.r5.prototype={
cq(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.a(A.a7(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.lp}q=A.d([],t.op)
for(p=B.b.aX(r)+1;p<=B.b.aX(b);++p){o=B.d.O(p,24)
n=B.d.O(o,4)
if(n===2)B.a.l(q,B.jU)
if(B.d.O(o,3)===1)B.a.l(q,B.jW)
if(B.d.O(o,8)===5)B.a.l(q,B.jZ)
if(B.d.O(o,5)===0)B.a.l(q,B.jV)
if(B.d.O(o,7)===3)B.a.l(q,B.k_)
if(n===1)B.a.l(q,B.jX)
if(B.d.O(o,6)===4)B.a.l(q,B.jY)}m.b=b
return q}}
A.dg.prototype={}
A.yP.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.rb.prototype={
D(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.m(m,l)
for(s=n.a,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.E(["open",o.a,"locked",o.b],m,r))}l=A.m(m,l)
for(s=n.c,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.E(["lit",o.a,"examined",o.b],m,r))}return A.E(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a0(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.a0(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.a0(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.AX(new A.af(o,A.w(o).i("af<1>")),d)){d=f.b
if(A.AX(new A.af(d,A.w(d).i("af<1>")),r)){d=f.c
e=!A.AX(new A.af(d,A.w(d).i("af<1>")),e)}else e=n}else e=n
if(e)throw A.a(B.iB)
e=f.d
if(e<0||e>2)A.h(B.hO)
a.y.b=e
for(e=s.length,q=0;q<s.length;s.length===e||(0,A.r)(s),++q){k=s[q]
j=o.h(0,k.a)
k.ax=j.a
k.ay=j.b}for(e=p.length,d=f.c,s=f.b,q=0;q<p.length;p.length===e||(0,A.r)(p),++q){i=p[q]
for(r=i.e,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){h=r[l]
n=s.h(0,h.a)
n.toString
h.w=n}for(r=i.r,o=r.length,l=0;l<r.length;r.length===o||(0,A.r)(r),++l){g=r[l]
j=d.h(0,g.a)
g.d=j.a
g.r=j.b}}}}
A.j5.prototype={
D(){return A.E(["open",this.a,"locked",this.b],t.N,t.y)}}
A.iR.prototype={
D(){return A.E(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.aF.prototype={}
A.pW.prototype={
$1(a){return this.a.q(0,A.v(a))},
$S:3}
A.eE.prototype={
C(){return"Hand."+this.b}}
A.vZ.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
fD(a,b){var s,r,q,p,o=A.d([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.lL.prototype={
D(){var s,r,q,p=t.N,o=A.m(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.E[r]
o.k(0,q,s.h(0,q))}return A.E(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
t(a){return new A.I(B.E,t.oI.a(new A.rI(this)),t.jT).a_(0," \xb7 ")}}
A.rH.prototype={
$2(a,b){return new A.P(A.v(a),A.v(b),t.q)},
$S:117}
A.rI.prototype={
$1(a){return this.a.a.h(0,A.v(a))},
$S:118}
A.ce.prototype={
D(){var s,r,q,p=this,o=A.d([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].D())
s=p.r
s=s==null?null:s.D()
return A.E(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)}}
A.rr.prototype={
ct(a){t.G.a(a)
return a.a===5&&B.a.a5(B.E,new A.ry(this,a))},
fQ(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.ct(b))return null
s=this.e++
r=new A.ce(s,a,A.d([A.rG(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
eD(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.ct(b))return!1
B.a.l(s.c,A.rG(b,c,B.aR))
return!0},
mr(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.ct(b))return!1
s.r=A.rG(b,0,B.ds)
return!0},
jH(a){var s,r,q,p
t.L.a(a)
s=this.d
B.a.R(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.J(p)&&!B.a.q(s,p))B.a.l(s,p)}},
q2(a){var s
if(!this.b.J(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
D(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.w(n).c)
B.a.a4(n)
s=A.d([],t.cs)
for(r=q.b,r=new A.ad(r,r.r,r.e,A.w(r).i("ad<2>"));r.m();)s.push(r.d.D())
return A.E(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.ry.prototype={
$1(a){var s
A.v(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.iq.prototype={
D(){var s,r=this,q=A.m(t.N,t.X)
q.k(0,"kind",r.a.b)
q.k(0,"explicit",r.b)
q.k(0,"automatic",!1)
q.k(0,"rejected",r.d)
q.k(0,"aliasUsed",r.f)
s=r.e
if(s!=null)q.k(0,"rejectionReason",s)
s=r.r
if(s!=null)q.k(0,"aliasReason",s)
return q}}
A.ph.prototype={
cV(a){var s,r,q=a==null?null:B.c.aQ(a).toLowerCase()
if(q==null||q.length===0)return B.ff
if(q==="pixeldart")return B.fe
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.iq(B.aY,!1,!0,r,s,s?r:null)}}
A.j7.prototype={}
A.tH.prototype={
D(){var s,r,q,p=A.d([],t.A7)
for(s=this.a.gan(),s=s.gA(s),r=t.N;s.m();){q=s.gp()
p.push(A.E(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.E(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.yF.prototype={
$1(a){A.v(a)
return a.length!==0&&a!==".."},
$S:3}
A.j8.prototype={}
A.m9.prototype={}
A.tJ.prototype={
$1(a){return t.zU.a(a).f},
$S:22}
A.tK.prototype={
$1(a){return t.zU.a(a).f},
$S:22}
A.tB.prototype={}
A.tA.prototype={
gig(){var s,r,q="pixeldart",p=this.b,o=p.aK
if(o){s=p.w
s===$&&A.u()
s=s.a.b}else s="safe"
p=A.Co(q,o?p.gmU():B.m9,!1,s)
r=p
if(r==null)r=A.Co(q,A.d([],t.s),!1,"safe")
p=A.Cn(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
ci(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.c1){if(k.aK){s=k.d
s===$&&A.u()
s=s.a.b===B.a6}else s=!1
s=!s
if(s){m.d=B.a0;++k.eX
j=B.a0}if(j===B.c1)return}if(j!==B.a0)A.h(A.i(l))
B.f.a0(A.E(["backend","pixeldart","interpolation",0,"facts",A.xt(a.a.a)],t.N,t.X),null)
j=k.aK
if(j){s=k.d
s===$&&A.u()
s=s.a.b===B.a6}else s=!1
if(s){if(m.d!==B.a0)A.h(A.i(l))
m.d=B.c1
return}if(!j)A.h(A.i("Pixeldart runtime is not initialized"))
j=k.to
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.dk(j)
j=$.Bq()
s=j.b
q=j.c
p=A.A9(k.b/k.c,q,j.a,s)
j=p.a3(0,r)
j=A.BD(k.b/k.c,B.v,q,B.qR,s,p,r,j)}o=new A.lm(j,k.x1,k.x2,-1,k.o7++,k.eX,k.c1,k.c0)
n=new A.vm()
$.Bl()
j=$.tR.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.u()
s=k.f
s===$&&A.u()
k.m9(j.mF(s,o),o)
k.dH=k.e.o2()
j=$.tR.$0()
n.b=j
k.dI=n.go_()/1000},
iH(a){if(this.d!==B.a0)A.h(A.i("pixeldart backend is not ready"))
B.f.a0(A.E(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.tC.prototype={
mV(a,b){var s,r,q,p,o,n,m
a.B()
s=B.cG.cV(a)
r=A.d([a.a,"webgl2"],t.s)
q=a.c
if(q!=null)r.push("vendor-"+q)
p=a.b
if(p!=null)r.push("renderer-"+p)
r.push("max-texture-"+a.d)
r.push("max-texture-array-layers-"+a.e)
r.push("max-samples-"+a.f)
r.push("max-vertex-attributes-"+a.r)
r.push("max-color-attachments-"+a.w)
r.push("negotiated-profile-"+s.a.b)
r.push("profile-"+b.a.b)
o=b.b
o=A.J(o,A.w(o).c)
B.a.a4(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.r)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.m2.prototype={
C(){return"PixeldartQualityTier."+this.b}}
A.tD.prototype={
D(){var s=this
return A.E(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.tE.prototype={
i8(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.a(A.p("surface dimensions must be positive",null))
s=a1.a
A:{if(B.K===s){r=new A.fU(1080,1920)
break A}if(B.T===s){r=new A.fU(720,1280)
break A}r=new A.fU(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.ap(r.b*q)
q=B.b.ap(r.a*q)
o=B.b.n(a5/p,0,1)
n=B.b.n(a4/q,0,1)
m=o<n?o:n
r=this.fT(B.b.ap(p*m),320,a5)
q=this.fT(B.b.ap(q*m),180,a4)
l=s===B.K
k=s===B.T
j=a1.b.q(0,"shadows")&&a3!=="off"
C:{if("off"===a3){p=0
break C}p=j?1:0
break C}D:{i=1024
if("high"===a3)break D
if("standard"===a3){i=768
break D}if(!l)i=k?768:512
break D}E:{if("msaa4"===a){h=4
break E}if("msaa2"===a||"auto"===a){h=2
break E}h=1
break E}g=a0==="linear"?B.fW:B.bd
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.h6
break F}if("errors"===b){c=B.cO
break F}c=B.h7
break F}return new A.jg(a1,r,q,h,g,p,i,f,e,d,c)},
fT(a,b,c){if(c<b)return c
return B.d.n(a,b,c)}}
A.tF.prototype={}
A.hD.prototype={}
A.tG.prototype={}
A.tI.prototype={
dN(a,b,c,d){return this.oC(a,t.zL.a(b),c,d)},
oC(a,b,c,d){var s=0,r=A.aL(t.c_),q,p,o,n,m
var $async$dN=A.aM(function(e,f){if(e===1)return A.aI(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a6(B.fI.dM(new A.tc(d,b),B.no),$async$dN)
case 3:p=new o.j8(n,m,f)
A.Ce(A.d([p],t.Fa))
q=p
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$dN,r)}}
A.tL.prototype={}
A.tM.prototype={
cK(a,b,c){return this.oD(a,t.xJ.a(b),t.tX.a(c))},
oD(a,b,c){var s=0,r=A.aL(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$cK=A.aM(function(d,e){if(d===1)return A.aI(e,r)
for(;;)switch(s){case 0:j=A.d([],t.Fa)
p=a.a,o=p.ga6(),o=o.gA(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gp()
l=p.h(0,m)
if(l==null)l=A.h(A.i("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a6(b.$1(l.c),$async$cK)
case 5:k=i.GD(h.a(g.ai(e,null)))
m=l.a
if(k.b!==m)throw A.a(A.M("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.a(A.M("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a6(B.fL.dN(m,new A.tN(c,l),l.b,k),$async$cK)
case 6:i.l(h,e)
s=3
break
case 4:q=new A.m9(A.Ce(j))
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$cK,r)}}
A.tN.prototype={
$1(a){return this.a.$2(this.b.a,A.v(a))},
$S:119}
A.iQ.prototype={
giL(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gnQ(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.u_.prototype={
pX(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bq
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bq
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.iQ(!0,B.b.n(q*(0.6+b*0.6),0,1),0.82+s.aD()*0.1,0.9+s.aD()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.aD()*0.15
p=(0.6+s.aD()*2.8)*1000
l.x=p
l.e=p/343
o=s.aD()*3.141592653589793*2
n=0.28+s.aD()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.z=new A.iQ(!0,B.b.n(0.6+b*0.6,0,1),0.82+s.aD()*0.1,0.9+s.aD()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.aD()*6}}}
A.mg.prototype={
C(){return"RendererBackendKind."+this.b}}
A.hH.prototype={
C(){return"RendererBackendState."+this.b}}
A.uc.prototype={}
A.mh.prototype={}
A.ub.prototype={
ko(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.a(A.p("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.a(A.p("renderer provenance values must be non-empty",null))}},
D(){var s,r,q,p=this,o=A.m(t.N,t.z)
o.k(0,"backend",p.a)
o.k(0,"profile",p.b)
o.k(0,"buildId",p.c)
o.k(0,"capabilities",p.d)
s=p.e
r=s!=null
o.k(0,"provenancePinned",r&&p.f!=null&&p.r!=null&&p.w!=null&&p.x!=null)
o.k(0,"fallback",!1)
q=p.Q
if(q!=null)o.k(0,"selection",q)
if(r)o.k(0,"rendererSha",s)
s=p.f
if(s!=null)o.k(0,"gameSha",s)
s=p.r
if(s!=null)o.k(0,"sdkVersion",s)
s=p.w
if(s!=null)o.k(0,"lockfileDigest",s)
s=p.x
if(s!=null)o.k(0,"projectVersion",s)
return o}}
A.ud.prototype={
dW(a,b){if(a<=0||b<=0)throw A.a(A.p("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
iN(a,b){var s,r,q,p,o
for(s=A.ab(this.a.d,t.rO),r=A.C(s).i("bO<1>"),s=new A.bO(s,r),s=new A.an(s,s.gu(0),r.i("an<a1.E>")),r=r.i("a1.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.v3.prototype={
mz(a){var s,r,q,p,o,n,m,l,k=this.a
k.R(0)
s=a.w
s===$&&A.u()
r=A.C(s)
q=r.i("l(1)").a(new A.v4())
s=B.a.gA(s)
r=new A.R(s,q,r.i("R<1>"))
q=t.N
p=t.X
while(r.m()){o=s.gp()
n=o.a
m=o.e
l=m?o.z:o.y
if(m){m=o.ax
o=m==null?o.z:m}else{m=o.at
o=m==null?o.y:m}k.k(0,n,A.E(["requested",l,"effective",o],q,p))}}}
A.v4.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:8}
A.c5.prototype={
C(){return"ShaderDebugMode."+this.b},
gnO(){switch(this.a){case 0:var s="Standard Shaded (Off)"
break
case 1:s="Base Albedo Only"
break
case 2:s="World Normal Vectors"
break
case 3:s="Roughness Channel"
break
case 4:s="Metallic Channel"
break
case 5:s="Ambient Occlusion Only"
break
case 6:s="Geometric Wireframe"
break
default:s=null}return s}}
A.jo.prototype={
C(){return"ShaderTuningAvailability."+this.b}}
A.du.prototype={
C(){return"ShaderTuningCategory."+this.b}}
A.cD.prototype={
goc(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.F(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.F(r,2)
else return B.b.F(r,3)}},
geH(){var s,r,q=this
if(q.Q!==B.z)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.F(r,1)
if(s>=0.01)return B.b.F(r,2)
return B.b.F(r,3)}}
A.v5.prototype={
gby(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.e(B.ay,p)
s=B.ay[p]
p=this.w
p===$&&A.u()
r=A.C(p)
q=r.i("F<1>")
p=A.J(new A.F(p,r.i("l(1)").a(new A.vc(s)),q),q.i("t.E"))
return p},
gbX(){var s,r=this.gby(),q=r.length
if(q===0)return null
s=B.d.n(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.e(r,s)
return r[s]},
om(){var s,r
if(this.b===5)return
else{s=this.gbX()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y+s.w,s.f,s.r)}},
nI(){var s,r
if(this.b===5)return
else{s=this.gbX()
r=s==null?null:s.Q===B.z
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y-s.w,s.f,s.r)}},
py(){var s,r,q,p,o
if(this.b===5)this.e=B.aD
else for(s=this.gby(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
pw(){var s,r,q,p
this.e=B.aD
s=this.w
s===$&&A.u()
r=0
for(;r<60;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
pG(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
t.Q.a(d)
t.gG.a(c)
t.m0.a(b)
t.G.a(e)
s=l.w
s===$&&A.u()
r=0
for(;r<60;++r){q=s[r]
p=q.a
o=d.q(0,p)
n=e.h(0,p)
m=c.h(0,p)
p=b.h(0,p)
q.Q=o?B.z:B.ez
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.aD},
nK(){var s,r,q,p=this.w
p===$&&A.u()
s=A.C(p)
s=new A.F(p,s.i("l(1)").a(new A.v6()),s.i("F<1>")).gu(0)
r=A.C(p)
r=new A.F(p,r.i("l(1)").a(new A.v7()),r.i("F<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.e(B.ay,p)
p=B.ay[p]
q=this.gbX()
q=q==null?null:q.a
return A.E(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
fg(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.u()
j=A.J(j,t.r)
B.a.Y(j,new A.vd())
s=this.e
r=A.d([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.r)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.z)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.E(["id",m.a,"requested",k,"effective",l],p,o))}return A.E(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
goH(){var s,r,q,p=A.d([],t.s),o=this.w
o===$&&A.u()
s=0
for(;s<60;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.a4(p)
return p},
ol(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="requested",e="numeric control ",d=B.f.ai(a,g),c=t.f
if(!c.b(d))throw A.a(B.ja)
if(!J.aa(d.h(0,"schema"),"pixeldart-shader-lab-v1")||!J.aa(d.h(0,"version"),1))throw A.a(B.iR)
s=d.h(0,"controls")
if(t.j.b(s)){r=J.cN(s)
this.w===$&&A.u()
r=r!==60}else r=!0
if(r)throw A.a(B.hH)
r=t.N
q=A.m(r,t.r)
p=this.w
p===$&&A.u()
o=0
for(;o<60;++o){n=p[o]
q.k(0,n.a,n)}m=A.m(r,t.X)
for(r=J.N(s);r.m();){l=r.gp()
if(!c.b(l)||typeof l.h(0,"id")!="string"||!l.J(f))throw A.a(B.j5)
k=A.v(l.h(0,"id"))
n=q.h(0,k)
if(n==null||m.J(k))throw A.a(A.M("unknown or duplicate Shader Lab control: "+k,g,g))
j=l.h(0,f)
if(n.e){if(!A.bB(j))throw A.a(A.M("toggle "+k+" requires a boolean request",g,g))
m.k(0,k,j)}else{if(typeof j!="number"||!isFinite(j))throw A.a(A.M(e+k+" requires a finite number",g,g))
i=n.f
if(j<i||j>n.r)throw A.a(A.M(e+k+" is outside ["+A.z(i)+", "+A.z(n.r)+"]",g,g))
m.k(0,k,j)}}h=d.h(0,"debugMode")
if(typeof h!="string"||!B.a.P(B.dL,new A.va(h)))throw A.a(B.ia)
if(h!=="none")throw A.a(B.hZ)
for(o=0;o<60;++o){n=p[o]
c=m.h(0,n.a)
c.toString
if(n.e)n.z=A.U(c)
else n.y=A.ax(c)}this.e=B.a.au(B.dL,new A.vb(h))},
I(a){var s,r,q=this.w
q===$&&A.u()
s=A.C(q)
r=A.bM(new A.F(q,s.i("l(1)").a(new A.v9(a)),s.i("F<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
bM(a){var s,r,q=this.w
q===$&&A.u()
s=A.C(q)
r=A.bM(new A.F(q,s.i("l(1)").a(new A.v8(a)),s.i("F<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.vc.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:8}
A.v6.prototype={
$1(a){return t.r.a(a).Q===B.z},
$S:8}
A.v7.prototype={
$1(a){return t.r.a(a).Q!==B.z},
$S:8}
A.vd.prototype={
$2(a,b){var s=t.r
return B.c.H(s.a(a).a,s.a(b).a)},
$S:121}
A.va.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:55}
A.vb.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:55}
A.v9.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.v8.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:8}
A.vl.prototype={
$1(a){var s,r=Math.cos(0.8988445647770796)*Math.cos(a)
if(Math.abs(r)<1e-12)return 0
s=(Math.sin(-0.014538592669112763)-Math.sin(0.8988445647770796)*Math.sin(a))/r
if(s<=-1)return 24
if(s>=1)return 0
return Math.acos(s)*24/3.141592653589793},
$S:123}
A.c6.prototype={
C(){return"SleepQuality."+this.b}}
A.bG.prototype={
C(){return"SleepLocation."+this.b}}
A.hM.prototype={}
A.pP.prototype={
e2(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jY(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
D(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.d([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.E(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.E(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.pQ.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:124}
A.pR.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:125}
A.lj.prototype={}
A.lA.prototype={
C(){return"InteractionType."+this.b}}
A.fN.prototype={
C(){return"WorldComparisonKind."+this.b}}
A.wl.prototype={}
A.fM.prototype={}
A.kZ.prototype={}
A.re.prototype={}
A.ri.prototype={
fq(){var s,r,q,p=t.U,o=A.d([],p)
for(s=this.a.b,s=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.d(o.slice(0),p)
B.a.Y(p,new A.rj())
return p},
n1(a,b){var s,r,q,p,o,n=b.b
if(n.gM(n))return B.rL
s=t.N
r=A.a0(s)
q=A.a0(s)
for(s=n.ga6(),s=s.gA(s),p=a.c;s.m();){o=s.gp()
if(B.a.gaa(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.fM(B.b2,r)
s=r.a
o=B.a.gaa(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.gaa(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.fM(B.eY,r)
return new A.fM(B.cr,r)},
lM(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.kZ(e,!1,B.rK,null)
s=q.d===c
r=this.n1(q,d)
this.d.$1(e)
return new A.kZ(e,s,r,r.a===B.b2&&s?'The world says "'+d.c+'". The entry says "'+B.a.gaa(q.c).t(0)+'".':null)},
nB(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.b2)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.re(B.a.gaa(s.c).t(0)+" but "+A.z(a.f))}}
A.rj.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.H(s.a(b).a,a.a)},
$S:13}
A.jc.prototype={}
A.jb.prototype={}
A.dp.prototype={}
A.tY.prototype={}
A.tZ.prototype={}
A.tX.prototype={
kn(a,b){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
n=o.a
m=!0
if(n.length!==0)if(o.r.length!==0){l=o.b
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){k=o.c
if(isFinite(k.a)&&isFinite(k.b)&&isFinite(k.c)){j=o.d
if(isFinite(j))if(!(j<=0)){j=o.e
if(isFinite(j))if(!(j<0))if(!(j>1)){m=o.f
m=!isFinite(m)||m<=0||k.b>=l.b}}}}}if(m)A.h(A.p("invalid rain roof catchment "+n,null))
m=o.r
if(!q.J(m))throw A.a(A.p("roof "+n+" references missing drain "+m,null))}for(s=new A.ad(q,q.r,q.e,A.w(q).i("ad<2>"));s.m();){r=s.d
q=r.a
n=!0
if(q.length!==0){m=r.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){l=r.c
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){r=r.d
r=!isFinite(r)||r<=0||l.b>m.b+0.001}else r=n}else r=n}else r=n
if(r)A.h(A.p("invalid rain drain "+q,null))}},
k7(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=!0
if(isFinite(a9))if(!(a9<0))if(isFinite(a8))if(!(a8<0))a7=!isFinite(1)
if(a7)throw A.a(A.p("invalid rain flow step inputs",null))
s=A.d([],t.F7)
r=A.m(t.N,t.i)
for(a7=this.a,q=a7.length,p=b0.a,o=a8<=0.000001,n=0,m=0,l=0,k=0;k<q;++k){j=a7[k]
i=j.a
h=p.h(0,i)
g=a9*j.d*j.e*a8
f=B.b.n(h==null?0:h,0,1/0)+g
n+=g
e=B.b.n(j.f*a8,0,f)
d=f-e
p.k(0,i,d)
l+=d
m+=e
if(e>0){h=o?1:a8
B.a.l(s,new A.dp(i+":slope",j.b,j.c,e/h,0.018+B.b.n(e,0,0.02)*0.6))}i=j.r
h=r.h(0,i)
r.k(0,i,(h==null?0:h)+e)}for(p=this.b,c=0,b=0,k=0;k<q;++k){i=a7[k].r
a=r.h(0,i)
if(a==null)a=0
if(a<=0)continue
a0=p.h(0,i)
a1=B.b.n(a,0,a0.d*a8)
a2=a-a1
c+=a1
b+=a2
if(a1>0){h=a0.a
a3=a0.b
a4=a0.c
a5=o?1:a8
B.a.l(s,new A.dp(h+":downpipe",a3,a4,a1/a5,0.014+B.b.n(a1,0,0.02)*0.5))}if(a2>0){h=a0.a
a3=a0.b
a4=o?1:a8
B.a.l(s,new A.dp(h+":overflow",a3,new A.c(a3.a+0,a3.b+-0.55,a3.c+0),a2/a4,0.012+B.b.n(a2,0,0.02)*0.4))}r.k(0,i,0)}for(a7=s.length,k=0;k<s.length;s.length===a7||(0,A.r)(s),++k){a6=s[k]
q=a6.a
p=!0
if(q.length!==0){o=a6.b
i=o.a
if(isFinite(i)&&isFinite(o.b)&&isFinite(o.c)){h=a6.c
a3=h.a
if(isFinite(a3)&&isFinite(h.b)&&isFinite(h.c)){a4=a6.d
if(isFinite(a4))if(!(a4<0)){p=a6.e
p=!isFinite(p)||p<=0||new A.c(a3-i,h.b-o.b,h.c-o.c).gu(0)<0.00001}}}}if(p)A.h(A.p("invalid rain flow segment "+q,null))}return new A.tZ(A.ab(s,t.z0),n,c,b)}}
A.cC.prototype={
C(){return"RuptureStep."+this.b}}
A.ui.prototype={}
A.ds.prototype={}
A.uj.prototype={
gfF(){var s=B.bM.h(0,this.a)
return s==null?0:s},
k5(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.L)s=q.e
else s=!0
if(s)return B.dK
r=A.AH(b)
s=q.c
B.a.R(s)
B.a.L(s,r)
B.a.R(q.d)
q.a=B.aZ
q.b=0
q.e=!1
return A.d([B.fP],t.xB)},
ew(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.a(A.p("rupture advance must be a finite non-negative duration",null))
if(l.a===B.L||a===0)return B.dK
s=A.d([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.L))break
A:{q=l.a
p=B.bM.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.ag)l.mf(s)
p=l.b
o=B.bM.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.ds())
if(q===B.ag){l.a=B.L
l.b=0
l.e=!0
B.a.l(s,B.fO)}else{p=q.a+1
if(!(p<7))return A.e(B.dF,p)
l.a=B.dF[p]
l.b=0
B.a.l(s,new A.ds())}}}return A.ab(s,t.F3)},
D(){var s=this,r=t.N
return A.E(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ab(s.c,r),"extinguishedMantles",A.ab(s.d,r),"completed",s.e],r,t.z)},
mf(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.n(B.b.aX(l.b/l.gfF()*A.ab(s,r).length),0,A.ab(s,r).length)
p=l.d
for(;;){o=A.aG(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aG(s,!1,r)
o.$flags=3
n=o
o=A.aG(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.e(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.ds())}}}
A.lq.prototype={
gfJ(){var s=this.b
if(s<7||s>19)return 0
return B.b.n((s-7)/12,0,1)},
gnD(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.n((s-5.5)/15,0,1))},
fE(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.M("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
j8(a){if(!isFinite(a)||a<0||a>=24)throw A.a(A.M("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.eL.prototype={
C(){return"PrecipitationKind."+this.b}}
A.fJ.prototype={
D(){var s=this
return A.E(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)}}
A.wb.prototype={
eY(a){var s,r
if(a<1||a>this.b.length)throw A.a(A.b2(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.e(s,r)
return s[r]}}
A.yj.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.n(B.b.n(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nX(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.nX(q,p)&255)/255:1.2+(A.nX(q,p)&255)/255*0.8
p=A.nX(q,k+211)
q=A.nX(q,k+307)
n=A.o2(B.b.F(s,2))
m=A.o2(B.b.F(12-r*0.11000000000000001,2))
l=A.o2(B.b.F(o,2))
p=A.o2(B.b.F((p&65535)/65535*3.141592653589793*2,5))
q=A.o2(B.b.F(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fJ(k,j,n,m,l,p,q,j?B.az:B.w)},
$S:126}
A.hT.prototype={}
A.eR.prototype={}
A.w0.prototype={
D(){var s=this
return A.E(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.w9.prototype={
D(){var s=this,r=s.b,q=t.N
return A.E(["precipitationKind",s.a.b,"windVelocityMps",A.E(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fK.prototype={}
A.eT.prototype={
B(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.kk(s)){r=q.c
if(A.kk(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.a(A.p("invalid weather collision box "+p,null))}}
A.eU.prototype={
C(){return"WeatherImpactResponse."+this.b}}
A.mS.prototype={}
A.hU.prototype={
D(){return A.E(["snowDepthM",this.a,"waterFilmDepthM",this.b,"materialDissolution01",this.c],t.N,t.i)},
hT(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.a(A.p("weather surface state must be finite and >= 0",null))}}
A.wc.prototype={
$1(a){var s=this.a.h(0,a)
if(typeof s!="number"||!isFinite(s))throw A.a(A.M("weather surface "+a+" must be finite",null,null))
return s},
$S:127}
A.wd.prototype={
D(){var s=this
return A.E(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.fc.prototype={
C(){return"AuthoredEventConsumer."+this.b}}
A.qj.prototype={
q1(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.KJ(s[q].b)},
oj(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dJ(a.a+":"+a.c),q=t.sU,r=new A.an(r,r.gu(0),q.i("an<a4.E>")),q=q.i("a4.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.ap((l+(k-l)*(s/2147483647))*60)
n=B.b.i6(l*60)
m=B.b.aX(k*60)
return(n<=m?B.d.n(o,n,m):B.d.n(o,0,1439))/60},
ij(a){var s,r,q,p,o=A.d([],t.D)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
mT(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.qk.prototype={
$2(a,b){var s,r,q=t.Dm
q.a(a)
q.a(b)
s=B.d.H(a.c,b.c)
if(s!==0)return s
r=B.b.H(a.d,b.d)
return r!==0?r:B.c.H(a.a,b.a)},
$S:128}
A.lo.prototype={
cq(a,b){var s,r,q,p,o,n,m,l=A.d([],t.D)
for(s=this.a,r=s.ij(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
if(s.oj(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
gii(){return new A.ca(this.o6(),t.oe)},
o6(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$gii(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.mo(o.ij(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gnJ(){var s=this.c
s=A.J(s,A.w(s).c)
B.a.a4(s)
return s},
D(){var s=this.c
s=A.J(s,A.w(s).c)
B.a.a4(s)
return A.E(["delivered",s],t.N,t.z)}}
A.qi.prototype={
$1(a){return this.a.mT(A.v(a))!=null},
$S:3}
A.td.prototype={
aY(a,b){var s=this.b
if(s.J(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
oi(a){return this.aY(a,null)},
mw(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gN(),q=q.gA(q);q.m();){r=q.gp()
s.k(0,r.a,r.b)}},
D(){var s,r,q,p,o,n,m,l,k=this.a,j=A.w(k).i("O<1,2>")
k=A.J(new A.O(k,j),j.i("t.E"))
B.a.Y(k,new A.tf())
j=t.N
k=A.A8(k,j,j)
s=this.b
r=A.w(s).i("O<1,2>")
s=A.J(new A.O(s,r),r.i("t.E"))
B.a.Y(s,new A.tg())
s=A.A8(s,j,j)
r=A.m(j,t.P)
q=this.c
p=A.w(q).i("O<1,2>")
q=A.J(new A.O(q,p),p.i("t.E"))
B.a.Y(q,new A.th())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.E(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.E(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.tf.prototype={
$2(a,b){var s=t.q
return B.c.H(s.a(a).a,s.a(b).a)},
$S:28}
A.tg.prototype={
$2(a,b){var s=t.q
return B.c.H(s.a(a).a,s.a(b).a)},
$S:28}
A.th.prototype={
$2(a,b){var s=t.gJ
return B.c.H(s.a(a).a,s.a(b).a)},
$S:130}
A.db.prototype={
D(){var s=this
return A.E(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bF.prototype={
D(){var s=this
return A.E(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)}}
A.ty.prototype={
fo(){var s,r,q,p,o,n,m,l="denise.pears",k=A.d([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m="aftermath."+B.c.aR(n.a,8)
if(p.J(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.l(k,n)}if(q.aY("ashworth.compact","accepted"))B.a.l(k,B.om)
if(q.aY(l,"taken"))B.a.l(k,B.oq)
else if(q.aY(l,"left"))B.a.l(k,B.on)
if(q.aY("sylvia.certificate","granted"))B.a.l(k,B.op)
if(q.aY("residue.coal","cellar"))B.a.l(k,B.ol)
if(q.aY("telegram.08","read"))B.a.l(k,B.ok)
if(q.aY("truth.shawl","home"))B.a.l(k,B.oj)
if(q.aY("sowerby.paraffin","received"))B.a.l(k,B.oo)
if(q.aY("inspector.proclamation","acknowledged"))B.a.l(k,B.oi)
return k},
jo(a){var s=this.fo(),r=A.C(s),q=r.i("F<1>")
s=A.J(new A.F(s,r.i("l(1)").a(new A.tz(a)),q),q.i("t.E"))
return s}}
A.tz.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:43}
A.vp.prototype={
D(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hO(e.a),c=t.N,b=t.P,a=A.m(c,b)
for(s=e.b,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.ml(q,r.b))}s=A.hO(e.r)
q=A.hO(e.w)
p=A.hO(e.x)
o=A.m(c,t.rW)
for(n=e.as,n=new A.O(n,A.w(n).i("O<1,2>")).gA(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.d([],m)
for(i=J.N(l.b);i.m();){h=i.gp()
j.push(A.E(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.m(c,b)
for(m=e.at,m=new A.O(m,A.w(m).i("O<1,2>")).gA(0);m.m();){g=m.d
n.k(0,g.a,g.b.D())}b=A.m(c,b)
for(m=e.ax,m=new A.O(m,A.w(m).i("O<1,2>")).gA(0);m.m();){f=m.d
b.k(0,f.a,f.b.D())}return A.E(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
ml(a,b){var s,r=A.hO(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.hO(q.bl(0,new A.vq(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.ga9(s))r.k(0,"_ambient",A.hO(s.bl(0,new A.vr(),t.S,t.z)))
return r}}
A.vq.prototype={
$2(a,b){return new A.P(A.j(a),t.BX.a(b).D(),t.pr)},
$S:132}
A.vr.prototype={
$2(a,b){return new A.P(A.j(a),t.vw.a(b).D(),t.pr)},
$S:133}
A.fI.prototype={
D(){return A.E(["hour",this.a,"order",this.b],t.N,t.S)}}
A.fH.prototype={
D(){return A.E(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)}}
A.jz.prototype={
D(){var s=t.N
return A.E(["field",this.a,"value",this.b],s,s)}}
A.mQ.prototype={
D(){var s,r,q,p=this,o=A.d([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].D())
return A.E(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)}}
A.fz.prototype={
D(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.ga9(s))q.k(0,"effects",s)
return q}}
A.dy.prototype={
D(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.ga9(s))q.k(0,"when",s)
return q}}
A.vn.prototype={
q0(){var s,r,q,p,o,n,m,l,k=A.m(t.S,t.r6)
for(s=this.c,r=s.length,q=t.D,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.c
m=k.h(0,n)
if(m==null){m=A.d([],q)
k.k(0,n,m)
n=m}else n=m
B.a.l(n,o)}for(l=1;l<=21;++l){s=k.h(0,l)
s=s==null?null:s.length===0
if(s!==!1)throw A.a(A.i("campaign schedule has no event for day "+l))}s=A.a0(t.N)
for(r=k.h(0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.l(0,r[p].b)
if(!s.q(0,"broadcast")||!s.q(0,"visitor"))throw A.a(A.i("day 1 schedule needs broadcast and visitor events"))
s=k.h(0,21)
s.toString
if(!B.a.P(s,new A.vo()))throw A.a(A.i("day 21 schedule needs an ending event"))}}
A.vo.prototype={
$1(a){return t.Dm.a(a).b==="ending"},
$S:134}
A.ck.prototype={}
A.up.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.uq.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.h(A.M("screenplay event "+a+" is invalid",null,null))
return s},
$S:26}
A.mn.prototype={}
A.mk.prototype={}
A.ml.prototype={}
A.mm.prototype={}
A.vs.prototype={
bk(){var s=0,r=A.aL(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bk=A.aM(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
l=null
s=A.e7().gb_().h(0,"dialogueSource")==="api"?6:7
break
case 6:q=9
s=12
return A.a6(A.av(A.b(A.b(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$bk)
case 12:k=a3
s=A.U(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a6(A.av(A.b(k.text()),f),$async$bk)
case 15:e=a1.ai(a3,null)
d=t.f
if(!d.b(e)||!J.aa(e.h(0,"schema"),"quarantine.dialogue.v1")||!d.b(e.h(0,"corpus"))||!d.b(e.h(0,"screenplay")))A.h(B.i6)
l=A.b_(e,f,t.z)
case 14:q=3
s=11
break
case 9:q=8
a=p.pop()
s=11
break
case 8:s=3
break
case 11:case 7:s=l!=null?16:18
break
case 16:m=B.f.a0(l.h(0,"corpus"),null)
n=B.f.a0(l.h(0,"screenplay"),null)
s=17
break
case 18:s=19
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/text.json")),t.m),$async$bk)
case 19:j=a3
s=20
return A.a6(A.av(A.b(j.text()),t.N),$async$bk)
case 20:m=a3
case 17:i=A.KT(m)
f=J.b5(i,"broadcasts")
f.toString
d=t.P
o.a=d.a(f)
f=J.b5(i,"visitors")
f.toString
o.b=d.a(f)
f=J.b5(i,"vocabulary")
f.toString
o.c=d.a(f)
f=J.b5(i,"documents")
f.toString
d.a(f)
f=J.b5(i,"street")
f.toString
d.a(f)
f=J.b5(i,"unverifiables")
f.toString
o.f=d.a(f)
f=J.b5(i,"nights")
f.toString
d.a(f)
f=J.b5(i,"endings")
f.toString
o.w=d.a(f)
f=J.b5(i,"records")
f.toString
o.x=d.a(f)
f=J.b5(i,"cues")
f.toString
d.a(f)
f=J.b5(i,"claims")
f.toString
o.z=d.a(f)
f=t.f
if(f.b(J.b5(i,"reactions"))){b=J.b5(i,"reactions")
if(b==null)b=f.a(b)
b=A.b_(b,t.N,t.z)}else b=A.m(t.N,t.z)
o.Q=d.a(b)
if(f.b(J.b5(i,"variants"))){b=J.b5(i,"variants")
if(b==null)b=f.a(b)
b=A.b_(b,t.N,t.z)}else b=A.m(t.N,t.z)
o.as=d.a(b)
if(f.b(J.b5(i,"residues"))){b=J.b5(i,"residues")
f=b==null?f.a(b):b
f=A.b_(f,t.N,t.z)}else f=A.m(t.N,t.z)
o.at=d.a(f)
s=n==null?21:23
break
case 21:s=24
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/story_script.json")),t.m),$async$bk)
case 24:s=22
break
case 23:a3=null
case 22:h=a3
if(n==null){f=h
f=(f==null?null:A.U(f.ok))===!0}else f=!0
s=f?25:26
break
case 25:f=n
a1=A
s=f==null?27:29
break
case 27:s=30
return A.a6(A.av(A.b(h.text()),t.N),$async$bk)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.Hs(a3)
o.ax=f
f.q0()
f=o.ax
f.toString
o.ay=A.Gb(f)
case 26:q=1
s=5
break
case 3:q=2
a0=p.pop()
g=A.al(a0)
f=A.z(g)
throw A.a("Failed to load text.json: "+f)
s=5
break
case 2:s=1
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$bk,r)},
jn(a){var s,r,q,p=this.a
p===$&&A.u()
s=p.h(0,B.d.t(a))
if(t.f.b(s)){p=s.gN().dY(0,new A.vt())
r=p.$ti
q=t.N
return A.A8(new A.cX(p,r.i("P<f,f>(1)").a(new A.vu()),r.i("cX<1,P<f,f>>")),q,q)}return null},
fp(a,b){var s=this.jn(a)
return s==null?null:s.h(0,b)},
jr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.u()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.d([],t.kv)
for(o=J.N(q),n=t.N;o.m();){m=o.gp()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.m(n,n)
if(f.b(l))for(j=l.gN(),j=j.gA(j);j.m();){i=j.gp()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.v(i.b))}B.a.l(p,new A.fz(A.v(m.h(0,"id")),A.v(m.h(0,"label")),A.v(m.h(0,"reply")),A.aX(k,n,n)))}if(p.length<2)return g
return new A.mQ(r,a,b,c,d,A.ab(p,t.Y))},
jq(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.u()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.t(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.ah(p)||o!==B.b.ah(o))return n
return new A.fI(B.b.ah(p),B.b.ah(o))},
jp(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.u()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.t(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.ah(p)||typeof o!="string"||typeof n!="string")return m
return new A.fH(B.b.ah(p),o,n)},
q4(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.m(a5,t.ee),a7=A.m(a5,t.tQ),a8=A.m(a5,t.pG),a9=t.a,b0=A.m(a5,t.uh),b1=A.m(a5,t.sy),b2=A.m(a5,t.aS),b3=A.m(a5,a5),b4=a1.b
b4===$&&A.u()
b4=new A.O(b4,A.w(b4).i("O<1,2>")).gA(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.m(a3,a4)
for(o=o.gN(),o=o.gA(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.dY(l,null):null
if(k==null||!q.b(m.b))continue
j=A.m(a5,a5)
for(m=q.a(m.b).gN(),m=m.gA(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.v(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.m(a3,r)
for(m=n.$ti.i("bZ<1>"),l=new A.bZ(n,n.r,n.e,m);l.m();){i=l.d
g=a1.jq(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.m(a3,s)
for(m=new A.bZ(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jp(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.u()
b4=new A.ad(b4,b4.r,b4.e,A.w(b4).i("ad<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jr(A.v(d.h(0,"visitor")),B.b.ah(A.a_(d.h(0,"day"))),A.v(d.h(0,"tier")),B.b.ah(A.a_(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.u()
b4=new A.ad(b4,b4.r,b4.e,A.w(b4).i("ad<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.m(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gN(),s=s.gA(s);s.m();){r=s.gp()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.v(r.b))}s=A.v(d.h(0,"id"))
b2.k(0,s,new A.dy(s,A.v(d.h(0,"target")),A.v(d.h(0,a2)),A.aX(b,a5,a5)))}b4=a1.at
b4===$&&A.u()
b4=new A.O(b4,A.w(b4).i("O<1,2>")).gA(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.u()
b4=new A.O(b4,A.w(b4).i("O<1,2>")).gA(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.d([],s)
for(m=J.N(d);m.m();){a0=m.gp()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.jz(A.v(a0.h(0,"field")),A.v(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.vp(A.m(a3,a4),a6,a7,a8,A.m(a5,a9),A.m(a5,a9),A.m(a3,a9),A.m(a3,a9),A.m(a3,a9),A.m(a5,a9),A.m(a5,a9),A.m(a5,a9),b0,b1,b2,b3)}}
A.vt.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:136}
A.vu.prototype={
$1(a){t.AC.a(a)
return new A.P(A.v(a.a),A.v(a.b),t.q)},
$S:137}
A.kB.prototype={
c2(a,b,c){var s=B.c.aQ(a),r=B.c.aQ(c)
if(r.length===0)return""
if(b||this.a===B.ct)return s.length===0?r:s+": "+r
if(this.a===B.cs)return r
return s.length===0?r:s+": "+r},
iD(a,b){return this.c2(a,!1,b)}}
A.zX.prototype={}
A.d9.prototype={
C(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.en.prototype={
cu(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.en(q,p,o,n,m)},
nt(a){var s=null
return this.cu(s,s,s,a,s)},
nz(a){var s=null
return this.cu(s,s,s,s,a)},
np(a){var s=null
return this.cu(s,s,a,s,s)},
nn(a){var s=null
return this.cu(s,a,s,s,s)},
n4(a){var s=null
return this.cu(a,s,s,s,s)},
D(){var s=this,r=s.f
r=r==null?null:r.b
return A.E(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.od.prototype={
$1(a){return a==null?null:A.U(a)},
$S:138}
A.ob.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:45}
A.oc.prototype={
$0(){return A.h(B.j2)},
$S:7}
A.oo.prototype={
cf(a,b){var s,r=this,q=r.e.iD(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aN(q)
A.j(A.b(v.G.window).setTimeout(A.DD(new A.oq(r)),7000))},
aN(a){var s,r,q=this
if(!q.c||B.c.aQ(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.j(A.b(v.G.window).setTimeout(A.DD(new A.op(q,s)),4200))}}
A.oq.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:140}
A.op.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:17}
A.oF.prototype={
pz(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cQ.prototype={
C(){return"AudioOutputMode."+this.b}}
A.da.prototype={
C(){return"AudioDynamicRange."+this.b}}
A.dH.prototype={
C(){return"AudioReverbMode."+this.b}}
A.dG.prototype={
C(){return"AudioDuckingMode."+this.b}}
A.ep.prototype={
dl(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.ep(r,q,p,a==null?s.e:a)},
nl(a){return this.dl(null,null,a,null)},
nb(a){return this.dl(null,a,null,null)},
nr(a){return this.dl(null,null,null,a)},
na(a){return this.dl(a,null,null,null)},
D(){var s=this
return A.E(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.oP.prototype={
$1$2(a,b,c){return B.a.b7(c.i("t<0>").a(a),new A.oQ(b,c),new A.oR(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:141}
A.oQ.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oR.prototype={
$0(){return A.h(A.M("unsupported audio option: "+A.z(this.a),null,null))},
$S:7}
A.pj.prototype={
pW(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.V.iD(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.pm.prototype={
$1(a){return this.a.$0()},
$S:2}
A.pq.prototype={
$1(a){return this.a.$1(A.U(this.b.checked))},
$S:2}
A.pp.prototype={
$1(a){var s=A.fw(A.v(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.po.prototype={
$1(a){A.v(a)
return a.length!==0&&!B.c.X(a,"brush-state-")},
$S:3}
A.ew.prototype={
C(){return"BrushComponentKind."+this.b}}
A.ex.prototype={
C(){return"BrushComponentState."+this.b}}
A.br.prototype={
gmp(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
B(){var s=this
if(B.c.aQ(s.a).length===0||B.c.aQ(s.c).length===0)throw A.a(B.iN)
if(s.e===B.cE&&s.b!==B.cD)throw A.a(B.i3)}}
A.ps.prototype={
o4(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.n(a>=r+c?q.e=a-c+1:r,0,s)},
e_(a,b){if(b<=0){this.f=0
return}this.f=B.d.n(this.f+a,0,Math.max(0,b-1))},
bZ(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
f===$&&A.u()
f.save()
f.translate(a3,a4)
s=a2*0.5
r=e*0.5
q=-s
p=r*Math.tan(a1)
o=q+p
n=-r
m=new A.dn(o+c,n)
l=new A.dn(s+p,n)
k=s-p
j=new A.dn(k,r-c)
i=new A.dn(k-c,r)
h=new A.dn(q-p,r)
g=new A.dn(o,n+c)
if(a0){f.save()
f.fillStyle="rgba(0, 0, 0, 0.85)"
f.translate(6,8)
this.hd(A.d([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.hd(A.d([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aV(a,b,c,d,e,f,g,h,i){return this.bZ(a,b,c,d,e,!0,f,g,h,i)},
nR(a,b,c,d,e,f,g,h,i){return this.bZ(a,b,14,c,d,e,f,g,h,i)},
nW(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.u()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eY()
s.ck(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aD()-0.5)*8
l=s.aD()
k=s.aD()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
ih(a,b,c,d,e){var s,r,q=this.b
q===$&&A.u()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.hc(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.hc(0,0,c)
q.fill()
s=a?"#f5f0e6":"#c49a45"
q.strokeStyle=s
r=a?2.5:1.5
q.lineWidth=r
q.stroke()
q.fillStyle="#f5f0e6"
q.font="bold "+A.z(c*0.55)+'px "Cinzel", "Courier New", serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText(""+b,0,1)
q.restore()},
nU(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.u()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a_(A.b(q.measureText(a.toUpperCase())).width)+70)
this.aV("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
q.save()
q.translate(s-p*0.5+24,r)
q.rotate(-0.07)
q.fillStyle="#d32f2f"
q.fillRect(-12,-12,24,24)
q.fillStyle="#f5f0e6"
q.font='bold 11px "Cinzel", sans-serif'
q.textAlign="center"
q.textBaseline="middle"
q.fillText("E",0,1)
q.restore()
q.fillStyle="#f5f0e6"
q.font='bold 14px "Cinzel", serif'
q.textAlign="center"
q.textBaseline="middle"
q.shadowColor="rgba(0, 0, 0, 0.85)"
q.shadowBlur=4
q.fillText(a.toUpperCase(),s+12,r)
q.restore()},
nT(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aV(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.u()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a_(A.b(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.bZ(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gpO()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.mm(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.b8(i,0,new A.pt(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?174:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.b.aX((a5+a2-a1)/a2))
d1=d4.f
c7.o4(d1==null?0:d1,c,a6)
a7=Math.max(0,c-a6)
j=B.d.n(c7.e,0,a7)
c7.e=j
a8=Math.min(c,j+a6)
l.save()
l.beginPath()
j=a0*0.5
l.rect(p-j-12,a3-16,a0+24,Math.max(1,a5+20))
l.clip()
l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="bottom"
l.fillText("YOUR RESPONSE",p,a3-4)
l.restore()
for(a9=c7.e,g=a0-72,f=c7.d,c=a1*0.5,b0=d4.e;a9<a8;a9=b2){if(!(a9>=0&&a9<i.length))return A.e(i,a9)
b1=i[a9]
b2=a9+1
b3=a3+(a9-c7.e)*a2+c
b4=d1===a9
b5=b0===a9
b6=!b4
b7=p+(!b6||b5?18:0)
b8=b7-j
b9=Math.max(a1,40)
B.a.l(f,new A.hb("choice-"+b2,a9,b8,b3-b9*0.5,a0,b9))
if(b5)b9="#d32f2f"
else b9=b4?"#1a1820":c8
c0=!b6||b5?"#c49a45":c9
c7.aV(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.ih(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bF(b1,g),c1+22,b3)
l.restore()}l.restore()
if(a7>0){l.save()
l.fillStyle="#ffd54f"
l.font='bold 10px "Cinzel", serif'
l.textAlign="center"
l.textBaseline="middle"
if(c7.e>0)l.fillText("\u25b2 MORE",p+j-28,a3-8)
if(c7.e<a7)l.fillText("\u25bc MORE",p+j-28,a4+8)
l.restore()}}else if(d1&&d4.b.length!==0){c3=s?104:118
c4=s?28:30
c5=p+j-c3*0.62
c6=o+g-c4*0.72
B.a.l(c7.d,new A.hb("dialogue-continue",-1,c5-c3*0.5,c6-c4*0.5,c3,c4))
c7.aV("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
nX(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.Lq(a1,50,-30),f=a0<640||a<540,e=f?108:116,d=f?68:72,c=a0-e*0.5-24,b=f?122:126
this.aV("#f5f0e6",1.2,7,"rgba(12, 10, 14, 0.92)",d,-0.055,e,c,b)
s=isFinite(a1)?B.b.n(a1,-30,50):0
r=s>=0?"+":""
q=B.b.F(s,0)
p=e-22
o=c-p*0.5
n=b+10
m=this.b
m===$&&A.u()
m.save()
m.textAlign="center"
m.textBaseline="middle"
m.fillStyle="#c49a45"
m.font='bold 9px "Courier New", monospace'
m.fillText("AIR TEMPERATURE",c,b-21)
l=p/5
for(k=l+0.5,j=0;j<5;++j){m.fillStyle=B.lg[j]
m.fillRect(o+j*l,n,k,10)}m.strokeStyle="#f5f0e6"
m.lineWidth=1
m.strokeRect(o,n,p,10)
i=o+p*g
m.strokeStyle="#0c0a0e"
m.lineWidth=4
m.beginPath()
k=n-4
m.moveTo(i,k)
h=n+10+4
m.lineTo(i,h)
m.stroke()
m.strokeStyle="#f5f0e6"
m.lineWidth=1.5
m.beginPath()
m.moveTo(i,k)
m.lineTo(i,h)
m.stroke()
m.fillStyle="#f5f0e6"
m.font='bold 14px "Cinzel", serif'
m.fillText(r+q+"\xb0C",c,b+31)
m.fillStyle="#8c887e"
m.font='8px "Courier New", monospace'
q=b+24
m.fillText("-30",o+9,q)
m.fillText("50",o+p-8,q)
m.restore()},
nS(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t.sB.a(a4)
s=a4.length
if(s===0)return
r=a6<640
q=r?Math.min(2,s):s
p=r?8:12
o=r?8:0
n=r?Math.min(140,(a6-32-p)/q):140
for(m=n-18,l=a6*0.5,k=n*0.5,j=n+p,i=a5-32,h=B.d.bd(s+q-1,q)-1,g=28+o,f=0;f<s;++f){e=B.d.bd(f,q)
d=e*q
c=Math.min(q,s-d)
b=l-(c*n+(c-1)*p)*0.5+k+(f-d)*j
a=i-(h-e)*g
if(!(f<a4.length))return A.e(a4,f)
a0=a4[f]
a1=a0.c
a2=a1?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.bZ(a1?"#f5f0e6":"#c49a45",1.5,6,a2,28,a1,-0.04,n,b,a)
a2=this.b
a2===$&&A.u()
a2.save()
a3=a1?"#f5f0e6":"#c49a45"
a2.fillStyle=a3
a2.font='bold 11px "Courier New", monospace'
a2.textAlign="center"
a2.textBaseline="middle"
a2.fillText(this.bF("["+a0.a+"] "+a0.b,m),b,a)
a2.restore()}},
nV(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
if(d2<=0.001)return
s=Math.sin(d2*3.141592653589793*0.5)
r=Math.min(d4*0.92,860)
q=Math.min(d3*0.88,620)
p=d4+r*0.6
o=p+(d4*0.5-p)*s
n=d3*0.5
d2=c3.b
d2===$&&A.u()
d2.save()
d2.fillStyle="rgba(10, 8, 12, "+A.z(0.75*s)+")"
d2.fillRect(0,0,d4,d3)
c3.aV(c5,3,18,c4,q,-0.025,r,o,n)
c3.nW(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.aV(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
d2.save()
d2.fillStyle="#f5f0e6"
d2.font='bold 16px "Cinzel", serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.shadowColor="rgba(0, 0, 0, 0.85)"
d2.shadowBlur=4
d2.fillText("\u25c6 SHADER LAB & POST-PROCESSING SUITE \u25c6",o,k)
d2.restore()
j=r-60
i=j/6
h=l+75
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.ay[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.bZ(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
switch(f.a){case 0:c="[1] PBR BRDF"
break
case 1:c="[2] SHADOWS"
break
case 2:c="[3] DETAIL"
break
case 3:c="[4] POST / FOG"
break
case 4:c="[5] WEATHER"
break
case 5:c="[6] PASSES"
break
default:c=null}d2.save()
a=e?d0:c6
d2.fillStyle=a
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c,d,h)
d2.restore()}a0=h+36
if(d5.b===5){a1=r-80
a2=a0+70+20
c3.aV(c7,2.5,10,c8,140,-0.02,a1,o,a2)
d2.save()
d2.fillStyle="#c49a45"
d2.font='bold 14px "Cinzel", serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText("ACTIVE DIAGNOSTIC PASS (USE [A / D] OR [\u2190 / \u2192] TO CYCLE):",o,a2-35)
d2.fillStyle="#f5f0e6"
d2.font='bold 22px "Cinzel", serif'
d2.shadowColor="rgba(0, 0, 0, 0.85)"
d2.shadowBlur=6
d2.fillText(d5.e.gnO().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bF(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gby()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.b.aX((a5+52-44)/52))
a7=Math.max(0,a3.length-a6)
l=B.d.n(c3.f,0,a7)
c3.f=l
a8=Math.min(a3.length,l+a6)
d2.save()
d2.beginPath()
l=r*0.5
d2.rect(o-l+24,a0,r-48,a5)
d2.clip()
for(g=c3.f,a9=r-80,j=a9*0.5;g<a8;++g){if(!(g>=0&&g<a3.length))return A.e(a3,g)
b0=a3[g]
e=d5.c===g
b1=b0.Q===B.z
b2=a0+(g-c3.f)*52+22
b3=o+(e?12:0)
if(e)c=b1?c8:d0
else c=c4
b=e&&b1?c7:c9
c3.bZ(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.ih(!0,g+1,20,b3-j+20,b2)
d2.save()
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 14px "Cinzel", serif'
d2.textAlign="left"
d2.textBaseline="middle"
b4=e?38:18
c=b0.e
b=c?250:340
d2.fillText(c3.bF(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
b5=b3+j-20
b=c?110:265
a=b1?d1:c9
d2.fillStyle=a
d2.font='bold 9px "Courier New", monospace'
d2.textAlign="center"
b6=b1?"LIVE":"N/A"
d2.fillText(b6,b5-b,b2)
if(c){if(b0.Q===B.z){c=b0.ax
b7=c==null?b0.z:c}else b7=!1
c=b5-37
b=b1&&b7?c5:d0
c3.nR(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
d2.fillStyle="#f5f0e6"
d2.font='bold 12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(b0.geH(),c,b2)}else{b8=b5-80-80
d2.fillStyle="#0c0a0e"
c=b8-80
b=b2-4
d2.fillRect(c,b,160,8)
if(b1){b6=b0.f
b9=B.b.n((b0.y-b6)/(b0.r-b6),0,1)}else b9=0
if(b1)a=e?c7:c5
else a=c9
d2.fillStyle=a
b6=160*b9
d2.fillRect(c,b,b6,8)
if(b1){d2.fillStyle="#f5f0e6"
d2.fillRect(c+b6-3,b2-7,6,14)}d2.fillStyle="#8c887e"
d2.font='10px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(B.b.F(b0.f,1)+" ",c-4,b2)
d2.textAlign="left"
d2.fillText(" "+B.b.F(b0.r,1),b8+80+4,b2)
if(b1)a=e?d1:c6
else a=c9
d2.fillStyle=a
d2.font='bold 13px "Courier New", monospace'
d2.textAlign="right"
d2.textBaseline="middle"
d2.fillText(b0.geH(),b5,b2)}d2.restore()}d2.restore()
if(a7>0){d2.save()
d2.fillStyle="#ffd54f"
d2.font='bold 10px "Cinzel", serif'
d2.textAlign="right"
d2.textBaseline="middle"
if(c3.f>0)d2.fillText("\u25b2 SCROLL UP",o+l-28,a0-8)
if(c3.f<a7)d2.fillText("\u25bc SCROLL DOWN",o+l-28,a4+8)
d2.restore()}}c0=n+m-24
c1=d5.gbX()
if(d5.b===5)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.z)m="LIVE \u2022 REQUESTED "+c1.goc()+" \u2022 EFFECTIVE "+c1.geH()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.bF(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
hd(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.u()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
hc(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.u()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
mm(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a_(A.b(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bF(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.u()
s=A.a_(A.b(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.u()
p=A.a_(A.b(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.K(r,0,s-1)}return q?"...":r+"..."}}
A.pt.prototype={
$2(a,b){var s
A.ax(a)
A.v(b)
s=this.a.b
s===$&&A.u()
return Math.max(a,A.a_(A.b(s.measureText(b)).width))},
$S:142}
A.hg.prototype={
gmI(){var s,r,q,p,o=t.N
o=A.m(o,o)
for(s=this.r.gN(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
r=r.b
p=J.aN(r)
o.k(0,q,p.gM(r)?"":p.ga1(r))}return o},
bW(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
t.jd.a(a)
s=c==null?k.b:c
r=f==null?k.c:f
q=d==null?k.d:d
p=e==null?k.e:e
o=b==null?k.f:b
n=A.E(["version",k.a,j,s,i,r,"invertX",q,"invertY",p,"holdToInteract",o],t.N,t.K)
if(a!=null){s=n.h(0,"version")
s.toString
A.j(s)
r=n.h(0,j)
r.toString
A.ax(r)
q=n.h(0,i)
q.toString
A.ax(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
return A.hh(null,a,A.U(m),r,p,o,s,q)}s=n.h(0,"version")
s.toString
A.j(s)
r=n.h(0,j)
r.toString
A.ax(r)
q=n.h(0,i)
q.toString
A.ax(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gmI()
return A.hh(l,null,m,r,p,o,s,q)},
eC(a){var s=null
return this.bW(a,s,s,s,s,s)},
nh(a){var s=null
return this.bW(s,s,s,a,s,s)},
ni(a){var s=null
return this.bW(s,s,s,s,a,s)},
ne(a){var s=null
return this.bW(s,a,s,s,s,s)},
nf(a){var s=null
return this.bW(s,s,a,s,s,s)},
nA(a){var s=null
return this.bW(s,s,s,s,s,a)},
B(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.a(B.hF)
p=this.r
if(p.gN().P(0,new A.pG()))throw A.a(B.iV)
if(p.gN().P(0,new A.pH()))throw A.a(B.is)
p=p.gan()
o=A.w(p)
s=o.i("fh<t.E,f>")
r=s.i("F<t.E>")
q=A.J(new A.F(new A.fh(p,o.i("t<f>(t.E)").a(new A.pI()),s),s.i("l(t.E)").a(new A.pJ()),r),r.i("t.E"))
if(A.hw(q,A.C(q).c).a!==q.length)throw A.a(B.hK)},
D(){var s,r,q=this,p=t.N,o=A.m(p,t.a)
for(s=q.r.gN(),s=s.gA(s);s.m();){r=s.gp()
o.k(0,r.a,A.aG(r.b,!0,p))}return A.E(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.pG.prototype={
$1(a){t.yx.a(a)
return J.kz(a.b,new A.pF(a))},
$S:46}
A.pF.prototype={
$1(a){var s
A.v(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.BF(a)
else s=!1
return s},
$S:3}
A.pH.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.kz(a.b,B.es.gaH(B.es))},
$S:46}
A.pI.prototype={
$1(a){return t.a.a(a)},
$S:144}
A.pJ.prototype={
$1(a){return A.v(a).length!==0},
$S:3}
A.pE.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.ev.prototype={
C(){return"BindingCaptureStatus."+this.b}}
A.fd.prototype={
C(){return"BindingConflictResolution."+this.b}}
A.dI.prototype={}
A.l_.prototype={
cr(a){var s=this
if(!s.a.r.J(a))return new A.dI(B.cA,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.fg},
mW(a){var s,r,q,p=this,o=p.b
if(o==null)return B.b9
if(!A.BF(a)){p.c=p.b=null
return new A.dI(B.cC,B.eu.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gN()
r=r.gA(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gp()
s=q.a
if(s===o)break A
if(J.Bu(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dI(B.ba,a+" is already bound to "+s)}return p.kx(a)},
cP(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.b9
switch(a.a){case 2:m.c=m.e=m.d=null
return B.fh
case 1:s=A.Ay(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.AS(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.B6(r,k))
m.a=m.a.eC(s)
break
case 0:s=A.Ay(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga1(r)}r=A.d([k],t.s)
p=s.h(0,l)
p.toString
p=A.hP(p,1,null,A.C(p).c)
o=p.$ti
p=new A.an(p,p.gu(0),o.i("an<a1.E>"))
o=o.i("a1.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.B6(r,k)}else{r=s.h(0,j)
r.toString
r=A.AS(A.B6(r,k),q)}s.k(0,j,r)
m.a=m.a.eC(s)
break}m.c=m.e=m.d=null
return B.cy},
kx(a){var s,r,q=this,p=q.b
if(p==null)return B.b9
s=A.Ay(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.AS(r,a))
q.a=q.a.eC(s)
q.b=null
return B.cy}}
A.iy.prototype={
kg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.l_(f.w)
s=f.b
s.className=A.v(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.b(s.appendChild(A.pn(a,B.fq,1)))
A.b(s.appendChild(A.H(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.H(a,"div",c,e)
f.fP(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fP(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.e6(a,r,"invertX","Invert horizontal look")
f.e6(a,r,"invertY","Invert vertical look")
f.e6(a,r,"holdToInteract","Hold to interact")
A.b(s.appendChild(r))
q=A.H(a,"div",c,e)
for(p=B.mk.gN(),p=p.gA(p),o=f.Q;p.m();){n=p.gp()
m=n.a
l=A.hh(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.kA(l)?"unbound":J.Bw(l," / ")
j=A.b(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.b(a.createElement("span"))
i.textContent=n
A.b(j.appendChild(i))
h="change "+m+" binding"
g=A.ey(a,new A.br("settings.controls.bind."+m,B.cD,n,h,B.q),new A.pC(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.b(j.appendChild(g))
A.b(q.appendChild(j))
o.k(0,m,g)}A.b(s.appendChild(q))
p=A.H(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.b(s.appendChild(p))
p=A.H(a,"div","pause-actions",e)
f.at=p
A.b(s.appendChild(p))
f.ep()
A.b(s.appendChild(A.ey(a,B.fr,new A.pD(f),e)))},
iV(a){var s=this.x
s===$&&A.u()
if(s.b==null)return
a.preventDefault()
this.hg(this.x.mW(A.v(a.code)))},
hg(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.ba?B.fv:B.q
p=o.Q.h(0,r)
if(p!=null)A.zZ(p,q)}n=a.a
if(n===B.ba)o.m4()
else if(n===B.cB){n=o.x
n===$&&A.u()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.ep()}else{o.e9()
o.ax=null}},
m4(){var s,r,q,p,o
this.e9()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.kI[r]
p=A.G(s.ownerDocument)
p.toString
o=q.b
A.b(s.appendChild(A.ey(p,new A.br("settings.controls.resolve."+o,B.N,o,"resolve key binding conflict",B.q),new A.pB(this,q),null)))}},
e9(){var s,r=this.at
if(r==null)return
while(A.G(r.firstChild)!=null){s=A.G(r.firstChild)
s.toString
A.b(r.removeChild(s))}},
ep(){var s,r,q,p
for(s=this.Q,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.u()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.kA(p)?"unbound":J.Bw(p," / ")
r.textContent=q
A.zZ(r,B.q)}},
fP(a,b,c,d,e,f){var s,r=A.H(a,"label","setting-row",null)
A.b(r.appendChild(A.H(a,"span",null,d)))
s=A.Fz(a,new A.br("settings.controls."+c,B.ft,d,null,B.q),f,e,new A.pz(this,c),1)
A.b(r.appendChild(s))
A.b(b.appendChild(r))
this.y.k(0,c,s)},
e6(a,b,c,d){var s=A.H(a,"label","setting-toggle",null),r=A.FA(a,new A.br("settings.controls."+c,B.fu,d,null,B.q),!1,new A.pA(this,c))
A.b(s.appendChild(r))
A.b(s.appendChild(A.H(a,"span",null,d)))
A.b(b.appendChild(s))
this.z.k(0,c,r)},
he(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sf4(a){this.f=t.pf.a(a)},
sbm(a){this.r=t.Z.a(a)}}
A.pC.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.u()
s=n.cr(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cz){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.zZ(q,B.cE)}p.e9()
return null},
$S:0}
A.pD.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.pB.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.u()
return s.hg(r.cP(this.b))},
$S:0}
A.pz.prototype={
$1(a){var s=this.a,r=s.w
s.he(this.b==="horizontalSensitivity"?r.nf(a):r.nA(a))},
$S:218}
A.pA.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.nh(a)
break A}if("invertY"===q){s=r.w.ni(a)
break A}s=r.w.ne(a)
break A}r.he(s)},
$S:10}
A.pK.prototype={
kh(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.b(o.appendChild(A.H(s,"h1","journal-title","credits")))
r=A.H(s,"p","credits-body",null)
p.f!==$&&A.b9()
p.f=r
r.textContent="\u2014"
A.b(o.appendChild(r))
A.b(o.appendChild(A.H(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.H(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.pL(p)))
A.b(o.appendChild(q))}}
A.pL.prototype={
$1(a){return this.a.am()},
$S:2}
A.pS.prototype={
kj(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.H(a,o,"door-speaker",p)
q.b!==$&&A.b9()
q.b=s
r=A.H(a,o,"door-line",p)
q.c!==$&&A.b9()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(s))
A.b(n.appendChild(r))
r=A.H(a,o,"door-choice-status",p)
q.d!==$&&A.b9()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.b(n.appendChild(r))
r=A.H(a,o,"door-cite-list",p)
q.f!==$&&A.b9()
q.f=r
s=A.H(a,o,"door-cite-result",p)
q.r!==$&&A.b9()
q.r=s
A.b(n.appendChild(r))
A.b(n.appendChild(s))
s=A.H(a,"button","door-continue","continue")
q.e!==$&&A.b9()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.pT(q)))
A.b(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.pU(q,a)))
A.b(A.G(a.body).appendChild(n))},
fA(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.u()
s.textContent=a
s=r.c
s===$&&A.u()
s.textContent=B.V.c2("",!0,b)
s=r.d
s===$&&A.u()
s.textContent=A.BI(B.bt)
s=r.e
s===$&&A.u()
A.b(s.style).display="none"
s=r.f
s===$&&A.u()
s.textContent=""
s=r.r
s===$&&A.u()
s.textContent=""
s=r.a
s.className="door visible"
s.removeAttribute("hidden")},
fB(a,b){var s,r=this,q=r.c
q===$&&A.u()
q.textContent=B.V.c2("",!0,a)
q=r.d
q===$&&A.u()
q.textContent=""
q=r.e
q===$&&A.u()
q=A.b(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.u()
s.textContent=""},
jN(a){return this.fB(a,!1)},
jP(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.u()
s=A.b(s.style)
r=b==null?"none":""
s.display=r
r=A.d([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.u()
s.textContent=A.BI(r)},
fC(a,b){var s=this.c
s===$&&A.u()
s.textContent=B.V.c2("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.u()
s.textContent=""
s=this.e
s===$&&A.u()
A.b(s.style).display=""},
jM(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.u()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.r)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.b(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.Z(new A.pV(p,this)))
A.b(s.appendChild(n))}},
iM(){var s,r=this
r.y=!1
s=r.d
s===$&&A.u()
s.textContent=""
s=r.f
s===$&&A.u()
s.textContent=""
s=r.r
s===$&&A.u()
s.textContent=""
s=r.a
s.className="door"
s.setAttribute("hidden","")},
soP(a){this.w=t.Z.a(a)},
soO(a){this.x=t.vR.a(a)}}
A.pT.prototype={
$1(a){var s
A.b(a)
s=this.a.w
return s==null?null:s.$0()},
$S:48}
A.pU.prototype={
$1(a){var s,r,q,p,o,n,m
A.b(a)
s=this.a
if(!s.y||A.v(a.code)!=="Tab")return
r=A.d([],t.e)
q=s.e
q===$&&A.u()
if(A.v(A.b(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.u()
p=A.b(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.j(p.length);++o){n=A.G(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.G(this.b.activeElement)
if(A.U(a.shiftKey)){if(m===B.a.ga1(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gaa(r).focus()}}else if(m===B.a.gaa(r)||!B.a.q(r,m)){a.preventDefault()
B.a.ga1(r).focus()}},
$S:148}
A.pV.prototype={
$1(a){var s
A.b(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:48}
A.pY.prototype={
kk(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.H(s,"h1","journal-title",null)
o.f!==$&&A.b9()
o.f=r
q=A.H(s,"div","ending-copy",null)
o.r!==$&&A.b9()
o.r=q
A.b(n.appendChild(r))
A.b(n.appendChild(q))
p=A.H(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.pZ(o)))
A.b(n.appendChild(p))},
jO(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.u()
s.textContent=a.a.b
s=m.r
s===$&&A.u()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.b(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.b(s.appendChild(n))}m.c4()},
soT(a){this.w=t.Z.a(a)}}
A.pZ.prototype={
$1(a){var s=this.a
s.am()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.qs.prototype={
bN(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aG(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
R(a){var s=this
s.a=null
s.b=""
s.e=A.d([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
pV(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
og(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hZ()
return!0}return!1}if(a==="Space"){s=B.a.f_(l,new A.qt())
if(s!==-1){n.cW(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.O(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.O(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cW(q)
return!0}}if(B.c.X(a,"Digit")){p=A.dY(B.c.aR(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.X(a,"Numpad")){p=A.dY(B.c.aR(a,6),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else o=m
if(o!=null){n.cW(o)
return!0}return!1},
cW(a){var s,r,q=this
if(a<0||a>=q.e.length)return
q.f=a
s=q.y
if(s!=null){r=q.e
if(!(a>=0&&a<r.length))return A.e(r,a)
s.$2(a,r[a])}},
hZ(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
oh(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hZ()
return!0}this.cW(a.b)
return!0},
soN(a){this.y=t.dt.a(a)},
soS(a){this.z=t.Z.a(a)}}
A.qt.prototype={
$1(a){A.v(a)
return B.c.q(a.toLowerCase(),"silent")||B.c.q(a,"...")},
$S:3}
A.qu.prototype={}
A.dQ.prototype={
C(){return"GameplayInteractionMode."+this.b}}
A.dc.prototype={
C(){return"GameplayPromptDensity."+this.b}}
A.dd.prototype={
C(){return"GameplayTextPacing."+this.b}}
A.dR.prototype={
C(){return"GameplayJournalLayout."+this.b}}
A.dP.prototype={
C(){return"GameplayConfirmationLevel."+this.b}}
A.dS.prototype={
C(){return"GameplaySaveFeedback."+this.b}}
A.cw.prototype={
C(){return"GameplayFocusLossBehavior."+this.b}}
A.dO.prototype={
C(){return"GameplayClockFormat."+this.b}}
A.ho.prototype={
aU(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.A_(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
nw(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,s,a,s)},
nv(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,a,s,s)},
n7(a){var s=null
return this.aU(s,s,a,s,s,s,s,s,s,s,s)},
ng(a){var s=null
return this.aU(s,s,s,s,a,s,s,s,s,s,s)},
no(a){var s=null
return this.aU(s,s,s,s,s,s,a,s,s,s,s)},
nx(a){var s=null
return this.aU(s,s,s,s,s,s,s,s,s,s,a)},
nj(a){var s=null
return this.aU(s,s,s,s,s,a,s,s,s,s,s)},
n6(a){var s=null
return this.aU(s,a,s,s,s,s,s,s,s,s,s)},
ns(a){var s=null
return this.aU(s,s,s,s,s,s,s,a,s,s,s)},
n5(a){var s=null
return this.aU(a,s,s,s,s,s,s,s,s,s,s)},
nc(a){var s=null
return this.aU(s,s,s,a,s,s,s,s,s,s,s)},
D(){var s=this
return A.E(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.qv.prototype={
$1$2(a,b,c){var s
A.Eh(c,t.Ct,"T","call")
c.i("t<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.a(A.M("invalid gameplay setting: "+a,null,null))
return B.a.b7(b,new A.qw(s,c),new A.qx(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:149}
A.qw.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.qx.prototype={
$0(){return A.h(A.M("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cS.prototype={
C(){return"GraphicsPreset."+this.b}}
A.dT.prototype={
b4(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dT(s.a,r,q,p,o,n,m,l,k,j,i)},
eB(a){var s=null
return this.b4(a,s,s,s,s,s,s,s,s,s)},
ia(a){var s=null
return this.b4(s,s,a,s,s,s,s,s,s,s)},
ib(a){var s=null
return this.b4(s,s,s,s,s,s,a,s,s,s)},
nk(a){var s=null
return this.b4(s,s,s,s,a,s,s,s,s,s)},
nq(a){var s=null
return this.b4(s,s,s,s,s,s,s,a,s,s)},
nd(a){var s=null
return this.b4(s,s,s,a,s,s,s,s,s,s)},
ny(a){var s=null
return this.b4(s,s,s,s,s,s,s,s,s,a)},
nm(a){var s=null
return this.b4(s,s,s,s,s,a,s,s,s,s)},
n9(a){var s=null
return this.b4(s,a,s,s,s,s,s,s,s,s)},
nu(a){var s=null
return this.b4(s,s,s,s,s,s,s,s,a,s)},
B(){var s=this,r=null,q=s.c
if(!B.a.q(B.lL,q))throw A.a(A.M("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.kT,q))throw A.a(A.M("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.lR,q))throw A.a(A.M("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.lG,q))throw A.a(A.M("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.m1,q))throw A.a(A.M("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.lQ,q))throw A.a(A.M("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.lS,q))throw A.a(A.M("unsupported graphics shadow quality: "+q,r,r))},
D(){var s=this
return A.E(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.qJ.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:49}
A.qK.prototype={
$0(){return A.h(B.id)},
$S:7}
A.qL.prototype={
D(){return A.E(["version",1,"requested",this.a.D(),"effective",this.b.D()],t.N,t.K)}}
A.qB.prototype={}
A.qC.prototype={}
A.iJ.prototype={
kl(a){var s,r,q,p,o,n,m=this,l=null,k="settings-copy",j="setting-toggle",i="door-continue",h=m.b
h.setAttribute("aria-label","Graphics settings")
A.b(h.appendChild(A.H(a,"h1","journal-title","Graphics")))
A.b(h.appendChild(A.H(a,"p",k,"Choose a visual budget without changing simulation truth.")))
s=A.H(a,"div","settings-grid",l)
r=t.N
m.bp(a,s,"preset","quality preset",A.E(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
m.bp(a,s,"renderScale","render scale",A.E(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
m.bp(a,s,"frameTarget","frame target",A.E(["30","30 fps","60","60 fps","display","Display rate"],r,r))
m.bp(a,s,"antialiasing","anti-aliasing",A.E(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
m.bp(a,s,"textureQuality","texture quality",A.E(["high","High","medium","Medium","low","Low"],r,r))
m.bp(a,s,"outputEncoding","output encoding",A.E(["srgb","sRGB display","linear","Linear light"],r,r))
m.bp(a,s,"diagnosticLevel","renderer diagnostics",A.E(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
m.bp(a,s,"shadowQuality","shadow allocation",A.E(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.H(a,"label",j,l)
r=A.b(a.createElement("input"))
m.y=r
r.type="checkbox"
r=m.y
r.toString
r.addEventListener("change",A.Z(new A.qF(m)))
r=m.y
r.toString
A.b(q.appendChild(r))
A.b(q.appendChild(A.H(a,"span",l,"Dynamic resolution")))
A.b(s.appendChild(q))
p=A.H(a,"label",j,l)
r=A.b(a.createElement("input"))
m.z=r
r.type="checkbox"
r=m.z
r.toString
r.addEventListener("change",A.Z(new A.qG(m)))
r=m.z
r.toString
A.b(p.appendChild(r))
A.b(p.appendChild(A.H(a,"span",l,"Model package diagnostics (debug)")))
A.b(s.appendChild(p))
A.b(h.appendChild(s))
r=A.H(a,"p",k,l)
m.Q=r
r.setAttribute("aria-live","polite")
r=m.Q
r.toString
A.b(h.appendChild(r))
o=A.H(a,"button",i,"Load Optimized Defaults")
o.setAttribute("type","button")
o.id="settings.graphics.optimized-defaults"
o.setAttribute("aria-label","load optimized graphics defaults")
o.addEventListener("click",A.Z(new A.qH(m)))
A.b(h.appendChild(o))
n=A.H(a,"button",i,"back")
n.setAttribute("type","button")
n.id="settings.graphics.back"
n.setAttribute("aria-label","back to settings categories")
n.addEventListener("click",A.Z(new A.qI(m)))
A.b(h.appendChild(n))},
bp(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.H(a,"label","setting-row",null)
A.b(s.appendChild(A.H(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.O(e,A.w(e).i("O<1,2>")).gA(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.Z(new A.qE(this,r,c)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.x.k(0,c,r)},
ei(a){var s
a.B()
this.as=a
s=this.f
if(s!=null)s.$1(a)},
cY(a,b,c){var s,r,q=this
t.a.a(c)
q.as=a
s=q.x
r=s.h(0,"preset")
if(r!=null)r.value=a.b.b
r=s.h(0,"renderScale")
if(r!=null)r.value=a.c
r=s.h(0,"frameTarget")
if(r!=null)r.value=a.e
r=s.h(0,"antialiasing")
if(r!=null)r.value=a.f
r=s.h(0,"textureQuality")
if(r!=null)r.value=a.r
r=s.h(0,"outputEncoding")
if(r!=null)r.value=a.w
r=s.h(0,"diagnosticLevel")
if(r!=null)r.value=a.x
s=s.h(0,"shadowQuality")
if(s!=null)s.value=a.y
s=q.y
if(s!=null)s.checked=a.d
s=q.z
if(s!=null)s.checked=a.z
s=q.Q
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a_(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.Q
if(s!=null)s.textContent="effective graphics profile differs"}},
sf4(a){this.f=t.CA.a(a)},
soZ(a){this.r=t.Z.a(a)},
sbm(a){this.w=t.Z.a(a)}}
A.qF.prototype={
$1(a){var s=this.a
s.ei(s.as.ia(A.U(s.y.checked)))},
$S:1}
A.qG.prototype={
$1(a){var s=this.a
s.ei(s.as.nk(A.U(s.z.checked)))},
$S:1}
A.qH.prototype={
$1(a){var s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.qI.prototype={
$1(a){var s=this.a,r=s.w
if(r!=null)r.$0()
else s.am()},
$S:1}
A.qE.prototype={
$1(a){var s,r=A.v(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.as.ib(B.a.au(B.dE,new A.qD(r)))
break A}if("renderScale"===p){s=q.as.nq(r)
break A}if("frameTarget"===p){s=q.as.nd(r)
break A}if("antialiasing"===p){s=q.as.eB(r)
break A}if("textureQuality"===p){s=q.as.ny(r)
break A}if("outputEncoding"===p){s=q.as.nm(r)
break A}if("diagnosticLevel"===p){s=q.as.n9(r)
break A}if("shadowQuality"===p){s=q.as.nu(r)
break A}s=q.as
break A}q.ei(s)},
$S:1}
A.qD.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:49}
A.kC.prototype={
C(){return"ActiveGuiPanel."+this.b}}
A.cd.prototype={}
A.qM.prototype={
jm(a,b,c){if(c)return B.lb
if(b&&a!=null)return A.d([new A.cd("E","Examine "+a,!0),new A.cd("TAB","Journal",!1),new A.cd("CAPS","Shader Lab",!1)],t.sa)
return B.mf}}
A.qN.prototype={
km(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.b(p.appendChild(A.H(s,"h1","journal-title","house notes")))
A.b(p.appendChild(A.H(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.b(p.appendChild(A.H(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.H(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.qO(this)))
A.b(p.appendChild(r))}}
A.qO.prototype={
$1(a){return this.a.am()},
$S:2}
A.rs.prototype={
c4(){var s,r=this
r.ka()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fY(r.CW,s)
r.lS()
r.hA()},
kE(){var s,r=this,q=r.a,p=A.H(q,"div","page-turn",null),o=A.H(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.rt(r)))
s=A.H(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.ru(r)))
q=A.H(q,"span","right-day-label",null)
r.Q!==$&&A.b9()
r.Q=q
A.b(p.appendChild(o))
A.b(p.appendChild(q))
A.b(p.appendChild(s))
return p},
hQ(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fY(s.CW+a,r)
s.hA()},
fY(a,b){if(a<1)return 1
if(a>b)return b
return a},
lS(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.u()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.u()
s.textContent=""
for(s=l.w.fq(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=B.a.gaa(o.c).t(0)
m=A.b(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.Z(new A.rv(l,o,m)))
A.b(k.appendChild(m))}},
hA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.u()
s=t.U
r=A.d([],s)
for(q=j.f,p=q.b,o=A.w(p).i("ad<2>"),n=new A.ad(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Y(r,new A.rw())
j.hz(i,r)
i=j.Q
i===$&&A.u()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.u()
s=A.d([],s)
for(r=new A.ad(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Y(s,new A.rx())
j.hz(i,s)
k=B.b.n(q.f/4,0,1)
i=j.as
i===$&&A.u()
A.b(i.style).setProperty("width",B.b.F(k*100,1)+"%")},
hz(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.b(a.appendChild(this.l7(b[r])))},
l7(a){var s,r,q,p,o,n=A.H(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.b(n.appendChild(this.hl(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.hl(p,!1)
o.className=A.v(o.className)+" margin"
A.b(n.appendChild(o))}return n},
hl(a,b){var s=b?"hand-line struck":"hand-line",r=A.H(this.a,"div",s,a.t(0))
A.b(r.style).setProperty("--shake",B.b.t(a.b))
return r}}
A.rt.prototype={
$1(a){return this.a.hQ(-1)},
$S:2}
A.ru.prototype={
$1(a){return this.a.hQ(1)},
$S:2}
A.rv.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.rw.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:13}
A.rx.prototype={
$2(a,b){var s=t.g
return B.d.H(s.a(a).a,s.a(b).a)},
$S:13}
A.dn.prototype={}
A.hb.prototype={}
A.tn.prototype={
gpO(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.K(s,0,B.b.ah(B.b.n(r*q,0,r)))}}
A.j4.prototype={
b0(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.b(s.style).setProperty("--panel-fade","0.25s")
A.b(A.G(this.a.body).appendChild(s))},
c4(){var s,r,q,p,o=this,n=o.b
if(B.c.q(A.v(n.className),"open"))return
s=$.to
if(s!=null&&s!==o)s.am()
$.to=o
r=o.a
o.d=A.G(r.activeElement)
A.rp(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glI())
o.e=q
r.addEventListener("keydown",q)
p=A.DB(n)
if(p.length!==0)B.a.ga1(p).focus()
else n.focus()},
am(){var s,r,q=this,p=q.b
if(!B.c.q(A.v(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.to===q)$.to=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
iV(a){},
lJ(a){A.b(a)
this.iV(a)
if(A.U(a.defaultPrevented))return
if(A.v(a.code)==="Escape"){a.preventDefault()
this.am()
return}if(A.v(a.code)==="Tab")this.mc(a)},
mc(a){var s,r=A.DB(this.b)
if(r.length===0)return
s=A.G(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.ga1(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gaa(r).focus()}}else if(s===B.a.gaa(r)||!B.a.q(r,s)){a.preventDefault()
B.a.ga1(r).focus()}},
sba(a){this.c=t.Z.a(a)}}
A.bE.prototype={
C(){return"PauseReason."+this.b}}
A.cz.prototype={
C(){return"PausePage."+this.b}}
A.eK.prototype={
C(){return"PauseTransitionKind."+this.b}}
A.dW.prototype={
D(){var s,r=A.m(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
ab(a,b){if(b==null)return!1
return b instanceof A.dW&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gV(a){return A.cY(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.eJ.prototype={
gi3(){var s=this.a
return s.length===1&&B.a.ga1(s).a===B.bU},
D(){var s=A.m(t.N,t.X),r=this.a,q=A.C(r),p=q.i("I<1,V<f,L?>>")
r=A.J(new A.I(r,q.i("V<f,L?>(1)").a(new A.tt()),p),p.i("a1.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("I<1,f>")
r=A.J(new A.I(r,q.i("f(1)").a(new A.tu()),p),p.i("a1.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.tt.prototype={
$1(a){return t.oP.a(a).D()},
$S:151}
A.tu.prototype={
$1(a){return t.wJ.a(a).b},
$S:152}
A.ci.prototype={}
A.ts.prototype={
iW(a){var s,r=this
if(r.a.gi3())return new A.ci(B.ac,r.a,null)
s=r.a
s=new A.eJ(B.lJ,s.b,a)
r.a=s
return new A.ci(B.e9,s,"pause.resume")},
mD(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gaa(p)
q=r.a.a
q=B.a.ae(q,0,q.length-1)
p=r.a
p=new A.eJ(q,p.b,p.c)
r.a=p
return new A.ci(B.ea,p,s.c)}if(q.gi3()&&r.a.b.length===0)return r.cQ()
return new A.ci(B.ac,r.a,null)},
cQ(){var s=this.a
if(s.a.length===0)return new A.ci(B.ac,s,null)
if(s.b.length!==0)return new A.ci(B.ac,s,null)
this.a=B.bT
return new A.ci(B.eb,B.bT,s.c)},
pd(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.ci(B.ac,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.eJ(s.a,r,q.a.c)
q.a=s
return new A.ci(B.e9,s,null)},
nN(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.ci(B.ac,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("F<1>")
r=A.J(new A.F(r,q.i("l(1)").a(new A.tv(a)),p),p.i("t.E"))
q=o.a.c
r=new A.eJ(s.a,r,q)
o.a=r
return new A.ci(B.oh,r,q)},
l_(a){var s
switch(a.a){case 0:s="pause.resume"
break
case 1:s="settings.visual"
break
case 2:s="settings.visual.first"
break
case 3:s="settings.graphics.first"
break
case 4:s="settings.gameplay.first"
break
case 5:s="settings.controls.first"
break
case 6:s="settings.audio.first"
break
case 7:s="settings.accessibility.first"
break
case 8:s="credits.close"
break
case 9:s="help.close"
break
default:s=null}return s}}
A.tv.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:153}
A.cZ.prototype={
C(){return"PauseRootAction."+this.b}}
A.tw.prototype={
bC(a,b,c,d){var s=B.mz.h(0,c)
s.toString
A.b(b.appendChild(A.ey(a,new A.br(s,B.N,d,null,B.q),new A.tx(this,c),null)))},
sp8(a){this.f=t.Z.a(a)},
spa(a){this.r=t.Z.a(a)},
soQ(a){this.w=t.Z.a(a)},
sp9(a){this.x=t.Z.a(a)},
soW(a){this.y=t.Z.a(a)},
soR(a){this.z=t.Z.a(a)},
sbm(a){this.Q=t.Z.a(a)}}
A.tx.prototype={
$0(){var s,r=this
switch(r.b.a){case 0:s=r.a.f
if(s!=null)s.$0()
break
case 1:s=r.a.r
if(s!=null)s.$0()
break
case 2:s=r.a.w
if(s!=null)s.$0()
break
case 3:s=r.a.x
if(s!=null)s.$0()
break
case 4:s=r.a.y
if(s!=null)s.$0()
break
case 5:s=r.a.z
if(s!=null)s.$0()
break
case 6:s=r.a.Q
if(s!=null)s.$0()
break}},
$S:0}
A.c2.prototype={
C(){return"PauseSettingsCategory."+this.b}}
A.tW.prototype={
jL(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.V.c2("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.us.prototype={
kp(a){var s,r,q,p,o,n=this.b
n.className=A.v(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.b(n.appendChild(A.pn(a,B.fp,1)))
A.b(n.appendChild(A.H(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.H(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.lc[r]
p=B.dT.h(0,q)
p.toString
o=B.dS.h(0,q)
o.toString
A.b(s.appendChild(A.ey(a,new A.br(o,B.N,p,p+" settings",B.q),new A.ut(this,q),null)))}A.b(s.appendChild(A.ey(a,B.fo,new A.uu(this),null)))
A.b(n.appendChild(s))},
soM(a){this.f=t.hQ.a(a)},
sbm(a){this.r=t.Z.a(a)}}
A.ut.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.uu.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hL.prototype={
kq(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.z(B.dT.h(0,d))+" settings",a=h.b
a.className=A.v(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.b(a.appendChild(A.pn(a0,new A.br("settings."+(s==null?f:s)+".heading",B.aK,b,g,B.q),2)))
A.b(a.appendChild(A.H(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.H(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.uT(h)),p=B.a.gA(B.J),o=t.xG,q=new A.R(p,q,o);q.m();){n=p.gp()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.b(r.appendChild(h.lo(a0,m,l,n==null?1:n,k)))}A.b(a.appendChild(r))
j=A.H(a0,"div",e,g)
for(s=s.a(new A.uU(h)),q=B.a.gA(B.J),o=new A.R(q,s,o);o.m();)A.b(j.appendChild(h.mb(a0,q.gp())))
A.b(a.appendChild(j))
if(d===B.R)A.b(a.appendChild(h.kB(a0)))
if(d===B.S)A.b(a.appendChild(h.kA(a0)))
if(d===B.ab)A.b(a.appendChild(h.kC(a0)))
i=A.H(a0,"div",e,g)
for(s=t.pz.a(h.glg()),q=B.a.gA(B.lM),s=new A.R(q,s,t.rt);s.m();){p=q.gp()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.b(i.appendChild(A.ey(a0,new A.br("settings."+o+".reset."+n,B.N,"reset "+n,"restore "+n+" settings to defaults",B.q),new A.uV(h,p),g)))}s=c?g:d.b
A.b(i.appendChild(A.ey(a0,new A.br("settings."+(s==null?f:s)+".reset.all",B.N,"reset all settings","restore all settings to defaults",B.fw),new A.uW(h),g)))
A.b(a.appendChild(i))
d=c?g:d.b
A.b(a.appendChild(A.ey(a0,new A.br("settings."+(d==null?f:d)+".back",B.N,"return","return to settings categories",B.q),new A.uX(h),g)))},
kA(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.H(a,"div","settings-grid",j),f=k.e5(a,g,"reducedMotion","reduced motion (system default)"),e=k.e5(a,g,i,"photosensitivity-safe effects (system default)"),d=k.e5(a,g,"captions","non-speech captions"),c=A.H(a,"label",h,j)
A.b(c.appendChild(A.H(a,"span",j,"UI scale")))
s=A.b(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.uL(k,s)))
A.b(c.appendChild(s))
A.b(g.appendChild(c))
r=A.H(a,"label",h,j)
A.b(r.appendChild(A.H(a,"span",j,"screen-reader verbosity")))
q=A.b(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bE[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(q.appendChild(n))}q.addEventListener("change",A.Z(new A.uM(k,q)))
A.b(r.appendChild(q))
A.b(g.appendChild(r))
l=A.H(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.uN(k)))
A.b(g.appendChild(l))
k.ok.L(0,A.E(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
e5(a,b,c,d){var s=A.H(a,"label","setting-toggle",null),r=A.b(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.uv(this,r,c)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.H(a,"span",null,d)))
A.b(b.appendChild(s))
return r},
ft(a){var s,r
this.k4=a
s=this.ok
r=s.h(0,"reducedMotion")
if(r!=null)r.checked=a.b===!0
r=s.h(0,"photosensitivitySafe")
if(r!=null)r.checked=a.c===!0
r=s.h(0,"captions")
if(r!=null)r.checked=a.e===!0
s=s.h(0,"uiScale")
if(s!=null){r=a.d
s.value=B.b.t(r==null?1:r)}s=this.p1.h(0,"screenReaderVerbosity")
if(s!=null){r=a.f
s.value=(r==null?B.ap:r).b}},
kC(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.H(a,"div","settings-grid",l)
m.bo(a,g,"interactionMode","interaction mode",B.bD,t.bK)
m.bo(a,g,"promptDensity","prompt density",B.bG,t.dn)
m.bo(a,g,"textPacing","text pacing",B.bF,t.j_)
m.bo(a,g,"journalLayout","journal layout",B.by,t.gm)
m.bo(a,g,k,k,B.bs,t.aJ)
m.bo(a,g,"saveFeedback","save feedback",B.bz,t.mx)
m.bo(a,g,"focusLossBehavior","when the window loses focus",B.aT,t.x)
m.bo(a,g,"clockFormat","clock format",B.bv,t.vS)
s=A.H(a,j,i,l)
r=A.b(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.Z(new A.uO(m,r)))
A.b(s.appendChild(r))
A.b(s.appendChild(A.H(a,h,l,"contextual reminders")))
A.b(g.appendChild(s))
m.id=r
q=A.H(a,j,i,l)
p=A.b(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.Z(new A.uP(m,p)))
A.b(q.appendChild(p))
A.b(q.appendChild(A.H(a,h,l,"show daily objective")))
A.b(g.appendChild(q))
m.k1=p
o=A.H(a,j,i,l)
n=A.b(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.Z(new A.uQ(m,n)))
A.b(o.appendChild(n))
A.b(o.appendChild(A.H(a,h,l,"story mode (visitors and narrative time)")))
A.b(g.appendChild(o))
m.k2=n
return g},
bo(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Eh(f,t.Ct,"T","_addGameplaySelect")
f.i("K<0>").a(e)
s=A.H(a,"label","setting-row",null)
A.b(s.appendChild(A.H(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.b(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.b(r.appendChild(n))}r.addEventListener("change",A.Z(new A.uJ(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.go.k(0,c,r)},
jv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
i=j.b
h=j.a
A:{if("interactionMode"===h){g=k
break A}if("promptDensity"===h){g=l
break A}if("textPacing"===h){g=m
break A}if("journalLayout"===h){g=n
break A}if("confirmations"===h){g=o
break A}if("saveFeedback"===h){g=p
break A}if("focusLossBehavior"===h){g=q
break A}g=r
break A}i.value=g}s=f.id
if(s!=null)s.checked=a.x
s=f.k1
if(s!=null)s.checked=a.z
s=f.k2
if(s!=null)s.checked=a.Q},
kB(a){var s,r,q=this,p=A.H(a,"div","settings-grid",null),o=t.N,n=A.m(o,o)
for(s=0;s<4;++s){r=B.bC[s].b
n.k(0,r,r)}q.d_(a,p,"output","output",n)
n=A.m(o,o)
for(s=0;s<3;++s){r=B.bx[s].b
n.k(0,r,r)}q.d_(a,p,"dynamicRange","dynamic range",n)
n=A.m(o,o)
for(s=0;s<2;++s){r=B.bw[s].b
n.k(0,r,r)}q.d_(a,p,"reverb","room effect",n)
o=A.m(o,o)
for(s=0;s<2;++s){n=B.bu[s].b
o.k(0,n,n)}q.d_(a,p,"ducking","voice intelligibility",o)
return p},
d_(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.H(a,"label","setting-row",null)
A.b(s.appendChild(A.H(a,"span",null,d)))
r=A.b(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.O(e,A.w(e).i("O<1,2>")).gA(0);q.m();){p=q.d
p.toString
o=A.b(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.b(r.appendChild(o))}r.addEventListener("change",A.Z(new A.uA(this,c,r)))
A.b(s.appendChild(r))
A.b(b.appendChild(s))
this.p3.k(0,c,r)},
ju(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
hj(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.aa===r){s=a.c===B.b_
break A}if(B.S===r){s=a.c===B.ai
break A}if(B.R===r){s=a.c===B.M
break A}s=!1
break A}return s},
lh(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.aa===s){r=a===B.b_
break A}if(B.S===s){r=a===B.ai
break A}if(B.R===s){r=a===B.M
break A}r=!1
break A}return r},
mb(a,b){var s=this,r=A.H(a,"label","setting-toggle",null),q=A.b(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.uS(s,b,q)))
A.b(r.appendChild(q))
A.b(r.appendChild(A.H(a,"span",null,b.b)))
return r},
lo(a,b,c,d,e){var s,r,q=this,p=A.H(a,"label","setting-row",null),o=A.H(a,"span",null,c),n=A.b(a.createElement("input"))
n.type="range"
n.min=A.z(e)
n.max=A.z(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.H(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.uR(q,n,r,b)))
A.b(p.appendChild(o))
A.b(p.appendChild(n))
A.b(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.a5(e,d))
return p},
fw(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.oL
r=B.b.n(b,s.a,s.b)
q.value=B.b.t(r)
p.textContent=""+B.b.ap(r*100)+"%"},
soY(a){this.r=t.DI.a(a)},
sp0(a){this.w=t.xl.a(a)},
sp_(a){this.x=t.xl.a(a)},
soU(a){this.y=t.DI.a(a)},
soX(a){this.z=t.xl.a(a)},
spc(a){this.Q=t.xl.a(a)},
sp7(a){this.as=t.Ci.a(a)},
sp6(a){this.at=t.Z.a(a)},
sbm(a){this.ax=t.Z.a(a)},
soL(a){this.ay=t.kC.a(a)},
soV(a){this.ch=t.hq.a(a)},
soK(a){this.CW=t.Cv.a(a)},
sp5(a){this.cx=t.Z.a(a)}}
A.uT.prototype={
$1(a){t.gl.a(a)
return a.d===B.a1&&this.a.hj(a)},
$S:27}
A.uU.prototype={
$1(a){t.gl.a(a)
return a.d===B.aC&&this.a.hj(a)},
$S:27}
A.uV.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.uW.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.uX.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.am()},
$S:0}
A.uL.prototype={
$1(a){var s=this.a,r=s.k4,q=A.fw(A.v(this.b.value))
r=r.nz(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.uM.prototype={
$1(a){var s=this.a,r=s.k4.nt(B.a.au(B.bE,new A.uK(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.uK.prototype={
$1(a){return t.mq.a(a).b===A.v(this.a.value)},
$S:45}
A.uN.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.uv.prototype={
$1(a){var s,r=A.U(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.np(r)
break A}if("photosensitivitySafe"===p){s=q.k4.nn(r)
break A}if("captions"===p){s=q.k4.n4(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.uO.prototype={
$1(a){var s=this.a,r=s.k3.n7(A.U(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.uP.prototype={
$1(a){var s=this.a,r=s.k3.nv(A.U(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.uQ.prototype={
$1(a){var s=this.a,r=s.k3.nw(A.U(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.uJ.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.ng(B.a.au(B.bD,new A.uB(r.c)))
break A}if("promptDensity"===p){s=q.k3.no(B.a.au(B.bG,new A.uC(r.c)))
break A}if("textPacing"===p){s=q.k3.nx(B.a.au(B.bF,new A.uD(r.c)))
break A}if("journalLayout"===p){s=q.k3.nj(B.a.au(B.by,new A.uE(r.c)))
break A}if("confirmations"===p){s=q.k3.n6(B.a.au(B.bs,new A.uF(r.c)))
break A}if("saveFeedback"===p){s=q.k3.ns(B.a.au(B.bz,new A.uG(r.c)))
break A}if("clockFormat"===p){s=q.k3.n5(B.a.au(B.bv,new A.uH(r.c)))
break A}s=q.k3.nc(B.a.au(B.aT,new A.uI(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.uB.prototype={
$1(a){return t.bK.a(a).b===A.v(this.a.value)},
$S:156}
A.uC.prototype={
$1(a){return t.dn.a(a).b===A.v(this.a.value)},
$S:157}
A.uD.prototype={
$1(a){return t.j_.a(a).b===A.v(this.a.value)},
$S:158}
A.uE.prototype={
$1(a){return t.gm.a(a).b===A.v(this.a.value)},
$S:159}
A.uF.prototype={
$1(a){return t.aJ.a(a).b===A.v(this.a.value)},
$S:160}
A.uG.prototype={
$1(a){return t.mx.a(a).b===A.v(this.a.value)},
$S:161}
A.uH.prototype={
$1(a){return t.vS.a(a).b===A.v(this.a.value)},
$S:162}
A.uI.prototype={
$1(a){return t.x.a(a).b===A.v(this.a.value)},
$S:51}
A.uA.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.nl(B.a.au(B.bC,new A.uw(r.c)))
break A}if("dynamicRange"===o){s=p.nb(B.a.au(B.bx,new A.ux(r.c)))
break A}if("reverb"===o){s=p.nr(B.a.au(B.bw,new A.uy(r.c)))
break A}s=p.na(B.a.au(B.bu,new A.uz(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.uw.prototype={
$1(a){return t.xs.a(a).b===A.v(this.a.value)},
$S:164}
A.ux.prototype={
$1(a){return t.EL.a(a).b===A.v(this.a.value)},
$S:165}
A.uy.prototype={
$1(a){return t.gc.a(a).b===A.v(this.a.value)},
$S:166}
A.uz.prototype={
$1(a){return t.ul.a(a).b===A.v(this.a.value)},
$S:167}
A.uS.prototype={
$1(a){var s,r=this
switch(r.b.a){case"muted":s=r.a.w
if(s!=null)s.$1(A.U(r.c.checked))
break
case"mono":s=r.a.x
if(s!=null)s.$1(A.U(r.c.checked))
break
case"high-contrast":s=r.a.z
if(s!=null)s.$1(A.U(r.c.checked))
break
case"strong-highlights":s=r.a.Q
if(s!=null)s.$1(A.U(r.c.checked))
break}},
$S:1}
A.uR.prototype={
$1(a){var s,r,q=this,p=A.fw(A.v(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.ap(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bP.prototype={
C(){return"SettingCategory."+this.b}}
A.jm.prototype={
C(){return"SettingKind."+this.b}}
A.bm.prototype={
cc(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.a(A.M(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.a(A.M(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bB(a))throw A.a(A.M(r.a+" must be boolean",q,q))
break}}}
A.v_.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:27}
A.v0.prototype={
$0(){return A.h(A.i("unknown setting: "+this.a))},
$S:7}
A.uY.prototype={
kr(a,b){var s,r=this.a
if(r!==1)throw A.a(A.p("unsupported settings version "+r,null))
for(r=this.b.gN(),r=r.gA(r);r.m();){s=r.gp()
A.uZ(s.a).cc(s.b)}},
cS(a){var s=this.b.h(0,a)
return s==null?A.h(A.i("setting missing from profile: "+a)):s},
D(){return A.E(["version",this.a,"values",this.b],t.N,t.K)}}
A.v1.prototype={
px(a){var s,r,q=A.hv(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.J[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.e2(q,1)
this.lV(a)},
D(){return A.E(["version",1,"requested",this.a.D(),"effective",this.b.D()],t.N,t.K)},
lV(a){var s,r,q=A.hv(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.J[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.e2(q,1)}}
A.vh.prototype={
ks(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
j.setAttribute("aria-label","Rest")
A.b(j.appendChild(A.H(a,"h2","journal-title","Rest")))
s=A.H(a,"p","consult-label","Sleeping is the only way to end the day.")
k.w!==$&&A.b9()
k.w=s
A.b(j.appendChild(s))
r=A.H(a,"div","entry-picker",null)
for(s=k.r,q=0;q<2;++q){p=B.dC[q]
for(o=p.b+" sleep \xb7 ",n=0;n<4;++n){m=B.dA[n]
l=A.b(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
J.el(s.c6(m,new A.vi()),l)
l.setAttribute("type","button")
l.addEventListener("click",A.Z(new A.vj(k,p,m)))
A.b(r.appendChild(l))}}A.b(j.appendChild(r))},
jw(a){var s,r,q=this.r.h(0,B.c9)
for(s=J.N(q==null?B.lo:q);s.m();){r=s.gp()
if(a){r.removeAttribute("disabled")
r.setAttribute("aria-disabled","false")}else{r.setAttribute("disabled","")
r.setAttribute("aria-disabled","true")}}s=this.w
s===$&&A.u()
r=a?"The living-room sofa is available for rest.":"Sleeping is the only way to end the day. Sofa rest is only available at home."
s.textContent=r},
spb(a){this.f=t.nf.a(a)}}
A.vi.prototype={
$0(){return A.d([],t.e)},
$S:168}
A.vj.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.am()},
$S:1}
A.cO.prototype={}
A.ol.prototype={
pN(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.I(s,r.i("f(1)").a(new A.on()),r.i("I<1,f>")).bc(0)
r=this.b
r.R(0)
s=J.Bx(a,t.N)
p=s.$ti
r.L(0,new A.F(s,p.i("l(t.E)").a(q.gaH(q)),p.i("F<t.E>")))},
nY(a,b){var s,r,q,p,o,n=A.d([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.on.prototype={
$1(a){return t.bC.a(a).a},
$S:169}
A.om.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.H(r,s):B.d.H(a.c,b.c)},
$S:170}
A.mN.prototype={
gcv(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.e(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
ox(a){return this.c.q(0,t.T.a(a))},
fb(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a5(0,g.gn3())||!a.a.a5(0,new A.vW(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.hm(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.b1){m=s.d
if(m<o.length){n=n===B.an
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.ar}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.e(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.P(l.f,new A.vX(s))
else k=!1
if(k)return!1
j=new A.mM(r,g,A.ab(o,t.AP),B.an)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.R(0)
g.L(0,a.a)
g=i.c
g.R(0)
g.L(0,h)
i.r=j
return!0},
i0(a){var s=this.a,r=A.w(s).i("af<1>"),q=r.i("F<t.E>")
s=A.J(new A.F(new A.af(s,r),r.i("l(t.E)").a(new A.vR(a)),q),q.i("t.E"))
B.a.Y(s,new A.vS())
return s},
cr(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.rx
s=m.a.h(0,a)
if(s==null)return B.ry
r=B.d.af(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.co:B.aH
o=p===B.aH&&m.x.q(0,q)&&s.J(B.cp)?B.cp:p
if(s.J(o))n=o
else n=s.J(B.aH)?B.aH:B.co
r=s.h(0,n)
r.toString
m.r=new A.mM(a,n,A.ab(m.hm(a,n,r),t.AP),B.an)
m.gcv()
r=m.r
r.toString
return new A.mL(r)},
mZ(a){var s,r,q,p,o,n=this.r
if(n==null)return B.eW
if(n.d!==B.an)return B.rv
n.e=a
s=a===B.ar
n.d=s?B.b1:B.aF
r=this.f
q=s?B.eU:B.rd
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.e8(q,o,p,a,null))
if(a===B.aP)B.a.l(r,new A.e8(B.rg,o,p,a,null))
if(s)this.hB(n)
return new A.mJ(n)},
mu(){var s,r=this.r
if(r==null)return B.eW
s=r.d
if(s!==B.aF&&s!==B.aG)return B.rw
if(this.gcv()!=null&&r.w==null)return new A.bz(new A.bI(B.ao,"The visitor is waiting for an answer."))
r.d=B.aG
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.b1
this.hB(r)
return new A.jy(r,!0)}return new A.jy(r,!1)},
n_(a){var s,r,q=this.r,p=this.gcv(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.aF&&o!==B.aG}if(o)return B.ru
o=p.f
s=A.C(o)
r=A.bM(new A.F(o,s.i("l(1)").a(new A.vU(a)),s.i("F<1>")),t.Y)
if(r==null)return B.rz
q.w=r.a
return new A.mK(q,p,r)},
n0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.aF&&s!==B.aG}else s=!0
if(s)return i
r=h.gbv()
if(r==null)return i
s=t.N
q=A.m(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.dH
p=J.N(p)
while(p.m()){o=p.gp()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aX(q,s,s)
m=c.lM(!0,!0,o,new A.wl(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.b2){B.a.l(this.f,new A.e8(B.rf,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.hv(B.a.gaa(j.c).a,s,s)
s.L(0,q)
p.mr(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.eY)if(k===B.cr){s=n.b
s=s.ga9(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.e8(B.re,o,p.b,i,l))}}return m},
hB(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
hm(a,b,c){var s,r
t.cf.a(c)
s=A.d([],t.Fi)
for(r=J.N(c);r.m();)s.push(this.lp(a,b,r.gp()))
return s},
lp(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bM(new A.F(p,r.i("l(1)").a(new A.vP(this)),r.i("F<1>")),t.aS)}return s==null?c:new A.co(q,s.c,c.c)},
sk0(a){this.x=t.Q.a(a)}}
A.vW.prototype={
$1(a){var s=this.a.a
return new A.af(s,A.w(s).i("af<1>")).P(0,new A.vV(A.v(a)))},
$S:3}
A.vV.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:25}
A.vX.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:15}
A.vR.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:25}
A.vS.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.H(a.c,b.c)
return s!==0?s:B.d.H(a.d,b.d)},
$S:172}
A.vU.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.vT.prototype={
$0(){return A.d([],t.jV)},
$S:173}
A.vP.prototype={
$1(a){return t.aS.a(a).d.gN().a5(0,new A.vO(this.a))},
$S:174}
A.vO.prototype={
$1(a){t.q.a(a)
return this.a.y.aY(a.a,a.b)},
$S:175}
A.vQ.prototype={
$2(a,b){var s=t.AP
return B.d.H(s.a(a).a,s.a(b).a)},
$S:176}
A.mO.prototype={}
A.nk.prototype={}
A.z3.prototype={
$1(a){return B.c.X(A.v(a),"off.")},
$S:3}
A.bY.prototype={
C(){return"DoorChoice."+this.b}}
A.cm.prototype={
C(){return"VisitPhase."+this.b}}
A.cn.prototype={
C(){return"VisitTier."+this.b}}
A.eQ.prototype={
C(){return"VisitorFactKind."+this.b}}
A.e8.prototype={
D(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q}}
A.dx.prototype={
C(){return"VisitorIssueCode."+this.b}}
A.bI.prototype={
ab(a,b){if(b==null)return!1
return b instanceof A.bI&&b.a===this.a&&b.b===this.b},
gV(a){return A.cY(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.co.prototype={
ab(a,b){if(b==null)return!1
return b instanceof A.co&&b.a===this.a&&b.b===this.b},
gV(a){return A.cY(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.c9.prototype={
ab(a,b){var s=this
if(b==null)return!1
return b instanceof A.c9&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gV(a){var s=this
return A.cY(s.a,s.b,s.c,s.d,B.h,B.h)},
D(){var s=this
return A.E(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)}}
A.mP.prototype={
D(){var s,r,q,p=this.a
p=A.J(p,A.w(p).c)
B.a.a4(p)
s=this.b
r=A.w(s)
q=r.i("dL<1,V<f,@>>")
s=A.J(new A.dL(s,r.i("V<f,@>(1)").a(new A.vN()),q),q.i("t.E"))
r=this.c
return A.E(["contacted",p,"resolved",s,"active",r==null?null:r.D()],t.N,t.z)}}
A.vN.prototype={
$1(a){return t.T.a(a).D()},
$S:177}
A.kD.prototype={
D(){var s,r=this,q=A.m(t.N,t.z)
q.k(0,"arrival",r.a.D())
q.k(0,"tier",r.b.b)
q.k(0,"phase",r.c.b)
q.k(0,"lineIndex",r.d)
s=r.e
q.k(0,"choice",s==null?null:s.b)
q.k(0,"complianceMarked",r.f)
s=r.r
if(s!=null)q.k(0,"reactionChoiceId",s)
return q}}
A.oi.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:178}
A.oj.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:179}
A.ok.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:180}
A.mM.prototype={
gbv(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.vY.prototype={}
A.bz.prototype={}
A.mL.prototype={}
A.mJ.prototype={}
A.jy.prototype={}
A.mK.prototype={}
A.hW.prototype={}
A.nn.prototype={
gmU(){var s,r
if(!this.aK)return B.o
s=this.r
s===$&&A.u()
r=this.w
r===$&&A.u()
return B.fK.mV(s,r)},
god(){var s="shadowCaster",r=this.dH
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.iX(s).a+";shadowTriangles="+r.iX(s).b+";frameMs="+B.b.F(this.dI,3)},
giF(){var s=this.dH
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.dI<=100},
oo(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.j4()
l.r=k
k=l.w=B.cG.jt(k)
if(k.a===B.K)k=l.w=B.eg
q=l.b
p=l.c
s=new A.mx(q,p,q,p)
o=A.Ct(l.d.a)
l.e=o
try{o.iP(l.kU(k,q,p),s)}catch(n){r=A.al(n)
k=l.w
if(k===B.aA)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.z(r)
l.w=B.aA
k=A.Ct(l.d.a)
k.iP(B.pa,s)
l.e=k}k=l.e
k.cm()
m=A.Ha(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.cw=l.b
l.cz=l.c
l.h7()
l.o8=A.GN(!0,!0,!0)
l.il=new A.tF(A.m(t.N,t.S))
l.aK=!0},
dW(a,b){var s,r=this
if(a<=0||b<=0)throw A.a(A.p("Pixeldart surface size must be positive",null))
if(!r.aK){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cA!==a||r.cB!==b)r.cB=r.cA=null
s=r.e
s===$&&A.u()
s.cm()
new A.mx(a,b,a,b).B()
if(r.dm==null)r.dm=r.cl()},
cl(){var s=0,r=A.aL(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$cl=A.aM(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
case 6:i=n.cw
h=n.b
if(!(i!==h||n.cz!==n.c)){s=7
break}m=h
l=n.c
i=n.e
i===$&&A.u()
h=n.w
h===$&&A.u()
g=A.j(m)
s=8
return A.a6(A.ye(i,B.cJ.i8("auto","full","srgb",h,"auto","profile",A.j(l),g)),$async$cl)
case 8:n.cw=m
n.cz=l
n.cB=n.cA=null
A.kr()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.al(e)
i=n.w
i===$&&A.u()
n.x=i.a.b+" surface reconfigure failed: "+A.z(k)
n.cA=n.b
n.cB=n.c
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.dm=null
i=n.cA
h=n.b
j=i===h&&n.cB===n.c
if(!j)i=n.cw!==h||n.cz!==n.c
else i=!1
if(i)n.dm=n.cl()
s=o.pop()
break
case 5:return A.aJ(null,r)
case 1:return A.aI(p.at(-1),r)}})
return A.aK($async$cl,r)},
h4(a,b,c,d,e,f,g,h){return B.cJ.i8(d,e,f,a,g,h,c,b)},
kU(a,b,c){return this.h4(a,b,c,"auto","full","srgb","auto","profile")},
h7(){var s,r,q,p=this.w
p===$&&A.u()
s=p.a
A:{p=B.K===s
if(p){r=7
break A}if(B.T===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.T===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.h(A.p("hysteresisThreshold must be finite and >= 0",null))
this.fy=new A.rC(r,p,A.a0(q),A.a0(q),A.m(q,t.i))},
dj(a){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$dj=A.aM(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aK){s=1
break}switch(a.b.a){case 0:i=B.eg
break
case 2:i=B.aA
break
case 1:i=B.ef
break
case 3:i=n.w
i===$&&A.u()
break
default:i=null}m=i
i=n.w
i===$&&A.u()
l=i
k=n.h4(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.u()
s=7
return A.a6(A.ye(i,t.lg.a(k)),$async$dj)
case 7:n.w=t.xK.a(m)
n.h7()
n.cw=n.b
n.cz=n.c
n.x=null
A.kr()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.al(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.z(j)
A.kr()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$dj,r)},
mC(d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=this,d2=null,d3="wall-plaster",d4="grime",d5="renderer is not initialized",d6="resource library is disposed",d7="spare-room"
if(!d1.aK||d1.Q.length!==0)return
d1.dn=d8
s=d1.k2
r=d1.e
r===$&&A.u()
s.k(0,d3,r.gao().dU(8,"texture:wall-plaster",!0,256,B.ax,256))
s.k(0,d4,d1.e.gao().dU(8,"texture:grime",!0,512,B.ax,512))
for(q=0;q<2;++q){p=B.mg[q]
r=d1.e.w
if(r==null)r=A.h(A.i(d5))
s.k(0,p,r.dU(8,"texture:"+p,!0,256,B.ax,256))}for(q=0;q<3;++q){p=B.kF[q]
o=p==="glass"
r=d1.e.w
if(r==null)r=A.h(A.i(d5))
n=o?256:4096
m=o?256:4096
s.k(0,p,r.dU(8,"texture:"+p,!0,m,B.ax,n))}s.k(0,"skybox-main-atmosphere-v1",d1.e.gao().j6(8,"texture:skybox-main-atmosphere-v1",!0,2048,B.ax,4096,B.jC))
d1.eo()
d1.da()
d1.ry=d1.be(A.iT(s.h(0,d3),0.5,B.a5,0.2,0,!1,0,"quarantine-house-safe",0,1,d2,!0,1,0.48,0.44,0.46,1,1))
d1.lj()
for(r=d8.b,n=r.length,m=d1.ok,l=d1.k4,k=t.N,j=d1.rx,i=t.pw,q=0;q<r.length;r.length===n||(0,A.r)(r),++q){h=r[q]
g=A.m(k,i)
for(f=A.E(["wall",h.x,"floor",h.y,"ceiling",h.z],k,k),f=new A.cW(f,f.r,f.e,A.w(f).i("cW<1,2>")),e=h.a,d="quarantine-house-"+e+"-";f.m();){c=f.d
b=c.b
a=B.bH.h(0,b)
if(a==null)A.h(A.i("Unknown house surface material: "+b))
b=a.c
a0=c.a
a1=a.a
b=A.iT(s.h(0,a.b),0.5,B.a5,0.2,0,!1,0,d+a0+"-"+a1,0,1,d2,!0,a.d,(b&255)/255,(b>>>8&255)/255,(b>>>16&255)/255,1,1)
a1=d1.e.w
if(a1==null)a1=A.h(A.i(d5))
if(a1.x)A.h(A.i(d6))
b.B()
a2=a1.b.a.aI(b,d2)
a1.r.l(0,a2)
j.k(0,b.a,b)
g.k(0,a0,a2)}m.k(0,e,g)
f=g.h(0,"wall")
f.toString
l.k(0,e,f)}for(n=d1.p1,q=0;q<7;++q){a3=B.lj[q]
m=a3==="service"?s.h(0,d4):s.h(0,d3)
k=d1.ek(a3)
i=d1.ek(a3)
k=A.iT(m,0.5,B.a5,0.2,0,!1,0,"quarantine-inventory-"+a3,0,1,d2,!0,1,d1.ek(a3).c,i.b,k.a,1,1)
i=d1.e.w
m=i==null?A.h(A.i(d5)):i
if(m.x)A.h(A.i(d6))
k.B()
a2=m.b.a.aI(k,d2)
m.r.l(0,a2)
j.k(0,k.a,k)
n.k(0,a3,a2)}d1.da()
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.r)(r),++q){h=r[q]
if(B.et.q(0,h.a))continue
d1.lk(d8,h)}$.o.j().setAttribute("data-renderer-legacy-living-room-shell","removed")
$.o.j().setAttribute("data-renderer-canonical-room-shell","living-room")
d1.lP(d8)
$.o.j().setAttribute("data-renderer-house-model-scale",B.b.F(2.25,2))
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.r)(r),++q){h=r[q]
for(m=h.e,k=m.length,i=h.a,a4=0;a4<m.length;m.length===k||(0,A.r)(m),++a4){a5=m[a4]
f=B.er.q(0,i)
if(!f)continue
f=a5.c
e=a5.d
d1.fN(i,d1.hs(h,a5.b,f,f+a5.e,e,e+a5.f,7902632),new A.x_(a5))}}for(n=d8.c,m=n.length,k=d1.fx,i=d1.y,f=d8.e,q=0;e=n.length,q<e;n.length===m||(0,A.r)(n),++q){a6=n[q]
if(a6.at==null||a6.as)continue
h=f.h(0,a6.b)
if(h==null)continue
a7=d1.ha(d8,h,a6)
e=d1.e.w
if(e==null)e=A.h(A.i(d5))
d=a6.a
if(e.x)A.h(A.i(d6))
b=e.a
a7.B()
a2=b.b.aI(a7,"door-leaf:"+d)
a0=a2.a
b.c.k(0,a0,b.b3(a7))
e.f.l(0,a2)
B.a.l(i,a2)
e=h.a
b=l.h(0,e)
if(b==null){b=d1.ry
b.toString}a8=new A.aS(a2,b,B.u,0,B.C,B.A,!0,!0,0,d2)
b=d1.f
b===$&&A.u()
B.u.B()
a1=b.a
a9=a1.$ti
a1.a8(a9.c.a(a2))
a1=a1.b
if(!(a0>=0&&a0<a1.length))return A.e(a1,a0)
a7=a1[a0].c
a0=(a7==null?a9.y[1].a(a7):a7).d
a1=B.u.ak()
a0=a0.gaA()
a9=A.C(a0)
b0=A.bb(new A.I(a0,a9.i("B(1)").a(a1.gaF()),a9.i("I<1,B>")))
b1=b.b.bw(a8)
b.c.k(0,b1,new A.b3(b1,a8,b0))
k.k(0,d,new A.jR(d,e,b1,a2,a8))}for(q=0;q<n.length;n.length===e||(0,A.r)(n),++q){a6=n[q]
if(a6.as||a6.at!=null)continue
h=f.h(0,a6.b)
if(h==null)continue
m=h.a
d1.fN(m,d1.hs(h,a6.aW(m),a6.aO(m),a6.aO(m)+a6.w,0,a6.x,5915445),new A.x0(a6))}for(n=A.Ls(A.KL(d8)),m=n.length,k=d1.dy,f=d1.dx,e=d1.db,d=d1.k3,b=d1.fr,q=0;q<n.length;n.length===m||(0,A.r)(n),++q){b2=n[q]
a0=b2.b
b3=a0===4?d4:d3
a=b.h(0,a0)
if(a==null){a1=s.h(0,b3)
a9=d1.bP(a0)
b4=d1.bP(a0)
a9=A.iT(a1,0.5,B.a5,0.2,0,!0,0,"quarantine-house-exterior-slot-"+a0,0,1,d2,!0,1,d1.bP(a0).c,b4.b,a9.a,1,1)
b4=d1.e.w
a1=b4==null?A.h(A.i(d5)):b4
if(a1.x)A.h(A.i(d6))
a9.B()
a2=a1.b.a.aI(a9,d2)
a1.r.l(0,a2)
j.k(0,a9.a,a9)
b.k(0,a0,a2)
a=a2}a1=d1.e.w
if(a1==null)a1=A.h(A.i(d5))
a9=b2.c
b4=b2.a
a0=""+a0
if(a1.x)A.h(A.i(d6))
b5=a1.a
a9.B()
a2=b5.b.aI(a9,"exterior:"+b4+":slot-"+a0)
b6=a2.a
b5.c.k(0,b6,b5.b3(a9))
a1.f.l(0,a2)
B.a.l(i,a2)
b7=b4+":"+a0
d.k(0,b7,b3)
if(!B.aB.q(0,b4))A.h(A.p("unknown exterior cell: "+b4,d2))
b8=new A.aS(a2,a,B.u,-1,B.C,B.A,B.pM.q(0,b4),!0,0,d2)
k.k(0,b7,b4)
f.k(0,b7,b8)
a0=d1.f
a0===$&&A.u()
B.u.B()
a1=a0.a
a9=a1.$ti
a1.a8(a9.c.a(a2))
a1=a1.b
if(!(b6>=0&&b6<a1.length))return A.e(a1,b6)
a7=a1[b6].c
a1=(a7==null?a9.y[1].a(a7):a7).d
a9=B.u.ak()
a1=a1.gaA()
b4=A.C(a1)
b0=A.bb(new A.I(a1,b4.i("B(1)").a(a9.gaF()),b4.i("I<1,B>")))
b1=a0.b.bw(b8)
a0.c.k(0,b1,new A.b3(b1,b8,b0))
e.k(0,b7,b1)}$.kv()
b9=B.fN.mQ(d8)
if(!B.n.gM(b9)){c0=d1.aS(b9)
c1=b.h(0,4)
if(c1==null){s=s.h(0,d4)
n=d1.bP(4)
m=d1.bP(4)
c1=d1.be(A.iT(s,0.5,B.a5,0.2,0,!0,0,"quarantine-house-exterior-slot-4",0,1,d2,!0,1,d1.bP(4).c,m.b,n.a,1,1))
b.k(0,4,c1)}c2=d1.e.gao().bb(c0,"canonical:roof")
B.a.l(i,c2)
s=d1.f
s===$&&A.u()
B.a.l(d1.Q,s.ev(new A.aS(c2,c1,B.u,-1,B.C,B.A,!0,!0,0,d2)))}c3=B.fz.mM(d8)
if(!B.n.gM(c3)){c4=d1.aS(c3)
c5=d1.hn(d7)
c6=d1.e.gao().bb(c4,"canonical:attic")
B.a.l(i,c6)
s=d1.f
s===$&&A.u()
B.a.l(d1.Q,s.ev(new A.aS(c6,c5,B.u,-1,B.C,B.A,!0,!0,0,d2)))}c7=B.fx.jl(d8)
for(s=c7.length,n=d1.Q,q=0;q<c7.length;c7.length===s||(0,A.r)(c7),++q){c8=c7[q]
m=d1.e.w
if(m==null)m=A.h(A.i(d5))
k=d1.aS(c8.w)
if(m.x)A.h(A.i(d6))
j=m.a
k.B()
a2=j.b.aI(k,c8.a)
f=a2.a
j.c.k(0,f,j.b3(k))
m.f.l(0,a2)
B.a.l(i,a2)
c9=c8.b
a=l.h(0,c9==="attic"||c9==="roof"?d7:c9)
if(a==null){m=d1.ry
m.toString
a=m}m=c8.d
m=new A.eM(new A.B(m.a,m.b,m.c),A.hF(B.G,c8.e*3.141592653589793/180),c8.f.a)
a8=new A.aS(a2,a,m,-1,B.C,B.A,!0,!0,0,d2)
k=d1.f
k===$&&A.u()
m.B()
j=k.a
e=j.$ti
j.a8(e.c.a(a2))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
a7=j[f].c
j=(a7==null?e.y[1].a(a7):a7).d
m=m.ak()
j=j.gaA()
f=A.C(j)
b0=A.bb(new A.I(j,f.i("B(1)").a(m.gaF()),f.i("I<1,B>")))
b1=k.b.bw(a8)
k.c.k(0,b1,new A.b3(b1,a8,b0))
B.a.l(n,b1)}for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q){h=r[q]
if(h.e.length===0)continue
$.kv()
d0=A.HY(d8,h)
if(!B.n.gM(d0)){m=d1.e.w
if(m==null)m=A.h(A.i(d5))
k=d1.aS(d0)
j=h.a
if(m.x)A.h(A.i(d6))
f=m.a
k.B()
a2=f.b.aI(k,"window-joinery:"+j)
e=a2.a
f.c.k(0,e,f.b3(k))
m.f.l(0,a2)
B.a.l(i,a2)
j=l.h(0,j)
if(j==null){m=d1.ry
m.toString}else m=j
a8=new A.aS(a2,m,B.u,-1,B.C,B.A,!0,!0,0,d2)
m=d1.f
m===$&&A.u()
B.u.B()
k=m.a
j=k.$ti
k.a8(j.c.a(a2))
k=k.b
if(!(e>=0&&e<k.length))return A.e(k,e)
a7=k[e].c
k=(a7==null?j.y[1].a(a7):a7).d
j=B.u.ak()
k=k.gaA()
f=A.C(k)
b0=A.bb(new A.I(k,f.i("B(1)").a(j.gaF()),f.i("I<1,B>")))
b1=m.b.bw(a8)
m.c.k(0,b1,new A.b3(b1,a8,b0))
B.a.l(n,b1)}}$.o.j().setAttribute("data-house-canonical-architecture","active")},
fv(c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="renderer is not initialized",c1="resource library is disposed",c2="promoted model package is missing: ",c3="incomplete",c4=b8.ip=c5.c
b8.k1=A.ab(c5.e,t.fl)
if(!b8.aK)return
for(s=b8.p4,r=new A.ad(s,s.r,s.e,A.w(s).i("ad<2>"));r.m();)r.d.W()
s.R(0)
r=b8.R8
if(r!=null)r.b.R(0)
r=b8.RG
b8.R8=r==null?b9:new A.tL(new A.tG(r),A.m(t.N,t.K))
for(r=b8.ch,q=new A.O(r,A.w(r).i("O<1,2>")).gA(0),p=b8.CW;q.m();){o=q.d
o.toString
n=b8.f
n===$&&A.u()
m=o.b
n.b.aM(m)
n.c.a7(0,m)
l=p.h(0,o.a)
if(l!=null){o=b8.e
o===$&&A.u()
o=o.w
if(o==null)o=A.h(A.i(c0))
n=l.a
if(o.x)A.h(A.i(c1))
o.a.aM(n)
o.f.a7(0,n)}}r.R(0)
p.R(0)
b8.cy=null
q=b8.cx
B.a.R(q)
for(o=b8.k1,n=o.length,m=b8.p1,k=t.Cx,j=t.d,i=t.s3,h=b8.p3,g=!0,f=0;f<n;++f){e=o[f]
d=e.b
c=e.c
if(!A.DL(c,d,e.r))continue
b=b8.dn
a=b==null?b9:b.e.h(0,d)
if(a==null)continue
a0=c5.bU(c)
if(b8.R8!=null&&b8.RG.a.J(a0.a)){d=a0.a
b=b8.RG.a.h(0,d)
a1=(b==null?A.h(A.i(c2+d)):b).c
g=g&&b8.lN(a1.a.x,a0,e.f.c.a*c4)
d=e.f
b=d.a
a2=A.hF(B.G,d.b.b*3.141592653589793/180)
a3=b8.e
a3===$&&A.u()
a3=a3.w
if(a3==null)a3=A.h(A.i(c0))
a4=b8.f
a4===$&&A.u()
a5=a.d
a6=A.d([],j)
a7=A.d([],i)
a8=new A.hz(a1,h,a3,a4,new A.x3(b8,a0,a1),new A.eM(new A.B(a5.a+b.a*c4,a5.b+b.b*c4,a5.c+b.c*c4),a2,d.c.a*c4),-1,a6,a7)
a9=a8.kz("LOD0")
a8.x=a9.a
B.a.L(a6,a9.c)
B.a.L(a7,a9.b)
d=b8.R8
d.toString
b=k.a(new A.x4(a8))
a3=d.b
a4=e.a
if(a3.J(a4))A.h(A.i("presentation placement is already bound: "+a4))
c=c5.bU(c).a
if(d.a.a.a.h(0,c)==null)A.h(A.i(c2+c))
a3.k(0,a4,b.$1(new A.hD()))
s.k(0,a4,a8)
continue}d=b8.e
d===$&&A.u()
d=d.w
if(d==null)d=A.h(A.i(c0))
c=b8.ln(a0,e,c4)
b=e.a
if(d.x)A.h(A.i(c1))
a3=d.a
c.B()
b0=a3.b.aI(c,"inventory:"+b)
a4=b0.a
a3.c.k(0,a4,a3.b3(c))
d.f.l(0,b0)
d=e.f
c=d.a
a2=A.hF(B.G,d.b.b*3.141592653589793/180)
d=a0.b
a3=m.h(0,d)
if(a3==null){a3=m.h(0,"furniture")
a3.toString}a5=a.d
c=new A.eM(new A.B(a5.a+c.a*c4,a5.b+c.b*c4,a5.c+c.c*c4),a2,1)
l=new A.aS(b0,a3,c,-1,B.C,B.A,d!=="micro",!0,0,b9)
B.a.l(q,b0)
p.k(0,b,l)
d=b8.f
d===$&&A.u()
c.B()
a3=d.a
a5=a3.$ti
a3.a8(a5.c.a(b0))
a3=a3.b
if(!(a4>=0&&a4<a3.length))return A.e(a3,a4)
b1=a3[a4].c
a3=(b1==null?a5.y[1].a(b1):b1).d
c=c.ak()
a3=a3.gaA()
a4=A.C(a3)
b2=A.bb(new A.I(a3,a4.i("B(1)").a(c.gaF()),a4.i("I<1,B>")))
b3=d.b.bw(l)
d.c.k(0,b3,new A.b3(b3,l,b2))
r.k(0,b,b3)}b4=s.a
b5=r.a
$.o.j().setAttribute("data-renderer-inventory-items",""+(b5+b4))
c4=$.o.j()
r=b4===0?"proxy":"mixed"
c4.setAttribute("data-renderer-inventory-resolution",r)
$.o.j().setAttribute("data-renderer-inventory-proxy-count",""+b5)
$.o.j().setAttribute("data-renderer-inventory-promoted-count",""+b4)
$.o.j().setAttribute("data-renderer-promoted-material-policy","semantic-pbr-v1")
r=$.o.j()
c4=g?"pass":"mismatch"
r.setAttribute("data-renderer-promoted-bounds-alignment",c4)
b6=c5.pe("living-sofa")!=null
c4=b8.dn
r=c4==null
if((r?b9:c4.r)==="living-room")b7=(r?b9:c4.x)==="placement-living-sofa"&&s.J("placement-living-fbx-room")&&b6
else b7=!1
c4=$.o.j()
s=b7?"canonical-fbx-residence":c3
c4.setAttribute("data-house-playability",s)
s=b8.dn
s=s==null?b9:s.x
if(s==null)s=""
c4.setAttribute("data-house-rest-anchor",s)
s=b7?"sofa-rest-v1":c3
c4.setAttribute("data-house-interaction-contract",s)
s=b7?"game-house-lighting":c3
c4.setAttribute("data-house-thermal-authority",s)
s=b7?"game-fire-emitter":c3
c4.setAttribute("data-house-fire-authority",s)
c4.setAttribute("data-house-collision-authority","game-house")
c4.setAttribute("data-house-focus-authority","game-focus-resolver")
c4.setAttribute("data-house-save-restore-authority","game-session-save")
b8.lQ()},
lN(a,b,c){var s,r,q,p,o,n,m,l,k
t.dd.a(a)
s=a.length
if(s!==6||!isFinite(c)||c<=0)return!1
if(3>=s)return A.e(a,3)
r=a[3]
q=a[0]
if(4>=s)return A.e(a,4)
p=a[4]
o=a[1]
if(5>=s)return A.e(a,5)
n=[r-q,p-o,a[5]-a[2]]
o=b.r
p=o.b
o=o.a
m=[p.a-o.a,p.b-o.b,p.c-o.c]
for(l=0;l<3;++l){k=n[l]*c
if(!isFinite(k)||Math.abs(k-m[l])>0.05)return!1}return!0},
lO(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8+":"+a9,a6=a4.p2,a7=a6.h(0,a5)
if(a7!=null)return a7
s=a9.toLowerCase()
r=a8==="porcelain-mermaid"
q=B.c.q(s,"kaca")||B.c.q(s,"gelas")||B.c.q(s,"cermin")
p=B.c.q(s,"aluminium")||B.c.q(s,"kerangka")
o=B.c.q(s,"sofa")||B.c.q(s,"cusion")||B.c.q(s,"carpet")
n=B.c.q(s,"floor")||B.c.q(s,"lemari")||B.c.q(s,"meja")||B.c.q(s,"tiang")
m=B.c.q(s,"wall")||B.c.q(s,"roof")||B.c.q(s,"tegel")
l=B.c.q(s,"emmision")||B.c.q(s,"netflix")||s==="tv"
k=A.zP(a5.toLowerCase()," ","-")
if(r)j=a4.k2.h(0,"porcelain-albedo")
else if(q)j=a4.k2.h(0,"glass")
else if(m)j=a4.k2.h(0,"wall-plaster")
else j=n?a4.k2.h(0,"floor-linoleum"):null
i=r?a4.k2.h(0,"porcelain-normal"):null
h=r?0.72:1
if(q)g=0.78
else if(r)g=0.92
else g=p?0.72:1
if(q)f=0.88
else if(r)f=0.9
else f=p?0.75:1
if(q)e=0.98
else if(r)e=0.88
else e=p?0.78:1
if(r)d=0.22
else if(q)d=0.12
else if(p)d=0.28
else if(o)d=0.92
else d=n?0.48:0.68
c=p?0.82:0
if(r)b=0.74
else b=q?0.18:0
a=r?0.16:0.2
a0=l?0.72:0
a1=q?B.W:B.a5
a2=q?0.02:0.5
a3=a4.be(A.iT(j,a2,a1,a,b,q,a0,"quarantine-promoted-"+k,c,h,i,!l,d,e,f,g,1,1))
a6.k(0,a5,a3)
return a3},
lQ(){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.rq)
for(s=this.p4,s=new A.O(s,A.w(s).i("O<1,2>")).gA(0),r=t.N,q=t.K;s.m();){p=s.d
o=A.m(r,q)
o.k(0,"placementId",p.a)
n=p.b
m=n.x
l=m==null
k=n.z.length
j=n.y.length
m=l?null:m.b.length
if(m==null)m=0
o.L(0,new A.t2(n.a.a.b,"LOD0",!l,k,j,m).D())
i.push(o)}s=$.o.j()
o=i.length!==0
n=o&&B.a.a5(i,new A.wT())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a0(A.E(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
dO(a){var s=0,r=A.aL(t.H),q=this,p,o,n
var $async$dO=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=2
return A.a6(B.fM.cK(a,new A.x1(),new A.x2()),$async$dO)
case 2:n=c
q.RG=n
p=$.i5
if(p!=null)q.fv(p)
$.o.j().setAttribute("data-renderer-model-packages","validated")
$.o.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.o.j()
o=n.a.ga6()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aJ(null,r)}})
return A.aK($async$dO,r)},
jJ(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=c5.e,c4=c3.h(0,c6)
if(c4==null)return
s=c4.a
r=t.N
q=A.aQ([s],r)
for(p=c5.aP(s),o=J.N(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>"));p.m();){n=o.gp()
m=n.cL(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c3.h(0,m)!=null)q.l(0,m)}c3=A.J(q,q.$ti.c)
B.a.a4(c3)
l=B.a.a_(c3,"|")
if(c2.cy===l)return
c2.cy=l
for(c3=c2.ax,c3=new A.O(c3,A.w(c3).i("O<1,2>")).gA(0),s=c2.ay,p=t.h1,o=c2.at;c3.m();){k=c3.d
n=k.a
j=q.q(0,n)?-1:0
i=k.b
h=s.h(0,n)
h.toString
g=A.d([],p)
for(f=J.aN(i),e=0;e<f.gu(i);++e){if(!(e<h.length))return A.e(h,e)
d=c2.cp(h[e],j)
c=c2.f
c===$&&A.u()
b=f.h(i,e)
a=d.c
a.B()
a0=c.a
a1=a0.$ti
a2=a1.c.a(d.a)
a0.a8(a2)
a0=a0.b
a2=a2.a
if(!(a2>=0&&a2<a0.length))return A.e(a0,a2)
a3=a0[a2].c
a0=(a3==null?a1.y[1].a(a3):a3).d
a=a.ak()
a0=a0.gaA()
a1=A.C(a0)
a4=A.bb(new A.I(a0,a1.i("B(1)").a(a.gaF()),a1.i("I<1,B>")))
a1=c.b
a=a1.$ti
a.c.a(b)
a.y[1].a(d)
a1.a8(b)
a1=a1.b
a=b.a
if(!(a>=0&&a<a1.length))return A.e(a1,a)
a1[a].sb5(d)
c.c.k(0,b,new A.b3(b,d,a4))
B.a.l(g,d)}s.k(0,n,g)
if(g.length!==0)o.k(0,n,B.a.ga1(g))}for(c3=c2.id,s=c3.length,a5=0;a5<c3.length;c3.length===s||(0,A.r)(c3),++a5){a6=c3[a5]
j=q.q(0,a6.a)&&a6.d.$0()?-1:0
p=c2.f
p===$&&A.u()
o=a6.b
n=c2.cp(a6.c,j)
h=n.c
h.B()
f=p.a
c=f.$ti
b=c.c.a(n.a)
f.a8(b)
f=f.b
b=b.a
if(!(b>=0&&b<f.length))return A.e(f,b)
a3=f[b].c
f=(a3==null?c.y[1].a(a3):a3).d
h=h.ak()
f=f.gaA()
c=A.C(f)
a4=A.bb(new A.I(f,c.i("B(1)").a(h.gaF()),c.i("I<1,B>")))
c=p.b
h=c.$ti
h.c.a(o)
h.y[1].a(n)
c.a8(o)
c=c.b
h=o.a
if(!(h>=0&&h<c.length))return A.e(c,h)
c[h].sb5(n)
p.c.k(0,o,new A.b3(o,n,a4))}c3=c2.fx
s=A.w(c3).i("af<1>")
s=A.J(new A.af(c3,s),s.i("t.E"))
p=s.length
a5=0
for(;a5<s.length;s.length===p||(0,A.r)(s),++a5){a7=c3.h(0,s[a5])
o=a7.e
d=c2.cp(o,q.q(0,a7.b)?-1:0)
o=c2.f
o===$&&A.u()
n=a7.c
h=d.c
h.B()
f=o.a
c=f.$ti
b=c.c.a(d.a)
f.a8(b)
f=f.b
b=b.a
if(!(b>=0&&b<f.length))return A.e(f,b)
a3=f[b].c
f=(a3==null?c.y[1].a(a3):a3).d
h=h.ak()
f=f.gaA()
c=A.C(f)
a4=A.bb(new A.I(f,c.i("B(1)").a(h.gaF()),c.i("I<1,B>")))
c=o.b
h=c.$ti
h.c.a(n)
h.y[1].a(d)
c.a8(n)
c=c.b
h=n.a
if(!(h>=0&&h<c.length))return A.e(c,h)
c[h].sb5(d)
o.c.k(0,n,new A.b3(n,d,a4))
c3.k(0,a7.a,a7.n8(d))}for(c3=c2.k1,s=c3.length,p=c2.ch,o=c2.CW,n=c2.p4,a5=0;a5<s;++a5){a8=c3[a5]
h=a8.a
a9=p.h(0,h)
b0=o.h(0,h)
b1=n.h(0,h)
b2=q.q(0,a8.b)
if(b1!=null){b1.jI(b2?-1:0)
continue}if(a9==null||b0==null)continue
h=c2.f
h===$&&A.u()
f=c2.cp(b0,b2?-1:0)
c=f.c
c.B()
b=h.a
a=b.$ti
a0=a.c.a(f.a)
b.a8(a0)
b=b.b
a0=a0.a
if(!(a0>=0&&a0<b.length))return A.e(b,a0)
a3=b[a0].c
b=(a3==null?a.y[1].a(a3):a3).d
c=c.ak()
b=b.gaA()
a=A.C(b)
a4=A.bb(new A.I(b,a.i("B(1)").a(c.gaF()),a.i("I<1,B>")))
a=h.b
c=a.$ti
c.c.a(a9)
c.y[1].a(f)
a.a8(a9)
a=a.b
c=a9.a
if(!(c>=0&&c<a.length))return A.e(a,c)
a[c].sb5(f)
h.c.k(0,a9,new A.b3(a9,f,a4))}b3=new A.lg().mY(c6)
c3=$.o.j()
s=A.J(b3,A.w(b3).c)
B.a.a4(s)
c3.setAttribute("data-renderer-exterior-cells",B.a.a_(s,","))
c3=c2.dy
r=new A.lg().iC(new A.x7(c2),new A.af(c3,A.w(c3).i("af<1>")),b3,r)
b4=A.fq(r,r.$ti.i("t.E"))
c3=c2.dx
s=A.w(c3).i("af<1>")
s=A.J(new A.af(c3,s),s.i("t.E"))
r=s.length
p=c2.db
b5=0
b6=0
b7=0
a5=0
for(;a5<s.length;s.length===r||(0,A.r)(s),++a5){b8=s[a5]
b9=p.h(0,b8)
if(b9==null)continue
b0=c3.h(0,b8)
o=b0.r
if(o)++b7
c0=b4.q(0,b8)
if(c0)++b5
if(c0&&o)++b6
d=c2.cp(b0,c0?-1:0)
o=c2.f
o===$&&A.u()
n=d.c
n.B()
h=o.a
f=h.$ti
c=f.c.a(d.a)
h.a8(c)
h=h.b
c=c.a
if(!(c>=0&&c<h.length))return A.e(h,c)
a3=h[c].c
h=(a3==null?f.y[1].a(a3):a3).d
n=n.ak()
h=h.gaA()
f=A.C(h)
a4=A.bb(new A.I(h,f.i("B(1)").a(n.gaF()),f.i("I<1,B>")))
f=o.b
n=f.$ti
n.c.a(b9)
n.y[1].a(d)
f.a8(b9)
f=f.b
n=b9.a
if(!(n>=0&&n<f.length))return A.e(f,n)
f[n].sb5(d)
o.c.k(0,b9,new A.b3(b9,d,a4))
c3.k(0,b8,d)}$.o.j().setAttribute("data-renderer-exterior-items",""+b5+"/"+c3.a)
$.o.j().setAttribute("data-renderer-shadow-casters",""+b6+"/"+b7)
c3=A.w(b4)
s=c3.i("dL<1,f>")
c1=A.J(new A.dL(b4,c3.i("f(1)").a(new A.x8(c2)),s),s.i("t.E"))
B.a.a4(c1)
$.o.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a_(c1,","))},
dT(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="renderer is not initialized",b0="resource library is disposed"
if(!a8.aK)return
s=a8.ax.h(0,b2)
r=a8.ay
q=r.h(0,b2)
p=a8.z
o=p.h(0,b2)
n=b1.e.h(0,b2)
if(s==null||q==null||o==null||n==null)return
m=a8.hD(b1,n)
l=J.aN(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.d([],t.d)
j=A.d([],t.h1)
for(i=a8.y,h="room:"+b2+":",g=b1.y,f=0;f<3;++f){e=m[f]
d=a8.e
d===$&&A.u()
d=d.w
if(d==null)d=A.h(A.i(a9))
c=a8.aS(e.b)
b=g.b
if(d.x)A.h(A.i(b0))
a=d.a
c.B()
a0=a.b.aI(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.b3(c))
d.f.l(0,a0)
if(!(f<q.length))return A.e(q,f)
a1=q[f]
d=a1.c
a2=new A.aS(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
c=a8.f
c===$&&A.u()
a=l.h(s,f)
d.B()
a3=c.a
a4=a3.$ti
a3.a8(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.e(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.ak()
b=b.gaA()
a3=A.C(b)
a6=A.bb(new A.I(b,a3.i("B(1)").a(d.gaF()),a3.i("I<1,B>")))
a3=c.b
d=a3.$ti
d.c.a(a)
d.y[1].a(a2)
a3.a8(a)
a3=a3.b
d=a.a
if(!(d>=0&&d<a3.length))return A.e(a3,d)
a3[d].sb5(a2)
c.c.k(0,a,new A.b3(a,a2,a6))
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.e(o,f)
a7=o[f]
B.a.a7(i,a7)
B.a.l(i,a0)
a=a8.e.w
d=a==null?A.h(A.i(a9)):a
if(d.x)A.h(A.i(b0))
d.a.aM(a7)
d.f.a7(0,a7)}p.k(0,b2,k)
r.k(0,b2,j)
if(j.length!==0)a8.at.k(0,b2,B.a.ga1(j))
$.o.j().setAttribute("data-renderer-geometry-refreshes",""+(a8.im+1));++a8.im},
f7(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aK)return
s=k.fx
r=s.h(0,b)
q=a.f.h(0,b)
p=q==null
if(p)o=null
else{n=r==null?null:r.b
if(n==null)n=""
o=a.e.h(0,n)}if(r==null||p||o==null)return
p=k.e
p===$&&A.u()
m=p.gao().bb(k.ha(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.aS(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.u()
p.pY(r.c,l)
s.k(0,b,r.ic(l,m))
s=k.y
p=r.d
B.a.a7(s,p)
B.a.l(s,m)
k.e.gao().pt(p)},
jx(n9,o0,o1,o2,o3,o4,o5,o6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,n0,n1,n2=this,n3=null,n4="rain_override",n5="wetness_override",n6=A.aQ([o0],t.N),n7=n9.e,n8=n7.h(0,o0)
if(n8!=null)for(s=n8.a,r=n9.aP(s),q=J.N(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
o=p.cL(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&n7.h(0,o)!=null)n6.l(0,o)}n=new A.r1(n9).q3(n6,o1)
s=A.d([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.r)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.eR(l.a,l.x,l.w,q))}for(r=n2.k1,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&n6.q(0,k.b)){j=n7.h(0,k.b)
i=n2.ip
h=k.f.a
j=j.d
s.push(new A.eR(new A.c(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}n2.cC=A.ab(s,t.cZ)
s=o4.f
r=o4.e
g=new A.c(Math.cos(s)*r,0,Math.sin(s)*r)
q=A.d([],t.xn)
for(f=0;f<n.length;++f){p=n[f]
j=p.r
if(j>0)q.push(new A.lj("mantle-fire-"+f,p.a,j,g))}n2.eK=q
q=t.jC
e=A.d([],q)
d=A.d([],q)
for(q=o0==="living-room",f=0;f<n.length;++f){l=n[f]
p=l.f
c=p>0?1+Math.sin(n2.c0*12+f*1.7)*(p*0.08)+Math.sin(n2.c0*29.3+f*2.3)*(p*0.04):1
b=q&&f===0
p=l.e
a=b?Math.max(2.65,p*1.45)*c:p*c
a0=l.d
if(b)a0*=1.25
p=f===0
j=p?"spot":"point"
i=l.c
if(j!=="point"&&j!=="spot")A.h(A.a7(j,"type","must be point or spot"))
if(!isFinite(a)||a<0)A.h(A.a7(a,"intensity","must be finite and >= 0"))
if(!isFinite(a0)||a0<=0)A.h(A.a7(a0,"radius","must be finite and > 0"))
p=p?d:e
B.a.l(p,new A.bc(f,j,l.a,new A.c((i>>>16&255)/255,(i>>>8&255)/255,(i&255)/255),a,a0))}q=n2.fy
q===$&&A.u()
a1=q.pp(o1,e,d)
q=A.m(t.S,t.A_)
for(f=0;f<n.length;++f)q.k(0,f,n[f])
p=A.d([],t.Fk)
for(j=a1.a,i=j.length,m=0;m<j.length;j.length===i||(0,A.r)(j),++m){a2=j[m]
h=a2.a
a3=q.h(0,h).a
a4=a2.d
p.push(new A.m5(h,new A.B(a3.a,a3.b,a3.c),new A.aZ(a4.a,a4.b,a4.c),a2.e,a2.f))}j=A.d([],t.cv)
for(i=a1.c,h=i.length,m=0;m<i.length;i.length===h||(0,A.r)(i),++m){a2=i[m]
a3=a2.a
a4=q.h(0,a3)
a5=a4.a
a4=a4.b
a6=a2.d
j.push(new A.bQ(a3,new A.B(a5.a,a5.b,a5.c),new A.B(a4.a,a4.b,a4.c),new A.aZ(a6.a,a6.b,a6.c),a2.e,a2.f,1.05,1.4))}n2.kF(a1,++n2.go)
q=$.bU()
a7=q.I("time_override")
if(a7>=0)a8=B.b.n(a7,0,23.999)
else a8=o6
n2.iA=a8
a9=o4.c
i=o4.d
b0=B.b.O(B.b.O(a8,24)+24,24)
b1=B.b.n(a9,0,1)
b2=B.b.n(i,6,16)/2
b3=13-b2
b4=13+b2
h=b0>=b3
b5=h&&b0<=b4?Math.sin(3.141592653589793*((b0-b3)/(b4-b3)))*65:-18
if(b0<=b3)b6=0
else b6=b0>=b4?1:(b0-b3)/(b4-b3)
b7=b5*3.141592653589793/180
b8=(90+b6*180)*3.141592653589793/180
a3=Math.cos(b8)
a4=Math.cos(b7)
a5=B.b.n(Math.sin(b7),0,1)
a6=Math.sin(b8)
b9=Math.cos(b7)
a5=B.b.n(1-a5,0.1,0.9)
c0=b3-1.5
if(b0>=c0&&b0<b3){c1=(b0-c0)/1.5
A.cu(B.oU,B.ej,c1)
c2=A.cu(B.oW,B.bY,c1)
c3=A.cu(B.oQ,B.c_,c1)
c4=0.3+0.5*c1
c5=0.25+0.2*c1}else if(h&&b0<14){c2=B.bY
c3=B.c_
c4=0.85
c5=0.45}else if(b0>=14&&b0<b4){c1=(b0-14)/(b4-14)
A.cu(B.ej,B.ei,c1)
c2=A.cu(B.bY,B.en,c1)
c3=A.cu(B.c_,B.el,c1)
c4=0.85*(1-c1*0.35)
c5=0.45*(1-c1*0.25)}else if(b0>=b4&&b0<b4+1.5){c1=(b0-b4)/1.5
A.cu(B.ei,B.c0,c1)
c2=A.cu(B.en,B.aW,c1)
c3=A.cu(B.el,B.aX,c1)
c4=0.55*(1-c1*0.8)
c5=0.34*(1-c1*0.65)}else{h=b4+1.5
if(b0>=h&&b0<b4+3){c1=(b0-h)/1.5
A.cu(B.c0,B.c0,c1)
c2=A.cu(B.aW,B.aW,c1)
c3=A.cu(B.aX,B.aX,c1)
c4=0.11*(1-c1*0.25)
c5=0.16*(1-c1*0.15)}else{c2=B.aW
c3=B.aX
c4=0.15
c5=0.18}}if(b1>0){c6=A.cu(c3,B.p4,b1*0.7)
c4*=1-b1*0.35
c5*=1-b1*0.15}else c6=c3
c7=o5?1:0.15
c8=B.b.n(b1*0.75+B.b.n(0.3333333333333333,0,1)*0.25,0,1)
if(q.I(n4)>=0)a9=q.I(n4)
n2.xr=B.b.n(a9,0,1)
c9=q.I("cloud_coverage_override")
d0=B.b.n(c9>=0?c9:a9*0.92,0,1)
d1=q.bM("cloud_enable")&&d0>0.0001?B.b.n(q.I("cloud_density")*(0.55+d0*0.45),0,1):0
d2=r*0.28*B.b.n(q.I("cloud_speed"),0,2)
d3=B.d.ah(B.d.n(B.b.ap(q.I("cloud_samples")),4,24))
d4=q.I(n5)>=0?q.I(n5):c8
d5=B.b.n(q.I("weather_reflection_strength"),0,2)
n2.cG=B.b.n(d4*d5,0,1)
i=A.Hp(i)
h=a9*0.92
r=2+r*0.03
c0=B.b.n(0.68+a9*0.22,0,1)
new A.vk(a8,13,0.8988445647770796,i,h,a9,r,c0,1,0.0015,0.06).B()
d6=A.Cx(b0,13)*3.141592653589793/12
d7=Math.sin(0.8988445647770796)
d8=Math.cos(0.8988445647770796)
d9=d7*Math.sin(i)
e0=d8*Math.cos(i)
e1=d9+e0*Math.cos(d6)
e2=Math.asin(B.b.n(e1,-1,1))
e3=Math.cos(e2)
e4=Math.atan2(Math.sin(d6),Math.cos(d6)*d7-Math.tan(i)*d8)
e5=new A.B(Math.sin(e4)*e3,Math.sin(e2),Math.cos(e4)*e3).ga2()
if(Math.abs(e0)<1e-12)e6=e1>0?-2:2
else e6=(Math.sin(-0.014538592669112763)-d9)/e0
e7=e6>-1&&e6<1
e8=e7?Math.acos(e6)*12/3.141592653589793:0
e9=B.b.O(B.b.O(13-e8,24)+24,24)
f0=B.b.O(B.b.O(13+e8,24)+24,24)
i=!e7
f1=i&&e1>0
f2=A.Ho(e2,b0,f1,i&&!f1,13)
f3=r+h*3.5+a9*1.5
f4=A.Hm(Math.max(0,1.5707963267948966-e2))
r=B.b.n(Math.exp(-(0.0046416*f4*f3)),0,1)
d9=B.b.n(Math.exp(-(0.010846399999999999*f4*f3)),0,1)
e0=B.b.n(Math.exp(-(0.02648*f4*f3)),0,1)
f5=B.b.n(Math.exp(-(h*(2.2+a9*2))),0,1)
f6=A.Cy(-0.3141592653589793,0.10471975511965977,e2)
f7=A.Cy(-0.014538592669112763,0.03490658503988659,e2)
f8=Math.max(0,Math.sin(e2)+f7*0.018)
f9=r*0.2126+d9*0.7152+e0*0.0722
g0=Math.pow(f8,0.35)*f9*f5
g1=B.b.n(f8*f9,0,1)
g2=0.42*g1
g3=1-h
g4=0.055+g2*(0.55+0.45*g3)+f6*(0.028+0.018*g3)
g5=0.0015*(1+c0*1.6+a9*4+h*0.8)
c0=0.035+r*0.18+h*0.1
g3=0.045+d9*0.2+h*0.12
h=0.07+e0*0.24+h*0.16+f6*0.018
g6=new A.aZ(r,d9,e0)
if(!isFinite(b0)||!isFinite(e9)||!isFinite(f0)||!isFinite(e2)||!isFinite(f6)||!isFinite(f7)||!isFinite(e4)||!isFinite(g0)||!isFinite(g4)||!isFinite(g5)||!isFinite(0.06)||!e5.gU(0)||!new A.B(r,d9,e0).gU(0)||!g6.gU(0)||!new A.aZ(0.14+0.38*g1,0.16+g2,0.22+0.52*g1).gU(0)||!new A.aZ(c0,g3,h).gU(0))A.h(A.i("solar lighting state is not finite"))
if(e5.gbj()<0.999||e5.gbj()>1.001||g0<0||g4<0||g5<0||f5<0||f5>1||f6<0||f6>1||f7<0||f7>1)A.h(A.i("solar lighting state is out of bounds"))
new A.l9(e5,g6,g0).B()
i=$.o.j()
i.setAttribute("data-renderer-solar-phase",f2.b)
i.setAttribute("data-renderer-solar-sunrise-hours",B.b.F(e9,4))
i.setAttribute("data-renderer-solar-sunset-hours",B.b.F(f0,4))
i.setAttribute("data-renderer-solar-elevation-deg",B.b.F(e2*180/3.141592653589793,4))
i.setAttribute("data-renderer-solar-twilight-factor",B.b.F(f6,4))
i.setAttribute("data-renderer-solar-horizon-visibility",B.b.F(f7,4))
i.setAttribute("data-renderer-solar-horizon-blend",B.b.F(A.Cz(f7),4))
i.setAttribute("data-renderer-solar-transmittance",B.b.F(f5,4))
i=$.Br()
i.pX(0.0166,a9)
g7=i.z
g8=B.b.n(Math.sin(Math.max(0,e2))/Math.sin(1.1344640137963142),0,1)
g9=A.Cz(f7)
i=1-g9
h0=new A.B(e5.a*g9+-(a3*a4)*i,e5.b*g9+a5*i,e5.c*g9+-(a6*b9)*i).ga2()
a3=g7.a
h1=a3&&g7.giL()?new A.B(g7.f,g7.r,g7.w):h0
r=0.35+(r-0.35)*g9
d9=0.45+(d9-0.45)*g9
e0=0.65+(e0-0.65)*g9
h2=new A.aZ(r,d9,e0)
if(a3){a4=g7.b
h3=new A.aZ(r+g7.c*a4*2,d9+g7.d*a4*2,e0+g7.e*a4*2.5)}else h3=h2
h4=B.b.n(g7.gnQ(),0.12,2)
h5=B.b.n(q.I("weather_lightning_intensity"),0,2)
c4=(g0*g9+c4*i)*c7
if(a3)c4=c4*0.12+g7.b*4.5*h4*h5
r=$.o.j()
r.setAttribute("data-renderer-lightning-active",String(a3))
i=g7.x
r.setAttribute("data-renderer-lightning-source-distance-m",B.b.F(i,1))
r.setAttribute("data-renderer-lightning-distance-attenuation",B.b.F(h4,4))
a4=g7.f
a5=g7.r
a6=g7.w
r.setAttribute("data-renderer-lightning-source-direction",B.b.F(a4,3)+","+B.b.F(a5,3)+","+B.b.F(a6,3))
h6=q.bM("fog_enable")
h7=q.I("fog_density")
h8=q.I("fog_height_falloff")
h9=B.b.n(q.I("fog_distance_scale"),0.25,2)
i0=B.b.n(q.I("weather_fog_scattering"),0,2)
g5=h6?g5*B.b.n(h7/0.012,0,8)*i0:0
i1=h6?0.06*B.b.n(h8/0.6,0,8):0
i2=q.bM("volumetric_light_enable")?B.b.n(q.I("volumetric_shaft_intensity")/0.1,0,8):0
i3=B.d.n(B.b.ap(q.I("volumetric_precision")),4,24)
i4=B.b.n(q.I("volumetric_dust_density"),0,0.25)
i5=B.b.n(q.I("volumetric_scattering")+a9*0.1,-0.85,0.85)
i6=B.b.n(q.I("light_ambient_mult"),0,3)
i7=B.b.n(q.I("light_direct_mult"),0,3)
i8=B.b.n(q.I("normal_bump_strength"),0,2)
i9=B.b.n(q.I("pbr_roughness"),0,2)
j0=B.b.n(q.I("pbr_metallic"),0,2)
j1=B.b.n(q.I("pbr_specular"),0,3)
j2=B.b.n(q.I("shadow_bias"),0.0001,0.01)
j3=B.b.n((1+B.b.n(1-f5,0,1)*1.4+a9*0.25)/B.b.n(q.I("shadow_csm_hardness"),0.1,3),0,3)
n2.eR=g5
n2.iB=i1
r=A.d([],t.xL)
for(q=p.length,m=0;m<p.length;p.length===q||(0,A.r)(p),++m){l=p[m]
b9=l.c
d9=l.e
r.push(new A.cp("point:"+l.a,l.b,new A.B(b9.a,b9.b,b9.c),l.d,Math.max(0.25,d9),Math.max(4,d9*8)))}for(q=j.length,m=0;m<j.length;j.length===q||(0,A.r)(j),++m){l=j[m]
b9=l.d
d9=l.f
r.push(new A.cp("spot:"+l.a,l.b,new A.B(b9.a,b9.b,b9.c),l.e,Math.max(0.25,d9*0.25),Math.max(8,d9)))}for(q=A.eW(n6,n6.r,n6.$ti.c),b9=i2>0,d9=c4*f5,e0=h3.a,g2=h3.b,g6=h3.c,j4=q.$ti.c,j5=h1.a*0.8,j6=h1.b*0.8,j7=h1.c*0.8;q.m();){j8=q.d
j9=n7.h(0,j8==null?j4.a(j8):j8)
if(j9==null)continue
k0=n9.ac(j9)
for(j8=j9.e,k1=j8.length,k2=j9.d,k3=k2.a,k4=k2.b,k2=k2.c,k5=k0.a,k6=k0.c,m=0;m<j8.length;j8.length===k1||(0,A.r)(j8),++m){k7=j8[m]
if(!k7.w)continue
switch(k7.b.a){case 0:k8=new A.c(k7.c+k7.e*0.5,k7.d+k7.f*0.5,0)
break
case 2:k8=new A.c(k7.c+k7.e*0.5,k7.d+k7.f*0.5,k6)
break
case 1:k8=new A.c(k5,k7.d+k7.f*0.5,k7.c+k7.e*0.5)
break
case 3:k8=new A.c(0,k7.d+k7.f*0.5,k7.c+k7.e*0.5)
break
default:k8=n3}k9=k8.a
l0=k8.b
k8=k8.c
l1=b9?i2:1
l2=k7.r?0.4:1
l3=d9*l1*l2
if(l3>0.01)B.a.l(r,new A.cp("window-shaft:"+k7.a,new A.B(k3+k9-j5,k4+l0-j6,k2+k8-j7),new A.B(e0,g2,g6),l3*18,1.5,8))}}l4=n2.to
if(a3&&g7.giL()&&l4!=null){l5=new A.B(a4,a5,a6).ga2()
B.a.l(r,new A.cp("lightning:active",l4.d.S(0,l5.a3(0,i)),new A.B(g7.c,g7.d,g7.e),g7.b*12e4*h5,1000,Math.max(1100,i*1.25)))}l6=h6?g5+i4:0
if(l4==null)n7=n3
else{n7=l4.d
n7=A.HF(l4.e,Math.min(l4.r,64),n7,l6,r)}n2.io=n7
q=n7==null
l7=q?n3:n7.a
if(l7==null)l7=B.v
$.o.j().setAttribute("data-renderer-volumetric-medium-scattering",B.b.F(l6,6))
i=A.d([],t.E7)
f=0
for(;;){if(!(f<n2.cC.length&&f<4))break
i.push(new A.x5(n2,f,o4).$0());++f}if(!q){q=$.o.j()
q.setAttribute("data-renderer-volumetric-source-count",""+n7.c)
a3=n7.a
q.setAttribute("data-renderer-volumetric-source-radiance",B.b.F(a3.a,6)+","+B.b.F(a3.b,6)+","+B.b.F(a3.c,6))
n7=n7.b
q.setAttribute("data-renderer-volumetric-source-direction",B.b.F(n7.a,4)+","+B.b.F(n7.b,4)+","+B.b.F(n7.c,4))}l8=A.GK(o0,c2)
l9=l8.c
m0=l8.b
m1=l8.a
if(o0==="cellar"){l9=B.b.n(l9*0.82,0,1)
m0=B.b.n(m0*1.08,0,1)
m1=B.b.n(m1*0.94,0,1)}else if(o0==="attic"){l9=B.b.n(l9*0.88,0,1)
m0=B.b.n(m0*0.96,0,1)
m1=B.b.n(m1*1.16,0,1)}m2=Math.max(0.045,c5*(g8>0.001?g8:1)*c7+f6*(0.022+0.018*(1-a9)))
if(n2.eW==null){n2.eS=l9
n2.eT=m0
n2.eU=m1
n2.eV=m2
n2.eW=o0
a4=m2
a3=m1
q=m0
n7=l9}else{n7=n2.eS
n7=n2.eS=n7+(l9-n7)*0.12
q=n2.eT
q=n2.eT=q+(m0-q)*0.12
a3=n2.eU
a3=n2.eU=a3+(m1-a3)*0.12
a4=n2.eV
a4=n2.eV=a4+(m2-a4)*0.12
n2.eW=o0}a5=n2.k2.h(0,"skybox-main-atmosphere-v1")
a6=c2.c
b9=c2.b
d9=c2.a
j4=B.b.n(a6*1.18,0,1)
j5=B.b.n(b9*1.18,0,1)
j6=B.b.n(d9*1.18,0,1)
j7=B.b.n(c0*0.55,0,1)
j8=B.b.n(g3*0.55,0,1)
k1=B.b.n(h*0.55,0,1)
k2=Math.cos(s)
s=Math.sin(s)
k3=n2.c0
k4=$.bU()
k5=k4.I("cloud_detail")
k4=k4.I("cloud_silver_lining")
k6=c6.c
k8=l7.a
k9=B.b.n(k8,0,8)
l0=c6.b
l1=l7.b
l2=B.b.n(l1,0,8)
m3=c6.a
m4=l7.c
m5=B.b.n(m4,0,8)
m6=B.b.n(0.72+k6*0.28,0,1)
m7=B.b.n(0.76+l0*0.24,0,1)
m8=B.b.n(0.82+m3*0.18,0,1)
m9=B.b.n(0.22+a9*0.18,0,0.5)
if(!new A.aZ(a6,b9,d9).gU(0))A.h(A.p("skyColor must be finite",n3))
if(!h3.gU(0))A.h(A.p("keyLightColor must be finite",n3))
if(!new A.aZ(k8,l1,m4).gU(0))A.h(A.p("sourceRadiance must be finite",n3))
if(!isFinite(c4)||c4<0)A.h(A.p("keyLightIntensity must be finite and >= 0",n3))
if(k8<0||l1<0||m4<0)A.h(A.p("sourceRadiance channels must be >= 0",n3))
n0=B.b.n(c4*0.12,0,0.35)
n1=1-n0
n2.x1=new A.ll(B.kt,new A.aZ(k6*0.08+c0*0.035+k9*0.015,l0*0.08+g3*0.035+l2*0.015,m3*0.08+h*0.035+m5*0.015),1.5*h9/(1+a9*0.45),14*h9/(1+a9*0.16),i1,g5,new A.aZ(m6,m7,m8),i1,i4,i5,m9,i2,i3,j3,i6,i7,i8,i9,j0,j1,j2,new A.aZ(B.b.n(a6*n1+e0*n0+k8*0.02,0,1),B.b.n(b9*n1+g2*n0+l1*0.02,0,1),B.b.n(d9*n1+g6*n0+m4*0.02,0,1)),B.b.n(d5*0.42,0,1),0,new A.aZ(n7,q,a3),a4,new A.l9(h1,h3,c4),p,j,r,i,new A.vg("main-atmosphere-v1",a5,new A.aZ(a6,b9,d9),new A.aZ(j4,j5,j6),new A.aZ(j7,j8,k1),d0,d1,650,420,0.0012,k2*d2,s*d2,k3,k5,k4,d3))
k4=$.o.j()
k4.setAttribute("data-renderer-reflection-intensity",B.b.F(n2.x1.dy,4))
k4.setAttribute("data-renderer-reflection-confidence",B.d.F(n2.x1.fr,4))
k5=n2.x1.k4
n7=k5==null?n3:k5.a
if(n7==null)n7="none"
k4.setAttribute("data-renderer-skybox-asset",n7)
n7=n2.x1.k4
n7=n7==null?n3:n7.z
k4.setAttribute("data-renderer-sky-cloud-coverage",B.b.F(n7==null?0:n7,4))
n7=n2.x1.k4
n7=n7==null?n3:n7.Q
k4.setAttribute("data-renderer-sky-cloud-density",B.b.F(n7==null?0:n7,4))
n7=n2.x1.k4
n7=n7==null?n3:n7.db
k4.setAttribute("data-renderer-sky-cloud-samples",""+(n7==null?0:n7))
n7=n2.x1.k4
n7=n7==null?n3:n7.CW
k4.setAttribute("data-renderer-sky-cloud-phase",B.b.F(n7==null?0:n7,3))
k4.setAttribute("data-renderer-reflection-mode","environment-fallback")},
lW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="wetness_override",a7="fog_height_falloff",a8="fog_distance_scale",a9="post_affine_warp",b0="post_vertex_snap",b1="weather_particles_enable",b2="weather_particle_density",b3="weather_particle_size",b4="weather_snow_accumulation",b5="weather_fog_scattering",b6="weather_lightning_intensity",b7="weather_reflection_strength",b8="cloud_coverage_override",b9="cloud_silver_lining",c0="light_ambient_mult",c1="light_direct_mult",c2=null,c3="shadow_csm_hardness",c4=t.N,c5=A.aQ(["time_override","rain_override",a6,"fog_enable","fog_density",a7,a8,"post_exposure","post_vignette","post_film_grain",a9,b0,b1,b2,b3,b4,b5,b6,b7,"cloud_enable",b8,"cloud_density","cloud_detail","cloud_speed",b9,"cloud_samples",c0,c1],c4),c6=A.m(c4,c4),c7=$.bU().w
c7===$&&A.u()
s=0
for(;s<60;++s)c6.k(0,c7[s].a,"No resolved Pixeldart frame mapping is installed")
c7=new A.wY(a5,c5,c6)
c7.$2("ssao",B.lf)
c7.$2("shadows",B.m0)
c7.$2("shadows",B.lT)
c7.$2("volumetric",B.kz)
c7.$2("bloom",B.lV)
c7.$2("dof",B.lX)
c7.$2("grade",B.lW)
c7.$2("ps1",B.md)
c7.$2("vhs",B.lY)
c7=$.bU()
r=a5.iA
q=a5.xr
p=a5.cG
o=a5.eR
n=a5.iB
m=c7.I(a8)
l=a5.x2
k=c7.I(c3)
j=a5.x1
i=a5.x2
h=c7.I(b2)
g=c7.I(b3)
f=c7.I(b4)
e=c7.I(b5)
d=c7.I(b6)
c=c7.I(b7)
b=c7.I(b8)
a=a5.x1.k4
a0=a==null
a1=a0?c2:a.Q
if(a1==null)a1=0
a=a0?c2:a.cx
if(a==null)a=0
a0=c7.I("cloud_speed")
a2=a5.x1.k4
a3=a2==null
a4=a3?c2:a2.cy
if(a4==null)a4=0
a2=a3?c2:a2.db
if(a2==null)a2=4
a3=a5.x2
a3=A.E(["time_override",r,"rain_override",q,a6,p,"fog_density",o,a7,n,a8,m,"shadow_ao_intensity",l.c,c3,k,c0,j.ax,c1,j.ay,"pbr_roughness",j.CW,"pbr_metallic",j.cx,"pbr_specular",j.cy,"normal_bump_strength",j.ch,"shadow_bias",j.db,"volumetric_shaft_intensity",j.Q*0.1,"volumetric_precision",j.as,"volumetric_dust_density",j.x,"volumetric_scattering",j.y,"post_exposure",i.a,"post_bloom",i.b,"post_vignette",i.e,"post_film_grain",i.f,"post_dither",i.Q,"post_depth_of_field",i.d,"post_color_grade",i.as,a9,i.at,b0,i.ax,b2,h,b3,g,b4,f,b5,e,b6,d,b7,c,b8,b,"cloud_density",a1,"cloud_detail",a,"cloud_speed",a0,b9,a4,"cloud_samples",a2,"post_quantization_bits",a3.ay,"post_vhs_chroma",a3.ch,"post_vhs_noise",a3.cx],c4,t.i)
a2=a5.eR
a4=a5.x2
a0=a5.x1
a=c7.bM(b1)
a1=a5.x1.k4
r=a1==null?c2:a1.Q
c7.pG("No resolved debug attachments are exposed by the active Pixeldart profile",A.E(["fog_enable",a2>0,"shadow_ssdo_enable",a4.c>0,"volumetric_light_enable",a0.Q>0,b1,a,"cloud_enable",r!==0],c4,t.y),a3,c5,c6)
c6=$.Fa()
c6.mz(c7)
$.o.j().setAttribute("data-renderer-shader-overrides",B.f.a0(c6.a,c2))
$.o.j().setAttribute("data-renderer-shader-lab",B.f.a0(c7.nK(),c2))
$.o.j().setAttribute("data-renderer-shader-lab-document",B.f.a0(c7.fg(),c2))
$.o.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a0(A.Cv().fg(),c2))},
jF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this
t.xw.a(a)
s=J.A1(a.slice(0),A.C(a).c)
r=A.d([],t.A5)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p){o=s[p]
n=o.d
if(n>0){m=o.b
l=o.c
k=o.a
j=B.c.bi(k,":downpipe")?3.2:2.2
r.push(new A.lk(new A.B(m.a,m.b,m.c),new A.B(l.a,l.b,l.c),j,o.e,B.d.n(B.b.ap(2+n*20),2,6),B.c.gV(k)&2147483647))}}i.du=r
i.eM=B.b.n(b,0,1/0)
i.eN=B.b.n(c,0,1/0)
i.eO=B.b.n(d,0,1/0)
i.c_=B.b.n(B.a.b8(s,0,new A.x6(),t.i)*1.8,0,1)},
jK(a){var s,r,q,p=this
if(a==null){p.dG=p.dF=0
p.cG=p.c_
$.o.j().removeAttribute("data-renderer-weather-surface")
return}s=B.b.n($.bU().I("weather_snow_accumulation"),0,2)
p.dF=B.b.n(a.a/0.08*s,0,1)
p.dG=B.b.n(a.x,0,1)
r=a.b
p.cG=Math.max(B.b.n(r/0.0008,0,1),p.c_)
q=$.o.j()
q.setAttribute("data-renderer-weather-surface",B.f.a0(a.D(),null))
q.setAttribute("data-renderer-weather-snow-coverage",B.b.F(p.dF,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.F(p.dG,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.F(r,8))
q.setAttribute("data-renderer-weather-rain-flow-wetness",B.b.F(p.c_,4))},
lj(){var s,r,q,p,o,n,m,l=this
if(l.eP!=null||l.eQ!=null)return
s=new Float32Array(A.S(A.d([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=l.e
r===$&&A.u()
l.eP=r.gao().bb(l.aS(s),"weather:rain-particle")
l.eQ=l.be(B.mC)
q=new A.e3(new Float32Array(5376))
q.cO(new A.c(-0.035,0,0),new A.c(0.035,0,0),new A.c(0.035,-0.07,0),new A.c(-0.035,-0.07,0),14478335,0.78,!0)
l.iq=l.e.gao().bb(l.aS(B.n.ae(q.a,0,q.b)),"weather:snow-particle")
l.ir=l.be(B.mF)
p=new A.e3(new Float32Array(5376))
p.cO(new A.c(-0.025,0,0),new A.c(0.025,0,0),new A.c(0.025,-0.12,0),new A.c(-0.025,-0.12,0),11519958,0.9,!0)
l.is=l.e.gao().bb(l.aS(B.n.ae(p.a,0,p.b)),"weather:hail-particle")
l.it=l.be(B.mH)
o=new A.e3(new Float32Array(5376))
o.cO(new A.c(-0.06,0,0),new A.c(0.06,0,0),new A.c(0.045,0.22,0),new A.c(-0.045,0.22,0),16758062,0.86,!0)
l.iu=l.e.gao().bb(l.aS(B.n.ae(o.a,0,o.b)),"fire:flame-particle")
l.iv=l.be(B.mE)
n=new A.e3(new Float32Array(5376))
n.j2(new A.c(-0.11,0,0),new A.c(0.11,0,0),new A.c(0.15,0.2,0),new A.c(-0.15,0.2,0),15198175,0.22)
l.iw=l.e.gao().bb(l.aS(B.n.ae(n.a,0,n.b)),"fire:white-vapour-particle")
l.ix=l.be(B.mD)
m=new A.e3(new Float32Array(5376))
m.j2(new A.c(-0.14,0,0),new A.c(0.14,0,0),new A.c(0.18,0.24,0),new A.c(-0.18,0.24,0),1513757,0.34)
l.iy=l.e.gao().bb(l.aS(B.n.ae(m.a,0,m.b)),"fire:black-soot-particle")
l.iz=l.be(B.mG)},
m9(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
a4.dz=a4.dw=0
a4.dA=a4.ghw()
a4.dD=a4.dC=a4.dB=0
a4.dE=!1
a4.cF=a4.cE=a4.cD=a4.dv=0
a4.m8(a6,a7)
a4.dt=a4.ds=a4.eL=0
s=a4.y2
r=s==null
q=r?a5:s.a
if(q==null)q=B.w
p=$.bU()
if(!p.bM("weather_particles_enable"))return
o=B.b.n(p.I("weather_particle_density"),0,2)
n=B.b.n(p.I("weather_particle_size"),0.25,2)
m=r?a5:A.CP(s.a)
if(m==null)m=A.CP(B.w)
A:{p=B.ae===q
if(p){l=a4.iq
break A}if(B.a_===q||B.ad===q){l=a4.is
break A}l=a4.eP
break A}B:{if(p){k=a4.ir
break B}if(B.a_===q||B.ad===q){k=a4.it
break B}k=a4.eQ
break B}if(l==null||k==null||q===B.w||a4.xr<=0.01)return
C:{if(p){p=38
break C}if(B.a_===q){p=26
break C}if(B.ad===q){p=30
break C}p=32
break C}j=B.d.n(B.b.ap(8+a4.xr*p*o*a4.y1),0,40)
p=a4.ghw()
i=new A.oz(j,p)
i.B()
h=B.d.n(j,0,p)
a4.dw=j
a4.dA=p
a4.dE=B.d.n(j,0,p)!==j
p=Math.sin(a4.c0*0.7)
g=r?a5:s.b.a
if(g==null)g=0
f=g+p*0.18
r=r?a5:s.b.c
e=(r==null?0:r)+0.12
r=m.f
d=A.Fs(B.qV,m.r,B.f2,m.d,B.qZ,new A.B(f,m.b,e),2003132788+q.a,m.e,k,l,B.qS,h,r*n,a4.c1,new A.B(f,-m.c,e))
c=d.iG(a7)
a4.dB=c.b
a4.dC=c.c
a4.dD=d.nL(a7,i).r
b=new A.lm(a7.a,a7.b,a7.c,a7.d,a7.e,a7.f,a7.r,Math.max(0,a7.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,a=0;a<h;++a){a0=d.ce(a7,a)
g=d.ce(b,a).c
a1=a0.c
a2=a0.d
a3=A.HH(new A.c(a1.a,a1.b,a1.c),q,a4.dr,p,r,new A.c(g.a,g.b,g.c),new A.c(a2.a,a2.b,a2.c))
if(!a3.a)continue;++a4.eL
a4.ds=a4.ds+a3.r
a4.dt=a4.dt+a3.f}if(a4.y1>0.01)a4.dz=d.fI(a6,a7,new A.wZ(a4,m,n))
r=a4.du
if(r.length!==0)a4.dv=new A.q8(l,k,r,1.4,0.42*n).cj(a6,a7)},
m8(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.iu,a5=a3.iv,a6=a3.iw,a7=a3.ix,a8=a3.iy,a9=a3.iz
if(a3.eK.length===0||a4==null||a5==null||a6==null||a7==null||a8==null||a9==null)return
for(s=isFinite(0.9),r=isFinite(0.08),q=0;p=a3.eK,q<p.length;++q){o=p[q]
p=o.a
n=!0
if(p.length!==0){m=o.b
l=m.a
if(!isNaN(l)){k=m.b
if(!isNaN(k)){m=m.c
if(!isNaN(m)){j=o.c
if(isFinite(j))if(j>0)if(s)if(r)if(isFinite(l)&&isFinite(k)&&isFinite(m)){n=o.f
n=!(isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c))}}}}}if(n)A.h(A.p("invalid fire emitter "+p,null))
i=B.b.n(B.b.n(o.c/80,0,2)*0.9550000000000001,0,1)
h=B.b.n(0.1816,0,1)
g=B.b.n(0.08339999999999999,0,0.65)
p=o.f
n=p.a
m=p.b
p=p.c
f=Math.sqrt(n*n+m*m+p*p)
e=B.b.n(2.072/(1+f*0.12),1,4.8)
d=B.b.n(3.576/(1+f*0.08),2,7.2)
c=B.b.n(85+f*28+18,60,220)
b=B.b.n(0.35+i*1.1-0.0144,0.15,1.8)
m=650+850*i
if(!isFinite(i)||i<0||i>1||!isFinite(h)||h<0||h>1||!isFinite(g)||g<0||g>1||!isFinite(b)||b<0||!isFinite(m)||m<=0||!isFinite(e)||e<0||!isFinite(d)||d<0||!isFinite(c)||c<=0)A.h(A.p("invalid fire emission snapshot",null))
m=o.b
a=new A.B(m.a,m.b+0.03,m.c)
a0=B.d.n(B.b.ap(2+i*5),2,7)
m=a3.c1
a3.cD=a3.cD+new A.h6(a4,a5,B.b6,a,B.r_,new A.B(n*0.03,b,p*0.03),B.qY,new A.B(n*0.08,1.65,p*0.08),2.8,0.52,a0,(m^q*7919)>>>0,0.72+i*0.45,!1,1718381925).cj(b0,b1)
a1=B.d.n(B.b.ap(1+h*5),1,6)
m=a3.c1
a3.cE=a3.cE+new A.h6(a6,a7,B.b6,a,B.qU,new A.B(n*0.12,0.24,p*0.12),B.qT,new A.B(n*0.34,0.92,p*0.34),0.72,e,a1,(m^q*1543^119)>>>0,0.62+h*0.6,!1,2004251762).cj(b0,b1)
a2=B.d.n(B.b.ap(1+g*6),1,5)
m=a3.c1
a3.cF=a3.cF+new A.h6(a8,a9,B.b6,a,B.r0,new A.B(n*0.18,0.18,p*0.18),B.qW,new A.B(n*0.5,0.68,p*0.5),0.52,d,a2,(m^q*3571^4919)>>>0,0.8+g*0.7,!1,1651272563).cj(b0,b1)}},
li(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.dr,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
gjh(){var s=this.y2
s=s==null?null:s.a
return(s==null?B.w:s).b},
gdX(){var s=this.dq
s=s==null?null:s.b
return s==null?0:s},
gjg(){var s=this.dq
s=s==null?null:s.d
return s==null?0:s},
ghw(){var s,r=this.w
r===$&&A.u()
s=r.a
A:{if(B.K===s){r=40
break A}if(B.T===s){r=24
break A}r=8
break A}return r},
hD(a,b){var s=$.kv(),r=s.mR(a,b),q=s.mO(a,b)
s=A.J(r.c,t.i)
B.a.L(s,q)
return A.d([new A.hW("wall",new Float32Array(A.S(s))),new A.hW("floor",r.a),new A.hW("ceiling",r.b)],t.pv)},
aS(a){var s,r,q,p,o,n=A.d([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.e(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.e(a,o)
B.a.l(n,new A.B(q,p,a[o]))}if(n.length===0)throw A.a(A.i("house surface mesh cannot be empty"))
return new A.c0(B.am,a,null,A.bb(n))},
lk(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.hD(a3,a4),a1=a4.a,a2=a.ok.h(0,a1)
if(a2==null)throw A.a(A.i("surface materials missing for room "+a1))
s=A.d([],t.d)
r=A.d([],t.s3)
q=A.d([],t.h1)
for(p=a.y,o=a.Q,n="room:"+a1+":",m=0;m<3;++m){l=a0[m]
k=a.e
k===$&&A.u()
k=k.w
if(k==null)k=A.h(A.i("renderer is not initialized"))
j=a.aS(l.b)
i=l.a
if(k.x)A.h(A.i("resource library is disposed"))
h=k.a
j.B()
g=h.b.aI(j,n+i)
f=g.a
h.c.k(0,f,h.b3(j))
k.f.l(0,g)
i=a2.h(0,i)
i.toString
e=new A.aS(g,i,B.u,-1,B.C,B.A,!0,!0,0,null)
i=a.f
i===$&&A.u()
B.u.B()
k=i.a
j=k.$ti
k.a8(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.e(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.u.ak()
k=k.gaA()
h=A.C(k)
c=A.bb(new A.I(k,h.i("B(1)").a(j.gaF()),h.i("I<1,B>")))
b=i.b.bw(e)
i.c.k(0,b,new A.b3(b,e,c))
B.a.l(p,g)
B.a.l(o,b)
B.a.l(s,g)
B.a.l(r,b)
B.a.l(q,e)}a.z.k(0,a1,s)
a.ax.k(0,a1,r)
a.ay.k(0,a1,q)
if(r.length!==0)a.as.k(0,a1,B.a.ga1(r))
if(q.length!==0)a.at.k(0,a1,B.a.ga1(q))},
lP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.d([],f),d=A.d([],f)
for(f=a.b,s=f.length,r=t.N,q=this.ok,p=0;p<f.length;f.length===s||(0,A.r)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.E(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cW(l,l.r,l.e,A.w(l).i("cW<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bH.h(0,i)
if(h==null)A.h(A.i("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.a4(d)
f=$.o.j()
B.a.a4(e)
f.setAttribute("data-renderer-house-materials",B.a.a_(e,","))
$.o.j().setAttribute("data-renderer-house-surface-bindings",B.a.a_(d,","))},
fN(a,b,c){var s,r,q,p=this
t.Bs.a(c)
s=p.e
s===$&&A.u()
r=s.gao().bb(b,"decoration:"+a)
B.a.l(p.y,r)
q=new A.aS(r,p.hn(a),B.u,0,B.C,B.A,!0,!0,0,null)
s=p.f
s===$&&A.u()
B.a.l(p.id,new A.nm(a,s.ev(q),q,c))},
hn(a){var s=this.k4.h(0,a)
if(s==null){s=this.ry
s.toString}return s},
ln(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.e3(new Float32Array(5376))
g=this.lm(a0.b)
r=new A.c(d,b,f)
q=new A.c(e,b,f)
p=new A.c(e,c,f)
o=new A.c(d,c,f)
n=new A.c(d,b,a)
m=new A.c(e,b,a)
l=new A.c(e,c,a)
k=new A.c(d,c,a)
s.bK(q,r,o,p,g)
s.bK(n,m,l,k,g)
s.bK(r,n,k,o,g)
s.bK(m,q,p,l,g)
s.bK(r,q,m,n,g)
s.bK(o,k,l,p,g)
j=B.n.ae(s.a,0,s.b)
g=A.d([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.B(e,d,j[c]))}return new A.c0(B.am,j,null,A.bb(g))},
lm(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
bP(a){var s
A:{if(0===a){s=B.oR
break A}if(1===a){s=B.oT
break A}if(2===a){s=B.oZ
break A}if(3===a){s=B.p7
break A}if(4===a){s=B.p8
break A}if(5===a){s=B.oX
break A}if(6===a){s=B.p6
break A}if(7===a){s=B.p2
break A}s=B.p5
break A}return s},
ek(a){var s
A:{if("architecture"===a){s=B.oS
break A}if("furniture"===a){s=B.ek
break A}if("fixture"===a){s=B.p0
break A}if("service"===a){s=B.p3
break A}if("story"===a){s=B.p_
break A}if("decor"===a){s=B.oV
break A}if("micro"===a){s=B.oY
break A}s=B.ek
break A}return s},
dP(a){return this.oE(t.G.a(a))},
oE(a){var s=0,r=A.aL(t.H),q,p=this,o,n,m,l
var $async$dP=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:if(!p.aK){s=1
break}o=A.d([],t.iJ)
for(n=0;n<8;++n){m=B.kx[n]
l=a.h(0,m)
if(l!=null)o.push(p.d8(m,l))}s=3
return A.a6(A.qf(o,t.H),$async$dP)
case 3:case 1:return A.aJ(q,r)}})
return A.aK($async$dP,r)},
d8(a,b){return this.lq(a,b)},
lq(a2,a3){var s=0,r=A.aL(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$d8=A.aM(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a0=n.k2.h(0,a2)
if(a0==null){s=1
break}p=4
c=v.G
b=A.b(A.b(c.document).createElement("img"))
b.src=a3
m=b
s=7
return A.a6(A.av(A.b(m.decode()),t.X),$async$d8)
case 7:l=null
k=null
j=null
i=a2
A:{if("grime"===i){j=B.oP
break A}if("porcelain-albedo"===i||"porcelain-normal"===i){j=B.oO
break A}if("skybox-main-atmosphere-v1"===i){j=B.oN
break A}j=B.oM
break A}h=j
l=h.a
k=h.b
b=A.b(A.b(c.document).createElement("canvas"))
b.width=l
b.height=k
g=b
f=A.G(g.getContext("2d"))
if(!t.m.b(f)){j=A.i("2D canvas context unavailable for "+a2)
throw A.a(j)}A.b0(f,"drawImage",[m,0,0,l,k],t.H)
e=t.mV.a(A.b(f.getImageData(0,0,l,k)).data)
j=n.e
j===$&&A.u()
j=j.gao()
c=new Uint8Array(A.S(e))
if(j.x)A.h(A.i("resource library is disposed"))
j.c.pZ(a0,c)
j=n.e.gao()
if(j.x)A.h(A.i("resource library is disposed"))
j.c.ob(a0)
$.o.j().setAttribute("data-renderer-texture-"+a2,"loaded")
n.eo()
n.da()
p=2
s=6
break
case 4:p=3
a1=o.pop()
d=A.al(a1)
j=$.o.j()
j.setAttribute("data-renderer-texture-"+a2,"fallback")
n.eo()
n.da()
A.b(v.G.console).warn("Pixeldart texture "+a2+" unavailable: "+A.z(d))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aJ(q,r)
case 2:return A.aI(o.at(-1),r)}})
return A.aK($async$d8,r)},
eo(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aK||i.k2.a===0)return
s=i.k2
r=A.w(s).i("O<1,2>")
r=A.lO(new A.O(s,r),r.i("c7(t.E)").a(new A.wU()),r.i("t.E"),t.jP)
q=A.J(r,A.w(r).i("t.E"))
s=i.e
s===$&&A.u()
p=s.gao().ghM().dS(q)
s=p.a
o=A.d(s.slice(0),A.C(s))
B.a.Y(o,new A.wV())
s=A.C(o)
r=s.i("f(1)")
s=s.i("I<1,f>")
n=new A.I(o,r.a(new A.wW()),s).a_(0,",")
m=new A.I(o,r.a(new A.wX()),s).a_(0,",")
s=p.dg(B.eF)
r=p.dg(B.eG)
l=p.dg(B.eH)
k=p.dg(B.eI);++i.ik
j=$.o.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.ik)
if(!A.U($.o.j().hasAttribute("data-renderer-texture-residency-initial")))$.o.j().setAttribute("data-renderer-texture-residency-initial",n)},
da(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aK||j.rx.a===0)return
s=A.d([],t.a6)
for(r=j.rx,r=new A.O(r,A.w(r).i("O<1,2>")).gA(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.dm(p,o,B.c.q(p,"wall")?2:1))}r=j.e
r===$&&A.u()
r=r.gao()
n=r.e
if(n===$){p=r.ghM()
r.e!==$&&A.o8()
n=r.e=new A.rQ(p)}m=n.dS(s)
s=m.a
l=A.d(s.slice(0),A.C(s))
B.a.Y(l,new A.wR())
s=A.C(l)
k=new A.I(l,s.i("f(1)").a(new A.wS()),s.i("I<1,f>")).a_(0,",")
s=$.o.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.d5(B.bR)+";pending="+m.d5(B.dX)+";missing="+m.d5(B.dY)+";evicted="+m.d5(B.dZ))},
cp(a,b){return new A.aS(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
ha(a,b,c){var s,r,q,p,o,n=$.kv().mN(a,b,c),m=n.length
if(m===0)throw A.a(A.i("door "+c.a+" produced no leaf geometry"))
s=A.d([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.e(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.e(n,o)
s.push(new A.B(q,p,n[o]))}return new A.c0(B.am,n,null,A.bb(s))},
hs(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.T.j().ac(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.d([new A.c(k,s,r),new A.c(q,s,r),new A.c(q,p,r),new A.c(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.d([new A.c(k,s,r),new A.c(q,s,r),new A.c(q,p,r),new A.c(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.d([new A.c(k,s,r),new A.c(k,s,q),new A.c(k,p,q),new A.c(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.d([new A.c(k,s,r),new A.c(k,s,q),new A.c(k,p,q),new A.c(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.e3(new Float32Array(5376))
o.bK(k[0],k[1],k[2],k[3],g)
n=B.n.ae(o.a,0,o.b)
k=A.d([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.B(r,q,n[p]))}return new A.c0(B.am,n,null,A.bb(k))},
kF(a,b){var s,r,q,p=a.e,o=A.w(p).i("O<1,2>"),n=A.J(new A.O(p,o),o.i("t.E"))
B.a.Y(n,new A.wN())
p=$.o.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.I(o,s.i("k(1)").a(new A.wO()),s.i("I<1,k>")).a_(0,":")+";spots="+new A.I(r,q.i("k(1)").a(new A.wP()),q.i("I<1,k>")).a_(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.I(n,q.i("f(1)").a(new A.wQ()),q.i("I<1,f>")).a_(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
be(a){var s,r=this.e
r===$&&A.u()
r=r.gao()
if(r.x)A.h(A.i("resource library is disposed"))
a.B()
s=r.b.a.aI(a,null)
r.r.l(0,s)
this.rx.k(0,a.a,a)
return s},
$iCq:1}
A.x_.prototype={
$0(){return!this.a.w},
$S:29}
A.x0.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:29}
A.x3.prototype={
$1(a){var s,r
A.j(a)
s=this.c.a.f
r=s.length
if(r>a){if(!(a>=0))return A.e(s,a)
s=s[a]}else s="DefaultMaterial"
return this.a.lO(this.b.a,s)},
$S:182}
A.x4.prototype={
$1(a){return this.a},
$S:183}
A.wT.prototype={
$1(a){return J.aa(t.of.a(a).h(0,"attached"),!0)},
$S:184}
A.x1.prototype={
$1(a){var s=0,r=A.aL(t.N),q,p
var $async$$1=A.aM(function(b,c){if(b===1)return A.aI(c,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.U(p.ok))throw A.a(A.i("package manifest HTTP "+A.z(A.o4(p,"status",t.S))+": "+a))
s=4
return A.a6(A.av(A.b(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$1,r)},
$S:185}
A.x2.prototype={
$2(a,b){var s=0,r=A.aL(t.uo),q,p,o
var $async$$2=A.aM(function(c,d){if(c===1)return A.aI(d,r)
for(;;)switch(s){case 0:s=3
return A.a6(A.av(A.b(A.b(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.U(p.ok))throw A.a(A.i("package payload HTTP "+A.z(A.o4(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a6(A.av(A.b(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.Cc(d,0,null)
s=1
break
case 1:return A.aJ(q,r)}})
return A.aK($async$$2,r)},
$S:186}
A.x7.prototype={
$1(a){var s=this.a.dy.h(0,A.v(a))
s.toString
return s},
$S:26}
A.x8.prototype={
$1(a){var s,r,q,p
A.v(a)
s=this.a
r=s.k3.h(0,a)
q=r==null
p=q?null:s.k2.h(0,r)
if(q||p==null)throw A.a(A.i("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:26}
A.x5.prototype={
$0(){var s,r=this.a.cC,q=this.b
if(!(q<r.length))return A.e(r,q)
s=r[q]
r=s.a
return new A.hQ("warm:"+q,new A.B(r.a,r.b,r.c),s.b,B.b.n((s.c-this.c.r)/60,0,1))},
$S:187}
A.wY.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.u()
if(r.b.q(0,a)){this.b.L(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.k(0,b[o],p+s.w.a.b+" does not install it")},
$S:188}
A.x6.prototype={
$2(a,b){return Math.max(A.ax(a),t.z0.a(b).d)},
$S:189}
A.wZ.prototype={
$1(a){var s=a.c
return!this.a.li(new A.c(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:50}
A.wU.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.c7(s,a.b,r)},
$S:190}
A.wV.prototype={
$2(a,b){var s=t.o
return B.c.H(s.a(a).a.a,s.a(b).a.a)},
$S:191}
A.wW.prototype={
$1(a){t.o.a(a)
return a.a.a+"="+a.b.b},
$S:54}
A.wX.prototype={
$1(a){var s=t.o.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:54}
A.wR.prototype={
$2(a,b){var s=t.wl
return B.c.H(s.a(a).a.a,s.a(b).a.a)},
$S:193}
A.wS.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:194}
A.wN.prototype={
$2(a,b){var s=t.ou
return B.d.H(s.a(a).a,s.a(b).a)},
$S:195}
A.wO.prototype={
$1(a){return t.je.a(a).a},
$S:41}
A.wP.prototype={
$1(a){return t.je.a(a).a},
$S:41}
A.wQ.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:197}
A.nm.prototype={}
A.jR.prototype={
ic(a,b){var s=this,r=b==null?s.d:b
return new A.jR(s.a,s.b,s.c,r,a)},
n8(a){return this.ic(a,null)}}
A.wr.prototype={}
A.xF.prototype={
$2(a,b){var s
A.B_(a,A.z(b))
switch(a){case"master":s=$.bp
if(s!=null)s.jB(b)
break
case"voice":s=$.bp
if(s!=null)s.jD(b)
break
case"effects":s=$.bp
if(s!=null)s.jA(b)
break
case"ambience":s=$.bp
if(s!=null)s.jz(b)
break
case"music":s=$.bp
if(s!=null)s.jC(b)
break}},
$S:37}
A.xG.prototype={
$1(a){var s
A.B_("muted",""+a)
s=$.bp
if(s!=null)s.fz(a)},
$S:10}
A.xH.prototype={
$1(a){var s
A.B_("mono",""+a)
s=$.bp
if(s!=null)s.e0(a)},
$S:10}
A.xN.prototype={
$2(a,b){A.B0(a,A.z(b))
A.Do(a,b)},
$S:37}
A.xO.prototype={
$1(a){var s="high-contrast"
A.B0(s,""+a)
A.xo(s,a)},
$S:10}
A.xP.prototype={
$1(a){var s="strong-highlights"
A.B0(s,""+a)
A.xo(s,a)},
$S:10}
A.xQ.prototype={
$1(a){$.dF().px(a)
A.yx()
A.Dq()},
$S:199}
A.xR.prototype={
$0(){var s=$.dF()
s.a=A.e2(null,1)
s.b=A.e2(null,1)
A.yx()
A.Dq()},
$S:0}
A.xS.prototype={
$0(){A.ei(this.a)},
$S:0}
A.xT.prototype={
$0(){this.a.am()},
$S:0}
A.xU.prototype={
$0(){A.ei(this.a)},
$S:0}
A.xI.prototype={
$0(){A.ic(this.a)},
$S:0}
A.xJ.prototype={
$1(a){$.kj=a
A.DU()
A.Av()},
$S:200}
A.xK.prototype={
$1(a){var s=$.cM()
$.AG=a
if(!s.Q&&a.Q){$.bA.j().a=1
$.bA.j().j8(7)
$.aC.j().iM()
$.cL().R(0)}A.DW()
A.Dp()},
$S:201}
A.xL.prototype={
$1(a){$.dC=a
A.AO()
A.nO()},
$S:202}
A.xM.prototype={
$0(){$.dC=B.aI
$.fV.j().ft($.dC)
A.AO()
A.nO()},
$S:0}
A.xB.prototype={
$1(a){var s,r=A.Eu(a,A.DF())
$.kl=A.hr($.kx().b,a)
s=r.b
$.f0.j().cY(a,$.kx().b,s)
$.o.j().setAttribute("data-graphics-fallback",B.a.a_(s,"|"))
$.DG=A.nR(a,r,$.DG)},
$S:203}
A.xC.prototype={
$0(){this.a.$1(B.jQ)},
$S:0}
A.xD.prototype={
$0(){A.ei($.f0.j())},
$S:0}
A.xE.prototype={
$0(){A.ei($.f0.j())},
$S:0}
A.xx.prototype={
$1(a){},
$S:30}
A.xy.prototype={
$1(a){var s,r
$.AC=a
$.ao.j().fu(a.r)
s=$.ao.j()
r=s.ch
r.a=a.f
r.f9()
s.b1()
A.DV()},
$S:204}
A.xz.prototype={
$0(){A.ei($.kb.j())},
$S:0}
A.xA.prototype={
$0(){A.ei($.kb.j())},
$S:0}
A.yo.prototype={
$0(){$.yL=A.U(this.a.matches)
$.B5=A.U(this.b.matches)
A.nO()},
$S:0}
A.ym.prototype={
$1(a){return this.a.$0()},
$S:2}
A.yn.prototype={
$1(a){return this.a.$0()},
$S:2}
A.zb.prototype={
$1(a){var s
try{A.BP(this.b,a,this.a)
return!0}catch(s){if(A.al(s) instanceof A.A)return!1
else throw s}},
$S:205}
A.zc.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.kh.j()
break
case 5:p=$.fV.j()
break
case 1:p=$.f0.j()
break
case 4:p=$.i1.j()
break
case 2:p=$.kd.j()
break
case 3:p=$.kb.j()
break}s=p
r=null
switch(o){case 0:r=B.o5
break
case 5:r=B.oa
break
case 1:r=B.o6
break
case 4:r=B.o9
break
case 2:r=B.o7
break
case 3:r=B.o8
break}q=r
p=B.dS.h(0,a)
p.toString
A.AN(s,q,p)},
$S:206}
A.zd.prototype={
$0(){A.ei($.i3.j())},
$S:0}
A.zo.prototype={
$0(){return A.ei($.i3.j())},
$S:0}
A.zy.prototype={
$0(){$.cJ.j().am()},
$S:0}
A.zz.prototype={
$0(){$.cJ.j().am()},
$S:0}
A.zA.prototype={
$0(){A.AN($.i3.j(),B.e0,"pause.settings")},
$S:0}
A.zB.prototype={
$0(){$.cJ.j().am()
A.ib($.ke.j())},
$S:0}
A.zC.prototype={
$0(){A.ks("saved")},
$S:0}
A.zD.prototype={
$0(){$.cJ.j().am()
A.ib($.ke.j())},
$S:0}
A.zE.prototype={
$0(){A.AN($.nM.j(),B.ob,"pause.credits")},
$S:0}
A.ze.prototype={
$0(){return A.ic($.cJ.j())},
$S:0}
A.zf.prototype={
$1(a){var s=$.X.j(),r=s.e.q2(a),q=r?B.jn:B.jo
s.hx(q,r?a:null)
return r},
$S:21}
A.zg.prototype={
$0(){return A.ic($.kf.j())},
$S:0}
A.zh.prototype={
$2(a,b){var s,r
if($.aC.j().y){s=$.aU.j().gcv()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.e(r,a)
A.IY(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.e(B.dB,a)
A.IX(B.dB[a])}}},
$S:207}
A.zi.prototype={
$2(a,b){var s,r,q,p,o,n
if($.X.j().gal().a===21){A.E0(!1)
return}s=$.T.j().y.b
$.X.j().jV(a,b,$.ag)
if(b===B.c9&&$.ag===$.T.j().r){A.JU()
A.h_("woke in the living room")}r=$.T.j().y.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cU()
if(typeof n!=="number")return A.Bb(n)
if(!(o<n))break
if($.T.b===$.T)A.h(A.a9(""))
p=B.a.h(B.Y,q).b
o=$.ay
if(o!=null){n=$.T.b
if(n===$.T)A.h(A.a9(""))
o.dT(n,p)}o=q
if(typeof o!=="number")return o.S()
q=o+1}A.ks("saved after sleep")},
$S:208}
A.zj.prototype={
$0(){return A.ic($.fX.j())},
$S:0}
A.zk.prototype={
$0(){return A.ic($.ke.j())},
$S:0}
A.zl.prototype={
$0(){return A.ei($.nM.j())},
$S:0}
A.zm.prototype={
$0(){A.ic($.kc.j())},
$S:0}
A.zn.prototype={
$0(){A.ic($.kc.j())},
$S:0}
A.zp.prototype={
$1(a){return A.E_()},
$S:2}
A.zq.prototype={
$1(a){if(A.v(A.b(v.G.document).visibilityState)==="hidden")A.JX()},
$S:1}
A.zr.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.b(a)
if(A.v(l.code)==="CapsLock"&&!A.U(l.repeat)){l.preventDefault()
p=$.bU()
o=!p.a
p.a=o
if(o)A.rp(A.b(v.G.document),"exitPointerLock",t.X)
else $.ao.j().dV($.o.j())
return}p=$.bU()
if(p.a&&!A.U(l.repeat)){if(A.v(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.ao.j().dV($.o.j())
return}if(A.v(l.code)==="KeyC"){l.preventDefault()
A.xW()
return}if(A.v(l.code)==="KeyI"){l.preventDefault()
A.yk()
return}if(A.v(l.code)==="ArrowUp"||A.v(l.code)==="KeyW"){l.preventDefault()
n=p.gby().length
if(n>0)p.c=B.d.O(p.c-1+n,n)
o=$.f5
if(o!=null){p=p.gby().length
o.a.e_(-1,p)}return}if(A.v(l.code)==="ArrowDown"||A.v(l.code)==="KeyS"){l.preventDefault()
n=p.gby().length
if(n>0)p.c=B.d.O(p.c+1,n)
o=$.f5
if(o!=null){p=p.gby().length
o.a.e_(1,p)}return}if(A.v(l.code)==="ArrowLeft"||A.v(l.code)==="KeyA"){l.preventDefault()
p.nI()
return}if(A.v(l.code)==="ArrowRight"||A.v(l.code)==="KeyD"){l.preventDefault()
p.om()
return}if(A.v(l.code)==="KeyQ"){l.preventDefault()
m=p.gbX()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y-m.w*0.2,m.f,m.r)
return}if(A.v(l.code)==="KeyE"){l.preventDefault()
m=p.gbX()
p=m==null?null:m.Q===B.z
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y+m.w*0.2,m.f,m.r)
return}if(A.v(l.code)==="KeyR"){l.preventDefault()
if(A.U(l.shiftKey))p.pw()
else p.py()
return}if(B.c.X(A.v(l.code),"Digit")||B.c.X(A.v(l.code),"Numpad")){o=A.v(l.code)
o=A.zP(o,"Digit","")
s=A.zP(o,"Numpad","")
r=A.dY(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.aC.j().y&&!A.U(l.repeat))if($.cL().og(A.v(l.code))){l.preventDefault()
return}if(A.v(l.code)==="Escape"&&!A.U(l.repeat)){p=$.bk
if(p==null)A.ib($.cJ.j())
else p.am()
return}q=$.bk==null&&!p.a
if(!A.U(l.repeat)&&q)$.fW.j().iH(new A.mh(A.v(l.code),!0,1))
if(A.v(l.code)==="KeyP"&&!A.U(l.repeat)&&$.F0())$.fZ=!$.fZ
if((A.v(l.code)==="KeyJ"||A.v(l.code)==="Tab")&&!A.U(l.repeat)&&!$.aC.j().y){l.preventDefault()
A.kt($.kf.j())}if(A.v(l.code)==="KeyL"&&!A.U(l.repeat)&&!$.aC.j().y)A.kt($.fX.j())
if(A.v(l.code)==="KeyH"&&!A.U(l.repeat)&&!$.aC.j().y)A.kt($.ke.j())
if(A.v(l.code)==="KeyO"&&!A.U(l.repeat)&&!$.aC.j().y)A.kt($.kg.j())
if(A.v(l.code)==="KeyK"&&!A.U(l.repeat)&&q)A.ks("saved")},
$S:1}
A.zs.prototype={
$1(a){var s=A.b(a)
if($.bk==null)$.fW.j().iH(new A.mh(A.v(s.code),!1,0))},
$S:1}
A.zt.prototype={
$1(a){return A.Ds()},
$S:2}
A.zu.prototype={
$1(a){return A.Ds()},
$S:2}
A.zv.prototype={
$1(a){return A.Jp(A.b(a))},
$S:2}
A.zw.prototype={
$1(a){var s=A.b(a)
$.o.j().focus()
if($.aC.j().y){s.preventDefault()
A.Jo(s)
return}$.ao.j().dV($.o.j())},
$S:1}
A.zx.prototype={
$1(a){var s,r,q,p=A.b(a),o=$.bU()
if(!o.a||$.f5==null)return
p.preventDefault()
s=o.gby()
r=A.a_(p.deltaY)>0?1:-1
o=$.f5
o.toString
q=J.cN(s)
o.a.e_(A.j(r),q)},
$S:1}
A.yp.prototype={
$1(a){var s=A.v(A.b(a).message)
A.yB(s,null)},
$S:1}
A.yq.prototype={
$1(a){var s
A.b(a)
s=a.reason
A.yB("unhandled rejection: "+A.z(s==null?A.v(a.type):s),null)},
$S:1}
A.yw.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:51}
A.yG.prototype={
$0(){this.a.className=""},
$S:17}
A.yO.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:43}
A.yt.prototype={
$2(a,b){var s=t.q
return B.c.H(s.a(a).a,s.a(b).a)},
$S:28}
A.yD.prototype={
$1(a){return t.g.a(a).e},
$S:24}
A.yy.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:15}
A.yA.prototype={
$1(a){return t.fW.a(a).w},
$S:14}
A.yT.prototype={
$1(a){return t.fW.a(a).w},
$S:14}
A.yN.prototype={
$2(a,b){return A.ax(a)+t.cZ.a(b).d},
$S:209};(function aliases(){var s=J.eH.prototype
s.k9=s.t
s=A.t.prototype
s.k8=s.dY
s=A.c3.prototype
s.cZ=s.bt
s=A.j4.prototype
s.ka=s.c4})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"Jw","Gt",210)
r(J.x.prototype,"gaH","q",9)
q(A,"JL","GT",40)
r(A.aP.prototype,"gaH","q",9)
r(A.hp.prototype,"gaH","q",9)
p(A.cy.prototype,"gn3","J",9)
o(A,"KG","I2",31)
o(A,"KH","I3",31)
o(A,"KI","I4",31)
q(A,"Eg","Kl",0)
r(A.cG.prototype,"gaH","q",9)
r(A.hS.prototype,"gaH","q",9)
o(A,"KQ","J6",16)
p(A.lQ.prototype,"gpE","pF",99)
var l
p(l=A.mz.prototype,"gpA","pB",11)
p(l,"gpJ","pK",11)
p(l,"gpL","pM",11)
p(l,"gpC","pD",11)
p(l,"gpH","pI",11)
q(A,"Ek","I8",212)
q(A,"Mw","Ab",29)
p(A.dk.prototype,"gaF","jc",67)
n(A.k6.prototype,"gnP","W",0)
p(l=A.lz.prototype,"gls","lt",2)
p(l,"glu","lv",2)
p(l,"gly","lz",2)
p(l,"glC","lD",2)
p(l,"glE","lF",2)
p(l,"glA","lB",2)
p(l,"glw","lx",2)
p(l,"glG","lH",2)
o(A,"Le","Dw",16)
o(A,"Li","Dv",16)
o(A,"L6","Gp",213)
o(A,"L7","Gr",214)
o(A,"Ln","Gj",215)
m(A,"Lw",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["CR",function(){return A.CR(0,0,0)}],216,0)
p(A.j4.prototype,"glI","lJ",2)
p(A.hL.prototype,"glg","lh",154)
p(A.mN.prototype,"gow","ox",25)
o(A,"Et","K_",217)
q(A,"Es","J3",0)
o(A,"Lb","IZ",145)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.L,null)
q(A.L,[A.A2,J.lB,A.jl,J.fb,A.t,A.iu,A.at,A.a4,A.ur,A.an,A.iS,A.R,A.iD,A.iB,A.jA,A.aE,A.eO,A.bi,A.hx,A.he,A.ez,A.eb,A.dt,A.vD,A.tk,A.iC,A.jY,A.ah,A.rJ,A.bZ,A.ad,A.cW,A.iN,A.ni,A.mZ,A.js,A.nA,A.ws,A.xg,A.d0,A.nc,A.nD,A.xc,A.n_,A.d4,A.bq,A.n3,A.ea,A.as,A.n0,A.ny,A.k9,A.jI,A.nh,A.fR,A.jL,A.k2,A.nE,A.eA,A.l0,A.wL,A.xk,A.xh,A.fg,A.dK,A.n9,A.m0,A.jq,A.wt,A.A,A.P,A.az,A.nB,A.vm,A.bH,A.k4,A.vH,A.nv,A.tj,A.ne,A.eY,A.eo,A.mH,A.t1,A.lR,A.tc,A.t3,A.t6,A.fs,A.u0,A.e_,A.m7,A.kX,A.pw,A.px,A.kY,A.m6,A.it,A.vg,A.ll,A.lm,A.e0,A.lw,A.aZ,A.l9,A.m5,A.bQ,A.c_,A.bg,A.jx,A.c0,A.l3,A.tl,A.m8,A.jj,A.aS,A.mx,A.jg,A.b1,A.qb,A.dm,A.ch,A.rS,A.rQ,A.lQ,A.mD,A.rY,A.is,A.t0,A.t2,A.hz,A.md,A.c7,A.cl,A.vx,A.vv,A.dA,A.mz,A.vk,A.hQ,A.cp,A.w_,A.dU,A.lh,A.li,A.ln,A.qa,A.hV,A.aw,A.bD,A.aR,A.Q,A.iw,A.mb,A.bl,A.u2,A.bf,A.u4,A.u3,A.b3,A.jf,A.mi,A.wu,A.nC,A.xb,A.no,A.nb,A.ns,A.nl,A.wG,A.c1,A.bX,A.b6,A.pN,A.pM,A.h4,A.fv,A.qc,A.dk,A.me,A.eM,A.B,A.oz,A.oC,A.oA,A.h7,A.h6,A.lk,A.q8,A.ir,A.n1,A.kQ,A.n2,A.l5,A.n6,A.iz,A.n7,A.la,A.n8,A.lu,A.nd,A.iX,A.nj,A.h9,A.kR,A.Ac,A.j6,A.np,A.mc,A.nq,A.fF,A.mq,A.nt,A.mr,A.nu,A.mu,A.nx,A.mt,A.nw,A.mI,A.nF,A.mR,A.nH,A.nG,A.jh,A.mV,A.nK,A.pu,A.lr,A.lt,A.iG,A.jn,A.q,A.l6,A.hC,A.qy,A.eZ,A.dq,A.hl,A.wi,A.ee,A.k8,A.k7,A.nJ,A.nI,A.xm,A.we,A.wh,A.l8,A.kI,A.hY,A.k6,A.oK,A.oe,A.il,A.oG,A.zY,A.oS,A.oM,A.jB,A.ha,A.pr,A.q9,A.lz,A.rg,A.rk,A.bc,A.rF,A.rC,A.pO,A.rL,A.be,A.rP,A.e3,A.c,A.w5,A.cE,A.eS,A.w3,A.w1,A.mv,A.mW,A.pk,A.lb,A.pX,A.hm,A.bK,A.m4,A.tO,A.hK,A.uk,A.fC,A.lp,A.qm,A.ql,A.bV,A.io,A.ox,A.cc,A.dr,A.c4,A.ou,A.qQ,A.au,A.bW,A.fu,A.r3,A.hA,A.ue,A.kK,A.pe,A.eq,A.es,A.eu,A.er,A.et,A.oD,A.c3,A.kS,A.lS,A.d3,A.mX,A.iK,A.qU,A.a8,A.le,A.lx,A.qV,A.lf,A.dz,A.lg,A.eX,A.eD,A.jk,A.qP,A.qS,A.q0,A.ve,A.qX,A.di,A.cU,A.lC,A.rn,A.rl,A.rm,A.dX,A.r1,A.cA,A.fL,A.cj,A.lN,A.fG,A.fB,A.r6,A.dh,A.qT,A.fn,A.r5,A.dg,A.rb,A.j5,A.iR,A.aF,A.vZ,A.lL,A.ce,A.rr,A.iq,A.ph,A.j7,A.tH,A.j8,A.m9,A.tB,A.tA,A.tC,A.tD,A.tE,A.tF,A.hD,A.tG,A.tI,A.tL,A.tM,A.iQ,A.u_,A.uc,A.mh,A.ub,A.ud,A.v3,A.cD,A.v5,A.hM,A.pP,A.lj,A.wl,A.fM,A.kZ,A.re,A.ri,A.jc,A.jb,A.dp,A.tY,A.tZ,A.tX,A.ui,A.ds,A.uj,A.lq,A.fJ,A.wb,A.hT,A.eR,A.w0,A.w9,A.fK,A.eT,A.mS,A.hU,A.wd,A.qj,A.lo,A.td,A.db,A.bF,A.ty,A.vp,A.fI,A.fH,A.jz,A.mQ,A.fz,A.dy,A.vn,A.ck,A.mn,A.mk,A.ml,A.mm,A.vs,A.kB,A.zX,A.en,A.oo,A.oF,A.ep,A.pj,A.br,A.ps,A.hg,A.dI,A.l_,A.j4,A.pS,A.qs,A.qu,A.ho,A.dT,A.qL,A.qB,A.qC,A.cd,A.qM,A.dn,A.hb,A.tn,A.dW,A.eJ,A.ci,A.ts,A.tW,A.bm,A.uY,A.v1,A.cO,A.ol,A.mN,A.vY,A.e8,A.bI,A.co,A.c9,A.mP,A.kD,A.mM,A.hW,A.nn,A.nm,A.jR,A.wr])
q(J.lB,[J.lE,J.iM,J.iO,J.hs,J.ht,J.fo,J.eG])
q(J.iO,[J.eH,J.x,A.eI,A.j0])
q(J.eH,[J.m3,J.eN,J.dV])
r(J.lD,A.jl)
r(J.rq,J.x)
q(J.fo,[J.iL,J.lF])
q(A.t,[A.eV,A.W,A.cX,A.F,A.fh,A.e9,A.fQ,A.mY,A.nz,A.ca])
q(A.eV,[A.ff,A.ka])
r(A.jG,A.ff)
r(A.jE,A.ka)
r(A.bd,A.jE)
q(A.at,[A.hu,A.e5,A.lG,A.mC,A.mj,A.na,A.iP,A.kG,A.cP,A.jv,A.mB,A.hN,A.kW])
r(A.hR,A.a4)
r(A.dJ,A.hR)
q(A.W,[A.a1,A.af,A.am,A.O,A.fP,A.jK])
q(A.a1,[A.jt,A.I,A.bO,A.ng])
r(A.dL,A.cX)
q(A.bi,[A.ec,A.ed,A.fT])
q(A.ec,[A.a5,A.fU,A.jS,A.jT])
q(A.ed,[A.aH,A.aT,A.jU,A.jV])
q(A.fT,[A.cH,A.jW])
r(A.i_,A.hx)
r(A.eP,A.i_)
r(A.ix,A.eP)
q(A.ez,[A.kV,A.kU,A.my,A.z7,A.z9,A.wo,A.wn,A.xr,A.qg,A.wE,A.wH,A.rM,A.wJ,A.zG,A.zH,A.z_,A.v2,A.t4,A.t9,A.ta,A.t8,A.yr,A.yK,A.yu,A.yI,A.u1,A.vM,A.rV,A.rW,A.rX,A.tm,A.rT,A.rU,A.rZ,A.z0,A.vy,A.vz,A.vA,A.vC,A.q4,A.q2,A.q3,A.tp,A.tq,A.u9,A.u8,A.u7,A.u6,A.u5,A.ua,A.yc,A.yd,A.um,A.un,A.zO,A.zM,A.qd,A.rO,A.oB,A.yX,A.qz,A.qA,A.wf,A.wg,A.oU,A.oY,A.oX,A.oW,A.oZ,A.oL,A.of,A.og,A.oh,A.oI,A.oJ,A.oH,A.rh,A.rD,A.w6,A.w7,A.w2,A.w4,A.q_,A.qn,A.qp,A.qq,A.qr,A.os,A.ug,A.uh,A.ov,A.qR,A.r4,A.tU,A.uf,A.wk,A.wj,A.p0,A.p1,A.p2,A.p3,A.p4,A.p7,A.p8,A.p9,A.pa,A.pb,A.pc,A.pd,A.p6,A.yW,A.pf,A.pg,A.yv,A.yR,A.oE,A.pv,A.q1,A.qW,A.zQ,A.yi,A.yh,A.rd,A.vf,A.r0,A.r_,A.qY,A.yQ,A.r7,A.r9,A.ra,A.yP,A.pW,A.rI,A.ry,A.yF,A.tJ,A.tK,A.tN,A.v4,A.vc,A.v6,A.v7,A.va,A.vb,A.v9,A.v8,A.vl,A.pQ,A.pR,A.wc,A.qi,A.tz,A.vo,A.up,A.uq,A.vt,A.vu,A.od,A.ob,A.oP,A.oQ,A.pm,A.pq,A.pp,A.po,A.pG,A.pF,A.pH,A.pI,A.pJ,A.pE,A.pz,A.pA,A.pL,A.pT,A.pU,A.pV,A.pZ,A.qt,A.qv,A.qw,A.qJ,A.qF,A.qG,A.qH,A.qI,A.qE,A.qD,A.qO,A.rt,A.ru,A.rv,A.tt,A.tu,A.tv,A.uT,A.uU,A.uL,A.uM,A.uK,A.uN,A.uv,A.uO,A.uP,A.uQ,A.uJ,A.uB,A.uC,A.uD,A.uE,A.uF,A.uG,A.uH,A.uI,A.uA,A.uw,A.ux,A.uy,A.uz,A.uS,A.uR,A.v_,A.vj,A.on,A.vW,A.vV,A.vX,A.vR,A.vU,A.vP,A.vO,A.z3,A.vN,A.oi,A.oj,A.ok,A.x3,A.x4,A.wT,A.x1,A.x7,A.x8,A.wZ,A.wU,A.wW,A.wX,A.wS,A.wO,A.wP,A.wQ,A.xG,A.xH,A.xO,A.xP,A.xQ,A.xJ,A.xK,A.xL,A.xB,A.xx,A.xy,A.ym,A.yn,A.zb,A.zc,A.zf,A.zp,A.zq,A.zr,A.zs,A.zt,A.zu,A.zv,A.zw,A.zx,A.yp,A.yq,A.yw,A.yO,A.yD,A.yy,A.yA,A.yT])
q(A.kV,[A.py,A.rz,A.z8,A.xs,A.yU,A.qh,A.wF,A.rK,A.rN,A.wM,A.vJ,A.vI,A.t5,A.t7,A.tb,A.zR,A.zS,A.zI,A.rR,A.t_,A.vw,A.vB,A.zJ,A.q5,A.uo,A.zN,A.zL,A.oV,A.oN,A.oO,A.rE,A.qo,A.ot,A.ow,A.tV,A.yJ,A.r2,A.rH,A.vd,A.rj,A.qk,A.tf,A.tg,A.th,A.vq,A.vr,A.pt,A.rw,A.rx,A.om,A.vS,A.vQ,A.x2,A.wY,A.x6,A.wV,A.wR,A.wN,A.xF,A.xN,A.zh,A.zi,A.yt,A.yN])
q(A.he,[A.a3,A.de])
q(A.dt,[A.hf,A.jX,A.k3])
q(A.hf,[A.aP,A.hp])
q(A.kU,[A.tP,A.wp,A.wq,A.xd,A.qe,A.wv,A.wA,A.wz,A.wx,A.ww,A.wD,A.wC,A.wB,A.xa,A.yE,A.xj,A.xi,A.yb,A.y4,A.y5,A.ya,A.y_,A.y1,A.y0,A.y9,A.xY,A.xZ,A.y6,A.y7,A.y8,A.y3,A.y2,A.yf,A.yg,A.yY,A.qZ,A.r8,A.yj,A.oc,A.oq,A.op,A.oR,A.pC,A.pD,A.pB,A.qx,A.qK,A.tx,A.ut,A.uu,A.uV,A.uW,A.uX,A.v0,A.vi,A.vT,A.x_,A.x0,A.x5,A.xR,A.xS,A.xT,A.xU,A.xI,A.xM,A.xC,A.xD,A.xE,A.xz,A.xA,A.yo,A.zd,A.zo,A.zy,A.zz,A.zA,A.zB,A.zC,A.zD,A.zE,A.ze,A.zg,A.zj,A.zk,A.zl,A.zm,A.zn,A.yG])
r(A.j2,A.e5)
q(A.my,[A.mw,A.h8])
q(A.ah,[A.cy,A.jH,A.nf])
r(A.fp,A.cy)
r(A.hB,A.eI)
q(A.j0,[A.lT,A.bu])
q(A.bu,[A.jN,A.jP])
r(A.jO,A.jN)
r(A.iZ,A.jO)
r(A.jQ,A.jP)
r(A.j_,A.jQ)
q(A.iZ,[A.iY,A.lU])
q(A.j_,[A.lV,A.lW,A.lX,A.lY,A.lZ,A.ft,A.j1])
r(A.hZ,A.na)
r(A.jC,A.n3)
r(A.nr,A.k9)
r(A.jJ,A.jH)
r(A.cG,A.jX)
r(A.hS,A.k3)
q(A.eA,[A.lc,A.kL,A.lH])
q(A.lc,[A.kE,A.mG])
q(A.l0,[A.xe,A.pi,A.rB,A.rA,A.vL,A.vK])
r(A.kF,A.xe)
r(A.lI,A.iP)
r(A.wK,A.wL)
q(A.cP,[A.hG,A.ly])
r(A.n4,A.k4)
q(A.n9,[A.l7,A.fx,A.hi,A.hd,A.mA,A.fm,A.h5,A.iU,A.d1,A.hJ,A.hk,A.kP,A.iv,A.hj,A.fA,A.fr,A.d_,A.e4,A.bn,A.fj,A.cx,A.ji,A.df,A.hI,A.jp,A.hn,A.ip,A.jD,A.jF,A.ls,A.iE,A.iH,A.iI,A.fl,A.iF,A.fE,A.dw,A.hc,A.hq,A.hX,A.kO,A.fe,A.l1,A.l4,A.bw,A.kJ,A.dl,A.cv,A.dN,A.bt,A.iW,A.iV,A.fi,A.dM,A.eC,A.eB,A.eE,A.m2,A.mg,A.hH,A.c5,A.jo,A.du,A.c6,A.bG,A.lA,A.fN,A.cC,A.eL,A.eU,A.fc,A.d9,A.cQ,A.da,A.dH,A.dG,A.ew,A.ex,A.ev,A.fd,A.dQ,A.dc,A.dd,A.dR,A.dP,A.dS,A.cw,A.dO,A.cS,A.kC,A.bE,A.cz,A.eK,A.cZ,A.c2,A.bP,A.jm,A.bY,A.cm,A.cn,A.eQ,A.dx])
q(A.e0,[A.bN,A.bx,A.cg,A.m1,A.cT])
r(A.ul,A.ns)
r(A.mT,A.nI)
q(A.c3,[A.kM,A.kN,A.kT,A.lv,A.lJ,A.lK,A.lM,A.ms,A.n5])
r(A.jM,A.dz)
q(A.j4,[A.iy,A.pK,A.pY,A.iJ,A.qN,A.rs,A.tw,A.us,A.hL,A.vh])
q(A.vY,[A.mO,A.nk,A.bz,A.mL,A.mJ,A.jy,A.mK])
s(A.hR,A.eO)
s(A.ka,A.a4)
s(A.jN,A.a4)
s(A.jO,A.aE)
s(A.jP,A.a4)
s(A.jQ,A.aE)
s(A.i_,A.k2)
s(A.k3,A.nE)
s(A.ns,A.wG)
s(A.nI,A.xm)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",y:"double",bC:"num",f:"String",l:"bool",az:"Null",K:"List",L:"Object",V:"Map",aj:"JSObject"},mangledNames:{},types:["~()","az(L?)","~(L?)","l(f)","l(y)","cR()","l(@)","0&()","l(cD)","l(L?)","~(l)","cR(bx?)","l(aw)","k(ce,ce)","l(fL)","l(fz)","@(@)","az()","l(fB)","l(Q)","~(@)","l(k)","f(eo)","l(bg)","l(ce)","l(c9)","f(f)","l(bm)","k(P<f,f>,P<f,f>)","l()","az(@)","~(~())","k(bV,bV)","f(L?)","f(eq)","f(es)","l(bV)","~(f,y)","l(cU)","@(f)","k()","k(bc)","l(c8?)","l(bF)","P<f,f>(@,@)","l(d9)","l(P<f,K<f>>)","l(eX)","~(aj)","l(cS)","l(h7)","l(cw)","~(L?,L?)","~(f,f)","f(cl)","l(c5)","@()","aY<az>(P<f,f>)","cR?()","l(P<f,b1>)","b1(P<f,b1>)","b1(b1,b1)","k(b6<c1>,b6<c1>)","cB(b6<c1>)","k(b6<bX>,b6<bX>)","cB(b6<bX>)","fv(y,y,y,y)","B(B)","~(k,@)","~(fF)","fF()","~(L,dv)","y(y,hY)","V<f,@>(fs)","l(K<f>)","k(f,f)","k(cj,cj)","az(L,dv)","+effectiveScore,light,score(y,bc,y)(bc)","k(+effectiveScore,light,score(y,bc,y),+effectiveScore,light,score(y,bc,y))","l(cv)","~(@,@)","az(~())","@(@,f)","k(+influence,light(y,bQ),+influence,light(y,bQ))","V<f,f>(V<f,f>,f)","l(ch)","f(bt)","V<f,@>(cc)","K<cc>(dr)","P<f,V<f,@>>(f,dr)","l(fu)","c(y,y,y)","~(y,y,y,y,y,y,k{alpha:y})","eq(L?)","es(L?)","er(L?)","et(L?)","k(dm,dm)","c_(cg)","cg(k,k,f?)","f(er)","f(et)","f(eu)","bN(k,k,f?)","eC(f)","eu(L?)","l(fG)","f(k,a8,a8,a8)","k(dz,dz)","k(k,+(bN,c0))","l(cj)","l(cl)","l(di)","k(c7,c7)","k(dX,dX)","l(dh)","P<f,f>(f,@)","f?(f)","aY<c8>(f)","0&(f,k?)","k(cD,cD)","bx(k,k,f?)","y(y)","l(c6)","l(bG)","fJ()","y(f)","k(ck,ck)","L?(L?)","k(P<f,db>,P<f,db>)","k(k,+(bx,dA))","P<k,@>(k,fI)","P<k,@>(k,fH)","l(ck)","k(+influence,source(y,cp),+influence,source(y,cp))","l(P<@,@>)","P<f,f>(P<@,@>)","l?(L?)","f(aw)","f()","0^(t<0^>,L?)<L?>","y(y,f)","k(ae,ae)","K<f>(K<f>)","~(k)","f(k)","az(@,dv)","az(aj)","0^(f,t<0^>)<D>","cT(k,k,f?)","V<f,L?>(dW)","f(bE)","l(bE)","l(bP)","jh(bN)","l(dQ)","l(dc)","l(dd)","l(dR)","l(dP)","l(dS)","l(dO)","cR(f{fallback:f?})","l(cQ)","l(da)","l(dH)","l(dG)","K<aj>()","f(cO)","k(cO,cO)","k(k,c8)","k(c9,c9)","K<dy>()","l(dy)","l(P<f,f>)","k(co,co)","V<f,@>(c9)","l(cn)","l(cm)","l(bY)","bQ?()","cg(k)","hz(hD)","l(V<f,L>)","aY<f>(f)","aY<c8>(f,f)","hQ()","~(f,t<f>)","y(y,dp)","c7(P<f,bx>)","k(cl,cl)","K<bQ>()","k(ch,ch)","f(ch)","k(P<k,f>,P<k,f>)","it()","f(P<k,f>)","y()","~(bP)","~(ep)","~(ho)","~(en)","~(dT)","~(hg)","l(hK)","~(c2)","~(k,f)","~(c6,bG)","y(y,eR)","k(@,@)","h9()","hV()","di(L?)","cU(L?)","dh(L?)","hU({materialDissolution01:y,snowDepthM:y,waterFilmDepthM:y})","~(bC)","~(y)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fU&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jS&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.jT&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aH&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.aT&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jU&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.jV&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.cH&&A.Ev(a,b.a),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jW&&A.Ev(a,b.a)}}
A.Iq(v.typeUniverse,JSON.parse('{"dV":"eH","m3":"eH","eN":"eH","LL":"eI","x":{"K":["1"],"W":["1"],"aj":[],"t":["1"]},"lE":{"l":[],"ap":[]},"iM":{"az":[],"ap":[]},"iO":{"aj":[]},"eH":{"aj":[]},"lD":{"jl":[]},"rq":{"x":["1"],"K":["1"],"W":["1"],"aj":[],"t":["1"]},"fb":{"ai":["1"]},"fo":{"y":[],"bC":[],"bs":["bC"]},"iL":{"y":[],"k":[],"bC":[],"bs":["bC"],"ap":[]},"lF":{"y":[],"bC":[],"bs":["bC"],"ap":[]},"eG":{"f":[],"bs":["f"],"tr":[],"ap":[]},"eV":{"t":["2"]},"iu":{"ai":["2"]},"ff":{"eV":["1","2"],"t":["2"],"t.E":"2"},"jG":{"ff":["1","2"],"eV":["1","2"],"W":["2"],"t":["2"],"t.E":"2"},"jE":{"a4":["2"],"K":["2"],"eV":["1","2"],"W":["2"],"t":["2"]},"bd":{"jE":["1","2"],"a4":["2"],"K":["2"],"eV":["1","2"],"W":["2"],"t":["2"],"t.E":"2","a4.E":"2"},"hu":{"at":[]},"dJ":{"a4":["k"],"eO":["k"],"K":["k"],"W":["k"],"t":["k"],"a4.E":"k","eO.E":"k"},"W":{"t":["1"]},"a1":{"W":["1"],"t":["1"]},"jt":{"a1":["1"],"W":["1"],"t":["1"],"t.E":"1","a1.E":"1"},"an":{"ai":["1"]},"cX":{"t":["2"],"t.E":"2"},"dL":{"cX":["1","2"],"W":["2"],"t":["2"],"t.E":"2"},"iS":{"ai":["2"]},"I":{"a1":["2"],"W":["2"],"t":["2"],"t.E":"2","a1.E":"2"},"F":{"t":["1"],"t.E":"1"},"R":{"ai":["1"]},"fh":{"t":["2"],"t.E":"2"},"iD":{"ai":["2"]},"iB":{"ai":["1"]},"e9":{"t":["1"],"t.E":"1"},"jA":{"ai":["1"]},"hR":{"a4":["1"],"eO":["1"],"K":["1"],"W":["1"],"t":["1"]},"bO":{"a1":["1"],"W":["1"],"t":["1"],"t.E":"1","a1.E":"1"},"a5":{"ec":[],"bi":[]},"fU":{"ec":[],"bi":[]},"jS":{"ec":[],"bi":[]},"jT":{"ec":[],"bi":[]},"aH":{"ed":[],"bi":[]},"aT":{"ed":[],"bi":[]},"jU":{"ed":[],"bi":[]},"jV":{"ed":[],"bi":[]},"cH":{"fT":[],"bi":[]},"jW":{"fT":[],"bi":[]},"ix":{"eP":["1","2"],"i_":["1","2"],"hx":["1","2"],"k2":["1","2"],"V":["1","2"]},"he":{"V":["1","2"]},"a3":{"he":["1","2"],"V":["1","2"]},"fQ":{"t":["1"],"t.E":"1"},"eb":{"ai":["1"]},"de":{"he":["1","2"],"V":["1","2"]},"hf":{"dt":["1"],"e1":["1"],"W":["1"],"t":["1"]},"aP":{"hf":["1"],"dt":["1"],"e1":["1"],"W":["1"],"t":["1"]},"hp":{"hf":["1"],"dt":["1"],"e1":["1"],"W":["1"],"t":["1"]},"j2":{"e5":[],"at":[]},"lG":{"at":[]},"mC":{"at":[]},"jY":{"dv":[]},"ez":{"fk":[]},"kU":{"fk":[]},"kV":{"fk":[]},"my":{"fk":[]},"mw":{"fk":[]},"h8":{"fk":[]},"mj":{"at":[]},"cy":{"ah":["1","2"],"A4":["1","2"],"V":["1","2"],"ah.K":"1","ah.V":"2"},"af":{"W":["1"],"t":["1"],"t.E":"1"},"bZ":{"ai":["1"]},"am":{"W":["1"],"t":["1"],"t.E":"1"},"ad":{"ai":["1"]},"O":{"W":["P<1,2>"],"t":["P<1,2>"],"t.E":"P<1,2>"},"cW":{"ai":["P<1,2>"]},"fp":{"cy":["1","2"],"ah":["1","2"],"A4":["1","2"],"V":["1","2"],"ah.K":"1","ah.V":"2"},"ec":{"bi":[]},"ed":{"bi":[]},"fT":{"bi":[]},"iN":{"H5":[],"tr":[]},"ni":{"jd":[],"hy":[]},"mY":{"t":["jd"],"t.E":"jd"},"mZ":{"ai":["jd"]},"js":{"hy":[]},"nz":{"t":["hy"],"t.E":"hy"},"nA":{"ai":["hy"]},"hB":{"eI":[],"aj":[],"ap":[]},"ft":{"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"eI":{"aj":[],"ap":[]},"j0":{"aj":[]},"lT":{"aj":[],"ap":[]},"bu":{"cf":["1"],"aj":[]},"iZ":{"a4":["y"],"bu":["y"],"K":["y"],"cf":["y"],"W":["y"],"aj":[],"t":["y"],"aE":["y"]},"j_":{"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"]},"iY":{"q6":[],"a4":["y"],"bu":["y"],"K":["y"],"cf":["y"],"W":["y"],"aj":[],"t":["y"],"aE":["y"],"ap":[],"a4.E":"y","aE.E":"y"},"lU":{"q7":[],"a4":["y"],"bu":["y"],"K":["y"],"cf":["y"],"W":["y"],"aj":[],"t":["y"],"aE":["y"],"ap":[],"a4.E":"y","aE.E":"y"},"lV":{"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"lW":{"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"lX":{"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"lY":{"vF":[],"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"lZ":{"vG":[],"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"j1":{"c8":[],"a4":["k"],"bu":["k"],"K":["k"],"cf":["k"],"W":["k"],"aj":[],"t":["k"],"aE":["k"],"ap":[],"a4.E":"k","aE.E":"k"},"na":{"at":[]},"hZ":{"e5":[],"at":[]},"d4":{"ai":["1"]},"ca":{"t":["1"],"t.E":"1"},"bq":{"at":[]},"jC":{"n3":["1"]},"as":{"aY":["1"]},"k9":{"D_":[]},"nr":{"k9":[],"D_":[]},"jH":{"ah":["1","2"],"V":["1","2"]},"jJ":{"jH":["1","2"],"ah":["1","2"],"V":["1","2"],"ah.K":"1","ah.V":"2"},"fP":{"W":["1"],"t":["1"],"t.E":"1"},"jI":{"ai":["1"]},"cG":{"dt":["1"],"C4":["1"],"e1":["1"],"W":["1"],"t":["1"]},"fR":{"ai":["1"]},"a4":{"K":["1"],"W":["1"],"t":["1"]},"ah":{"V":["1","2"]},"jK":{"W":["2"],"t":["2"],"t.E":"2"},"jL":{"ai":["2"]},"hx":{"V":["1","2"]},"eP":{"i_":["1","2"],"hx":["1","2"],"k2":["1","2"],"V":["1","2"]},"dt":{"e1":["1"],"W":["1"],"t":["1"]},"jX":{"dt":["1"],"e1":["1"],"W":["1"],"t":["1"]},"hS":{"dt":["1"],"nE":["1"],"e1":["1"],"W":["1"],"t":["1"]},"nf":{"ah":["f","@"],"V":["f","@"],"ah.K":"f","ah.V":"@"},"ng":{"a1":["f"],"W":["f"],"t":["f"],"t.E":"f","a1.E":"f"},"kE":{"eA":["f","K<k>"]},"kL":{"eA":["K<k>","f"]},"lc":{"eA":["f","K<k>"]},"iP":{"at":[]},"lI":{"at":[]},"lH":{"eA":["L?","f"]},"mG":{"eA":["f","K<k>"]},"fg":{"bs":["fg"]},"y":{"bC":[],"bs":["bC"]},"dK":{"bs":["dK"]},"k":{"bC":[],"bs":["bC"]},"K":{"W":["1"],"t":["1"]},"bC":{"bs":["bC"]},"jd":{"hy":[]},"e1":{"W":["1"],"t":["1"]},"f":{"bs":["f"],"tr":[]},"n9":{"D":[]},"kG":{"at":[]},"e5":{"at":[]},"cP":{"at":[]},"hG":{"at":[]},"ly":{"at":[]},"jv":{"at":[]},"mB":{"at":[]},"hN":{"at":[]},"kW":{"at":[]},"m0":{"at":[]},"jq":{"at":[]},"nB":{"dv":[]},"bH":{"Ht":[]},"k4":{"mE":[]},"nv":{"mE":[]},"n4":{"mE":[]},"ne":{"Ad":[]},"eY":{"Ad":[]},"l7":{"D":[]},"fx":{"D":[]},"hi":{"D":[]},"hd":{"D":[]},"mA":{"D":[]},"bN":{"e0":[]},"bx":{"e0":[]},"cg":{"e0":[]},"cT":{"e0":[]},"m1":{"e0":[]},"fm":{"D":[]},"h5":{"D":[]},"iU":{"D":[]},"d1":{"D":[]},"l3":{"He":[]},"hJ":{"D":[]},"hk":{"D":[]},"kP":{"D":[]},"iv":{"D":[]},"hj":{"D":[]},"fA":{"D":[]},"fr":{"D":[]},"d_":{"D":[]},"e4":{"D":[]},"bn":{"D":[]},"fj":{"D":[]},"ln":{"H6":[]},"cx":{"D":[]},"ji":{"D":[]},"df":{"D":[]},"hI":{"D":[]},"b3":{"cB":[]},"jf":{"H9":[]},"mi":{"Hb":[]},"nC":{"cB":[]},"no":{"H8":[]},"nb":{"G7":[]},"jp":{"D":[]},"c1":{"bs":["c1"]},"bX":{"bs":["bX"]},"hn":{"D":[]},"ip":{"D":[]},"jD":{"D":[]},"ir":{"aq":[]},"n1":{"ae":[]},"kQ":{"aq":[]},"n2":{"ae":[]},"l5":{"aq":[]},"n6":{"ae":[]},"jF":{"D":[]},"iz":{"aq":[]},"n7":{"ae":[]},"la":{"aq":[]},"n8":{"ae":[]},"lu":{"aq":[]},"nd":{"ae":[]},"iX":{"aq":[]},"nj":{"ae":[]},"kR":{"H7":[]},"j6":{"aq":[]},"np":{"ae":[]},"mc":{"aq":[]},"nq":{"ae":[]},"mq":{"aq":[]},"nt":{"ae":[]},"mr":{"aq":[]},"nu":{"ae":[]},"mu":{"aq":[]},"nx":{"ae":[]},"mt":{"aq":[]},"nw":{"ae":[]},"mI":{"aq":[]},"nF":{"ae":[]},"mR":{"aq":[]},"nH":{"ae":[]},"nG":{"ae":[]},"mV":{"aq":[]},"nK":{"ae":[]},"ls":{"D":[]},"iE":{"D":[]},"iH":{"D":[]},"iI":{"D":[]},"fl":{"D":[]},"iF":{"D":[]},"fE":{"D":[]},"dw":{"D":[]},"hc":{"D":[]},"l6":{"FS":[]},"hq":{"D":[]},"hX":{"D":[]},"bw":{"D":[]},"kO":{"D":[]},"fe":{"D":[]},"l1":{"D":[]},"l4":{"D":[]},"ee":{"cR":[]},"mT":{"Ge":[]},"kJ":{"D":[]},"dl":{"D":[]},"cv":{"D":[]},"dN":{"D":[]},"bt":{"D":[]},"iW":{"D":[]},"iV":{"D":[]},"kM":{"c3":[]},"kN":{"c3":[]},"kT":{"c3":[]},"lv":{"c3":[]},"lJ":{"c3":[]},"lK":{"c3":[]},"lM":{"c3":[]},"ms":{"c3":[]},"jM":{"dz":[]},"fi":{"D":[]},"dM":{"D":[]},"n5":{"c3":[]},"eC":{"D":[]},"eB":{"D":[]},"eE":{"D":[]},"m2":{"D":[]},"mg":{"D":[]},"hH":{"D":[]},"c5":{"D":[]},"du":{"D":[]},"jo":{"D":[]},"c6":{"D":[]},"bG":{"D":[]},"lA":{"D":[]},"fN":{"D":[]},"cC":{"D":[]},"eL":{"D":[]},"eU":{"D":[]},"fc":{"D":[]},"d9":{"D":[]},"cQ":{"D":[]},"da":{"D":[]},"dH":{"D":[]},"dG":{"D":[]},"ew":{"D":[]},"ex":{"D":[]},"fd":{"D":[]},"ev":{"D":[]},"dQ":{"D":[]},"dc":{"D":[]},"dd":{"D":[]},"dR":{"D":[]},"dP":{"D":[]},"dS":{"D":[]},"cw":{"D":[]},"dO":{"D":[]},"cS":{"D":[]},"kC":{"D":[]},"bE":{"D":[]},"cz":{"D":[]},"eK":{"D":[]},"cZ":{"D":[]},"c2":{"D":[]},"bP":{"D":[]},"jm":{"D":[]},"bY":{"D":[]},"cm":{"D":[]},"cn":{"D":[]},"eQ":{"D":[]},"dx":{"D":[]},"nn":{"Cq":[]},"Go":{"K":["k"],"W":["k"],"t":["k"]},"c8":{"K":["k"],"W":["k"],"t":["k"]},"Hw":{"K":["k"],"W":["k"],"t":["k"]},"Gm":{"K":["k"],"W":["k"],"t":["k"]},"vF":{"K":["k"],"W":["k"],"t":["k"]},"Gn":{"K":["k"],"W":["k"],"t":["k"]},"vG":{"K":["k"],"W":["k"],"t":["k"]},"q6":{"K":["y"],"W":["y"],"t":["y"]},"q7":{"K":["y"],"W":["y"],"t":["y"]}}'))
A.Ip(v.typeUniverse,JSON.parse('{"hR":1,"ka":2,"bu":1,"jX":1,"k3":1,"l0":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",E:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nuniform vec3 uClearColor;\nuniform vec3 uSkyHorizon;\nuniform vec3 uSkyZenith;\nuniform vec3 uSkyGround;\nuniform float uSkyEnabled;\nuniform float uSkyHorizonGlow;\nuniform float uSkyStarDensity;\nuniform sampler2D uSkyTexture;\nuniform float uSkyTextureEnabled;\nuniform float uSkyRotation;\nuniform float uSkyExposure;\nuniform float uSkyTextureSrgb;\nuniform mat4 uInverseProjection;\nuniform mat4 uInverseView;\nuniform vec3 uCameraPosition;\nuniform float uCloudCoverage;\nuniform float uCloudDensity;\nuniform float uCloudBaseHeight;\nuniform float uCloudThickness;\nuniform float uCloudScale;\nuniform vec2 uCloudWind;\nuniform float uCloudPhase;\nuniform float uCloudDetail;\nuniform float uCloudSilverLining;\nuniform float uCloudSampleCount;\nuniform vec3 uCloudLightDirection;\nuniform vec3 uCloudLightColor;\nuniform float uCloudLightIntensity;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 acesToneMap(vec3 color){\n  return clamp((color*(2.51*color+0.03))/(color*(2.43*color+0.59)+0.14),0.0,1.0);\n}\n\nvec3 agxToneMap(vec3 color){\n  const mat3 agxMat=mat3(\n    0.842479062253094,0.0423282422610123,0.0423756549057051,\n    0.0784335999999992,0.878468636469772,0.0784336,\n    0.0792237451477643,0.0791661274605434,0.879142973793104\n  );\n  const mat3 agxMatInv=mat3(\n    1.19687902425764,-0.0528968517032958,-0.0529716355080549,\n    -0.0980208811401368,1.15190312990417,-0.0980434501171241,\n    -0.0990297440797205,-0.0989611768448433,1.15107367264185\n  );\n  vec3 val=agxMat*color;\n  val=clamp(log2(max(val,vec3(1e-10)))*0.0625+0.625,0.0,1.0);\n  val=val*val*val*(val*(val*6.0-15.0)+10.0);\n  val=agxMatInv*val;\n  return pow(max(val,vec3(0.0)),vec3(2.2));\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvec3 skyBackground(vec2 uv){\n  // A deliberately cheap, high-quality fallback sky: three atmospheric bands\n  // provide depth at every camera angle, while the tiny deterministic star\n  // field and horizon glow keep the clear background from reading as a flat\n  // color. It is an environment layer, not a game/weather simulation.\n  float lower=smoothstep(0.0,0.48,uv.y);\n  float upper=smoothstep(0.42,1.0,uv.y);\n  vec3 color=mix(uSkyGround,uSkyHorizon,lower);\n  color=mix(color,uSkyZenith,upper);\n  float horizonGlow=exp(-pow((uv.y-0.48)*7.0,2.0));\n  color+=uSkyHorizon*horizonGlow*clamp(uSkyHorizonGlow,0.,1.);\n  float starMask=smoothstep(0.62,0.92,uv.y);\n  float stars=step(1.0-clamp(uSkyStarDensity,0.,.1),hash(floor(uv*vec2(180.0,100.0))))*starMask;\n  color+=vec3(0.16,0.19,0.24)*stars;\n  return max(color,vec3(0.0));\n}\n\nfloat hash3(vec3 p){\n  return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);\n}\n\nfloat valueNoise(vec3 p){\n  vec3 i=floor(p);\n  vec3 f=fract(p);\n  f=f*f*(3.0-2.0*f);\n  float n000=hash3(i+vec3(0,0,0));\n  float n100=hash3(i+vec3(1,0,0));\n  float n010=hash3(i+vec3(0,1,0));\n  float n110=hash3(i+vec3(1,1,0));\n  float n001=hash3(i+vec3(0,0,1));\n  float n101=hash3(i+vec3(1,0,1));\n  float n011=hash3(i+vec3(0,1,1));\n  float n111=hash3(i+vec3(1,1,1));\n  float x00=mix(n000,n100,f.x);\n  float x10=mix(n010,n110,f.x);\n  float x01=mix(n001,n101,f.x);\n  float x11=mix(n011,n111,f.x);\n  return mix(mix(x00,x10,f.y),mix(x01,x11,f.y),f.z);\n}\n\nfloat cloudNoise(vec3 p){\n  float value=0.0;\n  float amplitude=0.5;\n  for(int octave=0;octave<4;octave++){\n    value+=valueNoise(p)*amplitude;\n    p=p*2.03+vec3(17.3,11.7,7.1);\n    amplitude*=0.5;\n  }\n  return value;\n}\n\nfloat cloudDensityAt(vec3 position){\n  float height01=clamp(\n    (position.y-uCloudBaseHeight)/max(uCloudThickness,0.001),\n    0.0,1.0\n  );\n  float vertical=smoothstep(0.0,0.12,height01)*\n    (1.0-smoothstep(0.72,1.0,height01));\n  vec3 q=position*max(uCloudScale,0.00001)+\n    vec3(uCloudWind.x*uCloudPhase,0.0,uCloudWind.y*uCloudPhase);\n  float macro=cloudNoise(q*0.82);\n  float detail=cloudNoise(q*2.7+vec3(23.0,5.0,41.0));\n  float shape=mix(macro,macro*0.68+detail*0.32,clamp(uCloudDetail,0.,1.));\n  float threshold=1.0-clamp(uCloudCoverage,0.,1.);\n  float body=smoothstep(threshold,threshold+0.26,shape);\n  return body*vertical*clamp(uCloudDensity,0.,1.);\n}\n\nvec4 volumetricClouds(vec3 worldDirection){\n  if(uCloudCoverage<=0.0001 || uCloudDensity<=0.0001 || worldDirection.y<=0.001){\n    return vec4(0.0);\n  }\n  float directionY=max(worldDirection.y,0.001);\n  float startT=(uCloudBaseHeight-uCameraPosition.y)/directionY;\n  float endT=(uCloudBaseHeight+uCloudThickness-uCameraPosition.y)/directionY;\n  startT=max(startT,0.0);\n  endT=max(endT,0.0);\n  if(endT<=startT) return vec4(0.0);\n  int sampleCount=int(clamp(uCloudSampleCount,4.,24.));\n  float stepLength=(endT-startT)/float(sampleCount);\n  float jitter=(hash(gl_FragCoord.xy+vec2(uCloudPhase*0.013))-0.5)*stepLength;\n  vec3 sunDirection=normalize(-uCloudLightDirection);\n  float transmittance=1.0;\n  vec3 inScatter=vec3(0.0);\n  for(int i=0;i<24;i++){\n    if(i>=sampleCount) break;\n    float t=startT+(float(i)+0.5)*stepLength+jitter;\n    vec3 position=uCameraPosition+worldDirection*t;\n    float density=cloudDensityAt(position);\n    float opticalDepth=density*stepLength*0.0035;\n    float segmentAlpha=1.0-exp(-opticalDepth);\n    float towardLight=cloudDensityAt(position+sunDirection*90.0);\n    float lightTransmittance=exp(-towardLight*0.025);\n    float phase=0.72+0.28*pow(max(dot(-worldDirection,sunDirection),0.0),2.0);\n    vec3 ambient=uSkyHorizon*0.32;\n    vec3 direct=uCloudLightColor*\n      (0.14+0.86*clamp(uCloudLightIntensity,0.,1.5))*phase;\n    float edge=pow(1.0-clamp(density,0.,1.),3.0)*uCloudSilverLining*0.22;\n    vec3 sampleLight=(ambient+direct)*lightTransmittance+vec3(edge);\n    inScatter+=transmittance*segmentAlpha*sampleLight;\n    transmittance*=1.0-segmentAlpha;\n    if(transmittance<0.01) break;\n  }\n  return vec4(inScatter,1.0-transmittance);\n}\n\nvec3 srgbToLinear(vec3 color){\n  vec3 low=color/12.92;\n  vec3 high=pow((color+0.055)/1.055,vec3(2.4));\n  return mix(low,high,step(vec3(0.04045),color));\n}\n\nvec3 worldDirectionForUv(vec2 uv){\n  vec2 ndc=uv*2.0-1.0;\n  vec4 viewPoint=uInverseProjection*vec4(ndc,1.0,1.0);\n  return normalize(viewPoint.xyz/viewPoint.w);\n}\n\nvec3 equirectangularSky(vec2 uv){\n  vec3 worldDirection=normalize((uInverseView*vec4(worldDirectionForUv(uv),0.0)).xyz);\n  float longitude=atan(worldDirection.z,worldDirection.x)+uSkyRotation;\n  float latitude=asin(clamp(worldDirection.y,-1.0,1.0));\n  vec2 sampleUv=vec2(\n    fract(longitude/(2.0*3.14159265359)+0.5),\n    0.5-latitude/3.14159265359\n  );\n  vec3 encoded=max(texture(uSkyTexture,sampleUv).rgb,vec3(0.0));\n  vec3 linear=mix(encoded,srgbToLinear(encoded),clamp(uSkyTextureSrgb,0.,1.));\n  return linear*max(uSkyExposure,0.0);\n}\n\nvec4 applyFxaa(sampler2D tex, vec2 uv){\n  vec2 texelSize=1.0/vec2(textureSize(tex,0));\n  vec3 rgbM=texture(tex,uv).rgb;\n  vec3 rgbNW=texture(tex,uv+vec2(-texelSize.x,-texelSize.y)).rgb;\n  vec3 rgbNE=texture(tex,uv+vec2( texelSize.x,-texelSize.y)).rgb;\n  vec3 rgbSW=texture(tex,uv+vec2(-texelSize.x, texelSize.y)).rgb;\n  vec3 rgbSE=texture(tex,uv+vec2( texelSize.x, texelSize.y)).rgb;\n\n  const vec3 luma=vec3(0.299,0.587,0.114);\n  float lumaM =dot(rgbM, luma);\n  float lumaNW=dot(rgbNW,luma);\n  float lumaNE=dot(rgbNE,luma);\n  float lumaSW=dot(rgbSW,luma);\n  float lumaSE=dot(rgbSE,luma);\n\n  float lumaMin=min(lumaM,min(min(lumaNW,lumaNE),min(lumaSW,lumaSE)));\n  float lumaMax=max(lumaM,max(max(lumaNW,lumaNE),max(lumaSW,lumaSE)));\n\n  float range=lumaMax-lumaMin;\n  if(range<max(0.04,lumaMax*0.125)){\n    return vec4(rgbM,1.0);\n  }\n\n  vec2 dir=vec2(\n    -((lumaNW+lumaNE)-(lumaSW+lumaSE)),\n    ((lumaNW+lumaSW)-(lumaNE+lumaSE))\n  );\n  float dirReduce=max((lumaNW+lumaNE+lumaSW+lumaSE)*0.03125,0.0078125);\n  float rcpDirMin=1.0/(min(abs(dir.x),abs(dir.y))+dirReduce);\n  dir=min(vec2(8.0),max(vec2(-8.0),dir*rcpDirMin))*texelSize;\n\n  vec3 rgbA=0.5*(\n    texture(tex,uv+dir*(1.0/3.0-0.5)).rgb+\n    texture(tex,uv+dir*(2.0/3.0-0.5)).rgb\n  );\n  vec3 rgbB=rgbA*0.5+0.25*(\n    texture(tex,uv+dir*-0.5).rgb+\n    texture(tex,uv+dir* 0.5).rgb\n  );\n  float lumaB=dot(rgbB,luma);\n  if((lumaB<lumaMin)||(lumaB>lumaMax)){\n    return vec4(rgbA,1.0);\n  }\n  return vec4(rgbB,1.0);\n}\n\nvoid main(){\n  vec4 rawSource=texture(uTex,vUv);\n  bool isBackground=uSkyEnabled>0.5 && distance(rawSource.rgb,uClearColor)<0.004;\n  vec4 source=isBackground?rawSource:applyFxaa(uTex,vUv);\n  // Lens spectral dispersion (radial chromatic aberration towards viewport edges)\n  if(!isBackground){\n    vec2 centerOffset=vUv-vec2(0.5);\n    float distSq=dot(centerOffset,centerOffset);\n    if(distSq>0.04){\n      vec2 chromaOffset=centerOffset*distSq*0.010;\n      source.r=applyFxaa(uTex,vUv-chromaOffset).r;\n      source.b=applyFxaa(uTex,vUv+chromaOffset).b;\n    }\n  }\n  // The world pass clears untouched pixels to uClearColor. Replace only that\n  // exact background, so the sky is always active without covering geometry.\n  if(isBackground){\n    vec3 viewDirection=worldDirectionForUv(vUv);\n    vec3 worldDirection=normalize((uInverseView*vec4(viewDirection,0.0)).xyz);\n    source.rgb=uSkyTextureEnabled>0.5\n      ? equirectangularSky(vUv)\n      : skyBackground(vUv);\n    vec4 clouds=volumetricClouds(worldDirection);\n    source.rgb=source.rgb* (1.0-clouds.a)+clouds.rgb;\n  }\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  vec3 mapped=uToneMap>3.0\n    ?agxToneMap(color)\n    :(uToneMap>1.5?acesToneMap(color):reinhardToneMap(color));\n  float toneMix=uToneMap>3.0\n    ?clamp((uToneMap-3.0)*2.0,0.,1.)\n    :(uToneMap>1.5?clamp(uToneMap-1.5,0.,1.):clamp(uToneMap,0.,1.));\n  color=mix(color,mapped,toneMix);\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",n:"Late Victorian Dual-Pitch Gabled Slate Roof",o:"Timber Framed Rafter Loft with Cold Water Storage",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was ",F:'{\n  "houseId": "quarantine-house-main",\n  "sourceRef": "lib/house/house.dart",\n  "status": "canonical-v1",\n  "presentationScope": "provisional-visible-place",\n  "storyAuthority": "external-story-data",\n  "modelScale": 2.25,\n  "exteriorMesh": {"format":"QHMX","version":1,"path":"assets/house/exterior/main_shell.qhmx","materialsPath":"assets/house/exterior/materials.json","viewOnly":true,"wallThickness":0.63,"partitionThickness":0.27},\n  "inventoryPath": "assets/house/inventory.json",\n  "soundscapePath": "assets/house/soundscape.json",\n  "surfaceMaterialsPath": "assets/house/materials.json",\n  "residence": {"roomId":"living-room","spawn":[1.55,0,2.35],"restAnchor":"placement-living-sofa","returnPortalId":"hall-living"},\n  "levels": [\n    {"id":"cellar","kind":"below-grade","floorY":-2.0},\n    {"id":"ground","kind":"ground","floorY":0.0},\n    {"id":"first","kind":"first","floorY":2.8}\n  ],\n  "rooms": [\n    {"id":"living-room","floor":"ground","origin":[0,0,0],"size":[4.5,2.6,4.0],"surface":{"wall":"wallpaper-stripes","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"living-north-west","facing":"north","offset":0.5,"sill":0.6,"width":1.2,"height":1.2},{"id":"living-north-east","facing":"north","offset":2.7,"sill":0.6,"width":1.2,"height":1.2}],"portalIds":["hall-living","kitchen-living"],"focalComposition":{"anchor":"fireplace-wireless","clearRoute":[[3.85,0.0,0.35],[4.5,0.0,1.8]],"furnitureScale":5,"microScale":20}},\n    {"id":"hall","floor":"ground","origin":[4.5,0,0],"size":[2.5,2.6,7.0],"surface":{"wall":"wallpaper-damask","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"hall-fanlight","facing":"north","offset":0.85,"sill":2.15,"width":0.8,"height":0.35}],"portalIds":["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],"focalComposition":{"anchor":"front-door-clock","clearRoute":[[5.75,0.0,0.2],[5.75,2.8,5.9]],"furnitureScale":6,"microScale":24}},\n    {"id":"kitchen","floor":"ground","origin":[0,0,4.0],"size":[4.5,2.5,3.0],"surface":{"wall":"wallpaper-floral","floor":"floor-linoleum","ceiling":"ceiling-plaster"},"windows":[{"id":"kitchen-south","facing":"south","offset":1.5,"sill":0.7,"width":1.2,"height":1.1},{"id":"kitchen-west","facing":"west","offset":1.0,"sill":0.8,"width":0.9,"height":1.0}],"portalIds":["hall-kitchen","kitchen-living"],"focalComposition":{"anchor":"range-worktable","clearRoute":[[4.2,0.0,4.45],[3.4,0.0,6.5]],"furnitureScale":7,"microScale":28}},\n    {"id":"cellar","floor":"cellar","origin":[1.0,-2.0,2.0],"size":[4.0,2.0,4.0],"surface":{"wall":"wallpaper-damp","floor":"floor-concrete","ceiling":"ceiling-pipes"},"windows":[],"portalIds":["hall-cellar"],"focalComposition":{"anchor":"coal-service-wall","clearRoute":[[4.2,-2.0,3.0],[2.0,-2.0,5.6]],"furnitureScale":4,"microScale":15}},\n    {"id":"bedroom","floor":"first","origin":[0,2.8,0],"size":[4.5,2.4,4.0],"surface":{"wall":"wallpaper-faded","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"bedroom-north-west","facing":"north","offset":0.7,"sill":0.7,"width":1.1,"height":1.1},{"id":"bedroom-north-east","facing":"north","offset":2.7,"sill":0.7,"width":1.0,"height":1.1}],"portalIds":["landing-bedroom"],"focalComposition":{"anchor":"bed-journal-desk","clearRoute":[[4.2,2.8,0.3],[3.6,2.8,3.4]],"furnitureScale":6,"microScale":22}},\n    {"id":"landing","floor":"first","origin":[4.5,2.8,0],"size":[2.5,2.4,3.0],"surface":{"wall":"wallpaper-damask","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[],"portalIds":["hall-landing","landing-bedroom","landing-bathroom","landing-spare"],"focalComposition":{"anchor":"stair-newel","clearRoute":[[5.7,2.8,0.3],[5.7,2.8,2.7]],"furnitureScale":3,"microScale":12}},\n    {"id":"bathroom","floor":"first","origin":[4.5,2.8,3.0],"size":[2.5,2.4,2.5],"surface":{"wall":"wallpaper-tiles","floor":"floor-tiles","ceiling":"ceiling-plaster"},"windows":[{"id":"bathroom-east","facing":"east","offset":0.9,"sill":1.0,"width":0.7,"height":1.0,"frosted":true}],"portalIds":["landing-bathroom"],"focalComposition":{"anchor":"bath-cistern","clearRoute":[[4.8,2.8,3.2],[6.7,2.8,4.5]],"furnitureScale":4,"microScale":16}},\n    {"id":"spare-room","floor":"first","origin":[0,2.8,4.0],"size":[4.5,2.1,3.0],"surface":{"wall":"wallpaper-peeling","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"spare-south","facing":"south","offset":1.8,"sill":0.7,"width":0.9,"height":0.9}],"portalIds":["landing-spare"],"focalComposition":{"anchor":"sheeted-furniture","clearRoute":[[4.1,2.8,4.3],[2.6,2.8,6.6]],"furnitureScale":5,"microScale":18}}\n  ],\n  "portals": [\n    {"id":"front-door","a":"hall","b":"outside","facingA":"north","facingB":"south","offsetA":0.8,"offsetB":0.0,"width":0.9,"height":2.1,"doorKit":"kit-front-door-recessed","exterior":true},\n    {"id":"hall-living","a":"hall","b":"living-room","facingA":"west","facingB":"east","offsetA":1.8,"offsetB":1.8,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"hall-kitchen","a":"hall","b":"kitchen","facingA":"west","facingB":"east","offsetA":4.9,"offsetB":1.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"kitchen-living","a":"kitchen","b":"living-room","facingA":"north","facingB":"south","offsetA":2.0,"offsetB":2.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"hall-cellar","a":"hall","b":"cellar","facingA":"south","facingB":"east","offsetA":0.5,"offsetB":1.5,"width":0.9,"height":2.0,"doorKit":"kit-cellar-door-grille","open":false,"sticks":true},\n    {"id":"hall-landing","a":"hall","b":"landing","facingA":"east","facingB":"east","offsetA":4.0,"offsetB":0.7,"width":1.2,"height":2.1,"stair":true},\n    {"id":"landing-bedroom","a":"landing","b":"bedroom","facingA":"west","facingB":"east","offsetA":1.0,"offsetB":1.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"landing-bathroom","a":"landing","b":"bathroom","facingA":"south","facingB":"north","offsetA":1.0,"offsetB":0.8,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"landing-spare","a":"landing","b":"spare-room","facingA":"south","facingB":"north","offsetA":0.1,"offsetB":2.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"}\n  ],\n  "stairs": [{"id":"hall-stairs","portalId":"hall-landing","landingHeights":[1.4,2.8,4.2],"min":[5.0,0,2.8],"max":[6.5,4.2,6.0],"lowerEye":[5.75,1.65,5.8],"upperEye":[5.75,4.45,2.2]}],\n  "exteriorCells":["front","rear-service","side-boundary","roof-drainage","street","opposite-house","neighbor-roofs"]\n}'}
var t=(function rtii(){var s=A.a2
return{mq:s("d9"),dx:s("il"),bC:s("cO"),Dd:s("bV"),oz:s("cc"),zU:s("eo"),v:s("bq"),iF:s("kI"),ul:s("dG"),EL:s("da"),xs:s("cQ"),gc:s("dH"),t3:s("kK"),mD:s("eq"),lT:s("er"),bJ:s("es"),gI:s("et"),ya:s("eu"),z3:s("bX"),Bu:s("h9"),ml:s("is"),je:s("bc"),rO:s("hb"),sU:s("dJ"),hO:s("bs<@>"),CH:s("iw"),w:s("a3<f,f>"),I:s("a3<f,k>"),M:s("aP<f>"),f7:s("fg"),fP:s("bY"),yb:s("dK"),he:s("W<@>"),yW:s("cv"),g:s("ce"),Ct:s("D"),yt:s("at"),hl:s("a8"),B:s("q6"),cE:s("q7"),pH:s("b1"),Fr:s("db"),BO:s("fk"),jI:s("bt"),ls:s("aY<az>"),xJ:s("aY<f>(f)"),zL:s("aY<c8>(f)"),tX:s("aY<c8>(f,f)"),vS:s("dO"),aJ:s("dP"),x:s("cw"),bK:s("dQ"),gm:s("dR"),dn:s("dc"),mx:s("dS"),j_:s("dd"),EJ:s("de<c2,f>"),_:s("cR"),Eb:s("cS"),qX:s("eE"),mF:s("dh"),iO:s("cT"),oW:s("di"),fl:s("cU"),FA:s("t<iw>"),CB:s("t<dm>"),xw:s("t<dp>"),Eh:s("t<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(f,y,y,f,y,y,y)>"),yT:s("t<f>"),x6:s("t<c7>"),A1:s("t<eT>"),oJ:s("t<y>"),tY:s("t<@>"),iC:s("t<k>"),Fg:s("x<cO>"),n1:s("x<bV>"),nl:s("x<cc>"),lE:s("x<io>"),t9:s("x<eo>"),AO:s("x<is>"),jC:s("x<bc>"),km:s("x<hb>"),sa:s("x<cd>"),ns:s("x<lb>"),U:s("x<ce>"),uH:s("x<lf>"),Dl:s("x<a8>"),xn:s("x<lj>"),A5:s("x<lk>"),p:s("x<bt>"),iJ:s("x<aY<~>>"),pC:s("x<lp>"),C1:s("x<cR>"),ka:s("x<bD>"),Fm:s("x<fn>"),op:s("x<dg>"),hr:s("x<dU>"),s3:s("x<cT>"),e:s("x<aj>"),Bv:s("x<lL>"),yH:s("x<lN>"),Bq:s("x<P<f,f>>"),rq:s("x<V<f,L>>"),A7:s("x<V<f,f>>"),cs:s("x<V<f,@>>"),bk:s("x<V<f,L?>>"),a6:s("x<dm>"),p0:s("x<ch>"),d:s("x<bN>"),w4:s("x<fs>"),pq:s("x<aw>"),bA:s("x<dW>"),xz:s("x<bF>"),eq:s("x<fu>"),s0:s("x<fv>"),hc:s("x<dn>"),ea:s("x<dX>"),Fk:s("x<m5>"),qP:s("x<cj>"),W:s("x<cA>"),d8:s("x<j7>"),Fa:s("x<j8>"),fH:s("x<jb>"),F7:s("x<dp>"),vN:s("x<jc>"),kv:s("x<fz>"),nR:s("x<+(f,K<cj>)>"),kd:s("x<+(f,f)>"),c2:s("x<+(f,B)>"),rh:s("x<+influence,light(y,bQ)>"),z4:s("x<+influence,source(y,cp)>"),wt:s("x<+(k,f)>"),ff:s("x<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(f,y,y,f,y,y,y)>"),e_:s("x<aq>"),u:s("x<ae>"),Ft:s("x<jf>"),C:s("x<Q>"),h1:s("x<aS>"),s2:s("x<cB>"),eY:s("x<fB>"),xB:s("x<ds>"),rn:s("x<mk>"),gg:s("x<ml>"),D:s("x<ck>"),yv:s("x<mm>"),wM:s("x<mn>"),hT:s("x<cD>"),El:s("x<hM>"),AM:s("x<b6<bX>>"),fs:s("x<b6<c1>>"),cv:s("x<bQ>"),DZ:s("x<fG>"),s:s("x<f>"),r8:s("x<c7>"),fa:s("x<cl>"),E7:s("x<hQ>"),k:s("x<B>"),fi:s("x<c>"),v5:s("x<bg>"),ld:s("x<jz>"),Dc:s("x<e8>"),Fi:s("x<co>"),jV:s("x<dy>"),xL:s("x<cp>"),su:s("x<eR>"),wb:s("x<eS>"),eQ:s("x<cE>"),uI:s("x<eT>"),yo:s("x<fJ>"),nm:s("x<fL>"),uk:s("x<bK>"),wf:s("x<jM>"),il:s("x<eX>"),ow:s("x<nl>"),j5:s("x<nm>"),pv:s("x<hW>"),Fy:s("x<eZ<c_>>"),EM:s("x<eZ<c0>>"),w_:s("x<eZ<aS>>"),f2:s("x<eZ<dA>>"),n:s("x<y>"),zz:s("x<@>"),t:s("x<k>"),Cf:s("x<L?>"),AN:s("x<bC>"),E:s("iM"),m:s("aj"),ud:s("dV"),yO:s("cf<@>"),AQ:s("K<bc>"),sB:s("K<cd>"),hk:s("K<ce>"),b:s("K<bD>"),xp:s("K<cT>"),nx:s("K<aj>"),rW:s("K<V<f,f>>"),qr:s("K<bN>"),R:s("K<aw>"),fG:s("K<dn>"),Es:s("K<cj>"),DX:s("K<+(f,f)>"),pL:s("K<+(k,f)>"),bE:s("K<aS>"),fx:s("K<ds>"),r6:s("K<ck>"),yu:s("K<cD>"),a:s("K<f>"),uh:s("K<jz>"),D0:s("K<e8>"),cf:s("K<co>"),p7:s("K<dy>"),dd:s("K<y>"),j:s("K<@>"),L:s("K<k>"),ik:s("K<aj?>"),vX:s("K<L?>"),m2:s("iR"),h6:s("P<f,b1>"),gJ:s("P<f,db>"),q:s("P<f,f>"),no:s("P<f,bx>"),AC:s("P<@,@>"),ou:s("P<k,f>"),pr:s("P<k,@>"),yx:s("P<f,K<f>>"),fq:s("P<f,V<f,@>>"),mf:s("V<f,cR>"),vD:s("V<f,cg>"),of:s("V<f,L>"),ap:s("V<f,aw>"),G:s("V<f,f>"),qH:s("V<f,e4>"),m0:s("V<f,l>"),gG:s("V<f,y>"),P:s("V<f,@>"),f:s("V<@,@>"),eU:s("V<k,f>"),pG:s("V<k,fH>"),tQ:s("V<k,fI>"),Bx:s("V<f,K<f>>"),oZ:s("V<f,L?>"),q1:s("V<cn,K<co>>"),ee:s("V<k,V<f,f>>"),dH:s("I<k,f>"),jT:s("I<f,f?>"),w1:s("c_"),pw:s("cg"),jt:s("dm"),wl:s("ch"),kc:s("bN"),aw:s("fs"),mL:s("hz"),rV:s("hB"),mV:s("ft"),c:s("az"),K:s("L"),Cx:s("L(hD)"),BB:s("c1"),A:s("aw"),oP:s("dW"),wJ:s("bE"),E4:s("bF"),zV:s("fu"),A_:s("dX"),h:s("cj"),DL:s("j5"),AB:s("m7"),yi:s("hC"),rx:s("j7"),c_:s("j8"),zC:s("m9"),xK:s("e_"),cw:s("jb"),z0:s("dp"),Dp:s("jc"),Y:s("fz"),iM:s("LM"),ep:s("+()"),k0:s("+(bN,c0)"),ut:s("+(bx,dA)"),rf:s("+(y,y)"),mn:s("+influence,light(y,bQ)"),bG:s("+influence,source(y,cp)"),tK:s("+effectiveScore,light,score(y,bc,y)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(f,y,y,f,y,y,y)"),ez:s("jd"),wZ:s("ae"),lg:s("jg"),tc:s("dq<cT,aS>"),ja:s("dq<cg,c_>"),wm:s("dq<bN,c0>"),qq:s("dq<bx,dA>"),j2:s("Q"),m3:s("aS"),yz:s("cB"),J:s("fB"),lW:s("dr"),F3:s("ds"),Dm:s("ck"),Q:s("e1<f>"),oG:s("e1<k>"),en:s("bP"),gl:s("bm"),gn:s("c5"),r:s("cD"),u5:s("bG"),is:s("c6"),ho:s("hM"),EH:s("b6<bX>"),E0:s("b6<c1>"),l:s("dv"),w8:s("fG"),qL:s("bw"),N:s("f"),dc:s("f(k)"),Aj:s("bx"),jP:s("c7"),o:s("cl"),bp:s("e4"),sg:s("ap"),bs:s("e5"),ys:s("vF"),tu:s("vG"),uo:s("c8"),qF:s("eN"),hL:s("eP<f,f>"),qt:s("mD"),eP:s("mE"),zo:s("mH"),cV:s("B"),a7:s("c"),qY:s("bg"),T:s("c9"),gM:s("cm"),hF:s("cn"),vw:s("fH"),BX:s("fI"),aA:s("e8"),AP:s("co"),sy:s("mQ"),bB:s("bz"),aS:s("dy"),cZ:s("eR"),EI:s("eS"),uz:s("cE"),qR:s("eT"),fu:s("fJ"),xe:s("hU"),fw:s("F<bY>"),vL:s("F<cv>"),vK:s("F<cw>"),Fj:s("F<bG>"),rZ:s("F<c6>"),vY:s("F<f>"),g2:s("F<cm>"),ni:s("F<cn>"),rt:s("R<bP>"),xG:s("R<bm>"),fW:s("fL"),hR:s("as<@>"),BT:s("jJ<L?,L?>"),gE:s("b3"),Ez:s("dz"),rL:s("hV"),xT:s("eX"),la:s("nk"),qS:s("jR"),rK:s("hY"),EF:s("ca<+(f,bx)>"),oe:s("ca<ck>"),a_:s("k6"),V:s("k7"),jm:s("k8"),y:s("l"),Bs:s("l()"),C3:s("l(h7)"),kr:s("l(bY)"),e2:s("l(cv)"),rg:s("l(cw)"),bl:s("l(L)"),pz:s("l(bP)"),aV:s("l(bm)"),y2:s("l(bG)"),ty:s("l(c6)"),Ag:s("l(f)"),da:s("l(cm)"),u_:s("l(cn)"),i:s("y"),z:s("@"),pF:s("@()"),h_:s("@(L)"),nW:s("@(L,dv)"),S:s("k"),eZ:s("aY<az>?"),r9:s("x<L?>?"),gt:s("aj?"),jS:s("K<@>?"),nV:s("V<f,@>?"),yq:s("V<@,@>?"),jd:s("V<f,K<f>>?"),X:s("L?"),dM:s("Cq?"),dR:s("f?"),oI:s("f?(f)"),Fx:s("c8?"),F:s("ea<@,@>?"),Af:s("nh?"),k7:s("l?"),wK:s("l(hK)?"),u6:s("y?"),lo:s("k?"),s7:s("bC?"),Z:s("~()?"),Cv:s("~(en)?"),kC:s("~(ep)?"),pf:s("~(hg)?"),hq:s("~(ho)?"),CA:s("~(dT)?"),hQ:s("~(c2)?"),Ci:s("~(bP)?"),nf:s("~(c6,bG)?"),DI:s("~(f,y)?"),xl:s("~(l)?"),vR:s("~(k)?"),dt:s("~(k,f)?"),fY:s("bC"),H:s("~"),O:s("~()"),m1:s("~(f,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.kn=J.lB.prototype
B.a=J.x.prototype
B.d=J.iL.prototype
B.b=J.fo.prototype
B.c=J.eG.prototype
B.kp=J.dV.prototype
B.kq=J.iO.prototype
B.n=A.iY.prototype
B.a8=A.j1.prototype
B.ec=J.m3.prototype
B.cj=J.eN.prototype
B.ap=new A.d9(1,"standard")
B.V=new A.kB(B.ap)
B.cs=new A.d9(0,"concise")
B.ct=new A.d9(2,"verbose")
B.aI=new A.en(null,null,null,null,null)
B.t3=new A.kC(0,"none")
B.a5=new A.h5(0,"opaque")
B.b5=new A.h5(1,"masked")
B.W=new A.h5(2,"blended")
B.f0=new A.kF(!1,127)
B.f1=new A.kF(!0,127)
B.b6=new A.ip(0,"world")
B.f2=new A.ip(1,"camera")
B.f3=new A.kJ(4,"ambience")
B.cx=new A.cQ(3,"mono")
B.b7=new A.dH(0,"full")
B.cw=new A.cQ(0,"auto")
B.cv=new A.da(1,"standard")
B.cu=new A.dG(0,"defaultMix")
B.b8=new A.ep(B.cw,B.cv,B.b7,B.cu)
B.fa=new A.fc(0,"broadcast")
B.fb=new A.fc(1,"visitor")
B.fc=new A.fc(2,"aftermath")
B.fd=new A.fc(3,"ending")
B.aY=new A.mg(0,"pixeldart")
B.fe=new A.iq(B.aY,!0,!1,null,!1,null)
B.ff=new A.iq(B.aY,!1,!1,null,!1,null)
B.cz=new A.ev(1,"capturing")
B.fg=new A.dI(B.cz,null)
B.cA=new A.ev(3,"rejected")
B.b9=new A.dI(B.cA,null)
B.cB=new A.ev(4,"applied")
B.cy=new A.dI(B.cB,null)
B.cC=new A.ev(5,"cancelled")
B.fh=new A.dI(B.cC,null)
B.ba=new A.ev(2,"conflict")
B.aJ=new A.kO(0,"add")
B.fl=new A.fe(0,"zero")
B.aq=new A.fe(1,"one")
B.A=new A.kP(0,"alpha")
B.N=new A.ew(1,"button")
B.q=new A.ex(0,"normal")
B.fo=new A.br("settings.back",B.N,"back","back to pause menu",B.q)
B.aK=new A.ew(0,"heading")
B.fp=new A.br("settings.heading",B.aK,"Settings",null,B.q)
B.fq=new A.br("settings.controls.heading",B.aK,"Controls",null,B.q)
B.fr=new A.br("settings.controls.back",B.N,"back","back to settings categories",B.q)
B.fs=new A.br("pause.heading",B.aK,"Paused",null,B.q)
B.ft=new A.ew(3,"slider")
B.fu=new A.ew(4,"toggle")
B.cD=new A.ew(5,"keybind")
B.aL=new A.ex(5,"disabled")
B.fv=new A.ex(6,"error")
B.fw=new A.ex(7,"destructive")
B.cE=new A.ex(8,"remapping")
B.cF=new A.il()
B.fx=new A.ox()
B.fy=new A.kE()
B.fz=new A.oD()
B.t4=new A.pi()
B.fA=new A.kL()
B.cG=new A.pu()
B.fB=new A.iB(A.a2("iB<0&>"))
B.cH=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.fC=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.fH=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.fD=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.fG=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.fF=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.fE=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.cI=function(hooks) { return hooks; }

B.f=new A.lH()
B.fI=new A.t3()
B.fJ=new A.m0()
B.t6=new A.tB()
B.fK=new A.tC()
B.cJ=new A.tE()
B.fL=new A.tI()
B.fM=new A.tM()
B.fN=new A.ue()
B.fO=new A.ds()
B.aZ=new A.cC(1,"gradeLUT")
B.fP=new A.ds()
B.fQ=new A.ui()
B.fR=new A.uk()
B.h=new A.ur()
B.cK=new A.mG()
B.cL=new A.vL()
B.t5=new A.l3()
B.fS=new A.wh()
B.bb=new A.ne()
B.B=new A.nr()
B.aM=new A.nB()
B.fT=new A.ha(1.3089969389957472,0.1,60)
B.fU=new A.ha(1.0471975511965976,0.1,60)
B.fV=new A.ha(0.8726646259971648,0.08,45)
B.X=new A.hc(0,"colorOnly")
B.cM=new A.hc(1,"colorAndDepth")
B.bc=new A.hc(2,"depthOnly")
B.fW=new A.iv(0,"linear")
B.bd=new A.iv(1,"srgb")
B.cN=new A.hd(0,"open")
B.fX=new A.hd(1,"committed")
B.fY=new A.hd(2,"aborted")
B.be=new A.hi(0,"open")
B.h4=new A.hi(1,"committed")
B.h5=new A.hi(2,"rolledBack")
B.aN=new A.l1(1,"back")
B.aO=new A.l4(0,"less")
B.h6=new A.hj(0,"off")
B.cO=new A.hj(1,"errorsOnly")
B.h7=new A.hj(2,"full")
B.cP=new A.l7(2,"error")
B.aP=new A.bY(0,"open")
B.cQ=new A.bY(1,"chain")
B.cR=new A.bY(2,"throughDoor")
B.cS=new A.bY(3,"letterbox")
B.ar=new A.bY(4,"ignore")
B.C=new A.hk(0,"opaque")
B.h8=new A.hk(1,"masked")
B.as=new A.hk(2,"blended")
B.cT=new A.hl(!1,B.aO,!1,!0,B.aq,B.aq,B.aJ,!1,B.aN,!0,!1,!0,!0,!0,!0,!1)
B.h9=new A.hl(!0,B.aO,!1,!0,B.aq,B.aq,B.aJ,!0,B.aN,!0,!1,!0,!0,!0,!0,!1)
B.fm=new A.fe(2,"srcAlpha")
B.fn=new A.fe(3,"oneMinusSrcAlpha")
B.ha=new A.hl(!0,B.aO,!1,!0,B.fm,B.fn,B.aJ,!0,B.aN,!0,!1,!0,!0,!0,!0,!1)
B.hb=new A.dK(0)
B.hc=new A.dK(22e4)
B.hd=new A.dK(24e5)
B.cU=new A.cv(0,"compliance")
B.he=new A.hm(B.cU)
B.cV=new A.cv(1,"rupture")
B.hf=new A.hm(B.cV)
B.cW=new A.cv(2,"synchronisation")
B.hg=new A.hm(B.cW)
B.cX=new A.fi(0,"front")
B.hh=new A.fi(1,"rearService")
B.hi=new A.fi(2,"sideBoundary")
B.hj=new A.fi(3,"roofline")
B.D=new A.eB(0,"north")
B.at=new A.eB(1,"east")
B.H=new A.eB(2,"south")
B.au=new A.eB(3,"west")
B.hk=new A.eC(0,"ground")
B.hl=new A.eC(1,"first")
B.hm=new A.eC(2,"hidden")
B.hn=new A.dM(0,"mantle")
B.ho=new A.dM(1,"portal")
B.hq=new A.dM(3,"inventory")
B.cY=new A.dM(4,"aftermath")
B.hp=new A.dM(2,"window")
B.hs=new A.eD(B.hp,"shutter","the shutter")
B.hr=new A.dM(5,"none")
B.ht=new A.eD(B.hr,null,null)
B.hu=new A.A("saved mantle history is malformed",null,null)
B.hv=new A.A("rupture elapsed time is malformed",null,null)
B.hw=new A.A("presentation keys must be strings",null,null)
B.hx=new A.A("model package payload hash mismatch",null,null)
B.hy=new A.A("unsupported accessibility profile",null,null)
B.hz=new A.A("unsupported promoted model index schema",null,null)
B.hA=new A.A("materialSlot is required",null,null)
B.hB=new A.A("weather audio input is not finite",null,null)
B.hC=new A.A("inventory inspections must be an object",null,null)
B.hD=new A.A("screenplay event random range is invalid",null,null)
B.cZ=new A.A("saved mantle state is malformed",null,null)
B.hE=new A.A("inactive rupture has elapsed time",null,null)
B.hF=new A.A("control sensitivity is outside 0.1\u20133.0",null,null)
B.hG=new A.A("invalid action bindings",null,null)
B.hH=new A.A("Shader Lab document controls are incomplete",null,null)
B.hI=new A.A("weather audio input is out of bounds",null,null)
B.hJ=new A.A("listener room is empty",null,null)
B.hK=new A.A("control bindings conflict",null,null)
B.hL=new A.A("saved difficulty state is malformed",null,null)
B.hM=new A.A("weatherSurfaces save data must be an object",null,null)
B.hN=new A.A("residence.restAnchor cannot be empty",null,null)
B.hO=new A.A("saved house drift state is malformed",null,null)
B.hP=new A.A("saved sleep record is malformed",null,null)
B.hQ=new A.A("UI scale must be between 0.8 and 2.0",null,null)
B.hR=new A.A("manifest string array is malformed",null,null)
B.hS=new A.A("weather audio event is invalid",null,null)
B.hT=new A.A("unsupported settings store",null,null)
B.hU=new A.A("screenplay scene must be an object",null,null)
B.hV=new A.A("settings values must be an object",null,null)
B.hW=new A.A("saved day-loop sleepHistory must be a list",null,null)
B.hX=new A.A("invalid anisotropy limit",null,null)
B.hY=new A.A("weather audio frame is invalid",null,null)
B.hZ=new A.A("requested debug mode is not available",null,null)
B.i_=new A.A("audio event position is not finite",null,null)
B.i0=new A.A("event sequence must be non-negative",null,null)
B.i1=new A.A("screenplay branch is invalid",null,null)
B.i2=new A.A("inventory inspection counts are invalid",null,null)
B.i3=new A.A("only keybinds can be remapping",null,null)
B.i4=new A.A("modelScale must be positive and finite",null,null)
B.i5=new A.A("weather audio layer is not finite",null,null)
B.i6=new A.A("Invalid database dialogue package",null,null)
B.i7=new A.A("listener position is not finite",null,null)
B.i8=new A.A("screenplay event has invalid core fields",null,null)
B.i9=new A.A("invalid action ID",null,null)
B.ia=new A.A("invalid Shader Lab debug mode",null,null)
B.ib=new A.A("saved window state is malformed",null,null)
B.ic=new A.A("manifest socket map is malformed",null,null)
B.id=new A.A("unsupported graphics preset",null,null)
B.ie=new A.A("save run and meta must be objects",null,null)
B.ig=new A.A("saved house state is malformed",null,null)
B.ih=new A.A("saved sleep record must be an object",null,null)
B.ii=new A.A("model package parts must be non-empty",null,null)
B.ij=new A.A("sound cue must be a non-empty string",null,null)
B.ik=new A.A("saved session run is malformed",null,null)
B.il=new A.A("save map keys must be strings",null,null)
B.im=new A.A("unsupported graphics profile",null,null)
B.io=new A.A("model package exceeds payload count limit",null,null)
B.ip=new A.A("screenplay scene has invalid id, day, or title",null,null)
B.iq=new A.A("unsupported audio options",null,null)
B.ir=new A.A("transform.scale must be positive",null,null)
B.is=new A.A("Escape is reserved for pause navigation",null,null)
B.it=new A.A("saved day-loop state is malformed",null,null)
B.iu=new A.A("rupture extinguished mantle is unknown",null,null)
B.iv=new A.A("model package exceeds part limit",null,null)
B.d_=new A.A("unsupported controls profile",null,null)
B.iw=new A.A("promoted model index entry is malformed",null,null)
B.d0=new A.A("saved portal state is malformed",null,null)
B.ix=new A.A("acoustic portal profile is not finite",null,null)
B.iy=new A.A("model package exceeds total byte limit",null,null)
B.iz=new A.A("unsupported model package schema",null,null)
B.iA=new A.A("manifest socket names are malformed",null,null)
B.iB=new A.A("saved house state does not match this house",null,null)
B.iC=new A.A("presentation snapshot contains a non-finite number",null,null)
B.iD=new A.A("screenplay array contains invalid text",null,null)
B.iE=new A.A("weather audio layer identity is empty",null,null)
B.iF=new A.A("screenplay event day/hour is out of range",null,null)
B.iG=new A.A("unsupported gameplay settings profile",null,null)
B.iH=new A.A("save contains a non-finite number",null,null)
B.iI=new A.A("unsupported graphics store",null,null)
B.iJ=new A.A("screenplay option is invalid",null,null)
B.iL=new A.A("duplicate weather audio event",null,null)
B.iK=new A.A("duplicate weather audio layer",null,null)
B.iM=new A.A("screenplay needs sources and scenes arrays",null,null)
B.iN=new A.A("brush component needs an id and label",null,null)
B.iO=new A.A("text.json root must be an object",null,null)
B.iP=new A.A("screenplay root must be an object",null,null)
B.iQ=new A.A("event kind is empty",null,null)
B.iR=new A.A("unsupported Shader Lab document schema",null,null)
B.iS=new A.A("screenplay event effects are invalid",null,null)
B.iT=new A.A("promoted model index entries are required",null,null)
B.iU=new A.A("weather surface state must be an object",null,null)
B.iV=new A.A("invalid control binding token",null,null)
B.iW=new A.A("audio transmission muffle is invalid",null,null)
B.iX=new A.A("acoustic portal muffle order is invalid",null,null)
B.iY=new A.A("unsupported settings profile",null,null)
B.iZ=new A.A("saved session clock is malformed",null,null)
B.j_=new A.A("weather surface room ID must be a string",null,null)
B.j0=new A.A("rupture mantle IDs are malformed",null,null)
B.j1=new A.A("invalid gameplay setting: contextualReminders",null,null)
B.j2=new A.A("invalid screen-reader verbosity",null,null)
B.j3=new A.A("saved sleep record has an unknown enum",null,null)
B.j4=new A.A("weather audio layer is out of bounds",null,null)
B.j5=new A.A("malformed Shader Lab control",null,null)
B.j6=new A.A("audio cue variants are empty",null,null)
B.j7=new A.A("manifest numeric array is malformed",null,null)
B.j8=new A.A("screenplay beat has invalid kind or text",null,null)
B.j9=new A.A("save root must be an object",null,null)
B.ja=new A.A("Shader Lab document must be an object",null,null)
B.jb=new A.A("audio event identity is empty",null,null)
B.jc=new A.A("screenplay event random range is out of range",null,null)
B.jd=new A.A("render capabilities contain invalid limits",null,null)
B.je=new A.A("saved house overrides are malformed",null,null)
B.Q=new A.aZ(0,0,0)
B.br=new A.aZ(1,1,1)
B.lu=s([],t.Fk)
B.bB=s([],t.cv)
B.lv=s([],t.xL)
B.lw=s([],t.E7)
B.jf=new A.ll(B.Q,B.Q,0,1,null,null,B.br,0.02,0,0.7,0.35,1,12,1,1,1,1,1,1,1,0.003,B.Q,0,0,B.br,0,null,B.lu,B.bB,B.lv,B.lw,null)
B.d1=new A.b1(0,0,0)
B.jg=new A.fj(0,"idle")
B.av=new A.fj(1,"active")
B.jh=new A.fj(2,"ended")
B.ji=new A.fj(3,"aborted")
B.bf=new A.hn(0,"outside")
B.jj=new A.hn(1,"intersects")
B.jk=new A.hn(2,"inside")
B.I=new A.bt(0,"circulation")
B.d2=new A.bt(1,"focal")
B.d3=new A.bt(2,"conversational")
B.d4=new A.bt(3,"media")
B.d5=new A.bt(4,"culinary")
B.d6=new A.bt(5,"sanitary")
B.d7=new A.bt(6,"sleeping")
B.d8=new A.bt(7,"work")
B.O=new A.bt(8,"storage")
B.aQ=new A.bt(9,"utility")
B.jl=new A.dN(0,"timeAdvanced")
B.jm=new A.dN(1,"dayEndReached")
B.jn=new A.dN(2,"journalWritten")
B.jo=new A.dN(3,"journalRejected")
B.jp=new A.dN(4,"slept")
B.jq=new A.dN(5,"complianceFloorTripped")
B.bg=new A.dO(0,"twentyFourHour")
B.d9=new A.dO(1,"twelveHour")
B.da=new A.dP(0,"important")
B.db=new A.dP(1,"always")
B.bh=new A.cw(0,"pauseAndMute")
B.dc=new A.dQ(0,"press")
B.dd=new A.dQ(1,"hold")
B.de=new A.dR(0,"compact")
B.df=new A.dR(1,"spacious")
B.dg=new A.dc(1,"standard")
B.dh=new A.dc(2,"detailed")
B.di=new A.dS(0,"toast")
B.dj=new A.dS(1,"detailed")
B.dk=new A.dd(1,"readable")
B.jw=new A.iE(0,"vertex")
B.dl=new A.iE(1,"indices")
B.dm=new A.ls(0,"staticDraw")
B.j=new A.iF(0,"ready")
B.a6=new A.iF(1,"lost")
B.aw=new A.hq(0,"prepared")
B.jx=new A.hq(1,"committed")
B.jy=new A.hq(2,"rolledBack")
B.jz=new A.fl(0,"color")
B.dn=new A.fl(1,"colorAndGlow")
B.jA=new A.fl(2,"colorDepthGlow")
B.bi=new A.fl(3,"depthOnly")
B.bj=new A.iH(1,"linear")
B.dp=new A.iI(0,"clampToEdge")
B.jB=new A.lt(1,1,1,!1,B.bj,B.bj,B.dp,1)
B.ax=new A.iH(2,"linearMipmapLinear")
B.jC=new A.iI(1,"repeat")
B.jD=new A.df(0,"beforeShadow")
B.jE=new A.df(2,"beforeDepth")
B.bk=new A.df(3,"afterDepth")
B.dq=new A.df(4,"beforeWorld")
B.jF=new A.df(5,"afterWorld")
B.P=new A.df(6,"afterResolve")
B.jG=new A.df(9,"beforePresent")
B.dr=new A.cx(0,"readBeforeWrite")
B.jH=new A.cx(1,"duplicateWriter")
B.jI=new A.cx(2,"sampledMultisampledAttachment")
B.bl=new A.cx(3,"invalidResolve")
B.jJ=new A.cx(4,"formatOrSizeMismatch")
B.jK=new A.cx(5,"unversionedReadWrite")
B.jL=new A.cx(6,"invalidHistoryRead")
B.jM=new A.cx(7,"dependencyCycle")
B.jN=new A.cx(8,"missingCapability")
B.bm=new A.cS(0,"high")
B.bn=new A.cS(1,"standard")
B.bo=new A.dT(1,B.bn,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.jQ=new A.dT(1,B.bm,"1.00",!1,"display","msaa4","high","srgb","errors","profile",!1)
B.aR=new A.eE(0,"player")
B.bp=new A.eE(1,"inserted")
B.ds=new A.eE(2,"warden")
B.dt=new A.fm(0,"wrongKind")
B.du=new A.fm(1,"staleGeneration")
B.jR=new A.fm(2,"doubleRelease")
B.aS=new A.fm(3,"releasedResource")
B.jU=new A.dg("kitchen-range","settle")
B.jV=new A.dg("front-door-knocker","knock")
B.jW=new A.dg("cellar-drain","drip")
B.jX=new A.dg("bedroom-timber","creak")
B.jY=new A.dg("kitchen-pipe","tick")
B.jZ=new A.dg("bathroom-cistern","settle")
B.k_=new A.dg("landing-window","wind")
B.km=new A.lA(1,"visitor")
B.ko=new A.lC("none",0,0,0,0,0,!1)
B.kr=new A.rA(null)
B.ks=new A.rB(null)
B.bq=new A.iQ(!1,0,0.85,0.92,1,0,1,0,0)
B.kt=new A.aZ(0.008,0.012,0.024)
B.dv=s([0,2,2,3],t.t)
B.bs=s([B.da,B.db],A.a2("x<dP>"))
B.kx=s(["wall-plaster","grime","floor-linoleum","ceiling-stained","porcelain-albedo","porcelain-normal","glass","skybox-main-atmosphere-v1"],t.s)
B.kz=s(["volumetric_light_enable","volumetric_shaft_intensity","volumetric_precision","volumetric_dust_density","volumetric_scattering"],t.s)
B.kA=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bt=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.M=new A.bP(0,"audio")
B.a1=new A.jm(0,"level")
B.pX=new A.bm("master","Master",B.M,B.a1,1,0,1,"audio")
B.q1=new A.bm("voice","Visitor voice",B.M,B.a1,1,0,1,"audio")
B.pT=new A.bm("effects","Effects",B.M,B.a1,1,0,1,"audio")
B.pU=new A.bm("ambience","House ambience",B.M,B.a1,1,0,1,"audio")
B.pY=new A.bm("music","Music",B.M,B.a1,1,0,1,"audio")
B.b_=new A.bP(1,"display")
B.q0=new A.bm("brightness","Display brightness",B.b_,B.a1,1,0.6,1.4,"display")
B.aC=new A.jm(1,"toggle")
B.pW=new A.bm("muted","Mute house audio",B.M,B.aC,!1,null,null,"audio")
B.ai=new A.bP(2,"accessibility")
B.pZ=new A.bm("mono","Mono-compatible mix",B.ai,B.aC,!1,null,null,"audio")
B.pV=new A.bm("high-contrast","High-contrast interface",B.ai,B.aC,!1,null,null,"display")
B.q_=new A.bm("strong-highlights","Strong focus highlights",B.ai,B.aC,!1,null,null,"display")
B.J=s([B.pX,B.q1,B.pT,B.pU,B.pY,B.q0,B.pW,B.pZ,B.pV,B.q_],A.a2("x<bm>"))
B.E=s(["who","verb","object","place","time"],t.s)
B.kE=s([81,77,83,72],t.t)
B.kF=s(["porcelain-albedo","porcelain-normal","glass"],t.s)
B.kH=s(["Standard perimeter trim"],t.s)
B.f4=new A.dG(1,"strong")
B.bu=s([B.cu,B.f4],A.a2("x<dG>"))
B.fi=new A.fd(0,"swap")
B.fj=new A.fd(1,"replace")
B.fk=new A.fd(2,"cancel")
B.kI=s([B.fi,B.fj,B.fk],A.a2("x<fd>"))
B.kK=s([2,5,9,12,16,19],t.t)
B.jr=new A.cw(1,"pauseOnly")
B.js=new A.cw(2,"continuePlayback")
B.aT=s([B.bh,B.jr,B.js],A.a2("x<cw>"))
B.kL=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale","uShadowMapTexelSize","uShadowFilterRadius","uShadowBias","uReflectionColor","uReflectionIntensity","uReflectionConfidence","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uSpecularScale","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.kM=s(["uQuantizationBits","uDitherStrength"],t.s)
B.kO=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.kQ=s([B.aP,B.cQ,B.cR,B.cS,B.ar],A.a2("x<bY>"))
B.dw=s([B.I],t.p)
B.dx=s([B.O,B.aQ],t.p)
B.dy=s([B.aQ],t.p)
B.kT=s(["30","60","display"],t.s)
B.kU=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.aH=new A.cn(0,"full")
B.co=new A.cn(1,"compressed")
B.cp=new A.cn(2,"off")
B.dz=s([B.aH,B.co,B.cp],A.a2("x<cn>"))
B.bv=s([B.bg,B.d9],A.a2("x<dO>"))
B.kV=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection","uView","uInverseProjection","uVolumetricAlbedo","uVolumetricHeightFalloff","uVolumetricDustDensity","uVolumetricJitter","uVolumetricIntensity","uVolumetricSampleCount"],t.s)
B.kW=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.f9=new A.dH(1,"reduced")
B.bw=s([B.b7,B.f9],A.a2("x<dH>"))
B.f5=new A.da(0,"wide")
B.f6=new A.da(2,"night")
B.bx=s([B.f5,B.cv,B.f6],A.a2("x<da>"))
B.kX=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.l8=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.qc=new A.bG(0,"bed")
B.qd=new A.bG(1,"chair")
B.c9=new A.bG(2,"sofa")
B.qe=new A.bG(3,"floor")
B.dA=s([B.qc,B.qd,B.c9,B.qe],A.a2("x<bG>"))
B.dB=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.by=s([B.de,B.df],A.a2("x<dR>"))
B.qf=new A.c6(0,"long")
B.eA=new A.c6(1,"short")
B.dC=s([B.qf,B.eA],A.a2("x<c6>"))
B.h2=new A.cd("1 - 9","Select Response",!0)
B.fZ=new A.cd("SPACE","Silence Ring",!1)
B.lb=s([B.h2,B.fZ],t.sa)
B.aa=new A.c2(0,"visual")
B.bV=new A.c2(1,"graphics")
B.ab=new A.c2(2,"gameplay")
B.bW=new A.c2(3,"controls")
B.R=new A.c2(4,"audio")
B.S=new A.c2(5,"accessibility")
B.lc=s([B.aa,B.bV,B.ab,B.bW,B.R,B.S],A.a2("x<c2>"))
B.ld=s(["master","voice","effects","ambience","music"],t.s)
B.bz=s([B.di,B.dj],A.a2("x<dS>"))
B.dD=s(["res/house/house.json","assets/house/house.json"],t.s)
B.lf=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.jO=new A.cS(2,"safe")
B.jP=new A.cS(3,"custom")
B.dE=s([B.bm,B.bn,B.jO,B.jP],A.a2("x<cS>"))
B.L=new A.cC(0,"inactive")
B.c6=new A.cC(2,"affineWarp")
B.eq=new A.cC(3,"vertexSnap")
B.c7=new A.cC(4,"tapeGiveup")
B.c8=new A.cC(5,"portalFail")
B.ag=new A.cC(6,"lightsOut")
B.dF=s([B.L,B.aZ,B.c6,B.eq,B.c7,B.c8,B.ag],A.a2("x<cC>"))
B.lg=s(["#4b8fc5","#79c8d5","#d7c77a","#df824f","#d43b3b"],t.s)
B.lh=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale"],t.s)
B.li=s([B.aR,B.bp,B.ds],A.a2("x<eE>"))
B.lj=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.rZ=new A.bK("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.rY=new A.bK("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.rU=new A.bK("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.t1=new A.bK("ronnie.response","named","A route card has Ronnie written on its back.")
B.t0=new A.bK("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.lk=s([B.rZ,B.rY,B.rU,B.t1,B.t0],t.uk)
B.t_=new A.bK("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.rX=new A.bK("ronnie.response","named","The name Ronnie holds when the room does not.")
B.rV=new A.bK("denise.revision","accepted","One correction remains yours to protect.")
B.rS=new A.bK("attercliffe.plate","kept","A second place survives the room changing around it.")
B.ll=s([B.t_,B.rX,B.rV,B.rS],t.uk)
B.ln=s([],t.xn)
B.lA=s([],t.A5)
B.lq=s([],t.Fm)
B.lp=s([],t.op)
B.lm=s([],A.a2("x<cU>"))
B.lo=s([],t.e)
B.lt=s([],t.yH)
B.a7=s([],t.qP)
B.lr=s([],t.u)
B.dK=s([],t.xB)
B.lC=s([],t.D)
B.lB=s([],t.El)
B.o=s([],t.s)
B.dH=s([],t.ld)
B.dG=s([],t.su)
B.dI=s([],t.uI)
B.dJ=s([],t.nm)
B.bA=s([],t.n)
B.ls=s([],t.t)
B.aU=s([],t.zz)
B.jT=new A.iK(15,"kitchen",-0.3,0)
B.jS=new A.iK(19,"spare-room",0,0.3)
B.Y=s([B.jT,B.jS],A.a2("x<iK>"))
B.lF=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lG=s(["high","medium","low"],t.s)
B.f7=new A.cQ(1,"headphones")
B.f8=new A.cQ(2,"speakers")
B.bC=s([B.cw,B.f7,B.f8,B.cx],A.a2("x<cQ>"))
B.lH=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bD=s([B.dc,B.dd],A.a2("x<dQ>"))
B.bU=new A.cz(0,"root")
B.e1=new A.bE(0,"pauseMenu")
B.o4=new A.dW(B.bU,B.e1,null)
B.lJ=s([B.o4],t.bA)
B.bE=s([B.cs,B.ap,B.ct],A.a2("x<d9>"))
B.lK=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap","uClearColor","uSkyHorizon","uSkyZenith","uSkyGround","uSkyEnabled","uSkyHorizonGlow","uSkyStarDensity","uSkyTexture","uSkyTextureEnabled","uSkyRotation","uSkyExposure","uSkyTextureSrgb","uInverseProjection","uInverseView","uCameraPosition","uCloudCoverage","uCloudDensity","uCloudBaseHeight","uCloudThickness","uCloudScale","uCloudWind","uCloudPhase","uCloudDetail","uCloudSilverLining","uCloudSampleCount","uCloudLightDirection","uCloudLightColor","uCloudLightIntensity"],t.s)
B.ju=new A.dd(0,"instant")
B.jv=new A.dd(2,"slow")
B.bF=s([B.ju,B.dk,B.jv],A.a2("x<dd>"))
B.lL=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.lM=s([B.M,B.b_,B.ai],A.a2("x<bP>"))
B.Z=s([B.D,B.at,B.H,B.au],A.a2("x<eB>"))
B.ca=new A.bw(0,"depthTest")
B.cb=new A.bw(1,"depthFunc")
B.cc=new A.bw(2,"depthWrite")
B.cd=new A.bw(3,"blendEnable")
B.ce=new A.bw(4,"blendFunc")
B.cf=new A.bw(5,"blendEquation")
B.cg=new A.bw(6,"cullEnable")
B.ch=new A.bw(7,"cullFace")
B.eE=new A.bw(8,"frontFace")
B.qw=new A.bw(9,"stencilEnable")
B.eC=new A.bw(10,"colorMask")
B.eD=new A.bw(11,"scissorEnable")
B.lP=s([B.ca,B.cb,B.cc,B.cd,B.ce,B.cf,B.cg,B.ch,B.eE,B.qw,B.eC,B.eD],A.a2("x<bw>"))
B.aD=new A.c5(0,"none")
B.q3=new A.c5(1,"albedoOnly")
B.q4=new A.c5(2,"normalsOnly")
B.q5=new A.c5(3,"roughnessOnly")
B.q6=new A.c5(4,"metallicOnly")
B.q7=new A.c5(5,"aoOnly")
B.q8=new A.c5(6,"wireframeOnly")
B.dL=s([B.aD,B.q3,B.q4,B.q5,B.q6,B.q7,B.q8],A.a2("x<c5>"))
B.dM=s(["North and South sloped Welsh slate roof planes","Terracotta half-round ridge capping tiles","East and West brick gable pediments","Dual masonry chimney stacks with lead flashing collars","Terracotta chimney pots","Half-round cast-iron eaves gutters and rainwater downpipes"],t.s)
B.lQ=s(["off","errors","full"],t.s)
B.lR=s(["off","fxaa","msaa2","msaa4"],t.s)
B.lS=s(["off","profile","standard","high"],t.s)
B.lT=s(["pbr_roughness","pbr_metallic","pbr_specular","normal_bump_strength","shadow_bias"],t.s)
B.lV=s(["post_bloom"],t.s)
B.lW=s(["post_color_grade"],t.s)
B.lX=s(["post_depth_of_field"],t.s)
B.lY=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.a2=new A.du(0,"pbrMaterial")
B.aj=new A.du(1,"shadowsAndOcclusion")
B.aE=new A.du(2,"surfaceWeathering")
B.l=new A.du(3,"atmosphereAndPost")
B.t=new A.du(4,"weatherEffects")
B.q9=new A.du(5,"debugView")
B.ay=s([B.a2,B.aj,B.aE,B.l,B.t,B.q9],A.a2("x<du>"))
B.m0=s(["shadow_csm_hardness"],t.s)
B.m1=s(["srgb","linear"],t.s)
B.m2=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.m3=s(["uBloomStrength"],t.s)
B.m4=s(["uLutSize","uStrength"],t.s)
B.m6=s([B.cU,B.cV,B.cW],A.a2("x<cv>"))
B.m7=s(["uTexelSize","uNear","uFar"],t.s)
B.dN=s(["uTexelStep"],t.s)
B.m8=s(["uVolumetricStrength"],t.s)
B.m9=s(["uninitialized"],t.s)
B.dO=s(["Sloped timber rafter trusses","Horizontal collar tie-beams at head height","Central rough-sawn pine floorboard walkway","Loft access hatch surround over landing","Galvanized cold-water header cistern tank on elevated timber bearers"],t.s)
B.jt=new A.dc(0,"minimal")
B.bG=s([B.jt,B.dg,B.dh],A.a2("x<dc>"))
B.rW=new A.bK("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.rR=new A.bK("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.rQ=new A.bK("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.rT=new A.bK("ronnie.response","named","The route card gives one name its own line.")
B.mb=s([B.rW,B.rR,B.rQ,B.rT],t.uk)
B.an=new A.cm(0,"waiting")
B.aF=new A.cm(1,"atDoor")
B.aG=new A.cm(2,"consulting")
B.b1=new A.cm(3,"resolved")
B.mc=s([B.an,B.aF,B.aG,B.b1],A.a2("x<cm>"))
B.md=s(["post_dither","post_quantization_bits"],t.s)
B.h3=new A.cd("W A S D","Move",!1)
B.h1=new A.cd("TAB","Journal",!1)
B.h0=new A.cd("CAPS","Shader Lab",!1)
B.h_=new A.cd("ESC","Pause",!1)
B.mf=s([B.h3,B.h1,B.h0,B.h_],t.sa)
B.mg=s(["floor-linoleum","ceiling-stained"],t.s)
B.nD={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.mh=new A.a3(B.nD,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a2("a3<f,L?>"))
B.nU={uAlbedo:0}
B.dP=new A.a3(B.nU,[0],t.I)
B.nH={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12,"polyhaven-decrepit-wallpaper":13,"polyhaven-dark-paneled-wood":14,"polyhaven-damaged-plaster":15,"polyhaven-diagonal-parquet":16,"polyhaven-dirty-carpet":17,"polyhaven-brown-floor-tiles":18,"polyhaven-ceiling-interior":19,"polyhaven-roof-slates":20,"timber-rafters":21}
B.kh=new A.aF("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.k9=new A.aF("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.kg=new A.aF("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.kj=new A.aF("wallpaper-damp","grime",7106925,0.94,0.76)
B.ka=new A.aF("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.ki=new A.aF("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.kk=new A.aF("wallpaper-peeling","grime",9340536,0.91,0.68)
B.kb=new A.aF("floor-wood","wall-plaster",7755327,0.88,0.22)
B.k5=new A.aF("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.k8=new A.aF("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.k2=new A.aF("floor-concrete","grime",7828331,0.96,0.92)
B.k4=new A.aF("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.kc=new A.aF("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.k7=new A.aF("polyhaven-decrepit-wallpaper","polyhaven/walls/decrepit_wallpaper",12103070,0.88,1)
B.k3=new A.aF("polyhaven-dark-paneled-wood","polyhaven/walls/dark_paneled_wood",6441016,0.72,0.8)
B.kf=new A.aF("polyhaven-damaged-plaster","polyhaven/walls/damaged_plaster",11248794,0.9,1.2)
B.ke=new A.aF("polyhaven-diagonal-parquet","polyhaven/floors/diagonal_parquet",9202510,0.65,1)
B.kd=new A.aF("polyhaven-dirty-carpet","polyhaven/floors/dirty_carpet",9076850,0.95,1)
B.k1=new A.aF("polyhaven-brown-floor-tiles","polyhaven/floors/brown_floor_tiles",9861220,0.55,0.6)
B.k6=new A.aF("polyhaven-ceiling-interior","polyhaven/ceilings/ceiling_interior",12959669,0.82,1)
B.k0=new A.aF("polyhaven-roof-slates","polyhaven/roof/roof_slates_02",3817028,0.7,1)
B.kl=new A.aF("timber-rafters","timber-dark",4732454,0.86,0.5)
B.bH=new A.a3(B.nH,[B.kh,B.k9,B.kg,B.kj,B.ka,B.ki,B.kk,B.kb,B.k5,B.k8,B.k2,B.k4,B.kc,B.k7,B.k3,B.kf,B.ke,B.kd,B.k1,B.k6,B.k0,B.kl],A.a2("a3<f,aF>"))
B.ns={"polyhaven.television-01":0,"polyhaven.coffee-table-01":1,"polyhaven.desk-lamp-arm-01":2,"polyhaven.alarm-clock-01":3,"kenney.bathtub":4,"kenney.bathroom-sink":5,"kenney.bathroom-mirror":6,"kenney.bed-double":7,"kenney.bed-single":8,"kenney.bedside-table":9,"kenney.bookcase":10,"kenney.coat-rack":11,"kenney.desk":12,"kenney.desk-chair":13,"kenney.computer-screen":14,"kenney.cardboard-box":15,"polyhaven.roof-slates":16,"polyhaven.wooden-ladder":17,"polyhaven.wooden-crate-01":18,"polyhaven.lantern-01":19,"polyhaven.wine-barrel-01":20,"kenney.chest":21,"kenney.barrel":22,"kenney.bucket":23,"kenney.detail-pipe":24}
B.tD=new A.iW(0,"polyhaven")
B.tA=new A.iV(0,"gltf")
B.t9=s(["tv","crt","retro","electronics","entertainment"],t.s)
B.nn=new A.au("polyhaven.television-01",0.58,0.46,0.4,"living")
B.ts=s(["table","coffee-table","furniture","wood"],t.s)
B.nl=new A.au("polyhaven.coffee-table-01",1.1,0.45,0.6,"living")
B.t8=s(["lamp","desk-lamp","light","practical"],t.s)
B.nd=new A.au("polyhaven.desk-lamp-arm-01",0.22,0.48,0.26,"lighting")
B.tl=s(["clock","alarm","retro","bedside"],t.s)
B.n5=new A.au("polyhaven.alarm-clock-01",0.14,0.16,0.09,"bedroom")
B.tE=new A.iW(1,"kenney")
B.tB=new A.iV(1,"glb")
B.tf=s(["bath","plumbing","sanitary"],t.s)
B.na=new A.au("kenney.bathtub",1.7,0.6,0.75,"bathroom")
B.tt=s(["sink","basin","plumbing"],t.s)
B.ne=new A.au("kenney.bathroom-sink",0.6,0.85,0.5,"bathroom")
B.to=s(["mirror","wall"],t.s)
B.nb=new A.au("kenney.bathroom-mirror",0.5,0.7,0.08,"bathroom")
B.th=s(["bed","sleeping","master"],t.s)
B.n_=new A.au("kenney.bed-double",1.6,0.9,2.05,"bedroom")
B.tg=s(["bed","single"],t.s)
B.nc=new A.au("kenney.bed-single",1,0.85,2,"bedroom")
B.tq=s(["nightstand","cabinet","bedside"],t.s)
B.n9=new A.au("kenney.bedside-table",0.5,0.6,0.45,"bedroom")
B.ti=s(["bookcase","storage","books"],t.s)
B.n4=new A.au("kenney.bookcase",0.9,1.8,0.4,"living")
B.tb=s(["hall","coat-rack","entry"],t.s)
B.n1=new A.au("kenney.coat-rack",0.45,1.85,0.45,"hall")
B.tm=s(["desk","study","work"],t.s)
B.n8=new A.au("kenney.desk",1.2,0.75,0.65,"office")
B.t7=s(["chair","desk-chair"],t.s)
B.n2=new A.au("kenney.desk-chair",0.55,0.85,0.55,"office")
B.tp=s(["monitor","computer","crt","retro"],t.s)
B.nm=new A.au("kenney.computer-screen",0.4,0.38,0.35,"office")
B.tj=s(["box","storage","archive","cellar"],t.s)
B.n0=new A.au("kenney.cardboard-box",0.5,0.4,0.4,"utility")
B.tr=s(["roof","slate","tiles","exterior"],t.s)
B.n7=new A.au("polyhaven.roof-slates",2,0.08,2,"roof")
B.tu=s(["ladder","loft","attic","wood","utility"],t.s)
B.nk=new A.au("polyhaven.wooden-ladder",0.48,2.35,0.14,"attic")
B.tc=s(["crate","box","wood","attic","cellar"],t.s)
B.nj=new A.au("polyhaven.wooden-crate-01",0.62,0.48,0.48,"storage")
B.tv=s(["lantern","oil","brass","attic","cellar","light"],t.s)
B.n3=new A.au("polyhaven.lantern-01",0.22,0.38,0.22,"lighting")
B.te=s(["barrel","wine","wood","cellar"],t.s)
B.ni=new A.au("polyhaven.wine-barrel-01",0.68,0.94,0.68,"cellar")
B.ta=s(["chest","trunk","luggage","attic","storage"],t.s)
B.ng=new A.au("kenney.chest",0.75,0.5,0.45,"attic")
B.td=s(["barrel","storage","cellar"],t.s)
B.nf=new A.au("kenney.barrel",0.6,0.8,0.6,"cellar")
B.tk=s(["bucket","metal","sump","utility"],t.s)
B.n6=new A.au("kenney.bucket",0.35,0.35,0.35,"utility")
B.tn=s(["pipe","conduit","downpipe","roof","cellar"],t.s)
B.nh=new A.au("kenney.detail-pipe",0.2,1,0.2,"utility")
B.bI=new A.a3(B.ns,[B.nn,B.nl,B.nd,B.n5,B.na,B.ne,B.nb,B.n_,B.nc,B.n9,B.n4,B.n1,B.n8,B.n2,B.nm,B.n0,B.n7,B.nk,B.nj,B.n3,B.ni,B.ng,B.nf,B.n6,B.nh],A.a2("a3<f,au>"))
B.o0={uSsaoRaw:0,uSceneDepth:1}
B.mi=new A.a3(B.o0,[0,1],t.I)
B.e_={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.l6=s(["KeyW","GamepadDpadUp"],t.s)
B.l5=s(["KeyS","GamepadDpadDown"],t.s)
B.kY=s(["KeyA","GamepadDpadLeft"],t.s)
B.kZ=s(["KeyD","GamepadDpadRight"],t.s)
B.l_=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.l3=s(["KeyQ","GamepadB"],t.s)
B.la=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.lD=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.l4=s(["KeyR","GamepadX"],t.s)
B.l0=s(["KeyF","GamepadRB"],t.s)
B.l1=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.l2=s(["KeyL"],t.s)
B.kN=s(["Escape","GamepadMenu"],t.s)
B.mj=new A.a3(B.e_,[B.l6,B.l5,B.kY,B.kZ,B.l_,B.l3,B.la,B.lD,B.l4,B.l0,B.l1,B.l2,B.kN],A.a2("a3<f,K<f>>"))
B.mk=new A.a3(B.e_,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.nY={uScene:0,uHistory:1}
B.ml=new A.a3(B.nY,[0,1],t.I)
B.nr={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.mm=new A.a3(B.nr,["a3a444afab9459e53377c7847b8efbd43e53eeb1","f6eec28aa2f7cc39a086f0c8bcd5716da0361276","3.12.2","a926306a35f7fe2aa2fa6f13e88da839ffdab921cfc481f0fb166f46b969f4e6","0.2.0.3"],t.w)
B.nI={aPosition:0,aUvMat:1}
B.dQ=new A.a3(B.nI,[0,4],t.I)
B.nt={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-hail-tick":32,"weather-wind":33,"weather-window-rattle":34,"weather-window-tick":35,"weather-thunder-bed":36,"weather-interior-drip":37,"weather-interior-warmth":38,"weather-interior-coffee":39,"weather-coffee-clink":40,"weather-thunder-crack":41,"weather-thunder-roll":42,"step-above-0":43,"step-above-1":44,"step-above-2":45,"step-above-3":46}
B.mn=new A.a3(B.nt,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","transient","air","ambience","transient","sub","ambience","sub","ambience","transient","sub","sub","sub","sub","sub","sub"],t.w)
B.nZ={uScene:0,uLut:1}
B.mo=new A.a3(B.nZ,[0,1],t.I)
B.o_={uSource:0}
B.dR=new A.a3(B.o_,[0],t.I)
B.nR={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.mp=new A.a3(B.nR,[0,1,2,3,4,5,6],t.I)
B.dS=new A.de([B.aa,"settings.visual",B.bV,"settings.graphics",B.ab,"settings.gameplay",B.bW,"settings.controls",B.R,"settings.audio",B.S,"settings.accessibility"],t.EJ)
B.dT=new A.de([B.aa,"visual",B.bV,"graphics",B.ab,"gameplay",B.bW,"controls",B.R,"audio",B.S,"accessibility"],t.EJ)
B.nB={uSharp:0,uBlurred:1,uSceneDepth:2}
B.mq=new A.a3(B.nB,[0,1,2],t.I)
B.nK={hall:0,"living-room":1,kitchen:2,cellar:3,bedroom:4,landing:5,bathroom:6,"spare-room":7,attic:8,roof:9}
B.kR=s([B.I,B.O],t.p)
B.lZ=s(["Vestibule draft lobby transom trim","Dado rail wainscoting along full hallway length","Under-stair spandrel paneling and cupboard casing","Continuous timber staircase stringers and balusters"],t.s)
B.pB=new A.c4("Entrance Hall & Vestibule","Late Victorian / 80s Refurbished Entrance Hall","polyhaven-decrepit-wallpaper","polyhaven-diagonal-parquet","polyhaven-ceiling-interior",B.kR,B.lZ)
B.lI=s([B.d2,B.d3,B.d4,B.O],t.p)
B.l9=s(["Chimney breast with projecting tile hearth and carved mantle","Lower dark wood wainscot paneling with continuous dado rail","Victorian picture hanging rail at 2.15 m datum","Ornate central plaster ceiling rose medallion","Twin north sash window radiator enclosures"],t.s)
B.px=new A.c4("Living Room & Hearth","80s Domestic Parlor with Dark Wood Wainscoting","polyhaven-dark-paneled-wood","polyhaven-dirty-carpet","polyhaven-ceiling-interior",B.lI,B.l9)
B.lU=s([B.d5,B.O,B.I],t.p)
B.lE=s(["Fitted countertop cabinetry with recessed toe-kicks","Ceramic tile splashback up to 1.4 m datum","Belfast sink plumbing casing and pipe chase enclosure","Pantry larder cupboard framing against North wall"],t.s)
B.py=new A.c4("Kitchen & Scullery","Domestic Galley Kitchen with Ceramic Retro Tiling","polyhaven-damaged-plaster","polyhaven-brown-floor-tiles","polyhaven-ceiling-interior",B.lU,B.lE)
B.kw=s([B.aQ,B.O,B.I],t.p)
B.kC=s(["Structural load-bearing brick piers","Exposed timber joists with conduit clips","Stepped damp-proof skirting plinth","Iron coal chute aperture and frame","Preserves & wine storage alcove with stone shelves","Subterranean drainage sump pit with cast-iron grate","Utility meter board & gas governor casing","Oak wine barrel stillage cradle"],t.s)
B.pC=new A.c4("Cellar & Utility Vault","Below-Grade Brick Service Vault with Exposed Joists","polyhaven-damaged-plaster","polyhaven-brown-floor-tiles","ceiling-pipes",B.kw,B.kC)
B.kJ=s([B.d7,B.O,B.I],t.p)
B.ma=s(["Recessed alcove wardrobe framing","Bedside table wall plinths","Decorative chimney breast with ceramic tile hearth","Curtain pelmets over twin north sash windows"],t.s)
B.pz=new A.c4("Master Bedroom","Suburban 80s Master Bedroom with Wall Plaster & Carpet","polyhaven-decrepit-wallpaper","polyhaven-dirty-carpet","polyhaven-ceiling-interior",B.kJ,B.ma)
B.ku=s(["Protective gallery balustrade overlooking stair void","Linen and airing cupboard architraves","Ceiling loft access inspection hatch trim"],t.s)
B.pw=new A.c4("First Floor Landing","Upper Circulation Gallery","polyhaven-decrepit-wallpaper","polyhaven-diagonal-parquet","polyhaven-ceiling-interior",B.dw,B.ku)
B.kS=s([B.d6,B.I],t.p)
B.kv=s(["Half-height sanitary tile wainscot ledge at 1.2 m","Vertical pipe chase boxing for waste and soil stack","Bath apron surround and plinth"],t.s)
B.pv=new A.c4("Family Bathroom","Ceramic Tiled 80s Wet Room & Sanitary Suite","polyhaven-brown-floor-tiles","polyhaven-brown-floor-tiles","polyhaven-ceiling-interior",B.kS,B.kv)
B.ky=s([B.d8,B.O,B.I],t.p)
B.me=s(["Study alcove desk framing and bracketed shelving","Low-profile window radiator enclosure","Exposed electrical surface conduit runs"],t.s)
B.pt=new A.c4("Quarantine Study & Archive Room","Repurposed Isolation Study with Distressed Plaster","polyhaven-damaged-plaster","polyhaven-dirty-carpet","polyhaven-ceiling-interior",B.ky,B.me)
B.pu=new A.c4("Attic & Roof Loft",u.o,"polyhaven-damaged-plaster","floor-wood","polyhaven-roof-slates",B.dx,B.dO)
B.pA=new A.c4("Exterior Slate Roof & Chimney Stacks",u.n,"polyhaven-roof-slates","polyhaven-roof-slates","polyhaven-roof-slates",B.dy,B.dM)
B.mr=new A.a3(B.nK,[B.pB,B.px,B.py,B.pC,B.pz,B.pw,B.pv,B.pt,B.pu,B.pA],A.a2("a3<f,c4>"))
B.o1={uTex:0,uSkyTexture:1}
B.ms=new A.a3(B.o1,[0,1],t.I)
B.nV={uBloom:0}
B.mt=new A.a3(B.nV,[0],t.I)
B.nW={uSceneDepth:0}
B.dU=new A.a3(B.nW,[0],t.I)
B.nX={uScene:0}
B.mu=new A.a3(B.nX,[0],t.I)
B.F={}
B.dV=new A.a3(B.F,[],A.a2("a3<f,il>"))
B.mv=new A.a3(B.F,[],A.a2("a3<f,K<y>>"))
B.aV=new A.a3(B.F,[],t.w)
B.tw=new A.a3(B.F,[],A.a2("a3<f,l>"))
B.bJ=new A.a3(B.F,[],A.a2("a3<f,y>"))
B.y=new A.a3(B.F,[],t.I)
B.bK=new A.a3(B.F,[],A.a2("a3<f,@>"))
B.tx=new A.a3(B.F,[],A.a2("a3<f,f?>"))
B.mw=new A.a3(B.F,[],A.a2("a3<@,@>"))
B.nx={hall:0,kitchen:1,livingRoom:2,cellar:3,bedroom:4,landing:5,bathroom:6,spareRoom:7}
B.bZ=new A.aT(0.5,0.75,1)
B.oB=new A.cA("hall.pendant","hall","point",2700,B.bZ,300,360,!0)
B.lO=s([B.oB],t.W)
B.eh=new A.aT(0.7,0.85,1)
B.ox=new A.cA("kitchen.bare-bulb","kitchen","point",3500,B.eh,400,360,!0)
B.kG=s([B.ox],t.W)
B.em=new A.aT(0.35,0.65,1)
B.oA=new A.cA("livingRoom.fire","livingRoom","point",2200,B.em,500,360,!1)
B.oC=new A.cA("livingRoom.standard-lamp","livingRoom","spot",2200,B.em,350,60,!0)
B.l7=s([B.oA,B.oC],t.W)
B.p1=new A.aT(0.8,0.9,1)
B.oz=new A.cA("cellar.downlight","cellar","spot",4000,B.p1,500,90,!0)
B.lN=s([B.oz],t.W)
B.ov=new A.cA("bedroom.bedside-lamp","bedroom","point",2700,B.bZ,200,360,!0)
B.m5=s([B.ov],t.W)
B.oy=new A.cA("landing.wall-sconce","landing","point",2700,B.bZ,250,360,!0)
B.kP=s([B.oy],t.W)
B.ow=new A.cA("bathroom.ceiling-fitting","bathroom","point",3500,B.eh,350,360,!0)
B.kD=s([B.ow],t.W)
B.lx=s([],t.W)
B.bL=new A.a3(B.nx,[B.lO,B.kG,B.l7,B.lN,B.m5,B.kP,B.kD,B.lx],A.a2("a3<f,K<cA>>"))
B.o3={"porcelain-albedo":0,"porcelain-normal":1}
B.mx=new A.a3(B.o3,["res/house/models/porcelain-mermaid-statuette/textures/retopo_Transferred%20Texture%20from%20Mesh.jpeg","res/house/models/porcelain-mermaid-statuette/textures/retopo_Normal%20Map%20from%20Mesh.jpeg"],t.w)
B.nv={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.my=new A.a3(B.nv,[0,1,2,3,4,5,6],t.I)
B.e2=new A.cZ(0,"resume")
B.e3=new A.cZ(1,"settings")
B.e4=new A.cZ(2,"controls")
B.e5=new A.cZ(3,"save")
B.e6=new A.cZ(4,"help")
B.e7=new A.cZ(5,"credits")
B.e8=new A.cZ(6,"back")
B.mz=new A.de([B.e2,"pause.resume",B.e3,"pause.settings",B.e4,"pause.controls",B.e5,"pause.save",B.e6,"pause.help",B.e7,"pause.credits",B.e8,"pause.back"],A.a2("de<cZ,f>"))
B.o2={uVolumetric:0}
B.mA=new A.a3(B.o2,[0],t.I)
B.nO={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.mB=new A.a3(B.nO,[0,1,2,3],t.I)
B.bM=new A.de([B.aZ,1,B.c6,1.5,B.eq,1.5,B.c7,2,B.c8,2,B.ag,4],A.a2("de<cC,y>"))
B.ty=new A.iU(0,"srgb")
B.tz=new A.iU(1,"linear")
B.mC=new A.c_("weather:rain-particle",null,0.55,0.68,0.82,0.08,null,1,0.18,0,0,0.2,1,1,B.W,0.5,!1,!1)
B.mD=new A.c_("fire:white-vapour-particle",null,0.86,0.86,0.82,0,null,1,0.96,0,0,0.2,1,1,B.W,0.5,!1,!1)
B.mE=new A.c_("fire:flame-particle",null,1,0.42,0.06,2.4,null,1,0.28,0,0,0.2,1,1,B.W,0.5,!1,!1)
B.mF=new A.c_("weather:snow-particle",null,0.82,0.9,1,0.04,null,1,0.72,0,0,0.2,1,1,B.W,0.5,!1,!1)
B.mG=new A.c_("fire:black-soot-particle",null,0.06,0.065,0.075,0,null,1,1,0,0,0.2,1,1,B.W,0.5,!1,!1)
B.mH=new A.c_("weather:hail-particle",null,0.62,0.74,0.82,0.06,null,1,0.35,0,0,0.2,1,1,B.W,0.5,!1,!1)
B.bQ=new A.dl(3,"ceramicConcrete")
B.mI=new A.be("mat-ceramic-glaze",B.bQ,"floor-linoleum",0.85,0.85,0.82,0.2,0,1)
B.bP=new A.dl(2,"metal")
B.mJ=new A.be("mat-iron-cast",B.bP,"grime",0.2,0.2,0.22,0.65,0.85,1)
B.bN=new A.dl(0,"plasterWallpaper")
B.mK=new A.be("mat-wallpaper-stripes",B.bN,"wall-plaster",0.7,0.63,0.55,0.82,0,1)
B.dW=new A.dl(4,"fabric")
B.mL=new A.be("mat-fabric-linen-sheet",B.dW,"wall-plaster",0.88,0.86,0.82,0.88,0,1)
B.bO=new A.dl(1,"wood")
B.mM=new A.be("fallback-mat",B.bO,"wood-oak",0.6,0.5,0.4,0.6,0,1)
B.mN=new A.be("mat-fabric-curtains",B.dW,"wall-plaster",0.48,0.22,0.2,0.9,0,1)
B.mY=new A.dl(5,"glass")
B.mO=new A.be("mat-glass-clear-window",B.mY,"wall-plaster",0.92,0.95,0.98,0.05,0,0.25)
B.mP=new A.be("mat-wood-mahogany-dark",B.bO,"wall-plaster",0.32,0.2,0.15,0.38,0,1)
B.mQ=new A.be("mat-wood-oak-polished",B.bO,"wall-plaster",0.46,0.34,0.25,0.42,0,1)
B.mR=new A.be("mat-plaster-clean",B.bN,"wall-plaster",0.72,0.7,0.68,0.85,0,1)
B.mS=new A.be("mat-concrete-floor",B.bQ,"grime",0.47,0.45,0.42,0.96,0,1)
B.mT=new A.be("mat-brass-wrought",B.bP,"wall-plaster",0.82,0.68,0.32,0.35,0.9,1)
B.mU=new A.be("mat-enamel-white",B.bP,"wall-plaster",0.9,0.9,0.88,0.25,0.1,1)
B.mV=new A.be("mat-wallpaper-damp",B.bN,"grime",0.42,0.44,0.43,0.94,0,1)
B.mZ=new A.dl(6,"masks")
B.mW=new A.be("mat-mask-soot-damp",B.mZ,"grime",0.15,0.15,0.15,0.98,0,1)
B.mX=new A.be("mat-porcelain-glaze",B.bQ,"floor-linoleum",0.94,0.94,0.92,0.12,0.05,1)
B.bR=new A.fr(0,"resident")
B.dX=new A.fr(1,"pending")
B.dY=new A.fr(2,"missing")
B.dZ=new A.fr(3,"evicted")
B.tC=new A.lR(!1)
B.no=new A.lR(!0)
B.np=new A.hA(0.88,0.065,0.02,4864556,!0)
B.bS=new A.hA(2.15,0.05,0.018,4864556,!1)
B.nq=new A.hA(0,0.18,0.024,4864556,!0)
B.ly=s([],t.bA)
B.lz=s([],A.a2("x<bE>"))
B.bT=new A.eJ(B.ly,B.lz,null)
B.e0=new A.cz(1,"settings")
B.o5=new A.cz(2,"visual")
B.o6=new A.cz(3,"graphics")
B.o7=new A.cz(4,"gameplay")
B.o8=new A.cz(5,"controls")
B.o9=new A.cz(6,"audio")
B.oa=new A.cz(7,"accessibility")
B.ob=new A.cz(8,"credits")
B.a9=new A.bE(1,"settings")
B.oc=new A.bE(2,"journal")
B.od=new A.bE(3,"sleep")
B.oe=new A.bE(4,"help")
B.of=new A.bE(5,"visitor")
B.og=new A.bE(6,"ending")
B.e9=new A.eK(0,"opened")
B.ea=new A.eK(2,"backed")
B.eb=new A.eK(3,"resumed")
B.oh=new A.eK(4,"dismissed")
B.ac=new A.eK(5,"unchanged")
B.oi=new A.bF("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.oj=new A.bF("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.ok=new A.bF("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.ol=new A.bF("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.om=new A.bF("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.on=new A.bF("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.oo=new A.bF("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.op=new A.bF("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.oq=new A.bF("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.or=new A.m1(0,1,null)
B.ot=new A.m2(1,"high")
B.os=new A.tD(!1,!0,!0,!0,!1,B.ot,35,256)
B.qx=new A.mA(1,"reinhard")
B.ou=new A.m6(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.w=new A.eL(0,"none")
B.az=new A.eL(1,"rain")
B.ad=new A.eL(2,"sleet")
B.ae=new A.eL(3,"snow")
B.a_=new A.eL(4,"hail")
B.oD=new A.d_(0,"tooShortForHeader")
B.oE=new A.d_(1,"badMagic")
B.oF=new A.d_(2,"unsupportedVersion")
B.ed=new A.d_(3,"unsupportedStride")
B.oG=new A.d_(4,"truncatedVertexData")
B.oH=new A.d_(5,"nonFiniteBounds")
B.ee=new A.d_(6,"nonFiniteVertex")
B.oI=new A.d_(7,"vertexCountNotMultipleOfThree")
B.bX=new A.fx(0,"safe")
B.T=new A.fx(1,"standard")
B.K=new A.fx(2,"high")
B.ah=new A.aP(B.F,0,t.M)
B.aA=new A.e_(B.bX,B.ah)
B.nT={shadows:0}
B.pS=new A.aP(B.nT,1,t.M)
B.ef=new A.e_(B.T,B.pS)
B.ny={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.pI=new A.aP(B.ny,5,t.M)
B.oK=new A.e_(B.K,B.pI)
B.nS={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.pR=new A.aP(B.nS,6,t.M)
B.eg=new A.e_(B.K,B.pR)
B.oJ=new A.fx(4,"shipping")
B.nA={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.pK=new A.aP(B.nA,7,t.M)
B.tF=new A.e_(B.oJ,B.pK)
B.af=new A.me(0,0,0,1)
B.oL=new A.a5(0,1)
B.oM=new A.a5(256,256)
B.oN=new A.a5(4096,2048)
B.oO=new A.a5(4096,4096)
B.oP=new A.a5(512,512)
B.oQ=new A.aT(0.35,0.52,0.88)
B.oR=new A.aH(0.46,0.25,0.2)
B.ei=new A.aT(0.22,0.45,0.92)
B.oS=new A.aH(0.48,0.4,0.34)
B.oT=new A.aH(0.31,0.25,0.23)
B.bY=new A.aT(0.75,0.52,0.42)
B.oU=new A.aT(0.4,0.65,0.95)
B.ej=new A.aT(0.88,0.96,1)
B.oV=new A.aH(0.37,0.33,0.31)
B.oW=new A.aT(0.62,0.48,0.45)
B.oX=new A.aH(0.34,0.32,0.29)
B.ek=new A.aH(0.38,0.25,0.19)
B.c_=new A.aT(0.9,0.8,0.72)
B.aW=new A.aT(0.28,0.16,0.12)
B.oY=new A.aH(0.31,0.28,0.24)
B.c0=new A.aT(0.65,0.45,0.35)
B.oZ=new A.aH(0.58,0.56,0.5)
B.el=new A.aT(0.2,0.38,0.9)
B.p_=new A.aH(0.44,0.37,0.28)
B.p0=new A.aH(0.52,0.5,0.44)
B.p2=new A.aH(0.24,0.25,0.27)
B.p3=new A.aH(0.28,0.27,0.25)
B.p4=new A.aT(0.35,0.28,0.25)
B.en=new A.aT(0.52,0.32,0.38)
B.p5=new A.aH(0.42,0.4,0.38)
B.p6=new A.aH(0.18,0.2,0.21)
B.p7=new A.aH(0.2,0.12,0.1)
B.aX=new A.aT(0.35,0.2,0.15)
B.p8=new A.aH(0.12,0.15,0.2)
B.p9=new A.hH(0,"constructed")
B.a0=new A.hH(1,"ready")
B.c1=new A.hH(2,"lost")
B.pa=new A.jg(B.aA,384,216,1,B.bd,0,512,32,4,1,B.cO)
B.c2=new A.fA(0,"constructed")
B.pb=new A.fA(1,"initializing")
B.c3=new A.fA(2,"ready")
B.eo=new A.fA(3,"contextLost")
B.i=new A.hI(0,"read")
B.k=new A.hI(1,"write")
B.U=new A.hI(2,"historyRead")
B.c4=new A.hJ(0,"prepared")
B.pc=new A.hJ(1,"committed")
B.pd=new A.hJ(2,"rolledBack")
B.r=new A.ji(0,"rgba8")
B.pe=new A.aR("dofBlurH",B.r,192,108,1,0)
B.pf=new A.aR("dofBlurV",B.r,192,108,1,0)
B.pg=new A.aR("dofOutput",B.r,384,216,1,0)
B.ep=new A.ji(2,"depth24")
B.ph=new A.aR("shadowMap",B.ep,512,512,1,0)
B.pi=new A.aR("volumetricLight",B.r,192,108,1,0)
B.pj=new A.aR("sceneColor",B.r,384,216,1,1)
B.pk=new A.aR("ssaoRaw",B.r,192,108,1,0)
B.pl=new A.aR("ssaoBlurred",B.r,192,108,1,0)
B.pm=new A.aR("gradeOutput",B.r,384,216,1,0)
B.pn=new A.aR("vhsOutput",B.r,384,216,1,0)
B.po=new A.aR("sceneDepth",B.ep,384,216,1,0)
B.pp=new A.aR("bloomBlurH",B.r,192,108,1,0)
B.pq=new A.aR("bloomBlurV",B.r,192,108,1,0)
B.pr=new A.aR("present",B.r,384,216,1,0)
B.c5=new A.aR("sceneColor",B.r,384,216,1,0)
B.ps=new A.aR("ps1Output",B.r,384,216,1,0)
B.pD=new A.fC(null,"save storage unavailable")
B.pE=new A.fC(null,"save could not be recovered")
B.pF=new A.fC(null,null)
B.nE={WheelUp:0,WheelDown:1}
B.pG=new A.aP(B.nE,2,t.M)
B.nL={hall:0,"living-room":1,kitchen:2,cellar:3,bedroom:4,landing:5,bathroom:6,"spare-room":7}
B.er=new A.aP(B.nL,8,t.M)
B.nP={open:0,closed:1}
B.pH=new A.aP(B.nP,2,t.M)
B.nG={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.pJ=new A.aP(B.nG,10,t.M)
B.nw={Escape:0}
B.es=new A.aP(B.nw,1,t.M)
B.nu={open:0,closed:1,mixed:2}
B.pL=new A.aP(B.nu,3,t.M)
B.nN={front:0,"rear-service":1}
B.pM=new A.aP(B.nN,2,t.M)
B.nM={"living-room":0}
B.et=new A.aP(B.nM,1,t.M)
B.pN=new A.hp([18,20],A.a2("hp<k>"))
B.nQ={overcast:0,rain:1}
B.pO=new A.aP(B.nQ,2,t.M)
B.nJ={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.pP=new A.aP(B.nJ,16,t.M)
B.nF={Escape:0,Tab:1,F11:2}
B.eu=new A.aP(B.nF,3,t.M)
B.nC={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.pQ=new A.aP(B.nC,5,t.M)
B.nz={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.aB=new A.aP(B.nz,7,t.M)
B.ex=new A.fE(2,"link")
B.q2=new A.jn(B.ex,"gl.createProgram() returned null")
B.ev=new A.fE(0,"vertex")
B.ew=new A.fE(1,"fragment")
B.ey=new A.fE(3,"validation")
B.z=new A.jo(0,"live")
B.ez=new A.jo(1,"unavailable")
B.qa=new A.jp(0,"full")
B.qb=new A.jp(2,"culled")
B.qg=new A.bn(0,"polarNight")
B.qh=new A.bn(1,"astronomicalDawn")
B.qi=new A.bn(10,"civilDusk")
B.qj=new A.bn(11,"nauticalDusk")
B.qk=new A.bn(12,"astronomicalDusk")
B.ql=new A.bn(13,"night")
B.qm=new A.bn(14,"polarDay")
B.qn=new A.bn(2,"nauticalDawn")
B.qo=new A.bn(3,"civilDawn")
B.qp=new A.bn(4,"sunrise")
B.eB=new A.bn(5,"morning")
B.qq=new A.bn(6,"solarNoon")
B.qr=new A.bn(7,"afternoon")
B.qs=new A.bn(8,"goldenHour")
B.qt=new A.bn(9,"sunset")
B.G=new A.B(0,1,0)
B.a4=new A.B(0,-1,0)
B.qu=new A.bQ(-1,B.G,B.a4,B.br,1,1,0.3,0.5)
B.qv=new A.mv(!1,"","",B.bA,B.bA)
B.eF=new A.e4(0,"resident")
B.eG=new A.e4(1,"pending")
B.eH=new A.e4(2,"missing")
B.eI=new A.e4(3,"evicted")
B.v=new A.B(0,0,0)
B.u=new A.eM(B.v,B.af,1)
B.qy=A.cK("Lz")
B.qz=A.cK("LA")
B.qA=A.cK("q6")
B.qB=A.cK("q7")
B.qC=A.cK("Gm")
B.qD=A.cK("Gn")
B.qE=A.cK("Go")
B.qF=A.cK("aj")
B.qG=A.cK("L")
B.qH=A.cK("vF")
B.qI=A.cK("vG")
B.qJ=A.cK("Hw")
B.qK=A.cK("c8")
B.e=new A.dw(0,"float1")
B.ak=new A.dw(1,"float2")
B.m=new A.dw(2,"float3")
B.qL=new A.dw(3,"float4")
B.p=new A.dw(4,"mat4")
B.eJ=new A.dw(5,"mat4Array")
B.ci=new A.q(B.e,0)
B.eK=new A.q(B.e,1)
B.a3=new A.dw(6,"sampler")
B.x=new A.q(B.a3,0)
B.al=new A.q(B.a3,1)
B.eL=new A.q(B.a3,2)
B.qM=new A.q(B.a3,3)
B.qN=new A.q(B.a3,4)
B.qO=new A.q(B.a3,5)
B.qP=new A.q(B.a3,6)
B.qQ=new A.vK(!1)
B.qR=new A.B(0,0,1)
B.qS=new A.B(0,3,0)
B.b0=new A.B(1,0,0)
B.qT=new A.B(0,0.52,0)
B.qU=new A.B(0.08,0.04,0.08)
B.qV=new A.B(0,-9.81,0)
B.qW=new A.B(0,0.34,0)
B.qX=new A.B(1/0,1/0,1/0)
B.qY=new A.B(0,2.8,0)
B.qZ=new A.B(2.75,3,2.75)
B.r_=new A.B(0.045,0.025,0.045)
B.r0=new A.B(0.1,0.05,0.1)
B.r1=new A.B(-1/0,-1/0,-1/0)
B.eM=new A.d1(1,"normal")
B.ck=new A.d1(6,"tangent4")
B.r2=new A.d1(0,"position")
B.cm=new A.bg(B.r2,0,3)
B.cn=new A.bg(B.eM,3,3)
B.eT=new A.bg(B.ck,6,4)
B.eN=new A.d1(2,"color")
B.eQ=new A.bg(B.eN,10,4)
B.eO=new A.d1(4,"alpha")
B.eR=new A.bg(B.eO,14,1)
B.eP=new A.d1(5,"uv0")
B.eS=new A.bg(B.eP,15,2)
B.r3=new A.d1(7,"uv1")
B.r7=new A.bg(B.r3,17,2)
B.cl=new A.d1(8,"legacyMaterialEffect")
B.ra=new A.bg(B.cl,19,1)
B.m_=s([B.cm,B.cn,B.eT,B.eQ,B.eR,B.eS,B.r7,B.ra],t.v5)
B.rb=new A.jx("surfaceV2WithUv1",20,B.m_)
B.r4=new A.bg(B.eN,6,4)
B.r5=new A.bg(B.eO,10,1)
B.r6=new A.bg(B.eP,11,2)
B.r8=new A.bg(B.cl,13,1)
B.le=s([B.cm,B.cn,B.r4,B.r5,B.r6,B.r8],t.v5)
B.am=new A.jx("compatibility14",14,B.le)
B.r9=new A.bg(B.cl,17,1)
B.kB=s([B.cm,B.cn,B.eT,B.eQ,B.eR,B.eS,B.r9],t.v5)
B.rc=new A.jx("surfaceV2",18,B.kB)
B.rd=new A.eQ(0,"visitorAnswered")
B.eU=new A.eQ(1,"visitorIgnored")
B.re=new A.eQ(2,"entryVerified")
B.rf=new A.eQ(3,"entryContradicted")
B.rg=new A.eQ(4,"exposureAccepted")
B.ri=new A.dx(1,"malformedDay")
B.rj=new A.dx(2,"malformedTier")
B.eV=new A.dx(3,"missingTierLines")
B.ao=new A.dx(6,"invalidPhase")
B.rm=new A.bI(B.ao,"No reaction is due.")
B.ru=new A.bz(B.rm)
B.rr=new A.bI(B.ao,"The active visit cannot be chosen.")
B.rv=new A.bz(B.rr)
B.rn=new A.bI(B.ao,"The active visit has no line to advance.")
B.rw=new A.bz(B.rn)
B.rl=new A.dx(5,"noActiveVisit")
B.ro=new A.bI(B.rl,"There is no active visit.")
B.eW=new A.bz(B.ro)
B.rq=new A.bI(B.ao,"A visit is already active.")
B.rx=new A.bz(B.rq)
B.rk=new A.dx(4,"noArrival")
B.rt=new A.bI(B.rk,"The authored arrival is missing.")
B.ry=new A.bz(B.rt)
B.rp=new A.bI(B.ao,"That answer is not offered.")
B.rz=new A.bz(B.rp)
B.rh=new A.dx(0,"missingCorpus")
B.rs=new A.bI(B.rh,"The authored visitor corpus is empty.")
B.rA=new A.bz(B.rs)
B.rB=new A.eU(0,"none")
B.rC=new A.eU(1,"splash")
B.cq=new A.eU(2,"settle")
B.rD=new A.eU(3,"melt")
B.eX=new A.eU(4,"rebound")
B.rE=new A.fK(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.rF=new A.fK(-2,8.8,4.5,0.9,1,!0,0.00005)
B.rG=new A.fK(0,0,0,1,1,!1,0)
B.rH=new A.fK(-5,18,5.5,0.65,1.35,!0,0.001)
B.rI=new A.fK(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.eY=new A.fN(1,"exact")
B.cr=new A.fN(2,"partial")
B.b2=new A.fN(3,"contradiction")
B.rJ=new A.fN(0,"skipped")
B.rK=new A.fM(B.rJ,B.ah)
B.rL=new A.fM(B.cr,B.ah)
B.rM=new A.jB(B.a7,!1)
B.rN=new A.jB(B.a7,!0)
B.eZ=new A.jD(0,"horizontal")
B.rO=new A.jD(1,"vertical")
B.f_=new A.jF(0,"horizontal")
B.rP=new A.jF(1,"vertical")
B.b3=new A.hX(0,"empty")
B.t2=new A.hX(1,"cpuReady")
B.b4=new A.hX(4,"released")})();(function staticFields(){$.wI=null
$.cs=A.d([],A.a2("x<L>"))
$.Cf=null
$.tQ=0
$.tR=A.JL()
$.BB=null
$.BA=null
$.Eo=null
$.Ef=null
$.Ex=null
$.z2=null
$.za=null
$.Bc=null
$.x9=A.d([],A.a2("x<K<L>?>"))
$.i9=null
$.km=null
$.kn=null
$.AK=!1
$.ar=B.B
$.CF=""
$.CG=null
$.BR=null
$.p5=null
$.CA=null
$.to=null
$.dB=A.ak()
$.fW=A.ak()
$.ay=null
$.xn=A.ak()
$.DG=null
$.o=A.ak()
$.Dm=A.ak()
$.d5=A.ak()
$.ao=A.ak()
$.T=A.ak()
$.bA=A.ak()
$.X=A.ak()
$.Au=A.ak()
$.xq=null
$.AF=null
$.bp=null
$.Ax=!1
$.AU=!1
$.kj=B.b8
$.dC=B.aI
$.yL=!1
$.B5=!1
$.DI=null
$.i5=null
$.o1=A.m(t.N,t.xe)
$.nP=null
$.Du=0
$.Ee=0
$.AL=null
$.fZ=!1
$.DH=!1
$.AM=0
$.f2=0
$.Az="booting"
$.cr=0
$.f7=0
$.ag="hall"
$.f1=A.ak()
$.i2=A.ak()
$.cq=A.ak()
$.DO=null
$.AV=0
$.AZ=1.65
$.f5=null
$.bk=null
$.kq=!1
$.cJ=A.ak()
$.i3=A.ak()
$.kf=A.ak()
$.nN=A.ak()
$.Dl=A.ak()
$.Dk=A.ak()
$.aC=A.ak()
$.fX=A.ak()
$.ke=A.ak()
$.nM=A.ak()
$.kg=A.ak()
$.kh=A.ak()
$.fV=A.ak()
$.f0=A.ak()
$.i1=A.ak()
$.kd=A.ak()
$.kb=A.ak()
$.kc=A.ak()
$.aU=A.ak()
$.nL=A.ak()
$.bj=A.ak()
$.yM=A.a0(t.S)
$.dD=A.d([],t.s)
$.AD=null
$.E5=!1
$.Dn=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"LC","EI",()=>A.z4("_$dart_dartClosure"))
s($,"LB","zT",()=>A.z4("_$dart_dartClosure_dartJSInterop"))
s($,"Mo","F8",()=>A.d([new J.lD()],A.a2("x<jl>")))
s($,"LQ","EL",()=>A.e6(A.vE({
toString:function(){return"$receiver$"}})))
s($,"LR","EM",()=>A.e6(A.vE({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"LS","EN",()=>A.e6(A.vE(null)))
s($,"LT","EO",()=>A.e6(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"LW","ER",()=>A.e6(A.vE(void 0)))
s($,"LX","ES",()=>A.e6(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"LV","EQ",()=>A.e6(A.CC(null)))
s($,"LU","EP",()=>A.e6(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"LZ","EU",()=>A.e6(A.CC(void 0)))
s($,"LY","ET",()=>A.e6(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"M0","Bm",()=>A.I1())
s($,"M4","EZ",()=>A.GI(4096))
s($,"M2","EX",()=>new A.xj().$0())
s($,"M3","EY",()=>new A.xi().$0())
s($,"M1","EW",()=>A.GH(A.S(A.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Mf","ij",()=>A.o7(B.qG))
s($,"LO","Bl",()=>{A.H1()
return $.tQ})
s($,"Ly","EH",()=>B.c5.iT())
s($,"LH","Bk",()=>A.m_(A.d([255,255,255,255],t.t)))
s($,"LE","Bh",()=>A.m_(A.d([128,128,255,255],t.t)))
s($,"LD","Bg",()=>A.m_(A.d([0,0,0,255],t.t)))
s($,"LF","Bi",()=>A.m_(A.d([255,255,255,255],t.t)))
s($,"LG","Bj",()=>A.m_(A.d([255,255,255,255],t.t)))
s($,"Mu","Fc",()=>A.jw(0,1,0))
s($,"M_","EV",()=>A.HZ(A.a0(t.N),0,0,A.jw(0,0,0)))
s($,"Lx","EG",()=>{var q=new A.rP(A.m(t.N,A.a2("be")))
q.aG(B.mR)
q.aG(B.mK)
q.aG(B.mV)
q.aG(B.mQ)
q.aG(B.mP)
q.aG(B.mJ)
q.aG(B.mT)
q.aG(B.mU)
q.aG(B.mI)
q.aG(B.mX)
q.aG(B.mS)
q.aG(B.mN)
q.aG(B.mL)
q.aG(B.mO)
q.aG(B.mW)
return q})
s($,"LJ","EJ",()=>{var q=$.BR
return new A.qQ(q==null?$.BR=A.Gh(t.P.a(A.L9('{\n  "schemaVersion": 1,\n  "kind": "quarantine-house-placements",\n  "sourceRef": "assets/house/house.json",\n  "coordinateSpace": "room-local-y-up",\n  "placements": [\n    {\n      "instanceId": "hall.coat-rack-01",\n      "roomId": "hall",\n      "source": "catalog",\n      "modelId": "kenney.coat-rack",\n      "position": [\n        0.45,\n        0.0,\n        0.55\n      ],\n      "rotationY": 45.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.25,\n        "height": 1.85\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "hall.coat-rack",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.console-lamp-01",\n      "roomId": "hall",\n      "source": "catalog",\n      "modelId": "polyhaven.desk-lamp-arm-01",\n      "position": [\n        0.35,\n        0.75,\n        2.5\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.15,\n        "height": 0.48\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "hall.entry-light",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.coat-hooks-01",\n      "roomId": "hall",\n      "source": "procedural",\n      "propKind": "coatHooks",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        2.25,\n        1.6,\n        3.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.15,\n        "height": 1.6\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "hall.coat-hooks",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.doormat-01",\n      "roomId": "hall",\n      "source": "procedural",\n      "propKind": "doormat",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        1.25,\n        0.01,\n        4.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.3,\n        "height": 0.02\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.umbrella-stand-01",\n      "roomId": "hall",\n      "source": "procedural",\n      "propKind": "umbrellaStand",\n      "materialFamily": "mat-ceramic-glaze",\n      "position": [\n        2.05,\n        0.0,\n        3.7\n      ],\n      "rotationY": 45.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.12,\n        "height": 0.55\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "hall.umbrella-stand",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.stair-runner-01",\n      "roomId": "hall",\n      "source": "procedural",\n      "propKind": "stairRunner",\n      "materialFamily": "mat-fabric-linen-sheet",\n      "position": [\n        0.25,\n        0.0,\n        5.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.4,\n        "height": 0.01\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.picture-frames-01",\n      "roomId": "hall",\n      "source": "procedural",\n      "propKind": "pictureFrames",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        2.45,\n        1.8,\n        4.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.3\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "hall.light-switch-01",\n      "roomId": "hall",\n      "source": "procedural",\n      "propKind": "lightSwitch",\n      "materialFamily": "mat-enamel-white",\n      "position": [\n        1.45,\n        1.3,\n        3.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.04,\n        "height": 0.08\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "hall.light-switch",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.crt-tv-01",\n      "roomId": "living-room",\n      "source": "catalog",\n      "modelId": "polyhaven.television-01",\n      "position": [\n        0.85,\n        0.65,\n        3.25\n      ],\n      "rotationY": -35.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "media",\n      "collision": {\n        "radius": 0.32,\n        "height": 0.46\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.tv-broadcast",\n      "canonicalPropId": "living_room.wireless-set",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.coffee-table-01",\n      "roomId": "living-room",\n      "source": "catalog",\n      "modelId": "polyhaven.coffee-table-01",\n      "position": [\n        2.025,\n        0.0,\n        1.68\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "conversational",\n      "collision": {\n        "radius": 0.6,\n        "height": 0.45\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.coffee-table",\n      "canonicalPropId": "living_room.occasionalTable",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.reading-lamp-01",\n      "roomId": "living-room",\n      "source": "catalog",\n      "modelId": "polyhaven.desk-lamp-arm-01",\n      "position": [\n        1.45,\n        0.65,\n        3.25\n      ],\n      "rotationY": 15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "media",\n      "collision": {\n        "radius": 0.15,\n        "height": 0.48\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.lamp-reading",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.bookcase-01",\n      "roomId": "living-room",\n      "source": "catalog",\n      "modelId": "kenney.bookcase",\n      "position": [\n        0.4,\n        0.0,\n        1.8\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.45,\n        "height": 1.8\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.bookcase",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.mantle-clock-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "mantleClock",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        2.25,\n        1.35,\n        0.05\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "focal",\n      "collision": {\n        "radius": 0.15,\n        "height": 0.25\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.mantle-clock",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.porcelain-mermaid-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "porcelainMermaid",\n      "materialFamily": "mat-porcelain-glaze",\n      "position": [\n        2.7,\n        1.35,\n        0.05\n      ],\n      "rotationY": -15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "focal",\n      "collision": {\n        "radius": 0.12,\n        "height": 0.35\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.mermaid-statuette",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.coal-scuttle-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "coalScuttle",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        1.55,\n        0.2,\n        0.15\n      ],\n      "rotationY": 30.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "focal",\n      "collision": {\n        "radius": 0.2,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.coal-scuttle",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.fire-tools-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "fireTools",\n      "materialFamily": "mat-brass-wrought",\n      "position": [\n        2.95,\n        0.4,\n        0.15\n      ],\n      "rotationY": -30.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "focal",\n      "collision": {\n        "radius": 0.12,\n        "height": 0.75\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.armchair-prop-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "armchair",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        2.25,\n        0.45,\n        1.5\n      ],\n      "rotationY": 180.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "conversational",\n      "collision": {\n        "radius": 0.45,\n        "height": 0.9\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.armchair",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.occasional-table-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "occasionalTable",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        3.85,\n        0.6,\n        3.4\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "conversational",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.65\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.rug-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "rug",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        2.25,\n        0.01,\n        1.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "conversational",\n      "collision": {\n        "radius": 0.9,\n        "height": 0.02\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.curtains-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "curtains",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        0.15,\n        1.5,\n        2.0\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "focal",\n      "collision": {\n        "radius": 0.15,\n        "height": 2.1\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "living-room.photograph-01",\n      "roomId": "living-room",\n      "source": "procedural",\n      "propKind": "photograph",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        2.65,\n        1.35,\n        0.05\n      ],\n      "rotationY": -15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "focal",\n      "collision": {\n        "radius": 0.1,\n        "height": 0.18\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "living-room.photograph",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.plate-rack-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "plateRack",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        0.45,\n        1.5,\n        2.9\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.2,\n        "height": 0.6\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "kitchen.plate-rack",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.enamel-sink-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "enamelSink",\n      "materialFamily": "mat-ceramic-glaze",\n      "position": [\n        0.35,\n        0.85,\n        2.3\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "culinary",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.85\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "kitchen.sink",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.gas-cooker-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "gasCooker",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        0.35,\n        0.85,\n        0.9\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "culinary",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.9\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "kitchen.cooker",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.scrubbed-table-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "scrubbedTable",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        2.45,\n        0.75,\n        2.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "culinary",\n      "collision": {\n        "radius": 0.6,\n        "height": 0.75\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.chair-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "chair1",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        2.45,\n        0.45,\n        2.7\n      ],\n      "rotationY": 180.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "culinary",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.85\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.chair-02",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "chair2",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        2.45,\n        0.45,\n        1.3\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "culinary",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.85\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.tea-caddy-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "teaCaddy",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        0.55,\n        0.9,\n        2.85\n      ],\n      "rotationY": 15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.08,\n        "height": 0.15\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "kitchen.tea-caddy",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.bread-bin-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "breadBin",\n      "materialFamily": "mat-ceramic-glaze",\n      "position": [\n        2.05,\n        0.8,\n        2.0\n      ],\n      "rotationY": -10.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "culinary",\n      "collision": {\n        "radius": 0.18,\n        "height": 0.25\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "kitchen.bread-bin",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.wall-clock-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "wallClock",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        3.65,\n        1.8,\n        0.1\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.15,\n        "height": 0.45\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "kitchen.wall-clock",\n      "pickable": false\n    },\n    {\n      "instanceId": "kitchen.roller-towel-01",\n      "roomId": "kitchen",\n      "source": "procedural",\n      "propKind": "rollerTowel",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        3.85,\n        1.3,\n        2.85\n      ],\n      "rotationY": -90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.1,\n        "height": 0.7\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.box-stack-01",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "kenney.cardboard-box",\n      "position": [\n        0.9,\n        0.0,\n        0.9\n      ],\n      "rotationY": 12.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.28,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.archive-box-1",\n      "canonicalPropId": "cellar.preserving-jars",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.box-stack-02",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "kenney.cardboard-box",\n      "position": [\n        1.45,\n        0.0,\n        0.9\n      ],\n      "rotationY": -8.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.28,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.archive-box-2",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.wine-barrel-01",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "polyhaven.wine-barrel-01",\n      "position": [\n        2.45,\n        0.14,\n        3.25\n      ],\n      "rotationY": 15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.38,\n        "height": 0.94\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.wine-barrel",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.utility-barrel-01",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "kenney.barrel",\n      "position": [\n        2.95,\n        0.14,\n        3.25\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.8\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.utility-barrel",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.storage-crate-01",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "polyhaven.wooden-crate-01",\n      "position": [\n        1.15,\n        0.0,\n        1.45\n      ],\n      "rotationY": 5.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.48\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.produce-crate",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.sump-bucket-01",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "kenney.bucket",\n      "position": [\n        2.55,\n        0.0,\n        2.2\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.2,\n        "height": 0.35\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.sump-bucket",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.inspection-lantern-01",\n      "roomId": "cellar",\n      "source": "catalog",\n      "modelId": "polyhaven.lantern-01",\n      "position": [\n        1.55,\n        1.25,\n        0.3\n      ],\n      "rotationY": 20.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.15,\n        "height": 0.38\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.lantern",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.coal-heap-01",\n      "roomId": "cellar",\n      "source": "procedural",\n      "propKind": "coalHeap",\n      "materialFamily": "mat-concrete-floor",\n      "position": [\n        3.5,\n        0.3,\n        3.2\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.8,\n        "height": 0.6\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.preserving-jars-prop-01",\n      "roomId": "cellar",\n      "source": "procedural",\n      "propKind": "preservingJars",\n      "materialFamily": "mat-glass-clear-window",\n      "position": [\n        0.3,\n        1.2,\n        2.0\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.3\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.preserving-jars",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.mangle-01",\n      "roomId": "cellar",\n      "source": "procedural",\n      "propKind": "mangle",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        2.0,\n        0.6,\n        0.5\n      ],\n      "rotationY": 45.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.4,\n        "height": 1.2\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.mangle",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.bare-bulb-01",\n      "roomId": "cellar",\n      "source": "procedural",\n      "propKind": "bareBulb",\n      "materialFamily": "mat-glass-clear-window",\n      "position": [\n        2.0,\n        1.95,\n        2.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.1,\n        "height": 0.25\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.bare-bulb",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.ventilation-grille-01",\n      "roomId": "cellar",\n      "source": "procedural",\n      "propKind": "ventilationGrille",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        0.1,\n        1.8,\n        3.2\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.2,\n        "height": 0.2\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "cellar.meter-cupboard-01",\n      "roomId": "cellar",\n      "source": "procedural",\n      "propKind": "meterCupboard",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        3.6,\n        1.3,\n        0.6\n      ],\n      "rotationY": -90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.6\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "cellar.meter-cupboard",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.master-bed-01",\n      "roomId": "bedroom",\n      "source": "catalog",\n      "modelId": "kenney.bed-double",\n      "position": [\n        1.89,\n        0.0,\n        1.6\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 1.05,\n        "height": 0.9\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bedroom.bed",\n      "canonicalPropId": "bedroom.bedstead",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.nightstand-01",\n      "roomId": "bedroom",\n      "source": "catalog",\n      "modelId": "kenney.bedside-table",\n      "position": [\n        3.14,\n        0.0,\n        1.6\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.3,\n        "height": 0.6\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bedroom.nightstand",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.alarm-clock-01",\n      "roomId": "bedroom",\n      "source": "catalog",\n      "modelId": "polyhaven.alarm-clock-01",\n      "position": [\n        3.14,\n        0.6,\n        1.6\n      ],\n      "rotationY": -20.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.1,\n        "height": 0.16\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bedroom.alarm-clock",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.bedstead-prop-01",\n      "roomId": "bedroom",\n      "source": "procedural",\n      "propKind": "bedstead",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        1.45,\n        0.5,\n        3.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.9,\n        "height": 1.1\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.eiderdown-01",\n      "roomId": "bedroom",\n      "source": "procedural",\n      "propKind": "eiderdown",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        1.45,\n        0.55,\n        3.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.85,\n        "height": 0.2\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.wardrobe-01",\n      "roomId": "bedroom",\n      "source": "procedural",\n      "propKind": "wardrobe",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        3.85,\n        1.0,\n        0.8\n      ],\n      "rotationY": -90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.45,\n        "height": 2.0\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bedroom.wardrobe",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.dressing-table-01",\n      "roomId": "bedroom",\n      "source": "procedural",\n      "propKind": "dressingTable",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        3.85,\n        0.8,\n        3.0\n      ],\n      "rotationY": -90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.35,\n        "height": 1.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bedroom.dressing-table",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.washstand-01",\n      "roomId": "bedroom",\n      "source": "procedural",\n      "propKind": "washstand",\n      "materialFamily": "mat-ceramic-glaze",\n      "position": [\n        0.45,\n        0.8,\n        0.8\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.3,\n        "height": 0.9\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bedroom.washstand",\n      "pickable": false\n    },\n    {\n      "instanceId": "bedroom.rag-rug-01",\n      "roomId": "bedroom",\n      "source": "procedural",\n      "propKind": "ragRug",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        1.45,\n        0.01,\n        1.7\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sleeping",\n      "collision": {\n        "radius": 0.6,\n        "height": 0.02\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "landing.stair-runner-end-01",\n      "roomId": "landing",\n      "source": "procedural",\n      "propKind": "stairRunnerEnd",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        1.25,\n        0.0,\n        1.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.5,\n        "height": 0.02\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "landing.airing-cupboard-door-01",\n      "roomId": "landing",\n      "source": "procedural",\n      "propKind": "airingCupboardDoor",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        2.25,\n        1.0,\n        1.5\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.4,\n        "height": 2.0\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "landing.airing-cupboard",\n      "pickable": false\n    },\n    {\n      "instanceId": "landing.light-pull-cord-01",\n      "roomId": "landing",\n      "source": "procedural",\n      "propKind": "lightPullCord",\n      "materialFamily": "mat-glass-clear-window",\n      "position": [\n        1.75,\n        1.5,\n        2.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.1,\n        "height": 0.5\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "landing.light-pull",\n      "pickable": false\n    },\n    {\n      "instanceId": "landing.balustrade-01",\n      "roomId": "landing",\n      "source": "procedural",\n      "propKind": "balustrade",\n      "materialFamily": "mat-wood-mahogany-dark",\n      "position": [\n        0.25,\n        0.5,\n        0.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.1,\n        "height": 1.0\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "landing.window-net-curtain-01",\n      "roomId": "landing",\n      "source": "procedural",\n      "propKind": "windowNetCurtain",\n      "materialFamily": "mat-fabric-curtains",\n      "position": [\n        1.25,\n        1.5,\n        0.1\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "circulation",\n      "collision": {\n        "radius": 0.5,\n        "height": 1.5\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "bathroom.bathtub-01",\n      "roomId": "bathroom",\n      "source": "catalog",\n      "modelId": "kenney.bathtub",\n      "position": [\n        0.65,\n        0.0,\n        1.35\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sanitary",\n      "collision": {\n        "radius": 0.85,\n        "height": 0.6\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bathroom.bath",\n      "canonicalPropId": "bathroom.cast-iron-bath",\n      "pickable": false\n    },\n    {\n      "instanceId": "bathroom.sink-01",\n      "roomId": "bathroom",\n      "source": "catalog",\n      "modelId": "kenney.bathroom-sink",\n      "position": [\n        0.5,\n        0.0,\n        1.25\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sanitary",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.85\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bathroom.sink",\n      "canonicalPropId": "bathroom.pedestal-basin",\n      "pickable": false\n    },\n    {\n      "instanceId": "bathroom.mirror-01",\n      "roomId": "bathroom",\n      "source": "catalog",\n      "modelId": "kenney.bathroom-mirror",\n      "position": [\n        0.1,\n        1.25,\n        1.25\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sanitary",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.7\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bathroom.mirror",\n      "pickable": false\n    },\n    {\n      "instanceId": "bathroom.medicine-cabinet-01",\n      "roomId": "bathroom",\n      "source": "procedural",\n      "propKind": "medicineCabinet",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        2.25,\n        1.5,\n        2.25\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sanitary",\n      "collision": {\n        "radius": 0.2,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bathroom.medicine-cabinet",\n      "pickable": false\n    },\n    {\n      "instanceId": "bathroom.chain-pull-cistern-01",\n      "roomId": "bathroom",\n      "source": "procedural",\n      "propKind": "chainPullCistern",\n      "materialFamily": "mat-ceramic-glaze",\n      "position": [\n        0.25,\n        1.8,\n        0.25\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sanitary",\n      "collision": {\n        "radius": 0.2,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "bathroom.chain-pull",\n      "pickable": false\n    },\n    {\n      "instanceId": "bathroom.bath-rack-01",\n      "roomId": "bathroom",\n      "source": "procedural",\n      "propKind": "bathRack",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        1.25,\n        0.6,\n        1.25\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "sanitary",\n      "collision": {\n        "radius": 0.3,\n        "height": 0.1\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.work-desk-01",\n      "roomId": "spare-room",\n      "source": "catalog",\n      "modelId": "kenney.desk",\n      "position": [\n        1.2,\n        0.0,\n        1.1\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "work",\n      "collision": {\n        "radius": 0.65,\n        "height": 0.75\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "spare-room.desk",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.desk-chair-01",\n      "roomId": "spare-room",\n      "source": "catalog",\n      "modelId": "kenney.desk-chair",\n      "position": [\n        1.2,\n        0.0,\n        1.65\n      ],\n      "rotationY": 180.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "work",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.85\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "spare-room.chair",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.crt-monitor-01",\n      "roomId": "spare-room",\n      "source": "catalog",\n      "modelId": "kenney.computer-screen",\n      "position": [\n        1.2,\n        0.75,\n        1.1\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "work",\n      "collision": {\n        "radius": 0.22,\n        "height": 0.38\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "spare-room.computer",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.archive-box-01",\n      "roomId": "spare-room",\n      "source": "catalog",\n      "modelId": "kenney.cardboard-box",\n      "position": [\n        3.75,\n        0.0,\n        2.25\n      ],\n      "rotationY": -15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.28,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "spare-room.archive-box",\n      "canonicalPropId": "spareRoom.paper-archive-box",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.single-bed-01",\n      "roomId": "spare-room",\n      "source": "procedural",\n      "propKind": "singleBed",\n      "materialFamily": "mat-iron-cast",\n      "position": [\n        2.25,\n        0.4,\n        1.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.6,\n        "height": 0.8\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.chest-of-drawers-01",\n      "roomId": "spare-room",\n      "source": "procedural",\n      "propKind": "chestOfDrawers",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        3.25,\n        0.5,\n        2.5\n      ],\n      "rotationY": 90.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.4,\n        "height": 1.0\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "spare-room.drawers",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.utility-chair-01",\n      "roomId": "spare-room",\n      "source": "procedural",\n      "propKind": "utilityChair",\n      "materialFamily": "mat-wood-oak-polished",\n      "position": [\n        1.25,\n        0.4,\n        0.5\n      ],\n      "rotationY": 45.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "work",\n      "collision": {\n        "radius": 0.3,\n        "height": 0.8\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.bare-curtain-rod-01",\n      "roomId": "spare-room",\n      "source": "procedural",\n      "propKind": "bareCurtainRod",\n      "materialFamily": "mat-brass-wrought",\n      "position": [\n        2.25,\n        2.0,\n        2.9\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.1,\n        "height": 0.1\n      },\n      "visibilityLayer": "furniture",\n      "pickable": false\n    },\n    {\n      "instanceId": "spare-room.paper-archive-box-01",\n      "roomId": "spare-room",\n      "source": "procedural",\n      "propKind": "paperArchiveBox",\n      "materialFamily": "mat-plaster-clean",\n      "position": [\n        1.25,\n        0.2,\n        2.5\n      ],\n      "rotationY": 15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.25,\n        "height": 0.3\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "spare-room.paper-box",\n      "pickable": false\n    },\n    {\n      "instanceId": "attic.loft-ladder-01",\n      "roomId": "attic",\n      "source": "catalog",\n      "modelId": "polyhaven.wooden-ladder",\n      "position": [\n        2.2,\n        0.0,\n        3.1\n      ],\n      "rotationY": -15.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.28,\n        "height": 2.35\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "attic.ladder",\n      "pickable": false\n    },\n    {\n      "instanceId": "attic.storage-crate-01",\n      "roomId": "attic",\n      "source": "catalog",\n      "modelId": "polyhaven.wooden-crate-01",\n      "position": [\n        1.2,\n        0.0,\n        3.8\n      ],\n      "rotationY": 10.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.35,\n        "height": 0.48\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "attic.wooden-crate",\n      "pickable": false\n    },\n    {\n      "instanceId": "attic.travel-chest-01",\n      "roomId": "attic",\n      "source": "catalog",\n      "modelId": "kenney.chest",\n      "position": [\n        2.8,\n        0.0,\n        3.8\n      ],\n      "rotationY": -5.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.4,\n        "height": 0.5\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "attic.chest",\n      "pickable": false\n    },\n    {\n      "instanceId": "attic.archive-box-01",\n      "roomId": "attic",\n      "source": "catalog",\n      "modelId": "kenney.cardboard-box",\n      "position": [\n        5.2,\n        0.0,\n        3.2\n      ],\n      "rotationY": 25.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "storage",\n      "collision": {\n        "radius": 0.28,\n        "height": 0.4\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "attic.archive-box",\n      "pickable": false\n    },\n    {\n      "instanceId": "attic.storm-lantern-01",\n      "roomId": "attic",\n      "source": "catalog",\n      "modelId": "polyhaven.lantern-01",\n      "position": [\n        1.8,\n        0.0,\n        3.5\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.15,\n        "height": 0.38\n      },\n      "visibilityLayer": "furniture",\n      "interactiveTag": "attic.lantern",\n      "pickable": false\n    },\n    {\n      "instanceId": "roof.downpipe-nw-01",\n      "roomId": "roof",\n      "source": "catalog",\n      "modelId": "kenney.detail-pipe",\n      "position": [\n        0.0,\n        1.4,\n        0.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.15,\n        "height": 1.0\n      },\n      "visibilityLayer": "architecture",\n      "pickable": false\n    },\n    {\n      "instanceId": "roof.downpipe-se-01",\n      "roomId": "roof",\n      "source": "catalog",\n      "modelId": "kenney.detail-pipe",\n      "position": [\n        7.0,\n        1.4,\n        7.0\n      ],\n      "rotationY": 0.0,\n      "scale": [\n        1.0,\n        1.0,\n        1.0\n      ],\n      "zone": "utility",\n      "collision": {\n        "radius": 0.15,\n        "height": 1.0\n      },\n      "visibilityLayer": "architecture",\n      "pickable": false\n    }\n  ]\n}\n'))):q)})
s($,"LN","EK",()=>{var q=A.ti(0),p=A.ti(0),o=A.ti(0)
return A.Hc(p,A.ti(0),q,o)})
s($,"LK","kv",()=>{var q=new A.qS(A.m(t.N,A.a2("c3")))
q.bA(new A.lv("hall"))
q.bA(new A.lM("living-room"))
q.bA(new A.lJ("kitchen"))
q.bA(new A.kT("cellar"))
q.bA(new A.kN("bedroom"))
q.bA(new A.lK("landing"))
q.bA(new A.kM("bathroom"))
q.bA(new A.ms("spare-room"))
return q})
s($,"Mq","F9",()=>A.je("^[a-z0-9][a-z0-9._-]*$"))
s($,"Mx","h3",()=>{var q=$.CA
if(q==null){A.yZ()
A.yZ()
A.yZ()
A.yZ()
q=$.CA=new A.vs()}return q})
s($,"LI","zU",()=>A.A_(B.bg,B.da,!0,B.bh,B.dc,B.df,B.dg,B.di,!0,!1,B.dk))
s($,"Ma","F_",()=>new A.ph())
r($,"E8","dF",()=>A.Af(null,null))
r($,"kl","kx",()=>A.hr(null,null))
r($,"AC","h2",()=>A.hh(null,null,!1,1,!1,!1,2,1))
r($,"AG","cM",()=>$.zU())
s($,"Mm","F6",()=>A.IT())
s($,"Mn","F7",()=>new A.tY(A.m(t.N,t.i)))
s($,"Mg","F2",()=>new A.qT())
s($,"Mh","F3",()=>new A.r5())
s($,"Mi","zW",()=>new A.rm(A.m(t.N,t.S)))
s($,"Mc","F0",()=>A.e7().gb_().h(0,"debugPause")==="1")
s($,"M9","kw",()=>A.e7().gb_().h(0,"automation")==="1")
s($,"M6","zV",()=>A.K1())
s($,"M5","Bn",()=>$.zV()!=null)
s($,"M7","Bo",()=>$.kw()?A.e7().gb_().h(0,"captureMantleId"):null)
s($,"M8","Bp",()=>A.e7().gb_().h(0,"captureMantleLit")==="1")
r($,"yH","ek",()=>A.jw(0,0,0))
r($,"yz","F5",()=>A.jw(0,0,0))
r($,"yS","o9",()=>A.jw(0,0,0))
s($,"Mb","Bq",()=>A.K2())
s($,"Mk","ky",()=>new A.q9(A.jw(0,0,0)))
s($,"Mj","F4",()=>new A.rL(new A.pO()))
s($,"Md","cL",()=>new A.qs(A.d([],t.s)))
s($,"Mp","bU",()=>A.Cv())
s($,"Ms","Fa",()=>new A.v3(A.m(t.N,t.oZ)))
s($,"Mr","Br",()=>new A.u_(A.H4(520588),B.bq))
s($,"Mt","Fb",()=>new A.w1())
s($,"Me","F1",()=>new A.qM())
s($,"Ml","ik",()=>new A.ts(B.bT))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eI,ArrayBuffer:A.hB,ArrayBufferView:A.j0,DataView:A.lT,Float32Array:A.iY,Float64Array:A.lU,Int16Array:A.lV,Int32Array:A.lW,Int8Array:A.lX,Uint16Array:A.lY,Uint32Array:A.lZ,Uint8ClampedArray:A.ft,CanvasPixelArray:A.ft,Uint8Array:A.j1})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bu.$nativeSuperclassTag="ArrayBufferView"
A.jN.$nativeSuperclassTag="ArrayBufferView"
A.jO.$nativeSuperclassTag="ArrayBufferView"
A.iZ.$nativeSuperclassTag="ArrayBufferView"
A.jP.$nativeSuperclassTag="ArrayBufferView"
A.jQ.$nativeSuperclassTag="ArrayBufferView"
A.j_.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$7=function(a,b,c,d,e,f,g){return this(a,b,c,d,e,f,g)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.o6
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()