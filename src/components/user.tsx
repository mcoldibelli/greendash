import { RxExit } from "react-icons/rx";
import styled from "styled-components";
import { userMock } from "../utils/mocks";
import Card from "./card";

const ProfileContainer = styled.div`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: var(--border-radius);

  img:hover {
    transform: scale(1.1);
    border: 2px solid var(--highlight-color);
  }

  img:active {
    transform: scale(0.9);
  }
`;

const ExitIcon = styled(RxExit)`
  cursor: pointer;
  position: absolute;
  font-size: 1.8em;
  bottom: 1.5em;
  left: 7em;
  transition: 0.15s;

  &:hover {
    transform: scale(1.1);
  }


  &:active {
    transform: scale(0.9);
  }
`;


export function User() {
  return (
    <ProfileContainer>
      <Card
        id={userMock.id}
        title={userMock.title}
        image={userMock.image}
        data={userMock.data}
        highlighted={userMock.highlighted}
      >
      </Card >
      < ExitIcon />
    </ProfileContainer>
  );
}
