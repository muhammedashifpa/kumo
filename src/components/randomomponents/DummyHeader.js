import React from 'react'
import styled from 'styled-components'
function DummyHeader() {
    return (
        <Dummy> 
        </Dummy>
    )
}

export default DummyHeader

const Dummy = styled.div`
    height:60px;
    @media(min-width: 993px){
     height:67.33px;
    }
`
