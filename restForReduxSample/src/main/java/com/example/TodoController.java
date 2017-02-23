package com.example;

import java.util.Iterator;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/todos")
public class TodoController {
	
	
	@RequestMapping(method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getAllTodos(){
		
		List<Todo> todos = TodoLoader.getTodos();
		ResponseEntity<Object> resposta = new ResponseEntity<Object>(todos, HttpStatus.ACCEPTED);
		return resposta;
	}

	
	@RequestMapping(value="/search/{description}",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> getBySearchFilter(@PathVariable String description){
		
		List<Todo> todos = TodoLoader.getByFilter(description);
		ResponseEntity<Object> resposta = new ResponseEntity<Object>(todos, HttpStatus.ACCEPTED);
		return resposta;
	}
	
	
	@RequestMapping(value="/{todoId}/{isDone}",method = RequestMethod.PUT, consumes = MediaType.ALL_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> markAsDoneTodo(@PathVariable int todoId,@PathVariable boolean isDone){
		List<Todo> todos = TodoLoader.getTodos();
		
		for (Iterator iterator = todos.iterator(); iterator.hasNext(); ) {  
			   Todo todo = (Todo) iterator.next();  
			   if(todo.getId() == todoId){
				   
				   todo.setDone(isDone);
			   }  
			}
		return new ResponseEntity<>(todos ,HttpStatus.CREATED);
	}
	
	
	@RequestMapping(value="/{todoId}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Todo> getTodoById(@PathVariable int todoId){
		Todo todo = TodoLoader.buscaTodoPorId(todoId);
		return new ResponseEntity<Todo>(todo, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.ALL_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> addTodo(@RequestBody Todo todo){
		List<Todo> todos = TodoLoader.addTodo(todo);
		return new ResponseEntity<>(todos ,HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/{todoId}", method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Todo> removeTodo(@PathVariable int todoId){
		TodoLoader.removeTodo(todoId);
		return new ResponseEntity<Todo>( HttpStatus.ACCEPTED);
	}
	
	
}
