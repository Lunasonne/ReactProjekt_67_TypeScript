 import Button from "components/Button/Button";

import { PageWrapper, Paragraph, ButtonControl } from "./styles";

function Lesson_08() {
  return (
    <PageWrapper>
      <Paragraph>Lesson_08</Paragraph>
      <ButtonControl>
        <Button name="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        {/* <Button isRed={true} name="Delete Button" /> */}
        <Button isRed name="Delete Button" />
      </ButtonControl>
      <ButtonControl>
        <Button disabled name="Disabled Button" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Lesson_08;
