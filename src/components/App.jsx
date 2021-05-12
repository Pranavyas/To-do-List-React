import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [note, editNote] = useState([]);

 // const [note, editNote] = useState([]);

  function addtitle(notess) {
    
    //adding the notes to previous array 
    editNote((prev) => {
      return [...prev, notess];
    });


    
  }

  function deleteit(id) {

      // deleting the list element


   // console.log(id);
   
    editNote(prev => {
     return prev.filter((a,index) => {
        return index!== id; 
      });
    });

  }


  return (
    <div>
      <Header />

      <CreateArea 

        ntitle = {addtitle}
        

      />

      {

        note.map( (notes, index) =>    
        
        <Note 
        
        key={index} 
        id = {index}
        title={notes.title} 
        content={notes.content} 
        onchange = {deleteit}
        />
     
        )

      }



      <Footer />
    </div>
  );
}

export default App;
