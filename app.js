//TODO yargs library use to parse the command line arguments and generating the user interactive interface
//TODO process.argv to collect the input that passed by the command line
// console.log(process.argv[2]);
// console.log(yargs.argv); //to get the data from cmd using yargs
//TODO command line arguments node file_name.js arguments
//CREATE ADD COMMAND

const yargs = require("yargs");
const notesUtils = require("./notes.js");

yargs.command({
  command: "add", //enter add command in cmd
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    //call add method to add the notes
    notesUtils.addNote(argv.title, argv.body);
  }
});

//CREATE ROMOVE COMMAND
yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notesUtils.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List Of Notes",
  handler: function() {
    notesUtils.listNote();
  }
});

yargs.command({
  command: "read",
  describe: "Read the notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notesUtils.readNote(argv.title);
  }
});

//TODO if we forget to provide yargs.argv then we won't be able to see the operations that we have done so far
//console.log(yargs.argv);
//todo HERE we come up with the yargs.parse() method which will parse the every command that we had applied
yargs.parse();
