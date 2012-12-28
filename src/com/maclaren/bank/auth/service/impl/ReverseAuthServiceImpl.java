package com.maclaren.bank.auth.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.auth.bean.ReverseAuth;
import com.maclaren.bank.auth.dao.ReverseAuthDAO;
import com.maclaren.bank.auth.service.ReverseAuthService;
import com.maclaren.bank.util.Util;

@Service
public class ReverseAuthServiceImpl implements ReverseAuthService
{
	@Autowired
	private ReverseAuthDAO reverseAuthDao;

	public String queryAllReverseAuth(String root) 
	{
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(reverseAuthDao.getAllReverseAuth()), 
				root);
	}

	public String deleteReverseAuth(ReverseAuth reverseAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(reverseAuthDao.deleteReverseAuth(reverseAuth.getId()));
	}

	public String insertReverseAuth(ReverseAuth reverseAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(reverseAuthDao.insertReverseAuth(wrap(reverseAuth)));
	}

	public String queryReverseAuthByConditions(String role_id, String auth_id,
			String root) {
		// TODO Auto-generated method stub
		ReverseAuth reverseAuth = new ReverseAuth();
		reverseAuth.setRole_id(role_id);
		reverseAuth.setAuth_id(auth_id);
		return Util.buildExtJsonData(Util.list2Json(reverseAuthDao.
				getReverseAuthByConditions(wrap(reverseAuth))), root);
	}

	public String updateReverseAuth(ReverseAuth reverseAuth) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(reverseAuthDao.updateReverseAuth(wrap(reverseAuth)));
	}
	
	public Map wrap(ReverseAuth reverseAuth)
	{
		Map map = new HashMap();
		map.put("id", reverseAuth.getId());
		map.put("role_id", reverseAuth.getRole_id());
		map.put("auth_id", reverseAuth.getAuth_id());
		map.put("operator_id", reverseAuth.getOperator_id());
		return map;
	}
}
