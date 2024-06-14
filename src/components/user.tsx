import { RxExit } from "react-icons/rx";
import styled from "styled-components";
import { userMock } from "../utils/mocks";
import Card from "./card";

const ExitIcon = styled(RxExit)`
  cursor: pointer;
  position: absolute;
  font-size: 1.8em;
  bottom: 2.2em;
  left: 8em;
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
    <>
      <Card
        id={userMock.id}
        title={userMock.title}
        image={userMock.image}
        data={userMock.data}
        highlighted={userMock.highlighted}
      >
      </Card >
      < ExitIcon />
    </>
  );
}
