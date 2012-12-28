<%@ page language="java" import="java.util.*" pageEncoding="utf8"%>
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
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/resources/css/ext-all.css"></link>
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/examples/shared/example.css"></link>
	<link rel="stylesheet" type="text/css" href="${ctx}/style/TabCloseMenu.css"></link>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/ext-all.js"></script>
  	<script type="text/javascript" src="${ctx}/ext-4.0.0/examples/shared/examples.js"></script>
 	<script type="text/javascript" src="${ctx}/ext-4.0.0/examples/shared/example-data.js"></script>

	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript">
		//这里centerPanel设为全局变量，不然addtab()找不到变量
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
		  'Ext.window.MessageBox',
		  'Ext.tip.QuickTipManager',
		  'Ext.ux.CheckColumn',
		  'Ext.chart.*',
		  'Ext.layout.container.Fit',
		  'Ext.ux.TabCloseMenu',
		  '*'
		]);
		
		//other define start
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor: 1,
			autoCancel: false
		});
		//other define end
		
		//selectionModel定义 start
		var sm1 = Ext.create('Ext.selection.CheckboxModel');
		var sm2 = Ext.create('Ext.selection.CheckboxModel');
		var sm3 = Ext.create('Ext.selection.CheckboxModel');
		var sm4 = Ext.create('Ext.selection.CheckboxModel');
		//selectionModel定义 end
		
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
								// stick any markup in a menu
								{
									text : '客户信息管理',
									group : 'theme',
									handler : addGuestTab
								}, {
									text : '代理用户信息管理',
									group : 'theme',
									handler : addProxyUserTab
								}, {
									text : '操作员信息管理',
									group : 'theme',
									handler : addOperatorTab
								}
							]
						}
					}, {
						text : '业务参数配置',
						menu : { // <-- submenu by nested config object
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						
						text : '交易限制配置',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						
						text : '费率配置',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						
						text : '文件格式接口',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						
						text : '打印模板配置',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
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
					}, {
						text : '其他',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}
				]
			});
		//Ext.menu.Menu1.end
		
		//Ext.menu.Menu2 start
		var menu2 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu2',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : 'menu1',
						menu : { // <-- submenu by nested config object
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						text : 'menu2',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}
				]
			});
		//Ext.menu.Menu2.end
		
		//Ext.menu.Menu3 start
		var menu3 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu3',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '接入机构信息配置',
						menu : { // <-- submenu by nested config object
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						text : '接入配置',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'ATM机接入配置',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'POS机接入配置',
									group : 'theme',
									handler : onItemCheck
								}]
						}
					}, {
						text: '接入信息',
						menu: {
							items: [{
								text: '代理接入信息',
								group: 'theme',
								handler: onItemCheck
							}]
						}
					}
				]
			});
		//Ext.menu.Menu3.end
		
		//Ext.menu.Menu4 start
		var menu4 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu4',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : 'menu1',
						menu : { // <-- submenu by nested config object
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}, {
						text : 'menu2',
						menu : {
							items : [
								// stick any markup in a menu
								{
									text : 'submenu1',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu2',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu3',
									group : 'theme',
									handler : onItemCheck
								}, {
									text : 'submenu4',
									group : 'theme',
									handler : onItemCheck
								}
							]
						}
					}
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
		//Ext.menu.Menu6 end
		
		
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
							html : '××银行中间业务系统V1.0开发中...'
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
					    width : 1280,
						height : 30,
					    items: [
					        {
								text: '后台管理',
								iconCls: 'bmenu', 
					            menu: menu1
					        }, {
								text: '柜面交易',
								iconCls: 'bmenu',
					            menu: menu2
					        }, {
								text: '渠道接入',
								iconCls: 'bmenu',
								menu: menu3
							}, {
								text: '自动化服务',
								iconCls: 'bmenu',
								menu: menu4
							}, {
								text: '报表查询统计',
								iconCls: 'bmenu',
								menu: menu5
							
							}, {
								text: '关于',
								iconCls: 'bmenu',
								menu: menu6
							},'->', {
								xtype : 'textfield',
								name : 'field1',
								emptyText : 'enter search term'
							}
						]
				});
				//Ext.toolbar.Toolbar end	
		});
	</script>

  </head>
  
  <body>
	<div id="toolbar"></div>
	<div id="centerArea"></div>
	<div id="editor-grid"></div>
  </body>
  <script type="text/javascript" src="${ctx}/js/branch11/auth11.js"></script>
  <script type="text/javascript" src="${ctx}/js/branch11/model11.js"></script>
  <script type="text/javascript" src="${ctx}/js/branch11/report11.js"></script>
  <script type="text/javascript" src="${ctx}/js/branch11/staff11.js"></script>
  <script type="text/javascript" src="${ctx}/js/branch11/store11.js"></script>
  <script type="text/javascript" src="${ctx}/js/branch11/tabfunction11.js"></script>
</html>
