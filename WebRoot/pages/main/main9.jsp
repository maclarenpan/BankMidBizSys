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
			extend: 'Ext.data.Model',
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
		
		Ext.define('guestModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name : 'id',
				type : 'int',
				useNull : true
			}, 
			'guestType_id',
			'guestTypeName',
			'username',
			'password',
			'phone',
			'gender_id',
			'genderName',
			'birthday',
			'linker',
			'linkerPhone',
			'address',
			'createtime',
			'remark'
			]
		});
		
		//代理用户model
		Ext.define('proxyUserModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id',
				type: 'int',
				useNull: true
			}, 
			'account_id',
			'proxyUserType_id',
			'proxyUserTypeName',
			'username',
			'password',
			'linker',
			'linkerPhone',
			'phone',
			'address',
			'creditLevel',
			'proxyUserStatus_id',
			'proxyUserStatusName',
			'createtime']
		});
		
		Ext.define('authModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'authName', type: 'string'
			}, {
				name: 'authCode', type: 'string'
			}]
		});
		
		Ext.define('reverseAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'auth_id', type: 'int'
			}, {
				name: 'operator_id', type: 'int'
			}]
		});
		
		Ext.define('customAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'auth_id', type: 'int'
			}, {
				name: 'operator_id', type: 'int'
			}]
		});
		
		Ext.define('userTypeModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'userType_id', type:'int'
				}, {
				name: 'userTypeName', type: 'string'
			}]
		});
		
		Ext.define('roleModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
			}]
		});
		
		Ext.define('statusModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'status_id', type: 'string'
			}, {
				name: 'statusName', type: 'string'
			}]
		});
		
		Ext.define('guestTypeModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name : 'guestType_id', type: 'int'
			}, {
				name : 'gusetTypeName', type: 'string'
			}]
		});
		
		Ext.define('genderTypeModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name : 'gender_id', type: 'string'
			}, {
				name : 'genderName', type: 'string'
			}]
		});
		
		Ext.define('proxyUserType', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'proxyUserType_id', type: 'int'
			}, {
				name: 'proxyUserTypeName', type: 'string'
			}]
		});
		
		Ext.define('proxyUserStatus', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'proxyUserStatus_id', type: 'string'
			}, {
				name: 'proxyUserStatusName', type: 'string'
			}]
		});
		
		Ext.define('authModel', {
			extend : 'Ext.data.Model',
			fields : ['authType', 'authCode', 'authName']
		});
		
		Ext.define('Role', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
			}]
		});
		
		//model define end
		
		//other define start
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor: 1,
			autoCancel: false
		});
		//other define end
		
		//store define start
		//操作员store
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
		
		//客户store
		var guestStore = Ext.create('Ext.data.Store', {
			model : 'guestModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'staff/guest.action?method=getAll',
					create : 'staff/guest.action?method=insert',
					update : 'staff/guest.action?method=update',
					destroy : 'staff/guest.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'guests',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'guests'
				},
				listeners : {
					exception : function(proxy, response, operation) {
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
				write : function(proxy, operation) {
					if (operation.action == 'destroy') {
						Ext.Msg.alert("destroy operation");
					}
					Ext.example.msg(operation.action, operation.resultSet.message);
				}
			}
		});
		
		//代理用户store
		var proxyUserStore = Ext.create('Ext.data.Store', {
			model : 'proxyUserModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'staff/proxyUser.action?method=getAll',
					create : 'staff/proxyUser.action?method=insert',
					update : 'staff/proxyUser.action?method=update',
					destroy : 'staff/proxyUser.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'proxyUsers',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'proxyUsers'
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
		
		var roleStore = Ext.create('Ext.data.Store', {
			model : 'roleModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/role.action?method=getAll',
					create : 'auth/role.action?method=insert',
					update : 'auth/role.action?method=update',
					destroy : 'auth/role.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'roles',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'roles'
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
		
		var auth1Store = Ext.create('Ext.data.Store', {
			model : 'authModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/auth.action?method=getAll',
					create : 'auth/auth.action?method=insert',
					update : 'auth/auth.action?method=update',
					destroy : 'auth/auth.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'auths',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'auths'
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
		
		var authStore = Ext.create('Ext.data.Store', {
				model : 'authModel',
				sorters : ['auth_id', 'authType', 'authCode', 'authName'],
				groupField : 'authType',
				data : [{
						auth_id: 1,
						authType: '正向权限',
						authCode: 'SuperAdmin',
						authName: '超级管理员'
					}, {
						auth_id: 2,
						authType: '正向权限',
						authCode: 'QueryGuestInfo',
						authName: '查看客户信息'
					}, {
						auth_id: 3,
						authType: '正向权限',
						authCode: 'QueryProxyUserInfo',
						authName: '查看代理用户信息'
					}, {
						auth_id: 4,
						authType : '反向权限',
						authCode : 'QueryReport',
						authName : '报表查询'
					}, {
						auth_id: 5,
						authType : '反向权限',
						authCode : 'InsertOperator',
						authName : '人员添加'
					}
				]
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
		
		//客户类型下拉框
		var guestTypeComboStore = new Ext.data.Store({
			fields : ['guestType_id', 'guestTypeName'],
			data : [{
				"guestType_id": "1", "guestTypeName" : "vip"
			}, {
				"guestType_id": "2", "guestTypeName" : "common"
			}]
		});
		
		//性别下拉框
		var genderComboStore = new Ext.data.Store({
			fields : ['gender_id', 'genderName'],
			data : [{
				"gender_id": "male", "genderName": "男"
			}, {
				"gender_id": "female", "genderName": "女"
			}]
		});
		
		//代理类型下拉框
		var proxyUserTypeComboStore = new Ext.data.Store({
			fields: ['proxyUserType_id', 'proxyUserTypeName'],
			data: [{
				"proxyUserType_id": "1", "proxyUserTypeName": "vip"
			}, {
				"proxyUserType_id": "2", "proxyUserTypeName": "common"
			}]
		});
		
		//代理用户状态下拉框
		var proxyUserStatusComboStore = new Ext.data.Store({
			fields: ['proxyUserStatus_id', 'proxyUserStatusName'],
			data: [{
				"proxyUserStatus_id": "actived", "proxyUserStatusName": "已激活"
			}, {
				"proxyUserStatus_id": "canceled", "proxyUserStatusName": "已注销"
			}, {
				"proxyUserStatsu_id": "haultd", "proxyUserStatsuName": "已挂起"
			}]
		});
		//store define end
		
		//selectionModel定义 start
		var sm1 = Ext.create('Ext.selection.CheckboxModel');
		var sm2 = Ext.create('Ext.selection.CheckboxModel');
		var sm3 = Ext.create('Ext.selection.CheckboxModel');
		var sm4 = Ext.create('Ext.selection.CheckboxModel');
		//selectionModel定义 end
		
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
						createtime : new Date()
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
		
		
		//客户form
		Ext.define('Guest.Form', {
			extend : 'Ext.form.Panel',
			alias : 'widget.guestform',
			requires : ['Ext.form.field.Text'],
			id : 'guestForm',
			initComponent : function() {
				this.addEvents('create');
				Ext.apply(this, {
					activeRecord : null,
					iconCls : 'icon-user',
					frame : true,
					title : '添加客户',
					defaultType : 'textfield',
					bodyPadding : 2,
					fieldDefaults : {
						anchor : '100%',
						labelAlign : 'right'
					},
					layout : {
						type : 'table',
						columns : 4
					},
					items : [{
						fieldLabel : 'GuestName',
						name : 'username',
						allowBlank : false,
						width : 240
					}, {
						fieldLabel : 'Password',
						name : 'password',
						allowBlank : false,
						width : 240,
					}, {
						fieldLabel: 'Phone',
						name: 'phone',
						allowBlank: true,
						width: 240
					}, {
						fieldLabel: 'Birthday',
						xtype: 'datefield',
						format: 'Y-m-d',
						name: 'birthday',
						allowBlank: true,
						width: 240
					}, {
						fieldLabel: 'Linker',
						name: 'linker',
						allowBlank: true,
						width: 240
					}, {
						fieldLabel: 'LinkerPhone',
						name: 'linkerPhone',
						allowBlank: true,
						width: 240
					}, {
						fieldLabel : 'Gender',
						xtype : 'combo',
						queryMode : 'local',
						valueField: 'gender_id',
						displayField: 'genderName',
						editable: false,
						id: 'gender_id',
						name: 'gender_id',
						hiddenName: 'hgender_id',
						width: 240,
						store: genderComboStore,
						listeners : {
							select : function(combo, record, index) {
								var val = genderComboStore.getAt(genderComboStore.find('gender_id', Ext.getCmp('gender_id').value)).get('genderName');
								Ext.getCmp('hiddenGenderName').setValue(val);
							}
						}
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
					}, {
						fieldLabel: 'Remark',
						name: 'remark',
						allow: true,
						colspan: 3,
						width: 720
					}, {
						fieldLabel : 'GenderName',
						name : 'genderName',
						id: 'hiddenGenderName',
						hidden : true,
						width : 0
					}, {
						fieldLabel: 'Address',
						name: 'address',
						allowBlank: true,
						colspan: 3,
						width: 720
					}],
					dockedItems: [{
						xtype: 'toolbar',
						dock: 'bottom',
						ui: 'footer',
						items: ['->', {
							iconlCls: 'icon-save',
							itemId: 'saveGuest',
							text: '保存',
							disabled: true,
							scope: this,
							handler: this.onSave
						}, {
							iconCls: 'icon-user-add',
							text: '新建',
							scope: this,
							handler: this.onCreate
						}, {
							iconCls: 'icon-reset',
							text: '重置',
							scope: this,
							handler: this.onReset
						}]
					}]
				});
				this.callParent();
			},
			setActiveRecord: function(record){
				this.activeRecord = record;
				if (record) {
					this.down('#saveGuest').enable();
					this.getForm().loadRecord(record);
				}
				else { 
					this.down('#saveGuest').disable();
					this.getForm().reset();
				}
			},
			onSave: function() {
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
			onCreate: function(){
				var form = this.getForm();
				if (form.isValid()){
					this.fireEvent('create', this, form.getValues());
					form.reset();
				}
			},
			onReset: function() {
				this.setActiveRecord(null);
				this.getForm().reset();
			}
		});
		
		//客户grid
		Ext.define('Guest.Grid', {
			extend: 'Ext.grid.Panel',
			alias: 'widget.guestgrid',
			requires: [
				'Ext.grid.plugin.CellEditing',
				'Ext.form.field.Text',
				'Ext.toolbar.TextItem'
			],
			initComponent: function(){
				this.editing = Ext.create('Ext.grid.plugin.CellEditing');
				Ext.apply(this, {
					iconCls: 'icon-grid',
					frame: true,
					plugins: [this.editing],
					dockedItems: [{
						xtype: 'toolbar',
						items: [{
							iconCls: 'icon-add',
							text: '添加',
							scope: this,
							handler: this.onAddClick
						}, {
							iconCls: 'icon-delete',
							text: '删除',
							disabled: false,
							itemId: 'delete',
							scope: this,
							handler: this.onDeleteClick
						}]
					}, {
						weight: 2,
						xtype: 'toolbar',
						dock: 'bottom',
						items: [{
							xtype: 'tbtext',
							text: '<b>@cfg</b>'
						}, '|', {
							text: '自动同步',
							enableToggle: true,
							pressed: true,
							tooltip: 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
							scope: this,
							toggleHandler: function(btn, pressed){
								this.store.autoSync = pressed;
							}
						}, {
							text: '批量提交',
							enableToggle: true,
							pressed: true,
							tooltipo: 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
							scope: this,
							toggleHandler: function(btn, pressed){
								this.store.getProxy().batchActions = pressed;	
							}
						}, {
							text: '提交全部数据',
							enableToggle: true,
							pressed: false,
							tooltip: 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
							scope: this,
							toggleHandler: function(btn, pressed){
								this.store.getProxy().getWriter.writeAllFields = pressed;
							}
						}]
					}, {
						weight: 1,
						xtype: 'toolbar',
						dock: 'bottom',
						ui: 'footer',
						items: ['->', {
							iconCls: 'icon-save',
							text: '同步',
							scope: this,
							handler: this.onSync
						}]
					}, {
						xtype: 'pagingtoolbar',
						store: guestStore,
						dock: 'bottom',
						displayInfo: true
					}],
					columns: [{
						text: 'Id',
						hidden: true,
						sortable: true,
						dataIndex: 'id'
					}, {
						text: 'username',
						width: 100,
						sortable: true,
						dataIndex: 'username',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'password',
						width: 100,
						sortable: true,
						dataIndex: 'password',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'gender_id',
						hidden: true,
						width: 100,
						sortable: true,
						dataIndex: 'gender_id',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'gender',
						width: 100,
						sortable: true,
						dataIndex: 'genderName',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'Phone',
						width: 100,
						sortable: true,
						dataIndex: 'phone',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'Birthday',
						width: 100,
						sortable: true,
						dataIndex: 'birthday',
						renderer: Ext.util.Format.dateRenderer('Y-m-d'),
						field: {
							type: 'textfield'
						}
					}, {
						text: 'Linker',
						width: 100,
						sortable: true,
						dataIndex: 'linker',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'LinkerPhone',
						width: 100,
						sortable: true,
						dataIndex: 'linkerPhone',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'Address',
						width: 100,
						sortable: true,
						dataIndex: 'address',
						field: {
							type: 'textfield'
						}
					}, {
						text: 'Createtime',
						width: 100,
						sortable: true,
						dataIndex: 'createtime',
						renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
						field: {
							type: 'textfield'
						}
					}, {
						text: 'Remark',
						width: 100,
						sortable: true,
						dataIndex: 'remark',
						field: {
							type: 'textfield'
						}
					}]
				});
				this.callParent();
				this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
			},
			
			onSelectChange: function(selModel, selections){
				this.down('#deleteGuest').setDisabled(selections.length === 0);
			},
			
			onSync : function(){
				this.store.sync();
			},
			
			onDeleteClick : function(){
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection){
					this.store.remove(selection);
				}
			},
			
			onAddClick : function(){
				var rec = new guestModel({
					id: '',
					guestType_id: '',
					guestTypeName: '',
					username: '',
					password: '',
					phone: '',
					gender_id: '',
					genderName: '',
					birthday: '',
					linker: '',
					linkerPhone: '',
					address: '',
					createtime: new Date(),
					remark: ''
				}),
				edit = this.editing;
				edit.cancelEdit();
				this.store.insert(0, rec);
				edit.startEditByPosition({
					row: 0,
					column: 1
				});
			}
		});
		
		//代理用户form
		Ext.define('ProxyUser.Form', {
			extend : 'Ext.form.Panel',
			alias : 'widget.proxyUserForm',
			requires : ['Ext.form.field.Text'],
			id : 'proxyUserForm',
			initComponent : function () {
				this.addEvents('create');
				Ext.apply(this, {
					activeRecord : null,
					iconCls : 'icon-user',
					frame : true,
					title : '添加代理用户',
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
							fieldLabel : 'ProxyUserType',
							id : 'proxyUserType_id',//id不能少
							xtype: 'combo',
							queryMode: 'local',
							valueField: 'proxyUserType_id',
							displayField: 'proxyUserTypeName',
							editable : false,
							name : 'proxyUserType_id',
							hiddenName: 'hproxyUserType_id',
							allowBlank : false,
							width : 240,
							store : proxyUserTypeComboStore,
							//联动根据下拉框设置隐藏域
							listeners : {
								select : function(combo, record, index){
									var val = proxyUserTypeComboStore.getAt(proxyUserTypeComboStore.find('proxyUserType_id', Ext.getCmp('proxyUserType_id').value)).get('proxyUserTypeName');
									Ext.getCmp('hiddenProxyUserTypeName').setValue(val);
								}
							}
						}, {
							fieldLabel: 'Account',
							name: 'account_id',
							allowBlank: true,
							width: 240
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
							fieldLabel : 'Phone',
							id : 'phone',
							name : 'phone',
							width : 240
						} , {
							fieldLabel : 'Address',
							name : 'address',
							allowBlank : true,
							colspan : 3,
							width : 240
						}, {
							fieldLabel : 'creditLevel',
							id : 'creditLevel',
							name : 'creditLevel',
							width : 240
						}, {
							fieldLabel : 'Status',
							id : 'proxyUserStatus_id',//id不能少
							xtype: 'combo',
							queryMode: 'local',
							valueField: 'proxyUserStatus_id',
							displayField: 'proxyUserStatusName',
							editable : false,
							name : 'proxyUserStatus_id',
							hiddenName: 'hproxyUserStatus_id',
							allowBlank : false,
							width : 240,
							store : proxyUserStatusComboStore,
							//联动根据下拉框设置隐藏域
							listeners : {
								select : function(combo, record, index){
									var val = proxyUserStatusComboStore.getAt(proxyUserStatusComboStore.find('proxyUserStatus_id', Ext.getCmp('proxyUserStatus_id').value)).get('proxyUserStatusName');
									Ext.getCmp('hiddenProxyUserStatusName').setValue(val);
								}
							}
						}, {
							fieldLabel : 'hProStat',
							hidden: true,//隐藏单元
							id : 'hiddenProxyUserStatusName',
							name : 'proxyUserStatusName',
							width : 240
						}, {
							fieldLabel: 'proxyUserTypeName',
							hidden: true,//隐藏单元
							id: 'hiddenProxyUserTypeName',
							name: 'proxyUserTypeName',
							width: 240
						}, {
							fieldLabel : 'CreateTime',
							hidden : true,//隐藏单元
							format: 'Y-m-d H:i:s',
							editable : false,
							name : 'createtime',
							renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
							allowBlank : true,
							value : new Date(),
							width : 240					
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
		
		//代理用户grid
		Ext.define('ProxyUser.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.proxyUserGrid',
			
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
							header : 'ProxyUserType_id',
							//hidden : true,//隐藏单元
							width : 100,
							sortable : true,
							dataIndex : 'proxyUserType_id',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'ProxyUserTypeName',
							width : 100,
							sortable : true,
							dataIndex : 'proxyUserTypeName',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Account_id',
							width : 100,
							sortable : true,
							dataIndex : 'account_id',
							field : {
								type : 'textfield'
							}
						}, {
							header: 'Linker',
							width: 100,
							sortable: true,
							dataIndex: 'linker',
							field:	{
								type: 'textfield'
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
							header : 'Phone',
							width : 100,
							sortable : true,
							dataIndex : 'phone',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'Address',
							width: 100,
							sortable : true,
							dataIndex : 'address',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'ProxyUserStatus_id',
							//hidden : true,//隐藏单元
							width : 100,
							sortable : true,
							dataIndex : 'proxyUserStatus_id',
							field : {
								type : 'textfield'
							}
						}, {
							header : 'ProxyUserStatusName',
							width: 100,
							sortable : true,
							dataIndex : 'proxyUserStatusName',
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
				var rec = new proxyUserModel({
						id : '',
						username : '',
						password : '',
						account_id: '',
						proxyUserType_id : '',
						proxyUserTypeName: '',
						address : '',
						linker : '',
						linkerPhone : '',
						phone: '',
						creditLevel: '',
						proxyUserStatus_id : '',
						proxyUserStatusName: '',
						status : '',
						createtime : new Date()
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
		
		//角色form
		Ext.define('Role.Form', {
			extend : 'Ext.form.Panel',
			alias : 'widget.roleform',
			requires : ['Ext.form.field.Text'],
			id : 'roleform',
			initComponent : function () {
				this.addEvents('create');
				Ext.apply(this, {
					activeRecord : null,
					iconCls : 'icon-user',
					frame : true,
					title : '添加角色',
					defaultType : 'textfield',
					bodyPadding : 2,
					fieldDefaults : {
						anchor : '100%',
						labelAlign : 'right'
					},
					layout : {
						type : 'table',
						columns: 2
					},
					items : [{
							fieldLabel: 'Role_id',
							name: 'role_id',
							hidden: true
						}, {
							fieldLabel : 'RoleName',
							name : 'roleName',
							allowBlank : false, 
							width : 240
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
		
		//角色grid
		Ext.define('Role.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.rolegrid',
			id: 'rolegrid',
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
							dataIndex : 'role_id'
						}, {
							header : 'RoleName',
							width : 100,
							sortable : true,
							dataIndex : 'roleName',
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
				var rec = new roleModel({
						role_id : '',
						roleName : ''
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
		
		//权限form
		Ext.define('Auth.Form', {
			extend : 'Ext.form.Panel',
			alias : 'widget.authform',
			requires : ['Ext.form.field.Text'],
			id : 'roleform',
			initComponent : function () {
				this.addEvents('create');
				Ext.apply(this, {
					activeRecord : null,
					iconCls : 'icon-user',
					frame : true,
					title : '添加权限',
					defaultType : 'textfield',
					bodyPadding : 2,
					fieldDefaults : {
						anchor : '100%',
						labelAlign : 'right'
					},
					layout : {
						type : 'table',
						columns: 2
					},
					items : [ {
							fieldLabel : 'AuthCode',
							name : 'authCode',
							allowBlank : false, 
							width : 240
						}, {
							fieldLabel: 'AuthName',
							name: 'authName',
							allowBlank: false,
							width: 240
						}, {
							fieldLabel: 'Auth_id',
							name: 'auth_id',
							hidden: true
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
		
		//权限grid
		Ext.define('Auth.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.authgrid',
			id: 'rolegrid',
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
							store :authStore, 
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'Auth_id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'auth_id'
						}, {
							header : 'AuthCode',
							width : 100,
							sortable : true,
							dataIndex : 'authCode',
							field : {
								type : 'textfield'
							}
						}, {
							header: 'AuthName',
							width: 100,
							sortable: true,
							dataIndex: 'authName',
							field: {
								type: 'textfield'
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
				var rec = new authModel({
						auth_id : '',
						authCode : '',
						authName : ''
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
		
		
		var forwardAuthGrid = Ext.create('Ext.grid.Panel', {
			store: authStore,
			selModel: sm2,
			columns: [{
				text: 'authCode',
				dataIndex : 'authCode'
            }, {
            	text : 'authName',
            	flex: 1,
            	dataIndex : 'authName'
            }],
            fbar : ['->',{
            	text:'Add',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					alert("add forwardAuth");
            	}
        	}],
			columnLines: true,
			width: 500,
			height: 475,
			frame: true,
			iconCls: 'icon-grid',
		});
		

		
		var reverseAuthGrid = Ext.create('Ext.grid.Panel', {
			store: authStore,
			selModel: sm3,
			columns: [{
				text: 'authCode',
				dataIndex : 'authCode'
            }, {
            	text : 'authName',
            	flex : 1,
            	dataIndex : 'authName'
            }],
           	fbar : ['->',{
            	text:'Add',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					alert("add ReverseAuth");
            	}
        	}],
			width: 500,
			height: 475,
			frame: true,
			iconCls: 'icon-grid',
		});	
		
		
		var authTab = Ext.create('Ext.tab.Panel', {
			alias: 'widget.authTab',
			width: 500,
			height: 400,
			boder: false,
			bodyBorder: false,
			defaults: {
				anchor: '100%'
			},
			items:[{
				title: '添加正向权限',
				items:forwardAuthGrid
			}, {
				title: '添加反向权限',
				items:reverseAuthGrid
			}]
		});
		
		var authTab2 = Ext.create('Ext.tab.Panel', {
			alias: 'widget.authTab',
			width: 500,
			height: 400,
			boder: false,
			bodyBorder: false,
			defaults: {
				anchor: '100%'
			},
			items:[{
				title: '添加正向权限',
				items:forwardAuthGrid
			}]
		});


		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
			groupHeaderTpl: '{name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
		});
		
		var roleSelGrid = Ext.create('Ext.grid.Panel', {
        	collapsible: true,
        	iconCls: 'icon-grid',
        	frame: true,
			selModel: sm1,
        	store: authStore,
        	width: 600,
        	height: 400,
        	title: 'roleSelection',
        	features: [groupingFeature],
        	columns: [{
        	    text: 'authCode',
        	    flex: 1,
        	    dataIndex: 'authCode'
       	 	},{
         	   text: 'authName',
         	   flex: 1,
         	   dataIndex: 'authName'
        	}],
        	tbar: [{
        		fieldLabel: '角色',
        		xtype: 'textfield',
        		width: 300
        	}, {
        		text: '查询'
        	}],
        	fbar  : ['->',{
            	text:'Delete',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					var selModel = roleSelGrid.getSelectionModel()
					if (selModel.hasSelection()){
						var selections = selModel.getSelection();
						Ext.each(selections, function(item){
							authStore.remove(item);
						});
					}
            	}
        	}]
    	});
    	
    	var operatorSelGrid = Ext.create('Ext.grid.Panel', {
        	collapsible: true,
        	iconCls: 'icon-grid',
        	frame: true,
			selModel: sm4,
        	store: authStore,
        	width: 600,
        	height: 500,
        	title: 'roleSelection',
        	features: [groupingFeature],
        	columns: [{
        	    text: 'authCode',
        	    flex: 1,
        	    dataIndex: 'authCode'
       	 	},{
         	   text: 'authName',
         	   flex: 1,
         	   dataIndex: 'authName'
        	}],
        	tbar: [{
        		fieldLabel: '操作员',
        		xtype: 'textfield',
        		width: 300
        	}, {
        		text: '查询'
        	}],
        	fbar  : ['->',{
            	text:'Delete',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					var selModel = roleSelGrid.getSelectionModel()
					if (selModel.hasSelection()){
						var selections = selModel.getSelection();
						Ext.each(selections, function(item){
							authStore.remove(item);
						});
					}
            	}
        	}]
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
		
		function addGuestTab() {
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
								store : guestStore,
								listeners : {
									selectionchange : function (selModel, selected) {
									Ext.getCmp('guestForm').setActiveRecord(selected[0] || null);
									}
								}
							}, {
								itemId : 'form',
								xtype : 'guestform',
								height : 200,
								listeners : {
									create : function (form, data) {
										guestStore.insert(0, data);
									}
								}
							}
						]
					})
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
		
		function addProxyUserTab(){
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
								flex : 1,
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
		};
		
		//tab:权限管理
		function addAuthMgmtTab() {
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
							items: authTab
						}, {
							items: roleSelGrid
						}, {
							itemId : 'grid',
							xtype : 'authgrid',
							title : '权限列表',
							flex : 1,
							height : 200,
							store : auth1Store,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('authform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'authform',
							height : 200,
							listeners : {
								create : function (form, data) {
									auth1Store.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};
		
		//tab:角色管理
		function addRoleMgmtTab() {
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
							width: 550,
							store : roleStore,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('roleform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'roleform',
							height : 300,
							width: 550,
							listeners : {
								create : function (form, data) {
									roleStore.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};
		
		function addOperatorAuthMgmtTab() {
			centerPanel.add({
				title: '个性化权限管理',
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
							items: authTab2
						}, {
							items: operatorSelGrid
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
</html>
