import styled from 'styled-components';

// витягнути пропси і прокинути динамічні кольори бордів (пріоритетність)
export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 14px 20px 14px 24px;

  width: 100%;
  min-height: 154px;
  border-radius: 8px;
  background-color: ${props => props.theme.column.backgroundMain};
  /* border-left: 4px solid rgba(143, 161, 208, 1); */

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 151px;
    background-color: rgba(143, 161, 208, 1);
    border-radius: 4px 0px 0px 4px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  color: ${props => props.theme.column.textMain};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: -0.28px;
  font-size: 14px;
`;

export const Text = styled.p`
  position: relative;
  display: flex;
  color: ${props => props.theme.column.textSecondary};

  font-size: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;

  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.column.borderColor};
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
`;

export const Priority = styled.p`
  position: relative;

  display: flex;
  align-items: flex-end;
  padding-left: 16px;
  gap: 4px;

  color: ${props => props.theme.column.textMain};
  font-size: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;

  &::before {
    content: 'Priority';
    position: absolute;
    left: 0;
    top: 0px;
    color: ${props => props.theme.column.textSecondary};
    font-size: 8px;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.16px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(143, 161, 208, 1); // by priority
  }
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 4px;

  color: ${props => props.theme.column.textMain};
  font-size: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;

  &::before {
    content: 'Deadline';
    color: ${props => props.theme.column.textSecondary};
    font-size: 8px;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.16px;
  }
`;

// icons
export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 8px;
`;

export const ActiveIcon = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.column.icon};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    stroke: ${props => props.theme.column.textSecondary};
  }
`;

export const IconBell = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};

  transition: all 150ms linear;
`;

export const MoverWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
`;

// popup items
export const PopupWrapper = styled.ul`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-55%);
  display: inline-flex;
  min-width: 160px;
  padding: 18px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.themePopup.border};
  background: ${props => props.theme.themePopup.background};
  box-shadow: 0px 4px 16px 0px ${props => props.theme.themePopup.boxShadow};
  gap: 4px;
  z-index: 99;
`;

export const PopupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: ${props => props.theme.themePopup.textSecondary};
  stroke: ${props => props.theme.themePopup.textSecondary};
  fill: transparent;
  transition: all 250ms linear;

  &:hover {
    color: ${props => props.theme.themePopup.textAccent};
    stroke: ${props => props.theme.themePopup.textAccent};
  }

  cursor: pointer;
`;

export const PopupText = styled.p`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.28px;
`;

export const PopupIcon = styled.svg`
  height: 16px;
  width: 16px;
`;
