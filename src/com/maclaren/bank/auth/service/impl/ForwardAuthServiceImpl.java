package com.maclaren.bank.auth.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.auth.bean.ForwardAuth;
import com.maclaren.bank.auth.dao.ForwardAuthDAO;
import com.maclaren.bank.auth.service.ForwardAuthService;
import com.maclaren.bank.util.Util;

@Service
public class ForwardAuthServiceImpl implements ForwardAuthService
{
	@Autowired
	private ForwardAuthDAO forwardAuthDao;
	
	public String queryAllForwardAuth(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(forwardAuthDao.getAllForwardAuth()), root);
	}

	public String deleteForwardAuth(ForwardAuth forwardAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(forwardAuthDao.deleteForwardAuth(forwardAuth.getId()));
	}

	public String insertForwardAuth(ForwardAuth forwardAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(forwardAuthDao.insertForwardAuth(wrap(forwardAuth)));
	}

	public String queryForwardAuthByConditions(String role_id, String auth_id,
			String root) {
		// TODO Auto-generated method stub
		ForwardAuth forwardAuth = new ForwardAuth();
		forwardAuth.setRole_id(role_id);
		forwardAuth.setAuth_id(auth_id);
		return Util.buildExtJsonData(Util.list2Json(forwardAuthDao.
				getForwardAuthByConditions(wrap(forwardAuth))), root);
	}

	public String updateForwardAuth(ForwardAuth forwardAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(forwardAuthDao.updateForwardAuth(wrap(forwardAuth)));
	}
	
	public Map wrap(ForwardAuth forwardAuth)
	{
		Map map = new HashMap();
		map.put("id", forwardAuth.getId());
		map.put("role_id", forwardAuth.getRole_id());
		map.put("auth_id", forwardAuth.getAuth_id());
		map.put("operator_id", forwardAuth.getOperator_id());
		return map;
	}
}
