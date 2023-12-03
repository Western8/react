//import './FormUnctrl.css';
import { useNavigate } from 'react-router-dom';

function FormUnctrl() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate('/', { replace: true });
  }

  return (
    <div className="form">
      <h1>Uncontrolled form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" />
        <label>Age</label>
        <input type="number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormUnctrl;
