import Container from 'react-bootstrap/Container';

export const NotFound = () => {
  return (
    <Container className="text-center">
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="display-1">404</h1>
        <h2 className="display-6">Oops! Page not found</h2>
        <p>Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.</p>
      </div>
    </Container>
  )
}
