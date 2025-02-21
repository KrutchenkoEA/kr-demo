import{a as ae}from"./chunk-ETNIDDLY.js";import{d as se,e as _e}from"./chunk-4XYOG24P.js";import{f as Y,h as pe}from"./chunk-OBG5UKQF.js";import{a as L,c as Z,e as U,f as ee,i as te,k as ne,l as ie,t as re,u as oe,x as he,y as fe}from"./chunk-47JRDGKM.js";import{t as J,v as ce}from"./chunk-76LGIJVN.js";import{d as Q,k as G,q as me}from"./chunk-TYLZM6EP.js";import{$ as w,B as K,C as le,Cb as H,Da as F,Eb as R,Kb as q,Lb as c,M as P,Mb as V,Mc as B,Nb as E,Ub as a,Vb as m,Wb as j,Z as v,_b as g,da as O,dc as p,ec as h,fa as ue,ib as s,ic as x,jb as b,jc as k,kc as y,n as M,nc as C,oc as D,qc as T,ta as u,ua as d,v as I,vc as N,wc as z,ya as $,yb as A,zb as de}from"./chunk-BNTXLAQM.js";var ge=(i,t,e)=>Math.min(e,Math.max(t,i)),S=class{constructor(t,e){this.document=t;this.changeDetector=e}min;max;step;get startPercent(){return(this.startValue-this.min)/(this.max-this.min)*100}get endPercent(){return(this.endValue-this.min)/(this.max-this.min)*100}startValue=this.min;endValue=this.max;active;startControl=new te(this.min,[]);endControl=new te(this.max,[]);slider;start;end;get handlerWidth(){return this.end.nativeElement?.getBoundingClientRect().width??0}get sliderWidth(){return this.slider.nativeElement?.getBoundingClientRect().width??0}delta=0;destroy$=new M;dragStart$=new M;drag$=new M;dragEnd$=new M;step$=new M;onInit(){le(this.dragStart$,this.drag$,this.dragEnd$).pipe(I(t=>this.mouseToValue(t)),I(t=>this.constrain(t)),P()).subscribe(t=>this.patchValues(t)),this.step$.pipe(I(t=>this.constrain(t)),P()).subscribe(t=>this.patchValues(t)),this.startControl.valueChanges.pipe(w(()=>this.active=this.start?.nativeElement),I(t=>ge(t,this.min,this.endControl.value)),w(t=>this.startValue=t),w(()=>this.changeDetector.markForCheck()),P()).subscribe(()=>this.onModelChange()),this.endControl.valueChanges.pipe(w(()=>this.active=this.end?.nativeElement),I(t=>ge(t,this.startControl.value,this.max)),w(t=>this.endValue=t),w(()=>this.changeDetector.markForCheck()),P()).subscribe(()=>this.onModelChange())}onControlBlur(t){t.patchValue(t===this.startControl?this.startValue:this.endValue),this.active=null}onBarMouseDown(t){if(K(this.document,"mousemove").pipe(v(this.dragEnd$),v(this.destroy$)).subscribe(e=>this.onBarMouseMove(e)),K(this.document,"mouseup").pipe(v(this.dragEnd$),v(this.destroy$)).subscribe(e=>this.onBarMouseUp(e)),this.start&&this.end){let e=this.mouseToValue(t.clientX),r=this.startControl.value,n=this.endControl.value;Math.abs(e-r)>Math.abs(e-n)?this.active=this.end.nativeElement:this.active=this.start.nativeElement}else this.active=this.end.nativeElement;this.delta=-this.handlerWidth*.5,this.dragStart$.next(t.clientX)}onHandleMouseDown(t,e){K(this.document,"mousemove").pipe(v(this.dragEnd$),v(this.destroy$)).subscribe(r=>this.onHandleMouseMove(r)),K(this.document,"mouseup").pipe(v(this.dragEnd$),v(this.destroy$)).subscribe(r=>this.onHandleMouseUp(r)),this.active=e,this.delta=e.getBoundingClientRect().x-t.clientX,this.dragStart$.next(t.clientX),t.stopPropagation()}onHandleKeyDown(t,e){this.active=e;let r=this.step?this.step:(this.max-this.min)*.1,n=this.startControl.value,o=this.endControl.value;t.keyCode===37?e===this.end.nativeElement?this.step$.next(o-r):this.step$.next(n-r):t.keyCode===39&&(e===this.end.nativeElement?this.step$.next(o+r):this.step$.next(n+r))}onDecrease(t){this.active=t===this.startControl?this.start.nativeElement:this.end.nativeElement;let e=this.step?this.step:(this.max-this.min)*.1;this.step$.next(t.value-e)}onIncrease(t){this.active=t===this.startControl?this.start.nativeElement:this.end.nativeElement;let e=this.step?this.step:(this.max-this.min)*.1;this.step$.next(t.value+e)}onDestroy(){this.destroy$.next()}onHandleMouseMove(t){this.drag$.next(t.clientX)}onHandleMouseUp(t){this.dragEnd$.next(t.clientX),this.active=null}onBarMouseMove(t){this.drag$.next(t.clientX)}onBarMouseUp(t){this.dragEnd$.next(t.clientX),this.active=null}constrain(t){this.step&&(t=Math.round(t/this.step)*this.step);let e=this.startControl.value,r=this.endControl.value;return this.active===this.end.nativeElement?t=Math.min(this.max,Math.max(e,t)):t=Math.min(r,Math.max(this.min,t)),t}mouseToValue(t){let{left:e}=this.slider.nativeElement.getBoundingClientRect(),r=(t-e+this.delta+this.handlerWidth*.5)/this.sliderWidth;return(this.max-this.min)*r+this.min}patchValues(t){this.active===this.end.nativeElement?this.endControl.setValue(t):this.startControl.setValue(t)}};var xe=["slider"],ke=["start"],ye=["end"];function we(i,t){if(i&1){let e=g();a(0,"krui-form-field",14)(1,"input",15),p("blur",function(){u(e);let n=h();return d(n.onControlBlur(n.startControl))}),m()()}if(i&2){let e=h();s(),c("formControl",e.startControl)("min",e.min)("step",e.step),q("max",e.endValue)}}function Ve(i,t){if(i&1){let e=g();a(0,"svg-icon",16),p("click",function(){u(e);let n=h();return d(n.onDecrease(n.startControl))}),m()}}function Ee(i,t){if(i&1&&(a(0,"label",17),D(1),m()),i&2){let e=h();s(),T(" ",e.min," ")}}function Me(i,t){if(i&1&&(a(0,"label",18),D(1),m()),i&2){let e=h();s(),T(" ",e.max," ")}}function Ie(i,t){if(i&1){let e=g();a(0,"svg-icon",19),p("click",function(){u(e);let n=h();return d(n.onIncrease(n.endControl))}),m()}}function Re(i,t){if(i&1){let e=g();a(0,"krui-form-field",20)(1,"input",21),p("blur",function(){u(e);let n=h();return d(n.onControlBlur(n.endControl))}),m()()}if(i&2){let e=h();s(),c("formControl",e.endControl)("max",e.max)("step",e.step),q("min",e.startValue)}}var X=class i extends S{constructor(e,r,n){super(e,r);this.document=e;this.changeDetectorRef=r;this.injector=n}disabled=!1;min=0;max=100;step=1;buttons=!1;inputs=!1;labels=!1;onChange=new F;ngControl;slider;start;end;_onChange;onTouched;writeValue(e){this.active||(this.endControl.patchValue(e?.[1]??this.max),this.startControl.patchValue(e?.[0]??this.min),this.active=null)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.disabled?(this.startControl.disable(),this.endControl.disable()):(this.startControl.enable(),this.endControl.enable())}ngOnInit(){super.onInit(),this.ngControl=this.injector.get(U,null)}ngAfterViewInit(){setTimeout(()=>{this.ngControl||this.writeValue([this.min,this.max])})}ngOnDestroy(){super.onDestroy()}onModelChange(){this._onChange&&this._onChange([this.startValue,this.endValue]),this.onChange.emit([this.startValue,this.endValue])}static \u0275fac=function(r){return new(r||i)(b(Q),b(B),b($))};static \u0275cmp=A({type:i,selectors:[["krui-range"]],viewQuery:function(r,n){if(r&1&&(x(xe,5),x(ke,5),x(ye,5)),r&2){let o;k(o=y())&&(n.slider=o.first),k(o=y())&&(n.start=o.first),k(o=y())&&(n.end=o.first)}},inputs:{disabled:"disabled",min:"min",max:"max",step:"step",buttons:"buttons",inputs:"inputs",labels:"labels"},outputs:{onChange:"onChange"},standalone:!1,features:[N([{provide:L,useExisting:O(()=>i),multi:!0}]),H],decls:15,vars:20,consts:[["slider",""],["start",""],["end",""],[1,"slider-container",3,"dragstart"],["class","slider-input krui-mr--xs",4,"ngIf"],["class","krui-btn--icon krui-icon--sm krui-mr--xs","src","kruiIconPlusMinusCircle",3,"click",4,"ngIf"],["class","krui-typography--regular krui-text--default krui-mr--xs",4,"ngIf"],[1,"krui-slider",3,"mousedown"],[1,"krui-slider__bar"],[1,"krui-slider__range"],["cdkMonitorElementFocus","","tabindex","0",1,"krui-slider__handle",3,"keydown","mousedown"],["class","krui-typography--regular krui-text--default krui-ml--xs",4,"ngIf"],["class","krui-btn--icon krui-icon--sm krui-ml--xs","src","kruiIconPlusAddCircle",3,"click",4,"ngIf"],["class","slider-input krui-ml--xs",4,"ngIf"],[1,"slider-input","krui-mr--xs"],["kruiInput","","size","sm","tabindex","0","type","number",1,"krui-input--no-appearance",3,"blur","formControl","min","step"],["src","kruiIconPlusMinusCircle",1,"krui-btn--icon","krui-icon--sm","krui-mr--xs",3,"click"],[1,"krui-typography--regular","krui-text--default","krui-mr--xs"],[1,"krui-typography--regular","krui-text--default","krui-ml--xs"],["src","kruiIconPlusAddCircle",1,"krui-btn--icon","krui-icon--sm","krui-ml--xs",3,"click"],[1,"slider-input","krui-ml--xs"],["kruiInput","","size","sm","tabindex","0","type","number",1,"krui-input--no-appearance",3,"blur","formControl","max","step"]],template:function(r,n){if(r&1){let o=g();a(0,"div",3),p("dragstart",function(l){return u(o),d(l.preventDefault())}),R(1,we,2,4,"krui-form-field",4)(2,Ve,1,0,"svg-icon",5)(3,Ee,2,1,"label",6),a(4,"div",7,0),p("mousedown",function(l){return u(o),d(n.onBarMouseDown(l))}),j(6,"div",8)(7,"div",9),a(8,"a",10,1),p("keydown",function(l){u(o);let _=C(9);return d(n.onHandleKeyDown(l,_))})("mousedown",function(l){u(o);let _=C(9);return d(n.onHandleMouseDown(l,_))}),m(),a(10,"a",10,2),p("keydown",function(l){u(o);let _=C(11);return d(n.onHandleKeyDown(l,_))})("mousedown",function(l){u(o);let _=C(11);return d(n.onHandleMouseDown(l,_))}),m()(),R(12,Me,2,1,"label",11)(13,Ie,1,0,"svg-icon",12)(14,Re,2,4,"krui-form-field",13),m()}if(r&2){let o=C(9),f=C(11);E("krui-disabled",n.disabled),s(),c("ngIf",n.inputs),s(),c("ngIf",n.buttons),s(),c("ngIf",n.labels),s(4),V("left",n.startPercent,"%")("width",n.endPercent-n.startPercent,"%"),s(),V("left",n.startPercent,"%"),E("krui-slider__handle--active",n.active===o),s(2),V("left",n.endPercent,"%"),E("krui-slider__handle--active",n.active===f),s(2),c("ngIf",n.labels),s(),c("ngIf",n.buttons),s(),c("ngIf",n.inputs)}},styles:["[_nghost-%COMP%]{display:inline-block;color:var(--color-logo);min-width:120px}.slider-container[_ngcontent-%COMP%]{display:flex;flex-flow:row;flex-wrap:nowrap;align-items:center;gap:2px}.slider-input[_ngcontent-%COMP%]{width:48px;max-width:48px;flex-shrink:0}input[_ngcontent-%COMP%]:disabled{opacity:1}"]})};var De=["slider"],Te=["start"],Se=["end"];function Ke(i,t){if(i&1){let e=g();a(0,"svg-icon",12),p("click",function(){u(e);let n=h();return d(n.onDecrease(n.endControl))}),m()}}function Pe(i,t){if(i&1&&(a(0,"label",13),D(1),m()),i&2){let e=h();s(),T(" ",e.min," ")}}function Oe(i,t){if(i&1&&(a(0,"label",14),D(1),m()),i&2){let e=h();s(),T(" ",e.max," ")}}function $e(i,t){if(i&1){let e=g();a(0,"svg-icon",15),p("click",function(){u(e);let n=h();return d(n.onIncrease(n.endControl))}),m()}}function Fe(i,t){if(i&1){let e=g();a(0,"krui-form-field",16)(1,"input",17),p("blur",function(){u(e);let n=h();return d(n.onControlBlur(n.endControl))}),m()()}if(i&2){let e=h();s(),c("formControl",e.endControl)("step",e.step)("min",e.min)("max",e.max)}}var W=class i extends S{constructor(e,r,n){super(e,r);this.document=e;this.changeDetectorRef=r;this.injector=n}disabled=!1;min=0;max=100;step=1;buttons=!1;inputs=!1;labels=!1;onChange=new F;ngControl;slider;start;end;_onChange;onTouched;writeValue(e){this.endControl.patchValue(e??this.max),this.startControl.patchValue(this.min),this.active=null}registerOnChange(e){this._onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this.disabled?this.endControl.disable():this.endControl.enable()}ngOnInit(){super.onInit(),this.ngControl=this.injector.get(U,null)}ngOnDestroy(){super.onDestroy()}ngAfterViewInit(){setTimeout(()=>{this.ngControl||this.writeValue(this.max)})}onModelChange(){this._onChange&&this._onChange(this.endValue),this.onChange.emit(this.endValue)}static \u0275fac=function(r){return new(r||i)(b(Q),b(B),b($))};static \u0275cmp=A({type:i,selectors:[["krui-slider"]],viewQuery:function(r,n){if(r&1&&(x(De,5),x(Te,5),x(Se,5)),r&2){let o;k(o=y())&&(n.slider=o.first),k(o=y())&&(n.start=o.first),k(o=y())&&(n.end=o.first)}},inputs:{disabled:"disabled",min:"min",max:"max",step:"step",buttons:"buttons",inputs:"inputs",labels:"labels"},outputs:{onChange:"onChange"},standalone:!1,features:[N([{provide:L,useExisting:O(()=>i),multi:!0}]),H],decls:12,vars:15,consts:[["slider",""],["end",""],[1,"slider-container",3,"dragstart"],["src","kruiIconPlusMinusCircle","class","krui-btn--icon krui-icon--sm krui-mr--xs",3,"click",4,"ngIf"],["class","krui-typography--regular krui-text--default krui-mr--xs",4,"ngIf"],[1,"krui-slider",3,"mousedown"],[1,"krui-slider__bar"],[1,"krui-slider__range"],["tabindex","0","cdkMonitorElementFocus","",1,"krui-slider__handle",3,"keydown","mousedown"],["class","krui-typography--regular krui-text--default krui-ml--xs",4,"ngIf"],["src","kruiIconPlusAddCircle","class","krui-btn--icon krui-icon--sm krui-ml--xs",3,"click",4,"ngIf"],["class","slider-input krui-ml--xs",4,"ngIf"],["src","kruiIconPlusMinusCircle",1,"krui-btn--icon","krui-icon--sm","krui-mr--xs",3,"click"],[1,"krui-typography--regular","krui-text--default","krui-mr--xs"],[1,"krui-typography--regular","krui-text--default","krui-ml--xs"],["src","kruiIconPlusAddCircle",1,"krui-btn--icon","krui-icon--sm","krui-ml--xs",3,"click"],[1,"slider-input","krui-ml--xs"],["kruiInput","","size","sm","tabindex","0","type","number",1,"krui-input--no-appearance",3,"blur","formControl","step","min","max"]],template:function(r,n){if(r&1){let o=g();a(0,"div",2),p("dragstart",function(l){return u(o),d(l.preventDefault())}),R(1,Ke,1,0,"svg-icon",3)(2,Pe,2,1,"label",4),a(3,"div",5,0),p("mousedown",function(l){return u(o),d(n.onBarMouseDown(l))}),j(5,"div",6)(6,"div",7),a(7,"a",8,1),p("keydown",function(l){u(o);let _=C(8);return d(n.onHandleKeyDown(l,_))})("mousedown",function(l){u(o);let _=C(8);return d(n.onHandleMouseDown(l,_))}),m()(),R(9,Oe,2,1,"label",9)(10,$e,1,0,"svg-icon",10)(11,Fe,2,4,"krui-form-field",11),m()}if(r&2){let o=C(8);E("krui-disabled",n.disabled),s(),c("ngIf",n.buttons),s(),c("ngIf",n.labels),s(4),V("left",0,"%")("width",n.endPercent,"%"),s(),V("left",n.endPercent,"%"),E("krui-slider__handle--active",n.active===o),s(2),c("ngIf",n.labels),s(),c("ngIf",n.buttons),s(),c("ngIf",n.inputs)}},styles:["[_nghost-%COMP%]{display:inline-block;color:var(--color-logo);min-width:120px}.slider-container[_ngcontent-%COMP%]{display:flex;flex-flow:row;flex-wrap:nowrap;align-items:center;gap:2px}.slider-input[_ngcontent-%COMP%]{width:48px;max-width:48px;flex-shrink:0}input[_ngcontent-%COMP%]:disabled{opacity:1}"]})};var ve=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=de({type:i});static \u0275inj=ue({imports:[me,pe,he,fe,ce,_e]})};z(X,[G,Y,Z,ne,ee,oe,re,ie,J,se,ae],[]);z(W,[G,Y,Z,ne,ee,oe,re,ie,J,se,ae],[]);export{X as a,W as b,ve as c};
