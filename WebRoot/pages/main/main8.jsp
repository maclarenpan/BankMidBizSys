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
    
    <title>My JSP 'main8.jsp' starting page</title>
    
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
		
		//model define start
		Ext.define('Operator', {
			extends: 'Ext.data.Model',
			fields: [
				{
					name: 'id',
					mapping: 'id'
				},
				'username',
				'password',
				'userType',
				'address',
				'linker',
				'linkerPhone',
				'role_id',
				'status',
				'createtime'
			]
		});
		
		Ext.define('operatorModel', {
			extend : 'Ext.data.Model',
			fields : [{
					name : 'id',
					type : 'int',
					useNull : true
				},
				'username',
				'password',
				'userType_id',
				'userTypeName',
				'address',
				'linker',
				'linkerPhone',
				'role_id',
				'roleName',
				'status_id',
				'statusName',
				'createtime'],
			validations : [{
					type : 'length',
					field : 'password',
					min : 1
				}
			]
		});
		
		Ext.define('userTypeModel', {
			extends : 'Ext.data.Model',
			fields : [{
				name: 'userType_id', type:'int'
				}, {
				name: 'userTypeName', type: 'string'
			}]
		});
		
		Ext.define('roleModel', {
			extends : 'Ext.data.Model',
			fields : [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
			}]
		});
		
		Ext.define('statusModel', {
			extends : 'Ext.data.Model',
			fields : [{
				name: 'status_id', type: 'string'
			}, {
				name: 'statusName', type: 'string'
			}]
		})
		//model define end
		
		//other define start
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor: 1,
			autoCancel: false
		});
		//other define end
		
		//store define start
		
		var personStore = Ext.create('Ext.data.Store', {
				model : 'operatorModel',
				autoLoad : true,
				autoSync : true,
				proxy : {
					type : 'ajax',
					api : {
						read : 'staff/operator.action?method=getAll',
						create : 'staff/operator.action?method=insert',
						update : 'staff/operator.action?method=update',
						destroy : 'staff/operator.action?method=delete'
					},
					reader : {
						type : 'json',
						root : 'operators',
						messageProperty : 'message'
					},
					writer : {
						type : 'json',
						writeAllFields : false,
						root : 'data'
					},
					listeners : {
						exception : function (proxy, response, operation) {
							Ext.MessageBox.show({
								title : 'REMOTE EXCEPTION',
								msg : operation.getError(),
								icon : Ext.MessageBox.ERROR,
								buttons : Ext.Msg.OK
							});
						}
					}
				},
				listeners : {
					write : function (proxy, operation) {
						if (operation.action == 'destroy') {
							Ext.Msg.alert("destroy operation");
						}
						Ext.example.msg(operation.action, operation.resultSet.message);
					}
				}
		});
	
		//store define start
		//用户类型下拉框
		
		var userTypeComboStore = new Ext.data.Store({
			fields: ['userType_id', 'userTypeName'],
			data: [{
				"userType_id": '1', "userTypeName": "big boss"
			}, {
				"userType_id": '2', "userTypeName": "middle boss"
			}, {
				"userType_id": '3', "userTypeName": "small boss"
			}]
		});
		
		//角色类型下拉框
		var roleComboStore = new Ext.data.Store({
			fields: ['role_id', 'roleName'],
			data: [{
				"role_id": '1', "roleName": "admin"
			}, {
				"role_id": '2', "roleName": "ceo"
			}, {
				"role_id": '3', "roleName": "developer"
			}]
		});
		
		//角色下拉框
		var statusComboStore = new Ext.data.Store({
			fields: ['status_id', 'statusName'],
			data: [{
				"status_id": 'injob', "statusName":"在职"
			}, {
				"status_id": 'outjob', "statusName":"离职"
			}]
		});
		
		//store define end
		
		//panel define start
		Ext.define('Writer.Form', {
			extend : 'Ext.form.Panel',
			alias : 'widget.writerform',
			requires : ['Ext.form.field.Text'],
			id : 'operatorForm',
			initComponent : function () {
			
				this.addEvents('create');
				Ext.apply(this, {
					activeRecord : null,
					iconCls : 'icon-user',
					frame : true,
					title : '添加操作员',
					defaultType : 'textfield',
					bodyPadding : 2,
					fieldDefaults : {
						anchor : '100%',
						labelAlign : 'right'
					},
					layout : {
						type : 'table',
						columns: 4
					},
					items : [{
							fieldLabel : 'Username',
							name : 'username',
							allowBlank : false, 
							width : 240
						}, {
							fieldLabel : 'Password',
							name : 'password',
							allowBlank : false,
							width : 240
						},{
							fieldLabel : 'UserType',
							id : 'userType_id',//id不能少
							xtype: 'combo',
							queryMode: 'local',
							valueField: 'userType_id',
							displayField: 'userTypeName',
							editable : false,
							name : 'userType_id',
							hiddenName: 'huserType_id',
							allowBlank : false,
							width : 240,
							store : userTypeComboStore,
							//联动根据下拉框设置隐藏域
							listeners : {
								select : function(combo, record, index){
									//alert(Ext.getCmp('userType_id').value);
									//alert(userTypeComboStore.find('userType_id', Ext.getCmp('userType_id').value));
									//alert(userTypeComboStore.getAt(userTypeComboStore.find('userType_id', Ext.getCmp('userType_id').value)).get('userTypeName'));
									var val = userTypeComboStore.getAt(userTypeComboStore.find('userType_id', Ext.getCmp('userType_id').value)).get('userTypeName');
									Ext.getCmp('hiddenUserTypeName').setValue(val);
								}
							}
						}, {
							fieldLabel : 'status',
							xtype : 'combo',
							queryMode: 'local',
							valueField: 'status_id',
							displayField: 'statusName',
							editable : false,
							id : 'status_id',
							name: 'status_id',
							allowBlank : false,
							width : 240,
							store : statusComboStore,
							listeners : {
								select : function(combo, record, index){
									var val = statusComboStore.getAt(statusComboStore.find('status_id', Ext.getCmp('status_id').value)).get('statusName');
									Ext.getCmp('hiddenStatusName').setValue(val);
								}
							}
						}, {
							fieldLabel : 'Linker',
							name : 'linker',
							allowBlank : true,
							width : 240
						}, {
							fieldLabel : 'LinkerPhone',
							name : 'linkerPhone',
							allowBlank : true,
							width : 240
						}, {
							fieldLabel : 'Role',
							xtype : 'combo',
							queryMode: 'local',
							valueField: 'role_id',
							displayField: 'roleName',
							editable : false,
							id : 'role_id',
							name : 'role_id',
							allowBlank : true,
							width : 240,
							store : roleComboStore,
							listeners : {
									select : function(combo, record, index){
										var val = roleComboStore.getAt(roleComboStore.find('role_id', Ext.getCmp('role_id').value)).get('roleName');
										Ext.getCmp('hiddenRoleName').setValue(val);
								}
							}
						}, {
							fieldLabel : 'hiddenUserTypeName',
							id : 'hiddenUserTypeName',
							name : 'userTypeName',
							hidden : true,//隐藏单元
							width : 0
						} , {
							fieldLabel : 'Address',
							name : 'address',
							allowBlank : true,
							colspan : 3,
							width : 720
						}, {
							fieldLabel : 'hiddenRoleName',
							id : 'hiddenRoleName',
							name : 'roleName',
							hidden : true,//隐藏单元
							width : 0
						}, {
							fieldLabel : 'hiddenStatusName',
							id : 'hiddenStatusName',
							name : 'statusName',
							hidden : true,//隐藏单元
							width : 0
						}, {
							fieldLabel : 'CreateTime',
							hidden : true,
							format: 'Y-m-d H:i:s',
							editable : false,
							name : 'createtime',
							renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
							allowBlank : true,
							value : new Date(),
							width : 0					
						}
					],
					dockedItems : [{
							xtype : 'toolbar',
							dock : 'bottom',
							ui : 'footer',
							items : ['->', {
									iconCls : 'icon-save',
									itemId : 'save',
									text : '保存',
									disabled : true,
									scope : this,
									handler : this.onSave
								}, {
									iconCls : 'icon-user-add',
									text : '新建',
									scope : this,
									handler : this.onCreate
								}, {
									iconCls : 'icon-reset',
									text : '重置',
									scope : this,
									handler : this.onReset
								}
							]
						}
					]
				});
				this.callParent();
			},
			
			setActiveRecord : function (record) {
				this.activeRecord = record;
				if (record) {
					this.down('#save').enable();
					this.getForm().loadRecord(record);
				} else {
					this.down('#save').disable();
					this.getForm().reset();
				}
			},
			
			onSave : function () {
				var active = this.activeRecord,
				form = this.getForm();
				
				if (!active) {
					return;
				}
				if (form.isValid()) {
					form.updateRecord(active);
					this.onReset();
				}
			},
			
			onCreate : function () {
				var form = this.getForm();
				if (form.isValid()) {
					this.fireEvent('create', this, form.getValues());
					form.reset();
				}
			},
			
			onReset : function () {
				this.setActiveRecord(null);
				this.getForm().reset();
			}
		});
		
		Ext.define('Writer.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.writergrid',
			
			requires : [
				'Ext.grid.plugin.CellEditing',
				'Ext.form.field.Text',
				'Ext.toolbar.TextItem'
			],
			
			initComponent : function () {
				
				this.editing = Ext.create('Ext.grid.plugin.CellEditing');
				Ext.apply(this, {
					iconCls : 'icon-grid',
					frame : true,
					plugins : [this.editing],
					dockedItems : [{
							xtype : 'toolbar',
							items : [{
									iconCls : 'icon-add',
									text : '添加',
									scope : this,
									handler : this.onAddClick
								}, {
									iconCls : 'icon-delete',
									text : '删除',
									disabled : false,
									itemId : 'delete',
									scope : this,
									handler : this.onDeleteClick
								}
							]
						}, {
							weight : 2,
							xtype : 'toolbar',
							dock : 'bottom',
							items : [{
									xtype : 'tbtext',
									text : '<b>@cfg</b>'
								}, '|', {
									text : '自动同步',
									enableToggle : true,
									pressed : true,
									tooltip : 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
									scope : this,
									toggleHandler : function (btn, pressed) {
										this.store.autoSync = pressed;
									}
								}, {
									text : '批量提交',
									enableToggle : true,
									pressed : true,
									tooltip : 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
									scope : this,
									toggleHandler : function (btn, pressed) {
										this.store.getProxy().batchActions = pressed;
									}
								}, {
									text : '提交全部数据',
									enableToggle : true,
									pressed : false,
									tooltip : 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
									scope : this,
									toggleHandler : function (btn, pressed) {
										this.store.getProxy().getWriter().writeAllFields = pressed;
									}
								}
							]
						}, {
							weight : 1,
							xtype : 'toolbar',
							dock : 'bottom',
							ui : 'footer',
							items : ['->', {
									iconCls : 'icon-save',
									text : '同步',
									scope : this,
									handler : this.onSync
								}
							]
						}, {
							xtype : 'pagingtoolbar',
							store : personStore, 
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'Id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'id'
						}, {
							header : 'Username',
							width : 100,
							sortable : true,
							dataIndex : 'username',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Password',
							width : 100,
							sortable : true,
							dataIndex : 'password',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'UserTypeId',
							hidden : true,//隐藏单元
							width : 100,
							sortable : true,
							dataIndex : 'userType_id',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'UserTypeName',
							width : 100,
							sortable : true,
							dataIndex : 'userTypeName',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Linker',
							width : 100,
							sortable : true,
							dataIndex : 'linker',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'LinkerPhone',
							width: 100,
							sortable : true,
							dataIndex : 'linkerPhone',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Role_id',
							hidden : true,//隐藏单元
							width : 100,
							sortable : true,
							dataIndex : 'role_id',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Role',
							width: 100,
							sortable : true,
							dataIndex : 'roleName',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Status_id',
							hidden : true,//隐藏单元
							width : 100,
							sortable : true,
							dataIndex : 'status_id',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Status',
							width: 100,
							sortable : true,
							dataIndex : 'statusName',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'CreateTime',
							width: 100,
							sortable : true,
							dataIndex : 'createtime',
							renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Address',
							flex : 1,//flex:1意味着不用指定列宽，剩下多少就制定多少
							sortable : true,
							dataIndex : 'address',
							field : {
								type : 'textfield'
							}
						}
					]
				});
				this.callParent();
				this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
			},
			
			onSelectChange : function (selModel, selections) {
				this.down('#delete').setDisabled(selections.length === 0);
			},
			
			onSync : function () {
				this.store.sync();
			},
			
			onDeleteClick : function () {
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection) {
					this.store.remove(selection);
				}
			},
			
			onAddClick : function () {
				var rec = new operatorModel({
						id : '',
						username : '',
						password : '',
						userType : '',
						address : '',
						linker : '',
						linkerPhone : '',
						role_id : '',
						status : '',
						createtime : ''
					}),
				edit = this.editing;
				
				edit.cancelEdit();
				this.store.insert(0, rec);
				edit.startEditByPosition({
					row : 0,
					column : 1
				});
			}
		});
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
								// stick any markup in a menu
								{
									text : '内部客户信息管理',
									group : 'theme',
									handler : addInnerStaffTab
								}, {
									text : '外部客户信息管理',
									group : 'theme',
									handler : addTab
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
									text : 'addTab3',
									group : 'theme',
									handler : addTab3
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
						
						text : '手续费率配置',
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
		//Ext.menu.Menu5 end
		
		//Ext.menu.Menu6 start
		var menu6 = Ext.create('Ext.menu.Menu', {
				id : 'mainMenu6',
				style : {
					overflow : 'visible' // For the Combo popup
				},
				items : [{
						text : '版本',
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
						text : '帮助',
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
		//Ext.menu.Menu6 end
		
		//menu function start
		function onItemClick(item) {
			Ext.MessageBox.alert('Menu Click', 'You clicked the "{0}" menu item.', item.text);
		}
		
		function onItemCheck(item, checked) {
			Ext.MessageBox.alert('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
		}
		
		function addInnerStaffTab() {
			centerPanel.add({
				title: '内部客户信息管理',
				iconCls: 'tabs',
				items: [
					
				],
				closable: true
			}).show();
		};
		
		function addTab() {
			centerPanel.add({
				title : 'New Tab ',
				iconCls : 'tabs',
				items: [
					
				],
				closable: true
			}).show();
		};
		
		function addOperatorTab(){
			centerPanel.add({
				title: '操作员信息管理',
				iconCls: 'tabs',
				items: [
				//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
					Ext.create('Ext.form.Panel', {
						width: 1005,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [
							{
								itemId : 'grid',
								xtype : 'writergrid',//这里是根据前面的widget.writegrid
								title : '人员信息列表',
								flex : 1,
								height : 600,
								store : personStore,
								listeners : {
									selectionchange : function (selModel, selected) {
									//	Ext.Msg.alert("before");
									//	Ext.getCmp('operatorForm').test();
									Ext.getCmp('operatorForm').setActiveRecord(selected[0] || null);
									//	Ext.getCmp('operatorForm').setActiveRecord(selected[0] || null);
										//main.child('#form').setActiveRecord(selected[0] || null);
										//Ext.Msg.alert("after");
									}
								}
							}, {
								itemId : 'form',
								xtype : 'writerform',
								height : 200,
								listeners : {
									create : function (form, data) {
										personStore.insert(0, data);
									}
								}
							}
						]
					})
				],
				closable: true
			}).show();
		};
		
		function addTab3(){
			centerPanel.add({
				title: 'tab3',
				iconCls: 'tabs',
				items: [],
				closable: true
			}).show();
		};
		//menu function end
		
		
				
		Ext.onReady(function () {
			var currentItem;
			Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
			
			//tabpanel start
			centerPanel = Ext.createWidget('tabpanel', {
				title : 'centerPanel',
				region : 'center',
				id : 'centerPanel',
				resizeTabs : true,
				enableTabScroll : true,
				width : 1280,
				height : 850,//这个heightһ一定要设够，不然tab会出现在不确定的地方
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
			//tabpanel end
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
							title : 'Starts at width 15%',
							split : true,
							width : '15%',
							html : 'west<br>I am floatable'
						}, {
							region : 'center',
							items: [
								centerPanel
							]
						},{
							region : 'east',
							collapsible : true,
							floatable : true,
							split : true,
							width : 100,
							title : 'East',
							layout : {
								type : 'vbox',
								padding : 5,
								align : 'stretch'
							},
							items : [{
									xtype : 'textfield',
									fieldLabel : 'Text field'
								}, {
									xtype : 'component',
									html : 'I am floatable'
								}
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
</html>
