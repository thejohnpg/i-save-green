import {Line, Pie} from 'react-chartjs-2';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'


const data = {
	labels: [
		'Janeiro(Kg)',
		'Fevereiro(Kg)',
		'Março(Kg)',
    'Abril(Kg)',
    'Maio(Kg)'
	],
	datasets: [{
		data: [9000, 8000, 4400, 1800, 12000],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#BAEDBD',
    '#95A4FC'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#BAEDBD',
    '#95A4FC'
		]
	}]
};


export default () => (
  <Card>
    <CardHeader  title='H2V Entregue'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}></CardHeader>
    <CardContent>
		<Pie
			data={data}
			width={400}
			height={400}
		/>
    </CardContent>
  </Card>
		
);