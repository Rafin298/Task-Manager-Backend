const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
	{
		text: { 
      type: String,
      required: [true, 'Task must have a name'],
      maxlength: [40, 'Task name must have less or equal then 40 characters'],
      minlength: [1, 'Task name must have more or equal then 10 characters']
     },
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamp: true }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
