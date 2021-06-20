import { createUseStyles } from 'react-jss';

export const useGlobalStyles = createUseStyles({
  "@global": {
    body: {
      backgroundColor: "#eee",
    },
    a: {
      textDecoration: "underline",
      color: "pink",
    },
  },
});
