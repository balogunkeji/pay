import styled from 'styled-components';

const Banks = styled.div`
 padding: 5px 3px 10px 5px;
 font-family: 'Work Sans';
 max-width: 100%;
 display: flex;
 min-height: 100%;
 flex-direction: column;
 align-items: center;
 color: #56799D;
 margin-bottom: 100px;

 .head div{
        max-width: 100%;
        width: 95%;
        height: 1px;
        background: #f2f2f2;
        margin-bottom: 10px;
    }
      
h5{
    font-size: 8.7px;
}

select{
    margin-top: 50px;
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

form {

    display: flex;
    flex-direction: column;
    align-items: center;
    color: #56799D;

    
    button {
      width: 100%;
      max-width: 100%;
      display: block;
      font-size: 12px;
      margin-top:0;
      margin-bottom: 0;
      padding: 10px 50px;
    }

    input {
        background:#f2f2f2;
      padding: 15px 30px;
      outline: none;
      border: none;
      border-radius: 20px;
      margin-bottom: 10px;
      max-width: 100%;
      width:90%;
      font-size: 10px;
    }
}
`
export default Banks;