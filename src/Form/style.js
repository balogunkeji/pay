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
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    color: rgba(0, 0, 0, 0.65);
    height: auto;
    max-width: 100%;
    width: 30%;
    margin: 0 auto 2px auto;
    border-radius: 20px;
    border: 1px solid #ccc;

    label {
      display: block;
      font-size: 16px;
      text-align: left;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      font-weight: 400;
      letter-spacing: -1px;
    }

    button {
      max-width: 100%;
      margin-top: 25px;
      display: block;
      font-size: 16px;
    }

    input {
      padding: 12px 20px;
      outline: none;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 20px;
      margin-bottom: 10px;
      max-width: 100%;
      width: 87%;

      @media screen and (max-width: 320px) {
        max-width: 100%;
        width: 82%;
      }
      @media screen and (min-width: 321px) and (max-width: 600px) {
        width: 90%;
        max-width: 100%;
      }

      @media screen and (min-width: 601px) and (max-width: 992px) {
        margin-right: 5px;
        width: 89%;
      }
    }

    .name {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
    }

    .name input {
      width: 68%;
      max-width: 100%;

      @media screen and (max-width: 320px) {
        width: 82%;
        max-width: 100%;
      }
      @media screen and (min-width: 321px) and (max-width: 600px) {
        width: 90%;
      }
      @media screen and (min-width: 601px) and (max-width: 992px) {
      width: 70%;
    }
    }

    @media screen and (max-width: 320px) {
      padding: 20px 5px;
      width: 80%;
      margin: 0 auto;
    }

    @media screen and (min-width: 321px) and (max-width: 600px) {
      width: 70%;
      padding: 20px 10px;
    }
    @media screen and (min-width: 601px) and (max-width: 992px) {
      width: 50%;
      padding: 20px 15px;
    }
  }
`;

export default FormData;
