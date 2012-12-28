package com.maclaren.bank.auth.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.auth.bean.Role;
import com.maclaren.bank.auth.dao.RoleDAO;
import com.maclaren.bank.auth.service.RoleService;
import com.maclaren.bank.util.Constants;
import com.maclaren.bank.util.Util;

@Service
public class RoleServiceImpl implements RoleService
{	
	@Autowired
	private RoleDAO roleDao;

	public String queryAllRole(String root) 
	{
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(roleDao.getAllRole()), 
				root);
	}
	
	public String queryRoleByConditions(String role_id, String root)
	{
		// TODO Auto-generated method stub
		List list = new ArrayList();
		Role role = new Role();
		role.setRole_id(role_id);
		list = roleDao.queryRoleByConditions(wrap(role));
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public String deleteRole(Role role) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(roleDao.deleteRole(role.getRole_id()));
	}

	public String updateRole(Role role) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(roleDao.updateRole(wrap(role)));
	}

	public String insertRole(Role role) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(roleDao.insertRole(wrap(role)));
	}

	/**
	 * 处理操作员角色配置
	 */
	public int dealRole2Operator(String operator_id, String role_id, int method) 
	{
		// TODO Auto-generated method stub
		if (Constants.OPERATOR_ROLE_UPDATE == method)
		{
			return roleDao.updateRole2Operator(operator_id, role_id);
		}
		else if (Constants.OPERATOR_ROLE_DEL == method)
		{
			return roleDao.delRole4Operator(operator_id);
		}
		return -1;
	}

	/**
	 * 角色增改删
	 */
	/*
	public int RUDRole(Role role, int method) 
	{
		// TODO Auto-generated method stub
		if (Constants.ROLE_ADD == method)
		{
			return roleDao.addRole(role);
		}
		else if (Constants.ROLE_UPDATE == method)
		{
			return roleDao.updateRole(role);
		}
		else if (Constants.ROLE_DEL == method)
		{
			return roleDao.delRole(role);
		}
		return -1;
	}
*/
	public String getRoleCombo(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(roleDao.getRoleCombo()), root);
	}
	
	public Map wrap(Role role)
	{
		Map map = new HashMap();
		map.put("role_id", role.getRole_id());
		map.put("roleName", role.getRoleName());
		return map;
	}

	public int RUDRole(Role role, int method) {
		// TODO Auto-generated method stub
		return 0;
	}
}
