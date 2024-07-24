import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/dCandidate'
import { Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import DCandidateForm from './DCandidateForm';
import {withStyles} from '@mui/styles'
const styles = theme =>({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
})
const DCandidates = (props) => {
 const {x, setX} = useState(0);

 useEffect(() =>{
  props.fetchAllDcandidates()
 },[])
 
  return (
    <Paper>
      <Grid container>
        <Grid item xs = {6}>
          <DCandidateForm />
        </Grid>
        <Grid item xs = {6}>
          <TableContainer>
            <table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Name 
                  </TableCell>
                  <TableCell>
                    Mobile 
                  </TableCell>
                  <TableCell>
                    BloodGroup 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.dCandidatelist.map((record,index)=>{
                      return (<TableRow>
                            <TableCell>
                               {record.fullname}
                            </TableCell>

                            <TableCell>
                               {record.mobile}
                            </TableCell>

                            <TableCell>
                               {record.fullname}
                            </TableCell>
                        </TableRow>
                      )
                  })
                }
              </TableBody>
            </table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  )
}
const mapStateToProps = state => {
 return {
  dCandidatelist : state.dCandidate.list
  }
}
const mapActiontoProps ={
fetchAllDcandidates: actions.fetchAll 
}
export default connect(mapStateToProps,mapActiontoProps)(withStyles(styles),DCandidates);