import styled from "styled-components";

const Ussd = styled.div`
padding: 5px 3px 10px 5px;
 font-family: 'Work Sans';
 max-width: 100%;
 display: flex;
 min-height: 100%;
 flex-direction: column;
 align-items: center;
 color: #56799D;
 height: 300px;

 .head div{
        max-width: 100%;
        height: 1px;
        background: #f2f2f2;
        margin-bottom: 10px;
    }
      
h5{
    font-size: 8.7px;
}

select{
    margin-top: 20px;
    padding: 10px 10px;
    border-radius: 15px;
    max-width:100%;
    width: 90%;
    color: #56799D;
    font-family:'Work Sans';
    outline: none;
    border-color: #c0c0c0;
    margin-bottom: 10px;
    
}
`
 
export default Ussd;