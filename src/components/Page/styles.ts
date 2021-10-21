import styled from 'styled-components'
import background1 from './assets/amggt.jpg'
import background2 from './assets/bmwm3.jpg'
import background3 from './assets/lambohuracan.jpg'
import background4 from './assets/RRvelar.jpg'
import background5 from './assets/toyotasupra.jpg'
import background6 from './assets/nissangtr.jpg'
import background7 from './assets/audir8.jpg'

export const Container = styled.div`
.colored:nth-child(1) {
    background-image: url(${background1});
    background-size: cover;
    background-position: center;
}
.colored:nth-child(2) {
    background-image: url(${background2});
    background-size: cover;
    background-position: center;
}
.colored:nth-child(3) {
    background-image: url(${background3});
    background-size: cover;
    background-position: center;
}
.colored:nth-child(4) {
    background-image: url(${background4});
    background-size: cover;
    background-position: center;
}
.colored:nth-child(5) {
    background-image: url(${background5});
    background-size: cover;
    background-position: center;
}
.colored:nth-child(6) {
    background-image: url(${background6});
    background-size: cover;
    background-position: center;
}
.colored:nth-child(7) {
    background-image: url(${background7});
    background-size: cover;
    background-position: center;
}`


export const Spacer = styled.div`
    height: 10vh;
    background: #168aad;
`