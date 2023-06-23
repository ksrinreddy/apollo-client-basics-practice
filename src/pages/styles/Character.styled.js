import styled from "styled-components";

export const StyledCharacter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding-block: 2rem;

  img {
    object-fit: contain;
    width: calc(450 * 0.0625rem);
    height: calc(450 * 00.0625rem);
  }

  img + div > p {
    margin-bottom: 1rem;
  }
`;
