import React from "react"
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



class WorldTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    stats: [],
    loading: false
  }

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "inherit",

        },
        paper: {
          boxShadow: "none"
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "none",

        }
      }
    }
  })

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://corona.lmao.ninja/v2/countries') //data source
      .then(response => response.json())
      .then(res => {
        this.setState({ stats: res, loading: false }, () => console.log(res))
      })
      .catch(error => {
        console.log(error)
      })
  }





  render() {
    console.log("sate is ", this.state)
    return (
      <React.Fragment>
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          <br />

          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={<h1 style={{ float: 'left', color: '#3f51b5', }}>Worldwide Covid-19 Stats</h1>}
              isLoading={this.state.loading}
              columns={[
                {
                  name: "country",
                  label: "Country",
                  options: {
                    filter: true,
                    sort: true,
                  }
                },
                {
                  name: "cases",
                  label: "Total Cases",
                  options: {
                    filter: true,
                    sort: false,
                  }
                },
                {
                  name: "deaths",
                  label: "Total Deaths",
                  options: {
                    filter: true,
                    sort: false,
                  }
                },
                {
                  name: "recovered",
                  label: "Recovered Patients",
                  options: {
                    filter: true,
                    sort: false,
                  }
                },
              ]}

              data={this.state.stats}
              options={{
                filter: true,

                rowHover: true,
                downloadOptions: { filename: 'CovidData.csv', separator: ',' },
                //onRowClick:(selectedRow,otherprops)=>{console.log(selectedRow)}, 
                filterType: 'dropdown',
                selectableRows: false,
                responsive: 'stacked',
              }} />
          </MuiThemeProvider>
          <div style={{ color: "#3f51b5", float: 'left' }}>Created By: Esther Adeyi</div>
        </div>
      </React.Fragment>
    )
  }
}

export default WorldTable;
