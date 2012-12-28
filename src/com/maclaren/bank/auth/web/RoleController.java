package com.maclaren.bank.auth.web;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.auth.bean.Role;
import com.maclaren.bank.auth.bean.RoleWrap;
import com.maclaren.bank.auth.service.RoleService;
import com.maclaren.bank.util.Constants;
@Controller
public class RoleController 
{
	@Autowired
	private RoleService roleService;
	
	@RequestMapping(value="auth/role", params="method=getAll")
	public @ResponseBody String getAllRole(ModelMap modelMap) throws Exception
	{
		modelMap.put("roles", roleService.queryAllRole("roles"));
		return (String) modelMap.get("roles");
	}
	
	@RequestMapping(value="auth/role", params="method=getByConditions")
	public @ResponseBody String getRoleByConditions(@RequestParam String role_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("roles", roleService.queryRoleByConditions(role_id, "roles"));
		return (String)modelMap.get("roles");
	}
	
	@RequestMapping(value="auth/role", params="method=insert")
	public @ResponseBody String insertRole(@RequestBody RoleWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Role> list = new ArrayList<Role>();
		modelMap.put("roles", roleService.insertRole(data.getData()));
		return (String) modelMap.get("roles");
	}
	
	@RequestMapping(value="auth/role", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody String deleteRole(@RequestBody RoleWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Role> list = new ArrayList<Role>();
		modelMap.put("roles", roleService.deleteRole(data.getData()));
		return (String) modelMap.get("roles");
	}
	
	@RequestMapping(value="auth/role", params="method=update", method=RequestMethod.POST)
	public @ResponseBody String update(@RequestBody RoleWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Role> list = new ArrayList<Role>();
		modelMap.put("roles", roleService.updateRole(data.getData()));
		return (String) modelMap.get("roles");
	}
	
	@RequestMapping(value="auth/dealRole2Operator", params="method=update")
	public @ResponseBody Integer updateRole2Operator(@RequestParam String operator_id,
			@RequestParam String role_id, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", roleService.dealRole2Operator(operator_id, role_id, 
				Constants.OPERATOR_ROLE_UPDATE));
		return (Integer)modelMap.get("ret");	
	}
	
	@RequestMapping(value="auth/dealRole2Operator", params="method=del")
	public @ResponseBody Integer delRole2Operator(@RequestParam String operator_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", roleService.dealRole2Operator(operator_id, "", 
				Constants.OPERATOR_ROLE_DEL));
		return (Integer) modelMap.get("ret");	
	}
	
	@RequestMapping(value="auth/roleCombo")
	public @ResponseBody String getRoleCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("roleCombos", roleService.getRoleCombo("roleCombos"));
		return (String) modelMap.get("roleCombos");
	}
	
}
