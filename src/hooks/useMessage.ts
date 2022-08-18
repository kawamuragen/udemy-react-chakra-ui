import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

// https://chakra-ui.com/docs/components/toast/usage#status
// toastは以下の４つの状態を受け取ることができる
type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  // https://chakra-ui.com/docs/components/toast/usage
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;

      // title: title
      // と書かずに、同じであれば省略できる
      toast({
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true
      });
    },
    [toast]
  );
  return { showMessage };
};
