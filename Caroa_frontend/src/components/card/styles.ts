import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 250px; /* Fixed width */
  height: 350px; /* Fixed height */
  background-color: ${({ theme }) => theme.colors.terciary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; /* Ensures the image adapts to the layout without distortion */
  border-radius: 8px 8px 0 0; /* Optional: Adds rounded corners to the top of the image */
`;

export const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin-bottom: 0.5rem;
`;

export const CardPrice = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: bold;
`;
// @ts-ignore
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem; /* Adds spacing between cards */
  justify-content: center;
`;