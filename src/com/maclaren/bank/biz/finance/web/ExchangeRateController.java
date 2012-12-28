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

import com.maclaren.bank.biz.finance.bean.ExchangeRate;
import com.maclaren.bank.biz.finance.bean.ExchangeRateWrap;
import com.maclaren.bank.biz.finance.service.ExchangeRateService;

@Controller
public class ExchangeRateController 
{
	@Autowired
	private ExchangeRateService exchangeRateService;
	
	@RequestMapping(value="acc/exchangeRate", params="method=getAll")
	public @ResponseBody String getAllExchangeRate(ModelMap modelMap) throws Exception
	{
		modelMap.put("exchangeRates", exchangeRateService.queryAllExchangeRate("exchangerates"));
		return (String) modelMap.get("exchangeRates");
	}
	
	@RequestMapping(value="acc/exchangeRate", params="method=getByConditions")
	public @ResponseBody String getExchangeRateByConditions(@RequestParam String currencyType1_id,
			@RequestParam String currencyType2_id, ModelMap modelMap) throws Exception 
	{
		modelMap.put("exchangeRates", exchangeRateService.
				queryExchangeRateByConditions(currencyType1_id, currencyType2_id, "exchangerates"));
		return (String) modelMap.get("exchangeRates");
	}
	
	@RequestMapping(value="acc/exchangeRate", params="method=insert")
	public @ResponseBody String insert( ModelMap modelMap) throws Exception
	{
		List<ExchangeRate> list = new ArrayList<ExchangeRate>();
		//modelMap.put("exchangeRates", exchangeRateService.insert(data.getData()));
		return (String) modelMap.get("exchangeRates");
	}
	
	@RequestMapping(value="acc/exchangeRate", params="method=delete")
	public @ResponseBody void delete(@RequestBody ExchangeRateWrap data, ModelMap modelMap) throws Exception
	{
		List<ExchangeRate> list = new ArrayList<ExchangeRate>();
		modelMap.put("exchangeRates", exchangeRateService.delete(data.getData()));
	}
	
	@RequestMapping(value="acc/exchangeRate", params="method=update")
	public @ResponseBody String update(@RequestBody ExchangeRateWrap data, ModelMap modelMap) throws Exception
	{
		List<ExchangeRate> list = new ArrayList<ExchangeRate>();
		modelMap.put("exchangeRates", exchangeRateService.delete(data.getData()));
		return (String) modelMap.get("exchangeRates");
	}
}
