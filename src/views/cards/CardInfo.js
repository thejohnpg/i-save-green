// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardInfo = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '2%' }}>

    <Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#E5ECF6;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '18px' }}
        >
          Total de Veículos
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '16px'}}>
          18
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#E5ECF6;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '18px' }}
        >
          Temperatura
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '16px'}}>
          42º Graus
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ padding: '0', border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#E5ECF6;', width: '200px', height: '100px', display: 'flex' }}>
      <CardContent style={{ margin: '0 auto', padding: '8px' }}>
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '18px' }}
        >
          Combustível
        </Typography>
        <Typography variant='body2' sx={{ display: 'flex', justifyContent: 'center', marginBottom: 1, alignItems: 'center', color: '#1C1C1C', fontSize: '16px'}}>
          16 Lts
        </Typography>
      </CardContent>
    </Card>

    </div>
  )
}

export default CardInfo
