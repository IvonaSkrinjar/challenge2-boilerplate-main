import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

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
                error={meta.touched && meta.error && true}
                helperText={handleHelperText()}
                InputProps={{
                    disableUnderline: true,
                    classes: {
                        input: "input-field",
                    },
                }}
                InputLabelProps={{ style: { fontSize: 14} }}
                {...field}
                {...rest}
            />
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .input-field {
    font-size: 14px;
    text-transform: capitalize;
    padding: 1rem;
  }
  .MuiFormHelperText-root {
    font-size: 12px;
  }
`;
export default InputField;

