import { Container, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <Container>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Container>
    </>
  );
};

export default Navigation;
