package com.maclaren.bank.orga.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.orga.service.SubbankService;
@Controller
public class SubbankController 
{
	@Autowired
	private SubbankService subbankService;
	
	@RequestMapping(value="orga/subbank", params="method=getAll")
	public @ResponseBody String getAllRole(ModelMap modelMap) throws Exception
	{
		modelMap.put("subbank", subbankService.queryAllSubbank());
		return (String) modelMap.get("subbank");
	}
	
	@RequestMapping(value="orga/bankCombo")
	public @ResponseBody String getBankCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("bankCombos", subbankService.queryBankCombo("bankCombos"));
		return (String) modelMap.get("bankCombos");
	}
}
