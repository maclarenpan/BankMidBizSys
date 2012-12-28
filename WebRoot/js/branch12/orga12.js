//model start
//bankComboModel
Ext.define('bankComboModel', {
	extend : 'Ext.data.Model',
	fields : [{
		name: 'bank_id', type: 'string'
	}, {
		name: 'bankName', type: 'string'
	}]
});
//model end
//store start
/*
var bankComboStore = new Ext.data.Store({
			fields: ['bank_id', 'bankName'],
			data: [{
				"bank_id": "1", "bankName": "中国银行广州越秀支行"
			}, {
				"bank_id": "2", "bankName": "中国银行广州天河支行"
			}, {
				"bank_id": "3", "bankName": "中国银行广州荔枝分行"
			}, {
				"bank_id": "4", "bankName": "中国银行广州小北支行"
			}]
});
*/
//Bank combo store
var bankComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'bankComboModel',
	proxy: {
		type: 'ajax',
		url: 'orga/bankCombo.action',
		reader: {
			type: 'json',
			root: 'bankCombos'
		}
	}
});
bankComboStore.load();
//store end