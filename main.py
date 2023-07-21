from flask import Flask, jsonify, request
from service.authLog import signUp,logIn,logout,deleteUser,updateUser,readManager
from service.projects import createProject,asignProjectToManager,updateProject,deleteProject,displayProjects,display_single_project
from service.resource import addResource,deleteResouce,updateResource,showResources,asignResourceToTask,show_single_resource

app = Flask(__name__)

# User Signup api
@app.route('/user/signup')
def dosignUp():return signUp(request.get_json())

# User Login api
@app.route('/user/login')
def doLogIn():return logIn(request.get_json())

# User Logout api
@app.route('/user/logout/<email>')
def doLogOut(email):return logout(email)

# User Delete api
@app.route('/user/delete/<email>')
def delete_user_route(email):return deleteUser(email)

# User Update api
@app.route('/user/update/<email>')
def update_user_route(email):return updateUser(email,request.get_json())

# If User is Admin Manager then he can read all Manager with this api
@app.route('/user/managers/<email>')
def show_managers(email):return readManager(email)

# Only Admin can create project with this api
@app.route('/project/<email>',methods=['POST'])
def addProject(email):return createProject(email,request.get_json())

# Only Admin can assignProject with this api
@app.route('/project/<email>',methods=['PUT'])
def assignProject(email):return asignProjectToManager(email,request.get_json())

# Admin can update with this api
@app.route('/project/<email>',methods=['PATCH'])
def updateProject(email):return updateProject(email,request.get_json())

# User display project with this api
@app.route('/project/<email>',methods=['GET'])
def allProjects(email):return displayProjects(email)

# Admin can display project by projectID using this api
@app.route('/project/<email>/<projectid>',methods=['GET'])
def getProject(email,projectid):return display_single_project(email, projectid)

# Admin can delete project by projectID using this api
@app.route('/project/<email>/<projectid>',methods=['DELETE'])
def deleteProject(email,projectid):return deleteProject(email,projectid)

# Admin can create resouces with this api
@app.route('/res/<email>',methods=['POST'])
def createResource(email):return addResource(email,request.get_json())

# Admin can delete resouce by resourceID with this api
@app.route('/res/<email>/<resid>',methods=['DELETE'])
def removeResource(email,resid):return deleteResouce(email,resid)

# Admin can update resouce by resourceID with this api
@app.route('/res/<email>/<resid>',methods=['PATCH'])
def updateResource(email,resid):return updateResource(email,resid,request.get_json())

# Admin can show resource with this api
@app.route('/res/<email>',methods=['GET'])
def getAllResources(email):return showResources(email)

# Admin can update task by resourceID using this api
@app.route('/res/<email>/<task>/<resId>',methods=['PATCH'])
def assignResources(email,task,resId):return asignResourceToTask(email,task,resId)

# Admin can show task with this api
@app.route('/res/<email>/<resid>')
def getSingleResource(email,resid):return show_single_resource(email,resid)

if __name__ == '__main__':
    app.run( port=8000 )