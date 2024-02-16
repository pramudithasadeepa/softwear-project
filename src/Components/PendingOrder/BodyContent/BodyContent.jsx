import React from 'react'
import './BodyContent.css'
import AppsIcon from '@mui/icons-material/Apps';
import {Box} from '@mui/system';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(id, name, pdistrict, ptown, date,action) {
  return { id, name, pdistrict, ptown, date,action };
}

const rows = [
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
  createData('2141N','Rajapaksha','Matara','Rahula','2/3/2024','View Order'),
];

function BodyContent() {
  return (
    <Box class='body1'>
      <Box
          sx={{
            pl:6,
          }}
        >
      <AppsIcon sx={{pt:5, fontSize:'xlarge'}}/> 
      <span id='p_order'>pending Order List</span>
      </Box>

      <Box
      sx={{
        mt:5,ml:6,mr:5
      }}>

<Sheet
        sx={{
          '--TableCell-height': '40px',
          height:470,
          overflow: 'auto',
          borderRadius: '2%',
          border: 1,
          borderColor: '#bdbdbd',
        }}
      >
        <Table stickyHeader stripe="even" hoverRow >
          <thead >
            <tr >
              <th id='th1'>Oreder ID</th>
              <th id='th1'>Customer Name</th>
              <th id='th1'>Pickup Districk</th>
              <th id='th1'>Pickup Home Town</th>
              <th id='th1'>Date</th>
              <th id='th1'>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} id='tr1' > 
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.pdistrict}</td>
                <td>{row.ptown}</td>
                <td>{row.date}</td>
                <td id='td1'>{row.action}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
        
        

      </Box>
    </Box>
  )
}

export default BodyContent
