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
    <Card style={{ padding: '0' }}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='Rotas tabs'
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

        <CardInfo />
        <Map />
        <TableRouteInfo />

        <TabPanel sx={{ p: 0 }} value='veiculo'></TabPanel>
      </TabContext>
    </Card>
  )
}

export default Rotas
