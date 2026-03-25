import {
  PageWrapper,
  EmployeesCardContainer,
  EmployeesCard,
  EmployeesDataWrapper,
  GroupControl,
  EmployeesDataLabel,
  EmployeesData,
} from "./styles.ts";
import { MainContext } from "lessons/Lesson_15/components/Layout/context.ts";
import { useContext } from "react";
import { v4 } from "uuid";

export default function Employees() {
  const { employeeData } = useContext(MainContext);
  console.log(employeeData);
  return (
    <PageWrapper>
      {/*{!!employeeData && (
        <EmployeesCard>
          <EmployeesDataWrapper>
            <GroupControl>
              <EmployeesDataLabel>Name</EmployeesDataLabel>
              <EmployeesData>{employeeData?.name}</EmployeesData>
            </GroupControl>
            <GroupControl>
              <EmployeesDataLabel>Surname</EmployeesDataLabel>
              <EmployeesData>{employeeData?.surname}</EmployeesData>
            </GroupControl>
            <GroupControl>
              <EmployeesDataLabel>Age</EmployeesDataLabel>
              <EmployeesData>{employeeData?.age}</EmployeesData>
            </GroupControl>
            <GroupControl>
              <EmployeesDataLabel>Job Position</EmployeesDataLabel>
              <EmployeesData>{employeeData?.job}</EmployeesData>
            </GroupControl>
          </EmployeesDataWrapper>
        </EmployeesCard>
      )}*/}
      {employeeData.length > 0 && ( 
        <EmployeesCardContainer>
          {employeeData.map((e) => (
            <EmployeesCard key ={v4()}>
              <EmployeesDataWrapper>
                <GroupControl>
                  <EmployeesDataLabel>Name</EmployeesDataLabel>
                  <EmployeesData>{e?.name}</EmployeesData>
                </GroupControl>
                <GroupControl>
                  <EmployeesDataLabel>Surname</EmployeesDataLabel>
                  <EmployeesData>{e?.surname}</EmployeesData>
                </GroupControl>
                <GroupControl>
                  <EmployeesDataLabel>Age</EmployeesDataLabel>
                  <EmployeesData>{e?.age}</EmployeesData>
                </GroupControl>
                <GroupControl>
                  <EmployeesDataLabel>Job Position</EmployeesDataLabel>
                  <EmployeesData>{e?.job}</EmployeesData>
                </GroupControl>
              </EmployeesDataWrapper>
            </EmployeesCard>
          ))}
        </EmployeesCardContainer>
      )}
    </PageWrapper>
  );
}
