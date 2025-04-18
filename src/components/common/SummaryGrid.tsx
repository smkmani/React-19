import { Box, colors, Grid2, Stack, Typography } from '@mui/material';
import { images } from '../../assets';
// import { Box, Grid2, Stack, Typography, colors } from '@mui/material';
import Animate from './Animate';
import MPaper from './MPaper';

const summaryData = [
  {
    title: 'Total Booking',
    value: '714k',
    image: images.summaryImages.totalBook,
  },
  {
    title: 'Sold',
    value: '311k',
    image: images.summaryImages.sold,
  },
  {
    title: 'Canceled',
    value: '122k',
    image: images.summaryImages.cancel,
  },
];

const SummaryGrid = () => {
  return (
    <Grid2 container spacing={3}>
      {summaryData.map((summary, index) => (
        <Grid2 key={index} size={{ xs: 12, lg: 4 }}>
          <Animate type="fade" delay={(index + 1) / 3}>
            <MPaper>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={1}>
                  <Typography variant="h4" fontWeight="bold">
                    {summary.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color={colors.grey[600]}
                  >
                    {summary.title}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    height: '100px',
                    width: '100px',
                    '& img': { width: '100%' },
                  }}
                >
                  <img src={summary.image} alt="summary" />
                </Box>
              </Stack>
            </MPaper>
          </Animate>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SummaryGrid;
