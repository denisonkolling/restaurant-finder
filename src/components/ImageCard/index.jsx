import { styled } from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin: 5px;
`;

const Title = styled.span`
  font-family: Roboto;
  color: #ffffff;
  font-size: 14px;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;
