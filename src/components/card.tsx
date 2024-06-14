import Image from "next/image";
import styled from "styled-components";
import { CardProps } from "../utils/types";

const IMAGE_SIZE = 50;
const MARGIN_SIZE = 1.5;
const PADDING_TOP_SIZE = 1.2;
const FONT_SIZE = 0.7;
const TRANSITION_DURATION = 0.15;

const CardContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: ${FONT_SIZE}em;
  margin: ${MARGIN_SIZE}em 0;
  border-top: 2px solid var(--text-secondary);
  width: 100%;
  padding-top: ${PADDING_TOP_SIZE}em;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  margin-right: 1em;
  margin-bottom: 1em;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--logo-color);
    transition: ${TRANSITION_DURATION}s;
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

const HighlightedText = styled.p`
  display: inline;
  color: var(--logo-color);
  font-weight: bold;
`;

const Card = ({ image, title, data, highlighted }: CardProps) => {
  return (
    <CardContainer>
      <ProfileImage
        src={image}
        alt="Profile image"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
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
