package com.maclaren.bank.auth.web;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.maclaren.bank.login.bean.User;
import com.maclaren.bank.auth.service.ProxyLimitService;
import com.maclaren.bank.util.Constants;
@Controller
public class ProxyLimitController 
{
	@Autowired
	private ProxyLimitService proxyLimitService;
	
	@RequestMapping(value="auth/proxyLimit", params="method=getAll")
	public @ResponseBody String getAllProxyLimit(ModelMap modelMap) throws Exception
	{
		modelMap.put("proxyLimit", proxyLimitService.queryAllProxyLimit());
		return (String) modelMap.get("proxyLimit");
	}
}
