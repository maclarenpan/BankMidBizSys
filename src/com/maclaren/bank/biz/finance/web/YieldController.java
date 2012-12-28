package com.maclaren.bank.biz.finance.web;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.biz.finance.bean.Yield;
import com.maclaren.bank.biz.finance.bean.YieldWrap;
import com.maclaren.bank.biz.finance.service.YieldService;

@Controller
public class YieldController 
{
	@Autowired
	private YieldService yieldService;
	
	@RequestMapping(value="acc/serviceYield", params="method=getAll")
	public @ResponseBody String getAllServiceYield(ModelMap modelMap) throws Exception
	{
		modelMap.put("serviceyields", yieldService.queryAllYield("serviceyields"));
		return (String) modelMap.get("serviceyields");
	}
	
	@RequestMapping(value="acc/serviceYield", params="method=queryByConditions")
	public @ResponseBody String getServiceYieldByConditions(@RequestParam String bank_id,
			@RequestParam String service_id, ModelMap modelMap) throws Exception 
	{
		modelMap.put("serviceYields", yieldService.
				queryYieldByConditions(bank_id, service_id, "servciceyields"));
		return (String)modelMap.get("serviceYields");
	}
	
	@RequestMapping(value="acc/serviceYield", params="method=insert")
	public @ResponseBody String insertServiceYield(@RequestBody YieldWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<Yield> list = new ArrayList<Yield>();
		modelMap.put("serviceyields", yieldService.addYield(data.getData()));
		return (String) modelMap.get("serviceyields");
	}
	
	@RequestMapping(value="acc/serviceYield", params="method=delete")
	public @ResponseBody String deleteYield(@RequestBody YieldWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<Yield> list = new ArrayList<Yield>();
		modelMap.put("serviceyields", yieldService.delYield((data.getData())));
		return (String) modelMap.get("serviceyields");
	}
	
	@RequestMapping(value="acc/serviceYield", params="method=update")
	public @ResponseBody String updateServiceYield(@RequestBody YieldWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<Yield> list = new ArrayList<Yield>();
		modelMap.put("serviceyields", yieldService.addYield(data.getData()));
		return (String) modelMap.get("serviceyields");
	}
	
	@RequestMapping(value="acc/bankTotalAmount", params="method=getAll")
	public @ResponseBody String getAllBankTotalAmount(ModelMap modelMap) throws Exception
	{
		modelMap.put("bankTotalAmounts", yieldService.getAllBankTotalAmount("banktotalamounts"));
		return (String)modelMap.get("bankTotalAmounts");
	}
	
	@RequestMapping(value="acc/bankTotalAmount", params="method=getByConditions")
	public @ResponseBody String getBankTotalAmountByConditions(@RequestParam String bank_id, 
			ModelMap modelMap) throws Exception
	{
		modelMap.put("bankTotalAmounts", yieldService.getBankTotalAmountByConditions(bank_id, "banktotalamounts"));
		return (String)modelMap.get("bankTotalAmounts");
	}
}
