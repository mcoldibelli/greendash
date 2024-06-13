import Image from "next/image";
import { CardProps } from "../utils/types";
import styled from "styled-components";

const CardContainer = styled.div`
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

  img:hover {
    cursor: pointer;
    border: 2px solid var(--logo-color);
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
    display: flex;
    align-items: center;
    margin-top: 0.5em;

    p {
      margin: 0;
    }

    .highlighted {
      margin-left: 0.5em;
      color: var(--logo-color);
    }
  }
`;

export function Card(props: CardProps) {
  return (
    <CardContainer>
      <Image
        src={props.image}
        alt="Profile image"
        width={50}
        height={50}
      />
      <UserInfo>
        <h1>{props.title}</h1>
        <span>
          <p>{props.data} </p>
          {props.highlighted && <p className="highlighted">{props.highlighted}</p>}
        </span>
      </UserInfo>
    </CardContainer>
  )
};