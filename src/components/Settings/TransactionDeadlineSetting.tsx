import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Text, Flex, Box } from "parsec-swap-uikit";
import { useUserDeadline } from "state/user/hooks";
import QuestionHelper from "../QuestionHelper";

const Field = styled.div`
  align-items: center;
  display: inline-flex;

  & > ${Input} {
    max-width: 100px;
  }
`;

type TransactionDeadlineSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string;
};

const TransactionDeadlineSetting = () => {
  const [deadline, setDeadline] = useUserDeadline();
  const [value, setValue] = useState(deadline / 60); // deadline in minutes
  const [error, setError] = useState<string | null>(null);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target;
    setValue(parseInt(inputValue, 10));
  };

  // Updates local storage if value is valid
  useEffect(() => {
    try {
      const rawValue = value * 60;
      if (!Number.isNaN(rawValue) && rawValue > 0) {
        setDeadline(rawValue);
        setError(null);
      } else {
        setError("Enter a valid deadline");
      }
    } catch {
      setError("Enter a valid deadline");
    }
  }, [value, setError, setDeadline]);

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>{"Transaction deadline"}</Text>
        <QuestionHelper
          text={
            "Your transaction will revert if it is pending for more than this long."
          }
        />
      </Flex>
      <Field>
        <Input
          type="number"
          step="1"
          min="1"
          value={value}
          onChange={handleChange}
        />
        <Text fontSize="14px" ml="8px">
          Minutes
        </Text>
      </Field>
      {error && (
        <Text mt="8px" color="failure">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default TransactionDeadlineSetting;
