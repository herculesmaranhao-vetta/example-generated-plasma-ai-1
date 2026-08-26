import styled from 'styled-components';

export const DetailContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

export const HeroSection = styled.div<{ $bgColor: string }>`
  background: ${({ $bgColor }) => $bgColor};
  padding: 32px 24px;
  text-align: center;
  color: #fff;
  position: relative;
`;

export const HeroImage = styled.div`
  margin: 16px auto;
  max-width: 200px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const InfoSection = styled.div`
  padding: 24px;
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const StatLabel = styled.span`
  min-width: 100px;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
`;

export const EvolutionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const EvolutionCard = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 96px;
    height: 96px;
  }

  p {
    margin: 4px 0 0;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export const EvolutionArrow = styled.span`
  font-size: 24px;
  color: #888;
`;
