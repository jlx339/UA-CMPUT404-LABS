from flask import Flask, send_from_directory
from flask_restful import reqparse, abort, Api, Resource
from flask.ext.cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

TODOS = {
    'todo1': {'task': 'build an API'},
    'todo2': {'task': '?????'},
    'todo3': {'task': 'profit!'},
}

def abort_if_todo_doesnt_exist(todo_id):
    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))

parser = reqparse.RequestParser()
parser.add_argument('task')


# Todo
# shows a single todo item and lets you delete a todo item
class Todo(Resource):
    def get(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        return TODOS[todo_id]

    def delete(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        del TODOS[todo_id]
        return '', 204

    def put(self, todo_id):
        args = parser.parse_args()
        task = {'task': args['task']}
        TODOS[todo_id] = task
        return task, 201


# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class TodoList(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = parser.parse_args()
        if TODOS:
            todo_id = int(max(TODOS.keys()).lstrip('todo')) + 1
            todo_id = 'todo%i' % todo_id
            TODOS[todo_id] = {'task': args['task']}
            return TODOS[todo_id], 201
        else:
            TODOS['todo1'] = {'task': args['task']}
            return TODOS['todo1'], 201

##
## Actually setup the Api resource routing here
##
api.add_resource(TodoList, '/api/todos')
api.add_resource(Todo, '/api/todos/<todo_id>')

@app.route('/')
def root():
    return send_from_directory('dist', 'index.html')

@app.route('/<path:path>')
def root_path(path):
    return send_from_directory('dist', path)

if __name__ == '__main__':
    app.run(debug=True)
