 import styled from "@emotion/styled";

export const Container = styled.div`
 width: 90%;  
  max-width: 900px;
  margin: 50px auto;
  border-radius: 10px;
  padding: 30px;
  background-color: #aec3e1;
  border-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #1405df;
`;

export const InputButtonContainer = styled.div`
 width: 100%; 
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  align-items: flex-end;
`;
export const InputWrapper = styled.div`
  flex: 1;            
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  padding: 10px 14px;
  margin-bottom: 10px;
  background-color: #e6ebef;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

 export const ButtonWrapper = styled.div`
     flex: 0 0 120px;  
`;