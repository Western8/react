//import './FormCtrl.css';

function FormCtrl() {

  function handleSubmit() {
    console.log('1111111111111111');
  }

  return (
    <div className="form">
      <h1>Controlled form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" />
        <label>Age</label>
        <input type="number" />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default FormCtrl;
