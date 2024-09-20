"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/Dashboard/components/container/PageContainer";
// components
import EnvironmentScore from "@/app/Dashboard/components/dashboard/EnvironmentScore";
import SocialScore from "@/app/Dashboard/components/dashboard/SocialScore";
import GovernanceScore from "@/app/Dashboard/components/dashboard/GovernanceScore";
import RecentTransactions from "@/app/Dashboard/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/Dashboard/components/dashboard/ProductPerformance";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>

          <Grid item xs={12} lg={4}>
            <EnvironmentScore />
          </Grid>
          <Grid item xs={12} lg={4}>
            <SocialScore />
          </Grid>
          <Grid item xs={12} lg={4}>
            <GovernanceScore />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
