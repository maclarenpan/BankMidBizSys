package test;
import java.net.MalformedURLException;

import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;

import webservice.bean.TranObj;

import com.maclaren.bank.biz.proxy.webservice.service.ProxyUserDecuctPorxyClientService;

public class ProxyUserDecuctProxyClientTest {
	private ObjectServiceFactory serviceFactory;
	private XFireProxyFactory proxyFactory;
	private Service service;
	private ProxyUserDecuctPorxyClientService proxyUserDecuctProxyClientServce;
	
	private String url="http://localhost:8080/bankapp/services/ProxyUserDecuctPorxyClientService";
	
	public ProxyUserDecuctProxyClientTest() {
		serviceFactory=new ObjectServiceFactory();
		proxyFactory=new XFireProxyFactory();
	}
	
	public static void main(String[] args) {
		ProxyUserDecuctProxyClientTest pudpc=new ProxyUserDecuctProxyClientTest();
		pudpc.initService();
//		Map map = new HashMap();
//		map.put("guest_id", 2);
//		map.put("subbank_id", 3);
//		map.put("service_id", 2);
//		map.put("shouldPay", 150);
//		map.put("operator_id", 999);

		TranObj tranObj = new TranObj();
		tranObj.setGuest_id(2);
		tranObj.setSubbank_id(3);
		tranObj.setService_id(2);
		tranObj.setShouldPay(150);
		tranObj.setOperator_id(999);
		pudpc.proxyUserDecuctProxyClientServce.proxyUserDecuctPorxyClient(tranObj);
	}

	private void initService(){
		service=serviceFactory.create(ProxyUserDecuctPorxyClientService.class);
		try {
			proxyUserDecuctProxyClientServce=(ProxyUserDecuctPorxyClientService)proxyFactory.create(service,url);
		} catch (MalformedURLException e) {
			System.out.println("服务获取失败...");
			e.printStackTrace();
		}
		System.out.println("服务获取成功...");
	}
}
