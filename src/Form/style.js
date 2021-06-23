import styled from "styled-components";

const FormData = styled.form`
  font-family: Work Sans, sans-serif;
  max-width: 100%;
  .header {
    display: block;
    margin-top: 70px;

    img {
      display: block;
      margin: 0 auto;
    }

    h4 {
      text-align: center;
      font-size: 14px;
    }
  }

  .form {
    padding: 20px 5px 20px 20px;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    color: rgba(0, 0, 0, 0.65);
    height: auto;
    max-width: 100%;
    width: 30%;
    margin: 0 auto 100px auto;
    border-radius: 20px;
    border: 1px solid #ccc;

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
      width: 90%;
      max-width: 100%;
      margin-top: 25px;
      display: block;
      font-size: 12px;
    }

    input {
      padding: 8px 12px;
      outline: none;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 20px;
      margin-bottom: 10px;
      max-width: 100%;
      width: 80%;
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

    @media screen and (max-width: 600px) {
      width: 70%;
    }
    @media screen and (min-width: 601px) and (max-width: 992px) {
      width: 45%;
    }
  }
`;

export default FormData;
