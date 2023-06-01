import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


export let fullName;
export let email;

function LogInForm() {
  const navigate = useNavigate()
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, serRegisterEmail] = useState('')

  const toggle = (event)=>{
    event.preventDefault()
    navigate('/marvel') // /home
    fullName = registerName;
    email = registerEmail
  }

  function handleChangeName(event) {
    setRegisterName(event.target.value);
  }

  function handleChangeEmail(event) {
    serRegisterEmail(event.target.value);
  }

  return (
    <Form onSubmit={toggle} className='login-form-container'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Type full name" 
          onChange={handleChangeName}
          /* required */
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email"
          onChange={handleChangeEmail}
          /* required */
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button className='button-login-style' variant="success" type="submit">
        LogIn
      </Button>
    </Form>
  );
}

export default LogInForm;