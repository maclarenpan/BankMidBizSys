<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>bankapp</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/resources/css/ext-all.css"></link>
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/examples/shared/example.css"></link>
	<link rel="stylesheet" type="text/css" href="${ctx}/style/TabCloseMenu.css"></link>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/ext-all.js"></script>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/locale/ext-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/examples/shared/examples.js"></script>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/examples/shared/example-data.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/util12.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/auth12.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/orga12.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/biz12.js"></script><!-- 0518 biz12.js 放到acc12.js前面 -->
	<script type="text/javascript" src="${ctx}/js/branch12/acc12.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/proxy12.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/report12.js"></script>
	<script type="text/javascript" src="${ctx}/js/branch12/staff12.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript">
		//这里centerPanel设为全局变量，不然addtab()找不到变量
		var currOperator = <%=session.getAttribute("currOperator")%> 
		var currOperatorName = <%=session.getAttribute("currOperatorName")%> 
		var centerPanel;
		Ext.Loader.setConfig({
			enabled: true
		});
		Ext.Loader.setPath('Ext.ux', '/bankapp/ext-4.0.0/examples/ux');
		Ext.require([
		  'Ext.form.*',
		  'Ext.grid.*',
		  'Ext.data.*',
		  'Ext.util.*',
		  'Ext.state.*',
		  'Ext.ux.statusbar.StatusBar',
		  'Ext.window.MessageBox',
		  'Ext.tip.QuickTipManager',
		  'Ext.toolbar.TextItem',
		  'Ext.ux.CheckColumn',
		  'Ext.chart.*',
		  'Ext.layout.container.Fit',
		  'Ext.ux.TabCloseMenu',
		  '*'
		]);
		//menuAuth start
		Ext.define('menu_forwardAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'operator_id', type: 'int'
			}, {
				name: 'authCode', type: 'string'
			}]
		});
		Ext.define('menu_reverseAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'operator_id', type: 'int'
			}, {
				name: 'authCode', type: 'string'
			}]
		});
		Ext.define('menu_customAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'operator_id', type: 'int'
			}, {
				name: 'authCode', type: 'string'
			}]
		});
		var menu_forwardAuthStore = new Ext.data.Store({
			autoLoad: true,
			model: 'menu_forwardAuthModel',
			proxy: {
				type: 'ajax',
				url: 'auth/menuForwardAuthJudge.action?operator=' + currOperator,
				reader: {
					type: 'json',
					root: 'menu_forwardauths'				
				}
			}
		});
		menu_forwardAuthStore.load();
		var menu_reverseAuthStore = new Ext.data.Store({
			autoLoad: true,
			model: 'menu_reverseAuthModel',
			proxy: {
				type: 'ajax',
				url: 'auth/menuReverseAuthJudge.action?operator=' + currOperator,
				reader: {
					type: 'json',
					root: 'menu_reverseauths'				
				}
			}
		});
		menu_reverseAuthStore.load();
		var menu_customAuthStore = new Ext.data.Store({
			autoLoad: true,
			model: 'menu_customAuthModel',
			proxy: {
				type: 'ajax',
				url: 'auth/menuCustomAuthJudge.action?operator=' + currOperator,
				reader: {
					type: 'json',
					root: 'menu_customauths'				
				}
			}
		});
		menu_customAuthStore.load();
		//menuAuth end
		//clock widget start
		var clock = Ext.create('Ext.toolbar.TextItem', {text: Ext.Date.format(new Date(), 'g:i:s A')});

		var currOperatorName = Ext.create('Ext.toolbar.TextItem', {text: '当前登录操作员 ' + currOperatorName});
		//clock widget end
		//other define start
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor: 1,
			autoCancel: false
		});
		//other define end
		//panel define end
		
		//Ext.menu.Menu1 start
		var menu1 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu1',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '人员信息管理',
						menu : { // <-- submenu by nested config object
							items : [
								{
									text : '操作员信息管理',
									group : 'theme',
									handler : addOperatorTab
								}
							]
						}
					}, {
						text : '权限管理',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : '权限管理',
									group : 'theme',
									handler : addAuthMgmtTab
								}, {
									text : '角色管理',
									group : 'theme',
									handler : addRoleMgmtTab
								}, {
									text: '个性化权限管理',
									group: 'theme',
									handler: addOperatorAuthMgmtTab
								}
							]
						}
					}]
			});
		//Ext.menu.Menu1.end
		
		//Ext.menu.Menu2 start
		
		var menu2 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu2',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
					text : '业务参数配置',
					menu : { // <-- submenu by nested config object
						items : [
							// stick any markup in a menu
							{
								text : '汇率配置',
								group : 'theme',
								handler : addExchangeRateMgmtTab
							}
						]
					}
				}, {
					
					text : '交易限制配置',
					menu : {
						items : [
							// stick any markup in a menu
							{
								text : '代理用户交易限制',
								group : 'theme',
								handler : addProxyUserLimitTab
							}, {
								text : '代理用户类型限制',
								group : 'theme',
								handler : addProxyUserTypeLimitTab
							}
						]
					}
				}, {
					
					text : '费率配置',
					menu : {
						items : [
							// stick any markup in a menu
							{
								text : '业务费率配置',
								group : 'theme',
								handler : addServiceYieldMgmTab
							}
						]
					}
				}]
			});
		//Ext.menu.Menu2.end
		
		//Ext.menu.Menu3 start
		var menu3 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu3',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
					text : '其他',
					menu : {
						items : [
							// stick any markup in a menu
							{
								text : '单位配置',
								group : 'theme',
								handler : addUnitConfigTab
							}
						]
					}
				}]
			});
		//Ext.menu.Menu3.end
		
		//Ext.menu.Menu4 start
		var menu4 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu4',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '人员账户信息管理',
						menu : { // <-- submenu by nested config object
							items : [
								// stick any markup in a menu
								{
									text : '账户管理',
									group : 'theme',
									handler : addAccountTab
								}, {
									text: '客户管理',
									group: 'theme',
									handler: addGuestTab
								}, {
									text: '代理用户管理',
									group: 'theme',
									handler: addProxyUserTab
								}
							]
						}
					}, {
						text : '开通代理业务',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : '关联代理用户账户业务',
									group : 'theme',
									handler : addProxyUserAccServiceTab
								},{
									text: '关联代理客户和账户',
									group: 'theme',
									handler: addProxyClientAndAccTab
								}
							]
						}
					}/*, {
						text: '批量开通代理业务',
						menu: {
							items: [{
								text: '批量开通代理业务',
								group: 'theme',
								handler: onItemCheck
							}]
						}
					}*/, {
						text: '开通跨行转账业务',
						menu: {
							items: [{
								text: '开通跨行转账业务',
								group: 'theme',
								handler: onItemCheck
							}]
						}
					}/*, {
						text: '批量开通跨行转账业务',
						menu: {
							items: [{
								text: '批量开通跨行转账业务',
								group: 'theme',
								handler: onItemCheck
							}]
						}
					}*/
				]
			});
			
		//Ext.menu.Menu4.end
		
		//Ext.menu.Menu5 start
		var menu5 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu5',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '银行资产表报',
						menu : { // <-- submenu by nested config object
							items : [
								// stick any markup in a menu
								{
									text : '银行资产表报',
									group : 'theme',
									handler : addAssertReportTab2
								}, {
									text : '银行资产增量表报',
									group : 'theme',
									handler : addAssertIncReportTab
								}, {
									text: '银行资产总量报表',
									group: 'theme',
									handler: addAssertTotalReportTab
								}
							]
						}
					}, {
						text : '银行业务量表报',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : '银行业务量表报',
									group : 'theme',
									handler : addServiceReportTab
								}, {
									text : '银行业务增量表报',
									group : 'theme',
									handler : addServiceIncReportTab
								}, {
									text: '银行业务总量报表',
									group: 'theme',
									handler: addServiceTotalReportTab
								}
							]
						}
					}
				]
			});
		//Ext.menu.Menu5 end
		
		//Ext.menu.Menu6 start
		var menu6 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu6',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '代理用户账户余额查询',
						handler: addProxyUserAccountAmountTab
					}, {
						text : '代理客户账户余额查询',
						handler: addProxyClientAccountAmountTab
					}, {
						text : '银行金额查询',
						handler: addBankTotalAmountTab
					}
				]
			});
		//Ext.menu.Menu6 end
		
		//Ext.menu.Menu7 start
		var menu7 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu7',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '版本',
						handler: onItemCheck
					}, {
						text : '帮助',
						handler: onItemCheck
					}, {
						text: '关于',
						handler: onItemCheck
					}
				]
			});
		//Ext.menu.Menu7 end
		
		//menu function start
		function onItemClick(item) {
			Ext.MessageBox.alert('Menu Click', 'You clicked the "{0}" menu item.', item.text);
		}
		
		function onItemCheck(item, checked) {
			Ext.MessageBox.alert('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
		}

		/*
		function addInnerStaffTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '内部客户信息管理',
					iconCls: 'tabs',
					items: [
						
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		
		};
		*/
		function addGuestTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("guestMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("guestMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("guestMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title : '客户信息管理',
					iconCls : 'tabs',
					items: [
						//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
						Ext.create('Ext.form.Panel', {
							width: 1100,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [
								{
									itemId : 'grid',
									xtype : 'guestgrid',//这里是根据前面的widget.writegrid
									title : '客户信息列表',
									height : 400,
									store : guestStore
								}, {
									items: GuestQueryPanel
								}
							]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		function addOperatorTab(){
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("operatorInfoMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("operatorInfoMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("operatorInfoMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '操作员信息管理',
					iconCls: 'tabs',
					items: [
					//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
						Ext.create('Ext.form.Panel', {
							width: 1100,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [
								{
									itemId : 'grid',
									xtype : 'operatorgrid',//这里是根据前面的widget.operator
									title : '人员信息列表',
									height : 400,
									store : operatorStore
								}, {
									items: opreatorQueryPanel
								}
							]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		function addProxyUserTab(){
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("proxyUserMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("proxyUserMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("proxyUserMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '代理用户信息管理',
					iconCls: 'tabs',
					items: [
						//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
						Ext.create('Ext.form.Panel', {
							width: 1100,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [
								{
									itemId : 'grid',
									xtype : 'proxyUserGrid',
									title : '代理用户信息列表',
									height : 400,
									store : proxyUserStore,
									listeners : {
										selectionchange : function (selModel, selected) {
										Ext.getCmp('proxyUserForm').setActiveRecord(selected[0] || null);
										}
									}
								}, {
									itemId : 'form',
									xtype : 'proxyUserForm',
									height : 200,
									listeners : {
										create : function (form, data) {
											proxyUserStore.insert(0, data);
										}
									}
								}
							]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
			
		};
		
		//tab:权限管理
		function addAuthMgmtTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("authMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("authMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("authMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '权限管理',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 30 30 0',
							layout : {
								type : 'table',
								columns: 2
							},
							items: [{
								itemId : 'forwardGrid',
								xtype : 'forwardauthgrid',
								title : '正向权限列表',
								width: 600,
								height : 300,
								store : forwardAuthStore
							}, {
								items: forwardAuthQueryPanel
							}, {
								itemId: 'reverseGrid',
								xtype: 'reverseauthgrid',
								title: '反向权限列表',
								width: 600,
								height: 300,
								store: reverseAuthStore
							}, {
								items: reverseAuthQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//tab:角色管理
		function addRoleMgmtTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("roleMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("roleMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("roleMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '角色管理',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								itemId : 'grid',
								xtype : 'rolegrid',
								title : '角色列表',
								height : 300,
								width: 600,
								store : roleStore
							}, {
								items: roleQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		function addOperatorAuthMgmtTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("customAuthMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("customAuthMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("customAuthMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '个性化权限管理',
					iconCls: 'tabs',
					items: [
							Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								itemId : 'grid',
								xtype : 'customauthgrid',
								title : '个性化权限列表',
								height : 300,
								width: 600,
								store : customAuthStore
							}, {
								items: customAuthQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//资产表报查询tab	
		function addAssertReportTab2() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankAssertReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankAssertReport" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankAssertReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '银行资产报表查询',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								items: assertReportPanel
							}, {
								items: assertReportQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
	
		//银行资产增量报表查询tab
		function addAssertIncReportTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankAssertIncReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankAssertIncReport" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankAssertIncReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '银行资产增量报表查询',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								items: assertIncReportPanel
							}, {
								items: assertIncReportQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//银行资产总量报表查询tab
		function addAssertTotalReportTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankAssertTotalReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankAssertTotalReport" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankAssertTotalReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '银行资产总量报表查询',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								items: assertTotalReportPanel
							}, {
								items: assertTotalReportQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
			
		};
		
		//银行业务报表查询tab
		function addServiceReportTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankBizReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankBizReport" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankBizReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if  (flag) {
				centerPanel.add({
					title: '银行业务量表报',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								items: serviceReportPanel
							}, {
								items: serviceReportQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//银行业务增量报表查询tab
		function addServiceIncReportTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankBizIncReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankBizIncReport" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankBizIncReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '银行业务增量表报',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								items: serviceIncReportPanel
							}, {
								items: serviceIncReportQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//银行业务总量报表查询tab
		function addServiceTotalReportTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankBizTotalReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankBizTotalReport" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankBizTotalReport" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '银行业务总量表报',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'hbox',
								align: 'left'
							},
							items: [{
								items: serviceTotalReportPanel
							}, {
								items: serviceTotalReportQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//代理用户限制tab
		function addProxyUserLimitTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("proxyUserDealLimit" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("proxyUserDealLimit" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("proxyUserDealLimit" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '代理用户限制配置',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout: {
								type: 'hbox',
								align: 'left'
							},
							items: [{
								itemId : 'grid',
								xtype : 'proxyuserlimitgrid',
								title : '代理用户限制列表',
								width: 600,
								height : 600,
								store : proxyUserLimitStore
							}, {
								items: proxyUserLimitQueryPanel
							}]
						})
					], 
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		//代理用户类型限制
		function addProxyUserTypeLimitTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("proxyUserTypeDealLimit" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("proxyUserTypeDealLimit" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("proxyUserTypeDealLimit" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '代理用户类型限制',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout: {
								type: 'hbox',
								align: 'left'
							},
							items: [{
								itemId : 'grid',
								xtype : 'proxyusertypelimitgrid',
								title : '代理用户类型限制列表',
								width: 600,
								height : 600,
								store : proxyUserTypeLimitStore
							}, {
								items: proxyUserTypeLimitQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//单位配置
		function addUnitConfigTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("unitConfig" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("unitConfig" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("unitConfig" == record.get("authCode"))
				{
					flag = true;
				}
			});
			
			if (flag) {
				centerPanel.add({
					title: '单位配置',
					iconCls: 'tabs',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1200,
							height: 800,
							margin: '0 0 0 0',
							layout: {
								type: 'table',
								columns: 2
							},
							items: [{
								itemId : 'unitgrid',
								xtype : 'unitgrid',
								title : '单位列表',
								width: 620,
								height : 250,
								store : unitStore
							}, {
								items: unitQueryPanel
							}, {
								itemId : 'unit2unitgrid',
								xtype : 'unit2unitgrid',
								title : '单位间换算列表',
								width: 620,
								height : 350,
								store : unit2unitStore
							}, {
								items: unit2unitQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else 
			{
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//serviceyield tab
		function addServiceYieldMgmTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("yieldConfig" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("yieldConfig" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("yieldConfig" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '业务费率配置',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout: {
								type: 'hbox',
								align: 'left'
							},
							items: [{
								itemId : 'grid',
								xtype : 'serviceyieldgrid',
								title : '业务费率列表',
								width: 600,
								height : 600,
								store : serviceYieldStore
							}, {
								items: serviceYieldQueryPanel//这里容易出错不要加单引号
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//exchange rage tab
		function addExchangeRateMgmtTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("exchangeRateConfig" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("exchangeRateConfig" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("exchangeRateConfig" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '汇率配置',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout: {
								type: 'hbox',
								align: 'left'
							},
							items: [{
								itemId : 'grid',
								xtype : 'exchangerategrid',
								title : '汇率列表',
								width: 600,
								height : 600,
								store : exchangeRateStore,
							}, {
								items: exchangeRateQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//account tab
		function addAccountTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("accountMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("accountMgmt" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("accountMgmt" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '账户管理',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [{
								itemId : 'grid',
								xtype : 'accountgrid',
								title : '账户列表',
								height : 400,
								store : accountStore
							}, {
								items: accountQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//ProxyUserAccountAmount tab
		function addProxyUserAccountAmountTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("proxyUserAccAmountQuery" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("proxyUserAccAmountQuery" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("proxyUserAccAmountQuery" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '代理用户账户查询',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [{
								itemId : 'grid',
								xtype : 'proxyuseraccountamountgrid',
								title : '代理用户账户列表',
								height : 400,
								store : proxyUserAccountAmountStore
							}, {
								items: ProxyUserAccountAmountQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//ProxyClientAccountAmount tab
		function addProxyClientAccountAmountTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("proxyClientAccAmountQuery" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("proxyClientAccAmountQuery" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("proxyClientAccAmountQuery" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '代理客户账户查询',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [{
								itemId : 'grid',
								xtype : 'proxyclientaccountamountgrid',
								title : '代理客户账户列表',
								height : 400,
								store : proxyClientAccountAmountStore
							}, {
								items: ProxyClientAccountAmountQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};


		//Bank total amount tab
		function addBankTotalAmountTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("bankAmountQuery" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("bankAmountQuery" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("bankAmountQuery" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '银行金额查询',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [{
								itemId : 'grid',
								xtype : 'banktotalamountgrid',
								title : '银行金额列表',
								height : 400,
								store : bankTotalAmountStore
							}, {
								items: BankTotalAmountQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};

		//addProxyUserAccountService tab
		
		function addProxyUserAccServiceTab() {
			var flag = false;
			menu_forwardAuthStore.each(function(record){
				if ("relateProxyUserAccBiz" == record.get("authCode"))
				{
					flag = true;
				}
			});
			menu_reverseAuthStore.each(function(record){
				if ("relateProxyUserAccBiz" == record.get("authCode"))
				{
					flag = false;
				}
			});
			menu_customAuthStore.each(function(record){
				if ("relateProxyUserAccBiz" == record.get("authCode"))
				{
					flag = true;
				}
			});
			if (flag) {
				centerPanel.add({
					title: '关联代理用户账户业务',
					iconCls: 'theme',
					items: [
						Ext.create('Ext.form.Panel', {
							width: 1120,
							height: 800,
							margin: '0 0 0 0',
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							items: [{
								itemId : 'grid',
								xtype : 'proxyuseraccountservicegrid',
								title : '代理用户账户业务关联列表',
								height : 400,
								store : ProxyUserAccountServiceStore
							}, {
								items: proxyUserAccountServiceQueryPanel
							}]
						})
					],
					closable: true
				}).show();
			}
			else {
				Ext.Msg.alert("提示", "您目前没有访问该菜单的权限");
			}
		};
		
		/*
		//addProxyUseAndAcc tab
		function addProxyUserAndAccTab() {
			centerPanel.add({
				title: '关联代理用户和账户',
				iconCls: 'theme',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1120,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [{
							itemId : 'grid',
							xtype : 'proxyuserandaccgrid',
							title : '代理用户账户关联列表',
							height : 400,
							store : proxyUserAndAccStore,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('proxyuserandaccform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'proxyuserandaccform',
							height : 200,
							listeners : {
								create : function (form, data) {
									proxyUserAndAccStore.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};
		*/
		//addProxyUseAndService tab
		function addProxyUserAndServiceTab() {
			centerPanel.add({
				title: '关联代理用户和业务',
				iconCls: 'theme',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1120,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [{
							itemId : 'grid',
							xtype : 'proxyuserandservicegrid',
							title : '代理用户业务关联列表',
							height : 400,
							store : proxyUserAndServiceStore,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('proxyuserandserviceform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'proxyuserandserviceform',
							height : 200,
							listeners : {
								create : function (form, data) {
									proxyUserAndServiceStore.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};

		//addProxyClientAndAcc tab
		function addProxyClientAndAccTab() {
			centerPanel.add({
				title: '关联代理用户和账户',
				iconCls: 'theme',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1120,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [{
							itemId : 'grid',
							xtype : 'proxyclientandaccgrid',
							title : '代理客户账户关联列表',
							height : 400,
							store : proxyClientAndAccStore,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('proxyclientandaccform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'proxyclientandaccform',
							height : 200,
							listeners : {
								create : function (form, data) {
									proxyClientAndAccStore.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};

		//addProxyClientAndService tab
		function addProxyClientAndServiceTab() {
			centerPanel.add({
				title: '关联代理客户和业务',
				iconCls: 'theme',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1120,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [{
							itemId : 'grid',
							xtype : 'proxyclientandservicegrid',
							title : '代理客户业务关联列表',
							height : 400,
							store : proxyClientAndServiceStore,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('proxyclientandserviceform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'proxyclientandserviceform',
							height : 200,
							listeners : {
								create : function (form, data) {
									proxyClientAndServiceStore.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};
		
		//tabpanel end
		//menu function end		
		Ext.onReady(function () {
			var currentItem;
			Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
			
			//tabpanel start
			centerPanel = Ext.createWidget('tabpanel', {
				region : 'center',
				id : 'centerPanel',
				resizeTabs : true,
				enableTabScroll : true,
				width : 1280,
				height : 925,//这个heightһ一定要设够，不然tab会出现在不确定的地方
				margin: '0 0 0 0',
				default: {
					autoScroll : true,
					bodyPadding : 10
				},
				plugins : Ext.create('Ext.ux.TabCloseMenu', {
					extraItemsTail : [
						'-', {
							text : 'Closable',
							checked : true,
							handler : function (item) {
								currentItem.tab.setClosable(item.checked);
							}
						}
					],
					listeners : {
						aftermenu : function () {
							currentItem = null;
						},
						beforemenu : function () {
							var menuitem = menu.child('*[text="Closable"]');
							currentItem = item;
							menuitem.setChecked(item.closable);
						}
					}
				})
			});

			
			//Ext.Viewport start		
			var mainViewport = Ext.create('Ext.Viewport', {
					layout : {
						type : 'border',
						padding : 5
					},
					defaults : {
						split : true
					},
					items : [{
							region : 'west',
							collapsible : true,
							title : '公告栏',
							split : true,
							width : '15%',
							html : '<marquee bgcolor=#ffffff direction=up height=600 scrollamount=2 scrolldelay=50 style="COLOR: #000000; class: " width=170 text-align: left? border="0" ;>[05月24日]××银行中间业务系统V1.0试运行...<br/><br/><br/>[5月24日]一期开发工作已完成，生产环境部署工作正式开始<br/><br/><br/>[5月24日]测试人员需加快测试进度，保证达到交付要求</marquee>'
						}, {
							region : 'center',
							items: [
								centerPanel
							]
						}
					]
				});
				//Ext.viewport end
				
				//Ext.toolbar.Toolbar start
				var toolbar = Ext.create('Ext.toolbar.Toolbar', {
					    renderTo : 'toolbar',
					    width : 1300,
						height : 30,
					    items: [
					        {
								text: '权限管理',
								iconCls: 'bmenu', 
					            menu: menu1
					        }, {
								text: '业务配置',
								iconCls: 'bmenu',
					            menu: menu2
					        }, {
								text: '其他',
								iconCls: 'bmenu',
								menu: menu3
							}, {
								text: '服务开通',
								iconCls: 'bmenu',
								menu: menu4
							}, {
								text: '报表查询统计',
								iconCls: 'bmenu',
								menu: menu5
							
							}, {
								text: '金额查询',
								iconCls: 'bmenu',
								menu: menu6
							}, {
								text: '关于',
								iconCls: 'bmenu',
								menu: menu7
							}, '->', {
								
							}
						]
				});				
				//Ext.toolbar.Toolbar end	
				//bottombar start
				var statusbar = Ext.create('Ext.Panel', {
					renderTo: 'statusbar',
			        width: 1300,
			       	height: 25,
			        bodyStyle: 'padding:5px;',
			        layout: 'fit',
			        bbar: Ext.create('Ext.ux.StatusBar', {
			            items: [currOperatorName, ' ', clock, ' ']
			        }),
			        listeners: {
			            render: {
			                fn: function(){
			                    Ext.fly(clock.getEl().parent()).addCls('x-status-text-panel').createChild({cls:'spacer'});
			                    // Kick off the clock timer that updates the clock el every second:
			                 	Ext.TaskManager.start({
			                     run: function(){
			                         Ext.fly(clock.getEl()).update(Ext.Date.format(new Date(), 'g:i:s A'));
			                     },
			                     interval: 1000
			                 });
			                },
			                delay: 100
			            }
			        }
			    });
			    //bottombar end
		});
	</script>

  </head>
  
  <body>
  	<div id="statusbar"></div>
	<div id="toolbar"></div>
	<div id="centerArea"></div>
	<div id="editor-grid"></div>
  </body>
</html>
