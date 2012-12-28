//model start
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
					type : 'int'
				},
				'username',
				'password',
				'userType_id',
				'address',
				'linker',
				'linkerPhone',
				'role_id',
				'status_id',
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
			'username',
			'password',
			'phone',
			'gender_id',
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
			'username',
			'password',
			'linker',
			'linkerPhone',
			'phone',
			'address',
			'creditLevel',
			'proxyUserStatus_id',
			'createtime']
		});
		
		Ext.define('userTypeComboModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'userType_id', type:'int'
				}, {
				name: 'userTypeName', type: 'string'
			}]
		});
		Ext.define('statusComboModel', {
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
		
		Ext.define('GuestTypeComboModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'guestType_id', type: 'int'
			}, {
				name: 'guestTypeName', type: 'string'
			}]
		});
		
		Ext.define('GenderTypeComboModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'gender_id', type: 'int'
			}, {
				name: 'genderName', type: 'string'
			}]
		});
//model end
		//selection model start
		var sm4 = Ext.create('Ext.selection.CheckboxModel');
		//selection model end
		//store start
		//操作员store
		var operatorStore = Ext.create('Ext.data.Store', {
				model : 'operatorModel',
				autoLoad: {start: 0, limit: 10},
				autoSync : false,
				pageSize: 10,
				totalProperty: 'totalCount',
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
						totalProperty: 'totalCount',
						messageProperty : 'message'
					},
					writer : {
						type : 'json',
						writeAllFields : true,
						root: 'data'
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
							Ext.Msg.alert("提示", "删除成功");
						}
						Ext.example.msg(operation.action, operation.resultSet.message);
					}
				}
		});
		
		//客户store
		var guestStore = Ext.create('Ext.data.Store', {
			model : 'guestModel',
			autoLoad : true,
			autoSync : false,
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
					totalProperty: 'totalCount',
					pageSize: 20,
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : true,
					root : 'data'
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
					Ext.example.msg("提示", "删除成功");
				}
			}
		});
		
		//代理用户store
		var proxyUserStore = Ext.create('Ext.data.Store', {
			model : 'proxyUserModel',
			autoLoad : true,
			autoSync : false,
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
					Ext.example.msg("提示", "删除 成功");
				}
			}
		});
		
		//UserType Combo Store
		var userTypeComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'userTypeComboModel',
			proxy: {
				type: 'ajax',
				url: 'staff/userTypeCombo.action',
				reader: {
					type: 'json',
					root: 'userTypeCombos'
				}
			}
		});
		userTypeComboStore.load();
		
		//Operator status combo store
		var operatorStatusComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'statusComboModel',
			proxy: {
				type: 'ajax',
				url: 'staff/operatorStatusCombo.action',
				reader: {
					type: 'json',
					root: 'operatorStatusCombos'
				}
			}
		});
		operatorStatusComboStore.load();
		
		//guest type combo store
		var guestTypeComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'guestTypeComboModel',
			proxy: {
				type: 'ajax',
				url: 'staff/guestTypeCombo.action',
				reader: {
					type: 'json',
					root: 'guestTypeCombos'
				}
			}
		});
		guestTypeComboStore.load();
		/*
		//gender type combo store
		var genderTypeComboStore = new Ext.data.Store({
			autoLoad: true,
			model: 'genderTypeComboModel',
			proxy: {
				type: 'ajax',
				url: 'staff/genderTypeCombo.action',
				reader: {
					type: 'json',
					root: 'genderTypeCombos'
				}
			}
		});
		genderTypeComboStore.load();
		*/
		
		
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
		/*
		var proxyUserTypeComboStore = new Ext.data.Store({
			fields: ['proxyUserType_id', 'proxyUserTypeName'],
			data: [{
				"proxyUserType_id": "1", "proxyUserTypeName": "vip"
			}, {
				"proxyUserType_id": "2", "proxyUserTypeName": "common"
			}]
		});
		*/
		
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
//store end
		
		//component start
		//operator grid
		Ext.define('Operator.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.operatorgrid',
			
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
							emptyMsg: '没有数据',
							pageSize: 10,
							store : operatorStore, 
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
							header: 'UserType',
							width: 100,
							dataIndex: 'userType_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: userTypeComboStore,
								mode: 'local',
								valueField: 'userType_id',
								displayField: 'userTypeName',
								hiddenName: 'huesrType_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = userTypeComboStore.find('userType_id', value);
								if (index != -1)
								{
									return userTypeComboStore.getAt(index).data.userTypeName;
								}
								return value;
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
								valueField: 'id',
								displayField: 'roleName',
								hiddenName: 'hrole_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = roleComboStore.find('id', value);
								if (index != -1)
								{
									return roleComboStore.getAt(index).data.roleName;
								}
								return value;
							}
						}, {
							header: 'Status',
							width: 100,
							dataIndex: 'status_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: operatorStatusComboStore,
								mode: 'local',
								valueField: 'status_id',
								displayField: 'statusName',
								hiddenName: 'hstatus_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = operatorStatusComboStore.find('status_id', value);
								if (index != -1)
								{
									return operatorStatusComboStore.getAt(index).data.statusName;
								}
								return value;
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
				this.store.load();
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
						userType_id : '',
						address : '',
						linker : '',
						linkerPhone : '',
						role_id : '',
						status_id : '',
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
		
		//操作员查询panel
		var opreatorQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '操作员查询',
			width: 1100,
			height: 150,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var username = Ext.getCmp('username_query').getValue();
					var userType_id = Ext.getCmp('userType_id_query').getValue();
					var role_id = Ext.getCmp('role_id_query').getValue();
					var status_id = Ext.getCmp('status_id_query').getValue();
					var starttime = Ext.getCmp('starttime').getValue();
					var endtime = Ext.getCmp('endtime').getValue();
					operatorStore.load({url:'staff/operator.action?method=getByConditions', params:{username:username,userType_id:userType_id,role_id:role_id,status_id:status_id,starttime:starttime,endtime:endtime}});
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
					fieldLabel: 'UserName',
					id: 'username_query',
					name: 'username_query',
					xtype: 'textfield',
					width: 240
				}, {
					fieldLabel : 'UserType',
					id : 'userType_id_query',//id不能少
					xtype: 'combo',
					queryMode: 'remote',
					valueField: 'userType_id',
					displayField: 'userTypeName',
					editable : false,
					name : 'userType_id_query',
					hiddenName: 'huserType_id_query',
					allowBlank : true,
					width : 240,
					store : userTypeComboStore
				}, {
					fieldLabel: 'Role',
					id: 'role_id_query',
					name: 'role_id_query',
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'id',
					displayField: 'roleName',
					hiddenName: 'hrole_id',
					editable: false,
					allowBlank: true,
					width: 240,
					store: roleComboStore
				}, {
					fieldLabel: 'Status',
					id: 'status_id_query',
					name: 'status_id_query',
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'status_id',
					displayField: 'statusName',
					hiddenName: 'hstatus_id_query',
					editable: false,
					allowBlank: true,
					width: 240,
					store: operatorStatusComboStore
				}, {
					fieldLabel: 'Starttime',
					id: 'starttime',
					name: 'starttime',
					xtype: 'datefield',
					format: 'Y-m-d H:i:s',
					width: 240
				}, {
					fieldLabel: 'Endtime',
					id: 'endtime',
					name: 'enttime',
					xtype: 'datefield',
					format: 'Y-m-d H:i:s',
					width: 240
				}]
			}, {
				
			}]
		});
		
		/*
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
		*/
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
						EmptyMsg: '没有数据',
						totalProperty: 'totalCount',
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
						fieldLabel : 'GuestType',
						id : 'guestType_id',//id不能少
						xtype: 'combo',
						queryMode: 'local',
						valueField: 'guestType_id',
						displayField: 'guestTypeName',
						editable : false,
						name : 'gusetType_id',
						hiddenName: 'hguestType_id',
						allowBlank : true,
						width : 240,
						store : guestTypeComboStore
					}, {
						fieldLabel : 'Gender',
						id : 'gender_id',//id不能少
						xtype: 'combo',
						queryMode: 'local',
						valueField: 'gender_id',
						displayField: 'genderName',
						editable : false,
						name : 'gender_id',
						hiddenName: 'hgender_id',
						allowBlank : true,
						width : 240,
						store : genderComboStore
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
				this.down('#delete').setDisabled(selections.length === 0);
			},
			
			onSync : function(){
				this.store.sync();
				this.store.load();
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
					username: '',
					password: '',
					phone: '',
					gender_id: '',
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
		
		//guest query panel
		var GuestQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '客户查询',
			width: 1100,
			height: 150,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var guestType_id = Ext.getCmp('gustType_id_guest_query').getValue();
					var username = Ext.getCmp('username_guest_query').getValue();
					var gender_id = Ext.getCmp('gender_id_guest_query').getValue();
					guestStore.load({url:'staff/guest.action?method=getByConditions', params:{guestType_id: guestType_id,username:username,gender_id: gender_id}});
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
					fieldLabel: 'UserName',
					id: 'username_query',
					name: 'username_query',
					xtype: 'textfield',
					width: 240
				}, {
					fieldLabel : 'GuestType',
					id : 'guestType_guest_query',//id不能少
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'guestType_id',
					displayField: 'guestTypeName',
					editable : false,
					name : 'guestType_guest_query',
					hiddenName: 'hguestType_guest_query',
					allowBlank : true,
					width : 240,
					store : guestTypeComboStore
				}, {
					fieldLabel: 'Gender',
					id: 'gender_id_guest_query',
					name: 'gender_id_guest_query',
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'gender_id',
					displayField: 'genderName',
					hiddenName: 'hgender_id_guest_query',
					editable: false,
					allowBlank: true,
					width: 240,
					store: genderComboStore
				}]
			}, {
				
			}]
		});
		
		//代理用户form
		/*
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
		*/
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
							store : proxyUserStore, 
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
							header: 'ProxyUserType',
							width: 100,
							dataIndex: 'proxyUser_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: proxyUserTypeComboStore,
								mode: 'local',
								valueField: 'proxyUserType_id',
								displayField: 'proxyUserTypeName',
								hiddenName: 'hstatus_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = proxyUserTypeComboStore.find('proxyUserType_id', value);
								if (index != -1)
								{
									return proxyUserTypeComboStore.getAt(index).data.proxyUserTypeComboName;
								}
								return value;
							}
						}, {
							header: 'Account',
							width: 100,
							dataIndex: 'account_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: accountComboStore,
								mode: 'local',
								valueField: 'account_id',
								displayField: 'accountName',
								hiddenName: 'haccount_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = accountComboStore.find('account_id', value);
								if (index != -1)
								{
									return accountComboStore.getAt(index).data.accountName;
								}
								return value;
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
							header: 'ProxyUserStatus',
							width: 100,
							dataIndex: 'proxyUserStatus_id',
							editor: {
								xtype: 'combobox',
								typeAhead: true,
								triggerAction: 'all',
								selectOnTab: true,
								store: proxyUserStatusComboStore,
								mode: 'local',
								valueField: 'proxyUserStatus_id',
								displayField: 'proxyUserStatusName',
								hiddenName: 'hproxyUserStatus_id',
								listClass: 'x-combo-list-small'
							},
							renderer: function(value, cellmeta, record){
								var index = proxyUserStatusComboStore.find('proxyUserStatus_id', value);
								if (index != -1)
								{
									return proxyUserStatusComboStore.getAt(index).data.proxyUserStatusName;
								}
								return value;
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
				this.store.load();
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
						address : '',
						linker : '',
						linkerPhone : '',
						phone: '',
						creditLevel: '',
						proxyUserStatus_id : '',
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
		
		//proxy user query panel
		var proxyUserQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '代理用户查询',
			width: 1100,
			height: 150,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var username = Ext.getCmp('username_proxyUser_query').getValue();
					var proxyUserType_id = Ext.getCmp('proxyUserType_id_proxyUser_query').getValue();
					var proxyUserStatus_id = Ext.getCmp('proxyUserStatus_id_proxyUser_query').getValue();
					proxyUserStore.load({url:'staff/proxyUser.action?method=getByConditions', params:{username:username, proxyUserType_id:proxyUserType_id,proxyUserStatus_id:proxyUserStatus_id}});
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
					fieldLabel: 'UserName',
					id: 'username_proxyUser_query',
					name: 'username_proxyUser_query',
					xtype: 'textfield',
					width: 240
				}, {
					fieldLabel : 'ProxyUserType',
					id : 'proxyUserType_id_proxyUser_query',//id不能少
					xtype: 'combo',
					queryMode: 'remote',
					valueField: 'proxyUserType_id',
					displayField: 'proxyUserTypeName',
					editable : false,
					name : 'proxyUserType_id_proxyUser_query',
					hiddenName: 'hproxyUserType_id_proxyUser_query',
					allowBlank : true,
					width : 240,
					store : proxyUserTypeComboStore
				}, {
					fieldLabel: 'ProxyUserStatus',
					id: 'proxyUserStatus_id_proxyUser_query',
					name: 'proxyUserStatus_id_proxyUser_query',
					xtype: 'combo',
					queryMode: 'local',
					valueField: 'proxyUserStatus_id',
					displayField: 'proxyUserStatusName',
					hiddenName: 'hproxyUserStatus_id_proxyUser_query',
					editable: false,
					allowBlank: true,
					width: 240,
					store: proxyUserStatusComboStore
				}]
			}, {
				
			}]
		});
		
		var operatorSelGrid = Ext.create('Ext.grid.Panel', {
        	collapsible: true,
        	iconCls: 'icon-grid',
        	frame: true,
			selModel: sm4,
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
		//component end