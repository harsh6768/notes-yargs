const fs = require("fs");
const chalk = require("chalk");

//TODO add note
const addNote = (title, body) => {
  const notes = loadNotes();
  //as notes return got the empty string

  //check is title is already present in the array or not
  //if condition matched then then it will add the value into the duplicate array else not
  //const duplicateNote = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  debugger;
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    //save the notes into the file
    console.log("notes added!!!");
  } else {
    console.log("Note not added!!!");
  }
};
//TODO remove note
const removeNote = title => {
  const notes = loadNotes();

  //remove the note
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    //save the rest notes into the file
    saveNotes(notesToKeep);
    console.log(chalk.green("Note Deleted Successfully!!!"));
  } else {
    console.log(chalk.red("Note Not found!!!"));
  }
};
//save the data into the file
const saveNotes = notes => {
  const jsonData = JSON.stringify(notes);

  fs.writeFileSync("notes.json", jsonData);
};
//TODO read note
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.green(note.title));
    console.log(chalk.yellow(note.body));
  } else {
    console.log(chalk.red("Note not found!!!"));
  }
};
//TODO List of all notes
const listNote = () => {
  const notes = loadNotes();
  notes.forEach(element => {
    console.log(chalk.blue.bold(element.title));
  });
};
//to load the data
const loadNotes = () => {
  //TODO WHEN WE READ FILE FILE SHOULD BE AVAILABLE OTHERWISE IT WILL GIVE THE ERROR
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    //read the file
    const dataJson = dataBuffer.toString();
    // convert binary data to string

    return JSON.parse(dataJson);
  } catch (err) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
};
