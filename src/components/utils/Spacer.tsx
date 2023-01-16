import styled from 'styled-components';

interface ISpacer {
  axis: 'vertical' | 'horizontal',
  size: number
}

const getHeight = ({ axis, size }: ISpacer) => {
  return axis === 'horizontal' ? 0 : size;
}

const getWidth = ({ axis, size }: ISpacer) => {
  return axis === 'vertical' ? 0 : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;