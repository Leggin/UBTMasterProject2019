# drizzle_react
## Setup
[truffle](https://truffleframework.com/truffle), [drizzle](https://truffleframework.com/drizzle) and [ganache-cli](https://github.com/trufflesuite/ganache-cli) need to be installed global via the [npm](https://www.npmjs.com/) package manager. 
```
$ npm install -g ganache-cli
$ npm install -g truffle
```

Run the ganache-cli, this starts a local blockchain where the application will connect to.
```
$ ganach-cli
```

Open a new terminal in the project folder and migrate the ContractCollaborationManager.sol to the Blockchain.
```
$ truffle migrate
```

Change the directory into the client directory of the project.
```
$ cd client
```

Install the package requirements.
```
$ npm install
```
Then you can run the application by starting the npm server.
```
$ npm start
```
## Class diagram
![Text to show](https://github.com/Jonasmpi/drizzle_react/blob/master/public/Klassendiagramm.svg "class diagram" ) 

## Usage
The first step is to add a collaborator by clicking on `Add Collaborator` in the left menu. Then you have to select which account should be added and set a name.
The next step is to create a task. This can be done in the `create Task` menu option. Here you set a name for the `activity` (a string that describes the activity), select the responsible `account`, select a task `type` and set if this task has any other tasks (`requirements`) that need to be completed before this task can be completed (this should not be the case since it is the first task).
Then you click on `Create Task`.

