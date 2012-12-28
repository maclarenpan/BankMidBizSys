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