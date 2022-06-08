import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';


export const LoginPage = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  });

  const {email, password} = formValues;


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
    reset();
  }

  const handleInputClick = ({ target }) => {
    target.select();
  }

  return (
    <Container className="text-center">

      <div className="login__form-signin position-absolute top-50 start-50 translate-middle">
        <h1 className="fw-normal">Please sign in</h1>

        <Form className="mt-3" onSubmit={handleLogin}>

          <Row className="g-3">
            <Col xs={12}>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
              >
                <Form.Control
                  required
                  autoComplete="off"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                />

                <Form.Control.Feedback type="invalid">
                  Email invalid.
                </Form.Control.Feedback>
              </FloatingLabel>

            </Col>

            <Col xs={12}>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
              >
                <Form.Control
                  required
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                />

                <Form.Control.Feedback type="invalid">
                  Password invalid.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>


            <Col xs={12} className="d-grid d-block">
              <Button
                type="submit"
                size="lg"
              >
                Sign in
              </Button>
            </Col>

            <Col>
              <Link
                to="/auth/register"
                className="link"
              >
                Create new account
              </Link>
            </Col>
          </Row>
        </Form>

      </div>
      
    </Container>
  )
}
