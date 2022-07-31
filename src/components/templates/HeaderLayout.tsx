import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

// タグで囲ったものを受け取るときにReactNode使う
type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
