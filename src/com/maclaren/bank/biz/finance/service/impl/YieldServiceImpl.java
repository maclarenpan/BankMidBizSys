package com.maclaren.bank.biz.finance.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.biz.finance.bean.Yield;
import com.maclaren.bank.biz.finance.dao.YieldDAO;
import com.maclaren.bank.biz.finance.service.YieldService;
import com.maclaren.bank.util.Util;

@Service
public class YieldServiceImpl implements YieldService
{
	@Autowired
	private YieldDAO yieldDao;
	
	public String addYield(Yield yield) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(yieldDao.addYield(wrap(yield)));
	}

	public String delYield(Yield yield) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(yieldDao.delYield(yield.getId()));
	}

	public String queryAllYield(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(
				Util.list2Json(yieldDao.getAllYield()), root);
	}
	
	public String queryYieldByConditions(String bank_id, String service_id, 
			String root)
	{
		Yield yield = new Yield();
		yield.setBank_id(bank_id);
		yield.setService_id(service_id);
		return Util.buildExtJsonData(Util.list2Json(
				yieldDao.queryYieldByConditions(wrap(yield))), root);
	}

	public String updateYield(Yield yield) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(yieldDao.updateYield(wrap(yield)));
	}
	
	public String getAllBankTotalAmount(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(yieldDao.getAllBankTotalAmount()), root);
	}

	public String getBankTotalAmountByConditions(String bank_id, String root) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		list = yieldDao.getBankTotalAmountByConditions(bank_id);
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	private Map wrap(Yield yield)
	{
		Map map = new HashMap();
		map.put("bank_id", yield.getBank_id());
		map.put("service_id", yield.getService_id());
		map.put("percent", yield.getPercent());
		map.put("amount", yield.getAmount());
		return map;
	}
}
