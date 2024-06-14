import { RxExit } from "react-icons/rx";
import styled from "styled-components";
import { userMock } from "../utils/mocks";
import Card from "./card";

const ProfileContainer = styled.div`
  margin-top: 2em;
  border-top: 2px solid var(--text-secondary);
`;

const ExitIcon = styled(RxExit)`
  cursor: pointer;
  position: relative;
  font-size: 1.8em;
  bottom: 2.5em;
  left: 7em;
  transition: 0.15s;

  &:hover {
    color: var(--logo-color);
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
