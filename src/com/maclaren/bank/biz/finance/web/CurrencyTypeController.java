package com.maclaren.bank.biz.finance.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.biz.finance.service.CurrencyTypeService;

@Controller
public class CurrencyTypeController 
{
	@Autowired
	private CurrencyTypeService currencyTypeService;
	
	@RequestMapping(value="acc/currencyTypeCombo")
	public @ResponseBody String getCurrencyTypeCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("currencyTypeCombos", currencyTypeService.getCurrencyTypeCombo("currencyTypeCombos"));
		return (String) modelMap.get("currencyTypeCombos");
	}
}
