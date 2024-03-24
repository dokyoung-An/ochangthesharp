// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ??VR ?? - ???.ggsk
// Generated 2024-03-24T13:58:14

function pano2vrSkin(player,base) {
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mdropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown_b', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobileA', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobileb', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_more', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_more_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobiletypeA', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobiletypeB', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__70=document.createElement('div');
		el.ggId="\ud5e4\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__87=document.createElement('div');
		el.ggId="\ud5e4\ub4dc \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:2px 1px 2px rgba(0,0,0,0.5)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__87.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__87.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__87);
		el=me.__86=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__86.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__86.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__86.appendChild(me._image_1);
		me.__70.appendChild(me.__86);
		el=me.__85=document.createElement('div');
		el.ggId="\ud0c0\uc785";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 140px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__85.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__85.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobiletypeA') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__85.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__85.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__85.style.transition='right 0s, top 0s';
				if (me.__85.ggCurrentLogicStatePosition == 0) {
					me.__85.style.right='10px';
					me.__85.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__85.style.right='140px';
					me.__85.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__85.logicBlock_position();
		me.__85.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobiletypeA') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__85.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__85.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__85.style.transition='right 0s, top 0s';
				if (me.__85.ggCurrentLogicStateVisible == 0) {
					me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
					me.__85.ggVisible=true;
				}
				else if (me.__85.ggCurrentLogicStateVisible == 1) {
					me.__85.style.visibility="hidden";
					me.__85.ggVisible=false;
				}
				else {
					me.__85.style.visibility=(Number(me.__85.style.opacity)>0||!me.__85.style.opacity)?'inherit':'hidden';
					me.__85.ggVisible=true;
				}
			}
		}
		me.__85.logicBlock_visible();
		me.__85.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 99;';
		hs+='background : #f3f3f3;';
		hs+='border-color : #ffffff;';
		hs+='border-radius : 5px 5px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 3px 3px 3px 3px;';
		hs+='bottom : -13px;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-color:#00507f; border-bottom-color:#f3f3f3;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("99\u33a1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 940))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_1.style.transition='left 0s, bottom 0s';
				if (me._text_1.ggCurrentLogicStatePosition == 0) {
					me._text_1.style.left='0px';
					me._text_1.style.bottom='-11px';
				}
				else {
					me._text_1.style.left='0px';
					me._text_1.style.bottom='-13px';
				}
			}
		}
		me._text_1.logicBlock_position();
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 99C") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_mobiletypeA') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style.transition='left 0s, bottom 0s';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else if (me._text_1.ggCurrentLogicStateVisible == 1) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.logicBlock_visible();
		me._text_1.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 920))
				)
			) {
				me.__990.style.transition='none';
				me.__990.style.visibility=(Number(me.__990.style.opacity)>0||!me.__990.style.opacity)?'inherit':'hidden';
				me.__990.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width > 920))
				)
			) {
				me.__1170.style.transition='none';
				me.__1170.style.visibility='hidden';
				me.__1170.ggVisible=false;
			}
			player.openNext("{node1}","");
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileA', !player.getVariableValue('vis_mobileA'));
			}
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileb', false);
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._text_1);
		el=me._text_1aa=document.createElement('div');
		els=me._text_1aa__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1-aa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 99;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0);';
		hs+='border-style : solid;';
		hs+='border-width : 3px 3px 3px 3px;';
		hs+='bottom : -13px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1aa.ggUpdateText=function() {
			var params = [];
			var hs = player._("99\u33a1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1aa.ggUpdateText();
		el.appendChild(els);
		me._text_1aa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1aa.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 940))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1aa.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1aa.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_1aa.style.transition='left 0s, bottom 0s';
				if (me._text_1aa.ggCurrentLogicStatePosition == 0) {
					me._text_1aa.style.left='0px';
					me._text_1aa.style.bottom='-11px';
				}
				else {
					me._text_1aa.style.left='0px';
					me._text_1aa.style.bottom='-13px';
				}
			}
		}
		me._text_1aa.logicBlock_position();
		me._text_1aa.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 117") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1aa.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1aa.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1aa.style.transition='left 0s, bottom 0s';
				if (me._text_1aa.ggCurrentLogicStateVisible == 0) {
					me._text_1aa.style.visibility=(Number(me._text_1aa.style.opacity)>0||!me._text_1aa.style.opacity)?'inherit':'hidden';
					me._text_1aa.ggVisible=true;
				}
				else {
					me._text_1aa.style.visibility="hidden";
					me._text_1aa.ggVisible=false;
				}
			}
		}
		me._text_1aa.logicBlock_visible();
		me._text_1aa.onclick=function (e) {
			me.__990.style.transition='none';
			me.__990.style.visibility=(Number(me.__990.style.opacity)>0||!me.__990.style.opacity)?'inherit':'hidden';
			me.__990.ggVisible=true;
			me.__1170.style.transition='none';
			me.__1170.style.visibility='hidden';
			me.__1170.ggVisible=false;
			player.openNext("{node1}","");
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileb', false);
			}
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileA', true);
			}
		}
		me._text_1aa.ggUpdatePosition=function (useTransition) {
		}
		me.__85.appendChild(me._text_1aa);
		me.__70.appendChild(me.__85);
		el=me._b=document.createElement('div');
		el.ggId="\ud0c0\uc785-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobiletypeB') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._b.style.transition='';
				if (me._b.ggCurrentLogicStateVisible == 0) {
					me._b.style.visibility=(Number(me._b.style.opacity)>0||!me._b.style.opacity)?'inherit':'hidden';
					me._b.ggVisible=true;
				}
				else if (me._b.ggCurrentLogicStateVisible == 1) {
					me._b.style.visibility="hidden";
					me._b.ggVisible=false;
				}
				else {
					me._b.style.visibility=(Number(me._b.style.opacity)>0||!me._b.style.opacity)?'inherit':'hidden';
					me._b.ggVisible=true;
				}
			}
		}
		me._b.logicBlock_visible();
		me._b.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1b=document.createElement('div');
		els=me._text_1b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 99;';
		hs+='background : #f3f3f3;';
		hs+='border-color : #ffffff;';
		hs+='border-radius : 5px 5px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 3px 3px 3px 3px;';
		hs+='bottom : -13px;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-color:#00507f; border-bottom-color:#f3f3f3;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px 1px 1px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1b.ggUpdateText=function() {
			var params = [];
			var hs = player._("117\u33a1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1b.ggUpdateText();
		el.appendChild(els);
		me._text_1b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1b.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 940))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1b.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1b.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_1b.style.transition='left 0s, bottom 0s';
				if (me._text_1b.ggCurrentLogicStatePosition == 0) {
					me._text_1b.style.left='0px';
					me._text_1b.style.bottom='-11px';
				}
				else {
					me._text_1b.style.left='0px';
					me._text_1b.style.bottom='-13px';
				}
			}
		}
		me._text_1b.logicBlock_position();
		me._text_1b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 117") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_mobiletypeB') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1b.style.transition='left 0s, bottom 0s';
				if (me._text_1b.ggCurrentLogicStateVisible == 0) {
					me._text_1b.style.visibility=(Number(me._text_1b.style.opacity)>0||!me._text_1b.style.opacity)?'inherit':'hidden';
					me._text_1b.ggVisible=true;
				}
				else if (me._text_1b.ggCurrentLogicStateVisible == 1) {
					me._text_1b.style.visibility=(Number(me._text_1b.style.opacity)>0||!me._text_1b.style.opacity)?'inherit':'hidden';
					me._text_1b.ggVisible=true;
				}
				else {
					me._text_1b.style.visibility="hidden";
					me._text_1b.ggVisible=false;
				}
			}
		}
		me._text_1b.logicBlock_visible();
		me._text_1b.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileA', false);
			}
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileb', !player.getVariableValue('vis_mobileb'));
			}
		}
		me._text_1b.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me._text_1b);
		el=me._text_1bb=document.createElement('div');
		els=me._text_1bb__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1-bb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 3px solid #ffffff;';
		hs+='bottom : -13px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1bb.ggUpdateText=function() {
			var params = [];
			var hs = player._("117\u33a1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1bb.ggUpdateText();
		el.appendChild(els);
		me._text_1bb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1bb.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 940))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1bb.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1bb.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_1bb.style.transition='left 0s, bottom 0s';
				if (me._text_1bb.ggCurrentLogicStatePosition == 0) {
					me._text_1bb.style.left='0px';
					me._text_1bb.style.bottom='-11px';
				}
				else {
					me._text_1bb.style.left='0px';
					me._text_1bb.style.bottom='-13px';
				}
			}
		}
		me._text_1bb.logicBlock_position();
		me._text_1bb.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 99C") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1bb.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1bb.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1bb.style.transition='left 0s, bottom 0s';
				if (me._text_1bb.ggCurrentLogicStateVisible == 0) {
					me._text_1bb.style.visibility=(Number(me._text_1bb.style.opacity)>0||!me._text_1bb.style.opacity)?'inherit':'hidden';
					me._text_1bb.ggVisible=true;
				}
				else {
					me._text_1bb.style.visibility="hidden";
					me._text_1bb.ggVisible=false;
				}
			}
		}
		me._text_1bb.logicBlock_visible();
		me._text_1bb.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 920))
				)
			) {
				me.__990.style.transition='none';
				me.__990.style.visibility='hidden';
				me.__990.ggVisible=false;
			}
			if (
				(
					((player.getViewerSize().width > 920))
				)
			) {
				me.__1170.style.transition='none';
				me.__1170.style.visibility=(Number(me.__1170.style.opacity)>0||!me.__1170.style.opacity)?'inherit':'hidden';
				me.__1170.ggVisible=true;
			}
			player.openNext("{node16}","");
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileA', false);
			}
			if (
				(
					((player.getViewerSize().width <= 920))
				)
			) {
				player.setVariableValue('vis_mobileb', true);
			}
		}
		me._text_1bb.ggUpdatePosition=function (useTransition) {
		}
		me._b.appendChild(me._text_1bb);
		me.__70.appendChild(me._b);
		el=me._mobile=document.createElement('div');
		el.ggId="\ud0c0\uc785\uc120\ud0dd-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : -450px;';
		hs+='height : 450px;';
		hs+='position : absolute;';
		hs+='right : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mobiletypeA') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mobile.style.transition='right 0s, bottom 0s';
				if (me._mobile.ggCurrentLogicStatePosition == 0) {
					me._mobile.style.right='10px';
					me._mobile.style.bottom='-450px';
				}
				else {
					me._mobile.style.right='140px';
					me._mobile.style.bottom='-450px';
				}
			}
		}
		me._mobile.logicBlock_position();
		me._mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobileA') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile.style.transition='right 0s, bottom 0s';
				if (me._mobile.ggCurrentLogicStateVisible == 0) {
					me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
					me._mobile.ggVisible=true;
				}
				else {
					me._mobile.style.visibility="hidden";
					me._mobile.ggVisible=false;
				}
			}
		}
		me._mobile.logicBlock_visible();
		me._mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1mobile=document.createElement('div');
		el.ggId="Rectangle 1-mobile";
		el.ggDx=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(243,243,243,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 6px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding:2px 0;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 136;
		el.ggHeight = 30;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "오창 더샵 99C";
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me._cloner_1.ggUpdate();
		}
		me._rectangle_1mobile.appendChild(me._cloner_1);
		me._mobile.appendChild(me._rectangle_1mobile);
		me.__70.appendChild(me._mobile);
		el=me.__117mobile=document.createElement('div');
		el.ggId="\ud0c0\uc785\uc120\ud0dd-117-mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : -450px;';
		hs+='height : 450px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__117mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__117mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mobileb') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__117mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__117mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__117mobile.style.transition='';
				if (me.__117mobile.ggCurrentLogicStateVisible == 0) {
					me.__117mobile.style.visibility=(Number(me.__117mobile.style.opacity)>0||!me.__117mobile.style.opacity)?'inherit':'hidden';
					me.__117mobile.ggVisible=true;
				}
				else {
					me.__117mobile.style.visibility="hidden";
					me.__117mobile.ggVisible=false;
				}
			}
		}
		me.__117mobile.logicBlock_visible();
		me.__117mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_117mobile=document.createElement('div');
		el.ggId="Rectangle 117-mobile";
		el.ggDx=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(243,243,243,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 6px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='padding:2px 0;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_117mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_117mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_2=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 136;
		el.ggHeight = 30;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_2.ggUpdating == true) return;
			me._cloner_2.ggUpdating = true;
			var el=me._cloner_2;
			var curNumCols = 0;
			curNumCols = me._cloner_2.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_2.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_2.getFilteredNodes(tourNodes, filter);
			me._cloner_2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_2.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._cloner_2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_2.ggNodeCount = me._cloner_2.ggNumFilterPassed;
			me._cloner_2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_2.parentNode && me._cloner_2.parentNode.classList.contains('ggskin_subelement') && me._cloner_2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "오창 더샵 117";
		el.ggId="Cloner 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_2.childNodes.length; i++) {
				var child=me._cloner_2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_2.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me._cloner_2.ggUpdate();
		}
		me._rectangle_117mobile.appendChild(me._cloner_2);
		me.__117mobile.appendChild(me._rectangle_117mobile);
		me.__70.appendChild(me.__117mobile);
		el=me.__73=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd-\ud558\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 920))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__73.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__73.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__73.style.transition='';
				if (me.__73.ggCurrentLogicStateVisible == 0) {
					me.__73.style.visibility="hidden";
					me.__73.ggVisible=false;
				}
				else {
					me.__73.style.visibility=(Number(me.__73.style.opacity)>0||!me.__73.style.opacity)?'inherit':'hidden';
					me.__73.ggVisible=true;
				}
			}
		}
		me.__73.logicBlock_visible();
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		el=me.__74=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f3f3f3;';
		hs+='border-color : #00557f;';
		hs+='border-style : solid;';
		hs+='border-width : 3px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 1px 1px rgba(0,0,0,1);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me.__990=document.createElement('div');
		el.ggId="99\uacf5\uac04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__990.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__990.ggUpdatePosition=function (useTransition) {
		}
		el=me.__84=document.createElement('div');
		els=me.__84__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\ucc3d\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__84.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00\ucc3d\uace0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__84.ggUpdateText();
		el.appendChild(els);
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00\ucc3d\uace0"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__84.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__84.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__84.style.transition='background-color 0s, color 0s';
				if (me.__84.ggCurrentLogicStateBackgroundColor == 0) {
					me.__84.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__84.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__84.logicBlock_backgroundcolor();
		me.__84.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00\ucc3d\uace0"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__84.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__84.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__84.style.transition='background-color 0s, color 0s';
				if (me.__84.ggCurrentLogicStateTextColor == 0) {
					me.__84.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__84.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__84.logicBlock_textcolor();
		me.__84.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__84);
		el=me.__83=document.createElement('div');
		els=me.__83__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 780px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__83.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__83.ggUpdateText();
		el.appendChild(els);
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__83.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__83.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__83.style.transition='background-color 0s, color 0s';
				if (me.__83.ggCurrentLogicStateBackgroundColor == 0) {
					me.__83.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__83.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__83.logicBlock_backgroundcolor();
		me.__83.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__83.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__83.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__83.style.transition='background-color 0s, color 0s';
				if (me.__83.ggCurrentLogicStateTextColor == 0) {
					me.__83.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__83.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__83.logicBlock_textcolor();
		me.__83.onclick=function (e) {
			player.openNext("{node14}","");
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__83);
		el=me.__212=document.createElement('div');
		els=me.__212__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 720px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__212.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__212.ggUpdateText();
		el.appendChild(els);
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__212.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__212.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__212.style.transition='background-color 0s, color 0s';
				if (me.__212.ggCurrentLogicStateBackgroundColor == 0) {
					me.__212.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__212.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__212.logicBlock_backgroundcolor();
		me.__212.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__212.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__212.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__212.style.transition='background-color 0s, color 0s';
				if (me.__212.ggCurrentLogicStateTextColor == 0) {
					me.__212.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__212.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__212.logicBlock_textcolor();
		me.__212.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__212);
		el=me.__112=document.createElement('div');
		els=me.__112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 660px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__112.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__112.ggUpdateText();
		el.appendChild(els);
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__112.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__112.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__112.style.transition='background-color 0s, color 0s';
				if (me.__112.ggCurrentLogicStateBackgroundColor == 0) {
					me.__112.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__112.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__112.logicBlock_backgroundcolor();
		me.__112.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__112.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__112.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__112.style.transition='background-color 0s, color 0s';
				if (me.__112.ggCurrentLogicStateTextColor == 0) {
					me.__112.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__112.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__112.logicBlock_textcolor();
		me.__112.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__112);
		el=me.__82=document.createElement('div');
		els=me.__82__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 600px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__82.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__82.ggUpdateText();
		el.appendChild(els);
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc804\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__82.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__82.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__82.style.transition='background-color 0s, color 0s';
				if (me.__82.ggCurrentLogicStateBackgroundColor == 0) {
					me.__82.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__82.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__82.logicBlock_backgroundcolor();
		me.__82.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc804\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__82.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__82.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__82.style.transition='background-color 0s, color 0s';
				if (me.__82.ggCurrentLogicStateTextColor == 0) {
					me.__82.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__82.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__82.logicBlock_textcolor();
		me.__82.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__82);
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2e4\uc774\ub2dd\ub8f8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 540px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__81.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e4\uc774\ub2dd\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		el.appendChild(els);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc774\ub2dd\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__81.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__81.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__81.style.transition='background-color 0s, color 0s';
				if (me.__81.ggCurrentLogicStateBackgroundColor == 0) {
					me.__81.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__81.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__81.logicBlock_backgroundcolor();
		me.__81.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc774\ub2dd\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__81.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__81.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__81.style.transition='background-color 0s, color 0s';
				if (me.__81.ggCurrentLogicStateTextColor == 0) {
					me.__81.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__81.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__81.logicBlock_textcolor();
		me.__81.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__81);
		el=me.__80=document.createElement('div');
		els=me.__80__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 480px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__80.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud32c\ud2b8\ub9ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__80.ggUpdateText();
		el.appendChild(els);
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__80.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__80.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__80.style.transition='background-color 0s, color 0s';
				if (me.__80.ggCurrentLogicStateBackgroundColor == 0) {
					me.__80.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__80.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__80.logicBlock_backgroundcolor();
		me.__80.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__80.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__80.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__80.style.transition='background-color 0s, color 0s';
				if (me.__80.ggCurrentLogicStateTextColor == 0) {
					me.__80.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__80.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__80.logicBlock_textcolor();
		me.__80.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__80);
		el=me.__79=document.createElement('div');
		els=me.__79__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2e4\uc6a9\ub3c4\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 420px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__79.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e4\uc6a9\ub3c4\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__79.ggUpdateText();
		el.appendChild(els);
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc6a9\ub3c4\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__79.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__79.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__79.style.transition='background-color 0s, color 0s';
				if (me.__79.ggCurrentLogicStateBackgroundColor == 0) {
					me.__79.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__79.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__79.logicBlock_backgroundcolor();
		me.__79.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc6a9\ub3c4\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__79.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__79.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__79.style.transition='background-color 0s, color 0s';
				if (me.__79.ggCurrentLogicStateTextColor == 0) {
					me.__79.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__79.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__79.logicBlock_textcolor();
		me.__79.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__79);
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 360px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__78.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		el.appendChild(els);
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__78.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__78.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__78.style.transition='background-color 0s, color 0s';
				if (me.__78.ggCurrentLogicStateBackgroundColor == 0) {
					me.__78.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__78.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__78.logicBlock_backgroundcolor();
		me.__78.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__78.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__78.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__78.style.transition='background-color 0s, color 0s';
				if (me.__78.ggCurrentLogicStateTextColor == 0) {
					me.__78.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__78.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__78.logicBlock_textcolor();
		me.__78.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__78);
		el=me.__310=document.createElement('div');
		els=me.__310__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__310.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e43", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__310.ggUpdateText();
		el.appendChild(els);
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__310.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__310.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__310.style.transition='background-color 0s, color 0s';
				if (me.__310.ggCurrentLogicStateBackgroundColor == 0) {
					me.__310.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__310.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__310.logicBlock_backgroundcolor();
		me.__310.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__310.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__310.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__310.style.transition='background-color 0s, color 0s';
				if (me.__310.ggCurrentLogicStateTextColor == 0) {
					me.__310.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__310.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__310.logicBlock_textcolor();
		me.__310.onclick=function (e) {
			player.openNext("{node11}","");
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__310);
		el=me.__211=document.createElement('div');
		els=me.__211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__211.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__211.ggUpdateText();
		el.appendChild(els);
		me.__211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__211.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__211.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__211.style.transition='background-color 0s, color 0s';
				if (me.__211.ggCurrentLogicStateBackgroundColor == 0) {
					me.__211.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__211.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__211.logicBlock_backgroundcolor();
		me.__211.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__211.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__211.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__211.style.transition='background-color 0s, color 0s';
				if (me.__211.ggCurrentLogicStateTextColor == 0) {
					me.__211.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__211.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__211.logicBlock_textcolor();
		me.__211.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__211);
		el=me.__77=document.createElement('div');
		els=me.__77__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__77.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__77.ggUpdateText();
		el.appendChild(els);
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__77.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__77.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__77.style.transition='background-color 0s, color 0s';
				if (me.__77.ggCurrentLogicStateBackgroundColor == 0) {
					me.__77.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__77.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__77.logicBlock_backgroundcolor();
		me.__77.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__77.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__77.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__77.style.transition='background-color 0s, color 0s';
				if (me.__77.ggCurrentLogicStateTextColor == 0) {
					me.__77.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__77.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__77.logicBlock_textcolor();
		me.__77.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__77);
		el=me.__76=document.createElement('div');
		els=me.__76__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud30c\uc6b0\ub354\ub8f8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__76.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud30c\uc6b0\ub354\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__76.ggUpdateText();
		el.appendChild(els);
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud30c\uc6b0\ub354\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__76.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__76.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__76.style.transition='background-color 0s, color 0s';
				if (me.__76.ggCurrentLogicStateBackgroundColor == 0) {
					me.__76.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__76.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__76.logicBlock_backgroundcolor();
		me.__76.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud30c\uc6b0\ub354\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__76.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__76.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__76.style.transition='background-color 0s, color 0s';
				if (me.__76.ggCurrentLogicStateTextColor == 0) {
					me.__76.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__76.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__76.logicBlock_textcolor();
		me.__76.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__76);
		el=me.__111=document.createElement('div');
		els=me.__111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__111.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__111.ggUpdateText();
		el.appendChild(els);
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__111.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__111.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__111.style.transition='background-color 0s, color 0s';
				if (me.__111.ggCurrentLogicStateBackgroundColor == 0) {
					me.__111.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__111.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__111.logicBlock_backgroundcolor();
		me.__111.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__111.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__111.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__111.style.transition='background-color 0s, color 0s';
				if (me.__111.ggCurrentLogicStateTextColor == 0) {
					me.__111.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__111.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__111.logicBlock_textcolor();
		me.__111.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__111);
		el=me.__75=document.createElement('div');
		els=me.__75__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__75.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__75.ggUpdateText();
		el.appendChild(els);
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__75.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__75.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__75.style.transition='background-color 0s, color 0s';
				if (me.__75.ggCurrentLogicStateBackgroundColor == 0) {
					me.__75.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__75.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__75.logicBlock_backgroundcolor();
		me.__75.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__75.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__75.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__75.style.transition='background-color 0s, color 0s';
				if (me.__75.ggCurrentLogicStateTextColor == 0) {
					me.__75.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__75.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__75.logicBlock_textcolor();
		me.__75.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		me.__990.appendChild(me.__75);
		me.__74.appendChild(me.__990);
		el=me.__1170=document.createElement('div');
		el.ggId="117\uacf5\uac04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1170.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1170.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11710=document.createElement('div');
		els=me.__11710__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\ucc3d\uace0-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11710.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00\ucc3d\uace0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11710.ggUpdateText();
		el.appendChild(els);
		me.__11710.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11710.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00\ucc3d\uace0"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__11710.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__11710.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__11710.style.transition='background-color 0s, color 0s';
				if (me.__11710.ggCurrentLogicStateBackgroundColor == 0) {
					me.__11710.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__11710.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__11710.logicBlock_backgroundcolor();
		me.__11710.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00\ucc3d\uace0"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__11710.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__11710.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__11710.style.transition='background-color 0s, color 0s';
				if (me.__11710.ggCurrentLogicStateTextColor == 0) {
					me.__11710.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__11710.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__11710.logicBlock_textcolor();
		me.__11710.onclick=function (e) {
			player.openNext("{node30}","");
		}
		me.__11710.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__11710);
		el=me.__1179=document.createElement('div');
		els=me.__1179__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 780px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1179.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1179.ggUpdateText();
		el.appendChild(els);
		me.__1179.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1179.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1179.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1179.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1179.style.transition='background-color 0s, color 0s';
				if (me.__1179.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1179.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1179.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1179.logicBlock_backgroundcolor();
		me.__1179.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1179.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1179.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1179.style.transition='background-color 0s, color 0s';
				if (me.__1179.ggCurrentLogicStateTextColor == 0) {
					me.__1179.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1179.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1179.logicBlock_textcolor();
		me.__1179.onclick=function (e) {
			player.openNext("{node29}","");
		}
		me.__1179.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1179);
		el=me.__21170=document.createElement('div');
		els=me.__21170__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 720px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21170.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21170.ggUpdateText();
		el.appendChild(els);
		me.__21170.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21170.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__21170.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__21170.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__21170.style.transition='background-color 0s, color 0s';
				if (me.__21170.ggCurrentLogicStateBackgroundColor == 0) {
					me.__21170.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__21170.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__21170.logicBlock_backgroundcolor();
		me.__21170.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__21170.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__21170.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__21170.style.transition='background-color 0s, color 0s';
				if (me.__21170.ggCurrentLogicStateTextColor == 0) {
					me.__21170.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__21170.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__21170.logicBlock_textcolor();
		me.__21170.onclick=function (e) {
			player.openNext("{node21}","");
		}
		me.__21170.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__21170);
		el=me.__11170=document.createElement('div');
		els=me.__11170__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 660px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__11170.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__11170.ggUpdateText();
		el.appendChild(els);
		me.__11170.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11170.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__11170.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__11170.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__11170.style.transition='background-color 0s, color 0s';
				if (me.__11170.ggCurrentLogicStateBackgroundColor == 0) {
					me.__11170.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__11170.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__11170.logicBlock_backgroundcolor();
		me.__11170.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__11170.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__11170.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__11170.style.transition='background-color 0s, color 0s';
				if (me.__11170.ggCurrentLogicStateTextColor == 0) {
					me.__11170.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__11170.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__11170.logicBlock_textcolor();
		me.__11170.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me.__11170.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__11170);
		el=me.__1178=document.createElement('div');
		els=me.__1178__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uc2e4-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 600px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1178.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1178.ggUpdateText();
		el.appendChild(els);
		me.__1178.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1178.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc804\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1178.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1178.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1178.style.transition='background-color 0s, color 0s';
				if (me.__1178.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1178.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1178.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1178.logicBlock_backgroundcolor();
		me.__1178.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc804\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1178.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1178.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1178.style.transition='background-color 0s, color 0s';
				if (me.__1178.ggCurrentLogicStateTextColor == 0) {
					me.__1178.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1178.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1178.logicBlock_textcolor();
		me.__1178.onclick=function (e) {
			player.openNext("{node22}","");
		}
		me.__1178.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1178);
		el=me.__1177=document.createElement('div');
		els=me.__1177__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2e4\uc774\ub2dd\ub8f8-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 540px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1177.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e4\uc774\ub2dd\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1177.ggUpdateText();
		el.appendChild(els);
		me.__1177.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1177.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc774\ub2dd\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1177.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1177.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1177.style.transition='background-color 0s, color 0s';
				if (me.__1177.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1177.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1177.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1177.logicBlock_backgroundcolor();
		me.__1177.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc774\ub2dd\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1177.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1177.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1177.style.transition='background-color 0s, color 0s';
				if (me.__1177.ggCurrentLogicStateTextColor == 0) {
					me.__1177.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1177.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1177.logicBlock_textcolor();
		me.__1177.onclick=function (e) {
			player.openNext("{node18}","");
		}
		me.__1177.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1177);
		el=me.__1176=document.createElement('div');
		els=me.__1176__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 480px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1176.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud32c\ud2b8\ub9ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1176.ggUpdateText();
		el.appendChild(els);
		me.__1176.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1176.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1176.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1176.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1176.style.transition='background-color 0s, color 0s';
				if (me.__1176.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1176.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1176.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1176.logicBlock_backgroundcolor();
		me.__1176.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1176.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1176.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1176.style.transition='background-color 0s, color 0s';
				if (me.__1176.ggCurrentLogicStateTextColor == 0) {
					me.__1176.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1176.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1176.logicBlock_textcolor();
		me.__1176.onclick=function (e) {
			player.openNext("{node28}","");
		}
		me.__1176.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1176);
		el=me.__1175=document.createElement('div');
		els=me.__1175__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub2e4\uc6a9\ub3c4\uc2e4-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 420px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1175.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e4\uc6a9\ub3c4\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1175.ggUpdateText();
		el.appendChild(els);
		me.__1175.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1175.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc6a9\ub3c4\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1175.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1175.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1175.style.transition='background-color 0s, color 0s';
				if (me.__1175.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1175.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1175.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1175.logicBlock_backgroundcolor();
		me.__1175.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub2e4\uc6a9\ub3c4\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1175.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1175.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1175.style.transition='background-color 0s, color 0s';
				if (me.__1175.ggCurrentLogicStateTextColor == 0) {
					me.__1175.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1175.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1175.logicBlock_textcolor();
		me.__1175.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me.__1175.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1175);
		el=me.__1174=document.createElement('div');
		els=me.__1174__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 360px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1174.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1174.ggUpdateText();
		el.appendChild(els);
		me.__1174.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1174.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1174.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1174.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1174.style.transition='background-color 0s, color 0s';
				if (me.__1174.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1174.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1174.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1174.logicBlock_backgroundcolor();
		me.__1174.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1174.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1174.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1174.style.transition='background-color 0s, color 0s';
				if (me.__1174.ggCurrentLogicStateTextColor == 0) {
					me.__1174.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1174.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1174.logicBlock_textcolor();
		me.__1174.onclick=function (e) {
			player.openNext("{node23}","");
		}
		me.__1174.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1174);
		el=me.__3117=document.createElement('div');
		els=me.__3117__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3117.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e43", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3117.ggUpdateText();
		el.appendChild(els);
		me.__3117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3117.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3117.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3117.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3117.style.transition='background-color 0s, color 0s';
				if (me.__3117.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3117.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__3117.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__3117.logicBlock_backgroundcolor();
		me.__3117.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3117.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3117.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3117.style.transition='background-color 0s, color 0s';
				if (me.__3117.ggCurrentLogicStateTextColor == 0) {
					me.__3117.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__3117.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__3117.logicBlock_textcolor();
		me.__3117.onclick=function (e) {
			player.openNext("{node26}","");
		}
		me.__3117.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__3117);
		el=me.__2117=document.createElement('div');
		els=me.__2117__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2117.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2117.ggUpdateText();
		el.appendChild(els);
		me.__2117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2117.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2117.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2117.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2117.style.transition='background-color 0s, color 0s';
				if (me.__2117.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2117.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__2117.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2117.logicBlock_backgroundcolor();
		me.__2117.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2117.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2117.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2117.style.transition='background-color 0s, color 0s';
				if (me.__2117.ggCurrentLogicStateTextColor == 0) {
					me.__2117.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__2117.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__2117.logicBlock_textcolor();
		me.__2117.onclick=function (e) {
			player.openNext("{node25}","");
		}
		me.__2117.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__2117);
		el=me.__1173=document.createElement('div');
		els=me.__1173__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1173.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1173.ggUpdateText();
		el.appendChild(els);
		me.__1173.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1173.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1173.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1173.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1173.style.transition='background-color 0s, color 0s';
				if (me.__1173.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1173.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1173.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1173.logicBlock_backgroundcolor();
		me.__1173.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1173.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1173.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1173.style.transition='background-color 0s, color 0s';
				if (me.__1173.ggCurrentLogicStateTextColor == 0) {
					me.__1173.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1173.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1173.logicBlock_textcolor();
		me.__1173.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me.__1173.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1173);
		el=me.__1172=document.createElement('div');
		els=me.__1172__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud30c\uc6b0\ub354\ub8f8-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1172.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud30c\uc6b0\ub354\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1172.ggUpdateText();
		el.appendChild(els);
		me.__1172.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1172.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud30c\uc6b0\ub354\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1172.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1172.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1172.style.transition='background-color 0s, color 0s';
				if (me.__1172.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1172.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1172.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1172.logicBlock_backgroundcolor();
		me.__1172.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud30c\uc6b0\ub354\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1172.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1172.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1172.style.transition='background-color 0s, color 0s';
				if (me.__1172.ggCurrentLogicStateTextColor == 0) {
					me.__1172.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1172.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1172.logicBlock_textcolor();
		me.__1172.onclick=function (e) {
			player.openNext("{node27}","");
		}
		me.__1172.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1172);
		el=me.__1117=document.createElement('div');
		els=me.__1117__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1117.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1117.ggUpdateText();
		el.appendChild(els);
		me.__1117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1117.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1117.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1117.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1117.style.transition='background-color 0s, color 0s';
				if (me.__1117.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1117.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1117.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1117.logicBlock_backgroundcolor();
		me.__1117.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1117.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1117.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1117.style.transition='background-color 0s, color 0s';
				if (me.__1117.ggCurrentLogicStateTextColor == 0) {
					me.__1117.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1117.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1117.logicBlock_textcolor();
		me.__1117.onclick=function (e) {
			player.openNext("{node24}","");
		}
		me.__1117.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1117);
		el=me.__1171=document.createElement('div');
		els=me.__1171__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4-117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1171.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1171.ggUpdateText();
		el.appendChild(els);
		me.__1171.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1171.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1171.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1171.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1171.style.transition='background-color 0s, color 0s';
				if (me.__1171.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1171.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__1171.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1171.logicBlock_backgroundcolor();
		me.__1171.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1171.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1171.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1171.style.transition='background-color 0s, color 0s';
				if (me.__1171.ggCurrentLogicStateTextColor == 0) {
					me.__1171.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1171.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1171.logicBlock_textcolor();
		me.__1171.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me.__1171.ggUpdatePosition=function (useTransition) {
		}
		me.__1170.appendChild(me.__1171);
		me.__74.appendChild(me.__1170);
		me.__73.appendChild(me.__74);
		me.__70.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785 \uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_type') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__72.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__72.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__72.style.transition='opacity 0s';
				if (me.__72.ggCurrentLogicStateVisible == 0) {
					me.__72.style.visibility="hidden";
					me.__72.ggVisible=false;
				}
				else if (me.__72.ggCurrentLogicStateVisible == 1) {
					me.__72.style.visibility=(Number(me.__72.style.opacity)>0||!me.__72.style.opacity)?'inherit':'hidden';
					me.__72.ggVisible=true;
				}
				else {
					me.__72.style.visibility="hidden";
					me.__72.ggVisible=false;
				}
			}
		}
		me.__72.logicBlock_visible();
		me.__72.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_mobileA') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_mobileb') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__72.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__72.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__72.style.transition='opacity 0s';
				if (me.__72.ggCurrentLogicStateAlpha == 0) {
					me.__72.style.visibility="hidden";
					me.__72.style.opacity=0;
				}
				else if (me.__72.ggCurrentLogicStateAlpha == 1) {
					me.__72.style.visibility="hidden";
					me.__72.style.opacity=0;
				}
				else {
					me.__72.style.visibility=me.__72.ggVisible?'inherit':'hidden';
					me.__72.style.opacity=1;
				}
			}
		}
		me.__72.logicBlock_alpha();
		me.__72.onclick=function (e) {
			player.setVariableValue('vis_type', true);
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,85,127,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud0c0\uc785\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_13.ggUpdateText();
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_13.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['text_13'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_13.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_13.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_13.style.transition='opacity 300ms linear 0ms';
				if (me._text_13.ggCurrentLogicStateAlpha == 0) {
					me._text_13.style.visibility=me._text_13.ggVisible?'inherit':'hidden';
					me._text_13.style.opacity=1;
				}
				else {
					me._text_13.style.visibility=me._text_13.ggVisible?'inherit':'hidden';
					me._text_13.style.opacity=0.5;
				}
			}
		}
		me._text_13.logicBlock_alpha();
		me._text_13.onmouseover=function (e) {
			me.elementMouseOver['text_13']=true;
			me._text_13.logicBlock_alpha();
		}
		me._text_13.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_13__text)
					return;
				}
			}
			me.elementMouseOver['text_13']=false;
			me._text_13.logicBlock_alpha();
		}
		me._text_13.ggUpdatePosition=function (useTransition) {
		}
		me.__72.appendChild(me._text_13);
		me.__70.appendChild(me.__72);
		el=me.__71=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785 \uc120\ud0dd \ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_type') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__71.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__71.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__71.style.transition='';
				if (me.__71.ggCurrentLogicStateVisible == 0) {
					me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
					me.__71.ggVisible=true;
				}
				else {
					me.__71.style.visibility="hidden";
					me.__71.ggVisible=false;
				}
			}
		}
		me.__71.logicBlock_visible();
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,85,127,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px 10px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_14.ggUpdateText=function() {
			var params = [];
			var hs = player._("99\u33a1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_14.ggUpdateText();
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_14.onclick=function (e) {
			player.setVariableValue('vis_mobiletypeA', true);
			player.setVariableValue('vis_mobiletypeB', false);
			player.setVariableValue('vis_type', false);
			player.openNext("{node1}","");
		}
		me._text_14.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me._text_14);
		el=me._text_15=document.createElement('div');
		els=me._text_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,85,127,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 10px 10px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_15.ggUpdateText=function() {
			var params = [];
			var hs = player._("117\u33a1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_15.ggUpdateText();
		el.appendChild(els);
		me._text_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_15.onclick=function (e) {
			player.setVariableValue('vis_mobiletypeB', true);
			player.setVariableValue('vis_mobiletypeA', false);
			player.setVariableValue('vis_type', false);
			player.openNext("{node16}","");
		}
		me._text_15.ggUpdatePosition=function (useTransition) {
		}
		me.__71.appendChild(me._text_15);
		me.__70.appendChild(me.__71);
		me.divSkin.appendChild(me.__70);
		el=me._footer=document.createElement('div');
		el.ggId="Footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : 0px;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_bg=document.createElement('div');
		el.ggId="Footer_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(38,38,38,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 750))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._footer_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._footer_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._footer_bg.style.transition='width 0s, height 0s';
				if (me._footer_bg.ggCurrentLogicStateSize == 0) {
					me._footer_bg.style.width='100%';
					me._footer_bg.style.height='60%';
					skin.updateSize(me._footer_bg);
				}
				else {
					me._footer_bg.style.width='100%';
					me._footer_bg.style.height='100%';
					skin.updateSize(me._footer_bg);
				}
			}
		}
		me._footer_bg.logicBlock_size();
		me._footer_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_box=document.createElement('div');
		el.ggId="Footer_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_box.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 10px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u2299 \ubcf8 \uc0ac\uc774\ubc84 \ubaa8\ub378\ud558\uc6b0\uc2a4\ub294 \uacac\ubcf8\uc8fc\ud0dd\uc744 \ucd2c\uc601\ud55c \uac83\uc785\ub2c8\ub2e4. \uc5f0\ucd9c\uc744 \uc704\ud574 \uc0ac\uc6a9\ud55c \uc18c\ud488\ub4e4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4 \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\u2299 \uacf5\uac04\uc758 \ud0c0\uc785\uc740 2009\ub144 4\uc6d4 1\uc77c \uc8fc\ud0dd\uacf5\uae09\uc5d0 \uad00\ud55c \uaddc\uce59 \uac1c\uc815\uc744 \uc900\uc218\ud574 \uacf5\uae09\uba74\uc801\uc744 \uc8fc\uac70 \uc804\uc6a9 \uba74\uc801\uc73c\ub85c \ud45c\uae30\ud558\uc600\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 750))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_30.style.transition='';
				if (me._text_30.ggCurrentLogicStateVisible == 0) {
					me._text_30.style.visibility="hidden";
					me._text_30.ggVisible=false;
				}
				else {
					me._text_30.style.visibility=(Number(me._text_30.style.opacity)>0||!me._text_30.style.opacity)?'inherit':'hidden';
					me._text_30.ggVisible=true;
				}
			}
		}
		me._text_30.logicBlock_visible();
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		me._footer_box.appendChild(me._text_30);
		el=me.__68=document.createElement('div');
		els=me.__68__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubd84\uc591\ubb38\uc758";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__68.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd84\uc591\ubb38\uc758", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__68.ggUpdateText();
		el.appendChild(els);
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 750))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__68.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__68.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__68.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__68.ggCurrentLogicStatePosition == 0) {
					me.__68.style.left='20px';
					me.__68.style.top='18px';
				}
				else {
					me.__68.style.left='20px';
					me.__68.style.top='5px';
				}
			}
		}
		me.__68.logicBlock_position();
		me.__68.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 750))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__68.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__68.ggCurrentLogicStateSize = newLogicStateSize;
				me.__68.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__68.ggCurrentLogicStateSize == 0) {
					me.__68.style.width='30%';
					me.__68.style.height='50%';
					skin.updateSize(me.__68);
				}
				else {
					me.__68.style.width='10%';
					me.__68.style.height='50%';
					skin.updateSize(me.__68);
				}
			}
		}
		me.__68.logicBlock_size();
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me.__69=document.createElement('div');
		els=me.__69__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\ud654\ubc88\ud638";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 63px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 10px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__69.ggUpdateText=function() {
			var params = [];
			var hs = player._("1566-5297", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__69.ggUpdateText();
		el.appendChild(els);
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 750))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__69.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__69.ggCurrentLogicStateSize = newLogicStateSize;
				me.__69.style.transition='width 0s, height 0s';
				if (me.__69.ggCurrentLogicStateSize == 0) {
					me.__69.style.width='400%';
					me.__69.style.height='100%';
					me.__69.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__69);
				}
				else {
					me.__69.style.width='200%';
					me.__69.style.height='100%';
					me.__69.style.top = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__69);
				}
			}
		}
		me.__69.logicBlock_size();
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me.__69);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjZjNmM2YzIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBob25lLWNhbGwiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPHBhdGggZD0iTTE1LjA1IDVBNSA1IDAgMCAxIDE5IDguOTVNMTUuMDUgMUE5IDkgMCAwIDEgMjMgOC45NG0tMSA3Ljk4djNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwID'+
			'AgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6Ii8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me._svg_4);
		me._footer_box.appendChild(me.__68);
		me._footer_bg.appendChild(me._footer_box);
		me._footer.appendChild(me._footer_bg);
		me.divSkin.appendChild(me._footer);
		el=me.__59=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4-\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me.__61=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 8px solid rgba(34,30,31,0.392157);';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4 ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom-style:dashed; border-bottom-width:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		el=me._text2=document.createElement('div');
		els=me._text2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0bc\uc131 \uc2dc\uc2a4\ud15c \uc5d0\uc5b4\ucee8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text2.ggUpdateText();
		el.appendChild(els);
		me._text2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text2.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me._text2);
		el=me._text_41=document.createElement('div');
		els=me._text_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.705882);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_41.ggUpdateText();
		el.appendChild(els);
		me._text_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_41.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_41.ggCurrentLogicStateText != newLogicStateText) {
				me._text_41.ggCurrentLogicStateText = newLogicStateText;
				me._text_41.style.transition='';
				if (me._text_41.ggCurrentLogicStateText == 0) {
					if (me._text_41.ggUpdateText) {
					me._text_41.ggUpdateText=function() {
						var params = [];
						var hs = player._("84B", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_41.ggUpdateText();
					} else {
						if (me._text_41.ggUpdatePosition) me._text_41.ggUpdatePosition();
					}
				}
				else {
					if (me._text_41.ggUpdateText) {
					me._text_41.ggUpdateText=function() {
						var params = [];
						var hs = player._("84A", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_41.ggUpdateText();
					} else {
						if (me._text_41.ggUpdatePosition) me._text_41.ggUpdatePosition();
					}
				}
			}
		}
		me._text_41.logicBlock_text();
		me._text_41.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me._text_41);
		el=me.__67=document.createElement('div');
		els=me.__67__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc720\uc0c1\uc635\uc158";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(0,85,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : -35px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__67.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc720\uc0c1\uc635\uc158", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__67.ggUpdateText();
		el.appendChild(els);
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		me.__66.appendChild(me.__67);
		me.__64.appendChild(me.__66);
		el=me.__65=document.createElement('div');
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 110%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 111%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me._text1=document.createElement('div');
		els=me._text1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\xb6 \uc124\uce58 \ub300\uc218 : 4\ub300 (\uac70\uc2e4, \uce68\uc2e41, \uce68\uc2e42, \uce68\uc2e43)\n\xb6 \uae30\ub2a5 : \ub0c9\/\ub09c\ubc29, \uacf5\uae30\uccad\uc815\n\xb6 \uc5d0\uc5b4\ucee8 \uc124\uce58 \ub300\uc218\ub294 \uacc4\uc57d\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text1.ggUpdateText();
		el.appendChild(els);
		me._text1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text1.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me._text1);
		me.__64.appendChild(me.__65);
		me.__62.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		el.ggId="\uc0c1\ud488 \uc0ac\uc9c4";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 10%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 800%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 66%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me._image_6);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me._image_7);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs=basePath + 'images/image_8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -100px;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__63.appendChild(me._image_8);
		me.__62.appendChild(me.__63);
		el=me._text_50=document.createElement('div');
		els=me._text_50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_50.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 \uc774\ubbf8\uc9c0\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc2e4\uc81c \uc640 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_50.ggUpdateText();
		el.appendChild(els);
		me._text_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_50.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYWxlcnQtY2lyY2xlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGNpcmNsZSBjeT0iMTIiIHI9IjEwIiBjeD0iMTIiLz4KIDxsaW5lIHgyPSIxMiIgeTI9IjEyIiB4MT0iMTIiIHkxPSI4Ii8+CiA8bGluZSB4Mj0iMTIuMDEiIHkyPSIxNiIgeDE9IjEyIiB5MT0iMTYiLz'+
			'4KPC9zdmc+Cg==';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._text_50.appendChild(me._svg_10);
		me.__62.appendChild(me._text_50);
		me.__61.appendChild(me.__62);
		me.__59.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.onclick=function (e) {
			me.__59.style.transition='none';
			me.__59.style.visibility='hidden';
			me.__59.ggVisible=false;
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItcGx1cyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIj4KIDxsaW5lIHgyPSIxMiIgeTI9IjE5IiB4MT0iMTIiIHkxPSI1Ii8+CiA8bGluZSB4Mj0iMTkiIHkyPSIxMiIgeDE9IjUiIHkxPSIxMiIvPgo8L3N2Zz4K';
		me._svg_21__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._svg_21);
		me.__59.appendChild(me.__60);
		me.divSkin.appendChild(me.__59);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			player.setVariableValue('vis_icon', !player.getVariableValue('vis_icon'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me.__48=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4-\uc5d0\uc5b4\ucee8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 8px solid rgba(34,30,31,0.392157);';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4 -\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\uc81c\ubaa9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom-style:dashed; border-bottom-width:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me._text0=document.createElement('div');
		els=me._text0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-text-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0bc\uc131 \uc2dc\uc2a4\ud15c \uc5d0\uc5b4\ucee8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text0.ggUpdateText();
		el.appendChild(els);
		me._text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text0.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me._text0);
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.705882);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 700;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_40.ggUpdateText();
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_40.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_40.ggCurrentLogicStateText != newLogicStateText) {
				me._text_40.ggCurrentLogicStateText = newLogicStateText;
				me._text_40.style.transition='';
				if (me._text_40.ggCurrentLogicStateText == 0) {
					if (me._text_40.ggUpdateText) {
					me._text_40.ggUpdateText=function() {
						var params = [];
						var hs = player._("84B", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_40.ggUpdateText();
					} else {
						if (me._text_40.ggUpdatePosition) me._text_40.ggUpdatePosition();
					}
				}
				else {
					if (me._text_40.ggUpdateText) {
					me._text_40.ggUpdateText=function() {
						var params = [];
						var hs = player._("84A", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_40.ggUpdateText();
					} else {
						if (me._text_40.ggUpdatePosition) me._text_40.ggUpdatePosition();
					}
				}
			}
		}
		me._text_40.logicBlock_text();
		me._text_40.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me._text_40);
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc720\uc0c1\uc635\uc158-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(0,85,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc720\uc0c1\uc635\uc158", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__56);
		me.__53.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 110%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 111%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me._text=document.createElement('div');
		els=me._text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9-tex-\ubaa8\ubc14\uc77ct";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text.ggUpdateText=function() {
			var params = [];
			var hs = player._("\xb6 \uc124\uce58 \ub300\uc218 : 4\ub300 (\uac70\uc2e4, \uce68\uc2e41, \uce68\uc2e42, \uce68\uc2e43)\n\xb6 \uae30\ub2a5 : \ub0c9\/\ub09c\ubc29, \uacf5\uae30\uccad\uc815\n\xb6 \uc5d0\uc5b4\ucee8 \uc124\uce58 \ub300\uc218\ub294 \uacc4\uc57d\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text.ggUpdateText();
		el.appendChild(els);
		me._text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text.ggUpdatePosition=function (useTransition) {
		}
		me.__54.appendChild(me._text);
		me.__53.appendChild(me.__54);
		me.__51.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		el.ggId="\uc0c1\ud488 \uc0ac\uc9c4-\ubaa8\ubc14\uc77c";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 10%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggDy=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 975%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((975% + 0px) / 2) + 18px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me._image_5);
		me.__51.appendChild(me.__52);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 \uc774\ubbf8\uc9c0\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc2e4\uc81c \uc640 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYWxlcnQtY2lyY2xlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGNpcmNsZSBjeT0iMTIiIHI9IjEwIiBjeD0iMTIiLz4KIDxsaW5lIHgyPSIxMiIgeTI9IjEyIiB4MT0iMTIiIHkxPSI4Ii8+CiA8bGluZSB4Mj0iMTIuMDEiIHkyPSIxNiIgeDE9IjEyIiB5MT0iMTYiLz'+
			'4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._text_5.appendChild(me._svg_1);
		me.__51.appendChild(me._text_5);
		me.__50.appendChild(me.__51);
		me.__48.appendChild(me.__50);
		el=me.__49=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.onclick=function (e) {
			me.__48.style.transition='none';
			me.__48.style.visibility='hidden';
			me.__48.ggVisible=false;
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItcGx1cyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIj4KIDxsaW5lIHgyPSIxMiIgeTI9IjE5IiB4MT0iMTIiIHkxPSI1Ii8+CiA8bGluZSB4Mj0iMTkiIHkyPSIxMiIgeDE9IjUiIHkxPSIxMiIvPgo8L3N2Zz4K';
		me._svg_20__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._svg_20);
		me.__48.appendChild(me.__49);
		me.divSkin.appendChild(me.__48);
		el=me._poppop=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4-poppop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._poppop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._poppop.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\ubc30\uacbd-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 8px solid rgba(0,85,127,0.392157);';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4 -\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\uc81c\ubaa9-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom-style:dashed; border-bottom-width:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 99;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.705882);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("99\u33a1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 117") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_4.ggCurrentLogicStateText != newLogicStateText) {
				me._text_4.ggCurrentLogicStateText = newLogicStateText;
				me._text_4.style.transition='';
				if (me._text_4.ggCurrentLogicStateText == 0) {
					if (me._text_4.ggUpdateText) {
					me._text_4.ggUpdateText=function() {
						var params = [];
						var hs = player._("117\u33a1C", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_4.ggUpdateText();
					} else {
						if (me._text_4.ggUpdatePosition) me._text_4.ggUpdatePosition();
					}
				}
				else {
					if (me._text_4.ggUpdateText) {
					me._text_4.ggUpdateText=function() {
						var params = [];
						var hs = player._("99\u33a1C", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_4.ggUpdateText();
					} else {
						if (me._text_4.ggUpdatePosition) me._text_4.ggUpdatePosition();
					}
				}
			}
		}
		me._text_4.logicBlock_text();
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me._text_4);
		me.__46.appendChild(me.__47);
		me.__45.appendChild(me.__46);
		me.__44.appendChild(me.__45);
		el=me._typea=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="typea-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._typea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._typea.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._typea.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._typea.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._typea.style.transition='';
				if (me._typea.ggCurrentLogicStateVisible == 0) {
					me._typea.style.visibility=(Number(me._typea.style.opacity)>0||!me._typea.style.opacity)?'inherit':'hidden';
					if (me._typea.ggMapNotLoaded && me._typea.ggInitMap) {
						me._typea.ggInitMap(false);
						me._typea.ggInitMapMarkers(true);
					}
					me._typea.ggVisible=true;
				}
				else {
					me._typea.style.visibility="hidden";
					if (me._typea.ggClearMap) me._typea.ggClearMap();
					me._typea.ggVisible=false;
				}
			}
		}
		me._typea.logicBlock_visible();
		me._typea.ggCurrentLogicStateVisible = -1;
		me._typea.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._typea.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typea.ggCalculateFloorplanSize(mapDetails);
				me._typea.ggShowSimpleFloorplan(mapDetails);
				me._typea.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typea.ggRadar) me._typea.ggRadar.update();
		}
		me._typea.ggUpdatePosition=function (useTransition) {
			me._typea.ggUpdateConditionResize();
		}
		me.__44.appendChild(me._typea);
		el=me._typeb=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="typeb-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._typeb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._typeb.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._typeb.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._typeb.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._typeb.style.transition='';
				if (me._typeb.ggCurrentLogicStateVisible == 0) {
					me._typeb.style.visibility=(Number(me._typeb.style.opacity)>0||!me._typeb.style.opacity)?'inherit':'hidden';
					if (me._typeb.ggMapNotLoaded && me._typeb.ggInitMap) {
						me._typeb.ggInitMap(false);
						me._typeb.ggInitMapMarkers(true);
					}
					me._typeb.ggVisible=true;
				}
				else {
					me._typeb.style.visibility="hidden";
					if (me._typeb.ggClearMap) me._typeb.ggClearMap();
					me._typeb.ggVisible=false;
				}
			}
		}
		me._typeb.logicBlock_visible();
		me._typeb.ggCurrentLogicStateVisible = -1;
		me._typeb.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._typeb.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typeb.ggCalculateFloorplanSize(mapDetails);
				me._typeb.ggShowSimpleFloorplan(mapDetails);
				me._typeb.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typeb.ggRadar) me._typeb.ggRadar.update();
		}
		me._typeb.ggUpdatePosition=function (useTransition) {
			me._typeb.ggUpdateConditionResize();
		}
		me.__44.appendChild(me._typeb);
		me._poppop.appendChild(me.__44);
		el=me.__43=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.onclick=function (e) {
			me._poppop.style.transition='none';
			me._poppop.style.visibility='hidden';
			me._poppop.ggVisible=false;
			player.setVariableValue('vis_map', false);
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDA1NTdmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBsdXMiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGxpbmUgeDI9IjEyIiB5Mj0iMTkiIHgxPSIxMiIgeTE9IjUiLz4KIDxsaW5lIHgyPSIxOSIgeTI9IjEyIiB4MT0iNSIgeTE9IjEyIi8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2-\ud3c9\uba74\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._svg_2);
		me._poppop.appendChild(me.__43);
		me.divSkin.appendChild(me._poppop);
		el=me._popup=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4-popup-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup1=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\ubc30\uacbd-\ubaa8\ubc14\uc77c-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 8px solid rgba(0,85,127,0.392157);';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__popup=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4 -\ubaa8\ubc14\uc77c-popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup2=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-\ubaa8\ubc14\uc77c-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup2.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup3=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\uc81c\ubaa9-\ubaa8\ubc14\uc77c-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom-style:dashed; border-bottom-width:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4popup=document.createElement('div');
		els=me._text_4popup__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\ubaa8\ubc14\uc77c-popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.705882);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 700;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4popup.ggUpdateText=function() {
			var params = [];
			var hs = player._("99\u33a1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4popup.ggUpdateText();
		el.appendChild(els);
		me._text_4popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4popup.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 117") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_4popup.ggCurrentLogicStateText != newLogicStateText) {
				me._text_4popup.ggCurrentLogicStateText = newLogicStateText;
				me._text_4popup.style.transition='';
				if (me._text_4popup.ggCurrentLogicStateText == 0) {
					if (me._text_4popup.ggUpdateText) {
					me._text_4popup.ggUpdateText=function() {
						var params = [];
						var hs = player._("117\u33a1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_4popup.ggUpdateText();
					} else {
						if (me._text_4popup.ggUpdatePosition) me._text_4popup.ggUpdatePosition();
					}
				}
				else {
					if (me._text_4popup.ggUpdateText) {
					me._text_4popup.ggUpdateText=function() {
						var params = [];
						var hs = player._("99\u33a1C", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_4popup.ggUpdateText();
					} else {
						if (me._text_4popup.ggUpdatePosition) me._text_4popup.ggUpdatePosition();
					}
				}
			}
		}
		me._text_4popup.logicBlock_text();
		me._text_4popup.ggUpdatePosition=function (useTransition) {
		}
		me._popup3.appendChild(me._text_4popup);
		me._popup2.appendChild(me._popup3);
		me.__popup.appendChild(me._popup2);
		el=me._typeapopup=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="typea-\ud3c9\uba74\ub3c4-popup";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 30px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._typeapopup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._typeapopup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._typeapopup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._typeapopup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._typeapopup.style.transition='';
				if (me._typeapopup.ggCurrentLogicStateVisible == 0) {
					me._typeapopup.style.visibility=(Number(me._typeapopup.style.opacity)>0||!me._typeapopup.style.opacity)?'inherit':'hidden';
					if (me._typeapopup.ggMapNotLoaded && me._typeapopup.ggInitMap) {
						me._typeapopup.ggInitMap(false);
						me._typeapopup.ggInitMapMarkers(true);
					}
					me._typeapopup.ggVisible=true;
				}
				else {
					me._typeapopup.style.visibility="hidden";
					if (me._typeapopup.ggClearMap) me._typeapopup.ggClearMap();
					me._typeapopup.ggVisible=false;
				}
			}
		}
		me._typeapopup.logicBlock_visible();
		me._typeapopup.ggCurrentLogicStateVisible = -1;
		me._typeapopup.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._typeapopup.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typeapopup.ggCalculateFloorplanSize(mapDetails);
				me._typeapopup.ggShowSimpleFloorplan(mapDetails);
				me._typeapopup.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typeapopup.ggRadar) me._typeapopup.ggRadar.update();
		}
		me._typeapopup.ggUpdatePosition=function (useTransition) {
			me._typeapopup.ggUpdateConditionResize();
		}
		me.__popup.appendChild(me._typeapopup);
		el=me._typebpopup=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="typeb-\ud3c9\uba74\ub3c4-popup";
		el.ggDx=0;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 30px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._typebpopup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._typebpopup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._typebpopup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._typebpopup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._typebpopup.style.transition='';
				if (me._typebpopup.ggCurrentLogicStateVisible == 0) {
					me._typebpopup.style.visibility=(Number(me._typebpopup.style.opacity)>0||!me._typebpopup.style.opacity)?'inherit':'hidden';
					if (me._typebpopup.ggMapNotLoaded && me._typebpopup.ggInitMap) {
						me._typebpopup.ggInitMap(false);
						me._typebpopup.ggInitMapMarkers(true);
					}
					me._typebpopup.ggVisible=true;
				}
				else {
					me._typebpopup.style.visibility="hidden";
					if (me._typebpopup.ggClearMap) me._typebpopup.ggClearMap();
					me._typebpopup.ggVisible=false;
				}
			}
		}
		me._typebpopup.logicBlock_visible();
		me._typebpopup.ggCurrentLogicStateVisible = -1;
		me._typebpopup.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._typebpopup.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typebpopup.ggCalculateFloorplanSize(mapDetails);
				me._typebpopup.ggShowSimpleFloorplan(mapDetails);
				me._typebpopup.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typebpopup.ggRadar) me._typebpopup.ggRadar.update();
		}
		me._typebpopup.ggUpdatePosition=function (useTransition) {
			me._typebpopup.ggUpdateConditionResize();
		}
		me.__popup.appendChild(me._typebpopup);
		me._popup1.appendChild(me.__popup);
		me._popup.appendChild(me._popup1);
		el=me._popup0=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4-\ubaa8\ubc14\uc77c-popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup0.onclick=function (e) {
			me._popup.style.transition='none';
			me._popup.style.visibility='hidden';
			me._popup.ggVisible=false;
			player.setVariableValue('vis_map', false);
		}
		me._popup0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2popup=document.createElement('div');
		els=me._svg_2popup__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDA1NTdmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBsdXMiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGxpbmUgeDI9IjEyIiB5Mj0iMTkiIHgxPSIxMiIgeTE9IjUiLz4KIDxsaW5lIHgyPSIxOSIgeTI9IjEyIiB4MT0iNSIgeTE9IjEyIi8+Cjwvc3ZnPgo=';
		me._svg_2popup__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2-\ubaa8\ubc14\uc77c-popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_2popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2popup.ggUpdatePosition=function (useTransition) {
		}
		me._popup0.appendChild(me._svg_2popup);
		me._popup.appendChild(me._popup0);
		me.divSkin.appendChild(me._popup);
		el=me.__41=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 120px;';
		hs+='height : 28px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__41.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__41.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__41.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__41.style.transition='left 0s, bottom 0s, transform 300ms linear 0ms';
				if (me.__41.ggCurrentLogicStatePosition == 0) {
					me.__41.style.left='10px';
					me.__41.style.bottom='80px';
				}
				else {
					me.__41.style.left='10px';
					me.__41.style.bottom='120px';
				}
			}
		}
		me.__41.logicBlock_position();
		me.__41.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_41'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__41.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__41.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__41.style.transition='left 0s, bottom 0s, transform 300ms linear 0ms';
				if (me.__41.ggCurrentLogicStateScaling == 0) {
					me.__41.ggParameter.sx = 1.05;
					me.__41.ggParameter.sy = 1.05;
					me.__41.style.transform=parameterToTransform(me.__41.ggParameter);
					setTimeout(function() {skin.updateSize(me.__41);}, 350);
				}
				else {
					me.__41.ggParameter.sx = 1;
					me.__41.ggParameter.sy = 1;
					me.__41.style.transform=parameterToTransform(me.__41.ggParameter);
					setTimeout(function() {skin.updateSize(me.__41);}, 350);
				}
			}
		}
		me.__41.logicBlock_scaling();
		me.__41.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__41.style.transition='left 0s, bottom 0s, transform 300ms linear 0ms';
				if (me.__41.ggCurrentLogicStateVisible == 0) {
					me.__41.style.visibility="hidden";
					me.__41.ggVisible=false;
				}
				else {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
			}
		}
		me.__41.logicBlock_visible();
		me.__41.onclick=function (e) {
			player.setVariableValue('vis_map', true);
		}
		me.__41.onmouseover=function (e) {
			me.elementMouseOver['_41']=true;
			me.__41.logicBlock_scaling();
		}
		me.__41.onmouseout=function (e) {
			me.elementMouseOver['_41']=false;
			me.__41.logicBlock_scaling();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 2px 1px rgba(0,0,0,1);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4 \ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me._text_20);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjZjNmM2YzIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPHBvbHlsaW5lIHBvaW50cz0iMTggMTUgMTIgOSA2IDE1Ii8+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me._svg_5);
		me.__41.appendChild(me.__42);
		me.divSkin.appendChild(me.__41);
		el=me.__39=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 350px;';
		hs+='left : 10px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__39.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 540)) && 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__39.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__39.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__39.style.transition='left 800ms linear 0ms, bottom 800ms linear 0ms, opacity 800ms linear 0ms';
				if (me.__39.ggCurrentLogicStatePosition == 0) {
					me.__39.style.left='10px';
					me.__39.style.bottom='60px';
				}
				else if (me.__39.ggCurrentLogicStatePosition == 1) {
					me.__39.style.left='10px';
					me.__39.style.bottom='105px';
				}
				else {
					me.__39.style.left='10px';
					me.__39.style.bottom='0px';
				}
			}
		}
		me.__39.logicBlock_position();
		me.__39.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='left 800ms linear 0ms, bottom 800ms linear 0ms, opacity 800ms linear 0ms';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
				else {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__39.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__39.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__39.style.transition='left 800ms linear 0ms, bottom 800ms linear 0ms, opacity 800ms linear 0ms';
				if (me.__39.ggCurrentLogicStateAlpha == 0) {
					me.__39.style.visibility=me.__39.ggVisible?'inherit':'hidden';
					me.__39.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__39.style.opacity == 0.0) { me.__39.style.visibility="hidden"; } }, 805);
					me.__39.style.opacity=0;
				}
			}
		}
		me.__39.logicBlock_alpha();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 30px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("99\u33a1C", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7.ggUpdateText();
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 117") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_7.ggCurrentLogicStateText != newLogicStateText) {
				me._text_7.ggCurrentLogicStateText = newLogicStateText;
				me._text_7.style.transition='';
				if (me._text_7.ggCurrentLogicStateText == 0) {
					if (me._text_7.ggUpdateText) {
					me._text_7.ggUpdateText=function() {
						var params = [];
						var hs = player._("117\u33a1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_7.ggUpdateText();
					} else {
						if (me._text_7.ggUpdatePosition) me._text_7.ggUpdatePosition();
					}
				}
				else {
					if (me._text_7.ggUpdateText) {
					me._text_7.ggUpdateText=function() {
						var params = [];
						var hs = player._("99\u33a1C", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_7.ggUpdateText();
					} else {
						if (me._text_7.ggUpdatePosition) me._text_7.ggUpdatePosition();
					}
				}
			}
		}
		me._text_7.logicBlock_text();
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._text_7);
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud504\ub9ac\ubbf8\uc5c4 \uc635\uc158\ud615", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._text_8);
		me.__39.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__99=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '';
		el.ggId="99";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__99.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__99.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 99C") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__99.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__99.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__99.style.transition='';
				if (me.__99.ggCurrentLogicStateVisible == 0) {
					me.__99.style.visibility=(Number(me.__99.style.opacity)>0||!me.__99.style.opacity)?'inherit':'hidden';
					if (me.__99.ggMapNotLoaded && me.__99.ggInitMap) {
						me.__99.ggInitMap(false);
						me.__99.ggInitMapMarkers(true);
					}
					me.__99.ggVisible=true;
				}
				else {
					me.__99.style.visibility="hidden";
					if (me.__99.ggClearMap) me.__99.ggClearMap();
					me.__99.ggVisible=false;
				}
			}
		}
		me.__99.logicBlock_visible();
		me.__99.ggCurrentLogicStateVisible = -1;
		me.__99.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me.__99.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me.__99.ggCalculateFloorplanSize(mapDetails);
				me.__99.ggShowSimpleFloorplan(mapDetails);
				me.__99.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me.__99.ggRadar) me.__99.ggRadar.update();
		}
		me.__99.ggUpdatePosition=function (useTransition) {
			me.__99.ggUpdateConditionResize();
		}
		me._rectangle_2.appendChild(me.__99);
		el=me.__117=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '';
		el.ggId="117";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__117.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uc624\ucc3d \ub354\uc0f5 117") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__117.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__117.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__117.style.transition='';
				if (me.__117.ggCurrentLogicStateVisible == 0) {
					me.__117.style.visibility=(Number(me.__117.style.opacity)>0||!me.__117.style.opacity)?'inherit':'hidden';
					if (me.__117.ggMapNotLoaded && me.__117.ggInitMap) {
						me.__117.ggInitMap(false);
						me.__117.ggInitMapMarkers(true);
					}
					me.__117.ggVisible=true;
				}
				else {
					me.__117.style.visibility="hidden";
					if (me.__117.ggClearMap) me.__117.ggClearMap();
					me.__117.ggVisible=false;
				}
			}
		}
		me.__117.logicBlock_visible();
		me.__117.ggCurrentLogicStateVisible = -1;
		me.__117.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me.__117.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me.__117.ggCalculateFloorplanSize(mapDetails);
				me.__117.ggShowSimpleFloorplan(mapDetails);
				me.__117.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me.__117.ggRadar) me.__117.ggRadar.update();
		}
		me.__117.ggUpdatePosition=function (useTransition) {
			me.__117.ggUpdateConditionResize();
		}
		me._rectangle_2.appendChild(me.__117);
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.onclick=function (e) {
			player.setVariableValue('vis_map', false);
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDA1NTdmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBsdXMiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGxpbmUgeDI9IjEyIiB5Mj0iMTkiIHgxPSIxMiIgeTE9IjUiLz4KIDxsaW5lIHgyPSIxOSIgeTI9IjEyIiB4MT0iNSIgeTE9IjEyIi8+Cjwvc3ZnPgo=';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._svg_6);
		me._rectangle_2.appendChild(me._rectangle_4);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 540))
				)
			) {
				me._poppop.style.transition='none';
				me._poppop.style.visibility=(Number(me._poppop.style.opacity)>0||!me._poppop.style.opacity)?'inherit':'hidden';
				me._poppop.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._popup.style.transition='none';
				me._popup.style.visibility=(Number(me._popup.style.opacity)>0||!me._popup.style.opacity)?'inherit':'hidden';
				me._popup.ggVisible=true;
			}
			player.setVariableValue('vis_map', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		els=me.__40__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDA1NTdmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWV4dGVybmFsLWxpbmsiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiLz4KIDxwb2x5bGluZSBwb2ludHM9IjE1IDMgMjEgMyAyMS'+
			'A5Ii8+CiA8bGluZSB4Mj0iMjEiIHkyPSIzIiB4MT0iMTAiIHkxPSIxNCIvPgo8L3N2Zz4K';
		me.__40__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud3c9\uba74\ub3c4 \ud06c\uac8c \ubcf4\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me.__40);
		me._rectangle_2.appendChild(me._rectangle_3);
		el=me._text_9=document.createElement('div');
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\ucee4\ub97c \ub20c\ub7ec \uc6d0\ud558\ub294 \n\uc704\uce58\ub85c \uc774\ub3d9\ud574 \ubcf4\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9.ggUpdateText();
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._text_9);
		me.__39.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me.__39);
		el=me.__38=document.createElement('div');
		el.ggId="\uae30\ub2a5\ub354\ubcf4\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 10px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__38.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_more') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__38.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__38.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__38.style.transition='transform 800ms linear 0ms';
				if (me.__38.ggCurrentLogicStateScaling == 0) {
					me.__38.ggParameter.sx = 1.05;
					me.__38.ggParameter.sy = 1.05;
					me.__38.style.transform=parameterToTransform(me.__38.ggParameter);
					setTimeout(function() {skin.updateSize(me.__38);}, 850);
				}
				else {
					me.__38.ggParameter.sx = 1;
					me.__38.ggParameter.sy = 1;
					me.__38.style.transform=parameterToTransform(me.__38.ggParameter);
					setTimeout(function() {skin.updateSize(me.__38);}, 850);
				}
			}
		}
		me.__38.logicBlock_scaling();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 1px 1px rgba(0,0,0,0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_more') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_6.style.transition='background-color 0s';
				if (me._rectangle_6.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_6.style.backgroundColor="rgba(243,243,243,1)";
				}
				else {
					me._rectangle_6.style.backgroundColor="rgba(0,85,127,1)";
				}
			}
		}
		me._rectangle_6.logicBlock_backgroundcolor();
		me._rectangle_6.onclick=function (e) {
			player.setVariableValue('vis_more_1', !player.getVariableValue('vis_more_1'));
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjZjNmM2YzIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1vcmUtdmVydGljYWwiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGNpcmNsZSBjeT0iMTIiIHI9IjEiIGN4PSIxMiIvPgogPGNpcmNsZSBjeT0iNSIgcj0iMSIgY3g9IjEyIi8+CiA8Y2lyY2xlIGN5PSIxOSIgcj0iMSIgY3g9IjEyIi8+Cjwvc3'+
			'ZnPgo=';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_more') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_7.style.transition='';
				if (me._svg_7.ggCurrentLogicStateVisible == 0) {
					me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
					me._svg_7.ggVisible=true;
				}
				else {
					me._svg_7.style.visibility="hidden";
					me._svg_7.ggVisible=false;
				}
			}
		}
		me._svg_7.logicBlock_visible();
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._svg_7);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjMDA1NTdmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1vcmUtdmVydGljYWwiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiPgogPGNpcmNsZSBjeT0iMTIiIHI9IjEiIGN4PSIxMiIvPgogPGNpcmNsZSBjeT0iNSIgcj0iMSIgY3g9IjEyIi8+CiA8Y2lyY2xlIGN5PSIxOSIgcj0iMSIgY3g9IjEyIi8+Cjwvc3'+
			'ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_more') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_8.style.transition='';
				if (me._svg_8.ggCurrentLogicStateVisible == 0) {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
				else {
					me._svg_8.style.visibility="hidden";
					me._svg_8.ggVisible=false;
				}
			}
		}
		me._svg_8.logicBlock_visible();
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._svg_8);
		me.__38.appendChild(me._rectangle_6);
		me.divSkin.appendChild(me.__38);
		el=me.__35=document.createElement('div');
		el.ggId="\ucd94\uac00 \uae30\ub2a5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 105px;';
		hs+='height : 135px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__35.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_more_1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__35.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__35.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__35.style.transition='right 800ms linear 0ms, bottom 800ms linear 0ms, opacity 800ms linear 0ms';
				if (me.__35.ggCurrentLogicStatePosition == 0) {
					me.__35.style.right='10px';
					me.__35.style.bottom='105px';
				}
				else {
					me.__35.style.right='10px';
					me.__35.style.bottom='105px';
				}
			}
		}
		me.__35.logicBlock_position();
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_more_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='right 800ms linear 0ms, bottom 800ms linear 0ms, opacity 800ms linear 0ms';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
				else {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_more_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__35.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__35.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__35.style.transition='right 800ms linear 0ms, bottom 800ms linear 0ms, opacity 800ms linear 0ms';
				if (me.__35.ggCurrentLogicStateAlpha == 0) {
					me.__35.style.visibility=me.__35.ggVisible?'inherit':'hidden';
					me.__35.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__35.style.opacity == 0.0) { me.__35.style.visibility="hidden"; } }, 805);
					me.__35.style.opacity=0;
				}
			}
		}
		me.__35.logicBlock_alpha();
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 1px 1px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_37'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__37.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__37.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__37.style.transition='background-color 800ms linear 0ms';
				if (me.__37.ggCurrentLogicStateBackgroundColor == 0) {
					me.__37.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__37.style.backgroundColor="rgba(0,85,127,1)";
				}
			}
		}
		me.__37.logicBlock_backgroundcolor();
		me.__37.onclick=function (e) {
			player.enterFullscreen();
		}
		me.__37.onmouseover=function (e) {
			me.elementMouseOver['_37']=true;
			me.__37.logicBlock_backgroundcolor();
		}
		me.__37.onmouseout=function (e) {
			me.elementMouseOver['_37']=false;
			me.__37.logicBlock_backgroundcolor();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\n\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['text_10'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_10.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_10.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_10.style.transition='color 800ms linear 0ms';
				if (me._text_10.ggCurrentLogicStateTextColor == 0) {
					me._text_10.style.color="rgba(0,85,127,1)";
				}
				else {
					me._text_10.style.color="rgba(243,243,243,1)";
				}
			}
		}
		me._text_10.logicBlock_textcolor();
		me._text_10.onmouseover=function (e) {
			me.elementMouseOver['text_10']=true;
			me._text_10.logicBlock_textcolor();
		}
		me._text_10.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_10__text)
					return;
				}
			}
			me.elementMouseOver['text_10']=false;
			me._text_10.logicBlock_textcolor();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me._text_10);
		me.__35.appendChild(me.__37);
		el=me.__36=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 1px 1px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_36'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__36.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__36.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__36.style.transition='background-color 800ms linear 0ms';
				if (me.__36.ggCurrentLogicStateBackgroundColor == 0) {
					me.__36.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me.__36.style.backgroundColor="rgba(0,85,127,1)";
				}
			}
		}
		me.__36.logicBlock_backgroundcolor();
		me.__36.onmouseover=function (e) {
			me.elementMouseOver['_36']=true;
			me.__36.logicBlock_backgroundcolor();
		}
		me.__36.onmouseout=function (e) {
			me.elementMouseOver['_36']=false;
			me.__36.logicBlock_backgroundcolor();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\n\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_11.ggUpdateText();
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_11.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.elementMouseDown['text_11'] == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_11.ggCurrentLogicStateText != newLogicStateText) {
				me._text_11.ggCurrentLogicStateText = newLogicStateText;
				me._text_11.style.transition='color 800ms linear 0ms';
				if (me._text_11.ggCurrentLogicStateText == 0) {
					if (me._text_11.ggUpdateText) {
					me._text_11.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub9c1\ud06c\n\uc644\ub8cc", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_11.ggUpdateText();
					} else {
						if (me._text_11.ggUpdatePosition) me._text_11.ggUpdatePosition();
					}
				}
				else {
					if (me._text_11.ggUpdateText) {
					me._text_11.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub9c1\ud06c\n\ubcf5\uc0ac", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_11.ggUpdateText();
					} else {
						if (me._text_11.ggUpdatePosition) me._text_11.ggUpdatePosition();
					}
				}
			}
		}
		me._text_11.logicBlock_text();
		me._text_11.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['text_11'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_11.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_11.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_11.style.transition='color 800ms linear 0ms';
				if (me._text_11.ggCurrentLogicStateTextColor == 0) {
					me._text_11.style.color="rgba(0,85,127,1)";
				}
				else {
					me._text_11.style.color="rgba(243,243,243,1)";
				}
			}
		}
		me._text_11.logicBlock_textcolor();
		me._text_11.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me._text_11.onmouseover=function (e) {
			me.elementMouseOver['text_11']=true;
			me._text_11.logicBlock_textcolor();
		}
		me._text_11.onmousedown=function (e) {
			me.elementMouseDown['text_11']=true;
			me._text_11.logicBlock_text();
		}
		me._text_11.onmouseup=function (e) {
			me.elementMouseDown['text_11']=false;
			me._text_11.logicBlock_text();
		}
		me._text_11.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_11__text)
					return;
				}
			}
			me.elementMouseDown['text_11']=false;
			me.elementMouseOver['text_11']=false;
			me._text_11.logicBlock_text();
			me._text_11.logicBlock_textcolor();
		}
		me._text_11.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me._text_11);
		me.__35.appendChild(me.__36);
		el=me._vr=document.createElement('div');
		el.ggId="VR\uc548\ub0b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:1px 1px 1px rgba(0,0,0,0.8);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['vr'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vr.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vr.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vr.style.transition='background-color 800ms linear 0ms';
				if (me._vr.ggCurrentLogicStateBackgroundColor == 0) {
					me._vr.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vr.style.backgroundColor="rgba(0,85,127,1)";
				}
			}
		}
		me._vr.logicBlock_backgroundcolor();
		me._vr.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				me.__8.style.transition='none';
				me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
				me.__8.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				me.__.style.transition='none';
				me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
				me.__.ggVisible=true;
			}
		}
		me._vr.onmouseover=function (e) {
			me.elementMouseOver['vr']=true;
			me._vr.logicBlock_backgroundcolor();
		}
		me._vr.onmouseout=function (e) {
			me.elementMouseOver['vr']=false;
			me._vr.logicBlock_backgroundcolor();
		}
		me._vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(243,243,243,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_12.ggUpdateText=function() {
			var params = [];
			var hs = player._("VR\n\uc548\ub0b4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_12.ggUpdateText();
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_12.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['text_12'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_12.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_12.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_12.style.transition='color 800ms linear 0ms';
				if (me._text_12.ggCurrentLogicStateTextColor == 0) {
					me._text_12.style.color="rgba(0,85,127,1)";
				}
				else {
					me._text_12.style.color="rgba(243,243,243,1)";
				}
			}
		}
		me._text_12.logicBlock_textcolor();
		me._text_12.onmouseover=function (e) {
			me.elementMouseOver['text_12']=true;
			me._text_12.logicBlock_textcolor();
		}
		me._text_12.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_12__text)
					return;
				}
			}
			me.elementMouseOver['text_12']=false;
			me._text_12.logicBlock_textcolor();
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
		}
		me._vr.appendChild(me._text_12);
		me.__35.appendChild(me._vr);
		me.divSkin.appendChild(me.__35);
		el=me.__8=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.onclick=function (e) {
				player.playSound("_background","1");
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 960))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__11.style.transition='transform 0s';
				if (me.__11.ggCurrentLogicStateScaling == 0) {
					me.__11.ggParameter.sx = 0.75;
					me.__11.ggParameter.sy = 0.75;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
				else {
					me.__11.ggParameter.sx = 1;
					me.__11.ggParameter.sy = 1;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
			}
		}
		me.__11.logicBlock_scaling();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__34.ggUpdateText();
		el.appendChild(els);
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_40=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_40.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip0=document.createElement('div');
		els=me._tip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,153,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip0.ggUpdateText();
		el.appendChild(els);
		me._tip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tip0.ggUpdatePosition=function (useTransition) {
		}
		me._container_40.appendChild(me._tip0);
		me.__34.appendChild(me._container_40);
		me.__33.appendChild(me.__34);
		me.__11.appendChild(me.__33);
		el=me.__17=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58";
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__110=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -100px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		els=me.__28__img=document.createElement('img');
		els.className='ggskin ggskin__28';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c8\uc6b0\uc2a4\uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		els=me.__32__img=document.createElement('img');
		els.className='ggskin ggskin__32';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAYB0lEQVR4nO2cf5RsVXXnP3ufc29VdffrBn0igoM/AGXUaAg+NIrOmGSZ8UeWo5mgmOhIMIREIRmTWSPjMJOsZCYaf42ZCBIQAWVEVDComF+jiRJ00BgjaFBUBEIEHrzH+1Vdde85e88f5/ajupkJrVa/V6zp71q1Vt3Vt/e593xrn73P/nHE3dnE7EAP9gNsYjU2CZkxbBIyY9gkZMawSciMYZOQGcMmITOGTUJmDJuEzBg2CZkxbBIyY9gkZMawSciMYZOQGcMmITOGTUJmDJuEzBjiNIUNv/tWeoPDCOO/oD3kEWBLLN/2aapDf4xevoFRfQqj3TeSh3/D4lE/AX4blSfUt2ByGHlujn23XEOSPhFHzWlzZP'+
			'ExL2R058fJSUm5ZV63M2y2Mq83PIv67iel/imHuD520BtdP6ybz+y6jxP/PPeee2sv/D3jfXdAPIJaDl31rOFzH0MtgztBFQv7WGYL++QYsJYl/S7R9gILBBqcljZA8B4xOYkGNUXUqV6XpzaHUyXkAOLVwJkq7VPU6Vf7PlhU3cEsoLbje7nHxcD7gJsP5oN+v3ioETIPvGnQ3nj2IGSyQhhXeMykYLjVaFDmq28+Kox//+zdcszrYfHFwGe/zzFOBrYABgTgDuBzwF3TfqG1eCgRMt9rb7tyyW9+PgouglAx6rfUyREHwYktECAFmOc7Wxpd/OSQI17E+kh51CHh61eIpJME75YnxbWiifkusD8CzgXu3KiXfKgY9fl++tofV/Kt51vVkNTJooi1VOYoECyQ1WjqBnIk5IgAPb9vYcG++RngiQ8yxqPn8+hjvbY5'+
			'KWYjpAAoKWZyMILpI+sczglmnwGetlEv+lAgZGtzy7s+jN31k0HGiAfUFXXD1ZHuJsMQDMRoKiNLDzEjM8+Yo65IeXxXymNWPmtwtNjgalM9MdPHGeAScHHwjDskDSQJuHOcOpcDR2/Ey846IYf1/B/fV+stLwjSYt3TiguC4B0bWRRXiBlCVnI0oCHlRVI4+v1NOPIXgPtWhNbXXTM5xmPd80fE4vEImAh5hQwygiE4JpkUMlkdVz1OZf6DwGHTfuFZJmRryPdeumBfebELkMEFjIyJYaKIUzwrUcQFNUFNqQzEK3J13KWtHnlq+e+C/OWrJsc4VsSupvIfNR1TWUv0BvUWcQPA1HFJqBsxO6AkEYx6m4RwAVOew1k16lvVdlw1r39zkiNEC4gasXUQoQ1GFqcyJZihksDBFVyMYIGdevx7a108neIpAVB//uMs9/'+
			'aP8eQQ0pVK+4SRR7wK0FZUngiewXu06qQ4Rh3qdkDIFW00mmofwYe0wjNaOGxpikZ+FjVkS/A7ProlffkkN3BxhAR5gCnkYIg4AUAMp6ZVIavsF7BLn30e0vslJsiYu/bKyTGeVLHnoyb+hJEOqBzmmlAMuAAeaYJhcR91FqrUwzSx3BuSw4iYwT0SrerPWfXIab78rBFyaI+bPtlLtzzX6Qy2CzkYuVoG76M5EDIEK8uUa0uwsqt3X2IYn/5u0eosYH/R8tKnL5sc42nR26ud+SeaRyprUeuRJVOlCrxPkgA4YhHzmqxg2iBkgkXqXFPlmrHK4h7Nh09zAmZpyTqi/dbbP6By73N6ZAQB71zP0KLuKBnBcUBMEA9YbFGgsUNoqye+03T+N7D7yVj8q0/R3v+a2wYNH6loj8p4GaNsasp3SeQA7tJ5b46JAYp4hSLg'+
			'gpMRj6hnaegfOc1JmBUNOXJ0+0cvGvhdz4tkRCgubOdGhayIQY4tWcFFcXFMHHUY+xKpPuYdwBuY0AyuvX5yjBODtx+prT4KgUBCHYyIa4u64Jpx2m7sMjWBlmgQLOJADg1NTJg4/ZypGCxPcyJmQUMOH975xffP2Q3Pw5WAlomWDFJcq6qJeGwZV8VyRyvGO2lC8zxtfczb1Pn3k0IH132JTLVy+awQ+LCrHZFMMKkIZgiKYJgkXAPmFcEcCBhl2aqyIQ5ZM6lzvcUqgmTUw3WHpp1XrX2hHwYHW0MesXzvVz7Wb774PKQHIrgkhFw8JnVQg5AQF+pWQTKmhuaIM2BP74Tfg9VkxM/dOHn5LzTYlUZ9xJgBQYZloyc1jhDMyBJoIqj1UeuX/5IERPBe2YPEFhcn5prBeI5AayMdvAkYTXNCDqaGHOp3/+kntblzm1'+
			'UVmEPIiClJDXXKkqLQBqOyck2KIE4OsKw//tuQfmtF4J7rdlDrncUDK3heG7i8lfowyVBZg+YFFMN1TFbIBJyAWiYwxAKYGrihNiAHI2lDS4USiHmMyIghixcp+S+nPSkHi5CtzW3nfSLIaNtAAU9YKIY6i6JZUCCHTFahbiImYMEIlkjMM4zPeBPOf1sRuP36u+nRmxzjp1Xu+5+NyMNAUQJVdpI2BA+oxbIMqRMs07MxrpAlFgNuggFNaBCEaEZUx6rMXqqv3RN/5D+sDDTNGMrBIOTIgX7nqp7v3qYUEsCKUe3WdC3ODIIQcnF7g0OwzJiH0VRPOBt484rA0XX3MqkWwAurPL4sRT0ke59gQvQx4+jFOEtDVoCKKpe/OZB9DsioOyEHPCRcnNDOU+cWdMS9vUPubPXhPwfs2IjJOdA25IiYvnpF3+/YVjEikMAd'+
			't841ElCMpIaLIVZIQTNCJtsSbTz6jUyQka+7ce0YL+r73R80DYeIR4Ip6o5pi4ihpmRNZE2IQZ0UwWk14iIEC4gJroapFW0RQBKjuHD3UB/568Dfb9QEHUhCjlz+3ls+NJc+/ayAFC9GMo5jKpiWyGoGsoT9bqeJoQZm89ZWx/0m8JYVgfVn/27tGC9ZyrdekVUXm+CAET3hmkkaqFNAKLEvRxF3kJZWIWtAGRPccFHGIZMlFOdB9jDqhXt2hsNfD3xoIyfpQBFyWDvc8fFDufkk9R7i4JrBhCQ1WQPRikPlClWaR6xGRAgGjQZy2PbvgLevCEzXfn3tGCcv6s2XSR7Muc0jMgavUBeigViPsVaYgLhilHFTSCCZmJUq9XBpaaoRrkrM0DMj5rBzhz/u5cCHN3qiDoQN2WJ3feoTtX7zeA1AbkCdkJU2KD6xQUMhWE'+
			'J0D7iDCU5ljZ505sDs3BWBy9f+49oHf/kR47suDhb6yAgkEawuS5UUV1l0H1nAiUU/vVgssR7qFYZioaFRBQ9UDmIZx/Ztj0/6aWi/eADmasMJefSAm64Sdj1dCCQEiS3BAAzEyxpvTopOJtJz6H7GZOnlRp75q8AfrQgc/fWutWO8asHuuACPvSw9kBHqjlsAaXEpwRYhEDPgvfIjIFGZgUVSNExbimmviObENKYNW7bvrI54IZkvbfA87cdGEnJMc8u5l8/Z9hMkOCah5DM8FONJ6nbFXiK67igJAHFjyCNHOR5zRjAuWREoX9q+9pFPnU973oNKnYIBjnqNmiBiXULLMI+E1CN4og1lJx5NUVeyJFxToSJvwRkTGdHGQ765xw8/BfjyBs7RA7BRNuSYfbdcc9HAt58gBBDpAoMlTuVSDKs6QEnFBoPKHAwaHtYu'+
			'h2e+FO4n43vXL60d49Q52/3eiNdmCp1tEC/fTYyMkgkoFK0Rx7QBvAQmybRVIokSLRLbRO2JoR76jb3y8JM5wGTAxhDyuOUdN//xIekbzxEiLj28i6iqOeKZ6Ak8kkVK9UgXbZUsmM21qffU04A/WRF433Vb1o5x2iJ3XtCEWhwleqZKkZhr1A2kxYRuXyMEb1BZJoVU3Gkck0QbW5KCeVX0LuylIVy/Kz7+XwEPcOEOBKa9ZC3Z9nd8qs5ffaKFiHhLlkywiiwgJKKVOJW6kZRunwAuGQvuQ556WoD3rwi8538/QDN+5eF2+7tHoRINiZhLiL5onxXj3O0Sg+eSTZRMpgYXQu6hpl3oRJAc6HsmMabp6ad31k95hba+fcrzsm5MVUOGu685jebGJ0qIJI/kCCIlFoSMKfmFUH69mqiSIFIIwiPLFR9jgoydn9+6do'+
			'gzF/Ot5xpRejlQW0bcSHGZJkCrhoUhDoQ8oDInZjCfI/scgVxcYBljGJr69Jo5Yjsmh/6VScLLgINGBkxZQ7Zw29uVYlyjGJ7pUkBd9k8MEKQL4jZBi6vrhvgAy3N/gH6dlOgC58+bFP9Ua3b+fqVjoCoFB95nWLdEj+ArGcaq/Mp0jCGUmIohMqINicpqQqqRYIzjiDaOyePqfHN+DXhAfdCBxlQJkbQLVbqc3v01U7Lqri5/5ALdei44rT/sPVUzuG7yzqXBTfu/L48Xn04e9sUjWaCJRt1m1HV/hUjBitKvpA2lG9PBKlDDXMlSxsXTm6E6e2qT8ENiqkuWyvp/YK5dGsgdMTBb/ALQrPy9uWnVoy3MyT+cE7wFBJNAq0KKLdFsrej/KwQhesA94NEwMQJ6LjAzZMCUNURZfzbTpOS0pewPAeuXHHpB2PvdydtD'+
			'wB5eOyWFi6I5MtaWfk6UGpTVevgAuCFqmPXBlxH3ZakPfUcEqIFm97qffSMxXS/LS5hiXRAQi+CKS8tkKhzAfVU8XZQgkotDEOhsEHX3v+t4NJGSi9dllBaRXkxsfVjae9+3K1WIi4xN2bJ8O9GdLH1E2/tL7Eoh4/7rOW5b33t+n5jqkpWJD/pDXcFK1aFri6sB2mRbZOVTD3qTH6EKdVJBPQAZ0zG97DgV6xtUSHip5RKj0Vwtj+46B1j4Qd93IzBVDWmriNq6OcE1YVpaCSp2viKzcDGdqtTH/tvJW3eP7vnGxX7Hn5xOCJhItwFsSmBSHnxEcaFOPZIW36vvmUp2/YyFeCm+9ZVMOTf+g2KqGpKYu2fdNxcftdRXmRDDrn+p9e5nar0brXezPLeqIDp7mH9ro3JnVishEqvI2qnZuod0qtTrCiQADwjhpSK7Lg'+
			'H66xa0gZgqIb3qxE9Y6q1LQ6wbWq3ss5FRrXHHLzSxZph/ir31VnZtWRXx/lar/d8mz1mdQV0xkRJeXw/ESsFdF8zM4rgoaoEgw5PdhhdSzPtBxXQJ6f3MGSKPvzoROg2YpOb+746UcpKJCkHUUdv9q8BrJ2Xu2rJqa/Kevm85C/PskikhS+12Gb5fV6T75hNjmgimRg5jUshlPFqCjEv+Q5Z/vvLRezjItWrTDi6OG044ZayHX5W8/PrUSwVJ6XMqe/ZMTbQylRYcE8E9UNuYuXzTucDLJoXuW/yLyct375nb8rqkOYsL0Ur1YhZIWjZ70RKlcSHsLydyj8QccXHUlZDrEvFVOpsUWbThqYO89w83YF7WjY0YeIg/5RXOP/9o1kRLRZJS9yTmiAuRMVlrsgomkEXIXUS4Ilf14MK3Ac+ZFJr/2d2Tl+fnvPS62tok'+
			'komWCR4RjzhCkj6ZHipj2pAwMXqWHvTBHUE1/bIy/O+s3zeZKjbql9BIeNzPN378hwgN7gFTBemq1Fdqdkp5ImXJMgiOmDOXxo9bSn/7v4BVrla1bdvk5flDFn4lqbVNiEQz+rklizMOSjSnMkEdkmqJm60DglGx78y+3/k2DgIpG7lejlUf/epkKUe54ZWOYh4QzYg40Ja8OdpdO+49RBtiDgSGFXLTecvhaAcuXRE6fOZR8LffWrm8cEy/rSSdL+o994h6IvgY8RrxGigVkSbWJcT+aWQpZUCVtG/wfG/jcXj2SlrXPGIoQTI51RAiE81ZU8FGr5WNy7GvyvLYD2TXsl5radhc6d1T867+qnTXZHVMImigJ/cM+n7reayxKXbC4ycvL0Hj6UnDOHd7jGjS1VoVTywYVHm97rGUhk+vqMK+NwK/NYV5WDcOhPGyZC'+
			'e+Bn3UJeZaglFZ7o8Hdy0FYo7HEjLP6itOGH27c65n374EeNEqqSc9dvLq0mzVadHz2EVI9HFJpNCUhh531Na3+qhnAoYTaKlx9f8C/MfpTMU6xj9A42STZ/+iyOPeK2JAySBmieQgmApiFZqBrnEGSjmji+A6XJjzz3+UcsLCfgx/YlU32WWNzb1aPA+zjkgxUVki5lIv3MZ1RoVdS+UikFgg5Iramv8K/OY0JuLBcCDdOwNeuyxPvmBUNcWsa4tZD7c+rqkkrtxKt1SOiNdkynKWQ9Nb8GsvZg0p9szjJi+vGMvCqSK2r5WqpHdtQJIIur4gJJRWhVb69G0vwWLXppDfCpz5Q87Bg+KA+tutPgEJjzkj+/Hna4KYBZEWD8vFy1p5JPGiJd4iojhVcWslDfrc8D7gFavkPuP4ycsrxrLlNTHbsA2CyjL93KBpsK5n'+
			'NG0hDKl8mVKilBhpwLUikN8J/PIUpuL/iYOxATLgjIan/I9GS4etmiCmXStb4SOLkrU01IRcdt8uEGXf3LzfciHw8lVCT/qRycuPJJk7ZaTszmpdN2EuJaySACGYEDxhmkoBhitJAiah/B7EcBFASj8JAkIIYn8I/OJGTc7B7KA6K4dj/4AcEfOuWkT2K4pLZz/odtpdVxUEenbPfGW3X8ga7ys/+7GTl1dnrV/lEveUUxlKxDdL7JK7pZDYCSXsIobi5QwsD13Y5X5C6OofBYuCvwd41UZMysFuafs1kce806QcHJOki0s5VJYJnjENZGHlJJNy5IVGemxf6NktlwH/ZlKgnHjs5OXVlvWVDrvxqgvR9EGMNiRaqdFUqlNMGurcEnxdxr+qAhewRkungYNNCMAbTB//lpUGkRRAy4allD9I6rpjS5rWu3YzsYrFUe'+
			'4v+NcuBX52UmB14qrW8U+MZPHn2jDe2URjkEcEh6QRU6PyTHRQFxqtSivEOqC+rzfHjouAbQ968/eBWSAE4I2Jp705kgimWJBygIw6wSF66fNQvJzoIH08NCBKNBvM5y9cDLxkUqD++Crv689anT9lLo93LoeIecWgLW3NpolWI40OSJrxdaagTYWW/tyyPOKcqc0Cs0MIwNmNnfi7SCqBdIulThe6MtTiiImOMV0u0d2QS4+5pIX59HcfYI2msO3Jk1d/2uohL1dvdoiOcIm4VxjOKBRDXltpZ3twCI30STi17H7+lN4fmC1CAM4Z87T/nN3KWm7F2zIf0NVQI2al6wrFpWiRIETZu9DntouAl04K3PucVS7xn7v0Xuai27MkcumLIFoiei4Rg3XFEx3cqSRT2Z6pFtfNGiEAvyPhCee03tkLSqW8UXfF0ytlQ8Ub'+
			'ElfwEuKr5b7FilsvBl48KXB+2ypD/VfJ+ydnkXtMEibQT6mrhg/rTghHWoIn1G2qcziLhAD8blMfdXai8uCGyDJmdSlyE5Cun0QsIlk791gxlEq3L/b92x9ijU1Z+LFVxvovsy/8bEbvKqd3dO7vOoolViDuuAgj5psHv3v9mFVCAN7s+ejfIGk5ZiPs3R/+EAclg7QgCe0af8xBPCLSzPXsqx9gjabEE1a97mdbFv91cPveKFYEH3aL1fpIMQYkhGF1+Psf/O71Y5YJAXjnKBz76wkseOkPdErwL6Ryotwoanf2oiNSzlw0esQ8WljyL30AeMGkwN7TV9UxfCFL75eitXtUIIl13bnSHW5TzjkJXSraseKFuRNlBKbf6DF8C1PErBMC8K6hPecsIAdL4EKKSqpLwinmyDgK3pGUpRTf5coR0tJSvuFy4IX/hPxPuo'+
			'TXt6J7a3OCdSd1uRI87G/uSQJODdaDciLq7l3x0a8FvjfNl30oEALw7tYWz2il16pk1LwcexGd4JmYpTSuiZO1lPiYl570nu9abGp/TVM7Kx99VrVW/qWgZxn93VkdtLi/Tgndm3hZJ72EV8QdD/E/AddO+0Vn4Xim9eLCkW1xFc4NjGujxrVBPKMWy7FJeOl1l3I2iRiMOGKc6vbPHijuARvA9xluLvFd6mlJ1MopEwSECqU0hzZeUbm+w53zl3yqygE8tAgBeG/rh6bM8nmS06C2BhdICqgRs1BlJ0cnWx9hy93xES+4ql2++sJ1yr8kuGyHcHrGjgmkpWihb8SE5B2ofV2Fqxy5XCbOc5wmHmqEAFyyXP3Uvnn7zHmttFtNjNoNSZEkgRQcJY2H1Y/+ddZnn76F+779fcq/BrhGXR/t6JIpUUrbyh7xcDvC+jNd'+
			'PwAeioQAfIT68d/Zy4tfMt53/XOrcPtCxcBHzUJO/SfdvLV3/WUxtV/J/kMdnv8P3eeAQnxdsZtNHCg8VLys/2+wSciMYZOQGcMmITOGTUJmDJuEzBg2CZkxbBIyY9gkZMawSciMYZOQGcMmITOGTUJmDJuEzBg2CZkxbBIyY9gkZMbwfwCiN/T7+HhoQwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc67c\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__32.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__32.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__32.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__32.ggCurrentLogicStatePosition == 0) {
					me.__32.style.left='-30px';
					me.__32.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__32.style.left='-40px';
					me.__32.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__32.logicBlock_position();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__32);
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin__29';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc624\ub978\ucabd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__29.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__29.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__29.style.transition='right 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__29.ggCurrentLogicStatePosition == 0) {
					me.__29.style.right='-30px';
					me.__29.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__29.style.right='-40px';
					me.__29.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__29.logicBlock_position();
		me.__29.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__29);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=150;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 343px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._timer_2);
		me.__110.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\uc774\ucf58 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \uc67c\ucabd\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uc2dc\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__27.ggUpdateText();
		el.appendChild(els);
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__110.appendChild(me.__27);
		me.__17.appendChild(me.__110);
		el=me.__23=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((33.5% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__img=document.createElement('img');
		els.className='ggskin ggskin__19';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub9c8\uc6b0\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		els=me.__26__img=document.createElement('img');
		els.className='ggskin ggskin__26';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc544\ub798";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:270,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__26.style.transition='left 300ms ease 0ms, bottom 300ms ease 0ms';
				if (me.__26.ggCurrentLogicStatePosition == 0) {
					me.__26.style.left = 'calc(50% - (50px / 2))';
					me.__26.style.bottom='10px';
				}
				else {
					me.__26.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__26.style.bottom='20px';
				}
			}
		}
		me.__26.logicBlock_position();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__img=document.createElement('img');
		els.className='ggskin ggskin__25';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc704";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__25.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__25.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__25.style.transition='left 300ms ease 0ms, top 300ms ease 0ms';
				if (me.__25.ggCurrentLogicStatePosition == 0) {
					me.__25.style.left = 'calc(50% - (50px / 2))';
					me.__25.style.top='-30px';
				}
				else {
					me.__25.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__25.style.top='-40px';
				}
			}
		}
		me.__25.logicBlock_position();
		me.__25.ggActivate=function () {
			player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me.__25);
		me.__23.appendChild(me.__19);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c8\uc6b0\uc2a4 \ud720\uc744 \uc0ac\uc6a9\ud558\uc2dc\uba74\n\ud655\ub300\/\ucd95\uc18c\ub97c \ud558\uc2e4 \uc218 \uc788\uc73c\uc2ed\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__23.appendChild(me.__24);
		me.__17.appendChild(me.__23);
		el=me.__31=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -100px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 33.5%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDx=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 20px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_9.style.transition='left 800ms ease 100ms, top 800ms ease 100ms';
				if (me._image_9.ggCurrentLogicStatePosition == 0) {
					me._image_9.style.left = 'calc(50% - (91px / 2) + (0px / 2) + 20px)';
					me._image_9.style.top='-10px';
				}
				else {
					me._image_9.style.left='calc(50% - ((91px + 0px) / 2) + 20px)';
					me._image_9.style.top='0px';
				}
			}
		}
		me._image_9.logicBlock_position();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_9);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggDx=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((91px + 0px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_10.style.transition='left 800ms ease 0ms, top 800ms ease 0ms';
				if (me._image_10.ggCurrentLogicStatePosition == 0) {
					me._image_10.style.left = 'calc(50% - (91px / 2) + (0px / 2) + 35px)';
					me._image_10.style.top='10px';
				}
				else {
					me._image_10.style.left='calc(50% - ((91px + 0px) / 2) + 35px)';
					me._image_10.style.top='0px';
				}
			}
		}
		me._image_10.logicBlock_position();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me._image_10);
		el=me.__18=document.createElement('div');
		els=me.__18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubc1c\ubc14\ub2e5 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 122%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\uc758 \ud654\uc0b4\ud45c\ub97c \ub20c\ub7ec\uc11c \uc6d0\ud558\ub294 \uacf5\uac04\uc73c\ub85c \uc774\ub3d9\ud574 \ubcf4\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18.ggUpdateText();
		el.appendChild(els);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__31.appendChild(me.__18);
		me.__17.appendChild(me.__31);
		me.__11.appendChild(me.__17);
		el=me.__14=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) + 30%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\ub0b4\uc6a9 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:23px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5 \ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uc81c\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me.__16);
		me.__14.appendChild(me.__15);
		me.__11.appendChild(me.__14);
		el=me.__12=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.onclick=function (e) {
			me.__8.style.transition='none';
			me.__8.style.visibility='hidden';
			me.__8.ggVisible=false;
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		els=me.__13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uad00\ub78c\ud558\uae30 \uc548\ub0b4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__13.ggUpdateText();
		el.appendChild(els);
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.onclick=function (e) {
			me.__8.style.transition='none';
			me.__8.style.visibility='hidden';
			me.__8.ggVisible=false;
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__13);
		me.__11.appendChild(me.__12);
		me.__9.appendChild(me.__11);
		me.__8.appendChild(me.__9);
		me.divSkin.appendChild(me.__8);
		el=me.__=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.onclick=function (e) {
				player.playSound("_background","1");
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		el.ggId="\uc0ac\uc6a9\uc548\ub0b4\ucee8\ud150\uce20-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((46.875% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60% + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 46.875%;';
		hs+='pointer-events:none;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__3.style.transition='transform 0s';
				if (me.__3.ggCurrentLogicStateScaling == 0) {
					me.__3.ggParameter.sx = 0.7;
					me.__3.ggParameter.sy = 0.7;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
				else if (me.__3.ggCurrentLogicStateScaling == 1) {
					me.__3.ggParameter.sx = 0.8;
					me.__3.ggParameter.sy = 0.8;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
				else {
					me.__3.ggParameter.sx = 1;
					me.__3.ggParameter.sy = 1;
					me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
					skin.updateSize(me.__3);
				}
			}
		}
		me.__3.logicBlock_scaling();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4\uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		els=me.__7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubaa8\ub378\ud558\uc6b0\uc2a4 \uad00\ub78c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7.ggUpdateText();
		el.appendChild(els);
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._tip=document.createElement('div');
		els=me._tip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TIP-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(254,153,0,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tip.ggUpdateText=function() {
			var params = [];
			var hs = player._("Tip", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tip.ggUpdateText();
		el.appendChild(els);
		me._tip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tip.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._tip);
		me.__7.appendChild(me._container_4);
		me.__6.appendChild(me.__7);
		me.__3.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\uc544\uc774\ucf581-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_110=document.createElement('div');
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_110.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_130=document.createElement('div');
		els=me._image_130__img=document.createElement('img');
		els.className='ggskin ggskin_image_130';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_130.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_130.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_130.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_130.style.transition='transform 0s';
				if (me._image_130.ggCurrentLogicStateScaling == 0) {
					me._image_130.ggParameter.sx = 1.05;
					me._image_130.ggParameter.sy = 1.05;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
				else {
					me._image_130.ggParameter.sx = 1;
					me._image_130.ggParameter.sy = 1;
					me._image_130.style.transform=parameterToTransform(me._image_130.ggParameter);
					skin.updateSize(me._image_130);
				}
			}
		}
		me._image_130.logicBlock_scaling();
		me._image_130.ggUpdatePosition=function (useTransition) {
		}
		me._image_110.appendChild(me._image_130);
		me.__10.appendChild(me._image_110);
		el=me._text_311=document.createElement('div');
		els=me._text_311__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 311";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_311.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\uc744 \ub204\ub978\ucc44 \uc6c0\uc9c1\uc774\uba74\n\uacf5\uac04\uc744 \ub458\ub7ec\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_311.ggUpdateText();
		el.appendChild(els);
		me._text_311.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_311.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._text_311);
		me.__5.appendChild(me.__10);
		el=me.__20=document.createElement('div');
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33.3% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__img=document.createElement('img');
		els.className='ggskin ggskin__22';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc544\uc774\ucf582\uc544\uc774\ucf58-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		els=me.__210__img=document.createElement('img');
		els.className='ggskin ggskin__210';
		hs='data:image/png;base64,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'+
			'IBTR4EXp1kxS2Tq0qkGWYerw3Se5HlMOC1wM7A7wmX9ScnWeGnWZvIuJgPuogFZi/dRSxR0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQ'+
			'RQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUMUNBFDFDQRQxQ0EUM+H8n4MyurBbp2gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc544\uc774\ucf582-\ubaa8\ubc14\uc77c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__210.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__210.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__210.style.transition='transform 0s';
				if (me.__210.ggCurrentLogicStateScaling == 0) {
					me.__210.ggParameter.sx = 1.05;
					me.__210.ggParameter.sy = 1.05;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
				else {
					me.__210.ggParameter.sx = 1;
					me.__210.ggParameter.sy = 1;
					me.__210.style.transform=parameterToTransform(me.__210.ggParameter);
					skin.updateSize(me.__210);
				}
			}
		}
		me.__210.logicBlock_scaling();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__210);
		me.__20.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		els=me.__21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\uc774\ucf58\ud0dd\uc2a4\ud2b82-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub450 \uc190\uac00\ub77d\uc73c\ub85c \ud654\uba74\uc744\n\ud655\ub300\/\ucd95\uc18c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21.ggUpdateText();
		el.appendChild(els);
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		me.__5.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.ggId="\uc544\uc774\ucf583-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 33.3%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAEsCAYAAADq/K67AAAACXBIWXMAAAsTAAALEwEAmpwYAAASf0lEQVR4nO3debBkZXnH8e+VAYZdiSSUiSMaCAaIGkQHd4uU1BBFQEDBtYhS4AIhYEDEZVgGiI4EEWRTMJEgJKKIGykKNdGKDAQRRBQElSCKRAREIOLgzR/vHYXr7ae7T/c5fU4/30/V1Oh9T7/3nRl+95zzrjOzs7NImm6PmXQDJNXPoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCR'+
			'h0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQpAYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXElg06Qa02dKlSyfdhEE8HdgT2BHYDngcsBhYDdwN3AZcC3wd+Cxwx2Sa2S6rVq2adBMaZdC764XACuD5PcoXAZvN/doe2A94GPgCcBxwZQNtVEv46N49i4BTgK/QO+S9rAXsClwBnAGsN9aWqbUMeresA1wCHATMjFDPDHAA8DXKHV9TzqB3y6nALmOsb3vgMmD9'+
			'MdapFjLo3bET8KYa6n06cHoN9apFDHp3rGC0x/XI6yi99ppSBr0bnkUcxPuBE+au24jyA+Gxc5/ZH7gI+HXw+Rlg5TgaqnZyeK0bdg3Kfgm8APjmvK/fC6ya+/URYAlwPvC8HvU8D9gW+PYoDVU7eUfvhp2CslP4/ZAv5H+AlwI3B9fsM0Sb1CEGvRu2Dco+M0Q99wInBeUvHKIudYhBb78NKO/bvXx3yPquCMq2HrIudYRBb7+oH+Ve4BdD1veDoGzxkHWpIwx6Pg8FZU6cmVIGPZ8HgrK1G2uFGmXQ28/waWQGvf2ix+no7lyVcyumkEHvtmi2WyTqwNugYp1qMYOe0+ykG6BmGXQpAYOe0/8FZRs11go1xqDn9KugzP8mppD/qFICBj2n3wRl6zbWCjXGoLdf9G/0YMU67wvKnO8+hQx6+0WdY9G8dem3DLrmq2'+
			'tfOk2QQc/p/qBs48ZaocYY9JxWT7oBapZBlxIw6DlFi2HcfGIKGfT2q+MgRDefSMagt986QVk0Hi79lkHvtmiGW1VuPDGFDHpObjyRjEHPyY0nkjHoUgIGvf3q2AjCjSeSMejtV8e/kRtPJOM/arc5lVUDMejdFi1OibjxRDIGPSc3nkjGoLffWpNugLrPoLffhg1/PzeemEIGPSc3nkjGoHdb1c44e+uTMejdZmA1EIOekxtPJOOSxParY1x7kI0n1gV2BZYB2wObUxbD/BhYBXwe+HfqWSqrMTPo7df0uPYi4BDgncBmC5Q/AdgBeCtwC3Ac8HHg4Ybapwp8dO+2Ou6m+wH/yMIhn+9PgXOBq4Cn1dAWjYlB77aqW0lFG09Uecr7S8rj/P7VmqO6GfSc6th4YjFwFuWRXy1j0DVuK/DO3joGvf3q2MMtWo8+DqcA'+
			'29T8PTQEg95+dYyMRDvMzHcbpYd9C2Br4HDgnj6fWQx8FOfNt4ZB77aqU2AHdQGwHfBh4FbgJuD9wFOBf+nz2R2BV9faOg3MoHdb1Smw/TrjZoHlwL4s3EP/U+C1wGF96lqOczVawaDnFA2vAVwMHD1APScBZwflW1J+IGjCDHr7Nb0eHeBfh7j2XcC9Qfnf47v6xBn09ot2mPllTd/zG0Nc+7+U9/ZetgGeP1pzNCqD3m1V55dHi1qgdLwN4xTgzqB82dzvzwSOBD4FXE/p0b8VuAY4HziAsnhGY2ZHSfvV8cM4WqZ6J8OPs98HnAoc06N8X2BPyvDcQpYAz5i77kPAhcC7gR8O2Q714B29/Zo+OeWuip+7LCh7Mr1DPt/alA68Gyjj9xoDg95tdZyPvnb/SxZ041hbAetRnhLOwp1wR2bQu63qMtXoKWGdinXeDT'+
			'xY8bOR/SnDeBqBQW+/qsGL1LUrzEM11Xsw8Kqa6k7BoLffejXUGU2dbetj8snUs8AnBYPebf1muPUS3dFHmaAzyNPHrcD7gJ2AJ1Lmze8FXNLnc5sDB47QttQMerdV3UCijk48iDeynAWOB7YCjgC+DPyI0ol3EbAb8Drix/+D8b/ZSvxLa786HlfvrqFOgJt7fP1h4A3AUcRj+OcBBwXlS4AXV2pZcga9/aJJTaPc0XvNfrupYp1QdpeZ36ZZ4M2UnWIHcTZwbVD+8kf873Upj/7bAY8dsP6UDHp1z6bM8b6KcoecBX4OXAecDryU+v9+q76jw8Kz2GYp2zdX9c+U2W03UvoBrqf0lkcr3BZqw3lB+S7AW4D/pPzA+g7wLcrf/Q2UmXXPHrbh025mdraOfQKnw9KlS+d/aQNKh9BbgKcMUMXNwHuAT4zQjM9Rfmgs'+
			'5GWUgxSq2o/yvrwlZSHL8ZQlqpP2DMr891F8mrJy7paFCletWjVi9d3iHX1wLwC+DaxksJBDCdD5wBcZbJ/0hUSnm456aMK5lEffRZS74MUj1jcu19N/4U0/e1B+WCzrd2EGBn0wewOXA0+q+PlllDtmlUMOorXcdS1TnbTVwNVjqGcj4DPAc8dQV6cZ9P6eCfwT1eeAr/EnwFcZvte46SOZ2mLUR/c11qG8Oj1uTPV1kkGPrQV8hPHNTtuY8hi/1xCficamo6GqrvveGOtaArxjjPV1jkGP7UHpGBqnxZTdVV/e78I50aP7qO+xbdZrTH6+b1Mm3vTzVmCT6s3pNoMee02f8h9SjiDamvJo/3hKT2+/d+e1KI+Tv9etv4CoM26afX+Aa44F/oJyx94Z+EJw7QbA7qM3q5sMeuw5QdlZlP3QTqBMMllN2bRh5dzX++'+
			'27tj5lE8ZNR2hf3fu6T9KtxBOCzqMMXc7O/bqMMgwZbWy5y9ha1zEGPfZHQdkR9F5/fRtlOO6iPvUvAc4hfjxfPyiruq97F/yK3ptZ/Jgy730hXwrqTHu0s0GPRUHq1xH2AGVW2If7XLcb8aqsqLe/7jPUJu1YFp5S+3Z6z9e/LqjvieNoVBcZ9NhPg7JnDPD5hymdQKf3ue59lLPNFhKtDx/mDLUuOh94JWWaK3O/v4p4puH19H7k35CkG6Ia9NgNQdmuQ9RzEGXCTS8bAmcGZb1M86P7Gp+k9HnMzP3+b32uv494dV7K8XSDHvtyUPZGBt/mac0yzZ8H1+w8d80wprkzbhTRqEcdO/a0nkGPXRqUPZ7yWDmo2ymLYSIn8egOwOhuPuo896xGneHYSQY9dg3xnOtDGO5csQuJh382pSyzXGMSxzFNg2j5bjSKMbUM'+
			'en9Rr/kzGX5s9iDgZ0H53vxuYkc0/XXae9xH4drreQx6f58A7gnK3zVkfXcSb5cEcBplumb0PjntPe4aI4Pe34PEw2PPAf5qyDovoGwo0csTKNsyRdNf7YjTwAz6YE4iDtawd3WAtxG/Zx9IvKQ1w9CaxsSgD+Zn9B7nhhLIYc8AvxVYHpSvRbx/271Dfj8lZtAHt5L4bLGjKtT5QeCbQXn06D7NS1Q1ZgZ9cD+h7LHWyzJghyHrXE15RK9yFprDa9U4vKa+TiQ+SeTdFepcBZxR4XMGvRonzKiv2yh7l/eyK9WWQr6T8sQwDHvdq6njaOfWM+jDO5HePd4zlM0QhnUvcOiQn7mnwvdRfUc7t5pBH94tlHHwXl5B2d5oWBcQb4U0X7RARnoUg17NCnp3oM1Q7V0dyqKXQd+9DboGZtCr+S7x4pQ9KQf/DetWBp98Y9'+
			'A1MINeXXRXfwzVZssBnAp8bYDr7qhYvxIy6NVdD3wqKN+bsiPKsNZsUtGvV/0HFepWUgZ9NAttXrjGY6g2Ww7KnuZHBuXfId7PTnoUgz6a6yiH+PWyD+Vwhyo+RJl2O98scHLFOpWUQR/dMcR39ao98FBOfdmNsr/5fZQhuB0ph0dIAzPoo7uGeG35PsCfjVD/JZQzzDcG9gWuHKGuLKK99lIy6ONxTFC2FtV74FWNe+3NY9DH47+Bzwfl+wJbNdQWxVLunmvQx+fooGwR1XvgpZEZ9PG5iviu/hrgKQ21RXoUgz5e0bu6d3VNjEEfryuBLwblrwee3FBbpN8y6OPnu7pax6CP3yriu/ob8F1dDTPo9ej3rj7KbDn1l/IM9IhBr8cVxHf11wJbNtSWjDYIypwwo7FaTu858ItwttykOGFGY3Ul8Rz41+BdXQ0x6PV6'+
			'L/Fd3Xd1NcKg1+sa4OKg/NWMtrJNGohBr99yeu8t5129HtGxS76jqxbXAZ8Myl9Ntb3l1Ft07JK97qrN0cQ7xkbj7hrOnwdlKe/mYNCbcgP9T3fZvqG2TLtXBGU3N9aKljHozTma+My24xpsyzTbIyiLlhFPNYPenJuA84PyXYDnNdSWafUk4iejaB/+qWbQmxXd1aGc/qLq9qA8HS3kDuDrDbalVQx6s74PfCwofxHwkmaaMpWix/bP0LtDdOoZ9OatID6j+1h635XU2x8Sv/p8uqmGtJFBb94PgXOC8qWU01g1nN3ovc3zPcCXmmtK+xj0yVgB/CooPxbXVA8remz/HPDrphrSRgZ9Mn4EnBmUPxX4m4baMg02AXYKylM/toNBn6QVwC+C8vcSz9nW7/w1sG6PsgeBSxtsSysZ9Mm5E/hAUP4E4OCG2tJ10Wy4S4'+
			'EHmmpIWxn0yfoAZXy3lyOBzRtqS1etBywLytM/toNBn7T7ibeH3hg4saG2dNVL6H166q+Jd/lJw6BP3kco55/38nrg0Iba0kVRb/tXgLsbakerGfTJWw28IyifoTzin45DbvMtAl4elKed2z6fQW+Hi+nfM3wgcDmwpPbWdMeLgE17lP2GMu1VGPQ2OYj+vcMvpOxDF/UyZxI9tl8B/KSphrSdQW+Pm4HDBrhuU+AiyqN85nH2GWD3oNze9kcw6O1yBvDOAa89kHIm+9Pqa06rLQX+OCj3/fwRDHr7nECZ/hrNhV9jG8qhjgeTb8Vb9Nh+LWVJsOYY9HY6lzJ3+/YBrl0MfBC4BPiDOhvVIouAVwblPrbPY9Db67+ApwOfHfD6lwHfAJ5VW4vaY2dgi6DcoM9j0NvtLso6679jsEf5JcB/APvU2agWiKa83kjZS1+P'+
			'YNDbbxY4mbJ7SjSDbo31KJtQvqXGNk3atkFZtPw3LYPeHVdTdjg9a4BrZ4BTGWy4ros2CcpWNdaKDjHo3fIAcAClx/muPtfOACspK+CmzX1B2Q6NtaJDDHo3XUzpqPvqANcez/QdDnFDUHYksFFTDekKg95dt1OG4M4Y4NqjKOPz0+LyoGxz4kVCKRn0blsNvJnBjl5+B9MT9s8RzzE4FBf/PIpBnw7HAYcPcN20hP0h4D1B+WKm4885NgZ9erwfeBtlOC4yLWH/GGWqay/7UubDC4M+bU6j9Mr3O3poGsL+G+LhwxngJPKtAViQQZ8+ZwNvIkfYL6fM8e/lucDeDbWl1Qz6dDqXwcPe9aG3w4lPYfkHyjt7agZ9ep0L7E//sB8FLK+9NfW5kXiIcQvcH9+gT7lzGCzs75371VVHE+/2ehSwWUNtaSWDPv0GDftySi'+
			'C66C7KwZS9bNynfOoZ9BzWhL3f0NtxwBH1N6cWp1H23evljcSr3qaaQc9j0LCfSDdXvT1EPGloEWWRT0oGPZePUqbM9gv7SuCQ2lszfp+mbLzRyzLiTSumlkHP50zKHvL9wn4S3eytPoy4P2IlCU+8Meg5nUa5Y0dhn6HsbLN7/c0Zq6uBjwfl21J22U3FoOd1Cv0Pb5yhmz3xRxGfenNIQ+1oDYOe28nA2/tcs1UD7Ri32ymLfHrp4p9pJAZdHyDeqOF7TTVkzN5P7zXrNzXZkDYw6IIyH/xdC3x9FljRcFvG5X7gb1m4H+KYhtsycQZda6wAXgt8h7JI5DrKqa0XT7BNo7oI2IvyZ3kA+Nbc/79wko2ahJnZ2X6jLJK6zju6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUEDLqUgEGXEjDoUgIGXUrAoEsJGHQp'+
			'AYMuJWDQpQQMupSAQZcSMOhSAgZdSsCgSwkYdCkBgy4lYNClBAy6lIBBlxIw6FICBl1KwKBLCRh0KQGDLiVg0KUE/h8C2Kj6mEKLvQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 96px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('vis_direction') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_13.style.transition='transform 0s';
				if (me._image_13.ggCurrentLogicStateScaling == 0) {
					me._image_13.ggParameter.sx = 1.05;
					me._image_13.ggParameter.sy = 1.05;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
				else {
					me._image_13.ggParameter.sx = 1;
					me._image_13.ggParameter.sy = 1;
					me._image_13.style.transform=parameterToTransform(me._image_13.ggParameter);
					skin.updateSize(me._image_13);
				}
			}
		}
		me._image_13.logicBlock_scaling();
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me._image_11.appendChild(me._image_13);
		me.__30.appendChild(me._image_11);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -70px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((142% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 142%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px; line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uba74\uc758 \ud654\uc0b4\ud45c\ub97c \ub20c\ub7ec\uc11c \n\uc6d0\ud558\ub294 \uacf5\uac04\uc73c\ub85c \uc774\ub3d9\ud574 \ubcf4\uc138\uc694", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._text_3);
		me.__5.appendChild(me.__30);
		me.__3.appendChild(me.__5);
		el=me.__4=document.createElement('div');
		el.ggId="\uad00\ub78c\ud558\uae30\ubc84\ud2bc-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -1%;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 620))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().height <= 800))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().height <= 1020))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, bottom 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.bottom='-40%';
				}
				else if (me.__4.ggCurrentLogicStatePosition == 1) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.bottom='-20%';
				}
				else if (me.__4.ggCurrentLogicStatePosition == 2) {
					me.__4.style.left = 'calc(50% - (100% / 2))';
					me.__4.style.bottom='-10%';
				}
				else {
					me.__4.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__4.style.bottom='-1%';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #00557f;';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uad00\ub78c\ud558\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._text_2);
		me.__3.appendChild(me.__4);
		me.__2.appendChild(me.__3);
		me.__.appendChild(me.__2);
		el=me.__0=document.createElement('div');
		el.ggId="\ubcf8 \ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -12%;';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__0.ggCurrentLogicStatePosition == 0) {
					me.__0.style.left = 'calc(50% - (90% / 2))';
					me.__0.style.bottom='-5%';
				}
				else {
					me.__0.style.left='calc(50% - ((90% + 0px) / 2) + 0px)';
					me.__0.style.bottom='-12%';
				}
			}
		}
		me.__0.logicBlock_position();
		me.__0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__0.ggCurrentLogicStateSize == 0) {
					me.__0.style.width='100%';
					me.__0.style.height='30%';
					me.__0.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__0);
				}
				else {
					me.__0.style.width='90%';
					me.__0.style.height='30%';
					me.__0.style.left = 'calc(50% - (90% / 2))';
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_size();
		me.__0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().height <= 1024))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, transform 0s';
				if (me.__0.ggCurrentLogicStateScaling == 0) {
					me.__0.ggParameter.sx = 0.7;
					me.__0.ggParameter.sy = 0.7;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
				else if (me.__0.ggCurrentLogicStateScaling == 1) {
					me.__0.ggParameter.sx = 0.8;
					me.__0.ggParameter.sy = 0.8;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
				else {
					me.__0.ggParameter.sx = 1;
					me.__0.ggParameter.sy = 1;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_scaling();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='min-width:150px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		els=me.__1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf8 \ub0b4\uc6a9 \uba58\ud2b8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((115% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115%;';
		hs+='pointer-events:auto;';
		hs+='@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Nanum+Gothic:wght@400;700&display=swap\"); font-family: \"Nanum Gothic\", sans-serif; word-break:keep-all; line-height:17px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b\n\ubcf8 \ucee8\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uc81c\uc791\ub41c \uac83\uc73c\ub85c \uc2e4\uc81c\uc640 \ucc28\uc774\uac00 \uc788\uc73c\uba70 \uac01\uc885 \uc804\uc2dc\ubb3c \ubc0f \uc18c\ud488, \uc5f0\ucd9c\uc6a9 \uc2dc\uacf5\ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub3d9\uc2dd \uac00\uad6c \ubc0f \uc18c\ud488\ub4e4\uc740 \uc81c\uacf5 \ud488\ubaa9\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uad6c\uccb4\uc801\uc778 \ud488\ubaa9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\uc640 \ucd5c\uc2e0\uc815\ubcf4\ub294 \uace0\uac1d\uc13c\ud130\uc5d0 \uc9c1\uc811 \ubb38\uc758\ud574 \uc8fc\uc138\uc694. \ubcf8 \ucee8\ud150\uce20\ub97c \ubb34\ub2e8\uc73c\ub85c \ucea1\uccd0\ud558\uac70\ub098 \ubc30\ud3ec\ud560 \uc2dc \uc800\uc791\uad8c\ubc95 \uc704\ubc18\uc73c\ub85c \ubc95\uc801\uc778 \uc81c\uc81c\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1.ggUpdateText();
		el.appendChild(els);
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__1);
		me.__0.appendChild(me._rectangle_5);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		me.__85.logicBlock_position();
		me.__85.logicBlock_visible();
		me._text_1.logicBlock_position();
		me._text_1.logicBlock_visible();
		me._text_1aa.logicBlock_position();
		me._text_1aa.logicBlock_visible();
		me._b.logicBlock_visible();
		me._text_1b.logicBlock_position();
		me._text_1b.logicBlock_visible();
		me._text_1bb.logicBlock_position();
		me._text_1bb.logicBlock_visible();
		me._mobile.logicBlock_position();
		me._mobile.logicBlock_visible();
		me.__117mobile.logicBlock_visible();
		me.__73.logicBlock_visible();
		me.__84.logicBlock_backgroundcolor();
		me.__84.logicBlock_textcolor();
		me.__83.logicBlock_backgroundcolor();
		me.__83.logicBlock_textcolor();
		me.__212.logicBlock_backgroundcolor();
		me.__212.logicBlock_textcolor();
		me.__112.logicBlock_backgroundcolor();
		me.__112.logicBlock_textcolor();
		me.__82.logicBlock_backgroundcolor();
		me.__82.logicBlock_textcolor();
		me.__81.logicBlock_backgroundcolor();
		me.__81.logicBlock_textcolor();
		me.__80.logicBlock_backgroundcolor();
		me.__80.logicBlock_textcolor();
		me.__79.logicBlock_backgroundcolor();
		me.__79.logicBlock_textcolor();
		me.__78.logicBlock_backgroundcolor();
		me.__78.logicBlock_textcolor();
		me.__310.logicBlock_backgroundcolor();
		me.__310.logicBlock_textcolor();
		me.__211.logicBlock_backgroundcolor();
		me.__211.logicBlock_textcolor();
		me.__77.logicBlock_backgroundcolor();
		me.__77.logicBlock_textcolor();
		me.__76.logicBlock_backgroundcolor();
		me.__76.logicBlock_textcolor();
		me.__111.logicBlock_backgroundcolor();
		me.__111.logicBlock_textcolor();
		me.__75.logicBlock_backgroundcolor();
		me.__75.logicBlock_textcolor();
		me.__11710.logicBlock_backgroundcolor();
		me.__11710.logicBlock_textcolor();
		me.__1179.logicBlock_backgroundcolor();
		me.__1179.logicBlock_textcolor();
		me.__21170.logicBlock_backgroundcolor();
		me.__21170.logicBlock_textcolor();
		me.__11170.logicBlock_backgroundcolor();
		me.__11170.logicBlock_textcolor();
		me.__1178.logicBlock_backgroundcolor();
		me.__1178.logicBlock_textcolor();
		me.__1177.logicBlock_backgroundcolor();
		me.__1177.logicBlock_textcolor();
		me.__1176.logicBlock_backgroundcolor();
		me.__1176.logicBlock_textcolor();
		me.__1175.logicBlock_backgroundcolor();
		me.__1175.logicBlock_textcolor();
		me.__1174.logicBlock_backgroundcolor();
		me.__1174.logicBlock_textcolor();
		me.__3117.logicBlock_backgroundcolor();
		me.__3117.logicBlock_textcolor();
		me.__2117.logicBlock_backgroundcolor();
		me.__2117.logicBlock_textcolor();
		me.__1173.logicBlock_backgroundcolor();
		me.__1173.logicBlock_textcolor();
		me.__1172.logicBlock_backgroundcolor();
		me.__1172.logicBlock_textcolor();
		me.__1117.logicBlock_backgroundcolor();
		me.__1117.logicBlock_textcolor();
		me.__1171.logicBlock_backgroundcolor();
		me.__1171.logicBlock_textcolor();
		me.__72.logicBlock_visible();
		me.__72.logicBlock_alpha();
		me._text_13.logicBlock_alpha();
		me.__71.logicBlock_visible();
		me._footer_bg.logicBlock_size();
		me._text_30.logicBlock_visible();
		me.__68.logicBlock_position();
		me.__68.logicBlock_size();
		me.__69.logicBlock_size();
		me._text_41.logicBlock_text();
		me._timer_1.logicBlock_visible();
		me._text_40.logicBlock_text();
		me._text_4.logicBlock_text();
		me._typea.ggMarkerInstances=[];
		me._typea.ggLastNodeId=null;
		me._typea.ggSimpleFloorplanMarkerArray=[];
		me._typea.ggFloorplanWidth=0;
		me._typea.ggFloorplanHeight=0;
		me._typea__mapdiv=document.createElement('div');
		me._typea__mapdiv.className='ggskin ggskin_map';
		me._typea.appendChild(me._typea__mapdiv);
		me._typea__img=document.createElement('img');
		me._typea__img.className='ggskin ggskin_map';
		me._typea__mapdiv.appendChild(me._typea__img);
		me._typea.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._typea.ggRadar.update=function() {
			var radar=me._typea.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._typea.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._typea.ggFilteredIds.length > 0 && me._typea.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._typea.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._typea.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._typea__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._typea__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._typea.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._typea__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._typea.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._typea.clientWidth;
			var mapHeight = me._typea.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._typea.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._typea__img.setAttribute('src', imageFilename);
		me._typea__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._typea.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._typea.ggFloorplanHeight / 2 + 'px;width:' + me._typea.ggFloorplanWidth + 'px;height:' + me._typea.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._typea__img.setAttribute('style','width:' + me._typea.ggFloorplanWidth + 'px;height:' + me._typea.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._typea.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._typea.clientWidth / me._typea.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._typea.ggFloorplanHeight = me._typea.clientHeight;
				me._typea.ggFloorplanWidth = me._typea.ggFloorplanHeight * floorplanAR;
			} else {
				me._typea.ggFloorplanWidth = me._typea.clientWidth;
				me._typea.ggFloorplanHeight = me._typea.ggFloorplanWidth / floorplanAR;
			}
		}
		me._typea.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._typea.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._typea.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._typea.ggPermeableMap = true;
			} else {
				me._typea.ggPermeableMap = false;
			}
			me._typea.ggCalculateFloorplanSize(mapDetails);
			me._typea.ggShowSimpleFloorplan(mapDetails);
			me._typea.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._typea.ggMapNotLoaded = false;
		}
		me._typea.ggClearMap=function() {
			me._typea.ggClearMapMarkers();
			me._typea.ggMapNotLoaded = true;
		}
		me._typea.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._typea.ggMapId = mapId;
			if (!me._typea.ggMapNotLoaded) {
				me._typea.ggClearMap();
				me._typea.ggInitMap();
				me._typea.ggInitMapMarkers();
			}
		}
		me._typea.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._typea.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._typea.ggMapId);
					var xPos = (me._typea.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._typea.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._typea.ggHMarkerAnchorOffset;
					yPos -= me._typea.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._typea.style['z-index'] + 2;
				}
			}
		}
		me._typea.ggInitMapMarkers=function() {
			me._typea.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._typea.ggFilteredIds = [];
			if (me._typea.ggFilter != '') {
				var filter = me._typea.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._typea.ggFilteredIds.push(nodeId);
					}
				}
				if (me._typea.ggFilteredIds.length > 0) ids = me._typea.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._typea.ggMapId);
				if (coords.length>=2) {
					me._typea.ggHMarkerAnchorOffset = 20;
					me._typea.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._typea.ggSimpleFloorplanMarkerArray[id] = marker;
					me._typea__mapdiv.appendChild(marker);
				}
			}
			me._typea.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._typea);
		}
		me._typea.ggClearMapMarkers=function() {
			for (id in me._typea.ggSimpleFloorplanMarkerArray) {
				if (me._typea.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._typea__mapdiv.removeChild(me._typea.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._typea.ggMarkerInstances=[];
			me._typea.ggSimpleFloorplanMarkerArray=[];
		}
		me._typea.logicBlock_visible();
		me._typeb.ggMarkerInstances=[];
		me._typeb.ggLastNodeId=null;
		me._typeb.ggSimpleFloorplanMarkerArray=[];
		me._typeb.ggFloorplanWidth=0;
		me._typeb.ggFloorplanHeight=0;
		me._typeb__mapdiv=document.createElement('div');
		me._typeb__mapdiv.className='ggskin ggskin_map';
		me._typeb.appendChild(me._typeb__mapdiv);
		me._typeb__img=document.createElement('img');
		me._typeb__img.className='ggskin ggskin_map';
		me._typeb__mapdiv.appendChild(me._typeb__img);
		me._typeb.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._typeb.ggRadar.update=function() {
			var radar=me._typeb.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._typeb.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._typeb.ggFilteredIds.length > 0 && me._typeb.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._typeb.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._typeb.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._typeb__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._typeb__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._typeb.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._typeb__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._typeb.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._typeb.clientWidth;
			var mapHeight = me._typeb.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._typeb.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._typeb__img.setAttribute('src', imageFilename);
		me._typeb__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._typeb.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._typeb.ggFloorplanHeight / 2 + 'px;width:' + me._typeb.ggFloorplanWidth + 'px;height:' + me._typeb.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._typeb__img.setAttribute('style','width:' + me._typeb.ggFloorplanWidth + 'px;height:' + me._typeb.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._typeb.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._typeb.clientWidth / me._typeb.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._typeb.ggFloorplanHeight = me._typeb.clientHeight;
				me._typeb.ggFloorplanWidth = me._typeb.ggFloorplanHeight * floorplanAR;
			} else {
				me._typeb.ggFloorplanWidth = me._typeb.clientWidth;
				me._typeb.ggFloorplanHeight = me._typeb.ggFloorplanWidth / floorplanAR;
			}
		}
		me._typeb.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._typeb.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._typeb.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._typeb.ggPermeableMap = true;
			} else {
				me._typeb.ggPermeableMap = false;
			}
			me._typeb.ggCalculateFloorplanSize(mapDetails);
			me._typeb.ggShowSimpleFloorplan(mapDetails);
			me._typeb.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._typeb.ggMapNotLoaded = false;
		}
		me._typeb.ggClearMap=function() {
			me._typeb.ggClearMapMarkers();
			me._typeb.ggMapNotLoaded = true;
		}
		me._typeb.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._typeb.ggMapId = mapId;
			if (!me._typeb.ggMapNotLoaded) {
				me._typeb.ggClearMap();
				me._typeb.ggInitMap();
				me._typeb.ggInitMapMarkers();
			}
		}
		me._typeb.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._typeb.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._typeb.ggMapId);
					var xPos = (me._typeb.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._typeb.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._typeb.ggHMarkerAnchorOffset;
					yPos -= me._typeb.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._typeb.style['z-index'] + 2;
				}
			}
		}
		me._typeb.ggInitMapMarkers=function() {
			me._typeb.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._typeb.ggFilteredIds = [];
			if (me._typeb.ggFilter != '') {
				var filter = me._typeb.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._typeb.ggFilteredIds.push(nodeId);
					}
				}
				if (me._typeb.ggFilteredIds.length > 0) ids = me._typeb.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._typeb.ggMapId);
				if (coords.length>=2) {
					me._typeb.ggHMarkerAnchorOffset = 20;
					me._typeb.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._typeb.ggSimpleFloorplanMarkerArray[id] = marker;
					me._typeb__mapdiv.appendChild(marker);
				}
			}
			me._typeb.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._typeb);
		}
		me._typeb.ggClearMapMarkers=function() {
			for (id in me._typeb.ggSimpleFloorplanMarkerArray) {
				if (me._typeb.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._typeb__mapdiv.removeChild(me._typeb.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._typeb.ggMarkerInstances=[];
			me._typeb.ggSimpleFloorplanMarkerArray=[];
		}
		me._typeb.logicBlock_visible();
		me._text_4popup.logicBlock_text();
		me._typeapopup.ggMarkerInstances=[];
		me._typeapopup.ggLastNodeId=null;
		me._typeapopup.ggSimpleFloorplanMarkerArray=[];
		me._typeapopup.ggFloorplanWidth=0;
		me._typeapopup.ggFloorplanHeight=0;
		me._typeapopup__mapdiv=document.createElement('div');
		me._typeapopup__mapdiv.className='ggskin ggskin_map';
		me._typeapopup.appendChild(me._typeapopup__mapdiv);
		me._typeapopup__img=document.createElement('img');
		me._typeapopup__img.className='ggskin ggskin_map';
		me._typeapopup__mapdiv.appendChild(me._typeapopup__img);
		me._typeapopup.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._typeapopup.ggRadar.update=function() {
			var radar=me._typeapopup.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._typeapopup.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._typeapopup.ggFilteredIds.length > 0 && me._typeapopup.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._typeapopup.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._typeapopup.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._typeapopup__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._typeapopup__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._typeapopup.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._typeapopup__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._typeapopup.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._typeapopup.clientWidth;
			var mapHeight = me._typeapopup.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._typeapopup.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._typeapopup__img.setAttribute('src', imageFilename);
		me._typeapopup__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._typeapopup.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._typeapopup.ggFloorplanHeight / 2 + 'px;width:' + me._typeapopup.ggFloorplanWidth + 'px;height:' + me._typeapopup.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._typeapopup__img.setAttribute('style','width:' + me._typeapopup.ggFloorplanWidth + 'px;height:' + me._typeapopup.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._typeapopup.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._typeapopup.clientWidth / me._typeapopup.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._typeapopup.ggFloorplanHeight = me._typeapopup.clientHeight;
				me._typeapopup.ggFloorplanWidth = me._typeapopup.ggFloorplanHeight * floorplanAR;
			} else {
				me._typeapopup.ggFloorplanWidth = me._typeapopup.clientWidth;
				me._typeapopup.ggFloorplanHeight = me._typeapopup.ggFloorplanWidth / floorplanAR;
			}
		}
		me._typeapopup.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._typeapopup.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._typeapopup.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._typeapopup.ggPermeableMap = true;
			} else {
				me._typeapopup.ggPermeableMap = false;
			}
			me._typeapopup.ggCalculateFloorplanSize(mapDetails);
			me._typeapopup.ggShowSimpleFloorplan(mapDetails);
			me._typeapopup.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._typeapopup.ggMapNotLoaded = false;
		}
		me._typeapopup.ggClearMap=function() {
			me._typeapopup.ggClearMapMarkers();
			me._typeapopup.ggMapNotLoaded = true;
		}
		me._typeapopup.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._typeapopup.ggMapId = mapId;
			if (!me._typeapopup.ggMapNotLoaded) {
				me._typeapopup.ggClearMap();
				me._typeapopup.ggInitMap();
				me._typeapopup.ggInitMapMarkers();
			}
		}
		me._typeapopup.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._typeapopup.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._typeapopup.ggMapId);
					var xPos = (me._typeapopup.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._typeapopup.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._typeapopup.ggHMarkerAnchorOffset;
					yPos -= me._typeapopup.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._typeapopup.style['z-index'] + 2;
				}
			}
		}
		me._typeapopup.ggInitMapMarkers=function() {
			me._typeapopup.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._typeapopup.ggFilteredIds = [];
			if (me._typeapopup.ggFilter != '') {
				var filter = me._typeapopup.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._typeapopup.ggFilteredIds.push(nodeId);
					}
				}
				if (me._typeapopup.ggFilteredIds.length > 0) ids = me._typeapopup.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._typeapopup.ggMapId);
				if (coords.length>=2) {
					me._typeapopup.ggHMarkerAnchorOffset = 20;
					me._typeapopup.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._typeapopup.ggSimpleFloorplanMarkerArray[id] = marker;
					me._typeapopup__mapdiv.appendChild(marker);
				}
			}
			me._typeapopup.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._typeapopup);
		}
		me._typeapopup.ggClearMapMarkers=function() {
			for (id in me._typeapopup.ggSimpleFloorplanMarkerArray) {
				if (me._typeapopup.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._typeapopup__mapdiv.removeChild(me._typeapopup.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._typeapopup.ggMarkerInstances=[];
			me._typeapopup.ggSimpleFloorplanMarkerArray=[];
		}
		me._typeapopup.logicBlock_visible();
		me._typebpopup.ggMarkerInstances=[];
		me._typebpopup.ggLastNodeId=null;
		me._typebpopup.ggSimpleFloorplanMarkerArray=[];
		me._typebpopup.ggFloorplanWidth=0;
		me._typebpopup.ggFloorplanHeight=0;
		me._typebpopup__mapdiv=document.createElement('div');
		me._typebpopup__mapdiv.className='ggskin ggskin_map';
		me._typebpopup.appendChild(me._typebpopup__mapdiv);
		me._typebpopup__img=document.createElement('img');
		me._typebpopup__img.className='ggskin ggskin_map';
		me._typebpopup__mapdiv.appendChild(me._typebpopup__img);
		me._typebpopup.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._typebpopup.ggRadar.update=function() {
			var radar=me._typebpopup.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._typebpopup.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._typebpopup.ggFilteredIds.length > 0 && me._typebpopup.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._typebpopup.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._typebpopup.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._typebpopup__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._typebpopup__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._typebpopup.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._typebpopup__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._typebpopup.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._typebpopup.clientWidth;
			var mapHeight = me._typebpopup.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._typebpopup.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._typebpopup__img.setAttribute('src', imageFilename);
		me._typebpopup__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._typebpopup.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._typebpopup.ggFloorplanHeight / 2 + 'px;width:' + me._typebpopup.ggFloorplanWidth + 'px;height:' + me._typebpopup.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._typebpopup__img.setAttribute('style','width:' + me._typebpopup.ggFloorplanWidth + 'px;height:' + me._typebpopup.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._typebpopup.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._typebpopup.clientWidth / me._typebpopup.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._typebpopup.ggFloorplanHeight = me._typebpopup.clientHeight;
				me._typebpopup.ggFloorplanWidth = me._typebpopup.ggFloorplanHeight * floorplanAR;
			} else {
				me._typebpopup.ggFloorplanWidth = me._typebpopup.clientWidth;
				me._typebpopup.ggFloorplanHeight = me._typebpopup.ggFloorplanWidth / floorplanAR;
			}
		}
		me._typebpopup.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._typebpopup.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._typebpopup.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._typebpopup.ggPermeableMap = true;
			} else {
				me._typebpopup.ggPermeableMap = false;
			}
			me._typebpopup.ggCalculateFloorplanSize(mapDetails);
			me._typebpopup.ggShowSimpleFloorplan(mapDetails);
			me._typebpopup.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._typebpopup.ggMapNotLoaded = false;
		}
		me._typebpopup.ggClearMap=function() {
			me._typebpopup.ggClearMapMarkers();
			me._typebpopup.ggMapNotLoaded = true;
		}
		me._typebpopup.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._typebpopup.ggMapId = mapId;
			if (!me._typebpopup.ggMapNotLoaded) {
				me._typebpopup.ggClearMap();
				me._typebpopup.ggInitMap();
				me._typebpopup.ggInitMapMarkers();
			}
		}
		me._typebpopup.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._typebpopup.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._typebpopup.ggMapId);
					var xPos = (me._typebpopup.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._typebpopup.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._typebpopup.ggHMarkerAnchorOffset;
					yPos -= me._typebpopup.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._typebpopup.style['z-index'] + 2;
				}
			}
		}
		me._typebpopup.ggInitMapMarkers=function() {
			me._typebpopup.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._typebpopup.ggFilteredIds = [];
			if (me._typebpopup.ggFilter != '') {
				var filter = me._typebpopup.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._typebpopup.ggFilteredIds.push(nodeId);
					}
				}
				if (me._typebpopup.ggFilteredIds.length > 0) ids = me._typebpopup.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._typebpopup.ggMapId);
				if (coords.length>=2) {
					me._typebpopup.ggHMarkerAnchorOffset = 20;
					me._typebpopup.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._typebpopup.ggSimpleFloorplanMarkerArray[id] = marker;
					me._typebpopup__mapdiv.appendChild(marker);
				}
			}
			me._typebpopup.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._typebpopup);
		}
		me._typebpopup.ggClearMapMarkers=function() {
			for (id in me._typebpopup.ggSimpleFloorplanMarkerArray) {
				if (me._typebpopup.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._typebpopup__mapdiv.removeChild(me._typebpopup.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._typebpopup.ggMarkerInstances=[];
			me._typebpopup.ggSimpleFloorplanMarkerArray=[];
		}
		me._typebpopup.logicBlock_visible();
		me.__41.logicBlock_position();
		me.__41.logicBlock_scaling();
		me.__41.logicBlock_visible();
		me.__39.logicBlock_position();
		me.__39.logicBlock_visible();
		me.__39.logicBlock_alpha();
		me._text_7.logicBlock_text();
		me.__99.ggMarkerInstances=[];
		me.__99.ggLastNodeId=null;
		me.__99.ggSimpleFloorplanMarkerArray=[];
		me.__99.ggFloorplanWidth=0;
		me.__99.ggFloorplanHeight=0;
		me.__99__mapdiv=document.createElement('div');
		me.__99__mapdiv.className='ggskin ggskin_map';
		me.__99.appendChild(me.__99__mapdiv);
		me.__99__img=document.createElement('img');
		me.__99__img.className='ggskin ggskin_map';
		me.__99__mapdiv.appendChild(me.__99__img);
		me.__99.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me.__99.ggRadar.update=function() {
			var radar=me.__99.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me.__99.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me.__99.ggFilteredIds.length > 0 && me.__99.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me.__99.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me.__99.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me.__99__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me.__99__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me.__99.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me.__99__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me.__99.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me.__99.clientWidth;
			var mapHeight = me.__99.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me.__99.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me.__99__img.setAttribute('src', imageFilename);
		me.__99__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me.__99.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me.__99.ggFloorplanHeight / 2 + 'px;width:' + me.__99.ggFloorplanWidth + 'px;height:' + me.__99.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me.__99__img.setAttribute('style','width:' + me.__99.ggFloorplanWidth + 'px;height:' + me.__99.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me.__99.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me.__99.clientWidth / me.__99.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me.__99.ggFloorplanHeight = me.__99.clientHeight;
				me.__99.ggFloorplanWidth = me.__99.ggFloorplanHeight * floorplanAR;
			} else {
				me.__99.ggFloorplanWidth = me.__99.clientWidth;
				me.__99.ggFloorplanHeight = me.__99.ggFloorplanWidth / floorplanAR;
			}
		}
		me.__99.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me.__99.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me.__99.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me.__99.ggPermeableMap = true;
			} else {
				me.__99.ggPermeableMap = false;
			}
			me.__99.ggCalculateFloorplanSize(mapDetails);
			me.__99.ggShowSimpleFloorplan(mapDetails);
			me.__99.ggFloorplanNorth = mapDetails['floorplannorth'];
			me.__99.ggMapNotLoaded = false;
		}
		me.__99.ggClearMap=function() {
			me.__99.ggClearMapMarkers();
			me.__99.ggMapNotLoaded = true;
		}
		me.__99.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me.__99.ggMapId = mapId;
			if (!me.__99.ggMapNotLoaded) {
				me.__99.ggClearMap();
				me.__99.ggInitMap();
				me.__99.ggInitMapMarkers();
			}
		}
		me.__99.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me.__99.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me.__99.ggMapId);
					var xPos = (me.__99.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me.__99.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me.__99.ggHMarkerAnchorOffset;
					yPos -= me.__99.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me.__99.style['z-index'] + 2;
				}
			}
		}
		me.__99.ggInitMapMarkers=function() {
			me.__99.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me.__99.ggFilteredIds = [];
			if (me.__99.ggFilter != '') {
				var filter = me.__99.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me.__99.ggFilteredIds.push(nodeId);
					}
				}
				if (me.__99.ggFilteredIds.length > 0) ids = me.__99.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me.__99.ggMapId);
				if (coords.length>=2) {
					me.__99.ggHMarkerAnchorOffset = 20;
					me.__99.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me.__99.ggSimpleFloorplanMarkerArray[id] = marker;
					me.__99__mapdiv.appendChild(marker);
				}
			}
			me.__99.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me.__99);
		}
		me.__99.ggClearMapMarkers=function() {
			for (id in me.__99.ggSimpleFloorplanMarkerArray) {
				if (me.__99.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me.__99__mapdiv.removeChild(me.__99.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me.__99.ggMarkerInstances=[];
			me.__99.ggSimpleFloorplanMarkerArray=[];
		}
		me.__99.logicBlock_visible();
		me.__117.ggMarkerInstances=[];
		me.__117.ggLastNodeId=null;
		me.__117.ggSimpleFloorplanMarkerArray=[];
		me.__117.ggFloorplanWidth=0;
		me.__117.ggFloorplanHeight=0;
		me.__117__mapdiv=document.createElement('div');
		me.__117__mapdiv.className='ggskin ggskin_map';
		me.__117.appendChild(me.__117__mapdiv);
		me.__117__img=document.createElement('img');
		me.__117__img.className='ggskin ggskin_map';
		me.__117__mapdiv.appendChild(me.__117__img);
		me.__117.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me.__117.ggRadar.update=function() {
			var radar=me.__117.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me.__117.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me.__117.ggFilteredIds.length > 0 && me.__117.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me.__117.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me.__117.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me.__117__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me.__117__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me.__117.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me.__117__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me.__117.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me.__117.clientWidth;
			var mapHeight = me.__117.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me.__117.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me.__117__img.setAttribute('src', imageFilename);
		me.__117__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me.__117.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me.__117.ggFloorplanHeight / 2 + 'px;width:' + me.__117.ggFloorplanWidth + 'px;height:' + me.__117.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me.__117__img.setAttribute('style','width:' + me.__117.ggFloorplanWidth + 'px;height:' + me.__117.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me.__117.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me.__117.clientWidth / me.__117.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me.__117.ggFloorplanHeight = me.__117.clientHeight;
				me.__117.ggFloorplanWidth = me.__117.ggFloorplanHeight * floorplanAR;
			} else {
				me.__117.ggFloorplanWidth = me.__117.clientWidth;
				me.__117.ggFloorplanHeight = me.__117.ggFloorplanWidth / floorplanAR;
			}
		}
		me.__117.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me.__117.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me.__117.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me.__117.ggPermeableMap = true;
			} else {
				me.__117.ggPermeableMap = false;
			}
			me.__117.ggCalculateFloorplanSize(mapDetails);
			me.__117.ggShowSimpleFloorplan(mapDetails);
			me.__117.ggFloorplanNorth = mapDetails['floorplannorth'];
			me.__117.ggMapNotLoaded = false;
		}
		me.__117.ggClearMap=function() {
			me.__117.ggClearMapMarkers();
			me.__117.ggMapNotLoaded = true;
		}
		me.__117.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me.__117.ggMapId = mapId;
			if (!me.__117.ggMapNotLoaded) {
				me.__117.ggClearMap();
				me.__117.ggInitMap();
				me.__117.ggInitMapMarkers();
			}
		}
		me.__117.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me.__117.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me.__117.ggMapId);
					var xPos = (me.__117.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me.__117.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me.__117.ggHMarkerAnchorOffset;
					yPos -= me.__117.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me.__117.style['z-index'] + 2;
				}
			}
		}
		me.__117.ggInitMapMarkers=function() {
			me.__117.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me.__117.ggFilteredIds = [];
			if (me.__117.ggFilter != '') {
				var filter = me.__117.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me.__117.ggFilteredIds.push(nodeId);
					}
				}
				if (me.__117.ggFilteredIds.length > 0) ids = me.__117.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me.__117.ggMapId);
				if (coords.length>=2) {
					me.__117.ggHMarkerAnchorOffset = 20;
					me.__117.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me.__117.ggSimpleFloorplanMarkerArray[id] = marker;
					me.__117__mapdiv.appendChild(marker);
				}
			}
			me.__117.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me.__117);
		}
		me.__117.ggClearMapMarkers=function() {
			for (id in me.__117.ggSimpleFloorplanMarkerArray) {
				if (me.__117.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me.__117__mapdiv.removeChild(me.__117.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me.__117.ggMarkerInstances=[];
			me.__117.ggSimpleFloorplanMarkerArray=[];
		}
		me.__117.logicBlock_visible();
		me.__38.logicBlock_scaling();
		me._rectangle_6.logicBlock_backgroundcolor();
		me._svg_7.logicBlock_visible();
		me._svg_8.logicBlock_visible();
		me.__35.logicBlock_position();
		me.__35.logicBlock_visible();
		me.__35.logicBlock_alpha();
		me.__37.logicBlock_backgroundcolor();
		me._text_10.logicBlock_textcolor();
		me.__36.logicBlock_backgroundcolor();
		me._text_11.logicBlock_text();
		me._text_11.logicBlock_textcolor();
		me._vr.logicBlock_backgroundcolor();
		me._text_12.logicBlock_textcolor();
		me.__11.logicBlock_scaling();
		me.__32.logicBlock_position();
		me.__29.logicBlock_position();
		me._timer_2.logicBlock_visible();
		me.__26.logicBlock_position();
		me.__25.logicBlock_position();
		me._image_9.logicBlock_position();
		me._image_10.logicBlock_position();
		me.__3.logicBlock_scaling();
		me._image_130.logicBlock_scaling();
		me.__210.logicBlock_scaling();
		me._image_13.logicBlock_scaling();
		me.__4.logicBlock_position();
		me.__0.logicBlock_position();
		me.__0.logicBlock_size();
		me.__0.logicBlock_scaling();
		player.addListener('activehotspotchanged', function(event) {
			me.__84.logicBlock_backgroundcolor();
			me.__84.logicBlock_textcolor();
			me.__83.logicBlock_backgroundcolor();
			me.__83.logicBlock_textcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__212.logicBlock_textcolor();
			me.__112.logicBlock_backgroundcolor();
			me.__112.logicBlock_textcolor();
			me.__82.logicBlock_backgroundcolor();
			me.__82.logicBlock_textcolor();
			me.__81.logicBlock_backgroundcolor();
			me.__81.logicBlock_textcolor();
			me.__80.logicBlock_backgroundcolor();
			me.__80.logicBlock_textcolor();
			me.__79.logicBlock_backgroundcolor();
			me.__79.logicBlock_textcolor();
			me.__78.logicBlock_backgroundcolor();
			me.__78.logicBlock_textcolor();
			me.__310.logicBlock_backgroundcolor();
			me.__310.logicBlock_textcolor();
			me.__211.logicBlock_backgroundcolor();
			me.__211.logicBlock_textcolor();
			me.__77.logicBlock_backgroundcolor();
			me.__77.logicBlock_textcolor();
			me.__76.logicBlock_backgroundcolor();
			me.__76.logicBlock_textcolor();
			me.__111.logicBlock_backgroundcolor();
			me.__111.logicBlock_textcolor();
			me.__75.logicBlock_backgroundcolor();
			me.__75.logicBlock_textcolor();
			me.__11710.logicBlock_backgroundcolor();
			me.__11710.logicBlock_textcolor();
			me.__1179.logicBlock_backgroundcolor();
			me.__1179.logicBlock_textcolor();
			me.__21170.logicBlock_backgroundcolor();
			me.__21170.logicBlock_textcolor();
			me.__11170.logicBlock_backgroundcolor();
			me.__11170.logicBlock_textcolor();
			me.__1178.logicBlock_backgroundcolor();
			me.__1178.logicBlock_textcolor();
			me.__1177.logicBlock_backgroundcolor();
			me.__1177.logicBlock_textcolor();
			me.__1176.logicBlock_backgroundcolor();
			me.__1176.logicBlock_textcolor();
			me.__1175.logicBlock_backgroundcolor();
			me.__1175.logicBlock_textcolor();
			me.__1174.logicBlock_backgroundcolor();
			me.__1174.logicBlock_textcolor();
			me.__3117.logicBlock_backgroundcolor();
			me.__3117.logicBlock_textcolor();
			me.__2117.logicBlock_backgroundcolor();
			me.__2117.logicBlock_textcolor();
			me.__1173.logicBlock_backgroundcolor();
			me.__1173.logicBlock_textcolor();
			me.__1172.logicBlock_backgroundcolor();
			me.__1172.logicBlock_textcolor();
			me.__1117.logicBlock_backgroundcolor();
			me.__1117.logicBlock_textcolor();
			me.__1171.logicBlock_backgroundcolor();
			me.__1171.logicBlock_textcolor();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__85.logicBlock_position();
			me.__85.logicBlock_visible();
			me._text_1.logicBlock_visible();
			me._text_1aa.logicBlock_visible();
			me._b.logicBlock_visible();
			me._text_1b.logicBlock_visible();
			me._text_1bb.logicBlock_visible();
			me._mobile.logicBlock_position();
			me._mobile.logicBlock_visible();
			me._cloner_1.ggUpdateConditionNodeChange();
			me.__117mobile.logicBlock_visible();
			me._cloner_2.ggUpdateConditionNodeChange();
			me.__84.logicBlock_backgroundcolor();
			me.__84.logicBlock_textcolor();
			me.__83.logicBlock_backgroundcolor();
			me.__83.logicBlock_textcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__212.logicBlock_textcolor();
			me.__112.logicBlock_backgroundcolor();
			me.__112.logicBlock_textcolor();
			me.__82.logicBlock_backgroundcolor();
			me.__82.logicBlock_textcolor();
			me.__81.logicBlock_backgroundcolor();
			me.__81.logicBlock_textcolor();
			me.__80.logicBlock_backgroundcolor();
			me.__80.logicBlock_textcolor();
			me.__79.logicBlock_backgroundcolor();
			me.__79.logicBlock_textcolor();
			me.__78.logicBlock_backgroundcolor();
			me.__78.logicBlock_textcolor();
			me.__310.logicBlock_backgroundcolor();
			me.__310.logicBlock_textcolor();
			me.__211.logicBlock_backgroundcolor();
			me.__211.logicBlock_textcolor();
			me.__77.logicBlock_backgroundcolor();
			me.__77.logicBlock_textcolor();
			me.__76.logicBlock_backgroundcolor();
			me.__76.logicBlock_textcolor();
			me.__111.logicBlock_backgroundcolor();
			me.__111.logicBlock_textcolor();
			me.__75.logicBlock_backgroundcolor();
			me.__75.logicBlock_textcolor();
			me.__11710.logicBlock_backgroundcolor();
			me.__11710.logicBlock_textcolor();
			me.__1179.logicBlock_backgroundcolor();
			me.__1179.logicBlock_textcolor();
			me.__21170.logicBlock_backgroundcolor();
			me.__21170.logicBlock_textcolor();
			me.__11170.logicBlock_backgroundcolor();
			me.__11170.logicBlock_textcolor();
			me.__1178.logicBlock_backgroundcolor();
			me.__1178.logicBlock_textcolor();
			me.__1177.logicBlock_backgroundcolor();
			me.__1177.logicBlock_textcolor();
			me.__1176.logicBlock_backgroundcolor();
			me.__1176.logicBlock_textcolor();
			me.__1175.logicBlock_backgroundcolor();
			me.__1175.logicBlock_textcolor();
			me.__1174.logicBlock_backgroundcolor();
			me.__1174.logicBlock_textcolor();
			me.__3117.logicBlock_backgroundcolor();
			me.__3117.logicBlock_textcolor();
			me.__2117.logicBlock_backgroundcolor();
			me.__2117.logicBlock_textcolor();
			me.__1173.logicBlock_backgroundcolor();
			me.__1173.logicBlock_textcolor();
			me.__1172.logicBlock_backgroundcolor();
			me.__1172.logicBlock_textcolor();
			me.__1117.logicBlock_backgroundcolor();
			me.__1117.logicBlock_textcolor();
			me.__1171.logicBlock_backgroundcolor();
			me.__1171.logicBlock_textcolor();
			me.__72.logicBlock_visible();
			me.__72.logicBlock_alpha();
			me.__71.logicBlock_visible();
			me._text_41.logicBlock_text();
			me._timer_1.logicBlock_visible();
			me._text_40.logicBlock_text();
			me._text_4.logicBlock_text();
			me._typea.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._typea.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typea.ggCalculateFloorplanSize(mapDetails);
				me._typea.ggShowSimpleFloorplan(mapDetails);
				me._typea.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typea.ggRadar) me._typea.ggRadar.update();
			if (me._typea.ggLastNodeId) {
				var lastActiveMarker = me._typea.ggSimpleFloorplanMarkerArray[me._typea.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._typea.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._typea.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._typea.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._typea.ggChangeMap(mapId);
					}
				}
			}
			me._typea.ggLastNodeId = id;
			me._typea.ggRadar.update();
			me._typeb.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._typeb.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typeb.ggCalculateFloorplanSize(mapDetails);
				me._typeb.ggShowSimpleFloorplan(mapDetails);
				me._typeb.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typeb.ggRadar) me._typeb.ggRadar.update();
			if (me._typeb.ggLastNodeId) {
				var lastActiveMarker = me._typeb.ggSimpleFloorplanMarkerArray[me._typeb.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._typeb.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._typeb.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._typeb.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._typeb.ggChangeMap(mapId);
					}
				}
			}
			me._typeb.ggLastNodeId = id;
			me._typeb.ggRadar.update();
			me._text_4popup.logicBlock_text();
			me._typeapopup.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._typeapopup.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typeapopup.ggCalculateFloorplanSize(mapDetails);
				me._typeapopup.ggShowSimpleFloorplan(mapDetails);
				me._typeapopup.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typeapopup.ggRadar) me._typeapopup.ggRadar.update();
			if (me._typeapopup.ggLastNodeId) {
				var lastActiveMarker = me._typeapopup.ggSimpleFloorplanMarkerArray[me._typeapopup.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._typeapopup.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._typeapopup.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._typeapopup.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._typeapopup.ggChangeMap(mapId);
					}
				}
			}
			me._typeapopup.ggLastNodeId = id;
			me._typeapopup.ggRadar.update();
			me._typebpopup.logicBlock_visible();
			var mapDetails = player.getMapDetails(me._typebpopup.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._typebpopup.ggCalculateFloorplanSize(mapDetails);
				me._typebpopup.ggShowSimpleFloorplan(mapDetails);
				me._typebpopup.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._typebpopup.ggRadar) me._typebpopup.ggRadar.update();
			if (me._typebpopup.ggLastNodeId) {
				var lastActiveMarker = me._typebpopup.ggSimpleFloorplanMarkerArray[me._typebpopup.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._typebpopup.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._typebpopup.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._typebpopup.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._typebpopup.ggChangeMap(mapId);
					}
				}
			}
			me._typebpopup.ggLastNodeId = id;
			me._typebpopup.ggRadar.update();
			me.__41.logicBlock_visible();
			me.__39.logicBlock_position();
			me.__39.logicBlock_visible();
			me.__39.logicBlock_alpha();
			me._text_7.logicBlock_text();
			me.__99.logicBlock_visible();
			var mapDetails = player.getMapDetails(me.__99.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me.__99.ggCalculateFloorplanSize(mapDetails);
				me.__99.ggShowSimpleFloorplan(mapDetails);
				me.__99.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me.__99.ggRadar) me.__99.ggRadar.update();
			if (me.__99.ggLastNodeId) {
				var lastActiveMarker = me.__99.ggSimpleFloorplanMarkerArray[me.__99.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me.__99.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me.__99.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me.__99.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me.__99.ggChangeMap(mapId);
					}
				}
			}
			me.__99.ggLastNodeId = id;
			me.__99.ggRadar.update();
			me.__117.logicBlock_visible();
			var mapDetails = player.getMapDetails(me.__117.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me.__117.ggCalculateFloorplanSize(mapDetails);
				me.__117.ggShowSimpleFloorplan(mapDetails);
				me.__117.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me.__117.ggRadar) me.__117.ggRadar.update();
			if (me.__117.ggLastNodeId) {
				var lastActiveMarker = me.__117.ggSimpleFloorplanMarkerArray[me.__117.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me.__117.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me.__117.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me.__117.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me.__117.ggChangeMap(mapId);
					}
				}
			}
			me.__117.ggLastNodeId = id;
			me.__117.ggRadar.update();
			me.__38.logicBlock_scaling();
			me._rectangle_6.logicBlock_backgroundcolor();
			me._svg_7.logicBlock_visible();
			me._svg_8.logicBlock_visible();
			me.__35.logicBlock_position();
			me.__35.logicBlock_visible();
			me.__35.logicBlock_alpha();
			me.__32.logicBlock_position();
			me.__29.logicBlock_position();
			if (me.__29.ggLastIsActive!=me.__29.ggIsActive()) {
				me.__29.ggLastIsActive=me.__29.ggIsActive();
				if (me.__29.ggIsActive()) {
					if (me.__29.ggActivate) me.__29.ggActivate();
				} else {
					if (me.__29.ggDeactivate) me.__29.ggDeactivate();
				}
			}
			me._timer_2.logicBlock_visible();
			me.__26.logicBlock_position();
			me.__25.logicBlock_position();
			if (me.__25.ggLastIsActive!=me.__25.ggIsActive()) {
				me.__25.ggLastIsActive=me.__25.ggIsActive();
				if (me.__25.ggIsActive()) {
					if (me.__25.ggActivate) me.__25.ggActivate();
				} else {
					if (me.__25.ggDeactivate) me.__25.ggDeactivate();
				}
			}
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__85.logicBlock_position();
			me.__85.logicBlock_visible();
			me._text_1.logicBlock_visible();
			me._b.logicBlock_visible();
			me._text_1b.logicBlock_visible();
			me._mobile.logicBlock_position();
			me._mobile.logicBlock_visible();
			me.__117mobile.logicBlock_visible();
			me.__84.logicBlock_backgroundcolor();
			me.__84.logicBlock_textcolor();
			me.__83.logicBlock_backgroundcolor();
			me.__83.logicBlock_textcolor();
			me.__212.logicBlock_backgroundcolor();
			me.__212.logicBlock_textcolor();
			me.__112.logicBlock_backgroundcolor();
			me.__112.logicBlock_textcolor();
			me.__82.logicBlock_backgroundcolor();
			me.__82.logicBlock_textcolor();
			me.__81.logicBlock_backgroundcolor();
			me.__81.logicBlock_textcolor();
			me.__80.logicBlock_backgroundcolor();
			me.__80.logicBlock_textcolor();
			me.__79.logicBlock_backgroundcolor();
			me.__79.logicBlock_textcolor();
			me.__78.logicBlock_backgroundcolor();
			me.__78.logicBlock_textcolor();
			me.__310.logicBlock_backgroundcolor();
			me.__310.logicBlock_textcolor();
			me.__211.logicBlock_backgroundcolor();
			me.__211.logicBlock_textcolor();
			me.__77.logicBlock_backgroundcolor();
			me.__77.logicBlock_textcolor();
			me.__76.logicBlock_backgroundcolor();
			me.__76.logicBlock_textcolor();
			me.__111.logicBlock_backgroundcolor();
			me.__111.logicBlock_textcolor();
			me.__75.logicBlock_backgroundcolor();
			me.__75.logicBlock_textcolor();
			me.__11710.logicBlock_backgroundcolor();
			me.__11710.logicBlock_textcolor();
			me.__1179.logicBlock_backgroundcolor();
			me.__1179.logicBlock_textcolor();
			me.__21170.logicBlock_backgroundcolor();
			me.__21170.logicBlock_textcolor();
			me.__11170.logicBlock_backgroundcolor();
			me.__11170.logicBlock_textcolor();
			me.__1178.logicBlock_backgroundcolor();
			me.__1178.logicBlock_textcolor();
			me.__1177.logicBlock_backgroundcolor();
			me.__1177.logicBlock_textcolor();
			me.__1176.logicBlock_backgroundcolor();
			me.__1176.logicBlock_textcolor();
			me.__1175.logicBlock_backgroundcolor();
			me.__1175.logicBlock_textcolor();
			me.__1174.logicBlock_backgroundcolor();
			me.__1174.logicBlock_textcolor();
			me.__3117.logicBlock_backgroundcolor();
			me.__3117.logicBlock_textcolor();
			me.__2117.logicBlock_backgroundcolor();
			me.__2117.logicBlock_textcolor();
			me.__1173.logicBlock_backgroundcolor();
			me.__1173.logicBlock_textcolor();
			me.__1172.logicBlock_backgroundcolor();
			me.__1172.logicBlock_textcolor();
			me.__1117.logicBlock_backgroundcolor();
			me.__1117.logicBlock_textcolor();
			me.__1171.logicBlock_backgroundcolor();
			me.__1171.logicBlock_textcolor();
			me.__72.logicBlock_visible();
			me.__72.logicBlock_alpha();
			me.__71.logicBlock_visible();
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
			me._timer_1.ggTimeout=1000;
			if (me._typea.ggVisible) {
				me._typea.ggClearMap();
				me._typea.ggInitMap(false);
				me._typea.ggInitMapMarkers(true);
			}
			if (me._typeb.ggVisible) {
				me._typeb.ggClearMap();
				me._typeb.ggInitMap(false);
				me._typeb.ggInitMapMarkers(true);
			}
			if (me._typeapopup.ggVisible) {
				me._typeapopup.ggClearMap();
				me._typeapopup.ggInitMap(false);
				me._typeapopup.ggInitMapMarkers(true);
			}
			if (me._typebpopup.ggVisible) {
				me._typebpopup.ggClearMap();
				me._typebpopup.ggInitMap(false);
				me._typebpopup.ggInitMapMarkers(true);
			}
			me.__41.logicBlock_visible();
			me.__39.logicBlock_position();
			me.__39.logicBlock_visible();
			me.__39.logicBlock_alpha();
			if (me.__99.ggVisible) {
				me.__99.ggClearMap();
				me.__99.ggInitMap(false);
				me.__99.ggInitMapMarkers(true);
			}
			if (me.__117.ggVisible) {
				me.__117.ggClearMap();
				me.__117.ggInitMap(false);
				me.__117.ggInitMapMarkers(true);
			}
			me.__38.logicBlock_scaling();
			me._rectangle_6.logicBlock_backgroundcolor();
			me._svg_7.logicBlock_visible();
			me._svg_8.logicBlock_visible();
			me.__35.logicBlock_position();
			me.__35.logicBlock_visible();
			me.__35.logicBlock_alpha();
			me.__32.logicBlock_position();
			me.__29.logicBlock_position();
			me.__26.logicBlock_position();
			me.__25.logicBlock_position();
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('positionchanged', function(event) {
			me._typea.ggRadar.update();
			me._typeb.ggRadar.update();
			me._typeapopup.ggRadar.update();
			me._typebpopup.ggRadar.update();
			me.__99.ggRadar.update();
			me.__117.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('태그')) {
				for(var i = 0; i < hotspotTemplates['태그'].length; i++) {
					hotspotTemplates['태그'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__85.logicBlock_visible();
			me._text_1.logicBlock_position();
			me._text_1aa.logicBlock_position();
			me._b.logicBlock_visible();
			me._text_1b.logicBlock_position();
			me._text_1bb.logicBlock_position();
			me.__73.logicBlock_visible();
			me.__72.logicBlock_visible();
			me._footer_bg.logicBlock_size();
			me._text_30.logicBlock_visible();
			me.__68.logicBlock_position();
			me.__68.logicBlock_size();
			me.__69.logicBlock_size();
			me.__41.logicBlock_position();
			me.__39.logicBlock_position();
			me.__11.logicBlock_scaling();
			me.__3.logicBlock_scaling();
			me.__4.logicBlock_position();
			me.__0.logicBlock_position();
			me.__0.logicBlock_size();
			me.__0.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_direction', function(event) {
			me.__32.logicBlock_position();
			me.__29.logicBlock_position();
			me.__26.logicBlock_position();
			me.__25.logicBlock_position();
			me._image_9.logicBlock_position();
			me._image_10.logicBlock_position();
			me._image_130.logicBlock_scaling();
			me.__210.logicBlock_scaling();
			me._image_13.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_icon', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_icon();
				}
			}
		});
		player.addListener('varchanged_vis_map', function(event) {
			me.__41.logicBlock_visible();
			me.__39.logicBlock_position();
			me.__39.logicBlock_visible();
			me.__39.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobileA', function(event) {
			me._mobile.logicBlock_visible();
			me.__72.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobileb', function(event) {
			me.__117mobile.logicBlock_visible();
			me.__72.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_mobiletypeA', function(event) {
			me.__85.logicBlock_position();
			me.__85.logicBlock_visible();
			me._text_1.logicBlock_visible();
			me._mobile.logicBlock_position();
		});
		player.addListener('varchanged_vis_mobiletypeB', function(event) {
			me._b.logicBlock_visible();
			me._text_1b.logicBlock_visible();
		});
		player.addListener('varchanged_vis_more', function(event) {
			me.__38.logicBlock_scaling();
			me._rectangle_6.logicBlock_backgroundcolor();
			me._svg_7.logicBlock_visible();
			me._svg_8.logicBlock_visible();
		});
		player.addListener('varchanged_vis_more_1', function(event) {
			me.__35.logicBlock_position();
			me.__35.logicBlock_visible();
			me.__35.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_type', function(event) {
			me.__72.logicBlock_visible();
			me.__71.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
			me._cloner_2.ggUpdate();
		});
	};
	function SkinCloner_cloner_2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__117_=document.createElement('div');
		els=me.__117___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="117 \uacf5\uac04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__117_.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__117_.ggUpdateText();
		player.addListener('changenode', function() {
			me.__117_.ggUpdateText();
		});
		el.appendChild(els);
		me.__117_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__117_.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['_117_'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__117_.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__117_.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__117_.style.transition='color 0s';
				if (me.__117_.ggCurrentLogicStateTextColor == 0) {
					me.__117_.style.color="rgba(243,243,243,1)";
				}
				else {
					me.__117_.style.color="rgba(0,85,127,1)";
				}
			}
		}
		me.__117_.logicBlock_textcolor();
		me.__117_.onclick=function (e) {
			player.setVariableValue('vis_mobileb', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__117_.onmouseover=function (e) {
			me.elementMouseOver['_117_']=true;
			me.__117_.logicBlock_textcolor();
		}
		me.__117_.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__117___text)
					return;
				}
			}
			me.elementMouseOver['_117_']=false;
			me.__117_.logicBlock_textcolor();
		}
		me.__117_.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__117_);
		me.__117_.logicBlock_textcolor();
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__84b=document.createElement('div');
		els=me.__84b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="84b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,85,127,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__84b.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__84b.ggUpdateText();
		player.addListener('changenode', function() {
			me.__84b.ggUpdateText();
		});
		el.appendChild(els);
		me.__84b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_84b'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__84b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__84b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__84b.style.transition='background-color 0s, color 0s';
				if (me.__84b.ggCurrentLogicStateBackgroundColor == 0) {
					me.__84b.style.backgroundColor="rgba(0,85,127,1)";
				}
				else {
					me.__84b.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__84b.logicBlock_backgroundcolor();
		me.__84b.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['_84b'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__84b.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__84b.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__84b.style.transition='background-color 0s, color 0s';
				if (me.__84b.ggCurrentLogicStateTextColor == 0) {
					me.__84b.style.color="rgba(243,243,243,1)";
				}
				else {
					me.__84b.style.color="rgba(0,85,127,1)";
				}
			}
		}
		me.__84b.logicBlock_textcolor();
		me.__84b.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_mobileA', false);
		}
		me.__84b.onmouseover=function (e) {
			me.elementMouseOver['_84b']=true;
			me.__84b.logicBlock_backgroundcolor();
			me.__84b.logicBlock_textcolor();
		}
		me.__84b.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me.__84b__text)
					return;
				}
			}
			me.elementMouseOver['_84b']=false;
			me.__84b.logicBlock_backgroundcolor();
			me.__84b.logicBlock_textcolor();
		}
		me.__84b.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__84b);
		me.__84b.logicBlock_backgroundcolor();
		me.__84b.logicBlock_textcolor();
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node.style.transition='transform 0s';
				if (me._ht_node.ggCurrentLogicStateScaling == 0) {
					me._ht_node.ggParameter.sx = 0.7;
					me._ht_node.ggParameter.sy = 0.7;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
				else {
					me._ht_node.ggParameter.sx = 1;
					me._ht_node.ggParameter.sy = 1;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
			}
		}
		me._ht_node.logicBlock_scaling();
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_2.onmouseover=function (e) {
			me.elementMouseOver['external_2']=true;
			me._image_3.logicBlock_alpha();
			me._rectangle_50.logicBlock_alpha();
			me._rectangle_50.logicBlock_scaling();
		}
		me._external_2.onmouseout=function (e) {
			me.elementMouseOver['external_2']=false;
			me._image_3.logicBlock_alpha();
			me._rectangle_50.logicBlock_alpha();
			me._rectangle_50.logicBlock_scaling();
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAABkASURBVHic7d13lF1lvcbx76SRIFGaEMFIFwEpgqGKSBcMghAVxQoKFy8IoqigiPRLkyaCggEEQSGgCKLCQgN4KVKsQEwImAuX3tIbybl/PJmbIc6QmTl77/f97f181mItXJJzfknmPOfdb/m9Ha1WCzOzCAakLsDMrLccWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFo'+
			'YDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWXt2gmYAMwFXgNaXf5ZAMwDpgPjgLUS1Wg10dFqtVLXYPGsBPwK2Lafv/4uYH/g6cIqskZwYFlfrIKCaquCXu9eYF/gmYJez2rOgWW99Q9go5Je+y/A7sDzJb2+1YQDy5bmfuC9Fb3XZGALYGpF72fBeNLdurMi8Ds0cV5VWAGsA7wK/AnNk5m9'+
			'jgPLuhqCguolYLeEdYwCXgTGA6smrMMy40dCA+gAbgI+lLqQHjyERnr+YW04j7CabRm06reQfMMKYHNU4wOpC7G0HFjNtCwKqjnAXolr6Yst0Cjrj8BbEtdiCTiwmmUocAUwk1hBtaTt0OT8HcDKaUuxKjmwmmEYcDEwG/hM4lqK9H7gBeBGtLJpNedJ9/obC3yWZnw5/Rr4JDAtdSFWDgdWPQ0EzgcORSuATdICbkM7561mmvCt2ySDgPNQ14Qv0bywAv2ed0PB9UtgeNJqrFAeYdXHRcAhNDOklua3wGjU7sYC8wgrvtPQHqX/wGHVkw+iUeetqQux9jiwYhoAnADMB76Jg6q3dkXhfj06hmTB+JEwnuOAE1MXURO3kPcOf1uCAyuOI4FzUhdRU+OAj6YuwpbOj4R5GwAchR5jHFblGYNWFa9B5ystUw6sfB2IVr'+
			'XOJt4c1W1oW0U0+6PzldemLsS650fC/HwOuATtqYrmRWBdXt8x9ErgU2nKadvlwOdTF2GLObDy8WngJ6mL6Kc5wA6oU2h3lkONAft7y05qPyVu6NaKHwnTG4Me/SKG1Xx0dm8YPYcVwAzUYWFNYGL5ZRXuADTHdWnqQprOgZXOx9Cj03XE/Hs4Du1luqYPv2YKsD6wCQq7aA5CCyA/Jt68Yi34kbB6HwGuRr2pIhqHWtTMbvN1BqA7Ca9ru6I0FqLeYgemLqRJIn6zR/VhdO/eDcQMq4eA9dB+pXbDCvSBH4cWF05ER2ciGYAm5Ftoy8ngtOU0g0dY5dsXNc97a+pC+ulxtCBwd8nvMxxt4fhiye9Tlvlojivido4wHFjl6EDn1q4hbifMuWiy+fqK33ck2tYRuZ/VqcDJFDMStS4cWMXbFe3fWS1xHf01B3WAOIm0'+
			'12ptiPpZrZewhnYsBM4CvpG6kDpxYBWjA9gSXYoQ9WhHC42mcjtTNxp9AUS+CfpYFF4RV0az4kn39m2OLkK4l7hhdRewCvmFFcDNaP7vC2g/V0SnokfsE4m54JINj7D6bwPgPmK34H0OXQv/ZOpC+uB04Oupi2jTyWgfm/WRR1h9txEwCXiE2GG1I/A2YoUVaE5oRXS1V1TfRnOFx+MNqH3iwOq9LYBHgX+gA74RzQS+hj4k40k7qd6OV4B90N/DHWlL6bdlgO+ix9yT0pYShx8Jl+7daDL6nakLadO56FGqjhO/o1BXiPVTF9KmI4Hv48syeuTA6tmGwM9RYEW1EPWm2heYlbiWKuyN9r4NS11IG+ajVcVzibf7v3QOrH/3ZmACmt+J7BlgU7SC2TRHAWegC2Uj+zJwQeoicuI5rMXeiVb9phI7rP4XbV5djWaGFc'+
			'D30BfPWakLadP5aGT8rdSF5MIjLFgLdU/YOnUhbVqA9ipdnriO3KyCznLuQ+wVuYXAEcCPgHmJa0mmyYG1OurdHbULZqd56Jv46NSFZO7t6CLVDVIX0qY5aPHkBzRwcr6JgTUc7ezeNHUhBbgZ9dfy5GzvjQJ+TdzuGV0dBIxNXUSVmhRYqwGXofmdyI8GAH9El1VMTlxHp6HA+9GV8BugHu4LgWnAv9AXxG1o/1QOBgB7ocPV0U1HG1HPT11IFZoQWKujdiV7pC6kAJNQUJXdm6o3VkfdNg9Gj1u9MQcF11h0KUUO7VdORXNDy6YupE1zUC+uq6jnXjug3oG1DHATGlFFNx810ft56kLQHqcrgf3afJ0FwDHAhaTfIzYUuAj1/4reOXQOcCgKrtpNFdQxsIaiNsR1GFG10CbC80g/GhmEAuZYiu048Ar6gOUQxm9G'+
			'81vvS11IAeah7q0Rb2PqUZ32Yb0VfavMoh5h9QNgZeC/SB9Wo4EnKKc9ygrAz4A/k/5UwTRge+C96MxoZEPQJRnTqNFlsHUYYQ0EvrPonzp4EG21yGGvzVpo5DOqwve8Cu0nm1vhe/ZkD7TvqbdzdLnbBvVtCyt6YI1Ee2velbqQAkwE9kcjjRyMRRP8KVZUZ6I2MheTx16jj5HHI2sR7kXBFVLkR8LtgYeJH1Yvol3Y65M+rAai0Ox8jEi1/eNNqGvBBGCXRDV0dS2awzuT9I/n7doazY1unLqQ/og6whqDJhMjn8oH+Co695aDtYHfkuelD3ehUc6zqQtBYXoZ2rA7KHEt7doZ+H3qIvoi4ghrG3ReLnJYXYAmm3MIq6HoLOVk8gwr0Gj6SbRamtpMFJ5vJ/h8EHA7wc7QRhxhhSu4i3HAV4CnUheCvqwORyt/b0'+
			'5cS1/MQ4GRS4vkrdFqXOQGj+ugC3OzFy2wLkErSNE8xeLbdXKwPvAAOkIT1aNou0UuH7QPAT8F3pK6kH64B9Wfy9GpHkV6JNwC7faO5AnUBXMkeYTVSNTu+RFihxXozOJktIcrh0Z9vwZWRZtgo+0w3wY1PcxepBHWdWiyPYJX0GUPl5HHI+ww9Ch6SupCStJCQXEJOnSdg0vQtpBIE/PZNwWIFFhRCj0BXfWew8ZH0AjvImJ3Ue2NFuoM8QnUOTYHI4Bz0FaRCD6JeuJnK0pgbYHmXHJ2A/oLzyGoOtAVWJcTv0Fhf9yE+qH/K3EdndZAe7lGkfcoJvtNpVHmsLYh33mBh1Crlf3II6xAI6qJNDOsQL2u/olGNzmYAmwFbId67ucq+2vSogTWDPKbC5gM7IQOyj6duJZO+6PD34ekLiQDQ9A9f8+gP5ccfn7uQfu3'+
			'DkAnHHIzlfQH0N9QlMDK4Yet03T0AVgX+AN5zK2tj0YU0e/kK8MI9OcyAY2Ec3A16i7yjdSFLGFN9HOUrSiBlUOHTVDz/1XJ5yDscPTD/yixNy5WYR20H+5H6JRBDs5AR30uTl3IIn9HP9/ZihJY00h7MHgcmizN6fDrwejP5RPkPZGbmy+ix8QjUheyyCy0JWNZNGJPaTp5nMLoUZTAegqt/FTtFjRy+WiC9+7JB1BzuR8mriOyZdBV8JPQPGQOgT+bxXOiDyWq4WLy+LPoUZRtDaD5h3FUc1jzSdTWZGIF79VbI9A2hd0T11FHd6DuCzkdTfkAamZY1bzbFDSHlbUoIyzQcvDhlLu68iR6xFqLfMKqAzgdeAyHVVl2AF5G7ahzMR61/DkQPfqX6XmCnNGNNMLqtBnahLcuxQ1fZ7P4soec/kC2R9/+WQ/Ta2Y2+t'+
			'LKpRtEp1PReb9lSnjt0egsZPYijbA6/QV9kC+m/euhZgHHo70x55JPWL0b3dt3Jw6rqg0DfoF2fW+SuJaujkU75ou8MPVB9FkKEVYQc4TV1TvQru49+/jrHkePl7cUXlF7BqEfyEOI+WVSR1egC0pT3524pDPRAfv+mLPo159GPqvevRI9sDqthr4pRqEWKiujTpoL0F/Ic+hc2YOoJez0JFX2bDDwWdRMr+6HlCOagQ61n5W6kG7sir6wN0f3G6zSzX8zF20InYh2219L5tsXelKXwOrUgUYmAxf9e2vRP6+Rz+PektZGrWrXTFyHLd0rwI7AX1MX0o1BaH5rIPqyHo5+7qey+DMwl3zP5PZK3QIrkrehEVWI1Zk+mo3mGjcmfqPA7tyINp5OSV1I03ieJI1jUNfPOobVy+jasm2B95BPC+Mi7Y2umDs9dSFN4xFW'+
			'dTpQm5xf0P08Q3Svod/bx7r5/76DQrroa+5z8BxawLmBPC59rTWPsKqxFvqBHk89w+pRNKrqqbPmSagJ451VFVShzsPwdwMbJa6l9hxY5RoGfBc9Fu2DVgPrZC66Y3FjtJenp37qLfQIvAPasjGjkuqq0wFsic54XgYsn7SaGvMjYTkGoEejU9AqYB09hG6uHt+PX/t2tN/sI0UWlJGpaFR5dupC6saBVbxVgFuBTVMXUqJvocBpZ6Q0GN2FdwWxLnLti+fRHqkHUxdSF34kLM6KaGPhc9QzrBYC9wMbonNt7T7WzQd+ic6EXrHof9fNKujylJvRqNLa5BFWMf4T+DZqAVNHM9Go6tJF/16GHVFwjSzp9VObjw7XH526kMgcWO1ZG6185dIrvAx/Rb2ZXq3o/S4ADqvovVKYh+Y3c+sGEYIfCftnBBptTKa+YfUiml'+
			'TfjOrCCrSnaSu04lZHQ9Cj8J/I/IaaHHmE1XffRKfkV0pdSIluRr2XHiPdGcw3AV9Bj6J13HAK2mh6FQrp3A7kZ8mB1Xtbob7yb01dSIleQGfkcrqufF10M9Co1IWUaA6a2/p+6kJy50fCpVsbHTn5b+odVlegs385hRVolLclGoW8lLiWsgxFc3ePoc211gOPsHo2GHUj/TJq1VFX04H9gNtSF9ILa6CVtr1TF1KiheiR/AjUw826cGB178PAJdTz3F9XV6FLDqLtgdoHNaGr21GnrrwNohsOrNfbCPWK345691KfhPaO3U7P5/9ytzy6xXkf6h1crwAHAb/C3SA8h7XISmgO4QHgfdQ3rOYC56A5oduIG1agrRYHoD1Nk9KWUqoVgOvRl0udFx56xSMsNdE7k/qfsJ8MjEGdQOtmKArig6n3l/AC9Ch8APm2/C5V'+
			'nf9y30gHuhL8YTRXtXzSaso1FV0Qui71DCvQtoBDgd3QQePII8c3MhDdmTgbfdHWdX9aj5oYWGsCP0bbFDZMW0rp7kAf4mNSF1KR24Gd0LnO0JctLMUy6Iv2Hvp+xV1oTXskPBbt4K7zLvVOhwFjCXbvXIHWRPdObpC4jrItQF9M+1HtEaokmhJY26EWxXXfpgBaONgLeDZ1IZn4OmqmNyR1IRU4ATiZGo8u6/5IuB5wHfBH6h9Wz6Gzd9vjsOrqDDTKuj11IRU4Hl2Q2t1FILVQ5xHWGeiK8TelLqQCN6KRxCQaunrUCwOAz6OruZowJfAn4IvA31IXUqQ6BtbewOXUe+Wv04toVPVTHFS9tTrwPWo8ClnC1WhFsRZzmXUKrLXRPFUd2xMvaQEwDp03ey5xLRF1oNW1H6NruuquhRZhfkLwG4vqMIc1Au1Sn0z9w6'+
			'oFTESjg/1xWPVXC11LtinaHjArbTml6wAuRHO5exL4KFPkEdZgtFnwGOrbS72ruajL6SnAM4lrqZPBwM5obmuTxLVUYR7a7vEN9OUXStTA2gz4GbB+4jqq8gw6VnN36kJqbDjacHo09T1L2tV0NOo6lkDzn9ECazU0Yfrx1IVUZBZqrPel1IU0yGZobmvzxHVU5VXUYugXievolShzWMuib75/0JywegAYjcOqan8BtkW9+19NWkk1lkeLVfcAG6ctZekijLA+iK783oBmDNVfQ7uVz6AmS9GBbYRG9LsQ58u9XZcAx5Hpgk7OgbUOahkymmYEFehb7lB0F6DlYRjwKXTs5W2Ja6nKy6jDx3lokj4buQbWueiD24TzX52+jCZB69oaJbrVgR+g9tlN8QTwGbQdIgs5BdYQ1ArlBgLvE+mjhah/02jg+cS1WO+MQSOP'+
			'1VIXUqHfoOaIT6UuJIfn8gGoZe9v0L1/TQmrp9FemC1xWEUyDrUqHktmj0sl2gOYgA5XL5eykNQjrBHAd4DPobmCprgW/b7/mboQa8sewFnUvxFkV08DX0X7ICuXMrA+guaq3pGqgAReROf/rk5diBVmZbT58hC0/aYp7kTdLx6v8k1TBdaF6C94YIo3T6CFOip8jUyXi60tA9FtS2egR/ymmIe6hVxKRY/HVQfWUOAPwNZVvmliU4GPEuNmZWvPcqgrwmmpC6nYDWg1cWbZb1RlYK2H+lRtW9UbJjYbTdB+JnUhVrm1gZ+jm5maYgqayyu180VVq4Qro148TQirhWjj58dxWDXV4+gR8UhgWtpSKrMGmpBfo8w3qWqE9RDwnireKLGZaHPhaeiKcbM1gIvREbMm+Bs6GfD3Ml687BHWMOBUmhFW9wMfQr3VHVbWaQ'+
			'ra/nAw2jled5ugbhelKHuEdRBaQaizV4DzF/3zcuJaLG/roK4jh6QupAKXo20PhSozsJZHrTpKfaZN7E70A/gg6rNutjQDgA8AV1L/4z37oRXEwpT1SDgQ7eSua1i9hvZU7YmuU3JYWW8tBH4PrIvuIpibtpxSHQ+sVeQLlhVY7wMOKOm1U7sL9Uk6mwr2nVhtzUYdOnYAHk1cS1k2QU8ghSkrsL5A/W5anocmTncmYPN+y9Z9qNPnScCcxLWU4VMUuB+tjDmsDmA+9Tl2Mx+Nqsbg1T8r16ZoC0TdToKMRQtwbStjhDWG+oTVZHTUYmccVla+vwK7orZDdVpxLmwDdRmBVYdLIuahnfk7Aj9KXIs1ywzgTGAr6nP+dBCwVxEvVEZgbVXCa1ZpAnru/izwZOJarJlawGOoA+9h1GPD6f5FvEjRgfVe4j4OTkfHanYH'+
			'rktci1mnC9GxnkuJvQWikHm5ogNrBDEvUfgz8GngKOB/EtditqSJaHf8x6m4YV6BBlPA01fRgTUH3S4SydnoEogbif0NZvW2EP2Mbo9WEqP9rA4AVijiRYqUtEF9Hz2IVv+ORm0xzCJ4Gm043Q/dDh7F6sBLtHnHaNGBNRR4tuDXLNprqKPCruiIRDb3nJn10nzgFmBv4LtpS+m1FrAmbX7eig6se9E8Vq7uR5vzzsT7qiy2FhptnYiOwPw5bTlL9SwaYbWljBHWfQW/ZhGmAt8EtgMeSVyLWZFaqFneKHQgP9cv4pUoYMGg6MCagPaP5OR3aKLydDSUNqujBWgBaTvg9sS1dOc2CuhqUsbG0StLeM3+OhBNTpbSrtUsQ4+iVe+DyOcw9Tx0zX3bG7HLCKyJ6Nr5lG4FVkVdD90CxppmDnAZur3n5sS1AAxBA5m2Vg'+
			'ihnMB6AgVFiq0CL6A+XLsDz+MVQGuuFvAMOsP3YdIepv4JWhRo+/NYVj+sa1GRVboGNdbzNfBmr3cTMBK4gupPojwFnEVB9xWWeWvOmagFbNleQN8gn1z072b272YBn0M3+FR1vKeFWqX/s6gXLDOwXkZ9fS6g+Mm/zqHlD9Fz+k0Fv75ZXd0KbIZWFMs0AzgGzaXNK+pFq7pI9XCUtCvSXki20G9+PHAEBSa3WQO9E02Gb456VhWhheaPTwAuKug1/19VgQWaXzoO2JfFfzi9WTVoLfrvpgLXo0fNCWUUaNZQu6ALjzdHA4r+rOZ1fk7vA45Et0kVPl9WZWB1ehcKrT3RMZnl6Pk3NgW4A03i30FBE3dm1q2NgK+gz+cKvH5Vr7sQ6wypFvAw6t11DRpclCJFYHU1HM1BjUTX2ncA09CWiEnoKiQzq9YgdD7xg6gp'+
			'57vQGeHOEJuBPqMT0fnc8cDdVHA/Z+rAMjPrtTJXCc3MCuXAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWG'+
			'YWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRj/B97bAOXmjYO6AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_icon') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.left='0px';
					me._image_3.style.top='20px';
				}
				else {
					me._image_3.style.left='0px';
					me._image_3.style.top='0px';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility="hidden";
					me._image_3.style.opacity=0;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
			}
		}
		me._image_3.logicBlock_alpha();
		me._image_3.onmouseover=function (e) {
			me.elementMouseOver['image_3']=true;
			me._text_6.logicBlock_alpha();
		}
		me._image_3.onmouseout=function (e) {
			me.elementMouseOver['image_3']=false;
			me._text_6.logicBlock_alpha();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,0.705882);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_6.ggUpdateText();
		});
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_6.style.transition='opacity 0s';
				if (me._text_6.ggCurrentLogicStateAlpha == 0) {
					me._text_6.style.visibility="hidden";
					me._text_6.style.opacity=0;
				}
				else {
					me._text_6.style.visibility=me._text_6.ggVisible?'inherit':'hidden';
					me._text_6.style.opacity=1;
				}
			}
		}
		me._text_6.logicBlock_alpha();
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._image_3.appendChild(me._text_6);
		me._external_2.appendChild(me._image_3);
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 3px solid rgba(34,30,31,0.705882);';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_50.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_50.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_50.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_50.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_50.ggCurrentLogicStateScaling == 0) {
					me._rectangle_50.ggParameter.sx = 1.1;
					me._rectangle_50.ggParameter.sy = 1.1;
					me._rectangle_50.style.transform=parameterToTransform(me._rectangle_50.ggParameter);
					skin.updateSize(me._rectangle_50);
				}
				else {
					me._rectangle_50.ggParameter.sx = 1;
					me._rectangle_50.ggParameter.sy = 1;
					me._rectangle_50.style.transform=parameterToTransform(me._rectangle_50.ggParameter);
					skin.updateSize(me._rectangle_50);
				}
			}
		}
		me._rectangle_50.logicBlock_scaling();
		me._rectangle_50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_50.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_50.ggCurrentLogicStateVisible == 0) {
					me._rectangle_50.style.visibility="hidden";
					me._rectangle_50.ggVisible=false;
				}
				else {
					me._rectangle_50.style.visibility=(Number(me._rectangle_50.style.opacity)>0||!me._rectangle_50.style.opacity)?'inherit':'hidden';
					me._rectangle_50.ggVisible=true;
				}
			}
		}
		me._rectangle_50.logicBlock_visible();
		me._rectangle_50.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_50.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_50.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_50.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_50.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_50.style.visibility=me._rectangle_50.ggVisible?'inherit':'hidden';
					me._rectangle_50.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_50.style.opacity == 0.0) { me._rectangle_50.style.visibility="hidden"; } }, 805);
					me._rectangle_50.style.opacity=0;
				}
			}
		}
		me._rectangle_50.logicBlock_alpha();
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		els=me.__57__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/_57_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc29 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_50.appendChild(me.__57);
		me._external_2.appendChild(me._rectangle_50);
		me._ht_node.appendChild(me._external_2);
		me._ht_node.logicBlock_scaling();
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_alpha();
		me._text_6.logicBlock_alpha();
		me._rectangle_50.logicBlock_scaling();
		me._rectangle_50.logicBlock_visible();
		me._rectangle_50.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._image_3.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_3.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_node.logicBlock_scaling();
				me._rectangle_50.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_icon=function() {
				me._image_3.logicBlock_position();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__58(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__58=document.createElement('div');
		el.ggId="\ud0dc\uadf8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 559px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__58.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__58.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__58.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__58.style.transition='transform 0s';
				if (me.__58.ggCurrentLogicStateScaling == 0) {
					me.__58.ggParameter.sx = 0.8;
					me.__58.ggParameter.sy = 0.8;
					me.__58.style.transform=parameterToTransform(me.__58.ggParameter);
					skin.updateSize(me.__58);
				}
				else {
					me.__58.ggParameter.sx = 1;
					me.__58.ggParameter.sy = 1;
					me.__58.style.transform=parameterToTransform(me.__58.ggParameter);
					skin.updateSize(me.__58);
				}
			}
		}
		me.__58.logicBlock_scaling();
		me.__58.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__58.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__58.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_58']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__58.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_58']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItcGx1cy1jaXJjbGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSI+CiA8Y2lyY2xlIGN5PSIxMiIgcj0iMTAiIGN4PSIxMiIvPgogPGxpbmUgeDI9IjEyIiB5Mj0iMTYiIHgxPSIxMiIgeTE9IjgiLz4KIDxsaW5lIHgyPSIxNiIgeTI9IjEyIiB4MT0iOCIgeTE9IjEyIi8+Cjwvc3'+
			'ZnPgo=';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_3.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				skin.__59.ggVisible = !skin.__59.ggVisible;
				var flag=skin.__59.ggVisible;
				skin.__59.style.transition='none';
				skin.__59.style.visibility=((flag)&&(Number(skin.__59.style.opacity)>0||!skin.__59.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__48.ggVisible = !skin.__48.ggVisible;
				var flag=skin.__48.ggVisible;
				skin.__48.style.transition='none';
				skin.__48.style.visibility=((flag)&&(Number(skin.__48.style.opacity)>0||!skin.__48.style.opacity))?'inherit':'hidden';
			}
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._external_1.appendChild(me._svg_3);
		me.__58.appendChild(me._external_1);
		me.__58.logicBlock_scaling();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_sizechanged=function() {
				me.__58.logicBlock_scaling();
			};
			me.__div = me.__58;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='태그') {
				hotspot.skinid = '태그';
				hsinst = new SkinHotspotClass__58(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_icon', !player.getVariableValue('vis_icon'));
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('vis_direction', !player.getVariableValue('vis_direction'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap") .ggskin { font-family: "Noto Sans KR", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};