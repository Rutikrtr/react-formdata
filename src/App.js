
import './App.css';
import { useState } from 'react'
function App() {

  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    comments: "",
    isvisible: true,
    mode: "",
    Favcar : ""
  })
  
  function changeHandler(e) {
    const { type, checked, value, name } = e.target
    setformdata((preData) => {
      return {
        ...preData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function OnSubmitHandler(e) {
      e.preventDefault();
      console.log(formdata)
      
  }
  return (
    <div className="App">
      <form onSubmit={OnSubmitHandler}>
        <input
          type="text"
          placeholder="firstname"
          onChange={changeHandler}
          name="firstname"
          value={formdata.firstname}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="lastname"
          onChange={changeHandler}
          name="lastname"
          value={formdata.lastname}
        />
        <br></br>
        <br></br>
        <textarea
          type='text'
          placeholder='type comments'
          onChange={changeHandler}
          name='comments'
          value={formdata.comments}
        />
        <br></br><br></br>
        <input
          type='checkbox'
          name='isvisible'
          onChange={changeHandler}
          checked={formdata.isvisible}
          id='isvisible'
        />
        <label htmlFor='isvisible'>Am i visible ?</label>
        <br></br><br></br>

        <fieldset>
          <legend>Mode :</legend>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online-Mode"
            id='Online-Mode'
            checked={formdata.mode === "Online-Mode"}
          />
          <label htmlFor='Online-Mode'>Online mode</label>
          <br></br><br></br>
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked={formdata.mode === "Offline-Mode"}
          />
          <label htmlFor='Offline-Mode'>Offline mode</label>
        </fieldset>

        <br></br><br></br>

        <select
        name='Favcar'
        id='Favcar'
        value={formdata.favcar}
        onChange={changeHandler}
        >
        <option value="scarpio">scarpio</option>
        <option value="fartuner">Fartuner</option>
        <option value="swift">swift</option>
        </select>
        <label htmlFor='Favcar'>select Fav car</label>
        <br></br><br></br>
        <button>Submit</button>

      </form>
      
    </div>
  );
}

export default App;
