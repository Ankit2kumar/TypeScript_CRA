import React from 'react';
import {
	Form,
	FormControl,
	Button,
	
	Row,
	Col,
} from 'react-bootstrap';
import { Music }from "../types/interfaces";
import MusicList from "./MusicList"


export interface InputBarProps {

}

export interface InputBarState {
    searchQuery:string,
    musicData:Music[]
}

class InputBar extends React.Component<InputBarProps, InputBarState> {
	state :InputBarState= {
        searchQuery: '',
        musicData:[]
    };

   BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

    changeHandler = (event:any) =>{
        this.setState({searchQuery:event.target.value})
    }

    clickHandler =async()=>{
        try {
           const response = await fetch(this.BASE_URL+this.state.searchQuery)
           const data = await response.json()
           this.setState({musicData:data.data})
           console.log(this.state.musicData);
           

        } catch (error) {
          console.log(error);
            
        }
    }
	render() {
		return (
			<>
				
					<Row className="mt-5">
						<Col>
							<Form>
								<FormControl onChange={this.changeHandler}
									type="text"
									placeholder="Search"
									
								/>
							</Form>
						</Col>
						<Col>
							<Button onClick={this.clickHandler} variant="outline-info">Search</Button>
						</Col>
					</Row>
                    <Row>
                    <MusicList musicData={this.state.musicData}/>
                    </Row>
				
			</>
		);
	}
}

export default InputBar;
