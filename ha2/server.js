// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var fs = require('fs');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

// Todo model is here
var Todo     = require('./app/models/bear');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)


app.get('/', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	fs.readFile('todos.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.get('/todos.html', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	fs.readFile('todos.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.get('/createtodo.html', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	fs.readFile('createtodo.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.get('/howto.html', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	fs.readFile('howto.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.get('/impressum.html', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	fs.readFile('impressum.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.get('/desing.css', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	fs.readFile('desing.css',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/css','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

// on routes that end in /todos
// ----------------------------------------------------
router.route('/todos')

	// create a todo (accessed at POST http://localhost:8080/todos)
	.post(function(req, res) {

		var todo = new Todo();		// create a new instance of the todo model
		todo.todo = req.body.todo;  // set the todos name (comes from the request)
		todo.deadline = req.body.deadline;
		todo.done = req.body.done;

		todo.save(function(err) {
			if (err)
				res.send(err);

			res.json("Todo Created");
    
		});
	})

	// get all the todos (accessed at GET http://localhost:8080/api/todos)
	.get(function(req, res) {
		Todo.find(function(err, todos) {
			if (err)
				res.send(err);

			res.json(todos);
		});
	});

// on routes that end in /todos/:todo_id
// ----------------------------------------------------
router.route('/todos/:todo_id')

	// get the todo with that id
	.get(function(req, res) {
		Todo.findById(req.params.todo_id, function(err, todo) {
			if (err)
				res.send(err);
			res.json(todo);
		});
	})

	// update the todo with this id
	.put(function(req, res) {
		Todo.findById(req.params.todo_id, function(err, todo) {

			if (err)
				res.send(err);
		        todo.todo = req.body.todo;  // set the bears name (comes from the request)
		        todo.deadline = req.body.deadline;
		        todo.done = req.body.done;

		todo.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Todo updated!' });
		});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Todo.remove({
			_id: req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
