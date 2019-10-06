import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
`
const Line = styled.div`
    width: 470px;
    border-bottom: 1px solid #A8A8A8;
`
const Title = styled.div`
    font-size: 1.8rem;
    color: #2C2C2C;
    margin: 0 2.5rem 0 2.5rem;
`

const Text = styled.a`
    text-align: center;
    color: #4F6CDE;
    margin-top: 3rem;
    font-size: 1rem;
`

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'block', marginTop: '3rem' }}>


                <Container>

                    <Line />

                        <Title> Get in touch </Title>

                    <Line />

                </Container>

                <Container>

                    <Text> Contact us in the Status Public Channel #Statusphere </Text>

                </Container>                

            </div>

        );
    }
}


export default Contact;