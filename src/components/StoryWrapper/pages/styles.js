import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const TitleDark = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.font.dark};
`;

export const Error = styled.div`
  color: ${(props) => props.theme.font.error};
`;

export const TextDark = styled.div`
  color: ${(props) => props.theme.font.primaryDark};
`;

export const Warning = styled.div`
  color: ${(props) => props.theme.font.warning};
`;

export const SubTitle2 = styled.h2`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.theme.font.primary};
`;

export const PDark = styled.p`
  text-align: center;
  color: ${(props) => props.theme.font.dark};
  width: 100%;
`;

export const Input = styled.input`
  font-size: 1em;
  text-align: left;
  color: ${(props) => props.theme.font.primary};
  background: none;
  border: none;
  border-bottom: 1px dashed ${(props) => props.theme.font.primary};
  position: fixed;
  padding-top: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  background: none;
  border: 1px dashed ${(props) => props.theme.branding.primary};
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  color: ${(props) => props.theme.branding.primary};
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonDark = styled.button`
  font-size: 1em;
  text-align: center;
  background: ${(props) => props.theme.font.dark};
  border: 1px dashed ${(props) => props.theme.branding.primary};
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  color: ${(props) => props.theme.font.primary};
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ColumnMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  color: ${(props) => props.theme.font.primary};
  width: '100%';
`;

export const ColumnFull = styled.div`
  color: ${(props) => props.theme.font.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Anchor = styled.a`
  color: ${(props) => props.theme.branding.primary};
`;

export const Divider = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.font.primary};
  width: 100%;
`;

export const ProfileImage = styled.img.attrs((props) => ({
  hover: props.hover,
  display: props.display,
}))`
  max-width: 50px;
  min-width: 50px;
  max-height: 50px;
  min-height: 50px;
  border-radius: 50%;
  border: 2px dotted ${(props) => props.theme.font.primary};
  filter: ${(props) => (props.hover ? `blur(${props.hover}px)` : ``)};
  display: ${(props) => props.display};
`;
