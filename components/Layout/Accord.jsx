import React from 'react'
import {Accordion, Card, Container, useAccordionButton} from  "react-bootstrap"
import {BsPlus} from 'react-icons/bs'
import styles from "../../styles/layout.module.scss";


function CustomToggle({children, eventkey}){
    const decoratedOnClick = useAccordionButton(eventkey, ()=>
        console.log('click')
    );
    return (
        <div className={`${styles.mobile_dropdown} flex `}>
            <h4>{children}</h4>
            <BsPlus onClick={decoratedOnClick} />
        
        </div>
    )
}


function Accord() {
  return (
    <div>
        
            <Accordion className={styles.accord}>
                <Card className={styles.accord_card}>
                    <Card.Header className={styles.bg_transparent}>
                        <CustomToggle>About</CustomToggle>
                    </Card.Header>
                <Accordion.Collapse>
                    <Card.Body className={styles.accord_card_body}>
                    <ul>
                <li>Reach out to us</li>
                <li>Become a Broker</li>
                <li>Language Support</li>
                <li>Language Support</li>
                <li>Help and Support</li>
              </ul>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>

    </div>
  )
}

export default Accord