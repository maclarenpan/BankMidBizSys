package com.maclaren.bank.biz.common.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.biz.common.service.BizService;
@Controller
public class BizController 
{
	@Autowired
	private BizService bizService;
	
	@RequestMapping(value="biz/serviceCombo.action")
	public @ResponseBody String getServiceCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("serviceCombos", bizService.getServiceCombo("serviceCombos"));
		return (String) modelMap.get("serviceCombos");
	}
	
}
