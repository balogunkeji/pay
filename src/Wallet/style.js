import styled from 'styled-components'

const Wallets = styled.div`
padding: 5px 10px 10px 15px;
color: #56799D;

.form{
    display: flex;
    flex-direction: column;

    .head div{
        max-width: 100%;
        height: 1px;
        background: #f2f2f2;
        margin-bottom: 20px;
    }

    label {
      display: block;
      font-size: 12px;
      text-align: left;
      margin-bottom: 10px;
      font-weight: 400;
      letter-spacing: -1px;

    }

    button {
      width: 95%;
      max-width: 100%;
      margin:  5px 0 105px 0;
      display: block;
      font-size: 12px;
    }

    input {
        background:#f2f2f2;
      padding: 10px 12px;
      outline: none;
      border: none;
      border-radius: 20px;
      margin-bottom: 15px;
      max-width: 100%;
      width: 80%;
      font-size: 10px;
    }



  
}

`
 
export default Wallets;