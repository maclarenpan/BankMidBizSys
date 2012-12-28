package com.maclaren.bank.biz.finance.bean;

/**
 * 银行业务收益率
 * @author pKF64771
 *
 */
public class Yield 
{
	private String id;
	
	private String bank_id;
	
	private String service_id;
	
	private float percent;
	
	private double amount;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getBank_id() {
		return bank_id;
	}
	
	public void setBank_id(String bank_id) {
		this.bank_id = bank_id;
	}

	public String getService_id() {
		return service_id;
	}

	public void setService_id(String serviceId) {
		service_id = serviceId;
	}

	public float getPercent() {
		return percent;
	}

	public void setPercent(float percent) {
		this.percent = percent;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	
}
