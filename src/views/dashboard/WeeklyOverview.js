// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import CheckBold from 'mdi-material-ui/CheckBold'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'


const WeeklyOverview = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: true }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      "#BAEDBD",
      "#C6C7F8",
      "#1C1C1C",
      "#B1E3FF",
      "#95A4FC",
      "#A1E3CB"
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['ID01001', 'ID01002', 'ID01003', 'ID01004', 'ID01005', 'ID01006', 'ID01007'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: true },
      axisBorder: { show: true }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='H2V Emitido'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            {/* <DotsVertical /> */}
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='bar' height={205} options={options} series={[{ data: [1350, 850, 3450, 2850, 4000, 2000, 1000] }]} />
        <Box sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }} style={{ display: 'flex' }}>
            45% 
            <CheckBold /> 
          </Typography>
          <Typography variant='body2' class={{ display: 'flex' }}>Sua performance está 45%</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
