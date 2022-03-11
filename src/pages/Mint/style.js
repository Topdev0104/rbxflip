import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSubNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  font-size: 18px;
  color: #9c9ebb;
`;

export const SubActionGroup = styled.div`
  display: flex;
`;

export const SubActionIcon = styled.p`
  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`;

export const SubActionTitle = styled.span`
  position: relative;
  display: flex;
  margin-left: 7px;
`;

export const SubAction = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    color: #3185ff;
  }
`;

export const SubSignin = styled.a`
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: #3185ff;
  }
  text-decoration: none;
`;

export const StyledDashboard = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1;
  min-height: 500px;
`;
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 20px;
  flex: 1 1;
  background: #2c2d46;
  overflow: auto;
  overflow-x: hidden;
`;
export const DashHeader = styled.div`
  display: flex;
`;
export const ValueView = styled.div`
  background: #3185ff;
  margin-right: 18px;
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  flex: 1 1;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
`;
export const GameView = styled.div`
  background: #f89e1b;
  margin-right: 18px;
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  flex: 1 1;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
`;
export const HistoryView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  box-shadow: 0 3.5px 2px 0 rgb(0 0 0 / 25%);
  padding: 20px 30px;
  background: #343654;
  border-radius: 17px;
  flex: 0.5 1;
`;
export const HistoryStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HistoryText = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.fontColor};
  margin-right: 10px;
`;
export const HistoryAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: ${(props) => props.fontColor};
  background: ${(props) => props.bgColor};
  margin-right: 10px;
`;

export const HistoryActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HistoryAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: #9c9ebb;
`;

export const CreateAction = styled.div`
  background: #3185ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

export const CountText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
export const CountDesc = styled.span`
  color: white;
  opacity: 0.65;
  font-size: 18px;
  font-weight: 700;
`;