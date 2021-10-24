import Container from '@mui/material/Container';
import { Navbar } from './navbar';

export const Layout: React.FunctionComponent = (props) => (
  <Container>
    <Navbar />

    {props.children}
  </Container>
);
