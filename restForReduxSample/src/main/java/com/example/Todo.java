package com.example;

import java.util.Date;
import java.util.Random;

public class Todo {

	private int id;
	
	private String description;
	
	private boolean done;
	
	private Date createdAt;

	
	public Todo(String description, boolean done) {
		super();
		this.description = description;
		this.done = done;
		this.createdAt = new Date();
		this.id = new Random().nextInt(400);
	}

	
	public Todo(String description) {
		super();
		this.description = description;
		this.done = false;
		this.createdAt = new Date();
		this.id = new Random().nextInt(400);
	}
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
	
	
}
