import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    color: var(--grey-500);
    line-height: 1.5;
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
