// import "./styles.css";
// import { type ButtonProps} from "./types";

// function Button({ name = "Send", type = "button", onClick = () => {}, isRed =false }:ButtonProps ) {
//   return (
//     <button  className="button_component" type={type} onClick={onClick}>
//       {name}
//     </button>
//   );
// }

// export default Button;

import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  name = "Send",
  type = "button",
  onClick = () => {},
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isRed={isRed}
      type={type}
      onClick={onClick}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
