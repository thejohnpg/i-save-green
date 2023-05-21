// ** MUI Imports
import Card from '@mui/material/Card'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import CheckBold from 'mdi-material-ui/CheckBold'


const CardInfo = () => {
  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2%'}}>
    <FormControl>
              <InputLabel>Região</InputLabel>
              <Select label='Role' defaultValue='sudeste'>
                <MenuItem value='sudeste'>Sudeste</MenuItem>
                <MenuItem value='sul'>Sul</MenuItem>
                <MenuItem value='norte'>Norte</MenuItem>
                <MenuItem value='nordeste'>Nordeste</MenuItem>
              </Select>
            </FormControl>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '2%' }}>
    <Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#E5ECF6;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '18px' }}
        >
          Total de Veículos
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '16px', fontWeight: 'bold' }}>
          18
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#E5ECF6;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '18px' }}
        >
          Em trânsito
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '16px', fontWeight: 'bold'}}>
          3
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#E5ECF6;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '18px'}}
        >
          Sinistros
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '16px', fontWeight: 'bold'}}>
          0
        </Typography>
      </CardContent>
    </Card><Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#2A5F19;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#fff', fontSize: '18px'}}
        >
          Selo de Qualidade
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#fff', alignContent:'center', fontSize: '16px', fontWeight: 'bold'}}>
          CERTIFICADO <CheckBold />
        </Typography>
      </CardContent>
    </Card>

    </div>
    </>
  )
}

export default CardInfo
