import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmailConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="connectionType"
          label="connectionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="smtpHost" source="smtpHost" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
