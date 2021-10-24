import type { NextPage, GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/client';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dashboard: NextPage = () => {
  const [session, loading] = useSession();

  const callApi = () => {
    fetch('/api/resources', { method: 'GET' });
  };

  return (
    <Grid container spacing={2} justifyContent="space-around">
      <Grid item xs={12} lg={2}>
        <Card>
          <CardContent style={{ background: 'transparent url(https://gf1.geo.gfsrv.net/cdn9b/5ae88b81a54e787830e811012a5a8e.png) 0px 0px no-repeat' }}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              1.000.000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Card>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return { props: { session } };
  }

  return {
    redirect: {
      destination: '/api/auth/signin',
      permanent: false,
    },
  };
};
