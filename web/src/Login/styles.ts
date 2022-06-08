import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #7159c1;
align-items: center;
justify-content: center;
height: 100vh;
`;
export const Input = styled.input`
  width: 100%;
  display: block;
  margin-top: 8px;
  padding: 7px;
  font-size: 16px;
  color: #7159c1;
  border-radius: 20px;
  border: 1px solid #ccddef;
  outline-color: #7159c1;
  margin-bottom: 20px;

  :focus {
    border: 1px solid #7159c1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;


export const Form = styled.div`
  margin: 20px 0;
  background-color: #fdfdfd;
  padding: 30px 25px;
  border-radius: 25px;
  height: 57vh;
  width: 25vw;
`;
export const H1 = styled.h1`
 font-size: 32px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
`;
export const ButtonLogin = styled.button`
  display: block;
  min-width: 120px;
  border: none;
  background-color: #7159c1;
  color: white;
  border-radius: 25px;
  margin: auto;
  padding: 7px;
  margin-top: 2rem;
`;