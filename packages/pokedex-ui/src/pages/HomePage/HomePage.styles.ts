import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => (theme === 'dark' ? '#1a1a2e' : '#f5f5f5')};
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;
