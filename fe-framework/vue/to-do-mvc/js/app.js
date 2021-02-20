// interface Todo {
// 	content: string;
// 	completed: boolean;
// }

(function (Vue) {
	'use strict';

	// Your starting point. Enjoy the ride!


	new Vue({
		el: '#todoapp',
		data:{
			title: 'Todo Vue',
			todolist: [],
			newContent: '',
			editingTodo: null,
			filterStatus: 'all',
		},
		computed: {
			filterTodo: function() {
				if (this.filterStatus === 'all') {
					return this.todolist;
				} else if (this.filterStatus === 'active') {
					return this.todolist.filter((todo, i) => !todo.completed);
				} else if (this.filterStatus === 'completed') {
					return this.todolist.filter((todo, i) => todo.completed);
				}
			},
			todoItemActive: function() {
				return this.todolist.filter((todo) => !todo.completed).length;
			},
			todoItemCompleted: function() {
				return this.todolist.filter((todo) => todo.completed).length;
			},
			allCompleted: {
				// 初次需要 get 判断状态
				get: function() {
					return !this.todolist.some(todo => !todo.completed)
				},
				set: function(value) {
					this.todolist = this.todolist.map(todo => {
						todo.completed = value
						return todo;
					});
				}
			}
		},
		methods: {
			addTodo: function() {
				if (!this.newContent) {
					return;
				}
				
				this.todolist.push({
					content: this.newContent,
					completed: false
				});

				this.newContent = '';
			},
			destroyTodo: function(todo) {
				let index = this.todolist.indexOf(todo);
				this.todolist.splice(index, 1);
			},
			changefilterStatus: function(status) {
				this.filterStatus = status;
			},
			clearCompleted: function() {
				if (this.todoItemCompleted) {
					this.todolist = this.todolist.filter((todo) => !todo.completed);	
				}
			},
			editTodo: function(todo) {
				this.tempTodo = JSON.stringify(todo);
				this.editingTodo = todo;
			},
			cancelEdit: function(todo) {
				this.editingTodo = null;
				let index = this.todolist.indexOf(todo);
				this.todolist.splice(index, 1, JSON.parse(this.tempTodo));
			
			},
			finishEdit: function(todo) {
				this.editingTodo = null;
			}
		},
	});

})(Vue);
