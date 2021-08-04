import styled from "styled-components";

const Cards = styled.div`
 padding: 5px 10px 10px 15px;

.form {

    display: flex;
    flex-direction: column;
    color: #56799D;

    .head div{
        max-width: 100%;
        height: 1px;
        background: #f2f2f2;
        margin-bottom: 10px;
    }

    label {
      display: block;
      font-size: 12px;
      text-align: left;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      font-weight: 400;
      letter-spacing: -1px;

    }

    button {
      width: 95%;
      max-width: 100%;
      margin:  25px 0 20px 0;
      display: block;
      font-size: 12px;
    }

    input {
        background:#f2f2f2;
      padding: 15px;
      outline: none;
      border: none;
      border-radius: 20px;
      margin-bottom: 20px;
      max-width: 100%;
      width: 80%;
      font-size: 14px;

      @media screen and (max-width: 600px) {
        width: 90%;
    }
    }

    .name {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
    }

    .name input {
      width: 60%;
      max-width: 100%;
      @media screen and (max-width: 600px) {
        width: 90%;
      }
    }
    }
`;
export default Cards;
