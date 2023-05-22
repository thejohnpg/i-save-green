// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TotalEarning from 'src/views/dashboard/TotalEarning'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import Doughnuth from 'src/views/dashboard/Doughnuth'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'

const Dashboard = () => {
  useEffect(() => {
    let chartStatus = Chart.getChart('myChart') // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy()
    }
    var ctx = document.getElementById('myChart').getContext('2d')
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['ID01001', 'ID01002', 'ID01003', 'ID01004', 'ID01004', 'ID01005', 'ID01001'],
        datasets: [
          {
            data: [66, 144, 146, 116, 107, 131, 43],
            label: 'H2V (KM rodados por Produto)',
            borderColor: 'rgb(109, 253, 181)',
            backgroundColor: 'rgb(109, 253, 181,0.5)',
            borderWidth: 2
          }
        ]
      }
    })
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={12}>
        <Grid item xs={12} lg={4}>
          <Doughnuth />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
      </Grid>
      <>
        {/* Bar chart */}
        <h1 class='w-[150px] mx-auto mt-10 text-xl font-semibold capitalize '>H2V</h1>
        <div class='w-[1100px] h-screen flex mx-auto my-auto'>
          <div class='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
            <canvas id='myChart'></canvas>
          </div>
        </div>
      </>
    </ApexChartWrapper>
  )
}

export default Dashboard
