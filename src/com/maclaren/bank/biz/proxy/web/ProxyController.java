package com.maclaren.bank.biz.proxy.web;
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

import com.maclaren.bank.biz.proxy.bean.ProxyUserAccountService;
import com.maclaren.bank.biz.proxy.bean.ProxyUserAccountServiceWrap;
import com.maclaren.bank.biz.proxy.bean.ProxyUserLimit;
import com.maclaren.bank.biz.proxy.bean.ProxyUserLimitWrap;
import com.maclaren.bank.biz.proxy.bean.ProxyUserTypeLimitWrap;
import com.maclaren.bank.biz.proxy.service.ProxyService;
@Controller
public class ProxyController 
{
	@Autowired
	private ProxyService proxyService;
	
	/**
	 * 添加代理用户限制
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="proxy/proxyUserLimit", params="method=getAll")
	public @ResponseBody String getAllProxyUserLimit(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserLimits", proxyService.queryAllProxyUserLimit());
		return (String) modelMap.get("proxyUserLimits");
	}
	
	@RequestMapping(value="proxy/proxyUserLimit", params="method=getByConditions")
	public @ResponseBody String getProxyUserLimitByConditions(@RequestParam String proxyUserName,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserLimits", proxyService.queryProxyUserLimitByConditions(proxyUserName, "proxyUserLimits"));
		return (String)modelMap.get("proxyUserLimits");
	}
	
//	@RequestMapping(value="proxy/proxyUserLimit", params="method=insert")
//	public @ResponseBody String insertProxyUserLimit(@RequestBody ProxyUserLimitWrap data, ModelMap modelMap) throws Exception
//	{
//		List<ProxyUserLimit> list = new ArrayList();
//		modelMap.put("proxyUserLimits", proxyService.insertProxyUserLimit(data.getData()));
//		return (String)modelMap.get("proxyUserLimits");
//	}
//	
//	@RequestMapping(value="proxy/proxyUserLimit", params="method=delete") 	public @ResponseBody String delProxyUserLimit(@RequestBody ProxyUserLimitWrap data, 
//			ModelMap modelMap) throws Exception
//	{
//		List<ProxyUserLimit> list = new ArrayList<ProxyUserLimit>();
//		modelMap.put("proxyUserLimits", proxyService.deleteProxyUserLimit(data.getData()));
//		return (String) modelMap.get("proxyUserLimits");
//	}
	
	@RequestMapping(value="proxy/proxyUserLimit", params="method=update")
	public @ResponseBody String updateProxyUserLimit(@RequestBody ProxyUserLimitWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<ProxyUserLimit> list  = new ArrayList<ProxyUserLimit>();
		modelMap.put("proxyUserLimits", proxyService.updateProxyUserLimit(data.getData()));
		return (String) modelMap.get("proxyUserLimits");
	}
	
	
	/**
	 * 添加代理用户类型限制
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="proxy/proxyUserTypeLimit", params="method=getAll")
	public @ResponseBody String getAllProxyUserTypeLimit(ModelMap modelMap) throws Exception
	{
		String json = proxyService.queryAllProxyUserTypeLimit();
		modelMap.put("proxyUserTypeLimits", proxyService.queryAllProxyUserTypeLimit());
		return (String) modelMap.get("proxyUserTypeLimits");
	}
	
	@RequestMapping(value="proxy/proxyUserTypeLimit", params="method=getByConditions")
	public @ResponseBody String getProxyUserTypeLimitByConditions(@RequestParam String proxyUserTypeName,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserTypeLimits", proxyService.queryProxyUserTypeLimitByConditions(proxyUserTypeName, "proxyUserTypeLimits"));
		return (String)modelMap.get("proxyUserTypeLimits");
	}
	
	@RequestMapping(value="proxy/proxyUserTypeLimit", params="method=insert")
	public @ResponseBody Integer addProxyUserTypeLimit(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserTypeLimit", params="method=delete")
	public @ResponseBody Integer delProxyUserTypeLimit(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserTypeLimit", params="method=update")
	public @ResponseBody String updateProxyUserTypeLimit(@RequestBody ProxyUserTypeLimitWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<ProxyUserLimit> list  = new ArrayList<ProxyUserLimit>();
		modelMap.put("proxyUserTypeLimits", proxyService.updateProxyUserTypeLimit(data.getData()));
		return (String) modelMap.get("proxyUserTypeLimits");
	}
	
	/**
	 * 取得所有代理用户账户关联
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="proxy/proxyUserAndAcc", params="method=getAll")
	public @ResponseBody String getAllProxyUserAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserAndAcc", params="method=insert")
	public @ResponseBody Integer addProxyUserAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserAndAcc", params="method=delete")
	public @ResponseBody Integer delProxyUserAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserAndAcc", params="method=update")
	public @ResponseBody Integer updateProxyUserAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	/**
	 * 取得所有代理用户y业务关联
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="proxy/proxyUserAndService", params="method=getAll")
	public @ResponseBody String getAllProxyUserAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserAndService", params="method=insert")
	public @ResponseBody Integer addProxyUserAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserAndService", params="method=delete")
	public @ResponseBody Integer delProxyUserAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyUserAndService", params="method=update")
	public @ResponseBody Integer updateProxyUserAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	/**
	 * 取得所有代理客户账户关联
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="proxy/proxyClientAndAcc", params="method=getAll")
	public @ResponseBody String getAllProxyClientAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyClientAndAcc", params="method=insert")
	public @ResponseBody Integer addProxyClientAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyClientAndAcc", params="method=delete")
	public @ResponseBody Integer delProxyClientAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyClientAndAcc", params="method=update")
	public @ResponseBody Integer updateProxyClientAndAcc(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	/**
	 * 取得所有代理客户业务关联
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="proxy/proxyClientAndService", params="method=getAll")
	public @ResponseBody String getAllProxyClientAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyClientAndService", params="method=insert")
	public @ResponseBody Integer addProxyClientAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyClientAndService", params="method=delete")
	public @ResponseBody Integer delProxyClientAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="proxy/proxyClientAndService", params="method=update")
	public @ResponseBody Integer updateProxyClientAndService(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	/**
	 * 代理用户账务业务
	 * @return
	 */
	@RequestMapping(value="proxy/proxyUserCombo")
	public @ResponseBody String getProxyUserCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserCombos", proxyService.getProxyUserCombo("proxyusercombos"));
		return (String) modelMap.get("proxyUserCombos");
	}
	
	@RequestMapping(value="proxy/proxyClientCombo")
	public @ResponseBody String getProxyClientCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyClientCombos", proxyService.getProxyClientCombo("proxyclientcombos"));
		return (String) modelMap.get("proxyClientCombos");
	}
	
	@RequestMapping(value="proxy/proxyUserAccountService", params="method=getAll")
	public @ResponseBody String getAllProxyUserAccountService(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserAccountServices", proxyService.getAllProxyUserAccountService("proxyuseraccountservices"));
		return (String)modelMap.get("proxyUserAccountServices");
	}
	
	@RequestMapping(value="proxy/proxyUserAccountService", params="method=getByConditions")
	public @ResponseBody String getProxyUserAccountServiceByConditions(@RequestParam String proxyUser_id, @RequestParam String account_id,
			@RequestParam String service_id, ModelMap modelMap) throws Exception
	{
		System.out.println("account_id" + account_id + "service_id:" + service_id + "proxyuser_id" + proxyUser_id);
		modelMap.put("proxyUserAccountServices", proxyService.getProxyUserAccountServiceByConditions(proxyUser_id, account_id, service_id, "proxyuseraccountservices"));
		return (String)modelMap.get("proxyUserAccountServices");
	}
	
	@RequestMapping(value="proxy/proxyUserAccountService", params="method=insert")
	public @ResponseBody String insertProxyUserAccountService(@RequestBody ProxyUserAccountServiceWrap data,
			ModelMap modelMap) throws Exception
	{
		List<ProxyUserAccountService> list = new ArrayList<ProxyUserAccountService>();
		modelMap.put("proxyUserAccountServices", proxyService.insertProxyUserAccountService((data.getData())));
		return (String) modelMap.get("proxyUserAccountServices");
	}
	
	@RequestMapping(value="proxy/proxyUserAccountService", params="method=delete")
	public @ResponseBody String deleteProxyUserAccountService(@RequestParam String id,
			ModelMap modelMap) throws Exception
	{
		List<ProxyUserAccountService> list = new ArrayList<ProxyUserAccountService>();
	//	modelMap.put("proxyUserAccountServices", proxyService.deleteProxyUserAccountService(data.getData()));
		return (String) modelMap.get("proxyUserAccountServices");
	}
	
	@RequestMapping(value="proxy/proxyUserAccountService", params="method=update", method=RequestMethod.POST)
	public @ResponseBody String updateProxyUserAccountService(@RequestBody ProxyUserAccountServiceWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<ProxyUserAccountService> list = new ArrayList<ProxyUserAccountService>();
		modelMap.put("proxyUserAccountServices", proxyService.updateProxyUserAccountService(data.getData()));
		return (String) modelMap.get("proxyUserAccountServices");
	}
	
	
	
	@RequestMapping(value="acc/proxyUserAccountAmount", params="method=getAll")
	public @ResponseBody String getAllproxyUserAccountAmount(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserAccountAmounts", proxyService.getAllProxyUserAccountAmount("proxyuseraccountamounts"));
		return (String)modelMap.get("proxyUserAccountAmounts");
	}
	
	@RequestMapping(value="acc/proxyUserAccountAmount", params="method=getByConditions")
	public @ResponseBody String getProxyUserAccountAmountByConditions(@RequestParam String proxyUser_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyUserAccountAmounts", proxyService.getProxyUserAccountAmountByConditions(proxyUser_id, "proxyuseraccountamounts"));
		return (String)modelMap.get("proxyUserAccountAmounts");
	}
	
	@RequestMapping(value="acc/proxyClientAccountAmount", params="method=getAll")
	public @ResponseBody String getAllproxyClientAccountAmount(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyClientAccountAmounts", proxyService.getAllProxyClientAccountAmount("proxyclientaccountamounts"));
		return (String)modelMap.get("proxyClientAccountAmounts");
	}
	
	@RequestMapping(value="acc/proxyClientAccountAmount", params="method=getByConditions")
	public @ResponseBody String getProxyClientAccountAmountByConditions(@RequestParam String proxyClient_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyClientAccountAmounts", proxyService.getProxyClientAccountAmountByConditions(proxyClient_id, "proxyclientaccountamounts"));
		return (String)modelMap.get("proxyClientAccountAmounts");
	}

}
