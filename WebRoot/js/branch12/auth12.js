//model start
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
		Ext.define('forwardAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'role_id', type: 'int'
			}, {
				name: 'auth_id', type: 'int'
			}, {
				name: 'operator_id', type: 'int'
			}]
		});
		Ext.define('reverseAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'role_id', type: 'int'
			},{
				name: 'auth_id', type: 'int'
			}, {
				name: 'operator_id', type: 'int'
			}]
		});
		
		Ext.define('authComboModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'auth_id', type: 'int'
			}, {
				name: 'authName', type: 'string'
			}]
		});
		
		Ext.define('operatorComboModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'operator_id', type: 'int'
			}, {
				name: 'operatorName', type: 'string'
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
		
		Ext.define('roleModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
			}]
		});
		
		Ext.define('roleComboModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
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
//model end
		//selection model start
		var sm1 = Ext.create('Ext.selection.CheckboxModel');
		var sm2 = Ext.create('Ext.selection.CheckboxModel');
		var sm3 = Ext.create('Ext.selection.CheckboxModel');
		//selection model end
		//store start
		var roleStore = Ext.create('Ext.data.Store', {
			model : 'roleModel',
			autoLoad : true,
			autoSync : false,
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
					totalProperty: 'totalCount',
					pageSize: 10,
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : true,
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
					Ext.example.msg("提示", "删除成功");
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
		
		//forward auth store
		var forwardAuthStore = Ext.create('Ext.data.Store', {
			model : 'forwardAuthModel',
			autoLoad : true,
			autoSync : false,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/forwardAuth.action?method=getAll',
					create : 'auth/forwardAuth.action?method=insert',
					update : 'auth/forwardAuth.action?method=update',
					destroy : 'auth/forwardAuth.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'forwardauths',
					totalProperty: 'totalCount',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : true,
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
		
		//reverse auth store
		var reverseAuthStore = Ext.create('Ext.data.Store', {
			model : 'reverseAuthModel',
			autoLoad : true,
			autoSync : false,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/reverseAuth.action?method=getAll',
					create : 'auth/reverseAuth.action?method=insert',
					update : 'auth/reverseAuth.action?method=update',
					destroy : 'auth/reverseAuth.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'reverseauths',
					totalProperty: 'totalCount',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : true,
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
		
		//custom auth store
		var customAuthStore = Ext.create('Ext.data.Store', {
			model : 'customAuthModel',
			autoLoad : true,
			autoSync : false,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/customAuth.action?method=getAll',
					create : 'auth/customAuth.action?method=insert',
					update : 'auth/customAuth.action?method=update',
					destroy : 'auth/customAuth.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'customauths',
					totalProperty: 'totalCount',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : true,
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
					Ext.example.msg("提示", "删除成功");
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
		//role combo store
		var roleComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'roleComboModel',
			proxy: {
				type: 'ajax',
				url: 'auth/roleCombo.action',
				reader: {
					type: 'json',
					root: 'roleCombos'
				}
			}
		});
		roleComboStore.load();
		



		//operator combo stre
		var operatorComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'operatorComboModel',
			proxy: {
				type: 'ajax',
				url: 'staff/operatorCombo.action',
				reader: {
					type: 'json',
					root: 'operatorCombos'
				}
			}
		});
		operatorComboStore.load();
		
		//auth combo store
		var authComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'authComboModel',
			proxy: {
				type: 'ajax',
				url: 'auth/authCombo.action',
				reader: {
					type: 'json',
					root: 'authCombos'
				}
			}
		});
		authComboStore.load();
		
	
		/*
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
		*/

		//store end
		
		//component start
		//角色form
		/*
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
		*/
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
									pressed : false,
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
							store : roleStore, 
							emptyMsg: '没有数据',
							totalProperty: 'totalCount',
							pageSize: 10,
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
				this.store.load();
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
		
		//forward auth query panel
		var roleQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '角色查询',
			width: 600,
			height: 300,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var role_id = Ext.getCmp('role_id_query2').getValue();
					roleStore.load({url:'auth/role.action?method=getByConditions', params:{role_id: role_id}});
				}
			}],
			items: [{
				xtype: 'fieldset',
				title: '查询条件',
				defaultType: {
					xtype: 'textfield',
					align: 'right'
				},
				layout: {
					type: 'table',
					columns: 4
				},
				items: [{
					fieldLabel : 'Role',
					id : 'role_id_query2',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'role_id',
					displayField: 'roleName',
					editable : false,
					name : 'role_id_query2',
					hiddenName: 'hrole_id_query2',
					allowBlank : true,
					width : 240,
					store : roleComboStore
				}]
			}, {
				
			}]
		});
		
		//权限form
		/*
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
		*/
		
		//权限grid
		/*
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
		*/
		
		//forward auth grid
		Ext.define('ForwardAuth.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.forwardauthgrid',
			id: 'forwardauthgrid',
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
									pressed : false,
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
							store :forwardAuthStore, 
							totalProperty: 'totalCount',
							pageSize: 10,
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'id'
						},  {
							header: 'Role',
							width: 100,
							dataIndex: 'role_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: roleComboStore,
								mode: 'local',
								valueField: 'role_id',
								displayField: 'roleName',
								hiddenName: 'hrole_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = roleComboStore.find('role_id', value);
								if (index != -1)
								{
									return roleComboStore.getAt(index).data.roleName;
								}
								return value;
							}
						},  {
							header: 'Auth',
							width: 100,
							dataIndex: 'auth_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: authComboStore,
								mode: 'local',
								valueField: 'auth_id',
								displayField: 'authName',
								hiddenName: 'hauth_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = authComboStore.find('auth_id', value);
								if (index != -1)
								{
									return authComboStore.getAt(index).data.authName;
								}
								return value;
							}
						},  {
							header: 'Operator',
							width: 100,
							dataIndex: 'operator_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: operatorComboStore,
								mode: 'local',
								valueField: 'operator_id',
								displayField: 'operatorName',
								hiddenName: 'hrole_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = operatorComboStore.find('operator_id', value);
								if (index != -1)
								{
									return operatorComboStore.getAt(index).data.operatorName;
								}
								return value;
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
				this.store.load();
			},
			
			onDeleteClick : function () {
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection) {
					this.store.remove(selection);
				}
			},
			
			onAddClick : function () {
				var rec = new forwardAuthModel({
						id : '',
						role_id: '',
						auth_id : '',
						operator_id : ''
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
		
		//forward auth query panel
		var forwardAuthQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '正向权限查询',
			width: 600,
			height: 300,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var forwardAuth_id = Ext.getCmp('forwardAuth_id_query').getValue();
					var role_id = Ext.getCmp('forwardAuth_role_query').getValue();
					forwardAuthStore.load({url:'auth/forwardAuth.action?method=getByConditions', params:{forwardAuth_id: forwardAuth_id, role_id: role_id}});
				}
			}],
			items: [{
				xtype: 'fieldset',
				title: '查询条件',
				defaultType: {
					xtype: 'textfield',
					align: 'right'
				},
				layout: {
					type: 'table',
					columns: 4
				},
				items: [{
					fieldLabel : 'Auth',
					id : 'forwardAuth_id_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'auth_id',
					displayField: 'authName',
					editable : false,
					name : 'forwardAuth_id_query',
					hiddenName: 'hforwardAuth_id_query',
					allowBlank : true,
					width : 240,
					store : authComboStore
				}, {
					fieldLabel : 'Role',
					id : 'forwardAuth_role_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'role_id',
					displayField: 'roleName',
					editable : false,
					name : 'forwardAuth_role_query',
					hiddenName: 'hforwardAuth_role_query',
					allowBlank : true,
					width : 240,
					store : roleComboStore
				}]
			}, {
				
			}]
		});

		//reverse auth grid
		Ext.define('ReverseAuth.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.reverseauthgrid',
			id: 'reverseauthgrid',
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
									pressed : false,
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
							store : reverseAuthStore, 
							totalProperty: 'totalCount',
							pageSize: 10,
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'id'
						},  {
							header: 'Role',
							width: 100,
							dataIndex: 'role_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: roleComboStore,
								mode: 'local',
								valueField: 'role_id',
								displayField: 'roleName',
								hiddenName: 'hauth_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = roleComboStore.find('role_id', value);
								if (index != -1)
								{
									return roleComboStore.getAt(index).data.roleName;
								}
								return value;
							}
						},  {
							header: 'Auth',
							width: 100,
							dataIndex: 'auth_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: authComboStore,
								mode: 'local',
								valueField: 'auth_id',
								displayField: 'authName',
								hiddenName: 'hauth_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = authComboStore.find('auth_id', value);
								if (index != -1)
								{
									return authComboStore.getAt(index).data.authName;
								}
								return value;
							}
						},  {
							header: 'Operator',
							width: 100,
							dataIndex: 'operator_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: operatorComboStore,
								mode: 'local',
								valueField: 'operator_id',
								displayField: 'operatorName',
								hiddenName: 'hrole_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = operatorComboStore.find('operator_id', value);
								if (index != -1)
								{
									return operatorComboStore.getAt(index).data.operatorName;
								}
								return value;
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
				this.store.load();
			},
			
			onDeleteClick : function () {
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection) {
					this.store.remove(selection);
				}
			},
			
			onAddClick : function () {
				var rec = new reverseAuthModel({
						id : '',
						role_id: '',
						auth_id : '',
						operator_id : ''
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
		
		//reverse auth query panel
		var reverseAuthQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '反向权限查询',
			width: 600,
			height: 300,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var reverseAuth_id = Ext.getCmp('reverseAuth_id_query').getValue();
					var role_id = Ext.getCmp('reverseAuth_role_query').getValue();
					reverseAuthStore.load({url:'auth/reverseAuth.action?method=getByConditions', params:{reverseAuth_id: reverseAuth_id, role_id: role_id}});
				}
			}],
			items: [{
				xtype: 'fieldset',
				title: '查询条件',
				defaultType: {
					xtype: 'textfield',
					align: 'right'
				},
				layout: {
					type: 'table',
					columns: 4
				},
				items: [{
					fieldLabel : 'Auth',
					id : 'reverseAuth_id_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'auth_id',
					displayField: 'authName',
					editable : false,
					name : 'reverseAuth_id_query',
					hiddenName: 'hreverseAuth_id_query',
					allowBlank : true,
					width : 240,
					store : authComboStore
				}, {
					fieldLabel : 'Role',
					id : 'reverseAuth_role_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'role_id',
					displayField: 'roleName',
					editable : false,
					name : 'reverseAuth_role_query',
					hiddenName: 'hreverseAuth_role_query',
					allowBlank : true,
					width : 240,
					store : roleComboStore
				}]
			}, {
				
			}]
		});
		
		//custom auth grid
		Ext.define('CustomAuth.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.customauthgrid',
			id: 'customauthgrid',
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
									pressed : false,
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
							store : customAuthStore, 
							totalProperty: 'totalCount',
							pageSize: 10,
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'id'
						},  {
							header: 'Operator',
							width: 100,
							dataIndex: 'operator_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: operatorComboStore,
								mode: 'local',
								valueField: 'operator_id',
								displayField: 'operatorName',
								hiddenName: 'hoperator_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = operatorComboStore.find('operator_id', value);
								if (index != -1)
								{
									return operatorComboStore.getAt(index).data.operatorName;
								}
								return value;
							}
						},  {
							header: 'Auth',
							width: 100,
							dataIndex: 'auth_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: authComboStore,
								mode: 'local',
								valueField: 'auth_id',
								displayField: 'authName',
								hiddenName: 'hauth_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = authComboStore.find('auth_id', value);
								if (index != -1)
								{
									return authComboStore.getAt(index).data.authName;
								}
								return value;
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
				this.store.load();
			},
			
			onDeleteClick : function () {
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection) {
					this.store.remove(selection);
				}
			},
			
			onAddClick : function () {
				var rec = new forwardAuthModel({
						id : '',
						operator_id: '',
						auth_id : ''
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
		
		//custom auth query panel
		var customAuthQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '个性化权限查询',
			width: 600,
			height: 300,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var customAuth_id = Ext.getCmp('customAuth_id_query').getValue();
					var operator_id = Ext.getCmp('customdAuth_operator_query').getValue();
					customAuthStore.load({url:'auth/customAuth.action?method=getByConditions', params:{auth_id: customAuth_id, operator_id:operator_id}});
				}
			}],
			items: [{
				xtype: 'fieldset',
				title: '查询条件',
				defaultType: {
					xtype: 'textfield',
					align: 'right'
				},
				layout: {
					type: 'table',
					columns: 4
				},
				items: [{
					fieldLabel : 'Auth',
					id : 'customAuth_id_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'auth_id',
					displayField: 'authName',
					editable : false,
					name : 'customAuth_id_query',
					hiddenName: 'hcustomAuth_id_query',
					allowBlank : true,
					width : 240,
					store : authComboStore
				}, {
					fieldLabel : 'Operator',
					id : 'customdAuth_operator_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'operator_id',
					displayField: 'operatorName',
					editable : false,
					name : 'customdAuth_operator_query',
					hiddenName: 'hcustomdAuth_operator_query',
					allowBlank : true,
					width : 240,
					store : operatorComboStore
				}]
			}, {
				
			}]
		});
		/*
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
		*/
		/*
		var authTab2 = Ext.create('Ext.tab.Panel', {
			alias: 'widget.authTab',
			width: 500,
			height: 500,
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
		*/
		
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
		//component end