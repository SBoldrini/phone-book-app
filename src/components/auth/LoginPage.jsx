import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useFetchForm } from '../../hooks/useFetchForm';
import { useValidateForm } from '../../hooks/useValidateForm';
import { startLogin } from '../../actions/auth';


export const LoginPage = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    email: 'test@test.com',
    password: '123456'
  });

  const {email, password} = formValues;

  // const [show, setShow] = useState(true);

  // const { handleSubmit:handleLogin, check, validated } = useValidateForm();

  // const { data, loading, error } = useFetchForm({formValues, validated});

  // console.log(data)

  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  }

  const handleInputClick = ({ target }) => {
    target.select();
  }

  return (
    <Container className="text-center">


      <div className="login__form-signin">
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

            {/* <Col sm={12}>
              <Alert variant="danger" onClose={() => setShow(false)} show={error && show} dismissible>
                <Alert.Heading>{error}</Alert.Heading>
                <p>Please talk to the admin.</p>
              </Alert>
            </Col> */}

            <Col xs={12} className="d-grid d-block">
              <Button
                type="submit"
                size="lg"
                // disabled={loading}
              >
                {/* {
                  loading && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                }
                {loading ? ' Logging in...' : 'Sign in'} */}
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
