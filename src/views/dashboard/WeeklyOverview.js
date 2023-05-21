// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import CheckBold from 'mdi-material-ui/CheckBold'

import { Bar } from 'react-chartjs-2'
const data = {
  labels: ['12:00h', '13:00h', '14:00h', '15:00h', '16:00h', '17:00h'],
  datasets: [
    {
      label: 'Graus Celsius',
      data: [-253, -250, -240, -251, -248, -239],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}
const WeeklyOverview = () => {
  return (
    <Card style={{ width: '100vh' }}>
      <CardHeader
        title='Estabilidade do Combustível'></CardHeader>
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
          <Bar
            data={data}
            width='400px'
            height='200px'
            options={{
              maintainAspectRatio: true
            }}
          />
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
