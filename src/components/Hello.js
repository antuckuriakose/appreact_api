import React, {PropTypes} from 'react';
import  ReportButton from 'reactexportbutton/index';
import ReactDom from 'react'
export default class Hello extends React.Component {
  render() {
  	var columns = [ {title: "ID", dataKey: "id"}, {title: "Name", dataKey: "name"}, {title: "Country", dataKey: "country"} ];

    var rows = [ {"id": 1, "name": "Shaw", "country": "Tanzania"}, {"id": 2, "name": "Nelson", "country": "Kazakhstan"}, {"id": 3, "name": "Garcia", "country": "Madagascar"} ];


    return (
    	<div>
	      <div>Hello</div>
	      <div>
			  <ReportButton modalHeader="Report Modal" 
			                butonName="Report" 
			                closeButton="Close" 
			                reportButton="Export" 
			                columns={columns} rows={rows}/>
			</div>
	    </div>
    );
  }
}
