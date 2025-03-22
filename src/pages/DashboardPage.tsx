import { Grid2 } from '@mui/material';
import React from 'react';
import Animate from '../components/common/Animate';
import SummaryGrid from '../components/common/SummaryGrid';
import ToursData from '../components/common/ToursData';
import UserBookingCard from '../components/common/UserBookingCard';
import StatisticData from '../components/common/StatisticData';
import BookedData from '../components/common/BookedData';
import TotalIncome from '../components/common/TotalIncome';

const DashboardPage = () => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12 }}>
        <SummaryGrid />
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 4 }}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12 }}>
            <Animate delay={1}>
              <ToursData />
            </Animate>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Animate delay={1.5}>
              <UserBookingCard />
            </Animate>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 8 }}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Animate type="fade" delay={1.5} sx={{ height: '100%' }}>
              <TotalIncome />
            </Animate>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Animate type="fade" delay={2} sx={{ height: '100%' }}>
              <BookedData />
            </Animate>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Animate delay={2.5}>
              <StatisticData />
            </Animate>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default DashboardPage;
