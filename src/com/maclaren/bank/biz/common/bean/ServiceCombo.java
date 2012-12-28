package com.maclaren.bank.biz.common.bean;

public class ServiceCombo {
	private int service_id;
	
	private String serviceName;

	public int getService_id() {
		return service_id;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setService_id(int serviceId) {
		service_id = serviceId;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
}
