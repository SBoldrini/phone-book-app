
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';

const MySwal = withReactContent(Swal);

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    password: '',
    repassword: ''
  });

  const {name, email, password, repassword} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (isFormRegisterValid()) {
      dispatch(startRegister(name, email, password));
    }
    reset();
  }

  const isFormRegisterValid = () => {
    if(name.trim().length === 0) {
      MySwal.fire('Error', 'Name is required', 'error');
      return false;
    } else if (password !== repassword || password.length < 5) {
      MySwal.fire('Error', 'Password must be at least 6 character and match each other. Try again!.', 'error');
      return false;
    }
    return true;
  }

  const handleInputClick = ({ target }) => {
    target.select();
  }

  return (
    <Container className="text-center">


      <div className="register__form-signin position-absolute top-50 start-50 translate-middle">
        <h1 className="fw-normal">Register a new account</h1>

        <Form className="mt-3" onSubmit={handleRegister}>

          <Row className="g-3">
            <Col xs={12}>
              <FloatingLabel
                controlId="floatingEmail"
                label="Name"
              >
                <Form.Control
                  required
                  autoComplete="off"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
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

            <Col xs={12}>
              <FloatingLabel
                controlId="floatingPassword"
                label="Re Password"
              >
                <Form.Control
                  required
                  autoComplete="off"
                  type="password"
                  placeholder="Re Password"
                  name="repassword"
                  value={repassword}
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
                Register

              </Button>
            </Col>

            <Col>
              <Link
                  to="/auth/login"
                  className="link"
                >
                  Alredy registered?
                </Link>
            </Col>
          </Row>
        </Form>

      </div>

    </Container>
  )
}
