
import React from 'react';
import ReactDOM from 'react-dom';

import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import Combobox from 'react-widgets/lib/Combobox';
import styles from '../css/components/hello.css';
import { Button } from 'react-bootstrap';

import rest from 'rest';
import mime from 'rest/interceptor/mime';
import defaultRequest from 'rest/interceptor/defaultRequest'
import $ from 'jquery';

class Hello extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = { data: ['dd','dd']};
  	}
	

	componentDidMount() {
		var client = rest.wrap(mime);	
		var me = this;
		client({ path: '/service/testService'}).then(function(response) {
		   if(response.status.code = 200) {
		    	console.log('response: ', response);
		    	var actualResponse = response.entity;
		    	me.setState({actualResponse});
		    } else {
		    	alert("Error In fetching Data")
		    }
		});	
	}

  render() {
    return (<div className={styles.app}>
			<div className="row">
				<div className="col-md-3">
					<div >
						<p> hihihihi</p>
					</div>
				</div>
				<div className="col-md-4">
					<div >
						<Combobox data= {this.state.data} />
					</div>
				</div>
				<div>
					<Button>Click me!</Button>
				</div>

			</div>	
		   </div>);
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));

