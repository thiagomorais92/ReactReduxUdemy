package com.example;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TodoLoader {
	
	static List<Todo> lista = new ArrayList<Todo>(){/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

	{
		add(new Todo("Passear com o cachorro.", false));
		add(new Todo("Aprender React com Redux e ReduxForms.", false));
		add(new Todo("Lavar o carro .", false));
		add(new Todo("Passear com o cachorro.", false));
	}};
	
	
	
	public static List<Todo> getTodos(){
		return lista;
	}

	
	
	public static Todo buscaTodoPorId(int todoId) {
		Todo todoResultado = null;
		for (Todo todo : lista) {
			if(todo.getId() == todoId){
				todoResultado = todo;
			}
		}
		return todoResultado;
	}

	
	
	public static Todo addTodo(Todo todo) {
		lista.add(todo);
		return todo;
	}

	
	
	public static void removeTodo(int todoId) {
		
		for(Iterator<Todo> iterator = lista.iterator();iterator.hasNext();){
			Todo todo = iterator.next();
			if(todo.getId() == todoId){
				iterator.remove();
			}
		}
		
	}
}	
