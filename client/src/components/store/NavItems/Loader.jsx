/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react';

const Container = styled.div`
  padding: 200px 0px 200px 295px;
`;
const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`; 
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 20rem;
  width: 35rem;
  background-color: #15202b;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  color: white;
  justify-contet: center;
  align-items: center;
`;

class Loader extends Component {
    render() {
    
        return (
            <Container>
            <Wrapper>
              <Title>Loading your shopping experience...</Title>
              <GridLoader color={'#5ece7b'} loading={true} css={cssOverride} size={30} />
            </Wrapper>
            </Container>
          );
    }
}
  
export default Loader;


  
     
     
     
  