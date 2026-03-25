import { useContext } from "react";
import { v4 } from "uuid";
import { useFormik } from "formik";
import { validationSchema } from "./schema.ts";
import { EMPLOYEE_FORM_VALUES, type EmployeeFormValues } from "./types.ts";
import { MainContext } from "lessons/Lesson_15/components/Layout/context.ts";
import { PageWrapper, EmployeeFormWrapper, EmployeeForm } from "./styles.ts";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";

export default function Employee() {
  const { fetchEmployeeData } = useContext(MainContext);

  const formik = useFormik<EmployeeFormValues>({
    initialValues: {
      [EMPLOYEE_FORM_VALUES.NAME]: "",
      [EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [EMPLOYEE_FORM_VALUES.AGE]: "",
      [EMPLOYEE_FORM_VALUES.JOB]: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, formikHelpers) => {
      fetchEmployeeData((prevValue) => [...prevValue, values]);
      formikHelpers.resetForm();
    },
    // можно упростить onSubmit: (values, { resetForm }) => {
    // fetchEmployeeData(prev => [...prev, values]);
    //  resetForm();}

  });
  return (
    <PageWrapper>
      <EmployeeFormWrapper>
        <EmployeeForm onSubmit={formik.handleSubmit}>
          <Input
            id={v4()}
            name="name"
            label="Name"
            value={formik.values[EMPLOYEE_FORM_VALUES.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.NAME]}
            isRequired={true}
          />
          <Input
            id={v4()}
            name="surname"
            label="Surname"
            value={formik.values[EMPLOYEE_FORM_VALUES.SURNAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.SURNAME]}
            isRequired={true}
          />
          <Input
            id={v4()}
            name="age"
            label="Age"
            value={formik.values[EMPLOYEE_FORM_VALUES.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]}
            isRequired={true}
          />
          <Input
            id={v4()}
            name="job"
            label="Job Position"
            value={formik.values[EMPLOYEE_FORM_VALUES.JOB]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.JOB]}
          />
          <Button type="submit" name="Create" />
        </EmployeeForm>
      </EmployeeFormWrapper>
    </PageWrapper>
  );
}
