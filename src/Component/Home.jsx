import React from 'react'
import { Button,Card } from 'react-bootstrap'


function Home() {
  
  return (<div>
    
    <Card className="bg-dark text-white">
  <Card.Img src="https://www.industry.gov.au/sites/default/files/March%202022/image/news_-_space_ssu.png" alt="Card image" />
  <Card.ImgOverlay>
    <br/>
    <br/>
    <Card.Title><h2><b>Welcome to Space program</b></h2></Card.Title>
    <br/>
    <Card.Text>
      Register and Book for the  wonderful trip !!.
      <br/><b>Participate now</b>
    </Card.Text>
    <Card.Text>Cooming Soon</Card.Text>
    <Button variant="light">Book</Button>
  </Card.ImgOverlay>
</Card>
  </div>
  
  )
}

export default Home