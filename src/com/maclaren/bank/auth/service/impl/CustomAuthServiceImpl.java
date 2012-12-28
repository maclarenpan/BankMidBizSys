package com.maclaren.bank.auth.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.auth.bean.CustomAuth;
import com.maclaren.bank.auth.dao.CustomAuthDAO;
import com.maclaren.bank.auth.service.CustomAuthService;
import com.maclaren.bank.util.Util;

@Service
public class CustomAuthServiceImpl implements CustomAuthService
{
	@Autowired
	private CustomAuthDAO customAuthDao;
	
	public String queryAllCustomAuth(String root) 
	{
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(customAuthDao.getAllCustomAuth()), 
				root);
	}
	
	public String queryCustomAuthByConditions(String auth_id, String operator_id, String root) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		CustomAuth customAuth = new CustomAuth();
		customAuth.setAuth_id(auth_id);
		customAuth.setOperator_id(operator_id);
		list = customAuthDao.queryCustomAuthByConditions(wrap(customAuth));
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public String deleteCustomAuth(CustomAuth customAuth) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(customAuthDao.deleteCustomAuth(customAuth.getId()));
	}

	public String updateCustomAuth(CustomAuth customAuth) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(customAuthDao.updateCustomAuth(wrap(customAuth)));
	}

	public String insertCustomAuth(CustomAuth customAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(customAuthDao.insertCustomAuth(wrap(customAuth)));
	}
	
	public Map wrap(CustomAuth customAuth)
	{
		Map map = new HashMap();
		map.put("id", customAuth.getId());
		map.put("auth_id", customAuth.getAuth_id());
		map.put("operator_id", customAuth.getOperator_id());
		return map;
	}

}
