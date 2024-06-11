import Image from "next/image";
import { RxExit } from "react-icons/rx";
import styled from "styled-components";

const UserContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 0.7em;
  margin: 1.5em 0;
  border-top: 2px solid var(--text-secondary);
  width: 100%;
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
  cursor: pointer;
  margin-left: -20px;
  margin-bottom: 2em;
  font-size: 1.8em;

  &:hover {
    color: var(--logo-color);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ProfileImage = styled(Image)`
  cursor: pointer;

  &:hover {
    border: 2px solid var(--logo-color);
    transition: 0.3s;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.3s;
  }
`;

export function User() {
  return (
    <UserContainer>
      <ProfileImage src="/mc.jpg" alt="User profile picture" width={50} height={50} />
      <UserInfo>
        <h3>Marcelo</h3>
        <h3>marcelo.coldibelli@gmail.com</h3>
      </UserInfo>
      <ExitIcon />
    </UserContainer>
  );
}
