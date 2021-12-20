import { Toggle } from "carbon-components-react";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Button } from "../../assets/styles/Button.styled";
import { useAppDispatch } from "../../store/hooks";
import { addPolicy, Policy } from "../../store/policySlice";
import * as S from "./CreatePolicy.styled";

const policyTypes = [{ value: "ACL", label: "ACL - Access Control List" }];

function CreatePolicy() {
  const dispatch = useAppDispatch();
  const [policy, setPolicy] = useState<Policy>({
    type: null,
    name: "",
    isEnabled: false,
    description: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    dispatch(addPolicy({ policy }));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    const name = ev.target.name;
    const value =
      name === "isEnabled" ? ev.currentTarget.checked : ev.target.value;
    setPolicy((policy) => ({ ...policy, [name]: value }));
  };

  const handleSelectChange = (
    type: SingleValue<typeof policyTypes[number]>
  ) => {
    setPolicy((policy) => ({ ...policy, type }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Policy</h2>
      <S.Data>
        <label>Policy Name</label>
        <S.PolicyName name="name" onChange={handleChange} />
        <label>Description</label>
        <S.Description name="description" onChange={handleChange} />
        <label>Enable Policy</label>
        <Toggle
          size="md"
          id="toggle-1"
          name="isEnabled"
          onChange={handleChange}
        />
        <label>Policy Type</label>
        <S.SelectWrapper>
          <Select
            options={policyTypes}
            name="type"
            onChange={handleSelectChange}
          />
          <Button disabled={!policy.name || !policy.type}>OK</Button>
        </S.SelectWrapper>
      </S.Data>
    </form>
  );
}

export default CreatePolicy;
