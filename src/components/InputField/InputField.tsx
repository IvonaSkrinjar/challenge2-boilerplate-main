import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import styled from "styled-components";
import { TextField } from "@mui/material";
import styles from "./styles.module.css";

  
const InputField = (props: any) => {
  const { ...rest } = props;
  const [field, meta] = useField(props);

  function handleHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <Wrapper>
      <TextField
        type="text"
        className={styles.root}
        variant="standard"
        error={meta.touched && meta.error && true}
        helperText={handleHelperText()}
        InputProps={{
          className: styles.input_field,
        }}
        InputLabelProps={{ style: { fontSize: 14 } }}
        {...field}
        {...rest}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .MuiFormHelperText-root {
    font-size: 12px;
  }
`;
export default InputField;

