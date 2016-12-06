/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './browse';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/components/toolbar/toolbar';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import25 from 'ionic-angular/components/navbar/navbar';
import * as import26 from 'ionic-angular/components/grid/grid';
import * as import27 from 'ionic-angular/components/content/content';
export class Wrapper_BrowsePage {
  context:import0.BrowsePage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.BrowsePage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_BrowsePage_Host:import2.RenderComponentType = (null as any);
class _View_BrowsePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _BrowsePage_0_4:Wrapper_BrowsePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_BrowsePage_Host0,renderType_BrowsePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-browse',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BrowsePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BrowsePage_0_4 = new Wrapper_BrowsePage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._BrowsePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._BrowsePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BrowsePage) && (0 === requestNodeIndex))) { return this._BrowsePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BrowsePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_BrowsePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_BrowsePage_Host === (null as any))) { (renderType_BrowsePage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_BrowsePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const BrowsePageNgFactory:import10.ComponentFactory<import0.BrowsePage> = new import10.ComponentFactory<import0.BrowsePage>('page-browse',viewFactory_BrowsePage_Host0,import0.BrowsePage);
const styles_BrowsePage:any[] = ([] as any[]);
var renderType_BrowsePage:import2.RenderComponentType = (null as any);
class _View_BrowsePage0 extends import1.AppView<import0.BrowsePage> {
  _el_0:any;
  _Header_0_3:import11.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import12.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import13.Wrapper_ToolbarTitle;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import3.AppElement;
  _Content_12_4:import14.Wrapper_Content;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _Row_16_3:import15.Wrapper_Row;
  _text_17:any;
  _el_18:any;
  _Col_18_3:import15.Wrapper_Col;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _Col_21_3:import15.Wrapper_Col;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _Col_24_3:import15.Wrapper_Col;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _Row_28_3:import15.Wrapper_Row;
  _text_29:any;
  _el_30:any;
  _Col_30_3:import15.Wrapper_Col;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _Col_33_3:import15.Wrapper_Col;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _Col_36_3:import15.Wrapper_Col;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _Row_40_3:import15.Wrapper_Row;
  _text_41:any;
  _el_42:any;
  _Col_42_3:import15.Wrapper_Col;
  _el_43:any;
  _text_44:any;
  _el_45:any;
  _Col_45_3:import15.Wrapper_Col;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _Col_48_3:import15.Wrapper_Col;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _Row_52_3:import15.Wrapper_Row;
  _text_53:any;
  _el_54:any;
  _Col_54_3:import15.Wrapper_Col;
  _el_55:any;
  _text_56:any;
  _el_57:any;
  _Col_57_3:import15.Wrapper_Col;
  _el_58:any;
  _text_59:any;
  _el_60:any;
  _Col_60_3:import15.Wrapper_Col;
  _el_61:any;
  _text_62:any;
  _text_63:any;
  _text_64:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_BrowsePage0,renderType_BrowsePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import18.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import12.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import19.App),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import13.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import20.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'h5',(null as any));
    this.renderer.setElementAttribute(this._el_6,'style','color:#fa8cb4;font-weight: bold');
    this._text_7 = this.renderer.createText(this._el_6,'HOROSCOPE',(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_8
      ]
    )],(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_9
      ]
      )
    ]
    ,(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_12 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_12,'padding','');
    this._appEl_12 = new import3.AppElement(12,(null as any),this,this._el_12);
    var compView_12:any = import14.viewFactory_Content0(this.viewUtils,this.injector(12),this._appEl_12);
    this._Content_12_4 = new import14.Wrapper_Content(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_12),this.renderer,this.parentInjector.get(import19.App),this.parentInjector.get(import21.Keyboard),this.parentInjector.get(import22.NgZone),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import23.Tabs,(null as any)));
    this._appEl_12.initComponent(this._Content_12_4.context,([] as any[]),compView_12);
    this._text_13 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'br',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'ion-row',(null as any));
    this._Row_16_3 = new import15.Wrapper_Row();
    this._text_17 = this.renderer.createText(this._el_16,'\n  ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'ion-col',(null as any));
    this._Col_18_3 = new import15.Wrapper_Col();
    this._el_19 = this.renderer.createElement(this._el_18,'img',(null as any));
    this.renderer.setElementAttribute(this._el_19,'src','assets/img/aries.jpg');
    this.renderer.setElementAttribute(this._el_19,'style','border-radius:50%;');
    this._text_20 = this.renderer.createText(this._el_16,'\n  ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_16,'ion-col',(null as any));
    this._Col_21_3 = new import15.Wrapper_Col();
    this._el_22 = this.renderer.createElement(this._el_21,'img',(null as any));
    this.renderer.setElementAttribute(this._el_22,'src','assets/img/taurus.jpg');
    this.renderer.setElementAttribute(this._el_22,'style','border-radius:50%;');
    this._text_23 = this.renderer.createText(this._el_16,'\n  ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_16,'ion-col',(null as any));
    this._Col_24_3 = new import15.Wrapper_Col();
    this._el_25 = this.renderer.createElement(this._el_24,'img',(null as any));
    this.renderer.setElementAttribute(this._el_25,'src','assets/img/gemini.jpg');
    this.renderer.setElementAttribute(this._el_25,'style','border-radius:50%;');
    this._text_26 = this.renderer.createText(this._el_16,'\n',(null as any));
    this._text_27 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_28 = this.renderer.createElement((null as any),'ion-row',(null as any));
    this._Row_28_3 = new import15.Wrapper_Row();
    this._text_29 = this.renderer.createText(this._el_28,'\n  ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_28,'ion-col',(null as any));
    this._Col_30_3 = new import15.Wrapper_Col();
    this._el_31 = this.renderer.createElement(this._el_30,'img',(null as any));
    this.renderer.setElementAttribute(this._el_31,'src','assets/img/cancer.jpg');
    this.renderer.setElementAttribute(this._el_31,'style','border-radius:50%;');
    this._text_32 = this.renderer.createText(this._el_28,'\n  ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_28,'ion-col',(null as any));
    this._Col_33_3 = new import15.Wrapper_Col();
    this._el_34 = this.renderer.createElement(this._el_33,'img',(null as any));
    this.renderer.setElementAttribute(this._el_34,'src','assets/img/leo.jpg');
    this.renderer.setElementAttribute(this._el_34,'style','border-radius:50%;');
    this._text_35 = this.renderer.createText(this._el_28,'\n  ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_28,'ion-col',(null as any));
    this._Col_36_3 = new import15.Wrapper_Col();
    this._el_37 = this.renderer.createElement(this._el_36,'img',(null as any));
    this.renderer.setElementAttribute(this._el_37,'src','assets/img/virgo.jpg');
    this.renderer.setElementAttribute(this._el_37,'style','border-radius:50%;');
    this._text_38 = this.renderer.createText(this._el_28,'\n',(null as any));
    this._text_39 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_40 = this.renderer.createElement((null as any),'ion-row',(null as any));
    this._Row_40_3 = new import15.Wrapper_Row();
    this._text_41 = this.renderer.createText(this._el_40,'\n  ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_40,'ion-col',(null as any));
    this._Col_42_3 = new import15.Wrapper_Col();
    this._el_43 = this.renderer.createElement(this._el_42,'img',(null as any));
    this.renderer.setElementAttribute(this._el_43,'src','assets/img/libra.jpg');
    this.renderer.setElementAttribute(this._el_43,'style','border-radius:50%;');
    this._text_44 = this.renderer.createText(this._el_40,'\n  ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_40,'ion-col',(null as any));
    this._Col_45_3 = new import15.Wrapper_Col();
    this._el_46 = this.renderer.createElement(this._el_45,'img',(null as any));
    this.renderer.setElementAttribute(this._el_46,'src','assets/img/scorpio.jpg');
    this.renderer.setElementAttribute(this._el_46,'style','border-radius:50%;');
    this._text_47 = this.renderer.createText(this._el_40,'\n  ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_40,'ion-col',(null as any));
    this._Col_48_3 = new import15.Wrapper_Col();
    this._el_49 = this.renderer.createElement(this._el_48,'img',(null as any));
    this.renderer.setElementAttribute(this._el_49,'src','assets/img/sagittarius.jpg');
    this.renderer.setElementAttribute(this._el_49,'style','border-radius:50%;');
    this._text_50 = this.renderer.createText(this._el_40,'\n',(null as any));
    this._text_51 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_52 = this.renderer.createElement((null as any),'ion-row',(null as any));
    this._Row_52_3 = new import15.Wrapper_Row();
    this._text_53 = this.renderer.createText(this._el_52,'\n  ',(null as any));
    this._el_54 = this.renderer.createElement(this._el_52,'ion-col',(null as any));
    this._Col_54_3 = new import15.Wrapper_Col();
    this._el_55 = this.renderer.createElement(this._el_54,'img',(null as any));
    this.renderer.setElementAttribute(this._el_55,'src','assets/img/capricorn.jpg');
    this.renderer.setElementAttribute(this._el_55,'style','border-radius:50%;');
    this._text_56 = this.renderer.createText(this._el_52,'\n  ',(null as any));
    this._el_57 = this.renderer.createElement(this._el_52,'ion-col',(null as any));
    this._Col_57_3 = new import15.Wrapper_Col();
    this._el_58 = this.renderer.createElement(this._el_57,'img',(null as any));
    this.renderer.setElementAttribute(this._el_58,'src','assets/img/aquarius.jpg');
    this.renderer.setElementAttribute(this._el_58,'style','border-radius:50%;');
    this._text_59 = this.renderer.createText(this._el_52,'\n  ',(null as any));
    this._el_60 = this.renderer.createElement(this._el_52,'ion-col',(null as any));
    this._Col_60_3 = new import15.Wrapper_Col();
    this._el_61 = this.renderer.createElement(this._el_60,'img',(null as any));
    this.renderer.setElementAttribute(this._el_61,'src','assets/img/pisces.jpg');
    this.renderer.setElementAttribute(this._el_61,'style','border-radius:50%;');
    this._text_62 = this.renderer.createText(this._el_52,'\n',(null as any));
    this._text_63 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_12.create(this._Content_12_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_13,
        this._el_14,
        this._text_15,
        this._el_16,
        this._text_27,
        this._el_28,
        this._text_39,
        this._el_40,
        this._text_51,
        this._el_52,
        this._text_63
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_64 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._el_54,
      this._el_55,
      this._text_56,
      this._el_57,
      this._el_58,
      this._text_59,
      this._el_60,
      this._el_61,
      this._text_62,
      this._text_63,
      this._text_64
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import25.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Navbar_2_4.context; }
    if (((token === import20.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Header_0_3.context; }
    if (((token === import26.Col) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Col_18_3.context; }
    if (((token === import26.Col) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Col_21_3.context; }
    if (((token === import26.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._Col_24_3.context; }
    if (((token === import26.Row) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Row_16_3.context; }
    if (((token === import26.Col) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._Col_30_3.context; }
    if (((token === import26.Col) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._Col_33_3.context; }
    if (((token === import26.Col) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) { return this._Col_36_3.context; }
    if (((token === import26.Row) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._Row_28_3.context; }
    if (((token === import26.Col) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Col_42_3.context; }
    if (((token === import26.Col) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._Col_45_3.context; }
    if (((token === import26.Col) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) { return this._Col_48_3.context; }
    if (((token === import26.Row) && ((40 <= requestNodeIndex) && (requestNodeIndex <= 50)))) { return this._Row_40_3.context; }
    if (((token === import26.Col) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 55)))) { return this._Col_54_3.context; }
    if (((token === import26.Col) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 58)))) { return this._Col_57_3.context; }
    if (((token === import26.Col) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 61)))) { return this._Col_60_3.context; }
    if (((token === import26.Row) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 62)))) { return this._Row_52_3.context; }
    if (((token === import27.Content) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 63)))) { return this._Content_12_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_12_4.detectChangesInternal(this,this._el_12,throwOnChange)) { this._appEl_12.componentView.markAsCheckOnce(); }
    this._Row_16_3.detectChangesInternal(this,this._el_16,throwOnChange);
    this._Col_18_3.detectChangesInternal(this,this._el_18,throwOnChange);
    this._Col_21_3.detectChangesInternal(this,this._el_21,throwOnChange);
    this._Col_24_3.detectChangesInternal(this,this._el_24,throwOnChange);
    this._Row_28_3.detectChangesInternal(this,this._el_28,throwOnChange);
    this._Col_30_3.detectChangesInternal(this,this._el_30,throwOnChange);
    this._Col_33_3.detectChangesInternal(this,this._el_33,throwOnChange);
    this._Col_36_3.detectChangesInternal(this,this._el_36,throwOnChange);
    this._Row_40_3.detectChangesInternal(this,this._el_40,throwOnChange);
    this._Col_42_3.detectChangesInternal(this,this._el_42,throwOnChange);
    this._Col_45_3.detectChangesInternal(this,this._el_45,throwOnChange);
    this._Col_48_3.detectChangesInternal(this,this._el_48,throwOnChange);
    this._Row_52_3.detectChangesInternal(this,this._el_52,throwOnChange);
    this._Col_54_3.detectChangesInternal(this,this._el_54,throwOnChange);
    this._Col_57_3.detectChangesInternal(this,this._el_57,throwOnChange);
    this._Col_60_3.detectChangesInternal(this,this._el_60,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_12_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_12,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_12_4.context.ngOnDestroy();
  }
}
export function viewFactory_BrowsePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.BrowsePage> {
  if ((renderType_BrowsePage === (null as any))) { (renderType_BrowsePage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_BrowsePage,{})); }
  return new _View_BrowsePage0(viewUtils,parentInjector,declarationEl);
}