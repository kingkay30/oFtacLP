import styles from "../style";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useRef, useState } from "react";
import axios from "axios";

const CssTextField = styled(TextField)({
  "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
    color: "white",
    fontSize: 35,
  },
  "& .css-66dh3a-MuiInputBase-input-MuiInput-input": {
    color: "white",
    fontSize: 35,
    padding: 13,
  },
  "& .css-1d1r5q-MuiFormHelperText-root  ": {
    fontSize: 35,
    marginBottom: 10,
    color: "red",
  },

  " & .css-1d1r5q-MuiFormHelperText-root.Mui-error": {
    color: "red",
  },
  "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root.Mui-error ": {
    fontSize: 35,
    marginTop: -20,
    color: "red",
  },
});

export default function CTA() {
  const textInputRef = useRef();
  const [name, setName] = useState();
  const [comment, setComment] = useState();
  const [showComment, setShowComment] = useState(false);
  const [showCommentField, setShowCommentField] = useState(true);

  const userRequest = axios.create({
    baseURL:
      "https://oftacserver-6ffe2d638842.herokuapp.com/api/v1/oftacComments",
  });

  const sendComment = () => {
    const commentValue = {
      name,
      comment,
    };

    userRequest.post("/", commentValue);

    setName("");
    setComment("");
    setShowCommentField(false);
    setShowComment(true);
  };

  setTimeout(() => {
    setShowComment(false);
    setShowCommentField(true);
  }, 10000);

  return (
    <section
      id="feedback"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
       flex-col bg-black-gradient-2 rounded-[20px] box-shadow  lg:flex-row`}
    >
      <div className="flex-1 flex flex-col sm:flex-col xs:flex:col lg:flex-col">
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 lg:mt-[-50px] sm:max-w-[1070px] lg:max-w-[570px] sm:tracking-wide sm:leading-9 sm:text-[30px]`}
        >
          <span
            className="lg:text-[25px] sm:text-[30px] xs:text-[25px]"
            style={{
              fontFamily: "Mochiy Pop One",
              color: "tomato",
            }}
          >
            oFtac
          </span>{" "}
          is a start-up social media company that is powered by WhiteGate-A
          software development company.{" "}
          <span
            className="lg:text-[25px] sm:text-[30px] xs:text-[25px]"
            style={{
              fontFamily: "Mochiy Pop One",
              color: "tomato",
            }}
          >
            oFtac
          </span>{" "}
          aims on connecting its users to thier former classmates and also to
          make new friends. It's still in it's early stage of development and we
          will like a feedback from you on what you think about the idea and if
          its a platform you will like to a part of when released.
        </p>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 lg:mt-[50px]
           sm:max-w-[1070px] lg:max-w-[570px] 
          sm:tracking-wide sm:leading-9 sm:text-[30px]`}
        >
          Your comment or review will be greatly appreciated. Thank you.
        </p>
      </div>
      <div className="sm:mt-[80px] xs:mt-[80px]">
        {showCommentField && (
          <>
            {/* <div>
              <CssTextField
                sx={{ fontSize: 35, color: "white" }}
                ref={textInputRef}
                required
                label="Name"
                id="filled-hidden-label-small"
                variant="standard"
                size="medium"
                error={!name}
                helperText="Please enter your name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div style={{ marginTop: 25 }}>
              <CssTextField
                ref={textInputRef}
                required
                fullWidth
                label="Comment"
                id="filled-hidden-label-small"
                variant="standard"
                size="meduim"
                multiline
                error={!comment}
                helperText="Please enter a comment"
                onChange={(event) => {
                  setComment(event.target.value);
                }}
              />
            </div> */}
            <div style={{ flex: 1 }}>
              <form onSubmit={sendComment}>
                <div>
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Comment
                    <textarea
                      type="text"
                      name="comment"
                      value={comment}
                      onChange={(event) => {
                        setComment(event.target.value);
                      }}
                    />
                  </label>
                </div>
              </form>
            </div>
            <div style={{ marginTop: 15 }}>
              <Button
                // className={classes.root}
                variant="contained"
                disabled={!name || !comment}
                onClick={sendComment}
                color="success"
                size="large"
                style={{ fontSize: 40, borderRadius: 10 }}
              >
                Send
              </Button>
            </div>{" "}
          </>
        )}

        {showComment && (
          <div>
            <p
              style={{ color: "tomato" }}
              className={`${styles.paragraph} max-w-[470px] mt-5 lg:mt-[50px]
           sm:max-w-[1070px] lg:max-w-[570px] 
          sm:tracking-wide sm:leading-9 sm:text-[30px]`}
            >
              Thank you for sending a comment. Please share this site with
              friends and family.
            </p>
          </div>
        )}

        <div
          className={`${styles.flexCenter} sm:ml-0 ml-0 sm:mt-0 sm:mt-[25px] lg:mt-[80px] sm:mt-[80px] xs:mt-[80px]`}
        >
          <p
            style={{ color: "white" }}
            className={`${styles.paragraph} max-w-[470px] mt-5 lg:mt-[-50px] sm:max-w-[1070px] lg:max-w-[570px]
             sm:tracking-wide sm:leading-10 sm:text-[30px]`}
          >
            Also, as{" "}
            <span
              className="lg:text-[25px] sm:text-[30px] xs:text-[25px]"
              style={{
                fontFamily: "Mochiy Pop One",
                color: "tomato",
              }}
            >
              oFtac
            </span>{" "}
            is still in production, angel investors and team members are needed.
            If you will like to a part of the founding team, or you will like to
            know more about us , please do reach out to us via email
            <span style={{ color: "red" }}> oftacng@gmail.com </span>or send a
            messages on WhatsApp{" "}
            <span style={{ color: "red" }}> +2349074492272</span> and tell us
            what you will like to be part of.
          </p>
        </div>
      </div>
    </section>
  );
}
