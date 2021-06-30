import React from 'react'
import InputBar from './InputBar'
import { Jumbotron , Container, Row} from 'react-bootstrap';
import "../styles/MainPage.css"

export interface MainPageProps {
    
}
 
export interface MainPageState {
    
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    state = {   }
    render() { 
        return ( 
            <> 
            <Container>
                <Row className="mt-4 jumbo">
    <Jumbotron fluid>
  <h1>Welcome To The Music Page!!</h1>
  <p>
    Here, you can search for your favorite music albums, wherever, whatever in the world. Enjoy!
  </p>
  {/* <p>
    <Button variant="primary">Learn more</Button>
  </p> */}
</Jumbotron>
</Row>
            <InputBar/>
            </Container>
            </>
         );
    }
}
 
export default MainPage;