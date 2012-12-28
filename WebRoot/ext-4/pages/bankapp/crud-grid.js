Ext.onReady(function(){

	Ext.BLANK_IMAGE_URL = '/extjs-crud-grid/ext-3.2.1/resources/images/default/s.gif';
	
    var User = Ext.data.Record.create([
	{
		name: 'id'
	}, {
        name: 'username',
        type: 'string'
    }, {
        name: 'password',
        type: 'string'
    }]);
    
    var proxy = new Ext.data.HttpProxy({
        api: {
            read : 'login/view.action',
            create : 'login/create.action',
            update: 'login/update.action',
            destroy: 'login/delete.action'
        }
    });
    
    var reader = new Ext.data.JsonReader({
        totalProperty: 'total',
        successProperty: 'success',
        idProperty: 'id',
        root: 'data',
        messageProperty: 'message'  // <-- New "messageProperty" meta-data
    }, 
    User);

 // The new DataWriter component.
    var writer = new Ext.data.JsonWriter({
        encode: true,
        writeAllFields: true
    });
    
 // Typical Store collecting the Proxy, Reader and Writer together.
    var store = new Ext.data.Store({
        id: 'user',
        proxy: proxy,
        reader: reader,
        writer: writer,  // <-- plug a DataWriter into the store just as you would a Reader
        autoSave: false // <-- false would delay executing create, update, destroy requests until specifically told to do so with some [save] buton.
    });

    //read the data from simple array
    store.load();
    
    Ext.data.DataProxy.addListener('exception', function(proxy, type, action, options, res) {
    	Ext.Msg.show({
    		title: 'ERROR',
    		msg: res.message,
    		icon: Ext.MessageBox.ERROR,
    		buttons: Ext.Msg.OK
    	});
    });

    
    var editor = new Ext.ux.grid.RowEditor({
        saveText: 'Update'
    });
    

    // create grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {header: "USERNAME",
             width: 200,
             sortable: true,
             dataIndex: 'username',
             editor: {
                xtype: 'textfield',
                allowBlank: false
            }},
            {header: "PASSWORD",
             width: 200,
             sortable: true,
             dataIndex: 'password',
             editor: {
                 xtype: 'textfield',
                 allowBlank: false
            }}
        ],
        viewConfig:{forcefit:true},
        plugins: [editor],
        title: 'Staff Infomation',
        height: 300,
        width:535,
		frame:true,
		tbar: [{
            iconCls: 'icon-user-add',
            text: 'Add User',
            handler: function(){
                var e = new User({
                    username: '',
                    password: ''
                });
                editor.stopEditing();
                store.insert(0, e);
                grid.getView().refresh();
                grid.getSelectionModel().selectRow(0);
                editor.startEditing(0);
            }
        },{
            iconCls: 'icon-user-delete',
            text: 'Remove User',
            handler: function(){
                editor.stopEditing();
                var s = grid.getSelectionModel().getSelections();
                for(var i = 0, r; r = s[i]; i++){
                    store.remove(r);
                }
            }
        },{
            iconCls: 'icon-user-save',
            text: 'Save All Modifications',
            handler: function(){
                store.save();
            }
        }]
    });

    //render to DIV
    grid.render('crud-grid');
});