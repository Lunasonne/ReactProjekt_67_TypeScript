 import { type ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  error?: undefined | string;
  disabled?: boolean;
  value?: string;
  isRequired?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
