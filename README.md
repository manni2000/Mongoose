# <b>Mongoose doc<b>

Firstly, We will try to understand .. <br><br>What is MongoDB?<br>
<b>MongoDB<b> is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.<br> For more details <a href="https://www.mongodb.com/docs/">Documents here!</a><br>
<br><br> Now, You will understand something called Mongoose? ... <br>
Mongoose is a <a href="https://devdocs.io/javascript/">Javascript</a>  object-oriented programming library that creates a connection between MongoDB and the <a href="https://nodejs.org/en/docs/">Node-js</a> JavaScript runtime environment.
<br><br> The following functions are used on the Document of the Mongoose:<br><br>

Retrieving: The document is retrieved by different model functions like findOne(), findById().<br>
const doc = MyModel.findById(myid);<br><br>
Saving: The document is saved by calling the save function. The function is asynchronous and should be awaited.<br>
await doc.save()<br><br>
Updating using save(): The document can be updated by the save() function as follows:<br>
await MyModel.deleteOne({ _id: doc._id });<br><br>

doc.firstname = 'Manish';<br>
await doc.save();<br><br>
Updating using queries: The document can be updated by the queries without calling the save function.<br>
await MyModel.findByIdAndUpdate(myid,{firstname: 'Manish'},function(err, docs){});<br><br>

Let understand after combinating all above function in one example:<br>
<br> We will be using node.js for this example. Node.js and npm should be installed.<br><br>

Step 1: Create a folder and initialize it:<br>

npm init<br><br>
Step 2: Install mongoose in the project.<br>

npm i mongoose<br><br>

The project structure is as follows:<br>
![image](https://user-images.githubusercontent.com/91480902/200485353-86efe2e4-02c5-4437-af33-5c3f1d160954.png)
<br><br>
Step 3: Create a file called index.js. Inside the index.js, connect to MongoDB. Here the MongoDB Compass is used.<br>

index.js<br><br>
![image](https://user-images.githubusercontent.com/91480902/200485813-11cbaa8a-8568-449c-9130-8b21b8fb7664.png)<br><br>
Step 4: Now run the code using the following command in the Terminal/Command Prompt to run the file.<br>

node index.js<br><br> 
OUTPUT:<br>
![image](https://user-images.githubusercontent.com/91480902/200486263-e25b912a-c566-4651-aa46-27f96fbfddc8.png)
<br><br>
And the document in the MongoDB is as follows:<br>
![image](https://user-images.githubusercontent.com/91480902/200486853-461bf734-28a5-430e-982b-9334c848be56.png)<br><br>
<br> Thank You for Reading!<br>
If You like this Repo give Star mark.<br>

