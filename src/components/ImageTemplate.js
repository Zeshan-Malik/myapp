import styled from "styled-components";

export const ImageWraper = styled.div`

img{
    height: 100%;
    height: 350px;
    margin-bottom: 2rem;
    border-radius: 10px;
    width: 350px;
    transition: all 0.5s;

&:hover{
border: 2px solid green;
}
}
.btn-custom-delete{
    position: absolute;
    z-index: 1;
    bottom: 22%;
    left: 40%;
    visibility: hidden;
}

&:hover .btn-custom-delete{
    visibility: visible;
}
&:hover img{
    opacity: 0.4;
}
`


