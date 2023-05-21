// ** React Imports
import { useState } from 'react'

// import CardContent from '@mui/material/CardContent'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import MuiTab from '@mui/material/Tab'

import { styled } from '@mui/material/styles'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// ** Table
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import TableBasicVehicle from 'src/views/tables/TableBasicVehicle'
import TableBasicCharge from 'src/views/tables/TableBasicCharge'

// ** Map
import Map from './maps'

//** import cards
import CardInfo from './../../views/cards/CardInfo'

// Table Info Route
import TableRouteInfo from '../../views/table-route-info/TableRouteInfo'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Rotas = () => {
  // ** State
  const [value, setValue] = useState('veiculo')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='rotas tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='veiculo'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Rotas</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='veiculo'>
          <Grid item xs={12}>
            <Card>
              <CardHeader title='' titleTypographyProps={{ variant: 'h6' }} />
            </Card>
            <CardInfo />
            <Map />
            <TableRouteInfo />
          </Grid>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default Rotas
