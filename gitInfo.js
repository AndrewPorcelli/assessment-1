/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition =
  "Git is a local repository and version control system, where we can save local files at certain times during our coding, check the status of changes, look at history. Its basically a way to make sure you have files saved, can go through and start code at different save points as well, and use in function with gitHub so that it can be stored on a cloud server.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition =
  "GitHub is an online cloud based server that can link to your local git repository so that if your computer dies, your files that are backed up and saved to the github cloud will always be there. It also allows you to share and collaborate with others online with your code, projects or for work as well.";

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
  description:
    "Init is a way to initialize a local repository in the folder you are currently in",
  code: "git init",
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
  description:
    "A command where you can clone a repository into a new directory and creates remote tracking for each branch within.",
  code: "git clone",
};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
  description:
    "A way to ask about a repo. It will tell you if a file has been edited since the last commit or before its first initial commit, it will be red. It will tell you if you have added the repos updated parts in the file with the status in green. Then, after committing the repo it should say the branch is clean.",
  code: "git status",
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
  description:
    "Add is a way to add files to be tracked always. After you add the files the status should show green in it.",
  code: "git add . (when you want all the files within the folder to be tracked) || git add (file name) for only that file",
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {
  description:
    'Commit creates a snapshot of the files that you are currently tracking. It is basically a save point or check point that you can see history in or go back to. You do have to add the -m "" or you will be in noob purgetory.',
  code: 'git commit -m ""',
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    description: 'Updates remote refs alond with associated objects. It is used to uplaod local repositries to a remote repository.',
    code: 'git push -u origin master (or whatever else it has been named)'
}
