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
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/resources/css/ext-all.css"></link>
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/examples/shared/example.css"></link>
	<link rel="stylesheet" type="text/css" href="${ctx}/style/TabCloseMenu.css"></link>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/ext-all.js"></script>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/examples/shared/examples.js"></script>
	<script type="text/javascript" src="${ctx}/js/TabCloseMenu.js"></script>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/examples/shared/example-data.js"></script>
	<style type="text/css">
	p {
		margin:5px;
	}
	.settings {
		background-image:url(${ctx}/ext-4.0.0/examples/shared/icons/fam/folder_wrench.png);
	}
	.nav {
		background-image:url(${ctx}/ext-4.0.0/examples/shared/icons/fam/folder_go.png);
	}
	.info {
		background-image:url(${ctx}/ext-4.0.0/examples/shared/icons/fam/information.png);
	}
	</style>
	<script type="text/javascript">
		Ext.Loader.setConfig({
			enabled: true
		});
		Ext.Loader.setPath('Ext.ux', '/bankapp/ext-4.0.0/examples/ux');
		Ext.require([
		  'Ext.grid.*',
		  'Ext.data.*',
		  'Ext.util.*',
		  'Ext.state.*',
		  'Ext.form.*',
		  'Ext.ux.CheckColumn',
		  'Ext.chart.*',
		  'Ext.layout.container.Fit',
		  '*'
		]);
		
    Ext.onReady(function() {

        Ext.QuickTips.init();
		//define a data model
		Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: [
            {
				name : 'id',
				mapping : 'id'
			},
            'username',
            'password',
            'phone',
            'gender',
            'birthday',
            'linker',
            'linkerPhone',
            'address',
            'createtime',
            'modifytime',
            'jobrank',
            'remark'
			]
		});
        
		//create the data store
		var store = Ext.create('Ext.data.Store', {
        // destroy the store if the grid is destroyed
			autoLoad: true,
			model: 'User',
			proxy: {
				type: 'ajax',
				url: 'login/view.action',
				reader: {
					type: 'json',
					root: 'users'
				}
			},
			sorters: [{
				property: 'username',
				direction: 'ASC'
			}]
		});
		
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor: 1,
			autoCancel: false
		});
		
		Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
		
		function onItemClick(item){
			Ext.MessageBox.alert('Menu Click', 'You clicked the "{0}" menu item.', item.text);
		}

		function onItemCheck(item, checked){
			Ext.MessageBox.alert('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
		}
		
		var index = 0;
		var currentItem;
		var centerTab = Ext.createWidget('tabpanel', {
				region: 'center',
				id: 'centerTab',
				resizeTabs: true,
				enableTabScroll: true,
				width: 1000,
				height: 800,
				default: {
					autoScroll: true,
					bodyPadding: 10
				},
				plugins: Ext.create('Ext.ux.TabCloseMenu', {
					extraItemsTail: [
						'-',
						{
							text: 'Closable',
							checked: true,
							handler: function(item) {
								currentItem.tab.setClosable(item.checked);
							}
						}
					],
					listeners: {
						aftermenu: function() {
							currentItem = null;
						},
						beforemenu: function() {
							var menuitem = menu.child('*[text="Closable"]');
							currentItem = item;
							menuitem.setChecked(item.closable);
						}
					}
				})
		});
        var viewport = Ext.create('Ext.Viewport', {
            id: 'border-example',
            layout: 'border',
            items: [
			{
				region: 'north',
				height: 25,
				items: [
					Ext.create('Ext.toolbar.Toolbar', {
					}).add({
						text: '后台管理',
						iconCls: 'bmenu',
						menu: Ext.create('Ext.menu.Menu', {
							id: 'MainMenu1',
							style: {
								overflow: 'visible'
							},
							items: [
								{
									text: '业务参数管理',
									menu: {
										items: [
											{
												text: '内部客户信息管理',
												handler: addTab
											}, {
												text: '外部客户信息管理',
												handler: addTab
											}, {
												text: '合作伙伴信息管理',
												handler: addTab
											}
										]
									}
								}, {
									text: '交易限制配置',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '手续费率配置',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '文件格式接口',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '打印模板配置',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '权限管理',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '其他',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}
							]
						})
					}, {
						text: '柜面交易',
						iconCls: 'bmenu',
						menu: Ext.create('Ext.menu.Menu', {
							id: 'MainMenu2',
							style: {
								overflow: 'visible'
							},
							items: [
								{
									text: '帐户类交易',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '资金类交易',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '柜员辅助交易',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '清算对帐交易',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}
							]
						})
					}, {
						text: '渠道接入',
						iconCls: 'bmenu',
						menu: Ext.create('Ext.menu.Menu', {
							id: 'MainMenu3',
							style: {
								overflow: 'visible'
							},
							items: [
								{
									text: '网上银行',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '电话银行',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '自动终端接入',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '其他渠道接入',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}
							]
						})
					}, {
						text: '自动化服务',
						iconCls: 'bmenu',
						menu: Ext.create('Ext.menu.Menu', {
							id: 'MainMenu4',
							style: {
								overflow: 'visible'
							},
							items: [
								{
									text: '批量文件',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '实时交易',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '自动化计费处理',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '清算对帐处理',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}
							]
						})
					}, {
						text: '报表查询统计',
						iconCls: 'bmenu',
						menu: Ext.create('Ext.menu.Menu', {
							id: 'MainMenu5',
							style: {
								overflow: 'visible'
							},
							items: [
								{
									text: '交易汇总统计',
									menu: {
										items: [
											{
												text: '交易汇总统计',
												handler: dealSummary
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '交易明细查询',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}, {
									text: '手续费统计',
									menu: {
										items: [
											{
												text: 'submenu1',
												handler: addTab
											}, {
												text: 'submenu2',
												handler: addTab
											}, {
												text: 'submenu3',
												handler: addTab
											}
										]
									}
								}
							]
						})
					})
				]
			}, {
                // lazily created panel (xtype:'panel' is default)
                region: 'south',
                contentEl: 'south',
                split: true,
                height: 100,
                minSize: 100,
                maxSize: 200,
                collapsible: true,
                collapsed: true,
                title: 'South',
                margins: '0 0 0 0'
            }, {
                xtype: 'tabpanel',
                region: 'east',
                title: 'East Side',
                dockedItems: [{
                    dock: 'top',
                    xtype: 'toolbar',
                    items: [ '->', {
                       xtype: 'button',
                       text: 'test',
                       tooltip: 'Test Button'
                    }]
                }],
                animCollapse: true,
                collapsible: true,
                split: true,
                width: 225, // give east and west regions a width
                minSize: 175,
                maxSize: 400,
                margins: '0 5 0 0',
                activeTab: 1,
                tabPosition: 'bottom',
                items: [{
                    html: '<p>A TabPanel component can be a region.</p>',
                    title: 'A Tab',
                    autoScroll: true
                }, Ext.create('Ext.grid.PropertyGrid', {
                        title: 'Property Grid',
                        closable: true,
                        source: {
                            "(name)": "Properties Grid",
                            "grouping": false,
                            "autoFitColumns": true,
                            "productionQuality": false,
                            "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
                            "tested": false,
                            "version": 0.01,
                            "borderWidth": 1
                        }
                    })]
            }, {
                region: 'west',
                id: 'west-panel', // see Ext.getCmp() below
                title: 'Navigation Info',
                split: true,
                width: 200,
                minWidth: 175,
                maxWidth: 400,
                collapsible: true,
                animCollapse: true,
                margins: '0 0 0 5',
                layout: 'accordion',
                items: [{
                    contentEl: 'west',
                    title: 'Menu Navigation',
                    iconCls: 'nav' // see the HEAD section for style used
                }, {
                    title: 'Menu2',
                    html: '<p>Some infomation</p>',
                    iconCls: 'settings'
                }, {
                    title: 'Menu3',
                    html: '<p>Some infomation</p>',
                    iconCls: 'info'
                }, {
					title: 'Menu4',
					html: '<p>Some infomation</p>',
					iconCls: 'info'
				}, {
					title: 'Menu5',
					html: '<p>Some information</p>',
					iconCls: 'info'
				}, {
					title: 'Menu6',
					html: '<p>Some Infomation</p>',
					iconCls: 'info'
				}]
            },
            // in this instance the TabPanel is not wrapped by another panel
            // since no title is needed, this Panel is added directly
            // as a Container
			{
				region: 'center',
				items: [
					centerTab
				]
			}
			
		   ]
        });
        // get a reference to the HTML element with id "hideit" and add a click listener to it
        Ext.get("hideit").on('click', function(){
            // get a reference to the Panel that was created with id = 'west-panel'
            var w = Ext.getCmp('west-panel');
            // expand or collapse that Panel based on its collapsed property state
            w.collapsed ? w.expand() : w.collapse();
        });

		function addTab() {
			++index;
			centerTab.add({
				title: '内部客户信息管理',
				iconCls: 'tabs',
				items: [
					Ext.create('Ext.grid.Panel', {
						store : store,
						columns : [{
								header : 'Username',
								dataIndex : 'username',
								width: 100,
								editor : {
									// defaults to textfield if no xtype is supplied
									allowBlank : false
								}
							}, {
								header : 'Password',
								dataIndex : 'password',
								width : 100,
								editor : {
									allowBlank : false,
								}
							}, {
								header: 'Phone',
								dataIndex: 'phone',
								width: 100,
								editor: {
									allowBlank: false
								}
							}, {
								header : 'Gender',
								dataIndex : 'gender',
								width : 100,
								editor : {
									allowBlank : false,
								}
							}, {
								header: 'Birthday',
								dataIndex: 'birthday',
								width: 100,
								editor: {
									allowBlank: false
								}
							}, {
								header : 'Linker',
								dataIndex : 'linker',
								width : 100,
								editor : {
									allowBlank : false,
								}
							}, {
								header: 'LinkerPhone',
								dataIndex: 'linkerPhone',
								width: 100,
								editor: {
									allowBlank: false
								}
							}, {
								header : 'Address',
								dataIndex : 'address',
								width : 100,
								editor : {
									allowBlank : false,
								}
							}, {
								header: 'CreateTime',
								dataIndex: 'createtime',
								width: 100,
								editor: {
									allowBlank: false
								}
							}, {
								header : 'ModifyTime',
								dataIndex : 'modifytime',
								width : 100,
								editor : {
									allowBlank : false,
								}
							}, {
								header: 'JobRank',
								dataIndex: 'jobrank',
								width: 100,
								editor: {
									allowBlank: false
								}
							}, {
								header : 'Remark',
								dataIndex : 'remark',
								width : 100,
								editor : {
									allowBlank : false,
								}
							}
						],
						renderTo : 'editor-grid',
						width : 840,
						maxWidth: 1000,
						mixWidth: 840,
						height : 600,
						title : 'Employee Salaries',
						frame : true,
						tbar : [{
								text : 'Add Employee',
								iconCls : 'employee-add',
								handler : function () {
									rowEditing.cancelEdit();
									
									// Create a record instance through the ModelManager
									var r = Ext.ModelManager.create({
											name : 'New Guy',
											email : 'new@sencha-test.com',
											start : new Date(),
											salary : 50000,
											active : true
										}, 'Employee');
									
									store.insert(0, r);
									rowEditing.startEdit(0, 0);
								}
							}, {
								itemId : 'removeEmployee',
								text : 'Remove Employee',
								iconCls : 'employee-remove',
								handler : function () {
									var sm = grid.getSelectionModel();
									rowEditing.cancelEdit();
									store.remove(sm.getSelection());
									sm.select(0);
								},
								disabled : true
							}
						],
						plugins : [rowEditing],
						listeners : {
							'selectionchange' : function (view, records) {
								grid.down('#removeEmployee').setDisabled(!records.length);
							}
						}
					})
				],
				closable: true
			}).show();
		}
		
		function dealSummary()
		{
			++index;
			centerTab.add({
				title: '交易汇总统计',
				iconCls: 'tabs',
				items: [
					Ext.create('widget.panel', {
			frame: true,
        	width: 840,
        	height: 600,
        	title: '交易汇总统计',
        	renderTo: 'editor-grid',
        	layout: {
        		type: 'vbox',
        		align: 'stretch'
        	},
        	items: [{
        		width: 840,
        		height: 300,
        	    xtype: 'chart',
        	    animate: true,
        	    store: store1,
        	    insetPadding: 30,
        	    axes: [{
        	        type: 'Numeric',
        	        minimum: 0,
        	        position: 'left',
        	        fields: ['data1'],
        	        title: false,
        	        grid: true,
        	        label: {
       	 	           renderer: Ext.util.Format.numberRenderer('0,0'),
         	           font: '10px Arial'
         	       }
         	   }, {
                	type: 'Category',
                	position: 'bottom',
                	fields: ['name'],
                	title: false,
                	label: {
                	    font: '11px Arial',
                	    renderer: function(name) {
                	        return name.substr(0, 3) + ' 07';
                	    }
                	}
            	}],
           	 	series: [{
                	type: 'line',
                	axis: 'left',
                	xField: 'name',
                	yField: 'data1',
                	listeners: {
                	  itemmouseup: function(item) {
                	      Ext.example.msg('Item Selected', item.value[1] + ' visits on ' + Ext.Date.monthNames[item.value[0]]);
                  	  }  
                	},
                	tips: {
                    	trackMouse: true,
                    	width: 80,
                    	height: 40,
                    	renderer: function(storeItem, item) {
                    	    this.setTitle(storeItem.get('name') + '<br />' + storeItem.get('data1'));
                    	}
                	},
                	style: {
                	    fill: '#38B8BF',
                	    stroke: '#38B8BF',
                	    'stroke-width': 3
                	},
                	markerConfig: {
                    	type: 'circle',
                    	size: 4,
                    	radius: 4,
                    	'stroke-width': 0,
                    	fill: '#38B8BF',
                    	stroke: '#38B8BF'
                	}
            	}]
        	}, {
        		layout: {
        			type: 'hbox',
        			align: 'left'
        		},
        		border: false, 
        		flex: 3,
        		items: [
        		{
        			margin: '5',
                    xtype: 'fieldset',
                    flex: 1,
                    title:'Query Condition',
                    defaults: {
                        width: 540,
                        labelWidth: 90
                    },
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'start',
                        name: 'start',
                    },{
                        fieldLabel: 'end',
                        name: 'end',
                      
                    },{
                        fieldLabel: 'company',
                        name: 'company',
                    
                    }],
        			buttons: [{
            			text: 'Load',
            			handler: function(){
                			formPanel.getForm().load({
                    		url: 'xml-form-data.xml',
                    		waitMsg: 'Loading...'
                			});
            			}
        			}, {
            			text: 'Submit',
            			disabled: true,
            			formBind: true,
            			handler: function(){
                			this.up('form').getForm().submit({
                    		url: 'xml-form-errors.xml',
                    		submitEmptyText: false,
                    		waitMsg: 'Saving Data...'
                			});
            			}
        			}]
        		}, {

        		}]
        	}]
    		})
				],
				closable: true
			}).show();
		}
    });
	</script>
  </head>
  
  <body>
    <div id="top"><font size="5">银行中间业务系统</font></div>
	  <!-- use class="x-hide-display" to prevent a brief flicker of the content -->
    <div id="west" class="x-hide-display">
        <p>Hi. I'm the west panel.</p>
    </div>
    <div id="center2" class="x-hide-display">
        <a id="hideit" href="#">Toggle the west region</a>
        <p>My closable attribute is set to false so you can't close me. The other center panels can be closed.</p>
        <p>The center panel automatically grows to fit the remaining space in the container that isn't taken up by the border regions.</p>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna. Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt diam nec urna. Curabitur velit. Quisque dolor magna, ornare sed, elementum porta, luctus in, leo.</p>
        <p>Donec quis dui. Sed imperdiet. Nunc consequat, est eu sollicitudin gravida, mauris ligula lacinia mauris, eu porta dui nisl in velit. Nam congue, odio id auctor nonummy, augue lectus euismod nunc, in tristique turpis dolor sed urna. Donec sit amet quam eget diam fermentum pharetra. Integer tincidunt arcu ut purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla blandit malesuada odio. Nam augue. Aenean molestie sapien in mi. Suspendisse tincidunt. Pellentesque tempus dui vitae sapien. Donec aliquam ipsum sit amet pede. Sed scelerisque mi a erat. Curabitur rutrum ullamcorper risus. Maecenas et lorem ut felis dictum viverra. Fusce sem. Donec pharetra nibh sit amet sapien.</p>
        <p>Aenean ut orci sed ligula consectetuer pretium. Aliquam odio. Nam pellentesque enim. Nam tincidunt condimentum nisi. Maecenas convallis luctus ligula. Donec accumsan ornare risus. Vestibulum id magna a nunc posuere laoreet. Integer iaculis leo vitae nibh. Nam vulputate, mauris vitae luctus pharetra, pede neque bibendum tellus, facilisis commodo diam nisi eget lacus. Duis consectetuer pulvinar nisi. Cras interdum ultricies sem. Nullam tristique. Suspendisse elementum purus eu nisl. Nulla facilisi. Phasellus ultricies ullamcorper lorem. Sed euismod ante vitae lacus. Nam nunc leo, congue vehicula, luctus ac, tempus non, ante. Morbi suscipit purus a nulla. Sed eu diam.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras imperdiet felis id velit. Ut non quam at sem dictum ullamcorper. Vestibulum pharetra purus sed pede. Aliquam ultrices, nunc in varius mattis, felis justo pretium magna, eget laoreet justo eros id eros. Aliquam elementum diam fringilla nulla. Praesent laoreet sapien vel metus. Cras tempus, sapien condimentum dictum dapibus, lorem augue fringilla orci, ut tincidunt eros nisi eget turpis. Nullam nunc nunc, eleifend et, dictum et, pharetra a, neque. Ut feugiat. Aliquam erat volutpat. Donec pretium odio nec felis. Phasellus sagittis lacus eget sapien. Donec est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        <p>Vestibulum semper. Nullam non odio. Aliquam quam. Mauris eu lectus non nunc auctor ullamcorper. Sed tincidunt molestie enim. Phasellus lobortis justo sit amet quam. Duis nulla erat, varius a, cursus in, tempor sollicitudin, mauris. Aliquam mi velit, consectetuer mattis, consequat tristique, pulvinar ac, nisl. Aliquam mattis vehicula elit. Proin quis leo sed tellus scelerisque molestie. Quisque luctus. Integer mattis. Donec id augue sed leo aliquam egestas. Quisque in sem. Donec dictum enim in dolor. Praesent non erat. Nulla ultrices vestibulum quam.</p>
        <p>Duis hendrerit, est vel lobortis sagittis, tortor erat scelerisque tortor, sed pellentesque sem enim id metus. Maecenas at pede. Nulla velit libero, dictum at, mattis quis, sagittis vel, ante. Phasellus faucibus rutrum dui. Cras mauris elit, bibendum at, feugiat non, porta id, neque. Nulla et felis nec odio mollis vehicula. Donec elementum tincidunt mauris. Duis vel dui. Fusce iaculis enim ac nulla. In risus.</p>
        <p>Donec gravida. Donec et enim. Morbi sollicitudin, lacus a facilisis pulvinar, odio turpis dapibus elit, in tincidunt turpis felis nec libero. Nam vestibulum tempus ipsum. In hac habitasse platea dictumst. Nulla facilisi. Donec semper ligula. Donec commodo tortor in quam. Etiam massa. Ut tempus ligula eget tellus. Curabitur id velit ut velit varius commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Fusce ornare pellentesque libero. Nunc rhoncus. Suspendisse potenti. Ut consequat, leo eu accumsan vehicula, justo sem lobortis elit, ac sollicitudin ipsum neque nec ante.</p>
        <p>Aliquam elementum mauris id sem. Vivamus varius, est ut nonummy consectetuer, nulla quam bibendum velit, ac gravida nisi felis sit amet urna. Aliquam nec risus. Maecenas lacinia purus ut velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet dui vitae lacus fermentum sodales. Donec varius dapibus nisl. Praesent at velit id risus convallis bibendum. Aliquam felis nibh, rutrum nec, blandit non, mattis sit amet, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam varius dignissim nibh. Quisque id orci ac ante hendrerit molestie. Aliquam malesuada enim non neque.</p>
    </div>
    <div id="center1" class="x-hide-display">
        <p><b>Done reading me? Close me by clicking the X in the top right corner.</b></p>
        <p>Vestibulum semper. Nullam non odio. Aliquam quam. Mauris eu lectus non nunc auctor ullamcorper. Sed tincidunt molestie enim. Phasellus lobortis justo sit amet quam. Duis nulla erat, varius a, cursus in, tempor sollicitudin, mauris. Aliquam mi velit, consectetuer mattis, consequat tristique, pulvinar ac, nisl. Aliquam mattis vehicula elit. Proin quis leo sed tellus scelerisque molestie. Quisque luctus. Integer mattis. Donec id augue sed leo aliquam egestas. Quisque in sem. Donec dictum enim in dolor. Praesent non erat. Nulla ultrices vestibulum quam.</p>
        <p>Duis hendrerit, est vel lobortis sagittis, tortor erat scelerisque tortor, sed pellentesque sem enim id metus. Maecenas at pede. Nulla velit libero, dictum at, mattis quis, sagittis vel, ante. Phasellus faucibus rutrum dui. Cras mauris elit, bibendum at, feugiat non, porta id, neque. Nulla et felis nec odio mollis vehicula. Donec elementum tincidunt mauris. Duis vel dui. Fusce iaculis enim ac nulla. In risus.</p>
        <p>Donec gravida. Donec et enim. Morbi sollicitudin, lacus a facilisis pulvinar, odio turpis dapibus elit, in tincidunt turpis felis nec libero. Nam vestibulum tempus ipsum. In hac habitasse platea dictumst. Nulla facilisi. Donec semper ligula. Donec commodo tortor in quam. Etiam massa. Ut tempus ligula eget tellus. Curabitur id velit ut velit varius commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Fusce ornare pellentesque libero. Nunc rhoncus. Suspendisse potenti. Ut consequat, leo eu accumsan vehicula, justo sem lobortis elit, ac sollicitudin ipsum neque nec ante.</p>
        <p>Aliquam elementum mauris id sem. Vivamus varius, est ut nonummy consectetuer, nulla quam bibendum velit, ac gravida nisi felis sit amet urna. Aliquam nec risus. Maecenas lacinia purus ut velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sit amet dui vitae lacus fermentum sodales. Donec varius dapibus nisl. Praesent at velit id risus convallis bibendum. Aliquam felis nibh, rutrum nec, blandit non, mattis sit amet, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam varius dignissim nibh. Quisque id orci ac ante hendrerit molestie. Aliquam malesuada enim non neque.</p>
    </div>
	<div id="editor-grid"></div>
	<div id="crud-grid"></div>
    <div id="props-panel" class="x-hide-display" style="width:200px;height:200px;overflow:hidden;">
    </div>
    <div id="south" class="x-hide-display">
        <p>south - generally for informational stuff, also could be for status bar</p>
    </div>
  </body>
</html>
