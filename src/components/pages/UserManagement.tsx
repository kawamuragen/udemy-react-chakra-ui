import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap spacing="8px" p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            userName="じゃけえ"
            fullName="takumi okada"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
