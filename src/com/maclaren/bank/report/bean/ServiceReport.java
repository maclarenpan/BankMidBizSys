package com.maclaren.bank.report.bean;

import java.util.Date;
public class ServiceReport 
{
	private String id;
	
	private String subbank_id;
	
	private String service_id;
	
	private float amount;
	
	private Date createTime;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSubbank_id() {
		return subbank_id;
	}

	public void setSubbank_id(String subbankId) {
		subbank_id = subbankId;
	}

	public String getService_id() {
		return service_id;
	}

	public void setService_id(String serviceId) {
		service_id = serviceId;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
}
