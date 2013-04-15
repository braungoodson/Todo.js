Todo.js
=======

Lazy TODO application and framework. Mostly for fun and exercise, spent about 20 minutes on it.

Known Issues
=======

* Browser must support `.innerHTML`.
* Browser must support `box-shadow` CSS.
* Long task descriptions disrupt their button positions.

Usage
=======

<pre>
// As in our example.
Todo.setTaskListContainer(htmlElement);
// Tasks are given a 3 digit GUID.
Todo.addTask(new Todo.Task(taskDescription));
// Draw it up.
Todo.updateTaskListView();

// Furthermore...
var taskDescription = Todo.promptToAddTask();
// As well as...
Todo.removeTask(taskId);
Todo.completeTask(taskId);
// And for debugging...
Todo.dumpTasks();
</pre>
