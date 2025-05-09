import { styled, Typography } from "@mui/material";

const Ctupo = styled(Typography)(({ theme }) => ({
    color: 'red',
    fontSize: '28px',
    [theme.breakpoints.down('sm')]: {
      color: 'blue',
      fontSize: '12px',
    },
  }));
Ctupo.displayName = 'CtupoStyledTypography';
export default Ctupo;