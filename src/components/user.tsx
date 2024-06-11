import Image from "next/image";
import { RxExit } from "react-icons/rx";
import styled from "styled-components";

const UserContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 0.7em;
  margin: 1.5em 0;
  border-top: 2px solid var(--text-secondary);
  width: 85%;
  padding-top: 1.2em;

  img {
    border-radius: 50%;
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 400;
    margin: 0;
  }
`;

const ExitIcon = styled(RxExit)`
  margin-right: 0.5em;
  font-size: 1.5em;
  cursor: pointer;
  margin-bottom: 1.5em;

  &:hover {
    color: var(--logo-color);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export function User() {
  return (
    <UserContainer>
      <Image src="/mc.jpg" alt="User profile picture" width={50} height={50} />
      <UserInfo>
        <h3>Marcelo</h3>
        <h3>marcelo@email.com</h3>
      </UserInfo>
      <ExitIcon />
    </UserContainer>
  );
}
