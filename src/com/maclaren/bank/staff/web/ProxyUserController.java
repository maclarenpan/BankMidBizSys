package com.maclaren.bank.staff.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.staff.service.ProxyUserService;
@Controller
public class ProxyUserController 
{
	@Autowired
	private ProxyUserService proxyUserService;
	
	@RequestMapping(value="staff/proxyUser", params="method=getAll")
	public @ResponseBody String getAllProxyUser(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUser", proxyUserService.queryAllProxyUser());
		return (String) modelMap.get("proxyUser");
	}
	
	@RequestMapping(value="staff/proxyUserType", params="method=getAll")
	public @ResponseBody String getAllProxyUserType(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserType", proxyUserService.queryAllProxyUserType("proxyUserType"));
		return (String) modelMap.get("proxyUserType");
	}
	
	@RequestMapping(value="staff/proxyUserTypeCombo")
	public @ResponseBody String getProxyUserTypeCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserTypeCombos", proxyUserService.queryAllProxyUserType("proxyusertypecombos"));
		return (String) modelMap.get("proxyUserTypeCombos");
	}
	
	@RequestMapping(value="staff/proxyUser", params="method=insert", method=RequestMethod.POST)
	public @ResponseBody void insert(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status, @RequestParam String startTime, 
			@RequestParam String endTime, ModelMap modelMap) throws Exception
	{

	}
	
	@RequestMapping(value="staff/proxyUser", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody void delete(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status, @RequestParam String startTime, 
			@RequestParam String endTime, ModelMap modelMap) throws Exception
	{

	}
	
	@RequestMapping(value="staff/proxyUser", params="method=update", method=RequestMethod.POST)
	public @ResponseBody void update(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status, @RequestParam String startTime, 
			@RequestParam String endTime, ModelMap modelMap) throws Exception
	{

	}
}
