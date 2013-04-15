(function () {
	var Todo = this.Todo = {
		tasks : [],
		addTask : function (task) {
			this.tasks.push(task);
			this.updateTaskListView();
		},
		removeTask : function (taskId) {
			var t = this.tasks;
			for (var i in t) if (t[i].taskId == taskId) t.splice(t.indexOf(t[i]),1);
			this.updateTaskListView();
		},
		completeTask : function (taskId) {
			var t = this.tasks;
			for (var i in t) if (t[i].taskId == taskId) t[i].isComplete = true;
			this.updateTaskListView();
		},
		dumpTasks : function () {
			var t = this.tasks;
			for (var i in t) console.log(t[i]);
		},
		taskListView : {
			container : null,
			clear : function () {
				this.container.innerHTML = "";
			},
			addTask : function (task) {
				var e = document.createElement("div");
				e.setAttribute("id",task.taskId);
				e.setAttribute("class","TodoTask");
				if (task.isComplete) e.setAttribute("class","TodoTask TodoTaskComplete");
				e.innerHTML = "- " + task.taskDescription;
				var h = "<input ";
				h += "style='float:right;cursor:pointer;' ";
				h += "type='button' ";
				h += "value='X' ";
				h += "onclick='javascript:Todo.removeTask("+task.taskId+");'/>";
				h += "<input ";
				h += "style='float:right;cursor:pointer;' ";
				h += "type='button' ";
				h += "value='&#10003;' ";
				h += "onclick='javascript:Todo.completeTask("+task.taskId+");'/>";
				e.innerHTML += h;
				this.container.appendChild(e);
			}
		},
		setTaskListContainer : function (container) {
			this.taskListView.container = container;
		},
		updateTaskListView : function () {
			this.taskListView.clear();
			var t = this.tasks;
			for (var i in t) this.taskListView.addTask(t[i]);
		},
		promptToAddTask : function () {
			var taskDescription = prompt("What is the task?");
			this.addTask(new Todo.Task(taskDescription));
		}
	};
	var Task = this.Todo.Task = function (taskDescription) {
		this.taskId = (((1+Math.random())*0x100)|0);
		this.taskDescription = taskDescription;
		this.isComplete = false;
	};
}())