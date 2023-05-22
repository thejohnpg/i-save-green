// import Card from '@mui/material/CardContent'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

import Grid from '@mui/material/Grid'

const Relatorios = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card>
      </Card>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
              }}
            >
              <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
                KM's Percorridos
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 6 }}>
                Gere seu relatório de KM's percorridos pela sua frota e histórico de rotas
              </Typography>
              <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
              }}
            >
              <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
                Combustível
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 6 }}>
                Saiba tudo sobre o combustível de todos os veículos da sua frota
              </Typography>
              <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
              }}
            >
              <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
                Sensores
              </Typography>
              <Typography variant='body2' sx={{ marginBottom: 6 }}>
                Saiba sobre o histórico de sensores de temperatura, pressão
              </Typography>
              <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
                Gerar Relatório
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Relatorios
