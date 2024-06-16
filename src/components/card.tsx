import Image from "next/image";
import styled from "styled-components";
import { CardProps } from "../utils/types";

const CardContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;

  display: flex;
  align-items: center;
  margin: 0.5em 0; 
  font-size: 0.7em;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  margin: 1em;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--highlight-color);
    transition: 0.15s;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 400;
    margin: 0;
  }

  span {
    font-size: 1.1em;
    margin-top: 0.5em;
  }
`;

const HighlightedText = styled.span`
  display: inline;
  color: var(--highlight-color);
  font-weight: bold;
`;

const Card = ({ image, title, data, highlighted }: CardProps) => {
  return (
    <CardContainer>
      <ProfileImage
        src={image}
        alt="Profile image"
        width={50}
        height={50}
      />
      <UserInfo>
        <h1>{title}</h1>
        <span>
          <p>{data}<HighlightedText> {highlighted}</HighlightedText></p>
        </span>
      </UserInfo>
    </CardContainer>
  );
};

export default Card;
