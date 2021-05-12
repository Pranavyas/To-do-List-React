import React, {useState} from "react";

function CreateArea(prop) {

  //const [a, b] = useState(""); 
  //const [c, d] = useState("");  

  const [area, setArea] = useState({
    title:"",
    content:""
  });

  function editArea(props) {

    
      const {name, value} = props.target;

     setArea((ar) => {
       return {
        ...ar,
        [name]:value

       };
     });

  
  }



  return (
    <div>
      <form onSubmit={ (event) =>
      
      event.preventDefault() 
      
      }>

        <input onChange= {editArea} value={area.title} name="title" placeholder="Title" />
        <textarea onChange = {editArea} value={area.content} name="content" placeholder=" Write List..." rows="3" />
        <button onClick = { () => {
            prop.ntitle(area);
            setArea({
            title:"",
            content:""
            });
            
          }
        }>Insert</button>
      </form>
    </div>
  );
}

export default CreateArea;
