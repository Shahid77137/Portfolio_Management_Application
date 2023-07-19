from flask_sqlalchemy import SQLAlchemy

# Create an instance of SQLAlchemy
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from urllib.parse import quote_plus

# db = SQLAlchemy()
# Create the Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+mysqlconnector://root:{quote_plus('Shahid@12345#')}@localhost:3306/Portfolio_Application"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)
# Define the Portfolio Manager entity
class PortfolioManager(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    contact_info = db.Column(db.String(100))
    designation = db.Column(db.String(50))
    projects = db.relationship('Project', backref='portfolio_manager', lazy=True)

# Define the Project entity
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), nullable=False)
    start_date = db.Column(db.Date)
    portfolio_manager_id = db.Column(db.Integer, db.ForeignKey('portfolio_manager.id'), nullable=False)
    tasks = db.relationship('Task', backref='project', lazy=True)

# Define the Task entity
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    resources = db.relationship('Resource', secondary='task_resource', backref='tasks', lazy=True)

# Define the Resource entity
class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    tasks = db.relationship('Task', secondary='task_resource', backref='resources', lazy=True)

# Define the Task-Resource association table
task_resource = db.Table('task_resource',
    db.Column('task_id', db.Integer, db.ForeignKey('task.id'), primary_key=True),
    db.Column('resource_id', db.Integer, db.ForeignKey('resource.id'), primary_key=True)
)

# Define the User entity
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    profile = db.relationship('Profile', backref='user', uselist=False)

# Define the Profile entity
class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    about = db.Column(db.Text)
    projects = db.relationship('Project', backref='profile', lazy=True)

with app.app_context():
    # Create the database tables
    db.create_all()

@app.route("/")
def print():
    return "Hello Shahid"

if __name__ == '__main__':
    app.run(port=8008)