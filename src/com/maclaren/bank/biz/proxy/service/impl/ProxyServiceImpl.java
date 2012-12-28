package com.maclaren.bank.biz.proxy.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.biz.proxy.bean.ProxyUserAccountService;
import com.maclaren.bank.biz.proxy.bean.ProxyUserLimit;
import com.maclaren.bank.biz.proxy.bean.ProxyUserTypeLimit;
import com.maclaren.bank.biz.proxy.dao.ProxyDAO;
import com.maclaren.bank.biz.proxy.service.ProxyService;
import com.maclaren.bank.util.Util;

@Service
public class ProxyServiceImpl implements ProxyService
{
	
	private ProxyDAO proxyDao;
	
	@Autowired
	public void setProxyDao(ProxyDAO proxyDao)
	{
		this.proxyDao = proxyDao;
	}

	public int calProxyService() {
		// TODO Auto-generated method stub
		return proxyDao.calProxyService();
	}

	public int openProxyService() {
		// TODO Auto-generated method stub
		return 0;
	}

	public String queryAllProxyUserLimit() {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(proxyDao.queryAllProxyUserLimit()), "proxyUserLimits");
	}

	public String queryAllProxyUserTypeLimit() {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(proxyDao.queryAllProxyUserTypeLimit()), "proxyUserTypeLimits");
	}

	public String deleteProxyUserLimit(ProxyUserLimit proxyUserLimit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.deleteProxyUserLimit(proxyUserLimit.getId()));
	}

	public String insertProxyUserLimit(ProxyUserLimit proxyUserLimit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.insertProxyUserLimit(wrap(proxyUserLimit)));
	}

	public String queryProxyUserLimitByConditions(String proxyUserName,
			String root) {
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map.put("proxyUserName", proxyUserName);
		List list = new ArrayList();
		list = proxyDao.queryProxyUserLimitByConditions(map);
		return Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}

	public String updateProxyUserLimit(ProxyUserLimit proxyUserLimit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.updateProxyUserLimit(wrap(proxyUserLimit)));
	}

	public String queryProxyUserTypeLimitByConditions(
			String proxyUserTypeName, String root) {
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map.put("proxyUserTypeName", proxyUserTypeName);
		List list = new ArrayList();
		list = proxyDao.queryProxyUserTypeLimitByConditions(map);
		return Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}

	public String updateProxyUserTypeLimit(ProxyUserTypeLimit proxyUserTypeLimit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.updateProxyUserTypeLimit(wrap2(proxyUserTypeLimit)));
	}
	
	public String deleteProxyUserAccountService(
			ProxyUserAccountService proxyUserAccountService) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.deleteProxyUserService(proxyUserAccountService.getId()));
	}

	public String getProxyUserAccountServiceByConditions(String proxyUser_id,
			String account_id, String service_id, String root) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		System.out.println("account_id" + account_id + "service_id:" + service_id + "proxyuser_id" + proxyUser_id);
		ProxyUserAccountService proxyUserAccountService = new ProxyUserAccountService();
		proxyUserAccountService.setAccount_id(account_id);
		proxyUserAccountService.setProxyUser_id(proxyUser_id);
		proxyUserAccountService.setService_id(service_id);
		list = proxyDao.queryProxyUserAccountServiceByConditions(wrap3(proxyUserAccountService));
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public String getProxyUserCombo(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(proxyDao.getProxyUserCombo()), root);
	}
	
	public String getProxyClientCombo(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(proxyDao.getProxyClientCombo()), root);
	}

	public String insertProxyUserAccountService(ProxyUserAccountService proxyUserAccountService) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.insertProxyUserService(wrap3(proxyUserAccountService)));
	}
	
	public String getAllProxyUserAccountService(String root) {
		// TODO Auto-generated method stub
		List<ProxyUserAccountService> list = new ArrayList<ProxyUserAccountService>();
		list = proxyDao.getAllProxyUserAccountService();
		return Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}


	public String updateProxyUserAccountService(
			ProxyUserAccountService proxyUserAccountService) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(proxyDao.updateProxyUserService(wrap3(proxyUserAccountService)));
	}
	
	public String getAllProxyUserAccountAmount(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(proxyDao.getAllProxyUserAccountAmount()), root);
	}

	public String getProxyUserAccountAmountByConditions(String proxyUser_id,
			String root) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		list = proxyDao.getProxyUserAccountAmountByConditions(proxyUser_id);
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public String getAllProxyClientAccountAmount(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(proxyDao.getAllProxyClientAccountAmount()), root);
	}

	public String getProxyClientAccountAmountByConditions(String proxyClient_id,
			String root) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		list = proxyDao.getProxyClientAccountAmountByConditions(proxyClient_id);
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public Map wrap(ProxyUserLimit proxyUserLimit)
	{
		Map map = new HashMap();
		map.put("id", proxyUserLimit.getId());
		map.put("minAmount", proxyUserLimit.getMinAmount());
		map.put("maxAmount", proxyUserLimit.getMaxAmount());
		map.put("proxyUserName", proxyUserLimit.getProxyUserName());
		return map;
	}
	
	public Map wrap2(ProxyUserTypeLimit proxyUserTypeLimit)
	{
		Map map = new HashMap();
		map.put("id", proxyUserTypeLimit.getId());
		map.put("proxyUserType_id", proxyUserTypeLimit.getProxyUserType_id());
		map.put("proxyUserTypeName", proxyUserTypeLimit.getProxyUserTypeName());
		map.put("minAmount", proxyUserTypeLimit.getMinAmount());
		map.put("maxAmount", proxyUserTypeLimit.getMaxAmount());
		return map;
	}
	
	public Map wrap3(ProxyUserAccountService proxyUserAccountService)
	{
		Map map = new HashMap();
		map.put("id", proxyUserAccountService.getId());
		map.put("proxyUser_id", proxyUserAccountService.getProxyUser_id());
		map.put("account_id", proxyUserAccountService.getAccount_id());
		map.put("service_id", proxyUserAccountService.getService_id());
		return map;
	}
}
