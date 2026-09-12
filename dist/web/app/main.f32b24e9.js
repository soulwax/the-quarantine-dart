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
if(a[b]!==s){A.Lm(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.B5(b)
return new s(c,this)}:function(){if(s===null)s=A.B5(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.B5(a).prototype
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
Bb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
z1(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.B9==null){A.L_()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.CB("Return interceptor for "+A.z(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.wG
if(o==null)o=$.wG=A.z0(n)
p=q[o]}if(p!=null)return p
p=A.L5(a)
if(p!=null)return p
if(typeof a=="function")return B.kk
s=Object.getPrototypeOf(a)
if(s==null)return B.e6
if(s===Object.prototype)return B.e6
if(typeof q=="function"){o=$.wG
if(o==null)o=$.wG=A.z0(n)
Object.defineProperty(q,o,{value:B.cm,enumerable:false,writable:true,configurable:true})
return B.cm}return B.cm},
BS(a,b){if(a<0||a>4294967295)throw A.b(A.b6(a,0,4294967295,"length",null))
return J.zY(new Array(a),b)},
BT(a,b){if(a<0)throw A.b(A.p("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("w<0>"))},
rm(a,b){if(a<0)throw A.b(A.p("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.i("w<0>"))},
zY(a,b){var s=A.d(a,b.i("w<0>"))
s.$flags=1
return s},
Gr(a,b){var s=t.hO
return J.Br(s.a(a),s.a(b))},
BV(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Gs(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.BV(r))break;++b}return b},
Gt(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.BV(q))break}return b},
f8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iJ.prototype
return J.lE.prototype}if(typeof a=="string")return J.eH.prototype
if(a==null)return J.iK.prototype
if(typeof a=="boolean")return J.lD.prototype
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dU.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z1(a)},
aW(a){if(typeof a=="string")return J.eH.prototype
if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dU.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z1(a)},
d7(a){if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dU.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z1(a)},
KX(a){if(typeof a=="number")return J.fo.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eN.prototype
return a},
Ej(a){if(typeof a=="number")return J.fo.prototype
if(typeof a=="string")return J.eH.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eN.prototype
return a},
Ek(a){if(typeof a=="string")return J.eH.prototype
if(a==null)return a
if(!(a instanceof A.L))return J.eN.prototype
return a},
El(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.dU.prototype
if(typeof a=="symbol")return J.ht.prototype
if(typeof a=="bigint")return J.hs.prototype
return a}if(a instanceof A.L)return a
return J.z1(a)},
Bp(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Ej(a).T(a,b)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.f8(a).ad(a,b)},
b8(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.L4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aW(a).h(a,b)},
bd(a,b,c){return J.d7(a).k(a,b,c)},
em(a,b){return J.d7(a).l(a,b)},
Fb(a,b){return J.Ek(a).hY(a,b)},
kw(a,b){return J.d7(a).R(a,b)},
Bq(a,b,c){return J.El(a).i_(a,b,c)},
Fc(a,b,c){return J.El(a).i0(a,b,c)},
Fd(a,b){return J.d7(a).dk(a,b)},
Fe(a,b,c){return J.KX(a).n(a,b,c)},
Br(a,b){return J.Ej(a).I(a,b)},
Bs(a,b){return J.aW(a).q(a,b)},
o9(a,b){return J.d7(a).ae(a,b)},
Ff(a,b){return J.d7(a).a8(a,b)},
Bt(a){return J.d7(a).ga4(a)},
aP(a){return J.f8(a).gW(a)},
kx(a){return J.aW(a).gN(a)},
Fg(a){return J.aW(a).gab(a)},
P(a){return J.d7(a).gA(a)},
cN(a){return J.aW(a).gu(a)},
fa(a){return J.f8(a).gai(a)},
Bu(a,b){return J.d7(a).a0(a,b)},
en(a,b,c){return J.d7(a).bB(a,b,c)},
Fh(a,b){return J.aW(a).su(a,b)},
Fi(a,b){return J.Ek(a).aT(a,b)},
cd(a){return J.f8(a).t(a)},
Bv(a,b){return J.d7(a).fl(a,b)},
lA:function lA(){},
lD:function lD(){},
iK:function iK(){},
iM:function iM(){},
eI:function eI(){},
m2:function m2(){},
eN:function eN(){},
dU:function dU(){},
hs:function hs(){},
ht:function ht(){},
w:function w(a){this.$ti=a},
lC:function lC(){},
ro:function ro(a){this.$ti=a},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fo:function fo(){},
iJ:function iJ(){},
lE:function lE(){},
eH:function eH(){}},A={zZ:function zZ(){},
yV(){return $},
Fy(a,b,c){if(t.he.b(a))return new A.jE(a,b.i("@<0>").U(c).i("jE<1,2>"))
return new A.ff(a,b.i("@<0>").U(c).i("ff<1,2>"))},
BZ(a){return new A.hu("Field '"+a+"' has been assigned during initialization.")},
aa(a){return new A.hu("Field '"+a+"' has not been initialized.")},
Gv(a){return new A.hu("Field '"+a+"' has already been initialized.")},
z2(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ba(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
js(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ek(a,b,c){return a},
Ba(a){var s,r
for(s=$.cr.length,r=0;r<s;++r)if(a===$.cr[r])return!0
return!1},
hO(a,b,c,d){A.me(b,"start")
if(c!=null){A.me(c,"end")
if(b>c)A.h(A.b6(b,0,c,"start",null))}return new A.jr(a,b,c,d.i("jr<0>"))},
lN(a,b,c,d){if(t.he.b(a))return new A.dK(a,b,c.i("@<0>").U(d).i("dK<1,2>"))
return new A.cX(a,b,c.i("@<0>").U(d).i("cX<1,2>"))},
cV(){return new A.hM("No element")},
BR(){return new A.hM("Too many elements")},
eV:function eV(){},
is:function is(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b){this.a=a
this.$ti=b},
jE:function jE(a,b){this.a=a
this.$ti=b},
jC:function jC(){},
bf:function bf(a,b){this.a=a
this.$ti=b},
hu:function hu(a){this.a=a},
dI:function dI(a){this.a=a},
up:function up(){},
W:function W(){},
a0:function a0(){},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
iQ:function iQ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
G:function G(a,b,c){this.a=a
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
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iz:function iz(a){this.$ti=a},
ea:function ea(a,b){this.a=a
this.$ti=b},
jy:function jy(a,b){this.a=a
this.$ti=b},
aG:function aG(){},
eO:function eO(){},
hQ:function hQ(){},
bR:function bR(a,b){this.a=a
this.$ti=b},
k8:function k8(){},
aZ(a,b,c){var s,r,q,p,o,n,m,l=A.aI(a.ga9(),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
c.a(a.h(0,r))
o=p+1
q[r]=p}n=A.aI(a.gan(),!0,c)
m=new A.a3(q,n,b.i("@<0>").U(c).i("a3<1,2>"))
m.$keys=l
return m}return new A.iv(A.b5(a,b,c),b.i("@<0>").U(c).i("iv<1,2>"))},
FE(){throw A.b(A.bB("Cannot modify unmodifiable Map"))},
FF(){throw A.b(A.bB("Cannot modify constant Set"))},
EC(a){var s=A.EB(a)
if(s!=null)return s
return"minified:"+a},
L4(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.yO.b(a)},
z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cd(a)
return s},
j7(a){var s,r=$.Cb
if(r==null)r=$.Cb=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dX(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.e(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fv(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aS(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
m9(a){var s,r,q,p
if(a instanceof A.L)return A.bW(A.cs(a),null)
s=J.f8(a)
if(s===B.ki||s===B.kl||t.qF.b(a)){r=B.cK(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.cs(a),null)},
Ce(a){var s,r,q
if(a==null||typeof a=="number"||A.bE(a))return J.cd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eA)return a.t(0)
if(a instanceof A.bk)return a.hM(!0)
s=$.F6()
for(r=0;r<1;++r){q=s[r].pV(a)
if(q!=null)return q}return"Instance of '"+A.m9(a)+"'"},
GR(){return Date.now()},
GY(){var s,r
if($.tO!==0)return
$.tO=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.tO=1e6
$.tP=new A.tN(r)},
GQ(){if(!!self.location)return self.location.href
return null},
GZ(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aC(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.er(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.b6(a,0,1114111,null,null))},
hE(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
GX(a){var s=A.hE(a).getUTCFullYear()+0
return s},
GV(a){var s=A.hE(a).getUTCMonth()+1
return s},
Cc(a){var s=A.hE(a).getUTCDate()+0
return s},
Cd(a){var s=A.hE(a).getUTCHours()+0
return s},
GU(a){var s=A.hE(a).getUTCMinutes()+0
return s},
GW(a){var s=A.hE(a).getUTCSeconds()+0
return s},
GT(a){var s=A.hE(a).getUTCMilliseconds()+0
return s},
GS(a){var s=a.$thrownJsError
if(s==null)return null
return A.d8(s)},
Cf(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aX(a,s)
a.$thrownJsError=s
s.stack=b.t(0)}},
B8(a){throw A.b(A.yR(a))},
e(a,b){if(a==null)J.cN(a)
throw A.b(A.yY(a,b))},
yY(a,b){var s,r="index"
if(!A.b7(b))return new A.cP(!0,b,r,null)
s=A.j(J.cN(a))
if(b<0||b>=s)return A.rd(b,s,a,r)
return A.Ck(b,r)},
KR(a,b,c){if(a>c)return A.b6(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.b6(b,a,c,"end",null)
return new A.cP(!0,b,"end",null)},
yR(a){return new A.cP(!0,a,null,null)},
b(a){return A.aX(a,new Error())},
aX(a,b){var s
if(a==null)a=new A.e6()
b.dartException=a
s=A.Lp
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Lp(){return J.cd(this.dartException)},
h(a,b){throw A.aX(a,b==null?new Error():b)},
aY(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.h(A.J3(a,b,c),s)},
J3(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.jt("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.b(A.aF(a))},
e7(a){var s,r,q,p,o,n
a=A.Ew(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.vB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
vC(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
CA(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
A_(a,b){var s=b==null,r=s?null:b.method
return new A.lF(a,r,s?null:b.receiver)},
am(a){var s
if(a==null)return new A.ti(a)
if(a instanceof A.iA){s=a.a
return A.f9(a,s==null?A.fY(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.f9(a,a.dartException)
return A.Kn(a)},
f9(a,b){if(t.yt.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Kn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.er(r,16)&8191)===10)switch(q){case 438:return A.f9(a,A.A_(A.z(s)+" (Error "+q+")",null))
case 445:case 5007:A.z(s)
return A.f9(a,new A.j0())}}if(a instanceof TypeError){p=$.EJ()
o=$.EK()
n=$.EL()
m=$.EM()
l=$.EP()
k=$.EQ()
j=$.EO()
$.EN()
i=$.ES()
h=$.ER()
g=p.bc(s)
if(g!=null)return A.f9(a,A.A_(A.x(s),g))
else{g=o.bc(s)
if(g!=null){g.method="call"
return A.f9(a,A.A_(A.x(s),g))}else if(n.bc(s)!=null||m.bc(s)!=null||l.bc(s)!=null||k.bc(s)!=null||j.bc(s)!=null||m.bc(s)!=null||i.bc(s)!=null||h.bc(s)!=null){A.x(s)
return A.f9(a,new A.j0())}}return A.f9(a,new A.mB(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jo()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.f9(a,new A.cP(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jo()
return a},
d8(a){var s
if(a instanceof A.iA)return a.b
if(a==null)return new A.jW(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.jW(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
o6(a){if(a==null)return J.aP(a)
if(typeof a=="object")return A.j7(a)
return J.aP(a)},
KJ(a){if(typeof a=="number")return B.b.gW(a)
if(a instanceof A.nC)return A.j7(a)
if(a instanceof A.bk)return a.gW(a)
return A.o6(a)},
Eh(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
KW(a,b){var s,r=a.length
for(s=0;s<r;++s)b.l(0,a[s])
return b},
Jt(a,b,c,d,e,f){t.BO.a(a)
switch(A.j(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(new A.wr("Unsupported number of arguments for wrapped closure"))},
ie(a,b){var s=a.$identity
if(!!s)return s
s=A.KL(a,b)
a.$identity=s
return s},
KL(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Jt)},
FD(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.mv().constructor.prototype):Object.create(new A.h8(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.BC(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Fz(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.BC(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Fz(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Fu)}throw A.b("Error in functionType of tearoff")},
FA(a,b,c,d){var s=A.BA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
BC(a,b,c,d){if(c)return A.FC(a,b,d)
return A.FA(b.length,d,a,b)},
FB(a,b,c,d){var s=A.BA,r=A.Fv
switch(b?-1:a){case 0:throw A.b(new A.mi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
FC(a,b,c){var s,r
if($.By==null)$.By=A.Bx("interceptor")
if($.Bz==null)$.Bz=A.Bx("receiver")
s=b.length
r=A.FB(s,c,a,b)
return r},
B5(a){return A.FD(a)},
Fu(a,b){return A.k_(v.typeUniverse,A.cs(a.a),b)},
BA(a){return a.a},
Fv(a){return a.b},
Bx(a){var s,r,q,p=new A.h8("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.p("Field name "+a+" not found.",null))},
z0(a){return v.getIsolateTag(a)},
EA(){return v.G},
Mq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
L5(a){var s,r,q,p,o,n=A.x($.Em.$1(a)),m=$.yZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.z6[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.as($.Ed.$2(a,n))
if(q!=null){m=$.yZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.z6[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.zB(s)
$.yZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.z6[n]=s
return s}if(p==="-"){o=A.zB(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Eu(a,s)
if(p==="*")throw A.b(A.CB(n))
if(v.leafTags[n]===true){o=A.zB(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Eu(a,s)},
Eu(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Bb(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
zB(a){return J.Bb(a,!1,null,!!a.$icf)},
L7(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.zB(s)
else return J.Bb(s,c,null,null)},
L_(){if(!0===$.B9)return
$.B9=!0
A.L0()},
L0(){var s,r,q,p,o,n,m,l
$.yZ=Object.create(null)
$.z6=Object.create(null)
A.KZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Ev.$1(o)
if(n!=null){m=A.L7(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
KZ(){var s,r,q,p,o,n,m=B.fv()
m=A.id(B.fw,A.id(B.fx,A.id(B.cL,A.id(B.cL,A.id(B.fy,A.id(B.fz,A.id(B.fA(B.cK),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Em=new A.z3(p)
$.Ed=new A.z4(o)
$.Ev=new A.z5(n)},
id(a,b){return a(b)||b},
Id(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.e(b,s)
if(!J.ab(r,b[s]))return!1}return!0},
KN(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
BW(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.M("Illegal RegExp pattern ("+String(o)+")",a,null))},
Lj(a,b,c){var s=a.indexOf(b,c)
return s>=0},
KU(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Ew(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
zL(a,b,c){var s=A.Lk(a,b,c)
return s},
Lk(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Ew(b),"g"),A.KU(c))},
a6:function a6(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jR:function jR(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a){this.a=a},
jU:function jU(a){this.a=a},
iv:function iv(a,b){this.a=a
this.$ti=b},
he:function he(){},
px:function px(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c){this.a=a
this.b=b
this.$ti=c},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
ec:function ec(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
de:function de(a,b){this.a=a
this.$ti=b},
hf:function hf(){},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
hp:function hp(a,b){this.a=a
this.$ti=b},
tN:function tN(a){this.a=a},
jj:function jj(){},
vB:function vB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j0:function j0(){},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function mB(a){this.a=a},
ti:function ti(a){this.a=a},
iA:function iA(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a
this.b=null},
eA:function eA(){},
kS:function kS(){},
kT:function kT(){},
mx:function mx(){},
mv:function mv(){},
h8:function h8(a,b){this.a=a
this.b=b},
mi:function mi(a){this.a=a},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rx:function rx(a){this.a=a},
rH:function rH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ag:function ag(a,b){this.a=a
this.$ti=b},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
an:function an(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
N:function N(a,b){this.a=a
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
z3:function z3(a){this.a=a},
z4:function z4(a){this.a=a},
z5:function z5(a){this.a=a},
bk:function bk(){},
ed:function ed(){},
ee:function ee(){},
fT:function fT(){},
iL:function iL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
nh:function nh(a){this.b=a},
mX:function mX(a,b,c){this.a=a
this.b=b
this.c=c},
mY:function mY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jq:function jq(a,b){this.a=a
this.c=b},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function nz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Lm(a){throw A.aX(A.BZ(a),new Error())},
u(){throw A.aX(A.aa(""),new Error())},
bc(){throw A.aX(A.Gv(""),new Error())},
o7(){throw A.aX(A.BZ(""),new Error())},
al(){var s=new A.wq()
return s.b=s},
wq:function wq(){this.b=null},
xq(a,b,c){},
S(a){return a},
GE(a,b,c){A.xq(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
tg(a){return new Float32Array(a)},
GF(a){return new Int8Array(a)},
GG(a){return new Uint8Array(a)},
lZ(a){return new Uint8Array(A.S(a))},
C9(a,b,c){A.xq(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ei(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.yY(b,a))},
nP(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.KR(a,b,c))
return b},
eJ:function eJ(){},
hB:function hB(){},
iZ:function iZ(){},
xd:function xd(a){this.a=a},
lS:function lS(){},
bx:function bx(){},
iX:function iX(){},
iY:function iY(){},
iW:function iW(){},
lT:function lT(){},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lX:function lX(){},
lY:function lY(){},
ft:function ft(){},
j_:function j_(){},
jL:function jL(){},
jM:function jM(){},
jN:function jN(){},
jO:function jO(){},
Aa(a,b){var s=b.c
return s==null?b.c=A.jY(a,"b0",[b.x]):s},
Cp(a){var s=a.w
if(s===6||s===7)return A.Cp(a.x)
return s===11||s===12},
H9(a){return a.as},
Et(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a2(a){return A.xc(v.typeUniverse,a,!1)},
h0(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.h0(a1,s,a3,a4)
if(r===s)return a2
return A.D6(a1,r,!0)
case 7:s=a2.x
r=A.h0(a1,s,a3,a4)
if(r===s)return a2
return A.D5(a1,r,!0)
case 8:q=a2.y
p=A.ic(a1,q,a3,a4)
if(p===q)return a2
return A.jY(a1,a2.x,p)
case 9:o=a2.x
n=A.h0(a1,o,a3,a4)
m=a2.y
l=A.ic(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Al(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ic(a1,j,a3,a4)
if(i===j)return a2
return A.D7(a1,k,i)
case 11:h=a2.x
g=A.h0(a1,h,a3,a4)
f=a2.y
e=A.Kj(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.D4(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ic(a1,d,a3,a4)
o=a2.x
n=A.h0(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Am(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kF("Attempted to substitute unexpected RTI kind "+a0))}},
ic(a,b,c,d){var s,r,q,p,o=b.length,n=A.xi(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.h0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Kk(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.xi(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.h0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Kj(a,b,c,d){var s,r=b.a,q=A.ic(a,r,c,d),p=b.b,o=A.ic(a,p,c,d),n=b.c,m=A.Kk(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.nb()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
B6(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.KY(s)
return a.$S()}return null},
L1(a,b){var s
if(A.Cp(b))if(a instanceof A.eA){s=A.B6(a)
if(s!=null)return s}return A.cs(a)},
cs(a){if(a instanceof A.L)return A.v(a)
if(Array.isArray(a))return A.C(a)
return A.AF(J.f8(a))},
C(a){var s=a[v.arrayRti],r=t.zz
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
v(a){var s=a.$ti
return s!=null?s:A.AF(a)},
AF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Jq(a,s)},
Jq(a,b){var s=a instanceof A.eA?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.In(v.typeUniverse,s.name)
b.$ccache=r
return r},
KY(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.xc(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
B7(a){return A.dD(A.v(a))},
B0(a){var s
if(a instanceof A.bk)return a.hh()
s=a instanceof A.eA?A.B6(a):null
if(s!=null)return s
if(t.sg.b(a))return J.fa(a).a
if(Array.isArray(a))return A.C(a)
return A.cs(a)},
dD(a){var s=a.r
return s==null?a.r=new A.nC(a):s},
KV(a,b){var s,r,q=b,p=q.length
if(p===0)return t.ep
if(0>=p)return A.e(q,0)
s=A.k_(v.typeUniverse,A.B0(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.e(q,r)
s=A.D9(v.typeUniverse,s,A.B0(q[r]))}return A.k_(v.typeUniverse,s,a)},
cK(a){return A.dD(A.xc(v.typeUniverse,a,!1))},
Jp(a){var s=this
s.b=A.Ke(s)
return s.b(a)},
Ke(a){var s,r,q,p,o
if(a===t.K)return A.Jz
if(A.h1(a))return A.JF
s=a.w
if(s===6)return A.Jh
if(s===1)return A.DL
if(s===7)return A.Ju
r=A.Kc(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.h1)){a.f="$i"+q
if(q==="K")return A.Jx
if(a===t.m)return A.Jw
return A.JE}}else if(s===10){p=A.KN(a.x,a.y)
o=p==null?A.DL:p
return o==null?A.fY(o):o}return A.Jf},
Kc(a){if(a.w===8){if(a===t.S)return A.b7
if(a===t.i||a===t.fY)return A.Jy
if(a===t.N)return A.JD
if(a===t.y)return A.bE}return null},
Jo(a){var s=this,r=A.Je
if(A.h1(s))r=A.IJ
else if(s===t.K)r=A.fY
else if(A.ih(s)){r=A.Jg
if(s===t.lo)r=A.As
else if(s===t.dR)r=A.as
else if(s===t.k7)r=A.Dr
else if(s===t.s7)r=A.At
else if(s===t.u6)r=A.Ds
else if(s===t.gt)r=A.H}else if(s===t.S)r=A.j
else if(s===t.N)r=A.x
else if(s===t.y)r=A.U
else if(s===t.fY)r=A.a4
else if(s===t.i)r=A.az
else if(s===t.m)r=A.c
s.a=r
return s.a(a)},
Jf(a){var s=this
if(a==null)return A.ih(s)
return A.Ep(v.typeUniverse,A.L1(a,s),s)},
Jh(a){if(a==null)return!0
return this.x.b(a)},
JE(a){var s,r=this
if(a==null)return A.ih(r)
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.f8(a)[s]},
Jx(a){var s,r=this
if(a==null)return A.ih(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.L)return!!a[s]
return!!J.f8(a)[s]},
Jw(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.L)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
DK(a){if(typeof a=="object"){if(a instanceof A.L)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Je(a){var s=this
if(a==null){if(A.ih(s))return a}else if(s.b(a))return a
throw A.aX(A.Dx(a,s),new Error())},
Jg(a){var s=this
if(a==null||s.b(a))return a
throw A.aX(A.Dx(a,s),new Error())},
Dx(a,b){return new A.hY("TypeError: "+A.CZ(a,A.bW(b,null)))},
Ef(a,b,c,d){if(A.Ep(v.typeUniverse,a,b))return a
throw A.aX(A.If("The type argument '"+A.bW(a,null)+"' is not a subtype of the type variable bound '"+A.bW(b,null)+"' of type variable '"+c+"' in '"+d+"'."),new Error())},
CZ(a,b){return A.lb(a)+": type '"+A.bW(A.B0(a),null)+"' is not a subtype of type '"+b+"'"},
If(a){return new A.hY("TypeError: "+a)},
cI(a,b){return new A.hY("TypeError: "+A.CZ(a,b))},
Ju(a){var s=this
return s.x.b(a)||A.Aa(v.typeUniverse,s).b(a)},
Jz(a){return a!=null},
fY(a){if(a!=null)return a
throw A.aX(A.cI(a,"Object"),new Error())},
JF(a){return!0},
IJ(a){return a},
DL(a){return!1},
bE(a){return!0===a||!1===a},
U(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aX(A.cI(a,"bool"),new Error())},
Dr(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aX(A.cI(a,"bool?"),new Error())},
az(a){if(typeof a=="number")return a
throw A.aX(A.cI(a,"double"),new Error())},
Ds(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aX(A.cI(a,"double?"),new Error())},
b7(a){return typeof a=="number"&&Math.floor(a)===a},
j(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aX(A.cI(a,"int"),new Error())},
As(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aX(A.cI(a,"int?"),new Error())},
Jy(a){return typeof a=="number"},
a4(a){if(typeof a=="number")return a
throw A.aX(A.cI(a,"num"),new Error())},
At(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aX(A.cI(a,"num?"),new Error())},
JD(a){return typeof a=="string"},
x(a){if(typeof a=="string")return a
throw A.aX(A.cI(a,"String"),new Error())},
as(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aX(A.cI(a,"String?"),new Error())},
c(a){if(A.DK(a))return a
throw A.aX(A.cI(a,"JSObject"),new Error())},
H(a){if(a==null)return a
if(A.DK(a))return a
throw A.aX(A.cI(a,"JSObject?"),new Error())},
E2(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
K0(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.E2(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
DB(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bW(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bW(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bW(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bW(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bW(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bW(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bW(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bW(a.x,b)+">"
if(l===8){p=A.Km(a.x)
o=a.y
return o.length>0?p+("<"+A.E2(o,b)+">"):p}if(l===10)return A.K0(a,b)
if(l===11)return A.DB(a,b,null)
if(l===12)return A.DB(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
Km(a){var s=A.EB(a)
if(s!=null)return s
return"minified:"+a},
Io(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
In(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.xc(a,b,!1)
else if(typeof m=="number"){s=m
r=A.jZ(a,5,"#")
q=A.xi(s)
for(p=0;p<s;++p)q[p]=r
o=A.jY(a,b,q)
n[b]=o
return o}else return m},
Im(a,b){return A.Dh(a.tR,b)},
Il(a,b){return A.Dh(a.eT,b)},
xc(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.D8(a,null,b,!1)
r.set(b,s)
return s},
k_(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.D8(a,b,c,!0)
q.set(c,r)
return r},
D9(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Al(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
D8(a,b,c,d){return A.Ib(A.I5(a,b,c,d))},
f_(a,b){b.a=A.Jo
b.b=A.Jp
return b},
jZ(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.d0(null,null)
s.w=b
s.as=c
r=A.f_(a,s)
a.eC.set(c,r)
return r},
D6(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Ij(a,b,r,c)
a.eC.set(r,s)
return s},
Ij(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.h1(b))if(!(b===t.c||b===t.h))if(s!==6)r=s===7&&A.ih(b.x)
if(r)return b
else if(s===1)return t.c}q=new A.d0(null,null)
q.w=6
q.x=b
q.as=c
return A.f_(a,q)},
D5(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Ih(a,b,r,c)
a.eC.set(r,s)
return s},
Ih(a,b,c,d){var s,r
if(d){s=b.w
if(A.h1(b)||b===t.K)return b
else if(s===1)return A.jY(a,"b0",[b])
else if(b===t.c||b===t.h)return t.eZ}r=new A.d0(null,null)
r.w=7
r.x=b
r.as=c
return A.f_(a,r)},
Ik(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.d0(null,null)
s.w=13
s.x=b
s.as=q
r=A.f_(a,s)
a.eC.set(q,r)
return r},
jX(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ig(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
jY(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.jX(c)+">"
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
Al(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.jX(r)+">")
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
D7(a,b,c){var s,r,q="+"+(b+"("+A.jX(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.d0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.f_(a,s)
a.eC.set(q,r)
return r},
D4(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.jX(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.jX(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ig(i)+"}"}r=n+(g+")")
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
Am(a,b,c,d){var s,r=b.as+("<"+A.jX(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Ii(a,b,c,r,d)
a.eC.set(r,s)
return s},
Ii(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.xi(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.h0(a,b,r,0)
m=A.ic(a,c,r,0)
return A.Am(a,n,m,c!==m)}}l=new A.d0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.f_(a,l)},
I5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Ib(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.I7(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.D1(a,r,l,k,!1)
else if(q===46)r=A.D1(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.fS(a.u,a.e,k.pop()))
break
case 94:k.push(A.Ik(a.u,k.pop()))
break
case 35:k.push(A.jZ(a.u,5,"#"))
break
case 64:k.push(A.jZ(a.u,2,"@"))
break
case 126:k.push(A.jZ(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.I9(a,k)
break
case 38:A.I8(a,k)
break
case 63:p=a.u
k.push(A.D6(p,A.fS(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.D5(p,A.fS(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.I6(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.D2(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Ic(a.u,a.e,o)
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
I7(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
D1(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Io(s,o.x)[p]
if(n==null)A.h('No "'+p+'" in "'+A.H9(o)+'"')
d.push(A.k_(s,o,n))}else d.push(p)
return m},
I9(a,b){var s,r=a.u,q=A.D0(a,b),p=b.pop()
if(typeof p=="string")b.push(A.jY(r,p,q))
else{s=A.fS(r,a.e,p)
switch(s.w){case 11:b.push(A.Am(r,s,q,a.n))
break
default:b.push(A.Al(r,s,q))
break}}},
I6(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.D0(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.fS(p,a.e,o)
q=new A.nb()
q.a=s
q.b=n
q.c=m
b.push(A.D4(p,r,q))
return
case-4:b.push(A.D7(p,b.pop(),s))
return
default:throw A.b(A.kF("Unexpected state under `()`: "+A.z(o)))}},
I8(a,b){var s=b.pop()
if(0===s){b.push(A.jZ(a.u,1,"0&"))
return}if(1===s){b.push(A.jZ(a.u,4,"1&"))
return}throw A.b(A.kF("Unexpected extended operation "+A.z(s)))},
D0(a,b){var s=b.splice(a.p)
A.D2(a.u,a.e,s)
a.p=b.pop()
return s},
fS(a,b,c){if(typeof c=="string")return A.jY(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Ia(a,b,c)}else return c},
D2(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.fS(a,b,c[s])},
Ic(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.fS(a,b,c[s])},
Ia(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kF("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kF("Bad index "+c+" for "+b.t(0)))},
Ep(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.bb(a,b,null,c,null)
r.set(c,s)}return s},
bb(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.h1(d))return!0
s=b.w
if(s===4)return!0
if(A.h1(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.bb(a,c[b.x],c,d,e))return!0
q=d.w
p=t.c
if(b===p||b===t.h){if(q===7)return A.bb(a,b,c,d.x,e)
return d===p||d===t.h||q===6}if(d===t.K){if(s===7)return A.bb(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.bb(a,b.x,c,d,e))return!1
return A.bb(a,A.Aa(a,b),c,d,e)}if(s===6)return A.bb(a,p,c,d,e)&&A.bb(a,b.x,c,d,e)
if(q===7){if(A.bb(a,b,c,d.x,e))return!0
return A.bb(a,b,c,A.Aa(a,d),e)}if(q===6)return A.bb(a,b,c,p,e)||A.bb(a,b,c,d.x,e)
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
if(!A.bb(a,j,c,i,e)||!A.bb(a,i,e,j,c))return!1}return A.DJ(a,b.x,c,d.x,e)}if(q===11){if(b===t.ud)return!0
if(p)return!1
return A.DJ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Jv(a,b,c,d,e)}if(o&&q===10)return A.JA(a,b,c,d,e)
return!1},
DJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.bb(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.bb(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.bb(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.bb(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.bb(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Jv(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.k_(a,b,r[o])
return A.Dp(a,p,null,c,d.y,e)}return A.Dp(a,b.y,null,c,d.y,e)},
Dp(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.bb(a,b[s],d,e[s],f))return!1
return!0},
JA(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.bb(a,r[s],c,q[s],e))return!1
return!0},
ih(a){var s=a.w,r=!0
if(!(a===t.c||a===t.h))if(!A.h1(a))if(s!==6)r=s===7&&A.ih(a.x)
return r},
h1(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Dh(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
xi(a){return a>0?new Array(a):v.typeUniverse.sEA},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
nb:function nb(){this.c=this.b=this.a=null},
nC:function nC(a){this.a=a},
n9:function n9(){},
hY:function hY(a){this.a=a},
HY(){var s,r,q
if(self.scheduleImmediate!=null)return A.KC()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ie(new A.wm(s),1)).observe(r,{childList:true})
return new A.wl(s,r,q)}else if(self.setImmediate!=null)return A.KD()
return A.KE()},
HZ(a){self.scheduleImmediate(A.ie(new A.wn(t.O.a(a)),0))},
I_(a){self.setImmediate(A.ie(new A.wo(t.O.a(a)),0))},
I0(a){A.Ae(B.h4,t.O.a(a))},
Ae(a,b){return A.Ie(a.a/1000|0,b)},
Ie(a,b){var s=new A.x9()
s.kt(a,b)
return s},
aN(a){return new A.mZ(new A.au($.at,a.i("au<0>")),a.i("mZ<0>"))},
aM(a,b){a.$2(0,null)
b.b=!0
return b.a},
a7(a,b){A.IM(a,b)},
aL(a,b){b.ez(a)},
aK(a,b){b.eA(A.am(a),A.d8(a))},
IM(a,b){var s,r,q=new A.xn(b),p=new A.xo(b)
if(a instanceof A.au)a.hK(q,p,t.z)
else{s=t.z
if(a instanceof A.au)a.ff(q,p,s)
else{r=new A.au($.at,t.hR)
r.a=8
r.c=a
r.hK(q,p,s)}}},
aO(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.at.j4(new A.yQ(s),t.H,t.S,t.z)},
D3(a,b,c){return 0},
ox(a){var s
if(t.yt.b(a)){s=a.gcg()
if(s!=null)return s}return B.aN},
BL(a){var s
a.a(null)
s=new A.au($.at,a.i("au<0>"))
s.e8(null)
return s},
G8(a,b,c){var s=new A.au($.at,c.i("au<0>"))
A.Cz(a,new A.qd(b,s,c))
return s},
qe(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.au($.at,b.i("au<K<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.qg(i,h,g,f)
try{for(n=J.P(a),m=t.c;n.m();){r=n.gp()
q=i.b
r.ff(new A.qf(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.d4(A.d([],b.i("w<0>")))
return n}i.a=A.dj(n,null,!1,b.i("0?"))}catch(l){p=A.am(l)
o=A.d8(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.AG(m,k)
m=new A.bt(m,k==null?A.ox(m):k)
n.d1(m)
return n}else{i.d=p
i.c=o}}return f},
AG(a,b){if($.at===B.D)return null
return null},
Jr(a,b){if($.at!==B.D)A.AG(a,b)
if(b==null)if(t.yt.b(a)){b=a.gcg()
if(b==null){A.Cf(a,B.aN)
b=B.aN}}else b=B.aN
else if(t.yt.b(a))A.Cf(a,b)
return new A.bt(a,b)},
I1(a,b){var s=new A.au($.at,b.i("au<0>"))
b.a(a)
s.a=8
s.c=a
return s},
ww(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.hR;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Hm()
b.d1(new A.bt(new A.cP(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.hs(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.co()
b.d3(o.a)
A.fO(b,p)
return}b.a^=2
A.nY(null,null,b.b,t.O.a(new A.wx(o,b)))},
fO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.v,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.AT(m.a,m.b)}return}q.a=b
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
A.AT(j.a,j.b)
return}g=$.at
if(g!==h)$.at=h
else g=null
c=c.c
if((c&15)===8)new A.wB(q,d,n).$0()
else if(o){if((c&1)!==0)new A.wA(q,j).$0()}else if((c&2)!==0)new A.wz(d,q).$0()
if(g!=null)$.at=g
c=q.c
if(c instanceof A.au){p=q.a.$ti
p=p.i("b0<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dd(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.ww(c,f,!0)
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
DX(a,b){var s
if(t.nW.b(a))return b.j4(a,t.z,t.K,t.l)
s=t.h_
if(s.b(a))return s.a(a)
throw A.b(A.a8(a,"onError",u.c))},
JP(){var s,r
for(s=$.i8;s!=null;s=$.i8){$.kk=null
r=s.b
$.i8=r
if(r==null)$.kj=null
s.a.$0()}},
Kh(){$.AH=!0
try{A.JP()}finally{$.kk=null
$.AH=!1
if($.i8!=null)$.Bj().$1(A.Ee())}},
E5(a){var s=new A.n_(a),r=$.kj
if(r==null){$.i8=$.kj=s
if(!$.AH)$.Bj().$1(A.Ee())}else $.kj=r.b=s},
Ka(a){var s,r,q,p=$.i8
if(p==null){A.E5(a)
$.kk=$.kj
return}s=new A.n_(a)
r=$.kk
if(r==null){s.b=p
$.i8=$.kk=s}else{q=r.b
s.b=q
$.kk=r.b=s
if(q==null)$.kj=s}},
LK(a,b){A.ek(a,"stream",t.K)
return new A.nx(b.i("nx<0>"))},
Cz(a,b){var s=$.at
if(s===B.D)return A.Ae(a,t.O.a(b))
return A.Ae(a,t.O.a(s.i2(b)))},
AT(a,b){A.Ka(new A.yA(a,b))},
E1(a,b,c,d,e){var s,r=$.at
if(r===c)return d.$0()
$.at=c
s=r
try{r=d.$0()
return r}finally{$.at=s}},
K7(a,b,c,d,e,f,g){var s,r=$.at
if(r===c)return d.$1(e)
$.at=c
s=r
try{r=d.$1(e)
return r}finally{$.at=s}},
K6(a,b,c,d,e,f,g,h,i){var s,r=$.at
if(r===c)return d.$2(e,f)
$.at=c
s=r
try{r=d.$2(e,f)
return r}finally{$.at=s}},
nY(a,b,c,d){t.O.a(d)
if(B.D!==c){d=c.i2(d)
d=d}A.E5(d)},
wm:function wm(a){this.a=a},
wl:function wl(a,b,c){this.a=a
this.b=b
this.c=c},
wn:function wn(a){this.a=a},
wo:function wo(a){this.a=a},
x9:function x9(){},
xa:function xa(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b){this.a=a
this.b=!1
this.$ti=b},
xn:function xn(a){this.a=a},
xo:function xo(a){this.a=a},
yQ:function yQ(a){this.a=a},
d4:function d4(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
cc:function cc(a,b){this.a=a
this.$ti=b},
bt:function bt(a,b){this.a=a
this.b=b},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qf:function qf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
n2:function n2(){},
jA:function jA(a,b){this.a=a
this.$ti=b},
eb:function eb(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
wt:function wt(a,b){this.a=a
this.b=b},
wy:function wy(a,b){this.a=a
this.b=b},
wx:function wx(a,b){this.a=a
this.b=b},
wv:function wv(a,b){this.a=a
this.b=b},
wu:function wu(a,b){this.a=a
this.b=b},
wB:function wB(a,b,c){this.a=a
this.b=b
this.c=c},
wC:function wC(a,b){this.a=a
this.b=b},
wD:function wD(a){this.a=a},
wA:function wA(a,b){this.a=a
this.b=b},
wz:function wz(a,b){this.a=a
this.b=b},
n_:function n_(a){this.a=a
this.b=null},
nx:function nx(a){this.$ti=a},
k7:function k7(){},
nq:function nq(){},
x7:function x7(a,b){this.a=a
this.b=b},
yA:function yA(a,b){this.a=a
this.b=b},
D_(a,b){var s=a[b]
return s===a?null:s},
Aj(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Ai(){var s=Object.create(null)
A.Aj(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
C0(a,b){return new A.cy(a.i("@<0>").U(b).i("cy<1,2>"))},
E(a,b,c){return b.i("@<0>").U(c).i("A0<1,2>").a(A.Eh(a,new A.cy(b.i("@<0>").U(c).i("cy<1,2>"))))},
n(a,b){return new A.cy(a.i("@<0>").U(b).i("cy<1,2>"))},
A1(a){return new A.cG(a.i("cG<0>"))},
a1(a){return new A.cG(a.i("cG<0>"))},
aR(a,b){return b.i("C1<0>").a(A.KW(a,new A.cG(b.i("cG<0>"))))},
Ak(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
eW(a,b,c){var s=new A.fR(a,b,c.i("fR<0>"))
s.c=a.e
return s},
bP(a,b){var s=J.P(a)
if(s.m())return s.gp()
return null},
b5(a,b,c){var s=A.C0(b,c)
a.aM(0,new A.rI(s,b,c))
return s},
hv(a,b,c){var s=A.C0(b,c)
s.K(0,a)
return s},
hw(a,b){var s,r=A.A1(b)
for(s=J.P(a);s.m();)r.l(0,b.a(s.gp()))
return r},
fq(a,b){var s=A.A1(b)
s.K(0,a)
return s},
A3(a){var s,r
if(A.Ba(a))return"{...}"
s=new A.bK("")
try{r={}
B.a.l($.cr,a)
s.a+="{"
r.a=!0
a.aM(0,new A.rL(r,s))
s.a+="}"}finally{if(0>=$.cr.length)return A.e($.cr,-1)
$.cr.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Ip(){throw A.b(A.bB("Cannot change an unmodifiable set"))},
jF:function jF(){},
wF:function wF(a){this.a=a},
jH:function jH(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
fP:function fP(a,b){this.a=a
this.$ti=b},
jG:function jG(a,b,c){var _=this
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
ng:function ng(a){this.a=a
this.c=this.b=null},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
rI:function rI(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(){},
ai:function ai(){},
rK:function rK(a){this.a=a},
rL:function rL(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.$ti=b},
jJ:function jJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
k0:function k0(){},
hx:function hx(){},
eP:function eP(a,b){this.a=a
this.$ti=b},
ds:function ds(){},
jV:function jV(){},
nD:function nD(){},
hR:function hR(a,b){this.a=a
this.$ti=b},
hZ:function hZ(){},
k1:function k1(){},
JU(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.am(r)
q=A.M(String(s),null,null)
throw A.b(q)}q=A.xR(p)
return q},
xR(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ne(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.xR(a[s])
return a},
IG(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.EX()
else s=new Uint8Array(o)
for(r=J.aW(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
IF(a,b,c,d){var s=a?$.EW():$.EV()
if(s==null)return null
if(0===c&&d===b.length)return A.Dg(s,b)
return A.Dg(s,b.subarray(c,d))},
Dg(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Bw(a,b,c,d,e,f){if(B.d.P(f,4)!==0)throw A.b(A.M("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.M("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.M("Invalid base64 padding, more than two '=' characters",a,b))},
BY(a,b,c){return new A.iN(a,b)},
J2(a){return a.D()},
I2(a,b){return new A.wI(a,[],A.KM())},
I3(a,b,c){var s,r=new A.bK(""),q=A.I2(r,b)
q.e_(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
IH(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ne:function ne(a,b){this.a=a
this.b=b
this.c=null},
wH:function wH(a){this.a=a},
nf:function nf(a){this.a=a},
xg:function xg(){},
xf:function xf(){},
kC:function kC(){},
xb:function xb(){},
kD:function kD(a,b){this.a=a
this.b=b},
kJ:function kJ(){},
ph:function ph(){},
eB:function eB(){},
kZ:function kZ(){},
la:function la(){},
iN:function iN(a,b){this.a=a
this.b=b},
lH:function lH(a,b){this.a=a
this.b=b},
lG:function lG(){},
rz:function rz(a){this.b=a},
ry:function ry(a){this.a=a},
wJ:function wJ(){},
wK:function wK(a,b){this.a=a
this.b=b},
wI:function wI(a,b,c){this.c=a
this.a=b
this.b=c},
mF:function mF(){},
vJ:function vJ(){},
xh:function xh(a){this.b=0
this.c=a},
vI:function vI(a){this.a=a},
xe:function xe(a){this.a=a
this.b=16
this.c=0},
Eo(a){var s=A.dX(a,null)
if(s!=null)return s
throw A.b(A.M(a,null,null))},
o1(a){var s=A.fv(a)
if(s!=null)return s
throw A.b(A.M("Invalid double",a,null))},
G2(a,b){a=A.aX(a,new Error())
if(a==null)a=A.fY(a)
a.stack=b.t(0)
throw a},
dj(a,b,c,d){var s,r=c?J.BT(a,d):J.BS(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
aI(a,b,c){var s,r=A.d([],c.i("w<0>"))
for(s=J.P(a);s.m();)B.a.l(r,c.a(s.gp()))
if(b)return r
r.$flags=1
return r},
J(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.i("w<0>"))
s=A.d([],b.i("w<0>"))
for(r=J.P(a);r.m();)B.a.l(s,r.gp())
return s},
ad(a,b){var s=A.aI(a,!1,b)
s.$flags=3
return s},
Ad(a,b,c){var s,r
A.me(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.b(A.b6(c,b,null,"end",null))
if(s===0)return""}r=A.Hq(a,b,c)
return r},
Hq(a,b,c){var s=a.length
if(b>=s)return""
return A.GZ(a,b,c==null||c>s?s:c)},
jc(a){return new A.iL(a,A.BW(a,!1,!0,!1,!1,""))},
Ac(a,b,c){var s=J.P(b)
if(!s.m())return a
if(c.length===0){do a+=A.z(s.gp())
while(s.m())}else{a+=A.z(s.gp())
while(s.m())a=a+c+A.z(s.gp())}return a},
e8(){var s,r,q=A.GQ()
if(q==null)throw A.b(A.bB("'Uri.base' is not supported"))
s=$.CE
if(s!=null&&q===$.CD)return s
r=A.Hw(q)
$.CE=r
$.CD=q
return r},
Hm(){return A.d8(new Error())},
FJ(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
BE(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
l0(a){if(a>=10)return""+a
return"0"+a},
G1(a,b,c){var s,r
for(s=0;s<3;++s){r=a[s]
if(r.b===b)return r}throw A.b(A.a8(b,"name","No enum value with that name"))},
lb(a){if(typeof a=="number"||A.bE(a)||a==null)return J.cd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ce(a)},
G3(a,b){A.ek(a,"error",t.K)
A.ek(b,"stackTrace",t.l)
A.G2(a,b)},
kF(a){return new A.kE(a)},
p(a,b){return new A.cP(!1,null,b,a)},
a8(a,b,c){return new A.cP(!0,a,b,c)},
Cj(a){var s=null
return new A.hF(s,s,!1,s,s,a)},
Ck(a,b){return new A.hF(null,null,!0,a,b,"Value not in range")},
b6(a,b,c,d,e){return new A.hF(b,c,!0,a,d,"Invalid value")},
fy(a,b,c){if(0>a||a>c)throw A.b(A.b6(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.b6(b,a,c,"end",null))
return b}return c},
me(a,b){if(a<0)throw A.b(A.b6(a,0,null,b,null))
return a},
rd(a,b,c,d){return new A.lx(b,!0,a,d,"Index out of range")},
bB(a){return new A.jt(a)},
CB(a){return new A.mA(a)},
i(a){return new A.hM(a)},
aF(a){return new A.kU(a)},
M(a,b,c){return new A.B(a,b,c)},
Gq(a,b,c){var s,r
if(A.Ba(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.a.l($.cr,a)
try{A.JG(a,s)}finally{if(0>=$.cr.length)return A.e($.cr,-1)
$.cr.pop()}r=A.Ac(b,t.tY.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
zX(a,b,c){var s,r
if(A.Ba(a))return b+"..."+c
s=new A.bK(b)
B.a.l($.cr,a)
try{r=s
r.a=A.Ac(r.a,a,", ")}finally{if(0>=$.cr.length)return A.e($.cr,-1)
$.cr.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
JG(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
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
A4(a,b,c){var s=A.n(b,c)
s.mr(a)
return s},
cY(a,b,c,d,e,f){var s
if(B.h===c){s=J.aP(a)
b=J.aP(b)
return A.js(A.ba(A.ba($.ii(),s),b))}if(B.h===d){s=J.aP(a)
b=J.aP(b)
c=J.aP(c)
return A.js(A.ba(A.ba(A.ba($.ii(),s),b),c))}if(B.h===e){s=J.aP(a)
b=J.aP(b)
c=J.aP(c)
d=J.aP(d)
return A.js(A.ba(A.ba(A.ba(A.ba($.ii(),s),b),c),d))}if(B.h===f){s=J.aP(a)
b=J.aP(b)
c=J.aP(c)
d=J.aP(d)
e=J.aP(e)
return A.js(A.ba(A.ba(A.ba(A.ba(A.ba($.ii(),s),b),c),d),e))}s=J.aP(a)
b=J.aP(b)
c=J.aP(c)
d=J.aP(d)
e=J.aP(e)
f=J.aP(f)
f=A.js(A.ba(A.ba(A.ba(A.ba(A.ba(A.ba($.ii(),s),b),c),d),e),f))
return f},
GH(a){var s,r,q=$.ii()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q=A.ba(q,J.aP(a[r]))
return A.js(q)},
fD(a,b){return new A.hR(A.fq(a,b),b.i("hR<0>"))},
Hw(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.CC(a4<a4?B.c.L(a5,0,a4):a5,5,a3).gjd()
else if(s===32)return A.CC(B.c.L(a5,5,a4),0,a3).gjd()}r=A.dj(8,0,!1,t.S)
B.a.k(r,0,0)
B.a.k(r,1,-1)
B.a.k(r,2,-1)
B.a.k(r,7,-1)
B.a.k(r,3,0)
B.a.k(r,4,0)
B.a.k(r,5,a4)
B.a.k(r,6,a4)
if(A.E4(a5,0,a4,0,r)>=14)B.a.k(r,7,a4)
q=r[1]
if(q>=0)if(A.E4(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.c.aB(a5,"\\",n))if(p>0)h=B.c.aB(a5,"\\",p-1)||B.c.aB(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.aB(a5,"..",n)))h=m>n+2&&B.c.aB(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.aB(a5,"file",0)){if(p<=0){if(!B.c.aB(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.L(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.cb(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.aB(a5,"http",0)){if(i&&o+3===n&&B.c.aB(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.cb(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.aB(a5,"https",0)){if(i&&o+4===n&&B.c.aB(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.cb(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.nu(a4<a5.length?B.c.L(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Iz(a5,0,q)
else{if(q===0)A.i_(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.IA(a5,c,p-1):""
a=A.Iv(a5,p,o,!1)
i=o+1
if(i<n){a0=A.dX(B.c.L(a5,i,n),a3)
d=A.Ix(a0==null?A.h(A.M("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Iw(a5,n,m,a3,j,a!=null)
a2=m<l?A.Iy(a5,m+1,l,a3):a3
return A.Iq(j,b,a,d,a1,a2,l<a4?A.Iu(a5,l+1,a4):a3)},
CG(a){var s=t.N
return B.a.bb(A.d(a.split("&"),t.s),A.n(s,s),new A.vH(B.cN),t.G)},
mE(a,b,c){throw A.b(A.M("Illegal IPv4 address, "+a,b,c))},
Ht(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.mE("each part must be in the range 0..255",a,r)}A.mE("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.mE(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.aY(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.mE(j,a,q)
p=l}A.mE("IPv4 address should contain exactly 4 parts",a,q)},
Hu(a,b,c){var s
if(b===c)throw A.b(A.M("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.Hv(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.CF(a,b,c)
return!0},
Hv(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.B(n,a,q)
r=q
break}return new A.B("Unexpected character",a,q-1)}if(r-1===b)return new A.B(n,a,r)
return new A.B("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.B("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.B("Invalid IPvFuture address character",a,r)}},
CF(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.vG(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.Ht(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.d.er(l,8)
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
B.a9.jF(s,a0,16,s,a)
B.a9.oa(s,a,a0,0)}}return s},
Iq(a,b,c,d,e,f,g){return new A.k2(a,b,c,d,e,f,g)},
Da(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i_(a,b,c){throw A.b(A.M(c,a,b))},
Ix(a,b){var s=A.Da(b)
if(a===s)return null
return a},
Iv(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.i_(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.Is(a,q,r)
if(o<r){n=o+1
p=A.Df(a,B.c.aB(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.Hu(a,q,o)
l=B.c.L(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.c.dJ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.Df(a,B.c.aB(a,"25",n)?o+3:n,c,"%25")}else p=""
A.CF(a,b,o)
return"["+B.c.L(a,b,o)+p+"]"}}return A.IC(a,b,c)},
Is(a,b,c){var s=B.c.dJ(a,"%",b)
return s>=b&&s<c?s:c},
Df(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.bK(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.Ao(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.bK("")
l=h.a+=B.c.L(a,q,r)
if(m)n=B.c.L(a,r,r+3)
else if(n==="%")A.i_(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.bK("")
if(q<r){h.a+=B.c.L(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.L(a,q,r)
if(h==null){h=new A.bK("")
m=h}else m=h
m.a+=i
l=A.An(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.L(a,b,c)
if(q<c){i=B.c.L(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
IC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.Ao(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.bK("")
k=B.c.L(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.L(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.bK("")
if(q<r){p.a+=B.c.L(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.i_(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.L(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.bK("")
l=p}else l=p
l.a+=k
j=A.An(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.L(a,b,c)
if(q<c){k=B.c.L(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
Iz(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.Dc(a.charCodeAt(b)))A.i_(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.i_(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.L(a,b,c)
return A.Ir(q?a.toLowerCase():a)},
Ir(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
IA(a,b,c){return A.k3(a,b,c,16,!1,!1)},
Iw(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.k3(a,b,c,128,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.c.Y(q,"/"))q="/"+q
return A.IB(q,e,f)},
IB(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.Y(a,"/")&&!B.c.Y(a,"\\"))return A.ID(a,!s||c)
return A.IE(a)},
Iy(a,b,c,d){return A.k3(a,b,c,256,!0,!1)},
Iu(a,b,c){return A.k3(a,b,c,256,!0,!1)},
Ao(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.z2(r)
o=A.z2(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.aC(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.L(a,b,b+3).toUpperCase()
return null},
An(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.d.m6(a,6*p)&63|q
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
o+=3}}return A.Ad(s,0,null)},
k3(a,b,c,d,e,f){var s=A.De(a,b,c,d,e,f)
return s==null?B.c.L(a,b,c):s},
De(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.Ao(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.i_(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.An(n)}if(o==null){o=new A.bK("")
k=o}else k=o
k.a=(k.a+=B.c.L(a,p,q))+l
if(typeof m!=="number")return A.B8(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.L(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
Dd(a){if(B.c.Y(a,"."))return!0
return B.c.bK(a,"/.")!==-1},
IE(a){var s,r,q,p,o,n,m
if(!A.Dd(a))return a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.a.l(s,"")}p=!0}else{p="."===n
if(!p)B.a.l(s,n)}}if(p)B.a.l(s,"")
return B.a.a0(s,"/")},
ID(a,b){var s,r,q,p,o,n
if(!A.Dd(a))return!b?A.Db(a):a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.a.gac(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.a.l(s,"..")
p=!0}else{p="."===n
if(!p)B.a.l(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.a.l(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.a.k(s,0,A.Db(s[0]))}return B.a.a0(s,"/")},
Db(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.Dc(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.L(a,0,s)+"%3A"+B.c.aT(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
It(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.b(A.p("Invalid URL encoding",null))}}return r},
Ap(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.cN===d)return B.c.L(a,b,c)
else p=new A.dI(B.c.L(a,b,c))
else{p=A.d([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.b(A.p("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.b(A.p("Truncated URI",null))
B.a.l(p,A.It(a,n+1))
n+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.J.a(p)
return B.rB.bI(p)},
Dc(a){var s=a|32
return 97<=s&&s<=122},
CC(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.M(k,a,r))}}if(q<0&&r>b)throw A.b(A.M(k,a,r))
while(p!==44){B.a.l(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.l(j,o)
else{n=B.a.gac(j)
if(p!==44||r!==n+7||!B.c.aB(a,"base64",n+1))throw A.b(A.M("Expecting '='",a,r))
break}}B.a.l(j,r)
m=r+1
if((j.length&1)===1)a=B.ft.oK(a,m,s)
else{l=A.De(a,m,s,256,!0,!1)
if(l!=null)a=B.c.cb(a,m,s,l)}return new A.vF(a,j,c)},
E4(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
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
dJ:function dJ(a){this.a=a},
n8:function n8(){},
av:function av(){},
kE:function kE(a){this.a=a},
e6:function e6(){},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
lx:function lx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jt:function jt(a){this.a=a},
mA:function mA(a){this.a=a},
hM:function hM(a){this.a=a},
kU:function kU(a){this.a=a},
m_:function m_(){},
jo:function jo(){},
wr:function wr(a){this.a=a},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
t:function t(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(){},
L:function L(){},
nA:function nA(){},
vk:function vk(){this.b=this.a=0},
bK:function bK(a){this.a=a},
vH:function vH(a){this.a=a},
vG:function vG(a){this.a=a},
k2:function k2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
vF:function vF(a,b,c){this.a=a
this.b=b
this.c=c},
nu:function nu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
n3:function n3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
th:function th(a){this.a=a},
DC(a){var s
if(typeof a=="function")throw A.b(A.p("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.IQ,a)
s[$.zP()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.b(A.p("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.IR,a)
s[$.zP()]=a
return s},
IQ(a){return t.BO.a(a).$0()},
IR(a,b,c){t.BO.a(a)
if(A.j(c)>=1)return a.$1(b)
return a.$0()},
o3(a,b,c){return c.a(a[b])},
DD(a,b){return a[b]},
b2(a,b,c,d){return d.a(a[b].apply(a,c))},
ax(a,b){var s=new A.au($.at,b.i("au<0>")),r=new A.jA(s,b.i("jA<0>"))
a.then(A.ie(new A.zC(r,b),1),A.ie(new A.zD(r),1))
return s},
DO(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
ig(a){if(A.DO(a))return a
return new A.yW(new A.jH(t.BT)).$1(a)},
zC:function zC(a,b){this.a=a
this.b=b},
zD:function zD(a){this.a=a},
yW:function yW(a){this.a=a},
H0(a){var s
if(a==null)s=B.bd
else{s=new A.eY()
s.ck(a)}return s},
nd:function nd(){},
eY:function eY(){this.b=this.a=0},
l5:function l5(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.f=d
_.r=e},
Hh(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=t.S,b2=A.aI(b3,!0,b1)
B.a.l(b2,128)
while(B.d.P(b2.length,64)!==56)B.a.l(b2,0)
s=b3.length*8
for(r=56;r>=0;r-=8)B.a.l(b2,B.d.jP(s,r)&255)
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
j=j+a0>>>0}return new A.G(A.d([q,p,o,n,m,l,k,j],t.t),t.dc.a(new A.v0()),t.dH).oB(0)},
v0:function v0(){},
mG:function mG(a,b){this.a=a
this.b=b},
GA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a
if(!B.a.q(h.w,b))throw A.b(A.a8(b,"lod","package does not declare this LOD"))
s=A.d([],t.AO)
try{for(h=h.e,n=h.length,m=c.b,l=0;l<h.length;h.length===n||(0,A.r)(h),++l){r=h[l]
q=r.c.h(0,b)
if(q==null){h=A.i("part "+r.a+" has no "+b+" payload")
throw A.b(h)}k=q
j=m.h(0,k)
p=j==null?A.h(A.i("model package payload is missing: "+k)):j
J.em(s,a.nG(new Uint8Array(A.S(p))))}return new A.t_(a,s)}catch(i){for(h=s,n=A.C(h).i("bR<1>"),h=new A.bR(h,n),h=new A.ao(h,h.gu(0),n.i("ao<a0.E>")),n=n.i("a0.E");h.m();){m=h.d
o=m==null?n.a(m):m
a.aN(o)}throw i}},
t_:function t_(a,b){this.a=a
this.b=b
this.c=!1},
lQ:function lQ(a){this.e=a},
ta:function ta(a,b){this.a=a
this.b=b},
t1:function t1(){},
t2:function t2(){},
t3:function t3(){},
GB(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(!J.ab(a.h(0,"schema"),"pixeldart-model-package-v1"))throw A.b(B.is)
s=a.h(0,"parts")
if(!t.j.b(s)||J.kx(s))throw A.b(B.ia)
r=A.yy(a,"assetId")
q=A.yy(a,"packageHash")
p=A.yy(a,"sourceFormat")
o=A.d([],t.w4)
for(n=J.P(s),m=t.P;n.m();)o.push(A.GC(m.a(n.gp())))
n=A.B_(a.h(0,"materials"))
m=A.B_(a.h(0,"textures"))
l=A.B_(a.h(0,"lods"))
k=A.DP(a.h(0,"combinedBounds"))
j=A.Kd(a.h(0,"sockets"))
i=t.yq.a(a.h(0,"provenance"))
if(i==null)i=null
else{h=t.N
h=i.bn(0,new A.t5(),h,h)
i=h}return new A.t4(r,q,p,o,n,m,l,k,j,i==null?B.aX:i)},
GC(a){var s,r,q=A.yy(a,"id"),p=A.As(a.h(0,"materialSlot"))
if(p==null)p=A.h(B.ht)
s=t.yq.a(a.h(0,"lodFiles"))
if(s==null)s=null
else{r=t.N
r=s.bn(0,new A.t9(),r,r)
s=r}return new A.fs(q,p,s==null?B.aX:s)},
yy(a,b){var s=a.h(0,b)
if(typeof s!="string"||s.length===0)throw A.b(A.M(b+" is required",null,null))
return s},
JB(a){if(a.length===0||B.c.Y(a,"/")||B.c.q(a,"\\"))return!1
return B.a.a8(A.d(a.split("/"),t.s),new A.yn())},
B_(a){var s,r
if(a==null)return B.o
if(!t.j.b(a)||J.kw(a,new A.yG()))throw A.b(B.hK)
s=A.d([],t.s)
for(r=J.P(a);r.m();)s.push(A.x(r.gp()))
return s},
DP(a){var s,r
if(a==null)return B.bD
if(!t.j.b(a)||J.kw(a,new A.yq()))throw A.b(B.j0)
s=A.d([],t.n)
for(r=J.P(a);r.m();)s.push(A.a4(r.gp()))
return s},
Kd(a){var s,r,q,p
if(a==null)return B.mC
if(!t.f.b(a))throw A.b(B.i5)
if(a.ga9().R(0,new A.yE()))throw A.b(B.it)
s=A.n(t.N,t.dd)
for(r=a.gO(),r=r.gA(r);r.m();){q=r.gp()
p=q.a
if(typeof p=="string")s.k(0,p,A.DP(q.b))}return s},
t4:function t4(a,b,c,d,e,f,g,h,i,j){var _=this
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
t5:function t5(){},
t7:function t7(){},
t8:function t8(){},
t6:function t6(){},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
t9:function t9(){},
yn:function yn(){},
yG:function yG(){},
yq:function yq(){},
yE:function yE(){},
ED(a){var s,r,q,p,o,n,m=A.d([],t.t9),l=new A.zN(m)
for(s=a.B(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)l.$2("MODEL_PACKAGE_INVALID",s[q])
p=A.a1(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){o=s[q]
n=o.a
if(!p.l(0,n))l.$2("MODEL_PACKAGE_DUPLICATE_PART","duplicate part id: "+n)
if(!o.c.M("LOD0"))l.$2("MODEL_PACKAGE_PART_LOD","part "+n+" has no LOD0 payload")}return m},
Lq(a,b){var s,r,q,p,o,n=A.d([],t.t9),m=new A.zO(n),l=A.a1(t.N)
for(s=a.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)l.K(0,s[q].c.gan())
for(s=A.eW(l,l.r,l.$ti.c),r=s.$ti.c;s.m();){p=s.d
if(p==null)p=r.a(p)
if(!b.M(p))m.$2("MODEL_PACKAGE_PAYLOAD_MISSING","declared payload is missing: "+p)}for(s=new A.c1(b,b.r,b.e,A.v(b).i("c1<1>"));s.m();){r=s.d
if(!l.q(0,r))m.$2("MODEL_PACKAGE_PAYLOAD_UNDECLARED","payload is not declared: "+r)
o=r.toLowerCase()
if(B.c.bk(o,".fbx")||B.c.bk(o,".obj")||B.c.bk(o,".mtl")||B.c.bk(o,".gltf")||B.c.bk(o,".glb"))m.$2("MODEL_PACKAGE_SOURCE_LEAK","source/intermediate payload: "+r)}return n},
zN:function zN(a){this.a=a},
zO:function zO(a){this.a=a},
tZ:function tZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
u_:function u_(){},
fw:function fw(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
m6:function m6(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=!1},
hd:function hd(a,b){this.a=a
this.b=b},
pv:function pv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pw:function pw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kW:function kW(){var _=this
_.c=_.b=_.a=null
_.d=0
_.e=!1},
mz:function mz(a,b){this.a=a
this.b=b},
m5:function m5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
BB(a,b,c,d,e,f,g,h){return new A.ir(g,f,h,b,d,e,c,a)},
ir:function ir(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=_.x=$},
ve:function ve(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
lj:function lj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var _=this
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
lk:function lk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eG(a,b){return new A.lv(a,b)},
e_:function e_(){},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b){this.a=a
this.b=b},
lv:function lv(a,b){this.a=a
this.b=b},
Le(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.d([],t.rh)
for(s=a.length,r=c.a,q=c.b,p=c.c,o=d==null,n=0;n<a.length;a.length===s||(0,A.r)(a),++n){m=a[n]
l=o?null:d.a
if(m.a===l)continue
l=m.b
k=l.a-r
j=l.b-q
l=l.c-p
i=m.d
h=m.f
B.a.l(f,new A.jQ(m.e*h*h*Math.max(Math.max(i.a,Math.max(i.b,i.c)),0.000001)/(1+(k*k+j*j+l*l)),m))}B.a.Z(f,new A.zE())
s=A.d([],t.cv)
for(r=A.hO(f,0,A.ek(b,"count",t.S),t.mn),q=r.$ti,r=new A.ao(r,r.gu(0),q.i("ao<a0.E>")),q=q.i("a0.E");r.m();){g=r.d
s.push((g==null?q.a(g):g).b)}return s},
b1:function b1(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bT:function bT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
zE:function zE(){},
iR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.c2(h,a,p,o,n,g,k,j,m,i,e,d,q,r,c,b,f,l)},
lO(a,b){if(!isFinite(b)||b<0||b>1)throw A.b(A.p("MaterialDefinition."+a+" must be in [0, 1]: "+A.z(b),null))},
h5:function h5(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
Gy(a){var s
A:{if(t.ys.b(a)){s=a
break A}if(t.tu.b(a)){s=a
break A}s=A.h(A.p("MeshData.indices must be Uint16List or Uint32List, got "+J.fa(a).t(0),null))}return s},
d1:function d1(a,b){this.a=a
this.b=b},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
vK:function vK(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rT:function rT(){},
rU:function rU(){},
rV:function rV(){},
l1:function l1(){},
j1(a){var s,r,q="volumetric",p=t.N,o=A.aR(["sceneColor","present"],p),n=a.a.b
if(n.q(0,"shadows"))o.K(0,A.aR(["shadowMap","sceneDepth"],p))
if(n.q(0,q)){o.l(0,"volumetricLight")
o.l(0,"sceneColor#"+(a.d>1?2:1))}if(n.q(0,"ssao"))o.K(0,A.aR(["ssaoRaw","ssaoBlurred"],p))
if(n.q(0,"bloom")){if(a.d>1)s=n.q(0,q)?3:2
else s=n.q(0,q)?2:1
o.K(0,A.aR(["bloomBlurH","bloomBlurV","sceneColor#"+s],p))}if(a.d>1)o.l(0,"sceneColor#1")
if(n.q(0,"dof"))o.K(0,A.aR(["dofBlurH","dofBlurV","dofOutput"],p))
if(n.q(0,"grade"))o.l(0,"gradeOutput")
if(n.q(0,"ps1"))o.l(0,"ps1Output")
r=n.q(0,"vhs")
if(r)o.l(0,"vhsOutput")
return new A.tj(A.fD(o,p),r)},
tj:function tj(a,b){this.a=a
this.b=b},
tk:function tk(){},
hI:function hI(a,b){this.a=a
this.b=b},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(){var _=this
_.b=_.a=null
_.c=0
_.d=!1},
hk:function hk(a,b){this.a=a
this.b=b},
kN:function kN(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
mw:function mw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
je:function je(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
b4:function b4(a,b,c){this.a=a
this.b=b
this.d=c},
qa:function qa(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.x=g
_.y=h
_.z=i},
Gw(a){var s,r,q
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=B.bU;s.m();){switch(s.d.a){case 0:q=B.bU
break
case 1:q=B.dR
break
case 2:q=B.dS
break
case 3:q=B.dT
break
default:q=null}if(A.C4(q)>A.C4(r))r=q}return r},
C4(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2
break
case 3:s=3
break
default:s=null}return s},
Ea(a){return new A.cc(A.Kl(a),t.EF)},
Kl(a){return function(){var s=a
var r=0,q=1,p=[],o
return function $async$Ea(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=s.b
r=o!=null?2:3
break
case 2:r=4
return b.b=new A.a6("albedo",o),1
case 4:case 3:o=s.x
r=o!=null?5:6
break
case 5:r=7
return b.b=new A.a6("normal",o),1
case 7:case 6:return 0
case 1:return b.c=p.at(-1),3}}}},
fr:function fr(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a,b){this.a=a
this.b=b},
rQ:function rQ(a){this.a=a},
rR:function rR(a){this.a=a},
rO:function rO(a){this.a=a},
rP:function rP(){},
Gx(){return new A.lP(new A.dq(new A.rS(),A.d([],t.Fy),A.d([],t.t),t.ja))},
lP:function lP(a){this.a=a},
rS:function rS(){},
E7(a){var s=4
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
case 3:s=A.h(A.bB("MeshStore: no shader location reserved for VertexAttributeKind.emissive yet \u2014 safe_world.vert has no emissive input"))
break
default:s=null}return s},
IX(a,b,c){var s,r,q,p,o
for(s=a.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(A.E7(o.a)===b)q+=o.c}return q},
Gz(a){return new A.rW(a,new A.dq(new A.rX(),A.d([],t.EM),A.d([],t.t),t.wm),A.n(t.S,t.qt))},
C5(a){var s
A:{if(t.ys.b(a)){s=a.byteLength
break A}if(t.tu.b(a)){s=a.byteLength
break A}s=A.h(A.p("MeshStore indices must be Uint16List or Uint32List",null))}return s},
mC:function mC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rW:function rW(a,b,c){this.a=a
this.b=b
this.c=c},
rX:function rX(){},
rY:function rY(){},
KK(a){var s,r,q,p,o
for(s=a.length,r=3421674724,q=2216829733,p=0;p<s;++p){o=a[p]
r=((r^o)>>>0)*16777619>>>0
q=((q^o)>>>0)*16777623>>>0}return B.c.bL(B.d.fh(r,16),8,"0")+B.c.bL(B.d.fh(q,16),8,"0")},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
rZ:function rZ(a,b){this.b=a
this.c=b},
t0:function t0(a,b,c,d,e,f){var _=this
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
dY(a,b){return new A.mc(a,b)},
Eg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.length
if(d<36)throw A.b(A.dY(B.py,""+d+" bytes, need at least 36"))
for(q=0;q<4;++q)if(a[q]!==B.kB[q])throw A.b(A.dY(B.pz,'expected "QMSH", got '+B.fr.nF(B.a9.ag(a,0,4),!0)))
p=a.BYTES_PER_ELEMENT
o=A.fy(0,null,B.d.bf(a.byteLength,p))
n=J.Bq(B.a9.gey(a),a.byteOffset+0*p,o*p)
m=n.getUint16(4,!0)
l=m===1
if(!l&&m!==2)throw A.b(A.dY(B.pA,"got version "+m+", expected 1 or 2"))
k=n.getUint16(6,!0)
if(!(l?k===14:B.qy.q(0,k)))throw A.b(A.dY(B.e7,"got stride "+k+" for QMSH v"+m))
j=n.getUint32(8,!0)
l=j*k
i=36+l*4
if(d!==i)throw A.b(A.dY(B.pB,"expected exactly "+i+" bytes for "+j+" vertices, got "+d))
if(B.d.P(j,3)!==0)throw A.b(A.dY(B.pD,"vertexCount "+j+" is not a multiple of 3"))
h=J.rm(6,t.i)
for(q=0;q<6;++q)h[q]=n.getFloat32(12+q*4,!0)
if(B.a.R(h,new A.yX()))throw A.b(A.dY(B.pC,"bounds contain a non-finite value: "+A.z(h)))
g=new Float32Array(l)
for(q=0;q<l;++q){f=n.getFloat32(36+q*4,!0)
if(!isFinite(f))throw A.b(A.dY(B.e8,"vertex float at index "+q+" is non-finite"))
if(!(q<l))return A.e(g,q)
g[q]=f}A:{if(14===k){d=B.an
break A}if(18===k){d=B.rY
break A}if(20===k){d=B.rX
break A}d=A.h(A.dY(B.e7,"no vertex layout for stride "+k))}s=new A.c3(d,g,null,new A.h4(new A.A(h[0],h[1],h[2]),new A.A(h[3],h[4],h[5])))
try{s.B()}catch(e){r=A.am(e)
d=A.dY(B.e8,"mesh validation failed: "+A.z(r))
throw A.b(d)}return s},
d_:function d_(a,b){this.a=a
this.b=b},
mc:function mc(a,b){this.a=a
this.b=b},
yX:function yX(){},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=a
this.b=b},
vv:function vv(a,b){this.a=a
this.b=b},
vw:function vw(a){this.a=a},
vt:function vt(a,b){this.a=a
this.b=b},
vu:function vu(){},
Hr(a){var s=new A.my(a,new A.dq(new A.vx(),A.d([],t.f2),A.d([],t.t),t.qq),A.n(t.S,t._))
s.d=s.b5($.Bh())
s.e=s.b5($.Be())
s.f=s.b5($.Bf())
s.r=s.b5($.Bd())
s.w=s.b5($.Bg())
return s},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
my:function my(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
vx:function vx(){},
vy:function vy(){},
vA:function vA(){},
vz:function vz(){},
Hk(a,b,c,d,e){var s,r,q
if(c)return B.r7
if(d)return B.r1
s=A.Cv(b,e)
if(Math.abs(s)<0.5&&a>=0.2617993877991494)return B.rb
r=s<0
if(a>=0.2617993877991494)return r?B.eu:B.rc
if(a>=0.10471975511965977)return r?B.eu:B.rd
if(a>=-0.014538592669112763)return r?B.ra:B.re
q=a*180/3.141592653589793
if(q>=-6)return r?B.r9:B.r3
if(q>=-12)return r?B.r8:B.r4
if(q>=-18)return r?B.r2:B.r5
return B.r6},
Cw(a,b,c){var s
if(b<=a)return c<a?0:1
s=B.b.n((c-a)/(b-a),0,1)
return s*s*(3-2*s)},
Cv(a,b){var s=a-b
while(s>12)s-=24
while(s<-12)s+=24
return s},
bq:function bq(a,b){this.a=a
this.b=b},
vi:function vi(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
hP:function hP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Lf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=b.gV(0)
if(!g)throw A.b(A.p("invalid volumetric source selection inputs",null))
s=A.a1(t.N)
r=A.d([],t.z4)
for(g=c.length,q=b.a,p=b.b,o=b.c,n=0;n<c.length;c.length===g||(0,A.r)(c),++n){m=c[n]
m.B()
l=m.a
if(!s.l(0,l))throw A.b(A.p("duplicate volumetric source id: "+l,null))
l=m.b
k=l.a-q
j=l.b-p
l=l.c-o
i=A.CJ(m.f,Math.sqrt(k*k+j*j+l*l),m.e)
l=m.c
B.a.l(r,new A.jR(m.d*Math.max(l.a,Math.max(l.b,l.c))*i,m))}B.a.Z(r,new A.zF())
g=A.d([],t.xL)
for(q=A.hO(r,0,A.ek(a,"count",t.S),t.bG),p=q.$ti,q=new A.ao(q,q.gu(0),p.i("ao<a0.E>")),p=p.i("a0.E");q.m();){h=q.d
g.push((h==null?p.a(h):h).b)}return g},
CJ(a,b,c){var s,r,q,p
for(s=[new A.a6("distance",b),new A.a6("referenceDistance",c),new A.a6("cutoffDistance",a)],r=0;r<3;++r){q=s[r]
p=q.b
if(!isFinite(p))A.h(A.p(q.a+" must be finite: "+A.z(p),null))}if(b<0||c<=0||a<=0)throw A.b(A.p("invalid inverse-square attenuation inputs",null))
if(b>=a)return 0
s=c*c
return B.b.n(s/Math.max(s,b*b)*(1-Math.pow(b/a,4)),0,1)},
HB(c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1="rayOrigin must be finite: ",c2="rayDirection must be finite: "
if(!c5.gV(0))A.h(A.p(c1+c5.t(0),c0))
if(!c3.gV(0))A.h(A.p(c2+c3.t(0),c0))
if(!isFinite(c4))A.h(A.p("rayLength must be finite: "+A.z(c4),c0))
if(!isFinite(c6))A.h(A.p("scatteringCoeff must be finite: "+A.z(c6),c0))
if(!isFinite(0.7))A.h(A.p("anisotropy must be finite: 0.7",c0))
if(!isFinite(1))A.h(A.p("mediumTransmittance must be finite: 1",c0))
s=!0
if(!(c3.gbl()<1e-8))if(!(c4<0))s=c6<0
if(s)throw A.b(A.p("invalid volumetric source-field inputs",c0))
for(s=c7.length,r=c5.a,q=c5.b,p=c5.c,o=c4<0,n=c3.a,m=c3.b,l=c3.c,k=n*n+m*m+l*l<1e-8,n=isFinite(n),j=isFinite(r),i=isFinite(q),h=isFinite(p),m=isFinite(m),l=isFinite(l),g=c6<0,f=B.w,e=B.w,d=0,c=0;c<c7.length;c7.length===s||(0,A.r)(c7),++c){b=c7[c]
b.B()
a=b.b
a0=a.a
a1=a0-r
a2=a.b
a3=a2-q
a4=a.c
a5=a4-p
a6=a1*a1+a3*a3+a5*a5
a7=A.CJ(b.f,Math.sqrt(a6),b.e)
if(a7<=0)continue
a8=b.d
if(!(j&&i&&h))A.h(A.p(c1+c5.t(0),c0))
if(!(n&&m&&l))A.h(A.p(c2+c3.t(0),c0))
if(!(isFinite(a0)&&isFinite(a2)&&isFinite(a4)))A.h(A.p("lightPos must be finite: "+a.t(0),c0))
if(!isFinite(a8))A.h(A.p("lightIntensity must be finite: "+A.z(a8),c0))
if(k)A.h(A.p("rayDirection must be nonzero",c0))
if(o)A.h(A.p("rayLength must be >= 0",c0))
if(a8<0||g)A.h(A.p("lightIntensity and scatteringCoeff must be >= 0",c0))
a9=c3.ga5()
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
f=new A.A(f.a+a.a*b9,f.b+a.b*b9,f.c+a.c*b9)
a6=b9/Math.max(1e-8,Math.sqrt(a6))
e=new A.A(e.a+a1*a6,e.b+a3*a6,e.c+a5*a6);++d}return new A.vY(f,e.gbl()<1e-8?B.w:e.ga5(),d)},
co:function co(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
zF:function zF(){},
vY:function vY(a,b,c){this.a=a
this.b=b
this.c=c},
KG(a){var s,r,q,p,o,n,m,l,k,j=A.d([],t.hr),i=A.n(t.N,t.S)
for(s=a.length,r=t.s2,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
o=p.gH().y
if(o==null){B.a.l(j,new A.dT(p,A.d([p],r)))
continue}n=""+p.gH().a.a+":"+p.gH().b.a+":"+A.z(o)
m=i.h(0,n)
if(m==null){i.k(0,n,j.length)
B.a.l(j,new A.dT(p,A.d([p],r)))}else{l=j.length
if(m>>>0!==m||m>=l)return A.e(j,m)
k=j[m].b
if(k.length>=16){i.k(0,n,l)
B.a.l(j,new A.dT(p,A.d([p],r)))}else B.a.l(k,p)}}return j},
dT:function dT(a,b){this.a=a
this.b=b},
lf:function lf(a){this.a=a},
q3:function q3(){},
q4:function q4(a){this.a=a},
q1:function q1(a){this.a=a},
q2:function q2(a){this.a=a},
lg:function lg(a,b){this.a=a
this.b=b},
fj:function fj(a,b){this.a=a
this.b=b},
ll:function ll(a,b){this.a=a
this.b=b
this.c=0},
I4(){return new A.hU()},
q9:function q9(a){this.a=a
this.b=null},
hU:function hU(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
A7(){return!0},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
tn:function tn(){},
to:function to(){},
cx:function cx(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hH:function hH(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
ma:function ma(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0},
bn:function bn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
u0:function u0(){},
bh:function bh(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
u2:function u2(a,b){this.a=a
this.b=b},
u7:function u7(){},
u6:function u6(){},
u5:function u5(){},
u4:function u4(a){this.a=a},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u1:function u1(a,b){this.a=a
this.b=b},
H6(a){return new A.jd(a,new A.dq(new A.u8(),A.d([],t.w_),A.d([],t.t),t.tc),A.n(t.iO,t.gE))},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
u8:function u8(){},
ya(a,b){return A.J7(a,b)},
J7(a,b){var s=0,r=A.aN(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$ya=A.aO(function(c,d){if(c===1)return A.aK(d,r)
for(;;)switch(s){case 0:a.cm()
if(a.at!=null)throw A.b(A.i("renderer.configure cannot overlap an active frame"))
p=a.b.cr(b)
i=p.a.d
if(!(i.a.gu(0)!==0||i.b.gu(0)!==0||i.c.gu(0)!==0||i.d.gu(0)!==0||i.e||i.f)&&!i.r){a.b.cs(p)
a.as=b
s=1
break}o=null
n=null
m=null
try{o=a.x.dR(b)
n=new A.ma(a.a,A.n(t.N,t.CH))
l=A.Dy(a,n,b,o.a.b.a)
m=l.a
a.b.cs(p)
i=a.x
h=o
if(i.e)A.h(A.i("GPU resource adapter is disposed"))
i.fV(h)
g=i.c
i.b.cs(h.a)
i.c=h
i.d=null
if(g!=null)i.eg(g.b)
h.c=B.js
k=a.z
j=a.y
a.z=l.a
a.Q=l.b
a.y=n
a.as=b
i=k
if(i!=null)i.c_()
i=j
if(i!=null)i.c_()}catch(e){if(p.c===B.bg){i=a.b
h=t.AB.a(p)
if(i.d)A.h(A.i("configuration coordinator is disposed"))
i.h4(h)
i.a.hU(h.a)
i.b.fc(h.b)
h.c=B.fZ
i.c=null}i=o
if((i==null?null:i.c)===B.ax){i=a.x
i.toString
h=o
h.toString
t.yi.a(h)
if(i.e)A.h(A.i("GPU resource adapter is disposed"))
i.fV(h)
i.eg(h.b)
i.b.fc(h.a)
h.c=B.jt
i.d=null}i=m
if(i!=null)i.c_()
i=n
if(i!=null)i.c_()
throw e}case 1:return A.aL(q,r)}})
return A.aM($async$ya,r)},
Dz(a){var s,r,q=a.y
q.toString
s=a.as
s.toString
r=A.Dy(a,q,s,a.x.gp().a.b.a)
a.z=r.a
a.Q=r.b},
Dy(a,b,c,a0){var s,r,q,p,o,n,m,l="sceneColor",k=new A.y8(a),j=new A.y9(a0,a),i=c.a,h=a.a,g=c.b,f=c.c,e=c.d,d=c.e
if(i.b.q(0,"shadows")){s=a.w
r=s.b
s=s.c
q=A.KI(b,h,d,i,s.gpB(),new A.xU(j),new A.xV(j),new A.xW(a),new A.y0(a),new A.y1(a),new A.y2(j),new A.y3(j),s.gpD(),new A.y4(a),s.gpI(),r.gpF(),k,s.gpK(),s.gpM(),new A.y5(j,c),new A.y6(j),new A.y7(j),new A.xX(j),new A.xY(j),new A.xZ(a),new A.y_(j),e,f,g,c.r)}else{p=new A.aS(l,B.u,g,f,e,0)
o=new A.aS(l,B.u,g,f,1,1)
j=e>1
i=j?o:p
n=j?new A.iV(h,p,o):null
k=A.d([new A.mU(b,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nout vec4 vColor;\nout vec3 vNormal;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  gl_Position=uViewProjection*model*vec4(aPosition,1.0);\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nuniform vec3 uLightDir;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nout vec4 oColor;\nvoid main(){\n  vec3 n=normalize(vNormal);\n  float ndotl=max(dot(n,normalize(uLightDir)),0.0);\n  vec3 lit=vColor.rgb*clamp(uAmbientColor*uAmbientIntensity*uAmbientLightScale+\n    vec3(ndotl)*uDirectLightScale,0.0,1.0);\n  oColor=vec4(lit,vColor.a);\n}\n",k,p)],t.e_)
if(n!=null)k.push(n)
k.push(new A.j4(b,u.l,u.E,h,i,d))
q=new A.lf(k)}a.r.toString
m=q.mM(B.ai,new A.u0(),!1,new A.nn())
k=m.a.b
if(k.length!==0)throw A.b(A.i("safe renderer graph is invalid: "+A.z(k)))
return new A.x8(q,m)},
J8(b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=b6.Q,b5=b6.x
if(b4==null||b5==null)throw A.b(A.i("renderer graph is not initialized"))
s=b7.c
s=A.J(new A.an(s,A.v(s).i("an<2>")),t.yz)
for(r=0;r<b9.length;++r){q=b9[r]
p=b6.w.a.b
o=p.$ti
n=o.c.a(q.a)
p.a2(n)
p=p.b
n=n.a
if(!(n>=0&&n<p.length))return A.e(p,n)
n=p[n].c
p=(n==null?o.y[1].a(n):n).d
o=q.c.af()
p=p.gap()
n=A.C(p)
B.a.l(s,new A.nB(new A.cT((r|1073741824)>>>0,0,"transient"),q,A.b3(new A.G(p,n.i("A(1)").a(o.gau()),n.i("G<1,A>")))))}p=b8.a
m=A.KO(A.BK(p.c),s,b8.d)
for(o=s.length,l=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gH().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.eG(B.aV,n))
j=j.b
g=j.$ti
j.a2(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.e(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
l+=B.d.ah(n>0?n:h.e,3)}for(s=m.a,o=s.length,f=0,k=0;k<s.length;s.length===o||(0,A.r)(s),++k){n=s[k].gH().a
j=b6.w.a
i=n.a
h=j.c.h(0,i)
if(h==null)A.h(A.eG(B.aV,n))
j=j.b
g=j.$ti
j.a2(g.c.a(n))
j=j.b
if(!(i>=0&&i<j.length))return A.e(j,i)
i=j[i].c
if(i==null)g.y[1].a(i)
n=h.d
f+=B.d.ah(n>0?n:h.e,3)}o=t.N
n=A.n(o,t.rL)
e=new A.q9(n)
e.mI("cull")
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
if(a2.gH().e===B.at)B.a.l(a,new A.b9(new A.c_(a0.jb(a2.gH().c.a).c,a2.gF().a),a2,a1))
else B.a.l(b,new A.b9(new A.c4(B.ow,a2.gH().b,a2.gH().a,a2.gF().a),a2,g))}a3=new A.na(A.KG(A.Lh(b)),A.Lg(a),p,b8.b,b8.c)
a4=new A.l4(b6.a,e)
for(s=b4.b,p=s.length,i=t.Bu,k=0;k<s.length;s.length===p||(0,A.r)(s),++k){a5=s[k]
g=a5.gH().a
if(g.length===0)A.h(A.a8(g,"passId",null))
e.b=g
n.c7(g,A.Ei())
a6=A.n(o,i)
for(g=a5.gH().c,a0=g.length,a7=0;a7<g.length;g.length===a0||(0,A.r)(g),++a7){a8=g[a7].a
a9=b5.c
if(a9==null)A.h(A.i("GPU resource adapter is not initialized"))
a1=a8.f
b0=a8.a
b1=a1===0?b0:b0+"#"+a1
b2=a9.b.h(0,b1)
if(b2==null)A.h(A.i("resource is not in candidate: "+b1))
b3=new A.h9(b2)
a6.k(0,b0+"#"+a1,b3)
a6.c7(b0,new A.yb(b3))}a5.aw(new A.kP(a6,a4,new A.yc(b8,b6).$0(),a3))}return new A.ws(e,m,j)},
Cr(a){return new A.uj(a,new A.kV(new A.kW(),new A.jh()),new A.ll(A.d([],t.h1),B.j9),A.d([],t.Ft),B.c5,A.d([],t.ow),null)},
mh:function mh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=!1},
ws:function ws(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(a,b,c){this.a=a
this.b=b
this.c=c},
y8:function y8(a){this.a=a},
y9:function y9(a,b){this.a=a
this.b=b},
y7:function y7(a){this.a=a},
y0:function y0(a){this.a=a},
y1:function y1(a){this.a=a},
y6:function y6(a){this.a=a},
xW:function xW(a){this.a=a},
xY:function xY(a){this.a=a},
xX:function xX(a){this.a=a},
y5:function y5(a,b){this.a=a
this.b=b},
xU:function xU(a){this.a=a},
xV:function xV(a){this.a=a},
y2:function y2(a){this.a=a},
y3:function y3(a){this.a=a},
y4:function y4(a){this.a=a},
y_:function y_(a){this.a=a},
xZ:function xZ(a){this.a=a},
yb:function yb(a){this.a=a},
yc:function yc(a,b){this.a=a
this.b=b},
x8:function x8(a,b){this.a=a
this.b=b},
nn:function nn(){},
na:function na(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
uj:function uj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=null
_.a$=f
_.b$=g},
uk:function uk(){},
ul:function ul(){},
um:function um(){},
nk:function nk(a){this.b=a},
wE:function wE(){},
nr:function nr(){},
jn:function jn(a,b){this.a=a
this.b=b},
Lh(a){var s,r,q=A.J(a,t.E0)
B.a.Z(q,new A.zJ())
s=A.C(q)
r=s.i("G<1,cB>")
s=A.J(new A.G(q,s.i("cB(1)").a(new A.zK()),r),r.i("a0.E"))
s.$flags=1
return s},
Lg(a){var s,r,q=A.J(a,t.EH)
B.a.Z(q,new A.zH())
s=A.C(q)
r=s.i("G<1,cB>")
s=A.J(new A.G(q,s.i("cB(1)").a(new A.zI()),r),r.i("a0.E"))
s.$flags=1
return s},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b){this.a=a
this.b=b},
b9:function b9(a,b,c){this.a=a
this.b=b
this.$ti=c},
zJ:function zJ(){},
zK:function zK(){},
zH:function zH(){},
zI:function zI(){},
KO(a,b,c){var s,r,q,p,o,n,m,l=A.d([],t.s2)
for(s=b.length,r=0,q=0,p=0;p<b.length;b.length===s||(0,A.r)(b),++p){o=b[p];++r
if((o.gH().d&c)>>>0===0){++q
continue}n=o.gfn()
m=n.a
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){n=n.b
n=isFinite(n.a)&&isFinite(n.b)&&isFinite(n.c)}else n=!1
if(!n)throw A.b(A.p("cullItems: non-finite world bounds for instance "+o.gF().t(0),null))
if(a.j9(o.gfn())===B.bh){++q
continue}B.a.l(l,o)}return new A.pL(l,new A.pM(q))},
pM:function pM(a){this.b=a},
pL:function pL(a,b){this.a=a
this.b=b},
b3(a){var s,r,q,p,o,n,m,l,k
for(s=J.P(a),r=B.rI,q=B.rN,p=!1;s.m();p=!0){o=s.gp()
n=o.a
m=Math.min(r.a,n)
l=o.b
k=Math.min(r.b,l)
o=o.c
r=new A.A(m,k,Math.min(r.c,o))
q=new A.A(Math.max(q.a,n),Math.max(q.b,l),Math.max(q.c,o))}if(!p)throw A.b(A.p("Aabb.fromPoints requires at least one point",null))
return new A.h4(r,q)},
h4:function h4(a,b){this.a=a
this.b=b},
BK(a){var s,r,q,p,o,n,m=a.a,l=new A.qc(),k=m.length
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
return new A.qb(A.d([l.$4(s+r,q+p,o+n,m[15]+m[12]),l.$4(m[3]-m[0],m[7]-m[4],m[11]-m[8],m[15]-m[12]),l.$4(m[3]+m[1],m[7]+m[5],m[11]+m[9],m[15]+m[13]),l.$4(m[3]-m[1],m[7]-m[5],m[11]-m[9],m[15]-m[13]),l.$4(m[3]+m[2],m[7]+m[6],m[11]+m[10],m[15]+m[14]),l.$4(m[3]-m[2],m[7]-m[6],m[11]-m[10],m[15]-m[14])],t.s0))},
fu:function fu(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
qb:function qb(a){this.a=a},
qc:function qc(){},
C2(a){if(a.length!==16)throw A.b(A.p("Mat4.fromColumnMajor requires 16 values",null))
return new A.dk(new Float32Array(A.S(a)))},
A5(a,b,c,d){var s=1/Math.tan(c/2),r=1/(d-b),q=new Float32Array(16)
q[0]=s/a
q[5]=s
q[10]=(b+d)*r
q[11]=-1
q[14]=2*b*d*r
return new A.dk(q)},
C3(a,b,c){var s=b.ga5(),r=c.b8(s).ga5(),q=s.b8(r),p=new Float32Array(16)
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
p[12]=-r.bj(a)
p[13]=-q.bj(a)
p[14]=s.bj(a)
p[15]=1
return new A.dk(p)},
dk:function dk(a){this.a=a},
rM:function rM(){},
fx(a,b){var s=a.ga5(),r=b/2,q=Math.sin(r)
return new A.md(s.a*q,s.b*q,s.c*q,Math.cos(r))},
md:function md(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
Fp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return new A.h6(j,i,c,k,e,f,a,o,d,h,l,n,m,b,g)},
im:function im(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
oB:function oB(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(a,b,c,d,e,f,g){var _=this
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
oA:function oA(){},
li:function li(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q7:function q7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jB:function jB(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
n0:function n0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kO:function kO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
n1:function n1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
l3:function l3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
n5:function n5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jD:function jD(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
n6:function n6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l8:function l8(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
n7:function n7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lt:function lt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g},
nc:function nc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
ni:function ni(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.b=a},
kP:function kP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by(a,b,c,d,e){var s=d==null?a.e:d,r=e==null?a.f:e
return new A.aS(a.a,a.b,b,c,s,r)},
A8:function A8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
GN(a){var s
switch(a.a){case 0:s=0
break
case 1:s=1
break
case 2:s=2.5
break
case 3:s=3.5
break
default:s=null}return s},
j4:function j4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=null},
no:function no(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mb:function mb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
np:function np(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Cu(a){var s=a.c,r=Math.abs(s.a)<0.99?B.b2:B.E,q=A.C3(a.b,s,r)
return new A.fF(A.A5(1,a.f,B.b.n(a.w*2,0.1,3),0.05).a6(0,q))},
fF:function fF(a){this.a=a},
mp:function mp(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ns:function ns(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
KI(c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=u.l,b4="#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSource;\nuniform vec2 uTexelStep;\nout vec4 oColor;\n\nconst float WEIGHTS[7]=float[7](\n  0.167465,0.153582,0.118331,0.076665,0.041582,0.018907,0.007203\n);\n\nvoid main(){\n  vec3 sum=texture(uSource,vUv).rgb*WEIGHTS[0];\n  for(int i=1;i<7;i++){\n    vec2 offset=uTexelStep*float(i);\n    sum+=texture(uSource,vUv+offset).rgb*WEIGHTS[i];\n    sum+=texture(uSource,vUv-offset).rgb*WEIGHTS[i];\n  }\n  oColor=vec4(sum,1.0);\n}\n",b5="bloomBlurH",b6="bloomBlurV",b7="dofBlurH",b8="dofBlurV",b9={},c0=c4.b
if(!c0.q(0,"shadows"))throw A.b(A.a8(c4,"profile","buildShadowGraph requires the shadows feature; use buildSafeGraph for a shadow-free profile"))
s=c0.q(0,"ssao")
r=c0.q(0,"bloom")
q=c0.q(0,"dof")
p=c0.q(0,"grade")
o=c0.q(0,"ps1")
n=c0.q(0,"vhs")
m=c0.q(0,"volumetric")
c0=B.d.ah(e9+1,2)
l=B.d.ah(e8+1,2)
k=A.by(B.c8,e9,e8,e7,b2)
j=A.by(B.c8.iR(),e9,e8,b2,b2)
i=e7>1
h=A.by(B.qe,e9,e8,b2,i?2:1)
g=A.by(B.qd,c0,l,b2,b2)
A.by(B.qm,e9,e8,b2,b2)
f=A.by(B.qj,e9,e8,b2,b2)
e=A.by(B.qc,f0,f0,b2,b2)
d=A.by(B.qf,c0,l,b2,b2)
c=A.by(B.qg,c0,l,b2,b2)
b=A.by(B.qk,c0,l,b2,b2)
a=A.by(B.ql,c0,l,b2,b2)
a0=$.EE()
a1=i?1:0
a2=A.by(a0,e9,e8,b2,a1+(m?1:0)+1)
a0=A.by(B.q9,c0,l,b2,b2)
a1=A.by(B.qa,c0,l,b2,b2)
a3=A.by(B.qb,e9,e8,b2,b2)
a4=A.by(B.qh,e9,e8,b2,b2)
a5=A.by(B.qn,e9,e8,b2,b2)
a6=A.by(B.qi,e9,e8,b2,b2)
a7=i?new A.iV(c2,k,j):b2
b9.a=null
a8=A.Cu(B.rf)
if(m){a9=i?j:k
b0=new A.mQ(c1,b3,"#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\n\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform mat4 uViewProjection;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform float uShaftIntensity;\nuniform float uFogDensity;\nuniform float uAnisotropy;\nuniform mat4 uView;\nuniform mat4 uInverseProjection;\nuniform vec3 uVolumetricAlbedo;\nuniform float uVolumetricHeightFalloff;\nuniform float uVolumetricDustDensity;\nuniform float uVolumetricJitter;\nuniform float uVolumetricIntensity;\nuniform float uVolumetricSampleCount;\nuniform float uVolumetricSourceCount;\n\nuniform vec3 uSourcePosition0;\nuniform vec3 uSourceColor0;\nuniform float uSourceIntensity0;\nuniform float uSourceReferenceDistance0;\nuniform float uSourceCutoffDistance0;\nuniform vec3 uSourcePosition1;\nuniform vec3 uSourceColor1;\nuniform float uSourceIntensity1;\nuniform float uSourceReferenceDistance1;\nuniform float uSourceCutoffDistance1;\nuniform vec3 uSourcePosition2;\nuniform vec3 uSourceColor2;\nuniform float uSourceIntensity2;\nuniform float uSourceReferenceDistance2;\nuniform float uSourceCutoffDistance2;\nuniform vec3 uSourcePosition3;\nuniform vec3 uSourceColor3;\nuniform float uSourceIntensity3;\nuniform float uSourceReferenceDistance3;\nuniform float uSourceCutoffDistance3;\n\nfloat linearDepth(float depth) {\n  float z = depth * 2.0 - 1.0;\n  return (2.0 * uNear * uFar) / max(uFar + uNear - z * (uFar - uNear), 1e-4);\n}\n\nfloat phaseHenyeyGreenstein(float cosTheta, float anisotropy) {\n  float g = clamp(anisotropy, -0.85, 0.85);\n  float denominator = 1.0 + g * g - 2.0 * g * cosTheta;\n  return (1.0 - g * g) / (12.5663706 * pow(max(denominator, 1e-3), 1.5));\n}\n\nvec3 sourceContribution(\n  vec3 position,\n  vec3 color,\n  float intensity,\n  float referenceDistance,\n  float cutoffDistance,\n  vec3 viewRay,\n  float rayLength\n) {\n  vec4 clip = uViewProjection * vec4(position, 1.0);\n  if (clip.w <= 0.0) return vec3(0.0);\n  vec3 sourceView = (uView * vec4(position, 1.0)).xyz;\n  float sourceDistance = length(sourceView);\n  float tClosest = clamp(dot(sourceView, viewRay), 0.0, rayLength);\n  vec3 sampleToSource = sourceView - viewRay * tClosest;\n  float distanceToSource = max(length(sampleToSource), 1e-3);\n  float cutoff = 1.0 - smoothstep(\n    cutoffDistance * 0.65, cutoffDistance, sourceDistance);\n  float inverseSquare = intensity * referenceDistance * referenceDistance /\n      max(distanceToSource * distanceToSource,\n          referenceDistance * referenceDistance);\n  // The incoming direction is source -> sample and the outgoing direction is\n  // sample -> camera. This is the same phase convention as the directional\n  // medium path, but now evaluated against the located source.\n  float phase = phaseHenyeyGreenstein(\n    dot(normalize(sampleToSource), viewRay), uAnisotropy);\n  // Located practicals and lightning must also acquire visible body in a\n  // dust-filled room. Use the same broad haze plus particulate density as the\n  // directional march; otherwise a clear-air fog toggle would accidentally\n  // erase dust-lit source rays while the directional shafts still showed it.\n  float mediumDensity = max(uFogDensity + uVolumetricDustDensity, 0.0);\n  float mediumWeight = 1.0 - exp(-max(\n    mediumDensity * min(rayLength, cutoffDistance), 0.0));\n  float pathWeight = clamp(\n    rayLength / max(sourceDistance, referenceDistance), 0.0, 1.0);\n  return color * inverseSquare * phase * cutoff * mediumWeight * pathWeight *\n    uVolumetricIntensity * 0.35;\n}\n\nvoid main() {\n  float depth = texture(uSceneDepth, vUv).r;\n  vec4 viewPoint = uInverseProjection * vec4(vUv * 2.0 - 1.0, -1.0, 1.0);\n  viewPoint /= max(abs(viewPoint.w), 1e-5);\n  vec3 viewRay = normalize(viewPoint.xyz);\n  // linearDepth is camera-space Z; convert it to distance along the actual\n  // reconstructed ray so wide and tall projections integrate equally.\n  float cameraDepth = linearDepth(depth);\n  float rayLength = min(cameraDepth / max(-viewRay.z, 1e-3), uFar);\n  float density = max(uFogDensity, 0.0);\n\n  // A fixed, bounded integral keeps the pass deterministic and makes its\n  // cost predictable on weak adapters. The depth buffer stops integration at\n  // the first opaque surface, so shafts do not leak through geometry.\n  const int maxSampleCount = 24;\n  int sampleCount = int(clamp(uVolumetricSampleCount, 4.0, 24.0));\n  vec3 scatter = vec3(0.0);\n  float transmittance = 1.0;\n  float stepLength = rayLength / float(sampleCount);\n  float jitterSeed = fract(sin(dot(vUv, vec2(127.1, 311.7))) * 43758.5453);\n  float jitter = (jitterSeed - 0.5) * clamp(uVolumetricJitter, 0.0, 0.5);\n  for (int i = 0; i < maxSampleCount; i++) {\n    if (i >= sampleCount) break;\n    float distanceAlongRay = clamp(\n      (float(i) + 0.5 + jitter) * stepLength, 0.0, rayLength);\n    float heightWeight = exp(-max(distanceAlongRay * uVolumetricHeightFalloff, 0.0));\n    // Dust is a separate, host-resolved particulate phase. It is denser near\n    // the occupied room volume than the broad atmospheric haze, so shafts gain\n    // visible body without turning the far horizon opaque. At zero density the\n    // extra term is exactly zero and the established fog path is unchanged.\n    float dustWeight = exp(-max(distanceAlongRay *\n      uVolumetricHeightFalloff * 0.45, 0.0));\n    float opticalDensity = density +\n      max(uVolumetricDustDensity, 0.0) * dustWeight;\n    float opticalDepth = opticalDensity * stepLength * heightWeight;\n    float sampleTransmittance = exp(-opticalDepth);\n    float phase = phaseHenyeyGreenstein(dot(normalize(-uLightDir), viewRay), uAnisotropy);\n    scatter += transmittance * (uLightColor * uVolumetricAlbedo *\n      uShaftIntensity * uVolumetricIntensity * phase) * opticalDepth;\n    transmittance *= sampleTransmittance;\n  }\n\n  if (uVolumetricSourceCount > 0.5) {\n    scatter += sourceContribution(\n      uSourcePosition0, uSourceColor0, uSourceIntensity0,\n      uSourceReferenceDistance0, uSourceCutoffDistance0, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 1.5) {\n    scatter += sourceContribution(\n      uSourcePosition1, uSourceColor1, uSourceIntensity1,\n      uSourceReferenceDistance1, uSourceCutoffDistance1, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 2.5) {\n    scatter += sourceContribution(\n      uSourcePosition2, uSourceColor2, uSourceIntensity2,\n      uSourceReferenceDistance2, uSourceCutoffDistance2, viewRay, rayLength);\n  }\n  if (uVolumetricSourceCount > 3.5) {\n    scatter += sourceContribution(\n      uSourcePosition3, uSourceColor3, uSourceIntensity3,\n      uSourceReferenceDistance3, uSourceCutoffDistance3, viewRay, rayLength);\n  }\n\n  // Fade the final sample at the far plane and keep the additive output\n  // bounded so a storm flash cannot blow out the entire frame.\n  float farFade = 1.0 - smoothstep(uFar * 0.75, uFar, rayLength);\n  oColor = vec4(min(scatter * farFade, vec3(8.0)), 1.0);\n}\n","#version 300 es\nprecision highp float;\n\nin vec2 vUv;\nlayout(location = 0) out vec4 oColor;\nuniform sampler2D uVolumetric;\nuniform float uVolumetricStrength;\n\nvoid main() {\n  vec3 light = texture(uVolumetric, vUv).rgb;\n  oColor = vec4(light * max(uVolumetricStrength, 0.0), 1.0);\n}\n",c2,e1,c8,g,f,a9,h,A.d([],t.C1))}else b0=b2
g=t.e_
b1=A.d([],g)
if(!m)h=i?j:k
if(r){B.a.K(b1,A.d([new A.ip(c1,b3,b4,c2,b5,b5,B.eS,!0,h,b,e0,c0,l),new A.ip(c1,b3,b4,c2,b6,b6,B.tz,!1,b,a,c6,c0,l),new A.kO(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uBloom;\nuniform float uBloomStrength;\nout vec4 oColor;\n\nvoid main(){\n  oColor=vec4(texture(uBloom,vUv).rgb*uBloomStrength,1.0);\n}\n",c2,c7,a,h,a2)],g))
h=a2}if(q){B.a.K(b1,A.d([new A.ix(c1,b3,b4,c2,b7,b7,B.eT,h,a0,e0,c0,l),new A.ix(c1,b3,b4,c2,b8,b8,B.tA,a0,a1,d1,c0,l),new A.l8(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSharp;\nuniform sampler2D uBlurred;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uFocusDistance;\nuniform float uFocusRange;\nuniform float uStrength;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvoid main(){\n  if(uStrength<=0.0001){\n    oColor=vec4(texture(uSharp,vUv).rgb,1.0);\n    return;\n  }\n\n  vec2 texelSize=1.0/vec2(textureSize(uSharp,0));\n  float depth=linearDepth(texture(uSceneDepth,vUv).r);\n\n  // Signed disparity relative to physical focal plane:\n  // Foreground (signedDisparity < 0) exhibits optical hyper-focal expansion,\n  // blurring at a steeper rate than background (signedDisparity > 0).\n  float signedDisparity=depth-uFocusDistance;\n  float normRange=max(uFocusRange,0.0001);\n  float signedCoc=(signedDisparity<0.0)\n    ?(signedDisparity/(normRange*0.75))\n    :(signedDisparity/(normRange*1.25));\n  float rawCoc=clamp(abs(signedCoc),0.0,1.0)*clamp(uStrength,0.0,1.0);\n\n  // Depth-aware disparity weighting to prevent out-of-focus foreground halos\n  // from bleeding over sharp in-focus background edges.\n  float depthN=linearDepth(texture(uSceneDepth,vUv+vec2(0.0,texelSize.y*2.0)).r);\n  float depthS=linearDepth(texture(uSceneDepth,vUv-vec2(0.0,texelSize.y*2.0)).r);\n  float depthE=linearDepth(texture(uSceneDepth,vUv+vec2(texelSize.x*2.0,0.0)).r);\n  float depthW=linearDepth(texture(uSceneDepth,vUv-vec2(texelSize.x*2.0,0.0)).r);\n  float minNeighborDepth=min(min(depthN,depthS),min(depthE,depthW));\n\n  // If this pixel is in-focus background but neighbors are close foreground,\n  // suppress foreground halo bleeding onto this sharp pixel.\n  float coc=rawCoc;\n  if(depth>uFocusDistance && minNeighborDepth<uFocusDistance){\n    float bleedProtection=clamp((depth-minNeighborDepth)/(normRange*2.0),0.0,1.0);\n    coc=mix(rawCoc,rawCoc*0.25,bleedProtection);\n  }\n\n  // Smooth cubic hermite curve for cinematic optical circle of confusion\n  float smoothCoc=coc*coc*(3.0-2.0*coc);\n\n  // Longitudinal (axial) chromatic aberration inside the optical bokeh circle:\n  // Out-of-focus highlights separate into subtle complementary chromatic fringes.\n  vec2 radialDir=vUv-vec2(0.5);\n  float radialDist=length(radialDir);\n  vec2 chromaDir=(radialDist>0.001)?(radialDir/radialDist):vec2(0.0,1.0);\n  vec2 chromaOffset=chromaDir*(smoothCoc*texelSize*2.8*sign(signedDisparity));\n\n  vec3 blurred=vec3(\n    texture(uBlurred,vUv-chromaOffset).r,\n    texture(uBlurred,vUv).g,\n    texture(uBlurred,vUv+chromaOffset).b\n  );\n\n  vec3 sharp=texture(uSharp,vUv).rgb;\n  oColor=vec4(mix(sharp,blurred,smoothCoc),1.0);\n}\n",c2,e0,d2,e1,c8,h,f,a1,a3)],g))
h=a3}if(p){B.a.l(b1,new A.lt(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uLut;\nuniform float uLutSize;\nuniform float uStrength;\nout vec4 oColor;\n\n// \xa75.3's \"identity LUT\" baseline resource and this shader's actual grade LUT\n// are both just textures in this same unwrapped-3D-LUT layout (width =\n// size*size, height = size, blue index selects a size*size horizontal\n// slice) \u2014 there is nothing identity-specific about the sampling path\n// itself, only about what a given LUT texture's texels happen to encode.\nvec3 sampleLut(vec3 color){\n  float size=uLutSize;\n  float maxIndex=size-1.0;\n  vec3 scaled=clamp(color,0.0,1.0)*maxIndex;\n  float bLow=floor(scaled.b);\n  float bHigh=min(bLow+1.0,maxIndex);\n  float bFrac=scaled.b-bLow;\n  vec2 texel=vec2(1.0/(size*size),1.0/size);\n  vec2 rg=vec2(scaled.r+0.5,scaled.g+0.5);\n  vec2 uvLow=vec2((bLow*size+rg.x)*texel.x,rg.y*texel.y);\n  vec2 uvHigh=vec2((bHigh*size+rg.x)*texel.x,rg.y*texel.y);\n  vec3 colorLow=texture(uLut,uvLow).rgb;\n  vec3 colorHigh=texture(uLut,uvHigh).rgb;\n  return mix(colorLow,colorHigh,bFrac);\n}\n\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  vec3 graded=sampleLut(scene);\n  oColor=vec4(mix(scene,graded,uStrength),1.0);\n}\n",c2,d4,h,a4))
h=a4}if(o){B.a.l(b1,new A.mb(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform float uQuantizationBits;\nuniform float uDitherStrength;\nout vec4 oColor;\n\nconst float BAYER4X4[16]=float[16](\n  0.0,8.0,2.0,10.0,\n  12.0,4.0,14.0,6.0,\n  3.0,11.0,1.0,9.0,\n  15.0,7.0,13.0,5.0\n);\n\nfloat bayerValue(vec2 fragCoord){\n  int x=int(mod(fragCoord.x,4.0));\n  int y=int(mod(fragCoord.y,4.0));\n  return BAYER4X4[y*4+x]/16.0;\n}\n\n// \xa76.2's \"quantization/dither is an explicit composite after LUT grade\":\n// an ordered (Bayer 4x4) dither offset, scaled to one quantization step, is\n// added before rounding to uQuantizationBits levels per channel \u2014 this is\n// what breaks a hard quantization boundary into a dithered gradient instead\n// of a flat color band. uQuantizationBits==8 (RGBA8's own native precision)\n// with uDitherStrength==0 round-trips the source exactly: no dither offset\n// is added, and floor(x*255+0.5)/255 returns an already-8-bit value\n// unchanged.\nvoid main(){\n  vec3 scene=texture(uScene,vUv).rgb;\n  float levels=pow(2.0,uQuantizationBits)-1.0;\n  float dither=(bayerValue(gl_FragCoord.xy)-0.5)*uDitherStrength/levels;\n  vec3 dithered=clamp(scene+dither,0.0,1.0);\n  vec3 quantized=floor(dithered*levels+0.5)/levels;\n  oColor=vec4(quantized,1.0);\n}\n",c2,h,a5))
h=a5}if(n){B.a.l(b1,new A.mH(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uScene;\nuniform sampler2D uHistory;\nuniform float uTime;\nuniform float uChromaWeight;\nuniform float uTrackingWeight;\nuniform float uNoiseWeight;\nuniform float uHeadSwitchWeight;\nuniform float uDropoutWeight;\nuniform float uGhostWeight;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);\n}\n\n// \xa78.10: "sample the jittered/tracking UV before YIQ/chroma work so later\n// sampling does not overwrite earlier effects" \u2014 tracking jitter is\n// computed and applied to the UV exactly once, up front; every later\n// effect either operates on the resulting single sample or samples a\n// further offset FROM that same jittered UV, never re-reading uScene at\n// the original vUv.\nvoid main(){\n  float scanline=vUv.y;\n\n  // Tracking: a per-scanline horizontal jitter, re-rolled roughly 8 times\n  // a second (not per-frame) so it reads as tape wobble rather than\n  // high-frequency noise. Comfort clamp: 0.02 UV (a few source texels at\n  // this bootstrap\'s 384-wide internal resolution) is the max displacement\n  // regardless of weight \u2014 a weight of 1.0 must read as "visibly glitchy,"\n  // never as "the image is unreadable."\n  float trackingNoise=hash(vec2(floor(scanline*216.0),floor(uTime*8.0)))-0.5;\n  float jitter=trackingNoise*0.02*uTrackingWeight;\n  vec2 uv=vec2(clamp(vUv.x+jitter,0.0,1.0),vUv.y);\n  vec3 raw=texture(uScene,uv).rgb;\n\n  // Chroma bleed: convert to YIQ, sample a second, further-offset UV for\n  // the chroma (I/Q) channels only \u2014 luma (what reads as "sharp" to the\n  // eye) stays exactly where tracking already put it; only color smears.\n  vec2 chromaUv=vec2(clamp(uv.x+0.01*uChromaWeight,0.0,1.0),uv.y);\n  vec3 rawChroma=texture(uScene,chromaUv).rgb;\n  float y=dot(raw,vec3(0.299,0.587,0.114));\n  float i=dot(rawChroma,vec3(0.596,-0.274,-0.322));\n  float q=dot(rawChroma,vec3(0.211,-0.523,0.312));\n  vec3 yiqColor=vec3(\n    y+0.956*i+0.621*q,\n    y-0.272*i-0.647*q,\n    y-1.106*i+1.703*q\n  );\n  vec3 color=mix(raw,yiqColor,uChromaWeight);\n\n  // Static/snow: modeled in YIQ (luma + chroma), the same conversion\n  // chroma bleed already uses above, not independent RGB \u2014 real analog\n  // colour noise comes from the chroma subcarrier, so its hues are\n  // correlated/limited rather than arbitrary per-channel static. Noise\n  // cells are quantized coarser along x than y, giving each speckle a\n  // short horizontal dash instead of an isolated dot \u2014 a "vague line\n  // shape," matching how scanline-based static actually streaks. A\n  // sparser, stronger sparkle layer and a rare single-sample micro-\n  // distortion (an actual tiny position offset, not just colour) are both\n  // gated by a high-threshold mask so only occasional pixels carry the\n  // effect \u2014 small magnitude on top of that sparsity, for a sprinkle, not\n  // a wash.\n  vec2 noiseCell=vec2(floor(gl_FragCoord.x/3.0),gl_FragCoord.y)+uTime*60.0;\n  float noiseY=(hash(noiseCell)-0.5)*0.05;\n  float noiseI=(hash(noiseCell+vec2(17.0,3.0))-0.5)*0.14;\n  float noiseQ=(hash(noiseCell+vec2(53.0,29.0))-0.5)*0.14;\n  vec3 noiseYiq=vec3(\n    noiseY+0.956*noiseI+0.621*noiseQ,\n    noiseY-0.272*noiseI-0.647*noiseQ,\n    noiseY-1.106*noiseI+1.703*noiseQ\n  );\n  color+=noiseYiq*uNoiseWeight;\n  float sparkleMask=step(0.995,hash(noiseCell+vec2(97.0,3.0)));\n  float sparkleI=(hash(noiseCell+5.0)-0.5)*2.0;\n  float sparkleQ=(hash(noiseCell+9.0)-0.5)*2.0;\n  vec3 sparkleYiq=0.5+0.5*vec3(\n    0.956*sparkleI+0.621*sparkleQ,\n    -0.272*sparkleI-0.647*sparkleQ,\n    -1.106*sparkleI+1.703*sparkleQ\n  );\n  color+=sparkleYiq*sparkleMask*0.3*uNoiseWeight;\n  float distortMask=step(0.997,hash(noiseCell+vec2(43.0,61.0)));\n  vec2 distortOffset=\n    vec2(hash(noiseCell+1.0)-0.5,hash(noiseCell+2.0)-0.5)*0.01;\n  vec3 distortColor=texture(uScene,clamp(uv+distortOffset,0.0,1.0)).rgb;\n  color=mix(color,distortColor,distortMask*0.5*uNoiseWeight);\n\n  // Head-switch band: a thin strip near the bottom of frame (where a real\n  // VCR\'s playback head crosses the tape edge) gets a stronger tear,\n  // fading smoothly over the band\'s height rather than a hard cutoff.\n  float headSwitchBand=smoothstep(0.06,0.0,abs(scanline-0.98));\n  float headSwitchJitter=(hash(vec2(uTime*30.0,scanline))-0.5)*0.06;\n  vec2 headSwitchUv=vec2(\n    clamp(uv.x+headSwitchJitter*uHeadSwitchWeight*headSwitchBand,0.0,1.0),\n    uv.y\n  );\n  vec3 headSwitchColor=texture(uScene,headSwitchUv).rgb;\n  color=mix(color,headSwitchColor,uHeadSwitchWeight*headSwitchBand);\n\n  // Dropout: sparse, per-scanline streaks mimicking analog tape dropout.\n  // Real dropout is neither a flat full-width bar nor a fixed brightness \u2014\n  // a per-x noise mask (smoothstepped, not a hard cutoff) makes each\n  // streak\'s width and edges vary along its length, and a per-streak\n  // random intensity keeps consecutive dropouts from looking identical. A\n  // slow ~6Hz reroll (not per-frame) and a high activation threshold keep\n  // this an occasional glitch rather than a strobe \u2014 subtle enough not to\n  // distract during continuous play, even at uDropoutWeight\'s full value.\n  float dropoutCell=floor(uTime*6.0);\n  float dropoutRoll=hash(vec2(floor(scanline*216.0),dropoutCell));\n  float dropoutActive=step(0.994,dropoutRoll);\n  float dropoutIntensity=hash(vec2(dropoutCell,17.0))*0.5+0.4;\n  float dropoutMask=hash(\n    vec2(floor(uv.x*48.0),floor(scanline*216.0)+dropoutCell*3.0)\n  );\n  float dropoutStripe=\n    dropoutActive*uDropoutWeight*smoothstep(0.3,0.9,dropoutMask);\n  color=mix(color,vec3(dropoutIntensity),dropoutStripe*0.8);\n\n  // Ghosting: blends in last frame\'s own VHS *output* (uHistory, never\n  // uScene), horizontally offset, for a trailing double-image echo \u2014\n  // reading the previous frame\'s already-composited result is what makes\n  // this a genuine feedback trail rather than a static double-exposure.\n  vec2 ghostUv=vec2(clamp(uv.x-0.015,0.0,1.0),uv.y);\n  vec3 ghostColor=texture(uHistory,ghostUv).rgb;\n  color=mix(color,ghostColor,uGhostWeight*0.5);\n\n  oColor=vec4(clamp(color,0.0,1.0),1.0);\n}\n',c2,e6,e5,h,a6))
h=a6}j=A.d([new A.l3(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout highp vec2 vUv;\nout highp float vUvW;\n// This prepass must land geometry on exactly the same pixels shadowedWorld\n// will, because its depth is what SSAO occludes against and what\n// shadowedWorld then samples back at its *own* gl_FragCoord. Snapping there\n// and not here would mean the AO texel a fragment reads was computed for a\n// slightly different surface than the one being shaded, and the error grows\n// with the grid. The snap math below is deliberately identical to\n// shadowed_world.vert's, including uVertexSnapGrid==0 skipping the branch.\n// The same reasoning now covers UVs: an alpha-masked surface's holes must\n// land on the same pixels in both passes, and affine sampling moves where a\n// given texel lands, so the w-premultiply below is the same expression\n// shadowed_world.vert uses and is driven from the same per-material weight.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vec4 clip=uViewProjection*model*vec4(aPosition,1.0);\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n}\n","#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nin highp float vUvW;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\nuniform float uAffineWarpStrength;\n// \xa76.2: \"includes opaque + alpha-masked depth.\" A masked surface's holes\n// must not write depth, or SSAO occludes against geometry the world pass\n// discarded and DOF's CoC defocuses against a surface nothing shaded. The\n// compare is bit-identical to shadowed_world.frag's \u2014 same uv recovery,\n// same threshold, same direction \u2014 because any divergence reintroduces\n// exactly the class of bug the vertex-snap parity fix (bug 17) closed.\n// Everything is inside the uAlphaCutoff>0. branch, so an unmasked draw\n// costs no texture fetch at all here, only the interpolation the varyings\n// were already going to do.\nvoid main(){\n  if(uAlphaCutoff>0.){\n    vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n    if(texture(uAlbedo,uv).a<uAlphaCutoff)discard;\n  }\n}\n",d7,d6,c5,f)],g)
if(s)j.push(new A.mt(c1,b3,"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSceneDepth;\nuniform float uNear;\nuniform float uFar;\nuniform float uProjScaleX;\nuniform float uProjScaleY;\nuniform float uRadius;\nuniform float uStrength;\nout vec4 oColor;\n\nconst int KERNEL_SIZE=16;\nconst vec3 KERNEL[16]=vec3[16](\n  vec3( 0.35, 0.23, 0.45),\n  vec3(-0.28, 0.41, 0.32),\n  vec3( 0.18,-0.36, 0.55),\n  vec3(-0.42,-0.19, 0.28),\n  vec3( 0.51, 0.08, 0.18),\n  vec3(-0.11, 0.53, 0.16),\n  vec3( 0.07,-0.48, 0.38),\n  vec3(-0.33,-0.31, 0.48),\n  vec3( 0.22, 0.14, 0.72),\n  vec3(-0.18,-0.25, 0.65),\n  vec3( 0.42,-0.28, 0.35),\n  vec3(-0.36, 0.32, 0.52),\n  vec3( 0.15, 0.58, 0.25),\n  vec3(-0.48, 0.12, 0.39),\n  vec3( 0.28,-0.52, 0.22),\n  vec3(-0.24,-0.42, 0.58)\n);\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\nvec3 viewPosAt(vec2 uv){\n  float viewZ=-linearDepth(texture(uSceneDepth,uv).r);\n  vec2 ndc=uv*2.0-1.0;\n  float viewX=ndc.x*(-viewZ)/uProjScaleX;\n  float viewY=ndc.y*(-viewZ)/uProjScaleY;\n  return vec3(viewX,viewY,viewZ);\n}\n\n// Pinned per-pixel kernel rotation \u2014 a deterministic hash of screen\n// position, not per-frame randomness, matching \xa78.5's \"rotates a small\n// kernel from pinned blue noise\" without the extra machinery of an actual\n// noise texture: the rotation angle is stable across frames for a given\n// pixel, which is what \"pinned\" requires (temporal stability), while still\n// varying spatially enough to break up banding between neighboring samples.\nfloat pinnedRotation(vec2 fragCoord){\n  return fract(sin(dot(fragCoord,vec2(12.9898,78.233)))*43758.5453)*6.2831853;\n}\n\nvoid main(){\n  float rawDepth=texture(uSceneDepth,vUv).r;\n  if(rawDepth>=0.9999){\n    oColor=vec4(1.0);\n    return;\n  }\n  vec3 originView=viewPosAt(vUv);\n  // Screen-space derivatives reconstruct a per-fragment normal from\n  // neighboring depth samples alone \u2014 no G-buffer normal attachment exists\n  // (deferred; see depth_prepass.dart's doc comment), which is sufficient\n  // for a chunky/stylized AO term rather than a precision-critical one.\n  vec3 normalView=normalize(cross(dFdx(originView),dFdy(originView)));\n\n  // Rotates each kernel sample's tangent-plane (x,y) offset in place, before\n  // it's transformed into view space by tbn below \u2014 this is what actually\n  // varies the kernel per pixel; rotating the already-reprojected screen UV\n  // afterward would rotate around the wrong origin and misalign every\n  // sample from the surface it's meant to test.\n  float angle=pinnedRotation(gl_FragCoord.xy);\n  float ca=cos(angle);\n  float sa=sin(angle);\n  mat2 rot=mat2(ca,sa,-sa,ca);\n\n  vec3 up=abs(normalView.z)<0.99?vec3(0.0,0.0,1.0):vec3(1.0,0.0,0.0);\n  vec3 tangent=normalize(cross(up,normalView));\n  vec3 bitangent=cross(normalView,tangent);\n  mat3 tbn=mat3(tangent,bitangent,normalView);\n\n  float occlusion=0.0;\n  for(int i=0;i<KERNEL_SIZE;i++){\n    vec3 kernelSample=KERNEL[i];\n    kernelSample.xy=rot*kernelSample.xy;\n    vec3 samplePos=originView+tbn*kernelSample*uRadius;\n    // Project the sample's view-space position back to screen UV using the\n    // same scale factors used to reconstruct it, inverted.\n    vec2 sampleUv=vec2(\n      samplePos.x*uProjScaleX/(-samplePos.z),\n      samplePos.y*uProjScaleY/(-samplePos.z)\n    );\n    sampleUv=sampleUv*0.5+0.5;\n    if(sampleUv.x<0.0||sampleUv.x>1.0||sampleUv.y<0.0||sampleUv.y>1.0){\n      continue;\n    }\n    vec3 occluderView=viewPosAt(sampleUv);\n    float rangeCheck=smoothstep(0.0,1.0,uRadius/max(abs(originView.z-occluderView.z),0.0001));\n    vec3 toOccluder=occluderView-originView;\n    float angleWeight=max(dot(normalView,normalize(toOccluder)),0.0);\n    float bias=max(0.015,abs(originView.z)*0.001);\n    occlusion+=(occluderView.z>=samplePos.z+bias?1.0:0.0)*rangeCheck*(0.35+0.65*angleWeight);\n  }\n  float ao=1.0-clamp((occlusion/float(KERNEL_SIZE))*uStrength,0.0,1.0);\n  oColor=vec4(vec3(ao),1.0);\n}\n",c2,e1,c8,d))
if(s)j.push(new A.ms(c1,b3,'#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uSsaoRaw;\nuniform sampler2D uSceneDepth;\nuniform vec2 uTexelSize;\nuniform float uNear;\nuniform float uFar;\nout vec4 oColor;\n\nfloat linearDepth(float raw){\n  float ndc=raw*2.0-1.0;\n  return (2.0*uNear*uFar)/(uFar+uNear-ndc*(uFar-uNear));\n}\n\n// \xa78.5: "uses a depth-aware bilateral blur rather than smearing across\n// silhouettes" \u2014 a plain box blur would bleed occlusion from a near object\n// onto a far background behind it (or vice versa) whenever they share\n// screen-space pixels near a silhouette edge; weighting each tap by how\n// close its depth is to the center tap\'s depth is what keeps the blur\n// confined to one surface at a time.\nvoid main(){\n  float rawCenter=texture(uSceneDepth,vUv).r;\n  if(rawCenter>=0.9999){\n    oColor=vec4(1.0);\n    return;\n  }\n  float centerDepth=linearDepth(rawCenter);\n  float sum=0.0;\n  float weightSum=0.0;\n  for(int y=-2;y<=2;y++){\n    for(int x=-2;x<=2;x++){\n      vec2 offset=vec2(float(x),float(y))*uTexelSize;\n      vec2 sampleUv=vUv+offset;\n      float sampleRaw=texture(uSceneDepth,sampleUv).r;\n      if(sampleRaw>=0.9999) continue;\n      float sampleDepth=linearDepth(sampleRaw);\n      float spatialDistSq=float(x*x+y*y);\n      float spatialWeight=exp(-spatialDistSq*0.22);\n      float depthWeight=1.0/(1.0+abs(sampleDepth-centerDepth)*6.0);\n      float totalWeight=spatialWeight*depthWeight;\n      sum+=texture(uSsaoRaw,sampleUv).r*totalWeight;\n      weightSum+=totalWeight;\n    }\n  }\n  float blurred=sum/max(weightSum,0.0001);\n  oColor=vec4(vec3(blurred),1.0);\n}\n',c2,e4,e1,c8,c0,l,d,c))
j.push(new A.mp(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=4) in vec3 aUvMat;\nuniform mat4 uLightViewProjection;\nuniform mat4 uModel;\nuniform mat4 uInstanceModels[16];\nuniform float uUseInstances;\nout highp vec2 vUv;\n// No affine premultiply here, unlike depth_prepass.vert. Affine sampling is\n// an artifact of *this camera's* screen-space rasterization; the shadow map\n// rasterizes the same triangle from the light, where the equivalent warp\n// would be a different, unrelated distortion. A masked surface therefore\n// cuts its shadow from the perspective-correct UVs \u2014 the geometrically\n// right holes \u2014 while the camera passes cut theirs from whatever the PS1\n// profile asked for. That divergence is deliberate: the two rasterizations\n// have no shared screen space to agree in.\nvoid main(){\n  mat4 model=uModel;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];}\n  vUv=aUvMat.xy;\n  gl_Position=uLightViewProjection*model*vec4(aPosition,1.0);\n}\n",'#version 300 es\nprecision highp float;\nin highp vec2 vUv;\nuniform sampler2D uAlbedo;\nuniform float uAlphaCutoff;\n// \xa76.2: "alpha-masked geometry participates in shadow, prepass, and opaque\n// depth-writing routes." Without this discard a lattice, a leaf or a grille\n// casts the solid shadow of its bounding quad \u2014 the single most obvious way\n// a masked material reads as fake. uAlphaCutoff==0 skips the fetch, so\n// every opaque caster costs exactly what it did before this existed.\nvoid main(){\n  if(uAlphaCutoff>0.&&texture(uAlbedo,vUv).a<uAlphaCutoff)discard;\n}\n',d7,d6,c5,c9,b2,b2,new A.yT(b9),e))
j.push(new A.mq(c1,"#version 300 es\nlayout(location=0) in vec3 aPosition;\nlayout(location=1) in vec3 aNormal;\nlayout(location=2) in vec4 aColor;\nlayout(location=3) in float aAlpha;\nlayout(location=4) in vec3 aUvMat;\nlayout(location=5) in vec4 aTangent;\nlayout(location=6) in vec2 aUv1;\nuniform mat4 uViewProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\nuniform mat4 uNormalMatrix;\nuniform mat4 uInstanceModels[16];\nuniform mat4 uInstanceNormalMatrices[16];\nuniform float uUseInstances;\nuniform mat4 uLightViewProjection;\nuniform float uVertexSnapGrid;\nuniform float uAffineWarpStrength;\nout vec4 vColor;\nout vec3 vNormal;\nout highp vec2 vUv;\nout highp float vUvW;\nout highp vec2 vUv1;\nout vec4 vLightSpacePos;\nout vec3 vWorldPos;\nout vec4 vTangent;\nout float vViewDepth;\nvoid main(){\n  mat4 model=uModel;\n  mat4 normalMatrix=uNormalMatrix;\n  if(uUseInstances>0.5){model=uInstanceModels[gl_InstanceID];normalMatrix=uInstanceNormalMatrices[gl_InstanceID];}\n  vColor=vec4(aColor.rgb,aAlpha);\n  vNormal=mat3(normalMatrix)*aNormal;\n  vec4 worldPos=model*vec4(aPosition,1.0);\n  vWorldPos=worldPos.xyz;\n  vTangent=vec4(mat3(normalMatrix)*aTangent.xyz,aTangent.w);\n  vLightSpacePos=uLightViewProjection*worldPos;\n  // RV-09 rung 5's fog: the same \"linear view depth\" convention SSAO/DOF\n  // already reconstruct from a depth texture, computed directly here\n  // instead \u2014 this pass rasterizes the actual geometry, so there is a true\n  // view-space Z per-vertex already, with no texture round-trip needed.\n  vViewDepth=-(uView*worldPos).z;\n  vec4 clip=uViewProjection*worldPos;\n  // RV-09 rung 3's PS1 profile: snaps clip-space xy to a fixed grid before\n  // the perspective divide, emulating the fixed-point vertex transform\n  // precision loss that gives PS1 geometry its characteristic wobble as it\n  // moves. uVertexSnapGrid==0 skips the branch entirely, so the default/\n  // safe path is bit-for-bit unchanged from before this rung.\n  if(uVertexSnapGrid>0.0){\n    vec2 ndc=clip.xy/clip.w;\n    ndc=floor(ndc/uVertexSnapGrid+0.5)*uVertexSnapGrid;\n    clip.xy=ndc*clip.w;\n  }\n  gl_Position=clip;\n  // Affine UV, the PS1 rung's deferred half. GLSL ES 300 has no\n  // `noperspective` qualifier, so the divide the rasterizer already performs\n  // is cancelled instead of disabled: hardware hands the fragment\n  // interp(v/w)/interp(1/w), so premultiplying a varying by w makes that\n  // expression collapse to interp(v) \u2014 screen-space linear, which *is*\n  // affine. Both varyings are scaled by the same factor so the fragment's\n  // vUv/vUvW recovers exactly that, and the intermediate blend between the\n  // two regimes stays continuous rather than popping at any strength.\n  // uAffineWarpStrength==0 gives affineW==1.0 exactly, leaving vUv equal to\n  // aUvMat.xy bit-for-bit; the fragment then skips the divide entirely on\n  // the same uniform, so the perspective-correct path is untouched rather\n  // than merely round-tripped. Snapping above only rewrites clip.xy, never\n  // clip.w, so the two PS1 halves are independent.\n  float affineW=mix(1.0,clip.w,uAffineWarpStrength);\n  vUv=aUvMat.xy*affineW;\n  vUvW=affineW;\n  vUv1=aUv1;\n}\n","#version 300 es\nprecision highp float;\nin vec4 vColor;\nin vec3 vNormal;\nin highp vec2 vUv;\nin highp float vUvW;\nin highp vec2 vUv1;\nin vec4 vLightSpacePos;\nin vec3 vWorldPos;\nin vec4 vTangent;\nin float vViewDepth;\nuniform sampler2D uAlbedo;\nuniform sampler2D uNormalMap;\nuniform sampler2D uOrmMap;\nuniform sampler2D uEmissiveMap;\nuniform sampler2D uLightmap;\nuniform sampler2D uShadowMap;\nuniform vec3 uCameraPosition;\nuniform vec3 uLightPosition;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform float uLightIntensity;\nuniform float uLightRange;\nuniform float uLightInnerCos;\nuniform float uLightOuterCos;\nuniform float uSpotEnabled;\nuniform vec3 uDirectionalDirection;\nuniform vec3 uDirectionalColor;\nuniform float uDirectionalIntensity;\nuniform vec3 uPointPosition0;\nuniform vec3 uPointColor0;\nuniform float uPointIntensity0;\nuniform float uPointRadius0;\nuniform vec3 uPointPosition1;\nuniform vec3 uPointColor1;\nuniform float uPointIntensity1;\nuniform float uPointRadius1;\nuniform vec3 uPointPosition2;\nuniform vec3 uPointColor2;\nuniform float uPointIntensity2;\nuniform float uPointRadius2;\nuniform vec3 uPointPosition3;\nuniform vec3 uPointColor3;\nuniform float uPointIntensity3;\nuniform float uPointRadius3;\nuniform vec3 uDirectSpotPosition0;\nuniform vec3 uDirectSpotDirection0;\nuniform vec3 uDirectSpotColor0;\nuniform float uDirectSpotIntensity0;\nuniform float uDirectSpotRange0;\nuniform float uDirectSpotInnerCos0;\nuniform float uDirectSpotOuterCos0;\nuniform float uDirectSpotEnabled0;\nuniform vec3 uDirectSpotPosition1;\nuniform vec3 uDirectSpotDirection1;\nuniform vec3 uDirectSpotColor1;\nuniform float uDirectSpotIntensity1;\nuniform float uDirectSpotRange1;\nuniform float uDirectSpotInnerCos1;\nuniform float uDirectSpotOuterCos1;\nuniform float uDirectSpotEnabled1;\nuniform vec3 uDirectSpotPosition2;\nuniform vec3 uDirectSpotDirection2;\nuniform vec3 uDirectSpotColor2;\nuniform float uDirectSpotIntensity2;\nuniform float uDirectSpotRange2;\nuniform float uDirectSpotInnerCos2;\nuniform float uDirectSpotOuterCos2;\nuniform float uDirectSpotEnabled2;\nuniform vec3 uAmbientColor;\nuniform float uAmbientIntensity;\nuniform float uAmbientLightScale;\nuniform float uDirectLightScale;\nuniform vec3 uReflectionColor;\nuniform float uReflectionIntensity;\nuniform float uReflectionConfidence;\nuniform vec2 uShadowMapTexelSize;\nuniform float uShadowFilterRadius;\nuniform float uShadowBias;\nuniform vec3 uMaterialTint;\nuniform vec4 uUvScaleOffset;\nuniform sampler2D uSsao;\nuniform vec2 uSceneColorSize;\nuniform float uEmissiveStrength;\nuniform float uNormalStrength;\nuniform float uRoughness;\nuniform float uMetallic;\nuniform float uSpecularScale;\nuniform float uOcclusionStrength;\nuniform float uClearcoatStrength;\nuniform float uClearcoatRoughness;\nuniform float uLightmapIntensity;\nuniform float uAffineWarpStrength;\nuniform float uAlphaCutoff;\nuniform float uOpaqueCoverage;\nuniform vec3 uFogColor;\nuniform float uFogStart;\nuniform float uFogEnd;\nuniform float uFogHeightFalloff;\nuniform float uFogDensity;\nuniform float uReceivesShadow;\nuniform float uRainWetness;\nuniform float uSurfaceSnowCoverage;\nuniform float uSurfaceDissolution;\nuniform float uThermalSourceCount;\nuniform vec3 uThermalSourcePosition0;\nuniform float uThermalSourceRadius0;\nuniform float uThermalSourceDissolution0;\nuniform vec3 uThermalSourcePosition1;\nuniform float uThermalSourceRadius1;\nuniform float uThermalSourceDissolution1;\nuniform vec3 uThermalSourcePosition2;\nuniform float uThermalSourceRadius2;\nuniform float uThermalSourceDissolution2;\nuniform vec3 uThermalSourcePosition3;\nuniform float uThermalSourceRadius3;\nuniform float uThermalSourceDissolution3;\nlayout(location=0)out vec4 oColor;\nlayout(location=1)out vec4 oGlow;\n\n// Distance falloff (smooth to zero at uLightRange, matching SpotLight.range\n// rather than an unbounded inverse-square that never reaches zero) times\n// cone-edge falloff (smoothstep between the outer and inner cone angles,\n  // SpotLight.outerConeRadians/innerConeRadians \u2014 both fields existed on the\n  // API already but nothing read them before this, so the light previously\n  // had a hard-edged, non-attenuating cone that read as flat/harsh instead of\n// a graduated pool of light).\nfloat rangeAttenuation(float dist,float range){\n  float normalized=clamp(dist/max(range,.001),0.,1.);\n  // Smooth quartic cutoff avoids a visible ring at the authored range while\n  // retaining an inverse-square response inside the light's influence.\n  float cutoff=1.-normalized*normalized*normalized*normalized;\n  float inverseSquare=1./(1.+(dist*dist)/max(range*range,.001));\n  return cutoff*cutoff*inverseSquare;\n}\n\nfloat lightAttenuation(vec3 worldPos){\n  vec3 toFrag=worldPos-uLightPosition;\n  float dist=length(toFrag);\n  float cosAngle=dot(normalize(toFrag),normalize(uLightDirection));\n  float coneFalloff=smoothstep(uLightOuterCos,uLightInnerCos,cosAngle);\n  return rangeAttenuation(dist,uLightRange)*coneFalloff;\n}\n\nfloat pointAttenuation(vec3 worldPos,vec3 lightPosition,float lightRadius){\n  float dist=length(lightPosition-worldPos);\n  return rangeAttenuation(dist,lightRadius);\n}\n\nvec3 pointContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightColor,float lightIntensity,float lightRadius){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  return lightColor*lightIntensity*ndotl*\n    pointAttenuation(worldPos,lightPosition,lightRadius);\n}\n\nfloat directSpotAttenuation(vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,float lightRange,float innerCos,float outerCos,float enabled){\n  vec3 toFrag=worldPos-lightPosition;\n  float cosAngle=dot(normalize(toFrag),normalize(lightDirection));\n  float coneFalloff=smoothstep(outerCos,innerCos,cosAngle);\n  float distanceFalloff=rangeAttenuation(length(toFrag),lightRange);\n  return coneFalloff*distanceFalloff*enabled;\n}\n\nvec3 directSpotContribution(vec3 normal,vec3 worldPos,vec3 lightPosition,\n  vec3 lightDirection,vec3 lightColor,float lightIntensity,float lightRange,\n  float innerCos,float outerCos,float enabled){\n  vec3 toLight=lightPosition-worldPos;\n  float ndotl=max(dot(normal,normalize(toLight)),0.);\n  float atten=directSpotAttenuation(worldPos,lightPosition,lightDirection,\n    lightRange,innerCos,outerCos,enabled);\n  return lightColor*lightIntensity*ndotl*atten;\n}\n\n// Compact Cook-Torrance response for the clean/high path. The bounded\n// per-light evaluation makes roughness and metallic maps visibly useful\n// without introducing a deferred light buffer.\nfloat distributionGgx(float ndoth,float roughness){\n  float a=roughness*roughness;\n  float a2=a*a;\n  float denom=ndoth*ndoth*(a2-1.0)+1.0;\n  return a2/(3.14159265*denom*denom);\n}\n\n// Disney/Burley energy-conserving diffuse retro-reflection model\nfloat diffuseBurley(float ndotl,float ndotv,float lndoth,float roughness){\n  float fd90=0.5+2.0*roughness*lndoth*lndoth;\n  float lightScatter=1.0+(fd90-1.0)*pow(clamp(1.0-ndotl,0.0,1.0),5.0);\n  float viewScatter=1.0+(fd90-1.0)*pow(clamp(1.0-ndotv,0.0,1.0),5.0);\n  return lightScatter*viewScatter;\n}\n\nfloat geometrySchlick(float ndotv,float roughness){\n  float k=(roughness+1.0)*(roughness+1.0)/8.0;\n  return ndotv/(ndotv*(1.0-k)+k);\n}\n\nfloat geometrySmith(float ndotv,float ndotl,float roughness){\n  return geometrySchlick(ndotv,roughness)*geometrySchlick(ndotl,roughness);\n}\n\nvec3 fresnelSchlick(float cosTheta,vec3 f0){\n  return f0+(1.0-f0)*pow(1.0-clamp(cosTheta,0.0,1.0),5.0);\n}\n\nvec3 fresnelSchlickRoughness(float cosTheta,vec3 f0,float roughness){\n  return f0+(max(vec3(1.0-roughness),f0)-f0)*pow(clamp(1.0-cosTheta,0.0,1.0),5.0);\n}\n\nvec3 specularContribution(vec3 normal,vec3 viewDir,vec3 lightDir,\n  vec3 lightColor,float lightIntensity,float attenuation,vec3 baseColor,\n  float roughness,float metallic){\n  vec3 halfDir=normalize(viewDir+lightDir);\n  float ndotv=max(dot(normal,viewDir),0.0);\n  float ndotl=max(dot(normal,lightDir),0.0);\n  float ndoth=max(dot(normal,halfDir),0.0);\n  float hdotv=max(dot(halfDir,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metallic);\n  vec3 fresnel=fresnelSchlickRoughness(hdotv,f0,roughness);\n  float distribution=distributionGgx(ndoth,roughness);\n  float geometry=geometrySmith(ndotv,ndotl,roughness);\n  vec3 numerator=distribution*geometry*fresnel;\n  float denominator=max(4.0*ndotv*ndotl,0.001);\n  return numerator/denominator*lightColor*lightIntensity*attenuation*ndotl;\n}\n\nfloat sampleShadow(vec3 projCoord,float bias){\n  float shadowDepth=texture(uShadowMap,projCoord.xy).r;\n  return projCoord.z-bias>shadowDepth?0.:1.;\n}\n\n// \xa78.5's fog keeps the smooth distance ramp for authored horizon control, but\n// the participating-medium term is an analytic optical depth along the actual\n// camera-to-surface segment. For rho(y)=density*exp(-falloff*max(y,0)), the\n// integral has a stable constant-height limit and therefore does not shimmer\n// when a surface is nearly level with the camera. Zero density remains an\n// exact no-op; the host can still use the distance ramp independently.\nfloat heightFogOpticalDepth(vec3 rayStart,vec3 rayEnd){\n  float segmentLength=length(rayEnd-rayStart);\n  if(segmentLength<=0.0001||uFogDensity<=0.)return 0.;\n  float falloff=max(uFogHeightFalloff,0.);\n  float h0=max(rayStart.y,0.);\n  float h1=max(rayEnd.y,0.);\n  float integral;\n  if(falloff<=0.||abs(h1-h0)<=0.0001){\n    integral=segmentLength*exp(-falloff*h0);\n  }else{\n    float denominator=falloff*(h1-h0);\n    integral=segmentLength*(exp(-falloff*h0)-exp(-falloff*h1))/denominator;\n  }\n  return max(uFogDensity*integral,0.);\n}\n\nfloat fogFactor(float viewDepth,float worldY){\n  float distFactor=(uFogEnd>uFogStart&&uFogEnd>1.0)?smoothstep(uFogStart,uFogEnd,viewDepth):0.0;\n  float opticalDepth=heightFogOpticalDepth(uCameraPosition,vWorldPos);\n  float mediumFactor=1.-exp(-opticalDepth);\n  return clamp(max(distFactor,mediumFactor),0.,1.);\n}\n\nconst vec2 VOGEL_16[16]=vec2[16](\n  vec2( 0.1768,  0.0000),\n  vec2(-0.2263,  0.2064),\n  vec2( 0.0346, -0.3938),\n  vec2( 0.2809,  0.3739),\n  vec2(-0.5186, -0.1111),\n  vec2( 0.4907, -0.3224),\n  vec2(-0.1724,  0.6137),\n  vec2(-0.2642, -0.6316),\n  vec2( 0.6186,  0.3860),\n  vec2(-0.6698,  0.3824),\n  vec2( 0.3479, -0.7314),\n  vec2( 0.1770,  0.8291),\n  vec2(-0.6558, -0.5927),\n  vec2( 0.8719,  0.2891),\n  vec2(-0.7099,  0.6348),\n  vec2( 0.1983, -0.9641)\n);\n\nfloat shadowFactor(float ndotl){\n  vec3 projCoord=vLightSpacePos.xyz/vLightSpacePos.w;\n  projCoord=projCoord*.5+.5;\n  if(projCoord.x<0.||projCoord.x>1.||projCoord.y<0.||projCoord.y>1.||projCoord.z>1.){\n    return 1.;\n  }\n  // Receiver-plane style slope bias keeps grazing surfaces from acne while\n  // avoiding the detached-shadow look of a large constant offset.\n  float bias=max(uShadowBias*(1.-ndotl),uShadowBias*0.2666667);\n  // 16-tap Vogel spiral with golden ratio rotation produces silky smooth\n  // penumbras free of regular lattice banding or directional noise.\n  vec2 t=uShadowMapTexelSize*clamp(uShadowFilterRadius,0.,3.);\n  // Adaptive contact-hardening: estimate blocker proximity to sharpen contact shadows\n  float blockerSum=0.0;\n  float blockerCount=0.0;\n  for(int b=0;b<4;b++){\n    float depthSample=texture(uShadowMap,projCoord.xy+VOGEL_16[b*4]*t*1.5).r;\n    if(depthSample<projCoord.z-bias){\n      blockerSum+=depthSample;\n      blockerCount+=1.0;\n    }\n  }\n  float penumbraScale=1.0;\n  if(blockerCount>0.0){\n    float avgBlockerDepth=blockerSum/blockerCount;\n    float penumbraRatio=clamp((projCoord.z-avgBlockerDepth)/max(projCoord.z,0.0001),0.0,1.0);\n    penumbraScale=mix(0.38,1.0,smoothstep(0.0002,0.012,penumbraRatio));\n  }\n  vec2 filterRadius=t*penumbraScale;\n  float sum=0.;\n  for(int i=0;i<16;i++){\n    sum+=sampleShadow(projCoord+vec3(VOGEL_16[i]*filterRadius,0.),bias);\n  }\n  return sum/16.;\n}\n\nvoid main(){\n  // The divide that undoes the rasterizer's own perspective correction (see\n  // shadowed_world.vert). Branched on the uniform rather than always\n  // dividing, so a zero-strength draw samples the untouched vUv and is\n  // bit-identical to the pre-affine path \u2014 the divisor is 1.0 there, but\n  // only after an interpolate/divide round-trip that need not return\n  // exactly 1.0. The branch is uniform across the whole draw, so it costs\n  // no divergence.\n  vec2 uv=uAffineWarpStrength>0.?vUv/vUvW:vUv;\n  uv=uv*uUvScaleOffset.xy+uUvScaleOffset.zw;\n  vec4 tex=texture(uAlbedo,uv);\n  // fragment must not pay for four shadow-map taps and two normalizes it\n  // will never use. uAlphaCutoff==0 is the pass's \"this material has no\n  // cutout\" sentinel (MaterialDefinition.validate forbids a real zero), so\n  // opaque and blended draws take a path containing no alpha compare at\n  // all rather than one comparing against an unreachable threshold. The\n  // same test, against the same uv, runs in depth_prepass.frag and\n  // shadow_caster.frag \u2014 three passes must agree on which fragments exist\n  // or SSAO, DOF and shadowing all occlude against holes this pass shaded\n  // through.\n  if(uAlphaCutoff>0.&&tex.a<uAlphaCutoff)discard;\n  vec3 n=normalize(vNormal);\n  // Surface-v2 supplies a tangent4 with OpenGL's +/-1 handedness in W.\n  // Compatibility14 meshes leave the attribute at its default zero and use\n  // the derivative frame below, so old content and authored tangents share\n  // one shader contract.\n  if(uNormalStrength>0.0){\n    vec3 dp1=dFdx(vWorldPos),dp2=dFdy(vWorldPos);\n    vec2 duv1=dFdx(uv),duv2=dFdy(uv);\n    vec3 derivativeT=normalize(dp1*duv2.y-dp2*duv1.y);\n    vec3 derivativeB=normalize(-dp1*duv2.x+dp2*duv1.x);\n    vec3 authoredT=normalize(vTangent.xyz-n*dot(n,vTangent.xyz));\n    bool hasAuthoredT=dot(vTangent.xyz,vTangent.xyz)>0.25;\n    vec3 t=hasAuthoredT?authoredT:derivativeT;\n    vec3 b=hasAuthoredT?normalize(cross(n,t)*vTangent.w):derivativeB;\n    vec3 map=texture(uNormalMap,uv).xyz*2.0-1.0;\n    map.xy*=uNormalStrength;\n    n=normalize(mat3(t,b,n)*normalize(map));\n  }\n  vec3 orm=texture(uOrmMap,uv).rgb;\n  float normalVariance=0.0;\n  if(uNormalStrength>0.0){\n    // Toksvig-style widening suppresses sub-pixel normal sparkle when a high\n    // resolution map is minified. It preserves authored relief at distance\n    // while converting unresolved detail into a stable roughness increase.\n    vec3 normalSample=texture(uNormalMap,uv).xyz*2.0-1.0;\n    vec3 normalDx=dFdx(normalSample);\n    vec3 normalDy=dFdy(normalSample);\n    normalVariance=dot(normalDx,normalDx)+dot(normalDy,normalDy);\n  }\n  float ao=texture(uSsao,gl_FragCoord.xy/uSceneColorSize).r;\n  ao*=mix(1.0,orm.r,clamp(uOcclusionStrength,0.0,1.0));\n  vec3 direct=vec3(0.);\n  float directionalNdotL=max(dot(n,normalize(uDirectionalDirection)),0.);\n  direct+=uDirectionalColor*uDirectionalIntensity*directionalNdotL;\n  direct+=pointContribution(n,vWorldPos,uPointPosition0,uPointColor0,\n    uPointIntensity0,uPointRadius0);\n  direct+=pointContribution(n,vWorldPos,uPointPosition1,uPointColor1,\n    uPointIntensity1,uPointRadius1);\n  direct+=pointContribution(n,vWorldPos,uPointPosition2,uPointColor2,\n    uPointIntensity2,uPointRadius2);\n  direct+=pointContribution(n,vWorldPos,uPointPosition3,uPointColor3,\n    uPointIntensity3,uPointRadius3);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotColor0,uDirectSpotIntensity0,\n    uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotColor1,uDirectSpotIntensity1,\n    uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  direct+=directSpotContribution(n,vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotColor2,uDirectSpotIntensity2,\n    uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  vec3 toSpot=normalize(uLightPosition-vWorldPos);\n  float spotNdotL=max(dot(n,toSpot),0.);\n  float shadow=uReceivesShadow>0.5?shadowFactor(spotNdotL):1.;\n  float attenuation=lightAttenuation(vWorldPos);\n  direct+=uLightColor*uLightIntensity*spotNdotL*shadow*attenuation*uSpotEnabled;\n  direct*=uDirectLightScale;\n  // \xa78.5: \"modulates ambient only\" \u2014 SSAO must never darken the direct\n  // (N.L * shadow * attenuation) term, only the ambient fill, or it would\n  // double up with real shadowing and read as an incorrect global darkening\n  // rather than contact occlusion specifically.\n  float upward=clamp(n.y*0.5+0.5,0.0,1.0);\n  vec3 ambient=uAmbientColor*uAmbientIntensity*uAmbientLightScale*ao*mix(0.85,1.15,upward);\n  vec3 baseColor=vColor.rgb*tex.rgb*uMaterialTint;\n  // Metallic surfaces contribute less diffuse energy; roughness keeps a\n  // small, stable broadening factor until the surface-v2 camera/specular\n  // block lands. Both channels therefore affect the live output rather than\n  // being metadata-only fields.\n  float metal=clamp(uMetallic*orm.b,0.0,1.0);\n  float rough=clamp(uRoughness*orm.g,0.0,1.0);\n  // Weather changes the material before direct and environment response.\n  // Thawing therefore affects the same specular lobe the viewer sees,\n  // instead of changing only diffuse color after the highlight is computed.\n  float wetDepth=1.0-smoothstep(2.0,18.0,max(vViewDepth,0.0));\n  float wetness=clamp(uRainWetness,0.0,1.0)*wetDepth;\n  baseColor=mix(baseColor,baseColor*vec3(0.84,0.90,0.98),wetness*0.22);\n  float thermalDissolution=clamp(uSurfaceDissolution,0.0,1.0);\n  // A steady spherical conductive field decays approximately as 1/r. The\n  // host keeps the slow latent material memory in uSurfaceDissolution; this\n  // local term therefore models the spatial heat field without making warm\n  // surfaces snap back or disappear at an arbitrary exponential radius.\n  if(uThermalSourceCount>0.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution0*clamp(uThermalSourceRadius0/\n      max(distance(vWorldPos,uThermalSourcePosition0),uThermalSourceRadius0),0.,1.));\n  if(uThermalSourceCount>1.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution1*clamp(uThermalSourceRadius1/\n      max(distance(vWorldPos,uThermalSourcePosition1),uThermalSourceRadius1),0.,1.));\n  if(uThermalSourceCount>2.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution2*clamp(uThermalSourceRadius2/\n      max(distance(vWorldPos,uThermalSourcePosition2),uThermalSourceRadius2),0.,1.));\n  if(uThermalSourceCount>3.5) thermalDissolution=max(thermalDissolution,\n    uThermalSourceDissolution3*clamp(uThermalSourceRadius3/\n      max(distance(vWorldPos,uThermalSourcePosition3),uThermalSourceRadius3),0.,1.));\n  thermalDissolution=clamp(thermalDissolution,0.0,1.0);\n  float snowCoverage=clamp(uSurfaceSnowCoverage,0.0,1.0)*\n    smoothstep(0.18,0.82,upward)*(1.0-thermalDissolution*0.72);\n  baseColor=mix(baseColor,vec3(0.78,0.86,0.95),snowCoverage*0.82);\n  float dissolution=thermalDissolution;\n  baseColor=mix(baseColor,baseColor*vec3(0.82,0.86,0.90),dissolution*0.16);\n  rough=mix(rough,max(0.06,rough*0.58),dissolution*0.72);\n  // Avoid singular highlights while retaining a visibly sharp porcelain\n  // response at the authored low end of the roughness range.\n  float specRough=max(0.045,sqrt(rough*rough+normalVariance*0.18));\n  // A continuous water film forms a second dielectric lobe. It smooths the\n  // authored surface only as coverage rises, so damp cloth stays diffuse\n  // while puddled stone gains a tight grazing reflection.\n  float waterCoverage=smoothstep(0.20,0.88,wetness)*(1.0-0.35*rough);\n  specRough=mix(specRough,max(0.035,specRough*0.18),waterCoverage);\n  vec3 viewDir=normalize(uCameraPosition-vWorldPos);\n  vec3 specular=vec3(0.0);\n  specular+=specularContribution(n,viewDir,normalize(uDirectionalDirection),\n    uDirectionalColor,uDirectionalIntensity,1.0,baseColor,specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition0-vWorldPos),uPointColor0,uPointIntensity0,\n    pointAttenuation(vWorldPos,uPointPosition0,uPointRadius0),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition1-vWorldPos),uPointColor1,uPointIntensity1,\n    pointAttenuation(vWorldPos,uPointPosition1,uPointRadius1),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition2-vWorldPos),uPointColor2,uPointIntensity2,\n    pointAttenuation(vWorldPos,uPointPosition2,uPointRadius2),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uPointPosition3-vWorldPos),uPointColor3,uPointIntensity3,\n    pointAttenuation(vWorldPos,uPointPosition3,uPointRadius3),baseColor,\n    specRough,metal);\n  specular+=specularContribution(n,viewDir,\n    normalize(uLightPosition-vWorldPos),uLightColor,uLightIntensity,\n    lightAttenuation(vWorldPos)*uSpotEnabled*shadow,baseColor,specRough,metal);\n  float spotAtten0=directSpotAttenuation(vWorldPos,uDirectSpotPosition0,\n    uDirectSpotDirection0,uDirectSpotRange0,uDirectSpotInnerCos0,uDirectSpotOuterCos0,\n    uDirectSpotEnabled0);\n  if(spotAtten0>0.001){\n    specular+=specularContribution(n,viewDir,normalize(uDirectSpotPosition0-vWorldPos),\n      uDirectSpotColor0,uDirectSpotIntensity0,spotAtten0,baseColor,specRough,metal);\n  }\n  float spotAtten1=directSpotAttenuation(vWorldPos,uDirectSpotPosition1,\n    uDirectSpotDirection1,uDirectSpotRange1,uDirectSpotInnerCos1,uDirectSpotOuterCos1,\n    uDirectSpotEnabled1);\n  if(spotAtten1>0.001){\n    specular+=specularContribution(n,viewDir,normalize(uDirectSpotPosition1-vWorldPos),\n      uDirectSpotColor1,uDirectSpotIntensity1,spotAtten1,baseColor,specRough,metal);\n  }\n  float spotAtten2=directSpotAttenuation(vWorldPos,uDirectSpotPosition2,\n    uDirectSpotDirection2,uDirectSpotRange2,uDirectSpotInnerCos2,uDirectSpotOuterCos2,\n    uDirectSpotEnabled2);\n  if(spotAtten2>0.001){\n    specular+=specularContribution(n,viewDir,normalize(uDirectSpotPosition2-vWorldPos),\n      uDirectSpotColor2,uDirectSpotIntensity2,spotAtten2,baseColor,specRough,metal);\n  }\n  specular*=uDirectLightScale*uSpecularScale;\n  // Keep reflected energy available to the specular lobe. The previous\n  // diffuse-first clamp clipped bright ceramic response before tone mapping,\n  // producing the broad plastic patches visible in low-roughness samples.\n  // This split is bounded by the material metalness and lets the final\n  // composite perform the intentional HDR compression once.\n  vec3 diffuseEnergy=baseColor*(1.0-metal)*\n    (ambient+direct*(1.0-0.25*rough));\n  vec3 lit=diffuseEnergy+specular;\n  // A restrained dielectric clearcoat is intentionally separate from the\n  // base roughness/metalness response. It gives porcelain a broad, stable\n  // grazing highlight without turning the surface into a mirror.\n  vec3 coatLight=normalize(uDirectionalDirection);\n  vec3 coatHalf=normalize(viewDir+coatLight);\n  float coatNdotV=max(dot(n,viewDir),0.);\n  float coatNdotH=max(dot(n,coatHalf),0.);\n  float coatNdotL=max(dot(n,coatLight),0.);\n  float coatPower=mix(128.0,8.0,clamp(uClearcoatRoughness,0.0,1.0));\n  float coatFresnel=0.04+0.96*pow(1.0-coatNdotV,5.0);\n  float coatStrength=max(clamp(uClearcoatStrength,0.0,1.0),waterCoverage*0.82);\n  float coat=coatStrength*coatFresnel*\n    pow(coatNdotH,coatPower)*coatNdotL*uDirectionalIntensity*\n    uDirectLightScale*uSpecularScale;\n  lit+=uDirectionalColor*coat;\n  lit+=direct*(wetness*(0.035+0.075*(1.0-rough)));\n  // Environment fallback reflections are deliberately bounded and weighted\n  // by wetness/grazing angle. A real probe/history hit can raise confidence;\n  // the current host fallback remains visible but never masquerades as SSR.\n  float reflectionNdotV=max(dot(n,viewDir),0.0);\n  vec3 f0=mix(vec3(0.04),baseColor,metal);\n  vec3 envFresnel=f0+(max(vec3(1.0-specRough),f0)-f0)*pow(clamp(1.0-reflectionNdotV,0.0,1.0),5.0);\n  float envGloss=(1.0-specRough)*(1.0-specRough);\n  float reflectionSurface=clamp(metal*0.85+(1.0-metal)*(wetness+0.18*dissolution+envGloss*0.25),0.0,1.0);\n  float reflectionConfidence=0.20+0.80*clamp(uReflectionConfidence,0.0,1.0);\n  float reflectionWeight=clamp(\n    uReflectionIntensity*reflectionSurface*\n      (1.0-0.72*rough)*reflectionConfidence,\n    0.0,1.0);\n  vec3 reflectDir=reflect(-viewDir,n);\n  float refUp=clamp(reflectDir.y*0.5+0.5,0.0,1.0);\n  vec3 envRadiance=mix(uAmbientColor*0.35,mix(uAmbientColor,uReflectionColor,refUp),refUp);\n  vec3 sunReflectDir=normalize(uDirectionalDirection);\n  float sunRdotL=max(dot(reflectDir,sunReflectDir),0.0);\n  envRadiance+=uDirectionalColor*pow(sunRdotL,mix(32.0,4.0,specRough))*(1.0-specRough)*0.4;\n  lit+=envRadiance*envFresnel*reflectionWeight*ao;\n  float backScatter=max(dot(-viewDir,normalize(uDirectionalDirection)),0.0);\n  vec3 subsurface=baseColor*uDirectionalColor*(pow(backScatter,4.0)*(1.0-metal)*0.12*uDirectionalIntensity);\n  lit+=subsurface;\n  vec3 emissive=texture(uEmissiveMap,uv).rgb*uMaterialTint*uEmissiveStrength;\n  lit+=emissive;\n  if(uLightmapIntensity>0.0){\n    lit+=baseColor*texture(uLightmap,vUv1).rgb*uLightmapIntensity;\n  }\n  // Fog blends the surface's own lit color toward uFogColor only \u2014 never\n  // oGlow below, which stays a declared emissive quantity independent of\n  // how much atmosphere sits between the surface and the camera, matching\n  // \xa78.7's \"does not infer glow from final luma\" scoping: fog is a\n  // property of oColor's reflected/lit light, not of emission.\n  float fog=fogFactor(vViewDepth,vWorldPos.y);\n  vec3 foggedLit=mix(lit,uFogColor,fog);\n  // Bug 18: vColor.a*tex.a is the correct alpha for a blended draw and the\n  // wrong one for everything else. present.frag copies this channel\n  // straight through to a canvas created with the default alpha:true, so an\n  // opaque or masked surface that emitted a texel's own alpha would show\n  // the *page* through solid geometry. Coverage, not transparency, is what\n  // an opaque or masked fragment writes: whatever survived the discard\n  // above is fully covering, and an opaque draw always was. uOpaqueCoverage\n  // is exactly 0 or 1, so the mix is exact in both directions and the\n  // blended path keeps its pre-existing expression bit-for-bit.\n  float outAlpha=mix(vColor.a*tex.a,1.,uOpaqueCoverage);\n  oColor=vec4(foggedLit,outAlpha);\n  // \xa78.7: bloom reads this declared attachment directly, never inferring\n  // glow from oColor's final luma \u2014 a bright-but-non-emissive lit surface\n  // (e.g. the checkerboard floor under strong light) must never bloom, only\n  // a material with real emissiveStrength does, independent of how the\n  // surface happens to be lit this frame.\n  oGlow=vec4(emissive,1.);\n}\n",d7,d6,c5,d8,d9,d3,d5,e2,new A.yU(b9,a8),c9,d0,e3,s,e9,e8,f0,f0,e,c,k))
if(a7!=null)j.push(a7)
if(b0!=null)j.push(b0)
B.a.K(j,b1)
j.push(new A.j4(c1,b3,u.E,c2,h,c3))
return new A.lf(j)},
yT:function yT(a){this.a=a},
yU:function yU(a,b){this.a=a
this.b=b},
mq:function mq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
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
nt:function nt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
mt:function mt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.w=g},
nw:function nw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ms:function ms(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
nv:function nv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
mH:function mH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
nE:function nE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mQ:function mQ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
nG:function nG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nF:function nF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mU:function mU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nJ:function nJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pt:function pt(){},
mo(a,b){return new A.jl(a,b)},
lr:function lr(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
ls:function ls(a,b,c,d,e,f,g,h){var _=this
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
iE:function iE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iD:function iD(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
q:function q(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
l4:function l4(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=!1},
qy:function qy(){},
qz:function qz(){},
hW:function hW(a,b){this.a=a
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
BH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.hl(l,k,m,b,d,a,c,i,j,!0,!1,!0,!0,!0,!0,!1)},
kM:function kM(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
l_:function l_(a,b){this.a=a
this.b=b},
l2:function l2(a,b){this.a=a
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
bz:function bz(a,b){this.a=a
this.b=b},
wg:function wg(){this.a=null},
HI(a){var s=new A.mS(a,B.j,new A.wg(),A.HS(a))
s.ks(a)
return s},
HS(a){var s,r,q=t.r9.a(a.getSupportedExtensions())
if(q==null)return A.a1(t.N)
s=A.a1(t.N)
r=J.P(t.a.b(q)?q:new A.bf(q,A.C(q).i("bf<1,f>")))
while(r.m())s.l(0,r.gp())
return s},
bM(a,b){var s,r
if(a.b!==B.j)A.h(A.i(u.k))
if(b==null){s=a.a
s.bindFramebuffer(A.j(v.G.WebGL2RenderingContext.FRAMEBUFFER),null)
s.viewport(0,0,A.j(s.drawingBufferWidth),A.j(s.drawingBufferHeight))
return}r=t.iX.a(b.a)
s=a.a
s.bindFramebuffer(A.j(v.G.WebGL2RenderingContext.FRAMEBUFFER),r.a)
s.viewport(0,0,r.w,r.x)},
CR(a,b){var s
if(a.b!==B.j)A.h(A.i(u.k))
switch(b){case 1:a.a.drawBuffers(A.d([A.j(v.G.WebGL2RenderingContext.COLOR_ATTACHMENT0)],t.n))
break
case 2:s=v.G
a.a.drawBuffers(A.d([A.j(s.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(s.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
break
default:throw A.b(A.p("WebGl2Device.setColorAttachmentCount: count must be 1 or 2, got "+b,null))}},
HN(a,b,c){var s,r,q,p
if(a.b!==B.j)A.h(A.i(u.k))
s=t.iX.a(c.a)
r=a.a
q=v.G
r.activeTexture(A.j(q.WebGL2RenderingContext.TEXTURE0)+b)
p=s.f
if(p!=null){r.bindTexture(A.j(q.WebGL2RenderingContext.TEXTURE_2D),p)
return}throw A.b(A.i("WebGl2Device.bindGlowTexture: target has no glow attachment \u2014 create it with GpuTargetAttachment.colorAndGlow/colorDepthGlow, and resolve a multisampled source before sampling (single-sample only)"))},
HM(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.LESS)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.LEQUAL)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.ALWAYS)
break
case 3:s=A.j(v.G.WebGL2RenderingContext.NEVER)
break
default:s=null}return s},
HL(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.FRONT)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.BACK)
break
default:s=null}return s},
CQ(a,b){var s
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
HJ(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.FUNC_ADD)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.FUNC_SUBTRACT)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT)
break
default:s=null}return s},
bj(a,b){var s,r,q,p
if(a.b!==B.j)A.h(A.i(u.k))
s=a.f
r=s.nN(b)
if(r.a===0)return
if(r.q(0,B.cd)){q=v.G
p=a.a
if(b.a)p.enable(A.j(q.WebGL2RenderingContext.DEPTH_TEST))
else p.disable(A.j(q.WebGL2RenderingContext.DEPTH_TEST))}if(r.q(0,B.ce))a.a.depthFunc(A.HM(a,b.b))
if(r.q(0,B.cf))a.a.depthMask(b.c)
if(r.q(0,B.cj)){q=v.G
p=a.a
if(b.w)p.enable(A.j(q.WebGL2RenderingContext.CULL_FACE))
else p.disable(A.j(q.WebGL2RenderingContext.CULL_FACE))}if(r.q(0,B.ck))a.a.cullFace(A.HL(a,b.x))
if(r.q(0,B.ex)){q=v.G.WebGL2RenderingContext
q=A.j(q.CCW)
a.a.frontFace(q)}if(r.q(0,B.cg)){q=v.G
p=a.a
if(b.d)p.enable(A.j(q.WebGL2RenderingContext.BLEND))
else p.disable(A.j(q.WebGL2RenderingContext.BLEND))}if(r.q(0,B.ch))a.a.blendFunc(A.CQ(a,b.e),A.CQ(a,b.f))
if(r.q(0,B.ci))a.a.blendEquation(A.HJ(a,b.r))
if(r.q(0,B.ev))a.a.colorMask(!0,!0,!0,!0)
if(r.q(0,B.ew)){q=v.G.WebGL2RenderingContext
a.a.disable(A.j(q.SCISSOR_TEST))}s.a=b},
HK(a,b){var s
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
s.clear(A.HK(a,b))},
bU(a,b){var s
if(a.b!==B.j)A.h(A.i(u.k))
s=A.c(b.a)
a.a.useProgram(s)
a.e=s},
m(a,b,c){var s,r,q,p,o,n,m,l
if(a.b!==B.j)A.h(A.i(u.k))
s=a.e
if(s==null)throw A.b(A.i("WebGl2Device.setUniform called with no bound program"))
r=a.a
q=A.H(r.getUniformLocation(s,b))
if(q==null)return
switch(c.a.a){case 0:r.uniform1f(q,A.az(c.b))
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
A.b2(r,"uniform4f",[q,n,m,l,p[3]],t.H)
break
case 4:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 5:r.uniformMatrix4fv(q,!1,t.B.a(c.b))
break
case 6:r.uniform1i(q,A.j(c.b))
break}},
br(a,b){if(a.b!==B.j)A.h(A.i(u.k))
a.a.bindVertexArray(A.c(b.a))},
aD(a,b,c){var s,r,q,p,o,n
if(a.b!==B.j)A.h(A.i(u.k))
s=c.a
r=a.a
q=v.G
r.activeTexture(A.j(q.WebGL2RenderingContext.TEXTURE0)+b)
if(s instanceof A.k6){p=s.d>1?A.j(q.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(q.WebGL2RenderingContext.TEXTURE_2D)
r.bindTexture(p,s.a)
return}if(s instanceof A.k5){o=s.b
if(o!=null){r.bindTexture(A.j(q.WebGL2RenderingContext.TEXTURE_2D),o)
return}n=s.e
if(n!=null){r.bindTexture(A.j(q.WebGL2RenderingContext.TEXTURE_2D),n)
return}throw A.b(A.i("WebGl2Device.bindTexture: target has no sampleable color or depth texture (multisampled targets must be resolved to a single-sample target before sampling)"))}throw A.b(A.i("WebGl2Device.bindTexture: unrecognized GpuObject handle type"))},
HO(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.h(A.i(u.k))
s=A.c(b.a)
r=a.a
q=v.G
r.bindBuffer(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),s)
A:{p=t.ys.b(c)
o=p?c:null
if(p){r.bufferData(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),o,A.j(q.WebGL2RenderingContext.STATIC_DRAW))
break A}p=c.length
n=new Uint8Array(p*4)
m=J.Bq(B.a9.gey(n),0,null)
for(l=m.$flags|0,k=0;k<p;++k){j=c[k]
l&2&&A.aY(m,11)
m.setUint32(k*4,j,!0)}r.bufferData(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),n,A.j(q.WebGL2RenderingContext.STATIC_DRAW))}},
HP(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.STATIC_DRAW)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.DYNAMIC_DRAW)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.STREAM_DRAW)
break
default:s=null}return s},
CU(a,b){var s,r,q,p
if(a.b!==B.j)A.h(A.i(u.k))
s=a.a
r=A.H(s.createBuffer())
if(r==null)throw A.b(A.i("WebGl2Device: gl.createBuffer() returned null"))
q=v.G
p=b.c===B.di?A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER):A.j(q.WebGL2RenderingContext.ARRAY_BUFFER)
s.bindBuffer(p,r)
s.bufferData(p,b.a,A.HP(a,b.b))
return new A.ef(r)},
CS(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.NEAREST)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.LINEAR)
break
case 2:s=A.j(v.G.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR)
break
default:s=null}return s},
CT(a,b){var s
switch(b.a){case 0:s=A.j(v.G.WebGL2RenderingContext.CLAMP_TO_EDGE)
break
case 1:s=A.j(v.G.WebGL2RenderingContext.REPEAT)
break
default:s=null}return s},
HQ(a,b,c){var s=b>c?b:c,r=1
for(;s>1;s=(s+1)/2|0)++r
return r},
Af(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a.b!==B.j)A.h(A.i(u.k))
s=a.a
r=A.H(s.createTexture())
if(r==null)throw A.b(A.i("WebGl2Device: gl.createTexture() returned null"))
q=b.c
p=q>1
o=v.G
n=p?A.j(o.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(o.WebGL2RenderingContext.TEXTURE_2D)
s.bindTexture(n,r)
m=b.d
l=m?A.HQ(a,b.a,b.b):1
k=t.H
j=b.a
i=b.b
if(p)A.b2(s,"texStorage3D",[n,l,A.j(o.WebGL2RenderingContext.RGBA8),j,i,q],k)
else A.b2(s,"texStorage2D",[n,l,A.j(o.WebGL2RenderingContext.RGBA8),j,i],k)
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.CS(a,b.e))
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.CS(a,b.f))
p=b.r
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_WRAP_S),A.CT(a,p))
s.texParameteri(n,A.j(o.WebGL2RenderingContext.TEXTURE_WRAP_T),A.CT(a,p))
h=a.bU("EXT_texture_filter_anisotropic")
g=h?a.hq(34047):1
f=b.w
if(!isFinite(f)||f<1||f>16)A.h(A.a8(f,"requested","anisotropy must be finite and in [1, 16]"))
if(h&&isFinite(g)&&g>=1)e=g>16?16:g
else e=1
f=f<e?f:e
if(f>1)s.texParameterf(n,34046,f)
return new A.ef(new A.k6(r,j,i,q,m))},
Ag(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a.b!==B.j)A.h(A.i(u.k))
s=t.jm.a(b.a)
r=s.d
if(c>=r)throw A.b(A.p("WebGl2Device.uploadTextureLayer: layer "+c+" out of range for "+r+"-layer texture",null))
q=s.b
p=s.c
o=q*p*4
n=d.length
if(n!==o)throw A.b(A.p("WebGl2Device.uploadTextureLayer: expected "+o+" RGBA8 bytes for "+q+"x"+p+", got "+n,null))
r=r>1
n=v.G
m=r?A.j(n.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(n.WebGL2RenderingContext.TEXTURE_2D)
l=a.a
l.bindTexture(m,s.a)
k=t.H
if(r)A.b2(l,"texSubImage3D",[m,0,0,0,c,q,p,1,A.j(n.WebGL2RenderingContext.RGBA),A.j(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)
else A.b2(l,"texSubImage2D",[m,0,0,0,q,p,A.j(n.WebGL2RenderingContext.RGBA),A.j(n.WebGL2RenderingContext.UNSIGNED_BYTE),d],k)},
CV(a,b){var s,r,q
if(a.b!==B.j)A.h(A.i(u.k))
s=t.jm.a(b.a)
if(!s.e)return
r=v.G
q=s.d>1?A.j(r.WebGL2RenderingContext.TEXTURE_2D_ARRAY):A.j(r.WebGL2RenderingContext.TEXTURE_2D)
r=a.a
r.bindTexture(q,s.a)
r.generateMipmap(q)},
mT(a,b){a.a.deleteTexture(t.jm.a(b.a).a)},
CX(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c="renderbufferStorageMultisample",b="texStorage2D",a="framebufferTexture2D"
if(a0.b!==B.j)A.h(A.i(u.k))
s=a1.a
if(s<=0||a1.b<=0)throw A.b(A.p("WebGl2Device.createTarget requires positive dimensions, got "+s+"x"+a1.b,d))
r=a0.a
q=A.H(r.createFramebuffer())
if(q==null)throw A.b(A.i("WebGl2Device: gl.createFramebuffer() returned null"))
p=v.G
r.bindFramebuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),q)
o=a1.d
n=o===B.bl
if(n&&!a1.e)throw A.b(A.p("WebGl2Device.createTarget: GpuTargetAttachment.depthOnly requires hasDepth: true \u2014 a depth-only target with no depth attachment has nothing to render into",d))
m=o===B.dk||o===B.jv
l=d
k=d
j=d
i=d
if(n){r.drawBuffers(A.d([A.j(p.WebGL2RenderingContext.NONE)],t.n))
r.readBuffer(A.j(p.WebGL2RenderingContext.NONE))}else{o=a1.c
h=t.H
g=a1.b
if(o>1){k=A.H(r.createRenderbuffer())
r.bindRenderbuffer(A.j(p.WebGL2RenderingContext.RENDERBUFFER),k)
A.b2(r,c,[A.j(p.WebGL2RenderingContext.RENDERBUFFER),o,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.RENDERBUFFER),k)
if(m){i=A.H(r.createRenderbuffer())
r.bindRenderbuffer(A.j(p.WebGL2RenderingContext.RENDERBUFFER),i)
A.b2(r,c,[A.j(p.WebGL2RenderingContext.RENDERBUFFER),o,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.framebufferRenderbuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.j(p.WebGL2RenderingContext.RENDERBUFFER),i)
r.drawBuffers(A.d([A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}else{l=A.H(r.createTexture())
r.bindTexture(A.j(p.WebGL2RenderingContext.TEXTURE_2D),l)
A.b2(r,b,[A.j(p.WebGL2RenderingContext.TEXTURE_2D),1,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
A.b2(r,a,[A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.TEXTURE_2D),l,0],h)
if(m){j=A.H(r.createTexture())
r.bindTexture(A.j(p.WebGL2RenderingContext.TEXTURE_2D),j)
A.b2(r,b,[A.j(p.WebGL2RenderingContext.TEXTURE_2D),1,A.j(p.WebGL2RenderingContext.RGBA8),s,g],h)
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.j(p.WebGL2RenderingContext.LINEAR))
A.b2(r,a,[A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1),A.j(p.WebGL2RenderingContext.TEXTURE_2D),j,0],h)
r.drawBuffers(A.d([A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(p.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))}}}f=d
e=d
if(a1.e){o=a1.c
h=t.H
g=a1.b
if(o>1){f=A.H(r.createRenderbuffer())
r.bindRenderbuffer(A.j(p.WebGL2RenderingContext.RENDERBUFFER),f)
A.b2(r,c,[A.j(p.WebGL2RenderingContext.RENDERBUFFER),o,A.j(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.framebufferRenderbuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.j(p.WebGL2RenderingContext.RENDERBUFFER),f)}else{e=A.H(r.createTexture())
r.bindTexture(A.j(p.WebGL2RenderingContext.TEXTURE_2D),e)
A.b2(r,b,[A.j(p.WebGL2RenderingContext.TEXTURE_2D),1,A.j(p.WebGL2RenderingContext.DEPTH_COMPONENT24),s,g],h)
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MIN_FILTER),A.j(p.WebGL2RenderingContext.NEAREST))
r.texParameteri(A.j(p.WebGL2RenderingContext.TEXTURE_2D),A.j(p.WebGL2RenderingContext.TEXTURE_MAG_FILTER),A.j(p.WebGL2RenderingContext.NEAREST))
A.b2(r,a,[A.j(p.WebGL2RenderingContext.FRAMEBUFFER),A.j(p.WebGL2RenderingContext.DEPTH_ATTACHMENT),A.j(p.WebGL2RenderingContext.TEXTURE_2D),e,0],h)}}o=A.j(r.checkFramebufferStatus(A.j(p.WebGL2RenderingContext.FRAMEBUFFER)))
h=A.j(p.WebGL2RenderingContext.FRAMEBUFFER_COMPLETE)
r.bindFramebuffer(A.j(p.WebGL2RenderingContext.FRAMEBUFFER),null)
if(o!==h){A.Ah(a0,q,l,k,f,e,j,i)
throw A.b(A.i("WebGl2Device.createTarget: framebuffer incomplete"))}return new A.ef(new A.k5(q,l,k,f,e,j,i,s,a1.b,a1.c))},
Ah(a,b,c,d,e,f,g,h){var s=a.a
s.deleteFramebuffer(b)
if(c!=null)s.deleteTexture(c)
if(d!=null)s.deleteRenderbuffer(d)
if(e!=null)s.deleteRenderbuffer(e)
if(f!=null)s.deleteTexture(f)
if(g!=null)s.deleteTexture(g)
if(h!=null)s.deleteRenderbuffer(h)},
cF(a){var s
if(a.b!==B.j)A.h(A.i(u.k))
s=A.H(a.a.createVertexArray())
if(s==null)throw A.b(A.i("WebGl2Device: gl.createVertexArray() returned null"))
return new A.ef(s)},
CW(a,b,c){var s,r="WebGL2RenderingContext",q="VERTEX_SHADER",p=a.a,o=A.H(p.createShader(b))
if(o==null)throw A.b(A.mo(b===A.o3(A.DD(A.EA(),r),q,t.S)?B.eo:B.ep,"gl.createShader() returned null"))
p.shaderSource(o,c)
p.compileShader(o)
if(!J.ab(A.ig(p.getShaderParameter(o,A.j(v.G.WebGL2RenderingContext.COMPILE_STATUS))),!0)){s=A.as(p.getShaderInfoLog(o))
if(s==null)s="(no info log)"
p.deleteShader(o)
throw A.b(A.mo(b===A.o3(A.DD(A.EA(),r),q,t.S)?B.eo:B.ep,s))}return o},
HR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(a.b!==B.j)A.h(A.i(u.k))
q=v.G
s=A.CW(a,A.j(q.WebGL2RenderingContext.VERTEX_SHADER),e)
r=null
try{r=A.CW(a,A.j(q.WebGL2RenderingContext.FRAGMENT_SHADER),b)}catch(p){a.a.deleteShader(s)
throw p}o=a.a
n=A.H(o.createProgram())
if(n==null){o.deleteShader(s)
o.deleteShader(r)
throw A.b(B.qO)}o.attachShader(n,s)
o.attachShader(n,r)
o.linkProgram(n)
if(!J.ab(A.ig(o.getProgramParameter(n,A.j(q.WebGL2RenderingContext.LINK_STATUS))),!0)){m=A.as(o.getProgramInfoLog(n))
if(m==null)m="(no info log)"
o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.mo(B.eq,m))}for(q=c.length,l=0;l<c.length;c.length===q||(0,A.r)(c),++l){k=c[l]
if(A.j(o.getAttribLocation(n,k))<0){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.mo(B.er,"missing required attribute: "+k))}}for(q=d.length,l=0;l<q;++l){j=d[l]
if(A.H(o.getUniformLocation(n,j))==null){o.deleteProgram(n)
o.deleteShader(s)
o.deleteShader(r)
throw A.b(A.mo(B.er,"missing required uniform: "+j))}}o.deleteShader(s)
o.deleteShader(r)
return new A.ef(n)},
ef:function ef(a){this.a=a},
k6:function k6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k5:function k5(a,b,c,d,e,f,g,h,i,j){var _=this
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
nI:function nI(a){this.a=a
this.b=!1},
mS:function mS(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null
_.f=c
_.r=d
_.w=!1},
wd:function wd(a){this.a=a},
we:function we(a){this.a=a},
xj:function xj(){},
nH:function nH(){},
wc:function wc(a){this.a=a},
wf:function wf(){},
l6:function l6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oS(a0,a1){var s=0,r=A.aN(t.iF),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$oS=A.aO(function(a2,a3){if(a2===1)return A.aK(a3,r)
for(;;)switch(s){case 0:p=A.c(new v.G.AudioContext())
o=t.N
n=t.m
m=A.n(o,n)
l=A.c(p.createGain())
k=A.c(p.createGain())
j=A.c(p.createGain())
i=A.c(p.createGain())
h=A.c(p.createGain())
g=A.c(p.createGain())
f=A.c(p.createGain())
e=A.c(p.createGain())
d=A.c(p.createGain())
c=A.c(p.createGain())
b=A.c(p.createConvolver())
a=new A.kG(p,a1,l,k,j,i,h,g,f,e,d,c,b,m,A.n(o,t.a_),B.bd,A.n(n,t.jS))
a.kb(p,a1)
p=A.v(a0).i("N<1,2>")
s=3
return A.a7(A.qe(A.lN(new A.N(a0,p),p.i("b0<aB>(t.E)").a(new A.oT(a)),p.i("t.E"),t.ls),t.c),$async$oS)
case 3:a.dy="ir-stone"
m=m.h(0,"ir-stone")
p=m==null?a.ld():m
b.buffer=p
q=a
s=1
break
case 1:return A.aL(q,r)}})
return A.aM($async$oS,r)},
kG:function kG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
oU:function oU(){},
oT:function oT(a){this.a=a},
oX:function oX(a,b){this.a=a
this.b=b},
oW:function oW(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function oV(a,b){this.a=a
this.b=b},
oY:function oY(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
k4:function k4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
Fr(a,b,c,d,e,f,g){var s=new A.oJ(c,f,b,g,new A.a(d.a,d.b,d.c),e,a)
s.kd(a,b,c,d,0,e,f,g)
return s},
Fk(a,b){var s=new A.od(b)
s.ka(a,b)
return s},
Fq(a){var s,r,q,p,o,n=t.z
n=A.n(n,n)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gA(0),r=t.N;s.m();){q=s.d
p=q.a
o=A.aI(q.b,!1,r)
o.$flags=3
n.k(0,p,o)}n=new A.oF(A.aZ(n,r,t.a))
n.kc(a)
return n},
Kg(a,b){var s,r,q,p=b>>>0
for(s=new A.dI(a),r=t.sU,s=new A.ao(s,s.gu(0),r.i("ao<a5.E>")),r=r.i("a5.E");s.m();){q=s.d
p=A.En(p,q==null?r.a(q):q)}return p&2147483647},
kH:function kH(a,b){this.a=a
this.b=b},
oJ:function oJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oK:function oK(){},
od:function od(a){this.a=a},
oe:function oe(){},
ik:function ik(){},
of:function of(){},
og:function og(){},
oF:function oF(a){this.a=a},
oH:function oH(){},
oI:function oI(){},
oG:function oG(){},
zU:function zU(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.r=d
_.w=e
_.x=f},
oR:function oR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(a){this.a=a},
oN:function oN(){},
jz:function jz(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
pq:function pq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
q8:function q8(a){this.a=a},
ly:function ly(a,b,c,d,e,f,g,h,i,j){var _=this
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
rf:function rf(a){this.a=a},
Gj(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gA(0);s.m();){r=s.d
q=r.a
p=A.aI(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return new A.re(n)},
re:function re(a){this.a=a},
ri:function ri(){var _=this
_.c=_.b=_.a=!1
_.d=0},
be:function be(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rD:function rD(a,b,c){this.a=a
this.c=b
this.e=c},
rA:function rA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e},
rB:function rB(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(){},
pN:function pN(){this.b=this.a=0},
rJ:function rJ(a){this.a=a
this.b=0
this.e=!1},
dl:function dl(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=i},
rN:function rN(a){this.a=a},
jp(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aY(a)
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
ju(a,b,c){return new A.a(a,b,c)},
CH(a,b,c){var s=a.a,r=a.b,q=a.c
return new A.a(s+(b.a-s)*c,r+(b.b-r)*c,q+(b.c-q)*c)},
a:function a(a,b,c){this.a=a
this.b=b
this.c=c},
w3:function w3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
w4:function w4(){},
cE:function cE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h},
w5:function w5(){},
eS:function eS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w0:function w0(){},
w1:function w1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w2:function w2(){},
w_:function w_(){this.b=this.a=-1},
HV(a,b,c,d){return new A.mV(d,b,c,a)},
HX(a){var s,r,q,p,o,n,m,l,k,j,i,h="GamepadDpadUp",g="GamepadDpadDown",f="GamepadDpadLeft",e="GamepadDpadRight"
if(!a.a||a.c!=="standard")return $.ET()
s=a.d
r=A.wk(s,0)
q=A.wk(s,1)
p=A.wk(s,2)
o=A.wk(s,3)
s=t.N
n=A.a1(s)
m=a.e
if(A.bV(m,0))n.l(0,"GamepadA")
if(A.bV(m,1))n.l(0,"GamepadB")
if(A.bV(m,2))n.l(0,"GamepadX")
if(A.bV(m,3))n.l(0,"GamepadY")
if(A.bV(m,4))n.l(0,"GamepadLB")
if(A.bV(m,5))n.l(0,"GamepadRB")
if(A.bV(m,6))n.l(0,"GamepadLT")
if(A.bV(m,7))n.l(0,"GamepadRT")
if(A.bV(m,8))n.l(0,"GamepadView")
if(A.bV(m,9))n.l(0,"GamepadMenu")
if(A.bV(m,10))n.l(0,"GamepadLStick")
if(A.bV(m,11))n.l(0,"GamepadRStick")
if(A.bV(m,12))n.l(0,h)
if(A.bV(m,13))n.l(0,g)
if(A.bV(m,14))n.l(0,f)
if(A.bV(m,15))n.l(0,e)
m=n.q(0,e)?1:0
l=n.q(0,f)?1:0
k=n.q(0,h)?1:0
j=n.q(0,g)?1:0
i=new A.a(r+(m-l),0,-q+(k-j))
m=i.gu(0)>1?i.ga5():i
return new A.mV(m,p,o,A.fD(n,s))},
wk(a,b){return A.HW(b<a.length?a[b]:0)},
bV(a,b){return b<a.length&&a[b]>=0.5},
HW(a){var s
if(!isFinite(a)||Math.abs(a)<=0.18)return 0
s=B.b.n((Math.abs(a)-0.18)/0.8200000000000001,0,1)
return B.b.gc5(a)?-s:s},
mu:function mu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mV:function mV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pj:function pj(a){this.a=a},
FN(a,b,c){var s=new A.l9(a,c,null,b)
s.kh(a,null,null,b,c)
return s},
l9:function l9(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
G_(a){var s
if(!t.f.b(a)||typeof a.h(0,"kind")!="string")return null
s=A.bP(new A.F(B.mc,t.e2.a(new A.pZ(a)),t.vL),t.yW)
return s==null?null:new A.hm(s)},
C7(a,b){var s=A.d([],t.s)
switch(b.a){case 0:A.A6(s,a,B.ln)
break
case 1:A.A6(s,a,B.lo)
break
case 2:A.A6(s,a,B.mi)
break}return s},
A6(a,b,c){var s,r,q,p,o
for(s=c.length,r=b.b,q=0;q<s;++q){p=c[q]
o=p.a
if(r.M(o))o=r.h(0,o)===p.b
else o=!1
if(o){B.a.l(a,p.c)
return}}},
FZ(a){if(a.a!==21)return null
if(a.e)return B.h8
if(!a.d&&a.b>=0.6&&a.c>=3)return B.h9
return B.h7},
cv:function cv(a,b){this.a=a
this.b=b},
pW:function pW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a){this.a=a},
pZ:function pZ(a){this.a=a},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
GM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="activeStairId",e=t.f
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
l=typeof a.h(0,f)=="string"?A.x(a.h(0,f)):g
k=a.h(0,"activeStairProgress")
j=typeof k=="number"?k:g
e=l==null
if(e&&j!=null)return g
if(!e&&j==null)return g
e=j!=null
if(e)i=j<0||j>1
else i=!1
if(i)return g
h=new A.m3(s,new A.a(o,n,m),q,p,l,j)
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
m3:function m3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Ki(a){var s,r,q,p=A.n(t.N,t.z)
for(s=a.gO(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
if(typeof q!="string")throw A.b(B.hp)
p.k(0,q,r.b)}return p},
xp(a){var s,r,q,p,o,n=a.ga9().bN(0)
B.a.a7(n)
s=t.z
r=A.n(s,s)
for(q=n.length,p=0;p<n.length;n.length===q||(0,A.r)(n),++p){o=n[p]
r.k(0,o,A.Dv(a.h(0,o)))}return A.aZ(r,t.N,s)},
Dv(a){var s
if(t.f.b(a))return A.xp(A.Ki(a))
if(t.j.b(a)){s=t.z
return A.ad(J.en(a,A.L9(),s),s)}if(a==null||A.bE(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.iv)
return a}throw A.b(A.M("presentation snapshot contains unsupported value "+J.fa(a).t(0),null,null))},
tM:function tM(a){this.a=a},
Cq(a,b,c){var s=A.Ax(b),r=A.Ax(a)
if(c!==2)A.h(A.a8(c,"version","unsupported save version"))
return new A.hJ(c,s,r)},
Ax(a){var s,r,q,p,o=A.v(a).i("ag<1>"),n=A.J(new A.ag(a,o),o.i("t.E"))
B.a.a7(n)
o=t.z
s=A.n(o,o)
for(r=n.length,q=0;q<n.length;n.length===r||(0,A.r)(n),++q){p=n[q]
s.k(0,p,A.Du(a.h(0,p)))}return A.aZ(s,t.N,o)},
Du(a){var s,r,q,p
if(t.f.b(a)){s=A.n(t.N,t.z)
for(r=a.gO(),r=r.gA(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.id)
s.k(0,p,q.b)}return A.Ax(s)}if(t.j.b(a)){r=t.z
return A.ad(J.en(a,A.Ld(),r),r)}if(a==null||A.bE(a)||typeof a=="string")return a
if(typeof a=="number"){if(!isFinite(a))throw A.b(B.iA)
return a}throw A.b(A.M("save contains unsupported value "+J.fa(a).t(0),null,null))},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
ui:function ui(){},
fC:function fC(a,b){this.a=a
this.b=b},
BM(a,b,c,d,e,f,g,h){var s=A.d([],t.pC),r=A.d([],t.ns)
return new A.qk(a,b,c,d,e,f,g,s,r,h)},
BN(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.b,c=d.h(0,"houseSeed"),b=d.h(0,"time"),a=d.h(0,"dayLoop"),a0=d.h(0,"journal"),a1=d.h(0,"house"),a2=d.h(0,"difficulty")
if(A.b7(c)){s=t.f
s=!s.b(b)||!s.b(a)||!s.b(a0)||!s.b(a1)||!s.b(a2)}else s=!0
if(s)throw A.b(B.ic)
r=d.h(0,"runSeed")
q=A.b7(r)?r:0
p=b.h(0,"day")
o=b.h(0,"hour")
if(!A.b7(p)||p<1||typeof o!="number")throw A.b(B.iS)
if(!isFinite(5760))throw A.b(A.a8(5760,"daySeconds","must be finite and > 0"))
n=new A.lp(p,7,5760)
n.j7(o)
s=t.N
m=t.z
l=A.Gu(a5,A.b5(a0,s,m))
k=A.FK(l,A.b5(a,s,m),n)
j=A.B4(a3,c)
A.Gi(A.b5(a1,s,m)).mB(j)
s=A.b5(a2,s,m)
i=s.h(0,"scrutiny")
h=s.h(0,"exhaustion")
g=s.h(0,"isolation")
f=s.h(0,"complianceTriggered")
if(typeof i!="number"||typeof h!="number"||typeof g!="number"||!A.bE(f))A.h(B.hE)
e=A.GD(d.h(0,"narrative"))
if(e==null)e=A.tc(null,null,null)
return A.BM(c,q,j,n,l,k,new A.l6(i,h,g,f),e)},
J6(a){var s
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
dM:function dM(a,b){this.a=a
this.b=b},
lo:function lo(a,b){this.c=a
this.d=b},
ql:function ql(a,b,c){this.a=a
this.b=b
this.r=c},
qk:function qk(a,b,c,d,e,f,g,h,i,j){var _=this
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
qm:function qm(a){this.a=a},
qn:function qn(){},
qo:function qo(){},
qp:function qp(a){this.a=a},
qq:function qq(){},
Fo(b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8={}
b8.a=null
s=A.Fn(c3,c4,c1).a
r=s[0]
q=s[1]
b8.a=s[2]
p=s[3]
o=c4.b
s=A.C(b9)
n=s.i("F<1>")
m=A.J(new A.F(b9,s.i("l(1)").a(new A.or(b8)),n),n.i("t.E"))
B.a.Z(m,new A.os())
for(s=m.length,n=r.a,l=q.a-n,k=r.b,j=r.c,i=q.c-j,h=p.a*-0.28,g=p.c*-0.28,f=k+p.b*-0.28,e=0.28/c5,d=o-0.001,c=0,b=0;b<m.length;m.length===s||(0,A.r)(m),++b,c=a2){a=m[b]
a0=a.b
a1=B.b.n(a0,0,b8.a)
a2=B.b.n(a0+a.d,0,b8.a)
a0=a.c
a3=B.b.n(a0,0,o)
a4=B.b.n(a0+a.e,0,o)
if(a1>c+0.001)A.oq(c0,q,b8.a,p,c6,r,c5,c,a1,0,o)
a0=a3>0.001
if(a0)A.oq(c0,q,b8.a,p,c6,r,c5,a1,a2,0,a3)
if(a4<d)A.oq(c0,q,b8.a,p,c6,r,c5,a1,a2,a4,o)
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
c0.c8(new A.a(a7,b3,a6),new A.a(a9,b4,b0),new A.a(a9,b5,b0),new A.a(a7,b6,a6),c2,e,b7)
c0.c8(new A.a(b1,b4,b2),new A.a(a8,b3,a5),new A.a(a8,b6,a5),new A.a(b1,b5,b2),c2,e,b7)
b7=(a2-a1)/c5
c0.j2(new A.a(a7,b6,a6),new A.a(a8,b6,a5),new A.a(b1,b5,b2),new A.a(a9,b5,b0),c2,new A.a(0,-1,0),b7,e)
if(!a.r&&a0)c0.j2(new A.a(a9,b4,b0),new A.a(b1,b4,b2),new A.a(a8,b3,a5),new A.a(a7,b3,a6),c2,new A.a(0,1,0),b7,e)}s=b8.a
if(c<s-0.001)A.oq(c0,q,s,p,c6,r,c5,c,s,0,o)},
oq(a,b,c,d,e,f,g,h,i,j,a0){var s=h/c,r=i/c,q=f.a,p=b.a-q,o=q+p*s,n=f.b,m=n+j,l=f.c,k=b.c-l
s=l+k*s
p=q+p*r
r=l+k*r
n+=a0
a.pp(new A.a(o,m,s),new A.a(p,m,r),new A.a(p,n,r),new A.a(o,n,s),e,d,h/g,(i-h)/g,j/g,(a0-j)/g)},
Fn(a,b,c){var s,r,q,p,o=a.d
switch(c.a){case 0:s=o.a
r=o.b
q=o.c
p=b.a
p=new A.cH([new A.a(s,r,q),new A.a(s+p,r,q),p,new A.a(0,0,1)])
s=p
break
case 1:s=o.a+b.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.a(s,r,q),new A.a(s,r,q+p),p,new A.a(-1,0,0)])
s=p
break
case 2:s=o.a
r=b.a
q=o.b
p=o.c+b.c
r=new A.cH([new A.a(s+r,q,p),new A.a(s,q,p),r,new A.a(0,0,-1)])
s=r
break
case 3:s=o.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.a(s,r,q+p),new A.a(s,r,q),p,new A.a(1,0,0)])
s=p
break
default:s=null}return s},
bY:function bY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
or:function or(a){this.a=a},
os:function os(){},
kB:function kB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.w=f},
ow:function ow(){},
G7(a){var s
A:{if("living_room"===a||"livingRoom"===a){s="living-room"
break A}if("spare_room"===a||"spareRoom"===a){s="spare-room"
break A}if("cellar_service"===a){s="cellar"
break A}s=a
break A}return s},
G6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.d([],t.bM),d=A.J(B.lh,t.px)
B.a.K(d,B.kp)
B.a.K(d,B.lf)
B.a.K(d,B.kI)
B.a.K(d,B.lP)
B.a.K(d,B.l9)
B.a.K(d,B.lp)
B.a.K(d,B.ky)
s=d.length
r=a.e
q=0
for(;q<d.length;d.length===s||(0,A.r)(d),++q){p=d[q]
o=A.G7(p.c)
n=r.h(0,o)
if(n==null)continue
m=a.a1(n)
l=n.d
k=l.a+m.a*0.5+p.e
j=l.b+p.f
l=l.c+m.c*0.5+p.r
i=$.EG().a.h(0,p.d)
if(i==null)i=B.mT
h=new A.bZ(new Float32Array(10752))
g=Math.max(0.04,p.y)
h.ex(new A.a(k-g,j,l-g),new A.a(k+g,j+Math.max(0.04,p.z),l+g),(B.b.aj(B.b.n(i.d*255,0,255))<<16|B.b.aj(B.b.n(i.e*255,0,255))<<8|B.b.aj(B.b.n(i.f*255,0,255)))>>>0,i.y)
f=h.a
B.a.l(e,new A.lm(p.a,o,new A.a(k,j,l),p.w,1,new Float32Array(f.subarray(0,A.nP(0,h.b,f.length)))))}return e},
lm:function lm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
bw:function bw(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j},
bo:function bo(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ue:function ue(){},
uf:function uf(){},
ot:function ot(a,b){this.a=a
this.b=b},
ou:function ou(){},
ov:function ov(){},
qP:function qP(){},
qQ:function qQ(){},
qR:function qR(){},
iU:function iU(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
aw:function aw(a,b,c,d,e){var _=this
_.a=a
_.f=b
_.r=c
_.w=d
_.Q=e},
il(a,b,c,d,e,f,g,h,i,j,k,l){var s,r
a.$flags&2&&A.aY(a)
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
bZ:function bZ(a){this.a=a
this.b=0},
j8(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=A.Ch(d,e,c).a,k=l[0],j=l[1],i=l[2],h=l[3]
if(f.e){l=A.C(a)
s=l.i("F<1>")
r=A.J(new A.F(a,l.i("l(1)").a(new A.tS()),s),s.i("t.E"))}else r=A.d([],t.n1)
B.a.Z(r,new A.tT())
for(l=r.length,q=0,p=0;p<r.length;r.length===l||(0,A.r)(r),++p,q=m){o=r[p]
s=o.b
n=B.b.n(s,0,i)
m=B.b.n(s+o.d,0,i)
if(n>q+0.01)A.Cg(b,j,i,h,f,k,q,n)}if(q<i-0.01)A.Cg(b,j,i,h,f,k,q,i)},
Ci(a,b,c,d,e,f){var s,r,q,p,o,n=A.Ch(e,f,d).a,m=n[0],l=n[1],k=n[2],j=n[3],i=l.a_(0,m).ga5(),h=c.b
n=c.d
s=h+n
r=c.c+c.e
q=h-0.04
if(q>=-0.08&&q<=k)A.tQ(0.08,A.tR(m,i,q),a,r+0.08,j,0.02,b,i)
p=s+0.04
if(p>=0&&p<=k+0.08)A.tQ(0.08,A.tR(m,i,p),a,r+0.08,j,0.02,b,i)
o=A.tR(m,i,(h+s)*0.5)
A.tQ(n+0.16,new A.a(o.a,e.d.b+r+0.04,o.c),a,0.08,j,0.02,b,i)},
Cg(a,b,c,d,e,f,g,h){var s=b.a_(0,f).ga5(),r=A.tR(f,s,(g+h)*0.5),q=e.b
A.tQ(h-g,new A.a(r.a,f.b+e.a+q*0.5,r.c),a,q,d,e.c,e.d,s)},
tQ(a,b,c,d,e,f,g,a0){var s=d*0.5,r=a0.a6(0,a*0.5),q=e.a6(0,f),p=-s,o=b.a_(0,r).T(0,q).T(0,new A.a(0,p,0)),n=b.T(0,r).T(0,q).T(0,new A.a(0,p,0)),m=b.T(0,r).T(0,q).T(0,new A.a(0,s,0)),l=b.a_(0,r).T(0,q).T(0,new A.a(0,s,0)),k=b.a_(0,r).T(0,new A.a(0,p,0)),j=b.T(0,r).T(0,new A.a(0,p,0)),i=b.T(0,r).T(0,new A.a(0,s,0)),h=b.a_(0,r).T(0,new A.a(0,s,0))
c.cN(o,n,m,l,g,e)
c.cN(l,m,i,h,g,new A.a(0,1,0))
c.cN(k,j,n,o,g,new A.a(0,-1,0))
c.cN(h,l,o,k,g,new A.a(-a0.a,-a0.b,-a0.c))
c.cN(m,i,j,n,g,a0)},
tR(a,b,c){return new A.a(a.a+b.a*c,a.b,a.c+b.c*c)},
Ch(a,b,c){var s,r,q,p,o=a.d
switch(c.a){case 0:s=o.a
r=o.b
q=o.c
p=b.a
p=new A.cH([new A.a(s,r,q),new A.a(s+p,r,q),p,new A.a(0,0,1)])
s=p
break
case 1:s=o.a+b.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.a(s,r,q),new A.a(s,r,q+p),p,new A.a(-1,0,0)])
s=p
break
case 2:s=o.a
r=b.a
q=o.b
p=o.c+b.c
r=new A.cH([new A.a(s+r,q,p),new A.a(s,q,p),r,new A.a(0,0,-1)])
s=r
break
case 3:s=o.a
r=o.b
q=o.c
p=b.c
p=new A.cH([new A.a(s,r,q+p),new A.a(s,r,q),p,new A.a(1,0,0)])
s=p
break
default:s=null}return s},
hA:function hA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tS:function tS(){},
tT:function tT(){},
uc:function uc(){},
ud:function ud(){},
HU(a,b){var s,r,q,p=new A.bZ(new Float32Array(10752)),o=a.a1(b)
for(s=b.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)A.HT(p,b,o,s[q])
return B.n.ag(p.a,0,p.b)},
HT(a,b,a0,a1){var s,r,q,p,o,n,m,l=14209221,k=4073251,j=a1.c,i=a1.e,h=j+i,g=a1.d,f=g+a1.f,e=(g+f)*0.5,d=(j+h)*0.5,c=new A.wh(new A.wi(a1.b,b,a0),a)
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
wi:function wi(a,b,c){this.a=a
this.b=b
this.c=c},
wh:function wh(a,b){this.a=a
this.b=b},
oZ(a){var s,r,q,p,o,n,m,l,k,j,i,h="modelScale",g="residence",f="restAnchor",e="returnPortalId",d=A.i9(a,"house manifest"),c=typeof d.h(0,h)=="number"?A.a4(d.h(0,h)):1
if(!isFinite(c)||c<=0)throw A.b(B.hY)
s=A.bO(d,"houseId")
r=A.bO(d,"sourceRef")
q=A.bO(d,"presentationScope")
p=A.bO(d,"storyAuthority")
if(d.h(0,g)==null)o=null
else{n=A.i9(d.h(0,g),g)
o=A.bO(n,"roomId")
m=A.AV(n.h(0,"spawn"),"residence.spawn",c)
l=typeof n.h(0,f)=="string"?A.x(n.h(0,f)):null
o=new A.pd(o,m,l,typeof n.h(0,e)=="string"?A.x(n.h(0,e)):null)}m=J.en(A.i5(d,"levels"),new A.p_(),t.mD)
m=A.J(m,m.$ti.i("a0.E"))
m.$flags=1
l=J.en(A.i5(d,"rooms"),new A.p0(c),t.bJ)
l=A.J(l,l.$ti.i("a0.E"))
l.$flags=1
k=J.en(A.i5(d,"portals"),new A.p1(c),t.lT)
k=A.J(k,k.$ti.i("a0.E"))
k.$flags=1
j=J.en(A.i5(d,"stairs"),new A.p2(),t.gI)
j=A.J(j,j.$ti.i("a0.E"))
j.$flags=1
i=J.en(A.i5(d,"exteriorCells"),new A.p3(),t.N)
i=A.J(i,i.$ti.i("a0.E"))
i.$flags=1
s=new A.kI(s,r,q,p,o,m,l,k,j)
s.fk()
return s},
B4(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
a9.fk()
s=A.d([],t.eY)
r=A.d([],t.qP)
q=A.d([],t.DZ)
p=t.N
o=new A.qO(s,r,q,A.n(p,t.V),A.n(p,t.o),new A.qU())
n=new A.yS()
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
b.push(new A.fL(a4.a,a4.b,a4.c,a4.d,a4.e,a4.f,a4.r))}a5=A.aI(i.f,!1,p)
a5.$flags=3
B.a.l(s,new A.fB(h,g,new A.a(a,a0,e),new A.a(d,c,f),b,A.IL(h),i.r,i.w,i.x))}for(s=a9.x,p=s.length,j=0;j<s.length;s.length===p||(0,A.r)(s),++j){a6=s[j]
B.a.l(r,new A.cj(a6.a,a6.b,a6.c,a6.d,a6.e,a6.f,a6.r,a6.w,a6.x,a6.at,a6.Q,a6.z,a6.y,a6.as))}for(s=a9.y,r=s.length,p=t.i,j=0;j<s.length;s.length===r||(0,A.r)(s),++j){a7=s[j]
a5=A.aI(a7.c,!1,p)
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
B.a.l(q,new A.fG(a7.a,a7.b,new A.a(k,h,m),new A.a(f,e,l[2])))}a8=a9.f
if(a8!=null){o.r=a8.a
o.x=a8.c
s=a8.b
r=s.length
if(0>=r)return A.e(s,0)
q=s[0]
if(1>=r)return A.e(s,1)
p=s[1]
if(2>=r)return A.e(s,2)
o.w=new A.a(q,p,s[2])}o.oo()
return o},
IL(a){var s
A:{if("living-room"===a){s=A.d([A.A2("mantle-living",!0,new A.a(3.7,1.45,0.8),"living-room gas mantle"),A.A2("mantle-living-second",!1,new A.a(1,1.45,2.4),"second living-room gas mantle")],t.yH)
break A}if("hall"===a){s=A.d([A.A2("mantle-hall",!1,new A.a(1.2,1.45,0.3),"hall gas mantle")],t.yH)
break A}s=B.lx
break A}return s},
Ft(a,b){var s,r=A.i9(a,"room"),q=A.bO(r,"id"),p=A.bO(r,"floor"),o=A.AV(r.h(0,"origin"),"origin",b),n=A.AV(r.h(0,"size"),"size",b),m=J.en(A.i5(r,"windows"),new A.pe(b),t.ya)
m=A.J(m,m.$ti.i("a0.E"))
m.$flags=1
s=J.en(A.i5(r,"portalIds"),new A.pf(),t.N)
s=A.J(s,s.$ti.i("a0.E"))
s.$flags=1
return new A.et(q,p,o,n,m,s,A.B1(r,"wall"),A.B1(r,"floor"),A.B1(r,"ceiling"))},
i9(a,b){return t.P.b(a)?a:A.eh(b+" is not an object")},
i5(a,b){return t.j.b(a.h(0,b))?t.vX.a(a.h(0,b)):A.eh(b+" is not a list")},
bO(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eh(b+" is not a string")},
B1(a,b){var s=a.h(0,"surface")
if(!t.P.b(s))return A.eh("surface is not an object")
return A.bO(s,b)},
AB(a,b){var s,r=A.bO(a,b)
A:{if("north"===r){s=B.F
break A}if("east"===r){s=B.au
break A}if("south"===r){s=B.I
break A}if("west"===r){s=B.av
break A}s=A.eh(b+" has unknown facing "+r)}return s},
JS(a,b){var s,r
if(t.j.b(a)){s=J.aW(a)
s=s.gN(a)||s.R(a,new A.yr())}else s=!0
if(s)return A.eh(b+" is not a non-empty finite number list")
s=A.d([],t.n)
for(r=J.P(a);r.m();)s.push(A.a4(r.gp()))
return s},
f4(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.eh(b+" is not finite")},
o_(a,b){var s,r
if(t.j.b(a)){s=J.aW(a)
s=s.gu(a)!==3||s.R(a,new A.yN())}else s=!0
if(s)return A.eh(b+" is not a finite vec3")
s=A.d([],t.n)
for(r=J.P(a);r.m();)s.push(A.a4(r.gp()))
return s},
AV(a,b,c){var s,r,q,p=A.d([],t.n)
for(s=A.o_(a,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q]*c)
return p},
kr(a,b){var s,r,q=A.a1(t.N)
for(s=J.P(a);s.m();){r=s.gp()
if(!q.l(0,r))throw A.b(A.M("duplicate "+b+" id "+r,null,null))}},
eh(a){return A.h(A.M(a,null,null))},
kI:function kI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i},
p_:function p_(){},
p0:function p0(a){this.a=a},
p1:function p1(a){this.a=a},
p2:function p2(){},
p3:function p3(){},
p6:function p6(){},
p7:function p7(){},
p8:function p8(){},
p9:function p9(){},
pa:function pa(){},
pb:function pb(){},
pc:function pc(){},
p5:function p5(a){this.a=a},
pd:function pd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yS:function yS(){},
er:function er(a){this.a=a},
et:function et(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
pe:function pe(a){this.a=a},
pf:function pf(){},
ev:function ev(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
es:function es(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eu:function eu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
yr:function yr(){},
yN:function yN(){},
oC:function oC(){},
oD:function oD(){},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kR:function kR(a){this.a=a},
lu:function lu(a){this.a=a},
lI:function lI(a){this.a=a},
lJ:function lJ(a){this.a=a},
lL:function lL(a){this.a=a},
mr:function mr(a){this.a=a},
kQ:function kQ(a,b){this.a=a
this.b=b
this.d=null},
pu:function pu(a){this.a=a},
lR:function lR(a,b){this.a=a
this.b=b},
d3:function d3(a,b){this.a=a
this.b=b},
mW:function mW(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qU:function qU(){this.b=0},
a9:function a9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lc:function lc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q0:function q0(){},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(){},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
Lo(a){var s,r,q,p,o,n,m,l
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
return new A.c3(B.an,p,new Uint16Array(A.S(a.b)),new A.h4(new A.A(s.a,s.b,s.c),new A.A(s.d,s.e,s.f)))},
Ln(a){var s,r,q,p,o,n=A.d([],t.uH)
for(s=A.Kf(a,new A.zM(a)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b
o.toString
n.push(new A.ld(o,p.c,p.e))}return n},
Kf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.B()
s=A.n(t.N,t.Ez)
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
throw A.b(A.p("QHMX triangle "+n+" crosses material slots "+h+", "+f+", "+o[j].x,null))}if(!(j<l))return A.e(o,j)
d=b.$4(h,i,g,o[j])
l=s.h(0,d)
if(l==null){l=B.c.q(d,":")?B.c.L(d,0,B.c.bK(d,":")):null
l=new A.dy(d,l,h,A.d([],p))
s.k(0,d,l)}B.a.K(l.d,A.d([m,k,j],p))}r=A.d([],t.wf)
q=s.$ti.i("an<2>")
q=A.J(new A.an(s,q),q.i("t.E"))
B.a.Z(q,new A.yF())
p=q.length
c=0
for(;c<q.length;q.length===p||(0,A.r)(q),++c)r.push(q[c].q6(a))
return r},
IO(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=1/0,q=1/0,p=1/0,o=-1/0,n=-1/0,m=-1/0,l=0;l<s;++l){k=a[l]
j=k.a
r=r<j?r:j
i=k.b
q=q<i?q:i
h=k.c
p=p<h?p:h
o=o>j?o:j
n=n>i?n:i
m=m>h?m:h}return new A.lc(r,q,p,o,n,m)},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
zM:function zM(a){this.a=a},
yF:function yF(){},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fi:function fi(a,b){this.a=a
this.b=b},
le:function le(){},
KH(a){var s,r,q,p=new A.qV(A.d([],t.Dl),A.d([],t.t),A.n(t.N,t.S))
for(s=0;s<4;++s)A.J9(p,a,B.a_[s],15.75,15.75,12.044999999999998,0.63)
p.E(2,15.81,4.08,0.04,-0.06,3.96,-0.05)
p.E(2,15.81,4.08,15.8,-0.06,3.96,15.71)
p.E(2,0.04,4.08,15.79,-0.05,3.96,-0.04)
p.E(2,15.8,4.08,15.79,15.71,3.96,-0.04)
p.E(1,16.25,0,-0.08,-0.5,-0.35,-0.5)
p.E(1,16.25,0,16.25,-0.5,-0.35,15.83)
p.E(1,-0.08,0,15.83,-0.5,-0.35,-0.08)
p.E(1,16.25,0,15.83,15.83,-0.35,-0.08)
r=new A.a9(-0.42,12.044999999999998,-0.42,0.86,0.51,-0.04,0,0,4)
q=new A.a9(7.875,16.32,16.17,0.86,0.51,-0.04,0.5,1,4)
p.aC(r,new A.a9(7.875,16.32,-0.42,0.86,0.51,-0.04,0.5,1,4),q)
p.aC(r,q,new A.a9(-0.42,12.044999999999998,16.17,0.86,0.51,-0.04,0,0,4))
q=new A.a9(7.875,16.32,-0.42,-0.86,0.51,-0.04,0.5,1,4)
r=new A.a9(16.17,12.044999999999998,16.17,-0.86,0.51,-0.04,1,0,4)
p.aC(q,new A.a9(16.17,12.044999999999998,-0.42,-0.86,0.51,-0.04,1,0,4),r)
p.aC(q,r,new A.a9(7.875,16.32,16.17,-0.86,0.51,-0.04,0.5,1,4))
p.E(5,7.995,16.44,16.17,7.755,16.2,-0.42)
p.aC(new A.a9(0,12.044999999999998,-0.633,0,0,-1,0,0,0),new A.a9(7.875,16.32,-0.633,0,0,-1,0.5,1,0),new A.a9(15.75,12.044999999999998,-0.633,0,0,-1,1,0,0))
p.aC(new A.a9(0,12.044999999999998,16.383,0,0,1,0,0,0),new A.a9(15.75,12.044999999999998,16.383,0,0,1,1,0,0),new A.a9(7.875,16.32,16.383,0,0,1,0.5,1,0))
r=new A.a9(0,12.044999999999998,-0.633,-1,0,0,0,0,0)
q=new A.a9(7.875,16.32,16.383,-1,0,0,1,1,0)
p.aC(r,new A.a9(0,12.044999999999998,16.383,-1,0,0,1,0,0),q)
p.aC(r,q,new A.a9(7.875,16.32,-0.633,-1,0,0,0,1,0))
q=new A.a9(7.875,16.32,-0.633,1,0,0,0,1,0)
r=new A.a9(15.75,12.044999999999998,16.383,1,0,0,1,0,0)
p.aC(q,new A.a9(7.875,16.32,16.383,1,0,0,1,1,0),r)
p.aC(q,r,new A.a9(15.75,12.044999999999998,-0.633,1,0,0,0,0,0))
A.K4(p,15.75,15.75,12.044999999999998,16.32)
A.IS(p,15.75,15.75,16.32)
A.J5(p,15.75,15.75,12.044999999999998)
A.Jd(p,a,15.75)
A.Kb(p,15.75,15.75)
A.IN(p,15.75)
return p.mK()},
J9(b5,b6,b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=A.d([],t.il)
for(s=b6.b,r=s.length,q=B.au!==b7,p=B.F!==b7,o=B.I===b7,n=B.av===b7,m=b7.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=b6.a1(k)
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
B.a.l(b4,new A.eX(b,b+c.e,a,a+c.f,!1))}for(i=k.a,h=b6.aR(i),b=J.P(h.a),h=new A.R(b,h.b,h.$ti.i("R<1>"));h.m();){a=b.gp()
if(!a.Q||a.aY(i)!==b7)continue
B:{if(!p||o){a0=g+a.aQ(i)
break B}if(!q||n){a0=e+a.aQ(i)
break B}a0=null}B.a.l(b4,new A.eX(a0,a0+a.w,f,f+a.x,!0))}}s=b7===B.F||b7===B.I?b8:b9
r=t.i
a1=A.aR([0,s],r)
a2=A.aR([0,c0],r)
for(s=b4.length,l=0;l<b4.length;b4.length===s||(0,A.r)(b4),++l){a3=b4[l]
a1.l(0,a3.a)
a1.l(0,a3.b)
a2.l(0,a3.c)
a2.l(0,a3.d)}a4=A.J(a1,a1.$ti.c)
B.a.a7(a4)
a5=A.J(a2,a2.$ti.c)
B.a.a7(a5)
for(s=b8+c1,r=-c1,q=b9+c1,a6=0;a7=a6+1,a7<a4.length;a6=a7)for(a8=0;a9=a8+1,p=a5.length,a9<p;a8=a9){o=a4.length
if(!(a6<o))return A.e(a4,a6)
b0=a4[a6]
if(!(a7<o))return A.e(a4,a7)
b1=a4[a7]
if(!(a8<p))return A.e(a5,a8)
b2=a5[a8]
b3=a5[a9]
if(B.a.R(b4,new A.ye(b0,b1,b2,b3)))continue
switch(m){case 0:b5.E(0,b1,b3,0,b0,b2,r)
break
case 2:b5.E(0,b1,b3,q,b0,b2,b9)
break
case 3:b5.E(0,0,b3,b1,r,b2,b0)
break
case 1:b5.E(0,s,b3,b1,b8,b2,b0)
break}}A.Jc(b5,b4,b7,b8,b9,c1)
A.Ja(b5,b4,b7,b8,b9,c1)
A.Jb(b5,b4,b7,b8,b9,c0,c1)},
Jb(a2,a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.aR([0,a4===B.F||a4===B.I?a5:a6],t.i)
for(s=a3.length,r=0;r<a3.length;a3.length===s||(0,A.r)(a3),++r){q=a3[r]
a1.l(0,q.a)
a1.l(0,q.b)}p=A.J(a1,a1.$ti.c)
B.a.a7(p)
for(s=a4.a,o=a5+a8,n=o-0.004,o+=0.026,m=-a8,l=m-0.026,m+=0.004,k=a6+a8,j=k-0.004,k+=0.026,i=a7-0.28,h=0;h<5;++h){g=0.68+h*0.72
if(g>i)continue
for(f=g-0.018,e=g+0.018,d=0;c=d+1,b=p.length,c<b;d=c){if(!(d<b))return A.e(p,d)
a=p[d]+0.012
a0=p[c]-0.012
if(a0-a<0.08||B.a.R(a3,new A.yd(a,a0,g)))continue
switch(s){case 0:a2.E(1,a0,e,m,a,f,l)
break
case 2:a2.E(1,a0,e,k,a,f,j)
break
case 3:a2.E(1,m,e,a0,l,f,a)
break
case 1:a2.E(1,o,e,a0,n,f,a)
break}}}},
Ja(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
break}}if(a5!==B.F)return
for(s=a6-0.1,r=o+0.02,a0=0;a0<10;++a0){a1=0.28+a0*0.72
a2=(a0&1)===0?0.02:0.1
for(q=[-0.08,s],p=o-a2,n=a1+0.28,g=0;g<2;++g){a=q[g]
a3.E(2,a+0.18,n,r,a,a1,p)}}},
Jc(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
break}if(!f)A.K9(a2,g,a4,a5,a6,a7,q)}},
K9(a,b,c,d,e,f,g){var s,r,q=b.a,p=b.b,o=(q+p)*0.5,n=b.c,m=b.d,l=(n+m)*0.5
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
K4(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=c+0.42,r=[-0.44999999999999996,s-0.09],q=d-0.14,p=b+0.42,o=d+0.02,n=0;n<2;++n){m=r[n]
a.E(3,p,o,m+0.12,-0.42,q,m)}for(r=[-0.43,s-0.06],q=b*0.5,p=q-0.16,o=e-0.16,q+=0.16,l=e-0.05,n=0;n<2;++n){m=r[n]
a.E(5,q,l,m+0.12,p,o,m)}for(r=b+0.84,q=d-0.025,p=d+0.015,o=s-0.04,s+=0.02,k=0;k<12;){j=-0.42+k*r/12;++k
i=-0.42+k*r/12-0.015
a.E(4,i,p,-0.38,j,q,-0.44)
a.E(4,i,p,s,j,q,o)}A.K5(a,b,c,d,e,0.42)
for(s=[b*0.25,b*0.75],r=e-0.63,q=c*0.14,p=e-0.56,o=c*0.32,n=0;n<2;++n){h=s[n]
a.E(5,h+0.5,p,o,h-0.5,r,q)}},
K5(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=-f,k=b*0.5,j=b+f,i=l+0.18,h=c+2*f-0.36
for(s=d+0.014,r=e+0.014,q=0;q<10;){p=i+h*q/10;++q
o=i+h*q/10-0.018
n=new A.a9(l,s,p,0.86,0.51,-0.04,0,0,4)
m=new A.a9(k,r,o,0.86,0.51,-0.04,0.5,1,4)
a.aC(n,new A.a9(k,r,p,0.86,0.51,-0.04,0.5,1,4),m)
a.aC(n,m,new A.a9(l,s,o,0.86,0.51,-0.04,0,0,4))
m=new A.a9(k,r,p,-0.86,0.51,-0.04,0.5,1,4)
n=new A.a9(j,s,o,-0.86,0.51,-0.04,1,0,4)
a.aC(m,new A.a9(j,s,p,-0.86,0.51,-0.04,1,0,4),n)
a.aC(m,n,new A.a9(k,r,o,-0.86,0.51,-0.04,0.5,1,4))}},
IS(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=[b*0.25,b*0.75],r=a0+1.28,q=c*0.18,p=q+0.03,o=a0+1.72,n=c*0.28,m=n-0.03,l=a0-0.6,k=a0+1.15,j=c*0.14,i=c*0.32,h=0;h<2;++h){g=s[h]
a.E(0,g+0.35,k,n,g-0.35,l,q)
a.E(5,g+0.47,r,i,g-0.47,k,j)
for(f=[-0.2,0.2],e=0;e<2;++e){d=g+f[e]
a.E(5,d+0.1,o,m,d-0.1,r,p)}}},
J5(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=[-0.48,a1+0.48],r=a2-0.16,q=a0+0.1,p=0;p<2;++p){o=s[p]
a.E(6,q,a2,o+0.08,-0.1,r,o-0.08)}for(s=[0,a0],r=a1+0.52,p=0;p<2;++p){n=s[p]
for(q=[-0.52,r],m=n-0.1,l=n+0.1,k=n-0.11,j=n+0.11,i=n-0.07,h=n+0.07,g=0;g<2;++g){o=q[g]
a.E(6,h,a2,o+0.07,i,0,o-0.07)
for(f=[2,4,6],e=o-0.11,d=o+0.11,c=0;c<3;++c){b=f[c]
a.E(6,j,b+0.06,d,k,b,e)}a.E(6,l,0.1,o+0.13,m,-0.1,o-0.13)}}},
Jd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b.e.h(0,"hall")
i.toString
s=b.f.h(0,"front-door")
r=i.d.a+s.aQ("hall")
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
Kb(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+0.1
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
IN(a,b){var s,r
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
ye:function ye(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yd:function yd(a,b,c){this.a=a
this.b=b
this.c=c},
Lb(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=A.Bc(b,d,c)
if(k!=null){s=k.b
return new A.eE(B.hg,k.a,s)}r=A.Ey(b,d,c)
if(r!=null){s=r.ax&&!r.ay&&!r.z?"close door":"open door"
return new A.eE(B.hh,r.a,s)}if(A.Ez(b,d,c)!=null)return B.hl
q=A.La(a,b,c,d)
if(q!=null)return new A.eE(B.d0,q.a,"inspect the "+q.b)
p=A.Ex(b,c,d,e)
if(p!=null){o=e.bW(p.c)
n=p.y
m=n==null
l=m?p.a:n
return new A.eE(B.hj,l,m?"inspect the "+o.b:"inspect "+n)}return B.hm},
Ex(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(a6==null)return null
s=a5.e.h(0,a4)
if(s==null)return null
r=A.o2(a5,s,4.5)
for(q=a6.iY(a4),p=J.P(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>")),o=a6.c,n=s.d,m=n.a,l=n.b,n=n.c,k=null,j=1/0;q.m();){i=p.gp()
if(!i.x)continue
h=a6.bW(i.c)
g=i.f.a
f=i.fe(h,o)
e=m+(g.a*o+0)
d=l+(g.b*o+(f.a+f.b)*0.5)
g=n+(g.c*o+0)
c=a3.a
b=new A.a(e-c.a,d-c.b,g-c.c)
a=b.gu(0)
if(a<0.01||a>r)continue
c=b.ga5()
a0=a3.b
a1=Math.acos(B.b.n(c.a*a0.a+c.b*a0.b+c.c*a0.c,-1,1))
if(a1>0.5236)continue
if(!A.o4(a5,a4,a3.a,new A.a(e,d,g)))continue
a2=a1+a/r*0.2
if(a2<j){j=a2
k=i}}return k},
La(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=d.e.h(0,c)
if(e==null)return f
s=a.jn(c)
if(s.length===0)return f
r=d.a1(e)
q=A.o2(d,e,4.5)
for(p=s.length,o=e.d,n=o.a+r.a*0.35,m=o.b+0.6,o=o.c+r.c*0.35,l=0;l<s.length;s.length===p||(0,A.r)(s),++l){k=s[l]
j=b.a
i=new A.a(n-j.a,m-j.b,o-j.c)
h=i.gu(0)
if(h<0.01||h>q)continue
g=i.ga5()
j=b.b
if(Math.acos(B.b.n(g.a*j.a+g.b*j.b+g.c*j.c,-1,1))<=0.5236&&A.o4(d,c,b.a,new A.a(n,m,o)))return k}return f},
dL:function dL(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
H8(a,b,c,d){return new A.ji(c,a,d,b)},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.y=i
_.z=j
_.Q=k
_.as=l},
qO:function qO(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.x=_.w=_.r=null
_.y=f},
rb:function rb(a){this.a=a},
qS:function qS(a){this.a=a},
n4:function n4(a){this.a=a},
o2(a,b,c){var s=a.a1(b),r=s.a,q=s.c
return Math.min(c,Math.sqrt(r*r+q*q))},
o4(a,b,c,d){var s=a.e.h(0,b)
if(s==null)return!1
return!A.JC(a,s,c,d)},
JC(a,b,c,d){var s,r,q,p,o=a.a1(b),n=d.a_(0,c),m=n.gu(0)
if(m<0.000001)return!1
s=b.d
r=s.c
q=c.c
p=d.c
if(A.xr(a,b,o,B.F,r,q,p,c,n,m))return!0
if(A.xr(a,b,o,B.I,r+o.c,q,p,c,n,m))return!0
s=s.a
r=c.a
q=d.a
if(A.xr(a,b,o,B.av,s,r,q,c,n,m))return!0
if(A.xr(a,b,o,B.au,s+o.a,r,q,c,n,m))return!0
return!1},
xr(a,b,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=a4-a3
if(Math.abs(c)<0.000001)return!1
s=(a2-a3)/c
if(s<=0.002||s>=0.998)return!1
r=a5.T(0,a6.a6(0,s))
q=r.b
p=b.d
o=p.b
if(q<o-0.05||q>o+a0.b+0.05)return!1
n=a1===B.F||a1===B.I
if(n){m=r.a
l=p.a
if(m<l-0.05||m>l+a0.a+0.05)return!1}else{m=r.c
l=p.c
if(m<l-0.05||m>l+a0.c+0.05)return!1}for(m=b.a,l=a.aR(m),k=J.P(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>")),j=r.c-p.c,i=r.a-p.a,h=q-o;l.m();){q=k.gp()
if(q.aY(m)===a1){g=q.aQ(m)
f=n?i:j
if(f>=g-0.05&&f<=g+q.w+0.05)if(h>=-0.05&&h<=q.x+0.05)if(q.ax&&!q.ay&&!q.z)return!1
else return!0}}for(q=b.e,p=q.length,e=0;e<p;++e){d=q[e]
if(d.b===a1){f=n?i:j
o=d.c
if(f>=o-0.05&&f<=o+d.e+0.05){o=d.d
if(h>=o-0.05&&h<=o+d.f+0.05)if(d.w)return!1
else return!0}}}return!0},
Bc(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a0.e.h(0,a1)
if(b==null)return null
s=A.o2(a0,b,4.5)
for(r=b.r,q=r.length,p=b.d,o=p.a,n=p.b,p=p.c,m=s,l=null,k=0;k<r.length;r.length===q||(0,A.r)(r),++k){j=r[k]
i=j.c
h=o+i.a
g=n+i.b
i=p+i.c
f=a.a
e=new A.a(h-f.a,g-f.b,i-f.c)
d=e.gu(0)
if(d<0.01||d>s)continue
c=e.ga5()
f=a.b
if(Math.acos(B.b.n(c.a*f.a+c.b*f.b+c.c*f.c,-1,1))<=0.5236&&d<m){if(!A.o4(a0,a1,a.a,new A.a(h,g,i)))continue
m=d
l=j}}return l},
Ey(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.e.h(0,c),i=j!=null?A.o2(b,j,4.5):4.5
for(s=b.aR(c),r=J.P(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>")),q=i,p=null;s.m();){o=r.gp()
n=b.pn(c,o)
m=a.a
l=new A.a(n.a-m.a,n.b-m.b,n.c-m.c)
k=l.gu(0)
if(!A.DI(l,k,a,i,0.5236)||k>=q)continue
if(!A.o4(b,c,a.a,n))continue
q=k
p=o}return p},
Ez(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.e.h(0,c)
if(h==null)return null
s=A.o2(b,h,4.5)
for(r=h.e,q=r.length,p=s,o=null,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
l=A.Kz(b,h,m)
k=a.a
j=new A.a(l.a-k.a,l.b-k.b,l.c-k.c)
i=j.gu(0)
if(!A.DI(j,i,a,s,0.5236)||i>=p)continue
if(!A.o4(b,c,a.a,l))continue
p=i
o=m}return o},
DI(a,b,c,d,e){if(b<0.01||b>d)return!1
return Math.acos(B.b.n(a.ga5().bj(c.b),-1,1))<=e},
Kz(a,b,c){var s=a.a1(b),r=c.c+c.e*0.5,q=b.d,p=q.b+c.d+c.f*0.5
switch(c.b.a){case 0:q=new A.a(q.a+r,p,q.c)
break
case 2:q=new A.a(q.a+r,p,q.c+s.c)
break
case 1:q=new A.a(q.a+s.a,p,q.c+r)
break
case 3:q=new A.a(q.a,p,q.c+r)
break
default:q=null}return q},
q_:function q_(){this.a=null
this.b=0},
vc:function vc(){},
vd:function vd(){},
Gn(a){var s,r,q=A.km(a,"inventory asset"),p=A.d6(q,"id"),o=A.d6(q,"kind")
A.d6(q,"source")
A.d6(q,"proxy")
A.d6(q,"pivot")
s=q.h(0,"status")
r=A.d6(q,"id")
if(s==null)s="proxy"
if(typeof s!="string"||!A.aR(["production","proxy","invisible-anchor"],t.N).q(0,s))A.h(A.M("invalid inventory asset status "+r+": "+A.z(s),null,null))
q=A.km(q.h(0,"bounds"),"inventory bounds")
return new A.di(p,o,s,new A.rj(A.nZ(q.h(0,"min"),"bounds.min"),A.nZ(q.h(0,"max"),"bounds.max")))},
Gp(a6){var s,r,q,p,o,n,m,l,k,j,i="stateKey",h=A.km(a6,"inventory placement"),g=A.km(h.h(0,"visibility"),"placement visibility"),f=A.km(h.h(0,"interaction"),"placement interaction"),e=h.h(0,"clearance"),d=h.h(0,"thermal"),c=t.P,b=c.b(d)?d:B.dP,a=h.h(0,"physics"),a0=c.b(a)?a:B.dP,a1=A.d6(h,"id"),a2=A.d6(h,"roomId"),a3=A.d6(h,"assetId"),a4=A.d6(h,"role"),a5=typeof h.h(0,"socket")=="string"?A.x(h.h(0,"socket")):null
h=A.km(h.h(0,"transform"),"inventory transform")
s=A.nZ(h.h(0,"scale"),"transform.scale")
if(s.a<=0||s.b<=0||s.c<=0)A.h(B.ij)
r=A.nZ(h.h(0,"position"),"transform.position")
q=A.nZ(h.h(0,"rotation"),"transform.rotation")
p=A.d6(g,"layer")
if(typeof g.h(0,i)=="string")A.x(g.h(0,i))
o=J.ab(f.h(0,"pickable"),!0)
n=typeof f.h(0,"focusId")=="string"?A.x(f.h(0,"focusId")):null
c=c.b(e)?A.f3(e,"radius"):0
m=b.gN(b)?0:A.f3(b,"heatOutputWatts")
l=b.gN(b)?0:A.f3(b,"surfaceTemperatureCelsius")
k=b.gN(b)?0:A.f3(b,"radiusM")
if(b.gN(b))j=0
else j=typeof b.h(0,"offsetY")=="number"?A.a4(b.h(0,"offsetY")):0
return new A.cU(a1,a2,a3,a4,a5,new A.rl(r,q,s),p,o,n,c,m,l,k,j,A.Go(a0))},
Go(a){if(a.gN(a))return B.kj
return new A.lB(A.d6(a,"bodyType"),A.f3(a,"massKg"),A.f3(a,"volumeM3"),A.f3(a,"densityKgM3"),A.f3(a,"friction"),A.f3(a,"restitution"),J.ab(a.h(0,"collision"),!0))},
km(a,b){return t.P.b(a)?a:A.eg(b+" is not an object")},
d6(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.eg(b+" is not a string")},
f3(a,b){var s=a.h(0,b)
return typeof s=="number"&&isFinite(s)?s:A.eg(b+" is not finite")},
nZ(a,b){var s
if(t.j.b(a)){s=J.aW(a)
s=s.gu(a)!==3||s.R(a,new A.yM())}else s=!0
if(s)return A.eg(b+" is not a finite vec3")
s=J.aW(a)
return new A.a(A.a4(s.h(a,0)),A.a4(s.h(a,1)),A.a4(s.h(a,2)))},
eg(a){return A.h(A.M(a,null,null))},
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
lB:function lB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rl:function rl(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(a,b){this.a=a
this.b=b},
yM:function yM(){},
rk:function rk(a){this.a=a},
dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
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
GJ(a){var s
if(B.bO.M(a)){s=B.bO.h(0,a)
s.toString
return s}A:{if("living-room"===a){s="livingRoom"
break A}if("spare-room"===a){s="spareRoom"
break A}if("rear-service"===a){s="cellar"
break A}s=a
break A}s=B.bO.h(0,s)
return s==null?A.d([],t.W):s},
GI(a,b){var s,r,q,p,o,n,m,l,k=A.GJ(a),j=k.length
if(j===0)return b
for(s=0,r=0,q=0,p=0;p<j;++p){o=k[p].e
s+=o.c
r+=o.b
q+=o.a}n=B.b.n(0.35,0,0.8)
m=1-n
o=B.b.n(b.c*m+s/j*n,0,1)
l=B.b.n(b.b*m+r/j*n,0,1)
return new A.aU(B.b.n(b.a*m+q/j*n,0,1),l,o)},
cA:function cA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
A2(a,b,c,d){return new A.lM(a,d,c,b)},
eD:function eD(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
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
lM:function lM(a,b,c,d){var _=this
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
c6:function c6(){},
Gh(a){return A.Gg(a)},
Gg(a){var s,r,q,p,o,n,m=A.DQ(a,"sound emitter"),l=t.N,k=A.n(l,l)
for(s=A.DQ(m.h(0,"cues"),"sound emitter cues").gO(),s=s.gA(s);s.m();){r=s.gp()
q=r.b
if(typeof q!="string"||q.length===0)throw A.b(B.ib)
k.k(0,r.a,q)}s=A.AZ(m,"id")
r=A.AZ(m,"roomId")
p=A.AZ(m,"placementId")
o=A.Kw(m.h(0,"position"),"sound emitter position")
q=m.h(0,"gain")
n=typeof q=="number"?q:A.i3("gain is not a number")
return new A.dh(s,r,p,o,n,A.aZ(k,l,l))},
DQ(a,b){return t.P.b(a)?a:A.i3(b+" is not an object")},
AZ(a,b){var s=a.h(0,b)
return typeof s=="string"&&s.length!==0?s:A.i3(b+" is not a string")},
Kw(a,b){var s
if(t.j.b(a)){s=J.aW(a)
s=s.gu(a)!==3||s.R(a,new A.yL())}else s=!0
if(s)throw A.b(A.M(b+" must be a numeric vec3",null,null))
s=J.aW(a)
return new A.a(A.a4(s.h(a,0)),A.a4(s.h(a,1)),A.a4(s.h(a,2)))},
i3(a){return A.h(A.M(a,null,null))},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(a){this.a=a},
r6:function r6(a){this.a=a},
r7:function r7(){},
r8:function r8(){},
dh:function dh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qT:function qT(){this.b=this.a=null},
fn:function fn(a,b){this.a=a
this.b=b},
r3:function r3(){this.b=this.a=null},
dg:function dg(a,b){this.a=a
this.b=b},
yL:function yL(){},
BP(a,b,c,d,e,f){var s=t.N
return new A.r9(e,f,c,a,A.aZ(A.b5(d,s,s),s,s),A.ad(b,s))},
BQ(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.n(i,t.DL)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
h.k(0,p.a,new A.j3(p.ax,p.ay))}s=A.n(i,t.y)
for(r=a.b,o=r.length,q=0;n=r.length,q<n;r.length===o||(0,A.r)(r),++q)for(n=r[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
s.k(0,k.a,k.w)}i=A.n(i,t.m2)
for(q=0;q<r.length;r.length===n||(0,A.r)(r),++q)for(o=r[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l){j=o[l]
i.k(0,j.a,new A.iP(j.d,j.r))}return A.BP(a.y.b,B.o,i,B.aX,h,s)},
Gi(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a3.h(0,"portals"),a0=a3.h(0,"windows"),a1=a3.h(0,"mantles"),a2=a3.h(0,"driftLandedCount")
if(a2==null)a2=0
s=a3.h(0,"overrides")
if(s==null)s=B.mD
r=a3.h(0,"mantleHistory")
if(r==null)r=B.bG
q=t.f
if(!q.b(a)||!q.b(a0)||!q.b(a1)||!A.b7(a2)||!q.b(s)||!t.j.b(r))throw A.b(B.i8)
p=t.N
o=A.n(p,t.DL)
for(n=a.gO(),n=n.gA(n),m=t.z;n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.d3)
l=A.b5(q.a(l.b),p,m)
j=l.h(0,"open")
i=l.h(0,"locked")
if(!A.bE(j)||!A.bE(i))A.h(B.d3)
o.k(0,k,new A.j3(j,i))}h=A.n(p,t.y)
for(n=a0.gO(),n=n.gA(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!A.bE(l.b))throw A.b(B.i4)
h.k(0,k,A.U(l.b))}g=A.n(p,t.m2)
for(n=a1.gO(),n=n.gA(n);n.m();){l=n.gp()
k=l.a
if(typeof k!="string"||!q.b(l.b))throw A.b(B.d1)
l=A.b5(q.a(l.b),p,m)
f=l.h(0,"lit")
e=l.h(0,"examined")
if(!A.bE(f)||!A.bE(e))A.h(B.d1)
g.k(0,k,new A.iP(f,e))}d=A.n(p,p)
for(q=s.gO(),q=q.gA(q);q.m();){p=q.gp()
n=p.a
if(typeof n!="string"||typeof p.b!="string")throw A.b(B.j7)
d.k(0,n,A.x(p.b))}c=A.d([],t.s)
for(q=J.P(r);q.m();){b=q.gp()
if(typeof b!="string"||b.length===0)throw A.b(B.hn)
B.a.l(c,b)}return A.BP(a2,c,g,d,o,h)},
AU(a,b){return a.a.a===b.a&&a.a8(0,b.gaJ(b))},
r9:function r9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j3:function j3(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
ra(a){var s=B.bM.h(0,a)
if(s==null)throw A.b(A.i("Unknown house surface material: "+a))
return s},
aH:function aH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
FX(a,b,c,d,e){var s,r,q,p=null
if(c<0)s=0
else s=c>3?3:c
r=A.hw(e,A.C(e).c)
q=new A.eY()
q.ck((d^31337+b*7919)>>>0)
switch(b){case 1:return
case 2:A.iy(a,q,2,r,1+s,A.aR(["time"],t.N))
break
case 3:A.iy(a,q,3,r,1+s,A.aR(["place"],t.N))
break
case 4:A.iy(a,q,4,r,2+s,p)
A.FT(a,q,4)
break
case 5:A.iy(a,q,5,r,s,p)
A.FR(a,q,5)
break
case 6:A.iy(a,q,6,r,s,p)
A.FS(a,q)
A.FW(a,q,6)
break
case 7:A.FU(a,q,7)
break
default:if(s>0)A.iy(a,q,b,r,s,p)}},
FQ(a,b,c,d){var s
if(b.f===c)return!1
s=b.d!=null
if(s&&b.e)return!1
if(s&&d.q(0,b.a))return!1
if(A.FV(a,b,c))return!1
return!0},
iy(a,b,c,d,e,f){var s,r,q,p,o=A.d([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));s.m();){r=s.d
if(A.FQ(a,r,c,d))o.push(r)}if(o.length===0)return
B.a.e2(o,b)
q=o.length
if(e<q)q=e
for(p=0;p<q;++p){if(!(p<o.length))return A.e(o,p)
A.BI(a,b,o[p],f)}},
BI(a,b,c,d){var s,r,q,p,o=c.c,n=t.N,m=A.b5(B.a.gac(o).a,n,n)
if(d==null)s=A.d(B.G.slice(0),t.s)
else{n=t.vY
s=A.J(new A.F(B.G,t.Ag.a(new A.pV(d)),n),n.i("t.E"))}n=s.length
if(n===0)return
n=b.b1(n)
if(!(n>=0&&n<s.length))return A.e(s,n)
r=s[n]
q=m.h(0,r)
if(q==null)q=""
p=a.a.fD(r,q)
n=p.length
if(n===0)m.k(0,r,q)
else{n=b.b1(n)
if(!(n>=0&&n<p.length))return A.e(p,n)
m.k(0,r,p[n])}a.eD(c.a,m,B.a.gac(o).b)},
FT(a,b,c){var s=A.BJ(a,b,c)
if(!a.ct(s))return
a.fP(c,t.G.a(s),0,B.bs,null)},
BJ(a,b,c){var s,r,q,p,o,n=t.N,m=A.n(n,n)
for(n=a.a.a,s=0;s<5;++s){r=B.G[s]
q=n.h(0,r)
if(q==null)q=B.o
p=q.length
if(p===0)m.k(0,r,"")
else{o=b.b1(p)
if(!(o>=0&&o<p))return A.e(q,o)
m.k(0,r,q[o])}}return m},
FR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));s.m();){r=s.d
if(r.b<c&&!r.e)i.push(r)}if(i.length<2)return
B.a.e2(i,b)
s=i.length
if(0>=s)return A.e(i,0)
q=i[0]
if(1>=s)return A.e(i,1)
p=i[1]
i=q.c
s=t.N
o=A.b5(B.a.gac(i).a,s,s)
r=p.c
n=A.b5(B.a.gac(r).a,s,s)
for(s=a.a,m=0;m<5;++m){l=B.G[m]
k=o.h(0,l)
j=s.fD(l,k==null?"":k)
k=j.length
if(k!==0){k=b.b1(k)
if(!(k>=0&&k<j.length))return A.e(j,k)
o.k(0,l,j[k])}}a.eD(q.a,o,B.a.gac(i).b)
a.eD(p.a,n,B.a.gac(r).b)},
FS(a,b){var s,r,q=A.d([],t.U)
for(s=a.b,r=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));r.m();)q.push(r.d)
r=q.length
if(r===0)return
r=b.b1(r)
if(!(r>=0&&r<q.length))return A.e(q,r)
s.aa(0,q[r].a)},
FW(a,b,c){var s,r,q=A.d([],t.U)
for(s=a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));s.m();){r=s.d
if(r.e)q.push(r)}s=q.length
if(s===0)return
s=b.b1(s)
if(!(s>=0&&s<q.length))return A.e(q,s)
A.BI(a,b,q[s],null)},
FU(a,b,c){var s=c+1,r=A.BJ(a,b,s)
if(!a.ct(r))return
a.fP(s,t.G.a(r),0,B.bs,null)},
FV(a,b,c){var s
if(c===7){s=b.b
return s>=1&&s<=6&&B.a.gac(b.c).c===B.aU}if(c===14){s=b.b
return s>=1&&s<=13&&B.a.gac(b.c).c===B.aU}if(c===21)return b.e
return!1},
pV:function pV(a){this.a=a},
HA(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=0;s<5;++s){r=B.G[s]
q=a.h(0,r)
p=A.aI(q==null?B.o:q,!1,o)
p.$flags=3
n.k(0,r,p)}return new A.vX(n)},
rE(a,b,c){var s,r,q,p=t.z
p=A.n(p,p)
for(s=0;s<5;++s){r=B.G[s]
q=a.h(0,r)
p.k(0,r,q==null?"":q)}q=t.N
return new A.lK(A.aZ(p,q,q),b,c)},
C_(a){var s=t.N
return A.rE(t.P.a(a.h(0,"fields")).bn(0,new A.rF(),s,s),A.a4(a.h(0,"shakiness")),A.G1(B.ll,A.x(a.h(0,"hand")),t.qX))},
G0(a){var s,r,q,p,o=a.h(0,"margin"),n=A.j(a.h(0,"ordinal")),m=A.j(a.h(0,"day")),l=A.d([],t.Bv)
for(s=J.P(t.j.a(a.h(0,"revisions"))),r=t.P;s.m();)l.push(A.C_(r.a(s.gp())))
s=A.as(a.h(0,"corroborator"))
q=A.U(a.h(0,"locked"))
p=A.As(a.h(0,"lastReadDay"))
return new A.ce(n,m,l,s,q,p,o==null?null:A.C_(r.a(o)))},
eF:function eF(a,b){this.a=a
this.b=b},
vX:function vX(a){this.a=a},
lK:function lK(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(){},
rG:function rG(a){this.a=a},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
BX(a){return new A.rp(a,A.n(t.S,t.g),A.a1(t.N),A.d([],t.t))},
Gu(a,b){var s,r,q,p,o=A.BX(a)
o.e=A.j(b.h(0,"nextOrdinal"))
o.f=A.j(b.h(0,"locksRemaining"))
s=t.j
o.c.K(0,J.Fd(s.a(b.h(0,"tags")),t.N))
for(s=J.P(s.a(b.h(0,"entries"))),r=t.P,q=o.b;s.m();){p=A.G0(r.a(s.gp()))
q.k(0,p.a,p)}return o},
rp:function rp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=1
_.f=4},
rw:function rw(a,b){this.a=a
this.b=b},
io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
pg:function pg(){},
GO(a){var s,r,q,p,o,n,m,l,k=B.f.am(a,null),j=t.f
if(!j.b(k)||!J.ab(k.h(0,"schema"),"quarantine-promoted-models-v1"))throw A.b(B.hs)
s=k.h(0,"entries")
if(!t.j.b(s))throw A.b(B.iM)
r=A.d([],t.d8)
for(q=J.P(s);q.m();){p=q.gp()
if(j.b(p)){o=A.as(p.h(0,"assetId"))
if(o==null)o=""
n=A.as(p.h(0,"licenseId"))
if(n==null)n=""
m=A.as(p.h(0,"manifestPath"))
if(m==null)m=""
l=A.as(p.h(0,"sourceFormat"))
r.push(new A.j5(o,n,m,l==null?"":l))}else r.push(A.h(B.ip))}return new A.tF(A.GP(r))},
GP(a){var s,r,q,p,o,n=null,m=t.N,l=t.rx,k=A.n(m,l)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.jc("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("promoted model index ID is invalid: "+o,n,n))
if(k.M(o))throw A.b(A.M("duplicate promoted model index ID: "+o,n,n))
p=q.b
if(B.c.aS(p).length===0||p==="unknown"||p==="unlicensed")throw A.b(A.M("promoted model index rights are unknown: "+o,n,n))
if(!A.aR(["obj","gltf","glb","fbx"],m).q(0,q.d))throw A.b(A.M("promoted model index source format is invalid: "+o,n,n))
if(!A.K8(q.c))throw A.b(A.M("promoted model index manifest path is unsafe: "+o,n,n))
k.k(0,o,q)}return A.aZ(k,m,l)},
K8(a){if(a.length===0||B.c.Y(a,"/")||B.c.q(a,"://"))return!1
if(B.c.bk(a.toLowerCase(),".obj")||B.c.bk(a.toLowerCase(),".mtl")||B.c.bk(a.toLowerCase(),".fbx"))return!1
return B.a.a8(A.d(a.split("/"),t.s),new A.yB())},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tF:function tF(a){this.a=a},
yB:function yB(){},
Ca(a){var s,r,q,p,o,n,m,l,k,j=null,i=t.N,h=t.c_,g=A.n(i,h)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.jc("^[a-z0-9]+(?:-[a-z0-9]+)*$")
o=q.a
if(!p.b.test(o))throw A.b(A.M("asset ID is not stable kebab-case: "+o,j,j))
if(g.M(o))throw A.b(A.M("duplicate promoted asset ID: "+o,j,j))
p=q.c
n=p.a
if(n.b!==o)throw A.b(A.M("package asset ID mismatch: "+o,j,j))
m=q.b
if(B.c.aS(m).length===0||m==="unknown"||m==="unlicensed")throw A.b(A.M("package rights are not identified: "+o,j,j))
if(n.z.h(0,"promotion")!=="approved")throw A.b(A.M("package is not approved: "+o,j,j))
l=A.ED(n)
if(l.length!==0)throw A.b(A.M("package manifest is invalid for "+o+": "+B.a.bB(l,new A.tH(),i).a0(0,"; "),j,j))
p=p.b
k=A.Lq(n,p)
if(k.length!==0)throw A.b(A.M("package payloads are invalid for "+o+": "+B.a.bB(k,new A.tI(),i).a0(0,"; "),j,j))
if(A.C6(n,p)!==n.c)throw A.b(A.M("package hash mismatch: "+o,j,j))
g.k(0,o,q)}return A.aZ(g,i,h)},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
m8:function m8(a){this.a=a},
tH:function tH(){},
tI:function tI(){},
tz:function tz(){},
ty:function ty(a,b,c){this.b=a
this.c=b
this.d=c},
tA:function tA(){},
GL(a,b,c){return B.ox},
m1:function m1(a,b){this.a=a
this.b=b},
tB:function tB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
tC:function tC(){},
tD:function tD(a){this.d=a},
hD:function hD(){},
tE:function tE(a){this.a=a},
tG:function tG(){},
tJ:function tJ(a,b){this.a=a
this.b=b},
tK:function tK(){},
tL:function tL(a,b){this.a=a
this.b=b},
iO:function iO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
tY:function tY(a,b){var _=this
_.a=a
_.b=8
_.c=0
_.d=0.4
_.e=-1
_.f=0
_.r=1
_.y=_.x=_.w=0
_.z=b},
Cn(a){if(!isFinite(0))A.h(A.a8(0,"interpolation",null))
return new A.ua(a)},
mf:function mf(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
ua:function ua(a){this.a=a},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
Cl(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=A.hw(c,A.C(c).c)
r=A.J(r,A.v(r).c)
B.a.a7(r)
s=t.N
r=A.ad(r,s)
r=new A.u9(a,h,b,r,j,f,k,g,i,!1,e,l==null?null:A.aZ(l,s,t.X))
r.kn(a,b,c,!1,e,f,g,h,i,j,k,l)
return r},
Cm(a,b,c,d){var s=A.nS("RENDERER_SHA"),r=A.nS("GAME_SHA"),q=A.nS("DART_SDK_VERSION")
return A.Cl(a,"2aadfdef8566-a3a444afab94",b,!1,null,r,A.nS("LOCKFILE_SHA256"),d,A.nS("PROJECT_VERSION"),s,q,null)},
nS(a){var s=B.mu.h(0,a)
return s.length===0?null:s},
u9:function u9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ub:function ub(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
v1:function v1(a){this.a=a},
v2:function v2(){},
Y(a,b,c,d,e,f,g,h,i,j){return new A.cD(e,g,a,f,i,h,j,c,c,b,B.es)},
Ct(){var s=new A.v3(B.aE)
s.w=t.yu.a(A.d([A.Y(B.a3,!0,1,"Microfacet distribution alpha scaling (0=Mirror, 1=Matte)","pbr_roughness",!1,"Roughness Scale",2,0,0.05),A.Y(B.a3,!0,1,"Conductor reflectance multiplier (0=Dielectric, 1=Metal)","pbr_metallic",!1,"Metallic Intensity",2,0,0.05),A.Y(B.a3,!0,1,"Cook-Torrance specular lobe weight multiplier","pbr_specular",!1,"Specular Multiplier",3,0,0.1),A.Y(B.a3,!0,1,"Global ambient fill multiplier for sky and room environment","light_ambient_mult",!1,"Ambient Light Scale",3,0,0.1),A.Y(B.a3,!0,1,"Global directional key light and mantle intensity multiplier","light_direct_mult",!1,"Direct Light Scale",3,0,0.1),A.Y(B.ak,!0,1,"Enable directional contact shadows and SSDO occlusion pass","shadow_ssdo_enable",!0,"SSDO Ambient Occlusion",1,0,0.05),A.Y(B.ak,!0,1,"Darkness and radius intensity for ambient corner shading","shadow_ao_intensity",!1,"AO Occlusion Weight",2.5,0,0.1),A.Y(B.ak,!0,1,"Enable real-time cascaded directional shadow maps","shadow_csm_enable",!0,"Cascaded Shadows (CSM)",1,0,0.05),A.Y(B.ak,!0,1,"Weather-aware shadow filter hardness (higher is sharper)","shadow_csm_hardness",!1,"Shadow Penumbra Sharpness",3,0.1,0.1),A.Y(B.ak,!0,0.003,"Depth offset bias to eliminate shadow acne artifacts","shadow_bias",!1,"Shadow Depth Bias",0.01,0.0001,0.0005),A.Y(B.aF,!0,1,"Enable procedural wear, edge chips, and history grime","weathering_enable",!0,"Procedural Weathering Pass",1,0,0.05),A.Y(B.aF,!0,1,"Perturbed normal vector scale and tangent displacement","normal_bump_strength",!1,"Normal Map Depth",2,0,0.05),A.Y(B.aF,!0,0.2,"Accumulation layer in crevices and low-air pockets","grime_accumulation",!1,"Grime & Soot Weight",1,0,0.05),A.Y(B.aF,!0,-0.1,"Force surface wetness lock (-0.1 = simulation driven)","wetness_override",!1,"Surface Wetness Lock",1,-0.1,0.05),A.Y(B.l,!0,1,"Enable distance depth haze and volumetric fogging","fog_enable",!0,"Atmospheric Fog",1,0,0.05),A.Y(B.l,!0,0.012,"Exponential height and distance extinction coefficient","fog_density",!1,"Fog Extinction Density",0.15,0,0.005),A.Y(B.l,!0,0.6,"Exponential vertical falloff rate along Y axis","fog_height_falloff",!1,"Fog Height Decay",2,0,0.05),A.Y(B.l,!0,1,"Scale for the start/end distance of atmospheric extinction","fog_distance_scale",!1,"Fog Distance Reach",2,0.25,0.05),A.Y(B.l,!0,-1,"Override simulation time (-1.0 = normal clock)","time_override",!1,"Time of Day Lock",24,-1,0.25),A.Y(B.l,!0,-0.1,"Override weather rain (-0.1 = schedule driven)","rain_override",!1,"Rain Intensity Lock",1,-0.1,0.05),A.Y(B.l,!0,0.2,"Emissive luminance bloom spread and intensity","post_bloom",!1,"Threshold Bloom Glow",2,0,0.1),A.Y(B.l,!0,0.2,"Darkened frame perimeter lens curvature falloff","post_vignette",!1,"Optical Vignette",1.5,0,0.05),A.Y(B.l,!0,1,"Ray-marched atmospheric light shaft in-scattering pass","volumetric_light_enable",!0,"Volumetric God-Rays",1,0,0.05),A.Y(B.l,!0,0.1,"In-scattering brightness for window sunlight god-rays","volumetric_shaft_intensity",!1,"Light Shaft Intensity",1,0,0.05),A.Y(B.l,!0,12,"Raymarch samples per pixel (4=preview, 24=clean)","volumetric_precision",!1,"Volumetric Sample Rate",24,4,1),A.Y(B.l,!0,0.02,"Near-field particulate density that gives light shafts visible body","volumetric_dust_density",!1,"Suspended Dust Density",0.25,0,0.005),A.Y(B.l,!0,1,"Ray-marched screen-space reflections for glossy surfaces","ssr_enable",!0,"Screen-Space Reflections (SSR)",1,0,0.05),A.Y(B.l,!0,0,"Luminance compression operator (0=ACES Filmic, 1=AgX, 2=Reinhard)","tonemap_mode",!1,"Tone-Mapping Curve",2,0,1),A.Y(B.l,!0,0.45,"Forward scattering phase function asymmetry factor (g)","volumetric_scattering",!1,"Mie Scattering Anisotropy",0.9,0,0.05),A.Y(B.l,!0,1,"Screen-space organic diffusion blur for skin and fabric","ssss_enable",!0,"Subsurface Scattering (SSSS)",1,0,0.05),A.Y(B.l,!0,1,"Halton subpixel camera jitter and temporal accumulation","taa_enable",!0,"Temporal AA Subpixel Jitter",1,0,0.05),A.Y(B.l,!1,0,"Horizontal optical streak and anamorphic glare reflections","lens_flare_enable",!0,"Anamorphic Lens Flare",1,0,0.05),A.Y(B.l,!0,0,"Radial RGB channel displacement on outer optics","post_chromatic_aberration",!1,"Chromatic Lens Aberration",0.02,0,0.001),A.Y(B.l,!0,0,"Atmospheric temporal noise for late-Victorian grain","post_film_grain",!1,"Analog Film Grain",0.3,0,0.01),A.Y(B.l,!0,1,"Camera exposure value driving ACES filmic tonemap curve","post_exposure",!1,"Exposure / Tonemapping",3,0.2,0.05),A.Y(B.l,!0,1,"Global chroma desaturation or saturation multiplier","post_saturation",!1,"Colour Saturation",2,0,0.05),A.Y(B.l,!0,1,"Luminance threshold at which warm highlights bloom","post_bloom_threshold",!1,"Bloom Threshold",4,0,0.1),A.Y(B.l,!0,0,"Subtle ordered dither to prevent low-light banding","post_dither",!1,"Film Dither",1,0,0.05),A.Y(B.l,!0,0,"Depth-aware focus blur around the selected focal plane","post_depth_of_field",!1,"Depth Of Field",1,0,0.05),A.Y(B.l,!0,0,"LUT-style cinematic colour transform strength","post_color_grade",!1,"Rupture Colour Grade",1,0,0.05),A.Y(B.l,!0,0,"Screen-space geometric warp used by the rupture lens","post_affine_warp",!1,"Affine Lens Warp",1,0,0.05),A.Y(B.l,!0,0,"Pixel-era vertex quantization grid size (0 disables)","post_vertex_snap",!1,"Vertex Snap Grid",640,0,32),A.Y(B.l,!0,8,"Output colour precision in bits per channel","post_quantization_bits",!1,"Colour Quantization",8,1,1),A.Y(B.l,!0,0,"Chromatic separation lens from the analogue tape pass","post_vhs_chroma",!1,"VHS Chroma Split",1,0,0.05),A.Y(B.l,!0,0,"Animated tape noise and scanline instability","post_vhs_noise",!1,"VHS Tracking Noise",1,0,0.05),A.Y(B.a3,!0,0,"Raises the readable edge light around nearby objects","light_contact_boost",!1,"Contact Light Lift",2,0,0.05),A.Y(B.v,!0,1,"Submit collision-aware precipitation particles","weather_particles_enable",!0,"Physical Weather Particles",1,0,0.05),A.Y(B.v,!0,1,"Requested precipitation count before profile budgeting","weather_particle_density",!1,"Particle Density",2,0,0.05),A.Y(B.v,!0,1,"Physical drop, flake, or hailstone visual radius","weather_particle_size",!1,"Particle Scale",2,0.25,0.05),A.Y(B.v,!0,1,"Material coverage response to settled snow mass","weather_snow_accumulation",!1,"Snow Coverage Scale",2,0,0.05),A.Y(B.v,!0,1,"Density multiplier for weather aerosol in-scattering","weather_fog_scattering",!1,"Volumetric Fog Scattering",2,0,0.05),A.Y(B.v,!0,1,"Bounded energy multiplier for storm flash illumination","weather_lightning_intensity",!1,"Lightning Exposure",2,0,0.05),A.Y(B.v,!0,1,"Weather-driven glossy response on wet materials","weather_reflection_strength",!1,"Wet Surface Reflection",2,0,0.05),A.Y(B.v,!0,1,"Ray-marched cloud layer on clear skybox pixels","cloud_enable",!0,"Volumetric Cloud Shell",1,0,0.05),A.Y(B.v,!0,-0.1,"Override weather cloud coverage (-0.1 = schedule driven)","cloud_coverage_override",!1,"Cloud Coverage Lock",1,-0.1,0.05),A.Y(B.v,!0,0.72,"Extinction through the finite volumetric cloud shell","cloud_density",!1,"Cloud Optical Density",1,0,0.05),A.Y(B.v,!0,0.55,"High-frequency erosion mixed into the cloud body noise","cloud_detail",!1,"Cloud Detail",1,0,0.05),A.Y(B.v,!0,1,"Scale for authored wind transport through the cloud shell","cloud_speed",!1,"Cloud Advection Speed",2,0,0.05),A.Y(B.v,!0,0.25,"Bounded forward-scattered edge response around cloud forms","cloud_silver_lining",!1,"Cloud Silver Lining",1,0,0.05),A.Y(B.v,!0,12,"Sky cloud samples per pixel (4=preview, 24=clean)","cloud_samples",!1,"Cloud Raymarch Samples",24,4,1)],t.hT))
return s},
c7:function c7(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
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
v3:function v3(a){var _=this
_.a=!1
_.d=_.c=_.b=0
_.e=a
_.f=!1
_.r="No renderer debug attachments are installed"
_.w=$},
va:function va(a){this.a=a},
v4:function v4(){},
v5:function v5(){},
vb:function vb(){},
v8:function v8(a){this.a=a},
v9:function v9(a){this.a=a},
v7:function v7(a){this.a=a},
v6:function v6(a){this.a=a},
Hl(a){var s,r,q,p,o,n=B.b.n(a,7,17),m=new A.vj()
for(s=-0.40910517666747087,r=0.40910517666747087,q=0;q<40;++q){p=(s+r)*0.5
o=m.$1(p)
if(typeof o!=="number")return o.cU()
if(o<n)s=p
else r=p}return(s+r)*0.5},
Cx(a){var s
if(!isFinite(a))throw A.b(A.a8(a,"horizonVisibility01",null))
s=B.b.n(a,0,1)
return s*s*(3-2*s)},
vj:function vj(){},
BF(a,b,c,d,e,f,g){var s=A.J(f,t.ho)
if(b<0||a<0||e<0)A.h(A.M("saved day-loop resources must not be negative",null,null))
return new A.pO(c,g,b,a,e,d===!0,s)},
FK(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.h(0,"sleepHistory")
if(!t.j.b(a0))throw A.b(B.hP)
s=A.d([],t.El)
for(r=J.P(a0),q=t.ty,p=t.rZ,o=t.is,n=t.y2,m=t.Fj,l=t.u5,k=t.f;r.m();){j=r.gp()
if(!k.b(j))throw A.b(B.i9)
i=j.h(0,"day")
h=j.h(0,"quality")
g=j.h(0,"location")
if(!A.b7(i)||typeof h!="string"||typeof g!="string"||i<1)throw A.b(B.hI)
f=A.bP(new A.F(B.dx,q.a(new A.pP(h)),p),o)
e=A.bP(new A.F(B.dv,n.a(new A.pQ(g)),m),l)
if(f==null||e==null)throw A.b(B.iX)
B.a.l(s,new A.hL(i,f,e))}d=a2.h(0,"hoursRemaining")
c=a2.h(0,"gasRemaining")
b=a2.h(0,"rationCoupons")
a=a2.h(0,"rationCollectedToday")
if(!A.b7(d)||!A.b7(c)||!A.b7(b)||!A.bE(a))throw A.b(B.il)
return A.BF(c,d,a1,a,b,s,a3)},
c8:function c8(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
pO:function pO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pP:function pP(a){this.a=a},
pQ:function pQ(a){this.a=a},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
lz:function lz(a,b){this.a=a
this.b=b},
fN:function fN(a,b){this.a=a
this.b=b},
wj:function wj(a,b){this.b=a
this.c=b},
fM:function fM(a,b){this.a=a
this.b=b},
kX:function kX(a,b,c,d){var _=this
_.a=a
_.d=b
_.e=c
_.f=d},
rc:function rc(a){this.c=a},
rg:function rg(a,b,c){this.a=a
this.b=b
this.d=c},
rh:function rh(){},
H_(a,b){var s,r,q,p=A.ad(b,t.Dp),o=A.n(t.N,t.cw)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
o.k(0,q.a,q)}p=new A.tV(p,o)
p.km(a,b)
return p},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j9:function j9(a,b,c,d){var _=this
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
tW:function tW(a){this.a=a},
tX:function tX(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
tV:function tV(a,b){this.a=a
this.b=b},
AE(a){var s,r,q,p=A.d([],t.s),o=A.a1(t.N)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.length===0||!o.l(0,q))throw A.b(B.iU)
B.a.l(p,q)}return p},
cC:function cC(a,b){this.a=a
this.b=b},
ug:function ug(){},
dr:function dr(){},
uh:function uh(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=c
_.e=!1},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
Ji(a){var s,r=A.d([],t.yo)
for(s=1;s<=21;++s)r.push(new A.yf(s,a).$0())
return r},
nW(a,b){var s=(a^b*73244475)&2147483647
s=(s^s>>>16)*73244475&2147483647
return(s^s>>>16)&2147483647},
eM:function eM(a,b){this.a=a
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
w9:function w9(a){this.b=a},
yf:function yf(a,b){this.a=a
this.b=b},
kh(a){return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
CN(a){var s
switch(a.a){case 0:s=B.tr
break
case 1:s=B.tq
break
case 2:s=B.tt
break
case 3:s=B.tp
break
case 4:s=B.ts
break
default:s=null}return s},
CM(a,b){return new A.mR(!1,0,0)},
HD(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=null
if(!A.kh(f)||!A.kh(a)||!A.kh(g)||!isFinite(e)||!isFinite(d)||e<0||d<0)throw A.b(A.p("weather impact inputs must be finite and valid",j))
if(b===B.x)return A.CM(a,g)
for(s=c.length,r=j,q=r,p=1/0,o=0;o<s;++o){n=c[o]
n.B()
m=A.HC(f,a,n,e)
if(m!=null&&m.a<p){p=m.a
r=m.b
q=n}}if(q==null||r==null)return A.CM(a,g)
f.T(0,a.a_(0,f).a6(0,p))
l=g.bj(g)
A:{if(B.aA===b||B.ae===b){s=B.tn
break A}if(B.af===b){s=q.d>0.5?B.to:B.ct
break A}if(B.a0===b){s=l>1?B.eQ:B.ct
break A}if(B.x===b){s=B.tm
break A}s=j}if(s===B.eQ){k=q.e
g.a_(0,r.a6(0,2*g.bj(r))).a6(0,k)}s=s===B.ct?d:0
return new A.mR(!0,0.5*d*l,s)},
HC(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.b.a_(0,new A.a(a2,a2,a2)),d=a1.c.T(0,new A.a(a2,a2,a2)),c=a0.a_(0,a),b=new A.a(0,0,0)
for(s=[0,1,2],r=0,q=1,p=0;p<3;++p){o=s[p]
n=A.w6(a,o)
m=A.w6(c,o)
l=A.w6(e,o)
k=A.w6(d,o)
if(Math.abs(m)<1e-12){if(n<l||n>k)return f
continue}j=(l-n)/m
i=(k-n)/m
h=A.CK(o,m>0)
if(j>i){h=A.CK(o,!1)
g=i
i=j
j=g}if(j>r){b=h
r=j}q=Math.min(q,i)
if(r>q)return f}if(r<0){if(c.gu(0)<1e-12)return f
b=A.CL(c)
r=0}if(b.gu(0)<1e-12){if(c.gu(0)<1e-12)return f
b=A.CL(c)}if(r>1)return f
return new A.a6(r,b)},
w6(a,b){var s
A:{if(0===b){s=a.a
break A}if(1===b){s=a.b
break A}s=a.c
break A}return s},
CK(a,b){var s,r=b?-1:1
A:{if(0===a){s=new A.a(r,0,0)
break A}if(1===a){s=new A.a(0,r,0)
break A}s=new A.a(0,0,r)
break A}return s},
CL(a){var s=a.a,r=Math.abs(s),q=a.b,p=Math.abs(q),o=a.c,n=Math.abs(o)
if(p>=r&&p>=n)return new A.a(0,q>0?-1:1,0)
if(r>=n)return new A.a(s>0?-1:1,0,0)
return new A.a(0,0,o>0?-1:1)},
CO(a,b,c){var s=new A.hT(b,c,a)
s.hQ()
return s},
CP(a,b,c){return A.CO(a,b,c)},
HH(a){var s,r,q
if(!t.f.b(a))throw A.b(B.iN)
s=new A.wa(a)
r=s.$1("snowDepthM")
q=s.$1("waterFilmDepthM")
return A.CO(s.$1("materialDissolution01"),r,q)},
w8(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="must be finite",a3="relativeHumidity",a4="shelterFactor",a5="insulationResistance",a6="thermalMassJoulesPerKelvin",a7="surfaceAreaM2",a8="must be in [0, 1]",a9="must be > 0",b0=b1.b
if(!isFinite(b0))A.h(A.a8(b0,"roomTemperatureCelsius",a2))
s=b1.c
if(!isFinite(s))A.h(A.a8(s,a3,a2))
r=b1.d
if(!isFinite(r))A.h(A.a8(r,a4,a2))
q=b1.e
if(!isFinite(q))A.h(A.a8(q,a5,a2))
p=b1.f
if(!isFinite(p))A.h(A.a8(p,"internalHeatWatts",a2))
o=b1.r
if(!isFinite(o))A.h(A.a8(o,a6,a2))
n=b1.w
if(!isFinite(n))A.h(A.a8(n,a7,a2))
m=b1.x
if(!isFinite(m))A.h(A.a8(m,"dtSeconds",a2))
if(s<0||s>1)A.h(A.a8(s,a3,a8))
if(r<0||r>1)A.h(A.a8(r,a4,a8))
if(q<=0)A.h(A.a8(q,a5,a9))
if(o<=0)A.h(A.a8(o,a6,a9))
if(n<=0)A.h(A.a8(n,a7,a9))
l=b1.a
k=1-r*0.85
j=l.e*(1-r*0.9)
r=l.f
i=Math.cos(r)
r=Math.sin(r)
h=l.w
if(h===B.x&&l.b)h=B.aA
g=A.HE(h,B.b.n(l.c,0,1))*k
f=A.HF(h)
e=h===B.af?g/120:0
d=h===B.x?0:0.5*g*f*f
c=5.7+3.8*j
b=c*n*k/q
a=l.r+p/b
q=Math.exp(-(b/o)*m)
a0=Math.log(B.b.n(s,0.0001,1))+17.62*b0/(243.12+b0)
a1=243.12*a0/(17.62-a0)
return new A.w7(h,new A.a(i*j,0,r*j),j,k,g,f,e,d,c,a+(b0-a)*q,a1,b0<=a1)},
HG(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=!0
if(A.kh(a0))if(isFinite(a))if(isFinite(b))c=!isFinite(0.026)
if(c)throw A.b(A.p("warm-clearance inputs must be finite and valid",null))
s=b-a
for(c=a1.length,r=s>0,q=a0.a,p=a0.b,o=a0.c,n=0.3267256359733385*s,m=0,l=0,k=0;k<c;++k){j=a1[k]
i=j.a
h=i.a
if(!(isFinite(h)&&isFinite(i.b)&&isFinite(i.c))||!isFinite(j.b)||!isFinite(j.c)||!isFinite(j.d))A.h(A.p("warm source values must be finite",null))
g=j.b
if(g<=0||j.d<0)A.h(A.p("warm source radius must be > 0 and heat >= 0",null))
f=Math.max(g,new A.a(q-h,p-i.b,o-i.c).gu(0))
i=j.d
m+=Math.min(Math.max(0,j.c-a),i/(0.3267256359733385*f))
if(r)l=Math.max(l,Math.min(i/n,g*100))}e=a+m
d=s<=0?1:B.b.n((e-b)/Math.max(1,s),0,1)
return new A.vZ(m,e,l,d,e>b)},
HE(a,b){var s
if(a===B.x)return 0
s=0.00005+b*0.00045
return a===B.a0?s*0.75:s},
HF(a){var s
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
hS:function hS(a,b,c,d,e,f,g,h,i){var _=this
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
vZ:function vZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w7:function w7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
mR:function mR(a,b,c){this.a=a
this.f=b
this.r=c},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
wa:function wa(a){this.a=a},
wb:function wb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
KF(a){var s
A:{if("broadcast"===a){s=B.f3
break A}if("visitor"===a){s=B.f4
break A}if("aftermath"===a){s=B.f5
break A}if("ending"===a){s=B.f6
break A}s=A.h(A.M("screenplay event has no consumer: "+a,null,null))}return s},
Ga(a){var s=A.J(a.c,t.z)
B.a.Z(s,new A.qj())
s=new A.qi(A.ad(s,t.Dm))
s.q2()
return s},
G9(a,b,c){var s,r,q,p="delivered"
if(!t.f.b(b)||!t.j.b(b.h(0,p)))return new A.ln(a,c,A.fq(B.o,t.N))
s=t.N
r=J.Bv(t.j.a(b.h(0,p)),s)
q=r.$ti
return new A.ln(a,c,A.fq(new A.F(r,q.i("l(t.E)").a(new A.qh(a)),q.i("F<t.E>")),s))},
fc:function fc(a,b){this.a=a
this.b=b},
qi:function qi(a){this.a=a},
qj:function qj(){},
ln:function ln(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a){this.a=a},
tc(a,b,c){var s,r=t.N,q=A.n(r,r)
if(a!=null)q.K(0,a)
s=A.n(r,r)
if(b!=null)s.K(0,b)
r=A.n(r,t.Fr)
if(c!=null)r.K(0,c)
return new A.tb(q,s,r)},
GD(a){var s,r,q,p,o,n,m,l=null,k=t.f
if(!k.b(a))return l
s=a.h(0,"schemaVersion")
if(!A.b7(s)||s!==1)return l
r=A.C8(a.h(0,"choices"))
q=A.C8(a.h(0,"flags"))
if(r==null||q==null)return l
p=A.n(t.N,t.Fr)
o=a.h(0,"frozenQuotes")
if(k.b(o))for(k=o.gO(),k=k.gA(k);k.m();){n=k.gp()
m=A.G5(n.b)
n=n.a
if(typeof n!="string"||m==null||m.a!==n)return l
p.k(0,n,m)}return A.tc(r,q,p)},
C8(a){var s,r,q,p
if(!t.f.b(a))return null
s=t.N
r=A.n(s,s)
for(s=a.gO(),s=s.gA(s);s.m();){q=s.gp()
p=q.a
if(typeof p!="string"||typeof q.b!="string")return null
r.k(0,p,A.x(q.b))}return r},
G5(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"sceneId")
r=a.h(0,"ordinal")
q=a.h(0,"revision")
p=a.h(0,"text")
if(typeof s!="string"||s.length===0||!A.b7(r)||r<1||!A.b7(q)||q<0||typeof p!="string"||p.length===0)return null
return new A.db(s,r,q,p)},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
td:function td(){},
te:function te(){},
tf:function tf(){},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
GK(a,b){var s,r,q,p=A.d([],t.xz)
for(s=J.P(a);s.m();){r=s.gp()
if(r.b==="aftermath"){q=r.a
r=r.e
p.push(new A.bI("residue-"+q,r,"hall","A new consequence has settled into the house: "+r,"examine-"+q))}}return new A.tw(b,p)},
bI:function bI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tw:function tw(a,b){this.a=a
this.b=b},
tx:function tx(a){this.a=a},
hN(a){var s,r,q=A.n(t.N,t.z)
for(s=a.gO(),s=s.gA(s);s.m();){r=s.gp()
q.k(0,B.d.t(r.a),r.b)}return q},
vn:function vn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
vo:function vo(){},
vp:function vp(){},
fI:function fI(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b){this.a=a
this.b=b},
mP:function mP(a,b,c,d,e,f){var _=this
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
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ho(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.f.am(a,g)
if(!t.f.b(f))throw A.b(B.iI)
s=f.h(0,"sources")
r=f.h(0,"scenes")
q=f.h(0,"events")
if(q==null)q=B.bG
if(J.ab(f.h(0,"version"),1)){p=t.j
p=!p.b(s)||!p.b(r)||!p.b(q)}else p=!0
if(p)throw A.b(B.iF)
p=A.d([],t.wM)
for(o=J.P(r);o.m();)p.push(A.Hd(o.gp()))
o=A.d([],t.E)
for(n=J.P(q);n.m();)o.push(A.Hc(n.gp()))
n=t.N
m=A.a1(n)
for(l=p.length,k=0;k<p.length;p.length===l||(0,A.r)(p),++k){j=p[k].a
if(!m.l(0,j))throw A.b(A.M("duplicate screenplay scene: "+j,g,g))}i=A.a1(n)
for(p=o.length,k=0;k<o.length;o.length===p||(0,A.r)(o),++k){n=o[k].a
if(!i.l(0,n))throw A.b(A.M("duplicate screenplay event: "+n,g,g))}p=A.d([],t.s)
for(n=J.P(s);n.m();){h=n.gp()
if(typeof h!="string"||h.length===0)A.h(A.M("source must be a non-empty string",g,g))
p.push(h)}return new A.vl(o)},
Hc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="kind",f="label"
if(!t.f.b(a)||typeof a.h(0,"id")!="string"||A.x(a.h(0,"id")).length===0||typeof a.h(0,g)!="string"||A.x(a.h(0,g)).length===0||typeof a.h(0,"day")!="number"||typeof a.h(0,"hour")!="number"||typeof a.h(0,f)!="string"||A.x(a.h(0,f)).length===0)throw A.b(B.i1)
s=a.h(0,"effects")
if(s==null)s=B.bG
if(!t.j.b(s)||J.kw(s,new A.un()))throw A.b(B.iL)
r=B.b.aj(A.a4(a.h(0,"day")))
q=A.a4(a.h(0,"hour"))
if(r<1||r>21||!isFinite(q)||q<0||q>=24)throw A.b(B.iy)
p=a.h(0,"randomFrom")
o=a.h(0,"randomTo")
n=p==null
if(!(!n&&typeof p!="number")){m=o==null
n=!m&&typeof o!="number"||n!==m}else n=!0
if(n)throw A.b(B.hw)
n=typeof p=="number"
m=!1
if(n)if(typeof o=="number")m=!isFinite(p)||!isFinite(o)||p<0||o>=24||p>o
if(m)throw A.b(B.j5)
l=new A.uo(a)
m=A.x(a.h(0,"id"))
k=A.x(a.h(0,g))
j=A.x(a.h(0,f))
l.$1("source")
l.$1("speaker")
l.$1("cue")
i=A.d([],t.s)
for(h=J.P(s);h.m();)i.push(A.x(h.gp()))
l.$1("nextScene")
n=n?p:null
h=typeof o=="number"?o:null
return new A.e0(m,k,r,q,j,A.ad(i,t.N),n,h)},
Hd(a){var s,r,q,p,o,n,m,l,k,j,i=t.f
if(!i.b(a))throw A.b(B.hN)
s=a.h(0,"id")
r=a.h(0,"day")
q=a.h(0,"title")
if(typeof s!="string"||typeof q!="string"||typeof r!="number"||B.b.aj(r)!==r)throw A.b(B.ih)
p=a.h(0,"sources")
o=a.h(0,"beats")
n=a.h(0,"branches")
m=t.j
if(!m.b(p)||!m.b(o)||!m.b(n))throw A.b(A.M("screenplay scene "+s+" has invalid arrays",null,null))
m=B.b.aj(r)
l=A.d([],t.s)
for(k=J.P(p);k.m();){j=k.gp()
if(typeof j!="string"||j.length===0)A.h(B.iw)
l.push(j)}l=A.d([],t.rn)
for(k=J.P(o);k.m();){j=k.gp()
if(!i.b(j)||typeof j.h(0,"kind")!="string"||typeof j.h(0,"text")!="string")A.h(B.j1)
A.x(j.h(0,"kind"))
A.x(j.h(0,"text"))
A.as(j.h(0,"speaker"))
l.push(new A.mj())}i=A.d([],t.gg)
for(l=J.P(n);l.m();)i.push(A.Hb(l.gp()))
return new A.mm(s,m)},
Hb(a){var s,r,q,p,o,n,m="id",l=t.f
if(!l.b(a)||typeof a.h(0,m)!="string"||typeof a.h(0,"prompt")!="string"||!t.j.b(a.h(0,"options")))throw A.b(B.hV)
s=A.x(a.h(0,m))
A.x(a.h(0,"prompt"))
r=A.d([],t.yv)
for(q=J.P(t.tY.a(a.h(0,"options")));q.m();){p=q.gp()
if(!l.b(p)||typeof p.h(0,m)!="string"||typeof p.h(0,"label")!="string"||typeof p.h(0,"next")!="string")A.h(B.iC)
o=A.x(p.h(0,m))
n=A.x(p.h(0,"label"))
A.x(p.h(0,"next"))
r.push(new A.ml(o,n))}return new A.mk(s)},
vl:function vl(a){this.c=a},
vm:function vm(){},
e0:function e0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.z=g
_.Q=h},
un:function un(){},
uo:function uo(a){this.a=a},
mm:function mm(a,b){this.a=a
this.b=b},
mj:function mj(){},
mk:function mk(a){this.a=a},
ml:function ml(a,b){this.a=a
this.b=b},
vq:function vq(){var _=this
_.at=_.as=_.Q=_.z=_.x=_.w=_.f=_.c=_.b=_.a=$
_.ay=_.ax=null},
vr:function vr(){},
vs:function vs(){},
ky:function ky(a){this.a=a},
zT:function zT(a,b,c){this.b=a
this.e=b
this.f=c},
Fj(a){var s,r,q,p
if(!t.f.b(a)||!J.ab(a.h(0,"version"),1))throw A.b(B.hr)
s=new A.oc()
r=s.$1(a.h(0,"reducedMotion"))
q=s.$1(a.h(0,"photosensitivitySafe"))
p=A.At(a.h(0,"uiScale"))
if(p==null)p=null
s=s.$1(a.h(0,"captions"))
return new A.eo(r,q,p,s,a.h(0,"screenReaderVerbosity")==null?null:B.a.ba(B.bJ,new A.oa(a),new A.ob()))},
d9:function d9(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
oc:function oc(){},
oa:function oa(a){this.a=a},
ob:function ob(){},
on:function on(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.d=0
_.e=c},
op:function op(a){this.a=a},
oo:function oo(a,b){this.a=a
this.b=b},
oE:function oE(a,b){this.a=a
this.b=b},
Fs(a){var s
if(!t.f.b(a)||!J.ab(a.h(0,"version"),1))throw A.b(B.ii)
s=new A.oO()
return new A.eq(s.$1$2(B.bH,a.h(0,"output"),t.xs),s.$1$2(B.bA,a.h(0,"dynamicRange"),t.EL),s.$1$2(B.bz,a.h(0,"reverb"),t.gc),s.$1$2(B.bx,a.h(0,"ducking"),t.ul))},
cQ:function cQ(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
dF:function dF(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
oO:function oO(){},
oP:function oP(a,b){this.a=a
this.b=b},
oQ:function oQ(a){this.a=a},
pi:function pi(a){this.a=a
this.b=null},
pm(a,b,c){var s
b.B()
if(c<1||c>6)throw A.b(A.a8(c,"level","must be between 1 and 6"))
s=A.I(a,"h"+c,"brush-heading brush-state-"+b.e.b,b.c)
A.pk(s,b)
return s},
ez(a,b,c,d){var s,r,q
b.B()
s=b.e
r=d==null?b.c:d
q=A.I(a,"button","brush-button brush-state-"+s.b,r)
A.pk(q,b)
q.type="button"
q.disabled=s===B.aM
q.addEventListener("click",A.Z(new A.pl(c)))
return q},
Fx(a,b,c,d){var s,r
b.B()
s=A.c(a.createElement("input"))
s.type="checkbox"
s.checked=!1
r=b.e
s.className="brush-toggle brush-state-"+r.b
s.disabled=r===B.aM
A.pk(s,b)
s.addEventListener("change",A.Z(new A.pp(d,s)))
return s},
Fw(a,b,c,d,e,f){var s,r
b.B()
s=A.c(a.createElement("input"))
s.type="range"
s.min=A.z(d)
s.max=""+c
s.step="0.1"
s.value=""+f
r=b.e
s.className="brush-slider brush-state-"+r.b
s.disabled=r===B.aM
A.pk(s,b)
s.addEventListener("input",A.Z(new A.po(s,e)))
return s},
zV(a,b){var s=B.c.jZ(A.x(a.className),A.jc("\\s+")),r=A.C(s),q=r.i("F<1>"),p=A.J(new A.F(s,r.i("l(1)").a(new A.pn()),q),q.i("t.E"))
s=b.b
B.a.l(p,"brush-state-"+s)
a.className=B.a.a0(p," ")
a.setAttribute("data-brush-state",s)},
pk(a,b){var s
a.id=b.a
a.setAttribute("aria-label",b.gmq())
a.setAttribute("data-brush-kind",b.b.b)
s=b.e
a.setAttribute("data-brush-state",s.b)
if(s===B.aM)a.setAttribute("aria-disabled","true")},
pl:function pl(a){this.a=a},
pp:function pp(a,b){this.a=a
this.b=b},
po:function po(a,b){this.a=a
this.b=b},
pn:function pn(){},
ex:function ex(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
bu:function bu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pr:function pr(a,b){var _=this
_.a=a
_.b=$
_.c=0
_.d=b
_.f=_.e=0},
ps:function ps(a){this.a=a},
BD(a){var s=!1
if(a.length!==0)if(!B.en.q(0,a))s=B.qB.q(0,a)||B.qr.q(0,a)||B.qA.q(0,a)||!B.c.Y(a,"Mouse")
return s},
J1(a){var s,r,q,p,o=t.N,n=A.n(o,t.a)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gA(0);s.m();){r=s.d
q=r.a
p=A.aI(r.b,!1,o)
p.$flags=3
n.k(0,q,p)}return n},
JI(a){var s,r,q=A.n(t.N,t.a),p=a==null?null:new A.N(a,A.v(a).i("N<1,2>"))
p=J.P(p==null?A.d([],t.Bq):p)
s=t.s
while(p.m()){r=p.gp()
q.k(0,r.a,A.d([r.b],s))}return q},
hh(a,b,c,d,e,f,g,h){var s=t.N,r=t.a,q=A.hv(B.mr,s,r)
if(b!=null)q.K(0,b)
q.K(0,A.JI(a))
s=new A.hg(g,d,h,e,f,c,A.aZ(A.J1(q),s,r))
s.B()
return s},
FH(a){var s,r,q,p,o,n,m,l,k="bindings",j=t.f
if(!j.b(a)||!j.b(a.h(0,k)))throw A.b(B.d2)
s=a.h(0,"version")
r=J.f8(s)
if(!r.ad(s,1)&&!r.ad(s,2))throw A.b(B.d2)
q=A.n(t.N,t.a)
for(j=j.a(a.h(0,k)).gO(),j=j.gA(j),r=t.s,p=t.j;j.m();){o=j.gp()
n=o.a
m=o.b
if(typeof n!="string")throw A.b(B.i2)
if(typeof m=="string")q.k(0,n,A.d([m],r))
else if(p.b(m)&&J.Ff(m,new A.pD())){o=A.d([],r)
for(l=J.P(m);l.m();)o.push(A.x(l.gp()))
q.k(0,n,o)}else throw A.b(B.hz)}j=A.a4(a.h(0,"horizontalSensitivity"))
r=A.a4(a.h(0,"verticalSensitivity"))
p=A.U(a.h(0,"invertX"))
o=A.U(a.h(0,"invertY"))
return A.hh(null,q,A.U(a.h(0,"holdToInteract")),j,p,o,2,r)},
Av(a){var s,r,q,p=t.N,o=A.n(p,t.a)
for(s=a.gO(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
r=A.J(r.b,p)
o.k(0,q,r)}return o},
AP(a,b){var s,r,q,p=A.d([b],t.s)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q!==b)p.push(q)}return p},
B3(a,b){var s,r,q,p=A.d([],t.s)
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
pF:function pF(){},
pE:function pE(a){this.a=a},
pG:function pG(){},
pH:function pH(){},
pI:function pI(){},
pD:function pD(){},
ew:function ew(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.c=b},
kY:function kY(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
FG(a){var s=t.N,r=t.m
r=new A.iw(A.hh(null,null,!1,1,!1,!1,2,1),A.n(s,r),A.n(s,r),A.n(s,r),a,A.c(a.createElement("div")))
r.b3(a)
r.kf(a)
return r},
iw:function iw(a,b,c,d,e,f){var _=this
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
pB:function pB(a,b){this.a=a
this.b=b},
pC:function pC(a){this.a=a},
pA:function pA(a,b){this.a=a
this.b=b},
py:function py(a,b){this.a=a
this.b=b},
pz:function pz(a,b){this.a=a
this.b=b},
FI(a){var s=new A.pJ(a,A.c(a.createElement("div")))
s.b3(a)
s.kg(a)
return s},
pJ:function pJ(a,b){var _=this
_.f=$
_.a=a
_.b=b
_.e=_.d=_.c=null},
pK:function pK(a){this.a=a},
FO(a){var s=new A.pR(A.I(a,"div","door",null))
s.ki(a)
return s},
BG(a){var s,r,q
if(a.length===0)return""
s=A.d([],t.s)
for(r=0;r<a.length;r=q){q=r+1
s.push(""+q+": "+a[r])}return"Choices are rendered in the game view. Press number keys or click the in-game choice: "+B.a.a0(s,"; ")+"."},
pR:function pR(a){var _=this
_.a=a
_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=_.w=null
_.y=!1},
pS:function pS(a){this.a=a},
pT:function pT(a,b){this.a=a
this.b=b},
pU:function pU(a,b){this.a=a
this.b=b},
FY(a){var s=new A.pX(a,A.c(a.createElement("div")))
s.b3(a)
s.kj(a)
return s},
pX:function pX(a,b){var _=this
_.r=_.f=$
_.w=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
pY:function pY(a){this.a=a},
qr:function qr(a){var _=this
_.a=null
_.b=""
_.c=1
_.e=a
_.r=_.f=null
_.w=!1
_.x=0
_.z=_.y=null},
qs:function qs(){},
Gb(a){var s
switch(a.d.a){case 0:s=0
break
case 1:s=1
break
case 2:s=1.75
break
default:s=null}return new A.qt(a.b===B.da,a.c===B.de,s,a.e===B.db,a.f===B.d8,a.r===B.dg,a.w,a.x)},
qt:function qt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
zW(a,b,c,d,e,f,g,h,i,j,k){return new A.ho(e,g,k,f,b,h,d,c,a,i,j)},
Gc(a){var s,r,q,p,o,n,m,l,k,j,i="showObjective",h="clockFormat",g="storyMode"
if(!t.f.b(a)||!J.ab(a.h(0,"version"),1))throw A.b(B.iz)
s=new A.qu(a)
r=a.h(0,"contextualReminders")
if(!A.bE(r))throw A.b(B.iV)
q=!A.bE(a.h(0,i))||A.U(a.h(0,i))
p=s.$1$2("interactionMode",B.bI,t.bK)
o=s.$1$2("promptDensity",B.bL,t.dn)
n=s.$1$2("textPacing",B.bK,t.j_)
m=s.$1$2("journalLayout",B.bB,t.gm)
l=s.$1$2("confirmations",B.bv,t.aJ)
k=s.$1$2("saveFeedback",B.bC,t.mx)
j=s.$1$2("focusLossBehavior",B.aW,t.x)
s=typeof a.h(0,h)=="string"?s.$1$2(h,B.by,t.vS):B.bj
return A.zW(s,l,r,j,p,m,o,k,q,A.bE(a.h(0,g))&&A.U(a.h(0,g)),n)},
dP:function dP(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
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
qu:function qu(a){this.a=a},
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(a){this.a=a},
BO(a){var s,r,q,p,o,n,m,l,k,j,i
if(!t.f.b(a)||!J.ab(a.h(0,"version"),1))throw A.b(B.ie)
s=B.a.ba(B.dz,new A.qI(a),new A.qJ())
r=A.x(a.h(0,"renderScale"))
q=A.U(a.h(0,"dynamicResolution"))
p=A.x(a.h(0,"frameTarget"))
o=A.x(a.h(0,"antialiasing"))
n=A.x(a.h(0,"textureQuality"))
m=A.as(a.h(0,"outputEncoding"))
if(m==null)m="srgb"
l=A.as(a.h(0,"diagnosticLevel"))
if(l==null)l="full"
k=A.as(a.h(0,"shadowQuality"))
if(k==null)k="profile"
j=a.h(0,"modelPackageDiagnostics")
j=A.Dr(j==null?a.h(0,"fbxDiagnostics"):j)
i=new A.dS(1,s,r,q,p,o,n,m,l,k,j===!0)
i.B()
return i},
hr(a,b){var s=b==null?B.br:b
return new A.qK(s,a==null?B.br:a)},
Es(a,b){var s,r,q
a.B()
s=A.d([],t.s)
r=a.f
if(r==="msaa4"&&b.a<4){q=a.eB(b.a>=2?"msaa2":"off")
B.a.l(s,"requested MSAA 4x is unavailable")}else if(r==="msaa2"&&b.a<2){q=a.eB("off")
B.a.l(s,"requested MSAA 2x is unavailable")}else q=a
if(q.d&&!b.b){q=q.i8(!1)
B.a.l(s,"dynamic resolution timing is unavailable")}if(q.b===B.bp&&b.a<2){q=q.i9(B.bq)
B.a.l(s,"High preset was reduced to Standard")}return new A.qB(q,A.ad(s,t.N))},
cS:function cS(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
qI:function qI(a){this.a=a},
qJ:function qJ(){},
qK:function qK(a,b){this.a=a
this.b=b},
qA:function qA(a,b){this.a=a
this.b=b},
qB:function qB(a,b){this.a=a
this.b=b},
Ge(a){var s=new A.iH(A.n(t.N,t.m),B.br,a,A.c(a.createElement("div")))
s.b3(a)
s.kk(a)
return s},
iH:function iH(a,b,c,d){var _=this
_.w=_.r=_.f=null
_.x=a
_.Q=_.z=_.y=null
_.as=b
_.a=c
_.b=d
_.e=_.d=_.c=null},
qE:function qE(a){this.a=a},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
qD:function qD(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a){this.a=a},
kz:function kz(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(){this.c=0},
Gf(a){var s=new A.qM(a,A.c(a.createElement("div")))
s.b3(a)
s.kl(a)
return s},
qM:function qM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
qN:function qN(a){this.a=a},
rq:function rq(a,b,c,d,e){var _=this
_.f=a
_.r=b
_.w=c
_.ax=_.at=_.as=_.Q=_.z=_.y=$
_.ay=null
_.CW=1
_.a=d
_.b=e
_.e=_.d=_.c=null},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
ru:function ru(){},
rv:function rv(){},
Ll(a,b,c){if(!isFinite(c)||!isFinite(b)||b<=c)throw A.b(A.p("temperature gauge range must be finite and ordered",null))
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
tl:function tl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
I(a,b,c,d){var s=A.c(a.createElement(b))
if(c!=null)s.className=c
if(d!=null)s.textContent=d
return s},
DA(a){var s,r,q,p=A.c(a.querySelectorAll("a[href],button,input,select,textarea,[tabindex]")),o=A.d([],t.e)
for(s=t.m,r=0;r<A.j(p.length);++r){q=A.H(p.item(r))
if(s.b(q))B.a.l(o,q)}return o},
j2:function j2(){},
bH:function bH(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
tr:function tr(){},
ts:function ts(){},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
tq:function tq(a){this.a=a},
tt:function tt(a){this.a=a},
cZ:function cZ(a,b){this.a=a
this.b=b},
tu:function tu(a,b){var _=this
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
tv:function tv(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
tU:function tU(a){this.a=a
this.b=null},
He(a){var s=new A.uq(a,A.c(a.createElement("div")))
s.b3(a)
s.ko(a)
return s},
uq:function uq(a,b){var _=this
_.r=_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ur:function ur(a,b){this.a=a
this.b=b},
us:function us(a){this.a=a},
mn(a,b){var s=t.N,r=t.m
r=new A.hK(b,A.n(s,r),A.n(s,r),A.n(s,t.rf),A.n(s,r),$.zQ(),B.aJ,A.n(s,r),A.n(s,r),B.ba,A.n(s,r),a,A.c(a.createElement("div")))
r.b3(a)
r.kp(a,b)
return r},
hK:function hK(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
uT:function uT(a,b){this.a=a
this.b=b},
uU:function uU(a){this.a=a},
uV:function uV(a){this.a=a},
uJ:function uJ(a,b){this.a=a
this.b=b},
uK:function uK(a,b){this.a=a
this.b=b},
uI:function uI(a){this.a=a},
uL:function uL(a){this.a=a},
ut:function ut(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a,b){this.a=a
this.b=b},
uN:function uN(a,b){this.a=a
this.b=b},
uO:function uO(a,b){this.a=a
this.b=b},
uH:function uH(a,b,c){this.a=a
this.b=b
this.c=c},
uz:function uz(a){this.a=a},
uA:function uA(a){this.a=a},
uB:function uB(a){this.a=a},
uC:function uC(a){this.a=a},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
uF:function uF(a){this.a=a},
uG:function uG(a){this.a=a},
uy:function uy(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a){this.a=a},
uv:function uv(a){this.a=a},
uw:function uw(a){this.a=a},
ux:function ux(a){this.a=a},
uQ:function uQ(a,b,c){this.a=a
this.b=b
this.c=c},
uP:function uP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uX(a){return B.a.ba(B.L,new A.uY(a),new A.uZ(a))},
Hf(){var s,r,q=A.n(t.N,t.K)
for(s=0;s<10;++s){r=B.L[s]
q.k(0,r.a,r.e)}return q},
e2(a,b){var s=t.z
s=A.hv(A.Hf(),s,s)
if(a!=null)s.K(0,a)
s=new A.uW(b,A.aZ(s,t.N,t.K))
s.kq(a,b)
return s},
Cs(a){var s,r=t.f
if(!r.b(a)||!J.ab(a.h(0,"version"),1))throw A.b(B.iR)
s=a.h(0,"values")
if(!r.b(s))throw A.b(B.hO)
return A.e2(A.b5(s,t.N,t.K),A.j(a.h(0,"version")))},
bS:function bS(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
bp:function bp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uY:function uY(a){this.a=a},
uZ:function uZ(a){this.a=a},
uW:function uW(a,b){this.a=a
this.b=b},
Ab(a,b){var s=b==null?A.e2(null,1):b
return new A.v_(s,a==null?A.e2(null,1):a)},
Hg(a,b){var s,r,q,p,o,n,m,l=A.n(t.N,t.K)
for(q=0;q<10;++q){s=B.L[q]
p=s.w==="audio"?a.h(0,s.a):b.h(0,s.a)
if(p==null)continue
switch(s.d.a){case 0:o=A.fv(p)
break
case 1:if(p==="true")o=!0
else o=p==="false"?!1:null
break
default:o=null}r=o
if(r!=null)try{s.dX(r)
J.bd(l,s.a,r)}catch(n){if(!(A.am(n) instanceof A.B))throw n}}m=A.e2(l,1)
return A.Ab(m,m)},
v_:function v_(a,b){this.a=a
this.b=b},
Hj(a){var s=new A.vf(A.n(t.u5,t.nx),a,A.c(a.createElement("div")))
s.b3(a)
s.kr(a)
return s},
vf:function vf(a,b,c){var _=this
_.f=null
_.r=a
_.w=$
_.a=b
_.b=c
_.e=_.d=_.c=null},
vg:function vg(){},
vh:function vh(a,b,c){this.a=a
this.b=b
this.c=c},
Fm(a){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.Fg)
for(s=a.d,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0),r=a.b;s.m();){q=s.d
p=q.a
o=r.h(0,p)
o.toString
for(n=q.b.gO(),n=n.gA(n),p+=":";n.m();){m=n.gp()
l=m.b
m=m.a
k=l.c
j=o.h(0,m).h(0,k)
j.toString
B.a.l(i,new A.cO(p+m+":"+k,m,l.a,l.b,j))}}B.a.Z(i,new A.ol())
return new A.ok(A.ad(i,t.bC),A.a1(t.N))},
cO:function cO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ok:function ok(a,b){this.a=a
this.b=b},
om:function om(){},
ol:function ol(){},
Hz(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.b
if(a.a===0)return B.tl
s=t.T
r=A.n(s,t.q1)
q=A.v(a).i("ag<1>")
p=A.J(new A.ag(a,q),q.i("t.E"))
B.a.a7(p)
for(q=p.length,o=t.la,n=a0.c,m=a0.as,l=0;l<p.length;p.length===q||(0,A.r)(p),++l){k=p[l]
for(j=a.h(0,k).gO(),j=j.gA(j);j.m();){i=j.gp()
h=i.a
if(h<1||h>21)return new A.bC(new A.bL(B.t3,k+" has an out-of-range authored day "+h+"."))
g=A.Hy(k,h,i.b,m)
if(g instanceof A.bC)return g
i=n.h(0,k)
f=i==null?b:i.h(0,h)
if(f==null)continue
r.k(0,new A.cb(k,h,f.a,f.b),o.a(g).a)}}a=t.N
q=t.p7
e=A.n(a,q)
for(o=a0.ax,o=new A.ae(o,o.r,o.e,A.v(o).i("ae<2>"));o.m();){n=o.d
J.em(e.c7(n.b,new A.vR()),n)}o=A.aZ(a0.at,a,t.sy)
q=A.n(a,q)
for(n=new A.N(e,e.$ti.i("N<1,2>")).gA(0),m=t.aS;n.m();){d=n.d
j=d.a
c=A.aI(d.b,!1,m)
c.$flags=3
q.k(0,j,c)}return new A.mN(new A.mM(r,A.a1(a),A.a1(s),o,q,A.d([],t.Dc),B.ai,A.tc(b,b,b)))},
Hy(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=A.n(t.hF,t.cf)
for(s=""+b,r="visitor:"+a+":"+s+":",q=t.Fi,p=0;p<3;++p){o=B.du[p]
n=o.b
m=n+"."
l=A.d([],q)
for(k=a0.gO(),k=k.gA(k),j=m.length;k.m();){i=k.gp()
h=i.a
if(!B.c.Y(h,m))continue
g=A.dX(B.c.aT(h,j),null)
if(g==null||g<1||i.b.length===0)return new A.bC(new A.bL(B.t4,a+" day "+s+" has malformed "+n+" tier data."))
f=a1.h(0,r+h)
if(f==null)f=B.dC
B.a.l(l,new A.cn(g,i.b,f))}if(l.length===0)continue
B.a.Z(l,new A.vO())
for(k=l.length,e=0;e<k;e=d){d=e+1
if(l[e].a!==d)return new A.bC(new A.bL(B.eO,a+" day "+s+" has a non-contiguous "+n+" tier."))}c.k(0,o,l)}if(c.a===0)return new A.bC(new A.bL(B.eO,a+" day "+s+" has no authored tiers."))
return new A.nj(c)},
mM:function mM(a,b,c,d,e,f,g,h){var _=this
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
vU:function vU(a){this.a=a},
vT:function vT(a){this.a=a},
vV:function vV(a){this.a=a},
vP:function vP(a){this.a=a},
vQ:function vQ(){},
vS:function vS(a){this.a=a},
vR:function vR(){},
vN:function vN(a){this.a=a},
vM:function vM(a){this.a=a},
vO:function vO(){},
mN:function mN(a){this.a=a},
nj:function nj(a){this.a=a},
KT(a){var s,r,q,p=A.a1(t.N)
for(s=new A.N(a,A.v(a).i("N<1,2>")).gA(0);s.m();){r=s.d
for(q=r.b.gan(),q=q.gA(q);q.m();)if(q.gp().ga9().R(0,new A.z_())){p.l(0,r.a)
break}}s=A.J(p,p.$ti.c)
B.a.a7(s)
return s},
KS(a,b){var s,r,q,p,o,n,m
if(a===0||b.length===0)return B.o
s=t.N
r=A.aI(b,!0,s)
B.a.a7(r)
q=new A.eY()
q.ck((a^913741)>>>0)
p=q.b1(4)
if(!(p>=0&&p<4))return A.e(B.ds,p)
o=B.ds[p]
n=r.length
n=o>n?n:o
if(n===0)return B.o
m=A.aI(r,!0,s)
B.a.e2(m,q)
s=A.hO(m,0,A.ek(n,"count",t.S),A.C(m).c).bN(0)
B.a.a7(s)
return s},
z_:function z_(){},
CI(a){var s,r,q,p
if(!t.f.b(a))return null
s=a.h(0,"visitor")
r=a.h(0,"day")
q=a.h(0,"hour")
p=a.h(0,"order")
if(typeof s!="string"||!A.b7(r)||!A.b7(q)||!A.b7(p)||r<1||q<0||q>23||p<0)return null
return new A.cb(s,r,q,p)},
Hx(a){var s,r,q,p,o,n,m,l,k="contacted",j="resolved",i=null
if(t.f.b(a)){s=t.j
s=!s.b(a.h(0,k))||!s.b(a.h(0,j))}else s=!0
if(s)return i
r=A.a1(t.N)
for(s=t.j,q=J.P(s.a(a.h(0,k)));q.m();){p=q.gp()
if(typeof p!="string")return i
r.l(0,p)}o=A.a1(t.T)
for(s=J.P(s.a(a.h(0,j)));s.m();){n=A.CI(s.gp())
if(n==null)return i
o.l(0,n)}m=a.h(0,"active")
s=m==null
l=s?i:A.Fl(m)
if(!s&&l==null)return i
return new A.mO(r,o,l)},
Fl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!t.f.b(a))return g
s=A.CI(a.h(0,"arrival"))
r=a.h(0,"tier")
q=a.h(0,"phase")
p=a.h(0,"lineIndex")
o=a.h(0,"choice")
n=a.h(0,"complianceMarked")
if(n==null)n=!1
m=a.h(0,"reactionChoiceId")
l=!0
if(s!=null)if(typeof r=="string")if(typeof q=="string")if(A.b7(p))if(!(p<0))if(A.bE(n))if(!(m!=null&&typeof m!="string"))l=o!=null&&typeof o!="string"
if(l)return g
k=A.bP(new A.F(B.du,t.u_.a(new A.oh(r)),t.ni),t.hF)
j=A.bP(new A.F(B.mj,t.da.a(new A.oi(q)),t.g2),t.gM)
l=o==null
i=l?g:A.bP(new A.F(B.kO,t.kr.a(new A.oj(o)),t.fw),t.fP)
h=!0
if(k!=null)if(j!=null)l=!l&&i==null
else l=h
else l=h
if(l)return g
return new A.kA(s,k,j,p,i,n,A.as(m))},
c0:function c0(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dw:function dw(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mO:function mO(a,b,c){this.a=a
this.b=b
this.c=c},
vL:function vL(){},
kA:function kA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oh:function oh(a){this.a=a},
oi:function oi(a){this.a=a},
oj:function oj(a){this.a=a},
mL:function mL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=0
_.r=!1
_.w=null},
vW:function vW(){},
bC:function bC(a){this.a=a},
mK:function mK(a){this.a=a},
mI:function mI(a){this.a=a},
jw:function jw(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b,c){this.a=a
this.b=b
this.c=c},
xS(){var s=0,r=A.aN(t.H),q=1,p=[],o,n,m,l
var $async$xS=A.aO(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a7(A.ax(A.c(A.c(A.c(A.c(v.G.window).navigator).clipboard).writeText(B.f.a3($.bX().fg(),null))),t.X),$async$xS)
case 6:$.o.j().setAttribute("data-renderer-shader-lab-clipboard","copied")
$.o.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
l=p.pop()
o=A.am(l)
m=$.o.j()
m.setAttribute("data-renderer-shader-lab-clipboard","copy-failed")
$.o.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.z(o))
s=5
break
case 2:s=1
break
case 5:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$xS,r)},
yg(){var s=0,r=A.aN(t.H),q=1,p=[],o,n,m,l,k,j
var $async$yg=A.aO(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a7(A.ax(A.c(A.c(A.c(A.c(v.G.window).navigator).clipboard).readText()),t.N),$async$yg)
case 6:o=b
n=o
$.bX().om(n)
$.o.j().setAttribute("data-renderer-shader-lab-clipboard","imported")
$.o.j().removeAttribute("data-renderer-shader-lab-clipboard-error")
q=1
s=5
break
case 3:q=2
j=p.pop()
m=A.am(j)
k=$.o.j()
k.setAttribute("data-renderer-shader-lab-clipboard","import-failed")
$.o.j().setAttribute("data-renderer-shader-lab-clipboard-error",A.z(m))
s=5
break
case 2:s=1
break
case 5:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$yg,r)},
JY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!$.kt())return f
n=A.e8().gb2()
m=n.h(0,"captureSeed")
l=A.dX(m==null?"":m,f)
m=n.h(0,"captureDay")
k=A.dX(m==null?"":m,f)
m=n.h(0,"captureHour")
j=A.fv(m==null?"":m)
i=n.h(0,"captureWeather")
h=n.h(0,"captureShutters")
s=n.h(0,"captureShutterMap")
r=null
if(s!=null)try{q=B.f.am(s,f)
if(t.f.b(q)){m=t.N
p=A.n(m,m)
for(m=q.gO(),m=m.gA(m);m.m();){o=m.gp()
if(typeof o.a!="string"||typeof o.b!="string"||!B.qs.q(0,o.b))return f
J.bd(p,A.x(o.a),A.x(o.b))}r=p}else return f}catch(g){if(A.am(g) instanceof A.B)return f
else throw g}if(l==null||l<0||k==null||k<1||k>21||j==null||!isFinite(j)||j<0||j>=24||i==null||!B.qz.q(0,i))return f
if(h!=null&&!B.qw.q(0,h))return f
return new A.wp(l,k,j,h,r)},
JZ(){var s,r,q,p=A.e8().gb2().h(0,"cameraProfile")
A:{if("wide"===p){s=B.fM
break A}if("intimate"===p){s=B.fO
break A}s=B.fN
break A}r=A.e8().gb2().h(0,"cameraFov")
q=A.fv(r==null?"":r)
if(q==null||!isFinite(q))return s
return new A.ha(B.b.n(q,35,100)*3.141592653589793/180,s.b,s.c)},
ia(a){var s=$.bm
if(s===a&&B.c.q(A.x(a.b.className),"open"))return
if(s!=null)s.al()
$.bm=a
if(a===$.fX.j())$.fX.j().jv($.ah===$.T.j().r)
if(a===$.cJ.j())$.ij().iU("gameplay.viewport")
else $.ij().pe(A.DR(a))
s=$.ap.j()
s.ay=!1
s.b4()
$.f2=0
a.c6()},
AK(a,b,c){var s,r,q
$.kn=!0
s=$.bm
if(s!=null)s.al()
$.bm=a
s=$.ij()
if(s.a.a.length===0)s.iU(c)
r=A.J(s.a.a,t.oP)
r.push(new A.dV(b,B.aa,c))
q=s.a
s.a=new A.eK(r,q.b,q.c)
s.kY(b)
s=$.ap.j()
s.ay=!1
s.b4()
$.f2=0
a.c6()
$.kn=!1},
ej(a){var s,r,q,p,o,n,m,l=null
if($.kn)return
$.kn=!0
a.al()
$.bm=null
s=$.ij().mE()
$.kn=!1
r=s.a
if(r===B.e5){$.f2=0
r=$.ap.j()
r.b4()
r.ay=!0
q=A.H(A.c(v.G.document).getElementById("game"))
if(t.m.b(q))q.focus()
return}if(r!==B.e4)return
r=s.c.a
r=r.length===0?l:B.a.gac(r)
p=r==null?l:r.a
A:{if(B.bX===p){r=$.cJ.j()
break A}if(B.dV===p){r=$.i2.j()
break A}r=l
break A}if(r!=null){o=s.d
$.bm=r
n=$.ap.j()
n.ay=!1
n.b4()
$.f2=0
r.c6()
m=o==null?l:A.H(A.c(v.G.document).getElementById(o))
if(t.m.b(m))m.focus()}},
kq(a){if($.bm===a&&B.c.q(A.x(a.b.className),"open"))a.al()
else A.ia(a)},
ib(a){var s
if($.kn)return
if($.bm===a)$.bm=null
if(a===$.cJ.j())$.ij().cQ()
else $.ij().nO(A.DR(a))
$.f2=0
s=$.ap.j()
s.b4()
s.ay=!0},
DR(a){if(a===$.cJ.j())return B.dW
if(a===$.i2.j())return B.aa
if(a instanceof A.hK)return B.aa
if(a instanceof A.iH)return B.aa
if(a instanceof A.iw)return B.aa
if(a===$.kd.j())return B.oh
if(a===$.fX.j())return B.oi
if(a===$.kc.j())return B.oj
if(a===$.nL.j())return B.aa
if(a===$.ka.j())return B.ol
return B.ok},
nR(a,b){var s
a.soZ(new A.xB())
a.sp5(new A.xC())
a.sp0(new A.xD())
a.soV(new A.xJ())
a.soY(new A.xK())
a.spd(new A.xL())
a.sp8(new A.xM())
a.sp7(new A.xN())
a.sbo(b?new A.xO(a):new A.xP(a))
a.sbd(b?new A.xQ(a):new A.xE(a))
s=a.f
if(s===B.S)a.soM(new A.xF())
if(s===B.ac)a.soW(new A.xG())
if(s===B.T){a.soL(new A.xH())
a.sp6(new A.xI())}},
IZ(){var s=new A.xx(),r=$.f0.j()
r.sf4(s)
r.sp_(new A.xy(s))
r.sbo(new A.xz())
r.sbd(new A.xA())},
nQ(a,b,c){return A.IW(a,b,c)},
IW(a,b,c){var s=0,r=A.aN(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g
var $async$nQ=A.aO(function(d,e){if(d===1){p.push(e)
s=q}for(;;)switch(s){case 0:s=c!=null?2:3
break
case 2:l=new A.xt()
k=c.$ti
j=$.at
i=new A.au(j,k)
if(j!==B.D)l=A.DX(l,j)
c.d0(new A.eb(i,2,null,l,k.i("eb<1,1>")))
s=4
return A.a7(i,$async$nQ)
case 4:case 3:o=$.ku().b
n=$.aA
q=6
s=n!=null?9:10
break
case 9:s=11
return A.a7(n.dj(b.a),$async$nQ)
case 11:case 10:k=b.a
$.ki=A.hr(k,a)
$.f0.j().cY(a,k,b.b)
A.AM()
A.ko()
q=1
s=8
break
case 6:q=5
g=p.pop()
m=A.am(g)
$.ki=A.hr(o,o)
k=$.f0.j()
k.cY(o,o,A.d(["renderer transaction rejected: "+A.z(m)],t.s))
A.AM()
s=8
break
case 5:s=1
break
case 8:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$nQ,r)},
JN(){var s,r,q,p,o,n=null
try{n=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.graphics.profile"))}catch(s){}if(n!=null)try{r=B.f.am(n,null)
if(!t.f.b(r)||!J.ab(r.h(0,"version"),1))A.h(B.iB)
q=A.BO(r.h(0,"requested"))
$.ki=A.hr(A.BO(r.h(0,"effective")),q)}catch(s){$.ki=A.hr(null,null)}p=$.ku().a
o=A.Es(p,A.DE())
r=o.a
$.ki=A.hr(r,p)
$.f0.j().cY(p,r,o.b)
A.AM()
A.ko()},
DE(){var s,r,q,p,o=$.fW.j().gic().d
for(s=o.length,r=1,q=0;q<s;++q){p=o[q]
if(!B.c.Y(p,"max-samples-"))continue
r=A.dX(B.c.aT(p,12),null)
if(r==null)r=1}return new A.qA(r,B.a.q(o,"disjoint-timer-query"))},
AM(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.graphics.profile",B.f.a3($.ku().D(),null))}catch(s){}},
IY(){var s=$.k9.j()
s.sf4(new A.xu())
s.sbo(new A.xv())
s.sbd(new A.xw())},
JL(){var s,r,q,p,o,n=null
try{n=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.controls.profile"))}catch(s){}if(n!=null)try{$.Az=A.FH(B.f.am(n,null))}catch(s){$.Az=A.hh(null,null,!1,1,!1,!1,2,1)}r=$.k9.j()
q=r.w=$.h2()
r.x=new A.kY(q)
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
r.eq()
$.ap.j().fu($.h2().r)
r=$.ap.j()
q=$.h2()
p=r.ch
p.a=q.f
p.f9()
r.b4()
A.DT()},
DT(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.controls.profile",B.f.a3($.h2().D(),null))}catch(s){}},
JK(){var s,r=null
try{r=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio.options"))}catch(s){}if(r!=null)try{$.kg=A.Fs(B.f.am(r,null))}catch(s){$.kg=B.ba}$.i0.j().jt($.kg)
A.DS()
A.Ar()},
DS(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio.options",B.f.a3($.kg.D(),null))}catch(s){}},
Ar(){var s=$.bs
if(s==null)return
s.jD($.kg)},
JM(){var s,r=null
try{r=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.gameplay.options"))}catch(s){}if(r!=null)try{$.AD=A.Gc(B.f.am(r,null))}catch(s){$.AD=$.zQ()}$.kb.j().ju($.cM())
A.DU()
A.Dn()},
DU(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.gameplay.options",B.f.a3($.cM().D(),null))}catch(s){}},
Dn(){var s,r="detailed",q=A.Gb($.cM()),p=A.H(A.c(v.G.document).documentElement)
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
JJ(){var s,r=null
try{r=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.accessibility.profile"))}catch(s){}if(r!=null)try{$.dB=A.Fj(B.f.am(r,null))}catch(s){$.dB=B.aJ}$.fV.j().ft($.dB)
A.AL()
A.nN()},
AL(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.accessibility.profile",B.f.a3($.dB.D(),null))}catch(s){}},
nN(){var s,r,q,p,o,n,m=$.dB,l=$.yH,k=$.B2,j=m.d
if(j==null)j=1
if(j<0.8||j>2)A.h(B.hJ)
s=m.b
l=s==null?l:s
s=m.c
k=s==null?k:s
s=m.e===!0
m=m.f
if(m==null)m=B.aq
$.AR=l
$.d5.j()
r=A.H(A.c(v.G.document).documentElement)
q=r==null
p=q?null:A.U(A.c(r.classList).contains("high-contrast"))
o=q?null:A.U(A.c(r.classList).contains("strong-highlights"))
n=o===!0
o=l||k
p=p===!0||n
if(!q)A.U(A.c(r.classList).toggle("reduced-motion",l))
if(!q)A.U(A.c(r.classList).toggle("photosensitivity-safe",k))
if(!q)A.U(A.c(r.classList).toggle("captions-enabled",s))
if(!q)A.U(A.c(r.classList).toggle("reduced-effects",o))
if(!q)A.U(A.c(r.classList).toggle("focus-visible-enhanced",p))
if(t.m.b(r))A.c(r.style).setProperty("font-size",A.z(j*100)+"%")
q=$.o.j()
q.setAttribute("data-accessibility-reduced-motion",""+l)
q.setAttribute("data-accessibility-photosensitivity-safe",""+k)
q.setAttribute("data-accessibility-ui-scale",A.z(j))
q.setAttribute("data-accessibility-captions",""+s)
q.setAttribute("data-accessibility-screen-reader-verbosity",m.b)
q.setAttribute("data-accessibility-reduced-effects",""+o)
q.setAttribute("data-accessibility-focus-visible",""+p)
q.setAttribute("data-accessibility-essential-cues","true")
if($.Dl){m=$.bl.j()
l=$.dB.f
m.e=new A.ky(l==null?B.aq:l)
m=$.bl.j()
m.c=s
if(!s){m=m.b
m.textContent=""
m.className="caption-cue"}}},
DW(a){var s,r,q
A.f6("renderer-unavailable")
s=$.o.j()
s.setAttribute("data-renderer-backend","pixeldart")
s.setAttribute("data-renderer-fallback","false")
s.setAttribute("data-renderer-error",a)
r=t.N
q=A.n(r,t.X)
q.k(0,"kind","pixeldart")
q.k(0,"explicit",$.dA.j().b)
$.dA.j()
q.k(0,"automatic",!1)
q.k(0,"fallback",!1)
q.k(0,"rejected",$.dA.j().d)
q.k(0,"aliasUsed",$.dA.j().f)
if($.dA.j().e!=null)q.k(0,"rejectionReason",$.dA.j().e)
if($.dA.j().r!=null)q.k(0,"aliasReason",$.dA.j().r)
s.setAttribute("data-renderer-diagnostics",B.f.a3(A.E(["backend","pixeldart","fallback",!1,"failureReason",a,"capabilities",B.o,"selection",q],r,t.K),null))},
Jm(){var s=v.G,r=A.c(A.c(s.window).matchMedia("(prefers-reduced-motion: reduce)")),q=A.c(A.c(s.window).matchMedia("(prefers-reduced-transparency: reduce)"))
s=new A.yk(r,q)
r.addEventListener("change",A.Z(new A.yi(s)))
q.addEventListener("change",A.Z(new A.yj(s)))},
o5(){var s=0,r=A.aN(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9
var $async$o5=A.aO(function(f1,f2){if(f1===1){o.push(f2)
s=p}for(;;)switch(s){case 0:e7=v.G
e8=A.H(A.c(e7.document).getElementById("game"))
if(e8==null){s=1
break}$.o.b=e8
$.AC=A.H(A.c(e7.document).getElementById("fps"))
$.dA.b=$.EY().cV(A.e8().gb2().h(0,"renderer"))
A.Jn()
c1=$.o.j()
c2=A.j(A.c(e7.window).innerWidth)>0?A.j(A.c(e7.window).innerWidth):800
c1.width=c2
c2=$.o.j()
c1=A.j(A.c(e7.window).innerHeight)>0?A.j(A.c(e7.window).innerHeight):600
c2.height=c1
c3=A.H(A.c(e7.document).getElementById("ui-canvas"))
if(c3!=null){$.Dk.b=c3
c3.width=A.j($.o.j().width)
c3.height=A.j($.o.j().height)
c1=new A.pr(c3,A.d([],t.km))
c4=A.H(c3.getContext("2d"))
if(!t.m.b(c4))A.h(A.i("Failed to get 2D context for CanvasP5GuiEngine"))
c1.b=c4
c1=new A.ub(c1)
$.f5=c1
c1.dW(A.j($.o.j().width),A.j($.o.j().height))}n=B.fL.nD(e8)
if(n==null){A.DW("webgl2 unavailable")
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
m=new A.nm(n,c1,c2,c6,A.n(c7,t.qr),c8,A.n(c7,c9),A.n(c7,d0),A.n(c7,t.xp),A.n(c7,t.bE),A.n(c7,c9),A.n(c7,d0),c5,A.n(c7,c9),A.n(c7,d0),A.n(c7,c7),A.n(d1,d2),A.n(c7,t.qS),d3,B.lq,A.n(c7,t.Aj),A.n(c7,c7),A.n(c7,d2),A.n(c7,t.vD),A.n(c7,d2),A.n(c7,d2),new A.rZ(A.n(c7,t.ml),A.n(c7,d1)),A.n(c7,t.mL),A.n(c7,t.w1),B.j8,B.oz,B.dB,B.lr,B.dD,B.lE)
$.aA=m
c1=$.dA.j()
c2=t.dM.a(m)
if(c1.a!==B.b_)A.h(A.i("legacy renderer backend is retired; production requires Pixeldart"))
c1=new A.ty(c2,c1.D(),B.q4)
c2.op()
c1.d=B.a1
$.fW.b=c1}catch(f0){l=A.am(f0)
k=A.d8(f0)
g=$.o.j()
g.setAttribute("data-renderer-initialization-error",A.z(l))
g.setAttribute("data-renderer-error",A.z(l))
if($.kt())$.o.j().setAttribute("data-renderer-error-stack",A.z(k))
A.DW("pixeldart initialization failed")
s=1
break}A.ko()
p=4
A.f6("initializing")
$.d5.b=new A.pq(new A.a(0,0,0),new A.a(0,0,1),new A.a(0,1,0),new A.a(1,0,0),$.Bn())
$.yH=A.U(A.c(A.c(e7.window).matchMedia("(prefers-reduced-motion: reduce)")).matches)
$.B2=A.U(A.c(A.c(e7.window).matchMedia("(prefers-reduced-transparency: reduce)")).matches)
$.AR=$.yH
$.d5.j()
c1=A.c(e7.window)
c2=t.N
c5=t.s
c6=t.a
c5=A.Gj(A.E(["moveForward",A.d(["KeyW"],c5),"moveBack",A.d(["KeyS"],c5),"moveLeft",A.d(["KeyA"],c5),"moveRight",A.d(["KeyD"],c5),"interact",A.d(["KeyE"],c5),"secondary",A.d(["KeyQ"],c5),"run",A.d(["ShiftLeft"],c5),"crouch",A.d(["ControlLeft"],c5),"rotate",A.d(["KeyR"],c5),"reach",A.d(["KeyF"],c5),"journal",A.d(["KeyJ"],c5),"sleep",A.d(["KeyL"],c5),"pause",A.d(["Escape"],c5)],c2,c6))
c7=A.c(c1.document)
c5=new A.ly(c1,c7,A.a1(c2),A.a1(c2),A.a1(c2),A.a1(c2),A.a1(c2),new A.a(0,0,0),new A.ri(),c5)
c1.addEventListener("keydown",A.Z(c5.glr()))
c1.addEventListener("keyup",A.Z(c5.glt()))
c1.addEventListener("mousemove",A.Z(c5.glz()))
c1.addEventListener("mousedown",A.Z(c5.glx()))
c1.addEventListener("mouseup",A.Z(c5.glB()))
c1.addEventListener("wheel",A.Z(c5.glD()))
c1.addEventListener("blur",A.Z(c5.glF()))
c7.addEventListener("pointerlockchange",A.Z(c5.glv()))
$.ap.b=c5
c5=$.o.j()
c1=A.j(A.c(e7.window).innerWidth)>0?A.j(A.c(e7.window).innerWidth):800
c5.width=c1
c1=$.o.j()
c5=A.j(A.c(e7.window).innerHeight)>0?A.j(A.c(e7.window).innerHeight):600
c1.height=c5
A.f6("renderer")
A.f6("text")
c5=$.h3()
s=7
return A.a7(c5.bm(),$async$o5)
case 7:j=c5.q5()
i=A.Hz(j)
if(!(i instanceof A.mN)){h=t.bB.a(i).a
g=h.b
throw A.b("Failed to build visitors: "+g)}$.aV.b=i.a
$.nK.b=A.Fm(j)
g=A.n(c2,c6)
for(c1=t.j,d5=0;d5<5;++d5){f=B.G[d5]
c6=A.x(f)
c7=c5.c
c7===$&&A.u()
d6=c7.h(0,c6)
c6=c1.b(d6)?A.aI(d6,!0,c2):B.o
J.bd(g,f,c6)}e=A.HA(g)
s=8
return A.a7(A.nV(),$async$o5)
case 8:d=f2
$.Aq.b=new A.pj(B.fK)
c=$.Aq.j().pr(new A.z7(e,d))
d7=$.zR()
b=d7
if(c.a==null){g=d
c2=b
c2=c2==null?null:c2.a
if(c2==null)c2=1+B.bd.b1(2147483647)
c6=b
c6=c6==null?null:c6.b
if(c6==null)c6=1
c7=b
c7=c7==null?null:B.b.aZ(c7.c)
if(c7==null)c7=7
if(c6<1)A.h(A.a8(c6,"startDay","must be at least 1"))
if(c7<0||c7>=24)A.h(A.a8(c7,"startHour","must be 0 through 23"))
if(!isFinite(5760))A.h(A.a8(5760,"daySeconds","must be finite and > 0"))
d8=new A.lp(c6,7,5760)
d8.fE(c7)
d9=A.BX(e)
if(g==null){g=$.p4
e0=A.B4(g==null?$.p4=A.oZ(B.f.am(u.F,null)):g,42)}else e0=A.B4(g,42)
g=A.BM(42,c2,e0,d8,d9,A.BF(6,16,d9,null,6,B.lF,d8),new A.l6(0,0,0,!1),A.tc(null,null,null))}else{g=c.a
g.toString
g=A.BN(d,g,e)}$.X.b=g
a=c5.ay
if(a==null)g=null
else{g=c.a
g=g==null?null:g.c.h(0,"authoredEvents")
g=A.G9(a,g,$.X.j().b)}$.xm=g
$.aV.j().y=$.X.j().z
g=A.ad(A.Ji($.X.j().b),t.fu)
$.xk.b=new A.w9(g)
g=$.zS()
c2=c.a
g.fb(c2==null?null:c2.c.h(0,"inventoryInspections"))
$.fW.j().ci(A.Cn($.X.j().gj0()))
if(c.b!=null){g=c.b
g.toString
A.h_(g)}g=$.aV.j()
c2=A.KS($.X.j().b,A.KT(j.b))
g.sk_(A.hw(c2,A.C(c2).c))
A.f6("house")
$.T.b=$.X.j().c
$.o0.S(0)
c2=c.a
$.o0.K(0,A.K3(c2==null?null:c2.c.h(0,"weatherSurfaces")))
g=d7==null
a0=g?null:d7.e
a1=g?null:d7.f
if(a1!=null)for(g=$.T.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.r)(g),++d5){a2=g[d5]
for(c5=a2.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.r)(c5),++e1){a3=c5[e1]
a4=a1.h(0,a3.a)
if(a4!=null)a3.w=a4==="open"}}else if(J.ab(a0,"open")||J.ab(a0,"closed")){a5=J.ab(a0,"open")
for(g=$.T.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.r)(g),++d5){a6=g[d5]
for(c5=a6.e,c6=c5.length,e1=0;e1<c5.length;c5.length===c6||(0,A.r)(c5),++e1){a7=c5[e1]
a7.sjQ(a5)}}}a8=$.Bl()
if(a8!=null&&a8.length!==0)for(g=$.T.j().b,c2=g.length,d5=0;d5<g.length;g.length===c2||(0,A.r)(g),++d5){a9=g[d5]
for(c5=a9.r,c6=c5.length,e1=0;e1<c6;++e1){b0=c5[e1]
if(b0.a===a8)b0.d=$.Bm()}}g=$.aA
if(g!=null)g.mD($.T.j())
$.bD.b=$.X.j().d
g=$.T.j().r
$.ah=g==null?"hall":g
g=$.T.j().fa(1.65)
if(g==null){$.T.j()
g=new A.a(12.9375,1.65,0.825)}$.yD=g
$.cq=$.ah===$.T.j().r?3.141592653589793:0
$.f7=0
g=$.el()
$.yO=$.yv=g
b1=g.a_(0,new A.a(0,1.3499999999999999,0))
$.f1.b=new A.kQ(b1,J.Bp(b1,new A.a(0,1.2000000000000002,0)))
$.i1.b=new A.q_()
g=A.AE(B.o)
c2=A.AE(B.o)
c5=new A.uh(B.N,g,c2)
if(!isFinite(0))A.h(B.ho)
if(!B.a.a8(c2,B.a.gaJ(g)))A.h(B.im)
if(c5.a===B.N&&c5.b!==0&&!c5.e)A.h(B.hx)
$.cp.b=c5
g=c.a
b2=A.GM(g==null?null:g.c.h(0,"player"))
if(b2!=null&&b2.ov($.T.j())){g=b2.b
$.yO=$.yv=$.yD=g
$.cq=b2.c
$.f7=b2.d
$.ah=b2.a
b3=g.a_(0,new A.a(0,1.3499999999999999,0))
g=$.f1.j()
g.smF(b3)
g.b=J.Bp(b3,new A.a(0,1.2000000000000002,0))
g=$.f1.j()
c2=$.T.j()
c5=b2.e
c6=b2.f
g.j6($.ah,$.el(),c2,c6,c5)
A.h_("restored position")}b4=$.T.j().fa(1.65)
g=$.o.j()
c2=$.T.j().r
if(c2==null)c2=""
g.setAttribute("data-house-residence-room",c2)
c2=b4==null?"":B.b.G(b4.a,3)+","+B.b.G(b4.b,3)+","+B.b.G(b4.c,3)
g.setAttribute("data-house-residence-spawn",c2)
c2=A.He(A.c(e7.document))
c2.soN(new A.z8())
c2.sbo(new A.z9())
c2.sbd(new A.zk())
$.i2.b=c2
c2=A.c(e7.document)
g=A.c(c2.createElement("div"))
c5=new A.tu(c2,g)
c5.b3(c2)
g.className=A.x(g.className)+" brush-page-frame"
g.setAttribute("aria-label","Pause menu")
g.setAttribute("data-brush-kind","frame")
g.setAttribute("data-brush-state","normal")
A.c(g.appendChild(A.pm(c2,B.fl,1)))
A.c(g.appendChild(A.I(c2,"p","settings-copy","The house waits. Choose what to do next.")))
e2=A.I(c2,"nav","pause-actions",null)
e2.setAttribute("aria-label","Pause actions")
c5.bE(c2,e2,B.dX,"resume")
c5.bE(c2,e2,B.dY,"settings")
c5.bE(c2,e2,B.dZ,"controls")
c5.bE(c2,e2,B.e_,"save now")
c5.bE(c2,e2,B.e0,"help")
c5.bE(c2,e2,B.e1,"credits")
c5.bE(c2,e2,B.e2,"back")
A.c(g.appendChild(e2))
c5.sp9(new A.zu())
c5.sbo(new A.zv())
c5.spb(new A.zw())
c5.soR(new A.zx())
c5.spa(new A.zy())
c5.soX(new A.zz())
c5.soS(new A.zA())
c5.sbd(new A.za())
$.cJ.b=c5
c5=$.X.j().e
g=$.bD.j()
$.X.j()
$.nM.b=new A.rg(c5,g,new A.zb())
g=A.c(e7.document)
c5=$.X.j().e
c2=$.bD.j()
c6=$.nM.j()
c7=A.c(g.createElement("div"))
c6=new A.rq(c5,c2,c6,g,c7)
c6.b3(g)
c7.setAttribute("aria-label","The Journal")
A.c(c7.appendChild(A.I(g,"div","journal-title","The Journal")))
e3=A.I(g,"div","journal-pages",null)
c2=A.I(g,"div","page page-left",null)
c6.y!==$&&A.bc()
c6.y=c2
c5=A.I(g,"div","page page-right",null)
c6.z!==$&&A.bc()
c6.z=c5
A.c(e3.appendChild(c2))
A.c(e3.appendChild(c5))
A.c(c7.appendChild(e3))
A.c(c7.appendChild(c6.kC()))
e4=A.I(g,"div","tape-roll",null)
A.c(e4.style).setProperty("width","8rem")
c5=A.I(g,"div","tape-fill",null)
c6.as!==$&&A.bc()
c6.as=c5
A.c(e4.appendChild(c5))
A.c(c7.appendChild(e4))
e5=A.I(g,"div","consult",null)
A.c(e5.appendChild(A.I(g,"div","consult-label","Cite an entry")))
c5=A.I(g,"div","entry-picker",null)
c6.at!==$&&A.bc()
c6.at=c5
c2=A.I(g,"div","consult-result",null)
c6.ax!==$&&A.bc()
c6.ax=c2
A.c(e5.appendChild(c5))
A.c(e5.appendChild(c2))
A.c(c7.appendChild(e5))
e6=A.H(g.documentElement)
if(t.m.b(e6)){A.c(e6.style).setProperty("--shake-max-deg","3deg")
A.c(e6.style).setProperty("--shake-max-px","2px")}$.kd.b=c6
$.kd.j().sbd(new A.zc())
g=A.c(e7.document)
c2=A.I(g,"div","prompt",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
A.c(c2.style).setProperty("transition-duration","0.3s")
A.c(A.H(g.body).appendChild(c2))
$.Dj.b=new A.tU(c2)
c2=A.c(e7.document)
g=A.I(c2,"div","broadcast",null)
g.setAttribute("role","status")
g.setAttribute("aria-live","polite")
g.setAttribute("aria-atomic","true")
A.c(A.H(c2.body).appendChild(g))
$.Di.b=new A.pi(g)
g=A.c(e7.document)
c2=A.I(g,"div","ambient-notice",null)
c5=A.I(g,"div","caption-cue",null)
c2.setAttribute("role","status")
c2.setAttribute("aria-live","polite")
c2.setAttribute("aria-atomic","true")
c5.setAttribute("aria-hidden","true")
c5.setAttribute("data-caption-kind","non-speech")
A.c(A.H(g.body).appendChild(c2))
A.c(A.H(g.body).appendChild(c5))
$.bl.b=new A.on(c2,c5,B.W)
$.Dl=!0
c5=A.FO(A.c(e7.document))
c5.soQ(A.Eq())
c5.soP(A.L6())
$.aE.b=c5
c5=$.cL()
c5.soO(new A.zd())
c5.soT(A.Eq())
c5=c.a
b5=A.Hx(c5==null?null:c5.c.h(0,"visitors"))
if($.cM().Q&&b5!=null&&$.aV.j().fb(b5))A.K2()
g=$.nK.j()
c2=c.a
g.pO(c2==null?null:c2.c.h(0,"ambient"))
g=c.a
b6=g==null?null:g.c.h(0,"unverifiables")
if(c1.b(b6))for(g=J.P(b6);g.m();){b7=g.gp()
if(A.b7(b7))$.yI.l(0,b7)}g=A.Hj(A.c(e7.document))
g.spc(new A.ze())
g.sbd(new A.zf())
$.fX.b=g
g=A.Gf(A.c(e7.document))
g.sbd(new A.zg())
$.kc.b=g
g=A.FI(A.c(e7.document))
g.sbd(new A.zh())
$.nL.b=g
$.ke.b=A.mn(A.c(e7.document),null)
$.kf.b=A.mn(A.c(e7.document),B.ab)
$.fV.b=A.mn(A.c(e7.document),B.T)
A.nR($.ke.j(),!1)
A.nR($.kf.j(),!0)
A.nR($.fV.j(),!0)
A.JJ()
A.Jm()
$.f0.b=A.Ge(A.c(e7.document))
A.IZ()
A.JN()
$.i0.b=A.mn(A.c(e7.document),B.S)
A.nR($.i0.j(),!0)
A.JK()
$.kb.b=A.mn(A.c(e7.document),B.ac)
A.nR($.kb.j(),!0)
A.JM()
$.k9.b=A.FG(A.c(e7.document))
A.IY()
A.JL()
g=A.FY(A.c(e7.document))
g.sbd(new A.zi())
g.soU(new A.zj())
$.ka.b=g
g=c.a
b8=A.G_(g==null?null:g.c.h(0,"ending"))
if(b8!=null)A.DV(b8)
A.f6("world")
A.DY()
A.c(e7.window).addEventListener("resize",A.Z(new A.zl()))
A.c(e7.document).addEventListener("visibilitychange",A.Z(new A.zm()))
A.c(e7.window).addEventListener("keydown",A.Z(new A.zn()))
A.c(e7.window).addEventListener("keyup",A.Z(new A.zo()))
A.c(e7.window).addEventListener("keydown",A.Z(new A.zp()))
A.c(e7.window).addEventListener("click",A.Z(new A.zq()))
$.o.j().addEventListener("mousemove",A.Z(new A.zr()))
$.o.j().addEventListener("click",A.Z(new A.zs()))
$.o.j().addEventListener("wheel",A.Z(new A.zt()))
A.i7()
A.f6("raf")
A.j(A.c(e7.window).requestAnimationFrame(A.Z(A.Er())))
p=2
s=6
break
case 4:p=3
e9=o.pop()
b9=A.am(e9)
c0=A.d8(e9)
A.yx(b9,c0)
s=6
break
case 3:s=2
break
case 6:case 1:return A.aL(q,r)
case 2:return A.aK(o.at(-1),r)}})
return A.aM($async$o5,r)},
Jl(a){var s,r,q,p=$.f5
if(!$.aE.j().y||p==null)return
s=A.Dw(a)
if(s==null)return
r=$.cL()
q=p.iL(s.a,s.b)
r.r=q==null?null:q.b},
Jk(a){var s,r=$.f5
if(!$.aE.j().y||r==null)return!1
s=A.Dw(a)
if(s==null)return!1
return $.cL().oi(r.iL(s.a,s.b))},
Dw(a){var s=A.c($.o.j().getBoundingClientRect()),r=A.a4(s.width),q=A.a4(s.height)
if(r<=0||q<=0)return null
return new A.a6(A.j(a.clientX)-A.a4(s.left),A.j(a.clientY)-A.a4(s.top))},
Jn(){var s=v.G
A.c(s.window).addEventListener("error",A.Z(new A.yl()))
A.c(s.window).addEventListener("unhandledrejection",A.Z(new A.ym()))},
f6(a){if($.Aw===a)return
$.Aw=a
$.o.j().setAttribute("data-boot-phase",a)},
ko(){var s,r,q,p,o,n=null,m=$.fW.j().gic(),l=$.o.j(),k=A.e8().gb2().h(0,"renderer")
if(k==null)k="auto"
l.setAttribute("data-renderer-request",k)
l.setAttribute("data-renderer-backend",m.a)
l.setAttribute("data-renderer-fallback","false")
l.setAttribute("data-renderer-profile",m.b)
l.setAttribute("data-renderer-diagnostics",B.f.a3(m.D(),n))
k=$.dA.j().e
if(k==null)k=""
l.setAttribute("data-renderer-query-rejection",k)
k=$.bX().goI().length===0?"true":"false"
l.setAttribute("data-renderer-clean-baseline",k)
k=$.aA
if(k==null)k="{}"
else{k=k.e
k===$&&A.u()
k=k.as
if(k==null)k=A.h(A.i("renderer is not initialized"))
s=k.a
s.B()
r=s.b
q=A.J(r,A.v(r).c)
B.a.a7(q)
r=t.N
p=t.K
p=B.f.a3(A.E(["profile",A.E(["kind",s.a.b,"features",q],r,p),"internalWidth",k.b,"internalHeight",k.c,"sampleCount",k.d,"outputEncoding",k.e.b,"shadowMapCount",k.f,"shadowMapSize",k.r,"materialTableCapacity",k.w,"lightTableCapacity",k.x,"textureArrayLayerCapacity",k.y,"diagnosticLevel",k.z.b],r,p),n)
k=p}l.setAttribute("data-renderer-configuration",k)
l.setAttribute("data-renderer-shadow-pcf-kernel","low-discrepancy-9tap")
l.setAttribute("data-renderer-shadow-penumbra-floor","0.15")
l.setAttribute("data-renderer-lighting-falloff","inverse-square-smooth-cutoff")
l.setAttribute("data-renderer-dof-focal-distance","2.5m")
l.setAttribute("data-renderer-camera-inertia","exponential-smoothing")
l.setAttribute("data-renderer-model-package-diagnostics",B.f.a3(B.mo,n))
l=$.aA
o=l==null?n:l.x
if(o!=null)$.o.j().setAttribute("data-renderer-profile-fallback",o)},
JV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
if(!$.kt())return
s=$.Bl()
if(s!=null&&s.length!==0){r=$.o.j()
q=$.Bm()?"on":"off"
r.setAttribute("data-automation-capture-mantle",s+":"+q)}p=$.xk.j().eY($.X.j().gak().a)
r=$.o.j()
q=p.b?"rain":"overcast"
r.setAttribute("data-automation-capture-weather",q)
q=$.zR()
o=q==null?a1:q.e
if(o!=null)$.o.j().setAttribute("data-automation-capture-shutters",o)
$.o.j().setAttribute("data-automation-rain-window-visibility",B.b.G(A.AQ($.ah),3))
r=$.o.j()
q=$.Aw
n=$.ah
m=$.T.j().r
l=$.T.j().x
k=$.ah
j=$.T.j().r
i=$.el()
h=t.N
i=A.E(["x",i.a,"y",i.b,"z",i.c],h,t.i)
g=$.f1.j().ghV()
f=$.f1.j().d
f=f==null?a1:f.b
e=t.X
r.setAttribute("data-automation-player",B.f.a3(A.E(["schemaVersion",1,"phase",q,"roomId",n,"residenceRoomId",m,"residenceRestAnchor",l,"atResidence",k===j,"eye",i,"activeStairId",g,"activeStairProgress",f,"yaw",$.cq,"pitch",$.f7,"modal",$.bm!=null,"dialogueOverlay",$.aE.j().y,"inputEnabled",$.ap.j().ay,"day",$.X.j().gak().a,"hour",$.X.j().gak().b],h,e),a1))
$.o.j().setAttribute("data-story-journal-entry-count",""+$.X.j().gak().r)
d=A.n(h,e)
for(r=$.T.j().c,q=r.length,n=t.K,c=0;c<r.length;r.length===q||(0,A.r)(r),++c){b=r[c]
m=b.ax
l=b.ay
k=b.z
j=m&&!l&&!k
d.k(0,b.a,A.E(["a",b.b,"b",b.c,"open",m,"locked",l,"sticks",k,"passable",j],h,n))}$.o.j().setAttribute("data-automation-portals",B.f.a3(d,a1))
a=$.nO
r=!1
if(a!=null)if($.T.j().e.h(0,"cellar")!=null){r=$.T.j()
q=$.ah
q=r.e.h(0,q)!=null
r=q}if(r){a0=a.cR("cellar",$.ah)
$.o.j().setAttribute("data-audio-transmission-cellar",B.f.a3(A.E(["sourceRoom","cellar","listenerRoom",$.ah,"portalPath",a0.a,"gainDb",a0.c,"lowPassHz",a0.d,"muffle01",a0.e,"barrierIds",a0.b,"reasonTrace",a0.r,"reachable",a0.f],h,n),a1))}else $.o.j().setAttribute("data-audio-transmission-cellar","unavailable")},
kp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if($.cp.j().a!==B.N){A.h_("save unavailable during rupture")
return}try{p=$.Aq.j()
o=$.X.j()
n=t.N
m=t.z
s=A.n(n,m)
l=$.ah
k=$.el()
j=$.cq
i=$.f7
h=$.f1.j().ghV()
g=$.f1.j().d
J.bd(s,"player",new A.m3(l,k,j,i,h,g==null?null:g.b).D())
l=$.aV.j()
k=A.fD(l.b,n)
j=A.fD(l.c,t.T)
l=l.r
J.bd(s,"visitors",new A.mO(k,j,l==null?null:new A.kA(l.a,l.b,l.d,l.f,l.e,l.r,l.w)).D())
l=$.nK.j().b
l=A.J(l,A.v(l).c)
B.a.a7(l)
J.bd(s,"ambient",l)
l=$.xm
if(l!=null)J.bd(s,"authoredEvents",A.E(["delivered",l.gnK()],n,m))
l=A.J($.yI,A.v($.yI).c)
B.a.a7(l)
J.bd(s,"unverifiables",l)
J.bd(s,"inventoryInspections",$.zS().D())
r=A.n(n,t.gG)
for(l=new A.N($.o0,A.v($.o0).i("N<1,2>")).gA(0),k=t.i;l.m();){j=l.d
j.toString
q=j
j=q.a
i=q.b
J.bd(r,j,A.E(["snowDepthM",i.a,"waterFilmDepthM",i.b,"materialDissolution01",i.c],n,k))}J.bd(s,"weatherSurfaces",r)
r=$.AA
if(r!=null)J.bd(s,"ending",A.E(["kind",r.a.b],n,n))
s=t.P.a(s)
r=o.a
l=o.b
k=A.BQ(o.c).D()
j=o.d
p.q7(A.Cq(s,A.E(["houseSeed",r,"runSeed",l,"house",k,"time",A.E(["day",j.a,"hour",j.b],n,t.fY),"dayLoop",o.f.D(),"journal",o.e.D(),"difficulty",o.r.D(),"narrative",o.z.D()],n,m),2))
A.h_(a)}catch(f){A.h_("save failed")}},
JQ(){var s,r,q=$.T.j().fa(1.65),p=$.T.j().r
if(q==null||p==null||$.T.j().e.h(0,p)==null)return
$.kv().a=new A.a(0,0,0)
$.ah=p
$.yO=$.yv=$.yD=q
s=q.a_(0,new A.a(0,1.3499999999999999,0))
r=$.f1.j()
r.a=s
r.b=s.T(0,new A.a(0,1.2000000000000002,0))
r.j6(p,q,$.T.j(),null,null)},
K3(a){var s,r,q,p
if(a==null)return A.n(t.N,t.xe)
if(!t.f.b(a))throw A.b(B.hF)
s=A.n(t.N,t.xe)
for(r=a.gO(),r=r.gA(r);r.m();){q=r.gp()
p=q.a
if(typeof p!="string")throw A.b(B.iT)
s.k(0,p,A.HH(q.b))}return s},
JT(){var s=A.H(A.c(v.G.document).documentElement),r=s==null?null:A.as(s.getAttribute("data-gameplay-focus-loss")),q=A.bP(new A.F(B.aW,t.rg.a(new A.ys(r)),t.vK),t.x)
switch((q==null?B.bk:q).a){case 0:$.fZ=!0
s=$.bs
if(s!=null)s.fz(!0)
break
case 1:$.fZ=!0
break
case 2:break}},
h_(a){var s=v.G,r=A.H(A.c(s.document).getElementById("save-status"))
if(r==null)return
s=A.H(A.c(s.document).documentElement)
s=s==null?null:A.as(s.getAttribute("data-gameplay-save-feedback"))
r.textContent=a
s=s==="detailed"?"visible detailed":"visible"
r.className=s
A.G8(B.h6,new A.yC(r),t.H)},
yx(a,b){var s,r,q,p
A.f6("error")
s=A.z(a)
r=A.zL(s,"\n"," ")
s=$.AC
if(s!=null)s.textContent="boot: "+r
s=v.G
q=A.H(A.c(s.document).getElementById("credits"))
if(q!=null)q.textContent="boot error: "+r
q=b==null
p=q?A.z(a):A.z(a)+"\n"+b.t(0)
$.o.j().setAttribute("data-boot-error",p)
if($.kt()&&!q)$.o.j().setAttribute("data-boot-stack",b.t(0))
A.c(s.console).error(p)},
Dq(){var s,r
if($.Au)return
$.Au=!0
s=$.bs
r=s==null
if(!r)s.cQ()
if(!r)s.fH("music")
B.a.l($.dC,"arm")},
i7(){var s=0,r=A.aN(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$i7=A.aO(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a7(A.i6(),$async$i7)
case 2:o=null
q=4
s=7
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("res/manifest.json")),t.m),$async$i7)
case 7:n=b
i=A
s=8
return A.a7(A.ax(A.c(n.json()),t.X),$async$i7)
case 8:o=i.c(b)
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
if(k!=null&&typeof k==="string"){A.x(k)
l=A.H(A.c(v.G.document).getElementById("credits"))
if(l!=null)l.textContent=k
l=$.nL.j().f
l===$&&A.u()
l.textContent=k}s=9
return A.a7(A.qe(A.d([A.yo(o),A.yh(o),A.kl()],t.iJ),t.H),$async$i7)
case 9:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$i7,r)},
kl(){var s=0,r=A.aN(t.H),q=1,p=[],o,n,m,l,k,j,i
var $async$kl=A.aO(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("res/models/index.json")),t.m),$async$kl)
case 6:o=b
if(!A.U(o.ok)){k=A.i("HTTP "+A.z(A.o3(o,"status",t.S)))
throw A.b(k)}s=7
return A.a7(A.ax(A.c(o.text()),t.N),$async$kl)
case 7:n=b
m=A.GO(n)
$.o.j().setAttribute("data-renderer-model-packages","validated")
$.o.j().setAttribute("data-renderer-model-packages-source","res/models/index.json")
k=$.aA
k=k==null?null:k.dO(m)
s=8
return A.a7(k instanceof A.au?k:A.I1(k,t.H),$async$kl)
case 8:q=1
s=5
break
case 3:q=2
i=p.pop()
l=A.am(i)
k=$.o.j()
k.setAttribute("data-renderer-model-packages","unavailable")
$.o.j().setAttribute("data-renderer-model-package-error",A.z(l))
s=5
break
case 2:s=1
break
case 5:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$kl,r)},
i6(){var s=0,r=A.aN(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$i6=A.aO(function(a,a0){if(a===1){p.push(a0)
s=q}for(;;)switch(s){case 0:d=null
c=!1
j=v.G,i=t.m,h=t.N,g=0
case 2:if(!(g<2)){s=4
break}o=B.dy[g]
q=6
s=9
return A.a7(A.ax(A.c(A.c(j.window).fetch(o)),i),$async$i6)
case 9:n=a0
s=10
return A.a7(A.ax(A.c(n.text()),h),$async$i6)
case 10:m=a0
l=A.oZ(B.f.am(m,null))
f=$.T.b
if(f===$.T)A.h(A.aa(""))
l.fj(f)
f=$.o.b
if(f===$.o)A.h(A.aa(""))
f.setAttribute("data-house-manifest","validated")
f=$.o.b
if(f===$.o)A.h(A.aa(""))
f.setAttribute("data-house-manifest-source",o)
f=$.o.b
if(f===$.o)A.h(A.aa(""))
f.setAttribute("data-house-role",l.c)
f=$.o.b
if(f===$.o)A.h(A.aa(""))
f.setAttribute("data-house-story-authority",l.d)
c=!0
s=4
break
q=1
s=8
break
case 6:q=5
b=p.pop()
k=A.am(b)
d=k
s=8
break
case 5:s=1
break
case 8:case 3:++g
s=2
break
case 4:if(!c){$.o.j().setAttribute("data-house-manifest","unavailable")
A.c(j.console).warn("authored house manifest unavailable: "+A.z(d))}s=11
return A.a7(A.nT(),$async$i6)
case 11:s=12
return A.a7(A.nU(),$async$i6)
case 12:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$i6,r)},
nV(){var s=0,r=A.aN(t.t3),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d
var $async$nV=A.aO(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=v.G,i=t.m,h=t.N,g=0
case 3:if(!(g<2)){s=5
break}n=B.dy[g]
p=7
s=10
return A.a7(A.ax(A.c(A.c(j.window).fetch(n)),i),$async$nV)
case 10:m=b
s=11
return A.a7(A.ax(A.c(m.text()),h),$async$nV)
case 11:l=b
k=A.oZ(B.f.am(l,null))
k.fk()
f=$.o.b
if(f===$.o)A.h(A.aa(""))
f.setAttribute("data-house-blueprint","validated")
f=$.o.b
if(f===$.o)A.h(A.aa(""))
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
case 5:k=$.p4
if(k==null)k=$.p4=A.oZ(B.f.am(u.F,null))
$.o.j().setAttribute("data-house-blueprint","validated")
$.o.j().setAttribute("data-house-blueprint-source","embedded-canonical")
q=k
s=1
break
case 1:return A.aL(q,r)
case 2:return A.aK(o.at(-1),r)}})
return A.aM($async$nV,r)},
nT(){var s=0,r=A.aN(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$nT=A.aO(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a8=null
i=t.j,h=t.P,g=v.G,f=t.m,e=t.N,d=t.X,c=0
case 3:if(!(c<2)){s=5
break}n=B.kW[c]
p=7
s=10
return A.a7(A.ax(A.c(A.c(g.window).fetch(n)),f),$async$nT)
case 10:m=b1
s=11
return A.a7(A.ax(A.c(m.text()),e),$async$nT)
case 11:l=b1
b=B.f.am(l,null)
b=h.b(b)?b:A.eg("house inventory is not an object")
a=b.h(0,"modelScale")
a0=typeof a=="number"&&isFinite(a)?a:A.eg("modelScale is not finite")
a=b.h(0,"schemaVersion")
a1=A.b7(a)?a:A.eg("schemaVersion is not an integer")
a=b.h(0,"sourceRef")
a2=typeof a=="string"&&a.length!==0?a:A.eg("sourceRef is not a string")
a=b.h(0,"assets")
a3=i.b(a)?A.aI(a,!0,d):A.eg("assets is not a list")
a4=A.C(a3)
a5=a4.i("G<1,di>")
a3=A.J(new A.G(a3,a4.i("di(1)").a(A.L2()),a5),a5.i("a0.E"))
a3.$flags=1
a=b.h(0,"placements")
a4=i.b(a)?A.aI(a,!0,d):A.eg("placements is not a list")
a5=A.C(a4)
a6=a5.i("G<1,cU>")
a4=A.J(new A.G(a4,a5.i("cU(1)").a(A.L3()),a6),a6.i("a0.E"))
a4.$flags=1
k=new A.qX(a1,a2,a0,a3,a4)
a1=$.T.b
if(a1===$.T)A.h(A.aa(""))
k.fj(a1)
$.i4=k
a1=$.aA
if(a1!=null)a1.fv(k)
a1=$.o.b
if(a1===$.o)A.h(A.aa(""))
a1.setAttribute("data-house-inventory","validated")
a1=$.o.b
if(a1===$.o)A.h(A.aa(""))
a1.setAttribute("data-house-inventory-source",n)
a1=$.o.b
if(a1===$.o)A.h(A.aa(""))
a1.setAttribute("data-house-inventory-count",""+k.e.length)
a1=$.o.b
if(a1===$.o)A.h(A.aa(""))
a1.setAttribute("data-house-inventory-status-counts",B.f.a3(k.gk5(),null))
s=1
break
p=2
s=9
break
case 7:p=6
a9=o.pop()
j=A.am(a9)
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
A.c(g.console).warn("authored house inventory unavailable: "+A.z(a8))
case 1:return A.aL(q,r)
case 2:return A.aK(o.at(-1),r)}})
return A.aM($async$nT,r)},
nU(){var s=0,r=A.aN(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$nU=A.aO(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:b2=$.i4
if(b2==null){s=1
break}n=null
e=t.N,d=t.dx,c=t.s,b=t.a,a=t.j,a0=t.P,a1=v.G,a2=t.m,a3=t.X,a4=0
case 3:if(!(a4<2)){s=5
break}m=B.lJ[a4]
p=7
s=10
return A.a7(A.ax(A.c(A.c(a1.window).fetch(m)),a2),$async$nU)
case 10:l=b5
s=11
return A.a7(A.ax(A.c(l.text()),e),$async$nU)
case 11:k=b5
a5=B.f.am(k,null)
a5=a0.b(a5)?a5:A.i3("house soundscape is not an object")
a6=a5.h(0,"emitters")
a7=a.b(a6)?A.aI(a6,!0,a3):A.i3("emitters is not a list")
a8=A.C(a7)
a9=a8.i("G<1,dh>")
a7=A.J(new A.G(a7,a8.i("dh(1)").a(A.Li()),a9),a9.i("a0.E"))
a7.$flags=1
a6=a5.h(0,"schemaVersion")
a8=A.b7(a6)?a6:A.i3("schemaVersion is not an integer")
a6=a5.h(0,"sourceRef")
a9=typeof a6=="string"&&a6.length!==0?a6:A.i3("sourceRef is not a string")
j=new A.r4(a8,a9,a7)
a7=$.T.b
if(a7===$.T)A.h(A.aa(""))
j.q0(a7,b2)
$.DH=j
i=A.n(e,b)
for(a7=j.c,a8=a7.length,b0=0;b0<a7.length;a7.length===a8||(0,A.r)(a7),++b0){h=a7[b0]
for(a9=h.f.gO(),a9=a9.gA(a9);a9.m();){g=a9.gp()
J.bd(i,h.a+":"+g.a,A.d([g.b],c))}}a7=$.T.b
if(a7===$.T)A.h(A.aa(""))
a8=A.Fq(i)
a9=new A.oL(a7,A.aZ(B.dO,e,d),a8)
a9.ke(a8,a7,B.dO)
$.nO=a9
a7=$.bs
if(a7!=null){a7.CW=a9
a7.bV()}a7=$.o.b
if(a7===$.o)A.h(A.aa(""))
a7.setAttribute("data-audio-planner","validated")
a7=$.o.b
if(a7===$.o)A.h(A.aa(""))
a7.setAttribute("data-house-soundscape","validated")
a7=$.o.b
if(a7===$.o)A.h(A.aa(""))
a7.setAttribute("data-house-soundscape-source",m)
a7=$.o.b
if(a7===$.o)A.h(A.aa(""))
a7.setAttribute("data-house-sound-emitter-count",""+j.c.length)
s=1
break
p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.am(b3)
n=f
s=9
break
case 6:s=2
break
case 9:case 4:++a4
s=3
break
case 5:$.nO=null
$.o.j().setAttribute("data-audio-planner","unavailable")
$.o.j().setAttribute("data-house-soundscape","unavailable")
$.o.j().setAttribute("data-house-soundscape-error",A.z(n))
A.c(a1.console).warn("authored house soundscape unavailable: "+A.z(n))
case 1:return A.aL(q,r)
case 2:return A.aK(o.at(-1),r)}})
return A.aM($async$nU,r)},
xs(a,b,c){var s,r,q
if(a==null)return
s=t.Cf.a(v.G.Object.keys(a))
s=J.P(t.a.b(s)?s:new A.bf(s,A.C(s).i("bf<1,f>")))
while(s.m()){r=s.gp()
q=a[r]
if(q!=null&&typeof q==="string")b.k(0,c+r,"res/"+A.x(q))}},
yh(a){var s=0,r=A.aN(t.H),q,p,o,n,m,l
var $async$yh=A.aO(function(b,c){if(b===1)return A.aK(c,r)
for(;;)switch(s){case 0:n=t.N
m=A.n(n,n)
n=a==null
A.xs(A.H(n?null:a.sfx),m,"")
A.xs(A.H(n?null:a.ir),m,"ir-")
q=A.H(n?null:a.music)
p=q==null?null:q.loop
if(p!=null&&typeof p==="string")m.k(0,"music","res/"+A.x(p))
l=$
s=2
return A.a7(A.oS(m,$.T.j()),$async$yh)
case 2:o=l.bs=c
o.CW=$.nO
o.bV()
A.JO()
A.E_(o)
A.Ar()
A.E0()
if($.Au){o.cQ()
o.fH("music")}return A.aL(null,r)}})
return A.aM($async$yh,r)},
AY(a,b){var s
A.Eb(a,b)
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.display."+a,b)}catch(s){}},
K_(a){var s,r
try{s=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.display."+a))
return s}catch(r){return null}},
Dm(a,b){var s
if(a!=="brightness")return
s=A.H(A.c(v.G.document).documentElement)
if(t.m.b(s))A.c(s.style).setProperty("filter","brightness("+A.z(B.b.n(b,0.6,1.4))+")")},
xl(a,b){var s=a==="high-contrast"?"high-contrast":"strong-highlights",r=A.H(A.c(v.G.document).documentElement)
if(r!=null)A.U(A.c(r.classList).toggle(s,b))
A.nN()},
E0(){var s,r,q,p,o="brightness",n="high-contrast",m="strong-highlights",l=A.a4($.dE().a.cS(o)),k=A.U($.dE().a.cS(n)),j=A.U($.dE().a.cS(m))
for(s=[$.ke.j(),$.kf.j(),$.fV.j(),$.i0.j(),$.kb.j()],r=0;r<5;++r)s[r].fw(o,l)
A.Dm(o,l)
for(s=[$.ke.j(),$.kf.j(),$.fV.j(),$.i0.j(),$.kb.j()],r=0;r<5;++r){q=s[r]
p=q.fx
if(p!=null)p.checked=k
p=q.fy
if(p!=null)p.checked=j}A.xl(n,k)
A.xl(m,j)},
AX(a,b){var s
A.Eb(a,b)
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.audio."+a,b)}catch(s){}},
JX(a){var s,r
try{s=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.audio."+a))
return s}catch(r){return null}},
E_(a){var s,r,q,p,o,n,m,l,k,j=A.n(t.N,t.i)
for(s=0;s<5;++s){r=B.le[s]
q=$.dE().a.b.h(0,r)
j.k(0,r,A.a4(q==null?A.h(A.i("setting missing from profile: "+r)):q))}p=A.U($.dE().a.cS("muted"))
o=A.U($.dE().a.cS("mono"))
q=j.h(0,"master")
n=j.h(0,"voice")
m=j.h(0,"effects")
a.bD(j.h(0,"ambience"),m,q,j.h(0,"music"),p,n)
a.e1(o)
for(q=[$.ke.j(),$.kf.j(),$.fV.j(),$.i0.j()],n=j.$ti.i("cW<1,2>"),s=0;s<4;++s){l=q[s]
for(m=new A.cW(j,j.r,j.e,n);m.m();){k=m.d
l.fw(k.a,k.b)}m=l.dy
if(m!=null)m.checked=p
m=l.fr
if(m!=null)m.checked=o}},
Do(){var s=$.bs
if(s!=null)A.E_(s)
A.E0()},
JO(){var s,r,q,p,o,n,m,l,k=null
try{k=A.as(A.c(A.c(v.G.window).localStorage).getItem("quarantine.settings.profile"))}catch(s){}if(k!=null)try{r=B.f.am(k,null)
if(!t.f.b(r)||!J.ab(r.h(0,"version"),1))A.h(B.hM)
q=A.Cs(r.h(0,"requested"))
$.E6=A.Ab(A.Cs(r.h(0,"effective")),q)
return}catch(s){}r=t.N
p=t.dR
o=A.n(r,p)
for(n=0;n<10;++n){m=B.L[n]
if(m.w==="audio"){l=m.a
o.k(0,l,A.JX(l))}}r=A.n(r,p)
for(n=0;n<10;++n){m=B.L[n]
if(m.w==="display"){p=m.a
r.k(0,p,A.K_(p))}}$.E6=A.Hg(o,r)
A.yt()},
yt(){var s
try{A.c(A.c(v.G.window).localStorage).setItem("quarantine.settings.profile",B.f.a3($.dE().D(),null))}catch(s){}},
Eb(a,b){var s,r,q,p,o,n,m
switch(A.uX(a).d.a){case 0:r=A.fv(b)
break
case 1:if(b==="true")r=!0
else r=b==="false"?!1:null
break
default:r=null}s=r
if(s==null)return
try{r=$.dE()
q=s
A.uX(a).dX(q)
p=t.N
o=t.K
n=A.hv(r.a.b,p,o)
n.k(0,a,q)
r.a=A.e2(n,1)
n=s
A.uX(a).dX(n)
o=A.hv(r.b.b,p,o)
o.k(0,a,n)
r.b=A.e2(o,1)
A.yt()}catch(m){if(!(A.am(m) instanceof A.B))throw m}},
yo(a){var s=0,r=A.aN(t.H),q,p,o
var $async$yo=A.aO(function(b,c){if(b===1)return A.aK(c,r)
for(;;)switch(s){case 0:p=t.N
o=A.n(p,p)
p=a==null
A.xs(A.H(p?null:a.tex),o,"")
A.xs(A.H(p?null:a.skybox),o,"")
o.k(0,"skybox-main-atmosphere-v1","res/skybox/cannon_8k.jpg")
o.K(0,B.mE)
q=$.aA
p=q==null?null:q.dP(o)
s=2
return A.a7(A.qe(A.d([p==null?A.BL(t.H):p],t.iJ),t.H),$async$yo)
case 2:return A.aL(null,r)}})
return A.aM($async$yo,r)},
DY(){var s,r,q=v.G,p=A.j(A.c(q.window).innerWidth),o=A.j(A.c(q.window).innerHeight),n=$.o.j(),m=p>0?p:800
n.width=m
m=$.o.j()
n=o>0?o:600
m.height=n
s=A.H(A.c(q.document).getElementById("ui-canvas"))
if(t.m.b(s)){s.width=A.j($.o.j().width)
s.height=A.j($.o.j().height)}q=$.f5
if(q!=null)q.dW(A.j($.o.j().width),A.j($.o.j().height))
q=$.fW.j()
n=A.j($.o.j().width)
m=A.j($.o.j().height)
if(q.d!==B.a1)A.h(A.i("pixeldart backend is not ready"))
if(n<=0||m<=0)A.h(A.p("pixeldart surface size must be positive",null))
q.b.dW(n,m)
q=$.aA
r=q==null?null:""+q.b+"x"+q.c
if(r!=null)$.o.j().setAttribute("data-renderer-surface",r)},
Jj(){var s,r,q=$.bm
if(q!=null){s=$.ap.j()
if(!s.CW.bx("pause",s.f)){s=$.ap.j()
s=s.CW.bx("secondary",s.f)}else s=!0
if(s){A.J0(q)
return}if($.ap.j().f.aa(0,"GamepadDpadUp")){A.DN(q,-1)
return}if($.ap.j().f.aa(0,"GamepadDpadDown")){A.DN(q,1)
return}s=$.ap.j()
if(s.CW.bx("interact",s.f)){r=A.H(A.c(v.G.document).activeElement)
if(t.m.b(r)&&A.U(q.b.contains(r)))A.rn(r,"click",t.X)}return}s=$.ap.j()
if(s.CW.bx("pause",s.f)){A.ia($.cJ.j())
return}if($.aE.j().y)return
s=$.ap.j()
if(s.CW.bx("journal",s.f))A.kq($.kd.j())
else{s=$.ap.j()
if(s.CW.bx("sleep",s.f))A.kq($.fX.j())}},
J0(a){if(a===$.cJ.j()){a.al()
return}if(a===$.i2.j()||a instanceof A.hK||a instanceof A.iH||a instanceof A.iw){A.ej(a)
return}a.al()},
DN(a,b){var s,r,q,p,o,n,m=a.b,l=A.c(m.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')),k=A.d([],t.e)
for(s=t.m,r=0;r<A.j(l.length);++r){q=A.H(l.item(r))
if(s.b(q))k.push(q)}if(k.length===0)return
p=A.H(A.c(v.G.document).activeElement)
o=B.a.bK(k,s.b(p)?p:m)
if(o<0)n=b<0?k.length-1:0
else{m=k.length
n=B.d.P(o+b+m,m)}if(!(n>=0&&n<k.length))return A.e(k,n)
k[n].focus()},
JW(g1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9=null,g0="exceeded"
A.a4(g1)
try{s=g1
if(!$.DG){$.AJ=s
$.DG=!0}a2=s
a3=$.AJ
if(typeof a2!=="number")return a2.a_()
r=(a2-a3)/1000
$.AJ=s
a2=r
if(typeof a2!=="number")return a2.cU()
if(a2<0)r=0
a2=r
if(typeof a2!=="number")return a2.jr()
if(a2>0.25)r=0.25
A.Kr(r)
$.ap.j().pm()
a2=$.o.j()
a3=$.ap.j().z!=null?"standard":"none"
a2.setAttribute("data-controller",a3)
q=$.ap.j().z
if(q!=null)$.o.j().setAttribute("data-controller-id",q)
else $.o.j().removeAttribute("data-controller-id")
A.Jj()
if(!$.fZ&&$.bm==null){a2=$.f2
a3=r
if(typeof a3!=="number")return A.B8(a3)
a3=$.f2=a2+a3
p=0
a2=t.aA
for(;;){if(a3>=0.008333333333333333){a4=p
if(typeof a4!=="number")return a4.cU()
a4=a4<10}else a4=!1
if(!a4)break
$.yv=$.el()
if(!$.Bk()){a3=$.X.b
if(a3===$.X)A.h(A.aa(""))
a3.mt(0.008333333333333333*($.cM().Q?1:20))
a3=$.F0()
a4=$.X.b
if(a4===$.X)A.h(A.aa(""))
a4=a4.gak()
a5=$.X.b
if(a5===$.X)A.h(A.aa(""))
a3=a3.cq(a4.a,a5.gak().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.r)(a3),++a6){o=a3[a6]
B.a.l($.dC,"clock:"+o.a)}a3=$.F1()
a4=$.X.b
if(a4===$.X)A.h(A.aa(""))
a4=a4.gak()
a5=$.X.b
if(a5===$.X)A.h(A.aa(""))
a3=a3.cq(a4.a,a5.gak().b)
a4=a3.length
a6=0
for(;a6<a3.length;a3.length===a4||(0,A.r)(a3),++a6){n=a3[a6]
B.a.l($.dC,"service:"+n.a+":"+n.b)}}A.Ku()
A.Kq()
a3=$.aV.b
if(a3===$.aV)A.h(A.aa(""))
a4=$.X.b
if(a4===$.X)A.h(A.aa(""))
a3.w=a4.r.c>=0.5
a3=a3.f
a7=A.aI(a3,!1,a2)
a7.$flags=3
a8=a7
B.a.S(a3)
if(a8.length!==0){a3=$.X.b
if(a3===$.X)A.h(A.aa(""))
a3.ps(a8)}A.Kp()
A.Kt()
A.Ks()
A.Ko(0.008333333333333333)
a3=$.i1.b
if(a3===$.i1)A.h(A.aa(""))
if(a3.a!=null)if((a3.b-=0.008333333333333333)<=0)a3.a=null
a3=$.cp.b
if(a3===$.cp)A.h(A.aa(""))
m=a3.a!==B.N
a4=$.T.b
if(a4===$.T)A.h(A.aa(""))
a3.ew(0.008333333333333333,a4)
if(m){a3=$.cp.b
if(a3===$.cp)A.h(A.aa(""))
a3=a3.e}else a3=!1
if(a3)A.DZ(!0)
a3=$.f2-0.008333333333333333
$.f2=a3
a4=p
if(typeof a4!=="number")return a4.T()
p=a4+1}l=B.b.n(a3/0.008333333333333333,0,1)
a2=$.yO=A.CH($.F3(),$.el(),l)
k=$.bs
if(k!=null){a3=k
a4=Math.sin($.cq)
a5=Math.cos($.cq)
a9=A.c(a3.a.listener)
a9.setPosition(a2.a,a2.b,a2.c)
A.b2(a9,"setOrientation",[a4,0,a5,0,1,0],t.H)
a3.jx($.ah)
for(a2=$.dC.length,a6=0;a6<$.dC.length;$.dC.length===a2||(0,A.r)($.dC),++a6){j=$.dC[a6]
A.J4(k,j)}B.a.S($.dC)
$.o.j().setAttribute("data-audio-spatial-active",""+k.cx.a)
$.o.j().setAttribute("data-audio-muffle01",B.b.G(k.goH(),3))
a2=$.o.j()
a3=k.cy?"true":"false"
a2.setAttribute("data-audio-music-started",a3)
a3=$.o.j()
a2=k.dy
if(a2==null)a2="ir-fallback"
a3.setAttribute("data-audio-room-ir",a2)
a2=$.o.j()
a2.setAttribute("data-audio-context-suspended",""+(A.x(k.a.state)==="suspended"))
a2.setAttribute("data-audio-muted",""+k.k2)
a2.setAttribute("data-audio-master-mix",B.b.G(k.fx,3))
a2.setAttribute("data-audio-voice-mix",B.b.G(k.fy,3))
a3=$.dB
a2.setAttribute("data-audio-captions",""+(a3.e===!0))
a2.setAttribute("data-audio-paused",""+$.fZ)}}$.d5.j().iQ($.o8(),$.cq,$.f7)
a2=$.aA
if(a2!=null){a3=$.d5.j()
a4=a3.a
b0=new A.A(a4.a,a4.b,a4.c)
a4=a3.b
b1=new A.A(a4.a,a4.b,a4.c)
a4=a3.c
b2=a2.b/a2.c
b3=A.C3(b0,b1,new A.A(a4.a,a4.b,a4.c))
a3=a3.f
a4=a3.b
a5=a3.c
b4=A.A5(b2,a5,a3.a,a4)
a2.to=A.BB(b2,b0,a5,b1,a4,b4,b3,b4.a6(0,b3))}a2=$.aA
if(a2!=null)a2.jI($.T.j(),$.ah)
i=$.xk.j().eY($.X.j().gak().a)
h=B.b.n(1-A.AQ($.ah),0,1)
a2=$.aA
if(a2!=null)a2.jw($.T.j(),$.ah,$.o8(),$.bD.j().gfJ(),$.bD.j().gnE(),i,A.Lc($.ah),$.bD.j().b)
a2=$.aA
if(a2!=null){a3=A.Ky($.T.j(),$.ah,i.r,$.i4)
a4=t.fu.a(i)
t.A1.a(a3)
a5=A.az(h)
a2.dr=A.ad(a3,t.qR)
a3=a4.r
b5=A.w8(new A.hS(a4,a3,0.8,a5,1,0,1,1,0))
a2.y2=b5
a2.dq=A.HG(a3,b5.z,$.o8(),a2.cC)}g=A.w8(new A.hS(i,i.r,0.8,0,1,0,1,1,0))
a2=$.F4()
a3=$.F5()
f=null
e=g.a
A:{if(B.aA===e||B.ae===e||B.a0===e){f=g.e
break A}if(B.af===e||B.x===e){f=0
break A}}f=f
d=a2.k6(!$.fZ&&$.bm==null?J.Fe(r,0,0.5):0,f,a3)
f=$.aA
if(f!=null)f.jE(d.a,d.b,d.d,d.e)
f=A.KA($.ah)
a2=r
a3=$.aA
a3=a3==null?f9:a3.cC
if(a3==null)a3=B.dB
A.Kv(i,a2,a3,f)
if(!$.fZ&&$.bm==null){f=r
a2=$.cM().Q?1:20
if(typeof f!=="number")return f.a6()
a2=B.b.n(f*a2,0,0.5)
f=a2}else f=0
c=A.II(i,f,h)
f=$.aA
if(f!=null)f.jJ(c)
if($.DM!==$.cp.j().a){$.DM=$.cp.j().a
$.AS=$.AS+1}f=$.aA
if(f!=null){if($.Bk())a2=0
else{a2=s
if(typeof a2!=="number")return a2.qb()
a2/=1000}a3=$.AS
a4=A.j(Math.max(0,$.X.j().b))
if(!isFinite(a2)||a2<0)A.h(A.a8(a2,"timeSeconds",f9))
if(a4<0)A.h(A.p("frame clock seeds must be non-negative",f9))
f.c2=a2
f.eX=a3
f.c3=a4}f=$.aA
if(f!=null){a2=$.cp.j()
a3=$.AR
a4=A.AQ($.ah)
b6=a2.a
b7=a2.gfF()
b8=b7>0?B.b.n(a2.b/b7,0,1):0
a2=b6.a
b9=a2>=3
c0=b6===B.ca
a5=$.bX()
c1=a5.J("post_exposure")
c2=a5.J("post_bloom")
c3=a5.J("post_vignette")
c4=a5.J("post_film_grain")
c5=a5.J("post_dither")
c6=a5.J("post_depth_of_field")
c7=a5.J("post_color_grade")
c8=a5.J("post_affine_warp")
c9=a5.J("post_vertex_snap")
d0=B.b.ao(a5.J("post_quantization_bits"))
d1=a5.J("post_vhs_chroma")
d2=a5.J("post_vhs_noise")
d3=a5.J("shadow_ao_intensity")
d4=b6===B.ah?0.45:c1
a5=a5.bO("shadow_ssdo_enable")?d3:0
d5=f.xr
d5=B.b.n(d5,0,1)
d6=f.cG
d6=B.b.n(d6,0,1)
d7=f.dF
d8=f.dG
if(a2>=1)d9=b6===B.b0?b8:1
else d9=0
d9=Math.max(c7,d9)
if(a2>=2)a2=b6===B.c9?b8:1
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
f.x2=new A.m5(d4,c2,a5,c6,c3,c4,d5,d6,d7,d8,a4,c5,d9,a2,e0,e1,e2,e3,e4,e5,e6,c0?b8:0,a3)
f.y1=B.b.n(a4,0,1)
f.lX()}$.fW.j().ci(A.Cn($.X.j().gj0()))
b=$.aA
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
d6=a2.giD()?"ok":g0
d7=t.N
d8=t.K
d6=A.E(["drawCalls",a4,"triangles",a5,"instances",d4,"frameMs",d5,"budget",d6],d7,d8)
a3=a3?f9:e7.r
if(a3==null)a3=0
a4=a2.ij
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
e8=a2.c1
e9=a2.cD
f0=a2.cE
f1=a2.cF
f2=a2.gjg()
f3=a2.il
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
f.setAttribute("data-renderer-diagnostic-groups",B.f.a3(A.E(["frame",d6,"resources",a4,"atmosphere",A.E(["rainSubmitted",a3,"rainRequested",a5,"rainBudget",d4,"rainFrustumVisible",d5,"rainFrustumCulled",d9,"rainAverageSpeedMps",e0,"rainCapped",e1,"rainFlowParticles",e2,"rainFlowPaths",e3,"rainFlowCapturedMassKg",e4,"rainFlowDrainedMassKg",e5,"rainFlowOverflowMassKg",e6,"rainFlowWetness",e8,"fireFlameParticles",e9,"fireWhiteSmokeParticles",f0,"fireBlackSmokeParticles",f1,"weatherPhase",f2,"volumetricSources",f3,"volumetricSampleCount",a2.as,"volumetricIntensity",a2.Q,"volumetricDustDensity",a2.x,"volumetricAnisotropy",a2.y,"cloudCoverage",f6,"cloudDensity",f7,"cloudSampleCount",f4,"reflectionIntensity",a2.dy,"reflectionConfidence",a2.fr],d7,d8)],d7,t.X),f9))
a=b.goe()
if(a!=null){$.o.j().setAttribute("data-renderer-frame-stats",a)
f=$.o.j()
a2=b.giD()?"ok":g0
f.setAttribute("data-renderer-budget",a2)}$.o.j().setAttribute("data-renderer-rain-particles",""+b.dz)
$.o.j().setAttribute("data-renderer-rain-particles-requested",""+b.dw)
$.o.j().setAttribute("data-renderer-rain-particles-budget",""+b.dA)
$.o.j().setAttribute("data-renderer-rain-particles-capped",""+b.dE)
$.o.j().setAttribute("data-renderer-rain-particles-frustum-visible",""+b.dB)
$.o.j().setAttribute("data-renderer-rain-particles-frustum-culled",""+b.dC)
$.o.j().setAttribute("data-renderer-rain-flow-particles",""+b.dv)
$.o.j().setAttribute("data-renderer-rain-flow-paths",""+b.du.length)
$.o.j().setAttribute("data-renderer-rain-flow-captured-mass-kg",B.b.G(b.eM,8))
$.o.j().setAttribute("data-renderer-rain-flow-drained-mass-kg",B.b.G(b.eN,8))
$.o.j().setAttribute("data-renderer-rain-flow-overflow-mass-kg",B.b.G(b.eO,8))
$.o.j().setAttribute("data-renderer-weather-rain-flow-wetness",B.b.G(b.c1,4))
$.o.j().setAttribute("data-renderer-fire-flame-particles",""+b.cD)
$.o.j().setAttribute("data-renderer-fire-white-smoke-particles",""+b.cE)
$.o.j().setAttribute("data-renderer-fire-black-smoke-particles",""+b.cF)
$.o.j().setAttribute("data-renderer-rain-particles-average-speed-mps",B.b.G(b.dD,4))
$.o.j().setAttribute("data-renderer-volumetric-sample-count",""+b.x1.as)
$.o.j().setAttribute("data-renderer-volumetric-intensity",B.b.G(b.x1.Q,4))
$.o.j().setAttribute("data-renderer-volumetric-dust-density",B.b.G(b.x1.x,4))
$.o.j().setAttribute("data-renderer-volumetric-anisotropy",B.b.G(b.x1.y,4))
f=$.o.j()
a2=$.bX()
f.setAttribute("data-renderer-debug-attachments","unavailable")
$.o.j().setAttribute("data-renderer-debug-attachments-reason",a2.r)
$.o.j().setAttribute("data-renderer-weather-phase",b.gjg())
f=$.o.j()
a2=b.y2
a2=a2==null?f9:a2.c
f.setAttribute("data-renderer-weather-wind-mps",B.b.G(a2==null?0:a2,3))
f=$.o.j()
a2=b.y2
a2=a2==null?f9:a2.r
f.setAttribute("data-renderer-weather-snow-accumulation-mps",B.b.G(a2==null?0:a2,8))
f=$.o.j()
a2=b.y2
a2=a2==null?f9:a2.w
f.setAttribute("data-renderer-weather-impact-energy-w-m2",B.b.G(a2==null?0:a2,6))
f=$.o.j()
a2=b.dq
a2=a2==null?f9:a2.c
f.setAttribute("data-renderer-weather-warm-clearance-m",B.b.G(a2==null?0:a2,4))
$.o.j().setAttribute("data-renderer-weather-local-temperature-c",B.b.G(b.gdY(),3))
$.o.j().setAttribute("data-renderer-weather-condensation-suppression",B.b.G(b.gjf(),4))
$.o.j().setAttribute("data-renderer-weather-impact-count",""+b.eL)
$.o.j().setAttribute("data-renderer-weather-settled-mass-kg",B.b.G(b.ds,8))
$.o.j().setAttribute("data-renderer-weather-rebound-energy-j",B.b.G(b.dt,8))
$.o.j().setAttribute("data-renderer-weather-obstacle-count",""+b.dr.length)}A.f6("running")
A.JV()
f=$.ap.j()
f.as=f.Q=0
a2=f.c
a2.aa(0,"WheelUp")
a2.aa(0,"WheelDown")
f.d.S(0)
f.f.S(0)
A.j(A.c(v.G.window).requestAnimationFrame(A.Z(A.Er())))}catch(f8){a0=A.am(f8)
a1=A.d8(f8)
A.yx(a0,a1)}},
J4(a,b){var s,r,q,p="hall-clock"
switch(b){case"arm":a.iZ("confirm")
$.bl.j().aO("interface confirmation")
break
case"ambient-winnow":a.dQ("winnow",0.28)
$.bl.j().aO("wind moving through the house")
break
case"ambient-gate":a.dQ("gate",0.22)
$.bl.j().aO("distant gate")
break
case"collapse":a.iZ("collapse")
$.bl.j().aO("front door shudders and collapses")
break
case"clock:tick":A.nX(a,p,"tick")
break
case"clock:chime":A.nX(a,p,"chime")
break
case"clock:cuckoo":A.nX(a,p,"cuckoo")
break
case"clock:bell":A.nX(a,p,"bell")
break
default:if(B.c.Y(b,"service:")){s=b.split(":")
r=s.length
if(r===3){if(1>=r)return A.e(s,1)
q=s[1]
if(2>=r)return A.e(s,2)
A.nX(a,q,s[2])}}}},
nX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=$.DH,g=$.i4
if(h==null||g==null)return
s=h.o1(b)
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
break A}if(q!=null)$.bl.j().aO(q)
q=$.T.j()
p=g.c
o=s.b
n=q.e.h(0,o)
if(n==null)A.h(A.i("sound room missing: "+o))
m=n.d.T(0,s.d.a6(0,p))
l=$.nO
if(l==null){q=s.f.h(0,c)
if(q==null)q=A.h(A.i("sound emitter "+s.a+" has no cue for "+c))
a.pk(q,m,s.e,o)
return}q=$.Dt
$.Dt=q+1
o=A.Fr(B.eX,r,r+":"+q,m,A.IK(b,c),q,o)
q=$.ah
q=A.Fk($.o8(),q)
t.gG.a(B.bN)
p=o.d
k=l.a.e
if(k.h(0,p)==null)A.h(A.i("audio source room missing: "+p))
q=q.a
if(k.h(0,q)==null)A.h(A.i("audio listener room missing: "+q))
j=l.jc(p,q,B.bN)
q=o.c
i=l.c.a.h(0,q)
if(i==null)A.h(A.i("audio cue family missing: "+q))
k=J.aW(i)
k=k.h(i,B.d.P(A.Kg(q,o.f),k.gu(i)))
o=o.e
A.ad(j.a,t.N)
a.j_(k,new A.a(o.a,o.b,o.c),s.e,1,p,j.d,j.c,j.e)},
IK(a,b){var s,r,q,p=$.X.j().b
for(s=new A.dI(a+":"+b),r=t.sU,s=new A.ao(s,s.gu(0),r.i("ao<a5.E>")),r=r.i("a5.E");s.m();){q=s.d
p=A.En(p,q==null?r.a(q):q)}return p},
Kr(a){var s=$.AC
if(s==null)return
s.textContent=""+B.b.ao(a>0?1/a:0)+" fps"},
Ko(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="interact"
if($.E3||$.bm!=null){$.kv().a=new A.a(0,0,0)
return}$.ap.j().e4(b4)
s=$.ap.j()
r=s.d7("moveLeft")?-1:0
if(s.d7("moveRight"))++r
q=s.d7("moveForward")?1:0
if(s.d7("moveBack"))--q
s=s.ay?s.w:new A.a(0,0,0)
p=new A.a(r,0,q).T(0,s)
o=p.gu(0)>1?p.ga5():p
n=$.ap.j().Q
m=$.ap.j().as
s=$.h2()
l=s.d?-1:1
k=s.e?-1:1
j=$.cq
i=$.ap.j()
i=i.ay?i.x:0
h=$.h2()
g=h.d?-1:1
$.cq=j+(n*(0.0028*s.b*l)+i*2.4*h.b*g*b4)
g=$.f7
h=$.ap.j()
l=h.ay?h.y:0
j=$.h2()
i=j.e?-1:1
i=g-(m*(0.0028*s.c*k)+l*2.4*j.c*i*b4)
$.f7=i
$.f7=B.b.n(i,-1.5607963267948965,1.5607963267948965)
i=o.a
j=o.c
f=new A.a(i*Math.cos($.cq)+j*Math.sin($.cq),0,-i*Math.sin($.cq)+j*Math.cos($.cq)).ga5().a6(0,2)
j=$.kv()
if(!isFinite(b4)||b4<0)A.h(A.a8(b4,"dt","must be finite and non-negative"))
e=f.a!==0||f.c!==0?14:10
if(!isFinite(e))A.h(A.a8(e,"rate","must be finite and positive"))
s=Math.exp(-e*b4)
l=j.a
s=l.T(0,f.a_(0,l).a6(0,1-s))
j.a=s
d=$.f1.j().oJ($.T.j(),$.ah,$.el(),s.a6(0,b4))
$.yD=d.a
if($.cp.j().a!==B.cb&&$.cp.j().a!==B.ah)$.ah=d.b
c=B.b.n(j.a.gu(0)/2,0,1)
s=$.F2()
$.AW=s.jV($.AW,$.el().b,b4)
b=s.mu(b4,c)
s=$.el()
l=$.AW
$.d5.j().iQ(new A.a(s.a+b.a,l+b.b,s.c+b.c),$.cq,$.f7)
s=$.X.j().z
l=$.xm
l=l==null?b2:l.gig()
a=A.GK(l==null?B.lG:l,s)
s=$.d5.j()
l=$.T.j()
a0=A.Lb(a,s,$.ah,l,$.i4)
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
k=k==="living-sofa"&&$.ah===$.T.j().r?"available":"not-focused"
l.setAttribute("data-house-rest-target",k)
$.Dj.j().jK(j)
a1=A.H(A.c(v.G.document).getElementById("crosshair"))
if(a1!=null){l=!i?"crosshair-active":"crosshair-dot"
a1.className=l}a2=b2
a3=b2
a4=b2
a5=b2
switch(s.a){case 0:a2=A.Bc($.d5.j(),$.T.j(),$.ah)
break
case 1:a3=A.Ey($.d5.j(),$.T.j(),$.ah)
break
case 2:a4=A.Ez($.d5.j(),$.T.j(),$.ah)
break
case 3:l=$.d5.j()
k=$.T.j()
j=$.i4
a5=A.Ex(l,$.ah,k,j)
break
case 4:case 5:break}$.Di.j().pX($.h3().fp($.X.j().gak().a,"status"),$.ah==="living-room")
l=$.ap.j()
k=l.CW
if(k.bx(b3,l.d)||k.bx(b3,l.f)){l=$.X.j().gak()
k=a3==null
j=k?b2:a3.a
i=B.a.a8($.aV.j().hZ(21),$.aV.j().gox())
if(l.a===21&&j==="front-door"&&i){s=$.cp.j()
$.T.j()
s.k0(B.fJ,A.ad(s.c,t.N))
B.a.l($.dC,"collapse")
A.h_("the front door opens on itself")}else if(a2!=null){if(a2.d){a2.d=!1
$.bl.j().aO("mantle flame extinguished")}else if($.X.j().jY(1,1)){a2.d=!0
s=$.i1.j()
s.a=a2
s.b=2
$.bl.j().aO("mantle flame catches")}}else if(!k&&!a3.z&&!a3.ay){a3.ax=!a3.ax
s=$.bl.j()
s.aO(a3.ax?"door opens":"door closes")
s=$.aA
if(s!=null)s.dT($.T.j(),a3.b)
s=$.aA
if(s!=null)s.f7($.T.j(),a3.a)
s=$.bs
if(s!=null)s.bV()}else if(a4!=null)if(a4.w){s=$.X.j()
if(s.f.e3(1)){a4.w=!1
$.bl.j().aO("shutter closes")}}else{a4.w=!0
$.bl.j().aO("shutter opens")}else if(s===B.d0){a6=a.fo()
s=A.C(a6)
l=t.E4
a7=A.bP(new A.F(a6,s.i("l(1)").a(new A.yK(a0)),s.i("F<1>")),l)
if(a7==null)a7=A.bP(a6,l)
if(a7!=null)$.bl.j().cf("noticed",a7.d)}else if(a5!=null){a8=a5.a
if(a8===$.T.j().x){$.bl.j().aO("the living-room sofa is ready for rest")
A.ia($.fX.j())
return}s=$.zS()
if(!a5.x)A.h(A.i("inventory placement is not pickable: "+a8))
a9=a5.y
if(a9==null)a9=a8
s=s.a
l=s.h(0,a8)
s.k(0,a8,(l==null?0:l)+1)
l=$.o.j()
l.setAttribute("data-inventory-last-focus",a9)
l.setAttribute("data-inventory-last-event","inventory-inspected:"+a9)
s=A.aZ(s,t.N,t.S)
l.setAttribute("data-inventory-inspections",""+s.gu(s))
b0=A.JR(a9)
s=$.bl.j()
s.cf("noticed",b0==null?"you inspect "+a9:b0)}}s=$.i1.j()
if(s.a!=null&&s.b>0){b1=$.i1.j().a
if(b1!=null&&A.Bc($.d5.j(),$.T.j(),$.ah)!==b1){s=$.i1.j()
s.a=null
s.b=0}}A.K1(b4,a0)},
K1(c3,c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="rgba(12, 10, 14, 0.92)",c2=$.f5
if(c2==null)return
s=A.c($.Dk.j().getBoundingClientRect())
r=A.a4(s.width)
q=A.a4(s.height)
if(r<=0||q<=0)return
p=$.cL()
p.pW(c3)
o=$.F_()
n=o.c
if(n<1)o.c=Math.min(1,n+c3*6)
n=c4.c
m=n!=null
l=o.jl(n,m,$.aE.j().y)
o=$.bX()
k=o.a
j=o.d
i=c3*8
if(k)o.d=Math.min(1,j+i)
else o.d=Math.max(0,j-i)
k=$.T.j()
j=$.ah
h=k.e.h(0,j)
g=$.xk.j().eY($.X.j().gak().a)
j=$.aA
f=j==null?null:j.gdY()
e=f!=null&&isFinite(f)?f:g.r
k=!$.aE.j().y&&$.bm==null
j=p.a
i=p.b
d=p.c
c=p.e
b=p.f
a=p.r
p=p.w
a0=$.X.j().gak()
a1=$.bD.j().b
a2=$.cM()
a3=a2.y===B.d6
a4=h==null?null:h.a
if(a4==null)a4=$.ah
a2=a2.z?$.h3().fp($.X.j().gak().a,"status"):null
c2.e=e
a5=c2.a
a5.c+=c3
a6=a5.d
B.a.S(a6)
a7=A.a4(A.c(v.G.window).devicePixelRatio)
a8=B.b.aj(r*a7)
a9=B.b.aj(q*a7)
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
A.b2(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}else{b0.fillStyle="rgba(0, 0, 0, 0.85)"
b0.beginPath()
A.b2(b0,"arc",[1,1,3,0,6.283185307179586],k)
b0.fill()
b0.fillStyle="#f5f0e6"
b0.beginPath()
A.b2(b0,"arc",[0,0,2.5,0,6.283185307179586],k)
b0.fill()}b0.restore()
a5.nV(n,q,r)}a5.nU(q,r,new A.tl(j,i,d,c,b,a,p))
b3=r-80-24
a5.aX("#d32f2f",2,8,c1,44,-0.08,160,b3,42)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='bold 14px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b4=B.d.n(B.b.aZ(a1*60),0,1439)
b5=B.d.ah(b4,60)
b6=B.d.P(b4,60)
b7=a3?B.d.P(b5+11,12)+1:b5
if(a3)b8=b5<12?" AM":" PM"
else b8=""
b0.fillText("DAY "+a0.a+"  \u2022  "+B.c.bL(B.d.t(b7),2,"0")+":"+B.c.bL(B.d.t(b6),2,"0")+b8,b3,42)
b0.restore()
a5.aX("#c49a45",1.8,6,c1,34,0.08,170,109,37)
b0.save()
b0.fillStyle="#c49a45"
b0.font='bold 13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bH(a4.toUpperCase(),142),109,37)
b0.restore()
if(a2!=null&&a2.length!==0){b9=Math.min(r*0.6,420)
c0=r*0.5
a5.aX("#f5f0e6",1.5,6,c1,32,-0.04,b9,c0,68)
b0.save()
b0.fillStyle="#f5f0e6"
b0.font='13px "Cinzel", serif'
b0.textAlign="center"
b0.textBaseline="middle"
b0.fillText(a5.bH(a2,b9-28),c0,68)
b0.restore()}a5.nY(q,r,e)
a5.nT(l,q,r)
a5.nW(q,r,o)
b0.restore();++c2.b
p=$.o.j()
p.setAttribute("data-renderer-gui-frame",""+c2.b)
p.setAttribute("data-renderer-gui-hitboxes",""+A.ad(a6,t.rO).length)
p.setAttribute("data-renderer-gui-owner","renderer")
p.setAttribute("data-renderer-gui-temperature-c",B.b.G(c2.e,2))
p.setAttribute("data-renderer-gui-surface",""+c2.c+"x"+c2.d)},
JR(a){var s,r,q,p,o=$.X.j().z.b,n=A.v(o).i("N<1,2>"),m=A.J(new A.N(o,n),n.i("t.E"))
B.a.Z(m,new A.yp())
for(o=m.length,s=0;s<m.length;m.length===o||(0,A.r)(m),++s){r=m[s]
n=$.h3().at
n===$&&A.u()
q=n.h(0,r.a+"="+r.b+":"+a)
p=typeof q=="string"?q:null
if(p!=null)return p}return null},
Ku(){var s,r,q,p,o,n,m,l,k,j=null
if(!$.cM().Q)return
if($.aE.j().y||$.bm!=null||$.aV.j().r!=null)return
s=$.X.j().gak()
for(r=$.aV.j().hZ(s.a),q=r.length,p=s.b,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=$.aV.b
if(m===$.aV)A.h(A.aa(""))
if(m.c.q(0,n)||p<n.c)continue
r=$.aV.b
if(r===$.aV)A.h(A.aa(""))
l=r.cr(n)
if(!(l instanceof A.mK))return
r=l.a
q=r.f
r=r.c
p=r.length
if(q<p){if(!(q>=0))return A.e(r,q)
k=r[q].b}else k=j
if(k==null)return
A.BU(A.c(v.G.document),"exitPointerLock",j,j,j,j)
$.kv().a=new A.a(0,0,0)
r=$.aE.b
if(r===$.aE)A.h(A.aa(""))
q=n.a
r.fA(q,k)
$.cL().bP(!0,B.bw,q,k)
A.AN()
A.E9(n)
return}},
Kq(){var s,r,q,p,o,n,m=$.xm
if(m==null)return
s=$.X.j().gak()
for(r=m.cq(s.a,s.b),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=$.X.b
if(n===$.X)A.h(A.aa(""))
if(!n.my(o))continue
n=$.o.b
if(n===$.o)A.h(A.aa(""))
n.setAttribute("data-story-last-event",o.a)
n.setAttribute("data-story-last-event-kind",o.b)}},
K2(){var s,r,q=$.aV.j().r,p=q==null,o=p?null:q.gby()
if(p||o==null)return
p=$.aE.j()
s=q.a
r=s.a
p.fA(r,o)
$.cL().bP(!0,B.bw,r,o)
A.AN()
A.E9(s)
if(q.d!==B.ao)A.AO()
A.h_("restored visitor")},
E9(a){var s,r,q,p
if(a.a!=="stranger"||a.b!==17)return
s=$.X.j().of("stranger-17-eileen-case")
r=$.h3().x
r===$&&A.u()
q=r.h(0,"eileen-case-note")
r=t.j.b(q)?A.aI(q,!0,t.N):B.o
p=A.bP(r,t.N)
if(s==null||p==null)return
$.bl.j().cf("inside the case",p+" \u201c"+s.d+"\u201d")},
Kp(){var s,r,q,p,o,n
if(!$.cM().Q)return
s=$.X.j().gak()
r=$.nK.j().nZ(s.a,s.b)
if(r.length===0)return
q=B.a.ga4(r)
$.nK.j().b.l(0,q.a)
p=q.d
o=p==="letterbox"?"through the letterbox":"from the street"
$.bl.j().cf(o,q.e)
n=A.KB(p)
if(n!=null)B.a.l($.dC,"ambient-"+n)},
Kt(){var s,r,q,p,o=$.X.j().gak()
if(o.b<20)return
s=o.a
if(!$.yI.l(0,s))return
r=$.h3().f
r===$&&A.u()
q=r.h(0,B.d.t(s))
r=t.j.b(q)?A.aI(q,!0,t.N):B.o
p=A.L8(r,$.X.j().b,s)
if(p!=null)$.bl.j().cf("noticed",p)},
DZ(a){var s,r,q,p,o
if($.AA!=null)return
s=$.X.j().gak()
r=$.X.j().r.c
q=$.X.j().e.b
p=A.v(q).i("an<2>")
o=A.FZ(new A.pW(s.a,1-r,new A.F(new A.an(q,p),p.i("l(t.E)").a(new A.yz()),p.i("F<t.E>")).gu(0),$.X.j().r.d,a))
if(o==null)return
A.DV(o)
A.kp("ending recorded")},
DV(a){var s,r,q,p
$.AA=a
$.E3=!0
s=$.o.j()
r=a.a
q=r.b
s.setAttribute("data-ending-kind",q)
s.setAttribute("data-ending-texture-count",""+A.C7($.X.j().z,r).length)
$.kv().a=new A.a(0,0,0)
A.ia($.ka.j())
s=$.h3().w
s===$&&A.u()
p=s.h(0,q)
s=t.j.b(p)?A.aI(p,!0,t.N):B.o
s=A.J(s,t.N)
B.a.K(s,A.C7($.X.j().z,r))
$.ka.j().jN(a,s)},
IT(a){var s,r,q,p
A:{if("open"===a){s=B.aQ
break A}if("chain"===a){s=B.cT
break A}if("through-door"===a){s=B.cU
break A}if("letterbox"===a){s=B.cV
break A}s=B.as
break A}r=$.aV.j().n_(s)
if(s===B.aQ){q=$.T.j().f.h(0,"front-door")
if(q!=null){q.ax=!0
p=$.aA
if(p!=null)p.dT($.T.j(),q.b)
p=$.aA
if(p!=null)p.f7($.T.j(),q.a)
p=$.bs
if(p!=null)p.bV()}}if(!(r instanceof A.mI)||s===B.as){A.xT()
return}if(r.a.gby()==null){A.Ay()
A.xT()
return}A.AO()},
J_(){var s=$.aV.j().mv()
if(!(s instanceof A.jw)||s.b){A.Ay()
A.xT()
return}if(s.a.gby()==null){A.Ay()
A.xT()
return}A.AO()},
AO(){var s,r,q,p,o,n,m,l,k,j=$.aV.j().r,i=j==null,h=i?null:j.gby()
if(i||h==null)return
s=$.aV.j().gcv()
if(s==null){$.aE.j().jM(h)
$.cL().bP(!0,B.o,j.a.a,h)}else{r=j.w
i=r==null
$.aE.j().fB(h,i)
q=A.d([],t.s)
for(p=s.f,o=p.length,n=0;n<o;++n)q.push(p[n].b)
m=$.aE.j()
l=A.d([],t.kd)
for(n=0;n<o;++n){k=p[n]
l.push(new A.a6(k.a,k.b))}m.jO(l,r)
o=$.cL()
m=j.a.a
o.bP(!0,i?q:B.o,m,h)
if(!i){i=A.C(p)
k=A.bP(new A.F(p,i.i("l(1)").a(new A.yu(r)),i.i("F<1>")),t.Y)
if(k!=null){i=$.aE.j()
q=k.c
i.fC(h,q)
o.bP(!0,B.o,m,h+"\n\n"+q)}}}A.E8()
A.AN()},
AN(){var s,r,q=$.aV.j().r,p=q==null,o=p?null:q.gby(),n=$.bs
if(p||o==null||n==null)return
p=q.a
s="vo-"+p.a+"-day"+B.c.bL(B.d.t(p.b),2,"0")+"-"+q.b.b+"-"+(q.f+1)
if($.AI===s)return
$.AI=s
r=n.dQ(s,1)
p=$.dB
if(new A.oE(s,o).pA(p.e===!0,r).length!==0)$.bl.j().aO(o)},
IU(a){var s,r,q,p,o,n=$.aV.j().n0(a)
if(!(n instanceof A.mJ))return
s=n.c
if(!$.X.j().mz(n.b,s))return
r=s.c
s=$.aE.j()
q=n.a
p=q.gby()
s.fC(p==null?"":p,r)
o=q.gby()
if(o==null)o=""
$.cL().bP(!0,B.o,q.a.a,o+"\n\n"+r)
A.E8()
A.kp("saved after visitor answer")},
xT(){$.aE.j().iK()
$.cL().S(0)
$.AI=null
$.ap.j().dV($.o.j())},
E8(){var s,r,q,p,o=$.aE.j(),n=A.c(v.G.document),m=A.d([],t.wt)
for(s=$.nM.j().fq(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
m.push(new A.a6(p.a,B.a.gac(p.c).t(0)))}o.jL(n,m)},
IV(a){var s,r,q,p=$.aV.j().n1(a,!0,$.nM.j())
if(p==null)return
s=$.nM.j().nC(p,B.kh)
r=$.aE.j()
q=s==null?null:s.c
if(q==null)q="Confirmed."
r=r.r
r===$&&A.u()
r.textContent=B.W.c4("",!0,q)
A.kp("saved after visitor citation")},
Ay(){var s,r=$.T.j().f.h(0,"front-door")
if(r!=null&&r.ax){r.ax=!1
s=$.aA
if(s!=null)s.dT($.T.j(),r.b)
s=$.aA
if(s!=null)s.f7($.T.j(),r.a)
s=$.bs
if(s!=null)s.bV()}},
Ks(){var s,r,q,p,o,n,m,l,k
for(s=$.T.j().b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
for(o=p.r,n=p.a+":",m=0;m<o.length;++m){l=o[m]
k=$.cp.b
if(k===$.cp)A.h(A.aa(""))
if(B.a.q(k.d,n+m)){l.d=!1
continue}}}},
Lc(a){var s,r,q,p,o,n,m,l=$.T.j().e.h(0,a)
if(l==null||$.bD.j().gfJ()===0)return!1
for(s=l.e,r=s.length,q=0;q<r;++q){p=s[q]
if(!p.w)continue
o=p.b
if(o===B.F){n=$.bD.b
if(n===$.bD)A.h(A.aa(""))
n=n.b<12}else n=!1
m=!0
if(!n){if(o===B.I){n=$.bD.b
if(n===$.bD)A.h(A.aa(""))
n=n.b>12}else n=!1
if(!n){if(o===B.au){n=$.bD.b
if(n===$.bD)A.h(A.aa(""))
n=n.b<9}else n=!1
if(!n)if(o===B.av){o=$.bD.b
if(o===$.bD)A.h(A.aa(""))
m=o.b>15}else m=!1}}if(m)return!0}return!1},
AQ(a){var s,r=$.T.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dE
if(q.length===0)return 0.12
s=A.C(q)
return B.b.n(new A.F(q,s.i("l(1)").a(new A.yw()),s.i("F<1>")).gu(0)/q.length,0.12,1)},
KA(a){var s,r=$.T.j().e.h(0,a),q=r==null?null:r.e
if(q==null)q=B.dE
if(q.length===0)return 0
s=A.C(q)
return B.b.n(new A.F(q,s.i("l(1)").a(new A.yP()),s.i("F<1>")).gu(0)/q.length,0,1)},
Kv(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a1.w
if(a0===B.x&&a1.b)a0=B.aA
s=a1.r
r=a1.c
q=0.82-r*0.12
p=1-a4
o=A.w8(new A.hS(a1,s,B.b.n(q,0.35,0.98),B.b.n(p,0,1),2.5,0,18e3,1,0))
n=$.Bo()
m=n.z
l=B.a.bb(a3,0,new A.yJ(),t.i)
k=$.F9()
q=B.b.n(q,0.35,0.98)
j=a0===B.x?0:r
n=n.y
i=B.b.n(l/900,0,1)
h=B.b.n(o.w/1000,0,1)
g=B.b.n(a2,0,0.5)
f=$.Ec
$.Ec=f+1
e=k.cP(new A.w3(a0,r,o.c,s,q,a4,1-0.75*p,6,j,m.x,n,m.a,0.32,180,i,h,g,f,$.X.j().b))
d=$.bs
s=d==null
if(!s){r=A.d([],t.ff)
for(q=e.a,p=q.length,c=0;c<p;++c){b=q[c]
r.push(new A.jU([b.c,b.d,b.f,b.a,b.e,b.w,b.r]))}d.mC(r)}if(!s)for(s=e.b,r=s.length,c=0;c<r;++c){a=s[c]
d.pl(a.b,a.c,a.d,a.e,a.f)}s=$.o.j()
s.setAttribute("data-audio-weather-transmission",B.b.G(e.c,3))
s.setAttribute("data-audio-weather-cutoff-hz",B.b.G(e.d,1))
s.setAttribute("data-audio-weather-layers",""+e.a.length)
s.setAttribute("data-audio-weather-events",""+e.b.length)
s.setAttribute("data-audio-weather-window-open",B.b.G(a4,3))},
IP(){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.d([],t.fH),f=A.d([],t.vN)
for(s=[-0.42,16.17],r=0,q=0;q<2;++q){p=s[q]
for(o=[0,15.75],n=p<0,m=0;m<2;++m){l=o[m]
k=""+r
j="roof-drain-"+k
i=new A.a(l,12.044999999999998,p)
B.a.l(g,new A.j9(j,i,new A.a(l,0.12,p),0.08))
h=n?0.42:-0.42
B.a.l(f,new A.ja("roof-catchment-"+k,new A.a(7.875,16.32,p+h),i,62.015625,0.96,0.16,j));++r}}return A.H_(g,f)},
II(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=$.aA
if(a0!=null){s=$.T.j()
r=$.ah
r=s.e.h(0,r)==null
s=r}else s=!0
if(s)return null
q=a1.r
s=0.82-a1.c*0.12
p=A.w8(new A.hS(a1,q,B.b.n(s,0.35,0.98),a3,2.5,0,18e3,1,0))
o=$.o0.c7($.ah,A.Lr())
n=isFinite(a0.gdY())?a0.gdY():q
m=B.b.n(a0.gjf(),0,1)
l=B.b.n((n-q)*8,0,400)
s=B.b.n(s,0.35,0.98)
r=!0
if(isFinite(n))if(isFinite(l))if(isFinite(a2))if(isFinite(m))if(isFinite(0.5))if(isFinite(s))if(!(a2<0))if(!(m<0))if(!(m>1))if(!(s<0))if(!(s>1)){k=o.c
if(!(k<0))r=k>1}if(r)A.h(A.p("invalid weather surface step inputs",null))
j=o.a
i=o.b
h=p.a===B.af&&n<=0.5?Math.max(0,p.r)*(1-m)*(1-o.c*0.4)*a2:0
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
o.hQ()
r=o.a
return new A.wb(r,o.b,r-j+e,e,c,e*120*334e3,a,i,s)},
Ky(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a3.e.h(0,a4)
if(a2==null)return B.dD
s=a3.a1(a2)
r=a2.a
q=a2.d
p=q.a
o=q.b
q=q.c
n=p+s.a
m=q+s.c
l=o+s.b
k=A.d([new A.eT("floor:"+r,new A.a(p,o,q),new A.a(n,o+0.05,m),a5,0.12),new A.eT("roof-interior:"+r,new A.a(p,l-0.06,q),new A.a(n,l+0.03,m),a5,0.05)],t.uI)
if(a6==null)return k
for(r=a6.iY(r),n=J.P(r.a),r=new A.R(n,r.b,r.$ti.i("R<1>")),m=a6.c;r.m();){l=n.gp()
j=l.c
i=!0
if(!(l.d==="renderer-reference"&&!l.ay.r)){h=l.r
h=h!=="story"&&h!=="architecture"
if(!h)i=B.c.q(j.toLowerCase(),"stair")}if(i)continue
g=a6.bW(j)
j=l.f.a
f=l.j8(g,m)
e=l.fe(g,m)
i=e.a
h=e.b
d=p+j.a*m
c=o+(j.b*m+(i+h)*0.5)
j=q+j.c*m
b=f.a
i=Math.max(0.005,(h-i)*0.5)
h=f.c
a=l.Q>0?l.as:a5
a0=l.a
l=l.ay.f
if(!(l>0))l=g.b==="textile"?0.08:0.28
if(isFinite(d)&&isFinite(c)&&isFinite(j))a1=!(isFinite(b)&&isFinite(i)&&isFinite(h))||b<0||i<0||h<0
else a1=!0
if(a1)A.h(A.p("collision box centre/extents must be finite",null))
l=new A.eT("inventory:"+a0,new A.a(d-b,c-i,j-h),new A.a(d+b,c+i,j+h),a,l)
l.B()
B.a.l(k,l)}return A.ad(k,t.qR)},
hV:function hV(a,b){this.a=a
this.b=b},
nm:function nm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.c1=_.eO=_.eN=_.eM=_.dv=0
_.il=null
_.im=2.25
_.dD=_.dC=_.dB=_.dA=_.dz=_.dw=0
_.dE=!1
_.ix=_.iw=_.iv=_.iu=_.it=_.is=_.ir=_.iq=_.ip=_.io=_.eQ=_.eP=null
_.iy=7
_.dG=_.dF=_.cG=_.iz=_.eR=0
_.dH=null
_.c2=_.dI=0
_.eU=_.eT=_.eS=0.04
_.eV=0.15
_.eW=null
_.ii=_.o8=_.c3=_.eX=0
_.aL=!1
_.dm=null
_.cz=_.cw=0
_.cB=_.cA=null
_.ij=_.o9=$
_.dn=null
_.ik=0},
wY:function wY(a){this.a=a},
x0:function x0(a,b,c){this.a=a
this.b=b
this.c=c},
x1:function x1(a){this.a=a},
wR:function wR(){},
wZ:function wZ(){},
x_:function x_(){},
x4:function x4(a){this.a=a},
x5:function x5(a){this.a=a},
x2:function x2(a,b,c){this.a=a
this.b=b
this.c=c},
wW:function wW(a,b,c){this.a=a
this.b=b
this.c=c},
x3:function x3(){},
wX:function wX(a,b,c){this.a=a
this.b=b
this.c=c},
wS:function wS(){},
wT:function wT(){},
wU:function wU(){},
wV:function wV(){},
wP:function wP(){},
wQ:function wQ(){},
wL:function wL(){},
wM:function wM(){},
wN:function wN(){},
wO:function wO(){},
nl:function nl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jP:function jP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wp:function wp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
xB:function xB(){},
xC:function xC(){},
xD:function xD(){},
xJ:function xJ(){},
xK:function xK(){},
xL:function xL(){},
xM:function xM(){},
xN:function xN(){},
xO:function xO(a){this.a=a},
xP:function xP(a){this.a=a},
xQ:function xQ(a){this.a=a},
xE:function xE(a){this.a=a},
xF:function xF(){},
xG:function xG(){},
xH:function xH(){},
xI:function xI(){},
xx:function xx(){},
xy:function xy(a){this.a=a},
xz:function xz(){},
xA:function xA(){},
xt:function xt(){},
xu:function xu(){},
xv:function xv(){},
xw:function xw(){},
yk:function yk(a,b){this.a=a
this.b=b},
yi:function yi(a){this.a=a},
yj:function yj(a){this.a=a},
z7:function z7(a,b){this.a=a
this.b=b},
z8:function z8(){},
z9:function z9(){},
zk:function zk(){},
zu:function zu(){},
zv:function zv(){},
zw:function zw(){},
zx:function zx(){},
zy:function zy(){},
zz:function zz(){},
zA:function zA(){},
za:function za(){},
zb:function zb(){},
zc:function zc(){},
zd:function zd(){},
ze:function ze(){},
zf:function zf(){},
zg:function zg(){},
zh:function zh(){},
zi:function zi(){},
zj:function zj(){},
zl:function zl(){},
zm:function zm(){},
zn:function zn(){},
zo:function zo(){},
zp:function zp(){},
zq:function zq(){},
zr:function zr(){},
zs:function zs(){},
zt:function zt(){},
yl:function yl(){},
ym:function ym(){},
ys:function ys(a){this.a=a},
yC:function yC(a){this.a=a},
yK:function yK(a){this.a=a},
yp:function yp(){},
yz:function yz(){},
yu:function yu(a){this.a=a},
yw:function yw(){},
yP:function yP(){},
yJ:function yJ(){},
EB(a){return v.mangledGlobalNames[a]},
BU(a,b,c,d,e,f){var s=a[b]()
return s},
rn(a,b,c){var s=null
return c.a(A.BU(a,b,s,s,s,s))},
C6(a,b){var s,r,q,p=A.J(B.cO.bI(B.f.a3(a.ja(!1),null)),t.S),o=A.v(b).i("ag<1>"),n=A.J(new A.ag(b,o),o.i("t.E"))
B.a.a7(n)
for(o=n.length,s=0;s<n.length;n.length===o||(0,A.r)(n),++s){r=n[s]
B.a.K(p,B.cO.bI(r))
B.a.l(p,0)
q=b.h(0,r)
q.toString
B.a.K(p,q)}return A.Hh(p)},
KQ(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
if(b2.c!=null)return b2
s=b2.a
r=s.b
q=r*4
p=b2.b
o=J.Fc(B.n.gey(p),p.byteOffset,p.byteLength)
n=t.S
m=A.n(n,t.J)
l=t.t
k=A.d([],l)
j=A.d([],t.n)
i=p.length
h=B.d.bf(i,r)
g=A.dj(h,0,!1,n)
for(n=o.length,f=0;f<h;++f){e=f*r
d=f*q
c=A.Kx(o,d,q)
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
else{a9=B.d.bf(j.length,r)
B.a.l(b,a9)
B.a.k(g,f,a9)
B.a.K(k,new Uint8Array(o.subarray(d,A.nP(d,d+q,n))))
for(b0=0;b0<r;++b0){a0=e+b0
if(!(a0<i))return A.e(p,a0)
B.a.l(j,p[a0])}}}b1=B.d.bf(j.length,r)>65536?new Uint32Array(A.S(g)):new Uint16Array(A.S(g))
return new A.c3(s,new Float32Array(A.S(j)),b1,b2.d)},
Kx(a,b,c){var s,r,q,p
for(s=a.length,r=2166136261,q=0;q<c;++q){p=b+q
if(!(p<s))return A.e(a,p)
r=((r^a[p])>>>0)*16777619>>>0}return r},
Hi(a){var s=Math.cos(a)
if(s>=0)return 1/(s+0.025*Math.exp(-11*s))
else return 38+(B.b.n(a*57.29577951308232,90,105)-90)/15*62},
zG(a,b,c){var s,r,q,p,o,n,m=b.b,l=m.length
if(l>16)throw A.b(A.a8(b.goq(),"batch.instanceCount","exceeds the WebGL2-safe instance uniform bound of 16"))
l*=16
s=new Float32Array(l)
if(c)r=new Float32Array(l)
else r=null
for(l=r!=null,q=0;q<m.length;++q){p=m[q].gH().c.af()
o=q*16
n=o+16
B.n.cX(s,o,n,p.a)
if(l)B.n.cX(r,o,n,p.f3().a)}m=a.a
A.m(m,"uInstanceModels",new A.q(B.eC,s))
if(l)A.m(m,"uInstanceNormalMatrices",new A.q(B.eC,r))
A.m(m,"uUseInstances",B.eD)},
FM(a,b){if(b<=0)return
a.a=Math.min(1,a.a+0.15*b)},
FL(a,b){if(b<=0)return
a.c=Math.min(1,a.c+0.05*b)},
En(a,b){var s=a^b*2654435769
s=((s^s>>>15)>>>0)*2246822507>>>0
s=((s^s>>>13)>>>0)*3266489909>>>0
return(s^s>>>16)>>>0},
KB(a){var s
A:{if("street"===a){s="winnow"
break A}if("letterbox"===a){s="gate"
break A}s=null
break A}return s},
Hn(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=4139548
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
a1.v(new A.a(p,e,c-0.02),new A.a(o,b,c),14209734)
a1.v(new A.a(p,b-0.028,d-0.03),new A.a(o,b,c+0.01),6046257)
a=d+s
a1.v(new A.a(r,b,a-0.02),new A.a(q,Math.min(k,b+0.85),a+0.02),14209734)}a1.v(new A.a(p,n,m),new A.a(p+0.05,Math.min(k,n+j+0.15),l),4929320)
for(s=p+0.06,r=k-0.06,q=p+0.1,f=0;f<14;){e=n+f*i+0.85;++f
d=l-f*h
a1.v(new A.a(s,Math.min(r,e),d-0.02),new A.a(q,Math.min(k,e+0.06),d+h+0.02),a0)}s=p+0.03
r=p+0.15
a1.v(new A.a(s,n,l-0.12),new A.a(r,Math.min(k,n+1.15),l),a0)
a1.v(new A.a(s,Math.max(n,k-1.05),m),new A.a(r,k,m+0.12),a0)},
cu(a,b,c){var s=B.b.n(c,0,1),r=a.c,q=a.b,p=a.a
return new A.aU(p+(b.a-p)*s,q+(b.b-q)*s,r+(b.c-r)*s)},
KP(a){var s,r,q,p,o,n,m,l=B.f.am(a,null),k=t.f
if(!k.b(l))throw A.b(B.iH)
s=t.N
r=t.z
q=A.b5(l,s,r)
p=A.n(s,t.P)
for(o=0;o<14;++o){n=B.lL[o]
m=q.h(0,n)
if(m==null)p.k(0,n,A.n(s,r))
else if(k.b(m))p.k(0,n,A.b5(m,s,r))
else throw A.b(A.M('text.json section "'+n+'" must be an object',null,null))}return p},
L8(a,b,c){var s,r=a.length
if(r===0)return null
if(r===1)return B.a.gbq(a)
s=new A.eY()
s.ck((b^274953^c)>>>0)
r=s.b1(a.length)
if(!(r>=0&&r<a.length))return A.e(a,r)
return a[r]}},B={}
var w=[A,J,B]
var $={}
A.zZ.prototype={}
J.lA.prototype={
ad(a,b){return a===b},
gW(a){return A.j7(a)},
t(a){return"Instance of '"+A.m9(a)+"'"},
gai(a){return A.dD(A.AF(this))}}
J.lD.prototype={
t(a){return String(a)},
gW(a){return a?519018:218159},
gai(a){return A.dD(t.y)},
$iaq:1,
$il:1}
J.iK.prototype={
ad(a,b){return null==b},
t(a){return"null"},
gW(a){return 0},
$iaq:1,
$iaB:1}
J.iM.prototype={$iak:1}
J.eI.prototype={
gW(a){return 0},
gai(a){return B.rq},
t(a){return String(a)}}
J.m2.prototype={}
J.eN.prototype={}
J.dU.prototype={
t(a){var s=a[$.EF()]
if(s==null)s=a[$.zP()]
if(s==null)return this.k8(a)
return"JavaScript function for "+J.cd(s)},
$ifk:1}
J.hs.prototype={
gW(a){return 0},
t(a){return String(a)}}
J.ht.prototype={
gW(a){return 0},
t(a){return String(a)}}
J.w.prototype={
dk(a,b){return new A.bf(a,A.C(a).i("@<1>").U(b).i("bf<1,2>"))},
l(a,b){A.C(a).c.a(b)
a.$flags&1&&A.aY(a,29)
a.push(b)},
pv(a,b){var s
a.$flags&1&&A.aY(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.Ck(b,null))
return a.splice(b,1)[0]},
aa(a,b){var s
a.$flags&1&&A.aY(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ab(a[s],b)){a.splice(s,1)
return!0}return!1},
K(a,b){var s
A.C(a).i("t<1>").a(b)
a.$flags&1&&A.aY(a,"addAll",2)
if(Array.isArray(b)){this.kv(a,b)
return}for(s=J.P(b);s.m();)a.push(s.gp())},
kv(a,b){var s,r
t.zz.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.aF(a))
for(r=0;r<s;++r)a.push(b[r])},
S(a){a.$flags&1&&A.aY(a,"clear","clear")
a.length=0},
bB(a,b,c){var s=A.C(a)
return new A.G(a,s.U(c).i("1(2)").a(b),s.i("@<1>").U(c).i("G<1,2>"))},
a0(a,b){var s,r=A.dj(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.k(r,s,A.z(a[s]))
return r.join(b)},
bb(a,b,c,d){var s,r,q
d.a(b)
A.C(a).U(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.aF(a))}return r},
ba(a,b,c){var s,r,q,p=A.C(a)
p.i("l(1)").a(b)
p.i("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.b(A.aF(a))}if(c!=null)return c.$0()
throw A.b(A.cV())},
az(a,b){return this.ba(a,b,null)},
ae(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
ag(a,b,c){var s=a.length
if(b>s)throw A.b(A.b6(b,0,s,"start",null))
if(c<b||c>s)throw A.b(A.b6(c,b,s,"end",null))
if(b===c)return A.d([],A.C(a))
return A.d(a.slice(b,c),A.C(a))},
ga4(a){if(a.length>0)return a[0]
throw A.b(A.cV())},
gac(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.cV())},
gbq(a){var s=a.length
if(s===1){if(0>=s)return A.e(a,0)
return a[0]}if(s===0)throw A.b(A.cV())
throw A.b(A.BR())},
R(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.b(A.aF(a))}return!1},
a8(a,b){var s,r
A.C(a).i("l(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.b(A.aF(a))}return!0},
Z(a,b){var s,r,q,p,o,n=A.C(a)
n.i("k(1,1)?").a(b)
a.$flags&2&&A.aY(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Js()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.jr()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.ie(b,2))
if(p>0)this.lV(a,p)},
a7(a){return this.Z(a,null)},
lV(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
e2(a,b){var s,r,q,p
a.$flags&2&&A.aY(a,"shuffle")
s=a.length
while(s>1){r=b.b1(s);--s
q=a.length
if(!(s<q))return A.e(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.e(a,r)
a[s]=a[r]
a[r]=p}},
bK(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.e(a,s)
if(J.ab(a[s],b))return s}return-1},
q(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
gN(a){return a.length===0},
gab(a){return a.length!==0},
t(a){return A.zX(a,"[","]")},
gA(a){return new J.fb(a,a.length,A.C(a).i("fb<1>"))},
gW(a){return A.j7(a)},
gu(a){return a.length},
su(a,b){a.$flags&1&&A.aY(a,"set length","change the length of")
if(b<0)throw A.b(A.b6(b,0,null,"newLength",null))
if(b>a.length)A.C(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.yY(a,b))
return a[b]},
k(a,b,c){A.C(a).c.a(c)
a.$flags&2&&A.aY(a)
if(!(b>=0&&b<a.length))throw A.b(A.yY(a,b))
a[b]=c},
fl(a,b){return new A.ea(a,b.i("ea<0>"))},
f_(a,b){var s
A.C(a).i("l(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gai(a){return A.dD(A.C(a))},
$iW:1,
$it:1,
$iK:1}
J.lC.prototype={
pV(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.m9(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ro.prototype={}
J.fb.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.r(q)
throw A.b(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iaj:1}
J.fo.prototype={
I(a,b){var s
A.a4(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc5(b)
if(this.gc5(a)===s)return 0
if(this.gc5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc5(a){return a===0?1/a<0:a<0},
aj(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.bB(""+a+".toInt()"))},
i4(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.bB(""+a+".ceil()"))},
aZ(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.bB(""+a+".floor()"))},
ao(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.bB(""+a+".round()"))},
n(a,b,c){if(this.I(b,c)>0)throw A.b(A.yR(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
G(a,b){var s
if(b>20)throw A.b(A.b6(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc5(a))return"-"+s
return s},
pT(a,b){var s
if(b>20)throw A.b(A.b6(b,0,20,"fractionDigits",null))
s=a.toExponential(b)
if(a===0&&this.gc5(a))return"-"+s
return s},
fh(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.b(A.b6(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.h(A.bB("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.e(p,1)
s=p[1]
if(3>=r)return A.e(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.a6("0",o)},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
P(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bf(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hH(a,b)},
ah(a,b){return(a|0)===a?a/b|0:this.hH(a,b)},
hH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.bB("Result of truncating division is "+A.z(s)+": "+A.z(a)+" ~/ "+b))},
er(a,b){var s
if(a>0)s=this.hG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m6(a,b){if(0>b)throw A.b(A.yR(b))
return this.hG(a,b)},
hG(a,b){return b>31?0:a>>>b},
jP(a,b){if(b<0)throw A.b(A.yR(b))
return this.m7(a,b)},
m7(a,b){if(b>31)return 0
return a>>>b},
gai(a){return A.dD(t.fY)},
$ibv:1,
$iy:1,
$ibF:1}
J.iJ.prototype={
gai(a){return A.dD(t.S)},
$iaq:1,
$ik:1}
J.lE.prototype={
gai(a){return A.dD(t.i)},
$iaq:1}
J.eH.prototype={
hY(a,b){return new A.ny(b,a,0)},
bk(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aT(a,r-s)},
jZ(a,b){var s
if(typeof b=="string")return A.d(a.split(b),t.s)
else{if(b instanceof A.iL){s=b.e
s=!(s==null?b.e=b.kQ():s)}else s=!1
if(s)return A.d(a.split(b.b),t.s)
else return this.kZ(a,b)}},
cb(a,b,c,d){var s=A.fy(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
kZ(a,b){var s,r,q,p,o,n,m=A.d([],t.s)
for(s=J.Fb(b,a),s=s.gA(s),r=0,q=1;s.m();){p=s.gp()
o=p.gfG()
n=p.geJ()
q=n-o
if(q===0&&r===o)continue
B.a.l(m,this.L(a,r,o))
r=n}if(r<a.length||q>0)B.a.l(m,this.aT(a,r))
return m},
aB(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b6(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
Y(a,b){return this.aB(a,b,0)},
L(a,b,c){return a.substring(b,A.fy(b,c,a.length))},
aT(a,b){return this.L(a,b,null)},
aS(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.Gs(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.Gt(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
a6(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.fC)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bL(a,b,c){var s=b-a.length
if(s<=0)return a
return this.a6(c,s)+a},
dJ(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.b6(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bK(a,b){return this.dJ(a,b,0)},
q(a,b){return A.Lj(a,b,0)},
I(a,b){var s
A.x(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
gW(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gai(a){return A.dD(t.N)},
gu(a){return a.length},
$iaq:1,
$ibv:1,
$itp:1,
$if:1}
A.eV.prototype={
gA(a){return new A.is(J.P(this.gbh()),A.v(this).i("is<1,2>"))},
gu(a){return J.cN(this.gbh())},
gN(a){return J.kx(this.gbh())},
gab(a){return J.Fg(this.gbh())},
ae(a,b){return A.v(this).y[1].a(J.o9(this.gbh(),b))},
ga4(a){return A.v(this).y[1].a(J.Bt(this.gbh()))},
q(a,b){return J.Bs(this.gbh(),b)},
t(a){return J.cd(this.gbh())}}
A.is.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())},
$iaj:1}
A.ff.prototype={
gbh(){return this.a}}
A.jE.prototype={$iW:1}
A.jC.prototype={
h(a,b){return this.$ti.y[1].a(J.b8(this.a,b))},
k(a,b,c){var s=this.$ti
J.bd(this.a,b,s.c.a(s.y[1].a(c)))},
su(a,b){J.Fh(this.a,b)},
l(a,b){var s=this.$ti
J.em(this.a,s.c.a(s.y[1].a(b)))},
$iW:1,
$iK:1}
A.bf.prototype={
dk(a,b){return new A.bf(this.a,this.$ti.i("@<1>").U(b).i("bf<1,2>"))},
gbh(){return this.a}}
A.hu.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dI.prototype={
gu(a){return this.a.length},
h(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.up.prototype={
gF(){return 0}}
A.W.prototype={}
A.a0.prototype={
gA(a){var s=this
return new A.ao(s,s.gu(s),A.v(s).i("ao<a0.E>"))},
gN(a){return this.gu(this)===0},
ga4(a){if(this.gu(this)===0)throw A.b(A.cV())
return this.ae(0,0)},
q(a,b){var s,r=this,q=r.gu(r)
for(s=0;s<q;++s){if(J.ab(r.ae(0,s),b))return!0
if(q!==r.gu(r))throw A.b(A.aF(r))}return!1},
a8(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(!b.$1(q.ae(0,r)))return!1
if(s!==q.gu(q))throw A.b(A.aF(q))}return!0},
R(a,b){var s,r,q=this
A.v(q).i("l(a0.E)").a(b)
s=q.gu(q)
for(r=0;r<s;++r){if(b.$1(q.ae(0,r)))return!0
if(s!==q.gu(q))throw A.b(A.aF(q))}return!1},
a0(a,b){var s,r,q,p=this,o=p.gu(p)
if(b.length!==0){if(o===0)return""
s=A.z(p.ae(0,0))
if(o!==p.gu(p))throw A.b(A.aF(p))
for(r=s,q=1;q<o;++q){r=r+b+A.z(p.ae(0,q))
if(o!==p.gu(p))throw A.b(A.aF(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.z(p.ae(0,q))
if(o!==p.gu(p))throw A.b(A.aF(p))}return r.charCodeAt(0)==0?r:r}},
oB(a){return this.a0(0,"")},
dZ(a,b){return this.k7(0,A.v(this).i("l(a0.E)").a(b))},
bB(a,b,c){var s=A.v(this)
return new A.G(this,s.U(c).i("1(a0.E)").a(b),s.i("@<a0.E>").U(c).i("G<1,2>"))},
cc(a,b){var s=A.v(this).i("a0.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bN(a){return this.cc(0,!0)},
be(a){var s,r=this,q=A.A1(A.v(r).i("a0.E"))
for(s=0;s<r.gu(r);++s)q.l(0,r.ae(0,s))
return q}}
A.jr.prototype={
gl3(){var s=J.cN(this.a),r=this.c
if(r==null||r>s)return s
return r},
gm8(){var s=J.cN(this.a),r=this.b
if(r>s)return s
return r},
gu(a){var s,r=J.cN(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
ae(a,b){var s=this,r=s.gm8()+b
if(b<0||r>=s.gl3())throw A.b(A.rd(b,s.gu(0),s,"index"))
return J.o9(s.a,r)},
cc(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aW(n),l=m.gu(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.BT(0,n):J.BS(0,n)}r=A.dj(s,m.ae(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.k(r,q,m.ae(n,o+q))
if(m.gu(n)<l)throw A.b(A.aF(p))}return r},
bN(a){return this.cc(0,!0)}}
A.ao.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.aW(q),o=p.gu(q)
if(r.b!==o)throw A.b(A.aF(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ae(q,s);++r.c
return!0},
$iaj:1}
A.cX.prototype={
gA(a){return new A.iQ(J.P(this.a),this.b,A.v(this).i("iQ<1,2>"))},
gu(a){return J.cN(this.a)},
gN(a){return J.kx(this.a)},
ga4(a){return this.b.$1(J.Bt(this.a))},
ae(a,b){return this.b.$1(J.o9(this.a,b))}}
A.dK.prototype={$iW:1}
A.iQ.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iaj:1}
A.G.prototype={
gu(a){return J.cN(this.a)},
ae(a,b){return this.b.$1(J.o9(this.a,b))}}
A.F.prototype={
gA(a){return new A.R(J.P(this.a),this.b,this.$ti.i("R<1>"))}}
A.R.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()},
$iaj:1}
A.fh.prototype={
gA(a){return new A.iB(J.P(this.a),this.b,B.fu,this.$ti.i("iB<1,2>"))}}
A.iB.prototype={
gp(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.P(r.$1(s.gp()))
q.c=p}else return!1}q.d=q.c.gp()
return!0},
$iaj:1}
A.iz.prototype={
m(){return!1},
gp(){throw A.b(A.cV())},
$iaj:1}
A.ea.prototype={
gA(a){return new A.jy(J.P(this.a),this.$ti.i("jy<1>"))}}
A.jy.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())},
$iaj:1}
A.aG.prototype={
su(a,b){throw A.b(A.bB("Cannot change the length of a fixed-length list"))},
l(a,b){A.cs(a).i("aG.E").a(b)
throw A.b(A.bB("Cannot add to a fixed-length list"))}}
A.eO.prototype={
k(a,b,c){A.v(this).i("eO.E").a(c)
throw A.b(A.bB("Cannot modify an unmodifiable list"))},
su(a,b){throw A.b(A.bB("Cannot change the length of an unmodifiable list"))},
l(a,b){A.v(this).i("eO.E").a(b)
throw A.b(A.bB("Cannot add to an unmodifiable list"))}}
A.hQ.prototype={}
A.bR.prototype={
gu(a){return J.cN(this.a)},
ae(a,b){var s=this.a,r=J.aW(s)
return r.ae(s,r.gu(s)-1-b)}}
A.k8.prototype={}
A.a6.prototype={$r:"+(1,2)",$s:1}
A.fU.prototype={$r:"+height,width(1,2)",$s:2}
A.jQ.prototype={$r:"+influence,light(1,2)",$s:3}
A.jR.prototype={$r:"+influence,source(1,2)",$s:4}
A.aJ.prototype={$r:"+(1,2,3)",$s:5}
A.aU.prototype={$r:"+b,g,r(1,2,3)",$s:6}
A.jS.prototype={$r:"+effectiveScore,light,score(1,2,3)",$s:7}
A.jT.prototype={$r:"+handoff,items,meshes(1,2,3)",$s:8}
A.cH.prototype={$r:"+(1,2,3,4)",$s:10}
A.jU.prototype={
gF(){return this.a[3]},
$r:"+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(1,2,3,4,5,6,7)",
$s:11}
A.iv.prototype={}
A.he.prototype={
gN(a){return this.gu(this)===0},
gab(a){return this.gu(this)!==0},
t(a){return A.A3(this)},
k(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
A.FE()},
gO(){return new A.cc(this.o6(),A.v(this).i("cc<O<1,2>>"))},
o6(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gO(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga9(),o=o.gA(o),n=A.v(s),m=n.y[1],n=n.i("O<1,2>")
case 2:if(!o.m()){r=3
break}l=o.gp()
k=s.h(0,l)
r=4
return a.b=new A.O(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
bn(a,b,c,d){var s=A.n(c,d)
this.aM(0,new A.px(this,A.v(this).U(c).U(d).i("O<1,2>(3,4)").a(b),s))
return s},
$iV:1}
A.px.prototype={
$2(a,b){var s=A.v(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.k(0,r.a,r.b)},
$S(){return A.v(this.a).i("~(1,2)")}}
A.a3.prototype={
gu(a){return this.b.length},
ghj(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
M(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.M(b))return null
return this.b[this.a[b]]},
aM(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.ghj()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
ga9(){return new A.fQ(this.ghj(),this.$ti.i("fQ<1>"))},
gan(){return new A.fQ(this.b,this.$ti.i("fQ<2>"))}}
A.fQ.prototype={
gu(a){return this.a.length},
gN(a){return 0===this.a.length},
gab(a){return 0!==this.a.length},
gA(a){var s=this.a
return new A.ec(s,s.length,this.$ti.i("ec<1>"))}}
A.ec.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iaj:1}
A.de.prototype={
bt(){var s=this,r=s.$map
if(r==null){r=new A.fp(s.$ti.i("fp<1,2>"))
A.Eh(s.a,r)
s.$map=r}return r},
M(a){return this.bt().M(a)},
h(a,b){return this.bt().h(0,b)},
aM(a,b){this.$ti.i("~(1,2)").a(b)
this.bt().aM(0,b)},
ga9(){var s=this.bt()
return new A.ag(s,A.v(s).i("ag<1>"))},
gan(){var s=this.bt()
return new A.an(s,A.v(s).i("an<2>"))},
gu(a){return this.bt().a}}
A.hf.prototype={
l(a,b){A.v(this).c.a(b)
A.FF()}}
A.b_.prototype={
gu(a){return this.b},
gN(a){return this.b===0},
gab(a){return this.b!==0},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.ec(s,s.length,r.$ti.i("ec<1>"))},
q(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
be(a){return A.fq(this,this.$ti.c)}}
A.hp.prototype={
gu(a){return this.a.length},
gN(a){return this.a.length===0},
gab(a){return this.a.length!==0},
gA(a){var s=this.a
return new A.ec(s,s.length,this.$ti.i("ec<1>"))},
bt(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.fp(o.$ti.i("fp<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
n.k(0,p,p)}o.$map=n}return n},
q(a,b){return this.bt().M(b)},
be(a){return A.fq(this,this.$ti.c)}}
A.tN.prototype={
$0(){return B.b.aZ(1000*this.a.now())},
$S:46}
A.jj.prototype={}
A.vB.prototype={
bc(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.j0.prototype={
t(a){return"Null check operator used on a null value"}}
A.lF.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.mB.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ti.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.iA.prototype={}
A.jW.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idu:1}
A.eA.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.EC(r==null?"unknown":r)+"'"},
gai(a){var s=A.B6(this)
return A.dD(s==null?A.cs(this):s)},
$ifk:1,
gqa(){return this},
$C:"$1",
$R:1,
$D:null}
A.kS.prototype={$C:"$0",$R:0}
A.kT.prototype={$C:"$2",$R:2}
A.mx.prototype={}
A.mv.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.EC(s)+"'"}}
A.h8.prototype={
ad(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.h8))return!1
return this.$_target===b.$_target&&this.a===b.a},
gW(a){return(A.o6(this.a)^A.j7(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.m9(this.a)+"'")}}
A.mi.prototype={
t(a){return"RuntimeError: "+this.a}}
A.cy.prototype={
gu(a){return this.a},
gN(a){return this.a===0},
gab(a){return this.a!==0},
ga9(){return new A.ag(this,A.v(this).i("ag<1>"))},
gan(){return new A.an(this,A.v(this).i("an<2>"))},
gO(){return new A.N(this,A.v(this).i("N<1,2>"))},
M(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.or(a)},
or(a){var s=this.d
if(s==null)return!1
return this.cH(this.hg(s,a),a)>=0},
K(a,b){A.v(this).i("V<1,2>").a(b).aM(0,new A.rx(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.os(b)},
os(a){var s,r,q=this.d
if(q==null)return null
s=this.hg(q,a)
r=this.cH(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q=this,p=A.v(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.fN(s==null?q.b=q.en():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.fN(r==null?q.c=q.en():r,b,c)}else q.ou(b,c)},
ou(a,b){var s,r,q,p,o=this,n=A.v(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.en()
r=o.dK(a)
q=s[r]
if(q==null)s[r]=[o.eo(a,b)]
else{p=o.cH(q,a)
if(p>=0)q[p].b=b
else q.push(o.eo(a,b))}},
c7(a,b){var s,r,q=this,p=A.v(q)
p.c.a(a)
p.i("2()").a(b)
if(q.M(a)){s=q.h(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.k(0,a,r)
return r},
aa(a,b){var s=this
if(typeof b=="string")return s.fK(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fK(s.c,b)
else return s.ot(b)},
ot(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dK(a)
r=n[s]
q=o.cH(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fL(p)
if(r.length===0)delete n[s]
return p.b},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.e5()}},
aM(a,b){var s,r,q=this
A.v(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.aF(q))
s=s.c}},
fN(a,b,c){var s,r=A.v(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.eo(b,c)
else s.b=c},
fK(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fL(s)
delete a[b]
return s.b},
e5(){this.r=this.r+1&1073741823},
eo(a,b){var s=this,r=A.v(s),q=new A.rH(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.e5()
return q},
fL(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.e5()},
dK(a){return J.aP(a)&1073741823},
hg(a,b){return a[this.dK(b)]},
cH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
t(a){return A.A3(this)},
en(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iA0:1}
A.rx.prototype={
$2(a,b){var s=this.a,r=A.v(s)
s.k(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.v(this.a).i("~(1,2)")}}
A.rH.prototype={}
A.ag.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gA(a){var s=this.a
return new A.c1(s,s.r,s.e,this.$ti.i("c1<1>"))},
q(a,b){return this.a.M(b)}}
A.c1.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iaj:1}
A.an.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gA(a){var s=this.a
return new A.ae(s,s.r,s.e,this.$ti.i("ae<1>"))}}
A.ae.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iaj:1}
A.N.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gA(a){var s=this.a
return new A.cW(s,s.r,s.e,this.$ti.i("cW<1,2>"))}}
A.cW.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.O(s.a,s.b,r.$ti.i("O<1,2>"))
r.c=s.c
return!0}},
$iaj:1}
A.fp.prototype={
dK(a){return A.KJ(a)&1073741823},
cH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.z3.prototype={
$1(a){return this.a(a)},
$S:17}
A.z4.prototype={
$2(a,b){return this.a(a,b)},
$S:82}
A.z5.prototype={
$1(a){return this.a(A.x(a))},
$S:40}
A.bk.prototype={
gai(a){return A.dD(this.hh())},
hh(){return A.KV(this.$r,this.d6())},
t(a){return this.hM(!1)},
hM(a){var s,r,q,p,o,n=this.l7(),m=this.d6(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.e(m,q)
o=m[q]
l=a?l+A.Ce(o):l+A.z(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
l7(){var s,r=this.$s
while($.x6.length<=r)B.a.l($.x6,null)
s=$.x6[r]
if(s==null){s=this.kP()
B.a.k($.x6,r,s)}return s},
kP(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.rm(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.k(j,q,r[s])}}return A.ad(j,k)}}
A.ed.prototype={
d6(){return[this.a,this.b]},
ad(a,b){if(b==null)return!1
return b instanceof A.ed&&this.$s===b.$s&&J.ab(this.a,b.a)&&J.ab(this.b,b.b)},
gW(a){return A.cY(this.$s,this.a,this.b,B.h,B.h,B.h)}}
A.ee.prototype={
d6(){return[this.a,this.b,this.c]},
ad(a,b){var s=this
if(b==null)return!1
return b instanceof A.ee&&s.$s===b.$s&&J.ab(s.a,b.a)&&J.ab(s.b,b.b)&&J.ab(s.c,b.c)},
gW(a){var s=this
return A.cY(s.$s,s.a,s.b,s.c,B.h,B.h)}}
A.fT.prototype={
d6(){return this.a},
ad(a,b){if(b==null)return!1
return b instanceof A.fT&&this.$s===b.$s&&A.Id(this.a,b.a)},
gW(a){return A.cY(this.$s,A.GH(this.a),B.h,B.h,B.h,B.h)}}
A.iL.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
glq(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.BW(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kQ(){var s,r=this.a
if(!B.c.q(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
hY(a,b){return new A.mX(this,b,0)},
l6(a,b){var s,r=this.glq()
if(r==null)r=A.fY(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.nh(s)},
$itp:1,
$iH1:1}
A.nh.prototype={
gfG(){return this.b.index},
geJ(){var s=this.b
return s.index+s[0].length},
$ihy:1,
$ijb:1}
A.mX.prototype={
gA(a){return new A.mY(this.a,this.b,this.c)}}
A.mY.prototype={
gp(){var s=this.d
return s==null?t.ez.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.l6(l,s)
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
$iaj:1}
A.jq.prototype={
geJ(){return this.a+this.c.length},
$ihy:1,
gfG(){return this.a}}
A.ny.prototype={
gA(a){return new A.nz(this.a,this.b,this.c)},
ga4(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.jq(r,s)
throw A.b(A.cV())}}
A.nz.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.jq(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iaj:1}
A.wq.prototype={
j(){var s=this.b
if(s===this)throw A.b(A.aa(""))
return s}}
A.eJ.prototype={
gai(a){return B.rj},
i0(a,b,c){A.xq(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
i_(a,b,c){A.xq(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iaq:1,
$ieJ:1}
A.hB.prototype={$ihB:1}
A.iZ.prototype={
gey(a){if(((a.$flags|0)&2)!==0)return new A.xd(a.buffer)
else return a.buffer},
lj(a,b,c,d){var s=A.b6(b,0,c,d,null)
throw A.b(s)},
fW(a,b,c,d){if(b>>>0!==b||b>c)this.lj(a,b,c,d)}}
A.xd.prototype={
i0(a,b,c){var s=A.C9(this.a,b,c)
s.$flags=3
return s},
i_(a,b,c){var s=A.GE(this.a,b,c)
s.$flags=3
return s}}
A.lS.prototype={
gai(a){return B.rk},
$iaq:1}
A.bx.prototype={
gu(a){return a.length},
hD(a,b,c,d,e){var s,r,q=a.length
this.fW(a,b,q,"start")
this.fW(a,c,q,"end")
if(b>c)throw A.b(A.b6(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.p(e,null))
r=d.length
if(r-e<s)throw A.b(A.i("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$icf:1}
A.iX.prototype={
h(a,b){A.ei(b,a,a.length)
return a[b]},
k(a,b,c){A.az(c)
a.$flags&2&&A.aY(a)
A.ei(b,a,a.length)
a[b]=c},
cX(a,b,c,d){t.oJ.a(d)
a.$flags&2&&A.aY(a,5)
this.hD(a,b,c,d,0)
return},
$iW:1,
$it:1,
$iK:1}
A.iY.prototype={
k(a,b,c){A.j(c)
a.$flags&2&&A.aY(a)
A.ei(b,a,a.length)
a[b]=c},
jF(a,b,c,d,e){t.iC.a(d)
a.$flags&2&&A.aY(a,5)
this.hD(a,b,c,d,e)
return},
$iW:1,
$it:1,
$iK:1}
A.iW.prototype={
gai(a){return B.rl},
ag(a,b,c){return new Float32Array(a.subarray(b,A.nP(b,c,a.length)))},
$iaq:1,
$iq5:1}
A.lT.prototype={
gai(a){return B.rm},
$iaq:1,
$iq6:1}
A.lU.prototype={
gai(a){return B.rn},
h(a,b){A.ei(b,a,a.length)
return a[b]},
$iaq:1}
A.lV.prototype={
gai(a){return B.ro},
h(a,b){A.ei(b,a,a.length)
return a[b]},
$iaq:1}
A.lW.prototype={
gai(a){return B.rp},
h(a,b){A.ei(b,a,a.length)
return a[b]},
$iaq:1}
A.lX.prototype={
gai(a){return B.rs},
h(a,b){A.ei(b,a,a.length)
return a[b]},
$iaq:1,
$ivD:1}
A.lY.prototype={
gai(a){return B.rt},
h(a,b){A.ei(b,a,a.length)
return a[b]},
$iaq:1,
$ivE:1}
A.ft.prototype={
gai(a){return B.ru},
gu(a){return a.length},
h(a,b){A.ei(b,a,a.length)
return a[b]},
$iaq:1,
$ift:1}
A.j_.prototype={
gai(a){return B.rv},
gu(a){return a.length},
h(a,b){A.ei(b,a,a.length)
return a[b]},
ag(a,b,c){return new Uint8Array(a.subarray(b,A.nP(b,c,a.length)))},
$iaq:1,
$ica:1}
A.jL.prototype={}
A.jM.prototype={}
A.jN.prototype={}
A.jO.prototype={}
A.d0.prototype={
i(a){return A.k_(v.typeUniverse,this,a)},
U(a){return A.D9(v.typeUniverse,this,a)}}
A.nb.prototype={}
A.nC.prototype={
t(a){return A.bW(this.a,null)}}
A.n9.prototype={
t(a){return this.a}}
A.hY.prototype={$ie6:1}
A.wm.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:25}
A.wl.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:81}
A.wn.prototype={
$0(){this.a.$0()},
$S:15}
A.wo.prototype={
$0(){this.a.$0()},
$S:15}
A.x9.prototype={
kt(a,b){if(self.setTimeout!=null)self.setTimeout(A.ie(new A.xa(this,b),0),a)
else throw A.b(A.bB("`setTimeout()` not found."))}}
A.xa.prototype={
$0(){this.b.$0()},
$S:0}
A.mZ.prototype={
ez(a){var s,r=this,q=r.$ti
q.i("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.e8(a)
else{s=r.a
if(q.i("b0<1>").b(a))s.fU(a)
else s.d4(a)}},
eA(a,b){var s=this.a
if(this.b)s.bF(new A.bt(a,b))
else s.d1(new A.bt(a,b))}}
A.xn.prototype={
$1(a){return this.a.$2(0,a)},
$S:23}
A.xo.prototype={
$2(a,b){this.a.$2(1,new A.iA(a,t.l.a(b)))},
$S:138}
A.yQ.prototype={
$2(a,b){this.a(A.j(a),b)},
$S:154}
A.d4.prototype={
gp(){var s=this.b
return s==null?this.$ti.c.a(s):s},
lZ(a,b){var s,r,q
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
o.d=null}q=o.lZ(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.D3
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
o.a=A.D3
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.b(A.i("sync*"))}return!1},
mp(a){var s,r,q=this
if(a instanceof A.cc){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.l(r,q.a)
q.a=s
return 2}else{q.d=J.P(a)
return 2}},
$iaj:1}
A.cc.prototype={
gA(a){return new A.d4(this.a(),this.$ti.i("d4<1>"))}}
A.bt.prototype={
t(a){return A.z(this.a)},
$iav:1,
gcg(){return this.b}}
A.qd.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.h0(null)}else{s=null
try{s=l.$0()}catch(p){r=A.am(p)
q=A.d8(p)
l=r
o=q
n=A.AG(l,o)
l=new A.bt(l,o)
m.b.bF(l)
return}m.b.h0(s)}},
$S:0}
A.qg.prototype={
$2(a,b){var s,r,q=this
A.fY(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
s.d=a
s.c=b
if(r===0||q.c)q.d.bF(new A.bt(a,b))}else if(r===0&&!q.c){r=s.d
r.toString
s=s.c
s.toString
q.d.bF(new A.bt(r,s))}},
$S:68}
A.qf.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.d
j.a(a)
o=k.a
s=--o.b
r=o.a
if(r!=null){J.bd(r,k.b,a)
if(J.ab(s,0)){q=A.d([],j.i("w<0>"))
for(o=r,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){p=o[m]
l=p
if(l==null)l=j.a(l)
J.em(q,l)}k.c.d4(q)}}else if(J.ab(s,0)&&!k.f){q=o.d
q.toString
o=o.c
o.toString
k.c.bF(new A.bt(q,o))}},
$S(){return this.d.i("aB(0)")}}
A.n2.prototype={
eA(a,b){var s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.d1(A.Jr(a,b))},
i5(a){return this.eA(a,null)}}
A.jA.prototype={
ez(a){var s,r=this.$ti
r.i("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.b(A.i("Future already completed"))
s.e8(r.i("1/").a(a))}}
A.eb.prototype={
oG(a){if((this.c&15)!==6)return!0
return this.b.b.fd(t.bl.a(this.d),a.a,t.y,t.K)},
og(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.nW.b(q))p=l.pR(q,m,a.b,o,n,t.l)
else p=l.fd(t.h_.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.bs.b(A.am(s))){if((r.c&1)!==0)throw A.b(A.p("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.p("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.au.prototype={
ff(a,b,c){var s,r,q=this.$ti
q.U(c).i("1/(2)").a(a)
s=$.at
if(s===B.D){if(!t.nW.b(b)&&!t.h_.b(b))throw A.b(A.a8(b,"onError",u.c))}else{c.i("@<0/>").U(q.c).i("1(2)").a(a)
b=A.DX(b,s)}r=new A.au(s,c.i("au<0>"))
this.d0(new A.eb(r,3,a,b,q.i("@<1>").U(c).i("eb<1,2>")))
return r},
hK(a,b,c){var s,r=this.$ti
r.U(c).i("1/(2)").a(a)
s=new A.au($.at,c.i("au<0>"))
this.d0(new A.eb(s,19,a,b,r.i("@<1>").U(c).i("eb<1,2>")))
return s},
m3(a){this.a=this.a&1|16
this.c=a},
d3(a){this.a=a.a&30|this.a&1
this.c=a.c},
d0(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.hR.a(r.c)
if((s.a&24)===0){s.d0(a)
return}r.d3(s)}A.nY(null,null,r.b,t.O.a(new A.wt(r,a)))}},
hs(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.hR.a(m.c)
if((n.a&24)===0){n.hs(a)
return}m.d3(n)}l.a=m.dd(a)
A.nY(null,null,m.b,t.O.a(new A.wy(l,m)))}},
co(){var s=t.F.a(this.c)
this.c=null
return this.dd(s)},
dd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
h0(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("b0<1>").b(a))A.ww(a,r,!0)
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
kO(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.co()
q.d3(a)
A.fO(q,r)},
bF(a){var s=this.co()
this.m3(a)
A.fO(this,s)},
e8(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("b0<1>").b(a)){this.fU(a)
return}this.kx(a)},
kx(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nY(null,null,s.b,t.O.a(new A.wv(s,a)))},
fU(a){A.ww(this.$ti.i("b0<1>").a(a),this,!1)
return},
d1(a){this.a^=2
A.nY(null,null,this.b,t.O.a(new A.wu(this,a)))},
$ib0:1}
A.wt.prototype={
$0(){A.fO(this.a,this.b)},
$S:0}
A.wy.prototype={
$0(){A.fO(this.b,this.a.a)},
$S:0}
A.wx.prototype={
$0(){A.ww(this.a.a,this.b,!0)},
$S:0}
A.wv.prototype={
$0(){this.a.d4(this.b)},
$S:0}
A.wu.prototype={
$0(){this.a.bF(this.b)},
$S:0}
A.wB.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pQ(t.pF.a(q.d),t.z)}catch(p){s=A.am(p)
r=A.d8(p)
if(k.c&&t.v.a(k.b.a.c).a===s){q=k.a
q.c=t.v.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.ox(q)
n=k.a
n.c=new A.bt(q,o)
q=n}q.b=!0
return}if(j instanceof A.au&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.v.a(j.c)
q.b=!0}return}if(j instanceof A.au){m=k.b.a
l=new A.au(m.b,m.$ti)
j.ff(new A.wC(l,m),new A.wD(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.wC.prototype={
$1(a){this.a.kO(this.b)},
$S:25}
A.wD.prototype={
$2(a,b){A.fY(a)
t.l.a(b)
this.a.bF(new A.bt(a,b))},
$S:72}
A.wA.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fd(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.am(l)
r=A.d8(l)
q=s
p=r
if(p==null)p=A.ox(q)
o=this.a
o.c=new A.bt(q,p)
o.b=!0}},
$S:0}
A.wz.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.v.a(l.a.a.c)
p=l.b
if(p.a.oG(s)&&p.a.e!=null){p.c=p.a.og(s)
p.b=!1}}catch(o){r=A.am(o)
q=A.d8(o)
p=t.v.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ox(p)
m=l.b
m.c=new A.bt(p,n)
p=m}p.b=!0}},
$S:0}
A.n_.prototype={}
A.nx.prototype={}
A.k7.prototype={$iCY:1}
A.nq.prototype={
pS(a){var s,r,q
t.O.a(a)
try{if(B.D===$.at){a.$0()
return}A.E1(null,null,this,a,t.H)}catch(q){s=A.am(q)
r=A.d8(q)
A.AT(A.fY(s),t.l.a(r))}},
i2(a){return new A.x7(this,t.O.a(a))},
pQ(a,b){b.i("0()").a(a)
if($.at===B.D)return a.$0()
return A.E1(null,null,this,a,b)},
fd(a,b,c,d){c.i("@<0>").U(d).i("1(2)").a(a)
d.a(b)
if($.at===B.D)return a.$1(b)
return A.K7(null,null,this,a,b,c,d)},
pR(a,b,c,d,e,f){d.i("@<0>").U(e).U(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.at===B.D)return a.$2(b,c)
return A.K6(null,null,this,a,b,c,d,e,f)},
j4(a,b,c,d){return b.i("@<0>").U(c).U(d).i("1(2,3)").a(a)}}
A.x7.prototype={
$0(){return this.a.pS(this.b)},
$S:0}
A.yA.prototype={
$0(){A.G3(this.a,this.b)},
$S:0}
A.jF.prototype={
gu(a){return this.a},
gN(a){return this.a===0},
gab(a){return this.a!==0},
ga9(){return new A.fP(this,this.$ti.i("fP<1>"))},
gan(){var s=this.$ti
return A.lN(new A.fP(this,s.i("fP<1>")),new A.wF(this),s.c,s.y[1])},
M(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kU(a)},
kU(a){var s=this.d
if(s==null)return!1
return this.bG(this.h_(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.D_(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.D_(q,b)
return r}else return this.lb(b)},
lb(a){var s,r,q=this.d
if(q==null)return null
s=this.h_(q,a)
r=this.bG(s,a)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.fZ(s==null?m.b=A.Ai():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.fZ(r==null?m.c=A.Ai():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.Ai()
p=A.o6(b)&1073741823
o=q[p]
if(o==null){A.Aj(q,p,[b,c]);++m.a
m.e=null}else{n=m.bG(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
aM(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.h1()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.h(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.aF(m))}},
h1(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
fZ(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.Aj(a,b,c)},
h_(a,b){return a[A.o6(b)&1073741823]}}
A.wF.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.h(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.i("2(1)")}}
A.jH.prototype={
bG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.fP.prototype={
gu(a){return this.a.a},
gN(a){return this.a.a===0},
gab(a){return this.a.a!==0},
gA(a){var s=this.a
return new A.jG(s,s.h1(),this.$ti.i("jG<1>"))},
q(a,b){return this.a.M(b)}}
A.jG.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aF(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iaj:1}
A.cG.prototype={
hp(){return new A.cG(A.v(this).i("cG<1>"))},
gA(a){var s=this,r=new A.fR(s,s.r,A.v(s).i("fR<1>"))
r.c=s.e
return r},
gu(a){return this.a},
gN(a){return this.a===0},
gab(a){return this.a!==0},
q(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.Af.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.Af.a(r[b])!=null}else return this.kT(b)},
kT(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.ec(a)],a)>=0},
ga4(a){var s=this.e
if(s==null)throw A.b(A.i("No elements"))
return A.v(this).c.a(s.a)},
l(a,b){var s,r,q=this
A.v(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.fY(s==null?q.b=A.Ak():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.fY(r==null?q.c=A.Ak():r,b)}else return q.ku(b)},
ku(a){var s,r,q,p=this
A.v(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.Ak()
r=p.ec(a)
q=s[r]
if(q==null)s[r]=[p.eb(a)]
else{if(p.bG(q,a)>=0)return!1
q.push(p.eb(a))}return!0},
aa(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.hv(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.hv(s.c,b)
else return s.lU(b)},
lU(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ec(a)
r=n[s]
q=o.bG(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hP(p)
return!0},
l9(a,b){var s,r,q,p,o,n=this,m=A.v(n)
m.i("l(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.b(A.aF(n))
if(!0===o)n.aa(0,r)}},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.em()}},
fY(a,b){A.v(this).c.a(b)
if(t.Af.a(a[b])!=null)return!1
a[b]=this.eb(b)
return!0},
hv(a,b){var s
if(a==null)return!1
s=t.Af.a(a[b])
if(s==null)return!1
this.hP(s)
delete a[b]
return!0},
em(){this.r=this.r+1&1073741823},
eb(a){var s,r=this,q=new A.ng(A.v(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.em()
return q},
hP(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.em()},
ec(a){return J.aP(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
$iC1:1}
A.ng.prototype={}
A.fR.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aF(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iaj:1}
A.rI.prototype={
$2(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:77}
A.a5.prototype={
gA(a){return new A.ao(a,this.gu(a),A.cs(a).i("ao<a5.E>"))},
ae(a,b){return this.h(a,b)},
gN(a){return this.gu(a)===0},
gab(a){return!this.gN(a)},
ga4(a){if(this.gu(a)===0)throw A.b(A.cV())
return this.h(a,0)},
q(a,b){var s,r=this.gu(a)
for(s=0;s<r;++s){if(J.ab(this.h(a,s),b))return!0
if(r!==this.gu(a))throw A.b(A.aF(a))}return!1},
a8(a,b){var s,r
A.cs(a).i("l(a5.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(!b.$1(this.h(a,r)))return!1
if(s!==this.gu(a))throw A.b(A.aF(a))}return!0},
R(a,b){var s,r
A.cs(a).i("l(a5.E)").a(b)
s=this.gu(a)
for(r=0;r<s;++r){if(b.$1(this.h(a,r)))return!0
if(s!==this.gu(a))throw A.b(A.aF(a))}return!1},
a0(a,b){var s
if(this.gu(a)===0)return""
s=A.Ac("",a,b)
return s.charCodeAt(0)==0?s:s},
fl(a,b){return new A.ea(a,b.i("ea<0>"))},
bB(a,b,c){var s=A.cs(a)
return new A.G(a,s.U(c).i("1(a5.E)").a(b),s.i("@<a5.E>").U(c).i("G<1,2>"))},
l(a,b){var s
A.cs(a).i("a5.E").a(b)
s=this.gu(a)
this.su(a,s+1)
this.k(a,s,b)},
dk(a,b){return new A.bf(a,A.cs(a).i("@<a5.E>").U(b).i("bf<1,2>"))},
oa(a,b,c,d){var s
A.cs(a).i("a5.E?").a(d)
A.fy(b,c,this.gu(a))
for(s=b;s<c;++s)this.k(a,s,d)},
t(a){return A.zX(a,"[","]")},
$iW:1,
$it:1,
$iK:1}
A.ai.prototype={
aM(a,b){var s,r,q,p=A.v(this)
p.i("~(ai.K,ai.V)").a(b)
for(s=this.ga9(),s=s.gA(s),p=p.i("ai.V");s.m();){r=s.gp()
q=this.h(0,r)
b.$2(r,q==null?p.a(q):q)}},
gO(){return this.ga9().bB(0,new A.rK(this),A.v(this).i("O<ai.K,ai.V>"))},
bn(a,b,c,d){var s,r,q,p,o,n=A.v(this)
n.U(c).U(d).i("O<1,2>(ai.K,ai.V)").a(b)
s=A.n(c,d)
for(r=this.ga9(),r=r.gA(r),n=n.i("ai.V");r.m();){q=r.gp()
p=this.h(0,q)
o=b.$2(q,p==null?n.a(p):p)
s.k(0,o.a,o.b)}return s},
mr(a){var s,r
for(s=J.P(A.v(this).i("t<O<ai.K,ai.V>>").a(a));s.m();){r=s.gp()
this.k(0,r.a,r.b)}},
M(a){return this.ga9().q(0,a)},
gu(a){var s=this.ga9()
return s.gu(s)},
gN(a){var s=this.ga9()
return s.gN(s)},
gab(a){var s=this.ga9()
return s.gab(s)},
gan(){return new A.jI(this,A.v(this).i("jI<ai.K,ai.V>"))},
t(a){return A.A3(this)},
$iV:1}
A.rK.prototype={
$1(a){var s=this.a,r=A.v(s)
r.i("ai.K").a(a)
s=s.h(0,a)
if(s==null)s=r.i("ai.V").a(s)
return new A.O(a,s,r.i("O<ai.K,ai.V>"))},
$S(){return A.v(this.a).i("O<ai.K,ai.V>(ai.K)")}}
A.rL.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.z(a)
r.a=(r.a+=s)+": "
s=A.z(b)
r.a+=s},
$S:41}
A.jI.prototype={
gu(a){var s=this.a
return s.gu(s)},
gN(a){var s=this.a
return s.gN(s)},
gab(a){var s=this.a
return s.gab(s)},
ga4(a){var s=this.a,r=s.ga9()
r=s.h(0,r.ga4(r))
return r==null?this.$ti.y[1].a(r):r},
gA(a){var s=this.a,r=s.ga9()
return new A.jJ(r.gA(r),s,this.$ti.i("jJ<1,2>"))}}
A.jJ.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gp())
return!0}s.c=null
return!1},
gp(){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iaj:1}
A.k0.prototype={
k(a,b,c){var s=A.v(this)
s.c.a(b)
s.y[1].a(c)
throw A.b(A.bB("Cannot modify unmodifiable map"))}}
A.hx.prototype={
h(a,b){return this.a.h(0,b)},
k(a,b,c){var s=A.v(this)
this.a.k(0,s.c.a(b),s.y[1].a(c))},
M(a){return this.a.M(a)},
aM(a,b){this.a.aM(0,A.v(this).i("~(1,2)").a(b))},
gN(a){var s=this.a
return s.gN(s)},
gab(a){var s=this.a
return s.gab(s)},
gu(a){var s=this.a
return s.gu(s)},
ga9(){return this.a.ga9()},
t(a){return this.a.t(0)},
gan(){return this.a.gan()},
gO(){return this.a.gO()},
bn(a,b,c,d){return this.a.bn(0,A.v(this).U(c).U(d).i("O<1,2>(3,4)").a(b),c,d)},
$iV:1}
A.eP.prototype={}
A.ds.prototype={
gN(a){return this.gu(this)===0},
gab(a){return this.gu(this)!==0},
K(a,b){var s
for(s=J.P(A.v(this).i("t<1>").a(b));s.m();)this.l(0,s.gp())},
bJ(a){var s,r,q=this.be(0)
for(s=this.gA(this);s.m();){r=s.gp()
if(a.q(0,r))q.aa(0,r)}return q},
t(a){return A.zX(this,"{","}")},
a8(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gA(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a0(a,b){var s,r,q=this.gA(this)
if(!q.m())return""
s=J.cd(q.gp())
if(!q.m())return s
if(b.length===0){r=s
do r+=A.z(q.gp())
while(q.m())}else{r=s
do r=r+b+A.z(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.v(this).i("l(1)").a(b)
for(s=this.gA(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
ga4(a){var s=this.gA(this)
if(!s.m())throw A.b(A.cV())
return s.gp()},
ae(a,b){var s,r
A.me(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.b(A.rd(b,b-r,this,"index"))},
$iW:1,
$it:1,
$ie1:1}
A.jV.prototype={
bJ(a){var s,r,q,p=this,o=p.hp()
for(s=A.eW(p,p.r,A.v(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(!a.q(0,q))o.l(0,q)}return o},
be(a){var s=this.hp()
s.K(0,this)
return s}}
A.nD.prototype={
l(a,b){this.$ti.c.a(b)
return A.Ip()}}
A.hR.prototype={
q(a,b){return this.a.q(0,b)},
gu(a){return this.a.a},
gA(a){var s=this.a
return A.eW(s,s.r,A.v(s).c)},
be(a){return this.a.be(0)}}
A.hZ.prototype={}
A.k1.prototype={}
A.ne.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lM(b):s}},
gu(a){return this.b==null?this.c.a:this.bQ().length},
gN(a){return this.gu(0)===0},
gab(a){return this.gu(0)>0},
ga9(){if(this.b==null){var s=this.c
return new A.ag(s,A.v(s).i("ag<1>"))}return new A.nf(this)},
gan(){var s,r=this
if(r.b==null){s=r.c
return new A.an(s,A.v(s).i("an<2>"))}return A.lN(r.bQ(),new A.wH(r),t.N,t.z)},
k(a,b,c){var s,r,q=this
A.x(b)
if(q.b==null)q.c.k(0,b,c)
else if(q.M(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.mh().k(0,b,c)},
M(a){if(this.b==null)return this.c.M(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
aM(a,b){var s,r,q,p,o=this
t.m1.a(b)
if(o.b==null)return o.c.aM(0,b)
s=o.bQ()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.xR(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aF(o))}},
bQ(){var s=t.rK.a(this.c)
if(s==null)s=this.c=A.d(Object.keys(this.a),t.s)
return s},
mh(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.n(t.N,t.z)
r=n.bQ()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.k(0,o,n.h(0,o))}if(p===0)B.a.l(r,"")
else B.a.S(r)
n.a=n.b=null
return n.c=s},
lM(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.xR(this.a[a])
return this.b[a]=s}}
A.wH.prototype={
$1(a){return this.a.h(0,A.x(a))},
$S:40}
A.nf.prototype={
gu(a){return this.a.gu(0)},
ae(a,b){var s=this.a
if(s.b==null)s=s.ga9().ae(0,b)
else{s=s.bQ()
if(!(b>=0&&b<s.length))return A.e(s,b)
s=s[b]}return s},
gA(a){var s=this.a
if(s.b==null){s=s.ga9()
s=s.gA(s)}else{s=s.bQ()
s=new J.fb(s,s.length,A.C(s).i("fb<1>"))}return s},
q(a,b){return this.a.M(b)}}
A.xg.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:57}
A.xf.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:57}
A.kC.prototype={
nF(a,b){t.J.a(a)
if(b===!0)return B.eV.bI(a)
else return B.eU.bI(a)}}
A.xb.prototype={
bI(a){var s,r,q,p,o
t.J.a(a)
s=a.length
r=A.fy(0,null,s)
for(q=~this.b,p=0;p<r;++p){if(!(p<s))return A.e(a,p)
o=a[p]
if((o&q)!==0){if(!this.a)throw A.b(A.M("Invalid value in input: "+o,null,null))
return this.kW(a,0,r)}}return A.Ad(a,0,r)},
kW(a,b,c){var s,r,q,p,o
t.J.a(a)
for(s=~this.b,r=a.length,q=b,p="";q<c;++q){if(!(q<r))return A.e(a,q)
o=a[q]
p+=A.aC((o&s)!==0?65533:o)}return p.charCodeAt(0)==0?p:p}}
A.kD.prototype={}
A.kJ.prototype={
oK(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.fy(a4,a5,a2)
s=$.EU()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.z2(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.z2(a3.charCodeAt(g))
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
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.bK("")
g=o}else g=o
g.a+=B.c.L(a3,p,q)
c=A.aC(j)
g.a+=c
p=k
continue}}throw A.b(A.M("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.L(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.Bw(a3,m,a5,n,l,r)
else{b=B.d.P(r-1,4)+1
if(b===1)throw A.b(A.M(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.cb(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.Bw(a3,m,a5,n,l,a)
else{b=B.d.P(a,4)
if(b===1)throw A.b(A.M(a1,a3,a5))
if(b>1)a3=B.c.cb(a3,a5,a5,b===2?"==":"=")}return a3}}
A.ph.prototype={}
A.eB.prototype={}
A.kZ.prototype={}
A.la.prototype={}
A.iN.prototype={
t(a){var s=A.lb(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.lH.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.lG.prototype={
am(a,b){var s=A.JU(a,this.gnI().a)
return s},
a3(a,b){var s=A.I3(a,this.go2().b,null)
return s},
go2(){return B.kn},
gnI(){return B.km}}
A.rz.prototype={}
A.ry.prototype={}
A.wJ.prototype={
ji(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.L(a,r,q)
r=q+1
o=A.aC(92)
s.a+=o
o=A.aC(117)
s.a+=o
o=A.aC(100)
s.a+=o
o=p>>>8&15
o=A.aC(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aC(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aC(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.L(a,r,q)
r=q+1
o=A.aC(92)
s.a+=o
switch(p){case 8:o=A.aC(98)
s.a+=o
break
case 9:o=A.aC(116)
s.a+=o
break
case 10:o=A.aC(110)
s.a+=o
break
case 12:o=A.aC(102)
s.a+=o
break
case 13:o=A.aC(114)
s.a+=o
break
default:o=A.aC(117)
s.a+=o
o=A.aC(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aC(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aC(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.L(a,r,q)
r=q+1
o=A.aC(92)
s.a+=o
o=A.aC(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.L(a,r,m)},
e9(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.lH(a,null))}B.a.l(s,a)},
e_(a){var s,r,q,p,o=this
if(o.jh(a))return
o.e9(a)
try{s=o.b.$1(a)
if(!o.jh(s)){q=A.BY(a,null,o.ghr())
throw A.b(q)}q=o.a
if(0>=q.length)return A.e(q,-1)
q.pop()}catch(p){r=A.am(p)
q=A.BY(a,r,o.ghr())
throw A.b(q)}},
jh(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.ji(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.e9(a)
q.q8(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.e9(a)
r=q.q9(a)
s=q.a
if(0>=s.length)return A.e(s,-1)
s.pop()
return r}else return!1},
q8(a){var s,r,q=this.c
q.a+="["
s=J.aW(a)
if(s.gab(a)){this.e_(s.h(a,0))
for(r=1;r<s.gu(a);++r){q.a+=","
this.e_(s.h(a,r))}}q.a+="]"},
q9(a){var s,r,q,p,o,n,m=this,l={}
if(a.gN(a)){m.c.a+="{}"
return!0}s=a.gu(a)*2
r=A.dj(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.aM(0,new A.wK(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.ji(A.x(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.e(r,n)
m.e_(r[n])}p.a+="}"
return!0}}
A.wK.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.k(s,r.a++,a)
B.a.k(s,r.a++,b)},
$S:41}
A.wI.prototype={
ghr(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.mF.prototype={}
A.vJ.prototype={
bI(a){var s,r,q,p=a.length,o=A.fy(0,null,p)
if(o===0)return new Uint8Array(0)
s=new Uint8Array(o*3)
r=new A.xh(s)
if(r.l8(a,0,o)!==o){q=o-1
if(!(q>=0&&q<p))return A.e(a,q)
r.ev()}return B.a9.ag(s,0,r.b)}}
A.xh.prototype={
ev(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.aY(q)
s=q.length
if(!(p<s))return A.e(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.e(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.e(q,p)
q[p]=189},
mo(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.aY(r)
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
return!0}else{n.ev()
return!1}},
l8(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.e(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.e(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.aY(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.e(a,m)
if(k.mo(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.ev()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.aY(s)
if(!(m<q))return A.e(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.aY(s)
if(!(m<q))return A.e(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.e(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.e(s,m)
s[m]=n&63|128}}}return o}}
A.vI.prototype={
bI(a){return new A.xe(this.a).kV(t.J.a(a),0,null,!0)}}
A.xe.prototype={
kV(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.J.a(a)
s=A.fy(b,c,J.cN(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.IG(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.IF(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.ee(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.IH(o)
l.b=0
throw A.b(A.M(m,a,p+l.c))}return n},
ee(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.ah(b+c,2)
r=q.ee(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ee(a,s,c,d)}return q.nH(a,b,c,d)},
nH(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.bK(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.aC(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.aC(h)
e.a+=p
break
case 65:p=A.aC(h)
e.a+=p;--d
break
default:p=A.aC(h)
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
p=A.aC(a[l])
e.a+=p}else{p=A.Ad(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.aC(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.fg.prototype={
gaE(){return A.Cc(this)},
gb0(){return A.Cd(this)},
ad(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.fg)if(this.a===b.a)s=this.b===b.b
return s},
gW(a){return A.cY(this.a,this.b,B.h,B.h,B.h,B.h)},
I(a,b){var s
t.f7.a(b)
s=B.d.I(this.a,b.a)
if(s!==0)return s
return B.d.I(this.b,b.b)},
t(a){var s=this,r=A.FJ(A.GX(s)),q=A.l0(A.GV(s)),p=A.l0(A.Cc(s)),o=A.l0(A.Cd(s)),n=A.l0(A.GU(s)),m=A.l0(A.GW(s)),l=A.BE(A.GT(s)),k=s.b,j=k===0?"":A.BE(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ibv:1}
A.dJ.prototype={
ad(a,b){if(b==null)return!1
return b instanceof A.dJ&&this.a===b.a},
gW(a){return B.d.gW(this.a)},
I(a,b){return B.d.I(this.a,t.yb.a(b).a)},
t(a){var s,r,q,p=this.a,o=p%36e8,n=B.d.ah(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.d.ah(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bL(B.d.t(o%1e6),6,"0")},
$ibv:1}
A.n8.prototype={
t(a){return this.C()},
$iD:1}
A.av.prototype={
gcg(){return A.GS(this)}}
A.kE.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.lb(s)
return"Assertion failed"}}
A.e6.prototype={}
A.cP.prototype={
gei(){return"Invalid argument"+(!this.a?"(s)":"")},
geh(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.z(p),n=s.gei()+q+o
if(!s.a)return n
return n+s.geh()+": "+A.lb(s.gf0())},
gf0(){return this.b}}
A.hF.prototype={
gf0(){return A.At(this.b)},
gei(){return"RangeError"},
geh(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.z(q):""
else if(q==null)s=": Not greater than or equal to "+A.z(r)
else if(q>r)s=": Not in inclusive range "+A.z(r)+".."+A.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.z(r)
return s}}
A.lx.prototype={
gf0(){return A.j(this.b)},
gei(){return"RangeError"},
geh(){if(A.j(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gu(a){return this.f}}
A.jt.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.mA.prototype={
t(a){return"UnimplementedError: "+this.a}}
A.hM.prototype={
t(a){return"Bad state: "+this.a}}
A.kU.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.lb(s)+"."}}
A.m_.prototype={
t(a){return"Out of Memory"},
gcg(){return null},
$iav:1}
A.jo.prototype={
t(a){return"Stack Overflow"},
gcg(){return null},
$iav:1}
A.wr.prototype={
t(a){return"Exception: "+this.a}}
A.B.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.L(e,0,75)+"..."
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
k=""}return g+l+B.c.L(e,i,j)+k+"\n"+B.c.a6(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.z(f)+")"):g}}
A.t.prototype={
dk(a,b){return A.Fy(this,A.v(this).i("t.E"),b)},
bB(a,b,c){var s=A.v(this)
return A.lN(this,s.U(c).i("1(t.E)").a(b),s.i("t.E"),c)},
dZ(a,b){var s=A.v(this)
return new A.F(this,s.i("l(t.E)").a(b),s.i("F<t.E>"))},
fl(a,b){return new A.ea(this,b.i("ea<0>"))},
q(a,b){var s
for(s=this.gA(this);s.m();)if(J.ab(s.gp(),b))return!0
return!1},
bb(a,b,c,d){var s,r
d.a(b)
A.v(this).U(d).i("1(1,t.E)").a(c)
for(s=this.gA(this),r=b;s.m();)r=c.$2(r,s.gp())
return r},
a8(a,b){var s
A.v(this).i("l(t.E)").a(b)
for(s=this.gA(this);s.m();)if(!b.$1(s.gp()))return!1
return!0},
a0(a,b){var s,r,q=this.gA(this)
if(!q.m())return""
s=J.cd(q.gp())
if(!q.m())return s
r=b.gN(b)
if(r){r=s
do r+=J.cd(q.gp())
while(q.m())}else{r=s
do r=r+A.z(b)+J.cd(q.gp())
while(q.m())}return r.charCodeAt(0)==0?r:r},
R(a,b){var s
A.v(this).i("l(t.E)").a(b)
for(s=this.gA(this);s.m();)if(b.$1(s.gp()))return!0
return!1},
cc(a,b){var s=A.v(this).i("t.E")
if(b)s=A.J(this,s)
else{s=A.J(this,s)
s.$flags=1
s=s}return s},
bN(a){return this.cc(0,!0)},
gu(a){var s,r=this.gA(this)
for(s=0;r.m();)++s
return s},
gN(a){return!this.gA(this).m()},
gab(a){return!this.gN(this)},
ga4(a){var s=this.gA(this)
if(!s.m())throw A.b(A.cV())
return s.gp()},
gbq(a){var s,r=this.gA(this)
if(!r.m())throw A.b(A.cV())
s=r.gp()
if(r.m())throw A.b(A.BR())
return s},
ba(a,b,c){var s,r=A.v(this)
r.i("l(t.E)").a(b)
r.i("t.E()?").a(c)
for(r=this.gA(this);r.m();){s=r.gp()
if(b.$1(s))return s}if(c!=null)return c.$0()
throw A.b(A.cV())},
az(a,b){return this.ba(0,b,null)},
ae(a,b){var s,r
A.me(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.b(A.rd(b,b-r,this,"index"))},
t(a){return A.Gq(this,"(",")")}}
A.O.prototype={
t(a){return"MapEntry("+A.z(this.a)+": "+A.z(this.b)+")"}}
A.aB.prototype={
gW(a){return A.L.prototype.gW.call(this,0)},
t(a){return"null"}}
A.L.prototype={$iL:1,
ad(a,b){return this===b},
gW(a){return A.j7(this)},
t(a){return"Instance of '"+A.m9(this)+"'"},
gai(a){return A.B7(this)},
toString(){return this.t(this)}}
A.nA.prototype={
t(a){return""},
$idu:1}
A.vk.prototype={
go0(){var s,r=this.b
if(r==null)r=$.tP.$0()
s=r-this.a
if($.Bi()===1e6)return s
return s*1000}}
A.bK.prototype={
gu(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iHp:1}
A.vH.prototype={
$2(a,b){var s,r,q,p
t.G.a(a)
A.x(b)
s=B.c.bK(b,"=")
if(s===-1){if(b!=="")a.k(0,A.Ap(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.L(b,0,s)
q=B.c.aT(b,s+1)
p=this.a
a.k(0,A.Ap(r,0,r.length,p,!0),A.Ap(q,0,q.length,p,!0))}return a},
$S:84}
A.vG.prototype={
$2(a,b){throw A.b(A.M("Illegal IPv6 address, "+a,this.a,b))},
$S:99}
A.k2.prototype={
ghI(){var s,r,q,p,o=this,n=o.w
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
gW(a){var s,r=this,q=r.y
if(q===$){s=B.c.gW(r.ghI())
r.y!==$&&A.o7()
r.y=s
q=s}return q},
gb2(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.CG(s==null?"":s)
r.z!==$&&A.o7()
q=r.z=new A.eP(s,t.hL)}return q},
gje(){return this.b},
geZ(){var s=this.c
if(s==null)return""
if(B.c.Y(s,"[")&&!B.c.aB(s,"v",1))return B.c.L(s,1,s.length-1)
return s},
gf5(){var s=this.d
return s==null?A.Da(this.a):s},
gf6(){var s=this.f
return s==null?"":s},
giC(){var s=this.r
return s==null?"":s},
giG(){return this.c!=null},
giI(){return this.f!=null},
giH(){return this.r!=null},
t(a){return this.ghI()},
ad(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.eP.b(b))if(p.a===b.gfs())if(p.c!=null===b.giG())if(p.b===b.gje())if(p.geZ()===b.geZ())if(p.gf5()===b.gf5())if(p.e===b.giW()){r=p.f
q=r==null
if(!q===b.giI()){if(q)r=""
if(r===b.gf6()){r=p.r
q=r==null
if(!q===b.giH()){s=q?"":r
s=s===b.giC()}}}}return s},
$imD:1,
gfs(){return this.a},
giW(){return this.e}}
A.vF.prototype={
gjd(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.c.dJ(s,"?",m)
q=s.length
if(r>=0){p=A.k3(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.n3("data","",n,n,A.k3(s,m,q,128,!1,!1),p,n)}return m},
t(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.nu.prototype={
giG(){return this.c>0},
giI(){return this.f<this.r},
giH(){return this.r<this.a.length},
gfs(){var s=this.w
return s==null?this.w=this.kR():s},
kR(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.Y(r.a,"http"))return"http"
if(q===5&&B.c.Y(r.a,"https"))return"https"
if(s&&B.c.Y(r.a,"file"))return"file"
if(q===7&&B.c.Y(r.a,"package"))return"package"
return B.c.L(r.a,0,q)},
gje(){var s=this.c,r=this.b+3
return s>r?B.c.L(this.a,r,s-1):""},
geZ(){var s=this.c
return s>0?B.c.L(this.a,s,this.d):""},
gf5(){var s,r=this
if(r.c>0&&r.d+1<r.e)return A.Eo(B.c.L(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.c.Y(r.a,"http"))return 80
if(s===5&&B.c.Y(r.a,"https"))return 443
return 0},
giW(){return B.c.L(this.a,this.e,this.f)},
gf6(){var s=this.f,r=this.r
return s<r?B.c.L(this.a,s+1,r):""},
giC(){var s=this.r,r=this.a
return s<r.length?B.c.aT(r,s+1):""},
gb2(){if(this.f>=this.r)return B.aX
return new A.eP(A.CG(this.gf6()),t.hL)},
gW(a){var s=this.x
return s==null?this.x=B.c.gW(this.a):s},
ad(a,b){if(b==null)return!1
if(this===b)return!0
return t.eP.b(b)&&this.a===b.t(0)},
t(a){return this.a},
$imD:1}
A.n3.prototype={}
A.th.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.zC.prototype={
$1(a){return this.a.ez(this.b.i("0/?").a(a))},
$S:23}
A.zD.prototype={
$1(a){if(a==null)return this.a.i5(new A.th(a===undefined))
return this.a.i5(a)},
$S:23}
A.yW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.DO(a))return a
s=this.a
a.toString
if(s.M(a))return s.h(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.h(A.b6(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.ek(!0,"isUtc",t.y)
return new A.fg(r,0,!0)}if(a instanceof RegExp)throw A.b(A.p("structured clone of RegExp",null))
if(a instanceof Promise)return A.ax(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.n(p,p)
s.k(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.d7(n),p=s.gA(n);p.m();)m.push(A.ig(p.gp()))
for(l=0;l<s.gu(n);++l){k=s.h(n,l)
if(!(l<m.length))return A.e(m,l)
j=m[l]
if(k!=null)o.k(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.k(0,a,o)
h=A.j(a.length)
for(s=J.aW(i),l=0;l<h;++l)o.push(this.$1(s.h(i,l)))
return o}return a},
$S:113}
A.nd.prototype={
b1(a){if(a<=0||a>4294967296)throw A.b(A.Cj(u.w+a))
return Math.random()*a>>>0},
aG(){return Math.random()},
$iA9:1}
A.eY.prototype={
ck(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.ah(a-s,k)
r=a>>>0
a=B.d.ah(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.ah(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.ah(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.ah(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.ah(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.ah(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bu()
l.bu()
l.bu()
l.bu()},
bu(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.ah(o-n+(q-p)+(m-r),4294967296)>>>0},
b1(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.b(A.Cj(u.w+a))
s=a-1
if((a&s)>>>0===0){p.bu()
return(p.a&s)>>>0}do{p.bu()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
aG(){var s,r=this
r.bu()
s=r.a
r.bu()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iA9:1}
A.l5.prototype={
C(){return"DiagnosticSeverity."+this.b}}
A.ep.prototype={
D(){var s=this
return A.E(["code",s.a,"severity",s.b.b,"stage",s.c,"relativePath",null,"nodePath",null,"message",s.f,"remediation",s.r],t.N,t.z)}}
A.v0.prototype={
$1(a){return B.c.bL(B.d.fh(A.j(a),16),8,"0")},
$S:121}
A.mG.prototype={}
A.t_.prototype={
pt(){var s,r,q,p,o=this
if(o.c)return
o.c=!0
for(s=o.b,r=A.C(s).i("bR<1>"),s=new A.bR(s,r),s=new A.ao(s,s.gu(0),r.i("ao<a0.E>")),q=o.a,r=r.i("a0.E");s.m();){p=s.d
q.aN(p==null?r.a(p):p)}}}
A.lQ.prototype={}
A.ta.prototype={}
A.t1.prototype={
dM(a0,a1){var s=0,r=A.aN(t.zo),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dM=A.aO(function(a3,a4){if(a3===1)return A.aK(a4,r)
for(;;)switch(s){case 0:b=a0.a
a=A.ED(b)
if(a.length!==0)throw A.b(A.M(B.a.bB(a,new A.t2(),t.N).a0(0,"; "),null,null))
m=b.e
l=m.length
if(l>4096)throw A.b(B.io)
k=t.N
j=A.a1(k)
for(i=0;h=m.length,i<h;m.length===l||(0,A.r)(m),++i)j.K(0,m[i].c.gan())
if(j.a>16384)throw A.b(B.ig)
p=A.n(k,t.uo)
l=a1.e,k=t.S,j=a0.b,i=0
case 3:if(!(i<m.length)){s=5
break}g=m[i].c.gan(),g=g.gA(g)
case 6:if(!g.m()){s=7
break}o=g.gp()
if(p.M(o)){s=6
break}s=8
return A.a7(j.$1(o),$async$dM)
case 8:f=a4
e=f.length
if(e>67108864)throw A.b(A.M("model package payload exceeds limit: "+A.z(o),null,null))
d=p
if(new A.an(d,A.v(d).i("an<2>")).bb(0,0,new A.t3(),k)+e>268435456)throw A.b(B.ir)
J.bd(p,o,new Uint8Array(A.S(f)))
if(l)try{e=J.b8(p,o)
e.toString
A.Eg(e)}catch(a2){b=A.am(a2)
if(b instanceof A.mc){n=b
throw A.b(A.M("model package payload is not valid QMSH: "+A.z(o)+" ("+n.a.b+")",null,null))}else throw a2}s=6
break
case 7:case 4:m.length===h||(0,A.r)(m),++i
s=3
break
case 5:if(A.C6(b,p)!==b.c)throw A.b(B.hq)
q=new A.mG(b,p)
s=1
break
case 1:return A.aL(q,r)}})
return A.aM($async$dM,r)}}
A.t2.prototype={
$1(a){return t.zU.a(a).f},
$S:27}
A.t3.prototype={
$2(a,b){return A.j(a)+t.uo.a(b).length},
$S:142}
A.t4.prototype={
B(){var s,r,q,p,o,n,m=this,l=A.d([],t.s),k=A.jc("^[a-z0-9]+(?:-[a-z0-9]+)*$")
if(!k.b.test(m.b))B.a.l(l,"assetId must be kebab-case")
k=A.jc("^[0-9a-f]{64}$")
if(!k.b.test(m.c))B.a.l(l,"packageHash must be lowercase SHA-256")
if(m.d.length===0)B.a.l(l,"sourceFormat is required")
k=m.e
if(k.length===0)B.a.l(l,"parts must be non-empty")
s=m.w
if(A.hw(s,A.C(s).c).a!==s.length)B.a.l(l,"lods must be unique")
if(!B.a.q(s,"LOD0"))B.a.l(l,"LOD0 is required")
s=m.x
r=s.length
if(r!==0)s=r!==6||B.a.R(s,new A.t7())
else s=!1
if(s)B.a.l(l,"combinedBounds must contain six finite values")
for(s=m.y.gO(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
if(q.length!==0){r=r.b
p=J.aW(r)
r=p.gu(r)!==16||p.R(r,new A.t8())}else r=!0
if(r)B.a.l(l,"socket "+q+" must contain sixteen finite transform values")}for(s=k.length,r=m.f,o=0;o<k.length;k.length===s||(0,A.r)(k),++o){n=k[o]
q=n.b
if(q<0||q>=r.length)B.a.l(l,"part material slot is outside materials")
q=n.c
if(q.gN(q))B.a.l(l,"part "+n.a+" must declare payload files")
for(q=q.gan(),q=q.gA(q),p="part "+n.a+" contains unsafe payload path";q.m();)if(!A.JB(q.gp()))B.a.l(l,p)}return l},
ja(a){var s,r,q,p=this,o=A.n(t.N,t.z)
o.k(0,"schema","pixeldart-model-package-v1")
o.k(0,"assetId",p.b)
if(a)o.k(0,"packageHash",p.c)
o.k(0,"sourceFormat",p.d)
s=p.e
r=A.C(s)
q=r.i("G<1,V<f,@>>")
s=A.J(new A.G(s,r.i("V<f,@>(1)").a(new A.t6()),q),q.i("a0.E"))
o.k(0,"parts",s)
o.k(0,"materials",p.f)
o.k(0,"textures",p.r)
o.k(0,"lods",p.w)
o.k(0,"combinedBounds",p.x)
o.k(0,"sockets",p.y)
o.k(0,"provenance",p.z)
return o},
D(){return this.ja(!0)}}
A.t5.prototype={
$2(a,b){return new A.O(J.cd(a),J.cd(b),t.q)},
$S:31}
A.t7.prototype={
$1(a){return!isFinite(A.az(a))},
$S:4}
A.t8.prototype={
$1(a){return!isFinite(A.az(a))},
$S:4}
A.t6.prototype={
$1(a){return t.aw.a(a).D()},
$S:71}
A.fs.prototype={
D(){return A.E(["id",this.a,"materialSlot",this.b,"lodFiles",this.c],t.N,t.z)},
gF(){return this.a}}
A.t9.prototype={
$2(a,b){return new A.O(J.cd(a),J.cd(b),t.q)},
$S:31}
A.yn.prototype={
$1(a){A.x(a)
return a.length!==0&&a!=="."&&a!==".."},
$S:3}
A.yG.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.yq.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.yE.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.zN.prototype={
$2(a,b){B.a.l(this.a,new A.ep(a,B.cS,"model-package",b,"rebuild the deterministic model package"))},
$S:35}
A.zO.prototype={
$2(a,b){B.a.l(this.a,new A.ep(a,B.cS,"model-package-payloads",b,"rebuild the package with only declared runtime payloads"))},
$S:35}
A.tZ.prototype={
B(){var s,r=this
if(B.a.R(A.d([r.d,r.e,r.f,r.r,r.w],t.t),new A.u_()))throw A.b(B.j6)
s=r.y
if(!isFinite(s)||s<1)throw A.b(B.hQ)}}
A.u_.prototype={
$1(a){return A.j(a)<=0},
$S:22}
A.fw.prototype={
C(){return"QualityProfileKind."+this.b}}
A.dZ.prototype={
B(){var s="installedFeatures",r=this.b,q=r.bJ(B.qu)
if(q.a!==0)throw A.b(A.a8(q,s,"contains unknown pipeline features"))
if(this.a===B.c_&&r.gab(r))throw A.b(A.a8(r,s,"safe profiles cannot install optional features"))}}
A.hi.prototype={
C(){return"CoordinatedTransitionState."+this.b}}
A.m6.prototype={}
A.kV.prototype={
cr(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a1.d)A.h(A.i("configuration coordinator is disposed"))
if(a1.c!=null)throw A.b(A.i("coordinated transition is already open"))
p=a1.a
if(p.e)A.h(A.i("configuration state is disposed"))
o=p.a
if(o==null)A.h(A.i("configuration state is not initialized"))
if(p.c!=null)A.h(A.i("a configuration transition is already open"))
a2.B()
n=A.j1(a2)
m=p.d
l=p.b
if(l==null)A.h(A.i("resource state is not initialized"))
k=a2.a
j=k.b
i=o.a
h=i.b
g=j.bJ(h)
f=h.bJ(j)
j=n.a
h=l.a
e=j.bJ(h)
d=h.bJ(j)
c=i.a!==k.a||o.b!==a2.b||o.c!==a2.c||o.d!==a2.d||o.e!==a2.e||o.f!==a2.f||o.r!==a2.r
b=o.w!==a2.w||o.x!==a2.x||o.y!==a2.y
k=t.N
a=new A.pw(m,a2,n,new A.pv(A.fD(g,k),A.fD(f,k),A.fD(e,k),A.fD(d,k),c,b,o.z!==a2.z),B.cQ)
p.c=a
s=a
try{r=a1.b.dR(s.c)
q=new A.m6(s,r,B.bg)
a1.c=q
return q}catch(a0){p.hU(s)
throw a0}},
cs(a){var s,r,q,p=this
if(p.d)A.h(A.i("configuration coordinator is disposed"))
p.h4(a)
s=p.a
r=a.a
if(s.e)A.h(A.i("configuration state is disposed"))
s.h5(r)
q=s.d
if(r.a!==q)A.h(A.i("configuration transition is stale"))
s.a=r.b
s.b=r.c
s.d=q+1
r.e=B.fQ
s.c=null
p.b.cs(a.b)
a.c=B.fY
p.c=null},
X(){var s=this
if(s.d)return
if(s.c!=null)throw A.b(A.i("cannot dispose an open coordinated transition"))
s.a.X()
s.b.X()
s.d=!0},
h4(a){if(this.c!==a||a.c!==B.bg)throw A.b(A.i("coordinated transition is not open"))}}
A.hd.prototype={
C(){return"ConfigurationTransactionState."+this.b}}
A.pv.prototype={}
A.pw.prototype={}
A.kW.prototype={
hU(a){if(this.e)A.h(A.i("configuration state is disposed"))
this.h5(a)
a.e=B.fR
this.c=null},
X(){var s=this
if(s.e)return
if(s.c!=null)throw A.b(A.i("cannot dispose with an open configuration transition"))
s.e=!0
s.b=s.a=null},
h5(a){if(this.c!==a||a.e!==B.cQ)throw A.b(A.i("configuration transition is not open"))}}
A.mz.prototype={
C(){return"ToneMappingMode."+this.b}}
A.m5.prototype={
B(){var s,r,q,p,o,n,m,l,k,j=this,i=null
for(s=j.r,r=j.w,q=j.x,p=j.y,o=j.z,n=A.E(["exposure",j.a,"bloomStrength",j.b,"ssaoStrength",j.c,"depthOfFieldStrength",j.d,"vignette",j.e,"grain",j.f,"rainIntensity",s,"surfaceWetness",r,"surfaceSnowCoverage",q,"surfaceDissolution",p,"rainWindowVisibility",o,"ditherStrength",j.Q,"colorGradeStrength",j.as,"affineWarpStrength",j.at,"vertexSnapGrid",j.ax,"vhsChromaWeight",j.ch,"vhsTrackingWeight",j.CW,"vhsNoiseWeight",j.cx,"vhsHeadSwitchWeight",j.cy,"vhsDropoutWeight",j.db,"vhsGhostWeight",j.dx],t.N,t.i),n=new A.N(n,A.v(n).i("N<1,2>")).gA(0);n.m();){m=n.d
l=m.a
k=m.b
if(!isFinite(k)||k<0)throw A.b(A.p("PostProcessState."+l+" must be >= 0: "+A.z(k),i))}n=j.ay
if(n<1||n>8)throw A.b(A.p("PostProcessState.quantizationBits must be in [1, 8]: "+n,i))
if(s>1)throw A.b(A.p("PostProcessState.rainIntensity must be in [0, 1]: "+A.z(s),i))
if(r>1)throw A.b(A.p("PostProcessState.surfaceWetness must be in [0, 1]: "+A.z(r),i))
if(q>1)throw A.b(A.p("PostProcessState.surfaceSnowCoverage must be in [0, 1]: "+A.z(q),i))
if(p>1)throw A.b(A.p("PostProcessState.surfaceDissolution must be in [0, 1]: "+A.z(p),i))
if(o>1)throw A.b(A.p("PostProcessState.rainWindowVisibility must be in [0, 1]: "+A.z(o),i))}}
A.ir.prototype={
giP(){var s,r=this,q=r.x
if(q===$){s=r.b.iO()
r.x!==$&&A.o7()
r.x=s
q=s}return q},
B(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
if(!g.gV(0))throw A.b(A.p("CameraView.eye must be finite: "+g.t(0),h))
g=i.e
if(!g.gV(0)||g.gbl()<1e-12)throw A.b(A.p("CameraView.forward must be finite and nonzero: "+g.t(0),h))
g=i.f
if(isFinite(g)){s=i.r
s=!isFinite(s)||g<=0||s<=g}else s=!0
if(s)throw A.b(A.p("CameraView requires 0 < near < far, got "+A.z(g)+"/"+i.r,h))
g=i.w
if(!isFinite(g)||g<=0)throw A.b(A.p("CameraView.aspect must be finite and > 0: "+A.z(g),h))
g=i.a
if(!g.gV(0)||!i.b.gV(0)||!i.c.gV(0))throw A.b(A.p("CameraView matrices must be finite",h))
for(s=i.c.a,r=s.length,g=i.b.a6(0,g).a,q=g.length,p=0,o=-1,n=0;n<16;++n){if(!(n<r))return A.e(s,n)
m=s[n]
if(!(n<q))return A.e(g,n)
l=g[n]
k=Math.abs(m-l)/(1+Math.abs(l))
if(k>p){o=n
p=k}}if(p>0.0001){m=B.b.pT(p,2)
l=B.d.ah(o,4)
j=B.d.P(o,4)
if(!(o>=0&&o<r))return A.e(s,o)
s=s[o]
if(!(o<q))return A.e(g,o)
throw A.b(A.p("CameraView.viewProjection must equal projection * view. Worst relative mismatch "+m+" at column "+l+" row "+j+" (got "+A.z(s)+", expected "+A.z(g[o])+"). Prefer CameraView.look/lookAt/fromMatrices, which derive it.",h))}}}
A.ve.prototype={}
A.lj.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.a.gV(0)||!h.b.gV(0)||!h.fx.gV(0)||!h.r.gV(0)||!h.dx.gV(0))throw A.b(A.p("FrameEnvironment colors must be finite",g))
s=h.k4
if(s!=null){r=!0
if(B.c.aS(s.a).length!==0)if(s.c.gV(0))if(s.d.gV(0))if(s.e.gV(0))if(isFinite(0.08))if(isFinite(0.0025))if(isFinite(0))if(isFinite(1)){q=s.z
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
if(r)throw A.b(A.p("FrameEnvironment requires fogEnd >= fogStart, got "+A.z(s)+"/"+A.z(h.d),g))
s=h.fy
if(!isFinite(s)||s<0)throw A.b(A.p("FrameEnvironment.ambientIntensity must be >= 0: "+A.z(s),g))
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
k=A.a1(s)
for(r=h.k2,q=r.length,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){j=r[o]
j.B()
p=j.a
if(!k.l(0,p))throw A.b(A.p("FrameEnvironment.volumetricSources contains duplicate id: "+p,g))}r=h.w
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
if(r)throw A.b(A.p("invalid volumetric medium controls",g))
i=A.a1(s)
for(s=h.k3,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){j=s[o]
q=j.a
p=!0
if(B.c.aS(q).length!==0){m=j.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){m=j.c
if(isFinite(m)){p=j.d
p=!isFinite(p)||m<=0||p<0||p>1}}}if(p)A.h(A.p("thermal source is invalid",g))
if(!i.l(0,q))throw A.b(A.p("FrameEnvironment.thermalSources contains duplicate id: "+q,g))}}}
A.lk.prototype={}
A.e_.prototype={
ad(a,b){if(b==null)return!1
return J.fa(b)===A.B7(this)&&b instanceof A.e_&&this.a===b.a&&this.b===b.b},
gW(a){return A.cY(A.B7(this),this.a,this.b,B.h,B.h,B.h)}}
A.bQ.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MeshHandle(#"+this.a+"."+this.b+s+")"}}
A.bA.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"TextureHandle(#"+this.a+"."+this.b+s+")"}}
A.cg.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"MaterialHandle(#"+this.a+"."+this.b+s+")"}}
A.m0.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"PipelineHandle(#"+this.a+"."+this.b+s+")"}}
A.cT.prototype={
t(a){var s=this.c
s=s==null?"":' "'+s+'"'
return"InstanceId(#"+this.a+"."+this.b+s+")"}}
A.fm.prototype={
C(){return"HandleRejection."+this.b}}
A.lv.prototype={
t(a){return"HandleException("+this.a.b+", "+this.b.t(0)+")"}}
A.b1.prototype={
gV(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ad(a,b){if(b==null)return!1
return b instanceof A.b1&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gW(a){return A.cY(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"LinearColor("+A.z(this.a)+", "+A.z(this.b)+", "+A.z(this.c)+")"}}
A.l7.prototype={
B(){var s=this.a
if(!s.gV(0)||s.gbl()<1e-12)throw A.b(A.p("DirectionalLight.direction must be finite and nonzero: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<0)throw A.b(A.p("DirectionalLight.intensity must be >= 0: "+A.z(s),null))}}
A.m4.prototype={
gF(){return this.a}}
A.bT.prototype={
gF(){return this.a}}
A.zE.prototype={
$2(a,b){var s,r=t.mn
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:83}
A.h5.prototype={
C(){return"AlphaMode."+this.b}}
A.iS.prototype={
C(){return"MaterialMapColorSpace."+this.b}}
A.c2.prototype={
B(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.length===0)throw A.b(A.p("MaterialDefinition.key must not be empty",k))
s=l.w
if(!isFinite(s)||s<0)throw A.b(A.p("MaterialDefinition.emissiveStrength must be >= 0: "+A.z(s),k))
s=l.z
if(!isFinite(s)||s<0)throw A.b(A.p("MaterialDefinition.normalStrength must be >= 0: "+A.z(s),k))
A.lO("roughness",l.at)
A.lO("metallic",l.ax)
A.lO("occlusionStrength",1)
A.lO("clearcoatStrength",l.ch)
A.lO("clearcoatRoughness",l.CW)
if(!isFinite(0))throw A.b(A.p("MaterialDefinition.lightmapIntensity must be >= 0: 0",k))
for(s=l.db,r=l.dx,q=[new A.a6("uvScaleU",s),new A.a6("uvScaleV",r),new A.a6("uvOffsetU",0),new A.a6("uvOffsetV",0),new A.a6("tintR",l.d),new A.a6("tintG",l.e),new A.a6("tintB",l.f)],p=0;p<7;++p){o=q[p]
n=o.a
m=o.b
if(!isFinite(m))throw A.b(A.p("MaterialDefinition."+n+" must be finite: "+A.z(m),k))}if(s===0||r===0)throw A.b(A.p("MaterialDefinition uv scale must not be zero",k))
s=l.fy
if(!isFinite(s)||s<=0||s>1)throw A.b(A.p("MaterialDefinition.alphaCutoff must be in (0, 1]: "+A.z(s),k))}}
A.d1.prototype={
C(){return"VertexAttributeKind."+this.b}}
A.bi.prototype={}
A.jv.prototype={
B(){var s,r,q,p,o,n,m=this,l=null,k='VertexLayoutDescriptor "',j=m.b
if(j<=0)throw A.b(A.p("VertexLayoutDescriptor.strideFloats must be > 0",l))
for(s=m.c,r=s.length,q=0;q<r;++q){p=s[q]
o=p.c
if(o<=0)throw A.b(A.p(k+m.a+'": attribute '+p.a.t(0)+" must have a positive floatCount",l))
n=p.b
o=n+o
if(o>j)throw A.b(A.p(k+m.a+'": attribute '+p.a.t(0)+" range ["+n+", "+o+") exceeds stride "+j,l))}j=A.C(s)
r=j.i("l(1)").a(new A.vK())
for(s=B.a.gA(s),j=new A.R(s,r,j.i("R<1>"));j.m();)if(s.gp().c!==4)throw A.b(A.p(k+m.a+'": tangent4 must contain 4 floats',l))}}
A.vK.prototype={
$1(a){return t.qY.a(a).a===B.cn},
$S:26}
A.c3.prototype={
B(){var s,r,q,p,o,n=this,m=n.a
m.B()
s=n.b.length
m=m.b
if(B.d.P(s,m)!==0)throw A.b(A.p("MeshData.vertices length "+s+" is not a multiple of stride "+m,null))
n.mj()
r=n.c
if(r!=null){q=B.d.bf(s,m)
for(m=A.Gy(r),s=m.length,p=0;p<s;++p){o=m[p]
if(o>=q)throw A.b(A.p("MeshData index "+o+" out of range for "+q+" vertices",null))}}m=n.d
s=m.a
if(s.gV(0)&&m.b.gV(0)){m=m.b
m=s.a<=m.a&&s.b<=m.b&&s.c<=m.c}else m=!1
if(!m)throw A.b(A.p("MeshData.localBounds must be a valid AABB",null))},
mj(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=this.a,a4=a3.c,a5=A.C(a4),a6=a5.i("l(1)")
a5=a5.i("F<1>")
s=new A.F(a4,a6.a(new A.rT()),a5)
if(!s.gA(0).m())return
r=new A.F(a4,a6.a(new A.rU()),a5)
if(r.gu(0)!==1)throw A.b(A.p("surface-v2 tangent data requires one normal slot",a2))
q=s.gbq(0)
p=r.gbq(0)
for(a4=this.b,a5=a4.length,a3=a3.b,a6=B.d.bf(a5,a3),o=t.n,n=p.b,m=q.b,l=0;l<a6;++l){k=l*a3
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
if(!B.a.a8(A.d([i,g,f,e,d,c,b],o),new A.rV()))throw A.b(A.p("surface-v2 tangent basis must be finite",a2))
if(a<1e-8||a0<1e-8)throw A.b(A.p("surface-v2 tangent basis must be non-zero",a2))
a1=(i*e+g*d+f*c)/Math.sqrt(a*a0)
if(Math.abs(a1)>0.05)throw A.b(A.p("surface-v2 tangent must be orthogonal to its normal: "+A.z(a1),a2))
if(Math.abs(Math.abs(b)-1)>0.05)throw A.b(A.p("surface-v2 tangent handedness must be -1 or +1: "+A.z(b),a2))}}}
A.rT.prototype={
$1(a){return t.qY.a(a).a===B.cn},
$S:26}
A.rU.prototype={
$1(a){return t.qY.a(a).a===B.eF},
$S:26}
A.rV.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.l1.prototype={$iHa:1}
A.tj.prototype={
B(){var s=this.a,r=s.a
if(!r.q(0,"sceneColor")||!r.q(0,"present"))throw A.b(A.p("resource plan must contain sceneColor and present",null))
if(s.R(0,new A.tk()))throw A.b(A.p("resource plan contains an empty resource ID",null))
if(this.b!==r.q(0,"vhsOutput"))throw A.b(A.p("resource history does not match vhsOutput ownership",null))}}
A.tk.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.hI.prototype={
C(){return"ResourceAssemblyState."+this.b}}
A.m7.prototype={}
A.jh.prototype={
iM(a){var s=this
if(s.d)A.h(A.i("resource assembler is disposed"))
if(s.a!=null)throw A.b(A.i("resource assembler is initialized"))
a.B()
s.a=a
s.c=1},
dR(a){var s=this
if(s.d)A.h(A.i("resource assembler is disposed"))
if(s.a==null)throw A.b(A.i("resource assembler is not initialized"))
if(s.b!=null)throw A.b(A.i("resource assembly is already open"))
a.B()
return s.b=new A.m7(s.c,a,B.c7)},
cs(a){var s,r=this
if(r.d)A.h(A.i("resource assembler is disposed"))
r.hz(a)
s=r.c
if(a.a!==s)throw A.b(A.i("resource assembly is stale"))
r.a=a.b
r.c=s+1
a.c=B.q7
r.b=null},
fc(a){if(this.d)A.h(A.i("resource assembler is disposed"))
this.hz(a)
a.c=B.q8
this.b=null},
X(){var s=this
if(s.d)return
if(s.b!=null)throw A.b(A.i("cannot dispose an open resource assembly"))
s.d=!0
s.a=null},
hz(a){if(this.b!==a||a.c!==B.c7)throw A.b(A.i("resource assembly is not prepared"))}}
A.hk.prototype={
C(){return"DrawMode."+this.b}}
A.kN.prototype={
C(){return"BlendMode."+this.b}}
A.aQ.prototype={}
A.mw.prototype={
t(a){var s=this
return"SurfaceMetrics(css "+s.a+"x"+s.b+", pixels "+s.c+"x"+s.d+", dpr 1, visible: true)"},
B(){var s=this
if(s.a<0||s.b<0)throw A.b(A.p("SurfaceMetrics css size must be >= 0",null))
if(s.c<0||s.d<0)throw A.b(A.p("SurfaceMetrics pixel size must be >= 0",null))
if(!isFinite(1))throw A.b(A.p("SurfaceMetrics.devicePixelRatio must be finite and > 0: 1",null))}}
A.it.prototype={
C(){return"ColorEncoding."+this.b}}
A.hj.prototype={
C(){return"DiagnosticLevel."+this.b}}
A.je.prototype={
B(){var s,r=this,q=null
r.a.B()
s=r.b
if(s<=0||r.c<=0)throw A.b(A.p("RendererConfiguration internal resolution must be > 0: "+s+"x"+r.c,q))
s=r.d
if(s<=0)throw A.b(A.p("RendererConfiguration.sampleCount must be > 0: "+s,q))
if(r.f>0&&r.r<=0)throw A.b(A.p("RendererConfiguration.shadowMapSize must be > 0 when casting: "+r.r,q))
s=r.w
if(s<=0)throw A.b(A.p("RendererConfiguration.materialTableCapacity must be > 0: "+s,q))}}
A.fA.prototype={
C(){return"RendererState."+this.b}}
A.b4.prototype={}
A.qa.prototype={
iV(a){var s=this.z.h(0,a)
return s==null?B.d4:s},
t(a){var s=this
return"FrameStats(#"+s.a+" draws="+s.b+" tris="+s.c+" culled="+s.d+" gpu="+s.r+"B)"}}
A.fr.prototype={
C(){return"MaterialResidencyStatus."+this.b}}
A.dm.prototype={}
A.ch.prototype={}
A.rQ.prototype={
d5(a){var s=this.a,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.rR(a)),r.i("F<1>")).gu(0)}}
A.rR.prototype={
$1(a){return t.wl.a(a).b===this.a},
$S:85}
A.rO.prototype={
dS(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t.CB.a(a0)
s=t.N
r=A.n(s,t.jt)
q=A.d([],t.r8)
p=A.n(s,t.G)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,A.r)(a0),++n){m=a0[n]
l=m.a
if(l.length===0)A.h(A.p("material residency key is empty",null))
k=m.b
k.B()
if(r.M(l))throw A.b(A.p("material residency keys must be unique: "+l,null))
r.k(0,l,m)
j=A.n(s,s)
for(k=A.Ea(k),i=k.$ti,k=new A.d4(k.a(),i.i("d4<1>")),h=l+":",g=m.c,i=i.c;k.m();){f=k.b
if(f==null)f=i.a(f)
e=f.a
d=f.b
c=h+e
j.k(0,e,c)
B.a.l(q,new A.c9(c,d,g))}p.k(0,l,j)}s=A.n(s,t.bp)
for(o=this.a.dS(q).a,l=o.length,n=0;n<l;++n){b=o[n]
s.k(0,b.a.a,b.b)}o=r.$ti.i("an<2>")
a=A.J(new A.an(r,o),o.i("t.E"))
B.a.Z(a,new A.rP())
o=A.d([],t.p0)
for(l=a.length,n=0;n<a.length;a.length===l||(0,A.r)(a),++n){m=a[n]
k=p.h(0,m.a)
k.toString
o.push(this.lY(m,k,s))}return new A.rQ(A.ad(o,t.wl))},
lY(a,b,c){var s,r,q,p,o,n,m
t.G.a(b)
t.qH.a(c)
s=t.N
r=t.bp
q=A.n(s,r)
for(p=new A.N(b,A.v(b).i("N<1,2>")).gA(0);p.m();){o=p.d
n=o.a
m=c.h(0,o.b)
m.toString
q.k(0,n,m)}p=A.Gw(new A.an(q,q.$ti.i("an<2>")))
A.aZ(q,s,r)
return new A.ch(a,p)}}
A.rP.prototype={
$2(a,b){var s,r=t.jt
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:86}
A.lP.prototype={
pG(a){return this.a.bz(a)}}
A.rS.prototype={
$3(a,b,c){return new A.cg(A.j(a),A.j(b),A.as(c))},
$S:98}
A.mC.prototype={}
A.rW.prototype={
aU(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=u.k,b=this.a,a=a1.b,a0=A.CU(b,new A.lq(a.byteLength,B.dj,B.jr))
if(b.b!==B.j)A.h(A.i(c))
s=A.c(a0.a)
r=b.a
q=v.G
r.bindBuffer(A.j(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
r.bufferSubData(A.j(q.WebGL2RenderingContext.ARRAY_BUFFER),0,a)
p=A.cF(b)
A.br(b,p)
if(b.b!==B.j)A.h(A.i(c))
r.bindBuffer(A.j(q.WebGL2RenderingContext.ARRAY_BUFFER),s)
o=a1.a
n=o.b
m=n*4
l=A.a1(t.S)
for(k=o.c,j=k.length,i=0;i<j;++i){h=k[i]
g=A.E7(h.a)
if(!l.l(0,g))continue
f=A.IX(o,g,h)
if(b.b!==B.j)A.h(A.i(c))
r.vertexAttribPointer.apply(r,[g,f,A.j(q.WebGL2RenderingContext.FLOAT),!1,m,h.b*4])
if(b.b!==B.j)A.h(A.i(c))
r.enableVertexAttribArray(g)}e=a1.c
o=e==null
if(!o){d=A.CU(b,new A.lq(A.C5(e),B.dj,B.di))
if(b.b!==B.j)A.h(A.i(c))
r.bindBuffer(A.j(q.WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER),A.c(d.a))
A.HO(b,d,t.J.a(e))}else d=null
b=o?null:e.length
if(b==null)b=0
return new A.mC(a0,d,p,b,B.d.bf(a.length,n),t.tu.b(e))},
cP(a){var s=this.c.h(0,a.a)
if(s==null)throw A.b(A.eG(B.aV,a))
this.b.bz(a)
return s},
aN(a){var s,r,q=this.c.aa(0,a.a)
if(q!=null){s=this.a.a
s.deleteVertexArray(A.c(q.c.a))
s.deleteBuffer(A.c(q.a.a))
r=q.b
if(r!=null)s.deleteBuffer(A.c(r.a))}this.b.aN(a)},
f8(){var s,r,q,p
for(s=this.b.cI(),r=s.$ti,s=new A.d4(s.a(),r.i("d4<1>")),q=this.c,r=r.c;s.m();){p=s.b
if(p==null)p=r.a(p)
q.k(0,p.a.a,this.aU(p.b))}},
gcJ(){return this.b.cI().bb(0,0,new A.rY(),t.S)}}
A.rX.prototype={
$3(a,b,c){return new A.bQ(A.j(a),A.j(b),A.as(c))},
$S:216}
A.rY.prototype={
$2(a,b){var s,r
A.j(a)
s=t.k0.a(b).b
r=s.b.byteLength
s=s.c
s=s==null?0:A.C5(s)
return a+r+s},
$S:103}
A.iq.prototype={}
A.rZ.prototype={
nG(a){var s,r,q,p,o=A.KK(a),n="1:"+o,m=this.b,l=m.h(0,n)
if(l!=null){s=""+l.b+":"+l.a
r=m.h(0,s)
if(r!==l)A.h(A.i("ModelCache.acquire received a stale entry"))
m=this.c
q=m.h(0,s)
q.toString
m.k(0,s,q+1)
r.toString
return r}p=new A.iq(o,1,A.KQ(A.Eg(a)))
m.k(0,n,p)
this.c.k(0,n,1)
return p},
aN(a){var s,r,q=this.b,p=""+a.b+":"+a.a
if(q.h(0,p)!==a)throw A.b(A.i("ModelCache.release received a stale entry"))
s=this.c
r=s.h(0,p)
r.toString
if(r<=1){s.aa(0,p)
q.aa(0,p)}else s.k(0,p,r-1)}}
A.t0.prototype={
D(){var s=this
return A.E(["schema","pixeldart-model-package-diagnostic-v1","assetId",s.a,"activeLod",s.b,"attached",s.c,"itemCount",s.d,"meshCount",s.e,"cacheReferenceCount",s.f],t.N,t.K)}}
A.hz.prototype={
jH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(c.Q)A.h(A.i("model package binding is disposed"))
if(c.x==null)throw A.b(A.i("model package is not attached"))
for(s=c.z,r=s.length,q=c.d,p=q.a,o=p.$ti,n=o.c,m=p.b,o=o.y[1],l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=q.oA(k).b
i=j.a
h=j.c
g=new A.aQ(i,j.b,h,a,j.e,j.f,j.r,j.w,j.x,j.y)
h.B()
n.a(i)
p.a2(i)
i=i.a
if(!(i>=0&&i<m.length))return A.e(m,i)
f=m[i].c
i=(f==null?o.a(f):f).d
h=h.af()
i=i.gap()
e=A.C(i)
d=A.b3(new A.G(i,e.i("A(1)").a(h.gau()),e.i("G<1,A>")))
e=q.b
h=e.$ti
h.c.a(k)
h.y[1].a(g)
e.a2(k)
e=e.b
h=k.a
if(!(h>=0&&h<e.length))return A.e(e,h)
e[h].sb7(g)
q.c.k(0,k,new A.aT(k,g,d))}},
X(){var s,r,q=this
if(q.Q)return
q.Q=!0
s=q.z
r=q.y
q.hm(s,r,q.x)
B.a.S(s)
B.a.S(r)
q.x=null},
ky(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a4.a,a6=A.GA(a4.b,a9,a5),a7=A.d([],t.d),a8=A.d([],t.s3)
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
throw A.b(a5)}e=B.a.h(a6.b,s).c
d=r.a
if(g.x)A.h(A.i("resource library is disposed"))
c=g.a
e.B()
b=c.b.av(e,a5+d+":"+a9)
c.c.k(0,b.a,c.aU(e))
g.f.l(0,b)
p=b
J.em(a7,p)
e=p
c=new A.aQ(e,q,m,l,B.C,B.z,!0,!0,0,null)
m.B()
i.a(e)
k.a2(e)
e=e.a
if(!(e>=0&&e<h.length))return A.e(h,e)
a=h[e].c
e=(a==null?j.a(a):a).d
d=m.af()
e=e.gap()
a0=A.C(e)
a1=A.b3(new A.G(e,a0.i("A(1)").a(d.gau()),a0.i("G<1,A>")))
a2=n.b.b9(c)
n.c.k(0,a2,new A.aT(a2,c,a1))
J.em(a8,a2)
e=s
if(typeof e!=="number")return e.T()
s=e+1}return new A.jT(a6,a8,a7)}catch(a3){a4.hm(a8,a7,a6)
throw a3}},
hm(a,b,c){var s,r,q,p,o
t.xp.a(a)
t.qr.a(b)
for(s=A.C(a).i("bR<1>"),r=new A.bR(a,s),r=new A.ao(r,r.gu(0),s.i("ao<a0.E>")),q=this.d,p=q.b,q=q.c,s=s.i("a0.E");r.m();){o=r.d
if(o==null)o=s.a(o)
p.aN(o)
q.aa(0,o)}for(s=A.C(b).i("bR<1>"),r=new A.bR(b,s),r=new A.ao(r,r.gu(0),s.i("ao<a0.E>")),q=this.c,s=s.i("a0.E");r.m();){p=r.d
if(p==null)p=s.a(p)
if(q.x)A.h(A.i("resource library is disposed"))
q.a.aN(p)
q.f.aa(0,p)}if(c!=null)c.pt()}}
A.d_.prototype={
C(){return"QmeshRejection."+this.b}}
A.mc.prototype={
t(a){return"QmeshDecodeException("+this.a.b+": "+this.b+")"}}
A.yX.prototype={
$1(a){return!isFinite(A.az(a))},
$S:4}
A.c9.prototype={}
A.e4.prototype={
C(){return"TextureResidencyStatus."+this.b}}
A.ck.prototype={}
A.vv.prototype={
dg(a){var s=this.a,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.vw(a)),r.i("F<1>")).gu(0)}}
A.vw.prototype={
$1(a){return t.k_.a(a).b===this.a},
$S:109}
A.vt.prototype={
dS(a){var s,r,q,p,o,n,m,l,k,j,i
t.x6.a(a)
s=A.n(t.N,t.jP)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
o=p.a
if(o.length===0)A.h(A.p("TextureResidencyRequest.key must not be empty",null))
n=p.b
if(n.a<0)A.h(A.a8(n,"handle","must be valid"))
if(s.M(o))throw A.b(A.p("TextureResidencyRequest keys must be unique: "+o,null))
s.k(0,o,p)}r=s.$ti.i("an<2>")
m=A.J(new A.an(s,r),r.i("t.E"))
B.a.Z(m,new A.vu())
r=t.Aj
l=A.a1(r)
k=A.n(r,t.bp)
j=A.d([],t.fa)
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.r)(m),++q){p=m[q]
o=p.b
if(l.l(0,o)){i=this.lL(o)
k.k(0,o,i)}else{o=k.h(0,o)
o.toString
i=o}B.a.l(j,new A.ck(p,i))}r=l.a
return new A.vv(A.ad(j,t.k_),r)},
lL(a){var s,r,q
try{s=this.a
r=s.d
r===$&&A.u()
if(s.dh(a,r)===s.d)return B.ez
this.b.k(0,a,!0)
return B.ey}catch(q){if(A.am(q) instanceof A.lv){s=this.b.h(0,a)===!0?B.eB:B.eA
return s}else throw q}}}
A.vu.prototype={
$2(a,b){var s,r=t.jP
r.a(a)
r.a(b)
s=B.d.I(b.c,a.c)
return s===0?B.c.I(a.a,b.a):s},
$S:111}
A.dz.prototype={}
A.my.prototype={
b5(a){var s=this.a,r=A.Af(s,B.jw)
A.Ag(s,r,0,a)
return r},
q_(a,b){var s,r,q,p=this,o=p.b,n=o.bz(a),m=A.J(n.b,t.Fx)
B.a.k(m,0,b)
s=n.a
o.fi(a,new A.dz(s,m,n.c))
o=p.c
r=a.a
q=o.h(0,r)
if(q==null){q=A.Af(p.a,s)
o.k(0,r,q)}A.Ag(p.a,q,0,b)},
oc(a){var s,r=this.b,q=r.bz(a),p=q.a
if(!p.d)return
s=this.c.h(0,a.a)
if(s==null)throw A.b(A.i("TextureStore.finalizeMips: no pixels uploaded yet for "+a.t(0)))
A.CV(this.a,s)
r.fi(a,new A.dz(p,q.b,!0))},
ow(a){return B.a.a8(this.b.bz(a).b,new A.vy())},
dh(a,b){var s
this.b.bz(a)
s=this.c.h(0,a.a)
return s==null?b:s},
pC(a){var s
if(a==null){s=this.d
s===$&&A.u()
return s}s=this.d
s===$&&A.u()
return this.dh(a,s)},
pL(a){var s
if(a==null){s=this.e
s===$&&A.u()
return s}s=this.e
s===$&&A.u()
return this.dh(a,s)},
pN(a){var s=this.f
s===$&&A.u()
return s},
pE(a){var s=this.r
s===$&&A.u()
return s},
pJ(a){var s=this.w
s===$&&A.u()
return s},
X(){var s,r,q,p,o,n=this
for(s=n.c,r=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>")),q=n.a,p=q.a,o=t.jm;r.m();)p.deleteTexture(o.a(r.d.a).a)
s.S(0)
s=n.d
s===$&&A.u()
A.mT(q,s)
s=n.e
s===$&&A.u()
A.mT(q,s)
s=n.f
s===$&&A.u()
A.mT(q,s)
s=n.r
s===$&&A.u()
A.mT(q,s)
s=n.w
s===$&&A.u()
A.mT(q,s)},
f8(){var s,r,q,p,o,n,m,l,k,j,i=this
i.d=i.b5($.Bh())
i.e=i.b5($.Be())
i.f=i.b5($.Bf())
i.r=i.b5($.Bd())
i.w=i.b5($.Bg())
for(s=i.b.cI(),r=s.$ti,s=new A.d4(s.a(),r.i("d4<1>")),q=i.c,p=i.a,r=r.c;s.m();){o=s.b
if(o==null)o=r.a(o)
n=o.a
m=o.b
o=m.b
if(B.a.a8(o,new A.vA()))continue
l=A.Af(p,m.a)
for(k=0;k<o.length;++k){j=o[k]
if(j!=null)A.Ag(p,l,k,j)}if(m.c)A.CV(p,l)
q.k(0,n.a,l)}},
gcJ(){return this.b.cI().bb(0,0,new A.vz(),t.S)}}
A.vx.prototype={
$3(a,b,c){return new A.bA(A.j(a),A.j(b),A.as(c))},
$S:119}
A.vy.prototype={
$1(a){return t.Fx.a(a)!=null},
$S:52}
A.vA.prototype={
$1(a){return t.Fx.a(a)==null},
$S:52}
A.vz.prototype={
$2(a,b){var s
A.j(a)
s=t.ut.a(b).b.a
return a+s.a*s.b*s.c*4},
$S:127}
A.bq.prototype={
C(){return"SolarPhase."+this.b}}
A.vi.prototype={
B(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="cloudCover01",c="precipitation01",b="relativeHumidity01",a=null
for(s=e.b,r=e.c,q=e.d,p=e.e,o=e.f,n=e.r,m=e.w,l=e.y,k=e.z,j=[new A.a6("timeHours",e.a),new A.a6("solarNoonHours",s),new A.a6("latitudeRadians",r),new A.a6("solarDeclinationRadians",q),new A.a6(d,p),new A.a6(c,o),new A.a6("aerosolTurbidity",n),new A.a6(b,m),new A.a6("solarIntensity",e.x),new A.a6("baseFogDensity",l),new A.a6("fogHeightFalloff",k)],i=0;i<11;++i){h=j[i]
g=h.a
if(!isFinite(h.b))throw A.b(A.p(g+" must be finite",a))}if(s>=24)throw A.b(A.p("solarNoonHours must be in [0, 24)",a))
if(r<-1.5707963267948966||r>1.5707963267948966)throw A.b(A.p("latitudeRadians must be in [-pi/2, pi/2]",a))
if(q<-1.5707963267948966||q>1.5707963267948966)throw A.b(A.p("solarDeclinationRadians must be in [-pi/2, pi/2]",a))
for(s=[new A.a6(d,p),new A.a6(c,o),new A.a6(b,m)],i=0;i<3;++i){r=s[i]
g=r.a
f=r.b
if(f<0||f>1)throw A.b(A.p(g+" must be in [0, 1]",a))}if(n<1||l<0||k<0)throw A.b(A.p("solar attenuation inputs are out of bounds",a))}}
A.hP.prototype={
gF(){return this.a}}
A.co.prototype={
B(){var s,r,q,p=this,o=p.a,n=!0
if(o.length!==0)if(p.b.gV(0)){s=p.c
if(s.gV(0)){r=p.d
if(isFinite(r)){q=p.e
if(isFinite(q)){n=p.f
n=!isFinite(n)||r<0||s.a<0||s.b<0||s.c<0||q<=0||n<=0}}}}if(n)throw A.b(A.p("invalid volumetric source "+o,null))},
gF(){return this.a}}
A.zF.prototype={
$2(a,b){var s,r=t.bG
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.c.I(a.b.a,b.b.a):s},
$S:128}
A.vY.prototype={}
A.dT.prototype={
goq(){return this.b.length}}
A.lf.prototype={
mM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h
t.Q.a(a)
s=new A.u2(A.d([],t.pq),A.a1(t.N))
for(r=this.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)r[p].aF(s,b)
o=s.mL(a,!1)
if(o.b.length!==0)return new A.lg(o,B.lv)
q=o.a
n=A.C(q)
m=new A.G(q,n.i("f(1)").a(new A.q3()),n.i("G<1,f>")).be(0)
l=A.d([],t.u)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){k=r[p]
for(n=k.aD(d),j=n.length,i=0;i<n.length;n.length===j||(0,A.r)(n),++i){h=n[i]
if(!m.q(0,h.gH().a))throw A.b(A.i('RenderFeature "'+k.gF()+'" created a pass "'+h.gH().a+'" that it never declared into the graph'))
B.a.l(l,h)}}B.a.Z(l,new A.q4(o))
return new A.lg(o,l)},
c_(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].X()}}
A.q3.prototype={
$1(a){return t.A.a(a).a},
$S:130}
A.q4.prototype={
$2(a,b){var s=t.wZ
s.a(a)
s.a(b)
s=this.a.a
return B.d.I(B.a.f_(s,new A.q1(a)),B.a.f_(s,new A.q2(b)))},
$S:134}
A.q1.prototype={
$1(a){return t.A.a(a).a===this.a.gH().a},
$S:12}
A.q2.prototype={
$1(a){return t.A.a(a).a===this.a.gH().a},
$S:12}
A.lg.prototype={}
A.fj.prototype={
C(){return"FrameQueueState."+this.b}}
A.ll.prototype={
ci(a){var s,r,q=this
if(q.b!==B.aw)throw A.b(A.i("FrameQueue.submit called outside an active frame"))
a.c.B()
s=q.c
r=q.a
if(s<r.length)B.a.k(r,s,a)
else B.a.l(r,a);++q.c},
$iH2:1}
A.q9.prototype={
mI(a){if(a.length===0)throw A.b(A.a8(a,"passId",null))
this.b=a
this.a.c7(a,A.Ei())},
jW(){var s,r,q,p,o=t.z
o=A.n(o,o)
for(s=this.a,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0);s.m();){r=s.d
q=r.a
p=r.b
o.k(0,q,new A.b4(p.a,p.b,p.d))}return A.aZ(o,t.N,t.pH)},
bT(a,b){var s,r=this.b
if(r==null)throw A.b(A.i("draw recorded outside an active render pass"))
if(b<1)throw A.b(A.p("draw count and instance count must be positive",null))
s=this.a.h(0,r);++s.a
s.d+=b
s.b=s.b+B.d.ah(a,3)*b}}
A.hU.prototype={}
A.ay.prototype={
gca(){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.tn()),r.i("F<1>"))},
gcT(){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.to()),r.i("F<1>"))},
t(a){return"PassDeclaration("+this.a+" @ "+this.b.t(0)+")"},
gF(){return this.a}}
A.tn.prototype={
$1(a){var s=t.j2.a(a).b
return s===B.i||s===B.V},
$S:28}
A.to.prototype={
$1(a){return t.j2.a(a).b===B.k},
$S:28}
A.cx.prototype={
C(){return"GraphValidationFailureKind."+this.b}}
A.bG.prototype={
t(a){return"GraphValidationFailure("+this.a.b+" in "+this.b+": "+this.c+")"}}
A.jg.prototype={
C(){return"ResourceFormat."+this.b}}
A.df.prototype={
C(){return"GraphStage."+this.b}}
A.aS.prototype={
iR(){var s=this
return new A.aS(s.a,s.b,s.c,s.d,s.e,s.f+1)},
ad(a,b){var s=this
if(b==null)return!1
return b instanceof A.aS&&s.a===b.a&&s.b===b.b&&s.c===b.c&&s.d===b.d&&s.e===b.e&&s.f===b.f},
gW(a){var s=this
return A.cY(s.a,s.b,s.c,s.d,s.e,s.f)},
t(a){var s=this,r=s.b.t(0),q=s.e
q=q>1?" x"+q:""
return"ResourceRef("+s.a+"#"+s.f+", "+r+", "+s.c+"x"+s.d+q+")"}}
A.hH.prototype={
C(){return"ResourceAccess."+this.b}}
A.Q.prototype={}
A.iu.prototype={
gF(){return this.a}}
A.ma.prototype={
aH(a){var s,r,q,p,o,n,m=this
a.B()
s=null
try{r=t.a
s=A.HR(m.a,a.c,r.a(a.d.ga9().bN(0)),r.a(a.f),a.b)}catch(q){if(A.am(q) instanceof A.jl){++m.e
throw q}else throw q}r=a.a
p=new A.iu(r,s)
o=m.b
n=o.h(0,r)
o.k(0,r,p);++m.d
if(n!=null)m.a.a.deleteProgram(A.c(n.b.a))
return p},
c_(){var s=this.b
this.l_(new A.an(s,A.v(s).i("an<2>")))
s.S(0)},
l_(a){var s,r
t.FA.a(a)
for(s=a.a,s=new A.ae(s,s.r,s.e,a.$ti.i("ae<1>")),r=this.a.a;s.m();)r.deleteProgram(A.c(s.d.b.a))}}
A.bn.prototype={
B(){var s,r,q,p,o,n,m=null,l=this.a
if(l.length===0)throw A.b(A.p("ProgramSource.id must not be empty",m))
s=t.S
r=A.a1(s)
for(q=this.d.gO(),q=q.gA(q);q.m();){p=q.gp()
o=p.b
if(o<0)throw A.b(A.p('ProgramSource "'+l+'": attribute "'+p.a+'" has a negative location',m))
if(!r.l(0,o))throw A.b(A.p('ProgramSource "'+l+'": duplicate attribute location '+o,m))}n=A.a1(s)
for(s=this.e.gO(),s=s.gA(s);s.m();){q=s.gp()
p=q.b
if(p<0)throw A.b(A.p('ProgramSource "'+l+'": sampler "'+q.a+'" has a negative unit',m))
if(!n.l(0,p))throw A.b(A.p('ProgramSource "'+l+'": duplicate sampler unit '+p,m))}},
gF(){return this.a}}
A.u0.prototype={}
A.bh.prototype={
ar(){var s=this
return A.BH(B.fe,s.f,B.aK,B.ar,!0,!0,!0,!0,s.r,B.aO,B.aP,s.d,s.e,!0,!1,!1)},
gF(){return this.a}}
A.u2.prototype={
mL(a,b){var s=this.mi(t.Q.a(a),!1),r=this.a,q=A.C(r)
return new A.u1(A.ad(new A.F(r,q.i("l(1)").a(new A.u7()),q.i("F<1>")),t.A),s)},
mi(a,b){var s,r,q,p,o,n,m=this
t.Q.a(a)
s=A.d([],t.ka)
r=m.a
q=A.C(r)
p=q.i("F<1>")
o=A.J(new A.F(r,q.i("l(1)").a(new A.u6()),p),p.i("t.E"))
m.kE(o,a,s)
m.kI(o,s)
m.kK(o,s)
m.kH(o,!1,s)
n=m.kM(o,s)
m.kJ(o,n,s)
m.kL(o,s)
m.kG(o,n,s)
m.kF(o,s)
return s},
kE(a,b,c){var s,r,q,p
t.R.a(a)
t.Q.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=B.ai.bJ(b)
if(p.a!==0)B.a.l(c,new A.bG(B.jI,q.a,"missing capabilities: "+p.a0(0,", ")))}},
kI(a,b){var s,r,q,p,o,n,m
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(q.f)continue
for(p=q.gca(),o=J.P(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gp().a
if(m.e>1)B.a.l(b,new A.bG(B.jD,n,"reads multisampled resource "+m.t(0)+" directly; resolve before sampling"))}}},
kK(a,b){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(b)
for(s=A.C(a),r=s.i("l(1)").a(new A.u5()),q=B.a.gA(a),s=new A.R(q,r,s.i("R<1>"));s.m();){r=q.gp()
p=r.gca()
o=A.J(p,p.$ti.i("t.E"))
p=r.gcT()
n=A.J(p,p.$ti.i("t.E"))
if(o.length!==1||n.length!==1){B.a.l(b,new A.bG(B.bo,r.a,"a resolve must read exactly one source and write exactly one destination"))
continue}m=B.a.gbq(o).a
l=B.a.gbq(n).a
if(m.e<=1||l.e>1)B.a.l(b,new A.bG(B.bo,r.a,"resolve requires a multisampled source and single-sample destination"))
if(m.b!==l.b||m.c!==l.c||m.d!==l.d)B.a.l(b,new A.bG(B.bo,r.a,"resolve source and destination must match format and extent"))}},
kH(a,b,c){var s,r,q,p,o,n,m,l
t.R.a(a)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.c,o=p.length,n=q.a,m=0;m<p.length;p.length===o||(0,A.r)(p),++m){l=p[m]
if(l.b===B.V)B.a.l(c,new A.bG(B.jG,n,"history read of "+l.a.a+" with no valid previous frame"))}}},
kM(a,b){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.b.a(b)
s=A.n(t.N,t.A)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
for(o=p.gcT(),n=J.P(o.a),o=new A.R(n,o.b,o.$ti.i("R<1>")),m=p.a;o.m();){l=n.gp().a
k=l.a+"#"+l.f
j=s.h(0,k)
if(j!=null){B.a.l(b,new A.bG(B.jC,m,l.t(0)+" already written by "+j.a))
continue}s.k(0,k,p)}}return s},
kJ(a,b,c){var s,r,q,p,o,n,m
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=0;s<a.length;++s){r=a[s]
for(q=r.gca(),p=J.P(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>")),o=r.a;q.m();){n=p.gp()
if(n.b===B.V)continue
n=n.a
m=b.h(0,n.a+"#"+n.f)
if(m==null){B.a.l(c,new A.bG(B.dn,o,"reads "+n.t(0)+" but no pass writes that version"))
continue}if(B.a.bK(a,m)>s)B.a.l(c,new A.bG(B.dn,o,"reads "+n.t(0)+" before writer "+m.a+" runs"))}}},
kL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gca(),o=J.P(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.V)continue
for(l=q.gcT(),k=J.P(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>")),m=m.a,j=m.a,i=m.f;l.m();){h=k.gp().a
if(j===h.a&&i===h.f)B.a.l(b,new A.bG(B.jF,n,"reads and writes "+m.t(0)+" at the same version; declare a ping-pong version bump"))}}}},
kG(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.R.a(a)
t.ap.a(b)
t.b.a(c)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
for(p=q.gca(),o=J.P(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=q.a;p.m();){m=o.gp()
if(m.b===B.V)continue
l=m.a
k=b.h(0,l.a+"#"+l.f)
if(k==null)continue
j=k.gcT().az(0,new A.u4(m)).a
if(!(j.b===l.b&&j.c===l.c&&j.d===l.d&&j.e===l.e))B.a.l(c,new A.bG(B.jE,n,"reads "+l.t(0)+" but writer "+k.a+" produced "+j.t(0)))}}},
kF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.R.a(a)
t.b.a(b)
s=t.S
r=A.n(t.N,s)
for(q=0;p=a.length,q<p;++q)for(p=a[q].gcT(),o=J.P(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>"));p.m();){n=o.gp().a
r.k(0,n.a+"#"+n.f,q)}m=J.rm(p,t.oG)
for(l=0;l<p;++l)m[l]=A.a1(s)
for(q=0;s=a.length,q<s;++q)for(s=a[q].gca(),p=J.P(s.a),s=new A.R(p,s.b,s.$ti.i("R<1>"));s.m();){o=p.gp()
if(o.b===B.V)continue
o=o.a
k=r.h(0,o.a+"#"+o.f)
if(k!=null&&k!==q){if(k>>>0!==k||k>=m.length)return A.e(m,k)
m[k].l(0,q)}}p=t.y
j=A.dj(s,!1,!1,p)
s=a.length
i=A.dj(s,!1,!1,p)
h=new A.u3(j,i,m)
for(q=0;q<a.length;++q){if(!(q<s))return A.e(i,q)
if(!i[q]&&h.$1(q)){if(!(q<a.length))return A.e(a,q)
B.a.l(b,new A.bG(B.jH,a[q].a,"participates in a resource dependency cycle"))}}}}
A.u7.prototype={
$1(a){t.A.a(a)
return A.A7()},
$S:12}
A.u6.prototype={
$1(a){t.A.a(a)
return A.A7()},
$S:12}
A.u5.prototype={
$1(a){return t.A.a(a).f},
$S:12}
A.u4.prototype={
$1(a){var s=t.j2.a(a).a,r=this.a.a
return s.a===r.a&&s.f===r.f},
$S:28}
A.u3.prototype={
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
r=A.eW(r,r.r,A.v(r).c)
q=r.$ti.c
while(r.m()){p=r.d
if(o.$1(p==null?q.a(p):p))return!0}B.a.k(n,a,!1)
B.a.k(s,a,!0)
return!1},
$S:22}
A.u1.prototype={}
A.aT.prototype={$icB:1,
gF(){return this.a},
gH(){return this.b},
gfn(){return this.c}}
A.jd.prototype={
eu(a){var s,r,q,p=a.c
p.B()
s=this.a.bz(a.a)
p=p.af()
r=s.d.gap()
q=A.C(r)
return A.b3(new A.G(r,q.i("A(1)").a(p.gau()),q.i("G<1,A>")))},
hW(a){var s=this.eu(a),r=this.b.b9(a)
this.c.k(0,r,new A.aT(r,a,s))
return r},
pZ(a,b){var s=this.eu(b)
this.b.fi(a,b)
this.c.k(0,a,new A.aT(a,b,s))},
oA(a){var s,r=this.c.h(0,a)
if(r!=null)return r
s=this.b.bz(a)
return new A.aT(a,s,this.eu(s))},
$iH5:1}
A.u8.prototype={
$3(a,b,c){return new A.cT(A.j(a),A.j(b),A.as(c))},
$S:145}
A.mh.prototype={
ghJ(){var s=this.d
return s===$?this.d=new A.vt(this.c,A.n(t.Aj,t.y)):s},
bp(a,b){var s,r
if(this.x)A.h(A.i("resource library is disposed"))
s=this.a
a.B()
r=s.b.av(a,b)
s.c.k(0,r.a,s.aU(a))
this.f.l(0,r)
return r},
pu(a){if(this.x)A.h(A.i("resource library is disposed"))
this.a.aN(a)
this.f.aa(0,a)},
j5(a,b,c,d,e,f,g){var s,r
if(this.x)A.h(A.i("resource library is disposed"))
if(f>0)s=d<=0
else s=!0
if(s)A.h(A.p("TextureStore.declare dimensions/layers must be > 0",null))
if(!isFinite(a)||a<1||a>16)A.h(A.p("TextureStore.declare anisotropy must be in [1, 16]: "+a,null))
r=this.c.b.av(new A.dz(new A.ls(f,d,1,!0,e,B.bm,g,a),A.dj(1,null,!1,t.Fx),!1),b)
this.w.l(0,r)
return r},
dU(a,b,c,d,e,f){return this.j5(a,b,c,d,e,f,B.dl)},
X(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.x)return
s=i.w
r=A.J(s,A.v(s).c)
q=r.length
p=i.c
o=p.c
n=p.a.a
m=t.jm
l=0
for(;l<r.length;r.length===q||(0,A.r)(r),++l){k=r[l]
j=o.aa(0,k.a)
if(j!=null)n.deleteTexture(m.a(j.a).a)
p.b.aN(k)}r=i.r
q=A.J(r,A.v(r).c)
o=q.length
n=i.b.a
l=0
for(;l<q.length;q.length===o||(0,A.r)(q),++l)n.aN(q[l])
q=i.f
o=A.J(q,A.v(q).c)
n=o.length
m=i.a
l=0
for(;l<o.length;o.length===n||(0,A.r)(o),++l)m.aN(o[l])
s.S(0)
r.S(0)
q.S(0)
p.X()
i.x=!0},
$iH7:1}
A.ws.prototype={}
A.nB.prototype={$icB:1,
gF(){return this.a},
gH(){return this.b},
gfn(){return this.c}}
A.y8.prototype={
$1(a){var s=this.a.w.a.cP(a),r=s.b!=null,q=r?s.d:s.e
return new A.jf(s.c,r,q,s.f)},
$S:146}
A.y9.prototype={
$2$fallback(a,b){var s=this.a.a
if(s.q(0,a))return this.b.x.gp().iS(a)
if(b!=null&&s.q(0,b))return this.b.x.gp().iS(b)
throw A.b(A.i("resource is not in configured graph: "+a))},
$1(a){return this.$2$fallback(a,null)},
$S:149}
A.y7.prototype={
$0(){return this.a.$1("shadowMap")},
$S:5}
A.y0.prototype={
$0(){var s=this.a.at,r=s==null?null:s.b.k1
return r==null||r.length===0?null:B.a.ga4(r)},
$S:162}
A.y1.prototype={
$0(){var s,r,q=this.a.at
if(q==null)return B.bE
s=q.b.k1
r=s.length===0?null:B.a.ga4(s)
return A.Le(s,3,q.a.d,r)},
$S:170}
A.y6.prototype={
$0(){return this.a.$1("sceneDepth")},
$S:5}
A.xW.prototype={
$0(){return this.a.at.a},
$S:191}
A.xY.prototype={
$0(){return this.a.$2$fallback("ssaoRaw","sceneColor")},
$S:5}
A.xX.prototype={
$0(){return this.a.$2$fallback("ssaoBlurred","sceneColor")},
$S:5}
A.y5.prototype={
$0(){var s=this.b.d>1?"sceneColor#1":"sceneColor"
return this.a.$1(s)},
$S:5}
A.xU.prototype={
$0(){return this.a.$2$fallback("bloomBlurH","sceneColor")},
$S:5}
A.xV.prototype={
$0(){return this.a.$2$fallback("bloomBlurV","sceneColor")},
$S:5}
A.y2.prototype={
$0(){return this.a.$2$fallback("dofBlurH","sceneColor")},
$S:5}
A.y3.prototype={
$0(){return this.a.$2$fallback("dofBlurV","sceneColor")},
$S:5}
A.y4.prototype={
$0(){var s=this.a.w.c.d
s===$&&A.u()
return s},
$S:5}
A.y_.prototype={
$0(){return this.a.$2$fallback("vhsOutput","sceneColor")},
$S:5}
A.xZ.prototype={
$0(){return this.a.at.w},
$S:195}
A.yb.prototype={
$0(){return this.a},
$S:197}
A.yc.prototype={
$0(){var s,r,q=this.a.b.k4,p=q==null?null:q.b
if(p==null||!this.b.w.c.ow(p))return null
s=this.b.w.c
r=s.d
r===$&&A.u()
return s.dh(p,r)},
$S:209}
A.x8.prototype={}
A.nn.prototype={$iH4:1}
A.na.prototype={$iG4:1}
A.uj.prototype={
gaq(){var s=this.w
return s==null?A.h(A.i("renderer is not initialized")):s},
iN(a,b){var s,r,q,p,o,n,m=this
if(m.e!==B.c5)throw A.b(A.i("renderer can only be initialized once"))
a.B()
b.B()
s=m.a
if(s.b===B.a7)throw A.b(A.i("renderer device is context lost"))
m.e=B.q6
try{m.r=s.j3()
r=m.b
if(r.d)A.h(A.i("configuration coordinator is disposed"))
q=A.j1(a)
p=r.a
if(p.e)A.h(A.i("configuration state is disposed"))
if(p.a!=null)A.h(A.i("configuration state is already initialized"))
a.B()
p.a=a
p.b=A.j1(a)
p.d=1
r.b.iM(q)
r=A.Gx()
m.w=new A.mh(A.Gz(s),r,A.Hr(s),A.a1(t.kc),A.a1(t.pw),A.a1(t.Aj))
r=new A.jh()
p=new A.qx(s,r)
q=A.j1(a)
o=p.ed(q,a)
r.iM(q)
p.c=new A.hC(new A.m7(0,q,B.c7),o,B.ax)
m.x=p
m.y=new A.ma(s,A.n(t.N,t.CH))
m.as=a
A.Dz(m)
m.e=B.c6}catch(n){s=m.y
if(s!=null)s.c_()
s=m.x
if(s!=null)s.X()
s=m.w
if(s!=null)s.X()
m.w=null
m.b.X()
m.b=new A.kV(new A.kW(),new A.jh())
m.e=B.c5
throw n}return A.BL(t.H)},
mG(a,b){var s,r,q,p,o=this
o.lS()
o.cm()
r=B.a.q(o.d,a)
if(!r)throw A.b(A.p("world was not created by this renderer",null))
if(o.at!=null)throw A.b(A.i("renderer.beginFrame called twice without end/abort"))
b.a.B()
b.b.B()
b.c.B()
r=b.w
if(!isFinite(r))A.h(A.p("FrameInput.timeSeconds must be finite: "+A.z(r),null))
o.at=b
o.ax=a
q=o.c
if(q.b===B.aw)A.h(A.i("FrameQueue.beginFrame called twice without end/abort"))
q.b=B.aw
q.c=0
B.a.S(q.a)
s=q
try{r=o.r
if((r==null?A.h(A.i("renderer is not initialized")):r).z)o.b$=o.a.mH()
return s}catch(p){if(q.b!==B.aw)A.h(A.i("FrameQueue.abortFrame called without an active frame"))
q.c=0
q.b=B.jb
o.fM()
o.ax=o.at=null
throw p}},
o3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a1.cm()
s=a1.at
r=a1.ax
if(s==null||r==null)throw A.b(A.i("renderer.endFrame called without an active frame"))
m=a1.c
if(m.b!==B.aw)A.h(A.i("FrameQueue.endFrame called without an active frame"))
l=m.a
k=A.hO(l,0,A.ek(m.c,"count",t.S),A.C(l).c).cc(0,!1)
m.b=B.ja
q=k
try{p=A.J8(a1,r,s,q)
o=p.a.jW()
m=o.gO().dZ(0,new A.uk())
l=m.$ti
n=new A.cX(m,l.i("b4(1)").a(new A.ul()),l.i("cX<1,b4>")).bb(0,B.d4,new A.um(),t.pH)
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
return new A.qa(l,m,j,i,h,f+g,c+a+a0,d+b+e,o)}finally{a1.la(s.e)
a1.ax=a1.at=null}},
lS(){var s,r,q,p=this
if(p.e!==B.ei)return
if(p.a.b===B.a7)throw A.b(A.i("renderer context remains lost"))
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
s.c=new A.hC(q.a,s.ed(A.j1(r),r),B.ax)
s=p.y
s.c=null
s.b.S(0)
A.Dz(p)
p.e=B.c6},
cm(){var s=this,r=s.e
if(r!==B.c6)throw A.b(A.i("renderer is not ready: "+r.b))
if(s.a.b===B.a7){s.l0()
s.e=B.ei
throw A.b(A.i("renderer context lost"))}}}
A.uk.prototype={
$1(a){return B.c.q(t.h6.a(a).a.toLowerCase(),"world")},
$S:59}
A.ul.prototype={
$1(a){return t.h6.a(a).b},
$S:60}
A.um.prototype={
$2(a,b){var s=t.pH
s.a(a)
s.a(b)
return new A.b4(a.a+b.a,a.b+b.b,a.d+b.d)},
$S:61}
A.nk.prototype={}
A.wE.prototype={
la(a){var s,r,q,p=this,o=p.b$
p.b$=null
if(o==null)return
try{s=p.a
if(s.b!==B.j)A.h(A.i(u.k))
r=s.hL(o)
if(r.b)A.h(A.i("WebGl2Device: timer already ended"))
s.a.endQuery(35007)
r.b=!0
B.a.l(p.a$,new A.nk(o))}catch(q){p.ef(o)}},
fM(){var s=this.b$
this.b$=null
if(s!=null)this.ef(s)},
l0(){var s,r,q
this.fM()
s=this.a$
r=J.zY(s.slice(0),A.C(s).c)
B.a.S(s)
for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q)this.ef(r[q].b)},
ef(a){var s,r
try{s=this.a
s.a.deleteQuery(s.hL(a).a)}catch(r){}}}
A.nr.prototype={}
A.jn.prototype={
C(){return"ShadowCasterLod."+this.b}}
A.c4.prototype={
I(a,b){var s,r=this
t.BB.a(b)
s=B.d.I(r.a.a,b.a.a)
if(s!==0)return s
s=B.d.I(r.b.a,b.b.a)
if(s!==0)return s
s=B.d.I(r.c.a,b.c.a)
if(s!==0)return s
return B.d.I(r.d,b.d)},
$ibv:1}
A.c_.prototype={
I(a,b){var s
t.z3.a(b)
s=B.b.I(b.a,this.a)
if(s!==0)return s
return B.d.I(this.b,b.b)},
$ibv:1}
A.b9.prototype={}
A.zJ.prototype={
$2(a,b){var s=t.E0
return s.a(a).a.I(0,s.a(b).a)},
$S:62}
A.zK.prototype={
$1(a){return t.E0.a(a).b},
$S:63}
A.zH.prototype={
$2(a,b){var s=t.EH
return s.a(a).a.I(0,s.a(b).a)},
$S:64}
A.zI.prototype={
$1(a){return t.EH.a(a).b},
$S:65}
A.pM.prototype={}
A.pL.prototype={}
A.h4.prototype={
gap(){var s,r,q,p=this.a,o=p.a,n=p.b
p=p.c
s=this.b
r=s.a
q=s.b
s=s.c
return A.d([new A.A(o,n,p),new A.A(r,n,p),new A.A(o,q,p),new A.A(r,q,p),new A.A(o,n,s),new A.A(r,n,s),new A.A(o,q,s),new A.A(r,q,s)],t.k)},
t(a){return"Aabb("+this.a.t(0)+", "+this.b.t(0)+")"}}
A.fu.prototype={}
A.hn.prototype={
C(){return"FrustumTest."+this.b}}
A.qb.prototype={
j9(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(h*f+e*c+i*a+a0<0)return B.bh
g=g?o:r
f=d?m:p
d=b?n:q
if(h*g+e*f+i*d+a0<0)l=!0}return l?B.jc:B.jd}}
A.qc.prototype={
$4(a,b,c,d){var s=new A.A(a,b,c),r=new A.fu(s,d),q=Math.sqrt(s.gbl())
return q<1e-9?r:new A.fu(s.a6(0,1/q),d/q)},
$S:66}
A.dk.prototype={
a6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=new Float32Array(16)
for(s=this.a,r=s.length,q=b.a,p=q.length,o=0;o<4;++o)for(n=o*4,m=0;m<4;++m){for(l=0,k=0;k<4;++k){j=k*4+m
if(!(j<r))return A.e(s,j)
j=s[j]
i=n+k
if(!(i<p))return A.e(q,i)
l+=j*q[i]}j=n+m
if(!(j<16))return A.e(h,j)
h[j]=l}return new A.dk(h)},
jb(a){var s,r,q,p,o,n,m,l,k,j,i,h
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
return h===0||h===1?new A.A(k,j,i):new A.A(k/h,j/h,i/h)},
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
iO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=J.rm(4,t.cE)
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
e=f}}if(!isFinite(g)||g<1e-12)throw A.b(A.i("Mat4.inverse: singular matrix"))
if(e!==h){if(!(e>=0&&e<4))return A.e(a1,e)
a1[h]=a1[e]
a1[e]=s}s=a1[h]
if(!(h<s.length))return A.e(s,h)
c=s[h]
for(b=0;b<8;++b){if(!(b<s.length))return A.e(s,b)
r=s[b]
s.$flags&2&&A.aY(s)
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
s.$flags&2&&A.aY(s)
s[b]=r-a*q}}}a0=new Float32Array(16)
for(p=0;p<4;++p)for(h=0;h<4;++h){s=h*4+p
r=a1[p]
q=4+h
if(!(q<r.length))return A.e(r,q)
q=r[q]
if(!(s<16))return A.e(a0,s)
a0[s]=q}return new A.dk(a0)},
gV(a){return B.n.a8(this.a,new A.rM())},
t(a){return"Mat4("+A.z(this.a)+")"}}
A.rM.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.md.prototype={
t(a){var s=this
return"Quat("+A.z(s.a)+", "+A.z(s.b)+", "+A.z(s.c)+", "+A.z(s.d)+")"}}
A.e5.prototype={
B(){var s=this.a
if(!s.gV(0))throw A.b(A.p("Transform.translation must be finite: "+s.t(0),null))
s=this.b
if(!(isFinite(s.a)&&isFinite(s.b)&&isFinite(s.c)&&isFinite(s.d)))throw A.b(A.p("Transform.rotation must be finite: "+s.t(0),null))
s=this.c
if(!isFinite(s)||s<=0)throw A.b(A.p("Transform.scale must be finite and positive: "+A.z(s),null))},
af(){var s,r,q,p,o,n,m,l,k,j,i,h=this.b,g=h.a,f=g*g,e=h.b,d=e*e,c=h.c,b=c*c,a=g*e,a0=g*c,a1=e*c
h=h.d
s=h*g
r=h*e
q=h*c
c=t.n
h=A.C2(A.d([1-2*(d+b),2*(a+q),2*(a0-r),0,2*(a-q),1-2*(f+b),2*(a1+s),0,2*(a0+r),2*(a1-s),1-2*(f+d),0,0,0,0,1],c)).a
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
return A.C2(A.d([g*p,o*p,n*p,0,m*p,l*p,k*p,0,j*p,i*p,h[10]*p,0,e.a,e.b,e.c,1],c))},
t(a){return"Transform("+this.a.t(0)+", "+this.b.t(0)+", scale="+A.z(this.c)+")"}}
A.A.prototype={
T(a,b){return new A.A(this.a+b.a,this.b+b.b,this.c+b.c)},
a_(a,b){return new A.A(this.a-b.a,this.b-b.b,this.c-b.c)},
a6(a,b){return new A.A(this.a*b,this.b*b,this.c*b)},
bj(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b8(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.A(s*r-q*p,q*o-n*r,n*p-s*o)},
gbl(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
gu(a){return Math.sqrt(this.gbl())},
gV(a){return isFinite(this.a)&&isFinite(this.b)&&isFinite(this.c)},
ga5(){var s=this,r=Math.sqrt(s.gbl())
return r<1e-9?B.w:new A.A(s.a/r,s.b/r,s.c/r)},
ad(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gW(a){return A.cY(this.a,this.b,this.c,B.h,B.h,B.h)},
t(a){return"Vec3("+A.z(this.a)+", "+A.z(this.b)+", "+A.z(this.c)+")"}}
A.im.prototype={
C(){return"AtmosphericParticleAnchor."+this.b}}
A.oy.prototype={
B(){if(this.a<0)throw A.b(A.p("atmospheric particle counts must be >= 0",null))},
go_(){return B.d.n(this.a,0,this.b)}}
A.oB.prototype={}
A.oz.prototype={}
A.h7.prototype={}
A.h6.prototype={
B(){var s,r,q,p,o,n,m,l=this,k=null
if(l.a.a<0||l.b.a<0)throw A.b(A.p("AtmosphericParticleField requires live resources",k))
s=l.e
r=A.d([new A.a6("origin",l.d),new A.a6("halfExtents",s),new A.a6("initialVelocity",l.f),new A.a6("acceleration",l.r)],t.c2)
r.push(new A.a6("terminalVelocity",l.w))
q=r.length
p=0
for(;p<q;++p){o=r[p]
n=o.a
m=o.b
if(!(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)))throw A.b(A.p("AtmosphericParticleField."+n+" must be finite",k))}if(s.a<0||s.b<0||s.c<0)throw A.b(A.p("AtmosphericParticleField.halfExtents must be >= 0",k))
s=l.y
if(!isFinite(s)||s<=0)throw A.b(A.p("AtmosphericParticleField.lifetimeSeconds must be finite and > 0",k))
if(l.z<0)throw A.b(A.p("AtmosphericParticleField.particleCount must be >= 0",k))
s=l.x
if(!isFinite(s)||s<0)throw A.b(A.p("AtmosphericParticleField.dragCoefficient must be finite and >= 0",k))
if(s<=0)throw A.b(A.p("AtmosphericParticleField terminalVelocity requires dragCoefficient > 0",k))
s=l.as
if(!isFinite(s)||s<=0)throw A.b(A.p("AtmosphericParticleField.particleScale must be finite and > 0",k))},
ce(a,b){var s,r,q,p,o,n=this,m=null
n.B()
s=n.z
if(b>=s)throw A.b(A.b6(b,0,s-1,"particleIndex",m))
r=n.y
q=B.b.P(a.w+n.d2(b,0)*r,r)
switch(n.c.a){case 0:s=B.w
break
case 1:s=a.a.d
break
default:s=m}p=n.e
o=s.T(0,n.d).T(0,new A.A((n.d2(b,1)*2-1)*p.a,(n.d2(b,2)*2-1)*p.b,(n.d2(b,3)*2-1)*p.c))
p=o.T(0,n.l1(q))
s=n.ml(q)
if(!isFinite(q)||q<0)A.h(A.p("atmospheric particle age must be finite and >= 0",m))
if(!o.gV(0)||!p.gV(0)||!s.gV(0))A.h(A.p("atmospheric particle kinematics must be finite",m))
return new A.h7(q,o,p,s)},
cj(a,b){return this.fI(a,b,new A.oA())},
fI(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
t.C3.a(c)
i.B()
for(s=i.z,r=i.as,q=i.cy,p=i.at,o=i.a,n=i.b,m=0,l=0;l<s;++l){k=i.ce(b,l)
if(!c.$1(k))continue
j=p?i.fR(k.d):B.ag
a.ci(new A.aQ(o,n,new A.e5(k.c,j,r),-1,B.at,B.z,!1,!1,l,q));++m}return m},
iE(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.B()
s=A.BK(a.a.c)
for(r=h.z,q=h.as*0.5,p=h.at,o=0,n=0;n<r;++n){m=h.ce(a,n)
if(p)h.fR(m.d)
l=m.c
k=l.a
j=l.b
i=l.c
if(s.j9(new A.h4(new A.A(k-q,j-q,i-q),new A.A(k+q,j+q,i+q)))!==B.bh)++o}q=r-o
if(r>=0)p=q<0
else p=!0
if(p)A.h(A.p("atmospheric visibility counts must be >= 0",null))
if(o+q!==r)A.h(A.i("atmospheric visibility counts do not reconcile: "+r+" != "+o+" + "+q))
return new A.oB(r,o,q)},
nM(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.B()
b.B()
s=i.z
r=b.a
q=b.b
if(s!==B.d.n(r,0,q))throw A.b(A.i("atmospheric field count "+s+" does not match budget effective count "+b.go_()))
p=i.iE(a)
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
return new A.oz(r,m,q,s,l,k,j)},
ml(a){var s=this.w,r=Math.exp(-this.x*a)
return s.T(0,this.f.a_(0,s).a6(0,r))},
l1(a){var s=this.w,r=this.x,q=Math.exp(-r*a)
return s.a6(0,a).T(0,this.f.a_(0,s).a6(0,(1-q)/r))},
fR(a){var s,r=a.ga5()
if(r.ad(0,B.w))return B.ag
s=B.b.n(B.a5.bj(r),-1,1)
if(s>0.999999)return B.ag
if(s<-0.999999)return A.fx(B.b2,3.141592653589793)
return A.fx(B.a5.b8(r),Math.acos(s))},
d2(a,b){return(((this.Q^a*73244475^b*668265261)&2147483647)*1103515245+12345&2147483647)/2147483647}}
A.oA.prototype={
$1(a){return!0},
$S:44}
A.li.prototype={}
A.q7.prototype={
B(){var s,r,q,p,o,n,m,l,k,j=this,i=!0
if(j.a.a>=0)if(j.b.a>=0){s=j.d
if(isFinite(s))if(!(s<=0)){i=j.e
i=!isFinite(i)||i<=0}}if(i)throw A.b(A.p("invalid flow particle field",null))
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
d=new A.A(g,e,j).ga5()
c=d.b
b=d.b8(Math.abs(c)>0.9?B.b2:B.E).ga5()
a=Math.sqrt(g*g+e*e+j*j)
for(a0=k.e,a1=k.f,a2=k.c,a3=a1^1327217884,a4=k.d,a5=b.a,a6=b.b,a7=b.c,a8=d.a*a2,c*=a2,a9=d.c*a2,b0=l*1e4,b1=0;b1<a0;++b1){b2=B.b.P(B.b.P(r+b4.hO(a1,b1),q)*a2,a)/a
b3=(b4.hO(a3,b1)*2-1)*a4
b5.ci(new A.aQ(p,o,new A.e5(new A.A(h+g*b2+a5*b3,f+e*b2+a6*b3,i+j*b2+a7*b3),b4.m0(new A.A(a8,c,a9)),n),-1,B.at,B.z,!1,!1,b0+b1,1718382455));++m}}return m},
hO(a,b){return(((a^b*73244475)&2147483647)*1103515245+12345&2147483647)/2147483647},
m0(a){var s,r=a.ga5()
if(r.ad(0,B.w))return B.ag
s=B.b.n(B.a5.bj(r),-1,1)
if(s>0.999999)return B.ag
if(s<-0.999999)return A.fx(B.b2,3.141592653589793)
return A.fx(B.a5.b8(r),Math.acos(s))}}
A.jB.prototype={
C(){return"_BloomBlurAxis."+this.b}}
A.ip.prototype={
gF(){return this.f},
aF(a,b){B.a.l(a.a,new A.ay(this.f,B.Q,A.d([new A.Q(this.x,B.i),new A.Q(this.y,B.k)],t.C),!1))},
aD(a){var s=this,r=s.a.aH(new A.bn(s.e,s.b,s.c,B.A,B.dK,B.dH)),q=A.cF(s.d),p=t.n,o=s.r===B.eS?new Float32Array(A.S(A.d([1/s.Q,0],p))):new Float32Array(A.S(A.d([0,1/s.as],p)))
p=s.y
return A.d([new A.n0(new A.bh(s.f,A.d([new A.Q(s.x,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.z,s.w,o,p.a)],t.u)},
X(){},
$iar:1}
A.n0.prototype={
aw(a){var s,r,q,p,o=this
if(a.d.f.b<=0)return
s=a.b
r=s.a
A.bM(r,a.aA(o.r).b)
A.bj(r,o.a.ar())
A.d2(r,B.Y,1,0,0,0)
A.bU(r,o.b.b)
q=t._
p=o.d
if(o.e)A.HN(r,0,q.a(p.$0()))
else A.aD(r,0,q.a(p.$0()))
A.m(r,"uSource",B.y)
A.m(r,"uTexelStep",new A.q(B.al,o.f))
A.br(r,o.c)
s.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.kO.prototype={
gF(){return"bloomComposite"},
aF(a,b){B.a.l(a.a,new A.ay("bloomComposite",B.Q,A.d([new A.Q(this.f,B.i),new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
aD(a){var s=this,r="bloomComposite",q=s.a.aH(new A.bn(r,s.b,s.c,B.A,B.mA,B.m9)),p=A.cF(s.d),o=s.w,n=A.d([new A.Q(s.f,B.i),new A.Q(s.r,B.i),new A.Q(o,B.k)],t.C)
return A.d([new A.n1(new A.bh(r,n,!1,!1,!0,!1),q,p,s.e,o)],t.u)},
X(){},
$iar:1}
A.n1.prototype={
aw(a){var s,r,q=this,p=a.d.f.b
if(p<=0)return
s=a.b
r=s.a
A.bM(r,a.cd(q.f).b)
A.CR(r,1)
A.bj(r,B.cW)
A.bU(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.m(r,"uBloom",B.y)
A.m(r,"uBloomStrength",new A.q(B.e,p))
A.br(r,q.c)
s.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.l3.prototype={
gF(){return"depthPrepass"},
aF(a,b){B.a.l(a.a,new A.ay("depthPrepass",B.jz,A.d([new A.Q(this.w,B.k)],t.C),!1))},
aD(a){var s=this,r="depthPrepass",q=s.a.aH(new A.bn(r,s.b,s.c,B.dJ,B.dI,B.l8))
return A.d([new A.n5(new A.bh(r,A.d([new A.Q(s.w,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f)],t.u)},
X(){},
$iar:1}
A.n5.prototype={
aw(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.k,b=a2.b,a=a2.d,a0=a.f,a1=b.a
A.bM(a1,a2.aA("sceneDepth").b)
A.bj(a1,d.a.ar())
A.d2(a1,B.be,1,0,0,0)
A.bU(a1,d.b.b)
A.m(a1,"uVertexSnapGrid",new A.q(B.e,a0.ax))
A.m(a1,"uAlbedo",B.y)
for(s=a.a,r=s.length,a=a.c.c.a,q=d.c,p=a0.at,o=v.G,n=b.b,m=a1.a,l=0;l<s.length;s.length===r||(0,A.r)(s),++l){k=s[l]
j=k.a
i=j.gH()
A.m(a1,"uViewProjection",new A.q(B.r,new Float32Array(A.S(a))))
A.m(a1,"uModel",new A.q(B.r,new Float32Array(A.S(i.c.af().a))))
A.zG(b,k,!1)
d.m4(b,j.gH().b,p)
h=q.$1(j.gH().a)
i=h.a
if(a1.b!==B.j)A.h(A.i(c))
m.bindVertexArray(A.c(i.a))
i=h.b
g=h.c
f=k.b.length
if(i){i=h.d
if(a1.b!==B.j)A.h(A.i(c))
e=A.j(o.WebGL2RenderingContext.TRIANGLES)
m.drawElementsInstanced.apply(m,[e,g,i?A.j(o.WebGL2RenderingContext.UNSIGNED_INT):A.j(o.WebGL2RenderingContext.UNSIGNED_SHORT),0,f])
n.bT(g,f)}else{if(a1.b!==B.j)A.h(A.i(c))
m.drawArraysInstanced(A.j(o.WebGL2RenderingContext.TRIANGLES),0,g,f)
n.bT(g,f)}}},
m4(a,b,c){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b7?r.fy:0))
A.m(q,"uAffineWarpStrength",new A.q(B.e,0))
s=this.a.ar()
A.bj(q,r.go?s.fm(!1):s)},
$iaf:1,
gH(){return this.a}}
A.jD.prototype={
C(){return"_DofBlurAxis."+this.b}}
A.ix.prototype={
gF(){return this.f},
aF(a,b){B.a.l(a.a,new A.ay(this.f,B.Q,A.d([new A.Q(this.w,B.i),new A.Q(this.x,B.k)],t.C),!1))},
aD(a){var s=this,r=s.a.aH(new A.bn(s.e,s.b,s.c,B.A,B.dK,B.dH)),q=A.cF(s.d),p=t.n,o=s.r===B.eT?new Float32Array(A.S(A.d([1/s.z,0],p))):new Float32Array(A.S(A.d([0,1/s.Q],p)))
p=s.x
return A.d([new A.n6(new A.bh(s.f,A.d([new A.Q(s.w,B.i),new A.Q(p,B.k)],t.C),!1,!1,!1,!1),r,q,s.y,o,p.a)],t.u)},
X(){},
$iar:1}
A.n6.prototype={
aw(a){var s,r,q=this
if(a.d.f.d<=0)return
s=a.b
r=s.a
A.bM(r,a.aA(q.f).b)
A.bj(r,q.a.ar())
A.d2(r,B.Y,1,0,0,0)
A.bU(r,q.b.b)
A.aD(r,0,t._.a(q.d.$0()))
A.m(r,"uSource",B.y)
A.m(r,"uTexelStep",new A.q(B.al,q.e))
A.br(r,q.c)
s.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.l8.prototype={
gF(){return"dofComposite"},
aF(a,b){var s=this
B.a.l(a.a,new A.ay("dofComposite",B.Q,A.d([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1))},
aD(a){var s=this,r="dofComposite",q=s.a.aH(new A.bn(r,s.b,s.c,B.A,B.my,B.kX)),p=A.cF(s.d)
return A.d([new A.n7(new A.bh(r,A.d([new A.Q(s.z,B.i),new A.Q(s.Q,B.i),new A.Q(s.as,B.i),new A.Q(s.at,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,5,2.8)],t.u)},
X(){},
$iar:1}
A.n7.prototype={
aw(a){var s,r=this,q=a.aA("dofOutput"),p=a.b,o=r.r.$0(),n=p.a
A.bM(n,q.b)
A.bj(n,r.a.ar())
A.bU(n,r.b.b)
s=t._
A.aD(n,0,s.a(r.d.$0()))
A.m(n,"uSharp",B.y)
A.aD(n,1,s.a(r.e.$0()))
A.m(n,"uBlurred",B.am)
A.aD(n,2,s.a(r.f.$0()))
A.m(n,"uSceneDepth",B.eE)
A.m(n,"uNear",new A.q(B.e,o.f))
A.m(n,"uFar",new A.q(B.e,o.r))
A.m(n,"uFocusDistance",new A.q(B.e,r.w))
A.m(n,"uFocusRange",new A.q(B.e,r.x))
A.m(n,"uStrength",new A.q(B.e,a.d.f.d))
A.br(n,r.c)
p.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.lt.prototype={
gF(){return"grade"},
aF(a,b){B.a.l(a.a,new A.ay("grade",B.Q,A.d([new A.Q(this.r,B.i),new A.Q(this.w,B.k)],t.C),!1))},
aD(a){var s=this,r=s.a.aH(new A.bn("grade",s.b,s.c,B.A,B.mw,B.ma)),q=A.cF(s.d),p=s.r,o=s.w
return A.d([new A.nc(new A.bh("grade",A.d([new A.Q(p,B.i),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,16,p,o)],t.u)},
X(){},
$iar:1}
A.nc.prototype={
aw(a){var s=this,r=a.aA(s.f.a),q=a.b,p=q.a
A.bM(p,a.aA(s.r.a).b)
A.bj(p,s.a.ar())
A.bU(p,s.b.b)
A.aD(p,0,r.b)
A.m(p,"uScene",B.y)
A.aD(p,1,t._.a(s.d.$0()))
A.m(p,"uLut",B.am)
A.m(p,"uLutSize",new A.q(B.e,s.e))
A.m(p,"uStrength",new A.q(B.e,a.d.f.as))
A.br(p,s.c)
q.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.iV.prototype={
gF(){return"msaaResolve"},
aF(a,b){B.a.l(a.a,new A.ay("msaaResolve",B.jA,A.d([new A.Q(this.b,B.i),new A.Q(this.c,B.k)],t.C),!0))},
aD(a){var s=this.b,r=this.c
return A.d([new A.ni(new A.bh("msaaResolve",A.d([new A.Q(s,B.i),new A.Q(r,B.k)],t.C),!1,!1,!1,!1),this.a,s,r)],t.u)},
X(){},
$iar:1}
A.ni.prototype={
aw(a){var s,r,q,p,o,n,m,l="blitFramebuffer",k=a.cd(this.c),j=a.cd(this.d),i=this.b
if(i.b!==B.j)A.h(A.i(u.k))
s=t.iX
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
i.drawBuffers(A.d([A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(m.WebGL2RenderingContext.NONE)],t.n))}A.b2(i,l,[0,0,s,r.x,0,0,p,q.x,A.j(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.j(m.WebGL2RenderingContext.LINEAR)],t.H)}if(o&&n){i.readBuffer(A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT1))
i.drawBuffers(A.d([A.j(m.WebGL2RenderingContext.NONE),A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
A.b2(i,l,[0,0,s,r.x,0,0,p,q.x,A.j(m.WebGL2RenderingContext.COLOR_BUFFER_BIT),A.j(m.WebGL2RenderingContext.LINEAR)],t.H)}if(r.d!=null||r.e!=null)A.b2(i,l,[0,0,s,r.x,0,0,p,q.x,A.j(m.WebGL2RenderingContext.DEPTH_BUFFER_BIT),A.j(m.WebGL2RenderingContext.NEAREST)],t.H)
if(n)i.drawBuffers(A.d([A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT0),A.j(m.WebGL2RenderingContext.COLOR_ATTACHMENT1)],t.n))
i.bindFramebuffer(A.j(m.WebGL2RenderingContext.READ_FRAMEBUFFER),null)
i.bindFramebuffer(A.j(m.WebGL2RenderingContext.DRAW_FRAMEBUFFER),null)},
$iaf:1,
gH(){return this.a}}
A.h9.prototype={}
A.kP.prototype={
aA(a){var s=this.a.h(0,a)
if(s==null)throw A.b(A.i('BoundPassContext: no view declared for "'+a+'" \u2014 a pass may only access resources it named in its own PassDescriptor.uses'))
return s},
cd(a){var s=a.a,r=this.a.h(0,s+"#"+a.f)
if(r!=null)return r
return this.aA(s)},
$iH3:1}
A.A8.prototype={}
A.j4.prototype={
gF(){return"present"},
aF(a,b){B.a.l(a.a,new A.ay("present",B.jB,A.d([new A.Q(this.f,B.i)],t.C),!1))},
aD(a){var s,r=this,q=r.a.aH(new A.bn("present",r.b,r.c,B.A,B.mz,B.lO)),p=A.cF(r.d)
r.w=p
s=r.f
return A.d([new A.no(new A.bh("present",A.d([new A.Q(s,B.i)],t.C),!1,!1,!1,!1),q,p,s,r.r)],t.u)},
X(){var s=this.w
if(s!=null){this.d.a.deleteVertexArray(A.c(s.a))
this.w=null}},
$iar:1}
A.no.prototype={
aw(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a4.cd(a.d),a2=a4.b,a3=a2.a
A.bM(a3,a0)
A.bj(a3,a.a.ar())
A.bU(a3,a.b.b)
A.br(a3,a.c)
A.aD(a3,0,a1.b)
s=a4.c
r=s!=null
if(r)A.aD(a3,1,s)
q=a4.d
p=q.f
o=q.d
n=q.c
A.m(a3,"uExposure",new A.q(B.e,p.a))
A.m(a3,"uVignette",new A.q(B.e,p.e))
A.m(a3,"uGrain",new A.q(B.e,p.f))
A.m(a3,"uOutputEncoding",new A.q(B.e,a.e===B.bf?1:0))
A.m(a3,"uToneMap",new A.q(B.e,A.GN(B.ri)))
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
A.m(a3,"uClearColor",new A.q(B.m,new Float32Array(A.S(A.d([m.a,m.b,m.c],d)))))
A.m(a3,"uSkyHorizon",new A.q(B.m,new Float32Array(A.S(A.d([k.a,k.b,k.c],d)))))
A.m(a3,"uSkyZenith",new A.q(B.m,new Float32Array(A.S(A.d([j,i,h],d)))))
A.m(a3,"uSkyGround",new A.q(B.m,new Float32Array(A.S(A.d([g,f,e],d)))))
A.m(a3,"uSkyEnabled",new A.q(B.e,q?0:1))
j=q?a0:0.08
A.m(a3,"uSkyHorizonGlow",new A.q(B.e,j==null?0:j))
j=q?a0:0.0025
A.m(a3,"uSkyStarDensity",new A.q(B.e,j==null?0:j))
A.m(a3,"uSkyTexture",B.am)
A.m(a3,"uSkyTextureEnabled",new A.q(B.e,!q&&r?1:0))
r=q?a0:0
A.m(a3,"uSkyRotation",new A.q(B.e,r==null?0:r))
r=q?a0:1
A.m(a3,"uSkyExposure",new A.q(B.e,r==null?1:r))
A.m(a3,"uSkyTextureSrgb",new A.q(B.e,(!q||a0)===!0?1:0))
A.m(a3,"uInverseProjection",new A.q(B.r,new Float32Array(A.S(n.giP().a))))
c=n.y
if(c===$){b=n.a.iO()
n.y!==$&&A.o7()
n.y=b
c=b}A.m(a3,"uInverseView",new A.q(B.r,new Float32Array(A.S(c.a))))
r=n.d
A.m(a3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.d([r.a,r.b,r.c],d)))))
r=q?a0:l.z
A.m(a3,"uCloudCoverage",new A.q(B.e,r==null?0:r))
r=q?a0:l.Q
A.m(a3,"uCloudDensity",new A.q(B.e,r==null?0:r))
r=q?a0:l.as
A.m(a3,"uCloudBaseHeight",new A.q(B.e,r==null?650:r))
r=q?a0:l.at
A.m(a3,"uCloudThickness",new A.q(B.e,r==null?350:r))
r=q?a0:l.ax
A.m(a3,"uCloudScale",new A.q(B.e,r==null?0:r))
r=q?a0:l.ay
if(r==null)r=0
j=q?a0:l.ch
A.m(a3,"uCloudWind",new A.q(B.al,new Float32Array(A.S(A.d([r,j==null?0:j],d)))))
r=q?a0:l.CW
A.m(a3,"uCloudPhase",new A.q(B.e,r==null?0:r))
r=q?a0:l.cx
A.m(a3,"uCloudDetail",new A.q(B.e,r==null?0:r))
r=q?a0:l.cy
A.m(a3,"uCloudSilverLining",new A.q(B.e,r==null?0:r))
r=q?a0:l.db
A.m(a3,"uCloudSampleCount",new A.q(B.e,r==null?4:r))
r=o.go
q=r==null
j=q?a0:r.a.a
if(j==null)j=0
i=q?a0:r.a.b
if(i==null)i=1
h=q?a0:r.a.c
A.m(a3,"uCloudLightDirection",new A.q(B.m,new Float32Array(A.S(A.d([j,i,h==null?0:h],d)))))
j=q?a0:r.b.a
if(j==null)j=1
i=q?a0:r.b.b
if(i==null)i=1
h=q?a0:r.b.c
A.m(a3,"uCloudLightColor",new A.q(B.m,new Float32Array(A.S(A.d([j,i,h==null?1:h],d)))))
r=q?a0:r.c
A.m(a3,"uCloudLightIntensity",new A.q(B.e,r==null?0:r))
a2.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.mb.prototype={
gF(){return"ps1Quantize"},
aF(a,b){B.a.l(a.a,new A.ay("ps1Quantize",B.Q,A.d([new A.Q(this.e,B.i),new A.Q(this.f,B.k)],t.C),!1))},
aD(a){var s=this,r="ps1Quantize",q=s.a.aH(new A.bn(r,s.b,s.c,B.A,B.mB,B.kK)),p=A.cF(s.d),o=s.e,n=s.f
return A.d([new A.np(new A.bh(r,A.d([new A.Q(o,B.i),new A.Q(n,B.k)],t.C),!1,!1,!1,!1),q,p,o,n)],t.u)},
X(){},
$iar:1}
A.np.prototype={
aw(a){var s=this,r=a.aA(s.d.a),q=a.b,p=a.d.f,o=q.a
A.bM(o,a.aA(s.e.a).b)
A.bj(o,s.a.ar())
A.bU(o,s.b.b)
A.aD(o,0,r.b)
A.m(o,"uScene",B.y)
A.m(o,"uQuantizationBits",new A.q(B.e,p.ay))
A.m(o,"uDitherStrength",new A.q(B.e,p.Q))
A.br(o,s.c)
q.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.fF.prototype={}
A.mp.prototype={
gF(){return"shadow"},
aF(a,b){B.a.l(a.a,new A.ay("shadowCaster",B.jy,A.d([new A.Q(this.z,B.k)],t.C),!1))},
aD(a){var s=this,r="shadowCaster",q=s.a.aH(new A.bn(r,s.b,s.c,B.dJ,B.dI,B.m8))
return A.d([new A.ns(new A.bh(r,A.d([new A.Q(s.z,B.k)],t.C),!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y)],t.u)},
X(){},
$iar:1}
A.ns.prototype={
aw(a){var s,r,q,p,o=this,n=a.aA("shadowMap"),m=a.b,l=o.f.$0()
if(l==null){s=m.a
A.bM(s,n.b)
A.bj(s,o.a.ar())
A.d2(s,B.be,1,0,0,0)
return}r=A.Cu(l)
o.x.$1(r)
s=m.a
A.bM(s,n.b)
A.bj(s,o.a.ar())
A.d2(s,B.be,1,0,0,0)
A.bU(s,o.b.b)
A.m(s,"uAlbedo",B.y)
for(s=a.d.a,q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)o.l2(m,s[p],l,r)},
hE(a,b){var s,r=this.d.$1(b),q=a.a
A.aD(q,0,t._.a(this.e.$1(r.b)))
A.m(q,"uAlphaCutoff",new A.q(B.e,r.fx===B.b7?r.fy:0))
s=this.a.ar()
A.bj(q,r.go?s.fm(!1):s)},
l2(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){if(!b.gH().r)return
s=a.a
A.m(s,"uUseInstances",B.cl)
n.hB(a,b.gH().c,d)
n.hE(a,b.gH().b)
r=b.gH()
q=n.c.$1(r.a)
A.br(s,q.a)
s=q.b
r=q.c
if(s)a.eF(r,q.d,0)
else a.aK(r,0)}else if(b instanceof A.dT){p=b.a
if(!p.gH().r)return
if(n.mf(b,c)===B.qX)return
n.hB(a,p.gH().c,d)
A.zG(a,b,!1)
n.hE(a,p.gH().b)
s=p.gH()
q=n.c.$1(s.a)
A.br(a.a,q.a)
s=q.b
r=q.c
o=b.b.length
if(s)a.eG(r,q.d,o,0)
else a.eE(r,0,o)}else throw A.b(A.p("ShadowFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).t(0),null))},
mf(a,b){return B.qW},
hB(a,b,c){var s=a.a
A.m(s,"uModel",new A.q(B.r,new Float32Array(A.S(b.af().a))))
A.m(s,"uLightViewProjection",new A.q(B.r,new Float32Array(A.S(c.a.a))))},
$iaf:1,
gH(){return this.a}}
A.yT.prototype={
$1(a){return this.a.a=a},
$S:69}
A.yU.prototype={
$0(){var s=this.a.a
return s==null?this.b:s},
$S:70}
A.mq.prototype={
gF(){return"shadowedWorld"},
aF(a,b){var s=this,r=A.d([new A.Q(s.db,B.i)],t.C)
if(s.ay)r.push(new A.Q(s.dx,B.i))
r.push(new A.Q(s.dy,B.k))
B.a.l(a.a,new A.ay("shadowedWorld",B.dm,r,!1))},
aD(a){var s=this,r="shadowedWorld",q=s.a.aH(new A.bn(r,s.b,s.c,B.mF,B.mx,B.kJ)),p=A.d([new A.Q(s.db,B.i)],t.C)
if(s.ay)p.push(new A.Q(s.dx,B.i))
p.push(new A.Q(s.dy,B.k))
return A.d([new A.nt(new A.bh(r,p,!0,!0,!1,!0),q,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ch,s.CW,s.cx,s.cy)],t.u)},
X(){},
$iar:1}
A.nt.prototype={
aw(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=b4.aA("sceneColor"),a7=b4.b,a8=b4.d,a9=a8.c,b0=a8.d,b1=a8.f,b2=a4.z.$0(),b3=a7.a
A.bM(b3,a6.b)
A.bj(b3,a4.a.ar())
s=b0.a
A.d2(b3,B.cP,1,s.c,s.b,s.a)
A.bU(b3,a4.b.b)
A.m(b3,"uAlbedo",B.y)
A.m(b3,"uNormalMap",B.rx)
A.m(b3,"uOrmMap",B.ry)
A.m(b3,"uEmissiveMap",B.rz)
A.m(b3,"uLightmap",B.rA)
s=t._
A.aD(b3,1,s.a(a4.y.$0()))
A.m(b3,"uShadowMap",B.am)
r=a9.d
q=t.n
A.m(b3,"uCameraPosition",new A.q(B.m,new Float32Array(A.S(A.d([r.a,r.b,r.c],q)))))
A.m(b3,"uShadowMapTexelSize",new A.q(B.al,new Float32Array(A.S(A.d([1/a4.ch,1/a4.CW],q)))))
A.m(b3,"uShadowFilterRadius",new A.q(B.e,b0.at))
A.m(b3,"uShadowBias",new A.q(B.e,b0.db))
A.aD(b3,2,s.a(a4.at.$0()))
A.m(b3,"uSsao",B.eE)
A.m(b3,"uVertexSnapGrid",new A.q(B.e,b1.ax))
A.m(b3,"uSceneColorSize",new A.q(B.al,new Float32Array(A.S(A.d([a4.ax,a4.ay],q)))))
A.m(b3,"uViewProjection",new A.q(B.r,new Float32Array(A.S(a9.c.a))))
A.m(b3,"uView",new A.q(B.r,new Float32Array(A.S(a9.a.a))))
A.m(b3,"uLightViewProjection",new A.q(B.r,new Float32Array(A.S(b2.a.a))))
s=b0.b
A.m(b3,"uFogColor",new A.q(B.m,new Float32Array(A.S(A.d([s.a,s.b,s.c],q)))))
A.m(b3,"uFogStart",new A.q(B.e,b0.c))
A.m(b3,"uFogEnd",new A.q(B.e,b0.d))
s=b0.e
A.m(b3,"uFogHeightFalloff",new A.q(B.e,s==null?0:s))
s=b0.f
A.m(b3,"uFogDensity",new A.q(B.e,s==null?0:s))
p=a4.Q.$0()
s=A.d([],t.cv)
r=a4.as.$0()
r=J.P(r==null?B.bE:r)
o=p==null
while(r.m()){n=r.gp()
m=n.a
if(m!==(o?a5:p.a))s.push(n)}l=o?a5:p.b
if(l==null)l=B.E
k=o?a5:p.c
if(k==null)k=B.a5
A.m(b3,"uLightPosition",new A.q(B.m,new Float32Array(A.S(A.d([l.a,l.b,l.c],q)))))
A.m(b3,"uLightDirection",new A.q(B.m,new Float32Array(A.S(A.d([k.a,k.b,k.c],q)))))
j=o?a5:p.d
if(j==null)j=B.R
A.m(b3,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.d([j.a,j.b,j.c],q)))))
r=o?a5:p.e
A.m(b3,"uLightIntensity",new A.q(B.e,r==null?0:r))
A.m(b3,"uSpotEnabled",new A.q(B.e,!o?1:0))
i=b0.go
r=i==null
h=r?a5:i.a
if(h==null)h=B.E
g=r?a5:i.b
if(g==null)g=B.R
A.m(b3,"uDirectionalDirection",new A.q(B.m,new Float32Array(A.S(A.d([h.a,h.b,h.c],q)))))
A.m(b3,"uDirectionalColor",new A.q(B.m,new Float32Array(A.S(A.d([g.a,g.b,g.c],q)))))
r=r?a5:i.c
A.m(b3,"uDirectionalIntensity",new A.q(B.e,r==null?0:r))
for(r=b0.id,f=0;f<4;++f){n=r.length
if(f<n){if(!(f<n))return A.e(r,f)
e=r[f]}else e=a5
n=e==null
d=n?a5:e.b
if(d==null)d=B.w
c=n?a5:e.c
if(c==null)c=B.R
m=""+f
A.m(b3,"uPointPosition"+m,new A.q(B.m,new Float32Array(A.S(A.d([d.a,d.b,d.c],q)))))
A.m(b3,"uPointColor"+m,new A.q(B.m,new Float32Array(A.S(A.d([c.a,c.b,c.c],q)))))
b=n?a5:e.d
if(b==null)b=0
A.m(b3,"uPointIntensity"+m,new A.q(B.e,b))
n=n?a5:e.e
if(n==null)n=1
A.m(b3,"uPointRadius"+m,new A.q(B.e,n))}for(f=0;f<3;++f){r=s.length
if(f<r){if(!(f<r))return A.e(s,f)
e=s[f]}else e=a5
r=e==null
d=r?a5:e.b
if(d==null)d=B.w
a=r?a5:e.c
if(a==null)a=B.a5
c=r?a5:e.d
if(c==null)c=B.R
n=""+f
A.m(b3,"uDirectSpotPosition"+n,new A.q(B.m,new Float32Array(A.S(A.d([d.a,d.b,d.c],q)))))
A.m(b3,"uDirectSpotDirection"+n,new A.q(B.m,new Float32Array(A.S(A.d([a.a,a.b,a.c],q)))))
A.m(b3,"uDirectSpotColor"+n,new A.q(B.m,new Float32Array(A.S(A.d([c.a,c.b,c.c],q)))))
m=r?a5:e.e
if(m==null)m=0
A.m(b3,"uDirectSpotIntensity"+n,new A.q(B.e,m))
m=r?a5:e.f
if(m==null)m=1
A.m(b3,"uDirectSpotRange"+n,new A.q(B.e,m))
m=r?a5:e.r
if(m==null)m=0.3
A.m(b3,"uDirectSpotInnerCos"+n,new A.q(B.e,Math.cos(m)))
m=r?a5:e.w
if(m==null)m=0.5
A.m(b3,"uDirectSpotOuterCos"+n,new A.q(B.e,Math.cos(m)))
r=r?0:1
A.m(b3,"uDirectSpotEnabled"+n,new A.q(B.e,r))}s=o?a5:p.f
A.m(b3,"uLightRange",new A.q(B.e,s==null?1:s))
s=o?a5:p.r
if(s==null)s=0.3
A.m(b3,"uLightInnerCos",new A.q(B.e,Math.cos(s)))
s=o?a5:p.w
if(s==null)s=0.5
A.m(b3,"uLightOuterCos",new A.q(B.e,Math.cos(s)))
a0=b0.fx
A.m(b3,"uAmbientColor",new A.q(B.m,new Float32Array(A.S(A.d([a0.a,a0.b,a0.c],q)))))
A.m(b3,"uAmbientIntensity",new A.q(B.e,b0.fy))
A.m(b3,"uAmbientLightScale",new A.q(B.e,b0.ax))
A.m(b3,"uDirectLightScale",new A.q(B.e,b0.ay))
s=b0.dx
A.m(b3,"uReflectionColor",new A.q(B.m,new Float32Array(A.S(A.d([s.a,s.b,s.c],q)))))
A.m(b3,"uReflectionIntensity",new A.q(B.e,b0.dy))
A.m(b3,"uReflectionConfidence",new A.q(B.e,b0.fr))
A.m(b3,"uRainWetness",new A.q(B.e,b1.w))
A.m(b3,"uSurfaceSnowCoverage",new A.q(B.e,b1.x))
A.m(b3,"uSurfaceDissolution",new A.q(B.e,b1.y))
s=b0.k3
a1=A.hO(s,0,A.ek(4,"count",t.S),A.C(s).c).bN(0)
A.m(b3,"uThermalSourceCount",new A.q(B.e,a1.length))
for(f=0;f<4;++f){s=a1.length
if(f<s){if(!(f<s))return A.e(a1,f)
a2=a1[f]}else a2=a5
s=a2==null
d=s?a5:a2.b
if(d==null)d=B.w
r=""+f
A.m(b3,"uThermalSourcePosition"+r,new A.q(B.m,new Float32Array(A.S(A.d([d.a,d.b,d.c],q)))))
o=s?a5:a2.c
if(o==null)o=1
A.m(b3,"uThermalSourceRadius"+r,new A.q(B.e,o))
s=s?a5:a2.d
if(s==null)s=0
A.m(b3,"uThermalSourceDissolution"+r,new A.q(B.e,s))}for(b3=a8.a,s=b3.length,r=b1.at,a3=0;a3<b3.length;b3.length===s||(0,A.r)(b3),++a3)a4.ha(a7,b3[a3],r,b0)
for(a8=a8.b,b3=a8.length,a3=0;a3<a8.length;a8.length===b3||(0,A.r)(a8),++a3)a4.ha(a7,a8[a3],r,b0)},
ha(a,b,c,d){var s,r,q,p,o,n=this
if(t.yz.b(b)){s=a.a
A.m(s,"uUseInstances",B.cl)
n.hC(a,b.gH().c)
n.hF(a,b.gH().b,b.gH().e,b.gH().f,c,b.gH().w,d)
r=n.c.$1(b.gH().a)
A.br(s,r.a)
s=r.b
q=r.c
if(s)a.eF(q,r.d,0)
else a.aK(q,0)}else if(b instanceof A.dT){p=b.a
n.hC(a,p.gH().c)
A.zG(a,b,!0)
n.hF(a,p.gH().b,p.gH().e,p.gH().f,c,p.gH().w,d)
r=n.c.$1(p.gH().a)
A.br(a.a,r.a)
s=r.b
q=r.c
o=b.b.length
if(s)a.eG(q,r.d,o,0)
else a.eE(q,0,o)}else throw A.b(A.p("ShadowedWorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).t(0),null))},
hF(a,b,c,d,e,f,g){var s=this,r=null,q=s.d.$1(b),p=t._,o=a.a
A.aD(o,0,p.a(s.e.$1(q.b)))
A.aD(o,3,p.a(s.f.$1(q.x)))
A.aD(o,4,p.a(s.r.$1(r)))
A.aD(o,5,p.a(s.w.$1(r)))
A.aD(o,6,p.a(s.x.$1(r)))
A.m(o,"uAlphaCutoff",new A.q(B.e,q.fx===B.b7?q.fy:0))
A.m(o,"uOpaqueCoverage",new A.q(B.e,c===B.at?0:1))
A.m(o,"uAffineWarpStrength",new A.q(B.e,0))
p=t.n
A.m(o,"uMaterialTint",new A.q(B.m,new Float32Array(A.S(A.d([q.d,q.e,q.f],p)))))
A.m(o,"uEmissiveStrength",new A.q(B.e,q.w))
A.m(o,"uUvScaleOffset",new A.q(B.rw,new Float32Array(A.S(A.d([q.db,q.dx,0,0],p)))))
A.m(o,"uNormalStrength",new A.q(B.e,q.z*g.ch))
A.m(o,"uRoughness",new A.q(B.e,q.at*g.CW))
A.m(o,"uMetallic",new A.q(B.e,q.ax*g.cx))
A.m(o,"uSpecularScale",new A.q(B.e,g.cy))
A.m(o,"uClearcoatStrength",new A.q(B.e,q.ch))
A.m(o,"uClearcoatRoughness",new A.q(B.e,q.CW))
A.m(o,"uOcclusionStrength",new A.q(B.e,1))
A.m(o,"uLightmapIntensity",new A.q(B.e,0))
A.m(o,"uReceivesShadow",new A.q(B.e,q.id&&f?1:0))
A:{p=r
if(B.at===c){switch(d.a){case 0:p=B.h3
break
case 1:p=B.h2
break}break A}if(B.C===c||B.h1===c){p=s.a.ar()
break A}}A.bj(o,q.go?p.fm(!1):p)},
hC(a,b){var s=b.af(),r=a.a
A.m(r,"uModel",new A.q(B.r,new Float32Array(A.S(s.a))))
A.m(r,"uNormalMatrix",new A.q(B.r,new Float32Array(A.S(s.f3().a))))},
$iaf:1,
gH(){return this.a}}
A.mt.prototype={
gF(){return"ssaoOcclusion"},
aF(a,b){B.a.l(a.a,new A.ay("ssaoOcclusion",B.bn,A.d([new A.Q(this.w,B.k)],t.C),!1))},
aD(a){var s=this,r="ssaoOcclusion",q=s.a.aH(new A.bn(r,s.b,s.c,B.A,B.dN,B.kw)),p=A.cF(s.d)
return A.d([new A.nw(new A.bh(r,A.d([new A.Q(s.w,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,0.4)],t.u)},
X(){},
$iar:1}
A.nw.prototype={
aw(a){var s,r,q,p=this,o=a.b,n=a.d.f.c,m=o.a
A.bM(m,a.aA("ssaoRaw").b)
A.bj(m,p.a.ar())
if(n<=0){A.d2(m,B.Y,1,1,1,1)
return}A.d2(m,B.Y,1,0,0,0)
s=p.e.$0()
A.bU(m,p.b.b)
A.aD(m,0,t._.a(p.d.$0()))
A.m(m,"uSceneDepth",B.y)
A.m(m,"uNear",new A.q(B.e,s.f))
A.m(m,"uFar",new A.q(B.e,s.r))
r=s.b.a
q=r.length
if(0>=q)return A.e(r,0)
A.m(m,"uProjScaleX",new A.q(B.e,r[0]))
if(5>=q)return A.e(r,5)
A.m(m,"uProjScaleY",new A.q(B.e,r[5]))
A.m(m,"uRadius",new A.q(B.e,p.f))
A.m(m,"uStrength",new A.q(B.e,n))
A.br(m,p.c)
o.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.ms.prototype={
gF(){return"ssaoBlur"},
aF(a,b){B.a.l(a.a,new A.ay("ssaoBlur",B.bn,A.d([new A.Q(this.y,B.i),new A.Q(this.z,B.k)],t.C),!1))},
aD(a){var s=this,r="ssaoBlur",q=s.a.aH(new A.bn(r,s.b,s.c,B.A,B.mq,B.md)),p=A.cF(s.d)
return A.d([new A.nv(new A.bh(r,A.d([new A.Q(s.y,B.i),new A.Q(s.z,B.k)],t.C),!1,!1,!1,!1),q,p,s.e,s.f,s.r,s.w,s.x)],t.u)},
X(){},
$iar:1}
A.nv.prototype={
aw(a){var s,r,q=this,p=a.b,o=p.a
A.bM(o,a.aA("ssaoBlurred").b)
A.bj(o,q.a.ar())
if(a.d.f.c<=0){A.d2(o,B.Y,1,1,1,1)
return}A.d2(o,B.Y,1,0,0,0)
s=q.f.$0()
A.bU(o,q.b.b)
r=t._
A.aD(o,0,r.a(q.d.$0()))
A.m(o,"uSsaoRaw",B.y)
A.aD(o,1,r.a(q.e.$0()))
A.m(o,"uSceneDepth",B.am)
A.m(o,"uTexelSize",new A.q(B.al,new Float32Array(A.S(A.d([1/q.r,1/q.w],t.n)))))
A.m(o,"uNear",new A.q(B.e,s.f))
A.m(o,"uFar",new A.q(B.e,s.r))
A.br(o,q.c)
p.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.mH.prototype={
gF(){return"vhs"},
aF(a,b){var s=this.w
a.b.l(0,s.a)
B.a.l(a.a,new A.ay("vhs",B.Q,A.d([new A.Q(this.r,B.i),new A.Q(s,B.V),new A.Q(s,B.k)],t.C),!1))},
aD(a){var s=this,r=s.a.aH(new A.bn("vhs",s.b,s.c,B.A,B.mt,B.kM)),q=A.cF(s.d),p=s.r,o=s.w
return A.d([new A.nE(new A.bh("vhs",A.d([new A.Q(p,B.i),new A.Q(o,B.V),new A.Q(o,B.k)],t.C),!1,!1,!1,!1),r,q,s.e,s.f,p,o)],t.u)},
X(){},
$iar:1}
A.nE.prototype={
aw(a){var s,r=this,q=a.aA(r.f.a),p=a.aA(r.r.a),o=a.b,n=a.d.f,m=n.dy,l=n.CW
if(m)l*=0.5
s=m?0:n.dx
m=o.a
A.bM(m,p.b)
A.bj(m,r.a.ar())
A.bU(m,r.b.b)
A.aD(m,0,q.b)
A.m(m,"uScene",B.y)
A.aD(m,1,t._.a(r.d.$0()))
A.m(m,"uHistory",B.am)
A.m(m,"uTime",new A.q(B.e,r.e.$0()))
A.m(m,"uChromaWeight",new A.q(B.e,n.ch))
A.m(m,"uTrackingWeight",new A.q(B.e,l))
A.m(m,"uNoiseWeight",new A.q(B.e,n.cx))
A.m(m,"uHeadSwitchWeight",new A.q(B.e,n.cy))
A.m(m,"uDropoutWeight",new A.q(B.e,n.db))
A.m(m,"uGhostWeight",new A.q(B.e,s))
A.br(m,r.c)
o.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.mQ.prototype={
gF(){return"volumetricLight"},
aF(a,b){var s=this,r=s.w,q=t.C,p=a.a
B.a.l(p,new A.ay("volumetricLight",B.bn,A.d([new A.Q(s.x,B.i),new A.Q(r,B.k)],q),!1))
B.a.l(p,new A.ay("volumetricComposite",B.Q,A.d([new A.Q(r,B.i),new A.Q(s.y,B.i),new A.Q(s.z,B.k)],q),!1))},
aD(a){var s,r,q,p,o,n,m=this,l="volumetricLight",k="volumetricComposite",j=m.a,i=m.b,h=j.aH(new A.bn(l,i,m.c,B.A,B.dN,B.kV)),g=m.e,f=A.cF(g),e=m.Q
B.a.l(e,f)
s=m.w
r=t.C
q=A.d([new A.nG(new A.bh(l,A.d([new A.Q(m.x,B.i),new A.Q(s,B.k)],r),!1,!1,!1,!1),h,f,s.a,m.f,m.r)],t.u)
p=m.z
o=j.aH(new A.bn(k,i,m.d,B.A,B.mH,B.me))
n=A.cF(g)
B.a.l(e,n)
B.a.l(q,new A.nF(new A.bh(k,A.d([new A.Q(s,B.i),new A.Q(m.y,B.i),new A.Q(p,B.k)],r),!1,!1,!0,!1),o,n,s,p))
return q},
X(){var s,r,q,p
for(s=this.Q,r=s.length,q=this.e.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p)q.deleteVertexArray(A.c(s[p].a))
B.a.S(s)},
$iar:1}
A.nG.prototype={
aw(b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=b1.aA(a3.d),a6=b1.b,a7=a3.f.$0(),a8=b1.d.d,a9=a8.go,b0=a6.a
A.bM(b0,a5.b)
A.bj(b0,a3.a.ar())
A.d2(b0,B.Y,1,0,0,0)
A.bU(b0,a3.b.b)
A.aD(b0,0,t._.a(a3.e.$0()))
A.m(b0,"uSceneDepth",B.y)
A.m(b0,"uNear",new A.q(B.e,a7.f))
A.m(b0,"uFar",new A.q(B.e,a7.r))
A.m(b0,"uViewProjection",new A.q(B.r,new Float32Array(A.S(a7.c.a))))
s=a7.a.a
A.m(b0,"uView",new A.q(B.r,new Float32Array(A.S(s))))
A.m(b0,"uInverseProjection",new A.q(B.r,new Float32Array(A.S(a7.giP().a))))
r=a9==null
A.m(b0,"uShaftIntensity",new A.q(B.e,r?0:a9.c*0.15))
q=a8.f
A.m(b0,"uFogDensity",new A.q(B.e,q==null?0:q))
A.m(b0,"uAnisotropy",new A.q(B.e,a8.y))
q=a8.r
p=t.n
A.m(b0,"uVolumetricAlbedo",new A.q(B.m,new Float32Array(A.S(A.d([q.a,q.b,q.c],p)))))
A.m(b0,"uVolumetricHeightFalloff",new A.q(B.e,a8.w))
A.m(b0,"uVolumetricDustDensity",new A.q(B.e,a8.x))
A.m(b0,"uVolumetricJitter",new A.q(B.e,a8.z))
A.m(b0,"uVolumetricIntensity",new A.q(B.e,a8.Q))
A.m(b0,"uVolumetricSampleCount",new A.q(B.e,a8.as))
if(r)o=B.E
else{q=a9.a.ga5()
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
o=new A.A(n*l+k*j+q*i,n*h+k*g+q*f,n*e+k*d+q*s[10]).ga5()}c=r?a4:a9.b
if(c==null)c=B.R
A.m(b0,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.d([o.a,o.b,o.c],p)))))
A.m(b0,"uLightColor",new A.q(B.m,new Float32Array(A.S(A.d([c.a,c.b,c.c],p)))))
b=A.Lf(4,a7.d,a8.k2)
A.m(b0,"uVolumetricSourceCount",new A.q(B.e,b.length))
for(a=0;a<4;++a){s=b.length
if(a<s){if(!(a<s))return A.e(b,a)
a0=b[a]}else a0=a4
s=a0==null
a1=s?a4:a0.b
if(a1==null)a1=B.w
a2=s?a4:a0.c
if(a2==null)a2=B.w
r=""+a
A.m(b0,"uSourcePosition"+r,new A.q(B.m,new Float32Array(A.S(A.d([a1.a,a1.b,a1.c],p)))))
A.m(b0,"uSourceColor"+r,new A.q(B.m,new Float32Array(A.S(A.d([a2.a,a2.b,a2.c],p)))))
q=s?a4:a0.d
if(q==null)q=0
A.m(b0,"uSourceIntensity"+r,new A.q(B.e,q))
q=s?a4:a0.e
if(q==null)q=1
A.m(b0,"uSourceReferenceDistance"+r,new A.q(B.e,q))
s=s?a4:a0.f
if(s==null)s=1
A.m(b0,"uSourceCutoffDistance"+r,new A.q(B.e,s))}A.br(b0,a3.c)
a6.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.nF.prototype={
aw(a){var s=this,r=a.cd(s.e),q=a.cd(s.d),p=a.b,o=p.a
A.bM(o,r.b)
A.CR(o,1)
A.bj(o,B.cW)
A.bU(o,s.b.b)
A.aD(o,0,q.b)
A.m(o,"uVolumetric",B.y)
A.m(o,"uVolumetricStrength",B.eD)
A.br(o,s.c)
p.aK(3,0)},
$iaf:1,
gH(){return this.a}}
A.jf.prototype={}
A.mU.prototype={
gF(){return"world"},
aF(a,b){B.a.l(a.a,new A.ay("worldOpaqueTransparent",B.dm,A.d([new A.Q(this.e,B.k)],t.C),!1))},
aD(a){var s=this,r=s.a.aH(new A.bn("safeWorld",s.b,s.c,B.mI,B.A,B.lk)),q=s.e
return A.d([new A.nJ(new A.bh("worldOpaqueTransparent",A.d([new A.Q(q,B.k)],t.C),!0,!0,!1,!0),r,s.d,q.a)],t.u)},
X(){},
$iar:1}
A.nJ.prototype={
aw(a){var s,r,q,p,o,n=this,m=a.b,l=a.d,k=l.d,j=m.a
A.bM(j,a.aA(n.d).b)
A.bj(j,n.a.ar())
s=k.a
A.d2(j,B.cP,1,s.c,s.b,s.a)
A.bU(j,n.b.b)
A.m(j,"uViewProjection",new A.q(B.r,new Float32Array(A.S(l.c.c.a))))
r=k.go
q=r==null?null:r.a
if(q==null)q=B.E
s=t.n
A.m(j,"uLightDir",new A.q(B.m,new Float32Array(A.S(A.d([q.a,q.b,q.c],s)))))
p=k.fx
A.m(j,"uAmbientColor",new A.q(B.m,new Float32Array(A.S(A.d([p.a,p.b,p.c],s)))))
A.m(j,"uAmbientIntensity",new A.q(B.e,k.fy))
A.m(j,"uAmbientLightScale",new A.q(B.e,k.ax))
A.m(j,"uDirectLightScale",new A.q(B.e,k.ay))
for(j=l.a,s=j.length,o=0;o<j.length;j.length===s||(0,A.r)(j),++o)n.hS(m,j[o])
for(l=l.b,j=l.length,o=0;o<l.length;l.length===j||(0,A.r)(l),++o)n.hS(m,l[o])},
hS(a,b){var s,r,q,p,o,n=this
if(b instanceof A.dT){s=b.a
n.hT(a,s.gH().c)
A.zG(a,b,!0)
r=n.c.$1(s.gH().a)
A.br(a.a,r.a)
q=r.b
p=r.c
o=b.b.length
if(q)a.eG(p,r.d,o,0)
else a.eE(p,0,o)}else if(t.yz.b(b)){q=a.a
A.m(q,"uUseInstances",B.cl)
n.hT(a,b.gH().c)
r=n.c.$1(b.gH().a)
A.br(q,r.a)
q=r.b
p=r.c
if(q)a.eF(p,r.d,0)
else a.aK(p,0)}else throw A.b(A.p("WorldFeature: frameScene entries must be InstanceBatch or RetainedItemView, got "+J.fa(b).t(0),null))},
hT(a,b){var s=b.af(),r=a.a
A.m(r,"uModel",new A.q(B.r,new Float32Array(A.S(s.a))))
A.m(r,"uNormalMatrix",new A.q(B.r,new Float32Array(A.S(s.f3().a))))},
$iaf:1,
gH(){return this.a}}
A.pt.prototype={
cV(a){var s,r,q
a.B()
s=A.a1(t.N)
r=a.w>=2
if(r)s.l(0,"bloom")
if(a.d>=1024&&r)s.l(0,"shadows")
if(a.f>=2)s.l(0,"msaa")
if(a.Q||a.as){s.l(0,"ssao")
s.l(0,"dof")}if(a.e>=3)s.l(0,"material-array")
r=s.a
if(r>=5)q=B.M
else q=r===0?B.c_:B.U
return new A.dZ(q,s)},
js(a){var s,r=this.cV(a).a
A:{if(B.M===r){s=B.pF
break A}if(B.U===r){s=B.e9
break A}s=B.aB
break A}return s}}
A.lr.prototype={
C(){return"GpuBufferUsage."+this.b}}
A.iC.prototype={
C(){return"GpuBufferKind."+this.b}}
A.iF.prototype={
C(){return"GpuTextureFilter."+this.b}}
A.iG.prototype={
C(){return"GpuTextureWrap."+this.b}}
A.lq.prototype={}
A.ls.prototype={}
A.fl.prototype={
C(){return"GpuTargetAttachment."+this.b}}
A.iE.prototype={}
A.iD.prototype={
C(){return"GpuDeviceStatus."+this.b}}
A.fE.prototype={
C(){return"ShaderCompileStage."+this.b}}
A.jl.prototype={
t(a){return"ShaderCompileException("+this.a.b+": "+this.b+")"}}
A.dv.prototype={
C(){return"UniformType."+this.b}}
A.q.prototype={}
A.hc.prototype={
C(){return"ClearMask."+this.b}}
A.l4.prototype={
aK(a,b){var s=this.a
if(s.b!==B.j)A.h(A.i(u.k))
s.a.drawArrays(A.j(v.G.WebGL2RenderingContext.TRIANGLES),b,a)
this.b.bT(a,1)},
eE(a,b,c){var s=this.a
if(s.b!==B.j)A.h(A.i(u.k))
s.a.drawArraysInstanced(A.j(v.G.WebGL2RenderingContext.TRIANGLES),b,a,c)
this.b.bT(a,c)},
eF(a,b,c){var s,r,q=this.a
if(q.b!==B.j)A.h(A.i(u.k))
s=v.G
r=A.j(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.j(s.WebGL2RenderingContext.UNSIGNED_INT):A.j(s.WebGL2RenderingContext.UNSIGNED_SHORT)
q.a.drawElements(r,a,s,c)
this.b.bT(a,1)},
eG(a,b,c,d){var s,r,q=this.a
if(q.b!==B.j)A.h(A.i(u.k))
s=v.G
r=A.j(s.WebGL2RenderingContext.TRIANGLES)
s=b?A.j(s.WebGL2RenderingContext.UNSIGNED_INT):A.j(s.WebGL2RenderingContext.UNSIGNED_SHORT)
A.b2(q.a,"drawElementsInstanced",[r,a,s,d,c],t.H)
this.b.bT(a,c)},
$iFP:1}
A.hq.prototype={
C(){return"GpuResourceCandidateState."+this.b}}
A.hC.prototype={
iS(a){var s=this.b.h(0,a)
if(s==null)throw A.b(A.i("resource is not in candidate: "+a))
return s}}
A.qx.prototype={
gp(){var s=this.c
if(s==null)throw A.b(A.i("GPU resource adapter is not initialized"))
return s},
dR(a){var s,r,q,p,o,n=this
if(n.e)A.h(A.i("GPU resource adapter is disposed"))
if(n.c==null)throw A.b(A.i("GPU resource adapter is not initialized"))
if(n.d!=null)throw A.b(A.i("GPU resource candidate is already open"))
s=A.j1(a)
p=n.b
r=p.dR(s)
try{q=new A.hC(r,n.ed(s,a),B.ax)
n.d=q
return q}catch(o){p.fc(r)
throw o}},
X(){var s,r=this
if(r.e)return
if(r.d!=null)throw A.b(A.i("cannot dispose an open GPU candidate"))
s=r.c
if(s!=null)r.eg(s.b)
r.b.X()
r.c=null
r.e=!0},
ed(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.N,a1=t._,a2=A.n(a0,a1),a3=A.d([],t.C1)
try{k=a4.a
j=k.$ti
i=j.i("l(1)")
j=j.i("F<1>")
s=new A.F(k,i.a(new A.qy()),j)
for(h=s,g=J.P(h.a),h=new A.R(g,h.b,h.$ti.i("R<1>")),f=a.a;h.m();){r=g.gp()
q=A.CX(f,a.h8(r,a5))
J.em(a3,q)
J.bd(a2,r,q)}e=A.J(new A.F(k,i.a(new A.qz()),j),j.i("t.E"))
B.a.a7(e)
p=e
for(k=p,j=k.length,i=a5.d===1,d=0;d<k.length;k.length===j||(0,A.r)(k),++d){o=k[d]
n=A.Eo(J.Fi(o,11))
if(i){h=J.b8(a2,"sceneColor")
h.toString
J.bd(a2,o,h)}else{h=n
if(typeof h!=="number")return h.qc()
if(h>=2){h=J.b8(a2,"sceneColor#1")
h.toString
J.bd(a2,o,h)}else{m=A.CX(f,a.h8(o,a5))
J.em(a3,m)
J.bd(a2,o,m)}}}a0=A.aZ(a2,a0,a1)
return a0}catch(c){for(a0=a3,k=A.C(a0).i("bR<1>"),a0=new A.bR(a0,k),a0=new A.ao(a0,a0.gu(0),k.i("ao<a0.E>")),j=a.a,i=t.iX,k=k.i("a0.E");a0.m();){h=a0.d
l=h==null?k.a(h):h
b=i.a(a1.a(l).a)
A.Ah(j,b.a,b.b,b.c,b.d,b.e,b.f,b.r)}throw c}},
h8(a,b){var s,r,q,p,o,n=b.b,m=b.c
if(a==="shadowMap"){s=b.r
return new A.iE(s,s,1,B.bl,!0)}if(a==="sceneDepth")return new A.iE(n,m,1,B.bl,!0)
r=B.c.Y(a,"ssao")||B.c.Y(a,"bloomBlur")||B.c.Y(a,"dofBlur")||B.c.Y(a,"volumetricLight")
q=r?B.d.ah(n+1,2):n
p=r?B.d.ah(m+1,2):m
s=a==="sceneColor"
o=s||B.c.Y(a,"sceneColor#")
s=s?b.d:1
return new A.iE(q,p,s,o?B.dk:B.ju,o)},
eg(a){var s,r,q,p,o,n=A.fq(t.mf.a(a).gan(),t._)
for(n=A.eW(n,n.r,A.v(n).c),s=this.a,r=t.iX,q=n.$ti.c;n.m();){p=n.d
o=r.a((p==null?q.a(p):p).a)
A.Ah(s,o.a,o.b,o.c,o.d,o.e,o.f,o.r)}},
fV(a){if(this.d!==a||a.c!==B.ax)throw A.b(A.i("GPU resource candidate is not open"))}}
A.qy.prototype={
$1(a){return!B.c.Y(A.x(a),"sceneColor#")},
$S:3}
A.qz.prototype={
$1(a){return B.c.Y(A.x(a),"sceneColor#")},
$S:3}
A.hW.prototype={
C(){return"_SlotState."+this.b}}
A.eZ.prototype={
sb7(a){this.c=this.$ti.i("1?").a(a)}}
A.dq.prototype={
av(a,b){var s,r,q,p,o=this,n=o.$ti
n.y[1].a(a)
s=o.c
r=s.length
if(r!==0){if(0>=r)return A.e(s,-1)
q=s.pop()}else{s=o.b
B.a.l(s,new A.eZ(B.b5,n.i("eZ<2>")))
q=s.length-1}n=o.b
if(!(q>=0&&q<n.length))return A.e(n,q)
p=n[q];++p.a
p.b=B.tO
p.sb7(a)
p.f=b;++o.d
return o.a.$3(q,p.a,b)},
b9(a){return this.av(a,null)},
a2(a){var s,r,q
this.$ti.c.a(a)
s=a.a
if(s<0||s>=this.b.length)throw A.b(A.eG(B.dq,a))
r=this.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.eG(B.dr,a))
s=q.b
if(s===B.b6||s===B.b5)throw A.b(A.eG(B.aV,a))},
bz(a){var s,r,q=this.$ti
q.c.a(a)
this.a2(a)
s=this.b
r=a.a
if(!(r>=0&&r<s.length))return A.e(s,r)
r=s[r].c
return r==null?q.y[1].a(r):r},
fi(a,b){var s,r=this.$ti
r.c.a(a)
r.y[1].a(b)
this.a2(a)
r=this.b
s=a.a
if(!(s>=0&&s<r.length))return A.e(r,s)
r[s].sb7(b)},
aN(a){var s,r,q,p=this
p.$ti.c.a(a)
s=a.a
if(s<0||s>=p.b.length)throw A.b(A.eG(B.dq,a))
r=p.b
if(!(s>=0&&s<r.length))return A.e(r,s)
q=r[s]
if(q.a!==a.b)throw A.b(A.eG(B.dr,a))
r=q.b
if(r===B.b6||r===B.b5)throw A.b(A.eG(B.jM,a))
q.b=B.b6
q.sb7(null)
B.a.l(p.c,s);++p.e},
cI(){return new A.cc(this.oC(),this.$ti.i("cc<+(1,2)>"))},
oC(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i
return function $async$cI(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=s.a,m=s.$ti.y[1],l=0
case 2:if(!(l<o.length)){r=4
break}k=o[l]
j=k.b
if(j===B.b6||j===B.b5){r=3
break}j=n.$3(l,k.a,k.f)
i=k.c
r=5
return a.b=new A.a6(j,i==null?m.a(i):i),1
case 5:case 3:++l
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}}}
A.kM.prototype={
C(){return"BlendEquation."+this.b}}
A.fe.prototype={
C(){return"BlendFactor."+this.b}}
A.l_.prototype={
C(){return"CullFace."+this.b}}
A.l2.prototype={
C(){return"DepthFunc."+this.b}}
A.hl.prototype={
fm(a){var s=this
return A.BH(s.f,s.d,s.r,s.e,!0,!0,!0,!0,!1,s.x,s.b,s.a,s.c,!0,!1,!1)}}
A.bz.prototype={
C(){return"StateField."+this.b}}
A.wg.prototype={
nN(a){var s,r=this.a
if(r==null)return A.hw(B.lU,t.qL)
s=A.a1(t.qL)
if(r.a!==a.a)s.l(0,B.cd)
if(r.b!==a.b)s.l(0,B.ce)
if(r.c!==a.c)s.l(0,B.cf)
if(r.d!==a.d)s.l(0,B.cg)
if(r.e!==a.e||r.f!==a.f)s.l(0,B.ch)
if(r.r!==a.r)s.l(0,B.ci)
if(r.w!==a.w)s.l(0,B.cj)
if(r.x!==a.x)s.l(0,B.ck)
return s}}
A.ef.prototype={$icR:1}
A.k6.prototype={}
A.k5.prototype={}
A.nI.prototype={}
A.mS.prototype={
ks(a){var s=this,r=A.c(s.a.canvas)
s.c=A.Z(new A.wd(s))
s.d=A.Z(new A.we(s))
r.addEventListener("webglcontextlost",s.c)
r.addEventListener("webglcontextrestored",s.d)},
bU(a){if(!this.r.q(0,a))return!1
return A.H(this.a.getExtension(a))!=null},
j3(){var s,r,q,p,o,n,m,l,k=this,j=v.G,i=k.cn(A.j(j.WebGL2RenderingContext.MAX_TEXTURE_SIZE)),h=k.cn(A.j(j.WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS)),g=k.cn(A.j(j.WebGL2RenderingContext.MAX_SAMPLES)),f=k.cn(A.j(j.WebGL2RenderingContext.MAX_VERTEX_ATTRIBS)),e=k.cn(A.j(j.WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS)),d=k.bU("EXT_texture_filter_anisotropic")
if(d){s=k.hq(34047)
r=isFinite(s)&&s>=1?s:1}else r=1
s=k.bU("EXT_disjoint_timer_query_webgl2")
k.w=s
q=k.bU("EXT_color_buffer_float")
p=k.bU("EXT_color_buffer_half_float")
o=k.bU("WEBGL_lose_context")
n=k.a
m=A.ig(n.getParameter(A.j(j.WebGL2RenderingContext.RENDERER)))
l=A.ig(n.getParameter(A.j(j.WebGL2RenderingContext.VENDOR)))
j=typeof m=="string"?m:null
return new A.tZ("WebGL2",j,typeof l=="string"?l:null,i,h,g,f,e,d,r,s,q,p,o)},
cn(a){var s=A.ig(this.a.getParameter(a))
return typeof s=="number"?B.b.aj(s):0},
hq(a){var s=A.ig(this.a.getParameter(a))
return typeof s=="number"?s:0/0},
$iGd:1}
A.wd.prototype={
$1(a){A.c(a).preventDefault()
this.a.b=B.a7},
$S:1}
A.we.prototype={
$1(a){this.a.b=B.j},
$S:1}
A.xj.prototype={
mH(){var s,r=this
if(r.b!==B.j)A.h(A.i(u.k))
s=r.w?A.H(r.a.createQuery()):null
if(s==null)return null
r.a.beginQuery(35007,s)
return new A.ef(new A.nI(s))},
hL(a){var s=a.a
if(!(s instanceof A.nI))throw A.b(A.a8(a,"query","is not a GPU timer query"))
return s}}
A.nH.prototype={}
A.wc.prototype={}
A.wf.prototype={
nD(a){var s=A.H(a.getContext("webgl2"))
if(!t.m.b(s))return null
return new A.wc(A.HI(s))}}
A.l6.prototype={
D(){var s=this
return A.E(["scrutiny",s.a,"exhaustion",s.b,"isolation",s.c,"complianceTriggered",s.d],t.N,t.z)}}
A.kG.prototype={
goH(){var s=this.cx
return new A.an(s,A.v(s).i("an<2>")).bb(0,0,new A.oU(),t.i)},
kb(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.c
i===$&&A.u()
s=j.a
A.H(i.connect(A.c(s.destination)))
r=j.d
r===$&&A.u()
A.c(r.gain).value=0.25
q=j.e
q===$&&A.u()
A.c(q.gain).value=0.12
p=j.f
p===$&&A.u()
A.c(p.gain).value=0.4
o=j.r
o===$&&A.u()
A.c(o.gain).value=0.2
n=j.w
n===$&&A.u()
A.c(n.gain).value=0.4
m=j.x
m===$&&A.u()
A.c(m.gain).value=0.1
l=j.y
l===$&&A.u()
A.c(l.gain).value=1
for(r=[r,q,p,o,n,m,l],k=0;k<7;++k)A.H(r[k].connect(i))
r=j.z
r===$&&A.u()
A.c(r.gain).value=1
q=j.Q
q===$&&A.u()
A.c(q.gain).value=0.35
A.H(o.connect(r))
A.H(n.connect(r))
A.H(p.connect(r))
p=j.as
p===$&&A.u()
A.H(r.connect(p))
A.H(p.connect(q))
A.H(q.connect(i))
q=A.c(s.createBiquadFilter())
q.type="highpass"
A.c(q.frequency).value=80
j.k3!==$&&A.bc()
j.k3=q
p=A.c(s.createBiquadFilter())
p.type="lowpass"
A.c(p.frequency).value=11e3
j.k4!==$&&A.bc()
j.k4=p
A.H(q.connect(p))
A.H(p.connect(A.c(s.destination)))
i.disconnect(A.c(s.destination))
A.H(i.connect(q))
p.disconnect(A.c(s.destination))
q=A.c(s.createChannelSplitter(2))
j.ok!==$&&A.bc()
j.ok=q
i=A.c(s.createChannelMerger(2))
j.p1!==$&&A.bc()
j.p1=i
r=A.c(s.createGain())
A.c(r.gain).value=0.5
j.p2!==$&&A.bc()
j.p2=r
A.H(p.connect(q))
A.H(i.connect(A.c(s.destination)))
j.fQ()},
fQ(){var s,r=this,q=r.ok
q===$&&A.u()
q.disconnect()
s=r.p2
s===$&&A.u()
s.disconnect()
if(r.p3){A.H(q.connect(s,0))
A.H(q.connect(s,1))
q=r.p1
q===$&&A.u()
A.H(s.connect(q,0,0))
A.H(s.connect(q,0,1))}else{s=r.p1
s===$&&A.u()
A.H(q.connect(s,0,0))
A.H(q.connect(s,1,1))}},
cQ(){var s=this.a
if(A.x(s.state)==="suspended")A.c(s.resume())},
de(a){var s,r,q=this
if(B.c.Y(a,"vo-")){s=q.y
s===$&&A.u()
return s}if(a==="clock-tick"||a==="clock-chime"||a==="clock-cuckoo"||a==="clock-bell"||a==="range-settle"||a==="cellar-drip"||a==="cistern-settle"||a==="window-wind"||a==="house-creak"||a==="timber-creak"||a==="pipe-tick"||B.c.Y(a,"weather-interior-")||a==="weather-window-rattle"){s=q.f
s===$&&A.u()
return s}r=B.mv.h(0,a)
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
ld(){var s,r,q,p,o,n,m,l=this.a,k=A.a4(l.sampleRate),j=B.b.ao(k*2),i=A.c(l.createBuffer(2,j,k))
for(l=this.ay,s=0;s<2;++s){r=new Float32Array(j)
for(q=0,p=0;p<j;++p){o=p/j
q+=(l.aG()*2-1-q)*0.28
n=Math.pow(1-o,2.2)
m=Math.exp(-3*o)
if(!(p<j))return A.e(r,p)
r[p]=q*n*m}i.copyToChannel(r,s)}return i},
dQ(a,b){var s,r,q,p=this,o=p.at.h(0,a)
if(o==null)return!1
s=p.a
r=A.c(s.createBufferSource())
r.buffer=o
A.c(r.playbackRate).value=0.94+p.ay.aG()*0.12
q=A.c(s.createGain())
A.c(q.gain).value=b
A.H(r.connect(q))
A.H(q.connect(p.de(a)))
r.onended=A.Z(new A.oX(r,q))
r.start()
return!0},
iZ(a){return this.dQ(a,1)},
pl(a,b,c,d,e){var s,r,q,p,o=this.at.h(0,a)
if(o==null)return
s=this.a
r=A.c(s.createBufferSource())
r.buffer=o
A.c(r.playbackRate).value=d
q=A.c(s.createGain())
A.c(q.gain).value=c
p=A.c(s.createStereoPanner())
A.c(p.pan).value=B.b.n(e,-1,1)
A.H(r.connect(q))
A.H(q.connect(p))
A.H(p.connect(this.de(a)))
r.onended=A.Z(new A.oW(r,q,p))
r.start(A.a4(s.currentTime)+B.b.n(b,0,120))},
mC(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.Eh.a(a5)
s=A.n(t.N,t.bo)
for(r=a5.length,q=0;q<a5.length;a5.length===r||(0,A.r)(a5),++q){p=a5[q]
s.k(0,p.a[3],p)}r=a4.ax
o=A.v(r).i("ag<1>")
o=A.J(new A.ag(r,o),o.i("t.E"))
n=o.length
q=0
for(;q<o.length;o.length===n||(0,A.r)(o),++q){m=o[q]
if(!s.M(m))a4.es(m)}for(s=new A.ae(s,s.r,s.e,s.$ti.i("ae<2>")),o=a4.a,n=a4.at,l=a4.z;s.m();){k=s.d.a
j=n.h(0,k[0])
if(j==null){if(r.M(k[3]))a4.es(k[3])
continue}i=r.h(0,k[3])
if(i!=null&&i.r!==k[0])a4.es(k[3])
h=k[3]
g=r.h(0,h)
if(g==null){f=k[0]
e=k[6]
d=k[5]
c=A.c(o.createBufferSource())
c.buffer=j
c.loop=!0
b=A.c(o.createGain())
A.c(b.gain).value=0
a=A.c(o.createBiquadFilter())
a.type="highpass"
A.c(a.frequency).value=20
a0=A.c(o.createBiquadFilter())
a0.type="lowpass"
A.c(a0.frequency).value=2e4
A.H(c.connect(a))
A.H(a.connect(a0))
A.H(a0.connect(b))
a1=A.c(o.createStereoPanner())
A.c(a1.pan).value=e
a2=A.c(o.createGain())
A.c(a2.gain).value=d
A.H(b.connect(a1))
A.H(a1.connect(a4.de(f)))
A.H(b.connect(a2))
l===$&&A.u()
A.H(a2.connect(l))
c.start()
g=new A.k4(c,b,a,a0,a1,a2,f)
r.k(0,h,g)}a3=A.a4(o.currentTime)
h=g.b
A.c(A.c(h.gain).cancelScheduledValues(a3))
A.c(A.c(h.gain).setValueAtTime(A.a4(A.c(h.gain).value),a3))
f=a3+0.12
A.c(A.c(h.gain).linearRampToValueAtTime(B.b.n(k[1],0,1),f))
h=g.d
A.c(A.c(h.frequency).cancelScheduledValues(a3))
A.c(A.c(h.frequency).setValueAtTime(A.a4(A.c(h.frequency).value),a3))
A.c(A.c(h.frequency).linearRampToValueAtTime(B.b.n(k[4],80,2e4),f))
h=g.c
A.c(A.c(h.frequency).cancelScheduledValues(a3))
A.c(A.c(h.frequency).setValueAtTime(A.a4(A.c(h.frequency).value),a3))
A.c(A.c(h.frequency).linearRampToValueAtTime(B.b.n(k[2],20,16e3),f))
h=g.e
A.c(A.c(h.pan).cancelScheduledValues(a3))
A.c(A.c(h.pan).setValueAtTime(A.a4(A.c(h.pan).value),a3))
A.c(A.c(h.pan).linearRampToValueAtTime(B.b.n(k[6],-1,1),f))
h=g.f
A.c(A.c(h.gain).cancelScheduledValues(a3))
A.c(A.c(h.gain).setValueAtTime(A.a4(A.c(h.gain).value),a3))
A.c(A.c(h.gain).linearRampToValueAtTime(B.b.n(k[5],0,1),f))}},
es(a){var s,r,q=this.ax.aa(0,a)
if(q==null)return
s=A.a4(this.a.currentTime)
r=q.b
A.c(A.c(r.gain).cancelScheduledValues(s))
A.c(A.c(r.gain).setValueAtTime(A.a4(A.c(r.gain).value),s))
A.c(A.c(r.gain).linearRampToValueAtTime(0,s+0.18))
A.Cz(B.h5,q.gnQ())},
j_(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l,k,j=this,i=j.at.h(0,a)
if(i==null)return
s=j.a
r=A.c(s.createBufferSource())
r.buffer=i
A.c(r.playbackRate).value=d*(0.94+j.ay.aG()*0.12)
q=A.c(s.createGain())
A.c(q.gain).value=c
p=A.c(s.createPanner())
p.panningModel="HRTF"
p.distanceModel="inverse"
p.refDistance=1
p.rolloffFactor=1
p.maxDistance=40
p.coneInnerAngle=360
A.c(p.positionX).value=b.a
A.c(p.positionY).value=b.b
A.c(p.positionZ).value=b.c
o=A.c(s.createBiquadFilter())
o.type="lowpass"
A.c(o.frequency).value=2e4
n=A.c(s.createGain())
A.c(n.gain).value=1
m=h==null?0:h
if(g!=null&&f!=null){A.c(o.frequency).value=f
A.c(n.gain).value=Math.pow(10,g/20)}else{s=j.ch!=null
if(s){s=j.ch
s.toString
l=j.h2(j.b.iX(e,s))
k=l.c
A.c(o.frequency).value=l.b
A.c(n.gain).value=Math.pow(10,l.a/20)
m=k}}j.cx.k(0,o,new A.hX(r,q,n,o,p,e,B.b.n(m,0,1)))
r.onended=A.Z(new A.oV(j,o))
A.H(r.connect(q))
A.H(q.connect(n))
A.H(n.connect(o))
A.H(o.connect(p))
A.H(p.connect(j.de(a)))
r.start()},
pk(a,b,c,d){return this.j_(a,b,c,1,d,null,null,null)},
h2(a){var s,r,q,p,o,n,m,l
t.Es.a(a)
for(s=a.length,r=0,q=2e4,p=0,o=0;o<s;++o){n=a[o]
m=n.ax&&!n.ay&&!n.z
l=1-p
if(m){r+=-6
q=Math.min(q,4000)
p=1-l*0.8200000000000001}else{r+=-12
q=Math.min(q,800)
p=1-l*0.44999999999999996}}if(s===0){r=0
q=2e4}return new A.aJ(r,q,p)},
fH(a){var s,r,q,p,o=this
if(o.cy)return
s=o.at.h(0,a)
if(s==null)return
o.cy=!0
r=o.a
q=A.c(r.createBufferSource())
q.buffer=s
q.loop=!0
p=A.c(r.createGain())
A.c(p.gain).value=0.6
A.H(q.connect(p))
r=o.e
r===$&&A.u()
A.H(p.connect(r))
q.onended=A.Z(new A.oY(o,q,p))
q.start()
o.db=q},
e1(a){if(this.p3===a)return
this.p3=a
this.fQ()},
jD(a){var s,r,q=this
q.e1(a.b===B.cA)
switch(a.c.a){case 0:s=1
break
case 1:s=0.9
break
case 2:s=0.72
break
default:s=null}q.p4=s
q.R8=a.d===B.b9?1:0.55
r=q.c
r===$&&A.u()
r=A.c(r.gain)
s=q.k2?0:q.fx*s
r.value=s
s=q.Q
s===$&&A.u()
A.c(s.gain).value=0.35*q.R8},
bD(a,b,c,d,e,f){var s,r,q=this
q.fx=B.b.n(c==null?q.fx:c,0,1)
q.fy=B.b.n(f==null?q.fy:f,0,1)
q.go=B.b.n(b==null?q.go:b,0,1)
q.id=B.b.n(a==null?q.id:a,0,1)
q.k1=B.b.n(d==null?q.k1:d,0,1)
if(e!=null)q.k2=e
s=q.d
s===$&&A.u()
A.c(s.gain).value=0.25*q.go
s=q.r
s===$&&A.u()
A.c(s.gain).value=0.2*q.go
s=q.w
s===$&&A.u()
A.c(s.gain).value=0.4*q.go
s=q.x
s===$&&A.u()
A.c(s.gain).value=0.1*q.go
s=q.f
s===$&&A.u()
A.c(s.gain).value=0.4*q.id
s=q.e
s===$&&A.u()
A.c(s.gain).value=0.12*q.k1
s=q.y
s===$&&A.u()
A.c(s.gain).value=q.fy
s=q.c
s===$&&A.u()
s=A.c(s.gain)
r=q.k2?0:q.fx*q.p4
s.value=r},
fz(a){var s=null
return this.bD(s,s,s,s,a,s)},
jA(a){var s=null
return this.bD(s,s,a,s,s,s)},
jC(a){var s=null
return this.bD(s,s,s,s,s,a)},
jz(a){var s=null
return this.bD(s,a,s,s,s,s)},
jy(a){var s=null
return this.bD(a,s,s,s,s,s)},
jB(a){var s=null
return this.bD(s,s,s,a,s,s)},
jx(a){if(this.ch===a)return
this.ch=a
this.bV()},
bV(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b,g=i.ch
if(g==null)return
for(s=i.cx,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0),r=i.a;s.m();){q=s.d.b
p=q.f
if(p==null)continue
o=i.CW
n=o==null?null:o.cR(p,g)
m=n==null?i.h2(h.iX(p,g)):new A.aJ(n.c,n.d,n.e)
l=A.a4(r.currentTime)
k=Math.pow(10,m.a/20)
o=q.d
A.c(A.c(o.frequency).cancelScheduledValues(l))
A.c(A.c(o.frequency).setValueAtTime(A.a4(A.c(o.frequency).value),l))
j=l+0.08
A.c(A.c(o.frequency).linearRampToValueAtTime(m.b,j))
o=q.c
A.c(A.c(o.gain).cancelScheduledValues(l))
A.c(A.c(o.gain).setValueAtTime(A.a4(A.c(o.gain).value),l))
A.c(A.c(o.gain).linearRampToValueAtTime(k,j))
q.r=B.b.n(m.c,0,1)}}}
A.oU.prototype={
$2(a,b){return Math.max(A.az(a),t.jS.a(b).r)},
$S:58}
A.oT.prototype={
$1(a){return this.jj(t.q.a(a))},
jj(a){var s=0,r=A.aN(t.c),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$$1=A.aO(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=t.m
s=6
return A.a7(A.ax(A.c(A.c(v.G.window).fetch(a.b)),k),$async$$1)
case 6:n=c
s=7
return A.a7(A.ax(A.c(n.arrayBuffer()),t.rV),$async$$1)
case 7:m=c
j=o.a
g=j.at
f=a.a
s=8
return A.a7(A.ax(A.c(j.a.decodeAudioData(m)),k),$async$$1)
case 8:g.k(0,f,c)
q=1
s=5
break
case 3:q=2
h=p.pop()
l=A.am(h)
A.c(v.G.console).warn("audio: "+a.a+" <- "+a.b+" failed: "+A.z(l))
s=5
break
case 2:s=1
break
case 5:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$$1,r)},
$S:73}
A.oX.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()},
$S:1}
A.oW.prototype={
$1(a){this.a.disconnect()
this.b.disconnect()
this.c.disconnect()},
$S:1}
A.oV.prototype={
$1(a){var s=this.a.cx.aa(0,this.b)
if(s!=null){s.a.disconnect()
s.b.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()}},
$S:1}
A.oY.prototype={
$1(a){var s,r=this.b
r.disconnect()
this.c.disconnect()
s=this.a
if(s.db===r){s.db=null
s.cy=!1}},
$S:1}
A.hX.prototype={}
A.k4.prototype={
X(){var s=this,r=s.a
r.stop()
r.disconnect()
s.c.disconnect()
s.d.disconnect()
s.e.disconnect()
s.f.disconnect()
s.b.disconnect()}}
A.kH.prototype={
C(){return"AudioCategory."+this.b}}
A.oJ.prototype={
kd(a,b,c,d,e,f,g,h){if(this.a.length===0||this.c.length===0||this.d.length===0)throw A.b(B.j4)
if(!B.a.a8(A.d([d.a,d.b,d.c],t.n),new A.oK()))throw A.b(B.hT)},
gF(){return this.a}}
A.oK.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.od.prototype={
ka(a,b){if(this.a.length===0)throw A.b(B.hC)
if(!B.a.a8(A.d([a.a,a.b,a.c],t.n),new A.oe()))throw A.b(B.i0)}}
A.oe.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.ik.prototype={
B(){var s=t.n
if(B.a.R(A.d([-1.5,-12,-28,2e4,1100,320,0,0.55,1],s),new A.of()))throw A.b(B.iq)
s=B.a.R(A.d([0,0.55,1],s),new A.og())
if(s)throw A.b(B.iQ)},
cR(a,b){this.B()
if(a.ax&&!a.ay&&!a.z)return new A.aJ(-1.5,2e4,0)
if(a.ay)return new A.aJ(-28,320,1)
return new A.aJ(-12,1100,0.55)},
pU(a){return this.cR(a,null)}}
A.of.prototype={
$1(a){return!isFinite(A.az(a))},
$S:4}
A.og.prototype={
$1(a){A.az(a)
return a<0||a>1},
$S:4}
A.oF.prototype={
kc(a){var s=A.v(a)
if(new A.ag(a,s.i("ag<1>")).R(0,new A.oH())||new A.an(a,s.i("an<2>")).R(0,new A.oI()))throw A.b(B.j_)}}
A.oH.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.oI.prototype={
$1(a){var s
t.a.a(a)
s=J.aW(a)
return s.gN(a)||s.R(a,new A.oG())},
$S:74}
A.oG.prototype={
$1(a){return A.x(a).length===0},
$S:3}
A.zU.prototype={}
A.oR.prototype={}
A.oL.prototype={
ke(a,b,c){var s
for(s=this.b.gan(),s=s.gA(s);s.m();)s.gp().B()},
jc(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t.gG.a(a1)
s=this.a.e
if(s.h(0,a)==null)throw A.b(A.i("audio source room missing: "+a))
if(s.h(0,a0)==null)throw A.b(A.i("audio listener room missing: "+a0))
r=this.m1(a,a0)
s=t.s
q=A.d([],s)
p=A.d([],s)
for(o=r.a,n=o.length,m=this.b,l=0,k=2e4,j=0,i=0;i<o.length;o.length===n||(0,A.r)(o),++i){h=o[i]
g=h.a
f=m.h(0,g)
if(f==null)f=B.cI
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
c=p.length===0?"unobstructed":B.a.a0(p,"; ")
b=t.N
s=A.ad(s,b)
b=A.ad(q,b)
if(!isFinite(g)||g<0||g>1)A.h(B.iP)
return new A.oR(s,b,o,m,g,n,c)},
cR(a,b){return this.jc(a,b,B.bN)},
m1(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(a0===a1)return B.ty
s=t.N
r=A.E([a0,0],s,t.i)
q=A.E([a0,B.a8],s,t.Es)
p=A.aR([a0],s)
for(s=this.b,o=this.a,n=o.e,m=t.o,l=p.$ti.c;p.a!==0;){k=A.J(p,l)
B.a.Z(k,new A.oM(r))
j=B.a.ga4(k)
p.aa(0,j)
if(j===a1){s=q.h(0,j)
s.toString
return new A.jz(s,!0)}i=o.aR(j)
h=A.J(i,i.$ti.i("t.E"))
B.a.Z(h,new A.oN())
for(i=h.length,g=0;g<h.length;h.length===i||(0,A.r)(h),++g){f=h[g]
e=f.cL(j)
if(e==null||n.h(0,e)==null)continue
d=s.h(0,f.a)
c=(d==null?B.cI:d).pU(f)
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
p.l(0,e)}}}return B.tx}}
A.oM.prototype={
$2(a,b){var s,r,q
A.x(a)
A.x(b)
s=this.a
r=s.h(0,a)
r.toString
s=s.h(0,b)
s.toString
q=B.b.I(r,s)
return q===0?B.c.I(a,b):q},
$S:75}
A.oN.prototype={
$2(a,b){var s=t.o
return B.c.I(s.a(a).a,s.a(b).a)},
$S:76}
A.jz.prototype={}
A.ha.prototype={}
A.pq.prototype={
iQ(a,b,c){var s,r,q,p=this
if(c<-1.5607963267948965)s=-1.5607963267948965
else s=c>1.5607963267948965?1.5607963267948965:c
r=Math.cos(s)
q=new A.a(Math.sin(b)*r,Math.sin(s),Math.cos(b)*r)
p.b=q
q=$.Fa().b8(q).ga5()
p.d=q
p.c=p.b.b8(q).ga5()
p.a=a}}
A.q8.prototype={}
A.ly.prototype={
dV(a){if(this.at)return
A.rn(a,"requestPointerLock",t.X)},
fu(a){var s,r,q,p,o,n,m,l
t.Bx.a(a)
for(s=this.CW,r=s.a,r=new A.c1(r,r.r,r.e,A.v(r).i("c1<1>")),q=t.N;r.m();){p=r.d
o=a.h(0,p)
if(o==null)continue
n=A.a1(q)
for(m=J.P(o);m.m();){l=m.gp()
if(l.length!==0)n.l(0,l)}s.pw(p,n)}this.b4()},
e4(a){var s,r,q,p,o,n,m=this
if(m.ch.e4(a))for(s=m.CW.aV("interact"),r=s.length,q=m.c,p=m.r,o=0;o<r;++o){n=s[o]
if(q.q(0,n)){m.d.l(0,n)
break}if(m.e.q(0,n)&&!p.q(0,n)){m.f.l(0,n)
break}}},
pm(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="interact",d=t.Cf,c=d.a(A.c(f.a.navigator).getGamepads())
c=J.P(t.ik.b(c)?c:new A.bf(c,A.C(c).i("bf<1,ak?>")))
for(;;){if(!c.m()){s=null
break}A:{r=c.gp()
if(r==null||!A.U(r.connected)||A.x(r.mapping)!=="standard")break A
c=A.x(r.id)
q=A.x(r.mapping)
p=t.n
o=A.d([],p)
n=d.a(r.axes)
n=J.P(t.dd.b(n)?n:new A.bf(n,A.C(n).i("bf<1,y>")))
while(n.m())o.push(n.gp())
p=A.d([],p)
d=d.a(r.buttons)
d=J.P(t.nx.b(d)?d:new A.bf(d,A.C(d).i("bf<1,ak>")))
while(d.m()){r=d.gp()
p.push(A.U(r.pressed)?1:A.a4(r.value))}s=new A.mu(!0,c,q,o,p)
break}}d=s==null
m=A.HX(d?B.rg:s)
l=m.d
c=f.CW
r=t.Q
q=r.a(f.e)
k=B.a.R(c.aV(e),q.gaJ(q))
q=f.r
q.l9(A.v(q).i("l(1)").a(new A.rf(l)),!0)
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
if(!B.a.R(c.aV(e),l.gaJ(l))){d=r.a(f.c)
d=!B.a.R(c.aV(e),d.gaJ(d))}}if(d)i.f2()},
ls(a){var s=this
A.c(a)
if(A.U(a.repeat))return
if(!s.ay)return
if(s.c.l(0,A.x(a.code)))if(B.a.q(s.CW.aV("interact"),A.x(a.code))){if(s.ch.f1())s.d.l(0,A.x(a.code))}else s.d.l(0,A.x(a.code))},
lu(a){var s,r,q="interact"
A.c(a)
s=this.c
s.aa(0,A.x(a.code))
r=this.CW
if(B.a.q(r.aV(q),A.x(a.code))){t.Q.a(s)
s=!B.a.R(r.aV(q),s.gaJ(s))}else s=!1
if(s)this.ch.f2()},
ly(a){var s,r=this
A.c(a)
if(!r.ay)return
s="Mouse"+A.j(a.button)
if(r.c.l(0,s))if(B.a.q(r.CW.aV("interact"),s)){if(r.ch.f1())r.d.l(0,s)}else r.d.l(0,s)},
lC(a){var s,r="interact",q="Mouse"+A.j(A.c(a).button),p=this.c
p.aa(0,q)
s=this.CW
if(B.a.q(s.aV(r),q)){t.Q.a(p)
p=!B.a.R(s.aV(r),p.gaJ(p))}else p=!1
if(p)this.ch.f2()},
lE(a){var s
A.c(a)
if(!this.ay)return
s=A.a4(a.deltaY)<0?"WheelUp":"WheelDown"
this.c.l(0,s)
this.d.l(0,s)},
lA(a){var s=this
A.c(a)
if(!s.at||!s.ay)return
s.Q=s.Q+s.ho(a,"movementX")
s.as=s.as+s.ho(a,"movementY")},
lw(a){var s=this,r=s.b.pointerLockElement==null
s.at=!r
s.as=s.Q=0
if(r)s.b4()},
lG(a){this.b4()},
ho(a,b){var s=A.Ds(a[b])
if(s==null)s=null
return s==null?0:s},
d7(a){var s,r,q,p,o,n=this
if(!n.ay)return!1
s=A.fq(n.c,t.N)
for(r=n.e,r=A.eW(r,r.r,A.v(r).c),q=n.r,p=r.$ti.c;r.m();){o=r.d
if(o==null)o=p.a(o)
if(!q.q(0,o))s.l(0,o)}t.Q.a(s)
return B.a.R(n.CW.aV(a),s.gaJ(s))},
b4(){var s=this
s.c.S(0)
s.d.S(0)
s.f.S(0)
s.r.K(0,s.e)
s.as=s.Q=0
s.ch.f9()}}
A.rf.prototype={
$1(a){return!this.a.q(0,A.x(a))},
$S:3}
A.re.prototype={
aV(a){var s=this.a.h(0,a)
return s==null?B.o:s},
pw(a,b){var s,r,q,p,o,n
t.yT.a(b)
s=this.a
if(!s.M(a))return
r=t.N
q=A.a1(r)
for(p=A.eW(b,b.r,A.v(b).c),o=p.$ti.c;p.m();){n=p.d
if(n==null)n=o.a(n)
if(n.length!==0)q.l(0,n)}s.k(0,a,A.ad(q,r))},
bx(a,b){var s,r,q
t.Q.a(b)
for(s=this.aV(a),r=s.length,q=0;q<r;++q)if(b.aa(0,s[q]))return!0
return!1}}
A.ri.prototype={
f1(){var s=this
if(s.b)return!1
s.b=!0
s.c=!1
s.d=0
return!s.a},
f2(){this.c=this.b=!1
this.d=0},
e4(a){var s,r=this
if(!r.a||!r.b||r.c)return!1
s=r.d+B.b.n(a,0,0.25)
r.d=s
if(s<0.35)return!1
return r.c=!0},
f9(){this.c=this.b=!1
this.d=0}}
A.be.prototype={
gF(){return this.a}}
A.rD.prototype={}
A.rA.prototype={
pq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.AQ
h.a(b)
h.a(c)
h=t.S
s=A.a1(h)
r=A.J(b,t.je)
B.a.K(r,c)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p].a
if(!s.l(0,o))throw A.b(A.p("light IDs must be unique per ranking pass: "+o,null))}r=t.jC
n=A.d([],r)
m=A.d([],r)
l=A.d([],r)
k=A.d([],r)
j=A.n(h,t.N)
i.he(n,i.d,a,b,i.a,j,m)
i.he(l,i.e,a,c,i.b,j,k)
return new A.rD(n,l,j)},
he(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k=t.AQ
k.a(d)
t.oG.a(b)
k.a(a)
k.a(g)
t.eU.a(f)
k=A.C(d)
s=k.i("G<1,+effectiveScore,light,score(y,be,y)>")
r=A.J(new A.G(d,k.i("+effectiveScore,light,score(y,be,y)(1)").a(new A.rB(this,c,b)),s),s.i("a0.E"))
B.a.Z(r,new A.rC())
q=A.a1(t.S)
for(k="Exceeded maximum capacity ("+e+")",s=this.f,p=0;p<r.length;++p){o=r[p]
n=p<e&&o.c>0.01
m=o.b
l=m.a
if(n){B.a.l(a,m)
q.l(0,l)
s.k(0,l,o.c)}else{B.a.l(g,m)
f.k(0,l,p>=e?k:"Importance score below threshold")}}b.S(0)
b.K(0,q)}}
A.rB.prototype={
$1(a){var s,r
t.je.a(a)
s=a.c.a_(0,this.b).gu(0)
r=a.e*a.f*(1/(1+0.1*s+0.05*s*s))
return new A.jS(this.c.q(0,a.a)?r*1.15:r,a,r)},
$S:78}
A.rC.prototype={
$2(a,b){var s,r=t.tK
r.a(a)
r.a(b)
s=B.b.I(b.a,a.a)
return s===0?B.d.I(a.b.a,b.b.a):s},
$S:79}
A.pN.prototype={
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
A.rJ.prototype={
jV(a,b,c){var s,r=this
if(!r.e){s=r.a
s.a=a
s.b=0
r.e=!0}else if(Math.abs(a-b)>1.5){s=r.a
s.a=b
s.b=0
return b}return r.a.ew(b,c)},
mu(a,b){var s,r,q=this
if(b<=0.01||a<=0){q.b=0
return new A.a(0,0,0)}s=q.b=q.b+11.309733552923255*a
if(s>6283.185307179586)s=q.b=B.b.P(s,6.283185307179586)
r=Math.sin(s)
return new A.a(Math.cos(q.b*0.5)*0.012*b,r*0.025*b,0)}}
A.dl.prototype={
C(){return"MaterialFamily."+this.b}}
A.bg.prototype={
D(){var s=this
return A.E(["id",s.a,"family",s.b.b,"textureKey",s.c,"tint",A.d([s.d,s.e,s.f],t.n),"roughness",s.r,"metallic",s.w,"emissive",0,"alpha",s.y,"uvScale",1],t.N,t.z)},
gF(){return this.a}}
A.rN.prototype={
aI(a){var s,r=a.a,q=!1
if(r.length!==0)if(a.c.length!==0)if(isFinite(a.d))if(isFinite(a.e))if(isFinite(a.f)){s=a.r
if(isFinite(s))if(s>=0)if(s<=1){s=a.w
if(isFinite(s))if(s>=0)if(s<=1)if(isFinite(0)){s=a.y
if(isFinite(s))if(s>=0)if(s<=1)q=isFinite(1)}}}if(!q)throw A.b(A.i("Invalid material descriptor "+r))
q=this.a
if(q.M(r))throw A.b(A.i("Duplicate material descriptor "+r))
q.k(0,r,a)}}
A.e3.prototype={
cO(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.b,k=m.a,j=k.length
if(l+84>j){s=new Float32Array(j*2)
B.n.cX(s,0,l,k)
m.a=s}r=b.a_(0,a).b8(d.a_(0,a)).ga5()
q=(e>>>16&255)/255
p=(e>>>8&255)/255
o=(e&255)/255
n=g?0.6000000000000001:0
l=A.jp(m.a,m.b,a,r,q,p,o,n,f,0,0,0)
m.b=l
l=A.jp(m.a,l,b,r,q,p,o,n,f,1,0,0)
m.b=l
l=A.jp(m.a,l,c,r,q,p,o,n,f,1,1,0)
m.b=l
l=A.jp(m.a,l,a,r,q,p,o,n,f,0,0,0)
m.b=l
l=A.jp(m.a,l,c,r,q,p,o,n,f,1,1,0)
m.b=l
m.b=A.jp(m.a,l,d,r,q,p,o,n,f,0,1,0)},
bM(a,b,c,d,e){return this.cO(a,b,c,d,e,1,!1)},
j1(a,b,c,d,e,f){return this.cO(a,b,c,d,e,f,!1)}}
A.a.prototype={
T(a,b){return new A.a(this.a+b.a,this.b+b.b,this.c+b.c)},
a_(a,b){return new A.a(this.a-b.a,this.b-b.b,this.c-b.c)},
a6(a,b){return new A.a(this.a*b,this.b*b,this.c*b)},
bj(a){return this.a*a.a+this.b*a.b+this.c*a.c},
b8(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.a(s*r-q*p,q*o-n*r,n*p-s*o)},
gu(a){var s=this.a,r=this.b,q=this.c
return Math.sqrt(s*s+r*r+q*q)},
ga5(){var s=this,r=s.gu(0)
return r<1e-9?new A.a(0,0,0):new A.a(s.a/r,s.b/r,s.c/r)}}
A.w3.prototype={
B(){var s,r=this,q=r.b,p=r.e,o=r.f,n=r.r,m=r.x,l=r.y,k=r.as,j=r.at,i=r.ax,h=r.ay,g=r.ch
if(B.a.R(A.d([q,r.c,r.d,p,o,n,r.w,m,l,k,j,i,h,g],t.n),new A.w4()))throw A.b(B.hu)
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
if(q)throw A.b(B.hB)}}
A.w4.prototype={
$1(a){return!isFinite(A.az(a))},
$S:4}
A.cE.prototype={
B(){var s,r,q,p,o,n=this
if(n.a.length===0||n.c.length===0)throw A.b(B.ix)
s=n.d
r=n.e
q=n.f
p=n.r
o=n.w
if(!B.a.a8(A.d([s,r,q,p,o],t.n),new A.w5()))throw A.b(B.hZ)
if(s<0||r<=0||q>=r||p>1||o<0||o>1)throw A.b(B.iY)},
gF(){return this.a}}
A.w5.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.eS.prototype={
B(){var s,r,q,p=this,o=!0
if(p.a.length!==0)if(p.b.length!==0){o=p.c
s=p.d
r=p.e
q=p.f
o=!B.a.a8(A.d([o,s,r,q],t.n),new A.w0())||o<0||s<0||r<=0||q<-1||q>1}if(o)throw A.b(B.hL)},
gF(){return this.a}}
A.w0.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.w1.prototype={
B(){var s,r,q,p,o,n,m,l=this,k=A.a1(t.N)
for(s=l.a,r=s.length,q=0;q<r;++q){p=s[q]
p.B()
if(!k.l(0,p.a))throw A.b(B.iD)}for(s=l.b,r=s.length,q=0;q<r;++q){o=s[q]
o.B()
if(!k.l(0,o.a))throw A.b(B.iE)}s=l.c
r=l.d
n=l.e
m=l.f
if(!B.a.a8(A.d([s,r,n,m],t.n),new A.w2())||s<0||s>1||r<=0||n<0||n>1||m<0||m>1)throw A.b(B.hR)}}
A.w2.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.w_.prototype={
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
if(l>0.001&&a5.a!==B.x){i=a5.a
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
i=i===B.af?80:120
B.a.l(j,new A.cE("exterior-precipitation",g,h,n,i,0,m*(0.35+0.45*s),!0))}if(k>0.001)B.a.l(j,new A.cE("exterior-wind","weather-wind",B.b.n(k*(0.26+0.74*p),0,1),700+9200*s+1800*k,35,0,m*0.8,!0))
f=B.b.n(a5.x*(0.22+0.78*l),0,1)
if(f>0.001)B.a.l(j,new A.cE("through-wall-thunder","weather-thunder-bed",B.b.n(f*(0.16+0.34*q)*(1-0.55*s),0,1),420+1800*p,24,0,m,!0))
i=a5.a
e=i===B.a0||i===B.ae
d=B.b.n(a5.ay*l,0,1)
if(e&&d>0.001)B.a.l(j,new A.cE("structure-hail-impact","weather-hail-roof",B.b.n(d*(0.16+0.38*o)*(0.35+0.65*r),0,1),760+1500*p,48,0,m*0.92,!0))
c=B.b.n(k*f*(1-0.72*s)*(0.3+0.7*r),0,1)
if(c>0.01)B.a.l(j,new A.cE("window-frame-resonance","weather-window-rattle",c*0.22,1800+1600*c,45,0,m*0.65,!0))
if(s>0.03&&l>0.08)B.a.l(j,new A.cE("interior-window-drip","weather-interior-drip",B.b.n(l*s*(0.35+0.65*k),0,1)*0.34,7200,180,0,m,!0))
i=a5.ax
b=B.b.n(i*0.75+B.b.n((a5.d+5)/25,0,1)*0.25,0,1)
if(i>0.02){B.a.l(j,new A.cE("interior-warmth","weather-interior-warmth",0.08*i,900,35,0,0.12,!0))
B.a.l(j,new A.cE("interior-coffee-roomtone","weather-interior-coffee",0.018*i*(0.55+0.45*o),2600,110,0,0.24*m,!0))}a=A.d([],t.wb)
a0=B.d.ah(a5.CW,30)
if(a0!==a4.b){a4.b=a0
o=a5.cx
a1=a4.df(o,a0,17)*2-1
h=a4.df(o,a0,23)
g=a0>0
if(g&&e&&d>0.12&&(a0&1)===0)B.a.l(a,new A.eS("hail-impact-"+a0,"weather-hail-tick",0,B.b.n(0.08+d*0.24,0,1),0.92+h*0.16,a1))
if(g&&c>0.2&&B.d.P(a0,3)===0)B.a.l(a,new A.eS("window-rattle-"+a0,"weather-window-tick",0,B.b.n(0.035+c*0.12,0,1),0.94+a4.df(o,a0,31)*0.12,a1*0.55))
if(g&&i>0.5&&B.d.P(a0,15)===0)B.a.l(a,new A.eS("coffee-clink-"+a0,"weather-coffee-clink",0,0.025+i*0.035,0.98+a4.df(o,a0,43)*0.08,a1*0.25))}if(a5.Q&&a5.z!==a4.a){o=a4.a=a5.z
a2=Math.max(1,a5.y)
i=Math.pow(1+a2/1200,0.8)
h=B.d.P((a5.cx^o)>>>0,200)
g=a2<900?"weather-thunder-crack":"weather-thunder-roll"
B.a.l(a,new A.eS("lightning-thunder-"+o,g,a2/343,B.b.n((0.34+0.66/i)*(0.45+0.55*f),0,1),B.b.n(0.94+B.d.P(o,11)*0.012,0.88,1.08),B.b.n((h-100)/100,-1,1)))}a3=new A.w1(A.ad(j,t.uz),A.ad(a,t.EI),p,n,m,b)
a3.B()
return a3},
df(a,b,c){var s=a^b*73244475^c*668265261
s=((s^s>>>16)>>>0)*73244475
return((s^s>>>16)&2147483647)/2147483647}}
A.mu.prototype={
gF(){return this.b}}
A.mV.prototype={}
A.pj.prototype={
q7(a){var s,r,q,p,o,n=B.f.a3(a.D(),null)
this.a.ib(n)
s=A.c(A.c(v.G.window).localStorage)
r=A.as(s.getItem("quarantine.save.active"))
q=A.as(s.getItem("quarantine.save.previous"))
try{if(r!=null)s.setItem("quarantine.save.previous",r)
s.setItem("quarantine.save.active",n)}catch(p){try{if(r==null)s.removeItem("quarantine.save.active")
else s.setItem("quarantine.save.active",r)
if(q==null)s.removeItem("quarantine.save.previous")
else s.setItem("quarantine.save.previous",q)}catch(o){}throw p}},
pr(a){var s,r,q,p,o,n
t.wK.a(a)
try{s=A.c(A.c(v.G.window).localStorage)
r=A.as(s.getItem("quarantine.save.active"))
q=A.as(s.getItem("quarantine.save.previous"))
p=this.h7(r,a)
if(p!=null)return new A.fC(p,null)
o=this.h7(q,a)
if(o!=null)return new A.fC(o,"recovered previous save")
if(r==null)return B.qq
return B.qp}catch(n){return B.qo}},
h7(a,b){var s,r,q
t.wK.a(b)
if(a==null)return null
try{s=this.a.ib(a)
r=b.$1(s)
r=r?s:null
return r}catch(q){if(A.am(q) instanceof A.B)return null
else throw q}}}
A.l9.prototype={
kh(a,b,c,d,e){if(this.a.length===0)throw A.b(B.iJ)
if(this.b<0)throw A.b(B.hU)},
D(){var s,r=this,q=r.d
q=q==null?null:A.ad(q,t.i)
s=t.z
return A.aZ(A.E(["kind",r.a,"sequence",r.b,"roomId",null,"position",q,"selectionSeed",r.e],s,s),t.N,s)}}
A.cv.prototype={
C(){return"EndingKind."+this.b}}
A.pW.prototype={
gaE(){return this.a}}
A.hm.prototype={
D(){var s=t.N
return A.E(["kind",this.a.b],s,s)}}
A.pZ.prototype={
$1(a){return t.yW.a(a).b===this.a.h(0,"kind")},
$S:80}
A.bN.prototype={}
A.m3.prototype={
D(){var s,r=this,q=t.N,p=A.n(q,t.z)
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
ov(a){var s,r=this.a
if(a.e.h(0,r)==null)return!1
s=this.b.a_(0,new A.a(0,1.3499999999999999,0))
return!new A.kQ(s,s.T(0,new A.a(0,1.2000000000000002,0))).dL(a,r)}}
A.tM.prototype={
D(){return A.xp(this.a)}}
A.hJ.prototype={
D(){return A.E(["version",this.a,"run",this.b,"meta",this.c],t.N,t.z)}}
A.ui.prototype={
ib(a){var s,r,q,p,o,n,m,l=B.f.am(a,null),k=t.f
if(!k.b(l))throw A.b(B.j2)
s=t.N
r=t.z
q=A.b5(l,s,r)
p=q.h(0,"version")
if(A.b7(p))o=p!==1&&p!==2
else o=!0
if(o)A.h(A.M("unsupported save version "+A.z(p),null,null))
n=q.h(0,"run")
m=q.h(0,"meta")
if(!k.b(n)||!k.b(m))A.h(B.i7)
k=A.b5(n,s,r)
return A.Cq(A.b5(m,s,r),k,2)}}
A.fC.prototype={}
A.dM.prototype={
C(){return"GameSessionEventType."+this.b}}
A.lo.prototype={
gaE(){return this.c},
gb0(){return this.d}}
A.ql.prototype={
gaE(){return this.a},
gb0(){return this.b}}
A.qk.prototype={
gak(){var s=this.d
return new A.ql(s.a,s.b,this.e.b.a)},
gj0(){var s,r,q,p,o,n,m=this,l=m.d,k=t.N
l=A.E(["day",l.a,"hour",l.b],k,t.fY)
s=m.f
r=t.K
s=A.E(["hoursRemaining",s.c,"gasRemaining",s.d,"rationCoupons",s.e,"rationCollectedToday",s.f],k,r)
q=A.E(["entryCount",m.e.b.a],k,t.S)
p=A.BQ(m.c).D()
o=m.r
n=o.c
return new A.tM(A.xp(A.E(["calendar",l,"economy",s,"journal",q,"house",p,"features",A.E(["recordAccuracy",1-n,"complianceFloorTripped",o.d,"isolationElevatesExposure",n>=0.5],k,r),"narrative",m.z.D()],k,t.z)))},
mz(a,b){if(!B.a.R(a.f,new A.qm(b)))return!1
this.z.mx(a,b)
return!0},
my(a){var s,r,q,p,o=a.a,n="event."+o,m=this.z
if(m.oj(n))return!1
m=m.b
m.k(0,n,"true")
s=a.b
m.k(0,n+".consumer",s)
m.k(0,"last-authored-event",o)
if(s==="aftermath")m.k(0,"aftermath."+o,"placed")
for(o=a.x,s=o.length,r=0;r<s;++r){q=o[r]
p=B.c.bK(q,"=")
if(p<=0||p===q.length-1)continue
m.k(0,B.c.L(q,0,p),B.c.aT(q,p+1))}return!0},
of(a){var s,r,q,p,o,n,m,l,k,j=this.z.c,i=j.h(0,a)
if(i!=null)return i
s=this.e.b
r=A.v(s).i("an<2>")
q=A.J(new A.an(s,r),r.i("t.E"))
B.a.Z(q,new A.qn())
if(q.length===0)return null
s=A.C(q)
r=s.i("F<1>")
p=A.J(new A.F(q,s.i("l(1)").a(new A.qo()),r),r.i("t.E"))
o=p.length!==0?p:q
n=(this.b^5370206)>>>0
for(s=new A.dI(a),r=t.sU,s=new A.ao(s,s.gu(0),r.i("ao<a5.E>")),r=r.i("a5.E");s.m();){m=s.d
if(m==null)m=r.a(m)
n=n*31+m&2147483647}l=o[B.d.P(n,o.length)]
s=l.c
k=new A.db(a,l.a,s.length-1,B.a.gac(s).t(0))
j.k(0,a,k)
return k},
mt(a){var s,r,q,p,o,n
if(!isFinite(a)||a<0)throw A.b(A.a8(a,"elapsedSeconds","must be finite and non-negative"))
if(a===0)return
s=this.d
r=s.c
q=s.b
p=(24-q)*(r/24)
o=p>0.000001?p-0.000001:0
n=a<o?a:o
if(n>0){s.b=Math.min(q+n*(24/r),23.999999)
this.dc(B.jg)}if(n<a)this.dc(B.jh)},
jY(a,b){var s=this.f
if(s.c<a||s.d<b)return!1
return s.e3(a)&&s.jX(b)},
ps(a){var s,r,q,p,o
t.D0.a(a)
for(s=a.length,r=this.r,q=this.z.b,p=0;p<s;++p){o=a[p]
if(o.a===B.eN){r.c=Math.min(1,r.c+0.1)
q.k(0,"ignored."+o.b+"."+o.c,"true")}}},
jU(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.r,i=k.e,h=t.S
A.FM(j,A.ad(i.d,h).length)
if(a===B.et)j.b=Math.min(1,j.b+0.2)
s=k.c
r=s.b
q=A.C(r)
A.FL(j,new A.F(r,q.i("l(1)").a(new A.qp(k)),q.i("F<1>")).gu(0))
r=k.f
q=r.b
if(B.a.q(B.kH,q.a)&&!r.f)j.c=Math.min(1,j.c+0.05)
p=k.d
o=p.a
n=B.b.ao(j.a/1*3)
B.a.l(r.r,new A.hL(q.a,a,b))
m=r.a
A.FX(m,q.a,n,k.b,A.ad(m.d,h));++q.a
q.fE(7)
r.c=16
r.d=6
r.f=!1
m.jG(B.lw)
s.y.n3(o,c)
l=B.b.ao(j.b/1*6)
if(l>0)r.e3(l)
h=!1
if(!j.d)if(p.a>=15)if(1-j.c<=0){i=i.b
i=!new A.an(i,A.v(i).i("an<2>")).R(0,new A.qq())}else i=h
else i=h
else i=h
if(i){j.d=!0
k.dc(B.jl)}j.a=Math.max(0,j.a-0.5)
j.b=Math.max(0,j.b-0.1)
j.c=Math.max(0,j.c-0.05)
k.dc(B.jk)},
hu(a,b){var s,r=this;++r.y
s=r.d
B.a.l(r.w,new A.lo(s.a,s.b))
B.a.l(r.x,A.FN(A.J6(a),r.b,r.y-1))},
dc(a){return this.hu(a,null)}}
A.qm.prototype={
$1(a){return t.Y.a(a).a===this.a.a},
$S:14}
A.qn.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:18}
A.qo.prototype={
$1(a){return t.g.a(a).c.length>1},
$S:30}
A.qp.prototype={
$1(a){t.V.a(a)
return a.e.length!==0&&!new A.vc().jR(this.a.c,a.a)},
$S:13}
A.qq.prototype={
$1(a){return t.g.a(a).e},
$S:30}
A.bY.prototype={
gF(){return this.a}}
A.or.prototype={
$1(a){var s
t.Dd.a(a)
s=a.b
return s>=-0.01&&s+a.d<=this.a.a+0.01},
$S:32}
A.os.prototype={
$2(a,b){var s=t.Dd
return B.b.I(s.a(a).b,s.a(b).b)},
$S:33}
A.kB.prototype={
gF(){return this.a}}
A.ow.prototype={
jk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
$.ks()
s=$.EH().pi(a)
r=A.d([],t.lE)
for(q=s.a.gan(),q=q.gA(q);q.m();){p=q.gp()
for(o=p.w,p=p.a,n="arch:"+p+":",m=0;m<o.length;++m){l=o[m]
k=l.b
j=B.mp.h(0,k)
if(j==null)A.h(A.i("HouseModelCatalog: Unknown 3D model id ["+k+"]"))
i=new A.bZ(new Float32Array(10752))
h=j.f*0.5
g=j.r
f=j.w*0.5
e=this.kN(j.Q)
k=-h
d=-f
i.v(new A.a(k,0,d),new A.a(h,g,f),e)
i.v(new A.a(k*0.85,g*0.9,d*0.85),new A.a(h*0.85,g,f*0.85),(B.b.aj(B.b.n((e>>>16&255)*1.2,0,255))<<16|B.b.aj(B.b.n((e>>>8&255)*1.2,0,255))<<8|B.b.aj(B.b.n((e&255)*1.2,0,255)))>>>0)
d=i.a
c=new Float32Array(d.subarray(0,A.nP(0,i.b,d.length)))
this.m2(j)
d=j.a
B.a.l(r,new A.kB(n+d+":"+m,p,l.d,l.e,new A.a(1,1,1),c))}}return r},
kN(a){var s
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
m2(a){var s,r=a.Q
A:{s="polyhaven-rough-wood"
if("roof"===r){s="polyhaven-roof-slates"
break A}if("cellar"===r){s="polyhaven-damp-brick"
break A}if("attic"===r)break A
break A}return s}}
A.lm.prototype={}
A.bw.prototype={
C(){return"FunctionalZone."+this.b}}
A.ac.prototype={
geI(){return new A.a(1,1,1)},
D(){var s=this,r=s.d,q=t.n
return A.E(["instanceId",s.a,"modelId",s.b,"roomId",s.c,"worldPosition",A.d([r.a,r.b,r.c],q),"rotationYDegrees",s.e,"scale",A.d([s.geI().a,s.geI().b,s.geI().c],q),"zone",s.r.b,"collisionRadius",s.w,"collisionHeight",s.x,"interactiveTag",s.y,"canonicalPropId",s.z],t.N,t.z)}}
A.bo.prototype={
D(){var s,r=this,q=r.r,p=A.C(q),o=p.i("G<1,f>")
q=A.J(new A.G(q,p.i("f(1)").a(new A.ue()),o),o.i("a0.E"))
p=r.w
o=A.C(p)
s=o.i("G<1,V<f,@>>")
p=A.J(new A.G(p,o.i("V<f,@>(1)").a(new A.uf()),s),s.i("a0.E"))
return A.E(["roomId",r.a,"displayName",r.b,"architecturalStyle",r.c,"pbrWall",r.d,"pbrFloor",r.e,"pbrCeiling",r.f,"zones",q,"modelInstances",p,"builtInFeatures",r.x],t.N,t.z)}}
A.ue.prototype={
$1(a){return t.jI.a(a).b},
$S:87}
A.uf.prototype={
$1(a){return t.oz.a(a).D()},
$S:88}
A.ot.prototype={
gmw(){var s=this.a.gan(),r=A.v(s),q=r.i("fh<t.E,ac>")
s=A.J(new A.fh(s,r.i("t<ac>(t.E)").a(new A.ou()),q),q.i("t.E"))
s.$flags=1
return s},
D(){var s=this.b,r=t.N
return A.E(["isValid",s.length===0,"validationErrors",s,"rooms",this.a.bn(0,new A.ov(),r,t.P),"totalModelInstances",this.gmw().length],r,t.z)}}
A.ou.prototype={
$1(a){return t.lW.a(a).w},
$S:89}
A.ov.prototype={
$2(a,b){return new A.O(A.x(a),t.lW.a(b).D(),t.fq)},
$S:90}
A.qP.prototype={
pi(a){var s,r,q,p,o,n=this,m=t.N,l=t.lW,k=A.n(m,l),j=A.d([],t.s)
for(s=a.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
k.k(0,p.a,n.lK(a,p))}k.k(0,"attic",n.ph(a))
k.k(0,"roof",n.pj(a))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=k.h(0,p.a)
if(o==null)continue
n.mk(a,p,o,j)}return new A.ot(A.aZ(k,m,l),A.ad(j,m))},
lK(a1,a2){var s,r,q,p,o,n,m,l,k,j,i=null,h="polyhaven.desk-lamp-arm-01",g="polyhaven-decrepit-wallpaper",f="polyhaven-diagonal-parquet",e="polyhaven-ceiling-interior",d="polyhaven-dirty-carpet",c="polyhaven-damaged-plaster",b="polyhaven-brown-floor-tiles",a="kenney.cardboard-box",a0=a2.a
switch(a0){case"hall":s=a2.d
r=s.a
q=s.b
p=s.c
return new A.bo(a0,"Entrance Hall & Vestibule","Late Victorian / 80s Refurbished Entrance Hall",g,f,e,B.kP,A.d([new A.ac("hall.coat-rack-01","kenney.coat-rack",a0,new A.a(r+0.45,q,p+0.55),45,B.J,0.25,1.85,"hall.coat-rack","hall.coat-hooks"),new A.ac("hall.console-lamp-01",h,a0,new A.a(r+0.35,q+0.75,p+2.5),90,B.J,0.15,0.48,"hall.entry-light",i)],t.L),B.m4)
case"living-room":s=a2.d
o=a1.a1(a2)
r=s.a
q=s.b
p=q+0.65
n=s.c
m=o.c
l=n+m-0.75
return new A.bo(a0,"Living Room & Hearth","80s Domestic Parlor with Dark Wood Wainscoting","polyhaven-dark-paneled-wood",d,e,B.lM,A.d([new A.ac("living-room.crt-tv-01","polyhaven.television-01",a0,new A.a(r+0.85,p,l),-35,B.bi,0.32,0.46,"living-room.tv-broadcast","living_room.wireless-set"),new A.ac("living-room.coffee-table-01","polyhaven.coffee-table-01",a0,new A.a(r+o.a*0.45,q,n+m*0.42),0,B.d5,0.6,0.45,"living-room.coffee-table","living_room.occasionalTable"),new A.ac("living-room.reading-lamp-01",h,a0,new A.a(r+1.45,p,l),15,B.bi,0.15,0.48,"living-room.lamp-reading",i),new A.ac("living-room.bookcase-01","kenney.bookcase",a0,new A.a(r+0.4,q,n+1.8),90,B.p,0.45,1.8,"living-room.bookcase",i)],t.L),B.la)
case"kitchen":return new A.bo(a0,"Kitchen & Scullery","Domestic Galley Kitchen with Ceramic Retro Tiling",c,b,e,B.m_,B.bF,B.lI)
case"cellar":s=a2.d
o=a1.a1(a2)
r=s.a
q=s.b
p=s.c
n=p+0.9
m=q+0.14
l=o.c
k=p+l-0.75
j=o.a
return new A.bo(a0,"Cellar & Utility Vault","Below-Grade Brick Service Vault with Exposed Joists",c,b,"ceiling-pipes",B.ks,A.d([new A.ac("cellar.box-stack-01",a,a0,new A.a(r+0.9,q,n),12,B.p,0.28,0.4,"cellar.archive-box-1","cellar.preserving-jars"),new A.ac("cellar.box-stack-02",a,a0,new A.a(r+1.45,q,n),-8,B.p,0.28,0.4,"cellar.archive-box-2",i),new A.ac("cellar.wine-barrel-01","polyhaven.wine-barrel-01",a0,new A.a(r+2.45,m,k),15,B.p,0.38,0.94,"cellar.wine-barrel",i),new A.ac("cellar.utility-barrel-01","kenney.barrel",a0,new A.a(r+2.95,m,k),0,B.p,0.35,0.8,"cellar.utility-barrel",i),new A.ac("cellar.storage-crate-01","polyhaven.wooden-crate-01",a0,new A.a(r+1.15,q,p+1.45),5,B.p,0.35,0.48,"cellar.produce-crate",i),new A.ac("cellar.sump-bucket-01","kenney.bucket",a0,new A.a(r+j*0.55+0.35,q,p+l*0.55),0,B.K,0.2,0.35,"cellar.sump-bucket",i),new A.ac("cellar.inspection-lantern-01","polyhaven.lantern-01",a0,new A.a(r+j*0.35+0.15,q+1.25,p+0.3),20,B.K,0.15,0.38,"cellar.lantern",i)],t.L),B.kz)
case"bedroom":s=a2.d
r=s.a+a1.a1(a2).a*0.42
q=s.b
p=s.c+1.6
n=r+1.25
return new A.bo(a0,"Master Bedroom","Suburban 80s Master Bedroom with Wall Plaster & Carpet",g,d,e,B.kG,A.d([new A.ac("bedroom.master-bed-01","kenney.bed-double",a0,new A.a(r,q,p),0,B.aS,1.05,0.9,"bedroom.bed","bedroom.bedstead"),new A.ac("bedroom.nightstand-01","kenney.bedside-table",a0,new A.a(n,q,p),0,B.aS,0.3,0.6,"bedroom.nightstand",i),new A.ac("bedroom.alarm-clock-01","polyhaven.alarm-clock-01",a0,new A.a(n,q+0.6,p),-20,B.aS,0.1,0.16,"bedroom.alarm-clock",i)],t.L),B.mh)
case"landing":return new A.bo(a0,"First Floor Landing","Upper Circulation Gallery",g,f,e,B.dt,B.bF,B.kq)
case"bathroom":s=a2.d
r=s.a
q=s.b
p=s.c
n=p+1.25
return new A.bo(a0,"Family Bathroom","Ceramic Tiled 80s Wet Room & Sanitary Suite",b,b,e,B.kQ,A.d([new A.ac("bathroom.bathtub-01","kenney.bathtub",a0,new A.a(r+0.65,q,p+a1.a1(a2).c-1.15),0,B.aR,0.85,0.6,"bathroom.bath","bathroom.cast-iron-bath"),new A.ac("bathroom.sink-01","kenney.bathroom-sink",a0,new A.a(r+0.5,q,n),90,B.aR,0.35,0.85,"bathroom.sink","bathroom.pedestal-basin"),new A.ac("bathroom.mirror-01","kenney.bathroom-mirror",a0,new A.a(r+0.1,q+1.25,n),90,B.aR,0.25,0.7,"bathroom.mirror",i)],t.L),B.kr)
case"spare-room":s=a2.d
o=a1.a1(a2)
r=s.a
q=r+1.2
p=s.b
n=s.c
m=n+1.1
return new A.bo(a0,"Quarantine Study & Archive Room","Repurposed Isolation Study with Distressed Plaster",c,d,e,B.ku,A.d([new A.ac("spare-room.work-desk-01","kenney.desk",a0,new A.a(q,p,m),0,B.aT,0.65,0.75,"spare-room.desk",i),new A.ac("spare-room.desk-chair-01","kenney.desk-chair",a0,new A.a(q,p,n+1.65),180,B.aT,0.35,0.85,"spare-room.chair",i),new A.ac("spare-room.crt-monitor-01","kenney.computer-screen",a0,new A.a(q,p+0.75,m),0,B.aT,0.22,0.38,"spare-room.computer",i),new A.ac("spare-room.archive-box-01",a,a0,new A.a(r+o.a-0.75,p,n+o.c-0.75),-15,B.p,0.28,0.4,"spare-room.archive-box","spareRoom.paper-archive-box")],t.L),B.ml)
default:return new A.bo(a0,a0,"Generic Architectural Interior",g,f,e,B.dt,B.bF,B.kE)}},
ph(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="attic",e=a.b,d=A.C(e),c=d.i("l(1)").a(new A.qQ())
for(e=B.a.gA(e),d=new A.R(e,c,d.i("R<1>")),s=1/0,r=-1/0,q=1/0,p=-1/0,o=0;d.m();){c=e.gp()
n=a.a1(c)
c=c.d
m=c.a
if(m<s)s=m
l=m+n.a
if(l>r)r=l
k=c.c
if(k<q)q=k
j=k+n.c
if(j>p)p=j
i=c.b+n.b
if(i>o)o=i}h=(q+p)*0.5
e=h+0.3
return new A.bo(f,"Attic & Roof Loft","Timber Framed Rafter Loft with Cold Water Storage","polyhaven-damaged-plaster","floor-wood","polyhaven-roof-slates",B.kR,A.d([new A.ac("attic.loft-ladder-01","polyhaven.wooden-ladder",f,new A.a(s+2.2,o,h-0.4),-15,B.K,0.28,2.35,"attic.ladder",g),new A.ac("attic.storage-crate-01","polyhaven.wooden-crate-01",f,new A.a(s+1.2,o,e),10,B.p,0.35,0.48,"attic.wooden-crate",g),new A.ac("attic.travel-chest-01","kenney.chest",f,new A.a(s+2.8,o,e),-5,B.p,0.4,0.5,"attic.chest",g),new A.ac("attic.archive-box-01","kenney.cardboard-box",f,new A.a(r-1.8,o,h-0.3),25,B.p,0.28,0.4,"attic.archive-box",g),new A.ac("attic.storm-lantern-01","polyhaven.lantern-01",f,new A.a(s+1.8,o,h),0,B.K,0.15,0.38,"attic.lantern",g)],t.L),B.mg)},
pj(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g="kenney.detail-pipe",f="roof",e="polyhaven-roof-slates",d=a.b,c=A.C(d),b=c.i("l(1)").a(new A.qR())
for(d=B.a.gA(d),c=new A.R(d,b,c.i("R<1>")),s=1/0,r=-1/0,q=1/0,p=-1/0,o=0;c.m();){b=d.gp()
n=a.a1(b)
b=b.d
m=b.a
if(m<s)s=m
l=m+n.a
if(l>r)r=l
k=b.c
if(k<q)q=k
j=k+n.c
if(j>p)p=j
i=b.b+n.b
if(i>o)o=i}d=o*0.5
return new A.bo(f,"Exterior Slate Roof & Chimney Stacks","Late Victorian Dual-Pitch Gabled Slate Roof",e,e,e,B.kS,A.d([new A.ac("roof.downpipe-nw-01",g,f,new A.a(s-0.4,d,q-0.4),0,B.K,0.15,1,h,h),new A.ac("roof.downpipe-se-01",g,f,new A.a(r+0.4,d,p+0.4),0,B.K,0.15,1,h,h)],t.L),B.lV)},
mk(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.a.a(a8)
s=a6.d
r=a5.a1(a6)
for(q=a6.a,p=a5.aR(q),o=J.P(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>")),n=a7.w,m="Portal collision hazard in ["+q+"]: Model [",l=s.a,k=l+r.a,j=s.b,i=s.c,h=i+r.c;p.m();){g=o.gp()
f=g.aY(q)
e=g.aQ(q)
switch(f.a){case 0:d=new A.a(l+e,j,i)
break
case 2:d=new A.a(l+e,j,h)
break
case 3:d=new A.a(l,j,i+e)
break
case 1:d=new A.a(k,j,i+e)
break
default:d=null}for(c=n.length,b=d.a,d=d.c,g=g.a,a=0;a<n.length;n.length===c||(0,A.r)(n),++a){a0=n[a]
a1=a0.d
a2=a1.a-b
a3=a1.c-d
a4=Math.sqrt(a2*a2+a3*a3)
if(a4<0.7&&a0.w>0.2)B.a.l(a8,m+a0.b+"] at "+a1.t(0)+" is within "+A.z(a4)+" m of portal "+g)}}for(p=n.length,o=j-0.05,q="Floor datum violation in ["+q+"]: Model [",j=A.z(j),a=0;a<n.length;n.length===p||(0,A.r)(n),++a){a0=n[a]
m=a0.d.b
if(m<o)B.a.l(a8,q+a0.b+"] is below floor datum (y="+A.z(m)+" < "+j+")")}}}
A.qQ.prototype={
$1(a){return t.V.a(a).b.b==="first"},
$S:13}
A.qR.prototype={
$1(a){return t.V.a(a).b.b==="first"},
$S:13}
A.iU.prototype={
C(){return"ModelSource."+this.b}}
A.iT.prototype={
C(){return"ModelFormat."+this.b}}
A.aw.prototype={
gF(){return this.a}}
A.bZ.prototype={
o4(a){var s,r,q=this.b,p=q+a,o=this.a,n=o.length
if(p>n){s=n*2
while(s<p)s*=2
r=new Float32Array(s)
B.n.cX(r,0,q,o)
this.a=r}},
cM(a,b,c,d,e,f,g,h,i,j,k,a0){var s,r,q,p,o,n,m,l=this
l.o4(84)
s=h==null?b.a_(0,a).b8(d.a_(0,a)).ga5():h
r=(e>>>16&255)/255
q=(e>>>8&255)/255
p=(e&255)/255
o=A.il(l.a,l.b,a,s,r,q,p,0,f,i,k,g)
l.b=o
n=i+j
o=A.il(l.a,o,b,s,r,q,p,0,f,n,k,g)
l.b=o
m=k+a0
o=A.il(l.a,o,c,s,r,q,p,0,f,n,m,g)
l.b=o
o=A.il(l.a,o,a,s,r,q,p,0,f,i,k,g)
l.b=o
n=A.il(l.a,o,c,s,r,q,p,0,f,n,m,g)
l.b=n
l.b=A.il(l.a,n,d,s,r,q,p,0,f,i,m,g)},
c9(a,b,c,d,e,f,g,h,i){return this.cM(a,b,c,d,e,f,g,null,0,h,0,i)},
cN(a,b,c,d,e,f){return this.cM(a,b,c,d,e,1,0,f,0,1,0,1)},
c8(a,b,c,d,e,f,g){return this.cM(a,b,c,d,e,1,0,null,0,f,0,g)},
j2(a,b,c,d,e,f,g,h){return this.cM(a,b,c,d,e,1,0,f,0,g,0,h)},
pp(a,b,c,d,e,f,g,h,i,j){return this.cM(a,b,c,d,e,1,0,f,g,h,i,j)},
ex(a,b,c,d){var s=this,r=a.a,q=a.b,p=a.c,o=b.a,n=b.b,m=b.c
s.c9(new A.a(r,n,p),new A.a(r,n,m),new A.a(o,n,m),new A.a(o,n,p),c,d,0,1,1)
s.c9(new A.a(r,q,m),new A.a(r,q,p),new A.a(o,q,p),new A.a(o,q,m),c,d,0,1,1)
s.c9(new A.a(o,q,p),new A.a(r,q,p),new A.a(r,n,p),new A.a(o,n,p),c,d,0,1,1)
s.c9(new A.a(r,q,m),new A.a(o,q,m),new A.a(o,n,m),new A.a(r,n,m),c,d,0,1,1)
s.c9(new A.a(r,q,p),new A.a(r,q,m),new A.a(r,n,m),new A.a(r,n,p),c,d,0,1,1)
s.c9(new A.a(o,q,m),new A.a(o,q,p),new A.a(o,n,p),new A.a(o,n,m),c,d,0,1,1)},
v(a,b,c){return this.ex(a,b,c,1)}}
A.hA.prototype={}
A.tS.prototype={
$1(a){t.Dd.a(a)
return a.r&&a.c<0.1},
$S:32}
A.tT.prototype={
$2(a,b){var s=t.Dd
return B.b.I(s.a(a).b,s.a(b).b)},
$S:33}
A.uc.prototype={
mR(b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=5782060,a5=2368550,a6=new A.bZ(new Float32Array(10752)),a7=b0.b,a8=A.C(a7),a9=a8.i("l(1)").a(new A.ud())
if(!new A.F(a7,a9,a8.i("F<1>")).gA(0).m())return new Float32Array(0)
for(a7=B.a.gA(a7),a8=new A.R(a7,a9,a8.i("R<1>")),s=1/0,r=-1/0,q=1/0,p=-1/0,o=0;a8.m();){a9=a7.gp()
n=b0.a1(a9)
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
b=A.ra("polyhaven-roof-slates")
a7=b.c
a8=b.e
a9=(r-s)/a8
a=h-o
a8=a/a8
a6.c8(new A.a(g,o,e),new A.a(f,o,e),new A.a(f,h,c),new A.a(g,h,c),a7,a9,a8)
a6.c8(new A.a(g,h,c),new A.a(f,h,c),new A.a(f,o,d),new A.a(g,o,d),a7,a9,a8)
a8=g-0.05
a9=f+0.05
a6.v(new A.a(a8,h-0.05,c-0.12),new A.a(a9,h+0.1,c+0.12),9062454)
a7=o-0.18
a0=e-0.04
a1=o+0.02
a6.v(new A.a(g,a7,a0),new A.a(f,a1,e),4074786)
a2=d+0.04
a6.v(new A.a(g,a7,d),new A.a(f,a1,a2),4074786)
a=o+a*0.5
a6.v(new A.a(s,o,q),new A.a(s+0.28,a,p),a4)
a6.v(new A.a(r-0.28,o,q),new A.a(r,a,p),a4)
a3=c-0.35
a=h+0.8
this.fT(a6,s+1.8,a,a3,a4,11031098)
this.fT(a6,r-2.4,a,a3,a4,11031098)
a=o-0.08
a6.v(new A.a(a8,a,e-0.12),new A.a(a9,a1,a0),a5)
a6.v(new A.a(a8,a,a2),new A.a(a9,a1,d+0.12),a5)
a1=o-0.05
a6.v(new A.a(g-0.02,0,e-0.1),new A.a(g+0.08,a1,e-0.02),a5)
a6.v(new A.a(f-0.08,0,d+0.02),new A.a(f+0.02,a1,d+0.1),a5)
return B.n.ag(a6.a,0,a6.b)},
fT(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=b+0.85,i=d+0.65
a.v(new A.a(b,c-1.4,d),new A.a(j,c,i),e)
a.v(new A.a(b-0.08,c-1.45,d-0.08),new A.a(j+0.08,c-1.35,i+0.08),5133660)
s=c+0.12
a.v(new A.a(b-0.06,c,d-0.06),new A.a(j+0.06,s,i+0.06),4074786)
for(j=[0.22,0.63],i=d+0.325,r=i-0.1,q=c+0.72,p=i+0.1,o=c+0.62,n=i-0.12,m=c+0.7,i+=0.12,l=0;l<2;++l){k=b+j[l]
a.v(new A.a(k-0.1,s,r),new A.a(k+0.1,q,p),f)
a.v(new A.a(k-0.12,o,n),new A.a(k+0.12,m,i),f)}}}
A.ud.prototype={
$1(a){return t.V.a(a).b.b==="first"},
$S:13}
A.wi.prototype={
$3(a,b,c){var s,r=this
switch(r.a.a){case 0:s=r.b.d
s=new A.a(s.a+a,s.b+b,s.c+c)
break
case 2:s=r.b.d
s=new A.a(s.a+a,s.b+b,s.c+r.c.c-c)
break
case 1:s=r.b.d
s=new A.a(s.a+r.c.a-c,s.b+b,s.c+a)
break
case 3:s=r.b.d
s=new A.a(s.a+c,s.b+b,s.c+a)
break
default:s=null}return s},
$S:91}
A.wh.prototype={
$8$alpha(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=this.a,k=l.$3(a,b,c),j=l.$3(d,e,f)
l=k.a
s=j.a
r=Math.min(l,s)
q=k.b
p=j.b
o=Math.min(q,p)
n=k.c
m=j.c
this.b.ex(new A.a(r,o,Math.min(n,m)),new A.a(Math.max(l,s),Math.max(q,p),Math.max(n,m)),g,h)},
$7(a,b,c,d,e,f,g){return this.$8$alpha(a,b,c,d,e,f,g,1)},
$S:92}
A.kI.prototype={
fk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.r,a=A.C(b),a0=a.i("f(1)")
a=a.i("G<1,f>")
A.kr(new A.G(b,a0.a(new A.p6()),a),"level")
s=d.w
r=A.C(s)
q=r.i("f(1)")
r=r.i("G<1,f>")
A.kr(new A.G(s,q.a(new A.p7()),r),"room")
p=d.x
o=A.C(p)
A.kr(new A.G(p,o.i("f(1)").a(new A.p8()),o.i("G<1,f>")),"portal")
o=d.y
n=A.C(o)
A.kr(new A.G(o,n.i("f(1)").a(new A.p9()),n.i("G<1,f>")),"stair")
m=new A.G(b,a0.a(new A.pa()),a).be(0)
l=new A.G(s,q.a(new A.pb()),r).be(0)
r=A.n(t.N,t.lT)
for(b=p.length,k=0;k<p.length;p.length===b||(0,A.r)(p),++k){j=p[k]
r.k(0,j.a,j)}i=d.f
if(i!=null){b=i.a
if(!l.q(0,b))throw A.b(A.M("residence.roomId references unknown room "+b,c,c))
b=i.d
if(b!=null&&!r.M(b))throw A.b(A.M("residence.returnPortalId references unknown portal "+b,c,c))
b=i.c
if(b!=null&&b.length===0)throw A.b(B.hG)}for(b=s.length,k=0;k<s.length;s.length===b||(0,A.r)(s),++k){h=s[k]
a=h.b
if(!m.q(0,a))throw A.b(A.M("rooms."+h.a+".floor references unknown level "+a,c,c))
a=h.e
a0=A.C(a)
q=h.a
A.kr(new A.G(a,a0.i("f(1)").a(new A.pc()),a0.i("G<1,f>")),"window in "+q)
a0=h.f
A.kr(a0,"portal reference in "+q)
for(a=a0.length,g=0;g<a0.length;a0.length===a||(0,A.r)(a0),++g){f=a0[g]
j=r.h(0,f)
if(j==null)throw A.b(A.M("rooms."+q+".portalIds references unknown portal "+f,c,c))
if(!(j.b===q||j.c===q))throw A.b(A.M("rooms."+q+".portalIds references "+f+", which does not touch the room",c,c))}}for(b=p.length,k=0;k<p.length;p.length===b||(0,A.r)(p),++k){j=p[k]
a=j.b
if(a!=="outside"&&!l.q(0,a))throw A.b(A.M("portals."+j.a+".a references "+a,c,c))
a0=j.c
if(a0!=="outside"&&!l.q(0,a0))throw A.b(A.M("portals."+j.a+".b references "+a0,c,c))
if(a===a0)throw A.b(A.M("portals."+j.a+" has identical endpoints",c,c))}for(b=o.length,k=0;k<o.length;o.length===b||(0,A.r)(o),++k){e=o[k]
a=e.b
j=r.h(0,a)
if(j==null)throw A.b(A.M("stairs."+e.a+".portalId references unknown portal "+a,c,c))
if(!j.z)throw A.b(A.M("stairs."+e.a+".portalId "+a+" is not marked stair",c,c))}},
fj(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=" width mismatch: ",a0=" height mismatch: ",a1=b.a
if(a1!=="quarantine-house-main")throw A.b(A.i("unexpected authored house "+a1))
a1=b.b
if(a1!=="lib/house/house.dart")throw A.b(A.i("authored house source changed: "+a1))
if(b.c!=="provisional-visible-place")throw A.b(A.i("authored house presentation scope must remain provisional-visible-place"))
if(b.d!=="external-story-data")throw A.b(A.i("authored house story authority must remain external-story-data"))
a1=b.w
s=a1.length
if(s!==a2.b.length||b.x.length!==a2.c.length)throw A.b(A.i("authored/runtime room or portal count mismatch"))
for(r=t.fW,q=a2.e,p=0;p<a1.length;a1.length===s||(0,A.r)(a1),++p){o=a1[p]
n=o.a
m=q.h(0,n)
if(m==null)throw A.b(A.i("authored room missing at runtime: "+n))
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
if(k!==j.length)throw A.b(A.i("window count mismatch for "+n))
for(n=A.C(j),i=n.i("l(1)"),n=n.i("F<1>"),f=0;f<l.length;l.length===k||(0,A.r)(l),++f){e=l[f]
d=A.bP(new A.F(j,i.a(new A.p5(e)),n),r)
if(d==null)throw A.b(A.i("authored window missing: "+e.a))
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
if(m==null)throw A.b(A.i("authored portal missing: "+q))
if(m.b!==o.b||m.c!==o.c)throw A.b(A.i("portal endpoints mismatch for "+q))
n=o.w
l=m.w
if(Math.abs(n-l)>0.0001)A.h(A.i(q+a+A.z(n)+" != "+A.z(l)))
n=o.x
l=m.x
if(Math.abs(n-l)>0.0001)A.h(A.i(q+a0+A.z(n)+" != "+A.z(l)))
if(o.y!=m.at)throw A.b(A.i("door model mismatch for "+q))}a1=b.y
s=a2.d
if(a1.length!==s.length||B.a.gbq(a1).b!==B.a.gbq(s).b)throw A.b(A.i("stair manifest mismatch"))}}
A.p_.prototype={
$1(a){var s=A.i9(a,"level"),r=A.bO(s,"id")
A.bO(s,"kind")
A.f4(s,"floorY")
return new A.er(r)},
$S:93}
A.p0.prototype={
$1(a){return A.Ft(a,this.a)},
$S:94}
A.p1.prototype={
$1(a){var s=this.a,r=A.i9(a,"portal"),q=A.bO(r,"id"),p=A.bO(r,"a"),o=A.bO(r,"b"),n=A.AB(r,"facingA"),m=A.AB(r,"facingB"),l=A.f4(r,"offsetA"),k=A.f4(r,"offsetB"),j=A.f4(r,"width"),i=A.f4(r,"height"),h=typeof r.h(0,"doorKit")=="string"?A.x(r.h(0,"doorKit")):null
return new A.es(q,p,o,n,m,l*s,k*s,j*s,i*s,h,J.ab(r.h(0,"stair"),!0),J.ab(r.h(0,"exterior"),!0),!J.ab(r.h(0,"open"),!1),J.ab(r.h(0,"sticks"),!0))},
$S:95}
A.p2.prototype={
$1(a){var s="landingHeights",r="lowerEye",q="upperEye",p=A.i9(a,"stair")
return new A.eu(A.bO(p,"id"),A.bO(p,"portalId"),A.JS(p.h(0,s),s),A.o_(p.h(0,"min"),"min"),A.o_(p.h(0,"max"),"max"),A.o_(p.h(0,r),r),A.o_(p.h(0,q),q))},
$S:96}
A.p3.prototype={
$1(a){return typeof a=="string"?a:A.eh("exterior cell")},
$S:34}
A.p6.prototype={
$1(a){return t.mD.a(a).a},
$S:56}
A.p7.prototype={
$1(a){return t.bJ.a(a).a},
$S:36}
A.p8.prototype={
$1(a){return t.lT.a(a).a},
$S:100}
A.p9.prototype={
$1(a){return t.gI.a(a).a},
$S:101}
A.pa.prototype={
$1(a){return t.mD.a(a).a},
$S:56}
A.pb.prototype={
$1(a){return t.bJ.a(a).a},
$S:36}
A.pc.prototype={
$1(a){return t.ya.a(a).a},
$S:102}
A.p5.prototype={
$1(a){return t.fW.a(a).a===this.a.a},
$S:16}
A.pd.prototype={}
A.yS.prototype={
$1(a){var s
A:{if("ground"===a){s=B.hd
break A}if("first"===a){s=B.he
break A}s=B.hf
break A}return s},
$S:104}
A.er.prototype={
gF(){return this.a}}
A.et.prototype={
gF(){return this.a}}
A.pe.prototype={
$1(a){var s=this.a,r=A.i9(a,"window")
return new A.ev(A.bO(r,"id"),A.AB(r,"facing"),A.f4(r,"offset")*s,A.f4(r,"sill")*s,A.f4(r,"width")*s,A.f4(r,"height")*s,J.ab(r.h(0,"frosted"),!0))},
$S:105}
A.pf.prototype={
$1(a){return typeof a=="string"?a:A.eh("portal id")},
$S:34}
A.ev.prototype={
gF(){return this.a}}
A.es.prototype={
gF(){return this.a}}
A.eu.prototype={
gF(){return this.a}}
A.yr.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.yN.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.oC.prototype={
mN(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=4731940,a8=new A.bZ(new Float32Array(10752)),a9=b2.b,b0=A.C(a9),b1=b0.i("l(1)").a(new A.oD())
if(!new A.F(a9,b1,b0.i("F<1>")).gA(0).m())return new Float32Array(0)
for(a9=B.a.gA(a9),b0=new A.R(a9,b1,b0.i("R<1>")),s=1/0,r=-1/0,q=1/0,p=-1/0,o=0;b0.m();){b1=a9.gp()
n=b2.a1(b1)
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
a8.v(new A.a(a9,o,b0),new A.a(b1,o+0.03,f),7230010)
e=o+0.1
a8.v(new A.a(a9,o,q+0.4),new A.a(b1,e,b0-0.05),11444308)
a8.v(new A.a(a9,o,f+0.05),new A.a(b1,e,p-0.4),11444308)
for(d=s+0.6,a9=r-0.4,b0=q+0.2,b1=p-0.2,c=o+1.9,f=c-0.08,e=g-1.2,b=g+1.2;d<a9;d+=0.85){a=d-0.04
a0=d+0.04
a8.v(new A.a(a,o,b0),new A.a(a0,h,g),a7)
a8.v(new A.a(a,o,b1),new A.a(a0,h,g),a7)
if(c<h)a8.v(new A.a(a,f,e),new A.a(a0,c,b),a7)}a8.v(new A.a(s,h-0.15,g-0.05),new A.a(r,h,g+0.05),a7)
a1=b2.e.h(0,"landing")
if(a1!=null){a2=b2.a1(a1)
a9=a1.d
a3=a9.a+a2.a*0.4
a4=a9.c+a2.c*0.4
a8.v(new A.a(a3-0.05,o,a4-0.05),new A.a(a3+0.75,o+0.12,a4+0.75),a7)}a5=s+(r-s)*0.65
a6=g+0.35
a9=o+0.18
a8.v(new A.a(a5-0.1,o,a6-0.1),new A.a(a5+1.3,a9,a6+0.9),a7)
b0=a5+1.2
a8.v(new A.a(a5,a9,a6),new A.a(b0,o+0.95,a6+0.8),8291982)
a8.v(new A.a(b0,o+0.82,a6+0.4),new A.a(a5+1.5,o+0.86,a6+0.44),11827770)
return B.n.ag(a8.a,0,a8.b)}}
A.oD.prototype={
$1(a){return t.V.a(a).b.b==="first"},
$S:13}
A.kK.prototype={
bw(a,b,c,d){var s,r,q,p=4084313,o=c.d,n=o.a,m=o.b,l=o.c
o=m+1.2
s=n+d.a
r=m+1.25
a.v(new A.a(n,o,l),new A.a(s,r,l+0.02),p)
q=l+d.c
a.v(new A.a(n,o,q-0.02),new A.a(s,r,q),p)
a.v(new A.a(n,o,l),new A.a(n+0.02,r,q),p)
a.v(new A.a(s-0.02,o,l),new A.a(s,r,q),p)},
bi(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.d,e=f.a,d=f.b,c=f.c,b=e+0.3,a=e+2
f=c+a3.c
s=f-0.85
r=f-0.05
f=d+0.65
a0.v(new A.a(b,d+0.1,s),new A.a(a,f,r),15131868)
a0.v(new A.a(b+0.08,d+0.15,s+0.08),new A.a(a-0.08,d+0.66,r-0.08),12894390)
for(q=[b+0.12,a-0.12],p=s+0.1,o=r-0.1,n=d+0.12,m=0;m<2;++m){l=q[m]
for(k=[p,o],j=l-0.04,i=l+0.04,h=0;h<2;++h){g=k[h]
a0.v(new A.a(j,d,g-0.04),new A.a(i,n,g+0.04),11901256)}}q=(s+r)*0.5
a0.v(new A.a(b+0.1,f,q-0.08),new A.a(b+0.22,d+0.82,q+0.08),11901256)
q=d+a3.b
f=q-0.45
a0.v(new A.a(e,f,c+0.4),new A.a(e+0.35,q-0.1,c+0.95),2763310)
a0.v(new A.a(e+0.14,d+0.8,c+0.65),new A.a(e+0.19,f,c+0.7),10650682)
a0.v(new A.a(e,d,c),new A.a(e+0.24,q,c+0.24),13947078)}}
A.kL.prototype={
bw(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.a_[s]
A.j8(this.bX(b,c,r),a,r,c,d,B.bV)}},
bi(a,b,c,d){var s,r,q,p=c.d,o=p.a,n=p.b,m=p.c,l=m+1.6,k=m+2.8
p=d.a
s=o+p
r=s-0.25
q=n+1.15
a.v(new A.a(r,n,l),new A.a(s,q,k),13683392)
a.v(new A.a(r-0.02,n+0.1,l+0.3),new A.a(r+0.05,n+0.85,k-0.3),2894376)
a.v(new A.a(r-0.06,q,l-0.05),new A.a(s,n+1.22,k+0.05),13683392)
q=n+d.b
a.v(new A.a(o,n,m+0.6),new A.a(o+0.65,q-0.1,m+2.2),4731940)
a.v(new A.a(o+0.3,q-0.32,m+0.04),new A.a(s-0.3,q-0.18,m+0.22),5913640)
p=o+p*0.42
a.v(new A.a(p+1.15,n,m+1.4),new A.a(p+1.65,n+0.58,m+1.85),4731940)}}
A.kR.prototype={
bw(a,b,c,d){var s,r,q=4735550,p=c.d,o=p.a,n=p.b,m=p.c
p=o+d.a
s=n+0.25
a.v(new A.a(o,n,m),new A.a(p,s,m+0.08),q)
r=m+d.c
a.v(new A.a(o,n,r-0.08),new A.a(p,s,r),q)
a.v(new A.a(o,n,m),new A.a(o+0.08,s,r),q)
a.v(new A.a(p-0.08,n,m),new A.a(p,s,r),q)},
bi(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.d,c=d.a,b=d.b,a=d.c,a0=b+a4.b
for(s=a+0.3,d=a4.c,r=a+d,q=r-0.2,p=a0-0.16,o=a4.a,n=c+o;s<q;s+=0.65)a1.v(new A.a(c,p,s-0.05),new A.a(n,a0,s+0.05),4074786)
a1.v(new A.a(c+1.2,a0-0.22,a),new A.a(c+1.25,a0-0.17,r),2763308)
a1.v(new A.a(c+2.8,a0-0.2,a),new A.a(c+2.86,a0-0.14,r),2763308)
m=c+0.1
l=r-1.8
q=m+1.8
p=b+0.85
k=l+0.1
a1.v(new A.a(m,b,l),new A.a(q,p,k),4732971)
a1.v(new A.a(q,b,l),new A.a(m+1.9,p,r),4732971)
a1.v(new A.a(m+0.05,b,k),new A.a(m+1.75,b+0.7,r-0.05),1710620)
k=c+o*0.35
p=a+0.28
a1.v(new A.a(k,b,a),new A.a(k+0.35,a0,p),5782060)
k=c+o*0.7
a1.v(new A.a(k,b,a),new A.a(k+0.35,a0,p),5782060)
j=n-0.45
i=a+0.8
h=a+2.2
for(g=b+0.45,q=a0-0.5;g<q;g+=0.45)a1.v(new A.a(j,g,i),new A.a(n,g+0.05,h),9077884)
f=c+o*0.55
e=a+d*0.55
a1.v(new A.a(f-0.25,b,e-0.25),new A.a(f+0.25,b+0.015,e+0.25),2236964)
d=c+o*0.12
a1.v(new A.a(d,b+1.25,a+0.02),new A.a(d+0.65,b+1.85,a+0.18),2895924)
a1.v(new A.a(c+2.2,b,r-1.2),new A.a(c+3.2,b+0.14,r-0.4),4731426)}}
A.lu.prototype={
bw(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.a_[s]
A.j8(this.bX(b,c,r),a,r,c,d,B.nw)}},
bi(a,b,c,d){var s,r,q,p,o,n,m,l=4336414,k=c.d,j=k.a,i=k.b,h=k.c
a.v(new A.a(j+0.05,i,h+0.8),new A.a(j+0.45,i+2.1,h+1.25),l)
a.v(new A.a(j+0.44,i+1.65,h+0.92),new A.a(j+0.46,i+1.95,h+1.13),11901256)
k=d.a
s=j+k
r=s-0.06
a.v(new A.a(r,i+1.55,h+1.5),new A.a(s-0.02,i+1.68,h+3.2),l)
for(q=h+1.7,s-=0.12,p=i+1.6,o=i+1.66,n=0;n<4;++n){m=q+n*0.4
a.v(new A.a(s,p,m-0.02),new A.a(r,o,m+0.02),11901256)}a.v(new A.a(j+(k-1)*0.5,i+0.005,h+0.6),new A.a(j+(k+1)*0.5,i+0.012,h+d.c-0.6),6824491)
k=j+0.04
a.v(new A.a(k,i,h+2.1),new A.a(j+0.42,i+0.72,h+2.9),l)
s=i+d.b
a.v(new A.a(k,s-0.55,h+0.5),new A.a(j+0.22,s-0.15,h+0.9),2764080)}}
A.lI.prototype={
bi(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=c.d,g=h.a,f=h.b,e=h.c
h=g+d.a
s=h-0.75
r=e+1.2
q=e+2.4
p=f+0.95
a.v(new A.a(s,f,r),new A.a(h,p,q),2236964)
o=s-0.04
n=f+0.15
m=f+0.85
a.v(new A.a(o,n,r+0.1),new A.a(s,m,r+0.6),4078908)
a.v(new A.a(o,n,r+0.65),new A.a(s,m,q-0.1),4078908)
m=f+d.b
a.v(new A.a(s+0.1,p,r+0.15),new A.a(h,m,q-0.15),4472892)
p=f+0.82
a.v(new A.a(g,f,e+0.8),new A.a(g+0.65,p,e+1.8),14539216)
a.v(new A.a(g+0.08,f+0.45,e+0.92),new A.a(g+0.58,f+0.83,e+1.68),9209982)
for(o=e+1.15,n=g+0.04,l=g+0.18,k=f+1.05,j=0;j<2;++j){i=o+j*0.35
a.v(new A.a(n,p,i-0.03),new A.a(l,k,i+0.03),11901256)}a.v(new A.a(g+0.1,f,e),new A.a(g+1.2,m-0.1,e+0.5),6046257)
p=e+d.c
o=f+0.88
a.v(new A.a(g+0.75,f,p-0.65),new A.a(h-0.6,o,p),7230528)
n=g+0.72
h-=0.58
m=f+0.92
a.v(new A.a(n,o,p-0.68),new A.a(h,m,p),12892322)
a.v(new A.a(n,m,p-0.03),new A.a(h,f+1.35,p),14736592)}}
A.lJ.prototype={
bw(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.a_[s]
A.j8(this.bX(b,c,r),a,r,c,d,B.bV)}},
bi(a,b,c,d){var s,r,q,p,o,n,m=4139548,l=c.d,k=l.a,j=l.b,i=l.c,h=i+0.1,g=i+1.6,f=k+0.12
l=j+0.08
a.v(new A.a(f-0.04,j,h),new A.a(f+0.04,l,g),m)
for(s=h+0.05,r=g-0.05,q=f-0.02,p=f+0.02,o=j+0.9;s<r;s+=0.15)a.v(new A.a(q,l,s-0.02),new A.a(p,o,s+0.02),14209734)
a.v(new A.a(f-0.05,o,h-0.02),new A.a(f+0.05,j+0.96,g+0.02),m)
a.v(new A.a(k+0.02,j,i+2.1),new A.a(k+0.08,j+2,i+2.9),m)
n=j+d.b
l=d.a
r=d.c
a.v(new A.a(k+l*0.4,n-0.04,i+r*0.4),new A.a(k+l*0.7,n,i+r*0.7),13157046)}}
A.lL.prototype={
bw(a,b,c,d){var s,r
this.cZ(a,b,c,d)
for(s=0;s<4;++s){r=B.a_[s]
A.j8(this.bX(b,c,r),a,r,c,d,B.bV)}},
bi(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=5519147,h=13157048,g=a1.d,f=g.a,e=g.b,d=g.c,c=f+1.4,b=f+3
g=a2.c
s=d+g
r=s-0.45
q=e+a2.b
a.v(new A.a(c,e,r),new A.a(b,q,s),7892064)
p=e+0.05
a.v(new A.a(c-0.2,e,r-0.5),new A.a(b+0.2,p,s),3550247)
o=c+0.35
n=b-0.35
m=p+0.95
a.v(new A.a(o,p,s-0.1),new A.a(n,m,s),i)
a.v(new A.a(o-0.08,p,r),new A.a(o,m,s),i)
a.v(new A.a(n,p,r),new A.a(n+0.08,m,s),i)
a.v(new A.a(o+0.15,p,r+0.05),new A.a(n-0.15,e+0.35,s-0.15),2368550)
p=r-0.04
m=e+1.15
l=r+0.02
a.v(new A.a(c+0.15,e,p),new A.a(c+0.32,m,l),h)
a.v(new A.a(b-0.32,e,p),new A.a(b-0.15,m,l),h)
a.v(new A.a(c+0.05,m,r-0.12),new A.a(b-0.05,e+1.25,r+0.04),h)
m=a2.a
k=f+m*0.5
j=d+g*0.5
a.v(new A.a(k-0.45,q-0.03,j-0.45),new A.a(k+0.45,q,j+0.45),13682877)
a.v(new A.a(f+0.55,e,s-0.95),new A.a(f+1.65,e+0.62,s-0.35),4073240)
a.v(new A.a(f+m*0.2,e,d+0.04),new A.a(f+m*0.45,e+0.65,d+0.22),13946558)}}
A.mr.prototype={
bi(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=5784114,f=a0.d,e=f.a,d=f.b,c=f.c
f=d+0.95
a.v(new A.a(e+1.2,d,c+0.8),new A.a(e+2.5,f,c+2),14012614)
a.v(new A.a(e+1.4,f,c+1),new A.a(e+2.2,d+1.45,c+1.8),14012614)
f=e+a1.a
s=f-0.75
r=f-0.05
q=c+1.2
p=c+2.2
f=d+0.55
a.v(new A.a(s,d,q),new A.a(r,f,p),4731426)
for(o=[s,r-0.03],n=p-0.03,m=0;m<2;++m){l=o[m]
for(k=[q,n],j=l+0.03,i=0;i<2;++i){h=k[i]
a.v(new A.a(l,d,h),new A.a(j,f,h+0.03),11901256)}}f=e+0.8
o=c+0.04
n=e+2.4
a.v(new A.a(f,d,o),new A.a(n,d+0.74,c+0.72),g)
k=c+0.35
a.v(new A.a(f,d+1.35,o),new A.a(n,d+1.38,k),g)
a.v(new A.a(f,d+1.7,o),new A.a(n,d+1.73,k),g)}}
A.kQ.prototype={
ghV(){var s=this.d
return s==null?null:s.a.a},
j6(a,b,c,d,e){var s,r,q,p,o,n=this
if(e==null||d==null||!isFinite(d)){n.d=null
return}s=c.d
r=A.C(s)
q=new A.F(s,r.i("l(1)").a(new A.pu(e)),r.i("F<1>"))
p=!q.gA(0).m()?null:q.ga4(0)
if(p==null){n.d=null
return}if(!(n.d9(b,p.f)&&a==="hall"))o=n.d9(b,p.r)&&a==="landing"
else o=!0
if(!o){n.d=null
return}n.d=new A.mW(p,B.b.n(d,0,1))},
oJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g!=null)return h.hn(g,c,d)
s=h.l4(a,b,c,d)
if(s!=null){h.d=s
return h.hn(s,c,d)}r=d.a
q=d.c
p=Math.max(1,B.b.i4(Math.sqrt(r*r+q*q)/0.08))
o=d.a6(0,1/p)
for(n=b,m=c,l=!1,k=0;k<p;++k){j=h.me(a,n,m,o)
l=l||j.b
m=j.a
i=h.po(a,n)
n=i==null?n:i}h.bv(m)
return new A.lR(m,n)},
l4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.a,f=d.c,e=Math.sqrt(g*g+f*f)
for(s=a.d,r=s.length,q=b==="landing",p=b==="hall",o=e<0.001,n=0;n<r;++n){m=s[n]
l=m.r
k=m.f
j=g*(l.a-k.a)+f*(l.c-k.c)
i=!1
if(p)if(this.d9(c,k)){k=j>0||o
i=k}h=!1
if(q)if(this.d9(c,l)){l=j<0||o
h=l}if(i||h)return new A.mW(m,i?0:1)}return null},
hn(a,b,c){var s,r,q,p,o,n,m,l,k=a.a,j=k.r
k=k.f
s=j.a_(0,k)
r=s.a
q=s.c
p=Math.sqrt(r*r+q*q)
o=p<1e-9?0:(c.a*r+c.c*q)/p
r=a.b=B.b.n(a.b+o/p,0,1)
n=A.CH(k,j,r)
m=r<=0
l=r>=1
if(m||l)this.d=null
this.bv(n)
if(l)k="landing"
else if(m)k="hall"
else k=a.b<0.5?"hall":"landing"
return new A.lR(n,k)},
d9(a,b){var s=a.a_(0,b),r=s.a,q=s.b,p=s.c
return r*r+q*q+p*p<=1.5625},
me(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=d.a
if(g===0&&d.c===0)return new A.d3(c,!1)
s=h.di(a,b,c,new A.a(g,0,0))
r=s.a
q=d.c
p=h.di(a,b,r,new A.a(0,0,q))
o=!s.b
if(o&&!p.b)return new A.d3(p.a,!1)
n=c.T(0,new A.a(0,0.35,0))
h.bv(n)
if(!h.dL(a,b)){m=h.di(a,b,n,new A.a(g,0,0))
l=h.di(a,b,m.a,new A.a(0,0,q))
if(!m.b&&!l.b){k=l.a
for(g=k.a,r=k.b,q=k.c,j=0.05;j<=0.35;j+=0.05,k=i){i=new A.a(g,r-j,q)
h.bv(i)
if(h.dL(a,b))break}h.bv(k)
return new A.d3(k,!1)}}if(o)return new A.d3(r,!0)
if(!p.b)return new A.d3(p.a,!0)
h.bv(c)
return new A.d3(c,!0)},
di(a,b,c,d){var s
if(d.a===0&&d.c===0)return new A.d3(c,!1)
s=c.T(0,d)
this.bv(s)
if(this.dL(a,b)){this.bv(c)
return new A.d3(c,!0)}return new A.d3(s,!1)},
bv(a){var s=a.a_(0,new A.a(0,1.3499999999999999,0))
this.a=s
this.b=s.T(0,new A.a(0,1.2000000000000002,0))},
dL(a,b){var s,r,q,p,o,n,m=a.e.h(0,b)
if(m==null)return!0
s=a.a1(m)
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
return!this.mb(a,m,s)},
po(a,b){var s,r,q,p,o,n,m,l=a.e,k=l.h(0,b)
if(k==null)return null
s=a.a1(k)
for(r=k.a,q=a.aR(r),p=J.P(q.a),q=new A.R(p,q.b,q.$ti.i("R<1>"));q.m();){o=p.gp()
n=o.cL(r)
m=!1
if(n!=null)if(l.h(0,n)!=null)if(!o.as)o=o.ax&&!o.ay&&!o.z&&this.hR(k,o,s)&&this.kX(k,o,s)
else o=m
else o=m
else o=m
if(o)return n}return null},
mb(a,b,c){var s,r,q
for(s=a.aR(b.a),r=J.P(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>"));s.m();){q=r.gp()
if(q.ax&&!q.ay&&!q.z&&this.hR(b,q,c))return!0}return!1},
hR(a,b,c){var s,r,q,p=a.a,o=b.aY(p),n=b.aQ(p)
p=o===B.F||o===B.I
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
kX(a,b,c){var s,r=this
switch(b.aY(a.a).a){case 0:s=r.a.c<a.d.c
break
case 2:s=r.a.c>a.d.c+c.c
break
case 1:s=r.a.a>a.d.a+c.a
break
case 3:s=r.a.a<a.d.a
break
default:s=null}return s},
smF(a){this.a=t.a7.a(a)}}
A.pu.prototype={
$1(a){return t.w8.a(a).a===this.a},
$S:106}
A.lR.prototype={}
A.d3.prototype={}
A.mW.prototype={}
A.iI.prototype={
gaE(){return this.a}}
A.qU.prototype={
n3(a,b){var s,r=this.b
if(r>=2)return
if(!(r>=0))return A.e(B.Z,r)
s=B.Z[r]
if(a<s.a)return
if(b===s.b)return
this.b=r+1},
jS(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.Z,q)
p=B.Z[q]
if(p.b===a)r+=p.c}return r},
jT(a){var s,r,q,p
for(s=this.b,r=0,q=0;q<s;++q){if(!(q<2))return A.e(B.Z,q)
p=B.Z[q]
if(p.b===a)r+=p.d}return r},
D(){return A.E(["landedCount",this.b],t.N,t.z)}}
A.a9.prototype={}
A.lc.prototype={
goz(){var s=this,r=s.a,q=s.b,p=s.c,o=s.d,n=s.e,m=s.f
return B.a.a8(A.d([r,q,p,o,n,m],t.n),new A.q0())&&o>=r&&n>=q&&m>=p}}
A.q0.prototype={
$1(a){return isFinite(A.az(a))},
$S:4}
A.lw.prototype={
B(){var s,r,q,p,o,n=this,m=null,l=n.a,k=l.length
if(k!==0){s=n.b.length
s=s===0||B.d.P(s,3)!==0}else s=!0
if(s)throw A.b(A.p("QHMX mesh needs indexed triangles",m))
if(k>65535)throw A.b(A.p("QHMX mesh exceeds 16-bit vertex capacity",m))
if(!n.c.goz())throw A.b(A.p("QHMX bounds are invalid",m))
for(k=l.length,s=t.n,r=0;q=l.length,r<q;l.length===k||(0,A.r)(l),++r){p=l[r]
if(B.a.R(A.d([p.a,p.b,p.c,p.d,p.e,p.f,p.r,p.w],s),new A.qW()))throw A.b(A.p("QHMX contains a non-finite vertex",m))
q=p.x>255
if(q)throw A.b(A.p("QHMX material/flags must fit u8",m))}for(l=n.b,k=l.length,r=0;r<k;++r){o=l[r]
if(o>=q)throw A.b(A.p("QHMX index "+o+" exceeds vertex count",m))}}}
A.qW.prototype={
$1(a){return!isFinite(A.az(a))},
$S:4}
A.qV.prototype={
E(a,b,c,d,e,f,g){var s=this
s.bS(e,f,g,b,f,g,b,c,g,e,c,g,0,0,-1,a)
s.bS(b,f,d,e,f,d,e,c,d,b,c,d,0,0,1,a)
s.bS(e,f,d,e,f,g,e,c,g,e,c,d,-1,0,0,a)
s.bS(b,f,g,b,f,d,b,c,d,b,c,g,1,0,0,a)
s.bS(e,c,g,b,c,g,b,c,d,e,c,d,0,1,0,a)
s.bS(e,f,d,b,f,d,b,f,g,e,f,g,0,-1,0,a)},
bS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=new A.a9(a,b,c,m,n,o,0,0,p),r=new A.a9(g,h,i,m,n,o,1,1,p)
this.aC(s,new A.a9(d,e,f,m,n,o,1,0,p),r)
this.aC(s,r,new A.a9(j,k,l,m,n,o,0,1,p))},
aC(a,b,c){var s=this,r=s.b
B.a.l(r,s.ek(a))
B.a.l(r,s.ek(b))
B.a.l(r,s.ek(c))},
ek(a){var s,r,q=B.a.a0(A.d([a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,0],t.AN),"|"),p=this.c,o=p.h(0,q)
if(o!=null)return o
s=this.a
r=s.length
if(r>=65535)throw A.b(A.i("QHMX builder exceeded 16-bit vertex capacity"))
B.a.l(s,a)
p.k(0,q,r)
return r},
mK(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length
if(f===0)throw A.b(A.i("QHMX builder has no triangles"))
for(s=1/0,r=1/0,q=1/0,p=-1/0,o=-1/0,n=-1/0,m=0;m<f;++m){l=g[m]
k=l.a
s=Math.min(s,k)
j=l.b
r=Math.min(r,j)
i=l.c
q=Math.min(q,i)
p=Math.max(p,k)
o=Math.max(o,j)
n=Math.max(n,i)}h=new A.lw(A.ad(g,t.hl),new Uint16Array(A.S(this.b)),new A.lc(s,r,q,p,o,n))
h.B()
return h}}
A.ld.prototype={}
A.zM.prototype={
$4(a,b,c,d){var s,r=this.a.c,q=(b.a+c.a+d.a)/3,p=(b.c+c.c+d.c)/3
if((b.b+c.b+d.b)/3>=r.e-2.5)s="opposite-house"
else if(p<=r.c+1.2)s="front"
else{if(p>=r.f-1.2)r="rear-service"
else r=q<=r.a+1.2||q>=r.d-1.2?"side-boundary":"street"
s=r}if(!B.aC.q(0,s))A.h(A.i("exterior mesh classifier produced unknown cell "+s))
return s+":"+a},
$S:107}
A.yF.prototype={
$2(a,b){var s=t.Ez
return B.c.I(s.a(a).a,s.a(b).a)},
$S:108}
A.dy.prototype={
q6(a){var s,r,q,p,o,n,m,l=this,k=t.S,j=A.n(k,k),i=A.d([],t.Dl)
k=t.t
s=A.d([],k)
for(r=l.d,q=r.length,p=a.a,o=0;o<r.length;r.length===q||(0,A.r)(r),++o){n=r[o]
m=j.h(0,n)
if(m==null){m=i.length
j.k(0,n,m)}if(m===i.length){if(!(n>=0&&n<p.length))return A.e(p,n)
B.a.l(i,p[n])}B.a.l(s,m)}return new A.jK(A.Lo(new A.lw(i,new Uint16Array(A.S(s)),A.IO(i))),l.a,l.b,l.c,A.d([],k))}}
A.jK.prototype={}
A.fi.prototype={
C(){return"ExteriorCameraBand."+this.b}}
A.le.prototype={
mY(a){var s
switch(a.a){case 0:s=A.aR(["front","street","opposite-house"],t.N)
break
case 1:s=A.aR(["rear-service","side-boundary","roof-drainage"],t.N)
break
case 2:s=A.aR(["side-boundary","rear-service"],t.N)
break
case 3:s=A.aR(["roof-drainage","neighbor-roofs","opposite-house"],t.N)
break
case 4:s=A.aR(["street","front","opposite-house"],t.N)
break
default:s=null}return s},
mZ(a){var s
A:{if("hall"===a||"living-room"===a||"bedroom"===a||"landing"===a){s=B.d_
break A}if("kitchen"===a||"cellar"===a){s=B.ha
break A}if("bathroom"===a){s=B.hb
break A}if("spare-room"===a){s=B.hc
break A}s=B.d_
break A}return this.mY(s)},
iA(a,b,c,d){d.i("t<0>").a(b)
t.Q.a(c)
return new A.cc(this.ob(d.i("f(0)").a(a),b,c,d),d.i("cc<0>"))},
ob(a,b,c,d){return function(){var s=a,r=b,q=c,p=d
var o=0,n=1,m=[],l,k,j
return function $async$iA(e,f,g){if(f===1){m.push(g)
o=n}for(;;)switch(o){case 0:if(!q.a8(0,B.aC.gaJ(B.aC)))throw A.b(A.p("requested PVS cells contain an unknown cell",null))
l=r.a,l=new A.c1(l,l.r,l.e,r.$ti.i("c1<1>"))
case 2:if(!l.m()){o=3
break}k=l.d
j=s.$1(k)
if(!B.aC.q(0,j))throw A.b(A.i("retained item references unknown PVS cell "+j))
o=q.q(0,j)?4:5
break
case 4:o=6
return e.b=k,1
case 6:case 5:o=2
break
case 3:return 0
case 1:return e.c=m.at(-1),3}}}}}
A.eX.prototype={
i7(a,b,c){var s=this
return b>s.a&&b<s.b&&c>s.c&&c<s.d}}
A.ye.prototype={
$1(a){var s=this
return t.xT.a(a).i7(0,(s.a+s.b)*0.5,(s.c+s.d)*0.5)},
$S:38}
A.yd.prototype={
$1(a){return t.xT.a(a).i7(0,(this.a+this.b)*0.5,this.c)},
$S:38}
A.dL.prototype={
C(){return"FocusKind."+this.b}}
A.eE.prototype={
gF(){return this.b}}
A.ji.prototype={}
A.a_.prototype={
D(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"propId",r.a)
q.k(0,"displayName",r.b)
q.k(0,"roomId",r.c)
q.k(0,"materialFamily",r.d)
q.k(0,"positionX",r.e)
q.k(0,"positionY",r.f)
q.k(0,"positionZ",r.r)
q.k(0,"rotationYDegrees",r.w)
q.k(0,"scaleUniform",1)
q.k(0,"collisionRadiusM",r.y)
q.k(0,"collisionHeightM",r.z)
q.k(0,"isInteractive",r.Q)
s=r.as
if(s!=null)q.k(0,"stateVariant",s)
return q}}
A.qO.prototype={
oo(){var s,r,q,p,o,n,m=this
m.lc()
if(m.b.length===0)throw A.b(A.i("authored house must contain at least one room"))
for(s=m.c,r=s.length,q=m.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.b
if(!(n!=="outside"&&q.h(0,n)==null)){n=o.c
n=n!=="outside"&&q.h(0,n)==null}else n=!0
if(n)throw A.b(A.i("authored portal endpoint missing: "+o.a))}for(s=m.d,r=s.length,q=m.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){n=s[p].b
if(q.h(0,n)==null)throw A.b(A.i("stair references unknown portal: "+n))}},
fa(a){var s=this.w
if(s==null)return null
return new A.a(s.a,a,s.c)},
lc(){var s,r,q,p,o,n,m,l=this
for(s=l.b,r=s.length,q=l.e,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
if(q.M(n))throw A.b(A.i("duplicate room "+n))
q.k(0,n,o)}for(s=l.c,r=s.length,q=l.f,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){m=s[p]
n=m.a
if(q.M(n))throw A.b(A.i("duplicate portal "+n))
q.k(0,n,m)}},
a1(a){var s=a.c,r=this.y,q=a.a
return new A.a(s.a+r.jS(q),s.b+r.jT(q),s.c)},
aR(a){var s=this.c,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.rb(a)),r.i("F<1>"))},
pn(a,b){var s,r,q,p,o=this.e.h(0,a)
if(o!=null)s=!(b.b===a||b.c===a)
else s=!0
if(s)throw A.b(A.a8(a,"roomId","not a portal endpoint"))
r=this.a1(o)
q=b.aQ(a)+b.w*0.5
s=o.d
p=s.b+b.x*0.5
switch(b.aY(a).a){case 0:s=new A.a(s.a+q,p,s.c)
break
case 2:s=new A.a(s.a+q,p,s.c+r.c)
break
case 1:s=new A.a(s.a+r.a,p,s.c+q)
break
case 3:s=new A.a(s.a,p,s.c+q)
break
default:s=null}return s},
iX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a===b)return B.a8
s=A.d([new A.a6(a,B.a8)],t.nR)
r=A.aR([a],t.N)
for(q=this.e,p=t.o;s.length!==0;){o=B.a.pv(s,0)
n=o.a
m=o.b
for(l=this.aR(n),k=J.P(l.a),l=new A.R(k,l.b,l.$ti.i("R<1>"));l.m();){j=k.gp()
i=j.cL(n)
if(i==null||q.h(0,i)==null)continue
if(i===b){q=A.J(m,p)
q.push(j)
return q}if(r.l(0,i)){h=A.J(m,p)
h.push(j)
B.a.l(s,new A.a6(i,h))}}}return B.a8}}
A.rb.prototype={
$1(a){var s
t.o.a(a)
s=this.a
return a.b===s||a.c===s},
$S:110}
A.qS.prototype={
bC(a){this.a.k(0,a.a,a)},
mS(a,b){var s,r,q,p,o,n=b.a
if(B.em.q(0,n))return $.EI()
s=this.a.h(0,n)
if(s==null)return new A.n4(n).i3(a,a.y)
r=s.i3(a,a.y)
if(n==="hall"){q=a.a1(b)
p=new A.bZ(new Float32Array(10752))
A.Hn(p,a,b,q)
o=B.n.ag(p.a,0,p.b)
if(!B.n.gN(o)){n=A.J(r.c,t.i)
B.a.K(n,o)
return new A.ji(r.a,r.b,new Float32Array(A.S(n)),r.d)}}return r},
mP(a,b){var s,r,q,p,o,n=new A.bZ(new Float32Array(10752)),m=a.a1(b)
for(s=b.a,r=a.aR(s),q=J.P(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
if(p.at==null||p.as)continue
o=p.aY(s)
A.Ci(n,4734002,new A.bY(p.a,p.aQ(s),0,p.w,p.x,!0),o,b,m)}return B.n.ag(n.a,0,n.b)},
mO(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=13938487,a5=4600357,a6=2368548,a7=b0.at
if(a7==null||b0.as)return new Float32Array(0)
s=new A.bZ(new Float32Array(10752))
r=a8.a1(a9)
q=a7==="kit-front-door-recessed"
p=a7==="kit-cellar-door-grille"
if(q)o=4006937
else o=p?4867908:6047288
a7=a9.a
n=b0.aY(a7)
m=b0.aQ(a7)
a7=a9.d
l=a7.b
k=Math.min(r.b,b0.x)
if(b0.ax)switch(n.a){case 0:j=a7.a+m
a7=a7.c
i=j+0.055
h=a7+b0.w
s.v(new A.a(j,l,a7),new A.a(i,l+k,h),o)
s.v(new A.a(i,l+0.95,h-0.12),new A.a(i+0.04,l+1.02,h-0.06),a4)
break
case 2:j=a7.a+m
a7=a7.c+r.c
i=a7-b0.w
h=j+0.055
s.v(new A.a(j,l,i),new A.a(h,l+k,a7),o)
s.v(new A.a(h,l+0.95,i+0.06),new A.a(h+0.04,l+1.02,i+0.12),a4)
break
case 1:j=a7.a+r.a
i=j-b0.w
a7=a7.c+m
h=a7+0.055
s.v(new A.a(i,l,a7),new A.a(j,l+k,h),o)
s.v(new A.a(i+0.06,l+0.95,h),new A.a(i+0.12,l+1.02,h+0.04),a4)
break
case 3:j=a7.a
a7=a7.c+m
i=j+b0.w
h=a7+0.055
s.v(new A.a(j,l,a7),new A.a(i,l+k,h),o)
s.v(new A.a(i-0.12,l+0.95,h),new A.a(i-0.06,l+1.02,h+0.04),a4)
break}else switch(n.a){case 0:j=a7.a+m
a7=a7.c
i=b0.w
h=j+i
g=l+k
f=a7+0.055
s.v(new A.a(j,l,a7),new A.a(h,g,f),o)
if(!p){e=(i-0.32)*0.5
d=j+0.11
c=l+0.16
b=a7+0.005
a=d+e
a0=l+0.82
a1=f-0.005
s.v(new A.a(d,c,b),new A.a(a,a0,a1),a5)
a2=h-0.11
a3=a2-e
s.v(new A.a(a3,c,b),new A.a(a2,a0,a1),a5)
a0=l+1.1
g-=0.16
s.v(new A.a(d,a0,b),new A.a(a,g,a1),a5)
s.v(new A.a(a3,a0,b),new A.a(a2,g,a1),a5)
a1=f+0.015
s.v(new A.a(h-0.18,l+0.94,a7-0.015),new A.a(h-0.04,l+1.06,a1),a6)
g=l+0.97
a2=l+1.03
s.v(new A.a(h-0.15,g,a1),new A.a(h-0.09,a2,f+0.05),a4)
if(q)s.v(new A.a(j+i*0.35,g,a7-0.01),new A.a(j+i*0.65,a2,a7+0.01),a4)}break
case 2:j=a7.a+m
a7=a7.c+r.c
i=a7-0.055
h=j+b0.w
s.v(new A.a(j,l,i),new A.a(h,l+k,a7),o)
if(!p){j=i-0.015
s.v(new A.a(h-0.18,l+0.94,j),new A.a(h-0.04,l+1.06,a7+0.015),a6)
s.v(new A.a(h-0.15,l+0.97,i-0.05),new A.a(h-0.09,l+1.03,j),a4)}break
case 1:j=a7.a+r.a
i=j-0.055
a7=a7.c+m
h=a7+b0.w
s.v(new A.a(i,l,a7),new A.a(j,l+k,h),o)
if(!p){a7=i-0.015
s.v(new A.a(a7,l+0.94,h-0.18),new A.a(j+0.015,l+1.06,h-0.04),a6)
s.v(new A.a(i-0.05,l+0.97,h-0.15),new A.a(a7,l+1.03,h-0.09),a4)}break
case 3:j=a7.a
a7=a7.c+m
i=j+0.055
h=a7+b0.w
s.v(new A.a(j,l,a7),new A.a(i,l+k,h),o)
if(!p){a7=i+0.015
s.v(new A.a(j-0.015,l+0.94,h-0.18),new A.a(a7,l+1.06,h-0.04),a6)
s.v(new A.a(a7,l+0.97,h-0.15),new A.a(i+0.05,l+1.03,h-0.09),a4)}break}return B.n.ag(s.a,0,s.b)}}
A.n4.prototype={}
A.q_.prototype={}
A.vc.prototype={
jR(a,b){var s,r=a.e.h(0,b)
if(r!=null){s=r.e
s=s.length!==0&&B.a.a8(s,new A.vd())}else s=!1
return s}}
A.vd.prototype={
$1(a){return t.fW.a(a).w},
$S:16}
A.qX.prototype={
iY(a){var s=this.e,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.r0(a)),r.i("F<1>"))},
gpg(){var s=this.e,r=A.C(s)
return new A.F(s,r.i("l(1)").a(new A.r_()),r.i("F<1>"))},
gk5(){var s,r,q,p,o,n=t.N,m=t.S,l=A.E(["production",0,"proxy",0,"invisible-anchor",0],n,m)
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].f
o=l.h(0,p)
l.k(0,p,(o==null?0:o)+1)}return A.aZ(l,n,m)},
pf(a){var s,r,q
for(s=this.gpg(),r=J.P(s.a),s=new A.R(r,s.b,s.$ti.i("R<1>"));s.m();){q=r.gp()
if(q.y===a)return q}return null},
bW(a){return B.a.ba(this.d,new A.qY(a),new A.qZ(a))},
fj(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="inventory placement ",a8=a6.a
if(a8!==1)throw A.b(A.i("unsupported house inventory schema "+a8))
a8=a6.b
if(a8!=="assets/house/house.json")throw A.b(A.i("inventory source changed: "+a8))
a8=a6.c
if(Math.abs(a8-2.25)>0.0001)throw A.b(A.i("inventory modelScale must match house profile 2.25"))
s=t.N
r=A.a1(s)
for(q=a6.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
m=n.a
if(!r.l(0,m))throw A.b(A.i("duplicate inventory asset "+m))
l=n.r
k=l.a
l=l.b
if(k.a>l.a||k.b>l.b||k.c>l.c)throw A.b(A.i("invalid bounds for inventory asset "+m))
l=n.f
if(!A.aR(["production","proxy","invisible-anchor"],s).q(0,l))throw A.b(A.i("invalid inventory asset status "+m+": "+l))}j=A.a1(s)
i=A.a1(s)
h=A.a1(s)
for(q=a6.e,p=q.length,m=a9.e,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){g=q[o]
l=g.a
if(!j.l(0,l))throw A.b(A.i("duplicate inventory placement "+l))
k=g.b
f=m.h(0,k)
if(f==null)throw A.b(A.i(a7+l+" references "+k))
n=a6.bW(g.c)
if(g.x&&g.y!=null){e=g.y
e.toString
d=$.F7()
if(!d.b.test(e))throw A.b(A.i("invalid inventory focusId "+l+": "+e))
if(!h.l(0,e))throw A.b(A.i("duplicate inventory focusId "+e))}e=g.z
if(e<0||!isFinite(e))throw A.b(A.i("invalid clearance for "+l))
d=g.Q
c=!0
if(isFinite(d))if(!(d<0))if(isFinite(g.as)){b=g.at
if(isFinite(b))if(isFinite(g.ax))if(!(b<0))d=d>0&&b<=0
else d=c
else d=c
else d=c}else d=c
else d=c
else d=c
if(d)throw A.b(A.i("invalid thermal source for "+l))
d=g.ay
c=d.a
if(!A.aR(["none","static","dynamic","kinematic"],s).q(0,c))A.h(A.i("invalid physics body type for "+l))
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
if(d!=null&&!i.l(0,k+":"+d))throw A.b(A.i("duplicate inventory socket "+k+":"+d))
k=g.f.a
d=k.a*a8
c=k.b*a8
k=k.c*a8
a3=g.j8(n,a8)
a4=g.fe(n,a8)
a5=0.43+e
e=a3.a
b=-a5
a=!0
if(!(d-e<b)){a0=f.c
if(!(d+e>a0.a+a5)){e=a3.c
k=k-e<b||k+e>a0.c+a5||c+a4.b>a0.b+a5||c+a4.a<b}else k=a}else k=a
if(k)throw A.b(A.i(a7+l+" escapes "+f.a))}}}
A.r0.prototype={
$1(a){return t.fl.a(a).b===this.a},
$S:39}
A.r_.prototype={
$1(a){return t.fl.a(a).x},
$S:39}
A.qY.prototype={
$1(a){return t.oW.a(a).a===this.a},
$S:112}
A.qZ.prototype={
$0(){return A.h(A.i("inventory asset missing: "+this.a))},
$S:7}
A.di.prototype={
gF(){return this.a}}
A.cU.prototype={
j8(a,b){var s,r,q,p,o,n,m=a.r,l=m.b
m=m.a
s=this.f
r=s.c
q=s.b.b*3.141592653589793/180
p=Math.abs(Math.cos(q))
o=Math.abs(Math.sin(q))
s=Math.abs(l.a-m.a)*0.5*(r.a*b)
n=Math.abs(l.c-m.c)*0.5*(r.c*b)
return new A.a(s*p+n*o,Math.abs(l.b-m.b)*0.5*(r.b*b),s*o+n*p)},
fe(a,b){var s=this.f.c.b*b,r=a.r
return new A.a(r.a.b*s,r.b.b*s,0)},
gF(){return this.a}}
A.lB.prototype={}
A.rl.prototype={}
A.rj.prototype={}
A.yM.prototype={
$1(a){return typeof a!="number"||!isFinite(a)},
$S:6}
A.rk.prototype={
D(){var s,r,q,p=A.n(t.N,t.z),o=this.a,n=A.v(o).i("ag<1>")
n=A.J(new A.ag(o,n),n.i("t.E"))
B.a.a7(n)
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
p.k(0,q,o.h(0,q))}return p},
fb(a){var s,r,q,p,o,n
if(a==null)return
if(!t.f.b(a))throw A.b(B.hv)
s=t.X
r=A.b5(a,s,s)
s=this.a
s.S(0)
for(q=new A.N(r,A.v(r).i("N<1,2>")).gA(0);q.m();){p=q.d
o=p.b
n=p.a
if(typeof n!="string"||!A.b7(o)||o<0)throw A.b(B.hW)
s.k(0,n,o)}}}
A.dW.prototype={}
A.r1.prototype={
q4(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t.Q.a(a5)
s=A.d([],t.ea)
for(r=A.eW(a5,a5.r,A.v(a5).c),q=this.a,p=q.e,o=r.$ti.c;r.m();){n=r.d
m=p.h(0,n==null?o.a(n):n)
if(m==null)continue
for(n=m.r,l=n.length,k=m.a,j=m.d,i=j.a,h=j.b,j=j.c,g=0;g<n.length;n.length===l||(0,A.r)(n),++g){f=n[g]
e=f.d
if(!e)continue
e=f.c
d=i+e.a
c=h+e.b
e=j+e.c
b=q.a1(m)
a=i+b.a*0.5-d
a0=h+b.b*0.55-c
a1=j+b.c*0.5-e
a2=new A.a(a,a0,a1).gu(0)
if(a2>0.0001){a3=1/a2
a4=new A.a(a*a3,a0*a3,a1*a3)}else a4=new A.a(0,-1,0)
B.a.l(s,new A.dW(new A.a(d,c,e),a4,16760952,3.8,2.1*this.m_(k),0.06,80,180,0.12))}}B.a.Z(s,new A.r2(a6))
return A.hO(s,0,A.ek(4,"count",t.S),t.A_).bN(0)},
m_(a){var s
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
return B.b.I(a.a.a_(0,s).gu(0),b.a.a_(0,s).gu(0))},
$S:114}
A.cA.prototype={
D(){var s=this,r=s.e
return A.E(["lightId",s.a,"roomId",s.b,"type",s.c,"colorTemperatureKelvin",s.d,"colorRGB",A.d([r.c,r.b,r.a],t.n),"intensityLux",s.f,"coneAngleDegrees",s.r,"castsShadow",!0,"hasInteractiveSwitch",s.x],t.N,t.z)}}
A.eD.prototype={
C(){return"Floor."+this.b}}
A.eC.prototype={
C(){return"Facing."+this.b}}
A.fL.prototype={
sjQ(a){this.w=A.U(a)},
gF(){return this.a}}
A.cj.prototype={
cL(a){var s=this.b
if(s===a)return this.c
if(this.c===a)return s
return null},
aY(a){var s=this
if(s.b===a)return s.d
if(s.c===a)return s.e
throw A.b(A.a8(a,"roomId","not an endpoint of "+s.a))},
aQ(a){var s=this
if(s.b===a)return s.f
if(s.c===a)return s.r
throw A.b(A.a8(a,"roomId","not an endpoint of "+s.a))},
gF(){return this.a}}
A.lM.prototype={
gF(){return this.a}}
A.fG.prototype={
gF(){return this.a}}
A.fB.prototype={
gF(){return this.a}}
A.c6.prototype={
i3(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=a.e.h(0,c)
if(b==null)throw A.b(A.i("RoomBuilder for ["+c+"] cannot find room in House graph"))
s=a.a1(b)
r=new A.bZ(new Float32Array(10752))
q=new A.bZ(new Float32Array(10752))
p=new A.bZ(new Float32Array(10752))
o=new A.bZ(new Float32Array(10752))
n=b.d
m=A.ra(b.y)
c=n.a
l=n.b
k=n.c
j=s.c
i=k+j
h=s.a
g=c+h
f=m.e
r.c8(new A.a(c,l,k),new A.a(c,l,i),new A.a(g,l,i),new A.a(g,l,k),m.c,h/f,j/f)
e=A.ra(b.z)
l+=s.b
f=e.e
q.c8(new A.a(c,l,k),new A.a(g,l,k),new A.a(g,l,i),new A.a(c,l,i),e.c,h/f,j/f)
d.mT(p,a,b,s)
d.mQ(o,a,b,s)
d.bw(p,a,b,s)
d.bi(p,a,b,s)
return new A.ji(B.n.ag(r.a,0,r.b),B.n.ag(q.a,0,q.b),B.n.ag(p.a,0,p.b),B.n.ag(o.a,0,o.b))},
mT(a,b,c,d){var s,r,q,p,o=A.ra(c.x)
for(s=o.c,r=o.e,q=0;q<4;++q){p=B.a_[q]
A.Fo(this.bX(b,c,p),a,p,10655886,c,d,r,s)}},
bX(a,b,c){var s,r,q,p,o,n,m=A.d([],t.n1)
for(s=b.a,r=a.aR(s),q=J.P(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
if(p.aY(s)===c)B.a.l(m,new A.bY(p.a,p.aQ(s),0,p.w,p.x,!0))}for(s=b.e,r=s.length,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(n.b===c)B.a.l(m,new A.bY(n.a,n.c,n.d,n.e,n.f,!1))}return m},
mQ(a,b,c,d){var s,r,q,p,o
for(s=c.a,r=b.aR(s),q=J.P(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
if(p.at==null||p.as)continue
o=p.aY(s)
A.Ci(a,4734002,new A.bY(p.a,p.aQ(s),0,p.w,p.x,!0),o,c,d)}},
bw(a,b,c,d){var s,r,q,p
for(s=d.b-0.08,r=0;r<4;++r){q=B.a_[r]
p=this.bX(b,c,q)
A.j8(p,a,q,c,d,B.nx)
A.j8(p,a,q,c,d,new A.hA(s,0.08,0.08,13024946,!1))}},
bi(a,b,c,d){}}
A.r4.prototype={
o1(a){return B.a.ba(this.c,new A.r5(a),new A.r6(a))},
q0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.a
if(f!==1)throw A.b(A.i("unsupported house soundscape schema "+f))
f=this.b
if(f!=="assets/house/house.json")throw A.b(A.i("soundscape source changed: "+f))
f=t.N
s=A.a1(f)
f=A.n(f,t.fl)
for(r=b.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
f.k(0,o.a,o)}for(r=this.c,q=r.length,n=a.e,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){m=r[p]
l=m.a
if(!s.l(0,l))throw A.b(A.i("duplicate sound emitter "+l))
k=m.b
j=n.h(0,k)
if(j==null)throw A.b(A.i("sound emitter "+l+" references "+k))
i=m.c
o=f.h(0,i)
if(o==null)throw A.b(A.i("sound emitter "+l+" references missing placement "+i))
if(o.b!==k)throw A.b(A.i("sound emitter "+l+" room differs from placement"))
k=m.f
if(k.gN(k)||k.ga9().R(0,new A.r7())||k.gan().R(0,new A.r8()))throw A.b(A.i("sound emitter "+l+" has no usable cues"))
k=m.e
if(!isFinite(k)||k<0||k>1)throw A.b(A.i("sound emitter "+l+" has invalid gain"))
k=m.d
i=k.a
h=!0
if(!(i<-0.5)){g=j.c
if(!(i>g.a+0.5)){i=k.b
if(!(i<-0.5))if(!(i>g.b+0.5)){k=k.c
k=k<-0.5||k>g.c+0.5}else k=h
else k=h}else k=h}else k=h
if(k)throw A.b(A.i("sound emitter "+l+" escapes "+j.a))}}}
A.r5.prototype={
$1(a){return t.mF.a(a).a===this.a},
$S:115}
A.r6.prototype={
$0(){return A.h(A.i("sound emitter missing: "+this.a))},
$S:7}
A.r7.prototype={
$1(a){return B.c.aS(A.x(a)).length===0},
$S:3}
A.r8.prototype={
$1(a){return B.c.aS(A.x(a)).length===0},
$S:3}
A.dh.prototype={
gF(){return this.a}}
A.qT.prototype={
cq(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a8(b,"hour","must be in [0, 24)"))
s=l.a
r=l.b
if(s==null||r==null||a!==s||b<r){l.a=a
l.b=b
return B.lu}q=A.d([],t.Fm)
p=B.b.aZ(r)+1
o=B.b.aZ(b)
for(n=p;n<=o;++n){m=B.d.P(n,24)
B.a.l(q,new A.fn("tick",m))
if(B.d.P(m,3)===0){B.a.l(q,new A.fn("cuckoo",m))
B.a.l(q,new A.fn("bell",m))}if(B.d.P(m,6)===0)B.a.l(q,new A.fn("chime",m))}l.b=b
return q}}
A.fn.prototype={
gb0(){return this.b}}
A.r3.prototype={
cq(a,b){var s,r,q,p,o,n,m=this
if(!isFinite(b)||b<0||b>=24)throw A.b(A.a8(b,"hour","must be in [0, 24)"))
s=m.a
r=m.b
if(s==null||r==null||a!==s||b<r){m.a=a
m.b=b
return B.lt}q=A.d([],t.op)
for(p=B.b.aZ(r)+1;p<=B.b.aZ(b);++p){o=B.d.P(p,24)
n=B.d.P(o,4)
if(n===2)B.a.l(q,B.jP)
if(B.d.P(o,3)===1)B.a.l(q,B.jR)
if(B.d.P(o,8)===5)B.a.l(q,B.jU)
if(B.d.P(o,5)===0)B.a.l(q,B.jQ)
if(B.d.P(o,7)===3)B.a.l(q,B.jV)
if(n===1)B.a.l(q,B.jS)
if(B.d.P(o,6)===4)B.a.l(q,B.jT)}m.b=b
return q}}
A.dg.prototype={}
A.yL.prototype={
$1(a){return typeof a!="number"},
$S:6}
A.r9.prototype={
D(){var s,r,q,p,o,n=this,m=t.N,l=t.m0,k=A.n(m,l)
for(s=n.a,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0),r=t.y;s.m();){q=s.d
p=q.a
o=q.b
k.k(0,p,A.E(["open",o.a,"locked",o.b],m,r))}l=A.n(m,l)
for(s=n.c,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0);s.m();){q=s.d
p=q.a
o=q.b
l.k(0,p,A.E(["lit",o.a,"examined",o.b],m,r))}return A.E(["portals",k,"windows",n.b,"mantles",l,"driftLandedCount",n.d,"overrides",n.e,"mantleHistory",n.f],m,t.z)},
mB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.N,d=A.a1(e)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)d.l(0,s[q].a)
r=A.a1(e)
for(p=a.b,o=p.length,q=0;n=p.length,q<n;p.length===o||(0,A.r)(p),++q)for(n=p[q].e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l)r.l(0,n[l].a)
e=A.a1(e)
for(q=0;q<p.length;p.length===n||(0,A.r)(p),++q)for(o=p[q].r,m=o.length,l=0;l<o.length;o.length===m||(0,A.r)(o),++l)e.l(0,o[l].a)
o=f.a
n=!0
if(A.AU(new A.ag(o,A.v(o).i("ag<1>")),d)){d=f.b
if(A.AU(new A.ag(d,A.v(d).i("ag<1>")),r)){d=f.c
e=!A.AU(new A.ag(d,A.v(d).i("ag<1>")),e)}else e=n}else e=n
if(e)throw A.b(B.iu)
e=f.d
if(e<0||e>2)A.h(B.hH)
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
A.j3.prototype={
D(){return A.E(["open",this.a,"locked",this.b],t.N,t.y)}}
A.iP.prototype={
D(){return A.E(["lit",this.a,"examined",this.b],t.N,t.y)}}
A.aH.prototype={
gF(){return this.a}}
A.pV.prototype={
$1(a){return this.a.q(0,A.x(a))},
$S:3}
A.eF.prototype={
C(){return"Hand."+this.b}}
A.vX.prototype={
h(a,b){var s=this.a.h(0,b)
return s==null?B.o:s},
fD(a,b){var s,r,q,p,o=A.d([],t.s)
for(s=this.h(0,a),r=s.length,q=0;q<r;++q){p=s[q]
if(p!==b)o.push(p)}return o}}
A.lK.prototype={
D(){var s,r,q,p=t.N,o=A.n(p,t.dR)
for(s=this.a,r=0;r<5;++r){q=B.G[r]
o.k(0,q,s.h(0,q))}return A.E(["fields",o,"shakiness",this.b,"hand",this.c.b],p,t.z)},
t(a){return new A.G(B.G,t.oI.a(new A.rG(this)),t.jT).a0(0," \xb7 ")}}
A.rF.prototype={
$2(a,b){return new A.O(A.x(a),A.x(b),t.q)},
$S:116}
A.rG.prototype={
$1(a){return this.a.a.h(0,A.x(a))},
$S:117}
A.ce.prototype={
D(){var s,r,q,p=this,o=A.d([],t.cs)
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)o.push(s[q].D())
s=p.r
s=s==null?null:s.D()
return A.E(["ordinal",p.a,"day",p.b,"revisions",o,"corroborator",p.d,"locked",p.e,"lastReadDay",p.f,"margin",s],t.N,t.z)},
gaE(){return this.b}}
A.rp.prototype={
ct(a){t.G.a(a)
return a.a===5&&B.a.a8(B.G,new A.rw(this,a))},
fP(a,b,c,d,e){var s,r
t.G.a(b)
if(!this.ct(b))return null
s=this.e++
r=new A.ce(s,a,A.d([A.rE(b,c,d)],t.Bv),e,!1,null,null)
this.b.k(0,s,r)
return r},
eD(a,b,c){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||!this.ct(b))return!1
B.a.l(s.c,A.rE(b,c,B.aU))
return!0},
ms(a,b){var s
t.G.a(b)
s=this.b.h(0,a)
if(s==null||s.r!=null)return!1
if(!this.ct(b))return!1
s.r=A.rE(b,0,B.dp)
return!0},
jG(a){var s,r,q,p
t.J.a(a)
s=this.d
B.a.S(s)
for(r=this.b,q=0;!1;++q){p=a[q]
if(r.M(p)&&!B.a.q(s,p))B.a.l(s,p)}},
q3(a){var s
if(!this.b.M(a))return!1
s=this.d
if(!B.a.q(s,a))B.a.l(s,a)
return!0},
D(){var s,r,q=this,p=q.e,o=q.f,n=q.c
n=A.J(n,A.v(n).c)
B.a.a7(n)
s=A.d([],t.cs)
for(r=q.b,r=new A.ae(r,r.r,r.e,A.v(r).i("ae<2>"));r.m();)s.push(r.d.D())
return A.E(["nextOrdinal",p,"locksRemaining",o,"tags",n,"entries",s],t.N,t.z)}}
A.rw.prototype={
$1(a){var s
A.x(a)
s=this.b.h(0,a)
if(s==null)s=""
return B.a.q(this.a.a.h(0,a),s)},
$S:3}
A.io.prototype={
D(){var s,r=this,q=A.n(t.N,t.X)
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
A.pg.prototype={
cV(a){var s,r,q=a==null?null:B.c.aS(a).toLowerCase()
if(q==null||q.length===0)return B.f8
if(q==="pixeldart")return B.f7
s=q==="next"||q==="auto"||q==="legacy"
r=s?'renderer query "'+q+'" is retired; use pixeldart':'unsupported renderer query "'+q+'"; use pixeldart'
return new A.io(B.b_,!1,!0,r,s,s?r:null)}}
A.j5.prototype={}
A.tF.prototype={
D(){var s,r,q,p=A.d([],t.A7)
for(s=this.a.gan(),s=s.gA(s),r=t.N;s.m();){q=s.gp()
p.push(A.E(["assetId",q.a,"licenseId",q.b,"manifestPath",q.c,"sourceFormat",q.d],r,r))}return A.E(["schema","quarantine-promoted-models-v1","entries",p],r,t.z)}}
A.yB.prototype={
$1(a){A.x(a)
return a.length!==0&&a!==".."},
$S:3}
A.j6.prototype={}
A.m8.prototype={}
A.tH.prototype={
$1(a){return t.zU.a(a).f},
$S:27}
A.tI.prototype={
$1(a){return t.zU.a(a).f},
$S:27}
A.tz.prototype={}
A.ty.prototype={
gic(){var s,r,q="pixeldart",p=this.b,o=p.aL
if(o){s=p.w
s===$&&A.u()
s=s.a.b}else s="safe"
p=A.Cm(q,o?p.gmV():B.mf,!1,s)
r=p
if(r==null)r=A.Cm(q,A.d([],t.s),!1,"safe")
p=A.Cl(r.a,r.c,r.d,!1,r.z,r.f,r.w,r.b,r.x,r.e,r.r,t.oZ.a(this.c))
return p},
ci(a){var s,r,q,p,o,n,m=this,l="pixeldart backend is not ready",k=m.b,j=m.d
if(j===B.c4){if(k.aL){s=k.d
s===$&&A.u()
s=s.a.b===B.a7}else s=!1
s=!s
if(s){m.d=B.a1;++k.eX
j=B.a1}if(j===B.c4)return}if(j!==B.a1)A.h(A.i(l))
B.f.a3(A.E(["backend","pixeldart","interpolation",0,"facts",A.xp(a.a.a)],t.N,t.X),null)
j=k.aL
if(j){s=k.d
s===$&&A.u()
s=s.a.b===B.a7}else s=!1
if(s){if(m.d!==B.a1)A.h(A.i(l))
m.d=B.c4
return}if(!j)A.h(A.i("Pixeldart runtime is not initialized"))
j=k.to
if(j==null){j=new Float32Array(16)
j[0]=1
j[5]=1
j[10]=1
j[15]=1
r=new A.dk(j)
j=$.Bn()
s=j.b
q=j.c
p=A.A5(k.b/k.c,q,j.a,s)
j=p.a6(0,r)
j=A.BB(k.b/k.c,B.w,q,B.rC,s,p,r,j)}o=new A.lk(j,k.x1,k.x2,-1,k.o8++,k.eX,k.c3,k.c2)
n=new A.vk()
$.Bi()
j=$.tP.$0()
n.a=j
n.b=null
j=k.e
j===$&&A.u()
s=k.f
s===$&&A.u()
k.ma(j.mG(s,o),o)
k.dH=k.e.o3()
j=$.tP.$0()
n.b=j
k.dI=n.go0()/1000},
iF(a){if(this.d!==B.a1)A.h(A.i("pixeldart backend is not ready"))
B.f.a3(A.E(["id",a.a,"pressed",a.b,"value",a.c],t.N,t.X),null)}}
A.tA.prototype={
mW(a,b){var s,r,q,p,o,n,m
a.B()
s=B.cJ.cV(a)
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
o=A.J(o,A.v(o).c)
B.a.a7(o)
n=o.length
m=0
for(;m<o.length;o.length===n||(0,A.r)(o),++m)r.push("feature-"+o[m])
if(a.x)r.push("anisotropic-filtering")
if(a.z)r.push("disjoint-timer-query")
if(a.Q)r.push("float-render-target")
if(a.as)r.push("half-float-render-target")
if(a.at)r.push("context-loss")
return r}}
A.m1.prototype={
C(){return"PixeldartQualityTier."+this.b}}
A.tB.prototype={
D(){var s=this
return A.E(["hasWebGPU",s.a,"hasWebGL2",s.b,"supportsFloat16Framebuffers",s.c,"supportsInstancedArrays",s.d,"supportsComputeShaders",s.e,"qualityTier",s.f.b,"maxDrawCallsPerFrame",s.r,"maxVramBudgetMB",s.w],t.N,t.z)}}
A.tC.prototype={
i6(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a5<=0||a4<=0)throw A.b(A.p("surface dimensions must be positive",null))
s=a1.a
A:{if(B.M===s){r=new A.fU(1080,1920)
break A}if(B.U===s){r=new A.fU(720,1280)
break A}r=new A.fU(540,960)
break A}B:{if("0.50"===a2){q=0.5
break B}if("0.67"===a2){q=0.67
break B}if("0.75"===a2){q=0.75
break B}if("0.85"===a2){q=0.85
break B}q=1
break B}p=B.b.ao(r.b*q)
q=B.b.ao(r.a*q)
o=B.b.n(a5/p,0,1)
n=B.b.n(a4/q,0,1)
m=o<n?o:n
r=this.fS(B.b.ao(p*m),320,a5)
q=this.fS(B.b.ao(q*m),180,a4)
l=s===B.M
k=s===B.U
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
break E}g=a0==="linear"?B.fP:B.bf
if(l)f=64
else f=k?32:16
if(l)e=8
else e=k?4:1
if(l)d=8
else d=k?4:1
F:{if("off"===b){c=B.h_
break F}if("errors"===b){c=B.cR
break F}c=B.h0
break F}return new A.je(a1,r,q,h,g,p,i,f,e,d,c)},
fS(a,b,c){if(c<b)return c
return B.d.n(a,b,c)}}
A.tD.prototype={}
A.hD.prototype={}
A.tE.prototype={}
A.tG.prototype={
dN(a,b,c,d){return this.oD(a,t.zL.a(b),c,d)},
oD(a,b,c,d){var s=0,r=A.aN(t.c_),q,p,o,n,m
var $async$dN=A.aO(function(e,f){if(e===1)return A.aK(f,r)
for(;;)switch(s){case 0:o=A
n=a
m=c
s=3
return A.a7(B.fB.dM(new A.ta(d,b),B.nv),$async$dN)
case 3:p=new o.j6(n,m,f)
A.Ca(A.d([p],t.Fa))
q=p
s=1
break
case 1:return A.aL(q,r)}})
return A.aM($async$dN,r)}}
A.tJ.prototype={}
A.tK.prototype={
cK(a,b,c){return this.oE(a,t.xJ.a(b),t.tX.a(c))},
oE(a,b,c){var s=0,r=A.aN(t.zC),q,p,o,n,m,l,k,j,i,h,g
var $async$cK=A.aO(function(d,e){if(d===1)return A.aK(e,r)
for(;;)switch(s){case 0:j=A.d([],t.Fa)
p=a.a,o=p.ga9(),o=o.gA(o),n=t.P
case 3:if(!o.m()){s=4
break}m=o.gp()
l=p.h(0,m)
if(l==null)l=A.h(A.i("promoted model index asset is missing: "+m))
i=A
h=n
g=B.f
s=5
return A.a7(b.$1(l.c),$async$cK)
case 5:k=i.GB(h.a(g.am(e,null)))
m=l.a
if(k.b!==m)throw A.b(A.M("promoted manifest asset ID does not match index: "+m,null,null))
if(k.d!==l.d)throw A.b(A.M("promoted manifest source format does not match index: "+m,null,null))
i=B.a
h=j
s=6
return A.a7(B.fE.dN(m,new A.tL(c,l),l.b,k),$async$cK)
case 6:i.l(h,e)
s=3
break
case 4:q=new A.m8(A.Ca(j))
s=1
break
case 1:return A.aL(q,r)}})
return A.aM($async$cK,r)}}
A.tL.prototype={
$1(a){return this.a.$2(this.b.a,A.x(a))},
$S:118}
A.iO.prototype={
giJ(){var s,r,q=this,p=q.f,o=!1
if(isFinite(p)){s=q.r
if(isFinite(s)){r=q.w
if(isFinite(r)){o=q.x
p=isFinite(o)&&o>=0&&p*p+s*s+r*r>1e-8}else p=o}else p=o}else p=o
return p},
gnR(){var s,r
if(this.a){s=this.x
s=s<=0||!isFinite(s)}else s=!0
if(s)return 1
r=this.x/1000
return 1/(r*r)}}
A.tY.prototype={
pY(a,b){var s,r,q,p,o,n,m,l=this
if(b<0.35){l.z=B.bt
l.e=-1
return}s=l.c
if(s>0){s=l.c=s-a
if(s<=0)l.z=B.bt
else{r=1-s/l.d
if(r<0.15)q=Math.sin(r/0.15*3.141592653589793*0.5)
else q=r<0.35?0.35+0.45*Math.sin((r-0.15)/0.2*3.141592653589793):(1-r)*0.35
s=l.a
l.z=new A.iO(!0,B.b.n(q*(0.6+b*0.6),0,1),0.82+s.aG()*0.1,0.9+s.aG()*0.08,1,l.f,l.r,l.w,l.x)}}s=l.e
if(s>0)l.e=s-a
if((l.b-=a)<=0){s=l.a
l.d=l.c=0.35+s.aG()*0.15
p=(0.6+s.aG()*2.8)*1000
l.x=p
l.e=p/343
o=s.aG()*3.141592653589793*2
n=0.28+s.aG()*0.26
m=Math.sqrt(Math.max(0,1-n*n))
l.f=Math.cos(o)*n
l.r=m
l.w=Math.sin(o)*n
l.z=new A.iO(!0,B.b.n(0.6+b*0.6,0,1),0.82+s.aG()*0.1,0.9+s.aG()*0.08,1,l.f,l.r,l.w,l.x);++l.y
l.b=16-b*11+s.aG()*6}}}
A.mf.prototype={
C(){return"RendererBackendKind."+this.b}}
A.hG.prototype={
C(){return"RendererBackendState."+this.b}}
A.ua.prototype={}
A.mg.prototype={
gF(){return this.a}}
A.u9.prototype={
kn(a,b,c,d,e,f,g,h,i,j,k,l){var s,r,q,p=this
if(p.a.length===0||p.b.length===0||p.c.length===0)throw A.b(A.p("renderer diagnostics identity must be non-empty",null))
for(s=[p.e,p.f,p.r,p.w,p.x],r=0;r<5;++r){q=s[r]
if(q!=null&&q.length===0)throw A.b(A.p("renderer provenance values must be non-empty",null))}},
D(){var s,r,q,p=this,o=A.n(t.N,t.z)
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
A.ub.prototype={
dW(a,b){if(a<=0||b<=0)throw A.b(A.p("GUI surface dimensions must be positive",null))
this.c=a
this.d=b},
iL(a,b){var s,r,q,p,o
for(s=A.ad(this.a.d,t.rO),r=A.C(s).i("bR<1>"),s=new A.bR(s,r),s=new A.ao(s,s.gu(0),r.i("ao<a0.E>")),r=r.i("a0.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=q.c
o=!1
if(a>=p)if(a<=p+q.e){p=q.d
p=b>=p&&b<=p+q.f}else p=o
else p=o
if(p)return q}return null}}
A.v1.prototype={
mA(a){var s,r,q,p,o,n,m,l,k=this.a
k.S(0)
s=a.w
s===$&&A.u()
r=A.C(s)
q=r.i("l(1)").a(new A.v2())
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
A.v2.prototype={
$1(a){return t.r.a(a).Q===B.B},
$S:9}
A.c7.prototype={
C(){return"ShaderDebugMode."+this.b},
gnP(){switch(this.a){case 0:var s="Standard Shaded (Off)"
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
A.jm.prototype={
C(){return"ShaderTuningAvailability."+this.b}}
A.dt.prototype={
C(){return"ShaderTuningCategory."+this.b}}
A.cD.prototype={
god(){var s,r,q=this
if(q.e)return q.z?"[ON]":"[OFF]"
s=q.w
if(s>=0.1)return B.b.G(q.y,1)
else{r=q.y
if(s>=0.01)return B.b.G(r,2)
else return B.b.G(r,3)}},
geH(){var s,r,q=this
if(q.Q!==B.B)return"N/A"
if(q.e){s=q.ax
return(s==null?q.z:s)?"[ON]":"[OFF]"}r=q.at
if(r==null)r=q.y
s=q.w
if(s>=0.1)return B.b.G(r,1)
if(s>=0.01)return B.b.G(r,2)
return B.b.G(r,3)},
gF(){return this.a}}
A.v3.prototype={
gbA(){var s,r,q,p=this.b
if(!(p>=0&&p<6))return A.e(B.az,p)
s=B.az[p]
p=this.w
p===$&&A.u()
r=A.C(p)
q=r.i("F<1>")
p=A.J(new A.F(p,r.i("l(1)").a(new A.va(s)),q),q.i("t.E"))
return p},
gbZ(){var s,r=this.gbA(),q=r.length
if(q===0)return null
s=B.d.n(this.c,0,q-1)
if(!(s>=0&&s<r.length))return A.e(r,s)
return r[s]},
on(){var s,r
if(this.b===5)return
else{s=this.gbZ()
r=s==null?null:s.Q===B.B
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y+s.w,s.f,s.r)}},
nJ(){var s,r
if(this.b===5)return
else{s=this.gbZ()
r=s==null?null:s.Q===B.B
if(r===!0)if(s.e)s.z=!s.z
else s.y=B.b.n(s.y-s.w,s.f,s.r)}},
pz(){var s,r,q,p,o
if(this.b===5)this.e=B.aE
else for(s=this.gbA(),r=s.length,q=0;q<r;++q){p=s[q]
o=p.x
p.y=o
if(p.e)p.z=o>0.5}},
px(){var s,r,q,p
this.e=B.aE
s=this.w
s===$&&A.u()
r=0
for(;r<60;++r){q=s[r]
p=q.x
q.y=p
if(q.e)q.z=p>0.5}},
pH(a,b,c,d,e){var s,r,q,p,o,n,m,l=this
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
q.Q=o?B.B:B.es
if(o)n=null
else if(n==null)n="Not installed by this profile"
q.as=n
if(o)n=m==null?q.y:m
else n=null
q.at=n
if(o){if(p==null)p=q.z}else p=null
q.ax=p}l.f=!1
l.r=a
l.e=B.aE},
nL(){var s,r,q,p=this.w
p===$&&A.u()
s=A.C(p)
s=new A.F(p,s.i("l(1)").a(new A.v4()),s.i("F<1>")).gu(0)
r=A.C(p)
r=new A.F(p,r.i("l(1)").a(new A.v5()),r.i("F<1>")).gu(0)
p=this.b
if(!(p>=0&&p<6))return A.e(B.az,p)
p=B.az[p]
q=this.gbZ()
q=q==null?null:q.a
return A.E(["liveCount",s,"unavailableCount",r,"debugViewsAvailable",!1,"selectedCategory",p.b,"selectedItem",q],t.N,t.X)},
fg(){var s,r,q,p,o,n,m,l,k,j=this.w
j===$&&A.u()
j=A.J(j,t.r)
B.a.Z(j,new A.vb())
s=this.e
r=A.d([],t.bk)
for(q=j.length,p=t.N,o=t.X,n=0;n<j.length;j.length===q||(0,A.r)(j),++n){m=j[n]
l=m.e
k=l?m.z:m.y
if(m.Q===B.B)if(l){l=m.ax
if(l==null)l=m.z}else{l=m.at
if(l==null)l=m.y}else l=null
r.push(A.E(["id",m.a,"requested",k,"effective",l],p,o))}return A.E(["schema","pixeldart-shader-lab-v1","version",1,"debugMode",s.b,"controls",r],p,o)},
goI(){var s,r,q,p=A.d([],t.s),o=this.w
o===$&&A.u()
s=0
for(;s<60;++s){r=o[s]
q=r.x
if(r.e?r.z!==q>0.5:Math.abs(r.y-q)>1e-9)p.push(r.a)}B.a.a7(p)
return p},
om(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="requested",e="numeric control ",d=B.f.am(a,g),c=t.f
if(!c.b(d))throw A.b(B.j3)
if(!J.ab(d.h(0,"schema"),"pixeldart-shader-lab-v1")||!J.ab(d.h(0,"version"),1))throw A.b(B.iK)
s=d.h(0,"controls")
if(t.j.b(s)){r=J.cN(s)
this.w===$&&A.u()
r=r!==60}else r=!0
if(r)throw A.b(B.hA)
r=t.N
q=A.n(r,t.r)
p=this.w
p===$&&A.u()
o=0
for(;o<60;++o){n=p[o]
q.k(0,n.a,n)}m=A.n(r,t.X)
for(r=J.P(s);r.m();){l=r.gp()
if(!c.b(l)||typeof l.h(0,"id")!="string"||!l.M(f))throw A.b(B.iZ)
k=A.x(l.h(0,"id"))
n=q.h(0,k)
if(n==null||m.M(k))throw A.b(A.M("unknown or duplicate Shader Lab control: "+k,g,g))
j=l.h(0,f)
if(n.e){if(!A.bE(j))throw A.b(A.M("toggle "+k+" requires a boolean request",g,g))
m.k(0,k,j)}else{if(typeof j!="number"||!isFinite(j))throw A.b(A.M(e+k+" requires a finite number",g,g))
i=n.f
if(j<i||j>n.r)throw A.b(A.M(e+k+" is outside ["+A.z(i)+", "+A.z(n.r)+"]",g,g))
m.k(0,k,j)}}h=d.h(0,"debugMode")
if(typeof h!="string"||!B.a.R(B.dG,new A.v8(h)))throw A.b(B.i3)
if(h!=="none")throw A.b(B.hS)
for(o=0;o<60;++o){n=p[o]
c=m.h(0,n.a)
c.toString
if(n.e)n.z=A.U(c)
else n.y=A.az(c)}this.e=B.a.az(B.dG,new A.v9(h))},
J(a){var s,r,q=this.w
q===$&&A.u()
s=A.C(q)
r=A.bP(new A.F(q,s.i("l(1)").a(new A.v7(a)),s.i("F<1>")),t.r)
q=r==null?null:r.y
return q==null?1:q},
bO(a){var s,r,q=this.w
q===$&&A.u()
s=A.C(q)
r=A.bP(new A.F(q,s.i("l(1)").a(new A.v6(a)),s.i("F<1>")),t.r)
q=r==null?null:r.z
return q!==!1}}
A.va.prototype={
$1(a){return t.r.a(a).d===this.a},
$S:9}
A.v4.prototype={
$1(a){return t.r.a(a).Q===B.B},
$S:9}
A.v5.prototype={
$1(a){return t.r.a(a).Q!==B.B},
$S:9}
A.vb.prototype={
$2(a,b){var s=t.r
return B.c.I(s.a(a).a,s.a(b).a)},
$S:120}
A.v8.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:49}
A.v9.prototype={
$1(a){return t.gn.a(a).b===this.a},
$S:49}
A.v7.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.v6.prototype={
$1(a){return t.r.a(a).a===this.a},
$S:9}
A.vj.prototype={
$1(a){var s,r=Math.cos(0.8988445647770796)*Math.cos(a)
if(Math.abs(r)<1e-12)return 0
s=(Math.sin(-0.014538592669112763)-Math.sin(0.8988445647770796)*Math.sin(a))/r
if(s<=-1)return 24
if(s>=1)return 0
return Math.acos(s)*24/3.141592653589793},
$S:122}
A.c8.prototype={
C(){return"SleepQuality."+this.b}}
A.bJ.prototype={
C(){return"SleepLocation."+this.b}}
A.hL.prototype={
gaE(){return this.a}}
A.pO.prototype={
e3(a){var s=this.c
if(a>s)return!1
this.c=s-a
return!0},
jX(a){var s=this.d
if(a>s)return!1
this.d=s-a
return!0},
D(){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.f,i=A.d([],t.rq)
for(s=m.r,r=s.length,q=t.N,p=t.K,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
i.push(A.E(["day",n.a,"quality",n.b.b,"location",n.c.b],q,p))}return A.E(["hoursRemaining",l,"gasRemaining",k,"rationCoupons",m.e,"rationCollectedToday",j,"sleepHistory",i],q,t.z)}}
A.pP.prototype={
$1(a){return t.is.a(a).b===this.a},
$S:123}
A.pQ.prototype={
$1(a){return t.u5.a(a).b===this.a},
$S:124}
A.lh.prototype={
gF(){return this.a}}
A.lz.prototype={
C(){return"InteractionType."+this.b}}
A.fN.prototype={
C(){return"WorldComparisonKind."+this.b}}
A.wj.prototype={}
A.fM.prototype={}
A.kX.prototype={}
A.rc.prototype={}
A.rg.prototype={
fq(){var s,r,q,p=t.U,o=A.d([],p)
for(s=this.a.b,s=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>")),r=this.b;s.m();){q=s.d
if(q.b<=r.a)o.push(q)}p=A.d(o.slice(0),p)
B.a.Z(p,new A.rh())
return p},
n2(a,b){var s,r,q,p,o,n=b.b
if(n.gN(n))return B.tw
s=t.N
r=A.a1(s)
q=A.a1(s)
for(s=n.ga9(),s=s.gA(s),p=a.c;s.m();){o=s.gp()
if(B.a.gac(p).a.h(0,o)==n.h(0,o))r.l(0,o)
else q.l(0,o)}if(q.a!==0)return new A.fM(B.b4,r)
s=r.a
o=B.a.gac(p).a
if(s===o.gu(o)){n=n.gu(n)
p=B.a.gac(p).a
p=n===p.gu(p)
n=p}else n=!1
if(n)return new A.fM(B.eR,r)
return new A.fM(B.cu,r)},
lN(a,b,c,d,e){var s,r,q=this.a.b.h(0,e)
if(q==null)return new A.kX(e,!1,B.tv,null)
s=q.d===c
r=this.n2(q,d)
this.d.$1(e)
return new A.kX(e,s,r,r.a===B.b4&&s?'The world says "'+d.c+'". The entry says "'+B.a.gac(q.c).t(0)+'".':null)},
nC(a,b){var s,r=a.a
if(r==null||!a.d||a.e.a!==B.b4)return null
s=this.a.b.h(0,r)
if(s==null)return null
return new A.rc(B.a.gac(s.c).t(0)+" but "+A.z(a.f))}}
A.rh.prototype={
$2(a,b){var s=t.g
s.a(a)
return B.d.I(s.a(b).a,a.a)},
$S:18}
A.ja.prototype={
gF(){return this.a}}
A.j9.prototype={
gF(){return this.a}}
A.dp.prototype={
gF(){return this.a}}
A.tW.prototype={}
A.tX.prototype={}
A.tV.prototype={
km(a,b){var s,r,q,p,o,n,m,l,k,j
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
if(!q.M(m))throw A.b(A.p("roof "+n+" references missing drain "+m,null))}for(s=new A.ae(q,q.r,q.e,A.v(q).i("ae<2>"));s.m();){r=s.d
q=r.a
n=!0
if(q.length!==0){m=r.b
if(isFinite(m.a)&&isFinite(m.b)&&isFinite(m.c)){l=r.c
if(isFinite(l.a)&&isFinite(l.b)&&isFinite(l.c)){r=r.d
r=!isFinite(r)||r<=0||l.b>m.b+0.001}else r=n}else r=n}else r=n
if(r)A.h(A.p("invalid rain drain "+q,null))}},
k6(a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=!0
if(isFinite(a9))if(!(a9<0))if(isFinite(a8))if(!(a8<0))a7=!isFinite(1)
if(a7)throw A.b(A.p("invalid rain flow step inputs",null))
s=A.d([],t.F7)
r=A.n(t.N,t.i)
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
B.a.l(s,new A.dp(h+":overflow",a3,new A.a(a3.a+0,a3.b+-0.55,a3.c+0),a2/a4,0.012+B.b.n(a2,0,0.02)*0.4))}r.k(0,i,0)}for(a7=s.length,k=0;k<s.length;s.length===a7||(0,A.r)(s),++k){a6=s[k]
q=a6.a
p=!0
if(q.length!==0){o=a6.b
i=o.a
if(isFinite(i)&&isFinite(o.b)&&isFinite(o.c)){h=a6.c
a3=h.a
if(isFinite(a3)&&isFinite(h.b)&&isFinite(h.c)){a4=a6.d
if(isFinite(a4))if(!(a4<0)){p=a6.e
p=!isFinite(p)||p<=0||new A.a(a3-i,h.b-o.b,h.c-o.c).gu(0)<0.00001}}}}if(p)A.h(A.p("invalid rain flow segment "+q,null))}return new A.tX(A.ad(s,t.z0),n,c,b)}}
A.cC.prototype={
C(){return"RuptureStep."+this.b}}
A.ug.prototype={}
A.dr.prototype={}
A.uh.prototype={
gfF(){var s=B.bP.h(0,this.a)
return s==null?0:s},
k0(a,b){var s,r,q=this
t.yT.a(b)
if(q.a===B.N)s=q.e
else s=!0
if(s)return B.dF
r=A.AE(b)
s=q.c
B.a.S(s)
B.a.K(s,r)
B.a.S(q.d)
q.a=B.b0
q.b=0
q.e=!1
return A.d([B.fI],t.xB)},
ew(a,b){var s,r,q,p,o,n,m,l=this
if(!isFinite(a)||a<0)throw A.b(A.p("rupture advance must be a finite non-negative duration",null))
if(l.a===B.N||a===0)return B.dF
s=A.d([],t.xB)
r=a
for(;;){if(!(r>0&&l.a!==B.N))break
A:{q=l.a
p=B.bP.h(0,q)
if(p==null)p=0
o=l.b
n=p-o
m=r<n?r:n
l.b=o+m
r-=m
if(l.a===B.ah)l.mg(s)
p=l.b
o=B.bP.h(0,l.a)
if(p<(o==null?0:o))break A
B.a.l(s,new A.dr())
if(q===B.ah){l.a=B.N
l.b=0
l.e=!0
B.a.l(s,B.fH)}else{p=q.a+1
if(!(p<7))return A.e(B.dA,p)
l.a=B.dA[p]
l.b=0
B.a.l(s,new A.dr())}}}return A.ad(s,t.F3)},
D(){var s=this,r=t.N
return A.E(["step",s.a.b,"stepElapsed",s.b,"mantleIds",A.ad(s.c,r),"extinguishedMantles",A.ad(s.d,r),"completed",s.e],r,t.z)},
mg(a){var s,r,q,p,o,n,m,l=this
t.fx.a(a)
s=l.c
r=t.N
q=B.d.n(B.b.aZ(l.b/l.gfF()*A.ad(s,r).length),0,A.ad(s,r).length)
p=l.d
for(;;){o=A.aI(p,!1,r)
o.$flags=3
if(!(o.length<q))break
o=A.aI(s,!1,r)
o.$flags=3
n=o
o=A.aI(p,!1,r)
o.$flags=3
m=o.length
if(!(m<n.length))return A.e(n,m)
B.a.l(p,n[m])
B.a.l(a,new A.dr())}}}
A.lp.prototype={
gfJ(){var s=this.b
if(s<7||s>19)return 0
return B.b.n((s-7)/12,0,1)},
gnE(){var s=this.b
if(s<=5.5||s>=20.5)return 0
return Math.sin(3.141592653589793*B.b.n((s-5.5)/15,0,1))},
fE(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("skipped hour must be finite and in [0, 24)",null,null))
this.b=a},
j7(a){if(!isFinite(a)||a<0||a>=24)throw A.b(A.M("saved hour must be finite and in [0, 24)",null,null))
this.b=a}}
A.eM.prototype={
C(){return"PrecipitationKind."+this.b}}
A.fJ.prototype={
D(){var s=this
return A.E(["day",s.a,"rain",s.b,"rainIntensity",s.c,"daylightHours",s.d,"windSpeedMps",s.e,"windDirectionRadians",s.f,"outsideTemperatureCelsius",s.r,"precipitationKind",s.w.b],t.N,t.z)},
gaE(){return this.a}}
A.w9.prototype={
eY(a){var s,r
if(a<1||a>this.b.length)throw A.b(A.b6(a,1,this.b.length,"day",null))
s=this.b
r=a-1
if(!(r>=0&&r<s.length))return A.e(s,r)
return s[r]}}
A.yf.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k===2||k===5||k===8||k===11||k===14||k===16||k===18||k===19||k===20
if(j){s=B.b.n(B.b.n(0.25+0.65*Math.pow(Math.sin(k*3.141592653589793/7),2)*(0.6+0.4*(k/21)),0.2,1)+((A.nW(this.b,k)&255)/255-0.5)*0.08,0.2,0.98)
if(k===20)s=0.98}else s=0
r=k-1
q=this.b
p=k+101
o=j?3+s*5+(A.nW(q,p)&255)/255:1.2+(A.nW(q,p)&255)/255*0.8
p=A.nW(q,k+211)
q=A.nW(q,k+307)
n=A.o1(B.b.G(s,2))
m=A.o1(B.b.G(12-r*0.11000000000000001,2))
l=A.o1(B.b.G(o,2))
p=A.o1(B.b.G((p&65535)/65535*3.141592653589793*2,5))
q=A.o1(B.b.G(8-r*0.08+((q&255)/255-0.5)*0.6,2))
return new A.fJ(k,j,n,m,l,p,q,j?B.aA:B.x)},
$S:125}
A.hS.prototype={}
A.eR.prototype={}
A.vZ.prototype={
D(){var s=this
return A.E(["temperatureIncreaseCelsius",s.a,"localTemperatureCelsius",s.b,"clearanceRadiusM",s.c,"condensationSuppression01",s.d,"frostFree",s.e],t.N,t.z)}}
A.w7.prototype={
D(){var s=this,r=s.b,q=t.N
return A.E(["precipitationKind",s.a.b,"windVelocityMps",A.E(["x",r.a,"y",r.b,"z",r.c],q,t.i),"effectiveWindSpeedMps",s.c,"exposureFactor",s.d,"precipitationMassFluxKgM2S",s.e,"terminalFallSpeedMps",s.f,"snowAccumulationRateMps",s.r,"impactEnergyFluxWattsPerM2",s.w,"convectiveConductanceWPerM2K",s.x,"nextRoomTemperatureCelsius",s.y,"dewPointCelsius",s.z,"condensationRisk",s.Q],q,t.z)}}
A.fK.prototype={}
A.eT.prototype={
B(){var s,r,q=this,p=q.a,o=!0
if(p.length!==0){s=q.b
if(A.kh(s)){r=q.c
if(A.kh(r))if(isFinite(q.d)){o=q.e
o=!isFinite(o)||s.a>r.a||s.b>r.b||s.c>r.c||o<0||o>1}}}if(o)throw A.b(A.p("invalid weather collision box "+p,null))},
gF(){return this.a}}
A.eU.prototype={
C(){return"WeatherImpactResponse."+this.b}}
A.mR.prototype={}
A.hT.prototype={
D(){return A.E(["snowDepthM",this.a,"waterFilmDepthM",this.b,"materialDissolution01",this.c],t.N,t.i)},
hQ(){var s,r=this.a,q=!0
if(isFinite(r)){s=this.b
if(isFinite(s)){q=this.c
r=!isFinite(q)||r<0||s<0||q<0||q>1}else r=q}else r=q
if(r)throw A.b(A.p("weather surface state must be finite and >= 0",null))}}
A.wa.prototype={
$1(a){var s=this.a.h(0,a)
if(typeof s!="number"||!isFinite(s))throw A.b(A.M("weather surface "+a+" must be finite",null,null))
return s},
$S:126}
A.wb.prototype={
D(){var s=this
return A.E(["snowDepthM",s.a,"waterFilmDepthM",s.b,"depositedDepthM",s.c,"meltedDepthM",s.d,"evaporatedDepthM",s.e,"meltEnergyJoulesPerM2",s.f,"overflowDepthM",s.r,"previousWaterFilmDepthM",s.w,"materialDissolution01",s.x],t.N,t.i)}}
A.fc.prototype={
C(){return"AuthoredEventConsumer."+this.b}}
A.qi.prototype={
q2(){var s,r,q
for(s=this.a,r=s.length,q=0;q<r;++q)A.KF(s[q].b)},
ol(a,b){var s,r,q,p,o,n,m,l=a.z,k=a.Q
if(l==null||k==null)return a.d
s=(2166136261^b)>>>0
for(r=new A.dI(a.a+":"+a.c),q=t.sU,r=new A.ao(r,r.gu(0),q.i("ao<a5.E>")),q=q.i("a5.E");r.m();){p=r.d
s=((s^(p==null?q.a(p):p))>>>0)*16777619&2147483647}o=B.b.ao((l+(k-l)*(s/2147483647))*60)
n=B.b.i4(l*60)
m=B.b.aZ(k*60)
return(n<=m?B.d.n(o,n,m):B.d.n(o,0,1439))/60},
ih(a){var s,r,q,p,o=A.d([],t.E)
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===a)o.push(p)}return o},
mU(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a)return p}return null}}
A.qj.prototype={
$2(a,b){var s,r=B.d.I(a.gaE(),b.gaE())
if(r!==0)return r
s=B.b.I(a.gb0(),b.gb0())
return s!==0?s:J.Br(a.gF(),b.gF())},
$S:43}
A.ln.prototype={
cq(a,b){var s,r,q,p,o,n,m,l=A.d([],t.E)
for(s=this.a,r=s.ih(a),q=r.length,p=this.b,o=this.c,n=0;n<r.length;r.length===q||(0,A.r)(r),++n){m=r[n]
if(s.ol(m,p)<=b&&o.l(0,m.a))B.a.l(l,m)}return l},
gig(){return new A.cc(this.o7(),t.oe)},
o7(){var s=this
return function(){var r=0,q=1,p=[],o,n
return function $async$gig(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.a,n=1
case 2:if(!(n<=21)){r=4
break}r=5
return a.mp(o.ih(n))
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
gnK(){var s=this.c
s=A.J(s,A.v(s).c)
B.a.a7(s)
return s},
D(){var s=this.c
s=A.J(s,A.v(s).c)
B.a.a7(s)
return A.E(["delivered",s],t.N,t.z)}}
A.qh.prototype={
$1(a){return this.a.mU(A.x(a))!=null},
$S:3}
A.tb.prototype={
b_(a,b){var s=this.b
if(s.M(a))s=b==null||s.h(0,a)===b
else s=!1
return s},
oj(a){return this.b_(a,null)},
mx(a,b){var s,r,q=a.a
this.a.k(0,q,b.a)
s=this.b
s.k(0,"last-reaction",q)
for(q=b.d.gO(),q=q.gA(q);q.m();){r=q.gp()
s.k(0,r.a,r.b)}},
D(){var s,r,q,p,o,n,m,l,k=this.a,j=A.v(k).i("N<1,2>")
k=A.J(new A.N(k,j),j.i("t.E"))
B.a.Z(k,new A.td())
j=t.N
k=A.A4(k,j,j)
s=this.b
r=A.v(s).i("N<1,2>")
s=A.J(new A.N(s,r),r.i("t.E"))
B.a.Z(s,new A.te())
s=A.A4(s,j,j)
r=A.n(j,t.P)
q=this.c
p=A.v(q).i("N<1,2>")
q=A.J(new A.N(q,p),p.i("t.E"))
B.a.Z(q,new A.tf())
p=q.length
o=t.z
n=0
for(;n<q.length;q.length===p||(0,A.r)(q),++n){m=q[n]
l=m.b
r.k(0,m.a,A.E(["sceneId",l.a,"ordinal",l.b,"revision",l.c,"text",l.d],j,o))}return A.E(["schemaVersion",1,"choices",k,"flags",s,"frozenQuotes",r],j,o)}}
A.td.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:24}
A.te.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:24}
A.tf.prototype={
$2(a,b){var s=t.gJ
return B.c.I(s.a(a).a,s.a(b).a)},
$S:129}
A.db.prototype={
D(){var s=this
return A.E(["sceneId",s.a,"ordinal",s.b,"revision",s.c,"text",s.d],t.N,t.z)}}
A.bI.prototype={
D(){var s=this
return A.E(["id",s.a,"name",s.b,"locationRoom",s.c,"description",s.d,"examineTag",s.e],t.N,t.z)},
gF(){return this.a}}
A.tw.prototype={
fo(){var s,r,q,p,o,n,m,l="denise.pears",k=A.d([],t.xz)
for(s=this.b,r=s.length,q=this.a,p=q.b,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m="aftermath."+B.c.aT(n.a,8)
if(p.M(m))m=p.h(0,m)==="placed"
else m=!1
if(m)B.a.l(k,n)}if(q.b_("ashworth.compact","accepted"))B.a.l(k,B.or)
if(q.b_(l,"taken"))B.a.l(k,B.ov)
else if(q.b_(l,"left"))B.a.l(k,B.os)
if(q.b_("sylvia.certificate","granted"))B.a.l(k,B.ou)
if(q.b_("residue.coal","cellar"))B.a.l(k,B.oq)
if(q.b_("telegram.08","read"))B.a.l(k,B.op)
if(q.b_("truth.shawl","home"))B.a.l(k,B.oo)
if(q.b_("sowerby.paraffin","received"))B.a.l(k,B.ot)
if(q.b_("inspector.proclamation","acknowledged"))B.a.l(k,B.on)
return k},
jn(a){var s=this.fo(),r=A.C(s),q=r.i("F<1>")
s=A.J(new A.F(s,r.i("l(1)").a(new A.tx(a)),q),q.i("t.E"))
return s}}
A.tx.prototype={
$1(a){return t.E4.a(a).c===this.a},
$S:45}
A.vn.prototype={
D(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.hN(e.a),c=t.N,b=t.P,a=A.n(c,b)
for(s=e.b,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0);s.m();){r=s.d
q=r.a
a.k(0,q,e.mm(q,r.b))}s=A.hN(e.r)
q=A.hN(e.w)
p=A.hN(e.x)
o=A.n(c,t.rW)
for(n=e.as,n=new A.N(n,A.v(n).i("N<1,2>")).gA(0),m=t.A7;n.m();){l=n.d
k=l.a
j=A.d([],m)
for(i=J.P(l.b);i.m();){h=i.gp()
j.push(A.E(["field",h.a,"value",h.b],c,c))}o.k(0,k,j)}n=A.n(c,b)
for(m=e.at,m=new A.N(m,A.v(m).i("N<1,2>")).gA(0);m.m();){g=m.d
n.k(0,g.a,g.b.D())}b=A.n(c,b)
for(m=e.ax,m=new A.N(m,A.v(m).i("N<1,2>")).gA(0);m.m();){f=m.d
b.k(0,f.a,f.b.D())}return A.E(["broadcasts",d,"visitors",a,"vocabulary",e.e,"documents",e.f,"street",s,"unverifiables",q,"nights",p,"endings",e.y,"records",e.z,"cues",e.Q,"claims",o,"reactions",n,"variants",b,"residues",e.ay],c,t.z)},
mm(a,b){var s,r=A.hN(t.ee.a(b)),q=this.c.h(0,a)
if(q!=null&&q.a!==0)r.k(0,"_arrival",A.hN(q.bn(0,new A.vo(),t.S,t.z)))
s=this.d.h(0,a)
if(s!=null&&s.gab(s))r.k(0,"_ambient",A.hN(s.bn(0,new A.vp(),t.S,t.z)))
return r}}
A.vo.prototype={
$2(a,b){return new A.O(A.j(a),t.BX.a(b).D(),t.pr)},
$S:131}
A.vp.prototype={
$2(a,b){return new A.O(A.j(a),t.vw.a(b).D(),t.pr)},
$S:132}
A.fI.prototype={
D(){return A.E(["hour",this.a,"order",this.b],t.N,t.S)},
gb0(){return this.a}}
A.fH.prototype={
D(){return A.E(["hour",this.a,"channel",this.b,"lineKey",this.c],t.N,t.z)},
gb0(){return this.a}}
A.jx.prototype={
D(){var s=t.N
return A.E(["field",this.a,"value",this.b],s,s)}}
A.mP.prototype={
D(){var s,r,q,p=this,o=A.d([],t.cs)
for(s=p.f,r=s.length,q=0;q<r;++q)o.push(s[q].D())
return A.E(["id",p.a,"visitor",p.b,"day",p.c,"tier",p.d,"ordinal",p.e,"options",o],t.N,t.z)},
gF(){return this.a},
gaE(){return this.c}}
A.fz.prototype={
D(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"label",r.b)
q.k(0,"reply",r.c)
s=r.d
if(s.gab(s))q.k(0,"effects",s)
return q},
gF(){return this.a}}
A.dx.prototype={
D(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"id",r.a)
q.k(0,"target",r.b)
q.k(0,"replacement",r.c)
s=r.d
if(s.gab(s))q.k(0,"when",s)
return q},
gF(){return this.a}}
A.vl.prototype={
q1(){var s,r,q,p,o,n,m,l,k=A.n(t.S,t.r6)
for(s=this.c,r=s.length,q=t.E,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.c
m=k.h(0,n)
if(m==null){m=A.d([],q)
k.k(0,n,m)
n=m}else n=m
B.a.l(n,o)}for(l=1;l<=21;++l){s=k.h(0,l)
s=s==null?null:s.length===0
if(s!==!1)throw A.b(A.i("campaign schedule has no event for day "+l))}s=A.a1(t.N)
for(r=k.h(0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.l(0,r[p].b)
if(!s.q(0,"broadcast")||!s.q(0,"visitor"))throw A.b(A.i("day 1 schedule needs broadcast and visitor events"))
s=k.h(0,21)
s.toString
if(!B.a.R(s,new A.vm()))throw A.b(A.i("day 21 schedule needs an ending event"))}}
A.vm.prototype={
$1(a){return t.Dm.a(a).b==="ending"},
$S:133}
A.e0.prototype={
gF(){return this.a},
gaE(){return this.c},
gb0(){return this.d}}
A.un.prototype={
$1(a){return typeof a!="string"},
$S:6}
A.uo.prototype={
$1(a){var s,r=this.a.h(0,a)
if(r==null)s=""
else s=typeof r=="string"?r:A.h(A.M("screenplay event "+a+" is invalid",null,null))
return s},
$S:21}
A.mm.prototype={
gF(){return this.a},
gaE(){return this.b}}
A.mj.prototype={}
A.mk.prototype={
gF(){return this.a}}
A.ml.prototype={
gF(){return this.a}}
A.vq.prototype={
bm(){var s=0,r=A.aN(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bm=A.aO(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
l=null
s=A.e8().gb2().h(0,"dialogueSource")==="api"?6:7
break
case 6:q=9
s=12
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("/api/projects/the-quarantine/dialogue")),t.m),$async$bm)
case 12:k=a3
s=A.U(k.ok)?13:14
break
case 13:f=t.N
a1=B.f
s=15
return A.a7(A.ax(A.c(k.text()),f),$async$bm)
case 15:e=a1.am(a3,null)
d=t.f
if(!d.b(e)||!J.ab(e.h(0,"schema"),"quarantine.dialogue.v1")||!d.b(e.h(0,"corpus"))||!d.b(e.h(0,"screenplay")))A.h(B.i_)
l=A.b5(e,f,t.z)
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
case 16:m=B.f.a3(l.h(0,"corpus"),null)
n=B.f.a3(l.h(0,"screenplay"),null)
s=17
break
case 18:s=19
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("res/text.json")),t.m),$async$bm)
case 19:j=a3
s=20
return A.a7(A.ax(A.c(j.text()),t.N),$async$bm)
case 20:m=a3
case 17:i=A.KP(m)
f=J.b8(i,"broadcasts")
f.toString
d=t.P
o.a=d.a(f)
f=J.b8(i,"visitors")
f.toString
o.b=d.a(f)
f=J.b8(i,"vocabulary")
f.toString
o.c=d.a(f)
f=J.b8(i,"documents")
f.toString
d.a(f)
f=J.b8(i,"street")
f.toString
d.a(f)
f=J.b8(i,"unverifiables")
f.toString
o.f=d.a(f)
f=J.b8(i,"nights")
f.toString
d.a(f)
f=J.b8(i,"endings")
f.toString
o.w=d.a(f)
f=J.b8(i,"records")
f.toString
o.x=d.a(f)
f=J.b8(i,"cues")
f.toString
d.a(f)
f=J.b8(i,"claims")
f.toString
o.z=d.a(f)
f=t.f
if(f.b(J.b8(i,"reactions"))){b=J.b8(i,"reactions")
if(b==null)b=f.a(b)
b=A.b5(b,t.N,t.z)}else b=A.n(t.N,t.z)
o.Q=d.a(b)
if(f.b(J.b8(i,"variants"))){b=J.b8(i,"variants")
if(b==null)b=f.a(b)
b=A.b5(b,t.N,t.z)}else b=A.n(t.N,t.z)
o.as=d.a(b)
if(f.b(J.b8(i,"residues"))){b=J.b8(i,"residues")
f=b==null?f.a(b):b
f=A.b5(f,t.N,t.z)}else f=A.n(t.N,t.z)
o.at=d.a(f)
s=n==null?21:23
break
case 21:s=24
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("res/story_script.json")),t.m),$async$bm)
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
return A.a7(A.ax(A.c(h.text()),t.N),$async$bm)
case 30:s=28
break
case 29:a3=f
case 28:f=a1.Ho(a3)
o.ax=f
f.q1()
f=o.ax
f.toString
o.ay=A.Ga(f)
case 26:q=1
s=5
break
case 3:q=2
a0=p.pop()
g=A.am(a0)
f=A.z(g)
throw A.b("Failed to load text.json: "+f)
s=5
break
case 2:s=1
break
case 5:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$bm,r)},
jm(a){var s,r,q,p=this.a
p===$&&A.u()
s=p.h(0,B.d.t(a))
if(t.f.b(s)){p=s.gO().dZ(0,new A.vr())
r=p.$ti
q=t.N
return A.A4(new A.cX(p,r.i("O<f,f>(1)").a(new A.vs()),r.i("cX<1,O<f,f>>")),q,q)}return null},
fp(a,b){var s=this.jm(a)
return s==null?null:s.h(0,b)},
jq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.Q
f===$&&A.u()
s=f.h(0,a+":"+b+":"+c+":"+d)
f=t.f
if(!f.b(s))return g
r=s.h(0,"id")
q=s.h(0,"options")
if(typeof r!="string"||!t.j.b(q))return g
p=A.d([],t.kv)
for(o=J.P(q),n=t.N;o.m();){m=o.gp()
if(!f.b(m)||typeof m.h(0,"id")!="string"||typeof m.h(0,"label")!="string"||typeof m.h(0,"reply")!="string")return g
l=m.h(0,"effects")
k=A.n(n,n)
if(f.b(l))for(j=l.gO(),j=j.gA(j);j.m();){i=j.gp()
h=i.a
if(typeof h!="string"||typeof i.b!="string")return g
k.k(0,h,A.x(i.b))}B.a.l(p,new A.fz(A.x(m.h(0,"id")),A.x(m.h(0,"label")),A.x(m.h(0,"reply")),A.aZ(k,n,n)))}if(p.length<2)return g
return new A.mP(r,a,b,c,d,A.ad(p,t.Y))},
jp(a,b){var s,r,q,p,o,n=null,m=this.b
m===$&&A.u()
s=m.h(0,a)
m=t.f
r=m.b(s)?s.h(0,"_arrival"):n
q=m.b(r)?r.h(0,B.d.t(b)):n
if(!m.b(q))return n
p=q.h(0,"hour")
o=q.h(0,"order")
if(typeof p!="number"||typeof o!="number"||p!==B.b.aj(p)||o!==B.b.aj(o))return n
return new A.fI(B.b.aj(p),B.b.aj(o))},
jo(a,b){var s,r,q,p,o,n,m=null,l=this.b
l===$&&A.u()
s=l.h(0,a)
l=t.f
r=l.b(s)?s.h(0,"_ambient"):m
q=l.b(r)?r.h(0,B.d.t(b)):m
if(!l.b(q))return m
p=q.h(0,"hour")
o=q.h(0,"channel")
n=q.h(0,"lineKey")
if(typeof p!="number"||p!==B.b.aj(p)||typeof o!="string"||typeof n!="string")return m
return new A.fH(B.b.aj(p),o,n)},
q5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="replacement",a3=t.S,a4=t.G,a5=t.N,a6=A.n(a5,t.ee),a7=A.n(a5,t.tQ),a8=A.n(a5,t.pG),a9=t.a,b0=A.n(a5,t.uh),b1=A.n(a5,t.sy),b2=A.n(a5,t.aS),b3=A.n(a5,a5),b4=a1.b
b4===$&&A.u()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gA(0)
s=t.vw
r=t.BX
q=t.f
while(b4.m()){p=b4.d
o=p.b
if(!q.b(o))continue
n=A.n(a3,a4)
for(o=o.gO(),o=o.gA(o);o.m();){m=o.gp()
l=m.a
k=typeof l=="string"?A.dX(l,null):null
if(k==null||!q.b(m.b))continue
j=A.n(a5,a5)
for(m=q.a(m.b).gO(),m=m.gA(m);m.m();){l=m.gp()
i=l.a
if(typeof i=="string"&&typeof l.b=="string")j.k(0,i,A.x(l.b))}if(j.a!==0)n.k(0,k,j)}if(n.a===0)continue
o=p.a
a6.k(0,o,n)
h=A.n(a3,r)
for(m=n.$ti.i("c1<1>"),l=new A.c1(n,n.r,n.e,m);l.m();){i=l.d
g=a1.jp(o,i)
if(g!=null)h.k(0,i,g)}if(h.a!==0)a7.k(0,o,h)
f=A.n(a3,s)
for(m=new A.c1(n,n.r,n.e,m);m.m();){l=m.d
e=a1.jo(o,l)
if(e!=null)f.k(0,l,e)}if(f.a!==0)a8.k(0,o,f)}b4=a1.Q
b4===$&&A.u()
b4=new A.ae(b4,b4.r,b4.e,A.v(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"visitor")!="string"||typeof d.h(0,"day")!="number"||typeof d.h(0,"tier")!="string"||typeof d.h(0,"ordinal")!="number"||typeof d.h(0,"id")!="string")continue
c=a1.jq(A.x(d.h(0,"visitor")),B.b.aj(A.a4(d.h(0,"day"))),A.x(d.h(0,"tier")),B.b.aj(A.a4(d.h(0,"ordinal"))))
if(c!=null)b1.k(0,c.b+":"+c.c+":"+c.d+":"+c.e,c)}b4=a1.as
b4===$&&A.u()
b4=new A.ae(b4,b4.r,b4.e,A.v(b4).i("ae<2>"))
while(b4.m()){d=b4.d
if(!q.b(d)||typeof d.h(0,"id")!="string"||typeof d.h(0,"target")!="string"||typeof d.h(0,a2)!="string")continue
b=A.n(a5,a5)
a=d.h(0,"when")
if(q.b(a))for(s=a.gO(),s=s.gA(s);s.m();){r=s.gp()
o=r.a
if(typeof o!="string"||typeof r.b!="string")continue
b.k(0,o,A.x(r.b))}s=A.x(d.h(0,"id"))
b2.k(0,s,new A.dx(s,A.x(d.h(0,"target")),A.x(d.h(0,a2)),A.aZ(b,a5,a5)))}b4=a1.at
b4===$&&A.u()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gA(0)
while(b4.m()){p=b4.d
s=p.b
if(typeof s=="string")b3.k(0,p.a,s)}b4=a1.z
b4===$&&A.u()
b4=new A.N(b4,A.v(b4).i("N<1,2>")).gA(0)
s=t.ld
r=t.j
while(b4.m()){p=b4.d
d=p.b
if(!r.b(d))continue
o=A.d([],s)
for(m=J.P(d);m.m();){a0=m.gp()
if(q.b(a0)&&typeof a0.h(0,"field")=="string"&&typeof a0.h(0,"value")=="string")o.push(new A.jx(A.x(a0.h(0,"field")),A.x(a0.h(0,"value"))))}if(o.length!==0)b0.k(0,p.a,o)}return new A.vn(A.n(a3,a4),a6,a7,a8,A.n(a5,a9),A.n(a5,a9),A.n(a3,a9),A.n(a3,a9),A.n(a3,a9),A.n(a5,a9),A.n(a5,a9),A.n(a5,a9),b0,b1,b2,b3)}}
A.vr.prototype={
$1(a){t.AC.a(a)
return typeof a.a=="string"&&typeof a.b=="string"},
$S:135}
A.vs.prototype={
$1(a){t.AC.a(a)
return new A.O(A.x(a.a),A.x(a.b),t.q)},
$S:136}
A.ky.prototype={
c4(a,b,c){var s=B.c.aS(a),r=B.c.aS(c)
if(r.length===0)return""
if(b||this.a===B.cw)return s.length===0?r:s+": "+r
if(this.a===B.cv)return r
return s.length===0?r:s+": "+r},
iB(a,b){return this.c4(a,!1,b)}}
A.zT.prototype={}
A.d9.prototype={
C(){return"AccessibilityScreenReaderVerbosity."+this.b}}
A.eo.prototype={
cu(a,b,c,d,e){var s=this,r=null,q=c==null?s.b:c,p=b==null?s.c:b,o=e==null?s.d:e,n=a==null?s.e:a,m=d==null?s.f:d
return new A.eo(q,p,o,n,m)},
nu(a){var s=null
return this.cu(s,s,s,a,s)},
nA(a){var s=null
return this.cu(s,s,s,s,a)},
nq(a){var s=null
return this.cu(s,s,a,s,s)},
no(a){var s=null
return this.cu(s,a,s,s,s)},
n5(a){var s=null
return this.cu(a,s,s,s,s)},
D(){var s=this,r=s.f
r=r==null?null:r.b
return A.E(["version",1,"reducedMotion",s.b,"photosensitivitySafe",s.c,"uiScale",s.d,"captions",s.e,"screenReaderVerbosity",r],t.N,t.X)}}
A.oc.prototype={
$1(a){return a==null?null:A.U(a)},
$S:137}
A.oa.prototype={
$1(a){return t.mq.a(a).b===this.a.h(0,"screenReaderVerbosity")},
$S:47}
A.ob.prototype={
$0(){return A.h(B.iW)},
$S:7}
A.on.prototype={
cf(a,b){var s,r=this,q=r.e.iB(a,b)
if(q.length===0)return
s=r.a
s.textContent=q
s.className="ambient-notice visible"
r.aO(q)
A.j(A.c(v.G.window).setTimeout(A.DC(new A.op(r)),7000))},
aO(a){var s,r,q=this
if(!q.c||B.c.aS(a).length===0)return
s=++q.d
r=q.b
r.textContent="[ "+a+" ]"
r.className="caption-cue visible"
A.j(A.c(v.G.window).setTimeout(A.DC(new A.oo(q,s)),4200))}}
A.op.prototype={
$0(){this.a.a.className="ambient-notice"
return"ambient-notice"},
$S:139}
A.oo.prototype={
$0(){var s=this.a
if(this.b!==s.d)return
s=s.b
s.textContent=""
s.className="caption-cue"},
$S:15}
A.oE.prototype={
pA(a,b){var s
if(!a)return""
if(b)return this.b
s=this.b
return s.length===0?"[unavailable voice cue: "+this.a+"]":s}}
A.cQ.prototype={
C(){return"AudioOutputMode."+this.b}}
A.da.prototype={
C(){return"AudioDynamicRange."+this.b}}
A.dG.prototype={
C(){return"AudioReverbMode."+this.b}}
A.dF.prototype={
C(){return"AudioDuckingMode."+this.b}}
A.eq.prototype={
dl(a,b,c,d){var s=this,r=c==null?s.b:c,q=b==null?s.c:b,p=d==null?s.d:d
return new A.eq(r,q,p,a==null?s.e:a)},
nm(a){return this.dl(null,null,a,null)},
nc(a){return this.dl(null,a,null,null)},
ns(a){return this.dl(null,null,null,a)},
nb(a){return this.dl(a,null,null,null)},
D(){var s=this
return A.E(["version",1,"output",s.b.b,"dynamicRange",s.c.b,"reverb",s.d.b,"ducking",s.e.b],t.N,t.K)}}
A.oO.prototype={
$1$2(a,b,c){return B.a.ba(c.i("t<0>").a(a),new A.oP(b,c),new A.oQ(b))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:140}
A.oP.prototype={
$1(a){return t.Ct.a(this.b.a(a)).b===this.a},
$S(){return this.b.i("l(0)")}}
A.oQ.prototype={
$0(){return A.h(A.M("unsupported audio option: "+A.z(this.a),null,null))},
$S:7}
A.pi.prototype={
pX(a,b){var s,r,q,p="broadcast",o=b?a:null
if(o==this.b)return
this.b=o
s=this.a
r=o==null
q=r?"":B.W.iB(p,o)
s.textContent=q
r=r?p:"broadcast visible"
s.className=r}}
A.pl.prototype={
$1(a){return this.a.$0()},
$S:2}
A.pp.prototype={
$1(a){return this.a.$1(A.U(this.b.checked))},
$S:2}
A.po.prototype={
$1(a){var s=A.fv(A.x(this.a.value))
if(s!=null)this.b.$1(s)},
$S:1}
A.pn.prototype={
$1(a){A.x(a)
return a.length!==0&&!B.c.Y(a,"brush-state-")},
$S:3}
A.ex.prototype={
C(){return"BrushComponentKind."+this.b}}
A.ey.prototype={
C(){return"BrushComponentState."+this.b}}
A.bu.prototype={
gmq(){var s=this.d,r=s==null||s.length===0,q=this.c
return r?q:q+", "+s},
B(){var s=this
if(B.c.aS(s.a).length===0||B.c.aS(s.c).length===0)throw A.b(B.iG)
if(s.e===B.cH&&s.b!==B.cG)throw A.b(B.hX)},
gF(){return this.a}}
A.pr.prototype={
o5(a,b,c){var s,r,q=this
if(b<=0||c<=0)return
s=Math.max(0,b-c)
r=q.e
if(a<r){q.e=a
r=a}q.e=B.d.n(a>=r+c?q.e=a-c+1:r,0,s)},
e0(a,b){if(b<=0){this.f=0
return}this.f=B.d.n(this.f+a,0,Math.max(0,b-1))},
c0(a,b,c,d,e,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b
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
this.hc(A.d([m,l,j,i,h,g],t.hc))
f.fill()
f.restore()}f.fillStyle=d
this.hc(A.d([m,l,j,i,h,g],t.hc))
f.fill()
if(b>0){f.strokeStyle=a
f.lineWidth=b
f.stroke()}f.restore()},
aX(a,b,c,d,e,f,g,h,i){return this.c0(a,b,c,d,e,!0,f,g,h,i)},
nS(a,b,c,d,e,f,g,h,i){return this.c0(a,b,14,c,d,e,f,g,h,i)},
nX(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=this.b
j===$&&A.u()
j.save()
j.translate(f,g)
j.rotate(a)
j.strokeStyle=b
j.lineWidth=1.5
s=new A.eY()
s.ck(42)
for(r=-c*0.5,q=c/d,p=-e*0.5,o=e*0.5,n=0;n<d;++n){m=r+q*n+(s.aG()-0.5)*8
l=s.aG()
k=s.aG()
j.beginPath()
j.moveTo(p+l*30,m)
j.lineTo(o-k*30,m)
j.stroke()}j.restore()},
ie(a,b,c,d,e){var s,r,q=this.b
q===$&&A.u()
q.save()
q.translate(d,e)
q.fillStyle="rgba(0, 0, 0, 0.85)"
this.hb(3,3,c)
q.fill()
s=a?"#d32f2f":"#0c0a0e"
q.fillStyle=s
this.hb(0,0,c)
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
nV(a,b,c){var s,r,q,p
if(a==null||a.length===0)return
s=c*0.5
r=b*0.86
q=this.b
q===$&&A.u()
q.save()
q.font='bold 15px "Cinzel", serif'
p=Math.max(220,A.a4(A.c(q.measureText(a.toUpperCase())).width)+70)
this.aX("#c49a45",2,8,"rgba(12, 10, 14, 0.92)",38,-0.07,p,s,r)
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
nU(d2,d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="rgba(12, 10, 14, 0.92)",c9="#f5f0e6",d0='px "Cinzel", serif',d1=d4.r
if(!d1&&d4.b.length===0&&d4.d.length===0)return
s=d3<640||d2<540
r=Math.min(d3*(s?0.92:0.85),780)
q=s?126:140
p=d3*0.5
o=Math.min(d2*0.74,d2-q*0.58)
c7.aX(c9,2.5,16,c8,q,-0.05,r,p,o)
n=d4.a
if(n==null)n="VISITOR"
m=n.toUpperCase()+" TO YOU"
l=c7.b
l===$&&A.u()
l.font="bold "+(s?11:13)+d0
k=Math.min(r-28,Math.max(180,A.a4(A.c(l.measureText(m)).width)+34))
j=r*0.5
i=p-j
h=i+k*0.45
g=q*0.5
f=o-g
e=f-6
c7.c0(c9,2,6,"#d32f2f",34,!0,-0.12,k,h,e)
l.save()
l.fillStyle="#f5f0e6"
l.font="bold "+(s?11:13)+d0
l.textAlign="center"
l.textBaseline="middle"
l.shadowColor="rgba(0, 0, 0, 0.85)"
l.shadowBlur=4
l.fillText(m,h,e)
l.restore()
d=d4.gpP()
l.save()
l.fillStyle="#f5f0e6"
l.font='16px "Georgia", serif'
l.textAlign="left"
l.textBaseline="top"
c7.mn(l,d,i+32,f+32,r-64,24)
l.restore()
i=d4.d
c=i.length
if(c!==0){l.font="bold "+(s?12:13)+d0
b=B.a.bb(i,0,new A.ps(c7),t.i)
a=Math.max(220,d3-24)
d1=s?260:320
a0=Math.min(a,Math.max(d1,b+78))
a1=s?31:34
a2=s?35:39
a3=s?174:92
a4=f-18
a5=Math.max(0,a4-a3)
a6=Math.max(1,B.b.aZ((a5+a2-a1)/a2))
d1=d4.f
c7.o5(d1==null?0:d1,c,a6)
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
c7.aX(c0,!b6||b5?2.5:1.5,8,b9,a1,-0.06,a0,b7,b3)
c1=b8+24
b6=!b5
c7.ie(!b6||b4,b2,24,c1,b3)
l.save()
c2=!b6||b4?"#ffd54f":c9
l.fillStyle=c2
l.font="bold "+(s?12:13)+d0
l.textAlign="left"
l.textBaseline="middle"
l.fillText(c7.bH(b1,g),c1+22,b3)
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
c7.aX("#c49a45",1.5,5,"#1a1820",c4,-0.04,c3,c5,c6)
l.save()
l.fillStyle="#ffd54f"
l.font="bold "+(s?11:12)+d0
l.textAlign="center"
l.textBaseline="middle"
l.fillText("CONTINUE",c5,c6)
l.restore()}},
nY(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=A.Ll(a1,50,-30),f=a0<640||a<540,e=f?108:116,d=f?68:72,c=a0-e*0.5-24,b=f?122:126
this.aX("#f5f0e6",1.2,7,"rgba(12, 10, 14, 0.92)",d,-0.055,e,c,b)
s=isFinite(a1)?B.b.n(a1,-30,50):0
r=s>=0?"+":""
q=B.b.G(s,0)
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
for(k=l+0.5,j=0;j<5;++j){m.fillStyle=B.lj[j]
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
nT(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a4.length
if(a3===0)return
s=a6<640
r=s?Math.min(2,a3):a3
q=s?8:12
p=s?8:0
o=s?Math.min(140,(a6-32-q)/r):140
for(n=o-18,m=a6*0.5,l=o*0.5,k=o+q,j=a5-32,i=B.d.bf(a3+r-1,r)-1,h=28+p,g=0;g<a3;++g){f=B.d.bf(g,r)
e=f*r
d=Math.min(r,a3-e)
c=m-(d*o+(d-1)*q)*0.5+l+(g-e)*k
b=j-(i-f)*h
if(!(g<a4.length))return A.e(a4,g)
a=a4[g]
a0=a.c
a1=a0?"#d32f2f":"rgba(12, 10, 14, 0.92)"
this.c0(a0?"#f5f0e6":"#c49a45",1.5,6,a1,28,a0,-0.04,o,c,b)
a1=this.b
a1===$&&A.u()
a1.save()
a2=a0?"#f5f0e6":"#c49a45"
a1.fillStyle=a2
a1.font='bold 11px "Courier New", monospace'
a1.textAlign="center"
a1.textBaseline="middle"
a1.fillText(this.bH("["+a.a+"] "+a.b,n),c,b)
a1.restore()}},
nW(d3,d4,d5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="rgba(12, 10, 14, 0.92)",c5="#d32f2f",c6="#f5f0e6",c7="#c49a45",c8="#1a1820",c9="#8c887e",d0="#0c0a0e",d1="#ffd54f",d2=d5.d
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
c3.aX(c5,3,18,c4,q,-0.025,r,o,n)
c3.nX(-0.05,"rgba(211, 47, 47, 0.15)",q-40,6,r-40,o,n)
m=q*0.5
l=n-m
k=l+30
c3.aX(c6,2,8,c5,42,-0.06,Math.min(r*0.85,560),o,k)
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
for(l=o-j*0.5,j=i-8,g=0;g<6;++g){f=B.az[g]
e=d5.b===g
d=l+i*(g+0.5)
c=e?c7:c8
b=e?c6:c9
c3.c0(b,e?2:1,6,c,34,!1,-0.03,j,d,h)
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
c3.aX(c7,2.5,10,c8,140,-0.02,a1,o,a2)
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
d2.fillText(d5.e.gnP().toUpperCase(),o,a2+5)
d2.fillStyle="#8c887e"
d2.font='13px "Georgia", serif'
d2.shadowBlur=0
l=c3.bH(d5.r,a1-48)
d2.fillText(l,o,a2+42)
d2.restore()}else{a3=d5.gbA()
a4=n+m-52
a5=Math.max(1,a4-a0)
a6=Math.max(1,B.b.aZ((a5+52-44)/52))
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
b1=b0.Q===B.B
b2=a0+(g-c3.f)*52+22
b3=o+(e?12:0)
if(e)c=b1?c8:d0
else c=c4
b=e&&b1?c7:c9
c3.c0(b,e?2.2:1,6,c,44,e,-0.02,a9,b3,b2)
if(e)c3.ie(!0,g+1,20,b3-j+20,b2)
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
d2.fillText(c3.bH(b0.b.toUpperCase(),a9-b),b3-j+b4,b2)
b5=b3+j-20
b=c?110:265
a=b1?d1:c9
d2.fillStyle=a
d2.font='bold 9px "Courier New", monospace'
d2.textAlign="center"
b6=b1?"LIVE":"N/A"
d2.fillText(b6,b5-b,b2)
if(c){if(b0.Q===B.B){c=b0.ax
b7=c==null?b0.z:c}else b7=!1
c=b5-37
b=b1&&b7?c5:d0
c3.nS(b1&&b7?c6:c9,1.5,b,24,!1,-0.04,74,c,b2)
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
d2.fillText(B.b.G(b0.f,1)+" ",c-4,b2)
d2.textAlign="left"
d2.fillText(" "+B.b.G(b0.r,1),b8+80+4,b2)
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
c1=d5.gbZ()
if(d5.b===5)c2=d5.r
else if(c1==null)c2=""
else{if(c1.Q===B.B)m="LIVE \u2022 REQUESTED "+c1.god()+" \u2022 EFFECTIVE "+c1.geH()
else{m=c1.as
m="N/A \u2022 "+(m==null?"Not installed":m)}c2=m}d2.save()
d2.fillStyle="#8c887e"
d2.font='12px "Cinzel", sans-serif'
d2.textAlign="center"
d2.textBaseline="middle"
d2.fillText(c3.bH(c2,r-72),o,c0-10)
d2.fillText("[W / S / \u2191 / \u2193] Navigate  \u2022  [A / D / \u2190 / \u2192] Adjust Live  \u2022  [Q / E] Fine  \u2022  [1 - 5] Tabs  \u2022  [R / Shift+R] Reset  \u2022  [CAPS LOCK / ESC] Close",o,c0+10)
d2.restore()
d2.restore()},
hc(a){var s,r,q
t.fG.a(a)
s=this.b
s===$&&A.u()
s.beginPath()
r=a[0]
s.moveTo(r.a,r.b)
for(q=1;q<6;++q){r=a[q]
s.lineTo(r.a,r.b)}s.closePath()},
hb(a,b,c){var s,r=c*0.5,q=this.b
q===$&&A.u()
q.beginPath()
q.moveTo(a,b-r)
s=r*1.15
q.lineTo(a+s,b)
q.lineTo(a,b+r)
q.lineTo(a-s,b)
q.closePath()},
mn(a,b,c,d,e,f){var s,r,q,p,o,n,m=b.split(" ")
for(s=d,r="",q=0;q<m.length;++q){if(r.length===0){p=m[q]
o=p}else{n=m[q]
p=r+" "+n
o=n}if(A.a4(A.c(a.measureText(p)).width)>e&&q>0){a.fillText(r,c,s)
s+=f
r=o}else r=p}a.fillText(r,c,s)},
bH(a,b){var s,r,q,p
if(!(b<=12)){s=this.b
s===$&&A.u()
s=A.a4(A.c(s.measureText(a)).width)<=b}else s=!0
if(s)return a
r=a
for(;;){s=r.length
q=s===0
if(!q){p=this.b
p===$&&A.u()
p=A.a4(A.c(p.measureText(r+"...")).width)>b}else p=!1
if(!p)break
r=B.c.L(r,0,s-1)}return q?"...":r+"..."}}
A.ps.prototype={
$2(a,b){var s
A.az(a)
A.x(b)
s=this.a.b
s===$&&A.u()
return Math.max(a,A.a4(A.c(s.measureText(b)).width))},
$S:141}
A.hg.prototype={
gmJ(){var s,r,q,p,o=t.N
o=A.n(o,o)
for(s=this.r.gO(),s=s.gA(s);s.m();){r=s.gp()
q=r.a
r=r.b
p=J.aW(r)
o.k(0,q,p.gN(r)?"":p.ga4(r))}return o},
bY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k=this,j="horizontalSensitivity",i="verticalSensitivity",h="holdToInteract"
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
A.az(r)
q=n.h(0,i)
q.toString
A.az(q)
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
A.az(r)
q=n.h(0,i)
q.toString
A.az(q)
p=n.h(0,"invertX")
p.toString
A.U(p)
o=n.h(0,"invertY")
o.toString
A.U(o)
m=n.h(0,h)
m.toString
A.U(m)
l=k.gmJ()
return A.hh(l,null,m,r,p,o,s,q)},
eC(a){var s=null
return this.bY(a,s,s,s,s,s)},
ni(a){var s=null
return this.bY(s,s,s,a,s,s)},
nj(a){var s=null
return this.bY(s,s,s,s,a,s)},
nf(a){var s=null
return this.bY(s,a,s,s,s,s)},
ng(a){var s=null
return this.bY(s,s,a,s,s,s)},
nB(a){var s=null
return this.bY(s,s,s,s,s,a)},
B(){var s,r,q,p=this.b,o=!0
if(!(p<0.1))if(!(p>3)){p=this.c
p=p<0.1||p>3}else p=o
else p=o
if(p)throw A.b(B.hy)
p=this.r
if(p.gO().R(0,new A.pF()))throw A.b(B.iO)
if(p.gO().R(0,new A.pG()))throw A.b(B.ik)
p=p.gan()
o=A.v(p)
s=o.i("fh<t.E,f>")
r=s.i("F<t.E>")
q=A.J(new A.F(new A.fh(p,o.i("t<f>(t.E)").a(new A.pH()),s),s.i("l(t.E)").a(new A.pI()),r),r.i("t.E"))
if(A.hw(q,A.C(q).c).a!==q.length)throw A.b(B.hD)},
D(){var s,r,q=this,p=t.N,o=A.n(p,t.a)
for(s=q.r.gO(),s=s.gA(s);s.m();){r=s.gp()
o.k(0,r.a,A.aI(r.b,!0,p))}return A.E(["version",q.a,"horizontalSensitivity",q.b,"verticalSensitivity",q.c,"invertX",q.d,"invertY",q.e,"holdToInteract",q.f,"bindings",o],p,t.K)}}
A.pF.prototype={
$1(a){t.yx.a(a)
return J.kw(a.b,new A.pE(a))},
$S:48}
A.pE.prototype={
$1(a){var s
A.x(a)
if(a.length!==0)s=!(this.a.a==="pause"&&a==="Escape")&&!A.BD(a)
else s=!1
return s},
$S:3}
A.pG.prototype={
$1(a){t.yx.a(a)
return a.a!=="pause"&&J.kw(a.b,B.el.gaJ(B.el))},
$S:48}
A.pH.prototype={
$1(a){return t.a.a(a)},
$S:143}
A.pI.prototype={
$1(a){return A.x(a).length!==0},
$S:3}
A.pD.prototype={
$1(a){return typeof a=="string"},
$S:6}
A.ew.prototype={
C(){return"BindingCaptureStatus."+this.b}}
A.fd.prototype={
C(){return"BindingConflictResolution."+this.b}}
A.dH.prototype={}
A.kY.prototype={
cr(a){var s=this
if(!s.a.r.M(a))return new A.dH(B.cD,"unknown action")
s.b=a
s.e=s.d=s.c=null
return B.f9},
mX(a){var s,r,q,p=this,o=p.b
if(o==null)return B.bb
if(!A.BD(a)){p.c=p.b=null
return new A.dH(B.cF,B.en.q(0,a)?"reserved browser or pause key":"unsupported input binding")}r=p.a.r.gO()
r=r.gA(r)
for(;;){if(!r.m()){s=null
break}A:{q=r.gp()
s=q.a
if(s===o)break A
if(J.Bs(q.b,a))break}}if(s!=null){p.c=o
p.d=a
p.e=s
p.b=null
return new A.dH(B.bc,a+" is already bound to "+s)}return p.kw(a)},
cP(a){var s,r,q,p,o,n,m=this,l=m.c,k=m.d,j=m.e
if(l==null||k==null||j==null)return B.bb
switch(a.a){case 2:m.c=m.e=m.d=null
return B.fa
case 1:s=A.Av(m.a.r)
r=s.h(0,l)
r.toString
s.k(0,l,A.AP(r,k))
r=s.h(0,j)
r.toString
s.k(0,j,A.B3(r,k))
m.a=m.a.eC(s)
break
case 0:s=A.Av(m.a.r)
if(s.h(0,l).length===0)q=""
else{r=s.h(0,l)
r.toString
q=B.a.ga4(r)}r=A.d([k],t.s)
p=s.h(0,l)
p.toString
p=A.hO(p,1,null,A.C(p).c)
o=p.$ti
p=new A.ao(p,p.gu(0),o.i("ao<a0.E>"))
o=o.i("a0.E")
while(p.m()){n=p.d
if(n==null)n=o.a(n)
if(n!==k)r.push(n)}s.k(0,l,r)
if(q.length===0){r=s.h(0,j)
r.toString
r=A.B3(r,k)}else{r=s.h(0,j)
r.toString
r=A.AP(A.B3(r,k),q)}s.k(0,j,r)
m.a=m.a.eC(s)
break}m.c=m.e=m.d=null
return B.cB},
kw(a){var s,r,q=this,p=q.b
if(p==null)return B.bb
s=A.Av(q.a.r)
r=s.h(0,p)
r.toString
s.k(0,p,A.AP(r,a))
q.a=q.a.eC(s)
q.b=null
return B.cB}}
A.iw.prototype={
kf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="settings-copy",c="settings-grid"
f.x=new A.kY(f.w)
s=f.b
s.className=A.x(s.className)+" brush-page-frame"
s.setAttribute("aria-label","Controls settings")
s.setAttribute("data-brush-kind","frame")
s.setAttribute("data-brush-state","normal")
A.c(s.appendChild(A.pm(a,B.fj,1)))
A.c(s.appendChild(A.I(a,"p",d,"Keyboard and mouse reference. Escape always returns to pause.")))
r=A.I(a,"div",c,e)
f.fO(a,r,"horizontalSensitivity","Mouse horizontal",0.1,3)
f.fO(a,r,"verticalSensitivity","Mouse vertical",0.1,3)
f.e7(a,r,"invertX","Invert horizontal look")
f.e7(a,r,"invertY","Invert vertical look")
f.e7(a,r,"holdToInteract","Hold to interact")
A.c(s.appendChild(r))
q=A.I(a,"div",c,e)
for(p=B.ms.gO(),p=p.gA(p),o=f.Q;p.m();){n=p.gp()
m=n.a
l=A.hh(e,e,!1,1,!1,!1,2,1).r.h(0,m)
k=l==null||J.kx(l)?"unbound":J.Bu(l," / ")
j=A.c(a.createElement("div"))
j.className="setting-row"
n=n.b
j.setAttribute("aria-label",n+": "+k)
i=A.c(a.createElement("span"))
i.textContent=n
A.c(j.appendChild(i))
h="change "+m+" binding"
g=A.ez(a,new A.bu("settings.controls.bind."+m,B.cG,n,h,B.t),new A.pB(f,m),k)
g.setAttribute("aria-label",(h.length===0?n:n+", "+h)+": "+k)
A.c(j.appendChild(g))
A.c(q.appendChild(j))
o.k(0,m,g)}A.c(s.appendChild(q))
p=A.I(a,"p",d,e)
f.as=p
p.setAttribute("aria-live","polite")
p=f.as
p.toString
A.c(s.appendChild(p))
p=A.I(a,"div","pause-actions",e)
f.at=p
A.c(s.appendChild(p))
f.eq()
A.c(s.appendChild(A.ez(a,B.fk,new A.pC(f),e)))},
iT(a){var s=this.x
s===$&&A.u()
if(s.b==null)return
a.preventDefault()
this.hf(this.x.mX(A.x(a.code)))},
hf(a){var s,r,q,p,o=this,n=o.as
if(n!=null){s=a.c
if(s==null)s=a.a.b
n.textContent=s}r=o.ax
if(r!=null){q=a.a===B.bc?B.fo:B.t
p=o.Q.h(0,r)
if(p!=null)A.zV(p,q)}n=a.a
if(n===B.bc)o.m5()
else if(n===B.cE){n=o.x
n===$&&A.u()
n=n.a
o.w=n
s=o.f
if(s!=null)s.$1(n)
o.eq()}else{o.ea()
o.ax=null}},
m5(){var s,r,q,p,o
this.ea()
s=this.at
if(s==null)return
for(r=0;r<3;++r){q=B.kF[r]
p=A.H(s.ownerDocument)
p.toString
o=q.b
A.c(s.appendChild(A.ez(p,new A.bu("settings.controls.resolve."+o,B.P,o,"resolve key binding conflict",B.t),new A.pA(this,q),null)))}},
ea(){var s,r=this.at
if(r==null)return
while(A.H(r.firstChild)!=null){s=A.H(r.firstChild)
s.toString
A.c(r.removeChild(s))}},
eq(){var s,r,q,p
for(s=this.Q,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0);s.m();){r=s.d
r.toString
q=this.x
q===$&&A.u()
p=q.a.r.h(0,r.a)
r=r.b
q=p==null||J.kx(p)?"unbound":J.Bu(p," / ")
r.textContent=q
A.zV(r,B.t)}},
fO(a,b,c,d,e,f){var s,r=A.I(a,"label","setting-row",null)
A.c(r.appendChild(A.I(a,"span",null,d)))
s=A.Fw(a,new A.bu("settings.controls."+c,B.fm,d,null,B.t),f,e,new A.py(this,c),1)
A.c(r.appendChild(s))
A.c(b.appendChild(r))
this.y.k(0,c,s)},
e7(a,b,c,d){var s=A.I(a,"label","setting-toggle",null),r=A.Fx(a,new A.bu("settings.controls."+c,B.fn,d,null,B.t),!1,new A.pz(this,c))
A.c(s.appendChild(r))
A.c(s.appendChild(A.I(a,"span",null,d)))
A.c(b.appendChild(s))
this.z.k(0,c,r)},
hd(a){var s
this.w=a
s=this.f
if(s!=null)s.$1(a)},
sf4(a){this.f=t.pf.a(a)},
sbo(a){this.r=t.Z.a(a)}}
A.pB.prototype={
$0(){var s,r,q,p=this.a,o=this.b,n=p.x
n===$&&A.u()
s=n.cr(o)
n=p.as
if(n!=null){r=s.c
if(r==null)r="press a key for "+o+"; Escape cancels"
n.textContent=r}if(s.a===B.cC){p.ax=o
q=p.Q.h(0,o)
if(q!=null)A.zV(q,B.cH)}p.ea()
return null},
$S:0}
A.pC.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.pA.prototype={
$0(){var s=this.a,r=s.x
r===$&&A.u()
return s.hf(r.cP(this.b))},
$S:0}
A.py.prototype={
$1(a){var s=this.a,r=s.w
s.hd(this.b==="horizontalSensitivity"?r.ng(a):r.nB(a))},
$S:180}
A.pz.prototype={
$1(a){var s,r=this.a,q=this.b
A:{if("invertX"===q){s=r.w.ni(a)
break A}if("invertY"===q){s=r.w.nj(a)
break A}s=r.w.nf(a)
break A}r.hd(s)},
$S:10}
A.pJ.prototype={
kg(a){var s,r,q,p=this,o=p.b
o.setAttribute("aria-label","Credits and licences")
o.setAttribute("role","dialog")
s=p.a
A.c(o.appendChild(A.I(s,"h1","journal-title","credits")))
r=A.I(s,"p","credits-body",null)
p.f!==$&&A.bc()
p.f=r
r.textContent="\u2014"
A.c(o.appendChild(r))
A.c(o.appendChild(A.I(s,"p","credits-licence-hint","Full licence texts: res/licenses/")))
q=A.I(s,"button","door-continue","return")
q.id="credits.close"
q.setAttribute("type","button")
q.addEventListener("click",A.Z(new A.pK(p)))
A.c(o.appendChild(q))}}
A.pK.prototype={
$1(a){return this.a.al()},
$S:2}
A.pR.prototype={
ki(a){var s,r,q=this,p=null,o="div",n=q.a
n.setAttribute("role","region")
n.setAttribute("aria-modal","false")
n.setAttribute("aria-label","Front door visitor")
n.setAttribute("tabindex","-1")
n.setAttribute("hidden","")
s=A.I(a,o,"door-speaker",p)
q.b!==$&&A.bc()
q.b=s
r=A.I(a,o,"door-line",p)
q.c!==$&&A.bc()
q.c=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(n.appendChild(s))
A.c(n.appendChild(r))
r=A.I(a,o,"door-choice-status",p)
q.d!==$&&A.bc()
q.d=r
r.setAttribute("role","status")
r.setAttribute("aria-live","polite")
r.setAttribute("aria-atomic","true")
A.c(n.appendChild(r))
r=A.I(a,o,"door-cite-list",p)
q.f!==$&&A.bc()
q.f=r
s=A.I(a,o,"door-cite-result",p)
q.r!==$&&A.bc()
q.r=s
A.c(n.appendChild(r))
A.c(n.appendChild(s))
s=A.I(a,"button","door-continue","continue")
q.e!==$&&A.bc()
q.e=s
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.pS(q)))
A.c(n.appendChild(s))
n.addEventListener("keydown",A.Z(new A.pT(q,a)))
A.c(A.H(a.body).appendChild(n))},
fA(a,b){var s,r=this
r.y=!0
s=r.b
s===$&&A.u()
s.textContent=a
s=r.c
s===$&&A.u()
s.textContent=B.W.c4("",!0,b)
s=r.d
s===$&&A.u()
s.textContent=A.BG(B.bw)
s=r.e
s===$&&A.u()
A.c(s.style).display="none"
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
q.textContent=B.W.c4("",!0,a)
q=r.d
q===$&&A.u()
q.textContent=""
q=r.e
q===$&&A.u()
q=A.c(q.style)
s=b?"none":""
q.display=s
s=r.r
s===$&&A.u()
s.textContent=""},
jM(a){return this.fB(a,!1)},
jO(a,b){var s,r,q,p,o
t.DX.a(a)
s=this.e
s===$&&A.u()
s=A.c(s.style)
r=b==null?"none":""
s.display=r
r=A.d([],t.s)
for(s=a.length,q=0;q<a.length;a.length===s||(0,A.r)(a),++q){p=a[q]
o=p.b
r.push(b===p.a?o+", selected":o)}s=this.d
s===$&&A.u()
s.textContent=A.BG(r)},
fC(a,b){var s=this.c
s===$&&A.u()
s.textContent=B.W.c4("",!0,a+"\n\n"+b)
s=this.d
s===$&&A.u()
s.textContent=""
s=this.e
s===$&&A.u()
A.c(s.style).display=""},
jL(a,b){var s,r,q,p,o,n
t.pL.a(b)
s=this.f
s===$&&A.u()
s.textContent=""
for(r=b.length,q=0;q<b.length;b.length===r||(0,A.r)(b),++q){p={}
o=b[q]
p.a=null
p.a=o.a
n=A.c(a.createElement("button"))
n.className="door-cite-entry"
n.textContent=o.b
n.setAttribute("type","button")
n.addEventListener("click",A.Z(new A.pU(p,this)))
A.c(s.appendChild(n))}},
iK(){var s,r=this
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
soQ(a){this.w=t.Z.a(a)},
soP(a){this.x=t.vR.a(a)}}
A.pS.prototype={
$1(a){var s
A.c(a)
s=this.a.w
return s==null?null:s.$0()},
$S:50}
A.pT.prototype={
$1(a){var s,r,q,p,o,n,m
A.c(a)
s=this.a
if(!s.y||A.x(a.code)!=="Tab")return
r=A.d([],t.e)
q=s.e
q===$&&A.u()
if(A.x(A.c(q.style).display)!=="none")r.push(q)
s=s.f
s===$&&A.u()
p=A.c(s.querySelectorAll("button"))
for(s=t.m,o=0;o<A.j(p.length);++o){n=A.H(p.item(o))
if(s.b(n))B.a.l(r,n)}if(r.length===0)return
m=A.H(this.b.activeElement)
if(A.U(a.shiftKey)){if(m===B.a.ga4(r)||!B.a.q(r,m)){a.preventDefault()
B.a.gac(r).focus()}}else if(m===B.a.gac(r)||!B.a.q(r,m)){a.preventDefault()
B.a.ga4(r).focus()}},
$S:147}
A.pU.prototype={
$1(a){var s
A.c(a)
s=this.b.x
return s==null?null:s.$1(this.a.a)},
$S:50}
A.pX.prototype={
kj(a){var s,r,q,p,o=this,n=o.b
n.setAttribute("aria-label","Ending record")
s=o.a
r=A.I(s,"h1","journal-title",null)
o.f!==$&&A.bc()
o.f=r
q=A.I(s,"div","ending-copy",null)
o.r!==$&&A.bc()
o.r=q
A.c(n.appendChild(r))
A.c(n.appendChild(q))
p=A.I(s,"button","door-continue","close record")
p.setAttribute("type","button")
p.addEventListener("click",A.Z(new A.pY(o)))
A.c(n.appendChild(p))},
jN(a,b){var s,r,q,p,o,n,m=this
t.a.a(b)
s=m.f
s===$&&A.u()
s.textContent=a.a.b
s=m.r
s===$&&A.u()
s.textContent=""
for(r=b.length,q=m.a,p=0;p<b.length;b.length===r||(0,A.r)(b),++p){o=b[p]
n=A.c(q.createElement("p"))
n.className="ending-line"
n.textContent=o
A.c(s.appendChild(n))}m.c6()},
soU(a){this.w=t.Z.a(a)}}
A.pY.prototype={
$1(a){var s=this.a
s.al()
s=s.w
if(s!=null)s.$0()
return null},
$S:2}
A.qr.prototype={
bP(a,b,c,d){var s=this
t.a.a(b)
s.a=c
s.b=d
s.e=A.aI(b,!0,t.N)
s.c=0
s.r=s.f=null
s.w=!0
s.x=0},
S(a){var s=this
s.a=null
s.b=""
s.e=A.d([],t.s)
s.c=1
s.r=s.f=null
s.w=!1
s.x=0},
pW(a){var s,r=this
if(!r.w&&r.b.length===0&&r.e.length===0)return
r.x+=a
s=r.b.length
if(s!==0&&r.c<1)r.c=Math.min(1,r.c+35*a/s)},
oh(a){var s,r,q,p,o,n=this,m=null,l=n.e
if(l.length===0){if(a==="Enter"||a==="NumpadEnter"||a==="Space"){n.hX()
return!0}return!1}if(a==="Space"){s=B.a.f_(l,new A.qs())
if(s!==-1){n.cW(s)
return!0}}if(a==="ArrowDown"||a==="ArrowRight"){l=n.r
if(l==null)l=-1
n.r=B.d.P(l+1,n.e.length)
return!0}if(a==="ArrowUp"||a==="ArrowLeft"){l=n.r
if(l==null)l=0
r=n.e.length
n.r=B.d.P(l-1+r,r)
return!0}if(a==="Enter"||a==="NumpadEnter"){q=n.r
if(q==null)q=n.f
if(q!=null){n.cW(q)
return!0}}if(B.c.Y(a,"Digit")){p=A.dX(B.c.aT(a,5),m)
o=p!=null&&p>=1&&p<=n.e.length?p-1:m}else if(B.c.Y(a,"Numpad")){p=A.dX(B.c.aT(a,6),m)
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
hX(){if(this.c<1){this.c=1
return}var s=this.z
if(s!=null)s.$0()},
oi(a){if(a==null)return!1
if(a.a==="dialogue-continue"){this.hX()
return!0}this.cW(a.b)
return!0},
soO(a){this.y=t.dt.a(a)},
soT(a){this.z=t.Z.a(a)}}
A.qs.prototype={
$1(a){A.x(a)
return B.c.q(a.toLowerCase(),"silent")||B.c.q(a,"...")},
$S:3}
A.qt.prototype={}
A.dP.prototype={
C(){return"GameplayInteractionMode."+this.b}}
A.dc.prototype={
C(){return"GameplayPromptDensity."+this.b}}
A.dd.prototype={
C(){return"GameplayTextPacing."+this.b}}
A.dQ.prototype={
C(){return"GameplayJournalLayout."+this.b}}
A.dO.prototype={
C(){return"GameplayConfirmationLevel."+this.b}}
A.dR.prototype={
C(){return"GameplaySaveFeedback."+this.b}}
A.cw.prototype={
C(){return"GameplayFocusLossBehavior."+this.b}}
A.dN.prototype={
C(){return"GameplayClockFormat."+this.b}}
A.ho.prototype={
aW(a,b,c,d,e,f,g,h,a0,a1,a2){var s=this,r=e==null?s.b:e,q=g==null?s.c:g,p=a2==null?s.d:a2,o=f==null?s.e:f,n=b==null?s.f:b,m=h==null?s.r:h,l=d==null?s.w:d,k=c==null?s.x:c,j=a==null?s.y:a,i=a0==null?s.z:a0
return A.zW(j,n,k,l,r,o,q,m,i,a1==null?s.Q:a1,p)},
nx(a){var s=null
return this.aW(s,s,s,s,s,s,s,s,s,a,s)},
nw(a){var s=null
return this.aW(s,s,s,s,s,s,s,s,a,s,s)},
n8(a){var s=null
return this.aW(s,s,a,s,s,s,s,s,s,s,s)},
nh(a){var s=null
return this.aW(s,s,s,s,a,s,s,s,s,s,s)},
np(a){var s=null
return this.aW(s,s,s,s,s,s,a,s,s,s,s)},
ny(a){var s=null
return this.aW(s,s,s,s,s,s,s,s,s,s,a)},
nk(a){var s=null
return this.aW(s,s,s,s,s,a,s,s,s,s,s)},
n7(a){var s=null
return this.aW(s,a,s,s,s,s,s,s,s,s,s)},
nt(a){var s=null
return this.aW(s,s,s,s,s,s,s,a,s,s,s)},
n6(a){var s=null
return this.aW(a,s,s,s,s,s,s,s,s,s,s)},
nd(a){var s=null
return this.aW(s,s,s,a,s,s,s,s,s,s,s)},
D(){var s=this
return A.E(["version",1,"interactionMode",s.b.b,"promptDensity",s.c.b,"textPacing",s.d.b,"journalLayout",s.e.b,"confirmations",s.f.b,"saveFeedback",s.r.b,"focusLossBehavior",s.w.b,"contextualReminders",s.x,"clockFormat",s.y.b,"showObjective",s.z,"storyMode",s.Q],t.N,t.K)}}
A.qu.prototype={
$1$2(a,b,c){var s
A.Ef(c,t.Ct,"T","call")
c.i("t<0>").a(b)
s=this.a.h(0,a)
if(typeof s!="string")throw A.b(A.M("invalid gameplay setting: "+a,null,null))
return B.a.ba(b,new A.qv(s,c),new A.qw(a))},
$2(a,b){return this.$1$2(a,b,t.Ct)},
$S:148}
A.qv.prototype={
$1(a){return this.b.a(a).b===this.a},
$S(){return this.b.i("l(0)")}}
A.qw.prototype={
$0(){return A.h(A.M("invalid gameplay setting: "+this.a,null,null))},
$S:7}
A.cS.prototype={
C(){return"GraphicsPreset."+this.b}}
A.dS.prototype={
b6(a,b,c,d,e,f,g,h,a0,a1){var s=this,r=g==null?s.b:g,q=h==null?s.c:h,p=c==null?s.d:c,o=d==null?s.e:d,n=a==null?s.f:a,m=a1==null?s.r:a1,l=f==null?s.w:f,k=b==null?s.x:b,j=a0==null?s.y:a0,i=e==null?s.z:e
return new A.dS(s.a,r,q,p,o,n,m,l,k,j,i)},
eB(a){var s=null
return this.b6(a,s,s,s,s,s,s,s,s,s)},
i8(a){var s=null
return this.b6(s,s,a,s,s,s,s,s,s,s)},
i9(a){var s=null
return this.b6(s,s,s,s,s,s,a,s,s,s)},
nl(a){var s=null
return this.b6(s,s,s,s,a,s,s,s,s,s)},
nr(a){var s=null
return this.b6(s,s,s,s,s,s,s,a,s,s)},
ne(a){var s=null
return this.b6(s,s,s,a,s,s,s,s,s,s)},
nz(a){var s=null
return this.b6(s,s,s,s,s,s,s,s,s,a)},
nn(a){var s=null
return this.b6(s,s,s,s,s,a,s,s,s,s)},
na(a){var s=null
return this.b6(s,a,s,s,s,s,s,s,s,s)},
nv(a){var s=null
return this.b6(s,s,s,s,s,s,s,s,a,s)},
B(){var s=this,r=null,q=s.c
if(!B.a.q(B.lQ,q))throw A.b(A.M("unsupported graphics render scale: "+q,r,r))
q=s.e
if(!B.a.q(B.kT,q))throw A.b(A.M("unsupported graphics frame target: "+q,r,r))
q=s.f
if(!B.a.q(B.lX,q))throw A.b(A.M("unsupported graphics antialiasing: "+q,r,r))
q=s.r
if(!B.a.q(B.lK,q))throw A.b(A.M("unsupported graphics texture quality: "+q,r,r))
q=s.w
if(!B.a.q(B.m7,q))throw A.b(A.M("unsupported graphics output encoding: "+q,r,r))
q=s.x
if(!B.a.q(B.lW,q))throw A.b(A.M("unsupported graphics diagnostic level: "+q,r,r))
q=s.y
if(!B.a.q(B.lY,q))throw A.b(A.M("unsupported graphics shadow quality: "+q,r,r))},
D(){var s=this
return A.E(["version",s.a,"preset",s.b.b,"renderScale",s.c,"dynamicResolution",s.d,"frameTarget",s.e,"antialiasing",s.f,"textureQuality",s.r,"outputEncoding",s.w,"diagnosticLevel",s.x,"shadowQuality",s.y,"modelPackageDiagnostics",s.z],t.N,t.K)}}
A.qI.prototype={
$1(a){return t.Eb.a(a).b===this.a.h(0,"preset")},
$S:51}
A.qJ.prototype={
$0(){return A.h(B.i6)},
$S:7}
A.qK.prototype={
D(){return A.E(["version",1,"requested",this.a.D(),"effective",this.b.D()],t.N,t.K)}}
A.qA.prototype={}
A.qB.prototype={}
A.iH.prototype={
kk(a){var s,r,q,p,o,n,m=this,l=null,k="settings-copy",j="setting-toggle",i="door-continue",h=m.b
h.setAttribute("aria-label","Graphics settings")
A.c(h.appendChild(A.I(a,"h1","journal-title","Graphics")))
A.c(h.appendChild(A.I(a,"p",k,"Choose a visual budget without changing simulation truth.")))
s=A.I(a,"div","settings-grid",l)
r=t.N
m.bs(a,s,"preset","quality preset",A.E(["high","High","standard","Standard","safe","Safe","custom","Custom"],r,r))
m.bs(a,s,"renderScale","render scale",A.E(["auto","Auto","0.50","50%","0.67","67%","0.75","75%","0.85","85%","1.00","100%"],r,r))
m.bs(a,s,"frameTarget","frame target",A.E(["30","30 fps","60","60 fps","display","Display rate"],r,r))
m.bs(a,s,"antialiasing","anti-aliasing",A.E(["off","Off","fxaa","FXAA-like","msaa2","MSAA 2x","msaa4","MSAA 4x"],r,r))
m.bs(a,s,"textureQuality","texture quality",A.E(["high","High","medium","Medium","low","Low"],r,r))
m.bs(a,s,"outputEncoding","output encoding",A.E(["srgb","sRGB display","linear","Linear light"],r,r))
m.bs(a,s,"diagnosticLevel","renderer diagnostics",A.E(["off","Off","errors","Errors only","full","Full telemetry"],r,r))
m.bs(a,s,"shadowQuality","shadow allocation",A.E(["off","Off","profile","Profile default","standard","Standard maps","high","High maps"],r,r))
q=A.I(a,"label",j,l)
r=A.c(a.createElement("input"))
m.y=r
r.type="checkbox"
r=m.y
r.toString
r.addEventListener("change",A.Z(new A.qE(m)))
r=m.y
r.toString
A.c(q.appendChild(r))
A.c(q.appendChild(A.I(a,"span",l,"Dynamic resolution")))
A.c(s.appendChild(q))
p=A.I(a,"label",j,l)
r=A.c(a.createElement("input"))
m.z=r
r.type="checkbox"
r=m.z
r.toString
r.addEventListener("change",A.Z(new A.qF(m)))
r=m.z
r.toString
A.c(p.appendChild(r))
A.c(p.appendChild(A.I(a,"span",l,"Model package diagnostics (debug)")))
A.c(s.appendChild(p))
A.c(h.appendChild(s))
r=A.I(a,"p",k,l)
m.Q=r
r.setAttribute("aria-live","polite")
r=m.Q
r.toString
A.c(h.appendChild(r))
o=A.I(a,"button",i,"Load Optimized Defaults")
o.setAttribute("type","button")
o.id="settings.graphics.optimized-defaults"
o.setAttribute("aria-label","load optimized graphics defaults")
o.addEventListener("click",A.Z(new A.qG(m)))
A.c(h.appendChild(o))
n=A.I(a,"button",i,"back")
n.setAttribute("type","button")
n.id="settings.graphics.back"
n.setAttribute("aria-label","back to settings categories")
n.addEventListener("click",A.Z(new A.qH(m)))
A.c(h.appendChild(n))},
bs(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.I(a,"label","setting-row",null)
A.c(s.appendChild(A.I(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.graphics."+c
for(q=new A.N(e,A.v(e).i("N<1,2>")).gA(0);q.m();){p=q.d
p.toString
o=A.c(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.c(r.appendChild(o))}r.addEventListener("change",A.Z(new A.qD(this,r,c)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.x.k(0,c,r)},
ej(a){var s
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
if(s!=null){r=c.length===0?"effective graphics match requested settings":"effective fallback: "+B.a.a0(c,"; ")
s.textContent=r}if(b!==a&&c.length===0){s=q.Q
if(s!=null)s.textContent="effective graphics profile differs"}},
sf4(a){this.f=t.CA.a(a)},
sp_(a){this.r=t.Z.a(a)},
sbo(a){this.w=t.Z.a(a)}}
A.qE.prototype={
$1(a){var s=this.a
s.ej(s.as.i8(A.U(s.y.checked)))},
$S:1}
A.qF.prototype={
$1(a){var s=this.a
s.ej(s.as.nl(A.U(s.z.checked)))},
$S:1}
A.qG.prototype={
$1(a){var s=this.a.r
if(s!=null)s.$0()},
$S:1}
A.qH.prototype={
$1(a){var s=this.a,r=s.w
if(r!=null)r.$0()
else s.al()},
$S:1}
A.qD.prototype={
$1(a){var s,r=A.x(this.b.value),q=this.a,p=this.c
A:{if("preset"===p){s=q.as.i9(B.a.az(B.dz,new A.qC(r)))
break A}if("renderScale"===p){s=q.as.nr(r)
break A}if("frameTarget"===p){s=q.as.ne(r)
break A}if("antialiasing"===p){s=q.as.eB(r)
break A}if("textureQuality"===p){s=q.as.nz(r)
break A}if("outputEncoding"===p){s=q.as.nn(r)
break A}if("diagnosticLevel"===p){s=q.as.na(r)
break A}if("shadowQuality"===p){s=q.as.nv(r)
break A}s=q.as
break A}q.ej(s)},
$S:1}
A.qC.prototype={
$1(a){return t.Eb.a(a).b===this.a},
$S:51}
A.kz.prototype={
C(){return"ActiveGuiPanel."+this.b}}
A.ct.prototype={}
A.qL.prototype={
jl(a,b,c){if(c)return B.lc
if(b&&a!=null)return A.d([new A.ct("E","Examine "+a,!0),new A.ct("TAB","Journal",!1),new A.ct("CAPS","Shader Lab",!1)],t.sa)
return B.mm}}
A.qM.prototype={
kl(a){var s,r,q="help-copy",p=this.b
p.setAttribute("aria-label","House notes")
s=this.a
A.c(p.appendChild(A.I(s,"h1","journal-title","house notes")))
A.c(p.appendChild(A.I(s,"p",q,"WASD moves. Mouse looks. E uses what you face.")))
A.c(p.appendChild(A.I(s,"p",q,"J opens the journal. L rests. Esc or O opens settings. K saves. The final door waits until Day 21.")))
r=A.I(s,"button","door-continue","return")
r.setAttribute("type","button")
r.addEventListener("click",A.Z(new A.qN(this)))
A.c(p.appendChild(r))}}
A.qN.prototype={
$1(a){return this.a.al()},
$S:2}
A.rq.prototype={
c6(){var s,r=this
r.k9()
s=r.r.a-1
if(s<1)s=1
r.CW=r.fX(r.CW,s)
r.lT()
r.hx()},
kC(){var s,r=this,q=r.a,p=A.I(q,"div","page-turn",null),o=A.I(q,"button","turn-prev","\u2039 earlier")
o.setAttribute("type","button")
o.addEventListener("click",A.Z(new A.rr(r)))
s=A.I(q,"button","turn-next","later \u203a")
s.setAttribute("type","button")
s.addEventListener("click",A.Z(new A.rs(r)))
q=A.I(q,"span","right-day-label",null)
r.Q!==$&&A.bc()
r.Q=q
A.c(p.appendChild(o))
A.c(p.appendChild(q))
A.c(p.appendChild(s))
return p},
hN(a){var s=this,r=s.r.a-1
if(r<1)r=1
s.CW=s.fX(s.CW+a,r)
s.hx()},
fX(a,b){if(a<1)return 1
if(a>b)return b
return a},
lT(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.u()
k.textContent=""
l.ay=null
s=l.ax
s===$&&A.u()
s.textContent=""
for(s=l.w.fq(),r=s.length,q=l.a,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=B.a.gac(o.c).t(0)
m=A.c(q.createElement("button"))
m.className="picker-entry"
m.textContent=n
m.setAttribute("type","button")
m.addEventListener("click",A.Z(new A.rt(l,o,m)))
A.c(k.appendChild(m))}},
hx(){var s,r,q,p,o,n,m,l,k,j=this,i=j.y
i===$&&A.u()
s=t.U
r=A.d([],s)
for(q=j.f,p=q.b,o=A.v(p).i("ae<2>"),n=new A.ae(p,p.r,p.e,o),m=j.r;n.m();){l=n.d
if(l.b===m.a)r.push(l)}B.a.Z(r,new A.ru())
j.hw(i,r)
i=j.Q
i===$&&A.u()
i.textContent="Day "+j.CW
i=j.z
i===$&&A.u()
s=A.d([],s)
for(r=new A.ae(p,p.r,p.e,o);r.m();){p=r.d
if(p.b===j.CW)s.push(p)}B.a.Z(s,new A.rv())
j.hw(i,s)
k=B.b.n(q.f/4,0,1)
i=j.as
i===$&&A.u()
A.c(i.style).setProperty("width",B.b.G(k*100,1)+"%")},
hw(a,b){var s,r
t.hk.a(b)
a.textContent=""
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r)A.c(a.appendChild(this.l5(b[r])))},
l5(a){var s,r,q,p,o,n=A.I(this.a,"div","entry",null)
for(s=a.c,r=0;q=s.length,r<q;++r)A.c(n.appendChild(this.hk(s[r],r!==q-1)))
p=a.r
if(p!=null){o=this.hk(p,!1)
o.className=A.x(o.className)+" margin"
A.c(n.appendChild(o))}return n},
hk(a,b){var s=b?"hand-line struck":"hand-line",r=A.I(this.a,"div",s,a.t(0))
A.c(r.style).setProperty("--shake",B.b.t(a.b))
return r}}
A.rr.prototype={
$1(a){return this.a.hN(-1)},
$S:2}
A.rs.prototype={
$1(a){return this.a.hN(1)},
$S:2}
A.rt.prototype={
$1(a){var s=this.a,r=this.c,q=s.ay
if(q!=null)q.className="picker-entry"
r.className="picker-entry selected"
s.ay=r
return null},
$S:2}
A.ru.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:18}
A.rv.prototype={
$2(a,b){var s=t.g
return B.d.I(s.a(a).a,s.a(b).a)},
$S:18}
A.dn.prototype={}
A.hb.prototype={
gF(){return this.a}}
A.tl.prototype={
gpP(){var s,r,q=this.c
if(q>=1)return this.b
s=this.b
r=s.length
return B.c.L(s,0,B.b.aj(B.b.n(r*q,0,r)))}}
A.j2.prototype={
b3(a){var s=this.b
s.className="panel"
s.setAttribute("role","dialog")
s.setAttribute("aria-modal","true")
s.setAttribute("aria-label","Game panel")
s.setAttribute("tabindex","-1")
s.setAttribute("hidden","")
A.c(s.style).setProperty("--panel-fade","0.25s")
A.c(A.H(this.a.body).appendChild(s))},
c6(){var s,r,q,p,o=this,n=o.b
if(B.c.q(A.x(n.className),"open"))return
s=$.tm
if(s!=null&&s!==o)s.al()
$.tm=o
r=o.a
o.d=A.H(r.activeElement)
A.rn(r,"exitPointerLock",t.X)
n.className="panel open"
n.removeAttribute("hidden")
q=A.Z(o.glH())
o.e=q
r.addEventListener("keydown",q)
p=A.DA(n)
if(p.length!==0)B.a.ga4(p).focus()
else n.focus()},
al(){var s,r,q=this,p=q.b
if(!B.c.q(A.x(p.className),"open"))return
p.className="panel"
p.setAttribute("hidden","")
if($.tm===q)$.tm=null
s=q.e
if(s!=null){q.a.removeEventListener("keydown",s)
q.e=null}r=q.d
if(t.m.b(r))r.focus()
p=q.c
if(p!=null)p.$0()},
iT(a){},
lI(a){A.c(a)
this.iT(a)
if(A.U(a.defaultPrevented))return
if(A.x(a.code)==="Escape"){a.preventDefault()
this.al()
return}if(A.x(a.code)==="Tab")this.md(a)},
md(a){var s,r=A.DA(this.b)
if(r.length===0)return
s=A.H(this.a.activeElement)
if(A.U(a.shiftKey)){if(s===B.a.ga4(r)||!B.a.q(r,s)){a.preventDefault()
B.a.gac(r).focus()}}else if(s===B.a.gac(r)||!B.a.q(r,s)){a.preventDefault()
B.a.ga4(r).focus()}},
sbd(a){this.c=t.Z.a(a)}}
A.bH.prototype={
C(){return"PauseReason."+this.b}}
A.cz.prototype={
C(){return"PausePage."+this.b}}
A.eL.prototype={
C(){return"PauseTransitionKind."+this.b}}
A.dV.prototype={
D(){var s,r=A.n(t.N,t.X)
r.k(0,"page",this.a.b)
r.k(0,"reason",this.b.b)
s=this.c
if(s!=null)r.k(0,"focusId",s)
return r},
ad(a,b){if(b==null)return!1
return b instanceof A.dV&&b.a===this.a&&b.b===this.b&&b.c==this.c},
gW(a){return A.cY(this.a,this.b,this.c,B.h,B.h,B.h)}}
A.eK.prototype={
gi1(){var s=this.a
return s.length===1&&B.a.ga4(s).a===B.bX},
D(){var s=A.n(t.N,t.X),r=this.a,q=A.C(r),p=q.i("G<1,V<f,L?>>")
r=A.J(new A.G(r,q.i("V<f,L?>(1)").a(new A.tr()),p),p.i("a0.E"))
r.$flags=1
s.k(0,"pages",r)
r=this.b
q=A.C(r)
p=q.i("G<1,f>")
r=A.J(new A.G(r,q.i("f(1)").a(new A.ts()),p),p.i("a0.E"))
s.k(0,"modalReasons",r)
r=this.c
if(r!=null)s.k(0,"restoreFocusId",r)
return s}}
A.tr.prototype={
$1(a){return t.oP.a(a).D()},
$S:150}
A.ts.prototype={
$1(a){return t.wJ.a(a).b},
$S:151}
A.ci.prototype={}
A.tq.prototype={
iU(a){var s,r=this
if(r.a.gi1())return new A.ci(B.ad,r.a,null)
s=r.a
s=new A.eK(B.lN,s.b,a)
r.a=s
return new A.ci(B.e3,s,"pause.resume")},
mE(){var s,r=this,q=r.a,p=q.a
if(p.length>1){s=B.a.gac(p)
q=r.a.a
q=B.a.ag(q,0,q.length-1)
p=r.a
p=new A.eK(q,p.b,p.c)
r.a=p
return new A.ci(B.e4,p,s.c)}if(q.gi1()&&r.a.b.length===0)return r.cQ()
return new A.ci(B.ad,r.a,null)},
cQ(){var s=this.a
if(s.a.length===0)return new A.ci(B.ad,s,null)
if(s.b.length!==0)return new A.ci(B.ad,s,null)
this.a=B.bW
return new A.ci(B.e5,B.bW,s.c)},
pe(a){var s,r,q=this
if(B.a.q(q.a.b,a))return new A.ci(B.ad,q.a,null)
s=q.a
r=A.J(s.b,t.wJ)
r.push(a)
s=new A.eK(s.a,r,q.a.c)
q.a=s
return new A.ci(B.e3,s,null)},
nO(a){var s,r,q,p,o=this
if(!B.a.q(o.a.b,a))return new A.ci(B.ad,o.a,null)
s=o.a
r=s.b
q=A.C(r)
p=q.i("F<1>")
r=A.J(new A.F(r,q.i("l(1)").a(new A.tt(a)),p),p.i("t.E"))
q=o.a.c
r=new A.eK(s.a,r,q)
o.a=r
return new A.ci(B.om,r,q)},
kY(a){var s
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
A.tt.prototype={
$1(a){return t.wJ.a(a)!==this.a},
$S:152}
A.cZ.prototype={
C(){return"PauseRootAction."+this.b}}
A.tu.prototype={
bE(a,b,c,d){var s=B.mG.h(0,c)
s.toString
A.c(b.appendChild(A.ez(a,new A.bu(s,B.P,d,null,B.t),new A.tv(this,c),null)))},
sp9(a){this.f=t.Z.a(a)},
spb(a){this.r=t.Z.a(a)},
soR(a){this.w=t.Z.a(a)},
spa(a){this.x=t.Z.a(a)},
soX(a){this.y=t.Z.a(a)},
soS(a){this.z=t.Z.a(a)},
sbo(a){this.Q=t.Z.a(a)}}
A.tv.prototype={
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
A.c5.prototype={
C(){return"PauseSettingsCategory."+this.b}}
A.tU.prototype={
jK(a){var s,r,q
if(a==this.b)return
this.b=a
s=this.a
r=a==null
q=r?"":B.W.c4("",!0,a)
s.textContent=q
r=r?"prompt":"prompt visible"
s.className=r}}
A.uq.prototype={
ko(a){var s,r,q,p,o,n=this.b
n.className=A.x(n.className)+" brush-page-frame"
n.setAttribute("aria-label","Settings categories")
n.setAttribute("data-brush-kind","frame")
n.setAttribute("data-brush-state","normal")
A.c(n.appendChild(A.pm(a,B.fi,1)))
A.c(n.appendChild(A.I(a,"p","settings-copy","Choose a part of the house experience to adjust.")))
s=A.I(a,"nav","pause-actions",null)
s.setAttribute("aria-label","Settings categories")
for(r=0;r<6;++r){q=B.ld[r]
p=B.dM.h(0,q)
p.toString
o=B.dL.h(0,q)
o.toString
A.c(s.appendChild(A.ez(a,new A.bu(o,B.P,p,p+" settings",B.t),new A.ur(this,q),null)))}A.c(s.appendChild(A.ez(a,B.fh,new A.us(this),null)))
A.c(n.appendChild(s))},
soN(a){this.f=t.hQ.a(a)},
sbo(a){this.r=t.Z.a(a)}}
A.ur.prototype={
$0(){var s=this.a.f
return s==null?null:s.$1(this.b)},
$S:0}
A.us.prototype={
$0(){var s=this.a.r
return s==null?null:s.$0()},
$S:0}
A.hK.prototype={
kp(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="root",e="settings-grid",d=h.f,c=d==null,b=c?"House settings":A.z(B.dM.h(0,d))+" settings",a=h.b
a.className=A.x(a.className)+" brush-page-frame"
a.setAttribute("aria-label",b)
a.setAttribute("data-brush-kind","frame")
a.setAttribute("data-brush-state","normal")
s=c?g:d.b
A.c(a.appendChild(A.pm(a0,new A.bu("settings."+(s==null?f:s)+".heading",B.aL,b,g,B.t),2)))
A.c(a.appendChild(A.I(a0,"p","settings-copy","Change presentation without changing what happened in the house.")))
r=A.I(a0,"div",e,g)
for(s=t.aV,q=s.a(new A.uR(h)),p=B.a.gA(B.L),o=t.xG,q=new A.R(p,q,o);q.m();){n=p.gp()
m=n.a
l=n.b
k=n.f
if(k==null)k=0
n=n.r
A.c(r.appendChild(h.lm(a0,m,l,n==null?1:n,k)))}A.c(a.appendChild(r))
j=A.I(a0,"div",e,g)
for(s=s.a(new A.uS(h)),q=B.a.gA(B.L),o=new A.R(q,s,o);o.m();)A.c(j.appendChild(h.mc(a0,q.gp())))
A.c(a.appendChild(j))
if(d===B.S)A.c(a.appendChild(h.kA(a0)))
if(d===B.T)A.c(a.appendChild(h.kz(a0)))
if(d===B.ac)A.c(a.appendChild(h.kB(a0)))
i=A.I(a0,"div",e,g)
for(s=t.pz.a(h.gle()),q=B.a.gA(B.lR),s=new A.R(q,s,t.rt);s.m();){p=q.gp()
o=c?g:d.b
if(o==null)o=f
n=p.b
A.c(i.appendChild(A.ez(a0,new A.bu("settings."+o+".reset."+n,B.P,"reset "+n,"restore "+n+" settings to defaults",B.t),new A.uT(h,p),g)))}s=c?g:d.b
A.c(i.appendChild(A.ez(a0,new A.bu("settings."+(s==null?f:s)+".reset.all",B.P,"reset all settings","restore all settings to defaults",B.fp),new A.uU(h),g)))
A.c(a.appendChild(i))
d=c?g:d.b
A.c(a.appendChild(A.ez(a0,new A.bu("settings."+(d==null?f:d)+".back",B.P,"return","return to settings categories",B.t),new A.uV(h),g)))},
kz(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="photosensitivitySafe",h="setting-row",g=A.I(a,"div","settings-grid",j),f=k.e6(a,g,"reducedMotion","reduced motion (system default)"),e=k.e6(a,g,i,"photosensitivity-safe effects (system default)"),d=k.e6(a,g,"captions","non-speech captions"),c=A.I(a,"label",h,j)
A.c(c.appendChild(A.I(a,"span",j,"UI scale")))
s=A.c(a.createElement("input"))
s.type="range"
s.min="0.8"
s.max="2.0"
s.step="0.1"
s.value="1.0"
s.addEventListener("input",A.Z(new A.uJ(k,s)))
A.c(c.appendChild(s))
A.c(g.appendChild(c))
r=A.I(a,"label",h,j)
A.c(r.appendChild(A.I(a,"span",j,"screen-reader verbosity")))
q=A.c(a.createElement("select"))
q.id="settings.accessibility.screen-reader-verbosity"
for(p=0;p<3;++p){o=B.bJ[p]
n=A.c(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.c(q.appendChild(n))}q.addEventListener("change",A.Z(new A.uK(k,q)))
A.c(r.appendChild(q))
A.c(g.appendChild(r))
l=A.I(a,"button","door-continue","follow system accessibility defaults")
l.setAttribute("type","button")
l.setAttribute("aria-label","follow system accessibility defaults")
l.addEventListener("click",A.Z(new A.uL(k)))
A.c(g.appendChild(l))
k.ok.K(0,A.E(["reducedMotion",f,i,e,"captions",d,"uiScale",s],t.N,t.m))
k.p1.k(0,"screenReaderVerbosity",q)
return g},
e6(a,b,c,d){var s=A.I(a,"label","setting-toggle",null),r=A.c(a.createElement("input"))
r.type="checkbox"
r.addEventListener("change",A.Z(new A.ut(this,r,c)))
A.c(s.appendChild(r))
A.c(s.appendChild(A.I(a,"span",null,d)))
A.c(b.appendChild(s))
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
s.value=(r==null?B.aq:r).b}},
kB(a){var s,r,q,p,o,n,m=this,l=null,k="confirmations",j="label",i="setting-toggle",h="span",g=A.I(a,"div","settings-grid",l)
m.br(a,g,"interactionMode","interaction mode",B.bI,t.bK)
m.br(a,g,"promptDensity","prompt density",B.bL,t.dn)
m.br(a,g,"textPacing","text pacing",B.bK,t.j_)
m.br(a,g,"journalLayout","journal layout",B.bB,t.gm)
m.br(a,g,k,k,B.bv,t.aJ)
m.br(a,g,"saveFeedback","save feedback",B.bC,t.mx)
m.br(a,g,"focusLossBehavior","when the window loses focus",B.aW,t.x)
m.br(a,g,"clockFormat","clock format",B.by,t.vS)
s=A.I(a,j,i,l)
r=A.c(a.createElement("input"))
r.type="checkbox"
r.checked=m.k3.x
r.addEventListener("change",A.Z(new A.uM(m,r)))
A.c(s.appendChild(r))
A.c(s.appendChild(A.I(a,h,l,"contextual reminders")))
A.c(g.appendChild(s))
m.id=r
q=A.I(a,j,i,l)
p=A.c(a.createElement("input"))
p.type="checkbox"
p.checked=m.k3.z
p.addEventListener("change",A.Z(new A.uN(m,p)))
A.c(q.appendChild(p))
A.c(q.appendChild(A.I(a,h,l,"show daily objective")))
A.c(g.appendChild(q))
m.k1=p
o=A.I(a,j,i,l)
n=A.c(a.createElement("input"))
n.type="checkbox"
n.checked=m.k3.Q
n.addEventListener("change",A.Z(new A.uO(m,n)))
A.c(o.appendChild(n))
A.c(o.appendChild(A.I(a,h,l,"story mode (visitors and narrative time)")))
A.c(g.appendChild(o))
m.k2=n
return g},
br(a,b,c,d,e,f){var s,r,q,p,o,n,m
A.Ef(f,t.Ct,"T","_addGameplaySelect")
f.i("K<0>").a(e)
s=A.I(a,"label","setting-row",null)
A.c(s.appendChild(A.I(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.gameplay."+c
for(q=e.length,p=0;p<q;++p){o=e[p]
n=A.c(a.createElement("option"))
m=o.b
n.value=m
n.textContent=m
A.c(r.appendChild(n))}r.addEventListener("change",A.Z(new A.uH(this,c,r)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.go.k(0,c,r)},
ju(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
f.k3=a
for(s=f.go,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0),r=a.y.b,q=a.w.b,p=a.r.b,o=a.f.b,n=a.e.b,m=a.d.b,l=a.c.b,k=a.b.b;s.m();){j=s.d
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
kA(a){var s,r,q=this,p=A.I(a,"div","settings-grid",null),o=t.N,n=A.n(o,o)
for(s=0;s<4;++s){r=B.bH[s].b
n.k(0,r,r)}q.d_(a,p,"output","output",n)
n=A.n(o,o)
for(s=0;s<3;++s){r=B.bA[s].b
n.k(0,r,r)}q.d_(a,p,"dynamicRange","dynamic range",n)
n=A.n(o,o)
for(s=0;s<2;++s){r=B.bz[s].b
n.k(0,r,r)}q.d_(a,p,"reverb","room effect",n)
o=A.n(o,o)
for(s=0;s<2;++s){n=B.bx[s].b
o.k(0,n,n)}q.d_(a,p,"ducking","voice intelligibility",o)
return p},
d_(a,b,c,d,e){var s,r,q,p,o
t.G.a(e)
s=A.I(a,"label","setting-row",null)
A.c(s.appendChild(A.I(a,"span",null,d)))
r=A.c(a.createElement("select"))
r.id="settings.audio."+c
for(q=new A.N(e,A.v(e).i("N<1,2>")).gA(0);q.m();){p=q.d
p.toString
o=A.c(a.createElement("option"))
o.value=p.a
o.textContent=p.b
A.c(r.appendChild(o))}r.addEventListener("change",A.Z(new A.uy(this,c,r)))
A.c(s.appendChild(r))
A.c(b.appendChild(s))
this.p3.k(0,c,r)},
jt(a){var s,r,q,p,o,n,m,l,k
this.p2=a
for(s=this.p3,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0),r=a.e.b,q=a.d.b,p=a.c.b,o=a.b.b;s.m();){n=s.d
m=n.b
l=n.a
A:{if("output"===l){k=o
break A}if("dynamicRange"===l){k=p
break A}if("reverb"===l){k=q
break A}k=r
break A}m.value=k}},
hi(a){var s,r=this.f
A:{if(r==null){s=!0
break A}if(B.ab===r){s=a.c===B.b1
break A}if(B.T===r){s=a.c===B.aj
break A}if(B.S===r){s=a.c===B.O
break A}s=!1
break A}return s},
lf(a){var s,r
t.en.a(a)
s=this.f
A:{if(s==null){r=!0
break A}if(B.ab===s){r=a===B.b1
break A}if(B.T===s){r=a===B.aj
break A}if(B.S===s){r=a===B.O
break A}r=!1
break A}return r},
mc(a,b){var s=this,r=A.I(a,"label","setting-toggle",null),q=A.c(a.createElement("input"))
q.type="checkbox"
switch(b.a){case"muted":s.dy=q
break
case"mono":s.fr=q
break
case"high-contrast":s.fx=q
break
case"strong-highlights":s.fy=q
break}q.addEventListener("change",A.Z(new A.uQ(s,b,q)))
A.c(r.appendChild(q))
A.c(r.appendChild(A.I(a,"span",null,b.b)))
return r},
lm(a,b,c,d,e){var s,r,q=this,p=A.I(a,"label","setting-row",null),o=A.I(a,"span",null,c),n=A.c(a.createElement("input"))
n.type="range"
n.min=A.z(e)
n.max=A.z(d)
n.step="0.05"
n.value="1"
s="setting-"+b
n.id=s
o.setAttribute("for",s)
r=A.I(a,"output",null,"100%")
n.addEventListener("input",A.Z(new A.uP(q,n,r,b)))
A.c(p.appendChild(o))
A.c(p.appendChild(n))
A.c(p.appendChild(r))
q.cy.k(0,b,n)
q.db.k(0,b,r)
q.dx.k(0,b,new A.a6(e,d))
return p},
fw(a,b){var s,r,q=this.cy.h(0,a),p=this.db.h(0,a)
if(q==null||p==null)return
s=this.dx.h(0,a)
if(s==null)s=B.pG
r=B.b.n(b,s.a,s.b)
q.value=B.b.t(r)
p.textContent=""+B.b.ao(r*100)+"%"},
soZ(a){this.r=t.DI.a(a)},
sp5(a){this.w=t.xl.a(a)},
sp0(a){this.x=t.xl.a(a)},
soV(a){this.y=t.DI.a(a)},
soY(a){this.z=t.xl.a(a)},
spd(a){this.Q=t.xl.a(a)},
sp8(a){this.as=t.Ci.a(a)},
sp7(a){this.at=t.Z.a(a)},
sbo(a){this.ax=t.Z.a(a)},
soM(a){this.ay=t.kC.a(a)},
soW(a){this.ch=t.hq.a(a)},
soL(a){this.CW=t.Cv.a(a)},
sp6(a){this.cx=t.Z.a(a)}}
A.uR.prototype={
$1(a){t.gl.a(a)
return a.d===B.a2&&this.a.hi(a)},
$S:20}
A.uS.prototype={
$1(a){t.gl.a(a)
return a.d===B.aD&&this.a.hi(a)},
$S:20}
A.uT.prototype={
$0(){var s=this.a.as
return s==null?null:s.$1(this.b)},
$S:0}
A.uU.prototype={
$0(){var s=this.a.at
return s==null?null:s.$0()},
$S:0}
A.uV.prototype={
$0(){var s=this.a,r=s.ax
if(r!=null)r.$0()
else s.al()},
$S:0}
A.uJ.prototype={
$1(a){var s=this.a,r=s.k4,q=A.fv(A.x(this.b.value))
r=r.nA(q==null?1:q)
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.uK.prototype={
$1(a){var s=this.a,r=s.k4.nu(B.a.az(B.bJ,new A.uI(this.b)))
s.k4=r
s=s.CW
if(s!=null)s.$1(r)},
$S:1}
A.uI.prototype={
$1(a){return t.mq.a(a).b===A.x(this.a.value)},
$S:47}
A.uL.prototype={
$1(a){var s=this.a.cx
return s==null?null:s.$0()},
$S:2}
A.ut.prototype={
$1(a){var s,r=A.U(this.b.checked),q=this.a,p=this.c
A:{if("reducedMotion"===p){s=q.k4.nq(r)
break A}if("photosensitivitySafe"===p){s=q.k4.no(r)
break A}if("captions"===p){s=q.k4.n5(r)
break A}s=q.k4
break A}q.k4=s
q=q.CW
if(q!=null)q.$1(s)},
$S:1}
A.uM.prototype={
$1(a){var s=this.a,r=s.k3.n8(A.U(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.uN.prototype={
$1(a){var s=this.a,r=s.k3.nw(A.U(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.uO.prototype={
$1(a){var s=this.a,r=s.k3.nx(A.U(this.b.checked))
s.k3=r
s=s.ch
if(s!=null)s.$1(r)},
$S:1}
A.uH.prototype={
$1(a){var s,r=this,q=r.a,p=r.b
A:{if("interactionMode"===p){s=q.k3.nh(B.a.az(B.bI,new A.uz(r.c)))
break A}if("promptDensity"===p){s=q.k3.np(B.a.az(B.bL,new A.uA(r.c)))
break A}if("textPacing"===p){s=q.k3.ny(B.a.az(B.bK,new A.uB(r.c)))
break A}if("journalLayout"===p){s=q.k3.nk(B.a.az(B.bB,new A.uC(r.c)))
break A}if("confirmations"===p){s=q.k3.n7(B.a.az(B.bv,new A.uD(r.c)))
break A}if("saveFeedback"===p){s=q.k3.nt(B.a.az(B.bC,new A.uE(r.c)))
break A}if("clockFormat"===p){s=q.k3.n6(B.a.az(B.by,new A.uF(r.c)))
break A}s=q.k3.nd(B.a.az(B.aW,new A.uG(r.c)))
break A}q.k3=s
q=q.ch
if(q!=null)q.$1(s)},
$S:1}
A.uz.prototype={
$1(a){return t.bK.a(a).b===A.x(this.a.value)},
$S:155}
A.uA.prototype={
$1(a){return t.dn.a(a).b===A.x(this.a.value)},
$S:156}
A.uB.prototype={
$1(a){return t.j_.a(a).b===A.x(this.a.value)},
$S:157}
A.uC.prototype={
$1(a){return t.gm.a(a).b===A.x(this.a.value)},
$S:158}
A.uD.prototype={
$1(a){return t.aJ.a(a).b===A.x(this.a.value)},
$S:159}
A.uE.prototype={
$1(a){return t.mx.a(a).b===A.x(this.a.value)},
$S:160}
A.uF.prototype={
$1(a){return t.vS.a(a).b===A.x(this.a.value)},
$S:161}
A.uG.prototype={
$1(a){return t.x.a(a).b===A.x(this.a.value)},
$S:53}
A.uy.prototype={
$1(a){var s,r=this,q=r.a,p=q.p2,o=r.b
A:{if("output"===o){s=p.nm(B.a.az(B.bH,new A.uu(r.c)))
break A}if("dynamicRange"===o){s=p.nc(B.a.az(B.bA,new A.uv(r.c)))
break A}if("reverb"===o){s=p.ns(B.a.az(B.bz,new A.uw(r.c)))
break A}s=p.nb(B.a.az(B.bx,new A.ux(r.c)))
break A}q.p2=s
q=q.ay
if(q!=null)q.$1(s)},
$S:1}
A.uu.prototype={
$1(a){return t.xs.a(a).b===A.x(this.a.value)},
$S:163}
A.uv.prototype={
$1(a){return t.EL.a(a).b===A.x(this.a.value)},
$S:164}
A.uw.prototype={
$1(a){return t.gc.a(a).b===A.x(this.a.value)},
$S:165}
A.ux.prototype={
$1(a){return t.ul.a(a).b===A.x(this.a.value)},
$S:166}
A.uQ.prototype={
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
A.uP.prototype={
$1(a){var s,r,q=this,p=A.fv(A.x(q.b.value))
if(p==null)p=1
q.c.textContent=""+B.b.ao(p*100)+"%"
s=q.d
r=q.a
if(s==="brightness"){r=r.y
if(r!=null)r.$2(s,p)}else{r=r.r
if(r!=null)r.$2(s,p)}},
$S:1}
A.bS.prototype={
C(){return"SettingCategory."+this.b}}
A.jk.prototype={
C(){return"SettingKind."+this.b}}
A.bp.prototype={
dX(a){var s,r=this,q=null
switch(r.d.a){case 0:if(typeof a!="number"||!isFinite(a))throw A.b(A.M(r.a+" must be a finite number",q,q))
s=r.f
if(!(s!=null&&a<s)){s=r.r
s=s!=null&&a>s}else s=!0
if(s)throw A.b(A.M(r.a+" is outside its allowed range",q,q))
break
case 1:if(!A.bE(a))throw A.b(A.M(r.a+" must be boolean",q,q))
break}}}
A.uY.prototype={
$1(a){return t.gl.a(a).a===this.a},
$S:20}
A.uZ.prototype={
$0(){return A.h(A.i("unknown setting: "+this.a))},
$S:7}
A.uW.prototype={
kq(a,b){var s,r=this.a
if(r!==1)throw A.b(A.p("unsupported settings version "+r,null))
for(r=this.b.gO(),r=r.gA(r);r.m();){s=r.gp()
A.uX(s.a).dX(s.b)}},
cS(a){var s=this.b.h(0,a)
return s==null?A.h(A.i("setting missing from profile: "+a)):s},
D(){return A.E(["version",this.a,"values",this.b],t.N,t.K)}}
A.v_.prototype={
py(a){var s,r,q=A.hv(this.a.b,t.N,t.K)
for(s=0;s<10;++s){r=B.L[s]
if(r.c===a)q.k(0,r.a,r.e)}this.a=A.e2(q,1)
this.lW(a)},
D(){return A.E(["version",1,"requested",this.a.D(),"effective",this.b.D()],t.N,t.K)},
lW(a){var s,r,q=A.hv(this.b.b,t.N,t.K)
for(s=0;s<10;++s){r=B.L[s]
if(r.c===a)q.k(0,r.a,r.e)}this.b=A.e2(q,1)}}
A.vf.prototype={
kr(a){var s,r,q,p,o,n,m,l,k=this,j=k.b
j.setAttribute("aria-label","Rest")
A.c(j.appendChild(A.I(a,"h2","journal-title","Rest")))
s=A.I(a,"p","consult-label","Sleeping is the only way to end the day.")
k.w!==$&&A.bc()
k.w=s
A.c(j.appendChild(s))
r=A.I(a,"div","entry-picker",null)
for(s=k.r,q=0;q<2;++q){p=B.dx[q]
for(o=p.b+" sleep \xb7 ",n=0;n<4;++n){m=B.dv[n]
l=A.c(a.createElement("button"))
l.className="picker-entry"
l.textContent=o+m.b
J.em(s.c7(m,new A.vg()),l)
l.setAttribute("type","button")
l.addEventListener("click",A.Z(new A.vh(k,p,m)))
A.c(r.appendChild(l))}}A.c(j.appendChild(r))},
jv(a){var s,r,q=this.r.h(0,B.cc)
for(s=J.P(q==null?B.ls:q);s.m();){r=s.gp()
if(a){r.removeAttribute("disabled")
r.setAttribute("aria-disabled","false")}else{r.setAttribute("disabled","")
r.setAttribute("aria-disabled","true")}}s=this.w
s===$&&A.u()
r=a?"The living-room sofa is available for rest.":"Sleeping is the only way to end the day. Sofa rest is only available at home."
s.textContent=r},
spc(a){this.f=t.nf.a(a)}}
A.vg.prototype={
$0(){return A.d([],t.e)},
$S:167}
A.vh.prototype={
$1(a){var s=this.a,r=s.f
if(r!=null)r.$2(this.b,this.c)
s.al()},
$S:1}
A.cO.prototype={
gF(){return this.a},
gaE(){return this.b},
gb0(){return this.c}}
A.ok.prototype={
pO(a){var s,r,q,p
if(!t.j.b(a))return
s=this.a
r=A.C(s)
q=new A.G(s,r.i("f(1)").a(new A.om()),r.i("G<1,f>")).be(0)
r=this.b
r.S(0)
s=J.Bv(a,t.N)
p=s.$ti
r.K(0,new A.F(s,p.i("l(t.E)").a(q.gaJ(q)),p.i("F<t.E>")))},
nZ(a,b){var s,r,q,p,o,n=A.d([],t.Fg)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o.b===a&&o.c<=b&&!q.q(0,o.a))n.push(o)}return n}}
A.om.prototype={
$1(a){return t.bC.a(a).a},
$S:168}
A.ol.prototype={
$2(a,b){var s,r=t.bC
r.a(a)
r.a(b)
r=a.b
s=b.b
return r!==s?B.d.I(r,s):B.d.I(a.c,b.c)},
$S:169}
A.mM.prototype={
gcv(){var s,r,q,p,o=this.r
if(o==null||o.f>=o.c.length)return null
s=o.a
r=o.b
q=o.c
p=o.f
if(!(p>=0&&p<q.length))return A.e(q,p)
return this.d.h(0,s.a+":"+s.b+":"+r.b+":"+q[p].a)},
oy(a){return this.c.q(0,t.T.a(a))},
fb(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=a.b,g=i.a
if(!h.a8(0,g.gn4())||!a.a.a8(0,new A.vU(i)))return!1
s=a.c
if(s!=null){r=s.a
q=g.h(0,r)
p=q==null?null:q.h(0,s.b)
o=p==null?null:i.hl(r,s.b,p)
g=!0
if(o!=null)if(!h.q(0,r)){n=s.c
if(n!==B.b3){m=s.d
if(m<o.length){n=n===B.ao
if(n)m=s.e!=null||m!==0
else m=!1
if(!m)if(!n){g=s.e
g=g==null||g===B.as}else g=!1}}}if(g)return!1
g=s.b
n=s.d
if(!(n>=0&&n<o.length))return A.e(o,n)
l=i.d.h(0,r.a+":"+r.b+":"+g.b+":"+o[n].a)
m=s.r
if(m!=null)k=l==null||!B.a.R(l.f,new A.vV(s))
else k=!1
if(k)return!1
j=new A.mL(r,g,A.ad(o,t.AP),B.ao)
j.d=s.c
j.f=n
j.e=s.e
j.r=s.f
j.w=m}else j=null
g=i.b
g.S(0)
g.K(0,a.a)
g=i.c
g.S(0)
g.K(0,h)
i.r=j
return!0},
hZ(a){var s=this.a,r=A.v(s).i("ag<1>"),q=r.i("F<t.E>")
s=A.J(new A.F(new A.ag(s,r),r.i("l(t.E)").a(new A.vP(a)),q),q.i("t.E"))
B.a.Z(s,new A.vQ())
return s},
cr(a){var s,r,q,p,o,n,m=this
if(m.r!=null)return B.ti
s=m.a.h(0,a)
if(s==null)return B.tj
r=B.d.ah(a.b-1,7)
q=a.a
p=m.b.q(0,q)||r+1>=3||m.w?B.cr:B.aI
o=p===B.aI&&m.x.q(0,q)&&s.M(B.cs)?B.cs:p
if(s.M(o))n=o
else n=s.M(B.aI)?B.aI:B.cr
r=s.h(0,n)
r.toString
m.r=new A.mL(a,n,A.ad(m.hl(a,n,r),t.AP),B.ao)
m.gcv()
r=m.r
r.toString
return new A.mK(r)},
n_(a){var s,r,q,p,o,n=this.r
if(n==null)return B.eP
if(n.d!==B.ao)return B.tg
n.e=a
s=a===B.as
n.d=s?B.b3:B.aG
r=this.f
q=s?B.eN:B.rZ
p=n.a
o=p.a
p=p.b
B.a.l(r,new A.e9(q,o,p,a,null))
if(a===B.aQ)B.a.l(r,new A.e9(B.t1,o,p,a,null))
if(s)this.hy(n)
return new A.mI(n)},
mv(){var s,r=this.r
if(r==null)return B.eP
s=r.d
if(s!==B.aG&&s!==B.aH)return B.th
if(this.gcv()!=null&&r.w==null)return new A.bC(new A.bL(B.ap,"The visitor is waiting for an answer."))
r.d=B.aH
s=++r.f
r.w=null
if(s>=r.c.length){r.d=B.b3
this.hy(r)
return new A.jw(r,!0)}return new A.jw(r,!1)},
n0(a){var s,r,q=this.r,p=this.gcv(),o=!0
if(q!=null)if(p!=null){o=q.d
o=o!==B.aG&&o!==B.aH}if(o)return B.tf
o=p.f
s=A.C(o)
r=A.bP(new A.F(o,s.i("l(1)").a(new A.vS(a)),s.i("F<1>")),t.Y)
if(r==null)return B.tk
q.w=r.a
return new A.mJ(q,p,r)},
n1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=null,h=this.r
if(h!=null){s=h.d
s=s!==B.aG&&s!==B.aH}else s=!0
if(s)return i
r=h.gby()
if(r==null)return i
s=t.N
q=A.n(s,s)
p=h.f
o=h.c
n=o.length
if(p<n){if(!(p>=0))return A.e(o,p)
p=o[p].c}else p=B.dC
p=J.P(p)
while(p.m()){o=p.gp()
q.k(0,o.a,o.b)}p=h.a
o=p.a
n=A.aZ(q,s,s)
m=c.lN(!0,!0,o,new A.wj(n,r),a)
l=m.a
if(l!=null){n=m.e
k=n.a
if(k===B.b4){B.a.l(this.f,new A.e9(B.t0,o,p.b,i,l))
if(o==="warden"&&q.a!==0){p=c.a
j=p.b.h(0,l)
if(j!=null){s=A.hv(B.a.gac(j.c).a,s,s)
s.K(0,q)
p.ms(l,t.G.a(s))}if(!h.r)h.r=!0}}else{if(k!==B.eR)if(k===B.cu){s=n.b
s=s.gab(s)}else s=!1
else s=!0
if(s)B.a.l(this.f,new A.e9(B.t_,o,p.b,i,l))}}return m},
hy(a){var s=a.a
this.b.l(0,s.a)
this.c.l(0,s)
this.r=null},
hl(a,b,c){var s,r
t.cf.a(c)
s=A.d([],t.Fi)
for(r=J.P(c);r.m();)s.push(this.ln(a,b,r.gp()))
return s},
ln(a,b,c){var s,r,q=c.a,p=this.e.h(0,"visitor:"+a.a+":"+a.b+":"+b.b+"."+q)
if(p==null)s=null
else{r=A.C(p)
s=A.bP(new A.F(p,r.i("l(1)").a(new A.vN(this)),r.i("F<1>")),t.aS)}return s==null?c:new A.cn(q,s.c,c.c)},
sk_(a){this.x=t.Q.a(a)}}
A.vU.prototype={
$1(a){var s=this.a.a
return new A.ag(s,A.v(s).i("ag<1>")).R(0,new A.vT(A.x(a)))},
$S:3}
A.vT.prototype={
$1(a){return t.T.a(a).a===this.a},
$S:29}
A.vV.prototype={
$1(a){return t.Y.a(a).a===this.a.r},
$S:14}
A.vP.prototype={
$1(a){return t.T.a(a).b===this.a},
$S:29}
A.vQ.prototype={
$2(a,b){var s,r=t.T
r.a(a)
r.a(b)
s=B.d.I(a.c,b.c)
return s!==0?s:B.d.I(a.d,b.d)},
$S:171}
A.vS.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.vR.prototype={
$0(){return A.d([],t.jV)},
$S:172}
A.vN.prototype={
$1(a){return t.aS.a(a).d.gO().a8(0,new A.vM(this.a))},
$S:173}
A.vM.prototype={
$1(a){t.q.a(a)
return this.a.y.b_(a.a,a.b)},
$S:174}
A.vO.prototype={
$2(a,b){var s=t.AP
return B.d.I(s.a(a).a,s.a(b).a)},
$S:175}
A.mN.prototype={}
A.nj.prototype={}
A.z_.prototype={
$1(a){return B.c.Y(A.x(a),"off.")},
$S:3}
A.c0.prototype={
C(){return"DoorChoice."+this.b}}
A.cl.prototype={
C(){return"VisitPhase."+this.b}}
A.cm.prototype={
C(){return"VisitTier."+this.b}}
A.eQ.prototype={
C(){return"VisitorFactKind."+this.b}}
A.e9.prototype={
D(){var s,r=this,q=A.n(t.N,t.z)
q.k(0,"kind",r.a.b)
q.k(0,"visitor",r.b)
q.k(0,"day",r.c)
s=r.d
if(s!=null)q.k(0,"choice",s.b)
s=r.e
if(s!=null)q.k(0,"ordinal",s)
return q},
gaE(){return this.c}}
A.dw.prototype={
C(){return"VisitorIssueCode."+this.b}}
A.bL.prototype={
ad(a,b){if(b==null)return!1
return b instanceof A.bL&&b.a===this.a&&b.b===this.b},
gW(a){return A.cY(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.cn.prototype={
ad(a,b){if(b==null)return!1
return b instanceof A.cn&&b.a===this.a&&b.b===this.b},
gW(a){return A.cY(this.a,this.b,B.h,B.h,B.h,B.h)}}
A.cb.prototype={
ad(a,b){var s=this
if(b==null)return!1
return b instanceof A.cb&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gW(a){var s=this
return A.cY(s.a,s.b,s.c,s.d,B.h,B.h)},
D(){var s=this
return A.E(["visitor",s.a,"day",s.b,"hour",s.c,"order",s.d],t.N,t.z)},
gaE(){return this.b},
gb0(){return this.c}}
A.mO.prototype={
D(){var s,r,q,p=this.a
p=A.J(p,A.v(p).c)
B.a.a7(p)
s=this.b
r=A.v(s)
q=r.i("dK<1,V<f,@>>")
s=A.J(new A.dK(s,r.i("V<f,@>(1)").a(new A.vL()),q),q.i("t.E"))
r=this.c
return A.E(["contacted",p,"resolved",s,"active",r==null?null:r.D()],t.N,t.z)}}
A.vL.prototype={
$1(a){return t.T.a(a).D()},
$S:176}
A.kA.prototype={
D(){var s,r=this,q=A.n(t.N,t.z)
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
A.oh.prototype={
$1(a){return t.hF.a(a).b===this.a},
$S:177}
A.oi.prototype={
$1(a){return t.gM.a(a).b===this.a},
$S:178}
A.oj.prototype={
$1(a){return t.fP.a(a).b===this.a},
$S:179}
A.mL.prototype={
gby(){var s=this.f,r=this.c,q=r.length
if(s<q){if(!(s>=0))return A.e(r,s)
s=r[s].b}else s=null
return s}}
A.vW.prototype={}
A.bC.prototype={}
A.mK.prototype={}
A.mI.prototype={}
A.jw.prototype={}
A.mJ.prototype={}
A.hV.prototype={}
A.nm.prototype={
gmV(){var s,r
if(!this.aL)return B.o
s=this.r
s===$&&A.u()
r=this.w
r===$&&A.u()
return B.fD.mW(s,r)},
goe(){var s="shadowCaster",r=this.dH
if(r==null)return null
return"draws="+r.b+";triangles="+r.c+";instances="+r.e+";gpuBytes="+r.r+";creates="+r.x+";deletes="+r.y+";shadowDraws="+r.iV(s).a+";shadowTriangles="+r.iV(s).b+";frameMs="+B.b.G(this.dI,3)},
giD(){var s=this.dH
if(s==null)return!1
return s.b<=64&&s.c<=1e5&&s.r<=67108864&&this.dI<=100},
op(){var s,r,q,p,o,n,m,l=this,k=l.a
l.d=k
k=k.a.j3()
l.r=k
k=l.w=B.cJ.js(k)
if(k.a===B.M)k=l.w=B.ea
q=l.b
p=l.c
s=new A.mw(q,p,q,p)
o=A.Cr(l.d.a)
l.e=o
try{o.iN(l.kS(k,q,p),s)}catch(n){r=A.am(n)
k=l.w
if(k===B.aB)throw n
l.x=k.a.b+" profile failed; using safe graph: "+A.z(r)
l.w=B.aB
k=A.Cr(l.d.a)
k.iN(B.q5,s)
l.e=k}k=l.e
k.cm()
m=A.H6(k.w.a.b)
B.a.l(k.d,m)
l.f=m
l.cw=l.b
l.cz=l.c
l.h6()
l.o9=A.GL(!0,!0,!0)
l.ij=new A.tD(A.n(t.N,t.S))
l.aL=!0},
dW(a,b){var s,r=this
if(a<=0||b<=0)throw A.b(A.p("Pixeldart surface size must be positive",null))
if(!r.aL){r.b=a
r.c=b
return}r.b=a
r.c=b
if(r.cA!==a||r.cB!==b)r.cB=r.cA=null
s=r.e
s===$&&A.u()
s.cm()
new A.mw(a,b,a,b).B()
if(r.dm==null)r.dm=r.cl()},
cl(){var s=0,r=A.aN(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$cl=A.aO(function(a,b){if(a===1){p.push(b)
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
return A.a7(A.ya(i,B.cM.i6("auto","full","srgb",h,"auto","profile",A.j(l),g)),$async$cl)
case 8:n.cw=m
n.cz=l
n.cB=n.cA=null
A.ko()
s=6
break
case 7:o.push(5)
s=4
break
case 3:q=2
e=p.pop()
k=A.am(e)
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
case 5:return A.aL(null,r)
case 1:return A.aK(p.at(-1),r)}})
return A.aM($async$cl,r)},
h3(a,b,c,d,e,f,g,h){return B.cM.i6(d,e,f,a,g,h,c,b)},
kS(a,b,c){return this.h3(a,b,c,"auto","full","srgb","auto","profile")},
h6(){var s,r,q,p=this.w
p===$&&A.u()
s=p.a
A:{p=B.M===s
if(p){r=7
break A}if(B.U===s){r=3
break A}r=0
break A}B:{if(p){p=2
break B}if(B.U===s){p=1
break B}p=0
break B}q=t.S
if(!isFinite(0.15))A.h(A.p("hysteresisThreshold must be finite and >= 0",null))
this.fy=new A.rA(r,p,A.a1(q),A.a1(q),A.n(q,t.i))},
dj(a){var s=0,r=A.aN(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$dj=A.aO(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.aL){s=1
break}switch(a.b.a){case 0:i=B.ea
break
case 2:i=B.aB
break
case 1:i=B.e9
break
case 3:i=n.w
i===$&&A.u()
break
default:i=null}m=i
i=n.w
i===$&&A.u()
l=i
k=n.h3(m,n.b,n.c,a.f,a.x,a.w,a.c,a.y)
p=4
i=n.e
i===$&&A.u()
s=7
return A.a7(A.ya(i,t.lg.a(k)),$async$dj)
case 7:n.w=t.xK.a(m)
n.h6()
n.cw=n.b
n.cz=n.c
n.x=null
A.ko()
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.am(g)
n.w=t.xK.a(l)
n.x="graphics transaction rejected; previous graph retained: "+A.z(j)
A.ko()
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.aL(q,r)
case 2:return A.aK(o.at(-1),r)}})
return A.aM($async$dj,r)},
mD(d9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4="wall-plaster",d5="grime",d6="renderer is not initialized",d7="resource library is disposed",d8="spare-room"
if(!d2.aL||d2.Q.length!==0)return
d2.dn=d9
s=d2.k2
r=d2.e
r===$&&A.u()
s.k(0,d4,r.gaq().dU(8,"texture:wall-plaster",!0,256,B.ay,256))
s.k(0,d5,d2.e.gaq().dU(8,"texture:grime",!0,512,B.ay,512))
for(q=0;q<2;++q){p=B.mn[q]
r=d2.e.w
if(r==null)r=A.h(A.i(d6))
s.k(0,p,r.dU(8,"texture:"+p,!0,256,B.ay,256))}for(q=0;q<3;++q){p=B.kC[q]
o=p==="glass"
r=d2.e.w
if(r==null)r=A.h(A.i(d6))
n=o?256:4096
m=o?256:4096
s.k(0,p,r.dU(8,"texture:"+p,!0,m,B.ay,n))}s.k(0,"skybox-main-atmosphere-v1",d2.e.gaq().j5(8,"texture:skybox-main-atmosphere-v1",!0,2048,B.ay,4096,B.jx))
d2.ep()
d2.da()
d2.ry=d2.bg(A.iR(s.h(0,d4),0.5,B.a6,0.2,0,!1,0,"quarantine-house-safe",0,1,d3,!0,1,0.48,0.44,0.46,1,1))
d2.lh()
for(r=d9.b,n=r.length,m=d2.ok,l=d2.k4,k=t.N,j=d2.rx,i=t.pw,q=0;q<r.length;r.length===n||(0,A.r)(r),++q){h=r[q]
g=A.n(k,i)
for(f=A.E(["wall",h.x,"floor",h.y,"ceiling",h.z],k,k),f=new A.cW(f,f.r,f.e,A.v(f).i("cW<1,2>")),e=h.a,d="quarantine-house-"+e+"-";f.m();){c=f.d
b=c.b
a=B.bM.h(0,b)
if(a==null)A.h(A.i("Unknown house surface material: "+b))
b=a.c
a0=c.a
a1=a.a
b=A.iR(s.h(0,a.b),0.5,B.a6,0.2,0,!1,0,d+a0+"-"+a1,0,1,d3,!0,a.d,(b&255)/255,(b>>>8&255)/255,(b>>>16&255)/255,1,1)
a1=d2.e.w
if(a1==null)a1=A.h(A.i(d6))
if(a1.x)A.h(A.i(d7))
b.B()
a2=a1.b.a.av(b,d3)
a1.r.l(0,a2)
j.k(0,b.a,b)
g.k(0,a0,a2)}m.k(0,e,g)
f=g.h(0,"wall")
f.toString
l.k(0,e,f)}for(n=d2.p1,q=0;q<7;++q){a3=B.lm[q]
m=a3==="service"?s.h(0,d5):s.h(0,d4)
k=d2.el(a3)
i=d2.el(a3)
k=A.iR(m,0.5,B.a6,0.2,0,!1,0,"quarantine-inventory-"+a3,0,1,d3,!0,1,d2.el(a3).c,i.b,k.a,1,1)
i=d2.e.w
m=i==null?A.h(A.i(d6)):i
if(m.x)A.h(A.i(d7))
k.B()
a2=m.b.a.av(k,d3)
m.r.l(0,a2)
j.k(0,k.a,k)
n.k(0,a3,a2)}d2.da()
for(n=r.length,q=0;q<r.length;r.length===n||(0,A.r)(r),++q){h=r[q]
if(B.em.q(0,h.a))continue
d2.li(d9,h)}$.o.j().setAttribute("data-renderer-legacy-living-room-shell","removed")
$.o.j().setAttribute("data-renderer-canonical-room-shell","living-room")
d2.lQ(d9)
$.o.j().setAttribute("data-renderer-house-model-scale",B.b.G(2.25,2))
for(n=r.length,q=0;q<n;++q)for(m=r[q].e.length,a4=0;a4<m;++a4)continue
for(n=d9.c,m=n.length,k=d2.fx,i=d2.y,f=d9.e,q=0;e=n.length,q<e;n.length===m||(0,A.r)(n),++q){a5=n[q]
if(a5.at==null||a5.as)continue
h=f.h(0,a5.b)
if(h==null)continue
a6=d2.h9(d9,h,a5)
e=d2.e.w
if(e==null)e=A.h(A.i(d6))
d=a5.a
if(e.x)A.h(A.i(d7))
b=e.a
a6.B()
a2=b.b.av(a6,"door-leaf:"+d)
a0=a2.a
b.c.k(0,a0,b.aU(a6))
e.f.l(0,a2)
B.a.l(i,a2)
e=h.a
b=l.h(0,e)
if(b==null){b=d2.ry
b.toString}a7=new A.aQ(a2,b,B.q,0,B.C,B.z,!0,!0,0,d3)
b=d2.f
b===$&&A.u()
B.q.B()
a1=b.a
a8=a1.$ti
a1.a2(a8.c.a(a2))
a1=a1.b
if(!(a0>=0&&a0<a1.length))return A.e(a1,a0)
a6=a1[a0].c
a0=(a6==null?a8.y[1].a(a6):a6).d
a1=B.q.af()
a0=a0.gap()
a8=A.C(a0)
a9=A.b3(new A.G(a0,a8.i("A(1)").a(a1.gau()),a8.i("G<1,A>")))
b0=b.b.b9(a7)
b.c.k(0,b0,new A.aT(b0,a7,a9))
k.k(0,d,new A.jP(d,e,b0,a2,a7))}for(m=d2.id,k=t.Bs,q=0;q<n.length;n.length===e||(0,A.r)(n),++q){a5=n[q]
if(a5.as||a5.at!=null)continue
h=f.h(0,a5.b)
if(h==null)continue
d=h.a
b=d2.lJ(h,a5.aY(d),a5.aQ(d),a5.aQ(d)+a5.w,0,a5.x,5915445)
a0=k.a(new A.wY(a5))
a1=d2.e.w
if(a1==null)a1=A.h(A.i(d6))
if(a1.x)A.h(A.i(d7))
a8=a1.a
b.B()
a2=a8.b.av(b,"decoration:"+d)
b1=a2.a
a8.c.k(0,b1,a8.aU(b))
a1.f.l(0,a2)
B.a.l(i,a2)
a1=l.h(0,d)
if(a1==null){b=d2.ry
b.toString}else b=a1
b2=new A.aQ(a2,b,B.q,0,B.C,B.z,!0,!0,0,d3)
b=d2.f
b===$&&A.u()
B.q.B()
a1=b.a
a8=a1.$ti
a1.a2(a8.c.a(a2))
a1=a1.b
if(!(b1>=0&&b1<a1.length))return A.e(a1,b1)
a6=a1[b1].c
a1=(a6==null?a8.y[1].a(a6):a6).d
a8=B.q.af()
a1=a1.gap()
b1=A.C(a1)
a9=A.b3(new A.G(a1,b1.i("A(1)").a(a8.gau()),b1.i("G<1,A>")))
b0=b.b.b9(b2)
b.c.k(0,b0,new A.aT(b0,b2,a9))
B.a.l(m,new A.nl(d,b0,b2,a0))}for(n=A.Ln(A.KH(d9)),m=n.length,k=d2.dy,f=d2.dx,e=d2.db,d=d2.k3,b=d2.fr,q=0;q<n.length;n.length===m||(0,A.r)(n),++q){b3=n[q]
a0=b3.b
b4=a0===4?d5:d4
a=b.h(0,a0)
if(a==null){a1=s.h(0,b4)
a8=d2.bR(a0)
b1=d2.bR(a0)
a8=A.iR(a1,0.5,B.a6,0.2,0,!0,0,"quarantine-house-exterior-slot-"+a0,0,1,d3,!0,1,d2.bR(a0).c,b1.b,a8.a,1,1)
b1=d2.e.w
a1=b1==null?A.h(A.i(d6)):b1
if(a1.x)A.h(A.i(d7))
a8.B()
a2=a1.b.a.av(a8,d3)
a1.r.l(0,a2)
j.k(0,a8.a,a8)
b.k(0,a0,a2)
a=a2}a1=d2.e.w
if(a1==null)a1=A.h(A.i(d6))
a8=b3.c
b1=b3.a
a0=""+a0
if(a1.x)A.h(A.i(d7))
b5=a1.a
a8.B()
a2=b5.b.av(a8,"exterior:"+b1+":slot-"+a0)
b6=a2.a
b5.c.k(0,b6,b5.aU(a8))
a1.f.l(0,a2)
B.a.l(i,a2)
b7=b1+":"+a0
d.k(0,b7,b4)
if(!B.aC.q(0,b1))A.h(A.p("unknown exterior cell: "+b1,d3))
b8=new A.aQ(a2,a,B.q,-1,B.C,B.z,B.qx.q(0,b1),!0,0,d3)
k.k(0,b7,b1)
f.k(0,b7,b8)
a0=d2.f
a0===$&&A.u()
B.q.B()
a1=a0.a
a8=a1.$ti
a1.a2(a8.c.a(a2))
a1=a1.b
if(!(b6>=0&&b6<a1.length))return A.e(a1,b6)
a6=a1[b6].c
a1=(a6==null?a8.y[1].a(a6):a6).d
a8=B.q.af()
a1=a1.gap()
b1=A.C(a1)
a9=A.b3(new A.G(a1,b1.i("A(1)").a(a8.gau()),b1.i("G<1,A>")))
b0=a0.b.b9(b8)
a0.c.k(0,b0,new A.aT(b0,b8,a9))
e.k(0,b7,b0)}$.ks()
b9=B.fG.mR(d9)
if(!B.n.gN(b9)){c0=d2.aP(b9)
c1=b.h(0,4)
if(c1==null){s=s.h(0,d5)
n=d2.bR(4)
m=d2.bR(4)
c1=d2.bg(A.iR(s,0.5,B.a6,0.2,0,!0,0,"quarantine-house-exterior-slot-4",0,1,d3,!0,1,d2.bR(4).c,m.b,n.a,1,1))
b.k(0,4,c1)}c2=d2.e.gaq().bp(c0,"canonical:roof")
B.a.l(i,c2)
s=d2.f
s===$&&A.u()
B.a.l(d2.Q,s.hW(new A.aQ(c2,c1,B.q,-1,B.C,B.z,!0,!0,0,d3)))}c3=B.fs.mN(d9)
if(!B.n.gN(c3)){c4=d2.aP(c3)
c5=d2.lp(d8)
c6=d2.e.gaq().bp(c4,"canonical:attic")
B.a.l(i,c6)
s=d2.f
s===$&&A.u()
B.a.l(d2.Q,s.hW(new A.aQ(c6,c5,B.q,-1,B.C,B.z,!0,!0,0,d3)))}c7=B.fq.jk(d9)
for(s=c7.length,n=d2.Q,q=0;q<c7.length;c7.length===s||(0,A.r)(c7),++q){c8=c7[q]
m=d2.e.w
if(m==null)m=A.h(A.i(d6))
k=d2.aP(c8.w)
if(m.x)A.h(A.i(d7))
j=m.a
k.B()
a2=j.b.av(k,c8.a)
f=a2.a
j.c.k(0,f,j.aU(k))
m.f.l(0,a2)
B.a.l(i,a2)
c9=c8.b
a=l.h(0,c9==="attic"||c9==="roof"?d8:c9)
if(a==null){m=d2.ry
m.toString
a=m}m=c8.d
m=new A.e5(new A.A(m.a,m.b,m.c),A.fx(B.E,c8.e*3.141592653589793/180),c8.f.a)
a7=new A.aQ(a2,a,m,-1,B.C,B.z,!0,!0,0,d3)
k=d2.f
k===$&&A.u()
m.B()
j=k.a
e=j.$ti
j.a2(e.c.a(a2))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
a6=j[f].c
j=(a6==null?e.y[1].a(a6):a6).d
m=m.af()
j=j.gap()
f=A.C(j)
a9=A.b3(new A.G(j,f.i("A(1)").a(m.gau()),f.i("G<1,A>")))
b0=k.b.b9(a7)
k.c.k(0,b0,new A.aT(b0,a7,a9))
B.a.l(n,b0)}d0=A.G6(d9)
for(s=d0.length,q=0;q<d0.length;d0.length===s||(0,A.r)(d0),++q){c8=d0[q]
m=d2.e.w
if(m==null)m=A.h(A.i(d6))
k=d2.aP(c8.r)
if(m.x)A.h(A.i(d7))
j=m.a
k.B()
a2=j.b.av(k,"furnishing:"+c8.a)
f=a2.a
j.c.k(0,f,j.aU(k))
m.f.l(0,a2)
B.a.l(i,a2)
a=l.h(0,c8.b)
if(a==null){m=d2.ry
m.toString
a=m}m=c8.d
m=new A.e5(new A.A(m.a,m.b,m.c),A.fx(B.E,c8.e*3.141592653589793/180),c8.f)
a7=new A.aQ(a2,a,m,-1,B.C,B.z,!0,!0,0,d3)
k=d2.f
k===$&&A.u()
m.B()
j=k.a
e=j.$ti
j.a2(e.c.a(a2))
j=j.b
if(!(f>=0&&f<j.length))return A.e(j,f)
a6=j[f].c
j=(a6==null?e.y[1].a(a6):a6).d
m=m.af()
j=j.gap()
f=A.C(j)
a9=A.b3(new A.G(j,f.i("A(1)").a(m.gau()),f.i("G<1,A>")))
b0=k.b.b9(a7)
k.c.k(0,b0,new A.aT(b0,a7,a9))
B.a.l(n,b0)}for(s=r.length,q=0;q<r.length;r.length===s||(0,A.r)(r),++q){h=r[q]
if(h.e.length===0)continue
$.ks()
d1=A.HU(d9,h)
if(!B.n.gN(d1)){m=d2.e.w
if(m==null)m=A.h(A.i(d6))
k=d2.aP(d1)
j=h.a
if(m.x)A.h(A.i(d7))
f=m.a
k.B()
a2=f.b.av(k,"window-joinery:"+j)
e=a2.a
f.c.k(0,e,f.aU(k))
m.f.l(0,a2)
B.a.l(i,a2)
j=l.h(0,j)
if(j==null){m=d2.ry
m.toString}else m=j
a7=new A.aQ(a2,m,B.q,-1,B.C,B.z,!0,!0,0,d3)
m=d2.f
m===$&&A.u()
B.q.B()
k=m.a
j=k.$ti
k.a2(j.c.a(a2))
k=k.b
if(!(e>=0&&e<k.length))return A.e(k,e)
a6=k[e].c
k=(a6==null?j.y[1].a(a6):a6).d
j=B.q.af()
k=k.gap()
f=A.C(k)
a9=A.b3(new A.G(k,f.i("A(1)").a(j.gau()),f.i("G<1,A>")))
b0=m.b.b9(a7)
m.c.k(0,b0,new A.aT(b0,a7,a9))
B.a.l(n,b0)}}$.o.j().setAttribute("data-house-canonical-architecture","active")},
fv(c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="renderer is not initialized",c1="resource library is disposed",c2="promoted model package is missing: ",c3="incomplete",c4=b8.im=c5.c
b8.k1=A.ad(c5.e,t.fl)
if(!b8.aL)return
for(s=b8.p4,r=new A.ae(s,s.r,s.e,A.v(s).i("ae<2>"));r.m();)r.d.X()
s.S(0)
r=b8.R8
if(r!=null)r.b.S(0)
r=b8.RG
b8.R8=r==null?b9:new A.tJ(new A.tE(r),A.n(t.N,t.K))
for(r=b8.ch,q=new A.N(r,A.v(r).i("N<1,2>")).gA(0),p=b8.CW;q.m();){o=q.d
o.toString
n=b8.f
n===$&&A.u()
m=o.b
n.b.aN(m)
n.c.aa(0,m)
l=p.h(0,o.a)
if(l!=null){o=b8.e
o===$&&A.u()
o=o.w
if(o==null)o=A.h(A.i(c0))
n=l.a
if(o.x)A.h(A.i(c1))
o.a.aN(n)
o.f.aa(0,n)}}r.S(0)
p.S(0)
b8.cy=null
q=b8.cx
B.a.S(q)
for(o=b8.k1,n=o.length,m=b8.p1,k=t.Cx,j=t.d,i=t.s3,h=b8.p3,g=!0,f=0;f<n;++f){e=o[f]
d=e.c
c=B.c.q(d.toLowerCase(),"stair")
if(c)continue
c=e.r
c=c!=="story"&&c!=="architecture"
if(c)continue
c=b8.dn
b=c==null?b9:c.e.h(0,e.b)
if(b==null)continue
a=c5.bW(d)
if(b8.R8!=null&&b8.RG.a.M(a.a)){c=a.a
a0=b8.RG.a.h(0,c)
a1=(a0==null?A.h(A.i(c2+c)):a0).c
g=g&&b8.lO(a1.a.x,a,e.f.c.a*c4)
c=e.f
a0=c.a
a2=A.fx(B.E,c.b.b*3.141592653589793/180)
a3=b8.e
a3===$&&A.u()
a3=a3.w
if(a3==null)a3=A.h(A.i(c0))
a4=b8.f
a4===$&&A.u()
a5=b.d
a6=A.d([],j)
a7=A.d([],i)
a8=new A.hz(a1,h,a3,a4,new A.x0(b8,a,a1),new A.e5(new A.A(a5.a+a0.a*c4,a5.b+a0.b*c4,a5.c+a0.c*c4),a2,c.c.a*c4),-1,a6,a7)
a9=a8.ky("LOD0")
a8.x=a9.a
B.a.K(a6,a9.c)
B.a.K(a7,a9.b)
c=b8.R8
c.toString
a0=k.a(new A.x1(a8))
a3=c.b
a4=e.a
if(a3.M(a4))A.h(A.i("presentation placement is already bound: "+a4))
d=c5.bW(d).a
if(c.a.a.a.h(0,d)==null)A.h(A.i(c2+d))
a3.k(0,a4,a0.$1(new A.hD()))
s.k(0,a4,a8)
continue}d=b8.e
d===$&&A.u()
d=d.w
if(d==null)d=A.h(A.i(c0))
c=b8.ll(a,e,c4)
a0=e.a
if(d.x)A.h(A.i(c1))
a3=d.a
c.B()
b0=a3.b.av(c,"inventory:"+a0)
a4=b0.a
a3.c.k(0,a4,a3.aU(c))
d.f.l(0,b0)
d=e.f
c=d.a
a2=A.fx(B.E,d.b.b*3.141592653589793/180)
d=a.b
a3=m.h(0,d)
if(a3==null){a3=m.h(0,"furniture")
a3.toString}a5=b.d
c=new A.e5(new A.A(a5.a+c.a*c4,a5.b+c.b*c4,a5.c+c.c*c4),a2,1)
l=new A.aQ(b0,a3,c,-1,B.C,B.z,d!=="micro",!0,0,b9)
B.a.l(q,b0)
p.k(0,a0,l)
d=b8.f
d===$&&A.u()
c.B()
a3=d.a
a5=a3.$ti
a3.a2(a5.c.a(b0))
a3=a3.b
if(!(a4>=0&&a4<a3.length))return A.e(a3,a4)
b1=a3[a4].c
a3=(b1==null?a5.y[1].a(b1):b1).d
c=c.af()
a3=a3.gap()
a4=A.C(a3)
b2=A.b3(new A.G(a3,a4.i("A(1)").a(c.gau()),a4.i("G<1,A>")))
b3=d.b.b9(l)
d.c.k(0,b3,new A.aT(b3,l,b2))
r.k(0,a0,b3)}b4=s.a
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
b6=c5.pf("living-sofa")!=null
c4=b8.dn
r=c4==null
if((r?b9:c4.r)==="living-room")b7=(r?b9:c4.x)==="placement-living-sofa"&&s.M("placement-living-fbx-room")&&b6
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
b8.lR()},
lO(a,b,c){var s,r,q,p,o,n,m,l,k
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
lP(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a8+":"+a9,a6=a4.p2,a7=a6.h(0,a5)
if(a7!=null)return a7
s=a9.toLowerCase()
r=a8==="porcelain-mermaid"
q=B.c.q(s,"kaca")||B.c.q(s,"gelas")||B.c.q(s,"cermin")
p=B.c.q(s,"aluminium")||B.c.q(s,"kerangka")
o=B.c.q(s,"sofa")||B.c.q(s,"cusion")||B.c.q(s,"carpet")
n=B.c.q(s,"floor")||B.c.q(s,"lemari")||B.c.q(s,"meja")||B.c.q(s,"tiang")
m=B.c.q(s,"wall")||B.c.q(s,"roof")||B.c.q(s,"tegel")
l=B.c.q(s,"emmision")||B.c.q(s,"netflix")||s==="tv"
k=A.zL(a5.toLowerCase()," ","-")
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
a1=q?B.X:B.a6
a2=q?0.02:0.5
a3=a4.bg(A.iR(j,a2,a1,a,b,q,a0,"quarantine-promoted-"+k,c,h,i,!l,d,e,f,g,1,1))
a6.k(0,a5,a3)
return a3},
lR(){var s,r,q,p,o,n,m,l,k,j,i=A.d([],t.rq)
for(s=this.p4,s=new A.N(s,A.v(s).i("N<1,2>")).gA(0),r=t.N,q=t.K;s.m();){p=s.d
o=A.n(r,q)
o.k(0,"placementId",p.a)
n=p.b
m=n.x
l=m==null
k=n.z.length
j=n.y.length
m=l?null:m.b.length
if(m==null)m=0
o.K(0,new A.t0(n.a.a.b,"LOD0",!l,k,j,m).D())
i.push(o)}s=$.o.j()
o=i.length!==0
n=o&&B.a.a8(i,new A.wR())
s.setAttribute("data-renderer-model-package-diagnostics",B.f.a3(A.E(["schema","pixeldart-model-package-diagnostic-v1","enabled",o,"attached",n,"bindingCount",i.length,"bindings",i],r,q),null))},
dO(a){var s=0,r=A.aN(t.H),q=this,p,o,n
var $async$dO=A.aO(function(b,c){if(b===1)return A.aK(c,r)
for(;;)switch(s){case 0:s=2
return A.a7(B.fF.cK(a,new A.wZ(),new A.x_()),$async$dO)
case 2:n=c
q.RG=n
p=$.i4
if(p!=null)q.fv(p)
$.o.j().setAttribute("data-renderer-model-packages","validated")
$.o.j().setAttribute("data-renderer-model-packages-runtime","loaded")
p=$.o.j()
o=n.a.ga9()
p.setAttribute("data-renderer-model-package-count",""+o.gu(o))
return A.aL(null,r)}})
return A.aM($async$dO,r)},
jI(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=c5.e,c4=c3.h(0,c6)
if(c4==null)return
s=c4.a
r=t.N
q=A.aR([s],r)
for(p=c5.aR(s),o=J.P(p.a),p=new A.R(o,p.b,p.$ti.i("R<1>"));p.m();){n=o.gp()
m=n.cL(s)
if(n.ax&&!n.ay&&!n.z&&m!=null&&c3.h(0,m)!=null)q.l(0,m)}c3=A.J(q,q.$ti.c)
B.a.a7(c3)
l=B.a.a0(c3,"|")
if(c2.cy===l)return
c2.cy=l
for(c3=c2.ax,c3=new A.N(c3,A.v(c3).i("N<1,2>")).gA(0),s=c2.ay,p=t.h1,o=c2.at;c3.m();){k=c3.d
n=k.a
j=q.q(0,n)?-1:0
i=k.b
h=s.h(0,n)
h.toString
g=A.d([],p)
for(f=J.aW(i),e=0;e<f.gu(i);++e){if(!(e<h.length))return A.e(h,e)
d=c2.cp(h[e],j)
c=c2.f
c===$&&A.u()
b=f.h(i,e)
a=d.c
a.B()
a0=c.a
a1=a0.$ti
a2=a1.c.a(d.a)
a0.a2(a2)
a0=a0.b
a2=a2.a
if(!(a2>=0&&a2<a0.length))return A.e(a0,a2)
a3=a0[a2].c
a0=(a3==null?a1.y[1].a(a3):a3).d
a=a.af()
a0=a0.gap()
a1=A.C(a0)
a4=A.b3(new A.G(a0,a1.i("A(1)").a(a.gau()),a1.i("G<1,A>")))
a1=c.b
a=a1.$ti
a.c.a(b)
a.y[1].a(d)
a1.a2(b)
a1=a1.b
a=b.a
if(!(a>=0&&a<a1.length))return A.e(a1,a)
a1[a].sb7(d)
c.c.k(0,b,new A.aT(b,d,a4))
B.a.l(g,d)}s.k(0,n,g)
if(g.length!==0)o.k(0,n,B.a.ga4(g))}for(c3=c2.id,s=c3.length,a5=0;a5<c3.length;c3.length===s||(0,A.r)(c3),++a5){a6=c3[a5]
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
f.a2(b)
f=f.b
b=b.a
if(!(b>=0&&b<f.length))return A.e(f,b)
a3=f[b].c
f=(a3==null?c.y[1].a(a3):a3).d
h=h.af()
f=f.gap()
c=A.C(f)
a4=A.b3(new A.G(f,c.i("A(1)").a(h.gau()),c.i("G<1,A>")))
c=p.b
h=c.$ti
h.c.a(o)
h.y[1].a(n)
c.a2(o)
c=c.b
h=o.a
if(!(h>=0&&h<c.length))return A.e(c,h)
c[h].sb7(n)
p.c.k(0,o,new A.aT(o,n,a4))}c3=c2.fx
s=A.v(c3).i("ag<1>")
s=A.J(new A.ag(c3,s),s.i("t.E"))
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
f.a2(b)
f=f.b
b=b.a
if(!(b>=0&&b<f.length))return A.e(f,b)
a3=f[b].c
f=(a3==null?c.y[1].a(a3):a3).d
h=h.af()
f=f.gap()
c=A.C(f)
a4=A.b3(new A.G(f,c.i("A(1)").a(h.gau()),c.i("G<1,A>")))
c=o.b
h=c.$ti
h.c.a(n)
h.y[1].a(d)
c.a2(n)
c=c.b
h=n.a
if(!(h>=0&&h<c.length))return A.e(c,h)
c[h].sb7(d)
o.c.k(0,n,new A.aT(n,d,a4))
c3.k(0,a7.a,a7.n9(d))}for(c3=c2.k1,s=c3.length,p=c2.ch,o=c2.CW,n=c2.p4,a5=0;a5<s;++a5){a8=c3[a5]
h=a8.a
a9=p.h(0,h)
b0=o.h(0,h)
b1=n.h(0,h)
b2=q.q(0,a8.b)
if(b1!=null){b1.jH(b2?-1:0)
continue}if(a9==null||b0==null)continue
h=c2.f
h===$&&A.u()
f=c2.cp(b0,b2?-1:0)
c=f.c
c.B()
b=h.a
a=b.$ti
a0=a.c.a(f.a)
b.a2(a0)
b=b.b
a0=a0.a
if(!(a0>=0&&a0<b.length))return A.e(b,a0)
a3=b[a0].c
b=(a3==null?a.y[1].a(a3):a3).d
c=c.af()
b=b.gap()
a=A.C(b)
a4=A.b3(new A.G(b,a.i("A(1)").a(c.gau()),a.i("G<1,A>")))
a=h.b
c=a.$ti
c.c.a(a9)
c.y[1].a(f)
a.a2(a9)
a=a.b
c=a9.a
if(!(c>=0&&c<a.length))return A.e(a,c)
a[c].sb7(f)
h.c.k(0,a9,new A.aT(a9,f,a4))}b3=new A.le().mZ(c6)
c3=$.o.j()
s=A.J(b3,A.v(b3).c)
B.a.a7(s)
c3.setAttribute("data-renderer-exterior-cells",B.a.a0(s,","))
c3=c2.dy
r=new A.le().iA(new A.x4(c2),new A.ag(c3,A.v(c3).i("ag<1>")),b3,r)
b4=A.fq(r,r.$ti.i("t.E"))
c3=c2.dx
s=A.v(c3).i("ag<1>")
s=A.J(new A.ag(c3,s),s.i("t.E"))
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
h.a2(c)
h=h.b
c=c.a
if(!(c>=0&&c<h.length))return A.e(h,c)
a3=h[c].c
h=(a3==null?f.y[1].a(a3):a3).d
n=n.af()
h=h.gap()
f=A.C(h)
a4=A.b3(new A.G(h,f.i("A(1)").a(n.gau()),f.i("G<1,A>")))
f=o.b
n=f.$ti
n.c.a(b9)
n.y[1].a(d)
f.a2(b9)
f=f.b
n=b9.a
if(!(n>=0&&n<f.length))return A.e(f,n)
f[n].sb7(d)
o.c.k(0,b9,new A.aT(b9,d,a4))
c3.k(0,b8,d)}$.o.j().setAttribute("data-renderer-exterior-items",""+b5+"/"+c3.a)
$.o.j().setAttribute("data-renderer-shadow-casters",""+b6+"/"+b7)
c3=A.v(b4)
s=c3.i("dK<1,f>")
c1=A.J(new A.dK(b4,c3.i("f(1)").a(new A.x5(c2)),s),s.i("t.E"))
B.a.a7(c1)
$.o.j().setAttribute("data-renderer-exterior-texture-bindings",B.a.a0(c1,","))},
dT(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="renderer is not initialized",b0="resource library is disposed"
if(!a8.aL)return
s=a8.ax.h(0,b2)
r=a8.ay
q=r.h(0,b2)
p=a8.z
o=p.h(0,b2)
n=b1.e.h(0,b2)
if(s==null||q==null||o==null||n==null)return
m=a8.hA(b1,n)
l=J.aW(s)
if(3!==l.gu(s)||3!==o.length)return
k=A.d([],t.d)
j=A.d([],t.h1)
for(i=a8.y,h="room:"+b2+":",g=b1.y,f=0;f<3;++f){e=m[f]
d=a8.e
d===$&&A.u()
d=d.w
if(d==null)d=A.h(A.i(a9))
c=a8.aP(e.b)
b=g.b
if(d.x)A.h(A.i(b0))
a=d.a
c.B()
a0=a.b.av(c,h+e.a+"-drift-"+b)
b=a0.a
a.c.k(0,b,a.aU(c))
d.f.l(0,a0)
if(!(f<q.length))return A.e(q,f)
a1=q[f]
d=a1.c
a2=new A.aQ(a0,a1.b,d,a1.d,a1.e,a1.f,a1.r,a1.w,a1.x,a1.y)
c=a8.f
c===$&&A.u()
a=l.h(s,f)
d.B()
a3=c.a
a4=a3.$ti
a3.a2(a4.c.a(a0))
a3=a3.b
if(!(b>=0&&b<a3.length))return A.e(a3,b)
a5=a3[b].c
b=(a5==null?a4.y[1].a(a5):a5).d
d=d.af()
b=b.gap()
a3=A.C(b)
a6=A.b3(new A.G(b,a3.i("A(1)").a(d.gau()),a3.i("G<1,A>")))
a3=c.b
d=a3.$ti
d.c.a(a)
d.y[1].a(a2)
a3.a2(a)
a3=a3.b
d=a.a
if(!(d>=0&&d<a3.length))return A.e(a3,d)
a3[d].sb7(a2)
c.c.k(0,a,new A.aT(a,a2,a6))
B.a.l(k,a0)
B.a.l(j,a2)
if(!(f<o.length))return A.e(o,f)
a7=o[f]
B.a.aa(i,a7)
B.a.l(i,a0)
a=a8.e.w
d=a==null?A.h(A.i(a9)):a
if(d.x)A.h(A.i(b0))
d.a.aN(a7)
d.f.aa(0,a7)}p.k(0,b2,k)
r.k(0,b2,j)
if(j.length!==0)a8.at.k(0,b2,B.a.ga4(j))
$.o.j().setAttribute("data-renderer-geometry-refreshes",""+(a8.ik+1));++a8.ik},
f7(a,b){var s,r,q,p,o,n,m,l,k=this
if(!k.aL)return
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
m=p.gaq().bp(k.h9(a,o,q),"door-leaf:"+b+":state")
p=r.e
l=new A.aQ(m,p.b,p.c,p.d,p.e,p.f,p.r,p.w,p.x,p.y)
p=k.f
p===$&&A.u()
p.pZ(r.c,l)
s.k(0,b,r.ia(l,m))
s=k.y
p=r.d
B.a.aa(s,p)
B.a.l(s,m)
k.e.gaq().pu(p)},
jw(n9,o0,o1,o2,o3,o4,o5,o6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,n0,n1,n2=this,n3=null,n4="rain_override",n5="wetness_override",n6=A.aR([o0],t.N),n7=n9.e,n8=n7.h(0,o0)
if(n8!=null)for(s=n8.a,r=n9.aR(s),q=J.P(r.a),r=new A.R(q,r.b,r.$ti.i("R<1>"));r.m();){p=q.gp()
o=p.cL(s)
if(p.ax&&!p.ay&&!p.z&&o!=null&&n7.h(0,o)!=null)n6.l(0,o)}n=new A.r1(n9).q4(n6,o1)
s=A.d([],t.su)
for(r=n.length,m=0;m<n.length;n.length===r||(0,A.r)(n),++m){l=n[m]
q=l.r
if(q>0)s.push(new A.eR(l.a,l.x,l.w,q))}for(r=n2.k1,q=r.length,m=0;m<q;++m){k=r[m]
p=k.Q
if(p>0&&k.at>0&&n6.q(0,k.b)){j=n7.h(0,k.b)
i=n2.im
h=k.f.a
j=j.d
s.push(new A.eR(new A.a(j.a+(h.a*i+0),j.b+(h.b*i+k.ax),j.c+(h.c*i+0)),k.at,k.as,p))}}n2.cC=A.ad(s,t.cZ)
s=o4.f
r=o4.e
g=new A.a(Math.cos(s)*r,0,Math.sin(s)*r)
q=A.d([],t.xn)
for(f=0;f<n.length;++f){p=n[f]
j=p.r
if(j>0)q.push(new A.lh("mantle-fire-"+f,p.a,j,g))}n2.eK=q
q=t.jC
e=A.d([],q)
d=A.d([],q)
for(q=o0==="living-room",f=0;f<n.length;++f){l=n[f]
p=l.f
c=p>0?1+Math.sin(n2.c2*12+f*1.7)*(p*0.08)+Math.sin(n2.c2*29.3+f*2.3)*(p*0.04):1
b=q&&f===0
p=l.e
a=b?Math.max(2.65,p*1.45)*c:p*c
a0=l.d
if(b)a0*=1.25
p=f===0
j=p?"spot":"point"
i=l.c
if(j!=="point"&&j!=="spot")A.h(A.a8(j,"type","must be point or spot"))
if(!isFinite(a)||a<0)A.h(A.a8(a,"intensity","must be finite and >= 0"))
if(!isFinite(a0)||a0<=0)A.h(A.a8(a0,"radius","must be finite and > 0"))
p=p?d:e
B.a.l(p,new A.be(f,j,l.a,new A.a((i>>>16&255)/255,(i>>>8&255)/255,(i&255)/255),a,a0))}q=n2.fy
q===$&&A.u()
a1=q.pq(o1,e,d)
q=A.n(t.S,t.A_)
for(f=0;f<n.length;++f)q.k(0,f,n[f])
p=A.d([],t.Fk)
for(j=a1.a,i=j.length,m=0;m<j.length;j.length===i||(0,A.r)(j),++m){a2=j[m]
h=a2.a
a3=q.h(0,h).a
a4=a2.d
p.push(new A.m4(h,new A.A(a3.a,a3.b,a3.c),new A.b1(a4.a,a4.b,a4.c),a2.e,a2.f))}j=A.d([],t.cv)
for(i=a1.c,h=i.length,m=0;m<i.length;i.length===h||(0,A.r)(i),++m){a2=i[m]
a3=a2.a
a4=q.h(0,a3)
a5=a4.a
a4=a4.b
a6=a2.d
j.push(new A.bT(a3,new A.A(a5.a,a5.b,a5.c),new A.A(a4.a,a4.b,a4.c),new A.b1(a6.a,a6.b,a6.c),a2.e,a2.f,1.05,1.4))}n2.kD(a1,++n2.go)
q=$.bX()
a7=q.J("time_override")
if(a7>=0)a8=B.b.n(a7,0,23.999)
else a8=o6
n2.iy=a8
a9=o4.c
i=o4.d
b0=B.b.P(B.b.P(a8,24)+24,24)
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
A.cu(B.pP,B.ed,c1)
c2=A.cu(B.pR,B.c0,c1)
c3=A.cu(B.pL,B.c2,c1)
c4=0.3+0.5*c1
c5=0.25+0.2*c1}else if(h&&b0<14){c2=B.c0
c3=B.c2
c4=0.85
c5=0.45}else if(b0>=14&&b0<b4){c1=(b0-14)/(b4-14)
A.cu(B.ed,B.ec,c1)
c2=A.cu(B.c0,B.eh,c1)
c3=A.cu(B.c2,B.ef,c1)
c4=0.85*(1-c1*0.35)
c5=0.45*(1-c1*0.25)}else if(b0>=b4&&b0<b4+1.5){c1=(b0-b4)/1.5
A.cu(B.ec,B.c3,c1)
c2=A.cu(B.eh,B.aY,c1)
c3=A.cu(B.ef,B.aZ,c1)
c4=0.55*(1-c1*0.8)
c5=0.34*(1-c1*0.65)}else{h=b4+1.5
if(b0>=h&&b0<b4+3){c1=(b0-h)/1.5
A.cu(B.c3,B.c3,c1)
c2=A.cu(B.aY,B.aY,c1)
c3=A.cu(B.aZ,B.aZ,c1)
c4=0.11*(1-c1*0.25)
c5=0.16*(1-c1*0.15)}else{c2=B.aY
c3=B.aZ
c4=0.15
c5=0.18}}if(b1>0){c6=A.cu(c3,B.q_,b1*0.7)
c4*=1-b1*0.35
c5*=1-b1*0.15}else c6=c3
c7=o5?1:0.15
c8=B.b.n(b1*0.75+B.b.n(0.3333333333333333,0,1)*0.25,0,1)
if(q.J(n4)>=0)a9=q.J(n4)
n2.xr=B.b.n(a9,0,1)
c9=q.J("cloud_coverage_override")
d0=B.b.n(c9>=0?c9:a9*0.92,0,1)
d1=q.bO("cloud_enable")&&d0>0.0001?B.b.n(q.J("cloud_density")*(0.55+d0*0.45),0,1):0
d2=r*0.28*B.b.n(q.J("cloud_speed"),0,2)
d3=B.d.aj(B.d.n(B.b.ao(q.J("cloud_samples")),4,24))
d4=q.J(n5)>=0?q.J(n5):c8
d5=B.b.n(q.J("weather_reflection_strength"),0,2)
n2.cG=B.b.n(d4*d5,0,1)
i=A.Hl(i)
h=a9*0.92
r=2+r*0.03
c0=B.b.n(0.68+a9*0.22,0,1)
new A.vi(a8,13,0.8988445647770796,i,h,a9,r,c0,1,0.0015,0.06).B()
d6=A.Cv(b0,13)*3.141592653589793/12
d7=Math.sin(0.8988445647770796)
d8=Math.cos(0.8988445647770796)
d9=d7*Math.sin(i)
e0=d8*Math.cos(i)
e1=d9+e0*Math.cos(d6)
e2=Math.asin(B.b.n(e1,-1,1))
e3=Math.cos(e2)
e4=Math.atan2(Math.sin(d6),Math.cos(d6)*d7-Math.tan(i)*d8)
e5=new A.A(Math.sin(e4)*e3,Math.sin(e2),Math.cos(e4)*e3).ga5()
if(Math.abs(e0)<1e-12)e6=e1>0?-2:2
else e6=(Math.sin(-0.014538592669112763)-d9)/e0
e7=e6>-1&&e6<1
e8=e7?Math.acos(e6)*12/3.141592653589793:0
e9=B.b.P(B.b.P(13-e8,24)+24,24)
f0=B.b.P(B.b.P(13+e8,24)+24,24)
i=!e7
f1=i&&e1>0
f2=A.Hk(e2,b0,f1,i&&!f1,13)
f3=r+h*3.5+a9*1.5
f4=A.Hi(Math.max(0,1.5707963267948966-e2))
r=B.b.n(Math.exp(-(0.0046416*f4*f3)),0,1)
d9=B.b.n(Math.exp(-(0.010846399999999999*f4*f3)),0,1)
e0=B.b.n(Math.exp(-(0.02648*f4*f3)),0,1)
f5=B.b.n(Math.exp(-(h*(2.2+a9*2))),0,1)
f6=A.Cw(-0.3141592653589793,0.10471975511965977,e2)
f7=A.Cw(-0.014538592669112763,0.03490658503988659,e2)
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
g6=new A.b1(r,d9,e0)
if(!isFinite(b0)||!isFinite(e9)||!isFinite(f0)||!isFinite(e2)||!isFinite(f6)||!isFinite(f7)||!isFinite(e4)||!isFinite(g0)||!isFinite(g4)||!isFinite(g5)||!isFinite(0.06)||!e5.gV(0)||!new A.A(r,d9,e0).gV(0)||!g6.gV(0)||!new A.b1(0.14+0.38*g1,0.16+g2,0.22+0.52*g1).gV(0)||!new A.b1(c0,g3,h).gV(0))A.h(A.i("solar lighting state is not finite"))
if(e5.gbl()<0.999||e5.gbl()>1.001||g0<0||g4<0||g5<0||f5<0||f5>1||f6<0||f6>1||f7<0||f7>1)A.h(A.i("solar lighting state is out of bounds"))
new A.l7(e5,g6,g0).B()
i=$.o.j()
i.setAttribute("data-renderer-solar-phase",f2.b)
i.setAttribute("data-renderer-solar-sunrise-hours",B.b.G(e9,4))
i.setAttribute("data-renderer-solar-sunset-hours",B.b.G(f0,4))
i.setAttribute("data-renderer-solar-elevation-deg",B.b.G(e2*180/3.141592653589793,4))
i.setAttribute("data-renderer-solar-twilight-factor",B.b.G(f6,4))
i.setAttribute("data-renderer-solar-horizon-visibility",B.b.G(f7,4))
i.setAttribute("data-renderer-solar-horizon-blend",B.b.G(A.Cx(f7),4))
i.setAttribute("data-renderer-solar-transmittance",B.b.G(f5,4))
i=$.Bo()
i.pY(0.0166,a9)
g7=i.z
g8=B.b.n(Math.sin(Math.max(0,e2))/Math.sin(1.1344640137963142),0,1)
g9=A.Cx(f7)
i=1-g9
h0=new A.A(e5.a*g9+-(a3*a4)*i,e5.b*g9+a5*i,e5.c*g9+-(a6*b9)*i).ga5()
a3=g7.a
h1=a3&&g7.giJ()?new A.A(g7.f,g7.r,g7.w):h0
r=0.35+(r-0.35)*g9
d9=0.45+(d9-0.45)*g9
e0=0.65+(e0-0.65)*g9
h2=new A.b1(r,d9,e0)
if(a3){a4=g7.b
h3=new A.b1(r+g7.c*a4*2,d9+g7.d*a4*2,e0+g7.e*a4*2.5)}else h3=h2
h4=B.b.n(g7.gnR(),0.12,2)
h5=B.b.n(q.J("weather_lightning_intensity"),0,2)
c4=(g0*g9+c4*i)*c7
if(a3)c4=c4*0.12+g7.b*4.5*h4*h5
r=$.o.j()
r.setAttribute("data-renderer-lightning-active",String(a3))
i=g7.x
r.setAttribute("data-renderer-lightning-source-distance-m",B.b.G(i,1))
r.setAttribute("data-renderer-lightning-distance-attenuation",B.b.G(h4,4))
a4=g7.f
a5=g7.r
a6=g7.w
r.setAttribute("data-renderer-lightning-source-direction",B.b.G(a4,3)+","+B.b.G(a5,3)+","+B.b.G(a6,3))
h6=q.bO("fog_enable")
h7=q.J("fog_density")
h8=q.J("fog_height_falloff")
h9=B.b.n(q.J("fog_distance_scale"),0.25,2)
i0=B.b.n(q.J("weather_fog_scattering"),0,2)
g5=h6?g5*B.b.n(h7/0.012,0,8)*i0:0
i1=h6?0.06*B.b.n(h8/0.6,0,8):0
i2=q.bO("volumetric_light_enable")?B.b.n(q.J("volumetric_shaft_intensity")/0.1,0,8):0
i3=B.d.n(B.b.ao(q.J("volumetric_precision")),4,24)
i4=B.b.n(q.J("volumetric_dust_density"),0,0.25)
i5=B.b.n(q.J("volumetric_scattering")+a9*0.1,-0.85,0.85)
i6=B.b.n(q.J("light_ambient_mult"),0,3)
i7=B.b.n(q.J("light_direct_mult"),0,3)
i8=B.b.n(q.J("normal_bump_strength"),0,2)
i9=B.b.n(q.J("pbr_roughness"),0,2)
j0=B.b.n(q.J("pbr_metallic"),0,2)
j1=B.b.n(q.J("pbr_specular"),0,3)
j2=B.b.n(q.J("shadow_bias"),0.0001,0.01)
j3=B.b.n((1+B.b.n(1-f5,0,1)*1.4+a9*0.25)/B.b.n(q.J("shadow_csm_hardness"),0.1,3),0,3)
n2.eR=g5
n2.iz=i1
r=A.d([],t.xL)
for(q=p.length,m=0;m<p.length;p.length===q||(0,A.r)(p),++m){l=p[m]
b9=l.c
d9=l.e
r.push(new A.co("point:"+l.a,l.b,new A.A(b9.a,b9.b,b9.c),l.d,Math.max(0.25,d9),Math.max(4,d9*8)))}for(q=j.length,m=0;m<j.length;j.length===q||(0,A.r)(j),++m){l=j[m]
b9=l.d
d9=l.f
r.push(new A.co("spot:"+l.a,l.b,new A.A(b9.a,b9.b,b9.c),l.e,Math.max(0.25,d9*0.25),Math.max(8,d9)))}for(q=A.eW(n6,n6.r,n6.$ti.c),b9=i2>0,d9=c4*f5,e0=h3.a,g2=h3.b,g6=h3.c,j4=q.$ti.c,j5=h1.a*0.8,j6=h1.b*0.8,j7=h1.c*0.8;q.m();){j8=q.d
j9=n7.h(0,j8==null?j4.a(j8):j8)
if(j9==null)continue
k0=n9.a1(j9)
for(j8=j9.e,k1=j8.length,k2=j9.d,k3=k2.a,k4=k2.b,k2=k2.c,k5=k0.a,k6=k0.c,m=0;m<j8.length;j8.length===k1||(0,A.r)(j8),++m){k7=j8[m]
if(!k7.w)continue
switch(k7.b.a){case 0:k8=new A.a(k7.c+k7.e*0.5,k7.d+k7.f*0.5,0)
break
case 2:k8=new A.a(k7.c+k7.e*0.5,k7.d+k7.f*0.5,k6)
break
case 1:k8=new A.a(k5,k7.d+k7.f*0.5,k7.c+k7.e*0.5)
break
case 3:k8=new A.a(0,k7.d+k7.f*0.5,k7.c+k7.e*0.5)
break
default:k8=n3}k9=k8.a
l0=k8.b
k8=k8.c
l1=b9?i2:1
l2=k7.r?0.4:1
l3=d9*l1*l2
if(l3>0.01)B.a.l(r,new A.co("window-shaft:"+k7.a,new A.A(k3+k9-j5,k4+l0-j6,k2+k8-j7),new A.A(e0,g2,g6),l3*18,1.5,8))}}l4=n2.to
if(a3&&g7.giJ()&&l4!=null){l5=new A.A(a4,a5,a6).ga5()
B.a.l(r,new A.co("lightning:active",l4.d.T(0,l5.a6(0,i)),new A.A(g7.c,g7.d,g7.e),g7.b*12e4*h5,1000,Math.max(1100,i*1.25)))}l6=h6?g5+i4:0
if(l4==null)n7=n3
else{n7=l4.d
n7=A.HB(l4.e,Math.min(l4.r,64),n7,l6,r)}n2.il=n7
q=n7==null
l7=q?n3:n7.a
if(l7==null)l7=B.w
$.o.j().setAttribute("data-renderer-volumetric-medium-scattering",B.b.G(l6,6))
i=A.d([],t.E7)
f=0
for(;;){if(!(f<n2.cC.length&&f<4))break
i.push(new A.x2(n2,f,o4).$0());++f}if(!q){q=$.o.j()
q.setAttribute("data-renderer-volumetric-source-count",""+n7.c)
a3=n7.a
q.setAttribute("data-renderer-volumetric-source-radiance",B.b.G(a3.a,6)+","+B.b.G(a3.b,6)+","+B.b.G(a3.c,6))
n7=n7.b
q.setAttribute("data-renderer-volumetric-source-direction",B.b.G(n7.a,4)+","+B.b.G(n7.b,4)+","+B.b.G(n7.c,4))}l8=A.GI(o0,c2)
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
k3=n2.c2
k4=$.bX()
k5=k4.J("cloud_detail")
k4=k4.J("cloud_silver_lining")
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
if(!new A.b1(a6,b9,d9).gV(0))A.h(A.p("skyColor must be finite",n3))
if(!h3.gV(0))A.h(A.p("keyLightColor must be finite",n3))
if(!new A.b1(k8,l1,m4).gV(0))A.h(A.p("sourceRadiance must be finite",n3))
if(!isFinite(c4)||c4<0)A.h(A.p("keyLightIntensity must be finite and >= 0",n3))
if(k8<0||l1<0||m4<0)A.h(A.p("sourceRadiance channels must be >= 0",n3))
n0=B.b.n(c4*0.12,0,0.35)
n1=1-n0
n2.x1=new A.lj(B.ko,new A.b1(k6*0.08+c0*0.035+k9*0.015,l0*0.08+g3*0.035+l2*0.015,m3*0.08+h*0.035+m5*0.015),1.5*h9/(1+a9*0.45),14*h9/(1+a9*0.16),i1,g5,new A.b1(m6,m7,m8),i1,i4,i5,m9,i2,i3,j3,i6,i7,i8,i9,j0,j1,j2,new A.b1(B.b.n(a6*n1+e0*n0+k8*0.02,0,1),B.b.n(b9*n1+g2*n0+l1*0.02,0,1),B.b.n(d9*n1+g6*n0+m4*0.02,0,1)),B.b.n(d5*0.42,0,1),0,new A.b1(n7,q,a3),a4,new A.l7(h1,h3,c4),p,j,r,i,new A.ve("main-atmosphere-v1",a5,new A.b1(a6,b9,d9),new A.b1(j4,j5,j6),new A.b1(j7,j8,k1),d0,d1,650,420,0.0012,k2*d2,s*d2,k3,k5,k4,d3))
k4=$.o.j()
k4.setAttribute("data-renderer-reflection-intensity",B.b.G(n2.x1.dy,4))
k4.setAttribute("data-renderer-reflection-confidence",B.d.G(n2.x1.fr,4))
k5=n2.x1.k4
n7=k5==null?n3:k5.a
if(n7==null)n7="none"
k4.setAttribute("data-renderer-skybox-asset",n7)
n7=n2.x1.k4
n7=n7==null?n3:n7.z
k4.setAttribute("data-renderer-sky-cloud-coverage",B.b.G(n7==null?0:n7,4))
n7=n2.x1.k4
n7=n7==null?n3:n7.Q
k4.setAttribute("data-renderer-sky-cloud-density",B.b.G(n7==null?0:n7,4))
n7=n2.x1.k4
n7=n7==null?n3:n7.db
k4.setAttribute("data-renderer-sky-cloud-samples",""+(n7==null?0:n7))
n7=n2.x1.k4
n7=n7==null?n3:n7.CW
k4.setAttribute("data-renderer-sky-cloud-phase",B.b.G(n7==null?0:n7,3))
k4.setAttribute("data-renderer-reflection-mode","environment-fallback")},
lX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="wetness_override",a7="fog_height_falloff",a8="fog_distance_scale",a9="post_affine_warp",b0="post_vertex_snap",b1="weather_particles_enable",b2="weather_particle_density",b3="weather_particle_size",b4="weather_snow_accumulation",b5="weather_fog_scattering",b6="weather_lightning_intensity",b7="weather_reflection_strength",b8="cloud_coverage_override",b9="cloud_silver_lining",c0="light_ambient_mult",c1="light_direct_mult",c2=null,c3="shadow_csm_hardness",c4=t.N,c5=A.aR(["time_override","rain_override",a6,"fog_enable","fog_density",a7,a8,"post_exposure","post_vignette","post_film_grain",a9,b0,b1,b2,b3,b4,b5,b6,b7,"cloud_enable",b8,"cloud_density","cloud_detail","cloud_speed",b9,"cloud_samples",c0,c1],c4),c6=A.n(c4,c4),c7=$.bX().w
c7===$&&A.u()
s=0
for(;s<60;++s)c6.k(0,c7[s].a,"No resolved Pixeldart frame mapping is installed")
c7=new A.wW(a5,c5,c6)
c7.$2("ssao",B.li)
c7.$2("shadows",B.m6)
c7.$2("shadows",B.lZ)
c7.$2("volumetric",B.kv)
c7.$2("bloom",B.m0)
c7.$2("dof",B.m2)
c7.$2("grade",B.m1)
c7.$2("ps1",B.mk)
c7.$2("vhs",B.m3)
c7=$.bX()
r=a5.iy
q=a5.xr
p=a5.cG
o=a5.eR
n=a5.iz
m=c7.J(a8)
l=a5.x2
k=c7.J(c3)
j=a5.x1
i=a5.x2
h=c7.J(b2)
g=c7.J(b3)
f=c7.J(b4)
e=c7.J(b5)
d=c7.J(b6)
c=c7.J(b7)
b=c7.J(b8)
a=a5.x1.k4
a0=a==null
a1=a0?c2:a.Q
if(a1==null)a1=0
a=a0?c2:a.cx
if(a==null)a=0
a0=c7.J("cloud_speed")
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
a=c7.bO(b1)
a1=a5.x1.k4
r=a1==null?c2:a1.Q
c7.pH("No resolved debug attachments are exposed by the active Pixeldart profile",A.E(["fog_enable",a2>0,"shadow_ssdo_enable",a4.c>0,"volumetric_light_enable",a0.Q>0,b1,a,"cloud_enable",r!==0],c4,t.y),a3,c5,c6)
c6=$.F8()
c6.mA(c7)
$.o.j().setAttribute("data-renderer-shader-overrides",B.f.a3(c6.a,c2))
$.o.j().setAttribute("data-renderer-shader-lab",B.f.a3(c7.nL(),c2))
$.o.j().setAttribute("data-renderer-shader-lab-document",B.f.a3(c7.fg(),c2))
$.o.j().setAttribute("data-renderer-shader-lab-baseline",B.f.a3(A.Ct().fg(),c2))},
jE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this
t.xw.a(a)
s=J.zY(a.slice(0),A.C(a).c)
r=A.d([],t.A5)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p){o=s[p]
n=o.d
if(n>0){m=o.b
l=o.c
k=o.a
j=B.c.bk(k,":downpipe")?3.2:2.2
r.push(new A.li(new A.A(m.a,m.b,m.c),new A.A(l.a,l.b,l.c),j,o.e,B.d.n(B.b.ao(2+n*20),2,6),B.c.gW(k)&2147483647))}}i.du=r
i.eM=B.b.n(b,0,1/0)
i.eN=B.b.n(c,0,1/0)
i.eO=B.b.n(d,0,1/0)
i.c1=B.b.n(B.a.bb(s,0,new A.x3(),t.i)*1.8,0,1)},
jJ(a){var s,r,q,p=this
if(a==null){p.dG=p.dF=0
p.cG=p.c1
$.o.j().removeAttribute("data-renderer-weather-surface")
return}s=B.b.n($.bX().J("weather_snow_accumulation"),0,2)
p.dF=B.b.n(a.a/0.08*s,0,1)
p.dG=B.b.n(a.x,0,1)
r=a.b
p.cG=Math.max(B.b.n(r/0.0008,0,1),p.c1)
q=$.o.j()
q.setAttribute("data-renderer-weather-surface",B.f.a3(a.D(),null))
q.setAttribute("data-renderer-weather-snow-coverage",B.b.G(p.dF,4))
q.setAttribute("data-renderer-weather-material-dissolution",B.b.G(p.dG,4))
q.setAttribute("data-renderer-weather-water-film-m",B.b.G(r,8))
q.setAttribute("data-renderer-weather-rain-flow-wetness",B.b.G(p.c1,4))},
lh(){var s,r,q,p,o,n,m,l=this
if(l.eP!=null||l.eQ!=null)return
s=new Float32Array(A.S(A.d([-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,1,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,0,0,0,0,1,0.55,0.68,0.82,0.72,0,0,0,0,0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,1,1,0,0,-0.012,-0.52,0,0,0,1,0.55,0.68,0.82,0.12,0,1,0,0],t.n)))
r=l.e
r===$&&A.u()
l.eP=r.gaq().bp(l.aP(s),"weather:rain-particle")
l.eQ=l.bg(B.mJ)
q=new A.e3(new Float32Array(5376))
q.cO(new A.a(-0.035,0,0),new A.a(0.035,0,0),new A.a(0.035,-0.07,0),new A.a(-0.035,-0.07,0),14478335,0.78,!0)
l.io=l.e.gaq().bp(l.aP(B.n.ag(q.a,0,q.b)),"weather:snow-particle")
l.ip=l.bg(B.mM)
p=new A.e3(new Float32Array(5376))
p.cO(new A.a(-0.025,0,0),new A.a(0.025,0,0),new A.a(0.025,-0.12,0),new A.a(-0.025,-0.12,0),11519958,0.9,!0)
l.iq=l.e.gaq().bp(l.aP(B.n.ag(p.a,0,p.b)),"weather:hail-particle")
l.ir=l.bg(B.mO)
o=new A.e3(new Float32Array(5376))
o.cO(new A.a(-0.06,0,0),new A.a(0.06,0,0),new A.a(0.045,0.22,0),new A.a(-0.045,0.22,0),16758062,0.86,!0)
l.is=l.e.gaq().bp(l.aP(B.n.ag(o.a,0,o.b)),"fire:flame-particle")
l.it=l.bg(B.mL)
n=new A.e3(new Float32Array(5376))
n.j1(new A.a(-0.11,0,0),new A.a(0.11,0,0),new A.a(0.15,0.2,0),new A.a(-0.15,0.2,0),15198175,0.22)
l.iu=l.e.gaq().bp(l.aP(B.n.ag(n.a,0,n.b)),"fire:white-vapour-particle")
l.iv=l.bg(B.mK)
m=new A.e3(new Float32Array(5376))
m.j1(new A.a(-0.14,0,0),new A.a(0.14,0,0),new A.a(0.18,0.24,0),new A.a(-0.18,0.24,0),1513757,0.34)
l.iw=l.e.gaq().bp(l.aP(B.n.ag(m.a,0,m.b)),"fire:black-soot-particle")
l.ix=l.bg(B.mN)},
ma(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
a4.dz=a4.dw=0
a4.dA=a4.ght()
a4.dD=a4.dC=a4.dB=0
a4.dE=!1
a4.cF=a4.cE=a4.cD=a4.dv=0
a4.m9(a6,a7)
a4.dt=a4.ds=a4.eL=0
s=a4.y2
r=s==null
q=r?a5:s.a
if(q==null)q=B.x
p=$.bX()
if(!p.bO("weather_particles_enable"))return
o=B.b.n(p.J("weather_particle_density"),0,2)
n=B.b.n(p.J("weather_particle_size"),0.25,2)
m=r?a5:A.CN(s.a)
if(m==null)m=A.CN(B.x)
A:{p=B.af===q
if(p){l=a4.io
break A}if(B.a0===q||B.ae===q){l=a4.iq
break A}l=a4.eP
break A}B:{if(p){k=a4.ip
break B}if(B.a0===q||B.ae===q){k=a4.ir
break B}k=a4.eQ
break B}if(l==null||k==null||q===B.x||a4.xr<=0.01)return
C:{if(p){p=38
break C}if(B.a0===q){p=26
break C}if(B.ae===q){p=30
break C}p=32
break C}j=B.d.n(B.b.ao(8+a4.xr*p*o*a4.y1),0,40)
p=a4.ght()
i=new A.oy(j,p)
i.B()
h=B.d.n(j,0,p)
a4.dw=j
a4.dA=p
a4.dE=B.d.n(j,0,p)!==j
p=Math.sin(a4.c2*0.7)
g=r?a5:s.b.a
if(g==null)g=0
f=g+p*0.18
r=r?a5:s.b.c
e=(r==null?0:r)+0.12
r=m.f
d=A.Fp(B.rG,m.r,B.eW,m.d,B.rK,new A.A(f,m.b,e),2003132788+q.a,m.e,k,l,B.rD,h,r*n,a4.c3,new A.A(f,-m.c,e))
c=d.iE(a7)
a4.dB=c.b
a4.dC=c.c
a4.dD=d.nM(a7,i).r
b=new A.lk(a7.a,a7.b,a7.c,a7.d,a7.e,a7.f,a7.r,Math.max(0,a7.w-0.016666666666666666))
for(r=0.02*r*n,p=m.w,a=0;a<h;++a){a0=d.ce(a7,a)
g=d.ce(b,a).c
a1=a0.c
a2=a0.d
a3=A.HD(new A.a(a1.a,a1.b,a1.c),q,a4.dr,p,r,new A.a(g.a,g.b,g.c),new A.a(a2.a,a2.b,a2.c))
if(!a3.a)continue;++a4.eL
a4.ds=a4.ds+a3.r
a4.dt=a4.dt+a3.f}if(a4.y1>0.01)a4.dz=d.fI(a6,a7,new A.wX(a4,m,n))
r=a4.du
if(r.length!==0)a4.dv=new A.q7(l,k,r,1.4,0.42*n).cj(a6,a7)},
m9(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.is,a5=a3.it,a6=a3.iu,a7=a3.iv,a8=a3.iw,a9=a3.ix
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
a=new A.A(m.a,m.b+0.03,m.c)
a0=B.d.n(B.b.ao(2+i*5),2,7)
m=a3.c3
a3.cD=a3.cD+new A.h6(a4,a5,B.b8,a,B.rL,new A.A(n*0.03,b,p*0.03),B.rJ,new A.A(n*0.08,1.65,p*0.08),2.8,0.52,a0,(m^q*7919)>>>0,0.72+i*0.45,!1,1718381925).cj(b0,b1)
a1=B.d.n(B.b.ao(1+h*5),1,6)
m=a3.c3
a3.cE=a3.cE+new A.h6(a6,a7,B.b8,a,B.rF,new A.A(n*0.12,0.24,p*0.12),B.rE,new A.A(n*0.34,0.92,p*0.34),0.72,e,a1,(m^q*1543^119)>>>0,0.62+h*0.6,!1,2004251762).cj(b0,b1)
a2=B.d.n(B.b.ao(1+g*6),1,5)
m=a3.c3
a3.cF=a3.cF+new A.h6(a8,a9,B.b8,a,B.rM,new A.A(n*0.18,0.18,p*0.18),B.rH,new A.A(n*0.5,0.68,p*0.5),0.52,d,a2,(m^q*3571^4919)>>>0,0.8+g*0.7,!1,1651272563).cj(b0,b1)}},
lg(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.dr,r=s.length,q=a.a,p=a.b,o=a.c,n=0;n<r;++n){m=s[n]
l=m.b
if(q>=l.a-b){k=m.c
l=q<=k.a+b&&p>=l.b-b&&p<=k.b+b&&o>=l.c-b&&o<=k.c+b}else l=!1
if(l)return!0}return!1},
gjg(){var s=this.y2
s=s==null?null:s.a
return(s==null?B.x:s).b},
gdY(){var s=this.dq
s=s==null?null:s.b
return s==null?0:s},
gjf(){var s=this.dq
s=s==null?null:s.d
return s==null?0:s},
ght(){var s,r=this.w
r===$&&A.u()
s=r.a
A:{if(B.M===s){r=40
break A}if(B.U===s){r=24
break A}r=8
break A}return r},
hA(a,b){var s=$.ks(),r=s.mS(a,b),q=s.mP(a,b)
s=A.J(r.c,t.i)
B.a.K(s,q)
return A.d([new A.hV("wall",new Float32Array(A.S(s))),new A.hV("floor",r.a),new A.hV("ceiling",r.b)],t.pv)},
aP(a){var s,r,q,p,o,n=A.d([],t.k)
for(s=a.length,r=0;r<s;r+=14){q=a[r]
p=r+1
if(!(p<s))return A.e(a,p)
p=a[p]
o=r+2
if(!(o<s))return A.e(a,o)
B.a.l(n,new A.A(q,p,a[o]))}if(n.length===0)throw A.b(A.i("house surface mesh cannot be empty"))
return new A.c3(B.an,a,null,A.b3(n))},
li(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.hA(a3,a4),a1=a4.a,a2=a.ok.h(0,a1)
if(a2==null)throw A.b(A.i("surface materials missing for room "+a1))
s=A.d([],t.d)
r=A.d([],t.s3)
q=A.d([],t.h1)
for(p=a.y,o=a.Q,n="room:"+a1+":",m=0;m<3;++m){l=a0[m]
k=a.e
k===$&&A.u()
k=k.w
if(k==null)k=A.h(A.i("renderer is not initialized"))
j=a.aP(l.b)
i=l.a
if(k.x)A.h(A.i("resource library is disposed"))
h=k.a
j.B()
g=h.b.av(j,n+i)
f=g.a
h.c.k(0,f,h.aU(j))
k.f.l(0,g)
i=a2.h(0,i)
i.toString
e=new A.aQ(g,i,B.q,-1,B.C,B.z,!0,!0,0,null)
i=a.f
i===$&&A.u()
B.q.B()
k=i.a
j=k.$ti
k.a2(j.c.a(g))
k=k.b
if(!(f>=0&&f<k.length))return A.e(k,f)
d=k[f].c
k=(d==null?j.y[1].a(d):d).d
j=B.q.af()
k=k.gap()
h=A.C(k)
c=A.b3(new A.G(k,h.i("A(1)").a(j.gau()),h.i("G<1,A>")))
b=i.b.b9(e)
i.c.k(0,b,new A.aT(b,e,c))
B.a.l(p,g)
B.a.l(o,b)
B.a.l(s,g)
B.a.l(r,b)
B.a.l(q,e)}a.z.k(0,a1,s)
a.ax.k(0,a1,r)
a.ay.k(0,a1,q)
if(r.length!==0)a.as.k(0,a1,B.a.ga4(r))
if(q.length!==0)a.at.k(0,a1,B.a.ga4(q))},
lQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.s,e=A.d([],f),d=A.d([],f)
for(f=a.b,s=f.length,r=t.N,q=this.ok,p=0;p<f.length;f.length===s||(0,A.r)(f),++p){o=f[p]
n=o.a
m=q.h(0,n)
if(m==null)continue
for(l=A.E(["wall",o.x,"floor",o.y,"ceiling",o.z],r,r),l=new A.cW(l,l.r,l.e,A.v(l).i("cW<1,2>")),k=n+":",n+=".";l.m();){j=l.d
i=j.b
h=B.bM.h(0,i)
if(h==null)A.h(A.i("Unknown house surface material: "+i))
i=j.a
B.a.l(e,k+i+"="+h.a+":"+h.b)
g=m.h(0,i)
if(g!=null)B.a.l(d,n+i+"="+g.a+"."+g.b)}}B.a.a7(d)
f=$.o.j()
B.a.a7(e)
f.setAttribute("data-renderer-house-materials",B.a.a0(e,","))
$.o.j().setAttribute("data-renderer-house-surface-bindings",B.a.a0(d,","))},
lp(a){var s=this.k4.h(0,a)
if(s==null){s=this.ry
s.toString}return s},
ll(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a1.f.c,g=a0.r,f=g.a,e=h.a,d=f.a*e*a2,c=h.b,b=f.b*c*a2,a=h.c
f=f.c*a*a2
g=g.b
e=g.a*e*a2
c=g.b*c*a2
a=g.c*a*a2
s=new A.e3(new Float32Array(5376))
g=this.lk(a0.b)
r=new A.a(d,b,f)
q=new A.a(e,b,f)
p=new A.a(e,c,f)
o=new A.a(d,c,f)
n=new A.a(d,b,a)
m=new A.a(e,b,a)
l=new A.a(e,c,a)
k=new A.a(d,c,a)
s.bM(q,r,o,p,g)
s.bM(n,m,l,k,g)
s.bM(r,n,k,o,g)
s.bM(m,q,p,l,g)
s.bM(r,q,m,n,g)
s.bM(o,k,l,p,g)
j=B.n.ag(s.a,0,s.b)
g=A.d([],t.k)
for(f=j.length,i=0;i<f;i+=14){e=j[i]
d=i+1
if(!(d<f))return A.e(j,d)
d=j[d]
c=i+2
if(!(c<f))return A.e(j,c)
g.push(new A.A(e,d,j[c]))}return new A.c3(B.an,j,null,A.b3(g))},
lk(a){var s
A:{if("architecture"===a){s=8679773
break A}if("fixture"===a){s=10262411
break A}if("service"===a){s=6249301
break A}if("story"===a){s=10918531
break A}if("micro"===a){s=7168599
break A}s=7693915
break A}return s},
bR(a){var s
A:{if(0===a){s=B.pM
break A}if(1===a){s=B.pO
break A}if(2===a){s=B.pU
break A}if(3===a){s=B.q2
break A}if(4===a){s=B.q3
break A}if(5===a){s=B.pS
break A}if(6===a){s=B.q1
break A}if(7===a){s=B.pY
break A}s=B.q0
break A}return s},
el(a){var s
A:{if("architecture"===a){s=B.pN
break A}if("furniture"===a){s=B.ee
break A}if("fixture"===a){s=B.pW
break A}if("service"===a){s=B.pZ
break A}if("story"===a){s=B.pV
break A}if("decor"===a){s=B.pQ
break A}if("micro"===a){s=B.pT
break A}s=B.ee
break A}return s},
dP(a){return this.oF(t.G.a(a))},
oF(a){var s=0,r=A.aN(t.H),q,p=this,o,n,m,l
var $async$dP=A.aO(function(b,c){if(b===1)return A.aK(c,r)
for(;;)switch(s){case 0:if(!p.aL){s=1
break}o=A.d([],t.iJ)
for(n=0;n<8;++n){m=B.kt[n]
l=a.h(0,m)
if(l!=null)o.push(p.d8(m,l))}s=3
return A.a7(A.qe(o,t.H),$async$dP)
case 3:case 1:return A.aL(q,r)}})
return A.aM($async$dP,r)},
d8(a,b){return this.lo(a,b)},
lo(a2,a3){var s=0,r=A.aN(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$d8=A.aO(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a0=n.k2.h(0,a2)
if(a0==null){s=1
break}p=4
c=v.G
b=A.c(A.c(c.document).createElement("img"))
b.src=a3
m=b
s=7
return A.a7(A.ax(A.c(m.decode()),t.X),$async$d8)
case 7:l=null
k=null
j=null
i=a2
A:{if("grime"===i){j=B.pK
break A}if("porcelain-albedo"===i||"porcelain-normal"===i){j=B.pJ
break A}if("skybox-main-atmosphere-v1"===i){j=B.pI
break A}j=B.pH
break A}h=j
l=h.a
k=h.b
b=A.c(A.c(c.document).createElement("canvas"))
b.width=l
b.height=k
g=b
f=A.H(g.getContext("2d"))
if(!t.m.b(f)){j=A.i("2D canvas context unavailable for "+a2)
throw A.b(j)}A.b2(f,"drawImage",[m,0,0,l,k],t.H)
e=t.mV.a(A.c(f.getImageData(0,0,l,k)).data)
j=n.e
j===$&&A.u()
j=j.gaq()
c=new Uint8Array(A.S(e))
if(j.x)A.h(A.i("resource library is disposed"))
j.c.q_(a0,c)
j=n.e.gaq()
if(j.x)A.h(A.i("resource library is disposed"))
j.c.oc(a0)
$.o.j().setAttribute("data-renderer-texture-"+a2,"loaded")
n.ep()
n.da()
p=2
s=6
break
case 4:p=3
a1=o.pop()
d=A.am(a1)
j=$.o.j()
j.setAttribute("data-renderer-texture-"+a2,"fallback")
n.ep()
n.da()
A.c(v.G.console).warn("Pixeldart texture "+a2+" unavailable: "+A.z(d))
s=6
break
case 3:s=2
break
case 6:case 1:return A.aL(q,r)
case 2:return A.aK(o.at(-1),r)}})
return A.aM($async$d8,r)},
ep(){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.aL||i.k2.a===0)return
s=i.k2
r=A.v(s).i("N<1,2>")
r=A.lN(new A.N(s,r),r.i("c9(t.E)").a(new A.wS()),r.i("t.E"),t.jP)
q=A.J(r,A.v(r).i("t.E"))
s=i.e
s===$&&A.u()
p=s.gaq().ghJ().dS(q)
s=p.a
o=A.d(s.slice(0),A.C(s))
B.a.Z(o,new A.wT())
s=A.C(o)
r=s.i("f(1)")
s=s.i("G<1,f>")
n=new A.G(o,r.a(new A.wU()),s).a0(0,",")
m=new A.G(o,r.a(new A.wV()),s).a0(0,",")
s=p.dg(B.ey)
r=p.dg(B.ez)
l=p.dg(B.eA)
k=p.dg(B.eB);++i.ii
j=$.o.j()
j.setAttribute("data-renderer-texture-residency",n)
j.setAttribute("data-renderer-texture-residency-counts","resident="+s+";pending="+r+";missing="+l+";evicted="+k+";unique="+p.b)
j.setAttribute("data-renderer-texture-residency-handles",m)
j.setAttribute("data-renderer-texture-residency-revision",""+i.ii)
if(!A.U($.o.j().hasAttribute("data-renderer-texture-residency-initial")))$.o.j().setAttribute("data-renderer-texture-residency-initial",n)},
da(){var s,r,q,p,o,n,m,l,k,j=this
if(!j.aL||j.rx.a===0)return
s=A.d([],t.a6)
for(r=j.rx,r=new A.N(r,A.v(r).i("N<1,2>")).gA(0);r.m();){q=r.d
p=q.a
o=q.b
s.push(new A.dm(p,o,B.c.q(p,"wall")?2:1))}r=j.e
r===$&&A.u()
r=r.gaq()
n=r.e
if(n===$){p=r.ghJ()
r.e!==$&&A.o7()
n=r.e=new A.rO(p)}m=n.dS(s)
s=m.a
l=A.d(s.slice(0),A.C(s))
B.a.Z(l,new A.wP())
s=A.C(l)
k=new A.G(l,s.i("f(1)").a(new A.wQ()),s.i("G<1,f>")).a0(0,",")
s=$.o.j()
s.setAttribute("data-renderer-material-residency",k)
s.setAttribute("data-renderer-material-residency-counts","resident="+m.d5(B.bU)+";pending="+m.d5(B.dR)+";missing="+m.d5(B.dS)+";evicted="+m.d5(B.dT))},
cp(a,b){return new A.aQ(a.a,a.b,a.c,b,a.e,a.f,a.r,a.w,a.x,a.y)},
h9(a,b,c){var s,r,q,p,o,n=$.ks().mO(a,b,c),m=n.length
if(m===0)throw A.b(A.i("door "+c.a+" produced no leaf geometry"))
s=A.d([],t.k)
for(r=0;r<m;r+=14){q=n[r]
p=r+1
if(!(p<m))return A.e(n,p)
p=n[p]
o=r+2
if(!(o<m))return A.e(n,o)
s.push(new A.A(q,p,n[o]))}return new A.c3(B.an,n,null,A.b3(s))},
lJ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=$.T.j().a1(a),k=a.d,j=k.a,i=k.b,h=k.c
switch(b.a){case 0:k=j+c
s=i+e
r=h+0.002
q=j+d
p=i+f
r=A.d([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.fi)
k=r
break
case 2:k=j+d
s=i+e
r=h+l.c-0.002
q=j+c
p=i+f
r=A.d([new A.a(k,s,r),new A.a(q,s,r),new A.a(q,p,r),new A.a(k,p,r)],t.fi)
k=r
break
case 1:k=j+l.a-0.002
s=i+f
r=h+d
q=h+c
p=i+e
r=A.d([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.fi)
k=r
break
case 3:k=j+0.002
s=i+f
r=h+c
q=h+d
p=i+e
r=A.d([new A.a(k,s,r),new A.a(k,s,q),new A.a(k,p,q),new A.a(k,p,r)],t.fi)
k=r
break
default:k=null}o=new A.e3(new Float32Array(5376))
o.bM(k[0],k[1],k[2],k[3],g)
n=B.n.ag(o.a,0,o.b)
k=A.d([],t.k)
for(s=n.length,m=0;m<s;m+=14){r=n[m]
q=m+1
if(!(q<s))return A.e(n,q)
q=n[q]
p=m+2
if(!(p<s))return A.e(n,p)
k.push(new A.A(r,q,n[p]))}return new A.c3(B.an,n,null,A.b3(k))},
kD(a,b){var s,r,q,p=a.e,o=A.v(p).i("N<1,2>"),n=A.J(new A.N(p,o),o.i("t.E"))
B.a.Z(n,new A.wL())
p=$.o.j()
o=a.a
s=A.C(o)
r=a.c
q=A.C(r)
p.setAttribute("data-renderer-light-selection","points="+new A.G(o,s.i("k(1)").a(new A.wM()),s.i("G<1,k>")).a0(0,":")+";spots="+new A.G(r,q.i("k(1)").a(new A.wN()),q.i("G<1,k>")).a0(0,":"))
q=A.C(n)
p.setAttribute("data-renderer-light-rejections",new A.G(n,q.i("f(1)").a(new A.wO()),q.i("G<1,f>")).a0(0,"|"))
p.setAttribute("data-renderer-light-selection-revision",""+b)},
bg(a){var s,r=this.e
r===$&&A.u()
r=r.gaq()
if(r.x)A.h(A.i("resource library is disposed"))
a.B()
s=r.b.a.av(a,null)
r.r.l(0,s)
this.rx.k(0,a.a,a)
return s},
$iCo:1}
A.wY.prototype={
$0(){var s=this.a
return!(s.ax&&!s.ay&&!s.z)},
$S:54}
A.x0.prototype={
$1(a){var s,r
A.j(a)
s=this.c.a.f
r=s.length
if(r>a){if(!(a>=0))return A.e(s,a)
s=s[a]}else s="DefaultMaterial"
return this.a.lP(this.b.a,s)},
$S:181}
A.x1.prototype={
$1(a){return this.a},
$S:182}
A.wR.prototype={
$1(a){return J.ab(t.of.a(a).h(0,"attached"),!0)},
$S:183}
A.wZ.prototype={
$1(a){var s=0,r=A.aN(t.N),q,p
var $async$$1=A.aO(function(b,c){if(b===1)return A.aK(c,r)
for(;;)switch(s){case 0:s=3
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("res/models/"+a)),t.m),$async$$1)
case 3:p=c
if(!A.U(p.ok))throw A.b(A.i("package manifest HTTP "+A.z(A.o3(p,"status",t.S))+": "+a))
s=4
return A.a7(A.ax(A.c(p.text()),t.N),$async$$1)
case 4:q=c
s=1
break
case 1:return A.aL(q,r)}})
return A.aM($async$$1,r)},
$S:184}
A.x_.prototype={
$2(a,b){var s=0,r=A.aN(t.uo),q,p,o
var $async$$2=A.aO(function(c,d){if(c===1)return A.aK(d,r)
for(;;)switch(s){case 0:s=3
return A.a7(A.ax(A.c(A.c(v.G.window).fetch("res/models/"+a+"/"+b)),t.m),$async$$2)
case 3:p=d
if(!A.U(p.ok))throw A.b(A.i("package payload HTTP "+A.z(A.o3(p,"status",t.S))+": "+a+"/"+b))
o=A
s=4
return A.a7(A.ax(A.c(p.arrayBuffer()),t.rV),$async$$2)
case 4:q=o.C9(d,0,null)
s=1
break
case 1:return A.aL(q,r)}})
return A.aM($async$$2,r)},
$S:185}
A.x4.prototype={
$1(a){var s=this.a.dy.h(0,A.x(a))
s.toString
return s},
$S:21}
A.x5.prototype={
$1(a){var s,r,q,p
A.x(a)
s=this.a
r=s.k3.h(0,a)
q=r==null
p=q?null:s.k2.h(0,r)
if(q||p==null)throw A.b(A.i("exterior item "+a+" has no retained texture binding"))
return a+"="+r+":"+p.a+"."+p.b},
$S:21}
A.x2.prototype={
$0(){var s,r=this.a.cC,q=this.b
if(!(q<r.length))return A.e(r,q)
s=r[q]
r=s.a
return new A.hP("warm:"+q,new A.A(r.a,r.b,r.c),s.b,B.b.n((s.c-this.c.r)/60,0,1))},
$S:186}
A.wW.prototype={
$2(a,b){var s,r,q,p,o
t.yT.a(b)
s=this.a
r=s.w
r===$&&A.u()
if(r.b.q(0,a)){this.b.K(0,b)
return}for(r=b.length,q=this.c,p="Requires "+a+"; ",o=0;o<r;++o)q.k(0,b[o],p+s.w.a.b+" does not install it")},
$S:187}
A.x3.prototype={
$2(a,b){return Math.max(A.az(a),t.z0.a(b).d)},
$S:188}
A.wX.prototype={
$1(a){var s=a.c
return!this.a.lg(new A.a(s.a,s.b,s.c),0.02*this.b.f*this.c)},
$S:44}
A.wS.prototype={
$1(a){var s,r
t.no.a(a)
s=a.a
r=s==="wall-plaster"?2:1
return new A.c9(s,a.b,r)},
$S:189}
A.wT.prototype={
$2(a,b){var s=t.k_
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:190}
A.wU.prototype={
$1(a){t.k_.a(a)
return a.a.a+"="+a.b.b},
$S:55}
A.wV.prototype={
$1(a){var s=t.k_.a(a).a,r=s.b
return s.a+"="+r.a+"."+r.b},
$S:55}
A.wP.prototype={
$2(a,b){var s=t.wl
return B.c.I(s.a(a).a.a,s.a(b).a.a)},
$S:192}
A.wQ.prototype={
$1(a){t.wl.a(a)
return a.a.a+"="+a.b.b},
$S:193}
A.wL.prototype={
$2(a,b){var s=t.ou
return B.d.I(s.a(a).a,s.a(b).a)},
$S:194}
A.wM.prototype={
$1(a){return t.je.a(a).a},
$S:42}
A.wN.prototype={
$1(a){return t.je.a(a).a},
$S:42}
A.wO.prototype={
$1(a){t.ou.a(a)
return""+a.a+"="+a.b},
$S:196}
A.nl.prototype={}
A.jP.prototype={
ia(a,b){var s=this,r=b==null?s.d:b
return new A.jP(s.a,s.b,s.c,r,a)},
n9(a){return this.ia(a,null)}}
A.wp.prototype={
gaE(){return this.b},
gb0(){return this.c}}
A.xB.prototype={
$2(a,b){var s
A.AX(a,A.z(b))
switch(a){case"master":s=$.bs
if(s!=null)s.jA(b)
break
case"voice":s=$.bs
if(s!=null)s.jC(b)
break
case"effects":s=$.bs
if(s!=null)s.jz(b)
break
case"ambience":s=$.bs
if(s!=null)s.jy(b)
break
case"music":s=$.bs
if(s!=null)s.jB(b)
break}},
$S:37}
A.xC.prototype={
$1(a){var s
A.AX("muted",""+a)
s=$.bs
if(s!=null)s.fz(a)},
$S:10}
A.xD.prototype={
$1(a){var s
A.AX("mono",""+a)
s=$.bs
if(s!=null)s.e1(a)},
$S:10}
A.xJ.prototype={
$2(a,b){A.AY(a,A.z(b))
A.Dm(a,b)},
$S:37}
A.xK.prototype={
$1(a){var s="high-contrast"
A.AY(s,""+a)
A.xl(s,a)},
$S:10}
A.xL.prototype={
$1(a){var s="strong-highlights"
A.AY(s,""+a)
A.xl(s,a)},
$S:10}
A.xM.prototype={
$1(a){$.dE().py(a)
A.yt()
A.Do()},
$S:198}
A.xN.prototype={
$0(){var s=$.dE()
s.a=A.e2(null,1)
s.b=A.e2(null,1)
A.yt()
A.Do()},
$S:0}
A.xO.prototype={
$0(){A.ej(this.a)},
$S:0}
A.xP.prototype={
$0(){this.a.al()},
$S:0}
A.xQ.prototype={
$0(){A.ej(this.a)},
$S:0}
A.xE.prototype={
$0(){A.ib(this.a)},
$S:0}
A.xF.prototype={
$1(a){$.kg=a
A.DS()
A.Ar()},
$S:199}
A.xG.prototype={
$1(a){var s=$.cM()
$.AD=a
if(!s.Q&&a.Q){$.bD.j().a=1
$.bD.j().j7(7)
$.aE.j().iK()
$.cL().S(0)}A.DU()
A.Dn()},
$S:200}
A.xH.prototype={
$1(a){$.dB=a
A.AL()
A.nN()},
$S:201}
A.xI.prototype={
$0(){$.dB=B.aJ
$.fV.j().ft($.dB)
A.AL()
A.nN()},
$S:0}
A.xx.prototype={
$1(a){var s,r=A.Es(a,A.DE())
$.ki=A.hr($.ku().b,a)
s=r.b
$.f0.j().cY(a,$.ku().b,s)
$.o.j().setAttribute("data-graphics-fallback",B.a.a0(s,"|"))
$.DF=A.nQ(a,r,$.DF)},
$S:202}
A.xy.prototype={
$0(){this.a.$1(B.jL)},
$S:0}
A.xz.prototype={
$0(){A.ej($.f0.j())},
$S:0}
A.xA.prototype={
$0(){A.ej($.f0.j())},
$S:0}
A.xt.prototype={
$1(a){},
$S:25}
A.xu.prototype={
$1(a){var s,r
$.Az=a
$.ap.j().fu(a.r)
s=$.ap.j()
r=s.ch
r.a=a.f
r.f9()
s.b4()
A.DT()},
$S:203}
A.xv.prototype={
$0(){A.ej($.k9.j())},
$S:0}
A.xw.prototype={
$0(){A.ej($.k9.j())},
$S:0}
A.yk.prototype={
$0(){$.yH=A.U(this.a.matches)
$.B2=A.U(this.b.matches)
A.nN()},
$S:0}
A.yi.prototype={
$1(a){return this.a.$0()},
$S:2}
A.yj.prototype={
$1(a){return this.a.$0()},
$S:2}
A.z7.prototype={
$1(a){var s
try{A.BN(this.b,a,this.a)
return!0}catch(s){if(A.am(s) instanceof A.B)return!1
else throw s}},
$S:204}
A.z8.prototype={
$1(a){var s,r,q,p=null,o=a.a
switch(o){case 0:p=$.kf.j()
break
case 5:p=$.fV.j()
break
case 1:p=$.f0.j()
break
case 4:p=$.i0.j()
break
case 2:p=$.kb.j()
break
case 3:p=$.k9.j()
break}s=p
r=null
switch(o){case 0:r=B.oa
break
case 5:r=B.of
break
case 1:r=B.ob
break
case 4:r=B.oe
break
case 2:r=B.oc
break
case 3:r=B.od
break}q=r
p=B.dL.h(0,a)
p.toString
A.AK(s,q,p)},
$S:205}
A.z9.prototype={
$0(){A.ej($.i2.j())},
$S:0}
A.zk.prototype={
$0(){return A.ej($.i2.j())},
$S:0}
A.zu.prototype={
$0(){$.cJ.j().al()},
$S:0}
A.zv.prototype={
$0(){$.cJ.j().al()},
$S:0}
A.zw.prototype={
$0(){A.AK($.i2.j(),B.dV,"pause.settings")},
$S:0}
A.zx.prototype={
$0(){$.cJ.j().al()
A.ia($.kc.j())},
$S:0}
A.zy.prototype={
$0(){A.kp("saved")},
$S:0}
A.zz.prototype={
$0(){$.cJ.j().al()
A.ia($.kc.j())},
$S:0}
A.zA.prototype={
$0(){A.AK($.nL.j(),B.og,"pause.credits")},
$S:0}
A.za.prototype={
$0(){return A.ib($.cJ.j())},
$S:0}
A.zb.prototype={
$1(a){var s=$.X.j(),r=s.e.q3(a),q=r?B.ji:B.jj
s.hu(q,r?a:null)
return r},
$S:22}
A.zc.prototype={
$0(){return A.ib($.kd.j())},
$S:0}
A.zd.prototype={
$2(a,b){var s,r
if($.aE.j().y){s=$.aV.j().gcv()
if(s!=null){if(a>=0&&a<s.f.length){r=s.f
if(!(a>=0&&a<r.length))return A.e(r,a)
A.IU(r[a].a)}}else if(a>=0&&a<5){if(!(a>=0&&a<5))return A.e(B.dw,a)
A.IT(B.dw[a])}}},
$S:206}
A.ze.prototype={
$2(a,b){var s,r,q,p,o,n
if($.X.j().gak().a===21){A.DZ(!1)
return}s=$.T.j().y.b
$.X.j().jU(a,b,$.ah)
if(b===B.cc&&$.ah===$.T.j().r){A.JQ()
A.h_("woke in the living room")}r=$.T.j().y.b
q=s
for(;;){o=q
n=r
if(typeof o!=="number")return o.cU()
if(typeof n!=="number")return A.B8(n)
if(!(o<n))break
if($.T.b===$.T)A.h(A.aa(""))
p=B.a.h(B.Z,q).b
o=$.aA
if(o!=null){n=$.T.b
if(n===$.T)A.h(A.aa(""))
o.dT(n,p)}o=q
if(typeof o!=="number")return o.T()
q=o+1}A.kp("saved after sleep")},
$S:207}
A.zf.prototype={
$0(){return A.ib($.fX.j())},
$S:0}
A.zg.prototype={
$0(){return A.ib($.kc.j())},
$S:0}
A.zh.prototype={
$0(){return A.ej($.nL.j())},
$S:0}
A.zi.prototype={
$0(){A.ib($.ka.j())},
$S:0}
A.zj.prototype={
$0(){A.ib($.ka.j())},
$S:0}
A.zl.prototype={
$1(a){return A.DY()},
$S:2}
A.zm.prototype={
$1(a){if(A.x(A.c(v.G.document).visibilityState)==="hidden")A.JT()},
$S:1}
A.zn.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.c(a)
if(A.x(l.code)==="CapsLock"&&!A.U(l.repeat)){l.preventDefault()
p=$.bX()
o=!p.a
p.a=o
if(o)A.rn(A.c(v.G.document),"exitPointerLock",t.X)
else $.ap.j().dV($.o.j())
return}p=$.bX()
if(p.a&&!A.U(l.repeat)){if(A.x(l.code)==="Escape"){l.preventDefault()
p.a=!1
$.ap.j().dV($.o.j())
return}if(A.x(l.code)==="KeyC"){l.preventDefault()
A.xS()
return}if(A.x(l.code)==="KeyI"){l.preventDefault()
A.yg()
return}if(A.x(l.code)==="ArrowUp"||A.x(l.code)==="KeyW"){l.preventDefault()
n=p.gbA().length
if(n>0)p.c=B.d.P(p.c-1+n,n)
o=$.f5
if(o!=null){p=p.gbA().length
o.a.e0(-1,p)}return}if(A.x(l.code)==="ArrowDown"||A.x(l.code)==="KeyS"){l.preventDefault()
n=p.gbA().length
if(n>0)p.c=B.d.P(p.c+1,n)
o=$.f5
if(o!=null){p=p.gbA().length
o.a.e0(1,p)}return}if(A.x(l.code)==="ArrowLeft"||A.x(l.code)==="KeyA"){l.preventDefault()
p.nJ()
return}if(A.x(l.code)==="ArrowRight"||A.x(l.code)==="KeyD"){l.preventDefault()
p.on()
return}if(A.x(l.code)==="KeyQ"){l.preventDefault()
m=p.gbZ()
p=m==null?null:m.Q===B.B
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y-m.w*0.2,m.f,m.r)
return}if(A.x(l.code)==="KeyE"){l.preventDefault()
m=p.gbZ()
p=m==null?null:m.Q===B.B
if(p===!0)if(m.e)m.z=!m.z
else m.y=B.b.n(m.y+m.w*0.2,m.f,m.r)
return}if(A.x(l.code)==="KeyR"){l.preventDefault()
if(A.U(l.shiftKey))p.px()
else p.pz()
return}if(B.c.Y(A.x(l.code),"Digit")||B.c.Y(A.x(l.code),"Numpad")){o=A.x(l.code)
o=A.zL(o,"Digit","")
s=A.zL(o,"Numpad","")
r=A.dX(s,null)
if(r!=null&&r>=1&&r<=5){l.preventDefault()
o=r-1
if(o>=0&&o<6){p.b=o
p.c=0}return}}return}if($.aE.j().y&&!A.U(l.repeat))if($.cL().oh(A.x(l.code))){l.preventDefault()
return}if(A.x(l.code)==="Escape"&&!A.U(l.repeat)){p=$.bm
if(p==null)A.ia($.cJ.j())
else p.al()
return}q=$.bm==null&&!p.a
if(!A.U(l.repeat)&&q)$.fW.j().iF(new A.mg(A.x(l.code),!0,1))
if(A.x(l.code)==="KeyP"&&!A.U(l.repeat)&&$.EZ())$.fZ=!$.fZ
if((A.x(l.code)==="KeyJ"||A.x(l.code)==="Tab")&&!A.U(l.repeat)&&!$.aE.j().y){l.preventDefault()
A.kq($.kd.j())}if(A.x(l.code)==="KeyL"&&!A.U(l.repeat)&&!$.aE.j().y)A.kq($.fX.j())
if(A.x(l.code)==="KeyH"&&!A.U(l.repeat)&&!$.aE.j().y)A.kq($.kc.j())
if(A.x(l.code)==="KeyO"&&!A.U(l.repeat)&&!$.aE.j().y)A.kq($.ke.j())
if(A.x(l.code)==="KeyK"&&!A.U(l.repeat)&&q)A.kp("saved")},
$S:1}
A.zo.prototype={
$1(a){var s=A.c(a)
if($.bm==null)$.fW.j().iF(new A.mg(A.x(s.code),!1,0))},
$S:1}
A.zp.prototype={
$1(a){return A.Dq()},
$S:2}
A.zq.prototype={
$1(a){return A.Dq()},
$S:2}
A.zr.prototype={
$1(a){return A.Jl(A.c(a))},
$S:2}
A.zs.prototype={
$1(a){var s=A.c(a)
$.o.j().focus()
if($.aE.j().y){s.preventDefault()
A.Jk(s)
return}$.ap.j().dV($.o.j())},
$S:1}
A.zt.prototype={
$1(a){var s,r,q,p=A.c(a),o=$.bX()
if(!o.a||$.f5==null)return
p.preventDefault()
s=o.gbA()
r=A.a4(p.deltaY)>0?1:-1
o=$.f5
o.toString
q=J.cN(s)
o.a.e0(A.j(r),q)},
$S:1}
A.yl.prototype={
$1(a){var s=A.x(A.c(a).message)
A.yx(s,null)},
$S:1}
A.ym.prototype={
$1(a){var s
A.c(a)
s=a.reason
A.yx("unhandled rejection: "+A.z(s==null?A.x(a.type):s),null)},
$S:1}
A.ys.prototype={
$1(a){return t.x.a(a).b===this.a},
$S:53}
A.yC.prototype={
$0(){this.a.className=""},
$S:15}
A.yK.prototype={
$1(a){return t.E4.a(a).a===this.a.b},
$S:45}
A.yp.prototype={
$2(a,b){var s=t.q
return B.c.I(s.a(a).a,s.a(b).a)},
$S:24}
A.yz.prototype={
$1(a){return t.g.a(a).e},
$S:30}
A.yu.prototype={
$1(a){return t.Y.a(a).a===this.a},
$S:14}
A.yw.prototype={
$1(a){return t.fW.a(a).w},
$S:16}
A.yP.prototype={
$1(a){return t.fW.a(a).w},
$S:16}
A.yJ.prototype={
$2(a,b){return A.az(a)+t.cZ.a(b).d},
$S:208};(function aliases(){var s=J.eI.prototype
s.k8=s.t
s=A.t.prototype
s.k7=s.dZ
s=A.c6.prototype
s.cZ=s.bw
s=A.j2.prototype
s.k9=s.c6})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers._static_1,n=hunkHelpers._instance_0u,m=hunkHelpers.installStaticTearOff
s(J,"Js","Gr",43)
r(J.w.prototype,"gaJ","q",8)
q(A,"JH","GR",46)
r(A.b_.prototype,"gaJ","q",8)
r(A.hp.prototype,"gaJ","q",8)
p(A.cy.prototype,"gn4","M",8)
o(A,"KC","HZ",19)
o(A,"KD","I_",19)
o(A,"KE","I0",19)
q(A,"Ee","Kh",0)
r(A.cG.prototype,"gaJ","q",8)
r(A.hR.prototype,"gaJ","q",8)
o(A,"KM","J2",17)
p(A.lP.prototype,"gpF","pG",97)
var l
p(l=A.my.prototype,"gpB","pC",11)
p(l,"gpK","pL",11)
p(l,"gpM","pN",11)
p(l,"gpD","pE",11)
p(l,"gpI","pJ",11)
q(A,"Ei","I4",210)
q(A,"Mr","A7",54)
p(A.dk.prototype,"gau","jb",67)
n(A.k4.prototype,"gnQ","X",0)
p(l=A.ly.prototype,"glr","ls",2)
p(l,"glt","lu",2)
p(l,"glx","ly",2)
p(l,"glB","lC",2)
p(l,"glD","lE",2)
p(l,"glz","lA",2)
p(l,"glv","lw",2)
p(l,"glF","lG",2)
o(A,"L9","Dv",17)
o(A,"Ld","Du",17)
o(A,"L2","Gn",211)
o(A,"L3","Gp",212)
o(A,"Li","Gh",213)
m(A,"Lr",0,null,["$3$materialDissolution01$snowDepthM$waterFilmDepthM","$0"],["CP",function(){return A.CP(0,0,0)}],214,0)
p(A.j2.prototype,"glH","lI",2)
p(A.hK.prototype,"gle","lf",153)
p(A.mM.prototype,"gox","oy",29)
o(A,"Er","JW",215)
q(A,"Eq","J_",0)
o(A,"L6","IV",144)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.L,null)
q(A.L,[A.zZ,J.lA,A.jj,J.fb,A.t,A.is,A.av,A.a5,A.up,A.ao,A.iQ,A.R,A.iB,A.iz,A.jy,A.aG,A.eO,A.bk,A.hx,A.he,A.eA,A.ec,A.ds,A.vB,A.ti,A.iA,A.jW,A.ai,A.rH,A.c1,A.ae,A.cW,A.iL,A.nh,A.mY,A.jq,A.nz,A.wq,A.xd,A.d0,A.nb,A.nC,A.x9,A.mZ,A.d4,A.bt,A.n2,A.eb,A.au,A.n_,A.nx,A.k7,A.jG,A.ng,A.fR,A.jJ,A.k0,A.nD,A.eB,A.kZ,A.wJ,A.xh,A.xe,A.fg,A.dJ,A.n8,A.m_,A.jo,A.wr,A.B,A.O,A.aB,A.nA,A.vk,A.bK,A.k2,A.vF,A.nu,A.th,A.nd,A.eY,A.ep,A.mG,A.t_,A.lQ,A.ta,A.t1,A.t4,A.fs,A.tZ,A.dZ,A.m6,A.kV,A.pv,A.pw,A.kW,A.m5,A.ir,A.ve,A.lj,A.lk,A.e_,A.lv,A.b1,A.l7,A.m4,A.bT,A.c2,A.bi,A.jv,A.c3,A.l1,A.tj,A.m7,A.jh,A.aQ,A.mw,A.je,A.b4,A.qa,A.dm,A.ch,A.rQ,A.rO,A.lP,A.mC,A.rW,A.iq,A.rZ,A.t0,A.hz,A.mc,A.c9,A.ck,A.vv,A.vt,A.dz,A.my,A.vi,A.hP,A.co,A.vY,A.dT,A.lf,A.lg,A.ll,A.q9,A.hU,A.ay,A.bG,A.aS,A.Q,A.iu,A.ma,A.bn,A.u0,A.bh,A.u2,A.u1,A.aT,A.jd,A.mh,A.ws,A.nB,A.x8,A.nn,A.na,A.nr,A.nk,A.wE,A.c4,A.c_,A.b9,A.pM,A.pL,A.h4,A.fu,A.qb,A.dk,A.md,A.e5,A.A,A.oy,A.oB,A.oz,A.h7,A.h6,A.li,A.q7,A.ip,A.n0,A.kO,A.n1,A.l3,A.n5,A.ix,A.n6,A.l8,A.n7,A.lt,A.nc,A.iV,A.ni,A.h9,A.kP,A.A8,A.j4,A.no,A.mb,A.np,A.fF,A.mp,A.ns,A.mq,A.nt,A.mt,A.nw,A.ms,A.nv,A.mH,A.nE,A.mQ,A.nG,A.nF,A.jf,A.mU,A.nJ,A.pt,A.lq,A.ls,A.iE,A.jl,A.q,A.l4,A.hC,A.qx,A.eZ,A.dq,A.hl,A.wg,A.ef,A.k6,A.k5,A.nI,A.nH,A.xj,A.wc,A.wf,A.l6,A.kG,A.hX,A.k4,A.oJ,A.od,A.ik,A.oF,A.zU,A.oR,A.oL,A.jz,A.ha,A.pq,A.q8,A.ly,A.re,A.ri,A.be,A.rD,A.rA,A.pN,A.rJ,A.bg,A.rN,A.e3,A.a,A.w3,A.cE,A.eS,A.w1,A.w_,A.mu,A.mV,A.pj,A.l9,A.pW,A.hm,A.bN,A.m3,A.tM,A.hJ,A.ui,A.fC,A.lo,A.ql,A.qk,A.bY,A.kB,A.ow,A.lm,A.ac,A.bo,A.ot,A.qP,A.aw,A.bZ,A.hA,A.uc,A.kI,A.pd,A.er,A.et,A.ev,A.es,A.eu,A.oC,A.c6,A.kQ,A.lR,A.d3,A.mW,A.iI,A.qU,A.a9,A.lc,A.lw,A.qV,A.ld,A.dy,A.le,A.eX,A.eE,A.ji,A.a_,A.qO,A.qS,A.q_,A.vc,A.qX,A.di,A.cU,A.lB,A.rl,A.rj,A.rk,A.dW,A.r1,A.cA,A.fL,A.cj,A.lM,A.fG,A.fB,A.r4,A.dh,A.qT,A.fn,A.r3,A.dg,A.r9,A.j3,A.iP,A.aH,A.vX,A.lK,A.ce,A.rp,A.io,A.pg,A.j5,A.tF,A.j6,A.m8,A.tz,A.ty,A.tA,A.tB,A.tC,A.tD,A.hD,A.tE,A.tG,A.tJ,A.tK,A.iO,A.tY,A.ua,A.mg,A.u9,A.ub,A.v1,A.cD,A.v3,A.hL,A.pO,A.lh,A.wj,A.fM,A.kX,A.rc,A.rg,A.ja,A.j9,A.dp,A.tW,A.tX,A.tV,A.ug,A.dr,A.uh,A.lp,A.fJ,A.w9,A.hS,A.eR,A.vZ,A.w7,A.fK,A.eT,A.mR,A.hT,A.wb,A.qi,A.ln,A.tb,A.db,A.bI,A.tw,A.vn,A.fI,A.fH,A.jx,A.mP,A.fz,A.dx,A.vl,A.e0,A.mm,A.mj,A.mk,A.ml,A.vq,A.ky,A.zT,A.eo,A.on,A.oE,A.eq,A.pi,A.bu,A.pr,A.hg,A.dH,A.kY,A.j2,A.pR,A.qr,A.qt,A.ho,A.dS,A.qK,A.qA,A.qB,A.ct,A.qL,A.dn,A.hb,A.tl,A.dV,A.eK,A.ci,A.tq,A.tU,A.bp,A.uW,A.v_,A.cO,A.ok,A.mM,A.vW,A.e9,A.bL,A.cn,A.cb,A.mO,A.kA,A.mL,A.hV,A.nm,A.nl,A.jP,A.wp])
q(J.lA,[J.lD,J.iK,J.iM,J.hs,J.ht,J.fo,J.eH])
q(J.iM,[J.eI,J.w,A.eJ,A.iZ])
q(J.eI,[J.m2,J.eN,J.dU])
r(J.lC,A.jj)
r(J.ro,J.w)
q(J.fo,[J.iJ,J.lE])
q(A.t,[A.eV,A.W,A.cX,A.F,A.fh,A.ea,A.fQ,A.mX,A.ny,A.cc])
q(A.eV,[A.ff,A.k8])
r(A.jE,A.ff)
r(A.jC,A.k8)
r(A.bf,A.jC)
q(A.av,[A.hu,A.e6,A.lF,A.mB,A.mi,A.n9,A.iN,A.kE,A.cP,A.jt,A.mA,A.hM,A.kU])
r(A.hQ,A.a5)
r(A.dI,A.hQ)
q(A.W,[A.a0,A.ag,A.an,A.N,A.fP,A.jI])
q(A.a0,[A.jr,A.G,A.bR,A.nf])
r(A.dK,A.cX)
q(A.bk,[A.ed,A.ee,A.fT])
q(A.ed,[A.a6,A.fU,A.jQ,A.jR])
q(A.ee,[A.aJ,A.aU,A.jS,A.jT])
q(A.fT,[A.cH,A.jU])
r(A.hZ,A.hx)
r(A.eP,A.hZ)
r(A.iv,A.eP)
q(A.eA,[A.kT,A.kS,A.mx,A.z3,A.z5,A.wm,A.wl,A.xn,A.qf,A.wC,A.wF,A.rK,A.wH,A.zC,A.zD,A.yW,A.v0,A.t2,A.t7,A.t8,A.t6,A.yn,A.yG,A.yq,A.yE,A.u_,A.vK,A.rT,A.rU,A.rV,A.tk,A.rR,A.rS,A.rX,A.yX,A.vw,A.vx,A.vy,A.vA,A.q3,A.q1,A.q2,A.tn,A.to,A.u7,A.u6,A.u5,A.u4,A.u3,A.u8,A.y8,A.y9,A.uk,A.ul,A.zK,A.zI,A.qc,A.rM,A.oA,A.yT,A.qy,A.qz,A.wd,A.we,A.oT,A.oX,A.oW,A.oV,A.oY,A.oK,A.oe,A.of,A.og,A.oH,A.oI,A.oG,A.rf,A.rB,A.w4,A.w5,A.w0,A.w2,A.pZ,A.qm,A.qo,A.qp,A.qq,A.or,A.ue,A.uf,A.ou,A.qQ,A.qR,A.tS,A.ud,A.wi,A.wh,A.p_,A.p0,A.p1,A.p2,A.p3,A.p6,A.p7,A.p8,A.p9,A.pa,A.pb,A.pc,A.p5,A.yS,A.pe,A.pf,A.yr,A.yN,A.oD,A.pu,A.q0,A.qW,A.zM,A.ye,A.yd,A.rb,A.vd,A.r0,A.r_,A.qY,A.yM,A.r5,A.r7,A.r8,A.yL,A.pV,A.rG,A.rw,A.yB,A.tH,A.tI,A.tL,A.v2,A.va,A.v4,A.v5,A.v8,A.v9,A.v7,A.v6,A.vj,A.pP,A.pQ,A.wa,A.qh,A.tx,A.vm,A.un,A.uo,A.vr,A.vs,A.oc,A.oa,A.oO,A.oP,A.pl,A.pp,A.po,A.pn,A.pF,A.pE,A.pG,A.pH,A.pI,A.pD,A.py,A.pz,A.pK,A.pS,A.pT,A.pU,A.pY,A.qs,A.qu,A.qv,A.qI,A.qE,A.qF,A.qG,A.qH,A.qD,A.qC,A.qN,A.rr,A.rs,A.rt,A.tr,A.ts,A.tt,A.uR,A.uS,A.uJ,A.uK,A.uI,A.uL,A.ut,A.uM,A.uN,A.uO,A.uH,A.uz,A.uA,A.uB,A.uC,A.uD,A.uE,A.uF,A.uG,A.uy,A.uu,A.uv,A.uw,A.ux,A.uQ,A.uP,A.uY,A.vh,A.om,A.vU,A.vT,A.vV,A.vP,A.vS,A.vN,A.vM,A.z_,A.vL,A.oh,A.oi,A.oj,A.x0,A.x1,A.wR,A.wZ,A.x4,A.x5,A.wX,A.wS,A.wU,A.wV,A.wQ,A.wM,A.wN,A.wO,A.xC,A.xD,A.xK,A.xL,A.xM,A.xF,A.xG,A.xH,A.xx,A.xt,A.xu,A.yi,A.yj,A.z7,A.z8,A.zb,A.zl,A.zm,A.zn,A.zo,A.zp,A.zq,A.zr,A.zs,A.zt,A.yl,A.ym,A.ys,A.yK,A.yz,A.yu,A.yw,A.yP])
q(A.kT,[A.px,A.rx,A.z4,A.xo,A.yQ,A.qg,A.wD,A.rI,A.rL,A.wK,A.vH,A.vG,A.t3,A.t5,A.t9,A.zN,A.zO,A.zE,A.rP,A.rY,A.vu,A.vz,A.zF,A.q4,A.um,A.zJ,A.zH,A.oU,A.oM,A.oN,A.rC,A.qn,A.os,A.ov,A.tT,A.yF,A.r2,A.rF,A.vb,A.rh,A.qj,A.td,A.te,A.tf,A.vo,A.vp,A.ps,A.ru,A.rv,A.ol,A.vQ,A.vO,A.x_,A.wW,A.x3,A.wT,A.wP,A.wL,A.xB,A.xJ,A.zd,A.ze,A.yp,A.yJ])
q(A.he,[A.a3,A.de])
q(A.ds,[A.hf,A.jV,A.k1])
q(A.hf,[A.b_,A.hp])
q(A.kS,[A.tN,A.wn,A.wo,A.xa,A.qd,A.wt,A.wy,A.wx,A.wv,A.wu,A.wB,A.wA,A.wz,A.x7,A.yA,A.xg,A.xf,A.y7,A.y0,A.y1,A.y6,A.xW,A.xY,A.xX,A.y5,A.xU,A.xV,A.y2,A.y3,A.y4,A.y_,A.xZ,A.yb,A.yc,A.yU,A.qZ,A.r6,A.yf,A.ob,A.op,A.oo,A.oQ,A.pB,A.pC,A.pA,A.qw,A.qJ,A.tv,A.ur,A.us,A.uT,A.uU,A.uV,A.uZ,A.vg,A.vR,A.wY,A.x2,A.xN,A.xO,A.xP,A.xQ,A.xE,A.xI,A.xy,A.xz,A.xA,A.xv,A.xw,A.yk,A.z9,A.zk,A.zu,A.zv,A.zw,A.zx,A.zy,A.zz,A.zA,A.za,A.zc,A.zf,A.zg,A.zh,A.zi,A.zj,A.yC])
r(A.j0,A.e6)
q(A.mx,[A.mv,A.h8])
q(A.ai,[A.cy,A.jF,A.ne])
r(A.fp,A.cy)
r(A.hB,A.eJ)
q(A.iZ,[A.lS,A.bx])
q(A.bx,[A.jL,A.jN])
r(A.jM,A.jL)
r(A.iX,A.jM)
r(A.jO,A.jN)
r(A.iY,A.jO)
q(A.iX,[A.iW,A.lT])
q(A.iY,[A.lU,A.lV,A.lW,A.lX,A.lY,A.ft,A.j_])
r(A.hY,A.n9)
r(A.jA,A.n2)
r(A.nq,A.k7)
r(A.jH,A.jF)
r(A.cG,A.jV)
r(A.hR,A.k1)
q(A.eB,[A.la,A.kJ,A.lG])
q(A.la,[A.kC,A.mF])
q(A.kZ,[A.xb,A.ph,A.rz,A.ry,A.vJ,A.vI])
r(A.kD,A.xb)
r(A.lH,A.iN)
r(A.wI,A.wJ)
q(A.cP,[A.hF,A.lx])
r(A.n3,A.k2)
q(A.n8,[A.l5,A.fw,A.hi,A.hd,A.mz,A.fm,A.h5,A.iS,A.d1,A.hI,A.hk,A.kN,A.it,A.hj,A.fA,A.fr,A.d_,A.e4,A.bq,A.fj,A.cx,A.jg,A.df,A.hH,A.jn,A.hn,A.im,A.jB,A.jD,A.lr,A.iC,A.iF,A.iG,A.fl,A.iD,A.fE,A.dv,A.hc,A.hq,A.hW,A.kM,A.fe,A.l_,A.l2,A.bz,A.kH,A.dl,A.cv,A.dM,A.bw,A.iU,A.iT,A.fi,A.dL,A.eD,A.eC,A.eF,A.m1,A.mf,A.hG,A.c7,A.jm,A.dt,A.c8,A.bJ,A.lz,A.fN,A.cC,A.eM,A.eU,A.fc,A.d9,A.cQ,A.da,A.dG,A.dF,A.ex,A.ey,A.ew,A.fd,A.dP,A.dc,A.dd,A.dQ,A.dO,A.dR,A.cw,A.dN,A.cS,A.kz,A.bH,A.cz,A.eL,A.cZ,A.c5,A.bS,A.jk,A.c0,A.cl,A.cm,A.eQ,A.dw])
q(A.e_,[A.bQ,A.bA,A.cg,A.m0,A.cT])
r(A.uj,A.nr)
r(A.mS,A.nH)
q(A.c6,[A.kK,A.kL,A.kR,A.lu,A.lI,A.lJ,A.lL,A.mr,A.n4])
r(A.jK,A.dy)
q(A.j2,[A.iw,A.pJ,A.pX,A.iH,A.qM,A.rq,A.tu,A.uq,A.hK,A.vf])
q(A.vW,[A.mN,A.nj,A.bC,A.mK,A.mI,A.jw,A.mJ])
s(A.hQ,A.eO)
s(A.k8,A.a5)
s(A.jL,A.a5)
s(A.jM,A.aG)
s(A.jN,A.a5)
s(A.jO,A.aG)
s(A.hZ,A.k0)
s(A.k1,A.nD)
s(A.nr,A.wE)
s(A.nH,A.xj)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",y:"double",bF:"num",f:"String",l:"bool",aB:"Null",K:"List",L:"Object",V:"Map",ak:"JSObject"},mangledNames:{},types:["~()","aB(L?)","~(L?)","l(f)","l(y)","cR()","l(@)","0&()","l(L?)","l(cD)","~(l)","cR(bA?)","l(ay)","l(fB)","l(fz)","aB()","l(fL)","@(@)","k(ce,ce)","~(~())","l(bp)","f(f)","l(k)","~(@)","k(O<f,f>,O<f,f>)","aB(@)","l(bi)","f(ep)","l(Q)","l(cb)","l(ce)","O<f,f>(@,@)","l(bY)","k(bY,bY)","f(L?)","~(f,f)","f(et)","~(f,y)","l(eX)","l(cU)","@(f)","~(L?,L?)","k(be)","k(@,@)","l(h7)","l(bI)","k()","l(d9)","l(O<f,K<f>>)","l(c7)","~(ak)","l(cS)","l(ca?)","l(cw)","l()","f(ck)","f(er)","@()","y(y,hX)","l(O<f,b4>)","b4(O<f,b4>)","b4(b4,b4)","k(b9<c4>,b9<c4>)","cB(b9<c4>)","k(b9<c_>,b9<c_>)","cB(b9<c_>)","fu(y,y,y,y)","A(A)","~(L,du)","~(fF)","fF()","V<f,@>(fs)","aB(L,du)","b0<aB>(O<f,f>)","l(K<f>)","k(f,f)","k(cj,cj)","~(@,@)","+effectiveScore,light,score(y,be,y)(be)","k(+effectiveScore,light,score(y,be,y),+effectiveScore,light,score(y,be,y))","l(cv)","aB(~())","@(@,f)","k(+influence,light(y,bT),+influence,light(y,bT))","V<f,f>(V<f,f>,f)","l(ch)","k(dm,dm)","f(bw)","V<f,@>(ac)","K<ac>(bo)","O<f,V<f,@>>(f,bo)","a(y,y,y)","~(y,y,y,y,y,y,k{alpha:y})","er(L?)","et(L?)","es(L?)","eu(L?)","c2(cg)","cg(k,k,f?)","0&(f,k?)","f(es)","f(eu)","f(ev)","k(k,+(bQ,c3))","eD(f)","ev(L?)","l(fG)","f(k,a9,a9,a9)","k(dy,dy)","l(ck)","l(cj)","k(c9,c9)","l(di)","L?(L?)","k(dW,dW)","l(dh)","O<f,f>(f,@)","f?(f)","b0<ca>(f)","bA(k,k,f?)","k(cD,cD)","f(k)","y(y)","l(c8)","l(bJ)","fJ()","y(f)","k(k,+(bA,dz))","k(+influence,source(y,co),+influence,source(y,co))","k(O<f,db>,O<f,db>)","f(ay)","O<k,@>(k,fI)","O<k,@>(k,fH)","l(e0)","k(af,af)","l(O<@,@>)","O<f,f>(O<@,@>)","l?(L?)","aB(@,du)","f()","0^(t<0^>,L?)<L?>","y(y,f)","k(k,ca)","K<f>(K<f>)","~(k)","cT(k,k,f?)","jf(bQ)","aB(ak)","0^(f,t<0^>)<D>","cR(f{fallback:f?})","V<f,L?>(dV)","f(bH)","l(bH)","l(bS)","~(k,@)","l(dP)","l(dc)","l(dd)","l(dQ)","l(dO)","l(dR)","l(dN)","bT?()","l(cQ)","l(da)","l(dG)","l(dF)","K<ak>()","f(cO)","k(cO,cO)","K<bT>()","k(cb,cb)","K<dx>()","l(dx)","l(O<f,f>)","k(cn,cn)","V<f,@>(cb)","l(cm)","l(cl)","l(c0)","~(y)","cg(k)","hz(hD)","l(V<f,L>)","b0<f>(f)","b0<ca>(f,f)","hP()","~(f,t<f>)","y(y,dp)","c9(O<f,bA>)","k(ck,ck)","ir()","k(ch,ch)","f(ch)","k(O<k,f>,O<k,f>)","y()","f(O<k,f>)","h9()","~(bS)","~(eq)","~(ho)","~(eo)","~(dS)","~(hg)","l(hJ)","~(c5)","~(k,f)","~(c8,bJ)","y(y,eR)","cR?()","hU()","di(L?)","cU(L?)","dh(L?)","hT({materialDissolution01:y,snowDepthM:y,waterFilmDepthM:y})","~(bF)","bQ(k,k,f?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a6&&a.b(c.a)&&b.b(c.b),"2;height,width":(a,b)=>c=>c instanceof A.fU&&a.b(c.a)&&b.b(c.b),"2;influence,light":(a,b)=>c=>c instanceof A.jQ&&a.b(c.a)&&b.b(c.b),"2;influence,source":(a,b)=>c=>c instanceof A.jR&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.aJ&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;b,g,r":(a,b,c)=>d=>d instanceof A.aU&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;effectiveScore,light,score":(a,b,c)=>d=>d instanceof A.jS&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;handoff,items,meshes":(a,b,c)=>d=>d instanceof A.jT&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.cH&&A.Et(a,b.a),"7;cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan":a=>b=>b instanceof A.jU&&A.Et(a,b.a)}}
A.Im(v.typeUniverse,JSON.parse('{"dU":"eI","m2":"eI","eN":"eI","LG":"eJ","w":{"K":["1"],"W":["1"],"ak":[],"t":["1"]},"lD":{"l":[],"aq":[]},"iK":{"aB":[],"aq":[]},"iM":{"ak":[]},"eI":{"ak":[]},"lC":{"jj":[]},"ro":{"w":["1"],"K":["1"],"W":["1"],"ak":[],"t":["1"]},"fb":{"aj":["1"]},"fo":{"y":[],"bF":[],"bv":["bF"]},"iJ":{"y":[],"k":[],"bF":[],"bv":["bF"],"aq":[]},"lE":{"y":[],"bF":[],"bv":["bF"],"aq":[]},"eH":{"f":[],"bv":["f"],"tp":[],"aq":[]},"eV":{"t":["2"]},"is":{"aj":["2"]},"ff":{"eV":["1","2"],"t":["2"],"t.E":"2"},"jE":{"ff":["1","2"],"eV":["1","2"],"W":["2"],"t":["2"],"t.E":"2"},"jC":{"a5":["2"],"K":["2"],"eV":["1","2"],"W":["2"],"t":["2"]},"bf":{"jC":["1","2"],"a5":["2"],"K":["2"],"eV":["1","2"],"W":["2"],"t":["2"],"t.E":"2","a5.E":"2"},"hu":{"av":[]},"dI":{"a5":["k"],"eO":["k"],"K":["k"],"W":["k"],"t":["k"],"a5.E":"k","eO.E":"k"},"W":{"t":["1"]},"a0":{"W":["1"],"t":["1"]},"jr":{"a0":["1"],"W":["1"],"t":["1"],"t.E":"1","a0.E":"1"},"ao":{"aj":["1"]},"cX":{"t":["2"],"t.E":"2"},"dK":{"cX":["1","2"],"W":["2"],"t":["2"],"t.E":"2"},"iQ":{"aj":["2"]},"G":{"a0":["2"],"W":["2"],"t":["2"],"t.E":"2","a0.E":"2"},"F":{"t":["1"],"t.E":"1"},"R":{"aj":["1"]},"fh":{"t":["2"],"t.E":"2"},"iB":{"aj":["2"]},"iz":{"aj":["1"]},"ea":{"t":["1"],"t.E":"1"},"jy":{"aj":["1"]},"hQ":{"a5":["1"],"eO":["1"],"K":["1"],"W":["1"],"t":["1"]},"bR":{"a0":["1"],"W":["1"],"t":["1"],"t.E":"1","a0.E":"1"},"a6":{"ed":[],"bk":[]},"fU":{"ed":[],"bk":[]},"jQ":{"ed":[],"bk":[]},"jR":{"ed":[],"bk":[]},"aJ":{"ee":[],"bk":[]},"aU":{"ee":[],"bk":[]},"jS":{"ee":[],"bk":[]},"jT":{"ee":[],"bk":[]},"cH":{"fT":[],"bk":[]},"jU":{"fT":[],"bk":[]},"iv":{"eP":["1","2"],"hZ":["1","2"],"hx":["1","2"],"k0":["1","2"],"V":["1","2"]},"he":{"V":["1","2"]},"a3":{"he":["1","2"],"V":["1","2"]},"fQ":{"t":["1"],"t.E":"1"},"ec":{"aj":["1"]},"de":{"he":["1","2"],"V":["1","2"]},"hf":{"ds":["1"],"e1":["1"],"W":["1"],"t":["1"]},"b_":{"hf":["1"],"ds":["1"],"e1":["1"],"W":["1"],"t":["1"]},"hp":{"hf":["1"],"ds":["1"],"e1":["1"],"W":["1"],"t":["1"]},"j0":{"e6":[],"av":[]},"lF":{"av":[]},"mB":{"av":[]},"jW":{"du":[]},"eA":{"fk":[]},"kS":{"fk":[]},"kT":{"fk":[]},"mx":{"fk":[]},"mv":{"fk":[]},"h8":{"fk":[]},"mi":{"av":[]},"cy":{"ai":["1","2"],"A0":["1","2"],"V":["1","2"],"ai.K":"1","ai.V":"2"},"ag":{"W":["1"],"t":["1"],"t.E":"1"},"c1":{"aj":["1"]},"an":{"W":["1"],"t":["1"],"t.E":"1"},"ae":{"aj":["1"]},"N":{"W":["O<1,2>"],"t":["O<1,2>"],"t.E":"O<1,2>"},"cW":{"aj":["O<1,2>"]},"fp":{"cy":["1","2"],"ai":["1","2"],"A0":["1","2"],"V":["1","2"],"ai.K":"1","ai.V":"2"},"ed":{"bk":[]},"ee":{"bk":[]},"fT":{"bk":[]},"iL":{"H1":[],"tp":[]},"nh":{"jb":[],"hy":[]},"mX":{"t":["jb"],"t.E":"jb"},"mY":{"aj":["jb"]},"jq":{"hy":[]},"ny":{"t":["hy"],"t.E":"hy"},"nz":{"aj":["hy"]},"hB":{"eJ":[],"ak":[],"aq":[]},"ft":{"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"eJ":{"ak":[],"aq":[]},"iZ":{"ak":[]},"lS":{"ak":[],"aq":[]},"bx":{"cf":["1"],"ak":[]},"iX":{"a5":["y"],"bx":["y"],"K":["y"],"cf":["y"],"W":["y"],"ak":[],"t":["y"],"aG":["y"]},"iY":{"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"]},"iW":{"q5":[],"a5":["y"],"bx":["y"],"K":["y"],"cf":["y"],"W":["y"],"ak":[],"t":["y"],"aG":["y"],"aq":[],"a5.E":"y","aG.E":"y"},"lT":{"q6":[],"a5":["y"],"bx":["y"],"K":["y"],"cf":["y"],"W":["y"],"ak":[],"t":["y"],"aG":["y"],"aq":[],"a5.E":"y","aG.E":"y"},"lU":{"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"lV":{"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"lW":{"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"lX":{"vD":[],"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"lY":{"vE":[],"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"j_":{"ca":[],"a5":["k"],"bx":["k"],"K":["k"],"cf":["k"],"W":["k"],"ak":[],"t":["k"],"aG":["k"],"aq":[],"a5.E":"k","aG.E":"k"},"n9":{"av":[]},"hY":{"e6":[],"av":[]},"d4":{"aj":["1"]},"cc":{"t":["1"],"t.E":"1"},"bt":{"av":[]},"jA":{"n2":["1"]},"au":{"b0":["1"]},"k7":{"CY":[]},"nq":{"k7":[],"CY":[]},"jF":{"ai":["1","2"],"V":["1","2"]},"jH":{"jF":["1","2"],"ai":["1","2"],"V":["1","2"],"ai.K":"1","ai.V":"2"},"fP":{"W":["1"],"t":["1"],"t.E":"1"},"jG":{"aj":["1"]},"cG":{"ds":["1"],"C1":["1"],"e1":["1"],"W":["1"],"t":["1"]},"fR":{"aj":["1"]},"a5":{"K":["1"],"W":["1"],"t":["1"]},"ai":{"V":["1","2"]},"jI":{"W":["2"],"t":["2"],"t.E":"2"},"jJ":{"aj":["2"]},"hx":{"V":["1","2"]},"eP":{"hZ":["1","2"],"hx":["1","2"],"k0":["1","2"],"V":["1","2"]},"ds":{"e1":["1"],"W":["1"],"t":["1"]},"jV":{"ds":["1"],"e1":["1"],"W":["1"],"t":["1"]},"hR":{"ds":["1"],"nD":["1"],"e1":["1"],"W":["1"],"t":["1"]},"ne":{"ai":["f","@"],"V":["f","@"],"ai.K":"f","ai.V":"@"},"nf":{"a0":["f"],"W":["f"],"t":["f"],"t.E":"f","a0.E":"f"},"kC":{"eB":["f","K<k>"]},"kJ":{"eB":["K<k>","f"]},"la":{"eB":["f","K<k>"]},"iN":{"av":[]},"lH":{"av":[]},"lG":{"eB":["L?","f"]},"mF":{"eB":["f","K<k>"]},"fg":{"bv":["fg"]},"y":{"bF":[],"bv":["bF"]},"dJ":{"bv":["dJ"]},"k":{"bF":[],"bv":["bF"]},"K":{"W":["1"],"t":["1"]},"bF":{"bv":["bF"]},"jb":{"hy":[]},"e1":{"W":["1"],"t":["1"]},"f":{"bv":["f"],"tp":[]},"n8":{"D":[]},"kE":{"av":[]},"e6":{"av":[]},"cP":{"av":[]},"hF":{"av":[]},"lx":{"av":[]},"jt":{"av":[]},"mA":{"av":[]},"hM":{"av":[]},"kU":{"av":[]},"m_":{"av":[]},"jo":{"av":[]},"nA":{"du":[]},"bK":{"Hp":[]},"k2":{"mD":[]},"nu":{"mD":[]},"n3":{"mD":[]},"nd":{"A9":[]},"eY":{"A9":[]},"l5":{"D":[]},"fw":{"D":[]},"hi":{"D":[]},"hd":{"D":[]},"mz":{"D":[]},"bQ":{"e_":[]},"bA":{"e_":[]},"cg":{"e_":[]},"cT":{"e_":[]},"m0":{"e_":[]},"fm":{"D":[]},"h5":{"D":[]},"iS":{"D":[]},"d1":{"D":[]},"l1":{"Ha":[]},"hI":{"D":[]},"hk":{"D":[]},"kN":{"D":[]},"it":{"D":[]},"hj":{"D":[]},"fA":{"D":[]},"fr":{"D":[]},"d_":{"D":[]},"e4":{"D":[]},"bq":{"D":[]},"fj":{"D":[]},"ll":{"H2":[]},"cx":{"D":[]},"jg":{"D":[]},"df":{"D":[]},"hH":{"D":[]},"aT":{"cB":[]},"jd":{"H5":[]},"mh":{"H7":[]},"nB":{"cB":[]},"nn":{"H4":[]},"na":{"G4":[]},"jn":{"D":[]},"c4":{"bv":["c4"]},"c_":{"bv":["c_"]},"hn":{"D":[]},"im":{"D":[]},"jB":{"D":[]},"ip":{"ar":[]},"n0":{"af":[]},"kO":{"ar":[]},"n1":{"af":[]},"l3":{"ar":[]},"n5":{"af":[]},"jD":{"D":[]},"ix":{"ar":[]},"n6":{"af":[]},"l8":{"ar":[]},"n7":{"af":[]},"lt":{"ar":[]},"nc":{"af":[]},"iV":{"ar":[]},"ni":{"af":[]},"kP":{"H3":[]},"j4":{"ar":[]},"no":{"af":[]},"mb":{"ar":[]},"np":{"af":[]},"mp":{"ar":[]},"ns":{"af":[]},"mq":{"ar":[]},"nt":{"af":[]},"mt":{"ar":[]},"nw":{"af":[]},"ms":{"ar":[]},"nv":{"af":[]},"mH":{"ar":[]},"nE":{"af":[]},"mQ":{"ar":[]},"nG":{"af":[]},"nF":{"af":[]},"mU":{"ar":[]},"nJ":{"af":[]},"lr":{"D":[]},"iC":{"D":[]},"iF":{"D":[]},"iG":{"D":[]},"fl":{"D":[]},"iD":{"D":[]},"fE":{"D":[]},"dv":{"D":[]},"hc":{"D":[]},"l4":{"FP":[]},"hq":{"D":[]},"hW":{"D":[]},"bz":{"D":[]},"kM":{"D":[]},"fe":{"D":[]},"l_":{"D":[]},"l2":{"D":[]},"ef":{"cR":[]},"mS":{"Gd":[]},"kH":{"D":[]},"dl":{"D":[]},"cv":{"D":[]},"dM":{"D":[]},"bw":{"D":[]},"iU":{"D":[]},"iT":{"D":[]},"kK":{"c6":[]},"kL":{"c6":[]},"kR":{"c6":[]},"lu":{"c6":[]},"lI":{"c6":[]},"lJ":{"c6":[]},"lL":{"c6":[]},"mr":{"c6":[]},"jK":{"dy":[]},"fi":{"D":[]},"dL":{"D":[]},"n4":{"c6":[]},"eD":{"D":[]},"eC":{"D":[]},"eF":{"D":[]},"m1":{"D":[]},"mf":{"D":[]},"hG":{"D":[]},"c7":{"D":[]},"dt":{"D":[]},"jm":{"D":[]},"c8":{"D":[]},"bJ":{"D":[]},"lz":{"D":[]},"fN":{"D":[]},"cC":{"D":[]},"eM":{"D":[]},"eU":{"D":[]},"fc":{"D":[]},"d9":{"D":[]},"cQ":{"D":[]},"da":{"D":[]},"dG":{"D":[]},"dF":{"D":[]},"ex":{"D":[]},"ey":{"D":[]},"fd":{"D":[]},"ew":{"D":[]},"dP":{"D":[]},"dc":{"D":[]},"dd":{"D":[]},"dQ":{"D":[]},"dO":{"D":[]},"dR":{"D":[]},"cw":{"D":[]},"dN":{"D":[]},"cS":{"D":[]},"kz":{"D":[]},"bH":{"D":[]},"cz":{"D":[]},"eL":{"D":[]},"cZ":{"D":[]},"c5":{"D":[]},"bS":{"D":[]},"jk":{"D":[]},"c0":{"D":[]},"cl":{"D":[]},"cm":{"D":[]},"eQ":{"D":[]},"dw":{"D":[]},"nm":{"Co":[]},"Gm":{"K":["k"],"W":["k"],"t":["k"]},"ca":{"K":["k"],"W":["k"],"t":["k"]},"Hs":{"K":["k"],"W":["k"],"t":["k"]},"Gk":{"K":["k"],"W":["k"],"t":["k"]},"vD":{"K":["k"],"W":["k"],"t":["k"]},"Gl":{"K":["k"],"W":["k"],"t":["k"]},"vE":{"K":["k"],"W":["k"],"t":["k"]},"q5":{"K":["y"],"W":["y"],"t":["y"]},"q6":{"K":["y"],"W":["y"],"t":["y"]}}'))
A.Il(v.typeUniverse,JSON.parse('{"hQ":1,"k8":2,"bx":1,"jV":1,"k1":1,"kZ":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",l:"#version 300 es\nout vec2 vUv;\nvoid main(){\n  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));\n  vUv=p;\n  gl_Position=vec4(p*2.0-1.0,0.0,1.0);\n}\n",E:"#version 300 es\nprecision highp float;\nin vec2 vUv;\nuniform sampler2D uTex;\nuniform float uExposure;\nuniform float uVignette;\nuniform float uGrain;\nuniform float uOutputEncoding;\nuniform float uToneMap;\nuniform vec3 uClearColor;\nuniform vec3 uSkyHorizon;\nuniform vec3 uSkyZenith;\nuniform vec3 uSkyGround;\nuniform float uSkyEnabled;\nuniform float uSkyHorizonGlow;\nuniform float uSkyStarDensity;\nuniform sampler2D uSkyTexture;\nuniform float uSkyTextureEnabled;\nuniform float uSkyRotation;\nuniform float uSkyExposure;\nuniform float uSkyTextureSrgb;\nuniform mat4 uInverseProjection;\nuniform mat4 uInverseView;\nuniform vec3 uCameraPosition;\nuniform float uCloudCoverage;\nuniform float uCloudDensity;\nuniform float uCloudBaseHeight;\nuniform float uCloudThickness;\nuniform float uCloudScale;\nuniform vec2 uCloudWind;\nuniform float uCloudPhase;\nuniform float uCloudDetail;\nuniform float uCloudSilverLining;\nuniform float uCloudSampleCount;\nuniform vec3 uCloudLightDirection;\nuniform vec3 uCloudLightColor;\nuniform float uCloudLightIntensity;\nout vec4 oColor;\n\nfloat hash(vec2 p){\n  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);\n}\n\nvec3 reinhardToneMap(vec3 color){\n  return color/(vec3(1.)+color);\n}\n\nvec3 acesToneMap(vec3 color){\n  return clamp((color*(2.51*color+0.03))/(color*(2.43*color+0.59)+0.14),0.0,1.0);\n}\n\nvec3 agxToneMap(vec3 color){\n  const mat3 agxMat=mat3(\n    0.842479062253094,0.0423282422610123,0.0423756549057051,\n    0.0784335999999992,0.878468636469772,0.0784336,\n    0.0792237451477643,0.0791661274605434,0.879142973793104\n  );\n  const mat3 agxMatInv=mat3(\n    1.19687902425764,-0.0528968517032958,-0.0529716355080549,\n    -0.0980208811401368,1.15190312990417,-0.0980434501171241,\n    -0.0990297440797205,-0.0989611768448433,1.15107367264185\n  );\n  vec3 val=agxMat*color;\n  val=clamp(log2(max(val,vec3(1e-10)))*0.0625+0.625,0.0,1.0);\n  val=val*val*val*(val*(val*6.0-15.0)+10.0);\n  val=agxMatInv*val;\n  return pow(max(val,vec3(0.0)),vec3(2.2));\n}\n\nvec3 linearToSrgb(vec3 color){\n  vec3 cutoff=step(vec3(.0031308),color);\n  vec3 low=color*12.92;\n  vec3 high=1.055*pow(max(color,vec3(0.)),vec3(1./2.4))-.055;\n  return mix(low,high,cutoff);\n}\n\nvec3 skyBackground(vec2 uv){\n  // A deliberately cheap, high-quality fallback sky: three atmospheric bands\n  // provide depth at every camera angle, while the tiny deterministic star\n  // field and horizon glow keep the clear background from reading as a flat\n  // color. It is an environment layer, not a game/weather simulation.\n  float lower=smoothstep(0.0,0.48,uv.y);\n  float upper=smoothstep(0.42,1.0,uv.y);\n  vec3 color=mix(uSkyGround,uSkyHorizon,lower);\n  color=mix(color,uSkyZenith,upper);\n  float horizonGlow=exp(-pow((uv.y-0.48)*7.0,2.0));\n  color+=uSkyHorizon*horizonGlow*clamp(uSkyHorizonGlow,0.,1.);\n  float starMask=smoothstep(0.62,0.92,uv.y);\n  float stars=step(1.0-clamp(uSkyStarDensity,0.,.1),hash(floor(uv*vec2(180.0,100.0))))*starMask;\n  color+=vec3(0.16,0.19,0.24)*stars;\n  return max(color,vec3(0.0));\n}\n\nfloat hash3(vec3 p){\n  return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);\n}\n\nfloat valueNoise(vec3 p){\n  vec3 i=floor(p);\n  vec3 f=fract(p);\n  f=f*f*(3.0-2.0*f);\n  float n000=hash3(i+vec3(0,0,0));\n  float n100=hash3(i+vec3(1,0,0));\n  float n010=hash3(i+vec3(0,1,0));\n  float n110=hash3(i+vec3(1,1,0));\n  float n001=hash3(i+vec3(0,0,1));\n  float n101=hash3(i+vec3(1,0,1));\n  float n011=hash3(i+vec3(0,1,1));\n  float n111=hash3(i+vec3(1,1,1));\n  float x00=mix(n000,n100,f.x);\n  float x10=mix(n010,n110,f.x);\n  float x01=mix(n001,n101,f.x);\n  float x11=mix(n011,n111,f.x);\n  return mix(mix(x00,x10,f.y),mix(x01,x11,f.y),f.z);\n}\n\nfloat cloudNoise(vec3 p){\n  float value=0.0;\n  float amplitude=0.5;\n  for(int octave=0;octave<4;octave++){\n    value+=valueNoise(p)*amplitude;\n    p=p*2.03+vec3(17.3,11.7,7.1);\n    amplitude*=0.5;\n  }\n  return value;\n}\n\nfloat cloudDensityAt(vec3 position){\n  float height01=clamp(\n    (position.y-uCloudBaseHeight)/max(uCloudThickness,0.001),\n    0.0,1.0\n  );\n  float vertical=smoothstep(0.0,0.12,height01)*\n    (1.0-smoothstep(0.72,1.0,height01));\n  vec3 q=position*max(uCloudScale,0.00001)+\n    vec3(uCloudWind.x*uCloudPhase,0.0,uCloudWind.y*uCloudPhase);\n  float macro=cloudNoise(q*0.82);\n  float detail=cloudNoise(q*2.7+vec3(23.0,5.0,41.0));\n  float shape=mix(macro,macro*0.68+detail*0.32,clamp(uCloudDetail,0.,1.));\n  float threshold=1.0-clamp(uCloudCoverage,0.,1.);\n  float body=smoothstep(threshold,threshold+0.26,shape);\n  return body*vertical*clamp(uCloudDensity,0.,1.);\n}\n\nvec4 volumetricClouds(vec3 worldDirection){\n  if(uCloudCoverage<=0.0001 || uCloudDensity<=0.0001 || worldDirection.y<=0.001){\n    return vec4(0.0);\n  }\n  float directionY=max(worldDirection.y,0.001);\n  float startT=(uCloudBaseHeight-uCameraPosition.y)/directionY;\n  float endT=(uCloudBaseHeight+uCloudThickness-uCameraPosition.y)/directionY;\n  startT=max(startT,0.0);\n  endT=max(endT,0.0);\n  if(endT<=startT) return vec4(0.0);\n  int sampleCount=int(clamp(uCloudSampleCount,4.,24.));\n  float stepLength=(endT-startT)/float(sampleCount);\n  float jitter=(hash(gl_FragCoord.xy+vec2(uCloudPhase*0.013))-0.5)*stepLength;\n  vec3 sunDirection=normalize(-uCloudLightDirection);\n  float transmittance=1.0;\n  vec3 inScatter=vec3(0.0);\n  for(int i=0;i<24;i++){\n    if(i>=sampleCount) break;\n    float t=startT+(float(i)+0.5)*stepLength+jitter;\n    vec3 position=uCameraPosition+worldDirection*t;\n    float density=cloudDensityAt(position);\n    float opticalDepth=density*stepLength*0.0035;\n    float segmentAlpha=1.0-exp(-opticalDepth);\n    float towardLight=cloudDensityAt(position+sunDirection*90.0);\n    float lightTransmittance=exp(-towardLight*0.025);\n    float phase=0.72+0.28*pow(max(dot(-worldDirection,sunDirection),0.0),2.0);\n    vec3 ambient=uSkyHorizon*0.32;\n    vec3 direct=uCloudLightColor*\n      (0.14+0.86*clamp(uCloudLightIntensity,0.,1.5))*phase;\n    float edge=pow(1.0-clamp(density,0.,1.),3.0)*uCloudSilverLining*0.22;\n    vec3 sampleLight=(ambient+direct)*lightTransmittance+vec3(edge);\n    inScatter+=transmittance*segmentAlpha*sampleLight;\n    transmittance*=1.0-segmentAlpha;\n    if(transmittance<0.01) break;\n  }\n  return vec4(inScatter,1.0-transmittance);\n}\n\nvec3 srgbToLinear(vec3 color){\n  vec3 low=color/12.92;\n  vec3 high=pow((color+0.055)/1.055,vec3(2.4));\n  return mix(low,high,step(vec3(0.04045),color));\n}\n\nvec3 worldDirectionForUv(vec2 uv){\n  vec2 ndc=uv*2.0-1.0;\n  vec4 viewPoint=uInverseProjection*vec4(ndc,1.0,1.0);\n  return normalize(viewPoint.xyz/viewPoint.w);\n}\n\nvec3 equirectangularSky(vec2 uv){\n  vec3 worldDirection=normalize((uInverseView*vec4(worldDirectionForUv(uv),0.0)).xyz);\n  float longitude=atan(worldDirection.z,worldDirection.x)+uSkyRotation;\n  float latitude=asin(clamp(worldDirection.y,-1.0,1.0));\n  vec2 sampleUv=vec2(\n    fract(longitude/(2.0*3.14159265359)+0.5),\n    0.5-latitude/3.14159265359\n  );\n  vec3 encoded=max(texture(uSkyTexture,sampleUv).rgb,vec3(0.0));\n  vec3 linear=mix(encoded,srgbToLinear(encoded),clamp(uSkyTextureSrgb,0.,1.));\n  return linear*max(uSkyExposure,0.0);\n}\n\nvec4 applyFxaa(sampler2D tex, vec2 uv){\n  vec2 texelSize=1.0/vec2(textureSize(tex,0));\n  vec3 rgbM=texture(tex,uv).rgb;\n  vec3 rgbNW=texture(tex,uv+vec2(-texelSize.x,-texelSize.y)).rgb;\n  vec3 rgbNE=texture(tex,uv+vec2( texelSize.x,-texelSize.y)).rgb;\n  vec3 rgbSW=texture(tex,uv+vec2(-texelSize.x, texelSize.y)).rgb;\n  vec3 rgbSE=texture(tex,uv+vec2( texelSize.x, texelSize.y)).rgb;\n\n  const vec3 luma=vec3(0.299,0.587,0.114);\n  float lumaM =dot(rgbM, luma);\n  float lumaNW=dot(rgbNW,luma);\n  float lumaNE=dot(rgbNE,luma);\n  float lumaSW=dot(rgbSW,luma);\n  float lumaSE=dot(rgbSE,luma);\n\n  float lumaMin=min(lumaM,min(min(lumaNW,lumaNE),min(lumaSW,lumaSE)));\n  float lumaMax=max(lumaM,max(max(lumaNW,lumaNE),max(lumaSW,lumaSE)));\n\n  float range=lumaMax-lumaMin;\n  if(range<max(0.04,lumaMax*0.125)){\n    return vec4(rgbM,1.0);\n  }\n\n  vec2 dir=vec2(\n    -((lumaNW+lumaNE)-(lumaSW+lumaSE)),\n    ((lumaNW+lumaSW)-(lumaNE+lumaSE))\n  );\n  float dirReduce=max((lumaNW+lumaNE+lumaSW+lumaSE)*0.03125,0.0078125);\n  float rcpDirMin=1.0/(min(abs(dir.x),abs(dir.y))+dirReduce);\n  dir=min(vec2(8.0),max(vec2(-8.0),dir*rcpDirMin))*texelSize;\n\n  vec3 rgbA=0.5*(\n    texture(tex,uv+dir*(1.0/3.0-0.5)).rgb+\n    texture(tex,uv+dir*(2.0/3.0-0.5)).rgb\n  );\n  vec3 rgbB=rgbA*0.5+0.25*(\n    texture(tex,uv+dir*-0.5).rgb+\n    texture(tex,uv+dir* 0.5).rgb\n  );\n  float lumaB=dot(rgbB,luma);\n  if((lumaB<lumaMin)||(lumaB>lumaMax)){\n    return vec4(rgbA,1.0);\n  }\n  return vec4(rgbB,1.0);\n}\n\nvoid main(){\n  vec4 rawSource=texture(uTex,vUv);\n  bool isBackground=uSkyEnabled>0.5 && distance(rawSource.rgb,uClearColor)<0.004;\n  vec4 source=isBackground?rawSource:applyFxaa(uTex,vUv);\n  // Lens spectral dispersion (radial chromatic aberration towards viewport edges)\n  if(!isBackground){\n    vec2 centerOffset=vUv-vec2(0.5);\n    float distSq=dot(centerOffset,centerOffset);\n    if(distSq>0.04){\n      vec2 chromaOffset=centerOffset*distSq*0.010;\n      source.r=applyFxaa(uTex,vUv-chromaOffset).r;\n      source.b=applyFxaa(uTex,vUv+chromaOffset).b;\n    }\n  }\n  // The world pass clears untouched pixels to uClearColor. Replace only that\n  // exact background, so the sky is always active without covering geometry.\n  if(isBackground){\n    vec3 viewDirection=worldDirectionForUv(vUv);\n    vec3 worldDirection=normalize((uInverseView*vec4(viewDirection,0.0)).xyz);\n    source.rgb=uSkyTextureEnabled>0.5\n      ? equirectangularSky(vUv)\n      : skyBackground(vUv);\n    vec4 clouds=volumetricClouds(worldDirection);\n    source.rgb=source.rgb* (1.0-clouds.a)+clouds.rgb;\n  }\n  // Exposure operates in scene-linear space; tone mapping prevents HDR\n  // highlights from clipping before the selected output transfer function.\n  vec3 color=max(source.rgb,vec3(0.))*max(uExposure,0.);\n  vec3 mapped=uToneMap>3.0\n    ?agxToneMap(color)\n    :(uToneMap>1.5?acesToneMap(color):reinhardToneMap(color));\n  float toneMix=uToneMap>3.0\n    ?clamp((uToneMap-3.0)*2.0,0.,1.)\n    :(uToneMap>1.5?clamp(uToneMap-1.5,0.,1.):clamp(uToneMap,0.,1.));\n  color=mix(color,mapped,toneMix);\n  float edge=distance(vUv,vec2(.5));\n  float vignette=smoothstep(.35,.78,edge);\n  color*=1.-clamp(uVignette,0.,1.)*vignette;\n  if(uOutputEncoding>.5) color=linearToSrgb(max(color,vec3(0.)));\n  // Atmospheric precipitation is submitted as depth-tested world geometry;\n  // the present pass must never paint weather over unrelated surfaces.\n  // A stable screen-space grain keeps captures reproducible for a fixed\n  // viewport while still giving the dark gothic presentation a fine film\n  // texture. It is deliberately tiny and never changes alpha.\n  color+=((hash(gl_FragCoord.xy)-.5)*.06)*max(uGrain,0.);\n  oColor=vec4(clamp(color,0.,1.),source.a);\n}\n",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:"WebGl2Device: operation attempted while context is not ready",w:"max must be in range 0 < max \u2264 2^32, was ",F:'{\n  "houseId": "quarantine-house-main",\n  "sourceRef": "lib/house/house.dart",\n  "status": "canonical-v1",\n  "presentationScope": "provisional-visible-place",\n  "storyAuthority": "external-story-data",\n  "modelScale": 2.25,\n  "exteriorMesh": {"format":"QHMX","version":1,"path":"assets/house/exterior/main_shell.qhmx","materialsPath":"assets/house/exterior/materials.json","viewOnly":true,"wallThickness":0.63,"partitionThickness":0.27},\n  "inventoryPath": "assets/house/inventory.json",\n  "soundscapePath": "assets/house/soundscape.json",\n  "surfaceMaterialsPath": "assets/house/materials.json",\n  "residence": {"roomId":"living-room","spawn":[1.55,0,2.35],"restAnchor":"placement-living-sofa","returnPortalId":"hall-living"},\n  "levels": [\n    {"id":"cellar","kind":"below-grade","floorY":-2.0},\n    {"id":"ground","kind":"ground","floorY":0.0},\n    {"id":"first","kind":"first","floorY":2.8}\n  ],\n  "rooms": [\n    {"id":"living-room","floor":"ground","origin":[0,0,0],"size":[4.5,2.6,4.0],"surface":{"wall":"wallpaper-stripes","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"living-north-west","facing":"north","offset":0.5,"sill":0.6,"width":1.2,"height":1.2},{"id":"living-north-east","facing":"north","offset":2.7,"sill":0.6,"width":1.2,"height":1.2}],"portalIds":["hall-living","kitchen-living"],"focalComposition":{"anchor":"fireplace-wireless","clearRoute":[[3.85,0.0,0.35],[4.5,0.0,1.8]],"furnitureScale":5,"microScale":20}},\n    {"id":"hall","floor":"ground","origin":[4.5,0,0],"size":[2.5,2.6,7.0],"surface":{"wall":"wallpaper-damask","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"hall-fanlight","facing":"north","offset":0.85,"sill":2.15,"width":0.8,"height":0.35}],"portalIds":["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],"focalComposition":{"anchor":"front-door-clock","clearRoute":[[5.75,0.0,0.2],[5.75,2.8,5.9]],"furnitureScale":6,"microScale":24}},\n    {"id":"kitchen","floor":"ground","origin":[0,0,4.0],"size":[4.5,2.5,3.0],"surface":{"wall":"wallpaper-floral","floor":"floor-linoleum","ceiling":"ceiling-plaster"},"windows":[{"id":"kitchen-south","facing":"south","offset":1.5,"sill":0.7,"width":1.2,"height":1.1},{"id":"kitchen-west","facing":"west","offset":1.0,"sill":0.8,"width":0.9,"height":1.0}],"portalIds":["hall-kitchen","kitchen-living"],"focalComposition":{"anchor":"range-worktable","clearRoute":[[4.2,0.0,4.45],[3.4,0.0,6.5]],"furnitureScale":7,"microScale":28}},\n    {"id":"cellar","floor":"cellar","origin":[1.0,-2.0,2.0],"size":[4.0,2.0,4.0],"surface":{"wall":"wallpaper-damp","floor":"floor-concrete","ceiling":"ceiling-pipes"},"windows":[],"portalIds":["hall-cellar"],"focalComposition":{"anchor":"coal-service-wall","clearRoute":[[4.2,-2.0,3.0],[2.0,-2.0,5.6]],"furnitureScale":4,"microScale":15}},\n    {"id":"bedroom","floor":"first","origin":[0,2.8,0],"size":[4.5,2.4,4.0],"surface":{"wall":"wallpaper-faded","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"bedroom-north-west","facing":"north","offset":0.7,"sill":0.7,"width":1.1,"height":1.1},{"id":"bedroom-north-east","facing":"north","offset":2.7,"sill":0.7,"width":1.0,"height":1.1}],"portalIds":["landing-bedroom"],"focalComposition":{"anchor":"bed-journal-desk","clearRoute":[[4.2,2.8,0.3],[3.6,2.8,3.4]],"furnitureScale":6,"microScale":22}},\n    {"id":"landing","floor":"first","origin":[4.5,2.8,0],"size":[2.5,2.4,3.0],"surface":{"wall":"wallpaper-damask","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[],"portalIds":["hall-landing","landing-bedroom","landing-bathroom","landing-spare"],"focalComposition":{"anchor":"stair-newel","clearRoute":[[5.7,2.8,0.3],[5.7,2.8,2.7]],"furnitureScale":3,"microScale":12}},\n    {"id":"bathroom","floor":"first","origin":[4.5,2.8,3.0],"size":[2.5,2.4,2.5],"surface":{"wall":"wallpaper-tiles","floor":"floor-tiles","ceiling":"ceiling-plaster"},"windows":[{"id":"bathroom-east","facing":"east","offset":0.9,"sill":1.0,"width":0.7,"height":1.0,"frosted":true}],"portalIds":["landing-bathroom"],"focalComposition":{"anchor":"bath-cistern","clearRoute":[[4.8,2.8,3.2],[6.7,2.8,4.5]],"furnitureScale":4,"microScale":16}},\n    {"id":"spare-room","floor":"first","origin":[0,2.8,4.0],"size":[4.5,2.1,3.0],"surface":{"wall":"wallpaper-peeling","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"spare-south","facing":"south","offset":1.8,"sill":0.7,"width":0.9,"height":0.9}],"portalIds":["landing-spare"],"focalComposition":{"anchor":"sheeted-furniture","clearRoute":[[4.1,2.8,4.3],[2.6,2.8,6.6]],"furnitureScale":5,"microScale":18}}\n  ],\n  "portals": [\n    {"id":"front-door","a":"hall","b":"outside","facingA":"north","facingB":"south","offsetA":0.8,"offsetB":0.0,"width":0.9,"height":2.1,"doorKit":"kit-front-door-recessed","exterior":true},\n    {"id":"hall-living","a":"hall","b":"living-room","facingA":"west","facingB":"east","offsetA":1.8,"offsetB":1.8,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"hall-kitchen","a":"hall","b":"kitchen","facingA":"west","facingB":"east","offsetA":4.9,"offsetB":1.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"kitchen-living","a":"kitchen","b":"living-room","facingA":"north","facingB":"south","offsetA":2.0,"offsetB":2.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"hall-cellar","a":"hall","b":"cellar","facingA":"south","facingB":"east","offsetA":0.5,"offsetB":1.5,"width":0.9,"height":2.0,"doorKit":"kit-cellar-door-grille","open":false,"sticks":true},\n    {"id":"hall-landing","a":"hall","b":"landing","facingA":"east","facingB":"east","offsetA":4.0,"offsetB":0.7,"width":1.2,"height":2.1,"stair":true},\n    {"id":"landing-bedroom","a":"landing","b":"bedroom","facingA":"west","facingB":"east","offsetA":1.0,"offsetB":1.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"landing-bathroom","a":"landing","b":"bathroom","facingA":"south","facingB":"north","offsetA":1.0,"offsetB":0.8,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},\n    {"id":"landing-spare","a":"landing","b":"spare-room","facingA":"south","facingB":"north","offsetA":0.1,"offsetB":2.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"}\n  ],\n  "stairs": [{"id":"hall-stairs","portalId":"hall-landing","landingHeights":[1.4,2.8,4.2],"min":[5.0,0,2.8],"max":[6.5,4.2,6.0],"lowerEye":[5.75,1.65,5.8],"upperEye":[5.75,4.45,2.2]}],\n  "exteriorCells":["front","rear-service","side-boundary","roof-drainage","street","opposite-house","neighbor-roofs"]\n}'}
var t=(function rtii(){var s=A.a2
return{mq:s("d9"),dx:s("ik"),bC:s("cO"),Dd:s("bY"),oz:s("ac"),zU:s("ep"),v:s("bt"),iF:s("kG"),ul:s("dF"),EL:s("da"),xs:s("cQ"),gc:s("dG"),t3:s("kI"),mD:s("er"),lT:s("es"),bJ:s("et"),gI:s("eu"),ya:s("ev"),z3:s("c_"),Bu:s("h9"),ml:s("iq"),je:s("be"),rO:s("hb"),sU:s("dI"),hO:s("bv<@>"),CH:s("iu"),w:s("a3<f,f>"),I:s("a3<f,k>"),M:s("b_<f>"),f7:s("fg"),fP:s("c0"),yb:s("dJ"),he:s("W<@>"),yW:s("cv"),g:s("ce"),Ct:s("D"),yt:s("av"),hl:s("a9"),B:s("q5"),cE:s("q6"),pH:s("b4"),Fr:s("db"),BO:s("fk"),jI:s("bw"),ls:s("b0<aB>"),xJ:s("b0<f>(f)"),zL:s("b0<ca>(f)"),tX:s("b0<ca>(f,f)"),vS:s("dN"),aJ:s("dO"),x:s("cw"),bK:s("dP"),gm:s("dQ"),dn:s("dc"),mx:s("dR"),j_:s("dd"),EJ:s("de<c5,f>"),_:s("cR"),Eb:s("cS"),qX:s("eF"),mF:s("dh"),iO:s("cT"),oW:s("di"),fl:s("cU"),FA:s("t<iu>"),CB:s("t<dm>"),xw:s("t<dp>"),Eh:s("t<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(f,y,y,f,y,y,y)>"),yT:s("t<f>"),x6:s("t<c9>"),A1:s("t<eT>"),oJ:s("t<y>"),tY:s("t<@>"),iC:s("t<k>"),Fg:s("w<cO>"),n1:s("w<bY>"),L:s("w<ac>"),lE:s("w<kB>"),t9:s("w<ep>"),AO:s("w<iq>"),jC:s("w<be>"),km:s("w<hb>"),sa:s("w<ct>"),ns:s("w<l9>"),U:s("w<ce>"),uH:s("w<ld>"),Dl:s("w<a9>"),xn:s("w<lh>"),A5:s("w<li>"),p:s("w<bw>"),bM:s("w<lm>"),iJ:s("w<b0<~>>"),pC:s("w<lo>"),C1:s("w<cR>"),ka:s("w<bG>"),Fm:s("w<fn>"),op:s("w<dg>"),hr:s("w<dT>"),s3:s("w<cT>"),e:s("w<ak>"),Bv:s("w<lK>"),yH:s("w<lM>"),Bq:s("w<O<f,f>>"),rq:s("w<V<f,L>>"),A7:s("w<V<f,f>>"),cs:s("w<V<f,@>>"),bk:s("w<V<f,L?>>"),a6:s("w<dm>"),p0:s("w<ch>"),d:s("w<bQ>"),w4:s("w<fs>"),pq:s("w<ay>"),bA:s("w<dV>"),xz:s("w<bI>"),s0:s("w<fu>"),hc:s("w<dn>"),ea:s("w<dW>"),Fk:s("w<m4>"),qP:s("w<cj>"),W:s("w<cA>"),d8:s("w<j5>"),Fa:s("w<j6>"),D:s("w<a_>"),fH:s("w<j9>"),F7:s("w<dp>"),vN:s("w<ja>"),kv:s("w<fz>"),nR:s("w<+(f,K<cj>)>"),kd:s("w<+(f,f)>"),c2:s("w<+(f,A)>"),rh:s("w<+influence,light(y,bT)>"),z4:s("w<+influence,source(y,co)>"),wt:s("w<+(k,f)>"),ff:s("w<+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(f,y,y,f,y,y,y)>"),e_:s("w<ar>"),u:s("w<af>"),Ft:s("w<jd>"),C:s("w<Q>"),h1:s("w<aQ>"),s2:s("w<cB>"),eY:s("w<fB>"),xB:s("w<dr>"),rn:s("w<mj>"),gg:s("w<mk>"),E:s("w<e0>"),yv:s("w<ml>"),wM:s("w<mm>"),hT:s("w<cD>"),El:s("w<hL>"),AM:s("w<b9<c_>>"),fs:s("w<b9<c4>>"),cv:s("w<bT>"),DZ:s("w<fG>"),s:s("w<f>"),r8:s("w<c9>"),fa:s("w<ck>"),E7:s("w<hP>"),k:s("w<A>"),fi:s("w<a>"),v5:s("w<bi>"),ld:s("w<jx>"),Dc:s("w<e9>"),Fi:s("w<cn>"),jV:s("w<dx>"),xL:s("w<co>"),su:s("w<eR>"),wb:s("w<eS>"),eQ:s("w<cE>"),uI:s("w<eT>"),yo:s("w<fJ>"),nm:s("w<fL>"),uk:s("w<bN>"),wf:s("w<jK>"),il:s("w<eX>"),ow:s("w<nk>"),j5:s("w<nl>"),pv:s("w<hV>"),Fy:s("w<eZ<c2>>"),EM:s("w<eZ<c3>>"),w_:s("w<eZ<aQ>>"),f2:s("w<eZ<dz>>"),n:s("w<y>"),zz:s("w<@>"),t:s("w<k>"),Cf:s("w<L?>"),AN:s("w<bF>"),h:s("iK"),m:s("ak"),ud:s("dU"),yO:s("cf<@>"),AQ:s("K<be>"),hk:s("K<ce>"),b:s("K<bG>"),xp:s("K<cT>"),nx:s("K<ak>"),rW:s("K<V<f,f>>"),qr:s("K<bQ>"),R:s("K<ay>"),fG:s("K<dn>"),Es:s("K<cj>"),DX:s("K<+(f,f)>"),pL:s("K<+(k,f)>"),bE:s("K<aQ>"),fx:s("K<dr>"),r6:s("K<e0>"),yu:s("K<cD>"),a:s("K<f>"),uh:s("K<jx>"),D0:s("K<e9>"),cf:s("K<cn>"),p7:s("K<dx>"),dd:s("K<y>"),j:s("K<@>"),J:s("K<k>"),ik:s("K<ak?>"),vX:s("K<L?>"),m2:s("iP"),h6:s("O<f,b4>"),gJ:s("O<f,db>"),q:s("O<f,f>"),no:s("O<f,bA>"),AC:s("O<@,@>"),ou:s("O<k,f>"),pr:s("O<k,@>"),yx:s("O<f,K<f>>"),fq:s("O<f,V<f,@>>"),mf:s("V<f,cR>"),vD:s("V<f,cg>"),of:s("V<f,L>"),ap:s("V<f,ay>"),G:s("V<f,f>"),qH:s("V<f,e4>"),m0:s("V<f,l>"),gG:s("V<f,y>"),P:s("V<f,@>"),f:s("V<@,@>"),eU:s("V<k,f>"),pG:s("V<k,fH>"),tQ:s("V<k,fI>"),Bx:s("V<f,K<f>>"),oZ:s("V<f,L?>"),q1:s("V<cm,K<cn>>"),ee:s("V<k,V<f,f>>"),dH:s("G<k,f>"),jT:s("G<f,f?>"),w1:s("c2"),pw:s("cg"),jt:s("dm"),wl:s("ch"),kc:s("bQ"),aw:s("fs"),mL:s("hz"),rV:s("hB"),mV:s("ft"),c:s("aB"),K:s("L"),Cx:s("L(hD)"),BB:s("c4"),A:s("ay"),oP:s("dV"),wJ:s("bH"),E4:s("bI"),A_:s("dW"),o:s("cj"),DL:s("j3"),AB:s("m6"),yi:s("hC"),rx:s("j5"),c_:s("j6"),zC:s("m8"),px:s("a_"),xK:s("dZ"),cw:s("j9"),z0:s("dp"),Dp:s("ja"),Y:s("fz"),iM:s("LH"),ep:s("+()"),k0:s("+(bQ,c3)"),ut:s("+(bA,dz)"),rf:s("+(y,y)"),mn:s("+influence,light(y,bT)"),bG:s("+influence,source(y,co)"),tK:s("+effectiveScore,light,score(y,be,y)"),bo:s("+cue,gainLinear,highPassHz,id,lowPassHz,reverbSend01,stereoPan(f,y,y,f,y,y,y)"),ez:s("jb"),wZ:s("af"),lg:s("je"),tc:s("dq<cT,aQ>"),ja:s("dq<cg,c2>"),wm:s("dq<bQ,c3>"),qq:s("dq<bA,dz>"),j2:s("Q"),m3:s("aQ"),yz:s("cB"),V:s("fB"),lW:s("bo"),F3:s("dr"),Dm:s("e0"),Q:s("e1<f>"),oG:s("e1<k>"),en:s("bS"),gl:s("bp"),gn:s("c7"),r:s("cD"),u5:s("bJ"),is:s("c8"),ho:s("hL"),EH:s("b9<c_>"),E0:s("b9<c4>"),l:s("du"),w8:s("fG"),qL:s("bz"),N:s("f"),dc:s("f(k)"),Aj:s("bA"),jP:s("c9"),k_:s("ck"),bp:s("e4"),sg:s("aq"),bs:s("e6"),ys:s("vD"),tu:s("vE"),uo:s("ca"),qF:s("eN"),hL:s("eP<f,f>"),qt:s("mC"),eP:s("mD"),zo:s("mG"),cV:s("A"),a7:s("a"),qY:s("bi"),T:s("cb"),gM:s("cl"),hF:s("cm"),vw:s("fH"),BX:s("fI"),aA:s("e9"),AP:s("cn"),sy:s("mP"),bB:s("bC"),aS:s("dx"),cZ:s("eR"),EI:s("eS"),uz:s("cE"),qR:s("eT"),fu:s("fJ"),xe:s("hT"),fw:s("F<c0>"),vL:s("F<cv>"),vK:s("F<cw>"),Fj:s("F<bJ>"),rZ:s("F<c8>"),vY:s("F<f>"),g2:s("F<cl>"),ni:s("F<cm>"),rt:s("R<bS>"),xG:s("R<bp>"),fW:s("fL"),hR:s("au<@>"),BT:s("jH<L?,L?>"),gE:s("aT"),Ez:s("dy"),rL:s("hU"),xT:s("eX"),la:s("nj"),qS:s("jP"),jS:s("hX"),EF:s("cc<+(f,bA)>"),oe:s("cc<e0>"),a_:s("k4"),iX:s("k5"),jm:s("k6"),y:s("l"),Bs:s("l()"),C3:s("l(h7)"),kr:s("l(c0)"),e2:s("l(cv)"),rg:s("l(cw)"),bl:s("l(L)"),pz:s("l(bS)"),aV:s("l(bp)"),y2:s("l(bJ)"),ty:s("l(c8)"),Ag:s("l(f)"),da:s("l(cl)"),u_:s("l(cm)"),i:s("y"),z:s("@"),pF:s("@()"),h_:s("@(L)"),nW:s("@(L,du)"),S:s("k"),eZ:s("b0<aB>?"),r9:s("w<L?>?"),gt:s("ak?"),rK:s("K<@>?"),yq:s("V<@,@>?"),jd:s("V<f,K<f>>?"),X:s("L?"),dM:s("Co?"),dR:s("f?"),oI:s("f?(f)"),Fx:s("ca?"),F:s("eb<@,@>?"),Af:s("ng?"),k7:s("l?"),wK:s("l(hJ)?"),u6:s("y?"),lo:s("k?"),s7:s("bF?"),Z:s("~()?"),Cv:s("~(eo)?"),kC:s("~(eq)?"),pf:s("~(hg)?"),hq:s("~(ho)?"),CA:s("~(dS)?"),hQ:s("~(c5)?"),Ci:s("~(bS)?"),nf:s("~(c8,bJ)?"),DI:s("~(f,y)?"),xl:s("~(l)?"),vR:s("~(k)?"),dt:s("~(k,f)?"),fY:s("bF"),H:s("~"),O:s("~()"),m1:s("~(f,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ki=J.lA.prototype
B.a=J.w.prototype
B.d=J.iJ.prototype
B.b=J.fo.prototype
B.c=J.eH.prototype
B.kk=J.dU.prototype
B.kl=J.iM.prototype
B.n=A.iW.prototype
B.a9=A.j_.prototype
B.e6=J.m2.prototype
B.cm=J.eN.prototype
B.aq=new A.d9(1,"standard")
B.W=new A.ky(B.aq)
B.cv=new A.d9(0,"concise")
B.cw=new A.d9(2,"verbose")
B.aJ=new A.eo(null,null,null,null,null)
B.tP=new A.kz(0,"none")
B.a6=new A.h5(0,"opaque")
B.b7=new A.h5(1,"masked")
B.X=new A.h5(2,"blended")
B.eU=new A.kD(!1,127)
B.eV=new A.kD(!0,127)
B.b8=new A.im(0,"world")
B.eW=new A.im(1,"camera")
B.eX=new A.kH(4,"ambience")
B.cA=new A.cQ(3,"mono")
B.b9=new A.dG(0,"full")
B.cz=new A.cQ(0,"auto")
B.cy=new A.da(1,"standard")
B.cx=new A.dF(0,"defaultMix")
B.ba=new A.eq(B.cz,B.cy,B.b9,B.cx)
B.f3=new A.fc(0,"broadcast")
B.f4=new A.fc(1,"visitor")
B.f5=new A.fc(2,"aftermath")
B.f6=new A.fc(3,"ending")
B.b_=new A.mf(0,"pixeldart")
B.f7=new A.io(B.b_,!0,!1,null,!1,null)
B.f8=new A.io(B.b_,!1,!1,null,!1,null)
B.cC=new A.ew(1,"capturing")
B.f9=new A.dH(B.cC,null)
B.cD=new A.ew(3,"rejected")
B.bb=new A.dH(B.cD,null)
B.cE=new A.ew(4,"applied")
B.cB=new A.dH(B.cE,null)
B.cF=new A.ew(5,"cancelled")
B.fa=new A.dH(B.cF,null)
B.bc=new A.ew(2,"conflict")
B.aK=new A.kM(0,"add")
B.fe=new A.fe(0,"zero")
B.ar=new A.fe(1,"one")
B.z=new A.kN(0,"alpha")
B.P=new A.ex(1,"button")
B.t=new A.ey(0,"normal")
B.fh=new A.bu("settings.back",B.P,"back","back to pause menu",B.t)
B.aL=new A.ex(0,"heading")
B.fi=new A.bu("settings.heading",B.aL,"Settings",null,B.t)
B.fj=new A.bu("settings.controls.heading",B.aL,"Controls",null,B.t)
B.fk=new A.bu("settings.controls.back",B.P,"back","back to settings categories",B.t)
B.fl=new A.bu("pause.heading",B.aL,"Paused",null,B.t)
B.fm=new A.ex(3,"slider")
B.fn=new A.ex(4,"toggle")
B.cG=new A.ex(5,"keybind")
B.aM=new A.ey(5,"disabled")
B.fo=new A.ey(6,"error")
B.fp=new A.ey(7,"destructive")
B.cH=new A.ey(8,"remapping")
B.cI=new A.ik()
B.fq=new A.ow()
B.fr=new A.kC()
B.fs=new A.oC()
B.tQ=new A.ph()
B.ft=new A.kJ()
B.cJ=new A.pt()
B.fu=new A.iz(A.a2("iz<0&>"))
B.cK=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.fv=function() {
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
B.fA=function(getTagFallback) {
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
B.fw=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.fz=function(hooks) {
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
B.fy=function(hooks) {
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
B.fx=function(hooks) {
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
B.cL=function(hooks) { return hooks; }

B.f=new A.lG()
B.fB=new A.t1()
B.fC=new A.m_()
B.tS=new A.tz()
B.fD=new A.tA()
B.cM=new A.tC()
B.fE=new A.tG()
B.fF=new A.tK()
B.fG=new A.uc()
B.fH=new A.dr()
B.b0=new A.cC(1,"gradeLUT")
B.fI=new A.dr()
B.fJ=new A.ug()
B.fK=new A.ui()
B.h=new A.up()
B.cN=new A.mF()
B.cO=new A.vJ()
B.tR=new A.l1()
B.fL=new A.wf()
B.bd=new A.nd()
B.D=new A.nq()
B.aN=new A.nA()
B.fM=new A.ha(1.3089969389957472,0.1,60)
B.fN=new A.ha(1.0471975511965976,0.1,60)
B.fO=new A.ha(0.8726646259971648,0.08,45)
B.Y=new A.hc(0,"colorOnly")
B.cP=new A.hc(1,"colorAndDepth")
B.be=new A.hc(2,"depthOnly")
B.fP=new A.it(0,"linear")
B.bf=new A.it(1,"srgb")
B.cQ=new A.hd(0,"open")
B.fQ=new A.hd(1,"committed")
B.fR=new A.hd(2,"aborted")
B.bg=new A.hi(0,"open")
B.fY=new A.hi(1,"committed")
B.fZ=new A.hi(2,"rolledBack")
B.aO=new A.l_(1,"back")
B.aP=new A.l2(0,"less")
B.h_=new A.hj(0,"off")
B.cR=new A.hj(1,"errorsOnly")
B.h0=new A.hj(2,"full")
B.cS=new A.l5(2,"error")
B.aQ=new A.c0(0,"open")
B.cT=new A.c0(1,"chain")
B.cU=new A.c0(2,"throughDoor")
B.cV=new A.c0(3,"letterbox")
B.as=new A.c0(4,"ignore")
B.C=new A.hk(0,"opaque")
B.h1=new A.hk(1,"masked")
B.at=new A.hk(2,"blended")
B.cW=new A.hl(!1,B.aP,!1,!0,B.ar,B.ar,B.aK,!1,B.aO,!0,!1,!0,!0,!0,!0,!1)
B.h2=new A.hl(!0,B.aP,!1,!0,B.ar,B.ar,B.aK,!0,B.aO,!0,!1,!0,!0,!0,!0,!1)
B.ff=new A.fe(2,"srcAlpha")
B.fg=new A.fe(3,"oneMinusSrcAlpha")
B.h3=new A.hl(!0,B.aP,!1,!0,B.ff,B.fg,B.aK,!0,B.aO,!0,!1,!0,!0,!0,!0,!1)
B.h4=new A.dJ(0)
B.h5=new A.dJ(22e4)
B.h6=new A.dJ(24e5)
B.cX=new A.cv(0,"compliance")
B.h7=new A.hm(B.cX)
B.cY=new A.cv(1,"rupture")
B.h8=new A.hm(B.cY)
B.cZ=new A.cv(2,"synchronisation")
B.h9=new A.hm(B.cZ)
B.d_=new A.fi(0,"front")
B.ha=new A.fi(1,"rearService")
B.hb=new A.fi(2,"sideBoundary")
B.hc=new A.fi(3,"roofline")
B.F=new A.eC(0,"north")
B.au=new A.eC(1,"east")
B.I=new A.eC(2,"south")
B.av=new A.eC(3,"west")
B.hd=new A.eD(0,"ground")
B.he=new A.eD(1,"first")
B.hf=new A.eD(2,"hidden")
B.hg=new A.dL(0,"mantle")
B.hh=new A.dL(1,"portal")
B.hj=new A.dL(3,"inventory")
B.d0=new A.dL(4,"aftermath")
B.hi=new A.dL(2,"window")
B.hl=new A.eE(B.hi,"shutter","the shutter")
B.hk=new A.dL(5,"none")
B.hm=new A.eE(B.hk,null,null)
B.hn=new A.B("saved mantle history is malformed",null,null)
B.ho=new A.B("rupture elapsed time is malformed",null,null)
B.hp=new A.B("presentation keys must be strings",null,null)
B.hq=new A.B("model package payload hash mismatch",null,null)
B.hr=new A.B("unsupported accessibility profile",null,null)
B.hs=new A.B("unsupported promoted model index schema",null,null)
B.ht=new A.B("materialSlot is required",null,null)
B.hu=new A.B("weather audio input is not finite",null,null)
B.hv=new A.B("inventory inspections must be an object",null,null)
B.hw=new A.B("screenplay event random range is invalid",null,null)
B.d1=new A.B("saved mantle state is malformed",null,null)
B.hx=new A.B("inactive rupture has elapsed time",null,null)
B.hy=new A.B("control sensitivity is outside 0.1\u20133.0",null,null)
B.hz=new A.B("invalid action bindings",null,null)
B.hA=new A.B("Shader Lab document controls are incomplete",null,null)
B.hB=new A.B("weather audio input is out of bounds",null,null)
B.hC=new A.B("listener room is empty",null,null)
B.hD=new A.B("control bindings conflict",null,null)
B.hE=new A.B("saved difficulty state is malformed",null,null)
B.hF=new A.B("weatherSurfaces save data must be an object",null,null)
B.hG=new A.B("residence.restAnchor cannot be empty",null,null)
B.hH=new A.B("saved house drift state is malformed",null,null)
B.hI=new A.B("saved sleep record is malformed",null,null)
B.hJ=new A.B("UI scale must be between 0.8 and 2.0",null,null)
B.hK=new A.B("manifest string array is malformed",null,null)
B.hL=new A.B("weather audio event is invalid",null,null)
B.hM=new A.B("unsupported settings store",null,null)
B.hN=new A.B("screenplay scene must be an object",null,null)
B.hO=new A.B("settings values must be an object",null,null)
B.hP=new A.B("saved day-loop sleepHistory must be a list",null,null)
B.hQ=new A.B("invalid anisotropy limit",null,null)
B.hR=new A.B("weather audio frame is invalid",null,null)
B.hS=new A.B("requested debug mode is not available",null,null)
B.hT=new A.B("audio event position is not finite",null,null)
B.hU=new A.B("event sequence must be non-negative",null,null)
B.hV=new A.B("screenplay branch is invalid",null,null)
B.hW=new A.B("inventory inspection counts are invalid",null,null)
B.hX=new A.B("only keybinds can be remapping",null,null)
B.hY=new A.B("modelScale must be positive and finite",null,null)
B.hZ=new A.B("weather audio layer is not finite",null,null)
B.i_=new A.B("Invalid database dialogue package",null,null)
B.i0=new A.B("listener position is not finite",null,null)
B.i1=new A.B("screenplay event has invalid core fields",null,null)
B.i2=new A.B("invalid action ID",null,null)
B.i3=new A.B("invalid Shader Lab debug mode",null,null)
B.i4=new A.B("saved window state is malformed",null,null)
B.i5=new A.B("manifest socket map is malformed",null,null)
B.i6=new A.B("unsupported graphics preset",null,null)
B.i7=new A.B("save run and meta must be objects",null,null)
B.i8=new A.B("saved house state is malformed",null,null)
B.i9=new A.B("saved sleep record must be an object",null,null)
B.ia=new A.B("model package parts must be non-empty",null,null)
B.ib=new A.B("sound cue must be a non-empty string",null,null)
B.ic=new A.B("saved session run is malformed",null,null)
B.id=new A.B("save map keys must be strings",null,null)
B.ie=new A.B("unsupported graphics profile",null,null)
B.ig=new A.B("model package exceeds payload count limit",null,null)
B.ih=new A.B("screenplay scene has invalid id, day, or title",null,null)
B.ii=new A.B("unsupported audio options",null,null)
B.ij=new A.B("transform.scale must be positive",null,null)
B.ik=new A.B("Escape is reserved for pause navigation",null,null)
B.il=new A.B("saved day-loop state is malformed",null,null)
B.im=new A.B("rupture extinguished mantle is unknown",null,null)
B.io=new A.B("model package exceeds part limit",null,null)
B.d2=new A.B("unsupported controls profile",null,null)
B.ip=new A.B("promoted model index entry is malformed",null,null)
B.d3=new A.B("saved portal state is malformed",null,null)
B.iq=new A.B("acoustic portal profile is not finite",null,null)
B.ir=new A.B("model package exceeds total byte limit",null,null)
B.is=new A.B("unsupported model package schema",null,null)
B.it=new A.B("manifest socket names are malformed",null,null)
B.iu=new A.B("saved house state does not match this house",null,null)
B.iv=new A.B("presentation snapshot contains a non-finite number",null,null)
B.iw=new A.B("screenplay array contains invalid text",null,null)
B.ix=new A.B("weather audio layer identity is empty",null,null)
B.iy=new A.B("screenplay event day/hour is out of range",null,null)
B.iz=new A.B("unsupported gameplay settings profile",null,null)
B.iA=new A.B("save contains a non-finite number",null,null)
B.iB=new A.B("unsupported graphics store",null,null)
B.iC=new A.B("screenplay option is invalid",null,null)
B.iE=new A.B("duplicate weather audio event",null,null)
B.iD=new A.B("duplicate weather audio layer",null,null)
B.iF=new A.B("screenplay needs sources and scenes arrays",null,null)
B.iG=new A.B("brush component needs an id and label",null,null)
B.iH=new A.B("text.json root must be an object",null,null)
B.iI=new A.B("screenplay root must be an object",null,null)
B.iJ=new A.B("event kind is empty",null,null)
B.iK=new A.B("unsupported Shader Lab document schema",null,null)
B.iL=new A.B("screenplay event effects are invalid",null,null)
B.iM=new A.B("promoted model index entries are required",null,null)
B.iN=new A.B("weather surface state must be an object",null,null)
B.iO=new A.B("invalid control binding token",null,null)
B.iP=new A.B("audio transmission muffle is invalid",null,null)
B.iQ=new A.B("acoustic portal muffle order is invalid",null,null)
B.iR=new A.B("unsupported settings profile",null,null)
B.iS=new A.B("saved session clock is malformed",null,null)
B.iT=new A.B("weather surface room ID must be a string",null,null)
B.iU=new A.B("rupture mantle IDs are malformed",null,null)
B.iV=new A.B("invalid gameplay setting: contextualReminders",null,null)
B.iW=new A.B("invalid screen-reader verbosity",null,null)
B.iX=new A.B("saved sleep record has an unknown enum",null,null)
B.iY=new A.B("weather audio layer is out of bounds",null,null)
B.iZ=new A.B("malformed Shader Lab control",null,null)
B.j_=new A.B("audio cue variants are empty",null,null)
B.j0=new A.B("manifest numeric array is malformed",null,null)
B.j1=new A.B("screenplay beat has invalid kind or text",null,null)
B.j2=new A.B("save root must be an object",null,null)
B.j3=new A.B("Shader Lab document must be an object",null,null)
B.j4=new A.B("audio event identity is empty",null,null)
B.j5=new A.B("screenplay event random range is out of range",null,null)
B.j6=new A.B("render capabilities contain invalid limits",null,null)
B.j7=new A.B("saved house overrides are malformed",null,null)
B.R=new A.b1(0,0,0)
B.bu=new A.b1(1,1,1)
B.ly=s([],t.Fk)
B.bE=s([],t.cv)
B.lz=s([],t.xL)
B.lA=s([],t.E7)
B.j8=new A.lj(B.R,B.R,0,1,null,null,B.bu,0.02,0,0.7,0.35,1,12,1,1,1,1,1,1,1,0.003,B.R,0,0,B.bu,0,null,B.ly,B.bE,B.lz,B.lA,null)
B.d4=new A.b4(0,0,0)
B.j9=new A.fj(0,"idle")
B.aw=new A.fj(1,"active")
B.ja=new A.fj(2,"ended")
B.jb=new A.fj(3,"aborted")
B.bh=new A.hn(0,"outside")
B.jc=new A.hn(1,"intersects")
B.jd=new A.hn(2,"inside")
B.J=new A.bw(0,"circulation")
B.d5=new A.bw(2,"conversational")
B.bi=new A.bw(3,"media")
B.aR=new A.bw(5,"sanitary")
B.aS=new A.bw(6,"sleeping")
B.aT=new A.bw(7,"work")
B.p=new A.bw(8,"storage")
B.K=new A.bw(9,"utility")
B.jg=new A.dM(0,"timeAdvanced")
B.jh=new A.dM(1,"dayEndReached")
B.ji=new A.dM(2,"journalWritten")
B.jj=new A.dM(3,"journalRejected")
B.jk=new A.dM(4,"slept")
B.jl=new A.dM(5,"complianceFloorTripped")
B.bj=new A.dN(0,"twentyFourHour")
B.d6=new A.dN(1,"twelveHour")
B.d7=new A.dO(0,"important")
B.d8=new A.dO(1,"always")
B.bk=new A.cw(0,"pauseAndMute")
B.d9=new A.dP(0,"press")
B.da=new A.dP(1,"hold")
B.db=new A.dQ(0,"compact")
B.dc=new A.dQ(1,"spacious")
B.dd=new A.dc(1,"standard")
B.de=new A.dc(2,"detailed")
B.df=new A.dR(0,"toast")
B.dg=new A.dR(1,"detailed")
B.dh=new A.dd(1,"readable")
B.jr=new A.iC(0,"vertex")
B.di=new A.iC(1,"indices")
B.dj=new A.lr(0,"staticDraw")
B.j=new A.iD(0,"ready")
B.a7=new A.iD(1,"lost")
B.ax=new A.hq(0,"prepared")
B.js=new A.hq(1,"committed")
B.jt=new A.hq(2,"rolledBack")
B.ju=new A.fl(0,"color")
B.dk=new A.fl(1,"colorAndGlow")
B.jv=new A.fl(2,"colorDepthGlow")
B.bl=new A.fl(3,"depthOnly")
B.bm=new A.iF(1,"linear")
B.dl=new A.iG(0,"clampToEdge")
B.jw=new A.ls(1,1,1,!1,B.bm,B.bm,B.dl,1)
B.ay=new A.iF(2,"linearMipmapLinear")
B.jx=new A.iG(1,"repeat")
B.jy=new A.df(0,"beforeShadow")
B.jz=new A.df(2,"beforeDepth")
B.bn=new A.df(3,"afterDepth")
B.dm=new A.df(4,"beforeWorld")
B.jA=new A.df(5,"afterWorld")
B.Q=new A.df(6,"afterResolve")
B.jB=new A.df(9,"beforePresent")
B.dn=new A.cx(0,"readBeforeWrite")
B.jC=new A.cx(1,"duplicateWriter")
B.jD=new A.cx(2,"sampledMultisampledAttachment")
B.bo=new A.cx(3,"invalidResolve")
B.jE=new A.cx(4,"formatOrSizeMismatch")
B.jF=new A.cx(5,"unversionedReadWrite")
B.jG=new A.cx(6,"invalidHistoryRead")
B.jH=new A.cx(7,"dependencyCycle")
B.jI=new A.cx(8,"missingCapability")
B.bp=new A.cS(0,"high")
B.bq=new A.cS(1,"standard")
B.br=new A.dS(1,B.bq,"auto",!1,"display","off","high","srgb","full","profile",!1)
B.jL=new A.dS(1,B.bp,"1.00",!1,"display","msaa4","high","srgb","errors","profile",!1)
B.aU=new A.eF(0,"player")
B.bs=new A.eF(1,"inserted")
B.dp=new A.eF(2,"warden")
B.dq=new A.fm(0,"wrongKind")
B.dr=new A.fm(1,"staleGeneration")
B.jM=new A.fm(2,"doubleRelease")
B.aV=new A.fm(3,"releasedResource")
B.jP=new A.dg("kitchen-range","settle")
B.jQ=new A.dg("front-door-knocker","knock")
B.jR=new A.dg("cellar-drain","drip")
B.jS=new A.dg("bedroom-timber","creak")
B.jT=new A.dg("kitchen-pipe","tick")
B.jU=new A.dg("bathroom-cistern","settle")
B.jV=new A.dg("landing-window","wind")
B.kh=new A.lz(1,"visitor")
B.kj=new A.lB("none",0,0,0,0,0,!1)
B.km=new A.ry(null)
B.kn=new A.rz(null)
B.bt=new A.iO(!1,0,0.85,0.92,1,0,1,0,0)
B.ko=new A.b1(0.008,0.012,0.024)
B.ds=s([0,2,2,3],t.t)
B.p4=new A.a_("kitchen.plate-rack","Plate Rack","kitchen","mat-wood-oak-polished",-1.8,1.5,2.2,90,0.2,0.6,!0,null)
B.oR=new A.a_("kitchen.enamel-sink","Enamel Sink","kitchen","mat-ceramic-glaze",-1.9,0.85,0.8,90,0.35,0.85,!0,"brass-taps-tarnished")
B.pp=new A.a_("kitchen.gas-cooker","Gas Cooker","kitchen","mat-iron-cast",-1.9,0.85,-0.6,90,0.35,0.9,!0,"pilot-light-emissive")
B.px=new A.a_("kitchen.scrubbed-table","Scrubbed Table","kitchen","mat-wood-oak-polished",0.2,0.75,0.5,0,0.6,0.75,!1,"scuff-marks")
B.p9=new A.a_("kitchen.chair-1","Chair 1","kitchen","mat-wood-oak-polished",0.2,0.45,1.2,180,0.25,0.85,!1,null)
B.oL=new A.a_("kitchen.chair-2","Chair 2","kitchen","mat-wood-oak-polished",0.2,0.45,-0.2,0,0.25,0.85,!1,null)
B.po=new A.a_("kitchen.tea-caddy","Tea Caddy","kitchen","mat-iron-cast",-1.7,0.9,1.6,15,0.08,0.15,!0,null)
B.oP=new A.a_("kitchen.bread-bin","Bread Bin","kitchen","mat-ceramic-glaze",-0.2,0.8,0.5,-10,0.18,0.25,!0,null)
B.oW=new A.a_("kitchen.wall-clock","Wall Clock","kitchen","mat-wood-mahogany-dark",1.4,1.8,-1.4,0,0.15,0.45,!0,null)
B.pf=new A.a_("kitchen.roller-towel","Roller Towel","kitchen","mat-fabric-curtains",1.8,1.3,1.8,-90,0.1,0.7,!1,null)
B.kp=s([B.p4,B.oR,B.pp,B.px,B.p9,B.oL,B.po,B.oP,B.oW,B.pf],t.D)
B.kq=s(["Protective gallery balustrade overlooking stair void","Linen and airing cupboard architraves","Ceiling loft access inspection hatch trim"],t.s)
B.kr=s(["Half-height sanitary tile wainscot ledge at 1.2 m","Vertical pipe chase boxing for waste and soil stack","Bath apron surround and plinth"],t.s)
B.bv=s([B.d7,B.d8],A.a2("w<dO>"))
B.ks=s([B.K,B.p,B.J],t.p)
B.kt=s(["wall-plaster","grime","floor-linoleum","ceiling-stained","porcelain-albedo","porcelain-normal","glass","skybox-main-atmosphere-v1"],t.s)
B.ku=s([B.aT,B.p,B.J],t.p)
B.kv=s(["volumetric_light_enable","volumetric_shaft_intensity","volumetric_precision","volumetric_dust_density","volumetric_scattering"],t.s)
B.kw=s(["uNear","uFar","uProjScaleX","uProjScaleY","uRadius","uStrength"],t.s)
B.bw=s(["Open the front door and let them in","Keep the chain on and speak through the gap","Answer them without opening the door","Pass a message through the letterbox","Do not answer; let the knock fade"],t.s)
B.O=new A.bS(0,"audio")
B.a2=new A.jk(0,"level")
B.qI=new A.bp("master","Master",B.O,B.a2,1,0,1,"audio")
B.qN=new A.bp("voice","Visitor voice",B.O,B.a2,1,0,1,"audio")
B.qE=new A.bp("effects","Effects",B.O,B.a2,1,0,1,"audio")
B.qF=new A.bp("ambience","House ambience",B.O,B.a2,1,0,1,"audio")
B.qJ=new A.bp("music","Music",B.O,B.a2,1,0,1,"audio")
B.b1=new A.bS(1,"display")
B.qM=new A.bp("brightness","Display brightness",B.b1,B.a2,1,0.6,1.4,"display")
B.aD=new A.jk(1,"toggle")
B.qH=new A.bp("muted","Mute house audio",B.O,B.aD,!1,null,null,"audio")
B.aj=new A.bS(2,"accessibility")
B.qK=new A.bp("mono","Mono-compatible mix",B.aj,B.aD,!1,null,null,"audio")
B.qG=new A.bp("high-contrast","High-contrast interface",B.aj,B.aD,!1,null,null,"display")
B.qL=new A.bp("strong-highlights","Strong focus highlights",B.aj,B.aD,!1,null,null,"display")
B.L=s([B.qI,B.qN,B.qE,B.qF,B.qJ,B.qM,B.qH,B.qK,B.qG,B.qL],A.a2("w<bp>"))
B.oT=new A.a_("spare-room.single-bed","Single Bed","spareRoom","mat-iron-cast",0,0.4,0,0,0.6,0.8,!1,null)
B.oY=new A.a_("spare-room.chest-of-drawers","Chest of Drawers","spareRoom","mat-wood-oak-polished",1,0.5,1,90,0.4,1,!0,null)
B.p3=new A.a_("spare-room.utility-chair","Utility Chair","spareRoom","mat-wood-oak-polished",-1,0.4,-1,45,0.3,0.8,!1,null)
B.p1=new A.a_("spare-room.bare-curtain-rod","Bare Curtain Rod","spareRoom","mat-brass-wrought",0,2,2,0,0.1,0.1,!1,null)
B.pn=new A.a_("spare-room.paper-archive-box","Paper Archive Box","spareRoom","mat-plaster-clean",-1,0.2,1,15,0.25,0.3,!0,null)
B.ky=s([B.oT,B.oY,B.p3,B.p1,B.pn],t.D)
B.G=s(["who","verb","object","place","time"],t.s)
B.kz=s(["Structural load-bearing brick piers","Exposed timber joists with conduit clips","Stepped damp-proof skirting plinth","Iron coal chute aperture and frame","Preserves & wine storage alcove with stone shelves","Subterranean drainage sump pit with cast-iron grate","Utility meter board & gas governor casing","Oak wine barrel stillage cradle"],t.s)
B.kB=s([81,77,83,72],t.t)
B.kC=s(["porcelain-albedo","porcelain-normal","glass"],t.s)
B.kE=s(["Standard perimeter trim"],t.s)
B.eY=new A.dF(1,"strong")
B.bx=s([B.cx,B.eY],A.a2("w<dF>"))
B.fb=new A.fd(0,"swap")
B.fc=new A.fd(1,"replace")
B.fd=new A.fd(2,"cancel")
B.kF=s([B.fb,B.fc,B.fd],A.a2("w<fd>"))
B.kG=s([B.aS,B.p,B.J],t.p)
B.kH=s([2,5,9,12,16,19],t.t)
B.pe=new A.a_("cellar.coal-heap","Coal Heap","cellar","mat-concrete-floor",1.5,0.3,1.2,0,0.8,0.6,!1,"dusty-coal")
B.oQ=new A.a_("cellar.preserving-jars","Preserving Jars","cellar","mat-glass-clear-window",-1.7,1.2,0,90,0.25,0.3,!0,null)
B.oS=new A.a_("cellar.mangle","Mangle","cellar","mat-iron-cast",0,0.6,-1.5,45,0.4,1.2,!0,null)
B.p_=new A.a_("cellar.bare-bulb","Bare Bulb","cellar","mat-glass-clear-window",0,2.1,0,0,0.1,0.25,!0,"pull-cord-switch")
B.p8=new A.a_("cellar.ventilation-grille","Ventilation Grille","cellar","mat-iron-cast",-1.9,1.8,1.2,90,0.2,0.2,!1,null)
B.pb=new A.a_("cellar.meter-cupboard","Meter Cupboard","cellar","mat-wood-oak-polished",1.6,1.3,-1.4,-90,0.25,0.6,!0,null)
B.kI=s([B.pe,B.oQ,B.oS,B.p_,B.p8,B.pb],t.D)
B.jm=new A.cw(1,"pauseOnly")
B.jn=new A.cw(2,"continuePlayback")
B.aW=s([B.bk,B.jm,B.jn],A.a2("w<cw>"))
B.kJ=s(["uViewProjection","uView","uModel","uNormalMatrix","uLightViewProjection","uLightPosition","uLightDirection","uLightColor","uLightIntensity","uLightRange","uLightInnerCos","uLightOuterCos","uSpotEnabled","uDirectionalDirection","uDirectionalColor","uDirectionalIntensity","uPointPosition0","uPointColor0","uPointIntensity0","uPointRadius0","uPointPosition1","uPointColor1","uPointIntensity1","uPointRadius1","uPointPosition2","uPointColor2","uPointIntensity2","uPointRadius2","uPointPosition3","uPointColor3","uPointIntensity3","uPointRadius3","uDirectSpotPosition0","uDirectSpotDirection0","uDirectSpotColor0","uDirectSpotIntensity0","uDirectSpotRange0","uDirectSpotInnerCos0","uDirectSpotOuterCos0","uDirectSpotEnabled0","uDirectSpotPosition1","uDirectSpotDirection1","uDirectSpotColor1","uDirectSpotIntensity1","uDirectSpotRange1","uDirectSpotInnerCos1","uDirectSpotOuterCos1","uDirectSpotEnabled1","uDirectSpotPosition2","uDirectSpotDirection2","uDirectSpotColor2","uDirectSpotIntensity2","uDirectSpotRange2","uDirectSpotInnerCos2","uDirectSpotOuterCos2","uDirectSpotEnabled2","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale","uShadowMapTexelSize","uShadowFilterRadius","uShadowBias","uReflectionColor","uReflectionIntensity","uReflectionConfidence","uSceneColorSize","uEmissiveStrength","uUvScaleOffset","uNormalStrength","uRoughness","uMetallic","uSpecularScale","uOcclusionStrength","uClearcoatStrength","uClearcoatRoughness","uLightmapIntensity","uCameraPosition","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff","uOpaqueCoverage","uFogColor","uFogStart","uFogEnd","uFogHeightFalloff","uFogDensity","uReceivesShadow","uRainWetness","uSurfaceSnowCoverage","uSurfaceDissolution","uThermalSourceCount","uThermalSourcePosition0","uThermalSourceRadius0","uThermalSourceDissolution0","uThermalSourcePosition1","uThermalSourceRadius1","uThermalSourceDissolution1","uThermalSourcePosition2","uThermalSourceRadius2","uThermalSourceDissolution2","uThermalSourcePosition3","uThermalSourceRadius3","uThermalSourceDissolution3"],t.s)
B.kK=s(["uQuantizationBits","uDitherStrength"],t.s)
B.kM=s(["uTime","uChromaWeight","uTrackingWeight","uNoiseWeight","uHeadSwitchWeight","uDropoutWeight","uGhostWeight"],t.s)
B.kO=s([B.aQ,B.cT,B.cU,B.cV,B.as],A.a2("w<c0>"))
B.dt=s([B.J],t.p)
B.kP=s([B.J,B.p],t.p)
B.kQ=s([B.aR,B.J],t.p)
B.kR=s([B.p,B.K],t.p)
B.kS=s([B.K],t.p)
B.kT=s(["30","60","display"],t.s)
B.kU=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.aI=new A.cm(0,"full")
B.cr=new A.cm(1,"compressed")
B.cs=new A.cm(2,"off")
B.du=s([B.aI,B.cr,B.cs],A.a2("w<cm>"))
B.by=s([B.bj,B.d6],A.a2("w<dN>"))
B.kV=s(["uNear","uFar","uLightDir","uLightColor","uShaftIntensity","uFogDensity","uAnisotropy","uViewProjection","uView","uInverseProjection","uVolumetricAlbedo","uVolumetricHeightFalloff","uVolumetricDustDensity","uVolumetricJitter","uVolumetricIntensity","uVolumetricSampleCount"],t.s)
B.kW=s(["res/house/inventory.json","assets/house/inventory.json"],t.s)
B.f2=new A.dG(1,"reduced")
B.bz=s([B.b9,B.f2],A.a2("w<dG>"))
B.eZ=new A.da(0,"wide")
B.f_=new A.da(2,"night")
B.bA=s([B.eZ,B.cy,B.f_],A.a2("w<da>"))
B.kX=s(["uNear","uFar","uFocusDistance","uFocusRange","uStrength"],t.s)
B.l8=s(["uViewProjection","uModel","uVertexSnapGrid","uAffineWarpStrength","uAlphaCutoff"],t.s)
B.qY=new A.bJ(0,"bed")
B.qZ=new A.bJ(1,"chair")
B.cc=new A.bJ(2,"sofa")
B.r_=new A.bJ(3,"floor")
B.dv=s([B.qY,B.qZ,B.cc,B.r_],A.a2("w<bJ>"))
B.pm=new A.a_("landing.stair-runner-end","Stair Runner End","landing","mat-fabric-curtains",0,0,0,0,0.5,0.02,!1,null)
B.pd=new A.a_("landing.airing-cupboard-door","Airing Cupboard Door","landing","mat-wood-oak-polished",1,1,0,90,0.4,2,!0,null)
B.pc=new A.a_("landing.light-pull-cord","Light Pull Cord","landing","mat-glass-clear-window",0.5,1.5,0.5,0,0.1,0.5,!0,null)
B.oO=new A.a_("landing.balustrade","Balustrade","landing","mat-wood-mahogany-dark",-1,0.5,-1,0,0.1,1,!1,null)
B.pu=new A.a_("landing.window-net-curtain","Window Net Curtain","landing","mat-fabric-curtains",0,1.5,-2,0,0.5,1.5,!1,null)
B.l9=s([B.pm,B.pd,B.pc,B.oO,B.pu],t.D)
B.dw=s(["open","chain","through-door","letterbox","ignore"],t.s)
B.bB=s([B.db,B.dc],A.a2("w<dQ>"))
B.la=s(["Chimney breast with projecting tile hearth and carved mantle","Lower dark wood wainscot paneling with continuous dado rail","Victorian picture hanging rail at 2.15 m datum","Ornate central plaster ceiling rose medallion","Twin north sash window radiator enclosures"],t.s)
B.r0=new A.c8(0,"long")
B.et=new A.c8(1,"short")
B.dx=s([B.r0,B.et],A.a2("w<c8>"))
B.fW=new A.ct("1 - 9","Select Response",!0)
B.fS=new A.ct("SPACE","Silence Ring",!1)
B.lc=s([B.fW,B.fS],t.sa)
B.ab=new A.c5(0,"visual")
B.bY=new A.c5(1,"graphics")
B.ac=new A.c5(2,"gameplay")
B.bZ=new A.c5(3,"controls")
B.S=new A.c5(4,"audio")
B.T=new A.c5(5,"accessibility")
B.ld=s([B.ab,B.bY,B.ac,B.bZ,B.S,B.T],A.a2("w<c5>"))
B.le=s(["master","voice","effects","ambience","music"],t.s)
B.ph=new A.a_("living_room.wireless-set","Wireless Set","living_room","mat-wood-mahogany-dark",1.6,0.75,1.4,-45,0.2,0.35,!0,"amber-dial-glow")
B.pk=new A.a_("living_room.mantle-clock","Mantle Clock","living_room","mat-wood-mahogany-dark",0,1.35,-2.1,0,0.15,0.25,!0,null)
B.p2=new A.a_("living_room.porcelain-mermaid-statuette","Porcelain Mermaid Statuette","living_room","mat-porcelain-glaze",0.45,1.35,-2.08,-15,0.12,0.35,!0,null)
B.oX=new A.a_("living_room.coal-scuttle","Coal Scuttle","living_room","mat-iron-cast",-0.7,0.2,-2,30,0.2,0.4,!0,null)
B.oM=new A.a_("living_room.fire-tools","Fire Tools","living_room","mat-brass-wrought",0.7,0.4,-2,-30,0.12,0.75,!1,null)
B.p0=new A.a_("living_room.armchair","Armchair","living_room","mat-fabric-curtains",0,0.45,-0.5,180,0.45,0.9,!0,null)
B.p5=new A.a_("living_room.occasional-table","Occasional Table","living_room","mat-wood-mahogany-dark",1.6,0.6,1.4,0,0.35,0.65,!1,null)
B.pg=new A.a_("living_room.rug","Rug","living_room","mat-fabric-curtains",0,0.01,-1,0,0.9,0.02,!1,null)
B.pt=new A.a_("living_room.curtains","Curtains","living_room","mat-fabric-curtains",-2.1,1.5,0,90,0.15,2.1,!1,"alpha-masked")
B.oI=new A.a_("living_room.photograph","Photograph","living_room","mat-wood-mahogany-dark",0.4,1.35,-2.1,-15,0.1,0.18,!0,null)
B.lf=s([B.ph,B.pk,B.p2,B.oX,B.oM,B.p0,B.p5,B.pg,B.pt,B.oI],t.D)
B.bC=s([B.df,B.dg],A.a2("w<dR>"))
B.dy=s(["res/house/house.json","assets/house/house.json"],t.s)
B.oK=new A.a_("hall.coat-hooks","Coat Hooks","hall","mat-iron-cast",1,1.6,0,0,0.15,1.6,!1,"three-occupied")
B.pw=new A.a_("hall.doormat","Doormat","hall","mat-fabric-curtains",0,0.01,0.5,0,0.3,0.02,!1,"worn-center")
B.pq=new A.a_("hall.umbrella-stand","Umbrella Stand","hall","mat-ceramic-glaze",0.8,0,0.2,45,0.12,0.55,!0,null)
B.pl=new A.a_("hall.stair-runner","Stair Runner","hall","mat-fabric-linen-sheet",-1,0,2,0,0.4,0.01,!1,"threadbare-edges")
B.oZ=new A.a_("hall.picture-frames","Picture Frames","hall","mat-wood-mahogany-dark",1.5,1.8,1,0,0.25,0.3,!1,null)
B.p7=new A.a_("hall.light-switch","Light Switch","hall","mat-enamel-white",0.2,1.3,0,0,0.04,0.08,!0,null)
B.lh=s([B.oK,B.pw,B.pq,B.pl,B.oZ,B.p7],t.D)
B.li=s(["shadow_ssdo_enable","shadow_ao_intensity"],t.s)
B.jJ=new A.cS(2,"safe")
B.jK=new A.cS(3,"custom")
B.dz=s([B.bp,B.bq,B.jJ,B.jK],A.a2("w<cS>"))
B.N=new A.cC(0,"inactive")
B.c9=new A.cC(2,"affineWarp")
B.ek=new A.cC(3,"vertexSnap")
B.ca=new A.cC(4,"tapeGiveup")
B.cb=new A.cC(5,"portalFail")
B.ah=new A.cC(6,"lightsOut")
B.dA=s([B.N,B.b0,B.c9,B.ek,B.ca,B.cb,B.ah],A.a2("w<cC>"))
B.lj=s(["#4b8fc5","#79c8d5","#d7c77a","#df824f","#d43b3b"],t.s)
B.lk=s(["uViewProjection","uModel","uNormalMatrix","uLightDir","uAmbientColor","uAmbientIntensity","uAmbientLightScale","uDirectLightScale"],t.s)
B.ll=s([B.aU,B.bs,B.dp],A.a2("w<eF>"))
B.lm=s(["architecture","furniture","fixture","service","story","decor","micro"],t.s)
B.tK=new A.bN("stranger.case","accepted","The sewing case stays closed beside the journal.")
B.tJ=new A.bN("attercliffe.plate","kept","A second place remains set, though nobody asks why.")
B.tF=new A.bN("hallow.dish","returned","The dish is settled; the receipt has gone soft at the fold.")
B.tN=new A.bN("ronnie.response","named","A route card has Ronnie written on its back.")
B.tM=new A.bN("sylvia.pencil","given","Somewhere beyond the wall, a pencil is kept for something good.")
B.ln=s([B.tK,B.tJ,B.tF,B.tN,B.tM],t.uk)
B.tL=new A.bN("stranger.case","accepted","The sewing case remains shut in the wrong room.")
B.tI=new A.bN("ronnie.response","named","The name Ronnie holds when the room does not.")
B.tG=new A.bN("denise.revision","accepted","One correction remains yours to protect.")
B.tD=new A.bN("attercliffe.plate","kept","A second place survives the room changing around it.")
B.lo=s([B.tL,B.tI,B.tG,B.tD],t.uk)
B.pi=new A.a_("bathroom.cast-iron-bath","Cast Iron Bath","bathroom","mat-iron-cast",0,0.3,0,0,0.8,0.6,!0,null)
B.oV=new A.a_("bathroom.pedestal-basin","Pedestal Basin","bathroom","mat-ceramic-glaze",1,0.5,1,90,0.3,0.8,!0,null)
B.pj=new A.a_("bathroom.medicine-cabinet","Medicine Cabinet","bathroom","mat-wood-oak-polished",1,1.5,1,90,0.2,0.4,!0,null)
B.oJ=new A.a_("bathroom.chain-pull-cistern","Chain Pull Cistern","bathroom","mat-ceramic-glaze",-1,1.8,-1,0,0.2,0.4,!0,null)
B.p6=new A.a_("bathroom.bath-rack","Bath Rack","bathroom","mat-iron-cast",0,0.6,0,0,0.3,0.1,!1,null)
B.lp=s([B.pi,B.oV,B.pj,B.oJ,B.p6],t.D)
B.bF=s([],t.L)
B.lr=s([],t.xn)
B.lE=s([],t.A5)
B.lu=s([],t.Fm)
B.lt=s([],t.op)
B.lq=s([],A.a2("w<cU>"))
B.ls=s([],t.e)
B.lx=s([],t.yH)
B.a8=s([],t.qP)
B.lv=s([],t.u)
B.dF=s([],t.xB)
B.lG=s([],t.E)
B.lF=s([],t.El)
B.o=s([],t.s)
B.dC=s([],t.ld)
B.dB=s([],t.su)
B.dD=s([],t.uI)
B.dE=s([],t.nm)
B.bD=s([],t.n)
B.lw=s([],t.t)
B.bG=s([],t.zz)
B.jO=new A.iI(15,"kitchen",-0.3,0)
B.jN=new A.iI(19,"spare-room",0,0.3)
B.Z=s([B.jO,B.jN],A.a2("w<iI>"))
B.lI=s(["Fitted countertop cabinetry with recessed toe-kicks","Ceramic tile splashback up to 1.4 m datum","Belfast sink plumbing casing and pipe chase enclosure","Pantry larder cupboard framing against North wall"],t.s)
B.lJ=s(["res/house/soundscape.json","assets/house/soundscape.json"],t.s)
B.lK=s(["high","medium","low"],t.s)
B.f0=new A.cQ(1,"headphones")
B.f1=new A.cQ(2,"speakers")
B.bH=s([B.cz,B.f0,B.f1,B.cA],A.a2("w<cQ>"))
B.lL=s(["broadcasts","visitors","vocabulary","documents","street","unverifiables","nights","endings","records","cues","claims","reactions","variants","residues"],t.s)
B.bI=s([B.d9,B.da],A.a2("w<dP>"))
B.je=new A.bw(1,"focal")
B.lM=s([B.je,B.d5,B.bi,B.p],t.p)
B.bX=new A.cz(0,"root")
B.dW=new A.bH(0,"pauseMenu")
B.o9=new A.dV(B.bX,B.dW,null)
B.lN=s([B.o9],t.bA)
B.bJ=s([B.cv,B.aq,B.cw],A.a2("w<d9>"))
B.lO=s(["uExposure","uVignette","uGrain","uOutputEncoding","uToneMap","uClearColor","uSkyHorizon","uSkyZenith","uSkyGround","uSkyEnabled","uSkyHorizonGlow","uSkyStarDensity","uSkyTexture","uSkyTextureEnabled","uSkyRotation","uSkyExposure","uSkyTextureSrgb","uInverseProjection","uInverseView","uCameraPosition","uCloudCoverage","uCloudDensity","uCloudBaseHeight","uCloudThickness","uCloudScale","uCloudWind","uCloudPhase","uCloudDetail","uCloudSilverLining","uCloudSampleCount","uCloudLightDirection","uCloudLightColor","uCloudLightIntensity"],t.s)
B.jp=new A.dd(0,"instant")
B.jq=new A.dd(2,"slow")
B.bK=s([B.jp,B.dh,B.jq],A.a2("w<dd>"))
B.oU=new A.a_("bedroom.bedstead","Bedstead","bedroom","mat-iron-cast",-0.8,0.5,1,0,0.9,1.1,!1,null)
B.pa=new A.a_("bedroom.eiderdown","Eiderdown","bedroom","mat-fabric-curtains",-0.8,0.55,1,0,0.85,0.2,!1,"sss-translucent")
B.pv=new A.a_("bedroom.wardrobe","Wardrobe","bedroom","mat-wood-mahogany-dark",1.6,1,-1.2,-90,0.45,2,!0,null)
B.pr=new A.a_("bedroom.dressing-table","Dressing Table","bedroom","mat-wood-mahogany-dark",1.6,0.8,1,-90,0.35,1.4,!0,"mirror-ssr-target")
B.ps=new A.a_("bedroom.washstand","Washstand","bedroom","mat-ceramic-glaze",-1.8,0.8,-1.2,90,0.3,0.9,!0,null)
B.oN=new A.a_("bedroom.rag-rug","Rag Rug","bedroom","mat-fabric-curtains",-0.8,0.01,-0.3,0,0.6,0.02,!1,null)
B.lP=s([B.oU,B.pa,B.pv,B.pr,B.ps,B.oN],t.D)
B.lQ=s(["auto","0.50","0.67","0.75","0.85","1.00"],t.s)
B.lR=s([B.O,B.b1,B.aj],A.a2("w<bS>"))
B.a_=s([B.F,B.au,B.I,B.av],A.a2("w<eC>"))
B.cd=new A.bz(0,"depthTest")
B.ce=new A.bz(1,"depthFunc")
B.cf=new A.bz(2,"depthWrite")
B.cg=new A.bz(3,"blendEnable")
B.ch=new A.bz(4,"blendFunc")
B.ci=new A.bz(5,"blendEquation")
B.cj=new A.bz(6,"cullEnable")
B.ck=new A.bz(7,"cullFace")
B.ex=new A.bz(8,"frontFace")
B.rh=new A.bz(9,"stencilEnable")
B.ev=new A.bz(10,"colorMask")
B.ew=new A.bz(11,"scissorEnable")
B.lU=s([B.cd,B.ce,B.cf,B.cg,B.ch,B.ci,B.cj,B.ck,B.ex,B.rh,B.ev,B.ew],A.a2("w<bz>"))
B.aE=new A.c7(0,"none")
B.qP=new A.c7(1,"albedoOnly")
B.qQ=new A.c7(2,"normalsOnly")
B.qR=new A.c7(3,"roughnessOnly")
B.qS=new A.c7(4,"metallicOnly")
B.qT=new A.c7(5,"aoOnly")
B.qU=new A.c7(6,"wireframeOnly")
B.dG=s([B.aE,B.qP,B.qQ,B.qR,B.qS,B.qT,B.qU],A.a2("w<c7>"))
B.lV=s(["North and South sloped Welsh slate roof planes","Terracotta half-round ridge capping tiles","East and West brick gable pediments","Dual masonry chimney stacks with lead flashing collars","Terracotta chimney pots","Half-round cast-iron eaves gutters and rainwater downpipes"],t.s)
B.lW=s(["off","errors","full"],t.s)
B.lX=s(["off","fxaa","msaa2","msaa4"],t.s)
B.lY=s(["off","profile","standard","high"],t.s)
B.lZ=s(["pbr_roughness","pbr_metallic","pbr_specular","normal_bump_strength","shadow_bias"],t.s)
B.jf=new A.bw(4,"culinary")
B.m_=s([B.jf,B.p,B.J],t.p)
B.m0=s(["post_bloom"],t.s)
B.m1=s(["post_color_grade"],t.s)
B.m2=s(["post_depth_of_field"],t.s)
B.m3=s(["post_vhs_chroma","post_vhs_noise"],t.s)
B.m4=s(["Vestibule draft lobby transom trim","Dado rail wainscoting along full hallway length","Under-stair spandrel paneling and cupboard casing","Continuous timber staircase stringers and balusters"],t.s)
B.a3=new A.dt(0,"pbrMaterial")
B.ak=new A.dt(1,"shadowsAndOcclusion")
B.aF=new A.dt(2,"surfaceWeathering")
B.l=new A.dt(3,"atmosphereAndPost")
B.v=new A.dt(4,"weatherEffects")
B.qV=new A.dt(5,"debugView")
B.az=s([B.a3,B.ak,B.aF,B.l,B.v,B.qV],A.a2("w<dt>"))
B.m6=s(["shadow_csm_hardness"],t.s)
B.m7=s(["srgb","linear"],t.s)
B.m8=s(["uLightViewProjection","uModel","uAlphaCutoff"],t.s)
B.m9=s(["uBloomStrength"],t.s)
B.ma=s(["uLutSize","uStrength"],t.s)
B.mc=s([B.cX,B.cY,B.cZ],A.a2("w<cv>"))
B.md=s(["uTexelSize","uNear","uFar"],t.s)
B.dH=s(["uTexelStep"],t.s)
B.me=s(["uVolumetricStrength"],t.s)
B.mf=s(["uninitialized"],t.s)
B.mg=s(["Sloped timber rafter trusses","Horizontal collar tie-beams at head height","Central rough-sawn pine floorboard walkway","Loft access hatch surround over landing","Galvanized cold-water header cistern tank on elevated timber bearers"],t.s)
B.jo=new A.dc(0,"minimal")
B.bL=s([B.jo,B.dd,B.de],A.a2("w<dc>"))
B.mh=s(["Recessed alcove wardrobe framing","Bedside table wall plinths","Decorative chimney breast with ceramic tile hearth","Curtain pelmets over twin north sash windows"],t.s)
B.tH=new A.bN("denise.revision","accepted","One correction was offered without being used as a weapon.")
B.tC=new A.bN("ayling.return","trusted","A form crossed the threshold because someone chose to carry it.")
B.tB=new A.bN("attercliffe.plate","kept","One place was set because a person had not stopped mattering.")
B.tE=new A.bN("ronnie.response","named","The route card gives one name its own line.")
B.mi=s([B.tH,B.tC,B.tB,B.tE],t.uk)
B.ao=new A.cl(0,"waiting")
B.aG=new A.cl(1,"atDoor")
B.aH=new A.cl(2,"consulting")
B.b3=new A.cl(3,"resolved")
B.mj=s([B.ao,B.aG,B.aH,B.b3],A.a2("w<cl>"))
B.mk=s(["post_dither","post_quantization_bits"],t.s)
B.ml=s(["Study alcove desk framing and bracketed shelving","Low-profile window radiator enclosure","Exposed electrical surface conduit runs"],t.s)
B.fX=new A.ct("W A S D","Move",!1)
B.fV=new A.ct("TAB","Journal",!1)
B.fU=new A.ct("CAPS","Shader Lab",!1)
B.fT=new A.ct("ESC","Pause",!1)
B.mm=s([B.fX,B.fV,B.fU,B.fT],t.sa)
B.mn=s(["floor-linoleum","ceiling-stained"],t.s)
B.nK={schema:0,enabled:1,attached:2,activeLod:3,itemCount:4}
B.mo=new A.a3(B.nK,["pixeldart-model-package-diagnostic-v1",!1,!1,null,0],A.a2("a3<f,L?>"))
B.nZ={uAlbedo:0}
B.dI=new A.a3(B.nZ,[0],t.I)
B.nO={"wallpaper-stripes":0,"wallpaper-damask":1,"wallpaper-floral":2,"wallpaper-damp":3,"wallpaper-faded":4,"wallpaper-tiles":5,"wallpaper-peeling":6,"floor-wood":7,"floor-linoleum":8,"floor-tiles":9,"floor-concrete":10,"ceiling-plaster":11,"ceiling-pipes":12,"polyhaven-decrepit-wallpaper":13,"polyhaven-dark-paneled-wood":14,"polyhaven-damaged-plaster":15,"polyhaven-diagonal-parquet":16,"polyhaven-dirty-carpet":17,"polyhaven-brown-floor-tiles":18,"polyhaven-ceiling-interior":19,"polyhaven-roof-slates":20,"timber-rafters":21}
B.kc=new A.aH("wallpaper-stripes","wall-plaster",11772299,0.82,0.55)
B.k4=new A.aH("wallpaper-damask","wall-plaster",9271153,0.76,0.42)
B.kb=new A.aH("wallpaper-floral","wall-plaster",11116163,0.79,0.48)
B.ke=new A.aH("wallpaper-damp","grime",7106925,0.94,0.76)
B.k5=new A.aH("wallpaper-faded","wall-plaster",12169373,0.86,0.62)
B.kd=new A.aH("wallpaper-tiles","floor-linoleum",11843497,0.63,0.28)
B.kf=new A.aH("wallpaper-peeling","grime",9340536,0.91,0.68)
B.k6=new A.aH("floor-wood","wall-plaster",7755327,0.88,0.22)
B.k0=new A.aH("floor-linoleum","floor-linoleum",7633004,0.61,0.62)
B.k3=new A.aH("floor-tiles","floor-linoleum",11710114,0.57,0.86)
B.jY=new A.aH("floor-concrete","grime",7828331,0.96,0.92)
B.k_=new A.aH("ceiling-plaster","wall-plaster",12630442,0.84,0.7)
B.k7=new A.aH("ceiling-pipes","ceiling-stained",7828330,0.92,0.84)
B.k2=new A.aH("polyhaven-decrepit-wallpaper","polyhaven/walls/decrepit_wallpaper",12103070,0.88,1)
B.jZ=new A.aH("polyhaven-dark-paneled-wood","polyhaven/walls/dark_paneled_wood",6441016,0.72,0.8)
B.ka=new A.aH("polyhaven-damaged-plaster","polyhaven/walls/damaged_plaster",11248794,0.9,1.2)
B.k9=new A.aH("polyhaven-diagonal-parquet","polyhaven/floors/diagonal_parquet",9202510,0.65,1)
B.k8=new A.aH("polyhaven-dirty-carpet","polyhaven/floors/dirty_carpet",9076850,0.95,1)
B.jX=new A.aH("polyhaven-brown-floor-tiles","polyhaven/floors/brown_floor_tiles",9861220,0.55,0.6)
B.k1=new A.aH("polyhaven-ceiling-interior","polyhaven/ceilings/ceiling_interior",12959669,0.82,1)
B.jW=new A.aH("polyhaven-roof-slates","polyhaven/roof/roof_slates_02",3817028,0.7,1)
B.kg=new A.aH("timber-rafters","timber-dark",4732454,0.86,0.5)
B.bM=new A.a3(B.nO,[B.kc,B.k4,B.kb,B.ke,B.k5,B.kd,B.kf,B.k6,B.k0,B.k3,B.jY,B.k_,B.k7,B.k2,B.jZ,B.ka,B.k9,B.k8,B.jX,B.k1,B.jW,B.kg],A.a2("a3<f,aH>"))
B.nz={"polyhaven.television-01":0,"polyhaven.coffee-table-01":1,"polyhaven.desk-lamp-arm-01":2,"polyhaven.alarm-clock-01":3,"kenney.bathtub":4,"kenney.bathroom-sink":5,"kenney.bathroom-mirror":6,"kenney.bed-double":7,"kenney.bed-single":8,"kenney.bedside-table":9,"kenney.bookcase":10,"kenney.coat-rack":11,"kenney.desk":12,"kenney.desk-chair":13,"kenney.computer-screen":14,"kenney.cardboard-box":15,"polyhaven.roof-slates":16,"polyhaven.wooden-ladder":17,"polyhaven.wooden-crate-01":18,"polyhaven.lantern-01":19,"polyhaven.wine-barrel-01":20,"kenney.chest":21,"kenney.barrel":22,"kenney.bucket":23,"kenney.detail-pipe":24}
B.uo=new A.iU(0,"polyhaven")
B.ul=new A.iT(0,"gltf")
B.tV=s(["tv","crt","retro","electronics","entertainment"],t.s)
B.nu=new A.aw("polyhaven.television-01",0.58,0.46,0.4,"living")
B.ud=s(["table","coffee-table","furniture","wood"],t.s)
B.ns=new A.aw("polyhaven.coffee-table-01",1.1,0.45,0.6,"living")
B.tU=s(["lamp","desk-lamp","light","practical"],t.s)
B.nk=new A.aw("polyhaven.desk-lamp-arm-01",0.22,0.48,0.26,"lighting")
B.u6=s(["clock","alarm","retro","bedside"],t.s)
B.nc=new A.aw("polyhaven.alarm-clock-01",0.14,0.16,0.09,"bedroom")
B.up=new A.iU(1,"kenney")
B.um=new A.iT(1,"glb")
B.u0=s(["bath","plumbing","sanitary"],t.s)
B.nh=new A.aw("kenney.bathtub",1.7,0.6,0.75,"bathroom")
B.ue=s(["sink","basin","plumbing"],t.s)
B.nl=new A.aw("kenney.bathroom-sink",0.6,0.85,0.5,"bathroom")
B.u9=s(["mirror","wall"],t.s)
B.ni=new A.aw("kenney.bathroom-mirror",0.5,0.7,0.08,"bathroom")
B.u2=s(["bed","sleeping","master"],t.s)
B.n6=new A.aw("kenney.bed-double",1.6,0.9,2.05,"bedroom")
B.u1=s(["bed","single"],t.s)
B.nj=new A.aw("kenney.bed-single",1,0.85,2,"bedroom")
B.ub=s(["nightstand","cabinet","bedside"],t.s)
B.ng=new A.aw("kenney.bedside-table",0.5,0.6,0.45,"bedroom")
B.u3=s(["bookcase","storage","books"],t.s)
B.nb=new A.aw("kenney.bookcase",0.9,1.8,0.4,"living")
B.tX=s(["hall","coat-rack","entry"],t.s)
B.n8=new A.aw("kenney.coat-rack",0.45,1.85,0.45,"hall")
B.u7=s(["desk","study","work"],t.s)
B.nf=new A.aw("kenney.desk",1.2,0.75,0.65,"office")
B.tT=s(["chair","desk-chair"],t.s)
B.n9=new A.aw("kenney.desk-chair",0.55,0.85,0.55,"office")
B.ua=s(["monitor","computer","crt","retro"],t.s)
B.nt=new A.aw("kenney.computer-screen",0.4,0.38,0.35,"office")
B.u4=s(["box","storage","archive","cellar"],t.s)
B.n7=new A.aw("kenney.cardboard-box",0.5,0.4,0.4,"utility")
B.uc=s(["roof","slate","tiles","exterior"],t.s)
B.ne=new A.aw("polyhaven.roof-slates",2,0.08,2,"roof")
B.uf=s(["ladder","loft","attic","wood","utility"],t.s)
B.nr=new A.aw("polyhaven.wooden-ladder",0.48,2.35,0.14,"attic")
B.tY=s(["crate","box","wood","attic","cellar"],t.s)
B.nq=new A.aw("polyhaven.wooden-crate-01",0.62,0.48,0.48,"storage")
B.ug=s(["lantern","oil","brass","attic","cellar","light"],t.s)
B.na=new A.aw("polyhaven.lantern-01",0.22,0.38,0.22,"lighting")
B.u_=s(["barrel","wine","wood","cellar"],t.s)
B.np=new A.aw("polyhaven.wine-barrel-01",0.68,0.94,0.68,"cellar")
B.tW=s(["chest","trunk","luggage","attic","storage"],t.s)
B.nn=new A.aw("kenney.chest",0.75,0.5,0.45,"attic")
B.tZ=s(["barrel","storage","cellar"],t.s)
B.nm=new A.aw("kenney.barrel",0.6,0.8,0.6,"cellar")
B.u5=s(["bucket","metal","sump","utility"],t.s)
B.nd=new A.aw("kenney.bucket",0.35,0.35,0.35,"utility")
B.u8=s(["pipe","conduit","downpipe","roof","cellar"],t.s)
B.no=new A.aw("kenney.detail-pipe",0.2,1,0.2,"utility")
B.mp=new A.a3(B.nz,[B.nu,B.ns,B.nk,B.nc,B.nh,B.nl,B.ni,B.n6,B.nj,B.ng,B.nb,B.n8,B.nf,B.n9,B.nt,B.n7,B.ne,B.nr,B.nq,B.na,B.np,B.nn,B.nm,B.nd,B.no],A.a2("a3<f,aw>"))
B.o5={uSsaoRaw:0,uSceneDepth:1}
B.mq=new A.a3(B.o5,[0,1],t.I)
B.dU={moveForward:0,moveBack:1,moveLeft:2,moveRight:3,interact:4,secondary:5,run:6,crouch:7,rotate:8,reach:9,journal:10,sleep:11,pause:12}
B.l6=s(["KeyW","GamepadDpadUp"],t.s)
B.l5=s(["KeyS","GamepadDpadDown"],t.s)
B.kY=s(["KeyA","GamepadDpadLeft"],t.s)
B.kZ=s(["KeyD","GamepadDpadRight"],t.s)
B.l_=s(["KeyE","GamepadA","GamepadRT"],t.s)
B.l3=s(["KeyQ","GamepadB"],t.s)
B.lb=s(["ShiftLeft","GamepadLB","GamepadLStick"],t.s)
B.lH=s(["ControlLeft","GamepadLT","GamepadRStick"],t.s)
B.l4=s(["KeyR","GamepadX"],t.s)
B.l0=s(["KeyF","GamepadRB"],t.s)
B.l1=s(["KeyJ","GamepadY","GamepadView"],t.s)
B.l2=s(["KeyL"],t.s)
B.kL=s(["Escape","GamepadMenu"],t.s)
B.mr=new A.a3(B.dU,[B.l6,B.l5,B.kY,B.kZ,B.l_,B.l3,B.lb,B.lH,B.l4,B.l0,B.l1,B.l2,B.kL],A.a2("a3<f,K<f>>"))
B.ms=new A.a3(B.dU,["Move forward","Move back","Move left","Move right","Interact","Secondary action","Run","Crouch","Rotate object","Reach / pull","Journal","Rest","Pause"],t.w)
B.o2={uScene:0,uHistory:1}
B.mt=new A.a3(B.o2,[0,1],t.I)
B.ny={RENDERER_SHA:0,GAME_SHA:1,DART_SDK_VERSION:2,LOCKFILE_SHA256:3,PROJECT_VERSION:4}
B.mu=new A.a3(B.ny,["a3a444afab9459e53377c7847b8efbd43e53eeb1","2aadfdef856665eb58dcb32952f00b349b9320bd","3.12.2","a926306a35f7fe2aa2fa6f13e88da839ffdab921cfc481f0fb166f46b969f4e6","0.2.0.3"],t.w)
B.nP={aPosition:0,aUvMat:1}
B.dJ=new A.a3(B.nP,[0,4],t.I)
B.nA={pickup:0,gate:1,explosion:2,blip:3,milestone:4,confirm:5,crossing:6,whoosh:7,glitch:8,toll:9,collapse:10,votive:11,rood:12,winnow:13,"clock-tick":14,"clock-chime":15,"clock-cuckoo":16,"clock-bell":17,"door-knock":18,"door-knock-soft":19,"window-wind":20,"house-creak":21,"timber-creak":22,"pipe-tick":23,"range-settle":24,"cellar-drip":25,"cistern-settle":26,"weather-rain":27,"weather-sleet":28,"weather-snow":29,"weather-hail":30,"weather-hail-roof":31,"weather-hail-tick":32,"weather-wind":33,"weather-window-rattle":34,"weather-window-tick":35,"weather-thunder-bed":36,"weather-interior-drip":37,"weather-interior-warmth":38,"weather-interior-coffee":39,"weather-coffee-clink":40,"weather-thunder-crack":41,"weather-thunder-roll":42,"step-above-0":43,"step-above-1":44,"step-above-2":45,"step-above-3":46}
B.mv=new A.a3(B.nA,["transient","transient","transient","transient","mid","mid","mid","air","air","sub","sub","mid","transient","transient","transient","mid","mid","mid","transient","transient","air","transient","transient","transient","transient","transient","transient","air","air","air","air","sub","transient","air","ambience","transient","sub","ambience","sub","ambience","transient","sub","sub","sub","sub","sub","sub"],t.w)
B.o3={uScene:0,uLut:1}
B.mw=new A.a3(B.o3,[0,1],t.I)
B.o4={uSource:0}
B.dK=new A.a3(B.o4,[0],t.I)
B.nW={uAlbedo:0,uShadowMap:1,uSsao:2,uNormalMap:3,uOrmMap:4,uEmissiveMap:5,uLightmap:6}
B.mx=new A.a3(B.nW,[0,1,2,3,4,5,6],t.I)
B.dL=new A.de([B.ab,"settings.visual",B.bY,"settings.graphics",B.ac,"settings.gameplay",B.bZ,"settings.controls",B.S,"settings.audio",B.T,"settings.accessibility"],t.EJ)
B.dM=new A.de([B.ab,"visual",B.bY,"graphics",B.ac,"gameplay",B.bZ,"controls",B.S,"audio",B.T,"accessibility"],t.EJ)
B.nI={uSharp:0,uBlurred:1,uSceneDepth:2}
B.my=new A.a3(B.nI,[0,1,2],t.I)
B.o6={uTex:0,uSkyTexture:1}
B.mz=new A.a3(B.o6,[0,1],t.I)
B.o_={uBloom:0}
B.mA=new A.a3(B.o_,[0],t.I)
B.o0={uSceneDepth:0}
B.dN=new A.a3(B.o0,[0],t.I)
B.o1={uScene:0}
B.mB=new A.a3(B.o1,[0],t.I)
B.H={}
B.dO=new A.a3(B.H,[],A.a2("a3<f,ik>"))
B.mC=new A.a3(B.H,[],A.a2("a3<f,K<y>>"))
B.aX=new A.a3(B.H,[],t.w)
B.uh=new A.a3(B.H,[],A.a2("a3<f,l>"))
B.bN=new A.a3(B.H,[],A.a2("a3<f,y>"))
B.A=new A.a3(B.H,[],t.I)
B.dP=new A.a3(B.H,[],A.a2("a3<f,@>"))
B.ui=new A.a3(B.H,[],A.a2("a3<f,f?>"))
B.mD=new A.a3(B.H,[],A.a2("a3<@,@>"))
B.nE={hall:0,kitchen:1,livingRoom:2,cellar:3,bedroom:4,landing:5,bathroom:6,spareRoom:7}
B.c1=new A.aU(0.5,0.75,1)
B.oG=new A.cA("hall.pendant","hall","point",2700,B.c1,300,360,!0)
B.lT=s([B.oG],t.W)
B.eb=new A.aU(0.7,0.85,1)
B.oC=new A.cA("kitchen.bare-bulb","kitchen","point",3500,B.eb,400,360,!0)
B.kD=s([B.oC],t.W)
B.eg=new A.aU(0.35,0.65,1)
B.oF=new A.cA("livingRoom.fire","livingRoom","point",2200,B.eg,500,360,!1)
B.oH=new A.cA("livingRoom.standard-lamp","livingRoom","spot",2200,B.eg,350,60,!0)
B.l7=s([B.oF,B.oH],t.W)
B.pX=new A.aU(0.8,0.9,1)
B.oE=new A.cA("cellar.downlight","cellar","spot",4000,B.pX,500,90,!0)
B.lS=s([B.oE],t.W)
B.oA=new A.cA("bedroom.bedside-lamp","bedroom","point",2700,B.c1,200,360,!0)
B.mb=s([B.oA],t.W)
B.oD=new A.cA("landing.wall-sconce","landing","point",2700,B.c1,250,360,!0)
B.kN=s([B.oD],t.W)
B.oB=new A.cA("bathroom.ceiling-fitting","bathroom","point",3500,B.eb,350,360,!0)
B.kA=s([B.oB],t.W)
B.lB=s([],t.W)
B.bO=new A.a3(B.nE,[B.lT,B.kD,B.l7,B.lS,B.mb,B.kN,B.kA,B.lB],A.a2("a3<f,K<cA>>"))
B.o8={"porcelain-albedo":0,"porcelain-normal":1}
B.mE=new A.a3(B.o8,["res/house/models/porcelain-mermaid-statuette/textures/retopo_Transferred%20Texture%20from%20Mesh.jpeg","res/house/models/porcelain-mermaid-statuette/textures/retopo_Normal%20Map%20from%20Mesh.jpeg"],t.w)
B.nC={aPosition:0,aNormal:1,aColor:2,aAlpha:3,aUvMat:4,aTangent:5,aUv1:6}
B.mF=new A.a3(B.nC,[0,1,2,3,4,5,6],t.I)
B.dX=new A.cZ(0,"resume")
B.dY=new A.cZ(1,"settings")
B.dZ=new A.cZ(2,"controls")
B.e_=new A.cZ(3,"save")
B.e0=new A.cZ(4,"help")
B.e1=new A.cZ(5,"credits")
B.e2=new A.cZ(6,"back")
B.mG=new A.de([B.dX,"pause.resume",B.dY,"pause.settings",B.dZ,"pause.controls",B.e_,"pause.save",B.e0,"pause.help",B.e1,"pause.credits",B.e2,"pause.back"],A.a2("de<cZ,f>"))
B.o7={uVolumetric:0}
B.mH=new A.a3(B.o7,[0],t.I)
B.nT={aPosition:0,aNormal:1,aColor:2,aAlpha:3}
B.mI=new A.a3(B.nT,[0,1,2,3],t.I)
B.bP=new A.de([B.b0,1,B.c9,1.5,B.ek,1.5,B.ca,2,B.cb,2,B.ah,4],A.a2("de<cC,y>"))
B.uj=new A.iS(0,"srgb")
B.uk=new A.iS(1,"linear")
B.mJ=new A.c2("weather:rain-particle",null,0.55,0.68,0.82,0.08,null,1,0.18,0,0,0.2,1,1,B.X,0.5,!1,!1)
B.mK=new A.c2("fire:white-vapour-particle",null,0.86,0.86,0.82,0,null,1,0.96,0,0,0.2,1,1,B.X,0.5,!1,!1)
B.mL=new A.c2("fire:flame-particle",null,1,0.42,0.06,2.4,null,1,0.28,0,0,0.2,1,1,B.X,0.5,!1,!1)
B.mM=new A.c2("weather:snow-particle",null,0.82,0.9,1,0.04,null,1,0.72,0,0,0.2,1,1,B.X,0.5,!1,!1)
B.mN=new A.c2("fire:black-soot-particle",null,0.06,0.065,0.075,0,null,1,1,0,0,0.2,1,1,B.X,0.5,!1,!1)
B.mO=new A.c2("weather:hail-particle",null,0.62,0.74,0.82,0.06,null,1,0.35,0,0,0.2,1,1,B.X,0.5,!1,!1)
B.bT=new A.dl(3,"ceramicConcrete")
B.mP=new A.bg("mat-ceramic-glaze",B.bT,"floor-linoleum",0.85,0.85,0.82,0.2,0,1)
B.bS=new A.dl(2,"metal")
B.mQ=new A.bg("mat-iron-cast",B.bS,"grime",0.2,0.2,0.22,0.65,0.85,1)
B.bQ=new A.dl(0,"plasterWallpaper")
B.mR=new A.bg("mat-wallpaper-stripes",B.bQ,"wall-plaster",0.7,0.63,0.55,0.82,0,1)
B.dQ=new A.dl(4,"fabric")
B.mS=new A.bg("mat-fabric-linen-sheet",B.dQ,"wall-plaster",0.88,0.86,0.82,0.88,0,1)
B.bR=new A.dl(1,"wood")
B.mT=new A.bg("fallback-mat",B.bR,"wood-oak",0.6,0.5,0.4,0.6,0,1)
B.mU=new A.bg("mat-fabric-curtains",B.dQ,"wall-plaster",0.48,0.22,0.2,0.9,0,1)
B.n4=new A.dl(5,"glass")
B.mV=new A.bg("mat-glass-clear-window",B.n4,"wall-plaster",0.92,0.95,0.98,0.05,0,0.25)
B.mW=new A.bg("mat-wood-mahogany-dark",B.bR,"wall-plaster",0.32,0.2,0.15,0.38,0,1)
B.mX=new A.bg("mat-wood-oak-polished",B.bR,"wall-plaster",0.46,0.34,0.25,0.42,0,1)
B.mY=new A.bg("mat-plaster-clean",B.bQ,"wall-plaster",0.72,0.7,0.68,0.85,0,1)
B.mZ=new A.bg("mat-concrete-floor",B.bT,"grime",0.47,0.45,0.42,0.96,0,1)
B.n_=new A.bg("mat-brass-wrought",B.bS,"wall-plaster",0.82,0.68,0.32,0.35,0.9,1)
B.n0=new A.bg("mat-enamel-white",B.bS,"wall-plaster",0.9,0.9,0.88,0.25,0.1,1)
B.n1=new A.bg("mat-wallpaper-damp",B.bQ,"grime",0.42,0.44,0.43,0.94,0,1)
B.n5=new A.dl(6,"masks")
B.n2=new A.bg("mat-mask-soot-damp",B.n5,"grime",0.15,0.15,0.15,0.98,0,1)
B.n3=new A.bg("mat-porcelain-glaze",B.bT,"floor-linoleum",0.94,0.94,0.92,0.12,0.05,1)
B.bU=new A.fr(0,"resident")
B.dR=new A.fr(1,"pending")
B.dS=new A.fr(2,"missing")
B.dT=new A.fr(3,"evicted")
B.un=new A.lQ(!1)
B.nv=new A.lQ(!0)
B.nw=new A.hA(0.88,0.065,0.02,4864556,!0)
B.bV=new A.hA(2.15,0.05,0.018,4864556,!1)
B.nx=new A.hA(0,0.18,0.024,4864556,!0)
B.lC=s([],t.bA)
B.lD=s([],A.a2("w<bH>"))
B.bW=new A.eK(B.lC,B.lD,null)
B.dV=new A.cz(1,"settings")
B.oa=new A.cz(2,"visual")
B.ob=new A.cz(3,"graphics")
B.oc=new A.cz(4,"gameplay")
B.od=new A.cz(5,"controls")
B.oe=new A.cz(6,"audio")
B.of=new A.cz(7,"accessibility")
B.og=new A.cz(8,"credits")
B.aa=new A.bH(1,"settings")
B.oh=new A.bH(2,"journal")
B.oi=new A.bH(3,"sleep")
B.oj=new A.bH(4,"help")
B.ok=new A.bH(5,"visitor")
B.ol=new A.bH(6,"ending")
B.e3=new A.eL(0,"opened")
B.e4=new A.eL(2,"backed")
B.e5=new A.eL(3,"resumed")
B.om=new A.eL(4,"dismissed")
B.ad=new A.eL(5,"unchanged")
B.on=new A.bI("residue-proclamation","fumigation order notice","hall","An official Ministry notice tacked into the hall door frame.","examine-proclamation")
B.oo=new A.bI("residue-shawl","tartan wool shawl","bedroom","A folded green-and-black wool shawl smelling faintly of cedar and coal smoke.","examine-shawl")
B.op=new A.bI("residue-telegram","Ministry telegram","hall","A buff envelope with gummed paper strips across the fold.","examine-telegram")
B.oq=new A.bI("residue-coal-sacks","two sacks of anthracite","cellar","Rough hessian bags of Welsh anthracite slumped beside the coal chute.","examine-coal-sacks")
B.or=new A.bI("residue-broth","earthenware broth jug","hall","A stone jug with grease-proof paper tied with string around the rim.","examine-broth")
B.os=new A.bI("residue-pears-step","pears on the front step","hall","A paper cone of garden pears left in the frost outside the draft excluder.","examine-pears-step")
B.ot=new A.bI("residue-paraffin-tin","one-gallon paraffin tin","kitchen","A red tin container with a stamped brass spout on the scullery stone.","examine-paraffin")
B.ou=new A.bI("residue-certificate","signed mill certificate carbon","living-room","A purple carbon copy of Quarantine Exemption Form 14-B.","examine-cert")
B.ov=new A.bI("residue-pears-sideboard","four garden pears","living-room","Four small brown pears resting on a porcelain saucer on the sideboard.","examine-pears")
B.ow=new A.m0(0,1,null)
B.oy=new A.m1(1,"high")
B.ox=new A.tB(!1,!0,!0,!0,!1,B.oy,35,256)
B.ri=new A.mz(1,"reinhard")
B.oz=new A.m5(1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,0,0,0,!1)
B.x=new A.eM(0,"none")
B.aA=new A.eM(1,"rain")
B.ae=new A.eM(2,"sleet")
B.af=new A.eM(3,"snow")
B.a0=new A.eM(4,"hail")
B.py=new A.d_(0,"tooShortForHeader")
B.pz=new A.d_(1,"badMagic")
B.pA=new A.d_(2,"unsupportedVersion")
B.e7=new A.d_(3,"unsupportedStride")
B.pB=new A.d_(4,"truncatedVertexData")
B.pC=new A.d_(5,"nonFiniteBounds")
B.e8=new A.d_(6,"nonFiniteVertex")
B.pD=new A.d_(7,"vertexCountNotMultipleOfThree")
B.c_=new A.fw(0,"safe")
B.U=new A.fw(1,"standard")
B.M=new A.fw(2,"high")
B.ai=new A.b_(B.H,0,t.M)
B.aB=new A.dZ(B.c_,B.ai)
B.nY={shadows:0}
B.qD=new A.b_(B.nY,1,t.M)
B.e9=new A.dZ(B.U,B.qD)
B.nF={shadows:0,ssao:1,bloom:2,dof:3,grade:4}
B.qt=new A.b_(B.nF,5,t.M)
B.pF=new A.dZ(B.M,B.qt)
B.nX={shadows:0,ssao:1,bloom:2,dof:3,grade:4,volumetric:5}
B.qC=new A.b_(B.nX,6,t.M)
B.ea=new A.dZ(B.M,B.qC)
B.pE=new A.fw(4,"shipping")
B.nH={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6}
B.qv=new A.b_(B.nH,7,t.M)
B.uq=new A.dZ(B.pE,B.qv)
B.ag=new A.md(0,0,0,1)
B.pG=new A.a6(0,1)
B.pH=new A.a6(256,256)
B.pI=new A.a6(4096,2048)
B.pJ=new A.a6(4096,4096)
B.pK=new A.a6(512,512)
B.pL=new A.aU(0.35,0.52,0.88)
B.pM=new A.aJ(0.46,0.25,0.2)
B.ec=new A.aU(0.22,0.45,0.92)
B.pN=new A.aJ(0.48,0.4,0.34)
B.pO=new A.aJ(0.31,0.25,0.23)
B.c0=new A.aU(0.75,0.52,0.42)
B.pP=new A.aU(0.4,0.65,0.95)
B.ed=new A.aU(0.88,0.96,1)
B.pQ=new A.aJ(0.37,0.33,0.31)
B.pR=new A.aU(0.62,0.48,0.45)
B.pS=new A.aJ(0.34,0.32,0.29)
B.ee=new A.aJ(0.38,0.25,0.19)
B.c2=new A.aU(0.9,0.8,0.72)
B.aY=new A.aU(0.28,0.16,0.12)
B.pT=new A.aJ(0.31,0.28,0.24)
B.c3=new A.aU(0.65,0.45,0.35)
B.pU=new A.aJ(0.58,0.56,0.5)
B.ef=new A.aU(0.2,0.38,0.9)
B.pV=new A.aJ(0.44,0.37,0.28)
B.pW=new A.aJ(0.52,0.5,0.44)
B.pY=new A.aJ(0.24,0.25,0.27)
B.pZ=new A.aJ(0.28,0.27,0.25)
B.q_=new A.aU(0.35,0.28,0.25)
B.eh=new A.aU(0.52,0.32,0.38)
B.q0=new A.aJ(0.42,0.4,0.38)
B.q1=new A.aJ(0.18,0.2,0.21)
B.q2=new A.aJ(0.2,0.12,0.1)
B.aZ=new A.aU(0.35,0.2,0.15)
B.q3=new A.aJ(0.12,0.15,0.2)
B.q4=new A.hG(0,"constructed")
B.a1=new A.hG(1,"ready")
B.c4=new A.hG(2,"lost")
B.q5=new A.je(B.aB,384,216,1,B.bf,0,512,32,4,1,B.cR)
B.c5=new A.fA(0,"constructed")
B.q6=new A.fA(1,"initializing")
B.c6=new A.fA(2,"ready")
B.ei=new A.fA(3,"contextLost")
B.i=new A.hH(0,"read")
B.k=new A.hH(1,"write")
B.V=new A.hH(2,"historyRead")
B.c7=new A.hI(0,"prepared")
B.q7=new A.hI(1,"committed")
B.q8=new A.hI(2,"rolledBack")
B.u=new A.jg(0,"rgba8")
B.q9=new A.aS("dofBlurH",B.u,192,108,1,0)
B.qa=new A.aS("dofBlurV",B.u,192,108,1,0)
B.qb=new A.aS("dofOutput",B.u,384,216,1,0)
B.ej=new A.jg(2,"depth24")
B.qc=new A.aS("shadowMap",B.ej,512,512,1,0)
B.qd=new A.aS("volumetricLight",B.u,192,108,1,0)
B.qe=new A.aS("sceneColor",B.u,384,216,1,1)
B.qf=new A.aS("ssaoRaw",B.u,192,108,1,0)
B.qg=new A.aS("ssaoBlurred",B.u,192,108,1,0)
B.qh=new A.aS("gradeOutput",B.u,384,216,1,0)
B.qi=new A.aS("vhsOutput",B.u,384,216,1,0)
B.qj=new A.aS("sceneDepth",B.ej,384,216,1,0)
B.qk=new A.aS("bloomBlurH",B.u,192,108,1,0)
B.ql=new A.aS("bloomBlurV",B.u,192,108,1,0)
B.qm=new A.aS("present",B.u,384,216,1,0)
B.c8=new A.aS("sceneColor",B.u,384,216,1,0)
B.qn=new A.aS("ps1Output",B.u,384,216,1,0)
B.qo=new A.fC(null,"save storage unavailable")
B.qp=new A.fC(null,"save could not be recovered")
B.qq=new A.fC(null,null)
B.nL={WheelUp:0,WheelDown:1}
B.qr=new A.b_(B.nL,2,t.M)
B.nU={open:0,closed:1}
B.qs=new A.b_(B.nU,2,t.M)
B.nN={shadows:0,ssao:1,bloom:2,dof:3,grade:4,ps1:5,vhs:6,msaa:7,"material-array":8,volumetric:9}
B.qu=new A.b_(B.nN,10,t.M)
B.nD={Escape:0}
B.el=new A.b_(B.nD,1,t.M)
B.nB={open:0,closed:1,mixed:2}
B.qw=new A.b_(B.nB,3,t.M)
B.nS={front:0,"rear-service":1}
B.qx=new A.b_(B.nS,2,t.M)
B.nR={"living-room":0}
B.em=new A.b_(B.nR,1,t.M)
B.qy=new A.hp([18,20],A.a2("hp<k>"))
B.nV={overcast:0,rain:1}
B.qz=new A.b_(B.nV,2,t.M)
B.nQ={GamepadA:0,GamepadB:1,GamepadX:2,GamepadY:3,GamepadLB:4,GamepadRB:5,GamepadLT:6,GamepadRT:7,GamepadView:8,GamepadMenu:9,GamepadLStick:10,GamepadRStick:11,GamepadDpadUp:12,GamepadDpadDown:13,GamepadDpadLeft:14,GamepadDpadRight:15}
B.qA=new A.b_(B.nQ,16,t.M)
B.nM={Escape:0,Tab:1,F11:2}
B.en=new A.b_(B.nM,3,t.M)
B.nJ={Mouse0:0,Mouse1:1,Mouse2:2,Mouse3:3,Mouse4:4}
B.qB=new A.b_(B.nJ,5,t.M)
B.nG={front:0,"rear-service":1,"side-boundary":2,"roof-drainage":3,street:4,"opposite-house":5,"neighbor-roofs":6}
B.aC=new A.b_(B.nG,7,t.M)
B.eq=new A.fE(2,"link")
B.qO=new A.jl(B.eq,"gl.createProgram() returned null")
B.eo=new A.fE(0,"vertex")
B.ep=new A.fE(1,"fragment")
B.er=new A.fE(3,"validation")
B.B=new A.jm(0,"live")
B.es=new A.jm(1,"unavailable")
B.qW=new A.jn(0,"full")
B.qX=new A.jn(2,"culled")
B.r1=new A.bq(0,"polarNight")
B.r2=new A.bq(1,"astronomicalDawn")
B.r3=new A.bq(10,"civilDusk")
B.r4=new A.bq(11,"nauticalDusk")
B.r5=new A.bq(12,"astronomicalDusk")
B.r6=new A.bq(13,"night")
B.r7=new A.bq(14,"polarDay")
B.r8=new A.bq(2,"nauticalDawn")
B.r9=new A.bq(3,"civilDawn")
B.ra=new A.bq(4,"sunrise")
B.eu=new A.bq(5,"morning")
B.rb=new A.bq(6,"solarNoon")
B.rc=new A.bq(7,"afternoon")
B.rd=new A.bq(8,"goldenHour")
B.re=new A.bq(9,"sunset")
B.E=new A.A(0,1,0)
B.a5=new A.A(0,-1,0)
B.rf=new A.bT(-1,B.E,B.a5,B.bu,1,1,0.3,0.5)
B.rg=new A.mu(!1,"","",B.bD,B.bD)
B.ey=new A.e4(0,"resident")
B.ez=new A.e4(1,"pending")
B.eA=new A.e4(2,"missing")
B.eB=new A.e4(3,"evicted")
B.w=new A.A(0,0,0)
B.q=new A.e5(B.w,B.ag,1)
B.rj=A.cK("Lt")
B.rk=A.cK("Lu")
B.rl=A.cK("q5")
B.rm=A.cK("q6")
B.rn=A.cK("Gk")
B.ro=A.cK("Gl")
B.rp=A.cK("Gm")
B.rq=A.cK("ak")
B.rr=A.cK("L")
B.rs=A.cK("vD")
B.rt=A.cK("vE")
B.ru=A.cK("Hs")
B.rv=A.cK("ca")
B.e=new A.dv(0,"float1")
B.al=new A.dv(1,"float2")
B.m=new A.dv(2,"float3")
B.rw=new A.dv(3,"float4")
B.r=new A.dv(4,"mat4")
B.eC=new A.dv(5,"mat4Array")
B.cl=new A.q(B.e,0)
B.eD=new A.q(B.e,1)
B.a4=new A.dv(6,"sampler")
B.y=new A.q(B.a4,0)
B.am=new A.q(B.a4,1)
B.eE=new A.q(B.a4,2)
B.rx=new A.q(B.a4,3)
B.ry=new A.q(B.a4,4)
B.rz=new A.q(B.a4,5)
B.rA=new A.q(B.a4,6)
B.rB=new A.vI(!1)
B.rC=new A.A(0,0,1)
B.rD=new A.A(0,3,0)
B.b2=new A.A(1,0,0)
B.rE=new A.A(0,0.52,0)
B.rF=new A.A(0.08,0.04,0.08)
B.rG=new A.A(0,-9.81,0)
B.rH=new A.A(0,0.34,0)
B.rI=new A.A(1/0,1/0,1/0)
B.rJ=new A.A(0,2.8,0)
B.rK=new A.A(2.75,3,2.75)
B.rL=new A.A(0.045,0.025,0.045)
B.rM=new A.A(0.1,0.05,0.1)
B.rN=new A.A(-1/0,-1/0,-1/0)
B.eF=new A.d1(1,"normal")
B.cn=new A.d1(6,"tangent4")
B.rO=new A.d1(0,"position")
B.cp=new A.bi(B.rO,0,3)
B.cq=new A.bi(B.eF,3,3)
B.eM=new A.bi(B.cn,6,4)
B.eG=new A.d1(2,"color")
B.eJ=new A.bi(B.eG,10,4)
B.eH=new A.d1(4,"alpha")
B.eK=new A.bi(B.eH,14,1)
B.eI=new A.d1(5,"uv0")
B.eL=new A.bi(B.eI,15,2)
B.rP=new A.d1(7,"uv1")
B.rT=new A.bi(B.rP,17,2)
B.co=new A.d1(8,"legacyMaterialEffect")
B.rW=new A.bi(B.co,19,1)
B.m5=s([B.cp,B.cq,B.eM,B.eJ,B.eK,B.eL,B.rT,B.rW],t.v5)
B.rX=new A.jv("surfaceV2WithUv1",20,B.m5)
B.rQ=new A.bi(B.eG,6,4)
B.rR=new A.bi(B.eH,10,1)
B.rS=new A.bi(B.eI,11,2)
B.rU=new A.bi(B.co,13,1)
B.lg=s([B.cp,B.cq,B.rQ,B.rR,B.rS,B.rU],t.v5)
B.an=new A.jv("compatibility14",14,B.lg)
B.rV=new A.bi(B.co,17,1)
B.kx=s([B.cp,B.cq,B.eM,B.eJ,B.eK,B.eL,B.rV],t.v5)
B.rY=new A.jv("surfaceV2",18,B.kx)
B.rZ=new A.eQ(0,"visitorAnswered")
B.eN=new A.eQ(1,"visitorIgnored")
B.t_=new A.eQ(2,"entryVerified")
B.t0=new A.eQ(3,"entryContradicted")
B.t1=new A.eQ(4,"exposureAccepted")
B.t3=new A.dw(1,"malformedDay")
B.t4=new A.dw(2,"malformedTier")
B.eO=new A.dw(3,"missingTierLines")
B.ap=new A.dw(6,"invalidPhase")
B.t7=new A.bL(B.ap,"No reaction is due.")
B.tf=new A.bC(B.t7)
B.tc=new A.bL(B.ap,"The active visit cannot be chosen.")
B.tg=new A.bC(B.tc)
B.t8=new A.bL(B.ap,"The active visit has no line to advance.")
B.th=new A.bC(B.t8)
B.t6=new A.dw(5,"noActiveVisit")
B.t9=new A.bL(B.t6,"There is no active visit.")
B.eP=new A.bC(B.t9)
B.tb=new A.bL(B.ap,"A visit is already active.")
B.ti=new A.bC(B.tb)
B.t5=new A.dw(4,"noArrival")
B.te=new A.bL(B.t5,"The authored arrival is missing.")
B.tj=new A.bC(B.te)
B.ta=new A.bL(B.ap,"That answer is not offered.")
B.tk=new A.bC(B.ta)
B.t2=new A.dw(0,"missingCorpus")
B.td=new A.bL(B.t2,"The authored visitor corpus is empty.")
B.tl=new A.bC(B.td)
B.tm=new A.eU(0,"none")
B.tn=new A.eU(1,"splash")
B.ct=new A.eU(2,"settle")
B.to=new A.eU(3,"melt")
B.eQ=new A.eU(4,"rebound")
B.tp=new A.fK(-0.2,0.9,1.6,2.5,1.8,!1,0.00001)
B.tq=new A.fK(-2,8.8,4.5,0.9,1,!0,0.00005)
B.tr=new A.fK(0,0,0,1,1,!1,0)
B.ts=new A.fK(-5,18,5.5,0.65,1.35,!0,0.001)
B.tt=new A.fK(-1.5,5.5,3.5,1.1,1.1,!0,0.0001)
B.eR=new A.fN(1,"exact")
B.cu=new A.fN(2,"partial")
B.b4=new A.fN(3,"contradiction")
B.tu=new A.fN(0,"skipped")
B.tv=new A.fM(B.tu,B.ai)
B.tw=new A.fM(B.cu,B.ai)
B.tx=new A.jz(B.a8,!1)
B.ty=new A.jz(B.a8,!0)
B.eS=new A.jB(0,"horizontal")
B.tz=new A.jB(1,"vertical")
B.eT=new A.jD(0,"horizontal")
B.tA=new A.jD(1,"vertical")
B.b5=new A.hW(0,"empty")
B.tO=new A.hW(1,"cpuReady")
B.b6=new A.hW(4,"released")})();(function staticFields(){$.wG=null
$.cr=A.d([],A.a2("w<L>"))
$.Cb=null
$.tO=0
$.tP=A.JH()
$.Bz=null
$.By=null
$.Em=null
$.Ed=null
$.Ev=null
$.yZ=null
$.z6=null
$.B9=null
$.x6=A.d([],A.a2("w<K<L>?>"))
$.i8=null
$.kj=null
$.kk=null
$.AH=!1
$.at=B.D
$.CD=""
$.CE=null
$.p4=null
$.Cy=null
$.tm=null
$.dA=A.al()
$.fW=A.al()
$.aA=null
$.xk=A.al()
$.DF=null
$.o=A.al()
$.Dk=A.al()
$.d5=A.al()
$.ap=A.al()
$.T=A.al()
$.bD=A.al()
$.X=A.al()
$.Aq=A.al()
$.xm=null
$.AC=null
$.bs=null
$.Au=!1
$.AR=!1
$.kg=B.ba
$.dB=B.aJ
$.yH=!1
$.B2=!1
$.DH=null
$.i4=null
$.o0=A.n(t.N,t.xe)
$.nO=null
$.Dt=0
$.Ec=0
$.AI=null
$.fZ=!1
$.DG=!1
$.AJ=0
$.f2=0
$.Aw="booting"
$.cq=0
$.f7=0
$.ah="hall"
$.f1=A.al()
$.i1=A.al()
$.cp=A.al()
$.DM=null
$.AS=0
$.AW=1.65
$.f5=null
$.bm=null
$.kn=!1
$.cJ=A.al()
$.i2=A.al()
$.kd=A.al()
$.nM=A.al()
$.Dj=A.al()
$.Di=A.al()
$.aE=A.al()
$.fX=A.al()
$.kc=A.al()
$.nL=A.al()
$.ke=A.al()
$.kf=A.al()
$.fV=A.al()
$.f0=A.al()
$.i0=A.al()
$.kb=A.al()
$.k9=A.al()
$.ka=A.al()
$.aV=A.al()
$.nK=A.al()
$.bl=A.al()
$.yI=A.a1(t.S)
$.dC=A.d([],t.s)
$.AA=null
$.E3=!1
$.Dl=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Lw","EF",()=>A.z0("_$dart_dartClosure"))
s($,"Lv","zP",()=>A.z0("_$dart_dartClosure_dartJSInterop"))
s($,"Mj","F6",()=>A.d([new J.lC()],A.a2("w<jj>")))
s($,"LL","EJ",()=>A.e7(A.vC({
toString:function(){return"$receiver$"}})))
s($,"LM","EK",()=>A.e7(A.vC({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"LN","EL",()=>A.e7(A.vC(null)))
s($,"LO","EM",()=>A.e7(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"LR","EP",()=>A.e7(A.vC(void 0)))
s($,"LS","EQ",()=>A.e7(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"LQ","EO",()=>A.e7(A.CA(null)))
s($,"LP","EN",()=>A.e7(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"LU","ES",()=>A.e7(A.CA(void 0)))
s($,"LT","ER",()=>A.e7(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"LW","Bj",()=>A.HY())
s($,"M_","EX",()=>A.GG(4096))
s($,"LY","EV",()=>new A.xg().$0())
s($,"LZ","EW",()=>new A.xf().$0())
s($,"LX","EU",()=>A.GF(A.S(A.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Ma","ii",()=>A.o6(B.rr))
s($,"LJ","Bi",()=>{A.GY()
return $.tO})
s($,"Ls","EE",()=>B.c8.iR())
s($,"LB","Bh",()=>A.lZ(A.d([255,255,255,255],t.t)))
s($,"Ly","Be",()=>A.lZ(A.d([128,128,255,255],t.t)))
s($,"Lx","Bd",()=>A.lZ(A.d([0,0,0,255],t.t)))
s($,"Lz","Bf",()=>A.lZ(A.d([255,255,255,255],t.t)))
s($,"LA","Bg",()=>A.lZ(A.d([255,255,255,255],t.t)))
s($,"Mp","Fa",()=>A.ju(0,1,0))
s($,"LV","ET",()=>A.HV(A.a1(t.N),0,0,A.ju(0,0,0)))
s($,"LC","EG",()=>{var q=new A.rN(A.n(t.N,A.a2("bg")))
q.aI(B.mY)
q.aI(B.mR)
q.aI(B.n1)
q.aI(B.mX)
q.aI(B.mW)
q.aI(B.mQ)
q.aI(B.n_)
q.aI(B.n0)
q.aI(B.mP)
q.aI(B.n3)
q.aI(B.mZ)
q.aI(B.mU)
q.aI(B.mS)
q.aI(B.mV)
q.aI(B.n2)
return q})
s($,"LE","EH",()=>new A.qP())
s($,"LI","EI",()=>{var q=A.tg(0),p=A.tg(0),o=A.tg(0)
return A.H8(p,A.tg(0),q,o)})
s($,"LF","ks",()=>{var q=new A.qS(A.n(t.N,A.a2("c6")))
q.bC(new A.lu("hall"))
q.bC(new A.lL("living-room"))
q.bC(new A.lI("kitchen"))
q.bC(new A.kR("cellar"))
q.bC(new A.kL("bedroom"))
q.bC(new A.lJ("landing"))
q.bC(new A.kK("bathroom"))
q.bC(new A.mr("spare-room"))
return q})
s($,"Ml","F7",()=>A.jc("^[a-z0-9][a-z0-9._-]*$"))
s($,"Ms","h3",()=>{var q=$.Cy
if(q==null){A.yV()
A.yV()
A.yV()
A.yV()
q=$.Cy=new A.vq()}return q})
s($,"LD","zQ",()=>A.zW(B.bj,B.d7,!0,B.bk,B.d9,B.dc,B.dd,B.df,!0,!1,B.dh))
s($,"M5","EY",()=>new A.pg())
r($,"E6","dE",()=>A.Ab(null,null))
r($,"ki","ku",()=>A.hr(null,null))
r($,"Az","h2",()=>A.hh(null,null,!1,1,!1,!1,2,1))
r($,"AD","cM",()=>$.zQ())
s($,"Mh","F4",()=>A.IP())
s($,"Mi","F5",()=>new A.tW(A.n(t.N,t.i)))
s($,"Mb","F0",()=>new A.qT())
s($,"Mc","F1",()=>new A.r3())
s($,"Md","zS",()=>new A.rk(A.n(t.N,t.S)))
s($,"M7","EZ",()=>A.e8().gb2().h(0,"debugPause")==="1")
s($,"M4","kt",()=>A.e8().gb2().h(0,"automation")==="1")
s($,"M1","zR",()=>A.JY())
s($,"M0","Bk",()=>$.zR()!=null)
s($,"M2","Bl",()=>$.kt()?A.e8().gb2().h(0,"captureMantleId"):null)
s($,"M3","Bm",()=>A.e8().gb2().h(0,"captureMantleLit")==="1")
r($,"yD","el",()=>A.ju(0,0,0))
r($,"yv","F3",()=>A.ju(0,0,0))
r($,"yO","o8",()=>A.ju(0,0,0))
s($,"M6","Bn",()=>A.JZ())
s($,"Mf","kv",()=>new A.q8(A.ju(0,0,0)))
s($,"Me","F2",()=>new A.rJ(new A.pN()))
s($,"M8","cL",()=>new A.qr(A.d([],t.s)))
s($,"Mk","bX",()=>A.Ct())
s($,"Mn","F8",()=>new A.v1(A.n(t.N,t.oZ)))
s($,"Mm","Bo",()=>new A.tY(A.H0(520588),B.bt))
s($,"Mo","F9",()=>new A.w_())
s($,"M9","F_",()=>new A.qL())
s($,"Mg","ij",()=>new A.tq(B.bW))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eJ,ArrayBuffer:A.hB,ArrayBufferView:A.iZ,DataView:A.lS,Float32Array:A.iW,Float64Array:A.lT,Int16Array:A.lU,Int32Array:A.lV,Int8Array:A.lW,Uint16Array:A.lX,Uint32Array:A.lY,Uint8ClampedArray:A.ft,CanvasPixelArray:A.ft,Uint8Array:A.j_})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.bx.$nativeSuperclassTag="ArrayBufferView"
A.jL.$nativeSuperclassTag="ArrayBufferView"
A.jM.$nativeSuperclassTag="ArrayBufferView"
A.iX.$nativeSuperclassTag="ArrayBufferView"
A.jN.$nativeSuperclassTag="ArrayBufferView"
A.jO.$nativeSuperclassTag="ArrayBufferView"
A.iY.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.o5
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()