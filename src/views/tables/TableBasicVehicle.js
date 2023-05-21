// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (placa, idEquip) => {
  return { placa, idEquip}
}

const rows = [
  createData('AVI-15860', 'i20052023'),
  createData('ABC-1230', 'i20052024'),
  createData('BBB-4040', '-'),
  createData('ABB-6580', 'i20052026'),
  createData('XXX-4560', '-')
]

const TableBasicVehicle = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='Rotas - Veículos & Equipamentos'>
        <TableHead>
          <TableRow>
            <TableCell>Placa</TableCell>
            <TableCell align='right'>ID (Equipamento)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.placa}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.placa}
              </TableCell>
              <TableCell align='right'>{row.idEquip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasicVehicle
