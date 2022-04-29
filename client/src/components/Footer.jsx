import React from 'react';
import styled from 'styled-components';
import  TikTok  from '../assets/icons/tiktok_icon';
import  Instagram  from '../assets/icons/instagram_icon';
import  Pintrest  from '../assets/icons/pintrest_icon';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  
`;
const Desc = styled.p`
  
`;
const SocialContainer = styled.div`
  
`;
const SocialIcon = styled.div`
  
`;
const Center = styled.div`
  
`;
const Right = styled.div`
  
`;

const Footer = () => {
  return (
    <Container>
      <Left><Logo>STOREFRONT.</Logo>
      <Desc>Minimalistic fashion & tech at affordable rates for everyone.</Desc>
      
      <SocialContainer>
        <SocialIcon>
          <TikTok />
        </SocialIcon>
        <SocialIcon>
          <Pintrest />
        </SocialIcon>
        <SocialIcon>
          <Instagram />
        </SocialIcon>
      </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default Footer;