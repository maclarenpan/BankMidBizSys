/**
 * 
 */
package com.maclaren.bank.report.bean;

import java.util.Date;

/**
 * @author pKF64771
 *
 */
public class AssertReport 
{
	private String id;
	
	private String subbank_id;
	
	private String assertType_id;
	
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

	public String getAssertType_id() {
		return assertType_id;
	}

	public void setAssertType_id(String assertTypeId) {
		assertType_id = assertTypeId;
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
