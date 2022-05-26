import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'


function About() {
  
  return (<div>
    
    <Card className="bg-dark text-white">
  <Card.Img src="https://asitii.space/wp-content/uploads/2022/02/decor_header-slider-space.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <br/>
    <h4>About</h4>
    <CardGroup>
  <Card>
    <Card.Img  src="https://static.langimg.com/thumb/msid-91749872,imgsize-17830,width-700,height-525,resizemode-75/navbharat-times.jpg" />
    <Card.Body style={{color:"black"}}>
      <Card.Title>Aliens</Card.Title>
      <Card.Text >
      In Alien, LV-426 is not named and is simply referred to as a "planetoid" or "ball". In Aliens, the name LV-426 is given at the inquest aboard Gateway Station and subsequently throughout the film. The novelization of the film additionally states that the moon is also known as Acheron.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
    
  </Card>
  <Card>
    <Card.Img  src="https://i.natgeofe.com/k/a2a738a9-e019-4911-98e6-17f31c45ac88/milky-way-2_3x2.jpg" />
    <Card.Body style={{color:"black"}}>
      <Card.Title>Milky way</Card.Title>
      <Card.Text>
      The Milky Way is the galaxy that includes our Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  
</CardGroup>
  </Card.ImgOverlay>
</Card>
  </div>
  
  )
}

export default About